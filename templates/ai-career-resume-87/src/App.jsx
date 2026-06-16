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
},
colors: {
sav: {
50: '#f5f3ff',
100: '#ede9fe',
200: '#ddd6fe',
300: '#c4b5fd',
400: '#a78bfa',
500: '#8b5cf6',
600: '#7c3aed',
700: '#6d28d9',
800: '#5b21b6',
900: '#4c1d95',
}
},
animation: {
'blob': 'blob 10s infinite',
'scan': 'scan 3s linear infinite',
'float': 'float 6s ease-in-out infinite',
'float-slow': 'float 8s ease-in-out infinite',
'float-delayed': 'float 7s ease-in-out 2s infinite',
'float-reverse': 'floatReverse 9s ease-in-out infinite',
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'grid-move': 'gridMove 20s linear infinite',
'scroll': 'scroll 40s linear infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
scan: {
'0%': { top: '0%' },
'50%': { top: '100%' },
'100%': { top: '0%' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
floatReverse: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(20px)' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
gridMove: {
'0%': { transform: 'translateY(0)' },
'100%': { transform: 'translateY(40px)' },
},
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}



        const themeToggleBtn = document.getElementById('theme-toggle');
        const html = document.documentElement;

        themeToggleBtn.addEventListener('click', () => {
            html.classList.toggle('dark');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">

<div className="absolute inset-0 grid-bg animate-grid-move opacity-50"></div>

<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-sav-500/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob"></div>
<div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-orange-400/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob animation-delay-2000"></div>
<div className="absolute bottom-[-10%] left-[30%] w-[600px] h-[600px] bg-blue-500/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-4000"></div>


<div className="float-element top-[15%] left-[5%] animate-float">
<div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 p-3 rounded-lg shadow-xl transform -rotate-6">
<div className="flex items-center gap-3">
<div className="bg-red-500/10 p-2 rounded text-red-500">
<iconify-icon icon="lucide:file-text" width="20"></iconify-icon>
</div>
<div className="space-y-1">
<div className="h-1.5 w-16 bg-slate-200 dark:bg-slate-600 rounded"></div>
<div className="h-1.5 w-10 bg-slate-200 dark:bg-slate-600 rounded"></div>
</div>
<div className="bg-green-500 rounded-full p-0.5 text-white absolute -top-1 -right-1">
<iconify-icon icon="lucide:check" width="10"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="float-element top-[18%] right-[8%] animate-float-delayed">
<div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 py-2 px-4 rounded-full shadow-xl transform rotate-3 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Offer Received</span>
</div>
</div>

<div className="float-element top-[45%] left-[12%] animate-float-reverse">
<div className="flex flex-col gap-2">
<div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 px-3 py-1.5 rounded-md shadow-lg flex items-center gap-2 w-max">
<iconify-icon icon="logos:python" width="14"></iconify-icon>
<span className="text-[10px] font-mono text-slate-500">Python</span>
</div>
<div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 px-3 py-1.5 rounded-md shadow-lg flex items-center gap-2 w-max ml-4">
<iconify-icon icon="logos:react" width="14"></iconify-icon>
<span className="text-[10px] font-mono text-slate-500">React</span>
</div>
</div>
</div>

<div className="float-element top-[40%] right-[15%] animate-float-slow">
<div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 p-3 rounded-lg shadow-xl w-32">
<div className="flex items-center justify-between mb-2">
<span className="text-[8px] uppercase text-slate-400">Salary Est.</span>
<iconify-icon className="text-green-500" icon="lucide:trending-up" width="12"></iconify-icon>
</div>
<div className="flex items-end gap-1 h-8">
<div className="w-1/4 bg-sav-200 dark:bg-sav-900 h-[40%] rounded-t-sm"></div>
<div className="w-1/4 bg-sav-300 dark:bg-sav-800 h-[60%] rounded-t-sm"></div>
<div className="w-1/4 bg-sav-400 dark:bg-sav-700 h-[80%] rounded-t-sm"></div>
<div className="w-1/4 bg-sav-500 dark:bg-sav-600 h-[100%] rounded-t-sm"></div>
</div>
</div>
</div>

<div className="float-element bottom-[20%] left-[8%] animate-float">
<div className="glass-panel p-3 rounded-xl border border-white/10 flex items-center gap-3 transform -rotate-3">
<div className="bg-blue-500/10 p-2 rounded-lg text-blue-500">
<iconify-icon icon="lucide:calendar-check" width="18"></iconify-icon>
</div>
<div>
<div className="text-[10px] text-slate-400">Upcoming</div>
<div className="text-xs font-semibold text-slate-700 dark:text-slate-200">Interview: Google</div>
</div>
</div>
</div>

<div className="float-element bottom-[25%] right-[5%] animate-float-reverse">
<div className="relative w-24 h-24">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-slate-200 dark:text-slate-800" cx="48" cy="48" fill="none" r="40" stroke="currentColor" strokeWidth="4"></circle>
<circle className="text-sav-500" cx="48" cy="48" fill="none" r="40" stroke="currentColor" stroke-dasharray="251" stroke-dashoffset="25" strokeWidth="4"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<span className="text-xl font-bold text-slate-700 dark:text-white">95%</span>
<span className="text-[8px] uppercase tracking-wide text-slate-400">Match</span>
</div>
</div>
</div>

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-white/0 dark:to-black/0"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-slate-200 dark:border-white/5 backdrop-blur-xl bg-white/70 dark:bg-[#0B0F19]/70 supports-[backdrop-filter]:bg-white/50">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sav-600 to-indigo-500 flex items-center justify-center text-white font-semibold tracking-tighter shadow-lg shadow-sav-500/20 transition-all group-hover:scale-105">
<iconify-icon icon="lucide:sparkles" width="16"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tight text-slate-900 dark:text-white">Savvy AI</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
<a className="hover:text-sav-500 transition-colors" href="#features">Platform</a>
<a className="hover:text-sav-500 transition-colors" href="#resume-builder">Analyzer</a>
<a className="hover:text-sav-500 transition-colors" href="#resume">Resume Builder</a>
<a className="hover:text-sav-500 transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<button className="hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors dark:text-slate-400 text-slate-500 rounded-full pt-2 pr-2 pb-2 pl-2" id="theme-toggle">
<iconify-icon className="hidden dark:block" icon="lucide:sun" strokeWidth="1.5" width="18"></iconify-icon>
<iconify-icon className="block dark:hidden" icon="lucide:moon" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="hidden md:flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-black px-4 py-2 rounded-full text-xs font-semibold tracking-wide hover:opacity-90 hover:shadow-lg transition-all active:scale-95">
                    Get Started
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="z-10 pt-32 pb-16 relative">
<div className="text-center max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sav-500/20 bg-sav-500/5 text-sav-600 dark:text-sav-300 text-xs font-medium mb-8 animate-fade-in-up">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sav-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-sav-500"></span>
</span>
                New: AI Resume Tailoring 2.0
            </div>

<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 dark:text-white mb-6 max-w-4xl mx-auto leading-[1.1] animate-fade-in-up delay-100">
                Stop guessing. Start <br/>
<span className="text-gradient">matching perfectly.</span>
</h1>

<p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
                Savvy AI analyzes job descriptions instantly, identifies skill gaps, and generates tailored resumes that pass ATS filters and impress hiring managers.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-in-up delay-300">
<button className="w-full sm:w-auto px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-medium text-sm hover:shadow-xl hover:shadow-sav-500/10 transition-all flex items-center justify-center gap-2 active:scale-95">
<iconify-icon icon="lucide:upload-cloud" strokeWidth="1.5" width="18"></iconify-icon>
                    Upload Resume
                </button>
<button className="w-full sm:w-auto px-8 py-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-full font-medium text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 active:scale-95">
<iconify-icon icon="lucide:play-circle" strokeWidth="1.5" width="18"></iconify-icon>
                    Watch Demo
                </button>
</div>

<div className="relative max-w-5xl mx-auto animate-float animate-fade-in-up delay-300">
<div className="absolute -inset-1 bg-gradient-to-r from-sav-500 to-orange-400 rounded-2xl blur opacity-20 dark:opacity-30"></div>
<div className="glass-panel rounded-xl p-1 md:p-2 relative">
<div className="bg-slate-50 dark:bg-[#0F1420] rounded-lg border border-slate-200 dark:border-white/5 overflow-hidden">

<div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-[#131926]">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/10"></div>
</div>
<div className="mx-auto text-xs text-slate-400 font-mono flex items-center gap-1">
<iconify-icon icon="lucide:lock" width="10"></iconify-icon>
                                app.savvy.ai/dashboard
                            </div>
</div>

<div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 text-left">

<div className="md:col-span-4 space-y-4">
<div className="flex items-center justify-between mb-2">
<h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Job Target</h3>
<span className="text-xs text-sav-400 font-mono bg-sav-500/10 px-2 py-0.5 rounded">Sr. Product Designer</span>
</div>
<div className="p-4 rounded-lg bg-white dark:bg-slate-800/30 border border-slate-200 dark:border-white/5 relative overflow-hidden group">

<div className="absolute inset-x-0 h-px bg-sav-500/50 shadow-[0_0_15px_rgba(139,92,246,0.6)] animate-scan z-10"></div>
<div className="space-y-3 opacity-60">
<div className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
<div className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
<div className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-5/6"></div>
<div className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-2/3"></div>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-[10px] px-2 py-1 rounded bg-sav-500/10 text-sav-400 border border-sav-500/20">Figma</span>
<span className="text-[10px] px-2 py-1 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20">Prototyping</span>
</div>
</div>
<div className="glass-panel p-3 rounded-lg border border-slate-200 dark:border-white/5 bg-white/50 dark:bg-slate-800/20">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-green-500/10 rounded-md text-green-500">
<iconify-icon icon="lucide:banknote" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div>
<div className="text-[10px] text-slate-400">Salary Estimate</div>
<div className="text-xs font-semibold text-slate-900 dark:text-white">$140k - $180k</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 flex flex-col items-center justify-center py-4 relative">
<div className="absolute inset-0 bg-sav-500/5 filter blur-3xl rounded-full"></div>
<div className="relative w-40 h-40 flex items-center justify-center">

<svg className="w-full h-full transform -rotate-90 drop-shadow-lg">
<circle className="text-slate-200 dark:text-slate-800" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeWidth="6"></circle>
<circle className="text-sav-500 transition-all duration-1000 ease-out" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" stroke-dasharray="440" stroke-dashoffset="44" strokeLinecap="round" strokeWidth="6"></circle>
</svg>
<div className="absolute flex flex-col items-center">
<span className="text-4xl font-semibold tracking-tighter text-slate-900 dark:text-white">92<span className="text-lg text-slate-500">%</span></span>
<span className="text-[10px] text-slate-500 uppercase tracking-wide mt-1 font-medium">Match Score</span>
</div>
</div>
<div className="mt-6 w-full space-y-3 px-4">
<div className="flex justify-between items-center text-xs">
<span className="text-slate-500">Experience</span>
<span className="text-green-500 font-medium">High Match</span>
</div>
<div className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-[95%]"></div>
</div>
</div>
</div>

<div className="md:col-span-4 space-y-3">
<h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Recommended Actions</h3>
<button className="w-full p-2.5 rounded-lg bg-sav-500/10 border border-sav-500/20 hover:bg-sav-500/20 transition-colors flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-sav-500 rounded text-white">
<iconify-icon icon="lucide:wand-2" strokeWidth="2" width="14"></iconify-icon>
</div>
<div className="text-left">
<div className="text-xs font-semibold text-slate-900 dark:text-white">Tailor Resume</div>
<div className="text-[10px] text-sav-600 dark:text-sav-300">Auto-inject keywords</div>
</div>
</div>
<iconify-icon className="text-sav-500 -ml-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all transform -translate-x-2" icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
<button className="w-full p-2.5 rounded-lg bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-white/5 hover:border-sav-500/30 transition-colors flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-slate-100 dark:bg-slate-700 rounded text-slate-500 dark:text-slate-300">
<iconify-icon icon="lucide:pen-tool" strokeWidth="2" width="14"></iconify-icon>
</div>
<div className="text-left">
<div className="text-xs font-medium text-slate-700 dark:text-slate-300">Cover Letter</div>
</div>
</div>
</button>
<button className="w-full p-2.5 rounded-lg bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-white/5 hover:border-sav-500/30 transition-colors flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-slate-100 dark:bg-slate-700 rounded text-slate-500 dark:text-slate-300">
<iconify-icon icon="lucide:message-square" strokeWidth="2" width="14"></iconify-icon>
</div>
<div className="text-left">
<div className="text-xs font-medium text-slate-700 dark:text-slate-300">Interview Prep</div>
</div>
</div>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/30 relative overflow-hidden py-12">
<div className="max-w-7xl mx-auto px-6 text-center relative z-10 mb-8">
<h2 className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Helping candidates land offers at forward-thinking companies
            </h2>
</div>

<div className="scroller-mask relative w-full overflow-hidden">
<div className="flex w-max animate-scroll hover:[animation-play-state:paused] items-center">

<div className="flex items-center gap-16 px-8">
<div className="brand-logo text-2xl font-bold text-[#D51900] tracking-tight font-serif italic" style={{fontFamily: '\'Times New Roman\', serif'}}>
                        Johnson<span className="mx-0.5">&amp;</span>Johnson
                    </div>
<div className="brand-logo text-slate-900 dark:text-white">
<iconify-icon icon="simple-icons:tesla" width="100"></iconify-icon>
</div>
<div className="brand-logo text-[#0B3D91] dark:text-white">
<iconify-icon icon="simple-icons:nasa" width="80"></iconify-icon>
</div>
<div className="brand-logo">
<span className="font-serif text-xl font-bold tracking-tight text-slate-900 dark:text-white">McKinsey  &amp; Company</span>
</div>
<div className="brand-logo text-slate-900 dark:text-white">
<iconify-icon icon="simple-icons:tiktok" width="110"></iconify-icon>
</div>
<div className="brand-logo text-slate-900 dark:text-white mt-2">
<iconify-icon icon="simple-icons:amazon" width="100"></iconify-icon>
</div>
<div className="brand-logo bg-[#7399C6] px-2 py-1">
<span className="font-serif text-lg text-white font-medium tracking-wide">GoldmanSachs</span>
</div>
</div>

<div className="flex items-center gap-16 px-8">
<div className="brand-logo text-2xl font-bold text-[#D51900] tracking-tight font-serif italic" style={{fontFamily: '\'Times New Roman\', serif'}}>
                        Johnson<span className="mx-0.5">&amp;</span>Johnson
                    </div>
<div className="brand-logo text-slate-900 dark:text-white">
<iconify-icon icon="simple-icons:tesla" width="100"></iconify-icon>
</div>
<div className="brand-logo text-[#0B3D91] dark:text-white">
<iconify-icon icon="simple-icons:nasa" width="80"></iconify-icon>
</div>
<div className="brand-logo">
<span className="font-serif text-xl font-bold tracking-tight text-slate-900 dark:text-white">McKinsey  &amp; Company</span>
</div>
<div className="brand-logo text-slate-900 dark:text-white">
<iconify-icon icon="simple-icons:tiktok" width="110"></iconify-icon>
</div>
<div className="brand-logo text-slate-900 dark:text-white mt-2">
<iconify-icon icon="simple-icons:amazon" width="100"></iconify-icon>
</div>
<div className="brand-logo bg-[#7399C6] px-2 py-1">
<span className="font-serif text-lg text-white font-medium tracking-wide">GoldmanSachs</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-b border-slate-200 dark:border-white/5 bg-white dark:bg-[#0B0F19]" id="resume-builder">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 text-center max-w-2xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4">
                    Instantly tailor your application.
                </h2>
<p className="text-slate-500 dark:text-slate-400">
                    Paste your resume and the job description below. Our AI will identify gaps and rewrite your documents to maximize interview chances.
                </p>
</div>

<div className="bg-white dark:bg-[#131926] rounded-xl border border-slate-200 dark:border-white/10 shadow-2xl shadow-slate-200/50 dark:shadow-none overflow-hidden relative">

<div className="flex items-center justify-between px-6 py-3 border-b border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-slate-900/50">
<div className="flex items-center gap-2">
<div className="flex gap-1.5 mr-4">
<div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
</div>
<span className="text-xs font-medium text-slate-500">Untitled Project</span>
</div>
<div className="flex items-center gap-3">
<span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">AI Model: <span className="text-sav-500">GPT-4o</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-white/10 h-auto md:h-[500px]">

<div className="p-6 md:p-8 flex flex-col h-full bg-slate-50/30 dark:bg-transparent">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-medium">
<iconify-icon icon="lucide:user-circle" width="18"></iconify-icon>
                                Your Resume
                            </div>
<button className="text-xs text-sav-500 font-medium hover:underline">View History</button>
</div>

<div className="flex-1 border-2 border-dashed border-slate-200 dark:border-white/10 rounded-lg bg-slate-50 dark:bg-slate-800/20 hover:border-sav-500/50 hover:bg-sav-500/5 transition-all group cursor-pointer flex flex-col items-center justify-center text-center p-6 relative">
<div className="absolute top-4 right-4">
<iconify-icon className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 mb-3 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:file-up" width="20"></iconify-icon>
</div>
<p className="text-sm font-medium text-slate-700 dark:text-slate-200">Drop PDF here or click to upload</p>
<p className="text-xs text-slate-400 mt-1 mb-4">Max 5MB (PDF, DOCX)</p>
<div className="w-full flex items-center gap-2 mb-2">
<div className="h-px bg-slate-200 dark:bg-slate-700 flex-1"></div>
<span className="text-[10px] text-slate-400 uppercase">OR</span>
<div className="h-px bg-slate-200 dark:bg-slate-700 flex-1"></div>
</div>
<textarea className="w-full h-32 bg-transparent text-sm text-slate-600 dark:text-slate-300 placeholder:text-slate-400 resize-none p-2 focus:ring-0 border-none" placeholder="Paste your resume text here..."></textarea>
</div>
</div>

<div className="p-6 md:p-8 flex flex-col h-full bg-slate-50/30 dark:bg-transparent relative">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-medium">
<iconify-icon icon="lucide:briefcase" width="18"></iconify-icon>
                                Target Job Description
                            </div>
<span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 px-2 py-1 rounded border border-slate-200 dark:border-white/10">3,000 char max</span>
</div>
<div className="flex-1 bg-white dark:bg-[#0f1420] border border-slate-200 dark:border-white/10 rounded-lg p-1 focus-within:ring-1 focus-within:ring-sav-500/50 transition-all shadow-sm">
<textarea className="w-full h-full bg-transparent p-4 text-sm text-slate-600 dark:text-slate-300 placeholder:text-slate-400 resize-none border-none focus:ring-0" placeholder="Paste the job title, requirements, and responsibilities here..."></textarea>
</div>

<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white to-transparent dark:from-[#131926] dark:via-[#131926] dark:to-transparent pointer-events-none md:hidden"></div>
</div>
</div>

<div className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-white/10 p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 text-xs text-slate-500">
<iconify-icon icon="lucide:info" width="14"></iconify-icon>
<span>Generates a new version in <span className="font-mono">~30s</span></span>
</div>
<div className="flex w-full md:w-auto gap-3">
<button className="flex-1 md:flex-none px-6 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white font-medium text-sm hover:bg-white dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all flex items-center justify-center gap-2 active:scale-95 bg-white dark:bg-transparent shadow-sm">
<iconify-icon icon="lucide:pen-line" width="16"></iconify-icon>
                            Generate Cover Letter
                        </button>
<button className="flex-1 md:flex-none px-6 py-2.5 rounded-lg bg-gradient-to-r from-sav-600 to-indigo-600 text-white font-medium text-sm hover:opacity-90 shadow-lg shadow-sav-500/25 transition-all flex items-center justify-center gap-2 active:scale-95">
<iconify-icon icon="lucide:sparkles" width="16"></iconify-icon>
                            Generate Resume
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-slate-50/50 dark:bg-[#0B0F19]" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Your personal <span className="text-slate-400">career architect.</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative">
<div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-sav-500 to-fuchsia-500 opacity-0 group-hover:opacity-20 transition duration-500 blur"></div>
<div className="relative p-6 rounded-2xl bg-white dark:bg-[#131926] border border-slate-200 dark:border-white/10 h-full shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-sav-500/10 flex items-center justify-center text-sav-500 mb-4">
<iconify-icon icon="lucide:user" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">Profile &amp; LinkedIn Sync</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                            Upload your PDF resume or sync with LinkedIn. Savvy AI extracts your core skills, experience, and achievements to build a dynamic digital profile.
                        </p>
</div>
</div>

<div className="group relative">
<div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-orange-400 opacity-0 group-hover:opacity-20 transition duration-500 blur"></div>
<div className="relative p-6 rounded-2xl bg-white dark:bg-[#131926] border border-slate-200 dark:border-white/10 h-full shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-500 mb-4">
<iconify-icon icon="lucide:scan-search" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">Job Analysis &amp; Fit Gap</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                            Paste a job link. We decode the "hidden expectations," salary range, and day-to-day tasks to calculate your Fit Score.
                        </p>
</div>
</div>

<div className="group relative">
<div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-orange-400 to-yellow-300 opacity-0 group-hover:opacity-20 transition duration-500 blur"></div>
<div className="relative p-6 rounded-2xl bg-white dark:bg-[#131926] border border-slate-200 dark:border-white/10 h-full shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 mb-4">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">Build &amp; Apply</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                            Generate a perfectly tailored resume and cover letter for <i>that</i> specific job. Prepare with AI-generated interview questions.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white mb-2">Everything you need to <br/>land the offer.</h2>
<p className="text-slate-500 dark:text-slate-400">Integrated tools for every stage of your career journey.</p>
</div>
<button className="text-sm font-medium text-sav-500 hover:text-sav-400 flex items-center gap-1 transition-colors">
                    View all features <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">

<div className="md:col-span-2 md:row-span-2 p-6 rounded-xl bg-slate-100 dark:bg-[#131926] border border-slate-200 dark:border-white/5 relative overflow-hidden group hover:border-sav-500/30 transition-colors">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center mb-4 text-slate-900 dark:text-white shadow-sm">
<iconify-icon icon="lucide:file-text" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 dark:text-white">Smart Resume Builder</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 mt-2 mb-6 max-w-sm">
                            Automatically rewrite your CV to match the Job Description. Choose from global templates (US, EU, Asia) and industry styles.
                        </p>

<div className="space-y-2">
<div className="flex gap-2">
<span className="text-[10px] px-2 py-1 rounded-md border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800">Modern Template</span>
<span className="text-[10px] px-2 py-1 rounded-md border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800">Tech Industry</span>
</div>
<div className="p-3 bg-white dark:bg-[#0B0F19] rounded border border-slate-200 dark:border-white/5 shadow-sm text-[10px] text-slate-500 font-mono">
<span className="text-sav-500">&gt;</span> Optimized for <span className="bg-yellow-500/10 text-yellow-600 px-1 rounded">Leadership</span> and <span className="bg-green-500/10 text-green-500 px-1 rounded">React.js</span>...
                            </div>
</div>
</div>
<div className="absolute -right-10 -bottom-10 w-48 h-48 bg-sav-500/10 rounded-full blur-3xl group-hover:bg-sav-500/20 transition-all"></div>
</div>

<div className="md:col-span-1 p-6 rounded-xl bg-slate-100 dark:bg-[#131926] border border-slate-200 dark:border-white/5 group hover:border-peach-400/30 transition-colors">
<div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center mb-3 text-orange-500">
<iconify-icon icon="lucide:pen-line" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 dark:text-white">Cover Letter Gen</h3>
<p className="text-xs text-slate-500 mt-2">Adjust tones: Professional, Confident, or Friendly.</p>
</div>

<div className="md:col-span-1 p-6 rounded-xl bg-slate-100 dark:bg-[#131926] border border-slate-200 dark:border-white/5 group hover:border-blue-400/30 transition-colors">
<div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center mb-3 text-blue-500">
<iconify-icon icon="lucide:mic" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 dark:text-white">Interview Prep</h3>
<p className="text-xs text-slate-500 mt-2">STAR method answers &amp; technical questions.</p>
</div>

<div className="md:col-span-1 p-6 rounded-xl bg-slate-100 dark:bg-[#131926] border border-slate-200 dark:border-white/5 group hover:border-green-400/30 transition-colors">
<div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-500/10 flex items-center justify-center mb-3 text-green-500">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 dark:text-white">Networking</h3>
<p className="text-xs text-slate-500 mt-2">Templates for recruiters &amp; thank-you notes.</p>
</div>

<div className="md:col-span-1 p-6 rounded-xl bg-slate-100 dark:bg-[#131926] border border-slate-200 dark:border-white/5 group hover:border-pink-400/30 transition-colors">
<div className="w-8 h-8 rounded-lg bg-pink-100 dark:bg-pink-500/10 flex items-center justify-center mb-3 text-pink-500">
<iconify-icon icon="lucide:archive" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 dark:text-white">Doc Vault</h3>
<p className="text-xs text-slate-500 mt-2">Store unlimited CV versions &amp; portfolios.</p>
</div>
</div>

<div className="mt-4 p-6 rounded-xl bg-slate-900 dark:bg-[#0f1420] border border-slate-800 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-sav-500/5 to-transparent"></div>
<div className="flex items-center gap-4 relative z-10">
<div className="p-3 bg-white/10 rounded-full text-white ring-1 ring-white/20">
<iconify-icon icon="lucide:map" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-white font-semibold">Career Roadmap &amp; Tasks</h3>
<p className="text-sm text-slate-400">Weekly skill-building tasks and progression tracking.</p>
</div>
</div>
<div className="flex gap-2 relative z-10">
<div className="h-1.5 w-8 rounded-full bg-sav-500"></div>
<div className="h-1.5 w-8 rounded-full bg-sav-500/50"></div>
<div className="h-1.5 w-8 rounded-full bg-slate-700"></div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-slate-200 dark:border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white mb-6">Ready to upgrade your career?</h2>
<p className="text-slate-500 mb-8 text-lg">Join thousands of professionals landing their dream jobs faster.</p>
<button className="px-8 py-3 bg-gradient-to-r from-sav-600 to-indigo-500 text-white rounded-full font-semibold tracking-tight hover:opacity-90 transition-all shadow-lg shadow-sav-500/20 active:scale-95">
                Start Free Trial
            </button>
</div>
</section>

<footer className="border-t border-slate-200 dark:border-white/5 py-12 bg-slate-50 dark:bg-[#0B0F19]">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-gradient-to-br from-sav-600 to-indigo-500 flex items-center justify-center text-white text-xs font-bold shadow-md">SA</div>
<span className="font-semibold text-slate-900 dark:text-white">Savvy AI</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">© 2023 Savvy AI Inc.<br/>All rights reserved.</p>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Product</h4>
<ul className="space-y-3 text-xs text-slate-500 dark:text-slate-400">
<li><a className="hover:text-sav-500 transition-colors" href="#">Resume Builder</a></li>
<li><a className="hover:text-sav-500 transition-colors" href="#">Job Analyzer</a></li>
<li><a className="hover:text-sav-500 transition-colors" href="#">Cover Letters</a></li>
<li><a className="hover:text-sav-500 transition-colors" href="#">Interview Prep</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-3 text-xs text-slate-500 dark:text-slate-400">
<li><a className="hover:text-sav-500 transition-colors" href="#">About</a></li>
<li><a className="hover:text-sav-500 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-sav-500 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-sav-500 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-3 text-xs text-slate-500 dark:text-slate-400">
<li><a className="hover:text-sav-500 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-sav-500 transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
</footer>


    </>
  );
}
