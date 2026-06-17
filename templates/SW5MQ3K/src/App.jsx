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



        let currentSection = 0;
        const totalSections = 5;
        let isScrolling = false;
        
        const sections = document.querySelectorAll('.section');
        const dots = document.querySelectorAll('.nav-dot');
        
        function updateSection(index) {
            if (index < 0 || index >= totalSections) return;
            
            // Remove active states
            sections.forEach((section, i) => {
                section.classList.remove('active', 'prev');
                if (i < index) {
                    section.classList.add('prev');
                }
            });
            
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Add active states
            sections[index].classList.add('active');
            dots[index].classList.add('active');
            
            currentSection = index;
        }
        
        function handleScroll(event) {
            if (isScrolling) return;
            
            isScrolling = true;
            
            if (event.deltaY > 0) {
                // Scroll down
                if (currentSection < totalSections - 1) {
                    updateSection(currentSection + 1);
                }
            } else {
                // Scroll up
                if (currentSection > 0) {
                    updateSection(currentSection - 1);
                }
            }
            
            setTimeout(() => {
                isScrolling = false;
            }, 800);
        }
        
        // Mouse wheel event
        window.addEventListener('wheel', handleScroll, { passive: false });
        
        // Touch events for mobile
        let touchStartY = 0;
        let touchEndY = 0;
        
        window.addEventListener('touchstart', (e) => {
            touchStartY = e.changedTouches[0].screenY;
        });
        
        window.addEventListener('touchend', (e) => {
            if (isScrolling) return;
            
            touchEndY = e.changedTouches[0].screenY;
            const diff = touchStartY - touchEndY;
            
            if (Math.abs(diff) > 50) {
                isScrolling = true;
                
                if (diff > 0 && currentSection < totalSections - 1) {
                    updateSection(currentSection + 1);
                } else if (diff < 0 && currentSection > 0) {
                    updateSection(currentSection - 1);
                }
                
                setTimeout(() => {
                    isScrolling = false;
                }, 800);
            }
        });
        
        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                if (!isScrolling) {
                    updateSection(index);
                }
            });
        });
        
        // Keyboard navigation
        window.addEventListener('keydown', (e) => {
            if (isScrolling) return;
            
            if (e.key === 'ArrowDown' || e.key === 'PageDown') {
                e.preventDefault();
                if (currentSection < totalSections - 1) {
                    updateSection(currentSection + 1);
                }
            } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
                e.preventDefault();
                if (currentSection > 0) {
                    updateSection(currentSection - 1);
                }
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
      

<div className="static-bg"></div>

<div className="scroll-trigger" id="scrollTrigger"></div>

<div className="viewport">

<section className="section active" data-section="0">
<div className="content-container">
<div className="section-content text-white">
<h1 className="text-6xl md:text-8xl font-light mb-6 text-accent">
                        Welcome
                    </h1>
<p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
                        Experience smooth scroll-driven transitions in elegant darkness
                    </p>
<button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-all shadow-lg">
                        Get Started
                    </button>
</div>
</div>
</section>

<section className="section" data-section="1">
<div className="content-container">
<div className="section-content text-white">
<h2 className="text-5xl md:text-6xl font-light mb-8 text-accent">
                        Features
                    </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
<div className="glass-card p-6">
<h3 className="text-2xl font-medium mb-4 text-white">Smooth Transitions</h3>
<p className="text-gray-400">Fluid animations between sections</p>
</div>
<div className="glass-card p-6">
<h3 className="text-2xl font-medium mb-4 text-white">Dark Aesthetic</h3>
<p className="text-gray-400">Rich blacks and sophisticated grays</p>
</div>
<div className="glass-card p-6">
<h3 className="text-2xl font-medium mb-4 text-white">Scroll Control</h3>
<p className="text-gray-400">Navigate with mouse wheel or touch</p>
</div>
</div>
</div>
</div>
</section>

<section className="section" data-section="2">
<div className="content-container">
<div className="section-content text-white">
<h2 className="text-5xl md:text-6xl font-light mb-8 text-accent">
                        About
                    </h2>
<p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-16">
                        This landing page demonstrates scroll-driven animations with a sophisticated dark theme. 
                        Deep blacks and elegant grays create a premium, modern experience.
                    </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="text-center">
<h3 className="text-4xl font-light mb-2 text-white">100%</h3>
<p className="text-gray-500">Dark</p>
</div>
<div className="text-center">
<h3 className="text-4xl font-light mb-2 text-white">5</h3>
<p className="text-gray-500">Sections</p>
</div>
<div className="text-center">
<h3 className="text-4xl font-light mb-2 text-white">∞</h3>
<p className="text-gray-500">Possibilities</p>
</div>
</div>
</div>
</div>
</section>

<section className="section" data-section="3">
<div className="content-container">
<div className="section-content text-white">
<h2 className="text-5xl md:text-6xl font-light mb-8 text-accent">
                        Portfolio
                    </h2>
<p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                        Showcasing projects with elegant dark aesthetics
                    </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="glass-card p-8">
<h3 className="text-2xl font-medium mb-4 text-white">Project Obsidian</h3>
<p className="text-gray-400 mb-6">Dark-themed web experience with sophisticated animations</p>
<button className="text-white border border-gray-600 px-6 py-2 rounded-full hover:bg-gray-800/50 transition-all">
                                View Project
                            </button>
</div>
<div className="glass-card p-8">
<h3 className="text-2xl font-medium mb-4 text-white">Project Midnight</h3>
<p className="text-gray-400 mb-6">Premium landing page with deep black gradients</p>
<button className="text-white border border-gray-600 px-6 py-2 rounded-full hover:bg-gray-800/50 transition-all">
                                View Project
                            </button>
</div>
</div>
</div>
</div>
</section>

<section className="section" data-section="4">
<div className="content-container">
<div className="section-content text-white">
<h2 className="text-5xl md:text-6xl font-light mb-8 text-accent">
                        Contact
                    </h2>
<p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
                        Ready to create something beautifully dark together?
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-all shadow-lg">
                            Get in Touch
                        </button>
<button className="border border-gray-600 px-8 py-3 rounded-full font-medium hover:bg-gray-800/50 transition-all text-white">
                            View Resume
                        </button>
</div>
</div>
</div>
</section>
</div>

<div className="dot-nav">
<div className="nav-dot active" data-target="0"></div>
<div className="nav-dot" data-target="1"></div>
<div className="nav-dot" data-target="2"></div>
<div className="nav-dot" data-target="3"></div>
<div className="nav-dot" data-target="4"></div>
</div>

<div className="scroll-indicator">
        Scroll to navigate
    </div>


    </>
  );
}
