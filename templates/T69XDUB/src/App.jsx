import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    // Lucide icons
    lucide.createIcons();

    // Staggered reveal
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('delay') || 0;
          setTimeout(() => entry.target.classList.add('show'), delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('[data-animate]').forEach(el => { el.classList.add('fade'); observer.observe(el); });

    // Particles
    tsParticles.load("tsparticles", {
      fullScreen: { enable: false },
      particles: {
        number: { value: 90, density: { enable: true, value_area: 800 } },
        color: { value: ["#818cf8","#a855f7","#14b8a6"] },
        shape: { type: "circle" },
        opacity: { value: 0.15, random: true },
        size: { value: 3, random: { enable: true, minimumValue: 1 } },
        move: { enable: true, speed: 0.6 }
      },
      interactivity: { detectsOn: "canvas", events: { resize: true } },
      retina_detect: true
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 -z-10" id="tsparticles"></div>

<header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
<h1 className="text-2xl font-semibold tracking-tight">AI Mail</h1>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="hover:text-indigo-400 transition-colors" href="#features">Features</a>
<a className="hover:text-indigo-400 transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-indigo-400 transition-colors" href="#download">Download</a>
<a className="hover:text-indigo-400 transition-colors" href="#team-dev">For Teams</a>
</nav>
<button className="md:hidden" onclick="document.getElementById('mobile').classList.toggle('hidden')">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</header>

<div className="hidden px-6 pb-4 space-y-3 md:hidden" id="mobile">
<a className="block hover:text-indigo-400" href="#features">Features</a>
<a className="block hover:text-indigo-400" href="#pricing">Pricing</a>
<a className="block hover:text-indigo-400" href="#download">Download</a>
<a className="block hover:text-indigo-400" href="#team-dev">For Teams</a>
</div>

<section className="max-w-7xl mx-auto px-6 pt-16 pb-32 text-center relative" id="hero">
<div className="absolute inset-x-0 top-0 pointer-events-none h-48 clip-gradient opacity-40 blur-3xl"></div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight fade" data-animate="">AI Mail</h2>
<p className="mt-4 text-lg md:text-2xl text-neutral-300 fade" data-animate="" delay="100">
      Your inbox, with super powers. Private by design.
    </p>
<p className="mt-6 max-w-2xl mx-auto text-neutral-400 fade" data-animate="" delay="200">
      Finally, an email client that thinks like you do – built for iOS &amp; macOS with on-device intelligence.
    </p>
<div className="mt-10 flex justify-center gap-4 fade" data-animate="" delay="300">
<a className="px-6 py-3 rounded-lg bg-indigo-600/90 hover:bg-indigo-500 transition-colors font-medium text-sm shadow-lg shadow-indigo-500/20" href="#pricing" id="download">
        Download on the App Store
      </a>
<a className="px-6 py-3 rounded-lg border border-neutral-700 hover:border-neutral-500 transition-colors text-sm" href="#features">
        Explore Features
      </a>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24" id="features">
<div className="grid md:grid-cols-2 gap-16">

<div className="space-y-12">
<div className="fade" data-animate="">
<div className="flex items-center gap-3">
<div className="p-3 rounded-lg bg-indigo-600/10 text-indigo-400"><i className="w-6 h-6" data-lucide="zap"></i></div>
<h3 className="text-xl font-medium tracking-tight">Lightning Fast Intelligence</h3>
</div>
<ul className="mt-4 space-y-2 text-neutral-400 list-disc list-inside">
<li>50 ms responses – faster than you can blink</li>
<li>Smart correlations surface related emails instantly</li>
<li>Predictive suggestions that actually save time</li>
</ul>
</div>
<div className="fade" data-animate="" delay="100">
<div className="flex items-center gap-3">
<div className="p-3 rounded-lg bg-emerald-600/10 text-emerald-400"><i className="w-6 h-6" data-lucide="lock"></i></div>
<h3 className="text-xl font-medium tracking-tight">Privacy First, Always</h3>
</div>
<ul className="mt-4 space-y-2 text-neutral-400 list-disc list-inside">
<li>Zero cloud processing – your emails never leave device</li>
<li>On-device AI with 3B parameter model</li>
<li>Enterprise-grade encryption, HIPAA / GDPR ready</li>
</ul>
</div>
<div className="fade" data-animate="" delay="200">
<div className="flex items-center gap-3">
<div className="p-3 rounded-lg bg-yellow-600/10 text-yellow-400"><i className="w-6 h-6" data-lucide="activity"></i></div>
<h3 className="text-xl font-medium tracking-tight">Built for How You Work</h3>
</div>
<ul className="mt-4 space-y-2 text-neutral-400 list-disc list-inside">
<li>Adaptive AI – knows when to help &amp; when to step back</li>
<li>Sales intelligence tracking deals &amp; relationships</li>
<li>One-tap responses that sound like you</li>
</ul>
</div>
<div className="fade" data-animate="" delay="300">
<div className="flex items-center gap-3">
<div className="p-3 rounded-lg bg-pink-600/10 text-pink-400"><i className="w-6 h-6" data-lucide="command"></i></div>
<h3 className="text-xl font-medium tracking-tight">Native Apple Experience</h3>
</div>
<ul className="mt-4 space-y-2 text-neutral-400 list-disc list-inside">
<li>Seamless Mail.app extension</li>
<li>Siri Shortcuts for voice control</li>
<li>Widgets that show what matters now</li>
</ul>
</div>
</div>

<div className="relative">
<img alt="App mockup" className="rounded-3xl shadow-2xl w-full h-auto fade" data-animate="" src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-indigo-600/30 to-transparent blur-xl -z-10"></div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24" id="pricing">
<div className="bg-neutral-900/60 rounded-3xl p-12 md:p-16 border border-neutral-800 relative overflow-hidden fade" data-animate="">
<div className="absolute left-1/2 -translate-x-1/2 -top-48 w-[60rem] h-[60rem] bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-transparent rounded-full blur-3xl"></div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">Simple, predictable pricing.</h2>
<p className="text-neutral-400 text-center mt-4">Try it free for 14 days, cancel anytime.</p>
<div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-12">
<div className="w-full max-w-sm bg-neutral-800 p-8 rounded-2xl border border-neutral-700/60">
<h3 className="text-xl font-medium tracking-tight">Individual</h3>
<p className="mt-6 text-4xl font-semibold">$12 <span className="text-base font-normal text-neutral-400">/ month</span></p>
<p className="mt-2 text-neutral-500 text-sm">$120 / year (save 17%)</p>
<ul className="mt-8 space-y-3 text-sm text-neutral-300">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-400" data-lucide="check"></i> All AI features</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-400" data-lucide="check"></i> Unlimited devices</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-400" data-lucide="check"></i> Priority support</li>
</ul>
<a className="mt-8 w-full inline-block text-center rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors py-3 text-sm font-medium shadow shadow-indigo-600/30" href="#">Start Free Trial</a>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center fade" data-animate="">What people are saying</h2>
<div className="mt-12 grid md:grid-cols-3 gap-8">
<figure className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 space-y-4 fade" data-animate="">
<blockquote className="text-neutral-300 text-sm">
          “Like Superhuman, but actually respects your privacy.”
        </blockquote>
<figcaption className="flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1502767089025-6572583495b4?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<span className="text-neutral-400 text-xs">Product Hunt @jules</span>
</figcaption>
</figure>
<figure className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 space-y-4 fade" data-animate="" delay="100">
<blockquote className="text-neutral-300 text-sm">
          “Raycast for email – fast, smart, native.”
        </blockquote>
<figcaption className="flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<span className="text-neutral-400 text-xs">Indie Hackers @zoe</span>
</figcaption>
</figure>
<figure className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 space-y-4 fade" data-animate="" delay="200">
<blockquote className="text-neutral-300 text-sm">
          “The AI email client Apple should have built.”
        </blockquote>
<figcaption className="flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<span className="text-neutral-400 text-xs">MacStories @leo</span>
</figcaption>
</figure>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-32" id="team-dev">
<div className="grid md:grid-cols-2 gap-12">
<div className="bg-neutral-900/60 p-10 rounded-3xl border border-neutral-800 fade" data-animate="">
<h3 className="text-2xl font-medium tracking-tight">For Teams</h3>
<p className="mt-4 text-neutral-400 text-sm">
          Shared personas, unified analytics &amp; admin controls.
        </p>
<a className="mt-6 inline-flex items-center gap-2 text-sm hover:text-indigo-400 transition-colors" href="#">
          Contact Sales <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="bg-neutral-900/60 p-10 rounded-3xl border border-neutral-800 fade" data-animate="" delay="100">
<h3 className="text-2xl font-medium tracking-tight">For Developers</h3>
<p className="mt-4 text-neutral-400 text-sm">
          Build plugins with our Swift SDK – join the beta.
        </p>
<a className="mt-6 inline-flex items-center gap-2 text-sm hover:text-indigo-400 transition-colors" href="#">
          Join Beta <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<footer className="border-t border-neutral-800 pt-12 pb-16 px-6 text-sm text-neutral-500">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
<p>© 2024 AI Mail. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="hover:text-indigo-400" href="#">Privacy</a>
<a className="hover:text-indigo-400" href="#">Terms</a>
<a className="hover:text-indigo-400" href="#">Contact</a>
</div>
</div>
</footer>


    </>
  );
}
