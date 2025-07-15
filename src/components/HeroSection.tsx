import { ArrowRight, Calendar, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';
import Logo from '@/assets/hellowereldLogo.png';

const HeroSection = () => {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, hsl(214, 95%, 50%, 0.9) 0%, hsl(199, 95%, 55%, 0.8) 50%, hsl(220, 13%, 25%, 0.9) 100%), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Tech pattern overlay */}
      <div className="absolute inset-0 tech-pattern opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in visible">

<img 
  src={Logo} 
  alt="Hello Wereld Logo" 
  className="w-64 sm:w-72 lg:w-80 mb-6 mx-auto"
/>


          {/* Tagline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4">
            Empowering IT Excellence & Talent
          </h2>

          {/* Sub-tagline */}
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-4xl mx-auto">
            Tailored Consultancy. Hands-on Training. Future-Ready Teams.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => handleScrollToSection('#contact')}
              className="btn-hero-primary group"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button 
              onClick={() => handleScrollToSection('#services')}
              className="btn-hero-secondary group"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button 
              onClick={() => handleScrollToSection('#contact')}
              className="btn-hero-secondary group"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Free Consultation
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
