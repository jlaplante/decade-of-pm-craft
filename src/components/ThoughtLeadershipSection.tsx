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
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
              Thought Leadership
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Sharing knowledge through courses, speaking engagements, and educational content 
              to help grow the next generation of product leaders.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Courses */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-accent accent-glow rounded-lg text-primary">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">Courses Authored</h3>
              </div>
              
              <div className="space-y-3">
                {courses.map((course, index) => (
                  <Card 
                    key={index} 
                    className="hover-lift cursor-pointer border-border bg-card shadow-elegant"
                    onClick={() => window.open(course.url, '_blank', 'noopener,noreferrer')}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                          {course.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground mb-2 leading-relaxed">
                            {course.title}
                          </h4>
                          <Badge variant="secondary" className="text-xs">
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
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-accent accent-glow rounded-lg text-primary">
                  <Mic className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">Conference Speaking</h3>
              </div>
              
              <div className="space-y-3">
                {speaking.map((event, index) => (
                  <Card key={index} className="hover-lift border-border bg-card shadow-elegant">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-accent accent-glow rounded-lg text-primary">
                            <Mic className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground mb-1">
                              {event.event}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {event.location}
                            </p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {event.year}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-8 text-center">Core Skills</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="hover-lift border-border bg-card shadow-elegant accent-glow">
                <CardContent className="p-4 text-center">
                  <h4 className="font-medium mb-3">AI & Development</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>GenAI & LLMs</div>
                    <div>Prompt Engineering</div>
                    <div>AWS Bedrock</div>
                    <div>AI-first Development</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift border-border bg-card shadow-elegant">
                <CardContent className="p-4 text-center">
                  <h4 className="font-medium mb-3">Product Management</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>Roadmap Planning</div>
                    <div>Backlog Management</div>
                    <div>KPIs & OKRs</div>
                    <div>Cross-functional Leadership</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift border-border bg-card shadow-elegant">
                <CardContent className="p-4 text-center">
                  <h4 className="font-medium mb-3">Technical Skills</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>SQL & Databases</div>
                    <div>Ruby on Rails</div>
                    <div>JavaScript/Node.js</div>
                    <div>API Development</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift border-border bg-card shadow-elegant accent-glow">
                <CardContent className="p-4 text-center">
                  <h4 className="font-medium mb-3">Leadership</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>Public Speaking</div>
                    <div>Team Mentoring</div>
                    <div>Data Analysis</div>
                    <div>Strategic Planning</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-8 text-center">Certifications</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <Card className="hover-lift border-border bg-card">
                <CardContent className="p-4 text-center">
                  <h4 className="font-medium mb-3">AWS Certified</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>Cloud Practitioner</div>
                    <div>Solutions Architect</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift border-border bg-card">
                <CardContent className="p-4 text-center">
                  <h4 className="font-medium mb-3">Product Management</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>Certified Scrum Master</div>
                    <div>Agile Product Owner</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift border-border bg-card">
                <CardContent className="p-4 text-center">
                  <h4 className="font-medium mb-3">Education</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>Course Instructor</div>
                    <div>Content Creator</div>
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