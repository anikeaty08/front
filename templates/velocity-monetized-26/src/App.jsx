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
      

<header className="sticky top-0 z-50 bg-zinc-50/80 backdrop-blur-md border-b border-zinc-200/80">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-lg font-medium tracking-tighter uppercase flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-zinc-900 rounded-md flex items-center justify-center">
<span className="text-white text-xs font-semibold tracking-tighter">V</span>
</div>
                    V E L O C I T Y
                </a>
<nav className="hidden md:flex gap-6">
<a className="text-sm font-normal text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Design</a>
<a className="text-sm font-normal text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Technology</a>
<a className="text-sm font-normal text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Business</a>
<a className="text-sm font-normal text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Startups</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="text-zinc-500 hover:text-zinc-900 transition-colors flex items-center justify-center w-8 h-8 rounded-full hover:bg-zinc-100">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="h-4 w-px bg-zinc-300 hidden sm:block"></div>
<a className="hidden sm:flex items-center gap-2 bg-white border border-zinc-200 text-zinc-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-50 transition-colors shadow-sm" href="#subscribe">
                    Subscribe
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>

<button className="md:hidden text-zinc-900 flex items-center justify-center w-8 h-8">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="flex-grow">

<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group cursor-pointer">
<div className="order-2 lg:order-1 flex flex-col items-start">
<div className="flex items-center gap-2 mb-6">
<span className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-800 border border-zinc-200 transition-colors group-hover:border-zinc-300 group-hover:bg-zinc-200/50">
                            Featured
                        </span>
<span className="text-sm font-normal text-zinc-500 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
                            5 min read
                        </span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-900 leading-[1.1] mb-6 group-hover:text-zinc-600 transition-colors duration-300">
                        The Future of Spatial Computing is Already Here.
                    </h1>
<p className="text-lg text-zinc-600 mb-8 max-w-lg font-normal leading-relaxed">
                        Explore how augmented reality and neural interfaces are merging to create seamless digital environments, reshaping how we interact with data and each other.
                    </p>
<div className="flex items-center gap-4">
<img alt="Author" className="w-10 h-10 rounded-full border border-zinc-200 object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=150&amp;h=150&amp;q=80"/>
<div>
<p className="text-sm font-medium text-zinc-900">Marcus Wright</p>
<p className="text-xs text-zinc-500">Oct 24, 2023</p>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative aspect-square lg:aspect-[4/3] rounded-[2rem] overflow-hidden bg-zinc-100 border border-zinc-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<img alt="Spatial Computing AR VR Headset" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/30 via-transparent to-transparent opacity-80"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 shadow-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
<iconify-icon className="text-2xl text-white" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="border-y border-zinc-200 bg-zinc-100/50">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-4">
<span className="text-xs font-medium uppercase tracking-widest text-zinc-400">Sponsored</span>
<div className="h-4 w-px bg-zinc-300"></div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-zinc-900 flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:server-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-900">CloudScale</span>
</div>
</div>
<p className="text-sm text-zinc-600 font-normal text-center sm:text-left">
                    Deploy your next big idea globally in seconds. <a className="text-zinc-900 font-medium underline underline-offset-4 hover:text-zinc-600 transition-colors" href="#">Start for free</a>.
                </p>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
<div className="flex items-center justify-between mb-10">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900">Latest Insights</h2>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 flex items-center gap-1 transition-colors" href="#">
                    View all <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<article className="group flex flex-col cursor-pointer">
<div className="relative w-full aspect-[16/10] bg-zinc-100 rounded-2xl overflow-hidden mb-5 border border-zinc-200/50">
<img alt="Code on Screen" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1607799279861-4ddf5b00b090?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-transparent transition-colors duration-500"></div>

<div className="absolute top-3 right-3 bg-zinc-900/90 backdrop-blur-md text-white text-[10px] font-medium px-2 py-1 rounded-md uppercase tracking-wider flex items-center gap-1 shadow-sm">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5"></iconify-icon> Pro
                        </div>
</div>
<div className="flex items-center gap-3 text-xs text-zinc-500 mb-3">
<span className="font-medium text-zinc-900">Technology</span>
<span>•</span>
<span>Oct 22</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2 group-hover:text-zinc-600 transition-colors leading-snug">
                        Architecting Scalable Microservices in 2024
                    </h3>
<p className="text-sm text-zinc-600 font-normal line-clamp-2 mb-4 flex-grow">
                        A deep dive into the patterns and anti-patterns of building robust distributed systems using modern orchestration tools.
                    </p>
<div className="flex items-center gap-2 mt-auto">
<img alt="Author" className="w-6 h-6 rounded-full bg-zinc-200 object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=100&amp;h=100&amp;q=80"/>
<span className="text-xs font-medium text-zinc-700">Sarah Chen</span>
</div>
</article>

<article className="group flex flex-col cursor-pointer">
<div className="relative w-full aspect-[16/10] bg-zinc-100 rounded-2xl overflow-hidden mb-5 border border-zinc-200/50">
<img alt="Minimalist Architecture" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-zinc-900/5 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="flex items-center gap-3 text-xs text-zinc-500 mb-3">
<span className="font-medium text-zinc-900">Design</span>
<span>•</span>
<span>Oct 20</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2 group-hover:text-zinc-600 transition-colors leading-snug">
                        Minimalism is Dead. Long Live Essentialism.
                    </h3>
<p className="text-sm text-zinc-600 font-normal line-clamp-2 mb-4 flex-grow">
                        Why the next trend in digital product design focuses on intent and utility over stark, empty interfaces.
                    </p>
<div className="flex items-center gap-2 mt-auto">
<img alt="Author" className="w-6 h-6 rounded-full bg-zinc-200 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=100&amp;h=100&amp;q=80"/>
<span className="text-xs font-medium text-zinc-700">Alex Rivera</span>
</div>
</article>

<article className="group flex flex-col cursor-pointer">
<div className="relative w-full aspect-[16/10] bg-zinc-100 rounded-2xl overflow-hidden mb-5 border border-zinc-200/50">
<img alt="Business Charts and Laptop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-zinc-900/5 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="flex items-center gap-3 text-xs text-zinc-500 mb-3">
<span className="font-medium text-zinc-900">Business</span>
<span>•</span>
<span>Oct 18</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2 group-hover:text-zinc-600 transition-colors leading-snug">
                        Bootstrapping to $1M ARR: A Framework
                    </h3>
<p className="text-sm text-zinc-600 font-normal line-clamp-2 mb-4 flex-grow">
                        Unconventional strategies for indie hackers looking to build sustainable, profitable businesses without venture capital.
                    </p>
<div className="flex items-center gap-2 mt-auto">
<img alt="Author" className="w-6 h-6 rounded-full bg-zinc-200 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=100&amp;h=100&amp;q=80"/>
<span className="text-xs font-medium text-zinc-700">Elena Rostova</span>
</div>
</article>
</div>
</section>

<section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-20" id="subscribe">
<div className="bg-white rounded-[2.5rem] p-8 md:p-16 border border-zinc-200/80 shadow-[0_2px_40px_rgb(0,0,0,0.04)] relative overflow-hidden flex flex-col items-center text-center">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-zinc-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="absolute -bottom-24 -left-24 w-64 h-64 bg-zinc-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

<div className="flex -space-x-3 overflow-hidden mb-6 relative z-10">
<img alt="Subscriber" className="inline-block h-10 w-10 rounded-full ring-4 ring-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=150&amp;h=150&amp;q=80"/>
<img alt="Subscriber" className="inline-block h-10 w-10 rounded-full ring-4 ring-white object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=150&amp;h=150&amp;q=80"/>
<img alt="Subscriber" className="inline-block h-10 w-10 rounded-full ring-4 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=150&amp;h=150&amp;q=80"/>
<img alt="Subscriber" className="inline-block h-10 w-10 rounded-full ring-4 ring-white object-cover" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=150&amp;h=150&amp;q=80"/>
<div className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-4 ring-white bg-zinc-100 border border-zinc-200">
<span className="text-xs font-medium text-zinc-600">+50k</span>
</div>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-4 relative z-10">
                    Get the unfair advantage.
                </h2>
<p className="text-base text-zinc-500 mb-8 max-w-lg font-normal relative z-10">
                    Join founders and engineers receiving our weekly teardowns on tech, design, and growth. No fluff, just signal.
                </p>
<form className="w-full max-w-md flex flex-col sm:flex-row gap-3 relative z-10">
<input className="flex-grow px-5 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all placeholder:text-zinc-400 font-normal" placeholder="tim@apple.com" required="" type="email"/>
<button className="bg-zinc-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-zinc-800 transition-colors shadow-sm whitespace-nowrap flex items-center justify-center gap-2" type="submit">
                        Subscribe
                    </button>
</form>
<p className="text-xs text-zinc-400 mt-4 relative z-10">Unsubscribe at any time. Read our <a className="underline hover:text-zinc-600" href="#">Privacy Policy</a>.</p>
</div>
</section>
</main>

<footer className="bg-white border-t border-zinc-200 mt-auto">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="text-lg font-medium tracking-tighter uppercase flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 bg-zinc-900 rounded-md flex items-center justify-center">
<span className="text-white text-xs font-semibold tracking-tighter">V</span>
</div>
                        V E L O C I T Y
                    </a>
<p className="text-sm text-zinc-500 font-normal max-w-xs">
                        Decoding the intersection of technology, design, and modern business.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-4 tracking-tight">Platform</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-normal" href="#">All Articles</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-normal flex items-center gap-2" href="#">Premium <span className="bg-zinc-100 text-zinc-600 text-[10px] px-1.5 py-0.5 rounded font-medium">New</span></a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-normal" href="#">Sponsorships</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-4 tracking-tight">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-normal" href="#">About</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-normal" href="#">Contact</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-normal" href="#">Twitter</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-400 font-normal">© 2024 Velocity Publishing. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:mask-happly-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
