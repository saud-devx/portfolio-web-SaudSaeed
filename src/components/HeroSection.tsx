import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, MapPin, Code2 } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Frontend Developer & MEAN Stack Specialist';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in-up">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <img
                src={profileImage}
                alt="Saud Saeed"
                className="w-full h-full rounded-full object-cover border-4 border-primary glow-effect"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-pulse"></div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">Saud Saeed</span>
            </h1>
            
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-xl md:text-2xl text-muted-foreground font-mono">
                <span className="typewriter">{displayText}</span>
              </h2>
            </div>

            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Pakistan • Open to Remote & Relocation</span>
            </div>

            <div className="flex items-center justify-center gap-2 text-primary">
              <Code2 className="w-5 h-5" />
              <span className="font-mono">4+ Years Experience</span>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate Frontend Developer specializing in Angular, React, and Next.js. 
              Building modern, scalable web applications with exceptional user experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button onClick={scrollToContact} size="lg" className="bg-gradient-primary hover:shadow-glow-cyan transition-smooth">
              Get In Touch
            </Button>
            <Button 
              onClick={scrollToProjects} 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              View Projects
            </Button>
            <Button variant="ghost" size="lg" className="text-primary hover:bg-primary/10 transition-smooth">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;