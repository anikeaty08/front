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



    // Icons
    lucide.createIcons({attr:{'stroke-width':1.5}});
    // Copy current year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Reveal animations
    const observer = new IntersectionObserver((entries)=> {
      entries.forEach(entry=>{
        if(entry.isIntersecting){entry.target.classList.add('opacity-100'); observer.unobserve(entry.target);}
      });
    }, {threshold:.1});
    document.querySelectorAll('.reveal').forEach(el=>{
      el.classList.add('opacity-0'); observer.observe(el);
    });

    // Modal
    const modal      = document.getElementById('modal');
    const modalBg    = document.getElementById('modalBg');
    document.getElementById('openLogin').onclick = ()=>{modal.classList.remove('hidden'); modal.classList.add('flex');};
    const close = ()=>{modal.classList.add('hidden'); modal.classList.remove('flex');}
    document.getElementById('closeLogin').onclick = close;
    modalBg.onclick = close;
    window.onkeydown = e=>{if(e.key==='Escape') close();};
  
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
      

<header className="sticky top-0 z-20 bg-white/70 backdrop-blur-md">
<div className="mx-auto max-w-5xl flex items-center justify-between py-4 px-6">

<a className="text-xl font-semibold tracking-tight" href="#">Parallel</a>
<nav className="flex items-center gap-6">
<a className="text-sm hover:underline" href="#join">Join</a>
<button className="flex items-center gap-1 text-sm hover:text-gray-700" id="openLogin">
<i className="w-4 h-4" data-lucide="log-in"></i>Log In
        </button>
</nav>
</div>
<div className="border-t border-gray-200"></div>
</header>

<section className="mx-auto max-w-5xl pt-24 pb-32 px-6 text-center">
<h1 className="text-5xl sm:text-6xl leading-tight font-semibold tracking-tight reveal">Deep Work, Together.</h1>
<p className="mt-6 max-w-2xl mx-auto text-lg text-gray-700 reveal reveal-delay-1">
      Parallel is a private community for people who practice focused, intentional work and digital minimalism. Leave the noise behind—build, write, and think with clarity.
    </p>
<div className="mt-8 flex flex-col sm:flex-row sm:justify-center gap-4 reveal reveal-delay-2">
<a className="inline-block rounded-md bg-gray-900 text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 focus:outline-none" href="#join">
        Request Invite
      </a>
<a className="inline-block text-sm text-gray-700 hover:underline" href="#explore">Explore more</a>
</div>
</section>

<div className="border-t border-gray-200"></div>

<section className="mx-auto max-w-5xl py-24 px-6 grid md:grid-cols-3 gap-12" id="explore">
<div className="reveal">
<i className="w-8 h-8 text-gray-900 mb-4" data-lucide="focus"></i>
<h2 className="text-2xl font-semibold tracking-tight mb-2">Focus Rituals</h2>
<p className="text-gray-700">Daily and weekly sessions designed to help you enter flow and stay there.</p>
</div>
<div className="reveal reveal-delay-1">
<i className="w-8 h-8 text-gray-900 mb-4" data-lucide="users"></i>
<h2 className="text-2xl font-semibold tracking-tight mb-2">Accountability</h2>
<p className="text-gray-700">Pair with peers who value depth over dopamine. Share goals, track progress.</p>
</div>
<div className="reveal reveal-delay-2">
<i className="w-8 h-8 text-gray-900 mb-4" data-lucide="book-open"></i>
<h2 className="text-2xl font-semibold tracking-tight mb-2">Curated Library</h2>
<p className="text-gray-700">Essays, templates, and resources on minimalism, focus, and mindful tech use.</p>
</div>
</section>

<div className="border-t border-gray-200"></div>

<section className="mx-auto max-w-5xl py-24 px-6">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-12 reveal">What Members Say</h2>
<div className="grid md:grid-cols-3 gap-8">

<figure className="flex flex-col rounded-lg border border-gray-200 p-6 shadow-sm reveal">
<img alt="" className="w-14 h-14 rounded-full mb-4 mx-auto object-cover" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<blockquote className="text-gray-700 italic leading-relaxed mb-4">
          “Parallel gave my workday a rhythm—focus blocks, reflection, zero clutter. I finish each day energized, not drained.”
        </blockquote>
<figcaption className="text-sm font-medium text-gray-900 text-center">Elena C.</figcaption>
</figure>

<figure className="flex flex-col rounded-lg border border-gray-200 p-6 shadow-sm reveal reveal-delay-1">
<img alt="" className="w-14 h-14 rounded-full mb-4 mx-auto object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<blockquote className="text-gray-700 italic leading-relaxed mb-4">
          “I tried countless productivity hacks. Nothing stuck until this community distilled what matters—intentional time.”
        </blockquote>
<figcaption className="text-sm font-medium text-gray-900 text-center">Mark L.</figcaption>
</figure>

<figure className="flex flex-col rounded-lg border border-gray-200 p-6 shadow-sm reveal reveal-delay-2">
<img alt="" className="w-14 h-14 rounded-full mb-4 mx-auto object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<blockquote className="text-gray-700 italic leading-relaxed mb-4">
          “Deleting social apps was step one; Parallel filled the gap with real connection and purposeful work.”
        </blockquote>
<figcaption className="text-sm font-medium text-gray-900 text-center">Ayesha N.</figcaption>
</figure>
</div>
</section>

<div className="border-t border-gray-200"></div>

<section className="mx-auto max-w-3xl py-24 px-6 text-center" id="join">
<h2 className="text-3xl font-semibold tracking-tight mb-6 reveal">Request an Invite</h2>
<form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 reveal reveal-delay-1">
<input className="flex-1 border border-gray-300 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-gray-900 focus:outline-none" placeholder="Email address" required="" type="email"/>
<button className="rounded-md bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 focus:outline-none" type="submit">
        Notify Me
      </button>
</form>
<p className="mt-4 text-xs text-gray-500">We’ll never spam you. Unsubscribe anytime.</p>
</section>

<footer className="border-t border-gray-200 py-8 px-6 text-center text-sm text-gray-600">
    © <span id="year"></span> Parallel. All rights reserved.
  </footer>

<div className="fixed inset-0 hidden items-center justify-center" id="modal">
<div className="absolute inset-0 modal-bg" id="modalBg"></div>
<div className="relative bg-white rounded-lg shadow-xl w-full max-w-sm mx-4 p-8">
<button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700" id="closeLogin">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
<h3 className="text-xl font-semibold tracking-tight mb-6 text-center">Member Login</h3>
<form className="flex flex-col gap-4">
<label className="text-sm">
          Email
          <input className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-gray-900 focus:outline-none" required="" type="email"/>
</label>
<label className="text-sm">
          Password
          <input className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-gray-900 focus:outline-none" required="" type="password"/>
</label>
<button className="mt-4 rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 focus:outline-none" type="submit">Enter</button>
</form>
</div>
</div>



    </>
  );
}
