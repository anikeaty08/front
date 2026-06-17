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
      

<header className="py-8 flex justify-center px-6">
<img alt="Vela Dental" className="h-8 md:h-10 w-auto opacity-90" src="https://veladental.com/wp-content/uploads/2024/02/Vela-Dental-Logo-White-e1711061492345-2048x471.png"/>
</header>

<section className="max-w-4xl mx-auto px-6 pt-12 pb-16 text-center">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-6 text-balance">
            You Don't Have to Hide Your Smile Anymore.
        </h1>
<p className="text-lg md:text-xl text-white/80 font-normal mb-10 max-w-2xl mx-auto leading-relaxed">
            Dr. Benjamin Vela has helped hundreds of Corpus Christi patients get a full, permanent smile. Sometimes in a single day. See if you qualify.
        </p>
<div className="flex flex-col items-center gap-4">
<a className="inline-flex items-center justify-center bg-[#0D5AB1] hover:bg-blue-600 transition-colors text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg shadow-blue-900/20 w-full sm:w-auto" href="#">
                Click Here to Book Your Consultation
                <iconify-icon className="ml-2 text-xl" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<p className="text-xs md:text-sm text-white/50 font-light italic">
                No obligation. Free consultation. Corpus Christi's most trusted implant specialist.
            </p>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 mb-24">
<div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
<video className="w-full h-full object-cover" controls="" poster="https://veladental.com/wp-content/uploads/2024/04/21-9_39-AM-683x1024-1.jpeg">
<source src="https://veladental.com/wp-content/uploads/2024/02/TV_JANELLE_V2_1.mp4" type="video/mp4"/>
                [Watch: Janelle's Story — How She Got Her Smile Back in One Visit]
            </video>
</div>
<p className="mt-6 text-center text-sm text-white/60 font-medium tracking-wide">
            This is a real patient. Her words, her story. Yours could be next.
        </p>
</section>

<section className="w-full bg-[#0D5AB1]/10 border-y border-white/5 py-4 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-[0.65rem] md:text-xs font-semibold uppercase tracking-widest text-blue-200/80">
<span>18+ Years Serving South Texas</span>
<span className="hidden md:block opacity-30">|</span>
<span>625 Google Reviews</span>
<span className="hidden md:block opacity-30">|</span>
<span>Fellowship in Oral Implantology</span>
<span className="hidden md:block opacity-30">|</span>
<span>All-on-4 Specialist</span>
<span className="hidden md:block opacity-30">|</span>
<span>Full In-House Care, No Referrals</span>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-24 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">
            Here's What a New Smile Actually Feels Like.
        </h2>
<div className="space-y-6 text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
<p>You eat what you want again.</p>
<p>You stop covering your mouth when you laugh.</p>
<p>You walk into a room and feel like yourself.</p>
<p className="pt-4">Dr. Vela has been doing this for over 18 years right here in Corpus Christi.</p>
<p>He does everything in-house. No referrals. No runaround.</p>
<p className="font-medium text-white">Just a clear plan and a team that treats you like family.</p>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="rounded-2xl overflow-hidden shadow-2xl">
<img alt="Dr. Benjamin Vela" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" src="https://veladental.com/wp-content/uploads/2024/04/21-9_39-AM-683x1024-1.jpeg"/>
</div>
<div className="space-y-6">
<div>
<h3 className="text-3xl font-semibold tracking-tight mb-1">Dr. Benjamin Vela, DDS</h3>
<p className="text-[#0D5AB1] font-medium tracking-wide">Lead Implant Specialist</p>
</div>
<ul className="space-y-4 text-white/70">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#0D5AB1] text-xl mt-1" icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>
<span>Born and raised in Corpus Christi.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#0D5AB1] text-xl mt-1" icon="solar:medal-star-linear" strokeWidth="1.5"></iconify-icon>
<span>Fellowship trained in oral implantology.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#0D5AB1] text-xl mt-1" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<span>AGD Texas New Dentist of the Year.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#0D5AB1] text-xl mt-1" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
<span>2014 HealthCare Heroes recipient.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#0D5AB1] text-xl mt-1" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
<span>Over 18 years helping South Texas patients get their smiles back.</span>
</li>
</ul>
<p className="text-white/80 leading-relaxed italic pt-4">
                    "He went to school here. He raised his family here. And he built this practice to serve the people he grew up with."
                </p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 bg-white/[0.02] border-y border-white/5">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-16">Real Patients. Real Words.</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors">
<iconify-icon className="text-2xl text-[#0D5AB1] mb-4 opacity-50" icon="solar:quote-bold-linear"></iconify-icon>
<p className="text-base text-white/80 mb-6 italic leading-relaxed">
                    "So glad that I finally found someone who would provide a long term solution."
                </p>
<p className="text-sm font-semibold tracking-wide">Jerry Williams</p>
<p className="text-xs text-white/40 uppercase tracking-widest mt-1">Corpus Christi</p>
</div>

<div className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors">
<iconify-icon className="text-2xl text-[#0D5AB1] mb-4 opacity-50" icon="solar:quote-bold-linear"></iconify-icon>
<p className="text-base text-white/80 mb-6 italic leading-relaxed">
                    "He knew how to solve my problem and did it so professionally and with so much compassion. He is by far the best in his profession."
                </p>
<p className="text-sm font-semibold tracking-wide">Rosa Flores</p>
<p className="text-xs text-white/40 uppercase tracking-widest mt-1">Patient</p>
</div>

<div className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors">
<iconify-icon className="text-2xl text-[#0D5AB1] mb-4 opacity-50" icon="solar:quote-bold-linear"></iconify-icon>
<p className="text-base text-white/80 mb-6 italic leading-relaxed">
                    "They treated me like family as soon as I walked in, and even as I walked out."
                </p>
<p className="text-sm font-semibold tracking-wide">Abel Ayala</p>
<p className="text-xs text-white/40 uppercase tracking-widest mt-1">Patient</p>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-32 text-center">
<h2 className="text-4xl font-semibold tracking-tight mb-4">Ready to See If You Qualify?</h2>
<p className="text-lg text-white/60 mb-12">
            The consultation is free. The process is simple. And the results speak for themselves.
        </p>
<div className="flex flex-col items-center gap-8">
<a className="inline-flex items-center justify-center bg-[#0D5AB1] hover:bg-blue-600 transition-colors text-white text-lg font-semibold px-10 py-5 rounded-full shadow-xl shadow-blue-900/30 w-full sm:w-auto" href="#">
                Click Here to Book Your Consultation
            </a>
<div className="space-y-1">
<p className="text-sm font-medium tracking-wide">Vela Dental Cosmetic and Implant Center</p>
<p className="text-xs text-white/50">4822 Holly Rd, Corpus Christi, TX 78411</p>
<p className="text-xs text-[#0D5AB1] font-semibold mt-2">(361) 254-6657</p>
</div>
</div>
</section>

<footer className="py-16 border-t border-white/5 bg-[#011424]">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
<img alt="Vela Dental" className="h-6 w-auto opacity-50 mb-6" src="https://veladental.com/wp-content/uploads/2024/02/Vela-Dental-Logo-White-e1711061492345-2048x471.png"/>
<p className="text-[0.65rem] md:text-xs text-white/30 uppercase tracking-[0.2em]">
                © 2025 Vela Dental Cosmetic and Implant Center. All rights reserved.
            </p>
</div>
</footer>

    </>
  );
}
