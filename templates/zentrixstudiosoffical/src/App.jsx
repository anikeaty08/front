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
      

<div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-900/20 blur-[120px] pointer-events-none z-0"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-900/10 blur-[120px] pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.3)]">
<iconify-icon className="text-white text-sm" icon="solar:infinity-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tighter text-white">ZENTRIX</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#security">Infrastructure</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors">
<iconify-icon className="text-base" icon="solar:lock-password-linear" strokeWidth="1.5"></iconify-icon>
                    Admin Login
                </button>
<button className="h-9 px-4 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2">
                    Start Project
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</nav>
<main className="relative z-10 pt-32 pb-24">

<section className="max-w-7xl mx-auto px-6 min-h-[70vh] flex flex-col justify-center items-center text-center relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-medium text-purple-300 mb-8 border-purple-500/20">
<span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                Enterprise-Grade Digital Solutions
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-500 max-w-4xl leading-tight mb-6">
                Architecting the future of <br className="hidden md:block"/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-blue-600">secure digital experiences.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-2xl mb-10 font-normal">
                Zentrix Studios blends cutting-edge design with military-grade security architecture. We build highly scalable, role-based platforms for forward-thinking enterprises.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="h-12 px-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium hover:from-purple-500 hover:to-blue-500 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] flex items-center gap-2">
                    Initialize Deployment
                    <iconify-icon className="text-base" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="h-12 px-6 rounded-full glass-panel text-white text-sm font-medium hover:bg-white/5 transition-colors flex items-center gap-2">
                    View Documentation
                    <iconify-icon className="text-base" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="services">
<div className="mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Core Capabilities</h2>
<p className="text-sm text-neutral-400 max-w-xl">Engineered for performance, designed for conversion. Our tech stack is heavily optimized and secure by default.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel glass-panel-hover rounded-2xl p-8 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-purple-400" icon="solar:layers-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Modern Frontend</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        React &amp; Next.js architectures with server-side rendering, ensuring sub-2-second load times and flawless SEO performance.
                    </p>
</div>

<div className="glass-panel glass-panel-hover rounded-2xl p-8 transition-all duration-300 group glow-blue">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-blue-400" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Zero-Trust Security</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        JWT authentication, bcrypt hashing, CSRF protection, and strictly role-based access control (RBAC) built into the core.
                    </p>
</div>

<div className="glass-panel glass-panel-hover rounded-2xl p-8 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-neutral-300" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Scalable Backend</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Node.js environments connected to secure PostgreSQL/MongoDB clusters, with automated AWS S3 backups and edge deployment.
                    </p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 relative" id="security">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs font-medium text-blue-300 mb-6">
<iconify-icon icon="solar:server-linear" strokeWidth="1.5"></iconify-icon>
                        System Architecture
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                        Total control, <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-600">absolute security.</span>
</h2>
<p className="text-sm text-neutral-400 mb-8 leading-relaxed max-w-md">
                        Our proprietary CMS and admin dashboards are restricted via mandatory 2FA and role-based permissions. Super Admins govern the ecosystem, while Sub Admins manage content in isolated environments.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-purple-400"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon></div>
<div>
<h4 className="text-sm font-medium text-white">Hierarchical Roles</h4>
<p className="text-xs text-neutral-500 mt-1">1 Super Admin, up to 5 Sub Admins. Granular permissions.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 text-blue-400"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon></div>
<div>
<h4 className="text-sm font-medium text-white">Encrypted Data</h4>
<p className="text-xs text-neutral-500 mt-1">HttpOnly cookies, secure JWT refresh tokens, salted hashes.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 text-neutral-400"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon></div>
<div>
<h4 className="text-sm font-medium text-white">Real-time Publishing</h4>
<p className="text-xs text-neutral-500 mt-1">Draft schemas, instant preview modes, safe rollbacks.</p>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-2 border-white/10 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
<div className="bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/5">

<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-[#111]">
<div className="w-3 h-3 rounded-full bg-neutral-800"></div>
<div className="w-3 h-3 rounded-full bg-neutral-800"></div>
<div className="w-3 h-3 rounded-full bg-neutral-800"></div>
<div className="mx-auto flex items-center gap-2 text-xs font-medium text-neutral-500">
<iconify-icon icon="solar:lock-keyhole-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
                                admin.zentrix.app
                            </div>
</div>

<div className="p-6 flex gap-6">

<div className="w-32 hidden sm:flex flex-col gap-3">
<div className="h-6 w-20 bg-white/5 rounded"></div>
<div className="h-6 w-full bg-purple-500/10 rounded border border-purple-500/20"></div>
<div className="h-6 w-24 bg-white/5 rounded"></div>
<div className="h-6 w-16 bg-white/5 rounded"></div>
</div>

<div className="flex-1 space-y-4">
<div className="flex justify-between items-center mb-6">
<div className="h-5 w-32 bg-white/10 rounded"></div>
<div className="h-6 w-24 bg-blue-500/20 rounded-full"></div>
</div>
<div className="glass-panel rounded-lg p-4 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-blue-400"></div>
<div>
<div className="h-3 w-24 bg-white/20 rounded mb-2"></div>
<div className="h-2 w-16 bg-white/10 rounded"></div>
</div>
</div>
<div className="px-2 py-1 rounded text-[10px] bg-purple-500/10 text-purple-400 border border-purple-500/20">Super Admin</div>
</div>
<div className="glass-panel rounded-lg p-4 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800"></div>
<div>
<div className="h-3 w-32 bg-white/10 rounded mb-2"></div>
<div className="h-2 w-20 bg-white/5 rounded"></div>
</div>
</div>
<div className="px-2 py-1 rounded text-[10px] bg-neutral-800 text-neutral-400">Sub Admin</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 py-24 text-center" id="contact">
<h2 className="text-2xl font-semibold tracking-tight text-white mb-2">Initialize Communication</h2>
<p className="text-sm text-neutral-400 mb-10">Protected by reCAPTCHA v3 &amp; Rate Limiting.</p>
<form className="glass-panel rounded-2xl p-8 text-left border-white/10 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div className="relative">
<input className="peer w-full bg-transparent border-b border-white/10 py-2 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors placeholder-transparent" id="name" placeholder="Name" type="text"/>
<label className="absolute left-0 top-2 text-sm text-neutral-500 transition-all duration-200 pointer-events-none peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-purple-400 peer-valid:-translate-y-6 peer-valid:text-xs" htmlFor="name">Full Name</label>
</div>
<div className="relative">
<input className="peer w-full bg-transparent border-b border-white/10 py-2 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors placeholder-transparent" id="email" placeholder="Email" type="email"/>
<label className="absolute left-0 top-2 text-sm text-neutral-500 transition-all duration-200 pointer-events-none peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-purple-400 peer-valid:-translate-y-6 peer-valid:text-xs" htmlFor="email">Secure Email</label>
</div>
</div>
<div className="relative mb-8 mt-4">
<textarea className="peer w-full bg-transparent border-b border-white/10 py-2 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors placeholder-transparent resize-none" id="message" placeholder="Message" rows="3"></textarea>
<label className="absolute left-0 top-2 text-sm text-neutral-500 transition-all duration-200 pointer-events-none peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-purple-400 peer-valid:-translate-y-6 peer-valid:text-xs" htmlFor="message">Project Specifications</label>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-neutral-500">
<iconify-icon className="text-green-500" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
                        SSL Encrypted
                    </div>
<button className="h-10 px-6 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2" type="button">
                        Transmit Data
                        <iconify-icon icon="solar:plain-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</form>
</section>
</main>

<footer className="border-t border-white/5 bg-[#020202] py-12 relative z-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-50">
<iconify-icon className="text-white text-sm" icon="solar:infinity-linear" strokeWidth="2"></iconify-icon>
<span className="text-xs font-semibold tracking-tighter text-white">ZENTRIX STUDIOS</span>
</div>
<div className="text-xs text-neutral-600 flex gap-4">
<a className="hover:text-neutral-300 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-neutral-300 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-purple-400 transition-colors flex items-center gap-1" href="#">
<iconify-icon icon="solar:key-minimalistic-linear"></iconify-icon>
                    Admin Portal
                </a>
</div>
</div>
</footer>

    </>
  );
}
