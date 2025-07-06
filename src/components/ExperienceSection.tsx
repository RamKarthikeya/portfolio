
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "NLP Intern",
      company: "NIELIT AI Internship",
      location: "Online, NIELIT Chennai",
      period: "Aug 2024 - Oct 2024",
      description: [
        "Developed an end-to-end emotion detection model using Bidirectional LSTM",
        "Handled data preprocessing, tokenization, padding, and label encoding",
        "Implemented advanced NLP techniques for emotion classification",
        "Worked with neural network architectures for natural language processing"
      ],
      technologies: ["Python", "Keras", "TensorFlow", "NLP", "BiLSTM"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey in software development and technology
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="tech-glow hover:scale-[1.02] transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl gradient-text">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-foreground">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                    >
                      {tech}
                    </span>
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

export default ExperienceSection;
