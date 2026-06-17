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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
'sans': ['Inter', 'system-ui', 'sans-serif'],
},
colors: {
lavender: {
light: '#E6E6FA', // Lavender
DEFAULT: '#B57EDC', // Medium Lavender
dark: '#8674A1',  // Darker Lavender
},
ghostwhite: '#F8F8FF',
lavenderblush: '#FFF0F5',
}
}
}
}



    lucide.createIcons();
    
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);
    
    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
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
      

<header className="fixed w-full z-50 glass-border fade-in">
<div className="max-w-6xl flex items-center justify-between mr-auto ml-auto pt-4 pr-6 pb-4 pl-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-lavender bg-[url(https://images.unsplash.com/photo-1636690581110-a512fed05fd3?w=1080&amp;q=80)] bg-cover rounded-md"></div>
<span className="font-medium text-slate-900">Группа компаний Шанс</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
<a className="hover:text-white transition-colors text-slate-900" href="#about">О нас</a>
<a className="hover:text-white transition-colors text-slate-900" href="#services">Что такое социальная ответственность?</a>
<a className="hover:text-white transition-colors text-slate-900" href="#projects">Компании</a>
<a className="hover:text-white transition-colors text-slate-900" href="#projects">Проекты</a>
<a className="hover:text-white transition-colors text-slate-900" href="#contact">Контакты</a>
</nav>
<button className="md:hidden p-2 rounded-md hover:bg-lavender/10">
<svg className="lucide lucide-menu w-5 h-5 text-slate-900" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</header>

<section className="min-h-screen flex flex-col justify-center items-center bg-[url(https://images.unsplash.com/photo-1634655377962-e6e7b446e7e9?w=2160&amp;q=80)] bg-cover pt-16 pr-6 pl-6">
<div className="w-20 h-20 rounded-2xl overflow-hidden mb-8 glass-border blur-in delay-200">
<img alt="Jane Doe" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1636690598773-c50645a47aeb?w=1080&amp;q=80"/>
</div>
<h1 className="md:text-7xl slide-up delay-400 text-4xl font-normal text-slate-500 tracking-tighter font-serif text-center mb-4">Группа Компаний Шанс</h1>
<p className="max-w-md fade-in delay-600 text-2xl text-gray-800 text-center mb-12">построить общество успешно, финансово в том числе, которое хочет помогать</p>
<div className="flex items-center gap-4">
<a className="glass-border hover:bg-white/5 transition-all flex items-center gap-2 slide-left delay-800 text-sm font-medium rounded-lg pt-2 pr-6 pb-2 pl-6" href="#services">
                Проекты
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="hover:text-white transition-colors flex items-center gap-2 slide-right delay-1000 text-sm text-slate-800 pt-2 pr-6 pb-2 pl-6" href="#contact">
                Контакты
                <svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
</div>
</section>

<section className="py-24 bg-ghostwhite" id="about">
<div className="max-w-5xl mx-auto px-6">
<div className="flex items-center gap-3 animate-on-scroll mb-12 in-view">
<svg className="lucide lucide-users w-5 h-5 text-lavender-dark" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<h2 className="text-xl font-medium text-black">О нас</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="animate-on-scroll rounded-xl overflow-hidden shadow-md in-view">
<img alt="Our Team" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&amp;q=80"/>
</div>
<div className="space-y-6 animate-on-scroll in-view">
<h3 className="text-2xl font-medium text-slate-900 tracking-tight">Наша миссия</h3>
<p className="leading-relaxed text-gray-700">
                        Группа компаний Шанс объединяет организации, стремящиеся к социальной ответственности и созданию устойчивого положительного влияния на общество. Мы верим, что успешный бизнес должен не только приносить прибыль, но и способствовать благополучию общества.
                    </p>
<p className="leading-relaxed text-gray-700">
                        Наша цель - построить общество, где финансовый успех является средством для оказания помощи и поддержки тем, кто в этом нуждается. Мы стремимся создать экосистему компаний, которые являются примером социальной ответственности и устойчивого развития.
                    </p>
<div className="pt-4">
<a className="btn-primary" href="#services">
                            Узнать больше
                            <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24" id="services">
<div className="max-w-5xl mr-auto ml-auto pr-6 pl-6">
<div className="flex items-center gap-3 animate-on-scroll mb-12 in-view">
<svg className="lucide lucide-info w-5 h-5 text-indigo-600" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<h2 className="text-xl font-medium">Что значит социально ответственный?</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="hover:shadow-lg transition-all group animate-on-scroll bg-white rounded-xl p-6 shadow-md border border-gray-100 in-view">
<div className="bg-indigo-100 rounded-xl w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-all duration-300">
<svg className="lucide lucide-heart-pulse w-5 h-5 text-indigo-600" data-lucide="heart-pulse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg>
</div>
<h3 className="group-hover:text-indigo-600 transition-colors duration-300 text-lg font-medium mb-3">
            Быть здоровым как часть социальной ответственности
          </h3>
<p className="leading-relaxed text-sm text-gray-600">
            Здоровый человек следит за своим состоянием здоровья, меньше обращается в медицинские учреждения. В результате медицина уделяет внимание на действительно важные дела.
          </p>
</div>

<div className="hover:shadow-lg transition-all group animate-on-scroll bg-white rounded-xl p-6 shadow-md border border-gray-100 in-view">
<div className="bg-indigo-100 rounded-xl w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-all duration-300">
<svg className="lucide lucide-wallet w-5 h-5 text-indigo-600" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<h3 className="group-hover:text-indigo-600 transition-colors duration-300 text-lg font-medium mb-3">
            Быть богатым как часть социальной ответственности
          </h3>
<p className="leading-relaxed text-sm text-gray-600">
            Обеспечение себя, своей семьи и близких - это наша ответственность, чтобы в непредвиденной ситуации не быть на обеспечении государства. Большие возможности дают силы делать и помогать больше.
          </p>
</div>

<div className="hover:shadow-lg transition-all group animate-on-scroll bg-white rounded-xl p-6 shadow-md border border-gray-100 in-view">
<div className="bg-indigo-100 rounded-xl w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-all duration-300">
<svg className="lucide lucide-briefcase w-5 h-5 text-indigo-600" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<h3 className="group-hover:text-indigo-600 transition-colors duration-300 text-lg font-medium mb-3">
            Эффективно работать как часть социальной ответственности
          </h3>
<p className="leading-relaxed text-sm text-gray-600">
            Быть социально ответственным на работе означает не только выполнять свои прямые обязанности, но и учитывать влияние своей работы на коллег, компанию и общество в целом. Относится к ресурсам, времени и имуществу компании бережно.
          </p>
</div>

<div className="hover:shadow-lg transition-all group animate-on-scroll bg-white rounded-xl p-6 shadow-md border border-gray-100 in-view">
<div className="bg-indigo-100 rounded-xl w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-all duration-300">
<svg className="lucide lucide-helping-hand w-[20px] h-[20px]" data-lucide="helping-hand" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(79, 70, 229)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14"></path><path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path><path d="m2 13 6 6"></path></svg>
</div>
<h3 className="group-hover:text-indigo-600 transition-colors duration-300 text-lg font-medium mb-3">
            Помощь должна быть социально ответственной
          </h3>
<p className="leading-relaxed text-sm text-gray-600">
            Помощь должна быть направлена на реальные потребности общества и учитывать интересы тех, кому она предназначена. Социальная ответственность подразумевает осознание влияния своих действий на окружающих.
          </p>
</div>

<div className="hover:shadow-lg transition-all group animate-on-scroll in-view bg-white border-gray-100 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-md">
<div className="bg-indigo-100 rounded-xl w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-all duration-300">
<svg className="w-[20px] h-[20px]" data-lucide="community" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(79, 70, 229)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<h3 className="group-hover:text-indigo-600 transition-colors duration-300 text-lg font-medium mb-3">Приносить пользу как часть социальной ответственности</h3>
<p className="leading-relaxed text-sm text-gray-600">Постоянно думать где еще можно принести пользу с теми возможностями, что есть на сейчас</p>
</div>

<div className="hover:shadow-lg transition-all group animate-on-scroll in-view bg-white border-gray-100 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-md">
<div className="w-12 h-12 flex group-hover:bg-indigo-200 transition-all duration-300 bg-indigo-100 rounded-xl mb-6 items-center justify-center">
<svg className="w-[20px] h-[20px]" data-lucide="seedling" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(79, 70, 229)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"></path><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"></path><path d="m14 16-3 3 3 3"></path><path d="M8.293 13.596 7.196 9.5 3.1 10.598"></path><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"></path><path d="m13.378 9.633 4.096 1.098 1.097-4.096"></path></svg>
</div>
<h3 className="group-hover:text-indigo-600 transition-colors duration-300 text-lg font-medium mb-3">
            Экологическая осознанность
          </h3>
<p className="leading-relaxed text-sm text-gray-600">
            Забота об окружающей среде, рациональное использование ресурсов и минимизация негативного воздействия на природу как часть нашей ответственности перед будущими поколениями.
          </p>
</div>
</div>

<div className="animate-on-scroll text-center mt-16 in-view">
<a className="inline-flex items-center justify-center group" href="#projects">
<span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6366F1_0%,#8B5CF6_50%,#6366F1_100%)]"></span>
<div className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-indigo-700 bg-white rounded-full shadow-md relative group-hover:bg-indigo-50 transition-all duration-300">
<span className="mr-2">Наши проекты</span>
<svg className="lucide lucide-arrow-down w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
</span>
</a>
</div>
</div>
</section>

<section className="bg-gray-50 pt-24 pb-24" id="projects">
<div className="max-w-5xl mr-auto ml-auto pr-6 pl-6">
<div className="flex gap-3 animate-on-scroll in-view mb-12 items-center">
<svg className="lucide lucide-folder w-[20px] h-[20px]" data-lucide="folder" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(79, 70, 229)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
<h2 className="text-xl font-medium">Группа компаний Шанс</h2>
</div>
<div className="space-y-6">

<div className="hover:shadow-lg transition-all group animate-on-scroll in-view bg-white border-gray-100 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-md">
<div className="flex flex-col md:flex-row md:items-start gap-4 mb-4 justify-between">
<div className="">
<h3 className="group-hover:text-indigo-600 transition-colors text-lg font-medium mb-2">Фабрика мебели "Олимп-М"</h3>
<p className="text-sm text-gray-600">Мебельная фабрика</p>
</div>
<div className="flex items-center gap-2 shrink-0">
<a className="p-2 hover:bg-indigo-50 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-external-link w-4 h-4 text-gray-600" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
<a className="p-2 hover:bg-indigo-50 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-info w-4 h-4 text-gray-600" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</a>
</div>
</div>
<div className="flex flex-wrap gap-2 mt-4">
<span className="text-xs text-indigo-600 bg-indigo-50 rounded-full pt-1 pr-2 pb-1 pl-2">Индивидуальный дизайн</span>
<span className="text-xs text-indigo-600 bg-indigo-50 rounded-full pt-1 pr-2 pb-1 pl-2">Мебель на заказ</span>
<span className="text-xs text-indigo-600 bg-indigo-50 rounded-full pt-1 pr-2 pb-1 pl-2">Мебель от производителя</span>
</div>
</div>

<div className="hover:shadow-lg transition-all group animate-on-scroll bg-white rounded-xl p-6 shadow-md border border-gray-100 in-view">
<div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
<div className="">
<h3 className="group-hover:text-indigo-600 transition-colors text-lg font-medium mb-2">EVENTагентство</h3>
<p className="text-sm text-gray-600">Создание праздника и атмосферы </p>
</div>
<div className="flex items-center gap-2 shrink-0">
<a className="p-2 hover:bg-indigo-50 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-external-link w-4 h-4 text-gray-600" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
<a className="p-2 hover:bg-indigo-50 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-map w-4 h-4 text-gray-600" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</a>
</div>
</div>
<div className="flex flex-wrap gap-2 mt-4">
<span className="text-xs text-indigo-600 bg-indigo-50 rounded-full pt-1 pr-2 pb-1 pl-2">Создание праздника</span>
<span className="text-xs text-indigo-600 bg-indigo-50 rounded-full pt-1 pr-2 pb-1 pl-2">Любое мероприятие</span>
<span className="text-xs text-indigo-600 bg-indigo-50 rounded-full pt-1 pr-2 pb-1 pl-2">Благотворительность</span>
</div>
</div>

<div className="hover:shadow-lg transition-all group animate-on-scroll in-view bg-white border-gray-100 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-md">
<div className="flex flex-col md:flex-row md:items-start gap-4 mb-4 justify-between">
<div className="">
<h3 className="group-hover:text-indigo-600 transition-colors text-lg font-medium mb-2">Кадровое агенство</h3>
<p className="text-sm text-gray-600">Работа - возможность приносить пользу</p>
</div>
<div className="flex items-center gap-2 shrink-0">
<a className="p-2 hover:bg-indigo-50 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-external-link w-4 h-4 text-gray-600" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
<a className="p-2 hover:bg-indigo-50 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-calendar w-4 h-4 text-gray-600" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</a>
</div>
</div>
<div className="flex flex-wrap gap-2 mt-4">
<span className="text-xs text-indigo-600 bg-indigo-50 rounded-full pt-1 pr-2 pb-1 pl-2">Первое образование</span>
<span className="text-xs text-indigo-600 bg-indigo-50 rounded-full pt-1 pr-2 pb-1 pl-2">Вакансии</span>
<span className="text-xs text-indigo-600 bg-indigo-50 rounded-full pt-1 pr-2 pb-1 pl-2">Руководитель всегда прав</span>
</div>
</div>

<div className="hover:shadow-lg transition-all group animate-on-scroll in-view bg-white border-gray-100 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-md">
<div className="flex flex-col md:flex-row md:items-start gap-4 mb-4 justify-between">
<div className="">
<h3 className="group-hover:text-indigo-600 transition-colors text-lg font-medium mb-2">Доктор Нина </h3>
<p className="text-sm text-gray-600">Здоровая мама - здоровый ребенок</p>
</div>
<div className="flex items-center gap-2 shrink-0">
<a className="p-2 hover:bg-indigo-50 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-external-link w-4 h-4 text-gray-600" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
<a className="p-2 hover:bg-indigo-50 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-calendar w-4 h-4 text-gray-600" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</a>
</div>
</div>
<div className="flex flex-wrap gap-2 mt-4">
<span className="text-xs text-indigo-600 bg-indigo-50 rounded-full pt-1 pr-2 pb-1 pl-2">Здоровая мама</span>
<span className="text-xs text-indigo-600 bg-indigo-50 rounded-full pt-1 pr-2 pb-1 pl-2">Здоровый ребенок</span>
<span className="text-xs text-indigo-600 bg-indigo-50 rounded-full pt-1 pr-2 pb-1 pl-2">Исток</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 pt-24 pb-24" id="projects">
<div className="max-w-5xl mx-auto px-6">
<div className="flex items-center gap-3 animate-on-scroll mb-12 in-view">
<svg className="lucide lucide-folder w-5 h-5 text-indigo-600" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
<h2 className="text-xl font-medium">Проекты</h2>
</div>
<div className="space-y-6">

<div className="hover:shadow-lg transition-all group animate-on-scroll bg-white rounded-xl p-6 shadow-md border border-gray-100 in-view">
<div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
<div className="">
<h3 className="font-medium text-lg mb-2 group-hover:text-indigo-600 transition-colors">
                Помощь в сложных жизненных ситуациях
              </h3>
<p className="text-sm text-gray-600">
                В своей жизни мы сталкиваемся с новыми вызовами, конфликтами и сложными ситуациями. Протестуем, обижаемся, страдаем и ищем выход. Опыт тысяч участников семинара Решение показывает, многочисленные сложности в жизни часто имеют общие корни.
              </p>
</div>
<div className="flex items-center gap-2 shrink-0">
<a className="p-2 hover:bg-indigo-50 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-external-link w-4 h-4 text-gray-600" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
<a className="p-2 hover:bg-indigo-50 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-info w-4 h-4 text-gray-600" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</a>
</div>
</div>
<div className="flex flex-wrap gap-2 mt-4">
<span className="text-xs text-indigo-600 bg-indigo-50 rounded-full pt-1 pr-2 pb-1 pl-2">Психология</span>
<span className="text-xs text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">Семинары</span>
<span className="text-xs text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">Поддержка</span>
</div>
</div>

<div className="hover:shadow-lg transition-all group animate-on-scroll bg-white rounded-xl p-6 shadow-md border border-gray-100 in-view">
<div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
<div className="">
<h3 className="font-medium text-lg mb-2 group-hover:text-indigo-600 transition-colors">
                Сбор гуманитарной помощи
              </h3>
<p className="text-sm text-gray-600">
                Адресная помощь людям, попавшим в трудную жизненную ситуацию. Мы собираем и распределяем необходимые вещи, продукты и медикаменты для тех, кто в этом нуждается больше всего.
              </p>
</div>
<div className="flex items-center gap-2 shrink-0">
<a className="p-2 hover:bg-indigo-50 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-external-link w-4 h-4 text-gray-600" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
<a className="p-2 hover:bg-indigo-50 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-map w-4 h-4 text-gray-600" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</a>
</div>
</div>
<div className="flex flex-wrap gap-2 mt-4">
<span className="text-xs text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">Гуманитарная помощь</span>
<span className="text-xs text-indigo-600 bg-indigo-50 rounded-full pt-1 pr-2 pb-1 pl-2">Волонтерство</span>
<span className="text-xs text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">Благотворительность</span>
</div>
</div>

<div className="hover:shadow-lg transition-all group animate-on-scroll in-view bg-white border-gray-100 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-md">
<div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
<div className="">
<h3 className="font-medium text-lg mb-2 group-hover:text-indigo-600 transition-colors">
                Семинары Исток
              </h3>
<p className="text-sm text-gray-600">
                Образовательная программа, направленная на развитие личностного потенциала и формирование навыков социальной ответственности. Участники семинаров получают знания и инструменты для эффективного решения жизненных задач.
              </p>
</div>
<div className="flex items-center gap-2 shrink-0">
<a className="p-2 hover:bg-indigo-50 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-external-link w-4 h-4 text-gray-600" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
<a className="p-2 hover:bg-indigo-50 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-calendar w-4 h-4 text-gray-600" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</a>
</div>
</div>
<div className="flex flex-wrap gap-2 mt-4">
<span className="text-xs text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">Образование</span>
<span className="text-xs text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">Личностный рост</span>
<span className="text-xs text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">Семинары</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-indigo-50 py-24" id="contact">
<div className="max-w-lg mx-auto px-6">
<div className="flex items-center gap-3 mb-8 animate-on-scroll in-view">
<svg className="lucide lucide-mail w-5 h-5 text-indigo-600" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<h2 className="text-xl font-medium">Контакты</h2>
</div>
<form className="space-y-6">
<div className="animate-on-scroll in-view">
<label className="block text-sm text-gray-700 mb-2">Имя</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all shadow-sm" placeholder="Ваше имя" type="text"/>
</div>
<div className="animate-on-scroll in-view">
<label className="block text-sm text-gray-700 mb-2">Email</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all shadow-sm" placeholder="ваш@email.com" type="email"/>
</div>
<div className="animate-on-scroll in-view">
<label className="block text-sm text-gray-700 mb-2">Сообщение</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all resize-none shadow-sm" placeholder="Расскажите о вашем запросе" rows="4"></textarea>
</div>
<div className="flex items-center gap-3 animate-on-scroll in-view">
<input className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" id="copy" type="checkbox"/>
<label className="text-sm text-gray-700" htmlFor="copy">Отправить мне копию</label>
</div>
<button className="w-full bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-medium text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 animate-on-scroll in-view" type="submit">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
          Отправить сообщение
        </button>
</form>
<div className="flex justify-center gap-6 mt-12 animate-on-scroll in-view">
<a className="p-3 hover:bg-indigo-100 rounded-lg transition-colors text-gray-600 hover:text-indigo-600" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="p-3 hover:bg-indigo-100 rounded-lg transition-colors text-gray-600 hover:text-indigo-600" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="p-3 hover:bg-indigo-100 rounded-lg transition-colors text-gray-600 hover:text-indigo-600" href="#">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
</div>
</div>
</section>

<footer className="text-center bg-white py-8">
<div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent mb-8 animate-on-scroll in-view"></div>
<p className="text-sm text-gray-600 animate-on-scroll">© 2024 Группа компаний Шанс — Все права защищены</p>
</footer>


    </>
  );
}
