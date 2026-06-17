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
      

<header className="py-8 flex justify-center items-center">
<img alt="Logo" className="h-20 w-auto" src="https://static.wixstatic.com/media/4072ba_ec589986de5d4390a43551e521ee05ae~mv2.png/v1/crop/x_0,y_6,w_500,h_489/fill/w_158,h_154,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo.png"/>
</header>

<section className="max-w-4xl mx-auto px-6 py-12 text-center lg:py-20">
<h1 className="text-[#0d5c63] text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
            Still Dealing With Pain, Fatigue, or Health Issues No One Can Explain?
        </h1>
<p className="text-slate-600 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Dr. Brian Jones has helped hundreds of patients in the Lima area find real answers. Not just a pill. Not just another referral. Root cause care that actually works.
        </p>
<a className="inline-flex items-center justify-center bg-[#1b4332] text-white font-medium py-4 px-8 rounded-full transition-transform hover:scale-105 duration-200 shadow-sm text-base md:text-lg" href="#">
            Click Here to Book Your Consultation
        </a>
</section>

<section className="max-w-5xl mx-auto px-6 pb-20">
<div className="flex flex-col items-center">
<span className="text-[#0d5c63] font-semibold uppercase tracking-widest text-sm mb-4">Watch This First</span>
<div className="w-full aspect-video bg-slate-900 rounded-2xl shadow-2xl overflow-hidden relative group cursor-pointer flex items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
<div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-white text-4xl ml-1" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<img alt="Video Cover" className="absolute inset-0 w-full h-full object-cover -z-10 opacity-50" src="https://static.wixstatic.com/media/4072ba_ced6f01b5e054002abe6e2b505194b97~mv2.jpg/v1/fill/w_1200,h_675,al_c,q_85/eugene.jpg"/>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center justify-center bg-[#1b4332] text-white font-medium py-4 px-8 rounded-full transition-transform hover:scale-105 duration-200 shadow-sm text-base md:text-lg" href="#">
                    Click Here to Book Your Consultation
                </a>
</div>
</div>
</section>

<section className="bg-white/50 py-20 border-y border-slate-100">
<div className="max-w-6xl mx-auto px-6 text-center">
<h2 className="text-[#0d5c63] text-2xl md:text-3xl font-semibold tracking-tight mb-12">Real People. Real Results.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

<div className="bg-[#fdfcf9] p-8 border-l-4 border-[#1b4332] shadow-sm rounded-r-lg flex flex-col justify-between">
<p className="text-slate-700 italic leading-relaxed text-sm md:text-base">"He has helped me tremendously. He never fails to be a blessing. So if you have an illness or if you are healthy and you need to maintain your body, I believe Dr. Jones is the one that could help you the best."</p>
<span className="mt-6 block font-medium uppercase tracking-tighter text-xs text-slate-500">— Mary S.</span>
</div>

<div className="bg-[#fdfcf9] p-8 border-l-4 border-[#1b4332] shadow-sm rounded-r-lg flex flex-col justify-between">
<p className="text-slate-700 italic leading-relaxed text-sm md:text-base">"What a difference and increase in my quality of life, all without medications. Caring, compassionate and extremely knowledgeable."</p>
<span className="mt-6 block font-medium uppercase tracking-tighter text-xs text-slate-500">— Christine B.</span>
</div>

<div className="bg-[#fdfcf9] p-8 border-l-4 border-[#1b4332] shadow-sm rounded-r-lg flex flex-col justify-between">
<p className="text-slate-700 italic leading-relaxed text-sm md:text-base">"Dr. Brian is kind and compassionate. He always takes his time to listen to what health issues you are having. Staff is super kind. They always have a smile on their faces."</p>
<span className="mt-6 block font-medium uppercase tracking-tighter text-xs text-slate-500">— Diane H.</span>
</div>
</div>
</div>
</section>

<section className="py-20 max-w-4xl mx-auto px-6 text-center">
<h2 className="text-[#0d5c63] text-2xl md:text-3xl font-semibold tracking-tight mb-12">Sound Familiar?</h2>
<div className="space-y-8 mb-12">
<p className="text-[#0d5c63] text-lg md:text-xl font-medium opacity-90">You've been thrown from doctor to doctor with no real answers.</p>
<p className="text-[#0d5c63] text-lg md:text-xl font-medium opacity-90">You're dealing with chronic pain that won't go away.</p>
<p className="text-[#0d5c63] text-lg md:text-xl font-medium opacity-90">Your energy is low and you don't know why.</p>
<p className="text-[#0d5c63] text-lg md:text-xl font-medium opacity-90">Your digestion is off and it's affecting your life.</p>
<p className="text-[#0d5c63] text-lg md:text-xl font-medium opacity-90">You feel like your healthcare provider isn't really listening.</p>
<p className="text-[#0d5c63] text-lg md:text-xl font-medium opacity-90">You're wondering if healing is even possible.</p>
</div>
<p className="text-slate-500 text-base md:text-lg">You're not alone. And there is another way.</p>
</section>

<section className="max-w-6xl mx-auto px-6 py-20">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1">
<img alt="Dr. Brian Jones" className="w-full rounded-2xl shadow-xl h-auto grayscale-[20%]" src="https://static.wixstatic.com/media/4072ba_ced6f01b5e054002abe6e2b505194b97~mv2.jpg/v1/fill/w_253,h_371,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/eugene.jpg"/>
</div>
<div className="order-1 md:order-2 space-y-6">
<p className="text-slate-700 leading-relaxed text-base md:text-lg">
                    Dr. Brian Jones has been helping patients in the Lima, Ohio area since 2001.
                </p>
<p className="text-slate-700 leading-relaxed text-base md:text-lg">
                    He doesn't just treat the symptom. He finds out why it's there.
                </p>
<p className="text-slate-700 leading-relaxed text-base md:text-lg">
                    His practice combines chiropractic care with functional medicine. That means advanced lab testing, customized supplement plans, and treatment built around your specific body.
                </p>
<p className="text-slate-700 leading-relaxed text-base md:text-lg">
                    His son Dr. Elisha and daughter-in-law Dr. Kaitlin practice alongside him. This is a family practice in every sense.
                </p>
<p className="text-[#0d5c63] font-medium text-base md:text-lg">
                    250 plus five-star reviews. 40 plus years of combined experience. And a team that genuinely cares.
                </p>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-12 border-t border-slate-100">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="text-center p-6 flex flex-col items-center">
<iconify-icon className="text-[#1b4332] text-3xl mb-3" icon="solar:star-outline" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-[#1b4332] font-semibold text-lg tracking-tight">250+ Five-Star Reviews</h3>
</div>
<div className="text-center p-6 flex flex-col items-center border-y md:border-y-0 md:border-x border-slate-100">
<iconify-icon className="text-[#1b4332] text-3xl mb-3" icon="solar:calendar-minimalistic-outline" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-[#1b4332] font-semibold text-lg tracking-tight">40+ Years Experience</h3>
</div>
<div className="text-center p-6 flex flex-col items-center">
<iconify-icon className="text-[#1b4332] text-3xl mb-3" icon="solar:map-point-outline" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-[#1b4332] font-semibold text-lg tracking-tight">Serving Lima Since 2001</h3>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-20">
<div className="bg-[#f7f8f4] border border-slate-200/50 rounded-3xl p-10 md:p-16 text-center">
<h2 className="text-[#0d5c63] text-2xl md:text-4xl font-semibold tracking-tight mb-6">
                Ready to Find Out What's Really Going On?
            </h2>
<p className="text-slate-600 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Your first consultation is a conversation. Dr. Brian and the team will listen. They will run the right tests. And they will give you a real plan. 
                <span className="block mt-4 font-medium text-slate-800">No guessing. No runaround.</span>
</p>
<a className="inline-flex items-center justify-center bg-[#1b4332] text-white font-medium py-4 px-10 rounded-full transition-all hover:shadow-lg hover:-translate-y-1 duration-200 text-base md:text-lg mb-8" href="#">
                Click Here to Book Your Consultation
            </a>
<p className="text-slate-400 text-xs mt-4">
                Jones Chiropractic and Functional Medicine | 316 East Main St, Elida, OH 45807 | 419-331-2040
            </p>
</div>
</section>

<footer className="py-12 flex flex-col items-center border-t border-slate-100">
<img alt="Logo" className="h-12 w-auto grayscale opacity-50 mb-6" src="https://static.wixstatic.com/media/4072ba_ec589986de5d4390a43551e521ee05ae~mv2.png/v1/crop/x_0,y_6,w_500,h_489/fill/w_158,h_154,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo.png"/>
<div className="text-slate-400 text-xs tracking-wide text-center space-y-1">
<p>419-331-2040</p>
<p>316 East Main St, Elida, OH 45807</p>
</div>
</footer>

    </>
  );
}
