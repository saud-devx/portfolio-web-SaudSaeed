import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Code, Smartphone, Globe, Zap } from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce application with real-time inventory management, payment integration, and admin dashboard.',
      image: '/api/placeholder/400/250',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Firebase'],
      category: 'web',
      features: ['Real-time updates', 'Payment gateway', 'Admin panel', 'Responsive design'],
      liveUrl: '#',
      githubUrl: '#',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team collaboration features, and advanced analytics.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      category: 'web',
      features: ['Team collaboration', 'Real-time sync', 'Analytics', 'Mobile responsive'],
      liveUrl: '#',
      githubUrl: '#',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication, transaction history, and bill payment features.',
      image: '/api/placeholder/400/250',
      technologies: ['Ionic', 'Angular', 'Firebase', 'Capacitor'],
      category: 'mobile',
      features: ['Biometric auth', 'Secure transactions', 'Bill payments', 'Account management'],
      liveUrl: '#',
      githubUrl: '#',
      status: 'completed'
    },
    {
      id: 4,
      title: 'Healthcare Portal',
      description: 'Patient management system with appointment scheduling, medical records, and telemedicine capabilities.',
      image: '/api/placeholder/400/250',
      technologies: ['Vue.js', 'Express.js', 'PostgreSQL', 'WebRTC'],
      category: 'web',
      features: ['Video consultations', 'Medical records', 'Appointment booking', 'Patient portal'],
      liveUrl: '#',
      githubUrl: '#',
      status: 'in-progress'
    },
    {
      id: 5,
      title: 'Real Estate Platform',
      description: 'Property listing and management platform with advanced search, virtual tours, and agent management.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      category: 'web',
      features: ['Property search', 'Virtual tours', 'Agent portal', 'Map integration'],
      liveUrl: '#',
      githubUrl: '#',
      status: 'completed'
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      description: 'Cross-platform fitness application with workout tracking, nutrition planning, and social features.',
      image: '/api/placeholder/400/250',
      technologies: ['Ionic', 'Angular', 'Firebase', 'Chart.js'],
      category: 'mobile',
      features: ['Workout tracking', 'Nutrition plans', 'Social features', 'Progress analytics'],
      liveUrl: '#',
      githubUrl: '#',
      status: 'completed'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: Globe },
    { id: 'web', label: 'Web Apps', icon: Code },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-secondary';
      case 'in-progress': return 'text-accent';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Some of my recent work and personal projects
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-smooth ${
                  activeFilter === filter.id
                    ? 'bg-gradient-primary text-primary-foreground shadow-glow-cyan'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                <filter.icon className="w-4 h-4" />
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="glass-card p-6 hover:shadow-glow-cyan transition-smooth group">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <div className="h-48 bg-gradient-secondary flex items-center justify-center">
                    <Code className="w-16 h-16 text-primary opacity-50" />
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className={`px-2 py-1 text-xs rounded-full bg-background/80 ${getStatusColor(project.status)}`}>
                      {project.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary group-hover:text-secondary transition-smooth">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-1">
                          <Zap className="w-3 h-3 text-secondary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button size="sm" className="flex-1 bg-gradient-primary hover:shadow-glow-cyan">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Want to see more?</h3>
              <p className="text-muted-foreground mb-6">
                I'm always working on new projects and exploring different technologies. 
                Check out my GitHub for more code samples and contributions.
              </p>
              <Button className="bg-gradient-primary hover:shadow-glow-cyan">
                <Github className="w-4 h-4 mr-2" />
                View GitHub Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;