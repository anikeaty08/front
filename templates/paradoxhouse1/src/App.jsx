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
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1 });
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
});



function openGallery() {
const modal = document.getElementById('gallery-modal');
if(modal) {
modal.classList.remove('hidden');
document.body.classList.add('overflow-hidden');
}
}
function closeGallery() {
const modal = document.getElementById('gallery-modal');
if(modal) {
modal.classList.add('hidden');
document.body.classList.remove('overflow-hidden');
}
}
function openAmenities() {
const modal = document.getElementById('amenities-modal');
if(modal) {
modal.classList.remove('hidden');
document.body.classList.add('overflow-hidden');
}
}
function closeAmenities() {
const modal = document.getElementById('amenities-modal');
if(modal) {
modal.classList.add('hidden');
document.body.classList.remove('overflow-hidden');
}
}
function toggleInput(el) {
el.classList.toggle('border-rose-500');
el.classList.toggle('bg-rose-950/10');
const icon = el.querySelector('iconify-icon');
if(icon) {
icon.classList.toggle('rotate-180');
icon.classList.toggle('text-rose-500');
}
}
document.addEventListener('keydown', (e) => {
if (e.key === 'Escape') {
closeGallery();
closeAmenities();
}
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute inset-0 mx-auto max-w-7xl grid-lines opacity-20"></div>
<div className="absolute top-[-10%] right-0 w-[40vw] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--burgundy-deep),_transparent_70%)] opacity-40 blur-3xl"></div>
</div>

<div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 animate-on-scroll">
<nav className="flex items-center gap-8 rounded-full border border-white/5 bg-[#050505]/80 p-2 pr-2 pl-6 shadow-2xl backdrop-blur-xl ring-1 ring-white/5">
<a className="font-serif-display text-xl tracking-tight text-white hover:text-rose-200 transition-colors" href="#">
          Paradox
        </a>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-400">
<a className="text-white" href="#">The Concept</a>
<a className="hover:text-white transition-colors" href="#">Philosophy</a>
<a className="hover:text-white transition-colors" href="#">Experience</a>
</div>
<a className="group flex items-center gap-2 rounded-full bg-neutral-800 border border-white/5 px-5 py-2 text-xs font-medium text-white transition-all hover:bg-neutral-700" href="#">
<span>Inquire</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</nav>
</div>
<main className="relative z-10 pb-32">
<section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center justify-center min-h-[70vh]">
<div className="animate-on-scroll space-y-8 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-rose-300 uppercase tracking-widest font-bold mb-4">
<iconify-icon icon="lucide:sparkles" width="12"></iconify-icon>
            Home
          </div>
<h1 className="font-serif-display text-7xl md:text-9xl text-white tracking-tighter leading-none">
            Paradox
            <span className="text-neutral-600">House</span>
</h1>
<p className="text-xl md:text-2xl text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
            A physical place for those who refuse average lives.
          </p>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-rose-900/10 blur-[100px] -z-10 pointer-events-none rounded-full"></div>
</section>
<section className="py-32 px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-black/50">
<div className="max-w-4xl mx-auto text-center animate-on-scroll">
<h2 className="text-4xl md:text-6xl font-serif-display text-white mb-10 leading-[1.1]">
            Not a retreat.
            <br/>
            Not a hotel.
            <br/>
<span className="text-rose-600">Not content.</span>
</h2>
<p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto">
            A living space designed to sharpen the mind, deepen relationships,
            and reset trajectories.
          </p>
</div>
</section>
<section className="py-32 px-6 max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-20">
<div className="animate-on-scroll space-y-8">
<h3 className="text-2xl text-white font-serif-display border-l-2 border-rose-500 pl-6">
              Why Paradox House Exists
            </h3>
<div className="space-y-6 text-neutral-400 font-light text-lg">
<p>
                Most people consuming personal development don’t lack
                information.
                <br/>
                They lack context, mirrors, and friction.
              </p>
<ul className="space-y-4 pt-2">
<li className="flex items-start gap-4">
<div className="p-1 rounded bg-rose-950/30 text-rose-500">
<iconify-icon icon="lucide:x" width="16"></iconify-icon>
</div>
<span>They grow alone.</span>
</li>
<li className="flex items-start gap-4">
<div className="p-1 rounded bg-rose-950/30 text-rose-500">
<iconify-icon icon="lucide:x" width="16"></iconify-icon>
</div>
<span>They think fast, but shallow.</span>
</li>
<li className="flex items-start gap-4">
<div className="p-1 rounded bg-rose-950/30 text-rose-500">
<iconify-icon icon="lucide:x" width="16"></iconify-icon>
</div>
<span>They’re surrounded by people, yet rarely seen.</span>
</li>
</ul>
<p className="text-white italic font-medium pt-4">
                Paradox House exists because real transformation requires a
                place:
              </p>
</div>
</div>
<div className="animate-on-scroll space-y-8">
<h3 className="text-2xl text-white font-serif-display border-l-2 border-rose-500 pl-6">
              What It Actually Is
            </h3>
<div className="space-y-6 text-neutral-400 font-light text-lg">
<p>
                Paradox House is a private home where a small group of carefully
                selected members live, think, train, and reflect together for a
                defined period of time.
              </p>
<p className="text-neutral-400 font-light text-lg">It combines:</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
<div className="p-8 rounded-xl bg-white/5 border border-white/5 text-center group hover:bg-white/10 transition-colors">
<iconify-icon className="text-3xl text-rose-500 mb-4 block mx-auto group-hover:scale-110 transition-transform" icon="lucide:home"></iconify-icon>
<span className="text-white text-base font-medium">
                    The intimacy of a home
                  </span>
</div>
<div className="p-8 rounded-xl bg-white/5 border border-white/5 text-center group hover:bg-white/10 transition-colors">
<iconify-icon className="text-3xl text-rose-500 mb-4 block mx-auto group-hover:scale-110 transition-transform" icon="lucide:users"></iconify-icon>
<span className="text-white text-base font-medium">
                    The intensity of a mastermind
                  </span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
<div className="mb-20 text-center animate-on-scroll">
<h2 className="text-4xl font-serif-display text-white">
            The Experience — How Time Is Spent Inside the House
          </h2>
<p className="text-neutral-500 mt-3 text-lg font-light">
            How time is spent inside the house
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll">
<div className="group p-10 rounded-2xl bg-[#080808] border border-white/5 hover:border-rose-900/30 transition-all duration-500 hover:-translate-y-1">
<div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-rose-500 mb-8 group-hover:bg-rose-900/20 transition-colors">
<iconify-icon icon="lucide:sunrise" width="28"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-serif-display mb-6">
              Mornings
            </h3>
<ul className="space-y-4 text-base text-neutral-400 font-light">
<li className="flex gap-3">
<span className="text-rose-500 mt-1.5 text-[10px]">●</span>
                Silence, movement, or solitude
              </li>
<li className="flex gap-3">
<span className="text-rose-500 mt-1.5 text-[10px]">●</span>
                Personal clarity rituals
              </li>
<li className="flex gap-3">
<span className="text-rose-500 mt-1.5 text-[10px]">●</span>
                Optional guided protocols
              </li>
</ul>
</div>
<div className="group p-10 rounded-2xl bg-[#080808] border border-white/5 hover:border-rose-900/30 transition-all duration-500 hover:-translate-y-1">
<div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-rose-500 mb-8 group-hover:bg-rose-900/20 transition-colors">
<iconify-icon icon="lucide:sun" width="28"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-serif-display mb-6">Days</h3>
<ul className="space-y-4 text-base text-neutral-400 font-light">
<li className="flex gap-3">
<span className="text-rose-500 mt-1.5 text-[10px]">●</span>
                Deep conversations (1:1, triads, group)
              </li>
<li className="flex gap-3">
<span className="text-rose-500 mt-1.5 text-[10px]">●</span>
                Strategic reflection on life, work, identity
              </li>
<li className="flex gap-3">
<span className="text-rose-500 mt-1.5 text-[10px]">●</span>
                Long walks, thinking time, writing
              </li>
</ul>
</div>
<div className="group p-10 rounded-2xl bg-[#080808] border border-white/5 hover:border-rose-900/30 transition-all duration-500 hover:-translate-y-1">
<div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-rose-500 mb-8 group-hover:bg-rose-900/20 transition-colors">
<iconify-icon icon="lucide:moon" width="28"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-serif-display mb-6">
              Evenings
            </h3>
<ul className="space-y-4 text-base text-neutral-400 font-light">
<li className="flex gap-3">
<span className="text-rose-500 mt-1.5 text-[10px]">●</span>
                Fireside dialogues
              </li>
<li className="flex gap-3">
<span className="text-rose-500 mt-1.5 text-[10px]">●</span>
                Meaningful dinners
              </li>
<li className="flex gap-3">
<span className="text-rose-500 mt-1.5 text-[10px]">●</span>
                Perspective-shifting questions, not answers
              </li>
</ul>
</div>
</div>
</section>
<section className="py-32 px-6 max-w-7xl mx-auto">
<div className="bg-gradient-to-br from-[#0a0a0a] to-black rounded-3xl p-8 md:p-16 border border-white/10 relative overflow-hidden animate-on-scroll shadow-2xl">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-600/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
<div className="space-y-8">
<h2 className="text-4xl font-serif-display text-white">
                You may leave with:
              </h2>
<ul className="space-y-6">
<li className="flex items-start gap-4 text-neutral-300 text-lg font-light">
<iconify-icon className="text-rose-600 text-2xl mt-0.5 shrink-0" icon="lucide:check-circle-2"></iconify-icon>
<span>A clearer sense of what actually matters</span>
</li>
<li className="flex items-start gap-4 text-neutral-300 text-lg font-light">
<iconify-icon className="text-rose-600 text-2xl mt-0.5 shrink-0" icon="lucide:check-circle-2"></iconify-icon>
<span>Decisions you were avoiding</span>
</li>
<li className="flex items-start gap-4 text-neutral-300 text-lg font-light">
<iconify-icon className="text-rose-600 text-2xl mt-0.5 shrink-0" icon="lucide:check-circle-2"></iconify-icon>
<span>Relationships that last beyond the house</span>
</li>
<li className="flex items-start gap-4 text-neutral-300 text-lg font-light">
<iconify-icon className="text-rose-600 text-2xl mt-0.5 shrink-0" icon="lucide:check-circle-2"></iconify-icon>
<span>A recalibrated internal standard</span>
</li>
</ul>
</div>
<div className="border-l border-white/10 pl-0 lg:pl-16 pt-8 lg:pt-0">
<h3 className="text-xl text-white font-medium mb-8 flex items-center gap-3">
<iconify-icon className="text-rose-500" icon="lucide:quote"></iconify-icon>
                Many participants report one of these shifts:
              </h3>
<div className="space-y-4">
<div className="bg-white/5 p-6 rounded-xl border border-white/5">
<p className="text-neutral-300 italic">
                    "Ending something that no longer fits"
                  </p>
</div>
<div className="bg-white/5 p-6 rounded-xl border border-white/5">
<p className="text-neutral-300 italic">
                    "Committing fully to something they already knew"
                  </p>
</div>
<div className="bg-white/5 p-6 rounded-xl border border-white/5">
<p className="text-neutral-300 italic">
                    "Letting go of an identity that kept them “successful but
                    stuck”"
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#020202] py-12">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs text-neutral-500">
<div className="flex items-center gap-6">
<span className="font-serif-display text-lg text-white">Paradox</span>
<span>© 2024</span>
</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</footer>

    </>
  );
}
