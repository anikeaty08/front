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
      

<div className="fixed inset-0 z-[-1] pointer-events-none bg-slate-950"></div>

<nav className="absolute top-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center border-b border-white/5 bg-slate-950/50 backdrop-blur-md">
<div className="text-xs uppercase tracking-widest text-slate-400 font-medium">Berrywell Gardens™</div>
<button className="bg-amber-600 hover:bg-amber-500 text-slate-950 text-sm font-medium px-6 py-2.5 rounded-sm transition-colors uppercase tracking-wider">
            Request Your Pass
        </button>
</nav>

<header className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 border-b border-white/10 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/10 via-slate-950 to-slate-950">
<div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
<span className="text-xs md:text-sm uppercase tracking-widest text-amber-500 mb-6 flex items-center gap-4">
<span className="w-8 h-[1px] bg-amber-500/40"></span>
                Berrywell Gardens™ Presents
                <span className="w-8 h-[1px] bg-amber-500/40"></span>
</span>
<h1 className="text-6xl md:text-8xl lg:text-[7rem] font-serif font-light text-amber-50 tracking-tight leading-none mb-8">
                Wags in<br/>
<span className="italic text-amber-100">Wanderland</span>
</h1>
<p className="text-xl md:text-2xl font-serif font-light text-slate-200 tracking-tight mb-6 max-w-3xl leading-relaxed">
                A first-of-its-kind immersive outdoor experience for pups and their people to enjoy together, crafted entirely around the senses of our furry best friends.
            </p>
<p className="text-base text-slate-400 uppercase tracking-widest mb-12">
                Attendance is limited to maximize comfort for all guests.
            </p>
<button className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-base font-medium px-10 py-4 rounded-sm transition-transform hover:scale-105 uppercase tracking-wider mb-6">
                Request Your Pass
            </button>
</div>

<div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-0"></div>
</header>

<section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
<div>
<span className="text-xs uppercase tracking-widest text-amber-500 mb-4 block">The Shared Vision</span>
<h2 className="text-4xl md:text-5xl font-serif font-light text-slate-50 tracking-tight mb-8 leading-tight">
                    A First-of-Its-Kind Shared Experience
                </h2>
<div className="space-y-6 text-lg text-slate-300 leading-relaxed font-light">
<p>
                        Step outside the human lens and into the world of your dog — a rich landscape of sight, sound, scent, texture, taste, and motion. 
                    </p>
<p>
                        Through dog + human activity zones, hands-on sensory installations and a wide range of curated food, drinks and fun for the sharing, you'll discover the world from your dog's eye view in an imaginative world full of surprises.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-slate-900/50 rounded-2xl p-8 border border-white/5">
<div className="mb-6">
<iconify-icon className="text-3xl text-blue-400" icon="solar:magnifer-linear"></iconify-icon>
</div>
<h3 className="text-xl font-serif font-light text-slate-100 tracking-tight mb-3">Discovery</h3>
<p className="text-lg text-slate-400">New happy paths revealed at every turn.</p>
</div>

<div className="bg-slate-900/50 rounded-2xl p-8 border border-white/5">
<div className="mb-6">
<iconify-icon className="text-3xl text-purple-400" icon="solar:heart-linear"></iconify-icon>
</div>
<h3 className="text-xl font-serif font-light text-slate-100 tracking-tight mb-3">Delight</h3>
<p className="text-lg text-slate-400">Surprising moments that become core memories.</p>
</div>

<div className="bg-slate-900/50 rounded-2xl p-8 border border-white/5">
<div className="mb-6">
<iconify-icon className="text-3xl text-amber-400" icon="solar:medal-star-linear"></iconify-icon>
</div>
<h3 className="text-xl font-serif font-light text-slate-100 tracking-tight mb-3">Design</h3>
<p className="text-lg text-slate-400">High-quality standards in every detail.</p>
</div>

<div className="bg-slate-900/50 rounded-2xl p-8 border border-white/5">
<div className="mb-6">
<iconify-icon className="text-3xl text-emerald-400" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h3 className="text-xl font-serif font-light text-slate-100 tracking-tight mb-3">Connection</h3>
<p className="text-lg text-slate-400">Building the human, hound and community bond like never before.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10 relative">
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
<span className="text-xs uppercase tracking-widest text-amber-500 mb-4 block">The Connected Journey</span>
<h2 className="text-4xl md:text-5xl font-serif font-light text-slate-50 tracking-tight mb-6">
                Explore the World as Your Dog Experiences It
            </h2>
<p className="text-lg text-slate-300 font-light">
                A designed landscape of connected zones and wandering paths. Winding trails lead to a day of discovery and delight — each area an intentional shift in perspective, energy, and wonder.
            </p>
</div>

<div className="relative z-10">

<div className="absolute left-8 top-12 bottom-12 w-[1px] bg-white/10 hidden lg:block"></div>
<div className="space-y-12">

<div className="flex flex-col lg:flex-row gap-10 items-start relative group">
<div className="hidden lg:flex w-16 h-16 shrink-0 bg-slate-950 border-2 border-amber-500 rounded-full items-center justify-center relative z-10 mt-2">
<iconify-icon className="text-2xl text-amber-500" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="bg-slate-900/60 border border-white/5 rounded-3xl p-10 flex-1 hover:bg-slate-900/80 transition-colors w-full">
<div className="flex items-center gap-4 mb-6">
<h3 className="text-2xl md:text-3xl font-serif font-light text-amber-100 tracking-tight">The Lands</h3>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-400 uppercase tracking-widest">Activities Zone</span>
</div>
<p className="text-lg text-slate-300 mb-8 font-light max-w-3xl">An expansive sensory playground broken into five distinct experiences, built specifically for physical and mental enrichment.</p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="p-4 border border-white/5 rounded-2xl bg-slate-950/50">
<h4 className="text-base text-slate-100 mb-1 font-medium">Speedway</h4>
<p className="text-sm text-slate-400">Sight + motion enrichment courses.</p>
</div>
<div className="p-4 border border-white/5 rounded-2xl bg-slate-950/50">
<h4 className="text-base text-slate-100 mb-1 font-medium">Scent-stories</h4>
<p className="text-sm text-slate-400">Olfactory puzzles and sniff-focused trails.</p>
</div>
<div className="p-4 border border-white/5 rounded-2xl bg-slate-950/50">
<h4 className="text-base text-slate-100 mb-1 font-medium">Soundscape</h4>
<p className="text-sm text-slate-400">Acoustically tuned, calm environment.</p>
</div>
<div className="p-4 border border-white/5 rounded-2xl bg-slate-950/50">
<h4 className="text-base text-slate-100 mb-1 font-medium">Big Dig</h4>
<p className="text-sm text-slate-400">Texture and excavation adventures.</p>
</div>
<div className="p-4 border border-white/5 rounded-2xl bg-slate-950/50">
<h4 className="text-base text-slate-100 mb-1 font-medium">Bubble Hub</h4>
<p className="text-sm text-slate-400">Texture and visual playtime wonder.</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row gap-10 items-start relative group">
<div className="hidden lg:flex w-16 h-16 shrink-0 bg-slate-950 border-2 border-emerald-500 rounded-full items-center justify-center relative z-10 mt-2">
<iconify-icon className="text-2xl text-emerald-500" icon="solar:leaf-linear"></iconify-icon>
</div>
<div className="bg-slate-900/60 border border-white/5 rounded-3xl p-10 flex-1 hover:bg-slate-900/80 transition-colors w-full">
<div className="flex items-center gap-4 mb-6">
<h3 className="text-2xl md:text-3xl font-serif font-light text-amber-100 tracking-tight">The Discovery Trail</h3>
</div>
<p className="text-lg text-slate-300 font-light">A sprawling, winding loop through the natural clusters of lush trees and open green spaces around the park. Discover hidden surprises and tranquil moments as you traverse the expansive landscape together.</p>
</div>
</div>

<div className="flex flex-col lg:flex-row gap-10 items-start relative group">
<div className="hidden lg:flex w-16 h-16 shrink-0 bg-slate-950 border-2 border-purple-500 rounded-full items-center justify-center relative z-10 mt-2">
<iconify-icon className="text-2xl text-purple-500" icon="solar:moon-sleep-linear"></iconify-icon>
</div>
<div className="bg-slate-900/60 border border-white/5 rounded-3xl p-10 flex-1 hover:bg-slate-900/80 transition-colors w-full">
<div className="flex items-center gap-4 mb-6">
<h3 className="text-2xl md:text-3xl font-serif font-light text-amber-100 tracking-tight">The Sanctuary</h3>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-400 uppercase tracking-widest">Relaxation Zone</span>
</div>
<p className="text-lg text-slate-300 mb-6 font-light">A quiet escape designed for decompression. Rentable private tents &amp; cozy blankets provide the perfect spot to relax. Experience the soothing sight of simulated Aurora Borealis lights and practice barefoot grounding on natural turf.</p>
</div>
</div>

<div className="flex flex-col lg:flex-row gap-10 items-start relative group">
<div className="hidden lg:flex w-16 h-16 shrink-0 bg-slate-950 border-2 border-blue-500 rounded-full items-center justify-center relative z-10 mt-2">
<iconify-icon className="text-2xl text-blue-500" icon="solar:shop-linear"></iconify-icon>
</div>
<div className="bg-slate-900/60 border border-white/5 rounded-3xl p-10 flex-1 hover:bg-slate-900/80 transition-colors w-full">
<div className="flex items-center gap-4 mb-6">
<h3 className="text-2xl md:text-3xl font-serif font-light text-amber-100 tracking-tight">The Common Grounds</h3>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-400 uppercase tracking-widest">Market Area</span>
</div>
<p className="text-lg text-slate-300 mb-8 font-light">The bustling heart of Wanderland. Watch presentations on the Showcase stage, explore a doggy fashion "try before you buy" expo, and enjoy shared experience service stations like pup massage and doga (dog yoga).</p>
<ul className="space-y-3 text-base text-slate-400">
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Food &amp; Beverage vendors with shared seating</li>
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Central fenced pup play area for safe mingling</li>
</ul>
</div>
</div>

<div className="flex flex-col lg:flex-row gap-10 items-start relative group">
<div className="hidden lg:flex w-16 h-16 shrink-0 bg-slate-950 border-2 border-rose-500 rounded-full items-center justify-center relative z-10 mt-2">
<iconify-icon className="text-2xl text-rose-500" icon="solar:hand-heart-linear"></iconify-icon>
</div>
<div className="bg-slate-900/60 border border-white/5 rounded-3xl p-10 flex-1 hover:bg-slate-900/80 transition-colors w-full">
<div className="flex items-center gap-4 mb-6">
<h3 className="text-2xl md:text-3xl font-serif font-light text-amber-100 tracking-tight">The Well</h3>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-400 uppercase tracking-widest">Wellness Zone</span>
</div>
<p className="text-lg text-slate-300 mb-8 font-light">Dedicated to health and longevity. Attend Animal Expert Presentations and Q&amp;A sessions. Visit stations for vet vaccinations, micro-chipping, and canine training triage.</p>
<ul className="space-y-3 text-base text-slate-400">
<li className="flex items-center gap-3"><iconify-icon className="text-rose-500" icon="solar:check-circle-linear"></iconify-icon> Lifeline Shelter Dog Sponsor, Foster, &amp; Adopt zone</li>
<li className="flex items-center gap-3"><iconify-icon className="text-rose-500" icon="solar:check-circle-linear"></iconify-icon> On-site clinic for day-of incident and emergency support</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
<div className="text-center max-w-4xl mx-auto mb-20">
<span className="text-xs uppercase tracking-widest text-amber-500 mb-4 block">What to Expect</span>
<h2 className="text-4xl md:text-5xl font-serif font-light text-slate-50 tracking-tight mb-6">
                Royal Treatment for All
            </h2>
<p className="text-lg text-slate-300 font-light">
                Wags in Wanderland promises to deliver a quality experience for all guests — human and hound — where safety and comfort aren't a luxury, they're the standard.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-slate-900/50 border border-white/10 rounded-2xl p-10">
<iconify-icon className="text-4xl text-emerald-400 mb-6 block" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="text-2xl font-serif font-light text-slate-100 tracking-tight mb-6">Safety &amp; Cleanliness</h3>
<ul className="space-y-6">
<li>
<h4 className="text-base text-slate-200 font-medium mb-1">Vetted Entry</h4>
<p className="text-base text-slate-400">To maintain the Wanderland magic, every guest (human and hound) undergoes a health and behavior screening.</p>
</li>
<li>
<h4 className="text-base text-slate-200 font-medium mb-1">The "Guardien" System</h4>
<p className="text-base text-slate-400">Our zones are hosted by Berrywell Guardiens — wellness and behavior experts who act as your park concierges, ensuring play stays positive.</p>
</li>
<li>
<h4 className="text-base text-slate-200 font-medium mb-1">Sparkling Clean</h4>
<p className="text-base text-slate-400">Plentiful receptacles and active monitoring by Guardians ensure the environment stays pristine.</p>
</li>
</ul>
</div>

<div className="bg-slate-900/50 border border-white/10 rounded-2xl p-10">
<iconify-icon className="text-4xl text-amber-400 mb-6 block" icon="solar:sofa-linear"></iconify-icon>
<h3 className="text-2xl font-serif font-light text-slate-100 tracking-tight mb-6">Comfort &amp; Convenience</h3>
<ul className="space-y-6">
<li>
<h4 className="text-base text-slate-200 font-medium mb-1">Garden-style Day Glamping</h4>
<p className="text-base text-slate-400">Utilize the covered areas and plentiful shaded seating or book private garden tents in the Sanctuary.</p>
</li>
<li>
<h4 className="text-base text-slate-200 font-medium mb-1">Pup Valet</h4>
<p className="text-base text-slate-400">Need a human-only break? Our trusted Pup Valets will watch your best friend while you grab food or use the restroom.</p>
</li>
<li>
<h4 className="text-base text-slate-200 font-medium mb-1">Luxury Amenities</h4>
<p className="text-base text-slate-400">Access to luxury bathrooms for humans and DIY waterless bath stations to freshen up your pup.</p>
</li>
</ul>
</div>

<div className="bg-slate-900/50 border border-white/10 rounded-2xl p-10">
<iconify-icon className="text-4xl text-purple-400 mb-6 block" icon="solar:bag-3-linear"></iconify-icon>
<h3 className="text-2xl font-serif font-light text-slate-100 tracking-tight mb-6">A Curated Market</h3>
<ul className="space-y-6">
<li>
<h4 className="text-base text-slate-200 font-medium mb-1">Gourmet Bites</h4>
<p className="text-base text-slate-400">Food and beverage vendors featuring tasting stations for both people and pups.</p>
</li>
<li>
<h4 className="text-base text-slate-200 font-medium mb-1">Pampering</h4>
<p className="text-base text-slate-400">Hound+Human grooming, yoga, massage services and more.</p>
</li>
<li>
<h4 className="text-base text-slate-200 font-medium mb-1">Cookie's Closet &amp; Fashion Fair</h4>
<p className="text-base text-slate-400">Try-before-you-buy boutique with matching fashion and flair for both pups and their people.</p>
</li>
</ul>
</div>

<div className="bg-slate-900/50 border border-white/10 rounded-2xl p-10">
<iconify-icon className="text-4xl text-blue-400 mb-6 block" icon="solar:ghost-smile-linear"></iconify-icon>
<h3 className="text-2xl font-serif font-light text-slate-100 tracking-tight mb-6">Meet Berry</h3>
<ul className="space-y-6">
<li>
<p className="text-base text-slate-400">Have you met Berry Capybara? He and his garden friends come to life in delightful ways throughout the environment, welcoming you and your pup to join the fun! Expect plenty of adorable, photo-worthy interactions.</p>
</li>
<li>
<p className="text-base text-slate-400">Don't want the fun to end? Visit the market and "adopt" a Berry plush — a new friend to take home, turning your magical moments into a lasting memory your pup can revisit again and again.</p>
</li>
</ul>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
<div className="mb-16">
<span className="text-xs uppercase tracking-widest text-amber-500 mb-4 block">Our Commitment</span>
<h2 className="text-4xl md:text-5xl font-serif font-light text-slate-50 tracking-tight mb-6">
                A New Kind of Commitment
            </h2>
<p className="text-lg text-slate-300 max-w-4xl leading-relaxed">
                Wags in Wanderland is a first-of-its-kind experience. It will come to life when the community signals it's ready — not before. Your pre-sale pass request is a signal that the world is ready for something different. If we don't reach our minimum threshold of 250 passholders, your purchase will be fully refunded. We don't believe in forcing demand. We believe in earning it. No risk. Only delight.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-slate-900/30 border border-white/5 rounded-2xl p-8 flex gap-6 items-start">
<iconify-icon className="text-3xl text-slate-100 shrink-0" icon="solar:refresh-circle-linear"></iconify-icon>
<div>
<h4 className="text-lg font-medium text-slate-100 mb-2">100% Refund Guarantee</h4>
<p className="text-base text-slate-400">If the minimum pre-sale threshold is not met, every pass will be refunded automatically. No questions. No friction.</p>
</div>
</div>
<div className="bg-slate-900/30 border border-white/5 rounded-2xl p-8 flex gap-6 items-start">
<iconify-icon className="text-3xl text-slate-100 shrink-0" icon="solar:users-group-rounded-linear"></iconify-icon>
<div>
<h4 className="text-lg font-medium text-slate-100 mb-2">Community-Powered Launch</h4>
<p className="text-base text-slate-400">This experience will exist because the community pulls it forward. Your pass purchase is a vote for the world we're building together.</p>
</div>
</div>
<div className="bg-slate-900/30 border border-white/5 rounded-2xl p-8 flex gap-6 items-start">
<iconify-icon className="text-3xl text-slate-100 shrink-0" icon="solar:ruler-pen-linear"></iconify-icon>
<div>
<h4 className="text-lg font-medium text-slate-100 mb-2">Elevated By Design</h4>
<p className="text-base text-slate-400">Every detail — from sensory zone layouts to acoustic engineering — is designed to a standard the pet industry has never attempted.</p>
</div>
</div>
<div className="bg-slate-900/30 border border-white/5 rounded-2xl p-8 flex gap-6 items-start">
<iconify-icon className="text-3xl text-slate-100 shrink-0" icon="solar:ticket-linear"></iconify-icon>
<div>
<h4 className="text-lg font-medium text-slate-100 mb-2">Your Space Secured</h4>
<p className="text-base text-slate-400">Pre-sale passes lock in your early pricing and guarantee priority access when we formally announce our launch location.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10 relative">
<div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
<span className="text-xs uppercase tracking-widest text-amber-500 mb-4 block">Request Your Pass</span>
<h2 className="text-4xl md:text-5xl font-serif font-light text-slate-50 tracking-tight mb-6">
                Choose Your Experience
            </h2>
<p className="text-lg text-slate-300 font-light">
                Pre-sale reservations. 100% refundable if the minimum threshold isn't reached. Reserve your space — and help us bring Wags in Wanderland to life.
            </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch relative z-10 mb-20">

<div className="bg-slate-900/50 border border-white/10 rounded-3xl p-10 flex flex-col h-full">
<div className="text-xs uppercase tracking-widest text-slate-400 mb-8 text-center border border-white/10 py-2 rounded-full mx-auto px-6">Tier 1</div>
<div className="text-center mb-8">
<h3 className="text-xl text-slate-200 font-serif font-light tracking-tight mb-4">BerryBuddies<br/>Community Pass</h3>
<div className="text-5xl font-serif font-light text-slate-50 tracking-tight flex items-start justify-center">
<span className="text-2xl mt-1">$</span>59
                    </div>
</div>
<p className="text-base text-slate-300 mb-8 text-center font-light border-b border-white/10 pb-8">
                    An exciting day of discovery and delight in the immersive Wanderlands.
                </p>
<ul className="space-y-4 text-base text-slate-400 flex-grow mb-10">
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-500 mt-1 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Entry for one dog and one human</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-500 mt-1 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Full access to The Lands, Discovery Trail, and Common Grounds</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-500 mt-1 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Standard entry to wellness and market stations</span>
</li>
</ul>
<button className="w-full border border-white/20 hover:bg-white/5 text-slate-200 py-4 rounded-sm transition-colors text-sm uppercase tracking-wider font-medium">
                    Request Pass
                </button>
</div>

<div className="bg-slate-900 border border-amber-500/50 rounded-3xl p-10 flex flex-col shadow-[0_0_40px_rgba(245,158,11,0.1)] relative transform lg:-translate-y-4">
<div className="text-xs uppercase tracking-widest text-amber-500 mb-8 text-center border border-amber-500/30 bg-amber-500/10 py-2 rounded-full mx-auto px-6">Tier 2</div>
<div className="text-center mb-8">
<h3 className="text-xl text-amber-100 font-serif font-light tracking-tight mb-4">BerryBesties<br/>Comfort Pass</h3>
<div className="text-6xl font-serif font-light text-amber-50 tracking-tight flex items-start justify-center">
<span className="text-3xl mt-1 text-amber-200/80">$</span>169
                    </div>
</div>
<p className="text-base text-slate-200 mb-8 text-center font-light border-b border-white/10 pb-8">
                    The complete experience with private zones and priority access for maximum comfort.
                </p>
<ul className="space-y-4 text-base text-slate-300 flex-grow mb-10">
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-400 mt-1 shrink-0" icon="solar:star-linear"></iconify-icon>
<span>Everything in Community Pass</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-400 mt-1 shrink-0" icon="solar:star-linear"></iconify-icon>
<span>Priority expedited entry (no lines)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-400 mt-1 shrink-0" icon="solar:star-linear"></iconify-icon>
<span>Access to The Sanctuary (private tents, relaxing Aurora lights)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-400 mt-1 shrink-0" icon="solar:star-linear"></iconify-icon>
<span>Complimentary Pup Valet services</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-400 mt-1 shrink-0" icon="solar:star-linear"></iconify-icon>
<span>Public dedication honoring a shelter dog in your name</span>
</li>
</ul>
<button className="w-full bg-amber-500 text-slate-950 font-medium py-4 rounded-sm transition-transform hover:scale-[1.02] text-sm uppercase tracking-wider">
                    Request Pass
                </button>
</div>

<div className="bg-slate-900/50 border border-white/10 rounded-3xl p-10 flex flex-col h-full">
<div className="text-xs uppercase tracking-widest text-slate-400 mb-8 text-center border border-white/10 py-2 rounded-full mx-auto px-6">Tier 3</div>
<div className="text-center mb-8">
<h3 className="text-xl text-slate-200 font-serif font-light tracking-tight mb-4">Berrywell<br/>Founders Circle Pass</h3>
<div className="text-5xl font-serif font-light text-slate-50 tracking-tight flex items-start justify-center">
<span className="text-2xl mt-1">$</span>500
                    </div>
</div>
<p className="text-base text-slate-300 mb-8 text-center font-light border-b border-white/10 pb-8">
                    An intimate, multi-day experience with personalized hospitality and behind-the-scenes access.
                </p>
<ul className="space-y-4 text-base text-slate-400 flex-grow mb-10">
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-500 mt-1 shrink-0" icon="solar:crown-linear"></iconify-icon>
<span>All Tier 1 and 2 benefits included</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-500 mt-1 shrink-0" icon="solar:crown-linear"></iconify-icon>
<span>Exclusive multi-day &amp; evening access</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-500 mt-1 shrink-0" icon="solar:crown-linear"></iconify-icon>
<span>A founding voice in shaping the future of the Berrywell world</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-500 mt-1 shrink-0" icon="solar:crown-linear"></iconify-icon>
<span>Personalized hospitality concierge</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-500 mt-1 shrink-0" icon="solar:crown-linear"></iconify-icon>
<span>Exclusive Founders Circle gathering</span>
</li>
</ul>
<button className="w-full border border-white/20 hover:bg-white/5 text-slate-200 py-4 rounded-sm transition-colors text-sm uppercase tracking-wider font-medium">
                    Request Pass
                </button>
</div>
</div>

<div className="max-w-4xl mx-auto bg-slate-900/50 border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
<div>
<h4 className="text-2xl font-serif font-light text-slate-50 tracking-tight mb-2">Wags in Wanderland is just the beginning.</h4>
<p className="text-base text-slate-400 font-light">Join us at this one-of-a-kind inaugural experience.</p>
</div>
<div className="flex flex-col gap-4 text-right shrink-0">
<div>
<span className="text-xs uppercase tracking-widest text-slate-500 block mb-1">Location</span>
<span className="text-lg text-slate-200 font-medium">Metro Atlanta, GA</span>
<span className="text-xs text-slate-500 block">(Official park location will be announced to passholders)</span>
</div>
<div>
<span className="text-xs uppercase tracking-widest text-slate-500 block mb-1">When</span>
<span className="text-lg text-slate-200 font-medium">October 4-6, 2026</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
<div className="text-center max-w-4xl mx-auto mb-20">
<span className="text-xs uppercase tracking-widest text-amber-500 mb-4 block">The Berrywell Navi App</span>
<h2 className="text-4xl md:text-5xl font-serif font-light text-slate-50 tracking-tight mb-6">
                Your Day-of Digital Companion &amp; Concierge
            </h2>
<p className="text-lg text-slate-300 font-light">
                To make your Wags in Wanderland experience seamless, comfortable, and connected, the Berrywell Gardens App ties it all together.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-slate-900/40 border border-white/5 rounded-2xl p-8">
<iconify-icon className="text-3xl text-amber-400 mb-4 block" icon="solar:passport-linear"></iconify-icon>
<h4 className="text-lg font-medium text-slate-100 mb-2">Passport</h4>
<p className="text-sm text-slate-400">Set up profiles and upload vaccine records before arrival for smooth entry.</p>
</div>
<div className="bg-slate-900/40 border border-white/5 rounded-2xl p-8">
<iconify-icon className="text-3xl text-emerald-400 mb-4 block" icon="solar:map-linear"></iconify-icon>
<h4 className="text-lg font-medium text-slate-100 mb-2">Interactive Map</h4>
<p className="text-sm text-slate-400">Navigate the park layout, find amenities, and locate activities easily.</p>
</div>
<div className="bg-slate-900/40 border border-white/5 rounded-2xl p-8">
<iconify-icon className="text-3xl text-blue-400 mb-4 block" icon="solar:calendar-linear"></iconify-icon>
<h4 className="text-lg font-medium text-slate-100 mb-2">Book Experiences</h4>
<p className="text-sm text-slate-400">Schedule grooming, order food, or book a Pup Valet right from your phone.</p>
</div>
<div className="bg-slate-900/40 border border-white/5 rounded-2xl p-8">
<iconify-icon className="text-3xl text-purple-400 mb-4 block" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<h4 className="text-lg font-medium text-slate-100 mb-2">Find Your Pack</h4>
<p className="text-sm text-slate-400">Opt to make your profile visible and coordinate meetups with nearby parents &amp; pups.</p>
</div>
<div className="bg-slate-900/40 border border-white/5 rounded-2xl p-8">
<iconify-icon className="text-3xl text-rose-400 mb-4 block" icon="solar:camera-linear"></iconify-icon>
<h4 className="text-lg font-medium text-slate-100 mb-2">Capture &amp; Share</h4>
<p className="text-sm text-slate-400">Access live photo/video capture setups and POV cameras to get instantly shareable action shots.</p>
</div>
<div className="bg-slate-900/40 border border-white/5 rounded-2xl p-8">
<iconify-icon className="text-3xl text-indigo-400 mb-4 block" icon="solar:chat-round-line-linear"></iconify-icon>
<h4 className="text-lg font-medium text-slate-100 mb-2">Expert Forums</h4>
<p className="text-sm text-slate-400">Submit burning questions digitally and get answers live from top animal experts.</p>
</div>
<div className="bg-slate-900/40 border border-white/5 rounded-2xl p-8">
<iconify-icon className="text-3xl text-amber-500 mb-4 block" icon="solar:heart-angle-linear"></iconify-icon>
<h4 className="text-lg font-medium text-slate-100 mb-2">Honor &amp; Remember</h4>
<p className="text-sm text-slate-400">A special virtual space to honor pups with us and remember ones waiting at the Golden Bridge.</p>
</div>
<div className="bg-slate-900/40 border border-white/5 rounded-2xl p-8">
<iconify-icon className="text-3xl text-red-400 mb-4 block" icon="solar:siren-rounded-linear"></iconify-icon>
<h4 className="text-lg font-medium text-slate-100 mb-2">Request Help</h4>
<p className="text-sm text-slate-400">Alert or locate an on-premise "Guardien" or Vet-tech instantly if you need assistance.</p>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-xs uppercase tracking-widest text-amber-500 mb-4 block">Purpose Beyond the Experience</span>
<h2 className="text-4xl md:text-5xl font-serif font-light text-slate-50 tracking-tight mb-8">
                    Every Pass Makes an Impact
                </h2>
<div className="space-y-6 text-lg text-slate-300 font-light">
<p>
                        A portion of every pass supports the Lifeline Animal Project and the city's no-kill shelters — directly benefiting local, at-risk dogs.
                    </p>
<p>
                        BerryBesties and Founders Circle passholders receive a public dedication honoring a shelter dog in their name — or anonymously, if preferred.
                    </p>
<p>
                        Visit the Wellness Hub for on-site vaccines and microchipping services, and an opportunity to meet at-risk shelter dogs. Discover immediate ways to help — from scholarship sponsoring to fostering and adoption.
                    </p>
</div>
</div>
<div className="bg-slate-900/50 border border-white/10 rounded-3xl p-12 text-center">
<iconify-icon className="text-6xl text-amber-500 mb-6" icon="solar:hand-hearts-linear"></iconify-icon>
<h3 className="text-3xl font-serif font-light text-slate-100 tracking-tight mb-4">Join the Movement</h3>
<p className="text-base text-slate-400 mb-8">Together, we can elevate the canine experience and provide meaningful support for those still looking for their forever home.</p>
<button className="bg-slate-800 hover:bg-slate-700 text-slate-100 text-sm font-medium px-8 py-4 rounded-sm transition-colors uppercase tracking-wider">
                    Learn About Our Partners
                </button>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-4">
<span className="text-xs uppercase tracking-widest text-amber-500 mb-4 block">Questions</span>
<h2 className="text-4xl md:text-5xl font-serif font-light text-slate-50 tracking-tight mb-6">
                    All the Answers
                </h2>
<p className="text-lg text-slate-300 font-light">
                    If something isn't answered here, please fill out our "Contact Us" form. We are a passionate team dedicated to building better experiences for the canine community and we're happy to talk.
                </p>
</div>
<div className="lg:col-span-8 space-y-4">

<div className="border border-white/10 bg-slate-900/30 rounded-2xl p-6">
<h4 className="text-lg text-slate-100 font-medium mb-3">Will dogs be off-leash?</h4>
<div className="text-base text-slate-400 leading-relaxed font-light">
                        Yes. Select areas are designed as off-leash enrichment spaces, intentionally separated from calmer zones and supported by trained, attentive staff ("Guardiens"). Leashed and quieter areas are also available throughout the grounds.
                    </div>
</div>

<div className="border border-white/10 bg-slate-900/30 rounded-2xl p-6">
<h4 className="text-lg text-slate-100 font-medium mb-3">What are the requirements for dogs?</h4>
<div className="text-base text-slate-400 leading-relaxed font-light">
                        All dogs must be up to date on core vaccinations and comfortable in shared, social settings. Pet parents are encouraged to choose spaces that best match their dog's temperament and energy level.
                    </div>
</div>

<div className="border border-white/10 bg-slate-900/30 rounded-2xl p-6">
<h4 className="text-lg text-slate-100 font-medium mb-3">Can I attend without a dog?</h4>
<div className="text-base text-slate-400 leading-relaxed font-light">
                        Absolutely. Dog-loving humans are welcome to attend and enjoy the space, food, market, and community — with or without a canine companion.
                    </div>
</div>

<div className="border border-white/10 bg-slate-900/30 rounded-2xl p-6">
<h4 className="text-lg text-slate-100 font-medium mb-3">Is this event kid-friendly?</h4>
<div className="text-base text-slate-400 leading-relaxed font-light">
                        For safety and comfort, Wags in Wanderland is 17+ only. But rest assured, as the founders themselves are parents of little humans, family-friendly events are certainly part of Berrywell's future plans as we grow. We appreciate your understanding.
                    </div>
</div>

<div className="border border-white/10 bg-slate-900/30 rounded-2xl p-6">
<h4 className="text-lg text-slate-100 font-medium mb-3">What food and drinks will be available?</h4>
<div className="text-base text-slate-400 leading-relaxed font-light">
                        A curated selection of food and beverage offerings will be available, from tasting-style options to full meals — made for the enjoyment of people and pups equally.
                    </div>
</div>

<div className="border border-white/10 bg-slate-900/30 rounded-2xl p-6">
<h4 className="text-lg text-slate-100 font-medium mb-3">What should I bring?</h4>
<div className="text-base text-slate-400 leading-relaxed font-light">
                        Comfortable shoes, weather-appropriate attire, a blanket if you like, and whatever your dog needs to feel at ease in a social setting. Water and other amenities will be available on-site.
                    </div>
</div>

<div className="border border-white/10 bg-slate-900/30 rounded-2xl p-6">
<h4 className="text-lg text-slate-100 font-medium mb-3">What happens if the weather changes?</h4>
<div className="text-base text-slate-400 leading-relaxed font-light">
                        Wags in Wanderland is designed to adapt to a range of weather conditions. In the event of inclement weather, select activities may pause or shift, but the celebration will continue whenever safely possible. In the rare case of severe weather that impacts safety, updates and options will be communicated promptly to ticket holders.
                    </div>
</div>

<div className="border border-white/10 bg-slate-900/30 rounded-2xl p-6">
<h4 className="text-lg text-slate-100 font-medium mb-3">What if I still have questions?</h4>
<div className="text-base text-slate-400 leading-relaxed font-light">
                        No worries. Additional details and updates will be shared with ticket holders as the event approaches — and every ticket is backed by our no-risk, money-back guarantee.
                    </div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-b border-white/10 text-center bg-slate-900/20">
<div className="max-w-3xl mx-auto">
<iconify-icon className="text-4xl text-amber-500/50 mb-8" icon="solar:stars-linear"></iconify-icon>
<h2 className="text-3xl md:text-4xl font-serif font-light text-slate-100 tracking-tight mb-10 italic">
                In Loving Memory of Zion &amp; Jackson
            </h2>
<div className="space-y-6 text-lg text-slate-300 font-light leading-relaxed">
<p>
                    For Zion, our Collie-mix rescue, whose 16 loyal years showed us what unconditional love truly means. And for Jackson, our Boxer, whose joyful spirit reminded us to live fully — through the high points and all the beautifully messy moments in between.
                </p>
<p className="text-amber-100/80 italic">
                    This celebration is inspired by them — and by the love that never truly leaves us.
                </p>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
<div className="max-w-3xl mx-auto text-center">
<span className="text-xs uppercase tracking-widest text-amber-500 mb-4 block">Stay Informed</span>
<h2 className="text-4xl md:text-5xl font-serif font-light text-slate-50 tracking-tight mb-8">
                Be the First to Know
            </h2>
<p className="text-lg text-slate-300 mb-10 font-light">
                We'll announce new experiences and future location details to our waitlist first. Submit your ideas or your preferred city and receive early updates from Berrywell Gardens.
            </p>
<form className="max-w-md mx-auto space-y-4 text-left">
<div>
<input className="w-full bg-slate-900/50 border border-white/10 rounded-sm px-4 py-4 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-amber-500 transition-colors" placeholder="Name" type="text"/>
</div>
<div>
<input className="w-full bg-slate-900/50 border border-white/10 rounded-sm px-4 py-4 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-amber-500 transition-colors" placeholder="Email Address" type="email"/>
</div>
<button className="w-full bg-amber-500 text-slate-950 font-medium px-8 py-4 rounded-sm hover:bg-amber-400 transition-colors uppercase tracking-widest mt-2" type="button">
                    Notify Me
                </button>
</form>
</div>
</section>

<footer className="pt-24 pb-12 px-6 text-center">
<div className="max-w-4xl mx-auto mb-16">
<h3 className="text-2xl font-serif font-light text-slate-200 tracking-tight mb-6">Berrywell Gardens™</h3>
<p className="text-base text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
                Berrywell Gardens creates thoughtfully designed experiences that bring pups and their people closer together. Rooted in imaginative fun, discovery and community, Berrywell exists to reimagine how we gather, play, and connect — in ways that are intentional, elevated, and deeply shared.
            </p>
</div>
<div className="flex items-center justify-center mb-12">
<span className="w-16 h-[1px] bg-white/10"></span>
<div className="px-6 text-xs uppercase tracking-widest text-slate-500">
<a className="hover:text-amber-500 transition-colors" href="#">Contact Us</a>
</div>
<span className="w-16 h-[1px] bg-white/10"></span>
</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-8 text-xs uppercase tracking-widest text-slate-500 mb-8">
<a className="hover:text-slate-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-300 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-300 transition-colors" href="#">Press</a>
</div>
<div className="text-xs text-slate-600 font-light">
            © 2026 Berrywell™. All rights reserved. Berrywell Gardens™, Wags in Wanderland™ and Berry Capybara™ are trademarks of Berrywell™.
        </div>
</footer>

    </>
  );
}
