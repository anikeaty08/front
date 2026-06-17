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
      
        // Initialize Lucide icons
        lucide.createIcons();
        
        // Modal functionality
        function showModal(modalId) {
            document.getElementById(modalId + '-modal').classList.add('show');
            document.body.style.overflow = 'hidden';
        }
        
        function hideModal(modalId) {
            document.getElementById(modalId + '-modal').classList.remove('show');
            document.body.style.overflow = 'auto';
        }
        
        // Close modal when clicking outside
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('modal')) {
                e.target.classList.remove('show');
                document.body.style.overflow = 'auto';
            }
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Form submission handling (placeholder)
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Feature coming soon! Thanks for your interest.');
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
<img alt="Sarah M." className="w-10 h-10 rounded-full mr-3" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80'http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='20' fill='%23f472b6'/%3E%3C/svg%3E"/>
<div>
<h4 className="font-semibold">Sarah M.</h4>
<p className="text-sm text-gray-600">Published 3 novels</p>
</div>
</div>
<p className="text-gray-700 italic">"I went from idea to published novel in just 2 weeks. The AI understood my writing style perfectly and helped me craft the steamiest scenes!"</p>
</div>
<div className="glass rounded-xl p-6">
<div className="flex items-center mb-4">
<img alt="Jessica R." className="w-10 h-10 rounded-full mr-3" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80'http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='20' fill='%23ec4899'/%3E%3C/svg%3E"/>
<div>
<h4 className="font-semibold">Jessica R.</h4>
<p className="text-sm text-gray-600">Bestselling author</p>
</div>
</div>
<p className="text-gray-700 italic">"Writer's block used to kill my creativity. Now I publish a new romance every month and my readers can't get enough!"</p>
</div>
<div className="glass rounded-xl p-6">
<div className="flex items-center mb-4">
<img alt="Amanda K." className="w-10 h-10 rounded-full mr-3" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80'http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='20' fill='%23be185d'/%3E%3C/svg%3E"/>
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
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-semibold text-center text-gray-900 tracking-tight mb-12">Simple, Transparent Pricing</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass rounded-xl p-8">
<h3 className="text-xl font-semibold mb-2">Author Starter</h3>
<div className="mb-4">
<span className="text-3xl font-semibold">Free</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-gray-700">
<li className="flex items-start"><i className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" data-lucide="check" strokeWidth="1.5"></i>1x Active eBook project per month</li>
<li className="flex items-start"><i className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" data-lucide="check" strokeWidth="1.5"></i>Basic AI writing assistance (limited prompts)</li>
<li className="flex items-start"><i className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" data-lucide="check" strokeWidth="1.5"></i>Standard cover templates only</li>
<li className="flex items-start"><i className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" data-lucide="check" strokeWidth="1.5"></i>Basic formatting options</li>
<li className="flex items-start"><i className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" data-lucide="x" strokeWidth="1.5"></i><span className="text-gray-500">No direct publishing integration</span></li>
<li className="flex items-start"><i className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" data-lucide="info" strokeWidth="1.5"></i><span className="text-gray-500">Watermarked exports</span></li>
<li className="flex items-start"><i className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" data-lucide="check" strokeWidth="1.5"></i>Romance-specific templates &amp; trope library</li>
<li className="flex items-start"><i className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" data-lucide="check" strokeWidth="1.5"></i>Basic manuscript organisation</li>
<li className="flex items-start"><i className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" data-lucide="check" strokeWidth="1.5"></i>Community access (read-only)</li>
</ul>
<button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-xl font-medium transition-colors" onclick="showModal('pricing')">Start Free</button>
</div>

<div className="glass rounded-xl p-8 ring-2 ring-rose-500 relative">
<div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
<span className="bg-rose-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
</div>
<h3 className="text-xl font-semibold mb-2">Romance Writer</h3>
<div className="mb-4">
<span className="text-3xl font-semibold">£19.99</span>
<span className="text-gray-600">/month</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-gray-700">
<li className="flex items-start"><i className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" data-lucide="check" strokeWidth="1.5"></i>Everything in Author Starter</li>
<li className="flex items-start"><i className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" data-lucide="check" strokeWidth="1.5"></i>Up to 5 active book projects</li>
<li className="flex items-start"><i className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" data-lucide="check" strokeWidth="1.5"></i>Full AI writing assistance</li>
<li className="flex items-start"><i className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" data-lucide="check" strokeWidth="1.5"></i>Advanced romance cover design</li>
<li className="flex items-start"><i className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" data-lucide="check" strokeWidth="1.5"></i>Multi-format publishing (ebook, print)</li>
<li className="flex items-start"><i className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" data-lucide="check" strokeWidth="1.5"></i>Basic marketing tools</li>
<li className="flex items-start"><i className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" data-lucide="check" strokeWidth="1.5"></i>Email list integration</li>
<li className="flex items-start"><i className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" data-lucide="check" strokeWidth="1.5"></i>No watermarks</li>
</ul>
<button className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white py-3 rounded-xl font-medium transition-all" onclick="showModal('pricing')">Start Free Trial</button>
</div>

<div className="glass rounded-xl p-8">
<h3 className="text-xl font-semibold mb-2">Series Author</h3>
<div className="mb-4">
<span className="text-3xl font-semibold">£39.99</span>
<span className="text-gray-600">/month</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-gray-700">
<li className="flex items-start"><i className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" data-lucide="check" strokeWidth="1.5"></i>Everything in Romance Writer</li>
<li className="flex items-start"><i className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" data-lucide="check" strokeWidth="1.5"></i>Unlimited active projects</li>
<li className="flex items-start"><i className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" data-lucide="check" strokeWidth="1.5"></i>Series management tools</li>
<li className="flex items-start"><i className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" data-lucide="check" strokeWidth="1.5"></i>Advanced marketing automation</li>
<li className="flex items-start"><i className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" data-lucide="check" strokeWidth="1.5"></i>Sales analytics dashboard</li>
<li className="flex items-start"><i className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" data-lucide="check" strokeWidth="1.5"></i>Priority rendering for AI features</li>
<li className="flex items-start"><i className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" data-lucide="check" strokeWidth="1.5"></i>Audiobook creation capabilities</li>
<li className="flex items-start"><i className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" data-lucide="check" strokeWidth="1.5"></i>Advanced reader engagement tools</li>
</ul>
<button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-xl font-medium transition-colors" onclick="showModal('pricing')">Upgrade Now</button>
</div>
</div>
</div>
</section>

<div className="modal items-center justify-center" id="outline-modal">
<div className="glass rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-semibold tracking-tight">AI Plot Outline Generator</h2>
<button className="text-gray-400 hover:text-gray-600" onclick="hideModal('outline')">
<i className="w-6 h-6" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<form className="space-y-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Romance Trope</label>
<select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent">
<option>Enemies to Lovers</option>
<option>Second Chance Romance</option>
<option>Fake Dating</option>
<option>Forbidden Romance</option>
<option>Billionaire Romance</option>
<option>Small Town Romance</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Setting</label>
<input className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent" placeholder="e.g., Contemporary New York, Victorian England, Space Station..." type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Main Characters</label>
<textarea className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent resize-none" placeholder="Describe your hero and heroine - their personalities, backgrounds, what makes them unique..." rows="3"></textarea>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Central Conflict</label>
<textarea className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent resize-none" placeholder="What's keeping them apart? What obstacles must they overcome?" rows="3"></textarea>
</div>
<button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white py-3 rounded-xl font-medium transition-all" type="submit">Generate My Plot Outline</button>
</form>
</div>
</div>
<div className="modal items-center justify-center" id="draft-modal">
<div className="glass rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-semibold tracking-tight">AI Chapter Writer</h2>
<button className="text-gray-400 hover:text-gray-600" onclick="hideModal('draft')">
<i className="w-6 h-6" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<form className="space-y-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Scene Type</label>
<select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent">
<option>First Meeting</option>
<option>Rising Tension</option>
<option>The Kiss</option>
<option>Big Misunderstanding</option>
<option>Emotional Confrontation</option>
<option>Steamy Scene</option>
<option>Grand Gesture</option>
<option>Happy Ending</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Point of View</label>
<div className="flex space-x-4">
<label className="flex items-center">
<input className="mr-2 text-rose-500" name="pov" type="radio" value="hero"/>
<span className="text-sm">Hero's POV</span>
</label>
<label className="flex items-center">
<input className="mr-2 text-rose-500" name="pov" type="radio" value="heroine"/>
<span className="text-sm">Heroine's POV</span>
</label>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Scene Setting</label>
<input className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent" placeholder="Where does this scene take place?" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">What Happens</label>
<textarea className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent resize-none" placeholder="Describe the key events, emotions, and dialogue you want in this scene..." rows="4"></textarea>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Writing Style</label>
<select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent">
<option>Sweet &amp; Clean</option>
<option>Steamy &amp; Passionate</option>
<option>Emotional &amp; Angsty</option>
<option>Witty &amp; Playful</option>
<option>Dark &amp; Intense</option>
</select>
</div>
<button className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white py-3 rounded-xl font-medium transition-all" type="submit">Write My Scene</button>
</form>
</div>
</div>
<div className="modal items-center justify-center" id="cover-modal">
<div className="glass rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-semibold tracking-tight">AI Cover Designer</h2>
<button className="text-gray-400 hover:text-gray-600" onclick="hideModal('cover')">
<i className="w-6 h-6" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<form className="space-y-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Book Title</label>
<input className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent" placeholder="Enter your book title" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Author Name</label>
<input className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent" placeholder="Your author name" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Romance Subgenre</label>
<select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent">
<option>Contemporary Romance</option>
<option>Historical Romance</option>
<option>Paranormal Romance</option>
<option>Romantic Suspense</option>
<option>Fantasy Romance</option>
<option>Western Romance</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Mood &amp; Tone</label>
<div className="grid grid-cols-2 gap-3">
<label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-rose-50 cursor-pointer">
<input className="mr-3 text-rose-500" type="checkbox"/>
<span className="text-sm">Dark &amp; Mysterious</span>
</label>
<label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-rose-50 cursor-pointer">
<input className="mr-3 text-rose-500" type="checkbox"/>
<span className="text-sm">Light &amp; Playful</span>
</label>
<label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-rose-50 cursor-pointer">
<input className="mr-3 text-rose-500" type="checkbox"/>
<span className="text-sm">Elegant &amp; Sophisticated</span>
</label>
<label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-rose-50 cursor-pointer">
<input className="mr-3 text-rose-500" type="checkbox"/>
<span className="text-sm">Steamy &amp; Passionate</span>
</label>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Visual Style</label>
<textarea className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent resize-none" placeholder="Describe the visual elements you want - colors, imagery, characters, symbols..." rows="3"></textarea>
</div>
<button className="w-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white py-3 rounded-xl font-medium transition-all" type="submit">Generate My Cover Design</button>
</form>
</div>
</div>
<div className="modal items-center justify-center" id="pricing-modal">
<div className="glass rounded-2xl p-8 max-w-md w-full mx-4">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-semibold tracking-tight">Get Started</h2>
<button className="text-gray-400 hover:text-gray-600" onclick="hideModal('pricing')">
<i className="w-6 h-6" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<form className="space-y-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
<input className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent" placeholder="your@email.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Author Name</label>
<input className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent" placeholder="What should we call you?" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
<select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent">
<option>Complete beginner</option>
<option>Some writing experience</option>
<option>Published author</option>
<option>Professional author</option>
</select>
</div>
<button className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white py-3 rounded-xl font-medium transition-all" type="submit">Start My Free Trial</button>
<p className="text-xs text-gray-500 text-center">No credit card required. Cancel anytime.</p>
</form>
</div>
</div>

<section className="relative z-10 px-6 py-16" id="faq">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl font-semibold text-center text-gray-900 tracking-tight mb-12">Frequently Asked Questions</h2>
<div className="space-y-6">
<div className="glass rounded-xl p-6">
<h3 className="font-semibold text-lg mb-2">How does the AI understand romance writing?</h3>
<p className="text-gray-700">Our AI has been specifically trained on thousands of romance novels across all subgenres. It understands romantic tension, character development, pacing, and the specific tropes that make romance readers swoon.</p>
</div>
<div className="glass rounded-xl p-6">
<h3 className="font-semibold text-lg mb-2">Will my book sound generic or AI-generated?</h3>
<p className="text-gray-700">Not at all! BookForge learns your unique voice and style preferences. The AI acts as your co-writer, following your creative direction while helping with structure, dialogue, and scene development.</p>
</div>
<div className="glass rounded-xl p-6">
<h3 className="font-semibold text-lg mb-2">Can I publish books created with BookForge?</h3>
<p className="text-gray-700">Absolutely! You retain full commercial rights to everything you create. We even help format your manuscript for Amazon KDP, Apple Books, and other major platforms.</p>
</div>
<div className="glass rounded-xl p-6">
<h3 className="font-semibold text-lg mb-2">How long does it take to write a complete novel?</h3>
<p className="text-gray-700">With BookForge, authors typically complete a 60,000-word romance novel in 2-4 weeks, compared to 6-12 months writing traditionally. The speed depends on your input and revision preferences.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 px-6 py-16">
<div className="max-w-4xl mx-auto">
<div className="glass rounded-3xl p-8 md:p-12 text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-6">
                    Ready to Write Your Next<br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-600">Bestselling Romance?</span>
</h2>
<p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                    Join thousands of authors who've discovered the joy of writing without limits.
                </p>
<button className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105" onclick="showModal('pricing')">
                    Start Writing Today - Free
                </button>
<p className="text-sm text-gray-500 mt-4">✨ No credit card required • 14-day free trial • Cancel anytime</p>
</div>
</div>
</section>



    </>
  );
}
