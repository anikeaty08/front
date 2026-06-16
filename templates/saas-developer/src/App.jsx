import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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



      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.2/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


      document.addEventListener('DOMContentLoaded', () => {
          // Typing Animation
          const textToType = "setStatus('active');";
          const typingElement = document.getElementById('typing-text');
          let index = 0;

          function typeWriter() {
              if (index < textToType.length) {
                  typingElement.innerHTML += textToType.charAt(index);
                  index++;
                  setTimeout(typeWriter, 100);
              } else {
                  setTimeout(() => {
                      typingElement.innerHTML = "";
                      index = 0;
                      typeWriter();
                  }, 3000);
              }
          }

          // Start typing delay
          setTimeout(typeWriter, 1000);

          // Counter Animation
          const counters = document.querySelectorAll('.counter');
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      const counter = entry.target;
                      const target = parseFloat(counter.getAttribute('data-target'));
                      const duration = 2000;
                      const start = performance.now();

                      function step(timestamp) {
                          const progress = Math.min((timestamp - start) / duration, 1);
                          // Ease out quart
                          const ease = 1 - Math.pow(1 - progress, 4);

                          counter.innerText = (target * ease).toFixed(2) + "%";

                          if (progress < 1) {
                              window.requestAnimationFrame(step);
                          } else {
                              counter.innerText = target + "%";
                          }
                      }

                      window.requestAnimationFrame(step);
                      observer.unobserve(counter);
                  }
              });
          }, { threshold: 0.5 });

          counters.forEach(c => observer.observe(c));
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 -z-10 pointer-events-none">
<div className="w-full h-full" data-us-project="jAuGBjg92zfXiGbRlnyG"></div>
</div>


<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex gap-3 cursor-pointer group group-hover:border-sky-500/50 gap-x-3 gap-y-3 items-center" onclick="window.location.href='/home'" role="button">
<div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 group-hover:border-purple-500/50 transition-colors">
<iconify-icon className="text-white transition-colors group-hover:text-sky-400" icon="solar:infinity-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-white/90 tracking-tight">
            Sora
            <span className="text-white/40">Studio</span>
</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="hover:text-white transition-colors text-xs font-medium text-white/60" href="/platform">
            Platform
          </a>
<a className="hover:text-white transition-colors text-xs font-medium text-white/60" href="/solutions">
            Solutions
          </a>
<a className="hover:text-white transition-colors text-xs font-medium text-white/60" href="/pricing">
            Pricing
          </a>
<a className="hover:text-white transition-colors text-xs font-medium text-white/60" href="/changelog">
            Changelog
          </a>
</div>
<div className="flex gap-4 gap-x-4 gap-y-4 items-center">
<button className="hidden md:flex hover:text-white transition-colors cursor-pointer text-xs font-medium text-white/60" onclick="window.location.href='/log-in'" role="button">
            Log In
          </button>
<button className="group overflow-hidden hover:bg-neutral-200 transition-all cursor-pointer text-xs font-medium text-black bg-white rounded-full pt-2 pr-4 pb-2 pl-4 relative" onclick="window.location.href='/sign-up'" role="button">
<span className="z-10 flex items-center gap-1 relative">
              Start Building
              <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
<button className="md:hidden text-white/80">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="lg:pt-32 lg:pb-24 z-10 pt-32 pr-6 pb-20 pl-6 relative">
<div className="text-center max-w-7xl z-10 mr-auto ml-auto relative">

<div className="fade-in-up inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 hover:border-sky-500/30 hover:bg-white/10 transition-colors cursor-pointer group shadow-[0_0_10px_-5px_rgba(255,255,255,0.1)]">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
</span>
<span className="text-xs font-medium text-white tracking-wide group-hover:text-sky-100 transition-colors">
            Sora AI 2.0 is now live
          </span>
<iconify-icon className="text-white/40 group-hover:text-white transition-colors" icon="solar:arrow-right-linear" width="12"></iconify-icon>
</div>

<h1 className="fade-in-up delay-100 sm:text-7xl lg:text-8xl leading-[1.05] text-5xl font-semibold tracking-tighter max-w-5xl mr-auto mb-8 ml-auto relative" style={{maskImage: 'linear-gradient(180deg, transparent, black 30%, black 75%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 30%, black 75%, transparent)'}}>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-sky-500/20 blur-[120px] -z-10 rounded-full pointer-events-none mix-blend-screen"></div>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/80 drop-shadow-sm">Architect the</span>
<br className="hidden sm:block"/>
<span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-sky-200 via-white to-sky-200 relative drop-shadow-[0_0_35px_rgba(56,189,248,0.4)] overflow-visible">
            future of software.
          </span>
</h1>
<p className="fade-in-up delay-200 text-lg sm:text-xl text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-md">
          The integrated development environment designed for perfectionists.
          Deploy instantly to the edge with zero configuration.
        </p>

<div className="fade-in-up delay-300 flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center">

<button className="group sm:w-auto overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(14,165,233,0.6)] hover:scale-[1.02] w-full rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative" onmousemove="const rect = this.getBoundingClientRect(); this.style.setProperty('--x', (event.clientX - rect.left) + 'px'); this.style.setProperty('--y', (event.clientY - rect.top) + 'px');" style={{-X: '192.33343505859375px', -Y: '27.019989013671875px'}}>

<span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'radial-gradient(300px circle at var(--x) var(--y), #0ea5e9, #3b82f6, transparent 60%)'}}></span>

<span className="absolute inset-0 bg-white/20 opacity-100 group-hover:opacity-0 transition-opacity duration-300"></span>

<span className="flex items-center justify-center gap-2 transition-all duration-300 group-hover:bg-black/90 text-sm font-semibold text-white bg-black w-full h-full border-white/5 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 relative backdrop-blur-3xl">
              Start Deploying
              <iconify-icon className="text-sky-400 transition-transform duration-300 group-hover:translate-x-1" icon="lucide:arrow-right"></iconify-icon>
</span>
</button>

<button className="group flex transition-all duration-300 hover:bg-white/15 hover:border-white/25 hover:text-white hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] overflow-hidden sm:w-auto text-sm font-medium text-white bg-white/20 w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8 relative shadow-[0_10px_30px_-18px_rgba(0,0,0,0.9)] backdrop-blur-xl gap-x-2 gap-y-2 items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '9999px'}}>

<span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/15 via-white/0 to-white/0"></span>
<iconify-icon className="relative z-10 opacity-80 transition-opacity duration-300 group-hover:opacity-100" icon="solar:play-circle-linear" width="18"></iconify-icon>
<span className="relative z-10">Watch Demo</span>
</button>
</div>

</div>
</main>

<section className="z-10 sm:px-6 lg:px-8 pr-4 pb-32 pl-4 relative">
<div className="max-w-6xl mr-auto ml-auto">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl blur-[100px] rounded-full -z-10 bg-sky-900/10">
</div>
<div className="glass-panel overflow-hidden bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-blue-500/10 via-blue-500/0 to-blue-500/10 rounded-2xl backdrop-blur-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),0_0_60px_-15px_rgba(56,189,248,0.3)]" style={{position: 'relative', -BorderGradient: 'linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', -BorderRadiusBefore: '16px'}}>

<div className="absolute inset-0 z-20 pointer-events-none rounded-2xl overflow-hidden" style={{mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude', WebkitMaskComposite: 'xor', padding: '1px'}}>
<div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_340deg,#38bdf8_360deg)] opacity-100">
</div>
</div>

<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-2">
<div className="flex gap-1.5 mr-4">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div 20="" 50"="" bg-green-500="" border="" border-green-500="" className="w-2.5 h-2.5 rounded-full bg-div class=" h-2.5="" rounded-full="" w-2.5=""></div>
</div>
<div className="flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-white/60">
<iconify-icon icon="solar:lock-keyhole-linear" width="10"></iconify-icon>
            sora-core/app.tsx
          </div>
</div>
<div className="flex items-center gap-3">
<span className="flex items-center gap-1 text-[10px] text-green-400 font-mono">
<span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
          Live Connected
          </span>
<div className="h-4 w-[1px] bg-white/10"></div>
<iconify-icon className="text-white/40 hover:text-white cursor-pointer transition-colors" icon="solar:play-linear" width="14"></iconify-icon>
<iconify-icon className="text-white/40 hover:text-white cursor-pointer transition-colors" icon="solar:settings-linear" width="14"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">

<div className="hidden lg:block lg:col-span-3 text-xs font-mono bg-black/20 border-white/5 border-r pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center gap-2 text-white/40 mb-4 hover:text-white transition-colors cursor-pointer">
<iconify-icon icon="solar:folder-with-files-linear"></iconify-icon>
<span>src</span>
</div>
<div className="pl-4 space-y-3">
<div className="flex items-center gap-2 text-white/40 hover:text-white transition-colors cursor-pointer">
<iconify-icon icon="solar:folder-linear"></iconify-icon>
<span className="">components</span>
</div>
<div className="pl-4 space-y-2">
<div className="flex items-center gap-2 text-sky-400 bg-sky-500/10 -mx-2 px-2 py-1 rounded border border-sky-500/20 cursor-pointer">
<iconify-icon icon="solar:code-file-linear"></iconify-icon>
<span className="">Hero.tsx</span>
</div>
<div className="flex items-center gap-2 text-white/40 hover:text-white transition-colors cursor-pointer">
<iconify-icon icon="solar:code-file-linear"></iconify-icon>
<span className="">Nav.tsx</span>
</div>
</div>
<div className="flex items-center gap-2 text-white/40 hover:text-white transition-colors cursor-pointer">
<iconify-icon className="" icon="solar:folder-linear"></iconify-icon>
<span className="">lib</span>
</div>
<div className="flex items-center gap-2 text-white/40 hover:text-white transition-colors cursor-pointer">
<iconify-icon icon="solar:document-text-linear"></iconify-icon>
<span>config.ts</span>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-9 sm:text-sm leading-7 overflow-hidden text-xs text-white/80 font-mono pt-6 pr-6 pb-6 pl-6 relative">

<div className="select-none text-white/20 text-right w-10 pr-3 absolute top-6 bottom-0 left-0">
            123456789101112131415
          </div>

<div className="pl-8 pt-10" id="typewriter-code">
<div className="text-neutral-500">
              // Initialize Sora Neural Core
            </div>
<div className="">
<span className="text-sky-400">import</span>
              {
              <span className="text-yellow-200">NeuralInterface</span>
              }
              <span className="text-sky-400">from</span>
<span className="text-green-300">'@sora/core'</span>
              ;
            </div>
<div className="">
<span className="text-sky-400">import</span>
              {
              <span className="text-yellow-200">QuantumState</span>
              }
              <span className="text-sky-400">from</span>
<span className="text-green-300">'@sora/state'</span>
              ;
            </div>
<div className="">
<span className="text-sky-400">export default function</span>
<span className="text-blue-300">SystemDeploy</span>
              () {
            </div>
<div className="pl-4">
<span className="text-sky-400">const</span>
              [status, setStatus] =
              <span className="text-blue-300">useQuantumState</span>
              (
              <span className="text-green-300">'idle'</span>
              );
            </div>
<div className="pl-4">
<span className="text-sky-400">const</span>
<span className="text-blue-300">initiateSequence</span>
              =
              <span className="text-sky-400">async</span>
              () =&gt; {
            </div>
<div className="pl-8">
<span className="text-sky-400">await</span>
<span className="text-blue-300">NeuralInterface</span>
              .
              <span className="text-blue-300">connect</span>
              ({
            </div>
<div className="pl-12">
              mode:
              <span className="text-green-300">'autonomous'</span>
              ,
            </div>
<div className="pl-12">
              latency:
              <span className="text-orange-300">0</span>
              ,
            </div>
<div className="pl-12">
              security:
              <span className="text-green-300">'max_grade'</span>
</div>
<div className="pl-8">});</div>
<div className="pl-8">
<span className="text-neutral-400">
                    // Dynamic injection point
                  </span>
</div>
<div className="pl-8 flex items-center">
<span className="text-white" id="typing-text">setStatus('active');</span>
<span className="typing-cursor"></span>
</div>
<div className="pl-4">};</div>
<div className="">}</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="glass-panel p-8 rounded-3xl group relative overflow-hidden transition-all duration-500 hover:bg-white/[0.03] hover:border-white/20 hover:shadow-2xl">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-all duration-300 border border-white/10 shadow-inner">
<iconify-icon className="text-white/60 group-hover:text-white transition-colors" height="24" icon="lucide:zap" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">
      Instant Edge Deploy
    </h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">
      Push to git and propagate to 350+ global edge nodes in under 50ms.
    </p>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-[8px] text-neutral-500 font-mono">JP</div>
<div className="w-6 h-6 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-[8px] text-neutral-500 font-mono">US</div>
<div className="w-6 h-6 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-[8px] text-neutral-500 font-mono">EU</div>
</div>
<span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
        Operational
      </span>
</div>
</div>

<div className="glass-panel p-8 rounded-3xl group relative overflow-hidden transition-all duration-500 hover:bg-white/[0.03] hover:border-white/20 hover:shadow-2xl">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-0 group-hover:opacity-5 transition-opacity"></div>
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-all duration-300 border border-white/10 shadow-inner">
<iconify-icon className="text-white/60 group-hover:text-white transition-colors" height="24" icon="lucide:shield-check" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">
      Quantum Security
    </h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">
      Enterprise-grade protection with automated DDoS mitigation and zero-trust access policies.
    </p>
<div className="flex flex-col gap-2 pt-2">
<div className="flex items-center justify-between text-[10px] uppercase tracking-wider font-medium text-neutral-500">
<span>Encryption</span>
<span className="text-white/40">AES-256-GCM</span>
</div>
<div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
<div className="w-full h-full bg-white/20 rounded-full animate-[shimmer_3s_infinite] relative overflow-hidden">
<div className="absolute top-0 left-0 bottom-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
</div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-3xl group relative overflow-hidden transition-all duration-500 hover:bg-white/[0.03] hover:border-white/20 hover:shadow-2xl">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-all duration-300 border border-white/10 shadow-inner">
<iconify-icon className="text-white/60 group-hover:text-white transition-colors" height="24" icon="lucide:database" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">
      Serverless Data
    </h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-4">
      Spin up Redis and Postgres instances in seconds that scale automatically with traffic.
    </p>
<div className="mt-auto pt-4 flex gap-1 items-end h-8 opacity-60 group-hover:opacity-100 transition-opacity">
<div className="w-1.5 h-[40%] bg-white/10 rounded-sm group-hover:h-[60%] transition-all duration-500"></div>
<div className="w-1.5 h-[60%] bg-white/20 rounded-sm group-hover:h-[80%] transition-all duration-500 delay-75"></div>
<div className="w-1.5 h-[30%] bg-white/10 rounded-sm group-hover:h-[50%] transition-all duration-500 delay-100"></div>
<div className="w-1.5 h-[80%] bg-white/30 rounded-sm group-hover:h-[90%] transition-all duration-500 delay-150"></div>
<div className="w-1.5 h-[50%] bg-white/20 rounded-sm group-hover:h-[70%] transition-all duration-500 delay-200"></div>
<div className="w-1.5 h-[90%] bg-white rounded-sm shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
</div>
</div>

<div className="md:col-span-2 glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-white/20 transition-all duration-500">
<div className="relative z-10 flex flex-col sm:flex-row h-full justify-between sm:items-center gap-8">
<div className="max-w-md">
<div className="flex items-center gap-3 mb-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] uppercase font-semibold tracking-wider text-white/80 bg-white/5 border border-white/10">
<iconify-icon icon="lucide:sparkles" width="10"></iconify-icon>
            AI V2.0
          </span>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-3">
          Neural Copilot
        </h3>
<p className="text-neutral-400 leading-relaxed mb-6">
          Let Sora analyze your codebase to suggest optimizations, generate test suites, and write documentation automatically.
        </p>
<div className="flex items-center gap-3">
<button className="group/btn flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black text-xs font-medium hover:bg-neutral-200 transition-colors">
            Start Analysis
            <iconify-icon className="group-hover/btn:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="12"></iconify-icon>
</button>
<button className="flex items-center gap-2 px-4 py-2 rounded-lg text-white/50 text-xs font-medium hover:text-white hover:bg-white/5 transition-colors">
            View Docs
          </button>
</div>
</div>

<div className="relative w-full max-w-[280px] hidden sm:block perspective-midrange group-hover:scale-[1.02] transition-transform duration-500">
<div className="absolute -inset-1 bg-gradient-to-r from-white/5 to-white/10 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="relative rounded-xl bg-[#0B0B0B] border border-white/10 p-4 shadow-2xl rotate-y-10 -rotate-x-10 group-hover:rotate-y-0 group-hover:rotate-x-0 transition-transform duration-700 ease-out origin-center">

<div className="flex items-center gap-1.5 mb-3 border-b border-white/5 pb-3 opacity-50">
<div className="w-2 h-2 rounded-full bg-white/30"></div>
<div className="w-2 h-2 rounded-full bg-white/30"></div>
<div className="w-2 h-2 rounded-full bg-white/30"></div>
</div>

<div className="space-y-2 font-mono text-[10px]">
<div className="flex gap-2">
-white/50"&gt;async <span className="text-white/70">function</span> <span className="text-white">optimize</span>() {
            </div>
<div className="flex gap-2">
<span className="text-white/20 select-none">2</span>
<span className="pl-2 text-white/30">// Analyzing...</span>
</div>
<div className="flex gap-2 relative">
<span className="text-white/20 select-none">3</span>
<span className="pl-2 text-white typing-cursor">await copilot.fix()</span>

<div className="absolute left-8 top-5 z-20 whitespace-nowrap bg-[#1a1a1a] border border-white/20 text-white px-2 py-1 rounded text-[9px] flex items-center gap-1.5 shadow-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
<iconify-icon icon="lucide:check-circle-2" width="10"></iconify-icon>
                Performance +40%
              </div>
</div>
<div className="flex gap-2">
<span className="text-white/20 select-none">4</span>
<span className="text-white">}</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group hover:border-white/20 transition-all duration-500">
<div className="flex items-center justify-between mb-2 relative z-10">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Uptime SLA</span>
<div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-[9px] font-bold text-white/80">LIVE</span>
</div>
</div>
<div className="relative z-10 my-4 h-16 w-full flex items-end gap-[2px] opacity-60 group-hover:opacity-100 transition-opacity">

<div className="w-1 bg-white/10 h-[60%] rounded-t-sm"></div>
<div className="w-1 bg-white/20 h-[80%] rounded-t-sm"></div>
<div className="w-1 bg-white/30 h-[40%] rounded-t-sm"></div>
<div className="w-1 bg-white/10 h-[70%] rounded-t-sm"></div>
<div className="w-1 bg-white/40 h-[90%] rounded-t-sm"></div>
<div className="w-1 bg-white/50 h-[100%] rounded-t-sm"></div>
<div className="w-1 bg-white/20 h-[50%] rounded-t-sm"></div>
<div className="w-1 bg-white/30 h-[75%] rounded-t-sm"></div>
<div className="w-1 bg-white/10 h-[65%] rounded-t-sm"></div>
<div className="w-1 bg-white/40 h-[85%] rounded-t-sm"></div>
<div className="w-1 bg-white/50 h-[95%] rounded-t-sm"></div>
<div className="w-1 bg-white/20 h-[55%] rounded-t-sm"></div>
<div className="w-1 bg-white/60 h-[100%] rounded-t-sm"></div>
<div className="w-1 bg-white/30 h-[80%] rounded-t-sm"></div>
<div className="w-1 bg-white/10 h-[60%] rounded-t-sm"></div>
<div className="w-1 bg-white/40 h-[90%] rounded-t-sm"></div>
<div className="w-1 bg-white/70 h-[100%] rounded-t-sm"></div>
<div className="w-1 bg-white h-[100%] rounded-t-sm shadow-[0_0_8px_rgba(255,255,255,0.3)]"></div>
</div>
<h3 className="text-4xl font-medium tracking-tight text-white mb-1 counter relative z-10" data-target="99.99">
      99.99<span className="text-lg text-white/30">%</span>
</h3>
<p className="text-xs text-neutral-500 relative z-10">Last 30 days performance</p>
</div>
</div>
</div>
</section>
<section className="relative z-10 pt-24 pb-24">
<div className="group fade-in-up max-w-5xl mx-auto px-6 relative">

<div className="absolute -top-6 -right-8 z-30 hidden lg:block transition-transform duration-700 ease-out hover:-translate-y-2">
<div className="flex items-center gap-4 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 ring-1 ring-white/5">
<div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20">
<svg className="text-green-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black animate-pulse">
</div>
</div>
<div>
<div className="text-sm font-medium text-white leading-none mb-1.5">Production Ready</div>
<div className="flex items-center gap-2">
<span className="text-xs text-white/40 font-mono">Build #2940</span>
<span className="w-1 h-1 rounded-full bg-white/20"></span>
<span className="text-xs text-green-400 font-mono">14ms</span>
</div>
</div>
</div>
</div>

<div className="absolute top-20 -left-12 z-30 hidden lg:block transition-transform duration-700 ease-out hover:translate-x-2">
<div className="shadow-black/50 bg-black/60 w-48 border-white/10 border ring-white/5 ring-1 rounded-2xl p-5 shadow-2xl backdrop-blur-xl">
<style>
          @keyframes bar1 {

            0%,
            100% {
              height: 40%
            }

            50% {
              height: 70%
            }
          }

          @keyframes bar2 {

            0%,
            100% {
              height: 60%
            }

            50% {
              height: 30%
            }
          }

          @keyframes bar3 {

            0%,
            100% {
              height: 30%
            }

            50% {
              height: 60%
            }
          }

          @keyframes bar4 {

            0%,
            100% {
              height: 80%
            }

            50% {
              height: 40%
            }
          }

          @keyframes bar5 {

            0%,
            100% {
              height: 100%
            }

            50% {
              height: 60%
            }
          }

          @keyframes bar6 {

            0%,
            100% {
              height: 50%
            }

            50% {
              height: 80%
            }
          }

          @keyframes bar7 {

            0%,
            100% {
              height: 30%
            }

            50% {
              height: 50%
            }
          }
        </style>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<svg className="text-sky-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20"></path>
<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
<span className="text-[10px] font-medium text-white/60 tracking-wider uppercase">Network</span>
</div>
<div className="flex items-center gap-2">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
</span>
<span className="text-[10px] font-mono text-green-400">LIVE</span>
</div>
</div>
<div className="flex items-end justify-between gap-1 h-10 mb-3">
<div className="w-1.5 bg-white/10 rounded-full" style={{animation: 'bar1 1.2s ease-in-out infinite'}}></div>
<div className="w-1.5 bg-white/10 rounded-full" style={{animation: 'bar2 1.5s ease-in-out infinite'}}></div>
<div className="w-1.5 bg-white/20 rounded-full" style={{animation: 'bar3 1.1s ease-in-out infinite'}}></div>
<div className="w-1.5 bg-sky-500/50 rounded-full" style={{animation: 'bar4 1.3s ease-in-out infinite'}}></div>
<div className="w-1.5 bg-sky-500 rounded-full shadow-[0_0_10px_rgba(14,165,233,0.5)]" style={{animation: 'bar5 1.4s ease-in-out infinite'}}></div>
<div className="w-1.5 bg-white/10 rounded-full" style={{animation: 'bar6 1.6s ease-in-out infinite'}}></div>
<div className="w-1.5 bg-white/5 rounded-full" style={{animation: 'bar7 1.8s ease-in-out infinite'}}></div>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-white/40">Throughput</span>
<span className="text-white font-mono">940/s</span>
</div>
</div>
</div>

<div className="relative z-20 group/codebox">

<div className="pointer-events-none absolute inset-0 translate-x-6 -translate-y-6 rotate-[1.5deg] z-0 opacity-10 w-[95%] ml-auto rounded-2xl bg-[#0a0a0a] border border-white/5 backdrop-blur-sm transition-all duration-700 ease-out origin-top-right group-hover/codebox:opacity-30 group-hover/codebox:translate-x-10 group-hover/codebox:-translate-y-10 group-hover/codebox:rotate-2">
<div className="w-full h-11 border-b border-white/5 bg-white/[0.02] rounded-t-2xl"></div>
</div>

<div className="pointer-events-none absolute inset-0 translate-x-3 -translate-y-3 rotate-[0.75deg] z-10 opacity-20 w-[98%] ml-auto rounded-2xl bg-[#0c0c0c] border border-white/10 backdrop-blur-sm transition-all duration-500 ease-out origin-top-right group-hover/codebox:opacity-60 group-hover/codebox:translate-x-5 group-hover/codebox:-translate-y-5 group-hover/codebox:rotate-1">
<div className="w-full h-11 border-b border-white/5 bg-white/[0.02] rounded-t-2xl"></div>
</div>

<div className="relative z-20 rounded-2xl bg-[#0c0c0c] border border-white/10 overflow-hidden shadow-2xl transition-transform duration-500 group-hover/codebox:scale-[1.005]">
<div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>
<div className="text-[10px] font-mono text-white/40">zsh — 80x24</div>
<div className="w-4"></div>
</div>
<div className="p-6 font-mono text-sm">
<style>
            @keyframes terminal-reveal {
              0% {
                opacity: 0;
                transform: translateY(8px)
              }

              100% {
                opacity: 1;
                transform: translateY(0)
              }
            }

            .term-line {
              opacity: 0;
              animation: terminal-reveal 0.4s ease-out forwards;
            }
          </style>
<div className="mb-4 term-line" style={{animationDelay: '0.2s'}}>
<span className="text-green-400">➜</span>
<span className="text-cyan-300">~</span>
<span className="text-white">sora init my-next-app</span>
</div>
<div className="mb-4 text-white/60 term-line" style={{animationDelay: '0.8s'}}>
<div className="mb-1">Initializing project structure...</div>
<div className="mb-1">Detected framework: Next.js 14</div>
<div className="">Installing dependencies... <span className="text-green-400 ml-2">Done</span></div>
</div>
<div className="mb-4 term-line" style={{animationDelay: '2.2s'}}>
<span className="text-green-400">➜</span>
<span className="text-cyan-300">~/my-next-app</span>
<span className="text-white">sora deploy --prod</span>
</div>
<div className="mb-4 text-white/60 term-line" style={{animationDelay: '3s'}}>
<div className="mb-1">Building optimized production bundle...</div>
<div className="mb-1 flex items-center gap-2">
<span className="text-yellow-400">⚠</span>
              Optimizing images (42 assets)
            </div>
<div className="mb-1">Encrypting environment variables...</div>
<div>Uploading to Edge Network (12 regions)...</div>
</div>
<div className="mb-4 text-white term-line" style={{animationDelay: '4.8s'}}>
<span className="text-green-400 mr-2">✔</span>
            Deployment complete!
            <span className="text-sky-400 underline decoration-sky-400/30 ml-2">https://my-next-app.sora.app</span>
</div>
<div className="flex items-center term-line" style={{animationDelay: '5.5s'}}>
<span className="text-green-400 mr-2">➜</span>
<span className="text-cyan-300 mr-2">~/my-next-app</span>
<span className="w-2 h-4 bg-white/50 animate-pulse"></span>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center relative z-10">
<h2 className="text-3xl font-medium tracking-tight mb-4">Command the Cloud</h2>
<p className="text-white/50">Full power from your terminal. CI/CD included.</p>
</div>
</div>
</section>
<section className="py-24 border-t border-white/5 bg-neutral-950 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<span className="text-sky-500 font-mono text-xs tracking-widest uppercase mb-2 block">
              Incoming Transmissions
            </span>
<h2 className="text-3xl font-medium text-white">Developer Protocols</h2>
</div>
<button className="text-xs font-mono text-white/60 border border-white/10 px-4 py-2 rounded hover:bg-white/5 transition-colors">
            VIEW_ALL_LOGS
          </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white/[0.02] border border-white/5 p-6 rounded-none relative group hover:border-sky-500/30 transition-colors">
<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-sky-500 transition-colors"></div>
<div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-sky-500 transition-colors"></div>
<div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-sky-500 transition-colors"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-sky-500 transition-colors"></div>
<div className="flex items-center gap-3 mb-4">
<img alt="Dev" className="w-8 h-8 rounded-full grayscale opacity-70 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b202409f-816e-4451-8ac9-bd0b04439d1b_320w.webp"/>
<div className="font-mono text-xs text-white/40">
                ID:
                <span className="text-white">DEV_294</span>
</div>
</div>
<p className="text-sm text-white/70 mb-4 leading-relaxed">
              "Sora's autonomous scaling handles our spikes without manual
              intervention. It's like having a dedicated DevOps team in the
              code."
            </p>
<div className="flex gap-2">
<span className="text-[10px] bg-white/5 px-2 py-1 text-white/30 rounded">
                CTO
              </span>
<span className="text-[10px] bg-white/5 px-2 py-1 text-white/30 rounded">
                FINTECH
              </span>
</div>
</div>
<div className="bg-white/[0.02] border border-white/5 p-6 rounded-none relative group hover:border-sky-500/30 transition-colors">
<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-sky-500 transition-colors"></div>
<div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-sky-500 transition-colors"></div>
<div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-sky-500 transition-colors"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-sky-500 transition-colors"></div>
<div className="flex items-center gap-3 mb-4">
<img alt="Dev" className="w-8 h-8 rounded-full grayscale opacity-70 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a9f2a6f7-f473-484f-9db4-504cae45afd1_320w.webp"/>
<div className="font-mono text-xs text-white/40">
                ID:
                <span className="text-white">ENG_882</span>
</div>
</div>
<p className="text-sm text-white/70 mb-4 leading-relaxed">
              "The neural interface prediction model reduced our build times by
              80%. I can't imagine going back to standard CI tools."
            </p>
<div className="flex gap-2">
<span className="text-[10px] bg-white/5 px-2 py-1 text-white/30 rounded">
                LEAD
              </span>
<span className="text-[10px] bg-white/5 px-2 py-1 text-white/30 rounded">
                SAAS
              </span>
</div>
</div>
<div className="bg-white/[0.02] border border-white/5 p-6 rounded-none relative group hover:border-sky-500/30 transition-colors">
<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-sky-500 transition-colors"></div>
<div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-sky-500 transition-colors"></div>
<div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-sky-500 transition-colors"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-sky-500 transition-colors"></div>
<div className="flex items-center gap-3 mb-4">
<img alt="Dev" className="w-8 h-8 rounded-full grayscale opacity-70 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca2dff12-04ff-4713-9404-e3cb60f16c8a_320w.jpg"/>
<div className="font-mono text-xs text-white/40">
                ID:
                <span className="text-white">SYS_001</span>
</div>
</div>
<p className="text-sm text-white/70 mb-4 leading-relaxed">
              "Latency dropped to near-zero. The edge propagation is instant.
              Security is top-tier without configuration headaches."
            </p>
<div className="flex gap-2">
<span className="text-[10px] bg-white/5 px-2 py-1 text-white/30 rounded">
                ARCHITECT
              </span>
<span className="text-[10px] bg-white/5 px-2 py-1 text-white/30 rounded">
                ECOMM
              </span>
</div>
</div>
</div>
</div>
</section>
<section className="py-32 relative z-10 border-t border-white/5 overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="mb-20 max-w-2xl">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Neural Architecture
          </h2>
<p className="text-lg text-white/50 font-light leading-relaxed">
            Our proprietary distributed state machine synchronizes data across
            the globe in real-time. Built on a mesh of quantum-resistant nodes.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="relative h-[450px] w-full bg-[#0A0A0A] rounded-3xl border border-white/5 overflow-hidden group">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
<div className="relative flex items-center justify-center w-32 h-32">

<div className="absolute inset-0 rounded-full bg-white/5 animate-ping duration-[3s]"></div>
<div className="absolute inset-0 rounded-full bg-white/5 blur-2xl"></div>

<div className="relative w-24 h-24 bg-[#0A0A0A] rounded-full border border-white/10 flex items-center justify-center shadow-2xl z-10 backdrop-blur-xl">
<iconify-icon className="text-white text-3xl" icon="solar:server-square-cloud-linear"></iconify-icon>
</div>

<div className="absolute inset-0 -m-4 border border-white/5 rounded-full animate-[spin_12s_linear_infinite]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white]"></div>
</div>
<div className="absolute inset-0 -m-12 border border-dashed border-white/5 rounded-full animate-[spin_24s_linear_infinite_reverse]"></div>
<div className="absolute inset-0 -m-20 border border-white/5 rounded-full opacity-30 animate-[spin_30s_linear_infinite]">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/50 rounded-full"></div>
</div>
</div>
</div>


<div className="absolute top-[15%] left-[15%] z-20 animate-[float_6s_ease-in-out_infinite]">
<div className="w-12 h-12 bg-[#0A0A0A] rounded-xl border border-white/10 flex items-center justify-center shadow-lg backdrop-blur-md group/icon hover:border-white/30 transition-colors">
<iconify-icon className="text-white/40 group-hover/icon:text-white transition-colors" icon="solar:database-linear"></iconify-icon>
</div>
</div>

<div className="absolute bottom-[20%] right-[15%] z-20 animate-[float_8s_ease-in-out_infinite_1s]">
<div className="w-12 h-12 bg-[#0A0A0A] rounded-xl border border-white/10 flex items-center justify-center shadow-lg backdrop-blur-md group/icon hover:border-white/30 transition-colors">
<iconify-icon className="text-white/40 group-hover/icon:text-white transition-colors" icon="solar:shield-check-linear"></iconify-icon>
</div>
</div>

<div className="absolute top-[25%] right-[10%] z-20 animate-[float_7s_ease-in-out_infinite_2s]">
<div className="w-12 h-12 bg-[#0A0A0A] rounded-xl border border-white/10 flex items-center justify-center shadow-lg backdrop-blur-md group/icon hover:border-white/30 transition-colors">
<iconify-icon className="text-white/40 group-hover/icon:text-white transition-colors" icon="solar:code-circle-linear"></iconify-icon>
</div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none">
<defs>
<lineargradient id="lineGrad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="rgba(255,255,255,0.02)"></stop>
<stop offset="50%" stop-color="rgba(255,255,255,0.15)"></stop>
<stop offset="100%" stop-color="rgba(255,255,255,0.02)"></stop>
</lineargradient>
</defs>
<line className="opacity-50" stroke="url(#lineGrad)" strokeWidth="1" x1="50%" x2="18%" y1="50%" y2="18%"></line>
<line className="opacity-50" stroke="url(#lineGrad)" strokeWidth="1" x1="50%" x2="82%" y1="50%" y2="77%"></line>
<line className="opacity-50" stroke="url(#lineGrad)" strokeWidth="1" x1="50%" x2="87%" y1="50%" y2="28%"></line>
</svg>

<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 blur-[80px] pointer-events-none"></div>
<style>
              @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
              }
            </style>
</div>
<div className="space-y-8">
<div className="flex gap-5 group">
<div className="flex border-white/[0.08] shrink-0 group-hover:bg-white/[0.08] group-hover:border-white/20 transition-all duration-300 bg-neutral-900 w-12 h-12 border rounded-full items-center justify-center">
<span className="font-mono text-sm text-neutral-500 group-hover:text-white transition-colors">01</span>
</div>
<div className="">
<h3 className="text-xl font-medium text-white mb-2 group-hover:text-sky-300 transition-colors">
                  Edge Computation
                </h3>
<p className="text-white/50 text-sm leading-relaxed">
                  Logic executes at the edge, closest to the user.
                  <span className="text-white/80 font-mono text-xs border border-white/10 px-1.5 py-0.5 rounded bg-white/5">5ms</span>
                  max latency guarantee.
                </p>
</div>
</div>
<div className="flex gap-5 group">
<div className="flex border-white/[0.08] shrink-0 group-hover:bg-white/[0.08] group-hover:border-white/20 transition-all duration-300 bg-neutral-900 w-12 h-12 border rounded-full items-center justify-center">
<span className="font-mono text-sm text-neutral-500 group-hover:text-white transition-colors">02</span>
</div>
<div className="">
<h3 className="text-xl font-medium text-white mb-2 group-hover:text-purple-300 transition-colors">
                  Atomic Replication
                </h3>
<p className="text-white/50 text-sm leading-relaxed">
                  Data state is replicated atomically across regions. Conflict
                  resolution handled by AI arbiters.
                </p>
</div>
</div>
<div className="flex gap-5 group">
<div className="flex border-white/[0.08] shrink-0 group-hover:bg-white/[0.08] group-hover:border-white/20 transition-all duration-300 bg-neutral-900 w-12 h-12 border rounded-full items-center justify-center">
<span className="font-mono text-sm text-neutral-500 group-hover:text-white transition-colors">03</span>
</div>
<div className="">
<h3 className="text-xl font-medium text-white mb-2 group-hover:text-green-300 transition-colors">
                  Self-Healing Mesh
                </h3>
<p className="text-white/50 text-sm leading-relaxed">
                  Nodes automatically reroute traffic during outages. Zero
                  downtime architecture.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y z-10 border-white/5 pt-20 pb-20 relative bg-white/[0.01]">
<style>
        @keyframes subtle-glow {
            0%, 100% { opacity: 0.2; filter: grayscale(100%); transform: scale(0.95); }
            50% { opacity: 1; filter: grayscale(0%); transform: scale(1.05); }
        }
      </style>
<div className="max-w-7xl mx-auto px-6 text-center mb-16">
<h2 className="text-3xl font-normal tracking-tight mb-4 text-white">
          Integrates with everything
        </h2>
<p className="text-white/50 font-light">
          Connect Sora to your existing workflow in seconds.
        </p>
</div>
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-wrap justify-center gap-12 md:gap-16 items-center">

<div className="relative transition-all duration-500" style={{animation: 'subtle-glow 4s ease-in-out infinite', animationDelay: '0s'}}>
<iconify-icon icon="logos:github-icon" width="32"></iconify-icon>
</div>

<div className="relative transition-all duration-500" style={{animation: 'subtle-glow 4s ease-in-out infinite', animationDelay: '2.1s'}}>
<iconify-icon icon="logos:slack-icon" width="32"></iconify-icon>
</div>

<div className="relative transition-all duration-500" style={{animation: 'subtle-glow 4s ease-in-out infinite', animationDelay: '1.2s'}}>
<iconify-icon icon="logos:figma" width="32"></iconify-icon>
</div>

<div className="relative transition-all duration-500" style={{animation: 'subtle-glow 4s ease-in-out infinite', animationDelay: '3.5s'}}>
<iconify-icon icon="logos:linear-icon" width="32"></iconify-icon>
</div>

<div className="relative transition-all duration-500" style={{animation: 'subtle-glow 4s ease-in-out infinite', animationDelay: '0.5s'}}>
<iconify-icon icon="logos:notion-icon" width="32"></iconify-icon>
</div>

<div className="relative transition-all duration-500" style={{animation: 'subtle-glow 4s ease-in-out infinite', animationDelay: '2.8s'}}>
<iconify-icon icon="logos:stripe" width="32"></iconify-icon>
</div>

<div className="relative transition-all duration-500" style={{animation: 'subtle-glow 4s ease-in-out infinite', animationDelay: '1.5s'}}>
<iconify-icon icon="logos:vercel-icon" width="32"></iconify-icon>
</div>

<div className="relative transition-all duration-500" style={{animation: 'subtle-glow 4s ease-in-out infinite', animationDelay: '3.0s'}}>
<iconify-icon icon="logos:react" width="32"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10">

<div className="bg-gradient-to-b from-black to-sky-950/20 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent"></div>
<div className="max-w-4xl mx-auto text-center relative">
<div className="glow-point top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !w-[500px] !h-[500px] opacity-20"></div>
<h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-8">
          Ready to
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
            ship
          </span>
          ?
        </h2>
<p className="text-xl text-white/50 mb-10 font-light">
      Join 200,000+ developers shipping faster with Sora.
    </p>
<div className="glass-panel p-1 rounded-full max-w-md mx-auto flex items-center relative">
<input className="w-full bg-transparent border-none outline-none text-white px-6 py-3 text-sm placeholder:text-white/30" placeholder="Enter your email address" type="email"/>
<button className="absolute right-1 top-1 bottom-1 px-6 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors">
            Get Access
          </button>
</div>
<p className="mt-4 text-xs text-white/30">
      14-day free trial • No credit card required
    </p>
</div>
</section>

<footer className="overflow-hidden bg-black z-10 pt-20 pb-12 relative">

<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent blur-[2px]"></div>
<div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sky-900/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

<div className="lg:col-span-4">
<div className="flex items-center gap-3 mb-6">
<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 shadow-[0_0_15px_-3px_rgba(255,255,255,0.05)]">
<iconify-icon className="text-white" icon="lucide:infinity" width="18"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-white">SoraStudio</span>
</div>
<p className="text-white/40 mb-8 max-w-sm leading-relaxed text-sm">
    Designing the future of digital interaction through precision
    engineering and human-centric design.
  </p>

<div className="w-full max-w-xs relative">
<div className="flex hover:bg-white/[0.05] focus-within:bg-white/[0.05] focus-within:border-white/20 transition-all border-white/10 border rounded-lg p-1 relative items-center">
<input className="border-none outline-none placeholder:text-white/20 text-sm text-white bg-transparent w-full px-3 py-2" placeholder="Subscribe to changelog" type="email"/>
<button className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors flex-shrink-0">
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:pl-12">
<div className="flex flex-col gap-4">
<h4 className="font-medium text-white text-sm">Product</h4>
<ul className="space-y-3 text-sm text-white/40">
<li className="hover:text-white transition-colors cursor-pointer hover:translate-x-0.5 transform duration-200">Features</li>
<li className="hover:text-white transition-colors cursor-pointer hover:translate-x-0.5 transform duration-200">Integrations</li>
<li className="hover:text-white transition-colors cursor-pointer hover:translate-x-0.5 transform duration-200">Pricing</li>
<li className="hover:text-white transition-colors cursor-pointer hover:translate-x-0.5 transform duration-200 flex items-center gap-2">
              Changelog 
              <span className="text-[10px] font-medium text-sky-400 bg-sky-500/10 border-sky-500/20 border rounded-full pt-0.5 pr-1.5 pb-0.5 pl-1.5 flex-none">New</span>
</li>
</ul>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-medium text-white text-sm">Resources</h4>
<ul className="space-y-3 text-sm text-white/40">
<li className="hover:text-white transition-colors cursor-pointer hover:translate-x-0.5 transform duration-200">Documentation</li>
<li className="hover:text-white transition-colors cursor-pointer hover:translate-x-0.5 transform duration-200">API Reference</li>
<li className="hover:text-white transition-colors cursor-pointer hover:translate-x-0.5 transform duration-200">Community</li>
<li className="hover:text-white transition-colors cursor-pointer hover:translate-x-0.5 transform duration-200">Help Center</li>
</ul>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-medium text-white text-sm">Company</h4>
<ul className="space-y-3 text-sm text-white/40">
<li className="hover:text-white transition-colors cursor-pointer hover:translate-x-0.5 transform duration-200">About</li>
<li className="hover:text-white transition-colors cursor-pointer hover:translate-x-0.5 transform duration-200">Blog</li>
<li className="hover:text-white transition-colors cursor-pointer hover:translate-x-0.5 transform duration-200">Careers</li>
<li className="hover:text-white transition-colors cursor-pointer hover:translate-x-0.5 transform duration-200">Legal</li>
</ul>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6">
<div className="flex flex-col sm:flex-row items-center gap-6 text-xs text-white/30">
<span className="">© 2024 SoraStudio Inc. All rights reserved.</span>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>

<div className="flex items-center gap-4">
<a className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/5 text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300" href="#">
<iconify-icon icon="lucide:twitter" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/5 text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300" href="#">
<iconify-icon icon="lucide:github" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/5 text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300" href="#">
<iconify-icon icon="lucide:linkedin" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/5 text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300" href="#">
<iconify-icon icon="simple-icons:discord" width="16"></iconify-icon>
</a>

<div className="w-px h-4 bg-white/10 mx-1"></div>
<button aria-label="Back to top" className="flex hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-white/40 bg-white/5 w-8 h-8 border-white/5 border rounded-lg items-center justify-center" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
<iconify-icon className="" height="16" icon="lucide:arrow-up" style={{color: 'rgb(255, 255, 255)'}} width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</footer>



    </>
  );
}
