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
      

<section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
<div className="mb-16">
<img alt="Premier Wellness" className="h-16 w-auto mx-auto" src="https://static.wixstatic.com/media/a84e9c_bf475154191d4fa883cc10fcca4b8bb1~mv2.png/v1/crop/x_62,y_0,w_643,h_198/fill/w_258,h_79,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Premier-Wellness%20LOGO.png"/>
</div>
<div className="max-w-2xl mx-auto space-y-8">
<h1 className="text-3xl md:text-5xl font-semibold text-zinc-900 tracking-tight leading-tight">
                You've Tried Everything. Your Body Still Isn't Right.
            </h1>
<p className="text-base md:text-lg text-zinc-500 font-normal leading-relaxed">
                Dr. Kory Branham has helped patients in Salt Lake City find real answers for over 40 years. If other doctors couldn't figure it out, this is your next step.
            </p>
<div className="pt-4">
<a className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-medium text-base md:text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-purple-200 active:scale-95" href="#">
                    Click Here to Book Your Free Consultation
                </a>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-12">
<div className="relative aspect-video bg-zinc-900 rounded-2xl flex items-center justify-center cursor-pointer group overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-zinc-800 flex items-center justify-center">
<div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-white text-4xl" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<p className="mt-6 text-zinc-400 text-sm italic text-center">
            Watch this short video to see how Premier Wellness finds and fixes what other doctors miss.
        </p>
</section>

<section className="py-16 text-center px-6">
<div className="space-y-4">
<a className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-medium text-base md:text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-purple-200" href="#">
                Click Here to Book Your Free Consultation
            </a>
<p className="text-xs md:text-sm text-zinc-400">
                No pressure. No obligation. Just answers.
            </p>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 py-24 text-center">
<h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 tracking-tight mb-12">Sound Like You?</h2>
<div className="space-y-8 text-base md:text-lg text-zinc-600 leading-relaxed">
<p>You've been told your labs look fine.</p>
<p>But you still feel exhausted, foggy, or off.</p>
<p>You've tried different doctors. Different supplements. Different diets.</p>
<p>And nothing has really stuck.</p>
<p>That's not bad luck. That's a root cause that hasn't been found yet.</p>
<p className="text-zinc-900 font-medium">At Premier Wellness, that's exactly what we look for.</p>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-24 text-center">
<h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 tracking-tight mb-12">
            Why Patients Drive Across Salt Lake City to See Dr. Branham
        </h2>
<div className="mb-12">
<img alt="Dr. Branham" className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-white shadow-xl" src="https://static.wixstatic.com/media/a84e9c_33e0bee107f34dfda1f615b03da5d415~mv2.jpeg/v1/crop/x_245,y_771,w_3701,h_4939/fill/w_301,h_407,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Dr_%20B%20Headshot.jpeg"/>
</div>
<div className="space-y-6 text-base md:text-lg text-zinc-600 leading-relaxed">
<p>Dr. Branham has been in practice for over 40 years.</p>
<p>He trained directly under Dr. George Goodheart, the man who founded Applied Kinesiology.</p>
<p>Nobody else in Salt Lake City can say that.</p>
<p>He uses a combination of structural care, Wholistic Methylation, functional nutrition, and emotional release therapy to find what other practitioners miss.</p>
<p className="font-medium text-zinc-900">He doesn't guess. He tests.</p>
<p>And then he builds a plan that's built for your body specifically.</p>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 py-24">
<h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 tracking-tight text-center mb-16">
            What Patients Are Saying
        </h2>
<div className="space-y-8">

<div className="bg-white p-8 rounded-3xl border border-purple-50 shadow-sm text-center">
<p className="italic text-zinc-700 text-sm md:text-base leading-relaxed mb-4">
                    "He helped me where other doctors haven't been able to. Instead of just treating symptoms, he finds and treats the problem."
                </p>
<p className="text-zinc-400 text-xs">— Shanda, Premier Wellness Patient</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-purple-50 shadow-sm text-center">
<p className="italic text-zinc-700 text-sm md:text-base leading-relaxed mb-4">
                    "He healed my life-long lower back issues in 5 sessions when other docs wanted to do surgery. That was 10 years ago and the problems have not returned."
                </p>
<p className="text-zinc-400 text-xs">— Patti Rokus, Premier Wellness Patient</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-purple-50 shadow-sm text-center">
<p className="italic text-zinc-700 text-sm md:text-base leading-relaxed mb-4">
                    "I've seen Dr. Branham for over 25 years and consider him my primary care physician. I always leave his office with a sense of well being and understanding of what is going on in my mind and body."
                </p>
<p className="text-zinc-400 text-xs">— Susie Martin, Premier Wellness Patient</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-purple-50 shadow-sm text-center">
<p className="italic text-zinc-700 text-sm md:text-base leading-relaxed mb-4">
                    "Doctor Branham is the Best. He helped me to start feeling better after many years of suffering with some serious illnesses."
                </p>
<p className="text-zinc-400 text-xs">— Rosi Blanco, Premier Wellness Patient</p>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 py-24 text-center">
<h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 tracking-tight mb-12">
            Here's What to Expect
        </h2>
<div className="space-y-8 text-base md:text-lg text-zinc-600 leading-relaxed">
<p>You book a consultation with Dr. Branham's team.</p>
<p>You come in and talk about what's been going on.</p>
<p>Dr. Branham does a full evaluation. Structural, nutritional, and biochemical.</p>
<p>He tells you exactly what he finds and what a plan looks like for you.</p>
<p className="font-medium text-zinc-900">No pressure. No upsell. Just clarity.</p>
</div>
</section>

<section className="bg-purple-50 px-6 py-24 text-center">
<div className="max-w-2xl mx-auto space-y-8">
<h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 tracking-tight leading-tight">
                Ready to Finally Get Answers?
            </h2>
<p className="text-sm md:text-base text-zinc-600">
                Spots are limited. Dr. Branham sees a small number of new patients each month.
            </p>
<div className="pt-4">
<a className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-medium text-base md:text-lg px-10 py-5 rounded-full transition-all duration-300 shadow-xl shadow-purple-200" href="#">
                    Click Here to Book Your Free Consultation
                </a>
</div>
<div className="pt-8 space-y-2 text-xs md:text-sm text-zinc-400">
<p>Premier Wellness, 999 E Murray Holladay Rd, Suite 103, Salt Lake City, UT 84117</p>
<p>(801) 268-8090</p>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-100 py-16 px-6 text-center">
<div className="space-y-6">
<img alt="Premier Wellness" className="h-10 w-auto mx-auto opacity-80 grayscale brightness-0" src="https://static.wixstatic.com/media/a84e9c_bf475154191d4fa883cc10fcca4b8bb1~mv2.png/v1/crop/x_62,y_0,w_643,h_198/fill/w_258,h_79,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Premier-Wellness%20LOGO.png"/>
<div className="space-y-2 text-xs text-zinc-400 font-medium tracking-wide">
<p>premierwellnessutah.com</p>
<p>(801) 268-8090</p>
<p>999 E Murray Holladay Rd, Suite 103, Salt Lake City, UT 84117</p>
</div>
</div>
</footer>

    </>
  );
}
