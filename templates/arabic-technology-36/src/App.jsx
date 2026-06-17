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



      document.addEventListener('DOMContentLoaded', () => {
          // Reveal Animation Observer
          const observerOptions = {
              root: null,
              rootMargin: '0px',
              threshold: 0.15
          };

          const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('active');

                      // Counter Animation Trigger
                      const counters = entry.target.querySelectorAll('.counter');
                      counters.forEach(counter => {
                          const target = +counter.getAttribute('data-target');
                          const duration = 2000; // 2 seconds
                          const increment = target / (duration / 16); // 60fps

                          let current = 0;
                          const updateCounter = () => {
                              current += increment;
                              if(current < target) {
                                  counter.innerText = Math.ceil(current);
                                  requestAnimationFrame(updateCounter);
                              } else {
                                  counter.innerText = target + "+";
                              }
                          };
                          updateCounter();
                      });

                      observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          document.querySelectorAll('.reveal').forEach(section => {
              observer.observe(section);
          });
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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none">
<div className="blob blob-purple blob-anim-fast"></div>
<div className="blob blob-blue"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay opacity-10"></div>
</div>

<nav className="fixed top-0 w-full z-50 bg-[#020617]/70 backdrop-blur-xl border-b border-blue-500/10 transition-all duration-300 animate-slide-down shadow-[0_4px_30px_-10px_rgba(35,118,221,0.15)]">
<div className="max-w-7xl mx-auto px-6 py-4">
<div className="flex items-center justify-between">

<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
<span className="font-inter font-bold text-xl">
<iconify-icon icon="lucide:gem" width="24"></iconify-icon>
</span>
</div>
<span className="group-hover:text-blue-400 transition-colors text-2xl text-white tracking-tight font-manrope font-medium" style={{}}>
              الجودة المثالية
            </span>
</div>

<div className="hidden md:flex items-center gap-10">
<a className="text-[15px] font-medium text-white hover:text-[#2376DD] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#2376DD] hover:after:w-full after:transition-all font-sans" href="#">
              الرئيسية
            </a>
<a className="text-[15px] font-medium text-gray-300 hover:text-[#2376DD] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#2376DD] hover:after:w-full after:transition-all font-sans" href="#about">
              من نحن
            </a>
<a className="text-[15px] font-medium text-gray-300 hover:text-[#2376DD] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#2376DD] hover:after:w-full after:transition-all font-sans" href="#services">
              خدماتنا
            </a>
<a className="text-[15px] font-medium text-gray-300 hover:text-[#2376DD] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#2376DD] hover:after:w-full after:transition-all font-sans" href="#process">
              كيف نعمل
            </a>
<div className="flex flex-col items-end border-r border-white/10 pr-6 mr-2">
<span className="text-xs font-semibold text-white mb-0.5 font-sans">
                اتصل بنا
              </span>
<div className="flex flex-col items-end text-[11px] text-gray-400 font-inter dir-ltr">
<span className="font-sans">+964 7714220077</span>
</div>
</div>
</div>

<button className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="md:pt-52 md:pb-32 overflow-hidden pt-40 pr-6 pb-20 pl-6 relative">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center gap-y-12">

<div className="flex flex-col gap-8 text-right z-10">
<div className="space-y-6 animate-slide-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium w-fit mr-auto animate-float font-sans shadow-[0_0_20px_-5px_rgba(59,130,246,0.4)] backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              مستقبل التكنولوجيا يبدأ هنا
            </div>
<h1 className="text-5xl md:text-6xl lg:text-[80px] font-bold leading-[1.1] animate-float-slow drop-shadow-[0_0_40px_rgba(35,118,221,0.25)]">
<span className="text-gradient-gold-blue font-manrope font-medium" style={{}}>
                شركة الجودة المثالية
              </span>
<br/>
<span className="text-white text-4xl md:text-5xl lg:text-[60px] font-manrope font-medium">
                للحلول الرقمية المتكاملة
              </span>
</h1>
<p className="leading-relaxed text-lg text-gray-400 max-w-2xl mr-auto">
              نبتكر حلولاً برمجية ذكية تحول التحديات إلى فرص، ونبني أنظمة رقمية
              متينة تقود أعمالكم نحو المستقبل.
            </p>
</div>
<div className="flex flex-wrap gap-x-4 gap-y-4 justify-start animate-slide-up delay-300">
<button className="h-12 px-8 bg-[#2376DD] hover:bg-[#1a63d4] text-white font-semibold rounded-xl text-sm transition-all shadow-[0_0_25px_-5px_#2376DD] hover:shadow-[0_0_50px_-10px_#2376DD] hover:-translate-y-1 flex items-center gap-2 group shimmer border border-blue-400/20">
<span className="font-sans">ابدأ مشروعك</span>
<iconify-icon className="group-hover:-translate-x-1 transition-transform" icon="lucide:arrow-left" width="18"></iconify-icon>
</button>
<button className="h-12 px-8 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl text-sm transition-all border border-white/10 flex items-center gap-2 hover:-translate-y-1">
<span className="font-sans">تصفح أعمالنا</span>
</button>
</div>
</div>

<div className="relative flex justify-center delay-200 animate-slide-up delay-300">
<div className="relative w-full max-w-[500px] aspect-square animate-float">

<div className="absolute inset-0 bg-gradient-to-tr from-[#1e1b4b]/60 to-[#172554]/60 rounded-[40px] border border-blue-500/20 shadow-[0_0_60px_-15px_rgba(35,118,221,0.35)] backdrop-blur-xl overflow-hidden">

<div className="absolute inset-0 opacity-30" style={{backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>

<div className="absolute top-[25%] right-[10%] p-4 bg-[#0F172A] rounded-xl border border-white/10 shadow-xl w-64 animate-float shadow-[0_0_30px_-5px_rgba(35,118,221,0.25)] border-blue-500/20 bg-slate-900/80 backdrop-blur-md" style={{animationDuration: '7s'}}>
<div className="flex gap-2 mb-3">
<div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
</div>
<div className="space-y-2">
<div className="h-2 w-3/4 bg-gray-700 rounded full"></div>
<div className="h-2 w-1/2 bg-blue-600 rounded full"></div>
<div className="h-2 w-2/3 bg-gray-700 rounded full"></div>
</div>
</div>
<div className="absolute bottom-[20%] left-[10%] p-4 bg-[#0F172A]/90 backdrop-blur rounded-xl border border-white/10 shadow-xl w-56 animate-float shadow-[0_0_30px_-5px_rgba(16,185,129,0.25)] border-green-500/20 bg-slate-900/80 backdrop-blur-md" style={{animationDelay: '-2s', animationDuration: '5s'}}>
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
<iconify-icon icon="lucide:shield-check" width="16"></iconify-icon>
</div>
<div className="text-xs font-mono text-gray-300 font-sans">
                    System Secure
                  </div>
</div>
<div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
<div className="bg-green-500 h-full w-[90%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="overflow-hidden pt-24 pr-6 pb-24 pl-6 relative" id="about">
<div className="max-w-7xl mr-auto ml-auto justify-start">

<div className="flex flex-col gap-4 reveal text-right mb-16 gap-x-4 gap-y-4 items-start justify-start">
<span className="uppercase text-sm font-semibold text-[#2376DD] tracking-wider font-sans">
            من نحن
          </span>
<h2 className="md:text-5xl text-4xl text-white font-manrope font-medium">
            شريكك الاستراتيجي في
            <br/>
<span className="text-gradient-gold-blue font-manrope font-medium" style={{}}>
              التحول الرقمي
            </span>
</h2>
<p className="leading-relaxed text-lg text-gray-400 max-w-2xl font-sans">
            نحن في "الجودة المثالية" لا نكتب الأكواد فحسب، بل نبني حلولاً. نجمع
            بين الإبداع التقني والفهم العميق لاحتياجات السوق لنقدم أنظمة تدفع
            أعمالك للأمام.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-6 gap-6">

<div className="md:col-span-3 lg:col-span-4 bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden group reveal hover:border-blue-500/30 glass-card-hover transition-all duration-500">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2376DD] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 text-right h-full flex flex-col justify-between">
<div className="w-14 h-14 bg-[#2376DD]/20 rounded-2xl flex items-center justify-center mb-6 text-[#2376DD]">
<iconify-icon icon="lucide:target" width="32"></iconify-icon>
</div>
<div className="">
<h3 className="text-2xl text-white mb-4 font-manrope font-medium">
                  رؤيتنا الطموحة
                </h3>
<p className="text-gray-400 leading-relaxed font-sans">
                  نسعى لأن نكون الخيار الأول للشركات والمؤسسات التي تبحث عن
                  الجودة والدقة في الحلول الرقمية، من خلال تبني أحدث تقنيات
                  الذكاء الاصطناعي والحوسبة السحابية لتعزيز الكفاءة التشغيلية.
                </p>
</div>
</div>

<div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#2376DD]/10 rounded-full blur-3xl group-hover:bg-[#2376DD]/20 transition-all duration-700"></div>
</div>

<div className="md:col-span-3 lg:col-span-2 bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:bg-slate-800/40 transition-all group reveal delay-100 text-right hover:border-purple-500/30 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.25)]">
<div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-400">
<iconify-icon icon="lucide:rocket" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-3 font-sans">مهمتنا</h3>
<p className="text-gray-400 text-sm leading-7 font-sans">
              تمكين عملائنا من خلال حلول تقنية مبتكرة ومستدامة، مصممة خصيصاً
              لتناسب تحدياتهم الفريدة وتسرع من نموهم.
            </p>
</div>

<div className="md:col-span-2 bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:bg-slate-800/40 transition-all group reveal delay-200 text-right hover:border-green-500/30 hover:shadow-[0_0_40px_-10px_rgba(34,197,94,0.25)]">
<div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 text-green-400">
<iconify-icon icon="lucide:gem" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-3 font-sans">قيمنا</h3>
<ul className="text-gray-400 text-sm space-y-2 list-none">
<li className="flex items-center justify-end gap-2">
<span className="text-white font-sans">الشفافية المطلقة</span>
<iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon>
</li>
<li className="flex items-center justify-end gap-2">
<span className="text-white font-sans">الابتكار المستمر</span>
<iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon>
</li>
<li className="flex items-center justify-end gap-2">
<span className="text-white font-sans">الالتزام بالجودة</span>
<iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon>
</li>
</ul>
</div>

<div className="md:col-span-4 bg-[#2376DD] rounded-3xl p-8 relative overflow-hidden flex items-center justify-around text-center reveal delay-300 shadow-[0_0_60px_-10px_rgba(35,118,221,0.4)] border border-blue-400/20">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-multiply"></div>
<div className="relative z-10 grid grid-cols-3 w-full divide-x divide-white/20 rtl:divide-x-reverse">
<div className="flex flex-col gap-1">
<span className="text-4xl md:text-5xl text-white counter font-manrope font-medium" data-target="150">
                  2
                </span>
<span className="text-blue-100 text-sm font-sans">مشروع ناجح</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-4xl md:text-5xl text-white counter font-manrope font-medium" data-target="45">
                  1
                </span>
<span className="text-blue-100 text-sm font-sans">خبير تقني</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-4xl md:text-5xl text-white counter font-manrope font-medium" data-target="99">
                  1
                </span>
<span className="text-blue-100 text-sm font-sans">% نسبة رضا</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6 relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col gap-4 text-right mb-20 gap-x-4 gap-y-4 items-start reveal">
<span className="text-[#2376DD] font-semibold tracking-wider text-sm uppercase font-sans">
            خدماتنا
          </span>
<h2 className="md:text-5xl text-4xl text-white font-manrope font-medium">
            حلول تقنية
            <span className="text-gray-500 font-manrope font-medium">شاملة</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-[#0f172a] rounded-3xl p-1 overflow-hidden transition-all hover:-translate-y-2 duration-300 hover-scale-glow reveal hover:shadow-[0_0_40px_-10px_rgba(35,118,221,0.2)]">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative bg-slate-900/40 backdrop-blur-xl h-full rounded-[20px] p-8 flex flex-col items-end text-right border border-white/5 group-hover:border-blue-500/40 transition-colors">
<div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 text-blue-500">
<iconify-icon icon="lucide:monitor-smartphone" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-3 font-sans">
                تطوير الويب والتطبيقات
              </h3>
<p className="text-gray-400 text-sm leading-6 font-sans">
                بناء منصات ويب متجاوبة وتطبيقات جوال (iOS/Android) بأداء عالي
                وتجربة مستخدم سلسة.
              </p>
</div>
</div>
<div className="group relative bg-[#0f172a] rounded-3xl p-1 overflow-hidden transition-all hover:-translate-y-2 duration-300 delay-100">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative bg-slate-900/40 backdrop-blur-xl h-full rounded-[20px] p-8 flex flex-col items-end text-right border border-white/5 group-hover:border-purple-500/40 transition-colors">
<div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 text-purple-500">
<iconify-icon icon="lucide:cloud-cog" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-3 font-sans">
                الحوسبة السحابية
              </h3>
<p className="text-gray-400 text-sm leading-6 font-sans">
                خدمات الاستضافة السحابية وإدارة البنية التحتية لضمان توفر
                بياناتك وأمانها على مدار الساعة.
              </p>
</div>
</div>
<div className="group relative bg-[#0f172a] rounded-3xl p-1 overflow-hidden transition-all hover:-translate-y-2 duration-300 delay-200">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative bg-slate-900/40 backdrop-blur-xl h-full rounded-[20px] p-8 flex flex-col items-end text-right border border-white/5 group-hover:border-emerald-500/40 transition-colors">
<div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 text-emerald-500">
<iconify-icon icon="lucide:brain-circuit" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-3 font-sans">
                استشارات الذكاء الاصطناعي
              </h3>
<p className="text-gray-400 text-sm leading-6 font-sans">
                دمج خوارزميات الذكاء الاصطناعي وتحليل البيانات لتحسين اتخاذ
                القرار وأتمتة العمليات.
              </p>
</div>
</div>
<div className="group relative bg-[#0f172a] rounded-3xl p-1 overflow-hidden transition-all hover:-translate-y-2 duration-300 delay-300">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative bg-slate-900/40 backdrop-blur-xl h-full rounded-[20px] p-8 flex flex-col items-end text-right border border-white/5 group-hover:border-orange-500/40 transition-colors">
<div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 text-orange-500">
<iconify-icon icon="lucide:shield-check" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-3 font-sans">
                الأمن السيبراني
              </h3>
<p className="text-gray-400 text-sm leading-6 font-sans">
                حماية أنظمتك من التهديدات الرقمية من خلال اختبارات الاختراق
                وتأمين الشبكات.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="reveal pt-24 pr-6 pb-24 pl-6 relative" id="process">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<span className="text-[#2376DD] font-semibold tracking-wider text-sm uppercase font-sans">
            منهجية العمل
          </span>
<h2 className="text-3xl md:text-5xl text-white mt-2 font-manrope font-medium">
            رحلة مشروعك معنا
          </h2>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent reveal line-grow shadow-[0_0_15px_#2376DD] opacity-50"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">

<div className="flex flex-col items-center text-center group reveal hover:-translate-y-3 transition-transform duration-300">
<div className="w-24 h-24 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_-10px_rgba(35,118,221,0.15)] relative z-10 group-hover:border-[#2376DD] group-hover:shadow-[0_0_50px_-10px_rgba(35,118,221,0.4)] transition-all duration-300">
<iconify-icon className="text-gray-400 group-hover:text-[#2376DD] transition-colors" icon="lucide:clipboard-list" width="32"></iconify-icon>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-[#2376DD] rounded-full flex items-center justify-center text-white text-sm font-bold border-4 border-[#020617] font-sans">
                  1
                </div>
</div>
<h3 className="text-xl font-bold text-white mb-2 font-sans">
                التحليل والتخطيط
              </h3>
<p className="text-gray-400 text-sm px-4 font-sans">
                دراسة المتطلبات ووضع خطة زمنية وهيكلية دقيقة للمشروع.
              </p>
</div>

<div className="flex flex-col items-center text-center group delay-100">
<div className="w-24 h-24 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_-10px_rgba(35,118,221,0.15)] relative z-10 group-hover:border-[#2376DD] group-hover:shadow-[0_0_50px_-10px_rgba(35,118,221,0.4)] transition-all duration-300">
<iconify-icon className="text-gray-400 group-hover:text-[#2376DD] transition-colors" icon="lucide:palette" width="32"></iconify-icon>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-[#2376DD] rounded-full flex items-center justify-center text-white text-sm font-bold border-4 border-[#020617] font-sans">
                  2
                </div>
</div>
<h3 className="text-xl font-bold text-white mb-2 font-sans">
                التصميم والواجهة
              </h3>
<p className="text-gray-400 text-sm px-4 font-sans">
                تصميم واجهات مستخدم عصرية (UI/UX) تضمن سهولة الاستخدام.
              </p>
</div>

<div className="flex flex-col items-center text-center group delay-200">
<div className="w-24 h-24 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_-10px_rgba(35,118,221,0.15)] relative z-10 group-hover:border-[#2376DD] group-hover:shadow-[0_0_50px_-10px_rgba(35,118,221,0.4)] transition-all duration-300">
<iconify-icon className="text-gray-400 group-hover:text-[#2376DD] transition-colors" icon="lucide:code-2" width="32"></iconify-icon>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-[#2376DD] rounded-full flex items-center justify-center text-white text-sm font-bold border-4 border-[#020617] font-sans">
                  3
                </div>
</div>
<h3 className="text-xl font-bold text-white mb-2 font-sans">
                التطوير والبرمجة
              </h3>
<p className="text-gray-400 text-sm px-4 font-sans">
                كتابة أكواد برمجية نظيفة وآمنة باستخدام أحدث التقنيات.
              </p>
</div>

<div className="flex flex-col items-center text-center group delay-300">
<div className="w-24 h-24 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_-10px_rgba(35,118,221,0.15)] relative z-10 group-hover:border-[#2376DD] group-hover:shadow-[0_0_50px_-10px_rgba(35,118,221,0.4)] transition-all duration-300">
<iconify-icon className="text-gray-400 group-hover:text-[#2376DD] transition-colors" icon="lucide:rocket" width="32"></iconify-icon>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-[#2376DD] rounded-full flex items-center justify-center text-white text-sm font-bold border-4 border-[#020617] font-sans">
                  4
                </div>
</div>
<h3 className="text-xl font-bold text-white mb-2 font-sans">
                الإطلاق والدعم
              </h3>
<p className="text-gray-400 text-sm px-4 font-sans">
                نشر المشروع وتقديم دعم فني مستمر لضمان الكفاءة.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 border-t border-white/5 reveal bg-slate-900/30 backdrop-blur-sm border-blue-500/10 shadow-[inset_0_10px_30px_-10px_rgba(0,0,0,0.5)]">
<div className="max-w-7xl mx-auto">
<p className="text-center text-gray-500 text-sm mb-10 font-medium tracking-wide font-sans">
          نفخر بثقة كبرى الشركات والمؤسسات
        </p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 hover:opacity-100 transition-opacity">
<iconify-icon icon="lucide:triangle" width="30"></iconify-icon>
<span className="font-bold text-xl font-sans">Vertex</span>
</div>
<div className="flex items-center gap-2 hover:opacity-100 transition-opacity">
<iconify-icon icon="lucide:hexagon" width="30"></iconify-icon>
<span className="font-bold text-xl font-sans">HexaLab</span>
</div>
<div className="flex items-center gap-2 hover:opacity-100 transition-opacity">
<iconify-icon icon="lucide:circle-dashed" width="30"></iconify-icon>
<span className="font-bold text-xl font-sans">Orbit</span>
</div>
<div className="flex items-center gap-2 hover:opacity-100 transition-opacity">
<iconify-icon icon="lucide:boxes" width="30"></iconify-icon>
<span className="font-bold text-xl font-sans">CubeSys</span>
</div>
<div className="flex items-center gap-2 hover:opacity-100 transition-opacity">
<iconify-icon icon="lucide:infinity" width="30"></iconify-icon>
<span className="font-bold text-xl font-sans">Flow</span>
</div>
</div>
</div>
</section>

<footer className="overflow-hidden bg-[#0b1120]/80 backdrop-blur-2xl border-blue-500/10 border-t mt-12 pt-20 pr-6 pb-8 pl-6 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#2376DD] to-transparent shadow-[0_0_20px_#2376DD] shadow-[0_0_40px_2px_#2376DD] opacity-70"></div>
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-right" dir="rtl">
<div className="space-y-4 reveal">
<div className="flex items-center gap-3 lg:justify-start justify-end rtl-adjust-justify">
<div className="w-10 h-10 bg-[#1e293b] rounded-lg flex items-center justify-center text-[#2376DD] shadow-lg">
<iconify-icon icon="lucide:map-pin" width="20"></iconify-icon>
</div>
<h4 className="font-bold text-xl text-white font-sans">العنوان :</h4>
</div>
<p className="font-medium text-gray-400 pl-14 text-right lg:text-left rtl-adjust-padding font-sans">
              بغداد، العراق، منطقة الكرادة
            </p>
</div>
<div className="space-y-4 delay-100">
<div className="flex items-center gap-3 lg:justify-start justify-end rtl-adjust-justify">
<div className="w-10 h-10 bg-[#1e293b] rounded-lg flex items-center justify-center text-[#2376DD] shadow-lg">
<iconify-icon icon="lucide:phone" width="20"></iconify-icon>
</div>
<h4 className="font-bold text-xl text-white font-sans">الهاتف :</h4>
</div>
<div className="font-quicksand font-medium text-gray-400 flex flex-col pl-14 text-right lg:text-left rtl-adjust-padding">
<span className="font-sans">+964 7714220077</span>
</div>
</div>
<div className="space-y-4 delay-200">
<div className="flex items-center gap-3 lg:justify-start justify-end rtl-adjust-justify">
<div className="w-10 h-10 bg-[#1e293b] rounded-lg flex items-center justify-center text-[#2376DD] shadow-lg">
<iconify-icon icon="lucide:mail" width="20"></iconify-icon>
</div>
<h4 className="font-bold text-xl text-white font-sans">البريد :</h4>
</div>
<div className="font-quicksand font-medium text-gray-400 flex flex-col pl-14 text-right lg:text-left rtl-adjust-padding">
<span className="font-sans">info@nicaea.com</span>
</div>
</div>
<div className="flex flex-col items-center lg:items-start gap-6 delay-300">
<div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-[#020617] rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl">
<span className="font-inter font-bold text-3xl text-white">
<iconify-icon className="" icon="lucide:gem" width="32"></iconify-icon>
</span>
</div>
</div>
</div>
<div className="flex flex-col-reverse md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6">
<p className="text-xs font-semibold text-gray-500 tracking-wider font-jura" style={{}}>
            © 2025 Perfect Quality Co. All Rights Reserved.
          </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0077b5] transition-all duration-300" href="#">
<iconify-icon icon="ant-design:linkedin-filled" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1877F2] transition-all duration-300" href="#">
<iconify-icon icon="ant-design:facebook-filled" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

<div className="ginger-module-highlighter ginger-module-highlighter-ghost" style={{height: '72px', width: '270.672px', position: 'absolute', zIndex: '2147483646', top: '1004px', left: '562.141px'}}></div>
<div className="ginger-module-highlighter ginger-module-highlighter-ghost" style={{height: '200px', width: '386.641px', position: 'absolute', zIndex: '2147483646', top: '261.75px', left: '1315.86px', color: 'rgba(0, 0, 0, 0)', borderRadius: '0px', border: '0px none rgb(255, 255, 255)', boxSizing: 'border-box', padding: '0px', margin: '0px', fontFamily: '"IBM Plex Sans Arabic", sans-serif', direction: 'rtl', fontSize: '80px', textAlign: 'right', letterSpacing: '0px', fontWeight: '700', whiteSpace: 'pre-wrap', overflowWrap: 'break-word', lineHeight: '80px', display: 'block'}}></div>
<div className="ginger-module-highlighter ginger-module-highlighter-ghost" style={{height: '32px', width: '164.594px', position: 'absolute', zIndex: '2147483646', top: '20px', left: '1465.91px', color: 'rgba(0, 0, 0, 0)', borderRadius: '0px', border: '0px none rgb(96, 165, 250)', boxSizing: 'border-box', padding: '0px', margin: '0px', fontFamily: 'Inter, sans-serif', direction: 'rtl', fontSize: '24px', textAlign: 'start', letterSpacing: '-0.6px', fontWeight: '700', whiteSpace: 'pre-wrap', overflowWrap: 'break-word', lineHeight: '32px', display: 'block'}}></div>
<div className="ginger-module-highlighter ginger-module-highlighter-ghost" style={{height: '16px', width: '292px', position: 'absolute', zIndex: '2147483646', top: '3573.5px', left: '1395.86px', color: 'rgba(0, 0, 0, 0)', borderRadius: '0px', border: '0px none rgb(107, 114, 128)', boxSizing: 'border-box', padding: '0px', margin: '0px', fontFamily: 'Jura, sans-serif', direction: 'rtl', fontSize: '12px', textAlign: 'start', letterSpacing: '0.6px', fontWeight: '600', whiteSpace: 'pre-wrap', overflowWrap: 'break-word', lineHeight: '16px', display: 'block'}}></div>

    </>
  );
}
