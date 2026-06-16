import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // Animation Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 mix-blend-multiply pointer-events-none">
<div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between pointer-events-auto">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-matte-black rounded-sm"></div>
<span className="font-manrope font-semibold text-lg tracking-tight text-[#1c1c1c]">Quant</span>
</div>
<a className="hidden sm:flex items-center gap-2 px-5 py-2 text-sm font-medium border border-[#1c1c1c]/10 rounded-full hover:bg-[#1c1c1c] hover:text-white transition-all duration-300 backdrop-blur-sm" href="#access">
                Request access
            </a>
</div>
</header>
<main>

<section className="min-h-screen flex flex-col justify-center pt-24 pb-12 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full bg-grain pointer-events-none z-0"></div>
<div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#babbae]/30 border border-[#babbae]/40 mb-8 fade-up">
<span className="w-1.5 h-1.5 rounded-full bg-[#5f7180] animate-pulse"></span>
<span className="text-xs font-medium uppercase tracking-wide text-[#3a444d]">Private Beta · Limited Access</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.95] mb-8 text-[#1c1c1c] fade-up font-manrope">
                    Onchain Finance,<br/>
<span className="text-[#1c1c1c]/40">the way it should be.</span>
</h1>
<p className="text-xl md:text-2xl text-[#5f7180] font-light max-w-2xl mx-auto mb-10 leading-relaxed fade-up">
                    We handle complexity. You get results. <br/>
<span className="text-sm md:text-base mt-2 block opacity-70">Built for those who are tired of broken UX.</span>
</p>
<div className="fade-up">
<a className="inline-flex items-center gap-2 bg-[#1c1c1c] text-white px-8 py-4 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-xl shadow-black/5" href="#access">
                        Request early access
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-24 border-t border-[#1c1c1c]/5 relative bg-white">
<div className="max-w-[1000px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
<div className="fade-up">
<h2 className="text-3xl font-manrope font-semibold tracking-tight mb-6">DeFi asks too<br/>much from us.</h2>
<p className="text-[#5f7180] text-lg leading-relaxed">
                            Every action comes with a pile of decisions. Most products make you figure this out manually.
                        </p>
</div>
<div className="space-y-4 fade-up">
<div className="flex items-center gap-4 text-[#1c1c1c]/40 border-b border-[#1c1c1c]/5 pb-4">
<i className="w-5 h-5" data-lucide="x"></i>
<span className="font-mono text-sm uppercase tracking-wider">Which route?</span>
</div>
<div className="flex items-center gap-4 text-[#1c1c1c]/40 border-b border-[#1c1c1c]/5 pb-4">
<i className="w-5 h-5" data-lucide="x"></i>
<span className="font-mono text-sm uppercase tracking-wider">Which pool?</span>
</div>
<div className="flex items-center gap-4 text-[#1c1c1c]/40 border-b border-[#1c1c1c]/5 pb-4">
<i className="w-5 h-5" data-lucide="x"></i>
<span className="font-mono text-sm uppercase tracking-wider">Which chain?</span>
</div>
<div className="flex items-center gap-4 text-[#1c1c1c]/40 border-b border-[#1c1c1c]/5 pb-4">
<i className="w-5 h-5" data-lucide="x"></i>
<span className="font-mono text-sm uppercase tracking-wider">Which interface?</span>
</div>
<div className="pt-4">
<p className="text-2xl font-medium font-manrope text-[#1c1c1c]">Quant doesn’t.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#1c1c1c] text-[#ebebeb] relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-[#babbae] to-transparent opacity-50"></div>
<div className="max-w-[800px] mx-auto px-6 text-center">
<span className="block text-xs font-mono text-[#babbae] mb-6 uppercase tracking-widest fade-up">Opinionated by Design</span>
<h2 className="text-3xl md:text-5xl font-manrope font-medium leading-tight mb-8 fade-up">
                    We take on the complexity—routing, execution logic, and trade-offs—so you don’t have to.
                </h2>
<div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mt-16 text-lg fade-up">
<div className="text-[#ebebeb]/50">
                        You decide <span className="text-white border-b border-[#babbae]">what</span> you want to do.
                    </div>
<div className="text-[#ebebeb]/50">
                        Quant decides <span className="text-white border-b border-[#babbae]">how</span> to do it well.
                    </div>
</div>
</div>
</section>

<section className="py-32 bg-[#babbae] relative">
<div className="max-w-[1200px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-5 fade-up">
<h2 className="text-4xl font-manrope font-semibold tracking-tight text-[#1c1c1c] mb-8">
                            Quant doesn’t feel like DeFi.
                        </h2>
<p className="text-[#1c1c1c]/80 text-xl leading-relaxed">
                            Like the system understands what you want — and just executes. No noise. No chaos. No “did I do this right?” Just results.
                        </p>
</div>
<div className="md:col-span-1"></div>
<div className="md:col-span-6 grid grid-cols-2 gap-4 fade-up">

<div className="aspect-square bg-[#f4f4f4]/40 backdrop-blur-md rounded-sm flex items-center justify-center border border-white/20">
<span className="font-manrope text-lg font-medium text-[#1c1c1c]">Smooth</span>
</div>
<div className="aspect-square bg-[#f4f4f4]/40 backdrop-blur-md rounded-sm flex items-center justify-center border border-white/20">
<span className="font-manrope text-lg font-medium text-[#1c1c1c]">Predictable</span>
</div>
<div className="aspect-square bg-[#f4f4f4]/40 backdrop-blur-md rounded-sm flex items-center justify-center border border-white/20">
<span className="font-manrope text-lg font-medium text-[#1c1c1c]">Calm</span>
</div>
<div className="aspect-square bg-[#f4f4f4]/40 backdrop-blur-md rounded-sm flex items-center justify-center border border-white/20">
<span className="font-manrope text-lg font-medium text-[#1c1c1c]">Intentional</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-[#1c1c1c]/5">
<div className="max-w-[1000px] mx-auto px-6">
<div className="mb-20 text-center fade-up">
<h3 className="text-2xl font-medium font-manrope mb-4">Most DeFi apps make you decide how.</h3>
<p className="text-3xl md:text-4xl font-semibold tracking-tight text-[#5f7180]">
                        Quant lets you decide <span className="text-[#1c1c1c]">what</span>.
                    </p>
<p className="mt-6 text-sm text-[#1c1c1c]/60 max-w-lg mx-auto">
                        Under the hood, execution is powered by intents, so you stop worrying about routes, slippage, or mechanics. On the surface, everything just works.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="p-6 border border-[#1c1c1c]/5 bg-[#f4f4f4] rounded-sm fade-up hover:border-[#1c1c1c]/20 transition-colors">
<i className="w-6 h-6 text-[#5f7180] mb-4" data-lucide="trending-down"></i>
<p className="text-sm font-medium text-[#1c1c1c]">Slippage is a UX failure</p>
</div>

<div className="p-6 border border-[#1c1c1c]/5 bg-[#f4f4f4] rounded-sm fade-up hover:border-[#1c1c1c]/20 transition-colors" style={{transitionDelay: '100ms'}}>
<i className="w-6 h-6 text-[#5f7180] mb-4" data-lucide="layers"></i>
<p className="text-sm font-medium text-[#1c1c1c]">Aggregators generate complexity</p>
</div>

<div className="p-6 border border-[#1c1c1c]/5 bg-[#f4f4f4] rounded-sm fade-up hover:border-[#1c1c1c]/20 transition-colors" style={{transitionDelay: '200ms'}}>
<i className="w-6 h-6 text-[#5f7180] mb-4" data-lucide="activity"></i>
<p className="text-sm font-medium text-[#1c1c1c]">Cross-chain is too fragile</p>
</div>

<div className="p-6 border border-[#1c1c1c]/5 bg-[#f4f4f4] rounded-sm fade-up hover:border-[#1c1c1c]/20 transition-colors" style={{transitionDelay: '300ms'}}>
<i className="w-6 h-6 text-[#5f7180] mb-4" data-lucide="history"></i>
<p className="text-sm font-medium text-[#1c1c1c]">DeFi UX hasn’t evolved</p>
</div>
</div>
<div className="mt-12 text-center fade-up">
<p className="text-xs uppercase tracking-widest text-[#1c1c1c]/40 mb-2">Built by builders from</p>
<p className="text-sm font-semibold text-[#1c1c1c]">Chainflip &amp; Squid Router</p>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#f4f4f4]" id="access">
<div className="max-w-[600px] mx-auto px-6">

<div className="bg-[#5f7180] rounded-xl p-8 md:p-12 shadow-2xl relative overflow-hidden fade-up text-white">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#1c1c1c]"></div>
<div className="absolute top-4 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#1c1c1c] border-2 border-[#5f7180] z-10"></div>
<div className="text-center mb-10 mt-6">
<h2 className="text-2xl font-manrope font-semibold mb-2">Private beta access</h2>
<p className="text-[#ebebeb]/70 text-sm leading-relaxed max-w-sm mx-auto">
                            We’re onboarding a small group of crypto-native users who are frustrated with the current experience and want to shape what comes next.
                        </p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="group">
<label className="block text-[10px] uppercase tracking-wider text-[#ebebeb]/60 mb-2">Telegram</label>
<input className="w-full bg-transparent border-b border-[#ebebeb]/20 py-2 text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors text-sm" placeholder="@handle" type="text"/>
</div>
<div className="group">
<label className="block text-[10px] uppercase tracking-wider text-[#ebebeb]/60 mb-2">X / Twitter</label>
<input className="w-full bg-transparent border-b border-[#ebebeb]/20 py-2 text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors text-sm" placeholder="@handle" type="text"/>
</div>
</div>
<div className="group pt-2">
<label className="block text-[10px] uppercase tracking-wider text-[#ebebeb]/60 mb-2">Open Question</label>
<input className="w-full bg-transparent border-b border-[#ebebeb]/20 py-2 text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors text-sm" placeholder="What’s the most frustrating thing about DeFi?" type="text"/>
</div>
<div className="pt-6">
<button className="w-full bg-[#1c1c1c] hover:bg-black text-white py-4 rounded-lg font-medium tracking-wide transition-all duration-300 flex justify-center items-center gap-2 group" type="button">
                                Request access
                            </button>
<p className="text-center text-[10px] text-[#ebebeb]/40 mt-4">We manually accept every submission.</p>
</div>
</form>
</div>

<div className="mt-12 text-center opacity-60">
<p className="text-xs font-mono text-[#5f7180]">TNT LABS © 2024</p>
</div>
</div>
</section>

<footer className="py-12 border-t border-[#1c1c1c]/5 bg-white text-center">
<div className="flex flex-col items-center gap-4">
<span className="font-manrope font-bold text-lg text-[#1c1c1c]">Quant</span>
<div className="flex items-center gap-6 text-xs text-[#5f7180] font-medium tracking-wide">
<span>Built by TNT Labs</span>
<span className="w-1 h-1 rounded-full bg-[#1c1c1c]/20"></span>
<span>Private Beta</span>
</div>
</div>
</footer>
</main>


    </>
  );
}
