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



        // Initialize Lucide icons
        lucide.createIcons();
        
        // Cursor follow and glow effect
        const cursorGlow = document.getElementById('cursorGlow');
        const cursorDot = document.getElementById('cursorDot');
        const revealArea = document.getElementById('revealArea');
        const gridPattern = document.getElementById('gridPattern');
        const dotsPattern = document.getElementById('dotsPattern');
        const contentMask = document.getElementById('contentMask');
        
        // Generate grid lines
        function generateGrid() {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const gridSpacing = 50; // Space between grid lines
            
            // Clear existing grid
            gridPattern.innerHTML = '';
            
            // Create vertical lines
            for (let x = 0; x <= windowWidth; x += gridSpacing) {
                const line = document.createElement('div');
                line.className = 'grid-line vertical';
                line.style.left = x + 'px';
                line.style.top = '0px';
                gridPattern.appendChild(line);
            }
            
            // Create horizontal lines
            for (let y = 0; y <= windowHeight; y += gridSpacing) {
                const line = document.createElement('div');
                line.className = 'grid-line horizontal';
                line.style.top = y + 'px';
                line.style.left = '0px';
                gridPattern.appendChild(line);
            }
        }
        
        // Generate random dots - more dense
        function generateDots() {
            const numberOfDots = 800; // Increased density
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            
            // Clear existing dots
            dotsPattern.innerHTML = '';
            
            for (let i = 0; i < numberOfDots; i++) {
                const dot = document.createElement('div');
                dot.className = 'dot';
                dot.style.left = Math.random() * windowWidth + 'px';
                dot.style.top = Math.random() * windowHeight + 'px';
                dotsPattern.appendChild(dot);
            }
        }
        
        // Reveal grid lines and dots within cursor area with much larger radius
        function revealElements(x, y) {
            const revealRadius = 400; // Much larger reveal radius
            
            // Reveal grid lines
            const gridLines = gridPattern.querySelectorAll('.grid-line');
            gridLines.forEach(line => {
                const lineRect = line.getBoundingClientRect();
                let distance;
                
                if (line.classList.contains('vertical')) {
                    // For vertical lines, calculate distance from x position
                    distance = Math.abs(x - (lineRect.left + lineRect.width / 2));
                } else {
                    // For horizontal lines, calculate distance from y position
                    distance = Math.abs(y - (lineRect.top + lineRect.height / 2));
                }
                
                if (distance < revealRadius) {
                    line.style.opacity = Math.max(0, 0.8 - (distance / revealRadius));
                } else {
                    line.style.opacity = '0';
                }
            });
            
            // Reveal dots
            const dots = dotsPattern.querySelectorAll('.dot');
            dots.forEach(dot => {
                const dotRect = dot.getBoundingClientRect();
                const dotX = dotRect.left + dotRect.width / 2;
                const dotY = dotRect.top + dotRect.height / 2;
                
                const distance = Math.sqrt(Math.pow(x - dotX, 2) + Math.pow(y - dotY, 2));
                
                if (distance < revealRadius) {
                    dot.style.opacity = Math.max(0, 0.6 - (distance / revealRadius));
                } else {
                    dot.style.opacity = '0';
                }
            });
        }
        
        // Create mask effect with larger radius
        function createMaskEffect(x, y) {
            const maskRadius = 400;
            const maskStyle = `radial-gradient(circle ${maskRadius}px at ${x}px ${y}px, transparent 0%, transparent 30%, rgba(0, 0, 0, 0.7) 70%)`;
            contentMask.style.background = maskStyle;
        }
        
        // Mouse move handler
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            
            // Update cursor position
            cursorGlow.style.left = x + 'px';
            cursorGlow.style.top = y + 'px';
            cursorDot.style.left = x + 'px';
            cursorDot.style.top = y + 'px';
            revealArea.style.left = x + 'px';
            revealArea.style.top = y + 'px';
            
            // Reveal nearby elements
            revealElements(x, y);
            
            // Create mask effect
            createMaskEffect(x, y);
        });
        
        // Handle cursor size on hover
        document.addEventListener('mouseover', (e) => {
            if (e.target.matches('button, a, [role="button"]')) {
                cursorGlow.style.transform = 'translate(-50%, -50%) scale(1.2)';
                cursorDot.style.transform = 'translate(-50%, -50%) scale(2)';
                cursorGlow.style.background = 'radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(16, 185, 129, 0.12) 20%, rgba(16, 185, 129, 0.06) 40%, rgba(16, 185, 129, 0.03) 60%, transparent 80%)';
            }
        });
        
        document.addEventListener('mouseout', (e) => {
            if (e.target.matches('button, a, [role="button"]')) {
                cursorGlow.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorGlow.style.background = 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.08) 20%, rgba(16, 185, 129, 0.04) 40%, rgba(16, 185, 129, 0.02) 60%, transparent 80%)';
            }
        });
        
        // Hide cursor when leaving window
        document.addEventListener('mouseleave', () => {
            cursorGlow.style.opacity = '0';
            cursorDot.style.opacity = '0';
            contentMask.style.background = 'rgba(0, 0, 0, 0.7)';
            
            // Hide all elements
            const allElements = [...gridPattern.querySelectorAll('.grid-line'), ...dotsPattern.querySelectorAll('.dot')];
            allElements.forEach(el => el.style.opacity = '0');
        });
        
        document.addEventListener('mouseenter', () => {
            cursorGlow.style.opacity = '1';
            cursorDot.style.opacity = '1';
        });
        
        // Initialize patterns when page loads
        window.addEventListener('load', () => {
            generateGrid();
            generateDots();
        });
        
        // Regenerate patterns on resize
        window.addEventListener('resize', () => {
            generateGrid();
            generateDots();
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
      

<div className="cursor-glow" id="cursorGlow" style={{left: '1172px', top: '678px'}}></div>
<div className="cursor-dot" id="cursorDot" style={{left: '1172px', top: '678px'}}></div>
<div className="reveal-area" id="revealArea" style={{left: '1172px', top: '678px'}}></div>

<div className="grid-pattern" id="gridPattern"><div className="grid-line vertical" style={{left: '0px', top: '0px', opacity: '0'}}></div><div className="grid-line vertical" style={{left: '50px', top: '0px', opacity: '0'}}></div><div className="grid-line vertical" style={{left: '100px', top: '0px', opacity: '0'}}></div><div className="grid-line vertical" style={{left: '150px', top: '0px', opacity: '0'}}></div><div className="grid-line vertical" style={{left: '200px', top: '0px', opacity: '0'}}></div><div className="grid-line vertical" style={{left: '250px', top: '0px', opacity: '0'}}></div><div className="grid-line vertical" style={{left: '300px', top: '0px', opacity: '0'}}></div><div className="grid-line vertical" style={{left: '350px', top: '0px', opacity: '0'}}></div><div className="grid-line vertical" style={{left: '400px', top: '0px', opacity: '0'}}></div><div className="grid-line vertical" style={{left: '450px', top: '0px', opacity: '0'}}></div><div className="grid-line vertical" style={{left: '500px', top: '0px', opacity: '0'}}></div><div className="grid-line vertical" style={{left: '550px', top: '0px', opacity: '0'}}></div><div className="grid-line vertical" style={{left: '600px', top: '0px', opacity: '0'}}></div><div className="grid-line vertical" style={{left: '650px', top: '0px', opacity: '0'}}></div><div className="grid-line vertical" style={{left: '700px', top: '0px', opacity: '0'}}></div><div className="grid-line vertical" style={{left: '750px', top: '0px', opacity: '0'}}></div><div className="grid-line vertical" style={{left: '800px', top: '0px', opacity: '0'}}></div><div className="grid-line vertical" style={{left: '850px', top: '0px', opacity: '0'}}></div><div className="grid-line vertical" style={{left: '900px', top: '0px', opacity: '0.121241'}}></div><div className="grid-line vertical" style={{left: '950px', top: '0px', opacity: '0.246241'}}></div><div className="grid-line vertical" style={{left: '1000px', top: '0px', opacity: '0.371241'}}></div><div className="grid-line vertical" style={{left: '1050px', top: '0px', opacity: '0.496241'}}></div><div className="grid-line vertical" style={{left: '1100px', top: '0px', opacity: '0.621241'}}></div><div className="grid-line vertical" style={{left: '1150px', top: '0px', opacity: '0.746241'}}></div><div className="grid-line vertical" style={{left: '1200px', top: '0px', opacity: '0.728759'}}></div><div className="grid-line vertical" style={{left: '1250px', top: '0px', opacity: '0.603759'}}></div><div className="grid-line vertical" style={{left: '1300px', top: '0px', opacity: '0.478759'}}></div><div className="grid-line vertical" style={{left: '1350px', top: '0px', opacity: '0.353759'}}></div><div className="grid-line vertical" style={{left: '1400px', top: '0px', opacity: '0.228759'}}></div><div className="grid-line vertical" style={{left: '1450px', top: '0px', opacity: '0.103759'}}></div><div className="grid-line vertical" style={{left: '1500px', top: '0px', opacity: '0'}}></div><div className="grid-line vertical" style={{left: '1550px', top: '0px', opacity: '0'}}></div><div className="grid-line vertical" style={{left: '1600px', top: '0px', opacity: '0'}}></div><div className="grid-line vertical" style={{left: '1650px', top: '0px', opacity: '0'}}></div><div className="grid-line vertical" style={{left: '1700px', top: '0px', opacity: '0'}}></div><div className="grid-line vertical" style={{left: '1750px', top: '0px', opacity: '0'}}></div><div className="grid-line vertical" style={{left: '1800px', top: '0px', opacity: '0'}}></div><div className="grid-line vertical" style={{left: '1850px', top: '0px', opacity: '0'}}></div><div className="grid-line vertical" style={{left: '1900px', top: '0px', opacity: '0'}}></div><div className="grid-line vertical" style={{left: '1950px', top: '0px', opacity: '0'}}></div><div className="grid-line vertical" style={{left: '2000px', top: '0px', opacity: '0'}}></div><div className="grid-line vertical" style={{left: '2050px', top: '0px', opacity: '0'}}></div><div className="grid-line vertical" style={{left: '2100px', top: '0px', opacity: '0'}}></div><div className="grid-line vertical" style={{left: '2150px', top: '0px', opacity: '0'}}></div><div className="grid-line horizontal" style={{top: '0px', left: '0px', opacity: '0'}}></div><div className="grid-line horizontal" style={{top: '50px', left: '0px', opacity: '0'}}></div><div className="grid-line horizontal" style={{top: '100px', left: '0px', opacity: '0'}}></div><div className="grid-line horizontal" style={{top: '150px', left: '0px', opacity: '0'}}></div><div className="grid-line horizontal" style={{top: '200px', left: '0px', opacity: '0'}}></div><div className="grid-line horizontal" style={{top: '250px', left: '0px', opacity: '0'}}></div><div className="grid-line horizontal" style={{top: '300px', left: '0px', opacity: '0'}}></div><div className="grid-line horizontal" style={{top: '350px', left: '0px', opacity: '0'}}></div><div className="grid-line horizontal" style={{top: '400px', left: '0px', opacity: '0.106241'}}></div><div className="grid-line horizontal" style={{top: '450px', left: '0px', opacity: '0.231241'}}></div><div className="grid-line horizontal" style={{top: '500px', left: '0px', opacity: '0.356241'}}></div><div className="grid-line horizontal" style={{top: '550px', left: '0px', opacity: '0.481241'}}></div><div className="grid-line horizontal" style={{top: '600px', left: '0px', opacity: '0.606241'}}></div><div className="grid-line horizontal" style={{top: '650px', left: '0px', opacity: '0.731241'}}></div><div className="grid-line horizontal" style={{top: '700px', left: '0px', opacity: '0.743759'}}></div><div className="grid-line horizontal" style={{top: '750px', left: '0px', opacity: '0.618759'}}></div><div className="grid-line horizontal" style={{top: '800px', left: '0px', opacity: '0.493759'}}></div><div className="grid-line horizontal" style={{top: '850px', left: '0px', opacity: '0.368759'}}></div><div className="grid-line horizontal" style={{top: '900px', left: '0px', opacity: '0.243759'}}></div><div className="grid-line horizontal" style={{top: '950px', left: '0px', opacity: '0.118759'}}></div><div className="grid-line horizontal" style={{top: '1000px', left: '0px', opacity: '0'}}></div><div className="grid-line horizontal" style={{top: '1050px', left: '0px', opacity: '0'}}></div><div className="grid-line horizontal" style={{top: '1100px', left: '0px', opacity: '0'}}></div><div className="grid-line horizontal" style={{top: '1150px', left: '0px', opacity: '0'}}></div><div className="grid-line horizontal" style={{top: '1200px', left: '0px', opacity: '0'}}></div><div className="grid-line horizontal" style={{top: '1250px', left: '0px', opacity: '0'}}></div><div className="grid-line horizontal" style={{top: '1300px', left: '0px', opacity: '0'}}></div></div>

<div className="content-mask" id="contentMask" style={{background: 'radial-gradient(400px at 1172px 678px, transparent 0%, transparent 30%, rgba(0, 0, 0, 0.7) 70%)'}}></div>

<nav className="relative z-50 flex items-center justify-between px-6 lg:px-12 py-6 border-b border-gray-800/30 backdrop-blur-lg bg-black/80 animate-[fadeDown_0.8s_ease-out_0.1s_both] opacity-0">
<div className="flex items-center gap-8">
<div className="text-xl font-semibold tracking-tight text-gray-50">
                CoolSite
            </div>
<div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
<a className="hover:text-gray-300 transition-colors duration-200" href="#">Features</a>
<a className="hover:text-gray-300 transition-colors duration-200" href="#">Pricing</a>
<a className="hover:text-gray-300 transition-colors duration-200" href="#">Documentation</a>
<a className="hover:text-gray-300 transition-colors duration-200" href="#">Company</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block text-sm text-gray-500 hover:text-gray-300 transition-colors duration-200 px-4 py-2">
                Sign in
            </button>
<button className="bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/25">
                Get started
            </button>
<button className="md:hidden">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</nav>

<section className="relative z-10 min-h-screen flex flex-col justify-center px-6 lg:px-12 py-20">
<div className="max-w-7xl mx-auto w-full">

<div className="text-center mb-16">

<div className="inline-flex items-center gap-2 bg-gray-900/50 border border-gray-700/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm animate-[fadeUp_0.8s_ease-out_0.3s_both] opacity-0">
<div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
<span className="text-sm text-gray-400">New: AI-powered design assistant</span>
<svg className="lucide lucide-arrow-right w-4 h-4 text-gray-500" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
<div className="animate-[fadeUp_0.8s_ease-out_0.5s_both] opacity-0">
                        Design at the
                    </div>
<div className="gradient-text animate-[fadeUp_0.8s_ease-out_0.7s_both] opacity-0">
                        speed of thought
                    </div>
</h1>
<p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed animate-[fadeUp_0.8s_ease-out_0.9s_both] opacity-0">
                    Create stunning interfaces, prototypes, and design systems with our powerful visual editor. 
                    Built for designers, developers, and teams who ship fast.
                </p>

<div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-[fadeUp_0.8s_ease-out_1.1s_both] opacity-0">
<button className="group bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/25 min-w-[200px]">
                        Start creating
                        <svg className="lucide lucide-arrow-right w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="group bg-gray-900/50 hover:bg-gray-800/60 border border-gray-700/30 hover:border-gray-600/50 text-gray-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 backdrop-blur-sm min-w-[200px] hover:transform hover:-translate-y-1">
<svg className="lucide lucide-play w-5 h-5 inline mr-2" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
                        Watch demo
                    </button>
</div>

<div className="mt-16 animate-[fadeUp_0.8s_ease-out_1.3s_both] opacity-0">
<p className="text-sm text-gray-600 mb-6">Trusted by teams at</p>
<div className="flex justify-center items-center gap-8 opacity-40">
<div className="text-gray-500 font-semibold tracking-wide">VERCEL</div>
<div className="text-gray-500 font-semibold tracking-wide">STRIPE</div>
<div className="text-gray-500 font-semibold tracking-wide">LINEAR</div>
<div className="text-gray-500 font-semibold tracking-wide">GITHUB</div>
</div>
</div>
</div>

<div className="relative max-w-6xl mx-auto animate-[fadeUp_0.8s_ease-out_1.5s_both] opacity-0">

<div className="bg-gray-900/30 border border-gray-800/30 rounded-t-xl backdrop-blur-sm p-3">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-red-500/70 rounded-full"></div>
<div className="w-3 h-3 bg-yellow-500/70 rounded-full"></div>
<div className="w-3 h-3 bg-green-500/70 rounded-full"></div>
<div className="flex-1 bg-gray-800/30 rounded ml-4 px-3 py-1">
<span className="text-xs text-gray-500">coolsite.design/dashboard</span>
</div>
</div>
</div>

<div className="bg-gray-950/50 backdrop-blur-sm border-x border-b border-gray-800/30 rounded-b-xl p-6">

<div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-96">

<div className="bg-gray-900/30 rounded-lg p-4 border border-gray-800/20">
<div className="space-y-3">
<div className="flex items-center gap-3 text-emerald-400">
<svg className="lucide lucide-layers w-4 h-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<span className="text-sm font-medium">Components</span>
</div>
<div className="flex items-center gap-3 text-gray-500">
<svg className="lucide lucide-palette w-4 h-4" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
<span className="text-sm">Styles</span>
</div>
<div className="flex items-center gap-3 text-gray-500">
<svg className="lucide lucide-grid-3x3 w-4 h-4" data-lucide="grid-3x3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
<span className="text-sm">Layout</span>
</div>
<div className="flex items-center gap-3 text-gray-500">
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-sm">Interactions</span>
</div>
</div>
</div>

<div className="lg:col-span-2 bg-gray-900/20 rounded-lg border border-gray-800/20 relative overflow-hidden">
<div className="absolute inset-4 bg-white/5 rounded-lg shadow-2xl">
<div className="p-4 border-b border-gray-700/20">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-emerald-500/70 rounded-full"></div>
<div className="space-y-1">
<div className="w-20 h-2 bg-gray-700/50 rounded"></div>
<div className="w-16 h-1.5 bg-gray-800/50 rounded"></div>
</div>
</div>
</div>
<div className="p-4 space-y-3">
<div className="w-3/4 h-3 bg-gray-700/30 rounded"></div>
<div className="w-1/2 h-2 bg-gray-800/30 rounded"></div>
<div className="w-full h-2 bg-gray-800/30 rounded"></div>
<div className="w-2/3 h-2 bg-gray-800/30 rounded"></div>
</div>
</div>
</div>

<div className="bg-gray-900/30 rounded-lg p-4 border border-gray-800/20 space-y-4">
<div>
<h3 className="text-sm font-medium text-gray-400 mb-2">Properties</h3>
<div className="space-y-2">
<div className="flex justify-between items-center">
<span className="text-xs text-gray-500">Width</span>
<span className="text-xs text-gray-400">320px</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-gray-500">Height</span>
<span className="text-xs text-gray-400">240px</span>
</div>
<div className="w-full h-2 bg-gray-800/50 rounded-full">
<div className="w-3/5 h-2 bg-emerald-500/70 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -top-4 -right-4 bg-emerald-500/80 text-white p-3 rounded-lg shadow-xl animate-bounce">
<svg className="lucide lucide-sparkles w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="absolute -bottom-4 -left-4 bg-blue-500/80 text-white px-4 py-2 rounded-lg shadow-xl">
<span className="text-sm font-medium">Real-time collaboration</span>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto w-full mt-32">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group animate-[fadeUp_0.8s_ease-out_1.7s_both] opacity-0 text-center">
<div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-emerald-500/20 transition-colors duration-300">
<svg className="lucide lucide-zap w-6 h-6 text-emerald-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
<p className="text-gray-500 text-sm leading-relaxed">Real-time rendering with instant updates. No more waiting for builds or refreshes.</p>
</div>
<div className="text-center group animate-[fadeUp_0.8s_ease-out_1.9s_both] opacity-0">
<div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-500/20 transition-colors duration-300">
<svg className="lucide lucide-users w-6 h-6 text-blue-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-lg font-semibold mb-2">Team Collaboration</h3>
<p className="text-gray-500 text-sm leading-relaxed">Work together seamlessly with real-time multiplayer editing and comments.</p>
</div>
<div className="text-center group animate-[fadeUp_0.8s_ease-out_2.1s_both] opacity-0">
<div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-purple-500/20 transition-colors duration-300">
<svg className="lucide lucide-code w-6 h-6 text-purple-400" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-2">Export Anywhere</h3>
<p className="text-gray-500 text-sm leading-relaxed">Generate production-ready code for React, Vue, HTML/CSS, and more.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6 lg:px-12 border-t border-gray-800/30">
<div className="max-w-7xl mx-auto">

<div className="text-center mb-20">
<div className="inline-flex items-center gap-2 bg-gray-900/50 border border-gray-700/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
<span className="text-sm text-gray-400">Everything you need</span>
</div>
<h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
<span className="text-gray-50">Powerful features</span>
<br/>
<span className="gradient-text">for every workflow</span>
</h2>
<p className="text-xl text-gray-500 max-w-2xl mx-auto">
                    From concept to production, CoolSite provides all the tools you need to create exceptional digital experiences.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-gray-900/20 border border-gray-800/30 rounded-xl p-8 hover:border-gray-700/50 transition-all duration-300 hover:transform hover:-translate-y-1">
<div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors duration-300">
<svg className="lucide lucide-cpu w-6 h-6 text-emerald-400" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" rx="1" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3 text-gray-50">Smart Components</h3>
<p className="text-gray-500 leading-relaxed mb-4">
                        Build once, use everywhere. Create intelligent components that adapt to different contexts and maintain consistency across your designs.
                    </p>
<a className="text-emerald-400 text-sm font-medium hover:text-emerald-300 transition-colors duration-200 inline-flex items-center gap-1" href="#">
                        Learn more
                        <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="group bg-gray-900/20 border border-gray-800/30 rounded-xl p-8 hover:border-gray-700/50 transition-all duration-300 hover:transform hover:-translate-y-1">
<div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
<svg className="lucide lucide-brain w-6 h-6 text-blue-400" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A2.5 2.5 0 0 0 12 17.5"></path><path d="M12 4.5a2.5 2.5 0 0 1 4.96-.46 2.5 2.5 0 0 1 1.98 3 2.5 2.5 0 0 1 1.32 4.24 3 3 0 0 1-.34 5.58 2.5 2.5 0 0 1-2.96 3.08A2.5 2.5 0 0 1 12 17.5"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3 text-gray-50">AI Assistant</h3>
<p className="text-gray-500 leading-relaxed mb-4">
                        Let AI help you design faster. Generate layouts, suggest improvements, and automate repetitive tasks with our intelligent design assistant.
                    </p>
<a className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors duration-200 inline-flex items-center gap-1" href="#">
                        Learn more
                        <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="group bg-gray-900/20 border border-gray-800/30 rounded-xl p-8 hover:border-gray-700/50 transition-all duration-300 hover:transform hover:-translate-y-1">
<div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors duration-300">
<svg className="lucide lucide-git-branch w-6 h-6 text-purple-400" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="m18 9a5 5 0 0 1-5 5H9"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3 text-gray-50">Version Control</h3>
<p className="text-gray-500 leading-relaxed mb-4">
                        Never lose work again. Built-in version control lets you experiment freely, compare iterations, and collaborate with confidence.
                    </p>
<a className="text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors duration-200 inline-flex items-center gap-1" href="#">
                        Learn more
                        <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="group bg-gray-900/20 border border-gray-800/30 rounded-xl p-8 hover:border-gray-700/50 transition-all duration-300 hover:transform hover:-translate-y-1">
<div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors duration-300">
<svg className="lucide lucide-smartphone w-6 h-6 text-orange-400" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3 text-gray-50">Responsive Design</h3>
<p className="text-gray-500 leading-relaxed mb-4">
                        Design for every screen size. Preview and optimize your designs across desktop, tablet, and mobile with real-time responsive editing.
                    </p>
<a className="text-orange-400 text-sm font-medium hover:text-orange-300 transition-colors duration-200 inline-flex items-center gap-1" href="#">
                        Learn more
                        <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="group bg-gray-900/20 border border-gray-800/30 rounded-xl p-8 hover:border-gray-700/50 transition-all duration-300 hover:transform hover:-translate-y-1">
<div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-pink-500/20 transition-colors duration-300">
<svg className="lucide lucide-mouse-pointer-click w-6 h-6 text-pink-400" data-lucide="mouse-pointer-click" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.1 12 6"></path><path d="m5.1 8-2.9-.8"></path><path d="M6 12 4.1 14"></path><path d="m7.99 17.7-2.87-.8"></path><path d="M12 20.1 14 18"></path><path d="m16.8 17.7 2.87-.8"></path><path d="M18 14l1.9-2"></path><path d="m18.99 7.2 2.87.8"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h3 className="text-xl font-semibold mb-3 text-gray-50">Interactive Prototypes</h3>
<p className="text-gray-500 leading-relaxed mb-4">
                        Bring your designs to life. Create interactive prototypes with animations, transitions, and micro-interactions without code.
                    </p>
<a className="text-pink-400 text-sm font-medium hover:text-pink-300 transition-colors duration-200 inline-flex items-center gap-1" href="#">
                        Learn more
                        <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="group bg-gray-900/20 border border-gray-800/30 rounded-xl p-8 hover:border-gray-700/50 transition-all duration-300 hover:transform hover:-translate-y-1">
<div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors duration-300">
<svg className="lucide lucide-globe w-6 h-6 text-cyan-400" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3 text-gray-50">Global CDN</h3>
<p className="text-gray-500 leading-relaxed mb-4">
                        Lightning-fast delivery worldwide. Share your designs instantly with stakeholders and clients through our global content delivery network.
                    </p>
<a className="text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors duration-200 inline-flex items-center gap-1" href="#">
                        Learn more
                        <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6 lg:px-12 border-t border-gray-800/30">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<div className="inline-flex items-center gap-2 bg-gray-900/50 border border-gray-700/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
<span className="text-sm text-gray-400">Customer stories</span>
</div>
<h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
<span className="text-gray-50">Loved by</span>
<br/>
<span className="gradient-text">thousands of creators</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-gray-900/20 border border-gray-800/30 rounded-xl p-8 hover:border-gray-700/50 transition-all duration-300">
<div className="flex items-center gap-1 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
</div>
<blockquote className="text-gray-300 mb-6 leading-relaxed">
                        "CoolSite transformed our design workflow completely. What used to take weeks now takes days. The AI assistant is like having a senior designer on the team 24/7."
                    </blockquote>
<div className="flex items-center gap-3">
<img alt="Alex Chen" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop&amp;crop=face"/>
<div>
<div className="text-gray-200 font-medium text-sm">Alex Chen</div>
<div className="text-gray-500 text-sm">Lead Designer, TechCorp</div>
</div>
</div>
</div>

<div className="bg-gray-900/20 border border-gray-800/30 rounded-xl p-8 hover:border-gray-700/50 transition-all duration-300">
<div className="flex items-center gap-1 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
</div>
<blockquote className="text-gray-300 mb-6 leading-relaxed">
                        "The collaboration features are incredible. Our entire team can work on designs simultaneously without any conflicts. Game changer for remote work."
                    </blockquote>
<div className="flex items-center gap-3">
<img alt="Sarah Williams" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1494790108755-2616b612b6ab?w=100&amp;h=100&amp;fit=crop&amp;crop=face"/>
<div>
<div className="text-gray-200 font-medium text-sm">Sarah Williams</div>
<div className="text-gray-500 text-sm">Creative Director, StartupXYZ</div>
</div>
</div>
</div>

<div className="bg-gray-900/20 border border-gray-800/30 rounded-xl p-8 hover:border-gray-700/50 transition-all duration-300">
<div className="flex items-center gap-1 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
</div>
<blockquote className="text-gray-300 mb-6 leading-relaxed">
                        "Code export quality is phenomenal. We go from design to production in minutes, not hours. The generated code is clean and developer-friendly."
                    </blockquote>
<div className="flex items-center gap-3">
<img alt="Marcus Rodriguez" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop&amp;crop=face"/>
<div>
<div className="text-gray-200 font-medium text-sm">Marcus Rodriguez</div>
<div className="text-gray-500 text-sm">Frontend Developer, WebStudio</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6 lg:px-12 border-t border-gray-800/30">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 bg-gray-900/50 border border-gray-700/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
<div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
<span className="text-sm text-gray-400">Ready to get started?</span>
</div>
<h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
<span className="text-gray-50">Start designing</span>
<br/>
<span className="gradient-text">your next big idea</span>
</h2>
<p className="text-xl text-gray-500 mb-12 leading-relaxed">
                Join thousands of creators who are already building the future with CoolSite.
                Start your free trial today—no credit card required.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="group bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/25 min-w-[200px]">
                    Start free trial
                    <svg className="lucide lucide-arrow-right w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="group text-gray-400 hover:text-gray-300 px-8 py-4 font-semibold text-lg transition-all duration-300 min-w-[200px] underline underline-offset-4 decoration-gray-600 hover:decoration-gray-400">
                    Schedule a demo
                </button>
</div>
<div className="mt-12 flex justify-center items-center gap-8 text-sm text-gray-600">
<div className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path></svg>
<span>14-day free trial</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path></svg>
<span>No credit card required</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path></svg>
<span>Cancel anytime</span>
</div>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-gray-800/30 px-6 lg:px-12 py-16">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">

<div className="lg:col-span-2">
<div className="text-xl font-semibold tracking-tight text-gray-50 mb-4">
                        CoolSite
                    </div>
<p className="text-gray-500 mb-6 max-w-md leading-relaxed">
                        The fastest way to design, prototype, and ship beautiful digital experiences. 
                        Built for modern teams who value speed and quality.
                    </p>
<div className="flex items-center gap-4">
<a className="text-gray-500 hover:text-gray-300 transition-colors duration-200" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-gray-500 hover:text-gray-300 transition-colors duration-200" href="#">
<svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5 0-1.2-.5-2.4-1.3-3.2.3-.8.3-1.8 0-2.7 0 0-1.1 0-3.3 1.3a11.3 11.3 0 0 0-6 0C8.3 8.1 7.2 8.1 7.2 8.1c-.3.9-.3 1.9 0 2.7C6.4 11.6 6 12.8 6 14c0 3.5 3 5.5 6 5.5-.4.6-.6 1.3-.7 2v4"></path><path d="M9 21c-3.5-.8-5.5-2.8-6-4.8-.5-.9-.3-1.5.1-1.7.4-.2 1.1.1 1.8.7.7.6 1.3 1.3 2.1 1.8"></path></svg>
</a>
<a className="text-gray-500 hover:text-gray-300 transition-colors duration-200" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>

<div>
<h3 className="text-gray-200 font-medium mb-4">Product</h3>
<ul className="space-y-3">
<li><a className="text-gray-500 hover:text-gray-300 transition-colors duration-200 text-sm" href="#">Features</a></li>
<li><a className="text-gray-500 hover:text-gray-300 transition-colors duration-200 text-sm" href="#">Pricing</a></li>
<li><a className="text-gray-500 hover:text-gray-300 transition-colors duration-200 text-sm" href="#">Changelog</a></li>
<li><a className="text-gray-500 hover:text-gray-300 transition-colors duration-200 text-sm" href="#">Roadmap</a></li>
</ul>
</div>

<div>
<h3 className="text-gray-200 font-medium mb-4">Resources</h3>
<ul className="space-y-3">
<li><a className="text-gray-500 hover:text-gray-300 transition-colors duration-200 text-sm" href="#">Documentation</a></li>
<li><a className="text-gray-500 hover:text-gray-300 transition-colors duration-200 text-sm" href="#">Tutorials</a></li>
<li><a className="text-gray-500 hover:text-gray-300 transition-colors duration-200 text-sm" href="#">Blog</a></li>
<li><a className="text-gray-500 hover:text-gray-300 transition-colors duration-200 text-sm" href="#">Community</a></li>
</ul>
</div>

<div>
<h3 className="text-gray-200 font-medium mb-4">Company</h3>
<ul className="space-y-3">
<li><a className="text-gray-500 hover:text-gray-300 transition-colors duration-200 text-sm" href="#">About</a></li>
<li><a className="text-gray-500 hover:text-gray-300 transition-colors duration-200 text-sm" href="#">Careers</a></li>
<li><a className="text-gray-500 hover:text-gray-300 transition-colors duration-200 text-sm" href="#">Press</a></li>
<li><a className="text-gray-500 hover:text-gray-300 transition-colors duration-200 text-sm" href="#">Contact</a></li>
</ul>
</div>
</div>

<div className="border-t border-gray-800/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-gray-500 text-sm">
                    © 2024 CoolSite. All rights reserved.
                </div>
<div className="flex items-center gap-6 text-sm">
<a className="text-gray-500 hover:text-gray-300 transition-colors duration-200" href="#">Privacy Policy</a>
<a className="text-gray-500 hover:text-gray-300 transition-colors duration-200" href="#">Terms of Service</a>
<a className="text-gray-500 hover:text-gray-300 transition-colors duration-200" href="#">Cookie Policy</a>
</div>
</div>
</div>
</footer>
<style>
        @keyframes fadeDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>


    </>
  );
}
