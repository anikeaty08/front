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
                        'work': ['Work Sans', 'sans-serif'],
                        'manrope': ['Manrope', 'sans-serif'],
                    }
                }
            }
        }
    


        document.addEventListener('DOMContentLoaded', () => {
            // Initialize ParticlesJS
            particlesJS('particles-js', {
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: "#ffffff" },
                    shape: { type: "circle" },
                    opacity: { value: 0.5, random: false },
                    size: { value: 3, random: true },
                    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                    move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
                    modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
                },
                retina_detect: true
            });

            const sections = document.querySelectorAll('.section');
            const dots = document.querySelectorAll('.progress-dot');
            const magneticElements = document.querySelectorAll('.magnetic');
            let currentIndex = 0;
            let isScrolling = false;
            let touchStartY = 0;
            
            // Initialize
            updateActiveDot(currentIndex);
            
            // Magnetic effect
            magneticElements.forEach(el => {
                el.addEventListener('mousemove', (e) => {
                    const rect = el.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
                });
                
                el.addEventListener('mouseleave', () => {
                    el.style.transform = 'translate(0px, 0px)';
                });
            });
            
            // Scroll event
            window.addEventListener('wheel', (e) => {
                if (isScrolling) return;
                
                isScrolling = true;
                if (e.deltaY > 0) {
                    if (currentIndex < sections.length - 1) {
                        currentIndex++;
                        changeSection(currentIndex);
                    }
                } else {
                    if (currentIndex > 0) {
                        currentIndex--;
                        changeSection(currentIndex);
                    }
                }
                
                setTimeout(() => {
                    isScrolling = false;
                }, 1200);
            });
            
            // Touch events
            document.addEventListener('touchstart', (e) => {
                touchStartY = e.touches[0].clientY;
            });
            
            document.addEventListener('touchend', (e) => {
                if (isScrolling) return;
                
                const touchEndY = e.changedTouches[0].clientY;
                const diff = touchStartY - touchEndY;
                
                isScrolling = true;
                if (diff > 50) {
                    if (currentIndex < sections.length - 1) {
                        currentIndex++;
                        changeSection(currentIndex);
                    }
                } else if (diff < -50) {
                    if (currentIndex > 0) {
                        currentIndex--;
                        changeSection(currentIndex);
                    }
                }
                
                setTimeout(() => {
                    isScrolling = false;
                }, 1200);
            });
            
            // Click on dots
            dots.forEach(dot => {
                dot.addEventListener('click', () => {
                    const index = parseInt(dot.getAttribute('data-index'));
                    currentIndex = index;
                    changeSection(currentIndex);
                });
            });
            
            function changeSection(index) {
                sections.forEach(section => {
                    section.classList.remove('active');
                });
                
                sections[index].classList.add('active');
                updateActiveDot(index);
                
                const reveals = sections[index].querySelectorAll('.reveal');
                reveals.forEach((el, i) => {
                    setTimeout(() => {
                        el.classList.add('active');
                    }, i * 150);
                });
                
                sections.forEach((section, i) => {
                    if (i !== index) {
                        const otherReveals = section.querySelectorAll('.reveal');
                        otherReveals.forEach(el => {
                            el.classList.remove('active');
                        });
                    }
                });
            }
            
            function updateActiveDot(index) {
                dots.forEach(dot => {
                    dot.classList.remove('active');
                });
                dots[index].classList.add('active');
            }
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
      

<nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50">
<div className="text-4xl font-work font-light tracking-wide magnetic glitch" data-text="AURA">AURA</div>
<div className="space-x-12 hidden md:block font-manrope text-lg">
<a className="magnetic hover:text-gray-300 transition-all duration-300 hover:scale-110" href="#">Work</a>
<a className="magnetic hover:text-gray-300 transition-all duration-300 hover:scale-110" href="#">About</a>
<a className="magnetic hover:text-gray-300 transition-all duration-300 hover:scale-110" href="#">Contact</a>
</div>
<div className="md:hidden">
<button className="text-3xl magnetic">☰</button>
</div>
</nav>

<div className="progress-bar">
<div className="progress-dot" data-index="0"></div>
<div className="progress-dot" data-index="1"></div>
<div className="progress-dot" data-index="2"></div>
<div className="progress-dot" data-index="3"></div>
</div>

<section className="section active bg-black" data-index="0">
<div id="particles-js"></div>
<div className="content-overlay container mx-auto h-full flex flex-col justify-center px-8">
<h1 className="font-work font-light heading-tight mb-8 reveal active glitch" data-text="Creative Experiences" style={{fontSize: 'clamp(96px, 12vw, 140px)', lineHeight: '0.85'}}>
<span className="text-gradient">Creative</span><br/>Experiences
            </h1>
<p className="font-manrope text-gray-300 max-w-3xl reveal active" style={{fontSize: '24px', lineHeight: '1.4', transitionDelay: '0.2s'}}>
                We craft immersive digital journeys that redefine interaction and push the boundaries of what's possible.
            </p>
<div className="mt-16 reveal active" style={{transitionDelay: '0.4s'}}>
<button className="border-2 border-white px-12 py-4 font-manrope hover:bg-white hover:text-black transition-all duration-500 pulse-btn magnetic text-lg tracking-wide">
                    Explore Our Universe
                </button>
</div>
</div>
</section>
<section className="section bg-gray-900" data-index="1">
<div className="container mx-auto h-full flex flex-col justify-center px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-work font-light heading-tight mb-8 reveal glitch" data-text="Latest Project" style={{fontSize: 'clamp(64px, 8vw, 88px)', lineHeight: '0.9'}}>Latest Project</h2>
<p className="font-manrope text-gray-300 mb-12 reveal" style={{fontSize: '20px', lineHeight: '1.5', transitionDelay: '0.2s'}}>
                        An award-winning campaign that transformed how users experience digital storytelling through innovative interaction design and immersive technologies.
                    </p>
<div className="reveal" style={{transitionDelay: '0.4s'}}>
<a className="underline font-manrope text-white hover:text-gray-300 transition-all duration-300 hover:scale-105 inline-block text-lg magnetic" href="#">
                            View Case Study →
                        </a>
</div>
</div>
<div className="reveal floating" style={{transitionDelay: '0.3s'}}>
<div className="h-96 lg:h-[500px] bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-2xl interactive-card relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>
</div>
</div>
</div>
</section>
<section className="section bg-gray-800" data-index="2">
<div className="container mx-auto h-full flex flex-col justify-center px-8">
<h2 className="font-work font-light heading-tight mb-16 text-center reveal glitch" data-text="Our Services" style={{fontSize: 'clamp(64px, 8vw, 88px)', lineHeight: '0.9'}}>Our Services</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="p-8 border-2 border-gray-600 rounded-2xl interactive-card reveal" style={{transitionDelay: '0.2s'}}>
<div className="text-6xl mb-6">🎨</div>
<h3 className="font-work font-light heading-tight mb-6 text-3xl">Digital Design</h3>
<p className="font-manrope text-gray-300 text-lg leading-relaxed">Creating stunning visuals that capture attention and communicate effectively across all digital platforms with cutting-edge aesthetics.</p>
</div>
<div className="p-8 border-2 border-gray-600 rounded-2xl interactive-card reveal" style={{transitionDelay: '0.3s'}}>
<div className="text-6xl mb-6">⚡</div>
<h3 className="font-work font-light heading-tight mb-6 text-3xl">Development</h3>
<p className="font-manrope text-gray-300 text-lg leading-relaxed">Building interactive experiences with cutting-edge technologies and seamless user interactions that bring ideas to life.</p>
</div>
<div className="p-8 border-2 border-gray-600 rounded-2xl interactive-card reveal" style={{transitionDelay: '0.4s'}}>
<div className="text-6xl mb-6">🚀</div>
<h3 className="font-work font-light heading-tight mb-6 text-3xl">Strategy</h3>
<p className="font-manrope text-gray-300 text-lg leading-relaxed">Crafting comprehensive digital strategies to achieve ambitious business goals and drive exponential growth.</p>
</div>
</div>
</div>
</section>
<section className="section bg-black" data-index="3">
<div className="container mx-auto h-full flex flex-col justify-center items-center px-8 text-center">
<h2 className="font-work font-light heading-tight mb-8 reveal glitch floating" data-text="Let's Create Together" style={{fontSize: 'clamp(64px, 8vw, 88px)', lineHeight: '0.9'}}>Let's Create Together</h2>
<p className="font-manrope text-gray-300 max-w-4xl mb-16 reveal" style={{fontSize: '22px', lineHeight: '1.5', transitionDelay: '0.2s'}}>
                Ready to transform your digital presence? Get in touch with our team and let's build something extraordinary that will leave a lasting impact.
            </p>
<div className="reveal" style={{transitionDelay: '0.4s'}}>
<button className="bg-white text-black px-16 py-5 font-manrope hover:bg-gray-200 transition-all duration-500 pulse-btn magnetic text-xl tracking-wide rounded-full">
                    Start Your Journey
                </button>
</div>
</div>
</section>


    </>
  );
}
