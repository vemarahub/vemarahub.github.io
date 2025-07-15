import { Instagram, Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'IT Consultancy', href: '#services' },
    { name: 'Corporate Training', href: '#services' },
    { name: 'Custom Development', href: '#services' },
    { name: 'Cloud Solutions', href: '#services' },
    { name: 'DevOps Training', href: '#services' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/hello-wereld', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, href: 'https://x.com/Hello_Wereld', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/hello.wereld', color: 'hover:text-blue-500' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/HelloWereldOrg', color: 'hover:text-gray-600' }
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-secondary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold gradient-text mb-4">HelloWereld</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Empowering IT Excellence & Talent through tailored consultancy, 
              hands-on training, and future-ready solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm text-white/80">contacthellowereld@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm text-white/80">+31 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm text-white/80">Almere, Netherlands</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-white/80 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(service.href)}
                    className="text-white/80 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <p className="text-white/80 text-sm mb-4">
              Follow us for the latest updates on technology trends and training opportunities.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center transition-colors duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div>
              <h5 className="text-sm font-semibold mb-2">Stay Updated</h5>
              <p className="text-xs text-white/60 mb-3">
                Get insights on IT trends and training opportunities.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-md text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
                <button className="px-4 py-2 bg-accent hover:bg-accent/90 text-white rounded-md text-sm font-medium transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/60">
              © {currentYear} HelloWereld. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm text-white/60">
              <button className="hover:text-accent transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="hover:text-accent transition-colors duration-300">
                Terms of Service
              </button>
              <button className="hover:text-accent transition-colors duration-300">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;