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
sans: ['Tajawal', 'sans-serif'],
},
colors: {
primary: {
50: '#eef2ff',
100: '#e0e7ff',
500: '#6366f1', // Indigo
600: '#4f46e5',
700: '#4338ca',
900: '#312e81',
},
surface: {
50: '#f8fafc',
100: '#f1f5f9',
200: '#e2e8f0',
900: '#0f172a',
}
},
animation: {
'blob': 'blob 10s infinite',
'fade-in': 'fadeIn 0.6s ease-out forwards',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        function toggleView() {
            const landing = document.getElementById('landing-view');
            const chat = document.getElementById('chat-view');
            const btnText = document.getElementById('toggle-text');
            const body = document.body;

            if (landing.classList.contains('hidden-section')) {
                landing.classList.remove('hidden-section');
                chat.classList.add('hidden-section');
                btnText.textContent = "جرب واجهة المحادثة";
                body.style.overflow = "auto";
            } else {
                landing.classList.add('hidden-section');
                chat.classList.remove('hidden-section');
                btnText.textContent = "العودة للرئيسية";
                body.style.overflow = "hidden"; 
            }
        }

        // Simulating the chat functionality
        function handleSend() {
            const input = document.getElementById('chat-input');
            const text = input.value.trim();
            const welcome = document.getElementById('welcome-state');
            const messagesArea = document.getElementById('messages-area');
            const container = document.getElementById('chat-container');

            if (!text) return;

            // Hide welcome state if visible
            if (welcome) welcome.style.display = 'none';

            // 1. Add User Message
            const userMsgHTML = `
                <div class="flex flex-row-reverse gap-4 group chat-bubble-enter">
                    <div class="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center text-sm font-bold text-slate-600 border border-slate-300 overflow-hidden">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" alt="User">
                    </div>
                    <div class="max-w-[85%] space-y-1">
                        <div class="bg-slate-900 text-white px-8 py-6 rounded-3xl rounded-tl-none shadow-lg text-lg leading-loose">
                            ${text}
                        </div>
                    </div>
                </div>
            `;
            messagesArea.insertAdjacentHTML('beforeend', userMsgHTML);
            input.value = '';

            // Scroll to bottom
            container.scrollTop = container.scrollHeight;

            // 2. Simulate Loading
            const loadingHTML = `
                <div id="loading-indicator" class="flex gap-4 justify-start group chat-bubble-enter">
                    <div class="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center">
                         <iconify-icon icon="lucide:loader-2" width="20" class="animate-spin text-indigo-600"></iconify-icon>
                    </div>
                </div>
            `;
            messagesArea.insertAdjacentHTML('beforeend', loadingHTML);
            container.scrollTop = container.scrollHeight;

            // 3. Simulate AI Response (Correction Mock)
            setTimeout(() => {
                const loader = document.getElementById('loading-indicator');
                if(loader) loader.remove();

                // Create a mock corrected version (just duplicates text but adds styling for demo purposes)
                // In a real app, this would come from the API
                const aiResponseHTML = `
                <div class="flex gap-4 justify-start group chat-bubble-enter">
                    <div class="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex-shrink-0 flex items-center justify-center text-white mt-1 shadow-md shadow-indigo-200">
                        <iconify-icon icon="lucide:sparkles" width="20"></iconify-icon>
                    </div>
                    <div class="max-w-[90%] space-y-4">
                        <div class="bg-white px-8 py-6 rounded-3xl rounded-tr-none shadow-sm border border-slate-200 text-lg leading-loose">
                            <div class="mb-4">
                                <div class="flex items-center gap-2 mb-3">
                                    <span class="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                        <iconify-icon icon="lucide:check" width="14"></iconify-icon>
                                    </span>
                                    <span class="text-sm font-bold text-slate-800">التصحيح المقترح</span>
                                </div>
                                <p class="text-slate-800 text-xl leading-loose">
                                    ${text} <span class="bg-green-100 text-green-700 px-1 rounded font-medium border-b-2 border-green-200 ml-1"> (تمت المراجعة)</span>
                                </p>
                            </div>
                            <hr class="border-slate-100 my-4">
                            <div>
                                <h4 class="text-sm font-bold text-slate-500 mb-3 uppercase tracking-wider">ملاحظات:</h4>
                                <ul class="space-y-2">
                                    <li class="flex gap-3 items-center">
                                        <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                        <span class="text-slate-600 text-sm">النص يبدو سليماً لغوياً.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                messagesArea.insertAdjacentHTML('beforeend', aiResponseHTML);
                container.scrollTop = container.scrollHeight;
            }, 1200);
        }

        // Allow Enter key to send
        document.getElementById('chat-input').addEventListener('keypress', function (e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
            }
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
      

<div className="fixed inset-0 z-0 bg-grid-pattern pointer-events-none"></div>
<div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="absolute top-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
<div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
</div>

<div className="fixed bottom-6 left-6 z-50">
<button className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-full shadow-xl shadow-slate-900/10 border border-slate-700 transition-all text-sm font-medium group" onclick="toggleView()">
<iconify-icon className="group-hover:rotate-180 transition-transform duration-500" icon="lucide:arrow-right-left" strokeWidth="1.5" width="18"></iconify-icon>
<span id="toggle-text">جرب واجهة المحادثة</span>
</button>
</div>

<div className="relative z-10 flex flex-col min-h-screen" id="landing-view">

<header className="w-full glass-header sticky top-0 z-40 transition-all">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2.5 cursor-pointer">
<div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-lg shadow-slate-900/20">
<iconify-icon icon="lucide:sparkles" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-2xl font-bold tracking-tight text-slate-900">صواب</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="text-slate-900 hover:text-primary-600 transition-colors" href="#">الرئيسية</a>
<a className="hover:text-primary-600 transition-colors" href="#features">المميزات</a>
<a className="hover:text-primary-600 transition-colors" href="#">المدونة</a>
<a className="hover:text-primary-600 transition-colors" href="#">الأسعار</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-3" href="#">تسجيل دخول</a>
<button className="bg-primary-600 text-white hover:bg-primary-700 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-primary-600/20 flex items-center gap-2" onclick="toggleView()">
                        ابدأ الآن
                        <iconify-icon icon="lucide:arrow-left" width="16"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative pt-24 pb-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 animate-fade-in relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                        الإصدار الجديد 2.0 متاح الآن
                    </div>
<h1 className="text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-slate-900">
                        اكتب بثقة.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-l from-indigo-600 to-purple-600">صحح بذكاء.</span>
</h1>
<p className="text-xl text-slate-500 leading-relaxed max-w-lg font-normal">
                        مساعدك الذكي للكتابة العربية. يتجاوز التصحيح الإملائي ليفهم السياق، ويقترح صياغات بلاغية دقيقة في ثوانٍ.
                    </p>
<div className="flex flex-wrap items-center gap-4 pt-2">
<button className="h-12 px-8 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium shadow-xl shadow-slate-900/10 transition-all flex items-center gap-2 transform hover:-translate-y-0.5" onclick="toggleView()">
                            جرب المصحح مجاناً
                        </button>
<button className="h-12 px-8 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-medium transition-all flex items-center gap-2 shadow-sm">
<iconify-icon icon="lucide:play-circle" strokeWidth="1.5"></iconify-icon>
                            شاهد العرض
                        </button>
</div>
<div className="pt-4 flex items-center gap-4 text-xs text-slate-400 font-medium">
<span className="flex items-center gap-1"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> لا يحتاج بطاقة ائتمان</span>
<span className="flex items-center gap-1"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> 14 يوم تجربة مجانية</span>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center perspective-1000 animate-fade-in lg:translate-x-10" style={{animationDelay: '0.2s'}}>
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 rounded-[3rem] transform rotate-3 scale-95 blur-3xl"></div>
<div className="w-full max-w-md bg-white rounded-3xl shadow-2xl shadow-indigo-500/10 border border-slate-100 overflow-hidden transform transition-all hover:scale-[1.01] duration-500 animate-float">
<div className="h-12 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
</div>
<div className="ml-auto text-[10px] font-bold text-slate-400 uppercase tracking-widest">Editor</div>
</div>
<div className="p-8 space-y-6">
<div className="space-y-2">
<div className="flex items-center justify-between text-xs text-slate-400 mb-1">
<span>النص الأصلي</span>
<span className="text-red-500">3 أخطاء</span>
</div>
<p className="text-lg text-slate-400 leading-relaxed line-through decoration-red-300 decoration-2">
                                    كان <span className="bg-red-50 text-red-500 px-1 rounded">الاختبار</span> صعبا لكنني <span className="bg-red-50 text-red-500 px-1 rounded">استطعت</span> الاجابة.
                                </p>
</div>
<div className="h-px bg-slate-100 w-full"></div>
<div className="space-y-2">
<div className="flex items-center justify-between text-xs text-slate-400 mb-1">
<span>بعد المعالجة</span>
<span className="text-green-600 flex items-center gap-1"><iconify-icon icon="lucide:sparkles" width="10"></iconify-icon> مصحح</span>
</div>
<p className="text-xl font-medium text-slate-800 leading-relaxed">
                                    كان <span className="bg-green-50 text-green-600 px-1 rounded border border-green-100">الاختبارُ</span> صعباً، لكنني <span className="bg-green-50 text-green-600 px-1 rounded border border-green-100">استطعتُ</span> الإجابة.
                                </p>
</div>
</div>
<div className="bg-slate-50 p-4 text-xs text-center text-slate-500 border-t border-slate-100">
                            تم التحليل وتصحيح الهمزات والتشكيل في 0.12 ثانية
                        </div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-slate-100 bg-white/50 backdrop-blur-sm mb-auto">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm font-semibold text-slate-400 mb-8">يثق بنا أكثر من 10,000 كاتب ومحرر في</p>
<div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-xl font-bold text-slate-700"><iconify-icon className="text-indigo-600" icon="lucide:box"></iconify-icon> TechArabi</div>
<div className="flex items-center gap-2 text-xl font-bold text-slate-700"><iconify-icon className="text-blue-600" icon="lucide:hexagon"></iconify-icon> Bayan</div>
<div className="flex items-center gap-2 text-xl font-bold text-slate-700"><iconify-icon className="text-green-600" icon="lucide:triangle"></iconify-icon> Fusha</div>
<div className="flex items-center gap-2 text-xl font-bold text-slate-700"><iconify-icon className="text-purple-600" icon="lucide:circle"></iconify-icon> Noon</div>
<div className="flex items-center gap-2 text-xl font-bold text-slate-700"><iconify-icon className="text-orange-600" icon="lucide:diamond"></iconify-icon> Rawi</div>
</div>
</div>
</section>

<footer className="bg-surface-900 text-slate-300 pt-16 pb-8 border-t border-slate-800 mt-auto">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4 text-white">
<iconify-icon icon="lucide:sparkles" width="20"></iconify-icon>
<span className="text-xl font-bold">صواب</span>
</div>
<p className="text-sm text-slate-400 leading-relaxed mb-4">
                            نطور مستقبل الكتابة العربية باستخدام أحدث تقنيات الذكاء الاصطناعي.
                        </p>
</div>
<div>
<h4 className="text-white font-bold mb-4">المنتج</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">المميزات</a></li>
<li><a className="hover:text-white transition-colors" href="#">الأسعار</a></li>
<li><a className="hover:text-white transition-colors" href="#">للشركات</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-4">المصادر</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">المدونة</a></li>
<li><a className="hover:text-white transition-colors" href="#">دليل الاستخدام</a></li>
<li><a className="hover:text-white transition-colors" href="#">المجتمع</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-4">الشركة</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">عن صواب</a></li>
<li><a className="hover:text-white transition-colors" href="#">الوظائف</a></li>
<li><a className="hover:text-white transition-colors" href="#">اتصل بنا</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<p>© 2024 صواب AI. جميع الحقوق محفوظة.</p>
<div className="flex gap-4">
<a className="hover:text-white" href="#">سياسة الخصوصية</a>
<a className="hover:text-white" href="#">شروط الاستخدام</a>
</div>
</div>
</div>
</footer>
</div>

<div className="hidden-section relative z-20 h-screen flex flex-col bg-slate-50" id="chat-view">

<header className="h-20 bg-white border-b border-slate-200/80 flex items-center justify-between px-6 shrink-0 z-30 shadow-sm">
<div className="flex items-center gap-4">
<button className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 flex items-center justify-center border border-slate-200 transition-colors" onclick="toggleView()">
<iconify-icon icon="lucide:chevron-right" width="24"></iconify-icon>
</button>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md">
<iconify-icon icon="lucide:bot" width="20"></iconify-icon>
</div>
<div>
<h1 className="text-base font-bold text-slate-900">مساعد صواب</h1>
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs text-slate-500 font-medium">متصل الآن</span>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-2">
<iconify-icon icon="lucide:download" width="18"></iconify-icon>
<span className="hidden sm:inline">تصدير</span>
</button>
<button className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors">
<iconify-icon icon="lucide:more-vertical" width="20"></iconify-icon>
</button>
</div>
</header>

<main className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-10 scroll-smooth" id="chat-container">

<div className="max-w-4xl mx-auto w-full text-center space-y-6 pt-12 pb-8" id="welcome-state">
<div className="w-20 h-20 bg-white rounded-3xl mx-auto flex items-center justify-center text-indigo-600 shadow-xl shadow-indigo-100 border border-indigo-50 mb-6">
<iconify-icon icon="lucide:pen-tool" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<h2 className="text-3xl font-bold text-slate-900">كيف يمكنني مساعدتك اليوم؟</h2>
<div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
<button className="px-5 py-3 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-slate-600 text-sm font-medium shadow-sm transition-all hover:-translate-y-0.5">
                        صحح هذا النص لغوياً 📝
                    </button>
<button className="px-5 py-3 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-slate-600 text-sm font-medium shadow-sm transition-all hover:-translate-y-0.5">
                        أعد صياغة بأسلوب رسمي 👔
                    </button>
<button className="px-5 py-3 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-slate-600 text-sm font-medium shadow-sm transition-all hover:-translate-y-0.5">
                        اشرح لي القاعدة النحوية 📚
                    </button>
</div>
</div>

<div className="max-w-4xl mx-auto w-full space-y-8" id="messages-area"></div>

<div className="h-40"></div>
</main>

<footer className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-md pt-4 pb-8 z-40 px-6 border-t border-slate-200 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
<div className="max-w-4xl mx-auto space-y-4">

<div className="relative group bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/10 transition-all duration-300">
<textarea className="w-full bg-transparent border-0 text-slate-900 placeholder-slate-400 px-6 py-5 text-lg leading-relaxed focus:ring-0 resize-none h-20 max-h-48 scrollbar-hide" id="chat-input" placeholder="اكتب هنا للتدقيق أو اطلب المساعدة..." rows="1"></textarea>
<div className="absolute left-3 bottom-3 flex items-center gap-2">
<button className="p-2.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all" title="إعدادات">
<iconify-icon icon="lucide:sliders-horizontal" width="20"></iconify-icon>
</button>
<div className="h-6 w-px bg-slate-200 mx-1"></div>
<button className="bg-slate-900 text-white p-3 rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 flex items-center justify-center transform hover:scale-105 active:scale-95" onclick="handleSend()">
<iconify-icon className="ml-0.5" icon="lucide:send" width="20"></iconify-icon>
</button>
</div>
</div>
<p className="text-[11px] text-center text-slate-400 font-medium">
                    الذكاء الاصطناعي قد يخطئ أحياناً. يرجى مراجعة المعلومات المهمة.
                </p>
</div>
</footer>
</div>


    </>
  );
}
