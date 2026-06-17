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



        document.addEventListener('DOMContentLoaded', () => {
            const reveals = document.querySelectorAll('.reveal');
            
            const revealOnScroll = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optional: stop observing once revealed
                        // observer.unobserve(entry.target); 
                    }
                });
            }, {
                root: null,
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            });

            reveals.forEach(reveal => {
                revealOnScroll.observe(reveal);
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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#D8D8D8] transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-medium tracking-tighter flex items-center gap-1 btn-focus rounded-sm" href="#">
                    WF.
                </a>
<div className="hidden md:flex items-center gap-6 text-sm text-[#5A5A5A]">
<a className="hover:text-[#080808] transition-colors btn-focus rounded-sm" href="#">Platform</a>
<a className="hover:text-[#080808] transition-colors btn-focus rounded-sm" href="#">Solutions</a>
<a className="hover:text-[#080808] transition-colors btn-focus rounded-sm" href="#">Resources</a>
<a className="hover:text-[#080808] transition-colors btn-focus rounded-sm" href="#">Enterprise</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm text-[#5A5A5A] hover:text-[#080808] transition-colors btn-focus rounded-sm" href="#">Log in</a>
<a className="group flex items-center gap-2 bg-[#146EF5] text-white text-sm font-normal py-2 px-4 rounded transition-transform hover:scale-[1.02] active:scale-95 btn-focus" href="#">
<span>Contact Sales</span>
<iconify-icon className="text-white transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</nav>
<main className="pt-16">

<section className="relative min-h-[80vh] flex items-center justify-center px-6 py-24 overflow-hidden">
<div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(20,110,245,0.05)_0%,transparent_70%)]"></div>
<div className="max-w-5xl mx-auto text-center relative z-10 reveal">
<span className="inline-block mb-6 text-xs font-normal uppercase tracking-widest text-[#5A5A5A] border border-[#D8D8D8] rounded-full py-1.5 px-4 bg-white/50 backdrop-blur-sm shadow-sm">
                    The Platform for visual development
                </span>
<h1 className="text-5xl md:text-7xl lg:text-[5rem] font-medium tracking-tighter leading-[1.04] text-balance mb-8">
                    Build with the power of code. <br className="hidden md:block text-[#D8D8D8]"/> Without writing any.
                </h1>
<p className="text-lg md:text-xl text-[#5A5A5A] max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    Empower your marketing, engineering, and design teams to create high-performing digital experiences faster than ever before.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-[#146EF5] text-white text-sm font-normal py-3 px-6 rounded transition-all hover:bg-blue-600 shadow-sm btn-focus" href="#">
<span>Start building free</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-[#D8D8D8] text-[#080808] text-sm font-normal py-3 px-6 rounded transition-colors hover:bg-[#F0F0F0] btn-focus" href="#">
                        Explore features
                    </a>
</div>
</div>
</section>

<section className="py-12 border-y border-[#D8D8D8] bg-[#F0F0F0]/50 overflow-hidden reveal flex flex-col justify-center">
<p className="text-center text-xs font-medium text-[#5A5A5A] mb-8 uppercase tracking-widest">Trusted by innovative teams worldwide</p>
<div className="marquee-container w-full relative flex overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

<div className="animate-marquee flex items-center gap-16 pr-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<img alt="Discord" className="h-6 w-auto" src="https://dhygzobemt712.cloudfront.net/Web/logos/dark/discord.svg"/>
<img alt="DocuSign" className="h-6 w-auto" src="https://dhygzobemt712.cloudfront.net/Web/logos/dark/docusign.svg"/>
<img alt="IDEO" className="h-6 w-auto" src="https://dhygzobemt712.cloudfront.net/Web/logos/dark/ideo.svg"/>
<img alt="Lattice" className="h-6 w-auto" src="https://dhygzobemt712.cloudfront.net/Web/logos/dark/lattice.svg"/>
<img alt="NYT" className="h-6 w-auto" src="https://dhygzobemt712.cloudfront.net/Web/logos/dark/the-new-york-times.svg"/>
<img alt="Upwork" className="h-6 w-auto" src="https://dhygzobemt712.cloudfront.net/Web/logos/dark/upwork.svg"/>
<img alt="ABM" className="h-6 w-auto" src="https://dhygzobemt712.cloudfront.net/Web/logos/dark/abm.svg"/>
</div>

<div aria-hidden="true" className="animate-marquee flex items-center gap-16 pr-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<img alt="Discord" className="h-6 w-auto" src="https://dhygzobemt712.cloudfront.net/Web/logos/dark/discord.svg"/>
<img alt="DocuSign" className="h-6 w-auto" src="https://dhygzobemt712.cloudfront.net/Web/logos/dark/docusign.svg"/>
<img alt="IDEO" className="h-6 w-auto" src="https://dhygzobemt712.cloudfront.net/Web/logos/dark/ideo.svg"/>
<img alt="Lattice" className="h-6 w-auto" src="https://dhygzobemt712.cloudfront.net/Web/logos/dark/lattice.svg"/>
<img alt="NYT" className="h-6 w-auto" src="https://dhygzobemt712.cloudfront.net/Web/logos/dark/the-new-york-times.svg"/>
<img alt="Upwork" className="h-6 w-auto" src="https://dhygzobemt712.cloudfront.net/Web/logos/dark/upwork.svg"/>
<img alt="ABM" className="h-6 w-auto" src="https://dhygzobemt712.cloudfront.net/Web/logos/dark/abm.svg"/>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#080808] text-[#FFFFFF] relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#146EF5] opacity-20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="mb-16 md:w-2/3 reveal">
<span className="text-xs font-normal uppercase tracking-widest text-[#D8D8D8]/70 flex items-center gap-2 mb-4">
<iconify-icon className="text-[#ED52CB] text-base" icon="solar:stars-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        AI Assistant
                    </span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.04] mb-6 text-balance">
                        Generate, manage, and scale with intelligent automation.
                    </h2>
<p className="text-lg text-[#D8D8D8]/80 font-light max-w-xl">
                        Leverage embedded AI to translate prompts into production-ready interfaces, generate contextual copy, and maintain design systems effortlessly.
                    </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full reveal">

<div className="lg:col-span-8 fluted-glass rounded-2xl p-2 h-full min-h-[400px] flex flex-col justify-between group cursor-pointer transition-transform hover:-translate-y-1 duration-500">
<div className="p-6 relative z-10">
<h3 className="text-xl font-medium tracking-tight mb-2">Generative Component Generation</h3>
<p className="text-sm text-[#D8D8D8]/60 font-light">Describe what you need, and the AI builds it using your existing design tokens.</p>
</div>
<div className="relative w-full h-[300px] md:h-[400px] mt-4 rounded-xl overflow-hidden bg-[#080808] border border-white/5">
<img alt="AI Generation Interface" className="object-cover object-top w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/6967fb0699227bfe72e90cf5_ai-ui_generate-webflow-mcp.avif"/>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-full py-3 px-5 flex items-center gap-3 shadow-2xl">
<iconify-icon className="text-white/70" icon="solar:pen-new-round-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs text-white/90 font-light truncate">"Create a 3-column pricing section with highlight..."</span>
<div className="ml-auto bg-white text-black rounded-full p-1.5 flex items-center justify-center">
<iconify-icon icon="solar:arrow-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 fluted-glass rounded-2xl p-2 h-full min-h-[400px] flex flex-col group cursor-pointer transition-transform hover:-translate-y-1 duration-500 delay-100">
<div className="p-6 relative z-10">
<h3 className="text-xl font-medium tracking-tight mb-2">Automated Management</h3>
<p className="text-sm text-[#D8D8D8]/60 font-light">Keep classes and variables organized automatically.</p>
</div>
<div className="relative w-full flex-grow mt-auto rounded-xl overflow-hidden bg-[#080808] border border-white/5">
<img alt="AI Management View" className="object-cover object-center w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500" src="https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68c63381f6811a2b551391f0_e3cc7a1e5ff8216b9b9f990cdbea2567_home_ai-module_manage.webp"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#F0F0F0] relative">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

<div className="lg:col-span-4 relative">
<div className="sticky top-32 reveal">
<span className="text-xs font-normal uppercase tracking-widest text-[#146EF5] flex items-center gap-2 mb-4 font-medium">
<iconify-icon className="text-lg" icon="solar:code-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Engineering Teams
                            </span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.04] mb-6">
                                Built for absolute velocity.
                            </h2>
<p className="text-base text-[#5A5A5A] font-light mb-8">
                                Connect your visual canvases directly to your backend. Sync components with React, export clean code, and maintain complete control over the technical architecture without slowing down marketing.
                            </p>
<div className="flex flex-col gap-4 border-l border-[#D8D8D8] pl-4 mb-8">
<div className="group cursor-pointer">
<h4 className="text-sm font-medium mb-1 group-hover:text-[#146EF5] transition-colors">Component Sync</h4>
<p className="text-xs text-[#5A5A5A]">Bidirectional sync with your React repositories.</p>
</div>
<div className="group cursor-pointer">
<h4 className="text-sm font-medium mb-1 group-hover:text-[#146EF5] transition-colors">Headless Architecture</h4>
<p className="text-xs text-[#5A5A5A]">Consume layouts via APIs for any frontend.</p>
</div>
<div className="group cursor-pointer">
<h4 className="text-sm font-medium mb-1 group-hover:text-[#146EF5] transition-colors">Custom Code</h4>
<p className="text-xs text-[#5A5A5A]">Inject complex logic securely when needed.</p>
</div>
</div>
<a className="group inline-flex items-center gap-2 text-sm font-medium text-[#146EF5] hover:text-blue-700 transition-colors btn-focus rounded-sm" href="#">
                                Read developer docs
                                <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>

<div className="lg:col-span-8 flex flex-col gap-8 md:gap-16">
<div className="reveal rounded-2xl overflow-hidden bg-white border border-[#D8D8D8] shadow-sm transform transition-all duration-700 hover:-translate-y-2 hover:shadow-md">
<div className="p-4 border-b border-[#D8D8D8] flex items-center justify-between bg-white/50">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-[#D8D8D8]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#D8D8D8]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#D8D8D8]"></div>
</div>
<span className="text-xs text-[#5A5A5A] font-mono">Scale Architecture</span>
</div>
<img alt="Engineering Scale Asset" className="w-full object-cover" src="https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b9af7b1b7fa62454f0d433_home_engineering-teams_scale-asset-1.webp"/>
</div>
<div className="reveal rounded-2xl overflow-hidden bg-white border border-[#D8D8D8] shadow-sm transform transition-all duration-700 hover:-translate-y-2 hover:shadow-md">
<div className="p-4 border-b border-[#D8D8D8] flex items-center justify-between bg-white/50">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-[#D8D8D8]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#D8D8D8]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#D8D8D8]"></div>
</div>
<span className="text-xs text-[#5A5A5A] font-mono">Data Integrations</span>
</div>
<img alt="Engineering Integration Asset" className="w-full object-cover bg-gray-50" src="https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b9db37e24f32b1ca018c98_2dee5d6aad5e282a6794932a58ed9885_home_engineering-teams_integration-group.webp"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden bg-white border-t border-[#D8D8D8]">
<div className="max-w-3xl relative z-10 reveal">
<img alt="Blank Canvas" className="w-24 h-24 mx-auto mb-8 opacity-80" src="https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/6904db1cabdf76211061ba36_creation-thumbnail_blank.svg"/>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-balance">
                    Start with a blank canvas, <br/> finish with a masterpiece.
                </h2>
<p className="text-base text-[#5A5A5A] font-light mb-10 max-w-xl mx-auto">
                    The precision of code combined with the freedom of a visual interface. Design layouts structurally, define variables globally, and let the platform handle the complexities of rendering.
                </p>
<button className="group inline-flex items-center gap-3 bg-[#080808] text-white text-sm font-normal py-3.5 px-8 rounded-full transition-all hover:bg-gray-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5 btn-focus">
                    Start building
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-colors group-hover:bg-white/30">
<iconify-icon className="text-white" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</button>
</div>

<img alt="Cursor" className="absolute top-1/4 right-1/4 w-12 h-12 opacity-50 animate-bounce pointer-events-none hidden md:block" src="https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/6904ede6fe836900bb0ce7d9_grab-cursor.svg"/>
</section>
</main>

<footer className="bg-[#080808] text-white pt-24 pb-12 px-6 border-t border-white/10">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-24">
<div className="col-span-2 lg:col-span-2">
<a className="text-2xl font-medium tracking-tighter block mb-6 btn-focus rounded-sm inline-block" href="#">WF.</a>
<p className="text-xs text-[#D8D8D8]/60 font-light max-w-xs mb-6">
                        The visual development platform for ambitious teams building the future of the web.
                    </p>
<div className="flex items-center gap-4 text-[#D8D8D8]/60">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:twitter-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:github-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:figma-linear"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-6 tracking-wide">Product</h4>
<ul className="flex flex-col gap-3 text-xs text-[#D8D8D8]/60 font-light">
<li><a className="hover:text-white transition-colors btn-focus rounded-sm" href="#">Designer</a></li>
<li><a className="hover:text-white transition-colors btn-focus rounded-sm" href="#">CMS</a></li>
<li><a className="hover:text-white transition-colors btn-focus rounded-sm" href="#">Interactions</a></li>
<li><a className="hover:text-white transition-colors btn-focus rounded-sm" href="#">SEO</a></li>
<li><a className="hover:text-white transition-colors btn-focus rounded-sm" href="#">AI Assistant</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-6 tracking-wide">Solutions</h4>
<ul className="flex flex-col gap-3 text-xs text-[#D8D8D8]/60 font-light">
<li><a className="hover:text-white transition-colors btn-focus rounded-sm" href="#">Marketing</a></li>
<li><a className="hover:text-white transition-colors btn-focus rounded-sm" href="#">Engineering</a></li>
<li><a className="hover:text-white transition-colors btn-focus rounded-sm" href="#">Design</a></li>
<li><a className="hover:text-white transition-colors btn-focus rounded-sm" href="#">Agencies</a></li>
<li><a className="hover:text-white transition-colors btn-focus rounded-sm" href="#">Enterprise</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-6 tracking-wide">Resources</h4>
<ul className="flex flex-col gap-3 text-xs text-[#D8D8D8]/60 font-light">
<li><a className="hover:text-white transition-colors btn-focus rounded-sm" href="#">University</a></li>
<li><a className="hover:text-white transition-colors btn-focus rounded-sm" href="#">Templates</a></li>
<li><a className="hover:text-white transition-colors btn-focus rounded-sm" href="#">Experts</a></li>
<li><a className="hover:text-white transition-colors btn-focus rounded-sm" href="#">Community</a></li>
<li><a className="hover:text-white transition-colors btn-focus rounded-sm" href="#">Blog</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-[#D8D8D8]/40 font-light">
<p>© 2024 Visual Platform Inc. All rights reserved.</p>
<div className="flex items-center gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors btn-focus rounded-sm" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors btn-focus rounded-sm" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors btn-focus rounded-sm" href="#">Cookie Settings</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
