export interface CompanyInfo {
  id: string;
  name: string;
  type: string;
  description: string;
  keyFacts: string[];
  scale: string;
  industry: string;
  founded?: string;
  headquarters?: string;
  website?: string;
}

export interface DetailedRole {
  id: string;
  company: string;
  role: string;
  period: string;
  context: string;
  detailedContributions: string[];
  challenges: string[];
  outcomes: string[];
  technologies: string[];
}

export const companyData: Record<string, CompanyInfo> = {
  "2-hour-learning": {
    id: "2-hour-learning",
    name: "2 Hour Learning",
    type: "Revolutionary K-12 EdTech Platform",
    description: "AI-powered educational platform enabling students to complete academics in just 2 hours per day through personalized AI tutoring.",
    keyFacts: [
      "Founded by MacKenzie Price (Stanford Psychology graduate)",
      "~30 employees focused on educational transformation",
      "Disrupting traditional K-12 education model",
      "AI-first approach to personalized learning"
    ],
    scale: "Startup (~30 employees)",
    industry: "EdTech / AI Education",
    founded: "2020s",
    headquarters: "United States",
    website: "2hourlearning.com"
  },
  "accionlabs-veracode": {
    id: "accionlabs-veracode",
    name: "AccionLabs + Veracode",
    type: "Global Engineering Services + Cybersecurity Leader",
    description: "AccionLabs: 5,500+ engineer consultancy. Veracode: Industry-leading application security platform.",
    keyFacts: [
      "AccionLabs: $93M funding, 23 global locations",
      "Veracode: NYSE-traded, Forrester SAST Leader 2025",
      "Focus on digital transformation and DevSecOps",
      "Covers 100+ programming languages and frameworks"
    ],
    scale: "Enterprise (5,500+ engineers at AccionLabs)",
    industry: "Software Services / Cybersecurity",
    founded: "AccionLabs: 2011, Veracode: 2006",
    headquarters: "Pittsburgh, PA / Burlington, MA",
    website: "accionlabs.com / veracode.com"
  },
  "msd": {
    id: "msd",
    name: "MSD (Merck & Co.)",
    type: "Fortune 500 Pharmaceutical Giant",
    description: "One of world's largest research-intensive biopharmaceutical companies with 130+ year history.",
    keyFacts: [
      "NYSE: MRK, $60+ billion annual revenue",
      "130+ years in pharmaceutical innovation",
      "Global leader in health economics and drug development",
      "Focus on research-intensive biopharmaceuticals"
    ],
    scale: "Fortune 500 (60,000+ employees globally)",
    industry: "Pharmaceutical / Healthcare",
    founded: "1891",
    headquarters: "Rahway, NJ, USA",
    website: "merck.com"
  },
  "everli": {
    id: "everli",
    name: "Everli",
    type: "Leading European Grocery Marketplace",
    description: "Italy's #1 online grocery delivery platform, expanding across Europe with marketplace model.",
    keyFacts: [
      "Italy's leading online grocery delivery platform",
      "Expanding across European markets",
      "Partners with local retailers for last-mile delivery",
      "Focus on revolutionizing household grocery shopping"
    ],
    scale: "European Scale-up",
    industry: "Marketplace / E-commerce / Logistics",
    founded: "2014",
    headquarters: "Milan, Italy",
    website: "everli.com"
  },
  "aleph-beta": {
    id: "aleph-beta",
    name: "Aleph Beta",
    type: "Global Jewish Education Platform",
    description: "Online Torah study platform serving 180,000+ users globally with 1,100+ educational resources.",
    keyFacts: [
      "180,000+ users across the globe",
      "1,100+ videos, podcasts, and articles",
      "Crowdfunded subscription model",
      "Used by educators and students worldwide"
    ],
    scale: "Global Educational Platform",
    industry: "EdTech / Religious Education",
    founded: "2010s",
    headquarters: "United States",
    website: "alephbeta.org"
  },
  "hello-bar": {
    id: "hello-bar",
    name: "Hello Bar",
    type: "Marketing SaaS Platform",
    description: "Lead capture and conversion optimization platform for websites, serving SaaS companies and marketers.",
    keyFacts: [
      "Marketing technology for website conversion",
      "Lead capture forms and CTA optimization",
      "Native integration capabilities",
      "Serves SaaS companies and content marketers"
    ],
    scale: "SaaS Platform",
    industry: "MarTech / B2B SaaS",
    founded: "2010s",
    headquarters: "Remote-first",
    website: "hellobar.com"
  }
};

export const detailedRoles: Record<string, DetailedRole> = {
  "2-hour-learning": {
    id: "2-hour-learning",
    company: "2 Hour Learning",
    role: "AI-First Senior Product Manager",
    period: "Nov 2024 – Jul 2025",
    context: "Leading product development for a revolutionary AI-powered EdTech platform that's disrupting traditional K-12 education by enabling students to complete academics in just 2 hours per day.",
    detailedContributions: [
      "Architected AI-driven learning journey tracking system integrating mastery-based learning principles",
      "Established and managed complex multi-vendor ecosystem with 4 outsourced development partners",
      "Developed rapid prototyping methodology using Replit, v0.dev, and AI-powered development tools",
      "Created comprehensive requirements engineering process from discovery through delivery",
      "Implemented dual-role framework serving as both Product Owner and Scrum Master"
    ],
    challenges: [
      "Coordinating strategic alignment across multiple external vendors while maintaining product vision",
      "Balancing AI innovation with educational pedagogy requirements",
      "Managing rapid iteration cycles while ensuring quality and safety in educational content"
    ],
    outcomes: [
      "Successfully accelerated engineering understanding of complex requirements through AI-assisted prototyping",
      "Established seamless coordination framework enabling efficient cross-vendor collaboration",
      "Delivered early customer feedback loops that directly informed product development decisions"
    ],
    technologies: ["AI/ML Platforms", "Replit", "v0.dev", "EdTech Infrastructure", "Multi-vendor Management"]
  },
  "accionlabs-veracode": {
    id: "accionlabs-veracode",
    company: "AccionLabs + Veracode",
    role: "Senior Technical Product Manager",
    period: "March 2023 – October 2024",
    context: "Led technical strategy for critical cybersecurity infrastructure at Veracode while directing data platform transformation initiatives, managing both remote US and Prague-based teams.",
    detailedContributions: [
      "Spearheaded unification of multiple static analysis scanners into single engine architecture",
      "Directed company-wide technical roadmap for monolith-to-microservices transformation",
      "Led cross-cultural remote teams spanning United States and Prague, Czech Republic",
      "Architected scalable system designs enabling flexible platform expansion",
      "Collaborated on Static Application Security Testing (SAST) product enhancements"
    ],
    challenges: [
      "Integrating disparate legacy scanning engines while maintaining accuracy",
      "Managing complex microservices migration without disrupting existing enterprise customers",
      "Coordinating development across multiple time zones and cultural contexts"
    ],
    outcomes: [
      "Improved scanning accuracy while reducing operational overhead across the platform",
      "Successfully enabled scalable architecture supporting enterprise growth",
      "Established effective remote team collaboration framework for international development"
    ],
    technologies: ["SAST", "Microservices Architecture", "Static Analysis", "DevSecOps", "Enterprise Security Platforms"]
  },
  "msd": {
    id: "msd",
    company: "MSD (Merck & Co.)",
    role: "Senior Product Manager",
    period: "January 2018 – November 2020",
    context: "Drove significant growth and performance improvements across health economics modeling and enterprise portal products at one of the world's largest pharmaceutical companies.",
    detailedContributions: [
      "Led data-driven product decisions resulting in 75% growth in monthly sessions (800k → 1.4M)",
      "Implemented rapid experimentation framework driving 30% increase in employee engagement",
      "Simplified product codebase architecture and doubled release cadence",
      "Introduced Mathematica model support reducing execution time by 50%",
      "Established comprehensive product metrics and KPIs framework with stakeholders"
    ],
    challenges: [
      "Navigating complex enterprise stakeholder environment with competing priorities",
      "Balancing performance optimization with feature development in legacy systems",
      "Implementing personalization features at pharmaceutical enterprise scale"
    ],
    outcomes: [
      "Achieved measurable 75% growth in user engagement through personalization",
      "Significantly improved system performance while expanding functionality",
      "Established sustainable development practices enabling consistent delivery"
    ],
    technologies: ["Health Economics Modeling", "Mathematica", "Enterprise Portals", "Data Analytics", "Pharmaceutical Systems"]
  },
  "everli": {
    id: "everli",
    company: "Everli",
    role: "Senior Product Manager, Retail + Catalogue",
    period: "November 2021 – March 2023",
    context: "Optimized marketplace partner integrations and led product management mentorship at Italy's leading grocery delivery platform during European expansion phase.",
    detailedContributions: [
      "Reduced marketplace partner integration time by 2+ weeks (30% improvement)",
      "Introduced no-code/low-code automation tools into partner onboarding workflow",
      "Mentored and developed junior and mid-level Product Managers across the organization",
      "Collaborated with engineering and design teams to manage complex e-commerce integrations",
      "Streamlined iterative delivery processes for retail partner integrations"
    ],
    challenges: [
      "Managing complex integrations with diverse European retail partners",
      "Balancing automation with customization needs for different market requirements",
      "Scaling team capabilities during rapid European market expansion"
    ],
    outcomes: [
      "Significantly reduced time-to-market for new retail partnerships",
      "Improved operational efficiency through automation tool implementation",
      "Developed stronger product management capabilities across the team"
    ],
    technologies: ["Marketplace Platforms", "E-commerce Integrations", "No-code/Low-code Tools", "Retail Systems", "Partner APIs"]
  },
  "aleph-beta": {
    id: "aleph-beta",
    company: "Aleph Beta",
    role: "Director of Product",
    period: "November 2020 – November 2021",
    context: "Led product strategy for global Jewish education platform serving 180,000+ users, focusing on mobile expansion and content management system optimization.",
    detailedContributions: [
      "Launched new iOS and Android mobile application aimed at expanding Torah study engagement",
      "Developed strategic initiative for knowledge base integration with content management system",
      "Eliminated technical dependencies in content publication workflow",
      "Streamlined content creation process enabling non-technical team members",
      "Enhanced user engagement through mobile-first learning experiences"
    ],
    challenges: [
      "Designing intuitive mobile experience for complex religious text study",
      "Balancing traditional learning methods with modern digital engagement",
      "Creating scalable content management for diverse educational materials"
    ],
    outcomes: [
      "Successfully launched mobile applications enabling on-the-go learning",
      "Eliminated technical bottlenecks in content publication process",
      "Empowered content creators with self-service publishing capabilities"
    ],
    technologies: ["iOS Development", "Android Development", "Content Management Systems", "Mobile UX/UI", "Educational Platforms"]
  },
  "hello-bar": {
    id: "hello-bar",
    company: "Hello Bar",
    role: "Technical Product Owner",
    period: "2016 – 2017",
    context: "Led development team for lead capture and marketing SaaS application, focusing on customer experience optimization and technical product strategy.",
    detailedContributions: [
      "Led development team for HelloBar.com lead capture and marketing platform",
      "Identified and implemented key opportunities to improve customer experience",
      "Managed technical product roadmap for B2B marketing automation tools",
      "Optimized conversion rates through strategic product improvements",
      "Collaborated with remote development team to deliver feature enhancements"
    ],
    challenges: [
      "Working in competitive MarTech space with established players",
      "Balancing feature complexity with ease of use for non-technical marketers",
      "Managing remote team coordination and development processes"
    ],
    outcomes: [
      "Improved customer experience through strategic product enhancements",
      "Successfully delivered key features that enhanced platform capabilities",
      "Established effective remote team development practices"
    ],
    technologies: ["Lead Capture Systems", "Marketing Automation", "SaaS Platforms", "Conversion Optimization", "B2B Marketing Tools"]
  }
};