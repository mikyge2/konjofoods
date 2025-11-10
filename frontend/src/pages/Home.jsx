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
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Enhanced Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImages[0]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-black/95 via-brand-black/80 to-brand-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-block px-6 py-2 bg-brand-gold/20 backdrop-blur-sm rounded-full border border-brand-gold/30 mb-6">
              <span className="text-brand-gold font-semibold text-sm tracking-wide uppercase">Premium Ethiopian Spices</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in leading-tight">
              Konjo <span className="text-brand-gold">Foods</span>
            </h1>
            
            <p className="text-2xl sm:text-3xl md:text-4xl text-white/90 mb-8 font-light leading-relaxed max-w-3xl mx-auto">
              Authentic Ethiopian Spices from Heart to Table
            </p>
            
            <p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              Experience the rich heritage of Ethiopian cuisine with our carefully sourced, traditional spice blends crafted for authentic flavor.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/products" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-brand-red hover:bg-brand-dark-red text-white px-10 py-7 text-lg font-semibold group shadow-2xl hover:shadow-brand-red/50 transition-all rounded-full">
                  Explore Our Spices
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={22} />
                </Button>
              </Link>
              <Link to="/about" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white/80 text-white hover:bg-white hover:text-brand-black px-10 py-7 text-lg font-semibold shadow-xl backdrop-blur-sm transition-all rounded-full">
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-white to-cream-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <span className="inline-block px-4 py-2 bg-brand-red/10 text-brand-red font-semibold text-sm rounded-full mb-4">
              OUR PROMISE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black mb-6">
              Why Choose <span className="text-brand-red">Konjo Foods</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We bring you the finest Ethiopian spices with unwavering commitment to quality and authenticity
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white rounded-2xl overflow-hidden group">
              <CardContent className="p-8 sm:p-10 text-center relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red to-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 bg-gradient-to-br from-brand-red/20 to-brand-gold/20 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                  <Sparkles className="text-brand-red" size={32} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-brand-black mb-4">Authentic Quality</h3>
                <p className="text-gray-600 leading-relaxed">
                  Sourced directly from Ethiopian highlands, our spices maintain their authentic flavor and aroma.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white rounded-2xl overflow-hidden group">
              <CardContent className="p-8 sm:p-10 text-center relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red to-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 bg-gradient-to-br from-brand-red/20 to-brand-gold/20 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                  <Heart className="text-brand-red" size={32} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-brand-black mb-4">Traditional Methods</h3>
                <p className="text-gray-600 leading-relaxed">
                  We follow time-honored recipes and preparation methods passed down through generations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white rounded-2xl overflow-hidden group sm:col-span-2 lg:col-span-1">
              <CardContent className="p-8 sm:p-10 text-center relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red to-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 bg-gradient-to-br from-brand-red/20 to-brand-gold/20 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                  <Award className="text-brand-red" size={32} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-brand-black mb-4">Community Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  We work directly with local farmers, ensuring fair practices and sustainable farming.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-cream-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-black mb-3 sm:mb-4">
              Our Signature Spices
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto px-4">
              Discover the authentic flavors that define Ethiopian cuisine
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="border border-gray-200 shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
                <div className="h-56 sm:h-64 overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-5 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-black mb-2 sm:mb-3">{product.name}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12 px-4">
            <Link to="/products">
              <Button size="lg" className="w-full sm:w-auto bg-brand-red hover:bg-brand-dark-red text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold group shadow-lg hover:shadow-xl transition-all">
                View All Products
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-brand-red to-brand-dark-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 drop-shadow-lg px-4">
            Ready to Experience Authentic Ethiopian Flavors?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/95 drop-shadow-md px-4 max-w-2xl mx-auto">
            Get in touch with us to learn more about our products and sourcing practices.
          </p>
          <Link to="/contact" className="inline-block w-full sm:w-auto px-4">
            <Button size="lg" className="w-full sm:w-auto bg-white text-brand-red hover:bg-cream-bg hover:text-brand-black px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};