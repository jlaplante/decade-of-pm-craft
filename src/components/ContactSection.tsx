import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual form handler)
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your interest. I'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Prague, Czechia",
      href: null
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/jonlaplante",
      href: "https://linkedin.com/in/jonlaplante"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-contact">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Ready to drive measurable growth and innovation? I'm always interested in 
              discussing new opportunities and product challenges.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-white/60 focus:bg-white/15"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-white/60 focus:bg-white/15"
                      />
                    </div>
                  </div>
                  
                  <Input
                    name="company"
                    placeholder="Company (Optional)"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-white/60 focus:bg-white/15"
                  />
                  
                  <Textarea
                    name="message"
                    placeholder="Tell me about your product challenges or opportunity..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-white/60 focus:bg-white/15 resize-none"
                  />
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-accent-foreground hover:bg-white/90 font-medium shadow-elegant"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-8">Get In Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="p-3 bg-white/10 rounded-lg text-white group-hover:bg-white/20 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-white/60 text-sm">{item.label}</div>
                      {item.href ? (
                        <a 
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-white hover:text-white/80 transition-colors story-link font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-white font-medium">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-white/10 rounded-lg backdrop-blur-lg">
                <h4 className="text-lg font-medium text-white mb-4">
                  Currently Available For
                </h4>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center gap-3">
                    <div className="accent-dot"></div>
                    Senior Product Management roles
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="accent-dot"></div>
                    AI-first product leadership
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="accent-dot"></div>
                    Strategic product consulting
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="accent-dot"></div>
                    Speaking engagements
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;