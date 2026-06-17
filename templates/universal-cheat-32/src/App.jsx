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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-medium tracking-tight flex items-center gap-2" href="#">
<i className="w-6 h-6 text-zinc-900" data-lucide="book-open" strokeWidth="1.5"></i>
                UCC
            </a>
<div className="hidden md:flex items-center gap-10">
<a className="text-base text-zinc-900 font-medium" href="#">Home</a>
<a className="text-base text-zinc-500 hover:text-zinc-900 transition-colors" href="#about">About</a>
<a className="text-base text-zinc-500 hover:text-zinc-900 transition-colors" href="#buy">Buy</a>
<a className="text-base text-zinc-500 hover:text-zinc-900 transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-6">
<button className="text-zinc-500 hover:text-zinc-900 transition-colors"><i className="w-6 h-6" data-lucide="search" strokeWidth="1.5"></i></button>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors"><i className="w-6 h-6" data-lucide="user" strokeWidth="1.5"></i></button>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors relative">
<i className="w-6 h-6" data-lucide="shopping-bag" strokeWidth="1.5"></i>
<span className="absolute -top-1 -right-1 w-4 h-4 bg-zinc-900 text-white text-xs flex items-center justify-center rounded-full">0</span>
</button>
</div>
</div>
</nav>

<section className="relative bg-zinc-950 text-white overflow-hidden py-24 lg:py-40">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center relative z-10">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-base text-zinc-300 font-medium mb-8">
<span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                    Announcing Release Date
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-400">
                    In Bookstores Nationwide Beginning August 8, 2026
                </h1>
<p className="text-xl md:text-2xl text-zinc-400 mb-12 font-medium leading-relaxed max-w-2xl">
                    Early-release copies available now through this site.
                </p>
<a className="inline-flex items-center justify-center h-14 px-8 bg-white text-zinc-950 rounded-lg font-medium text-lg hover:bg-zinc-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.1)]" href="#buy">
                    Buy Now
                </a>
</div>
<div className="lg:col-span-5 relative">

<div className="aspect-[4/5] bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-2xl shadow-2xl shadow-black/50 border border-white/10 flex items-center justify-center relative overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent opacity-50"></div>
<div className="text-center p-8 z-10">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-2">The Universal<br/>Cheat Code</h2>
<div className="w-16 h-24 mx-auto mt-8 border-2 border-white/20 rounded-t-full flex items-end justify-center pb-2 relative overflow-hidden">
<div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-orange-500/50 to-transparent blur-md"></div>
<i className="w-6 h-6 text-white/50 z-10" data-lucide="key" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-40 bg-white" id="about">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-12 text-zinc-900">About “The Universal Cheat Code”</h2>
<div className="space-y-8 text-lg lg:text-xl text-zinc-600 leading-relaxed font-medium">
<p>This book is for dream chasers with ambitious goals.</p>
<p>People stepping into new chapters of life.</p>
<p>Young people striving to uncover their unique talents.</p>
<p>For underdogs determined to shine.</p>
<p className="text-zinc-900">In these pages, you’ll discover 17 simple yet powerful tools hiding in plain sight that make life exponentially easier, success more attainable, and happiness more abundant.</p>
<p>The author uncovered these strategies during the hardest chapters of his life. Growing up in a chaotic group home, hope felt completely out of reach, and failure seemed inevitable. But he refused to give in and kept searching for a way forward until he discovered a formula that changed everything—real-world principles that genuinely feel like unlocking a cheat code for getting ahead in life.</p>
<p>These strategies don’t require privilege, connections, or resources—just the decision to use them. Once you start applying them, you’ll notice the shift: confidence where there was once doubt, joy where there was once dread, opportunity where there were once obstacles, and strength where there was once stagnation. And when you feel that shift, you won’t want to stop. It’s electrifying, and the deeper you lean in, the more rewarding it becomes. The real game-changer is momentum—and each chapter of this book is designed to show you how to create it.</p>
</div>
</div>
</section>

<section className="py-24 lg:py-40 bg-zinc-50 border-t border-zinc-200" id="buy">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

<div className="order-2 lg:order-1 flex flex-col justify-center h-full">
<div className="mb-10">
<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-900 mb-4">Universal Cheat Code</h1>
<p className="text-2xl text-zinc-500 font-medium mb-8">$19.95 — $29.95</p>
<p className="text-lg text-zinc-600 leading-relaxed mb-6 font-medium">
                        This book is for dream chasers with ambitious goals, people stepping into new chapters, young individuals discovering their talents, and underdogs ready to rise.
                    </p>
<p className="text-lg text-zinc-600 leading-relaxed mb-6 font-medium">
                        Inside, you will find 17 simple yet powerful tools that make life easier, success more attainable, and happiness more within reach. These principles were shaped during the author’s most difficult moments, growing up in a chaotic group home where hope felt distant and failure seemed inevitable. He kept searching until he found a set of real world strategies that changed everything and feel like a true cheat code for getting ahead.
                    </p>
<p className="text-lg text-zinc-600 leading-relaxed font-medium">
                        These tools do not rely on privilege or resources, only the decision to use them. As you apply them, you begin to notice the shift. Confidence replaces doubt, joy replaces dread, opportunity replaces obstacles, and strength replaces stagnation. Each chapter is built to help you create momentum and keep it going.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm mb-10">
<h2 className="text-xl font-semibold tracking-tight text-zinc-900 mb-6">Get your copy today.</h2>
<div className="space-y-4 mb-8">

<label className="relative flex items-center justify-between p-5 border border-zinc-200 rounded-xl cursor-pointer hover:border-zinc-400 transition-colors bg-zinc-50/50 has-[:checked]:border-zinc-900 has-[:checked]:bg-white">
<div className="flex items-center gap-4">
<div className="relative flex items-center justify-center w-5 h-5">
<input checked="" className="peer appearance-none w-5 h-5 border border-zinc-300 rounded-full checked:border-zinc-900 checked:bg-zinc-900 transition-all cursor-pointer" name="format" type="radio" value="paperback"/>
<div className="absolute w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100 pointer-events-none"></div>
</div>
<span className="text-lg font-medium text-zinc-900">Paperback</span>
</div>
<span className="text-lg text-zinc-500 font-medium">$19.95</span>
</label>

<label className="relative flex items-center justify-between p-5 border border-zinc-100 rounded-xl cursor-not-allowed bg-zinc-50 opacity-60">
<div className="flex items-center gap-4">
<div className="relative flex items-center justify-center w-5 h-5">
<input className="appearance-none w-5 h-5 border border-zinc-200 rounded-full cursor-not-allowed" disabled="" name="format" type="radio" value="hardcover"/>
</div>
<span className="text-lg font-medium text-zinc-900 flex items-center gap-3">
                                    Hardcover 
                                    <span className="text-xs bg-zinc-200 text-zinc-600 px-2 py-1 rounded-md tracking-tight">Sold Out</span>
</span>
</div>
<span className="text-lg text-zinc-500 font-medium">$29.95</span>
</label>

<div className="flex items-center justify-between p-5 border border-zinc-200 rounded-xl bg-white">
<div className="flex items-center gap-4">
<i className="w-5 h-5 text-zinc-400" data-lucide="headphones" strokeWidth="1.5"></i>
<span className="text-lg font-medium text-zinc-900">Audiobook</span>
</div>
<span className="text-base text-zinc-500 font-medium">Coming Soon</span>
</div>
</div>
<div className="flex items-center justify-between py-4 border-t border-zinc-100 text-lg text-zinc-600 font-medium">
<span>Shipping</span>
<span>Flat-rate — $4.95</span>
</div>
</div>
<button className="w-full h-14 bg-zinc-900 text-white rounded-xl font-medium text-lg hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-900/20 flex items-center justify-center gap-2">
                    Checkout <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>

<div className="order-1 lg:order-2 lg:sticky lg:top-32">
<div className="aspect-[3/4] bg-zinc-200 rounded-2xl overflow-hidden shadow-xl border border-zinc-200">

<div className="w-full h-full bg-zinc-100 flex items-center justify-center p-12">
<div className="w-full h-full bg-zinc-800 shadow-2xl rounded-r-xl rounded-l-sm border-l-8 border-zinc-900 flex items-center justify-center relative overflow-hidden">
<div className="text-center p-6 z-10">
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2">The Universal<br/>Cheat Code</h3>
</div>

<div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-r from-zinc-200 to-white shadow-inner"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-40 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-32">

<div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-12">Stay in Touch</h2>
<div className="space-y-12">
<div className="group">
<h3 className="text-xl font-medium text-zinc-900 mb-4 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center group-hover:border-zinc-900 transition-colors">
<i className="w-5 h-5 text-zinc-900" data-lucide="instagram" strokeWidth="1.5"></i>
</div>
                            Instagram
                        </h3>
<p className="text-lg text-zinc-600 font-medium leading-relaxed pl-13">
                            We love seeing the book out in the world. If you share a photo, tag <a className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900 transition-colors" href="#">@theuniversalcheatcode</a> so we can share it.
                        </p>
</div>
<div className="group">
<h3 className="text-xl font-medium text-zinc-900 mb-4 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center group-hover:border-zinc-900 transition-colors">
<i className="w-5 h-5 text-zinc-900" data-lucide="bookmark" strokeWidth="1.5"></i>
</div>
                            Substack
                        </h3>
<p className="text-lg text-zinc-600 font-medium leading-relaxed pl-13">
                            New writing and updates are shared regularly on Substack. Join the community at: <a className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900 transition-colors break-words" href="#">theuniversalcheatcode.substack.com</a>
</p>
</div>
</div>
</div>

<div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Have a question or want to connect?</h2>
<p className="text-lg text-zinc-600 font-medium mb-10">Send a message using the form below.</p>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-base font-medium text-zinc-900 mb-2">Full Name</label>
<input className="w-full h-12 px-4 bg-zinc-50 border border-zinc-200 rounded-lg text-lg text-zinc-900 focus:bg-white focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 outline-none transition-all placeholder:text-zinc-400" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block text-base font-medium text-zinc-900 mb-2">Email Address</label>
<input className="w-full h-12 px-4 bg-zinc-50 border border-zinc-200 rounded-lg text-lg text-zinc-900 focus:bg-white focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 outline-none transition-all placeholder:text-zinc-400" placeholder="jane@example.com" type="email"/>
</div>
</div>
<div>
<label className="block text-base font-medium text-zinc-900 mb-2">Inquiry Type</label>
<div className="relative">
<select className="w-full h-12 px-4 bg-zinc-50 border border-zinc-200 rounded-lg text-lg text-zinc-900 appearance-none focus:bg-white focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 outline-none transition-all cursor-pointer">
<option disabled="" selected="" value="">Select an option</option>
<option value="general">General Inquiry</option>
<option value="press">Press &amp; Media</option>
<option value="support">Order Support</option>
</select>
<i className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 pointer-events-none" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div>
<label className="block text-base font-medium text-zinc-900 mb-2">Message</label>
<textarea className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-lg text-zinc-900 focus:bg-white focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 outline-none transition-all resize-none placeholder:text-zinc-400" placeholder="How can we help you?" rows="5"></textarea>
</div>
<button className="w-full h-14 bg-zinc-900 text-white rounded-lg font-medium text-lg hover:bg-zinc-800 transition-colors" type="submit">
                        Submit
                    </button>
</form>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-y border-zinc-200">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-6">Get Wholesale Access</h2>
<p className="text-lg text-zinc-600 font-medium leading-relaxed max-w-2xl mx-auto">
                    Independent bookstores can order directly through Ingram for seamless fulfillment.<br/>
                    If you prefer to order directly, please request a wholesale account below.
                </p>
</div>
<div className="bg-white p-8 md:p-10 rounded-2xl border border-zinc-200 shadow-sm">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-base font-medium text-zinc-900 mb-2">Store Name</label>
<input className="w-full h-12 px-4 bg-zinc-50 border border-zinc-200 rounded-lg text-lg focus:bg-white focus:border-zinc-900 outline-none transition-all" type="text"/>
</div>
<div>
<label className="block text-base font-medium text-zinc-900 mb-2">Contact Name</label>
<input className="w-full h-12 px-4 bg-zinc-50 border border-zinc-200 rounded-lg text-lg focus:bg-white focus:border-zinc-900 outline-none transition-all" type="text"/>
</div>
<div>
<label className="block text-base font-medium text-zinc-900 mb-2">Email</label>
<input className="w-full h-12 px-4 bg-zinc-50 border border-zinc-200 rounded-lg text-lg focus:bg-white focus:border-zinc-900 outline-none transition-all" type="email"/>
</div>
<div>
<label className="block text-base font-medium text-zinc-900 mb-2">Phone</label>
<input className="w-full h-12 px-4 bg-zinc-50 border border-zinc-200 rounded-lg text-lg focus:bg-white focus:border-zinc-900 outline-none transition-all" type="tel"/>
</div>
</div>
<div>
<label className="block text-base font-medium text-zinc-900 mb-2">Shipping Address</label>
<input className="w-full h-12 px-4 bg-zinc-50 border border-zinc-200 rounded-lg text-lg focus:bg-white focus:border-zinc-900 outline-none transition-all mb-4" placeholder="Street Address" type="text"/>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<input className="col-span-2 h-12 px-4 bg-zinc-50 border border-zinc-200 rounded-lg text-lg focus:bg-white focus:border-zinc-900 outline-none transition-all" placeholder="City" type="text"/>
<input className="h-12 px-4 bg-zinc-50 border border-zinc-200 rounded-lg text-lg focus:bg-white focus:border-zinc-900 outline-none transition-all" placeholder="State" type="text"/>
<input className="h-12 px-4 bg-zinc-50 border border-zinc-200 rounded-lg text-lg focus:bg-white focus:border-zinc-900 outline-none transition-all" placeholder="ZIP" type="text"/>
</div>
</div>
<div>
<label className="block text-base font-medium text-zinc-900 mb-2">Sales Tax ID / Resale Number</label>
<input className="w-full h-12 px-4 bg-zinc-50 border border-zinc-200 rounded-lg text-lg focus:bg-white focus:border-zinc-900 outline-none transition-all" type="text"/>
</div>

<div>
<label className="block text-base font-medium text-zinc-900 mb-2">Upload Resale Certificate (PDF or image)</label>
<label className="flex flex-col items-center justify-center w-full h-40 border-2 border-zinc-200 border-dashed rounded-xl cursor-pointer bg-zinc-50 hover:bg-zinc-100 hover:border-zinc-300 transition-colors group">
<div className="flex flex-col items-center justify-center pt-5 pb-6">
<div className="w-12 h-12 rounded-full bg-white shadow-sm border border-zinc-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
<i className="w-6 h-6 text-zinc-600" data-lucide="upload-cloud" strokeWidth="1.5"></i>
</div>
<p className="text-base text-zinc-600 font-medium mb-1">Click to upload or drag and drop</p>
<p className="text-sm text-zinc-500">PDF, PNG, JPG (MAX. 10MB)</p>
</div>
<input accept=".pdf,image/*" className="hidden" type="file" />
</input></label>
</div>
<div className="pt-4">
<button className="w-full h-14 bg-zinc-900 text-white rounded-lg font-medium text-lg hover:bg-zinc-800 transition-colors" type="submit">
                            Request Wholesale Access
                        </button>
</div>
</form>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-12 border-t border-zinc-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

<div className="lg:col-span-1">
<a className="text-xl font-medium tracking-tight flex items-center gap-2 mb-6" href="#">
<i className="w-6 h-6 text-zinc-900" data-lucide="book-open" strokeWidth="1.5"></i>
                        UCC
                    </a>
<p className="text-base text-zinc-500 mb-6 max-w-xs">
                        Real-world strategies that feel like a cheat code for getting ahead in life.
                    </p>
<a className="text-base text-zinc-900 font-medium hover:text-zinc-600 transition-colors" href="#about">About Us</a>
</div>

<div>
<h4 className="text-base font-medium text-zinc-900 mb-6">Connect With Us</h4>
<ul className="space-y-4">
<li><a className="text-base text-zinc-500 hover:text-zinc-900 transition-colors" href="#contact">Contact Us</a></li>
<li><a className="text-base text-zinc-500 hover:text-zinc-900 transition-colors flex items-center gap-2" href="#">Instagram <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i></a></li>
<li><a className="text-base text-zinc-500 hover:text-zinc-900 transition-colors flex items-center gap-2" href="#">Substack <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i></a></li>
</ul>
</div>

<div>
<h4 className="text-base font-medium text-zinc-900 mb-6">Shipping, Returns &amp; Policies</h4>
<ul className="space-y-4">
<li><a className="text-base text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Returns, Exchanges &amp; Damages</a></li>
<li><a className="text-base text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Shipping Policy</a></li>
<li><a className="text-base text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-base text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-100">
<p className="text-base text-zinc-400 mb-4 md:mb-0">
                    © 2024 The Universal Cheat Code. All rights reserved.
                </p>
<div className="flex gap-4">

<div className="w-10 h-6 bg-zinc-100 rounded border border-zinc-200 flex items-center justify-center text-xs text-zinc-400 font-medium">VISA</div>
<div className="w-10 h-6 bg-zinc-100 rounded border border-zinc-200 flex items-center justify-center text-xs text-zinc-400 font-medium">MC</div>
<div className="w-10 h-6 bg-zinc-100 rounded border border-zinc-200 flex items-center justify-center text-xs text-zinc-400 font-medium">AMEX</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
