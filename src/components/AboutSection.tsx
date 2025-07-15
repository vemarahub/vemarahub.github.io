import { useEffect, useRef } from 'react';
import { Target, Zap, Users, Code } from 'lucide-react';

const AboutSection = () => {
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

  const features = [
    {
      icon: Target,
      title: "Targeted Solutions",
      description: "Customized approaches for your unique business challenges"
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "Cutting-edge technologies and methodologies"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Seasoned professionals with real-world experience"
    },
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Deep expertise across multiple technology stacks"
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-muted fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            About HelloWereld
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              HelloWereld is an IT consultancy and training company dedicated to enabling 
              businesses to grow with technology and upskilling professionals for real-world 
              success. Our expertise bridges software engineering, cloud solutions, and data 
              platforms.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We believe in the power of hands-on learning and practical application. Our 
              approach combines deep technical knowledge with industry best practices to 
              deliver solutions that not only meet today's needs but prepare you for 
              tomorrow's challenges.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <feature.icon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white rounded-2xl shadow-medium p-8">
            <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
              Our Vision
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2 whitespace-nowrap">Inspire Curiosity</div>
                <div className="text-sm text-muted-foreground">Enable power and joy of digital skills</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2 whitespace-nowrap">Cultivate Community</div>
                <div className="text-sm text-muted-foreground">Building a friendly, supportive environment</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2 whitespace-nowrap">Drive Innovation</div>
                <div className="text-sm text-muted-foreground">Nurturing forward-thinking ideas and creative projects</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2 whitespace-nowrap">Champion Inclusion</div>
                <div className="text-sm text-muted-foreground">Making tech accessible and empowering people</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
