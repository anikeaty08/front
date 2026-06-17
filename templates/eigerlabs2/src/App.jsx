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
sans: ['Inter', 'sans-serif'],
},
colors: {
background: '#030014', // Deep space dark
surface: '#0F0B1E',   // Slightly lighter surface
primary: '#7C3AED',   // Violet
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
},
animation: {
'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



      // Icons
      lucide.createIcons({
          attrs: {
              'stroke-width': 1.5
          }
      });

      // Particles Configuration
      // Configured for a "Linear-style" subtle network effect
      document.addEventListener('DOMContentLoaded', function() {
          particlesJS("particles-js", {
              "particles": {
                  "number": {
                      "value": 150,
                      "density": {
                          "enable": true,
                          "value_area": 800
                      }
                  },
                  "color": {
                      "value": "#ffffff"
                  },
                  "shape": {
                      "type": "circle",
                  },
                  "opacity": {
                      "value": 0.2,
                      "random": true,
                  },
                  "size": {
                      "value": 3,
                      "random": true,
                  },
                  "line_linked": {
                      "enable": true,
                      "distance": 150,
                      "color": "#7c3aed",
                      "opacity": 0.15,
                      "width": 1
                  },
                  "move": {
                      "enable": true,
                      "speed": 5,
                      "direction": "none",
                      "random": true,
                      "straight": false,
                      "out_mode": "out",
                      "bounce": false,
                  }
              },
              "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                      "onhover": {
                          "enable": true,
                          "mode": "grab"
                      },
                      "onclick": {
                          "enable": true,
                          "mode": "push"
                      },
                      "resize": true
                  },
                  "modes": {
                      "grab": {
                          "distance": 180,
                          "line_linked": {
                              "opacity": 0.4
                          }
                      },
                      "push": {
                          "particles_nb": 4
                      }
                  }
              },
              "retina_detect": true
          });
      });
    


      document.addEventListener('DOMContentLoaded', function() {
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        if (btn && menu) {
          // Toggle menu visibility on button click
          btn.addEventListener('click', function(e) {
            e.stopPropagation();
            menu.classList.toggle('hidden');
          });

          // Close menu when any link is clicked
          menu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
              menu.classList.add('hidden');
            });
          });

          // Close menu when clicking outside
          document.addEventListener('click', function(e) {
            if (!menu.classList.contains('hidden') && !btn.contains(e.target) && !menu.contains(e.target)) {
              menu.classList.add('hidden');
            }
          });
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
      

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 bg-grid-white [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>

<div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-violet-600/20 blur-[120px] rounded-full mix-blend-screen opacity-50"></div>

<div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full mix-blend-screen opacity-50"></div>
</div>

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030014]/70 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#hero">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center group-hover:border-violet-500/50 transition-colors">
<span className="font-bold text-white text-lg">E</span>
</div>
<span className="text-sm font-semibold text-white tracking-tight">
            Eiger Labs
          </span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#services">
            Services
          </a>
<a className="hover:text-white transition-colors" href="#how-we-work">
            How we work
          </a>
<a className="hover:text-white transition-colors" href="#impact">
            Impact
          </a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#contact">
            Contact
          </a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex h-9 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 text-xs font-medium text-white transition-colors hover:bg-white/10 hover:border-white/20" href="#contact">
            Get Started
          </a>
<button className="md:hidden text-white" id="mobile-menu-btn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16"></path>
<path d="M4 12h16"></path>
<path d="M4 19h16"></path>
</svg>
</button>
</div>
</div>
<div className="hidden absolute top-16 left-0 w-full bg-[#030014]/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden shadow-2xl" id="mobile-menu">
<nav className="flex flex-col space-y-4">
<a className="block text-base font-medium text-slate-300 hover:text-white transition-colors" href="#services">
            Services
          </a>
<a className="block text-base font-medium text-slate-300 hover:text-white transition-colors" href="#how-we-work">
            How we work
          </a>
<a className="block text-base font-medium text-slate-300 hover:text-white transition-colors" href="#impact">
            Impact
          </a>
<a className="block text-base font-medium text-slate-300 hover:text-white transition-colors" href="#about">
            About
          </a>
<a className="block text-base font-medium text-slate-300 hover:text-white transition-colors" href="#contact">
            Contact
          </a>
</nav>
</div>
</header>

<section className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden" id="hero">

<div className="" id="particles-js">
<canvas className="particles-js-canvas-el" height="2364" style={{width: '100%', height: '100%'}} width="3544"></canvas>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-500/10 blur-[100px] rounded-full opacity-30 pointer-events-none z-0"></div>
<div className="container mx-auto px-6 max-w-6xl relative z-10 pointer-events-none">


<div className="pointer-events-auto">
<h1 className="text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter leading-[0.95] mb-8 text-white">
<span className="text-metallic">AI for</span>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-violet-200 to-indigo-400 pb-4">
              Today.
            </span>
</h1>
<div className="flex flex-col md:flex-row gap-8 md:items-end max-w-3xl gap-x-8 gap-y-8">
<p className="md:text-xl leading-relaxed text-lg font-light text-slate-400 max-w-xl">
              Top-tier strategy meets AI engineering.
              <br/>
              Our expertise: High impact AI. Today.
            </p>
</div>
<div className="mt-12 flex flex-wrap gap-4">
<a className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-black transition-all hover:bg-white/90" href="#contact">
<span className="mr-2">Start your transformation</span>
<svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
<div className="absolute inset-0 -z-10 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 transition-opacity group-hover:opacity-10"></div>
</a>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 border-t border-white/5 bg-[#030014]" id="services">
<div className="container mx-auto px-6 max-w-6xl">
<div className="mb-20">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Our Services
          </h2>
<div className="h-px w-full bg-gradient-to-r from-violet-500/50 to-transparent"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl border border-white/5 bg-[#0A0A0A]/50 backdrop-blur-sm transition-all hover:border-white/10 card-glow overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center mb-6 text-violet-400 group-hover:text-white transition-colors">
<svg className="lucide lucide-scan-line w-5 h-5" data-lucide="scan-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
<path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
<path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
<path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
<path d="M7 12h10"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-3">
              Strategic Ambition
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              We identify your AI potential and set the strategic path:
              Transform. Augment.
            </p>
</div>
<div className="group relative p-8 rounded-2xl border border-white/5 bg-[#0A0A0A]/50 backdrop-blur-sm transition-all hover:border-white/10 card-glow overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center mb-6 text-violet-400 group-hover:text-white transition-colors">
<svg className="lucide lucide-scan w-5 h-5" data-lucide="scan" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
<path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
<path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
<path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-3">
              AI Opportunity Scan
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Our methodology. Our diagnostic tool. Your business. Your data.
              Your workflows. We identify where AI works. What matters. What
              doesn’t.
            </p>
</div>
<div className="group relative p-8 rounded-2xl border border-white/5 bg-[#0A0A0A]/50 backdrop-blur-sm transition-all hover:border-white/10 card-glow overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center mb-6 text-violet-400 group-hover:text-white transition-colors">
<svg className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-3">
              Rapid Prototyping
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Fast tests. Fast truth. We build. We break. We prove. Does it
              work? Evidence before scale.
            </p>
</div>
<div className="group relative p-8 rounded-2xl border border-white/5 bg-[#0A0A0A]/50 backdrop-blur-sm transition-all hover:border-white/10 card-glow overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center mb-6 text-violet-400 group-hover:text-white transition-colors">
<svg className="lucide lucide-building-2 w-5 h-5" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 12h4"></path>
<path d="M10 8h4"></path>
<path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
<path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
<path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-3">
              Enterprise Implementation
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Prototype to production. Integrated. Secure. Compliant. Your
              stack. Your workflows.Our solution. Scalable. Built to work.
            </p>
</div>
<div className="group relative p-8 rounded-2xl border border-white/5 bg-[#0A0A0A]/50 backdrop-blur-sm transition-all hover:border-white/10 card-glow overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center mb-6 text-violet-400 group-hover:text-white transition-colors">
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-3">
              AI Governance &amp; Security
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Your data. Your rules. On-premise. EU private cloud. Security by
              default. No compromise.
            </p>
</div>
<div className="group relative p-8 rounded-2xl border border-white/5 bg-[#0A0A0A]/50 backdrop-blur-sm transition-all hover:border-white/10 card-glow overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center mb-6 text-violet-400 group-hover:text-white transition-colors">
<svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-3">
              Capability Building
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              We work with your team. Tools. Skills. Discipline. Capability
              transferred. Your independence.
            </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 border-t border-white/5 bg-gradient-to-b from-[#030014] to-[#0A0A0A]" id="how-we-work">
<div className="container mx-auto px-6 max-w-6xl">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="space-y-12">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
              How we work
            </h2>
<div className="space-y-8">
<div className="flex gap-4 group">
<div className="mt-1 w-1 h-12 bg-gradient-to-b from-violet-500 to-transparent rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="">
<h3 className="text-xl font-medium text-white mb-1">
                    We sharpen strategies.
                  </h3>
<p className="text-slate-400">Impact-focused.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="mt-1 w-1 h-12 bg-gradient-to-b from-violet-500 to-transparent rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="">
<h3 className="text-xl font-medium text-white mb-1">
                    We combine experts.
                  </h3>
<p className="text-slate-400">
                    Strategy, technology, operations. Experienced.
                  </p>
</div>
</div>
<div className="flex gap-4 group">
<div className="mt-1 w-1 h-12 bg-gradient-to-b from-violet-500 to-transparent rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div>
<h3 className="text-xl font-medium text-white mb-1">
                    We plan for security.
                  </h3>
<p className="text-slate-400">
                    Your data on your terms. From day one.
                  </p>
</div>
</div>
<div className="flex gap-4 group">
<div className="mt-1 w-1 h-12 bg-gradient-to-b from-violet-500 to-transparent rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div>
<h3 className="text-xl font-medium text-white mb-1">
                    We transfer capability.
                  </h3>
<p className="text-slate-400">Your team becomes independent.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl blur opacity-20"></div>
<div className="relative border border-white/10 rounded-2xl bg-[#0F0B1E] p-10">
<h3 className="text-xl font-semibold text-white mb-8">Our Values</h3>
<div className="space-y-8 relative">
<div className="absolute left-3 top-2 bottom-2 w-px bg-white/10"></div>
<div className="relative pl-10">
<span className="absolute left-0 top-1.5 w-6 h-6 rounded-full border border-violet-500/30 bg-[#0F0B1E] flex items-center justify-center">
<span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
</span>
<h4 className="text-white font-medium mb-1">Grounded</h4>
<p className="text-sm text-slate-400">
                    We say what we see. Fact based. Unvarnished.
                  </p>
</div>
<div className="relative pl-10">
<span className="absolute left-0 top-1.5 w-6 h-6 rounded-full border border-white/10 bg-[#0F0B1E] flex items-center justify-center">
<span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
</span>
<h4 className="text-white font-medium mb-1">Purpose-built</h4>
<p className="text-sm text-slate-400">
                    Real products, real users, real outcomes.
                  </p>
</div>
<div className="relative pl-10">
<span className="absolute left-0 top-1.5 w-6 h-6 rounded-full border border-white/10 bg-[#0F0B1E] flex items-center justify-center">
<span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
</span>
<h4 className="text-white font-medium mb-1">Pragmatic</h4>
<p className="text-sm text-slate-400">
                    From hypothesis to prototype to scale.
                  </p>
</div>
<div className="relative pl-10">
<span className="absolute left-0 top-1.5 w-6 h-6 rounded-full border border-white/10 bg-[#0F0B1E] flex items-center justify-center">
<span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
</span>
<h4 className="text-white font-medium mb-1">One Team</h4>
<p className="text-sm text-slate-400">
                    We integrate with your teams. Joint progress.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 border-t border-white/5" id="differentiation">
<div className="container mx-auto px-6 max-w-6xl">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            What sets us apart
          </h2>
<p className="text-slate-400 text-lg">
            Bridging the gap between consultancy and engineering.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="group p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-violet-500/20 transition-all duration-500">
<div className="bg-[#0A0A0A] p-8 rounded-xl h-full border border-white/5 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
<span className="text-4xl font-bold text-white/5 group-hover:text-violet-500/10">
                  01
                </span>
</div>
<svg className="lucide lucide-check w-8 h-8 text-violet-500 mb-6" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<h3 className="text-xl font-medium text-white mb-3">
                Seasoned Players
              </h3>
<p className="text-sm text-slate-400">
                Years of experience. No layers. No learning curve. Success
                repeated.
              </p>
</div>
</div>
<div className="group p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-violet-500/20 transition-all duration-500">
<div className="bg-[#0A0A0A] p-8 rounded-xl h-full border border-white/5 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
<span className="text-4xl font-bold text-white/5 group-hover:text-violet-500/10">
                  02
                </span>
</div>
<svg className="lucide lucide-crosshair w-8 h-8 text-violet-500 mb-6" data-lucide="crosshair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="22" x2="18" y1="12" y2="12"></line>
<line x1="6" x2="2" y1="12" y2="12"></line>
<line x1="12" x2="12" y1="6" y2="2"></line>
<line x1="12" x2="12" y1="22" y2="18"></line>
</svg>
<h3 className="text-xl font-medium text-white mb-3">
                Straight on Target
              </h3>
<p className="text-sm text-slate-400">
                Clear hypotheses. Curious minds. AI at speed. High impact.
              </p>
</div>
</div>
<div className="group p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-violet-500/20 transition-all duration-500">
<div className="bg-[#0A0A0A] p-8 rounded-xl h-full border border-white/5 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
<span className="text-4xl font-bold text-white/5 group-hover:text-violet-500/10">
                  03
                </span>
</div>
<svg className="lucide lucide-combine w-8 h-8 text-violet-500 mb-6" data-lucide="combine" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"></path>
<path d="M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"></path>
<path d="m7 15 3 3"></path>
<path d="m7 21 3-3H5a2 2 0 0 1-2-2v-2"></path>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
</svg>
<h3 className="text-xl font-medium text-white mb-3">
                Consulting + Engineering
              </h3>
<p className="text-sm text-slate-400">
                Strategy and Operations working seamlessly with Tech and
                Engineering experts.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 border-t border-white/5 bg-[#030014]" id="impact">
<div className="container mx-auto px-6 max-w-6xl">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-16">
          How we supported our clients
        </h2>
<div className="grid md:grid-cols-2 gap-6">

<div className="group relative p-10 rounded-3xl border border-white/5 bg-gradient-to-br from-[#130f26] to-[#050505] hover:border-violet-500/20 transition-all duration-300">
<div className="flex justify-between items-start mb-12">
<div className="w-12 h-12 rounded-lg bg-violet-600 flex items-center justify-center text-white shadow-lg shadow-violet-900/20">
<svg className="lucide lucide-trending-up w-6 h-6" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
<polyline points="16 7 22 7 22 13"></polyline>
</svg>
</div>
<div className="text-right">
<div className="text-4xl font-bold text-white tracking-tight">
                  €10M
                </div>
<div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                  Saved
                </div>
</div>
</div>
<h3 className="text-xl font-semibold text-white mb-3">AI Strategy</h3>
<p className="text-slate-400 text-sm leading-relaxed">
              AI strategy setting and implementation preparation. Delivered 10M
              EUR saving.
            </p>
</div>

<div className="group relative p-10 rounded-3xl border border-white/5 bg-gradient-to-br from-[#130f26] to-[#050505] hover:border-violet-500/20 transition-all duration-300">
<div className="flex justify-between items-start mb-12">
<div className="w-12 h-12 rounded-lg bg-violet-600 flex items-center justify-center text-white shadow-lg shadow-violet-900/20">
<svg className="lucide lucide-pie-chart w-6 h-6" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
<path d="M22 12A10 10 0 0 0 12 2v10z"></path>
</svg>
</div>
<div className="text-right">
<div className="text-4xl font-bold text-white tracking-tight">
                  €20M
                </div>
<div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                  Saved
                </div>
</div>
</div>
<h3 className="text-xl font-semibold text-white mb-3">
              Financial AI Agent
            </h3>
<p className="text-slate-400 text-sm leading-relaxed">
              Developed an AI financial agent which oversees &amp; orchestrates
              finances. Full financial stack and instant deployment.
            </p>
</div>

<div className="group relative p-10 rounded-3xl border border-white/5 bg-gradient-to-br from-[#130f26] to-[#050505] hover:border-violet-500/20 transition-all duration-300">
<div className="flex justify-between items-start mb-12">
<div className="w-12 h-12 rounded-lg bg-violet-600 flex items-center justify-center text-white shadow-lg shadow-violet-900/20">
<svg className="lucide lucide-mail w-6 h-6" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
</div>
<div className="text-right">
<div className="text-4xl font-bold text-white tracking-tight">
                  20X
                </div>
<div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                  Faster
                </div>
</div>
</div>
<h3 className="text-xl font-semibold text-white mb-3">
              Email AI Agent
            </h3>
<p className="text-slate-400 text-sm leading-relaxed">
              Implementation of AI email agent. Cutting time spent 20X for
              support organisation, while improving risk management.
            </p>
</div>

<div className="group relative p-10 rounded-3xl border border-white/5 bg-gradient-to-br from-[#130f26] to-[#050505] hover:border-violet-500/20 transition-all duration-300">
<div className="flex justify-between items-start mb-12">
<div className="w-12 h-12 rounded-lg bg-violet-600 flex items-center justify-center text-white shadow-lg shadow-violet-900/20">
<svg className="lucide lucide-file-text w-6 h-6" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
<line x1="16" x2="8" y1="13" y2="13"></line>
<line x1="16" x2="8" y1="17" y2="17"></line>
<line x1="10" x2="8" y1="9" y2="9"></line>
</svg>
</div>
<div className="text-right">
<div className="text-4xl font-bold text-white tracking-tight">
                  30X
                </div>
<div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                  Faster
                </div>
</div>
</div>
<h3 className="text-xl font-semibold text-white mb-3">
              AI Document Reasoning
            </h3>
<p className="text-slate-400 text-sm leading-relaxed">
              Designed and built a custom AI document reasoning agent. Cutting
              time spend ~30X for support organization. Fully automated
              workflow.
            </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 border-t border-white/5" id="about">
<div className="container mx-auto px-6 max-w-6xl">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-12">
          The Team
        </h2>
<div className="flex flex-wrap justify-center gap-8">

<div className="flex flex-col items-center group w-48">
<div className="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-white/10 to-transparent mb-4 relative overflow-hidden">
<div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
<img alt="Boris" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
</div>
</div>
<div className="text-center">
<h3 className="text-white font-medium text-sm">Boris Simandoff</h3>
<p className="text-xs text-violet-400 mt-1">CTO</p>
<p className="text-[10px] text-slate-500 mt-2 tracking-wide uppercase">
                25+ Yrs Exp
              </p>
</div>
</div>

<div className="flex flex-col items-center group w-48">
<div className="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-white/10 to-transparent mb-4 relative overflow-hidden">
<div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
<img alt="Ewout" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
</div>
</div>
<div className="text-center">
<h3 className="text-white font-medium text-sm">
                Ewout Eelkman Rooda
              </h3>
<p className="text-xs text-violet-400 mt-1">Ex-McKinsey</p>
<p className="text-[10px] text-slate-500 mt-2 tracking-wide uppercase">
                20+ Yrs Exp
              </p>
</div>
</div>

<div className="flex flex-col items-center group w-48">
<div className="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-white/10 to-transparent mb-4 relative overflow-hidden">
<div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
<img alt="Dobromira" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
</div>
</div>
<div className="text-center">
<h3 className="text-white font-medium text-sm">
                Dobromira Boyadjieva
              </h3>
<p className="text-xs text-violet-400 mt-1">Ex-Bain</p>
<p className="text-[10px] text-slate-500 mt-2 tracking-wide uppercase">
                15+ Yrs Exp
              </p>
</div>
</div>

<div className="flex flex-col items-center group w-48">
<div className="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-white/10 to-transparent mb-4 relative overflow-hidden">
<div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
<img alt="Sander" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
</div>
</div>
<div className="text-center">
<h3 className="text-white font-medium text-sm">Sander Koch</h3>
<p className="text-xs text-violet-400 mt-1">Ex-Oliver Wyman</p>
<p className="text-[10px] text-slate-500 mt-2 tracking-wide uppercase">
                25+ Yrs Exp
              </p>
</div>
</div>

<div className="flex flex-col items-center group w-48">
<div className="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-white/10 to-transparent mb-4 relative overflow-hidden">
<div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
<img alt="Tobias" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
</div>
</div>
<div className="text-center">
<h3 className="text-white font-medium text-sm">Tobias Vetter</h3>
<p className="text-xs text-violet-400 mt-1">Ex-BCG</p>
<p className="text-[10px] text-slate-500 mt-2 tracking-wide uppercase">
                25+ Yrs Exp
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 border-t border-white/5" id="contact">
<div className="container mx-auto px-6 max-w-5xl">
<div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0F0B1E]">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-violet-500/10 to-transparent opacity-50 pointer-events-none"></div>
<div className="relative p-12 md:p-20 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
              Start with a 30-minute session
            </h2>
<p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
              Turn business intent into outcomes. Review strategy, explore
              opportunities, or prototype today.
            </p>
<button className="inline-flex h-14 items-center justify-center rounded-full bg-white px-10 font-medium text-black transition-all hover:bg-violet-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-slate-900 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
<span className="mr-2">Schedule Call</span>
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
</button>
<div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-slate-500 border-t border-white/5 pt-8 max-w-3xl mx-auto">
<div className="flex items-center justify-center gap-2">
<svg className="lucide lucide-check-circle w-4 h-4 text-violet-500" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span>Focused discussion</span>
</div>
<div className="flex items-center justify-center gap-2">
<svg className="lucide lucide-check-circle w-4 h-4 text-violet-500" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span>Potential impact view</span>
</div>
<div className="flex items-center justify-center gap-2">
<svg className="lucide lucide-check-circle w-4 h-4 text-violet-500" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span>Clear next steps</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 py-12 border-t border-white/5 bg-[#030014]">
<div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-xs font-bold text-white">
            E
          </div>
<span className="text-sm font-semibold text-white">Eiger Labs</span>
</div>
<div className="flex gap-8 text-xs font-medium text-slate-500">
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
<div className="text-xs text-slate-600">© 2025 Eiger Labs.</div>
</div>
</footer>



    </>
  );
}
