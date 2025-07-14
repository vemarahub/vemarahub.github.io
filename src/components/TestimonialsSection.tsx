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

  const testimonials = [
    {
      name: "Sarah Mitchell",
      position: "CTO, TechFlow Solutions",
      company: "TechFlow Solutions",
      testimonial: "HelloWereld transformed our development team's capabilities. Their cloud migration consultancy and DevOps training helped us reduce deployment time by 70% and significantly improved our system reliability. The hands-on approach made all the difference.",
      rating: 5,
      avatar: "SM"
    },
    {
      name: "Marcus Chen",
      position: "Engineering Manager, DataCore Systems",
      company: "DataCore Systems",
      testimonial: "The custom training program HelloWereld designed for our team was exceptional. They understood our specific needs and delivered practical, real-world training in data engineering and Python. Our team's productivity increased measurably within weeks.",
      rating: 5,
      avatar: "MC"
    }
  ];

  const clientLogos = [
    "TechFlow Solutions",
    "DataCore Systems",
    "InnovateLab",
    "CloudFirst Corp",
    "DevMasters Inc",
    "FutureScale"
  ];

  const renderStars = (rating: number) => {
    return [...Array(rating)].map((_, i) => (
      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <section ref={sectionRef} id="testimonials" className="section-padding bg-background fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our satisfied clients about their transformation journey with HelloWereld.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <Quote className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      "{testimonial.testimonial}"
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    <p className="text-sm text-accent font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className="bg-muted rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Trusted by Leading Companies
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clientLogos.map((company, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-4 text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-sm font-medium text-muted-foreground">
                  {company}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-soft">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction Rate</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-soft">
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Training Rating</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-soft">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;