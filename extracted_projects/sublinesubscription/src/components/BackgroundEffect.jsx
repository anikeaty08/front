import UnicornScene from "unicornstudio-react";

export default function BackgroundEffect() {
  return (
    <div 
      className="aura-background-component top-0 w-full h-screen -z-10 absolute hue-rotate-15 saturate-150" 
      data-alpha-mask="80" 
      style={{ 
        maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', 
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)' 
      }}
    >
      <div 
        className="aura-background-component top-0 w-full h-screen -z-10 absolute saturate-150" 
        data-alpha-mask="80" 
        style={{ 
          maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)' 
        }}
      >
        <div className="absolute top-0 left-0 -z-10 w-full h-full">
          <UnicornScene projectId="vi5SxDwDvEJMwkyTdyH8" />
        </div>
      </div>
    </div>
  );
}