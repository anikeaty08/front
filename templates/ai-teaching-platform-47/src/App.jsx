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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="blob bg-blue-200 w-96 h-96 top-0 left-0 translate-x-[-30%] translate-y-[-30%]"></div>
<div className="blob bg-purple-100 w-[500px] h-[500px] top-40 right-0 translate-x-[30%]"></div>
<div className="blob bg-teal-100 w-96 h-96 bottom-0 left-20"></div>

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center">
<span className="font-bold text-lg tracking-tighter">M</span>
</div>
<span className="font-bold text-slate-900 tracking-tight text-lg">MySchoolManager</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#features">Features</a>
<a className="hover:text-slate-900 transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-slate-600 hover:text-slate-900">Log in</button>
<button className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-900/20">Get Started</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10 relative">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-medium mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                The Future of Education is Here
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-4xl text-glow">
                Teach Smarter <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">With AI.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mb-10 leading-relaxed font-light">
                A futuristic AI-powered tool that helps teachers create notes, exams, analyze data, research, and work faster — all in one dashboard.
            </p>
<div className="flex flex-col sm:flex-row gap-4 mb-20">
<button className="group bg-slate-900 text-white pl-6 pr-5 py-3.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all hover:shadow-xl hover:shadow-indigo-500/20 flex items-center gap-2">
                    Get Started
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="bg-white text-slate-700 border border-slate-200 pl-6 pr-5 py-3.5 rounded-full text-sm font-medium hover:bg-slate-50 transition-all hover:border-slate-300 flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
                    Watch Demo
                </button>
</div>

<div className="perspective-container w-full max-w-5xl mx-auto relative">

<div className="absolute -top-12 -left-12 p-4 bg-white/80 backdrop-blur rounded-2xl shadow-xl border border-white/50 z-20 hidden md:block animate-bounce" style={{animationDuration: '3s'}}>
<iconify-icon className="text-3xl text-indigo-500" icon="solar:notes-linear"></iconify-icon>
</div>
<div className="absolute -top-8 -right-8 p-4 bg-white/80 backdrop-blur rounded-2xl shadow-xl border border-white/50 z-20 hidden md:block animate-bounce" style={{animationDuration: '4s'}}>
<iconify-icon className="text-3xl text-teal-500" icon="solar:chart-2-linear"></iconify-icon>
</div>

<div className="tilted-ui bg-white rounded-xl border border-slate-200 shadow-2xl overflow-hidden aspect-[16/9]">

<div className="h-10 border-b border-slate-100 flex items-center px-4 gap-2 bg-slate-50/50">
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
</div>

<div className="flex h-full">

<div className="w-16 md:w-64 border-r border-slate-100 p-4 hidden sm:flex flex-col gap-4 bg-slate-50/30">
<div className="h-8 w-24 bg-slate-200/50 rounded-md"></div>
<div className="space-y-2 mt-4">
<div className="h-8 w-full bg-indigo-50 text-indigo-600 rounded-md flex items-center px-2 gap-2"><iconify-icon icon="solar:home-2-linear"></iconify-icon> <span className="hidden md:inline text-xs font-semibold">Home</span></div>
<div className="h-8 w-full hover:bg-slate-100 rounded-md flex items-center px-2 gap-2 text-slate-400"><iconify-icon icon="solar:document-add-linear"></iconify-icon> <span className="hidden md:inline text-xs">Notes</span></div>
<div className="h-8 w-full hover:bg-slate-100 rounded-md flex items-center px-2 gap-2 text-slate-400"><iconify-icon icon="solar:pen-new-square-linear"></iconify-icon> <span className="hidden md:inline text-xs">Exams</span></div>
</div>
</div>

<div className="flex-1 p-6 md:p-8 bg-white relative">
<div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-indigo-50 to-transparent opacity-50 rounded-bl-full pointer-events-none"></div>
<div className="flex justify-between items-center mb-8">
<div>
<div className="h-6 w-48 bg-slate-200 rounded mb-2"></div>
<div className="h-4 w-32 bg-slate-100 rounded"></div>
</div>
<div className="h-8 w-24 bg-indigo-600 rounded-full shadow-lg shadow-indigo-200"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="h-32 bg-white border border-slate-100 shadow-sm rounded-xl p-4">
<div className="w-10 h-10 bg-orange-50 rounded-lg mb-3"></div>
<div className="h-4 w-20 bg-slate-100 rounded mb-2"></div>
<div className="h-3 w-full bg-slate-50 rounded"></div>
</div>
<div className="h-32 bg-white border border-slate-100 shadow-sm rounded-xl p-4">
<div className="w-10 h-10 bg-blue-50 rounded-lg mb-3"></div>
<div className="h-4 w-20 bg-slate-100 rounded mb-2"></div>
<div className="h-3 w-full bg-slate-50 rounded"></div>
</div>
<div className="h-32 bg-white border border-slate-100 shadow-sm rounded-xl p-4">
<div className="w-10 h-10 bg-purple-50 rounded-lg mb-3"></div>
<div className="h-4 w-20 bg-slate-100 rounded mb-2"></div>
<div className="h-3 w-full bg-slate-50 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-slate-50/50 py-10">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-slate-400 mb-8 tracking-wide uppercase">Trusted by teachers and schools across Africa</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 font-bold text-xl text-slate-700">
<iconify-icon className="text-2xl" icon="solar:square-academic-cap-linear"></iconify-icon> EDUTECH
                </div>
<div className="flex items-center gap-2 font-bold text-xl text-slate-700">
<iconify-icon className="text-2xl" icon="solar:book-2-linear"></iconify-icon> ACADEMIA
                </div>
<div className="flex items-center gap-2 font-bold text-xl text-slate-700">
<iconify-icon className="text-2xl" icon="solar:city-linear"></iconify-icon> CITY HIGH
                </div>
<div className="flex items-center gap-2 font-bold text-xl text-slate-700">
<iconify-icon className="text-2xl" icon="solar:global-linear"></iconify-icon> FUTURE PREP
                </div>
<div className="flex items-center gap-2 font-bold text-xl text-slate-700">
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon> ALLIANCE
                </div>
</div>
</div>
</section>

<section className="py-24 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">The 4 Core Powers</h2>
<p className="text-slate-500 text-lg">Everything you need to manage your classroom and teaching materials efficiently, supercharged by AI.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card p-8 rounded-2xl group">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">AI Note Creator</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Create professional notes in seconds. Edit, print, download, and ask AI to rewrite or enhance anything instantly.
                    </p>
</div>

<div className="glass-card p-8 rounded-2xl group">
<div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:checklist-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">AI Exam Generator</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Generate MCQs and theory questions instantly. Add images, marking guides, and export effortlessly.
                    </p>
</div>

<div className="glass-card p-8 rounded-2xl group">
<div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">AI Research Assistant</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Chat with AI like your personal teaching assistant. Upload documents and get detailed explanations.
                    </p>
</div>

<div className="glass-card p-8 rounded-2xl group">
<div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Analytics Dashboard</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        View powerful analytics showing your teaching activity, past work, and optimization insights.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1 space-y-8">
<div>
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-4 text-indigo-600">
<iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                            Seamless Creation <br/>
<span className="text-slate-400">On Any Device.</span>
</h2>
<p className="text-slate-500 text-lg leading-relaxed">
                            Experience a workspace designed for focus. From generating complex chemistry exams to summarizing history notes, the interface adapts to your needs.
                        </p>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 flex-shrink-0 text-green-500">
<iconify-icon icon="solar:verified-check-linear"></iconify-icon>
</div>
<span className="text-slate-600">Instant PDF conversion for all documents.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 flex-shrink-0 text-green-500">
<iconify-icon icon="solar:verified-check-linear"></iconify-icon>
</div>
<span className="text-slate-600">Smart layout engine automatically formats your exams.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 flex-shrink-0 text-green-500">
<iconify-icon icon="solar:verified-check-linear"></iconify-icon>
</div>
<span className="text-slate-600">Context-aware AI that understands local curriculum.</span>
</li>
</ul>
</div>

<div className="order-1 lg:order-2 relative">

<div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-purple-100 rounded-full filter blur-[100px] opacity-60"></div>
<div className="relative space-y-6">

<div className="bg-white rounded-xl shadow-2xl border border-slate-100 p-1 transform lg:translate-x-4 transition-transform hover:-translate-y-2 duration-500">
<div className="bg-slate-50 rounded-lg p-6 h-64 overflow-hidden relative">

<div className="flex justify-between items-center mb-6">
<div className="h-4 w-32 bg-slate-200 rounded"></div>
<div className="px-3 py-1 bg-indigo-600 text-white text-xs rounded-full">Generate</div>
</div>
<div className="space-y-3">
<div className="p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
<div className="h-3 w-3/4 bg-slate-200 rounded mb-2"></div>
<div className="h-2 w-1/2 bg-slate-100 rounded"></div>
</div>
<div className="p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
<div className="h-3 w-2/3 bg-slate-200 rounded mb-2"></div>
<div className="h-2 w-1/2 bg-slate-100 rounded"></div>
</div>
<div className="p-3 bg-white border border-slate-200 rounded-lg shadow-sm opacity-50">
<div className="h-3 w-full bg-slate-200 rounded mb-2"></div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-10 -left-4 w-48 bg-white rounded-[2rem] border-4 border-white shadow-2xl overflow-hidden">
<div className="bg-slate-900 h-full p-4 flex flex-col items-center">
<div className="w-12 h-1 bg-slate-700 rounded-full mb-4"></div>
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-indigo-400 mb-2">
<iconify-icon icon="solar:microphone-3-linear"></iconify-icon>
</div>
<div className="text-center">
<div className="h-2 w-20 bg-slate-700 rounded mx-auto mb-2"></div>
<div className="h-10 w-full bg-indigo-600 rounded-lg mt-2"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Streamlined Workflow</h2>
</div>
<div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent z-0"></div>

<div className="relative z-10 text-center group">
<div className="w-12 h-12 mx-auto bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 mb-6 font-semibold group-hover:border-indigo-500 group-hover:text-indigo-600 transition-colors shadow-sm">1</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Login</h3>
<p className="text-sm text-slate-500">Create an account and access your futuristic workspace.</p>
</div>

<div className="relative z-10 text-center group">
<div className="w-12 h-12 mx-auto bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 mb-6 font-semibold group-hover:border-indigo-500 group-hover:text-indigo-600 transition-colors shadow-sm">2</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Choose a Tool</h3>
<p className="text-sm text-slate-500">Notes, Exams, Research, or Analytics — one click away.</p>
</div>

<div className="relative z-10 text-center group">
<div className="w-12 h-12 mx-auto bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 mb-6 font-semibold group-hover:border-indigo-500 group-hover:text-indigo-600 transition-colors shadow-sm">3</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Work With AI</h3>
<p className="text-sm text-slate-500">Ask your AI assistant to write, improve, or generate content.</p>
</div>

<div className="relative z-10 text-center group">
<div className="w-12 h-12 mx-auto bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 mb-6 font-semibold group-hover:border-indigo-500 group-hover:text-indigo-600 transition-colors shadow-sm">4</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Print &amp; Export</h3>
<p className="text-sm text-slate-500">Export your work as PDF or DOCX instantly.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[120px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Why Teachers Love It</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 transition-colors">
<iconify-icon className="text-3xl text-indigo-400 mb-4" icon="solar:clock-circle-linear"></iconify-icon>
<h3 className="text-lg font-semibold mb-2">Saves Time</h3>
<p className="text-slate-400 text-sm">Cut lesson planning time by 70% with automated content generation.</p>
</div>
<div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 transition-colors">
<iconify-icon className="text-3xl text-teal-400 mb-4" icon="solar:target-linear"></iconify-icon>
<h3 className="text-lg font-semibold mb-2">More Accurate</h3>
<p className="text-slate-400 text-sm">AI trained on educational standards ensures precision in every note.</p>
</div>
<div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 transition-colors">
<iconify-icon className="text-3xl text-yellow-400 mb-4" icon="solar:smile-circle-linear"></iconify-icon>
<h3 className="text-lg font-semibold mb-2">Reduces Stress</h3>
<p className="text-slate-400 text-sm">Focus on teaching students, not formatting documents.</p>
</div>
<div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 transition-colors">
<iconify-icon className="text-3xl text-purple-400 mb-4" icon="solar:star-linear"></iconify-icon>
<h3 className="text-lg font-semibold mb-2">Better Experience</h3>
<p className="text-slate-400 text-sm">A delightful user interface makes administrative work feel effortless.</p>
</div>
<div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 transition-colors">
<iconify-icon className="text-3xl text-pink-400 mb-4" icon="solar:tuning-square-2-linear"></iconify-icon>
<h3 className="text-lg font-semibold mb-2">Flexible Tools</h3>
<p className="text-slate-400 text-sm">Adaptable for primary, secondary, and tertiary education levels.</p>
</div>
<div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 transition-colors">
<iconify-icon className="text-3xl text-blue-400 mb-4" icon="solar:globe-linear"></iconify-icon>
<h3 className="text-lg font-semibold mb-2">Built for Africa</h3>
<p className="text-slate-400 text-sm">Optimized for local curriculums and low-bandwidth environments.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-center mb-16 tracking-tight">Voices from the Classroom</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-6 rounded-2xl">
<div className="flex items-center gap-1 text-yellow-500 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"I used to spend weekends typing exams. Now MySchoolManager does it in 5 minutes. It feels like magic."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">SJ</div>
<div>
<p className="text-sm font-semibold text-slate-900">Sarah Johnson</p>
<p className="text-xs text-slate-500">Greenwood High</p>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-2xl">
<div className="flex items-center gap-1 text-yellow-500 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"The AI research assistant explains complex topics better than most textbooks. My students love the new notes."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">DM</div>
<div>
<p className="text-sm font-semibold text-slate-900">David Mwangi</p>
<p className="text-xs text-slate-500">Nairobi Academy</p>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-2xl">
<div className="flex items-center gap-1 text-yellow-500 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"The analytics helped me realize where I needed to improve my teaching pace. A game changer."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">EO</div>
<div>
<p className="text-sm font-semibold text-slate-900">Emmanuel O.</p>
<p className="text-xs text-slate-500">City Model School</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight mb-6">Simple, Transparent Pricing</h2>
<div className="inline-flex items-center bg-white p-1 rounded-lg border border-slate-200 shadow-sm">
<button className="px-4 py-1.5 text-sm font-medium rounded-md bg-slate-900 text-white shadow-sm">Monthly</button>
<button className="px-4 py-1.5 text-sm font-medium rounded-md text-slate-500 hover:text-slate-900">Yearly</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
<h3 className="text-lg font-medium text-slate-900 mb-2">Free</h3>
<p className="text-slate-500 text-sm mb-6">For trying things out</p>
<div className="text-3xl font-bold text-slate-900 mb-6">$0</div>
<button className="w-full py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 mb-8">Get Started</button>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex gap-2"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Basic Note Generation</li>
<li className="flex gap-2"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> 1 Exam per month</li>
<li className="flex gap-2"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Limited AI Chat</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border-2 border-indigo-500 shadow-xl relative transform md:-translate-y-4">
<div className="absolute top-0 right-0 left-0 -mt-3 flex justify-center">
<span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Teacher Pro</h3>
<p className="text-slate-500 text-sm mb-6">For supercharged teaching</p>
<div className="text-3xl font-bold text-slate-900 mb-6">$12<span className="text-sm font-normal text-slate-500">/mo</span></div>
<button className="w-full py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 shadow-lg shadow-indigo-200 mb-8">Upgrade Now</button>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex gap-2"><iconify-icon className="text-indigo-500" icon="solar:check-circle-bold"></iconify-icon> Unlimited Notes</li>
<li className="flex gap-2"><iconify-icon className="text-indigo-500" icon="solar:check-circle-bold"></iconify-icon> Unlimited Exams</li>
<li className="flex gap-2"><iconify-icon className="text-indigo-500" icon="solar:check-circle-bold"></iconify-icon> Advanced Research AI</li>
<li className="flex gap-2"><iconify-icon className="text-indigo-500" icon="solar:check-circle-bold"></iconify-icon> Full Analytics</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
<h3 className="text-lg font-medium text-slate-900 mb-2">School Plan</h3>
<p className="text-slate-500 text-sm mb-6">For entire departments</p>
<div className="text-3xl font-bold text-slate-900 mb-6">Custom</div>
<button className="w-full py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 mb-8">Contact Sales</button>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex gap-2"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Everything in Pro</li>
<li className="flex gap-2"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Admin Dashboard</li>
<li className="flex gap-2"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Collaborative Workspace</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-center mb-12 tracking-tight">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden cursor-pointer open:ring-2 open:ring-indigo-100 open:border-indigo-200 transition-all">
<summary className="flex justify-between items-center p-6 text-slate-800 font-medium">
                        How does the AI work?
                        <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                        We use advanced Large Language Models tailored for education. You provide a topic or upload a document, and the AI structures it into lesson plans, notes, or questions instantly.
                    </div>
</details>
<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden cursor-pointer open:ring-2 open:ring-indigo-100 open:border-indigo-200 transition-all">
<summary className="flex justify-between items-center p-6 text-slate-800 font-medium">
                        Can I print or download my notes?
                        <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                        Yes! All content generated can be exported as PDF or DOCX files with one click, perfectly formatted for printing.
                    </div>
</details>
<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden cursor-pointer open:ring-2 open:ring-indigo-100 open:border-indigo-200 transition-all">
<summary className="flex justify-between items-center p-6 text-slate-800 font-medium">
                        Does it require internet?
                        <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                        Yes, an internet connection is required to communicate with our AI servers. However, we have optimized the platform to be lightweight for slower connections.
                    </div>
</details>
<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden cursor-pointer open:ring-2 open:ring-indigo-100 open:border-indigo-200 transition-all">
<summary className="flex justify-between items-center p-6 text-slate-800 font-medium">
                        Can I upload my own documents?
                        <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                        Absolutely. You can upload PDFs, Word docs, or images, and the AI can analyze, summarize, or create questions based on that specific content.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-indigo-200 to-purple-200 rounded-[100%] blur-[100px] opacity-40"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Start teaching smarter today.</h2>
<p className="text-xl text-slate-500 mb-10 font-light">Your AI assistant is waiting to help you save time and inspire students.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-indigo-600 text-white pl-8 pr-6 py-4 rounded-full text-base font-medium hover:bg-indigo-700 transition-all shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)] flex items-center justify-center gap-2">
                    Get Started
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="bg-white/50 backdrop-blur text-slate-700 border border-slate-300 pl-8 pr-6 py-4 rounded-full text-base font-medium hover:bg-white transition-all flex items-center justify-center gap-2">
<iconify-icon className="text-xl" icon="solar:play-circle-linear"></iconify-icon>
                    Watch Demo
                </button>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-slate-900 text-white flex items-center justify-center">
<span className="font-bold text-xs tracking-tighter">M</span>
</div>
<span className="font-bold text-slate-900 tracking-tight">MySchoolManager</span>
</div>
<div className="flex gap-8 text-sm text-slate-500">
<a className="hover:text-slate-900" href="#">Home</a>
<a className="hover:text-slate-900" href="#">Features</a>
<a className="hover:text-slate-900" href="#">Pricing</a>
<a className="hover:text-slate-900" href="#">Contact</a>
</div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-indigo-600 transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-indigo-600 transition-colors" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-indigo-600 transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
<div className="text-center md:text-left text-xs text-slate-400">
                © 2024 MySchoolManager AI. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
