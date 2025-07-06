
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "C", "JavaScript", "HTML", "CSS"],
      icon: "💻"
    },
    {
      title: "Technologies",
      skills: ["React", "Spring Boot", "Docker", "Jenkins", "Kafka", "MongoDB", "MySQL", "Git", "GitHub"],
      icon: "⚡"
    },
    {
      title: "Tools",
      skills: ["VS Code", "Postman", "Linux CLI", "AI Tools"],
      icon: "🛠️"
    },
    {
      title: "Soft Skills",
      skills: ["Team Leadership", "Presentation", "Adaptability", "Fast Learning"],
      icon: "🎯"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="tech-glow bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-3xl mb-2">{category.icon}</div>
                <CardTitle className="text-xl gradient-text">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
