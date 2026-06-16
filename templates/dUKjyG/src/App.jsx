import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        tailwind.config = {
            theme: {
                extend: {
                    animation: {
                        first: "moveVertical 30s ease infinite",
                        second: "moveInCircle 20s reverse infinite",
                        third: "moveInCircle 40s linear infinite",
                        fourth: "moveHorizontal 40s ease infinite",
                        fifth: "moveInCircle 20s ease infinite",
                    },
                    keyframes: {
                        moveHorizontal: {
                            "0%": { transform: "translateX(-50%) translateY(-10%)" },
                            "50%": { transform: "translateX(50%) translateY(10%)" },
                            "100%": { transform: "translateX(-50%) translateY(-10%)" }
                        },
                        moveInCircle: {
                            "0%": { transform: "rotate(0deg)" },
                            "50%": { transform: "rotate(180deg)" },
                            "100%": { transform: "rotate(360deg)" }
                        },
                        moveVertical: {
                            "0%": { transform: "translateY(-50%)" },
                            "50%": { transform: "translateY(50%)" },
                            "100%": { transform: "translateY(-50%)" }
                        }
                    }
                }
            }
        };
    


        const interactiveGradient = document.getElementById('interactiveGradient');
        let curX = 0, curY = 0, tgX = 0, tgY = 0;

        document.addEventListener('mousemove', (e) => {
            const rect = interactiveGradient.getBoundingClientRect();
            tgX = e.clientX - rect.left;
            tgY = e.clientY - rect.top;
        });

        function animate() {
            curX = curX + (tgX - curX) / 20;
            curY = curY + (tgY - curY) / 20;
            interactiveGradient.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
            requestAnimationFrame(animate);
        }

        animate();
    
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
<div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
<h1 className="text-5xl md:text-7xl font-bold mb-8 text-center">Animated Gradient Background</h1>
<p className="text-xl md:text-2xl max-w-2xl text-center mb-12">A beautiful animated background with interactive mouse movement effects</p>
<div className="flex space-x-4">
<button className="px-6 py-3 bg-white text-purple-900 rounded-lg font-medium hover:bg-opacity-90 transition">Get Started</button>
<button className="px-6 py-3 bg-transparent border-2 border-white rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition">Learn More</button>
</div>
</div>
<div className="gradients-container h-full w-full blur-lg [filter:url(#blurMe)_blur(40px)]">
<div className="absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:center_center] animate-first opacity-100"></div>
<div className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:calc(50%-400px)] animate-second opacity-100"></div>
<div className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:calc(50%+400px)] animate-third opacity-100"></div>
<div className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:calc(50%-200px)] animate-fourth opacity-70"></div>
<div className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:calc(50%-800px)_calc(50%+800px)] animate-fifth opacity-100"></div>
<div className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2 opacity-70" id="interactiveGradient"></div>
</div>
</div>


    </>
  );
}
