import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
}
});
}, { threshold: 0.1 });
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
const workflowSteps = document.querySelectorAll('.workflow-step-content');
const stepIndicators = document.querySelectorAll('.step-trigger');
const workflowImages = document.querySelectorAll('.workflow-img');
const stepObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const index = entry.target.getAttribute('data-step');
stepIndicators.forEach(ind => {
const line = ind.querySelector('.step-indicator');
if(ind.getAttribute('data-step') === index) {
line.style.height = '100%';
ind.querySelector('h3').classList.add('text-white');
ind.querySelector('h3').classList.remove('text-neutral-600');
} else {
line.style.height = '0%';
ind.querySelector('h3').classList.remove('text-white');
ind.querySelector('h3').classList.add('text-neutral-600');
}
});
workflowImages.forEach(img => {
if(img.getAttribute('data-step') === index) img.classList.add('active-img');
else img.classList.remove('active-img');
});
}
});
}, { threshold: 0.6, rootMargin: "-20% 0px -20% 0px" });
workflowSteps.forEach(step => stepObserver.observe(step));
});



                    (function (v, i, d, a, l, y, t, c, s) {
                        y='_'+d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}var vl='Loader',vli=v[y][vl],vsl=v[c][vl + 'Script'],vlf=v[c][vl + 'Loaded'],ve='Embed';
                        if (!vsl){vsl=function(u,cb){
                            if(t){cb();return;}s=i.createElement("script");s.type="text/javascript";s.async=1;s.src=u;
                            if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState=="complete"){s.onreadystatechange=null;vlf=1;cb();}};}else{s.onload=function(){vlf=1;cb();};}
                            i.getElementsByTagName("head")[0].appendChild(s);
                        };}
                        vsl(l+'loader.min.js',function(){if(!vli){var vlc=v[c][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){var vec=v[d][ve];t=new vec();t.run(a);});});
                    })(window, document, 'Vidalytics', 'vidalytics_embed_F96hQ6h1tcMYrWIk', 'https://fast.vidalytics.com/embeds/76K3H2u2/F96hQ6h1tcMYrWIk/');
                    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed top-0 w-full h-screen z-0">
<iframe frameborder="0" height="100%" src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/" width="100%"></iframe>
</div>
<div className="grid-overlay">
<div className="grid-inner">
<div className="grid-line-v"></div>
<div className="grid-line-v hidden md:block"></div>
<div className="grid-line-v hidden lg:block"></div>
<div className="grid-line-v"></div>
</div>
</div>
<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<div className="border-subtle bg-black/90 w-fit mx-auto border px-6 py-2 shadow-2xl backdrop-blur-xl rounded-full flex items-center justify-center">
<div className="text-xl text-white uppercase flex items-center justify-center gap-2 tracking-tighter font-space-grotesk font-light">
<div className="w-1.5 h-1.5 bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                CLIPCUT
            </div>
</div>
</nav>
<section className="md:pt-40 md:pb-24 pt-32 pb-16 relative z-10">
<div className="container max-w-7xl mx-auto px-4 relative">
<div className="flex flex-col text-center mb-16 items-center justify-center">
<h1 className="uppercase leading-[1.05] flex flex-col items-center md:text-6xl text-4xl font-semibold text-white tracking-tighter mb-8 font-space-grotesk font-light">
<span className="block">Scale to <span className="text-gradient">50K Views per video</span></span>
<span className="block text-neutral-500 mt-2">Book 10-30 more calls per month</span>
</h1>
<p className="max-w-2xl text-neutral-400 text-sm md:text-base mb-12 uppercase tracking-[0.2em]">Infrastructure for high-ticket content creators</p>
</div>
<div className="max-w-5xl mx-auto mb-24 relative z-20 group">
<div className="bg-[#0a0a0a] border border-white/10 rounded-sm overflow-hidden relative shadow-2xl aspect-video">
<div id="vidalytics_embed_F96hQ6h1tcMYrWIk" style={{width: '100%', height: '100%'}}></div>

</div>
</div>
</div>
</section>

<div className="border-y border-subtle bg-black/50 w-full pt-8 pb-8 relative backdrop-blur-sm overflow-hidden z-10">
<div className="flex animate-marquee gap-8">
<div className="client-pill"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Adam"/><div className="info"><span className="text-sm font-semibold text-white font-space-grotesk">Adam Hager</span><span className="text-xs text-neutral-500">@adam_airpreneur</span></div></div>
<div className="client-pill"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Steven"/><div className="info"><span className="text-sm font-semibold text-white font-space-grotesk">Steven Bartlett</span><span className="text-xs text-neutral-500">@thediaryofaceo</span></div></div>
<div className="client-pill"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel"/><div className="info"><span className="text-sm font-semibold text-white font-space-grotesk">Daniel Iles</span><span className="text-xs text-neutral-500">@danieliles</span></div></div>
<div className="client-pill"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=David"/><div className="info"><span className="text-sm font-semibold text-white font-space-grotesk">David Omari</span><span className="text-xs text-neutral-500">@davidomari</span></div></div>
<div className="client-pill"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Whop"/><div className="info"><span className="text-sm font-semibold text-white font-space-grotesk">Whop</span><span className="text-xs text-neutral-500">Partner</span></div></div>

<div className="client-pill"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Adam"/><div className="info"><span className="text-sm font-semibold text-white font-space-grotesk">Adam Hager</span><span className="text-xs text-neutral-500">@adam_airpreneur</span></div></div>
<div className="client-pill"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Steven"/><div className="info"><span className="text-sm font-semibold text-white font-space-grotesk">Steven Bartlett</span><span className="text-xs text-neutral-500">@thediaryofaceo</span></div></div>
<div className="client-pill"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel"/><div className="info"><span className="text-sm font-semibold text-white font-space-grotesk">Daniel Iles</span><span className="text-xs text-neutral-500">@danieliles</span></div></div>
</div>
</div>

<section className="max-w-7xl mx-auto py-32 px-4 relative z-10">
<div className="mb-16">
<h2 className="text-4xl uppercase font-light text-white tracking-tighter font-space-grotesk">Stop fighting the algorithm.</h2>
<p className="text-neutral-500 mt-4 uppercase tracking-widest text-xs">The three main reasons you aren't scaling</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1">
<div className="bg-[#050505] border border-subtle p-10 min-h-[320px] relative group hover:bg-[#080808] transition-all">
<div className="absolute top-10 right-10 text-[10px] text-white/20 font-mono">01/STRATEGY</div>
<iconify-icon className="text-3xl text-neutral-400 mb-8" icon="solar:chart-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl text-white mb-4 font-space-grotesk uppercase tracking-tight">Ghost Views</h3>
<p className="text-sm text-neutral-500 font-geist leading-relaxed">Getting views but zero conversions? We fix the bridge between your content and your booking link.</p>
</div>
<div className="bg-[#050505] border border-subtle p-10 min-h-[320px] relative group hover:bg-[#080808] transition-all">
<div className="absolute top-10 right-10 text-[10px] text-white/20 font-mono">02/OPS</div>
<iconify-icon className="text-3xl text-neutral-400 mb-8" icon="solar:settings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl text-white mb-4 font-space-grotesk uppercase tracking-tight">Creative Burnout</h3>
<p className="text-sm text-neutral-500 font-geist leading-relaxed">If you spend more than 2 hours a week on content, your systems are broken. We handle everything but the filming.</p>
</div>
<div className="bg-[#050505] border border-subtle p-10 min-h-[320px] relative group hover:bg-[#080808] transition-all">
<div className="absolute top-10 right-10 text-[10px] text-white/20 font-mono">03/MESSAGING</div>
<iconify-icon className="text-3xl text-neutral-400 mb-8" icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl text-white mb-4 font-space-grotesk uppercase tracking-tight">Market Noise</h3>
<p className="text-sm text-neutral-500 font-geist leading-relaxed">Your content sounds like everyone else's. We build a unique "Winning Format" that belongs only to you.</p>
</div>
</div>
</section>

<section className="relative z-10 py-32 border-t border-subtle">
<div className="max-w-7xl mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-20">
<div className="relative">
<div className="sticky top-40 space-y-12">
<div className="step-trigger" data-step="1">
<div className="relative pl-8">
<div className="step-indicator"></div>
<h3 className="text-3xl font-space-grotesk uppercase tracking-tight transition-colors duration-500 text-neutral-600">The Discovery Phase</h3>
<p className="text-sm text-neutral-500 mt-4 max-w-sm">We analyze your niche and competitors to find the whitespace they're missing.</p>
</div>
</div>
<div className="step-trigger" data-step="2">
<div className="relative pl-8">
<div className="step-indicator"></div>
<h3 className="text-3xl font-space-grotesk uppercase tracking-tight transition-colors duration-500 text-neutral-600">Infrastructure Setup</h3>
<p className="text-sm text-neutral-500 mt-4 max-w-sm">We implement the same editing and scripting frameworks used by Top 1% creators.</p>
</div>
</div>
<div className="step-trigger" data-step="3">
<div className="relative pl-8">
<div className="step-indicator"></div>
<h3 className="text-3xl font-space-grotesk uppercase tracking-tight transition-colors duration-500 text-neutral-600">The Growth Sprint</h3>
<p className="text-sm text-neutral-500 mt-4 max-w-sm">Testing 3 different winning formats to see which one brings the most qualified calls.</p>
</div>
</div>
</div>
</div>
<div className="space-y-[40vh]">
<div className="workflow-step-content min-h-[50vh]" data-step="1">
<div className="bg-[#0a0a0a] border border-subtle rounded-sm aspect-square p-8 overflow-hidden">
<img className="w-full h-full object-cover workflow-img active-img" data-step="1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f765b4fd-39b1-4ce6-9ccc-fa6a1022e408_320w.jpg"/>
</div>
</div>
<div className="workflow-step-content min-h-[50vh]" data-step="2">
<div className="bg-[#0a0a0a] border border-subtle rounded-sm aspect-square p-8 overflow-hidden">
<div className="w-full h-full bg-neutral-900 animate-pulse workflow-img" data-step="2"></div>
</div>
</div>
<div className="workflow-step-content min-h-[50vh]" data-step="3">
<div className="bg-[#0a0a0a] border border-subtle rounded-sm aspect-square p-8 overflow-hidden">
<div className="w-full h-full bg-neutral-800 animate-pulse workflow-img" data-step="3"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto py-32 px-4 relative z-10 border-t border-subtle">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
<div className="text-center">
<div className="text-5xl font-space-grotesk text-white mb-2">50M+</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest">Total Views Generated</div>
</div>
<div className="text-center">
<div className="text-5xl font-space-grotesk text-white mb-2">$12M+</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest">Client Revenue Tracked</div>
</div>
<div className="text-center">
<div className="text-5xl font-space-grotesk text-white mb-2">500+</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest">Winning Formats Tested</div>
</div>
<div className="text-center">
<div className="text-5xl font-space-grotesk text-white mb-2">24/7</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest">Operational Support</div>
</div>
</div>
<div className="scroll-mt-32 max-w-6xl mx-auto mb-32 relative z-20" id="booking">
<div className="text-center mb-16">
<h2 className="text-4xl uppercase font-light text-white tracking-tighter font-space-grotesk">Ready to build your infrastructure?</h2>
<p className="text-neutral-500 mt-4 uppercase tracking-widest text-xs">Select a time for your strategy audit</p>
</div>
<iframe scrolling="yes" src="https://api.leadconnectorhq.com/widget/booking/Z077YBj892btZ2BPZoem" style={{width: '100%', border: 'none', minHeight: '800px'}}></iframe>
</div>
</section>

<section className="max-w-3xl mx-auto py-32 px-4 relative z-10 border-t border-subtle">
<h2 className="text-3xl uppercase font-light text-white tracking-tighter font-space-grotesk mb-12 text-center">Frequently Asked</h2>
<div className="space-y-4">
<details className="group bg-[#050505] border border-subtle p-6 transition-all cursor-pointer">
<summary className="flex justify-between items-center text-white font-space-grotesk text-sm uppercase tracking-tight">
                    How much time do I need to commit?
                    <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-neutral-500 text-xs mt-4 leading-relaxed font-geist">Approximately 90-120 minutes per week. We handle everything else from scripting to posting.</p>
</details>
<details className="group bg-[#050505] border border-subtle p-6 transition-all cursor-pointer">
<summary className="flex justify-between items-center text-white font-space-grotesk text-sm uppercase tracking-tight">
                    Do you guarantee results?
                    <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-neutral-500 text-xs mt-4 leading-relaxed font-geist">Our performance-based models are built on hitting specific KPI benchmarks discussed during our audit.</p>
</details>
</div>
</section>
<footer className="border-t border-subtle bg-black pt-20 pb-10 relative z-10">
<div className="container mx-auto px-4 max-w-7xl">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
<div className="text-3xl text-white uppercase flex items-center gap-3 tracking-tighter font-space-grotesk font-light">
<div className="w-2 h-2 bg-neutral-500"></div>
                    CLIPCUT
                </div>
<div className="flex gap-12 text-[10px] font-geist-mono text-neutral-500 uppercase tracking-widest">
<a className="hover:text-white transition-colors" href="#booking">Booking</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">YouTube</a>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono uppercase tracking-widest text-neutral-600">
<p>© 2026 ClipCut LTD // Growth Systems</p>
<p>London — New York — Dubai</p>
</div>
</div>
</footer>

    </>
  );
}
