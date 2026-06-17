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
      

<nav className="fixed z-50 transition-all duration-300 md:px-12 flex w-full pt-6 pr-6 pb-6 pl-6 top-0 left-0 backdrop-blur-md items-center justify-between bg-white/50 border-b border-white/40">
<a className="md:text-2xl text-ink hover:opacity-80 transition-opacity text-xl font-semibold tracking-tight font-sans" href="#">
            howtomakemoney<span className="text-coral">.com</span>
</a>
<div className="hidden md:flex gap-8 text-sm font-medium tracking-wide items-center">
<a className="text-ink/80 hover:text-coral transition-colors" href="#how-it-works">How It Works</a>
<a className="text-ink/80 hover:text-coral transition-colors" href="#guides">Guides</a>
<a className="text-ink/80 hover:text-coral transition-colors" href="#categories">Categories</a>
<a className="px-5 py-2.5 rounded-full border border-ink/10 hover:border-coral/30 hover:text-coral transition-all bg-white/80 hover:bg-white shadow-sm" href="#quiz">Take Assessment</a>
</div>

<button className="md:hidden text-ink">
<iconify-icon height="32" icon="solar:hamburger-menu-linear" width="32"></iconify-icon>
</button>
</nav>

<header className="min-h-[90vh] flex flex-col overflow-hidden text-center pt-20 pr-6 pl-6 relative items-center justify-center" id="home">

<div className="z-0 bg-center w-full h-full bg-cover absolute top-0 right-0 bottom-0 left-0 opacity-40" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e4b08548-af2a-40d7-969a-6e88e5c60d59_3840w.png\')'}}></div>
<div className="z-10 max-w-4xl mr-auto ml-auto relative space-y-8 mt-12">
<h1 className="flex flex-col gap-2">
<span className="md:text-7xl lg:text-8xl text-ink leading-tight text-5xl italic tracking-tight font-serif">Realistic income.</span>
<span className="md:text-7xl lg:text-8xl text-ink leading-tight text-5xl font-medium tracking-tight">Tailored to you.</span>
</h1>
<p className="md:text-2xl text-ink/80 leading-relaxed text-xl font-serif max-w-2xl mr-auto ml-auto">Discover the best ways to make money based on your time, skills, budget, and goals. No hype, no empty promises.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
<a className="bg-coral font-sans font-medium text-lg px-8 py-4 rounded-full shadow-lg shadow-coral/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-white flex items-center justify-center gap-2" href="#quiz">
                    Find My Best Options
                    <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="text-ink transition-all duration-300 hover:bg-white/90 text-lg font-medium bg-white/60 border-white/80 border rounded-full pt-4 pr-8 pb-4 pl-8 backdrop-blur-md shadow-sm" href="#guides">
                    Browse Guides
                </a>
</div>
</div>
<div className="absolute bottom-10 left-0 w-full flex justify-center animate-bounce duration-[3000ms] z-10">
<iconify-icon className="text-ink/30" height="32" icon="solar:arrow-down-linear" width="32"></iconify-icon>
</div>
</header>

<section className="md:py-32 pt-24 pr-6 pb-24 pl-6" id="how-it-works">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24">

<div className="space-y-6">
<div className="flex items-center gap-3 mb-2">
<span className="p-2 bg-vanilla rounded-xl text-coral flex items-center justify-center">
<iconify-icon height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</span>
<h2 className="font-sans font-medium text-3xl tracking-tight text-ink">The Problem</h2>
</div>
<h3 className="font-sans font-medium text-2xl leading-snug text-ink">
                    Generic advice rarely works because it ignores your reality.
                </h3>
<div className="leading-relaxed text-ink/90 text-xl font-serif space-y-4">
<p>Most "make money" content assumes you have 40 spare hours a week, a $5,000 budget, and a high tolerance for risk.</p>
<p>If you're working a full-time job, living in a small town, or starting from zero, the standard playbook will only leave you frustrated, overwhelmed, and stuck at square one.</p>
</div>
</div>

<div className="space-y-6">
<div className="flex items-center gap-3 mb-2">
<span className="p-2 bg-vanilla rounded-xl text-coral flex items-center justify-center">
<iconify-icon height="24" icon="solar:target-linear" width="24"></iconify-icon>
</span>
<h2 className="font-sans font-medium text-3xl tracking-tight text-ink">The Solution</h2>
</div>
<h3 className="font-sans font-medium text-2xl leading-snug text-ink">
                    We match you with paths that fit your actual life.
                </h3>
<div className="font-serif text-xl leading-relaxed text-ink/90 space-y-4">
<p>We've analyzed over 150 online and offline income methods, scoring them transparently on capital requirements, required skills, and time commitments.</p>
<p>Our tailored assessment filters out the noise and recommends a shortlist of realistic ways for you to earn more, backed by in-depth, step-by-step guides.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-vanilla relative overflow-hidden rounded-t-[3rem] md:rounded-t-[4rem]">

<div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b to-transparent blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 from-white/40"></div>
<div className="max-w-6xl mx-auto relative z-10">
<h2 className="font-sans font-medium text-4xl md:text-5xl text-ink tracking-tight mb-16 text-center">
                We find the right fit based on...
            </h2>
<div className="grid md:grid-cols-2 gap-8 md:gap-12">

<div className="bg-canvas p-8 md:p-10 rounded-3xl shadow-sm border border-white/80">
<iconify-icon className="text-ink mb-6" height="40" icon="solar:clock-circle-linear" width="40"></iconify-icon>
<h3 className="font-sans font-medium text-2xl mb-4 text-ink">Time Available</h3>
<p className="font-serif text-xl text-ink/80 leading-relaxed">
                        Whether you have 2 hours a week on weekends or 40 hours a week to build a full-time business, we filter for methods that realistically fit your schedule.
                    </p>
</div>

<div className="bg-canvas p-8 md:p-10 rounded-3xl shadow-sm border border-white/80">
<iconify-icon className="text-ink mb-6" height="40" icon="solar:wallet-money-linear" width="40"></iconify-icon>
<h3 className="font-sans font-medium text-2xl mb-4 text-ink">Starting Capital</h3>
<p className="font-serif text-xl text-ink/80 leading-relaxed">
                        Not everyone has savings to risk. We separate paths ranging from zero-dollar, low-risk side hustles to more capital-intensive local businesses.
                    </p>
</div>

<div className="bg-canvas p-8 md:p-10 rounded-3xl shadow-sm border border-white/80">
<iconify-icon className="text-ink mb-6" height="40" icon="solar:star-linear" width="40"></iconify-icon>
<h3 className="font-sans font-medium text-2xl mb-4 text-ink">Existing Skills</h3>
<p className="font-serif text-xl text-ink/80 leading-relaxed">
                        We help you leverage the professional or practical skills you already have, or point you toward beginner-friendly methods that are easy to learn.
                    </p>
</div>

<div className="bg-canvas p-8 md:p-10 rounded-3xl shadow-sm border border-white/80">
<iconify-icon className="text-ink mb-6" height="40" icon="solar:map-point-linear" width="40"></iconify-icon>
<h3 className="font-sans font-medium text-2xl mb-4 text-ink">Location &amp; Logistics</h3>
<p className="font-serif text-xl text-ink/80 leading-relaxed">
                        Online remote work isn't for everyone. We strongly feature local service businesses, skilled trades, and offline opportunities depending on where you live.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-canvas" id="quiz">
<div className="max-w-4xl mx-auto text-center space-y-12">
<span className="font-sans font-medium text-coral tracking-widest text-sm uppercase">The Process</span>
<h2 className="font-sans font-medium text-4xl md:text-6xl text-ink tracking-tight">
                A personalized roadmap.
            </h2>
<p className="font-serif text-2xl md:text-3xl text-ink leading-relaxed italic">
                "The fastest way to fail is to follow a blueprint built for someone else's life."
            </p>
<div className="text-left p-8 md:p-12 rounded-[2rem] border border-ink/5 mt-12 backdrop-blur-sm bg-white/80 shadow-sm">
<h3 className="font-sans font-medium text-2xl mb-6 text-ink">How to get started:</h3>
<ul className="space-y-6 font-serif text-xl text-ink/80">
<li className="flex gap-4 items-start">
<div className="mt-1.5 w-2 h-2 rounded-full bg-coral shrink-0"></div>
<p>Answer a few quick questions about your <span className="font-sans font-medium text-ink">time, budget, and goals</span>.</p>
</li>
<li className="flex gap-4 items-start">
<div className="mt-1.5 w-2 h-2 rounded-full bg-coral shrink-0"></div>
<p>We run your answers against our database of <span className="font-sans font-medium text-ink">legitimate, researched</span> income streams.</p>
</li>
<li className="flex gap-4 items-start">
<div className="mt-1.5 w-2 h-2 rounded-full bg-coral shrink-0"></div>
<p>You receive a personalized shortlist with <span className="font-sans font-medium text-ink">comprehensive, fluff-free guides</span> to take action immediately.</p>
</li>
</ul>
<div className="mt-10 pt-8 border-t border-ink/10">
<button className="bg-coral w-full sm:w-auto font-sans font-medium text-lg px-8 py-4 rounded-full shadow-lg shadow-coral/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-white">
                        Start the Assessment
                    </button>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-b from-cyan/20 to-canvas pt-24 pr-6 pb-24 pl-6 relative" id="guides">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-sans font-medium text-4xl text-ink tracking-tight mb-4">Featured Guides &amp; Insights</h2>
<p className="font-serif text-xl text-ink/70">Deep dives into realistic income methods, written by practitioners.</p>
</div>
<div className="grid md:grid-cols-2 gap-x-8 gap-y-8">

<a className="backdrop-blur-lg p-10 rounded-3xl shadow-sm border flex flex-col justify-between bg-white/80 border-white/80 hover:-translate-y-1 transition-transform group" href="#">
<div className="mb-8">
<div className="w-14 h-14 rounded-2xl bg-cyan/20 flex items-center justify-center mb-6 text-ink group-hover:bg-cyan/40 transition-colors">
<iconify-icon height="28" icon="solar:home-angle-linear" width="28"></iconify-icon>
</div>
<h3 className="font-sans font-medium text-2xl text-ink mb-3 leading-snug">Best Ways to Make Money in a Small Town</h3>
<p className="font-serif text-lg leading-relaxed text-ink/80">
                            Why local service businesses, skilled trades, and offline rentals often beat online side hustles when you live outside major metros.
                        </p>
</div>
<div className="flex items-center gap-2 text-coral font-sans font-medium text-sm tracking-wide uppercase">
                        Read Guide <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</a>

<a className="backdrop-blur-lg p-10 rounded-3xl shadow-sm border flex flex-col justify-between bg-white/80 border-white/80 hover:-translate-y-1 transition-transform group" href="#">
<div className="mb-8">
<div className="w-14 h-14 rounded-2xl bg-cyan/20 flex items-center justify-center mb-6 text-ink group-hover:bg-cyan/40 transition-colors">
<iconify-icon height="28" icon="solar:laptop-minimalistic-linear" width="28"></iconify-icon>
</div>
<h3 className="font-sans font-medium text-2xl text-ink mb-3 leading-snug">Low-Cost Ways to Start Earning With 10 Hours a Week</h3>
<p className="font-serif text-lg leading-relaxed text-ink/80">
                            A breakdown of the most reliable freelance services, reselling methods, and remote support roles that require almost zero startup capital.
                        </p>
</div>
<div className="flex items-center gap-2 text-coral font-sans font-medium text-sm tracking-wide uppercase">
                        Read Guide <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</a>

<a className="backdrop-blur-lg p-10 rounded-3xl shadow-sm border flex flex-col justify-between bg-white/80 border-white/80 hover:-translate-y-1 transition-transform group" href="#">
<div className="mb-8">
<div className="w-14 h-14 rounded-2xl bg-cyan/20 flex items-center justify-center mb-6 text-ink group-hover:bg-cyan/40 transition-colors">
<iconify-icon height="28" icon="solar:scale-linear" width="28"></iconify-icon>
</div>
<h3 className="font-sans font-medium text-2xl text-ink mb-3 leading-snug">Online vs Offline Income: What Fits You Best?</h3>
<p className="font-serif text-lg leading-relaxed text-ink/80">
                            Stop forcing an online business if your strengths are physical. We compare the real-world pros, cons, and effort required for both paths.
                        </p>
</div>
<div className="flex items-center gap-2 text-coral font-sans font-medium text-sm tracking-wide uppercase">
                        Read Guide <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</a>

<a className="backdrop-blur-lg p-10 rounded-3xl shadow-sm border flex flex-col justify-between bg-white/80 border-white/80 hover:-translate-y-1 transition-transform group" href="#">
<div className="mb-8">
<div className="w-14 h-14 rounded-2xl bg-cyan/20 flex items-center justify-center mb-6 text-ink group-hover:bg-cyan/40 transition-colors">
<iconify-icon height="28" icon="solar:checklist-minimalistic-linear" width="28"></iconify-icon>
</div>
<h3 className="font-sans font-medium text-2xl text-ink mb-3 leading-snug">How to Choose a Side Hustle You'll Actually Stick With</h3>
<p className="font-serif text-lg leading-relaxed text-ink/80">
                            The psychology of consistency. Learn how to map your existing habits and natural interests to a profitable activity so it doesn't feel like a chore.
                        </p>
</div>
<div className="flex items-center gap-2 text-coral font-sans font-medium text-sm tracking-wide uppercase">
                        Read Guide <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</a>
</div>
</div>
</section>

<section className="md:py-32 pt-24 pr-6 pb-24 pl-6" id="categories">
<div className="max-w-5xl mx-auto space-y-16">
<h2 className="font-sans font-medium text-4xl md:text-5xl text-ink tracking-tight text-center">
                Explore Core Categories
            </h2>
<div className="space-y-8">

<div className="group relative rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-md transition-all border border-ink/5 bg-white">
<div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">
<div className="space-y-4 max-w-2xl">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-2xl bg-coral/10 text-coral flex items-center justify-center shrink-0">
<iconify-icon height="32" icon="solar:laptop-minimalistic-linear" width="32"></iconify-icon>
</div>
<h3 className="font-sans font-medium text-3xl text-ink">Digital &amp; Remote Methods</h3>
</div>
<p className="font-serif text-xl text-ink/80 italic">"I want location independence and flexible hours."</p>
<p className="font-serif text-lg text-ink/70 leading-relaxed">Discover reliable online paths including high-value freelancing, virtual assistance, specialized content creation, tutoring, and digital product creation.</p>
<div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-ink/60 font-sans text-sm font-medium">
<span className="flex items-center gap-1.5"><iconify-icon className="text-coral" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon> Freelance Services</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-coral" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon> Remote Support</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-coral" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon> E-commerce</span>
</div>
</div>
<div className="flex flex-col items-start md:items-end gap-2 shrink-0 mt-4 md:mt-0">
<button className="text-ink font-sans font-medium px-6 py-3 border border-ink/10 rounded-full hover:border-coral hover:text-coral transition-colors">Browse Online</button>
</div>
</div>
</div>

<div className="group md:p-12 hover:shadow-md transition-all border-ink/5 bg-white border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm">
<div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">
<div className="space-y-4 max-w-2xl">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-2xl bg-cyan/20 text-ink flex items-center justify-center shrink-0">
<iconify-icon height="32" icon="solar:shop-linear" width="32"></iconify-icon>
</div>
<h3 className="font-sans font-medium text-3xl text-ink">Offline &amp; Local Methods</h3>
</div>
<p className="font-serif text-xl text-ink/80 italic">"I want to work with my hands or serve my community."</p>
<p className="font-serif text-lg text-ink/70 leading-relaxed">Explore grounded, real-world businesses with lower local competition, such as specialized cleaning, property maintenance, reselling, rentals, and skilled trades.</p>
<div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-ink/60 font-sans text-sm font-medium">
<span className="flex items-center gap-1.5"><iconify-icon className="text-cyan" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon> Service Businesses</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-cyan" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon> Local Rentals</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-cyan" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon> Flipping &amp; Trades</span>
</div>
</div>
<div className="flex flex-col items-start md:items-end gap-2 shrink-0 mt-4 md:mt-0">
<button className="text-ink font-sans font-medium px-6 py-3 border border-ink/10 rounded-full hover:border-cyan hover:text-ink transition-colors">Browse Offline</button>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-ink text-canvas py-24 px-6 rounded-t-[3rem] md:rounded-t-[5rem] relative overflow-hidden" id="newsletter">
<div className="max-w-4xl mx-auto relative z-10 text-center space-y-12">
<div className="space-y-6">
<h2 className="font-sans font-medium text-4xl md:text-5xl tracking-tight">Get your custom action plan.</h2>
<p className="font-serif text-xl md:text-2xl text-canvas/70 italic">Join the newsletter for realistic tactics, case studies, and a tailored roadmap.</p>
</div>
<form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
<input className="w-full border rounded-full px-6 py-4 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-coral transition-all bg-white border-transparent" placeholder="Your best email address" required="" type="email"/>
<button className="bg-coral px-8 py-4 rounded-full font-sans font-medium hover:text-coral transition-all text-white hover:bg-white whitespace-nowrap" type="submit">
                    Send My Plan
                </button>
</form>
<div className="pt-16 border-t flex flex-col md:flex-row justify-between items-center gap-8 border-white/10">
<a className="font-serif italic text-2xl font-medium tracking-tight" href="#">howtomakemoney.com</a>
<div className="flex flex-wrap justify-center gap-8 font-sans text-sm tracking-wide text-canvas/60">
<a className="transition-colors hover:text-white" href="#">About Us</a>
<a className="transition-colors hover:text-white" href="#guides">Guides</a>
<a className="transition-colors hover:text-white" href="#how-it-works">Methodology</a>
<a className="transition-colors hover:text-white" href="#">Privacy Policy</a>
<a className="transition-colors hover:text-white" href="#">Terms</a>
</div>
</div>
<p className="text-xs text-canvas/40 font-sans mt-12">
                © 2024 howtomakemoney.com. Honest guidance. Not financial advice.
            </p>
</div>
</footer>

    </>
  );
}
