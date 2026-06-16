import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function startJourney() {
            const intro = document.getElementById('intro-screen');
            const main = document.getElementById('main-content');
            
            intro.style.opacity = '0';
            intro.style.pointerEvents = 'none';
            
            setTimeout(() => {
                intro.style.display = 'none';
                main.style.display = 'flex';
                void main.offsetWidth; // Trigger reflow
                main.classList.remove('hidden-section');
                main.classList.add('visible-section');
                checkScroll();
            }, 700);
        }

        function checkScroll() {
            const reveals = document.querySelectorAll('.reveal');
            const windowHeight = window.innerHeight;
            const elementVisible = 100;

            for (let i = 0; i < reveals.length; i++) {
                const elementTop = reveals[i].getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add('active');
                }
            }
        }

        window.addEventListener('scroll', checkScroll);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fafaf9] transition-opacity duration-700" id="intro-screen">
<div className="text-center p-6">
<span className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-stone-100 border border-stone-200 text-stone-600 animate-fade-in-up shadow-sm">
<span className="iconify" data-height="24" data-icon="lucide:sparkles" data-strokeWidth="1.5" data-width="24"></span>
</span>
<h1 className="text-6xl md:text-8xl font-serif-display font-normal text-stone-900 mb-8 tracking-tight animate-fade-in-up delay-300">
                Hello Sara!
            </h1>
<button className="group relative animate-fade-in-up delay-500 inline-flex items-center gap-2 bg-stone-900 text-stone-50 px-8 py-3 rounded-full text-sm font-medium hover:bg-stone-800 hover:scale-105 transition-all duration-300 shadow-lg shadow-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2" onclick="startJourney()">
                Open Letter
                <span className="iconify group-hover:translate-x-1 transition-transform" data-height="16" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16"></span>
</button>
</div>
</section>

<main className="hidden-section flex-col w-full max-w-4xl mx-auto pt-16 pb-32 px-6" id="main-content">

<header className="flex justify-center mb-20 md:mb-32 reveal">
<span className="text-[10px] uppercase font-semibold tracking-[0.2em] text-stone-400 border-b border-stone-200 pb-2">For Someone Special</span>
</header>

<section className="relative flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 mb-32 md:mb-48 reveal">

<div className="relative w-full md:w-1/2 max-w-sm group">
<div className="absolute -inset-2 bg-stone-200/50 rounded-[2rem] rotate-2 transition-transform group-hover:rotate-1"></div>

<div className="relative rounded-[1.8rem] overflow-hidden aspect-[3/4] border border-stone-200 shadow-xl bg-stone-100">

<img alt="Sara Portrait 1" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4d740fc1-1d3c-4650-ad95-7da23e6375d7_3840w.jpg"/>
</div>

<div className="absolute -bottom-24 -right-24 w-48 h-48 hidden md:block pointer-events-none text-stone-300">
<svg className="w-full h-full" viewbox="0 0 200 200">
<path d="M 20 20 Q 100 80 180 150" fill="none" stroke="currentColor" stroke-dasharray="8,8" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="flex-1 md:pt-32 text-center md:text-left relative z-10">
<h2 className="font-serif-display text-4xl md:text-5xl text-stone-900 leading-[1.1] mb-6">
                    Effortless <span className="italic text-stone-500">Beauty</span>
</h2>
<div className="space-y-4">
<p className="font-serif-text text-xl md:text-2xl text-stone-600 leading-relaxed italic">
                        "In a world of noise, your presence is a quiet melody. The way you carry yourself, captured here, speaks volumes of a grace that isn't just seen, but felt."
                    </p>
<div className="md:hidden flex justify-center text-stone-300 my-4">
<span className="iconify" data-height="20" data-icon="lucide:move-vertical" data-strokeWidth="1.5" data-width="20"></span>
</div>
<p className="text-xs text-stone-500 font-semibold tracking-widest uppercase opacity-60">
                        Mashallah
                    </p>
</div>
</div>
</section>

<section className="relative flex flex-col md:flex-row-reverse items-center md:items-start gap-10 md:gap-16 mb-32 md:mb-48 reveal">

<div className="relative w-full md:w-1/2 max-w-sm group">
<div className="absolute -inset-2 bg-stone-200/50 rounded-[2rem] -rotate-2 transition-transform group-hover:-rotate-1"></div>

<div className="relative rounded-[1.8rem] overflow-hidden aspect-[3/4] border border-stone-200 shadow-xl bg-stone-100">

<img alt="Sara Portrait 2" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9107b9e7-7a96-4a05-8e22-cf0e35f2a452_800w.jpg"/>
</div>

<div className="absolute -bottom-24 -left-24 w-48 h-48 hidden md:block pointer-events-none text-stone-300 transform scale-x-[-1]">
<svg className="w-full h-full" viewbox="0 0 200 200">
<path d="M 20 20 Q 100 80 180 150" fill="none" stroke="currentColor" stroke-dasharray="8,8" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="flex-1 md:pt-32 text-center md:text-right relative z-10">
<h2 className="font-serif-display text-4xl md:text-5xl text-stone-900 leading-[1.1] mb-6">
                    Inner <span className="italic text-stone-500">Radiance</span>
</h2>
<div className="space-y-4">
<p className="font-serif-text text-xl md:text-2xl text-stone-600 leading-relaxed italic">
                        "Your kindness reflects in your eyes. It is rare to find a soul where the outer beauty is perfectly matched by the purity within. May this light never dim."
                    </p>
<div className="md:hidden flex justify-center text-stone-300 my-4">
<span className="iconify" data-height="20" data-icon="lucide:move-vertical" data-strokeWidth="1.5" data-width="20"></span>
</div>
<p className="text-xs text-stone-500 font-semibold tracking-widest uppercase opacity-60">
                        Subhanallah
                    </p>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto text-center reveal">
<div className="mb-10 flex justify-center">
<div className="p-4 rounded-full bg-white border border-stone-100 shadow-sm text-stone-600">
<span className="iconify" data-height="28" data-icon="lucide:heart-handshake" data-strokeWidth="1.5" data-width="28"></span>
</div>
</div>
<h3 className="font-serif-display text-3xl md:text-4xl text-stone-900 mb-8">
                A Promise &amp; A Prayer
            </h3>
<div className="bg-white/60 backdrop-blur-sm border border-stone-200 rounded-2xl p-8 md:p-12 mb-12 shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-stone-200 to-transparent"></div>
<p className="font-serif-text text-lg md:text-xl text-stone-700 leading-relaxed mb-8 italic">
                    "May Allah (SWT) grant you a heart filled with tranquility and a path illuminated by His guidance. May your days be filled with barakah."
                </p>
<div className="flex items-center justify-center gap-4 mb-8 opacity-30">
<div className="h-px w-12 bg-stone-400"></div>
<span className="iconify" data-height="12" data-icon="lucide:star" data-width="12"></span>
<div className="h-px w-12 bg-stone-400"></div>
</div>
<p className="text-stone-500 font-light text-sm leading-relaxed max-w-lg mx-auto">
                    With Allah as my witness, I commit to this journey of self-improvement. Not just for the world, but to honor the faith you have in my potential. I will strive to be a person of better character, discipline, and deen.
                </p>
</div>
<div className="flex flex-col items-center gap-6">
<span className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400">Fi Amanillah</span>
<div className="h-16 w-px bg-gradient-to-b from-stone-300 to-transparent"></div>
</div>
</section>
</main>
<footer className="w-full text-center py-10 text-stone-400 text-xs font-light">
<p>© 2024 • Written with Sincerity</p>
</footer>


    </>
  );
}
