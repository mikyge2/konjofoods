import { products } from '../mock';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Sparkles } from 'lucide-react';

export const Products = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-spice to-warm-orange text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-white/90">
            Premium Ethiopian spices crafted with tradition and care
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-cream-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {products.map((product) => (
              <Card key={product.id} className="border-none shadow-xl overflow-hidden group hover:shadow-2xl transition-all hover:-translate-y-2 bg-white">
                <div className="h-80 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.featured && (
                    <Badge className="absolute top-4 right-4 bg-warm-gold text-warm-brown border-none px-4 py-2">
                      <Sparkles size={16} className="mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold text-warm-brown mb-4">{product.name}</h3>
                  <p className="text-lg text-warm-brown/80 leading-relaxed">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-warm-brown mb-6">
            More Spices Coming Soon
          </h2>
          <p className="text-lg text-warm-brown/70 leading-relaxed mb-8">
            We're constantly expanding our selection of authentic Ethiopian spices. Check back soon for new additions to our product line, including specialty blends and regional varieties.
          </p>
          <p className="text-lg text-warm-brown/70 leading-relaxed">
            Have a specific spice in mind? Contact us and let us know what you're looking for!
          </p>
        </div>
      </section>
    </div>
  );
};