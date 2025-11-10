export const heroImages = [
  'https://images.unsplash.com/photo-1699210260087-347545f89de6',
  'https://images.unsplash.com/photo-1675654871683-abf6524f68c6',
  'https://images.unsplash.com/photo-1656497119922-068c6a5e1193'
];

export const products = [
  {
    id: 1,
    name: 'Berbere',
    description: 'A complex and aromatic blend of spices that forms the heart of Ethiopian cuisine. Rich, warm, and slightly spicy.',
    image: 'https://images.unsplash.com/photo-1635946680540-c097bf04a673',
    featured: true
  },
  {
    id: 2,
    name: 'Shiro',
    description: 'Finely ground chickpea flour mixed with spices. The base for Ethiopia\'s beloved shiro wat stew.',
    image: 'https://images.unsplash.com/photo-1594394489669-7846bc8ae5c4',
    featured: true
  },
  {
    id: 3,
    name: 'Chili Powder (Mitmita)',
    description: 'A fiery spice blend with a distinctive kick. Perfect for adding bold flavor to traditional dishes and meat preparations.',
    image: 'https://images.unsplash.com/photo-1741010812421-2b5bff9f95fc',
    featured: true
  },
  {
    id: 4,
    name: 'Powder Roasted Barley (Beso)',
    description: 'Traditional roasted barley powder, a nutritious and flavorful ingredient used in Ethiopian beverages and dishes.',
    image: 'https://images.pexels.com/photos/531446/pexels-photo-531446.jpeg',
    featured: true
  },
  {
    id: 5,
    name: 'Porridge',
    description: 'Premium quality porridge blend, perfect for a wholesome and traditional Ethiopian breakfast.',
    image: 'https://images.unsplash.com/photo-1501432781167-c0ccfd492297',
    featured: true
  },
  {
    id: 6,
    name: 'Bula',
    description: 'A traditional Ethiopian flour blend made from roasted grains, rich in nutrients and authentic flavor.',
    image: 'https://images.unsplash.com/photo-1580116270858-8a0d62b15426',
    featured: true
  },
  {
    id: 7,
    name: 'Powder Emmer Wheat',
    description: 'Ancient grain flour with a nutty flavor and exceptional nutritional value, ideal for traditional Ethiopian baking.',
    image: 'https://images.pexels.com/photos/5480037/pexels-photo-5480037.jpeg',
    featured: true
  }
];

export const companyInfo = {
  name: 'Konjo Foods',
  tagline: 'Authentic Ethiopian Spices from Heart to Table',
  mission: 'At Konjo Foods, we bring the authentic taste of Ethiopia to your kitchen. Our traditional spices are carefully sourced from the highlands of Ethiopia, where generations of farmers have perfected their craft. We work directly with local communities to ensure the highest quality while supporting sustainable farming practices.',
  story: 'Founded with a passion for sharing Ethiopian culinary heritage, Konjo Foods is committed to preserving traditional methods while bringing authentic flavors to the world. Every spice blend we create follows time-honored recipes, ensuring you experience the true taste of Ethiopia in every dish.',
  contact: {
    email: 'michaelgetuk@gmail.com',
    phone: '+1 (555) 123-4567',
    address: '123 Spice Lane, Ethiopian Quarter, City, State 12345'
  },
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com'
  }
};

export const mockContactSubmit = (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Mock contact form submission:', formData);
      resolve({ success: true, message: 'Message sent successfully!' });
    }, 1000);
  });
};