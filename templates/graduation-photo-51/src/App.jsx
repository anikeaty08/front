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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Cairo', 'sans-serif'],
},
colors: {
brand: {
primary: '#9B2242',
secondary: '#888B8D',
light: '#F8F9FA',
dark: '#1A1A1A'
}
},
animation: {
'scan': 'scan 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
scan: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(200px)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons();

      const header = document.getElementById('main-header');

      window.addEventListener('scroll', () => {
          if (window.scrollY > 20) {
              header.classList.add('py-2', 'shadow-sm', 'bg-white/90');
              header.classList.remove('py-4', 'bg-white/70');
          } else {
              header.classList.add('py-4', 'bg-white/70');
              header.classList.remove('py-2', 'shadow-sm', 'bg-white/90');
          }
      });

      function startAppFlow() {
          document.querySelectorAll('body > section').forEach(sec => sec.classList.add('hidden'));
          document.getElementById('app-flow').classList.remove('hidden');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          goToStep(1);
      }

      function showLanding() {
          document.getElementById('app-flow').classList.add('hidden');
          document.querySelectorAll('body > section').forEach(sec => sec.classList.remove('hidden'));
      }

      function goToStep(step) {
          for(let i=1; i<=4; i++) {
              const el = document.getElementById('step-' + i);
              if(el) el.classList.add('hidden');
          }

          const target = document.getElementById('step-' + step);
          if(target) {
              target.classList.remove('hidden');
              window.scrollTo({ top: 0, behavior: 'smooth' });

              if(step === 3) {
                  setTimeout(() => {
                      goToStep(4);
                  }, 3000);
              }
          }
      }
    
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
      

<header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/70 backdrop-blur-xl border-b border-gray-200/50 py-4" id="main-header">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center text-white shrink-0 shadow-sm relative overflow-hidden">

<svg className="w-8 h-8 fill-current" viewbox="0 0 100 100">
<path d="M50 10 C27.9 10 10 27.9 10 50 C10 72.1 27.9 90 50 90 C72.1 90 90 72.1 90 50 C90 27.9 72.1 10 50 10 Z" fill="none" stroke="currentColor" strokeWidth="4"></path>
<circle cx="50" cy="50" fill="none" r="15" stroke="currentColor" strokeWidth="4"></circle>
<path d="M50 35 L50 65 M35 50 L65 50 M39.4 39.4 L60.6 60.6 M39.4 60.6 L60.6 39.4" stroke="currentColor" strokeWidth="4"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xl font-semibold tracking-tight text-gray-900 leading-none">
              AUIB
            </span>
<span className="text-xs text-brand-secondary">
              الجامعة الأمريكية في بغداد
            </span>
</div>
</div>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-900 hover:text-brand-primary transition-colors relative group" href="#home" onclick="showLanding()">
            الرئيسية
            <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-primary transition-colors relative group" href="#how-it-works" onclick="showLanding()">
            كيف يعمل النظام
            <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-primary transition-colors relative group" href="#public-gallery" onclick="showLanding()">
            المعرض العام
            <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-primary transition-colors relative group" href="#faq" onclick="showLanding()">
            الأسئلة الشائعة
            <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-primary transition-colors relative group" href="#contact" onclick="showLanding()">
            تواصل معنا
            <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
</a>
</nav>

<div className="flex items-center gap-4">
<button className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-brand-primary text-white text-sm font-medium hover:bg-[#8A1D3A] transition-all duration-300 shadow-md shadow-brand-primary/20 hover:shadow-brand-primary/40 hover:-translate-y-0.5 group" onclick="startAppFlow()">
            احصل على صورك
            <i className="w-4 h-4 mr-2 transition-transform" data-lucide="camera" strokeWidth="1.5"></i>
</button>

<button className="md:hidden p-2 text-gray-600 hover:text-gray-900">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</header>
<div className="hidden pt-28 min-h-screen bg-gray-50 pb-20" id="app-flow">

<div className="max-w-xl mx-auto px-6 pt-12 transition-opacity duration-500" id="step-1">
<div className="text-center mb-8">
<h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2 tracking-tight">
            التعرّف على الوجه
          </h2>
<p className="text-gray-500">الخطوة 1 من 3</p>
</div>
<div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center">
<p className="text-center text-gray-700 font-medium mb-8 leading-relaxed">
            يرجى توجيه الكاميرا نحو وجهك لإجراء عملية التعرّف على صورك.
          </p>
<div className="relative w-64 h-80 bg-gray-900 rounded-2xl overflow-hidden mb-10 shadow-inner">
<img alt="Camera Feed" className="w-full h-full object-cover opacity-80 mix-blend-luminosity" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-6 border-2 border-dashed border-white/40 rounded-full"></div>
<div className="absolute top-0 left-0 w-full h-1 bg-brand-primary shadow-[0_0_15px_rgba(155,34,66,1)] animate-scan z-10"></div>

<div className="absolute top-6 left-6 w-6 h-6 border-t-4 border-l-4 border-brand-primary rounded-tl-lg"></div>
<div className="absolute top-6 right-6 w-6 h-6 border-t-4 border-r-4 border-brand-primary rounded-tr-lg"></div>
<div className="absolute bottom-6 left-6 w-6 h-6 border-b-4 border-l-4 border-brand-primary rounded-bl-lg"></div>
<div className="absolute bottom-6 right-6 w-6 h-6 border-b-4 border-r-4 border-brand-primary rounded-br-lg"></div>
</div>
<button className="w-full py-4 rounded-xl bg-brand-primary text-white font-semibold hover:bg-[#8A1D3A] transition-all shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-2 text-lg" onclick="goToStep(2)">
<i className="w-6 h-6" data-lucide="camera" strokeWidth="1.5"></i>
            التقاط الصورة
          </button>
</div>
</div>

<div className="hidden max-w-xl mx-auto px-6 pt-12 transition-opacity duration-500" id="step-2">
<div className="text-center mb-8">
<h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2 tracking-tight">
            المعلومات الشخصية
          </h2>
<p className="text-gray-500">الخطوة 2 من 3</p>
</div>
<div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
<form className="space-y-6" onsubmit="event.preventDefault(); goToStep(3);">
<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">
                الاسم الكامل
              </label>
<input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all" required="" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">
                  البريد الإلكتروني
                </label>
<input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">
                  رقم الهاتف
                </label>
<input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all" required="" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">
                  الكلية
                </label>
<select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all appearance-none" required="">
<option value="">اختر الكلية</option>
<option value="engineering">كلية الهندسة</option>
<option value="business">كلية الأعمال</option>
<option value="arts">كلية الآداب</option>
</select>
</div>
<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">
                  القسم
                </label>
<input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">
                سنة التخرج
              </label>
<select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all appearance-none" required="">
<option value="2024">2024</option>
<option value="2023">2023</option>
</select>
</div>
<div className="pt-6 flex gap-4">
<button className="w-1/3 py-4 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-all flex items-center justify-center" onclick="goToStep(1)" type="button">
                رجوع
              </button>
<button className="w-2/3 py-4 rounded-xl bg-brand-primary text-white font-semibold hover:bg-[#8A1D3A] transition-all shadow-lg shadow-brand-primary/20 flex items-center justify-center text-lg" type="submit">
                متابعة
              </button>
</div>
</form>
</div>
</div>

<div className="hidden max-w-md mx-auto px-6 pt-32 text-center transition-opacity duration-500" id="step-3">
<div className="w-24 h-24 mx-auto mb-8 relative">
<div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
<div className="absolute inset-0 border-4 border-brand-primary rounded-full border-t-transparent animate-spin"></div>
<i className="w-8 h-8 text-brand-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" data-lucide="image"></i>
</div>
<h2 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
          جاري البحث عن صورك في قاعدة البيانات...
        </h2>
<p className="text-gray-500 leading-relaxed">
          يرجى الانتظار للحظات، نقوم بمطابقة ملامحك مع مئات الصور باستخدام
          الذكاء الاصطناعي.
        </p>
</div>

<div className="hidden max-w-7xl mx-auto px-6 pt-12 transition-opacity duration-500" id="step-4">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
<div>
<h2 className="text-3xl font-semibold text-gray-900 tracking-tight mb-2">
              معرض صورك الخاص
            </h2>
<p className="text-gray-500">
              مرحباً أحمد، لقد وجدنا 12 صورة مطابقة لك.
            </p>
</div>
<div className="flex flex-wrap items-center gap-3">
<button className="px-5 py-2.5 border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="filter" strokeWidth="1.5"></i>
              تصفية الصور
            </button>
<button className="px-5 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-black flex items-center gap-2 shadow-md">
<i className="w-4 h-4" data-lucide="shopping-cart" strokeWidth="1.5"></i>
              شراء الألبوم بالكامل
            </button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 -rotate-12">
<span className="text-4xl md:text-5xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-widest uppercase">
                  AUIB Preview
                </span>
</div>

<div className="absolute inset-0 bg-gray-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
<button className="w-12 h-12 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors shadow-lg">
<i className="w-5 h-5" data-lucide="expand" strokeWidth="1.5"></i>
</button>
</div>

<div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
<i className="w-3 h-3" data-lucide="lock"></i>
                صورة غير مشتراة
              </div>
</div>
<div className="p-5 flex justify-between items-center bg-white">
<div>
<div className="text-sm font-semibold text-gray-900 mb-1">
                  لقطة استلام الشهادة
                </div>
<div className="text-xs text-gray-500">دقة عالية • 5,000 د.ع</div>
</div>
<button className="text-brand-primary hover:text-[#8A1D3A] font-semibold text-sm flex items-center gap-1.5 px-4 py-2 bg-brand-primary/10 rounded-lg transition-colors">
                شراء
                <i className="w-4 h-4" data-lucide="shopping-bag"></i>
</button>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gray-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
<button className="w-12 h-12 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors shadow-lg">
<i className="w-5 h-5" data-lucide="download" strokeWidth="1.5"></i>
</button>
</div>

<div className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
<i className="w-3 h-3" data-lucide="unlock"></i>
                مجانية
              </div>
</div>
<div className="p-5 flex justify-between items-center bg-white">
<div>
<div className="text-sm font-semibold text-gray-900 mb-1">
                  صورة جماعية (الدفعة)
                </div>
<div className="text-xs text-gray-500">متاحة للتحميل الفوري</div>
</div>
<button className="text-gray-900 hover:text-brand-primary font-semibold text-sm flex items-center gap-1.5 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                تحميل
                <i className="w-4 h-4" data-lucide="download"></i>
</button>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 -rotate-12">
<span className="text-4xl md:text-5xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-widest uppercase">
                  AUIB Preview
                </span>
</div>
<div className="absolute inset-0 bg-gray-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
<button className="w-12 h-12 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors shadow-lg">
<i className="w-5 h-5" data-lucide="expand" strokeWidth="1.5"></i>
</button>
</div>
<div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
<i className="w-3 h-3" data-lucide="lock"></i>
                صورة غير مشتراة
              </div>
</div>
<div className="p-5 flex justify-between items-center bg-white">
<div>
<div className="text-sm font-semibold text-gray-900 mb-1">
                  بورتريه الخريج الرسمي
                </div>
<div className="text-xs text-gray-500">دقة عالية • 5,000 د.ع</div>
</div>
<button className="text-brand-primary hover:text-[#8A1D3A] font-semibold text-sm flex items-center gap-1.5 px-4 py-2 bg-brand-primary/10 rounded-lg transition-colors">
                شراء
                <i className="w-4 h-4" data-lucide="shopping-bag"></i>
</button>
</div>
</div>
</div>
<div className="mt-16 text-center">
<button className="px-8 py-3 border border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2" onclick="showLanding()">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
            العودة للصفحة الرئيسية
          </button>
</div>
</div>
</div>

<section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-light" id="home">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/5 to-transparent"></div>
<div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-brand-primary/10 blur-[100px]"></div>
<div className="absolute bottom-[10%] -left-[10%] w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[100px]"></div>

<svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="grid-pattern" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"></path>
</pattern>
</defs>
<rect fill="url(#grid-pattern)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="w-full lg:w-1/2 text-center lg:text-right">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-8 animate-fade-in">
<span className="flex h-2 w-2 rounded-full bg-green-500 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
</span>
<span className="text-xs font-medium text-gray-600">
                النظام متاح الآن لخريجي دفعة 2024
              </span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-gray-900 tracking-tight leading-[1.1] mb-6">
              اكتشف صور تخرجك خلال
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-primary to-[#D43B62]">
                ثوانٍ معدودة
              </span>
</h1>
<p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              باستخدام أحدث تقنيات الذكاء الاصطناعي والتعرّف على الوجه، يمكنك
              الآن الوصول إلى جميع صورك من حفل التخرج بسهولة وبجودة عالية.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-primary text-white text-base font-semibold hover:bg-[#8A1D3A] transition-all shadow-lg shadow-brand-primary/30 flex items-center justify-center gap-2 group" onclick="startAppFlow()">
<i className="w-5 h-5" data-lucide="scan-face" strokeWidth="1.5"></i>
                احصل على صورك
              </button>
<a className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-gray-700 border border-gray-200 text-base font-semibold hover:bg-gray-50 transition-all flex items-center justify-center" href="#public-gallery" onclick="showLanding()">
                المعرض العام
              </a>
</div>
<div className="mt-12 flex items-center justify-center lg:justify-start gap-6 text-gray-500">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-green-600" data-lucide="shield-check" strokeWidth="1.5"></i>
<span className="text-sm">آمن وخاص</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-amber-500" data-lucide="zap" strokeWidth="1.5"></i>
<span className="text-sm">نتائج فورية</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-blue-500" data-lucide="image" strokeWidth="1.5"></i>
<span className="text-sm">دقة عالية</span>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px] flex items-center justify-center">
<div className="relative w-full max-w-md animate-float">

<div className="relative z-20 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100 aspect-[3/4] rotate-2 transition-transform hover:rotate-0 duration-500">
<img alt="Graduation" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6">
<div className="w-16 h-16 rounded-lg border-2 border-green-400 absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
<div className="w-full h-0.5 bg-green-400 absolute top-0 animate-scan shadow-[0_0_8px_rgba(74,222,128,0.8)]"></div>
</div>
<div className="bg-white/20 backdrop-blur-md rounded-lg p-3 border border-white/30 flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
<span className="text-white text-sm font-medium tracking-wide">
                      تم التعرف على 12 صورة
                    </span>
</div>
</div>
</div>

<div className="absolute top-10 -right-12 w-40 aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white z-10 -rotate-6 opacity-80">
<img alt="Student" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-10 -left-10 w-48 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white z-30 rotate-6">
<img alt="Ceremony" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4">
            كيف يعمل النظام؟
          </h2>
<p className="text-lg text-gray-500 max-w-2xl mx-auto">
            أربع خطوات بسيطة تفصلك عن ألبوم ذكرياتك الكامل
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">

<div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 shadow-sm group-hover:-translate-y-2 group-hover:shadow-md transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center">
<i className="w-6 h-6" data-lucide="qr-code" strokeWidth="1.5"></i>
</div>
</div>
<span className="text-4xl font-semibold text-gray-100 absolute top-4 right-1/2 translate-x-1/2 -z-10 select-none">
              01
            </span>
<h3 className="text-xl font-medium text-gray-900 mb-2">امسح رمز QR</h3>
<p className="text-sm text-gray-500">
              قم بتوجيه كاميرا هاتفك نحو الرمز الموزع في قاعة الحفل.
            </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 shadow-sm group-hover:-translate-y-2 group-hover:shadow-md transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center">
<i className="w-6 h-6" data-lucide="clipboard-list" strokeWidth="1.5"></i>
</div>
</div>
<span className="text-4xl font-semibold text-gray-100 absolute top-4 right-1/2 translate-x-1/2 -z-10 select-none">
              02
            </span>
<h3 className="text-xl font-medium text-gray-900 mb-2">
              أدخل معلوماتك
            </h3>
<p className="text-sm text-gray-500">
              سجل بياناتك الأكاديمية الأساسية لإنشاء ملفك الشخصي.
            </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 shadow-sm group-hover:-translate-y-2 group-hover:shadow-md transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center relative overflow-hidden">
<i className="w-6 h-6" data-lucide="camera" strokeWidth="1.5"></i>
<div className="absolute inset-0 bg-brand-primary/20 animate-pulse-slow"></div>
</div>
</div>
<span className="text-4xl font-semibold text-gray-100 absolute top-4 right-1/2 translate-x-1/2 -z-10 select-none">
              03
            </span>
<h3 className="text-xl font-medium text-gray-900 mb-2">
              التقط صورة لوجهك
            </h3>
<p className="text-sm text-gray-500">
              صورة سيلفي سريعة لنظام الذكاء الاصطناعي للبحث عنك.
            </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 shadow-sm group-hover:-translate-y-2 group-hover:shadow-md transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center shadow-md shadow-brand-primary/30">
<i className="w-6 h-6" data-lucide="images" strokeWidth="1.5"></i>
</div>
</div>
<span className="text-4xl font-semibold text-gray-100 absolute top-4 right-1/2 translate-x-1/2 -z-10 select-none">
              04
            </span>
<h3 className="text-xl font-medium text-gray-900 mb-2">
              شاهد صورك فوراً
            </h3>
<p className="text-sm text-gray-500">
              تصفح، حمل، وشارك ألبومك الخاص بكل سهولة.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-900 relative overflow-hidden">

<div className="absolute inset-0">
<div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(155,34,66,0.15),transparent_50%)]"></div>
<div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1),transparent_50%)]"></div>
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
              ابتكار رقمي لتجربة لا تُنسى
            </h2>
<p className="text-lg text-gray-400 mb-10 leading-relaxed">
              نستخدم خوارزميات متقدمة في معالجة الصور لضمان دقة وسرعة لا مثيل
              لها. لم يعد هناك حاجة للبحث اليدوي بين آلاف الصور.
            </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-brand-primary/20 text-brand-primary flex items-center justify-center mb-4">
<i className="w-5 h-5 text-white" data-lucide="cpu" strokeWidth="1.5"></i>
</div>
<h4 className="text-base font-medium text-white mb-2">
                  تقنية التعرّف على الوجه
                </h4>
<p className="text-sm text-gray-400">
                  دقة تصل إلى 99.8% في مطابقة الوجوه حتى في التجمعات الكبيرة.
                </p>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
<i className="w-5 h-5 text-white" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<h4 className="text-base font-medium text-white mb-2">
                  تنظيم الصور تلقائياً
                </h4>
<p className="text-sm text-gray-400">
                  تصنيف ذكي للصور الفردية والجماعية ولقطات استلام الشهادة.
                </p>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center mb-4">
<i className="w-5 h-5 text-white" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h4 className="text-base font-medium text-white mb-2">
                  معالجة الصور الذكية
                </h4>
<p className="text-sm text-gray-400">
                  تحسين تلقائي للإضاءة والألوان لضمان أفضل جودة للطباعة.
                </p>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
<i className="w-5 h-5 text-white" data-lucide="smartphone" strokeWidth="1.5"></i>
</div>
<h4 className="text-base font-medium text-white mb-2">
                  تجربة استخدام متطورة
                </h4>
<p className="text-sm text-gray-400">
                  واجهة سلسة متوافقة بالكامل مع جميع الأجهزة المحمولة.
                </p>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
<div className="relative w-full max-w-lg aspect-square">
<div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-gray-800/80 backdrop-blur-xl border border-gray-700 rounded-3xl shadow-2xl p-6 flex flex-col">
<div className="flex items-center justify-between mb-6 border-b border-gray-700 pb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
<i className="w-5 h-5 text-gray-400" data-lucide="user" strokeWidth="1.5"></i>
</div>
<div>
<div className="h-2.5 w-24 bg-gray-600 rounded-full mb-2"></div>
<div className="h-2 w-16 bg-gray-700 rounded-full"></div>
</div>
</div>
<div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
<i className="w-4 h-4 text-green-400" data-lucide="check" strokeWidth="2"></i>
</div>
</div>
<div className="flex-1 grid grid-cols-3 gap-3">
<div className="col-span-2 rounded-xl bg-gray-700/50 animate-pulse"></div>
<div className="col-span-1 rounded-xl bg-gray-700/50 animate-pulse" style={{animationDelay: '100ms'}}></div>
<div className="col-span-1 rounded-xl bg-gray-700/50 animate-pulse" style={{animationDelay: '200ms'}}></div>
<div className="col-span-2 rounded-xl bg-gray-700/50 animate-pulse" style={{animationDelay: '300ms'}}></div>
</div>
<div className="mt-4 pt-4 border-t border-gray-700">
<div className="h-8 w-full bg-brand-primary rounded-lg flex items-center justify-center">
<div className="h-2 w-16 bg-white/50 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="py-24 bg-white border-y border-gray-200" id="public-gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
<div>
<span className="text-sm font-semibold tracking-wider text-brand-primary uppercase mb-2 block">
              لقطات مميزة
            </span>
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4">
              المعرض العام
            </h2>
<p className="text-lg text-gray-500 max-w-xl">
              استعرض أبرز اللقطات من حفل التخرج، بجودة عالية تعكس أهمية هذه
              اللحظة التاريخية لطلابنا.
            </p>
</div>

<div className="flex flex-wrap gap-2">
<button className="px-5 py-2.5 rounded-full bg-brand-primary text-white text-sm font-semibold shadow-md shadow-brand-primary/20 transition-transform hover:-translate-y-0.5">
              الكل
            </button>
<button className="px-5 py-2.5 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 text-sm font-semibold transition-all hover:-translate-y-0.5">
              استلام الشهادات
            </button>
<button className="px-5 py-2.5 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 text-sm font-semibold transition-all hover:-translate-y-0.5">
              لقطات جماعية
            </button>
<button className="px-5 py-2.5 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 text-sm font-semibold transition-all hover:-translate-y-0.5">
              أجواء الحفل
            </button>
</div>
</div>
<div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid rounded-2xl overflow-hidden group relative bg-gray-100 shadow-sm cursor-pointer">
<img className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-white text-lg font-semibold mb-1">
                لحظة التتويج
              </span>
<span className="text-white/80 text-sm flex items-center gap-1">
<i className="w-3 h-3" data-lucide="tag"></i>
                استلام الشهادات
              </span>
</div>
</div>
<div className="break-inside-avoid rounded-2xl overflow-hidden group relative bg-gray-100 shadow-sm cursor-pointer">
<img className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-white text-lg font-semibold mb-1">
                فرحة التخرج
              </span>
<span className="text-white/80 text-sm flex items-center gap-1">
<i className="w-3 h-3" data-lucide="tag"></i>
                لقطات جماعية
              </span>
</div>
</div>
<div className="break-inside-avoid rounded-2xl overflow-hidden group relative bg-gray-100 shadow-sm cursor-pointer">
<img className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-white text-lg font-semibold mb-1">
                الأصدقاء
              </span>
<span className="text-white/80 text-sm flex items-center gap-1">
<i className="w-3 h-3" data-lucide="tag"></i>
                أجواء الحفل
              </span>
</div>
</div>
<div className="break-inside-avoid rounded-2xl overflow-hidden group relative bg-gray-100 shadow-sm cursor-pointer">
<img className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-white text-lg font-semibold mb-1">
                نظرة للمستقبل
              </span>
<span className="text-white/80 text-sm flex items-center gap-1">
<i className="w-3 h-3" data-lucide="tag"></i>
                أجواء الحفل
              </span>
</div>
</div>
<div className="break-inside-avoid rounded-2xl overflow-hidden group relative bg-gray-100 shadow-sm cursor-pointer">
<img className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-white text-lg font-semibold mb-1">التكريم</span>
<span className="text-white/80 text-sm flex items-center gap-1">
<i className="w-3 h-3" data-lucide="tag"></i>
                استلام الشهادات
              </span>
</div>
</div>
</div>
<div className="mt-12 text-center">
<button className="px-8 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
            تحميل المزيد من الصور
            <i className="w-4 h-4" data-lucide="refresh-cw"></i>
</button>
</div>
</div>
</section>

<section className="py-24 bg-brand-light border-y border-gray-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-3">
              الوصول السريع
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              لا حاجة للانتظار لأيام. صورك متاحة للتصفح والتحميل فور انتهاء
              الحفل مباشرة.
            </p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="download-cloud" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-3">
              جودة عالية للطباعة
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              تنزيل الصور بدقة الاستوديو الأصلية، جاهزة للطباعة والتأطير بوضوح
              فائق.
            </p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="lock" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-3">
              خصوصية تامة
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              أنت فقط من يستطيع رؤية صورك الفردية بفضل نظام المطابقة البيومترية
              الآمن.
            </p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="share-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-3">
              مشاركة سهلة
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              شارك فرحتك مع العائلة والأصدقاء عبر منصات التواصل الاجتماعي بنقرة
              واحدة.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4">
            خيارات الحصول على الصور
          </h2>
<p className="text-lg text-gray-500 max-w-2xl mx-auto">
            اختر الباقة التي تناسبك للاحتفاظ بأجمل لحظات التخرج
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">

<div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
<h3 className="text-xl font-medium text-gray-900 mb-2">صور مجانية</h3>
<p className="text-sm text-gray-500 mb-6 min-h-[40px]">
              تصفح جميع صورك مع علامة مائية للمعاينة.
            </p>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold text-gray-900">مجاناً</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-600">
<i className="w-4 h-4 text-green-500" data-lucide="check" strokeWidth="2"></i>
                تصفح غير محدود
              </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<i className="w-4 h-4 text-green-500" data-lucide="check" strokeWidth="2"></i>
                بحث بالذكاء الاصطناعي
              </li>
<li className="flex items-center gap-3 text-sm text-gray-400">
<i className="w-4 h-4" data-lucide="x" strokeWidth="2"></i>
                بدون علامة مائية
              </li>
</ul>
<button className="w-full py-3 px-4 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors text-sm">
              ابدأ التصفح
            </button>
</div>

<div className="bg-gray-900 rounded-3xl p-8 shadow-2xl relative transform md:-translate-y-4 border border-gray-800">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide">
              الأكثر طلباً
            </div>
<h3 className="text-xl font-medium text-white mb-2">الباقة الشاملة</h3>
<p className="text-sm text-gray-400 mb-6 min-h-[40px]">
              احصل على جميع صورك الفردية والجماعية بجودة عالية.
            </p>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white">25,000</span>
<span className="text-sm text-gray-400">دينار</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-brand-primary" data-lucide="check" strokeWidth="2"></i>
                تنزيل جميع الصور
              </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-brand-primary" data-lucide="check" strokeWidth="2"></i>
                جودة فائقة للطباعة
              </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-brand-primary" data-lucide="check" strokeWidth="2"></i>
                بدون علامة مائية
              </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-brand-primary" data-lucide="check" strokeWidth="2"></i>
                الاحتفاظ بالصور لمدة عام
              </li>
</ul>
<button className="w-full py-3 px-4 rounded-xl bg-brand-primary text-white font-medium hover:bg-[#7A1933] transition-colors shadow-lg shadow-brand-primary/20 text-sm">
              شراء الألبوم الكامل
            </button>
</div>

<div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
<h3 className="text-xl font-medium text-gray-900 mb-2">صورة واحدة</h3>
<p className="text-sm text-gray-500 mb-6 min-h-[40px]">
              شراء لقطات محددة تختارها بنفسك.
            </p>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold text-gray-900">5,000</span>
<span className="text-sm text-gray-500">دينار / للصورة</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-600">
<i className="w-4 h-4 text-green-500" data-lucide="check" strokeWidth="2"></i>
                جودة فائقة
              </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<i className="w-4 h-4 text-green-500" data-lucide="check" strokeWidth="2"></i>
                بدون علامة مائية
              </li>
<li className="flex items-center gap-3 text-sm text-gray-400">
<i className="w-4 h-4" data-lucide="x" strokeWidth="2"></i>
                تنزيل ألبوم كامل
              </li>
</ul>
<button className="w-full py-3 px-4 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors text-sm">
              اختيار الصور
            </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-200" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-gray-900 tracking-tight mb-4">
            الأسئلة الشائعة
          </h2>
</div>
<div className="space-y-4">

<details className="group bg-white rounded-xl border border-gray-200 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-gray-900 text-base">
              متى ستكون صوري متاحة في النظام؟
              <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-gray-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
              يتم رفع ومعالجة الصور بشكل مستمر أثناء الحفل. عادةً ما تتوفر صورك
              خلال ساعة واحدة من التقاطها بواسطة المصورين.
            </div>
</details>

<details className="group bg-white rounded-xl border border-gray-200 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-gray-900 text-base">
              هل يمكن لأي شخص آخر رؤية صوري الفردية؟
              <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-gray-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
              لا، النظام يستخدم تقنية التعرّف على الوجه ليعرض لك فقط الصور التي
              تظهر فيها، أو الصور الجماعية العامة للدفعة، لضمان خصوصيتك.
            </div>
</details>

<details className="group bg-white rounded-xl border border-gray-200 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-gray-900 text-base">
              كيف يمكنني الدفع مقابل الصور؟
              <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-gray-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
              ندعم كافة بوابات الدفع الإلكتروني المحلية والدولية (ZainCash,
              Master Card, Visa). يمكنك إتمام عملية الدفع بأمان من داخل المنصة.
            </div>
</details>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-brand-primary">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
          جاهز لاسترجاع ذكريات التخرج؟
        </h2>
<p className="text-lg text-white/80 mb-10">
          امسح الكود الخاص بك أو ابدأ البحث الآن لتجد نفسك بين آلاف اللحظات
          الموثقة.
        </p>
<button className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-brand-primary text-base font-semibold hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-1" onclick="startAppFlow()">
          احصل على صورك
        </button>
</div>
</section>

<footer className="bg-gray-900 pt-16 pb-8 border-t border-gray-800" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
<svg className="w-6 h-6 fill-current" viewbox="0 0 100 100">
<path d="M50 10 C27.9 10 10 27.9 10 50 C10 72.1 27.9 90 50 90 C72.1 90 90 72.1 90 50 C90 27.9 72.1 10 50 10 Z" fill="none" stroke="currentColor" strokeWidth="4"></path>
<circle cx="50" cy="50" fill="none" r="15" stroke="currentColor" strokeWidth="4"></circle>
<path d="M50 35 L50 65 M35 50 L65 50 M39.4 39.4 L60.6 60.6 M39.4 60.6 L60.6 39.4" stroke="currentColor" strokeWidth="4"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-lg font-semibold tracking-tight text-white leading-none">
                AUIB
              </span>
<span className="text-[10px] text-gray-400">
                الجامعة الأمريكية في بغداد
              </span>
</div>
</div>
<div className="flex gap-6">
<a className="text-gray-400 hover:text-white transition-colors text-sm" href="#">
              الشروط والأحكام
            </a>
<a className="text-gray-400 hover:text-white transition-colors text-sm" href="#">
              سياسة الخصوصية
            </a>
<a className="text-gray-400 hover:text-white transition-colors text-sm" href="#">
              الدعم الفني
            </a>
</div>
</div>
<div className="text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
          © 2024 الجامعة الأمريكية في بغداد. جميع الحقوق محفوظة. تم تطوير
          النظام بواسطة قسم تقنية المعلومات.
        </div>
</div>
</footer>



    </>
  );
}
