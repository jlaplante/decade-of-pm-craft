import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Building2, Calendar, MapPin, Users, Target, Zap, Trophy } from "lucide-react";
import { CompanyInfo, DetailedRole } from "@/data/companyData";

interface CompanyDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  company: CompanyInfo | null;
  role: DetailedRole | null;
}

const CompanyDetailModal = ({ isOpen, onClose, company, role }: CompanyDetailModalProps) => {
  if (!company || !role) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <Building2 className="w-6 h-6 text-primary" />
            {company.name}
          </DialogTitle>
        </DialogHeader>

        <div className="grid lg:grid-cols-2 gap-8 mt-6">
          {/* Company Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                Company Overview
              </h3>
              
              <Card className="border-border bg-card">
                <CardContent className="p-6 space-y-4">
                  <div>
                    <Badge variant="secondary" className="mb-3 text-xs">
                      {company.type}
                    </Badge>
                    <p className="text-muted-foreground leading-relaxed">
                      {company.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="font-medium">Scale:</span>
                      <span className="text-muted-foreground">{company.scale}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-primary" />
                      <span className="font-medium">Industry:</span>
                      <span className="text-muted-foreground">{company.industry}</span>
                    </div>
                    {company.founded && (
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="font-medium">Founded:</span>
                        <span className="text-muted-foreground">{company.founded}</span>
                      </div>
                    )}
                    {company.headquarters && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="font-medium">HQ:</span>
                        <span className="text-muted-foreground">{company.headquarters}</span>
                      </div>
                    )}
                    {company.website && (
                      <div className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4 text-primary" />
                        <span className="font-medium">Website:</span>
                        <a 
                          href={`https://${company.website}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 story-link"
                        >
                          {company.website}
                        </a>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h4 className="font-medium mb-3">Key Company Facts</h4>
              <ul className="space-y-2">
                {company.keyFacts.map((fact, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Role Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                My Role & Impact
              </h3>
              
              <Card className="border-border bg-card">
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-foreground mb-1">
                      {role.role}
                    </h4>
                    <div className="flex items-center gap-2 text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{role.period}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {role.context}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                Key Contributions
              </h4>
              <ul className="space-y-2">
                {role.detailedContributions.map((contribution, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            <div>
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-primary" />
                Challenges & Outcomes
              </h4>
              
              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-medium text-muted-foreground mb-2">Challenges Addressed</h5>
                  <ul className="space-y-1">
                    {role.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <div className="w-1 h-1 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-medium text-muted-foreground mb-2">Key Outcomes</h5>
                  <ul className="space-y-1">
                    {role.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {role.technologies.length > 0 && (
              <div>
                <h4 className="font-medium mb-3">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {role.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CompanyDetailModal;