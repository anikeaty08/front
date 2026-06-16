import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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



        // Modal logic
        function toggleModal(modalId) {
            const modal = document.getElementById(modalId);
            const isHidden = modal.classList.contains('hidden');
            
            if (isHidden) {
                // Show modal
                modal.classList.remove('hidden');
                document.body.classList.add('modal-open');
                
                // Trigger reflow
                void modal.offsetWidth;
                
                // Add opacity/transform
                modal.classList.remove('opacity-0');
                if(modalId === 'login-modal') {
                    document.getElementById('login-panel').classList.remove('translate-x-full');
                } else if(modalId === 'signup-modal') {
                    document.getElementById('signup-panel').classList.remove('scale-95');
                }
            } else {
                // Hide modal animation
                modal.classList.add('opacity-0');
                if(modalId === 'login-modal') {
                    document.getElementById('login-panel').classList.add('translate-x-full');
                } else if(modalId === 'signup-modal') {
                    document.getElementById('signup-panel').classList.add('scale-95');
                }
                
                // Wait for animation to finish before hiding
                setTimeout(() => {
                    modal.classList.add('hidden');
                    document.body.classList.remove('modal-open');
                }, 300);
            }
        }

        // Scroll animation observer
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.fade-in-section').forEach((section) => {
                observer.observe(section);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-40 border-b border-zinc-200/50 bg-white/80 backdrop-blur-xl transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex gap-8 items-center">
<a className="text-xl font-semibold tracking-tighter flex items-center gap-2" href="#">
                    ODITO
                </a>
<div className="hidden md:flex gap-8 text-sm font-medium text-zinc-500 items-center">
<a className="relative hover:text-zinc-900 transition-colors py-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-zinc-900 after:transition-all after:duration-300 hover:after:w-full" href="#features">Features</a>
<a className="relative hover:text-zinc-900 transition-colors py-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-zinc-900 after:transition-all after:duration-300 hover:after:w-full" href="#use-cases">Use Cases</a>
<a className="relative hover:text-zinc-900 transition-colors py-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-zinc-900 after:transition-all after:duration-300 hover:after:w-full" href="#pricing">Pricing</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-zinc-600 hover:text-zinc-900 hidden sm:block transition-colors" onclick="toggleModal('login-modal')">Log in</button>
<button className="text-sm font-medium bg-zinc-900 text-white px-5 py-2.5 rounded-xl hover:bg-zinc-800 hover:scale-[1.02] hover:shadow-lg hover:shadow-zinc-900/10 transition-all duration-300" onclick="toggleModal('signup-modal')">
                    Sign Up
                </button>
</div>
</div>
</nav>

<section className="relative pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden fade-in-section is-visible">

<div className="absolute inset-0 bg-grid z-0 pointer-events-none w-full h-full"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#D9FF50]/20 blur-[120px] rounded-full z-0 pointer-events-none"></div>
<div className="flex flex-col text-center max-w-7xl z-10 mr-auto ml-auto relative items-center px-6">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-zinc-200 shadow-sm mb-8 hover:shadow-md transition-shadow cursor-default">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D9FF50] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400"></span>
</span>
<span className="text-sm font-medium text-zinc-600 tracking-tight">New: Monitor ChatGPT, Gemini &amp; Claude</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 text-zinc-900 max-w-4xl">
                Your AI Visibility isn’t just SEO. <br className="hidden md:block"/>It’s your <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-emerald-600">digital reputation.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl mb-10 leading-relaxed font-normal">
                Track how AI platforms like ChatGPT, Gemini, and Claude see your brand. Fix visibility gaps, monitor mentions, and improve rankings seamlessly.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white text-base font-medium rounded-2xl hover:bg-zinc-800 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(217,255,80,0.2)] transition-all duration-300 flex items-center justify-center gap-2 group" onclick="toggleModal('signup-modal')">
                    Start Free Analysis
                    <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<a className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 text-base font-medium rounded-2xl border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 hover:shadow-sm transition-all duration-300 flex items-center justify-center gap-2" href="#features">
<iconify-icon className="text-xl text-zinc-500" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                    See How It Works
                </a>
</div>
</div>

<div className="mt-20 relative max-w-5xl mx-auto px-6 h-[400px] sm:h-[500px] md:h-[600px] z-20 perspective-1000">

<div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-[800px] bg-white rounded-[32px] border border-zinc-200 shadow-2xl overflow-hidden h-full sm:h-[550px] transition-transform duration-700 hover:-translate-y-2">

<div className="h-16 border-b border-zinc-100 flex items-center px-6 gap-3 bg-zinc-50/80 backdrop-blur-sm">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-zinc-200"></div>
<div className="w-3 h-3 rounded-full bg-zinc-200"></div>
<div className="w-3 h-3 rounded-full bg-zinc-200"></div>
</div>
<div className="mx-auto flex-1 max-w-sm bg-white px-4 py-2 rounded-xl text-sm font-normal text-zinc-400 border border-zinc-200 shadow-sm flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
                        app.odito.ai/dashboard
                    </div>
</div>

<div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-4 gap-8 h-full bg-zinc-50/30">

<div className="hidden md:flex flex-col gap-2">
<div className="p-3 bg-zinc-100/80 rounded-xl flex items-center gap-3 text-zinc-900 font-medium text-sm">
<iconify-icon className="text-xl" icon="solar:widget-2-linear" strokeWidth="1.5"></iconify-icon> Overview
                        </div>
<div className="p-3 rounded-xl flex items-center gap-3 text-zinc-500 font-normal text-sm hover:bg-zinc-100/50 cursor-pointer transition-colors">
<iconify-icon className="text-xl" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon> Mentions
                        </div>
<div className="p-3 rounded-xl flex items-center gap-3 text-zinc-500 font-normal text-sm hover:bg-zinc-100/50 cursor-pointer transition-colors">
<iconify-icon className="text-xl" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon> Competitors
                        </div>
</div>

<div className="col-span-1 md:col-span-3 flex flex-col gap-6">

<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="text-sm font-medium text-zinc-500 flex items-center gap-2 mb-3">
<iconify-icon className="text-lg text-zinc-400" icon="solar:pulse-linear" strokeWidth="1.5"></iconify-icon> Total Mentions
                                </div>
<div className="text-3xl font-semibold tracking-tight text-zinc-900">2,482</div>
</div>
<div className="bg-[#D9FF50]/10 p-5 rounded-2xl border border-[#D9FF50]/30 shadow-sm flex flex-col justify-between relative overflow-hidden hover:shadow-md transition-shadow">
<div className="absolute -right-4 -bottom-4 opacity-10">
<iconify-icon className="text-7xl" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-sm font-medium text-zinc-600 flex items-center gap-2 mb-3 relative z-10">
<iconify-icon className="text-lg text-lime-600" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon> Global Sentiment
                                </div>
<div className="text-3xl font-semibold tracking-tight text-zinc-900 relative z-10">
                                    Positive <span className="text-sm font-normal text-zinc-500 tracking-normal ml-1">84%</span>
</div>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-2xl p-6 flex-1 shadow-sm flex flex-col">
<div className="text-sm font-medium text-zinc-900 tracking-tight mb-6">Visibility Timeline</div>
<div className="flex-1 flex items-end justify-between gap-2 sm:gap-3 px-1">
<div className="w-full bg-zinc-100 rounded-t-lg h-[30%] hover:bg-zinc-200 transition-colors"></div>
<div className="w-full bg-zinc-100 rounded-t-lg h-[45%] hover:bg-zinc-200 transition-colors"></div>
<div className="w-full bg-zinc-100 rounded-t-lg h-[60%] hover:bg-zinc-200 transition-colors"></div>
<div className="w-full bg-[#D9FF50] rounded-t-lg h-[90%] shadow-sm relative group cursor-pointer">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Updated Docs</div>
</div>
<div className="w-full bg-zinc-100 rounded-t-lg h-[75%] hover:bg-zinc-200 transition-colors"></div>
<div className="w-full bg-zinc-100 rounded-t-lg h-[80%] hover:bg-zinc-200 transition-colors"></div>
<div className="w-full bg-zinc-100 rounded-t-lg h-[65%] hover:bg-zinc-200 transition-colors"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute left-0 md:left-[2%] top-[10%] w-64 glass-panel p-5 rounded-[24px] shadow-xl z-30 hidden lg:block transition-transform duration-700 hover:-translate-y-2">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-xl bg-[#D9FF50]/20 flex items-center justify-center text-lime-700">
<iconify-icon className="text-xl" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-500">AI Score</p>
<div className="flex items-baseline gap-2">
<p className="text-2xl font-semibold tracking-tight text-zinc-900">85</p>
<p className="text-xs font-medium text-lime-600 bg-lime-50 px-1.5 py-0.5 rounded-md">+45%</p>
</div>
</div>
</div>
<div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
<div className="w-[85%] h-full bg-zinc-900 rounded-full"></div>
</div>
</div>

<div className="absolute right-0 md:right-[2%] bottom-[15%] w-60 bg-zinc-900 border border-zinc-800 shadow-2xl rounded-[24px] p-5 z-30 hidden lg:block transition-transform duration-700 hover:-translate-y-2">
<p className="text-sm font-semibold text-white tracking-tight mb-4">Top Platforms</p>
<div className="space-y-4">
<div className="flex items-center justify-between group">
<div className="flex items-center gap-3 text-zinc-300">
<iconify-icon className="text-emerald-400 text-lg" icon="solar:stars-linear"></iconify-icon>
<span className="text-sm font-medium group-hover:text-white transition-colors">ChatGPT</span>
</div>
<span className="text-sm font-semibold text-white">42%</span>
</div>
<div className="flex items-center justify-between group">
<div className="flex items-center gap-3 text-zinc-300">
<iconify-icon className="text-blue-400 text-lg" icon="solar:cpu-linear"></iconify-icon>
<span className="text-sm font-medium group-hover:text-white transition-colors">Gemini</span>
</div>
<span className="text-sm font-semibold text-white">35%</span>
</div>
<div className="flex items-center justify-between group">
<div className="flex items-center gap-3 text-zinc-300">
<iconify-icon className="text-purple-400 text-lg" icon="solar:scanner-linear"></iconify-icon>
<span className="text-sm font-medium group-hover:text-white transition-colors">Claude</span>
</div>
<span className="text-sm font-semibold text-white">23%</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-200 fade-in-section">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-300 mb-4 leading-tight">
                Most brands are invisible to AI models.
            </h2>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
                Odito tracks and improves your <br className="hidden md:block"/> AI presence instantly.
            </h2>
<p className="mt-6 text-lg text-zinc-500 font-normal mx-auto leading-relaxed">
                Traditional search is evolving. When a user asks an AI for a recommendation, you need to ensure your product is the definitive answer.
            </p>
</div>
</section>

<section className="bg-zinc-50 max-w-7xl mx-auto py-24 px-6 fade-in-section" id="features">
<div className="mb-12 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-zinc-900">
                Everything you need to <br/>dominate AI search.
            </h2>
<p className="text-zinc-500 text-lg font-normal leading-relaxed">
                One dashboard to monitor your brand across all major language models. Turn the black box of AI into measurable insights.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-8 bg-zinc-950 rounded-[32px] p-8 md:p-10 relative overflow-hidden group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
<div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-800/40 via-zinc-950 to-zinc-950 opacity-50 absolute inset-0"></div>
<div className="relative z-10 max-w-lg">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-[#D9FF50]">
<iconify-icon className="text-2xl" icon="solar:scanner-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-3">AI Mention Tracking</h3>
<p className="text-base text-zinc-400 font-normal leading-relaxed mb-8">
                        Monitor exactly when and how your brand is recommended across all major LLMs. Understand context, sentiment, and factual accuracy.
                    </p>
<div className="inline-flex items-center gap-4 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 backdrop-blur-md">
<div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-300">
<iconify-icon className="text-xl" icon="solar:chat-round-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-xs font-normal text-zinc-500 mb-0.5">Latest mention found</div>
<div className="text-sm font-medium text-zinc-200">"Odito is highly recommended for..."</div>
</div>
<div className="ml-2 pl-4 border-l border-zinc-800">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                Live
                            </span>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 bg-white border border-zinc-200 rounded-[32px] p-8 relative overflow-hidden group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col">
<div className="relative z-10 h-full flex flex-col">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mb-6 text-zinc-900">
<iconify-icon className="text-2xl" icon="solar:screencast-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-zinc-900 tracking-tight mb-3">Competitor Gap</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed mb-6">
                        See why AI recommends competitors instead of you, and get actionable steps to fix it.
                    </p>
<div className="mt-auto bg-zinc-50 p-4 rounded-2xl border border-zinc-100 space-y-3">
<div className="flex items-center gap-3">
<div className="w-8 text-xs font-medium text-zinc-500">You</div>
<div className="flex-1 h-2 bg-zinc-200 rounded-full overflow-hidden">
<div className="w-[30%] h-full bg-zinc-900 rounded-full"></div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 text-xs font-medium text-zinc-500">Acme</div>
<div className="flex-1 h-2 bg-zinc-200 rounded-full overflow-hidden">
<div className="w-[85%] h-full bg-[#D9FF50] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 bg-[#D9FF50]/20 border border-[#D9FF50]/40 rounded-[32px] p-8 relative overflow-hidden group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col">
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 text-zinc-900 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:branching-paths-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-zinc-900 tracking-tight mb-3">SEO + AI Unified</h3>
<p className="text-sm text-zinc-600 font-normal leading-relaxed mb-6">
                        Traditional SEO and AI visibility are connected. We analyze both to give you a unified growth strategy.
                    </p>
<div className="mt-auto inline-flex items-center gap-2 text-zinc-900 font-medium text-sm hover:gap-3 transition-all cursor-pointer">
                        View methodology <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="md:col-span-8 bg-white border border-zinc-200 rounded-[32px] p-8 md:p-10 relative overflow-hidden group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
<div className="relative z-10 max-w-xl flex flex-col h-full justify-center">
<h3 className="text-2xl font-semibold text-zinc-900 tracking-tight mb-3">Fix Visibility Gaps Instantly</h3>
<p className="text-base text-zinc-500 font-normal leading-relaxed mb-6">
                        Stop guessing what LLMs want. Get precise, AI-generated action plans detailing what content to create, which platforms to target, and how to structure data.
                    </p>
<button className="bg-zinc-900 text-white w-max px-5 py-3 rounded-xl text-sm font-medium flex items-center gap-2 hover:bg-[#D9FF50] hover:text-zinc-900 transition-colors shadow-sm">
                        Generate Action Plan
                        <iconify-icon className="text-lg" icon="solar:magic-stick-3-linear"></iconify-icon>
</button>
</div>
<div className="absolute -right-16 -bottom-16 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
<svg fill="none" height="300" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" viewbox="0 0 24 24" width="300">
<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
<polyline points="2 17 12 22 22 17"></polyline>
<polyline points="2 12 12 17 22 12"></polyline>
</svg>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-200 fade-in-section" id="use-cases">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Built for modern growth teams</h2>
<p className="text-lg text-zinc-500 font-normal">See how different teams use Odito to take control of their AI narrative.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-6 rounded-[24px] border border-zinc-200 bg-zinc-50 hover:bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-5 group-hover:border-zinc-300 transition-colors text-zinc-700">
<iconify-icon className="text-2xl" icon="solar:magnifer-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">SEO Teams</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-normal">Expand your keyword strategy to include LLM prompts and conversational search queries.</p>
</div>
<div className="p-6 rounded-[24px] border border-zinc-200 bg-zinc-50 hover:bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-5 group-hover:border-zinc-300 transition-colors text-zinc-700">
<iconify-icon className="text-2xl" icon="solar:rocket-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">Founders</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-normal">Ensure your startup is the default recommendation when investors or users ask AI tools about your niche.</p>
</div>
<div className="p-6 rounded-[24px] border border-zinc-200 bg-zinc-50 hover:bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-5 group-hover:border-zinc-300 transition-colors text-zinc-700">
<iconify-icon className="text-2xl" icon="solar:buildings-2-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">Agencies</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-normal">Offer AI Visibility Optimization (AIVO) as a cutting-edge service to your existing SEO clients.</p>
</div>
<div className="p-6 rounded-[24px] border border-zinc-200 bg-zinc-50 hover:bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-5 group-hover:border-zinc-300 transition-colors text-zinc-700">
<iconify-icon className="text-2xl" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">Content Creators</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-normal">Learn exactly what formats and structures LLMs prefer when citing sources to boost your authority.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 fade-in-section" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Simple, transparent pricing</h2>
<p className="text-lg text-zinc-500 font-normal">Start for free, upgrade when you need more power.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">

<div className="bg-white border border-zinc-200 rounded-[32px] p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
<div className="mb-6">
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Starter</h3>
<p className="text-sm text-zinc-500">Perfect for trying out Odito.</p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-zinc-900">$0</span>
<span className="text-sm font-medium text-zinc-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-lg text-zinc-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Track 1 Brand
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-lg text-zinc-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> 50 Mentions / month
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-lg text-zinc-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Basic AI Score
                        </li>
</ul>
<button className="w-full py-3 px-4 rounded-xl text-sm font-medium border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50 hover:border-zinc-300 transition-colors" onclick="toggleModal('signup-modal')">
                        Get Started
                    </button>
</div>

<div className="bg-zinc-900 border border-zinc-800 rounded-[32px] p-8 scale-100 md:scale-105 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative flex flex-col h-full z-10 shadow-xl">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D9FF50] text-zinc-900 text-xs font-semibold px-3 py-1 rounded-full border border-[#D9FF50]">Most Popular</div>
<div className="mb-6">
<h3 className="text-lg font-semibold text-white mb-2">Growth</h3>
<p className="text-sm text-zinc-400">For growing businesses &amp; teams.</p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-white">$49</span>
<span className="text-sm font-medium text-zinc-400">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-lg text-[#D9FF50] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Track 5 Brands
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-lg text-[#D9FF50] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> 5,000 Mentions / month
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-lg text-[#D9FF50] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Competitor Gap Analysis
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-lg text-[#D9FF50] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Action Plan Generation
                        </li>
</ul>
<button className="w-full py-3 px-4 rounded-xl text-sm font-medium bg-[#D9FF50] text-zinc-900 hover:bg-lime-300 hover:scale-[1.02] transition-all" onclick="toggleModal('signup-modal')">
                        Start 14-day trial
                    </button>
</div>

<div className="bg-white border border-zinc-200 rounded-[32px] p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
<div className="mb-6">
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Pro</h3>
<p className="text-sm text-zinc-500">For agencies and enterprise.</p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-zinc-900">$199</span>
<span className="text-sm font-medium text-zinc-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-lg text-zinc-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Unlimited Brands
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-lg text-zinc-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Unlimited Mentions
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-lg text-zinc-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Custom API Access
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-lg text-zinc-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Dedicated Success Manager
                        </li>
</ul>
<button className="w-full py-3 px-4 rounded-xl text-sm font-medium border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50 hover:border-zinc-300 transition-colors">
                        Contact Sales
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-1">
<a className="text-xl font-semibold tracking-tighter flex items-center gap-2 mb-4 text-zinc-900" href="#">
                        ODITO
                    </a>
<p className="text-sm text-zinc-500 leading-relaxed font-normal mb-6 pr-4">
                        The intelligence platform that empowers brands to control their narrative in the age of AI search.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4 tracking-tight">Product</h4>
<ul className="space-y-3 text-sm text-zinc-500 font-normal">
<li><a className="hover:text-zinc-900 transition-colors" href="#features">Features</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#pricing">Pricing</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#use-cases">Use Cases</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4 tracking-tight">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500 font-normal">
<li><a className="hover:text-zinc-900 transition-colors" href="#">About</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4 tracking-tight">Legal</h4>
<ul className="space-y-3 text-sm text-zinc-500 font-normal">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-100 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-normal text-zinc-400">
<p>© 2024 Odito AI. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-zinc-900 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:link-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden opacity-0 transition-opacity duration-300" id="login-modal">
<div className="absolute inset-0 bg-white/60 backdrop-blur-sm" onclick="toggleModal('login-modal')"></div>
<div className="absolute inset-y-0 right-0 w-full max-w-md bg-white border-l border-zinc-200 shadow-2xl flex flex-col transform translate-x-full transition-transform duration-300" id="login-panel">
<div className="p-6 flex justify-between items-center border-b border-zinc-100">
<span className="text-lg font-semibold tracking-tighter">ODITO</span>
<button className="text-zinc-400 hover:text-zinc-900 transition-colors p-1 rounded-md hover:bg-zinc-100" onclick="toggleModal('login-modal')">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="p-8 flex-1 flex flex-col justify-center">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-2">Welcome back</h2>
<p className="text-sm text-zinc-500 mb-6">Enter your details to access your dashboard.</p>
<button className="w-full bg-white border border-zinc-200 text-zinc-700 py-2.5 rounded-xl text-sm font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm flex items-center justify-center gap-2 mb-6" type="button">
<iconify-icon className="text-base text-zinc-900" icon="ri:google-fill"></iconify-icon>
                    Continue with Google
                </button>
<div className="flex items-center mb-6">
<div className="flex-1 border-t border-zinc-200"></div>
<span className="px-3 text-xs text-zinc-400 font-medium">or</span>
<div className="flex-1 border-t border-zinc-200"></div>
</div>
<form className="space-y-4">
<div>
<label className="block text-sm font-medium text-zinc-700 mb-1">Email</label>
<input className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-sm focus:ring-2 focus:ring-[#D9FF50] focus:border-[#D9FF50] outline-none transition-all placeholder:text-zinc-400" placeholder="name@company.com" type="email"/>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<label className="block text-sm font-medium text-zinc-700">Password</label>
<a className="text-xs text-zinc-500 hover:text-zinc-900" href="#">Forgot password?</a>
</div>
<input className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-sm focus:ring-2 focus:ring-[#D9FF50] focus:border-[#D9FF50] outline-none transition-all placeholder:text-zinc-400" placeholder="••••••••" type="password"/>
</div>
<button className="w-full mt-6 bg-zinc-900 text-white py-3 rounded-xl text-sm font-medium hover:bg-zinc-800 transition-colors shadow-sm" type="button">
                        Sign in
                    </button>
</form>
<p className="text-center text-sm text-zinc-500 mt-8">
                    Don't have an account? <a className="text-zinc-900 font-medium hover:underline" href="#" onclick="toggleModal('login-modal'); setTimeout(() =&gt; toggleModal('signup-modal'), 300)">Sign up</a>
</p>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden opacity-0 transition-opacity duration-300" id="signup-modal">
<div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm" onclick="toggleModal('signup-modal')"></div>
<div className="absolute inset-4 md:inset-10 bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col md:flex-row transform scale-95 transition-transform duration-300" id="signup-panel">

<div className="hidden md:flex w-5/12 bg-zinc-50 relative p-10 flex-col justify-between border-r border-zinc-200 overflow-hidden">
<div className="absolute inset-0 bg-grid opacity-50 z-0 pointer-events-none"></div>
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-zinc-50 z-0"></div>
<div className="relative z-10">
<span className="text-2xl font-semibold tracking-tighter text-zinc-900">ODITO</span>
</div>
<div className="relative z-10 max-w-sm mb-10">
<h3 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4 leading-tight">Control your narrative in the age of AI.</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">Join thousands of brands actively monitoring and improving their presence across ChatGPT, Gemini, and Claude.</p>
</div>
</div>

<div className="w-full md:w-7/12 p-6 md:p-12 lg:p-20 relative flex flex-col justify-center overflow-y-auto">
<button className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-900 transition-colors p-2 rounded-full hover:bg-zinc-100" onclick="toggleModal('signup-modal')">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<div className="max-w-md w-full mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-2">Create an account</h2>
<p className="text-sm text-zinc-500 mb-6">Start your 14-day free trial. No credit card required.</p>
<button className="w-full bg-white border border-zinc-200 text-zinc-700 py-3 rounded-xl text-sm font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm flex items-center justify-center gap-2 mb-6" type="button">
<iconify-icon className="text-base text-zinc-900" icon="ri:google-fill"></iconify-icon>
                        Continue with Google
                    </button>
<div className="flex items-center mb-6">
<div className="flex-1 border-t border-zinc-200"></div>
<span className="px-3 text-xs text-zinc-400 font-medium">or</span>
<div className="flex-1 border-t border-zinc-200"></div>
</div>
<form className="space-y-5">
<div>
<label className="block text-sm font-medium text-zinc-700 mb-1.5">Full Name</label>
<input className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:ring-2 focus:ring-[#D9FF50] focus:border-[#D9FF50] outline-none transition-all placeholder:text-zinc-400" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-zinc-700 mb-1.5">Work Email</label>
<input className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:ring-2 focus:ring-[#D9FF50] focus:border-[#D9FF50] outline-none transition-all placeholder:text-zinc-400" placeholder="jane@company.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-zinc-700 mb-1.5">Password</label>
<input className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:ring-2 focus:ring-[#D9FF50] focus:border-[#D9FF50] outline-none transition-all placeholder:text-zinc-400" placeholder="At least 8 characters" type="password"/>
</div>
<button className="w-full mt-8 bg-zinc-900 text-white py-3.5 rounded-xl text-sm font-medium hover:bg-zinc-800 hover:shadow-lg transition-all shadow-sm" type="button">
                            Create Account
                        </button>
</form>
<p className="text-center text-sm text-zinc-500 mt-8">
                        Already have an account? <a className="text-zinc-900 font-medium hover:underline" href="#" onclick="toggleModal('signup-modal'); setTimeout(() =&gt; toggleModal('login-modal'), 300)">Log in</a>
</p>
</div>
</div>
</div>
</div>


    </>
  );
}
