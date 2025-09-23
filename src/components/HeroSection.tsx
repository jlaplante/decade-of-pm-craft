import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Linkedin, MapPin } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.png";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Prague, Czechia</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <h1 className="text-4xl lg:text-5xl font-semibold leading-tight text-foreground">
                    Jon La Plante
                  </h1>
                  <a 
                    href="https://linkedin.com/in/jonlaplante"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors hover-lift"
                    aria-label="Jon La Plante on LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
                
                <h2 className="text-xl lg:text-2xl font-normal text-muted-foreground">
                  AI-First Product Leader & Manager
                </h2>
                
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  <span className="font-medium text-foreground">10+ years</span> driving measurable growth in marketplace ecosystems, 
                  AI-powered platforms, and enterprise products. From <span className="font-medium text-foreground">0→3,500 users</span> as founder 
                  to <span className="font-medium text-foreground">800k→1.4M sessions</span> at enterprise scale.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={scrollToContact}
                  size="lg" 
                  className="hover-lift font-medium"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
                
                <Button 
                  onClick={scrollToExperience}
                  variant="outline" 
                  size="lg"
                  className="hover-lift font-medium"
                >
                  View Experience
                  <ArrowDown className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Portrait */}
            <div className="relative">
              <div className="relative max-w-md mx-auto">
                <img 
                  src={heroPortrait} 
                  alt="Jon La Plante - Product Manager"
                  className="w-full rounded-lg shadow-sm hover-lift"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;