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



(function(){const s=document.createElement("style");s.textContent=".animate-on-scroll{animation-play-state:paused!important}.animate-on-scroll.animate{animation-play-state:running!important}";document.head.appendChild(s);const o=!0;window.__inViewIO||(window.__inViewIO=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("animate"),o&&window.__inViewIO.unobserve(t.target))})},{threshold:.1,rootMargin:"0px 0px -10% 0px"})),window.initInViewAnimations=function(e=".animate-on-scroll"){document.querySelectorAll(e).forEach(e=>{window.__inViewIO.observe(e)})},document.addEventListener("DOMContentLoaded",()=>initInViewAnimations())})();



            (function() {
                var display = document.getElementById('timer-display-aura-emjevo2045jsirxa9');
                if (!display) return;

                var duration = 30 * 60; // 30 minutes in seconds

                function updateTimer() {
                    var minutes = Math.floor(duration / 60);
                    var seconds = duration % 60;

                    minutes = minutes < 10 ? "0" + minutes : minutes;
                    seconds = seconds < 10 ? "0" + seconds : seconds;

                    display.textContent = minutes + ":" + seconds;

                    if (--duration < 0) {
                        duration = 0;
                        clearInterval(interval);
                    }
                }

                var interval = setInterval(updateTimer, 1000);
                updateTimer(); // Initial call
            })();
          


                  (function (v, i, d, a, l, y, t, c, s) {
                  y='_'+d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}var vl='Loader',vli=v[y][vl],vsl=v[c][vl + 'Script'],vlf=v[c][vl + 'Loaded'],ve='Embed';
                  if (!vsl){vsl=function(u,cb){
                      if(t){cb();return;}s=i.createElement("script");s.type="text/javascript";s.async=1;s.src=u;
                      if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState=="complete"){s.onreadystatechange=null;vlf=1;cb();}};}else{s.onload=function(){vlf=1;cb();};}
                      i.getElementsByTagName("head")[0].appendChild(s);
                  };}
                  vsl(l+'loader.min.js',function(){if(!vli){var vlc=v[c][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){var vec=v[d][ve];t=new vec();t.run(a);});});
              })(window, document, 'Vidalytics', 'vidalytics_embed_8gg0ocx56JuQnoLw', 'https://fast.vidalytics.com/embeds/WnGlig2R/8gg0ocx56JuQnoLw/');
            


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
      

<div className="absolute top-0 inset-x-0 z-0 pointer-events-none bg-grid h-[140vh] w-full"></div>

<div className="absolute inset-0 z-0 pointer-events-none bg-stars w-full h-full opacity-60 animate-twinkle mix-blend-screen"></div>

<div className="absolute top-[-220px] left-1/2 -translate-x-1/2 w-[550px] h-[500px] beam-glow rounded-full z-0 pointer-events-none mix-blend-screen opacity-30"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-[450px] bg-gradient-to-b to-transparent blur-[1px] z-0 from-[#5BDABF]/50"></div>



<div className="absolute -top-[50px] left-[-20px] w-[120px] h-[150vh] bg-gradient-to-b from-white/10 via-[#5BDABF]/5 to-transparent rotate-[38deg] blur-[50px] pointer-events-none z-0 mix-blend-screen origin-top-left"></div>

<div className="absolute -top-[50px] left-[-20px] w-[2px] h-[150vh] bg-gradient-to-b from-white/40 via-[#5BDABF]/30 to-transparent rotate-[38deg] blur-[6px] pointer-events-none z-0 mix-blend-screen origin-top-left"></div>


<div className="absolute -top-[50px] right-[-20px] w-[120px] h-[150vh] bg-gradient-to-b from-white/10 via-[#5BDABF]/5 to-transparent -rotate-[38deg] blur-[50px] pointer-events-none z-0 mix-blend-screen origin-top-right"></div>

<div className="absolute -top-[50px] right-[-20px] w-[2px] h-[150vh] bg-gradient-to-b from-white/40 via-[#5BDABF]/30 to-transparent -rotate-[38deg] blur-[6px] pointer-events-none z-0 mix-blend-screen origin-top-right"></div>

<nav className="w-full z-50 bg-gradient-to-bl from-black/10 via-black/0 to-black/10 relative shadow-lg backdrop-blur-2xl">
<div className="flex flex-col md:flex-row md:justify-between max-w-screen-2xl mr-auto ml-auto pt-7 pr-6 pb-3 pl-6 gap-x-4 gap-y-2 items-center">
<div className="flex gap-x-3 gap-y-2 items-center">
<div className="w-8 h-8 rounded bg-gradient-to-br flex items-center justify-center from-[#5BDABF] shadow-[0_0_15px_rgba(91,218,191,0.5)] to-emerald-600">
<svg className="lucide lucide-badge-dollar-sign lucide-infinity stroke-[1.5] w-[20px] h-[20px]" data-lucide="badge-dollar-sign" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
</div>
<span className="uppercase md:text-sm text-lg font-medium text-white tracking-tight">
            الانطلاق المالي
          </span>
</div>
<div className="md:text-right text-lg font-normal text-[#FFC857] tracking-wide text-center">
<span className="uppercase text-lg font-medium text-slate-200 mr-2">
            الوصول العام سيُغلق خلال:
          </span>
<span className="font-mono" id="timer-display-aura-emjevo2045jsirxa9">30:00</span>

</div>
</div>
</nav>

<main className="flex flex-col z-10 text-center w-full max-w-screen-2xl mx-auto pt-0 px-7 pb-0 relative items-center">

<div className="inline-flex gap-2.5 group cursor-default transition-colors shadow-[#5BDABF]/20 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] animate hover:border-white/20 bg-gradient-to-br from-[#00190e]/80 via-[#00140d] to-[#000000]/0 rounded-full mt-5 mb-3 pt-1.5 pr-4 pb-1.5 pl-4 shadow-inner backdrop-blur-md scale-110 gap-x-2.5 gap-y-2.5 items-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(153, 246, 228, 0.5), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px'}}>
<span className="md:text-sm uppercase text-xs font-normal text-slate-200 tracking-wide">
<span className="font-bold text-slate-50">حدث مباشر:</span>
          الأحد 4 يناير 4 مساءً بتوقيت الإمارات
        </span>
<span className="flex h-2.5 w-2.5 relative">
<span className="inline-flex h-2.5 w-2.5 bg-red-500 rounded-full relative"></span>
<span className="animate-ping inline-flex bg-red-600 opacity-75 w-full h-full rounded-full absolute"></span>
</span>
</div>

<h1 className="leading-[1.15] animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] animate md:leading-[1.1] md:text-5xl text-2xl font-medium text-white tracking-tight max-w-3xl mr-auto mb-5 ml-auto drop-shadow-2xl">
        من راتب شهري عادي إلى
        <span className="font-bold text-[#5BDABF] drop-shadow-[0_0_25px_rgba(91,218,191,0.4)]">
          دخل إضافي حقيقي كل شهر
        </span>
        من خلال الاستثمار الحلال
        <br className="hidden lg:block"/>
<span className="font-normal italic text-[#FFC857] font-serif-custom pr-2">
          دون أي خبرة أو المخاطرة بمدخراتك
        </span>
</h1>

<p className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both] animate md:text-base text-sm font-medium text-slate-400 tracking-wide max-w-3xl mr-10 mb-0 ml-10">
        (شاهد الفيديو أدناه لتكتشف كيف)
      </p>
<div className="relative w-full max-w-3xl mx-auto mt-8 mb-16 group animate-on-scroll [animation:animationIn_0.8s_ease-out_0.5s_both] animate">

<div className="absolute -inset-px bg-gradient-to-b from-[#5BDABF]/20 to-transparent rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition duration-700"></div>

<div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/60 backdrop-blur-md shadow-2xl">

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#5BDABF]/40 to-transparent z-20"></div>

<div className="relative z-10">
<div className="" id="vidalytics_embed_8gg0ocx56JuQnoLw" style={{width: '100%', position: 'relative', paddingTop: '56.25%'}}><div className="LoaderPlaceholder"><div className="Loader__wrapper vid_loader--landscape"><img alt="" className="Loader__img" role="presentation" src="https://fast.vidalytics.com/video/WnGlig2R/ItJ5gLrQr7THIYlt/236813/219836__FFMPEG/thumb/preview-5_0.jpg"/><div aria-hidden="true" className="Loader__wave"></div><div className="Loader__body"><div className="Loader__layout Loader__layout--active"><button aria-label="Play video" className="LoaderPlay__button" data-vid-testid="controls:loader-play-button" type="button"><div className="LoaderPlay__body"><svg aria-hidden="true" className="LoaderPlay__icon" focusable="false" style={{backgroundColor: 'rgba(255, 200, 87, 0.7)', color: 'rgba(255, 255, 255, 0.7)'}} viewbox="0 0 107 107"><path d="M44.25 39.25V71.5a2.27 2.27 0 0 1-4.54 0V36.84c0-2.48 2.7-4 4.82-2.72L71.86 50.7a3.17 3.17 0 0 1 .13 5.35L55.9 66.84a2.27 2.27 0 0 1-2.53-3.77l14.31-9.61-23.44-14.2Z" fill="currentColor" fill-rule="evenodd"></path></svg><div aria-hidden="true" className="LoaderPlay__pulse" style={{'--vid-pulse-size': '36.79px', color: 'rgba(255, 200, 87, 0.7)'}}></div></div></button></div><div className="Loader__layout Loader__layout--hidden"><div aria-label="Loading video" aria-valuetext="Loading in progress" className="LoaderProgress__progress" role="progressbar" style={{borderWidth: '7.664px', borderColor: 'rgba(255, 255, 255, 0.8)'}}></div></div></div></div></div></div>

</div>

<div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-20 bg-[length:100%_2px,3px_100%] opacity-20"></div>
</div>

<div className="-bottom-1 -right-1 z-30 w-6 h-6 border-[#5BDABF]/30 rounded-br-lg border-r border-b absolute"></div>
<div className="-bottom-1 -left-1 z-30 w-6 h-6 border-[#5BDABF]/30 rounded-bl-lg border-b border-l absolute"></div>
</div>

<div className="relative w-full max-w-5xl mx-auto group animate-on-scroll [animation:animationIn_0.8s_ease-out_0.5s_both] animate">


</div>


<div className="flex flex-col w-full mt-0 mb-10 items-center justify-center">
<a className="group w-full max-w-lg mr-auto ml-auto relative block" href="#booking-section">
<div className="-inset-1 group-hover:opacity-60 transition duration-500 bg-gradient-to-r from-[#5BDABF] to-[#2dd4bf] opacity-30 rounded-full absolute blur scale-75"></div>
<div className="hover:from-[#6cf5b9] hover:to-[#6cf5b9] flex flex-col transition-all duration-300 transform group-hover:-translate-y-1 overflow-visible text-black bg-gradient-to-bl from-emerald-400 via-[#93ccaf] to-emerald-600 w-full border-white/40 rounded-full border-t pt-4 pr-2 pb-4 pl-2 relative shadow-[0_0_50px_-10px_rgba(14,165,233,0.5)] scale-75 items-center justify-center">
<style>
              @keyframes breatheRing {

                0%,
                100% {
                  opacity: 0;
                  transform: scale(0.98);
                }

                50% {
                  opacity: 1;
                  transform: scale(1.02);
                }
              }
            </style>

<div className="absolute -inset-[8px] rounded-full border-2 border-[#6cf5b9] pointer-events-none z-[-1]" style={{animation: 'breatheRing 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>
<span className="relative z-10 md:text-2xl uppercase text-xl font-black tracking-tight drop-shadow-sm">
              احجز مكانك المجاني
            </span>
<span className="relative z-10 md:text-sm uppercase text-xs font-bold text-slate-900 tracking-wide opacity-80 mt-1">
              الأحد 4 يناير 4 مساءً بتوقيت الإمارات
            </span>
</div>
</a>

</div>
</main>
<section className="flex flex-col z-10 w-full max-w-screen-2xl mx-auto pt-20 pb-24 relative items-center">

<div className="absolute top-0 inset-x-0 h-40 pointer-events-none z-0 flex justify-center">

<div className="absolute top-0 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-[#5BDABF] to-transparent shadow-[0_0_25px_rgba(91,218,191,0.6)] z-20 opacity-100"></div>

<div className="absolute top-0 w-2/3 h-[2px] bg-gradient-to-r from-transparent to-transparent blur-[0.5px] z-20 mix-blend-overlay via-white"></div>

<div className="absolute top-0 w-[800px] h-[120px] bg-[#5BDABF]/10 blur-[80px] rounded-full -translate-y-1/2 mix-blend-screen z-10"></div>

<div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b to-transparent z-0 from-black/40"></div>
</div>

<div className="text-center max-w-4xl mx-auto mb-16 relative z-30 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] animate">
<h2 className="md:text-5xl lg:text-6xl leading-[1.1] text-2xl font-bold text-white tracking-tight mb-6 drop-shadow-2xl">
          النظام
          <span className="inline-flex items-center justify-center transform ring-offset-2 ring-offset-black text-slate-900 bg-[#5BDABF] ring-[#5BDABF]/50 ring-2 rounded-lg ml-1 pt-1 pr-4 pb-1 pl-4 shadow-[0_0_40px_rgba(91,218,191,0.6)] -rotate-2">
            الثلاثي
          </span>
          الكامل للنجاح
        </h2>
<p className="md:text-xl text-sm font-medium text-slate-400 tracking-wide">
          إليك ما ستتعلمه مجانًا يوم الأحد 4 يناير
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 z-10 w-full max-w-full px-7 relative gap-x-6 gap-y-6">

<div className="group relative aspect-[3/5] rounded-[2.5rem] overflow-hidden border hover:-translate-y-2 transition-transform duration-500 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] hover:border-[#5BDABF]/40 hover:shadow-[0_0_30px_-5px_rgba(91,218,191,0.15)] bg-slate-900/40 border-white/10 animate">

<div className="absolute inset-0">
<img alt="AI Technology" className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 ease-out" src="https://assets.cdn.filesafe.space/A8NHS5yqTs2zlWtJtlIm/media/694744a2aca6ab728bc5f677.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-black via-black/80"></div>
</div>

<div className="flex flex-col text-center mx-0 pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-center">

<div className="group-hover:border-[#5BDABF]/30 group-hover:shadow-[0_0_15px_rgba(91,218,191,0.2)] transition-all text-sm text-white tracking-wider font-mono bg-gradient-to-bl from-white/0 via-white/10 to-white/0 rounded-full mt-8 px-4 py-1.5 shadow-lg backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(225deg, rgba(255, 255, 255, 0), rgba(183, 147, 16, 0.5), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px'}}>
              #1
            </div>

<div className="flex-1 flex relative items-center justify-center">
<h3 className="leading-[0.9] md:text-5xl text-3xl font-normal italic text-white tracking-tight font-serif-custom drop-shadow-xl">
                نظام الوضوح المالي
                <span className="text-[#5BDABF] drop-shadow-[0_0_15px_rgba(91,218,191,0.4)]">
                  (الخريطة الواضحة للبداية)
                </span>
</h3>
</div>

<div className="w-full p-6 rounded-3xl border backdrop-blur-md relative group-hover:border-[#5BDABF]/30 transition-colors duration-300 shadow-inner border-white/10 bg-black/40">

<div className="absolute top-3 left-3 w-2 h-2 border-t border-l rounded-tl-sm group-hover:border-[#5BDABF]/60 transition-colors border-white/30"></div>
<div className="absolute top-3 right-3 w-2 h-2 border-t border-r rounded-tr-sm group-hover:border-[#5BDABF]/60 transition-colors border-white/30"></div>
<div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l rounded-bl-sm group-hover:border-[#5BDABF]/60 transition-colors border-white/30"></div>
<div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r rounded-br-sm group-hover:border-[#5BDABF]/60 transition-colors border-white/30"></div>
<p className="md:text-base leading-relaxed text-sm font-normal text-slate-300">
                تخلص من حيرة "من أين أبدأ؟" واحصل على خطة استثمار منظمة في 15
                دقيقة. نحدد لك المعايير الشرعية الدقيقة (الحلال) لتستثمر بثقة
                مطلقة وراحة بال.
              </p>
</div>
</div>

<div className="absolute inset-3 rounded-[2rem] border pointer-events-none group-hover:border-white/10 transition-colors border-white/5"></div>
</div>

<div className="group relative aspect-[3/5] rounded-[2.5rem] overflow-hidden border hover:-translate-y-2 transition-transform duration-500 delay-75 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.5s_both] hover:border-[#5BDABF]/40 hover:shadow-[0_0_30px_-5px_rgba(91,218,191,0.15)] bg-slate-900/40 border-white/10 animate">

<div className="absolute inset-0">
<img alt="Automation" className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 ease-out" src="https://assets.cdn.filesafe.space/A8NHS5yqTs2zlWtJtlIm/media/694744a2aca6ab627ec5f676.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-black via-black/80"></div>
</div>

<div className="flex flex-col text-center pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-center">
<div className="group-hover:border-[#5BDABF]/30 group-hover:shadow-[0_0_15px_rgba(91,218,191,0.2)] transition-all text-sm text-white tracking-wider font-mono bg-gradient-to-bl from-white/0 via-white/10 to-white/0 rounded-full mt-8 px-4 py-1.5 shadow-lg backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(225deg, rgba(255, 255, 255, 0), rgba(183, 147, 16, 0.5), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px'}}>
              #2
            </div>
<div className="flex-1 flex relative items-center justify-center">
<h3 className="md:text-5xl leading-[0.9] text-3xl font-normal italic text-white font-serif-custom drop-shadow-xl">
                استراتيجية المحفظة المحمية
              </h3>
</div>
<div className="w-full p-6 rounded-3xl border backdrop-blur-md relative group-hover:border-[#5BDABF]/30 transition-colors duration-300 shadow-inner border-white/10 bg-black/40">
<div className="absolute top-3 left-3 w-2 h-2 border-t border-l rounded-tl-sm group-hover:border-[#5BDABF]/60 transition-colors border-white/30"></div>
<div className="absolute top-3 right-3 w-2 h-2 border-t border-r rounded-tr-sm group-hover:border-[#5BDABF]/60 transition-colors border-white/30"></div>
<div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l rounded-bl-sm group-hover:border-[#5BDABF]/60 transition-colors border-white/30"></div>
<div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r rounded-br-sm group-hover:border-[#5BDABF]/60 transition-colors border-white/30"></div>
<p className="md:text-base leading-relaxed text-sm font-medium text-slate-300">
                تعلم كيف تحمي أموالك من تقلبات السوق وتتجنب الأخطاء الـ 7
                القاتلة التي أحرقت مدخرات المبتدئين. استثمر بذكاء وليس بمخاطرة،
                حتى لو لم تكن خبيراً مالياً.
              </p>
</div>
</div>
<div className="absolute inset-3 rounded-[2rem] border pointer-events-none group-hover:border-white/10 transition-colors border-white/5"></div>
</div>

<div className="group relative aspect-[3/5] rounded-[2.5rem] overflow-hidden border hover:-translate-y-2 transition-transform duration-500 delay-150 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.7s_both] hover:border-[#5BDABF]/40 hover:shadow-[0_0_30px_-5px_rgba(91,218,191,0.15)] bg-slate-900/40 border-white/10 animate">

<div className="absolute inset-0">
<img alt="Freedom" className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 ease-out" src="https://assets.cdn.filesafe.space/A8NHS5yqTs2zlWtJtlIm/media/694744a28cae8fff912488b0.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-black via-black/80"></div>
</div>

<div className="flex flex-col text-center pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-center">
<div className="group-hover:border-[#5BDABF]/30 group-hover:shadow-[0_0_15px_rgba(91,218,191,0.2)] transition-all text-sm text-white tracking-wider font-mono bg-gradient-to-bl from-white/0 via-white/10 to-white/0 rounded-full mt-8 px-4 py-1.5 shadow-lg backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(225deg, rgba(255, 255, 255, 0), rgba(183, 130, 16, 0.5), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px'}}>
              #3
            </div>
<div className="flex-1 flex items-center justify-center relative">
<h3 className="leading-[0.9] md:text-5xl text-3xl font-normal italic text-white font-serif-custom drop-shadow-xl">
                آلة الدخل الشهري
              </h3>
</div>
<div className="w-full p-6 rounded-3xl border backdrop-blur-md relative group-hover:border-[#5BDABF]/30 transition-colors duration-300 shadow-inner border-white/10 bg-black/40">
<div className="absolute top-3 left-3 w-2 h-2 border-t border-l rounded-tl-sm group-hover:border-[#5BDABF]/60 transition-colors border-white/30"></div>
<div className="absolute top-3 right-3 w-2 h-2 border-t border-r rounded-tr-sm group-hover:border-[#5BDABF]/60 transition-colors border-white/30"></div>
<div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l rounded-bl-sm group-hover:border-[#5BDABF]/60 transition-colors border-white/30"></div>
<div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r rounded-br-sm group-hover:border-[#5BDABF]/60 transition-colors border-white/30"></div>
<p className="md:text-base leading-relaxed text-sm font-medium text-slate-300">
                حوّل محفظتك إلى مصدر دخل إضافي. كل ما تحتاجه هو بعض دقائق شهرياً
                لإدارة محفظتك، لتحقق هدفك المالي دون الحاجة لترك وظيفتك الحالية
              </p>
</div>
</div>
<div className="absolute inset-3 rounded-[2rem] border pointer-events-none group-hover:border-white/10 transition-colors border-white/5"></div>
</div>
</div>

<div className="flex flex-col w-full mt-20 mb-10 items-center justify-center">
<a className="group w-full max-w-lg mr-auto ml-auto relative block" href="#booking-section">
<div className="-inset-1 group-hover:opacity-60 transition duration-500 bg-gradient-to-r from-[#5BDABF] to-[#2dd4bf] opacity-30 rounded-full absolute blur scale-75"></div>
<div className="hover:from-[#6cf5b9] hover:to-[#6cf5b9] flex flex-col transition-all duration-300 transform group-hover:-translate-y-1 overflow-visible text-black bg-gradient-to-bl from-emerald-400 via-[#93ccaf] to-emerald-600 w-full border-white/40 rounded-full border-t pt-4 pr-2 pb-4 pl-2 relative shadow-[0_0_50px_-10px_rgba(14,165,233,0.5)] scale-75 items-center justify-center">
<style>
              @keyframes breatheRing {

                0%,
                100% {
                  opacity: 0;
                  transform: scale(0.98);
                }

                50% {
                  opacity: 1;
                  transform: scale(1.02);
                }
              }
            </style>

<div className="absolute -inset-[8px] rounded-full border-2 border-[#6cf5b9] pointer-events-none z-[-1]" style={{animation: 'breatheRing 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>
<span className="relative z-10 md:text-2xl uppercase text-xl font-black tracking-tight drop-shadow-sm">
              احجز مكانك المجاني
            </span>
<span className="relative z-10 md:text-sm uppercase text-xs font-bold text-slate-900 tracking-wide opacity-80 mt-1">
              الأحد 4 يناير 4 مساءً بتوقيت الإمارات
            </span>
</div>
</a>

</div>
</section>

<section className="flex flex-col z-10 w-full max-w-screen-2xl mx-auto pt-10 px-4 relative items-center" id="booking-section">

<div className="absolute top-0 left-0 right-0 w-full h-px z-20 pointer-events-none">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-[#5BDABF] to-transparent opacity-80 shadow-[0_0_20px_#5BDABF]"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 max-w-lg h-[2px] bg-gradient-to-r from-transparent to-transparent opacity-60 mix-blend-overlay via-white"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[150px] bg-[#5BDABF]/20 blur-[90px] -translate-y-1/2 rounded-[100%] mix-blend-screen"></div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-[#5BDABF]/10 blur-[120px] rounded-full pointer-events-none -z-10 mix-blend-screen animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] animate"></div>
<div className="w-full max-w-5xl mx-auto relative group">

<div className="relative rounded-[2rem] overflow-hidden border shadow-2xl backdrop-blur-xl bg-slate-900/80 border-white/10">

<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5BDABF]/60 to-transparent"></div>
<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#5BDABF]/20 blur-[80px] rounded-full pointer-events-none mix-blend-screen"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-64 bg-gradient-to-b from-[#5BDABF] to-transparent opacity-60"></div>

<div className="flex flex-col md:px-12 text-center z-10 pt-20 pr-6 pb-12 pl-6 relative items-center">

<div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none z-0">

<div className="absolute inset-0 bg-black/70 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/60"></div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-t from-[#5BDABF] via-[#5BDABF]/30 to-transparent blur-[2px] opacity-80"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-t from-[#5BDABF] via-transparent to-transparent opacity-100"></div>

<div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-[#5BDABF]/10 blur-[80px] rounded-full mix-blend-screen"></div>

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-30"></div>
</div>

<div className="relative z-10 inline-flex items-center gap-2.5 px-5 py-2 rounded-full border backdrop-blur-md mb-10 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-white/20 transition-all cursor-default bg-black/80 border-white/10">
<div className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
</div>
<span className="uppercase text-xs font-semibold text-white tracking-wider font-mono">
                احجز مكانك المجاني
              </span>
</div>

<h2 className="z-10 md:text-6xl leading-[1.1] uppercase text-3xl font-semibold text-white tracking-tighter mb-5 relative drop-shadow-2xl">
              احجز تذكرتك المجانية الآن
            </h2>

<p className="relative z-10 md:text-xl text-sm font-medium text-slate-300 tracking-wide max-w-2xl mr-auto mb-5 ml-auto">
              اضمن مكانك قبل إغلاق الوصول العام للحدث المباشر
            </p>

<div className="relative z-10 w-full rounded-2xl overflow-hidden border min-h-[500px] shadow-inner bg-black/40 border-white/5">

<div className="" data-fillout-dynamic-resize="" data-fillout-embed-type="standard" data-fillout-id="fgyABnvVRsus" data-fillout-inherit-parameters="" data-fillout-initialized="true" style={{width: '100%', height: '541px', position: 'relative'}}>
<div className="fillout-embed-standard" style={{opacity: '1'}}>
<div className="fillout-embed-loading" style={{display: 'none'}}></div>
<div className="fillout-embed-iframe-container" style={{opacity: '1'}}>
<iframe allow="microphone; camera; geolocation" className="" src="https://embed.fillout.com/t/fgyABnvVRsus?fillout-embed-id=67076343024363&amp;fillout-embed-type=standard&amp;fillout-embed-parent-page=https%3A%2F%2Fwww.aura.build%2Feditor%2F6fe534ab-8173-4c1a-80f6-ffe6980a96d9&amp;fillout-embed-dynamic-resize=true" style={{border: '0px'}} title="fgyABnvVRsus"></iframe>
</div>
</div>
</div>

</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t to-transparent pointer-events-none from-slate-950 via-slate-900/80"></div>

<div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none mix-blend-overlay"></div>
</div>

<div className="absolute -top-px -left-px w-10 h-10 border-t-2 border-l-2 rounded-tl-2xl z-20 border-[#5BDABF]/30 opacity-60"></div>
<div className="absolute -top-px -right-px w-10 h-10 border-t-2 border-r-2 rounded-tr-2xl z-20 border-[#5BDABF]/30 opacity-60"></div>
<div className="absolute -bottom-px -left-px w-10 h-10 border-b-2 border-l-2 rounded-bl-2xl z-20 border-[#5BDABF]/30 opacity-60"></div>
<div className="absolute -bottom-px -right-px w-10 h-10 border-b-2 border-r-2 rounded-br-2xl z-20 border-[#5BDABF]/30 opacity-60"></div>
</div>
</section>
<section className="z-10 flex flex-col w-full max-w-screen-2xl mx-auto pt-20 px-4 pb-32 relative items-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-[#5BDABF]/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border backdrop-blur-md text-xs font-medium tracking-wide uppercase mb-8 shadow-[0_0_15px_rgba(0,0,0,0.5)] animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] border-white/10 bg-white/5 text-slate-300 animate">
<span className="w-1.5 h-1.5 rounded-full bg-[#5BDABF] shadow-[0_0_5px_#5BDABF]"></span>
        FAQ
      </div>

<h2 className="md:text-5xl lg:text-6xl animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] text-4xl font-semibold text-white tracking-tight text-center mb-16 drop-shadow-xl animate">
        الأسئلة الشائعة
      </h2>

<div className="w-full max-w-3xl flex flex-col gap-4 relative z-10 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.7s_both] animate">

<button className="group md:p-7 hover:border-[#5BDABF]/30 transition-all duration-300 cursor-pointer flex animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both] hover:bg-slate-900/60 animate text-left bg-slate-900/40 w-full border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-sm items-center justify-between">
<span className="md:text-lg group-hover:text-white transition-colors text-base font-medium text-slate-200 pr-8">
            هل ما يتم تدريسه ينطبق على الأشخاص الذين ليس لديهم خبرة؟
          </span>
<div className="flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center group-hover:border-[#5BDABF]/50 group-hover:bg-[#5BDABF]/10 transition-colors border-white/10">
<svg className="lucide lucide-plus group-hover:text-[#5BDABF] transition-colors w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(91, 218, 191)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path className="" d="M12 5v14"></path>
</svg>
</div>
</button>

<button className="group md:p-7 hover:border-[#5BDABF]/30 transition-all duration-300 cursor-pointer flex animate-on-scroll [animation:animationIn_0.8s_ease-out_0.5s_both] hover:bg-slate-900/60 text-left bg-slate-900/40 w-full border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-sm items-center justify-between animate">
<span className="md:text-lg group-hover:text-white transition-colors text-base font-medium text-slate-200 pr-8">
            هل سيكون الحدث ذا قيمة بالنسبة لي رغم انشغالي؟
          </span>
<div className="flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center group-hover:border-[#5BDABF]/50 group-hover:bg-[#5BDABF]/10 transition-colors border-white/10">
<svg className="lucide lucide-plus w-5 h-5 group-hover:text-[#5BDABF] transition-colors text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</div>
</button>

<button className="group hover:border-[#5BDABF]/30 transition-all duration-300 cursor-pointer flex animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] hover:bg-slate-900/60 animate md:p-7 text-left bg-slate-900/40 w-full border-white/10 border rounded-2xl pt-7 pr-7 pb-7 pl-7 backdrop-blur-sm items-center justify-between">
<span className="md:text-lg group-hover:text-white transition-colors text-base font-medium text-slate-200 pr-8">
            ماذا لو كنت لا أعرف شيئاً عن الاستثمار الحلال؟
          </span>
<div className="flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center group-hover:border-[#5BDABF]/50 group-hover:bg-[#5BDABF]/10 transition-colors border-white/10">
<svg className="lucide lucide-plus w-5 h-5 group-hover:text-[#5BDABF] transition-colors text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</div>
</button>
</div>

<div className="flex flex-col w-full mt-20 items-center justify-center">
<button className="relative group w-full max-w-lg mx-auto"></button>

<div className="flex flex-col w-full mt-0 mb-10 items-center justify-center">
<a className="group w-full max-w-lg mr-auto ml-auto relative block" href="#booking-section">
<div className="-inset-1 group-hover:opacity-60 transition duration-500 bg-gradient-to-r from-[#5BDABF] to-[#2dd4bf] opacity-30 rounded-full absolute blur scale-75"></div>
<div className="hover:from-[#6cf5b9] hover:to-[#6cf5b9] flex flex-col transition-all duration-300 transform group-hover:-translate-y-1 overflow-visible text-black bg-gradient-to-bl from-emerald-400 via-[#93ccaf] to-emerald-600 w-full border-white/40 rounded-full border-t pt-4 pr-2 pb-4 pl-2 relative shadow-[0_0_50px_-10px_rgba(14,165,233,0.5)] scale-75 items-center justify-center">
<style>
                @keyframes breatheRing {

                  0%,
                  100% {
                    opacity: 0;
                    transform: scale(0.98);
                  }

                  50% {
                    opacity: 1;
                    transform: scale(1.02);
                  }
                }
              </style>

<div className="absolute -inset-[8px] rounded-full border-2 border-[#6cf5b9] pointer-events-none z-[-1]" style={{animation: 'breatheRing 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>
<span className="relative z-10 md:text-2xl uppercase text-xl font-black tracking-tight drop-shadow-sm">
                احجز مكانك المجاني
              </span>
<span className="relative z-10 md:text-sm uppercase text-xs font-bold text-slate-900 tracking-wide opacity-80 mt-1">
                الأحد 4 يناير 4 مساءً بتوقيت الإمارات
              </span>
</div>
</a>

</div>
</div>
</section>

    </>
  );
}
