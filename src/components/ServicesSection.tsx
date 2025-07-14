import { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Settings, 
  GraduationCap, 
  Wrench, 
  Cloud, 
  Code, 
  Database,
  BarChart3,
  Zap
} from 'lucide-react';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Settings,
      title: "IT Consultancy",
      description: "Tailored guidance to scale, optimize, and innovate",
      features: [
        "Digital Transformation Strategy",
        "Architecture Design & Review",
        "Technology Stack Optimization",
        "Performance & Security Audits"
      ]
    },
    {
      icon: GraduationCap,
      title: "Corporate & Professional Training",
      description: "Hands-on workshops for modern technologies",
      features: [
        "Cloud & DevOps Mastery",
        "Software Development Excellence",
        "Database Technologies",
        "Data Engineering & Analytics"
      ]
    },
    {
      icon: Wrench,
      title: "Custom Solutions Development",
      description: "Scalable tech solutions for unique business needs",
      features: [
        "Full-Stack Web Applications",
        "API Development & Integration",
        "Cloud-Native Solutions",
        "Data Pipeline Development"
      ]
    }
  ];

  const trainingAreas = [
    { icon: Cloud, title: "Cloud & DevOps", color: "bg-blue-500" },
    { icon: Code, title: "Software Development", color: "bg-green-500" },
    { icon: Database, title: "Database Technologies", color: "bg-purple-500" },
    { icon: BarChart3, title: "Data Engineering", color: "bg-orange-500" }
  ];

  const technologies = [
    { name: "Java", category: "Backend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Azure", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "DevOps" },
    { name: "Terraform", category: "DevOps" },
    { name: "Apache Spark", category: "Data Engineering" }
  ];

  return (
    <section ref={sectionRef} id="services" className="section-padding bg-background fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive IT solutions designed to accelerate your digital transformation 
            and empower your teams with cutting-edge skills.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <Zap className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Training Areas */}
        <div className="bg-muted rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Training Specializations
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 ${area.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <area.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground">{area.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 gradient-text">
            Technologies We Master
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="inline-flex items-center px-4 py-2 bg-white border border-border rounded-full text-sm font-medium text-foreground hover:bg-muted transition-colors duration-300"
              >
                {tech.name}
                <span className="ml-2 text-xs text-muted-foreground">
                  {tech.category}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;