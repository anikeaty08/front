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
      
<section className="py-16 px-4 max-w-6xl mx-auto">
<h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">What I Do</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
<div className="bg-blue-100 rounded-full p-4 mb-6">

<svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path d="M16 18l6-6-6-6M8 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h3 className="text-xl font-bold mb-2 text-gray-800">Web Development</h3>
<p className="text-gray-600 text-center mb-4">Crafting responsive and dynamic websites with modern technologies.</p>
<ul className="text-gray-700 space-y-2 text-left list-disc list-inside">
<li>HTML, CSS & JavaScript</li>
<li>React, Vue & Svelte</li>
<li>Performance Optimization</li>
</ul>
</div>

<div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
<div className="bg-green-100 rounded-full p-4 mb-6">

<svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path d="M15.232 5.232l3.536 3.536M9 11l6 6M3 21l6-6m2-2l7-7a2.828 2.828 0 00-4-4l-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h3 className="text-xl font-bold mb-2 text-gray-800">UI/UX Design</h3>
<p className="text-gray-600 text-center mb-4">Designing intuitive and engaging user interfaces and experiences.</p>
<ul className="text-gray-700 space-y-2 text-left list-disc list-inside">
<li>Wireframing & Prototyping</li>
<li>Design Systems</li>
<li>Accessibility</li>
</ul>
</div>

<div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
<div className="bg-yellow-100 rounded-full p-4 mb-6">

<svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<rect height="8" rx="2" width="20" x="2" y="6"></rect>
<path d="M6 10h.01M6 14h.01" strokeLinecap="round" strokeLinejoin="round"></path>
<rect height="8" rx="2" width="20" x="2" y="14"></rect>
</svg>
</div>
<h3 className="text-xl font-bold mb-2 text-gray-800">Backend Engineering</h3>
<p className="text-gray-600 text-center mb-4">Building scalable and secure server-side applications and APIs.</p>
<ul className="text-gray-700 space-y-2 text-left list-disc list-inside">
<li>Node.js & Express</li>
<li>Database Design</li>
<li>API Development</li>
</ul>
</div>
</div>
</section>

    </>
  );
}
