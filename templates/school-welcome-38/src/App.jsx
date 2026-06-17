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
      

<div className="hidden" style={{display: 'none', maxHeight: '0', overflow: 'hidden', opacity: '0'}}>
      A New Term, A New Beginning! The journey starts August 26, 2025. Your key dates, new teachers, and schedule are inside.
    </div>

<div className="px-4 sm:px-6">
<div className="mx-auto w-full max-w-[600px]">

<div className="relative bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">

<div className="pointer-events-none absolute -right-10 top-10 h-24 w-24 rounded-full bg-yellow-300/60 blur-xl"></div>
<div className="pointer-events-none absolute -left-12 -bottom-8 h-28 w-28 rounded-full bg-blue-300/40 blur-xl"></div>

<div className="px-6 sm:px-10 pt-6 pb-4">
<div className="flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-gray-900 text-white flex items-center justify-center text-sm tracking-tight font-semibold">MH</div>
<div className="text-sm text-gray-500">Maplewood High</div>
</div>
<a className="text-xs text-gray-500 hover:text-gray-700 hover:underline" href="#">View in browser</a>
</div>
</div>

<div className="px-6 sm:px-10 pb-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

<div className="order-2 md:order-1">
<p className="text-xs uppercase tracking-wide text-gray-500">Header / Hero Section</p>
<h1 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">A New Term, A New Beginning!</h1>
<p className="mt-3 text-gray-700">
                  We’re thrilled to welcome you back to another exciting school year at Maplewood High.
                  <span className="whitespace-nowrap">📅 The journey begins <span className="font-medium text-gray-900">August 26, 2025</span>!</span>
</p>
<div className="mt-4 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-5 py-2.5 text-base font-medium text-gray-900 hover:bg-yellow-300 transition" href="#">

<svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M16 2v4M8 2v4M3 10h18"></path>
</svg>
                    Save the date
                  </a>
<a className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-5 py-2.5 text-base text-gray-700 hover:border-gray-300 transition" href="#">

<svg className="mr-2 h-4 w-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polygon points="10 8 16 12 10 16 10 8"></polygon>
</svg>
                    See how it works
                  </a>
</div>
</div>

<div className="order-1 md:order-2 relative">
<div className="grid grid-cols-2 gap-4">
<div className="aspect-square overflow-hidden rounded-full ring-1 ring-gray-200 shadow-sm">
<img alt="Student smiling in class" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="aspect-square overflow-hidden rounded-2xl ring-1 ring-gray-200 shadow-sm">
<img alt="Student writing at desk" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="aspect-square overflow-hidden rounded-2xl ring-1 ring-gray-200 shadow-sm">
<img alt="Classroom activity" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square overflow-hidden rounded-full ring-1 ring-gray-200 shadow-sm">
<img alt="Art project with kids" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<span className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-blue-500/80"></span>
<span className="absolute -left-3 bottom-6 h-3 w-3 rounded-full bg-emerald-400/80"></span>
</div>
</div>
</div>
<div className="border-t border-gray-200"></div>

<div className="px-6 sm:px-10 py-6">
<p className="text-xs uppercase tracking-wide text-gray-500">Section 1 — Welcome Message</p>
<div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
<div className="md:col-span-2 space-y-4 text-gray-700">
<p>Hello [Student Name],</p>
<p>We hope you had a restful and fun-filled summer! As we step into the new term, we’re excited for all the learning, laughter, and growth that lies ahead. This year brings fresh opportunities, new faces, and countless moments to create together.</p>
<p>Let’s make this year the best one yet — full of curiosity, collaboration, and creativity!</p>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="aspect-square overflow-hidden rounded-xl ring-1 ring-gray-200">
<img alt="Kids in classroom" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<div className="aspect-square overflow-hidden rounded-xl ring-1 ring-gray-200">
<img alt="Smiling student" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
<div className="border-t border-gray-200"></div>

<div className="px-6 sm:px-10 py-6">
<p className="text-xs uppercase tracking-wide text-gray-500">Section 2 — What’s Happening This Term</p>

<div className="mt-3">
<div className="flex items-center gap-2">

<svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M16 2v4M8 2v4M3 10h18"></path>
<path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"></path>
</svg>
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Key Dates to Remember</h2>
</div>
<div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">

<div className="rounded-2xl border border-gray-200 p-4 bg-white">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg overflow-hidden ring-1 ring-gray-200">
<img alt="Kids during orientation" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div>
<div className="text-base font-medium text-gray-900">Orientation Week</div>
<div className="text-sm text-gray-600">August 20–23</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-gray-200 p-4 bg-white">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg overflow-hidden ring-1 ring-gray-200">
<img alt="Students ready for class" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-base font-medium text-gray-900">First Day of Classes</div>
<div className="text-sm text-gray-600">August 26</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-gray-200 p-4 bg-white">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg overflow-hidden ring-1 ring-gray-200">
<img alt="Family and school" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-base font-medium text-gray-900">Parent-Teacher Meet &amp; Greet</div>
<div className="text-sm text-gray-600">September 6</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8">
<div className="flex items-center gap-2">

<svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Meet Our New Teachers!</h2>
</div>
<p className="mt-1 text-gray-700">They’re excited to meet you and bring fresh energy to our classrooms!</p>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">

<div className="rounded-2xl border border-gray-200 overflow-hidden hover:border-gray-300 transition">
<div className="h-24 w-full overflow-hidden">
<img alt="Students in science lab" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="flex items-center gap-3 p-3">
<img alt="New teacher portrait" className="h-10 w-10 rounded-full object-cover ring-1 ring-gray-200" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-base font-medium text-gray-900">Mr. Jacobson</div>
<div className="text-sm text-gray-500">Science Department</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-gray-200 overflow-hidden hover:border-gray-300 transition">
<div className="h-24 w-full overflow-hidden">
<img alt="Students drawing art" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-3 p-3">
<img alt="New teacher portrait" className="h-10 w-10 rounded-full object-cover ring-1 ring-gray-200" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-base font-medium text-gray-900">Ms. Patel</div>
<div className="text-sm text-gray-500">Art &amp; Design</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-gray-200 overflow-hidden hover:border-gray-300 transition">
<div className="h-24 w-full overflow-hidden">
<img alt="Kids in gym class" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<div className="flex items-center gap-3 p-3">
<img alt="New teacher portrait" className="h-10 w-10 rounded-full object-cover ring-1 ring-gray-200" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-base font-medium text-gray-900">Coach Ramirez</div>
<div className="text-sm text-gray-500">Physical Education</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8 rounded-2xl border border-gray-200 p-5 bg-gray-50">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div className="flex items-center gap-3">

<svg className="h-5 w-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 4v16a2 2 0 0 0 2 2h6V6a2 2 0 0 0-2-2H2z"></path>
<path d="M22 4v16a2 2 0 0 1-2 2h-6V6a2 2 0 0 1 2-2h6z"></path>
</svg>
<div>
<div className="text-base font-medium text-gray-900">Class Schedule</div>
<div className="text-sm text-gray-600">Your updated schedule and homeroom assignments are now available.</div>
</div>
</div>
<a className="inline-flex items-center justify-center rounded-full bg-gray-900 px-4 py-2.5 text-base font-medium text-white hover:bg-gray-800 hover:shadow-sm focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900" href="#">

<svg className="mr-2 h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="M7 10l5 5 5-5"></path>
<path d="M12 15V3"></path>
</svg>
                  Download Class Schedule
                </a>
</div>
</div>
</div>
<div className="border-t border-gray-200"></div>

<div className="px-6 sm:px-10 py-6">
<p className="text-xs uppercase tracking-wide text-gray-500">Why Choose Us</p>
<h3 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Experience the magic of learning</h3>
<div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-gray-200">
<img alt="Kids building project" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-gray-200">
<img alt="Teacher guiding students" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-gray-200">
<img alt="Students collaborating" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-gray-200">
<img alt="Creative classroom" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
</div>
</div>
<div className="border-t border-gray-200"></div>

<div className="px-6 sm:px-10 py-6">
<p className="text-xs uppercase tracking-wide text-gray-500">Section 3 — Message from the Principal</p>
<div className="mt-3 rounded-2xl border border-gray-200 p-5 bg-gradient-to-br from-gray-50 to-white">
<div className="flex items-start gap-3">

<svg className="h-5 w-5 text-gray-500 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h5v7H5z"></path>
<path d="M14 12h5v7h-5z"></path>
<path d="M7 12a5 5 0 1 1 5-5"></path>
<path d="M16 12a5 5 0 1 1 5-5"></path>
</svg>
<div className="text-gray-800">
<p className="text-gray-800">“Every new term is a new chance — to dream bigger, work harder, and grow stronger together. Let’s embrace challenges with courage and kindness. Here’s to an inspiring year ahead!”</p>
<p className="mt-3 text-sm font-medium text-gray-900">— Principal Maria Lawson</p>
</div>
</div>
</div>
</div>

<div className="border-t border-gray-200"></div>
<div className="px-6 sm:px-10 py-6">
<p className="text-base font-medium text-gray-900">Stay connected with Maplewood High:</p>
<div className="mt-2 flex items-center gap-4">
<a className="inline-flex items-center gap-2 text-base text-gray-600 hover:text-gray-900 hover:underline focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300" href="#">

<svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.5" y1="6.5" y2="6.5"></line>
</svg>
                Instagram
              </a>
<a className="inline-flex items-center gap-2 text-base text-gray-600 hover:text-gray-900 hover:underline focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300" href="#">

<svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
                Facebook
              </a>
<a className="inline-flex items-center gap-2 text-base text-gray-600 hover:text-gray-900 hover:underline focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300" href="#">

<svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M2 12h20"></path>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
</svg>
                Website
              </a>
</div>
<p className="mt-5 text-xs text-gray-500">
              You’re receiving this email because you’re part of the Maplewood High student community.
              <br/>
<a className="text-gray-600 hover:text-gray-900 hover:underline" href="#">Unsubscribe</a> |
              <a className="text-gray-600 hover:text-gray-900 hover:underline" href="#">Update Preferences</a>
</p>
<p className="mt-4 text-[11px] text-gray-400">
              Maplewood High, 123 School Lane, Maplewood, NY 10001
            </p>
</div>
</div>

<div className="h-10"></div>
</div>
</div>

    </>
  );
}
