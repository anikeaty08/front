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



!function(t,e){var o,n,p,r;e.__SV||(window.posthog && window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="Mi Ri init Vi Gi Rr Wi Ji Bi capture calculateEventProperties tn register register_once register_for_session unregister unregister_for_session an getFeatureFlag getFeatureFlagPayload getFeatureFlagResult isFeatureEnabled reloadFeatureFlags updateFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey cancelPendingSurvey canRenderSurvey canRenderSurveyAsync un identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset setIdentity clearIdentity get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException addExceptionStep captureLog startExceptionAutocapture stopExceptionAutocapture loadToolbar get_property getSessionProperty nn Xi createPersonProfile setInternalOrTestUser sn Hi cn opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing Ki debug Lr rn getPageViewId captureTraceFeedback captureTraceMetric Di".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
posthog.init('phc_yV3uvnYUPteyJZZf9e9U2x2TdP274rCkgJ8gwRqXdoka', {
api_host: 'https://eu.i.posthog.com',
defaults: '2026-01-30',
person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
})



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Initialize Lucide icons
      lucide.createIcons();

      // Context-aware smooth scroll to waitlist
      function scrollToWaitlist(e) {
        e.preventDefault();
        const parentsView = document.getElementById('view-parents');
        const activeId = parentsView.classList.contains('hidden') ? 'waitlist-schools' : 'waitlist-parents';
        const element = document.getElementById(activeId);

        if(element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }

      // FAQ Toggle Logic
      function toggleFAQ(btn) {
        const content = btn.nextElementSibling;
        const icon = btn.querySelector('i');

        if (content.classList.contains('hidden')) {
          content.classList.remove('hidden');
          if (icon) icon.style.transform = 'rotate(180deg)';
        } else {
          content.classList.add('hidden');
          if (icon) icon.style.transform = 'rotate(0deg)';
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
      

<nav className="fixed top-0 inset-x-0 z-50 bg-[#fafafa]/80 backdrop-blur-md border-b border-slate-200/50">
<div className="flex h-16 max-w-5xl mr-auto ml-auto pr-4 pl-4 gap-x-4 gap-y-4 items-center justify-between">
<a className="flex items-center shrink-0" href="#">
<img alt="School Run" className="sm:w-48 sm:h-12 object-center mix-blend-multiply w-36 h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/97b0901f-7930-4d26-8ccf-f8817a5af3f8_800w.png"/>
</a>

<div className="flex shrink-0 bg-slate-100 rounded-full p-1 relative items-center">
<span className="inline-flex justify-center items-center sm:px-6 sm:text-base sm:w-28 z-10 text-sm font-normal text-slate-900 w-20 rounded-full py-1.5 px-4 relative bg-white shadow-sm" id="nav-btn-parents">
            Parents
          </span>
<a className="inline-flex justify-center items-center sm:px-6 sm:text-base sm:w-28 transition-colors duration-200 hover:text-slate-900 text-sm font-normal text-slate-500 w-20 z-10 rounded-full py-1.5 px-4 relative" href="/schools" id="nav-btn-schools">
            Schools
          </a>
</div>
<button className="text-base font-normal tracking-wide bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-slate-800 hover:shadow-md transition-all duration-200 shrink-0 hidden sm:block" onclick="scrollToWaitlist(event)">
          Join Waitlist
        </button>
<button className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center sm:hidden shrink-0" onclick="scrollToWaitlist(event)">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<div className="transition-opacity duration-300 min-h-screen bg-[#fafafa] pt-32 pb-24" id="view-parents">
<section className="px-6 mb-16">
<div className="max-w-3xl mx-auto text-left">
<h1 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight font-['Plus_Jakarta_Sans'] mb-6">
            Account Deletion
          </h1>
<p className="text-xl md:text-2xl font-light text-slate-500 leading-relaxed mb-12">
            You can request the deletion of your School Run account and
            associated data at any time directly within the app.
          </p>
<div className="mb-12">
<h2 className="text-2xl md:text-3xl font-medium text-slate-900 tracking-tight font-['Plus_Jakarta_Sans'] mb-6">
              To delete your account:
            </h2>
<ol className="list-decimal pl-6 space-y-4 text-lg md:text-xl font-light text-slate-500 marker:text-slate-400">
<li className="pl-2">Open the School Run app and log in</li>
<li className="pl-2">
                Tap the menu icon to open the left-hand navigation
              </li>
<li className="pl-2">
                Go to
                <strong className="font-medium text-slate-700">Settings</strong>
</li>
<li className="pl-2">
                Scroll to the bottom of the page and tap
                <strong className="font-medium text-slate-700">
                  Delete Account
                </strong>
</li>
<li className="pl-2">
                Follow the on-screen prompts to confirm your request
              </li>
</ol>
</div>
<div>
<h2 className="text-2xl md:text-3xl font-medium text-slate-900 tracking-tight font-['Plus_Jakarta_Sans'] mb-6">
              What happens to your data:
            </h2>
<p className="text-lg md:text-xl font-light text-slate-500 leading-relaxed">
              Upon deletion, your account and all associated personal data will
              be permanently removed from our systems. Please note that some
              data may be retained for a limited period where required by law or
              for legitimate business purposes (e.g. Safeguarding records).
            </p>
</div>
</div>
</section>
</div>

<footer className="bg-white border-t border-slate-200 py-12 px-6">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">
<img alt="School Run" className="bg-center opacity-100 mix-blend-multiply w-auto h-12 object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/abc2cec8-4b95-489b-a3c2-3ffe11053f8d_320w.png"/>
</div>
<div className="flex items-center gap-6 text-base font-light text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="http://app.schoolrun.io/privacy">
            Privacy
          </a>
<a className="hover:text-slate-900 transition-colors" href="http://app.schoolrun.io/terms">
            Terms
          </a>
<a className="hover:text-slate-900 transition-colors" href="/contact">
            Contact
          </a>
</div>
<p className="text-base font-light text-slate-400">
          © 2026 School Run. All rights reserved.
        </p>
</div>
</footer>



    </>
  );
}
