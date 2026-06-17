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
      
<div className="w-full max-w-2xl bg-white print:max-w-none">

<header className="border-b border-neutral-200 pb-5 mb-5">
<h1 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-1">Sagar Sah</h1>
<p className="text-sm font-medium text-neutral-600 mb-3">UI/UX Designer</p>
<div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-500">
<span>Bengaluru, India</span>
<span>+91 74162 92404</span>
<span>sagar.sah.design@gmail.com</span>
</div>
<div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-500 mt-2">
<span>fearless-yards-788912.framer.app</span>
<span>linkedin.com/in/sagar-shah-389980319</span>
</div>
<div className="mt-3 flex flex-wrap gap-2">
<span className="text-xs text-neutral-600 bg-neutral-100 rounded px-2 py-0.5">UI Designer</span>
<span className="text-xs text-neutral-600 bg-neutral-100 rounded px-2 py-0.5">Product Designer</span>
<span className="text-xs text-neutral-600 bg-neutral-100 rounded px-2 py-0.5">UX Designer</span>
<span className="text-xs text-neutral-600 bg-neutral-100 rounded px-2 py-0.5">Frontend Developer</span>
</div>
</header>

<section className="mb-5">
<h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-2">Summary</h2>
<p className="text-sm text-neutral-700 leading-relaxed">
                Multidisciplinary UI/UX designer currently pursuing B.Tech in Cyber Security. I design usable, accessible interfaces and ship polished prototypes for web &amp; mobile. I bridge design and front-end development (HTML/CSS/JS) to deliver designs that are buildable and secure.
            </p>
</section>

<section className="mb-5">
<h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-2">Skills</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-700">
<div>
<span className="font-medium text-neutral-900">Design:</span> UX research, interaction design, visual design, design systems, wireframing, accessibility
                </div>
<div>
<span className="font-medium text-neutral-900">Development:</span> HTML, CSS, JavaScript, Framer prototyping
                </div>
<div>
<span className="font-medium text-neutral-900">Tools:</span> Figma, Framer, Photoshop, Illustrator, Notion
                </div>
<div>
<span className="font-medium text-neutral-900">Soft Skills:</span> Cross-functional collaboration, stakeholder communication, usability testing
                </div>
</div>
</section>

<section className="mb-5">
<h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-3">Experience</h2>
<div className="mb-4">
<div className="flex flex-wrap justify-between items-baseline mb-1">
<h3 className="text-sm font-medium text-neutral-900">Freelance UI/UX Designer</h3>
<span className="text-xs text-neutral-500">Jan 2024 – Present</span>
</div>
<p className="text-xs text-neutral-500 mb-2">Remote</p>
<ul className="text-sm text-neutral-700 space-y-1.5">
<li className="flex gap-2">
<span className="text-neutral-400 flex-shrink-0">•</span>
<span>Led end-to-end UI for web &amp; mobile projects across healthcare, e-commerce, and hospitality; delivered interactive prototypes that cut handoff time with developers</span>
</li>
<li className="flex gap-2">
<span className="text-neutral-400 flex-shrink-0">•</span>
<span>Built reusable component libraries to ensure visual consistency and accelerate delivery across projects</span>
</li>
<li className="flex gap-2">
<span className="text-neutral-400 flex-shrink-0">•</span>
<span>Improved user onboarding flows for a café app, increasing task completion rates in prototype testing</span>
</li>
</ul>
</div>
<div>
<div className="flex flex-wrap justify-between items-baseline mb-1">
<h3 className="text-sm font-medium text-neutral-900">Freelance Designer (UI/UX)</h3>
<span className="text-xs text-neutral-500">Mar 2023 – Nov 2024</span>
</div>
<p className="text-xs text-neutral-500 mb-2">Remote</p>
<ul className="text-sm text-neutral-700 space-y-1.5">
<li className="flex gap-2">
<span className="text-neutral-400 flex-shrink-0">•</span>
<span>Delivered modern UI for café management and B2B platforms under tight deadlines; iterated based on user feedback and stakeholder reviews</span>
</li>
<li className="flex gap-2">
<span className="text-neutral-400 flex-shrink-0">•</span>
<span>Handed off build-ready specs (Figma + CSS guidance) that reduced development iteration rounds</span>
</li>
</ul>
</div>
</section>

<section className="mb-5">
<h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-3">Education</h2>
<div className="mb-2">
<div className="flex flex-wrap justify-between items-baseline">
<h3 className="text-sm font-medium text-neutral-900">Bachelor of Technology, Cyber Security</h3>
<span className="text-xs text-neutral-500">Aug 2023 – Mar 2027</span>
</div>
<p className="text-xs text-neutral-500">GIET College</p>
</div>
<div>
<div className="flex flex-wrap justify-between items-baseline">
<h3 className="text-sm font-medium text-neutral-900">High School (Science)</h3>
<span className="text-xs text-neutral-500">2020 – 2022</span>
</div>
<p className="text-xs text-neutral-500">DAV College, Kathmandu</p>
</div>
</section>

<section className="mb-5">
<h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-3">Selected Projects</h2>
<div className="space-y-2 text-sm">
<div>
<span className="font-medium text-neutral-900">ZenTrade</span>
<span className="text-neutral-500"> — </span>
<span className="text-neutral-700">B2B trading platform; redesigned navigation and dashboards for complex workflows</span>
</div>
<div>
<span className="font-medium text-neutral-900">MountainBrew</span>
<span className="text-neutral-500"> — </span>
<span className="text-neutral-700">Café app with mobile ordering + loyalty flows; end-to-end experience design</span>
</div>
<div>
<span className="font-medium text-neutral-900">ATG Hotels</span>
<span className="text-neutral-500"> — </span>
<span className="text-neutral-700">Responsive booking-first UI with streamlined search and filters</span>
</div>
<div>
<span className="font-medium text-neutral-900">FitPulse</span>
<span className="text-neutral-500"> — </span>
<span className="text-neutral-700">Fitness app with health-tracking dashboard using accessibility-first patterns</span>
</div>
</div>
</section>

<section className="mb-5">
<h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-2">Certifications</h2>
<p className="text-sm text-neutral-700">
                UI/UX Design — Tutedude (2024) · Adobe XD UI Design · Figma · Framer · HTML · CSS · Photoshop · Illustrator · Notion
            </p>
</section>

<section className="border-t border-neutral-200 pt-4">
<h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-2">Additional</h2>
<p className="text-sm text-neutral-700">
                Content creator on LinkedIn &amp; Instagram (8k+ followers) — sharing daily UI/UX content, case studies, and design tips
            </p>
</section>
</div>

    </>
  );
}
