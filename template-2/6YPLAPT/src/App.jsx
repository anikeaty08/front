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
      

<section className="py-12 bg-white shadow-sm">
<div className="max-w-3xl mx-auto text-center px-4">
<h1 className="text-4xl font-bold text-gray-800 mb-4">Our Team</h1>
<p className="text-lg text-gray-600">Get to Know Our Dedicated and Expert Teaching Team.</p>
</div>
</section>

<section className="py-16">
<div className="max-w-6xl mx-auto px-4">
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

<div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center">
<img alt="Emma Johnson" className="w-28 h-28 rounded-full object-cover mb-6 border-4 border-indigo-100" src="https://randomuser.me/api/portraits/women/65.jpg" />
<h2 className="text-xl font-semibold text-gray-800 mb-1">Emma Johnson</h2>
<p className="text-indigo-600 font-medium mb-3">Lead Math Instructor</p>
<p className="text-gray-600 text-center">Emma brings over 12 years of experience in math education. Her interactive approach ensures students grasp concepts with clarity and confidence.</p>
</div>

<div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center">
<img alt="David Lee" className="w-28 h-28 rounded-full object-cover mb-6 border-4 border-indigo-100" src="https://randomuser.me/api/portraits/men/32.jpg" />
<h2 className="text-xl font-semibold text-gray-800 mb-1">David Lee</h2>
<p className="text-indigo-600 font-medium mb-3">Science Specialist</p>
<p className="text-gray-600 text-center">With a background in biology and chemistry, David inspires curiosity and critical thinking through engaging experiments and real-world examples.</p>
</div>

<div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center">
<img alt="Sophia Martinez" className="w-28 h-28 rounded-full object-cover mb-6 border-4 border-indigo-100" src="https://randomuser.me/api/portraits/women/44.jpg" />
<h2 className="text-xl font-semibold text-gray-800 mb-1">Sophia Martinez</h2>
<p className="text-indigo-600 font-medium mb-3">English Language Expert</p>
<p className="text-gray-600 text-center">Sophia's passion for literature and language arts fosters a love for reading and effective communication among her students.</p>
</div>

<div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center">
<img alt="Michael Brown" className="w-28 h-28 rounded-full object-cover mb-6 border-4 border-indigo-100" src="https://randomuser.me/api/portraits/men/76.jpg" />
<h2 className="text-xl font-semibold text-gray-800 mb-1">Michael Brown</h2>
<p className="text-indigo-600 font-medium mb-3">History & Social Studies</p>
<p className="text-gray-600 text-center">Michael brings stories from the past to life, making history relevant and engaging through discussion and interactive projects.</p>
</div>

<div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center">
<img alt="Ava Patel" className="w-28 h-28 rounded-full object-cover mb-6 border-4 border-indigo-100" src="https://randomuser.me/api/portraits/women/52.jpg" />
<h2 className="text-xl font-semibold text-gray-800 mb-1">Ava Patel</h2>
<p className="text-indigo-600 font-medium mb-3">STEM Integration Coach</p>
<p className="text-gray-600 text-center">Ava specializes in integrating technology and engineering, encouraging innovative problem-solving and hands-on learning.</p>
</div>

<div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center">
<img alt="Liam Kim" className="w-28 h-28 rounded-full object-cover mb-6 border-4 border-indigo-100" src="https://randomuser.me/api/portraits/men/45.jpg" />
<h2 className="text-xl font-semibold text-gray-800 mb-1">Liam Kim</h2>
<p className="text-indigo-600 font-medium mb-3">Creative Arts Facilitator</p>
<p className="text-gray-600 text-center">Liam encourages creativity through art and music, helping students express themselves and develop their artistic talents.</p>
</div>
</div>
</div>
</section>

    </>
  );
}
