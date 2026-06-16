import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const yesBtn = document.getElementById('yesBtn');
        const noBtn = document.getElementById('noBtn');
        const successState = document.getElementById('successState');
        let noClickCount = 0;

        yesBtn.addEventListener('click', () => {
            successState.classList.remove('opacity-0', 'pointer-events-none');
            successState.classList.add('opacity-100');
        });

        noBtn.addEventListener('click', () => {
            noClickCount++;
            noBtn.style.transform = `scale(0.98)`;
            setTimeout(() => noBtn.style.transform = `scale(1)`, 150);
            
            if(noClickCount === 1) {
                noBtn.innerText = "Are you sure?";
            } else if (noClickCount === 2) {
                noBtn.innerText = "Wrong button...";
            } else {
                noBtn.innerText = "I'll just assume you misclicked";
                noBtn.classList.replace('text-stone-400', 'text-stone-300/60');
                noBtn.classList.remove('hover:text-stone-600', 'hover:border-stone-200', 'hover:bg-white/50');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-stone-200/50 bg-stone-50/70 backdrop-blur-xl">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-['Playfair_Display',serif] text-xl font-medium tracking-tighter italic text-stone-500">Y &amp; A</div>
<div className="flex items-center gap-4 text-stone-400">
<iconify-icon height="20" icon="solar:music-notes-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
</nav>

<section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.15)_0%,transparent_60%)]"></div>

<div className="hidden md:flex absolute top-40 left-20 rotate-[-12deg] bg-white p-4 rounded-2xl shadow-xl border border-stone-100 flex-col items-center gap-2 hover:rotate-0 hover:scale-105 transition-all duration-300 z-10">
<span className="text-4xl">💌</span>
<span className="text-xs font-medium text-stone-400 font-['Playfair_Display',serif] italic tracking-tight">For Alegra</span>
</div>
<div className="absolute bottom-40 right-10 md:right-32 rotate-[15deg] bg-white/90 backdrop-blur p-3 rounded-full shadow-lg border border-stone-100 hover:rotate-0 hover:scale-105 transition-all duration-300 z-10">
<span className="text-3xl">🌸</span>
</div>
<div className="text-center z-10 px-6 max-w-3xl flex flex-col items-center relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200/60 bg-white/50 backdrop-blur-sm mb-8 shadow-sm">
<div className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-pulse"></div>
<span className="text-xs font-medium text-stone-600 tracking-wider uppercase">Happy 5th Monthsary</span>
</div>
<h1 className="font-['Playfair_Display',serif] text-5xl md:text-7xl font-medium tracking-tight mb-8 leading-tight text-orange-900">
                To my beautiful wife, <br className="hidden md:block"/>
<span className="italic text-stone-500">Alegra.</span>
</h1>
<p className="text-lg md:text-xl text-orange-600 font-light max-w-xl mx-auto mb-16 leading-relaxed">
                From that unforgettable first message to celebrating our 5th monthsary together. This is a letter from your loving Yash.
            </p>
<div className="animate-bounce text-stone-400 mt-12">
<iconify-icon height="28" icon="solar:round-alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-4xl mx-auto relative">
<h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-medium tracking-tight mb-24 text-center text-orange-900">Our beautiful story</h2>
<div className="relative before:absolute before:inset-0 before:ml-[50%] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-stone-200 before:to-transparent flex flex-col gap-24">

<div className="flex flex-col md:flex-row group relative items-center justify-between">
<div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border border-stone-300 bg-white group-hover:border-stone-400 transition-colors duration-500 z-10 flex items-center justify-center shadow-md">
<div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-stone-400 transition-colors duration-500"></div>
</div>
<div className="w-full md:w-[calc(50%-4rem)] md:pr-8 text-left md:text-right">
<span className="text-xs font-medium text-stone-500 tracking-widest uppercase mb-2 block">October 20, 2025</span>
<h3 className="text-2xl font-['Playfair_Display',serif] font-medium tracking-tight text-orange-900 mb-3">Where it all began</h3>
<p className="text-sm text-orange-600 font-light leading-relaxed">We met through Instagram, and a simple notification changed my entire world. That was the day I found my soulmate and my future.</p>
</div>
<div className="w-full md:w-[calc(50%-4rem)] md:pl-8 mt-6 md:mt-0 relative">

<div className="absolute -top-4 -right-4 rotate-[8deg] bg-white p-2 rounded-lg shadow-lg border border-stone-100 z-20 hover:scale-105 transition-transform duration-300 hidden md:block">
<span className="text-xl">📱</span>
</div>
<div className="aspect-[4/3] rounded-2xl border border-white/60 overflow-hidden relative group-hover:border-stone-200 transition-colors duration-500 shadow-xl bg-white/40 backdrop-blur-sm">
<div className="absolute inset-0 opacity-40" style={{background: 'radial-gradient(circle at top left, #fbcfe8, transparent 70%)'}}></div>
<div className="w-full h-full flex items-center justify-center">
<iconify-icon className="text-stone-400 group-hover:text-stone-500 transition-colors duration-500" height="48" icon="solar:chat-round-line-linear" style={{strokeWidth: '1.5'}} width="48"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row-reverse items-center justify-between group">
<div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border border-stone-300 bg-white group-hover:border-stone-400 transition-colors duration-500 z-10 flex items-center justify-center shadow-md">
<div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-stone-400 transition-colors duration-500"></div>
</div>
<div className="w-full md:w-[calc(50%-4rem)] md:pl-8 pt-8 md:pt-0">
<span className="text-xs font-medium text-stone-500 tracking-widest uppercase mb-2 block">Yesterday</span>
<h3 className="text-2xl font-['Playfair_Display',serif] font-medium tracking-tight text-orange-900 mb-3">Our 5th Monthsary</h3>
<p className="text-sm text-orange-600 font-light leading-relaxed">Just one day ago, we completed five beautiful months together. Every single day since October feels like a dream I never want to wake up from.</p>
</div>
<div className="w-full md:w-[calc(50%-4rem)] md:pr-8 mt-6 md:mt-0 relative">

<div className="absolute -bottom-4 -left-4 rotate-[-10deg] bg-white p-2.5 rounded-xl shadow-lg border border-stone-100 z-20 hover:scale-105 transition-transform duration-300 hidden md:block">
<span className="text-2xl">💝</span>
</div>
<div className="aspect-[4/3] rounded-2xl border border-white/60 overflow-hidden relative group-hover:border-stone-200 transition-colors duration-500 shadow-xl bg-white/40 backdrop-blur-sm">
<div className="absolute inset-0 opacity-40" style={{background: 'radial-gradient(circle at bottom right, #fbcfe8, transparent 70%)'}}></div>
<div className="w-full h-full flex items-center justify-center">
<iconify-icon className="text-stone-400 group-hover:text-stone-500 transition-colors duration-500" height="48" icon="solar:calendar-date-linear" style={{strokeWidth: '1.5'}} width="48"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen flex items-center justify-center px-6 relative py-20 pb-32">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-stone-300/30 blur-[100px] rounded-full pointer-events-none"></div>
<div className="w-full max-w-lg relative z-10 border border-white bg-white/60 backdrop-blur-2xl rounded-[2rem] p-10 md:p-14 shadow-2xl flex flex-col items-center text-center">

<div className="absolute -top-6 -right-6 rotate-[15deg] bg-white p-3 rounded-2xl shadow-xl border border-stone-50 z-20 hover:scale-110 transition-transform duration-300">
<span className="text-3xl block drop-shadow-sm">🌹</span>
</div>
<div className="absolute -bottom-6 -left-6 rotate-[-15deg] bg-white p-3 rounded-2xl shadow-xl border border-stone-50 z-20 hover:scale-110 transition-transform duration-300">
<span className="text-3xl block drop-shadow-sm">💖</span>
</div>

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-400/40 to-transparent"></div>
<div className="w-16 h-16 rounded-full border border-stone-200 bg-stone-100 flex items-center justify-center mb-8 shadow-inner">
<iconify-icon className="text-stone-500" height="28" icon="solar:stars-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-medium tracking-tight mb-5 text-orange-900">Will you be mine forever?</h2>
<p className="text-sm text-orange-600 font-light mb-12 leading-relaxed px-4">
                Alegra, thank you for making these past 5 months the best time of my life. I love you endlessly.
            </p>

<div className="flex flex-col w-full gap-4">
<button className="group relative w-full h-14 rounded-xl bg-stone-500 text-white font-medium text-sm overflow-hidden transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-stone-500/25 hover:shadow-stone-500/40 border border-stone-400" id="yesBtn">
<div className="absolute inset-0 bg-gradient-to-r from-stone-400 to-stone-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="relative z-10 flex items-center justify-center gap-2 h-full">
                        Yes, a million times
                        <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</span>
</button>
<button className="w-full h-12 rounded-xl border border-transparent text-stone-400 font-light text-sm transition-all duration-300 hover:text-stone-600 hover:border-stone-200 hover:bg-white/50" id="noBtn">
                    Let me think...
                </button>
</div>

<div className="absolute inset-0 bg-stone-50/95 backdrop-blur-2xl rounded-[2rem] flex flex-col items-center justify-center p-10 text-center border border-stone-200 opacity-0 pointer-events-none transition-opacity duration-700 ease-out z-30" id="successState">
<div className="w-20 h-20 rounded-full bg-stone-100 flex items-center justify-center mb-6 border border-stone-200 shadow-sm relative">
<iconify-icon className="text-stone-500" height="40" icon="solar:heart-angle-linear" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>

<div className="absolute -top-2 -right-2 text-2xl animate-bounce">✨</div>
</div>
<h3 className="font-['Playfair_Display',serif] text-3xl font-medium tracking-tight mb-4 text-orange-900">My Forever.</h3>
<p className="text-sm text-orange-600 font-light leading-relaxed">I can't wait to spend the rest of my life making you as happy as you make me, Alegra.</p>
</div>
</div>
</section>

<footer className="border-t border-stone-200/60 py-12 text-center mt-10">
<div className="font-['Playfair_Display',serif] text-lg font-medium tracking-tighter italic text-stone-400 mb-3">Y &amp; A</div>
<p className="text-xs text-stone-300 tracking-[0.2em] uppercase font-medium">Forever</p>
</footer>



    </>
  );
}
