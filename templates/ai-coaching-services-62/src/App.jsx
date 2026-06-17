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
coral: '#EF4623',
ink: '#2D3B42',
canvas: '#F9F8F6',
vanilla: '#F9F0E1',
cyan: '#BBDDEF',
},
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
serif: ['"Source Serif 4"', 'serif'],
},
borderRadius: {
'4xl': '2rem',
'5xl': '3rem',
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
      

<nav className="fixed z-50 transition-all duration-300 md:px-12 flex w-full pt-6 pr-6 pb-6 pl-6 top-0 left-0 backdrop-blur-md items-center justify-between bg-white/10">
<a className="md:text-3xl text-ink hover:opacity-80 transition-opacity text-2xl font-medium italic tracking-tight font-serif" href="#">
            ActuallyUseful
        </a>
<div className="hidden md:flex gap-8 text-sm font-medium tracking-wide gap-x-8 gap-y-8 items-center">
<a className="text-ink/80 hover:text-coral transition-colors" href="#home">Home</a>
<a className="text-ink/80 hover:text-coral transition-colors" href="#about">About</a>
<a className="text-ink/80 hover:text-coral transition-colors" href="#learn">Learn</a>
<a className="text-ink/80 hover:text-coral transition-colors" href="#work">Work With Me</a>
<a className="px-5 py-2.5 rounded-full border border-ink/10 hover:border-coral/30 hover:text-coral transition-all bg-white/50 hover:bg-white" href="#contact">Reach Out</a>
</div>

<button className="md:hidden text-ink">
<svg className="lucide lucide-menu w-8 h-8" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</nav>

<header className="min-h-[90vh] flex flex-col overflow-hidden text-center pt-20 pr-6 pl-6 relative items-center justify-center" id="home">

<div className="z-0 bg-center w-full h-full bg-cover absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e4b08548-af2a-40d7-969a-6e88e5c60d59_3840w.png\')'}}></div>
<div className="z-10 max-w-4xl mr-auto ml-auto relative space-y-8">
<h1 className="flex flex-col gap-2">
<span className="md:text-7xl lg:text-8xl text-ink leading-tight text-5xl italic tracking-tight font-serif" style={{}}>AI made simple.</span>
<span className="md:text-7xl lg:text-8xl text-ink leading-tight text-5xl font-medium tracking-tight">Tech made practical.</span>
</h1>
<p className="md:text-2xl text-ink/80 leading-relaxed text-xl font-serif max-w-2xl mr-auto ml-auto">Helping you make the most of technology, with the least overwhelm.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
<a className="bg-coral font-sans font-medium text-lg px-8 py-4 rounded-full shadow-lg shadow-coral/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-white" href="#work">
                    I Need This
                </a>
<a className="text-ink transition-all duration-300 hover:bg-white/70 text-lg font-medium bg-white/40 border-white/60 border rounded-full pt-4 pr-8 pb-4 pl-8 backdrop-blur-sm" href="#about">
                    Show Me How
                </a>
</div>
</div>
<div className="absolute bottom-10 left-0 w-full flex justify-center animate-bounce duration-[3000ms] z-10">
<svg className="lucide lucide-arrow-down text-ink/30 w-8 h-8" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
</header>

<section className="md:py-32 pt-24 pr-6 pb-24 pl-6" id="about">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24">

<div className="space-y-6">
<div className="flex items-center gap-3 mb-2">
<span className="p-2 bg-vanilla rounded-xl text-coral">
<svg className="lucide lucide-filter w-6 h-6" data-icon-replaced="true" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(239, 70, 35)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
</span>
<h2 className="font-sans font-medium text-3xl tracking-tight text-ink">My Role</h2>
</div>
<h3 className="font-sans font-medium text-2xl leading-snug text-ink">
                    I teach you <span className="line-through decoration-coral/60 decoration-2 text-ink/50">what to ignore and</span> what to pay attention to.
                </h3>
<div className="leading-relaxed text-ink/90 text-xl font-serif space-y-4">
<p className="">Every week, there's something new. A tool, a model, a headline. Most of it doesn't matter for the work you actually do.</p>
<p className="">I filter it for you. I explain it in plain English. Then I show you how to use it for work - not a generic use case you saw on LinkedIn.</p>
</div>
</div>

<div className="space-y-6">
<div className="flex items-center gap-3 mb-2">
<span className="p-2 bg-vanilla rounded-xl text-coral">
<svg className="lucide lucide-target w-6 h-6" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</span>
<h2 className="font-sans font-medium text-3xl tracking-tight text-ink">My Goal</h2>
</div>
<h3 className="font-sans font-medium text-2xl leading-snug text-ink">
                    To close the gap between you and the people who already get this.
                </h3>
<div className="font-serif text-xl leading-relaxed text-ink/90 space-y-4">
<p>There's a group of people who are using AI as a normal part of their workday. They're not smarter than you. They just had a head start.</p>
<p>My job is to give you that same fluency. I teach you how to think and work in a way that makes AI useful, so you can do it yourself.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-vanilla relative overflow-hidden rounded-t-[3rem] md:rounded-t-[4rem]">

<div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b to-transparent blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 from-white/20"></div>
<div className="max-w-6xl mx-auto relative z-10">
<h2 className="font-sans font-medium text-4xl md:text-5xl text-ink tracking-tight mb-16 text-center">
                We should work together if...
            </h2>
<div className="grid md:grid-cols-2 gap-8 md:gap-12">

<div className="bg-canvas p-8 md:p-10 rounded-3xl shadow-sm border border-white/50">
<svg className="lucide lucide-hourglass w-10 h-10 text-ink mb-6" data-lucide="hourglass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 22h14"></path><path d="M5 2h14"></path><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path></svg>
<h3 className="font-sans font-medium text-2xl mb-4 text-ink">You sense your methods aren't future-proof.</h3>
<p className="font-serif text-xl text-ink/80 leading-relaxed">
                        You're good at what you do, but the way you work now may not carry you forward. You're not interested in becoming obsolete.
                    </p>
</div>

<div className="bg-canvas p-8 md:p-10 rounded-3xl shadow-sm border border-white/50">
<svg className="lucide lucide-trending-up w-10 h-10 text-ink mb-6" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<h3 className="font-sans font-medium text-2xl mb-4 text-ink">You feel like you're doing things the hard way.</h3>
<p className="font-serif text-xl text-ink/80 leading-relaxed">
                        You suspect there are shortcuts you're missing. You just don't know what they are or where to start.
                    </p>
</div>

<div className="bg-canvas p-8 md:p-10 rounded-3xl shadow-sm border border-white/50">
<svg className="lucide lucide-users w-10 h-10 text-ink mb-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<h3 className="font-sans font-medium text-2xl mb-4 text-ink">You don't want to figure this out alone.</h3>
<p className="font-serif text-xl text-ink/80 leading-relaxed">
                        You don't have time to watch tutorials. You want a guide who tailors the work to what you actually do.
                    </p>
</div>

<div className="bg-canvas p-8 md:p-10 rounded-3xl shadow-sm border border-white/50">
<svg className="lucide lucide-brain-circuit w-10 h-10 text-ink mb-6" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
<h3 className="font-sans font-medium text-2xl mb-4 text-ink">You want skills that last.</h3>
<p className="font-serif text-xl text-ink/80 leading-relaxed">
                        You're not learning "how to use ChatGPT." You're learning how to think so when the next tool comes out, you're ready.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-canvas">
<div className="max-w-4xl mx-auto text-center space-y-12">
<span className="font-sans font-medium text-coral tracking-widest text-sm uppercase">The Methodology</span>
<h2 className="font-sans font-medium text-4xl md:text-6xl text-ink tracking-tight">
                Guided, Not Generic.
            </h2>
<p className="font-serif text-2xl md:text-3xl text-ink leading-relaxed italic">
                "The fastest way to learn something new is to have someone show you what actually works."
            </p>
<div className="text-left p-8 md:p-12 rounded-[2rem] border border-ink/5 mt-12 backdrop-blur-sm bg-white/60">
<h3 className="font-sans font-medium text-2xl mb-6">Here's what that looks like:</h3>
<ul className="space-y-6 font-serif text-xl text-ink/80">
<li className="flex gap-4 items-start">
<div className="mt-1.5 w-2 h-2 rounded-full bg-coral shrink-0"></div>
<p className="">We start with your <span className="font-sans font-medium text-ink">actual work</span>. Where things feel slow or complicated.</p>
</li>
<li className="flex gap-4 items-start">
<div className="mt-1.5 w-2 h-2 rounded-full bg-coral shrink-0"></div>
<p className="">I show you how to use AI for <span className="font-sans font-medium text-ink">those specific things</span>. Not generic examples.</p>
</li>
<li className="flex gap-4 items-start">
<div className="mt-1.5 w-2 h-2 rounded-full bg-coral shrink-0"></div>
<p className="">By the end, you know how to do this <span className="font-sans font-medium text-ink">yourself</span>.</p>
</li>
</ul>
</div>
</div>
</section>

<section className="bg-gradient-to-b from-cyan/20 to-canvas pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-6xl mx-auto">
<h2 className="font-sans font-medium text-4xl text-ink tracking-tight mb-16 text-center">In Your Own Words</h2>
<div className="grid md:grid-cols-2 gap-x-8 gap-y-8">

<div className="backdrop-blur-lg p-10 rounded-3xl shadow-sm border flex flex-col justify-between bg-white/70 border-white/60">
<div className="mb-6">
<svg className="lucide lucide-quote text-cyan w-10 h-10 mb-4 fill-cyan/20" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-lg leading-relaxed text-ink/90 italic">
                            "I always felt like AI was this huge, complicated thing for other people. She broke it down in a way that felt so approachable to me. For the first time, I feel confident and even excited about using these tools."
                        </p>
</div>
<div className="">
<p className="font-sans font-medium text-ink">Sara D.</p>
<p className="font-sans text-sm text-ink/60 uppercase tracking-wide">Founder</p>
</div>
</div>

<div className="backdrop-blur-lg p-10 rounded-3xl shadow-sm border flex flex-col justify-between bg-white/70 border-white/60">
<div className="mb-6">
<svg className="lucide lucide-quote text-cyan w-10 h-10 mb-4 fill-cyan/20" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-lg leading-relaxed text-ink/90 italic">
                            "Mishaal’s training was a breath of fresh air. No jargon, no pressure, just practical advice. Our team workflows are saving us time already."
                        </p>
</div>
<div>
<p className="font-sans font-medium text-ink">Sophia J.</p>
<p className="font-sans text-sm text-ink/60 uppercase tracking-wide">Head of Operations</p>
</div>
</div>

<div className="backdrop-blur-lg p-10 rounded-3xl shadow-sm border flex flex-col justify-between bg-white/70 border-white/60">
<div className="mb-6">
<svg className="lucide lucide-quote text-cyan w-10 h-10 mb-4 fill-cyan/20" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-lg leading-relaxed text-ink/90 italic">
                            "She made a complex topic feel so accessible and human. People walked away feeling less anxious and more curious about AI."
                        </p>
</div>
<div className="">
<p className="font-sans font-medium text-ink">Fahim</p>
<p className="font-sans text-sm text-ink/60 uppercase tracking-wide">Community Organizer</p>
</div>
</div>

<div className="backdrop-blur-lg p-10 rounded-3xl shadow-sm border flex flex-col justify-between bg-white/70 border-white/60">
<div className="mb-6">
<svg className="lucide lucide-quote text-cyan w-10 h-10 mb-4 fill-cyan/20" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-lg leading-relaxed text-ink/90 italic">
                            "Perfect blend of informative and engaging. She showed where the real value is in this tech by literally going through use cases together."
                        </p>
</div>
<div>
<p className="font-sans font-medium text-ink">Karim L.</p>
<p className="font-sans text-sm text-ink/60 uppercase tracking-wide">Event Director</p>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 pt-24 pr-6 pb-24 pl-6" id="work">
<div className="max-w-5xl mx-auto space-y-16">
<h2 className="font-sans font-medium text-4xl md:text-5xl text-ink tracking-tight text-center">
                Ways We Can Work Together
            </h2>
<div className="space-y-8">

<div className="group relative rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-md transition-all border border-ink/5 overflow-hidden bg-white">
<div className="absolute top-0 left-0 w-2 h-full bg-coral"></div>
<div className="flex flex-col md:flex-row gap-8 justify-between items-start">
<div className="space-y-4 max-w-2xl">
<div className="flex items-center gap-3">
<h3 className="font-sans font-medium text-3xl text-ink">AI Coaching</h3>
<span className="bg-coral/10 text-coral text-xs font-sans font-medium px-3 py-1 rounded-full uppercase tracking-wide">Primary Focus</span>
</div>
<p className="font-serif text-xl text-ink/80 italic">"I want to fundamentally change how I work."</p>
<p className="font-serif text-lg text-ink/70 leading-relaxed">We build a custom learning plan and apply it to your actual work. Includes discovery, 6-8 sessions, and full support.</p>
<div className="pt-4 flex items-center gap-2 text-ink/60 font-sans text-sm font-medium">
<svg className="lucide lucide-check w-4 h-4 text-coral" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> True AI Literacy
                                <svg className="lucide lucide-check w-4 h-4 text-coral ml-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Independent Skill
                            </div>
</div>
<div className="flex flex-col items-start md:items-end gap-2 shrink-0 mt-4 md:mt-0">
<span className="font-sans font-medium text-2xl text-ink">from $5,000</span>
<button className="text-coral font-sans font-medium border-b border-coral/30 hover:border-coral transition-colors">Apply for Coaching</button>
</div>
</div>
</div>

<div className="group md:p-12 hover:shadow-md transition-all border-ink/5 bg-white border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm">
<div className="absolute top-0 left-0 w-2 h-full bg-cyan"></div>
<div className="flex flex-col md:flex-row gap-8 justify-between items-start">
<div className="space-y-4 max-w-2xl">
<div className="flex items-center gap-3">
<h3 className="font-sans font-medium text-3xl text-ink">Foundation Workshop</h3>
</div>
<p className="font-serif text-xl text-ink/80 italic">"I need a clear starting point."</p>
<p className="font-serif text-lg text-ink/70 leading-relaxed">A single 2-hour deep dive. I explain how AI works in plain English and we look at tools you can start using today.</p>
</div>
<div className="flex flex-col items-start md:items-end gap-2 shrink-0 mt-4 md:mt-0">
<span className="font-sans font-medium text-2xl text-ink">$500 <span className="text-base font-normal text-ink/50">/ indiv.</span></span>
<span className="font-sans font-medium text-xl text-ink/60">$750+ <span className="text-base font-normal text-ink/50">/ teams</span></span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-ink text-canvas py-24 px-6 rounded-t-[3rem] md:rounded-t-[5rem] relative overflow-hidden" id="contact">
<div className="max-w-4xl mx-auto relative z-10 text-center space-y-12">
<div className="space-y-6">
<h2 className="font-sans font-medium text-4xl md:text-5xl tracking-tight">Stay updated.</h2>
<p className="font-serif text-xl md:text-2xl text-canvas/70 italic">Because things are moving fast.</p>
</div>
<form className="max-w-md mx-auto flex gap-2">
<input className="w-full border rounded-full px-6 py-4 text-canvas placeholder:text-canvas/40 focus:outline-none focus:ring-2 focus:ring-coral transition-all bg-white/10 border-white/20" placeholder="Your email address" type="email"/>
<button className="bg-coral px-8 py-4 rounded-full font-sans font-medium hover:text-coral transition-all text-white hover:bg-white" type="submit">
                    Join
                </button>
</form>
<div className="pt-16 border-t flex flex-col md:flex-row justify-between items-center gap-8 border-white/10">
<a className="font-serif italic text-2xl" href="#">ActuallyUseful</a>
<div className="flex gap-8 font-sans text-sm tracking-wide text-canvas/60">
<a className="transition-colors hover:text-white" href="#">About</a>
<a className="transition-colors hover:text-white" href="#">Library</a>
<a className="transition-colors hover:text-white" href="#">Twitter</a>
<a className="transition-colors hover:text-white" href="#">LinkedIn</a>
</div>
</div>
<p className="text-xs text-canvas/30 font-sans mt-12">
                © 2024 Actually Useful. Design by Human.
            </p>
</div>
</footer>


    </>
  );
}
