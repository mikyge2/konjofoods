import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Heart, Award } from 'lucide-react';
import { heroImages, products } from '../mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Overlay for Readability */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImages[0]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/75 to-brand-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20 text-center md:text-left">
          <div className="max-w-3xl mx-auto md:mx-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 animate-fade-in drop-shadow-2xl">
              Konjo Foods
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-brand-gold mb-6 md:mb-8 font-semibold drop-shadow-lg">
              Authentic Ethiopian Spices from Heart to Table
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/95 mb-8 md:mb-10 leading-relaxed drop-shadow-lg max-w-2xl">
              Experience the rich heritage of Ethiopian cuisine with our carefully sourced, traditional spice blends.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <Link to="/products" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-brand-red hover:bg-brand-dark-red text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold group shadow-xl hover:shadow-2xl transition-all">
                  Explore Our Spices
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Link to="/about" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-brand-black px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all">
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-black text-center mb-10 sm:mb-12 md:mb-16">
            Why Choose Konjo Foods?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-brand-red/10 rounded-full flex items-center justify-center">
                  <Sparkles className="text-brand-red" size={28} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-black mb-3 sm:mb-4">Authentic Quality</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Sourced directly from Ethiopian highlands, our spices maintain their authentic flavor and aroma.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-brand-red/10 rounded-full flex items-center justify-center">
                  <Heart className="text-brand-red" size={28} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-black mb-3 sm:mb-4">Traditional Methods</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  We follow time-honored recipes and preparation methods passed down through generations.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white sm:col-span-2 lg:col-span-1">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-brand-red/10 rounded-full flex items-center justify-center">
                  <Award className="text-brand-red" size={28} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-black mb-3 sm:mb-4">Community Support</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  We work directly with local farmers, ensuring fair practices and sustainable farming.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-cream-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
              Our Signature Spices
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Discover the authentic flavors that define Ethiopian cuisine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="border border-gray-200 shadow-lg overflow-hidden group hover:shadow-2xl transition-all bg-white">
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-brand-black mb-3">{product.name}</h3>
                  <p className="text-gray-700 leading-relaxed">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" className="bg-brand-red hover:bg-brand-dark-red text-white px-8 py-6 text-lg font-semibold group shadow-lg">
                View All Products
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-red to-brand-dark-red text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Ready to Experience Authentic Ethiopian Flavors?
          </h2>
          <p className="text-xl mb-8 text-white/95 drop-shadow-md">
            Get in touch with us to learn more about our products and sourcing practices.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-brand-red hover:bg-cream-bg hover:text-brand-black px-8 py-6 text-lg font-semibold shadow-xl">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};