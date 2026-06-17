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
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.getElementById('registrationForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const form = e.target;
            const btn = document.getElementById('submitBtn');
            const icon = document.getElementById('btnIcon');
            const span = btn.querySelector('span');
            
            // Loading state
            span.textContent = 'Submitting...';
            
            // Collect Form Data
            const formData = new FormData(form);

            // Send data using AJAX to FormSubmit
            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                if(data.success) {
                    // Success state
                    span.textContent = 'Successfully Joined!';
                    icon.setAttribute('icon', 'solar:check-circle-linear');
                    btn.classList.replace('bg-black', 'bg-green-600');
                    btn.classList.replace('hover:bg-neutral-800', 'hover:bg-green-700');
                    
                    // Reset after 3 seconds
                    setTimeout(() => {
                        span.textContent = 'Join the Community';
                        icon.setAttribute('icon', 'solar:arrow-right-linear');
                        btn.classList.replace('bg-green-600', 'bg-black');
                        btn.classList.replace('hover:bg-green-700', 'hover:bg-neutral-800');
                        form.reset();
                    }, 3000);
                } else {
                    throw new Error('Submission failed');
                }
            })
            .catch(error => {
                // Error state
                span.textContent = 'Error. Try Again.';
                setTimeout(() => {
                    span.textContent = 'Join the Community';
                }, 3000);
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
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c8e25f7c-c017-430a-94ff-52c0adf858fd_3840w.jpg")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] opacity-20 pointer-events-none" style={{background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(0,0,0,0) 70%)'}}></div>

<header className="w-full border-b backdrop-blur-md sticky top-0 z-50 border-neutral-200/50 bg-neutral-50/80">
<div className="flex h-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2 text-black">
<span className="text-base font-semibold tracking-tighter uppercase font-sans">JYC</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-600">
<a className="transition-colors hover:text-black font-sans" href="#">Initiatives</a>
<a className="transition-colors hover:text-black font-sans" href="#">Culture &amp; Folk</a>
<a className="transition-colors hover:text-black font-sans" href="#">Events</a>
</nav>
<div className="flex items-center">
<a className="text-sm font-medium transition-colors text-black hover:text-indigo-600 font-sans" href="#">Member Login</a>
</div>
</div>
</header>
<main className="flex-grow md:py-20 flex flex-col lg:flex-row lg:gap-24 z-10 w-full max-w-6xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 relative gap-x-12 gap-y-12">

<div className="w-full lg:w-5/12 flex flex-col">
<div className="mb-10 text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium mb-6 text-indigo-700 font-sans">
<iconify-icon icon="solar:leaf-linear"></iconify-icon>
                    Connecting our roots
                </div>
<h1 className="text-3xl sm:text-4xl tracking-tight mb-4 text-black font-oswald font-normal">Preserve our heritage.</h1>
<p className="sm:text-base leading-relaxed text-sm text-neutral-600 font-sans">Join the Zoon Society. A collective dedicated to promoting and celebrating Kashmiri culture, tradition, and folk arts. Registration is completely free.</p>
</div>
<div className="space-y-4">
<h2 className="text-sm font-medium uppercase tracking-widest mb-4 text-black font-sans">Select your primary role</h2>

<label className="relative block cursor-pointer group">

<input checked="" className="peer sr-only" form="registrationForm" name="role" type="radio" value="member"/>
<div className="p-5 rounded-xl border peer-checked:border-indigo-500/50 peer-checked:bg-indigo-500/5 transition-all relative overflow-hidden border-neutral-200 bg-neutral-100/30 hover:bg-neutral-200/50">
<div className="flex justify-between items-start mb-2 mt-1">
<div className="">
<h3 className="flex items-center gap-2 text-base font-semibold tracking-tight text-black font-sans">
<iconify-icon className="text-indigo-600" icon="solar:user-linear"></iconify-icon> Individual Member
                                </h3>
<p className="text-xs text-neutral-500 mt-1 font-sans">Join as an individual to explore and celebrate our heritage.</p>
</div>
</div>
</div>
</label>

<label className="relative block cursor-pointer group">
<input className="peer sr-only" form="registrationForm" name="role" type="radio" value="club"/>
<div className="p-5 rounded-xl border peer-checked:border-indigo-500/50 peer-checked:bg-indigo-500/5 transition-all relative overflow-hidden border-neutral-200 bg-neutral-100/30 hover:bg-neutral-200/50">
<div className="absolute top-0 right-0 px-2 py-0.5 text-xs rounded-bl-lg font-medium border-b border-l bg-neutral-200 text-neutral-700 border-neutral-300 font-sans">Partner</div>
<div className="flex justify-between items-start mb-2 mt-1">
<div className="">
<h3 className="flex items-center gap-2 text-base font-semibold tracking-tight text-black font-sans">
<iconify-icon className="text-indigo-600" icon="solar:users-group-two-rounded-linear"></iconify-icon> Club / Organization
                                </h3>
<p className="text-xs text-neutral-500 mt-1 font-sans">Register your local club or society to collaborate on community events.</p>
</div>
</div>
</div>
</label>

<label className="relative block cursor-pointer group">
<input className="peer sr-only" form="registrationForm" name="role" type="radio" value="volunteer"/>
<div className="p-5 rounded-xl border peer-checked:border-indigo-500/50 peer-checked:bg-indigo-500/5 transition-all relative overflow-hidden border-neutral-200 bg-neutral-100/30 hover:bg-neutral-200/50">
<div className="absolute top-0 right-0 px-2 py-0.5 text-xs rounded-bl-lg font-medium border-b border-l bg-neutral-200 text-neutral-700 border-neutral-300 font-sans">Needed</div>
<div className="flex justify-between items-start mb-2 mt-1">
<div className="">
<h3 className="flex items-center gap-2 text-base font-semibold tracking-tight text-black font-sans">
<iconify-icon className="text-indigo-600" icon="solar:hand-shake-linear"></iconify-icon> Volunteer
                                </h3>
<p className="text-xs text-neutral-500 mt-1 font-sans">Active participant willing to help organize cultural initiatives.</p>
</div>
<div className="text-right flex-shrink-0 mt-1">
<span className="text-xs font-medium bg-indigo-500/10 px-2 py-1 rounded text-indigo-600 font-sans">Free</span>
</div>
</div>
</div>
</label>
</div>
<div className="mt-8 p-4 rounded-lg border flex items-start gap-3 bg-neutral-100/50 border-neutral-200/50">
<iconify-icon className="text-xl mt-0.5 text-neutral-600" icon="solar:lock-keyhole-linear"></iconify-icon>
<div className="">
<h4 className="text-sm font-medium mb-1 text-black font-sans">Privacy Focused</h4>
<p className="text-xs text-neutral-500 font-sans">Your information is securely stored and only used for community updates and event invitations. We never share your data.</p>
</div>
</div>
</div>

<div className="w-full lg:w-7/12">
<div className="sm:p-8 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-sm bg-neutral-100/40 border-neutral-200">
<h2 className="text-xl tracking-tight mb-6 text-black font-oswald font-normal">Community Registration</h2>
<form action="https://formsubmit.co/ajax/sajadiffam57@gmail.com" className="space-y-6" id="registrationForm" method="POST">

<input name="_subject" type="hidden" value="New JYC Registration!"/>
<input name="_captcha" type="hidden" value="false"/>
<input name="_template" type="hidden" value="table"/>

<div className="space-y-4">
<h3 className="text-xs font-medium uppercase tracking-widest border-b pb-2 text-neutral-600 border-neutral-200 font-sans">Profile Details</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-700 font-sans" htmlFor="firstName">First Name / Club Name</label>
<input className="placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all text-sm text-black bg-neutral-50/50 w-full border-neutral-200 border rounded-md pt-2 pr-3 pb-2 pl-3 shadow-sm" id="firstName" name="firstName" placeholder="e.g. your name for zoon" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-700 font-sans" htmlFor="lastName">Last Name</label>
<input className="w-full border rounded-md py-2 px-3 text-sm placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all shadow-sm bg-neutral-50/50 border-neutral-200 text-black" id="lastName" name="lastName" placeholder="Bhat" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-700 font-sans" htmlFor="email">Email Address</label>
<input className="placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all text-sm w-full border rounded-md pt-2 pr-3 pb-2 pl-3 shadow-sm text-black bg-neutral-50/50 border-neutral-200" id="email" name="email" placeholder="aamir@example.com" required="" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-700 font-sans" htmlFor="location">Location</label>
<div className="relative">
<input className="placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all text-sm w-full border rounded-md pt-2 pr-3 pb-2 pl-9 shadow-sm text-black bg-neutral-50/50 border-neutral-200" id="location" name="location" placeholder="Srinagar" required="" type="text"/>
<span className="absolute inset-y-0 left-0 pl-3 flex items-center text-neutral-500 text-sm pointer-events-none">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
</span>
</div>
</div>
</div>
</div>

<div className="pt-2 space-y-4">
<h3 className="text-xs font-medium uppercase tracking-widest border-b pb-2 text-neutral-600 border-neutral-200 font-sans">Contribution &amp; Interest</h3>
<div className="space-y-1.5 pt-1">
<label className="text-xs font-medium text-neutral-700 font-sans" htmlFor="contribution">How would you like to contribute to the community?</label>
<textarea className="w-full border rounded-md py-2 px-3 text-sm placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all shadow-sm resize-none bg-neutral-50/50 border-neutral-200 text-black" id="contribution" name="contribution" placeholder="E.g., I would love to help organize poetry readings, or our club wants to collaborate..." rows="3"></textarea>
</div>
</div>

<div className="pt-2">
<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center mt-0.5">
<input className="peer sr-only" name="agreedToTerms" required="" type="checkbox" value="Yes"/>
<div className="w-4 h-4 border rounded bg-neutral-50/50 border-neutral-300 peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-colors"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 text-xs transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-xs text-neutral-600 font-sans leading-relaxed">I agree to the <a className="text-black hover:underline font-medium" href="#">Terms of Service</a> and <a className="text-black hover:underline font-medium" href="#">Privacy Policy</a>.</span>
</label>
</div>

<div className="pt-4 border-t border-neutral-200">
<button className="w-full font-medium text-sm py-2.5 px-4 rounded-lg active:scale-[0.99] transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-50 focus:ring-black flex items-center justify-center gap-2 bg-black text-white hover:bg-neutral-800 font-sans" id="submitBtn" type="submit">
<span className="">Join the society</span>
<iconify-icon icon="solar:arrow-right-linear" id="btnIcon"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</main>

<footer className="w-full border-t mt-auto border-neutral-200/50">
<div className="flex flex-col sm:flex-row gap-4 max-w-6xl mr-auto ml-auto pt-8 pr-6 pb-8 pl-6 gap-x-4 gap-y-4 items-center justify-between">
<div className="text-xs text-neutral-500 font-sans">
                © 2023 Jehlum Youth Community. All rights reserved.
            </div>
<div className="flex gap-4">
<a className="text-neutral-500 transition-colors hover:text-black" href="#"><iconify-icon className="text-lg" icon="solar:twitter-linear"></iconify-icon></a>
<a className="text-neutral-500 transition-colors hover:text-black" href="#"><iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon></a>
<a className="text-neutral-500 transition-colors hover:text-black" href="#"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
</footer>


    </>
  );
}
