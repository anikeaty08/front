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



        // Intersection Observer for Reveal on Scroll inside phones
        const observerOptions = {
            root: null, // relative to viewport
            threshold: 0.1,
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, observerOptions);

        // Select elements inside the phone scroll containers
        document.querySelectorAll('.reveal-element, .text-clip-anim span').forEach(el => {
            observer.observe(el);
        });

        // Flashlight Effect Logic
        const cards = document.querySelectorAll('.flashlight-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // Text Clip Animation Logic (Injecting spans if not manually done)
        // Note: In the HTML above I added classes. 
        // For the "Letter by letter" animation specifically requested for headings:
        const headings = document.querySelectorAll('.text-clip-anim');
        headings.forEach(heading => {
             // Logic to ensure animation triggers when viewed is handled by CSS 'both' and keyframes
             // Since I manually set staggered delays in HTML for specific spans, this is covered.
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px]"></div>
</div>

<main className="relative z-10 flex flex-wrap justify-center items-center gap-[40px] w-full max-w-[1400px]">

<div className="relative w-[393px] h-[852px] bg-black rounded-[55px] border-[8px] border-neutral-800 phone-shadow overflow-hidden flex flex-col group/phone">

<div className="absolute top-2 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-full z-50"></div>

<div className="w-full h-full bg-neutral-900 overflow-y-auto no-scrollbar scroll-smooth relative" id="phone1-content">

<div className="sticky top-0 z-40 bg-neutral-900/80 backdrop-filter backdrop-blur-lg border-b border-white/5 px-6 py-4 pt-12 flex justify-between items-center">
<span className="font-heading font-semibold tracking-tight text-xl">Aura</span>
<iconify-icon className="text-white" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</div>
<div className="p-6 space-y-12 pb-20">

<section className="reveal-element">
<div className="flex items-baseline gap-2 mb-2 text-indigo-400 font-mono text-xs tracking-widest">
                            01
                        </div>
<h2 className="font-heading font-semibold text-[32px] leading-tight tracking-tight mb-4">
                            Intelligent <br/><span className="text-neutral-500">Silence.</span>
</h2>
<p className="font-body text-neutral-400 text-lg leading-relaxed">
                            Aura filters the noise. Only notifications that matter break through the barrier.
                        </p>

<div className="mt-8 relative w-full overflow-hidden h-[120px] mask-gradient-x">
<div className="absolute flex gap-4 animate-marquee whitespace-nowrap">

<div className="w-[200px] h-[100px] glass-panel rounded-xl flex items-center justify-center border border-white/10">
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-500" icon="solar:bell-off-linear" width="24"></iconify-icon>
<span className="text-neutral-500 font-medium">Muted</span>
</div>
</div>
<div className="w-[200px] h-[100px] glass-panel rounded-xl flex items-center justify-center border border-indigo-500/30 bg-indigo-500/5">
<div className="flex items-center gap-3">
<iconify-icon className="text-indigo-400" icon="solar:bell-bing-bold-duotone" width="24"></iconify-icon>
<span className="text-white font-medium">Priority</span>
</div>
</div>
<div className="w-[200px] h-[100px] glass-panel rounded-xl flex items-center justify-center border border-white/10">
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-500" icon="solar:shield-check-linear" width="24"></iconify-icon>
<span className="text-neutral-500 font-medium">Secure</span>
</div>
</div>

<div className="w-[200px] h-[100px] glass-panel rounded-xl flex items-center justify-center border border-white/10">
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-500" icon="solar:bell-off-linear" width="24"></iconify-icon>
<span className="text-neutral-500 font-medium">Muted</span>
</div>
</div>
<div className="w-[200px] h-[100px] glass-panel rounded-xl flex items-center justify-center border border-indigo-500/30 bg-indigo-500/5">
<div className="flex items-center gap-3">
<iconify-icon className="text-indigo-400" icon="solar:bell-bing-bold-duotone" width="24"></iconify-icon>
<span className="text-white font-medium">Priority</span>
</div>
</div>
</div>
</div>
</section>

<section className="reveal-element">
<div className="flex items-baseline gap-2 mb-2 text-purple-400 font-mono text-xs tracking-widest">
                            02
                        </div>
<h2 className="font-heading font-semibold text-[32px] leading-tight tracking-tight mb-4">
                            Deep <br/><span className="text-neutral-500">Context.</span>
</h2>
<p className="font-body text-neutral-400 text-lg leading-relaxed mb-6">
                            AI summarization that understands nuance, tone, and urgency.
                        </p>

<div className="flashlight-card h-[180px] rounded-2xl border border-white/10 p-6 flex flex-col justify-between" id="card-context">
<div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
<iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</div>
<div className="space-y-2">
<div className="h-2 w-3/4 bg-white/10 rounded"></div>
<div className="h-2 w-1/2 bg-white/10 rounded"></div>
<div className="h-2 w-full bg-white/5 rounded"></div>
</div>
</div>
</section>
</div>
</div>
</div>

<div className="relative w-[393px] h-[852px] bg-black rounded-[55px] border-[8px] border-neutral-800 phone-shadow overflow-hidden flex flex-col z-20">

<div className="absolute top-2 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-full z-50 flex items-center justify-center gap-3 px-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
</div>

<div className="w-full h-full bg-neutral-900 relative overflow-y-auto no-scrollbar" id="phone2-content">

<div className="absolute top-0 left-0 w-full h-[600px] pointer-events-none opacity-40">
<svg className="w-full h-full" fill="none" viewbox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
<path className="noodle-path" d="M-50 100 C 100 100, 200 300, 450 200" stroke="url(#paint0_linear)" strokeWidth="2"></path>
<path className="noodle-path" d="M-50 150 C 150 100, 100 400, 450 300" stroke="url(#paint1_linear)" strokeWidth="2" style={{animationDelay: '0.5s'}}></path>
<path className="noodle-path" d="M-50 200 C 120 180, 180 500, 450 400" stroke="url(#paint0_linear)" strokeWidth="1" style={{animationDelay: '1s'}}></path>
<defs>
<lineargradient id="paint0_linear" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#4F46E5"></stop>
<stop offset="100%" stop-color="#9333EA"></stop>
</lineargradient>
<lineargradient id="paint1_linear" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#9333EA"></stop>
<stop offset="100%" stop-color="#EC4899"></stop>
</lineargradient>
</defs>
</svg>
</div>

<div className="relative z-10 flex justify-between items-center p-6 pt-14">
<div className="text-2xl font-bold tracking-tighter">aura.</div>
<button className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Sign In</button>
</div>

<div className="relative z-10 px-6 mt-16 flex flex-col gap-6">
<h1 className="font-heading font-semibold text-[72px] leading-[0.9] tracking-tighter text-white text-clip-anim">
<span style={{animationDelay: '0.1s'}}>PURE</span><br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-purple-300 animate-scale-text" style={{animationDelay: '0.2s'}}>FOCUS.</span>
</h1>
<p className="font-body text-lg text-neutral-400 leading-snug max-w-[80%] reveal-element" style={{transitionDelay: '0.4s'}}>
                        Experience clarity. The chat app designed to remove clutter and amplify connection.
                    </p>

<div className="flex flex-col gap-4 mt-8 w-full reveal-element" style={{transitionDelay: '0.6s'}}>
<button className="group relative w-full h-[56px] rounded-full bg-white text-black font-semibold text-lg overflow-hidden flex items-center justify-center">
<span className="relative z-10">Get Aura Early</span>

<div className="absolute inset-0 rounded-full border border-white/20"></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white blur-md"></div>
</button>
<button className="w-full h-[56px] rounded-full border border-neutral-700 text-neutral-300 font-medium text-lg flex items-center justify-center hover:bg-neutral-800 transition-colors">
<span className="flex items-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                                Watch Film
                            </span>
</button>
</div>
</div>

<div className="mt-20 px-4 reveal-element" style={{transitionDelay: '0.8s'}}>
<div className="w-full aspect-[4/3] relative perspective-1000 group">

<div className="absolute inset-0 bg-neutral-800/50 backdrop-blur-md border border-white/10 rounded-2xl p-4 transform transition-all duration-700 ease-out hover:rotate-y-12 hover:scale-105 origin-center shadow-2xl flex flex-col items-center justify-center text-center">
<div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl mb-3 shadow-lg shadow-indigo-500/20 flex items-center justify-center">
<iconify-icon className="text-white text-2xl" icon="solar:chat-round-dots-bold"></iconify-icon>
</div>
<h3 className="font-heading text-xl">Unified Inbox</h3>
<p className="text-sm text-neutral-500 mt-2">Slack, Discord, iMessage. One place.</p>
</div>
</div>

<div className="flex justify-between items-center mt-8 px-2 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon icon="simple-icons:vercel" width="24"></iconify-icon>
<iconify-icon icon="simple-icons:stripe" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:linear" width="24"></iconify-icon>
<iconify-icon icon="simple-icons:openai" width="24"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="relative w-[393px] h-[852px] bg-black rounded-[55px] border-[8px] border-neutral-800 phone-shadow overflow-hidden flex flex-col">

<div className="absolute top-2 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-full z-50"></div>
<div className="w-full h-full bg-neutral-900 overflow-y-auto no-scrollbar relative" id="phone3-content">
<div className="p-6 pt-16 pb-20 space-y-10">

<div className="reveal-element">
<div className="flex items-baseline gap-2 mb-2 text-pink-400 font-mono text-xs tracking-widest">
                            03
                        </div>
<h2 className="font-heading font-semibold text-[32px] leading-tight tracking-tight mb-2">
                            Simple <br/><span className="text-neutral-500">Pricing.</span>
</h2>
</div>

<div className="flex bg-neutral-800/50 p-1 rounded-full w-max mx-auto border border-white/5 reveal-element">
<button className="px-6 py-2 rounded-full bg-neutral-700 text-white text-sm font-medium shadow-sm transition-all">Monthly</button>
<button className="px-6 py-2 rounded-full text-neutral-400 text-sm font-medium hover:text-white transition-all">Yearly</button>
</div>

<div className="relative group reveal-element">
<div className="absolute -inset-0.5 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-3xl opacity-30 group-hover:opacity-60 transition duration-500 blur-sm"></div>
<div className="relative bg-neutral-900 rounded-[22px] border border-white/10 p-8 flex flex-col h-full">
<h3 className="font-heading text-2xl font-semibold mb-2">Pro</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold">$12</span>
<span className="text-neutral-500">/mo</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon>
                                    Unlimited history
                                </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon>
                                    AI Summaries
                                </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon>
                                    Priority Support
                                </li>
</ul>
<button className="w-full py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-colors">
                                Start Trial
                            </button>
</div>
</div>
<div className="border-t border-white/10 my-8"></div>

<footer className="text-center reveal-element">
<h4 className="font-heading font-bold text-2xl tracking-tight mb-6">aura.</h4>
<div className="flex justify-center gap-6 mb-8">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:twitter" width="20"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:instagram" width="20"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:github" width="20"></iconify-icon></a>
</div>
<p className="text-xs text-neutral-600 font-mono">
                            © 2024 Aura Inc.<br/>Designed for clarity.
                        </p>
</footer>
</div>
</div>
</div>
</main>


    </>
  );
}
