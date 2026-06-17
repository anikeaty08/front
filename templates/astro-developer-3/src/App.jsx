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



        function toggleChat() {
            const chatWindow = document.getElementById('chat-window');
            const openIcon = document.getElementById('chat-icon-open');
            const closeIcon = document.getElementById('chat-icon-close');
            
            if (chatWindow.classList.contains('hidden')) {
                // Open
                chatWindow.classList.remove('hidden');
                // Small delay to allow display:block to apply before opacity transition
                setTimeout(() => {
                    chatWindow.classList.remove('scale-95', 'opacity-0');
                    chatWindow.classList.add('scale-100', 'opacity-100');
                }, 10);
                
                openIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
            } else {
                // Close
                chatWindow.classList.remove('scale-100', 'opacity-100');
                chatWindow.classList.add('scale-95', 'opacity-0');
                
                setTimeout(() => {
                    chatWindow.classList.add('hidden');
                }, 300); // Wait for transition
                
                openIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
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
      

<div className="fixed inset-0 z-0 pointer-events-none mesh-gradient"></div>
<div className="fixed top-0 left-0 right-0 h-96 bg-gradient-to-b from-purple-900/10 to-transparent opacity-50 z-0 pointer-events-none"></div>

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">

<a className="text-white font-semibold tracking-tighter text-lg flex items-center gap-2 hover:opacity-80 transition-opacity" href="#">
<span className="iconify text-indigo-500" data-icon="lucide:orbit"></span>
                ASTRO
            </a>

<nav className="hidden md:flex items-center gap-1 text-sm font-medium h-full">

<div className="relative group h-full flex items-center">
<button className="flex items-center gap-1.5 px-3 py-2 text-neutral-400 hover:text-white transition-colors outline-none">
                        Platform
                        <span className="iconify group-hover:rotate-180 transition-transform duration-200 opacity-50" data-icon="lucide:chevron-down" data-width="12"></span>
</button>

<div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out transform translate-y-2 group-hover:translate-y-0">
<div className="bg-[#0a0a0a] border border-white/10 rounded-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] p-1.5 backdrop-blur-xl overflow-hidden ring-1 ring-white/5">
<a className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group/item" href="#">
<div className="mt-0.5 p-1.5 rounded bg-white/5 text-indigo-400 border border-white/5 group-hover/item:border-indigo-500/30 transition-colors">
<span className="iconify" data-icon="lucide:zap" data-width="16"></span>
</div>
<div>
<div className="text-white text-xs font-medium mb-0.5">Islands Engine</div>
<p className="text-[10px] text-neutral-500 leading-snug">Zero-JS frontend architecture.</p>
</div>
</a>
<a className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group/item" href="#">
<div className="mt-0.5 p-1.5 rounded bg-white/5 text-purple-400 border border-white/5 group-hover/item:border-purple-500/30 transition-colors">
<span className="iconify" data-icon="lucide:box" data-width="16"></span>
</div>
<div>
<div className="text-white text-xs font-medium mb-0.5">Content Collections</div>
<p className="text-[10px] text-neutral-500 leading-snug">Type-safe markdown content.</p>
</div>
</a>
</div>
</div>
</div>

<a className="px-3 py-2 text-neutral-400 hover:text-white transition-colors duration-200" href="#">Integrations</a>

<div className="relative group h-full flex items-center">
<button className="flex items-center gap-1.5 px-3 py-2 text-neutral-400 hover:text-white transition-colors outline-none">
                        Resources
                        <span className="iconify group-hover:rotate-180 transition-transform duration-200 opacity-50" data-icon="lucide:chevron-down" data-width="12"></span>
</button>
<div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out transform translate-y-2 group-hover:translate-y-0">
<div className="bg-[#0a0a0a] border border-white/10 rounded-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] p-1.5 backdrop-blur-xl ring-1 ring-white/5">
<a className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors" href="#">
<span className="iconify text-neutral-500" data-icon="lucide:book" data-width="16"></span>
<span className="text-xs font-medium text-white">Documentation</span>
</a>
<a className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors" href="#">
<span className="iconify text-neutral-500" data-icon="lucide:layout-template" data-width="16"></span>
<span className="text-xs font-medium text-white">Themes</span>
</a>
</div>
</div>
</div>

<a className="px-3 py-2 text-neutral-400 hover:text-white transition-colors duration-200" href="#">Pricing</a>
</nav>

<div className="flex items-center gap-4">
<button className="text-neutral-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:search" data-width="18"></span>
</button>
<a className="hidden sm:block text-xs font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 px-3 py-1.5 rounded-full transition-all" href="#">
                    Sign In
                </a>

<button className="md:hidden text-neutral-400 hover:text-white">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
</div>
</div>
</header>

<main className="flex-grow z-10 pt-24 pb-20 px-6">

<section className="max-w-5xl mx-auto text-center mt-12 mb-24">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                New: Astro Engine v2.0 Released
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                The web platform for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300 animate-pulse">content-driven</span> apps.
            </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Connect your Git repository and deploy in seconds. 
                Experience the power of islands architecture with a developer experience like no other.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="h-10 px-6 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2" href="#deploy">
                    Import from GitHub
                    <span className="iconify" data-icon="lucide:github" data-width="16"></span>
</a>
<button className="h-10 px-6 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
<span className="iconify" data-icon="lucide:terminal" data-width="16"></span>
                    npm create astro@latest
                </button>
</div>
</section>

<section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">

<div className="glass-panel p-6 rounded-xl hover:border-indigo-500/30 transition-colors group">
<div className="h-10 w-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-indigo-400" data-icon="lucide:zap" data-width="20"></span>
</div>
<h3 className="text-white font-medium text-lg mb-2 tracking-tight">Zero JS, by default</h3>
<p className="text-sm font-light leading-relaxed">Astro renders HTML on the server and strips away any remaining, unused JavaScript.</p>
</div>

<div className="glass-panel p-6 rounded-xl hover:border-purple-500/30 transition-colors group">
<div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-purple-400" data-icon="lucide:layers" data-width="20"></span>
</div>
<h3 className="text-white font-medium text-lg mb-2 tracking-tight">UI-Agnostic</h3>
<p className="text-sm font-light leading-relaxed">Bring your own component framework. React, Svelte, Vue, Preact, Solid, or Lit.</p>
</div>

<div className="glass-panel p-6 rounded-xl hover:border-pink-500/30 transition-colors group">
<div className="h-10 w-10 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-pink-400" data-icon="lucide:globe" data-width="20"></span>
</div>
<h3 className="text-white font-medium text-lg mb-2 tracking-tight">Edge Ready</h3>
<p className="text-sm font-light leading-relaxed">Deploy anywhere, anytime. Deno, Vercel, Netlify, Cloudflare Workers, and more.</p>
</div>
</section>

<section className="max-w-7xl mx-auto glass-panel rounded-2xl border border-white/10 overflow-hidden relative" id="deploy">
<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

<div className="p-4 border-b border-white/5 flex items-center justify-between bg-[#0a0a0a]/50">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
<span className="iconify" data-icon="lucide:lock" data-width="12"></span>
                    astro.build/new
                </div>
<div className="w-12"></div> 
</div>
<div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-5 space-y-6 pt-2">
<div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-medium tracking-wide uppercase">
<span className="iconify" data-icon="lucide:git-branch" data-width="14"></span>
                        Git Integration
                    </div>
<h2 className="text-3xl font-semibold text-white tracking-tight">Import your Git repository.</h2>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Connect your GitHub account to import your project. We'll automatically detect your framework, configure your build settings, and deploy your site to a global edge network.
                    </p>
<ul className="space-y-4 pt-2">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<div className="mt-0.5 p-1 rounded-full bg-white/10 text-white">
<span className="iconify" data-icon="lucide:check" data-width="10"></span>
</div>
<span>Continuous Deployment from Git</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<div className="mt-0.5 p-1 rounded-full bg-white/10 text-white">
<span className="iconify" data-icon="lucide:check" data-width="10"></span>
</div>
<span>Automatic Branch Previews</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<div className="mt-0.5 p-1 rounded-full bg-white/10 text-white">
<span className="iconify" data-icon="lucide:check" data-width="10"></span>
</div>
<span>Team Collaboration Built-in</span>
</li>
</ul>
</div>

<div className="lg:col-span-7 w-full">
<div className="bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl ring-1 ring-white/5 overflow-hidden flex flex-col relative">

<div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

<div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
<h3 className="text-sm font-medium text-white flex items-center gap-2">
<span className="iconify text-neutral-500" data-icon="lucide:github" data-width="16"></span>
                                Import Git Repository
                            </h3>
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-[10px] text-white font-bold border border-white/10">A</div>
<span className="text-xs text-neutral-400">astro-user</span>
<span className="iconify text-neutral-600" data-icon="lucide:chevron-down" data-width="12"></span>
</div>
</div>

<div className="p-4 border-b border-white/5">
<div className="relative group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-white transition-colors">
<span className="iconify" data-icon="lucide:search" data-width="16"></span>
</span>
<input className="w-full bg-[#111] border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder-neutral-600 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" placeholder="Search repositories..." type="text"/>
</div>
</div>

<div className="max-h-[280px] overflow-y-auto">

<div className="flex items-center justify-between p-4 hover:bg-white/[0.02] border-b border-white/5 transition-colors group">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-white/5 border border-white/5 text-neutral-400">
<span className="iconify" data-icon="lucide:book-open" data-width="18"></span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-white group-hover:text-indigo-300 transition-colors">astro-portfolio-v2</span>
<span className="iconify text-neutral-600" data-icon="lucide:lock" data-width="10"></span>
</div>
<div className="text-[10px] text-neutral-500 mt-0.5 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> JavaScript
                                            <span className="text-neutral-600">•</span> Updated 2h ago
                                        </div>
</div>
</div>
<button className="px-3 py-1.5 rounded-md bg-white text-black text-xs font-medium hover:bg-neutral-200 transition-colors shadow-sm">
                                    Import
                                </button>
</div>

<div className="flex items-center justify-between p-4 hover:bg-white/[0.02] border-b border-white/5 transition-colors group">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-white/5 border border-white/5 text-neutral-400">
<span className="iconify" data-icon="lucide:layout" data-width="18"></span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-white group-hover:text-indigo-300 transition-colors">docs-starter-kit</span>
</div>
<div className="text-[10px] text-neutral-500 mt-0.5 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> TypeScript
                                            <span className="text-neutral-600">•</span> Updated 1d ago
                                        </div>
</div>
</div>
<button className="px-3 py-1.5 rounded-md bg-white text-black text-xs font-medium hover:bg-neutral-200 transition-colors shadow-sm">
                                    Import
                                </button>
</div>

<div className="flex items-center justify-between p-4 hover:bg-white/[0.02] border-b border-white/5 transition-colors group">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-white/5 border border-white/5 text-neutral-400">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="18"></span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-white group-hover:text-indigo-300 transition-colors">ecommerce-store</span>
</div>
<div className="text-[10px] text-neutral-500 mt-0.5 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Svelte
                                            <span className="text-neutral-600">•</span> Updated 3d ago
                                        </div>
</div>
</div>
<button className="px-3 py-1.5 rounded-md bg-white text-black text-xs font-medium hover:bg-neutral-200 transition-colors shadow-sm">
                                    Import
                                </button>
</div>
</div>

<div className="p-3 bg-white/[0.02] flex items-center justify-center gap-1 text-xs text-neutral-500 border-t border-white/5 hover:text-white transition-colors cursor-pointer">
<span className="iconify" data-icon="lucide:plus" data-width="12"></span>
                            Can't find your repo? Configure GitHub App
                        </div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-black/50 backdrop-blur-xl z-10">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 md:col-span-2">
<a className="text-white font-semibold tracking-tighter text-lg flex items-center gap-2 mb-4" href="#">
<span className="iconify text-indigo-500" data-icon="lucide:orbit"></span>
                        ASTRO
                    </a>
<p className="text-xs text-neutral-500 max-w-xs">
                        The all-in-one web framework for building fast, content-focused websites. Designed for speed, flexibility, and developer experience.
                    </p>
</div>
<div>
<h4 className="text-white text-xs font-semibold mb-4">Product</h4>
<ul className="space-y-3 text-xs">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-semibold mb-4">Company</h4>
<ul className="space-y-3 text-xs">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Customers</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-semibold mb-4">Legal</h4>
<ul className="space-y-3 text-xs">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-600">© 2023 Astro Platform Inc. All rights reserved.</p>

<div className="flex items-center gap-5">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:github" data-width="16"></span>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="16"></span>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:disc" data-width="16"></span>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:youtube" data-width="16"></span>
</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3" id="chat-widget-container">

<div className="hidden w-[360px] h-[500px] bg-[#1a1a1a] rounded-2xl shadow-2xl border border-white/10 flex flex-col overflow-hidden origin-bottom-right transition-all duration-300 ease-out transform scale-95 opacity-0" id="chat-window">

<div className="bg-gradient-to-r from-[#2a2a2a] to-[#202020] p-4 flex items-center justify-between border-b border-white/5">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                            A
                        </div>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#2a2a2a] rounded-full"></div>
</div>
<div>
<h4 className="text-white text-sm font-medium">Astro Support</h4>
<p className="text-[10px] text-green-400">Online</p>
</div>
</div>
<div className="flex gap-2">
<button className="text-neutral-400 hover:text-white">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
</div>
</div>

<div className="flex-grow p-4 bg-[#111] overflow-y-auto flex flex-col gap-4">
<div className="text-center text-[10px] text-neutral-600 my-2">Today</div>

<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex-shrink-0 flex items-center justify-center text-[10px] text-white font-bold mt-1">A</div>
<div className="bg-[#262626] text-neutral-200 text-xs p-3 rounded-2xl rounded-tl-none max-w-[85%] leading-relaxed">
                        Hi there! 👋 Welcome to Astro. How can we help you build your next project today?
                    </div>
</div>

<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-transparent flex-shrink-0 mt-1"></div> 
<div className="bg-[#262626] text-neutral-200 text-xs p-3 rounded-2xl rounded-tl-none max-w-[85%] leading-relaxed">
                        Check out our docs if you are just getting started!
                    </div>
</div>
</div>

<div className="p-3 bg-[#1a1a1a] border-t border-white/5">
<div className="bg-black/50 border border-white/10 rounded-full px-4 py-2 flex items-center gap-2">
<input className="bg-transparent border-none outline-none text-xs text-white w-full placeholder-neutral-600 h-6" placeholder="Send a message..." type="text"/>
<button className="text-neutral-500 hover:text-indigo-400 transition-colors">
<span className="iconify" data-icon="lucide:send" data-width="14"></span>
</button>
</div>
<div className="text-center mt-2">
<p className="text-[9px] text-neutral-700 flex items-center justify-center gap-1">
                        Powered by <span className="font-bold">Channel.io</span>
</p>
</div>
</div>
</div>

<button className="w-14 h-14 rounded-full bg-white text-black shadow-[0_4px_14px_0_rgba(255,255,255,0.39)] hover:scale-105 transition-transform duration-200 flex items-center justify-center z-50 group" id="chat-toggle" onclick="toggleChat()">
<span className="iconify group-hover:rotate-12 transition-transform duration-300" data-height="24" data-icon="lucide:message-circle" data-width="24" id="chat-icon-open"></span>
<span className="iconify hidden group-hover:-rotate-90 transition-transform duration-300" data-height="24" data-icon="lucide:x" data-width="24" id="chat-icon-close"></span>
</button>
</div>


    </>
  );
}
