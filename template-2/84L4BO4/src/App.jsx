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



  lucide.createIcons({ strokeWidth: 1.5 });

  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('closeModal');
  const btnScanned = document.getElementById('btnScanned');
  const stepScan = document.getElementById('stepScan');
  const successCard = document.getElementById('successCard');

  // Close modal functionality
  closeBtn.addEventListener('click', () => {
    modal.style.opacity = '0';
    setTimeout(() => modal.classList.add('hidden'), 300);
  });

  // Handle QR scan completion
  btnScanned.addEventListener('click', () => {
    // Add loading state
    btnScanned.innerHTML = `
      <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Sending demo...
    `;
    btnScanned.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
      stepScan.style.opacity = '0';
      setTimeout(() => {
        stepScan.classList.add('hidden');
        successCard.classList.remove('hidden');
        successCard.style.opacity = '0';
        setTimeout(() => {
          successCard.style.opacity = '1';
          successCard.style.transform = 'translateY(0)';
        }, 100);
        lucide.createIcons({ strokeWidth: 1.5 });
      }, 300);
    }, 2000);
  });

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBtn.click();
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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: `url("/assets/7aa3f483-3978-4416-8322-fa9964864dcb_3840w.jpg")`}}></div>

<div className="fixed inset-0 flex items-start justify-center z-50 animate-fade-in overflow-y-auto py-4 px-4" id="modal">

<div className="relative w-full max-w-4xl overflow-hidden opacity-0 animate-scale-in animation-delay-200 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] bg-zinc-900 border-zinc-800/50 border rounded-3xl mt-12 mr-auto mb-12 ml-auto">

<div className="bg-black/30 border-zinc-800/30 border-b pt-6 pr-8 pb-6 pl-8">

<button className="absolute top-6 right-6 text-zinc-500 hover:text-zinc-100 hover:bg-zinc-800/50 rounded-2xl p-2 transition-all duration-200" id="closeModal">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="flex gap-4 opacity-0 animate-slide-up animation-delay-300 items-center">

<div className="flex w-12 h-12 bg-white bg-[url(/assets/686aa8d3-7d4f-455f-afba-ed9399e3708b_320w.jpg)] bg-cover border-zinc-800/30 border rounded-2xl items-center justify-center">
</div>
<div className="">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs uppercase tracking-wider text-zinc-500 font-medium">NeuralCore AI</span>
<span className="px-2 py-0.5 bg-zinc-800/50 text-zinc-400 text-xs rounded-xl border border-zinc-800/30">Beta</span>
</div>
<h1 className="text-2xl lg:text-3xl text-white tracking-tighter" style={{}}>Experience Your Personal AI Assistant</h1>
</div>
</div>
</div>

<div className="max-h-[70vh] overflow-y-auto pt-8 pr-8 pb-8 pl-8">

<div className="flex opacity-0 animate-slide-up animation-delay-400 mb-8 items-center justify-center">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-8 h-8 bg-white rounded-full border border-zinc-800/30">
<span className="text-sm font-medium text-zinc-900">1</span>
</div>
<div className="w-8 h-0.5 bg-zinc-800/50"></div>
<div className="flex items-center justify-center w-8 h-8 bg-zinc-800/50 rounded-full border border-zinc-800/30">
<span className="text-sm font-medium text-zinc-500">2</span>
</div>
<div className="w-8 h-0.5 bg-zinc-800/50"></div>
<div className="flex items-center justify-center w-8 h-8 bg-zinc-800/50 rounded-full border border-zinc-800/30">
<span className="text-sm font-medium text-zinc-500">3</span>
</div>
<div className="w-8 h-0.5 bg-zinc-800/50"></div>
<div className="flex items-center justify-center w-8 h-8 bg-zinc-800/50 rounded-full border border-zinc-800/30">
<span className="text-sm font-medium text-zinc-500">4</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start" id="stepScan">

<div className="opacity-0 animate-slide-up animation-delay-500">
<div className="hover:border-zinc-700/50 transition-all duration-300 bg-black/20 bg-[url(/assets/d1c5ab29-19c6-425d-b896-a48cbe5a00ff_800w.jpg)] bg-cover border-zinc-800/30 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="text-center mb-6">
<div className="flex items-center justify-center w-16 h-16 bg-zinc-800/50 rounded-3xl mx-auto mb-4 border border-zinc-800/30">
<svg className="lucide lucide-smartphone w-8 h-8 text-zinc-400" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-2 text-white">Quick Mobile Access</h3>
<p className="text-zinc-500 text-sm leading-relaxed">Scan with your phone's camera to instantly receive your personalized AI demo via SMS</p>
</div>

<div className="flex flex-col bg-black/30 border-zinc-800/30 border rounded-3xl mb-6 pt-8 pr-8 pb-8 pl-8 backdrop-blur-xl items-center justify-center">
<div className="w-48 h-48 flex items-center justify-center bg-zinc-900/50 rounded-3xl border border-dashed border-zinc-800/50">
<svg className="lucide lucide-qr-code w-32 h-32 text-zinc-600" data-lucide="qr-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="5" x="3" y="3"></rect><rect height="5" rx="1" width="5" x="16" y="3"></rect><rect height="5" rx="1" width="5" x="3" y="16"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3"></path><path d="M21 21v.01"></path><path d="M12 7v3a2 2 0 0 1-2 2H7"></path><path d="M3 12h.01"></path><path d="M12 3h.01"></path><path d="M12 16v.01"></path><path d="M16 12h1"></path><path d="M21 12v.01"></path><path d="M12 21v-1"></path></svg>
</div>
<p className="text-zinc-600 text-xs mt-3 font-medium">Point your camera here</p>
</div>
<button className="w-full inline-flex items-center justify-center gap-3 px-6 py-3 rounded-3xl bg-white hover:bg-zinc-100 text-zinc-900 transition-all duration-200 font-medium group border border-zinc-800/30" id="btnScanned">
<svg className="lucide lucide-check-circle w-5 h-5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
              I've scanned the QR code
              <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="opacity-0 animate-slide-up animation-delay-500">
<div className="lg:hidden text-center py-4">
<span className="text-zinc-600 font-medium">or</span>
</div>
<div className="space-y-6">

<div className="bg-black/20 bg-[url(/assets/2fdcc9de-94c9-4f1c-80d4-900440428d32_800w.jpg)] bg-cover border-zinc-800/30 border rounded-3xl pt-6 pr-6 pb-6 pl-6">
<h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
<svg className="lucide lucide-sparkles w-5 h-5 text-zinc-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                What you'll experience
              </h3>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="flex items-center justify-center w-8 h-8 bg-zinc-800/50 rounded-2xl border border-zinc-800/30 flex-shrink-0 mt-0.5">
<svg className="lucide lucide-message-circle w-4 h-4 text-zinc-400" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</div>
<div className="">
<p className="font-medium text-sm text-white">Intelligent Conversations</p>
<p className="text-zinc-500 text-xs mt-1">Natural language processing with contextual understanding</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex items-center justify-center w-8 h-8 bg-zinc-800/50 rounded-2xl border border-zinc-800/30 flex-shrink-0 mt-0.5">
<svg className="lucide lucide-zap w-4 h-4 text-zinc-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="">
<p className="font-medium text-sm text-white">Instant Responses</p>
<p className="text-zinc-500 text-xs mt-1">Lightning-fast AI processing with real-time feedback</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex items-center justify-center w-8 h-8 bg-zinc-800/50 rounded-2xl border border-zinc-800/30 flex-shrink-0 mt-0.5">
<svg className="lucide lucide-shield-check w-4 h-4 text-zinc-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<p className="font-medium text-sm text-white">Privacy First</p>
<p className="text-zinc-500 text-xs mt-1">End-to-end encryption with secure data handling</p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-black/20 rounded-3xl border border-zinc-800/30 p-4 text-center">
<div className="text-2xl text-white tracking-tighter" style={{}}>98%</div>
<div className="text-xs text-zinc-500 mt-1">Accuracy Rate</div>
</div>
<div className="bg-black/20 rounded-3xl border border-zinc-800/30 p-4 text-center">
<div className="text-2xl text-white tracking-tighter" style={{}}>{"<"}200ms</div>
<div className="text-xs text-zinc-500 mt-1">Response Time</div>
</div>
</div>
</div>
</div>

<div className="hidden col-span-1 lg:col-span-2" id="successCard">
<div className="text-center bg-black/20 rounded-3xl border border-zinc-800/30 p-12">
<div className="w-20 h-20 flex items-center justify-center rounded-full bg-zinc-800/50 mx-auto mb-6 border border-zinc-800/30">
<svg className="lucide lucide-check-circle w-10 h-10 text-zinc-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<h3 className="text-2xl mb-3 text-white tracking-tighter" style={{}}>Demo Sent Successfully!</h3>
<p className="text-zinc-300 mb-2">We've sent your personalized AI demo to your mobile device.</p>
<p className="text-zinc-500 text-sm mb-6">Check your messages and start exploring the future of AI assistance.</p>
<div className="flex flex-col sm:flex-row gap-3 justify-center">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800/50 hover:bg-zinc-700/50 text-zinc-100 rounded-3xl transition-all duration-200 font-medium border border-zinc-800/30" href="#">
<svg className="lucide lucide-home w-4 h-4" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                Return to Homepage
              </a>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-zinc-100 text-zinc-900 rounded-3xl transition-all duration-200 font-medium border border-zinc-800/30" href="#">
<svg className="lucide lucide-external-link w-4 h-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                Try Web Version
              </a>
</div>
</div>
</div>
</div>
</div>

<div className="pr-8 pb-8 pl-8">
<div className="border-t border-zinc-800/30 pt-6 opacity-0 animate-fade-in animation-delay-500">
<p className="text-xs text-zinc-500 leading-relaxed">
          By scanning the QR code, you consent to receive SMS messages from NeuralCore AI including demo content, product updates, and promotional offers. 
          Message and data rates may apply. Message frequency varies. Reply STOP to opt-out anytime. 
          <a className="text-zinc-300 hover:text-white underline transition-colors" href="#">Privacy Policy</a> • 
          <a className="text-zinc-300 hover:text-white underline transition-colors" href="#">Terms of Service</a> • 
          <a className="text-zinc-300 hover:text-white underline transition-colors" href="#">Contact Support</a>
</p>
</div>
</div>
</div>
</div>



    </>
  );
}
