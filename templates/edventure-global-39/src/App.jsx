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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[#febd17] opacity-[0.03] blur-[120px] pointer-events-none rounded-full"></div>

<nav className="fixed top-0 w-full z-50 bg-[#213b97]/80 backdrop-blur-md border-b border-white/5 transition-all">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-xl tracking-tighter font-medium text-white flex items-center gap-1" href="#">
                NEXUS<span className="text-[#febd17]">.</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-300 hover:text-[#febd17] transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-gray-300 hover:text-[#febd17] transition-colors" href="#solutions">Solutions</a>
<a className="text-sm font-medium text-gray-300 hover:text-[#febd17] transition-colors" href="#metrics">Metrics</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-white hover:text-[#febd17] transition-colors" href="#">Log in</a>
<a className="text-sm font-medium px-5 py-2.5 bg-[#febd17] text-[#213b97] rounded-full hover:bg-white transition-colors duration-300" href="#">
                    Get Started
                </a>
</div>
</div>
</nav>

<section className="relative pt-40 pb-24 md:pt-52 md:pb-32 px-6">
<div className="max-w-5xl mx-auto text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
<span className="w-2 h-2 rounded-full bg-[#febd17] animate-pulse"></span>
<span className="text-xs font-medium text-gray-300 uppercase tracking-widest">Introducing Version 2.0</span>
</div>

<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white leading-[1.1] mb-6">
                Scale your vision with <br className="hidden md:block"/>
<span className="text-[#febd17] relative inline-block">
                    unmatched precision
                    
<svg className="absolute w-full h-3 -bottom-1 left-0 text-[#febd17]/30" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
</span>
</h1>

<p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Streamline your operations, optimize workflows, and drive growth with our intelligent, data-driven platform designed for modern enterprises.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-[#febd17] text-[#213b97] text-sm font-medium rounded-full hover:bg-white transition-all duration-300 flex items-center justify-center gap-2" href="#">
                    Start Building Free
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-[#febd17]/50 text-[#febd17] text-sm font-medium rounded-full hover:bg-[#febd17]/10 transition-all duration-300 flex items-center justify-center gap-2" href="#">
<iconify-icon className="text-lg" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Watch Demo
                </a>
</div>
</div>

<div className="max-w-6xl mx-auto mt-20 relative">
<div className="absolute inset-0 bg-gradient-to-t from-[#213b97] via-transparent to-transparent z-10 rounded-3xl"></div>
<div className="relative bg-black/20 border border-white/5 rounded-t-3xl overflow-hidden p-2 backdrop-blur-sm">
<div className="bg-[#1a2f7c]/50 rounded-2xl border border-white/5 h-[40vh] md:h-[60vh] w-full flex items-center justify-center relative overflow-hidden">

<div className="absolute top-6 left-6 right-6 flex gap-4">
<div className="h-8 w-32 bg-white/5 rounded-lg"></div>
<div className="h-8 w-24 bg-white/5 rounded-lg"></div>
<div className="h-8 w-8 bg-[#febd17]/20 rounded-lg ml-auto"></div>
</div>
<div className="absolute left-6 top-20 bottom-6 w-64 bg-white/5 rounded-xl hidden md:block"></div>
<div className="absolute left-6 md:left-72 right-6 top-20 bottom-6 bg-gradient-to-br from-white/5 to-transparent rounded-xl border border-white/5 p-6">
<div className="flex gap-4 mb-6">
<div className="h-24 flex-1 bg-white/5 rounded-lg border border-white/5 relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#febd17]/20 to-transparent"></div>
</div>
<div className="h-24 flex-1 bg-white/5 rounded-lg border border-white/5"></div>
<div className="h-24 flex-1 bg-white/5 rounded-lg border border-white/5"></div>
</div>
<div className="h-48 w-full bg-white/5 rounded-lg border border-white/5"></div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-black/10 backdrop-blur-md relative z-20" id="metrics">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
<div className="text-center px-4">
<p className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-2">99<span className="text-[#febd17]">%</span></p>
<p className="text-xs text-gray-400 uppercase tracking-widest font-medium">Uptime SLA</p>
</div>
<div className="text-center px-4">
<p className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-2">2<span className="text-[#febd17]">M+</span></p>
<p className="text-xs text-gray-400 uppercase tracking-widest font-medium">Active Users</p>
</div>
<div className="text-center px-4">
<p className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-2">10<span className="text-[#febd17]">x</span></p>
<p className="text-xs text-gray-400 uppercase tracking-widest font-medium">Faster Delivery</p>
</div>
<div className="text-center px-4">
<p className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-2">24<span className="text-[#febd17]">/</span>7</p>
<p className="text-xs text-gray-400 uppercase tracking-widest font-medium">Expert Support</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 relative" id="features">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Engineered for performance</h2>
<p className="text-base text-gray-400 font-light">Everything you need to manage your infrastructure, seamlessly integrated into one powerful platform.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-black/20 border border-white/5 rounded-3xl p-8 hover:bg-black/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#febd17] opacity-0 group-hover:opacity-[0.05] blur-[40px] transition-opacity duration-500 rounded-full"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#febd17]">
<iconify-icon className="text-2xl" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Lightning Fast</h3>
<p className="text-sm text-gray-400 font-light leading-relaxed">Deployed on global edge networks to ensure your data reaches your users instantly, anywhere in the world.</p>
</div>

<div className="group bg-black/20 border border-white/5 rounded-3xl p-8 hover:bg-black/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#febd17] opacity-0 group-hover:opacity-[0.05] blur-[40px] transition-opacity duration-500 rounded-full"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#febd17]">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Enterprise Security</h3>
<p className="text-sm text-gray-400 font-light leading-relaxed">Bank-grade encryption, role-based access control, and continuous compliance monitoring out of the box.</p>
</div>

<div className="group bg-black/20 border border-white/5 rounded-3xl p-8 hover:bg-black/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#febd17] opacity-0 group-hover:opacity-[0.05] blur-[40px] transition-opacity duration-500 rounded-full"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#febd17]">
<iconify-icon className="text-2xl" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Real-time Analytics</h3>
<p className="text-sm text-gray-400 font-light leading-relaxed">Gain deep insights with customizable dashboards, automated reporting, and predictive modeling.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 overflow-hidden" id="solutions">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

<div className="flex-1 space-y-8">
<div className="inline-flex items-center gap-2 text-[#febd17] text-xs font-medium uppercase tracking-widest">
<iconify-icon className="text-lg" icon="solar:code-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Developer First
                    </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                        Integrate seamlessly with your existing stack.
                    </h2>
<p className="text-base text-gray-400 font-light leading-relaxed">
                        Our robust API and comprehensive SDKs mean you spend less time configuring and more time shipping. We play nice with the tools you already use.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-[#febd17] text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            REST and GraphQL APIs
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-[#febd17] text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Webhooks for real-time events
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-[#febd17] text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            SDKs for Node, Python, and Go
                        </li>
</ul>
</div>

<div className="flex-1 w-full lg:w-auto relative">
<div className="absolute -inset-4 bg-[#febd17] opacity-[0.03] blur-2xl rounded-full"></div>
<div className="relative bg-[#0d1840] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">

<div className="flex items-center px-4 py-3 border-b border-white/5 bg-black/20">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-white/20"></div>
<div className="w-3 h-3 rounded-full bg-white/20"></div>
<div className="w-3 h-3 rounded-full bg-white/20"></div>
</div>
<div className="mx-auto text-xs text-gray-500 font-mono">api.js</div>
</div>

<div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
<span className="text-pink-400">import</span> { Nexus } <span className="text-pink-400">from</span> <span className="text-green-300">'@nexus/sdk'</span>;<br/><br/>
<span className="text-pink-400">const</span> client = <span className="text-pink-400">new</span> Nexus({<br/>
                              apiKey: process.env.<span className="text-[#febd17]">NEXUS_KEY</span>,<br/>
                              environment: <span className="text-green-300">'production'</span><br/>
                            });<br/><br/>
<span className="text-gray-500">// Initialize connection</span><br/>
<span className="text-pink-400">await</span> client.connect();<br/>
<span className="text-blue-300">console</span>.log(<span className="text-green-300">'Connected successfully'</span>);
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="bg-gradient-to-br from-black/20 to-transparent border border-white/5 rounded-3xl p-10 md:p-16 relative overflow-hidden">

<iconify-icon className="absolute -top-6 -right-6 text-9xl text-white/[0.02]" icon="solar:quote-right-bold"></iconify-icon>
<div className="max-w-3xl relative z-10">
<div className="flex gap-1 mb-8 text-[#febd17]">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<h3 className="text-2xl md:text-4xl font-medium tracking-tight text-white mb-8 leading-snug">
                        "Switching to Nexus was the best infrastructure decision we made this year. Deployment times dropped by 80% and the dashboard provides clarity we never had before."
                    </h3>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#febd17] to-[#e0a714] p-[2px]">
<div className="w-full h-full rounded-full bg-[#213b97] flex items-center justify-center text-xs font-medium text-white">
                                SJ
                            </div>
</div>
<div>
<p className="text-sm font-medium text-white">Sarah Jenkins</p>
<p className="text-xs text-gray-400">CTO at TechFlow</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a2f7c]/50 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6">
                Ready to transform your workflow?
            </h2>
<p className="text-lg text-gray-400 font-light mb-10 max-w-xl mx-auto">
                Join thousands of forward-thinking companies building the future on our platform. Get started for free today.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-[#febd17] text-[#213b97] text-sm font-medium rounded-full hover:bg-white hover:scale-105 transition-all duration-300" href="#">
                    Create Free Account
                </a>
<a className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-all duration-300" href="#">
                    Contact Sales
                </a>
</div>
<p className="mt-6 text-xs text-gray-500 font-medium">No credit card required • 14-day free trial on Pro plans</p>
</div>
</section>

<footer className="border-t border-white/5 bg-black/20 pt-20 pb-10 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-xl tracking-tighter font-medium text-white flex items-center gap-1 mb-4" href="#">
                    NEXUS<span className="text-[#febd17]">.</span>
</a>
<p className="text-sm text-gray-400 font-light max-w-xs mb-6">
                    Building the foundational infrastructure for the next generation of internet businesses.
                </p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-[#febd17] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:twitter-bold"></iconify-icon></a>
<a className="text-gray-400 hover:text-[#febd17] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:github-bold"></iconify-icon></a>
<a className="text-gray-400 hover:text-[#febd17] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:figma-bold"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4 tracking-tight">Product</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4 tracking-tight">Resources</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">API Reference</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Community</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4 tracking-tight">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">About</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Customers</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-500 font-medium">© 2024 Nexus Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
