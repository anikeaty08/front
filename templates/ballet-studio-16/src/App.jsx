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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    document.querySelectorAll('.slider-prev, .slider-next').forEach(btn => {
        btn.addEventListener('click', () => {
            const track = document.getElementById(btn.dataset.target);
            const card = track.querySelector('.flex-shrink-0');
            const cardWidth = card.offsetWidth + 16;
            const isDesktop = window.innerWidth >= 768;

            let scrollAmount;
            if (btn.dataset.target === 'gallery-track') {
                scrollAmount = isDesktop ? cardWidth * 2 : cardWidth;
            } else if (btn.dataset.target === 'teachers-track') {
                scrollAmount = isDesktop ? cardWidth * 2 : cardWidth;
            } else {
                scrollAmount = isDesktop ? cardWidth * 3 : cardWidth;
            }

            const direction = btn.classList.contains('slider-prev') ? -1 : 1;
            track.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
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
      

<nav className="fixed top-0 left-0 w-full z-50 bg-[#FDFBFF]/90 backdrop-blur-md border-b border-[#E1CDFF]/50">
<div className="md:px-8 flex h-20 max-w-7xl mr-auto ml-auto pr-4 pl-4 items-center justify-between">
<a className="flex items-center gap-2" href="#">

<svg className="h-6 w-auto" fill="none" height="27" viewbox="0 0 134 27" width="134">
<path className="" d="M0 5.78h4.293v2.613h.174A4.7 4.7 0 015.86 6.295c.657-.577 1.557-.866 2.697-.866 1.044 0 1.932.265 2.668.794.735.529 1.265 1.301 1.596 2.318h.086c.134-.431.343-.837.623-1.219.28-.381.624-.708 1.029-.982a5.55 5.55 0 011.362-.661 5.138 5.138 0 011.625-.25c1.469 0 2.596.53 3.378 1.585.784 1.056 1.175 2.564 1.175 4.52v9.657h-4.292v-9.303c0-1.957-.697-2.936-2.09-2.936-.638 0-1.218.187-1.739.558-.522.372-.784.938-.784 1.702v9.98H8.902v-9.304c0-1.957-.696-2.936-2.088-2.936-.31 0-.615.044-.913.133-.3.088-.571.23-.812.425a2.215 2.215 0 00-.58.72 2.123 2.123 0 00-.217.982v9.98H0V5.78zM36.336 21.257c-.776 0-1.422-.245-1.938-.737-.515-.49-.84-1.15-.976-1.976h-.173c-.234 1.003-.749 1.765-1.544 2.284-.797.52-1.777.78-2.942.78-1.535 0-2.709-.411-3.525-1.233-.815-.822-1.222-1.91-1.222-3.262 0-1.627.588-2.836 1.762-3.63 1.174-.793 2.772-1.19 4.792-1.19h2.417v-.972c0-.746-.194-1.341-.582-1.783-.389-.442-1.04-.663-1.95-.663-.856 0-1.535.187-2.04.56a5.493 5.493 0 00-1.252 1.268L24.6 8.391a6.71 6.71 0 012.345-2.178c.94-.523 2.217-.786 3.83-.786 2.175 0 3.806.482 4.895 1.445 1.086.964 1.631 2.37 1.631 4.216v6.78h1.428v3.39h-2.39l-.003-.001zm-5.971-2.682c.718 0 1.334-.155 1.85-.469.513-.312.77-.82.77-1.52v-1.814h-2.098c-1.69 0-2.535.576-2.535 1.727v.438c0 .565.174.98.525 1.243.349.264.845.395 1.486.395h.002zM40.615 21.267V6.01h4.25v3.313h.144c.077-.425.211-.837.401-1.235.19-.397.445-.75.762-1.062.316-.31.694-.557 1.135-.74.44-.184.958-.276 1.551-.276h.747v4.01h-1.062c-1.245 0-2.167.165-2.77.495-.603.33-.906.94-.906 1.83v8.92h-4.252zM61.912 6.011h3.949l-5.78 17.545c-.383 1.177-.92 2.046-1.616 2.605-.697.56-1.694.839-2.991.839h-2.632v-3.33h2.832l.515-1.68-5.264-15.98h4.206l2.202 7.093 1.087 4.401h.172l1.116-4.401 2.203-7.094.001.002zM70.34 7.498a7.882 7.882 0 011.916-.739 8.666 8.666 0 012.085-.25c1.05 0 2.022.179 2.916.538a6.785 6.785 0 012.32 1.528c.654.661 1.163 1.464 1.533 2.412.37.948.554 2.01.554 3.187 0 .986-.168 1.934-.504 2.843a6.932 6.932 0 01-1.504 2.412c-.667.699-1.496 1.256-2.483 1.672-.99.415-2.136.625-3.44.625a17.253 17.253 0 01-2.4-.187c-.339-.047-.671-.11-.992-.187a31.582 31.582 0 01-1.368-.351c-.46-.129-.897-.276-1.313-.439.038-.143.071-.385.1-.725.027-.34.05-.706.063-1.1a85.196 85.196 0 00.05-2.068V5.617c0-.814-.011-1.525-.035-2.133a44.452 44.452 0 00-.086-1.572c-.034-.44-.077-.808-.127-1.105a7.374 7.374 0 00-.165-.746V.004h3.278v.057c-.056.2-.108.45-.156.746-.047.297-.09.665-.127 1.105-.038.44-.068.966-.086 1.572a70.4 70.4 0 00-.028 2.133v1.881zm0 8.944c0 .775.008 1.417.021 1.925.015.509.036.915.064 1.22.397.307.937.566 1.616.775a7.528 7.528 0 002.242.316 4.2 4.2 0 001.845-.403 4.007 4.007 0 001.433-1.163c.398-.508.708-1.124.93-1.851.222-.728.334-1.551.334-2.47 0-1.033-.095-1.992-.284-2.878-.19-.886-.483-1.651-.879-2.297A4.417 4.417 0 0076.144 8.1c-.614-.365-1.347-.546-2.199-.546-.718 0-1.39.149-2.014.446a4.335 4.335 0 00-1.588 1.292v7.15h-.002zM83.258 16.862c0-.786.16-1.47.48-2.048a4.727 4.727 0 011.277-1.48 7.004 7.004 0 011.816-.993c.68-.253 1.384-.453 2.112-.597a18.51 18.51 0 012.156-.298 32.11 32.11 0 011.949-.096v-.762c0-.657-.084-1.226-.25-1.704-.169-.478-.404-.874-.71-1.188a2.889 2.889 0 00-1.1-.703 4.112 4.112 0 00-1.409-.232c-.354 0-.704.03-1.049.089-.345.06-.702.159-1.071.298-.37.14-.758.329-1.167.569-.409.24-.85.542-1.322.91l-.147-.088 1.004-2.107a7.36 7.36 0 01.96-.366 8.985 8.985 0 011.956-.359c.34-.025.696-.038 1.071-.038 1.035 0 1.918.127 2.651.382.734.253 1.335.602 1.802 1.046.466.444.81.962 1.026 1.555a5.51 5.51 0 01.325 1.904v4.872c0 .846.013 1.587.037 2.22.025.632.055 1.178.088 1.635.034.46.079.843.133 1.15.054.309.11.57.17.777v.06h-3.264v-.06c.049-.159.086-.338.11-.538.025-.199.047-.439.068-.718-.207.18-.45.364-.732.553-.28.19-.601.361-.96.516-.36.155-.757.28-1.196.374a6.845 6.845 0 01-1.44.142c-1.713 0-3.036-.406-3.972-1.219-.935-.812-1.402-1.964-1.402-3.458zm9.79-4.349c-.896.01-1.757.062-2.584.157-.827.094-1.557.29-2.193.59a3.738 3.738 0 00-1.522 1.276c-.379.554-.57 1.289-.57 2.205 0 1.175.292 2.072.873 2.69.58.617 1.383.925 2.406.925a3.94 3.94 0 001.292-.202 4.377 4.377 0 001.034-.508c.3-.204.554-.429.76-.672.207-.244.364-.48.472-.71.018-.379.03-.8.03-1.263v-4.49l.002.002zM98.43 5.588a49.245 49.245 0 00-.12-3.685 11.553 11.553 0 00-.127-1.1 8.027 8.027 0 00-.162-.742V.004h3.261v.057a6.77 6.77 0 00-.155.742c-.047.295-.09.664-.127 1.1-.037.438-.065.96-.084 1.564a68.813 68.813 0 00-.028 2.121v10.186c0 .81.009 1.517.028 2.121.019.605.047 1.126.084 1.564.037.439.08.805.127 1.1.047.294.099.542.155.742v.057h-3.261V21.3c.056-.2.11-.448.162-.742.052-.295.093-.662.127-1.1.034-.438.061-.96.084-1.564a53.81 53.81 0 00.035-2.121V5.588zM103.419 5.588c0-.808-.011-1.517-.035-2.121a48.082 48.082 0 00-.084-1.564 11.782 11.782 0 00-.127-1.1 7.91 7.91 0 00-.163-.742V.004h3.262v.057c-.056.2-.109.448-.155.742-.047.295-.09.664-.127 1.1-.038.438-.066.96-.084 1.564a68.813 68.813 0 00-.028 2.121v10.186c0 .81.009 1.517.028 2.121.018.605.046 1.126.084 1.564.037.439.08.805.127 1.1.046.294.099.542.155.742v.057h-3.262V21.3c.056-.2.111-.448.163-.742.052-.295.093-.662.127-1.1.033-.438.061-.96.084-1.564.024-.604.035-1.31.035-2.121V5.588zM116.102 21.516a8.883 8.883 0 01-3.073-.523 7.152 7.152 0 01-2.496-1.532c-.709-.673-1.267-1.504-1.676-2.496-.409-.991-.612-2.125-.612-3.4 0-1.126.186-2.168.562-3.13a7.692 7.692 0 011.551-2.503 7.177 7.177 0 012.311-1.658 6.849 6.849 0 012.858-.597c1.025 0 1.954.177 2.82.53a6.388 6.388 0 012.254 1.54c.634.672 1.136 1.504 1.506 2.495.37.992.568 2.12.597 3.385a488.539 488.539 0 00-3.337-.045c-1.113-.01-2.27-.015-3.471-.015-.856 0-1.691.006-2.503.015-.812.01-1.544.025-2.193.045.059 1.037.218 1.973.479 2.81.262.836.62 1.552 1.078 2.143a4.66 4.66 0 001.668 1.368c.656.32 1.397.478 2.224.478.571 0 1.11-.068 1.616-.202a5.404 5.404 0 003.316-2.46l.177.09-1.092 2.659c-.532.28-1.167.515-1.906.71-.739.195-1.624.291-2.658.291v.002zm-1.964-9.116c.984 0 1.971-.002 2.961-.008a86.14 86.14 0 002.695-.053 9.876 9.876 0 00-.502-2.33c-.246-.689-.562-1.27-.945-1.75a4.016 4.016 0 00-1.359-1.105 3.834 3.834 0 00-1.728-.39c-.571 0-1.096.127-1.574.382s-.894.62-1.247 1.1c-.354.478-.64 1.063-.857 1.756-.216.694-.345 1.483-.384 2.37.442.02.911.03 1.404.03h1.536V12.4zM130.513 20.303c.308 0 .612-.057.915-.172.302-.113.593-.27.875-.466.282-.197.553-.424.814-.677.261-.253.504-.521.73-.8l.153.077-.999 2.505a29.59 29.59 0 01-.453.224c-.18.09-.394.172-.646.25a6.865 6.865 0 01-.885.202 7.355 7.355 0 01-1.199.085c-1.373 0-2.441-.376-3.205-1.128-.763-.752-1.146-1.927-1.146-3.523V6.504l-2.582.092v-1.37c.318.022.697.037 1.137.048.441.01.922.015 1.445.015a58.426 58.426 0 00-.054-1.953 36.11 36.11 0 00-.093-1.477 10.603 10.603 0 00-.284-1.796V0h3.55v.062c-.061.197-.117.44-.169.731-.053.291-.096.643-.131 1.058-.036.416-.067.905-.092 1.47-.026.565-.042 1.22-.054 1.968.646-.01 1.279-.022 1.899-.04a61.595 61.595 0 002.983-.14c.353-.026.586-.048.7-.07l-.276 1.588a91.135 91.135 0 01-1.645-.048 71.056 71.056 0 00-1.691-.047l-1.968-.03v10.703c0 .642.069 1.164.207 1.564.139.399.318.714.538.94.22.23.472.384.752.467.28.084.572.125.868.125l.006.002z" fill="#6432C9"></path>
</svg>
</a>
<button className="hover:bg-[#5329A8] transition-colors duration-200 text-xs font-medium text-white bg-[#6432C9] rounded-full pt-2.5 pr-6 pb-2.5 pl-6" onclick="document.getElementById('booking-modal').showModal()">Спробувати</button>
</div>
</nav>
<main className="pt-20 pb-16 space-y-24">

<section className="md:px-12 lg:px-20 w-full pt-8 pr-4 pb-8 pl-4">
<div className="flex flex-col md:flex-row gap-8 md:gap-12 gap-x-8 gap-y-8 items-center">

<div className="w-full md:w-1/2">
<img alt="Mary Ballet" className="w-full aspect-video md:aspect-auto h-auto rounded-2xl object-cover" src="https://maryballet.com.ua/4f031b943c33f63b55758d3488b595ca.jpg"/>
</div>

<div className="md:w-1/2 text-left w-full">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E1CDFF]/30 border border-[#E1CDFF] shadow-sm mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FE7D34] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#FE7D34]"></span>
</span>
<span className="text-xs font-medium text-zinc-600">Набір у нові групи відкритий</span>
</div>
<h1 className="md:text-6xl leading-[1.1] text-4xl font-medium text-zinc-900 tracking-tight mb-6">Пробне заняття<br/> з балету
  у Києві</h1>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-3">
<span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E1CDFF]/50 border border-[#E1CDFF] flex items-center justify-center">
<iconify-icon className="text-[#6432C9]" icon="solar:check-circle-linear" width="14"></iconify-icon>
</span>
<span className="text-zinc-700 font-light">Сильні та підтягнуті м'язи</span>
</li>
<li className="flex items-center gap-3">
<span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E1CDFF]/50 border border-[#E1CDFF] flex items-center justify-center">
<iconify-icon className="text-[#6432C9]" icon="solar:check-circle-linear" width="14"></iconify-icon>
</span>
<span className="text-zinc-700 font-light">Легкість у русі</span>
</li>
<li className="flex items-center gap-3">
<span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E1CDFF]/50 border border-[#E1CDFF] flex items-center justify-center">
<iconify-icon className="text-[#6432C9]" icon="solar:check-circle-linear" width="14"></iconify-icon>
</span>
<span className="text-zinc-700 font-light">Впевнена постава</span>
</li>
</ul>
<p className="leading-relaxed text-lg font-light text-zinc-600 mb-4">Спробуй балет всього за <span className="text-[#6432C9] font-medium">250 грн</span> <span className="text-zinc-400 line-through decoration-zinc-400 decoration-1">450 грн</span>. Ранкові, денні та вечірні групи для будь-якого рівня підготовки. Місячний абонемент від 1600 грн.</p>
<div className="flex flex-wrap gap-3 text-xs mt-4 mb-4 pt-4 pb-4 gap-x-3 gap-y-3">
<div className="flex text-[#6432C9] bg-[#E1CDFF]/20 border-[#E1CDFF]/30 border rounded-md pt-1 pr-3 pb-1 pl-3 gap-x-1.5 gap-y-1.5 items-center">
<iconify-icon className="text-[#FE7D34]" height="12" icon="solar:sun-2-linear" style={{color: 'rgb(254, 125, 52)'}} width="12"></iconify-icon> 10-12:00
                </div>
<div className="flex gap-1.5 text-[#6432C9] bg-[#E1CDFF]/20 border-[#E1CDFF]/30 border rounded-md pt-1 pr-3 pb-1 pl-3 gap-x-1.5 gap-y-1.5 items-center">
<iconify-icon className="text-[#FE7D34]" icon="solar:sun-fog-linear"></iconify-icon> 12-15:00
                </div>
<div className="flex text-[#6432C9] bg-[#E1CDFF]/20 border-[#E1CDFF]/30 border rounded-md pt-1 pr-3 pb-1 pl-3 gap-x-1.5 gap-y-1.5 items-center">
<iconify-icon className="text-[#FE7D34]" icon="solar:moon-stars-linear"></iconify-icon> 17-20:00
                </div>
</div><div className="flex flex-col sm:flex-row gap-x-4 gap-y-4">
<button className="w-full sm:w-auto h-12 px-8 bg-[#6432C9] hover:bg-[#5329A8] text-white text-sm font-medium rounded-full transition-all flex items-center justify-center gap-2" onclick="document.getElementById('booking-modal').showModal()">
<span className="">Записатись на пробне</span>
<iconify-icon className="" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<a className="w-full sm:w-auto h-12 px-8 bg-white hover:bg-[#FDFBFF] border border-[#E1CDFF] text-[#6432C9] text-sm font-medium rounded-full transition-all flex items-center justify-center" href="#audience">
                    Мені підійде?
                </a>
</div>
</div>
</div>
</section>

<section className="md:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4" id="audience">
<div className="md:text-left text-center mb-10">
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight text-left">Кому підійде балет?</h2>
<p className="font-light text-zinc-500 text-left mt-2">Ми створили простір, де комфортно кожній.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group p-6 bg-white border border-[#E1CDFF]/50 hover:border-[#6432C9]/30 rounded-2xl transition-all hover:shadow-md hover:shadow-[#E1CDFF]/20">
<div className="w-10 h-10 rounded-full bg-[#E1CDFF]/30 flex items-center justify-center mb-4 text-[#FE7D34]">
<iconify-icon icon="solar:stars-minimalistic-linear" width="22"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Здійснення мрії</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
        Для тих, хто мріяв з дитинства, але не наважився. Зараз – ідеальний час реалізувати це свідомо.
      </p>
</div>

<div className="group p-6 bg-white border border-[#E1CDFF]/50 hover:border-[#6432C9]/30 rounded-2xl transition-all hover:shadow-md hover:shadow-[#E1CDFF]/20">
<div className="w-10 h-10 rounded-full bg-[#E1CDFF]/30 flex items-center justify-center mb-4 text-[#FE7D34]">
<iconify-icon icon="solar:restart-linear" width="22"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Повернення до танцю</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
        Займалася в юності? Віднови форму, гнучкість та грацію у дорослому віці в комфортному темпі.
      </p>
</div>

<div className="group p-6 bg-white border border-[#E1CDFF]/50 hover:border-[#6432C9]/30 rounded-2xl transition-all hover:shadow-md hover:shadow-[#E1CDFF]/20">
<div className="flex text-[#FE7D34] bg-[#E1CDFF]/30 w-10 h-10 rounded-full mb-4 items-center justify-center">
<iconify-icon className="" height="22" icon="solar:dumbbell-large-minimalistic-linear" style={{color: 'rgb(254, 125, 52)'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Активний стиль життя</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
        Для тих, хто любить спорт. Прокачай тіло по-новому, навіть якщо ніколи не танцювала.
      </p>
</div>

<div className="group p-6 bg-white border border-[#E1CDFF]/50 hover:border-[#6432C9]/30 rounded-2xl transition-all hover:shadow-md hover:shadow-[#E1CDFF]/20">
<div className="flex text-[#FE7D34] bg-[#E1CDFF]/30 w-10 h-10 rounded-full mb-4 items-center justify-center">
<iconify-icon className="" height="22" icon="solar:graph-new-up-outline" style={{color: 'rgb(254, 125, 52)'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Пошук себе</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
        Відкрий нове захоплення. Балет може стати тією самою улюбленою справою, яку ти шукаєш.
      </p>
</div>
</div>
</section>

<section className="bg-[#6432C9] text-white py-24 rounded-3xl mx-4 md:mx-8 shadow-xl shadow-[#6432C9]/20 relative overflow-hidden">

<div className="absolute top-0 right-0 p-12 opacity-10">
<iconify-icon className="" icon="solar:star-fall-linear" width="200"></iconify-icon>
</div>
<div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
<div className="mb-10 text-center md:text-left">
<h2 className="text-2xl font-medium text-white tracking-tight text-left">Що всередині студії?</h2>
<p className="font-light text-[#E1CDFF] text-left opacity-90 mt-2">Тут все що робить заняття балетом приємними і мотивує повертатися знову.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
<div className="space-y-3">
<iconify-icon className="text-[#E1CDFF]" icon="solar:confetti-minimalistic-linear" width="32"></iconify-icon>
<h3 className="text-base font-medium">Атмосфера</h3>
<p className="text-sm text-[#E1CDFF] font-light leading-relaxed opacity-90">
                    Простір підтримки та натхнення, де ти можеш бути собою.
                </p>
</div>
<div className="space-y-3">
<iconify-icon className="text-[#E1CDFF]" icon="solar:medal-star-linear" width="32"></iconify-icon>
<h3 className="text-base font-medium">Професійність</h3>
<p className="text-sm text-[#E1CDFF] font-light leading-relaxed opacity-90">
                    Команда Mary Ballet – це більше, ніж наставники. Це друзі, які допоможуть здійснити мрію.
                </p>
</div>
<div className="space-y-3">
<iconify-icon className="text-[#E1CDFF]" icon="solar:graph-up-linear" width="32"></iconify-icon>
<h3 className="text-base font-medium">Гарантія</h3>
<p className="text-sm text-[#E1CDFF] font-light leading-relaxed opacity-90">
                    Перші результати вже за місяць. Фіксуй прогрес, різницю до/після та отримуй мотивацію.
                </p>
</div>
<div className="space-y-3">
<iconify-icon className="text-[#E1CDFF]" icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
<h3 className="text-base font-medium">Спільнота</h3>
<p className="text-sm text-[#E1CDFF] font-light leading-relaxed opacity-90">
                    Ballet Family: майстер-класи відомих артистів та fantastique івенти для своїх.
                </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden w-full px-4 md:px-8">
<div className="flex mb-6 items-center">
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight text-left mr-6 relative">Атмосфера студії</h2>
<div className="flex gap-2">
<button className="slider-prev w-8 h-8 rounded-full border border-[#E1CDFF] flex items-center justify-center hover:bg-[#E1CDFF] text-[#6432C9] transition-colors" data-target="gallery-track">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="slider-next w-8 h-8 rounded-full border border-[#E1CDFF] flex items-center justify-center hover:bg-[#E1CDFF] text-[#6432C9] transition-colors" data-target="gallery-track">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scroll px-4 md:px-8 pb-8 scroll-smooth" id="gallery-track">
<div className="snap-start flex-shrink-0 w-72 md:w-80 aspect-[4/5] rounded-xl overflow-hidden border border-[#E1CDFF]/30">
<img alt="" className="w-full h-full object-cover" src="https://andreykos.com/lp/mb/gallery-photo-opt-1.png"/>
</div>
<div className="snap-start flex-shrink-0 w-72 md:w-80 aspect-[4/5] rounded-xl overflow-hidden border border-[#E1CDFF]/30">
<img alt="" className="w-full h-full object-cover" src="https://andreykos.com/lp/mb/gallery-photo-opt-1.png"/>
</div>
<div className="snap-start flex-shrink-0 w-72 md:w-80 aspect-[4/5] rounded-xl overflow-hidden border border-[#E1CDFF]/30">
<img alt="" className="w-full h-full object-cover" src="https://andreykos.com/lp/mb/gallery-photo-opt-1.png"/>
</div>
<div className="snap-start flex-shrink-0 w-72 md:w-80 aspect-[4/5] rounded-xl overflow-hidden border border-[#E1CDFF]/30">
<img alt="" className="w-full h-full object-cover" src="https://andreykos.com/lp/mb/gallery-photo-opt-1.png"/>
</div>
<div className="snap-start flex-shrink-0 w-72 md:w-80 aspect-[4/5] rounded-xl overflow-hidden border border-[#E1CDFF]/30">
<img alt="" className="w-full h-full object-cover" src="https://andreykos.com/lp/mb/gallery-photo-opt-1.png"/>
</div>
<div className="snap-start flex-shrink-0 w-72 md:w-80 aspect-[4/5] rounded-xl overflow-hidden border border-[#E1CDFF]/30">
<img alt="" className="w-full h-full object-cover" src="https://andreykos.com/lp/mb/gallery-photo-opt-1.png"/>
</div>
<div className="snap-start flex-shrink-0 w-72 md:w-80 aspect-[4/5] rounded-xl overflow-hidden border border-[#E1CDFF]/30">
<img alt="" className="w-full h-full object-cover" src="https://andreykos.com/lp/mb/gallery-photo-opt-1.png"/>
</div>
<div className="snap-start flex-shrink-0 w-72 md:w-80 aspect-[4/5] rounded-xl overflow-hidden border border-[#E1CDFF]/30">
<img alt="" className="w-full h-full object-cover" src="https://andreykos.com/lp/mb/gallery-photo-opt-1.png"/>
</div>
</div>
</section>

<section className="overflow-hidden w-full px-4 md:px-8">
<div className="flex mb-6 items-center">
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight text-left mr-6">Що кажуть наші учениці</h2>
<div className="flex gap-2">
<button className="slider-prev w-8 h-8 rounded-full border border-[#E1CDFF] flex items-center justify-center hover:bg-[#E1CDFF] text-[#6432C9] transition-colors" data-target="reviews-track">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="slider-next w-8 h-8 rounded-full border border-[#E1CDFF] flex items-center justify-center hover:bg-[#E1CDFF] text-[#6432C9] transition-colors" data-target="reviews-track">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scroll pb-8 scroll-smooth" id="reviews-track">

<div className="snap-start flex-shrink-0 w-[85vw] md:w-[calc(33.333%-11px)] bg-white border border-[#E1CDFF]/50 rounded-2xl p-6 shadow-sm">
<div className="flex items-center gap-3 mb-4">
<img alt="" className="w-10 h-10 rounded-full object-cover" src="https://andreykos.com/lp/mb/gallery-photo-opt-1.png"/>
<div>
<div className="text-sm font-medium text-zinc-900">Поліна Дятлова</div>
<div className="text-xs text-zinc-400">22 роки</div>
</div>
</div>
<div className="flex text-[#FE7D34] gap-1 mb-3">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="leading-relaxed text-sm font-light text-zinc-600">Займаюся вже три роки і хочу сказати, що таку
                студію ще треба пошукати. Професійні педагоги діляться своїм досвідом і навчають новому. Я покращила
                свої танцювальні навички, стала більш пластичною та граційною, спробувала виступати на конкурсах, а
                головне - знайшла чудове коло однодумців.</p>
</div>

<div className="snap-start flex-shrink-0 w-[85vw] md:w-[calc(33.333%-11px)] bg-white border border-[#E1CDFF]/50 rounded-2xl p-6 shadow-sm">
<div className="flex items-center gap-3 mb-4">
<img alt="" className="w-10 h-10 rounded-full object-cover" src="https://andreykos.com/lp/mb/gallery-photo-opt-1.png"/>
<div>
<div className="text-sm font-medium text-zinc-900">Вікторія Цимарман</div>
<div className="text-xs text-zinc-400">26 років</div>
</div>
</div>
<div className="flex text-[#FE7D34] gap-1 mb-3">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="leading-relaxed text-sm font-light text-zinc-600">Я обрала Mary Ballet за професіоналізм та
                індивідуальний підхід до кожної учениці. Зустріла професіоналів свого діла, нову сім'ю, однодумців та
                цінителів мистецтва. Мені дуже подобаються додаткові майстер класи, балетні тури, фотосесії та інші
                заходи, що організовує студія.</p>
</div>

<div className="snap-start flex-shrink-0 w-[85vw] md:w-[calc(33.333%-11px)] bg-white border border-[#E1CDFF]/50 rounded-2xl p-6 shadow-sm">
<div className="flex items-center gap-3 mb-4">
<img alt="" className="w-10 h-10 rounded-full object-cover" src="https://andreykos.com/lp/mb/gallery-photo-opt-1.png"/>
<div>
<div className="text-sm font-medium text-zinc-900">Катерина Бондар</div>
<div className="text-xs text-zinc-400">32 роки</div>
</div>
</div>
<div className="flex text-[#FE7D34] gap-1 mb-3">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="leading-relaxed text-sm font-light text-zinc-600">У студії неймовірні педагоги, справжні профі.
                Ловлю кожен рух, захоплююсь грацією, і із задоволенням слухаю історії балетного життя з перших вуст. Я
                залишаюся з Mary Ballet вже 1,5 роки за емоції, які переживаю у колі своєї балетної сім'ї, і за
                результат та віру у можливості кожної з нас.</p>
</div>

<div className="snap-start flex-shrink-0 w-[85vw] md:w-[calc(33.333%-11px)] bg-white border border-[#E1CDFF]/50 rounded-2xl p-6 shadow-sm">
<div className="flex items-center gap-3 mb-4">
<img alt="" className="w-10 h-10 rounded-full object-cover" src="https://andreykos.com/lp/mb/gallery-photo-opt-1.png"/>
<div>
<div className="text-sm font-medium text-zinc-900">Оксана Мельник</div>
<div className="text-xs text-zinc-400">29 років</div>
</div>
</div>
<div className="flex text-[#FE7D34] gap-1 mb-3">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="leading-relaxed text-sm font-light text-zinc-600">Прийшла без жодної підготовки і вже через місяць
                відчула різницю. Педагоги дуже уважні, завжди пояснять і покажуть. Атмосфера в студії дуже тепла і
                підтримуюча.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 md:px-8">
<div className="flex mb-6 items-center">
<div className="mr-6">
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight text-left mb-1">Наші педагоги</h2>
<p className="text-sm font-light text-zinc-500">Артисти театру та професійні балерини, які стануть твоїми наставниками та друзями.</p>
</div>
<div className="flex gap-2 ml-auto flex-shrink-0">
<button className="slider-prev w-8 h-8 rounded-full border border-[#E1CDFF] flex items-center justify-center hover:bg-[#E1CDFF] text-[#6432C9] transition-colors" data-target="teachers-track">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="slider-next w-8 h-8 rounded-full border border-[#E1CDFF] flex items-center justify-center hover:bg-[#E1CDFF] text-[#6432C9] transition-colors" data-target="teachers-track">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scroll pb-8 scroll-smooth" id="teachers-track">

<div className="snap-start flex-shrink-0 w-[75vw] md:w-[calc(33.333%-16px)] group">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 relative">
<img alt="Марія" className="w-full h-full object-cover" src="https://maryballet.com.ua/77a2b5512a26f00ca882802d5be06a60.jpg"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-white/50">
<span className="text-xs font-medium text-[#6432C9]">8 років досвіду</span>
</div>
</div>
<h3 className="text-lg font-medium text-zinc-900">Марія</h3>
<p className="uppercase text-xs font-medium text-[#FE7D34] tracking-wide mb-2">Головний педагог і засновниця</p>
<p className="leading-relaxed text-sm font-light text-zinc-500">Художній керівник, магістр хореографії, артистка балету при НЗААТУ ім. Вірського</p>
</div>

<div className="snap-start flex-shrink-0 w-[75vw] md:w-[calc(33.333%-16px)] group">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 relative">
<img alt="Олександра" className="w-full h-full object-cover" src="https://maryballet.com.ua/77a2b5512a26f00ca882802d5be06a60.jpg"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-white/50">
<span className="text-xs font-medium text-[#6432C9]">12 років досвіду</span>
</div>
</div>
<h3 className="text-lg font-medium text-zinc-900">Олександра</h3>
<p className="text-xs text-[#FE7D34] font-medium mb-2 uppercase tracking-wide">Старший педагог</p>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Спеціалізується на роботі з новачками. Її методика дозволяє сісти на шпагат безпечно та ефективно.</p>
</div>

<div className="snap-start flex-shrink-0 w-[75vw] md:w-[calc(33.333%-16px)] group">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 relative">
<img alt="Софія" className="w-full h-full object-cover" src="https://maryballet.com.ua/77a2b5512a26f00ca882802d5be06a60.jpg"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-white/50">
<span className="text-xs font-medium text-[#6432C9]">5 років досвіду</span>
</div>
</div>
<h3 className="text-lg font-medium text-zinc-900">Софія</h3>
<p className="text-xs text-[#FE7D34] font-medium mb-2 uppercase tracking-wide">Педагог Body Ballet</p>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Майстер спорту з художньої гімнастики. Її заняття — це ідеальний мікс балету та фітнесу для рельєфу тіла.</p>
</div>

<div className="snap-start flex-shrink-0 w-[75vw] md:w-[calc(33.333%-16px)] group">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 relative">
<img alt="Педагог 4" className="w-full h-full object-cover" src="https://maryballet.com.ua/77a2b5512a26f00ca882802d5be06a60.jpg"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-white/50">
<span className="text-xs font-medium text-[#6432C9]">7 років досвіду</span>
</div>
</div>
<h3 className="text-lg font-medium text-zinc-900">Педагог 4</h3>
<p className="text-xs text-[#FE7D34] font-medium mb-2 uppercase tracking-wide">Педагог</p>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Опис педагога 4.</p>
</div>

<div className="snap-start flex-shrink-0 w-[75vw] md:w-[calc(33.333%-16px)] group">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 relative">
<img alt="Педагог 5" className="w-full h-full object-cover" src="https://maryballet.com.ua/77a2b5512a26f00ca882802d5be06a60.jpg"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-white/50">
<span className="text-xs font-medium text-[#6432C9]">4 роки досвіду</span>
</div>
</div>
<h3 className="text-lg font-medium text-zinc-900">Педагог 5</h3>
<p className="text-xs text-[#FE7D34] font-medium mb-2 uppercase tracking-wide">Педагог</p>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Опис педагога 5.</p>
</div>

<div className="snap-start flex-shrink-0 w-[75vw] md:w-[calc(33.333%-16px)] group">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 relative">
<img alt="Педагог 6" className="w-full h-full object-cover" src="https://maryballet.com.ua/77a2b5512a26f00ca882802d5be06a60.jpg"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-white/50">
<span className="text-xs font-medium text-[#6432C9]">6 років досвіду</span>
</div>
</div>
<h3 className="text-lg font-medium text-zinc-900">Педагог 6</h3>
<p className="text-xs text-[#FE7D34] font-medium mb-2 uppercase tracking-wide">Педагог</p>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Опис педагога 6.</p>
</div>
</div>
</section>

<section className="md:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">

<div className="flex flex-col bg-white border-[#E1CDFF]/50 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm justify-between">
<div className="">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900 mb-8">Де ми знаходимось</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-4">
<h3 className="text-sm font-medium text-[#6432C9] uppercase tracking-wide flex items-center gap-2">
<iconify-icon icon="solar:city-linear"></iconify-icon> Правий берег
                        </h3>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li className="flex items-start gap-2 cursor-default">
<span className="w-1 h-1 rounded-full bg-[#FE7D34] mt-1 flex-shrink-0"></span> м. Хрещатик — вул. Хрещатик, 32а (ГБШ)
                            </li>
<li className="flex items-start gap-2 cursor-default">
<span className="w-1 h-1 rounded-full bg-[#FE7D34] mt-1 flex-shrink-0"></span> м. Контрактова пл., Тараса Шевченка — вул. Кирилівська, 12
                            </li>
<li className="flex items-start gap-2 cursor-default">
<span className="w-1 h-1 rounded-full bg-[#FE7D34] mt-1 flex-shrink-0"></span> м. Почайна — вул. Куренівська, 18
                            </li>
</ul>
</div>
<div className="space-y-4">
<h3 className="text-sm font-medium text-[#6432C9] uppercase tracking-wide flex items-center gap-2">
<iconify-icon icon="solar:city-linear"></iconify-icon> Лівий берег
                        </h3>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li className="flex items-start gap-2 cursor-default">
<span className="w-1 h-1 rounded-full bg-[#FE7D34] mt-1 flex-shrink-0"></span> м. Дарниця — вул. Малишка, 2
                            </li>
<li className="flex items-start gap-2 cursor-default">
<span className="w-1 h-1 rounded-full bg-[#FE7D34] mt-1 flex-shrink-0"></span> м. Позняки — вул. Михайла Драгоманова, 29
                            </li>
</ul>
</div>
</div>
</div>
<div className="mt-8 pt-8 border-t border-[#E1CDFF]/30">
<button className="w-full md:w-auto text-sm font-medium text-[#6432C9] hover:text-[#5329A8] transition-colors flex items-center gap-2" onclick="document.getElementById('booking-modal').showModal()">
                    Обрати студію поруч
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="relative w-full aspect-square lg:aspect-auto rounded-2xl overflow-hidden border border-[#E1CDFF]">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/d/u/0/embed?mid=1_nwQlvAnwi5qy4ClWkbjtR-up8Iic8Y&amp;ehbc=2E312F&amp;noprof=1" style={{border: '0', minHeight: '400px'}} width="100%">
</iframe>
</div>
</div>

<div className="mt-8 bg-[#E1CDFF]/20 border border-[#E1CDFF] rounded-2xl p-6 flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#FE7D34] flex-shrink-0">
<iconify-icon icon="solar:bag-3-linear" width="20"></iconify-icon>
</div>
<div className="">
<h3 className="text-sm font-medium text-zinc-900">Що взяти на заняття?</h3>
<p className="text-xs text-zinc-500 mt-1">Для пробного уроку підійде обтягуючий спортивний одяг та шкарпетки. Волосся слід зібрати у гульку, косу або хвіст. Не забудь про пляшечку води і гарний настрій!</p>
</div>
</div>
</section>

<section className="md:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="md:text-left text-center mb-10">
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight text-left">Абонементи</h2>
<p className="font-light text-zinc-500 text-left mt-2">Є 2 типи: із закріпленням до дат або без. Ціни вказані у
            форматі: із закріпленням / без закріплення.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="flex flex-col hover:border-[#6432C9] transition-all bg-white border-[#E1CDFF] border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="flex-grow">
<h3 className="text-sm font-medium text-zinc-500 mb-2">Старт</h3>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-3xl font-medium text-zinc-900">1600 / 1750</span>
<span className="text-sm text-zinc-500">грн</span>
</div>
<ul className="text-sm text-zinc-600 font-light space-y-2 mb-6">
<li className="flex gap-2"><iconify-icon className="text-[#E1CDFF]" icon="solar:check-circle-linear"></iconify-icon> Можливість пропустити 1 заняття</li>
<li className="flex gap-2"><iconify-icon className="text-[#E1CDFF]" icon="solar:check-circle-linear"></iconify-icon> 400 / 437 грн за 1 заняття</li>
<li className="flex gap-2"><iconify-icon className="text-[#E1CDFF]" icon="solar:check-circle-linear"></iconify-icon> 4 заняття</li>
</ul>
</div>
<button className="w-full py-2.5 rounded-lg border border-[#E1CDFF] text-[#6432C9] text-sm font-medium hover:bg-[#FDFBFF] transition-colors" onclick="document.getElementById('booking-modal').showModal()">Обрати</button>
</div>

<div className="p-6 bg-[#6432C9] text-white rounded-2xl flex flex-col shadow-lg shadow-[#6432C9]/20 relative overflow-hidden transform md:-translate-y-2">
<div className="absolute top-0 right-0 p-3 opacity-10 text-white"><iconify-icon icon="solar:crown-linear" width="60"></iconify-icon></div>
<div className="flex-grow">
<h3 className="text-sm font-medium text-[#E1CDFF] mb-2">Оптимальний</h3>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-3xl font-medium text-white">2800 / 3250</span>
<span className="text-sm text-[#E1CDFF]">грн</span>
</div>
<ul className="text-sm text-zinc-100 font-light space-y-2 mb-6">
<li className="flex gap-2"><iconify-icon className="text-[#FE7D34]" icon="solar:check-circle-linear"></iconify-icon> Можливість пропустити 2 заняття</li>
<li className="flex gap-2"><iconify-icon className="text-[#FE7D34]" icon="solar:check-circle-linear"></iconify-icon> 350 / 406 грн за 1 заняття</li>
<li className="flex gap-2"><iconify-icon className="text-[#FE7D34]" icon="solar:check-circle-linear"></iconify-icon> 8 занять</li>
</ul>
</div>
<button className="w-full py-2.5 rounded-lg bg-white text-[#6432C9] text-sm font-medium hover:bg-zinc-100 transition-colors" onclick="document.getElementById('booking-modal').showModal()">Обрати</button>
</div>

<div className="flex flex-col hover:border-[#6432C9] transition-all bg-white border-[#E1CDFF] border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="flex-grow">
<h3 className="text-sm font-medium text-zinc-500 mb-2">Прогрес</h3>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-3xl font-medium text-zinc-900">3900 /</span>
<span className="text-sm text-zinc-500">грн</span>
</div>
<ul className="text-sm text-zinc-600 font-light space-y-2 mb-6">
<li className="flex gap-2"><iconify-icon className="text-[#E1CDFF]" icon="solar:check-circle-linear"></iconify-icon> Можливість пропустити 1 заняття</li>
<li className="flex gap-2"><iconify-icon className="text-[#E1CDFF]" icon="solar:check-circle-linear"></iconify-icon> Заморозка до 7 днів</li>
<li className="flex gap-2"><iconify-icon className="text-[#E1CDFF]" icon="solar:check-circle-linear"></iconify-icon> 325 / 375 грн за 1 заняття</li>
</ul>
</div>
<button className="w-full py-2.5 rounded-lg border border-[#E1CDFF] text-[#6432C9] text-sm font-medium hover:bg-[#FDFBFF] transition-colors" onclick="document.getElementById('booking-modal').showModal()">Обрати</button>
</div>
</div>
</section>

<section className="md:px-8 max-w-3xl mx-auto px-4">
<div className="mb-10 text-center">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900">Часті питання</h2>
<p className="text-sm text-zinc-500 mt-2 font-light">
                    Все простіше, ніж здається.
                </p>
</div>
<div className="space-y-4">
<details className="group bg-white border border-[#E1CDFF] rounded-xl overflow-hidden cursor-pointer">
<summary className="flex justify-between items-center p-6 text-zinc-900 font-medium select-none">
                        Якщо у мене не стабільний графік?
                        <span className="transform group-open:rotate-180 transition-transform text-[#6432C9]">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-500 font-light leading-relaxed">
                        В такому випадку пропонуємо обирати абонементи без закріплення. Ти можеш записатися навіть за годину до заняття.
                    </div>
</details>
<details className="group bg-white border border-[#E1CDFF] rounded-xl overflow-hidden cursor-pointer">
<summary className="flex justify-between items-center p-6 text-zinc-900 font-medium select-none">
                        Чи є обмеження по віку/вазі?
                        <span className="transform group-open:rotate-180 transition-transform text-[#6432C9]">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-500 font-light leading-relaxed">
                        В Mary Ballet досвід, вік та вага значення не мають. Наша місія — аби кожна відчула себе балериною.
                    </div>
</details>
<details className="group bg-white border border-[#E1CDFF] rounded-xl overflow-hidden cursor-pointer">
<summary className="flex select-none font-medium text-zinc-900 pt-6 pr-6 pb-6 pl-6 items-center justify-between">
                        Я "дерев'яна", чи вийде в мене?
                        <span className="transform group-open:rotate-180 transition-transform text-[#6432C9]">
<iconify-icon className="" height="16" icon="solar:alt-arrow-down-linear" style={{color: 'rgb(100, 50, 201)'}} width="16"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-500 font-light leading-relaxed">
                        Абсолютно! Гнучкість розвивається поступово. Для початківців у нас є спеціальна програма, де ми починаємо з основ.
                    </div>
</details>
</div>
</section>
</main>

<footer className="bg-white border-t border-[#E1CDFF] py-12">
<div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-[#6432C9]">
<svg className="opacity-80" fill="none" height="20" viewbox="0 0 134 27" width="100">
<path d="M0 5.78h4.293v2.613h.174A4.7 4.7 0 015.86 6.295c.657-.577 1.557-.866 2.697-.866 1.044 0 1.932.265 2.668.794.735.529 1.265 1.301 1.596 2.318h.086c.134-.431.343-.837.623-1.219.28-.381.624-.708 1.029-.982a5.55 5.55 0 011.362-.661 5.138 5.138 0 011.625-.25c1.469 0 2.596.53 3.378 1.585.784 1.056 1.175 2.564 1.175 4.52v9.657h-4.292v-9.303c0-1.957-.697-2.936-2.09-2.936-.638 0-1.218.187-1.739.558-.522.372-.784.938-.784 1.702v9.98H8.902v-9.304c0-1.957-.696-2.936-2.088-2.936-.31 0-.615.044-.913.133-.3.088-.571.23-.812.425a2.215 2.215 0 00-.58.72 2.123 2.123 0 00-.217.982v9.98H0V5.78zM36.336 21.257c-.776 0-1.422-.245-1.938-.737-.515-.49-.84-1.15-.976-1.976h-.173c-.234 1.003-.749 1.765-1.544 2.284-.797.52-1.777.78-2.942.78-1.535 0-2.709-.411-3.525-1.233-.815-.822-1.222-1.91-1.222-3.262 0-1.627.588-2.836 1.762-3.63 1.174-.793 2.772-1.19 4.792-1.19h2.417v-.972c0-.746-.194-1.341-.582-1.783-.389-.442-1.04-.663-1.95-.663-.856 0-1.535.187-2.04.56a5.493 5.493 0 00-1.252 1.268L24.6 8.391a6.71 6.71 0 012.345-2.178c.94-.523 2.217-.786 3.83-.786 2.175 0 3.806.482 4.895 1.445 1.086.964 1.631 2.37 1.631 4.216v6.78h1.428v3.39h-2.39l-.003-.001zm-5.971-2.682c.718 0 1.334-.155 1.85-.469.513-.312.77-.82.77-1.52v-1.814h-2.098c-1.69 0-2.535.576-2.535 1.727v.438c0 .565.174.98.525 1.243.349.264.845.395 1.486.395h.002zM40.615 21.267V6.01h4.25v3.313h.144c.077-.425.211-.837.401-1.235.19-.397.445-.75.762-1.062.316-.31.694-.557 1.135-.74.44-.184.958-.276 1.551-.276h.747v4.01h-1.062c-1.245 0-2.167.165-2.77.495-.603.33-.906.94-.906 1.83v8.92h-4.252zM61.912 6.011h3.949l-5.78 17.545c-.383 1.177-.92 2.046-1.616 2.605-.697.56-1.694.839-2.991.839h-2.632v-3.33h2.832l.515-1.68-5.264-15.98h4.206l2.202 7.093 1.087 4.401h.172l1.116-4.401 2.203-7.094.001.002zM70.34 7.498a7.882 7.882 0 011.916-.739 8.666 8.666 0 012.085-.25c1.05 0 2.022.179 2.916.538a6.785 6.785 0 012.32 1.528c.654.661 1.163 1.464 1.533 2.412.37.948.554 2.01.554 3.187 0 .986-.168 1.934-.504 2.843a6.932 6.932 0 01-1.504 2.412c-.667.699-1.496 1.256-2.483 1.672-.99.415-2.136.625-3.44.625a17.253 17.253 0 01-2.4-.187c-.339-.047-.671-.11-.992-.187a31.582 31.582 0 01-1.368-.351c-.46-.129-.897-.276-1.313-.439.038-.143.071-.385.1-.725.027-.34.05-.706.063-1.1a85.196 85.196 0 00.05-2.068V5.617c0-.814-.011-1.525-.035-2.133a44.452 44.452 0 00-.086-1.572c-.034-.44-.077-.808-.127-1.105a7.374 7.374 0 00-.165-.746V.004h3.278v.057c-.056.2-.108.45-.156.746-.047.297-.09.665-.127 1.105-.038.44-.068.966-.086 1.572a70.4 70.4 0 00-.028 2.133v1.881zm0 8.944c0 .775.008 1.417.021 1.925.015.509.036.915.064 1.22.397.307.937.566 1.616.775a7.528 7.528 0 002.242.316 4.2 4.2 0 001.845-.403 4.007 4.007 0 001.433-1.163c.398-.508.708-1.124.93-1.851.222-.728.334-1.551.334-2.47 0-1.033-.095-1.992-.284-2.878-.19-.886-.483-1.651-.879-2.297A4.417 4.417 0 0076.144 8.1c-.614-.365-1.347-.546-2.199-.546-.718 0-1.39.149-2.014.446a4.335 4.335 0 00-1.588 1.292v7.15h-.002zM83.258 16.862c0-.786.16-1.47.48-2.048a4.727 4.727 0 011.277-1.48 7.004 7.004 0 011.816-.993c.68-.253 1.384-.453 2.112-.597a18.51 18.51 0 012.156-.298 32.11 32.11 0 011.949-.096v-.762c0-.657-.084-1.226-.25-1.704-.169-.478-.404-.874-.71-1.188a2.889 2.889 0 00-1.1-.703 4.112 4.112 0 00-1.409-.232c-.354 0-.704.03-1.049.089-.345.06-.702.159-1.071.298-.37.14-.758.329-1.167.569-.409.24-.85.542-1.322.91l-.147-.088 1.004-2.107a7.36 7.36 0 01.96-.366 8.985 8.985 0 011.956-.359c.34-.025.696-.038 1.071-.038 1.035 0 1.918.127 2.651.382.734.253 1.335.602 1.802 1.046.466.444.81.962 1.026 1.555a5.51 5.51 0 01.325 1.904v4.872c0 .846.013 1.587.037 2.22.025.632.055 1.178.088 1.635.034.46.079.843.133 1.15.054.309.11.57.17.777v.06h-3.264v-.06c.049-.159.086-.338.11-.538.025-.199.047-.439.068-.718-.207.18-.45.364-.732.553-.28.19-.601.361-.96.516-.36.155-.757.28-1.196.374a6.845 6.845 0 01-1.44.142c-1.713 0-3.036-.406-3.972-1.219-.935-.812-1.402-1.964-1.402-3.458zm9.79-4.349c-.896.01-1.757.062-2.584.157-.827.094-1.557.29-2.193.59a3.738 3.738 0 00-1.522 1.276c-.379.554-.57 1.289-.57 2.205 0 1.175.292 2.072.873 2.69.58.617 1.383.925 2.406.925a3.94 3.94 0 001.292-.202 4.377 4.377 0 001.034-.508c.3-.204.554-.429.76-.672.207-.244.364-.48.472-.71.018-.379.03-.8.03-1.263v-4.49l.002.002zM98.43 5.588a49.245 49.245 0 00-.12-3.685 11.553 11.553 0 00-.127-1.1 8.027 8.027 0 00-.162-.742V.004h3.261v.057a6.77 6.77 0 00-.155.742c-.047.295-.09.664-.127 1.1-.037.438-.065.96-.084 1.564a68.813 68.813 0 00-.028 2.121v10.186c0 .81.009 1.517.028 2.121.019.605.047 1.126.084 1.564.037.439.08.805.127 1.1.047.294.099.542.155.742v.057h-3.261V21.3c.056-.2.11-.448.162-.742.052-.295.093-.662.127-1.1.034-.438.061-.96.084-1.564a53.81 53.81 0 00.035-2.121V5.588zM103.419 5.588c0-.808-.011-1.517-.035-2.121a48.082 48.082 0 00-.084-1.564 11.782 11.782 0 00-.127-1.1 7.91 7.91 0 00-.163-.742V.004h3.262v.057c-.056.2-.109.448-.155.742-.047.295-.09.664-.127 1.1-.038.438-.066.96-.084 1.564a68.813 68.813 0 00-.028 2.121v10.186c0 .81.009 1.517.028 2.121.018.605.046 1.126.084 1.564.037.439.08.805.127 1.1.046.294.099.542.155.742v.057h-3.262V21.3c.056-.2.111-.448.163-.742.052-.295.093-.662.127-1.1.033-.438.061-.96.084-1.564.024-.604.035-1.31.035-2.121V5.588zM116.102 21.516a8.883 8.883 0 01-3.073-.523 7.152 7.152 0 01-2.496-1.532c-.709-.673-1.267-1.504-1.676-2.496-.409-.991-.612-2.125-.612-3.4 0-1.126.186-2.168.562-3.13a7.692 7.692 0 011.551-2.503 7.177 7.177 0 012.311-1.658 6.849 6.849 0 012.858-.597c1.025 0 1.954.177 2.82.53a6.388 6.388 0 012.254 1.54c.634.672 1.136 1.504 1.506 2.495.37.992.568 2.12.597 3.385a488.539 488.539 0 00-3.337-.045c-1.113-.01-2.27-.015-3.471-.015-.856 0-1.691.006-2.503.015-.812.01-1.544.025-2.193.045.059 1.037.218 1.973.479 2.81.262.836.62 1.552 1.078 2.143a4.66 4.66 0 001.668 1.368c.656.32 1.397.478 2.224.478.571 0 1.11-.068 1.616-.202a5.404 5.404 0 003.316-2.46l.177.09-1.092 2.659c-.532.28-1.167.515-1.906.71-.739.195-1.624.291-2.658.291v.002zm-1.964-9.116c.984 0 1.971-.002 2.961-.008a86.14 86.14 0 002.695-.053 9.876 9.876 0 00-.502-2.33c-.246-.689-.562-1.27-.945-1.75a4.016 4.016 0 00-1.359-1.105 3.834 3.834 0 00-1.728-.39c-.571 0-1.096.127-1.574.382s-.894.62-1.247 1.1c-.354.478-.64 1.063-.857 1.756-.216.694-.345 1.483-.384 2.37.442.02.911.03 1.404.03h1.536V12.4zM130.513 20.303c.308 0 .612-.057.915-.172.302-.113.593-.27.875-.466.282-.197.553-.424.814-.677.261-.253.504-.521.73-.8l.153.077-.999 2.505a29.59 29.59 0 01-.453.224c-.18.09-.394.172-.646.25a6.865 6.865 0 01-.885.202 7.355 7.355 0 01-1.199.085c-1.373 0-2.441-.376-3.205-1.128-.763-.752-1.146-1.927-1.146-3.523V6.504l-2.582.092v-1.37c.318.022.697.037 1.137.048.441.01.922.015 1.445.015a58.426 58.426 0 00-.054-1.953 36.11 36.11 0 00-.093-1.477 10.603 10.603 0 00-.284-1.796V0h3.55v.062c-.061.197-.117.44-.169.731-.053.291-.096.643-.131 1.058-.036.416-.067.905-.092 1.47-.026.565-.042 1.22-.054 1.968.646-.01 1.279-.022 1.899-.04a61.595 61.595 0 002.983-.14c.353-.026.586-.048.7-.07l-.276 1.588a91.135 91.135 0 01-1.645-.048 71.056 71.056 0 00-1.691-.047l-1.968-.03v10.703c0 .642.069 1.164.207 1.564.139.399.318.714.538.94.22.23.472.384.752.467.28.084.572.125.868.125l.006.002z" fill="currentColor"></path>
</svg>
</div>
<div className="text-xs font-light text-zinc-400">© 2026 Mary Ballet. Усі права захищено.</div>
<div className="flex gap-4">
<a className="text-[#E1CDFF] hover:text-[#6432C9] transition-colors" href="#"><iconify-icon className="" icon="solar:camera-linear" width="24"></iconify-icon></a>
<a className="text-[#E1CDFF] hover:text-[#6432C9] transition-colors" href="#"><iconify-icon className="" icon="solar:chat-round-linear" width="24"></iconify-icon></a>
</div>
</div>
</footer>

<dialog className="backdrop:bg-[#6432C9]/20 p-0 rounded-2xl shadow-2xl open:animate-in open:fade-in open:zoom-in-95 backdrop:animate-in backdrop:fade-in bg-transparent m-auto max-w-md w-full" id="booking-modal">
<form className="bg-white rounded-2xl p-8 relative" method="dialog">
<button className="absolute top-4 right-4 text-zinc-400 hover:text-[#6432C9]">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<h3 className="text-xl font-medium text-zinc-900 mb-6">Записатись на заняття</h3>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5 uppercase tracking-wide">Ім'я</label>
<input className="w-full h-11 px-4 bg-[#FDFBFF] border border-[#E1CDFF] rounded-lg text-sm focus:outline-none focus:border-[#6432C9] focus:ring-0 transition-colors" placeholder="Марія" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5 uppercase tracking-wide">Телефон</label>
<input className="w-full h-11 px-4 bg-[#FDFBFF] border border-[#E1CDFF] rounded-lg text-sm focus:outline-none focus:border-[#6432C9] focus:ring-0 transition-colors" placeholder="+380" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-3 uppercase tracking-wide">Рівень підготовки</label>
<div className="grid grid-cols-3 gap-2">
<label className="cursor-pointer">
<input checked="" className="custom-radio hidden" name="level" type="radio"/>
<div className="h-10 border border-[#E1CDFF] rounded-lg flex items-center justify-center text-xs text-zinc-600 transition-all hover:border-[#6432C9]">
                                Початковий
                            </div>
</label>
<label className="cursor-pointer">
<input className="custom-radio hidden" name="level" type="radio"/>
<div className="h-10 border border-[#E1CDFF] rounded-lg flex items-center justify-center text-xs text-zinc-600 transition-all hover:border-[#6432C9]">
                                Середній
                            </div>
</label>
<label className="cursor-pointer">
<input className="custom-radio hidden" name="level" type="radio"/>
<div className="h-10 border border-[#E1CDFF] rounded-lg flex items-center justify-center text-xs text-zinc-600 transition-all hover:border-[#6432C9]">
                                Високий
                            </div>
</label>
</div>
</div>
<div className="pt-2">
<button className="w-full h-12 bg-[#6432C9] hover:bg-[#5329A8] text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                        Відправити
                    </button>
</div>
</div>
</form>
</dialog>


    </>
  );
}
