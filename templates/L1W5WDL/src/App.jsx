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
fontFamily: { nunito: ['"Nunito"', 'sans-serif'] },
colors: {
background: '#FDF8F3',
accent: '#FF7171',
subtle: '#E9E4DE',
ink: '#3B3B3B'
}
}
}
}



    // Icon render
    lucide.createIcons({ strokeWidth: 1.5 });

    // Year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Simple staggered reveal
    document.addEventListener('DOMContentLoaded', () => {
      const els = document.querySelectorAll('.js-animate');
      els.forEach((el, idx) => {
        setTimeout(() => {
          el.classList.remove('opacity-0', 'translate-y-4');
          el.classList.add('opacity-100', 'translate-y-0');
        }, idx * 120);
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
      

<header className="sticky top-0 z-30 backdrop-blur-md bg-background/80 border-b border-subtle/70">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<a className="text-2xl tracking-tighter font-semibold js-animate transition-all duration-700 opacity-0 translate-y-4" href="#">glimmer<span className="text-accent">.</span></a>
<nav className="hidden md:flex gap-8 text-sm">
<a className="flex items-center gap-1 hover:text-accent transition-colors js-animate opacity-0 translate-y-4 duration-700" href="#about">About</a>
<a className="flex items-center gap-1 hover:text-accent transition-colors js-animate opacity-0 translate-y-4 duration-700" href="#members">Members</a>
<a className="flex items-center gap-1 hover:text-accent transition-colors js-animate opacity-0 translate-y-4 duration-700" href="#reels">Reels</a>
<a className="flex items-center gap-1 hover:text-accent transition-colors js-animate opacity-0 translate-y-4 duration-700" href="#join">Join</a>
</nav>
<button aria-label="Menu" className="md:hidden p-2 rounded hover:bg-subtle/60 js-animate opacity-0 translate-y-4 duration-700">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</header>

<section className="relative overflow-hidden pt-24 pb-32" id="about">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -bottom-20 -left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
<div className="absolute -top-10 -right-10 w-56 h-56 bg-accent/20 rounded-full blur-2xl"></div>
</div>
<div className="max-w-3xl mx-auto px-6 text-center space-y-6 relative">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight js-animate opacity-0 translate-y-4 duration-700">Games made with heart<span className="text-accent">.</span></h1>
<p className="text-lg text-ink/80 js-animate opacity-0 translate-y-4 duration-700">Glimmer is a tiny, invite-only collective where indie developers craft warm, wonderful, and weird experiences—together.</p>
<div className="flex justify-center gap-4 js-animate opacity-0 translate-y-4 duration-700">
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-medium shadow hover:shadow-lg transition-all" href="#join">
          Request an Invite
          <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-subtle/80 hover:border-accent hover:text-accent transition-all" href="#reels">
          Watch Reels
        </a>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-28" id="members">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-10 js-animate opacity-0 translate-y-4 duration-700">Meet the Makers</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="rounded-xl border border-subtle/70 p-6 bg-white hover:shadow-md transition-shadow js-animate opacity-0 translate-y-4 duration-700">
<div className="flex items-center gap-4 mb-4">
<img alt="Avatar" className="w-16 h-16 rounded-md border border-subtle/70 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<h3 className="font-medium tracking-tight">Kara “Bitwitch” Wu</h3>
<p className="text-sm text-ink/60">she/her · Toronto</p>
</div>
</div>
<p className="text-sm leading-relaxed mb-4">Narrative designer stitching together lo-fi pixels and hi-fi feelings. Currently experimenting with plant simulators.</p>
<div className="flex gap-3">
<a className="hover:text-accent transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="hover:text-accent transition-colors" href="#"><i className="w-5 h-5" data-lucide="github"></i></a>
</div>
</article>

<article className="rounded-xl border border-subtle/70 p-6 bg-white hover:shadow-md transition-shadow js-animate opacity-0 translate-y-4 duration-700">
<div className="flex items-center gap-4 mb-4">
<img alt="Avatar" className="w-16 h-16 rounded-md border border-subtle/70 object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div>
<h3 className="font-medium tracking-tight">Toby “Glitch” Ramirez</h3>
<p className="text-sm text-ink/60">he/him · Austin</p>
</div>
</div>
<p className="text-sm leading-relaxed mb-4">Code wizard and chiptune addict. Building procedural worlds one happy accident at a time.</p>
<div className="flex gap-3">
<a className="hover:text-accent transition-colors" href="#"><i className="w-5 h-5" data-lucide="youtube"></i></a>
<a className="hover:text-accent transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</article>

<article className="rounded-xl border border-subtle/70 p-6 bg-white hover:shadow-md transition-shadow js-animate opacity-0 translate-y-4 duration-700">
<div className="flex items-center gap-4 mb-4">
<img alt="Avatar" className="w-16 h-16 rounded-md border border-subtle/70 object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div>
<h3 className="font-medium tracking-tight">Mina “Sprite” Olson</h3>
<p className="text-sm text-ink/60">they/them · Malmö</p>
</div>
</div>
<p className="text-sm leading-relaxed mb-4">Pixel artist in perpetual pastel mode. Lover of cozy corners, coffee, and cat NPCs.</p>
<div className="flex gap-3">
<a className="hover:text-accent transition-colors" href="#"><i className="w-5 h-5" data-lucide="dribbble"></i></a>
<a className="hover:text-accent transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</article>
</div>
</section>

<section className="bg-subtle/40 py-24" id="reels">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-10 js-animate opacity-0 translate-y-4 duration-700">Demo Reels</h2>
<div className="grid md:grid-cols-2 gap-10">
<div className="relative rounded-xl overflow-hidden border border-subtle/70 bg-black js-animate opacity-0 translate-y-4 duration-700">
<video autoplay="" className="w-full h-full" loop="" muted="" playsinline="" poster="https://source.unsplash.com/random/600x400?pixel,game" src="https://cdn.pixabay.com/video/2022/07/13/125357-731384627_small.mp4"></video>
</div>
<div className="relative rounded-xl overflow-hidden border border-subtle/70 bg-black js-animate opacity-0 translate-y-4 duration-700">
<video autoplay="" className="w-full h-full" loop="" muted="" playsinline="" poster="https://source.unsplash.com/random/600x400?arcade" src="https://cdn.pixabay.com/video/2020/03/26/34645-413928744_small.mp4"></video>
</div>
</div>
</div>
</section>

<section className="py-24" id="join">
<div className="max-w-3xl mx-auto px-6 text-center space-y-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight js-animate opacity-0 translate-y-4 duration-700">Want in?</h2>
<p className="text-lg text-ink/80 js-animate opacity-0 translate-y-4 duration-700">We open the gates a few times a year. Drop your email and share a bit about your passion project—we’ll reach out when a spot opens.</p>
<form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 js-animate opacity-0 translate-y-4 duration-700">
<input className="flex-1 px-4 py-3 rounded-lg border border-subtle/80 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="your@email.com" required="" type="email"/>
<button className="px-6 py-3 rounded-lg bg-accent text-white font-medium shadow hover:shadow-lg transition-all" type="submit">
          Request Invite
        </button>
</form>
</div>
</section>

<footer className="border-t border-subtle/70 py-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<span className="text-sm text-ink/60">© <span id="year"></span> Glimmer Collective</span>
<div className="flex gap-4">
<a className="hover:text-accent transition-colors" href="#"><i className="w-5 h-5" data-lucide="github"></i></a>
<a className="hover:text-accent transition-colors" href="#"><i className="w-5 h-5" data-lucide="mail"></i></a>
</div>
</div>
</footer>




    </>
  );
}
