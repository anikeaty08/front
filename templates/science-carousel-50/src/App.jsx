import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



function downloadSlide(btn) {
const card = btn.closest('.slide-card');
const originalContent = btn.innerHTML;
// Visual feedback
btn.innerHTML = '<iconify-icon icon="lucide:loader-2" width="16" class="animate-spin"></iconify-icon>';
btn.style.pointerEvents = 'none';
html2canvas(card, {
scale: 3, // High resolution
useCORS: true,
backgroundColor: '#0a0a0a', // Solid dark background to replace blur effect
logging: false,
allowTaint: true
}).then(canvas => {
const link = document.createElement('a');
link.download = 'slide.png';
link.href = canvas.toDataURL('image/png');
link.click();
// Reset button
btn.innerHTML = originalContent;
btn.style.pointerEvents = 'auto';
}).catch(err => {
console.error('Download failed', err);
btn.innerHTML = originalContent;
btn.style.pointerEvents = 'auto';
});
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="w-full flex flex-col items-center">

<section className="min-h-screen flex md:p-8 w-full pt-4 pr-4 pb-4 pl-4 items-center justify-center">
<div className="slide-card aspect-[3/4] w-full max-w-sm sm:max-w-md bg-neutral-900/50 rounded-3xl relative overflow-hidden flex flex-col justify-between p-8 backdrop-blur-md">

<button className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all z-50 flex items-center justify-center" data-html2canvas-ignore="" onclick="downloadSlide(this)">
<iconify-icon icon="lucide:download" width="16"></iconify-icon>
</button>

<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

<div className="flex justify-between items-center text-xs font-medium tracking-wide uppercase opacity-60">
<span className="">Evolutionary Biology</span>
<span>01 / 08</span>
</div>

<div className="flex-1 flex flex-col z-10 relative items-center justify-center">
<div className="w-20 h-20 rounded-full bg-gradient-to-tr from-neutral-800 to-neutral-700 border border-neutral-700 flex items-center justify-center mb-8 shadow-xl">
<iconify-icon className="text-white opacity-90" icon="lucide:fingerprint" width="32"></iconify-icon>
</div>
<h1 className="text-4xl md:text-5xl font-medium text-white tracking-tight text-center leading-[1.1]">
                        Why are we 
                        <span className="text-gradient">Ticklish?</span>
</h1>
<p className="mt-6 text-sm text-center max-w-[260px] leading-relaxed opacity-80">
                        The surprising survival science behind a peculiar human reflex.
                    </p>
</div>

<div className="flex justify-center pt-6 border-t border-white/5">
<span className="text-xs font-medium tracking-widest uppercase opacity-50">@YourName</span>
</div>
</div>
</section>

<section className="min-h-screen w-full flex items-center justify-center p-4 md:p-8">
<div className="slide-card aspect-[3/4] w-full max-w-sm sm:max-w-md bg-neutral-900/50 rounded-3xl relative overflow-hidden flex flex-col justify-between p-8 backdrop-blur-md">
<button className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all z-50 flex items-center justify-center" data-html2canvas-ignore="" onclick="downloadSlide(this)">
<iconify-icon icon="lucide:download" width="16"></iconify-icon>
</button>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
<div className="flex justify-between items-center text-xs font-medium tracking-wide uppercase opacity-60">
<span>Mechanism</span>
<span>02 / 08</span>
</div>
<div className="flex-1 flex flex-col justify-center gap-8 relative z-10">
<iconify-icon className="text-white opacity-80 mb-2" icon="lucide:split" width="40"></iconify-icon>
<h2 className="text-2xl font-medium text-white tracking-tight leading-snug">
                        A Dual-PurposeSurvival Mechanism
                    </h2>
<p className="text-sm leading-7 text-neutral-400">
                        Ticklishness isn't just one sensation. Scientists divide it into two distinct types with very different evolutionary functions:
                    </p>
<div className="flex flex-col gap-3 mt-2">
<div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
<span className="text-sm font-medium text-neutral-200">Knismesis</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
<span className="text-sm font-medium text-neutral-200">Gargalesis</span>
</div>
</div>
</div>
<div className="flex justify-center pt-6 border-t border-white/5">
<span className="text-xs font-medium tracking-widest uppercase opacity-50">@YourName</span>
</div>
</div>
</section>

<section className="min-h-screen w-full flex items-center justify-center p-4 md:p-8">
<div className="slide-card aspect-[3/4] w-full max-w-sm sm:max-w-md bg-neutral-900/50 rounded-3xl relative overflow-hidden flex flex-col justify-between p-8 backdrop-blur-md">
<button className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all z-50 flex items-center justify-center" data-html2canvas-ignore="" onclick="downloadSlide(this)">
<iconify-icon icon="lucide:download" width="16"></iconify-icon>
</button>
<div className="flex justify-between items-center text-xs font-medium tracking-wide uppercase opacity-60">
<span>Type I</span>
<span>03 / 08</span>
</div>
<div className="flex-1 flex flex-col justify-center relative z-10">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-500/20">
<iconify-icon className="text-emerald-400" icon="lucide:feather" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-emerald-400 tracking-wider uppercase mb-3">Knismesis</h3>
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">The Light Itch</h2>
<p className="text-sm leading-7 text-neutral-400">
                        This is the light, itchy sensation triggered by a feather or a crawling insect. It doesn't make you laugh; it makes you shudder.
                    </p>
<div className="mt-8 flex gap-2">
<div className="h-1 flex-1 bg-emerald-500/20 rounded-full overflow-hidden">
<div className="h-full w-full bg-emerald-500/50 origin-left"></div>
</div>
<div className="h-1 flex-1 bg-neutral-800 rounded-full"></div>
</div>
</div>
<div className="flex justify-center pt-6 border-t border-white/5">
<span className="text-xs font-medium tracking-widest uppercase opacity-50">@YourName</span>
</div>
</div>
</section>

<section className="min-h-screen w-full flex items-center justify-center p-4 md:p-8">
<div className="slide-card aspect-[3/4] w-full max-w-sm sm:max-w-md bg-neutral-900/50 rounded-3xl relative overflow-hidden flex flex-col justify-between p-8 backdrop-blur-md">
<button className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all z-50 flex items-center justify-center" data-html2canvas-ignore="" onclick="downloadSlide(this)">
<iconify-icon icon="lucide:download" width="16"></iconify-icon>
</button>
<div className="flex justify-between items-center text-xs font-medium tracking-wide uppercase opacity-60">
<span>Defense</span>
<span>04 / 08</span>
</div>
<div className="flex-1 flex flex-col justify-center relative z-10">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-500/20">
<iconify-icon className="text-emerald-400" icon="lucide:shield-alert" width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-medium text-white tracking-tight mb-6">The Swat Reflex</h2>
<p className="text-sm leading-7 text-neutral-400 mb-6">
                        Knismesis serves a clear defensive function. It alerts the body to the presence of potential parasites (like spiders or mosquitoes) on the skin.
                    </p>
<div className="p-4 rounded-xl bg-white/5 border border-white/5">
<div className="flex items-start gap-3">
<iconify-icon className="text-white mt-0.5" icon="lucide:activity" width="18"></iconify-icon>
<p className="text-xs leading-5 text-neutral-300">
                                Prompts an immediate scratch or swat reflex to remove the threat before it can bite or sting.
                            </p>
</div>
</div>
</div>
<div className="flex justify-center pt-6 border-t border-white/5">
<span className="text-xs font-medium tracking-widest uppercase opacity-50">@YourName</span>
</div>
</div>
</section>

<section className="min-h-screen w-full flex items-center justify-center p-4 md:p-8">
<div className="slide-card aspect-[3/4] w-full max-w-sm sm:max-w-md bg-neutral-900/50 rounded-3xl relative overflow-hidden flex flex-col justify-between p-8 backdrop-blur-md">
<button className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all z-50 flex items-center justify-center" data-html2canvas-ignore="" onclick="downloadSlide(this)">
<iconify-icon icon="lucide:download" width="16"></iconify-icon>
</button>
<div className="flex justify-between items-center text-xs font-medium tracking-wide uppercase opacity-60">
<span>Type II</span>
<span>05 / 08</span>
</div>
<div className="flex-1 flex flex-col justify-center relative z-10">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6 border border-indigo-500/20">
<iconify-icon className="text-indigo-400" icon="lucide:smile" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-indigo-400 tracking-wider uppercase mb-3">Gargalesis</h3>
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">The Heavy Laugh</h2>
<p className="text-sm leading-7 text-neutral-400">
                        This is the heavy, laughter-inducing tickle associated with play. It is far more complex and is believed to encourage social bonding and combat training.
                    </p>
<div className="mt-8 flex gap-2">
<div className="h-1 flex-1 bg-indigo-500/20 rounded-full overflow-hidden">
<div className="h-full w-full bg-indigo-500/50 origin-left"></div>
</div>
<div className="h-1 flex-1 bg-neutral-800 rounded-full"></div>
</div>
</div>
<div className="flex justify-center pt-6 border-t border-white/5">
<span className="text-xs font-medium tracking-widest uppercase opacity-50">@YourName</span>
</div>
</div>
</section>

<section className="min-h-screen w-full flex items-center justify-center p-4 md:p-8">
<div className="slide-card aspect-[3/4] w-full max-w-sm sm:max-w-md bg-neutral-900/50 rounded-3xl relative overflow-hidden flex flex-col justify-between p-8 backdrop-blur-md">
<button className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all z-50 flex items-center justify-center" data-html2canvas-ignore="" onclick="downloadSlide(this)">
<iconify-icon icon="lucide:download" width="16"></iconify-icon>
</button>
<div className="absolute top-1/2 left-1/2 w-full h-full bg-gradient-to-b from-transparent to-black/40 pointer-events-none"></div>
<div className="flex justify-between items-center text-xs font-medium tracking-wide uppercase opacity-60">
<span>Anatomy</span>
<span>06 / 08</span>
</div>
<div className="flex-1 flex flex-col justify-center relative z-10">
<div className="relative w-full aspect-square mb-6 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center">

<iconify-icon className="text-neutral-700 absolute" icon="lucide:user" width="80"></iconify-icon>

<div className="absolute top-[30%] left-[50%] w-3 h-3 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.6)] animate-pulse"></div>
<div className="absolute top-[45%] left-[35%] w-3 h-3 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.6)] animate-pulse delay-75"></div>
<div className="absolute top-[45%] right-[35%] w-3 h-3 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.6)] animate-pulse delay-150"></div>
</div>
<h2 className="text-xl font-medium text-white tracking-tight mb-4">Vulnerable Points</h2>
<p className="text-sm leading-7 text-neutral-400">
                        The most ticklish areas—the neck, ribs, and underarms—are also the body's most vulnerable points where major arteries and organs reside.
                    </p>
</div>
<div className="flex justify-center pt-6 border-t border-white/5">
<span className="text-xs font-medium tracking-widest uppercase opacity-50">@YourName</span>
</div>
</div>
</section>

<section className="min-h-screen w-full flex items-center justify-center p-4 md:p-8">
<div className="slide-card aspect-[3/4] w-full max-w-sm sm:max-w-md bg-neutral-900/50 rounded-3xl relative overflow-hidden flex flex-col justify-between p-8 backdrop-blur-md">
<button className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all z-50 flex items-center justify-center" data-html2canvas-ignore="" onclick="downloadSlide(this)">
<iconify-icon icon="lucide:download" width="16"></iconify-icon>
</button>
<div className="flex justify-between items-center text-xs font-medium tracking-wide uppercase opacity-60">
<span>Hypothesis</span>
<span>07 / 08</span>
</div>
<div className="flex-1 flex flex-col justify-center relative z-10">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6 border border-indigo-500/20">
<iconify-icon className="text-indigo-400" icon="lucide:swords" width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-medium text-white tracking-tight mb-6">Combat Training</h2>
<p className="text-sm leading-7 text-neutral-400 mb-6">
                        Biologists theorize that tickling teaches offspring to defend vital organs during rough-and-tumble play. 
                    </p>
<div className="bg-neutral-800/50 rounded-xl p-4 border-l-2 border-indigo-500">
<p className="text-xs italic text-neutral-300 leading-relaxed">
                            "The laughter signals the attack is harmless, strengthening social ties between parent and child."
                        </p>
</div>
</div>
<div className="flex justify-center pt-6 border-t border-white/5">
<span className="text-xs font-medium tracking-widest uppercase opacity-50">@YourName</span>
</div>
</div>
</section>

<section className="min-h-screen w-full flex items-center justify-center p-4 md:p-8">
<div className="slide-card aspect-[3/4] w-full max-w-sm sm:max-w-md bg-neutral-900 rounded-3xl relative overflow-hidden flex flex-col justify-center items-center p-12 backdrop-blur-md text-center">
<button className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all z-50 flex items-center justify-center" data-html2canvas-ignore="" onclick="downloadSlide(this)">
<iconify-icon icon="lucide:download" width="16"></iconify-icon>
</button>

<div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-neutral-800 to-transparent opacity-20 pointer-events-none"></div>
<div className="w-24 h-24 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-8 shadow-2xl relative">

<span className="text-2xl font-medium text-white">YN</span>
<div className="absolute bottom-0 right-0 w-8 h-8 bg-blue-500 rounded-full border-4 border-neutral-900 flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:plus" width="16"></iconify-icon>
</div>
</div>
<h2 className="text-2xl font-medium text-white tracking-tight mb-3">Learn something new?</h2>
<p className="text-sm text-neutral-400 mb-8 max-w-[200px]">
                    Follow for more daily insights into science and biology.
                </p>
<button className="group w-full py-4 rounded-xl bg-white text-black font-semibold text-sm tracking-tight hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
<span>Follow @YourName</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<div className="mt-8 flex items-center gap-4 opacity-30">
<iconify-icon icon="lucide:heart" width="20"></iconify-icon>
<iconify-icon icon="lucide:message-circle" width="20"></iconify-icon>
<iconify-icon icon="lucide:send" width="20"></iconify-icon>
<iconify-icon icon="lucide:bookmark" width="20"></iconify-icon>
</div>
</div>
</section>
</main>

    </>
  );
}
