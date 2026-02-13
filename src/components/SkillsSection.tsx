import { useState } from 'react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      skills: [
        { name: 'Angular', level: 95, experience: '3+ years' },
        { name: 'React', level: 90, experience: '2+ years' },
        { name: 'Next.js', level: 85, experience: '2+ years' },
        { name: 'Vue.js', level: 80, experience: '1+ year' },
        { name: 'TypeScript', level: 92, experience: '3+ years' },
        { name: 'RxJS', level: 88, experience: '3+ years' },
        { name: 'NgRx', level: 85, experience: '2+ years' },
        { name: 'Ionic', level: 82, experience: '2+ years' }
      ]
    },
    styling: {
      title: 'Styling & Design',
      skills: [
        { name: 'HTML5', level: 98, experience: '3+ years' },
        { name: 'CSS3', level: 95, experience: '3+ years' },
        { name: 'Tailwind CSS', level: 92, experience: '2+ years' },
        { name: 'Bootstrap', level: 90, experience: '3+ years' },
        { name: 'Responsive Design', level: 95, experience: '3+ years' },
        { name: 'CSS Animations', level: 85, experience: '2+ years' }
      ]
    },
    backend: {
      title: 'Backend & Tools',
      skills: [
        { name: 'Node.js', level: 85, experience: '2+ years' },
        { name: 'Firebase', level: 88, experience: '3+ years' },
        { name: 'WebSockets', level: 80, experience: '2+ years' },
        { name: 'REST APIs', level: 92, experience: '3+ years' },
        { name: 'MongoDB', level: 82, experience: '2+ years' },
        { name: 'Express.js', level: 80, experience: '2+ years' }
      ]
    },
    tools: {
      title: 'Tools & Methodologies',
      skills: [
        { name: 'Git/GitHub', level: 95, experience: '3+ years' },
        { name: 'JIRA', level: 90, experience: '3+ years' },
        { name: 'Trello', level: 85, experience: '2+ years' },
        { name: 'ClickUp', level: 82, experience: '1+ year' },
        { name: 'Agile/Scrum', level: 88, experience: '3+ years' },
        { name: 'VS Code', level: 95, experience: '3+ years' }
      ]
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Technical Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Technologies and tools I work with
            </p>
          </div>

          <div className="glass-card p-8">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {Object.entries(skillCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-6 py-3 rounded-lg font-medium transition-smooth ${
                    activeCategory === key
                      ? 'bg-gradient-primary text-primary-foreground shadow-glow-cyan'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>

            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-semibold text-center mb-8 text-primary">
                {skillCategories[activeCategory as keyof typeof skillCategories].title}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{skill.experience}</span>
                        <span className="text-sm font-medium text-primary">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-primary h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Always Learning</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Technology evolves rapidly, and I stay current with the latest trends and best practices. 
                Currently exploring cloud technologies, microservices architecture, and advanced React patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;