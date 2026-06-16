import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
950: '#0a0a0a', // Deepest black
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
'spin-slow': 'spin 12s linear infinite',
'shimmer': 'shimmer 2s linear infinite',
'scroll': 'scroll 30s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
shimmer: {
'0%': { backgroundPosition: '200% 0' },
'100%': { backgroundPosition: '-200% 0' }
},
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' }
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tighter text-base flex items-center gap-2 group" href="#">
<div className="flex group-hover:border-white/30 transition-colors bg-gradient-to-tr from-white/20 to-transparent w-6 h-6 border-white/10 border rounded items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide w-[14px] h-[14px]" data-icon="lucide:hexagon" data-icon-replaced="true" data-width="14" height="14" role="img" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '14px', height: '14px'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
          COLYON
        </a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#vision">
            Vision
          </a>
<a className="hover:text-white transition-colors" href="#products">
            Products
          </a>
<a className="hover:text-white transition-colors" href="#technology">
            Technology
          </a>
<a className="hover:text-white transition-colors" href="#about">About</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium hover:text-white transition-colors" href="#login">
            Log in
          </a>
<a className="text-xs font-medium bg-white text-black px-3 py-1.5 rounded-full hover:bg-neutral-200 transition-colors" href="#join">
            Join Colony
          </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-white/5">
<div className="opacity-50 z-0 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="glow-point bg-blue-500 top-0 right-0 translate-x-1/2 -translate-y-1/2"></div>
<div className="glow-point bg-purple-500 bottom-0 left-0 -translate-x-1/2 translate-y-1/2"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

<div className="flex flex-col items-start text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-wider font-medium text-neutral-300 mb-8 animate-pulse-slow">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
            Operational Intelligence v2.0
          </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
            Build with
            <br/>
<span className="text-neutral-600">Autonomous AI</span>
</h1>
<p className="text-base md:text-lg text-neutral-400 max-w-lg mb-10 leading-relaxed font-light">
            Colyon orchestrates collaborative AI agents that reason, plan, and
            execute in complex environments. Secure the future of the digital
            economy with collective intelligence.
          </p>
<div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
<a className="group flex items-center justify-center gap-2 px-5 py-3 bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors text-sm font-medium" href="#check">
              Start Building
              <svg aria-hidden="true" className="iconify group-hover:translate-x-0.5 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="group flex items-center justify-center gap-2 px-5 py-3 bg-neutral-900 border border-white/10 text-white rounded-lg hover:bg-neutral-800 transition-colors text-sm font-medium" href="#wallet">
              Read Documentation
            </a>
</div>
<div className="mt-8 flex items-center gap-4 text-xs text-neutral-500 font-mono">
<span className="flex items-center gap-1.5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              SOC2 Compliant
            </span>
<span className="w-px h-3 bg-white/10"></span>
<span className="flex items-center gap-1.5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              99.9% Uptime
            </span>
</div>
</div>

<div className="relative h-[400px] w-full flex items-center justify-center">

<div className="relative w-32 h-32 z-20 animate-float">
<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-xl rounded-2xl border border-white/20 rotate-45 transform flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)]">
<svg aria-hidden="true" className="iconify text-white -rotate-45 opacity-80 iconify--lucide" data-icon="lucide:cpu" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg>
</div>

<div className="absolute inset-0 bg-white/5 blur-xl rounded-full"></div>
</div>

<div className="absolute inset-0 animate-spin-slow">
<div className="absolute top-10 left-1/2 -translate-x-1/2 w-12 h-12 bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center transform -rotate-0 shadow-lg z-10">
<svg aria-hidden="true" className="iconify text-white iconify--simple-icons" data-icon="simple-icons:vercel" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 1.608l12 20.784H0Z" fill="currentColor"></path></svg>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-12 h-12 bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center transform -rotate-0 shadow-lg z-10">
<svg aria-hidden="true" className="iconify text-purple-500 iconify--simple-icons" data-icon="simple-icons:make" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.38 3.498c-.27 0-.511.19-.566.465L9.85 18.986a.58.58 0 0 0 .453.678l4.095.826a.58.58 0 0 0 .682-.455l2.963-15.021a.58.58 0 0 0-.453-.678l-4.096-.826a.6.6 0 0 0-.113-.012zm-5.876.098a.58.58 0 0 0-.516.318L.062 17.697a.575.575 0 0 0 .256.774l3.733 1.877a.58.58 0 0 0 .775-.258l6.926-13.781a.577.577 0 0 0-.256-.776L7.762 3.658a.6.6 0 0 0-.258-.062m11.74.115a.576.576 0 0 0-.576.576v15.426c0 .318.258.578.576.578h4.178a.58.58 0 0 0 .578-.578V4.287a.58.58 0 0 0-.578-.576Z" fill="currentColor"></path></svg>
</div>
<div className="absolute top-1/2 left-10 -translate-y-1/2 w-12 h-12 bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center transform -rotate-0 shadow-lg z-10">
<svg aria-hidden="true" className="iconify text-white iconify--simple-icons" data-icon="simple-icons:github" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"></path></svg>
</div>
<div className="absolute top-1/2 right-10 -translate-y-1/2 w-12 h-12 bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center transform -rotate-0 shadow-lg z-10">
<svg aria-hidden="true" className="iconify text-rose-500 iconify--simple-icons" data-icon="simple-icons:n8n" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21.474 5.684a2.53 2.53 0 0 0-2.447 1.895H16.13a2.526 2.526 0 0 0-2.492 2.11l-.103.624a1.26 1.26 0 0 1-1.246 1.055h-1.001a2.527 2.527 0 0 0-4.893 0H4.973a2.527 2.527 0 1 0 0 1.264h1.422a2.527 2.527 0 0 0 4.894 0h1a1.26 1.26 0 0 1 1.247 1.055l.103.623a2.526 2.526 0 0 0 2.492 2.111h.37a2.527 2.527 0 1 0 0-1.263h-.37a1.26 1.26 0 0 1-1.246-1.056l-.103-.623A2.52 2.52 0 0 0 13.96 12a2.52 2.52 0 0 0 .82-1.48l.104-.622a1.26 1.26 0 0 1 1.246-1.056h2.896a2.527 2.527 0 1 0 2.447-3.158m0 1.263a1.263 1.263 0 0 1 1.263 1.263a1.263 1.263 0 0 1-1.263 1.264A1.263 1.263 0 0 1 20.21 8.21a1.263 1.263 0 0 1 1.264-1.263m-18.948 3.79A1.263 1.263 0 0 1 3.79 12a1.263 1.263 0 0 1-1.264 1.263A1.263 1.263 0 0 1 1.263 12a1.263 1.263 0 0 1 1.263-1.263m6.316 0A1.263 1.263 0 0 1 10.105 12a1.263 1.263 0 0 1-1.263 1.263A1.263 1.263 0 0 1 7.58 12a1.263 1.263 0 0 1 1.263-1.263m10.106 3.79a1.263 1.263 0 0 1 1.263 1.263a1.263 1.263 0 0 1-1.263 1.263a1.263 1.263 0 0 1-1.264-1.263a1.263 1.263 0 0 1 1.263-1.264" fill="currentColor"></path></svg>
</div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewbox="0 0 400 400">
<circle cx="200" cy="200" fill="none" r="140" stroke="white" stroke-dasharray="4 4" strokeWidth="1"></circle>
<circle cx="200" cy="200" fill="none" r="90" stroke="white" stroke-opacity="0.5" strokeWidth="1"></circle>
</svg>
</div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 mt-16">
<div className="border-t border-white/5 pt-8">
<p className="text-[10px] font-mono text-neutral-600 text-center mb-8 uppercase tracking-widest">
            Trusted by innovative teams
          </p>
<div className="relative flex overflow-x-hidden group">
<div className="flex gap-16 items-center animate-scroll whitespace-nowrap">
<svg aria-hidden="true" className="iconify text-neutral-700 hover:text-white transition-colors opacity-60 hover:opacity-100 iconify--simple-icons" data-icon="simple-icons:openai" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22.282 9.821a6 6 0 0 0-.516-4.91a6.05 6.05 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a6 6 0 0 0-3.998 2.9a6.05 6.05 0 0 0 .743 7.097a5.98 5.98 0 0 0 .51 4.911a6.05 6.05 0 0 0 6.515 2.9A6 6 0 0 0 13.26 24a6.06 6.06 0 0 0 5.772-4.206a6 6 0 0 0 3.997-2.9a6.06 6.06 0 0 0-.747-7.073M13.26 22.43a4.48 4.48 0 0 1-2.876-1.04l.141-.081l4.779-2.758a.8.8 0 0 0 .392-.681v-6.737l2.02 1.168a.07.07 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494M3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085l4.783 2.759a.77.77 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646M2.34 7.896a4.5 4.5 0 0 1 2.366-1.973V11.6a.77.77 0 0 0 .388.677l5.815 3.354l-2.02 1.168a.08.08 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.08.08 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667m2.01-3.023l-.141-.085l-4.774-2.782a.78.78 0 0 0-.785 0L9.409 9.23V6.897a.07.07 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.8.8 0 0 0-.393.681zm1.097-2.365l2.602-1.5l2.607 1.5v2.999l-2.597 1.5l-2.607-1.5Z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify text-neutral-700 hover:text-white transition-colors opacity-60 hover:opacity-100 iconify--simple-icons" data-icon="simple-icons:anthropic" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.304 3.541h-3.672l6.696 16.918H24Zm-10.608 0L0 20.459h3.744l1.37-3.553h7.005l1.369 3.553h3.744L10.536 3.541Zm-.371 10.223L8.616 7.82l2.291 5.945Z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify text-neutral-700 hover:text-white transition-colors opacity-60 hover:opacity-100 iconify--simple-icons" data-icon="simple-icons:github" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify text-neutral-700 hover:text-white transition-colors opacity-60 hover:opacity-100 iconify--simple-icons" data-icon="simple-icons:vercel" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 1.608l12 20.784H0Z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify text-neutral-700 hover:text-white transition-colors opacity-60 hover:opacity-100 iconify--simple-icons" data-icon="simple-icons:notion" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514c-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233l4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify text-neutral-700 hover:text-white transition-colors opacity-60 hover:opacity-100 iconify--simple-icons" data-icon="simple-icons:linear" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.886 4.18A11.98 11.98 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556q-.787.496-1.65.866L.951 7.277q.371-.863.866-1.65ZM.322 9.163l14.515 14.515q-1.066.26-2.195.322L0 11.358a12 12 0 0 1 .322-2.195m-.17 4.862l9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify text-neutral-700 hover:text-white transition-colors opacity-60 hover:opacity-100 iconify--simple-icons" data-icon="simple-icons:raycast" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6.004 15.492v2.504L0 11.992l1.258-1.249Zm2.504 2.504H6.004L12.008 24l1.253-1.253zm14.24-4.747L24 11.997L12.003 0L10.75 1.251L15.491 6h-2.865L9.317 2.692L8.065 3.944l2.06 2.06H8.691v9.31H18v-1.432l2.06 2.06l1.252-1.252L18 11.37V8.506ZM6.63 5.372L5.38 6.625l1.342 1.343l1.251-1.253Zm10.655 10.655l-1.247 1.251l1.342 1.343l1.253-1.251zM3.944 8.059L2.692 9.31l3.312 3.314v-2.506zm9.936 9.937h-2.504l3.314 3.312l1.25-1.252z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify text-neutral-700 hover:text-white transition-colors opacity-60 hover:opacity-100 iconify--simple-icons" data-icon="simple-icons:stripe" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409c0-.831.683-1.305 1.901-1.305c2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0C9.667 0 7.589.654 6.104 1.872C4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219c2.585.92 3.445 1.574 3.445 2.583c0 .98-.84 1.545-2.354 1.545c-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813c1.664-1.305 2.525-3.236 2.525-5.732c0-4.128-2.524-5.851-6.594-7.305z" fill="currentColor"></path></svg>

<svg aria-hidden="true" className="iconify text-neutral-700 hover:text-white transition-colors opacity-60 hover:opacity-100 iconify--simple-icons" data-icon="simple-icons:openai" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22.282 9.821a6 6 0 0 0-.516-4.91a6.05 6.05 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a6 6 0 0 0-3.998 2.9a6.05 6.05 0 0 0 .743 7.097a5.98 5.98 0 0 0 .51 4.911a6.05 6.05 0 0 0 6.515 2.9A6 6 0 0 0 13.26 24a6.06 6.06 0 0 0 5.772-4.206a6 6 0 0 0 3.997-2.9a6.06 6.06 0 0 0-.747-7.073M13.26 22.43a4.48 4.48 0 0 1-2.876-1.04l.141-.081l4.779-2.758a.8.8 0 0 0 .392-.681v-6.737l2.02 1.168a.07.07 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494M3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085l4.783 2.759a.77.77 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646M2.34 7.896a4.5 4.5 0 0 1 2.366-1.973V11.6a.77.77 0 0 0 .388.677l5.815 3.354l-2.02 1.168a.08.08 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.08.08 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667m2.01-3.023l-.141-.085l-4.774-2.782a.78.78 0 0 0-.785 0L9.409 9.23V6.897a.07.07 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.8.8 0 0 0-.393.681zm1.097-2.365l2.602-1.5l2.607 1.5v2.999l-2.597 1.5l-2.607-1.5Z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify text-neutral-700 hover:text-white transition-colors opacity-60 hover:opacity-100 iconify--simple-icons" data-icon="simple-icons:anthropic" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.304 3.541h-3.672l6.696 16.918H24Zm-10.608 0L0 20.459h3.744l1.37-3.553h7.005l1.369 3.553h3.744L10.536 3.541Zm-.371 10.223L8.616 7.82l2.291 5.945Z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify text-neutral-700 hover:text-white transition-colors opacity-60 hover:opacity-100 iconify--simple-icons" data-icon="simple-icons:github" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify text-neutral-700 hover:text-white transition-colors opacity-60 hover:opacity-100 iconify--simple-icons" data-icon="simple-icons:vercel" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 1.608l12 20.784H0Z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify text-neutral-700 hover:text-white transition-colors opacity-60 hover:opacity-100 iconify--simple-icons" data-icon="simple-icons:notion" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514c-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233l4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify text-neutral-700 hover:text-white transition-colors opacity-60 hover:opacity-100 iconify--simple-icons" data-icon="simple-icons:linear" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.886 4.18A11.98 11.98 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556q-.787.496-1.65.866L.951 7.277q.371-.863.866-1.65ZM.322 9.163l14.515 14.515q-1.066.26-2.195.322L0 11.358a12 12 0 0 1 .322-2.195m-.17 4.862l9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify text-neutral-700 hover:text-white transition-colors opacity-60 hover:opacity-100 iconify--simple-icons" data-icon="simple-icons:raycast" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6.004 15.492v2.504L0 11.992l1.258-1.249Zm2.504 2.504H6.004L12.008 24l1.253-1.253zm14.24-4.747L24 11.997L12.003 0L10.75 1.251L15.491 6h-2.865L9.317 2.692L8.065 3.944l2.06 2.06H8.691v9.31H18v-1.432l2.06 2.06l1.252-1.252L18 11.37V8.506ZM6.63 5.372L5.38 6.625l1.342 1.343l1.251-1.253Zm10.655 10.655l-1.247 1.251l1.342 1.343l1.253-1.251zM3.944 8.059L2.692 9.31l3.312 3.314v-2.506zm9.936 9.937h-2.504l3.314 3.312l1.25-1.252z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify text-neutral-700 hover:text-white transition-colors opacity-60 hover:opacity-100 iconify--simple-icons" data-icon="simple-icons:stripe" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409c0-.831.683-1.305 1.901-1.305c2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0C9.667 0 7.589.654 6.104 1.872C4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219c2.585.92 3.445 1.574 3.445 2.583c0 .98-.84 1.545-2.354 1.545c-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813c1.664-1.305 2.525-3.236 2.525-5.732c0-4.128-2.524-5.851-6.594-7.305z" fill="currentColor"></path></svg>
</div>
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none"></div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-neutral-950" id="vision">
<div className="max-w-7xl mx-auto px-6">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

<div className="md:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-b from-white/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-75 transition-opacity"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="">
<div className="flex items-center gap-2 mb-4">
<span className="w-2 h-2 rounded-full bg-white/40"></span>
<span className="text-xs uppercase tracking-widest text-neutral-500">
                    The Vision
                  </span>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4 max-w-lg">
                  Built for cooperation.
                  <br/>
<span className="text-neutral-600">Designed for autonomy.</span>
</h2>
<p className="text-neutral-400 text-sm max-w-sm leading-relaxed">
                  Inspired by biological colonies, we create systems where
                  specialized agents collaborate to solve problems no single
                  model can handle alone.
                </p>
</div>

<div className="mt-8 flex items-center gap-2">
<div className="h-1 w-12 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-white rounded-full"></div>
</div>
<span className="text-[10px] text-neutral-500 font-mono">
                  SYS_OPTIMIZED
                </span>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-2 glass-card rounded-3xl p-6 relative overflow-hidden group">
<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-40 group-hover:opacity-60 transition-opacity scale-90 group-hover:scale-95 transition-transform duration-700">
<div className="w-32 h-20 bg-neutral-800 border border-white/5 rounded-lg transform translate-y-4 scale-90"></div>
<div className="w-32 h-20 bg-neutral-800 border border-white/10 rounded-lg transform translate-y-2 scale-95"></div>
<div className="w-32 h-20 bg-neutral-900 border border-white/20 rounded-lg shadow-xl flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:bot" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg>
</div>
</div>
<div className="absolute bottom-6 left-6 z-20">
<svg aria-hidden="true" className="iconify text-white mb-3 iconify--lucide" data-icon="lucide:git-branch" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 3v12"></path><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></g></svg>
<h3 className="text-lg font-medium text-white mb-1">
                Adaptive Agents
              </h3>
<p className="text-xs text-neutral-400 leading-relaxed">
                Agents that evolve through interaction, refining capabilities
                over time without human intervention.
              </p>
</div>
</div>

<div className="md:col-span-1 glass-card rounded-3xl p-6 relative overflow-hidden group flex flex-col justify-between">
<div className="mb-4">
<div className="flex gap-1.5 mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
<span className="w-1.5 h-1.5 rounded-full bg-neutral-800"></span>
<span className="w-1.5 h-1.5 rounded-full bg-neutral-800"></span>
</div>
<h3 className="text-lg font-medium text-white mb-1">
                Collective Learning
              </h3>
<p className="text-xs text-neutral-400 leading-relaxed">
                Knowledge is shared instantly across the network.
              </p>
</div>

<div className="relative w-full h-16 mt-auto">
<div className="absolute top-1/2 left-0 w-full h-px bg-white/5"></div>
<div className="absolute top-1/2 left-1/4 w-2 h-2 bg-neutral-700 rounded-full -translate-y-1/2 border border-black"></div>
<div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full -translate-y-1/2 shadow-[0_0_10px_white]"></div>
<div className="absolute top-1/2 right-1/4 w-2 h-2 bg-neutral-700 rounded-full -translate-y-1/2 border border-black"></div>
</div>
</div>

<div className="md:col-span-1 glass-card rounded-3xl p-6 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-50"></div>
<div className="h-full flex flex-col">
<div className="flex items-center justify-between mb-6">
<svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:shield-check" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded border border-emerald-500/20 font-mono">
                  SECURE
                </span>
</div>
<div className="space-y-2 mb-6 opacity-60 font-mono text-[10px] text-neutral-400">
<div className="flex justify-between">
<span>&gt; verifying_intent...</span>
<span className="text-emerald-500">OK</span>
</div>
<div className="flex justify-between">
<span>&gt; checking_bounds...</span>
<span className="text-emerald-500">OK</span>
</div>
<div className="flex justify-between">
<span>&gt; audit_trail_log...</span>
<span className="text-emerald-500">SAVED</span>
</div>
</div>
<div className="mt-auto">
<h3 className="text-lg font-medium text-white mb-1">Secure Core</h3>
<p className="text-xs text-neutral-400">
                  Explainable, traceable decisions aligned with intent.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-neutral-950 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
            Evolution of Intelligence
          </h2>
<p className="text-neutral-400 text-sm leading-relaxed">
            Legacy systems rely on static rules. Colyon brings adaptive autonomy
            to the security layer.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="rounded-3xl border border-white/5 bg-neutral-900/20 p-8 relative overflow-hidden">
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20 text-red-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:history" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5m4-1v5l4 2"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-neutral-300">
                Traditional Security
              </h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-neutral-500">
<svg aria-hidden="true" className="iconify text-neutral-700 mt-0.5 iconify--lucide" data-icon="lucide:x" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>
                  Static, rule-based logic that fails against novel attacks
                </span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-500">
<svg aria-hidden="true" className="iconify text-neutral-700 mt-0.5 iconify--lucide" data-icon="lucide:x" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>
                  High latency manual reviews slowing down settlements
                </span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-500">
<svg aria-hidden="true" className="iconify text-neutral-700 mt-0.5 iconify--lucide" data-icon="lucide:x" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Siloed data architecture</span>
</li>
</ul>
</div>

<div className="rounded-3xl border border-white/10 bg-white/5 p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="flex items-center gap-3 mb-8 relative z-10">
<div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-white">Colyon Autonomy</h3>
</div>
<ul className="space-y-4 relative z-10">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg aria-hidden="true" className="iconify text-emerald-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>
                  Self-evolving neural agents that adapt to new threats
                </span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg aria-hidden="true" className="iconify text-emerald-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Real-time autonomous decision making (&lt;50ms)</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg aria-hidden="true" className="iconify text-emerald-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Swarm intelligence sharing across the network</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 relative overflow-hidden border-t border-white/5" id="products">
<div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-3">
              The Platform
            </h2>
<h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
              Proactive security.
              <br/>
              Powered by Monchain.
            </h3>
</div>
<p className="text-neutral-400 text-sm max-w-xs mb-1">
            Enterprise-grade protection for the Web3 economy, built on our
            proprietary autonomous architecture.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group relative rounded-3xl border border-white/10 bg-neutral-900/40 p-1 overflow-hidden hover:border-white/20 transition-all duration-300" id="check">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative bg-neutral-950/80 rounded-[20px] p-8 h-full flex flex-col">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:scan-search" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"></path><circle cx="12" cy="12" r="3"></circle><path d="m16 16l-1.9-1.9"></path></g></svg>
</div>
<h4 className="text-xl font-medium text-white mb-2">
                Monchain Check
              </h4>
<p className="text-sm text-neutral-400 mb-8 leading-relaxed">
                API-first fraud detection. Screen addresses, analyze transaction
                patterns, and get risk scores in milliseconds.
              </p>

<div className="mt-auto border border-white/5 rounded-lg bg-neutral-900/50 p-4">
<div className="flex items-center justify-between mb-3 text-[10px] text-neutral-500 font-mono uppercase">
<span>Input</span>
<span>Risk Score</span>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-300 font-mono">
                    0x71...9A2
                  </span>
<div className="flex items-center gap-2">
<div className="w-16 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-[5%] bg-emerald-500"></div>
</div>
<span className="text-xs text-emerald-400 font-medium">
                      98/100
                    </span>
</div>
</div>
</div>
</div>
</div>

<div className="group relative rounded-3xl border border-white/10 bg-neutral-900/40 p-1 overflow-hidden hover:border-white/20 transition-all duration-300" id="wallet">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative bg-neutral-950/80 rounded-[20px] p-8 h-full flex flex-col">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:wallet-cards" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"></path></g></svg>
</div>
<h4 className="text-xl font-medium text-white mb-2">
                Monchain Wallet
              </h4>
<p className="text-sm text-neutral-400 mb-8 leading-relaxed">
                Non-custodial storage with an active defense layer.
                Automatically blocks interaction with malicious contracts.
              </p>

<div className="mt-auto border border-white/5 rounded-lg bg-neutral-900/50 p-4 relative overflow-hidden">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-red-500 iconify--lucide" data-icon="lucide:x-circle" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m15 9l-6 6m0-6l6 6"></path></g></svg>
</div>
<div>
<div className="text-xs text-white font-medium">
                      Transaction Blocked
                    </div>
<div className="text-[10px] text-neutral-500">
                      Phishing contract detected
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-neutral-950 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-3">
            Why Colyon
          </h2>
<h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
            Infrastructure for the
            
            autonomous economy.
          </h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[240px]">

<div className="md:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<svg aria-hidden="true" className="iconify text-blue-400 mb-4 iconify--lucide" data-icon="lucide:globe-2" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
<h4 className="text-xl font-medium text-white mb-2">
                  Global Mesh Network
                </h4>
<p className="text-sm text-neutral-400 max-w-sm">
                  Distributed nodes across 40+ regions ensure 99.99% uptime and
                  data sovereignty.
                </p>
</div>
<div className="flex items-center gap-4 mt-4">
<div className="flex items-center gap-2 text-[10px] uppercase font-mono text-neutral-500">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  US-EAST
                </div>
<div className="flex items-center gap-2 text-[10px] uppercase font-mono text-neutral-500">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  EU-WEST
                </div>
</div>
</div>
</div>

<div className="md:col-span-1 glass-card rounded-3xl p-6 relative overflow-hidden group flex flex-col justify-between">
<div>
<svg aria-hidden="true" className="iconify text-purple-400 mb-3 iconify--lucide" data-icon="lucide:fingerprint" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4M14 13.12c0 2.38 0 6.38-1 8.88m4.29-.98c.12-.6.43-2.3.5-3.02M2 12a10 10 0 0 1 18-6M2 16h.01m19.79 0c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2m2.31 12c.21-.66.45-1.32.57-2M9 6.8a6 6 0 0 1 9 5.2v2"></path></g></svg>
<h4 className="text-lg font-medium text-white mb-1">
                Zero-Knowledge
              </h4>
</div>
<p className="text-xs text-neutral-400 leading-relaxed">
              Verify transactions without exposing sensitive payload data.
            </p>
</div>

<div className="md:col-span-1 glass-card rounded-3xl p-6 relative overflow-hidden group flex flex-col justify-between">
<div>
<svg aria-hidden="true" className="iconify text-amber-400 mb-3 iconify--lucide" data-icon="lucide:zap" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h4 className="text-lg font-medium text-white mb-1">
                &lt;50ms Latency
              </h4>
</div>
<p className="text-xs text-neutral-400 leading-relaxed">
              Optimized edge computing for high-frequency environments.
            </p>
</div>

<div className="md:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group">
<div className="flex flex-col h-full justify-between">
<div className="">
<svg aria-hidden="true" className="iconify text-white mb-4 iconify--lucide" data-icon="lucide:terminal-square" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m7 11l2-2l-2-2m4 6h4"></path><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect></g></svg>
<h4 className="text-xl font-medium text-white mb-2">
                  Developer Experience
                </h4>
<p className="text-sm text-neutral-400 max-w-sm">
                  Type-safe SDKs, comprehensive docs, and instant sandbox
                  environments.
                </p>
</div>
<div className="mt-6 bg-neutral-900/50 border border-white/10 rounded-lg p-4 font-mono text-xs text-neutral-400">
<span className="text-purple-400">const</span>
<span className="text-blue-400">guard</span>
                =
                <span className="text-purple-400">new</span>
                ColyonGuard({
                
                  mode:
                <span className="text-green-400">'strict'</span>
                
                });
              </div>
</div>
</div>

<div className="md:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group flex items-center justify-between">
<div>
<svg aria-hidden="true" className="iconify text-white mb-4 iconify--lucide" data-icon="lucide:blocks" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"></path><rect height="8" rx="1" width="8" x="14" y="2"></rect></g></svg>
<h4 className="text-xl font-medium text-white mb-2">
                Seamless Integration
              </h4>
<p className="text-sm text-neutral-400 max-w-xs">
                Works with your existing stack. No infrastructure migration
                required.
              </p>
</div>
<div className="flex -space-x-4 opacity-80">
<div className="w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center z-30">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:box" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path></g></svg>
</div>
<div className="w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center z-20">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:webhook" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path><path d="m6 17l3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path><path d="m12 6l3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path></g></svg>
</div>
<div className="w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center z-10">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:database" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path><path d="M3 12a9 3 0 0 0 18 0"></path></g></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 bg-neutral-950">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">

<div className="p-12 md:p-20 flex flex-col justify-center items-start group" id="technology">
<span className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:cpu" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg>
</span>
<h3 className="text-2xl font-medium text-white tracking-tight mb-3">
            Technology
          </h3>
<p className="text-neutral-400 leading-relaxed text-sm max-w-md">
            Colyon's multi-agent framework doesn't just process data; it
            reasons. Our agents form a dynamic graph, assigning specialized
            sub-tasks to optimize for speed and accuracy.
          </p>
<a className="mt-6 text-sm text-white border-b border-white/20 pb-0.5 hover:border-white transition-colors" href="#">
            Read the whitepaper
          </a>
</div>

<div className="p-12 md:p-20 flex flex-col justify-center items-start group" id="about">
<span className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:users-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></g></svg>
</span>
<h3 className="text-2xl font-medium text-white tracking-tight mb-3">
            About &amp; Careers
          </h3>
<p className="text-neutral-400 leading-relaxed text-sm max-w-md">
            We are a team of researchers and engineers obsessed with collective
            intelligence. Based in San Francisco, funded by top tier VCs. We are
            hiring engineers.
          </p>
<a className="mt-6 text-sm text-white border-b border-white/20 pb-0.5 hover:border-white transition-colors" href="#">
            View open positions
          </a>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-white/5">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-12 text-center">
          Frequently asked questions
        </h2>
<div className="space-y-4">
<details className="group border border-white/5 bg-white/[0.02] rounded-2xl open:bg-white/[0.04] transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="text-sm font-medium text-white">
                How does Colyon differ from traditional firewalls?
              </span>
<svg aria-hidden="true" className="iconify text-neutral-500 group-open:rotate-180 transition-transform duration-300 iconify--lucide" data-icon="lucide:chevron-down" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed">
              Traditional firewalls rely on static blacklists. Colyon uses
              autonomous agents that analyze transaction intent and behavior in
              real-time, allowing it to detect novel threats before they are
              indexed.
            </div>
</details>
<details className="group border border-white/5 bg-white/[0.02] rounded-2xl open:bg-white/[0.04] transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="text-sm font-medium text-white">
                Is there a performance penalty?
              </span>
<svg aria-hidden="true" className="iconify text-neutral-500 group-open:rotate-180 transition-transform duration-300 iconify--lucide" data-icon="lucide:chevron-down" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed">
              Minimal. Our edge network adds less than 50ms of latency to
              transactions. For high-frequency use cases, we offer a dedicated
              optimized RPC endpoint.
            </div>
</details>
<details className="group border border-white/5 bg-white/[0.02] rounded-2xl open:bg-white/[0.04] transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="text-sm font-medium text-white">
                What chains are supported?
              </span>
<svg aria-hidden="true" className="iconify text-neutral-500 group-open:rotate-180 transition-transform duration-300 iconify--lucide" data-icon="lucide:chevron-down" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed">
              We currently support Ethereum, Polygon, Arbitrum, Optimism, and
              Solana. Support for Cosmos and Move-based chains is coming in Q3.
            </div>
</details>
<details className="group border border-white/5 bg-white/[0.02] rounded-2xl open:bg-white/[0.04] transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="text-sm font-medium text-white">
                How do I get API access?
              </span>
<svg aria-hidden="true" className="iconify text-neutral-500 group-open:rotate-180 transition-transform duration-300 iconify--lucide" data-icon="lucide:chevron-down" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed">
              Join the waitlist below. We are currently rolling out access to
              enterprise partners and select developer teams on a weekly basis.
            </div>
</details>
</div>
</div>
</section>
<footer className="py-24 border-t border-white/5 bg-neutral-950 relative overflow-hidden" id="join">
<div className="max-w-2xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
          Ready to join the Colony?
        </h2>
<p className="text-neutral-400 mb-10 text-sm">
          Get early access to our APIs and protect your users today.
        </p>
<form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
<input className="flex-1 bg-neutral-900/50 border border-white/10 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-white/30 focus:bg-neutral-900 transition-all placeholder:text-neutral-600" placeholder="enter@email.com" type="email"/>
<button className="bg-white text-black font-medium text-sm px-6 py-3 rounded-lg hover:bg-neutral-200 transition-colors whitespace-nowrap" type="button">
            Request Access
          </button>
</form>
<div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-neutral-600 uppercase tracking-wider font-medium">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:hexagon" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>© 2025 Colyon Inc.</span>
</div>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
