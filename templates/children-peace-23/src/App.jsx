import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
            
            // Navbar Scroll Effect
            const header = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    header.querySelector('.h-24').classList.replace('h-24', 'h-20');
                    header.querySelector('.bg-black\\/60').classList.replace('bg-black/60', 'bg-black/90');
                } else {
                    header.querySelector('.h-20').classList.replace('h-20', 'h-24');
                    header.querySelector('.bg-black\\/90').classList.replace('bg-black/90', 'bg-black/60');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      
<div className="grain-mask"></div>

<header className="fixed top-0 z-50 w-full transition-all duration-300" id="navbar">
<div className="absolute inset-0 backdrop-blur-md border-b border-white/5"></div>
<div className="relative mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="font-serif text-2xl font-medium tracking-wide text-white">Dallaire Institute</span>
<span className="text-[10px] uppercase tracking-[0.2em] text-sky-500/80">Children, Peace &amp; Security</span>
</div>
<nav className="hidden gap-8 md:flex text-sm font-medium text-stone-400">
<a className="hover:text-white transition-colors" href="#beginning">The Beginning</a>
<a className="hover:text-white transition-colors" href="#mission">Our Mission</a>
<a className="hover:text-white transition-colors" href="#how-we-work">How We Work</a>
<a className="hover:text-white transition-colors" href="#impact">Impact</a>
<a className="hover:text-white transition-colors" href="#future">The Future</a>
</nav>
<a className="hidden sm:block rounded-full border border-white/10 bg-white/5 px-6 py-2 text-xs font-medium uppercase tracking-widest text-white hover:bg-white/10 transition-colors" href="#support">
                    Support
                </a>
</div>
</div>
</header>

<section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-20">

<div className="absolute inset-0 z-0 bg-[#020202]">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-900/20 via-[#020202] to-[#020202]"></div>
</div>
<div className="relative z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">

<div className="flex flex-col justify-center space-y-8 order-2 lg:order-1">
<div className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-500/30 bg-sky-900/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-sky-400">
<div className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-400"></div>
                    A Promise to Humanity
                </div>
<h1 className="font-serif text-5xl font-light leading-[1.1] tracking-tight text-white sm:text-7xl text-glow">
                    No child should ever be used in armed conflict. <br/>
<span className="italic text-sky-400">Again.</span>
</h1>
<p className="journal-font max-w-lg text-xl leading-relaxed text-stone-300">
                    This promise became the foundation of the Dallaire Institute for Children, Peace &amp; Security. We don't just hope for peace; we train the world to protect it.
                </p>
<div className="pt-4">
<button className="shiny-btn group relative rounded-full bg-sky-600 px-8 py-4 text-sm font-medium text-white shadow-[0_0_30px_rgba(2,132,199,0.3)] hover:bg-sky-500" onclick="document.getElementById('beginning').scrollIntoView({behavior: 'smooth'})">
<span>Read the Story</span>
</button>
</div>
</div>

<div className="flex items-center justify-center lg:justify-end order-1 lg:order-2">
<div className="relative h-[300px] w-[300px] sm:h-[450px] sm:w-[450px]">

<div className="absolute inset-0 rounded-full bg-sky-500/20 blur-[80px]"></div>

<div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 shadow-2xl spin-slow">
<img alt="Planet Earth from Space" className="h-full w-full object-cover opacity-90 brightness-110" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 rounded-full shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.8),inset_10px_10px_30px_rgba(255,255,255,0.1)]"></div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-stone-600 z-20">
<iconify-icon icon="solar:mouse-minimalistic-linear" width="32"></iconify-icon>
</div>
</section>

<section className="relative w-full bg-[#050505] py-24 sm:py-32" id="beginning">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid gap-16 lg:grid-cols-2 lg:items-center gap-x-16 gap-y-16">

<div className="reveal-on-scroll relative overflow-hidden rounded-lg">
<div className="aspect-[4/5] w-full bg-stone-900">

<img alt="Silhouette of soldier in conflict" className="opacity-70 w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1542259685-610263305417?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-black via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>

<div className="reveal-on-scroll flex flex-col justify-center">
<span className="mb-4 block font-serif text-5xl text-stone-700/50">1994</span>
<h2 className="mb-8 font-serif text-4xl text-white leading-tight">
                        It carved itself into his soul. 
                        <span className="italic text-stone-400">Forever.</span>
</h2>
<div className="journal-font space-y-6 text-lg text-stone-300 leading-relaxed">
<p>
                            In 1994, during the horrific Rwandan genocide, Canadian UN Commander General Roméo Dallaire witnessed something that shattered him.
                        </p>
<p>
                            In the middle of violence, chaos, and fear, he saw children — not in classrooms, not with their families, not laughing — but being used as tools in a war they never chose.
                        </p>
<div className="border-l-2 border-red-900/50 pl-6 py-2 my-6 text-stone-400 italic">
                            Tiny hands holding weapons.
                            Small bodies forced into checkpoints.
                            Broken childhoods standing in front of armed adults.
                        </div>
<p>
                            This wasn’t just heartbreaking. It was life-changing. That moment followed him long after the uniforms were folded away. It lived in his mind, in his memory, in his heart, refusing to fade.
                        </p>
<p>
                            But instead of letting that pain destroy him, he transformed it into a mission: 
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative flex w-full items-center justify-center overflow-hidden py-32 bg-[#080808]" id="mission">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fillOpacity=\\'0.4\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')'}}></div>
<div className="reveal-on-scroll relative z-10 max-w-4xl px-6 text-center">
<h3 className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-sky-500">The Birth of a Global Movement</h3>
<p className="journal-font mb-12 text-xl text-stone-300 leading-relaxed">
                What began as the Child Soldiers Initiative evolved into a powerful global organization dedicated to protecting children from the horrors of armed conflict. It stands on one core belief: 
                <span className="block mt-4 text-white font-serif italic text-2xl">Every child deserves a life of safety, hope, play, learning, and love — not war.</span>
</p>
<div className="relative py-12">
<div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-sky-500/50 to-transparent"></div>
<h2 className="relative bg-[#080808] px-4 font-serif text-3xl font-light text-white sm:text-5xl lg:text-6xl text-glow leading-tight">
                    “To end the recruitment and use of children in armed conflict — forever.”
                </h2>
</div>
<p className="mt-8 text-stone-400">The Institute exists so no child ever becomes a weapon, a shield, or a target.</p>
</div>
</section>

<section className="relative w-full bg-[#020202] py-24" id="how-we-work">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mb-16 text-center">
<h2 className="font-serif text-4xl text-white">How We Bring Our Mission to Life</h2>
<div className="mx-auto mt-4 h-1 w-20 bg-sky-600 rounded-full"></div>
</div>
<div className="grid gap-8 md:grid-cols-2">

<div className="card-glow reveal-on-scroll group rounded-2xl border border-white/10 bg-[#0a0a0a] p-8 sm:p-10">
<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-sky-900/20 text-sky-400">
<iconify-icon icon="solar:shield-user-linear" width="32"></iconify-icon>
</div>
<h3 className="mb-4 font-serif text-2xl text-white">1. Transforming Security Forces with Training</h3>
<p className="text-sm leading-relaxed text-stone-400 mb-4">
                        Around the world, we train military, police, peacekeepers, and security actors. We teach them how to interact with children safely:
                    </p>
<ul className="space-y-2 text-sm text-stone-300 list-disc list-inside marker:text-sky-500">
<li>How to de-escalate interactions</li>
<li>How to respond with compassion</li>
<li>How to identify early signs of recruitment</li>
<li>How to protect a child instead of fearing them</li>
</ul>
<p className="mt-4 text-xs italic text-stone-500">Many soldiers say the training changed how they see children in conflict — turning hesitation into humanity.</p>
</div>

<div className="card-glow reveal-on-scroll group rounded-2xl border border-white/10 bg-[#0a0a0a] p-8 sm:p-10">
<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-900/20 text-indigo-400">
<iconify-icon icon="solar:magnifer-linear" width="32"></iconify-icon>
</div>
<h3 className="mb-4 font-serif text-2xl text-white">2. Research That Predicts Violence</h3>
<p className="text-sm leading-relaxed text-stone-400 mb-4">
                        Our researchers study why armed groups target children and how to prevent recruitment at the root. We analyze:
                    </p>
<ul className="space-y-2 text-sm text-stone-300 list-disc list-inside marker:text-indigo-500">
<li>How communities become vulnerable</li>
<li>What early-warning signs appear before violence rises</li>
<li>What pushes families toward desperation</li>
</ul>
<p className="mt-4 text-xs italic text-stone-500">Their research influences governments, global peacekeeping missions, and international security decisions.</p>
</div>

<div className="card-glow reveal-on-scroll group rounded-2xl border border-white/10 bg-[#0a0a0a] p-8 sm:p-10">
<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-900/20 text-emerald-400">
<iconify-icon icon="solar:heart-angle-linear" width="32"></iconify-icon>
</div>
<h3 className="mb-4 font-serif text-2xl text-white">3. Community Engagement &amp; Healing</h3>
<p className="text-sm leading-relaxed text-stone-400 mb-4">
                        Where conflict destroys trust, we rebuild it. We work directly with parents, teachers, youth, community leaders, and former fighters.
                    </p>
<p className="text-sm text-stone-300">
                        We create programs that restore safety, rebuild trust, and empower communities to resist the recruitment of children. We heal pain from the ground up.
                    </p>
</div>

<div className="card-glow reveal-on-scroll group rounded-2xl border border-white/10 bg-[#0a0a0a] p-8 sm:p-10">
<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-amber-900/20 text-amber-400">
<iconify-icon icon="solar:document-text-linear" width="32"></iconify-icon>
</div>
<h3 className="mb-4 font-serif text-2xl text-white">4. Global Policy — The Vancouver Principles</h3>
<p className="text-sm leading-relaxed text-stone-400 mb-4">
                        We helped shape The Vancouver Principles, now adopted by over 100 governments. These principles guide peacekeepers globally on:
                    </p>
<ul className="space-y-2 text-sm text-stone-300 list-disc list-inside marker:text-amber-500">
<li>How to protect children</li>
<li>How to prevent recruitment</li>
<li>How to handle child encounters with care</li>
</ul>
<p className="mt-4 text-xs italic text-stone-500">This is global-scale change rooted in compassion.</p>
</div>
</div>
</div>
</section>

<section className="relative w-full bg-[#050505] py-24 overflow-hidden" id="impact">
<div className="reveal-on-scroll relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
<span className="mb-4 font-serif text-lg italic text-sky-500">Global Reach</span>
<h2 className="mb-12 max-w-2xl font-serif text-4xl text-white">Operating where the need is greatest.</h2>

<div className="relative w-full max-w-5xl aspect-[1.8/1] rounded-3xl border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden">

<img alt="World Map Background" className="absolute inset-0 h-full w-full object-cover opacity-30 grayscale invert mix-blend-overlay" src="https://images.unsplash.com/photo-1589519160732-5796a59b2521?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>


<div className="map-dot bg-sky-500 shadow-[0_0_15px_rgba(14,165,233,1)]" style={{top: '61%', left: '54.5%'}}>
<div className="map-tooltip">
<h4 className="text-sky-400 font-bold mb-1 uppercase tracking-wider text-xs">Rwanda</h4>
<p className="text-xs text-white mb-2 font-serif italic">Headquarters &amp; Center of Excellence</p>
<p className="text-[11px] text-stone-400 leading-snug">Home of the Institute. Leading global training programs for security forces and developing community-led prevention strategies.</p>
</div>
</div>

<div className="map-dot bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,1)]" style={{top: '61%', left: '53%'}}>
<div className="map-tooltip">
<h4 className="text-indigo-400 font-bold mb-1 uppercase tracking-wider text-xs">Democratic Republic of Congo</h4>
<p className="text-xs text-white mb-2 font-serif italic">Operational Training</p>
<p className="text-[11px] text-stone-400 leading-snug">Working with police and military to prevent child recruitment in conflict zones through specialized interaction training.</p>
</div>
</div>

<div className="map-dot bg-violet-500 shadow-[0_0_15px_rgba(139,92,246,1)]" style={{top: '57%', left: '55%'}}>
<div className="map-tooltip">
<h4 className="text-violet-400 font-bold mb-1 uppercase tracking-wider text-xs">South Sudan</h4>
<p className="text-xs text-white mb-2 font-serif italic">Policy &amp; Prevention</p>
<p className="text-[11px] text-stone-400 leading-snug">Implementing the Vancouver Principles and establishing early warning systems within communities.</p>
</div>
</div>

<div className="map-dot bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,1)]" style={{top: '54%', left: '49%'}}>
<div className="map-tooltip">
<h4 className="text-rose-400 font-bold mb-1 uppercase tracking-wider text-xs">Nigeria</h4>
<p className="text-xs text-white mb-2 font-serif italic">Research &amp; Engagement</p>
<p className="text-[11px] text-stone-400 leading-snug">Researching recruitment tactics of armed groups and engaging local youth to build resilience.</p>
</div>
</div>

<div className="map-dot bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,1)]" style={{top: '56%', left: '47%'}}>
<div className="map-tooltip">
<h4 className="text-emerald-400 font-bold mb-1 uppercase tracking-wider text-xs">Ghana</h4>
<p className="text-xs text-white mb-2 font-serif italic">Regional Hub</p>
<p className="text-[11px] text-stone-400 leading-snug">Serving as a training hub for West African peacekeeping forces deploying to conflict zones.</p>
</div>
</div>

<div className="map-dot bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,1)]" style={{top: '72%', left: '56%'}}>
<div className="map-tooltip">
<h4 className="text-amber-400 font-bold mb-1 uppercase tracking-wider text-xs">Mozambique</h4>
<p className="text-xs text-white mb-2 font-serif italic">Community Healing</p>
<p className="text-[11px] text-stone-400 leading-snug">Rebuilding trust between security forces and communities affected by insurgency.</p>
</div>
</div>
</div>
<p className="mt-6 text-xs uppercase tracking-widest text-stone-500">Hover over locations to explore our work</p>
</div>
</section>

<section className="relative w-full bg-[#020202] py-24">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<h2 className="font-serif text-3xl text-white mb-12 text-center">Transforming Conflict Into Hope</h2>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div className="relative overflow-hidden rounded-xl bg-white/5 p-8 transition hover:bg-white/10">
<iconify-icon className="text-sky-400 mb-4 text-3xl" icon="solar:user-heart-linear"></iconify-icon>
<p className="text-sm font-medium text-white mb-2">Soldiers with Empathy</p>
<p className="text-sm text-stone-400">Soldiers around the world now approach children with empathy because of their training. Hesitation has turned into humanity.</p>
</div>

<div className="relative overflow-hidden rounded-xl bg-white/5 p-8 transition hover:bg-white/10">
<iconify-icon className="text-sky-400 mb-4 text-3xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<p className="text-sm font-medium text-white mb-2">Restoring Trust</p>
<p className="text-sm text-stone-400">Communities once broken by conflict now rebuild trust with security forces. Families feel safer.</p>
</div>

<div className="relative overflow-hidden rounded-xl bg-white/5 p-8 transition hover:bg-white/10">
<iconify-icon className="text-sky-400 mb-4 text-3xl" icon="solar:globe-linear"></iconify-icon>
<p className="text-sm font-medium text-white mb-2">Systemic Change</p>
<p className="text-sm text-stone-400">Governments create better systems because of the Institute’s research. Policy is shifting globally.</p>
</div>

<div className="relative overflow-hidden rounded-xl bg-white/5 p-8 transition hover:bg-white/10 sm:col-span-2 lg:col-span-3">
<div className="flex flex-col sm:flex-row items-center gap-6">
<div className="h-16 w-16 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
<iconify-icon className="text-3xl" icon="solar:sun-2-linear"></iconify-icon>
</div>
<div>
<p className="text-lg font-serif text-white mb-1">The Ultimate Result</p>
<p className="text-stone-300">Peacekeepers enter conflict zones with clearer understanding and compassion. Most importantly, children return home, return to school, and return to hope.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden" id="future">

<div className="absolute inset-0">

<img alt="Child smiling in warm light" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30"></div>
</div>
<div className="reveal-on-scroll relative z-10 max-w-3xl px-6 text-center">
<h2 className="font-serif text-5xl font-medium text-white sm:text-7xl text-glow mb-8 leading-tight">
                The Future We Are Fighting For
            </h2>
<div className="journal-font space-y-4 text-xl font-light text-stone-100 mb-10">
<p>A world where every child can grow without fear.</p>
<p>Where families don’t worry their children will disappear.</p>
<p>Where armed groups no longer see children as targets.</p>
<p>Where communities stay united and safe, and peacekeepers protect innocence before anything else.</p>
</div>
<p className="font-serif text-3xl italic text-sky-300 mb-12">
                A world where children get to simply be children. <br/>
                Laugh. Learn. Dream. Grow.
            </p>
<p className="text-sm text-stone-300 uppercase tracking-widest mb-8">This future is not just possible — we are building it every day.</p>
<div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
<button className="shiny-btn rounded-full bg-white text-black px-10 py-4 font-bold tracking-wide hover:bg-stone-200">
                    Donate to the Cause
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black py-16 text-sm text-stone-500">
<div className="mx-auto max-w-7xl px-6 flex flex-col items-center justify-between gap-8 sm:flex-row">
<div className="flex flex-col items-start gap-2">
<span className="font-serif text-xl font-medium text-white">Dallaire Institute</span>
<span className="text-xs">Children, Peace &amp; Security</span>
</div>
<div className="flex gap-8 text-xs font-medium uppercase tracking-widest">
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:text-white transition-colors" href="#">Our Work</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex gap-4 text-xl">
<a className="hover:text-sky-500 transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear"></iconify-icon></a>
<a className="hover:text-sky-500 transition-colors" href="#"><iconify-icon icon="solar:brand-instagram-linear"></iconify-icon></a>
<a className="hover:text-sky-500 transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear"></iconify-icon></a>
</div>
</div>
<div className="mt-12 text-center text-xs text-stone-700">
            © 2023 Dallaire Institute. All rights reserved.
        </div>
</footer>



    </>
  );
}
