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
      
{"@context":"https://schema.org","@type":"Hotel","name":"Gasparim Grand Hotel","address":{"@type":"PostalAddress","streetAddress":"R. 13 de Junho, 650, Centro","addressLocality":"Cáceres","addressRegion":"MT","postalCode":"78200-000","addressCountry":"BR"},"telephone":"+55-65-3223-4328","email":"reservas@hotelgasparim.com.br","starRating":{"@type":"Rating","ratingValue":"4"},"priceRange":"$$"}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      (function(){
        const cta = document.getElementById('mobileStickyCta');
        const hero = document.getElementById('heroSlides');
        if(!cta || !hero) return;
        window.addEventListener('scroll', () => {
          const past = window.scrollY > hero.offsetHeight;
          cta.classList.toggle('hidden', !past);
        });
      })();
      if(window.lucide) lucide.createIcons();
    


      lucide.createIcons();

      document.getElementById('mobileMenuBtn').addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.toggle('hidden');
      });

      const slides = document.querySelectorAll('.hero-slide');
      let current = 0;
      function showSlide(idx) {
        slides.forEach((s, i) => s.style.opacity = i === idx ? '1' : '0');
        current = idx;
      }
      document.getElementById('nextSlide').addEventListener('click', () => showSlide((current + 1) % slides.length));
      document.getElementById('prevSlide').addEventListener('click', () => showSlide((current - 1 + slides.length) % slides.length));
      setInterval(() => showSlide((current + 1) % slides.length), 6000);

      // Date range picker (Booking.com inspired)
      const today = new Date(); today.setHours(0,0,0,0);
      const tomorrow = new Date(today); tomorrow.setDate(today.getDate()+1);
      const fmt = d => d.toISOString().split('T')[0];
      const fmtBR = d => d.toLocaleDateString('pt-BR', { day:'2-digit', month:'short', year:'numeric'});
      const monthNames = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
      const dayNames = ['D','S','T','Q','Q','S','S'];
      let viewDate = new Date(today.getFullYear(), today.getMonth(), 1);
      let rangeStart = new Date(today);
      let rangeEnd = new Date(tomorrow);
      let selecting = 'start';

      const checkin = document.getElementById('checkin');
      const checkout = document.getElementById('checkout');
      const checkinLabel = document.getElementById('checkinLabel');
      const checkoutLabel = document.getElementById('checkoutLabel');
      const nightsLabel = document.getElementById('nightsLabel');
      const rangeSummary = document.getElementById('rangeSummary');

      function syncInputs(){
        checkin.value = fmt(rangeStart);
        checkout.value = fmt(rangeEnd);
        checkinLabel.textContent = fmtBR(rangeStart);
        checkoutLabel.textContent = fmtBR(rangeEnd);
        const nights = Math.round((rangeEnd-rangeStart)/86400000);
        nightsLabel.textContent = nights>0 ? `${nights} ${nights===1?'noite':'noites'}` : '';
        if (rangeSummary) rangeSummary.textContent = nights>0 ? `${nights} ${nights===1?'noite':'noites'} selecionada${nights===1?'':'s'}` : 'Selecione as datas';
      }

      function buildCalendar(container, refDate){
        const y = refDate.getFullYear(), m = refDate.getMonth();
        const first = new Date(y, m, 1);
        const startWeekday = first.getDay();
        const daysInMonth = new Date(y, m+1, 0).getDate();
        let html = '<div class="grid grid-cols-7 gap-1 text-center text-[11px] text-slate-500 mb-1">';
        dayNames.forEach(d => html += `<div class="py-1">${d}</div>`);
        html += '</div><div class="grid grid-cols-7 gap-1">';
        for(let i=0;i<startWeekday;i++) html += '<div></div>';
        for(let d=1; d<=daysInMonth; d++){
          const date = new Date(y, m, d);
          const isPast = date < today;
          const inRange = rangeStart && rangeEnd && date >= rangeStart && date <= rangeEnd;
          const isStart = rangeStart && date.getTime() === rangeStart.getTime();
          const isEnd = rangeEnd && date.getTime() === rangeEnd.getTime();
          let cls = 'h-9 text-sm rounded flex items-center justify-center transition-colors ';
          if(isPast) cls += 'text-slate-300 cursor-not-allowed';
          else if(isStart || isEnd) cls += 'bg-blue-600 text-white font-medium cursor-pointer';
          else if(inRange) cls += 'bg-blue-100 text-blue-700 cursor-pointer';
          else cls += 'text-slate-700 hover:bg-slate-100 cursor-pointer';
          html += `<button type="button" data-date="${fmt(date)}" class="${cls}" ${isPast?'disabled':''}>${d}</button>`;
        }
        html += '</div>';
        container.innerHTML = html;
      }

      function renderCalendars(){
        const m1 = new Date(viewDate);
        const m2 = new Date(viewDate.getFullYear(), viewDate.getMonth()+1, 1);
        document.getElementById('calTitle1').textContent = `${monthNames[m1.getMonth()]} ${m1.getFullYear()}`;
        document.getElementById('calTitle2').textContent = `${monthNames[m2.getMonth()]} ${m2.getFullYear()}`;
        buildCalendar(document.getElementById('cal1'), m1);
        buildCalendar(document.getElementById('cal2'), m2);
        document.querySelectorAll('#datesPopover [data-date]').forEach(btn => {
          btn.addEventListener('click', () => {
            const d = new Date(btn.dataset.date + 'T00:00:00');
            if(selecting === 'start' || d <= rangeStart){
              rangeStart = d;
              rangeEnd = new Date(d); rangeEnd.setDate(d.getDate()+1);
              selecting = 'end';
            } else {
              rangeEnd = d;
              selecting = 'start';
            }
            syncInputs();
            renderCalendars();
          });
        });
      }

      document.getElementById('calPrev').addEventListener('click', () => {
        viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth()-1, 1);
        renderCalendars();
      });
      document.getElementById('calNext').addEventListener('click', () => {
        viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth()+1, 1);
        renderCalendars();
      });

      const datesBtn = document.getElementById('datesBtn');
      const datesPopover = document.getElementById('datesPopover');
      datesBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        datesPopover.classList.toggle('hidden');
        datesBtn.setAttribute('aria-expanded', !datesPopover.classList.contains('hidden'));
        if(!datesPopover.classList.contains('hidden')) renderCalendars();
      });
      document.getElementById('closeDates').addEventListener('click', () => datesPopover.classList.add('hidden'));
      document.addEventListener('click', (e) => {
        if(!datesPopover.contains(e.target) && e.target !== datesBtn && !datesBtn.contains(e.target)) datesPopover.classList.add('hidden');
      });

      syncInputs();

      // Guests
      const counts = { adults: 2, children: 0, rooms: 1 };
      const limits = { adults: [1, 10], children: [0, 8], rooms: [1, 5] };
      function updateGuests() {
        document.getElementById('adultsVal').textContent = counts.adults;
        document.getElementById('childrenVal').textContent = counts.children;
        document.getElementById('roomsVal').textContent = counts.rooms;
        document.getElementById('adultsLabel').textContent = counts.adults + counts.children;
        document.getElementById('roomsLabel').textContent = counts.rooms;
      }
      document.querySelectorAll('[data-step]').forEach(btn => {
        btn.addEventListener('click', () => {
          const k = btn.dataset.step;
          const dir = parseInt(btn.dataset.dir);
          const next = counts[k] + dir;
          if (next >= limits[k][0] && next <= limits[k][1]) { counts[k] = next; updateGuests(); }
        });
      });

      const guestsBtn = document.getElementById('guestsBtn');
      const guestsPopover = document.getElementById('guestsPopover');
      guestsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        guestsPopover.classList.toggle('hidden');
        guestsBtn.setAttribute('aria-expanded', !guestsPopover.classList.contains('hidden'));
      });
      document.getElementById('closeGuests').addEventListener('click', () => guestsPopover.classList.add('hidden'));
      document.addEventListener('click', (e) => {
        if (!guestsPopover.contains(e.target) && e.target !== guestsBtn) guestsPopover.classList.add('hidden');
      });

      document.getElementById('bookingForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const params = new URLSearchParams({
          checkin: checkin.value,
          checkout: checkout.value,
          adults: counts.adults,
          children: counts.children
        });
        window.open(`https://booking.placeholder.com/reserve?${params.toString()}`, '_blank', 'noopener,noreferrer');
      });

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
      

<div className="bg-slate-800 text-slate-200 text-xs">
<div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-end gap-5 h-9">
<a className="hover:text-white transition-colors hidden sm:inline" href="#">
          ACESSO CORPORATIVO
        </a>
<a className="hover:text-white transition-colors" href="#">CONTATO</a>
<a className="hover:text-white transition-colors hidden sm:inline" href="#">
          MINHAS BUSCAS
        </a>
<button aria-label="Selecionar idioma" className="bg-slate-900/60 hover:bg-slate-900 px-3 h-9 flex items-center gap-1.5 transition-colors">
<span>PORTUGUÊS</span>
<i className="w-3.5 h-3.5" data-lucide="chevron-down"></i>
</button>
</div>
</div>

<header className="bg-white border-b border-slate-200 sticky top-0 z-40">
<div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
<a className="flex items-center gap-2.5" href="#">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-amber-300 flex items-center justify-center relative overflow-hidden shrink-0">
<svg aria-hidden="true" className="absolute bottom-1 w-9 h-5" viewbox="0 0 40 40">
<path d="M2 14 Q12 6, 24 12 Q34 16, 38 14 L34 18 Q24 22, 12 18 Q4 16, 2 14 Z" fill="#1e40af"></path>
<circle cx="30" cy="13" fill="#fff" r="1"></circle>
</svg>
</div>
<div className="leading-tight">
<div className="text-blue-700 font-semibold text-base tracking-tight">
              GASPARIM
            </div>
<div className="text-slate-600 text-xs tracking-wider">GRAND HOTEL</div>
</div>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
<a className="hover:text-blue-600 transition-colors" href="#hotel">
            O HOTEL
          </a>
<a className="hover:text-blue-600 transition-colors" href="#acomodacoes">
            ACOMODAÇÕES
          </a>
<a className="hover:text-blue-600 transition-colors" href="#galerias">
            GALERIAS
          </a>
<a className="hover:text-blue-600 transition-colors" href="#precheckin">
            PRÉ CHECK-IN
          </a>
</nav>
<button aria-label="Abrir menu" className="md:hidden p-2 text-slate-700" id="mobileMenuBtn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
<div className="md:hidden hidden border-t border-slate-200 bg-white" id="mobileMenu">
<nav className="flex flex-col px-4 py-2 text-sm">
<a className="py-3 border-b border-slate-100" href="#hotel">O HOTEL</a>
<a className="py-3 border-b border-slate-100" href="#acomodacoes">
            ACOMODAÇÕES
          </a>
<a className="py-3 border-b border-slate-100" href="#galerias">
            GALERIAS
          </a>
<a className="py-3" href="#precheckin">PRÉ CHECK-IN</a>
</nav>
</div>
</header>

<section className="relative bg-slate-900 overflow-hidden">
<div className="relative h-[480px] sm:h-[580px] lg:h-[680px]" id="heroSlides">
<img alt="Fachada do Gasparim Grand Hotel" className="hero-slide absolute inset-0 w-full h-full object-cover hero-fade opacity-100" fetchpriority="high" src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1600&amp;q=80"/>
<img alt="Recepção do hotel" className="hero-slide absolute inset-0 w-full h-full object-cover hero-fade opacity-0" loading="lazy" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&amp;q=80"/>
<img alt="Quarto confortável" className="hero-slide absolute inset-0 w-full h-full object-cover hero-fade opacity-0" loading="lazy" src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/20 to-slate-900/70"></div>
<div className="absolute inset-0 flex items-center">
<div className="max-w-[1200px] mx-auto px-4 sm:px-6 w-full">
<div className="max-w-2xl text-white">
<span className="inline-block bg-blue-600/90 text-white text-xs font-medium px-3 py-1 rounded mb-4">
                Cáceres · Mato Grosso
              </span>
<h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] mb-4">
                Sua estadia no coração histórico de Cáceres
              </h1>
<p className="text-base sm:text-lg text-slate-100/90 mb-6 max-w-xl">
                Conforto, atendimento próximo e localização central — a poucos
                passos dos principais pontos turísticos do Pantanal
                mato-grossense.
              </p>
<a className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded transition-colors" href="#booking">
                Verificar disponibilidade
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
<button aria-label="Slide anterior" className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 bg-blue-600 hover:bg-blue-700 text-white rounded shadow-lg flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2" id="prevSlide">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<button aria-label="Próximo slide" className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 bg-blue-600 hover:bg-blue-700 text-white rounded shadow-lg flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2" id="nextSlide">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</section>

<section className="bg-blue-600 sticky top-20 z-30 shadow-md" id="booking">
<div className="max-w-[1200px] mx-auto px-3 sm:px-6 py-3">
<form className="flex flex-col lg:flex-row gap-2 lg:gap-3 lg:items-stretch" id="bookingForm">

<div className="flex-1 relative">
<button aria-expanded="false" aria-haspopup="true" className="w-full bg-white rounded flex items-center px-3 sm:px-4 h-12 gap-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-white/60" id="datesBtn" type="button">
<i className="w-4 h-4 text-slate-500 shrink-0" data-lucide="calendar"></i>
<span className="flex-1 text-left flex items-center gap-2 min-w-0">
<span className="truncate" id="checkinLabel">Check-in</span>
<span className="text-slate-400">—</span>
<span className="truncate" id="checkoutLabel">Check-out</span>
</span>
<span className="text-xs text-slate-500 hidden sm:inline" id="nightsLabel"></span>
</button>
<input id="checkin" required="" type="hidden"/>
<input id="checkout" required="" type="hidden"/>
<div className="hidden absolute left-0 right-0 lg:right-auto lg:w-[640px] mt-2 bg-white rounded shadow-xl border border-slate-200 p-4 z-50" id="datesPopover">
<div className="flex items-center justify-between mb-3">
<button aria-label="Mês anterior" className="w-8 h-8 rounded hover:bg-slate-100 text-slate-600 flex items-center justify-center" id="calPrev" type="button">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>
<div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 text-center text-sm font-medium text-slate-800">
<div id="calTitle1"></div>
<div className="hidden sm:block" id="calTitle2"></div>
</div>
<button aria-label="Próximo mês" className="w-8 h-8 rounded hover:bg-slate-100 text-slate-600 flex items-center justify-center" id="calNext" type="button">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div id="cal1"></div>
<div className="hidden sm:block" id="cal2"></div>
</div>
<div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
<div className="text-xs text-slate-500" id="rangeSummary"></div>
<button className="text-sm text-blue-600 hover:text-blue-700 font-medium py-1.5 px-3" id="closeDates" type="button">
                  Pronto
                </button>
</div>
</div>
</div>

<div className="relative flex-1 lg:max-w-md">
<button aria-expanded="false" aria-haspopup="true" className="w-full bg-white rounded h-12 flex items-center px-4 gap-4 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-white/60" id="guestsBtn" type="button">
<span className="flex items-center gap-2 flex-1">
<i className="w-4 h-4 text-slate-500" data-lucide="user"></i>
<span><span id="adultsLabel">2</span></span>
</span>
<span className="flex items-center gap-2 flex-1">
<i className="w-4 h-4 text-slate-500" data-lucide="bed"></i>
<span><span id="roomsLabel">1</span></span>
</span>
<i className="w-4 h-4 text-slate-400 ml-auto" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute right-0 left-0 mt-2 bg-white rounded shadow-xl border border-slate-200 p-4 z-50" id="guestsPopover">
<div className="space-y-3">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium text-slate-800">
                      Adultos
                    </div>
<div className="text-xs text-slate-500">
                      A partir de 13 anos
                    </div>
</div>
<div className="flex items-center gap-3">
<button aria-label="Diminuir adultos" className="w-8 h-8 rounded-full border border-slate-300 text-slate-600 hover:border-blue-600 hover:text-blue-600 flex items-center justify-center transition-colors disabled:opacity-40" data-dir="-1" data-step="adults" type="button">
                      −
                    </button>
<span className="w-6 text-center text-sm font-medium" id="adultsVal">
                      2
                    </span>
<button aria-label="Aumentar adultos" className="w-8 h-8 rounded-full border border-slate-300 text-slate-600 hover:border-blue-600 hover:text-blue-600 flex items-center justify-center transition-colors" data-dir="1" data-step="adults" type="button">
                      +
                    </button>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium text-slate-800">
                      Crianças
                    </div>
<div className="text-xs text-slate-500">Até 12 anos</div>
</div>
<div className="flex items-center gap-3">
<button aria-label="Diminuir crianças" className="w-8 h-8 rounded-full border border-slate-300 text-slate-600 hover:border-blue-600 hover:text-blue-600 flex items-center justify-center transition-colors" data-dir="-1" data-step="children" type="button">
                      −
                    </button>
<span className="w-6 text-center text-sm font-medium" id="childrenVal">
                      0
                    </span>
<button aria-label="Aumentar crianças" className="w-8 h-8 rounded-full border border-slate-300 text-slate-600 hover:border-blue-600 hover:text-blue-600 flex items-center justify-center transition-colors" data-dir="1" data-step="children" type="button">
                      +
                    </button>
</div>
</div>
<div className="flex items-center justify-between pt-2 border-t border-slate-100">
<div>
<div className="text-sm font-medium text-slate-800">
                      Quartos
                    </div>
</div>
<div className="flex items-center gap-3">
<button aria-label="Diminuir quartos" className="w-8 h-8 rounded-full border border-slate-300 text-slate-600 hover:border-blue-600 hover:text-blue-600 flex items-center justify-center transition-colors" data-dir="-1" data-step="rooms" type="button">
                      −
                    </button>
<span className="w-6 text-center text-sm font-medium" id="roomsVal">
                      1
                    </span>
<button aria-label="Aumentar quartos" className="w-8 h-8 rounded-full border border-slate-300 text-slate-600 hover:border-blue-600 hover:text-blue-600 flex items-center justify-center transition-colors" data-dir="1" data-step="rooms" type="button">
                      +
                    </button>
</div>
</div>
<button className="w-full mt-2 text-sm text-blue-600 hover:text-blue-700 font-medium py-1.5" id="closeGuests" type="button">
                  Pronto
                </button>
</div>
</div>
</div>

<button className="bg-white text-blue-700 hover:bg-blue-50 font-medium rounded h-12 px-8 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-white/60 lg:min-w-[200px]" type="submit">
            Pesquisar
          </button>
</form>
</div>
</section>

<section className="bg-white border-b border-slate-200">
<div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-5">
<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-700">
<div className="flex items-center gap-2">
<div className="flex gap-0.5 text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<span className="font-medium">Hotel 4 estrelas</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-600" data-lucide="wifi"></i>
<span>Wi-Fi grátis</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-600" data-lucide="coffee"></i>
<span>Café da manhã incluso</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-600" data-lucide="car"></i>
<span>Estacionamento gratuito</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-600" data-lucide="clock"></i>
<span>Recepção 24h</span>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16" id="hotel">
<div className="max-w-[1200px] mx-auto px-4 sm:px-6">
<div className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded mb-6">
          Quem somos
        </div>
<div className="border border-slate-200 rounded-lg overflow-hidden">
<div className="grid md:grid-cols-2 gap-0">
<div className="bg-white p-8 sm:p-10 flex items-center justify-center min-h-[280px]">
<div className="text-center">
<div className="w-40 h-40 rounded-full bg-gradient-to-br from-yellow-400 to-amber-300 mx-auto flex items-center justify-center relative overflow-hidden mb-3">
<svg aria-hidden="true" className="absolute bottom-3 w-32 h-12" viewbox="0 0 100 60">
<path d="M5 35 Q30 15, 60 30 Q85 40, 95 35 L85 45 Q60 55, 30 45 Q10 40, 5 35 Z" fill="#1e40af"></path>
<circle cx="78" cy="33" fill="#fff" r="2"></circle>
</svg>
</div>
<div className="text-blue-700 font-semibold text-xl tracking-tight">
                  GASPARIM
                </div>
<div className="text-slate-600 text-sm tracking-wider">
                  GRAND HOTEL
                </div>
</div>
</div>
<div className="p-8 sm:p-10 border-t md:border-t-0 md:border-l border-slate-200">
<div className="text-sm text-slate-500 mb-2">
                Gasparim Grand Hotel
              </div>
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-800 mb-4 tracking-tight">
                No coração histórico de Cáceres
              </h2>
<p className="text-slate-600 text-base leading-relaxed mb-2">
                O Gasparim Grand Hotel está situado no centro da histórica
                cidade de Cáceres, em Mato Grosso. Uma localização privilegiada
                para quem viaja a negócios, busca explorar o Pantanal ou deseja
                conhecer o patrimônio colonial da região — tudo a poucos passos.
              </p>
<a className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center gap-1 mb-6" href="#">
                ver mais
                <i className="w-3.5 h-3.5" data-lucide="chevron-right"></i>
</a>
<h3 className="text-base font-medium text-slate-800 mb-3">
                Comodidades
              </h3>
<div className="flex flex-wrap gap-2 mb-5">
<span className="text-xs px-3 py-1.5 border border-slate-200 rounded text-slate-700 bg-slate-50">
                  Estacionamento gratuito
                </span>
<span className="text-xs px-3 py-1.5 border border-slate-200 rounded text-slate-700 bg-slate-50">
                  Late check-out disponível
                </span>
<span className="text-xs px-3 py-1.5 border border-slate-200 rounded text-slate-700 bg-slate-50">
                  Limpeza diária
                </span>
<span className="text-xs px-3 py-1.5 border border-slate-200 rounded text-slate-700 bg-slate-50">
                  Recepção 24 horas
                </span>
<span className="text-xs px-3 py-1.5 border border-slate-200 rounded text-slate-700 bg-slate-50">
                  Serviço de quarto
                </span>
<a className="text-xs px-3 py-1.5 text-blue-600 hover:text-blue-700 font-medium" href="#">
                  ver mais
                </a>
</div>
<div className="flex items-center gap-2 text-sm text-slate-700 pt-4 border-t border-slate-200">
<i className="w-4 h-4 text-slate-500" data-lucide="clock"></i>
<span>
                  Check-in:
                  <strong className="font-medium">13:00</strong>
                   |  Check-out:
                  <strong className="font-medium">12:00</strong>
</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 bg-slate-50" id="acomodacoes">
<div className="max-w-[1200px] mx-auto px-4 sm:px-6">
<div className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded mb-6">
          Acomodações
        </div>
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-800 mb-3 tracking-tight">
          Escolha o quarto ideal para sua estadia
        </h2>
<p className="text-slate-600 max-w-2xl mb-8">
          Quartos confortáveis e bem equipados, pensados para viagens a
          negócios, em família ou a passeio.
        </p>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
<article className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Apartamento Standard" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&amp;q=80"/>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-lg font-semibold text-slate-800 mb-1">
                Apartamento Standard
              </h3>
<div className="text-xs text-slate-500 mb-3 flex items-center gap-3">
<span className="flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="users"></i>
                  Até 2 pessoas
                </span>
<span className="flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="bed"></i>
                  Cama de casal
                </span>
</div>
<ul className="text-sm text-slate-600 space-y-1.5 mb-5">
<li className="flex gap-2">
<i className="w-4 h-4 text-blue-600 mt-0.5" data-lucide="check"></i>
                  Ar-condicionado e TV
                </li>
<li className="flex gap-2">
<i className="w-4 h-4 text-blue-600 mt-0.5" data-lucide="check"></i>
                  Frigobar e Wi-Fi
                </li>
<li className="flex gap-2">
<i className="w-4 h-4 text-blue-600 mt-0.5" data-lucide="check"></i>
                  Banheiro privativo
                </li>
</ul>
<a className="mt-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2.5 rounded text-sm transition-colors" href="#booking">
                Reservar
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</article>
<article className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Apartamento Superior" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&amp;q=80"/>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-lg font-semibold text-slate-800 mb-1">
                Apartamento Superior
              </h3>
<div className="text-xs text-slate-500 mb-3 flex items-center gap-3">
<span className="flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="users"></i>
                  Até 3 pessoas
                </span>
<span className="flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="bed"></i>
                  Casal + solteiro
                </span>
</div>
<ul className="text-sm text-slate-600 space-y-1.5 mb-5">
<li className="flex gap-2">
<i className="w-4 h-4 text-blue-600 mt-0.5" data-lucide="check"></i>
                  Espaço amplo
                </li>
<li className="flex gap-2">
<i className="w-4 h-4 text-blue-600 mt-0.5" data-lucide="check"></i>
                  Ar-condicionado e Wi-Fi
                </li>
<li className="flex gap-2">
<i className="w-4 h-4 text-blue-600 mt-0.5" data-lucide="check"></i>
                  Frigobar e TV
                </li>
</ul>
<a className="mt-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2.5 rounded text-sm transition-colors" href="#booking">
                Reservar
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</article>
<article className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Apartamento Família" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&amp;q=80"/>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-lg font-semibold text-slate-800 mb-1">
                Apartamento Família
              </h3>
<div className="text-xs text-slate-500 mb-3 flex items-center gap-3">
<span className="flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="users"></i>
                  Até 4 pessoas
                </span>
<span className="flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="bed"></i>
                  Camas variadas
                </span>
</div>
<ul className="text-sm text-slate-600 space-y-1.5 mb-5">
<li className="flex gap-2">
<i className="w-4 h-4 text-blue-600 mt-0.5" data-lucide="check"></i>
                  Ideal para famílias
                </li>
<li className="flex gap-2">
<i className="w-4 h-4 text-blue-600 mt-0.5" data-lucide="check"></i>
                  Ar-condicionado
                </li>
<li className="flex gap-2">
<i className="w-4 h-4 text-blue-600 mt-0.5" data-lucide="check"></i>
                  Frigobar, TV e Wi-Fi
                </li>
</ul>
<a className="mt-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2.5 rounded text-sm transition-colors" href="#booking">
                Reservar
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</article>
</div>
</div>
</section>

<section className="py-12 sm:py-16">
<div className="max-w-[1200px] mx-auto px-4 sm:px-6">
<div className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded mb-6">
          Comodidades
        </div>
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-800 mb-3 tracking-tight">
          Tudo o que você precisa, no lugar certo
        </h2>
<p className="text-slate-600 max-w-2xl mb-8">
          Estrutura completa para uma estadia tranquila, seja a trabalho ou a
          lazer.
        </p>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
<div className="border border-slate-200 rounded-lg p-5 flex items-center gap-3">
<i className="w-5 h-5 text-blue-600" data-lucide="wifi"></i>
<span className="text-sm text-slate-700">Wi-Fi gratuito</span>
</div>
<div className="border border-slate-200 rounded-lg p-5 flex items-center gap-3">
<i className="w-5 h-5 text-blue-600" data-lucide="coffee"></i>
<span className="text-sm text-slate-700">Café da manhã</span>
</div>
<div className="border border-slate-200 rounded-lg p-5 flex items-center gap-3">
<i className="w-5 h-5 text-blue-600" data-lucide="car"></i>
<span className="text-sm text-slate-700">Estacionamento</span>
</div>
<div className="border border-slate-200 rounded-lg p-5 flex items-center gap-3">
<i className="w-5 h-5 text-blue-600" data-lucide="clock"></i>
<span className="text-sm text-slate-700">Recepção 24h</span>
</div>
<div className="border border-slate-200 rounded-lg p-5 flex items-center gap-3">
<i className="w-5 h-5 text-blue-600" data-lucide="sparkles"></i>
<span className="text-sm text-slate-700">Limpeza diária</span>
</div>
<div className="border border-slate-200 rounded-lg p-5 flex items-center gap-3">
<i className="w-5 h-5 text-blue-600" data-lucide="bell"></i>
<span className="text-sm text-slate-700">Serviço de quarto</span>
</div>
<div className="border border-slate-200 rounded-lg p-5 flex items-center gap-3">
<i className="w-5 h-5 text-blue-600" data-lucide="log-out"></i>
<span className="text-sm text-slate-700">Late check-out</span>
</div>
<div className="border border-slate-200 rounded-lg p-5 flex items-center gap-3">
<i className="w-5 h-5 text-blue-600" data-lucide="air-vent"></i>
<span className="text-sm text-slate-700">Ar-condicionado</span>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 bg-slate-50">
<div className="max-w-[1200px] mx-auto px-4 sm:px-6">
<div className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded mb-6">
          Cáceres e região
        </div>
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-800 mb-3 tracking-tight">
          A porta de entrada para o Pantanal
        </h2>
<p className="text-slate-600 max-w-2xl mb-8">
          Cáceres é uma das cidades mais antigas de Mato Grosso, conhecida pela
          arquitetura colonial preservada, pela proximidade com o rio Paraguai e
          por ser referência em pesca esportiva.
        </p>
<div className="grid md:grid-cols-3 gap-5">
<div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Centro histórico de Cáceres" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1437846972679-9e6e537be46e?w=800&amp;q=80"/>
</div>
<div className="p-5">
<h3 className="font-semibold text-slate-800 mb-1">
                Centro histórico
              </h3>
<p className="text-sm text-slate-600">
                Praças, igrejas e casarões coloniais a poucos minutos do hotel.
              </p>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Rio Paraguai" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&amp;q=80"/>
</div>
<div className="p-5">
<h3 className="font-semibold text-slate-800 mb-1">Rio Paraguai</h3>
<p className="text-sm text-slate-600">
                Pesca esportiva, passeios de barco e pôr do sol no Pantanal.
              </p>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Natureza pantaneira" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&amp;q=80"/>
</div>
<div className="p-5">
<h3 className="font-semibold text-slate-800 mb-1">
                Natureza pantaneira
              </h3>
<p className="text-sm text-slate-600">
                Fauna e paisagens únicas do bioma a partir de Cáceres.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 bg-blue-600 text-white">
<div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">
            Reserve direto pelo site oficial
          </h2>
<p className="text-blue-100 max-w-xl">
            Atendimento próximo, confirmação imediata e a melhor tarifa
            garantida.
          </p>
</div>
<a className="bg-white text-blue-700 hover:bg-blue-50 font-medium px-7 py-3 rounded transition-colors inline-flex items-center gap-2" href="#booking">
          Reservar agora
          <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<section className="py-12 sm:py-16 bg-slate-50">
<div className="max-w-[1200px] mx-auto px-4 sm:px-6">
<div className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded mb-6">
          Depoimentos
        </div>
<div className="grid md:grid-cols-2 gap-5">
<article className="bg-white border border-slate-200 rounded-lg p-7">
<i className="w-7 h-7 text-slate-300 mb-3" data-lucide="quote"></i>
<p className="text-slate-700 text-base leading-relaxed mb-6">
              Quarto limpo e grande, café da manhã muito gostoso, local
              silencioso. O dono é muito simpático.
            </p>
<div className="text-right text-sm text-slate-600 font-medium">
              Vanessa
            </div>
</article>
<article className="bg-white border border-slate-200 rounded-lg p-7">
<i className="w-7 h-7 text-slate-300 mb-3" data-lucide="quote"></i>
<p className="text-slate-700 text-base leading-relaxed mb-6">
              Gostei da privacidade, da cordialidade, principalmente do silêncio
              do ambiente.
            </p>
<div className="text-right text-sm text-slate-600 font-medium">
              Francisco
            </div>
</article>
</div>
<div className="flex items-center justify-center gap-2 mt-6">
<button aria-label="Página 1" className="w-2 h-2 rounded-full bg-blue-600"></button>
<button aria-label="Página 2" className="w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-400 transition-colors"></button>
</div>
<div className="text-right mt-4">
<a className="text-blue-600 hover:text-blue-700 text-sm font-medium" href="#">
            ver todos
          </a>
</div>
</div>
</section>

<section className="py-12 sm:py-16" id="galerias">
<div className="max-w-[1200px] mx-auto px-4 sm:px-6">
<div className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded mb-6">
          Galeria de fotos
        </div>
<div className="flex justify-center mb-6">
<button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-sm font-medium px-6 py-2 rounded transition-colors">
            ESTRUTURA
          </button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
<a className="group block aspect-[4/3] overflow-hidden rounded" href="#">
<img alt="Fachada do hotel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" src="https://images.unsplash.com/photo-1551776235-dde6d482980b?w=600&amp;q=80"/>
</a>
<a className="group block aspect-[4/3] overflow-hidden rounded" href="#">
<img alt="Entrada lateral" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&amp;q=80"/>
</a>
<a className="group block aspect-[4/3] overflow-hidden rounded" href="#">
<img alt="Recepção" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&amp;q=80"/>
</a>
<a className="group block aspect-[4/3] overflow-hidden rounded" href="#">
<img alt="Estacionamento" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" src="https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=600&amp;q=80"/>
</a>
<a className="group block aspect-[4/3] overflow-hidden rounded" href="#">
<img alt="Vista externa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&amp;q=80"/>
</a>
<a className="group block aspect-[4/3] overflow-hidden rounded" href="#">
<img alt="Café da manhã" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&amp;q=80"/>
</a>
<a className="group block aspect-[4/3] overflow-hidden rounded" href="#">
<img alt="Sala de refeições" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&amp;q=80"/>
</a>
<a className="group block aspect-[4/3] overflow-hidden rounded" href="#">
<img alt="Restaurante" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&amp;q=80"/>
</a>
</div>
<div className="text-right mt-5">
<a className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-sm font-medium px-6 py-2 rounded transition-colors" href="#">
            ver mais
          </a>
</div>
</div>
</section>

<section className="py-12 sm:py-16 bg-slate-50">
<div className="max-w-[900px] mx-auto px-4 sm:px-6">
<div className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded mb-6">
          Dúvidas frequentes
        </div>
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-800 mb-8 tracking-tight">
          Tudo o que você precisa saber
        </h2>
<div className="space-y-3">
<details className="bg-white border border-slate-200 rounded-lg group">
<summary className="flex items-center justify-between cursor-pointer p-5 text-sm font-medium text-slate-800">
              Quais são os horários de check-in e check-out?
              <i className="w-4 h-4 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-5 pb-5 text-sm text-slate-600">
              Check-in a partir das 13:00 e check-out até as 12:00. Late
              check-out disponível mediante consulta.
            </div>
</details>
<details className="bg-white border border-slate-200 rounded-lg group">
<summary className="flex items-center justify-between cursor-pointer p-5 text-sm font-medium text-slate-800">
              O café da manhã está incluso?
              <i className="w-4 h-4 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-5 pb-5 text-sm text-slate-600">
              Sim, todas as diárias incluem café da manhã.
            </div>
</details>
<details className="bg-white border border-slate-200 rounded-lg group">
<summary className="flex items-center justify-between cursor-pointer p-5 text-sm font-medium text-slate-800">
              O hotel oferece estacionamento?
              <i className="w-4 h-4 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-5 pb-5 text-sm text-slate-600">
              Sim, estacionamento gratuito para hóspedes.
            </div>
</details>
<details className="bg-white border border-slate-200 rounded-lg group">
<summary className="flex items-center justify-between cursor-pointer p-5 text-sm font-medium text-slate-800">
              Crianças são bem-vindas?
              <i className="w-4 h-4 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-5 pb-5 text-sm text-slate-600">
              Sim. Consulte políticas específicas de hospedagem e cortesia para
              crianças no momento da reserva.
            </div>
</details>
<details className="bg-white border border-slate-200 rounded-lg group">
<summary className="flex items-center justify-between cursor-pointer p-5 text-sm font-medium text-slate-800">
              Como funciona a política de cancelamento?
              <i className="w-4 h-4 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-5 pb-5 text-sm text-slate-600">
              As condições variam conforme a tarifa selecionada no momento da
              reserva. Consulte o resumo antes de confirmar.
            </div>
</details>
<details className="bg-white border border-slate-200 rounded-lg group">
<summary className="flex items-center justify-between cursor-pointer p-5 text-sm font-medium text-slate-800">
              A recepção atende 24 horas?
              <i className="w-4 h-4 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-5 pb-5 text-sm text-slate-600">
              Sim, nossa recepção funciona 24 horas todos os dias.
            </div>
</details>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 mt-8">
<div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
<div className="grid md:grid-cols-3 gap-8">
<div>
<h4 className="text-sm font-medium text-slate-800 mb-1">
              GASPARIM GRAND HOTEL
            </h4>
<p className="text-xs text-slate-500 mb-2">CNPJ: 03.794.829/0001-00</p>
<div className="flex gap-0.5 text-yellow-400">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
</div>
</div>
<div className="space-y-3 text-sm text-slate-700">
<div className="flex items-start gap-2.5">
<i className="w-4 h-4 text-slate-500 mt-0.5" data-lucide="phone"></i>
<span>Telefone: +55 (65) 3223-4328</span>
</div>
<div className="flex items-start gap-2.5">
<i className="w-4 h-4 text-slate-500 mt-0.5" data-lucide="mail"></i>
<a className="hover:text-blue-600 transition-colors" href="mailto:reservas@hotelgasparim.com.br">
                reservas@hotelgasparim.com.br
              </a>
</div>
<div className="flex items-start gap-2.5">
<i className="w-4 h-4 text-slate-500 mt-0.5" data-lucide="map-pin"></i>
<div className="leading-relaxed">
                R. 13 de Junho, 650, Centro
                <br/>
                Cáceres | Mato Grosso | Brasil
                <br/>
                CEP: 78200-000
              </div>
</div>
</div>
<div className="flex md:justify-end items-start gap-2">
<a aria-label="Facebook" className="w-9 h-9 rounded bg-slate-200 hover:bg-blue-600 hover:text-white text-slate-600 flex items-center justify-center transition-colors" href="#">
<i className="w-4 h-4" data-lucide="facebook"></i>
</a>
<a aria-label="Instagram" className="w-9 h-9 rounded bg-slate-200 hover:bg-blue-600 hover:text-white text-slate-600 flex items-center justify-center transition-colors" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a aria-label="RSS" className="w-9 h-9 rounded bg-slate-200 hover:bg-blue-600 hover:text-white text-slate-600 flex items-center justify-center transition-colors" href="#">
<i className="w-4 h-4" data-lucide="rss"></i>
</a>
</div>
</div>
</div>
<div className="bg-slate-100 border-t border-slate-200">
<div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-600">
<div>
            Desenvolvido por
            <span className="font-medium">Hmax Automação Hoteleira</span>
            |
            <a className="hover:text-blue-600" href="#">Política de Privacidade</a>
</div>
<div className="flex items-center gap-2 bg-white border border-slate-200 rounded px-3 py-1.5">
<i className="w-4 h-4 text-green-600" data-lucide="shield-check"></i>
<span className="text-slate-700">
<span className="font-medium">HMAX AUTOMAÇÃO HOTELEIRA</span>
              · VERIFICADO E PROTEGIDO
            </span>
</div>
</div>
</div>
</footer>

<div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t border-slate-200 p-3 shadow-lg hidden" id="mobileStickyCta">
<a className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded text-sm" href="#booking">
<i className="w-4 h-4" data-lucide="calendar"></i>
        Reservar agora
      </a>
</div>



    </>
  );
}
