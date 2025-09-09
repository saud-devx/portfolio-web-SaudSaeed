import { MapPin, Calendar, Building } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: 'Universal Plus Technologies',
      position: 'Senior Frontend Developer',
      location: 'Dubai, UAE',
      period: '2022 - 2024',
      description: [
        'Led frontend development for multiple client projects using Angular and React',
        'Implemented responsive designs and optimized application performance',
        'Collaborated with cross-functional teams to deliver high-quality solutions',
        'Mentored junior developers and conducted code reviews'
      ],
      technologies: ['Angular', 'React', 'TypeScript', 'RxJS', 'NgRx', 'Tailwind CSS']
    },
    {
      company: 'DMR Elite',
      position: 'Frontend Developer',
      location: 'Dubai, UAE',
      period: '2021 - 2022',
      description: [
        'Developed interactive web applications using Angular and MEAN stack',
        'Integrated RESTful APIs and implemented real-time features with WebSockets',
        'Worked closely with UI/UX designers to implement pixel-perfect designs',
        'Participated in Agile development processes using JIRA and Scrum methodology'
      ],
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express.js', 'Firebase', 'Bootstrap']
    },
    {
      company: 'Freelance Projects',
      position: 'Full-Stack Developer',
      location: 'Remote',
      period: '2020 - 2021',
      description: [
        'Built custom web applications for various clients',
        'Gained experience in multiple frameworks including Vue.js and Ionic',
        'Managed complete project lifecycle from requirement analysis to deployment',
        'Developed skills in client communication and project management'
      ],
      technologies: ['Vue.js', 'React', 'Next.js', 'Ionic', 'Firebase', 'CSS3']
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Professional Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Building innovative solutions across different industries
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="glass-card p-8 hover:shadow-glow-cyan transition-smooth">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-primary mb-2">{exp.position}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Building className="w-4 h-4 text-secondary" />
                      <span className="text-lg font-medium text-foreground">{exp.company}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <span className="hidden sm:inline">•</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;