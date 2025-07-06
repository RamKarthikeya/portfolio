
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Calendar, Users } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Price-A-Med",
      period: "Nov 2024 – Apr 2025",
      description: "Built a real-time medicine pricing system for Evernorth Health Services. Features Dockerized microservices architecture with Spring Boot APIs and React frontend.",
      role: "Team Lead (10 members)",
      technologies: ["React", "Spring Boot", "Kafka", "Jenkins", "Docker"],
      highlights: ["Real-time pricing system", "Microservices architecture", "Enterprise-grade solution"],
      status: "Completed"
    },
    {
      title: "Secure Enterprise Transaction with Corda",
      period: "Jan – May 2025",
      description: "Blockchain project using Corda to implement smart contracts for secure B2B transactions, ensuring transparency and immutability.",
      role: "Developer",
      technologies: ["Corda", "Java", "Kotlin", "Blockchain"],
      highlights: ["Smart contracts", "B2B transactions", "Blockchain security"],
      status: "Completed"
    },
    {
      title: "Emotion Detection using BiLSTM",
      period: "Aug – Oct 2024",
      description: "Built a deep learning NLP model using Bidirectional LSTM for emotion recognition during AI internship at NIELIT.",
      role: "NLP Intern",
      technologies: ["Python", "TensorFlow", "Keras", "NLP"],
      highlights: ["Deep learning", "Emotion recognition", "Data preprocessing pipeline"],
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world applications showcasing technical expertise and innovation
          </p>
        </div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="tech-glow bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl gradient-text mb-2">{project.title}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {project.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {project.role}
                      </div>
                    </div>
                    <Badge 
                      variant={project.status === "Completed" ? "default" : "secondary"}
                      className={project.status === "Completed" ? "bg-green-500/20 text-green-400 border-green-400/20" : "bg-yellow-500/20 text-yellow-400 border-yellow-400/20"}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/20">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/20">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-foreground mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary mb-2">Key Highlights:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
