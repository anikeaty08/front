import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
        lucide.createIcons();
        
        function showModal(type) {
            console.log(`Opening modal for: ${type}`);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
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


    </>
  );
}
