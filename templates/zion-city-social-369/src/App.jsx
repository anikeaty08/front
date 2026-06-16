import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    function updateNav(btn, colorClass) {
      const list = btn.closest('ul');
      const buttons = list.querySelectorAll('button');
      buttons.forEach(b => {
        b.className = 'px-6 py-2.5 rounded-[1.2rem] text-slate-500 hover:text-slate-900 hover:bg-white/60 font-medium text-sm transition-all bg-transparent';
      });
      // Use dark text for yellow background for better readability
      const textColor = colorClass.includes('yellow') ? 'text-slate-900' : 'text-slate-50';
      btn.className = `transition-all text-sm font-semibold ${textColor} rounded-[1.2rem] ring-black/5 ring-1 pt-2 pr-6 pb-2 pl-6 shadow-sm ${colorClass}`;
    }
  


        (function() {
          var el = document.getElementById('timer-event-1');
          if (!el) return;
          if (el._backwardsTimer) clearInterval(el._backwardsTimer);
          el._backwardsTimer = setInterval(function() {
            var text = el.innerText || "00:00:00";
            var parts = text.trim().split(':');
            var h = parseInt(parts[0], 10) || 0;
            var m = parseInt(parts[1], 10) || 0;
            var s = parseInt(parts[2], 10) || 0;
            s--;
            if (s < 0) { s = 59; m--; }
            if (m < 0) { m = 59; h--; }
            if (h < 0) { h = 23; }
            el.innerText = [h, m, s].map(function(v) { return v.toString().padStart(2, '0'); }).join(':');
          }, 1000);
        })();
      


        (function() {
          var el = document.getElementById('timer-event-2');
          if (!el) return;
          if (el._backwardsTimer) clearInterval(el._backwardsTimer);
          el._backwardsTimer = setInterval(function() {
            var text = el.innerText || "00:00:00";
            var parts = text.trim().split(':');
            var h = parseInt(parts[0], 10) || 0;
            var m = parseInt(parts[1], 10) || 0;
            var s = parseInt(parts[2], 10) || 0;
            s--;
            if (s < 0) { s = 59; m--; }
            if (m < 0) { m = 59; h--; }
            if (h < 0) { h = 23; }
            el.innerText = [h, m, s].map(function(v) { return v.toString().padStart(2, '0'); }).join(':');
          }, 1000);
        })();
      


        (function() {
          var el = document.getElementById('timer-event-3');
          if (!el) return;
          if (el._backwardsTimer) clearInterval(el._backwardsTimer);
          el._backwardsTimer = setInterval(function() {
            var text = el.innerText || "00:00:00";
            var parts = text.trim().split(':');
            var h = parseInt(parts[0], 10) || 0;
            var m = parseInt(parts[1], 10) || 0;
            var s = parseInt(parts[2], 10) || 0;
            s--;
            if (s < 0) { s = 59; m--; }
            if (m < 0) { m = 59; h--; }
            if (h < 0) { h = 23; }
            el.innerText = [h, m, s].map(function(v) { return v.toString().padStart(2, '0'); }).join(':');
          }, 1000);
        })();
      


    // Universal script for all event cards
    (function() {
      function setupCard(cardId, contentId, startOpen) {
        var card = document.getElementById(cardId);
        var content = document.getElementById(contentId);
        // Only the first one starts open based on inline styles, but let's track state
        var isOpen = startOpen;

        if (!card || !content) return;

        card.addEventListener('click', function(e) {
          // Allow interaction with buttons inside
          if (e.target.closest('button') || e.target.closest('a')) return;

          isOpen = !isOpen;

          if (isOpen) {
            content.style.gridTemplateRows = '1fr';
            content.style.opacity = '1';
            content.style.marginTop = '0';
          } else {
            content.style.gridTemplateRows = '0fr';
            content.style.opacity = '0';
            content.style.marginTop = '0';
          }
        });
      }

      setupCard('card-event-1', 'content-event-1', true);
      setupCard('card-event-2', 'content-event-2', false);
      setupCard('card-event-3', 'content-event-3', false);
    })();
  


      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="sticky top-4 z-50 px-4 md:px-6 w-full max-w-[1800px] mx-auto">
<header className="flex bg-white/80 w-full h-16 rounded-[2rem] ring-white/50 ring-1 pt-2 pr-4 pb-2 pl-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl items-center justify-between">

<div className="flex-none flex items-center gap-4">
<a className="flex items-center gap-3 group" href="/">
<div className="blue-gradient flex shadow-blue-500/30 text-white w-10 h-10 rounded-2xl shadow-lg items-center justify-center">
<i className="w-5 h-5 fill-white" data-lucide="zap"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900 group-hover:opacity-80 transition-opacity">
              ZION
              <span className="text-blue-600">.CITY</span>
</span>
</a>
</div>

<nav className="hidden xl:flex bg-slate-100/95 rounded-[1.5rem] pt-1.5 pr-2 pb-1.5 pl-2 items-center">
<ul className="flex gap-1 list-none mt-0 mr-0 mb-0 ml-0 gap-x-1 gap-y-1 items-center">
<li className="">
<button className="transition-all text-sm font-semibold text-slate-50 bg-emerald-500 ring-black/5 ring-1 rounded-[1.2rem] pt-2 pr-6 pb-2 pl-6 shadow-sm" onclick="updateNav(this, 'bg-emerald-500')">
        Семья
      </button>
</li>
<li className="">
<button className="hover:text-slate-900 hover:bg-white/60 transition-all text-sm font-medium text-slate-500 bg-transparent rounded-[1.2rem] pt-2.5 pr-6 pb-2.5 pl-6" onclick="updateNav(this, 'bg-blue-500')">
        Новости
      </button>
</li>
<li className="">
<button className="hover:text-slate-900 hover:bg-white/60 transition-all text-sm font-medium text-slate-500 bg-transparent rounded-[1.2rem] px-6 py-2.5" onclick="updateNav(this, 'bg-purple-500')">
        Журнал
      </button>
</li>
<li className="">
<button className="hover:text-slate-900 hover:bg-white/60 transition-all text-sm font-medium text-slate-500 bg-transparent rounded-[1.2rem] px-6 py-2.5" onclick="updateNav(this, 'bg-red-500')">
        Сервисы
      </button>
</li>
<li className="">
<button className="hover:text-slate-900 hover:bg-white/60 transition-all text-sm font-medium text-slate-500 bg-transparent rounded-[1.2rem] px-6 py-2.5" onclick="updateNav(this, 'bg-sky-500')">
        Организация
      </button>
</li>
<li className="">
<button className="hover:text-slate-900 hover:bg-white/60 transition-all text-sm font-medium text-slate-500 bg-transparent rounded-[1.2rem] px-6 py-2.5" onclick="updateNav(this, 'bg-sky-500')">
            Вещи
          </button>
</li>
<li className="">
<button className="hover:text-slate-900 hover:bg-white/60 transition-all text-sm font-medium text-slate-500 bg-transparent rounded-[1.2rem] px-6 py-2.5" onclick="updateNav(this, 'bg-sky-500')">
            Финансы
          </button>
</li>
<li className="">
<button className="hover:text-slate-900 hover:bg-white/60 transition-all text-sm font-medium text-slate-500 bg-transparent rounded-[1.2rem] px-6 py-2.5" onclick="updateNav(this, 'bg-sky-500')">
                Добрая воля
              </button>
</li>
</ul>

</nav>

<div className="flex items-center gap-4">
<button className="relative w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-slate-400 hover:text-blue-600 shadow-sm ring-1 ring-slate-100 transition-all active:scale-95 group">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-3 right-3.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white shadow-sm shadow-rose-500/20"></span>
</button>
<button className="hidden md:flex items-center gap-3 pl-2 pr-4 py-2 rounded-[1.2rem] bg-white shadow-sm ring-1 ring-slate-100 hover:ring-slate-200 transition-all active:scale-95">
<img alt="Profile" className="w-8 h-8 rounded-xl object-cover ring-2 ring-white shadow-sm" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<span className="font-semibold text-sm text-slate-700">Евгений</span>
<i className="w-4 h-4 text-slate-400 ml-1" data-lucide="chevron-down"></i>
</button>
</div>
</header>
</div>

<main className="flex-1 grid grid-cols-1 md:px-6 lg:grid-cols-[260px_1fr] xl:grid-cols-[280px_1fr_300px] xl:pl-6 xl:pr-6 xl:pt-10 w-full max-w-[1800px] mx-auto pt-8 pr-6 pb-10 pl-6 gap-x-8 gap-y-8 items-start">

<aside className="hidden flex-col sticky h-[calc(100vh-8.25rem)] overflow-y-auto no-scrollbar transition-all duration-300 bg-white/80 ring-slate-200/60 ring-1 rounded-[2rem] pt-6 pr-6 pb-6 pl-6 top-28 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl gap-x-8 gap-y-4 lg:flex">

<div className="flex flex-col shrink-0 group text-center relative items-center">

<div className="absolute -top-6 -left-6 -right-6 h-32 bg-gradient-to-b from-blue-50/50 via-slate-50/20 to-transparent pointer-events-none"></div>

<div className="relative mb-4 mt-2 transition-transform duration-300 hover:scale-105">
<div className="p-1 bg-white rounded-full shadow-md ring-1 ring-slate-100 relative z-10">
<img alt="Евгений Литвинов" className="w-20 h-20 rounded-full object-cover shadow-inner" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
</div>

<div className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 border-[3px] border-white rounded-full shadow-sm z-20 transition-transform duration-300 hover:scale-110" title="Online"></div>
</div>

<div className="z-10 flex flex-col gap-1 mb-6 relative gap-x-1 gap-y-1 items-center">
<h2 className="text-xl font-semibold text-slate-800 tracking-tight">
              Евгений Литвинов
            </h2>
<p className="text-sm font-medium text-slate-400">@elitevinov</p>
</div>

</div>

<div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent w-full shrink-0 opacity-60"></div>

<nav className="flex flex-col gap-3 shrink-0">
<h3 className="px-3 text-[11px] font-semibold text-slate-400 uppercase tracking-widest leading-none select-none">
            Меню
          </h3>
<ul className="flex flex-col gap-1 list-none">
<li className="">
<a className="flex items-center justify-between p-3 rounded-2xl bg-blue-50/80 text-blue-700 border border-blue-100/50 shadow-sm transition-all group" href="#">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-blue-600 shadow-sm ring-1 ring-blue-100/30">
<i className="w-5 h-5" data-lucide="layout-grid"></i>
</div>
<span className="font-semibold text-sm">Моя Лента</span>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
</a>
</li>
<li className="">
<a className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 text-slate-500 hover:text-slate-900 border border-transparent hover:border-slate-100 transition-all group" href="#">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-xl bg-slate-50 group-hover:bg-white flex items-center justify-center text-slate-400 group-hover:text-rose-500 shadow-none group-hover:shadow-sm ring-1 ring-transparent group-hover:ring-slate-100 transition-all duration-300">
<i className="w-4 h-4 group-hover:scale-110 transition-transform" data-lucide="heart"></i>
</div>
<span className="font-medium text-sm">Моя Семья</span>
</div>
<span className="px-2 py-0.5 rounded-lg bg-slate-100 group-hover:bg-rose-50 text-slate-500 group-hover:text-rose-600 text-[10px] font-bold border border-slate-200 group-hover:border-rose-100/50 transition-colors">
                  3
                </span>
</a>
</li>
</ul>
</nav>

<nav className="flex flex-col gap-3 shrink-0">
<h3 className="px-3 text-[11px] font-semibold text-slate-400 uppercase tracking-widest leading-none select-none">
            Хранилище
          </h3>
<ul className="flex flex-col gap-1 list-none">
<li className="">
<a className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 text-slate-500 hover:text-slate-900 border border-transparent hover:border-slate-100 transition-all group" href="#">
<div className="w-8 h-8 rounded-xl bg-slate-50 group-hover:bg-white flex items-center justify-center text-slate-400 group-hover:text-indigo-500 shadow-none group-hover:shadow-sm ring-1 ring-transparent group-hover:ring-slate-100 transition-all duration-300">
<i className="w-5 h-5" data-lucide="image"></i>
</div>
<span className="font-medium text-sm">Мои фотографии</span>
</a>
</li>
<li className="">
<a className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 text-slate-500 hover:text-slate-900 border border-transparent hover:border-slate-100 transition-all group" href="#">
<div className="w-8 h-8 rounded-xl bg-slate-50 group-hover:bg-white flex items-center justify-center text-slate-400 group-hover:text-amber-500 shadow-none group-hover:shadow-sm ring-1 ring-transparent group-hover:ring-slate-100 transition-all duration-300">
<i className="w-5 h-5" data-lucide="file-text"></i>
</div>
<span className="font-medium text-sm">Мои документы</span>
</a>
</li>
</ul>
</nav>
</aside>

<div className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] w-full gap-x-6 gap-y-6 h-[calc(100vh-8.25rem)] items-stretch">

<section className="flex flex-col gap-5 xl:max-w-none overflow-hidden w-full h-full max-w-[720px] mr-auto ml-auto gap-x-5 gap-y-5">

<div className="flex bg-white z-30 border-slate-200/80 border rounded-2xl pt-2 pr-3 pb-2 pl-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] backdrop-blur-xl gap-x-3 gap-y-3 items-center shrink-0">
<button className="w-9 h-9 rounded-xl hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-colors shrink-0">
<i className="w-5 h-5" data-lucide="paperclip"></i>
</button>
<input className="flex-1 outline-none placeholder-slate-400 text-[15px] font-medium text-slate-700 bg-transparent h-10" placeholder="Что нового, Евгений?" type="text"/>
<button className="flex items-center gap-2 h-9 pl-2 pr-3 rounded-xl text-sm font-medium transition-all active:scale-95 shrink-0 bg-white text-slate-600 border border-slate-200 shadow-sm hover:bg-emerald-500 hover:text-white hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/20">
<i className="w-5 h-5 ml-0.5" data-lucide="send"></i>
</button>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar flex flex-col gap-5 pb-2">

<article className="hover:shadow-[0_8px_16px_rgba(0,0,0,0.04)] transition-all duration-300 bg-white border-slate-200/80 border rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
<header className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="relative">
<img alt="User" className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm" src="https://i.pravatar.cc/150?u=5"/>
<div className="absolute -bottom-0.5 -right-0.5 bg-white p-[2px] rounded-full">
<div className="w-2.5 h-2.5 bg-emerald-500 rounded-full ring-1 ring-white"></div>
</div>
</div>
<div className="">
<h4 className="font-medium text-slate-900 text-[15px] leading-tight tracking-tight">
                      Ирина Васильева
                    </h4>
</div>
</div>
<button className="w-8 h-8 rounded-lg hover:bg-slate-50 flex items-center justify-center text-slate-400 transition-colors">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</button>
</header>
<div className="mb-4">
<p className="text-[15px] text-slate-600 leading-relaxed font-normal">
                  Восход солнца над Zion City сегодня был просто магическим! Это
                  место никогда не перестает удивлять своей красотой. ✨
                </p>
<div className="mt-2.5 flex gap-2">
<a className="text-blue-600 text-sm font-medium hover:underline decoration-blue-200 underline-offset-2" href="#">
                    #morning
                  </a>
<a className="text-blue-600 text-sm font-medium hover:underline decoration-blue-200 underline-offset-2" href="#">
                    #zioncity
                  </a>
</div>
</div>
<div className="rounded-xl overflow-hidden mb-5 border border-slate-100 bg-slate-50 relative group cursor-pointer aspect-[16/9]">
<img alt="Abstract" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5dbf01d8-0443-4934-a6f8-3388e83c29d9_1600w.webp"/>
<div className="group-hover:bg-black/5 transition-colors duration-300 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<footer className="flex flex-col border-slate-100 border-t pt-4">

<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-6">
<button className="flex hover:text-rose-600 transition-colors group text-slate-500 gap-x-2 gap-y-2 items-center" data-liked="false" onclick="const l=this.querySelector('dotlottie-wc');const s=this.querySelector('svg');const countEl=this.querySelector('.like-count');let isLiked=this.dataset.liked==='true';if(!isLiked){if(s)s.style.display='none';if(l){l.style.display='block';l.stop();l.play();}this.classList.add('text-rose-600');this.classList.remove('text-slate-500');this.dataset.liked='true';if(countEl)countEl.textContent=parseInt(countEl.textContent)+1;}else{if(l){l.style.display='none';l.stop();}if(s){s.style.display='block';}this.classList.remove('text-rose-600');this.classList.add('text-slate-500');this.dataset.liked='false';if(countEl)countEl.textContent=parseInt(countEl.textContent)-1;}">

<div className="relative flex items-center justify-center" style={{width: '20px', height: '20px'}}>
<svg className="lucide lucide-heart stroke-[1.5] group-hover:scale-110 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
<span className="text-sm font-medium like-count">147</span>
</button>
<button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors group">
<i className="w-5 h-5 stroke-[1.5] group-hover:scale-110 transition-transform" data-lucide="message-circle"></i>
<span className="text-sm font-medium">7</span>
</button>
<button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors group">
<i className="w-5 h-5 stroke-[1.5] group-hover:scale-110 transition-transform" data-lucide="corner-up-right"></i>
<span className="text-sm font-medium">43</span>
</button>
</div>
<span className="text-xs font-medium text-slate-400">17 ч назад</span>
</div>

<div className="border-t border-slate-100 w-full mb-4"></div>

<div className="flex gap-3 mb-1">
<div className="relative shrink-0">
<img alt="User Avatar" className="w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-sm" src="https://i.pravatar.cc/150?u=33"/>
</div>
<div className="flex flex-col">
<span className="leading-none text-sm font-medium text-slate-900">Владимир Прокопенко </span>
<p className="text-sm text-slate-700 mt-1">🙋‍♂️</p>
<span className="text-xs text-slate-400 mt-1 font-medium">1 час назад</span>
</div>
</div>

<button className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors text-left ml-11 mb-5">
          Показать следующие комментарии
      </button>

<div className="flex items-center gap-3">
<img alt="My Avatar" className="w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-sm shrink-0" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<div className="flex-1 flex hover:bg-slate-100 transition-all focus-within:bg-white focus-within:border-blue-200 focus-within:ring-2 focus-within:ring-blue-100/20 group bg-slate-100/50 border-slate-200 border rounded-[1.2rem] pt-2 pr-4 pb-2 pl-4 shadow-sm items-center">
<input className="w-full bg-transparent border-none outline-none text-sm placeholder-slate-400 text-slate-700 font-medium h-6" placeholder="Написать комментарий..." type="text"/>
<div className="flex items-center gap-3 text-slate-400 ml-2 shrink-0">
<button className="hover:text-slate-600 transition-colors p-0.5"><i className="w-4 h-4 stroke-[1.5]" data-lucide="paperclip"></i></button>
<button className="hover:text-slate-600 transition-colors p-0.5"><i className="w-4 h-4 stroke-[1.5]" data-lucide="smile"></i></button>
</div>
</div>
<button className="text-slate-400 hover:text-blue-600 transition-colors p-2 hover:bg-slate-50 rounded-full active:scale-95">
<i className="w-5 h-5 stroke-[1.5] ml-0.5" data-lucide="send"></i>
</button>
</div>
</footer>
</article>

<article className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.04)] transition-all duration-300">
<header className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="relative">
<img alt="User" className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm" src="https://i.pravatar.cc/150?u=8"/>
</div>
<div className="">
<h4 className="font-medium text-slate-900 text-[15px] leading-tight tracking-tight">
                      Константин Белов
                    </h4>
<span className="text-xs text-slate-400 font-medium">15 минут назад</span>
</div>
</div>
</header>
<div className="p-5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white shadow-lg shadow-blue-500/20 mb-4 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
<p className="text-[17px] font-medium leading-relaxed relative z-10">
                  Работа кипит! 🚀 Наша команда дизайнеров подготовила новый
                  концепт оформления общественных пространств.
                </p>
</div>
<footer className="flex items-center justify-between">
<div className="flex gap-1">
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-slate-50 text-slate-400 hover:text-rose-500 transition-all font-medium text-xs group">
<i className="w-4 h-4 group-hover:scale-110 transition-transform" data-lucide="heart"></i>
<span>85</span>
</button>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-slate-50 text-slate-400 hover:text-blue-500 transition-all font-medium text-xs">
<i className="w-4 h-4" data-lucide="message-circle"></i>
<span>3</span>
</button>
</div>
</footer>
</article>
<button className="w-full py-3.5 rounded-xl border border-slate-200 bg-white text-slate-500 font-medium text-sm hover:border-slate-300 hover:text-slate-800 hover:shadow-sm transition-all flex items-center justify-center gap-2 group">
<span className="group-hover:translate-x-0.5 transition-transform">Показать старые записи</span>
<i className="w-4 h-4" data-lucide="history"></i>
</button>
</div>
</section>

<section className="flex flex-col gap-5 h-full overflow-hidden">

<div className="flex bg-white z-30 border-slate-200/80 border rounded-2xl p-2 shadow-[0_2px_8px_rgba(0,0,0,0.02)] backdrop-blur-xl gap-2 items-center shrink-0">
<button className="flex-1 flex items-center justify-between px-4 h-10 bg-white border border-slate-200/80 rounded-xl hover:bg-slate-50 hover:border-slate-300 text-slate-700 font-medium text-xs transition-all text-left shadow-sm">
<span className="">Все события</span>
<i className="w-4 h-4 text-slate-400 ml-1" data-lucide="chevron-down"></i>
</button>
<button className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center hover:bg-emerald-600 transition-all shadow-md shadow-emerald-500/20 active:scale-95 border border-emerald-400 shrink-0">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar flex flex-col gap-4 pb-2 gap-x-4 gap-y-4">

<div className="hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] cursor-pointer select-none transition-all duration-500 group bg-white border-slate-200/80 border rounded-2xl pt-5 pr-5 pb-5 pl-5 relative shadow-[0_2px_8px_rgba(0,0,0,0.02)]" id="card-event-1">

<div className="inline-flex gap-2 transition-colors hover:bg-emerald-100/50 bg-emerald-50 border-emerald-100/60 border rounded-full mb-4 px-3 py-1 items-center">
<svg className="lucide lucide-timer text-emerald-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>
<span className="tabular-nums text-sm font-medium text-emerald-600 tracking-wide font-mono" id="timer-event-1">18:12:33</span>

</div>

<h3 className="transition-colors group-hover:text-emerald-600 text-lg font-semibold text-slate-900 tracking-tight">
      Отдых на турбазе
    </h3>

<div className="grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" id="content-event-1" style={{gridTemplateRows: '1fr', marginTop: '0px'}}>
<div className="overflow-hidden min-h-0">

<p className="text-[15px] leading-relaxed text-slate-500 mt-2 mb-5">Как создать впечатляющую презентацию, которая удивит коллег и впечатлит руководство? Разбираем лучшие кейсы.</p>

<div className="rounded-xl overflow-hidden mb-5 shadow-sm border border-slate-100 relative group/image aspect-[16/10]">
<img alt="Resort" className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/85258ec7-fbaa-419d-ab98-2cdf2e0654b6_800w.jpg"/>
<div className="ring-inset rounded-xl ring-black/5 ring-1 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="flex items-center justify-between">

<div className="flex items-center -space-x-2.5">
<img alt="Participant 1" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src="https://i.pravatar.cc/150?u=44"/>
<img alt="Participant 2" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src="https://i.pravatar.cc/150?u=32"/>
<img alt="Participant 3" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src="https://i.pravatar.cc/150?u=12"/>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-semibold text-slate-500 shadow-sm z-10">46</div>
</div>

<button className="btn-green-points group relative" type="button">
<div className="points_wrapper">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>
<span className="inner text-sm font-semibold tracking-wide">
    Принять участие
    <svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
<style>
    .btn-green-points {
      cursor: pointer;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      transition: all 0.25s ease;
      background: radial-gradient(65.28% 65.28% at 50% 100%,
          rgba(52, 211, 153, 0.8) 0%,
          rgba(52, 211, 153, 0) 100%),
        linear-gradient(0deg, #10b981, #059669);
      border-radius: 0.75rem;
      border: none;
      outline: none;
      padding: 10px 24px;
      min-height: 44px;
      box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.3), 0 2px 4px -1px rgba(16, 185, 129, 0.1);
    }
  
    .btn-green-points::before,
    .btn-green-points::after {
      content: "";
      position: absolute;
      transition: all 0.5s ease-in-out;
      z-index: 0;
    }
  
    .btn-green-points::before {
      inset: 1px;
      background: linear-gradient(177.95deg,
          rgba(255, 255, 255, 0.3) 0%,
          rgba(255, 255, 255, 0) 100%);
      border-radius: calc(0.75rem - 1px);
    }
  
    .btn-green-points::after {
      inset: 2px;
      background: radial-gradient(65.28% 65.28% at 50% 100%,
          rgba(52, 211, 153, 0.8) 0%,
          rgba(52, 211, 153, 0) 100%),
        linear-gradient(0deg, #10b981, #059669);
      border-radius: calc(0.75rem - 2px);
    }
  
    .btn-green-points:active {
      transform: scale(0.96);
    }
  
    .btn-green-points:hover {
      box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.4), 0 4px 6px -2px rgba(16, 185, 129, 0.2);
      transform: translateY(-1px);
    }

    .points_wrapper {
      overflow: hidden;
      width: 100%;
      height: 100%;
      pointer-events: none;
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
    }
  
    .points_wrapper .point {
      bottom: -10px;
      position: absolute;
      animation: floating-points infinite ease-in-out;
      pointer-events: none;
      width: 2px;
      height: 2px;
      background-color: #fff;
      border-radius: 9999px;
    }
  
    @keyframes floating-points {
      0% { transform: translateY(0); }
      85% { opacity: 0; }
      100% { transform: translateY(-55px); opacity: 0; }
    }
  
    .points_wrapper .point:nth-child(1) { left: 10%; opacity: 1; animation-duration: 2.35s; animation-delay: 0.2s; }
    .points_wrapper .point:nth-child(2) { left: 30%; opacity: 0.7; animation-duration: 2.5s; animation-delay: 0.5s; }
    .points_wrapper .point:nth-child(3) { left: 25%; opacity: 0.8; animation-duration: 2.2s; animation-delay: 0.1s; }
    .points_wrapper .point:nth-child(4) { left: 44%; opacity: 0.6; animation-duration: 2.05s; }
    .points_wrapper .point:nth-child(5) { left: 50%; opacity: 1; animation-duration: 1.9s; }
    .points_wrapper .point:nth-child(6) { left: 75%; opacity: 0.5; animation-duration: 1.5s; animation-delay: 1.5s; }
    .points_wrapper .point:nth-child(7) { left: 88%; opacity: 0.9; animation-duration: 2.2s; animation-delay: 0.2s; }
    .points_wrapper .point:nth-child(8) { left: 58%; opacity: 0.8; animation-duration: 2.25s; animation-delay: 0.2s; }
    .points_wrapper .point:nth-child(9) { left: 98%; opacity: 0.6; animation-duration: 2.6s; animation-delay: 0.1s; }
    .points_wrapper .point:nth-child(10) { left: 65%; opacity: 1; animation-duration: 2.5s; animation-delay: 0.2s; }
  
    .inner {
      z-index: 2;
      position: relative;
      color: white;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: color 0.2s ease-in-out;
    }
  
    .inner svg.icon {
      width: 18px;
      height: 18px;
      transition: transform 0.3s ease;
      stroke: white;
      fill: none;
      margin-left: 6px;
    }
  
    .btn-green-points:hover svg.icon {
      transform: translateX(3px);
    }
  </style>
</button>
</div>
</div>
</div>
</div>

<div className="hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] cursor-pointer select-none transition-all duration-500 group bg-white border-slate-200/80 border rounded-2xl pt-5 pr-5 pb-5 pl-5 relative shadow-[0_2px_8px_rgba(0,0,0,0.02)]" id="card-event-2">

<div className="inline-flex gap-2 transition-colors hover:bg-emerald-100/50 bg-emerald-50 border-emerald-100/60 border rounded-full mb-4 px-3 py-1 items-center">
<svg className="lucide lucide-timer text-emerald-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>
<span className="tabular-nums text-sm font-medium text-emerald-600 tracking-wide font-mono" id="timer-event-2">04:20:15</span>

</div>

<h3 className="transition-colors group-hover:text-emerald-600 text-lg font-semibold text-slate-900 tracking-tight">
      Дизайн-спринт
    </h3>

<div className="grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" id="content-event-2" style={{gridTemplateRows: '1fr', marginTop: '0px'}}>
<div className="overflow-hidden min-h-0">

<p className="text-[15px] leading-relaxed text-slate-500 mt-2 mb-5">
          Интенсивный воркшоп по созданию прототипов и тестированию гипотез за 5 дней. Присоединяйтесь к команде лучших дизайнеров.
        </p>

<div className="rounded-xl overflow-hidden mb-5 shadow-sm border border-slate-100 relative group/image aspect-[16/10]">
<img alt="Design Sprint" className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-105" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-xl"></div>
</div>

<div className="flex items-center justify-between">

<div className="flex items-center -space-x-2.5">
<img alt="Participant 1" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src="https://i.pravatar.cc/150?u=55"/>
<img alt="Participant 2" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src="https://i.pravatar.cc/150?u=66"/>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-semibold text-slate-500 shadow-sm z-10">12</div>
</div>

<button className="px-4 py-2 bg-white hover:bg-emerald-500 hover:text-white text-slate-700 text-sm font-medium rounded-xl border border-slate-200 shadow-sm transition-all hover:shadow-md hover:shadow-emerald-500/20 hover:border-emerald-500 active:scale-95">
            Записаться
          </button>
</div>
</div>
</div>
</div>

<div className="hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] cursor-pointer select-none transition-all duration-500 group bg-white border-slate-200/80 border rounded-2xl pt-5 pr-5 pb-5 pl-5 relative shadow-[0_2px_8px_rgba(0,0,0,0.02)]" id="card-event-3">

<div className="inline-flex gap-2 transition-colors hover:bg-emerald-100/50 bg-emerald-50 border-emerald-100/60 border rounded-full mb-4 px-3 py-1 items-center">
<svg className="lucide lucide-timer text-emerald-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>
<span className="tabular-nums text-sm font-medium text-emerald-600 tracking-wide font-mono" id="timer-event-3">12:45:00</span>

</div>

<h3 className="transition-colors group-hover:text-emerald-600 text-lg font-semibold text-slate-900 tracking-tight">
      Летний фестиваль
    </h3>

<div className="grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" id="content-event-3" style={{gridTemplateRows: '1fr', marginTop: '0px'}}>
<div className="overflow-hidden min-h-0">

<p className="text-[15px] leading-relaxed text-slate-500 mt-2 mb-5">
          Музыка, искусство и технологии объединяются в одном месте. Не пропустите главное событие этого лета.
        </p>

<div className="rounded-xl overflow-hidden mb-5 shadow-sm border border-slate-100 relative group/image aspect-[16/10]">
<img alt="Summer Festival" className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5faf9b73-978b-4bb0-bc79-7c6c47981d1b_800w.jpg"/>
<div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-xl"></div>
</div>

<div className="flex items-center justify-between">

<div className="flex items-center -space-x-2.5">
<img alt="Participant 1" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src="https://i.pravatar.cc/150?u=15"/>
<img alt="Participant 2" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src="https://i.pravatar.cc/150?u=25"/>
<img alt="Participant 3" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src="https://i.pravatar.cc/150?u=35"/>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-semibold text-slate-500 shadow-sm z-10">89</div>
</div>

<button className="px-4 py-2 bg-white hover:bg-emerald-500 hover:text-white text-slate-700 text-sm font-medium rounded-xl border border-slate-200 shadow-sm transition-all hover:shadow-md hover:shadow-emerald-500/20 hover:border-emerald-500 active:scale-95">
            Купить билет
          </button>
</div>
</div>
</div>
</div>

</div>
</section>
</div>

<aside className="hidden xl:flex flex-col gap-6 sticky top-28 h-[calc(100vh-8.25rem)] bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-slate-100 p-6 overflow-y-auto no-scrollbar">

<div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[1.5rem] p-6 text-white shadow-lg shadow-emerald-500/20 relative overflow-hidden group shrink-0">
<div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-8 -mt-8 blur-2xl group-hover:bg-white/20 transition-all"></div>
<div className="flex items-center gap-3 mb-2 relative z-10">
<div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
<svg className="lucide lucide-globe w-5 h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path className="" d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<span className="font-bold tracking-tight">Мировая Зона</span>
</div>
<p className="text-emerald-50 text-xs font-medium relative z-10 leading-relaxed opacity-90">
      Подключено к глобальной сети Zion City.
    </p>
</div>

<div className="flex flex-col gap-8">

<div className="relative group">
<svg className="lucide lucide-search absolute left-4 top-3.5 w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.34-4.34"></path></svg>
<input className="w-full bg-slate-50 border border-transparent hover:bg-slate-100 focus:bg-white focus:border-blue-100 focus:ring-4 focus:ring-blue-500/10 py-3 pl-11 pr-10 text-sm font-medium outline-none transition-all rounded-[1.5rem]" placeholder="Поиск..." type="text"/>
</div>


<div className="">
<div className="flex items-center justify-between mb-4 px-2">
<h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          Друзья онлайн
        </h3>
<span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-md">
          4
        </span>
</div>
<ul className="space-y-3">
<li className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors group">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-100 to-rose-100 flex items-center justify-center text-purple-600 font-bold text-xs ring-2 ring-transparent group-hover:ring-slate-200 transition-all">
              EI
            </div>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
</div>
<span className="text-sm font-semibold text-slate-600 group-hover:text-slate-900">
            Елена Иванова
          </span>
</li>
<li className="flex gap-3 hover:bg-slate-50 cursor-pointer transition-colors group rounded-xl pt-2 pr-2 pb-2 pl-2 gap-x-3 gap-y-3 items-center">
<div className="relative">
<img className="w-10 h-10 rounded-full object-cover ring-2 ring-transparent group-hover:ring-slate-200 transition-all" src="https://i.pravatar.cc/150?u=12"/>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
</div>
<span className="text-sm font-semibold text-slate-600 group-hover:text-slate-900">
            Алекс Р.
          </span>
</li>
</ul>
</div>

<div className="">
</div>
</div>
</aside>
</main>

<div className="fixed bottom-8 right-8 z-50 group">
<div className="absolute inset-0 bg-blue-500 blur-xl opacity-30 group-hover:opacity-50 transition-opacity rounded-full animate-pulse"></div>
<button className="relative w-16 h-16 bg-slate-900 rounded-[1.5rem] shadow-2xl flex items-center justify-center text-white hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-white/10 group-hover:bg-blue-600">
<i className="w-7 h-7" data-lucide="pen-tool"></i>
</button>
</div>


    </>
  );
}
