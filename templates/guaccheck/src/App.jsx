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
      

<nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-stone-200/50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-[#6B8E23] rounded-lg flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-300">
<iconify-icon icon="solar:camera-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tight text-[#2C3E1F]">GuacCheck</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-[#2C3E1F]/70 hover:text-[#6B8E23] transition-colors" href="#features">Features</a>
<a className="hover:text-[#6B8E23] transition-colors cursor-pointer text-sm font-medium text-[#2C3E1F]/70" href="#privacy">Privacy</a>
<a className="hover:text-[#6B8E23] transition-colors text-sm font-medium text-[#2C3E1F]/70" href="#terms">Terms</a>
</div>
<button className="bg-[#2C3E1F] hover:bg-[#1a2512] text-white text-xs font-medium px-4 py-2 rounded-full transition-all shadow-lg shadow-[#6B8E23]/20 flex items-center gap-2">
                Download App
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</nav>

<div className="min-h-screen pt-24 pr-6 pb-20 pl-6">
<div className="max-w-6xl mx-auto">

<section className="flex flex-col md:flex-row items-center justify-between gap-12 mb-32 mt-8 md:mt-16">
<div className="flex-1 text-center md:text-left space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6B8E23]/10 border border-[#6B8E23]/20 text-[#6B8E23] text-xs font-medium tracking-wide">
<iconify-icon icon="solar:stars-minimalistic-linear"></iconify-icon>
                        AI-POWERED ANALYSIS
                    </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] text-[#2C3E1F]">
                        Stop squeezing.
                        <span className="app-gradient-text">Start scanning.</span>
</h1>
<p className="text-lg text-[#2C3E1F]/70 max-w-lg mx-auto md:mx-0 font-normal leading-relaxed">
                        Check avocado ripeness instantly with AI. No more guesswork, no more bruised fruit. Perfect guacamole is just a photo away.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
<a className="h-12 px-6 rounded-lg bg-black text-white flex items-center gap-3 hover:bg-zinc-800 transition-all shadow-xl group" href="#">
<iconify-icon icon="ic:baseline-apple" width="24"></iconify-icon>
<div className="flex flex-col items-start leading-none">
<span className="text-[10px] text-zinc-400 font-medium">Download on the</span>
<span className="text-sm font-medium tracking-tight">App Store</span>
</div>
</a>
<div className="flex items-center gap-2 text-sm text-[#2C3E1F]/60">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-stone-200 border-2 border-[#FDFCF8]"></div>
<div className="w-8 h-8 rounded-full bg-stone-300 border-2 border-[#FDFCF8]"></div>
<div className="w-8 h-8 rounded-full bg-stone-400 border-2 border-[#FDFCF8]"></div>
</div>
<span>Loved by guac lovers</span>
</div>
</div>
</div>

<div className="flex-1 relative flex justify-center md:justify-end animate-float">

<div className="absolute inset-0 bg-gradient-to-tr from-[#6B8E23]/30 to-transparent blur-3xl rounded-full transform translate-x-10 translate-y-10"></div>

<div className="relative w-[300px] h-[600px] bg-white rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden z-10">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-slate-900 rounded-b-2xl z-20"></div>

<div className="pt-12 px-6 pb-4 flex justify-between items-center bg-[#FDFCF8]">
<iconify-icon className="text-slate-800" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
<span className="font-semibold tracking-tight text-slate-800">GuacCheck</span>
<iconify-icon className="text-slate-800" icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>

<div className="px-6 py-6 flex flex-col h-full bg-[#FDFCF8]">
<div className="relative w-full aspect-square rounded-2xl bg-stone-100 overflow-hidden mb-6 flex items-center justify-center border border-stone-200">
<iconify-icon className="text-stone-300 absolute" icon="solar:camera-linear" width="48"></iconify-icon>

<div className="w-32 h-40 bg-[#6B8E23] rounded-[40%_40%_60%_60%] shadow-inner flex items-center justify-center relative">
<div className="w-32 h-40 bg-gradient-to-br from-[#8db33f] to-[#4a6316] rounded-[40%_40%_60%_60%] opacity-90 absolute"></div>
<div className="relative z-10 w-8 h-16 border-r-4 border-white/20 rounded-full blur-sm transform rotate-12 translate-x-4"></div>
</div>

<div className="absolute bottom-4 bg-white/90 backdrop-blur shadow-lg px-4 py-2 rounded-full flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-medium text-emerald-700">Analysis Complete</span>
</div>
</div>
<div className="space-y-4">
<div className="flex justify-between items-end">
<div className="">
<h3 className="text-2xl font-medium tracking-tight text-slate-900">Perfectly Ripe</h3>
<p className="text-xs text-slate-500">Confidence: 94%</p>
</div>
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<iconify-icon icon="solar:check-circle-bold" width="24"></iconify-icon>
</div>
</div>
<div className="h-px w-full bg-slate-100"></div>
<div className="grid grid-cols-2 gap-3">
<div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
<p className="text-[10px] text-stone-500 uppercase tracking-wider mb-1">Texture</p>
<p className="text-sm font-medium text-slate-700">Creamy</p>
</div>
<div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
<p className="text-[10px] text-stone-500 uppercase tracking-wider mb-1">Best For</p>
<p className="text-sm font-medium text-slate-700">Guacamole</p>
</div>
</div>
<button className="w-full py-3 bg-[#2C3E1F] text-white rounded-xl text-sm font-medium mt-2 shadow-lg shadow-[#2C3E1F]/20">Scan Another</button>
</div>
</div>
</div>

<div className="absolute top-40 -right-12 w-48 bg-white p-4 rounded-2xl shadow-xl border border-stone-100 transform rotate-6 hidden lg:block">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
<iconify-icon icon="solar:danger-circle-linear" width="18"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-slate-900">Overripe</p>
<p className="text-[10px] text-slate-400">Yesterday at 2:30 PM</p>
</div>
</div>
<div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-orange-400 rounded-full"></div>
</div>
</div>
</div>
</section>

<section className="grid md:grid-cols-3 gap-8 mb-32" id="features">
<div className="p-8 rounded-3xl bg-white border border-stone-100 shadow-sm hover:shadow-md transition-all group">
<div className="w-12 h-12 rounded-2xl bg-[#6B8E23]/10 text-[#6B8E23] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:scanner-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#2C3E1F] mb-3">Instant Scan</h3>
<p className="text-sm text-[#2C3E1F]/60 leading-relaxed">
                        Point your camera at any avocado. Our advanced AI processes the visual data in milliseconds.
                    </p>
</div>
<div className="p-8 rounded-3xl bg-white border border-stone-100 shadow-sm hover:shadow-md transition-all group">
<div className="w-12 h-12 rounded-2xl bg-[#6B8E23]/10 text-[#6B8E23] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#2C3E1F] mb-3">Privacy First</h3>
<p className="text-sm text-[#2C3E1F]/60 leading-relaxed">
                        Images are processed in real-time and immediately discarded. We never store your photos.
                    </p>
</div>
<div className="p-8 rounded-3xl bg-white border border-stone-100 shadow-sm hover:shadow-md transition-all group">
<div className="w-12 h-12 rounded-2xl bg-[#6B8E23]/10 text-[#6B8E23] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chef-hat-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#2C3E1F] mb-3">Eat with Confidence</h3>
<p className="text-sm text-[#2C3E1F]/60 leading-relaxed">
                        Get accurate recommendations on whether it's ready for slicing, mashing, or waiting.
                    </p>
</div>
</section>

<section className="bg-[#2C3E1F] rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden mb-32">
<div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Ready for better brunch?</h2>
<p className="text-white/70 mb-10 font-normal">Join thousands of others making better avocado decisions today.</p>
<div className="flex justify-center">
<button className="bg-white text-[#2C3E1F] px-8 py-4 rounded-xl text-sm font-semibold tracking-tight hover:bg-stone-100 transition-colors shadow-xl shadow-black/20">
                            Download GuacCheck
                        </button>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto py-12 border-t border-stone-200" id="privacy">
<div className="mb-10 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#6B8E23]/10 text-[#6B8E23] mb-4">
<iconify-icon icon="solar:lock-keyhole-linear" width="24"></iconify-icon>
</div>
<h2 className="text-3xl font-medium tracking-tight text-[#6B8E23]">Privacy Policy</h2>
<p className="text-[#6B7C5E] text-sm mt-2">Last updated: January 2026</p>
</div>
<div className="bg-white rounded-2xl p-8 md:p-12 border border-stone-100 shadow-sm space-y-8 text-[#2C3E1F] leading-relaxed">
<div className="space-y-2">
<h3 className="text-xl font-medium tracking-tight text-[#6B8E23] flex items-center gap-2">
<iconify-icon className="opacity-50" icon="solar:info-circle-linear"></iconify-icon> Overview
                        </h3>
<p className="text-sm text-[#2C3E1F]/80">GuacCheck ("we", "our", or "the app") is committed to protecting your privacy. This policy explains how we handle information when you use our avocado ripeness checking application.</p>
</div>
<div className="space-y-2">
<h3 className="text-xl font-medium tracking-tight text-[#6B8E23] flex items-center gap-2">
<iconify-icon className="opacity-50" icon="solar:forbidden-circle-linear"></iconify-icon> Information We Do NOT Collect
                        </h3>
<div className="bg-stone-50 p-4 rounded-lg border border-stone-100 my-4">
<p className="text-sm font-medium text-[#2C3E1F]">We do not store your photos.</p>
</div>
<ul className="space-y-3 text-sm text-[#2C3E1F]/80 list-disc pl-5 marker:text-[#6B8E23]">
<li>Images you capture or upload for avocado analysis are processed in real-time and are immediately discarded after analysis. We do not retain, store, or archive any photos on our servers.</li>
<li>We do not collect personal information such as names, email addresses, or account details.</li>
<li>We do not track your location or device identifiers.</li>
<li>We do not use cookies or tracking technologies.</li>
</ul>
</div>
<div className="space-y-2">
<h3 className="text-xl font-medium tracking-tight text-[#6B8E23]">How Analysis Works</h3>
<p className="text-sm text-[#2C3E1F]/80">When you scan an avocado, the image is sent securely to our AI service for real-time analysis. The image is processed to determine ripeness and then immediately deleted. No copy is saved.</p>
</div>
<div className="space-y-2">
<h3 className="text-xl font-medium tracking-tight text-[#6B8E23]">Data Sharing</h3>
<p className="text-sm text-[#2C3E1F]/80">We do not sell, trade, or share any user data with third parties. The only data transmission is the temporary image processing required for the ripeness analysis feature.</p>
</div>
<div className="space-y-2">
<h3 className="text-xl font-medium tracking-tight text-[#6B8E23]">Children's Privacy</h3>
<p className="text-sm text-[#2C3E1F]/80">Our app is suitable for all ages (rated 4+) and does not collect personal information from any users, including children.</p>
</div>
<div className="space-y-2">
<h3 className="text-xl font-medium tracking-tight text-[#6B8E23]">Changes to This Policy</h3>
<p className="text-sm text-[#2C3E1F]/80">We may update this privacy policy from time to time. Any changes will be reflected on this page with an updated revision date.</p>
</div>
<div className="space-y-2">
<h3 className="text-xl font-medium tracking-tight text-[#6B8E23]">Contact</h3>
<p className="text-sm text-[#2C3E1F]/80">If you have questions about this privacy policy, please contact us through the App Store listing.</p>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto py-12 border-t border-stone-200" id="terms">
<div className="mb-10 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#6B8E23]/10 text-[#6B8E23] mb-4">
<iconify-icon icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<h2 className="text-3xl font-medium tracking-tight text-[#6B8E23]">Terms of Service</h2>
<p className="text-[#6B7C5E] text-sm mt-2">Last updated: January 2026</p>
</div>
<div className="bg-white rounded-2xl p-8 md:p-12 border border-stone-100 shadow-sm space-y-8 text-[#2C3E1F] leading-relaxed">
<div className="space-y-2">
<h3 className="text-xl font-medium tracking-tight text-[#6B8E23]">Acceptance of Terms</h3>
<p className="text-sm text-[#2C3E1F]/80">By downloading, installing, or using GuacCheck ("the app"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the app.</p>
</div>
<div className="space-y-2">
<h3 className="text-xl font-medium tracking-tight text-[#6B8E23]">Description of Service</h3>
<p className="text-sm text-[#2C3E1F]/80">GuacCheck is an entertainment and utility application that uses artificial intelligence to analyze photos of avocados and provide ripeness estimates. The app is designed for personal, non-commercial use.</p>
</div>
<div className="space-y-2">
<h3 className="text-xl font-medium tracking-tight text-[#6B8E23] flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:danger-triangle-linear"></iconify-icon> Disclaimer of Warranties
                        </h3>
<div className="bg-orange-50 p-4 rounded-lg border border-orange-100 my-4">
<p className="text-sm font-medium text-orange-900">For entertainment purposes only.</p>
</div>
<p className="text-sm text-[#2C3E1F]/80 mb-3">Ripeness results provided by GuacCheck are estimates based on visual analysis and should be used for general guidance only. We make no warranties or guarantees about the accuracy of ripeness predictions.</p>
<p className="text-sm text-[#2C3E1F]/80">Always use your own judgment when determining if food is safe to consume. The app is not a substitute for proper food safety practices.</p>
</div>
<div className="space-y-2">
<h3 className="text-xl font-medium tracking-tight text-[#6B8E23]">Limitation of Liability</h3>
<p className="text-sm text-[#2C3E1F]/80">GuacCheck and its developers shall not be liable for any damages arising from the use of or inability to use the app, including but not limited to any decisions made based on ripeness analysis results.</p>
</div>
<div className="space-y-2">
<h3 className="text-xl font-medium tracking-tight text-[#6B8E23]">Acceptable Use</h3>
<p className="text-sm text-[#2C3E1F]/80">You agree to use the app only for lawful purposes and in accordance with these terms. You may not misuse the service or attempt to interfere with its proper functioning.</p>
</div>
<div className="space-y-2">
<h3 className="text-xl font-medium tracking-tight text-[#6B8E23]">Intellectual Property</h3>
<p className="text-sm text-[#2C3E1F]/80">All content, features, and functionality of the app are owned by GuacCheck and are protected by copyright and other intellectual property laws.</p>
</div>
<div className="space-y-2">
<h3 className="text-xl font-medium tracking-tight text-[#6B8E23]">Changes to Terms</h3>
<p className="text-sm text-[#2C3E1F]/80">We reserve the right to modify these terms at any time. Continued use of the app after changes constitutes acceptance of the new terms.</p>
</div>
<div className="space-y-2">
<h3 className="text-xl font-medium tracking-tight text-[#6B8E23]">Contact</h3>
<p className="text-sm text-[#2C3E1F]/80">For questions about these terms, please contact us through the App Store listing.</p>
</div>
</div>
</section>
</div>
</div>

<footer className="border-t border-stone-200 bg-white/50 backdrop-blur-sm">
<div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-50">
<iconify-icon icon="solar:camera-minimalistic-linear"></iconify-icon>
<span className="text-sm font-medium tracking-tight">GuacCheck</span>
</div>
<div className="flex gap-8">
<a className="text-xs text-[#2C3E1F]/60 hover:text-[#2C3E1F] transition-colors" href="#privacy">Privacy Policy</a>
<a className="text-xs text-[#2C3E1F]/60 hover:text-[#2C3E1F] transition-colors" href="#terms">Terms of Service</a>
<span className="text-xs text-[#2C3E1F]/30">© 2026 GuacCheck</span>
</div>
</div>
</footer>

    </>
  );
}
