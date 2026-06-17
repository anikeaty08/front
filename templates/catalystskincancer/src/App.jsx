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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<main className="flex-grow flex flex-col z-10 pt-24 pr-4 pb-12 pl-4 relative items-center">

<div className="flex items-center justify-center mb-8 relative">
<img alt="CATALYST Logo" className="h-32 md:h-40 w-auto mix-blend-multiply transition-transform duration-700 ease-out hover:scale-105" src="https://catalyst-skincancers.com/wp-content/uploads/2024/11/Catalyst-Logo-Animation-_fee1d1-241112.gif"/>
</div>

<div className="w-full max-w-5xl bg-[#c58cb9]/85 backdrop-blur-md rounded-3xl pt-16 pb-12 px-12 md:px-24 flex flex-col items-center text-center shadow-2xl border border-white/10">

<div className="mb-14 flex flex-col items-center relative z-20">
<label className="text-lg font-medium mb-3">Which Learner Are You?</label>
<div className="relative w-72 group">
<select @change="if($el.value === 'clinician') setTimeout(() =&gt; { if(learner === 'clinician') showPopup = true }, 400)" className="w-full bg-[#3f434a] text-[#e0e0e0] border border-gray-600 rounded flex items-center justify-between px-4 py-2.5 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6b58ab]/50 appearance-none cursor-pointer relative z-10 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:border-gray-400" x-model="learner">
<option value="">- Please select -</option>
<option value="clinician">Clinician</option>
<option value="patient">Patient or Caregiver</option>
</select>
<svg className="w-5 h-5 text-gray-300 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none z-20 transition-colors duration-300 group-hover:text-[#6b58ab]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>

<div className="space-y-6 text-lg leading-relaxed max-w-4xl mx-auto mb-16" x-show="learner === ''" x-transition:enter="transition ease-out duration-500" x-transition:enter-end="opacity-100" x-transition:enter-start="opacity-0">
<p>
            Our CATALYST initiative is an online resource designed to provide
            clinicians and patients with the latest information on advanced
            cutaneous squamous cell carcinoma (cSCC) and basal cell carcinoma
            (BCC). The advent of more targeted immunotherapeutic approaches has
            transformed patient care, leading to better disease control and
            significant improvement in quality of life. Our objective is to
            provide clinicians and patients with essential information, foster
            informed discussion about treatment options, and enhance the overall
            standard of care for those affected by advanced skin cancers.
          </p>
<p>
            Please explore the Clinician and Patient portals for cutting-edge
            information on present and evolving treatments for BCC and cSCC.
          </p>
</div>

<div className="grid grid-cols-1 gap-6 w-full mt-4 [&amp;&gt;div:not(:last-child)]:transition-all [&amp;&gt;div:not(:last-child)]:duration-500 [&amp;&gt;div:not(:last-child)]:ease-out [&amp;&gt;div:not(:last-child):hover]:-translate-y-2 [&amp;&gt;div:not(:last-child):hover]:shadow-2xl [&amp;_a]:transition-all [&amp;_a]:duration-300 [&amp;_a]:ease-out [&amp;_a:hover]:scale-105 [&amp;_a:active]:scale-95 md:grid-cols-2" style={{display: 'none'}} x-show="learner === 'clinician'" x-transition:enter="transition ease-out duration-500" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 translate-y-8">
<div className="relative group rounded-xl overflow-hidden shadow-lg h-64 bg-[#7a5a96] cursor-pointer">
<img alt="Basal Cell Carcinoma" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40 group-hover:scale-105 transition-transform duration-500" src="https://catalyst-skincancers.com/wp-content/uploads/2024/07/ON-154-01L-BCC-Image-for-website-landing-page-1024x576-1.jpeg"/>
<div className="absolute inset-0 bg-black/20 z-0 pointer-events-none"></div>
<div className="absolute inset-0 flex items-center justify-center p-4 text-center z-10 transition-opacity duration-300 group-hover:opacity-0">
<div className="flex flex-row items-center w-full h-full">
<div className="w-[35%] flex justify-center items-center">
<img alt="Icon" className="w-12 h-12 md:w-16 md:h-16 object-contain" src="https://catalyst-skincancers.com/wp-content/uploads/2021/01/fav.png"/>
</div>
<div className="w-[65%] flex items-center text-left pl-2 pr-4">
<h3 className="text-xl md:text-2xl font-semibold text-white drop-shadow-md leading-tight">
                    Basal Cell Carcinoma
                  </h3>
</div>
</div>
</div>
<div className="absolute inset-0 bg-black/50 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 z-20 backdrop-blur-sm">
<p className="text-white text-sm mb-4 leading-relaxed">
                Basal cell carcinoma (BCC), particularly advanced BCC, can be
                associated with complex management and poor outcomes. However,
                therapeutic advancements have enhanced strategies for
                patient-specific care.
              </p>
<a className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition-colors text-sm shadow-xl" href="#">
                Visit Site
              </a>
</div>
</div>
<div className="relative group rounded-xl overflow-hidden shadow-lg h-64 bg-[#5a4895] cursor-pointer">
<img alt="Cutaneous Squamous Cell Carcinoma" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40 group-hover:scale-105 transition-transform duration-500" src="https://catalyst-skincancers.com/wp-content/uploads/2024/07/ON-154-01L-cSCC-Image-for-website-landing-page-1024x591-1.png"/>
<div className="absolute inset-0 bg-black/20 z-0 pointer-events-none"></div>
<div className="absolute inset-0 flex items-center justify-center p-4 text-center z-10 transition-opacity duration-300 group-hover:opacity-0">
<div className="flex flex-row items-center w-full h-full">
<div className="w-[35%] flex justify-center items-center">
<img alt="Icon" className="w-12 h-12 md:w-16 md:h-16 object-contain" src="https://catalyst-skincancers.com/wp-content/uploads/2021/01/fav.png"/>
</div>
<div className="w-[65%] flex items-center text-left pl-2 pr-4">
<h3 className="text-xl md:text-2xl font-semibold text-white drop-shadow-md leading-tight">
                    Cutaneous Squamous Cell Carcinoma
                  </h3>
</div>
</div>
</div>
<div className="absolute inset-0 bg-black/50 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 z-20 backdrop-blur-sm">
<p className="text-white text-sm mb-4 leading-relaxed">
                Cutaneous squamous cell carcinoma (cSCC), particularly advanced
                cSCC, can be associated with complex management and poor
                outcomes. However, therapeutic advancements have enhanced
                strategies for patient-specific care.
              </p>
<a className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition-colors text-sm shadow-xl" href="#">
                Visit Site
              </a>
</div>
</div>
<div className="relative rounded-xl overflow-hidden shadow-lg h-64 bg-[#6b58ab] md:col-span-2 w-full md:w-[calc(50%-0.75rem)] mx-auto">
<img alt="Introducing Ruby" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40" src="https://catalyst-skincancers.com/wp-content/uploads/2026/03/Catalyst-Skin-Cancer-BG-Image-2x-scaled.jpg"/>
<div className="absolute inset-0 z-10 flex flex-row items-center p-4 sm:p-6">
<div className="w-2/5 flex justify-center items-center">
<img alt="Ruby" className="w-full h-auto object-contain max-h-40 rounded-[10px] border-2 border-[#FF75D1]" src="https://catalyst-skincancers.com/wp-content/uploads/2026/01/ruby-1.png"/>
</div>
<div className="w-3/5 flex flex-col justify-center pl-4 text-left">
<h3 className="text-xl font-semibold text-white drop-shadow-md mb-2">
                  Introducing Ruby
                </h3>
<p className="text-white mb-4 text-xs font-normal">
                  The World's First Al-Powered Clinical Consultant for cSCC
                  Management.
                </p>
<div className="flex flex-col space-y-2">
<a className="px-3 py-1.5 bg-white/20 text-white font-medium rounded-full hover:bg-white/30 transition-colors text-xs text-center border border-white/50 backdrop-blur-md" href="#">
                    Start CME Activity
                  </a>
<a className="px-3 py-1.5 bg-[#c58cb9] text-white font-medium rounded-full hover:bg-[#a6749b] transition-colors text-xs text-center border border-transparent shadow-md" href="#">
                    Experience Ruby
                  </a>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto mt-4 [&amp;&gt;div]:transition-all [&amp;&gt;div]:duration-500 [&amp;&gt;div]:ease-out [&amp;&gt;div:hover]:-translate-y-2 [&amp;&gt;div:hover]:shadow-2xl [&amp;_a]:transition-all [&amp;_a]:duration-300 [&amp;_a]:ease-out [&amp;_a:hover]:scale-105 [&amp;_a:active]:scale-95" style={{display: 'none'}} x-show="learner === 'patient'" x-transition:enter="transition ease-out duration-500" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 translate-y-8">
<div className="relative group rounded-xl overflow-hidden shadow-lg h-72 bg-[#5a4895] cursor-pointer">
<img alt="Basal Cell Carcinoma" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40 group-hover:scale-105 transition-transform duration-500" src="https://catalyst-skincancers.com/wp-content/uploads/2024/07/ON-154-01L-BCC-Image-for-website-landing-page-1024x576-1.jpeg"/>
<div className="absolute inset-0 bg-black/20 z-0 pointer-events-none"></div>
<div className="absolute inset-0 flex items-center justify-center p-4 text-center z-10 transition-opacity duration-300 group-hover:opacity-0">
<div className="flex flex-row items-center w-full h-full">
<div className="w-[35%] flex justify-center items-center">
<img alt="Icon" className="w-12 h-12 md:w-16 md:h-16 object-contain" src="https://catalyst-skincancers.com/wp-content/uploads/2021/01/fav.png"/>
</div>
<div className="w-[65%] flex items-center text-left pl-2 pr-4">
<h3 className="text-2xl md:text-3xl font-semibold text-white drop-shadow-md leading-tight">
                    Basal Cell Carcinoma
                  </h3>
</div>
</div>
</div>
<div className="absolute inset-0 bg-black/50 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 z-20 backdrop-blur-sm">
<p className="text-white text-sm mb-4 leading-relaxed">
                As a patient, it is essential to take charge of your treatment
                journey for basal cell carcinoma (BCC). Active involvement in
                the process ensures that you fully understand your condition and
                treatment options, enables you to feel more in control and
                potentially improves outcomes.
              </p>
<a className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition-colors text-sm shadow-xl" href="#">
                Visit Site
              </a>
</div>
</div>
<div className="relative group rounded-xl overflow-hidden shadow-lg h-72 bg-[#7a5a96] cursor-pointer">
<img alt="Cutaneous Squamous Cell Carcinoma" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40 group-hover:scale-105 transition-transform duration-500" src="https://catalyst-skincancers.com/wp-content/uploads/2024/07/ON-154-01L-cSCC-Image-for-website-landing-page-1024x591-1.png"/>
<div className="absolute inset-0 bg-black/20 z-0 pointer-events-none"></div>
<div className="absolute inset-0 flex items-center justify-center p-4 text-center z-10 transition-opacity duration-300 group-hover:opacity-0">
<div className="flex flex-row items-center w-full h-full">
<div className="w-[35%] flex justify-center items-center">
<img alt="Icon" className="w-12 h-12 md:w-16 md:h-16 object-contain" src="https://catalyst-skincancers.com/wp-content/uploads/2021/01/fav.png"/>
</div>
<div className="w-[65%] flex items-center text-left pl-2 pr-4">
<h3 className="text-2xl md:text-3xl font-semibold text-white drop-shadow-md leading-tight">
                    Cutaneous Squamous Cell Carcinoma
                  </h3>
</div>
</div>
</div>
<div className="absolute inset-0 bg-black/50 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 z-20 backdrop-blur-sm">
<p className="text-white text-sm mb-4 leading-relaxed">
                Active involvement in your treatment for cutaneous squamous cell
                carcinoma (cSCC) is crucial. Being informed about your
                condition, treatment options, and the roles of your healthcare
                team enables you to make better decisions about your care.
              </p>
<a className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition-colors text-sm shadow-xl" href="#">
                Visit Site
              </a>
</div>
</div>
</div>
</div>
</main>
<footer className="w-full py-8 px-6 flex flex-col items-center text-center z-10 relative mt-auto border-t border-white/10 bg-[#1d2327]/40 backdrop-blur-md">
<img alt="Med Learning Group" className="h-16 mb-4 w-auto object-contain" src="https://catalyst-skincancers.com/wp-content/uploads/2024/03/mlg-logos-2022.png"/>
<p className="text-sm text-[#e0e0e0] font-normal max-w-4xl mx-auto leading-relaxed">
        This activity is provided by Med Learning Group.
        <br/>
        This program is supported by an independent educational grant from
        Regeneron Pharmaceuticals, Inc.
        <br/>
        Copyright © 2026 BCC/cSCC. All Rights Reserved. Website by
        <a className="text-white hover:text-[#c58cb9] transition-colors underline decoration-white/30 hover:decoration-[#c58cb9]" href="https://www.divigner.com/" target="_blank">
          Divigner
        </a>
        .
      </p>
</footer>
<div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1d2327]/60 backdrop-blur-sm px-4" style={{display: 'none'}} x-show="showPopup" x-transition.opacity="">
<div @click.away="showPopup = false" className="text-white rounded-2xl shadow-2xl max-w-[1000px] w-full p-6 md:p-10 relative text-left bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col max-h-[90vh] md:max-h-[95vh]" style={{backgroundImage: 'url("https://catalyst-skincancers.com/wp-content/uploads/2026/03/Catalyst-Skin-Cancer-BG-Image-2x-scaled.jpg")'}} x-transition.scale="">
<div className="absolute inset-0 bg-[#2d1b4e]/85 rounded-2xl z-0 pointer-events-none"></div>
<button @click="showPopup = false" className="absolute top-4 right-4 text-white/70 hover:text-white transition-all duration-300 ease-in-out hover:rotate-90 hover:scale-110 z-20">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
<div className="relative z-10 flex flex-col items-center overflow-y-auto w-full min-h-0">
<h2 className="text-xl md:text-3xl font-semibold mb-4 md:mb-8 text-white tracking-tight text-center max-w-4xl leading-snug">
<span className="text-[#ff75d1]">INTRODUCING RUBY:</span>
            The World’s First Al-Powered Clinical Consultant for cSCC Management
          </h2>
<div className="grid grid-cols-1 md:grid-cols-[35%_1fr] gap-6 md:gap-10 w-full mb-4 md:mb-8 items-center">
<div className="flex items-center justify-center">
<img alt="Ruby" className="w-3/5 sm:w-1/2 md:w-full max-w-[220px] md:max-w-none object-cover shadow-2xl aspect-[3/2] md:aspect-[3/4] mx-auto" src="https://catalyst-skincancers.com/wp-content/uploads/2026/01/ruby.webp" style={{border: '2px solid #FF6DD2BD', borderRadius: '15px'}}/>
</div>
<div className="flex flex-col justify-center text-left">
<p className="font-bold text-xl mb-3 md:mb-5 text-white text-center md:text-left">
                Ruby delivers:
              </p>
<ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
<li className="flex items-start">
<svg className="w-5 h-5 text-[#ff75d1] mr-3 mt-0.5 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm md:text-base text-white/90 leading-relaxed">
<strong className="text-white font-semibold">
                      EVIDENCE-BASED INSIGHTS
                    </strong>
                    - Access precise, data-driven reflection points for complex
                    cSCC cases
                  </span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 text-[#ff75d1] mr-3 mt-0.5 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm md:text-base text-white/90 leading-relaxed">
<strong className="text-white font-semibold">
                      DYNAMIC LEARNING ENGAGEMENT
                    </strong>
                    - Interact with content that adapts to your specific
                    clinical questions
                  </span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 text-[#ff75d1] mr-3 mt-0.5 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm md:text-base text-white/90 leading-relaxed">
<strong className="text-white font-semibold">
                      CONTINUOUS KNOWLEDGE INTEGRATION
                    </strong>
                    - Seamlessly incorporate the latest cSCC developments into
                    your practice
                  </span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 text-[#ff75d1] mr-3 mt-0.5 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm md:text-base text-white/90 leading-relaxed">
<strong className="text-white font-semibold">
                      ENHANCED RISK ASSESSMENT
                    </strong>
                    - Strengthen your ability to identify and manage high-risk
                    cSCC cases
                  </span>
</li>
</ul>
<div className="flex flex-wrap gap-4 justify-center md:justify-start">
<button @click="showPopup = false" className="px-6 py-2.5 bg-white/20 text-white font-medium rounded-full hover:bg-white/30 transition-colors text-sm text-center border border-white/50 backdrop-blur-md shadow-lg">
                  Start CME Activity
                </button>
<button @click="showPopup = false" className="px-6 py-2.5 bg-[#c58cb9] text-white font-medium rounded-full hover:bg-[#a6749b] transition-colors text-sm text-center border border-transparent shadow-lg">
                  Experience Ruby
                </button>
</div>
</div>
</div>
<p className="text-sm font-semibold text-white text-center tracking-wide uppercase mt-2">
            AVAILABLE 24/7 ON THE CATALYST &amp; ENCOMPASS COMMUNITY OF CARE
            PLATFORMS
          </p>
</div>
</div>
</div>

    </>
  );
}
