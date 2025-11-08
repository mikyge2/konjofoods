import { useState } from 'react';
import { companyInfo, mockContactSubmit } from '../mock';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await mockContactSubmit(formData);
      if (result.success) {
        toast({
          title: 'Success!',
          description: result.message,
          variant: 'default'
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-brand-red to-brand-dark-red text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">Contact Us</h1>
          <p className="text-xl text-white/95 drop-shadow-md">
            We'd love to hear from you. Get in touch with us today!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-cream-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-brand-black mb-8">Get In Touch</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Have questions about our products or want to learn more about our sourcing practices? We're here to help!
              </p>

              <div className="space-y-6">
                <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow bg-white">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-brand-red" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-brand-black mb-1">Email</h3>\n                      <a\n                        href={`mailto:${companyInfo.contact.email}`}\n                        className="text-gray-700 hover:text-brand-red transition-colors"\n                      >\n                        {companyInfo.contact.email}\n                      </a>\n                    </div>\n                  </CardContent>\n                </Card>\n\n                <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow bg-white">\n                  <CardContent className="p-6 flex items-start gap-4">\n                    <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center flex-shrink-0">\n                      <Phone className="text-brand-red" size={24} />\n                    </div>\n                    <div>\n                      <h3 className="text-lg font-semibold text-brand-black mb-1">Phone</h3>\n                      <a\n                        href={`tel:${companyInfo.contact.phone}`}\n                        className="text-gray-700 hover:text-brand-red transition-colors"\n                      >\n                        {companyInfo.contact.phone}\n                      </a>\n                    </div>\n                  </CardContent>\n                </Card>\n\n                <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow bg-white">\n                  <CardContent className="p-6 flex items-start gap-4">\n                    <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center flex-shrink-0">\n                      <MapPin className="text-brand-red" size={24} />\n                    </div>\n                    <div>\n                      <h3 className="text-lg font-semibold text-brand-black mb-1">Address</h3>\n                      <p className="text-gray-700">{companyInfo.contact.address}</p>\n                    </div>\n                  </CardContent>\n                </Card>\n              </div>\n            </div>\n\n            {/* Contact Form */}\n            <div>\n              <Card className="border border-gray-200 shadow-xl bg-white">\n                <CardContent className="p-8">\n                  <h2 className="text-3xl font-bold text-brand-black mb-6">Send Us a Message</h2>\n                  <form onSubmit={handleSubmit} className="space-y-6">\n                    <div>\n                      <Label htmlFor="name" className="text-brand-black font-semibold mb-2 block">\n                        Full Name *\n                      </Label>\n                      <Input\n                        id="name"\n                        name="name"\n                        type="text"\n                        required\n                        value={formData.name}\n                        onChange={handleChange}\n                        className="border-gray-300 focus:border-brand-red focus:ring-brand-red"\n                        placeholder="John Doe"\n                      />\n                    </div>\n\n                    <div>\n                      <Label htmlFor="email" className="text-brand-black font-semibold mb-2 block">\n                        Email Address *\n                      </Label>\n                      <Input\n                        id="email"\n                        name="email"\n                        type="email"\n                        required\n                        value={formData.email}\n                        onChange={handleChange}\n                        className="border-gray-300 focus:border-brand-red focus:ring-brand-red"\n                        placeholder="john@example.com"\n                      />\n                    </div>\n\n                    <div>\n                      <Label htmlFor="phone" className="text-brand-black font-semibold mb-2 block">\n                        Phone Number\n                      </Label>\n                      <Input\n                        id="phone"\n                        name="phone"\n                        type="tel"\n                        value={formData.phone}\n                        onChange={handleChange}\n                        className="border-gray-300 focus:border-brand-red focus:ring-brand-red"\n                        placeholder="+1 (555) 123-4567"\n                      />\n                    </div>\n\n                    <div>\n                      <Label htmlFor="message" className="text-brand-black font-semibold mb-2 block">\n                        Message *\n                      </Label>\n                      <Textarea\n                        id="message"\n                        name="message"\n                        required\n                        value={formData.message}\n                        onChange={handleChange}\n                        className="border-gray-300 focus:border-brand-red focus:ring-brand-red min-h-32"\n                        placeholder="Tell us how we can help you..."\n                      />\n                    </div>\n\n                    <Button\n                      type="submit"\n                      disabled={isSubmitting}\n                      className="w-full bg-brand-red hover:bg-brand-dark-red text-white py-6 text-lg font-semibold group shadow-lg"\n                    >\n                      {isSubmitting ? 'Sending...' : 'Send Message'}\n                      <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />\n                    </Button>\n                  </form>\n                </CardContent>\n              </Card>\n            </div>\n          </div>\n        </div>\n      </section>
    </div>
  );
};