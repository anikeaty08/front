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



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100 rounded-full blur-[120px] opacity-60 animate-float"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-slate-200 rounded-full blur-[120px] opacity-60 animate-float" style={{animationDelay: '-3s'}}></div>
</div>

<main className="relative w-full max-w-2xl bg-white/80 backdrop-blur-2xl border border-white/60 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.08),0_10px_20px_-10px_rgba(0,0,0,0.04)] rounded-[32px] overflow-hidden animate-card transform-style-3d">

<div className="flex animate-content delay-100 pt-8 pr-8 pl-8 items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex bg-slate-100 w-8 h-8 border-orange-500 border rounded-lg shadow-sm items-center justify-center">
<svg className="lucide lucide-cpu w-4 h-4 text-slate-600" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">AUTO/OS</span>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-white/50 border-orange-500 border rounded-full pt-1 pr-2.5 pb-1 pl-2.5 shadow-sm backdrop-blur-sm">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
                    Enrollment Open
                </span>
</div>
</div>

<div className="sm:px-12 sm:pt-14 sm:pb-10 pt-10 pr-8 pb-8 pl-8">
<div className="space-y-6">
<h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-slate-900 leading-[1.1] animate-content delay-200">
                    Reclaim your time with 
                    <span className="text-orange-500">intelligent automation.</span>
</h1>
<p className="text-base sm:text-lg text-slate-500 max-w-md leading-relaxed animate-content delay-300">
                    A 4-week intensive sprint designed for operators. Learn to build autonomous agents, connect LLMs to your data, and automate the mundane.
                </p>

<div className="animate-content delay-400 pt-2">
<form className="flex flex-col sm:flex-row gap-3 max-w-md">
<div className="relative flex-grow group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg className="lucide lucide-mail h-4 w-4 text-slate-400 group-focus-within:text-slate-600 transition-colors" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<input className="custom-input placeholder-slate-400 outline-none focus:border-slate-300 focus:bg-white text-sm text-slate-800 bg-slate-50/50 w-full border-orange-500 border rounded-xl pt-3 pr-4 pb-3 pl-10" placeholder="enter your email..." required="" type="email"/>
</div>
<button className="group flex gap-2 shadow-slate-900/10 transition-all hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] text-sm font-medium text-orange-50 bg-orange-400 rounded-xl px-6 py-3 relative shadow-lg gap-x-2 gap-y-2 items-center justify-center" type="button">
<span className="">Join Waitlist</span>
<svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</form>
<p className="mt-3 text-xs text-slate-400">Join 2,400+ engineers and founders.</p>
</div>
</div>
</div>

<div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent animate-content delay-400"></div>

<div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 bg-slate-50/30 animate-content delay-500">

<div className="p-6 sm:p-8 hover:bg-white/60 transition-colors duration-300 group cursor-default">
<div className="inline-flex group-hover:scale-110 transition-transform duration-300 ease-out bg-white w-9 h-9 border-orange-500 border rounded-lg mb-3 shadow-sm items-center justify-center">
<svg className="lucide lucide-blocks h-4.5 w-4.5 text-slate-600" data-lucide="blocks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"></path><rect height="8" rx="1" width="8" x="14" y="2"></rect></svg>
</div>
<h3 className="text-sm font-semibold text-slate-900">Foundations</h3>
<p className="mt-1 text-xs text-slate-500 leading-relaxed">
                    API design, webhooks, and modern data structures.
                </p>
</div>

<div className="sm:p-8 hover:bg-white/60 transition-colors duration-300 group cursor-default pt-6 pr-6 pb-6 pl-6">
<div className="inline-flex group-hover:scale-110 transition-transform duration-300 ease-out bg-slate-50 w-9 h-9 border-orange-500 border rounded-lg mb-3 shadow-sm items-center justify-center">
<svg className="lucide lucide-bot w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(71, 85, 105)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<h3 className="text-sm font-semibold text-slate-900">AI Agents</h3>
<p className="mt-1 text-xs text-slate-500 leading-relaxed">
                    Building context-aware agents with LangChain &amp; OpenAI.
                </p>
</div>

<div className="p-6 sm:p-8 hover:bg-white/60 transition-colors duration-300 group cursor-default">
<div className="inline-flex group-hover:scale-110 transition-transform duration-300 ease-out bg-white w-9 h-9 border-orange-500 border rounded-lg mb-3 shadow-sm items-center justify-center">
<svg className="lucide lucide-workflow h-4.5 w-4.5 text-slate-600" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
</div>
<h3 className="text-sm font-semibold text-slate-900">Workflows</h3>
<p className="mt-1 text-xs text-slate-500 leading-relaxed">
                    End-to-end automation pipelines using n8n and Python.
                </p>
</div>
</div>

<div className="border-t border-slate-100 bg-white px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 animate-content delay-500">
<div className="flex -space-x-2 overflow-hidden">
<img alt="" className="inline-block h-6 w-6 rounded-full ring-2 ring-white grayscale opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="" className="inline-block h-6 w-6 rounded-full ring-2 ring-white grayscale opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="" className="inline-block h-6 w-6 rounded-full ring-2 ring-white grayscale opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 ring-2 ring-white">
<span className="text-[9px] font-medium text-slate-500">+400</span>
</div>
</div>
<div className="flex items-center gap-4">
<p className="text-xs font-medium text-slate-400 tracking-tight">POWERED BY</p>
<div className="flex gap-3 opacity-40 grayscale">
<svg className="lucide lucide-zap h-4 w-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<svg className="lucide lucide-code-2 h-4 w-4" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
<svg className="lucide lucide-database h-4 w-4" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
</div>
</div>
</main>


    </>
  );
}
