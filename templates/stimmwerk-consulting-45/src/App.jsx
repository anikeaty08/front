import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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



          function toggleFaq(btn) {
            const content = btn.nextElementSibling;
            const title = btn.querySelector('.faq-title');
            const icon = btn.querySelector('.faq-icon');
            const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

            document.querySelectorAll('.faq-content').forEach(el => el.style.maxHeight = '0px');
            document.querySelectorAll('.faq-title').forEach(el => {
              el.classList.remove('text-brand-600');
              el.classList.add('text-slate-900');
            });
            document.querySelectorAll('.faq-icon').forEach(el => el.classList.remove('rotate-180'));

            if (!isOpen) {
              content.style.maxHeight = content.scrollHeight + 'px';
              title.classList.remove('text-slate-900');
              title.classList.add('text-brand-600');
              icon.classList.add('rotate-180');
            }
          }
        


          (function(){
            const callsInput = document.getElementById('missed-calls');
            const valInput = document.getElementById('order-value');
            const callsDisp = document.getElementById('missed-calls-val');
            const valDisp = document.getElementById('order-value-val');
            const dailyDisp = document.getElementById('daily-loss');
            const monthlyDisp = document.getElementById('monthly-loss');
            const yearlyDisp = document.getElementById('yearly-loss');
            const roiDisp = document.getElementById('roi-percentage');

            function formatEuro(num) {
              return '€' + num.toLocaleString('de-DE');
            }

            function calculate() {
              if (!callsInput || !valInput) return;
              const calls = parseInt(callsInput.value);
              const value = parseInt(valInput.value);

              callsDisp.textContent = calls;
              valDisp.textContent = value;

              const daily = calls * value;
              const monthly = daily * 22;
              const yearly = monthly * 12;

              dailyDisp.textContent = formatEuro(daily);
              monthlyDisp.textContent = formatEuro(monthly);
              yearlyDisp.textContent = formatEuro(yearly);

              const pct = (350 / monthly) * 100;
              roiDisp.textContent = pct.toFixed(1).replace('.', ',') + '%';
            }

            if (callsInput && valInput) {
              callsInput.addEventListener('input', calculate);
              valInput.addEventListener('input', calculate);
              calculate();
            }
          })();
        


      // Header Scroll Effect
      const header = document.getElementById('header');
      window.addEventListener('scroll', () => {
          if (window.scrollY > 20) {
              header.classList.add('shadow-sm');
              header.classList.add('bg-white/90');
          } else {
              header.classList.remove('shadow-sm');
              header.classList.remove('bg-white/90');
          }
      });

      // Mobile Menu
      const menuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      let isMenuOpen = false;

      menuBtn.addEventListener('click', () => {
          isMenuOpen = !isMenuOpen;
          if (isMenuOpen) {
              mobileMenu.classList.remove('hidden');
              document.body.style.overflow = 'hidden';
          } else {
              mobileMenu.classList.add('hidden');
              document.body.style.overflow = '';
          }
      });

      // Close menu on link click
      mobileMenu.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => {
              isMenuOpen = false;
              mobileMenu.classList.add('hidden');
              document.body.style.overflow = '';
          });
      });

      // Reveal on Scroll
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('is-visible');
              }
          });
      }, { threshold: 0.1 });

      document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

      // Random Audio Bars Animation (Just for visual effect)
      setInterval(() => {
          const bars = document.querySelectorAll('.audio-bar');
          bars.forEach(bar => {
              bar.style.height = Math.floor(Math.random() * 80 + 20) + '%';
          });
      }, 150);
    


      (function(){
        const initModal = () => {
          const modal = document.getElementById('requirements-modal');
          const btnOpen = document.getElementById('open-requirements-modal');
          const btnClose = document.getElementById('close-requirements-modal');
          const backdrop = document.getElementById('requirements-backdrop');
          const content = document.getElementById('requirements-content');
          const wrapper = document.getElementById('requirements-form-wrapper');
          const form = document.getElementById('requirements-form');
          const successMsg = document.getElementById('requirements-success');

          if (!modal || !btnOpen) return;

          function openModal() {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            setTimeout(() => {
              modal.classList.remove('opacity-0');
              content.classList.remove('scale-95');
              content.classList.add('scale-100');
            }, 10);
            document.body.style.overflow = 'hidden';
          }

          function closeModal() {
            modal.classList.add('opacity-0');
            content.classList.remove('scale-100');
            content.classList.add('scale-95');
            setTimeout(() => {
              modal.classList.add('hidden');
              modal.classList.remove('flex');
              document.body.style.overflow = '';
              wrapper.style.display = 'block';
              successMsg.classList.add('hidden');
              successMsg.classList.remove('flex');
              form.reset();
            }, 300);
          }

          btnOpen.addEventListener('click', openModal);
          if(btnClose) btnClose.addEventListener('click', closeModal);
          if(backdrop) backdrop.addEventListener('click', closeModal);

          if(form) {
            form.addEventListener('submit', (e) => {
              e.preventDefault();
              wrapper.style.display = 'none';
              successMsg.classList.remove('hidden');
              successMsg.classList.add('flex');

              setTimeout(() => {
                closeModal();
                setTimeout(() => {
                  wrapper.style.display = 'block';
                }, 300);
              }, 2000);
            });
          }
        };

        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', initModal);
        } else {
          initModal();
        }
      })();
    


      (function(){
        let t=1;
        const e=7;
        let s=JSON.parse(sessionStorage.getItem('quizData'))||{};
        const i=document.getElementById('quiz-overlay'),
              n=document.getElementById('floating-quiz-btn'),
              l=document.getElementById('quiz-close'),
              a=document.getElementById('quiz-next'),
              o=document.getElementById('quiz-back'),
              c=document.getElementById('quiz-skip'),
              r=document.getElementById('quiz-progress'),
              d=document.getElementById('quiz-counter'),
              u=document.getElementById('quiz-resume-banner');

        function h(){
          i.classList.remove('hidden');
          i.classList.add('flex');
          document.body.classList.add('quiz-no-scroll');
          p(t,'none');
          if(Object.keys(s).length>0 && t<7){
            u.classList.remove('hidden');
            u.classList.add('flex');
          }else{
            u.classList.add('hidden');
          }
        }
        function b(){
          i.classList.add('hidden');
          i.classList.remove('flex');
          document.body.classList.remove('quiz-no-scroll');
        }

        if(n) n.addEventListener('click',h);
        if(l) l.addEventListener('click',b);

        document.addEventListener('click', evt => {
          const btn = evt.target.closest('button, a');
          if(btn && btn.textContent){
            const txt = btn.textContent.toLowerCase();
            if((txt.includes('demo anfragen') || txt.includes('demo starten') || txt.includes('angebot anfragen') || txt.includes('erstgespräch buchen')) && btn.id !== 'floating-quiz-btn'){
              evt.preventDefault();
              h();
            }
          }
        });

        function m(){
          let valid=!1;
          if(1===t) valid=!!s.branche;
          else if(2===t) valid=!!s.size;
          else if(3===t) valid=!!s.volume;
          else if(4===t) valid=(s.consequences&&s.consequences.length>0) || !!s.consequencesText;
          else if(5===t) valid=!!s.mainPain;
          else if(6===t) valid=!0;
          else if(7===t){
            const nm = document.getElementById('quiz-name').value;
            const co = document.getElementById('quiz-company').value;
            const ph = document.getElementById('quiz-phone').value;
            valid = nm.length>=2 && co.length>=2 && ph.length>=6;
          }

          if(valid){
            a.classList.remove('opacity-50','cursor-not-allowed','pointer-events-none');
          }else{
            a.classList.add('opacity-50','cursor-not-allowed','pointer-events-none');
          }

          if(6===t){
            c.classList.remove('hidden');
          }else{
            c.classList.add('hidden');
          }

          o.style.visibility = 1===t ? 'hidden' : 'visible';

          if(t>7){
            o.style.display='none';
            a.style.display='none';
            const ftr = document.getElementById('quiz-footer');
            if(ftr) ftr.style.display='none';
            if(d && d.parentElement) d.parentElement.style.display='none';
            if(r && r.parentElement) r.parentElement.style.display='none';
          }
        }

        function p(step, dir){
          if(step<1||step>8) return;
          const cur = document.querySelector(`.quiz-step[data-step="${t}"]`);
          const nxt = document.querySelector(`.quiz-step[data-step="${step}"]`) || document.getElementById('quiz-success');

          if(cur && nxt && cur !== nxt){
            cur.classList.remove('quiz-slide-in-right','quiz-slide-in-left');
            cur.classList.add('next'===dir ? 'quiz-slide-out-left' : 'quiz-slide-out-right');
            nxt.classList.remove('hidden','quiz-slide-out-left','quiz-slide-out-right');
            nxt.classList.add('flex', 'next'===dir ? 'quiz-slide-in-right' : 'quiz-slide-in-left');
            setTimeout(()=>{
              cur.classList.add('hidden');
              cur.classList.remove('flex','quiz-slide-out-left','quiz-slide-out-right');
            }, 400);
          } else if(nxt){
            nxt.classList.remove('hidden', 'quiz-slide-out-left', 'quiz-slide-out-right');
            nxt.classList.add('flex');
          }

          t=step;
          sessionStorage.setItem('quizStep',t);

          if(t<=e && r && d){
            r.style.width=`${(t/e)*100}%`;
            d.textContent=`Schritt ${t} von ${e}`;
          }
          m();
          if(u) u.classList.add('hidden');
        }

        if(a) a.addEventListener('click',()=>p(t+1,'next'));
        if(o) o.addEventListener('click',()=>p(t-1,'prev'));
        if(c) c.addEventListener('click',()=>p(t+1,'next'));

        function g(stepNum, dataKey, isMulti, containerSelector, itemSelector){
          const container = document.querySelector(containerSelector);
          if(!container) return;

          if(isMulti){
            container.addEventListener('change', evt => {
              const inp = evt.target;
              if(inp.tagName.toLowerCase() !== 'input') return;
              const item = inp.closest(itemSelector);
              if(!item) return;
              const val = inp.value;

              s[dataKey] = s[dataKey] || [];
              if(inp.checked){
                item.classList.add('selected');
                if(!s[dataKey].includes(val)) s[dataKey].push(val);
              } else {
                item.classList.remove('selected');
                s[dataKey] = s[dataKey].filter(v => v !== val);
              }
              sessionStorage.setItem('quizData', JSON.stringify(s));
              m();
            });
            return;
          }

          container.addEventListener('click', evt => {
            const item = evt.target.closest(itemSelector);
            if(!item) return;
            const inp = item.querySelector('input');
            const val = item.dataset.val || (inp ? inp.value : null);

            container.querySelectorAll(itemSelector).forEach(el => el.classList.remove('selected'));
            item.classList.add('selected');
            s[dataKey] = val;
            sessionStorage.setItem('quizData', JSON.stringify(s));
            m();
          });
        }

        g(1,'branche',!1,'#q1-cards','.quiz-card');
        g(2,'size',!1,'#q2-cards','.quiz-card');
        g(3,'volume',!1,'#q3-pills','.quiz-pill');
        g(4,'consequences',!0,'#q4-cards','.quiz-multi-card');
        g(5,'mainPain',!1,'#q5-cards','.quiz-card');
        g(6,'timing',!1,'#q6-timing-pills','.quiz-pill');
        g(6,'budget',!1,'#q6-budget-cards','.quiz-card');

        const inputs = [
          {id:'q1-input', key:'branche'},
          {id:'q3-input', key:'volume'},
          {id:'q4-input', key:'consequencesText'},
          {id:'q5-input', key:'mainPain'}
        ];
        inputs.forEach(obj => {
          const el = document.getElementById(obj.id);
          if(el){
            el.addEventListener('input', () => {
              s[obj.key] = el.value;
              sessionStorage.setItem('quizData', JSON.stringify(s));
              m();
            });
          }
        });

        ['quiz-name','quiz-company','quiz-phone'].forEach(id => {
          const el = document.getElementById(id);
          if(el) el.addEventListener('input', m);
        });

        const subBtn = document.getElementById('quiz-submit-final');
        if(subBtn) {
          subBtn.addEventListener('click', function(evt){
            evt.preventDefault();
            const nm = document.getElementById('quiz-name').value,
                  co = document.getElementById('quiz-company').value,
                  ph = document.getElementById('quiz-phone').value;

            let isValid = !0;
            if(nm.length<2){ document.getElementById('err-name').classList.remove('hidden'); isValid = !1; }
            else document.getElementById('err-name').classList.add('hidden');

            if(co.length<2){ document.getElementById('err-company').classList.remove('hidden'); isValid = !1; }
            else document.getElementById('err-company').classList.add('hidden');

            if(ph.length<6){ document.getElementById('err-phone').classList.remove('hidden'); isValid = !1; }
            else document.getElementById('err-phone').classList.add('hidden');

            if(!isValid) return;

            s.contact = {
              name: nm,
              company: co,
              phone: ph,
              email: document.getElementById('quiz-email').value,
              source: document.getElementById('quiz-source').value,
              message: document.getElementById('quiz-message').value
            };
            sessionStorage.setItem('quizData', JSON.stringify(s));

            this.innerHTML = '<span class="animate-pulse">Sende...</span>';

            setTimeout(()=>{
              console.log('Quiz Submitted:', s);
              const sucName = document.getElementById('success-name');
              if(sucName) sucName.textContent = nm.split(' ')[0] || '';

              let html = '';
              if(s.branche) html += `<div><span class="text-slate-500 text-xs block">Branche</span><span class="font-medium text-slate-900">${s.branche}</span></div>`;
              if(s.size) html += `<div><span class="text-slate-500 text-xs block">Betriebsgröße</span><span class="font-medium text-slate-900">${s.size}</span></div>`;
              if(s.volume) html += `<div><span class="text-slate-500 text-xs block">Anrufe/Tag</span><span class="font-medium text-slate-900">${s.volume}</span></div>`;
              if(s.timing) html += `<div><span class="text-slate-500 text-xs block">Timing</span><span class="font-medium text-slate-900">${s.timing}</span></div>`;
              if(s.budget) html += `<div><span class="text-slate-500 text-xs block">Budget</span><span class="font-medium text-slate-900">${s.budget}</span></div>`;

              const summ = document.getElementById('quiz-summary-content');
              if(summ) summ.innerHTML = html;

              p(8, 'next');
            }, 1500);
          });
        }

        const closeDemo = document.getElementById('quiz-close-demo');
        if(closeDemo) {
          closeDemo.addEventListener('click', ()=>{
            b();
            window.location.hash = '#demo';
          });
        }

        document.addEventListener('keydown', evt => {
          if(i.classList.contains('hidden')) return;
          if('Escape'===evt.key) b();
          if('Enter'===evt.key){
            evt.preventDefault();
            if(a && !a.classList.contains('cursor-not-allowed')){
              if(7===t) document.getElementById('quiz-submit-final').click();
              else a.click();
            }
          }
        });

        let startX=0, endX=0;
        i.addEventListener('touchstart', evt => { startX = evt.changedTouches[0].screenX; }, {passive: !0});
        i.addEventListener('touchend', evt => {
          endX = evt.changedTouches[0].screenX;
          if(endX < startX - 50 && a && !a.classList.contains('cursor-not-allowed')){
            if(t<7) a.click();
          }
          if(endX > startX + 50 && t>1 && o){
            o.click();
          }
        }, {passive: !0});

        const resYes = document.getElementById('quiz-resume-yes');
        if(resYes){
          resYes.addEventListener('click', ()=>{
            const savedStep = parseInt(sessionStorage.getItem('quizStep')) || 1;
            u.classList.add('hidden');
            if(savedStep>1) p(savedStep, 'next');
          });
        }

        const resNo = document.getElementById('quiz-resume-no');
        if(resNo){
          resNo.addEventListener('click', ()=>{
            s={};
            sessionStorage.removeItem('quizData');
            sessionStorage.removeItem('quizStep');
            document.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'));
            document.querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = !1);
            document.querySelectorAll('input[type="text"], input[type="number"], input[type="tel"], input[type="email"], textarea').forEach(el => el.value = '');
            u.classList.add('hidden');
            p(1, 'prev');
          });
        }
      })();
    


      (function() {
        const toast = document.getElementById('social-proof-toast');
        if (!toast) return;
        if (sessionStorage.getItem('hideSocialProof') === 'true') return;
        const messages = [
          { a: 'M', l1: 'Michael R. — Schlüsseldienst', l2: 'Hat vor 2 Stunden eine Demo gebucht 🔑' },
          { a: 'S', l1: 'Stefan K. — SHK Betrieb', l2: 'Kostenloses Erstgespräch vereinbart ✅' },
          { a: 'A', l1: 'Andreas M. — Kfz-Werkstatt', l2: 'Fragt nach dem Pro-Paket 🚗' },
          { a: 'T', l1: 'Thomas B. — Unternehmen, 45 MA', l2: 'Outbound-System in Konfiguration 📞' }
        ];
        let currentIndex = 0;
        const avatar = document.getElementById('sp-avatar');
        const line1 = document.getElementById('sp-line1');
        const line2 = document.getElementById('sp-line2');
        const closeBtn = document.getElementById('sp-close');
        closeBtn.addEventListener('click', () => {
          toast.classList.remove('translate-y-0', 'opacity-100');
          toast.classList.add('translate-y-[150%]', 'opacity-0');
          sessionStorage.setItem('hideSocialProof', 'true');
        });
        function showToast() {
          if (sessionStorage.getItem('hideSocialProof') === 'true') return;
          if (window.innerWidth < 768) return;
          const msg = messages[currentIndex];
          avatar.textContent = msg.a;
          line1.textContent = msg.l1;
          line2.textContent = msg.l2;
          toast.classList.remove('translate-y-[150%]', 'opacity-0');
          toast.classList.add('translate-y-0', 'opacity-100');
          setTimeout(() => {
            if (sessionStorage.getItem('hideSocialProof') !== 'true') {
              toast.classList.remove('translate-y-0', 'opacity-100');
              toast.classList.add('translate-y-[150%]', 'opacity-0');
            }
            currentIndex = (currentIndex + 1) % messages.length;
          }, 6000);
        }
        setTimeout(() => {
          showToast();
          setInterval(showToast, 45000);
        }, 8000);
      })();
    


      (function() {
        const banner = document.getElementById('cookie-banner');
        const acceptBtn = document.getElementById('cookie-accept');
        if (!localStorage.getItem('cookie-consent')) {
          banner.classList.remove('hidden');
        }
        acceptBtn.addEventListener('click', () => {
          localStorage.setItem('cookie-consent', 'accepted');
          banner.classList.add('hidden');
        });
      })();
    


      const legalContent = {
        impressum: {
          title: "Impressum",
          html: `
            <h1>Impressum</h1>
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>Stimmwerk Consulting<br>
            Inhaber: Sadhu Meewes<br>
            Parforceheide 60<br>
            14163 Berlin</p>
            <h2>Kontakt</h2>
            <p>Telefon: +49 176 50425241<br>
            E-Mail: info@stimmwerk.de</p>
            <h2>Umsatzsteuer-ID</h2>
            <p>(wird nach Anmeldung ergänzt)</p>
            <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>Sadhu Meewes<br>
            (gleiche Adresse wie oben)</p>
            <h2>Streitschlichtung</h2>
            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            <a href="https://ec.europa.eu/consumers/odr" target="_blank">https://ec.europa.eu/consumers/odr</a><br>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          `
        },
        datenschutz: {
          title: "Datenschutzerklärung",
          html: `
            <h1>Datenschutzerklärung</h1>
            <h2>1. Verantwortliche Stelle</h2>
            <p>Stimmwerk Consulting<br>
            Inhaber: Sadhu Meewes<br>
            Parforceheide 60, 14163 Berlin<br>
            E-Mail: info@stimmwerk.de</p>
            <h2>2. Welche Daten wir erheben</h2>
            <p>Wenn Sie unser Kontaktformular nutzen, wir erheben: Name, Telefonnummer und optional E-Mail-Adresse.<br>
            Zweck: Rückruf und Angebotsstellung.<br>
            Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.<br>
            Speicherdauer: bis Anfrage abgeschlossen.</p>
            <h2>3. Ihre Rechte</h2>
            <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und Datenübertragbarkeit.<br>
            Kontakt: info@stimmwerk.de</p>
            <h2>4. Hosting</h2>
            <p>Diese Website wird extern gehostet. Beim Aufruf werden automatisch Server-Logfiles gespeichert (IP-Adresse, Browsertyp, Uhrzeit). Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.</p>
            <h2>5. ElevenLabs Voice Demo</h2>
            <p>Wenn Sie die Live-Demo nutzen, wird Ihre Spracheingabe an ElevenLabs Inc. (USA) übertragen. Weitere Informationen:
            <a href="https://elevenlabs.io/privacy" target="_blank">elevenlabs.io/privacy</a></p>
            <h2>6. Cookies</h2>
            <p>Diese Website verwendet ausschließlich technisch notwendige Cookies. Es werden keine Tracking- oder Marketing-Cookies eingesetzt.</p>
          `
        }
      };

      function openLegal(page) {
        const data = legalContent[page];
        document.getElementById('legal-title').textContent = data.title;
        document.getElementById('legal-content').innerHTML = data.html;
        document.getElementById('legal-overlay').style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.getElementById('legal-overlay').scrollTo(0, 0);
        history.pushState({}, '', '#legal');
      }

      function closeLegal() {
        document.getElementById('legal-overlay').style.display = 'none';
        document.body.style.overflow = '';
        if (location.hash === '#legal') {
          history.replaceState(null, '', window.location.pathname + window.location.search);
        }
      }

      window.addEventListener('popstate', closeLegal);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 border-b border-slate-200/60 glass transition-all duration-300" id="header">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-brand-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="font-bold text-lg relative z-10">S</span>
</div>
<span className="font-semibold text-lg tracking-tight text-slate-900">
            Stimmwerk
          </span>
</a>

<nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#features">
            Lösungen
          </a>
<a className="hover:text-slate-900 transition-colors" href="#demo">
            Voice Engine
          </a>
<a className="hover:text-slate-900 transition-colors" href="#industries">
            Branchen
          </a>
<a className="hover:text-slate-900 transition-colors" href="#security">
            Sicherheit
          </a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">
            Preise
          </a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-slate-600 hover:text-slate-900" href="#login">
            Login
          </a>
<a className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-500/20" href="#contact">
<span>Starten</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button className="lg:hidden p-2 text-slate-600" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="hidden fixed inset-0 bg-white z-40 pt-20 px-6 pb-6 flex flex-col gap-6" id="mobile-menu">
<a className="text-xl font-medium text-slate-900 border-b border-slate-100 pb-4" href="#features">
          Lösungen
        </a>
<a className="text-xl font-medium text-slate-900 border-b border-slate-100 pb-4" href="#demo">
          Voice Engine
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
<div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] -z-10 animate-float"></div>
<div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] -z-10 animate-float" style={{animationDelay: '2s'}}></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

<div className="lg:w-1/2 relative z-10 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-600 mb-8 animate-fade-in">
<span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                Kostenlose Demo · Kein Risiko
              </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter text-slate-900 leading-[1.1] mb-6">
                Intelligente
                <br/>
<span className="text-slate-400">Automatisierung für</span>
<br/>
                Ihr Wachstum.
              </h1>
<p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Wir verbinden Voice-KI und Workflow-Automation zu nahtlosen
                Kreisläufen. Ihr Agent ist in 1 Woche einsatzbereit. Skalieren
                Sie Ihren Service ohne zusätzliches Personal.
              </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 flex items-center justify-center gap-2">
                  Kostenlose Demo anfragen
                  <iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 text-slate-700 rounded-full font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                  Demo ansehen
                </button>
</div>
<div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="text-sm font-semibold flex items-center gap-2">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
                  DSGVO Konform
                </div>
<div className="text-sm font-semibold flex items-center gap-2">
<iconify-icon icon="solar:server-square-linear"></iconify-icon>
                  Server in DE
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
                          Guten Tag, ich würde gerne meinen Termin am Dienstag
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
                          Automatisierung ausgelöst
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
                            Bestätigung senden
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
<section className="py-24 bg-slate-50 border-b border-slate-100 relative overflow-hidden" id="live-demo-section">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal-on-scroll">
<span className="text-brand-600 font-semibold tracking-wide uppercase text-xs mb-2 block">
                LIVE DEMO
              </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                Sprechen Sie jetzt mit unserem Agenten.
              </h2>
<p className="text-slate-600 mb-8 leading-relaxed text-lg">
                Kein Formular. Kein Verkaufsgespräch. Einfach anrufen und selbst
                erleben wie natürlich KI-Telefonie heute klingt.
              </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-slate-700 font-medium">
<iconify-icon className="text-brand-600" icon="lucide:check-circle-2" width="20"></iconify-icon>
                  Antwortet in unter 1 Sekunde
                </li>
<li className="flex items-center gap-3 text-slate-700 font-medium">
<iconify-icon className="text-brand-600" icon="lucide:check-circle-2" width="20"></iconify-icon>
                  Versteht Dialekte und Unterbrechungen
                </li>
<li className="flex items-center gap-3 text-slate-700 font-medium">
<iconify-icon className="text-brand-600" icon="lucide:check-circle-2" width="20"></iconify-icon>
                  85% der Anrufer bemerken keinen Unterschied
                </li>
</ul>
</div>
<div className="reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="bg-white rounded-3xl p-8 lg:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-200 relative flex flex-col items-center text-center">
<div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-100">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    LIVE
                  </span>
</div>
<div className="relative mb-8 mt-4">
<div className="absolute inset-0 bg-brand-500 rounded-full animate-ping opacity-20"></div>
<div className="absolute inset-0 bg-brand-100 rounded-full animate-pulse opacity-50 scale-125"></div>
<div className="w-24 h-24 rounded-full bg-slate-900 flex items-center justify-center relative z-10 shadow-xl shadow-slate-900/20">
<iconify-icon className="text-white" icon="lucide:mic" width="32"></iconify-icon>
</div>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-1">
                  Lisa — Stimmwerk Assistentin
                </h3>
<p className="text-slate-500 mb-8">Stellen Sie Lisa eine Frage</p>
<button className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-full font-semibold transition-all shadow-lg shadow-brand-500/25 flex items-center justify-center gap-3 group">
<iconify-icon className="group-hover:animate-bounce" icon="lucide:phone" width="20"></iconify-icon>
                  Demo starten
                </button>
<p className="text-xs font-medium text-slate-400 mt-4">
                  Kostenlos · 60 Sekunden · Kein Risiko
                </p>
</div>
<div className="mt-6 px-4 text-center">
<p className="text-sm font-medium text-slate-800 mb-1">
                  Lisa ist unsere eigene KI-Assistentin — konfiguriert für
                  Stimmwerk.
                </p>
<p className="text-xs text-slate-500 mb-4">
                  Fragen Sie sie nach Preisen, Prozessen, Branchen oder
                  vereinbaren Sie direkt einen Rückruf. Genau das bekommt auch
                  Ihr Unternehmen.
                </p>
<div className="flex flex-wrap justify-center gap-2">
<button className="border border-slate-200 bg-white text-slate-600 text-xs px-3 py-1.5 rounded-full hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200 cursor-pointer" type="button">
                    💰 Was kostet das?
                  </button>
<button className="border border-slate-200 bg-white text-slate-600 text-xs px-3 py-1.5 rounded-full hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200 cursor-pointer" type="button">
                    ⚡ Wie schnell geht das?
                  </button>
<button className="border border-slate-200 bg-white text-slate-600 text-xs px-3 py-1.5 rounded-full hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200 cursor-pointer" type="button">
                    🏗️ Geht das für mein Handwerk?
                  </button>
<button className="border border-slate-200 bg-white text-slate-600 text-xs px-3 py-1.5 rounded-full hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200 cursor-pointer" type="button">
                    📞 Rückruf vereinbaren
                  </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-slate-50/50 py-12">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">
            Technologie-Partner
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
              Make
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
              Ein Ökosystem für Ihre Prozesse
            </h2>
<p className="text-slate-500 text-lg">
              Keine Insellösungen. Stimmwerk integriert sich tief in Ihre
              bestehende Infrastruktur.
            </p>
</div>
<div className="w-full flex justify-center mb-10 reveal-on-scroll">
<p className="text-sm text-slate-500 italic text-center max-w-xl mx-auto">
              Spricht Deutsch, Englisch, Spanisch und 70 weitere Sprachen —
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
                  Natürliche Konversation
                </h3>
<p className="text-slate-600 max-w-md">
                  Unsere KI versteht Kontext, Unterbrechungen und Dialekte. Sie
                  klingt so menschlich, dass 85% der Anrufer keinen Unterschied
                  bemerken. Deutsch, Englisch, Spanisch und 70 weitere Sprachen
                  — inklusive regionaler Dialekte wie Bayerisch,
                  Schweizerdeutsch und Österreichisch.
                </p>
<div className="mt-auto flex items-center gap-2">
<div className="px-3 py-1 bg-white rounded-md border border-slate-200 text-xs font-medium">
                    Latenz &lt; 500ms
                  </div>
<div className="px-3 py-1 bg-white rounded-md border border-slate-200 text-xs font-medium">
                    Unterbrechbar
                  </div>
<div className="px-3 py-1 bg-white rounded-md border border-slate-200 text-xs font-medium">
                    🌍 70+ Sprachen
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
                  ISO 27001 Zertifiziert
                </h3>
<p className="text-slate-500 text-sm">
                  Ihre Daten verlassen niemals den deutschen Rechtsraum.
                  Ende-zu-Ende verschlüsselt.
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

<section className="py-24 bg-slate-50 border-t border-slate-100 relative overflow-hidden" id="comparison">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">
              Der Unterschied ist messbar.
            </h2>
<p className="text-slate-600 text-lg leading-relaxed">
              Was passiert täglich ohne KI-Telefonie — und was ändert sich.
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
                    Anruf klingelt — Techniker auf Baustelle, niemand geht ran
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
                    Kein Überblick: Wer hat angerufen? Was wollten sie?
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
                    Agent nimmt in unter 1 Sekunde ab — 24/7
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
                    Kein verpasster Auftrag — auch nachts und am Wochenende
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
              Ø 8 verpasste Anrufe/Tag × €200 Auftragswert =
              <br className="hidden md:block"/>
<span className="text-brand-600">
                €35.200 entgangener Umsatz pro Monat
              </span>
</div>
<p className="text-sm text-slate-500">
              Berechnet auf Basis realer Kundendaten aus dem
              Schlüsseldienst-Segment.
            </p>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="steps">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">
              In 3 Schritten live
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[1fr]">

<div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 relative overflow-hidden group hover:border-brand-200 hover:bg-white transition-all reveal-on-scroll">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-900 flex items-center justify-center mb-6 text-xl font-bold shadow-sm">
                1
              </div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">
                Schritt 1 — Kostenloses Erstgespräch
              </h3>
<p className="text-slate-600">
                Wir analysieren Ihre häufigsten Anrufthemen und bauen den
                Agenten genau auf Ihr Unternehmen zu.
              </p>
</div>

<div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 relative overflow-hidden group hover:border-brand-200 hover:bg-white transition-all reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-900 flex items-center justify-center mb-6 text-xl font-bold shadow-sm">
                2
              </div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">
                Schritt 2 — Agent fertig in 1 Woche
              </h3>
<p className="text-slate-600">
                Sie erhalten eine kostenlose Demo zum Testen — kein Vertrag,
                kein Risiko, keine Vorauszahlung.
              </p>
</div>

<div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 relative overflow-hidden group hover:border-brand-200 hover:bg-white transition-all reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-900 flex items-center justify-center mb-6 text-xl font-bold shadow-sm">
                3
              </div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">
                Schritt 3 — 24/7 im Einsatz
              </h3>
<p className="text-slate-600">
                Ihr Agent nimmt ab sofort jeden Anruf an. Sie behalten die volle
                Kontrolle und können jederzeit kündigen.
              </p>
</div>
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
                Erleben Sie es selbst.
              </h2>
<p className="text-slate-600 mb-8 leading-relaxed">
                Lisa ist live — konfiguriert für Stimmwerk. Fragen Sie nach
                Preisen, wie der Aufbau funktioniert oder bitten Sie um einen
                Rückruf. So klingt Ihr Agent in 1 Woche.
              </p>
<div className="space-y-6">
<div className="flex items-start gap-4 group cursor-pointer hover:bg-white p-4 rounded-2xl transition-all border border-transparent hover:border-slate-200 hover:shadow-sm">
<div className="w-10 h-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mt-1">
<iconify-icon icon="solar:user-speak-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900">
                      Preise &amp; Prozess erfragen
                    </h4>
<p className="text-sm text-slate-500 mt-1">
                      Was kostet es, wie läuft der Aufbau ab, was ist inklusive.
                    </p>
</div>
<div className="ml-auto flex items-center justify-center w-8 h-8 rounded-full border border-slate-200 text-slate-400 group-hover:bg-brand-600 group-hover:text-white group-hover:border-transparent transition-all">
<iconify-icon icon="solar:play-linear" width="16"></iconify-icon>
</div>
</div>
<div className="flex items-start gap-4 group cursor-pointer hover:bg-white p-4 rounded-2xl transition-all border border-transparent hover:border-slate-200 hover:shadow-sm">
<div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mt-1">
<iconify-icon icon="solar:home-smile-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900">
                      Rückruf oder Demo buchen
                    </h4>
<p className="text-sm text-slate-500 mt-1">
                      Lisa nimmt die Anfrage auf und leitet sie weiter.
                    </p>
</div>
<div className="ml-auto flex items-center justify-center w-8 h-8 rounded-full border border-slate-200 text-slate-400 group-hover:bg-purple-600 group-hover:text-white group-hover:border-transparent transition-all">
<iconify-icon icon="solar:play-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 relative reveal-on-scroll">
<div className="absolute top-4 right-4 flex gap-1">
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
</div>
</div>
</section>

<section className="py-24 bg-white" id="industries">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="mb-16 text-center reveal-on-scroll">
<h2 className="text-3xl font-semibold text-slate-900">
              Maßgeschneidert für Ihre Branche
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-brand-200 transition-all reveal-on-scroll">
<div className="h-40 bg-slate-50 rounded-xl mb-6 flex items-center justify-center overflow-hidden relative">
<svg className="relative z-10 transition-transform duration-[400ms] ease-out group-hover:rotate-[20deg]" fill="none" height="56" stroke="#4f46e5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="56">
<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
</svg>
<div className="absolute inset-0 bg-grid-slate opacity-50"></div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">
                Schlüsseldienst &amp; Sicherheit
              </h3>
<p className="text-sm text-slate-500 mb-4">
                24/7 Notfall-Triage, automatische Preisauskunft und
                Terminkoordination. Kein verpasster Anruf mehr — auch nachts und
                am Wochenende.
              </p>
<a className="text-sm font-semibold text-brand-600 flex items-center gap-1 hover:gap-2 transition-all" href="#">
                Mehr erfahren
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-brand-200 transition-all reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="h-40 bg-slate-50 rounded-xl mb-6 flex items-center justify-center overflow-hidden relative">
<svg className="relative z-10 transition-transform duration-[400ms] ease-out group-hover:rotate-[-15deg] origin-bottom-right" fill="none" height="56" stroke="#4f46e5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="56">
<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
</svg>
<div className="absolute inset-0 bg-grid-slate opacity-50"></div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">
                Sanitär, Heizung &amp; Klima
              </h3>
<p className="text-sm text-slate-500 mb-4">
                Heizungsausfall um 23 Uhr? Ihr Agent nimmt an, triagiert und
                benachrichtigt den Notdienst automatisch.
              </p>
<a className="text-sm font-semibold text-brand-600 flex items-center gap-1 hover:gap-2 transition-all" href="#">
                Mehr erfahren
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-brand-200 transition-all reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="h-40 bg-slate-50 rounded-xl mb-6 flex items-center justify-center overflow-hidden relative">
<svg className="relative z-10 transition-all duration-[400ms] ease-out group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(79,70,229,0.5)]" fill="none" height="56" stroke="#4f46e5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="56">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
<div className="absolute inset-0 bg-grid-slate opacity-50"></div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">
                Elektro &amp; PV
              </h3>
<p className="text-sm text-slate-500 mb-4">
                Qualifizieren Sie Anfragen für Solaranlagen, Wallboxen und
                Elektroinstallationen vollautomatisch im Vorfeld.
              </p>
<a className="text-sm font-semibold text-brand-600 flex items-center gap-1 hover:gap-2 transition-all" href="#">
                Mehr erfahren
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-brand-200 transition-all reveal-on-scroll">
<div className="h-40 bg-slate-50 rounded-xl mb-6 flex items-center justify-center overflow-hidden relative">
<svg className="relative z-10" fill="none" height="56" stroke="#4f46e5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="56">
<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" stroke-opacity="0.3"></path>
<path className="transition-all duration-[400ms] ease-out group-hover:[stroke-dashoffset:0]" d="M3 12h4l2 -4l4 9l2 -5h6" stroke-dasharray="40" stroke-dashoffset="40"></path>
</svg>
<div className="absolute inset-0 bg-grid-slate opacity-50"></div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">
                Medizin &amp; Praxis
              </h3>
<p className="text-sm text-slate-500 mb-4">
                Entlasten Sie Ihr Empfangsteam. Automatische Terminbuchung,
                Rezeptbestellung und Notfall-Triage.
              </p>
<a className="text-sm font-semibold text-brand-600 flex items-center gap-1 hover:gap-2 transition-all" href="#">
                Mehr erfahren
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-brand-200 transition-all reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="h-40 bg-slate-50 rounded-xl mb-6 flex items-center justify-center overflow-hidden relative">
<svg className="relative z-10 transition-transform duration-[400ms] ease-out group-hover:rotate-[360deg]" fill="none" height="56" stroke="#4f46e5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="56">
<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
<div className="absolute inset-0 bg-grid-slate opacity-50"></div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">
                Kfz-Werkstatt &amp; Handwerk
              </h3>
<p className="text-sm text-slate-500 mb-4">
                Terminbuchung, Rückrufkoordination und Auftragsverwaltung —
                vollautomatisch während Ihre Monteure auf Baustelle sind.
              </p>
<a className="text-sm font-semibold text-brand-600 flex items-center gap-1 hover:gap-2 transition-all" href="#">
                Mehr erfahren
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-brand-200 transition-all reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="h-40 bg-slate-50 rounded-xl mb-6 flex items-center justify-center overflow-hidden relative">
<svg className="relative z-10" fill="none" height="56" stroke="#4f46e5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="56">
<path className="transition-transform duration-[400ms] ease-out group-hover:-translate-y-1.5" d="M3 10L12 3l9 7"></path>
<path d="M5 10v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10"></path>
<path d="M9 23v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6"></path>
</svg>
<div className="absolute inset-0 bg-grid-slate opacity-50"></div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">
                Immobilien
              </h3>
<p className="text-sm text-slate-500 mb-4">
                24/7 Lead-Qualifizierung für Makler. Automatisiertes
                Exposé-Versenden und Besichtigungstermine.
              </p>
<a className="text-sm font-semibold text-brand-600 flex items-center gap-1 hover:gap-2 transition-all" href="#">
                Mehr erfahren
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
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
              Ersetzen Sie Ihr Call Center — nicht nur Ihre Telefonanlage.
            </h2>
<p className="text-slate-600 text-lg leading-relaxed">
              Für Unternehmen mit höherem Volumen bieten wir maßgeschneiderte
              Systeme die tief in Ihre bestehenden Prozesse integrieren.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 reveal-on-scroll">
<div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-brand-200 hover:shadow-lg transition-all flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl mb-6">
                📞
              </div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">
                Ausgehende Kampagnen
              </h3>
<p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">
                Ihr Agent ruft täglich tausende Leads an, qualifiziert sie und
                aktualisiert Ihr CRM automatisch.
              </p>
<div className="px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-semibold rounded-md border border-slate-200 self-start">
                Ab 500 Calls/Tag
              </div>
</div>
<div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-brand-200 hover:shadow-lg transition-all flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl mb-6">
                🔄
              </div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">
                Pipeline Reaktivierung
              </h3>
<p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">
                Kunden die irgendwo feststecken werden automatisch kontaktiert
                und zum nächsten Schritt geführt.
              </p>
<div className="px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-semibold rounded-md border border-slate-200 self-start">
                CRM-integriert
              </div>
</div>
<div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-brand-200 hover:shadow-lg transition-all flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl mb-6">
                🏢
              </div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">
                Call Center Ablösung
              </h3>
<p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">
                Ersetzen Sie 10–50 Mitarbeiter durch ein KI-System das 24/7
                arbeitet, niemals krank wird und jeden Call dokumentiert.
              </p>
<div className="px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-semibold rounded-md border border-slate-200 self-start">
                ROI ab Monat 1
              </div>
</div>
<div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-brand-200 hover:shadow-lg transition-all flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl mb-6">
                ⚡
              </div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">
                Anruf-Triage System
              </h3>
<p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">
                Eingehende Anrufe werden nach Dringlichkeit sortiert. Ihr Team
                bearbeitet nur was wirklich wichtig ist.
              </p>
<div className="px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-semibold rounded-md border border-slate-200 self-start">
                Bis zu 80% Zeitersparnis
              </div>
</div>
</div>
<div className="bg-slate-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 reveal-on-scroll">
<div className="text-center md:text-left">
<h3 className="text-2xl font-semibold text-white max-w-xl">
                Sie verwalten ein Call Center oder haben über 500 Anrufe/Monat?
              </h3>
</div>
<div className="text-center flex flex-col items-center md:items-end w-full md:w-auto shrink-0">
<a className="w-full md:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-full font-semibold transition-all shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2 mb-4" href="#contact">
                Individuelle Beratung anfragen
                <iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</a>
<p className="text-sm font-medium text-slate-400">
                Kostenlos · Unverbindlich · Antwort innerhalb von 24h
              </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-200 bg-white" id="case-study">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
<span className="text-brand-600 font-semibold tracking-wide uppercase text-xs mb-2 block">
              CASE STUDY
            </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Praxisbeispiel: Schlüsseldienst Berlin
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

<div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm reveal-on-scroll">
<h3 className="text-xl font-semibold text-slate-900 mb-4">
                Die Ausgangssituation
              </h3>
<p className="text-slate-600 mb-8 leading-relaxed">
                Ein Berliner Schlüsseldienst-Betrieb mit 3 Technikern verlor
                täglich 6–8 Anrufe. Besonders nachts und am Wochenende — genau
                dann wenn Kunden dringend Hilfe brauchen. Kein Rückruf-Standard,
                kein CRM, keine Struktur.
              </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-700">
<span className="text-base leading-tight mt-0.5">🔴</span>
<span className="font-medium leading-relaxed">
                    8 verpasste Anrufe/Tag
                  </span>
</li>
<li className="flex items-start gap-3 text-slate-700">
<span className="text-base leading-tight mt-0.5">🔴</span>
<span className="font-medium leading-relaxed">
                    0 Reaktion außerhalb Öffnungszeiten
                  </span>
</li>
<li className="flex items-start gap-3 text-slate-700">
<span className="text-base leading-tight mt-0.5">🔴</span>
<span className="font-medium leading-relaxed">
                    Monteure ständig unterbrochen
                  </span>
</li>
</ul>
</div>

<div className="bg-white rounded-3xl p-8 md:p-10 border-2 border-brand-100 shadow-sm reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<h3 className="text-xl font-semibold text-slate-900 mb-4">
                Nach 1 Woche mit Stimmwerk
              </h3>
<p className="text-slate-600 mb-8 leading-relaxed">
                Der Agent wurde in 5 Tagen konfiguriert und geht seitdem 24/7
                ans Telefon. Er nennt Preise, klassifiziert Notfälle und sendet
                dem Dispatcher eine strukturierte WhatsApp-Zusammenfassung.
              </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-700">
<span className="text-base leading-tight mt-0.5">🟢</span>
<span className="font-medium leading-relaxed">
                    +11 zusätzliche Aufträge im ersten Monat
                  </span>
</li>
<li className="flex items-start gap-3 text-slate-700">
<span className="text-base leading-tight mt-0.5">🟢</span>
<span className="font-medium leading-relaxed">
                    100% Erreichbarkeit — auch nachts
                  </span>
</li>
<li className="flex items-start gap-3 text-slate-700">
<span className="text-base leading-tight mt-0.5">🟢</span>
<span className="font-medium leading-relaxed">
                    ROI nach 3 Wochen erreicht
                  </span>
</li>
</ul>
</div>
</div>

<div className="border-t border-slate-200 pt-12 text-center reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<p className="text-xl font-medium text-slate-900 mb-8">
              Ihr Betrieb hat ähnliche Herausforderungen?
            </p>
<a className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 group" href="#contact">
              Kostenloses Erstgespräch buchen
              <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="20"></iconify-icon>
</a>
</div>
</div>
</section>
<section className="py-24 bg-slate-50 border-t border-slate-200" id="pricing">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">
              Transparent. Fair. Monatlich kündbar.
            </h2>
<p className="text-slate-600 text-lg leading-relaxed">
              Der genaue Preis hängt von Ihrem Anrufvolumen ab — wir kalkulieren
              individuell und zeigen Ihnen den ROI vor Vertragsabschluss.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">

<div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm reveal-on-scroll">
<h3 className="text-xl font-semibold text-slate-900 mb-2">Starter</h3>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-semibold tracking-tight text-slate-900">
                  €350
                </span>
<span className="text-slate-500">/ Monat</span>
</div>
<p className="text-sm font-medium text-slate-500 mb-6 pb-6 border-b border-slate-100">
                ab €1.200 Setup
              </p>
<ul className="space-y-4 text-sm text-slate-600 mb-8">
<li className="flex gap-3 items-center">
<iconify-icon className="text-brand-600" icon="lucide:check-circle-2" width="18"></iconify-icon>
                  300 KI-Minuten
                </li>
<li className="flex gap-3 items-center">
<iconify-icon className="text-brand-600" icon="lucide:check-circle-2" width="18"></iconify-icon>
                  1 Agent
                </li>
<li className="flex gap-3 items-center">
<iconify-icon className="text-brand-600" icon="lucide:check-circle-2" width="18"></iconify-icon>
                  Email Support
                </li>
</ul>
<button className="w-full py-3 rounded-xl border border-slate-200 font-semibold text-slate-700 hover:bg-slate-50 transition-colors flex justify-center items-center gap-2">
                Kostenloses Angebot anfragen
                <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>

<div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl relative reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="absolute top-0 right-0 bg-brand-600 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                Popular
              </div>
<h3 className="text-xl font-semibold text-white mb-2">Pro</h3>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-semibold tracking-tight text-white">
                  €450
                </span>
<span className="text-slate-400">/ Monat</span>
</div>
<p className="text-sm font-medium text-slate-400 mb-6 pb-6 border-b border-slate-800">
                ab €1.800 Setup
              </p>
<ul className="space-y-4 text-sm text-slate-300 mb-8">
<li className="flex gap-3 items-center">
<iconify-icon className="text-brand-400" icon="lucide:check-circle-2" width="18"></iconify-icon>
                  1.000 KI-Minuten
                </li>
<li className="flex gap-3 items-center">
<iconify-icon className="text-brand-400" icon="lucide:check-circle-2" width="18"></iconify-icon>
                  3 Agenten
                </li>
<li className="flex gap-3 items-center">
<iconify-icon className="text-brand-400" icon="lucide:check-circle-2" width="18"></iconify-icon>
                  CRM Integration
                </li>
<li className="flex gap-3 items-center">
<iconify-icon className="text-brand-400" icon="lucide:check-circle-2" width="18"></iconify-icon>
                  24/7 Support
                </li>
</ul>
<button className="w-full py-3 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-500 transition-colors flex justify-center items-center gap-2">
                Kostenloses Angebot anfragen
                <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</section>
<section className="py-24 bg-white border-t border-slate-200" id="faq">
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              Ehrliche Antworten auf echte Bedenken.
            </h2>
<p className="text-slate-600 text-lg leading-relaxed">
              Das fragen uns Betriebsinhaber vor der Entscheidung.
            </p>
</div>
<div className="space-y-2 reveal-on-scroll">
<div className="border-b border-slate-200">
<button className="w-full flex items-center justify-between py-5 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="font-semibold text-slate-900 transition-colors faq-title">
                  Klingt das nicht wie ein Roboter?
                </span>
<iconify-icon className="text-slate-400 transition-transform duration-300 faq-icon" icon="lucide:chevron-down" width="20"></iconify-icon>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-300 faq-content">
<p className="text-slate-600 leading-relaxed pt-3 pb-5">
                  Das dachten wir auch — bis wir es selbst getestet haben.
                  Moderne KI-Stimmen klingen heute so natürlich, dass in
                  unabhängigen Tests 85% der Anrufer keinen Unterschied zum
                  Menschen bemerken. Hören Sie es selbst in unserer Live-Demo
                  oben.
                </p>
</div>
</div>
<div className="border-b border-slate-200">
<button className="w-full flex items-center justify-between py-5 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="font-semibold text-slate-900 transition-colors faq-title">
                  Was wenn der Agent etwas Falsches sagt?
                </span>
<iconify-icon className="text-slate-400 transition-transform duration-300 faq-icon" icon="lucide:chevron-down" width="20"></iconify-icon>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-300 faq-content">
<p className="text-slate-600 leading-relaxed pt-3 pb-5">
                  Jeder Agent hat klare Grenzen. Bei unklaren Anfragen sagt er:
                  'Dazu verbinde ich Sie kurz weiter' — und leitet sofort an Sie
                  weiter. Er entscheidet nie allein bei kritischen Themen.
                  Außerdem testen wir jeden Agenten 48 Stunden intern bevor er
                  live geht.
                </p>
</div>
</div>
<div className="border-b border-slate-200">
<button className="w-full flex items-center justify-between py-5 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="font-semibold text-slate-900 transition-colors faq-title">
                  Meine Kunden merken dass es KI ist — ist das ein Problem?
                </span>
<iconify-icon className="text-slate-400 transition-transform duration-300 faq-icon" icon="lucide:chevron-down" width="20"></iconify-icon>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-300 faq-content">
<p className="text-slate-600 leading-relaxed pt-3 pb-5">
                  In der Praxis kaum. Kunden wollen schnell geholfen werden —
                  nicht wissen womit sie sprechen. Wer explizit fragt bekommt
                  eine ehrliche Antwort. Das schafft Vertrauen, keine Skepsis.
                </p>
</div>
</div>
<div className="border-b border-slate-200">
<button className="w-full flex items-center justify-between py-5 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="font-semibold text-slate-900 transition-colors faq-title">
                  Wie lange bis der Agent live ist?
                </span>
<iconify-icon className="text-slate-400 transition-transform duration-300 faq-icon" icon="lucide:chevron-down" width="20"></iconify-icon>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-300 faq-content">
<p className="text-slate-600 leading-relaxed pt-3 pb-5">
                  5–7 Werktage nach unserem Erstgespräch. Sie bekommen zuerst
                  eine Demo zum Testen — erst wenn Sie sagen 'Das ist es'
                  schalten wir auf Ihre echte Nummer um. Kein Risiko.
                </p>
</div>
</div>
<div className="border-b border-slate-200">
<button className="w-full flex items-center justify-between py-5 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="font-semibold text-slate-900 transition-colors faq-title">
                  Was passiert wenn ich kündigen möchte?
                </span>
<iconify-icon className="text-slate-400 transition-transform duration-300 faq-icon" icon="lucide:chevron-down" width="20"></iconify-icon>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-300 faq-content">
<p className="text-slate-600 leading-relaxed pt-3 pb-5">
                  Kein Vertrag, keine Mindestlaufzeit. Sie kündigen per Email
                  mit 2 Wochen Vorlauf. Wir helfen beim sauberen Offboarding —
                  kein Kleingedrucktes, keine Fallstricke.
                </p>
</div>
</div>
</div>
</div>

</section>
<section className="py-24 bg-white border-t border-slate-200" id="roi-calculator">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll is-visible">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">
              Was kostet Sie Ihr Telefon wirklich?
            </h2>
<p className="text-slate-600 text-lg leading-relaxed">
              Berechnen Sie Ihren monatlichen Umsatzverlust durch verpasste
              Anrufe.
            </p>
</div>
<div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 reveal-on-scroll is-visible">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

<div className="space-y-8">
<div>
<label className="block text-sm font-semibold text-slate-900 mb-4">
                    Verpasste Anrufe pro Tag
                  </label>
<div className="flex items-center gap-4">
<input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600" id="missed-calls" max="30" min="1" type="range" value="5"/>
<span className="text-lg font-semibold text-slate-900 w-12 text-right" id="missed-calls-val">
                      5
                    </span>
</div>
</div>
<div>
<label className="block text-sm font-semibold text-slate-900 mb-4">
                    Durchschnittlicher Auftragswert in €
                  </label>
<div className="flex items-center gap-4">
<input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600" id="order-value" max="2000" min="50" step="10" type="range" value="200"/>
<span className="text-lg font-semibold text-slate-900 w-16 text-right" id="order-value-val">
                      200
                    </span>
</div>
</div>
<div>
<label className="block text-sm font-semibold text-slate-900 mb-2">
                    Ihre Branche
                  </label>
<select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 appearance-none font-medium" id="industry-select">
<option>Schlüsseldienst</option>
<option>SHK/Sanitär</option>
<option>Kfz-Werkstatt</option>
<option>Handwerk</option>
<option>Sonstiges</option>
</select>
</div>
</div>

<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col justify-center relative overflow-hidden">
<div className="space-y-6 mb-8 relative z-10">
<div>
<div className="text-sm font-medium text-slate-500 mb-1">
                      Täglicher Verlust
                    </div>
<div className="text-4xl font-semibold tracking-tight text-brand-600" id="daily-loss">
                      €1.000
                    </div>
</div>
<div>
<div className="text-sm font-medium text-slate-500 mb-1">
                      Monatlicher Verlust
                    </div>
<div className="text-4xl font-semibold tracking-tight text-brand-600" id="monthly-loss">
                      €22.000
                    </div>
</div>
<div>
<div className="text-sm font-medium text-slate-500 mb-1">
                      Jährlicher Verlust
                    </div>
<div className="text-4xl font-semibold tracking-tight text-brand-600" id="yearly-loss">
                      €264.000
                    </div>
</div>
</div>
<div className="relative z-10">
<p className="text-sm text-slate-500 mb-6">
                    Stimmwerk kostet Sie ab €350/Monat.
                    <br/>
                    Das ist
                    <span className="font-semibold text-slate-700" id="roi-percentage">
                      1,6%
                    </span>
                    Ihres Verlustes.
                  </p>
<a className="w-full py-3.5 px-6 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors flex justify-center items-center gap-2 text-sm shadow-lg shadow-slate-900/10" href="#contact">
                    Verlust stoppen — kostenlose Demo anfragen
                    <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="py-24 bg-white border-t border-slate-200" id="partner-network">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
<span className="text-brand-600 font-semibold tracking-wide uppercase text-xs mb-2 block">
              PARTNER-NETZWERK
            </span>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">
              Voice AI ist der Anfang.
            </h2>
<p className="text-slate-600 text-lg leading-relaxed">
              Über unser Partnernetzwerk können wir Ihnen auf Wunsch weitere
              digitale Lösungen vermitteln — aus einer Hand, DSGVO-konform.
            </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 reveal-on-scroll">
<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-700 flex items-center justify-center mb-4 shadow-sm">
<iconify-icon icon="lucide:monitor" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">
                Website-Modernisierung
              </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                Professioneller Webauftritt der Vertrauen schafft und Anfragen
                generiert.
              </p>
</div>
<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-700 flex items-center justify-center mb-4 shadow-sm">
<iconify-icon icon="lucide:graduation-cap" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">
                Mitarbeiter-Onboarding
              </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                Schulungsunterlagen damit Ihr Team den Agenten vom ersten Tag an
                versteht.
              </p>
</div>
<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-700 flex items-center justify-center mb-4 shadow-sm">
<iconify-icon icon="lucide:message-square" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">
                WhatsApp &amp; Email Automation
              </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                Automatische Benachrichtigungen, Bestätigungen und Follow-ups.
              </p>
</div>
<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-700 flex items-center justify-center mb-4 shadow-sm">
<iconify-icon icon="lucide:star" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">
                Bewertungs-Automatisierung
              </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                Nach jedem Auftrag automatisch um eine Google-Bewertung bitten.
              </p>
</div>
</div>
<div className="border-t border-slate-100 pt-16 reveal-on-scroll">
<div className="max-w-2xl mx-auto border border-brand-200 bg-brand-50/40 rounded-3xl p-8 sm:p-10 text-center">
<h3 className="text-xl font-semibold text-slate-900 mb-3">
                Haben Sie weitergehende Anforderungen?
              </h3>
<p className="text-slate-600 mb-8">
                Wir hören zu. In einem kurzen Fragebogen können Sie uns
                mitteilen was Sie beschäftigt — wir melden uns innerhalb von 24
                Stunden.
              </p>
<button className="inline-flex items-center gap-2 px-8 py-3.5 border border-brand-600 text-brand-600 rounded-full font-medium hover:bg-brand-50 transition-colors bg-white" id="open-requirements-modal">
                Anforderungen mitteilen
                <iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</section>
<section className="bg-white pt-24 pb-12" id="contact">
<div className="max-w-4xl mx-auto px-6 mb-24">
<div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden reveal-on-scroll">

<div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2"></div>
<h2 className="text-3xl md:text-5xl font-semibold mb-6 relative z-10">
              Bereit für Ihren ersten KI-Agenten?
            </h2>
<p className="text-slate-300 text-lg mb-8 max-w-lg mx-auto relative z-10">
              Kostenlose Demo — kein Vertrag, kein Risiko. Ihr Agent ist in 1
              Woche einsatzbereit.
            </p>
<div className="flex justify-center relative z-10">
<button className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-950 transition-all shadow-xl shadow-slate-900/40 border border-slate-700 flex items-center justify-center gap-2 group">
                Jetzt kostenlose Demo anfragen
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="max-w-2xl mx-auto mt-16 bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xl text-center reveal-on-scroll">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-2">
              Oder direkt einen Termin wählen:
            </h3>
<p className="text-slate-500 text-sm mb-6">
              15-Minuten Demo-Call — kostenlos, unverbindlich.
            </p>
<div className="calendly-inline-widget w-full rounded-xl overflow-hidden" data-url="https://calendly.com/stimmwerk/demo" style={{minWidth: '320px', height: '630px'}}></div>
<p className="text-xs text-slate-400 mt-6">
              Kein Account nötig. Termin direkt bestätigt per Email.
            </p>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 border-t border-slate-100 pt-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
                  S
                </div>
<span className="font-bold text-slate-900">Stimmwerk</span>
</div>
<p className="text-sm text-slate-500">
                KI-Telefonagenten für den deutschen Mittelstand. Gegründet in
                Berlin.
              </p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Produkt</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-brand-600" href="#">Features</a></li>
<li><a className="hover:text-brand-600" href="#">Preise</a></li>
<li><a className="hover:text-brand-600" href="#">API</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Rechtliches</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li>
<a className="hover:text-brand-600" href="javascript:void(0)" onclick="openLegal('impressum'); return false;">
                    Impressum
                  </a>
</li>
<li>
<a className="hover:text-brand-600" href="javascript:void(0)" onclick="openLegal('datenschutz'); return false;">
                    Datenschutz
                  </a>
</li>
<li><a className="hover:text-brand-600" href="#">AGB</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Kontakt</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li>hello@stimmwerk.com</li>
<li>+49 69 123456</li>
<li className="flex gap-4 mt-2">
<iconify-icon className="cursor-pointer hover:text-brand-600" icon="solar:camera-linear"></iconify-icon>
<iconify-icon className="cursor-pointer hover:text-brand-600" icon="solar:brand-linkedin-linear"></iconify-icon>
</li>
</ul>
</div>
</div>
<div className="text-center text-xs text-slate-400 pb-8">
            © 2025 Stimmwerk Consulting · Inh. Sadhu Meewes. Alle Rechte
            vorbehalten.
          </div>
</div>
</section>
</main>


<div className="fixed inset-0 z-[100] hidden items-center justify-center p-4 sm:p-6 opacity-0 transition-opacity duration-300" id="requirements-modal">
<div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" id="requirements-backdrop"></div>
<div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden transform scale-95 transition-transform duration-300" id="requirements-content">
<button className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors z-10" id="close-requirements-modal">
<iconify-icon icon="lucide:x" width="20"></iconify-icon>
</button>
<div className="p-8 max-h-[90vh] overflow-y-auto no-scrollbar relative" id="requirements-form-container">
<div id="requirements-form-wrapper">
<h3 className="text-2xl font-semibold text-slate-900 mb-1 tracking-tight">
              Ihre Anforderungen
            </h3>
<p className="text-slate-500 text-sm mb-8">
              Dauert 2 Minuten. Wir melden uns persönlich.
            </p>
<form className="space-y-5" id="requirements-form">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Name
                  </label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm" placeholder="Ihr Name" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Unternehmen
                  </label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm" placeholder="Firmenname" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Telefon
                </label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm" placeholder="+49 ..." required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3">
                  Was interessiert Sie?
                </label>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-5 h-5 rounded border-slate-300 accent-brand-600" type="checkbox"/>
<span className="text-sm text-slate-700 group-hover:text-slate-900 font-medium transition-colors">
                      Voice AI Agent (Telefonie)
                    </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-5 h-5 rounded border-slate-300 accent-brand-600" type="checkbox"/>
<span className="text-sm text-slate-700 group-hover:text-slate-900 font-medium transition-colors">
                      Website-Modernisierung
                    </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-5 h-5 rounded border-slate-300 accent-brand-600" type="checkbox"/>
<span className="text-sm text-slate-700 group-hover:text-slate-900 font-medium transition-colors">
                      Mitarbeiter-Schulung
                    </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-5 h-5 rounded border-slate-300 accent-brand-600" type="checkbox"/>
<span className="text-sm text-slate-700 group-hover:text-slate-900 font-medium transition-colors">
                      WhatsApp / Email Automation
                    </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-5 h-5 rounded border-slate-300 accent-brand-600" type="checkbox"/>
<span className="text-sm text-slate-700 group-hover:text-slate-900 font-medium transition-colors">
                      Bewertungs-Automatisierung
                    </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-5 h-5 rounded border-slate-300 accent-brand-600" type="checkbox"/>
<span className="text-sm text-slate-700 group-hover:text-slate-900 font-medium transition-colors">
                      Etwas anderes
                    </span>
</label>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Nachricht
                  <span className="text-slate-400 font-normal lowercase">
                    (optional)
                  </span>
</label>
<textarea className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm resize-none" placeholder="Kurz beschreiben was Sie bewegt... (optional)" rows="3"></textarea>
</div>
<div className="pt-2">
<button className="w-full py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-slate-900/10" type="submit">
                  Anfrage absenden
                  <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
<p className="text-xs text-slate-500 text-center mt-4 flex items-center justify-center gap-1.5">
<iconify-icon icon="lucide:lock" width="14"></iconify-icon>
                  Ihre Daten werden nicht weitergegeben. DSGVO-konform.
                </p>
</div>
</form>
</div>
<div className="hidden flex-col items-center justify-center py-12 text-center min-h-[400px]" id="requirements-success">
<div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
<iconify-icon icon="lucide:check" width="32"></iconify-icon>
</div>
<h4 className="text-2xl font-semibold text-slate-900 mb-2">Danke!</h4>
<p className="text-slate-600">
              Wir melden uns innerhalb von 24 Stunden.
            </p>
</div>
</div>
</div>
</div>

<button className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] bg-slate-900 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 shadow-lg btn-pulse hover:bg-slate-800 transition-colors whitespace-nowrap" id="floating-quiz-btn">
      🎙️ Kostenlose Demo anfragen
    </button>
<div aria-hidden="true" className="fixed inset-0 bg-white z-[9999] hidden flex-col w-full h-full overflow-hidden" id="quiz-overlay">
<div className="w-full flex justify-between items-center p-6 shrink-0 relative z-10 bg-white">
<div className="text-sm text-slate-500 font-medium" id="quiz-counter">
          Schritt 1 von 7
        </div>
<button className="text-slate-400 hover:text-slate-900 transition-colors p-2" id="quiz-close">
<iconify-icon icon="lucide:x" width="24"></iconify-icon>
</button>
</div>
<div className="w-full h-1 bg-slate-100 absolute top-0 left-0">
<div className="h-full bg-brand-600 transition-all duration-300 w-0" id="quiz-progress"></div>
</div>
<div className="flex-1 relative overflow-x-hidden overflow-y-auto quiz-container flex flex-col items-center w-full">
<div className="w-full max-w-[640px] px-6 pb-24 pt-4 relative min-h-full flex flex-col justify-center" id="quiz-steps-container">
<div className="quiz-step hidden w-full flex-col" data-step="1">
<h2 className="text-[28px] font-bold tracking-tight text-slate-900 mb-2">
              In welcher Branche sind Sie tätig?
            </h2>
<p className="text-[16px] text-slate-500 mb-8">
              Wählen Sie eine Option — oder tragen Sie Ihre Branche unten ein.
            </p>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6" id="q1-cards">
<button className="quiz-card p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex flex-col items-center justify-center gap-2 transition-all text-center" data-val="Schlüsseldienst">
<span className="text-3xl">🔑</span>
<span className="text-sm font-medium text-slate-700">
                  Schlüsseldienst
                </span>
</button>
<button className="quiz-card p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex flex-col items-center justify-center gap-2 transition-all text-center" data-val="Sanitär &amp; Heizung">
<span className="text-3xl">🔧</span>
<span className="text-sm font-medium text-slate-700">
                  Sanitär &amp; Heizung
                </span>
</button>
<button className="quiz-card p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex flex-col items-center justify-center gap-2 transition-all text-center" data-val="Elektro &amp; PV">
<span className="text-3xl">⚡</span>
<span className="text-sm font-medium text-slate-700">
                  Elektro &amp; PV
                </span>
</button>
<button className="quiz-card p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex flex-col items-center justify-center gap-2 transition-all text-center" data-val="Kfz-Werkstatt">
<span className="text-3xl">🚗</span>
<span className="text-sm font-medium text-slate-700">
                  Kfz-Werkstatt
                </span>
</button>
<button className="quiz-card p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex flex-col items-center justify-center gap-2 transition-all text-center" data-val="Handwerk">
<span className="text-3xl">🏗️</span>
<span className="text-sm font-medium text-slate-700">Handwerk</span>
</button>
<button className="quiz-card p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex flex-col items-center justify-center gap-2 transition-all text-center" data-val="Zahnarzt &amp; KFO">
<span className="text-3xl">🦷</span>
<span className="text-sm font-medium text-slate-700">
                  Zahnarzt &amp; KFO
                </span>
</button>
<button className="quiz-card p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex flex-col items-center justify-center gap-2 transition-all text-center" data-val="Physiotherapie">
<span className="text-3xl">💆</span>
<span className="text-sm font-medium text-slate-700">
                  Physiotherapie
                </span>
</button>
<button className="quiz-card p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex flex-col items-center justify-center gap-2 transition-all text-center" data-val="Arztpraxis">
<span className="text-3xl">🏥</span>
<span className="text-sm font-medium text-slate-700">
                  Arztpraxis
                </span>
</button>
<button className="quiz-card p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex flex-col items-center justify-center gap-2 transition-all text-center" data-val="Rechtsanwalt">
<span className="text-3xl">⚖️</span>
<span className="text-sm font-medium text-slate-700">
                  Rechtsanwalt
                </span>
</button>
<button className="quiz-card p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex flex-col items-center justify-center gap-2 transition-all text-center" data-val="Immobilien">
<span className="text-3xl">🏠</span>
<span className="text-sm font-medium text-slate-700">
                  Immobilien
                </span>
</button>
<button className="quiz-card p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex flex-col items-center justify-center gap-2 transition-all text-center" data-val="Umzug">
<span className="text-3xl">🚚</span>
<span className="text-sm font-medium text-slate-700">Umzug</span>
</button>
<button className="quiz-card p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex flex-col items-center justify-center gap-2 transition-all text-center" data-val="Gebäudereinigung">
<span className="text-3xl">🧹</span>
<span className="text-sm font-medium text-slate-700">
                  Gebäudereinigung
                </span>
</button>
<button className="quiz-card p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex flex-col items-center justify-center gap-2 transition-all text-center" data-val="Kosmetik">
<span className="text-3xl">💇</span>
<span className="text-sm font-medium text-slate-700">Kosmetik</span>
</button>
<button className="quiz-card p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex flex-col items-center justify-center gap-2 transition-all text-center" data-val="Gastronomie">
<span className="text-3xl">🍽️</span>
<span className="text-sm font-medium text-slate-700">
                  Gastronomie
                </span>
</button>
<button className="quiz-card p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex flex-col items-center justify-center gap-2 transition-all text-center" data-val="Fitnessstudio">
<span className="text-3xl">💪</span>
<span className="text-sm font-medium text-slate-700">
                  Fitnessstudio
                </span>
</button>
<button className="quiz-card p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex flex-col items-center justify-center gap-2 transition-all text-center" data-val="E-Commerce">
<span className="text-3xl">📦</span>
<span className="text-sm font-medium text-slate-700">
                  E-Commerce
                </span>
</button>
<button className="quiz-card p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex flex-col items-center justify-center gap-2 transition-all text-center" data-val="Beratung">
<span className="text-3xl">🏢</span>
<span className="text-sm font-medium text-slate-700">Beratung</span>
</button>
<button className="quiz-card p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex flex-col items-center justify-center gap-2 transition-all text-center" data-val="Bildung &amp; Coaching">
<span className="text-3xl">🎓</span>
<span className="text-sm font-medium text-slate-700">
                  Bildung &amp; Coaching
                </span>
</button>
</div>
<div className="w-full h-px bg-slate-100 mb-6"></div>
<label className="block text-xs font-semibold text-slate-500 mb-2">
              Meine Branche ist nicht dabei:
            </label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500 outline-none transition-all" id="q1-input" placeholder="Branche eingeben..." type="text"/>
</div>
<div className="quiz-step hidden w-full flex-col" data-step="2">
<h2 className="text-[28px] font-bold tracking-tight text-slate-900 mb-8">
              Wie groß ist Ihr Betrieb?
            </h2>
<div className="flex flex-col gap-3" id="q2-cards">
<button className="quiz-card p-5 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex flex-col items-start gap-1 transition-all text-left" data-val="Solo-Selbständig">
<span className="font-bold text-slate-900">Solo-Selbständig</span>
<span className="text-[16px] text-slate-500">
                  Ich arbeite alleine
                </span>
</button>
<button className="quiz-card p-5 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex flex-col items-start gap-1 transition-all text-left" data-val="Kleines Team">
<span className="font-bold text-slate-900">Kleines Team</span>
<span className="text-[16px] text-slate-500">2–10 Mitarbeiter</span>
</button>
<button className="quiz-card p-5 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex flex-col items-start gap-1 transition-all text-left" data-val="Mittelgroßer Betrieb">
<span className="font-bold text-slate-900">
                  Mittelgroßer Betrieb
                </span>
<span className="text-[16px] text-slate-500">
                  11–50 Mitarbeiter
                </span>
</button>
<button className="quiz-card p-5 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex flex-col items-start gap-1 transition-all text-left" data-val="Größeres Unternehmen">
<span className="font-bold text-slate-900">
                  Größeres Unternehmen
                </span>
<span className="text-[16px] text-slate-500">
                  Über 50 Mitarbeiter
                </span>
</button>
</div>
</div>
<div className="quiz-step hidden w-full flex-col" data-step="3">
<h2 className="text-[28px] font-bold tracking-tight text-slate-900 mb-8">
              Wie viele Anrufe erhalten Sie täglich im Schnitt?
            </h2>
<div className="flex flex-wrap gap-2 mb-8" id="q3-pills">
<button className="quiz-pill px-5 py-2.5 rounded-full border border-slate-200 hover:border-slate-400 bg-white font-medium text-slate-700 transition-all" data-val="Unter 5">
                Unter 5
              </button>
<button className="quiz-pill px-5 py-2.5 rounded-full border border-slate-200 hover:border-slate-400 bg-white font-medium text-slate-700 transition-all" data-val="5–15">
                5–15
              </button>
<button className="quiz-pill px-5 py-2.5 rounded-full border border-slate-200 hover:border-slate-400 bg-white font-medium text-slate-700 transition-all" data-val="15–30">
                15–30
              </button>
<button className="quiz-pill px-5 py-2.5 rounded-full border border-slate-200 hover:border-slate-400 bg-white font-medium text-slate-700 transition-all" data-val="30–60">
                30–60
              </button>
<button className="quiz-pill px-5 py-2.5 rounded-full border border-slate-200 hover:border-slate-400 bg-white font-medium text-slate-700 transition-all" data-val="Über 60">
                Über 60
              </button>
</div>
<div className="flex items-center gap-4 mb-6">
<div className="flex-1 h-px bg-slate-100"></div>
<span className="text-sm text-slate-400 font-medium">oder</span>
<div className="flex-1 h-px bg-slate-100"></div>
</div>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500 outline-none transition-all" id="q3-input" min="1" placeholder="Genaue Zahl: z.B. 23" type="number"/>
</div>
<div className="quiz-step hidden w-full flex-col" data-step="4">
<h2 className="text-[28px] font-bold tracking-tight text-slate-900 mb-2">
              Was passiert wenn niemand ans Telefon geht?
            </h2>
<p className="text-[16px] text-slate-500 mb-8">
              Mehrfachauswahl möglich
            </p>
<div className="flex flex-col gap-3 mb-6" id="q4-cards">
<label className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white cursor-pointer transition-all quiz-multi-card group">
<input className="mt-1 w-5 h-5 rounded border-slate-300 text-brand-600 focus:ring-brand-500" type="checkbox" value="Voicemail"/>
<span className="font-medium text-slate-700 group-hover:text-slate-900 leading-snug">
                  Voicemail — kaum jemand hinterlässt eine Nachricht
                </span>
</label>
<label className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white cursor-pointer transition-all quiz-multi-card group">
<input className="mt-1 w-5 h-5 rounded border-slate-300 text-brand-600 focus:ring-brand-500" type="checkbox" value="Kunde geht zur Konkurrenz"/>
<span className="font-medium text-slate-700 group-hover:text-slate-900 leading-snug">
                  Kunde ruft sofort die Konkurrenz an
                </span>
</label>
<label className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white cursor-pointer transition-all quiz-multi-card group">
<input className="mt-1 w-5 h-5 rounded border-slate-300 text-brand-600 focus:ring-brand-500" type="checkbox" value="Zu spät zurückgerufen"/>
<span className="font-medium text-slate-700 group-hover:text-slate-900 leading-snug">
                  Wir rufen zurück — aber meistens zu spät
                </span>
</label>
<label className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white cursor-pointer transition-all quiz-multi-card group">
<input className="mt-1 w-5 h-5 rounded border-slate-300 text-brand-600 focus:ring-brand-500" type="checkbox" value="Mitarbeiter unterbrochen"/>
<span className="font-medium text-slate-700 group-hover:text-slate-900 leading-snug">
                  Monteure / Mitarbeiter werden im Einsatz unterbrochen
                </span>
</label>
<label className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white cursor-pointer transition-all quiz-multi-card group">
<input className="mt-1 w-5 h-5 rounded border-slate-300 text-brand-600 focus:ring-brand-500" type="checkbox" value="Verpassen Aufträge"/>
<span className="font-medium text-slate-700 group-hover:text-slate-900 leading-snug">
                  Wir verpassen regelmäßig Aufträge
                </span>
</label>
<label className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white cursor-pointer transition-all quiz-multi-card group">
<input className="mt-1 w-5 h-5 rounded border-slate-300 text-brand-600 focus:ring-brand-500" type="checkbox" value="Keine Lösung"/>
<span className="font-medium text-slate-700 group-hover:text-slate-900 leading-snug">
                  Wir haben aktuell gar keine Lösung
                </span>
</label>
<label className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white cursor-pointer transition-all quiz-multi-card group">
<input className="mt-1 w-5 h-5 rounded border-slate-300 text-brand-600 focus:ring-brand-500" type="checkbox" value="Suchen was Besseres"/>
<span className="font-medium text-slate-700 group-hover:text-slate-900 leading-snug">
                  Wir haben eine Lösung — suchen aber etwas Besseres
                </span>
</label>
</div>
<textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500 outline-none transition-all resize-none" id="q4-input" placeholder="Beschreiben Sie kurz Ihre Situation... (optional)" rows="3"></textarea>
</div>
<div className="quiz-step hidden w-full flex-col" data-step="5">
<h2 className="text-[28px] font-bold tracking-tight text-slate-900 mb-8">
              Was beschäftigt Sie am meisten?
            </h2>
<div className="flex flex-col gap-3 mb-6" id="q5-cards">
<button className="quiz-card p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex items-start gap-4 transition-all text-left" data-val="Verpasste Aufträge">
<span className="text-2xl mt-0.5">😤</span>
<div>
<div className="font-bold text-slate-900">Verpasste Aufträge</div>
<div className="text-sm text-slate-500 mt-1">
                    Anrufe die ins Leere laufen, während alle im Einsatz sind
                  </div>
</div>
</button>
<button className="quiz-card p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex items-start gap-4 transition-all text-left" data-val="Schlechte Erreichbarkeit">
<span className="text-2xl mt-0.5">😴</span>
<div>
<div className="font-bold text-slate-900">
                    Schlechte Erreichbarkeit
                  </div>
<div className="text-sm text-slate-500 mt-1">
                    Nachts, am Wochenende, außerhalb der Öffnungszeiten
                  </div>
</div>
</button>
<button className="quiz-card p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex items-start gap-4 transition-all text-left" data-val="Überlastetes Team">
<span className="text-2xl mt-0.5">😰</span>
<div>
<div className="font-bold text-slate-900">Überlastetes Team</div>
<div className="text-sm text-slate-500 mt-1">
                    Zu viel Zeit für Routineanrufe, zu wenig für echte Arbeit
                  </div>
</div>
</button>
<button className="quiz-card p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex items-start gap-4 transition-all text-left" data-val="Keine Struktur">
<span className="text-2xl mt-0.5">📋</span>
<div>
<div className="font-bold text-slate-900">Keine Struktur</div>
<div className="text-sm text-slate-500 mt-1">
                    Wer hat angerufen? Was wollten sie? Unklar.
                  </div>
</div>
</button>
<button className="quiz-card p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex items-start gap-4 transition-all text-left" data-val="Kein Personal, kein Budget">
<span className="text-2xl mt-0.5">💸</span>
<div>
<div className="font-bold text-slate-900">
                    Kein Personal, kein Budget
                  </div>
<div className="text-sm text-slate-500 mt-1">
                    Neue Stelle zu teuer, aber Problem wächst
                  </div>
</div>
</button>
<button className="quiz-card p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex items-start gap-4 transition-all text-left" data-val="Ich möchte mich beraten lassen">
<span className="text-2xl mt-0.5">🤷</span>
<div>
<div className="font-bold text-slate-900">
                    Ich möchte mich beraten lassen
                  </div>
<div className="text-sm text-slate-500 mt-1">
                    Noch nicht sicher — einfach mal schauen
                  </div>
</div>
</button>
</div>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500 outline-none transition-all" id="q5-input" placeholder="Oder in eigenen Worten..." type="text"/>
</div>
<div className="quiz-step hidden w-full flex-col" data-step="6">
<h2 className="text-[28px] font-bold tracking-tight text-slate-900 mb-8">
              Wann und mit welchem Budget planen Sie?
            </h2>
<label className="block text-sm font-bold text-slate-900 mb-3">
              Wann möchten Sie starten?
            </label>
<div className="flex flex-wrap gap-2 mb-10" id="q6-timing-pills">
<button className="quiz-pill px-5 py-2.5 rounded-full border border-slate-200 hover:border-slate-400 bg-white font-medium text-slate-700 transition-all" data-val="So schnell wie möglich">
                So schnell wie möglich
              </button>
<button className="quiz-pill px-5 py-2.5 rounded-full border border-slate-200 hover:border-slate-400 bg-white font-medium text-slate-700 transition-all" data-val="In 1–3 Monaten">
                In 1–3 Monaten
              </button>
<button className="quiz-pill px-5 py-2.5 rounded-full border border-slate-200 hover:border-slate-400 bg-white font-medium text-slate-700 transition-all" data-val="Ich schaue mich erstmal um">
                Ich schaue mich erstmal um
              </button>
</div>
<label className="block text-sm font-bold text-slate-900 mb-1">
              Welches monatliche Budget schwebt Ihnen vor?
            </label>
<p className="text-[16px] text-slate-500 mb-4">
              Grobe Orientierung reicht — wir beraten Sie individuell.
            </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4" id="q6-budget-cards">
<button className="quiz-card p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex flex-col items-start gap-1 transition-all text-left" data-val="Bis €300/Monat">
<span className="font-bold text-slate-900">Bis €300/Monat</span>
<span className="text-xs text-slate-500">Einstiegslösung</span>
</button>
<button className="quiz-card p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex flex-col items-start gap-1 transition-all text-left" data-val="€300–500/Monat">
<span className="font-bold text-slate-900">€300–500/Monat</span>
<span className="text-xs text-slate-500">Starter-Paket</span>
</button>
<button className="quiz-card p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex flex-col items-start gap-1 transition-all text-left" data-val="€500–1.000/Monat">
<span className="font-bold text-slate-900">€500–1.000/Monat</span>
<span className="text-xs text-slate-500">
                  Pro-Paket mit Integrationen
                </span>
</button>
<button className="quiz-card p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex flex-col items-start gap-1 transition-all text-left" data-val="€1.000–2.500/Monat">
<span className="font-bold text-slate-900">€1.000–2.500/Monat</span>
<span className="text-xs text-slate-500">
                  Umfassende Automatisierung
                </span>
</button>
<button className="quiz-card p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex flex-col items-start gap-1 transition-all text-left" data-val="€2.500–10.000/Monat">
<span className="font-bold text-slate-900">
                  €2.500–10.000/Monat
                </span>
<span className="text-xs text-slate-500">
                  Enterprise / Mehrere Standorte
                </span>
</button>
<button className="quiz-card p-4 rounded-xl border border-slate-200 hover:border-brand-500 bg-white flex flex-col items-start gap-1 transition-all text-left" data-val="Über €10.000/Monat">
<span className="font-bold text-slate-900">Über €10.000/Monat</span>
<span className="text-xs text-slate-500">
                  Komplette digitale Infrastruktur
                </span>
</button>
</div>
<p className="text-xs text-slate-400 text-center">
              Kein Mindestbudget. Wir finden gemeinsam die passende Lösung.
            </p>
</div>
<div className="quiz-step hidden w-full flex-col" data-step="7">
<h2 className="text-[28px] font-bold tracking-tight text-slate-900 mb-2">
              Wie dürfen wir uns melden?
            </h2>
<p className="text-[16px] text-slate-500 mb-8">
              Wir melden uns persönlich — kein Call Center, kein Skript.
            </p>
<div className="space-y-4">
<div>
<label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Name*
                </label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500 outline-none transition-all" id="quiz-name" placeholder="Ihr Vor- und Nachname" type="text"/>
<p className="text-xs text-red-500 mt-1 hidden" id="err-name">
                  Bitte geben Sie Ihren Namen ein.
                </p>
</div>
<div>
<label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Unternehmen*
                </label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500 outline-none transition-all" id="quiz-company" placeholder="Firmenname" type="text"/>
<p className="text-xs text-red-500 mt-1 hidden" id="err-company">
                  Bitte geben Sie Ihren Firmennamen ein.
                </p>
</div>
<div>
<label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Telefon*
                </label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500 outline-none transition-all" id="quiz-phone" placeholder="+49 ..." type="tel"/>
<p className="text-[10px] text-green-600 font-medium mt-1">
                  ✓ Wir rufen einmal an — kein Spam, versprochen.
                </p>
<p className="text-xs text-red-500 mt-1 hidden" id="err-phone">
                  Bitte geben Sie eine gültige Telefonnummer ein.
                </p>
</div>
<div>
<label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  E-Mail (optional)
                </label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500 outline-none transition-all" id="quiz-email" placeholder="ihre@email.de" type="email"/>
</div>
<div>
<label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Wie haben Sie uns gefunden? (optional)
                </label>
<select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500 outline-none transition-all appearance-none bg-white" id="quiz-source">
<option value="">— Bitte wählen —</option>
<option>Google-Suche</option>
<option>Empfehlung / Bekannter</option>
<option>Kaltakquise / Anruf erhalten</option>
<option>Social Media</option>
<option>Sonstiges</option>
</select>
</div>
<div>
<label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Noch etwas? (optional)
                </label>
<textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500 outline-none transition-all resize-none" id="quiz-message" placeholder="Besondere Anforderungen, offene Fragen, oder etwas das wir vor dem Gespräch wissen sollten..." rows="4"></textarea>
</div>
</div>
<button className="w-full bg-slate-900 text-white mt-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 flex justify-center items-center h-16" id="quiz-submit-final">
              Demo anfragen — wir melden uns innerhalb von 24h →
            </button>
<div className="flex flex-wrap justify-center gap-4 text-[10px] sm:text-xs text-slate-500 font-medium mt-4">
<span className="flex items-center gap-1">
<iconify-icon icon="lucide:lock" width="12"></iconify-icon>
                DSGVO-konform
              </span>
<span>·</span>
<span className="flex items-center gap-1">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
                Keine Weitergabe
              </span>
<span>·</span>
<span className="flex items-center gap-1">
<iconify-icon icon="lucide:smartphone-off" width="12"></iconify-icon>
                Kein Spam
              </span>
</div>
</div>
<div className="hidden w-full flex-col items-center text-center py-12" id="quiz-success">
<svg className="mb-6" height="80" viewbox="0 0 80 80" width="80">
<circle className="draw-circle" cx="40" cy="40" fill="none" r="36" stroke="#4f46e5" strokeLinecap="round" strokeWidth="4"></circle>
<path className="draw-check" d="M25 40 l10 10 l20 -20" fill="none" stroke="#4f46e5" strokeLinecap="round" strokeWidth="4"></path>
</svg>
<h2 className="text-[28px] font-bold tracking-tight text-slate-900 mb-2">
              Danke,
              <span id="success-name"></span>
              ! 🎉
            </h2>
<p className="text-slate-600 mb-8 max-w-sm">
              Wir haben alles erhalten und melden uns innerhalb von 24 Stunden
              persönlich unter Ihrer Nummer.
            </p>
<div className="w-full max-w-md bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-8 text-left">
<h3 className="font-bold text-slate-900 mb-4">
                Ihre Angaben im Überblick
              </h3>
<div className="grid grid-cols-2 gap-4 text-sm" id="quiz-summary-content"></div>
</div>
<div className="w-full h-px bg-slate-100 mb-8 max-w-md"></div>
<p className="text-sm font-medium text-slate-500 mb-4">
              Während Sie warten — hören Sie unseren Demo-Agenten:
            </p>
<button className="w-12 h-12 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all shadow-sm" id="quiz-close-demo">
<iconify-icon icon="solar:play-bold" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="w-full bg-white border-t border-slate-100 p-4 sm:p-6 shrink-0 flex justify-between items-center z-10" id="quiz-footer">
<button className="text-sm text-slate-500 hover:text-slate-900 transition-colors invisible font-medium" id="quiz-back">
          ← Zurück
        </button>
<div className="flex gap-4 items-center">
<button className="text-sm text-slate-500 hover:text-slate-900 transition-colors hidden font-medium" id="quiz-skip">
            Überspringen →
          </button>
<button className="bg-slate-900 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-800 transition-all opacity-50 cursor-not-allowed pointer-events-none" id="quiz-next">
            Weiter →
          </button>
</div>
</div>
<div className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-full text-sm shadow-xl hidden items-center gap-4 z-20 whitespace-nowrap" id="quiz-resume-banner">
<span>Weiter machen?</span>
<button className="text-brand-400 font-bold hover:text-brand-300 transition-colors" id="quiz-resume-yes">
          Ja
        </button>
<span className="text-slate-600">|</span>
<button className="text-slate-400 font-medium hover:text-white transition-colors" id="quiz-resume-no">
          Nein, neu starten
        </button>
</div>
</div>

<div className="fixed bottom-6 left-6 z-[100] bg-white rounded-lg shadow-lg border border-slate-100 p-3 max-w-[280px] w-full transform translate-y-[150%] opacity-0 transition-all duration-[400ms] ease-out hidden md:flex items-start gap-3" id="social-proof-toast">
<div className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5" id="sp-avatar">
        M
      </div>
<div className="flex-1 min-w-0 pr-4">
<div className="text-sm font-bold text-slate-900 leading-tight" id="sp-line1">
          Michael R. — Schlüsseldienst
        </div>
<div className="text-xs text-slate-500 mt-1 leading-snug" id="sp-line2">
          Hat vor 2 Stunden eine Demo gebucht 🔑
        </div>
</div>
<button className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 transition-colors p-1" id="sp-close">
<iconify-icon icon="lucide:x" width="14"></iconify-icon>
</button>
</div>

<div className="fixed bottom-0 left-0 w-full bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.05)] py-4 px-6 z-[9998] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left hidden" id="cookie-banner">
<div className="text-sm text-slate-600">
        🍪 Diese Website verwendet keine Tracking-Cookies. Wir nutzen
        ausschließlich technisch notwendige Cookies für den Betrieb der Website.
      </div>
<div className="flex items-center justify-center gap-4 shrink-0">
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="javascript:void(0)" onclick="openLegal('datenschutz')">
          Mehr erfahren
        </a>
<button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors" id="cookie-accept">
          Verstanden
        </button>
</div>
</div>

<div id="legal-overlay">
<div style={{position: 'sticky', top: '0', background: 'white', borderBottom: '1px solid #e2e8f0', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '16px', zIndex: '10'}}>
<button onclick="closeLegal()" style={{display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: '#64748b', cursor: 'pointer', background: 'none', border: 'none', padding: '0'}}>
          ← Zurück zur Website
        </button>
<span id="legal-title" style={{fontWeight: '600', color: '#0f172a'}}></span>
</div>
<div id="legal-content" style={{maxWidth: '680px', margin: '0 auto', padding: '48px 24px'}}></div>
</div>


    </>
  );
}
