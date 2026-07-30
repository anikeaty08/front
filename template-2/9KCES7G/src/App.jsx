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
                        'inter': ['Inter', 'sans-serif']
                    },
                    colors: {
                        'gray-950': '#0a0a0a',
                        'gray-900': '#161616',
                        'gray-850': '#1a1a1a',
                        'gray-800': '#262626',
                        'gray-700': '#404040',
                        'gray-600': '#525252',
                        'gray-400': '#a3a3a3',
                        'gray-300': '#d4d4d4',
                        'purple-500': '#8b5cf6',
                        'purple-400': '#a78bfa',
                        'blue-500': '#3b82f6',
                        'emerald-400': '#34d399'
                    }
                }
            }
        }
    


        document.addEventListener('DOMContentLoaded', function() {
            // Enhanced nav interactions
            const navItems = document.querySelectorAll('.nav-item');
            
            navItems.forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Remove active state from all items
                    navItems.forEach(nav => {
                        nav.setAttribute('data-active', 'false');
                        nav.querySelector('.nav-dot').style.backgroundColor = 'transparent';
                    });
                    
                    // Set active state for clicked item
                    this.setAttribute('data-active', 'true');
                    this.querySelector('.nav-dot').style.backgroundColor = 'white';
                });
            });
            
            // Button animations
            const buttons = document.querySelectorAll('button');
            buttons.forEach(button => {
                button.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-2px)';
                });
                
                button.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
            
            // Parallax effect for grid elements
            window.addEventListener('mousemove', function(e) {
                const mouseX = e.clientX / window.innerWidth;
                const mouseY = e.clientY / window.innerHeight;
                
                const gridElements = document.querySelectorAll('.feature-square, .accent-dot');
                gridElements.forEach((element, index) => {
                    const speed = (index + 1) * 0.5;
                    const x = (mouseX - 0.5) * speed;
                    const y = (mouseY - 0.5) * speed;
                    element.style.transform = `translate(${x}px, ${y}px)`;
                });
            });
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
      

<div className="fixed inset-0 opacity-40 pointer-events-none">
<div className="absolute inset-0 grid-bg"></div>

<div className="absolute grid-elements">

<div className="feature-square top-[120px] left-[180px]"></div>
<div className="feature-square top-[240px] right-[280px]"></div>
<div className="feature-square bottom-[180px] left-[380px]"></div>

<div className="accent-dot top-[160px] right-[180px]"></div>
<div className="accent-dot bottom-[280px] left-[280px]"></div>
<div className="accent-dot top-[320px] left-[120px]"></div>

<div className="connect-line-h top-[180px] left-[260px]"></div>
<div className="connect-line-v top-[180px] left-[340px]"></div>
<div className="connect-line-h bottom-[200px] right-[380px]"></div>
</div>
</div>

<div className="relative z-20 flex items-center justify-between px-6 pt-4 text-xs text-gray-500">
<div className="flex items-center space-x-4">
<div className="flex items-center space-x-1">
<div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
<span>Available for projects</span>
</div>
<span>Based in San Francisco</span>
</div>
<div className="flex items-center space-x-4">
<span>UTC-8</span>
<div className="flex items-center space-x-1">
<div className="w-1 h-1 bg-gray-600 rounded-full"></div>
<div className="w-1 h-1 bg-gray-600 rounded-full"></div>
<div className="w-1 h-1 bg-white rounded-full"></div>
</div>
</div>
</div>

<nav className="relative z-10 flex items-center justify-center pt-6 px-6">
<div className="bg-gray-900/80 border border-gray-800/50 rounded-2xl px-8 py-4 backdrop-blur-xl shadow-2xl">
<div className="flex items-center justify-center space-x-8">
<a className="nav-item group flex flex-col items-center space-y-2" data-active="false" href="#">
<span className="text-gray-400 group-hover:text-white transition-all duration-200 text-sm font-medium">About</span>
<div className="nav-dot w-1 h-1 bg-transparent rounded-full transition-all duration-200"></div>
</a>
<a className="nav-item group flex flex-col items-center space-y-2" data-active="true" href="#">
<span className="text-white font-medium text-sm">Work</span>
<div className="nav-dot w-1 h-1 bg-white rounded-full"></div>
</a>
<a className="nav-item group flex flex-col items-center space-y-2" data-active="false" href="#">
<span className="text-gray-400 group-hover:text-white transition-all duration-200 text-sm font-medium">Experience</span>
<div className="nav-dot w-1 h-1 bg-transparent rounded-full transition-all duration-200"></div>
</a>
<a className="nav-item group flex flex-col items-center space-y-2" data-active="false" href="#">
<span className="text-gray-400 group-hover:text-white transition-all duration-200 text-sm font-medium">Contact</span>
<div className="nav-dot w-1 h-1 bg-transparent rounded-full transition-all duration-200"></div>
</a>
</div>
</div>
</nav>

<main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 -mt-16">
<div className="text-center max-w-6xl mx-auto">

<div className="inline-flex items-center space-x-2 bg-gray-900/50 border border-gray-800/50 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
<div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
<span className="text-gray-300 text-sm font-medium">Currently building AI-powered web applications</span>
</div>

<p className="text-gray-400 text-sm font-medium uppercase tracking-widest mb-8 letter-spacing-2">
                Full Stack Developer & UI/UX Designer
            </p>

<h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight">
                Crafting Digital<br />
<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-emerald-400">Experiences</span><br />
<span className="text-gray-300">That Matter</span>
</h1>

<p className="text-gray-300 text-xl font-normal mb-12 max-w-2xl mx-auto leading-relaxed">
                Hey there! I'm Sarah Chen, a passionate full-stack developer specializing in React, Node.js, and modern web technologies. I transform complex ideas into elegant, user-centric digital solutions.
            </p>

<div className="flex items-center justify-center space-x-12 mb-12 text-center">
<div className="stat-item">
<div className="text-2xl font-bold text-white">50+</div>
<div className="text-sm text-gray-400">Projects Delivered</div>
</div>
<div className="w-px h-8 bg-gray-800"></div>
<div className="stat-item">
<div className="text-2xl font-bold text-white">5</div>
<div className="text-sm text-gray-400">Years Experience</div>
</div>
<div className="w-px h-8 bg-gray-800"></div>
<div className="stat-item">
<div className="text-2xl font-bold text-white">98%</div>
<div className="text-sm text-gray-400">Client Satisfaction</div>
</div>
</div>

<div className="flex items-center justify-center space-x-4">
<button className="primary-btn group bg-white text-gray-950 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center space-x-2 hover:bg-gray-200 hover:scale-105 shadow-lg">
<span>View My Work</span>
<svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<button className="secondary-btn group bg-gray-900/80 border border-gray-700 hover:border-gray-600 text-white px-8 py-4 rounded-xl font-medium text-sm transition-all duration-200 flex items-center space-x-2 hover:bg-gray-800 backdrop-blur-sm">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>Let's Talk</span>
</button>
</div>

<div className="mt-16 pt-8 border-t border-gray-800">
<p className="text-gray-500 text-sm mb-6">Technologies I work with</p>
<div className="flex items-center justify-center space-x-8 text-gray-400">
<div className="tech-item">React</div>
<div className="tech-item">Next.js</div>
<div className="tech-item">Node.js</div>
<div className="tech-item">TypeScript</div>
<div className="tech-item">PostgreSQL</div>
<div className="tech-item">Figma</div>
</div>
</div>
</div>
</main>



    </>
  );
}
