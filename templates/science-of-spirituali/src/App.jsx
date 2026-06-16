import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        function toggleForm() {
            const container = document.getElementById('signup-form-container');
            const chevron = document.getElementById('chevron');
            const btn = document.getElementById('signup-btn');
            
            container.classList.toggle('open');
            
            if (container.classList.contains('open')) {
                chevron.style.transform = 'rotate(180deg)';
                btn.classList.add('bg-white/10');
            } else {
                chevron.style.transform = 'rotate(0deg)';
                btn.classList.remove('bg-white/10');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#02040a]/80 backdrop-blur-md">
<div className="flex sm:justify-between lg:px-8 bg-slate-950 h-20 max-w-7xl mx-auto px-6 items-center justify-center">
<a className="text-xs font-medium tracking-[0.2em] text-sky-200/80 uppercase hover:text-sky-100 transition-colors" href="#">
                The Science of Spirituality
            </a>

<div className="hidden sm:block"></div>
</div>
</header>
<main className="bg-slate-950 pt-24 pb-0 relative">

<div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-900/20 blur-[120px]"></div>

<section className="relative mx-auto max-w-4xl px-6 py-12 text-center sm:py-20">
<h1 className="text-4xl font-medium tracking-tight text-white sm:text-6xl bg-gradient-to-b from-white via-white to-sky-200/50 bg-clip-text text-transparent pb-2">
                The Science of Spirituality
            </h1>
<p className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-slate-400 sm:text-lg">
                Exploring consciousness, meaning, and human experience through neuroscience, physics, psychology, and contemplative traditions.
            </p>
</section>

<section className="mx-auto max-w-4xl px-6 pb-24">
<div className="flex flex-col gap-12">

<div className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-[0_0_40px_-10px_rgba(14,165,233,0.15)] transition-all duration-500 hover:shadow-[0_0_60px_-10px_rgba(14,165,233,0.3)] hover:border-sky-500/30">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-900/20 via-[#02040a] to-[#02040a]"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center">
<div className="h-16 w-16 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-sky-500/20 cursor-pointer">
<svg className="lucide lucide-play ml-1 h-6 w-6 text-sky-200 fill-sky-200/20" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
<span className="mt-6 text-xs font-medium tracking-[0.2em] text-sky-400/80 uppercase">
                            Primary Documentary Video
                        </span>
</div>
</div>

<div className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-[0_0_40px_-10px_rgba(14,165,233,0.15)] transition-all duration-500 hover:shadow-[0_0_60px_-10px_rgba(14,165,233,0.3)] hover:border-sky-500/30">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-900/20 via-[#02040a] to-[#02040a]"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center">
<div className="h-16 w-16 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-sky-500/20 cursor-pointer">
<svg className="lucide lucide-play ml-1 h-6 w-6 text-sky-200 fill-sky-200/20" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
<span className="mt-6 text-xs font-medium tracking-[0.2em] text-sky-400/80 uppercase">
                            Companion / Interview Video
                        </span>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-2xl px-6 pb-24 text-center">
<button className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 hover:border-sky-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-sky-500/50" id="signup-btn" onclick="toggleForm()">
<span className="">Sign up for future videos</span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-slate-400 transition-transform duration-300 group-hover:text-white" data-lucide="chevron-down" fill="none" height="24" id="chevron" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>

<div className="reveal-content mx-auto w-full text-left" id="signup-form-container">
<div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0A0C14] p-6 sm:p-10 shadow-2xl">
<div className="mb-6">
<h3 className="text-lg font-medium text-white">Stay Connected</h3>
<p className="text-xs text-slate-500">Join our community to receive alerts when new content is released.</p>
</div>
<form className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">

<div>
<label className="block text-xs font-medium leading-6 text-slate-400" htmlFor="first-name">First name</label>
<div className="mt-1">
<input className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-slate-600 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6" id="first-name" name="first-name" type="text"/>
</div>
</div>

<div>
<label className="block text-xs font-medium leading-6 text-slate-400" htmlFor="last-name">Last name</label>
<div className="mt-1">
<input className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-slate-600 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6" id="last-name" name="last-name" type="text"/>
</div>
</div>

<div className="sm:col-span-2">
<label className="block text-xs font-medium leading-6 text-slate-400" htmlFor="email">Email address</label>
<div className="mt-1">
<input autocomplete="email" className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-slate-600 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6" id="email" name="email" type="email"/>
</div>
</div>

<div className="sm:col-span-2">
<label className="block text-xs font-medium leading-6 text-slate-400" htmlFor="phone">Mobile number <span className="text-slate-600 font-normal">(for text alerts)</span></label>
<div className="mt-1">
<input className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-slate-600 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6" id="phone" name="phone" type="tel"/>
</div>
</div>

<div className="sm:col-span-2">
<label className="block text-xs font-medium leading-6 text-slate-400" htmlFor="zip">City Zip Code</label>
<div className="mt-1">
<input className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-slate-600 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6" id="zip" name="zip" type="text"/>
</div>
</div>

<div className="mt-2 sm:col-span-2">
<button className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition-colors" type="submit">Complete Registration</button>
</div>
</form>
</div>
</div>
</section>

<section className="bg-slate-950 border-white/5 border-t py-16">
<div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
<h3 className="mb-8 text-sm font-medium uppercase tracking-widest text-slate-500">Share this mission</h3>
<div className="flex flex-wrap justify-center gap-6">

<a className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:border-sky-500/50 hover:bg-sky-500/10 hover:text-sky-400 transition-all" href="#">
<svg className="lucide lucide-facebook h-5 w-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>

<a className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:border-sky-500/50 hover:bg-sky-500/10 hover:text-sky-400 transition-all" href="#">
<svg className="lucide lucide-twitter h-5 w-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>

<a className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:border-sky-500/50 hover:bg-sky-500/10 hover:text-sky-400 transition-all" href="#">
<svg className="lucide lucide-instagram h-5 w-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>

<a className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:border-sky-500/50 hover:bg-sky-500/10 hover:text-sky-400 transition-all" href="#">
<svg className="lucide lucide-mail h-5 w-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>

<a className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:border-sky-500/50 hover:bg-sky-500/10 hover:text-sky-400 transition-all" href="#">
<svg className="lucide lucide-link h-5 w-5" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
</a>
</div>
</div>
</section>

<section className="bg-slate-950 border-white/5 border-t pt-24 pb-24">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center mb-16">
<h2 className="text-2xl font-medium tracking-tight text-white">Intersecting Disciplines</h2>
<p className="mt-4 text-sm text-slate-400">Bridging rigorous scientific inquiry with ancient wisdom.</p>
</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
<div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 text-center">
<svg className="lucide lucide-brain-circuit mx-auto h-8 w-8 text-sky-400 mb-4 opacity-80" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
<h3 className="text-sm font-semibold text-slate-200">Neuroscience</h3>
</div>
<div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 text-center">
<svg className="lucide lucide-atom mx-auto h-8 w-8 text-purple-400 mb-4 opacity-80" data-lucide="atom" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"></path><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"></path></svg>
<h3 className="text-sm font-semibold text-slate-200">Quantum Physics</h3>
</div>
<div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 text-center">
<svg className="lucide lucide-scroll-text mx-auto h-8 w-8 text-emerald-400 mb-4 opacity-80" data-lucide="scroll-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 12h-5"></path><path d="M15 8h-5"></path><path d="M19 17V5a2 2 0 0 0-2-2H4"></path><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"></path></svg>
<h3 className="text-sm font-semibold text-slate-200">Ancient Wisdom</h3>
</div>
</div>
</div>
</section>

<section className="text-slate-900 bg-slate-100 pt-24 pb-24">
<div className="mx-auto max-w-5xl px-6 lg:px-8">
<div className="flex items-center gap-3 mb-10 border-b border-slate-200 pb-4">
<svg className="lucide lucide-book-open h-5 w-5 text-slate-500" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
<h2 className="text-xl font-semibold tracking-tight text-slate-800">Scientific References &amp; Citations</h2>
</div>
<div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-12">

<div className="space-y-6">
<div className="group">
<h4 className="text-sm font-bold text-slate-800">Orch OR Theory</h4>
<p className="mt-1 text-xs leading-5 text-slate-600">Hameroff, S., &amp; Penrose, R. (2014). Consciousness in the universe: A review of the 'Orch OR' theory. *Physics of Life Reviews*.</p>
<a className="mt-2 inline-flex items-center text-[10px] font-medium uppercase tracking-wider text-sky-600 hover:text-sky-800" href="#">View Source</a>
</div>
<div className="group">
<h4 className="text-sm font-bold text-slate-800">Default Mode Network</h4>
<p className="mt-1 text-xs leading-5 text-slate-600">Carhart-Harris, R. L., et al. (2014). The entropic brain: a theory of conscious states informed by neuroimaging research with psychedelics.</p>
<a className="mt-2 inline-flex items-center text-[10px] font-medium uppercase tracking-wider text-sky-600 hover:text-sky-800" href="#">View Source</a>
</div>
</div>

<div className="space-y-6">
<div className="group">
<h4 className="text-sm font-bold text-slate-800">Meditation &amp; Plasticity</h4>
<p className="mt-1 text-xs leading-5 text-slate-600">Lazar, S. W., et al. (2005). Meditation experience is associated with increased cortical thickness. *Neuroreport*.</p>
<a className="mt-2 inline-flex items-center text-[10px] font-medium uppercase tracking-wider text-sky-600 hover:text-sky-800" href="#">View Source</a>
</div>
<div className="group">
<h4 className="text-sm font-bold text-slate-800">Observer Effect</h4>
<p className="mt-1 text-xs leading-5 text-slate-600">Wheeler, J. A. (1978). The 'Past-Future' Interface. In *Mathematical Foundations of Quantum Theory*.</p>
<a className="mt-2 inline-flex items-center text-[10px] font-medium uppercase tracking-wider text-sky-600 hover:text-sky-800" href="#">View Source</a>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="text-slate-900 bg-slate-950 border-slate-200 border-t pt-12 pb-12">
<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 lg:flex-row lg:px-8">
<p className="text-xs text-slate-500">© 2024 Science of Spirituality. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-slate-500 hover:text-slate-900" href="#">Privacy Policy</a>
<a className="text-xs text-slate-500 hover:text-slate-900" href="#">Terms of Service</a>
</div>
</div>
</footer>


    </>
  );
}
