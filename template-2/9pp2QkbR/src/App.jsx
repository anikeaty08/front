import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}

    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        manrope: ['Manrope', 'sans-serif'],
                        inter: ['Inter', 'sans-serif'],
                    }
                }
            }
        }
    


        document.addEventListener('DOMContentLoaded', () => {
            const canvas = document.getElementById('beamsCanvas');
            const ctx = canvas.getContext('2d');
            let beams = [];
            const MINIMUM_BEAMS = 20;
            
            function updateCanvasSize() {
                const dpr = window.devicePixelRatio || 1;
                canvas.width = window.innerWidth * dpr;
                canvas.height = window.innerHeight * dpr;
                canvas.style.width = `${window.innerWidth}px`;
                canvas.style.height = `${window.innerHeight}px`;
                ctx.scale(dpr, dpr);
                
                // Initialize beams
                const totalBeams = MINIMUM_BEAMS * 1.5;
                beams = Array.from({ length: totalBeams }, () => createBeam(canvas.width, canvas.height));
            }
            
            function createBeam(width, height) {
                const angle = -35 + Math.random() * 10;
                return {
                    x: Math.random() * width * 1.5 - width * 0.25,
                    y: Math.random() * height * 1.5 - height * 0.25,
                    width: 30 + Math.random() * 60,
                    length: height * 2.5,
                    angle: angle,
                    speed: 0.6 + Math.random() * 1.2,
                    opacity: 0.12 + Math.random() * 0.16,
                    hue: 190 + Math.random() * 70,
                    pulse: Math.random() * Math.PI * 2,
                    pulseSpeed: 0.02 + Math.random() * 0.03,
                }
            }
            
            function resetBeam(beam, index, totalBeams) {
                beam.y = canvas.height + 100;
                const column = index % 3;
                const spacing = canvas.width / 3;
                
                beam.x = column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5;
                beam.width = 100 + Math.random() * 100;
                beam.speed = 0.5 + Math.random() * 0.4;
                beam.hue = 190 + (index * 70) / totalBeams;
                beam.opacity = 0.2 + Math.random() * 0.1;
                return beam;
            }
            
            function drawBeam(beam) {
                ctx.save();
                ctx.translate(beam.x, beam.y);
                ctx.rotate((beam.angle * Math.PI) / 180);
                
                // Calculate pulsing opacity
                const pulsingOpacity = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2);
                
                const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
                
                // Enhanced gradient with multiple color stops
                gradient.addColorStop(0, `hsla(${beam.hue}, 85%, 65%, 0)`);
                gradient.addColorStop(0.1, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`);
                gradient.addColorStop(0.4, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`);
                gradient.addColorStop(0.6, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`);
                gradient.addColorStop(0.9, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`);
                gradient.addColorStop(1, `hsla(${beam.hue}, 85%, 65%, 0)`);
                
                ctx.fillStyle = gradient;
                ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
                ctx.restore();
            }
            
            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.filter = "blur(35px)";
                
                const totalBeams = beams.length;
                beams.forEach((beam, index) => {
                    beam.y -= beam.speed;
                    beam.pulse += beam.pulseSpeed;
                    
                    // Reset beam when it goes off screen
                    if (beam.y + beam.length < -100) {
                        resetBeam(beam, index, totalBeams);
                    }
                    
                    drawBeam(beam);
                });
                
                requestAnimationFrame(animate);
            }
            
            updateCanvasSize();
            window.addEventListener('resize', updateCanvasSize);
            animate();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      
<div className="relative min-h-screen w-full overflow-hidden bg-neutral-950">

<canvas className="absolute inset-0" id="beamsCanvas"></canvas>

<div className="absolute inset-0 bg-neutral-950/5" style={{backdropFilter: `blur(50px)`}}></div>

<div className="relative z-10 container mx-auto px-4 py-12 min-h-screen flex flex-col">

<header className="mb-12 pt-8">
<h1 className="font-manrope text-[72px] leading-tight font-light tracking-normal text-white">
                    About Us
                </h1>
<p className="font-inter text-[18px] text-white/70 max-w-2xl">
                    We're a team of passionate creators dedicated to building exceptional experiences
                </p>
</header>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow">

<div className="md:col-span-2 md:row-span-2 bg-white/5 backdrop-blur-lg rounded-xl p-8 flex flex-col">
<h2 className="font-manrope text-[32px] font-light mb-4">Our Mission</h2>
<p className="font-inter text-[14px] text-white/80 mb-6">
                        At our core, we believe in pushing boundaries and creating digital experiences that inspire. 
                        Founded in 2018, we've been on a journey to redefine what's possible in the digital landscape.
                    </p>
<p className="font-inter text-[14px] text-white/80 mb-6">
                        Our approach combines cutting-edge technology with thoughtful design to create solutions 
                        that are not only visually stunning but also highly functional and user-centric.
                    </p>
<div className="mt-auto">
<button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-inter text-[14px] transition-all">
                            Learn more about our values
                        </button>
</div>
</div>

<div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
<h3 className="font-manrope text-[20px] font-light mb-3">Our Team</h3>
<p className="font-inter text-[13px] text-white/80">
                        A diverse group of designers, developers, and strategists working together to create exceptional products.
                    </p>
</div>
<div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
<h3 className="font-manrope text-[20px] font-light mb-3">Our Process</h3>
<p className="font-inter text-[13px] text-white/80">
                        We follow a collaborative, iterative approach that puts users at the center of everything we do.
                    </p>
</div>
<div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
<h3 className="font-manrope text-[20px] font-light mb-3">Our Clients</h3>
<p className="font-inter text-[13px] text-white/80">
                        From startups to enterprise, we partner with forward-thinking organizations across industries.
                    </p>
</div>
<div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
<h3 className="font-manrope text-[20px] font-light mb-3">Our Impact</h3>
<p className="font-inter text-[13px] text-white/80">
                        We're committed to creating positive change through technology and sustainable practices.
                    </p>
</div>

<div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
<h3 className="font-manrope text-[20px] font-light mb-3">Our Vision</h3>
<p className="font-inter text-[13px] text-white/80">
                        Building a future where technology enhances human connection and creates meaningful experiences for everyone.
                    </p>
</div>
</div>
</div>
</div>


    </>
  );
}
