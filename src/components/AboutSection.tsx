import { Code, Globe, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code Advocate',
      description: 'Writing maintainable, scalable code with best practices'
    },
    {
      icon: Globe,
      title: 'Full-Stack Mindset',
      description: 'Understanding both frontend and backend technologies'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Experienced in Agile methodologies and cross-functional teams'
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      description: 'Optimizing applications for speed and user experience'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Passionate developer crafting digital experiences
            </p>
          </div>

          <div className="glass-card p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With over 3+ years of development experience, I've specialized in creating 
                  robust frontend applications using Angular, React, and the MEAN stack. 
                  My journey began with a passion for solving complex problems through code.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Having worked with leading companies in Dubai, UAE including DMR Elite and 
                  Universal Plus Technologies, I've gained valuable experience in delivering 
                  enterprise-level solutions and working in multicultural environments.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Currently based in Pakistan and actively seeking new opportunities to 
                  contribute to innovative projects and continue growing my expertise.
                </p>
              </div>
              
              <div className="space-y-4">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-smooth">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center glass-card p-6">
              <div className="text-3xl font-bold gradient-text mb-2">3+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center glass-card p-6">
              <div className="text-3xl font-bold gradient-text mb-2">20+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center glass-card p-6">
              <div className="text-3xl font-bold gradient-text mb-2">2</div>
              <div className="text-muted-foreground">Countries Worked</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;