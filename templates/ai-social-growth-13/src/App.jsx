import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



/*
Sequence animation on scroll when visible.
*/
(function () {
// Inject CSS for paused/running states
const style = document.createElement("style");
style.textContent = `
/* Default: paused */
.animate-on-scroll { animation-play-state: paused !important; }
/* Activated by JS */
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el); // observing twice is a no-op
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



document.addEventListener("DOMContentLoaded", () => {
// 1. General Observer (Using user provided script mostly, this remains for counters only)
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
if (entry.target.classList.contains('counter-trigger')) startCounters(entry.target);
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1 });
document.querySelectorAll(".counter-trigger").forEach((el) => observer.observe(el));
// 2. Counters
function startCounters(container) {
container.querySelectorAll('[data-target]').forEach(counter => {
const target = parseFloat(counter.getAttribute('data-target'));
const suffix = counter.getAttribute('data-suffix') || '';
const prefix = counter.getAttribute('data-prefix') || '';
let start = 0;
const duration = 1500;
const startTime = performance.now();
function update(t) {
const p = Math.min((t - startTime) / duration, 1);
const ease = 1 - Math.pow(1 - p, 4);
counter.innerText = prefix + (target * ease).toFixed(target % 1 === 0 ? 0 : 1) + suffix;
if (p < 1) requestAnimationFrame(update);
}
requestAnimationFrame(update);
});
}
// 3. Text Reveal
const textSection = document.getElementById('scroll-reveal-section');
const words = document.querySelectorAll('.reveal-word');
if (textSection) {
window.addEventListener('scroll', () => {
const rect = textSection.getBoundingClientRect();
const winH = window.innerHeight;
const startReveal = winH * 0.9;
const endReveal = winH * 0.4;
let progress = (startReveal - rect.top) / (startReveal - endReveal);
progress = Math.max(0, Math.min(1, progress));
const activeCount = Math.floor(progress * words.length);
words.forEach((w, i) => i < activeCount ? w.classList.add('active') : w.classList.remove('active'));
});
}
// 4. Workflow Steps Observer
const workflowSteps = document.querySelectorAll('.workflow-step-content');
const stepIndicators = document.querySelectorAll('.step-trigger');
const workflowImages = document.querySelectorAll('.workflow-img');
const stepObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const index = entry.target.getAttribute('data-step');
stepIndicators.forEach(ind => {
const line = ind.querySelector('.step-indicator');
const text = ind.querySelector('.step-text');
if(ind.getAttribute('data-step') === index) {
line.classList.add('active');
text.classList.add('active');
} else {
line.classList.remove('active');
text.classList.remove('active');
}
});
workflowImages.forEach(img => {
if(img.getAttribute('data-step') === index) {
img.classList.remove('opacity-0', 'scale-95');
img.classList.add('opacity-100', 'scale-100');
} else {
img.classList.add('opacity-0', 'scale-95');
img.classList.remove('opacity-100', 'scale-100');
}
});
}
});
}, { rootMargin: "-40% 0px -40% 0px" });
workflowSteps.forEach(step => stepObserver.observe(step));
});



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ZHhDKfVqqu8PKOSMwfuA"></div>

</div></div>

<div className="grid-overlay">
<div className="grid-inner">
<div className="grid-line-v"></div>
<div className="grid-line-v hidden md:block"></div>
<div className="grid-line-v hidden lg:block"></div>
<div className="grid-line-v"></div>
</div>
</div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div className="border-subtle flex bg-black/90 w-full max-w-4xl border pt-2 pr-2 pb-2 pl-2 shadow-2xl backdrop-blur-xl gap-x-1 gap-y-1 items-center justify-between">
<a className="bg-white/5 hover:bg-white/10 px-5 py-2 text-xs tracking-widest uppercase transition-all text-neutral-300 font-geist" href="#">Salience.ai</a>
<div className="hidden md:flex items-center gap-1">
<a className="hover:text-white px-4 py-2 text-xs tracking-widest uppercase transition-colors text-neutral-500 font-geist" href="#strategy">Strategy</a>
<a className="hover:text-white px-4 py-2 text-xs tracking-widest uppercase transition-colors text-neutral-500 font-geist" href="#workflows">Workflows</a>
</div>
<div className="px-6 text-xl text-white uppercase flex items-center gap-2 tracking-tighter font-space-grotesk font-light">
<div className="w-1.5 h-1.5 bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                SEARCH SALIENCE
            </div>
<div className="hidden md:flex items-center gap-1">
<a className="hover:text-white px-4 py-2 text-xs tracking-widest uppercase transition-colors text-neutral-500 font-geist" href="#results">Results</a>
<a className="hover:text-white px-4 py-2 text-xs tracking-widest uppercase transition-colors text-neutral-500 font-geist" href="#contact">Contact</a>
</div>
<a className="group relative bg-white text-black px-6 py-2 text-xs font-semibold tracking-widest uppercase transition-transform overflow-hidden" href="#contact">
<span className="relative z-10 font-geist">Book Call</span>
<div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left bg-neutral-200"></div>
</a>
</div>
</nav>

<section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden z-10">
<div className="container mx-auto px-4 relative max-w-7xl">
<div className="flex flex-col text-center mb-24 relative space-y-0 items-center justify-center">

<div className="absolute -left-4 md:left-20 top-0 flex flex-col gap-2 opacity-30 hidden lg:flex [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
<span className="text-[10px] uppercase tracking-widest text-neutral-500 font-geist">Ver. 2.4</span>
<div className="w-px h-12 bg-gradient-to-b to-transparent from-neutral-500"></div>
</div>
<div className="flex flex-col z-10 w-full items-center justify-center">
<h1 className="uppercase leading-[0.85] flex flex-wrap justify-center gap-x-4 md:text-9xl md:gap-x-8 text-6xl font-semibold text-white tracking-tighter mt-8 mb-0">
<span className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll tracking-tighter font-space-grotesk font-light">Algorithm</span>
<span className="text-gradient [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll font-light tracking-tighter font-space-grotesk">Dominance</span>
</h1>
</div>
<div className="flex flex-col md:flex-row md:mt-12 md:mb-12 z-10 w-full mt-10 mb-8 gap-x-6 gap-y-6 items-center justify-center">

<div className="[animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll group my-8 relative">
<div className="beam-border"></div>
<div className="border-subtle flex group-hover:bg-[#0a0a0a] transition-colors md:h-16 bg-[#080808] h-12 z-10 border rounded-full mt-[1px] mr-[1px] mb-[1px] ml-[1px] pr-6 pl-3 relative gap-x-4 gap-y-4 items-center">
<div className="md:w-10 md:h-10 overflow-hidden flex border-subtle text-white bg-neutral-900 w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f6038cb-af1c-4483-97bc-dd58d89c36ef_320w.jpg)] bg-cover bg-center border rounded-full relative items-center justify-center">
<iconify-icon className="text-lg text-white" icon="solar:bot-line-duotone"></iconify-icon>
</div>
<div className="flex flex-col text-left">
<span className="text-[10px] uppercase tracking-widest text-neutral-500 font-geist">AI_Status</span>
<span className="text-xs md:text-sm leading-none text-white font-geist">Optimizing</span>
</div>
</div>
</div>
<h2 className="[animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll text-lg text-neutral-400 tracking-tight font-space-grotesk md:text-3xl">
                        Automated Business Growth Strategies
                    </h2>
</div>
<div className="leading-relaxed [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll md:text-2xl text-xs text-neutral-500 font-space-grotesk text-center max-w-lg">We leverage predictive AI to grow your social presence, automate engagement, and turn attention into revenue.</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 max-w-6xl mx-auto counter-trigger [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">

<div className="bg-[#050505] border border-subtle p-8 flex flex-col justify-between min-h-[220px] relative group hover:border-white/10 transition-colors">
<div className="absolute top-4 right-4 text-xs text-white/20 font-geist">01</div>
<div className="flex justify-between items-start">
<iconify-icon className="text-2xl text-neutral-300" icon="solar:chart-2-bold-duotone"></iconify-icon>
<div className="px-2 py-0.5 border border-green-900/30 bg-green-900/10 text-green-400 text-[10px] uppercase tracking-wider font-geist">Live</div>
</div>
<div className="">
<div className="text-4xl text-white mb-1 tracking-tighter font-space-grotesk font-light">
<span data-prefix="+" data-suffix="%" data-target="400">+500</span>
</div>
<h3 className="text-xs uppercase tracking-widest text-neutral-500 font-geist">Reach Lift</h3>
</div>
</div>

<div className="bg-[#050505] border border-subtle p-8 flex flex-col justify-between min-h-[220px] relative group hover:border-white/10 transition-colors">
<div className="absolute top-4 right-4 text-xs text-white/20 font-geist">02</div>
<div className="flex justify-between items-start">
<iconify-icon className="text-2xl text-neutral-300" icon="solar:users-group-two-rounded-bold-duotone"></iconify-icon>
</div>
<div className="">
<div className="text-4xl text-white mb-1 tracking-tighter font-space-grotesk font-light">
<span className="" data-suffix="k" data-target="12.5">12.5k</span>
</div>
<h3 className="text-xs uppercase tracking-widest text-neutral-500 font-geist">Leads Generated</h3>
</div>
</div>

<div className="bg-[#050505] border border-subtle p-8 flex flex-col justify-between min-h-[220px] relative group hover:border-white/10 transition-colors">
<div className="absolute top-4 right-4 text-xs text-white/20 font-geist">03</div>
<div className="flex justify-between items-start">
<iconify-icon className="text-2xl text-neutral-300" icon="solar:bolt-bold-duotone"></iconify-icon>
</div>
<div className="">
<div className="text-4xl text-white mb-1 tracking-tighter font-space-grotesk font-light">
<span data-suffix="x" data-target="10">10x</span>
</div>
<h3 className="text-xs uppercase tracking-widest text-neutral-500 font-geist">Execution Speed</h3>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-subtle overflow-hidden bg-black pt-32 pb-32 relative" id="scroll-reveal-section">
<div className="container mx-auto px-4 relative z-10">
<div className="max-w-6xl mx-auto text-center leading-tight">
<h2 className="text-3xl md:text-5xl tracking-tight uppercase leading-[1.3] font-semibold text-white">
<span className="reveal-word font-space-grotesk font-light">Stop</span> <span className="reveal-word font-space-grotesk font-light">guessing.</span> <span className="reveal-word font-space-grotesk font-light">Start</span>
<span className="reveal-word inline-flex align-middle bg-white/5 border border-subtle px-4 py-1 mx-1 text-white font-space-grotesk font-light">
<iconify-icon className="text-2xl mr-2 text-neutral-300" icon="solar:cpu-bold-duotone"></iconify-icon> Scaling
                    </span>
<span className="reveal-word font-space-grotesk font-light">with</span> <span className="reveal-word font-space-grotesk font-light">our</span>
<span className="reveal-word text-black bg-white px-4 py-1 mx-1 font-space-grotesk font-light">Neural Engine</span>
<span className="reveal-word font-space-grotesk font-light">that</span> <span className="reveal-word font-space-grotesk font-light">turns</span> <span className="reveal-word font-space-grotesk font-light">content</span> <span className="reveal-word font-space-grotesk font-light">into</span>
<span className="reveal-word inline-flex align-middle border border-subtle text-white px-4 py-1 mx-1">
<iconify-icon className="text-2xl" icon="solar:dollar-minimalistic-bold-duotone"></iconify-icon>
</span>
<span className="reveal-word font-space-grotesk font-light">predictable</span> <span className="reveal-word font-space-grotesk font-light">revenue.</span>
</h2>
</div>
</div>
</section>

<section className="z-10 border-subtle bg-black border-b relative" id="workflows">
<div className="container mx-auto px-4 max-w-7xl">
<div className="flex flex-col lg:flex-row">

<div className="lg:w-1/2 lg:h-screen sticky top-0 flex flex-col justify-center py-12 lg:py-0 pr-0 lg:pr-20 border-r border-subtle/0 lg:border-subtle">
<h2 className="text-5xl md:text-6xl uppercase mb-8 lg:mb-8 text-white tracking-tighter font-space-grotesk font-light">
                        Growth<br/><span className="text-neutral-600">Protocol</span>
</h2>

<div className="space-y-6 relative mb-12 hidden lg:block">

<div className="step-trigger group cursor-pointer flex items-center gap-6" data-step="1">
<div className="h-12 w-[2px] bg-neutral-800 relative overflow-hidden">
<div className="step-indicator absolute top-0 left-0 w-full h-full bg-white"></div>
</div>
<div className="">
<h3 className="text-xl uppercase tracking-widest text-white font-space-grotesk">01 / Trend Prediction</h3>
<p className="step-text text-sm text-neutral-500 font-geist">AI analyzes 50M+ data points daily.</p>
</div>
</div>

<div className="step-trigger group cursor-pointer flex items-center gap-6" data-step="2">
<div className="h-12 w-[2px] bg-neutral-800 relative overflow-hidden">
<div className="step-indicator absolute top-0 left-0 w-full h-full bg-white"></div>
</div>
<div>
<h3 className="text-xl uppercase tracking-widest text-white font-space-grotesk">02 / Content Generation</h3>
<p className="step-text text-sm text-neutral-500 font-geist">Auto-created viral hooks and scripts.</p>
</div>
</div>

<div className="step-trigger group cursor-pointer flex items-center gap-6" data-step="3">
<div className="h-12 w-[2px] bg-neutral-800 relative overflow-hidden">
<div className="step-indicator absolute top-0 left-0 w-full h-full bg-white"></div>
</div>
<div>
<h3 className="text-xl uppercase tracking-widest text-white font-space-grotesk">03 / Lead Conversion</h3>
<p className="step-text text-sm text-neutral-500 font-geist">Engagement turns into booked calls.</p>
</div>
</div>
</div>

<div className="w-full aspect-video bg-neutral-900 border border-subtle relative overflow-hidden rounded-sm hidden lg:block">

<div className="workflow-img absolute inset-0 transition-all duration-700 ease-out flex items-center justify-center bg-black" data-step="1">
<div className="absolute inset-0 bg-cover bg-center opacity-30 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/11443b2f-dfa8-4425-8445-0f952362cd0a_1600w.webp)]"></div>
<div className="relative z-10 text-center">
<iconify-icon className="text-4xl text-white mb-2" icon="solar:graph-new-bold-duotone"></iconify-icon>
<div className="text-xs font-mono text-green-400">ANALYZING VELOCITY...</div>
</div>
</div>

<div className="workflow-img absolute inset-0 transition-all duration-700 ease-out flex items-center justify-center bg-black" data-step="2">
<div className="absolute inset-0 bg-cover bg-center opacity-30 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1ed85ea2-299f-4bb8-845a-a01c814cadc5_1600w.webp)]"></div>
<div className="relative z-10 text-center">
<iconify-icon className="text-4xl text-white mb-2" icon="solar:pen-new-square-bold-duotone"></iconify-icon>
<div className="text-xs font-mono text-blue-400">GENERATING ASSETS...</div>
</div>
</div>

<div className="workflow-img absolute inset-0 transition-all duration-700 ease-out flex items-center justify-center bg-black" data-step="3">
<div className="absolute inset-0 bg-cover bg-center opacity-30 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a5122f84-43cb-4170-94c3-aded75f0d3ed_1600w.webp)]"></div>
<div className="relative z-10 text-center">
<iconify-icon className="text-4xl text-white mb-2" icon="solar:check-circle-bold-duotone"></iconify-icon>
<div className="text-xs font-mono text-purple-400">CONVERSION COMPLETE</div>
</div>
</div>
</div>
</div>

<div className="lg:w-1/2">

<div className="h-[20vh] hidden lg:block"></div>

<div className="workflow-step-content min-h-[50vh] lg:min-h-[80vh] flex flex-col justify-center px-0 lg:px-20 py-12 lg:py-20 border-b border-subtle" data-step="1">
<span className="text-6xl text-white/10 font-bold mb-6 font-space-grotesk">01</span>
<h3 className="text-3xl text-white mb-6 font-space-grotesk tracking-tight">Predictive Trend Analysis</h3>

<div className="w-full aspect-video bg-neutral-900 border border-subtle relative overflow-hidden rounded-sm mb-8 block lg:hidden">
<div className="absolute inset-0 flex items-center justify-center bg-black">
<div className="absolute inset-0 bg-cover bg-center opacity-30 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/11443b2f-dfa8-4425-8445-0f952362cd0a_1600w.webp)]"></div>
<div className="relative z-10 text-center">
<iconify-icon className="text-4xl text-white mb-2" icon="solar:graph-new-bold-duotone"></iconify-icon>
<div className="text-xs font-mono text-green-400">ANALYZING VELOCITY...</div>
</div>
</div>
</div>
<p className="text-neutral-400 leading-relaxed mb-8 font-geist">
                            Our neural networks scan social graphs in real-time, identifying micro-trends before they peak. This allows you to create content that rides the wave rather than chasing it.
                        </p>
<ul className="space-y-4 font-geist text-sm text-neutral-300">
<li className="flex items-center gap-3"><iconify-icon className="text-green-500" icon="solar:check-circle-bold-duotone"></iconify-icon> Sentiment Analysis</li>
<li className="flex items-center gap-3"><iconify-icon className="text-green-500" icon="solar:check-circle-bold-duotone"></iconify-icon> Competitor Mapping</li>
<li className="flex items-center gap-3"><iconify-icon className="text-green-500" icon="solar:check-circle-bold-duotone"></iconify-icon> Viral Coefficient Scoring</li>
</ul>
</div>

<div className="workflow-step-content min-h-[50vh] lg:min-h-[80vh] flex flex-col justify-center px-0 lg:px-20 py-12 lg:py-20 border-b border-subtle" data-step="2">
<span className="text-6xl text-white/10 font-bold mb-6 font-space-grotesk">02</span>
<h3 className="text-3xl text-white mb-6 font-space-grotesk tracking-tight">Generative Production</h3>

<div className="w-full aspect-video bg-neutral-900 border border-subtle relative overflow-hidden rounded-sm mb-8 block lg:hidden">
<div className="absolute inset-0 flex items-center justify-center bg-black">
<div className="absolute inset-0 bg-cover bg-center opacity-30 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1ed85ea2-299f-4bb8-845a-a01c814cadc5_1600w.webp)]"></div>
<div className="relative z-10 text-center">
<iconify-icon className="text-4xl text-white mb-2" icon="solar:pen-new-square-bold-duotone"></iconify-icon>
<div className="text-xs font-mono text-blue-400">GENERATING ASSETS...</div>
</div>
</div>
</div>
<p className="text-neutral-400 leading-relaxed mb-8 font-geist">
                            From script to edit, our agents handle the heavy lifting. We generate high-retention video assets tailored to specific platform algorithms (TikTok, Reels, LinkedIn).
                        </p>
<ul className="space-y-4 font-geist text-sm text-neutral-300">
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-bold-duotone"></iconify-icon> AI Voice &amp; Avatar</li>
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-bold-duotone"></iconify-icon> Auto-Captioning</li>
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-bold-duotone"></iconify-icon> A/B Thumbnail Testing</li>
</ul>
</div>

<div className="workflow-step-content min-h-[50vh] lg:min-h-[80vh] flex flex-col justify-center px-0 lg:px-20 py-12 lg:py-20" data-step="3">
<span className="text-6xl text-white/10 font-bold mb-6 font-space-grotesk">03</span>
<h3 className="text-3xl text-white mb-6 font-space-grotesk tracking-tight">Revenue Conversion</h3>

<div className="w-full aspect-video bg-neutral-900 border border-subtle relative overflow-hidden rounded-sm mb-8 block lg:hidden">
<div className="absolute inset-0 flex items-center justify-center bg-black">
<div className="absolute inset-0 bg-cover bg-center opacity-30 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a5122f84-43cb-4170-94c3-aded75f0d3ed_1600w.webp)]"></div>
<div className="relative z-10 text-center">
<iconify-icon className="text-4xl text-white mb-2" icon="solar:check-circle-bold-duotone"></iconify-icon>
<div className="text-xs font-mono text-purple-400">CONVERSION COMPLETE</div>
</div>
</div>
</div>
<p className="text-neutral-400 leading-relaxed mb-8 font-geist">
                            Views are vanity; revenue is sanity. Our automated DM agents engage with comments and likes, qualifying leads and booking meetings directly into your calendar.
                        </p>
<ul className="space-y-4 font-geist text-sm text-neutral-300">
<li className="flex items-center gap-3"><iconify-icon className="text-purple-500" icon="solar:check-circle-bold-duotone"></iconify-icon> 24/7 Response Time</li>
<li className="flex items-center gap-3"><iconify-icon className="text-purple-500" icon="solar:check-circle-bold-duotone"></iconify-icon> CRM Integration</li>
<li className="flex items-center gap-3"><iconify-icon className="text-purple-500" icon="solar:check-circle-bold-duotone"></iconify-icon> Intent Classification</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black text-white pt-24 pb-12 border-t border-subtle relative z-10" id="results">
<div className="container max-w-7xl mx-auto px-4">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 pb-8 border-b border-subtle">
<div className="">
<h2 className="text-5xl md:text-7xl uppercase mb-2 text-white tracking-tighter font-space-grotesk font-light">Outputs</h2>
<p className="text-xs uppercase tracking-widest text-neutral-500 font-geist">/ Case Studies / Social ROI</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mb-20 items-stretch">

<div className="flex flex-col gap-1 h-full">
<div className="bg-white/[0.02] border border-subtle w-full aspect-[9/16] relative group overflow-hidden">
<div className="absolute top-4 right-4 z-20 text-[10px] text-white/50 border border-white/5 px-2 py-0.5 font-geist">MOBILE</div>
<img alt="Mobile" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity grayscale-0 hover:grayscale duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71ae419e-354a-46fa-ba8f-bf256f56ef97_1600w.webp"/>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-xl uppercase tracking-tight font-space-grotesk text-white">Vertical Scale</h3>
</div>
</div>
</div>

<div className="flex flex-col gap-1 h-full aspect-[9/16] md:aspect-auto">

<div className="relative flex-1 group overflow-hidden border border-subtle bg-white/[0.02]">
<div className="absolute top-4 right-4 z-20 text-[10px] text-white/50 border border-white/5 px-2 py-0.5 font-geist">WEB</div>
<img alt="Web" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity grayscale-0 hover:grayscale duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1cb81e0e-22cd-4d0a-ac80-d2e13d53b2fc_1600w.webp"/>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-xl uppercase tracking-tight font-space-grotesk text-white">Global Reach</h3>
</div>
</div>

<div className="relative flex-1 group overflow-hidden border border-subtle bg-white/[0.02]">
<div className="absolute top-4 right-4 z-20 text-[10px] text-white/50 border border-white/5 px-2 py-0.5 font-geist">AI</div>
<img alt="AI Process" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity grayscale-0 hover:grayscale duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/11443b2f-dfa8-4425-8445-0f952362cd0a_1600w.webp"/>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-xl uppercase tracking-tight font-space-grotesk text-white">Neural Process</h3>
</div>
</div>

<div className="relative flex-1 group overflow-hidden border border-subtle bg-white/[0.02]">
<div className="absolute top-4 right-4 z-20 text-[10px] text-white/50 border border-white/5 px-2 py-0.5 font-geist">DATA</div>
<img alt="Data" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity grayscale-0 hover:grayscale duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5045c0e4-a0e6-44f5-9ce2-f0aeec2f9b70_1600w.webp"/>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-xl uppercase tracking-tight font-space-grotesk text-white">Dashboard</h3>
</div>
</div>
</div>

<div className="flex flex-col gap-1 h-full">
<div className="bg-white/[0.02] border border-subtle w-full aspect-[9/16] relative group overflow-hidden">
<div className="absolute top-4 right-4 z-20 text-[10px] text-white/50 border border-white/5 px-2 py-0.5 font-geist">APP</div>
<img alt="App" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity grayscale-0 hover:grayscale duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/33ae44b1-a1a2-4c73-9849-2614de959a79_1600w.webp"/>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-xl uppercase tracking-tight font-space-grotesk text-white">App Install</h3>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-subtle overflow-hidden z-10 border-t pt-24 pb-24 relative">
<div className="container mx-auto px-4 max-w-7xl mb-12">
<h2 className="text-3xl md:text-5xl uppercase text-center text-white tracking-tighter font-space-grotesk font-light">
                Founder <span className="text-neutral-600">Feedback</span>
</h2>
</div>

<div className="marquee-container w-full relative overflow-hidden py-10">
<div className="flex w-[200%] marquee-content hover:[animation-play-state:paused]">

<div className="flex w-1/2 justify-around gap-6 px-4">

<div className="w-[400px] border border-subtle p-8 bg-[#050505] shrink-0">
<p className="text-sm leading-relaxed mb-6 text-neutral-300 font-geist">"Search Salience's AI workflows didn't just automate our posting, they fundamentally changed our acquisition strategy. We scaled to 1M impressions."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center">
<iconify-icon className="text-2xl text-white" icon="simple-icons:vercel"></iconify-icon>
</div>
<div><div className="text-xs text-white uppercase font-bold font-geist">Sarah Jenks</div><div className="text-[10px] text-neutral-500 uppercase font-geist">CMO, Vercel</div></div>
</div>
</div>

<div className="w-[400px] border border-subtle p-8 bg-[#050505] shrink-0">
<p className="text-sm leading-relaxed mb-6 text-neutral-300 font-geist">"The precision in targeting is unlike anything we've seen. We reduced our CPA by 40% while doubling our content output."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center">
<iconify-icon className="text-2xl text-white" icon="simple-icons:openai"></iconify-icon>
</div>
<div><div className="text-xs text-white uppercase font-bold font-geist">David K.</div><div className="text-[10px] text-neutral-500 uppercase font-geist">VP, OpenAI</div></div>
</div>
</div>

<div className="w-[400px] border border-subtle p-8 bg-[#050505] shrink-0">
<p className="text-sm leading-relaxed mb-6 text-neutral-300 font-geist">"Automated DM funnels are bringing us qualified leads while we sleep. The ROI was evident within the first 14 days."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center">
<iconify-icon className="text-2xl text-white" icon="simple-icons:stripe"></iconify-icon>
</div>
<div><div className="text-xs text-white uppercase font-bold font-geist">Elena R.</div><div className="text-[10px] text-neutral-500 uppercase font-geist">CEO, Stripe</div></div>
</div>
</div>
</div>

<div className="flex w-1/2 justify-around gap-6 px-4">

<div className="w-[400px] border border-subtle p-8 bg-[#050505] shrink-0">
<p className="text-sm leading-relaxed mb-6 text-neutral-300 font-geist">"Search Salience's AI workflows didn't just automate our posting, they fundamentally changed our acquisition strategy. We scaled to 1M impressions."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center">
<iconify-icon className="text-2xl text-white" icon="simple-icons:vercel"></iconify-icon>
</div>
<div><div className="text-xs text-white uppercase font-bold font-geist">Sarah Jenks</div><div className="text-[10px] text-neutral-500 uppercase font-geist">CMO, Vercel</div></div>
</div>
</div>

<div className="w-[400px] border border-subtle p-8 bg-[#050505] shrink-0">
<p className="text-sm leading-relaxed mb-6 text-neutral-300 font-geist">"The precision in targeting is unlike anything we've seen. We reduced our CPA by 40% while doubling our content output."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center">
<iconify-icon className="text-2xl text-white" icon="simple-icons:openai"></iconify-icon>
</div>
<div><div className="text-xs text-white uppercase font-bold font-geist">David K.</div><div className="text-[10px] text-neutral-500 uppercase font-geist">VP, OpenAI</div></div>
</div>
</div>

<div className="w-[400px] border border-subtle p-8 bg-[#050505] shrink-0">
<p className="text-sm leading-relaxed mb-6 text-neutral-300 font-geist">"Automated DM funnels are bringing us qualified leads while we sleep. The ROI was evident within the first 14 days."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center">
<iconify-icon className="text-2xl text-white" icon="simple-icons:stripe"></iconify-icon>
</div>
<div><div className="text-xs text-white uppercase font-bold font-geist">Elena R.</div><div className="text-[10px] text-neutral-500 uppercase font-geist">CEO, Stripe</div></div>
</div>
</div>
</div>
</div>
</div>

<div className="flex justify-center gap-3 mt-8">
<button className="w-2 h-2 bg-white rounded-full"></button>
<button className="w-2 h-2 bg-neutral-800 hover:bg-neutral-600 transition-colors rounded-full"></button>
<button className="w-2 h-2 bg-neutral-800 hover:bg-neutral-600 transition-colors rounded-full"></button>
</div>
</section>

<section className="border-subtle bg-center z-10 border-t pt-32 pb-32 relative">
<div className="container mx-auto px-4 text-center max-w-4xl">
<h2 className="md:text-8xl uppercase text-5xl font-light text-white tracking-tighter font-space-grotesk mix-blend-plus-lighter mb-8">
                Ready for <span className="text-neutral-600">Salience?</span>
</h2>
<p className="text-xl text-neutral-400 font-geist mix-blend-plus-lighter max-w-xl mr-auto mb-10 ml-auto">
    Join the 1% of brands leveraging autonomous growth infrastructure.
</p>
<div className="">
<a className="inline-block bg-white text-black px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors font-geist" href="#contact">
                    Audit My Strategy
                </a>
</div>
</div>
</section>

<section className="py-24 relative z-10 border-t border-subtle bg-black" id="contact">
<div className="container mx-auto px-4 max-w-6xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">

<div className="">
<h3 className="text-3xl uppercase text-white mb-6 tracking-tighter font-space-grotesk font-light">Initialize Contact</h3>
<p className="text-sm text-neutral-400 mb-8 leading-relaxed font-geist">
                        Fill out the parameters for your growth inquiry. Our AI agents will categorize your request and a human strategist will deploy a response within 24 hours.
                    </p>
<div className="space-y-4 font-geist-mono text-sm">
<div className="flex items-center gap-4 text-neutral-300">
<iconify-icon className="text-lg" icon="solar:letter-bold-duotone"></iconify-icon>
<span className="font-geist">hello@searchsalience.ai</span>
</div>
<div className="flex items-center gap-4 text-neutral-300">
<iconify-icon className="text-lg" icon="solar:map-point-bold-duotone"></iconify-icon>
<span className="font-geist">San Francisco, CA // Node 04</span>
</div>
</div>
</div>

<div className="">
<form className="space-y-8">
<div className="group relative">
<input className="outline-none focus:border-white transition-colors peer placeholder-transparent text-white font-geist-mono bg-transparent w-full border-neutral-800 border-b pt-3 pb-3" id="name" required="" type="text"/>
<label className="absolute left-0 -top-3 text-[10px] text-neutral-500 uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-600 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-white font-geist" htmlFor="name">Name</label>
</div>
<div className="group relative">
<input className="w-full bg-transparent border-b border-neutral-800 py-3 text-white outline-none focus:border-white transition-colors font-geist-mono peer placeholder-transparent" id="email" required="" type="email"/>
<label className="absolute left-0 -top-3 text-[10px] text-neutral-500 uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-600 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-white font-geist" htmlFor="email">Email Address</label>
</div>
<div className="group relative">
<textarea className="w-full bg-transparent border-b border-neutral-800 py-3 text-white outline-none focus:border-white transition-colors font-geist-mono peer placeholder-transparent resize-none" id="message" rows="3"></textarea>
<label className="absolute left-0 -top-3 text-[10px] text-neutral-500 uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-600 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-white font-geist" htmlFor="message">Project Data</label>
</div>
<button className="group flex items-center gap-4 text-white uppercase tracking-widest text-xs font-bold hover:text-neutral-300 transition-colors pt-4" type="submit">
<span className="font-geist">Transmit</span>
<iconify-icon className="transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-bold-duotone"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-subtle bg-black pt-12 pb-8 relative z-10">
<div className="container mx-auto px-4 max-w-7xl">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
<div className="text-xl text-white uppercase flex items-center gap-2 tracking-tighter font-space-grotesk font-light">
<div className="w-1.5 h-1.5 bg-neutral-500"></div>
                    SEARCH SALIENCE
                </div>
<div className="flex gap-8 text-xs font-geist-mono text-neutral-500 uppercase tracking-widest">
<a className="hover:text-white transition-colors font-geist" href="#">Privacy Protocol</a>
<a className="hover:text-white transition-colors font-geist" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors font-geist" href="#">System Status</a>
</div>
</div>
<div className="border-t border-subtle pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono uppercase tracking-widest text-neutral-600">
<p className="font-geist">© 2024 Search Salience Systems. // All Rights Reserved</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors flex items-center gap-2 font-geist" href="#"><iconify-icon className="text-sm" icon="prime:twitter"></iconify-icon> Twitter</a>
<a className="hover:text-white transition-colors flex items-center gap-2 font-geist" href="#"><iconify-icon className="text-sm" icon="prime:linkedin"></iconify-icon> LinkedIn</a>
<a className="hover:text-white transition-colors flex items-center gap-2 font-geist" href="#"><iconify-icon className="text-sm" icon="prime:instagram"></iconify-icon> Instagram</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
