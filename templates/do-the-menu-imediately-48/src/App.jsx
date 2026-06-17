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



      (function(){const observer=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.remove('opacity-0','translate-y-8');}});},{threshold:0.1,rootMargin:'0px 0px -50px 0px'});setTimeout(()=>{document.querySelectorAll('.reveal-on-scroll').forEach(el=>observer.observe(el));},100);})();
    
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
      

<main className="relative flex-1 min-h-[50vh] lg:min-h-screen flex flex-col justify-between p-8 md:p-12 lg:p-20 overflow-hidden group border-b lg:border-b-0 lg:border-r border-white/10">

<div className="absolute inset-0 z-0 overflow-hidden bg-neutral-900">
<img alt="Sovereign Background" className="panel-bg pointer-events-none opacity-40 mix-blend-luminosity w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>

<div className="z-10 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/40 absolute top-0 right-0 bottom-0 left-0">
<img alt="Container background" className="opacity-50 mix-blend-luminosity w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 brightness-50" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d391e99-5dad-49f4-b996-2b5b63f6064c_1600w.jpg"/>
</div>
</div>
<div className="relative z-20 flex flex-col h-full justify-between w-full max-w-2xl mx-auto lg:mx-0">

<header className="flex justify-between items-center w-full">
<div className="flex items-center">
<img alt="SVRN Logo" className="w-auto h-6 object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ceae86d3-f084-475d-9608-1bb64bb01873_320w.png"/>
</div>
</header>

<div className="mt-24 mb-24 lg:my-auto">
<div className="mb-8 inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
<iconify-icon className="text-xl text-neutral-300" icon="solar:shield-keyhole-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium tracking-tight text-neutral-200">
              Sovereign Blueprint
            </span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
            Where Sovereign
            <br/>
            Begins.
          </h1>
<p className="text-base md:text-lg font-light text-neutral-400 max-w-md leading-relaxed">
            A dedicated, consultative approach to architecting your sovereign
            data infrastructure. We guide you through the complexities of
            establishing secure, localized, and compliant data centers built for
            absolute control.
          </p>
</div>

<footer className="mt-auto">
<a className="inline-flex items-center gap-3 text-sm font-medium text-neutral-300 hover:text-white transition-colors group/cta" href="#">
<span className="border-b border-transparent group-hover/cta:border-white/30 pb-0.5 transition-colors">
              Establish Governance
            </span>
<iconify-icon className="text-lg transition-transform group-hover/cta:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</footer>
</div>
</main>

<main className="relative flex-1 min-h-[50vh] lg:min-h-screen flex flex-col justify-between p-8 md:p-12 lg:p-20 overflow-hidden group">

<div className="absolute inset-0 z-0 overflow-hidden bg-neutral-950">
<img alt="Container background" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d9b861a-c5be-43eb-9176-7ce00f907153_3840w.jpg"/>
<video autoplay="" className="panel-bg pointer-events-none opacity-30 mix-blend-screen w-full h-full object-cover absolute inset-0 hue-rotate-15" loop="" muted="" playsinline="">
<source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_3840_2160_25fps.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 z-10 bg-neutral-950/60 pointer-events-none"></div>

<div className="absolute inset-0 z-10 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-transparent pointer-events-none"></div>
</div>
<div className="relative z-20 flex flex-col h-full justify-between w-full max-w-2xl mx-auto lg:mx-0 lg:ml-auto">

<header className="flex justify-between items-center w-full lg:justify-end">
<div className="flex items-center">
<img alt="OPTZ Logo" className="w-auto h-6 object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/37bc74ba-b571-489e-a34f-3f5bf8253cb5_320w.png"/>
</div>
</header>

<div className="mt-24 mb-24 lg:my-auto">
<div className="mb-8 inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
<iconify-icon className="text-xl text-neutral-300" icon="solar:cpu-bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium tracking-tight text-neutral-200">
              Amalgamy Software
            </span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
            Where Optimization
            <br/>
            Ends.
          </h1>
<p className="text-base md:text-lg font-light text-neutral-400 max-w-md leading-relaxed">
            A pure software play delivering cluster-as-a-service. Deploy
            agnostic, highly optimized workloads instantly across any
            infrastructure, abstracted from the underlying hardware constraints.
          </p>
</div>

<footer className="mt-auto">
<a className="inline-flex items-center gap-3 text-sm font-medium text-neutral-300 hover:text-white transition-colors group/cta" href="#">
<span className="border-b border-transparent group-hover/cta:border-white/30 pb-0.5 transition-colors">
              Deploy Workloads
            </span>
<iconify-icon className="text-lg transition-transform group-hover/cta:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</footer>
</div>
</main>
<nav className="col-span-1 lg:col-span-2 w-full border-t border-b border-white/10 bg-neutral-950/80 backdrop-blur-lg sticky top-0 z-50 flex items-center justify-between px-8 md:px-12 lg:px-20 py-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-white" icon="lucide:layers"></iconify-icon>
<span className="text-white font-semibold tracking-tight text-sm">
          SVRN &amp; OPTZ
        </span>
</div>
<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">
          Infrastructure
        </a>
<a className="hover:text-white transition-colors" href="#">Compute</a>
<a className="hover:text-white transition-colors" href="#">Synthesis</a>
<a className="hover:text-white transition-colors" href="#">Architecture</a>
</div>
<div className="flex items-center gap-6">
<a className="text-sm font-medium text-neutral-300 hover:text-white transition-colors hidden sm:block" href="#">
          Sign In
        </a>
<a className="px-4 py-2 rounded-lg bg-white text-neutral-950 text-sm font-medium hover:bg-neutral-200 transition-colors" href="#">
          Get Access
        </a>
</div>
</nav>
<section className="col-span-1 lg:col-span-2 relative w-full min-h-screen flex flex-col items-center justify-center p-8 md:p-12 lg:p-20 overflow-hidden border-t bg-white border-neutral-200">
<div className="absolute inset-0 z-0 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] pointer-events-none from-neutral-100 via-white to-white"></div>
</div>
<div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
<div className="mb-8 inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border backdrop-blur-sm reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out bg-neutral-100 border-neutral-200">
<iconify-icon className="text-xl text-neutral-500" icon="lucide:infinity" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium tracking-tight text-neutral-900">
            The Synthesis
          </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight mb-8 text-center leading-[1.1] reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-[100ms] text-neutral-950">
          Absolute Control.
          <br/>
          Infinite Scale.
        </h2>
<p className="text-lg md:text-xl font-light max-w-2xl text-center leading-relaxed mb-16 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-[200ms] text-neutral-600">
          Experience the ultimate infrastructure paradox. Maintain sovereign
          control over your sensitive data while dynamically shifting workloads
          across a decentralized compute matrix.
        </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
<div className="p-8 rounded-2xl border flex flex-col items-center text-center reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-[300ms] bg-neutral-50 border-neutral-200 hover:bg-neutral-100">
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-white border border-neutral-200 shadow-sm">
<iconify-icon className="text-2xl text-neutral-700" icon="lucide:server"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3 tracking-tight text-neutral-950">
              Localized Compute
            </h3>
<p className="text-sm font-light leading-relaxed text-neutral-600">
              Deploy on sovereign metal engineered to isolate, protect, and
              govern your intellectual property.
            </p>
</div>
<div className="p-8 rounded-2xl border flex flex-col items-center text-center reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-[400ms] bg-neutral-50 border-neutral-200 hover:bg-neutral-100">
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-white border border-neutral-200 shadow-sm">
<iconify-icon className="text-2xl text-neutral-700" icon="lucide:network"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3 tracking-tight text-neutral-950">
              Fluid Abstraction
            </h3>
<p className="text-sm font-light leading-relaxed text-neutral-600">
              Abstract the underlying hardware to run workloads instantaneously
              across varied architectures.
            </p>
</div>
<div className="p-8 rounded-2xl border flex flex-col items-center text-center reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-[500ms] bg-neutral-50 border-neutral-200 hover:bg-neutral-100">
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-white border border-neutral-200 shadow-sm">
<iconify-icon className="text-2xl text-neutral-700" icon="lucide:bar-chart-2"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3 tracking-tight text-neutral-950">
              Maximum Yield
            </h3>
<p className="text-sm font-light leading-relaxed text-neutral-600">
              Achieve unprecedented operational efficiency and utilization
              metrics across all your clusters.
            </p>
</div>
</div>
</div>
</section>
<section className="col-span-1 lg:col-span-2 relative w-full min-h-screen flex flex-col items-center justify-center p-8 md:p-12 lg:p-20 overflow-hidden border-t bg-neutral-950 border-neutral-800">
<div className="absolute inset-0 z-0 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] pointer-events-none from-neutral-900 via-neutral-950 to-neutral-950"></div>
</div>
<div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
<div className="mb-12 inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border backdrop-blur-sm reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out bg-white/5 border-white/10">
<iconify-icon className="text-xl text-neutral-400" icon="lucide:layout-template" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium tracking-tight text-neutral-200">
            Unified Architecture
          </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 w-full reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-[200ms]">

<div className="md:col-span-2 md:row-span-2 rounded-3xl border flex flex-col relative overflow-hidden bg-neutral-900/50 border-white/10 hover:bg-neutral-900 transition-colors p-8 md:p-10">
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-8 bg-white/5 border border-white/10 shadow-sm">
<iconify-icon className="text-2xl text-white" icon="lucide:globe"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-semibold mb-4 tracking-tight text-white leading-[1.1]">
              Global Distribution Matrix
            </h3>
<p className="text-base font-light leading-relaxed text-neutral-400 mb-8">
              Deploy workloads across a decentralized network without losing
              data sovereignty. Intelligent routing ensures strict data
              residency compliance and localized control.
            </p>
<div className="mt-auto relative w-full h-48 bg-neutral-950 rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
<iconify-icon className="text-6xl text-neutral-700" icon="lucide:git-merge"></iconify-icon>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 rounded-3xl border flex flex-col justify-center relative overflow-hidden bg-neutral-900/50 border-white/10 hover:bg-neutral-900 transition-colors p-8">
<div className="flex flex-col sm:flex-row items-start gap-6">
<div className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center bg-white/5 border border-white/10 shadow-sm">
<iconify-icon className="text-2xl text-white" icon="lucide:cpu"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-white leading-[1.1]">
                  Dynamic Resource Allocation
                </h3>
<p className="text-sm font-light leading-relaxed text-neutral-400">
                  Abstract hardware constraints with software-defined
                  clustering. Compute resources scale automatically and fluidly
                  exactly when complex workloads peak.
                </p>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 rounded-3xl border flex flex-col relative overflow-hidden bg-neutral-900/50 border-white/10 hover:bg-neutral-900 transition-colors p-8">
<div className="w-10 h-10 rounded-full flex items-center justify-center mb-6 bg-white/5 border border-white/10 shadow-sm">
<iconify-icon className="text-xl text-white" icon="lucide:shield-check"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 tracking-tight text-white">
              Zero-Trust
            </h3>
<p className="text-sm font-light leading-relaxed text-neutral-400">
              End-to-end cryptographic isolation and strict verification
              protocols.
            </p>
</div>

<div className="md:col-span-1 md:row-span-1 rounded-3xl border flex flex-col relative overflow-hidden bg-neutral-900/50 border-white/10 hover:bg-neutral-900 transition-colors p-8">
<div className="w-10 h-10 rounded-full flex items-center justify-center mb-6 bg-white/5 border border-white/10 shadow-sm">
<iconify-icon className="text-xl text-white" icon="lucide:zap"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 tracking-tight text-white">
              Edge Compute
            </h3>
<p className="text-sm font-light leading-relaxed text-neutral-400">
              Sub-millisecond latency at the outermost edges of the network.
            </p>
</div>
</div>
</div>
</section>


    </>
  );
}
