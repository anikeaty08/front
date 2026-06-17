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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[30%] h-[30%] bg-blue-900/10 rounded-full blur-[100px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-medium tracking-tight text-white flex items-center gap-2" href="#">
<span className="bg-white text-black w-6 h-6 flex items-center justify-center rounded text-xs font-semibold">
            W
          </span>
          WINIXO
        </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#home">
            Home page
          </a>
<a className="hover:text-white transition-colors" href="#about">
            About us
          </a>
<a className="hover:text-white transition-colors" href="#pricing">
            Price list
          </a>
<a className="hover:text-white transition-colors" href="#contact">
            Contact
          </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200 transition-colors" href="https://discord.gg/GrUDtdv5" target="_blank">
<span className="">Join Discord</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="md:pt-48 md:pb-32 border-white/5 border-b pt-32 pr-6 pb-20 pl-6 relative" id="home">
<div className="grid lg:grid-cols-2 gap-12 max-w-7xl mr-auto ml-auto gap-x-12 gap-y-12 items-center">
<div className="flex flex-col gap-6 z-10 gap-x-6 gap-y-6 items-start">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-indigo-300">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
            Professional Community
          </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1]">
            Join Us
            <br/>
<span className="text-gradient-primary">NOW</span>
</h1>
<p className="text-lg text-slate-400 max-w-lg leading-relaxed">
            We provide you with an environment full of opportunities to bring
            the projects you’ve always aspired to life — with specialists,
            supervisors, and assistants.
          </p>
<div className="flex flex-wrap gap-4 mt-2">
<a className="group flex items-center gap-2 hover:bg-slate-200 transition-all text-sm font-medium text-black bg-white rounded-full pt-3 pr-6 pb-3 pl-6" href="https://discord.gg/sxRxJVQuY" target="_blank">
              Join Our Server
              <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden glass-panel p-2">
<div className="w-full h-full rounded-xl overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
<img alt="Leaves composition" className="w-full h-full object-cover transform hover:scale-105 transition-duration-700 transition-transform" src="https://rg5wr1.webwave.dev/files/dynamicContent/sites/rg5wr1/images/en/webpage_1/mkfne5o4/element_27/rwdMode_1/542x461/wp8761715.jpg"/>
</div>

<div className="absolute -bottom-6 -left-6 bg-[#0B0C15] border border-white/10 p-4 rounded-xl shadow-2xl z-20 flex items-center gap-4 hidden md:flex">
<div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400">Active Members</p>
<p className="text-sm font-semibold text-white">1,200+</p>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 relative" id="about">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
              About Us
            </h2>
<p className="text-slate-400 text-lg leading-relaxed">
              WINIXO is a professional community dedicated to entrepreneurship,
              startups, and ambitious projects. We bring together founders,
              freelancers, creatives, and learners in one space to build ideas,
              share knowledge, and grow together.
            </p>
</div>
<div className="text-right hidden md:block">
<p className="text-2xl font-medium text-white tracking-tight">
              Think. Build. Win.
            </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden group">
<div className="relative z-10">
<h3 className="text-2xl font-medium text-white mb-4 flex items-center gap-2 tracking-tight">
<iconify-icon className="text-indigo-400" icon="solar:target-linear"></iconify-icon>
                Our Mission
              </h3>
<p className="text-slate-400 max-w-lg leading-relaxed mb-6">
                We turn the project in your mind into reality by offering you a
                share of the profits based on the plan you choose, along with a
                collaborative work environment and a team dedicated to
                supporting you.
              </p>
<ul className="space-y-2 text-sm text-slate-300">
<li className="flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                  Every idea deserves a chance
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                  Collaboration creates opportunities
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                  Knowledge is the strongest investment
                </li>
</ul>
</div>
<div className="absolute right-0 bottom-0 w-1/2 h-full mask-gradient-b opacity-20 group-hover:opacity-30 transition-opacity">
<img alt="Team" className="w-full h-full object-cover grayscale" src="https://rg5wr1.webwave.dev/files/dynamicContent/sites/rg5wr1/images/en/webpage_1/mkfne5o4/element_74/rwdMode_1/301x374/group-of-people-using-laptop-computer.jpg"/>
</div>
</div>

<div className="glass-panel rounded-2xl p-2 h-full min-h-[300px] relative group">
<img alt="Concept" className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500" src="https://rg5wr1.webwave.dev/files/dynamicContent/sites/rg5wr1/images/en/webpage_1/mkfne5o4/element_73/rwdMode_1/368x267/a-scrabble-type-block-spelling-the-word-miss-sits-next-to-a-bouquet.jpg"/>
<div className="absolute bottom-6 left-6 z-10">
<span className="text-xs font-mono uppercase tracking-widest text-indigo-300">
                Philosophy
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-white/[0.01]" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
            Pricing Plans
          </h2>
<p className="text-slate-400">
            Flexible solutions tailored for project owners.
          </p>
<div className="mt-6">
<a className="inline-flex items-center gap-2 text-xs font-medium text-indigo-400 hover:text-indigo-300 border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 rounded-full transition-colors" href="https://discord.gg/GrUDtdv5" target="_blank">
<iconify-icon icon="solar:chat-round-line-linear"></iconify-icon>
              Request a plan on Discord
            </a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel rounded-2xl p-6 flex flex-col hover:-translate-y-1 transition-transform duration-300">
<div className="mb-6 h-48 rounded-xl overflow-hidden relative">
<img alt="Free Plan" className="w-full h-full object-cover opacity-80" src="https://rg5wr1.webwave.dev/files/dynamicContent/sites/rg5wr1/images/en/webpage_1/mkfne5o4/element_239/rwdMode_1/296x202/Free.jpg"/>
<div className="absolute inset-0 bg-black/40"></div>
<div className="absolute bottom-4 left-4">
<h3 className="text-lg font-medium text-white">Free Plan</h3>
<p className="text-2xl font-semibold tracking-tight mt-1">Free</p>
</div>
</div>
<p className="text-sm text-slate-400 mb-6">
              Ideal for individuals or small teams starting out.
            </p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-slate-500" icon="solar:check-circle-linear"></iconify-icon>
                25% of the profits
              </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-slate-500" icon="solar:check-circle-linear"></iconify-icon>
                3 project assistants
              </li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 hover:bg-white/5 text-sm font-medium transition-colors">
              Get Started
            </button>
</div>

<div className="glass-panel rounded-2xl p-6 flex flex-col relative border-indigo-500/30 hover:-translate-y-1 transition-transform duration-300 bg-indigo-900/5">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full tracking-wider shadow-lg shadow-indigo-500/20">
              Popular
            </div>
<div className="mb-6 h-48 rounded-xl overflow-hidden relative">
<img alt="Plus Plan" className="w-full h-full object-cover opacity-80" src="https://rg5wr1.webwave.dev/files/dynamicContent/sites/rg5wr1/images/en/webpage_1/mkfne5o4/element_241/rwdMode_1/296x202/plus.jpg"/>
<div className="absolute inset-0 bg-black/40"></div>
<div className="absolute bottom-4 left-4">
<h3 className="text-lg font-medium text-white">Plus Plan</h3>
<p className="text-2xl font-semibold tracking-tight mt-1">
                  29.99JD
                  <span className="text-sm text-slate-300 font-normal">/mo</span>
</p>
</div>
</div>
<p className="text-sm text-slate-400 mb-6">
              Balanced features for growing projects and collaboration.
            </p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                35% of the profits
              </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                5 project assistants
              </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                Online meetings
              </li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors shadow-lg shadow-indigo-500/20">
              Subscribe
            </button>
</div>

<div className="glass-panel rounded-2xl p-6 flex flex-col hover:-translate-y-1 transition-transform duration-300">
<div className="mb-6 h-48 rounded-xl overflow-hidden relative">
<img alt="Premium Plan" className="w-full h-full object-cover opacity-80" src="https://rg5wr1.webwave.dev/files/dynamicContent/sites/rg5wr1/images/en/webpage_1/mkfne5o4/element_245/rwdMode_1/296x202/pre.jpg"/>
<div className="absolute inset-0 bg-black/40"></div>
<div className="absolute bottom-4 left-4">
<h3 className="text-lg font-medium text-white">Premium Plan</h3>
<p className="text-2xl font-semibold tracking-tight mt-1 text-red-400">
                  49.99JD
                  <span className="text-sm text-slate-300 font-normal">/mo</span>
</p>
</div>
</div>
<p className="text-sm text-slate-400 mb-6">
              Advanced tools and full support for scaling with confidence.
            </p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-red-400" icon="solar:check-circle-linear"></iconify-icon>
                50% of the profits
              </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-red-400" icon="solar:check-circle-linear"></iconify-icon>
                8 project assistants
              </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-red-400" icon="solar:check-circle-linear"></iconify-icon>
                Online &amp; Offline meetings
              </li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 hover:bg-white/5 text-sm font-medium transition-colors">
              Go Premium
            </button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">
<div className="z-0 bg-gradient-to-b from-transparent to-indigo-900/10 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row items-center gap-12">
<div className="flex-1">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
              Social Media Hub
            </h2>
<p className="text-slate-400 text-lg leading-relaxed mb-8">
              Integrating social media buttons and feeds to connect with your
              audience and expand online presence. Stay updated with our latest
              news.
            </p>
<div className="flex gap-4">
<a className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-white hover:text-pink-500 hover:border-pink-500/30 transition-all" href="https://www.instagram.com/winixo_inc" target="_blank">
<iconify-icon icon="mdi:instagram" width="24"></iconify-icon>
</a>
<a className="glass-panel flex items-center justify-center hover:text-indigo-400 hover:border-indigo-400/30 transition-all text-white w-12 h-12 rounded-xl" href="https://discord.gg/sxRxJVQuY" target="_blank">
<iconify-icon className="" height="24" icon="ic:baseline-discord" style={{color: 'rgb(129, 140, 248)'}} width="24"></iconify-icon>
</a>
<a className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-white hover:text-cyan-400 hover:border-cyan-400/30 transition-all" href="https://www.tiktok.com/@winixo_inc" target="_blank">
<iconify-icon className="" icon="ic:baseline-tiktok" width="24"></iconify-icon>
</a>
<a className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-white hover:text-slate-300 hover:border-slate-300/30 transition-all" href="https://x.com/winixo_inc" target="_blank">
<iconify-icon icon="ri:twitter-x-fill" width="20"></iconify-icon>
</a>
</div>
<div className="mt-8">
<p className="text-sm text-slate-500 mb-1">Contact Email</p>
<a className="text-white hover:text-indigo-400 transition-colors font-medium" href="mailto:winixo.inc@gmail.com">
                winixo.inc@gmail.com
              </a>
</div>
</div>
<div className="flex-1 w-full">
<div className="relative w-full aspect-video glass-panel p-2 rounded-2xl">
<img alt="Social Media" className="w-full h-full object-cover rounded-xl opacity-80" src="https://rg5wr1.webwave.dev/files/dynamicContent/sites/rg5wr1/images/en/webpage_1/mkfne5o4/element_275/rwdMode_1/529x404/a-group-of-different-social-media-logos.jpg"/>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-black" id="contact">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm text-slate-500">
          © 2024 WINIXO. All rights reserved.
        </div>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
<div className="text-xs text-slate-600">Made with WebWave</div>
</div>
</footer>
<elevenlabs-convai agent-id="agent_6701kh4a6ndae3j907dawyrb9kpw"></elevenlabs-convai>


    </>
  );
}
