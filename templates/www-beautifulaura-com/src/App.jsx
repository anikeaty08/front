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
      

<nav className="sticky top-0 z-50 backdrop-blur-md border-b bg-white/80 border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="flex-shrink-0 flex items-center">
<a className="text-xl font-normal tracking-tighter font-instrument-serif bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500" href="#">BEAUTIFUL AURA</a>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900" href="#">Shop</a>
<a className="transition-colors hover:text-gray-900 text-sm font-medium text-gray-500" href="#">Philosophy</a>
<a className="text-sm font-medium transition-colors relative text-gray-900" href="#community">
                        Community
                        <span className="absolute -bottom-6 left-0 w-full h-px bg-gray-900"></span>
</a>
<a className="transition-colors text-sm font-medium text-gray-500 hover:text-gray-900" href="#">Journal</a>
</div>

<div className="flex items-center space-x-5 text-gray-500">
<button className="transition-colors flex items-center hover:text-gray-900">
<iconify-icon className="text-lg" icon="solar:magnifer-linear"></iconify-icon>
</button>
<button className="transition-colors flex items-center hover:text-gray-900">
<iconify-icon className="text-lg" icon="solar:user-linear"></iconify-icon>
</button>
<button className="transition-colors flex items-center relative hover:text-gray-900">
<iconify-icon className="text-lg" icon="solar:bag-2-linear"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full text-[10px] bg-gray-900 text-white">2</span>
</button>
</div>
</div>
</div>
</nav>

<main className="">
<section className="relative pt-20 pb-32 overflow-hidden">
<div className="sm:px-6 lg:px-8 text-center max-w-7xl z-10 mr-auto ml-auto pr-4 pl-4 relative">
<div className="inline-flex bg-white border-gray-200 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 space-x-2 items-center">
<iconify-icon className="text-sm text-gray-400" icon="solar:stars-linear"></iconify-icon>
</div>
<h1 className="sm:text-5xl md:text-6xl text-4xl font-semibold text-pink-700 tracking-tight max-w-4xl mb-6">
                    Cultivate your beautiful aura.
                </h1>
<p className="leading-relaxed text-lg font-normal text-gray-500 max-w-2xl mr-auto mb-10 ml-auto">A space dedicated to your inner and outer radiance. The reason this company started was for you to create the aura you want for yourself. Explore our curated wellness essentials and connect with a community that supports your journey</p>
<div className="flex flex-col sm:flex-row sm:space-y-0 sm:space-x-4 space-y-4 items-center justify-center">
<a className="w-full sm:w-auto px-8 py-3 text-sm font-medium rounded-full transition-colors shadow-sm bg-gray-900 text-white hover:bg-gray-800 shadow-gray-900/10" href="#">
                        Explore Collection
                    </a>
<a className="w-full sm:w-auto px-8 py-3 border text-sm font-medium rounded-full transition-colors flex items-center justify-center space-x-2 bg-white text-gray-900 border-gray-200 hover:bg-gray-50" href="#community">
<span className="">Join the Lounge</span>
<iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-screen-xl pointer-events-none -z-10">
<div className="absolute top-[20%] left-[10%] w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-70 bg-rose-50"></div>
<div className="absolute top-[30%] right-[10%] w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-70 bg-stone-100"></div>
</div>
</section>

<section className="bg-white border-gray-100 border-t pt-24 pb-24" id="community">
<div className="sm:px-6 lg:px-8 cursor-pointer max-w-4xl mr-auto ml-auto pr-4 pl-4" onclick="window.location.href='/www.beautifulaura.com'" role="button">

<div className="mb-12">
<h2 className="bg-clip-text text-3xl font-semibold text-transparent tracking-tight bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 mb-3">The Aura Lounge</h2>
<p community.<="" p="">
</p></div>

<div className="bg-gradient-to-br to-indigo-500_4px_20px_-4px_rgba(225,29,72,0.05)] from-rose-50/50 via-white">
<div className="flex items-start space-x-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-0 flex items-center justify-center border-2 shadow-sm border-white">
<span className="text-xs font-medium text-white">You</span>
</div>
<div className="flex-1">
<textarea className="w-full bg-transparent border-0 focus:ring-0 resize-none p-0 placeholder-gray-400 text-base text-gray-900" placeholder="Ask for advice, share a routine, or start a discussion..." rows="2"></textarea>
<div className="mt-4 flex items-center justify-between pt-4 border-t border-rose-100/50">
<div className="flex space-x-2">
<button className="p-2 rounded-full transition-colors text-rose-400 hover:text-rose-600 hover:bg-rose-100/50">
<iconify-icon className="text-lg" icon="solar:gallery-linear"></iconify-icon>
</button>
<button className="p-2 rounded-full transition-colors text-indigo-400 hover:text-indigo-600 hover:bg-indigo-100/50">
<iconify-icon className="text-lg" icon="solar:hashtag-linear"></iconify-icon>
</button>
</div>
<button className="px-5 py-2 bg-gradient-to-r from-rose-500 to-indigo-500 text-sm font-medium rounded-full hover:opacity-90 transition-opacity shadow-md shadow-indigo-500/20 text-white">
                                    Post
                                </button>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
<div className="flex space-x-6">
<button className="text-sm font-medium pb-4 border-b-2 border-indigo-500 -mb-[17px] text-indigo-600">Recent</button>
<button className="hover:text-indigo-500 transition-colors text-sm font-medium text-gray-500 pb-4">Trending</button>
<button className="text-sm font-medium text-gray-500 hover:text-indigo-500 transition-colors pb-4">My Topics</button>
</div>

<div className="relative group cursor-pointer flex items-center space-x-1 text-sm text-gray-500 hover:text-indigo-500 transition-colors">
<span>Filter by Category</span>
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="space-y-6">


<article className="group hover:shadow-[0_8px_24px_-4px_rgba(79,70,229,0.08)] transition-all hover:border-indigo-200 bg-white border-gray-100 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br flex items-center justify-center text-xs font-semibold shadow-sm from-indigo-400 to-fuchsia-400 text-white">
                                    MS
                                </div>
<div className="">
<p className="text-sm font-medium text-gray-900">Maya S.</p>
<p className="text-xs text-gray-400">5 hours ago</p>
</div>
</div>
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border bg-indigo-50 text-indigo-600 border-indigo-100">
                                Mindfulness
                            </span>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2 group-hover:text-indigo-600 transition-colors text-gray-900">
                            Morning rituals that actually stick
                        </h3>
<p className="text-sm text-gray-500 line-clamp-2 mb-4">
                            I've been trying to incorporate a 10-minute meditation into my morning routine, but I keep hitting snooze instead. How do you all stay disciplined with your morning wellness practices? Let's share tips.
                        </p>
<div className="flex items-center space-x-6 text-gray-400">
<button className="flex items-center space-x-1.5 hover:text-indigo-500 transition-colors group/btn">
<iconify-icon className="text-base group-hover/btn:scale-110 transition-transform" icon="solar:chat-round-line-linear"></iconify-icon>
</button>
<button className="flex items-center space-x-1.5 hover:text-rose-500 transition-colors group/btn">
<iconify-icon className="text-base group-hover/btn:scale-110 transition-transform" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
</article>

</div>
<div className="mt-10 text-center">
<button className="inline-flex items-center justify-center px-6 py-2.5 border text-sm font-medium rounded-full hover:bg-gradient-to-r transition-all shadow-sm border-purple-200 text-purple-600 bg-white hover:from-rose-50 hover:to-indigo-50 hover:border-purple-300 shadow-purple-900/5">
                        Load More Discussions
                    </button>
</div>
</div>
</section>
</main>

<footer className="bg-[#fafafa] border-t py-16 border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 md:gap-8 gap-x-12 gap-y-12">

<div className="col-span-1 md:col-span-1">
<a className="inline-block text-xl font-semibold tracking-tighter mb-4 font-instrument-serif bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500" href="#">BEAUTIFUL AURA</a>
<p className="text-sm text-gray-500 pr-4">Nurturing your beauty and wellness from the inside out.</p>
</div>

<div className="">
<h4 className="text-sm font-semibold tracking-tight mb-4 text-gray-900">Shop</h4>
<ul className="space-y-3">
<li className=""></li>
<li className=""></li>
<li className=""></li>
<li className=""><a className="text-sm text-gray-500 transition-colors hover:text-gray-900" href="#">Sets</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold tracking-tight mb-4 text-gray-900">Brand</h4>
<ul className="space-y-3">
<li className=""><a className="text-sm text-gray-500 transition-colors hover:text-gray-900" href="#">Our Story</a></li>
<li className=""><a className="text-sm text-gray-500 transition-colors hover:text-gray-900" href="#community">Community</a></li>
<li className=""><a className="text-sm text-gray-500 transition-colors hover:text-gray-900" href="#">Journal</a></li>
<li className=""><a className="text-sm text-gray-500 transition-colors hover:text-gray-900" href="#">Contact</a></li>
</ul>
</div>

<div className="col-span-1 md:col-span-1">
<h4 className="text-sm font-semibold tracking-tight mb-4 text-gray-900">Stay Connected</h4>
<p className="text-xs text-gray-500 mb-4">Join our newsletter for mindful tips and early access to new releases.</p>
<form className="flex border rounded-full overflow-hidden focus-within:ring-1 focus-within:ring-gray-900 focus-within:border-gray-900 transition-all border-gray-200 bg-white">
<input className="w-full px-4 py-2 text-sm bg-transparent border-0 focus:ring-0 placeholder-gray-400 text-gray-900" placeholder="Email address" required="" type="email"/>
<button className="px-4 py-2 transition-colors text-gray-900 hover:bg-gray-50" type="submit">
<iconify-icon className="text-lg translate-y-[2px]" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 border-gray-200">
<p className="text-xs text-gray-400">© 2024 Beautiful Aura. All rights reserved.</p>
<div className="flex space-x-6">
<a className="transition-colors text-gray-400 hover:text-gray-900" href="#">
<span className="sr-only">Instagram</span>
<iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon>
</a>
<a className="transition-colors text-gray-400 hover:text-gray-900" href="#">
<span className="sr-only">Twitter</span>
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
