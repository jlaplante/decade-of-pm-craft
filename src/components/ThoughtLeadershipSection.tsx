import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Mic, Users, ExternalLink } from "lucide-react";

const ThoughtLeadershipSection = () => {
  const courses = [
    {
      title: "Exploring A Career in Product Management",
      platform: "PluralSight",
      icon: <BookOpen className="w-5 h-5" />,
      url: "https://www.pluralsight.com/courses/exploring-product-management-career"
    },
    {
      title: "Serving in Agile Teams",
      platform: "PluralSight", 
      icon: <Users className="w-5 h-5" />,
      url: "https://www.pluralsight.com/courses/serving-on-agile-teams"
    },
    {
      title: "Product Management as It Is",
      platform: "Educative.io",
      icon: <BookOpen className="w-5 h-5" />,
      url: "https://www.educative.io/courses/product-management-essentials-in-agile-environments"
    },
    {
      title: "What to Expect from Product Management",
      platform: "TechLeadersLaunchpad.com",
      icon: <BookOpen className="w-5 h-5" />,
      url: "https://techleaderslaunchpad.com/courses/what-to-expect-from-product-management"
    }
  ];

  const speaking = [
    {
      event: "Innovation Summit 2024",
      location: "Kuala Lumpur, Malaysia",
      year: "2024"
    },
    {
      event: "Product Management Festival",
      location: "Zurich, Switzerland", 
      year: "2022"
    },
    {
      event: "Product Management Festival",
      location: "Zurich, Switzerland",
      year: "2020"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Thought Leadership
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sharing knowledge through courses, speaking engagements, and educational content 
              to help grow the next generation of product leaders.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Courses */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-primary rounded-xl text-white">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Courses Authored</h3>
              </div>
              
              <div className="space-y-4">
                {courses.map((course, index) => (
                  <Card 
                    key={index} 
                    className="hover-scale bg-gradient-card border-0 shadow-primary cursor-pointer transition-all duration-200 hover:shadow-accent"
                    onClick={() => window.open(course.url, '_blank', 'noopener,noreferrer')}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                          {course.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-2 leading-relaxed">
                            {course.title}
                          </h4>
                          <Badge variant="secondary" className="font-medium">
                            {course.platform}
                          </Badge>
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Speaking */}
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-accent rounded-xl text-white">
                  <Mic className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Conference Speaking</h3>
              </div>
              
              <div className="space-y-4">
                {speaking.map((event, index) => (
                  <Card key={index} className="hover-scale bg-gradient-card border-0 shadow-accent">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-accent/10 rounded-lg text-accent">
                            <Mic className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">
                              {event.event}
                            </h4>
                            <p className="text-muted-foreground">
                              {event.location}
                            </p>
                          </div>
                        </div>
                        <Badge variant="outline" className="font-medium">
                          {event.year}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Skills & Certifications */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-bold mb-8 text-center">Skills & Certifications</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover-scale bg-gradient-card border-0 shadow-primary">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold mb-3">AI & Development</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>GenAI & LLMs</div>
                    <div>Prompt Engineering</div>
                    <div>AWS Bedrock</div>
                    <div>AI-first Development</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale bg-gradient-card border-0 shadow-primary">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold mb-3">Product Management</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>Roadmap Planning</div>
                    <div>Backlog Management</div>
                    <div>KPIs & OKRs</div>
                    <div>Cross-functional Leadership</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale bg-gradient-card border-0 shadow-primary">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold mb-3">Technical</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>AWS Certified</div>
                    <div>SQL & Databases</div>
                    <div>Ruby on Rails</div>
                    <div>JavaScript/Node.js</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale bg-gradient-card border-0 shadow-primary">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold mb-3">Leadership</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>Public Speaking</div>
                    <div>Team Mentoring</div>
                    <div>Data Analysis</div>
                    <div>Strategic Planning</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThoughtLeadershipSection;