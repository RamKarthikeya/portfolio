
import { Award, Trophy, Medal, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AchievementsSection = () => {
  const achievements = [
    {
      title: "IEEE-Sponsored International Conference",
      description: "Presented Research Paper: 'Blockchain-Enabled E-Voting: A Path to Secure and Transparent Elections' at 4th International Conference on Advancement in Electronics Communication Engineering at Raj Kumar Goel Institute of Technology, Ghaziabad",
      date: "Nov 2024",
      category: "Research",
      icon: Award,
      highlight: true
    },
    {
      title: "NPTEL Discipline Star",
      description: "Completed 50+ weeks of CSE courses with distinction across multiple semesters",
      date: "Dec 2024",
      category: "Academic Excellence",
      icon: Star,
      highlight: true
    },
    {
      title: "NPTEL Motivated Learner",
      description: "Completed 8+ NPTEL courses across 4 semesters with 75%+ success rate",
      date: "Apr 2025",
      category: "Continuous Learning",
      icon: Medal,
      highlight: false
    },
    {
      title: "VJ Hackathon Participant",
      description: "Certificate of Appreciation for participation in VJ Hackathon at VNRVJIET College",
      date: "Nov 2023 & Oct 2024",
      category: "Competition",
      icon: Trophy,
      highlight: false
    }
  ];

  const stats = [
    { number: "1", label: "Research Paper Published", description: "IEEE-sponsored conference" },
    { number: "50+", label: "NPTEL Course Weeks", description: "Completed with distinction" },
    { number: "8+", label: "NPTEL Courses", description: "Across 4 semesters" },
    { number: "2", label: "Hackathon Participations", description: "VJ Hackathon events" }
  ];

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Achievements & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Milestones and accomplishments throughout my journey
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="tech-glow text-center hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card 
                key={index} 
                className={`tech-glow hover:scale-[1.02] transition-all duration-300 ${
                  achievement.highlight ? 'border-primary/50 bg-primary/5' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${
                      achievement.highlight ? 'bg-primary/20' : 'bg-muted'
                    }`}>
                      <IconComponent className={`h-6 w-6 ${
                        achievement.highlight ? 'text-primary' : 'text-muted-foreground'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-lg">{achievement.title}</CardTitle>
                        <span className="text-sm text-muted-foreground">{achievement.date}</span>
                      </div>
                      <CardDescription className="text-base text-foreground/80">
                        {achievement.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      achievement.highlight 
                        ? 'bg-primary/20 text-primary border border-primary/30' 
                        : 'bg-secondary text-secondary-foreground'
                    }`}>
                      {achievement.category}
                    </span>
                    {achievement.highlight && (
                      <div className="flex items-center gap-1 text-primary">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm font-medium">Featured</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
