# Import necessary libraries
from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone

# Define the root directory and load environment variables from the .env file
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Establish a connection to the MongoDB database
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main FastAPI application instance
app = FastAPI()

# Create a router with the /api prefix for all its routes
api_router = APIRouter(prefix="/api")


# Define the Pydantic models for data validation and serialization
class StatusCheck(BaseModel):
    # Configuration to ignore extra fields like MongoDB's _id
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Define the API routes and add them to the router
@api_router.get("/")
async def root():
    """A simple root endpoint to confirm the API is running."""
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    """Creates a new status check and stores it in the database."""
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert the status object to a dictionary for database insertion
    doc = status_obj.model_dump()
    # Serialize the datetime object to an ISO 8601 string for MongoDB compatibility
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    """Retrieves a list of all status checks from the database."""
    # Find all status checks and exclude the internal _id field from the results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert the ISO 8601 timestamp strings back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Include the API router in the main FastAPI application
app.include_router(api_router)

# Add CORS middleware to allow cross-origin requests
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    # Allow origins from the environment variable, or all origins if not set
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure the logging settings for the application
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    """Close the MongoDB connection when the application shuts down."""
    client.close()
