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



        // Loader Logic
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            setTimeout(() => {
                loader.classList.add('loader-hidden');
                // Trigger initial animations
                document.querySelectorAll('.reveal').forEach((el, index) => {
                    if(index < 2) el.classList.add('active');
                });
            }, 1500);
        });

        // Scroll Animation Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Countdown Timer
        const weddingDate = new Date('March 12, 2026 11:00:00').getTime();

        const timer = setInterval(function() {
            const now = new Date().getTime();
            const distance = weddingDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("days").innerText = days < 10 ? "0" + days : days;
            document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
            document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
            document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

            if (distance < 0) {
                clearInterval(timer);
                document.getElementById("days").innerText = "00";
                // Optionally handle post-wedding state
            }
        }, 1000);
    
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
      

<div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FFFBF5] text-rose-800" id="loader">
<div className="text-3xl font-script mb-4">Jai Jinendra</div>
<div className="w-16 h-16 border-t-2 border-b-2 border-rose-600 rounded-full animate-spin"></div>
</div>

<div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-10">

<svg className="absolute -top-10 -left-10 w-64 h-64 text-rose-400 floating" fill="currentColor" viewbox="0 0 200 200">
<path d="M100,20 C120,60 160,80 180,100 C160,120 120,140 100,180 C80,140 40,120 20,100 C40,80 80,60 100,20 Z"></path>
</svg>

<svg className="absolute -bottom-20 -right-20 w-96 h-96 text-orange-300 spin-slow" fill="none" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 100 100">
<circle cx="50" cy="50" r="40"></circle>
<circle cx="50" cy="50" r="30"></circle>
<path d="M50 10 L50 90 M10 50 L90 50 M22 22 L78 78 M22 78 L78 22"></path>
</svg>

<svg className="absolute top-1/3 right-10 w-12 h-12 text-rose-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
<svg className="absolute bottom-1/3 left-10 w-16 h-16 text-yellow-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path></svg>
</div>

<nav className="fixed top-0 left-0 w-full z-40 px-6 py-4 flex justify-between items-center backdrop-blur-sm bg-white/30 border-b border-rose-100/50">
<div className="text-xl tracking-tighter font-eng text-rose-900 font-medium">L | P</div>
<div className="text-xs font-hindi text-stone-600 tracking-wide">शुभ विवाह</div>
</nav>

<main className="relative z-10 w-full max-w-3xl mx-auto px-6 pb-20 pt-24">

<section className="text-center mb-16 space-y-4 reveal">
<div className="inline-block p-2 rounded-full border border-rose-200 bg-white/50 mb-4">
<iconify-icon className="text-rose-600 text-2xl" icon="solar:hands-linear"></iconify-icon>
</div>
<p className="text-rose-800 text-sm md:text-base font-medium leading-relaxed tracking-wide">
                ॥ श्री अवन्तिका पार्श्वनाथाय नमः ।।<br/>
                ॥ मंगलम् भगवान वीरो, मंगलम् गोतम प्रभु । मंगलम् कुन्दकुन्दा ो, जैन धमस्तु मंगलम् ॥<br/>
                ।। मांगलिक बेलामे ।।
            </p>
</section>

<section className="text-center mb-20 relative reveal">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-dashed border-rose-300 rounded-full spin-slow opacity-50 pointer-events-none"></div>
<div className="relative z-10">
<h1 className="text-6xl md:text-8xl text-rose-900 mb-2 font-hindi leading-tight name-glow">अवनी</h1>
<div className="flex items-center justify-center gap-4 my-2">
<span className="h-[1px] w-12 bg-rose-300"></span>
<span className="font-script text-2xl text-stone-500">Sang</span>
<span className="h-[1px] w-12 bg-rose-300"></span>
</div>
<h1 className="text-6xl md:text-8xl text-rose-900 font-hindi leading-tight name-glow">गोतम</h1>
</div>
<p className="mt-8 text-stone-600 font-medium italic">
                स्नेही नवजन, सादर जय जिनेन्द्र । लोड़ा परिवार उत्सुक है, आपके आतिथ्य एवं अभिनन्दन के लिए...
            </p>
</section>

<section className="mb-16 reveal">
<div className="bg-white/40 backdrop-blur-md border border-rose-100 rounded-2xl p-6 shadow-sm">
<div className="flex justify-center gap-6 md:gap-12 text-center font-eng text-rose-900">
<div>
<span className="block text-3xl md:text-4xl font-medium tracking-tight" id="days">00</span>
<span className="text-xs uppercase tracking-widest text-stone-500">Days</span>
</div>
<div>
<span className="block text-3xl md:text-4xl font-medium tracking-tight" id="hours">00</span>
<span className="text-xs uppercase tracking-widest text-stone-500">Hours</span>
</div>
<div>
<span className="block text-3xl md:text-4xl font-medium tracking-tight" id="minutes">00</span>
<span className="text-xs uppercase tracking-widest text-stone-500">Mins</span>
</div>
<div>
<span className="block text-3xl md:text-4xl font-medium tracking-tight" id="seconds">00</span>
<span className="text-xs uppercase tracking-widest text-stone-500">Secs</span>
</div>
</div>
<div className="text-center mt-4 text-sm text-stone-500 tracking-wide">
                    12 March 2026
                </div>
</div>
</section>

<section className="space-y-8 mb-20 relative">
<div className="absolute left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-rose-300 to-transparent"></div>

<div className="relative pl-12 reveal group">
<div className="absolute left-[11px] top-2 w-2.5 h-2.5 bg-rose-500 rounded-full ring-4 ring-rose-100 group-hover:ring-rose-200 transition-all"></div>
<div className="bg-white/60 border border-stone-100 p-5 rounded-xl hover:shadow-md transition-all duration-300">
<div className="flex items-center gap-2 mb-2 text-rose-600">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
<span className="text-xs font-semibold tracking-wider uppercase font-eng">बुधवार, 11 मार्च 2026</span>
</div>
<h3 className="text-xl text-stone-800 mb-1 font-semibold">श्री गणेश पूजन एवं चाक</h3>
<p className="text-stone-500 text-sm mb-4">प्रातः 8.30 बजे</p>
<div className="border-t border-dashed border-rose-200 my-3"></div>
<h3 className="text-xl text-stone-800 mb-1 font-semibold">हल्दी समारोह</h3>
<p className="text-stone-500 text-sm mb-4">प्रातः 11 बजे</p>
<div className="border-t border-dashed border-rose-200 my-3"></div>
<h3 className="text-xl text-stone-800 mb-1 font-semibold">संगीत निशा</h3>
<p className="text-stone-500 text-sm">सायं 7 बजे</p>
</div>
</div>

<div className="relative pl-12 reveal group">
<div className="absolute left-[11px] top-2 w-2.5 h-2.5 bg-rose-500 rounded-full ring-4 ring-rose-100 group-hover:ring-rose-200 transition-all"></div>
<div className="bg-gradient-to-br from-rose-50 to-white border border-rose-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
<div className="flex items-center gap-2 mb-2 text-rose-600">
<iconify-icon icon="solar:calendar-mark-linear"></iconify-icon>
<span className="text-xs font-semibold tracking-wider uppercase font-eng">गुरुवार, 12 मार्च 2026</span>
</div>
<h3 className="text-2xl text-rose-900 mb-1 font-semibold tracking-tight">आशीर्वाद समारोह एवं माधुर्यभोज</h3>
<p className="text-stone-600 text-sm mb-4 flex items-center gap-2">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> समय प्रातः 11 बजे
                    </p>
<div className="bg-white/80 p-3 rounded-lg border border-rose-100 flex items-start gap-3">
<iconify-icon className="text-rose-500 text-lg mt-1" icon="solar:map-point-linear"></iconify-icon>
<div>
<p className="text-stone-800 font-medium text-sm">अमृत गार्डन</p>
<p className="text-stone-500 text-xs">सैलाना रोड़, रतलाम (म.प्र.)</p>
</div>
</div>
</div>
</div>
</section>

<section className="grid md:grid-cols-2 gap-6 mb-16 reveal">

<div className="bg-white/40 p-6 rounded-2xl border border-stone-200 text-center">
<iconify-icon className="text-rose-400 text-2xl mb-3" icon="solar:heart-angle-linear"></iconify-icon>
<h4 className="text-sm uppercase tracking-widest text-stone-500 mb-2 font-eng">Bride</h4>
<div className="mb-4">
<p className="text-xs text-stone-400">सुपात्री</p>
<p className="text-stone-800 font-medium">स्व. श्री ताराचन्द्र जी श्रीमती तीजाबाई लोढा</p>
</div>
<div>
<p className="text-xs text-stone-400">सुपुत्री</p>
<p className="text-rose-900 text-lg font-semibold">प्रफुल्ल-सौ. रानी लोढा</p>
</div>
</div>

<div className="bg-white/40 p-6 rounded-2xl border border-stone-200 text-center">
<iconify-icon className="text-rose-400 text-2xl mb-3" icon="solar:heart-angle-linear"></iconify-icon>
<h4 className="text-sm uppercase tracking-widest text-stone-500 mb-2 font-eng">Groom</h4>
<div className="mb-4">
<p className="text-xs text-stone-400">सुपात्र</p>
<p className="text-stone-800 font-medium">श्री पारसमल जी-अमृतदेवी पावेचा</p>
</div>
<div>
<p className="text-xs text-stone-400">सुपुत्र</p>
<p className="text-rose-900 text-lg font-semibold">भूपेन्द्र जी-सो. प्रीति पावेचा</p>
</div>
</div>
</section>

<section className="space-y-8 mb-20 reveal">

<div className="text-center">
<h3 className="text-rose-800 font-semibold text-lg mb-3 flex items-center justify-center gap-2">
<iconify-icon icon="solar:leaf-linear"></iconify-icon> ननिहाल पक्ष
                </h3>
<p className="text-stone-600 text-sm leading-relaxed">
                    श्रीमान धन्नालाल जी, लक्ष्मांचन्द्र जी, चन्दुलाल जी, कमल जी, राजेन्द्र जी, कैलाश जी, नरेन्द्र जी, कपिल जी, अंकित जी, अर्पित जी कटारिया परिवार एवं श्री विकास जी, प्रियेश जी चपरोट।
                </p>
</div>
<hr className="border-rose-100 w-1/2 mx-auto"/>

<div className="text-center">
<h3 className="text-rose-800 font-semibold text-lg mb-3 flex items-center justify-center gap-2">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> बारात
                </h3>
<p className="text-stone-600 text-sm leading-relaxed">
                    श्रीमान् पारसमल जी, श्रेणीक कुमार जी, शैतानमल जी, मनोहरलाल जी, महेन्द्रकुमार जी, प्रदीप कुमार जी, चिराग जी, नवीन कुमार जी, आशीष कुमार जी, शैलेष कुमार जी, भूपेन्द्र कुमार जी, निलेश कुमार जी, हर्ष कुमार जी, सिद्धार्थ जी, कौशल जी दक्ष जी, सहज जी पावेचा परिवार वालों के यहाँ से अमृत गार्डन, रतलाम आयेगी।
                </p>
</div>
</section>

<section className="bg-rose-50/50 rounded-3xl p-8 border border-rose-100/60 reveal">
<div className="grid gap-8">

<div className="text-center space-y-2">
<p className="text-rose-900 italic font-medium">"इस मधुर बेला पर आपकी स्नेहमयी उपस्थिति सादर प्रार्थनीय है। आपकी प्रतिक्षा में लोढ़ा परिवार..."</p>
</div>
<div className="grid md:grid-cols-2 gap-8 text-sm">
<div>
<h5 className="text-rose-700 font-semibold mb-2 border-b border-rose-200 pb-1 inline-block">दर्शनाभिलाषी</h5>
<p className="text-stone-700 leading-relaxed">
                            रमेशचन्द्र, अभय कुमार अशोक कुमार, सुशील कुमार महेन्द्र कुमार, भूपेन्द्र कुमार एवं समस्त लोढ़ा परिवार
                        </p>
</div>
<div>
<h5 className="text-rose-700 font-semibold mb-2 border-b border-rose-200 pb-1 inline-block">स्वागतातूर</h5>
<p className="text-stone-700 leading-relaxed">
                            कान्तिलाल जी, तेजकुमार-सौ. पुष्पा, अरुण-सो. साधना, डॉ. संजय सो. सपना, मनीष-सो. रानी, कपिल-सो. पूजा, अमन, आदिश, डॉ. संजन, ऋषि, शौर्य, शुभ, दर्श एवं समस्त लोढा परिवार
                        </p>
</div>
</div>
<div className="text-center pt-4">
<h5 className="text-rose-700 font-semibold mb-2 text-xs uppercase tracking-widest">विशेष आग्रह</h5>
<p className="text-stone-600 text-sm">
                        ऊषा-अशोक कुमार जी दूरड़ा • तनु-अमित कुमार जी गोरचा • अंकित-प्राची दरडा • मोनिका-वैभव कुमार जी धारीवाल • श्रेया आदित्य कुमार जी भटेवरा
                    </p>
</div>
<div className="text-center">
<h5 className="text-rose-700 font-semibold mb-2 text-xs uppercase tracking-widest">विनीत</h5>
<p className="text-stone-800 font-medium">श्रीमती तीजाबाई लोढा • प्रफुल्ल-सौ. रानी लोढा</p>
</div>
</div>
</section>

<footer className="mt-16 text-center reveal pb-10">
<div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-stone-100 mb-6">
<iconify-icon className="text-yellow-500" icon="solar:stars-linear"></iconify-icon>
<span className="text-xs font-semibold text-stone-500 uppercase tracking-widest">बाल मनुहार</span>
<iconify-icon className="text-yellow-500" icon="solar:stars-linear"></iconify-icon>
</div>
<div className="flex flex-wrap justify-center gap-3 text-stone-700 font-medium font-script text-xl">
<span>जिनांशी</span> 🌸
                <span>जिनांश</span> 🌸
                <span>अनंत</span> 🌸
                <span>अनाया</span> 🌸
                <span>माही</span> 🌸
                <span>लक्षिका</span>
</div>
<div className="mt-8 text-rose-900 text-lg font-bold">॥ श्री महावीराय नमः ॥</div>
</footer>
</main>


    </>
  );
}
