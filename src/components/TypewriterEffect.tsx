
import { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
}

const TypewriterEffect = ({ 
  words, 
  speed = 100, 
  deleteSpeed = 50, 
  delayBetweenWords = 2000 
}: TypewriterEffectProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = words[currentWordIndex];
      
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, speed, deleteSpeed, delayBetweenWords]);

  return (
    <span className="typewriter text-primary font-mono">
      {currentText}
    </span>
  );
};

export default TypewriterEffect;
