import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, FileText, Phone } from 'lucide-react';

const CTASection = () => {
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

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="section-padding bg-gradient-hero text-white relative overflow-hidden fade-in"
    >
      {/* Tech pattern overlay */}
      <div className="absolute inset-0 tech-pattern opacity-20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Ready to Elevate Your IT Capabilities?
        </h2>
        
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          Transform your team's potential with expert guidance and hands-on training. 
          Let's build the future of your organization together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={handleScrollToContact}
            className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button 
            onClick={handleScrollToContact}
            className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 group"
          >
            <FileText className="mr-2 h-5 w-5" />
            Request a Quote
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Quick contact info */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/80">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span className="text-sm">Free consultation available</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full"></div>
          <div className="flex items-center space-x-2">
            <MessageCircle className="h-4 w-4" />
            <span className="text-sm">Quick response guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;