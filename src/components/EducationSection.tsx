
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Vardhaman College of Engineering",
      location: "JNTUH Affiliated",
      period: "2022 - 2026",
      gpa: "9.03",
      honors: "CGPA",
      coursework: [
        "Data Structures and Algorithms",
        "Software Engineering",
        "Database Management Systems",
        "Machine Learning",
        "Web Development",
        "Computer Networks",
        "Operating Systems",
        "Object Oriented Programming"
      ],
      achievements: [
        "Maintained excellent academic performance",
        "Active participant in coding competitions",
        "Member of technical clubs and societies"
      ]
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Narayana Junior College",
      location: "Telangana Board of Intermediate Education",
      period: "2019 - 2021",
      gpa: "95%",
      honors: "Percentage",
      coursework: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "English"
      ],
      achievements: []
    },
    {
      degree: "10th Standard",
      institution: "St. Joseph High School",
      location: "Telangana Board of Secondary Education",
      period: "2019",
      gpa: "9.7",
      honors: "CGPA",
      coursework: [
        "Mathematics",
        "Science",
        "Social Studies",
        "English",
        "Telugu"
      ],
      achievements: []
    }
  ];

  const certifications = [
    {
      name: "NPTEL Discipline Star",
      issuer: "NPTEL",
      date: "Dec 2024",
      credentialId: "50+ weeks of CSE courses with distinction"
    },
    {
      name: "NPTEL Motivated Learner",
      issuer: "NPTEL",
      date: "Apr 2025",
      credentialId: "8+ courses across 4 semesters with 75%+ success rate"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic background and professional certifications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-12">
          {education.map((edu, index) => (
            <Card key={index} className="tech-glow hover:scale-[1.02] transition-all duration-300 h-fit">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-6 w-6 text-primary mt-1" />
                  <div className="flex-1">
                    <CardTitle className="text-lg gradient-text">{edu.degree}</CardTitle>
                    <CardDescription className="text-base font-medium text-foreground">
                      {edu.institution}
                    </CardDescription>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      <span>{edu.location}</span>
                    </div>
                    {edu.honors && (
                      <div className="flex items-center gap-2 mt-2">
                        <Award className="h-4 w-4 text-accent" />
                        <span className="text-accent font-medium">{edu.honors}: {edu.gpa}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {edu.coursework.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {edu.achievements.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2">Achievements:</h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">
            Professional <span className="gradient-text">Certifications</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="tech-glow hover:scale-[1.02] transition-all duration-300">
                <CardHeader className="text-center">
                  <Award className="h-8 w-8 text-accent mx-auto mb-2" />
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                  <CardDescription>{cert.issuer}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Issued: {cert.date}</p>
                  <p className="text-xs text-muted-foreground">{cert.credentialId}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
