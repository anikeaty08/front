import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const interactive = document.getElementById('interactive');
    let curX = 0, curY = 0, tgX = 0, tgY = 0;
    
    document.addEventListener('mousemove', (event) => {
      if (interactive) {
        const rect = interactive.getBoundingClientRect();
        tgX = event.clientX - rect.left;
        tgY = event.clientY - rect.top;
      }
    });
    
    function move() {
      curX = curX + (tgX - curX) / 20;
      curY = curY + (tgY - curY) / 20;
      if (interactive) {
        interactive.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    }
    
    move();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="h-screen w-screen relative overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]">
<svg className="hidden">
<defs>
<filter id="blurMe">
<fegaussianblur in="SourceGraphic" result="blur" stddeviation="10"></fegaussianblur>
<fecolormatrix in="blur" mode="matrix" result="goo" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"></fecolormatrix>
<feblend in="SourceGraphic" in2="goo"></feblend>
</filter>
</defs>
</svg>

<div className="absolute z-50 inset-0 flex flex-col items-center justify-center px-4 max-w-6xl mx-auto">
<h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/90 to-white/40 mb-6">
        Next Generation Digital Solutions
      </h1>
<p className="text-lg md:text-xl text-white/80 text-center max-w-3xl mb-10">
        Transform your digital presence with cutting-edge technology and innovative design solutions that drive real business results.
      </p>
<div className="flex flex-col sm:flex-row gap-4 z-10">
<button className="px-8 py-3 rounded-full bg-white text-indigo-900 font-medium hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Get Started
        </button>
<button className="px-8 py-3 rounded-full bg-transparent border-2 border-white/50 text-white font-medium hover:bg-white/10 transition-all">
          Learn More
        </button>
</div>

<div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 backdrop-blur-md rounded-2xl rotate-12 border border-white/10"></div>
<div className="absolute top-20 left-10 w-20 h-20 bg-white/5 backdrop-blur-md rounded-full border border-white/10"></div>
<div className="absolute bottom-20 left-20 w-16 h-16 bg-white/5 backdrop-blur-md rounded-md rotate-45 border border-white/10"></div>
</div>

<div className="gradients-container h-full w-full blur-lg [filter:url(#blurMe)_blur(40px)]">
<div className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--first-color),0.8)_0,_rgba(var(--first-color),0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:center_center] animate-first opacity-100"></div>
<div className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:calc(50%-400px)] animate-second opacity-100"></div>
<div className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:calc(50%+400px)] animate-third opacity-100"></div>
<div className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:calc(50%-200px)] animate-fourth opacity-70"></div>
<div className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:calc(50%-800px)_calc(50%+800px)] animate-fifth opacity-100"></div>
<div className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2 opacity-70" id="interactive"></div>
</div>
</div>


    </>
  );
}
