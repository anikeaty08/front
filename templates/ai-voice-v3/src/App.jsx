import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
colors: {
brand: {
50: '#eef2ff',
100: '#e0e7ff',
500: '#6366f1',
600: '#4f46e5',
900: '#312e81',
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



{
"@context": "https://schema.org",
"@graph": [
{
"@type": "LocalBusiness",
"@id": "https://stimmwerk-solutions.de/#business",
"name": "Stimmwerk Consulting",
"description": "KI-Telefonagenten und Workflow-Automatisierung f√ºr kleine und mittelst√§ndische Unternehmen im DACH-Raum. Voice AI Agents, die Anrufe entgegennehmen, Termine vergeben und Kunden qualifizieren ‚Äî 24/7, DSGVO-konform.",
"url": "https://stimmwerk-solutions.de",
"email": "info@stimmwerk-solutions.de",
"address": {
"@type": "PostalAddress",
"addressLocality": "Berlin",
"addressCountry": "DE"
},
"areaServed": ["DE", "AT", "CH"],
"serviceType": ["Voice AI Agent", "KI-Telefonagent", "Workflow-Automatisierung", "AI Automation"],
"priceRange": "‚Ç¨‚Ç¨",
"openingHours": "Mo-Fr 09:00-18:00",
"sameAs": []
},
{
"@type": "Service",
"@id": "https://stimmwerk-solutions.de/#service-voice",
"name": "Voice AI Agent",
"provider": { "@id": "https://stimmwerk-solutions.de/#business" },
"description": "KI-gest√ºtzter Telefonagent der eingehende Anrufe entgegennimmt, Termine vergibt und Kunden qualifiziert ‚Äî rund um die Uhr, in nat√ºrlicher Sprache, DSGVO-konform.",
"areaServed": ["DE", "AT", "CH"],
"offers": {
"@type": "AggregateOffer",
"lowPrice": "199",
"highPrice": "9500",
"priceCurrency": "EUR",
"priceSpecification": {
"@type": "UnitPriceSpecification",
"price": "199",
"priceCurrency": "EUR",
"unitText": "Monat"
}
}
},
{
"@type": "FAQPage",
"mainEntity": [
{
"@type": "Question",
"name": "Klingt der KI-Agent nach einem Roboter?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Nein. Wir nutzen ElevenLabs-Stimmtechnologie ‚Äî die nat√ºrlichste KI-Stimme auf dem Markt. Viele Anrufer merken keinen Unterschied zu einem echten Mitarbeiter."
}
},
{
"@type": "Question",
"name": "Was passiert wenn der Agent eine Frage nicht beantworten kann?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Der Agent erkennt seine Grenzen und leitet den Anrufer sicher weiter ‚Äî per R√ºckrufwunsch, SMS oder direkt an Ihr Team. Kein Anruf geht verloren."
}
},
{
"@type": "Question",
"name": "Wie lange dauert der Setup?",
"acceptedAnswer": {
"@type": "Answer",
"text": "KI-Stacks (Voice Agent, Automatisierung, Wissensassistent etc.): 1 Woche. System Handover: 3‚Äì6 Wochen je nach Komplexit√§t."
}
},
{
"@type": "Question",
"name": "Ist der KI-Telefonagent DSGVO-konform?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Ja. Alle Daten werden auf Servern in Deutschland und der EU verarbeitet. Wir stellen einen Auftragsverarbeitungsvertrag (AVV) bereit."
}
},
{
"@type": "Question",
"name": "Kann ich jederzeit k√ºndigen?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Alle Abo-Tarife sind monatlich k√ºndbar, keine Mindestlaufzeit. Beim System Handover gibt es keine laufende Bindung."
}
},
{
"@type": "Question",
"name": "Was kostet ein KI-Telefonagent?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Ab ‚Ç¨199/Monat zzgl. einmaliger Einrichtungsgeb√ºhr ab ‚Ç¨1.500. Workflow-Automatisierung ab ‚Ç¨490/Monat + ab ‚Ç¨1.800 Setup. Alle Tarife sind monatlich k√ºndbar, keine Mindestlaufzeit."
}
}
]
}
]
}



        (function() {
          var calls = document.getElementById('roi-calls');
          var val = document.getElementById('roi-value');
          var callsDisp = document.getElementById('roi-calls-val');
          var valDisp = document.getElementById('roi-value-val');
          var result = document.getElementById('roi-result');
          function update() {
            var c = parseInt(calls.value), v = parseInt(val.value);
            callsDisp.textContent = c;
            valDisp.textContent = '‚Ç¨' + v.toLocaleString('de-DE');
            result.textContent = '‚Ç¨' + (c * v * 30).toLocaleString('de-DE');
          }
          if (calls && val) {
            calls.addEventListener('input', update);
            val.addEventListener('input', update);
            update();
          }
        })();
      


      document.addEventListener('DOMContentLoaded', () => {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        if(mobileMenuBtn && mobileMenu) {
          mobileMenuBtn.addEventListener('click', () => {
            if (mobileMenu.classList.contains('hidden')) {
              mobileMenu.classList.remove('hidden');
              mobileMenu.style.display = 'flex';
            } else {
              mobileMenu.style.display = '';
              mobileMenu.classList.add('hidden');
            }
          });
          // Close menu when a link is clicked
          mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
              mobileMenu.style.display = '';
              mobileMenu.classList.add('hidden');
            });
          });
        }
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        }, observerOptions);
        document.querySelectorAll('.reveal-on-scroll').forEach((elem) => {
          observer.observe(elem);
        });
      });
    


    (function() {
      const TALLY_URL = 'https://tally.so/r/xXZOpJ';
      const FAQ = [
        {
          keys: ['preis','kosten','kostet','koste','preise','‚Ç¨','euro'],
          answer: 'Unsere Pakete starten ab <strong>‚Ç¨199/Monat</strong> f√ºr den Voice AI Agent (nach einmaliger Einrichtung ab ‚Ç¨1.500). Workflow-Automatisierung ab ‚Ç¨490/Monat, Wissensassistent ab ‚Ç¨490/Monat. Je nach Betriebsgr√∂√üe empfehle ich das passende Paket. Soll ich Ihnen ein pers√∂nliches Angebot erstellen?',
          chips: [{ label: 'Demo buchen ‚Üí', action: 'book' }, { label: 'Alle Preise', action: 'href:#pricing' }]
        },
        {
          keys: ['demo','termin','buchen','gespr√§ch','kennenlernen','call','anruf'],
          answer: 'Sehr gerne! Buchen Sie jetzt in 2 Minuten einen kostenlosen 20-Minuten-Demo-Call ‚Äî ich zeige Ihnen live, wie ein KI-Agent f√ºr Ihren Betrieb klingt.',
          chips: [{ label: 'üìÖ Demo jetzt buchen', action: 'book' }]
        },
        {
          keys: ['wie lang','wie schnell','dauer','wann','fertig','ready','implementier','aufbau'],
          answer: 'Von Erstgespr√§ch bis Live-Betrieb dauert es in der Regel <strong>7‚Äì14 Tage</strong>. Wir √ºbernehmen alles ‚Äî Sie m√ºssen nichts einrichten. Klingt das interessant?',
          chips: [{ label: 'Demo buchen ‚Üí', action: 'book' }]
        },
        {
          keys: ['dsgvo','datenschutz','gdpr','konform','sicher','legal','recht'],
          answer: 'Ja, vollst√§ndig DSGVO-konform: Server in Deutschland/EU, Auftragsverarbeitungsvertrag inklusive, keine US-Cloud ohne Einwilligung. Das ist unser Standard ‚Äî nicht optional.',
          chips: [{ label: 'Mehr erfahren', action: 'href:datenschutz.html' }]
        },
        {
          keys: ['stimme','roboter','nat√ºrlich','klingt','spricht','sprache','menschlich'],
          answer: 'Wir nutzen <strong>ElevenLabs</strong> ‚Äî die nat√ºrlichste KI-Stimme am Markt. Die meisten Anrufer merken den Unterschied nicht. Testen Sie es gleich rechts unten live mit unserem Agenten "Lisa". üéß',
          chips: [{ label: 'Agent live testen', action: 'scroll:#top' }]
        },
        {
          keys: ['handwerk','elektriker','sanit√§r','installateur','maler','dachdecker','heizung'],
          answer: 'Perfekt ‚Äî f√ºr Handwerksbetriebe ist unser Voice Agent ideal: verpasste Anrufe = verlorene Auftr√§ge. Der Agent nimmt 24/7 an, qualifiziert die Anfrage und tr√§gt Termine direkt ein.',
          chips: [{ label: 'Demo buchen ‚Üí', action: 'book' }, { label: 'Zur Branchenseite', action: 'href:onboarding-handwerk.html' }]
        },
        {
          keys: ['steuer','kanzlei','buchhalter','steuererkl√§rung','steuerberater'],
          answer: 'F√ºr Steuerkanzleien √ºbernimmt der Agent Erstanfragen, kl√§rt Mandanten-Basics und terminiert Erstgespr√§che. Fachkr√§ftemangel an der Rezeption? Gel√∂st.',
          chips: [{ label: 'Demo buchen ‚Üí', action: 'book' }, { label: 'Zur Branchenseite', action: 'href:onboarding-steuerberater.html' }]
        },
        {
          keys: ['immobilien','hausverwaltung','verwalter','mieter','wohnungsbesichtigung'],
          answer: 'Immobilienverwaltungen profitieren besonders: Mieteranfragen, Besichtigungstermine, Schadenmeldungen ‚Äî alles per KI-Agent, rund um die Uhr.',
          chips: [{ label: 'Demo buchen ‚Üí', action: 'book' }]
        },
        {
          keys: ['kontakt','email','mail','schreiben','erreichbar','telefon','nummer'],
          answer: 'Sie erreichen uns per E-Mail unter <strong>info@stimmwerk-solutions.de</strong> oder buchen direkt einen kostenlosen Demo-Call ‚Äî dann sprechen wir pers√∂nlich.',
          chips: [{ label: 'üìÖ Demo buchen', action: 'book' }, { label: 'E-Mail schreiben', action: 'href:mailto:info@stimmwerk-solutions.de' }]
        },
        {
          keys: ['was','leistung','angebot','service','ihr','euer','macht','was ist'],
          answer: 'Wir bauen <strong>KI-Telefonagenten</strong> f√ºr deutsche KMUs ‚Äî Voice AI die anruft, antwortet, Termine vereinbart und Kunden qualifiziert. Alles DSGVO-konform, fertig in 1 Woche.',
          chips: [{ label: 'Demo buchen ‚Üí', action: 'book' }, { label: 'Preise ansehen', action: 'href:#pricing' }]
        }
      ];

      const WELCOME = 'Hallo! üëã Ich bin <strong>Mika</strong>, der digitale Assistent von Stimmwerk. Wie kann ich Ihnen helfen?';
      const INITIAL_CHIPS = [
        { label: 'üí∂ Preise', action: 'faq:preis' },
        { label: 'üìÖ Demo buchen', action: 'book' },
        { label: '‚ö° Wie schnell?', action: 'faq:wie schnell' },
        { label: 'üîí DSGVO?', action: 'faq:dsgvo' }
      ];
      const FALLBACK = 'Das kann ich noch nicht beantworten. üòÖ Schreiben Sie uns direkt an <a href="mailto:info@stimmwerk-solutions.de" style="color:#4f46e5;font-weight:600;">info@stimmwerk-solutions.de</a> oder buchen Sie ein kostenloses Gespr√§ch.';
      const FALLBACK_CHIPS = [{ label: 'üìÖ Demo buchen', action: 'book' }];

      const wrap = document.getElementById('sw-chat-wrap');
      const btn = document.getElementById('sw-chat-btn');
      const closeBtn = document.getElementById('sw-chat-close-btn');
      const msgs = document.getElementById('sw-chat-messages');
      const qr = document.getElementById('sw-quick-replies');
      const input = document.getElementById('sw-chat-input');
      const sendBtn = document.getElementById('sw-send-btn');
      const badge = document.getElementById('sw-unread-badge');

      let opened = false;

      function scrollBottom() {
        msgs.scrollTo({ top: msgs.scrollHeight, behavior: 'smooth' });
      }

      function addMsg(html, isUser) {
        const div = document.createElement('div');
        div.className = 'sw-msg' + (isUser ? ' sw-user' : '');
        if (!isUser) {
          div.innerHTML = '<div class="sw-msg-avatar">ü§ñ</div><div class="sw-bubble">' + html + '</div>';
        } else {
          div.innerHTML = '<div class="sw-bubble">' + html + '</div>';
        }
        msgs.appendChild(div);
        scrollBottom();
      }

      function showChips(chips) {
        qr.innerHTML = '';
        if (!chips || !chips.length) return;
        chips.forEach(c => {
          const b = document.createElement('button');
          b.className = 'sw-chip';
          b.textContent = c.label;
          b.addEventListener('click', () => handleAction(c.action, c.label));
          qr.appendChild(b);
        });
      }

      function showTyping() {
        const div = document.createElement('div');
        div.className = 'sw-msg';
        div.id = 'sw-typing-indicator';
        div.innerHTML = '<div class="sw-msg-avatar">ü§ñ</div><div class="sw-typing"><span></span><span></span><span></span></div>';
        msgs.appendChild(div);
        scrollBottom();
      }

      function removeTyping() {
        const t = document.getElementById('sw-typing-indicator');
        if (t) t.remove();
      }

      function botReply(answer, chips, delay) {
        delay = delay || 800;
        showTyping();
        setTimeout(() => {
          removeTyping();
          addMsg(answer, false);
          showChips(chips || []);
        }, delay);
      }

      function findFaq(text) {
        const lower = text.toLowerCase();
        for (const entry of FAQ) {
          if (entry.keys.some(k => lower.includes(k))) return entry;
        }
        return null;
      }

      function handleAction(action, label) {
        if (action === 'book') {
          window.open(TALLY_URL, '_blank');
          addMsg('Demo-Termin anfragen', true);
          botReply('Super! üéâ Das Formular √∂ffnet sich in einem neuen Tab. Wir melden uns innerhalb von 24 Stunden mit einem Terminvorschlag!', []);
          return;
        }
        if (action.startsWith('faq:')) {
          const query = action.slice(4);
          const hit = findFaq(query);
          addMsg(label, true);
          qr.innerHTML = '';
          if (hit) botReply(hit.answer, hit.chips);
          else botReply(FALLBACK, FALLBACK_CHIPS);
          return;
        }
        if (action.startsWith('href:')) {
          const target = action.slice(5);
          if (target.startsWith('#')) {
            const el = document.querySelector(target);
            if (el) { wrap.classList.remove('sw-open'); el.scrollIntoView({ behavior: 'smooth' }); }
          } else {
            window.location.href = target;
          }
          return;
        }
        if (action.startsWith('scroll:')) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          wrap.classList.remove('sw-open');
          return;
        }
      }

      function handleSend() {
        const text = input.value.trim();
        if (!text) return;
        addMsg(text, true);
        input.value = '';
        qr.innerHTML = '';
        const hit = findFaq(text);
        if (hit) botReply(hit.answer, hit.chips);
        else botReply(FALLBACK, FALLBACK_CHIPS, 1000);
      }

      function openChat() {
        opened = true;
        wrap.classList.add('sw-open');
        badge.style.display = 'none';
        if (!msgs.children.length) {
          setTimeout(() => {
            botReply(WELCOME, null, 400);
            setTimeout(() => showChips(INITIAL_CHIPS), 1400);
          }, 100);
        }
        setTimeout(() => input.focus(), 300);
      }

      btn.addEventListener('click', () => {
        if (wrap.classList.contains('sw-open')) {
          wrap.classList.remove('sw-open');
        } else {
          openChat();
        }
      });
      closeBtn.addEventListener('click', () => wrap.classList.remove('sw-open'));
      sendBtn.addEventListener('click', handleSend);
      input.addEventListener('keydown', e => { if (e.key === 'Enter') handleSend(); });

      // Show badge after 4s if not opened
      setTimeout(() => {
        if (!opened) badge.style.display = 'flex';
      }, 4000);
    })();
    


    import { Conversation } from 'https://cdn.jsdelivr.net/npm/@elevenlabs/client@latest/+esm';

    const fab = document.getElementById('sw-voice-fab');
    const label = document.getElementById('sw-voice-label');
    let conversation = null;

    setTimeout(() => label.classList.add('hidden'), 5000);

    fab.addEventListener('click', async () => {
      if (!conversation) {
        // Start
        try {
          fab.classList.add('connecting');
          label.textContent = 'Verbinde...';
          label.classList.remove('hidden');

          await navigator.mediaDevices.getUserMedia({ audio: true });

          conversation = await Conversation.startSession({
            agentId: 'agent_3901kmb7cft4ex3t835msjs1tns7',
            onConnect: () => {
              fab.classList.remove('connecting');
              fab.classList.add('active');
              label.textContent = 'Gespr√§ch aktiv ‚Äî zum Beenden tippen';
              setTimeout(() => label.classList.add('hidden'), 3000);
            },
            onDisconnect: () => {
              fab.classList.remove('active', 'connecting');
              conversation = null;
              label.textContent = 'Agent live testen';
              label.classList.remove('hidden');
              setTimeout(() => label.classList.add('hidden'), 3000);
            },
            onError: (error) => {
              console.error('ElevenLabs error:', error);
              fab.classList.remove('active', 'connecting');
              conversation = null;
            },
          });
        } catch (err) {
          console.error('Failed to start:', err);
          fab.classList.remove('connecting');
          label.textContent = 'Mikrofon-Zugriff ben√∂tigt';
          label.classList.remove('hidden');
          setTimeout(() => label.classList.add('hidden'), 3000);
        }
      } else {
        // Stop
        await conversation.endSession();
        conversation = null;
      }
    });
    


      (function() {
        var consent = localStorage.getItem('cookie_consent');
        if (!consent) {
          document.getElementById('cookie-banner').style.display = 'block';
        } else if (consent === 'accepted') {
          enableGA();
        }
      })();
      function enableGA() {
        window['ga-disable-G-2M6V79H761'] = false;
      }
      function cookieAccept() {
        localStorage.setItem('cookie_consent', 'accepted');
        document.getElementById('cookie-banner').style.display = 'none';
        enableGA();
      }
      function cookieDecline() {
        localStorage.setItem('cookie_consent', 'declined');
        document.getElementById('cookie-banner').style.display = 'none';
        window['ga-disable-G-2M6V79H761'] = true;
      }
      // Default: GA deaktiviert bis Einwilligung
      window['ga-disable-G-2M6V79H761'] = true;
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="scroll-progress"></div>
<header className="fixed top-0 w-full z-50 border-b border-slate-200/60 glass transition-all duration-300" id="header">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="relative flex flex-col items-center justify-center group outline-none py-1" href="#">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 pointer-events-none z-0">
<div className="absolute inset-0 rounded-full border-2 border-[#7c5cfc] animate-sonar"></div>
<div className="absolute inset-0 rounded-full border-2 border-[#7c5cfc] animate-sonar" style={{animationDelay: '0.6s'}}></div>
</div>
<div className="relative z-10 flex flex-col items-center">
<svg className="h-6 sm:h-7 w-auto mb-1" viewbox="0 0 100 40">
<defs>
<lineargradient id="headerWaveGrad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#0ea5e9"></stop>
<stop offset="25%" stop-color="#3b82f6"></stop>
<stop offset="50%" stop-color="#ef4444"></stop>
<stop offset="75%" stop-color="#f97316"></stop>
<stop offset="100%" stop-color="#ef4444"></stop>
</lineargradient>
</defs>
<path d="M 5 20 L 22 20 C 25 20, 27 16, 29 16 C 31 16, 32 24, 34 24 C 36 24, 38 10, 41 10 C 44 10, 46 32, 49 32 C 52 32, 54 6, 57 6 C 60 6, 62 26, 65 26 C 68 26, 70 17, 73 17 C 76 17, 78 20, 81 20 L 95 20" fill="none" stroke="url(#headerWaveGrad)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
<div className="flex flex-col items-center">
<span className="text-[1.1rem] sm:text-[1.25rem] font-bold tracking-wider text-slate-900 leading-none">
                STIMMWERK
              </span>
<span className="text-[0.4rem] sm:text-[0.45rem] font-semibold tracking-[0.25em] text-slate-800 mt-1 uppercase">
                KI-Systeme ¬∑ Mittelstand
              </span>
</div>
</div>
</a>
<nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#stacks">
            Leistungen
          </a>
<a className="hover:text-slate-900 transition-colors" href="#features">
            Voice AI
          </a>
<a className="hover:text-slate-900 transition-colors" href="/automatisierung/">
            Automatisierung
          </a>
<a className="hover:text-slate-900 transition-colors" href="/dokumente/">
            Dokumente
          </a>
<a className="hover:text-slate-900 transition-colors" href="/wissen/">
            Blog
          </a>
<a className="hover:text-slate-900 transition-colors" href="#industries">
            Branchen
          </a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">
            Preise
          </a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-500/20" href="#contact">
<span>Starten</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<button className="lg:hidden p-2 text-slate-600" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
<div className="hidden fixed top-0 left-0 w-screen h-screen bg-white z-40 pt-20 px-6 pb-6 flex flex-col gap-6 overflow-y-auto" id="mobile-menu">
<a className="text-xl font-medium text-slate-900 border-b border-slate-100 pb-4" href="#features">
          Voice AI
        </a>
<a className="text-xl font-medium text-slate-900 border-b border-slate-100 pb-4" href="/automatisierung/">
          Automatisierung
        </a>
<a className="text-xl font-medium text-slate-900 border-b border-slate-100 pb-4" href="/dokumente/">
          Dokumente
        </a>
<a className="text-xl font-medium text-slate-900 border-b border-slate-100 pb-4" href="/wissen/">
          Blog
        </a>
<a className="text-xl font-medium text-slate-900 border-b border-slate-100 pb-4" href="#industries">
          Branchen
        </a>
<a className="text-xl font-medium text-slate-900 border-b border-slate-100 pb-4" href="#pricing">
          Preise
        </a>
<a className="mt-auto w-full py-4 bg-slate-900 text-white text-center rounded-xl font-medium" href="#contact">
          Jetzt starten
        </a>
</div>
</header>
<main>
<section className="pt-32 pb-20 lg:pt-48 lg:pb-32 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-grid-slate -z-10"></div>
<div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] -z-10 animate-float hero-gradient opacity-[0.07]"></div>
<div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] -z-10 animate-float hero-gradient opacity-[0.05]" style={{animationDelay: '2s'}}></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
<div className="lg:w-1/2 relative z-10 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-600 mb-8 animate-fade-in">
<span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                Kostenlose Demo ¬∑ Kein Risiko
              </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter text-slate-900 leading-[1.1] mb-6">
                Ihr KI-Agent
                <br/>
<span className="text-slate-400">am Telefon.</span>
<br/>
                24/7.
              </h1>
<p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Stimmwerk baut KI-Telefonagenten f√ºr den Mittelstand. Kein verpasster Anruf, keine Warteschleife.
                Dazu: Workflow-Automatisierung, Dokumenten-KI und Wissensassistenten. DSGVO-konform, in 1 Woche live.
              </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 cta-glow flex items-center justify-center gap-2" onclick="Calendly.initPopupWidget({url:'https://calendly.com/stimmwerk-solutions-info/demo'});return false;">
                  Kostenlose Demo anfragen
                  <iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
</button>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 text-slate-700 rounded-full font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2" href="#contact">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                  Agent live testen
                </a>
</div>
<div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="text-sm font-semibold flex items-center gap-2">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
                  DSGVO Konform
                </div>
<div className="text-sm font-semibold flex items-center gap-2">
<iconify-icon icon="solar:server-square-linear"></iconify-icon>
                  EU-Datenschutzstandards ¬∑ Ende-zu-Ende verschl√ºsselt
                </div>
</div>
</div>
<div className="lg:w-1/2 w-full relative">
<div className="relative w-full aspect-square max-w-md mx-auto lg:ml-auto">
<div className="absolute inset-x-0 top-10 bottom-0 bg-white rounded-2xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden flex flex-col">
<div className="h-10 border-b border-slate-100 flex items-center px-4 gap-2 bg-slate-50/50">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
</div>
<div className="ml-auto text-[10px] text-slate-400 font-mono">
                      LIVE AGENT V2.0
                    </div>
</div>
<div className="flex-1 p-6 flex flex-col gap-4">
<div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center animate-pulse">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-slate-500 uppercase">
                          Eingehender Anruf
                        </div>
<div className="text-sm font-semibold text-slate-900">
                          +49 171 234 5678
                        </div>
</div>
<div className="ml-auto px-2 py-1 bg-white border border-slate-200 rounded text-[10px] font-medium text-slate-500">
                        00:12
                      </div>
</div>
<div className="flex-1 space-y-4 py-4">
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0"></div>
<div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none text-xs text-slate-600 leading-relaxed max-w-[80%]">
                          Guten Tag, ich w√ºrde gerne meinen Termin am Dienstag
                          verschieben.
                        </div>
</div>
<div className="flex gap-3 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center text-white text-xs flex-shrink-0">
                          AI
                        </div>
<div className="bg-brand-600 text-white p-3 rounded-2xl rounded-tr-none text-xs leading-relaxed max-w-[80%] shadow-lg shadow-brand-500/20">
                          Verstehe, das ist kein Problem. Ich sehe einen freien
                          Slot am Donnerstag um 14:00 Uhr. Passt das?
                        </div>
</div>
</div>
<div className="border-t border-slate-100 pt-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-amber-500" icon="solar:bolt-linear" width="16"></iconify-icon>
<span className="text-[10px] font-bold text-slate-400 uppercase">
                          Automatisierung ausgel√∂st
                        </span>
</div>
<div className="flex gap-2">
<div className="flex-1 bg-white border border-slate-200 p-2 rounded-lg flex items-center gap-2 shadow-sm">
<div className="w-6 h-6 rounded bg-orange-50 text-orange-600 flex items-center justify-center">
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-slate-600">
                            Kalender Update
                          </span>
</div>
<div className="flex-1 bg-white border border-slate-200 p-2 rounded-lg flex items-center gap-2 shadow-sm">
<div className="w-6 h-6 rounded bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:letter-linear" width="14"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-slate-600">
                            Best√§tigung senden
                          </span>
</div>
</div>
</div>
</div>
</div>
<div className="absolute top-20 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 animate-float" style={{animationDelay: '1s'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-500">Effizienz</div>
<div className="text-lg font-bold text-slate-900">+450%</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="border-y border-slate-100 bg-slate-50/50 py-12">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">
            Unser Toolstack
          </p>
<div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 grayscale">
<div className="flex items-center justify-center text-xl font-bold font-inter">
              ElevenLabs
            </div>
<div className="flex items-center justify-center text-xl font-bold font-inter">
              Twilio
            </div>
<div className="flex items-center justify-center text-xl font-bold font-inter">
              n8n
            </div>
<div className="flex items-center justify-center text-xl font-bold font-inter">
              Google Cloud
            </div>
</div>
</div>
</section>
<section className="py-24 bg-white relative" id="features">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-2xl mb-16 reveal-on-scroll">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">
              Ein √ñkosystem f√ºr Ihre Prozesse
            </h2>
<p className="text-slate-500 text-lg">
              Keine Insell√∂sungen. Stimmwerk integriert sich tief in Ihre
              bestehende Infrastruktur.
            </p>
</div>
<div className="w-full flex justify-center mb-10 reveal-on-scroll">
<p className="text-sm text-slate-500 italic text-center max-w-xl mx-auto">
              Spricht Deutsch, Englisch, Spanisch und 70 weitere Sprachen ‚Äî
              erkennt automatisch in welcher Sprache der Anrufer spricht und
              antwortet entsprechend.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
<div className="md:col-span-2 rounded-3xl bg-slate-50 border border-slate-200 p-8 relative overflow-hidden group hover:border-brand-200 transition-colors reveal-on-scroll">
<div className="relative z-10 h-full flex flex-col">
<div className="w-12 h-12 rounded-xl bg-brand-600 text-white flex items-center justify-center mb-6">
<iconify-icon icon="solar:chat-round-line-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-2">
                  Nat√ºrliche Konversation
                </h3>
<p className="text-slate-600 max-w-md">
                  Unsere KI versteht Kontext, Unterbrechungen und Dialekte. Sie
                  klingt so menschlich und sorgt daf√ºr, dass deutlich weniger
                  Anrufe verloren gehen. Deutsch, Englisch, Spanisch und 70 weitere Sprachen
                  ‚Äî inklusive regionaler Dialekte wie Bayerisch,
                  Schweizerdeutsch und √ñsterreichisch.
                </p>
<div className="mt-auto flex items-center gap-2">
<div className="px-3 py-1 bg-white rounded-md border border-slate-200 text-xs font-medium">
                    Latenz &lt; 500ms
                  </div>
<div className="px-3 py-1 bg-white rounded-md border border-slate-200 text-xs font-medium">
                    Unterbrechbar
                  </div>
<div className="px-3 py-1 bg-white rounded-md border border-slate-200 text-xs font-medium">
                    üåç 70+ Sprachen
                  </div>
</div>
</div>
<div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-white/0 to-slate-50 z-0"></div>
<div className="absolute right-[-20px] bottom-[-20px] opacity-10 text-brand-600 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:soundwave-square-linear" width="240"></iconify-icon>
</div>
</div>
<div className="rounded-3xl bg-white border border-slate-200 p-8 relative overflow-hidden hover:shadow-lg transition-all reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:widget-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">
                Plug &amp; Play
              </h3>
<p className="text-slate-500 text-sm mb-6">
                Verbinden Sie CRM, Kalender und Email in Sekunden.
              </p>
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px]">
                  HS
                </div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[10px]">
                  SF
                </div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-green-100 flex items-center justify-center text-[10px]">
                  Z
                </div>
</div>
</div>
<div className="rounded-3xl bg-slate-900 text-white p-8 relative overflow-hidden reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
<iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2">Deep Analytics</h3>
<p className="text-slate-400 text-sm">
                Erkennen Sie Trends in Kundenanfragen bevor sie zu Problemen
                werden.
              </p>
<div className="mt-6 h-24 flex items-end gap-1 opacity-50">
<div className="w-1/5 h-[40%] bg-brand-500 rounded-t-sm"></div>
<div className="w-1/5 h-[70%] bg-brand-500 rounded-t-sm"></div>
<div className="w-1/5 h-[50%] bg-brand-500 rounded-t-sm"></div>
<div className="w-1/5 h-[90%] bg-brand-500 rounded-t-sm"></div>
<div className="w-1/5 h-[65%] bg-brand-500 rounded-t-sm"></div>
</div>
</div>
<div className="md:col-span-2 rounded-3xl bg-white border border-slate-200 p-8 flex items-center gap-8 hover:border-brand-200 transition-colors reveal-on-scroll" style={{transitionDelay: '300ms'}}>
<div className="w-1/2">
<div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:shield-user-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">
                  DSGVO-konform ¬∑ Server in Deutschland
                </h3>
<p className="text-slate-500 text-sm">
                  Alle Daten und Sprachmodelle werden auf Servern in Deutschland gehostet und verarbeitet. Wir arbeiten strikt nach europ√§ischen DSGVO-Standards inklusive Data Processing Agreement.
                </p>
</div>
<div className="w-1/2 flex justify-center">
<div className="relative w-32 h-32">
<div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
<div className="absolute inset-0 border-4 border-green-500 rounded-full border-t-transparent animate-spin" style={{animationDuration: '3s'}}></div>
<div className="absolute inset-0 flex items-center justify-center font-bold text-slate-900 text-xl">
                    100%
                  </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 border-t border-slate-800" id="stacks">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
<span className="text-brand-400 font-semibold tracking-wide uppercase text-xs mb-2 block">KI-PORTFOLIO</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              6 KI-Stacks. Ein Partner.
            </h2>
<p className="text-slate-400 text-lg leading-relaxed">
              Wir automatisieren nicht nur das Telefon ‚Äî wir √ºbernehmen Kommunikation, Marketing, Recruiting, Prozesse, Website und interne Tools. Komplett oder als Einstieg.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">

<div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-brand-500/30 transition-all reveal-on-scroll group">
<div className="w-12 h-12 rounded-xl bg-brand-600/20 text-brand-400 flex items-center justify-center mb-6 text-2xl">üìû</div>
<h3 className="text-xl font-semibold text-white mb-2">KI-Kommunikation</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">Voice Agent, Email-Autoresponder, Fristenerinnerungen, Belegerfassung. Kein Anruf und keine Email geht mehr verloren.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-full">Voice Agent</span>
<span className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-full">Email-Auto</span>
<span className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-full">Fristenerinnerung</span>
</div>
<div className="flex items-center justify-between">
<span className="text-brand-400 font-bold">ab ‚Ç¨199 / Monat</span>
<span className="text-slate-500 text-xs">Alle Branchen</span>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-brand-500/30 transition-all reveal-on-scroll group" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center mb-6 text-2xl">‚ö°</div>
<h3 className="text-xl font-semibold text-white mb-2">Workflow-Automatisierung</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">Rechnungen, Beh√∂rden-Follow-ups, CRM-Updates, Ticket-Erstellung ‚Äî vollautomatisch. Manuelle Routinearbeit auf null.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-full">n8n Workflows</span>
<span className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-full">CRM-Integration</span>
<span className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-full">1‚Äì6 Prozesse</span>
</div>
<div className="flex items-center justify-between">
<span className="text-indigo-400 font-bold">ab ‚Ç¨400 / Monat</span>
<span className="text-slate-500 text-xs">Alle Branchen</span>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-brand-500/30 transition-all reveal-on-scroll group" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center mb-6 text-2xl">üß†</div>
<h3 className="text-xl font-semibold text-white mb-2">KI-Wissensassistent</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">Chatbot aus Ihren Dokumenten ‚Äî f√ºr Mitarbeiter oder Mandanten. Quellgenaue Antworten statt stundenlanger Suche.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-full">RAG-Wissensbasis</span>
<span className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-full">Mitarbeiter-Chat</span>
<span className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-full">Mandanten-Bot</span>
</div>
<div className="flex items-center justify-between">
<span className="text-amber-400 font-bold">ab ‚Ç¨390 / Monat</span>
<span className="text-slate-500 text-xs">Kanzleien ¬∑ Verwaltung</span>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-brand-500/30 transition-all reveal-on-scroll group">
<div className="w-12 h-12 rounded-xl bg-green-600/20 text-green-400 flex items-center justify-center mb-6 text-2xl">üë•</div>
<h3 className="text-xl font-semibold text-white mb-2">KI-Recruiting-Pipeline</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">CV-Screening, Bewerber-Scoring, Interview-Koordination, Absagen automatisiert. Time-to-Hire um bis zu 60% senken.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-full">CV-Screening</span>
<span className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-full">Scoring</span>
<span className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-full">Interview-Auto</span>
</div>
<div className="flex items-center justify-between">
<span className="text-green-400 font-bold">ab ‚Ç¨490 / Monat</span>
<span className="text-slate-500 text-xs">HR &amp; Personalvermittlung</span>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-brand-500/30 transition-all reveal-on-scroll group" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center mb-6 text-2xl">üöÄ</div>
<h3 className="text-xl font-semibold text-white mb-2">KI-Marketing-Automation</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">Leads ‚Üí Cold Email ‚Üí Replies automatisch ‚Üí CRM ‚Üí Angebot. Vollautomatische Outbound-Pipeline, messbar ab Woche 1.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-full">Cold Email</span>
<span className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-full">CRM-Auto</span>
<span className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-full">Lead Nurturing</span>
</div>
<div className="flex items-center justify-between">
<span className="text-purple-400 font-bold">ab ‚Ç¨800 / Monat</span>
<span className="text-slate-500 text-xs">B2B</span>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-teal-500/30 transition-all reveal-on-scroll group" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 rounded-xl bg-teal-600/20 text-teal-400 flex items-center justify-center mb-6 text-2xl">‚öôÔ∏è</div>
<h3 className="text-xl font-semibold text-white mb-2">Mikro-Apps f√ºr Ihr Team</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-4">Kleine, hochspezialisierte Tools die genau einen Prozess digitalisieren ‚Äî ohne gro√ües IT-Projekt. Fertig in 3‚Äì5 Tagen.</p>
<div className="space-y-1.5 mb-5">
<div className="flex items-center gap-2 text-xs text-slate-400">
<iconify-icon className="text-teal-400 flex-shrink-0" icon="solar:hammer-linear" width="14"></iconify-icon>
<span>Handwerk: Auftragserfassung + Angebotskalkulator</span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-400">
<iconify-icon className="text-teal-400 flex-shrink-0" icon="solar:documents-linear" width="14"></iconify-icon>
<span>Kanzleien: Mandantenportal + Belegeupload</span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-400">
<iconify-icon className="text-teal-400 flex-shrink-0" icon="solar:buildings-2-linear" width="14"></iconify-icon>
<span>Hausverwaltung: M√§ngelmelder + Eigent√ºmer-Dashboard</span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-400">
<iconify-icon className="text-teal-400 flex-shrink-0" icon="solar:shield-check-linear" width="14"></iconify-icon>
<span>Sicherheitstechnik: Wartungsprotokoll + Anlagen-Register</span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-400">
<iconify-icon className="text-teal-400 flex-shrink-0" icon="solar:users-group-two-rounded-linear" width="14"></iconify-icon>
<span>Personalvermittlung: Bewerber-Tracking + Kunden-Portal</span>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-teal-400 font-bold">ab ‚Ç¨149 / Monat</span>
<a className="text-teal-400 text-xs font-semibold hover:text-teal-300 transition-colors flex items-center gap-1" href="/mikro-apps/">
                  Mehr erfahren <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</a>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-brand-500/30 transition-all reveal-on-scroll group">
<div className="w-12 h-12 rounded-xl bg-rose-600/20 text-rose-400 flex items-center justify-center mb-6 text-2xl">üåê</div>
<h3 className="text-xl font-semibold text-white mb-2">Digitale Pr√§senz</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-4">Moderne, schnelle Website mit KI-optimierten Inhalten ‚Äî in 5 Tagen fertig. F√ºr Betriebe die keine Zeit f√ºr DIY-Bauk√§sten haben und einfach m√∂chten, dass es jemand erledigt.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-full">Website in 5 Tagen</span>
<span className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-full">SEO-Content</span>
<span className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-full">Google-optimiert</span>
<span className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-full">Kein Technikstress</span>
</div>
<div className="flex items-center justify-between">
<span className="text-rose-400 font-bold">ab ‚Ç¨1.500 einmalig</span>
<a className="text-rose-400 text-xs font-semibold hover:text-rose-300 transition-colors flex items-center gap-1" href="/mikro-apps/">
                  Mehr erfahren <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</a>
</div>
</div>

<div className="bg-brand-600 rounded-3xl p-8 flex flex-col justify-between reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div>
<h3 className="text-xl font-bold text-white mb-3">Nicht sicher welcher Stack passt?</h3>
<p className="text-brand-200 text-sm leading-relaxed mb-6">20 Minuten Gespr√§ch ‚Äî wir zeigen Ihnen genau welche Automatisierung in Ihrer Branche den h√∂chsten ROI bringt.</p>
</div>
<a className="block w-full py-3 bg-white text-brand-600 rounded-full font-bold text-sm text-center hover:bg-brand-50 transition-colors" href="#contact">
                Kostenlose Beratung ‚Üí
              </a>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-900 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(124,58,237,0.15),transparent_60%)]"></div>
<div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
<div className="flex flex-col md:flex-row items-center justify-between gap-8">
<div>
<div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-widest">‚è± 2 Minuten ¬∑ Kein Filter</div>
<h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Wie viel Ihrer Zeit steckt noch<br className="hidden md:block"/> in Ihrem Business?</h2>
<p className="text-slate-400 text-base max-w-lg leading-relaxed">E-Mails, Aktenpflege, Terminkoordination, Nachverfolgung, Belege ‚Äî machen Sie den Selbsttest. Die meisten untersch√§tzen ihren eigenen Overhead um Faktor 3.</p>
</div>
<a className="flex-shrink-0 inline-flex items-center gap-3 bg-violet-600 hover:bg-violet-500 text-white font-bold text-base px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5" href="game.html">
              Selbsttest starten ‚ñ∂
            </a>
</div>
</div>
</section>
<section className="py-24 bg-slate-50 border-t border-slate-100 relative overflow-hidden" id="comparison">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">
              Der Unterschied ist messbar.
            </h2>
<p className="text-slate-600 text-lg leading-relaxed">
              Was passiert t√§glich ohne KI-Telefonie ‚Äî und was √§ndert sich.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
<div className="bg-slate-800 rounded-3xl p-8 md:p-10 shadow-lg reveal-on-scroll">
<div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-700">
<span className="w-3 h-3 rounded-full bg-red-500"></span>
<h3 className="text-xl font-semibold text-white">Ohne KI Agent</h3>
</div>
<ul className="space-y-6">
<li className="flex items-start gap-4 text-slate-300">
<iconify-icon className="text-red-500 mt-0.5 flex-shrink-0" icon="lucide:x" width="20"></iconify-icon>
<span className="leading-relaxed">
                    Anruf klingelt ‚Äî Techniker auf Baustelle, niemand geht ran
                  </span>
</li>
<li className="flex items-start gap-4 text-slate-300">
<iconify-icon className="text-red-500 mt-0.5 flex-shrink-0" icon="lucide:x" width="20"></iconify-icon>
<span className="leading-relaxed">
                    Kunde wartet 10 Sekunden, legt auf, ruft Konkurrenz an
                  </span>
</li>
<li className="flex items-start gap-4 text-slate-300">
<iconify-icon className="text-red-500 mt-0.5 flex-shrink-0" icon="lucide:x" width="20"></iconify-icon>
<span className="leading-relaxed">
                    Voicemail: 70% hinterlassen keine Nachricht
                  </span>
</li>
<li className="flex items-start gap-4 text-slate-300">
<iconify-icon className="text-red-500 mt-0.5 flex-shrink-0" icon="lucide:x" width="20"></iconify-icon>
<span className="leading-relaxed">
                    Monteur wird mitten im Einsatz unterbrochen
                  </span>
</li>
<li className="flex items-start gap-4 text-slate-300">
<iconify-icon className="text-red-500 mt-0.5 flex-shrink-0" icon="lucide:x" width="20"></iconify-icon>
<span className="leading-relaxed">
                    Kein √úberblick: Wer hat angerufen? Was wollten sie?
                  </span>
</li>
</ul>
</div>
<div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border-2 border-brand-500 reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-100">
<span className="w-3 h-3 rounded-full bg-green-500"></span>
<h3 className="text-xl font-semibold text-slate-900">
                  Mit KI Agent
                </h3>
</div>
<ul className="space-y-6">
<li className="flex items-start gap-4 text-slate-700">
<iconify-icon className="text-green-500 mt-0.5 flex-shrink-0" icon="lucide:check" width="20"></iconify-icon>
<span className="leading-relaxed font-medium">
                    Agent nimmt in unter 1 Sekunde ab ‚Äî 24/7
                  </span>
</li>
<li className="flex items-start gap-4 text-slate-700">
<iconify-icon className="text-green-500 mt-0.5 flex-shrink-0" icon="lucide:check" width="20"></iconify-icon>
<span className="leading-relaxed font-medium">
                    Kunde wird qualifiziert, Termin direkt gebucht
                  </span>
</li>
<li className="flex items-start gap-4 text-slate-700">
<iconify-icon className="text-green-500 mt-0.5 flex-shrink-0" icon="lucide:check" width="20"></iconify-icon>
<span className="leading-relaxed font-medium">
                    Kein verpasster Auftrag ‚Äî auch nachts und am Wochenende
                  </span>
</li>
<li className="flex items-start gap-4 text-slate-700">
<iconify-icon className="text-green-500 mt-0.5 flex-shrink-0" icon="lucide:check" width="20"></iconify-icon>
<span className="leading-relaxed font-medium">
                    Monteur bekommt strukturierte Zusammenfassung per WhatsApp
                  </span>
</li>
<li className="flex items-start gap-4 text-slate-700">
<iconify-icon className="text-green-500 mt-0.5 flex-shrink-0" icon="lucide:check" width="20"></iconify-icon>
<span className="leading-relaxed font-medium">
                    Monatliches Dashboard: alle Anrufe, Themen, Conversion
                  </span>
</li>
</ul>
</div>
</div>
<div className="text-center max-w-3xl mx-auto reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-4 leading-tight">
              √ò 8 verpasste Anrufe/Tag √ó ‚Ç¨200 Auftragswert √ó 22 Werktage =
              <br className="hidden md:block"/>
<span className="text-brand-600">
                ‚Ç¨35.200 entgangener Umsatz pro Monat
              </span>
</div>
<p className="text-sm text-slate-500">
              Hochrechnung auf Basis typischer Betriebsdaten ‚Äî
              Schl√ºsseldienst-Segment, 30 Werktage/Monat.
            </p>
</div>
</div>
</section>
<section className="py-24 bg-slate-50 border-y border-slate-200" id="demo">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal-on-scroll">
<span className="text-brand-600 font-semibold tracking-wide uppercase text-xs mb-2 block">
                Audio Demo
              </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                Erleben Sie, wie menschlich KI-Agenten heute klingen.
              </h2>
<p className="text-slate-600 leading-relaxed">
                Am Ende Ihres kostenlosen Erstgespr√§chs rufen Sie live an ‚Äî kein
                Skript, kein Schnitt.
              </p>
</div>
<div className="reveal-on-scroll">
<div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 relative">
<div className="absolute top-4 right-4 flex gap-1 items-center">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-[10px] font-bold text-slate-400 uppercase">
                    Live
                  </span>
</div>
<div className="flex flex-col items-center justify-center py-12">
<div className="w-24 h-24 rounded-full bg-slate-900 flex items-center justify-center relative mb-8">
<div className="absolute inset-0 bg-brand-500 rounded-full opacity-20 animate-ping"></div>
<iconify-icon className="text-white" icon="solar:microphone-3-linear" width="32"></iconify-icon>
</div>
<div className="flex items-center gap-1 h-12 mb-4">
<div className="audio-bar" style={{animationDelay: '0.1s'}}></div>
<div className="audio-bar" style={{animationDelay: '0.3s'}}></div>
<div className="audio-bar" style={{animationDelay: '0.5s'}}></div>
<div className="audio-bar" style={{animationDelay: '0.2s'}}></div>
<div className="audio-bar" style={{animationDelay: '0.4s'}}></div>
<div className="audio-bar" style={{animationDelay: '0.1s'}}></div>
<div className="audio-bar" style={{animationDelay: '0.3s'}}></div>
<div className="audio-bar" style={{animationDelay: '0.5s'}}></div>
</div>
<div className="text-center">
<p className="text-sm font-medium text-slate-900">
                      Lisa (Support Agent)
                    </p>
<p className="text-xs text-slate-500">Spricht gerade...</p>
</div>
</div>
</div>
<div className="text-center mt-6 space-y-3">
<button className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-semibold hover:bg-slate-800 transition-all" onclick="document.querySelector('elevenlabs-convai')?.shadowRoot?.querySelector('button')?.click() || document.querySelector('#sw-chat-btn')?.click()">
<iconify-icon icon="solar:microphone-3-linear" width="16"></iconify-icon>
                  Lisa jetzt ansprechen
                </button>
<p className="text-xs text-slate-400">üìû Live-Demo im Erstgespr√§ch inklusive</p>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-white" id="industries">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="mb-16 text-center reveal-on-scroll">
<h2 className="text-3xl font-semibold text-slate-900">
              Ma√ügeschneidert f√ºr Ihre Branche
            </h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-brand-200 transition-all reveal-on-scroll">
<div className="h-40 bg-slate-50 rounded-xl mb-6 flex items-center justify-center overflow-hidden relative">
<svg className="relative z-10 transition-transform duration-[400ms] ease-out group-hover:rotate-[-15deg] origin-bottom-right" fill="none" height="56" stroke="#4f46e5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="56">
<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
</svg>
<div className="absolute inset-0 bg-grid-slate opacity-50"></div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Handwerk</h3>
<p className="text-sm text-slate-500 mb-4">
                Kein Anruf mehr verpasst ‚Äî auch wenn Sie auf dem Dach stehen. Ihr KI-Agent nimmt an, qualifiziert und bucht Termine. 24/7.
              </p>
<a className="text-sm font-semibold text-brand-600 flex items-center gap-1 hover:gap-2 transition-all" href="/branchen/handwerk/">
                Mehr erfahren
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="group rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-brand-200 transition-all reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="h-40 bg-slate-50 rounded-xl mb-6 flex items-center justify-center overflow-hidden relative">
<svg className="relative z-10 transition-transform duration-[400ms] ease-out group-hover:scale-110" fill="none" height="56" stroke="#4f46e5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="56">
<rect height="20" rx="2" width="16" x="4" y="2"></rect>
<line x1="8" x2="16" y1="6" y2="6"></line>
<line x1="16" x2="16" y1="14" y2="18"></line>
<line x1="12" x2="12" y1="14" y2="18"></line>
<line x1="8" x2="8" y1="14" y2="18"></line>
<line x1="8" x2="8.01" y1="10" y2="10"></line>
<line x1="12" x2="12.01" y1="10" y2="10"></line>
<line x1="16" x2="16.01" y1="10" y2="10"></line>
</svg>
<div className="absolute inset-0 bg-grid-slate opacity-50"></div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Steuerkanzleien</h3>
<p className="text-sm text-slate-500 mb-4">
                Entlasten Sie Ihr Sekretariat in der Steuersaison. Automatische Terminvergabe, Fristenerinnerungen und Mandanten-Onboarding.
              </p>
<a className="text-sm font-semibold text-brand-600 flex items-center gap-1 hover:gap-2 transition-all" href="/branchen/steuerberater/">
                Mehr erfahren
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="group rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-brand-200 transition-all reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="h-40 bg-slate-50 rounded-xl mb-6 flex items-center justify-center overflow-hidden relative">
<svg className="relative z-10 transition-transform duration-[400ms] ease-out group-hover:-translate-y-2" fill="none" height="56" stroke="#4f46e5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="56">
<path d="M3 21h18"></path>
<path d="M9 8h1"></path><path d="M9 12h1"></path><path d="M9 16h1"></path>
<path d="M14 8h1"></path><path d="M14 12h1"></path><path d="M14 16h1"></path>
<path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path>
</svg>
<div className="absolute inset-0 bg-grid-slate opacity-50"></div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Hausverwaltung</h3>
<p className="text-sm text-slate-500 mb-4">
                24/7 Notfall-Hotline f√ºr Mieter. St√∂rungsannahme, Handwerker-Koordination und Schadensaufnahme komplett automatisiert.
              </p>
<a className="text-sm font-semibold text-brand-600 flex items-center gap-1 hover:gap-2 transition-all" href="/branchen/hausverwaltung/">
                Mehr erfahren
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="group rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-brand-200 transition-all reveal-on-scroll">
<div className="h-40 bg-slate-50 rounded-xl mb-6 flex items-center justify-center overflow-hidden relative">
<svg className="relative z-10 transition-transform duration-[400ms] ease-out group-hover:scale-110" fill="none" height="56" stroke="#4f46e5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="56">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
<div className="absolute inset-0 bg-grid-slate opacity-50"></div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Sicherheitstechnik</h3>
<p className="text-sm text-slate-500 mb-4">
                Notfall-Hotline 24/7, automatische Ticket-Erstellung und Serviceanfragen-Routing ‚Äî auch nach Feierabend und am Wochenende.
              </p>
<a className="text-sm font-semibold text-brand-600 flex items-center gap-1 hover:gap-2 transition-all" href="/branchen/sicherheitstechnik/">
                Mehr erfahren
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="group rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-brand-200 transition-all reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="h-40 bg-slate-50 rounded-xl mb-6 flex items-center justify-center overflow-hidden relative">
<svg className="relative z-10 transition-transform duration-[400ms] ease-out group-hover:scale-110" fill="none" height="56" stroke="#4f46e5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="56">
<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
<div className="absolute inset-0 bg-grid-slate opacity-50"></div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Personalvermittlung</h3>
<p className="text-sm text-slate-500 mb-4">
                CV-Screening, Bewerber-Triage und Interview-Koordination vollautomatisch. Time-to-Hire halbieren ohne mehr Mitarbeiter.
              </p>
<a className="text-sm font-semibold text-brand-600 flex items-center gap-1 hover:gap-2 transition-all" href="/branchen/personalvermittlung/">
                Mehr erfahren
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="mt-10 text-center reveal-on-scroll">
<p className="text-sm text-slate-500 mb-4">Auch f√ºr weitere Branchen verf√ºgbar:</p>
<div className="flex flex-wrap justify-center gap-3">
<a className="px-4 py-2 bg-slate-100 text-slate-600 text-sm rounded-full hover:bg-slate-200 transition-colors" href="/branchen/handwerk/">SHK &amp; Heizung</a>
<a className="px-4 py-2 bg-slate-100 text-slate-600 text-sm rounded-full hover:bg-slate-200 transition-colors" href="/branchen/handwerk/">Elektro &amp; PV</a>
<a className="px-4 py-2 bg-slate-100 text-slate-600 text-sm rounded-full hover:bg-slate-200 transition-colors" href="/branchen/handwerk/">Schl√ºsseldienst</a>
<a className="px-4 py-2 bg-slate-100 text-slate-600 text-sm rounded-full hover:bg-slate-200 transition-colors" href="/branchen/bau/">Bau &amp; Projektentwicklung</a>
<a className="px-4 py-2 bg-slate-100 text-slate-600 text-sm rounded-full hover:bg-slate-200 transition-colors" href="/branchen/rechtsanwaelte/">Rechtsanw√§lte</a>
<a className="px-4 py-2 bg-slate-100 text-slate-600 text-sm rounded-full hover:bg-slate-200 transition-colors" href="#contact">Immobilienmakler</a>
<a className="px-4 py-2 bg-slate-100 text-slate-600 text-sm rounded-full hover:bg-slate-200 transition-colors" href="#contact">Medizin &amp; Praxis</a>
<a className="px-4 py-2 bg-slate-100 text-slate-600 text-sm rounded-full hover:bg-slate-200 transition-colors" href="#contact">Kfz-Werkstatt</a>
</div>
</div>
</div>
</section>
<section className="py-24 bg-slate-50 border-t border-slate-200" id="enterprise">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
<span className="text-brand-600 font-semibold tracking-wide uppercase text-xs mb-2 block">
              ENTERPRISE &amp; CALL CENTER
            </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              Ersetzen Sie Ihr Call Center ‚Äî nicht nur Ihre Telefonanlage.
            </h2>
<p className="text-slate-600 text-lg leading-relaxed">
              F√ºr Unternehmen mit h√∂herem Volumen bieten wir ma√ügeschneiderte
              Systeme die tief in Ihre bestehenden Prozesse integrieren.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 reveal-on-scroll">
<div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-brand-200 hover:shadow-lg transition-all flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl mb-6">
                üìû
              </div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">
                Ausgehende Kampagnen
              </h3>
<p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">
                Ihr Agent ruft t√§glich tausende Leads an, qualifiziert sie und
                aktualisiert Ihr CRM automatisch.
              </p>
<div className="px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-semibold rounded-md border border-slate-200 self-start">
                Ab 500 Calls/Tag
              </div>
</div>
<div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-brand-200 hover:shadow-lg transition-all flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl mb-6">
                üîÑ
              </div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">
                Pipeline Reaktivierung
              </h3>
<p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">
                Kunden die irgendwo feststecken werden automatisch kontaktiert
                und zum n√§chsten Schritt gef√ºhrt.
              </p>
<div className="px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-semibold rounded-md border border-slate-200 self-start">
                CRM-integriert
              </div>
</div>
<div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-brand-200 hover:shadow-lg transition-all flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl mb-6">
                üè¢
              </div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">
                Call Center Abl√∂sung
              </h3>
<p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">
                Ersetzen Sie 10‚Äì50 Mitarbeiter durch ein KI-System das 24/7
                arbeitet, niemals krank wird und jeden Call dokumentiert.
              </p>
<div className="px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-semibold rounded-md border border-slate-200 self-start">
                ROI ab Monat 1
              </div>
</div>
<div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-brand-200 hover:shadow-lg transition-all flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl mb-6">
                ‚ö°
              </div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">
                Anruf-Triage System
              </h3>
<p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">
                Eingehende Anrufe werden nach Dringlichkeit sortiert. Ihr Team
                bearbeitet nur was wirklich wichtig ist.
              </p>
<div className="px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-semibold rounded-md border border-slate-200 self-start">
                Messbare Zeitersparnis
              </div>
</div>
</div>
<div className="bg-slate-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 reveal-on-scroll">
<div className="text-center md:text-left">
<h3 className="text-2xl font-semibold text-white max-w-xl">
                Sie verwalten ein Call Center oder haben √ºber 500 Anrufe/Monat?
              </h3>
</div>
<div className="text-center flex flex-col items-center md:items-end w-full md:w-auto shrink-0">
<a className="w-full md:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-full font-semibold transition-all shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2 mb-4" href="#contact">
                Individuelle Beratung anfragen
                <iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</a>
<p className="text-sm font-medium text-slate-400">
                Kostenlos ¬∑ Unverbindlich ¬∑ Antwort innerhalb von 24h
              </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200" id="handover">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
<span className="text-brand-600 font-semibold tracking-wide uppercase text-xs mb-2 block">
              SYSTEM HANDOVER
            </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              Wir bauen ‚Äî Sie √ºbernehmen.
            </h2>
<p className="text-slate-600 text-lg leading-relaxed">
              Kein Monatsabo. Kein Vendor-Lock-in. Wir entwickeln Ihr komplettes
              KI-Betriebssystem ‚Äî und √ºbergeben es vollst√§ndig in Ihre H√§nde.
            </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
<div className="space-y-6 reveal-on-scroll">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-xl shrink-0">üîß</div>
<div>
<h3 className="font-semibold text-slate-900 mb-1">Vollst√§ndige √úbergabe</h3>
<p className="text-slate-600 text-sm leading-relaxed">Alle Workflows, Integrationen und Konfigurationen geh√∂ren Ihnen ‚Äî inklusive Source Code und Zugangsdaten.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-xl shrink-0">üìñ</div>
<div>
<h3 className="font-semibold text-slate-900 mb-1">Dokumentation &amp; Training</h3>
<p className="text-slate-600 text-sm leading-relaxed">Schritt-f√ºr-Schritt-Dokumentation und pers√∂nliches Training f√ºr Ihr Team ‚Äî damit Sie unabh√§ngig bleiben.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-xl shrink-0">üõ°Ô∏è</div>
<div>
<h3 className="font-semibold text-slate-900 mb-1">90 Tage Nachbetreuung</h3>
<p className="text-slate-600 text-sm leading-relaxed">Drei Monate direkter Draht zu uns ‚Äî f√ºr Anpassungen, Fragen und Optimierungen nach dem Go-live.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-xl shrink-0">‚öôÔ∏è</div>
<div>
<h3 className="font-semibold text-slate-900 mb-1">Battle-tested Systeme</h3>
<p className="text-slate-600 text-sm leading-relaxed">Kein Experiment ‚Äî dieselben Systeme die wir selbst t√§glich im Betrieb nutzen. Erprobt, dokumentiert, skalierbar.</p>
</div>
</div>
</div>
<div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 reveal-on-scroll">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">Was √ºbergeben wird</p>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-brand-600 shrink-0" icon="lucide:check" width="16"></iconify-icon>
                  KI-Telefonagent (eingehend + ausgehend)
                </div>
<div className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-brand-600 shrink-0" icon="lucide:check" width="16"></iconify-icon>
                  Sales Pipeline &amp; CRM-Automatisierung
                </div>
<div className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-brand-600 shrink-0" icon="lucide:check" width="16"></iconify-icon>
                  Lead-Qualifizierung &amp; Follow-up Sequenzen
                </div>
<div className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-brand-600 shrink-0" icon="lucide:check" width="16"></iconify-icon>
                  T√§glicher Intelligence Brief (KI-Reporting)
                </div>
<div className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-brand-600 shrink-0" icon="lucide:check" width="16"></iconify-icon>
                  Markt- &amp; Wettbewerbs-Research Automation
                </div>
<div className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-brand-600 shrink-0" icon="lucide:check" width="16"></iconify-icon>
                  DSGVO-konform ¬∑ Server in Deutschland
                </div>
</div>
<div className="border-t border-slate-200 pt-6">
<p className="text-xs text-slate-500 mb-1">Einmalige Investition ab</p>
<p className="text-3xl font-semibold text-slate-900 mb-4">‚Ç¨9.500</p>
<a className="w-full px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-semibold transition-all text-sm flex items-center justify-center gap-2" href="#contact">
                  Handover besprechen
                  <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
<p className="text-xs text-slate-400 text-center mt-3">Kostenlos ¬∑ Unverbindlich ¬∑ Individuelle Konfiguration</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-200 bg-white" id="case-study">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
<span className="text-brand-600 font-semibold tracking-wide uppercase text-xs mb-2 block">
              PRAXISBEISPIEL
            </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Beispielrechnung: Schl√ºsseldienst Berlin
            </h2>
<p className="text-sm text-slate-500 italic mt-3">
              Illustratives Beispiel auf Basis typischer Betriebsdaten ‚Äî keine echte Kundenstory
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
<div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm reveal-on-scroll">
<h3 className="text-xl font-semibold text-slate-900 mb-4">
                Die Ausgangssituation
              </h3>
<p className="text-slate-600 mb-8 leading-relaxed">
                Ein Berliner Schl√ºsseldienst-Betrieb mit 3 Technikern verlor
                t√§glich 6‚Äì8 Anrufe. Besonders nachts und am Wochenende ‚Äî genau
                dann wenn Kunden dringend Hilfe brauchen. Kein R√ºckruf-Standard,
                kein CRM, keine Struktur.
              </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-700">
<span className="text-base leading-tight mt-0.5">üî¥</span>
<span className="font-medium leading-relaxed">8 verpasste Anrufe/Tag</span>
</li>
<li className="flex items-start gap-3 text-slate-700">
<span className="text-base leading-tight mt-0.5">üî¥</span>
<span className="font-medium leading-relaxed">0 Reaktion au√üerhalb √ñffnungszeiten</span>
</li>
<li className="flex items-start gap-3 text-slate-700">
<span className="text-base leading-tight mt-0.5">üî¥</span>
<span className="font-medium leading-relaxed">Monteure st√§ndig unterbrochen</span>
</li>
</ul>
</div>
<div className="bg-white rounded-3xl p-8 md:p-10 border-2 border-brand-100 shadow-sm reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<h3 className="text-xl font-semibold text-slate-900 mb-4">
                Nach 1 Woche mit Stimmwerk
              </h3>
<p className="text-slate-600 mb-8 leading-relaxed">
                Der Agent wurde in 5 Tagen konfiguriert und geht seitdem 24/7
                ans Telefon. Er nennt Preise, klassifiziert Notf√§lle und sendet
                dem Dispatcher eine strukturierte WhatsApp-Zusammenfassung.
              </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-700">
<span className="text-base leading-tight mt-0.5">üü¢</span>
<span className="font-medium leading-relaxed">+11 zus√§tzliche Auftr√§ge im ersten Monat</span>
</li>
<li className="flex items-start gap-3 text-slate-700">
<span className="text-base leading-tight mt-0.5">üü¢</span>
<span className="font-medium leading-relaxed">100% Erreichbarkeit ‚Äî auch nachts</span>
</li>
<li className="flex items-start gap-3 text-slate-700">
<span className="text-base leading-tight mt-0.5">üü¢</span>
<span className="font-medium leading-relaxed">ROI nach 3 Wochen erreicht</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-12 text-center reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<p className="text-xl font-medium text-slate-900 mb-8">
              Ihr Betrieb hat √§hnliche Herausforderungen?
            </p>
<a className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 cta-glow" href="#contact">
              Kostenloses Erstgespr√§ch buchen
            </a>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<p className="text-center text-xs font-semibold text-slate-500 uppercase tracking-widest mb-12">Warum KI-Telefonie im Mittelstand funktioniert</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white/5 rounded-2xl p-7 border border-white/10 reveal-on-scroll text-center">
<div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mx-auto mb-5">
<iconify-icon className="text-indigo-400" icon="solar:shield-check-bold" width="28"></iconify-icon>
</div>
<h3 className="text-white font-semibold text-lg mb-2">DSGVO-konform</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                Alle Daten auf Hetzner-Servern in Deutschland. Keine US-Cloud, keine Drittanbieter-Weitergabe. Ende-zu-Ende verschl√ºsselt.
              </p>
</div>
<div className="bg-white/5 rounded-2xl p-7 border border-white/10 reveal-on-scroll text-center" style={{transitionDelay: '100ms'}}>
<div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mx-auto mb-5">
<iconify-icon className="text-indigo-400" icon="solar:rocket-2-bold" width="28"></iconify-icon>
</div>
<h3 className="text-white font-semibold text-lg mb-2">In 1 Woche live</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                Von der Erstberatung bis zum fertigen KI-Agenten. Kein monatelanges Projekt ‚Äî Ihr Agent telefoniert in 5-7 Werktagen.
              </p>
</div>
<div className="bg-white/5 rounded-2xl p-7 border border-white/10 reveal-on-scroll text-center" style={{transitionDelay: '200ms'}}>
<div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mx-auto mb-5">
<iconify-icon className="text-indigo-400" icon="solar:hand-money-bold" width="28"></iconify-icon>
</div>
<h3 className="text-white font-semibold text-lg mb-2">Monatlich k√ºndbar</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                Kein Jahresvertrag, keine versteckten Kosten. Wenn der Agent sich nicht rechnet, k√ºndigen Sie einfach zum Monatsende.
              </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
<span className="text-brand-600 font-semibold tracking-wide uppercase text-xs mb-2 block">So starten Sie</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              In 4 Schritten zum KI-Agenten
            </h2>
<p className="text-slate-600 text-lg">Von der Erstberatung bis zum fertigen Agenten ‚Äî in 5-7 Werktagen.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="text-center reveal-on-scroll">
<div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mx-auto mb-5">
<span className="text-2xl font-bold text-brand-600">1</span>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Erstgespr√§ch</h3>
<p className="text-sm text-slate-500">15 Minuten Bedarfsanalyse. Wir verstehen Ihre Branche, Ihre Anrufvolumen und Ihre Ziele.</p>
</div>
<div className="text-center reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mx-auto mb-5">
<span className="text-2xl font-bold text-brand-600">2</span>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Konfiguration</h3>
<p className="text-sm text-slate-500">Wir trainieren den Agenten auf Ihr Unternehmen ‚Äî Anrufgr√ºnde, √ñffnungszeiten, FAQ, Tonalit√§t.</p>
</div>
<div className="text-center reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mx-auto mb-5">
<span className="text-2xl font-bold text-brand-600">3</span>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Testphase</h3>
<p className="text-sm text-slate-500">1 Woche Live-Test mit echten Anrufen. Sie h√∂ren mit, wir optimieren gemeinsam.</p>
</div>
<div className="text-center reveal-on-scroll" style={{transitionDelay: '300ms'}}>
<div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mx-auto mb-5">
<span className="text-2xl font-bold text-brand-600">4</span>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Go-Live</h3>
<p className="text-sm text-slate-500">Ihr Agent √ºbernimmt. Laufende Optimierung und pers√∂nlicher Support inklusive.</p>
</div>
</div>
<div className="text-center mt-12 reveal-on-scroll">
<button className="px-8 py-3.5 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 cta-glow inline-flex items-center gap-2" onclick="Calendly.initPopupWidget({url:'https://calendly.com/stimmwerk-solutions-info/demo'});return false;">
              Kostenloses Erstgespr√§ch buchen
              <iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden" id="pricing">
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              Transparente Preise. Kein Risiko.
            </h2>
<p className="text-slate-600 text-lg leading-relaxed">
              Starten Sie mit einem Stack ‚Äî oder kombinieren Sie mehrere.
              Sie zahlen erst wenn der Agent live geht und f√ºr Sie arbeitet.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 reveal-on-scroll">

<div className="bg-white rounded-3xl p-8 border-2 border-brand-600 shadow-lg flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 px-4 py-1.5 bg-brand-600 rounded-bl-2xl text-white text-xs font-semibold">
                Einstieg
              </div>
<div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5 text-xl">üìû</div>
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">KI-Kommunikation</p>
<div className="text-3xl font-semibold tracking-tight text-slate-900 mb-1">
                ab ‚Ç¨199<span className="text-base text-slate-500 font-normal"> / Mo</span>
</div>
<p className="text-slate-400 text-xs mb-5">+ ab ‚Ç¨1.500 einmalige Setup-Geb√ºhr</p>
<ul className="space-y-2 mb-8 flex-1">
<li className="flex items-start gap-2 text-slate-600 text-sm">
<iconify-icon className="text-brand-600 mt-0.5 flex-shrink-0" icon="lucide:check" width="15"></iconify-icon>
                  Voice Agent 24/7 (Anrufe, Terminbuchung)
                </li>
<li className="flex items-start gap-2 text-slate-600 text-sm">
<iconify-icon className="text-brand-600 mt-0.5 flex-shrink-0" icon="lucide:check" width="15"></iconify-icon>
                  Email-Autoresponder f√ºr Standardanfragen
                </li>
<li className="flex items-start gap-2 text-slate-600 text-sm">
<iconify-icon className="text-brand-600 mt-0.5 flex-shrink-0" icon="lucide:check" width="15"></iconify-icon>
                  Fristenerinnerungen per SMS / E-Mail
                </li>
<li className="flex items-start gap-2 text-slate-600 text-sm">
<iconify-icon className="text-brand-600 mt-0.5 flex-shrink-0" icon="lucide:check" width="15"></iconify-icon>
                  DSGVO-konform ¬∑ Server Deutschland
                </li>
</ul>
<a className="w-full px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white rounded-full font-semibold transition-all text-sm text-center" href="#contact">
                Demo anfragen
              </a>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
<div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5 text-xl">‚ö°</div>
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Workflow-Automatisierung</p>
<div className="text-3xl font-semibold tracking-tight text-slate-900 mb-1">
                ab ‚Ç¨490<span className="text-base text-slate-500 font-normal"> / Mo</span>
</div>
<p className="text-slate-400 text-xs mb-5">+ ab ‚Ç¨1.800 einmalige Setup-Geb√ºhr</p>
<ul className="space-y-2 mb-8 flex-1">
<li className="flex items-start gap-2 text-slate-600 text-sm">
<iconify-icon className="text-indigo-600 mt-0.5 flex-shrink-0" icon="lucide:check" width="15"></iconify-icon>
                  1‚Äì6 automatisierte Workflows (n8n)
                </li>
<li className="flex items-start gap-2 text-slate-600 text-sm">
<iconify-icon className="text-indigo-600 mt-0.5 flex-shrink-0" icon="lucide:check" width="15"></iconify-icon>
                  CRM-Integration, Rechnungs-Routing
                </li>
<li className="flex items-start gap-2 text-slate-600 text-sm">
<iconify-icon className="text-indigo-600 mt-0.5 flex-shrink-0" icon="lucide:check" width="15"></iconify-icon>
                  Beh√∂rden-Follow-ups, Ticket-Erstellung
                </li>
<li className="flex items-start gap-2 text-slate-600 text-sm">
<iconify-icon className="text-indigo-600 mt-0.5 flex-shrink-0" icon="lucide:check" width="15"></iconify-icon>
                  Stimmwerk betreibt &amp; wartet
                </li>
</ul>
<a className="w-full px-6 py-3 border border-slate-200 text-slate-700 rounded-full font-semibold hover:border-slate-900 hover:text-slate-900 transition-all text-sm text-center" href="#contact">
                Demo anfragen
              </a>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
<div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5 text-xl">üß†</div>
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">KI-Wissensassistent</p>
<div className="text-3xl font-semibold tracking-tight text-slate-900 mb-1">
                ab ‚Ç¨490<span className="text-base text-slate-500 font-normal"> / Mo</span>
</div>
<p className="text-slate-400 text-xs mb-5">+ ab ‚Ç¨1.990 einmalige Setup-Geb√ºhr</p>
<ul className="space-y-2 mb-8 flex-1">
<li className="flex items-start gap-2 text-slate-600 text-sm">
<iconify-icon className="text-amber-600 mt-0.5 flex-shrink-0" icon="lucide:check" width="15"></iconify-icon>
                  RAG-Wissensbasis aus Ihren Dokumenten
                </li>
<li className="flex items-start gap-2 text-slate-600 text-sm">
<iconify-icon className="text-amber-600 mt-0.5 flex-shrink-0" icon="lucide:check" width="15"></iconify-icon>
                  Mitarbeiter-Chatbot f√ºr interne FAQs
                </li>
<li className="flex items-start gap-2 text-slate-600 text-sm">
<iconify-icon className="text-amber-600 mt-0.5 flex-shrink-0" icon="lucide:check" width="15"></iconify-icon>
                  Mandanten- / Kunden-Chatbot auf Website
                </li>
<li className="flex items-start gap-2 text-slate-600 text-sm">
<iconify-icon className="text-amber-600 mt-0.5 flex-shrink-0" icon="lucide:check" width="15"></iconify-icon>
                  Quellen-genaue Antworten, DSGVO-konform
                </li>
</ul>
<a className="w-full px-6 py-3 border border-slate-200 text-slate-700 rounded-full font-semibold hover:border-slate-900 hover:text-slate-900 transition-all text-sm text-center" href="#contact">
                Demo anfragen
              </a>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
<div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-5 text-xl">üë•</div>
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">KI-Recruiting-Pipeline</p>
<div className="text-3xl font-semibold tracking-tight text-slate-900 mb-1">
                ab ‚Ç¨490<span className="text-base text-slate-500 font-normal"> / Mo</span>
</div>
<p className="text-slate-400 text-xs mb-5">+ ab ‚Ç¨2.000 einmalige Setup-Geb√ºhr</p>
<ul className="space-y-2 mb-8 flex-1">
<li className="flex items-start gap-2 text-slate-600 text-sm">
<iconify-icon className="text-green-600 mt-0.5 flex-shrink-0" icon="lucide:check" width="15"></iconify-icon>
                  CV-Screening &amp; Bewerber-Scoring (KI)
                </li>
<li className="flex items-start gap-2 text-slate-600 text-sm">
<iconify-icon className="text-green-600 mt-0.5 flex-shrink-0" icon="lucide:check" width="15"></iconify-icon>
                  Automatische Absagen &amp; Einladungen
                </li>
<li className="flex items-start gap-2 text-slate-600 text-sm">
<iconify-icon className="text-green-600 mt-0.5 flex-shrink-0" icon="lucide:check" width="15"></iconify-icon>
                  Interview-Koordination vollautomatisch
                </li>
<li className="flex items-start gap-2 text-slate-600 text-sm">
<iconify-icon className="text-green-600 mt-0.5 flex-shrink-0" icon="lucide:check" width="15"></iconify-icon>
                  Time-to-Hire um bis zu 60 % senken
                </li>
</ul>
<a className="w-full px-6 py-3 border border-slate-200 text-slate-700 rounded-full font-semibold hover:border-slate-900 hover:text-slate-900 transition-all text-sm text-center" href="#contact">
                Demo anfragen
              </a>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
<div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5 text-xl">üöÄ</div>
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">KI-Marketing-Automation</p>
<div className="text-3xl font-semibold tracking-tight text-slate-900 mb-1">
                ab ‚Ç¨800<span className="text-base text-slate-500 font-normal"> / Mo</span>
</div>
<p className="text-slate-400 text-xs mb-5">+ ab ‚Ç¨2.000 einmalige Setup-Geb√ºhr</p>
<ul className="space-y-2 mb-8 flex-1">
<li className="flex items-start gap-2 text-slate-600 text-sm">
<iconify-icon className="text-purple-600 mt-0.5 flex-shrink-0" icon="lucide:check" width="15"></iconify-icon>
                  Cold Email vollautomatisch (personalisiert)
                </li>
<li className="flex items-start gap-2 text-slate-600 text-sm">
<iconify-icon className="text-purple-600 mt-0.5 flex-shrink-0" icon="lucide:check" width="15"></iconify-icon>
                  Reply-Handling &amp; CRM-√úbergabe
                </li>
<li className="flex items-start gap-2 text-slate-600 text-sm">
<iconify-icon className="text-purple-600 mt-0.5 flex-shrink-0" icon="lucide:check" width="15"></iconify-icon>
                  Lead Nurturing &amp; Follow-up-Sequenzen
                </li>
<li className="flex items-start gap-2 text-slate-600 text-sm">
<iconify-icon className="text-purple-600 mt-0.5 flex-shrink-0" icon="lucide:check" width="15"></iconify-icon>
                  Messbar ab Woche 1 (Open Rate, Replies)
                </li>
</ul>
<a className="w-full px-6 py-3 border border-slate-200 text-slate-700 rounded-full font-semibold hover:border-slate-900 hover:text-slate-900 transition-all text-sm text-center" href="#contact">
                Demo anfragen
              </a>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
<div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5 text-xl">‚öôÔ∏è</div>
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Mikro-Apps &amp; Digitale Pr√§senz</p>
<div className="text-3xl font-semibold tracking-tight text-slate-900 mb-1">
                ab ‚Ç¨149<span className="text-base text-slate-500 font-normal"> / Mo</span>
</div>
<p className="text-slate-400 text-xs mb-5">Website ab ‚Ç¨1.500 einmalig ¬∑ Apps ab ‚Ç¨800 Setup</p>
<ul className="space-y-2 mb-8 flex-1">
<li className="flex items-start gap-2 text-slate-600 text-sm">
<iconify-icon className="text-teal-600 mt-0.5 flex-shrink-0" icon="lucide:check" width="15"></iconify-icon>
                  Mikro-Apps f√ºr einzelne Prozesse (3‚Äì5 Tage)
                </li>
<li className="flex items-start gap-2 text-slate-600 text-sm">
<iconify-icon className="text-teal-600 mt-0.5 flex-shrink-0" icon="lucide:check" width="15"></iconify-icon>
                  Auftragserfassung, M√§ngelmelder, Portale
                </li>
<li className="flex items-start gap-2 text-slate-600 text-sm">
<iconify-icon className="text-teal-600 mt-0.5 flex-shrink-0" icon="lucide:check" width="15"></iconify-icon>
                  Moderne Website mit KI-Content in 5 Tagen
                </li>
<li className="flex items-start gap-2 text-slate-600 text-sm">
<iconify-icon className="text-teal-600 mt-0.5 flex-shrink-0" icon="lucide:check" width="15"></iconify-icon>
                  SEO-optimiert, Google-ready
                </li>
</ul>
<a className="w-full px-6 py-3 border border-slate-200 text-slate-700 rounded-full font-semibold hover:border-slate-900 hover:text-slate-900 transition-all text-sm text-center" href="#contact">
                Demo anfragen
              </a>
</div>
</div>

<div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-8 reveal-on-scroll">
<div className="flex-1">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">System Handover</p>
<div className="text-4xl font-semibold tracking-tight text-white mb-2">ab ‚Ç¨9.500 <span className="text-lg text-slate-400 font-normal">¬∑ Einmalig</span></div>
<p className="text-slate-400 text-sm mb-4">Kein Monatsabo. Kein Vendor-Lock-in. Vollst√§ndiges KI-System ‚Äî komplett in Ihren H√§nden.</p>
<div className="flex flex-wrap gap-3">
<span className="px-3 py-1 bg-white/10 text-slate-300 text-xs rounded-full">Alle Stacks kombinierbar</span>
<span className="px-3 py-1 bg-white/10 text-slate-300 text-xs rounded-full">Volle √úbergabe (Code + Zugangsdaten)</span>
<span className="px-3 py-1 bg-white/10 text-slate-300 text-xs rounded-full">Dokumentation &amp; Training</span>
<span className="px-3 py-1 bg-white/10 text-slate-300 text-xs rounded-full">90 Tage Nachbetreuung</span>
</div>
</div>
<a className="shrink-0 px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-100 transition-all text-sm flex items-center gap-2" href="#handover">
              Handover besprechen
              <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<p className="text-center text-slate-400 text-sm mt-8 reveal-on-scroll">
            Alle Preise zzgl. MwSt. ¬∑ Monatlich k√ºndbar (Abo-Tarife) ¬∑ Individuelle Konfiguration auf Anfrage
          </p>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200" id="roi">
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<div className="text-center mb-12 reveal-on-scroll">
<span className="text-brand-600 font-semibold tracking-wide uppercase text-xs mb-2 block">ROI RECHNER</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              Was kostet Sie ein verpasster Anruf?
            </h2>
<p className="text-slate-600 leading-relaxed">Berechnen Sie Ihr Einsparpotenzial in 30 Sekunden.</p>
</div>
<div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-200 reveal-on-scroll">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Verpasste Anrufe pro Tag</label>
<input className="w-full accent-indigo-600" id="roi-calls" max="30" min="1" type="range" value="6"/>
<div className="flex justify-between text-xs text-slate-400 mt-1"><span>1</span><span className="font-semibold text-slate-700" id="roi-calls-val">6</span><span>30</span></div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Durchschn. Auftragswert (‚Ç¨)</label>
<input className="w-full accent-indigo-600" id="roi-value" max="2000" min="50" step="50" type="range" value="350"/>
<div className="flex justify-between text-xs text-slate-400 mt-1"><span>‚Ç¨50</span><span className="font-semibold text-slate-700" id="roi-value-val">‚Ç¨350</span><span>‚Ç¨2.000</span></div>
</div>
</div>
<div className="bg-white rounded-2xl p-6 border border-slate-200 text-center mb-6">
<p className="text-slate-500 text-sm mb-1">Ihr monatlicher Umsatzverlust durch verpasste Anrufe</p>
<p className="text-5xl font-semibold text-slate-900 mb-2" id="roi-result">‚Ç¨63.000</p>
<p className="text-slate-400 text-xs">bei 30 Arbeitstagen/Monat ¬∑ <span className="text-brand-600 font-medium">Stimmwerk kostet Sie ab ‚Ç¨199/Mo</span></p>
</div>
<a className="w-full flex items-center justify-center gap-2 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all text-sm" href="#contact">
              Verluste jetzt stoppen
              <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</section>


<section className="py-24 bg-white border-t border-slate-200" id="wissen">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-14 reveal-on-scroll">
<span className="inline-block px-3 py-1 bg-violet-100 text-violet-700 text-sm font-semibold rounded-full mb-4">Wissen &amp; Praxis</span>
<h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">KI f√ºr den Mittelstand ‚Äî konkret erkl√§rt</h2>
<p className="text-lg text-slate-500 max-w-2xl mx-auto">Keine Buzzwords. Praxisnahe Artikel f√ºr Handwerker, Steuerberater und Verwalter.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-on-scroll">
<a className="group block bg-white border border-slate-200 rounded-2xl p-6 hover:border-violet-300 hover:shadow-lg transition-all duration-200" href="/wissen/ki-telefonassistent-steuerkanzlei/">
<span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-4">Steuerkanzlei</span>
<h3 className="text-lg font-semibold text-slate-900 group-hover:text-violet-700 transition-colors mb-2">KI-Telefonassistent f√ºr Steuerkanzleien</h3>
<p className="text-sm text-slate-500 leading-relaxed">Wie Kanzleien Mandantenanfragen automatisieren und Fristenmanagement entlasten.</p>
<span className="mt-4 inline-flex items-center text-violet-600 text-sm font-medium">Artikel lesen <span className="ml-1 group-hover:translate-x-1 transition-transform">‚Üí</span></span>
</a>
<a className="group block bg-white border border-slate-200 rounded-2xl p-6 hover:border-violet-300 hover:shadow-lg transition-all duration-200" href="/wissen/verpasste-anrufe-handwerk/">
<span className="inline-block px-2 py-0.5 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mb-4">Handwerk</span>
<h3 className="text-lg font-semibold text-slate-900 group-hover:text-violet-700 transition-colors mb-2">Verpasste Anrufe im Handwerk</h3>
<p className="text-sm text-slate-500 leading-relaxed">47 % aller Anrufe werden nicht entgegengenommen. Was das kostet ‚Äî und wie man es stoppt.</p>
<span className="mt-4 inline-flex items-center text-violet-600 text-sm font-medium">Artikel lesen <span className="ml-1 group-hover:translate-x-1 transition-transform">‚Üí</span></span>
</a>
<a className="group block bg-white border border-slate-200 rounded-2xl p-6 hover:border-violet-300 hover:shadow-lg transition-all duration-200" href="/wissen/ki-telefonagent-kosten/">
<span className="inline-block px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-4">Kosten &amp; ROI</span>
<h3 className="text-lg font-semibold text-slate-900 group-hover:text-violet-700 transition-colors mb-2">Was kostet ein KI-Telefonagent?</h3>
<p className="text-sm text-slate-500 leading-relaxed">Transparente Kosten√ºbersicht: Setup, laufende Kosten, Break-even ‚Äî mit konkreten Zahlen.</p>
<span className="mt-4 inline-flex items-center text-violet-600 text-sm font-medium">Artikel lesen <span className="ml-1 group-hover:translate-x-1 transition-transform">‚Üí</span></span>
</a>
<a className="group block bg-white border border-slate-200 rounded-2xl p-6 hover:border-violet-300 hover:shadow-lg transition-all duration-200" href="/wissen/erreichbarkeit-hausverwaltung/">
<span className="inline-block px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full mb-4">Hausverwaltung</span>
<h3 className="text-lg font-semibold text-slate-900 group-hover:text-violet-700 transition-colors mb-2">Erreichbarkeit in der Hausverwaltung</h3>
<p className="text-sm text-slate-500 leading-relaxed">Wie KI das Mieter-Erreichbarkeitsproblem l√∂st ‚Äî ohne mehr Personal.</p>
<span className="mt-4 inline-flex items-center text-violet-600 text-sm font-medium">Artikel lesen <span className="ml-1 group-hover:translate-x-1 transition-transform">‚Üí</span></span>
</a>
<a className="group block bg-white border border-slate-200 rounded-2xl p-6 hover:border-violet-300 hover:shadow-lg transition-all duration-200" href="/wissen/dsgvo-ki-telefonie/">
<span className="inline-block px-2 py-0.5 bg-red-100 text-red-700 text-xs font-semibold rounded-full mb-4">DSGVO &amp; Recht</span>
<h3 className="text-lg font-semibold text-slate-900 group-hover:text-violet-700 transition-colors mb-2">DSGVO und KI-Telefonie 2026</h3>
<p className="text-sm text-slate-500 leading-relaxed">Was Unternehmen bei KI-Telefonaten rechtlich beachten m√ºssen ‚Äî EU AI Act inklusive.</p>
<span className="mt-4 inline-flex items-center text-violet-600 text-sm font-medium">Artikel lesen <span className="ml-1 group-hover:translate-x-1 transition-transform">‚Üí</span></span>
</a>
<a className="group block bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-200" href="/wissen/ki-fuer-mittelstand-einstieg/">
<span className="inline-block px-2 py-0.5 bg-white/20 text-white text-xs font-semibold rounded-full mb-4">Einsteiger-Guide</span>
<h3 className="text-lg font-semibold text-white mb-2">KI f√ºr den Mittelstand ‚Äî der komplette Einstieg</h3>
<p className="text-sm text-white/80 leading-relaxed">Der Pillar-Artikel: Von der ersten Idee bis zum produktiven KI-Einsatz. 3.000+ W√∂rter.</p>
<span className="mt-4 inline-flex items-center text-white text-sm font-medium">Jetzt lesen <span className="ml-1">‚Üí</span></span>
</a>
</div>
<div className="text-center mt-10">
<a className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-xl hover:border-violet-400 hover:text-violet-700 transition-all duration-200" href="/wissen/">
              Alle Artikel ansehen
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="faq">
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<div className="text-center mb-12 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              H√§ufige Fragen
            </h2>
</div>
<div className="space-y-4 reveal-on-scroll" id="faq-list">
<details className="bg-white rounded-2xl border border-slate-200 overflow-hidden group">
<summary className="flex justify-between items-center px-6 py-5 cursor-pointer font-medium text-slate-900 list-none">
                Klingt der Agent nach einem Roboter?
                <iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="lucide:chevron-down" width="18"></iconify-icon>
</summary>
<div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">
                Nein. Wir nutzen ElevenLabs-Stimmtechnologie ‚Äî die nat√ºrlichste KI-Stimme auf dem Markt. Viele Anrufer merken keinen Unterschied zu einem echten Mitarbeiter.
              </div>
</details>
<details className="bg-white rounded-2xl border border-slate-200 overflow-hidden group">
<summary className="flex justify-between items-center px-6 py-5 cursor-pointer font-medium text-slate-900 list-none">
                Was passiert wenn der Agent eine Frage nicht beantworten kann?
                <iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="lucide:chevron-down" width="18"></iconify-icon>
</summary>
<div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">
                Der Agent erkennt seine Grenzen und leitet den Anrufer sicher weiter ‚Äî per R√ºckrufwunsch, SMS oder direkt an Ihr Team. Kein Anruf geht verloren.
              </div>
</details>
<details className="bg-white rounded-2xl border border-slate-200 overflow-hidden group">
<summary className="flex justify-between items-center px-6 py-5 cursor-pointer font-medium text-slate-900 list-none">
                Wie lange dauert der Setup?
                <iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="lucide:chevron-down" width="18"></iconify-icon>
</summary>
<div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">
                KI-Stacks (Voice Agent, Automatisierung, Wissensassistent etc.): 1 Woche. System Handover: 3‚Äì6 Wochen je nach Komplexit√§t. Wir halten Sie w√§hrend des gesamten Prozesses auf dem Laufenden.
              </div>
</details>
<details className="bg-white rounded-2xl border border-slate-200 overflow-hidden group">
<summary className="flex justify-between items-center px-6 py-5 cursor-pointer font-medium text-slate-900 list-none">
                Was bekomme ich beim System Handover genau?
                <iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="lucide:chevron-down" width="18"></iconify-icon>
</summary>
<div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">
                Sie erhalten alle Workflows, Integrationen, Zugangsdaten und den vollst√§ndigen Source Code. Dazu eine Schritt-f√ºr-Schritt-Dokumentation, pers√∂nliches Team-Training und 90 Tage direkten Support von uns. Nach der √úbergabe geh√∂rt alles Ihnen ‚Äî keine laufenden Geb√ºhren.
              </div>
</details>
<details className="bg-white rounded-2xl border border-slate-200 overflow-hidden group">
<summary className="flex justify-between items-center px-6 py-5 cursor-pointer font-medium text-slate-900 list-none">
                Kann ich jederzeit k√ºndigen?
                <iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="lucide:chevron-down" width="18"></iconify-icon>
</summary>
<div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">
                Alle Abo-Tarife sind monatlich k√ºndbar, keine Mindestlaufzeit. Beim System Handover gibt es keine laufende Bindung ‚Äî die Einmalgeb√ºhr ist der einzige Kostenpunkt.
              </div>
</details>
<details className="bg-white rounded-2xl border border-slate-200 overflow-hidden group">
<summary className="flex justify-between items-center px-6 py-5 cursor-pointer font-medium text-slate-900 list-none">
                Ist das DSGVO-konform?
                <iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="lucide:chevron-down" width="18"></iconify-icon>
</summary>
<div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">
                Ja. Alle Daten werden auf Servern in Deutschland und der EU verarbeitet. Wir stellen Ihnen einen Auftragsverarbeitungsvertrag (AVV) bereit und unterst√ºtzen Sie bei der datenschutzrechtlichen Einordnung.
              </div>
</details>
<details className="bg-white rounded-2xl border border-slate-200 overflow-hidden group">
<summary className="flex justify-between items-center px-6 py-5 cursor-pointer font-medium text-slate-900 list-none">
                Kann ich meine bestehende Telefonnummer behalten?
                <iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="lucide:chevron-down" width="18"></iconify-icon>
</summary>
<div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">
                Ja. Sie richten einfach eine Rufumleitung auf die Agent-Nummer ein ‚Äî bei besetzt, nach X Sekunden oder komplett. Ihre bestehende Nummer bleibt, Ihre Kunden merken nichts.
              </div>
</details>
<details className="bg-white rounded-2xl border border-slate-200 overflow-hidden group">
<summary className="flex justify-between items-center px-6 py-5 cursor-pointer font-medium text-slate-900 list-none">
                Was passiert mit den Anrufdaten?
                <iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="lucide:chevron-down" width="18"></iconify-icon>
</summary>
<div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">
                Alle Gespr√§chsdaten werden auf Hetzner-Servern in Deutschland gespeichert. Keine US-Cloud, keine Weitergabe an Dritte. Sie haben jederzeit vollen Zugriff auf Transkripte und Gespr√§chsprotokolle. L√∂schung auf Anfrage jederzeit m√∂glich.
              </div>
</details>
<details className="bg-white rounded-2xl border border-slate-200 overflow-hidden group">
<summary className="flex justify-between items-center px-6 py-5 cursor-pointer font-medium text-slate-900 list-none">
                Wie wird der Agent auf mein Unternehmen trainiert?
                <iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="lucide:chevron-down" width="18"></iconify-icon>
</summary>
<div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">
                Im Erstgespr√§ch erfassen wir Ihre typischen Anrufgr√ºnde, √ñffnungszeiten, Services und FAQ. Daraus konfigurieren wir den Agenten mit Ihren Antworten, Ihrer Tonalit√§t und Ihren Regeln. Sie h√∂ren den Agenten vor dem Go-Live und geben Feedback.
              </div>
</details>
<details className="bg-white rounded-2xl border border-slate-200 overflow-hidden group">
<summary className="flex justify-between items-center px-6 py-5 cursor-pointer font-medium text-slate-900 list-none">
                Was unterscheidet Stimmwerk von einem Callcenter?
                <iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="lucide:chevron-down" width="18"></iconify-icon>
</summary>
<div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">
                Ein Callcenter setzt auf menschliche Agenten ‚Äî das kostet mehr, skaliert schlechter und ist nicht 24/7 verf√ºgbar. Unser KI-Agent antwortet in Sekundenschnelle, ist rund um die Uhr erreichbar und kennt Ihr Unternehmen nach dem Training besser als ein externer Mitarbeiter. Ab ‚Ç¨199/Monat statt ‚Ç¨2.000+/Monat.
              </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200" id="gruender">
<div className="max-w-5xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center reveal-on-scroll">

<div className="flex justify-center md:justify-start">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-3xl transform rotate-3"></div>
<img alt="Sadhu Meewes ‚Äî Gr√ºnder Stimmwerk" className="relative w-72 h-96 object-cover object-top rounded-3xl shadow-xl" src="/assets/sadhu-meewes.jpg"/>
</div>
</div>

<div>
<span className="inline-block px-3 py-1 bg-violet-100 text-violet-700 text-xs font-semibold rounded-full mb-5 tracking-wide uppercase">Der Gr√ºnder</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                Weniger B√ºrokratie.<br/>Mehr Zeit f√ºr das Wesentliche.
              </h2>
<div className="space-y-4 text-slate-600 leading-relaxed">
<p>
                  Als ausgebildeter Immobilienkaufmann habe ich fr√ºh gelernt, wie viel Energie in deutschen Unternehmen durch manuelle Prozesse, unn√∂tige Abstimmungsschleifen und veraltete Strukturen verloren geht.
                </p>
<p>
                  Mich hat schon immer besch√§ftigt, wie man Abl√§ufe so gestalten kann, dass Menschen sich auf das konzentrieren, was wirklich z√§hlt ‚Äî statt auf Verwaltung.
                </p>
<p>
                  Mit den M√∂glichkeiten, die KI heute bietet, l√§sst sich genau das umsetzen: Telefonagenten die rund um die Uhr erreichbar sind, Workflows die sich selbst koordinieren, Systeme die mitdenken. Ich baue das f√ºr den deutschen Mittelstand ‚Äî bodenst√§ndig, DSGVO-konform und mit dem Fokus auf echten Nutzen statt leeren Versprechen.
                </p>
</div>
<div className="mt-8 flex items-center gap-4">
<div>
<p className="font-semibold text-slate-900">Sadhu Meewes</p>
<p className="text-sm text-slate-500">Gr√ºnder, Stimmwerk Consulting</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200" id="contact">
<div className="max-w-4xl mx-auto px-6 lg:px-8">
<div className="text-center mb-12 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              Lassen Sie uns starten
            </h2>
<p className="text-slate-600 text-lg leading-relaxed">
              Buchen Sie Ihr unverbindliches Erstgespr√§ch. Wir analysieren Ihren
              Bedarf und zeigen Ihnen, wie Ihr KI-Agent klingen wird.
            </p>
</div>
<div className="bg-slate-50 rounded-3xl p-4 md:p-8 border border-slate-200 shadow-sm reveal-on-scroll">
<div className="calendly-inline-widget" data-url="https://calendly.com/stimmwerk-solutions-info/demo?hide_event_type_details=1&amp;hide_gdpr_banner=1" style={{position: 'relative', minWidth: '320px', height: '700px'}}></div>
</div>
</div>
</section>
</main>
<footer className="bg-slate-900 py-16 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex flex-col items-start mb-6">
<span className="text-xl font-semibold tracking-wider text-white leading-none">STIMMWERK</span>
<span className="text-[0.55rem] font-semibold tracking-[0.2em] text-slate-400 mt-1.5 uppercase">KI-Systeme ¬∑ Mittelstand</span>
</div>
<p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Wir bauen intelligente KI-Systeme f√ºr deutschen Mittelstand ‚Äî
              vom Voice Agent bis zum vollst√§ndigen KI-Betriebssystem.
            </p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors text-sm" href="mailto:info@stimmwerk-solutions.de">
                info@stimmwerk-solutions.de
              </a>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Angebote</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#stacks">KI-Stacks</a></li>
<li><a className="hover:text-white transition-colors" href="#features">Voice Agent</a></li>
<li><a className="hover:text-white transition-colors" href="#handover">System Handover</a></li>
<li><a className="hover:text-white transition-colors" href="#industries">Branchen</a></li>
<li><a className="hover:text-white transition-colors" href="#pricing">Preise</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Rechtliches</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="impressum.html">Impressum</a></li>
<li><a className="hover:text-white transition-colors" href="datenschutz.html">Datenschutz</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
<div>¬© 2026 Stimmwerk Consulting. Alle Rechte vorbehalten.</div>
<div className="flex items-center gap-2">
<span>Made with</span>
<iconify-icon className="text-brand-500" icon="lucide:heart" width="14"></iconify-icon>
<span>in Germany</span>
</div>
</div>
</div>
</footer>


<style>
      #sw-chat-wrap { position: fixed; bottom: 28px; left: 28px; z-index: 9988; font-family: 'Manrope', 'Inter', sans-serif; }
      #sw-chat-btn {
        width: 60px; height: 60px; border-radius: 50%;
        background: linear-gradient(135deg, #312e81 0%, #4f46e5 50%, #7c3aed 100%);
        border: none; cursor: pointer;
        box-shadow: 0 4px 20px rgba(79,70,229,0.45);
        display: flex; align-items: center; justify-content: center;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        position: relative;
      }
      #sw-chat-btn:hover { transform: scale(1.08); box-shadow: 0 8px 28px rgba(79,70,229,0.55); }
      #sw-chat-btn svg { width: 26px; height: 26px; fill: white; transition: opacity 0.2s; }
      #sw-chat-btn .sw-icon-open { display: flex; }
      #sw-chat-btn .sw-icon-close { display: none; }
      #sw-chat-wrap.sw-open #sw-chat-btn .sw-icon-open { display: none; }
      #sw-chat-wrap.sw-open #sw-chat-btn .sw-icon-close { display: flex; }
      .sw-pulse-ring {
        position: absolute; inset: -6px; border-radius: 50%;
        border: 2px solid rgba(99,102,241,0.4);
        animation: swPulse 2.5s ease-out infinite;
        pointer-events: none;
      }
      @keyframes swPulse {
        0% { transform: scale(1); opacity: 0.6; }
        100% { transform: scale(1.55); opacity: 0; }
      }
      #sw-chat-window {
        position: absolute; bottom: 76px; left: 0;
        width: 370px; max-height: 540px;
        background: #fff; border-radius: 20px;
        box-shadow: 0 20px 60px rgba(15,23,42,0.18), 0 4px 16px rgba(15,23,42,0.1);
        display: flex; flex-direction: column;
        overflow: hidden;
        transform: scale(0.92) translateY(16px); opacity: 0;
        pointer-events: none;
        transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), opacity 0.2s ease;
      }
      #sw-chat-wrap.sw-open #sw-chat-window {
        transform: scale(1) translateY(0); opacity: 1; pointer-events: all;
      }
      /* Header */
      #sw-chat-header {
        background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
        padding: 16px 18px; display: flex; align-items: center; gap: 12px; flex-shrink: 0;
      }
      .sw-avatar {
        width: 40px; height: 40px; border-radius: 50%;
        background: linear-gradient(135deg, #4f46e5, #7c3aed);
        display: flex; align-items: center; justify-content: center;
        font-size: 18px; flex-shrink: 0;
      }
      .sw-header-info { flex: 1; }
      .sw-header-name { color: #fff; font-weight: 700; font-size: 15px; letter-spacing: -0.01em; }
      .sw-header-status { display: flex; align-items: center; gap: 5px; margin-top: 2px; }
      .sw-dot { width: 7px; height: 7px; border-radius: 50%; background: #22c55e; flex-shrink: 0; }
      .sw-header-status span { color: #94a3b8; font-size: 11.5px; }
      #sw-chat-close-btn {
        background: rgba(255,255,255,0.08); border: none; cursor: pointer;
        color: #94a3b8; border-radius: 8px; padding: 6px; display: flex;
        transition: background 0.15s, color 0.15s;
      }
      #sw-chat-close-btn:hover { background: rgba(255,255,255,0.15); color: #fff; }
      /* Messages */
      #sw-chat-messages {
        flex: 1; overflow-y: auto; padding: 18px 16px 12px;
        display: flex; flex-direction: column; gap: 10px;
        background: #f8fafc;
        scrollbar-width: thin; scrollbar-color: #e2e8f0 transparent;
      }
      #sw-chat-messages::-webkit-scrollbar { width: 4px; }
      #sw-chat-messages::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 4px; }
      .sw-msg { display: flex; gap: 8px; align-items: flex-end; animation: swMsgIn 0.25s ease-out; }
      @keyframes swMsgIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
      .sw-msg.sw-user { flex-direction: row-reverse; }
      .sw-msg-avatar { width: 28px; height: 28px; border-radius: 50%; background: linear-gradient(135deg, #4f46e5, #7c3aed); display: flex; align-items: center; justify-content: center; font-size: 13px; flex-shrink: 0; margin-bottom: 2px; }
      .sw-bubble {
        max-width: 78%; padding: 10px 14px; border-radius: 16px; font-size: 13.5px; line-height: 1.55;
      }
      .sw-msg:not(.sw-user) .sw-bubble { background: #fff; color: #1e293b; border-radius: 4px 16px 16px 16px; box-shadow: 0 1px 4px rgba(15,23,42,0.07); }
      .sw-msg.sw-user .sw-bubble { background: #4f46e5; color: #fff; border-radius: 16px 16px 4px 16px; }
      /* Typing indicator */
      .sw-typing { display: flex; gap: 4px; padding: 12px 14px; align-items: center; background: #fff; border-radius: 4px 16px 16px 16px; box-shadow: 0 1px 4px rgba(15,23,42,0.07); }
      .sw-typing span { width: 7px; height: 7px; border-radius: 50%; background: #94a3b8; animation: swTyping 1.2s ease-in-out infinite; }
      .sw-typing span:nth-child(2) { animation-delay: 0.2s; }
      .sw-typing span:nth-child(3) { animation-delay: 0.4s; }
      @keyframes swTyping { 0%,80%,100% { transform: scale(0.8); opacity: 0.4; } 40% { transform: scale(1.1); opacity: 1; } }
      /* Quick replies */
      #sw-quick-replies { padding: 8px 16px 4px; display: flex; flex-wrap: wrap; gap: 7px; background: #f8fafc; flex-shrink: 0; }
      .sw-chip {
        padding: 6px 12px; border-radius: 20px; font-size: 12.5px; font-weight: 600; cursor: pointer;
        border: 1.5px solid #e0e7ff; background: #fff; color: #4f46e5;
        transition: background 0.15s, color 0.15s, border-color 0.15s;
        white-space: nowrap;
      }
      .sw-chip:hover { background: #4f46e5; color: #fff; border-color: #4f46e5; }
      /* Input */
      #sw-chat-input-area {
        padding: 12px 14px 14px; display: flex; gap: 8px; align-items: center;
        border-top: 1px solid #e2e8f0; background: #fff; flex-shrink: 0;
      }
      #sw-chat-input {
        flex: 1; border: 1.5px solid #e2e8f0; border-radius: 24px;
        padding: 9px 14px; font-size: 13.5px; font-family: 'Manrope', sans-serif;
        color: #1e293b; background: #f8fafc; outline: none;
        transition: border-color 0.15s;
      }
      #sw-chat-input:focus { border-color: #6366f1; background: #fff; }
      #sw-chat-input::placeholder { color: #94a3b8; }
      #sw-send-btn {
        width: 38px; height: 38px; border-radius: 50%; border: none; cursor: pointer;
        background: linear-gradient(135deg, #4f46e5, #7c3aed);
        display: flex; align-items: center; justify-content: center;
        flex-shrink: 0; transition: transform 0.15s, box-shadow 0.15s;
        box-shadow: 0 2px 8px rgba(79,70,229,0.3);
      }
      #sw-send-btn:hover { transform: scale(1.08); box-shadow: 0 4px 14px rgba(79,70,229,0.45); }
      #sw-send-btn svg { width: 16px; height: 16px; fill: white; margin-left: 2px; }
      /* Unread badge */
      #sw-unread-badge {
        position: absolute; top: -4px; right: -4px; width: 18px; height: 18px;
        border-radius: 50%; background: #ef4444; border: 2px solid white;
        display: none; align-items: center; justify-content: center;
        font-size: 10px; font-weight: 700; color: white;
      }
      #sw-chat-wrap.sw-open #sw-unread-badge { display: none !important; }
      /* DSGVO note */
      .sw-gdpr { font-size: 10.5px; color: #94a3b8; text-align: center; padding: 0 16px 10px; background: #fff; }
      .sw-gdpr a { color: #94a3b8; text-decoration: underline; }
      /* Mobile */
      @media (max-width: 440px) {
        #sw-chat-window { width: calc(100vw - 24px); left: 0; bottom: 76px; }
        #sw-chat-wrap { left: 12px; bottom: 20px; }
      }
    </style>
<div id="sw-chat-wrap">
<div id="sw-chat-window">
<div id="sw-chat-header">
<div className="sw-avatar">ü§ñ</div>
<div className="sw-header-info">
<div className="sw-header-name">Mika ¬∑ Stimmwerk</div>
<div className="sw-header-status">
<div className="sw-dot"></div>
<span>Online ‚Äî antwortet sofort</span>
</div>
</div>
<button aria-label="Chat schlie√üen" id="sw-chat-close-btn">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16"><path d="M18 6 6 18M6 6l12 12"></path></svg>
</button>
</div>
<div id="sw-chat-messages"></div>
<div id="sw-quick-replies"></div>
<div id="sw-chat-input-area">
<input autocomplete="off" id="sw-chat-input" maxlength="400" placeholder="Nachricht schreiben‚Ä¶" type="text"/>
<button aria-label="Senden" id="sw-send-btn">
<svg viewbox="0 0 24 24"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"></path></svg>
</button>
</div>
<div className="sw-gdpr">Durch die Nutzung stimmen Sie unserer <a href="datenschutz.html">Datenschutzerkl√§rung</a> zu.</div>
</div>
<button aria-label="Chat √∂ffnen" id="sw-chat-btn">
<div className="sw-pulse-ring"></div>
<div id="sw-unread-badge">1</div>
<span className="sw-icon-open">
<svg viewbox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
</span>
<span className="sw-icon-close">
<svg viewbox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12" fill="none" stroke="white" strokeLinecap="round" strokeWidth="2.5"></path></svg>
</span>
</button>
</div>


<style>
    .sw-voice-fab {
      position: fixed; bottom: 24px; right: 24px; z-index: 9990;
      width: 64px; height: 64px; border-radius: 50%;
      background: linear-gradient(135deg, #0f172a, #1e293b);
      border: 2px solid rgba(79, 70, 229, 0.3);
      cursor: pointer; display: flex; align-items: center; justify-content: center;
      box-shadow: 0 8px 32px rgba(15, 23, 42, 0.4), 0 0 0 0 rgba(79, 70, 229, 0.4);
      transition: transform 0.2s ease, box-shadow 0.3s ease;
      animation: sw-fab-pulse 3s ease-in-out infinite;
    }
    .sw-voice-fab:hover {
      transform: scale(1.08);
      box-shadow: 0 8px 32px rgba(15, 23, 42, 0.5), 0 0 20px rgba(79, 70, 229, 0.3);
    }
    .sw-voice-fab.active {
      background: linear-gradient(135deg, #dc2626, #991b1b);
      border-color: rgba(239, 68, 68, 0.5);
      animation: none;
    }
    .sw-voice-fab.connecting {
      background: linear-gradient(135deg, #d97706, #92400e);
      border-color: rgba(217, 119, 6, 0.5);
      animation: none;
    }
    .sw-voice-fab svg.wave-icon { width: 32px; height: 14px; }
    .sw-voice-fab svg.mic-icon { width: 24px; height: 24px; display: none; }
    .sw-voice-fab.active .wave-icon { display: none; }
    .sw-voice-fab.active .mic-icon { display: block; }
    .sw-voice-fab.connecting .wave-icon { opacity: 0.5; }
    @keyframes sw-fab-pulse {
      0%, 100% { box-shadow: 0 8px 32px rgba(15, 23, 42, 0.4), 0 0 0 0 rgba(79, 70, 229, 0.4); }
      50% { box-shadow: 0 8px 32px rgba(15, 23, 42, 0.4), 0 0 0 12px rgba(79, 70, 229, 0); }
    }
    .sw-voice-label {
      position: fixed; bottom: 32px; right: 96px; z-index: 9990;
      background: white; border: 1px solid #e2e8f0; border-radius: 12px;
      padding: 8px 14px; font-size: 13px; font-weight: 600; color: #0f172a;
      box-shadow: 0 4px 16px rgba(0,0,0,0.08);
      pointer-events: none; white-space: nowrap;
      font-family: 'Manrope', sans-serif;
      transition: opacity 0.3s ease;
    }
    .sw-voice-label.hidden { opacity: 0; pointer-events: none; }
    </style>
<div className="sw-voice-label" id="sw-voice-label">Agent live testen</div>
<button aria-label="KI-Agent anrufen" className="sw-voice-fab" id="sw-voice-fab">
<svg className="wave-icon" viewbox="0 0 100 40">
<defs>
<lineargradient id="fabWaveGrad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#0ea5e9"></stop>
<stop offset="25%" stop-color="#3b82f6"></stop>
<stop offset="50%" stop-color="#ef4444"></stop>
<stop offset="75%" stop-color="#f97316"></stop>
<stop offset="100%" stop-color="#ef4444"></stop>
</lineargradient>
</defs>
<path d="M 5 20 L 22 20 C 25 20, 27 16, 29 16 C 31 16, 32 24, 34 24 C 36 24, 38 10, 41 10 C 44 10, 46 32, 49 32 C 52 32, 54 6, 57 6 C 60 6, 62 26, 65 26 C 68 26, 70 17, 73 17 C 76 17, 78 20, 81 20 L 95 20" fill="none" stroke="url(#fabWaveGrad)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5"></path>
</svg>
<svg className="mic-icon" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<rect height="12" rx="6" width="12" x="6" y="2"></rect>
<path d="M3 12a9 9 0 0 0 18 0"></path>
<line x1="12" x2="12" y1="21" y2="24"></line>
</svg>
</button>


<div id="cookie-banner" style={{display: 'none', position: 'fixed', bottom: '0', left: '0', right: '0', zIndex: '9999', background: '#0f172a', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '16px 24px', fontFamily: '\'Manrope\',sans-serif'}}>
<div style={{maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px'}}>
<div style={{flex: '1', minWidth: '280px'}}>
<p style={{fontSize: '13px', color: '#94a3b8', lineHeight: '1.6', margin: '0'}}>
            Wir nutzen Cookies zur Analyse des Nutzerverhaltens (Google Analytics 4). Technisch notwendige Cookies werden immer gesetzt.
            <a href="datenschutz.html" style={{color: '#a78bfa', textDecoration: 'none', whiteSpace: 'nowrap'}}>Mehr erfahren ‚Üí</a>
</p>
</div>
<div style={{display: 'flex', gap: '10px', flexShrink: '0'}}>
<button onclick="cookieDecline()" style={{fontFamily: '\'Manrope\',sans-serif', fontSize: '13px', fontWeight: '600', padding: '8px 18px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.12)', background: 'transparent', color: '#94a3b8', cursor: 'pointer'}}>Ablehnen</button>
<button onclick="cookieAccept()" style={{fontFamily: '\'Manrope\',sans-serif', fontSize: '13px', fontWeight: '700', padding: '8px 20px', borderRadius: '8px', border: 'none', background: '#7c3aed', color: '#fff', cursor: 'pointer'}}>Alle akzeptieren</button>
</div>
</div>
</div>


    </>
  );
}
