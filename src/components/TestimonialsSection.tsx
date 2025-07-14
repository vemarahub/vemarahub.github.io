import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
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

  return (
    <section ref={sectionRef} id="about-mission" className="section-padding bg-background fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Our Mission
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            As a fresh company in the IT consultancy space, we're passionate about helping businesses and professionals thrive in the digital age.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <Quote className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    For Businesses
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We provide fresh perspectives and innovative solutions to help your business leverage technology effectively. Our consultancy services are designed to optimize your operations and drive digital transformation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <Quote className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    For Professionals
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We offer hands-on training programs that equip you with the latest skills in cloud technologies, software development, and data engineering. Our goal is to make you future-ready.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="bg-muted rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Our Core Values
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <div className="text-lg font-semibold text-foreground mb-2">Innovation</div>
              <div className="text-sm text-muted-foreground">
                Embracing cutting-edge technologies and modern approaches
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <div className="text-lg font-semibold text-foreground mb-2">Excellence</div>
              <div className="text-sm text-muted-foreground">
                Delivering high-quality solutions and training experiences
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <div className="text-lg font-semibold text-foreground mb-2">Growth</div>
              <div className="text-sm text-muted-foreground">
                Fostering continuous learning and professional development
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;