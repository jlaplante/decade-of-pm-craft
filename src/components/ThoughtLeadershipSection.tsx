import { useEffect, useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { BookOpen, Mic, Users, ExternalLink } from "lucide-react";

const ThoughtLeadershipSection = () => {
  const importedProjects = [
    {
      id: "erica-framework",
      title: "Erica Framework",
      description: "A structured approach to framing product insights and narratives.",
      path: "/imports/Erica Framework/index.html",
    },
    {
      id: "insight-intersections",
      title: "Insight Intersections",
      description: "A visual tool to combine insights and discover opportunities.",
      path: "/imports/Insight Intersections/index.html",
    },
  ];

  const [selectedProject, setSelectedProject] = useState<null | typeof importedProjects[number]>(null);
  const [projectHtml, setProjectHtml] = useState<string>("");
  const [isLoadingProject, setIsLoadingProject] = useState<boolean>(false);

  const selectedProjectBaseDir = useMemo(() => {
    if (!selectedProject) return "";
    const parts = selectedProject.path.split("/");
    parts.pop();
    return parts.join("/") + "/";
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject) {
      setProjectHtml("");
      return;
    }
    let isCancelled = false;
    const load = async () => {
      try {
        setIsLoadingProject(true);
        const res = await fetch(selectedProject.path);
        const text = await res.text();
        if (isCancelled) return;

        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");

        // Remove navbars/headers/footers if present
        doc.querySelectorAll("nav, header, footer").forEach((el) => el.remove());

        // Prefer the main content container; fall back to body
        const container =
          doc.querySelector("main") ||
          doc.querySelector(".container") ||
          doc.querySelector("#root") ||
          doc.body;

        // Rewrite asset paths to absolute based on project folder
        container.querySelectorAll<HTMLImageElement>("img[src]").forEach((img) => {
          const src = img.getAttribute("src") || "";
          if (!src.startsWith("http") && !src.startsWith("/")) {
            img.setAttribute("src", selectedProjectBaseDir + src);
          }
        });
        container.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((a) => {
          const href = a.getAttribute("href") || "";
          if (href.startsWith("#")) return;
          if (!href.startsWith("http") && !href.startsWith("/")) {
            a.setAttribute("href", selectedProjectBaseDir + href);
          }
          // open external links in new tab for safety
          if (/^https?:\/\//.test(a.getAttribute("href") || "")) {
            a.setAttribute("target", "_blank");
            a.setAttribute("rel", "noopener noreferrer");
          }
        });
        // Remove scripts for safety
        container.querySelectorAll("script").forEach((s) => s.remove());

        const html = container.innerHTML;
        setProjectHtml(html);
      } catch (e) {
        setProjectHtml("<p class=\"text-sm text-red-600\">Failed to load content.</p>");
      } finally {
        if (!isCancelled) setIsLoadingProject(false);
      }
    };
    load();
    return () => {
      isCancelled = true;
    };
  }, [selectedProject, selectedProjectBaseDir]);
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
            {/* Left column: Frameworks & Tools + Conference Speaking */}
            <div className="space-y-12">
              {/* Imported Projects */}
              <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-accent accent-glow rounded-lg text-primary">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">Frameworks & Tools</h3>
              </div>

              <div className="space-y-3">
                {importedProjects.map((proj) => (
                  <Card
                    key={proj.id}
                    className="hover-lift cursor-pointer border-border bg-card shadow-elegant"
                    onClick={() => setSelectedProject(proj)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                          <Users className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground mb-1 leading-relaxed">
                            {proj.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">{proj.description}</p>
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

            {/* Right column: Courses */}
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

      {/* Modal to render imported static HTML natively */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-6xl w-[95vw] h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
          </DialogHeader>
          <div className="px-2 pb-6">
            {isLoadingProject ? (
              <div className="text-sm text-muted-foreground">Loading…</div>
            ) : (
              <div className="prose prose-zinc dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: projectHtml }} />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ThoughtLeadershipSection;