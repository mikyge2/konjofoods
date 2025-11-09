import { products } from '../mock';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Sparkles } from 'lucide-react';

export const Products = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-brand-red to-brand-dark-red text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">Our Products</h1>
          <p className="text-xl text-white/95 drop-shadow-md">
            Premium Ethiopian spices crafted with tradition and care
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-cream-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {products.map((product) => (
              <Card key={product.id} className="border border-gray-200 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
                <div className="h-60 sm:h-72 overflow-hidden relative bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {product.featured && (
                    <Badge className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-brand-gold text-brand-black border-none px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg text-xs sm:text-sm">
                      <Sparkles size={14} className="mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>
                <CardContent className="p-5 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-black mb-2 sm:mb-3">{product.name}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{product.description}</p>
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