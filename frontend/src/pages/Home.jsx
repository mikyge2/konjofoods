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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImages[0]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-warm-brown/90 via-warm-brown/70 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center md:text-left">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-cream-bg mb-6 animate-fade-in">
              Konjo Foods
            </h1>
            <p className="text-2xl md:text-3xl text-warm-gold mb-8 font-medium">
              Authentic Ethiopian Spices from Heart to Table
            </p>
            <p className="text-lg md:text-xl text-cream-bg/90 mb-10 leading-relaxed">
              Experience the rich heritage of Ethiopian cuisine with our carefully sourced, traditional spice blends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button size="lg" className="bg-primary-spice hover:bg-primary-spice/90 text-white px-8 py-6 text-lg group">
                  Explore Our Spices
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-2 border-cream-bg text-cream-bg hover:bg-cream-bg hover:text-warm-brown px-8 py-6 text-lg">
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-cream-bg">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-brown text-center mb-16">
            Why Choose Konjo Foods?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary-spice/10 rounded-full flex items-center justify-center">
                  <Sparkles className="text-primary-spice" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-warm-brown mb-4">Authentic Quality</h3>
                <p className="text-warm-brown/80 leading-relaxed">
                  Sourced directly from Ethiopian highlands, our spices maintain their authentic flavor and aroma.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary-spice/10 rounded-full flex items-center justify-center">
                  <Heart className="text-primary-spice" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-warm-brown mb-4">Traditional Methods</h3>
                <p className="text-warm-brown/80 leading-relaxed">
                  We follow time-honored recipes and preparation methods passed down through generations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary-spice/10 rounded-full flex items-center justify-center">
                  <Award className="text-primary-spice" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-warm-brown mb-4">Community Support</h3>
                <p className="text-warm-brown/80 leading-relaxed">
                  We work directly with local farmers, ensuring fair practices and sustainable farming.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-warm-brown mb-4">
              Our Signature Spices
            </h2>
            <p className="text-lg text-warm-brown/70 max-w-2xl mx-auto">
              Discover the authentic flavors that define Ethiopian cuisine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="border-none shadow-lg overflow-hidden group hover:shadow-2xl transition-all">
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-warm-brown mb-3">{product.name}</h3>
                  <p className="text-warm-brown/70 leading-relaxed">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" className="bg-primary-spice hover:bg-primary-spice/90 text-white px-8 py-6 text-lg group">
                View All Products
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-spice to-warm-orange text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience Authentic Ethiopian Flavors?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get in touch with us to learn more about our products and sourcing practices.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary-spice hover:bg-cream-bg px-8 py-6 text-lg font-semibold">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};