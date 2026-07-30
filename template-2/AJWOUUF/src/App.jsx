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
      

<section className="relative min-h-[60vh] flex items-center justify-center">
<img alt="Private Tutoring Scene" className="absolute inset-0 w-full h-full object-cover object-center z-0" src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1500&q=80" />
<div className="absolute inset-0 bg-black/60 z-10"></div>
<div className="relative z-20 max-w-2xl text-center mx-auto px-6 py-20">
<h1 className="text-white text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
        Private Tutoring Program
      </h1>
<p className="text-white text-lg md:text-xl leading-relaxed font-medium drop-shadow-md">
        At Altos Academy, our Private Tutoring Program offers personalized, one-on-one academic support tailored to each student's unique learning needs, goals, and pace. Whether students are looking to reinforce classroom learning, prepare for standardized tests, or explore advanced topics, our experienced tutors provide targeted instruction in a focused environment.
      </p>
</div>
</section>

<section className="py-16 bg-gray-50">
<div className="max-w-5xl mx-auto px-4">
<h2 className="text-3xl font-semibold text-center mb-10">Key Features</h2>
<div className="grid gap-8 md:grid-cols-2">

<div className="flex items-start bg-white rounded-xl shadow-sm p-6">
<div className="flex-shrink-0 mr-4">

<svg className="w-10 h-10 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"></circle>
<circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"></circle>
<circle cx="12" cy="12" fill="currentColor" r="1.5"></circle>
</svg>
</div>
<div>
<h3 className="font-bold text-xl mb-1">Customized Learning Plans</h3>
<p className="text-gray-700">
              Each student receives a personalized tutoring plan based on their academic level, learning style, and subject-specific goals.
            </p>
</div>
</div>

<div className="flex items-start bg-white rounded-xl shadow-sm p-6">
<div className="flex-shrink-0 mr-4">

<svg className="w-10 h-10 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0l6-2m-6 2l-6-2" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<h3 className="font-bold text-xl mb-1">Qualified and Experienced Tutors</h3>
<p className="text-gray-700">
              Our tutors are highly qualified in their respective subject areas and skilled at adapting teaching strategies to support student success.
            </p>
</div>
</div>

<div className="flex items-start bg-white rounded-xl shadow-sm p-6 md:col-span-2">
<div className="flex-shrink-0 mr-4">

<svg className="w-10 h-10 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 15.5A2.5 2.5 0 0 1 6.5 13H20m0-4H6.5a2.5 2.5 0 0 0-2.5 2.5v8A2.5 2.5 0 0 0 6.5 22H20M20 3H6.5A2.5 2.5 0 0 0 4 5.5v8A2.5 2.5 0 0 0 6.5 16H20" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<h3 className="font-bold text-xl mb-1">Comprehensive Subject Coverage</h3>
<ul className="list-disc list-inside text-gray-700 space-y-1 mt-1">
<li>English Language Arts</li>
<li>Reading</li>
<li>Writing</li>
<li>Speech</li>
<li>Debate</li>
<li>History</li>
<li>AP English</li>
<li>College Essay</li>
<li>World Languages</li>
<li>Test Preparation (ISEE, SSAT, SAT, ACT, etc.)</li>
</ul>
</div>
</div>

<div className="flex items-start bg-white rounded-xl shadow-sm p-6 md:col-span-2">
<div className="flex-shrink-0 mr-4">

<svg className="w-10 h-10 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<rect height="8" rx="1.5" stroke="currentColor" width="7" x="3" y="13"></rect>
<rect height="16" rx="1.5" stroke="currentColor" width="7" x="14" y="5"></rect>
<path d="M8 15h2a2 2 0 0 1 2 2v3" strokeLinecap="round"></path>
<rect height="4" rx="1" stroke="currentColor" width="4" x="6" y="7"></rect>
</svg>
</div>
<div>
<h3 className="font-bold text-xl mb-1">Flexible Tutoring Formats</h3>
<ul className="list-disc list-inside text-gray-700 space-y-1 mt-1">
<li>
<span className="font-semibold">In-Person Sessions:</span>
                Held at our learning center in a quiet, focused environment. Ideal for students who benefit from face-to-face interaction and hands-on guidance.
              </li>
<li>
<span className="font-semibold">Online Sessions:</span>
                Conducted via a secure virtual platform. Perfect for busy schedules or remote families.
              </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-2xl mx-auto text-center px-4">
<h2 className="text-2xl font-semibold mb-4">
        Ready to get started? Enroll now to connect with a tutor that fits your needs.
      </h2>
<a className="inline-flex items-center px-8 py-4 mt-4 bg-indigo-600 text-white text-lg font-bold rounded-full shadow-md hover:bg-indigo-700 transition-colors duration-200" href="https://forms.gle/yourformlinkhere" rel="noopener" target="_blank">

<svg className="w-6 h-6 mr-2 -ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<rect height="16" rx="2" stroke="currentColor" width="10" x="7" y="4"></rect>
<path d="M9 2h6v4H9z" stroke="currentColor"></path>
</svg>
        Enroll Now
      </a>
</div>
</section>

    </>
  );
}
