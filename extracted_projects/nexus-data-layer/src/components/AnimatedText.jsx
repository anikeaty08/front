import React from 'react';

const AnimatedText = ({ text, delayOffset = 0 }) => {
  // Split by <br/> or spaces, keeping the tags
  const parts = text.split(/(<br\s*\/?>|\s+)/).filter(w => w.trim().length > 0 || w.toLowerCase().includes('<br'));
  
  let wordIndex = 0;

  return (
    <>
      {parts.map((part, i) => {
        if (part.toLowerCase().includes('<br')) {
          return <br key={i} />;
        }
        
        // Skip purely whitespace parts for rendering logic, 
        // but we'll add natural spacing via margins
        if (part.trim() === '') return null;

        const currentIndex = wordIndex++;
        
        return (
          <span 
            key={i} 
            className="inline-block overflow-hidden align-bottom pb-1 -mb-1 mr-[0.2em]"
          >
            <span
              className="inline-block opacity-0 translate-y-full reveal-word-animate"
              style={{ animationDelay: `${delayOffset + currentIndex * 0.04}s` }}
            >
              {part}
            </span>
          </span>
        );
      })}
    </>
  );
};

export default AnimatedText;