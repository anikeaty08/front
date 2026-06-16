import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        tailwind.config = {
            content: ["./src/**/*.{ts,tsx}"],
            darkMode: "class",
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
                            "0%": {
                                transform: "translateX(-50%) translateY(-10%)",
                            },
                            "50%": {
                                transform: "translateX(50%) translateY(10%)",
                            },
                            "100%": {
                                transform: "translateX(-50%) translateY(-10%)",
                            },
                        },
                        moveInCircle: {
                            "0%": {
                                transform: "rotate(0deg)",
                            },
                            "50%": {
                                transform: "rotate(180deg)",
                            },
                            "100%": {
                                transform: "rotate(360deg)",
                            },
                        },
                        moveVertical: {
                            "0%": {
                                transform: "translateY(-50%)",
                            },
                            "50%": {
                                transform: "translateY(50%)",
                            },
                            "100%": {
                                transform: "translateY(-50%)",
                            },
                        },
                    },
                },
            },
            plugins: [],
        };
    


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
      
<div className="h-screen w-screen relative overflow-hidden top-0 left-0 bg-gradient-to-br from-[var(--gradient-background-start)] to-[var(--gradient-background-end)]">
<svg className="hidden">
<defs>
<filter id="blurMe">
<fegaussianblur in="SourceGraphic" result="blur" stddeviation="10"></fegaussianblur>
<fecolormatrix in="blur" mode="matrix" result="goo" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"></fecolormatrix>
<feblend in="SourceGraphic" in2="goo"></feblend>
</filter>
</defs>
</svg>
<div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
<p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                Gradients X Animations
            </p>
</div>
<div className="gradients-container h-full w-full blur-lg [filter:url(#blurMe)_blur(40px)]">
<div className="absolute w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] bg-[var(--first-color)] rounded-full mix-blend-[var(--blending-value)] opacity-100 animate-first"></div>
<div className="absolute w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] bg-[var(--second-color)] rounded-full mix-blend-[var(--blending-value)] opacity-100 animate-second"></div>
<div className="absolute w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] bg-[var(--third-color)] rounded-full mix-blend-[var(--blending-value)] opacity-100 animate-third"></div>
<div className="absolute w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] bg-[var(--fourth-color)] rounded-full mix-blend-[var(--blending-value)] opacity-70 animate-fourth"></div>
<div className="absolute w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] bg-[var(--fifth-color)] rounded-full mix-blend-[var(--blending-value)] opacity-100 animate-fifth"></div>
<div className="absolute w-full h-full -top-1/2 -left-1/2 bg-[var(--pointer-color)] rounded-full mix-blend-[var(--blending-value)] opacity-70" id="interactive"></div>
</div>
</div>


    </>
  );
}
