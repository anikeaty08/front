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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
background: '#030303',
surface: '#0A0A0A',
border: '#1F1F1F',
}
}
}
}



        function switchTab(tabId) {
            // Remove active class from all contents and buttons
            document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
            document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));

            // Add active class to selected
            document.getElementById('tab-' + tabId).classList.add('active');
            document.getElementById('btn-' + tabId).classList.add('active');
        }
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-white" href="#">KORIX</a>
<div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
<a className="hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#pricing">Plans</a>
<a className="bg-white text-black px-4 py-2 rounded text-xs font-medium hover:bg-zinc-200 transition-colors" href="#">Start Project</a>
</div>
<button className="md:hidden text-white">
<span className="iconify" data-icon="lucide:menu" data-width="1.5"></span>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Accepting new enterprise partners
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                Software solutions <br className="hidden md:block"/>
<span className="text-zinc-500">engineered for growth.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                We build the bespoke technology stack your business needs to scale. Focus on your vision while we handle the complexity of engineering, security, and performance.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-black text-sm font-medium rounded hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="#contact">
                    Build with Korix
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="1.5"></span>
</a>
<a className="w-full sm:w-auto px-8 py-3 border border-zinc-800 text-zinc-300 text-sm font-medium rounded hover:bg-zinc-900 transition-colors" href="#solutions">
                    Explore Solutions
                </a>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-zinc-900/20 py-12">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs text-zinc-500 uppercase tracking-widest mb-8">Trusted by forward-thinking teams</p>
<div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center opacity-40 grayscale">

<span className="text-lg font-bold tracking-tight text-white">ACME</span>
<span className="text-lg font-bold tracking-tight text-white">NEXUS</span>
<span className="text-lg font-bold tracking-tight text-white">STRATOS</span>
<span className="text-lg font-bold tracking-tight text-white">VERTEX</span>
<span className="text-lg font-bold tracking-tight text-white">ORBIT</span>
<span className="text-lg font-bold tracking-tight text-white">PULSE</span>
</div>
</div>
</section>

<section className="py-24 bg-background">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass p-6 rounded-xl hover:border-zinc-700 transition-colors duration-300">
<div className="w-10 h-10 rounded bg-zinc-900 flex items-center justify-center border border-white/10 mb-4 text-white">
<span className="iconify" data-icon="lucide:zap" data-width="1.5"></span>
</div>
<h3 className="text-white font-medium mb-2">High Performance</h3>
<p className="text-sm text-zinc-400">Optimized for speed. Every millisecond counts in user retention.</p>
</div>

<div className="glass p-6 rounded-xl hover:border-zinc-700 transition-colors duration-300">
<div className="w-10 h-10 rounded bg-zinc-900 flex items-center justify-center border border-white/10 mb-4 text-white">
<span className="iconify" data-icon="lucide:layers" data-width="1.5"></span>
</div>
<h3 className="text-white font-medium mb-2">Global Scalability</h3>
<p className="text-sm text-zinc-400">Systems architected to grow with you, from 100 to 1M+ users.</p>
</div>

<div className="glass p-6 rounded-xl hover:border-zinc-700 transition-colors duration-300">
<div className="w-10 h-10 rounded bg-zinc-900 flex items-center justify-center border border-white/10 mb-4 text-white">
<span className="iconify" data-icon="lucide:shield-check" data-width="1.5"></span>
</div>
<h3 className="text-white font-medium mb-2">Total Reliability</h3>
<p className="text-sm text-zinc-400">Enterprise-grade security and 99.99% uptime guarantee.</p>
</div>

<div className="glass p-6 rounded-xl hover:border-zinc-700 transition-colors duration-300">
<div className="w-10 h-10 rounded bg-zinc-900 flex items-center justify-center border border-white/10 mb-4 text-white">
<span className="iconify" data-icon="lucide:code-2" data-width="1.5"></span>
</div>
<h3 className="text-white font-medium mb-2">Modern DX</h3>
<p className="text-sm text-zinc-400">Clean, maintainable codebases that your internal team will love.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Our Expertise</h2>
<p className="text-zinc-400 max-w-xl">We don't just write code. We design ecosystems. Select a domain to see how we approach complex challenges.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-5 flex flex-col gap-2">
<button className="tab-btn active text-left p-6 rounded-lg hover:bg-white/5 group" id="btn-engineering" onclick="switchTab('engineering')">
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-indigo-400 transition-colors">Custom Engineering</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Full-cycle development from architectural design to deployment. We build robust backends and reactive frontends.</p>
</button>
<button className="tab-btn text-left p-6 rounded-lg hover:bg-white/5 group" id="btn-design" onclick="switchTab('design')">
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-pink-400 transition-colors">Product Design</h3>
<p className="text-sm text-zinc-400 leading-relaxed">User-centric interfaces that convert. We merge aesthetics with functionality to create seamless experiences.</p>
</button>
<button className="tab-btn text-left p-6 rounded-lg hover:bg-white/5 group" id="btn-systems" onclick="switchTab('systems')">
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-emerald-400 transition-colors">Infrastructure &amp; Cloud</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Serverless, containerized, and distributed systems designed for resilience and cost-efficiency.</p>
</button>
</div>

<div className="lg:col-span-7 relative h-[400px] md:h-[500px] bg-zinc-900 rounded-2xl border border-white/10 overflow-hidden">

<div className="tab-content active w-full h-full relative" id="tab-engineering">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 to-transparent"></div>
<img alt="Code" className="w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-8 left-8 right-8">
<div className="bg-black/50 backdrop-blur-md p-4 rounded-lg border border-white/10 inline-flex items-center gap-4">
<span className="text-indigo-400"><span className="iconify" data-icon="lucide:terminal" data-width="1.5"></span></span>
<span className="text-sm text-white font-mono">git push origin production</span>
</div>
</div>
</div>

<div className="tab-content w-full h-full relative" id="tab-design">
<div className="absolute inset-0 bg-gradient-to-tr from-pink-900/20 to-transparent"></div>
<img alt="Design" className="w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-8 left-8 right-8">
<div className="bg-black/50 backdrop-blur-md p-4 rounded-lg border border-white/10 inline-flex items-center gap-4">
<span className="text-pink-400"><span className="iconify" data-icon="lucide:pen-tool" data-width="1.5"></span></span>
<span className="text-sm text-white">Pixel-perfect interactions</span>
</div>
</div>
</div>

<div className="tab-content w-full h-full relative" id="tab-systems">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 to-transparent"></div>
<img alt="Server" className="w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-8 left-8 right-8">
<div className="bg-black/50 backdrop-blur-md p-4 rounded-lg border border-white/10 inline-flex items-center gap-4">
<span className="text-emerald-400"><span className="iconify" data-icon="lucide:network" data-width="1.5"></span></span>
<span className="text-sm text-white">99.99% Uptime Monitored</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">
                        We listen, we understand, <br/> then we deliver.
                    </h2>
<p className="text-zinc-400 leading-relaxed mb-8">
                        Too many agencies rush to code. At Korix, we start by deconstructing your business goals. We believe the right software solution is one that solves a problem, not one that creates new ones. We operate as an extension of your team, providing transparency at every sprint.
                    </p>
<a className="text-white text-sm font-medium border-b border-white hover:border-transparent transition-all" href="#">Read our manifesto</a>
</div>
<div className="space-y-4">

<div className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700 text-white shrink-0">
<span className="iconify" data-height="12" data-icon="lucide:check" data-width="1.5"></span>
</div>
<div>
<h4 className="text-white text-sm font-medium">Cost Efficiency</h4>
<p className="text-zinc-500 text-sm mt-1">Modular architecture reduces long-term maintenance costs.</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700 text-white shrink-0">
<span className="iconify" data-height="12" data-icon="lucide:check" data-width="1.5"></span>
</div>
<div>
<h4 className="text-white text-sm font-medium">Productivity Focus</h4>
<p className="text-zinc-500 text-sm mt-1">Tools built to automate workflows and reduce manual input.</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700 text-white shrink-0">
<span className="iconify" data-height="12" data-icon="lucide:check" data-width="1.5"></span>
</div>
<div>
<h4 className="text-white text-sm font-medium">Advanced Reporting</h4>
<p className="text-zinc-500 text-sm mt-1">Data-driven dashboards that provide actionable insights.</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700 text-white shrink-0">
<span className="iconify" data-height="12" data-icon="lucide:check" data-width="1.5"></span>
</div>
<div>
<h4 className="text-white text-sm font-medium">Future-Proof Scalability</h4>
<p className="text-zinc-500 text-sm mt-1">Built on stacks that are widely supported and scalable.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="relative rounded-2xl overflow-hidden border border-white/10 h-[400px]">
<img alt="Team working" className="absolute inset-0 w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6">
<div className="bg-black/60 backdrop-blur border border-white/10 px-4 py-2 rounded-lg text-xs text-white">
                            Partner with Korix
                        </div>
</div>
</div>
<div className="pl-0 lg:pl-10">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Not just a vendor. <br/> A long-term partner.</h2>
<p className="text-zinc-400 mb-8 leading-relaxed">
                        Software doesn't stop when it's shipped. We provide ongoing support, iterations, and strategic advice to ensure your technology evolves with your market.
                    </p>
<div className="flex flex-wrap gap-3">
<span className="px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-medium flex items-center gap-2">
<span className="iconify text-indigo-400" data-icon="lucide:plus" data-width="1.5"></span> Fast Delivery
                        </span>
<span className="px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-medium flex items-center gap-2">
<span className="iconify text-indigo-400" data-icon="lucide:plus" data-width="1.5"></span> Expert Team
                        </span>
<span className="px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-medium flex items-center gap-2">
<span className="iconify text-indigo-400" data-icon="lucide:plus" data-width="1.5"></span> Flexible Solutions
                        </span>
<span className="px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-medium flex items-center gap-2">
<span className="iconify text-indigo-400" data-icon="lucide:plus" data-width="1.5"></span> Dedicated Support
                        </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/10">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-center text-3xl font-semibold text-white tracking-tight mb-16">Who we work with</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass p-8 rounded-xl border border-white/5 flex flex-col h-full">
<div className="mb-4 text-white"><span className="iconify" data-height="24" data-icon="lucide:rocket" data-width="24"></span></div>
<h3 className="text-lg font-medium text-white mb-3">Startups &amp; Scale-ups</h3>
<p className="text-sm text-zinc-400 leading-relaxed flex-grow">
                        We help founders validate ideas quickly with MVP development and scale architecture as user bases grow exponentially. Speed and agility are our priority here.
                    </p>
</div>

<div className="glass p-8 rounded-xl border border-white/5 flex flex-col h-full">
<div className="mb-4 text-white"><span className="iconify" data-height="24" data-icon="lucide:landmark" data-width="24"></span></div>
<h3 className="text-lg font-medium text-white mb-3">Public Institutions</h3>
<p className="text-sm text-zinc-400 leading-relaxed flex-grow">
                        Secure, compliant, and accessible digital services. We modernize legacy systems to improve citizen engagement and operational efficiency securely.
                    </p>
</div>

<div className="glass p-8 rounded-xl border border-white/5 flex flex-col h-full">
<div className="mb-4 text-white"><span className="iconify" data-height="24" data-icon="lucide:briefcase" data-width="24"></span></div>
<h3 className="text-lg font-medium text-white mb-3">Private &amp; Custom</h3>
<p className="text-sm text-zinc-400 leading-relaxed flex-grow">
                        Bespoke internal tools for private enterprises. Whether it's supply chain management or data visualization, we build exactly what you need.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Manage from anywhere</h2>
<p className="text-zinc-400 max-w-2xl mx-auto mb-16">
                Our solutions are cloud-native and responsive by design. Access your dashboards, data, and tools securely from any device.
            </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
<div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:smartphone" data-width="1.5"></span>
</div>
<h3 className="text-white text-sm font-medium">Mobile</h3>
</div>
<div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:tablet" data-width="1.5"></span>
</div>
<h3 className="text-white text-sm font-medium">Tablet</h3>
</div>
<div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:laptop" data-width="1.5"></span>
</div>
<h3 className="text-white text-sm font-medium">Laptop</h3>
</div>
</div>
</div>
</section>

<section className="py-24 bg-background" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Flexible Engagement Models</h2>
<p className="text-zinc-400">Choose the level of support that fits your stage.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl border border-white/10 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
<h3 className="text-lg font-medium text-white">Discovery</h3>
<div className="mt-2 mb-6 text-3xl font-semibold text-white">Free</div>
<p className="text-xs text-zinc-500 mb-8 h-10">Initial consultation and basic roadmap planning for startups.</p>
<a className="block w-full py-2 rounded border border-white/10 text-center text-sm text-white hover:bg-white/5 transition-colors mb-8" href="#">Get Started</a>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-xs text-zinc-300"><span className="text-white iconify" data-icon="lucide:check"></span> Requirement Analysis</li>
<li className="flex items-center gap-3 text-xs text-zinc-300"><span className="text-white iconify" data-icon="lucide:check"></span> Basic Prototyping</li>
<li className="flex items-center gap-3 text-xs text-zinc-500 line-through"><span className="text-zinc-700 iconify" data-icon="lucide:x"></span> Dedicated PM</li>
<li className="flex items-center gap-3 text-xs text-zinc-500 line-through"><span className="text-zinc-700 iconify" data-icon="lucide:x"></span> 24/7 Support</li>
<li className="flex items-center gap-3 text-xs text-zinc-500 line-through"><span className="text-zinc-700 iconify" data-icon="lucide:x"></span> SLA Guarantee</li>
<li className="flex items-center gap-3 text-xs text-zinc-500 line-through"><span className="text-zinc-700 iconify" data-icon="lucide:x"></span> Custom DevOps</li>
<li className="flex items-center gap-3 text-xs text-zinc-500 line-through"><span className="text-zinc-700 iconify" data-icon="lucide:x"></span> On-premise Deploy</li>
<li className="flex items-center gap-3 text-xs text-zinc-500 line-through"><span className="text-zinc-700 iconify" data-icon="lucide:x"></span> Audit Logs</li>
<li className="flex items-center gap-3 text-xs text-zinc-500 line-through"><span className="text-zinc-700 iconify" data-icon="lucide:x"></span> Priority Queue</li>
<li className="flex items-center gap-3 text-xs text-zinc-500 line-through"><span className="text-zinc-700 iconify" data-icon="lucide:x"></span> Source Code Access</li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors relative">
<div className="absolute top-0 right-0 bg-indigo-600 text-[10px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg text-white">POPULAR</div>
<h3 className="text-lg font-medium text-white">Growth</h3>
<div className="mt-2 mb-6 text-3xl font-semibold text-white">$$$</div>
<p className="text-xs text-zinc-500 mb-8 h-10">Full-stack development for scaling businesses.</p>
<a className="block w-full py-2 rounded bg-white text-black text-center text-sm font-medium hover:bg-zinc-200 transition-colors mb-8" href="#">Contact Us</a>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-xs text-zinc-300"><span className="text-indigo-400 iconify" data-icon="lucide:check"></span> Requirement Analysis</li>
<li className="flex items-center gap-3 text-xs text-zinc-300"><span className="text-indigo-400 iconify" data-icon="lucide:check"></span> Basic Prototyping</li>
<li className="flex items-center gap-3 text-xs text-zinc-300"><span className="text-indigo-400 iconify" data-icon="lucide:check"></span> Dedicated PM</li>
<li className="flex items-center gap-3 text-xs text-zinc-300"><span className="text-indigo-400 iconify" data-icon="lucide:check"></span> 24/7 Support</li>
<li className="flex items-center gap-3 text-xs text-zinc-300"><span className="text-indigo-400 iconify" data-icon="lucide:check"></span> SLA Guarantee</li>
<li className="flex items-center gap-3 text-xs text-zinc-300"><span className="text-indigo-400 iconify" data-icon="lucide:check"></span> Custom DevOps</li>
<li className="flex items-center gap-3 text-xs text-zinc-500 line-through"><span className="text-zinc-700 iconify" data-icon="lucide:x"></span> On-premise Deploy</li>
<li className="flex items-center gap-3 text-xs text-zinc-500 line-through"><span className="text-zinc-700 iconify" data-icon="lucide:x"></span> Audit Logs</li>
<li className="flex items-center gap-3 text-xs text-zinc-500 line-through"><span className="text-zinc-700 iconify" data-icon="lucide:x"></span> Priority Queue</li>
<li className="flex items-center gap-3 text-xs text-zinc-500 line-through"><span className="text-zinc-700 iconify" data-icon="lucide:x"></span> Source Code Access</li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
<h3 className="text-lg font-medium text-white">Enterprise</h3>
<div className="mt-2 mb-6 text-3xl font-semibold text-white">Custom</div>
<p className="text-xs text-zinc-500 mb-8 h-10">Complex systems, private cloud, and total control.</p>
<a className="block w-full py-2 rounded border border-white/10 text-center text-sm text-white hover:bg-white/5 transition-colors mb-8" href="#">Talk to Sales</a>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-xs text-zinc-300"><span className="text-emerald-400 iconify" data-icon="lucide:check"></span> Requirement Analysis</li>
<li className="flex items-center gap-3 text-xs text-zinc-300"><span className="text-emerald-400 iconify" data-icon="lucide:check"></span> Basic Prototyping</li>
<li className="flex items-center gap-3 text-xs text-zinc-300"><span className="text-emerald-400 iconify" data-icon="lucide:check"></span> Dedicated PM</li>
<li className="flex items-center gap-3 text-xs text-zinc-300"><span className="text-emerald-400 iconify" data-icon="lucide:check"></span> 24/7 Support</li>
<li className="flex items-center gap-3 text-xs text-zinc-300"><span className="text-emerald-400 iconify" data-icon="lucide:check"></span> SLA Guarantee</li>
<li className="flex items-center gap-3 text-xs text-zinc-300"><span className="text-emerald-400 iconify" data-icon="lucide:check"></span> Custom DevOps</li>
<li className="flex items-center gap-3 text-xs text-zinc-300"><span className="text-emerald-400 iconify" data-icon="lucide:check"></span> On-premise Deploy</li>
<li className="flex items-center gap-3 text-xs text-zinc-300"><span className="text-emerald-400 iconify" data-icon="lucide:check"></span> Audit Logs</li>
<li className="flex items-center gap-3 text-xs text-zinc-300"><span className="text-emerald-400 iconify" data-icon="lucide:check"></span> Priority Queue</li>
<li className="flex items-center gap-3 text-xs text-zinc-300"><span className="text-emerald-400 iconify" data-icon="lucide:check"></span> Source Code Access</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-background to-background pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Ready to build the future?</h2>
<p className="text-zinc-400 text-lg mb-10">
                Stop wrestling with legacy code and off-the-shelf limitations. Let's engineer a solution that fits your vision perfectly.
            </p>
<div className="flex justify-center">
<a className="px-8 py-4 bg-white text-black font-medium rounded hover:bg-zinc-200 transition-colors text-sm" href="#">
                    Schedule a Consultation
                </a>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-zinc-950 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<span className="text-lg font-bold text-white tracking-tighter">KORIX</span>
<span className="text-zinc-600 text-sm">© 2024</span>
</div>
<div className="flex gap-8 text-sm text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
</footer>



    </>
  );
}
