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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-gray-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="font-semibold text-xl tracking-tighter text-gray-950 hover:opacity-80 transition-opacity" href="#">IELTSHOUSE</a>
<nav className="hidden md:flex gap-6">
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#features">Features</a>
<a className="text-sm text-gray-500 hover:text-[#8B0000] transition-colors font-medium" href="#simulation">Test Simulation</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#how-it-works">Comparison</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#pricing">Pricing</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="text-sm text-gray-600 hover:text-gray-900 font-medium hidden sm:block transition-colors" href="#">Log in</a>
<a className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all shadow-sm" href="#">Get Started</a>
</div>
</div>
</header>

<section className="relative pt-24 pb-32 overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAFAFA]/50 to-[#FAFAFA]"></div>

<div className="absolute top-20 left-1/4 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float"></div>
<div className="absolute top-40 right-1/4 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float delay-200"></div>
<div className="relative max-w-7xl mx-auto px-6 text-center">
<div className="animate-fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50/80 backdrop-blur-sm text-[#8B0000] text-xs font-medium mb-8 ring-1 ring-inset ring-red-100/50 hover:bg-red-100 transition-colors cursor-default">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
<span>Trained on 100,000+ Examiner Graded Essays</span>
</div>
<h1 className="animate-fade-up delay-100 text-5xl md:text-7xl font-semibold tracking-tight text-gray-950 mb-6 max-w-4xl mx-auto leading-tight">
                Master all 4 skills. <br/>
<span className="animate-gradient bg-gradient-to-r from-[#8B0000] via-red-500 to-[#8B0000] bg-clip-text text-transparent">Band 8.0 in 7 days.</span>
</h1>
<p className="animate-fade-up delay-200 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
                Stop guessing your score. Our AI evaluates exactly like a certified examiner, providing pinpoint accuracy on your <span className="text-gray-900 font-medium">writing, speaking, reading, and listening</span> in seconds.
            </p>
<div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="bg-[#8B0000] text-white px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-[#6b0000] hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-lg shadow-red-900/20 w-full sm:w-auto flex items-center justify-center gap-2 group" href="#pricing">
                    Start your free trial
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="bg-white text-gray-900 border border-gray-200 px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-gray-50 hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-sm w-full sm:w-auto flex items-center justify-center gap-2 group" href="#demo">
<iconify-icon className="group-hover:text-[#8B0000] transition-colors" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Watch Demo
                </a>
</div>
<div className="animate-fade-up delay-300 text-xs text-gray-400 mt-4 flex justify-center items-center gap-1">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon> No credit card required to start
            </div>

<div className="mt-20 relative max-w-5xl mx-auto animate-fade-up delay-400 perspective-1000">
<div className="absolute -inset-1 bg-gradient-to-r from-red-100 to-gray-200 rounded-2xl blur-xl opacity-40 animate-pulse-glow"></div>
<div className="relative bg-white/90 backdrop-blur-xl rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/40 overflow-hidden flex flex-col md:flex-row h-[500px] text-left group animate-float-3d hover:scale-[1.01] hover:rotate-0 transition-all duration-700 transform-gpu">

<div className="w-full md:w-64 bg-gray-50/50 border-r border-gray-100/50 p-4 hidden md:flex flex-col">
<div className="flex items-center gap-2 mb-8 px-2">
<div className="w-2 h-2 rounded-full bg-[#8B0000] animate-pulse"></div>
<span className="text-xs font-medium text-gray-500 uppercase tracking-widest">Workspace</span>
</div>
<div className="space-y-1">
<div className="flex items-center gap-3 px-3 py-2 bg-white rounded-md border border-gray-200/50 shadow-sm text-sm font-medium text-gray-900 cursor-pointer">
<iconify-icon className="text-[#8B0000]" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon> Essay: Tech Impact
                            </div>
<div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 hover:bg-white rounded-md transition-all cursor-pointer hover:text-gray-900 hover:shadow-sm">
<iconify-icon icon="solar:microphone-2-linear" strokeWidth="1.5"></iconify-icon> Speaking: Part 2
                            </div>
<div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 hover:bg-white rounded-md transition-all cursor-pointer hover:text-gray-900 hover:shadow-sm">
<iconify-icon icon="solar:book-linear" strokeWidth="1.5"></iconify-icon> Reading: Academic 1
                            </div>
<div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 hover:bg-white rounded-md transition-all cursor-pointer hover:text-gray-900 hover:shadow-sm">
<iconify-icon icon="solar:headphones-round-sound-linear" strokeWidth="1.5"></iconify-icon> Listening: Test 4
                            </div>
</div>
</div>

<div className="flex-1 flex flex-col bg-white">
<div className="h-14 border-b border-gray-100/50 flex items-center justify-between px-6 bg-white/50 backdrop-blur-sm sticky top-0 z-10">
<h3 className="text-sm font-medium text-gray-900">Task 2: Technology in Education</h3>
<div className="flex items-center gap-2 text-xs font-medium px-2.5 py-1 bg-green-50/80 text-green-700 rounded-full border border-green-100">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Evaluated
                            </div>
</div>
<div className="flex-1 flex overflow-hidden">

<div className="flex-1 p-6 overflow-y-auto mockup-scroll border-r border-gray-100/50 relative">
<p className="text-sm text-gray-600 leading-relaxed space-y-4">
<span className="block">In contemporary society, the integration of technology into educational institutions has become ubiquitous. While some argue this <span className="bg-red-50 text-[#8B0000] px-1 rounded cursor-pointer border-b-2 border-[#8B0000]/30 hover:bg-red-100 transition-colors">detracts students</span> from traditional learning, I firmly believe it significantly enhances educational outcomes.</span>
<span className="block mt-4">Firstly, digital tools provide unprecedented access to information. Students are no longer confined to the limitations of physical libraries; rather, they can access a <span className="bg-yellow-50 text-yellow-800 px-1 rounded cursor-pointer border-b-2 border-yellow-300/50 hover:bg-yellow-100 transition-colors">plethora of knowledge</span> instantaneously.</span>
</p>
</div>

<div className="w-80 bg-gray-50/30 p-6 overflow-y-auto mockup-scroll">
<div className="text-center mb-6">
<div className="text-xs text-gray-500 uppercase tracking-widest font-medium mb-1">Estimated Band</div>
<div className="text-6xl font-semibold tracking-tighter text-gray-900 bg-clip-text">7.5</div>
</div>
<div className="space-y-4">
<div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all cursor-pointer transform hover:-translate-y-0.5">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-medium text-gray-700">Grammatical Range</span>
<span className="text-xs font-medium text-[#8B0000]">7.0</span>
</div>
<div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-gray-400 to-[#8B0000] rounded-full w-[70%] transition-all duration-1000 ease-out"></div>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-red-100 shadow-sm hover:shadow-md hover:border-red-200 transition-all cursor-pointer group transform hover:-translate-y-0.5">
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
<iconify-icon className="text-[#8B0000]" icon="solar:danger-circle-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-gray-900 mb-1">Grammar Error Detected</div>
<p className="text-xs text-gray-500">"detracts students" should be "distracts students". 'Detract' means to diminish value.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-950 relative overflow-hidden text-center border-y border-gray-900 isolate" id="demo">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,0,0,0.1)_0,transparent_50%)]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">See the engine in action</h2>
<p className="text-gray-400 text-base mb-12 max-w-2xl mx-auto">Watch how our platform provides instant, examiner-grade feedback across Writing, Speaking, Reading, and Listening modules.</p>
<div className="max-w-4xl mx-auto relative group perspective-1000">
<div className="absolute -inset-1 bg-gradient-to-r from-[#8B0000] via-red-600 to-[#8B0000] rounded-2xl blur-xl opacity-20 group-hover:opacity-50 transition-all duration-700 animate-gradient"></div>
<div className="relative rounded-2xl overflow-hidden aspect-video border border-gray-800 bg-black shadow-2xl flex items-center justify-center transform transition-transform duration-500 group-hover:scale-[1.02]">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full absolute inset-0" frameborder="0" src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1&amp;rel=0&amp;modestbranding=1" title="IELTSHOUSE Demo Video"></iframe>
</div>
</div>
</div>
</section>

<section className="py-32 bg-gray-950 relative overflow-hidden isolate" id="simulation">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8B0000] opacity-10 blur-[120px] rounded-full animate-pulse-glow pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gray-800 opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-900 border border-gray-800 text-gray-300 text-xs font-medium mb-6 shadow-lg">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
                    Live Exam Environment
                </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 animate-gradient bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent">
                    Full-Length IELTS Test Simulation
                </h2>
<p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    Experience the exact pressure of exam day. 2 hours and 45 minutes. 4 modules back-to-back. Zero interruptions. Get your true band score instantly upon completion.
                </p>
</div>

<div className="relative max-w-5xl mx-auto perspective-1000">

<div className="relative p-[1px] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] transform-gpu transition-all duration-700 hover:scale-[1.02] hover:rotate-0 animate-float-3d">

<div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_60%,#8B0000_100%)] animate-[spin_4s_linear_infinite]"></div>

<div className="relative bg-gray-900 rounded-[15px] overflow-hidden flex flex-col h-[600px] z-10">

<div className="h-14 border-b border-gray-800 bg-gray-950/80 backdrop-blur-md flex items-center justify-between px-6 z-20">
<div className="flex items-center gap-4">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-gray-800"></div>
<div className="w-3 h-3 rounded-full bg-gray-800"></div>
<div className="w-3 h-3 rounded-full bg-gray-800"></div>
</div>
<div className="h-4 w-px bg-gray-800"></div>
<span className="text-sm font-medium text-gray-300 tracking-tight">Academic Mock Test #42</span>
</div>
<div className="flex items-center gap-2 bg-gray-950 border border-gray-800 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(139,0,0,0.15)]">
<iconify-icon className="text-red-500 animate-pulse" icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-sm font-mono text-white tracking-wider">02:14:59</span>
</div>
</div>

<div className="bg-gray-950/40 border-b border-gray-800/50 p-4">
<div className="flex items-center justify-between max-w-2xl mx-auto relative">

<div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -translate-y-1/2 z-0"></div>

<div className="absolute top-1/2 left-0 w-1/3 h-0.5 bg-gradient-to-r from-[#8B0000] to-red-500 -translate-y-1/2 z-0"></div>

<div className="relative z-10 flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#8B0000] text-white flex items-center justify-center shadow-[0_0_15px_rgba(139,0,0,0.4)]">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">Listening</span>
</div>

<div className="relative z-10 flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gray-900 border-2 border-red-500 text-red-500 flex items-center justify-center relative">
<div className="w-2 h-2 bg-red-500 rounded-full animate-ping absolute"></div>
<div className="w-2 h-2 bg-red-500 rounded-full relative z-10"></div>
</div>
<span className="text-[10px] font-medium text-white uppercase tracking-wider">Reading</span>
</div>

<div className="relative z-10 flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gray-900 border border-gray-700 text-gray-600 flex items-center justify-center">
<span className="text-xs">3</span>
</div>
<span className="text-[10px] font-medium text-gray-600 uppercase tracking-wider">Writing</span>
</div>

<div className="relative z-10 flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gray-900 border border-gray-700 text-gray-600 flex items-center justify-center">
<span className="text-xs">4</span>
</div>
<span className="text-[10px] font-medium text-gray-600 uppercase tracking-wider">Speaking</span>
</div>
</div>
</div>

<div className="flex-1 flex overflow-hidden relative">

<div className="absolute inset-0 z-50 pointer-events-none overflow-hidden">
<div className="w-full h-1 bg-gradient-to-r from-transparent via-[#8B0000] to-transparent opacity-30 shadow-[0_0_15px_#8B0000] absolute top-0 animate-scan"></div>
</div>

<div className="w-1/2 border-r border-gray-800/50 p-8 overflow-y-auto mockup-scroll bg-gray-900/40">
<h3 className="text-xl font-semibold text-white mb-6 tracking-tight">Passage 2: The Evolution of Neural Networks</h3>
<div className="space-y-4 text-sm text-gray-400 leading-loose">
<p>The concept of artificial neural networks has roots tracing back to classical antiquity, but it wasn't until the mid-20th century that it emerged as a formal academic discipline...</p>
<div className="h-3 w-3/4 bg-gray-800 rounded animate-pulse"></div>
<div className="h-3 w-full bg-gray-800 rounded animate-pulse delay-100"></div>
<div className="h-3 w-5/6 bg-gray-800 rounded animate-pulse delay-200"></div>
<p className="mt-6">In recent decades, the explosion of computational power has allowed these systems to process data at an unprecedented scale, leading to breakthroughs in natural language processing and computer vision.</p>
</div>
</div>

<div className="w-1/2 p-8 overflow-y-auto mockup-scroll bg-[#0a0a0a]">
<div className="mb-6 flex items-center justify-between">
<h4 className="text-sm font-medium text-white">Questions 14-18</h4>
<span className="text-xs text-gray-500 bg-gray-900 px-2 py-1 rounded">Matching Headings</span>
</div>
<div className="space-y-4">

<div className="p-4 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-gray-700 transition-colors cursor-pointer group">
<div className="flex gap-4">
<div className="w-6 h-6 rounded bg-gray-800 text-gray-400 flex items-center justify-center text-xs shrink-0 group-hover:bg-white group-hover:text-black transition-colors">14</div>
<div className="flex-1">
<p className="text-sm text-gray-300 mb-3">Paragraph A</p>
<div className="h-10 rounded-lg border border-gray-800 bg-black flex items-center px-4 text-sm text-gray-500 group-hover:border-gray-600 transition-colors">
                                                    Select heading...
                                                    <iconify-icon className="ml-auto" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="p-4 rounded-xl border border-[#8B0000]/40 bg-[#8B0000]/10 cursor-pointer relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[#8B0000]/0 via-[#8B0000]/5 to-[#8B0000]/0 animate-gradient"></div>
<div className="flex gap-4 relative z-10">
<div className="w-6 h-6 rounded bg-[#8B0000] text-white flex items-center justify-center text-xs shrink-0 shadow-[0_0_10px_rgba(139,0,0,0.5)]">15</div>
<div className="flex-1">
<p className="text-sm text-white mb-3">Paragraph B</p>
<div className="h-10 rounded-lg border border-[#8B0000]/50 bg-black flex items-center px-4 text-sm text-white shadow-[0_0_15px_rgba(139,0,0,0.1)_inset]">
                                                    v. The initial academic breakthrough
                                                    <iconify-icon className="ml-auto text-[#8B0000]" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Complete IELTS Preparation</h2>
<p className="text-gray-500 text-base max-w-2xl mx-auto">One platform for all four modules. Practice with official-style materials and get instant, actionable feedback.</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">

<div className="p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#8B0000]/40 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-500 group cursor-pointer transform hover:-translate-y-2">
<div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-red-50 group-hover:scale-110 transition-all duration-500">
<iconify-icon className="text-2xl text-gray-500 group-hover:text-[#8B0000] transition-colors" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-gray-900 mb-2">Writing Analysis</h3>
<p className="text-xs text-gray-500 leading-relaxed">Line-by-line grammar corrections, vocabulary upgrades, and precise band scores for Task 1 &amp; 2.</p>
</div>

<div className="p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#8B0000]/40 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-500 group cursor-pointer transform hover:-translate-y-2 delay-100">
<div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-red-50 group-hover:scale-110 transition-all duration-500">
<iconify-icon className="text-2xl text-gray-500 group-hover:text-[#8B0000] transition-colors" icon="solar:microphone-2-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-gray-900 mb-2">Speaking Simulation</h3>
<p className="text-xs text-gray-500 leading-relaxed">Real-time voice analysis focusing on fluency, pronunciation, and lexical resource.</p>
</div>

<div className="p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#8B0000]/40 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-500 group cursor-pointer transform hover:-translate-y-2 delay-200">
<div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-red-50 group-hover:scale-110 transition-all duration-500">
<iconify-icon className="text-2xl text-gray-500 group-hover:text-[#8B0000] transition-colors" icon="solar:book-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-gray-900 mb-2">Reading Mock Tests</h3>
<p className="text-xs text-gray-500 leading-relaxed">Full Academic and General training tests with automated grading and explanation of correct answers.</p>
</div>

<div className="p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#8B0000]/40 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-500 group cursor-pointer transform hover:-translate-y-2 delay-300">
<div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-red-50 group-hover:scale-110 transition-all duration-500">
<iconify-icon className="text-2xl text-gray-500 group-hover:text-[#8B0000] transition-colors" icon="solar:headphones-round-sound-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-gray-900 mb-2">Listening Practice</h3>
<p className="text-xs text-gray-500 leading-relaxed">Authentic audio accents, varied question types, and immediate score calculation.</p>
</div>
</div>
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="flex-1 space-y-8">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Precision Scoring Engine</h2>
<p className="text-gray-500 text-base leading-relaxed">Our proprietary algorithm doesn't just guess. It breaks down your response into the official IELTS criteria, analyzing syntax, vocabulary depth, coherence, and task response independently.</p>
</div>
<div className="space-y-6">
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-[#8B0000] group-hover:scale-110 transition-all duration-300">
<span className="text-[#8B0000] group-hover:text-white transition-colors font-semibold text-sm">1</span>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 mb-1 group-hover:text-[#8B0000] transition-colors">Complete a module</h4>
<p className="text-sm text-gray-500">Paste your text, record audio, or complete a full mock Reading/Listening test.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-[#8B0000] group-hover:scale-110 transition-all duration-300">
<span className="text-[#8B0000] group-hover:text-white transition-colors font-semibold text-sm">2</span>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 mb-1 group-hover:text-[#8B0000] transition-colors">Instant Multi-Layer Analysis</h4>
<p className="text-sm text-gray-500">The AI scans for lexical resource, grammatical range, and coherence markers instantly.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-[#8B0000] group-hover:scale-110 transition-all duration-300">
<span className="text-[#8B0000] group-hover:text-white transition-colors font-semibold text-sm">3</span>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 mb-1 group-hover:text-[#8B0000] transition-colors">Get your exact Band Score</h4>
<p className="text-sm text-gray-500">Receive a detailed breakdown and personalized suggestions to reach the next band.</p>
</div>
</div>
</div>
</div>

<div className="flex-1 w-full max-w-md perspective-1000">
<div className="bg-white rounded-2xl border border-gray-100 shadow-[0_30px_60px_rgba(0,0,0,0.05)] p-8 transform-gpu hover:rotate-y-2 transition-transform duration-700">
<div className="text-center mb-8 border-b border-gray-100 pb-6 relative">
<div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-2">Live Predictor Engine</p>
<div className="text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-[#8B0000]">8.0</div>
<p className="text-sm text-gray-400 mt-2">Overall Band Score</p>
</div>
<div className="space-y-6">
<div className="group">
<div className="flex justify-between text-xs mb-2">
<span className="font-medium text-gray-700">Task Response</span>
<span className="text-gray-500">8.0</span>
</div>
<div className="h-1.5 w-full bg-gray-100 rounded-full relative overflow-hidden">
<div className="absolute h-full bg-gradient-to-r from-gray-300 to-[#8B0000] rounded-full w-[80%] group-hover:w-[85%] transition-all duration-1000 ease-out"></div>
</div>
</div>
<div className="group">
<div className="flex justify-between text-xs mb-2">
<span className="font-medium text-gray-700">Coherence &amp; Cohesion</span>
<span className="text-gray-500">8.5</span>
</div>
<div className="h-1.5 w-full bg-gray-100 rounded-full relative overflow-hidden">
<div className="absolute h-full bg-gradient-to-r from-gray-300 to-[#8B0000] rounded-full w-[85%] group-hover:w-[90%] transition-all duration-1000 ease-out"></div>
</div>
</div>
<div className="group">
<div className="flex justify-between text-xs mb-2">
<span className="font-medium text-gray-700">Lexical Resource</span>
<span className="text-gray-500">7.5</span>
</div>
<div className="h-1.5 w-full bg-gray-100 rounded-full relative overflow-hidden">
<div className="absolute h-full bg-gray-300 rounded-full w-[75%] group-hover:bg-[#8B0000] transition-colors duration-1000 ease-out"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-gray-200/50" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Simple, transparent pricing</h2>
<p className="text-gray-500 text-base">Invest in your future for less than the cost of one human-graded essay.</p>
<div className="mt-8 inline-flex items-center p-1 bg-gray-100 rounded-lg border border-gray-200">
<button className="px-4 py-1.5 text-sm font-medium rounded-md bg-white text-gray-900 shadow-sm transition-all">Monthly</button>
<button className="px-4 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Yearly <span className="text-[#8B0000] text-[10px] ml-1 font-semibold uppercase tracking-wider bg-red-50 px-1.5 py-0.5 rounded">-20%</span></button>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">

<div className="p-8 rounded-2xl border border-gray-200 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:border-gray-300 transition-all duration-500">
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-2">Essential</h3>
<p className="text-sm text-gray-500 mb-6">Perfect for focused writing practice.</p>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight text-gray-900">$19</span>
<span className="text-sm text-gray-500">/mo</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400" icon="solar:check-circle-linear"></iconify-icon> 10 Essay Evaluations
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400" icon="solar:check-circle-linear"></iconify-icon> Detailed Band Breakdown
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400" icon="solar:check-circle-linear"></iconify-icon> Grammar Corrections
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-400 opacity-60">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon> No Full Mock Tests
                        </li>
</ul>
<button className="w-full py-2.5 px-4 border border-gray-200 text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors active:scale-95">Start Free Trial</button>
</div>

<div className="relative p-[2px] rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500 shadow-2xl shadow-red-900/10 z-10">

<div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_70%,#8B0000_100%)] animate-[spin_3s_linear_infinite] group-hover:bg-[conic-gradient(from_0deg,transparent_40%,#8B0000_100%)] transition-all duration-500"></div>
<div className="relative p-8 rounded-[14px] bg-white h-full flex flex-col">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
<span className="bg-[#8B0000] text-white text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full shadow-md">Most Popular</span>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-2 mt-2">Pro Mastery</h3>
<p className="text-sm text-gray-500 mb-6">Everything you need across all 4 modules.</p>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight text-[#8B0000]">$39</span>
<span className="text-sm text-gray-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-900 font-medium">
<iconify-icon className="text-[#8B0000]" icon="solar:check-circle-bold"></iconify-icon> Unlimited Writing &amp; Speaking
                            </li>
<li className="flex items-center gap-3 text-sm text-[#8B0000] font-semibold bg-red-50/80 -mx-3 px-3 py-2 rounded-lg border border-red-100">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon> Full Test Simulation Engine
                            </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-[#8B0000]" icon="solar:check-circle-bold"></iconify-icon> Line-by-line AI Rewrites
                            </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-[#8B0000]" icon="solar:check-circle-bold"></iconify-icon> Priority Processing
                            </li>
</ul>
<button className="w-full py-2.5 px-4 bg-[#8B0000] text-white rounded-lg text-sm font-medium hover:bg-[#6b0000] transition-all shadow-[0_5px_20px_rgba(139,0,0,0.3)] hover:shadow-[0_8px_25px_rgba(139,0,0,0.4)] active:scale-95 flex items-center justify-center gap-2">
                            Get Pro Today
                            <iconify-icon className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" icon="solar:rocket-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-gray-50 border-t border-gray-200/50 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
<div className="font-semibold text-lg tracking-tighter text-gray-950">IELTSHOUSE</div>
<div className="flex gap-6 text-sm text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-gray-900 transition-colors" href="#">Terms</a>
<a className="hover:text-gray-900 transition-colors" href="#">Contact</a>
</div>
</div>
<div className="text-center text-xs text-gray-400">
                © 2023 IELTSHOUSE Inc. All rights reserved. IELTS is a registered trademark of University of Cambridge ESOL, the British Council, and IDP Education Australia.
            </div>
</div>
</footer>

    </>
  );
}
