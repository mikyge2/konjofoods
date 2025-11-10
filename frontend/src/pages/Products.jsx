import { products } from '../mock';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Sparkles } from 'lucide-react';

export const Products = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-brand-red via-brand-dark-red to-brand-red text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6">
            <span className="text-white font-semibold text-sm tracking-wide">OUR COLLECTION</span>
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Our <span className="text-brand-gold">Products</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto">
            Premium Ethiopian spices crafted with tradition and care
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-white to-cream-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {products.map((product, index) => (
              <Card key={product.id} 
                className="border-none shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white rounded-3xl"
                style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="h-72 sm:h-80 overflow-hidden relative bg-gradient-to-br from-gray-50 to-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {product.featured && (
                    <Badge className="absolute top-4 right-4 bg-brand-gold/95 backdrop-blur-sm text-brand-black border-none px-4 py-2 shadow-lg font-semibold rounded-full">
                      <Sparkles size={16} className="mr-1" />
                      Featured
                    </Badge>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white text-sm font-light">Premium Quality • Authentic Taste</p>
                  </div>
                </div>
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-brand-black mb-3 group-hover:text-brand-red transition-colors">{product.name}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-brand-black mb-6">
            More Spices Coming Soon
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            We're constantly expanding our selection of authentic Ethiopian spices. Check back soon for new additions to our product line, including specialty blends and regional varieties.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Have a specific spice in mind? Contact us and let us know what you're looking for!
          </p>
        </div>
      </section>
    </div>
  );
};