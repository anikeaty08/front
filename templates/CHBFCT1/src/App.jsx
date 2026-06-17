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
      
        lucide.createIcons();
        
        function showModal(type) {
            document.getElementById('modal').classList.add('show');
        }
        
        function hideModal() {
            document.getElementById('modal').classList.remove('show');
        }
        
        // Close modal when clicking outside
        document.getElementById('modal').addEventListener('click', function(e) {
            if (e.target === this) {
                hideModal();
            }
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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none">
<div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-rose-400 to-pink-600 rounded-full opacity-20 blur-3xl float"></div>
<div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-600 rounded-full opacity-15 blur-3xl float" style={{animationDelay: '-2s'}}></div>
</div>

<nav className="relative z-10 glass rounded-2xl m-6 px-6 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 bg-gradient-to-br from-rose-500 to-pink-600 rounded-lg flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="heart" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-semibold tracking-tight">BookForge</span>
</div>
<div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-600">
<a className="hover:text-gray-900 transition-colors" href="#testimonials">Stories</a>
<a className="hover:text-gray-900 transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-gray-900 transition-colors" href="#faq">FAQ</a>
</div>
</div>
</nav>

<section className="relative z-10 px-6 py-16">
<div className="max-w-6xl mx-auto">
<div className="glass rounded-3xl p-8 md:p-12">
<div className="text-center mb-12">
<h1 className="text-4xl md:text-6xl font-semibold text-gray-900 tracking-tight mb-6">
                        Go From a Romance Idea to a<br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-600">Print-Ready Novel</span><br/>
                        in a Single Afternoon
                    </h1>
<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
                        The AI co-writer designed for modern romance novelists. Stop fighting writer's block and start publishing. No coding, no design skills needed.
                    </p>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
<button className="glass hover:scale-105 transition-all duration-200 p-6 rounded-xl group" onclick="showModal('outline')">
<div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-white" data-lucide="git-branch" strokeWidth="1.5"></i>
</div>
<h3 className="font-semibold text-lg mb-2">Outline My Plot</h3>
<p className="text-gray-600 text-sm">Create compelling story structures with AI-powered plot development</p>
</button>
<button className="glass hover:scale-105 transition-all duration-200 p-6 rounded-xl group" onclick="showModal('draft')">
<div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-white" data-lucide="pen-tool" strokeWidth="1.5"></i>
</div>
<h3 className="font-semibold text-lg mb-2">Draft a Chapter</h3>
<p className="text-gray-600 text-sm">Write beautiful romance scenes with your AI writing partner</p>
</button>
<button className="glass hover:scale-105 transition-all duration-200 p-6 rounded-xl group" onclick="showModal('cover')">
<div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-white" data-lucide="palette" strokeWidth="1.5"></i>
</div>
<h3 className="font-semibold text-lg mb-2">Design My Cover</h3>
<p className="text-gray-600 text-sm">Generate stunning book covers that sell your romance story</p>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 px-6 py-16" id="testimonials">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-semibold text-center text-gray-900 tracking-tight mb-12">What Romance Authors Are Saying</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="glass rounded-xl p-6">
<div className="flex items-center mb-4">
<img alt="Sarah M." className="w-10 h-10 rounded-full mr-3" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='20' fill='%23f472b6'/%3E%3C/svg%3E"/>
<div>
<h4 className="font-semibold">Sarah M.</h4>
<p className="text-sm text-gray-600">Published 3 novels</p>
</div>
</div>
<p className="text-gray-700 italic">"I went from idea to published novel in just 2 weeks. The AI understood my writing style perfectly and helped me craft the steamiest scenes!"</p>
</div>
<div className="glass rounded-xl p-6">
<div className="flex items-center mb-4">
<img alt="Jessica R." className="w-10 h-10 rounded-full mr-3" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='20' fill='%23ec4899'/%3E%3C/svg%3E"/>
<div>
<h4 className="font-semibold">Jessica R.</h4>
<p className="text-sm text-gray-600">Bestselling author</p>
</div>
</div>
<p className="text-gray-700 italic">"Writer's block used to kill my creativity. Now I publish a new romance every month and my readers can't get enough!"</p>
</div>
<div className="glass rounded-xl p-6">
<div className="flex items-center mb-4">
<img alt="Amanda K." className="w-10 h-10 rounded-full mr-3" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='20' fill='%23be185d'/%3E%3C/svg%3E"/>
<div>
<h4 className="font-semibold">Amanda K.</h4>
<p className="text-sm text-gray-600">First-time novelist</p>
</div>
</div>
<p className="text-gray-700 italic">"I never thought I could write a book. BookForge made it feel like chatting with a creative friend who just happens to be a genius!"</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 px-6 py-16" id="pricing">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl font-semibold text-center text-gray-900 tracking-tight mb-12">Simple, Transparent Pricing</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="glass rounded-xl p-8">
<h3 className="text-xl font-semibold mb-2">Starter</h3>
<div className="mb-4">
<span className="text-3xl font-semibold">$29</span>
<span className="text-gray-600">/month</span>
</div>
<ul className="space-y-3 mb-8 text-gray-700">
<li className="flex items-center"><i className="w-4 h-4 text-green-500 mr-2" data-lucide="check" strokeWidth="1.5"></i>1 novel per month</li>
<li className="flex items-center"><i className="w-4 h-4 text-green-500 mr-2" data-lucide="check" strokeWidth="1.5"></i>AI plot outlines</li>
<li className="flex items-center"><i className="w-4 h-4 text-green-500 mr-2" data-lucide="check" strokeWidth="1.5"></i>Chapter drafting</li>
<li className="flex items-center"><i className="w-4 h-4 text-green-500 mr-2" data-lucide="check" strokeWidth="1.5"></i>Basic cover designs</li>
</ul>
<button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-xl font-medium transition-colors" onclick="showModal('pricing')">Get Started</button>
</div>
<div className="glass rounded-xl p-8 ring-2 ring-rose-500 relative">
<div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
<span className="bg-rose-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
</div>
<h3 className="text-xl font-semibold mb-2">Professional</h3>
<div className="mb-4">
<span className="text-3xl font-semibold">$79</span>
<span className="text-gray-600">/month</span>
</div>
<ul className="space-y-3 mb-8 text-gray-700">
<li className="flex items-center"><i className="w-4 h-4 text-green-500 mr-2" data-lucide="check" strokeWidth="1.5"></i>Unlimited novels</li>
<li className="flex items-center"><i className="w-4 h-4 text-green-500 mr-2" data-lucide="check" strokeWidth="1.5"></i>Advanced AI writing</li>
<li className="flex items-center"><i className="w-4 h-4 text-green-500 mr-2" data-lucide="check" strokeWidth="1.5"></i>Premium cover designs</li>
<li className="flex items-center"><i className="w-4 h-4 text-green-500 mr-2" data-lucide="check" strokeWidth="1.5"></i>Publishing assistance</li>
<li className="flex items-center"><i className="w-4 h-4 text-green-500 mr-2" data-lucide="check" strokeWidth="1.5"></i>Priority support</li>
</ul>
<button className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white py-3 rounded-xl font-medium transition-all" onclick="showModal('pricing')">Start Free Trial</button>
</div>
</div>
</div>
</section>

<section className="relative z-10 px-6 py-16" id="faq">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl font-semibold text-center text-gray-900 tracking-tight mb-12">Frequently Asked Questions</h2>
<div className="space-y-6">
<div className="glass rounded-xl p-6">
<h3 className="font-semibold text-lg mb-2">Do I own the rights to my AI-written novel?</h3>
<p className="text-gray-700">Absolutely! You own 100% of the rights to everything you create with BookForge. Your stories, your characters, your success.</p>
</div>
<div className="glass rounded-xl p-6">
<h3 className="font-semibold text-lg mb-2">How does the AI understand romance writing?</h3>
<p className="text-gray-700">Our AI has been trained specifically on romance novels, understanding tropes, pacing, and emotional beats that make readers swoon.</p>
</div>
<div className="glass rounded-xl p-6">
<h3 className="font-semibold text-lg mb-2">Can I edit and customize what the AI writes?</h3>
<p className="text-gray-700">Of course! Think of the AI as your writing partner. You can edit, revise, and guide the story in any direction you want.</p>
</div>
<div className="glass rounded-xl p-6">
<h3 className="font-semibold text-lg mb-2">How long does it take to create a full novel?</h3>
<p className="text-gray-700">Most authors complete their first draft in 1-3 days, with a polished, print-ready novel ready within a week.</p>
</div>
</div>
</div>
</section>

<div className="modal items-center justify-center" id="modal">
<div className="glass rounded-2xl p-8 m-6 max-w-md w-full">
<div className="text-center">
<div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
<i className="w-8 h-8 text-white" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold mb-4">This feature is getting its final touches!</h3>
<p className="text-gray-600 mb-6">Enter your email to be the first to get access and lock in a 50% lifetime discount.</p>
<form className="space-y-4">
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500" placeholder="Enter your email" type="email"/>
<button className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white py-3 rounded-xl font-medium transition-all" type="submit">Get Early Access + 50% Off</button>
</form>
<button className="mt-4 text-gray-500 hover:text-gray-700 text-sm" onclick="hideModal()">Maybe later</button>
</div>
</div>
</div>


    </>
  );
}
