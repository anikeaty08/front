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



        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
            // Toggle active state shadow for the button
            if(menu.classList.contains('flex')) {
                btn.classList.add('shadow-[inset_3px_3px_6px_rgb(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)]');
                btn.classList.remove('shadow-[5px_5px_10px_rgb(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)]');
            } else {
                btn.classList.remove('shadow-[inset_3px_3px_6px_rgb(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)]');
                btn.classList.add('shadow-[5px_5px_10px_rgb(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)]');
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
      

<nav className="fixed top-0 w-full z-50 bg-[#E0E5EC]/90 backdrop-blur-md border-b border-transparent transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="font-display font-extrabold text-2xl tracking-tighter text-[#3D4852] flex items-center gap-2 group" href="#">
<div className="w-10 h-10 rounded-xl bg-[#E0E5EC] flex items-center justify-center shadow-[5px_5px_10px_rgb(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] group-hover:shadow-[inset_3px_3px_6px_rgb(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] transition-all duration-300">
<iconify-icon className="text-[#6C63FF] text-xl" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
                NEU<span className="text-[#6C63FF]">.</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-[#6B7280] hover:text-[#3D4852] transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-[#6B7280] hover:text-[#3D4852] transition-colors" href="#components">Components</a>
<a className="text-sm font-medium text-[#6B7280] hover:text-[#3D4852] transition-colors" href="#system">System</a>

<button className="h-12 px-6 rounded-2xl bg-[#E0E5EC] text-[#6C63FF] font-bold text-sm tracking-tight shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] hover:shadow-[12px_12px_20px_rgb(163,177,198,0.7),-12px_-12px_20px_rgba(255,255,255,0.6)] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[inset_3px_3px_6px_rgb(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] transition-all duration-300">
                    Get Started
                </button>
</div>

<button className="md:hidden w-12 h-12 rounded-2xl bg-[#E0E5EC] flex items-center justify-center text-[#3D4852] shadow-[5px_5px_10px_rgb(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] active:shadow-[inset_3px_3px_6px_rgb(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] transition-all duration-300" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-[#E0E5EC] shadow-[0_10px_20px_rgb(163,177,198,0.2)] p-6 flex-col gap-4 border-t border-[#E0E5EC]" id="mobile-menu">
<a className="p-4 rounded-2xl text-[#3D4852] font-medium shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] active:shadow-[inset_3px_3px_6px_rgb(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] transition-all text-center" href="#features">Features</a>
<a className="p-4 rounded-2xl text-[#3D4852] font-medium shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] active:shadow-[inset_3px_3px_6px_rgb(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] transition-all text-center" href="#components">Components</a>
<button className="w-full h-12 rounded-2xl bg-[#6C63FF] text-white font-bold shadow-[5px_5px_10px_rgb(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] active:scale-95 transition-all">Get Started</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E0E5EC] shadow-[inset_3px_3px_6px_rgb(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] mb-8">
<span className="w-2 h-2 rounded-full bg-[#6C63FF]"></span>
<span className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">v2.0 System Available</span>
</div>
<h1 className="font-display font-extrabold text-5xl lg:text-7xl leading-tight tracking-tight text-[#3D4852] mb-6">
                    Soft UI for <br/>
<span className="text-[#6C63FF]">Hard Problems</span>
</h1>
<p className="text-lg lg:text-xl text-[#6B7280] leading-relaxed mb-10 max-w-lg">
                    Experience the tactile depth of Neumorphism. A design system where elements feel molded from a single surface, creating a calm, physical digital environment.
                </p>
<div className="flex flex-col sm:flex-row gap-6">

<button className="h-14 px-8 rounded-2xl bg-[#6C63FF] text-white font-bold tracking-tight shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] hover:-translate-y-1 hover:shadow-[12px_12px_20px_rgb(163,177,198,0.7),-12px_-12px_20px_rgba(255,255,255,0.6)] active:translate-y-0.5 active:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.3)] transition-all duration-300">
                        Start Building
                    </button>

<button className="h-14 px-8 rounded-2xl bg-[#E0E5EC] text-[#3D4852] font-bold tracking-tight shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] hover:-translate-y-1 hover:shadow-[12px_12px_20px_rgb(163,177,198,0.7),-12px_-12px_20px_rgba(255,255,255,0.6)] active:translate-y-0.5 active:shadow-[inset_3px_3px_6px_rgb(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] transition-all duration-300 flex items-center gap-2">
<iconify-icon className="text-xl" icon="solar:play-circle-linear"></iconify-icon>
                        Watch Demo
                    </button>
</div>
</div>

<div className="relative flex justify-center items-center lg:justify-end">

<div className="absolute -z-10 w-[500px] h-[500px] bg-gradient-to-br from-[#E0E5EC] to-[#E0E5EC] rounded-full blur-3xl opacity-50"></div>

<div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full bg-[#E0E5EC] shadow-[20px_20px_40px_rgb(163,177,198,0.6),-20px_-20px_40px_rgba(255,255,255,0.5)] flex items-center justify-center animate-float">

<div className="w-64 h-64 rounded-full bg-[#E0E5EC] shadow-[inset_10px_10px_20px_rgb(163,177,198,0.6),inset_-10px_-10px_20px_rgba(255,255,255,0.5)] flex items-center justify-center">

<div className="w-40 h-40 rounded-full bg-[#E0E5EC] shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] flex items-center justify-center animate-float-delayed">
<iconify-icon className="text-6xl text-[#6C63FF]" icon="solar:shield-check-linear"></iconify-icon>
</div>
</div>

<div className="absolute -top-6 -right-6 w-20 h-20 rounded-[20px] bg-[#E0E5EC] shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] flex items-center justify-center animate-bounce" style={{animationDuration: '3s'}}>
<iconify-icon className="text-3xl text-[#38B2AC]" icon="solar:bolt-circle-linear"></iconify-icon>
</div>
<div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl bg-[#E0E5EC] shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] flex items-center justify-center animate-pulse">
<span className="text-xl font-bold text-[#3D4852]">Ui</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#E0E5EC]" id="features">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="font-display font-bold text-3xl md:text-4xl text-[#3D4852] tracking-tight mb-4">Sculpted from Light</h2>
<p className="text-[#6B7280] text-lg">Every input, card, and button is carefully crafted with dual shadows to create a hyper-realistic tactile experience.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">

<div className="group p-10 rounded-[32px] bg-[#E0E5EC] shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] hover:shadow-[12px_12px_20px_rgb(163,177,198,0.7),-12px_-12px_20px_rgba(255,255,255,0.6)] hover:-translate-y-2 transition-all duration-300">
<div className="w-16 h-16 rounded-2xl bg-[#E0E5EC] shadow-[inset_6px_6px_10px_rgb(163,177,198,0.6),inset_-6px_-6px_10px_rgba(255,255,255,0.5)] flex items-center justify-center mb-8 text-[#6C63FF]">
<iconify-icon className="text-3xl" icon="solar:widget-2-linear"></iconify-icon>
</div>
<h3 className="font-display font-bold text-xl text-[#3D4852] mb-3">Modular Components</h3>
<p className="text-[#6B7280] leading-relaxed">Pre-built extruded and inset components that fit together perfectly like physical puzzle pieces.</p>
</div>

<div className="group p-10 rounded-[32px] bg-[#E0E5EC] shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] hover:shadow-[12px_12px_20px_rgb(163,177,198,0.7),-12px_-12px_20px_rgba(255,255,255,0.6)] hover:-translate-y-2 transition-all duration-300">
<div className="w-16 h-16 rounded-2xl bg-[#E0E5EC] shadow-[inset_6px_6px_10px_rgb(163,177,198,0.6),inset_-6px_-6px_10px_rgba(255,255,255,0.5)] flex items-center justify-center mb-8 text-[#38B2AC]">
<iconify-icon className="text-3xl" icon="solar:accessibility-linear"></iconify-icon>
</div>
<h3 className="font-display font-bold text-xl text-[#3D4852] mb-3">WCAG Accessible</h3>
<p className="text-[#6B7280] leading-relaxed">Unlike traditional neumorphism, we prioritize contrast ratios (7.5:1) for text and interactive elements.</p>
</div>

<div className="group p-10 rounded-[32px] bg-[#E0E5EC] shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] hover:shadow-[12px_12px_20px_rgb(163,177,198,0.7),-12px_-12px_20px_rgba(255,255,255,0.6)] hover:-translate-y-2 transition-all duration-300">
<div className="w-16 h-16 rounded-2xl bg-[#E0E5EC] shadow-[inset_6px_6px_10px_rgb(163,177,198,0.6),inset_-6px_-6px_10px_rgba(255,255,255,0.5)] flex items-center justify-center mb-8 text-[#6C63FF]">
<iconify-icon className="text-3xl" icon="solar:tuning-square-2-linear"></iconify-icon>
</div>
<h3 className="font-display font-bold text-xl text-[#3D4852] mb-3">Physics Based</h3>
<p className="text-[#6B7280] leading-relaxed">Interactions feel real. Buttons depress, toggles slide in tracks, and inputs feel deeply carved.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="components">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="bg-[#E0E5EC] rounded-[32px] p-8 md:p-12 shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)]">
<div className="flex items-center justify-between mb-10">
<h3 className="font-display font-bold text-2xl text-[#3D4852]">System Settings</h3>
<div className="w-10 h-10 rounded-full bg-[#E0E5EC] shadow-[5px_5px_10px_rgb(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] flex items-center justify-center">
<iconify-icon className="text-[#6B7280]" icon="solar:settings-linear"></iconify-icon>
</div>
</div>
<div className="space-y-8">

<div className="space-y-2">
<label className="text-sm font-bold text-[#6B7280] ml-1">Device Name</label>
<div className="relative">
<input className="w-full h-14 rounded-2xl bg-[#E0E5EC] shadow-[inset_6px_6px_10px_rgb(163,177,198,0.6),inset_-6px_-6px_10px_rgba(255,255,255,0.5)] px-5 text-[#3D4852] placeholder-[#A0AEC0] outline-none focus:ring-2 focus:ring-[#6C63FF] focus:ring-offset-2 focus:ring-offset-[#E0E5EC] transition-all" placeholder="Living Room Hub" type="text"/>
<iconify-icon className="absolute right-5 top-1/2 -translate-y-1/2 text-[#6B7280]" icon="solar:pen-linear"></iconify-icon>
</div>
</div>

<div className="space-y-4">
<div className="flex justify-between items-center ml-1 mr-1">
<span className="text-sm font-bold text-[#6B7280]">Brightness</span>
<span className="text-sm font-bold text-[#3D4852]">75%</span>
</div>
<input className="w-full" max="100" min="0" type="range" value="75"/>
</div>

<div className="flex items-center justify-between p-4 rounded-2xl shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)]">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#E0E5EC] shadow-[inset_3px_3px_6px_rgb(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] flex items-center justify-center text-[#6C63FF]">
<iconify-icon icon="solar:wifi-square-linear"></iconify-icon>
</div>
<span className="font-medium text-[#3D4852]">Wi-Fi Network</span>
</div>
<label className="flex items-center cursor-pointer relative">
<input checked="" className="neu-toggle sr-only" type="checkbox"/>
<div className="w-14 h-8 bg-[#E0E5EC] rounded-full shadow-[inset_3px_3px_6px_rgb(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] p-1 transition-colors duration-300">
<div className="bg-[#E0E5EC] w-6 h-6 rounded-full shadow-[5px_5px_10px_rgb(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] transition-transform duration-300"></div>
</div>
</label>
</div>

<div className="flex items-center justify-between p-4 rounded-2xl shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)]">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#E0E5EC] shadow-[inset_3px_3px_6px_rgb(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] flex items-center justify-center text-[#6B7280]">
<iconify-icon icon="solar:moon-linear"></iconify-icon>
</div>
<span className="font-medium text-[#3D4852]">Night Mode</span>
</div>
<label className="flex items-center cursor-pointer relative">
<input className="neu-toggle sr-only" type="checkbox"/>
<div className="w-14 h-8 bg-[#E0E5EC] rounded-full shadow-[inset_3px_3px_6px_rgb(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] p-1 transition-colors duration-300">
<div className="bg-[#E0E5EC] w-6 h-6 rounded-full shadow-[5px_5px_10px_rgb(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] transition-transform duration-300"></div>
</div>
</label>
</div>
</div>
</div>

<div className="flex flex-col justify-center">
<h2 className="font-display font-bold text-3xl md:text-4xl text-[#3D4852] tracking-tight mb-6">Interactive Depth</h2>
<p className="text-[#6B7280] text-lg mb-8 leading-relaxed">
                    Notice how the input fields are deeply inset, suggesting a carved well, while buttons and toggles sit extruded on the surface. When a button is pressed, it becomes inset, mimicking the physical action of pushing a real object.
                </p>

<div className="grid grid-cols-2 gap-6">

<button className="aspect-square rounded-2xl bg-[#E0E5EC] shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] hover:shadow-[12px_12px_20px_rgb(163,177,198,0.7),-12px_-12px_20px_rgba(255,255,255,0.6)] active:shadow-[inset_6px_6px_10px_rgb(163,177,198,0.6),inset_-6px_-6px_10px_rgba(255,255,255,0.5)] flex flex-col items-center justify-center gap-2 transition-all group">
<iconify-icon className="text-3xl text-[#6C63FF] group-active:scale-95 transition-transform" icon="solar:cloud-upload-linear"></iconify-icon>
<span className="text-xs font-bold text-[#6B7280]">Upload</span>
</button>

<button className="aspect-square rounded-2xl bg-[#E0E5EC] shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] hover:shadow-[12px_12px_20px_rgb(163,177,198,0.7),-12px_-12px_20px_rgba(255,255,255,0.6)] active:shadow-[inset_6px_6px_10px_rgb(163,177,198,0.6),inset_-6px_-6px_10px_rgba(255,255,255,0.5)] flex flex-col items-center justify-center gap-2 transition-all group">
<iconify-icon className="text-3xl text-[#38B2AC] group-active:scale-95 transition-transform" icon="solar:bell-linear"></iconify-icon>
<span className="text-xs font-bold text-[#6B7280]">Alerts</span>
</button>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-[#d1d9e6]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-[#E0E5EC] shadow-[3px_3px_6px_rgb(163,177,198,0.6),-3px_-3px_6px_rgba(255,255,255,0.5)] flex items-center justify-center">
<iconify-icon className="text-[#6C63FF]" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<span className="font-display font-bold text-[#3D4852]">NEU.</span>
</div>
<p className="text-sm text-[#6B7280] text-center">© 2024 Neumorph Design. Crafted with shadow &amp; light.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-[#E0E5EC] shadow-[5px_5px_10px_rgb(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] hover:text-[#6C63FF] hover:-translate-y-0.5 transition-all flex items-center justify-center text-[#6B7280]" href="#">
<iconify-icon icon="solar:brand-twitter-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-[#E0E5EC] shadow-[5px_5px_10px_rgb(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] hover:text-[#6C63FF] hover:-translate-y-0.5 transition-all flex items-center justify-center text-[#6B7280]" href="#">
<iconify-icon icon="solar:brand-github-linear"></iconify-icon>
</a>
</div>
</div>
</footer>



    </>
  );
}
