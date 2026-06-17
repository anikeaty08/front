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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="18"></span>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">TopReviews</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Marketing</a>
<a className="hover:text-slate-900 transition-colors" href="#">Tech</a>
<a className="hover:text-slate-900 transition-colors" href="#">Analysis</a>
<a className="hover:text-slate-900 transition-colors" href="#">About</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
<span className="iconify" data-icon="lucide:search" data-width="18"></span>
</button>
<a className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-full transition-all shadow-lg shadow-slate-200" href="#">
                    Subscribe
                </a>
</div>
</div>
</nav>

<main className="pt-32 pb-24 px-6">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

<aside className="hidden lg:block lg:col-span-3">
<div className="sticky top-32">
<div className="flex items-center gap-2 text-slate-900 font-medium mb-4">
<span className="iconify" data-icon="lucide:list-tree" data-width="18"></span>
<span className="text-sm">Contents</span>
</div>
<ul className="space-y-3 text-sm border-l border-slate-100">
<li><a className="block pl-4 border-l -ml-px border-slate-900 text-slate-900 font-medium" href="#">Introduction</a></li>
<li><a className="block pl-4 border-l -ml-px border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-all" href="#">The "Secret" ID</a></li>
<li><a className="block pl-4 border-l -ml-px border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-all" href="#">How Cookies Work</a></li>
<li><a className="block pl-4 border-l -ml-px border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-all" href="#">Getting Paid</a></li>
<li><a className="block pl-4 border-l -ml-px border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-all" href="#">Common Myths</a></li>
</ul>
<div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100">
<span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-2 block">New Course</span>
<h4 className="text-slate-900 font-semibold leading-tight mb-2">Affiliate Launchpad</h4>
<p className="text-xs text-slate-500 mb-4 leading-relaxed">Start your first profitable campaign in 30 days or less.</p>
<a className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700" href="#">
                            Start Learning <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</aside>

<article className="col-span-1 lg:col-span-7">

<div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8">
<a className="hover:text-indigo-600 transition-colors" href="#">Home</a>
<span className="iconify" data-icon="lucide:chevron-right" data-width="12"></span>
<a className="hover:text-indigo-600 transition-colors" href="#">Beginner Guides</a>
<span className="iconify" data-icon="lucide:chevron-right" data-width="12"></span>
<span className="text-slate-900">How It Works</span>
</div>

<header className="mb-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                        Beginner Friendly
                    </div>
<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                        How Affiliate Links Actually Work
                    </h1>
<p className="text-lg text-slate-500 leading-relaxed mb-8">
                        Affiliate marketing is one of the simplest and most powerful ways to make money online, but most beginners don’t fully understand how affiliate links track clicks, how commissions are assigned, or why companies trust affiliates to promote their products.
                    </p>

<div className="flex items-center justify-between border-y border-slate-100 py-6">
<div className="flex items-center gap-4">
<div className="relative">
<img alt="Author" className="w-10 h-10 rounded-full border border-slate-200" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div className="absolute -bottom-1 -right-1 bg-white p-0.5 rounded-full">
<div className="bg-blue-500 w-3 h-3 rounded-full flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:check" data-width="8"></span>
</div>
</div>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Sarah Jenkins</div>
<div className="text-xs text-slate-500">Marketing Educator</div>
</div>
</div>
<div className="flex items-center gap-6 text-slate-400 text-sm">
<div className="flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:clock" data-width="16"></span>
                                6 min read
                            </div>
<div className="flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:share-2" data-width="16"></span>
                                Share
                            </div>
</div>
</div>
</header>

<div className="w-full h-64 sm:h-96 rounded-2xl bg-gradient-to-tr from-slate-100 to-indigo-50 border border-slate-100 mb-12 flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 opacity-40" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<div className="relative z-10 flex items-center gap-8 md:gap-16">
<div className="w-20 h-24 bg-white rounded-xl shadow-xl shadow-slate-200/50 flex flex-col items-center justify-center border border-slate-200 transform group-hover:-translate-y-2 transition-transform duration-500">
<span className="iconify text-slate-400 mb-2" data-icon="lucide:user" data-width="24"></span>
<div className="h-1 w-8 bg-slate-100 rounded-full"></div>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-xs font-mono text-indigo-500 bg-indigo-50 px-2 py-1 rounded">Your Link</span>
<div className="w-24 h-px bg-indigo-300 relative">
<div className="absolute -right-1 -top-1 w-2 h-2 border-t border-r border-indigo-300 transform rotate-45"></div>
</div>
</div>
<div className="w-20 h-24 bg-white rounded-xl shadow-xl shadow-indigo-200/50 flex flex-col items-center justify-center border border-indigo-100 transform group-hover:-translate-y-2 transition-transform duration-500 delay-100">
<span className="iconify text-indigo-500 mb-2" data-icon="lucide:shopping-bag" data-width="24"></span>
<div className="h-1 w-8 bg-indigo-50 rounded-full"></div>
</div>
</div>
</div>

<div className="prose prose-slate prose-lg max-w-none">
<p className="mb-8 leading-relaxed">
                        This guide gives you a clear, beginner-friendly explanation of how affiliate links actually work, how tracking happens behind the scenes, and how commissions are calculated — all in simple language with zero technical confusion.
                    </p>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mt-12 mb-6">The Magic Inside the Link</h2>
<p className="mb-6 leading-relaxed">
                        An affiliate link looks almost like any other link on the web, but it has one special ingredient: <strong>your unique ID</strong>. This ID acts like a digital fingerprint, telling the store exactly who sent the customer.
                    </p>
<div className="bg-slate-900 rounded-xl p-6 mb-8 overflow-x-auto shadow-2xl shadow-slate-200">
<code className="font-mono text-sm text-indigo-300">https://store.com/product?ref=<span className="text-emerald-400">YOUR_NAME</span></code>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 border-t border-slate-800 pt-6">
<div>
<div className="text-xs text-slate-500 uppercase tracking-wider mb-1">The Website</div>
<div className="text-slate-300 text-sm">Where the customer shops</div>
</div>
<div>
<div className="text-xs text-slate-500 uppercase tracking-wider mb-1">?ref=YOUR_NAME</div>
<div className="text-slate-300 text-sm">Your unique signature</div>
</div>
</div>
</div>
<p className="mb-6 leading-relaxed">
                        When someone clicks that link, they aren't just going to the product page. They are carrying your "signature" with them.
                    </p>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mt-12 mb-6">How Tracking Works (The Cookie)</h2>
<p className="mb-6 leading-relaxed">
                        You might be wondering: <em>"What if they don't buy immediately? What if they buy tomorrow?"</em> This is where the <strong>cookie</strong> comes in.
                    </p>
<p className="mb-6 leading-relaxed">
                        A cookie is a tiny text file saved in the user's browser when they click your link. It essentially says: <em>"This person was referred by [Your Name] on [Date]."</em>
</p>
<div className="my-10 p-6 bg-amber-50 border border-amber-100 rounded-xl flex gap-4">
<div className="flex-shrink-0 mt-1">
<span className="iconify text-amber-500" data-icon="lucide:lightbulb" data-width="20"></span>
</div>
<div>
<h4 className="text-amber-900 font-semibold text-sm mb-1">Did you know?</h4>
<p className="text-amber-800 text-sm leading-relaxed">
                                Most affiliate programs have a "cookie duration." For example, if a program has a 30-day cookie, you will still get paid even if the customer waits 29 days to make the purchase!
                            </p>
</div>
</div>
<h3 className="text-xl font-semibold text-slate-900 mt-10 mb-4">How You Get Paid</h3>
<p className="mb-6 leading-relaxed">
                        Here is the step-by-step process of a successful sale:
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3">
<span className="iconify text-emerald-500 mt-1 flex-shrink-0" data-icon="lucide:mouse-pointer-2" data-width="18"></span>
<span className="text-slate-600"><strong>The Click:</strong> A user clicks your special link. The "cookie" is planted in their browser.</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-emerald-500 mt-1 flex-shrink-0" data-icon="lucide:shopping-cart" data-width="18"></span>
<span className="text-slate-600"><strong>The Shop:</strong> The user browses the site. They don't need to stay on the specific product you linked to.</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-emerald-500 mt-1 flex-shrink-0" data-icon="lucide:dollar-sign" data-width="18"></span>
<span className="text-slate-600"><strong>The Sale:</strong> At checkout, the store checks for the cookie. It sees your ID and credits your account with the commission.</span>
</li>
</ul>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mt-12 mb-6">Why Do Companies Do This?</h2>
<p className="mb-8 leading-relaxed">
                        It might seem like companies are giving away free money, but it's actually a smart business move. Instead of spending millions on vague TV ads, they only pay <strong>when a sale is made</strong>. It's low risk for them, and high reward for you.
                    </p>

<figure className="my-12 relative pl-8 border-l-2 border-indigo-500">
<blockquote className="text-xl font-medium text-slate-900 italic mb-4">
                            "Affiliate marketing is the ultimate win-win. The company gets a sale they wouldn't have otherwise, and you get paid for the introduction."
                        </blockquote>
<figcaption className="text-sm text-slate-500 flex items-center gap-2">
<span className="w-4 h-px bg-slate-300"></span>
                            Marketing Wisdom
                        </figcaption>
</figure>
<p className="mb-6 leading-relaxed">
                        Now that you understand the mechanics, you can start building your strategy with confidence. You aren't just pasting links; you are creating digital pathways that track value and generate income.
                    </p>
</div>

<div className="mt-12 flex flex-wrap gap-2">
<a className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-medium rounded-md border border-slate-200 transition-colors" href="#">#Beginner</a>
<a className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-medium rounded-md border border-slate-200 transition-colors" href="#">#AffiliateMarketing</a>
<a className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-medium rounded-md border border-slate-200 transition-colors" href="#">#Basics</a>
</div>

<div className="mt-16 pt-10 border-t border-slate-100">
<h3 className="text-lg font-semibold text-slate-900 mb-6">Was this guide helpful?</h3>
<div className="flex gap-4">
<button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 text-slate-600 text-sm font-medium hover:border-slate-300 hover:bg-slate-50 transition-all">
<span className="iconify" data-icon="lucide:thumbs-up" data-width="16"></span>
                            Yes
                        </button>
<button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 text-slate-600 text-sm font-medium hover:border-slate-300 hover:bg-slate-50 transition-all">
<span className="iconify" data-icon="lucide:thumbs-down" data-width="16"></span>
                            No
                        </button>
</div>
</div>
</article>

<div className="hidden lg:block lg:col-span-2">
<div className="sticky top-32">
<div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6">Popular Reads</div>
<div className="space-y-8">
<a className="block group" href="#">
<div className="aspect-video w-full bg-slate-100 rounded-lg mb-3 overflow-hidden relative">
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h5 className="text-sm font-medium text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors">Top 10 High-Ticket Affiliate Programs</h5>
</a>
<a className="block group" href="#">
<div className="aspect-video w-full bg-slate-100 rounded-lg mb-3 overflow-hidden relative">
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h5 className="text-sm font-medium text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors">How to Promote without a Website</h5>
</a>
</div>
</div>
</div>
</div>
</main>

<section className="border-t border-slate-100 bg-slate-50/50">
<div className="max-w-3xl mx-auto px-6 py-20 text-center">
<div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mx-auto mb-6">
<span className="iconify" data-icon="lucide:mail" data-width="24"></span>
</div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-3">Join the Crash Course</h2>
<p className="text-slate-500 mb-8 max-w-lg mx-auto">Join 12,000+ beginners receiving our weekly tips to start earning online.</p>
<form className="max-w-sm mx-auto space-y-4">
<div className="relative">
<input className="w-full pl-4 pr-12 py-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm" placeholder="email@example.com" type="email"/>
<button className="absolute right-1.5 top-1.5 p-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors" type="submit">
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
<label className="flex items-start justify-center gap-3 cursor-pointer group custom-checkbox">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 mt-0.5 border border-slate-300 rounded flex items-center justify-center transition-all bg-white group-hover:border-indigo-400">
<svg className="hidden w-2.5 h-2.5 text-white pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-xs text-slate-500 text-left select-none">I agree to receive weekly updates. No spam, ever.</span>
</label>
</form>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-600" href="#">Features</a></li>
<li><a className="hover:text-indigo-600" href="#">Integrations</a></li>
<li><a className="hover:text-indigo-600" href="#">Pricing</a></li>
<li><a className="hover:text-indigo-600" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-600" href="#">Documentation</a></li>
<li><a className="hover:text-indigo-600" href="#">API Reference</a></li>
<li><a className="hover:text-indigo-600" href="#">Community</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-600" href="#">About</a></li>
<li><a className="hover:text-indigo-600" href="#">Blog</a></li>
<li><a className="hover:text-indigo-600" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-600" href="#">Privacy</a></li>
<li><a className="hover:text-indigo-600" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:layers" data-width="14"></span>
</div>
<span className="text-sm font-semibold text-slate-900 tracking-tight">TopReviews</span>
</div>
<div className="text-xs text-slate-400">
                    © 2024 TopReviews Inc. All rights reserved.
                </div>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="text-slate-400 hover:text-slate-600" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="18"></span></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><span className="iconify" data-icon="lucide:github" data-width="18"></span></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="18"></span></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
