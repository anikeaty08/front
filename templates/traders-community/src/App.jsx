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



<!-- Yandex.Metrika counter -->
<script type="text/javascript">
(function(m,e,t,r,i,k,a){
m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=106972952', 'ym');
ym(106972952, 'init', {ssr:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Particle System
        const canvas = document.getElementById('stars');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        function resize() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        }

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 1.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.1;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x > width) this.x = 0;
                if (this.x < 0) this.x = width;
                if (this.y > height) this.y = 0;
                if (this.y < 0) this.y = height;
            }
            draw() {
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            const count = width < 768 ? 50 : 100; 
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', () => {
            resize();
            initParticles();
        });

        resize();
        initParticles();
        animate();

        // Countdown Timer Logic
        function startTimer() {
            // Set a deadline (e.g., 24 hours from now)
            const countTo = new Date();
            countTo.setHours(countTo.getHours() + 24);
            
            // Or use a fixed date: const countTo = new Date('2023-12-31T23:59:59');

            const daysEl = document.getElementById('days');
            const hoursEl = document.getElementById('hours');
            const minutesEl = document.getElementById('minutes');
            const secondsEl = document.getElementById('seconds');

            function update() {
                const now = new Date().getTime();
                const distance = countTo - now;

                // Loop the timer if it ends for visual purposes
                if (distance < 0) {
                   countTo.setHours(countTo.getHours() + 24);
                   return;
                }

                const d = Math.floor(distance / (1000 * 60 * 60 * 24));
                const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const s = Math.floor((distance % (1000 * 60)) / 1000);

                daysEl.innerText = d.toString().padStart(2, '0');
                hoursEl.innerText = h.toString().padStart(2, '0');
                minutesEl.innerText = m.toString().padStart(2, '0');
                secondsEl.innerText = s.toString().padStart(2, '0');
            }

            setInterval(update, 1000);
            update();
        }

        startTimer();
    
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
      

<div id="canvas-container">
<canvas height="1024" id="stars" width="1440"></canvas>
</div>
<div className="fixed inset-0 z-[-2] bg-grid pointer-events-none"></div>
<div className="fixed top-[-20%] left-[20%] w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none"></div>

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#0B0F1A]/70 backdrop-blur-xl transition-all duration-300">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-cyan to-brand-purple flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(0,245,255,0.3)]">
                    J
                </div>
<span className="text-sm font-semibold text-white/90 tracking-[0.2em]">TRADERS COMMUNITY</span>
</div>
<div className="">
<a className="hover:text-white transition-colors hover:bg-white/5 hover:border-brand-cyan/30 text-xs font-medium text-white/70 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4" href="https://t.me/+gmIgEcCUbXhhOWVi">Доступ для участников</a>
</div>
</div>
</nav>

<main className="pt-32 pb-20 relative">

<section className="flex flex-col text-center max-w-7xl mr-auto mb-24 ml-auto pr-6 pl-6 relative items-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan text-xs font-medium tracking-wide mb-8 reveal-text" style={{animationDelay: '0.1s'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                LIVE STATUS
            </div>

<div className="reveal-text mb-8 relative group" style={{animationDelay: '0.2s'}}>
<div className="absolute inset-0 bg-yellow-400/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
<div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-[3px] border-yellow-400 overflow-hidden shadow-[0_0_30px_rgba(255,215,0,0.2)]">
<img alt="Canada predictor" className="transform transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5ae526b0-99a5-4d08-9a50-a47fa7633327_800w.jpg"/>
</div>
</div>

<h1 className="md:text-6xl reveal-text text-4xl font-semibold text-white tracking-tight mb-6" style={{animationDelay: '0.3s'}}>𝐓𝐑𝐀𝐃𝐄𝐑𝐒 𝐂𝐎𝐌𝐌𝐔𝐍𝐈𝐓𝐘®💸</h1>

<div className="flex items-center justify-center gap-4 md:gap-8 mb-6 reveal-text" style={{animationDelay: '0.4s'}}>
<div className="flex flex-col items-center">
<span className="text-3xl md:text-4xl font-mono font-bold text-yellow-400" id="days">01</span>
<span className="text-[10px] md:text-xs text-yellow-400/70 tracking-widest mt-1">DAYS</span>
<span className="text-yellow-400 font-bold mt-1">:</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl md:text-4xl font-mono font-bold text-yellow-400" id="hours">00</span>
<span className="text-[10px] md:text-xs text-yellow-400/70 tracking-widest mt-1">HOURS</span>
<span className="text-yellow-400 font-bold mt-1">:</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl md:text-4xl font-mono font-bold text-yellow-400" id="minutes">00</span>
<span className="text-[10px] md:text-xs text-yellow-400/70 tracking-widest mt-1">MINUTES</span>
<span className="text-yellow-400 font-bold mt-1">:</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl md:text-4xl font-mono font-bold text-yellow-400" id="seconds">00</span>
<span className="text-[10px] md:text-xs text-yellow-400/70 tracking-widest mt-1">SECONDS</span>
</div>
</div>

<div className="md:text-lg uppercase reveal-text text-base font-bold text-white tracking-widest bg-white/5 border-white/10 border rounded-lg mb-10 pt-2 pr-4 pb-2 pl-4 backdrop-blur-sm" style={{animationDelay: '0.5s'}}>[ Канал прогнозов №1 для vip-гостей ]</div>

<div className="flex flex-col items-center gap-4 w-full max-w-md reveal-text" style={{animationDelay: '0.6s'}}>
<a className="group hover:bg-[#0077b5] transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,136,204,0.4)] flex items-center justify-center gap-3 overflow-hidden text-lg font-bold text-white bg-[#0088cc] w-full border-white/20 rounded-xl border-t pt-4 pb-4 relative shadow-lg" href="https://t.me/+gmIgEcCUbXhhOWVi">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer"></div>
<iconify-icon className="relative z-10" icon="bxl:telegram" width="28"></iconify-icon>
<span className="z-10 cursor-pointer relative" onclick="window.location.href='https://t.me/+gmIgEcCUbXhhOWVi'" role="button">Подписаться</span>
<iconify-icon className="relative z-10" icon="bxl:telegram" width="28"></iconify-icon>
</a>

<a className="hover:text-white transition-colors group/ad text-sm font-medium text-gray-400" href="https://t.me/+vRU6vJxlX0JjODJl">
                    Ads manage by <span className="text-yellow-400 group-hover/ad:underline underline-offset-4 decoration-yellow-400">Sureshots</span>
</a>
</div>

<div className="absolute top-1/2 left-10 hidden lg:block animate-float">
<iconify-icon className="text-brand-cyan/20 text-6xl" icon="lucide:bar-chart-2"></iconify-icon>
</div>
<div className="absolute top-1/3 right-10 hidden lg:block animate-float" style={{animationDelay: '2s'}}>
<iconify-icon className="text-brand-purple/20 text-6xl" icon="lucide:trending-up"></iconify-icon>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card group hover:-translate-y-2 transition-transform duration-500 rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-cyan/20 to-transparent flex items-center justify-center mb-6 text-brand-cyan border border-brand-cyan/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="" icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Быстрые обновления</h3>
<p className="leading-relaxed text-sm text-gray-400">Молниеносная доставка сигналов гарантирует, что вы никогда не пропустите движение рынка.</p>
</div>

<div className="glass-card rounded-2xl p-8 group hover:-translate-y-2 transition-transform duration-500">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-transparent flex items-center justify-center mb-6 text-purple-400 border border-purple-500/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="" icon="lucide:globe" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Международный</h3>
<p className="leading-relaxed text-sm text-gray-400">Объединяя трейдеров со всего мира в единую, унифицированную экосистему премиум-класса.</p>
</div>

<div className="glass-card rounded-2xl p-8 group hover:-translate-y-2 transition-transform duration-500">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-transparent flex items-center justify-center mb-6 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Безопасно и надежно</h3>
<p className="leading-relaxed cursor-pointer text-sm text-gray-400" onclick="window.location.href='/Безопасно и надежно'" role="button">Проверенная точность и прозрачность. Ваше доверие для нас превыше всего.</p>
</div>

<div className="glass-card rounded-2xl p-8 group hover:-translate-y-2 transition-transform duration-500">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-transparent flex items-center justify-center mb-6 text-amber-400 border border-amber-500/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="" icon="lucide:crown" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Премиум VIP</h3>
<p className="leading-relaxed text-sm text-gray-400">Эксклюзивные материалы, доступные только членам нашего сообщества. Повысьте свой уровень уже сегодня.</p>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 mb-24">
<div className="relative rounded-3xl overflow-hidden border border-white/10 glass-card">
<div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/10 via-transparent to-brand-purple/10"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-12 gap-8">
<div className="text-center md:text-left max-w-lg">
<h2 className="md:text-3xl text-2xl font-semibold text-white tracking-tight mb-3">Готовы занять лидирующие позиции на рынке?</h2>
<p className="leading-relaxed text-sm text-gray-400">Присоединяйтесь к тысячам успешных пользователей официального канала прогнозирования результатов в Мире.</p>
</div>
<a className="group block hover:bg-[#232a3b] transition-all duration-300 hover:scale-[1.02] overflow-hidden text-white bg-[#1c2230] border-white/10 border rounded-xl pt-4 pr-8 pb-4 pl-8 relative" href="https://t.me/+gmIgEcCUbXhhOWVi">
<div className="flex items-center gap-3">
<iconify-icon className="text-brand-cyan" icon="lucide:send" width="20"></iconify-icon>
<span className="font-bold tracking-tight">JOIN CHANNEL</span>
<iconify-icon className="text-gray-400 group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="20"></iconify-icon>
</div>
</a>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#0B0F1A]">
<div className="flex flex-col md:flex-row gap-6 max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
<div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-[10px]">J</div>
<span className="text-xs font-medium tracking-widest">TRADERS COMMUNITY</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="text-xs text-gray-600">© 2026 Canada predictor.</div>
</div>
<div className="flex gap-4">
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<iconify-icon className="" height="18" icon="lucide:twitter" style={{color: 'rgb(255, 255, 255)'}} width="18"></iconify-icon>
</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
</a>
</div>
</div>
</footer>
</main>



    </>
  );
}
