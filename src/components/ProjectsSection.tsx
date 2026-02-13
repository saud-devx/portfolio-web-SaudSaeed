import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Smartphone, Globe, Zap } from "lucide-react";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          "https://portfolio-web-saudsaeed-backend.onrender.com/api/v1/projects"
        );
        const data = await res.json();
        setProjects(data || []);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // static filters based on category
  const filters = [
    { id: "all", label: "All Projects", icon: Globe },
    { id: "frontend", label: "Frontend Web Apps", icon: Code },
    { id: "backend", label: "Backend Web Apps", icon: Smartphone },
    { id: "fullstack", label: "Full Stack Projects", icon: Globe }
  ];

  // filter logic
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const getStatusColor = (project) => {
    if (project.visible && project.pinned) return "text-secondary";
    if (!project.visible) return "text-muted-foreground";
    return "text-accent";
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

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium transition-smooth ${
                  activeFilter === filter.id
                    ? "bg-gradient-primary text-primary-foreground shadow-glow-cyan"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                <filter.icon className="w-4 h-4" />
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          {loading ? (
            <p className="text-center text-muted-foreground">
              Loading projects...
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <div
                    key={project._id}
                    className="glass-card p-6 hover:shadow-glow-cyan transition-smooth group"
                  >
                    {/* Cover Image */}
                    <div className="relative mb-4 overflow-hidden rounded-lg">
                      {project.coverImage?.url ? (
                        <img
                          src={project.coverImage.url}
                          alt={project.coverImage.alt || project.title}
                          className="h-48 w-full object-cover"
                        />
                      ) : (
                        <div className="h-48 bg-gradient-secondary flex items-center justify-center">
                          <Code className="w-16 h-16 text-primary opacity-50" />
                        </div>
                      )}
                      <div className="absolute top-2 right-2">
                        <span
                          className={`px-2 py-1 text-xs rounded-full bg-background/80 ${getStatusColor(
                            project
                          )}`}
                        >
                          {project.pinned
                            ? "Pinned"
                            : project.visible
                            ? "Active"
                            : "Hidden"}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-primary group-hover:text-secondary transition-smooth">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.shortDescription || project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.techStack?.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Features */}
                      {project.features?.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-foreground">
                            Key Features:
                          </h4>
                          <ul className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                            {project.features.map((feature, index) => (
                              <li key={index} className="flex items-center gap-1">
                                <Zap className="w-3 h-3 text-secondary" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Buttons */}
                      <div className="flex gap-2 pt-4">
                        {project.liveUrl && (
                          <Button
                            size="sm"
                            className="flex-1 bg-gradient-primary hover:shadow-glow-cyan"
                            asChild
                          >
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-4 h-4 mr-1" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        {project.repoUrl && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                            asChild
                          >
                            <a
                              href={project.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-muted-foreground col-span-full">
                  No projects found in this category.
                </p>
              )}
            </div>
          )}

          {/* Footer Card */}
          <div className="text-center mt-12">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Want to see more?
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always working on new projects and exploring different
                technologies. Check out my GitHub for more code samples and
                contributions.
              </p>
              <Button className="bg-gradient-primary hover:shadow-glow-cyan" asChild>
                <a
                  href="https://github.com/saud-devx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View GitHub Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
