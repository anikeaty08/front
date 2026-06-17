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
darkMode: 'class',
theme: {
extend: {
colors: {
blue: '#142643',
coral: '#FF7175',
lightcoral: '#FFEBEC',
graybg: '#F7F9FA',
lightgray: '#B5B9BD',
darkgray: '#6B737B',
},
fontFamily: {
serif: ['"Playfair Display"', 'serif'],
sans: ['Inter', 'sans-serif'],
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function openModal(title, url) {
            const modal = document.getElementById('preview-modal');
            const titleEl = document.getElementById('modal-title');
            const linkEl = document.getElementById('modal-link');
            const backdrop = document.getElementById('modal-backdrop');
            const panel = document.getElementById('modal-panel');

            // Set content
            titleEl.textContent = title;
            linkEl.href = url;

            // Remove hidden
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';

            // Trigger animation
            requestAnimationFrame(() => {
                backdrop.classList.remove('opacity-0');
                panel.classList.remove('opacity-0', 'scale-95');
                panel.classList.add('opacity-100', 'scale-100');
            });
        }

        function closeModal() {
            const modal = document.getElementById('preview-modal');
            const backdrop = document.getElementById('modal-backdrop');
            const panel = document.getElementById('modal-panel');

            // Trigger exit animation
            backdrop.classList.add('opacity-0');
            panel.classList.remove('opacity-100', 'scale-100');
            panel.classList.add('opacity-0', 'scale-95');

            // Wait for transition, then hide
            setTimeout(() => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                document.body.style.overflow = '';
            }, 300);
        }

        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !document.getElementById('preview-modal').classList.contains('hidden')) {
                closeModal();
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
      

<div aria-hidden="true" className="fixed inset-0 z-50 hidden items-center justify-center p-4 md:p-6" id="preview-modal">

<div className="absolute inset-0 bg-blue/80 backdrop-blur-md transition-opacity duration-300 opacity-0" id="modal-backdrop" onclick="closeModal()"></div>

<div className="relative w-full max-w-2xl bg-[#1A2D4A] border border-lightgray/20 rounded-2xl p-6 md:p-10 shadow-2xl transform scale-95 opacity-0 transition-all duration-300 flex flex-col max-h-[85vh]" id="modal-panel">
<button aria-label="Close preview" className="absolute top-6 right-6 text-lightgray hover:text-coral transition-colors" onclick="closeModal()">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<div className="flex flex-col gap-2 mb-6 pr-8">
<span className="text-coral font-sans text-xs tracking-widest uppercase font-medium">[ Preview ]</span>
<h3 className="font-serif text-2xl md:text-3xl tracking-tight text-white font-normal" id="modal-title">Template Title</h3>
</div>
<div className="bg-white/5 border border-lightgray/10 rounded-xl p-6 overflow-y-auto font-sans text-sm text-lightgray leading-relaxed flex-1 custom-scrollbar">
<div className="space-y-4 font-mono text-xs opacity-80">
<p className="uppercase tracking-widest text-darkgray mb-4">Confidential Document Draft</p>
<p>THIS AGREEMENT (the "Agreement") is entered into as of the Effective Date, by and between the parties explicitly defined herein.</p>
<p>WHEREAS, the Parties desire to enter into a mutually beneficial arrangement subject to the terms, conditions, and modular clauses defined within the primary documentation structure.</p>
<div className="space-y-3 mt-6">
<div className="h-3 bg-lightgray/20 rounded-full w-full animate-pulse"></div>
<div className="h-3 bg-lightgray/20 rounded-full w-11/12 animate-pulse delay-75"></div>
<div className="h-3 bg-lightgray/20 rounded-full w-4/5 animate-pulse delay-150"></div>
<div className="h-3 bg-lightgray/20 rounded-full w-full animate-pulse delay-200"></div>
<div className="h-3 bg-lightgray/20 rounded-full w-3/4 animate-pulse delay-300"></div>
</div>
<p className="mt-6 italic text-darkgray">... Content intentionally abstracted for preview. Full editable sections available in the document.</p>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-lightgray/10">
<span className="text-xs text-darkgray font-sans">Opens in a new tab. Requires a Google account to copy.</span>
<a className="w-full sm:w-auto bg-coral text-white hover:bg-white hover:text-blue px-6 py-3 rounded-full font-sans text-sm font-medium transition-colors text-center inline-flex items-center justify-center gap-2" href="#" id="modal-link" rel="noopener noreferrer" target="_blank">
                    Open in Google Docs
                    <iconify-icon className="text-lg" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>

<header className="fixed top-0 inset-x-0 z-40 bg-blue/80 backdrop-blur-md border-b border-lightgray/10">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="md:text-2xl hover:text-coral transition-colors flex items-center gap-3 text-xl text-white tracking-tighter font-serif" href="https://sparring.io">

    Powered by Sparring
  </a>
<nav className="hidden md:flex gap-8 gap-x-8 gap-y-8 items-center">
<a className="text-lightgray hover:text-white transition-colors text-sm font-semibold font-sans" href="#templates">Templates</a>
<a className="text-lightgray hover:text-white transition-colors text-sm font-semibold font-sans" href="#how-it-works">How
      it works</a>
<a className="text-lightgray hover:text-white transition-colors text-sm font-semibold font-sans" href="#ecosystem">Ecosystem</a>
<a className="text-lightgray hover:text-white transition-colors text-sm font-semibold font-sans" href="#faq">FAQ</a>
</nav>
<a className="hidden sm:inline-flex bg-coral text-white px-5 py-2.5 rounded-full font-sans text-xs font-medium hover:bg-white hover:text-blue transition-colors items-center gap-2" href="#templates">
    Get templates
  </a>
</div>
</header>
<main className="pt-20">

<section className="grid grid-cols-1 overflow-hidden md:py-32 md:grid-cols-12 lg:gap-8 w-full max-w-screen-2xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative gap-x-12 gap-y-12">

<div className="absolute inset-0 bg-dots opacity-40 pointer-events-none -z-10 mask-image-b"></div>
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-coral/5 rounded-full blur-[120px] pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3">
</div>

<div className="md:col-span-2 lg:col-span-3">
<div className="md:sticky top-32 flex flex-col gap-1">
<span className="text-coral uppercase text-xs font-medium tracking-widest font-sans">[ 01 / 06 ]</span>
<span className="text-lightgray uppercase text-xs tracking-widest font-sans">[ INtro ]</span>
</div>
</div>

<div className="md:col-span-10 lg:col-span-9 flex flex-col lg:pl-10 gap-x-10 gap-y-10">
<div className="flex flex-col gap-6 max-w-3xl gap-x-6 gap-y-6">
<h1 className="md:text-6xl lg:text-7xl leading-[1.05] text-5xl font-normal text-white tracking-tighter font-serif">
                Essential contract templates for <span className="text-coral italic">Cardano builders.</span>
</h1>
<p className="md:text-xl text-lightgray leading-relaxed text-lg font-light font-sans max-w-2xl">A practical suite of ready-to-use agreements—built to help innovators move faster with fewer legal blind spots.</p>
</div>
<div className="flex flex-wrap items-center gap-4 font-sans text-sm text-white/80">
<div className="flex items-center gap-2 border border-lightgray/20 rounded-full px-4 py-2 bg-white/5">
<iconify-icon className="text-coral" icon="solar:document-add-linear"></iconify-icon>
                Editable templates
            </div>
<div className="flex items-center gap-2 border border-lightgray/20 rounded-full px-4 py-2 bg-white/5">
<iconify-icon className="text-coral" icon="solar:shield-check-linear"></iconify-icon>
                Founder-friendly defaults
            </div>
<div className="flex items-center gap-2 border border-lightgray/20 rounded-full px-4 py-2 bg-white/5">
<iconify-icon className="text-coral" icon="solar:layers-minimalistic-linear"></iconify-icon>
                Modular clauses
            </div>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
<a className="w-full sm:w-auto bg-coral text-white px-8 py-4 rounded-full font-sans text-sm font-medium hover:bg-white hover:text-blue transition-colors text-center shadow-[0_0_20px_rgba(255,113,117,0.15)] hover:shadow-[0_0_25px_rgba(255,113,117,0.3)]" href="#templates">
                Download templates
            </a>
<a className="sm:w-auto border-lightgray/30 hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2 group text-sm font-medium text-white font-sans text-center w-full border rounded-full pt-4 pr-8 pb-4 pl-8" href="https://projectcatalyst.io" rel="noopener noreferrer" target="_blank">
                View Project Catalyst
                <iconify-icon className="text-lightgray group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

</div>
</section>

<section className="md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12 border-lightgray/10 w-full max-w-7xl border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 gap-x-12 gap-y-12" id="templates">
<div className="md:col-span-2 lg:col-span-3">
<div className="md:sticky top-32 flex flex-col gap-1">
<span className="text-coral uppercase text-xs font-medium tracking-widest font-sans">[ 02 / 06 ]</span>
<span className="text-lightgray uppercase text-xs tracking-widest font-sans">[ Templates ]</span>
</div>
</div>
<div className="md:col-span-10 lg:col-span-9 flex flex-col gap-12 lg:pl-10">
<div className="flex flex-col gap-4">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-white font-normal">Download templates
                </h2>
<p className="font-sans text-sm text-lightgray flex items-center gap-2">
<iconify-icon icon="solar:info-circle-linear"></iconify-icon>
                    Opens in Google Docs. Use 'File &gt; Make a copy' to edit.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-6 gap-y-6">

<div className="glass-panel rounded-2xl p-8 flex flex-col h-full group">
<div className="flex items-start justify-between mb-6">
<div className="border-lightgray/20 flex text-coral group-hover:scale-110 transition-transform w-12 h-12 border rounded-full items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:handshake-linear"></iconify-icon>
<iconify-icon className="text-2xl" height="23" icon="solar:rocket-2-outline" style={{color: 'rgb(255, 113, 117)'}} width="23"></iconify-icon></div>
<span className="text-xs font-sans border border-lightgray/20 rounded-full px-3 py-1 text-lightgray bg-blue/50">Core</span>
</div>
<h3 className="font-serif text-2xl tracking-tight text-white mb-3">Service Level Agreement
                        <span className="text-lightgray text-lg font-sans tracking-normal">(SLA)</span>
</h3>
<p className="font-sans text-sm text-lightgray leading-relaxed mb-8 flex-1">
                        Define service expectations, delivery standards, and response times clearly and fairly.
                    </p>
<div className="flex items-center gap-3 mt-auto">
<a className="flex-1 bg-white/5 border border-lightgray/20 text-white px-4 py-2.5 rounded-full font-sans text-xs font-medium hover:bg-white hover:text-blue transition-colors text-center" href="https://docs.google.com/document/d/1l0vV6MK6Vsb-ZGPSZAn9nlyx_fWZ1UlvcbW1LOef0Ss/edit?usp=drivesdk" rel="noopener noreferrer" target="_blank">
                            Open Doc
                        </a>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 flex flex-col h-full group">
<div className="flex items-start justify-between mb-6">
<div className="border-lightgray/20 flex text-coral group-hover:scale-110 transition-transform w-12 h-12 border rounded-full items-center justify-center">
<iconify-icon className="text-2xl" height="23" icon="solar:lock-keyhole-minimalistic-linear" style={{color: 'rgb(255, 113, 117)'}} width="23"></iconify-icon>
</div>
<span className="text-xs font-sans border border-lightgray/20 rounded-full px-3 py-1 text-lightgray bg-blue/50">Protection</span>
</div>
<h3 className="font-serif text-2xl tracking-tight text-white mb-3">Mutual NDA</h3>
<p className="font-sans text-sm text-lightgray leading-relaxed mb-8 flex-1">
                        Protect confidential information mutually during early-stage collaboration and scoping.
                    </p>
<div className="flex items-center gap-3 mt-auto">
<a className="flex-1 bg-white/5 border border-lightgray/20 text-white px-4 py-2.5 rounded-full font-sans text-xs font-medium hover:bg-white hover:text-blue transition-colors text-center" href="https://docs.google.com/document/d/1t7FCZ_Iv0vd_TwsmNRl67mQj7G0ItUP3YpD0RRPc-Zs/edit?usp=drivesdk" rel="noopener noreferrer" target="_blank">
                            Open Doc
                        </a>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 flex flex-col h-full group">
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 rounded-full bg-blue border border-lightgray/20 flex items-center justify-center text-coral group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" height="23" icon="solar:star-fall-minimalistic-2-outline" style={{color: 'rgb(255, 113, 117)'}} width="23"></iconify-icon>
</div>
<span className="text-xs font-sans border border-lightgray/20 rounded-full px-3 py-1 text-lightgray bg-blue/50">Foundation</span>
</div>
<h3 className="font-serif text-2xl tracking-tight text-white mb-3">Master Services Agreement
                        <span className="text-lightgray text-lg font-sans tracking-normal">(MSA)</span>
</h3>
<p className="font-sans text-sm text-lightgray leading-relaxed mb-8 flex-1">
                        Set the comprehensive legal foundation and overarching terms for longer-term client work.
                    </p>
<div className="flex items-center gap-3 mt-auto">
<a className="flex-1 bg-white/5 border border-lightgray/20 text-white px-4 py-2.5 rounded-full font-sans text-xs font-medium hover:bg-white hover:text-blue transition-colors text-center" href="https://docs.google.com/document/d/12IGyZy6eqw1vz_CiUYELpALSxzAiqGoE4Xil0s7d31wY/edit?usp=drivesdk" rel="noopener noreferrer" target="_blank">
                            Open Doc
                        </a>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 flex flex-col h-full group">
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 rounded-full bg-blue border border-lightgray/20 flex items-center justify-center text-coral group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<span className="text-xs font-sans border border-lightgray/20 rounded-full px-3 py-1 text-lightgray bg-blue/50">Engagement</span>
</div>
<h3 className="font-serif text-2xl tracking-tight text-white mb-3">Contractor Agreement</h3>
<p className="font-sans text-sm text-lightgray leading-relaxed mb-8 flex-1">
                        Engage external contractors cleanly with strict clarity on IP transfer, scope, and payment.
                    </p>
<div className="flex items-center gap-3 mt-auto">
<a className="flex-1 bg-white/5 border border-lightgray/20 text-white px-4 py-2.5 rounded-full font-sans text-xs font-medium hover:bg-white hover:text-blue transition-colors text-center" href="https://docs.google.com/document/d/1A2BbTjgG7MqWvpEzXPRnuPlEuU0Jv-9USbbuEFbgGUg/edit?usp=drivesdk" rel="noopener noreferrer" target="_blank">
                            Open Doc
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-lightgray/10" id="how-it-works">
<div className="md:col-span-2 lg:col-span-3">
<div className="md:sticky top-32 flex flex-col gap-1">
<span className="text-coral uppercase text-xs font-medium tracking-widest font-sans">[ 03 / 06 ]</span>
<span className="text-lightgray font-sans text-xs tracking-widest uppercase">[ How it works ]</span>
</div>
</div>
<div className="md:col-span-10 lg:col-span-9 flex flex-col gap-12 lg:pl-10">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-white font-normal hidden md:block">Process
    </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="flex flex-col gap-4 border-l border-lightgray/20 pl-6 relative">
<div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-blue border-2 border-coral"></div>
<span className="font-serif text-4xl tracking-tight text-white/20">01</span>
<h3 className="font-sans text-lg font-medium text-white">Open</h3>
<p className="font-sans text-sm text-lightgray leading-relaxed">
          Select the template you need and open it directly in Google Docs. No sign-ups required to view
          the baseline structure.
        </p>
</div>

<div className="flex flex-col gap-4 border-l border-lightgray/20 pl-6 relative">
<div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-blue border-2 border-coral"></div>
<span className="font-serif text-4xl tracking-tight text-white/20">02</span>
<h3 className="font-sans text-lg font-medium text-white">Adapt</h3>
<p className="font-sans text-sm text-lightgray leading-relaxed">
          Click 'File &gt; Make a copy' to transfer the document to your own drive. Fill in the bracketed
          variables and adjust modular clauses.
        </p>
</div>

<div className="flex flex-col gap-4 border-l border-lightgray/20 pl-6 relative">
<div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-blue border-2 border-coral"></div>
<span className="font-serif text-4xl tracking-tight text-white/20">03</span>
<h3 className="font-sans text-lg font-medium text-white">Execute</h3>
<p className="font-sans text-sm text-lightgray leading-relaxed">
          Export to PDF or your preferred e-signature platform. Move forward with confidence and legal
          clarity.
        </p>
</div>
</div>
<div className="mt-4 p-4 rounded-xl bg-white/5 border border-lightgray/10 flex items-start gap-4">
<iconify-icon className="text-coral mt-0.5 shrink-0" icon="solar:danger-circle-linear"></iconify-icon>
<p className="font-sans text-xs text-lightgray leading-relaxed uppercase tracking-wide">
        Disclaimer: Templates are informational and do not constitute formal legal advice. Please consult
        with counsel for your specific use case.
      </p>
</div>
</div>
</section>


<section className="md:py-32 grid grid-cols-1 md:grid-cols-12 border-lightgray/10 w-full max-w-7xl border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 gap-x-12 gap-y-12" id="ecosystem">
<div className="md:col-span-2 lg:col-span-3">
<div className="md:sticky top-32 flex flex-col gap-1">
<span className="text-coral uppercase text-xs font-medium tracking-widest font-sans">[ 04 / 06 ]</span>
<span className="text-lightgray uppercase text-xs tracking-widest font-sans">[ Ecosystem ]</span>
</div>
</div>
<div className="md:col-span-10 lg:col-span-9 lg:pl-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<a className="group relative overflow-hidden rounded-2xl border border-lightgray/20 bg-[#1A2D4A] p-10 flex flex-col min-h-[240px] transition-all hover:-translate-y-1 hover:border-white/30" href="https://projectcatalyst.io" rel="noopener noreferrer" target="_blank">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
</div>
<div className="relative z-10 flex flex-col h-full">
<span className="font-serif text-3xl tracking-tight text-white mb-4">Project Catalyst</span>
<p className="font-sans text-sm text-lightgray mb-8 max-w-sm">
            The innovation engine for the Cardano ecosystem. Discover funding, collaboration, and growth
            opportunities.
          </p>
<div className="mt-auto flex items-center gap-2 text-white font-sans text-sm font-medium">
            Visit Catalyst <iconify-icon className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</a>
<a className="group relative overflow-hidden rounded-2xl border border-lightgray/20 bg-[#1A2D4A] p-10 flex flex-col min-h-[240px] transition-all hover:-translate-y-1 hover:border-coral/40" href="https://sparring-legal-c8311d8c81d61b23b52329d6.webflow.io" rel="noopener noreferrer" target="_blank">
<div className="absolute inset-0 bg-gradient-to-br from-coral/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
</div>
<div className="relative z-10 flex flex-col h-full">
<span className="font-serif text-3xl tracking-tight text-white mb-4">Sparring</span>
<p className="font-sans text-sm text-lightgray mb-8 max-w-sm">
            Legal partner on both Atlantic Shores. Empowering founders through transparent, innovative
            legal services.
          </p>
<div className="mt-auto flex items-center gap-2 text-coral font-sans text-sm font-medium">
            Meet Sparring <iconify-icon className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="md:py-32 grid grid-cols-1 md:grid-cols-12 border-lightgray/10 w-full max-w-7xl border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 gap-x-12 gap-y-12" id="faq">
<div className="md:col-span-2 lg:col-span-3">
<div className="md:sticky top-32 flex flex-col gap-1">
<span className="text-coral uppercase text-xs font-medium tracking-widest font-sans">[ 05 / 06 ]</span>
<span className="text-lightgray font-sans text-xs tracking-widest uppercase">[ FAQ ]</span>
</div>
</div>
<div className="md:col-span-10 lg:col-span-9 lg:pl-10">
<div className="flex flex-col border-t border-lightgray/20">
<details className="group border-b border-lightgray/20">
<summary className="flex items-center justify-between cursor-pointer py-6 pr-4 list-none outline-none focus-visible:text-coral transition-colors">
<h3 className="group-hover:text-coral transition-colors text-xl text-white tracking-tight font-serif">
                            Are these templates legal advice?</h3>
<iconify-icon className="text-lightgray group-open:rotate-180 transition-transform duration-300 text-xl" height="20" icon="solar:alt-arrow-down-linear" style={{color: 'rgb(181, 185, 189)'}} width="20"></iconify-icon>
</summary>
<div className="pb-6 pr-12 text-lightgray font-sans text-sm leading-relaxed">
                        No. These templates are provided for informational and educational purposes only. Using them
                        does not create an attorney-client relationship. You should always adapt them carefully and
                        consult with your own legal counsel to ensure they meet your specific jurisdictional and
                        business requirements.
                    </div>
</details>
<details className="group border-b border-lightgray/20">
<summary className="flex items-center justify-between cursor-pointer py-6 pr-4 list-none outline-none focus-visible:text-coral transition-colors">
<h3 className="font-serif text-xl tracking-tight text-white group-hover:text-coral transition-colors">
                            Can I use these outside the Cardano ecosystem?</h3>
<iconify-icon className="text-xl text-lightgray group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="pb-6 pr-12 text-lightgray font-sans text-sm leading-relaxed">
                        Yes. While they were curated and structured with web3 builders and the Cardano community in
                        mind, the core legal mechanics (like NDAs or Contractor Agreements) are universally applicable
                        to most tech startups and service-based businesses.
                    </div>
</details>
<details className="group border-b border-lightgray/20">
<summary className="flex items-center justify-between cursor-pointer py-6 pr-4 list-none outline-none focus-visible:text-coral transition-colors">
<h3 className="font-serif text-xl tracking-tight text-white group-hover:text-coral transition-colors">
                            What format are the templates in?</h3>
<iconify-icon className="text-xl text-lightgray group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="pb-6 pr-12 text-lightgray font-sans text-sm leading-relaxed">
                        All templates are hosted as view-only Google Docs. To use one, simply open the link, ensure you
                        are logged into a Google account, and click 'File &gt; Make a copy'. This gives you a private,
                        editable version instantly.
                    </div>
</details>
<details className="group border-b border-lightgray/20">
<summary className="flex items-center justify-between cursor-pointer py-6 pr-4 list-none outline-none focus-visible:text-coral transition-colors">
<h3 className="font-serif text-xl tracking-tight text-white group-hover:text-coral transition-colors">
                            How do updates work?</h3>
<iconify-icon className="text-xl text-lightgray group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="pb-6 pr-12 text-lightgray font-sans text-sm leading-relaxed">
                        We occasionally update the master templates to reflect general best practices. However, once you
                        make a copy for your own use, your document remains static and will not receive automatic
                        updates. Check back here periodically for the latest versions.
                    </div>
</details>
<details className="group border-b border-lightgray/20">
<summary className="flex items-center justify-between cursor-pointer py-6 pr-4 list-none outline-none focus-visible:text-coral transition-colors">
<h3 className="font-serif text-xl tracking-tight text-white group-hover:text-coral transition-colors">
                            Can Sparring help tailor these to my specific needs?</h3>
<iconify-icon className="text-xl text-lightgray group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="pb-6 pr-12 text-lightgray font-sans text-sm leading-relaxed">
                        Absolutely. If you have complex requirements, cross-border considerations, or need bespoke legal
                        architecture beyond these templates, you can reach out to the Sparring team directly for
                        dedicated counsel.
                    </div>
</details>
</div>
</div>
</section>

<section className="border-lightgray/10 overflow-hidden text-center w-full max-w-7xl border-t mr-auto ml-auto pt-32 pr-6 pb-32 pl-6 relative">
<div className="absolute inset-0 bg-gradient-radial from-coral/5 to-transparent pointer-events-none -z-10"></div>
<div className="flex flex-col gap-1 mb-8 gap-x-1 gap-y-1 items-center">
<span className="text-coral uppercase text-xs font-medium tracking-widest font-sans">[ 06 / 06 ]</span>
<span className="text-lightgray font-sans text-xs tracking-widest uppercase">[ Download ]</span>
</div>
<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tighter text-white font-normal mb-10 max-w-3xl mx-auto leading-tight">
            Empower your foundation.<br/>Download the templates.
        </h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-coral text-white px-10 py-4 rounded-full font-sans text-sm font-medium hover:bg-white hover:text-blue transition-colors shadow-[0_0_20px_rgba(255,113,117,0.15)] hover:-translate-y-1" href="#templates">
                Get Contract Suite
            </a>
</div>
</section>
</main>

<footer className="border-lightgray/10 bg-[#0E1A2E] border-t pt-16 pb-8">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="font-serif text-xl tracking-tighter text-white flex items-center gap-3 mb-4" href="#">
<span className="w-8 h-8 rounded-full border border-lightgray/30 flex items-center justify-center text-sm font-sans tracking-normal bg-white/5">CS</span>
                        Cardano Contract Suite
                    </a>
<p className="font-sans text-sm text-lightgray max-w-sm leading-relaxed">
                        Essential templates for innovators. Redefining the legal industry through empowerment and long-term honest relationships.
                    </p>
</div>
<div className="flex flex-col gap-4">
<span className="font-sans text-xs font-semibold text-white uppercase tracking-widest">Navigation</span>
<a className="font-sans text-sm text-lightgray hover:text-coral transition-colors w-fit" href="#templates">Templates</a>
<a className="font-sans text-sm text-lightgray hover:text-coral transition-colors w-fit" href="#how-it-works">How it works</a>
<a className="font-sans text-sm text-lightgray hover:text-coral transition-colors w-fit" href="#faq">FAQ</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-sans text-xs font-semibold text-white uppercase tracking-widest">Links</span>
<a className="font-sans text-sm text-lightgray hover:text-coral transition-colors w-fit flex items-center gap-1" href="https://projectcatalyst.io" rel="noopener noreferrer" target="_blank">
                        Project Catalyst <iconify-icon className="text-xs" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
<a className="font-sans text-sm text-lightgray hover:text-coral transition-colors w-fit flex items-center gap-1" href="https://sparring-legal-c8311d8c81d61b23b52329d6.webflow.io" rel="noopener noreferrer" target="_blank">
                        Sparring Legal <iconify-icon className="text-xs" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
<div className="border-t border-lightgray/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="font-sans text-xs text-darkgray uppercase tracking-wider text-center md:text-left">
                    © 2024 Contract Suite. Not legal advice.
                </p>
<div className="flex items-center gap-4 text-darkgray font-sans text-xs">
<span>Designed for Builders</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
