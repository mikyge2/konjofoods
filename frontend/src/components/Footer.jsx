import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { companyInfo } from '../mock';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="https://customer-assets.emergentagent.com/job_ethiopian-flavors/artifacts/4gg21dsu_KonjoFoodsLogo.jpg" 
              alt="Konjo Foods Logo" 
              className="h-20 w-auto mb-4"
            />
            <p className="text-white/90 mb-4">
              Authentic Ethiopian spices bringing traditional flavors to your kitchen.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-brand-gold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-white/90 hover:text-brand-gold transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-white/90 hover:text-brand-gold transition-colors">
                About Us
              </Link>
              <Link to="/products" className="block text-white/90 hover:text-brand-gold transition-colors">
                Products
              </Link>
              <Link to="/contact" className="block text-white/90 hover:text-brand-gold transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-brand-gold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${companyInfo.contact.email}`}
                className="flex items-center gap-2 text-white/90 hover:text-brand-gold transition-colors"
              >
                <Mail size={18} />
                <span>{companyInfo.contact.email}</span>
              </a>
              <a
                href={`tel:${companyInfo.contact.phone}`}
                className="flex items-center gap-2 text-white/90 hover:text-brand-gold transition-colors"
              >
                <Phone size={18} />
                <span>{companyInfo.contact.phone}</span>
              </a>
              <div className="flex items-start gap-2 text-white/90">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>{companyInfo.contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-sm">
              © {currentYear} Konjo Foods. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-brand-gold transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={companyInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-brand-gold transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={companyInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-brand-gold transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};