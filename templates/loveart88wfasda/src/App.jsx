import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.getElementById('mobile-open')?.addEventListener('click', () => {
        document.querySelector('[data-aside]')?.classList.remove('-translate-x-full');
      });
    


        document.getElementById('mobile-close')?.addEventListener('click', () => {
          document.querySelector('[data-aside]')?.classList.add('-translate-x-full');
        });
      


    // Scroll observer for fade-in animations
    const observer = new IntersectionObserver((entries) => { 
      entries.forEach(entry => { 
        if (entry.isIntersecting) { 
          entry.target.classList.add('animate-in'); 
          observer.unobserve(entry.target); 
        } 
      }); 
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }); 
    
    document.querySelectorAll('[data-animate-on-scroll]').forEach(el => { 
      observer.observe(el); 
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute top-0 w-full h-screen -z-10 bg-cover bg-center opacity-40" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 40%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 40%, transparent)'}}></div>

<header className="md:hidden fixed inset-x-0 top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50 bg-neutral-950/80 border-b border-white/10">
<div className="flex items-center justify-between px-4 py-3">
<button className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-normal text-neutral-200 hover:bg-white/5 active:scale-[.98] transition" id="mobile-open">
<iconify-icon className="h-5 w-5" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
        Menu
      </button>
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-white tracking-tight" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>LoveArt.ai</span>
</div>
</div>

</header>
<div className="relative md:flex md:gap-0">

<aside className="fixed z-50 md:z-30 md:max-w-sm md:w-80 md:translate-x-0 -translate-x-full transition-transform duration-300 ease-out w-[86%] h-screen max-w-fit top-0 left-0" data-aside="">
<div className="flex flex-col md:pt-6 md:px-4 h-full max-w-fit border-white/10 rounded-[20px] border-r mt-4 mr-0 mb-0 ml-0 pt-14 pr-6 pb-6 pl-6 relative shadow-md backdrop-blur-xl gap-y-6" style={{background: 'radial-gradient(120% 80% at 50% 0%, rgba(124,58,237,0.08) 0%, rgba(17,17,22,0.92) 38%, rgba(10,10,14,0.94) 100%)'}}>

<button className="md:hidden absolute right-3 top-3 inline-flex items-center gap-2 rounded-md px-2.5 py-2 text-sm text-neutral-300 hover:bg-white/5 transition-colors" id="mobile-close">
<iconify-icon className="h-5 w-5" icon="solar:close-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</button>

<div className="mt-2 mb-4">
<div className="flex items-center gap-3">
<div className="relative inline-flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-transparent ring-1 ring-white/10">
<iconify-icon className="h-5 w-5 text-violet-300" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<div className="leading-tight">
<span className="text-lg font-medium text-white tracking-tight" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>LoveArt.ai</span>
<p className="text-[10px] text-neutral-400 uppercase tracking-widest mt-0.5">V2 Coming Soon</p>
</div>
</div>
</div>

<nav className="flex flex-col relative pl-2" style={{-TotalRadio: '5'}}>
<input checked="" className="absolute opacity-0 pointer-events-none" id="nav-1" name="nav" type="radio"/>
<input className="absolute opacity-0 pointer-events-none" id="nav-2" name="nav" type="radio"/>
<input className="absolute opacity-0 pointer-events-none" id="nav-3" name="nav" type="radio"/>
<input className="absolute opacity-0 pointer-events-none" id="nav-4" name="nav" type="radio"/>
<input className="absolute opacity-0 pointer-events-none" id="nav-5" name="nav" type="radio"/>
<div className="absolute left-0 top-0 bottom-0 w-px" style={{background: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(27, 27, 27, 1) 50%, rgba(0, 0, 0, 0) 100%)'}}>
<div className="relative w-full transition-transform duration-500" style={{height: 'calc(100% / var(--total-radio))', background: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgb(124, 58, 237) 50%, rgba(0, 0, 0, 0) 100%)'}}>
<div className="absolute h-3/5 w-[300%] top-1/2 -translate-y-1/2" style={{background: 'rgba(124, 58, 237, 1)', filter: 'blur(10px)'}}></div>
<div className="w-[150px] h-full absolute left-0" style={{background: 'linear-gradient(90deg, rgba(124, 58, 237, 0.11) 0%, rgba(0, 0, 0, 0) 100%)'}}></div>
</div>
</div>
<label className="cursor-pointer flex items-center justify-between rounded-xl px-3 py-3 text-sm text-neutral-400 hover:text-white ring-1 ring-transparent transition-colors" htmlFor="nav-1" onclick="window.location.href='#product'">
<span className="inline-flex items-center gap-3">
<iconify-icon className="h-4 w-4" icon="solar:widget-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span className="font-normal tracking-tight" style={{fontFamily: 'Inter, ui-sans-serif'}}>Product</span>
</span>
</label>
<label className="cursor-pointer flex items-center justify-between rounded-xl px-3 py-3 text-sm text-neutral-400 hover:text-white ring-1 ring-transparent transition-colors" htmlFor="nav-2" onclick="window.location.href='#workflow'">
<span className="inline-flex items-center gap-3">
<iconify-icon className="h-4 w-4" icon="solar:checklist-minimalistic-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span className="font-normal" style={{fontFamily: 'Inter, ui-sans-serif'}}>Workflow</span>
</span>
</label>
<label className="cursor-pointer flex items-center justify-between rounded-xl px-3 py-3 text-sm text-neutral-400 hover:text-white ring-1 ring-transparent transition-colors" htmlFor="nav-3" onclick="window.location.href='#use-cases'">
<span className="inline-flex items-center gap-3">
<iconify-icon className="h-4 w-4" icon="solar:gallery-wide-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span className="font-normal" style={{fontFamily: 'Inter, ui-sans-serif'}}>Use Cases</span>
</span>
</label>
<label className="cursor-pointer flex items-center justify-between rounded-xl px-3 py-3 text-sm text-neutral-400 hover:text-white ring-1 ring-transparent transition-colors" htmlFor="nav-4" onclick="window.location.href='#faq'">
<span className="inline-flex items-center gap-3">
<iconify-icon className="h-4 w-4" icon="solar:question-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span className="font-normal" style={{fontFamily: 'Inter, ui-sans-serif'}}>FAQ</span>
</span>
</label>
<div className="my-3 h-px w-full bg-white/10"></div>
<label className="cursor-pointer flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-violet-300 hover:text-violet-200 ring-1 ring-transparent transition-colors" htmlFor="nav-5" onclick="window.location.href='#get-access'">
<iconify-icon className="h-4 w-4" icon="solar:lock-keyhole-unlocked-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span className="font-normal" style={{fontFamily: 'Inter, ui-sans-serif'}}>Get Access</span>
</label>
</nav>

<div className="mt-auto pb-4">
<div className="relative rounded-2xl bg-gradient-to-b from-violet-500/10 to-transparent ring-1 ring-white/10 p-5 overflow-hidden">
<div className="absolute right-0 top-0 w-24 h-24 bg-violet-500/20 rounded-full blur-2xl pointer-events-none"></div>
<h3 className="text-sm font-medium tracking-tight text-white mb-2" style={{fontFamily: 'Inter, ui-sans-serif'}}>Ready for V2?</h3>
<p className="text-xs text-neutral-400 mb-4 leading-relaxed">Join the waitlist to shape the future of business-first AI generation.</p>
<a className="inline-flex items-center justify-center w-full gap-2 hover:bg-white/20 transition text-xs font-normal text-white tracking-tight bg-white/10 rounded-xl ring-white/10 ring-1 py-2.5" href="#get-access">
              Request Access
            </a>
</div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-40" style={{background: 'radial-gradient(60% 100% at 50% 100%, rgba(124,58,237,0.15), transparent 80%)', filter: 'blur(24px)'}}></div>
</div>

</aside>

<main className="flex-1 md:ml-80">

<section className="md:px-10 lg:px-16 pt-32 md:pt-40 pr-6 pb-16 pl-6 relative" id="hero">
<div className="max-w-3xl relative z-10">
<span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 text-xs text-violet-200 animate-in" data-animate-on-scroll="">
<span className="size-1.5 rounded-full bg-violet-400 animate-pulse"></span>
            Coming Soon
          </span>
<h1 className="sm:text-6xl md:text-7xl text-5xl font-medium text-white tracking-tight mt-6 leading-[1.1]" data-animate-on-scroll="" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>
            Create on-brand visuals without the usual AI chaos.
          </h1>
<p className="sm:text-lg leading-relaxed text-base text-neutral-300 mt-6 max-w-2xl" data-animate-on-scroll="" style={{fontFamily: 'Inter, ui-sans-serif'}}>
            LoveArt.ai is the business-first AI creative workflow platform for founders, marketers, creators, agencies, and lean teams who need branded visuals fast. Build your brand context once, start projects with purpose, generate stronger concepts, refine faster, and reuse assets that actually fit your business.
          </p>
<div className="mt-8 flex flex-wrap gap-4" data-animate-on-scroll="">
<a className="inline-flex items-center justify-center gap-2 hover:bg-neutral-200 transition text-sm font-medium text-neutral-900 tracking-tight bg-white rounded-full py-3 px-6 shadow-[0_0_20px_rgba(255,255,255,0.3)]" href="#get-access">
              Get Access
            </a>
<a className="inline-flex items-center justify-center gap-2 hover:bg-white/10 transition text-sm font-normal text-white tracking-tight bg-transparent rounded-full ring-white/20 ring-1 py-3 px-6" href="#workflow">
              Explore the Workflow
            </a>
</div>
<p className="text-xs text-neutral-500 mt-6" data-animate-on-scroll="">LoveArt.ai V2 is on the way. Get notified when access opens and help shape what comes next.</p>
</div>

<div className="sm:h-[600px] flex h-[500px] mt-16 relative items-center justify-center pointer-events-none" style={{perspective: '1200px'}}>

<div className="absolute w-64 sm:w-80 aspect-[4/3] rounded-2xl bg-neutral-900/80 ring-1 ring-white/10 overflow-hidden shadow-2xl backdrop-blur-md" id="hero-card-1" style={{transform: 'translateX(-240px) translateY(20px) rotateZ(-8deg) scale(0.95)', zIndex: '1'}}>
<div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent"></div>
<img alt="Brand Kit" className="w-full h-3/4 object-cover opacity-80" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 w-full p-4 bg-neutral-950/90 border-t border-white/10 flex justify-between items-center">
<div>
<p className="text-xs font-medium text-white tracking-tight">Brand Kit Active</p>
<p className="text-[10px] text-neutral-400">Rules &amp; Style applied</p>
</div>
<iconify-icon className="text-emerald-400 h-4 w-4" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>

<div className="absolute w-72 sm:w-96 aspect-[4/3] rounded-2xl bg-neutral-900 ring-1 ring-white/20 overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl" id="hero-card-2" style={{transform: 'translateX(0px) translateY(0px) rotateZ(0deg) scale(1.05)', zIndex: '3'}}>
<div className="p-4 border-b border-white/10 flex items-center gap-3 bg-neutral-950/50">
<div className="size-2.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.8)]"></div>
<span className="text-xs font-medium text-neutral-200">Generating Concept...</span>
</div>
<img alt="Generated Asset" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 right-4 p-3 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
<div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 w-2/3"></div>
</div>
</div>
</div>

<div className="absolute w-64 sm:w-80 aspect-[4/3] rounded-2xl bg-neutral-900/80 ring-1 ring-white/10 overflow-hidden shadow-2xl backdrop-blur-md" id="hero-card-3" style={{transform: 'translateX(240px) translateY(20px) rotateZ(8deg) scale(0.95)', zIndex: '2'}}>
<img alt="Asset Library" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<p className="text-xs font-medium text-white tracking-tight mb-1">Asset Library</p>
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded bg-white/10 text-[9px] text-neutral-300">Saved</span>
<span className="px-2 py-0.5 rounded bg-white/10 text-[9px] text-neutral-300">Reusable</span>
</div>
</div>
</div>
</div>

<div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400 relative z-10" data-animate-on-scroll="">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">Brand Kits</div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">Project Workflows</div>
<div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-200 px-4 py-2">Guided AI Generation</div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">Faster Refinement</div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">Reusable Assets</div>
</div>
</section>

<section className="md:px-10 lg:px-16 py-24 relative overflow-hidden" style={{maskImage: 'linear-gradient(180deg, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 10%, black 90%, transparent)'}}>
<div className="absolute inset-0 bg-neutral-950/50"></div>
<div className="absolute inset-0" style={{background: 'radial-gradient(circle at 50% 50%, rgba(124,58,237,0.05) 0%, transparent 50%)'}}></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3" data-animate-on-scroll="">Why this matters</p>
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white" data-animate-on-scroll="" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>
              Most AI image tools create more work than they remove.
            </h2>
<p className="mt-4 text-neutral-400 leading-relaxed" data-animate-on-scroll="">
              You can generate endless images. That does not mean you get assets you can actually use. Prompts drift. Styles change. Files get scattered. Teams waste hours recreating the same visual direction over and over.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-animate-on-scroll="">
<div className="bg-white/5 ring-1 ring-white/10 rounded-3xl p-8 relative overflow-hidden backdrop-blur-sm">
<div className="absolute top-0 right-0 p-6 opacity-20">
<iconify-icon className="w-16 h-16" icon="solar:refresh-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>Prompt roulette</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Too much time disappears into rewrites, rerolls, and almost-right outputs.</p>
</div>
<div className="bg-white/5 ring-1 ring-white/10 rounded-3xl p-8 relative overflow-hidden backdrop-blur-sm">
<div className="absolute top-0 right-0 p-6 opacity-20">
<iconify-icon className="w-16 h-16" icon="solar:ghost-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>No brand memory</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Most tools forget your visual rules the moment you move to the next idea.</p>
</div>
<div className="bg-white/5 ring-1 ring-white/10 rounded-3xl p-8 relative overflow-hidden backdrop-blur-sm">
<div className="absolute top-0 right-0 p-6 opacity-20">
<iconify-icon className="w-16 h-16" icon="solar:link-broken-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>Disconnected workflow</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Generate in one place. Edit in another. Save somewhere else. Then repeat the whole mess next week.</p>
</div>
</div>
</div>
</section>

<section className="md:px-10 lg:px-16 py-32 relative">
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.15) 0%, transparent 70%)'}}></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-4" data-animate-on-scroll="">The better way</p>
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight" data-animate-on-scroll="" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>
            LoveArt.ai gives your creative workflow a memory.
          </h2>
<p className="mt-6 text-lg text-neutral-300 leading-relaxed" data-animate-on-scroll="">
            Set your brand direction once. Start projects with real context. Generate better options, refine the strongest ones, and keep the assets worth reusing. The result is a faster, cleaner path from rough idea to on-brand business visual.
          </p>
<div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10 text-sm text-neutral-200" data-animate-on-scroll="">
<iconify-icon className="text-violet-400" icon="solar:star-fall-linear"></iconify-icon>
            Less starting from scratch. More visuals you can actually publish.
          </div>
</div>
</section>

<section className="md:px-10 lg:px-16 py-24 relative border-t border-white/5" id="workflow">
<div className="max-w-7xl mx-auto">
<div className="max-w-3xl mb-16">
<p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3" data-animate-on-scroll="">How it works</p>
<h2 className="font-medium tracking-tight text-4xl sm:text-5xl text-white" data-animate-on-scroll="" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>
              A simpler path from brief to usable asset.
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative" data-animate-on-scroll="">

<div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

<div className="relative pt-8 lg:pt-0 text-center lg:text-left">
<div className="w-10 h-10 mx-auto lg:mx-0 bg-neutral-900 border border-white/20 rounded-full flex items-center justify-center text-violet-300 font-medium text-sm mb-6 relative z-10 shadow-[0_0_15px_rgba(139,92,246,0.2)]">1</div>
<h3 className="text-lg font-medium text-white mb-3" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>Create your Brand Kit</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Save your visual direction, references, and brand context once so you stop repeating yourself every session.</p>
</div>

<div className="relative pt-8 lg:pt-0 text-center lg:text-left">
<div className="w-10 h-10 mx-auto lg:mx-0 bg-neutral-900 border border-white/20 rounded-full flex items-center justify-center text-violet-300 font-medium text-sm mb-6 relative z-10 shadow-[0_0_15px_rgba(139,92,246,0.2)]">2</div>
<h3 className="text-lg font-medium text-white mb-3" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>Start a Project</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Tell LoveArt.ai what you need to create, where it will be used, and what the asset needs to achieve.</p>
</div>

<div className="relative pt-8 lg:pt-0 text-center lg:text-left">
<div className="w-10 h-10 mx-auto lg:mx-0 bg-neutral-900 border border-violet-500/50 rounded-full flex items-center justify-center text-violet-300 font-medium text-sm mb-6 relative z-10 shadow-[0_0_20px_rgba(139,92,246,0.4)] bg-violet-500/10">3</div>
<h3 className="text-lg font-medium text-white mb-3" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>Generate and refine</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Create stronger concepts, iterate faster, and improve good outputs without restarting from zero.</p>
</div>

<div className="relative pt-8 lg:pt-0 text-center lg:text-left">
<div className="w-10 h-10 mx-auto lg:mx-0 bg-neutral-900 border border-white/20 rounded-full flex items-center justify-center text-violet-300 font-medium text-sm mb-6 relative z-10 shadow-[0_0_15px_rgba(139,92,246,0.2)]">4</div>
<h3 className="text-lg font-medium text-white mb-3" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>Save and reuse</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Keep approved assets organized so your best creative direction becomes easier to repeat and scale.</p>
</div>
</div>
</div>
</section>

<section className="md:px-10 lg:px-16 py-24 relative" id="product">
<div className="max-w-7xl mx-auto">
<div className="max-w-3xl mb-16 text-center mx-auto">
<p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3" data-animate-on-scroll="">Built for real brand work</p>
<h2 className="font-medium tracking-tight text-4xl sm:text-5xl text-white" data-animate-on-scroll="" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>
              A workflow system, not another random generator.
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-animate-on-scroll="">

<div className="lg:col-span-2 group relative overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl rounded-3xl p-8 min-h-[300px] flex flex-col justify-end">
<div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-50"></div>
<div className="absolute right-0 top-0 w-2/3 h-full opacity-30 mix-blend-overlay" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&amp', backgroundSize: 'cover', backgroundPosition: 'center', maskImage: 'linear-gradient(to left, black, transparent)', WebkitMaskImage: 'linear-gradient(to left, black, transparent)'}}></div>
<div className="relative z-10 w-full md:w-2/3">
<iconify-icon className="text-violet-400 w-8 h-8 mb-4" icon="solar:palette-linear"></iconify-icon>
<h3 className="text-2xl font-medium tracking-tight text-white mb-2" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>Brand Kits</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Give your visuals a foundation with reusable brand context, style direction, references, and creative guardrails.</p>
</div>
</div>

<div className="group relative overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl rounded-3xl p-8 min-h-[300px] flex flex-col justify-end">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0"></div>
<div className="relative z-10">
<iconify-icon className="text-white/70 w-8 h-8 mb-4" icon="solar:folder-with-files-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-white mb-2" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>Projects</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Keep campaigns, concepts, and asset goals organized instead of buried inside one-off prompts.</p>
</div>
</div>

<div className="group relative overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl rounded-3xl p-8 min-h-[300px] flex flex-col justify-end">
<div className="relative z-10">
<iconify-icon className="text-white/70 w-8 h-8 mb-4" icon="solar:pen-new-square-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-white mb-2" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>Guided Studio</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Move from idea to output with a cleaner workflow built for business visuals, not novelty generations.</p>
</div>
</div>

<div className="group relative overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl rounded-3xl p-8 min-h-[300px] flex flex-col justify-end">
<div className="absolute inset-0 bg-gradient-to-tr from-violet-600/10 to-transparent"></div>
<div className="relative z-10">
<iconify-icon className="text-violet-400 w-8 h-8 mb-4" icon="solar:magic-stick-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-white mb-2" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>Smarter Refinement</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Improve, adjust, and evolve strong outputs without throwing everything away and starting over.</p>
</div>
</div>

<div className="group relative overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl rounded-3xl p-8 min-h-[300px] flex flex-col justify-end">
<div className="relative z-10">
<iconify-icon className="text-white/70 w-8 h-8 mb-4" icon="solar:safe-square-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-white mb-2" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>Reusable Asset Library</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Save the visuals worth keeping and turn winning creative directions into repeatable assets.</p>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-10 lg:px-16 py-24 relative bg-neutral-950" id="use-cases">
<div className="max-w-7xl mx-auto">
<div className="max-w-3xl mb-16">
<p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3" data-animate-on-scroll="">What you can create</p>
<h2 className="font-medium tracking-tight text-4xl sm:text-5xl text-white" data-animate-on-scroll="" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>
              The kinds of visuals teams actually need.
            </h2>
</div>
<div className="masonry-grid" data-animate-on-scroll="">

<figure className="masonry-item group relative overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl hover:shadow-[0_30px_90px_rgba(0,0,0,0.7)] transition-all duration-500 rounded-3xl" style={{perspective: '1000px'}}>
<div className="masonry-inner transition-all duration-500">
<img alt="Ad creatives" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="masonry-overlay absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-90 transition-all duration-500 flex flex-col justify-end p-6">
<h3 className="text-2xl font-medium tracking-tight text-white mb-2" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>Ad creatives</h3>
<p className="text-sm text-neutral-300">Build stronger visual directions for paid campaigns without burning hours on prompt roulette.</p>
</div>
</div>
</figure>

<figure className="masonry-item group relative overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl hover:shadow-[0_30px_90px_rgba(0,0,0,0.7)] transition-all duration-500 rounded-3xl" style={{perspective: '1000px'}}>
<div className="masonry-inner transition-all duration-500">
<img alt="Social content" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="masonry-overlay absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-90 transition-all duration-500 flex flex-col justify-end p-6">
<h3 className="text-xl font-medium tracking-tight text-white mb-2" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>Social content</h3>
<p className="text-sm text-neutral-300">Create branded visuals for ongoing content without reinventing your look every week.</p>
</div>
</div>
</figure>

<figure className="masonry-item group relative overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl hover:shadow-[0_30px_90px_rgba(0,0,0,0.7)] transition-all duration-500 rounded-3xl" style={{perspective: '1000px'}}>
<div className="masonry-inner transition-all duration-500">
<img alt="Landing page visuals" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="masonry-overlay absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-90 transition-all duration-500 flex flex-col justify-end p-6">
<h3 className="text-xl font-medium tracking-tight text-white mb-2" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>Landing page visuals</h3>
<p className="text-sm text-neutral-300">Generate cleaner concepts for hero sections, promos, launches, and offers.</p>
</div>
</div>
</figure>

<figure className="masonry-item group relative overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl hover:shadow-[0_30px_90px_rgba(0,0,0,0.7)] transition-all duration-500 rounded-3xl" style={{perspective: '1000px'}}>
<div className="masonry-inner transition-all duration-500">
<img alt="Product and promo art" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="masonry-overlay absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-90 transition-all duration-500 flex flex-col justify-end p-6">
<h3 className="text-xl font-medium tracking-tight text-white mb-2" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>Product &amp; promo art</h3>
<p className="text-sm text-neutral-300">Create visuals for launches, sales pushes, seasonal campaigns, and branded announcements.</p>
</div>
</div>
</figure>

<figure className="masonry-item group relative overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl hover:shadow-[0_30px_90px_rgba(0,0,0,0.7)] transition-all duration-500 rounded-3xl" style={{perspective: '1000px'}}>
<div className="masonry-inner transition-all duration-500">
<img alt="Content graphics" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" src="https://images.unsplash.com/photo-1506452305024-9d3f02d1c9b5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="masonry-overlay absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-90 transition-all duration-500 flex flex-col justify-end p-6">
<h3 className="text-xl font-medium tracking-tight text-white mb-2" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>Content graphics</h3>
<p className="text-sm text-neutral-300">Support articles, newsletters, and editorial content with visuals that fit your brand.</p>
</div>
</div>
</figure>

<figure className="masonry-item group relative overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl hover:shadow-[0_30px_90px_rgba(0,0,0,0.7)] transition-all duration-500 rounded-3xl" style={{perspective: '1000px'}}>
<div className="masonry-inner transition-all duration-500">
<img alt="Brand exploration" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="masonry-overlay absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-90 transition-all duration-500 flex flex-col justify-end p-6">
<h3 className="text-xl font-medium tracking-tight text-white mb-2" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>Brand exploration</h3>
<p className="text-sm text-neutral-300">Test new visual directions quickly without losing structure or consistency.</p>
</div>
</div>
</figure>
</div>
</div>
</section>

<section className="md:px-10 lg:px-16 py-32 relative overflow-hidden" id="get-access" style={{maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)'}}>
<div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10" style={{background: 'radial-gradient(80% 60% at 50% 0%, rgba(124,58,237,0.1), transparent 70%)'}}></div>
<div className="max-w-3xl mx-auto text-center mb-12" data-animate-on-scroll="">
<p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">Get Access</p>
<h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-white" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>
            Be first to know when LoveArt.ai opens up.
          </h2>
<p className="mt-4 text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            LoveArt.ai V2 is coming soon. Request access to get updates, hear when availability opens, and share what would make the platform most valuable for your workflow.
          </p>
</div>
<div className="max-w-2xl mx-auto" data-animate-on-scroll="">
<form className="bg-neutral-900/60 backdrop-blur-xl ring-1 ring-white/10 rounded-[2rem] p-6 sm:p-10 shadow-2xl">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
<div>
<label className="block text-sm font-medium text-neutral-300 mb-2">Full Name</label>
<input className="w-full bg-neutral-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all outline-none" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-300 mb-2">Work Email</label>
<input className="w-full bg-neutral-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all outline-none" placeholder="jane@company.com" type="email"/>
</div>
</div>
<div className="mb-8">
<label className="block text-sm font-medium text-neutral-300 mb-3">What best describes you?</label>
<div className="flex flex-wrap gap-2">
<label className="cursor-pointer">
<input className="peer sr-only" name="role" type="radio"/>
<div className="px-4 py-2 rounded-full border border-white/10 bg-neutral-950/50 text-sm text-neutral-400 peer-checked:bg-violet-500/20 peer-checked:text-violet-200 peer-checked:border-violet-500/50 transition-all">Founder</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="role" type="radio"/>
<div className="px-4 py-2 rounded-full border border-white/10 bg-neutral-950/50 text-sm text-neutral-400 peer-checked:bg-violet-500/20 peer-checked:text-violet-200 peer-checked:border-violet-500/50 transition-all">Marketer</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="role" type="radio"/>
<div className="px-4 py-2 rounded-full border border-white/10 bg-neutral-950/50 text-sm text-neutral-400 peer-checked:bg-violet-500/20 peer-checked:text-violet-200 peer-checked:border-violet-500/50 transition-all">Creator</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="role" type="radio"/>
<div className="px-4 py-2 rounded-full border border-white/10 bg-neutral-950/50 text-sm text-neutral-400 peer-checked:bg-violet-500/20 peer-checked:text-violet-200 peer-checked:border-violet-500/50 transition-all">Agency</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="role" type="radio"/>
<div className="px-4 py-2 rounded-full border border-white/10 bg-neutral-950/50 text-sm text-neutral-400 peer-checked:bg-violet-500/20 peer-checked:text-violet-200 peer-checked:border-violet-500/50 transition-all">Ecommerce Brand</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="role" type="radio"/>
<div className="px-4 py-2 rounded-full border border-white/10 bg-neutral-950/50 text-sm text-neutral-400 peer-checked:bg-violet-500/20 peer-checked:text-violet-200 peer-checked:border-violet-500/50 transition-all">Other</div>
</label>
</div>
</div>
<div className="mb-8">
<label className="block text-sm font-medium text-neutral-300 mb-3">What type of visual assets do you need most often?</label>
<div className="flex flex-wrap gap-2">
<label className="cursor-pointer">
<input className="peer sr-only" name="asset" type="radio"/>
<div className="px-4 py-2 rounded-full border border-white/10 bg-neutral-950/50 text-sm text-neutral-400 peer-checked:bg-white/10 peer-checked:text-white peer-checked:border-white/20 transition-all">Ad creatives</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="asset" type="radio"/>
<div className="px-4 py-2 rounded-full border border-white/10 bg-neutral-950/50 text-sm text-neutral-400 peer-checked:bg-white/10 peer-checked:text-white peer-checked:border-white/20 transition-all">Social posts</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="asset" type="radio"/>
<div className="px-4 py-2 rounded-full border border-white/10 bg-neutral-950/50 text-sm text-neutral-400 peer-checked:bg-white/10 peer-checked:text-white peer-checked:border-white/20 transition-all">Landing page visuals</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="asset" type="radio"/>
<div className="px-4 py-2 rounded-full border border-white/10 bg-neutral-950/50 text-sm text-neutral-400 peer-checked:bg-white/10 peer-checked:text-white peer-checked:border-white/20 transition-all">Product promo visuals</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="asset" type="radio"/>
<div className="px-4 py-2 rounded-full border border-white/10 bg-neutral-950/50 text-sm text-neutral-400 peer-checked:bg-white/10 peer-checked:text-white peer-checked:border-white/20 transition-all">Content graphics</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="asset" type="radio"/>
<div className="px-4 py-2 rounded-full border border-white/10 bg-neutral-950/50 text-sm text-neutral-400 peer-checked:bg-white/10 peer-checked:text-white peer-checked:border-white/20 transition-all">Brand concepts</div>
</label>
</div>
</div>
<div className="mb-8">
<label className="block text-sm font-medium text-neutral-300 mb-2">What’s your top pain point or feature need right now?</label>
<textarea className="custom-scrollbar w-full bg-neutral-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all outline-none min-h-[100px] resize-y" placeholder="Tell us what slows you down, what is missing in current tools, or what would make this an instant yes for you."></textarea>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 hover:bg-neutral-200 transition text-sm font-medium text-neutral-900 tracking-tight bg-white rounded-xl py-3 px-6 shadow-[0_0_20px_rgba(255,255,255,0.2)]" type="button">
              Get Access
            </button>
<p className="text-xs text-neutral-500 text-center mt-4">We’re using incoming feedback to shape launch priorities and rollout decisions.</p>
</form>
</div>
</section>

<section className="md:px-10 lg:px-16 py-24 relative" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-12 text-center" data-animate-on-scroll="" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>
            Questions serious users usually ask first.
          </h2>
<div className="space-y-6" data-animate-on-scroll="">
<div className="border-b border-white/10 pb-6">
<h3 className="text-lg font-medium text-white mb-2" style={{fontFamily: 'Inter, ui-sans-serif'}}>Who is LoveArt.ai for?</h3>
<p className="text-sm text-neutral-400 leading-relaxed">LoveArt.ai is being built for founders, marketers, creators, agencies, and lean teams that need branded visual assets faster and with less inconsistency.</p>
</div>
<div className="border-b border-white/10 pb-6">
<h3 className="text-lg font-medium text-white mb-2" style={{fontFamily: 'Inter, ui-sans-serif'}}>Is this just another AI image generator?</h3>
<p className="text-sm text-neutral-400 leading-relaxed">No. The goal is not endless random outputs. The goal is a more structured workflow for creating, refining, saving, and reusing on-brand visuals for real business needs.</p>
</div>
<div className="border-b border-white/10 pb-6">
<h3 className="text-lg font-medium text-white mb-2" style={{fontFamily: 'Inter, ui-sans-serif'}}>What kinds of visuals will LoveArt.ai support?</h3>
<p className="text-sm text-neutral-400 leading-relaxed">The platform is being designed around the visuals teams use most often: ad creatives, social assets, landing page visuals, product promo art, content graphics, and brand concept directions.</p>
</div>
<div className="border-b border-white/10 pb-6">
<h3 className="text-lg font-medium text-white mb-2" style={{fontFamily: 'Inter, ui-sans-serif'}}>Do I need design experience?</h3>
<p className="text-sm text-neutral-400 leading-relaxed">No. LoveArt.ai is being built to help non-designers and design-conscious teams move faster without getting buried in endless prompt experimentation.</p>
</div>
<div className="border-b border-white/10 pb-6">
<h3 className="text-lg font-medium text-white mb-2" style={{fontFamily: 'Inter, ui-sans-serif'}}>When will access open?</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Soon. You can request access now and we’ll share updates as LoveArt.ai V2 gets closer to release.</p>
</div>
</div>
</div>
</section>

<section className="md:px-10 lg:px-16 py-32 relative text-center">
<div className="max-w-3xl mx-auto relative z-10" data-animate-on-scroll="">
<h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-6 leading-tight" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>
            Stop starting from scratch every time you need a visual.
          </h2>
<p className="text-lg text-neutral-300 mb-8">
            Get access to a smarter, more structured way to create on-brand business visuals with LoveArt.ai.
          </p>
<a className="inline-flex items-center justify-center gap-2 hover:bg-neutral-200 transition text-sm font-medium text-neutral-900 tracking-tight bg-white rounded-full py-4 px-8 shadow-[0_0_30px_rgba(255,255,255,0.3)]" href="#get-access">
            Get Access
          </a>
<p className="text-sm text-violet-300 mt-6">A better creative workflow is on the way.</p>
</div>
</section>

<footer className="border-t border-white/10 py-12 px-6 md:px-10 lg:px-16 bg-neutral-950">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="h-5 w-5 text-neutral-400" icon="solar:magic-stick-3-linear"></iconify-icon>
<span className="text-sm font-medium text-neutral-300">LoveArt.ai</span>
<span className="text-xs text-neutral-500 hidden sm:inline ml-2">— Business-first AI creative workflows for on-brand visuals.</span>
</div>
<div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-neutral-400">
<a className="hover:text-white transition" href="#product">Product</a>
<a className="hover:text-white transition" href="#workflow">Workflow</a>
<a className="hover:text-white transition" href="#use-cases">Use Cases</a>
<a className="hover:text-white transition" href="#faq">FAQ</a>
<a className="hover:text-white transition text-violet-400" href="#get-access">Get Access</a>
<span className="w-px h-3 bg-white/10 mx-2 hidden sm:block"></span>
<a className="hover:text-white transition" href="#">Privacy</a>
<a className="hover:text-white transition" href="#">Terms</a>
</div>
</div>
</footer>
</main>
</div>


    </>
  );
}
