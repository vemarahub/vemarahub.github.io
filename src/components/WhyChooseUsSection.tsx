import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Award, 
  Lightbulb, 
  TrendingUp, 
  Users,
  CheckCircle,
  Clock,
  Shield,
  Zap
} from 'lucide-react';

const WhyChooseUsSection = () => {
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

  const mainReasons = [
    {
      icon: Award,
      title: "Real-world Expertise",
      description: "Our team brings years of hands-on experience from leading tech companies and enterprise environments.",
      details: [
        "Industry veterans with 10+ years experience",
        "Certified professionals in major cloud platforms",
        "Active contributors to open-source projects"
      ]
    },
    {
      icon: Users,
      title: "Customized Programs",
      description: "Every solution is tailored to your specific business needs, team skills, and organizational goals.",
      details: [
        "Personalized learning paths",
        "Business-specific use cases",
        "Flexible delivery formats"
      ]
    },
    {
      icon: TrendingUp,
      title: "Results-Driven Approach",
      description: "We focus on delivering measurable outcomes and practical solutions that drive real business value.",
      details: [
        "Goal-oriented training programs",
        "Performance-based consulting methods",
        "Continuous improvement mindset"
      ]
    },
    {
      icon: Lightbulb,
      title: "Focus on Growth & Innovation",
      description: "We don't just solve today's problems – we prepare you for tomorrow's opportunities.",
      details: [
        "Future-ready technology adoption",
        "Innovation workshop sessions",
        "Continuous learning support"
      ]
    }
  ];

  const additionalBenefits = [
    { icon: CheckCircle, text: "Hands-on, practical approach" },
    { icon: Clock, text: "Flexible scheduling options" },
    { icon: Shield, text: "Post-training support included" },
    { icon: Zap, text: "Fast implementation of solutions" },
    { icon: Users, text: "Small class sizes for personalized attention" },
    { icon: Award, text: "Industry-recognized certifications" }
  ];

  return (
    <section ref={sectionRef} id="why-choose-us" className="section-padding bg-muted fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Why Choose HelloWereld?
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What sets us apart in the competitive landscape of IT consultancy and training.
          </p>
        </div>

        {/* Main Reasons */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {mainReasons.map((reason, index) => (
            <Card key={index} className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {reason.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {reason.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="bg-white rounded-2xl shadow-medium p-8">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Additional Benefits
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 rounded-lg hover:bg-muted transition-colors duration-300">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="h-4 w-4 text-white" />
                </div>
                <span className="text-foreground font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Our Commitment */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 gradient-text">
            Our Commitment to Excellence
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-soft">
              <div className="text-3xl font-bold text-primary mb-2">Fresh</div>
              <div className="text-sm text-muted-foreground">Perspective & Innovation</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-soft">
              <div className="text-3xl font-bold text-primary mb-2">Dedicated</div>
              <div className="text-sm text-muted-foreground">Support & Guidance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;