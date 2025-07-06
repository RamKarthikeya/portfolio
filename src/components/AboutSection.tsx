
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions that bridge technology and real-world impact
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="tech-glow bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 gradient-text">Ram Karthikeya Thota</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Software Developer | AI Enthusiast | Cloud Learner
                  </p>
                  <p className="text-foreground leading-relaxed mb-6">
                    I'm a Computer Science student with a passion for building scalable software solutions. 
                    My journey spans across cloud technologies, artificial intelligence, and modern web development, 
                    with hands-on experience leading teams and delivering enterprise-grade applications.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Currently pursuing my B.Tech in Computer Science Engineering with a CGPA of 9.03, 
                    I combine academic excellence with practical experience through internships, 
                    hackathons, and real-world projects.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/20">
                      <div className="text-2xl font-bold text-primary mb-1">9.03</div>
                      <div className="text-sm text-muted-foreground">CGPA</div>
                    </div>
                    <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/20">
                      <div className="text-2xl font-bold text-primary mb-1">10+</div>
                      <div className="text-sm text-muted-foreground">Projects</div>
                    </div>
                    <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/20">
                      <div className="text-2xl font-bold text-primary mb-1">3+</div>
                      <div className="text-sm text-muted-foreground">Technologies</div>
                    </div>
                    <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/20">
                      <div className="text-2xl font-bold text-primary mb-1">10</div>
                      <div className="text-sm text-muted-foreground">Team Size Led</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
