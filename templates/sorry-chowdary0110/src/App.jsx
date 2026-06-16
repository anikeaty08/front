import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // Initial Hero Animation
            setTimeout(() => {
                document.getElementById('hero-title').classList.remove('opacity-0', 'translate-y-12');
                document.getElementById('hero-subtitle').classList.remove('opacity-0', 'translate-y-8');
                document.getElementById('btn-start').classList.remove('opacity-0', 'translate-y-8');
            }, 100);

            const hero = document.getElementById('hero');
            const blast = document.getElementById('blast');
            const floodContainer = document.getElementById('flood-container');
            const centerMessage = document.getElementById('center-message');
            const bgGlow = document.getElementById('bg-glow');

            // Start Experience
            document.getElementById('btn-start').addEventListener('click', () => {
                // Fade out hero
                hero.classList.add('opacity-0', 'scale-90', 'blur-sm');
                
                setTimeout(() => {
                    hero.classList.add('hidden');
                    blast.classList.remove('hidden');
                    
                    // Trigger dynamic background pulse
                    bgGlow.classList.remove('opacity-[0.02]', 'w-[80vw]', 'h-[80vw]');
                    bgGlow.classList.add('opacity-[0.08]', 'w-[150vw]', 'h-[150vw]', 'animate-pulse');

                    triggerFlood(1);

                    // Show emotional center message after flood begins
                    setTimeout(() => {
                        centerMessage.classList.remove('opacity-0', 'scale-95');
                    }, 2800);

                }, 1000);
            });

            // Function to generate the "SORRY" flood effect
            function triggerFlood(intensity = 1) {
                const words = ["SORRY", "sorry", "I'm sorry", "forgive me"];
                const count = 40 * intensity;
                
                for(let i = 0; i < count; i++) {
                    const el = document.createElement('div');
                    const word = words[Math.floor(Math.random() * words.length)];
                    el.innerText = word;
                    
                    // Base styles
                    el.className = 'absolute text-[#E1E0CC] whitespace-nowrap transition-all ease-out';
                    
                    // Randomize properties
                    const size = Math.random() * 8 + 2; // 2vw to 10vw
                    const left = Math.random() * 120 - 10; // -10vw to 110vw
                    const top = Math.random() * 120 - 10; // -10vh to 110vh
                    const rot = (Math.random() - 0.5) * 90; // Rotation
                    const duration = Math.random() * 3000 + 2000; // 2s to 5s
                    const delay = Math.random() * 1500; // Staggered start
                    
                    // Styling
                    el.style.left = `${left}vw`;
                    el.style.top = `${top}vh`;
                    el.style.fontSize = `${size}vw`;
                    el.style.transitionDuration = `${duration}ms`;
                    
                    // Typography mix
                    if (Math.random() > 0.5) {
                        el.style.fontFamily = "'Instrument Serif', serif";
                        el.style.fontStyle = "italic";
                        el.style.fontWeight = "400";
                        el.style.textTransform = "lowercase";
                    } else {
                        el.style.fontFamily = "'Almarai', sans-serif";
                        el.style.fontWeight = "700";
                        el.style.letterSpacing = "-0.05em";
                    }

                    // Initial state (hidden, scaled down)
                    el.style.opacity = '0';
                    el.style.transform = `translate(-50%, -50%) rotate(${rot - 20}deg) scale(0.5)`;
                    el.style.filter = "blur(10px)";

                    floodContainer.appendChild(el);

                    // Animate to visible state
                    setTimeout(() => {
                        const maxOpacity = Math.random() * 0.15 + 0.05; // 5% to 20% opacity
                        el.style.opacity = maxOpacity.toString();
                        el.style.transform = `translate(-50%, -50%) rotate(${rot}deg) scale(1) translate(${(Math.random()-0.5)*100}px, ${(Math.random()-0.5)*100}px)`;
                        el.style.filter = "blur(0px)";
                        
                        // Keep subtle movement going
                        setInterval(() => {
                            el.style.transform = `translate(-50%, -50%) rotate(${rot}deg) scale(1) translate(${(Math.random()-0.5)*20}px, ${(Math.random()-0.5)*20}px)`;
                        }, duration);

                    }, delay);
                }
            }

        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none absolute inset-0 z-50 opacity-[0.04]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>

<div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
<div className="w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-[#E1E0CC] opacity-[0.02] blur-[100px] transition-all duration-1000 ease-in-out" id="bg-glow"></div>
</div>

<main className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-4xl transition-all duration-1000 ease-in-out transform" id="hero">
<h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tighter font-light opacity-0 translate-y-12 transition-all duration-[1500ms] ease-out" id="hero-title" style={{fontFamily: '\'Instrument Serif\', serif', fontStyle: 'italic'}}>
            I messed up...
        </h1>
<p className="mt-8 text-base md:text-xl font-light opacity-0 translate-y-8 transition-all duration-[1500ms] delay-500 ease-out text-[#E1E0CC]/70 tracking-wide" id="hero-subtitle">
            But I really want to say something to you.
        </p>
<button className="mt-14 px-8 py-4 bg-[#E1E0CC] text-black rounded-full text-sm font-medium tracking-wide hover:bg-white hover:scale-105 active:scale-95 transition-all duration-500 opacity-0 translate-y-8 delay-1000 ease-out flex items-center gap-3 group" id="btn-start">
            Click if you'll forgive me
            <iconify-icon className="text-lg group-hover:text-red-500 transition-colors duration-300" icon="solar:heart-linear"></iconify-icon>
</button>
</main>

<section className="fixed inset-0 z-20 hidden w-full h-full" id="blast">

<div className="absolute inset-0 overflow-hidden pointer-events-none" id="flood-container"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center z-30 opacity-0 scale-95 transition-all duration-[2000ms] ease-out px-6 text-center bg-black/20 backdrop-blur-[2px]" id="center-message">
<div className="flex flex-col items-center" id="message-content">
<h2 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter font-light mb-6" style={{fontFamily: '\'Instrument Serif\', serif', fontStyle: 'italic'}}>
                    I'm really sorry.
                </h2>
</div>

<div className="hidden flex-col items-center" id="final-state">
<iconify-icon className="text-6xl text-[#E1E0CC] mb-8 animate-pulse" icon="solar:heart-bold"></iconify-icon>
<h3 className="text-4xl md:text-6xl tracking-tighter font-light" style={{fontFamily: '\'Instrument Serif\', serif', fontStyle: 'italic'}}>
                    Thank you...
                </h3>
<p className="mt-4 text-sm md:text-base text-[#E1E0CC]/70 font-light tracking-wide">
                    You mean a lot to me.
                </p>
</div>
</div>
</section>


    </>
  );
}
