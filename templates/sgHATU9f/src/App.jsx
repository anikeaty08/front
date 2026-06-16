import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', function() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('price-blur');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            document.querySelectorAll('.price-card').forEach(card => {
                observer.observe(card);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<section className="py-20 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full">
<div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
</div>
<div className="container mx-auto px-4 relative z-10">

<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-light mb-4 price-card delay-1" style={{letterSpacing: '-0.02em'}}>
<span className="bg-gradient-to-br from-purple-300 to-purple-500 bg-clip-text text-transparent">
                        Simple, Transparent Pricing
                    </span>
</h2>
<p className="text-purple-200 text-lg md:text-xl max-w-2xl mx-auto price-card delay-2">
                    Choose the perfect plan for your needs
                </p>
</div>

<div className="flex justify-center items-center mb-12 price-card delay-2">
<span className="text-gray-400 mr-3">Monthly</span>
<label className="relative inline-block w-12 h-6">
<input className="opacity-0 w-0 h-0" type="checkbox"/>
<span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-purple-900/50 rounded-full before:absolute before:h-4 before:w-4 before:left-1 before:bottom-1 before:bg-white before:rounded-full before:transition-all before:duration-300 peer-checked:before:translate-x-6 peer-checked:bg-purple-600"></span>
</label>
<span className="text-gray-400 ml-3">Annually <span className="text-purple-500 text-xs">Save 20%</span></span>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="glass rounded-2xl overflow-hidden price-card delay-1 hover:translate-y-[-5px] transition-transform duration-300">
<div className="p-8">
<h3 className="text-xl font-medium mb-4 text-white">Starter</h3>
<div className="flex items-baseline mb-4">
<span className="text-4xl font-light text-white">$29</span>
<span className="text-gray-400 ml-2">/month</span>
</div>
<p className="text-gray-400 mb-6">Perfect for individuals and small projects</p>
<button className="w-full py-3 px-4 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-900/20 transition-colors">
                            Get Started
                        </button>
</div>
<div className="border-t border-purple-900/40 p-8">
<ul className="space-y-3">
<li className="flex items-center text-gray-300">
<svg className="h-5 w-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                                5 Projects
                            </li>
<li className="flex items-center text-gray-300">
<svg className="h-5 w-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                                20GB Storage
                            </li>
<li className="flex items-center text-gray-300">
<svg className="h-5 w-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                                Basic Analytics
                            </li>
<li className="flex items-center text-gray-500">
<svg className="h-5 w-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                                Priority Support
                            </li>
</ul>
</div>
</div>

<div className="popular rounded-2xl overflow-hidden price-card delay-2 hover:translate-y-[-5px] transition-transform duration-300 scale-105 shadow-lg shadow-purple-500/10">
<div className="bg-purple-500 text-center py-1.5 text-xs font-medium">MOST POPULAR</div>
<div className="p-8">
<h3 className="text-xl font-medium mb-4 text-white">Pro</h3>
<div className="flex items-baseline mb-4">
<span className="text-4xl font-light text-white">$79</span>
<span className="text-gray-400 ml-2">/month</span>
</div>
<p className="text-gray-400 mb-6">Ideal for growing businesses and teams</p>
<button className="w-full py-3 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                            Get Started
                        </button>
</div>
<div className="border-t border-purple-900/40 p-8">
<ul className="space-y-3">
<li className="flex items-center text-gray-300">
<svg className="h-5 w-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                                15 Projects
                            </li>
<li className="flex items-center text-gray-300">
<svg className="h-5 w-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                                100GB Storage
                            </li>
<li className="flex items-center text-gray-300">
<svg className="h-5 w-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                                Advanced Analytics
                            </li>
<li className="flex items-center text-gray-300">
<svg className="h-5 w-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                                Priority Support
                            </li>
</ul>
</div>
</div>

<div className="glass rounded-2xl overflow-hidden price-card delay-3 hover:translate-y-[-5px] transition-transform duration-300">
<div className="p-8">
<h3 className="text-xl font-medium mb-4 text-white">Enterprise</h3>
<div className="flex items-baseline mb-4">
<span className="text-4xl font-light text-white">$199</span>
<span className="text-gray-400 ml-2">/month</span>
</div>
<p className="text-gray-400 mb-6">Advanced features for large organizations</p>
<button className="w-full py-3 px-4 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-900/20 transition-colors">
                            Contact Sales
                        </button>
</div>
<div className="border-t border-purple-900/40 p-8">
<ul className="space-y-3">
<li className="flex items-center text-gray-300">
<svg className="h-5 w-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                                Unlimited Projects
                            </li>
<li className="flex items-center text-gray-300">
<svg className="h-5 w-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                                1TB Storage
                            </li>
<li className="flex items-center text-gray-300">
<svg className="h-5 w-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                                Custom Analytics
                            </li>
<li className="flex items-center text-gray-300">
<svg className="h-5 w-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                                24/7 Dedicated Support
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

    </>
  );
}
