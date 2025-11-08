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
              <h2 className="text-4xl font-bold text-warm-brown mb-8">Get In Touch</h2>
              <p className="text-lg text-warm-brown/70 mb-8 leading-relaxed">
                Have questions about our products or want to learn more about our sourcing practices? We're here to help!
              </p>

              <div className="space-y-6">
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-spice/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary-spice" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-warm-brown mb-1">Email</h3>
                      <a
                        href={`mailto:${companyInfo.contact.email}`}
                        className="text-warm-brown/70 hover:text-primary-spice transition-colors"
                      >
                        {companyInfo.contact.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-spice/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary-spice" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-warm-brown mb-1">Phone</h3>
                      <a
                        href={`tel:${companyInfo.contact.phone}`}
                        className="text-warm-brown/70 hover:text-primary-spice transition-colors"
                      >
                        {companyInfo.contact.phone}
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-spice/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary-spice" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-warm-brown mb-1">Address</h3>
                      <p className="text-warm-brown/70">{companyInfo.contact.address}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-warm-brown mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-warm-brown font-medium mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="border-warm-brown/20 focus:border-primary-spice"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-warm-brown font-medium mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="border-warm-brown/20 focus:border-primary-spice"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-warm-brown font-medium mb-2 block">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-warm-brown/20 focus:border-primary-spice"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-warm-brown font-medium mb-2 block">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="border-warm-brown/20 focus:border-primary-spice min-h-32"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary-spice hover:bg-primary-spice/90 text-white py-6 text-lg font-semibold group"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};