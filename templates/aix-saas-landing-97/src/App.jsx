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
      

<nav className="fixed top-0 inset-x-0 h-14 border-b border-white/5 bg-zinc-950/70 backdrop-blur-md z-50 flex items-center">
<div className="container mx-auto px-6 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="text-xl font-medium tracking-tighter text-zinc-100" href="#">
                    AIX<span className="text-zinc-600">.</span>
</a>

<div className="hidden md:flex items-center gap-6">
<a className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors" href="#">Features</a>
<a className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors" href="#">Integration</a>
<a className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors" href="#">Pricing</a>
<a className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors" href="#">Docs</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm text-zinc-400 hover:text-zinc-100 transition-colors" href="#">Log in</a>
<a className="text-sm bg-zinc-100 text-zinc-950 px-4 py-1.5 rounded-full font-medium hover:bg-white transition-colors" href="#">
                    Get Started
                </a>
</div>
</div>
</nav>
<main>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-zinc-800/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="container mx-auto max-w-5xl text-center relative z-10">

<a className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-white/10 text-xs text-zinc-300 mb-8 hover:bg-zinc-900 transition-colors backdrop-blur-sm" href="#">
<iconify-icon className="text-zinc-400" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
<span>Introducing AIX 2.0 with semantic routing</span>
<iconify-icon className="text-zinc-500" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>

<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-100 leading-[1.1] max-w-4xl mx-auto mb-6">
                    Automate customer support with human-like intelligence
                </h1>

<p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Deploy conversational agents that understand context, resolve complex queries, and integrate seamlessly with your existing infrastructure.
                </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto text-sm bg-zinc-100 text-zinc-950 px-6 py-3 rounded-full font-medium hover:bg-white transition-colors flex items-center justify-center gap-2" href="#">
                        Start building for free
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto text-sm bg-transparent border border-white/10 text-zinc-300 px-6 py-3 rounded-full font-medium hover:bg-zinc-900 hover:text-zinc-100 transition-colors flex items-center justify-center gap-2" href="#">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                        View Demo
                    </a>
</div>
</div>

<div className="container mx-auto max-w-4xl mt-20 relative">

<div className="absolute -inset-0.5 bg-gradient-to-b from-zinc-700/50 to-transparent rounded-[20px] blur opacity-50"></div>
<div className="relative bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[450px]">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-zinc-900/20">
<div className="flex items-center gap-3">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</div>
<span className="text-xs font-medium text-zinc-300">AIX Assistant</span>
</div>
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
</div>
</div>

<div className="flex-1 p-6 overflow-y-auto space-y-6 bg-gradient-to-b from-zinc-950 to-zinc-900/20">

<div className="flex justify-end">
<div className="bg-zinc-800 text-zinc-200 text-sm px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[80%] border border-white/5 shadow-sm">
                                How do I authenticate users using the API?
                            </div>
</div>

<div className="flex gap-4 max-w-[90%]">
<div className="w-8 h-8 rounded-full border border-white/10 bg-zinc-900 flex items-center justify-center shrink-0 mt-1">
<span className="text-xs font-medium tracking-tighter text-zinc-400">AIX</span>
</div>
<div className="space-y-3">
<div className="text-sm text-zinc-300 leading-relaxed pt-1.5">
                                    You can authenticate requests by passing your API key in the <code className="bg-zinc-800/50 text-zinc-200 px-1.5 py-0.5 rounded border border-white/5 text-xs font-mono">Authorization</code> header. Here is a quick curl example:
                                </div>

<div className="bg-zinc-900 border border-white/10 rounded-xl overflow-hidden shadow-sm">
<div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-zinc-950/50">
<span className="text-xs text-zinc-500 font-mono">bash</span>
<iconify-icon className="text-zinc-500 hover:text-zinc-300 cursor-pointer" icon="solar:copy-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="p-4 text-xs font-mono text-zinc-300 overflow-x-auto leading-relaxed">
                                        curl -X POST https://api.aix.com/v1/chat \<br/>
                                          -H "Authorization: Bearer YOUR_API_KEY" \<br/>
                                          -H "Content-Type: application/json" \<br/>
                                          -d '{"message": "Hello"}'
                                    </div>
</div>
</div>
</div>

<div className="flex justify-end">
<div className="bg-zinc-800 text-zinc-200 text-sm px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[80%] border border-white/5 shadow-sm">
                                Perfect, that worked. Thanks!
                            </div>
</div>
</div>

<div className="p-4 bg-zinc-950 border-t border-white/5">
<div className="relative flex items-center">
<div className="w-full bg-zinc-900/50 border border-white/10 rounded-full py-2.5 pl-4 pr-10 text-sm text-zinc-500">
                                Ask anything...
                            </div>
<div className="absolute right-2 w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:arrow-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-zinc-900/10">
<div className="container mx-auto px-6 text-center">
<p className="text-sm text-zinc-500 mb-8">Powering next-generation support teams at</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
<span className="text-xl md:text-2xl font-medium tracking-tighter text-zinc-600">ACME</span>
<span className="text-xl md:text-2xl font-medium tracking-tighter text-zinc-600">GLOBEX</span>
<span className="text-xl md:text-2xl font-medium tracking-tighter text-zinc-600">SOYUZ</span>
<span className="text-xl md:text-2xl font-medium tracking-tighter text-zinc-600">INITECH</span>
<span className="text-xl md:text-2xl font-medium tracking-tighter text-zinc-600">UMBRELLA</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6">
<div className="container mx-auto max-w-6xl">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100 mb-4">
                        Everything you need to scale support.
                    </h2>
<p className="text-base text-zinc-400 leading-relaxed">
                        Built from the ground up for developers and product teams who demand performance, reliability, and complete control over the user experience.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors group">
<div className="w-10 h-10 rounded-lg border border-white/10 bg-zinc-950 flex items-center justify-center mb-6 text-zinc-400 group-hover:text-zinc-100 transition-colors shadow-sm">
<iconify-icon className="text-xl" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-100 mb-2">Advanced NLP</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Understands context, sentiment, and intent with state-of-the-art language models tailored for enterprise use cases.
                        </p>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors group">
<div className="w-10 h-10 rounded-lg border border-white/10 bg-zinc-950 flex items-center justify-center mb-6 text-zinc-400 group-hover:text-zinc-100 transition-colors shadow-sm">
<iconify-icon className="text-xl" icon="solar:code-scan-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-100 mb-2">Developer First</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Comprehensive APIs, webhooks, and SDKs for React, Vue, and plain JavaScript. Integrate in minutes, not months.
                        </p>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors group">
<div className="w-10 h-10 rounded-lg border border-white/10 bg-zinc-950 flex items-center justify-center mb-6 text-zinc-400 group-hover:text-zinc-100 transition-colors shadow-sm">
<iconify-icon className="text-xl" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-100 mb-2">Enterprise Security</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            SOC2 compliant infrastructure with end-to-end encryption, custom data retention policies, and role-based access.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-zinc-950 px-6 overflow-hidden relative">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="container mx-auto max-w-6xl relative z-10 flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100 mb-6">
                        Drop it into your app in three lines of code.
                    </h2>
<p className="text-base text-zinc-400 leading-relaxed mb-8">
                        We provide pre-built, highly customizable UI components that blend perfectly with your existing design system. No iframes, no bloated scripts.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-xs text-zinc-300" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm text-zinc-300">Fully typed for TypeScript</span>
</li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-xs text-zinc-300" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm text-zinc-300">Headless architecture available</span>
</li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-xs text-zinc-300" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm text-zinc-300">Custom CSS variable support</span>
</li>
</ul>
</div>
<div className="w-full md:w-1/2">
<div className="rounded-2xl border border-white/10 bg-[#0d0d0d] overflow-hidden shadow-2xl">
<div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-zinc-900/30">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
<span className="ml-2 text-xs text-zinc-500 font-mono">App.tsx</span>
</div>
<div className="p-6 text-sm font-mono leading-loose overflow-x-auto text-zinc-300">
<span className="text-zinc-500">import</span> { Chat } <span className="text-zinc-500">from</span> <span className="text-emerald-400">'@aix/react'</span>;<br/>
<span className="text-zinc-500">import</span> <span className="text-emerald-400">'@aix/react/styles.css'</span>;<br/>
<br/>
<span className="text-zinc-500">export default function</span> App() {<br/>
                              <span className="text-zinc-500">return</span> (<br/>
                                &lt;<span className="text-blue-400">Chat</span><br/>
                                  <span className="text-indigo-300">projectId</span>=<span className="text-emerald-400">"prj_12345"</span><br/>
                                  <span className="text-indigo-300">theme</span>=<span className="text-emerald-400">"dark"</span><br/>
                                /&gt;<br/>
                              );<br/>
                            }
                        </div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden border-t border-white/5">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]"></div>
<div className="container mx-auto max-w-3xl text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-zinc-100 mb-6">
                    Ready to modernize your support?
                </h2>
<p className="text-base text-zinc-400 mb-10 max-w-xl mx-auto">
                    Join hundreds of forward-thinking companies building better conversational experiences with AIX.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto text-sm bg-zinc-100 text-zinc-950 px-8 py-3 rounded-full font-medium hover:bg-white transition-colors" href="#">
                        Get Started
                    </a>
<a className="w-full sm:w-auto text-sm bg-zinc-900 border border-white/10 text-zinc-300 px-8 py-3 rounded-full font-medium hover:bg-zinc-800 transition-colors" href="#">
                        Read the Docs
                    </a>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-zinc-950 pt-16 pb-8 px-6">
<div className="container mx-auto max-w-6xl">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">

<div className="col-span-2 md:col-span-1">
<a className="text-lg font-medium tracking-tighter text-zinc-100 block mb-4" href="#">
                        AIX<span className="text-zinc-600">.</span>
</a>
<p className="text-xs text-zinc-500 leading-relaxed max-w-xs">
                        Designing the future of human-computer interaction through semantic intelligence.
                    </p>
</div>

<div>
<h4 className="text-xs font-medium text-zinc-100 mb-4">Product</h4>
<ul className="space-y-3">
<li><a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Features</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Integrations</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Pricing</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Changelog</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-medium text-zinc-100 mb-4">Resources</h4>
<ul className="space-y-3">
<li><a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Documentation</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">API Reference</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Community</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Blog</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-medium text-zinc-100 mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">About</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Customers</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Careers</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
<p className="text-xs text-zinc-600">
                    © 2024 AIX Technologies Inc. All rights reserved.
                </p>
<div className="flex gap-4">
<a className="text-zinc-600 hover:text-zinc-300 transition-colors" href="#">
<span className="sr-only">Twitter</span>
<iconify-icon className="text-base" icon="solar:twitter-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="text-zinc-600 hover:text-zinc-300 transition-colors" href="#">
<span className="sr-only">GitHub</span>
<iconify-icon className="text-base" icon="solar:programming-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
