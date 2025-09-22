import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Zap, Award, MapPin, Calendar } from "lucide-react";
import CompanyDetailModal from "@/components/CompanyDetailModal";
import { companyData, detailedRoles } from "@/data/companyData";

const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null);

  const handleCardClick = (experienceId: string) => {
    setSelectedExperience(experienceId);
  };

  const handleCloseModal = () => {
    setSelectedExperience(null);
  };
  const experiences = [
    {
      id: "2-hour-learning",
      company: "2 Hour Learning",
      role: "AI-First Senior Product Manager",
      period: "Nov 2024 – Jul 2025",
      location: "Contract",
      type: "Current Role",
      description: "Leading AI-powered EdTech platform development with multi-vendor ecosystem coordination.",
      highlights: [
        "Managing 4 outsourced partners + internal development team",
        "Rapid MVP prototyping using AI-powered development tools",
        "Full product lifecycle ownership as Product Owner & Scrum Master"
      ],
      metrics: [],
      icon: <Zap className="w-6 h-6" />,
      gradient: "bg-gradient-primary"
    },
    {
      id: "accionlabs-veracode",
      company: "AccionLabs + Veracode",
      role: "Senior Technical Product Manager",
      period: "March 2023 – October 2024",
      location: "Contract",
      type: "Technical Leadership",
      description: "Led technical strategy for Static Application Security Testing (SAST) and data platform transformation.",
      highlights: [
        "Unified multiple static analysis scanners into single engine",
        "Directed company's transition from monolith to microservices",
        "Led remote teams across US and Prague, CZ"
      ],
      metrics: [],
      icon: <Award className="w-6 h-6" />,
      gradient: "bg-gradient-accent"
    },
    {
      id: "msd",
      company: "MSD",
      role: "Senior Product Manager",
      period: "January 2018 – November 2020", 
      location: "Enterprise",
      type: "High Impact",
      description: "Drove significant growth and performance improvements across health economics and enterprise portal products.",
      highlights: [
        "Simplified product codebase and doubled release cadence",
        "Introduced Mathematica model support with 50% faster execution",
        "Led data-driven product decisions and rapid experimentation"
      ],
      metrics: [
        { label: "Monthly Sessions Growth", value: "800k → 1.4M", change: "+75%" },
        { label: "Employee Engagement", value: "~30% increase", change: "in articles read" },
        { label: "Execution Time", value: "50% reduction", change: "performance boost" }
      ],
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: "bg-gradient-primary"
    },
    {
      id: "everli",
      company: "Everli",
      role: "Senior Product Manager, Retail + Catalogue",
      period: "November 2021 – March 2023",
      location: "Contract",
      type: "Marketplace",
      description: "Optimized marketplace partner integrations and mentored product management teams.",
      highlights: [
        "Decreased partner integration time by 2+ weeks (~30%)",
        "Introduced no-code/low-code automation tools",
        "Mentored junior and mid-level Product Managers"
      ],
      metrics: [
        { label: "Integration Time", value: "30% reduction", change: "2+ weeks saved" }
      ],
      icon: <Users className="w-6 h-6" />,
      gradient: "bg-gradient-accent"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Experience & Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A decade of driving measurable growth, leading cross-functional teams, 
              and delivering products that scale from startups to enterprise.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={exp.id} 
                className="overflow-hidden hover-scale bg-gradient-card border-0 shadow-primary animate-fade-in cursor-pointer transition-all duration-200 hover:shadow-accent"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleCardClick(exp.id)}
              >
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-8">
                    {/* Company & Role Info */}
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl text-white ${exp.gradient}`}>
                          {exp.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="secondary" className="font-medium">
                              {exp.type}
                            </Badge>
                            <Badge variant="outline" className="text-xs bg-accent/10 text-accent border-accent/20">
                              Click for details
                            </Badge>
                          </div>
                          <h3 className="text-2xl font-bold text-foreground mb-1">
                            {exp.role}
                          </h3>
                          <h4 className="text-xl font-semibold text-primary mb-3">
                            {exp.company}
                          </h4>
                          <div className="flex items-center gap-4 text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    {/* Highlights & Metrics */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h5 className="font-semibold text-foreground mb-3">Key Achievements</h5>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {exp.metrics.length > 0 && (
                        <div>
                          <h5 className="font-semibold text-foreground mb-3">Measurable Impact</h5>
                          <div className="space-y-3">
                            {exp.metrics.map((metric, idx) => (
                              <div key={idx} className="bg-background/50 rounded-lg p-4">
                                <div className="text-sm text-muted-foreground mb-1">
                                  {metric.label}
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-2xl font-bold text-primary">
                                    {metric.value}
                                  </span>
                                  <Badge variant="outline" className="text-green-600 border-green-200">
                                    {metric.change}
                                  </Badge>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Company Detail Modal */}
          <CompanyDetailModal
            isOpen={selectedExperience !== null}
            onClose={handleCloseModal}
            company={selectedExperience ? companyData[selectedExperience] : null}
            role={selectedExperience ? detailedRoles[selectedExperience] : null}
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;