import { Button } from '@/components/ui/button';
import TypewriterEffect from './TypewriterEffect';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const HeroSection = () => {
  const roles = ["Developer", "AI Explorer", "Cloud Learner", "Open Source Contributor"];

  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Path to resume in public folder
    link.download = 'Ram_Karthikeya_Thota_Resume.pdf'; // Downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('Resume download triggered');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 section-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="gradient-text">Ram Karthikeya</span>
              <br />
              <span className="text-foreground">Thota</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground mb-6 h-8">
              <TypewriterEffect words={roles} />
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Computer Science student passionate about building scalable software solutions 
              with a focus on cloud, AI, and modern web technologies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={handleResumeDownload}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg tech-glow"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="h-12 w-12 tech-glow border-primary/30 hover:bg-primary/20"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="icon" 
                className="h-12 w-12 tech-glow border-primary/30 hover:bg-primary/20"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="icon" 
                className="h-12 w-12 tech-glow border-primary/30 hover:bg-primary/20"
                asChild
              >
                <a href="mailto:ram@example.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
