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



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


(function () {
  const BTN_SELECTOR = 'button[data-element-id="aura-emgwhy42k2e37kjme"]';
  const EMAIL = 'elitevinov@gmail.com';
  const btn = document.querySelector(BTN_SELECTOR);
  if (!btn || btn.dataset.contactBound === 'true') return;
  btn.dataset.contactBound = 'true';

  function ensureModal() {
    let modal = document.getElementById('contactModal');
    if (modal) return modal;

    modal = document.createElement('div');
    modal.id = 'contactModal';
    modal.className = 'fixed inset-0 z-50 hidden';
    modal.innerHTML = `
      <div class="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
      <div class="relative min-h-full flex items-center justify-center p-4">
        <div id="contactDialog" class="w-full max-w-md rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 shadow-xl">
          <div class="flex items-start justify-between">
            <h3 class="text-2xl tracking-tight font-medium">Обратная связь</h3>
            <button type="button" id="contactClose" class="p-2 -mr-2 rounded-lg hover:bg-white/10" aria-label="Закрыть">
              <svg xmlns="http://www.w3.org/2000/svg" data-lucide="x" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
            </button>
          </div>
          <p class="text-sm text-white/60 mt-2">Оставьте контакты, и мы свяжемся с вами в ближайшее время.</p>
          <form id="contactForm" class="mt-6 space-y-4" novalidate>
            <div>
              <label for="contactName" class="block text-sm mb-2">Имя</label>
              <input id="contactName" name="name" type="text" required placeholder="Ваше имя" class="w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20">
            </div>
            <div>
              <label for="contactPhone" class="block text-sm mb-2">Телефон</label>
              <input id="contactPhone" name="phone" type="tel" inputmode="tel" required pattern="^[0-9+()\\s-]{6,}$" placeholder="+7 (___) ___-__-__" class="w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20">
            </div>
            <div id="contactAlert" class="hidden text-sm rounded-lg px-3 py-2"></div>
            <div class="flex items-center justify-end gap-2 pt-2">
              <button type="button" id="contactCancel" class="px-4 py-2 text-sm text-white/70 hover:text-white transition">Отмена</button>
              <button type="submit" id="contactSubmit" class="inline-flex items-center gap-1 rounded-full bg-white text-black px-5 py-2 text-sm font-semibold hover:bg-white/90 transition">
                <svg xmlns="http://www.w3.org/2000/svg" data-lucide="send" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
                Отправить
              </button>
            </div>
          </form>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }

    const overlay = modal.querySelector('.absolute.inset-0');
    const closeBtn = modal.querySelector('#contactClose');
    const cancelBtn = modal.querySelector('#contactCancel');

    function onKey(e) { if (e.key === 'Escape') close(); }
    function open() {
      modal.classList.remove('hidden');
      document.addEventListener('keydown', onKey);
    }
    function close() {
      modal.classList.add('hidden');
      document.removeEventListener('keydown', onKey);
    }

    overlay.addEventListener('click', close);
    closeBtn.addEventListener('click', close);
    cancelBtn.addEventListener('click', close);

    modal._open = open;
    modal._close = close;

    const form = modal.querySelector('#contactForm');
    const submitBtn = modal.querySelector('#contactSubmit');
    const alert = modal.querySelector('#contactAlert');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = form.querySelector('#contactName').value.trim();
      const phone = form.querySelector('#contactPhone').value.trim();

      if (!name || !phone) {
        showAlert('Пожалуйста, заполните поля Имя и Телефон.', 'error');
        return;
      }

      submitBtn.disabled = true;
      submitBtn.classList.add('opacity-60', 'cursor-not-allowed');

      try {
        const res = await fetch(\`https://formsubmit.co/ajax/${EMAIL}\`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            Name: name,
            Phone: phone,
            _subject: 'Новая заявка с сайта',
            _template: 'table',
            _captcha: 'false'
          })
        });
        const data = await res.json().catch(() => ({}));
        if (res.ok) {
          showAlert('Спасибо! Заявка отправлена. Мы свяжемся с вами скоро.', 'success');
          form.reset();
          setTimeout(() => { modal._close(); }, 1400);
        } else {
          throw new Error((data && data.message) || 'Не удалось отправить заявку. Попробуйте позже.');
        }
      } catch (err) {
        showAlert(err.message || 'Ошибка отправки. Попробуйте позже.', 'error');
      } finally {
        submitBtn.disabled = false;
        submitBtn.classList.remove('opacity-60', 'cursor-not-allowed');
      }
    });

    function showAlert(msg, type) {
      alert.textContent = msg;
      alert.className = 'text-sm rounded-lg px-3 py-2 border ' + (type === 'success'
        ? 'bg-blue-500/20 text-cyan-400 border-white/10'
        : 'bg-red-500/20 text-white border-white/10');
      alert.classList.remove('hidden');
    }

    return modal;
  }

  function openModal() {
    const modal = ensureModal();
    if (modal && typeof modal._open === 'function') modal._open();
  }

  btn.addEventListener('click', openModal);
})();



    (function () {
      const container = document.getElementById('videoPlayer-aura-emgwrn7ht5513e9oh');
      if (!container || container.dataset.bound === 'true') return;
      container.dataset.bound = 'true';
      container.addEventListener('click', function () {
        const iframe = document.createElement('iframe');
        iframe.src = 'https://www.youtube.com/embed/spwlUBOXA7o?autoplay=1&rel=0&playsinline=1';
        iframe.title = 'YouTube video player';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.allowFullscreen = true;
        iframe.className = 'absolute inset-0 w-full h-full';
        container.innerHTML = '';
        container.appendChild(iframe);
      });
    })();
  


      // Icons
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      });

      // Mobile menu
      const mobileBtn = document.getElementById('mobileMenuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
      }

      // Counter animation
      (function animateCounters() {
        const counters = document.querySelectorAll('.counter');
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = parseFloat(el.getAttribute('data-target') || '0');
            const suffix = el.getAttribute('data-suffix') || '';
            const start = performance.now();
            const duration = 1800;

            function tick(now) {
              const p = Math.min((now - start) / duration, 1);
              const ease = 1 - Math.pow(1 - p, 4);
              let val = target * ease;
              if (suffix === '%') el.textContent = val.toFixed(2) + suffix;
              else if (suffix === 'M+') el.textContent = (val / 1_000_000).toFixed(1) + suffix;
              else if (suffix === '+') el.textContent = Math.floor(val) + suffix;
              else el.textContent = Math.floor(val);
              if (p < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
            io.unobserve(el);
          });
        }, { threshold: 0.5 });

        counters.forEach((c) => io.observe(c));
      })();
    
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
      

<div className="absolute inset-x-0 -top-6 w-full -z-10">
<div className="w-full" style={{height: '820px'}}>
<div className="w-full h-full" data-us-project="5lHoGfe3FLqHAGyFDn3C"></div>
</div>

</div>

<header className="fixed top-4 left-4 right-4 z-50">
<div className="max-w-7xl mx-auto">
<div className="h-14 flex items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-3">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center">
<svg className="lucide lucide-hexagon w-4 h-4 text-white" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
</div>
<span className="text-lg font-medium">Nexus Studio</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-white/70 hover:text-white transition-colors" href="#">Platform</a>
<a className="hover:text-white transition-colors text-white/70" href="#">Solutions</a>
<a className="text-white/70 hover:text-white transition-colors" href="#">Enterprise</a>
<a className="text-white/70 hover:text-white transition-colors" href="#">Resources</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<button className="hover:bg-white/90 transition-transform duration-150 hover:scale-[1.03] text-sm text-black bg-white rounded-full pt-2 pr-4 pb-2 pl-4">+7 (930) 401 88 11</button>
</div>
<button className="md:hidden p-2 rounded-lg hover:bg-white/10" id="mobileMenuBtn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>

<div className="md:hidden hidden mt-3 px-4" id="mobileMenu">
<div className="max-w-7xl mx-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
<div className="grid gap-3 text-sm">
<a className="rounded-lg px-3 py-2 hover:bg-white/10 transition" href="#">Platform</a>
<a className="rounded-lg px-3 py-2 hover:bg-white/10 transition" href="#">Solutions</a>
<a className="rounded-lg px-3 py-2 hover:bg-white/10 transition" href="#">Enterprise</a>
<a className="rounded-lg px-3 py-2 hover:bg-white/10 transition" href="#">Resources</a>
</div>
<div className="mt-4 flex items-center gap-3">
<button className="px-4 py-2 text-sm text-white/80 hover:text-white transition">Sign In</button>
<button className="px-4 py-2 text-sm bg-white text-black rounded-full hover:bg-white/90 transition">Get Started</button>
</div>
</div>
</div>
</header>

<section className="z-10 pt-40 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="max-w-4xl">
<div className="inline-flex gap-3 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border-blue-500/20 border rounded-full mb-8 pt-2 pr-4 pb-2 pl-4 gap-x-3 gap-y-3 items-center">
<span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
<span className="text-sm font-medium">Новые возможности</span>
</div>
<h1 className="bg-clip-text sm:text-6xl lg:text-7xl lg:mb-4 text-5xl text-transparent tracking-tight bg-gradient-to-b from-white to-white/70 mr-2 mb-4" style={{fontWeight: '200'}}>Искусственный интеллект для Вашего бизнеса</h1>
<p className="leading-relaxed xl:mr-96 xl:mb-20 text-lg text-white/60 max-w-2xl mr-2 mb-10">Ваш личный ассистент для управления эффективностью</p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="inline-flex gap-2 hover:bg-white/10 transition text-sm bg-black/60 border-white/20 border rounded-full pt-3 pr-6 pb-3 pl-6 gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-phone lucide-monitor w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="phone" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="font-medium">+7 (930) 401-88-11</span>
</button>
</div>
</div>
</div>
</section>

<section className="pt-20 pb-20">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="lg:p-8 bg-gradient-to-br from-gray-900/50 to-black/50 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative backdrop-blur-xl">

<div className="flex mb-6 items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex gap-2">
<span className="w-3 h-3 rounded-full bg-red-500"></span>
<span className="w-3 h-3 rounded-full bg-yellow-500"></span>
<span className="w-3 h-3 rounded-full bg-cyan-500"></span>
</div>
<span className="text-sm text-white/60">Nexus Cloud IDE</span>
</div>
<div className="inline-flex text-xs text-cyan-400 bg-cyan-500/20 rounded-full pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-zap w-3.5 h-3.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></div>
</div>
<div className="grid lg:grid-cols-12 gap-6 gap-x-6 gap-y-6">

<aside className="lg:col-span-3">
<div className="uppercase text-xs font-semibold text-white/40 tracking-wide mb-3">Наши продукты</div>
<div className="space-y-1">
<div className="flex gap-2 hover:bg-white/5 cursor-pointer transition rounded-lg pt-2 pr-2 pb-2 pl-2 gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-folder w-4 h-4 text-blue-400" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
<span className="text-sm">Автоматизация производства</span>
</div>
<div className="flex gap-2 hover:bg-white/5 cursor-pointer transition xl:pr-2 xl:pt-2 xl:pb-2 xl:pl-2 rounded-lg pt-2 pr-2 pb-2 pl-2 gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-folder w-4 h-4 text-blue-400" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
<span className="text-sm">AI  агенты для бизнеса</span>
</div>
<div className="flex items-center gap-2 p-2 pl-10 rounded-lg bg-blue-500/10 border border-blue-500/20 xl:pl-2 xl:pr-2 xl:pt-2 xl:pb-2">
<svg className="lucide lucide-file-code w-4 h-4 text-orange-400" data-lucide="file-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12.5 8 15l2 2.5"></path><path d="m14 12.5 2 2.5-2 2.5"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"></path></svg>
<span className="text-sm text-blue-300" style={{}}>AI для создания контента</span>
</div>
<div className="flex gap-2 hover:bg-white/5 cursor-pointer transition xl:pl-2 rounded-lg pt-2 pr-2 pb-2 pl-2 gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-file-code w-4 h-4 text-orange-400" data-lucide="file-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12.5 8 15l2 2.5"></path><path d="m14 12.5 2 2.5-2 2.5"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"></path></svg>
<span className="text-sm">AI - Юрист РФ</span>
</div>
<div className="flex items-center gap-2 p-2 pl-10 rounded-lg hover:bg-white/5 cursor-pointer transition xl:pl-2 xl:pr-2 xl:pt-2 xl:pb-2">
<svg className="lucide lucide-server w-4 h-4 text-cyan-400" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
<span className="text-sm">AI - Голосовой помощник </span>
</div>
<div className="flex gap-2 hover:bg-white/5 cursor-pointer transition rounded-lg pt-2 pr-2 pb-2 pl-2 gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-database w-4 h-4 text-purple-400" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
<span className="text-sm">AI - Маркетолог</span>
</div>
<div className="flex gap-2 hover:bg-white/5 cursor-pointer transition rounded-lg pt-2 pr-2 pb-2 pl-2 gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-settings w-4 h-4 text-gray-400" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-sm">nexus.code</span>
</div>
</div>
</aside>

<main className="lg:col-span-6">
<div className="rounded-2xl border border-white/10 bg-gray-950/80 overflow-hidden">
<div className="flex items-center gap-1 p-2 border-b border-white/10 bg-gray-900/50">
<div className="flex items-center gap-2 rounded-lg border border-blue-500/30 bg-blue-500/20 px-4 py-2">
<svg className="lucide lucide-square-code w-3.5 h-3.5 text-blue-300" data-lucide="square-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 9-3 3 3 3"></path><path d="m14 15 3-3-3-3"></path><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg>
<span className="text-xs text-blue-300">Ваши промо ролики  могут выглядеть так</span>
</div>
<button className="p-2 rounded-lg hover:bg-white/5"><svg className="lucide lucide-plus w-4 h-4 text-white/40" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button>
</div>
<div className="leading-7 text-sm pt-0 pr-4 pb-0 pl-4">
<pre className="whitespace-pre-wrap text-white/90 font-mono mt-0 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-0">  <div className="xl:mb-0 cursor-pointer mt-0 mb-0" onclick="window.location.href='https://rutube.ru/video/private/0cd4bcfdcf57898e2ca2d8af3782f34a/?p=ZqNxwy4iRlSLTOGJDi2JIg';window.location.href='https://rutube.ru/video/private/0cd4bcfdcf57898e2ca2d8af3782f34a/?p=ZqNxwy4iRlSLTOGJDi2JIg'" role="button" style={{marginTop: '0', marginBottom: '0', paddingTop: '0', paddingBottom: '0', lineHeight: '0'}}>
  <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/20 bg-white/5 group cursor-pointer" data-bound="true" id="videoPlayer-aura-emgwrn7ht5513e9oh">
    <iframe allow="autoplay; encrypted-media; clipboard-write; picture-in-picture; web-share" allowfullscreen="" className="absolute inset-0 w-full h-full" src="https://rutube.ru/play/embed/0cd4bcfdcf57898e2ca2d8af3782f34a?p=ZqNxwy4iRlSLTOGJDi2JIg&amp;autoplay=1&amp;muted=1&amp;playsinline=1" title="RUTUBE video player"></iframe>
  </div>
</div>
  
</pre>
</div>
</div>

<div className="flex mt-6 items-center justify-between">
<div className="">
<h3 className="text-lg font-semibold tracking-tight" style={{}}>Хотите также →</h3>
<p className="text-sm text-white/50"></p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex gap-2 hover:bg-white/20 transition text-xs bg-white/10 rounded-lg pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center">8 (930) 401-88-11<svg className="lucide lucide-star w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '14px', height: '14px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg></button>
</div>
</div>
</main>

<aside className="lg:col-span-3 space-y-4">
<div className="rounded-xl border border-white/10 bg-gray-950/80 overflow-hidden">
<div className="flex items-center justify-between p-3 border-b border-white/10">
<div className="flex items-center gap-2">
<svg className="lucide lucide-terminal w-4 h-4 text-cyan-400" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg>
<span className="text-sm font-medium">Terminal</span>
</div>
<div className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
<span className="text-xs text-cyan-400">Live</span>
</div>
</div>
<div className="p-3 h-48 overflow-y-auto text-xs font-mono space-y-2">
<div className="text-cyan-400">→ nexus dev --hot-reload</div>
<div className="text-white/60">🚀 Starting Nexus development server...</div>
<div className="text-blue-400">✓ TypeScript compiler ready</div>
<div className="text-blue-400">✓ Hot module replacement enabled</div>
<div className="text-cyan-400">✓ Server running on https://localhost:3000</div>
<div className="text-purple-400">✓ GraphQL playground available</div>
<div className="text-yellow-400">⚡ Watching for file changes...</div>
<div className="text-white/40">Dashboard.tsx compiled in 847ms</div>
<div className="text-cyan-400">→ nexus test --watch</div>
<div className="text-cyan-400">✅ 47 tests passed</div>
<div className="text-white/40">Code coverage: 94.3%</div>
<div className="text-blue-400">→ Ready for production deployment</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-gray-950/80 overflow-hidden">
<div className="flex items-center justify-between p-3 border-b border-white/10">
<div className="flex items-center gap-2">
<svg className="lucide lucide-eye w-4 h-4 text-blue-400" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-sm font-medium">Live Preview</span>
</div>
<button className="p-1 rounded hover:bg-white/10"><svg className="lucide lucide-external-link w-3.5 h-3.5" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg></button>
</div>
<div className="p-3 space-y-3">
<div className="rounded-lg bg-blue-500/20 p-3">
<div className="mb-2 flex items-center justify-between">
<span className="text-xs font-medium">Автоматизация бизнеса</span>
<span className="text-xs text-cyan-400">98/100</span>
</div>
<div className="h-1 w-full rounded-full bg-white/10">
<div className="h-1 rounded-full bg-cyan-400" style={{width: '98%'}}></div>
</div>
</div>
<div className="space-y-2 text-xs">
<div className="flex items-center justify-between">
<span className="text-white/60">Финансы</span>
<span className="text-cyan-400">+ 108%</span>
</div>
<div className="flex items-center justify-between">
<span className="text-white/60">Время выполнения </span>
<span className="text-blue-400">3.6s</span>
</div>
<div className="flex items-center justify-between">
<span className="text-white/60">Метрика</span>
<span className="text-purple-400">ROI</span>
</div>
</div>
</div>
</div>
</aside>
</div>

</div>
</div>
</section>

<section className="pt-32 pb-32">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-16">
<h2 className="text-4xl sm:text-5xl tracking-tight mb-6" style={{fontWeight: '300'}}>
            Trusted by industry leaders.
          </h2>
<p className="text-xl text-white/60 max-w-2xl mx-auto">
            See how forward-thinking companies use Nexus Studio to build exceptional digital experiences.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent overflow-hidden hover:border-white/20 transition">
<div className="relative aspect-video overflow-hidden">
<img alt="Modern office space with developers" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c7c582f0-2e26-487e-ae18-fee9da10561d_800w.jpg"/>
<div className="bg-gradient-to-t from-black/65 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-4 left-4">
<span className="text-xs px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10">Case Study</span>
</div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-neutral-50/5 border border-neutral-50/20 backdrop-blur-md flex items-center justify-center">
<svg className="lucide lucide-trending-up w-5 h-5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div className="">
<h3 className="font-semibold tracking-tight">TechCorp Inc.</h3>
<p className="text-sm text-white/70">Fortune 500 Company</p>
</div>
</div>
</div>
</div>
<div className="p-8">
<h4 className="text-xl font-semibold tracking-tight mb-3">ИИ агенты для автоматизации</h4>
<p className="leading-relaxed text-white/60 mb-6">Интеллектуальные ИИ-агенты для бизнеса: повышение эффективности процессов за счет автоматизации рутинных операций и аналитики в режиме 24/7.</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/794112a2-89b3-41cb-9c68-582e6af6132f_320w.jpg\')'}}></div>
<div className="">
<p className="text-sm font-medium">Sarah Chen</p>
<p className="text-xs text-white/50">VP of Engineering</p>
</div>
</div>
<svg className="lucide lucide-arrow-right w-5 h-5 text-white/40 group-hover:text-white transition" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</article>

<article className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent overflow-hidden hover:border-white/20 transition">
<div className="relative aspect-video overflow-hidden">
<img alt="Collaborative team meeting" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/36460156-d7ce-43aa-89af-e013fb87ccfc_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent"></div>
<div className="absolute top-4 left-4">
<span className="text-xs px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10">Case Study</span>
</div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-neutral-50/5 border border-neutral-50/20 backdrop-blur-md flex items-center justify-center">
<svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="">
<h3 className="font-semibold tracking-tight">StartupX</h3>
<p className="text-sm text-white/70">Y Combinator Startup</p>
</div>
</div>
</div>
</div>
<div className="pt-8 pr-8 pb-8 pl-8">
<h4 className="text-xl font-semibold tracking-tight mb-3">Генерация контента</h4>
<p className="leading-relaxed text-white/60 mb-6">Генерация контента с ИИ: создание текстов, изображений и видео для бизнеса. Мгновенное производство качественного контента в нужном стиле и формате.</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f52b9e1e-c3e8-4844-b3c5-28aacdc6b434_320w.jpg\')'}}></div>
<div className="">
<p className="text-sm font-medium">Alex Rodriguez</p>
<p className="text-xs text-white/50">CTO &amp; Co-founder</p>
</div>
</div>
<svg className="lucide lucide-arrow-right w-5 h-5 text-white/40 group-hover:text-white transition" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</article>

<article className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent overflow-hidden hover:border-white/20 transition">
<div className="relative aspect-video overflow-hidden">
<img alt="Data visualization dashboard" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9cd1d4fc-703c-4e4d-a54e-9c08b0644568_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent"></div>
<div className="absolute top-4 left-4">
<span className="text-xs px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10">Case Study</span>
</div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-neutral-50/5 border border-neutral-50/20 backdrop-blur-md flex items-center justify-center">
<svg className="lucide lucide-bar-chart-3 w-5 h-5" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<div className="">
<h3 className="font-semibold tracking-tight">DataFlow Pro</h3>
<p className="text-sm text-white/70">Analytics Platform</p>
</div>
</div>
</div>
</div>
<div className="p-8">
<h4 className="text-xl font-semibold tracking-tight mb-3">Разработка сайтов и ПО</h4>
<p className="leading-relaxed text-white/60 mb-6">Разработка ПО с ИИ: создание надежных решений в сжатые сроки. нтеллектуальные помощники и автотесты обеспечивают качество корпоративного уровня.</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3b6e4af7-ac86-4163-b303-578671458c76_320w.jpg\')'}}></div>
<div className="">
<p className="text-sm font-medium">Maya Patel</p>
<p className="text-xs text-white/50">Head of Platform</p>
</div>
</div>
<svg className="lucide lucide-arrow-right w-5 h-5 text-white/40 group-hover:text-white transition" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</article>
</div>

<div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center">
<div className="lg:text-4xl counter text-3xl text-neutral-50 tracking-tight mb-2" data-suffix="M+" data-target="2000000">150+</div>
<div className="text-white/60">Довольных клиентов</div>
</div>
<div className="text-center">
<div className="lg:text-4xl counter text-3xl text-neutral-50 tracking-tight mb-2" data-suffix="%" data-target="99.99">99.00%</div>
<div className="text-white/60">Реализованных проектов</div>
</div>
<div className="text-center">
<div className="lg:text-4xl counter text-3xl text-neutral-50 tracking-tight mb-2" data-suffix="M+" data-target="50000000">50  M+</div>
<div className="text-white/60">Сохраненных денег</div>
</div>
<div className="text-center">
<div className="lg:text-4xl counter text-3xl text-neutral-50 tracking-tight mb-2" data-suffix="+" data-target="200">300+</div>
<div className="text-white/60">Агентов разработано</div>
</div>
</div>
</div>
</section>

<section className="pt-32 pb-32">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="sm:text-5xl text-4xl tracking-tight mb-6" style={{fontWeight: '300'}}>
            Engineered for excellence.
          </h2>
<p className="text-xl text-white/60 max-w-2xl mx-auto">
            Every feature designed with the same attention to detail you'd expect from a premium experience.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6">
<div className="group hover:border-white/20 transition bg-gradient-to-br from-white/5 to-transparent border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="w-10 h-10 rounded-xl bg-neutral-50/5 border border-neutral-50/20 backdrop-blur-md flex items-center justify-center">
<svg className="lucide lucide-zap w-6 h-6" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mt-4 mb-2">Круглосуточная автоматизация</h3>
<p className="text-white/60">Experience sub-millisecond response times with our globally distributed edge network and intelligent caching.</p>
</div>
<div className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 hover:border-white/20 transition">
<div className="w-10 h-10 rounded-xl bg-neutral-50/5 border border-neutral-50/20 backdrop-blur-md flex items-center justify-center">
<svg className="lucide lucide-shield-check w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mt-4 mb-2">Мгновенная аналитика</h3>
<p className="text-white/60">Bank-grade encryption, SOC 2 Type II compliance, and advanced threat protection built into every layer.</p>
</div>
<div className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 hover:border-white/20 transition">
<div className="w-10 h-10 rounded-xl bg-neutral-50/5 border border-neutral-50/20 backdrop-blur-md flex items-center justify-center">
<svg className="lucide lucide-globe w-6 h-6" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mt-4 mb-2">Бесперебойная работа</h3>
<p className="text-white/60">Deploy instantly to 200+ edge locations worldwide. Your users get the fastest experience, anywhere.</p>
</div>
<div className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 hover:border-white/20 transition">
<div className="w-10 h-10 rounded-xl bg-neutral-50/5 border border-neutral-50/20 backdrop-blur-md flex items-center justify-center">
<svg className="lucide lucide-brain w-6 h-6" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mt-4 mb-2">Масштабирование</h3>
<p className="text-white/60">Machine learning algorithms optimize your deployments, predict issues, and suggest performance improvements.</p>
</div>
<div className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 hover:border-white/20 transition">
<div className="w-10 h-10 rounded-xl bg-neutral-50/5 border border-neutral-50/20 backdrop-blur-md flex items-center justify-center">
<svg className="lucide lucide-layers w-6 h-6" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mt-4 mb-2">Точность данных</h3>
<p className="text-white/60">Connect with your favorite tools and services through our comprehensive API and webhook ecosystem.</p>
</div>
<div className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 hover:border-white/20 transition">
<div className="w-10 h-10 rounded-xl bg-neutral-50/5 border border-neutral-50/20 backdrop-blur-md flex items-center justify-center">
<svg className="lucide lucide-users w-6 h-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mt-4 mb-2">Эффективность процессов</h3>
<p className="text-white/60">Built for teams. Real-time collaboration, advanced permissions, and integrated communication tools.</p>
</div>
</div>
</div>
</section>

<section className="pt-32 pb-32">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-10 sm:p-14">
<h2 className="sm:text-5xl text-4xl tracking-tight mb-6" style={{fontWeight: '300'}}>Остались вопросы?</h2>
<p className="text-xl text-white/60 max-w-2xl mr-auto mb-10 ml-auto" style={{}}>Можете позвонить нам и мы на них ответим</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition">
<span className="">Наш номер телефона</span>
<svg className="lucide lucide-arrow-right w-4.5 h-4.5 transition-transform duration-150 group-hover:translate-x-0.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="inline-flex gap-2 hover:bg-white/10 transition text-sm font-semibold border-white/30 border rounded-full pt-4 pr-8 pb-4 pl-8 gap-x-2 gap-y-2 items-center" style={{}}>+7 (930) 401-88-11<svg className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg></button>
</div>
<p className="text-sm text-white/40 mt-6">
            Free 14-day trial. No credit card required. Cancel anytime.
          </p>
</div>
</div>
</section>

<footer className="xl:pb-4 border-white/10 border-t pt-16 pb-16">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="grid md:grid-cols-5 gap-12 mb-12">
<div className="md:col-span-2">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-full bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center">
<svg className="lucide lucide-hexagon w-4 h-4 text-white" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
</div>
<span className="text-xl font-semibold tracking-tight">Nexus Studio</span>
</div>
<p className="text-white/60 max-w-md mb-6">Платформа, которая позволяет командам создавать экстраординарные цифровые решения с бескомпромиссным качеством.</p>
</div>
<div className="">
<h5 className="font-semibold tracking-tight mb-4">Платформа</h5>
<ul className="space-y-3 text-white/60">
<li className="">Облачные решения</li>
<li className="">Разработка с нуля</li>
<li className=""><a className="hover:text-white transition" href="#">Аналитика и маркетинг</a></li>
<li className=""></li>
</ul>
</div>
<div className="">
<h5 className="font-semibold tracking-tight mb-4">Решения</h5>
<ul className="space-y-3 text-white/60">
<li className=""><a className="hover:text-white transition" href="#">Для стартапов</a></li>
<li className=""><a className="hover:text-white transition" href="#">Для компаний</a></li>
<li className=""><a className="hover:text-white transition" href="#">E-commerce</a></li>
</ul>
</div>
<div className="">
<h5 className="font-semibold tracking-tight mb-4">Support</h5>
<ul className="space-y-3 text-white/60">
<li className=""><a className="hover:text-white transition" href="#">Документации</a></li>
<li className=""><a className="hover:text-white transition" href="#">API - интеграция</a></li>
<li className=""><a className="hover:text-white transition" href="#">Community</a></li>
</ul>
</div>
</div>
<div className="flex flex-col items-center justify-between pt-8 border-t border-white/10 md:flex-row md:pt-4">
<p className="text-sm text-white/40">© 2025 Nexus Studio,Все права защищены</p>
<div className="flex gap-6 text-white/40 text-sm mt-4 md:mt-0">
<a className="hover:text-white transition" href="/#">+7 (930) 401-88-11 </a>
</div>
</div>
</div>
</footer>



    </>
  );
}
