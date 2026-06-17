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
      

<div className="bg-iframe">
<iframe frameborder="0" height="100%" src="https://my.spline.design/iphone15procopy-pmwnMexXbAOzhjJgYVtuY6kv/" width="100%"></iframe>
</div>
<div className="overlay"></div>

<div className="relative z-10 w-full max-w-md mx-auto bg-zinc-900/90 rounded-2xl shadow-2xl border border-zinc-800 px-8 py-10 backdrop-blur-xl overflow-hidden">
<div className="noise"></div>
<div className="flex flex-col items-center mb-7 relative z-10">
<img alt="Profile" className="w-24 h-24 rounded-full border-4 border-stone-500 shadow-lg mb-4" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<h1 className="text-2xl font-semibold text-white">Jordan Smith</h1>
<h2 className="text-stone-500 text-base mt-1">Senior Software Engineer</h2>
<div className="flex items-center gap-2 text-zinc-400 text-sm mt-2">
<svg className="w-4 h-4 text-stone-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M17.657 16.657L13.414 12.414A8 8 0 1112 4v1m0 4v1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
        San Francisco, CA • jordan.smith@email.com
      </div>
</div>
<hr className="border-zinc-800 my-7"/>
<div className="relative z-10">
<h3 className="text-lg font-medium text-white mb-2 flex items-center">
<svg className="w-5 h-5 mr-2 text-stone-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<circle cx="9" cy="7" fill="none" r="4" stroke="currentColor" strokeWidth="2"></circle>
</svg>
        Profile
      </h3>
<p className="text-zinc-300 text-sm mb-4">
        Experienced full-stack developer with a passion for building scalable web applications and working with dynamic teams. 8+ years in software engineering, specializing in React, Node.js, and cloud infrastructure.
      </p>
</div>
<hr className="border-zinc-800 my-7"/>
<div className="relative z-10">
<h3 className="text-lg font-medium text-white mb-2 flex items-center">
<svg className="w-5 h-5 mr-2 text-stone-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M12 14l6.16-3.422A12.042 12.042 0 0112 20.944 12.042 12.042 0 015.84 10.578L12 14z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
        Skills
      </h3>
<ul className="flex flex-wrap gap-2 text-xs mb-4">
<li className="bg-stone-500/90 text-white px-3 py-1 rounded-full">React</li>
<li className="bg-stone-500/90 text-white px-3 py-1 rounded-full">Node.js</li>
<li className="bg-stone-500/90 text-white px-3 py-1 rounded-full">AWS</li>
<li className="bg-stone-500/90 text-white px-3 py-1 rounded-full">Typescript</li>
<li className="bg-stone-500/90 text-white px-3 py-1 rounded-full">Docker</li>
<li className="bg-stone-500/90 text-white px-3 py-1 rounded-full">GraphQL</li>
</ul>
</div>
<hr className="border-zinc-800 my-7"/>
<div className="relative z-10">
<h3 className="text-lg font-medium text-white mb-2 flex items-center">
<svg className="w-5 h-5 mr-2 text-stone-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M8 17l4 4 4-4m0-5V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v9M5 10h14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
        Experience
      </h3>
<div className="mb-4">
<div className="flex justify-between items-center">
<span className="font-semibold text-white">Lead Engineer</span>
<span className="text-xs text-zinc-400">2020 - Present</span>
</div>
<span className="text-stone-500 text-sm">Neural AI Platform</span>
<ul className="list-disc list-inside text-zinc-300 text-xs mt-1 ml-2">
<li>Architected scalable microservices in AWS</li>
<li>Led a team of 8 engineers</li>
<li>Improved system reliability by 35%</li>
</ul>
</div>
<div className="mb-4">
<div className="flex justify-between items-center">
<span className="font-semibold text-white">Software Engineer</span>
<span className="text-xs text-zinc-400">2016 - 2020</span>
</div>
<span className="text-stone-500 text-sm">Innovatech Solutions</span>
<ul className="list-disc list-inside text-zinc-300 text-xs mt-1 ml-2">
<li>Developed robust web applications in React/Node</li>
<li>Mentored junior engineers</li>
</ul>
</div>
</div>
<hr className="border-zinc-800 my-7"/>
<div className="relative z-10">
<h3 className="text-lg font-medium text-white mb-2 flex items-center">
<svg className="w-5 h-5 mr-2 text-stone-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 14v7m0 0H5m7 0h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M12 3v7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
        Education
      </h3>
<div>
<span className="font-semibold text-white">B.Sc. Computer Science</span>
<div className="text-stone-500 text-sm">Stanford University, 2012 - 2016</div>
</div>
</div>
<div className="mt-8 flex justify-center relative z-10">
<a className="px-6 py-2 bg-stone-500 rounded-md text-white hover:bg-stone-400 transition-colors text-sm font-medium shadow" href="#">
        Download CV
      </a>
</div>
</div>

    </>
  );
}
