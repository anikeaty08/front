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



        lucide.createIcons();
    
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
      

<section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Infrared Sauna" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
</div>
<div className="relative z-10 container mx-auto px-6 text-center text-white max-w-4xl mt-12">
<span className="inline-block py-1 px-3 rounded-full border border-[#ccff00]/50 bg-[#ccff00]/10 text-[#ccff00] text-sm font-medium tracking-wide mb-6 backdrop-blur-sm">
                Amazing Health Benefits
            </span>
<h1 className="font-josefin text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 text-white drop-shadow-lg">
                The Best Infrared Sauna <br className="hidden md:block"/> Session Deals This Week!
            </h1>
<div className="flex flex-col items-center justify-center space-y-8">
<p className="text-xl md:text-2xl font-light tracking-wide text-gray-200">
                    HURRY! OFFER ENDS NOV 28, 2022
                </p>
<button className="group relative px-8 py-4 bg-[#10aeec] text-white text-lg font-medium rounded-full overflow-hidden shadow-[0_0_20px_rgba(16,174,236,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(16,174,236,0.7)]">
<span className="relative z-10 flex items-center gap-2">
                        SIGN UP NOW
                        <i className="w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</span>
<div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10"></div>
</button>
</div>
</div>
</section>

<section className="relative z-20 -mt-24 pb-24 px-6">
<div className="container mx-auto max-w-6xl">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col items-center text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
<div className="bg-gray-50 p-4 rounded-2xl mb-6 text-[#10aeec]">
<i className="w-10 h-10" data-lucide="waves"></i>
</div>
<h3 className="font-josefin text-2xl font-semibold text-gray-900 tracking-tight mb-2">1 Session</h3>
<p className="text-gray-500 text-base font-light mb-6">1 Time</p>
<div className="mb-8 flex items-baseline gap-3">
<span className="text-gray-400 line-through text-xl decoration-red-500 decoration-1">$50</span>
<span className="text-5xl font-josefin font-semibold text-[#10aeec] tracking-tight">$30</span>
</div>
<button className="mt-auto w-full py-3 px-6 rounded-xl border border-gray-200 text-gray-700 font-medium hover:border-[#10aeec] hover:text-[#10aeec] hover:bg-[#10aeec]/5 transition-colors">
                        SIGN UP NOW
                    </button>
</div>

<div className="relative bg-white rounded-3xl p-8 shadow-2xl shadow-[#10aeec]/10 border border-[#10aeec]/20 flex flex-col items-center text-center transform transition duration-300 hover:-translate-y-2 z-10 md:scale-105">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ccff00] text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        Best Value
                    </div>
<div className="bg-[#10aeec]/10 p-4 rounded-2xl mb-6 text-[#10aeec]">
<i className="w-10 h-10" data-lucide="crown"></i>
</div>
<h3 className="font-josefin text-2xl font-semibold text-gray-900 tracking-tight mb-2">Unlimited</h3>
<p className="text-gray-500 text-base font-light mb-6">Members Only (Monthly)</p>
<div className="mb-8 flex items-baseline gap-3">
<span className="text-gray-400 line-through text-xl decoration-red-500 decoration-1">$139</span>
<span className="text-5xl font-josefin font-semibold text-[#10aeec] tracking-tight">$67</span>
</div>
<button className="mt-auto w-full py-3 px-6 rounded-xl bg-[#10aeec] text-white font-medium shadow-lg shadow-[#10aeec]/30 hover:bg-[#0e9bd1] transition-colors">
                        SIGN UP NOW
                    </button>
</div>

<div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col items-center text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
<div className="bg-gray-50 p-4 rounded-2xl mb-6 text-[#10aeec]">
<i className="w-10 h-10" data-lucide="users"></i>
</div>
<h3 className="font-josefin text-2xl font-semibold text-gray-900 tracking-tight mb-2">Unlimited</h3>
<p className="text-gray-500 text-base font-light mb-6">Non-Members (Monthly)</p>
<div className="mb-8 flex items-baseline gap-3">
<span className="text-gray-400 line-through text-xl decoration-red-500 decoration-1">$139</span>
<span className="text-5xl font-josefin font-semibold text-[#10aeec] tracking-tight">$79</span>
</div>
<button className="mt-auto w-full py-3 px-6 rounded-xl border border-gray-200 text-gray-700 font-medium hover:border-[#10aeec] hover:text-[#10aeec] hover:bg-[#10aeec]/5 transition-colors">
                        SIGN UP NOW
                    </button>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="container mx-auto px-6 max-w-6xl">
<div className="text-center mb-16">
<h2 className="font-josefin text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
                    WHAT ARE THE BENEFITS OF <br/><span className="text-[#10aeec]">USING AN INFRARED SAUNA?</span>
</h2>
<div className="h-1 w-24 bg-[#ccff00] mx-auto rounded-full"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

<div className="lg:col-span-4">
<div className="bg-gray-50 p-8 rounded-3xl sticky top-8 border border-gray-100">
<ul className="space-y-4">
<li className="flex items-center gap-3 text-lg font-medium text-gray-800">
<i className="w-6 h-6 text-[#ccff00] fill-gray-900" data-lucide="check-circle-2"></i>
                                Detoxification &amp; Weight Loss
                            </li>
<li className="flex items-center gap-3 text-lg font-medium text-gray-800">
<i className="w-6 h-6 text-[#ccff00] fill-gray-900" data-lucide="check-circle-2"></i>
                                Strengthen the Immune System
                            </li>
<li className="flex items-center gap-3 text-lg font-medium text-gray-800">
<i className="w-6 h-6 text-[#ccff00] fill-gray-900" data-lucide="check-circle-2"></i>
                                Alleviate Chronic Pain
                            </li>
<li className="flex items-center gap-3 text-lg font-medium text-gray-800">
<i className="w-6 h-6 text-[#ccff00] fill-gray-900" data-lucide="check-circle-2"></i>
                                Sore Muscle Relief
                            </li>
<li className="flex items-center gap-3 text-lg font-medium text-gray-800">
<i className="w-6 h-6 text-[#ccff00] fill-gray-900" data-lucide="check-circle-2"></i>
                                Promote Relaxation &amp; Improve Sleep
                            </li>
</ul>
</div>
</div>

<div className="lg:col-span-8 space-y-8">
<div className="prose prose-lg text-gray-600 font-light leading-relaxed max-w-none">
<p>
<strong className="text-gray-900 font-medium">Detoxification:</strong> Sweating is one of the body's natural ways to eliminate toxins. Infrared saunas can induce a deep sweat, which may help remove toxins such as heavy metals, chemicals, and environmental pollutants from the body.
                        </p>
<p>
<strong className="text-gray-900 font-medium">Relaxation and stress relief:</strong> Infrared sauna sessions can promote relaxation and provide a calming effect. The gentle heat and warmth can help reduce stress, improve sleep quality, and promote overall mental well-being.
                        </p>
<p>
<strong className="text-gray-900 font-medium">Improved cardiovascular health:</strong> Using an infrared sauna can have positive effects on cardiovascular function. The heat exposure can increase heart rate and blood circulation, which may help improve cardiovascular health, reduce blood pressure, and enhance the function of blood vessels.
                        </p>
<p>
<strong className="text-gray-900 font-medium">Pain relief and muscle relaxation:</strong> Infrared heat can penetrate deep into the muscles, joints, and tissues, providing relief from muscle aches, stiffness, and tension. It can help relax muscles, reduce inflammation, and alleviate chronic pain conditions such as arthritis, fibromyalgia, and muscle spasms.
                        </p>
<p>
<strong className="text-gray-900 font-medium">Enhanced skin health:</strong> The heat from an infrared sauna can open up pores, leading to a cleansing effect that helps remove impurities and improve skin tone. It may also promote collagen production, leading to improved skin elasticity and a more youthful appearance.
                        </p>
<p>
<strong className="text-gray-900 font-medium">Weight management:</strong> Regular use of an infrared sauna can potentially assist in weight management efforts. The increased heart rate and sweating during a sauna session can help burn calories, improve metabolic function, and support weight loss goals.
                        </p>
<p>
<strong className="text-gray-900 font-medium">Improved immune function:</strong> The heat exposure in an infrared sauna can stimulate the production of white blood cells, which play a vital role in defending the body against infections and illnesses. It may also help boost overall immune function.
                        </p>
<p>
<strong className="text-gray-900 font-medium">Enhanced athletic performance and recovery:</strong> Infrared saunas can aid in post-workout recovery by increasing blood flow, reducing muscle soreness, and promoting the repair of damaged tissues. It may also help improve endurance, promote muscle growth, and enhance athletic performance.
                        </p>
<p>
<strong className="text-gray-900 font-medium">Respiratory benefits:</strong> The heat and steam in an infrared sauna can help open up airways, improve respiratory function, and provide relief from congestion and sinus issues.
                        </p>
<div className="mt-12 p-6 bg-[#10aeec]/5 border-l-4 border-[#10aeec] rounded-r-xl">
<p className="text-base italic text-gray-500 m-0">
                                It's important to note that individual experiences and results may vary, and it's always advisable to consult with a healthcare professional before using an infrared sauna, especially if you have any underlying medical conditions or concerns.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#10aeec] relative overflow-hidden">

<div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ccff00] opacity-10 rounded-full translate-x-1/3 translate-y-1/3 filter blur-3xl"></div>
<div className="container mx-auto px-6 text-center relative z-10">
<h2 className="font-josefin text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                READY TO SIGN UP?
            </h2>
<p className="text-xl text-blue-100 font-light mb-10 max-w-2xl mx-auto">
                Click the following button to sign up for our infrared sauna deals today!
            </p>
<button className="bg-[#ccff00] text-gray-900 text-lg font-semibold py-4 px-10 rounded-full hover:bg-white transition-colors duration-300 shadow-xl shadow-blue-900/20 transform hover:-translate-y-1 flex items-center gap-3 mx-auto">
                Sign Up Now
                <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</section>


    </>
  );
}
