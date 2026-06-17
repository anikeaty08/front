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
      

<header className="bg-white shadow-sm sticky top-0 z-20">
<div className="max-w-5xl flex items-center justify-between md:px-8 mr-auto ml-auto pt-6 pr-4 pb-6 pl-4">
<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100">
<svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2.2" viewbox="0 0 24 24">
<rect fill="none" height="15" rx="3" stroke="currentColor" width="15" x="4.5" y="4.5"></rect>
<path d="M9 15l2.5-3 2 2.5 3.5-5" fill="none" stroke="currentColor" strokeLinecap="round"></path>
</svg>
</span>
<span className="text-2xl font-bold text-indigo-800 tracking-tight">SnapFind</span>
</div>
<div className="flex items-center gap-4">
<span className="text-xs text-gray-600 bg-gray-100 rounded pt-1 pr-3 pb-1 pl-3">Private Local Storage</span>
<button className="hover:bg-indigo-700 transition text-white bg-indigo-600 rounded-lg pt-2 pr-4 pb-2 pl-4 shadow" type="button">
          Get Started
        </button>
</div>
</div>
</header>

<section className="max-w-5xl mx-auto px-4 md:px-8 py-10 md:py-16 flex flex-col md:flex-row items-center gap-10">
<div className="flex-1">
<h1 className="text-4xl md:text-5xl font-extrabold text-indigo-800 mb-5 leading-tight">
        Smartly Organize <span className="text-indigo-600">Everything</span> You Own
      </h1>
<p className="text-lg md:text-xl text-gray-700 mb-8">
        SnapFind is your personal assistant for effortlessly cataloging, finding, and managing your physical belongings. Snap a photo, add a few details, and let intelligent features keep you organized—securely, privately, and offline.
      </p>
<ul className="space-y-2 mb-8">
<li className="flex items-center text-gray-700">
<span className="text-indigo-500 mr-2"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
          AI-powered description &amp; tag suggestions
        </li>
<li className="flex items-center text-gray-700">
<span className="text-indigo-500 mr-2"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
          Smart image handling &amp; duplicate prevention
        </li>
<li className="flex items-center text-gray-700">
<span className="text-indigo-500 mr-2"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
          Fast search by text or image
        </li>
<li className="flex items-center text-gray-700">
<span className="text-indigo-500 mr-2"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
          Secure, private, offline-first storage
        </li>
</ul>
<button className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition text-lg group">
<svg className="w-6 h-6 group-hover:scale-110 transition" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        Start Organizing Now
      </button>
</div>
<div className="flex-1 flex justify-center">
<div className="relative w-[320px] h-[420px]">
<div className="absolute -inset-3 bg-indigo-100 rounded-3xl blur-lg"></div>
<div className="relative rounded-3xl shadow-xl bg-white overflow-hidden border border-indigo-200">
<img alt="Sample item" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&amp;fit=facearea&amp;w=400&amp;q=80"/>
<div className="p-5">
<div className="flex gap-2 mb-3">
<span className="text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded">Gadgets</span>
<span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">Drawer 3</span>
</div>
<h2 className="text-lg font-bold text-gray-800 mb-2">Portable Hard Drive</h2>
<p className="text-sm text-gray-600 mb-3">Black 1TB USB 3.0 drive, backup for photos and files.</p>
<div className="flex flex-wrap gap-1 text-xs">
<span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">electronics</span>
<span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">storage</span>
<span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">backup</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-12 md:py-16 border-t">
<div className="max-w-5xl md:px-8 mr-auto ml-auto pr-4 pl-4">
<h2 className="text-2xl md:text-3xl font-extrabold text-indigo-800 mb-8 text-center">What Can SnapFind Do For You?</h2>
<div className="grid md:grid-cols-2 gap-10">

<div className="bg-indigo-50 rounded-xl p-6 shadow-sm flex flex-col gap-3">
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100">
<svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 5v14m7-7H5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</span>
<span className="font-semibold text-indigo-800">Effortless Item Cataloging</span>
</div>
<ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
<li> Add new items with description, location, and image.</li>
<li className=""> Upload, drag &amp; drop, or paste images; mobile camera supported.</li>
<li> Images are resized and compressed automatically before saving.</li>
</ul>
</div>

<div className="bg-indigo-50 rounded-xl p-6 shadow-sm flex flex-col gap-3">
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100">
<svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</span>
<span className="font-semibold text-indigo-800">AI-Powered Organization</span>
</div>
<ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
<li> AI generates concise item descriptions from images.</li>
<li className=""> AI proposes useful tags; re-trigger any time.</li>
<li className=""> Detects similar items before adding to avoid clutter.</li>
</ul>
</div>

<div className="bg-indigo-50 rounded-xl p-6 shadow-sm flex flex-col gap-3">
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100">
<svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="14" rx="2" width="14" x="5" y="5"></rect><path d="M15 9l-6 6M9 9h6v6"></path></svg>
</span>
<span className="font-semibold text-indigo-800">Intuitive Item Management</span>
</div>
<ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
<li> View all items in a beautiful card layout.</li>
<li> Modify details and trigger new AI suggestions anytime.</li>
<li> Remove items with confirmation.</li>
</ul>
</div>

<div className="bg-indigo-50 rounded-xl p-6 shadow-sm flex flex-col gap-3">
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100">
<svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg>
</span>
<span className="font-semibold text-indigo-800">Powerful Search Capabilities</span>
</div>
<ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
<li> Floating Action Button for instant search.</li>
<li> Find by keywords or upload an image for AI-powered matching.</li>
</ul>
</div>

<div className="bg-indigo-50 rounded-xl p-6 shadow-sm flex flex-col gap-3 md:col-span-2">
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100">
<svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"></path><path d="M16 3v4H8V3"></path></svg>
</span>
<span className="font-semibold text-indigo-800">Your Data, Your Control</span>
</div>
<ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
<li className=""> All data is stored securely in your browser, offline and private.</li>
<li> Know your available space at a glance.</li>
<li> Export/import your catalog with replace or merge options.</li>
<li> Reset your database anytime with confirmation.</li>
</ul>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-4 md:px-8 py-12">
<div className="flex flex-col md:flex-row items-center md:gap-10">
<div className="flex-1">
<h3 className="text-xl font-bold text-indigo-800 mb-1">Modern &amp; User-Friendly Design</h3>
<p className="text-gray-700 mb-3">
          SnapFind is built for a smooth, responsive experience on any device—desktop, tablet, or mobile. Enjoy a clean card layout, page-like navigation, and seamless workflows for adding, editing, and searching your items.
        </p>
<ul className="flex gap-4 text-gray-500 text-xs">
<li className="flex items-center gap-1">
<svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M3 7h18M3 12h18M3 17h18"></path></svg>
            Next.js
          </li>
<li className="flex items-center gap-1">
<svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle></svg>
            React
          </li>
<li className="flex items-center gap-1">
<svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="16" rx="4" width="16" x="4" y="4"></rect></svg>
            ShadCN UI
          </li>
</ul>
</div>
<div className="flex-1 flex justify-center mt-6 md:mt-0">
<img alt="App UI sample" className="rounded-2xl shadow border border-gray-200 w-[280px] h-[180px] object-cover" src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&amp;fit=facearea&amp;w=340&amp;q=80"/>
</div>
</div>
</section>

<section className="bg-indigo-600 pt-12 pb-12">
<div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
<h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Ready to organize everything you own?</h2>
<p className="text-indigo-200 mb-6 text-lg">Sign up or start using SnapFind now—your belongings, organized, always at your fingertips.</p>
<button className="px-6 py-3 bg-white text-indigo-700 font-bold rounded-lg shadow hover:bg-indigo-50 transition text-lg">Get Started Free</button>
</div>
</section>

<footer className="bg-white border-t">
<div className="max-w-5xl md:px-8 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500 mr-auto ml-auto pt-6 pr-4 pb-6 pl-4">
<span>© 2024 SnapFind. All rights reserved.</span>
<span>
        Built for privacy-first item management.
      </span>
</div>
</footer>

    </>
  );
}
