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
      

<section className="relative h-[450px] md:h-[550px] flex items-center justify-center">
<img alt="Focused student studying" className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&amp;fit=crop&amp;w=1500&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-br from-black/70 to-blue-900/60"></div>
<div className="relative z-10 max-w-2xl mx-auto text-center text-white px-4">
<h1 className="text-3xl md:text-5xl font-bold mb-5 drop-shadow-lg">
        Achieve Academic Success with Expert Test Prep
      </h1>
<p className="text-lg md:text-xl font-medium drop-shadow-md">
        Whether your child is applying to a private school, preparing for high school AP exams, or working toward college admissions, our experienced tutors provide the tools and strategies they need to succeed.
      </p>
</div>
</section>

<section className="relative py-16 md:py-24">
<img alt="Classroom background" className="absolute inset-0 w-full h-full object-cover object-center opacity-20 pointer-events-none" src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&amp;fit=crop&amp;w=1500&amp;q=80"/>
<div className="absolute inset-0 bg-white/60"></div>
<div className="relative max-w-4xl mx-auto px-4 md:px-8">
<h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 text-center mb-8">What We Offer</h2>
<ul className="space-y-4 text-gray-700 text-lg md:text-xl font-medium mb-10">
<li className="flex items-start space-x-3">
<svg className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>Personalized instruction based on each student’s needs</span>
</li>
<li className="flex items-start space-x-3">
<svg className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>Test-taking strategies to improve timing and accuracy</span>
</li>
<li className="flex items-start space-x-3">
<svg className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>Practice tests to track progress and build confidence</span>
</li>
<li className="flex items-start space-x-3">
<svg className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>Small group or one-on-one tutoring</span>
</li>
<li className="flex items-start space-x-3">
<svg className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>In-person or online learning options</span>
</li>
</ul>
<div className="flex flex-col items-center space-y-4">
<span className="text-gray-700 text-center">Reach out to schedule a free trial class. We’ll help you find the best fit for your child and set them up for success!</span>
<a className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-blue-800 transition" href="#contact">
          Contact Us
        </a>
</div>
</div>
</section>

<section className="py-16 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
<img alt="SSAT" className="w-full h-40 object-cover object-center" src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-bold text-blue-700 mb-2">SSAT</h3>
<p className="text-gray-700 mb-3 flex-1">
              The SSAT is a standardized test used by many private and independent schools in the U.S. and Canada to evaluate applicants for admission. It measures the basic verbal, math, and reading skills students need for academic success.
            </p>
<div className="text-gray-600 text-sm mb-4">
<span className="font-semibold">SSAT Levels:</span>
<ul className="list-disc ml-5 mt-1 space-y-1">
<li>Elementary Level – Grades 4–5</li>
<li>Middle Level – Grades 6–8</li>
<li>Upper Level – Grades 9–12</li>
</ul>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
<img alt="ISEE" className="w-full h-40 object-cover object-center" src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-bold text-blue-700 mb-2">ISEE</h3>
<p className="text-gray-700 mb-3 flex-1">
              The ISEE is another widely accepted admission test for private elementary, middle, and high schools, designed by the Educational Records Bureau (ERB). It evaluates students’ readiness for academic challenges in independent schools.
            </p>
<div className="text-gray-600 text-sm mb-4">
<span className="font-semibold">ISEE Levels:</span>
<ul className="list-disc ml-5 mt-1 space-y-1">
<li>Lower Level – Grades 5–6</li>
<li>Middle Level – Grades 7–8</li>
<li>Upper Level – Grades 9–12</li>
</ul>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
<img alt="SAT" className="w-full h-40 object-cover object-center" src="https://images.unsplash.com/photo-1510936111840-6cef99faf2a9?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-bold text-blue-700 mb-2">SAT (Scholastic Assessment Test)</h3>
<p className="text-gray-700 mb-3 flex-1">
              The SAT is a standardized test widely used for college admissions in the United States. It assesses students' skills in reading, writing, and math, with an emphasis on evidence-based reasoning and problem solving. The SAT is known for its structured format and includes both multiple-choice and grid-in questions.
            </p>
<p className="text-gray-700 text-sm">
              Most colleges accept either the SAT or ACT, and students are encouraged to take practice tests to determine which exam aligns best with their strengths.
            </p>
</div>
</div>

<div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
<img alt="ACT" className="w-full h-40 object-cover object-center" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-bold text-blue-700 mb-2">ACT (American College Test)</h3>
<p className="text-gray-700 mb-3 flex-1">
              The ACT is another major college admissions test accepted by U.S. colleges. It covers English, math, reading, and science, and includes an optional writing section. The ACT is known for its faster pace and inclusion of science reasoning.
            </p>
<p className="text-gray-700 text-sm">
              Students who are more comfortable with time-pressured questions or science-based reasoning may prefer the ACT. Practice exams can help identify which test better suits a student’s learning style.
            </p>
</div>
</div>
</div>
</div>
</section>

<div id="contact"></div>

    </>
  );
}
