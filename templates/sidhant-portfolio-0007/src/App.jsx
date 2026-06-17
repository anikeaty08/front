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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        // Form Handling
        function showSuccess() {
            const form = document.getElementById('contactForm');
            const successMsg = document.getElementById('successMessage');
            successMsg.classList.remove('hidden');
            // Small timeout to allow display:block to apply before opacity transition
            setTimeout(() => {
                successMsg.classList.remove('opacity-0');
            }, 10);
            form.reset();
        }

        function hideSuccess() {
            const successMsg = document.getElementById('successMessage');
            successMsg.classList.add('opacity-0');
            setTimeout(() => {
                successMsg.classList.add('hidden');
            }, 300);
        }

        // 3D Tilt Effect logic for cards
        document.querySelectorAll('.tilt-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Calculate rotation based on cursor position
                // Center of card is 0,0
                const xPct = (x / rect.width) - 0.5;
                const yPct = (y / rect.height) - 0.5;
                
                // Max rotation degrees
                const xRot = yPct * -10; // Rotate X axis based on Y position (up/down)
                const yRot = xPct * 10;  // Rotate Y axis based on X position (left/right)
                
                card.style.transform = `perspective(1000px) rotateX(${xRot}deg) rotateY(${yRot}deg) scale(1.02)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-grid"></div>
<div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[128px]"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]"></div>
</div>

<nav className="fixed w-full z-50 top-0 start-0 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
<a className="flex items-center space-x-3 rtl:space-x-reverse z-50" href="#">
<span className="self-center text-xl font-semibold whitespace-nowrap tracking-tighter text-white">SIDHANT<span className="text-cyan-400">.</span></span>
</a>
<div className="hidden w-full md:block md:w-auto" id="navbar-default">
<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-white/5 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
<li><a className="block py-2 px-3 text-slate-400 hover:text-white transition-colors text-sm" href="#about">About</a></li>
<li><a className="block py-2 px-3 text-slate-400 hover:text-white transition-colors text-sm" href="#skills">Skills</a></li>
<li><a className="block py-2 px-3 text-slate-400 hover:text-white transition-colors text-sm" href="#projects">Projects</a></li>
<li><a className="block py-2 px-3 text-slate-400 hover:text-white transition-colors text-sm" href="#contact">Contact</a></li>
</ul>
</div>
</div>
</nav>

<section className="relative z-10 min-h-screen flex items-center justify-center pt-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center w-full">
<div className="space-y-6 perspective-1000">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                    Open to Work
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-400">
                    Hi, I’m <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 glow-text">Sidhant Swain</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-lg font-light">
                    Aspiring Software Developer &amp; Tech Enthusiast. <br/>
<span className="text-slate-500 text-base block mt-2">B.Tech CSE | Python | Java | JavaScript | Project-Oriented Learner</span>
</p>
<div className="flex flex-wrap gap-4 pt-4">
<a className="group relative px-6 py-3 bg-white text-slate-950 text-sm font-medium rounded-md overflow-hidden transition-all hover:bg-cyan-50" href="#projects">
<span className="relative z-10 flex items-center gap-2">
                            View My Projects
                            <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
</a>
<a className="px-6 py-3 border border-white/20 text-white text-sm font-medium rounded-md hover:bg-white/5 transition-colors" href="#contact">
                        Contact Me
                    </a>
</div>
</div>

<div className="flex items-center justify-center perspective-1000 h-[400px]">
<div className="cube-spinner">
<div className="cube-face face-front"><iconify-icon icon="solar:code-circle-linear" strokeWidth="1"></iconify-icon></div>
<div className="cube-face face-back"><iconify-icon icon="solar:monitor-camera-linear" strokeWidth="1"></iconify-icon></div>
<div className="cube-face face-right"><iconify-icon icon="solar:cpu-bolt-linear" strokeWidth="1"></iconify-icon></div>
<div className="cube-face face-left"><iconify-icon icon="solar:server-square-linear" strokeWidth="1"></iconify-icon></div>
<div className="cube-face face-top"></div>
<div className="cube-face face-bottom"></div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24" id="about">
<div className="max-w-4xl mx-auto px-4">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">About Me</h2>
<div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full"></div>
</div>
<div className="tilt-card relative group p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent">
<div className="relative bg-slate-950/80 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-xl overflow-hidden">
<div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
<iconify-icon height="200" icon="solar:user-id-linear" width="200"></iconify-icon>
</div>
<div className="relative z-10 text-slate-300 text-lg leading-relaxed font-light space-y-6">
<p>
                            I am a Computer Science Engineering student passionate about building practical software solutions.
                        </p>
<p>
                            I enjoy working with <span className="text-cyan-400 font-normal">Python, Java, and JavaScript</span>, and I focus on learning by building real-world projects. I believe in the power of code to solve problems and am driven by curiosity to understand how complex systems work under the hood.
                        </p>
<p>
                            I am actively seeking internships and opportunities where I can grow as a developer and contribute to meaningful work.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 bg-slate-950/50" id="skills">
<div className="max-w-6xl mx-auto px-4">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Technical Arsenal</h2>
<p className="text-slate-400 font-light">Tools and technologies I use to bring ideas to life</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

<div className="group relative perspective-1000 h-40">
<div className="w-full h-full preserve-3d transition-all duration-500 ease-out group-hover:[transform:rotateY(180deg)] cursor-pointer">

<div className="absolute inset-0 backface-hidden bg-slate-900 border border-white/5 rounded-xl flex flex-col items-center justify-center gap-3 shadow-lg hover:border-cyan-500/30 transition-colors">
<iconify-icon className="text-cyan-400 text-5xl" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium tracking-tight">Python</span>
</div>

<div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] bg-cyan-950/30 border border-cyan-500/30 rounded-xl flex items-center justify-center p-4 text-center backdrop-blur-sm">
<p className="text-xs text-cyan-200">Versatile language for scripting, automation, and backend logic.</p>
</div>
</div>
</div>

<div className="group relative perspective-1000 h-40">
<div className="w-full h-full preserve-3d transition-all duration-500 ease-out group-hover:[transform:rotateY(180deg)] cursor-pointer">
<div className="absolute inset-0 backface-hidden bg-slate-900 border border-white/5 rounded-xl flex flex-col items-center justify-center gap-3 shadow-lg hover:border-violet-500/30 transition-colors">
<iconify-icon className="text-violet-400 text-5xl" icon="solar:cup-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium tracking-tight">Java</span>
</div>
<div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] bg-violet-950/30 border border-violet-500/30 rounded-xl flex items-center justify-center p-4 text-center backdrop-blur-sm">
<p className="text-xs text-violet-200">Strong OOP principles and enterprise application development.</p>
</div>
</div>
</div>

<div className="group relative perspective-1000 h-40">
<div className="w-full h-full preserve-3d transition-all duration-500 ease-out group-hover:[transform:rotateY(180deg)] cursor-pointer">
<div className="absolute inset-0 backface-hidden bg-slate-900 border border-white/5 rounded-xl flex flex-col items-center justify-center gap-3 shadow-lg hover:border-yellow-500/30 transition-colors">
<iconify-icon className="text-yellow-400 text-5xl" icon="solar:brackets-check-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium tracking-tight">JavaScript</span>
</div>
<div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] bg-yellow-950/30 border border-yellow-500/30 rounded-xl flex items-center justify-center p-4 text-center backdrop-blur-sm">
<p className="text-xs text-yellow-200">Interactive web elements and dynamic frontend functionality.</p>
</div>
</div>
</div>

<div className="group relative perspective-1000 h-40">
<div className="w-full h-full preserve-3d transition-all duration-500 ease-out group-hover:[transform:rotateY(180deg)] cursor-pointer">
<div className="absolute inset-0 backface-hidden bg-slate-900 border border-white/5 rounded-xl flex flex-col items-center justify-center gap-3 shadow-lg hover:border-green-500/30 transition-colors">
<iconify-icon className="text-green-400 text-5xl" icon="solar:clipboard-check-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium tracking-tight">Project Mgmt</span>
</div>
<div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] bg-green-950/30 border border-green-500/30 rounded-xl flex items-center justify-center p-4 text-center backdrop-blur-sm">
<p className="text-xs text-green-200">Planning, agile workflows, and collaborative execution.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24">
<div className="max-w-4xl mx-auto px-4">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center">Education Journey</h2>
<div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0 space-y-12">

<div className="relative md:flex items-center group">
<div className="absolute -left-[5px] top-0 md:relative md:left-auto md:top-auto md:w-1/2 md:pr-12 md:text-right">
<div className="hidden md:block w-3 h-3 bg-cyan-500 rounded-full absolute right-[-6.5px] top-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(6,182,212,0.8)] z-20"></div>
<h3 className="text-xl font-medium tracking-tight text-white group-hover:text-cyan-400 transition-colors">GIET University, Gunupur</h3>
<p className="text-sm text-slate-400 mt-1">Bachelor of Technology (B.Tech)<br/>Computer Science &amp; Engineering</p>
</div>
<div className="block md:hidden w-3 h-3 bg-cyan-500 rounded-full absolute left-[-6.5px] top-1.5 shadow-[0_0_10px_rgba(6,182,212,0.8)] z-20"></div>
<div className="pl-8 md:pl-12 md:w-1/2">
<div className="md:hidden">
<h3 className="text-xl font-medium tracking-tight text-white">GIET University, Gunupur</h3>
<p className="text-sm text-slate-400 mt-1">B.Tech - Computer Science &amp; Engineering</p>
</div>
<span className="inline-block mt-2 md:mt-0 px-2 py-1 bg-white/5 rounded text-xs text-cyan-200 border border-white/5">Current</span>
</div>
</div>

<div className="relative md:flex items-center group">
<div className="absolute -left-[5px] top-0 md:relative md:left-auto md:top-auto md:w-1/2 md:pr-12 md:text-right">
<div className="hidden md:block w-3 h-3 bg-violet-500 rounded-full absolute right-[-6.5px] top-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(139,92,246,0.8)] z-20"></div>
<h3 className="text-xl font-medium tracking-tight text-white group-hover:text-violet-400 transition-colors">Kendriya Vidyalaya</h3>
<p className="text-sm text-slate-400 mt-1">Secondary School Certification<br/>(Class 10)</p>
</div>
<div className="block md:hidden w-3 h-3 bg-violet-500 rounded-full absolute left-[-6.5px] top-1.5 shadow-[0_0_10px_rgba(139,92,246,0.8)] z-20"></div>
<div className="pl-8 md:pl-12 md:w-1/2">
<div className="md:hidden">
<h3 className="text-xl font-medium tracking-tight text-white">Kendriya Vidyalaya</h3>
<p className="text-sm text-slate-400 mt-1">Secondary School Certification</p>
</div>
<span className="inline-block mt-2 md:mt-0 px-2 py-1 bg-white/5 rounded text-xs text-violet-200 border border-white/5">Completed</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 bg-slate-900/30" id="projects">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Selected Projects</h2>
<p className="text-slate-400 font-light">Practical applications of my learning</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="tilt-card group relative bg-slate-950 border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2">
<div className="h-40 bg-gradient-to-br from-cyan-900/20 to-slate-900 flex items-center justify-center group-hover:from-cyan-900/40 transition-colors">
<iconify-icon className="text-6xl text-cyan-500 opacity-50" icon="solar:screencast-2-linear"></iconify-icon>
</div>
<div className="p-6">
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Student Management System</h3>
<p className="text-sm text-slate-400 mb-4 line-clamp-2">A comprehensive system to track student data, attendance, and grades efficiently.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="text-xs px-2 py-1 rounded bg-slate-900 border border-white/10 text-cyan-300">Java</span>
<span className="text-xs px-2 py-1 rounded bg-slate-900 border border-white/10 text-cyan-300">SQL</span>
</div>
<div className="flex gap-3">
<button className="flex-1 py-2 rounded text-xs font-medium border border-white/10 hover:bg-white hover:text-slate-900 transition-colors">View Code</button>
<button className="flex-1 py-2 rounded text-xs font-medium bg-white/5 text-white hover:bg-white/10 transition-colors">Demo</button>
</div>
</div>
</div>

<div className="tilt-card group relative bg-slate-950 border border-white/5 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-2">
<div className="h-40 bg-gradient-to-br from-violet-900/20 to-slate-900 flex items-center justify-center group-hover:from-violet-900/40 transition-colors">
<iconify-icon className="text-6xl text-violet-500 opacity-50" icon="solar:cart-large-minimalistic-linear"></iconify-icon>
</div>
<div className="p-6">
<h3 className="text-lg font-medium tracking-tight text-white mb-2">E-Commerce Logic</h3>
<p className="text-sm text-slate-400 mb-4 line-clamp-2">Backend logic implementation for cart management, user authentication and order processing.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="text-xs px-2 py-1 rounded bg-slate-900 border border-white/10 text-violet-300">Python</span>
<span className="text-xs px-2 py-1 rounded bg-slate-900 border border-white/10 text-violet-300">Django</span>
</div>
<div className="flex gap-3">
<button className="flex-1 py-2 rounded text-xs font-medium border border-white/10 hover:bg-white hover:text-slate-900 transition-colors">View Code</button>
<button className="flex-1 py-2 rounded text-xs font-medium bg-white/5 text-white hover:bg-white/10 transition-colors">Demo</button>
</div>
</div>
</div>

<div className="tilt-card group relative bg-slate-950 border border-white/5 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2">
<div className="h-40 bg-gradient-to-br from-emerald-900/20 to-slate-900 flex items-center justify-center group-hover:from-emerald-900/40 transition-colors">
<iconify-icon className="text-6xl text-emerald-500 opacity-50" icon="solar:chat-round-line-linear"></iconify-icon>
</div>
<div className="p-6">
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Chat Application</h3>
<p className="text-sm text-slate-400 mb-4 line-clamp-2">Real-time messaging platform using web sockets with a clean UI.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="text-xs px-2 py-1 rounded bg-slate-900 border border-white/10 text-emerald-300">JavaScript</span>
<span className="text-xs px-2 py-1 rounded bg-slate-900 border border-white/10 text-emerald-300">Node</span>
</div>
<div className="flex gap-3">
<button className="flex-1 py-2 rounded text-xs font-medium border border-white/10 hover:bg-white hover:text-slate-900 transition-colors">View Code</button>
<button className="flex-1 py-2 rounded text-xs font-medium bg-white/5 text-white hover:bg-white/10 transition-colors">Demo</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24">
<div className="max-w-6xl mx-auto px-4">
<div className="tilt-card relative group rounded-3xl bg-slate-900/50 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">

<div className="flex-1 text-center md:text-left space-y-6">
<div className="inline-flex items-center gap-3">
<div className="p-3 rounded-full bg-white/5 border border-white/10 text-white">
<iconify-icon height="32" icon="solar:github-circle-linear" width="32"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight">Sidhant-7</h3>
<p className="text-slate-400 text-sm">Open Source Contributor</p>
</div>
</div>
<p className="text-slate-300 font-light max-w-md">
                            Check out my repositories and contribution history. I'm actively pushing code and exploring new libraries.
                        </p>
<div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm">
<div className="flex items-center gap-2 text-slate-400">
<iconify-icon icon="solar:folder-with-files-linear"></iconify-icon>
<span>15+ Repositories</span>
</div>
<div className="flex items-center gap-2 text-slate-400">
<iconify-icon icon="solar:star-linear"></iconify-icon>
<span>Active Contributor</span>
</div>
</div>
<a className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-950 rounded font-medium hover:bg-cyan-50 transition-colors" href="https://github.com/Sidhant-7" target="_blank">
                            Visit Profile
                            <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="flex-1 w-full max-w-md">
<div className="bg-slate-950 border border-white/5 rounded-xl p-6 shadow-2xl">
<div className="flex items-center justify-between mb-4">
<span className="text-xs text-slate-500">Contribution Activity</span>
<div className="flex gap-1">
<div className="w-2 h-2 rounded-sm bg-slate-800"></div>
<div className="w-2 h-2 rounded-sm bg-cyan-900"></div>
<div className="w-2 h-2 rounded-sm bg-cyan-500"></div>
</div>
</div>

<div className="grid grid-cols-12 gap-1.5 h-32 overflow-hidden opacity-80">

<div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-cyan-900/40"></div> <div className="rounded-sm bg-slate-800/50"></div>
<div className="rounded-sm bg-cyan-500/20"></div> <div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-cyan-500/40"></div>
<div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-cyan-500/60"></div> <div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-slate-800/50"></div>
<div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-cyan-500/80"></div>
<div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-cyan-500/50"></div> <div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-slate-800/50"></div>
<div className="rounded-sm bg-cyan-900/40"></div> <div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-cyan-500/30"></div> <div className="rounded-sm bg-slate-800/50"></div>
<div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-cyan-500/70"></div> <div className="rounded-sm bg-slate-800/50"></div>
<div className="rounded-sm bg-cyan-500/40"></div> <div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-cyan-500/90"></div>
<div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-cyan-500/20"></div>
<div className="rounded-sm bg-cyan-500/60"></div> <div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-cyan-500/50"></div> <div className="rounded-sm bg-slate-800/50"></div>
<div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-cyan-900/30"></div> <div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-slate-800/50"></div>
<div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-cyan-500/40"></div> <div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-cyan-500/30"></div>
<div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-cyan-500/80"></div>
<div className="rounded-sm bg-cyan-500/20"></div> <div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-cyan-500/50"></div> <div className="rounded-sm bg-slate-800/50"></div>
<div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-cyan-900/40"></div> <div className="rounded-sm bg-slate-800/50"></div>
<div className="rounded-sm bg-cyan-500/60"></div> <div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-cyan-500/20"></div>
<div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-cyan-500/80"></div> <div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-slate-800/50"></div>
<div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-slate-800/50"></div> <div className="rounded-sm bg-cyan-500/40"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24" id="contact">
<div className="max-w-6xl mx-auto px-4">
<div className="grid md:grid-cols-2 gap-12">

<div className="space-y-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Let's Connect</h2>
<p className="text-slate-400 font-light text-lg">
                        I am currently looking for internships and entry-level positions. Feel free to reach out for collaborations or just a tech chat.
                    </p>
<div className="space-y-4">
<div className="flex items-center gap-4 text-slate-300">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/10">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500 uppercase tracking-widest">Email</p>
<a className="hover:text-cyan-400 transition-colors" href="mailto:sidhantswain747@gmail.com">sidhantswain747@gmail.com</a>
</div>
</div>
<div className="flex items-center gap-4 text-slate-300">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/10">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500 uppercase tracking-widest">Location</p>
<p>Balangir, Odisha, India</p>
</div>
</div>
</div>
<a className="inline-flex items-center gap-2 text-cyan-400 border border-cyan-500/30 px-6 py-3 rounded hover:bg-cyan-500/10 transition-colors" href="https://linkedin.com" target="_blank">
<iconify-icon icon="solar:link-circle-linear" strokeWidth="2"></iconify-icon>
                        Connect on LinkedIn
                    </a>
</div>

<div className="relative bg-slate-950/50 border border-white/10 p-8 rounded-2xl shadow-2xl backdrop-blur-sm glow-box">
<form className="space-y-6" id="contactForm" onsubmit="event.preventDefault(); showSuccess();">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs text-slate-400 uppercase tracking-wider">Name</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-cyan-400 transition-colors text-white placeholder-slate-700" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-400 uppercase tracking-wider">Email</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-cyan-400 transition-colors text-white placeholder-slate-700" placeholder="john@example.com" required="" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-400 uppercase tracking-wider">Message</label>
<textarea className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-cyan-400 transition-colors text-white placeholder-slate-700 resize-none" placeholder="Tell me about your project..." required="" rows="4"></textarea>
</div>
<button className="w-full py-3 bg-white text-slate-950 font-medium rounded hover:bg-cyan-50 transition-colors flex items-center justify-center gap-2" type="submit">
                            Send Message
                            <iconify-icon icon="solar:plain-3-linear"></iconify-icon>
</button>
</form>

<div className="absolute inset-0 bg-slate-950/95 flex flex-col items-center justify-center rounded-2xl hidden opacity-0 transition-opacity duration-300" id="successMessage">
<iconify-icon className="text-6xl text-green-400 mb-4 animate-bounce" icon="solar:check-circle-linear"></iconify-icon>
<p className="text-xl font-medium text-white">Message Sent!</p>
<p className="text-slate-400 text-sm mt-2">I'll get back to you soon.</p>
<button className="mt-6 text-sm text-cyan-400 hover:text-cyan-300" onclick="hideSuccess()">Send another</button>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-slate-950">
<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tighter text-white">SIDHANT<span className="text-cyan-400">.</span></span>
</div>
<p className="text-slate-500 text-sm font-light">Designed to showcase learning, growth, and ambition</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:link-circle-linear"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
<div className="text-center mt-8">
<p className="text-xs text-slate-600">© 2023 Sidhant Swain. All rights reserved.</p>
</div>
</footer>



    </>
  );
}
