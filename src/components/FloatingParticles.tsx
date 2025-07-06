
import { useEffect } from 'react';

const FloatingParticles = () => {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
      
      const particlesContainer = document.querySelector('.floating-particles');
      if (particlesContainer) {
        particlesContainer.appendChild(particle);
        
        setTimeout(() => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
          }
        }, 7000);
      }
    };

    const interval = setInterval(createParticle, 300);
    
    return () => clearInterval(interval);
  }, []);

  return <div className="floating-particles" />;
};

export default FloatingParticles;
