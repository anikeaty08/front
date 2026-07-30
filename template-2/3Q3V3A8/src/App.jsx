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



    // Initialize Lucide icons
    lucide.createIcons();

    // Show More/Less functionality
    const showMoreBtn = document.getElementById('showMoreBtn');
    const extraApplications = document.getElementById('extraApplications');
    const chevronIcon = document.getElementById('chevronIcon');
    const buttonText = document.getElementById('buttonText');
    let isExpanded = false;

    showMoreBtn.addEventListener('click', () => {
      isExpanded = !isExpanded;
      
      if (isExpanded) {
        extraApplications.classList.remove('hidden');
        chevronIcon.style.transform = 'rotate(180deg)';
        buttonText.textContent = 'Show Less';
      } else {
        extraApplications.classList.add('hidden');
        chevronIcon.style.transform = 'rotate(0deg)';
        buttonText.textContent = 'Show More';
      }
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
      
<main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

<section className="text-center space-y-2 mb-16 opacity-0 animate-fade-in-up delay-100">
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
        Welcome Max Mustermann
      </h1>
</section>

<section className="space-y-8 mb-20 opacity-0 animate-fade-in-up delay-200">
<h2 className="text-2xl font-medium text-center tracking-tight text-gray-900">
        Continue Your Applications
      </h2>
<div className="space-y-3">

<div className="group flex items-stretch bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200">
<div className="w-1 bg-red-500 rounded-l-xl"></div>
<div className="flex-1 p-5">
<h3 className="font-medium text-gray-900 mb-2">Talentkarte – Sport</h3>
<div className="flex items-center gap-2 text-sm text-gray-500">
<i data-lucide="clock" style={{width: `14px`, height: `14px`, strokeWidth: `1.5px`}}></i>
<span>Zuletzt bearbeitet am 08.01.2025</span>
</div>
</div>
<div className="flex items-center gap-3 pr-5">
<button className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 transition-colors">
              Fortsetzen
            </button>
<button className="w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
<i data-lucide="trash-2" style={{width: `16px`, height: `16px`, strokeWidth: `1.5px`}}></i>
</button>
</div>
</div>

<div className="group flex items-stretch bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200">
<div className="w-1 bg-amber-500 rounded-l-xl"></div>
<div className="flex-1 p-5">
<h3 className="font-medium text-gray-900 mb-2">Förderung Einzeltraining Musik</h3>
<div className="flex items-center gap-2 text-sm text-gray-500">
<i data-lucide="clock" style={{width: `14px`, height: `14px`, strokeWidth: `1.5px`}}></i>
<span>Zuletzt bearbeitet am 07.01.2025</span>
</div>
</div>
<div className="flex items-center gap-3 pr-5">
<button className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 transition-colors">
              Fortsetzen
            </button>
<button className="w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
<i data-lucide="trash-2" style={{width: `16px`, height: `16px`, strokeWidth: `1.5px`}}></i>
</button>
</div>
</div>

<div className="space-y-3 hidden" id="extraApplications">
<div className="group flex items-stretch bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200">
<div className="w-1 bg-purple-500 rounded-l-xl"></div>
<div className="flex-1 p-5">
<h3 className="font-medium text-gray-900 mb-2">Choreographie Workshop</h3>
<div className="flex items-center gap-2 text-sm text-gray-500">
<i data-lucide="clock" style={{width: `14px`, height: `14px`, strokeWidth: `1.5px`}}></i>
<span>Zuletzt bearbeitet am 05.01.2025</span>
</div>
</div>
<div className="flex items-center gap-3 pr-5">
<button className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 transition-colors">
                Fortsetzen
              </button>
<button className="w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
<i data-lucide="trash-2" style={{width: `16px`, height: `16px`, strokeWidth: `1.5px`}}></i>
</button>
</div>
</div>
</div>
</div>

<div className="flex justify-center pt-4">
<button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" id="showMoreBtn">
<i data-lucide="chevron-down" id="chevronIcon" style={{width: `16px`, height: `16px`, strokeWidth: `1.5px`, transition: `transform 0.2s`}}></i>
<span id="buttonText">Show More</span>
</button>
</div>
</section>

<section className="text-center space-y-12 opacity-0 animate-fade-in-up delay-300">
<div className="space-y-4">
<h2 className="text-2xl font-medium tracking-tight text-gray-900">
          Select Your Field of Talent
        </h2>
<p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
          Choose your area of expertise to discover specialized programs, funding opportunities, and resources tailored to your talent.
        </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<a className="group block rounded-xl bg-red-500 hover:bg-red-600 text-white p-8 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 opacity-0 animate-fade-in-up delay-400" href="#">
<h3 className="text-lg font-medium mb-2">Sport</h3>
<p className="text-sm text-red-100 group-hover:text-white transition-colors">
            Athletik und Sportaktivitäten
          </p>
</a>

<a className="group block rounded-xl bg-amber-500 hover:bg-amber-600 text-white p-8 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 opacity-0 animate-fade-in-up" href="#" style={{animationDelay: `0.5s`}}>
<h3 className="text-lg font-medium mb-2">Musik</h3>
<p className="text-sm text-amber-100 group-hover:text-white transition-colors">
            Musikinstrumente und Performance
          </p>
</a>

<a className="group block rounded-xl bg-purple-500 hover:bg-purple-600 text-white p-8 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 opacity-0 animate-fade-in-up" href="#" style={{animationDelay: `0.6s`}}>
<h3 className="text-lg font-medium mb-2">Tanz</h3>
<p className="text-sm text-purple-100 group-hover:text-white transition-colors">
            Tanz und Choreographie
          </p>
</a>

<a className="group block rounded-xl bg-teal-500 hover:bg-teal-600 text-white p-8 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 opacity-0 animate-fade-in-up" href="#" style={{animationDelay: `0.7s`}}>
<h3 className="text-lg font-medium mb-2">Andere</h3>
<p className="text-sm text-teal-100 group-hover:text-white transition-colors">
            Andere kreative Talente
          </p>
</a>
</div>
</section>
</main>


    </>
  );
}
