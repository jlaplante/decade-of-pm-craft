import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Linkedin, MapPin } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-white/80">
                  <MapPin className="w-4 h-4" />
                  <span>Prague, Czechia</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Jon La Plante
                </h1>
                
                <h2 className="text-2xl lg:text-3xl font-light text-white/90">
                  AI-First Product Leader & Manager
                </h2>
                
                <p className="text-xl text-white/80 max-w-2xl">
                  <span className="font-semibold text-white">10+ years</span> driving measurable growth in marketplace ecosystems, 
                  AI-powered platforms, and enterprise products. From <span className="font-semibold text-white">0→3,500 users</span> as founder 
                  to <span className="font-semibold text-white">800k→1.4M sessions</span> at enterprise scale.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={scrollToContact}
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 hover-scale shadow-glow px-8 py-3 text-lg font-semibold"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
                
                <Button 
                  onClick={scrollToExperience}
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-3 text-lg"
                >
                  View Experience
                  <ArrowDown className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <!--a 
                  href="mailto:jon.laplante@jonlaplante.com"
                  className="text-white/70 hover:text-white transition-colors hover-scale"
                  aria-label="Email Jon La Plante"
                >
                  <Mail className="w-6 h-6" />
                </a-->
                <a 
                  href="https://linkedin.com/in/jonlaplante"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors hover-scale"
                  aria-label="Jon La Plante on LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Portrait */}
            <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-accent rounded-2xl blur-xl opacity-50 animate-pulse-glow"></div>
                <img 
                  src={heroPortrait} 
                  alt="Jon La Plante - Product Manager"
                  className="relative w-full max-w-md mx-auto rounded-2xl shadow-accent hover-glow"
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