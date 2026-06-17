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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Intersection Observer for Reveal Animations
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Stagger hero elements on load
        window.addEventListener('load', () => {
            document.querySelectorAll('section:first-of-type .reveal').forEach(el => {
                el.classList.add('active');
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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 px-6 md:px-12 py-4 flex justify-between items-center">
<div className="flex items-center">
<img alt="LifeSpan Medicine" className="h-10 w-auto" src="https://s3-media0.fl.yelpcdn.com/bphoto/nW48BHM0JjKtJIZcNM6x-A/348s.jpg"/>
</div>
<div className="hidden md:block">
<span className="text-[0.65rem] tracking-[0.2em] text-zinc-400 font-medium uppercase">Longevity Medicine · Since 1992</span>
</div>
</nav>

<section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-6 py-20 bg-white">
<div className="reveal max-w-3xl" style={{transitionDelay: '100ms'}}>
<span className="text-xs tracking-[0.3em] gold-accent font-semibold uppercase mb-6 block">Free 2-Minute Quiz</span>
<h1 className="text-5xl md:text-7xl tracking-tight text-zinc-900 mb-8 leading-[1.1]">
                How Old Is Your Body, <span className="gold-accent italic">Really?</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                Your calendar age is just a number. Your biological age is the one that actually matters. Find out where you stand in two minutes.
            </p>
<div className="flex flex-col items-center gap-4">
<a className="shimmer-sweep gold-gradient px-10 py-5 rounded-full text-zinc-950 text-xs tracking-[0.2em] font-semibold uppercase transition-transform hover:-translate-y-1 shadow-xl shadow-gold/20" href="#quiz">
                    Take the Free Quiz
                </a>
<span className="text-xs text-zinc-400 font-light italic">No email required to start · Takes 2 minutes</span>
</div>
</div>
</section>

<section className="bg-zinc-950 py-20 px-6">
<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
<div className="reveal" style={{transitionDelay: '100ms'}}>
<div className="playfair text-4xl gold-accent mb-2">1992</div>
<div className="text-[0.6rem] tracking-[0.2em] text-zinc-500 font-medium uppercase">Year Founded</div>
</div>
<div className="reveal" style={{transitionDelay: '200ms'}}>
<div className="playfair text-4xl gold-accent mb-2">3</div>
<div className="text-[0.6rem] tracking-[0.2em] text-zinc-500 font-medium uppercase">Locations Nationwide</div>
</div>
<div className="reveal" style={{transitionDelay: '300ms'}}>
<div className="playfair text-4xl gold-accent mb-2">9+</div>
<div className="text-[0.6rem] tracking-[0.2em] text-zinc-500 font-medium uppercase">World Class Providers</div>
</div>
<div className="reveal" style={{transitionDelay: '400ms'}}>
<div className="playfair text-4xl gold-accent mb-2">75</div>
<div className="text-[0.6rem] tracking-[0.2em] text-zinc-500 font-medium uppercase">Platinum Program Spots</div>
</div>
</div>
</section>

<section className="bg-[#faf9f6] py-32 px-6">
<div className="max-w-4xl mx-auto">
<h2 className="reveal playfair text-3xl md:text-5xl tracking-tight leading-tight mb-16 text-zinc-900">
                Most doctors look for what's wrong. We look for how good you can actually feel.
            </h2>
<div className="grid md:grid-cols-1 gap-8 max-w-2xl">
<p className="reveal text-lg text-zinc-600 font-light leading-relaxed">
                    There's a big difference between "nothing is wrong" and actually feeling great.
                </p>
<p className="reveal text-lg text-zinc-600 font-light leading-relaxed">
                    At LifeSpan Medicine, we focus on your health. Not your disease.
                </p>
<p className="reveal text-lg text-zinc-600 font-light leading-relaxed">
                    Dr. Chris Renna founded this practice in 1992 on one idea. Conventional medicine is built to diagnose problems. It is not built to build vitality.
                </p>
<p className="reveal text-lg text-zinc-600 font-light leading-relaxed">
                    So he built something that does both. For over 30 years, patients have traveled from around the world to get it.
                </p>
</div>
</div>
</section>

<section className="bg-white py-32 px-6">
<div className="max-w-6xl mx-auto">
<h2 className="reveal playfair text-3xl md:text-4xl tracking-tight mb-16 text-center">What Patients Say</h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="reveal bg-[#faf9f6] border-l-4 border-gold p-10 md:p-12 transition-transform hover:scale-[1.01]">
<div className="flex gap-1 mb-6">
<iconify-icon className="gold-accent text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="gold-accent text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="gold-accent text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="gold-accent text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="gold-accent text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="playfair italic text-xl md:text-2xl leading-relaxed text-zinc-800 mb-8">
                        "Dr. Renna changed my life. All of the injuries from my athletic youth were starting to add up and the constant pain from arthritis seemed to be something I was going to have to live with. Since having the injections I have been able to ski... and to live my active life without having to manage pain."
                    </p>
<span className="text-xs tracking-[0.2em] gold-accent font-semibold uppercase">Lifespan Medicine Patient</span>
</div>

<div className="reveal bg-[#faf9f6] border-l-4 border-gold p-10 md:p-12 transition-transform hover:scale-[1.01]" style={{transitionDelay: '200ms'}}>
<div className="flex gap-1 mb-6">
<iconify-icon className="gold-accent text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="gold-accent text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="gold-accent text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="gold-accent text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="gold-accent text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="playfair italic text-xl md:text-2xl leading-relaxed text-zinc-800 mb-8">
                        "I really do believe that the anti-inflammatory program at LifeSpan Medicine changed our lives for the better and I can't thank you enough. I know that the changes I made helped me with this pregnancy. The lifestyle changes have also given our little girl the best start she could hope for in life."
                    </p>
<span className="text-xs tracking-[0.2em] gold-accent font-semibold uppercase">Lifespan Medicine Patient</span>
</div>
</div>
</div>
</section>

<section className="bg-zinc-950 py-32 px-6">
<div className="max-w-4xl mx-auto text-center reveal">
<iconify-icon className="text-zinc-800 text-6xl mb-8" icon="solar:quote-bold"></iconify-icon>
<blockquote className="playfair italic text-2xl md:text-4xl text-white leading-relaxed mb-10">
                "Since having the injections I have been able to ski... and to live my active life without having to manage pain."
            </blockquote>
<span className="text-xs tracking-[0.3em] gold-accent font-semibold uppercase italic">Lifespan Medicine Patient</span>
</div>
</section>

<section className="bg-zinc-100 py-32 px-6">
<div className="max-w-6xl mx-auto">
<h2 className="reveal playfair text-3xl md:text-4xl tracking-tight mb-16 text-center">How It Works</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="reveal bg-white p-10 border-t-4 border-gold shadow-sm">
<div className="playfair text-5xl gold-accent mb-6">01</div>
<h3 className="playfair text-xl mb-4 text-zinc-900">Take the Quiz</h3>
<p className="text-zinc-500 font-light leading-relaxed">
                        Two minutes. Twelve questions. You get a biological age score and a personalized breakdown.
                    </p>
</div>

<div className="reveal bg-white p-10 border-t-4 border-gold shadow-sm" style={{transitionDelay: '100ms'}}>
<div className="playfair text-5xl gold-accent mb-6">02</div>
<h3 className="playfair text-xl mb-4 text-zinc-900">See Your Results</h3>
<p className="text-zinc-500 font-light leading-relaxed">
                        Find out where your body is aging faster than it should. And what to do about it.
                    </p>
</div>

<div className="reveal bg-white p-10 border-t-4 border-gold shadow-sm" style={{transitionDelay: '200ms'}}>
<div className="playfair text-5xl gold-accent mb-6">03</div>
<h3 className="playfair text-xl mb-4 text-zinc-900">Book a Consult</h3>
<p className="text-zinc-500 font-light leading-relaxed">
                        If it makes sense, book a call with a LifeSpan physician. No pressure. Just a real conversation.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-white py-32 px-6">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
<div className="reveal w-64 h-64 md:w-80 md:h-80 flex-shrink-0 relative">
<div className="absolute inset-0 border-2 border-gold rounded-full -m-3"></div>
<img alt="Dr. Chris Renna" className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" src="https://images.squarespace-cdn.com/content/v1/561335dee4b03787be6d1501/1446489069698-R0100Y70BZ83BFPHCEG1/Dr_Chris_Renna_Lifespan_Medicine.jpg?format=750w"/>
</div>
<div className="reveal flex-1 text-center md:text-left">
<span className="text-[0.65rem] tracking-[0.3em] gold-accent font-semibold uppercase mb-4 block">Founder, LifeSpan Medicine</span>
<h2 className="playfair text-3xl md:text-4xl tracking-tight mb-8">Dr. Chris Renna, DO</h2>
<div className="space-y-6">
<p className="text-lg text-zinc-600 font-light leading-relaxed">
                        Dr. Renna has been practicing longevity and preventive medicine since 1992.
                    </p>
<p className="text-lg text-zinc-600 font-light leading-relaxed">
                        He realized early on that medical school teaches doctors to diagnose disease. It does not teach them to create health.
                    </p>
<p className="text-lg text-zinc-600 font-light leading-relaxed">
                        So he built a practice that does. Clients travel from around the world to see his team in Santa Monica, Dallas, and Miami.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-zinc-950 py-32 px-6">
<div className="max-w-4xl mx-auto text-center reveal">
<blockquote className="playfair italic text-2xl md:text-4xl text-white leading-relaxed mb-10">
                "I really do believe that the anti-inflammatory program at LifeSpan Medicine changed our lives for the better."
            </blockquote>
<span className="text-xs tracking-[0.3em] gold-accent font-semibold uppercase italic">Lifespan Medicine Patient</span>
</div>
</section>

<section className="bg-zinc-100 py-32 px-6 text-center" id="quiz">
<div className="max-w-3xl mx-auto reveal">
<h2 className="playfair text-3xl md:text-5xl tracking-tight leading-tight mb-8">Find Out How Old Your Body Actually Is</h2>
<p className="text-lg text-zinc-500 font-light mb-12">
                It takes two minutes. The results might surprise you.
            </p>
<div className="flex flex-col items-center gap-6">
<a className="shimmer-sweep gold-gradient px-12 py-6 rounded-full text-zinc-950 text-xs tracking-[0.2em] font-semibold uppercase transition-transform hover:-translate-y-1 shadow-2xl shadow-gold/30" href="#">
                    Take the Free Quiz Now
                </a>
<span className="text-xs tracking-widest text-zinc-400 font-medium uppercase">Santa Monica · Dallas · Miami</span>
</div>
</div>
</section>

<footer className="bg-zinc-950 pt-24 pb-12 px-6 text-center">
<div className="max-w-4xl mx-auto">
<div className="mb-12">
<a className="text-sm tracking-widest gold-accent transition-opacity hover:opacity-80" href="https://lifespanmedicine.com">lifespanmedicine.com</a>
</div>
<div className="text-[0.65rem] tracking-widest text-zinc-600 uppercase mb-16">
                © LifeSpan Medicine. All rights reserved.
            </div>
<div className="border-t border-zinc-900 pt-12">
<p className="text-[0.6rem] text-zinc-600 leading-relaxed max-w-2xl mx-auto uppercase tracking-tighter opacity-60">
                    Testimonials appearing on this site reflect individual experiences. Results may vary. These statements have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any illness.
                </p>
</div>
</div>
</footer>


    </>
  );
}
