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
      

<header className="py-6 px-6 md:px-12 max-w-7xl mx-auto flex items-center justify-between">
<a className="flex items-center" href="#">
<img alt="Silicon Valley Smile Solutions" className="h-12 md:h-16 w-auto" src="https://svsmilesolutions.com/storage/2017/12/logo.png"/>
</a>
</header>

<section className="bg-[#425664] text-white py-24 md:py-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-8">
                You Could Have a Full Set of Beautiful Teeth. In One Day.
            </h1>
<div className="space-y-4 mb-12">
<p className="text-xl md:text-2xl font-light opacity-90">
                    Dr. Amir HagShenas has been doing this in San Jose for nearly 30 years.
                </p>
<p className="text-xl md:text-2xl font-light opacity-90">
                    He places the implants. He builds the smile. All in one office.
                </p>
<p className="text-xl md:text-2xl font-semibold">
                    No referrals. No runaround. Just results.
                </p>
</div>
<div className="flex flex-col items-center">
<a className="bg-[#EF761E] hover:bg-[#d86a1a] transition-colors text-white text-lg md:text-xl font-semibold py-5 px-10 rounded-full shadow-lg mb-4" href="#">
                    Click Here to Book Your Free Consultation
                </a>
<p className="text-sm md:text-base font-light opacity-80">
                    Takes less than 60 seconds. No pressure.
                </p>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-white">
<div className="max-w-5xl mx-auto text-center">
<span className="inline-block text-xs font-semibold tracking-widest uppercase mb-8 opacity-70">
                WATCH: WHAT OUR PATIENTS SAY
            </span>
<div className="aspect-video w-full bg-slate-50 border-2 border-dashed border-[#EF761E] rounded-2xl flex items-center justify-center mb-6">
<div className="text-center">
<iconify-icon className="text-6xl text-[#EF761E] mb-2" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-lg font-medium tracking-tight text-[#425664] uppercase">[VSL VIDEO GOES HERE]</p>
</div>
</div>
<p className="text-gray-500 text-sm md:text-base italic">
                Real patients. Real results. Right here in San Jose.
            </p>
</div>
</section>

<section className="bg-gray-50 py-24 md:py-32 px-6">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16">
                People Just Like You Have Done This
            </h2>
<div className="grid md:grid-cols-2 gap-12">
<div className="space-y-4">
<div className="aspect-video rounded-2xl overflow-hidden shadow-sm bg-black">
<video className="w-full h-full object-cover" controls="">
<source src="https://svsmilesolutions.com/videos/file_aa7a96811c_svsmilesolutions.mp4" type="video/mp4"/>
</video>
</div>
<p className="text-base md:text-lg text-center font-light leading-relaxed">
                        A patient shares her dental implant experience with Dr. HagShenas.
                    </p>
</div>
<div className="space-y-4">
<div className="aspect-video rounded-2xl overflow-hidden shadow-sm bg-black">
<video className="w-full h-full object-cover" controls="">
<source src="https://svsmilesolutions.com/videos/file_ee42f95783_svsmilesolutions.mp4" type="video/mp4"/>
</video>
</div>
<p className="text-base md:text-lg text-center font-light leading-relaxed">
                        Watch how sedation dentistry changed everything for this patient.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-gray-100">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
<div className="space-y-2">
<div className="text-4xl md:text-5xl font-semibold text-[#EF761E] tracking-tight">Nearly 30 Years</div>
<div className="text-lg font-medium opacity-80 uppercase tracking-wide">of Implant Experience</div>
</div>
<div className="space-y-2">
<div className="text-4xl md:text-5xl font-semibold text-[#EF761E] tracking-tight">5.0 Stars</div>
<div className="text-lg font-medium opacity-80 uppercase tracking-wide">203 Google Reviews</div>
</div>
<div className="space-y-2">
<div className="text-4xl md:text-5xl font-semibold text-[#EF761E] tracking-tight">All-In-One Office</div>
<div className="text-lg font-medium opacity-80 uppercase tracking-wide">Surgery to Final Smile</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="relative">
<img alt="Dr. Amir HagShenas" className="rounded-2xl shadow-xl w-full" src="https://svsmilesolutions.com/storage/2025/03/dr_hagshenas_027bfb4183_c8cd53e782.webp"/>
</div>
<div className="space-y-6">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Dr. Amir HagShenas</h2>
<div className="space-y-4 text-lg md:text-xl font-light leading-relaxed">
<p>Dr. HagShenas does something most dentists can't.</p>
<p>He places the implants surgically. And he builds the final smile. Both. In his office.</p>
<p>That means no extra trips. No waiting on referrals. No starting over with someone new.</p>
<p>He has been doing this for nearly 30 years in Silicon Valley.</p>
<p>And his patients keep coming back. Some for over two decades.</p>
</div>
<p className="text-sm md:text-base italic text-gray-500 pt-4">
                    Fellowship, Academy of General Dentistry. Graduate, Foundation of Advanced Continuing Education.
                </p>
</div>
</div>
</section>

<section className="bg-[#425664] py-24 md:py-32 px-6">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white text-center mb-16">
                Here Is What People Are Saying
            </h2>
<div className="grid md:grid-cols-3 gap-8 mb-16">

<div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg relative">
<iconify-icon className="text-4xl text-[#EF761E] opacity-20 absolute top-6 right-8" icon="solar:double-quotes-l-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-lg leading-relaxed text-[#425664] mb-6 font-light">
                        "I interviewed 2 other dental implant places before choosing Dr. HagShenas. I am so glad I did. They made sure I was comfortable before and during the surgery."
                    </p>
<div className="font-semibold text-[#425664]">— Michael S.</div>
</div>

<div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg relative">
<iconify-icon className="text-4xl text-[#EF761E] opacity-20 absolute top-6 right-8" icon="solar:double-quotes-l-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-lg leading-relaxed text-[#425664] mb-6 font-light">
                        "I've been coming here for almost 29 years, and my entire family trusts them as well. Their care and professionalism are truly unmatched."
                    </p>
<div className="font-semibold text-[#425664]">— Sh M.</div>
</div>

<div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg relative">
<iconify-icon className="text-4xl text-[#EF761E] opacity-20 absolute top-6 right-8" icon="solar:double-quotes-l-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-lg leading-relaxed text-[#425664] mb-6 font-light">
                        "I would have NO one else touch my teeth. I feel so comfortable with Dr. HagShenas. 5 stars plus."
                    </p>
<div className="font-semibold text-[#425664]">— Debbie P.</div>
</div>
</div>
<div className="text-center text-white space-y-2">
<div className="flex justify-center gap-1 text-[#EF761E]">
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base font-light opacity-90">5.0 Stars on Google. 203 Reviews.</p>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-20">
                Here Is How It Works
            </h2>
<div className="grid md:grid-cols-3 gap-16 md:gap-8">
<div className="text-center space-y-4">
<div className="text-5xl font-light text-[#EF761E] mb-2">01</div>
<h3 className="text-xl font-semibold">Book Your Free Consultation</h3>
<p className="text-lg font-light leading-relaxed opacity-80">
                        We go over your goals and what is possible for your smile.
                    </p>
</div>
<div className="text-center space-y-4">
<div className="text-5xl font-light text-[#EF761E] mb-2">02</div>
<h3 className="text-xl font-semibold">Get Your Custom Plan</h3>
<p className="text-lg font-light leading-relaxed opacity-80">
                        Dr. HagShenas maps out your full treatment in detail. No surprises.
                    </p>
</div>
<div className="text-center space-y-4">
<div className="text-5xl font-light text-[#EF761E] mb-2">03</div>
<h3 className="text-xl font-semibold">Walk Out With Your Smile</h3>
<p className="text-lg font-light leading-relaxed opacity-80">
                        Most patients leave with a full set of teeth the same day.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-[#EF761E] text-white py-24 px-6 text-center">
<div className="max-w-4xl mx-auto">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                Ready to Get Your Smile Back?
            </h2>
<p className="text-xl md:text-2xl font-light mb-12 opacity-95">
                Book a free consultation with Dr. HagShenas today.<br/>
                It takes less than 60 seconds to get started.
            </p>
<div className="flex flex-col items-center">
<a className="bg-white text-[#425664] hover:bg-gray-100 transition-colors text-lg md:text-xl font-semibold py-5 px-12 rounded-full shadow-lg mb-10" href="#">
                    Click Here to Book Your Free Consultation
                </a>
<div className="space-y-1 text-sm md:text-base opacity-90 font-light">
<p className="font-medium">Silicon Valley Smile Solutions</p>
<p>3880 S. Bascom Ave., Suite 213, San Jose, CA 95124</p>
<p>(408) 377-5134</p>
</div>
</div>
</div>
</section>

<footer className="bg-[#425664] text-white py-16 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
<div className="space-y-6">
<img alt="Silicon Valley Smile Solutions" className="h-10 w-auto brightness-0 invert" src="https://svsmilesolutions.com/storage/2017/12/logo.png"/>
<p className="text-sm opacity-60">© Silicon Valley Smile Solutions. San Jose, CA.</p>
</div>
<nav className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm font-medium tracking-wide">
<a className="hover:text-[#EF761E] transition-colors uppercase" href="#">About Dr. HagShenas</a>
<a className="hover:text-[#EF761E] transition-colors uppercase" href="#">Patient Testimonials</a>
<a className="hover:text-[#EF761E] transition-colors uppercase" href="#">Contact</a>
</nav>
</div>
</footer>

    </>
  );
}
