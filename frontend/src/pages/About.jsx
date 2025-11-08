import { companyInfo, heroImages } from '../mock';
import { Heart, Users, Leaf, Globe } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

export const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-brand-red to-brand-dark-red text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">Our Story</h1>
          <p className="text-xl text-white/95 drop-shadow-md">
            Bringing the authentic taste of Ethiopia to kitchens around the world
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-brand-black mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {companyInfo.mission}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {companyInfo.story}
              </p>
            </div>
            <div className="h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src={heroImages[1]}
                alt="Ethiopian spices"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-cream-bg">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black text-center mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-brand-red/10 rounded-full flex items-center justify-center">
                  <Heart className="text-brand-red" size={32} />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-3">Authenticity</h3>
                <p className="text-gray-700">
                  True to traditional Ethiopian recipes and preparation methods
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-brand-red/10 rounded-full flex items-center justify-center">
                  <Users className="text-brand-red" size={32} />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-3">Community</h3>
                <p className="text-gray-700">
                  Supporting local Ethiopian farmers and their families
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-brand-red/10 rounded-full flex items-center justify-center">
                  <Leaf className="text-brand-red" size={32} />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-3">Sustainability</h3>
                <p className="text-gray-700">
                  Committed to eco-friendly and sustainable farming practices
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-brand-red/10 rounded-full flex items-center justify-center">
                  <Globe className="text-brand-red" size={32} />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-3">Quality</h3>
                <p className="text-gray-700">
                  Premium spices carefully selected for exceptional flavor
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src={heroImages[2]}
                alt="Spice preparation"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-brand-black mb-6">Ethiopian Heritage</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ethiopia's culinary tradition is one of the world's most ancient and sophisticated. Our spices are the foundation of dishes that have been perfected over millennia.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                From the highlands where our berbere spices grow to your kitchen table, we ensure every step honors this rich heritage.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                When you choose Konjo Foods, you're not just buying spices – you're becoming part of a story that spans generations and continents.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};