import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Newsreader', 'serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#09090b',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
animation: {
'marquee': 'marquee 40s linear infinite',
'beam': 'beam 8s linear infinite',
'reveal': 'reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'cursor': 'cursor .75s step-end infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
},
beam: {
'0%': { top: '-200px', opacity: '0' },
'10%': { opacity: '1' },
'90%': { opacity: '1' },
'100%': { top: '100%', opacity: '0' },
},
reveal: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
cursor: {
'0%, 100%': { opacity: '1' },
'50%': { opacity: '0' },
}
}
}
}
}



// Theme Toggle Logic
function toggleTheme() {
const html = document.documentElement;
const isDark = html.classList.contains('dark');
if (isDark) {
html.classList.remove('dark');
localStorage.setItem('theme', 'light');
} else {
html.classList.add('dark');
localStorage.setItem('theme', 'dark');
}
}
// Initialize Theme
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
document.documentElement.classList.add('dark');
} else {
document.documentElement.classList.remove('dark');
}
// Animation Observer
document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
}
});
}, { threshold: 0.05, rootMargin: "0px 0px -10% 0px" });
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
setTimeout(() => {
document.querySelectorAll("#hero .animate-on-scroll").forEach(el => el.classList.add("animate"));
}, 100);
});



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


      const body = document.getElementById('main-body');
      const spotlightGroups = document.querySelectorAll('.spotlight-group');

      document.addEventListener('mousemove', (e) => {
          const x = e.clientX;
          const y = e.clientY;

          body.style.setProperty('--mouse-x', `${x}px`);
          body.style.setProperty('--mouse-y', `${y}px`);

          spotlightGroups.forEach(group => {
              const rect = group.getBoundingClientRect();
              const relX = x - rect.left;
              const relY = y - rect.top;

              group.style.setProperty('--mouse-x-rel', `${relX}px`);
              group.style.setProperty('--mouse-y-rel', `${relY}px`);
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">

<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div>

<div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay pointer-events-none"></div>
</div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-blue-950/20 via-zinc-950/20 to-transparent -z-10 pointer-events-none"></div>
<div className="fixed top-[-200px] right-[-100px] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

<div className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 hidden dark:block" style={{background: 'radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.03), transparent 40%)'}}></div>

<div className="fixed top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-400 dark:via-zinc-700 to-transparent z-50 opacity-50"></div>

<div className="absolute inset-0 pointer-events-none z-0 grid grid-cols-6 md:grid-cols-12 max-w-7xl mx-auto border-x border-zinc-200/50 dark:border-white/5 h-[1600px]">
<div className="border-r border-zinc-200/50 dark:border-white/5 h-full hidden md:block animate-line relative overflow-hidden delay-100">
<div className="absolute -top-40 -right-[1px] w-[1px] h-40 bg-gradient-to-b from-transparent via-blue-400/50 dark:via-white/20 to-transparent animate-beam" style={{animationDuration: '7s'}}></div>
</div>
<div className="border-r border-zinc-200/50 dark:border-white/5 h-full hidden md:block animate-line delay-300"></div>
<div className="border-r border-zinc-200/50 dark:border-white/5 h-full hidden md:block animate-line delay-150 relative overflow-hidden">
<div className="absolute -top-52 -right-[1px] w-[1px] h-52 bg-gradient-to-b from-transparent via-blue-400/30 dark:via-white/10 to-transparent animate-beam" style={{animationDuration: '11s', animationDelay: '2s'}}></div>
</div>
<div className="border-r border-zinc-200/50 dark:border-white/5 h-full hidden md:block animate-line delay-200"></div>
<div className="border-r border-zinc-200/50 dark:border-white/5 h-full hidden md:block animate-line delay-75"></div>
<div className="border-r border-zinc-200/50 dark:border-white/5 h-full hidden md:block animate-line delay-300"></div>
<div className="border-r border-zinc-200/50 dark:border-white/5 h-full hidden md:block animate-line delay-100 relative overflow-hidden">
<div className="absolute -top-64 -right-[1px] w-[1px] h-64 bg-gradient-to-b from-transparent via-blue-400/50 dark:via-white/20 to-transparent animate-beam" style={{animationDuration: '9s', animationDelay: '1.5s'}}></div>
</div>
<div className="border-r border-zinc-200/50 dark:border-white/5 h-full hidden md:block animate-line delay-200"></div>
<div className="border-r border-zinc-200/50 dark:border-white/5 h-full hidden md:block animate-line delay-400"></div>
<div className="border-r border-zinc-200/50 dark:border-white/5 h-full hidden md:block animate-line delay-150"></div>
<div className="border-r border-zinc-200/50 dark:border-white/5 h-full hidden md:block animate-line delay-300"></div>
</div>

<nav className="fixed top-6 z-50 left-1/2 -translate-x-1/2 w-[90%] md:w-auto max-w-5xl shrink-0">
<div className="rounded-full border border-zinc-200 dark:border-white/10 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-xl shadow-2xl dark:shadow-black/50 px-4 md:px-3 h-14 flex items-center justify-between gap-4 md:gap-12 transition-colors duration-300">

<div className="flex items-center gap-2 pl-2">
<iconify-icon className="text-zinc-900 dark:text-white text-xl" icon="lucide:box"></iconify-icon>
<span className="text-base font-medium tracking-tight text-zinc-900 dark:text-white">
            Nexus
          </span>
</div>

<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-1 group" href="#">
            Product
            <iconify-icon className="text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" icon="lucide:chevron-down" width="12"></iconify-icon>
</a>
<a className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">
            Resources
          </a>
<a className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">
            Pricing
          </a>
</div>

<div className="flex items-center gap-4">

<button className="rounded-full w-8 h-8 flex items-center justify-center text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors" onclick="toggleTheme()">
<iconify-icon className="block dark:hidden" icon="lucide:sun" width="18"></iconify-icon>
<iconify-icon className="hidden dark:block" icon="lucide:moon" width="18"></iconify-icon>
</button>
<a className="hidden md:flex items-center text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">
            Log in
          </a>
<button className="relative rounded-full bg-zinc-900 dark:bg-white px-5 py-2 text-xs font-semibold text-white dark:text-zinc-950 hover:opacity-90 transition-all overflow-hidden group">
<span className="relative z-10">Get Started</span>
</button>
</div>
</div>
</nav>

<main className="relative pt-24">

<section className="flex flex-col w-full max-w-7xl z-10 mt-16 md:mt-32 mx-auto px-6 relative justify-center" id="hero">

<div className="w-full flex justify-start mb-10 spotlight-group relative animate-on-scroll">
<a className="relative z-10 group flex items-center gap-3 rounded-full border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 pr-4 pl-1.5 py-1.5 hover:border-zinc-300 dark:hover:border-white/20 transition-all overflow-hidden backdrop-blur-sm shadow-sm" href="#">
<span className="rounded-full bg-blue-500/10 dark:bg-zinc-800 border border-blue-500/20 dark:border-white/5 px-2.5 py-0.5 text-[10px] font-bold text-blue-600 dark:text-white tracking-wide uppercase">
              v3.0 Beta
            </span>
<span className="text-sm font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-300">
              Edge functions are live
            </span>
<iconify-icon className="text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:translate-x-0.5 transition-all" icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>

<div className="w-full max-w-5xl">
<div className="relative z-20 animate-on-scroll">
<div className="flex flex-col gap-2">
<div className="flex text-xs text-zinc-500 font-mono mb-4 gap-x-2 gap-y-2 items-center tracking-widest uppercase">
                01_ORCHESTRATION
                <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></div>
</div>
<h1 className="text-5xl md:text-8xl lg:text-[100px] leading-[0.95] tracking-tighter font-serif text-zinc-900 dark:text-white">
<span className="block word-mask">
<span className="block word-reveal" style={{transitionDelay: '100ms'}}>
                    The control plane
                  </span>
</span>
<span className="block word-mask">
<span className="block word-reveal font-light text-zinc-500 dark:text-zinc-400/80 sans-serif" style={{transitionDelay: '250ms'}}>
                    for hybrid cloud.
                  </span>
</span>
</h1>
</div>
</div>
</div>

<div className="mt-12 md:mt-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-end animate-on-scroll" style={{transitionDelay: '400ms'}}>
<p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 font-serif italic leading-relaxed z-10 relative max-w-lg">
            "Sync databases, manage microservices, and orchestrate serverless
            functions with a single config file. The infrastructure layer for
            modern DevOps."
          </p>

<div className="flex flex-col sm:flex-row md:items-center gap-4 z-10 lg:justify-end pb-4">
<button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-zinc-900 dark:bg-white px-8 font-medium text-white dark:text-zinc-950 transition-all duration-300 hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-lg dark:shadow-white/10">
<span className="mr-2">Start Deploying</span>
<iconify-icon className="text-zinc-400 dark:text-zinc-600 group-hover:text-white dark:group-hover:text-zinc-900 transition-colors" icon="lucide:terminal" width="16"></iconify-icon>
</button>
<button className="group inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-white/5 px-8 font-medium text-zinc-600 dark:text-zinc-400 transition-all hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-white/30 backdrop-blur-sm">
<span>Documentation</span>
<iconify-icon className="ml-2 text-zinc-400 dark:text-zinc-600 group-hover:translate-x-1 group-hover:text-zinc-900 dark:group-hover:text-white transition-all" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="w-full z-20 mt-24 mb-32 max-w-6xl mx-auto px-4 md:px-6 relative animate-on-scroll" style={{transitionDelay: '500ms'}}>

<div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-20 dark:opacity-30 transition-opacity duration-1000"></div>

<div className="relative w-full rounded-xl overflow-hidden shadow-2xl shadow-zinc-200/50 dark:shadow-black/50 flex flex-col font-mono text-sm group shiny-border">

<div className="h-10 border-b border-zinc-200 dark:border-white/5 bg-zinc-100/50 dark:bg-[#0d1117] flex items-center px-4 justify-between backdrop-blur-md">
<div className="flex items-center gap-2">

<div className="flex gap-1.5 mr-4">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
</div>

<div className="flex items-center gap-2 px-3 py-1 rounded bg-white dark:bg-[#161b22] border border-zinc-200 dark:border-white/5 shadow-sm">
<iconify-icon className="text-blue-500 text-xs" icon="lucide:file-code"></iconify-icon>
<span className="text-xs text-zinc-700 dark:text-zinc-300 font-medium">
                  cluster-config.ts
                </span>
<iconify-icon className="text-zinc-400 text-[10px] ml-1 cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-200" icon="lucide:x"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-3">
<span className="flex items-center gap-1.5 text-[10px] text-zinc-500 px-2 py-0.5 rounded border border-zinc-200 dark:border-white/5 bg-zinc-100 dark:bg-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                Nexus AI Active
              </span>
<iconify-icon className="text-zinc-400" icon="lucide:panel-right"></iconify-icon>
</div>
</div>

<div className="p-4 md:p-6 overflow-x-auto bg-white/50 dark:bg-[#0d1117] min-h-[340px] relative">

<div className="grid grid-cols-[30px_1fr] gap-2 leading-relaxed">

<div className="contents text-zinc-600 dark:text-zinc-400">

<div className="text-right text-zinc-300 dark:text-zinc-700 select-none text-xs pt-1">
                  1
                </div>
<div className="pl-2 whitespace-pre">
<span className="text-purple-600 dark:text-purple-400">
                    import
                  </span>
                  {
                  <span className="text-yellow-600 dark:text-yellow-400">
                    NexusCluster
                  </span>
                  }
                  <span className="text-purple-600 dark:text-purple-400">from</span>
<span className="text-green-600 dark:text-green-400">
                    '@nexus/sdk'
                  </span>
                  ;
                </div>

<div className="text-right text-zinc-300 dark:text-zinc-700 select-none text-xs pt-1">
                  2
                </div>
<div className="pl-2 whitespace-pre"></div>

<div className="text-right text-zinc-300 dark:text-zinc-700 select-none text-xs pt-1">
                  3
                </div>
<div className="pl-2 whitespace-pre">
<span className="text-purple-600 dark:text-purple-400">
                    export default
                  </span>
<span className="text-blue-600 dark:text-blue-400">async</span>
<span className="text-purple-600 dark:text-purple-400">
                    function
                  </span>
<span className="text-blue-600 dark:text-blue-400">deploy</span>
                  () {
                </div>

<div className="text-right text-zinc-300 dark:text-zinc-700 select-none text-xs pt-1">
                  4
                </div>
<div className="pl-2 whitespace-pre">
<span className="text-zinc-400 dark:text-zinc-500">
                    // Initialize cluster with auto-scaling policies
                  </span>
</div>

<div className="text-right text-zinc-300 dark:text-zinc-700 select-none text-xs pt-1">
                  5
                </div>
<div className="pl-2 whitespace-pre">
<span className="text-purple-600 dark:text-purple-400">
                    const
                  </span>
<span className="text-red-600 dark:text-red-400">cluster</span>
                  =
                  <span className="text-purple-600 dark:text-purple-400">new</span>
<span className="text-yellow-600 dark:text-yellow-400">
                    NexusCluster
                  </span>
                  ({
                </div>

<div className="text-right text-zinc-300 dark:text-zinc-700 select-none text-xs pt-1">
                  6
                </div>
<div className="pl-2 whitespace-pre">
                  region:
                  <span className="text-green-600 dark:text-green-400">
                    'us-east-1'
                  </span>
                  ,
                </div>

<div className="text-right text-zinc-300 dark:text-zinc-700 select-none text-xs pt-1">
                  7
                </div>
<div className="pl-2 whitespace-pre">
                  runtime:
                  <span className="text-green-600 dark:text-green-400">
                    'edge-v2'
                  </span>
                  ,
                </div>

<div className="text-right text-zinc-300 dark:text-zinc-700 select-none text-xs pt-1">
                  8
                </div>
<div className="pl-2 whitespace-pre">});</div>

<div className="text-right text-zinc-300 dark:text-zinc-700 select-none text-xs pt-1">
                  9
                </div>
<div className="pl-2 whitespace-pre"></div>

<div className="text-right text-zinc-300 dark:text-zinc-700 select-none text-xs pt-1">
                  10
                </div>
<div className="pl-2 relative group/line">
<div className="absolute -inset-x-2 -inset-y-0.5 bg-blue-100/50 dark:bg-blue-500/10 border-l-2 border-blue-500 dark:border-blue-400 opacity-100 animate-pulse-slow"></div>
<div className="relative whitespace-pre z-10">
<span className="text-blue-600 dark:text-blue-400">await</span>
<span className="text-red-600 dark:text-red-400">cluster</span>
                    .
                    <span className="text-blue-600 dark:text-blue-400">sync</span>
                    ({
                  </div>
</div>

<div className="text-right text-zinc-300 dark:text-zinc-700 select-none text-xs pt-1">
                  11
                </div>
<div className="pl-2 relative group/line">
<div className="absolute -inset-x-2 -inset-y-0.5 bg-blue-100/50 dark:bg-blue-500/10 border-l-2 border-blue-500 dark:border-blue-400 opacity-100 animate-pulse-slow"></div>
<div className="relative whitespace-pre z-10">
<span className="text-blue-600 dark:text-blue-400">
                      database:
                    </span>
<span className="text-green-600 dark:text-green-400">
                      'postgres-primary'
                    </span>
                    ,
                  </div>
</div>

<div className="text-right text-zinc-300 dark:text-zinc-700 select-none text-xs pt-1">
                  12
                </div>
<div className="pl-2 relative group/line">
<div className="absolute -inset-x-2 -inset-y-0.5 bg-blue-100/50 dark:bg-blue-500/10 border-l-2 border-blue-500 dark:border-blue-400 opacity-100 animate-pulse-slow"></div>
<div className="relative whitespace-pre z-10 flex items-center">
<span className="text-blue-600 dark:text-blue-400">
                      replicas:
                    </span>
<span className="text-orange-600 dark:text-orange-400">3</span>
<span className="w-1.5 h-4 bg-zinc-900 dark:bg-zinc-200 ml-0.5 animate-cursor"></span>
</div>
</div>

<div className="text-right text-zinc-300 dark:text-zinc-700 select-none text-xs pt-1">
                  13
                </div>
<div className="pl-2 whitespace-pre">});</div>

<div className="text-right text-zinc-300 dark:text-zinc-700 select-none text-xs pt-1">
                  14
                </div>
<div className="pl-2 whitespace-pre">}</div>
</div>
</div>

<div className="absolute right-6 top-16 w-64 bg-white dark:bg-[#1c2128] rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-xl p-3 animate-reveal" style={{animationDelay: '1s'}}>
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-blue-500" icon="lucide:sparkles"></iconify-icon>
<span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                  Nexus Copilot
                </span>
</div>
<p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-snug">
                I've detected a high-traffic region. Suggesting 3 read-replicas
                to optimize latency.
              </p>
<div className="mt-2 flex gap-2">
<button className="flex-1 bg-blue-600 hover:bg-blue-500 text-white text-[10px] py-1 rounded font-medium transition-colors">
                  Accept
                </button>
<button className="flex-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-[10px] py-1 rounded font-medium transition-colors">
                  Dismiss
                </button>
</div>
</div>
</div>
</div>
</section>

<div className="z-20 w-full mb-32 relative animate-on-scroll">
<p className="uppercase text-xs font-bold text-zinc-500 dark:text-zinc-400 tracking-widest font-mono text-center mb-10">
          Powering next-gen teams
        </p>
<div className="relative flex overflow-hidden marquee-mask">
<div className="flex animate-marquee whitespace-nowrap min-w-full gap-x-24 items-center opacity-40 dark:opacity-60 hover:opacity-100 transition-opacity dark:grayscale dark:invert">
<iconify-icon icon="simple-icons:vercel" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:linear" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:stripe" width="50"></iconify-icon>
<iconify-icon icon="simple-icons:github" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:notion" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:raycast" width="40"></iconify-icon>

<iconify-icon icon="simple-icons:vercel" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:linear" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:stripe" width="50"></iconify-icon>
<iconify-icon icon="simple-icons:github" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:notion" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:raycast" width="40"></iconify-icon>
</div>
</div>
</div>

<section className="flex flex-col w-full z-20 relative py-32 border-t border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-transparent" id="features">

<div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:100px_50px] opacity-5 dark:opacity-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 w-full relative">
<div className="text-center max-w-2xl mx-auto mb-20 animate-on-scroll">
<h2 className="text-4xl md:text-5xl font-serif italic text-zinc-900 dark:text-white tracking-tight mb-4">
              Zero-Config
              <span className="not-italic text-zinc-500 font-normal font-sans">
                Infrastructure
              </span>
</h2>
<p className="text-zinc-600 dark:text-zinc-400 text-lg font-light leading-relaxed">
              Scale automatically with primitives designed for pixel-perfect
              backend precision.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

<div className="group relative rounded-xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 p-6 spotlight-group overflow-hidden hover:border-zinc-300 dark:hover:border-white/20 transition-all duration-300 flex flex-col h-full animate-on-scroll shadow-lg dark:shadow-none">
<div className="absolute inset-0 pointer-events-none opacity-0 spotlight-border transition-opacity duration-300" style={{background: 'radial-gradient(400px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(255, 255, 255, 0.05), transparent 40%)'}}></div>
<div className="h-48 w-full mb-8 rounded-lg bg-zinc-100 dark:bg-black/40 border border-zinc-200 dark:border-white/5 relative overflow-hidden flex flex-col p-4 gap-3 select-none">

<div className="flex items-center justify-between p-2 rounded bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-white/10 relative z-10 shadow-sm">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-500"></div>
<div className="h-1.5 w-12 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
</div>
<div className="h-1.5 w-8 bg-zinc-200 dark:bg-zinc-700/50 rounded"></div>
</div>
<div className="flex items-center justify-between p-2 rounded bg-zinc-50 dark:bg-zinc-800/30 border border-zinc-200 dark:border-white/5 relative z-10">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-600"></div>
<div className="h-1.5 w-16 bg-zinc-200 dark:bg-zinc-700/50 rounded"></div>
</div>
<div className="h-1.5 w-6 bg-zinc-200 dark:bg-zinc-700/50 rounded"></div>
</div>
<div className="absolute bottom-4 right-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-white/10 px-3 py-1.5 rounded-lg flex items-center gap-2 z-20 shadow-xl">
<iconify-icon className="text-emerald-500 text-xs" icon="lucide:check-circle"></iconify-icon>
<span className="text-[10px] font-mono text-zinc-600 dark:text-zinc-300 font-medium">
                    SYNCED
                  </span>
</div>
</div>
<div className="mt-auto relative z-10">
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-white/5 px-2 py-0.5 rounded border border-zinc-200 dark:border-white/5">
                    01
                  </span>
<iconify-icon className="text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" icon="lucide:rotate-ccw" width="18"></iconify-icon>
</div>
<h3 className="text-lg text-zinc-900 dark:text-white font-medium mb-2 tracking-tight">
                  Instant Rollbacks
                </h3>
<p className="text-sm text-zinc-600 dark:text-zinc-500 leading-relaxed font-light">
                  Immutable deployments allow you to revert to any previous
                  state instantly.
                </p>
</div>
</div>

<div className="group relative rounded-xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 p-6 spotlight-group overflow-hidden hover:border-zinc-300 dark:hover:border-white/20 transition-all duration-300 flex flex-col h-full animate-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 pointer-events-none opacity-0 spotlight-border transition-opacity duration-300" style={{background: 'radial-gradient(400px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(255, 255, 255, 0.05), transparent 40%)'}}></div>
<div className="h-48 w-full mb-8 rounded-lg bg-zinc-100 dark:bg-black/40 border border-zinc-200 dark:border-white/5 relative overflow-hidden flex items-center justify-center p-4 select-none">
<div className="w-full max-w-[160px] space-y-3 relative z-10">
<div className="flex items-center justify-between px-3 py-2 bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-white/10 rounded-lg shadow-sm backdrop-blur-md">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500 text-xs" icon="lucide:activity"></iconify-icon>
<div className="h-1.5 w-12 bg-zinc-200 dark:bg-zinc-600 rounded"></div>
</div>
<div className="text-[10px] text-zinc-700 dark:text-white font-mono font-medium">
                      99.99%
                    </div>
</div>
</div>
</div>
<div className="mt-auto relative z-10">
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-white/5 px-2 py-0.5 rounded border border-zinc-200 dark:border-white/5">
                    02
                  </span>
<iconify-icon className="text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" icon="lucide:bar-chart-2" width="18"></iconify-icon>
</div>
<h3 className="text-lg text-zinc-900 dark:text-white font-medium mb-2 tracking-tight">
                  Real-time Telemetry
                </h3>
<p className="text-sm text-zinc-600 dark:text-zinc-500 leading-relaxed font-light">
                  Granular observability built-in. Trace every request across
                  your entire mesh.
                </p>
</div>
</div>

<div className="group relative rounded-xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 p-6 spotlight-group overflow-hidden hover:border-zinc-300 dark:hover:border-white/20 transition-all duration-300 flex flex-col h-full animate-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 pointer-events-none opacity-0 spotlight-border transition-opacity duration-300" style={{background: 'radial-gradient(400px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(255, 255, 255, 0.05), transparent 40%)'}}></div>
<div className="h-48 w-full mb-8 rounded-lg bg-zinc-100 dark:bg-black/40 border border-zinc-200 dark:border-white/5 relative overflow-hidden flex items-center justify-center p-6 select-none">
<div className="relative w-full h-full border border-dashed border-zinc-300 dark:border-zinc-700/50 rounded-lg flex flex-col justify-between p-3 bg-white/50 dark:bg-zinc-900/20">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
<div className="px-3 py-1 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-white/5 text-zinc-600 dark:text-zinc-300 text-xs font-mono shadow-sm">
                      us-east-1
                    </div>
</div>
<div className="absolute top-0 right-0 -mt-1 -mr-1 w-2 h-2 bg-zinc-400 dark:bg-zinc-600 rounded-full"></div>
<div className="absolute bottom-0 left-0 -mb-1 -ml-1 w-2 h-2 bg-zinc-400 dark:bg-zinc-600 rounded-full"></div>
</div>
</div>
<div className="mt-auto relative z-10">
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-white/5 px-2 py-0.5 rounded border border-zinc-200 dark:border-white/5">
                    03
                  </span>
<iconify-icon className="text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" icon="lucide:globe" width="18"></iconify-icon>
</div>
<h3 className="text-lg text-zinc-900 dark:text-white font-medium mb-2 tracking-tight">
                  Global Edge
                </h3>
<p className="text-sm text-zinc-600 dark:text-zinc-500 leading-relaxed font-light">
                  Deploy logic to 35+ regions. Smart routing connects users to
                  nearest compute.
                </p>
</div>
</div>
</div>
</div>
</section>

<footer className="w-full bg-zinc-50 dark:bg-zinc-950 pt-20 pb-12 relative z-20 border-t border-zinc-200 dark:border-zinc-900 text-zinc-600 dark:text-zinc-400">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 mb-20">
<div className="col-span-2 md:col-span-4 flex flex-col gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-900 dark:text-white text-xl" icon="lucide:box"></iconify-icon>
<span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
                  Nexus
                </span>
</div>
<p className="text-sm text-zinc-600 dark:text-zinc-500 leading-relaxed max-w-xs font-light">
                The control plane for the modern web. Nexus orchestrates your
                backend infrastructure with zero configuration.
              </p>
<div className="flex gap-4 mt-2">
<a className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:x" width="18"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:github" width="18"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:discord" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="col-span-1 md:col-span-2 md:col-start-7">
<h4 className="text-sm font-medium text-zinc-900 dark:text-white mb-6">
                Product
              </h4>
<ul className="flex flex-col gap-3 text-sm text-zinc-500 font-light">
<li>
<a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">
                    Orchestration
                  </a>
</li>
<li>
<a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">
                    Edge Functions
                  </a>
</li>
<li>
<a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">
                    Databases
                  </a>
</li>
<li>
<a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">
                    Pricing
                  </a>
</li>
</ul>
</div>
<div className="col-span-1 md:col-span-2">
<h4 className="text-sm font-medium text-zinc-900 dark:text-white mb-6">
                Resources
              </h4>
<ul className="flex flex-col gap-3 text-sm text-zinc-500 font-light">
<li>
<a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">
                    Documentation
                  </a>
</li>
<li>
<a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">
                    API Reference
                  </a>
</li>
<li>
<a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">
                    System Status
                  </a>
</li>
</ul>
</div>
<div className="col-span-1 md:col-span-2">
<h4 className="text-sm font-medium text-zinc-900 dark:text-white mb-6">
                Company
              </h4>
<ul className="flex flex-col gap-3 text-sm text-zinc-500 font-light">
<li>
<a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">
                    About
                  </a>
</li>
<li>
<a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">
                    Blog
                  </a>
</li>
<li>
<a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">
                    Careers
                  </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-zinc-200 dark:border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xs text-zinc-500 font-mono">
              © 2024 Nexus Systems Inc.
            </div>
</div>
</div>
</footer>
</main>



    </>
  );
}
