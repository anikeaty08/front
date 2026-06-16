import React, { useState } from 'react';

const NetworkSlider = () => {
  const steps = ['Base', 'Edge', 'Mesh', 'Node', 'Cloud'];
  const [activeStep, setActiveStep] = useState(2); // Default to Mesh

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  return (
    <div className="w-full">
      {/* Track Line */}
      <div className="w-full h-[1px] bg-white/10 relative">
        {/* Track Progress Fill (Optional enhancement) */}
        <div 
          className="absolute top-0 left-0 h-full bg-[#60A5FA]/30 transition-all duration-500 ease-out"
          style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
        />
        
        {/* Thumb / Active Indicator */}
        <div 
          className="absolute top-1/2 w-3 h-3 bg-[#60A5FA] rounded-full animate-pulse-glow transition-all duration-500 ease-out"
          style={{ 
            left: `${(activeStep / (steps.length - 1)) * 100}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>

      {/* Labels */}
      <div className="flex justify-between mt-4 w-full font-inter relative">
        {steps.map((step, index) => (
          <span 
            key={step}
            onClick={() => handleStepClick(index)}
            className={`text-xs font-light tracking-widest uppercase transition-colors cursor-pointer select-none
              ${index === activeStep 
                ? 'text-[#60A5FA]' 
                : 'text-white/30 hover:text-white/70'
              }
            `}
            style={{
              // Adjust alignment so first and last labels don't overflow the container
              transform: index === 0 ? 'translateX(0)' : index === steps.length - 1 ? 'translateX(0)' : 'translateX(0)'
            }}
          >
            {step}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NetworkSlider;