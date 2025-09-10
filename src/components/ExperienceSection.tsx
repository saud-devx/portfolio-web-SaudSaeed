import { useEffect, useState } from "react";
import { MapPin, Calendar, Building } from "lucide-react";

interface Experience {
  _id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string[];
  technologies: string[];
}

const ExperienceSection = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await fetch(
          "https://portfolio-web-saudsaeed-backend.onrender.com/api/v1/experiences"
        );
        const data = await res.json();
        console.log(data, 'experiences data..')
        setExperiences(data);
        
      } catch (error) {
        console.error("Error fetching experiences:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchExperiences();
  }, []);

  if (loading) {
    return (
      <section id="experience" className="py-20 relative text-center">
        <p className="text-muted-foreground">Loading experiences...</p>
      </section>
    );
  }

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
            {experiences.map((exp) => (
              <div
                key={exp._id}
                className="glass-card p-8 hover:shadow-glow-cyan transition-smooth"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-primary mb-2">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Building className="w-4 h-4 text-secondary" />
                      <span className="text-lg font-medium text-foreground">
                        {exp.company}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <span className="hidden sm:inline">•</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {exp.startDate
                            ? new Date(exp.startDate).getFullYear()
                            : ""}
                          {" - "}
                          {exp.current
                            ? "Present"
                            : exp.endDate
                            ? new Date(exp.endDate).getFullYear()
                            : ""}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
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
