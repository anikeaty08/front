import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Simple Intersection Observer for scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            section.classList.add('reveal');
            observer.observe(section);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-40 bg-black/50 backdrop-blur-md border-b border-white/5">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-black font-bold text-xl">F</div>
<span className="font-semibold tracking-tight text-sm">FitScale</span>
</div>
<button className="bg-white text-black text-xs font-semibold px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors" onclick="document.getElementById('lead-modal').classList.remove('hidden')">
                Get Started
            </button>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center text-center overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="z-10 relative max-w-4xl mx-auto">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-950/10 text-orange-500 mb-8 animate-fade-in">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-[10px] md:text-xs font-semibold tracking-wide uppercase">Only 7 Spots Left This Month</span>
</div>

<h1 className="text-5xl md:text-8xl font-semibold tracking-tighter text-white leading-[0.95] mb-6">
                Stop Chasing.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-600">Start Attracting.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 font-normal max-w-2xl mx-auto leading-relaxed mb-10">
                A custom, high-performance landing page built to turn strangers into paying fitness clients. 
                <span className="text-zinc-200">No monthly fees. No tech headaches.</span>
</p>

<div className="flex flex-col items-center gap-6">
<div className="flex items-center gap-3">
<span className="text-zinc-600 line-through decoration-zinc-600 decoration-[1px] text-xl">$5,000</span>
<span className="text-4xl font-semibold tracking-tight text-white">$997</span>
<span className="bg-zinc-800 text-zinc-300 text-[10px] px-2 py-1 rounded uppercase tracking-wider font-medium">One-Time</span>
</div>
<button className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-lg transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]" onclick="document.getElementById('lead-modal').classList.remove('hidden')">
                    Claim Your Spot
                    <svg className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></svg>
</button>
</div>
</div>
</header>

<section className="border-y border-white/5 bg-zinc-950/50 py-10 overflow-hidden">
<div className="max-w-6xl mx-auto px-6 text-center">
<p className="text-xs text-zinc-500 uppercase tracking-widest mb-6 font-medium">Trusted by coaches scaling to $10k/mo</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale">

<div className="text-xl font-bold tracking-tighter flex items-center gap-2"><svg className="w-6 h-6" data-lucide="dumbbell"></svg> IRONWORKS</div>
<div className="text-xl font-bold tracking-tighter flex items-center gap-2"><svg className="w-6 h-6" data-lucide="activity"></svg> PULSE</div>
<div className="text-xl font-bold tracking-tighter flex items-center gap-2"><svg className="w-6 h-6" data-lucide="zap"></svg> KINETIC</div>
<div className="text-xl font-bold tracking-tighter flex items-center gap-2"><svg className="w-6 h-6" data-lucide="heart"></svg> VITALITY</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Most fitness websites are <span className="text-zinc-500">invisible.</span></h2>
<p className="text-lg text-zinc-400 leading-relaxed">
                You're a great coach, but your website is losing you money. Link-trees, generic Wix templates, and confusing navigation are killing your sales. You need a <strong>sales machine</strong>, not a digital brochure.
            </p>
</div>
</section>

<section className="py-24 px-6 bg-zinc-950">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Everything you need to sell.</h2>
<p className="text-zinc-400">We don't just design; we engineer for conversion.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="md:col-span-2 bg-zinc-900/50 border border-white/5 rounded-3xl p-8 hover:border-orange-500/20 transition-colors group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 text-orange-500">
<svg className="w-6 h-6" data-lucide="mouse-pointer-2"></svg>
</div>
<h3 className="text-xl font-semibold mb-2">High-Conversion Copywriting</h3>
<p className="text-zinc-400">We write the headlines, the hooks, and the offer stack. You don't write a single word. We use proven psychological triggers that make clients feel stupid saying no.</p>
</div>
</div>

<div className="row-span-2 bg-zinc-900/50 border border-white/5 rounded-3xl p-8 hover:border-orange-500/20 transition-colors group relative">
<div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 text-blue-400">
<svg className="w-6 h-6" data-lucide="smartphone"></svg>
</div>
<h3 className="text-xl font-semibold mb-2">Mobile-First Design</h3>
<p className="text-zinc-400 mb-8">90% of your traffic is on a phone. We design for the thumb zone, ensuring a seamless experience that captures leads on the go.</p>

<div className="bg-black border border-zinc-800 rounded-xl p-4 w-full h-48 opacity-50 group-hover:opacity-100 transition-opacity">
<div className="w-full h-2 bg-zinc-800 rounded-full mb-2"></div>
<div className="w-2/3 h-2 bg-zinc-800 rounded-full mb-6"></div>
<div className="w-full h-8 bg-zinc-800 rounded mb-2"></div>
<div className="flex gap-2">
<div className="w-1/2 h-20 bg-zinc-800 rounded"></div>
<div className="w-1/2 h-20 bg-zinc-800 rounded"></div>
</div>
</div>
</div>

<div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 hover:border-orange-500/20 transition-colors">
<div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center mb-4 text-green-400">
<svg className="w-5 h-5" data-lucide="rocket"></svg>
</div>
<h3 className="text-lg font-semibold mb-2">Blazing Fast Speed</h3>
<p className="text-sm text-zinc-400">Sub-second load times. Google loves it, your clients love it.</p>
</div>

<div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 hover:border-orange-500/20 transition-colors">
<div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center mb-4 text-purple-400">
<svg className="w-5 h-5" data-lucide="search"></svg>
</div>
<h3 className="text-lg font-semibold mb-2">Basic SEO Setup</h3>
<p className="text-sm text-zinc-400">Meta tags, open graph images, and sitemap generation included.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-16">Why we are different</h2>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-zinc-800">
<th className="py-6 px-4 text-sm font-medium text-zinc-500 uppercase tracking-wider w-1/3">Features</th>
<th className="py-6 px-4 text-sm font-bold text-orange-500 uppercase tracking-wider bg-zinc-900/30 rounded-t-xl w-1/3 text-center border-x border-t border-zinc-800">Our Offer</th>
<th className="py-6 px-4 text-sm font-medium text-zinc-500 uppercase tracking-wider w-1/3 text-center">Typical Agency</th>
</tr>
</thead>
<tbody className="text-zinc-300">
<tr className="border-b border-zinc-800/50">
<td className="py-6 px-4 font-medium">Cost</td>
<td className="py-6 px-4 text-center font-semibold bg-zinc-900/30 border-x border-zinc-800 text-white">$997 One-time</td>
<td className="py-6 px-4 text-center text-zinc-500">$3,000 + $200/mo</td>
</tr>
<tr className="border-b border-zinc-800/50">
<td className="py-6 px-4 font-medium">Delivery Time</td>
<td className="py-6 px-4 text-center font-semibold bg-zinc-900/30 border-x border-zinc-800 text-white">5 Days</td>
<td className="py-6 px-4 text-center text-zinc-500">4-6 Weeks</td>
</tr>
<tr className="border-b border-zinc-800/50">
<td className="py-6 px-4 font-medium">Copywriting</td>
<td className="py-6 px-4 text-center bg-zinc-900/30 border-x border-zinc-800"><svg className="w-5 h-5 text-green-500 mx-auto" data-lucide="check"></svg></td>
<td className="py-6 px-4 text-center"><svg className="w-5 h-5 text-zinc-600 mx-auto" data-lucide="x"></svg></td>
</tr>
<tr className="border-b border-zinc-800/50">
<td className="py-6 px-4 font-medium">Design Quality</td>
<td className="py-6 px-4 text-center bg-zinc-900/30 border-x border-zinc-800">World Class</td>
<td className="py-6 px-4 text-center text-zinc-500">Template-based</td>
</tr>
<tr>
<td className="py-6 px-4 font-medium">Monthly Fees</td>
<td className="py-6 px-4 text-center bg-zinc-900/30 border-x border-b border-zinc-800 rounded-b-xl"><span className="text-white font-bold">NONE</span></td>
<td className="py-6 px-4 text-center text-zinc-500">Forever</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-16 text-center">Your new site in 5 days.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>

<div className="relative pt-8">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-black border border-zinc-700 rounded-full flex items-center justify-center text-xs font-mono text-zinc-400 z-10">01</div>
<div className="bg-zinc-900 p-8 rounded-2xl border border-white/5 h-full">
<h3 className="text-xl font-semibold mb-3">The Deep Dive</h3>
<p className="text-zinc-400 text-sm leading-relaxed">We hop on a 30-min call to extract your offer, your story, and your ideal client profile. We gather your photos and testimonials.</p>
</div>
</div>

<div className="relative pt-8">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-orange-600 border border-orange-500 rounded-full flex items-center justify-center text-xs font-mono text-white shadow-[0_0_15px_rgba(234,88,12,0.5)] z-10">02</div>
<div className="bg-zinc-900 p-8 rounded-2xl border border-white/5 h-full">
<h3 className="text-xl font-semibold mb-3">The Build</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Our team writes the copy and designs the interface. We build it out using modern, clean code (no bloated page builders).</p>
</div>
</div>

<div className="relative pt-8">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-black border border-zinc-700 rounded-full flex items-center justify-center text-xs font-mono text-zinc-400 z-10">03</div>
<div className="bg-zinc-900 p-8 rounded-2xl border border-white/5 h-full">
<h3 className="text-xl font-semibold mb-3">Launch &amp; Handover</h3>
<p className="text-zinc-400 text-sm leading-relaxed">We connect your domain, set up your lead forms, and hand you the keys. You own everything 100%.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-900/30">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-16">Don't take our word for it.</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-8 bg-black border border-zinc-800 rounded-2xl">
<div className="flex gap-1 text-orange-500 mb-4">
<svg className="w-4 h-4 fill-current" data-lucide="star"></svg>
<svg className="w-4 h-4 fill-current" data-lucide="star"></svg>
<svg className="w-4 h-4 fill-current" data-lucide="star"></svg>
<svg className="w-4 h-4 fill-current" data-lucide="star"></svg>
<svg className="w-4 h-4 fill-current" data-lucide="star"></svg>
</div>
<p className="text-zinc-300 mb-6 leading-relaxed">"I was hesitant about the price at first, but the landing page paid for itself in the first week. I got 5 new discovery calls within 48 hours of launching. The design is absolutely sleek."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 font-bold">JS</div>
<div>
<div className="font-medium text-white">James Smith</div>
<div className="text-xs text-zinc-500">Strength Coach</div>
</div>
</div>
</div>
<div className="p-8 bg-black border border-zinc-800 rounded-2xl">
<div className="flex gap-1 text-orange-500 mb-4">
<svg className="w-4 h-4 fill-current" data-lucide="star"></svg>
<svg className="w-4 h-4 fill-current" data-lucide="star"></svg>
<svg className="w-4 h-4 fill-current" data-lucide="star"></svg>
<svg className="w-4 h-4 fill-current" data-lucide="star"></svg>
<svg className="w-4 h-4 fill-current" data-lucide="star"></svg>
</div>
<p className="text-zinc-300 mb-6 leading-relaxed">"The process was so simple. They handled the copy, the design, and the tech. I just provided my photos. Now I look like a premium brand, not just a guy with an Instagram account."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 font-bold">MK</div>
<div>
<div className="font-medium text-white">Maria Klein</div>
<div className="text-xs text-zinc-500">Yoga Instructor</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-12">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium select-none">
<span>Are there really no monthly fees?</span>
<svg className="w-5 h-5 text-zinc-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></svg>
</summary>
<div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                    Correct. You pay a one-time fee for the design and build. The only recurring cost you will have is for your domain name (approx $12/year) and basic hosting (approx $5/mo), which you pay directly to the provider. We don't charge you a retainer.
                </div>
</details>
<details className="group bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium select-none">
<span>I don't have good photos. Can you help?</span>
<svg className="w-5 h-5 text-zinc-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></svg>
</summary>
<div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                    Yes. We have a library of premium, high-end fitness stock photography we can use that doesn't look cheesy. However, we strongly recommend a photoshoot eventually. We also provide a guide on how to take decent photos with your iPhone.
                </div>
</details>
<details className="group bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium select-none">
<span>How do I edit the site later?</span>
<svg className="w-5 h-5 text-zinc-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></svg>
</summary>
<div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                    We build on a user-friendly platform. At handover, we send you a 10-minute video tutorial showing you exactly how to change text, swap images, or update prices. It's as easy as editing a Word document.
                </div>
</details>
<details className="group bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium select-none">
<span>What happens after I pay?</span>
<svg className="w-5 h-5 text-zinc-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></svg>
</summary>
<div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                    You'll be redirected to a simple onboarding form. Once you fill that out, we start the work immediately. Your site will be live in 5 business days.
                </div>
</details>
</div>
</section>

<section className="py-32 px-6 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-orange-500/5 z-0"></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6 text-white">Ready to scale?</h2>
<p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">Join the top 1% of fitness coaches who have a website that actually prints money.</p>
<button className="px-10 py-5 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold text-xl shadow-[0_0_50px_-10px_rgba(234,88,12,0.4)] transition-all transform hover:scale-105" onclick="document.getElementById('lead-modal').classList.remove('hidden')">
                Get Started Now - $997
            </button>
<p className="mt-6 text-xs text-zinc-600">30-Day Money Back Guarantee if you don't love the design.</p>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12 px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-800 rounded flex items-center justify-center text-xs font-bold">F</div>
<span className="text-zinc-400 font-medium">FitScale</span>
</div>
<div className="flex gap-8 text-sm text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="text-zinc-600 text-xs">
                © 2024 FitScale Design. All rights reserved.
            </div>
</div>
</footer>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300" id="lead-modal">
<div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 w-full max-w-md relative shadow-2xl animate-fade-in-up">
<button className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors" onclick="document.getElementById('lead-modal').classList.add('hidden')">
<svg className="w-6 h-6" data-lucide="x"></svg>
</button>
<div className="text-center mb-6">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-500/10 text-orange-500 mb-4">
<svg className="w-6 h-6" data-lucide="lock"></svg>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight">Secure Your Spot</h3>
<p className="text-zinc-400 mt-2 text-sm">Enter your details below to lock in the $997 price.</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Redirecting to payment...');">
<div>
<label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5" htmlFor="name">Full Name</label>
<input className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-700 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all" id="name" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5" htmlFor="email">Email Address</label>
<input className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-700 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all" id="email" placeholder="john@example.com" required="" type="email"/>
</div>
<button className="w-full bg-white hover:bg-zinc-200 text-black font-bold py-3 rounded-lg shadow-lg transition-all mt-2" type="submit">
                    Continue to Payment
                </button>
<div className="flex items-center justify-center gap-2 text-xs text-zinc-600 mt-4">
<svg className="w-3 h-3" data-lucide="shield-check"></svg>
<span>256-bit SSL Encrypted Payment</span>
</div>
</form>
</div>
</div>


    </>
  );
}
