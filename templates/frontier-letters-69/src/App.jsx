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



tailwind.config = {
theme: {
extend: {
colors: {
stone: {
850: '#1f1f1e',
950: '#0c0c0c',
},
amber: {
350: '#dcb163',
}
}
}
}
}



        lucide.createIcons();
    
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
      

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-stone-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-display text-xl tracking-wider text-stone-100 font-medium hover:text-amber-500 transition-colors" href="#">
                FRONTIER LETTERS
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase text-stone-400">
<a className="hover:text-stone-100 transition-colors" href="#about">The Journey</a>
<a className="hover:text-stone-100 transition-colors" href="#how-it-works">How It Works</a>
<a className="hover:text-stone-100 transition-colors" href="#pricing">Membership</a>
<a className="bg-stone-100 text-stone-900 px-5 py-2.5 rounded hover:bg-amber-350 transition-colors font-semibold" href="#pricing">
                    Join
                </a>
</div>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

<div className="absolute inset-0 z-0">
<img alt="Old map and compass" className="w-full h-full object-cover opacity-30 grayscale contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/50 to-stone-950"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-stone-950/60 to-stone-950"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-900/30 bg-amber-950/10 text-amber-500 text-xs tracking-widest uppercase mb-8 font-medium">
<i className="w-3 h-3" data-lucide="feather"></i>
                Est. MMXXIV
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-stone-100 tracking-tight leading-none mb-8 drop-shadow-2xl">
                Letters That <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">Forge Men.</span>
</h1>
<p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto mb-12 font-reading leading-relaxed">
                Monthly letters from warriors, explorers, and ancient mentors—written to guide you through the rites of manhood. Ancient wisdom, delivered by wax and parchment.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
<a className="w-full md:w-auto px-8 py-4 bg-amber-700 hover:bg-amber-600 text-stone-100 rounded text-base font-semibold tracking-wide transition-all shadow-[0_0_20px_-5px_rgba(180,83,9,0.4)] flex items-center justify-center gap-2" href="#pricing">
                    Start Your Initiation
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="w-full md:w-auto px-8 py-4 bg-transparent border border-stone-700 hover:border-stone-500 text-stone-300 rounded text-base font-medium tracking-wide transition-all flex items-center justify-center gap-2" href="#sample">
<i className="w-4 h-4" data-lucide="scroll"></i>
                    Read a Sample Letter
                </a>
</div>
</div>
</header>

<section className="py-24 md:py-32 relative border-t border-white/5" id="about">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<h2 className="text-3xl md:text-4xl font-display font-medium text-stone-100 tracking-tight">
                    The Wisdom of the Frontier, <br/><span className="text-stone-500">Lost to the Modern World.</span>
</h2>
<div className="space-y-6 text-lg text-stone-400 leading-relaxed font-light">
<p>
                        In an age of instant notifications and fleeting content, we offer something permanent. Frontier Letters is a monthly subscription to a mythic narrative.
                    </p>
<p>
                        Each month, a heavy, wax-sealed envelope arrives at your door. Inside is a letter crafted on aged parchment, written by a fictional mentor—a scout, a king, a weary traveler—passing down hard-earned lessons on discipline, courage, and purpose.
                    </p>
<p>
                        This is not just reading. It is a ritual. A return to the tangible.
                    </p>
</div>
<div className="pt-4">
<ul className="space-y-4">
<li className="flex items-center gap-3 text-stone-300">
<i className="w-5 h-5 text-amber-600" data-lucide="check-circle-2"></i>
<span className="text-lg">Tangible, aged parchment artifacts</span>
</li>
<li className="flex items-center gap-3 text-stone-300">
<i className="w-5 h-5 text-amber-600" data-lucide="check-circle-2"></i>
<span className="text-lg">Cinematic storytelling &amp; Stoic philosophy</span>
</li>
<li className="flex items-center gap-3 text-stone-300">
<i className="w-5 h-5 text-amber-600" data-lucide="check-circle-2"></i>
<span className="text-lg">A collectible ongoing saga</span>
</li>
</ul>
</div>
</div>
<div className="relative h-[600px] bg-stone-900 rounded-sm overflow-hidden border border-white/10 shadow-2xl group">
<img alt="Wax seal letter" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="bg-stone-950/80 backdrop-blur border border-white/10 p-6 rounded-sm">
<p className="font-reading italic text-xl text-stone-300">"The wilderness does not negotiate. Neither should your principles."</p>
<p className="text-xs uppercase tracking-widest text-amber-500 mt-4 font-semibold">— Letter 004: The Scout</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 border-y border-white/5" id="how-it-works">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-display font-medium text-stone-100 tracking-tight mb-4">The Path of Initiation</h2>
<p className="text-lg text-stone-500">Three steps to begin your journey.</p>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-px bg-gradient-to-r from-stone-800 via-stone-700 to-stone-800"></div>

<div className="relative flex flex-col items-center text-center space-y-6">
<div className="w-16 h-16 bg-stone-950 border border-stone-800 rounded-full flex items-center justify-center z-10 shadow-lg">
<i className="w-7 h-7 text-amber-600" data-lucide="pen-tool"></i>
</div>
<div>
<h3 className="text-xl font-semibold text-stone-200 mb-3">1. Choose Your Path</h3>
<p className="text-lg text-stone-500 leading-relaxed px-4">Select between the digital archive or the full physical experience delivered to your door.</p>
</div>
</div>

<div className="relative flex flex-col items-center text-center space-y-6">
<div className="w-16 h-16 bg-stone-950 border border-stone-800 rounded-full flex items-center justify-center z-10 shadow-lg">
<i className="w-7 h-7 text-amber-600" data-lucide="mail"></i>
</div>
<div>
<h3 className="text-xl font-semibold text-stone-200 mb-3">2. Receive the Artifact</h3>
<p className="text-lg text-stone-500 leading-relaxed px-4">Each month, a handcrafted, wax-sealed letter arrives. No emails. No noise. Just ink on paper.</p>
</div>
</div>

<div className="relative flex flex-col items-center text-center space-y-6">
<div className="w-16 h-16 bg-stone-950 border border-stone-800 rounded-full flex items-center justify-center z-10 shadow-lg">
<i className="w-7 h-7 text-amber-600" data-lucide="compass"></i>
</div>
<div>
<h3 className="text-xl font-semibold text-stone-200 mb-3">3. Follow the Journey</h3>
<p className="text-lg text-stone-500 leading-relaxed px-4">Collect the letters. Decipher the map. Apply the ancient wisdom to your modern life.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-stone-950 relative" id="pricing">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-display font-medium text-stone-100 tracking-tight mb-4">Select Your Provision</h2>
<p className="text-lg text-stone-500">Join the ranks. Cancel anytime.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="bg-stone-900/50 border border-stone-800 rounded-sm p-8 flex flex-col h-full hover:border-stone-700 transition-colors">
<div className="mb-6">
<h3 className="text-lg font-medium text-stone-400 uppercase tracking-widest mb-2">The Scout</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-display text-stone-100">$9</span>
<span className="text-stone-500">/mo</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-stone-400 text-lg">
<i className="w-5 h-5 text-stone-600 mt-1" data-lucide="check"></i>
<span>High-res PDF delivery</span>
</li>
<li className="flex items-start gap-3 text-stone-400 text-lg">
<i className="w-5 h-5 text-stone-600 mt-1" data-lucide="check"></i>
<span>Audio narration included</span>
</li>
<li className="flex items-start gap-3 text-stone-400 text-lg">
<i className="w-5 h-5 text-stone-600 mt-1" data-lucide="check"></i>
<span>Access to archive</span>
</li>
</ul>
<a className="w-full py-4 border border-stone-700 text-stone-300 font-medium text-center hover:bg-stone-800 transition-colors rounded-sm" href="#">
                        Join Digital
                    </a>
</div>

<div className="bg-stone-900 border border-amber-900/40 rounded-sm p-8 flex flex-col h-full relative shadow-2xl transform md:-translate-y-4">
<div className="absolute top-0 left-0 w-full h-1 bg-amber-600/80"></div>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-600/80 text-stone-950 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm">
                        Most Popular
                    </div>
<div className="mb-6">
<h3 className="text-lg font-medium text-amber-500 uppercase tracking-widest mb-2">The Warrior</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-display text-stone-100">$18</span>
<span className="text-stone-500">/mo</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-stone-200 text-lg">
<i className="w-5 h-5 text-amber-600 mt-1" data-lucide="check"></i>
<span>Physical Wax-Sealed Letter</span>
</li>
<li className="flex items-start gap-3 text-stone-200 text-lg">
<i className="w-5 h-5 text-amber-600 mt-1" data-lucide="check"></i>
<span>Premium Aged Parchment</span>
</li>
<li className="flex items-start gap-3 text-stone-200 text-lg">
<i className="w-5 h-5 text-amber-600 mt-1" data-lucide="check"></i>
<span>Includes Digital Edition</span>
</li>
<li className="flex items-start gap-3 text-stone-200 text-lg">
<i className="w-5 h-5 text-amber-600 mt-1" data-lucide="check"></i>
<span>Collectible Map Fragments</span>
</li>
</ul>
<a className="w-full py-4 bg-amber-700 text-stone-100 font-semibold text-center hover:bg-amber-600 transition-colors rounded-sm shadow-lg" href="#">
                        Start Receiving Letters
                    </a>
</div>

<div className="bg-stone-900/50 border border-stone-800 rounded-sm p-8 flex flex-col h-full hover:border-stone-700 transition-colors">
<div className="mb-6">
<h3 className="text-lg font-medium text-stone-400 uppercase tracking-widest mb-2">The Elder</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-display text-stone-100">$190</span>
<span className="text-stone-500">/yr</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-stone-400 text-lg">
<i className="w-5 h-5 text-stone-600 mt-1" data-lucide="check"></i>
<span>12 Physical Letters</span>
</li>
<li className="flex items-start gap-3 text-stone-400 text-lg">
<i className="w-5 h-5 text-stone-600 mt-1" data-lucide="check"></i>
<span>2 Months Free</span>
</li>
<li className="flex items-start gap-3 text-stone-400 text-lg">
<i className="w-5 h-5 text-stone-600 mt-1" data-lucide="check"></i>
<span>Exclusive Leather Binder</span>
</li>
</ul>
<a className="w-full py-4 border border-stone-700 text-stone-300 font-medium text-center hover:bg-stone-800 transition-colors rounded-sm" href="#">
                        Join Annual
                    </a>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-stone-500 text-sm uppercase tracking-wider">Secure Payment via Stripe • 30-Day Money Back Guarantee</p>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 border-t border-white/5 relative overflow-hidden" id="sample">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="relative order-2 md:order-1">
<div className="absolute inset-0 bg-amber-500/20 blur-[100px] rounded-full opacity-20"></div>

<div className="relative bg-[#e3dcd2] p-8 md:p-12 shadow-2xl rounded-sm transform -rotate-2">
<div className="font-reading text-stone-900 opacity-90">
<h4 className="text-2xl font-bold mb-4 font-display">My Dear Friend,</h4>
<p className="text-lg mb-4 leading-relaxed">
                            If you are reading this, you have already taken the first step into the unknown. The frontier is not merely a place on a map; it is a state of mind...
                        </p>
<p className="text-lg mb-4 leading-relaxed blur-sm select-none">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
<p className="text-lg blur-md select-none">
                             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-[#e3dcd2] via-transparent to-transparent flex items-end justify-center pb-12">
</div>
</div>
</div>
<div className="order-1 md:order-2 space-y-8">
<h2 className="text-3xl md:text-4xl font-display font-medium text-stone-100 tracking-tight">
                    See What Arrives <br/> In The Mail.
                </h2>
<p className="text-lg text-stone-400 leading-relaxed font-light">
                    Not sure yet? Download the first page of our "Letter 001: The Departure" absolutely free. Experience the tone, the aesthetic, and the wisdom before you commit.
                </p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="bg-stone-800 border border-stone-700 text-stone-100 px-4 py-3 rounded-sm w-full focus:outline-none focus:border-amber-600 transition-colors placeholder:text-stone-600" placeholder="Your email address" type="email"/>
<button className="whitespace-nowrap bg-stone-100 hover:bg-amber-350 text-stone-950 font-semibold px-6 py-3 rounded-sm transition-colors" type="button">
                        Download Sample
                    </button>
</form>
<p className="text-sm text-stone-600">We respect the sanctity of your inbox. No spam.</p>
</div>
</div>
</section>

<section className="py-24 bg-stone-950">
<div className="max-w-5xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-y-12 gap-x-16">
<div className="flex gap-5">
<div className="shrink-0 mt-1">
<i className="w-6 h-6 text-amber-600" data-lucide="feather"></i>
</div>
<div>
<h4 className="text-xl font-semibold text-stone-200 mb-2">Meaningful Storytelling</h4>
<p className="text-lg text-stone-500 leading-relaxed">Escape the digital noise. Immerse yourself in a narrative that demands your full attention and reflection.</p>
</div>
</div>
<div className="flex gap-5">
<div className="shrink-0 mt-1">
<i className="w-6 h-6 text-amber-600" data-lucide="shield"></i>
</div>
<div>
<h4 className="text-xl font-semibold text-stone-200 mb-2">Masculine Wisdom</h4>
<p className="text-lg text-stone-500 leading-relaxed">Drawing from Stoicism, history, and frontier lore to help you build character in the modern world.</p>
</div>
</div>
<div className="flex gap-5">
<div className="shrink-0 mt-1">
<i className="w-6 h-6 text-amber-600" data-lucide="map"></i>
</div>
<div>
<h4 className="text-xl font-semibold text-stone-200 mb-2">A Collectible Artifact</h4>
<p className="text-lg text-stone-500 leading-relaxed">Each letter is a piece of art. High-quality paper, custom wax seals, and beautiful typography.</p>
</div>
</div>
<div className="flex gap-5">
<div className="shrink-0 mt-1">
<i className="w-6 h-6 text-amber-600" data-lucide="flame"></i>
</div>
<div>
<h4 className="text-xl font-semibold text-stone-200 mb-2">A Rite of Passage</h4>
<p className="text-lg text-stone-500 leading-relaxed">Follow the journey from novice to elder. A guided path designed to challenge your perspective.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 border-y border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="mb-8">
<i className="w-8 h-8 text-stone-600 mx-auto fill-stone-800" data-lucide="quote"></i>
</div>
<blockquote className="text-2xl md:text-3xl font-reading italic text-stone-300 leading-relaxed mb-8">
                "It feels like discovering a grandfather's journal in an attic. In a world of cheap emails and tweets, holding this letter by the fire is the highlight of my month."
            </blockquote>
<cite className="not-italic flex flex-col items-center">
<span className="text-stone-100 font-semibold tracking-wide uppercase">James H.</span>
<span className="text-stone-500 text-sm mt-1">Member since 2023</span>
</cite>
</div>
</section>

<section className="py-20 bg-stone-950">
<div className="max-w-3xl mx-auto px-6 text-center border border-white/10 bg-stone-900/30 p-12 rounded-sm">
<h3 className="text-2xl font-display text-stone-200 mb-4">The Traveler's Guarantee</h3>
<p className="text-lg text-stone-400 mb-0">
                If you don't love your first letter, we will refund your subscription immediately. No questions asked. We only want those on the journey who wish to be here.
            </p>
</div>
</section>

<footer className="py-12 bg-stone-950 border-t border-white/5 text-stone-600 text-sm">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="font-display text-lg text-stone-400">
                FRONTIER LETTERS
            </div>
<div className="flex gap-8 font-medium">
<a className="hover:text-stone-300 transition-colors" href="#">Contact</a>
<a className="hover:text-stone-300 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-stone-300 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-stone-300 transition-colors" href="#">Refunds</a>
</div>
<div>
                © 2024 Frontier Letters. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
