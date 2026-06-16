import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Reveal on scroll
      const reveals = document.querySelectorAll('.reveal');
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); } });
      }, { threshold: .08 });
      reveals.forEach(r => obs.observe(r));

      // Modal open/close
      const modal = document.getElementById('modal');
      const modalClose = document.getElementById('modal-close');
      document.querySelectorAll('.open-modal').forEach(btn => btn.addEventListener('click', () => modal.classList.add('open')));
      modalClose.addEventListener('click', () => modal.classList.remove('open'));
      modal.addEventListener('click', e => { if(e.target === modal) modal.classList.remove('open'); });
      document.addEventListener('keydown', e => {
        if(e.key === 'Escape') document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
      });

      // FAQ accordion
      document.querySelectorAll('.faq-item').forEach(item => {
        item.querySelector('.faq-q').addEventListener('click', () => {
          const open = item.classList.contains('open');
          document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
          if(!open) item.classList.add('open');
        });
      });

      // ─── Przycisk → natychmiastowe przekierowanie na Zencal ───
      document.getElementById('submit-btn').addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        this.textContent = 'Przekierowuję...';
        this.disabled = true;
        // Wyślij dane w tle jeśli są wypełnione
        try {
          const data = Object.fromEntries(new FormData(document.getElementById('contact-form')));
          fetch('https://hook.eu1.make.com/rqbftnenv579a4ntg8si8hmhqo8g3fqk', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          }).catch(() => {});
        } catch(err) {}
        // Otwórz w nowej karcie — unika CSRF token mismatch po stronie Zencal
        window.open('https://app.zencal.io/o/piotr-stefankiewicz/stefankiewiczai/konsultacja', '_blank');
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="topbar">
<span>
        Bezpłatna konsultacja dla gabinetów medycznych — sprawdź ile traci Twój
        gabinet
      </span>
</div>
<nav>
<a className="nav-logo" href="#" style={{gap: '10px', fontFamily: '\'DM Sans\', sans-serif'}}>
<div className="flex items-center justify-center w-[34px] h-[34px] rounded-full" style={{backgroundColor: '#0b49cd', boxShadow: '0 0 16px rgba(11,73,205,0.3)'}}>
<svg className="text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="18">
<circle cx="18" cy="5" r="3"></circle>
<circle cx="6" cy="12" r="3"></circle>
<circle cx="18" cy="19" r="3"></circle>
<line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
<line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
</svg>
</div>
<span style={{fontSize: '22px', fontWeight: '600', letterSpacing: '-0.03em', color: '#fff'}}>
          Ductly
        </span>
</a>
<div className="hidden lg:flex items-center gap-10 xl:gap-12 text-[11px] font-bold tracking-[0.08em] text-[#B0B0CC]">
<a className="text-white border-b-[2px] border-white pb-[3px] hover:text-white transition-colors uppercase" href="#wyniki" style={{marginTop: '2px'}}>
          Wyniki
        </a>
<a className="border-b-[2px] border-transparent pb-[3px] hover:text-white transition-colors uppercase" href="#problemy" style={{marginTop: '2px'}}>
          Problemy
        </a>
<a className="border-b-[2px] border-transparent pb-[3px] hover:text-white transition-colors uppercase" href="#rozwiazanie" style={{marginTop: '2px'}}>
          Rozwiązania
        </a>
<a className="border-b-[2px] border-transparent pb-[3px] hover:text-white transition-colors uppercase" href="#faq" style={{marginTop: '2px'}}>
          FAQ
        </a>
<a className="border-b-[2px] border-transparent pb-[3px] hover:text-white transition-colors uppercase open-modal" href="#" style={{marginTop: '2px'}}>
          Kontakt
        </a>
</div>
<button className="open-modal text-white border border-white/10 rounded-lg px-6 py-[9px] text-[13px] font-semibold transition-colors bg-white/[0.06] hover:bg-white/[0.15] font-sans cursor-pointer">
        Konsultacja
      </button>
</nav>
<section className="hero">
<div className="hero-bg">
<div className="hero-grid"></div>
<div className="hero-glow"></div>
<div className="hero-glow2"></div>
</div>
<div className="hero-inner">
<div className="reveal">
<div className="hero-badge">
<span className="dot-pulse"></span>
<span>System aktywny · gabinet Warszawa · od stycznia 2026</span>
</div>
<h1>
            Zautomatyzuj swój gabinet medyczny.
            <br/>
            Więcej pacjentów. Mniej chaosu.
            <br/>
<em>Wdrożenie w 7 dni.</em>
</h1>
<p className="hero-sub">
            Budujemy systemy AI które
            <strong>same rejestrują pacjentów</strong>
            , eliminują puste fotele, pilnują dokumentacji i zbierają opinie —
            żebyś Ty mógł skupić się na leczeniu.
          </p>
<div className="hero-cta-row">
<button className="btn-primary open-modal">
              UMÓW BEZPŁATNĄ ROZMOWĘ →
            </button>
<span className="btn-note">
              Bezpłatna 30 min · bez zobowiązań · odpowiadam w 24h
            </span>
</div>
<div className="hero-trust">
<span className="trust-item">⚡ Wdrożenie w 7 dni</span>
<span className="trust-item">✓ Bez zmiany systemów</span>
<span className="trust-item">🔒 Bez długich umów</span>
</div>
</div>
<div className="diagram-wrap reveal">
<div className="diagram-title">Jak działa system</div>
<div className="flow-nodes">
<div className="flow-node">
<div className="node-icon blue">📋</div>
<div className="node-text">
<h4>Pacjent wypełnia ankietę</h4>
<p>WhatsApp · SMS · Formularz · 24/7</p>
</div>
</div>
<div className="flow-arrow"><span className="arrow-dot"></span></div>
<div className="flow-node">
<div className="node-icon cyan">🧠</div>
<div className="node-text">
<h4>AI weryfikuje i kwalifikuje</h4>
<p>Sprawdza przeciwwskazania w 3 sekundy</p>
</div>
</div>
<div className="flow-arrow">
<span className="arrow-dot" style={{animationDelay: '.5s'}}></span>
</div>
<div className="flow-node">
<div className="node-icon blue">📅</div>
<div className="node-text">
<h4>Automatyczna rezerwacja</h4>
<p>Pacjent sam wybiera wolny termin</p>
</div>
</div>
<div className="flow-arrow">
<span className="arrow-dot" style={{animationDelay: '1s'}}></span>
</div>
<div className="flow-node">
<div className="node-icon blue">🔔</div>
<div className="node-text">
<h4>Przypomnienie SMS</h4>
<p>24h i 2h przed wizytą — automatycznie</p>
</div>
</div>
<div className="flow-arrow">
<span className="arrow-dot" style={{animationDelay: '1.5s'}}></span>
</div>
<div className="flow-node">
<div className="node-icon green">✅</div>
<div className="node-text">
<h4>Cyfrowa zgoda na tablecie</h4>
<p>Dane automatycznie w kartotece</p>
</div>
</div>
</div>
</div>
</div>
</section>
<div className="marquee-section">
<div className="marquee-track">
<span className="marquee-item">
<span className="m-icon">⚡</span>
          Rejestracja 24/7
        </span>
<span className="marquee-sep">·</span>
<span className="marquee-item">
<span className="m-icon">📱</span>
          Automatyczne SMS
        </span>
<span className="marquee-sep">·</span>
<span className="marquee-item">
<span className="m-icon">🤖</span>
          Weryfikacja AI
        </span>
<span className="marquee-sep">·</span>
<span className="marquee-item">
<span className="m-icon">📄</span>
          Zero papieru
        </span>
<span className="marquee-sep">·</span>
<span className="marquee-item">
<span className="m-icon">⭐</span>
          Opinie Google
        </span>
<span className="marquee-sep">·</span>
<span className="marquee-item">
<span className="m-icon">🗓️</span>
          Automatyczny follow-up
        </span>
<span className="marquee-sep">·</span>
<span className="marquee-item">
<span className="m-icon">💊</span>
          Asystent lekarza AI
        </span>
<span className="marquee-sep">·</span>
<span className="marquee-item">
<span className="m-icon">🏥</span>
          Wdrożenie 7 dni
        </span>
<span className="marquee-sep">·</span>
<span className="marquee-item">
<span className="m-icon">⚡</span>
          Rejestracja 24/7
        </span>
<span className="marquee-sep">·</span>
<span className="marquee-item">
<span className="m-icon">📱</span>
          Automatyczne SMS
        </span>
<span className="marquee-sep">·</span>
<span className="marquee-item">
<span className="m-icon">🤖</span>
          Weryfikacja AI
        </span>
<span className="marquee-sep">·</span>
<span className="marquee-item">
<span className="m-icon">📄</span>
          Zero papieru
        </span>
<span className="marquee-sep">·</span>
<span className="marquee-item">
<span className="m-icon">⭐</span>
          Opinie Google
        </span>
<span className="marquee-sep">·</span>
<span className="marquee-item">
<span className="m-icon">🗓️</span>
          Automatyczny follow-up
        </span>
<span className="marquee-sep">·</span>
<span className="marquee-item">
<span className="m-icon">💊</span>
          Asystent lekarza AI
        </span>
<span className="marquee-sep">·</span>
<span className="marquee-item">
<span className="m-icon">🏥</span>
          Wdrożenie 7 dni
        </span>
<span className="marquee-sep">·</span>
</div>
</div>
<section className="results-section" id="wyniki">
<div className="section-inner">
<div className="reveal" style={{textAlign: 'center', marginBottom: '52px'}}>
<div className="section-label">Wyniki z wdrożenia</div>
<h2 className="section-title">
            Co zyskała Grażyna —
            <br/>
            gabinet medycyny estetycznej, Warszawa
          </h2>
<p className="section-sub" style={{margin: '0 auto'}}>
            Wdrożenie — styczeń 2026. System działa do dziś bez przerwy.
          </p>
</div>
<div className="metrics-row reveal">
<div className="metric-card">
<span className="metric-num">2h</span>
<div className="metric-label">
              odzyskane dziennie
              <br/>
              przez recepcję i właścicielkę
            </div>
</div>
<div className="metric-card">
<span className="metric-num">0</span>
<div className="metric-label">
              pustych foteli przez zapomnienie
              <br/>
              w ciągu pierwszego miesiąca
            </div>
</div>
<div className="metric-card">
<span className="metric-num">7</span>
<div className="metric-label">
              dni od pierwszej rozmowy
              <br/>
              do działającego systemu
            </div>
</div>
</div>
<div className="quote-block reveal">
<div className="quote-mark">"</div>
<div className="quote-stars">★★★★★</div>
<p className="quote-text">
            "Przestałam być recepcjonistką we własnym gabinecie. Telefon
            przestał dzwonić co 10 minut. Pacjenci sami się zapisują, sami
            dostają przypomnienia — a ja mam czas żeby skupić się na tym co
            ważne."
          </p>
<div className="quote-author">
            — Grażyna, właścicielka gabinetu medycyny estetycznej, Warszawa
          </div>
</div>
</div>
</section>
<section className="system-section">
<div className="section-inner" style={{padding: '0 48px', marginBottom: '44px'}}>
<div className="reveal" style={{textAlign: 'center'}}>
<div className="section-label">Schemat systemu</div>
<h2 className="section-title">
            To jest system który zbudowaliśmy
            <br/>
            for gabinetu w Warszawie.
          </h2>
<p className="section-sub" style={{margin: '0 auto'}}>
            Każda strzałka to automatyczny przepływ danych. Zero ręcznej pracy —
            od zapytania pacjenta do wpisu w kartotece.
          </p>
</div>
</div>
<div className="reveal">
<div className="diagram-container">
<div className="diagram-bg-glow"></div>
<svg className="diagram-svg" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M 13 20 C 30 20, 30 50, 50 50" fill="none" stroke="rgba(26,86,255,0.55)" stroke-dasharray="0.8 1.2" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<path d="M 13 50 L 50 50" fill="none" stroke="rgba(26,86,255,0.55)" stroke-dasharray="0.8 1.2" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<path d="M 13 80 C 30 80, 30 50, 50 50" fill="none" stroke="rgba(26,86,255,0.55)" stroke-dasharray="0.8 1.2" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<path d="M 50 50 C 70 50, 70 16, 87 16" fill="none" stroke="rgba(0,230,118,0.55)" stroke-dasharray="0.8 1.2" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<path d="M 50 50 C 70 50, 70 38, 87 38" fill="none" stroke="rgba(0,230,118,0.55)" stroke-dasharray="0.8 1.2" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<path d="M 50 50 C 70 50, 70 62, 87 62" fill="none" stroke="rgba(0,230,118,0.55)" stroke-dasharray="0.8 1.2" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<path d="M 50 50 C 70 50, 70 84, 87 84" fill="none" stroke="rgba(0,230,118,0.55)" stroke-dasharray="0.8 1.2" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<g fill="#00D4FF">
<circle r="0.6">
<animatemotion begin="0s" dur="3s" path="M 13 20 C 30 20, 30 50, 50 50" repeatcount="indefinite"></animatemotion>
</circle>
<circle r="0.6">
<animatemotion begin="0.5s" dur="2.5s" path="M 13 50 L 50 50" repeatcount="indefinite"></animatemotion>
</circle>
<circle r="0.6">
<animatemotion begin="0.2s" dur="3.2s" path="M 13 80 C 30 80, 30 50, 50 50" repeatcount="indefinite"></animatemotion>
</circle>
</g>
<g fill="#00E676">
<circle r="0.6">
<animatemotion begin="1s" dur="3.5s" path="M 50 50 C 70 50, 70 16, 87 16" repeatcount="indefinite"></animatemotion>
</circle>
<circle r="0.6">
<animatemotion begin="0.3s" dur="2.8s" path="M 50 50 C 70 50, 70 38, 87 38" repeatcount="indefinite"></animatemotion>
</circle>
<circle r="0.6">
<animatemotion begin="0.8s" dur="3s" path="M 50 50 C 70 50, 70 62, 87 62" repeatcount="indefinite"></animatemotion>
</circle>
<circle r="0.6">
<animatemotion begin="0s" dur="3.3s" path="M 50 50 C 70 50, 70 84, 87 84" repeatcount="indefinite"></animatemotion>
</circle>
</g>
</svg>
<div className="diagram-nodes">
<div className="diag-node" style={{left: '13%', top: '20%'}}>
<div className="diag-icon">💬</div>
<div className="diag-text">WhatsApp</div>
<div className="diag-sub">Wiadomość od pacjenta</div>
</div>
<div className="diag-node" style={{left: '13%', top: '50%'}}>
<div className="diag-icon">📋</div>
<div className="diag-text">Formularz online</div>
<div className="diag-sub">Tally — ankieta wstępna</div>
</div>
<div className="diag-node" style={{left: '13%', top: '80%'}}>
<div className="diag-icon">📧</div>
<div className="diag-text">Email od pacjenta</div>
<div className="diag-sub">Dowolny kanał kontaktu</div>
</div>
<div className="diag-hub">
<div className="diag-hub-icon">🧠</div>
<div className="diag-hub-text">System AI</div>
</div>
<div className="diag-node" style={{left: '87%', top: '16%'}}>
<div className="diag-icon out">📅</div>
<div className="diag-text">Termin w kalendarzu</div>
<div className="diag-sub">Automatyczna rezerwacja</div>
</div>
<div className="diag-node" style={{left: '87%', top: '38%'}}>
<div className="diag-icon out">📱</div>
<div className="diag-text">SMS do pacjenta</div>
<div className="diag-sub">Potwierdzenie i przypomnienia</div>
</div>
<div className="diag-node" style={{left: '87%', top: '62%'}}>
<div className="diag-icon out">📁</div>
<div className="diag-text">Karta w kartotece</div>
<div className="diag-sub">Dane uzupełnione automatycznie</div>
</div>
<div className="diag-node" style={{left: '87%', top: '84%'}}>
<div className="diag-icon out">⭐</div>
<div className="diag-text">Prośba o opinię Google</div>
<div className="diag-sub">2h po zakończonej wizycie</div>
</div>
</div>
</div>
</div>
<div className="section-inner" style={{padding: '0 48px', marginTop: '28px'}}>
<div className="sys-cta-box reveal">
<div className="sys-cta-text">
            Ten sam system możemy uruchomić w Twoim gabinecie.
            <span>Wdrożenie w 7 dni. Bez zmiany obecnych narzędzi.</span>
</div>
<button className="btn-primary open-modal">UMÓW BEZPŁATNĄ ROZMOWĘ</button>
</div>
</div>
</section>
<section className="problems-section" id="problemy">
<div className="section-inner">
<div className="reveal" style={{textAlign: 'center', marginBottom: '44px'}}>
<div className="section-label">Problemy gabinetów</div>
<h2 className="section-title">Czy to brzmi znajomo?</h2>
<p className="section-sub" style={{margin: '0 auto'}}>
            To są problemy które słyszymy najczęściej od właścicieli gabinetów w
            Polsce. Każdy z nich kosztuje realnie — czas i pieniądze.
          </p>
</div>
<div className="problems-grid reveal">
<div className="problem-card">
<span className="problem-icon">📞</span>
<h3>Telefon nie przestaje dzwonić</h3>
<p>
              Recepcja odbiera telefony i jednocześnie obsługuje pacjenta przy
              okienku. Ktoś się rozłącza — i idzie do konkurencji.
            </p>
</div>
<div className="problem-card">
<span className="problem-icon">🪑</span>
<h3>Puste fotele przez zapomnienie</h3>
<p>
              Pacjent nie przyszedł i nie odwołał wizyty. Straciłeś slot wart
              kilkaset złotych — a pacjent nawet nie odwołał.
            </p>
</div>
<div className="problem-card">
<span className="problem-icon">👤</span>
<h3>Stali pacjenci nie wracają</h3>
<p>
              Wyszedł ze zleceniem kontroli za 3 miesiące — i zniknął. Nikt nie
              przypomniał. Stały pacjent przepadł na zawsze.
            </p>
</div>
<div className="problem-card">
<span className="problem-icon">📄</span>
<h3>Stosy papierów i ręczne przepisywanie</h3>
<p>
              Zgody drukowane, podpisane, skanowane. Dane wpisywane ręcznie. To
              samo dla każdego pacjenta, każdego dnia.
            </p>
</div>
<div className="problem-card">
<span className="problem-icon">⭐</span>
<h3>Opinie na Google bez odpowiedzi</h3>
<p>
              Pacjenci piszą opinie — dobre i złe. Nie ma czasu reagować. Nowi
              pacjenci to widzą i wybierają kogoś innego.
            </p>
</div>
<div className="problem-card">
<span className="problem-icon">⏱️</span>
<h3>Lekarz traci czas na papierkową robotę</h3>
<p>
              Opis wizyty, zalecenia, wpis do karty — po każdym pacjencie. 5-10
              minut które można odzyskać dzięki AI.
            </p>
</div>
</div>
<div className="cost-box reveal">
<p>
            Szacowany koszt tych problemów dla gabinetu przyjmującego 12
            pacjentów dziennie:
          </p>
<strong>
            2 000 – 4 000 PLN miesięcznie w zmarnowanym czasie i utraconych
            pacjentach.
          </strong>
</div>
</div>
</section>
<section className="solutions-section" id="rozwiazanie">
<div className="section-inner">
<div className="reveal" style={{textAlign: 'center', marginBottom: '44px'}}>
<div className="section-label">Nasze rozwiązania</div>
<h2 className="section-title">
            Sześć problemów.
            <br/>
            Sześć gotowych rozwiązań.
          </h2>
<p className="section-sub" style={{margin: '0 auto'}}>
            Każde wdrożenie jest zbudowane pod Twój gabinet — nie z półki, nie
            generyczne. Budujesz z człowiekiem który rozumie Twój proces.
          </p>
</div>
<div className="solutions-grid reveal">
<div className="solution-card">
<div className="sol-num">01</div>
<span className="sol-icon">📲</span>
<h3>Rejestracja 24/7 bez telefonu</h3>
<p>
              Pacjenci zapisują się sami przez WhatsApp, formularz lub SMS — o
              każdej porze. Recepcja przestaje być sekretarką telefoniczną.
            </p>
</div>
<div className="solution-card">
<div className="sol-num">02</div>
<span className="sol-icon">🪑</span>
<h3>System który wypełnia puste fotele</h3>
<p>
              Gdy pacjent odwołuje — system automatycznie oferuje termin
              pierwszej osobie z listy oczekujących. Zero zmarnowanych slotów.
            </p>
</div>
<div className="solution-card">
<div className="sol-num">03</div>
<span className="sol-icon">🔄</span>
<h3>Automatyczny follow-up po wizycie</h3>
<p>
              System sam przypomina o kontroli w odpowiednim czasie.
              Spersonalizowana wiadomość — nie masowy mailing.
            </p>
</div>
<div className="solution-card">
<div className="sol-num">04</div>
<span className="sol-icon">📱</span>
<h3>Cyfrowa dokumentacja na tablecie</h3>
<p>
              Zgody i karty podpisywane elektronicznie. Dane automatycznie w
              kartotece. Koniec z drukowaniem i skanowaniem.
            </p>
</div>
<div className="solution-card">
<div className="sol-num">05</div>
<span className="sol-icon">⭐</span>
<h3>Zarządzanie opiniami Google</h3>
<p>
              Po każdej wizycie pacjent dostaje prośbę o opinię. System
              monitoruje nowe opinie i przygotowuje gotową odpowiedź do
              zatwierdzenia.
            </p>
</div>
<div className="solution-card">
<div className="sol-num">06</div>
<span className="sol-icon">🧠</span>
<h3>Asystent AI dla lekarza</h3>
<p>
              Lekarz mówi 3 zdania po wizycie — system generuje gotowy wpis do
              karty i zalecenia dla pacjenta. Oszczędza 5-10 minut na każdej
              wizycie.
            </p>
</div>
</div>
</div>
</section>
<section className="comparison-section">
<div className="section-inner">
<div className="reveal" style={{textAlign: 'center', marginBottom: '44px'}}>
<div className="section-label">Dlaczego nie gotowy program</div>
<h2 className="section-title">
            Gotowe programy są dla wszystkich.
            <br/>
            My budujemy dla Ciebie.
          </h2>
</div>
<div className="compare-grid reveal">
<div className="compare-col">
<div className="compare-header gray">Gotowy program</div>
<div className="compare-item bad">
<span className="ci">✗</span>
<p>Jeden rozmiar dla wszystkich gabinetów</p>
</div>
<div className="compare-item bad">
<span className="ci">✗</span>
<p>Płacisz za funkcje których nie używasz</p>
</div>
<div className="compare-item bad">
<span className="ci">✗</span>
<p>Wsparcie przez ticket system — czekasz</p>
</div>
<div className="compare-item bad">
<span className="ci">✗</span>
<p>Wdrożenie trwa miesiące lub lata</p>
</div>
<div className="compare-item bad">
<span className="ci">✗</span>
<p>Nie integruje się z Twoim systemem</p>
</div>
</div>
<div className="compare-col center">
<div className="compare-header">Ductly</div>
<div className="compare-item good">
<span className="ci">✓</span>
<p>Zbudowane pod Twój konkretny gabinet</p>
</div>
<div className="compare-item good">
<span className="ci">✓</span>
<p>Płacisz tylko za to czego potrzebujesz</p>
</div>
<div className="compare-item good">
<span className="ci">✓</span>
<p>Bezpośredni kontakt z twórcą systemu</p>
</div>
<div className="compare-item good">
<span className="ci">✓</span>
<p>Pierwsze efekty w 7 dni roboczych</p>
</div>
<div className="compare-item good">
<span className="ci">✓</span>
<p>Integruje się z tym co już masz</p>
</div>
</div>
<div className="compare-col">
<div className="compare-header" style={{color: 'var(--cyan)'}}>
              Efekt dla Ciebie
            </div>
<div className="compare-item result">
<span className="ci">→</span>
<p>System który rozumie Twój proces</p>
</div>
<div className="compare-item result">
<span className="ci">→</span>
<p>Niższy koszt, wyższy zwrot z inwestycji</p>
</div>
<div className="compare-item result">
<span className="ci">→</span>
<p>Szybka reakcja gdy coś wymaga zmiany</p>
</div>
<div className="compare-item result">
<span className="ci">→</span>
<p>Działasz szybciej niż konkurencja</p>
</div>
<div className="compare-item result">
<span className="ci">→</span>
<p>Zero nauki nowych narzędzi od zera</p>
</div>
</div>
</div>
</div>
</section>
<section className="founder-section">
<div className="section-inner">
<div className="founder-inner reveal">
<div className="self-stretch relative overflow-hidden min-h-[320px] w-[380px] -my-[48px] -ml-[56px] mr-0 rounded-tl-[24px] rounded-bl-[24px] rounded-tr-none rounded-br-none max-[960px]:w-auto max-[960px]:-mx-[28px] max-[960px]:-mt-[36px] max-[960px]:mb-0 max-[960px]:rounded-tl-[24px] max-[960px]:rounded-tr-[24px] max-[960px]:rounded-bl-none max-[960px]:rounded-br-none">
<iframe allow="autoplay; fullscreen" allowtransparency="true" className="absolute inset-0 w-full h-full border-0" frameborder="0" name="wistia_embed" scrolling="no" src="https://fast.wistia.net/embed/iframe/od51alkdzv?videoFoam=true&amp;autoPlay=true&amp;mute=true&amp;endVideoBehavior=loop&amp;chromeless=true" title="Wistia video player"></iframe>
</div>
<div className="founder-content">
<div className="founder-hello">Cześć, jestem Piotrek</div>
<h3>
              Buduję automatyzacje dla gabinetów medycznych.
              <br/>
              Nie z szablonu — z głową.
            </h3>
<p>
              Jestem właścicielem
              <strong>Ductly</strong>
              — firmy która automatyzuje gabinety medyczne w Polsce używając AI
              i no-code (Make.com, OpenAI). Mam za sobą wdrożenie w gabinecie
              medycyny estetycznej w Warszawie —
              <strong>Grażyna odzyskała 2 godziny dziennie</strong>
              . Teraz szukam kolejnych gabinetów którym mogę to samo zrobić.
              Jeśli tracisz czas na rzeczy które może robić maszyna — odezwij
              się.
            </p>
</div>
</div>
</div>
</section>
<section className="forwho-section">
<div className="section-inner">
<div className="reveal" style={{textAlign: 'center', marginBottom: '44px'}}>
<div className="section-label">Dla kogo</div>
<h2 className="section-title">Dla jakich gabinetów to działa?</h2>
<p className="section-sub" style={{margin: '0 auto'}}>
            Jeśli przyjmujesz pacjentów i masz powtarzalny proces rejestracji —
            ten system zadziała u Ciebie w 7 dni.
          </p>
</div>
<div className="specialty-grid reveal">
<div className="specialty-card">
<span className="spec-icon">🦷</span>
<div className="spec-name">Stomatologia</div>
<div className="spec-desc">
              Automatyczna rejestracja + przypomnienia SMS przed wizytą
            </div>
</div>
<div className="specialty-card">
<span className="spec-icon">✨</span>
<div className="spec-name">Medycyna estetyczna</div>
<div className="spec-desc">
              Weryfikacja AI przeciwwskazań + cyfrowe zgody na tablecie
            </div>
</div>
<div className="specialty-card">
<span className="spec-icon">🏃</span>
<div className="spec-name">Fizjoterapia</div>
<div className="spec-desc">
              Follow-up po wizycie + automatyczne przypomnienia o seriach
            </div>
</div>
<div className="specialty-card">
<span className="spec-icon">QM</span>
<div className="spec-name">Dermatologia</div>
<div className="spec-desc">
              Zbieranie opinii Google + lista oczekujących na wolne terminy
            </div>
</div>
<div className="specialty-card">
<span className="spec-icon">🧠</span>
<div className="spec-name">Psychologia</div>
<div className="spec-desc">
              Dyskretna rejestracja online + automatyczne potwierdzenia
            </div>
</div>
<div className="specialty-card">
<span className="spec-icon">👶</span>
<div className="spec-name">Ginekologia</div>
<div className="spec-desc">
              Elektroniczna dokumentacja + asystent AI dla lekarza
            </div>
</div>
<div className="specialty-card">
<span className="spec-icon">🐾</span>
<div className="spec-name">Weterynaria</div>
<div className="spec-desc">
              Rejestracja 24/7 + powiadomienia o terminach szczepień
            </div>
</div>
<div className="specialty-card">
<span className="spec-icon">🏥</span>
<div className="spec-name">Każdy gabinet usługowy</div>
<div className="spec-desc">
              If masz powtarzalny proces rejestracji — zadziała u Ciebie
            </div>
</div>
</div>
<p className="reveal" style={{textAlign: 'center', fontSize: '14px', color: 'var(--gray)', marginTop: '20px'}}>
          Nie musisz zmieniać systemów których już używasz. Integrujemy się z
          tym co masz — Google Calendar, email, CRM.
        </p>
</div>
</section>
<section className="faq-section" id="faq">
<div className="section-inner">
<div className="reveal" style={{textAlign: 'center', marginBottom: '44px'}}>
<div className="section-label">FAQ</div>
<h2 className="section-title">
            Masz pytania?
            <br/>
            Mamy odpowiedzi.
          </h2>
</div>
<div className="faq-list reveal">
<div className="faq-item">
<button className="faq-q">
              Czy muszę zmieniać systemy których już używam?
              <span className="arrow">⌄</span>
</button>
<div className="faq-a">
              Nie. Integrujemy się z tym co już masz — Google Calendar, email,
              dowolny CRM. Nic nie zmieniasz w sposobie pracy.
            </div>
</div>
<div className="faq-item">
<button className="faq-q">
              Ile czasu zajmuje wdrożenie i co ja muszę robić?
              <span className="arrow">⌄</span>
</button>
<div className="faq-a">
              7 dni. Twój zespół nie robi prawie nic — Ty dajesz nam dostęp do
              narzędzi, my budujemy, testujemy i oddajemy gotowe. Pierwsze
              automatyzacje działają często już po 4-6 dniach.
            </div>
</div>
<div className="faq-item">
<button className="faq-q">
              Co jeśli coś przestanie działać? Kto mi pomoże?
              <span className="arrow">⌄</span>
</button>
<div className="faq-a">
              Reaguję w ciągu 2 godzin roboczych — masz bezpośredni kontakt ze
              mną, nie z konsultantem na infolinii. Dostajesz też pełną
              dokumentację systemu — możesz go zrozumieć i przejąć w każdej
              chwili.
            </div>
</div>
<div className="faq-item">
<button className="faq-q">
              Ile to kosztuje? Czy są ukryte opłaty?
              <span className="arrow">⌄</span>
</button>
<div className="faq-a">
              Wdrożenie to koszt jednorazowy — wyceniam indywidualnie po
              rozmowie, bo każdy gabinet jest inny. Narzędzia zewnętrzne
              (Make.com, OpenAI) generują niewielki koszt miesięczny — mówię o
              tym szczerze przed startem, bez niespodzianek.
            </div>
</div>
<div className="faq-item">
<button className="faq-q">
              Czy to działa dla małego gabinetu jednoosobowego?
              <span className="arrow">⌄</span>
</button>
<div className="faq-a">
              Tak — i właśnie dla takich gabinetów przynosi największy efekt.
              Jedna osoba odzyskuje czas który wcześniej szedł na telefony,
              papiery i przepisywanie. Wdrożenie Grażyny było dokładnie takim
              przypadkiem.
            </div>
</div>
<div className="faq-item">
<button className="faq-q">
              Czy dane moich pacjentów są bezpieczne i zgodne z RODO?
              <span className="arrow">⌄</span>
</button>
<div className="faq-a">
              Tak. Dane pacjentów zostają na Twoich narzędziach (Google, Twój
              CRM). Działamy zgodnie z RODO. Połączenie szyfrowane HTTPS. Mogę
              dostarczyć pełną dokumentację techniczną jeśli potrzebujesz.
            </div>
</div>
</div>
</div>
</section>
<section className="cta-section">
<div className="cta-glow"></div>
<div className="cta-glow2"></div>
<div className="cta-inner reveal">
<div className="section-label" style={{margin: '0 auto 16px'}}>Gotowy?</div>
<h2>
          Twój gabinet nie musi tak działać.
          <br/>
          Zmień to w 7 dni.
        </h2>
<p>
          Umów bezpłatną 30-minutową rozmowę. Pokażę Ci dokładnie co możemy
          zautomatyzować w Twoim gabinecie i ile na tym zaoszczędzisz — bez
          żadnych zobowiązań.
        </p>
<button className="btn-primary open-modal" style={{fontSize: '16px', padding: '18px 44px'}}>
          UMÓW BEZPŁATNĄ ROZMOWĘ →
        </button>
<p className="cta-no-obligation">
          Bezpłatna 30 min · bez zobowiązań · odpowiadam w ciągu 24h
        </p>
<div className="cta-trust-row">
<span className="cta-trust">
<span className="check">✓</span>
            Odpowiadam w ciągu 24h
          </span>
<span className="cta-trust">
<span className="check">✓</span>
            Wycena indywidualna
          </span>
<span className="cta-trust">
<span className="check">✓</span>
            Pierwsze efekty w 7 dni
          </span>
</div>
</div>
</section>
<footer>
<div className="footer-logo">Ductly</div>
<div className="footer-links">
<a href="#" onclick="document.getElementById('privacy-modal').classList.add('open');return false">
          Polityka Prywatności
        </a>
<a href="#" onclick="document.getElementById('terms-modal').classList.add('open');return false">
          Regulamin
        </a>
</div>
<div className="footer-copy">© 2026 Ductly</div>
</footer>
<div className="modal-overlay" id="modal">
<div className="modal-box">
<button className="modal-close" id="modal-close">×</button>
<h3>Porozmawiajmy</h3>
<p className="modal-sub">
          Zostaw kontakt — odezwę się w ciągu 24h i pokażę Ci ile traci Twój
          gabinet.
        </p>
<form id="contact-form">
<div className="field-group">
<label>Imię i nazwisko</label>
<input name="full_name" placeholder="Jan Kowalski" type="text"/>
</div>
<div className="field-group">
<label>Email</label>
<input name="email" placeholder="jan@gabinet.pl" type="email"/>
</div>
<div className="field-group">
<label>Telefon</label>
<input name="phone" placeholder="+48 000 000 000" type="tel"/>
</div>
<div className="field-group">
<label>Nazwa gabinetu i specjalizacja</label>
<input name="clinic" placeholder="Gabinet Stomatologiczny" type="text"/>
</div>
<div className="field-group">
<label>Z czym tracicie najwięcej czasu?</label>
<textarea name="problem" placeholder="Telefony dzwonią bez przerwy..." rows="3"></textarea>
</div>
<button className="btn-full" id="submit-btn" type="submit">
            WYŚLIJ I UMÓW ROZMOWĘ
          </button>
<p className="modal-privacy">
            🔒 Twoje dane są bezpieczne. Nie wysyłamy spamu.
          </p>
</form>
</div>
</div>
<div className="modal-overlay" id="privacy-modal" onclick="if(event.target===this)this.classList.remove('open')">
<div className="modal-box" style={{maxWidth: '680px', maxHeight: '85vh'}}>
<button className="modal-close" onclick="this.closest('.modal-overlay').classList.remove('open')">
          ×
        </button>
<h3>Polityka Prywatności</h3>
<p className="modal-sub">Ostatnia aktualizacja: 17 maja 2026</p>
<div style={{fontSize: '14px', color: 'var(--white-dim)', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '16px'}}>
<div>
<h4 style={{fontSize: '15px', color: 'var(--white)', fontWeight: '600', marginBottom: '4px'}}>
              1. Administrator danych
            </h4>
<p>
              Administratorem Twoich danych osobowych jest Piotr Stefankiewicz
              prowadzący działalność pod nazwą Ductly, kontakt:
              stefankiewiczai@gmail.com
            </p>
</div>
<div>
<h4 style={{fontSize: '15px', color: 'var(--white)', fontWeight: '600', marginBottom: '4px'}}>
              2. Jakie dane zbieramy?
            </h4>
<p>
              Za pośrednictwem formularza kontaktowego zbieramy: imię i
              nazwisko, adres email, numer telefonu, nazwę gabinetu oraz opis
              problemu.
            </p>
</div>
<div>
<h4 style={{fontSize: '15px', color: 'var(--white)', fontWeight: '600', marginBottom: '4px'}}>
              3. W jakim celu przetwarzamy dane?
            </h4>
<p>
              Dane przetwarzamy wyłącznie w celu odpowiedzi na zapytanie,
              przedstawienia oferty oraz realizacji umowy o świadczenie usług
              automatyzacji (art. 6 ust. 1 lit. b RODO). Dane nie są
              wykorzystywane do celów marketingowych bez Twojej zgody.
            </p>
</div>
<div>
<h4 style={{fontSize: '15px', color: 'var(--white)', fontWeight: '600', marginBottom: '4px'}}>
              4. Jak długo przechowujemy dane?
            </h4>
<p>
              Dane z formularza przechowujemy do czasu zakończenia
              korespondencji lub nawiązania współpracy, a następnie przez okres
              wynikający z przepisów prawa. Dane klientów — przez czas trwania
              umowy oraz 5 lat po jej zakończeniu.
            </p>
</div>
<div>
<h4 style={{fontSize: '15px', color: 'var(--white)', fontWeight: '600', marginBottom: '4px'}}>
              5. Komu przekazujemy dane?
            </h4>
<p>
              Dane mogą być przekazywane narzędziom: Make.com (automatyzacja
              formularza) oraz Google LLC (przechowywanie zgłoszeń). Nie
              sprzedajemy danych żadnym podmiotom trzecim.
            </p>
</div>
<div>
<h4 style={{fontSize: '15px', color: 'var(--white)', fontWeight: '600', marginBottom: '4px'}}>
              6. Twoje prawa
            </h4>
<p>
              Masz prawo do: dostępu do danych, sprostowania, usunięcia,
              ograniczenia przetwarzania, przenoszenia oraz sprzeciwu. Możesz
              wnieść skargę do Prezesa UODO. Kontakt: stefankiewiczai@gmail.com
            </p>
</div>
<div>
<h4 style={{fontSize: '15px', color: 'var(--white)', fontWeight: '600', marginBottom: '4px'}}>
              7. Pliki cookies
            </h4>
<p>
              Strona używa cookies do zapamiętania ustawień. Możesz zarządzać
              cookies przez ustawienia przeglądarki.
            </p>
</div>
<div>
<h4 style={{fontSize: '15px', color: 'var(--white)', fontWeight: '600', marginBottom: '4px'}}>
              8. Bezpieczeństwo
            </h4>
<p>
              Dane przesyłane przez formularz są szyfrowane protokołem HTTPS.
            </p>
</div>
</div>
</div>
</div>
<div className="modal-overlay" id="terms-modal" onclick="if(event.target===this)this.classList.remove('open')">
<div className="modal-box" style={{maxWidth: '680px', maxHeight: '85vh'}}>
<button className="modal-close" onclick="this.closest('.modal-overlay').classList.remove('open')">
          ×
        </button>
<h3>Regulamin</h3>
<p className="modal-sub">Ostatnia aktualizacja: 17 maja 2026</p>
<div style={{fontSize: '14px', color: 'var(--white-dim)', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '16px'}}>
<div>
<h4 style={{fontSize: '15px', color: 'var(--white)', fontWeight: '600', marginBottom: '4px'}}>
              §1. Zakres usług
            </h4>
<p>
              Ductly świadczy usługi automatyzacji procesów B2B: integracje
              systemów CRM, automatyzacja rejestracji pacjentów, wdrożenia
              Make.com oraz konsultacje i audyt procesów.
            </p>
</div>
<div>
<h4 style={{fontSize: '15px', color: 'var(--white)', fontWeight: '600', marginBottom: '4px'}}>
              §2. Bezpłatna konsultacja
            </h4>
<p>
              Bezpłatna konsultacja (do 30 min) jest niezobowiązująca. Ductly
              zastrzega prawo odmowy konsultacji bez podania przyczyny.
            </p>
</div>
<div>
<h4 style={{fontSize: '15px', color: 'var(--white)', fontWeight: '600', marginBottom: '4px'}}>
              §3. Zawarcie umowy
            </h4>
<p>
              Umowa zawierana jest indywidualnie w formie pisemnej lub
              elektronicznej po bezpłatnej konsultacji. Minimalna wartość
              projektu wynosi 500 PLN netto, chyba że strony postanowią inaczej.
            </p>
</div>
<div>
<h4 style={{fontSize: '15px', color: 'var(--white)', fontWeight: '600', marginBottom: '4px'}}>
              §4. Realizacja i terminy
            </h4>
<p>
              Szacowany czas wdrożenia: 1–2 tygodnie. Klient zobowiązuje się do
              udzielenia dostępów i współpracy niezbędnej do realizacji
              projektu.
            </p>
</div>
<div>
<h4 style={{fontSize: '15px', color: 'var(--white)', fontWeight: '600', marginBottom: '4px'}}>
              §5. Gwarancja i wsparcie
            </h4>
<p>
              Gwarancja na wdrożone rozwiązania: 30 dni od odbioru. Czas reakcji
              na awarię: 2 godziny robocze.
            </p>
</div>
<div>
<h4 style={{fontSize: '15px', color: 'var(--white)', fontWeight: '600', marginBottom: '4px'}}>
              §6. Odpowiedzialność
            </h4>
<p>
              Ductly nie ponosi odpowiedzialności za przerwy w działaniu
              serwisów zewnętrznych (Make.com, Google itp.). Odpowiedzialność
              ograniczona jest do wysokości zapłaconego wynagrodzenia netto.
            </p>
</div>
<div>
<h4 style={{fontSize: '15px', color: 'var(--white)', fontWeight: '600', marginBottom: '4px'}}>
              §7. Poufność
            </h4>
<p>
              Ductly zobowiązuje się do zachowania w tajemnicy wszelkich
              informacji poufnych przekazanych przez Klienta.
            </p>
</div>
<div>
<h4 style={{fontSize: '15px', color: 'var(--white)', fontWeight: '600', marginBottom: '4px'}}>
              §8. Własność intelektualna
            </h4>
<p>
              Po pełnej zapłacie Klient nabywa prawo do korzystania z wdrożonych
              rozwiązań na własne potrzeby.
            </p>
</div>
<div>
<h4 style={{fontSize: '15px', color: 'var(--white)', fontWeight: '600', marginBottom: '4px'}}>
              §9. Postanowienia końcowe
            </h4>
<p>
              Stosuje się przepisy prawa polskiego. Spory rozstrzygane przez sąd
              właściwy dla siedziby Ductly.
            </p>
</div>
</div>
</div>
</div>



    </>
  );
}
