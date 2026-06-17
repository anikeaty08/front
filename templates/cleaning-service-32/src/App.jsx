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



      function submitContactForm(e) {
          e.preventDefault();
          document.getElementById('contact-form').classList.add('hidden');
          document.getElementById('contact-success').classList.remove('hidden');
          return false;
      }

      function submitApplyForm(e) {
          e.preventDefault();
          document.getElementById('apply-form').classList.add('hidden');
          document.getElementById('apply-success').classList.remove('hidden');
          return false;
      }

      function openMobileMenu() {
          const menu = document.getElementById('mobile-menu');
          const content = document.getElementById('mobile-menu-content');
          menu.classList.remove('hidden');
          // Small delay to allow display block to apply before transition
          setTimeout(() => {
              menu.classList.remove('opacity-0');
              content.classList.remove('translate-x-full');
          }, 10);
      }

      function closeMobileMenu() {
          const menu = document.getElementById('mobile-menu');
          const content = document.getElementById('mobile-menu-content');
          menu.classList.add('opacity-0');
          content.classList.add('translate-x-full');
          setTimeout(() => {
              menu.classList.add('hidden');
          }, 300);
      }

      function openModal(modalId, contentId) {
          const modal = document.getElementById(modalId);
          const content = document.getElementById(contentId);
          modal.classList.remove('hidden');
          modal.classList.add('flex');
          setTimeout(() => {
              modal.classList.remove('opacity-0');
              content.classList.remove('scale-95');
              content.classList.add('scale-100');
          }, 10);
      }

      function closeModal(modalId, contentId, formId, successId) {
          const modal = document.getElementById(modalId);
          const content = document.getElementById(contentId);
          modal.classList.add('opacity-0');
          content.classList.remove('scale-100');
          content.classList.add('scale-95');
          setTimeout(() => {
              modal.classList.add('hidden');
              modal.classList.remove('flex');
              if(formId && successId) {
                  document.getElementById(formId).classList.remove('hidden');
                  document.getElementById(successId).classList.add('hidden');
                  document.getElementById(formId).reset();
              }
          }, 300);
      }

      function openContactModal() { openModal('contact-modal', 'contact-modal-content'); }
      function closeContactModal() { closeModal('contact-modal', 'contact-modal-content', 'contact-form', 'contact-success'); }

      function openApplyModal() { openModal('apply-modal', 'apply-modal-content'); }
      function closeApplyModal() { closeModal('apply-modal', 'apply-modal-content', 'apply-form', 'apply-success'); }

      const serviceData = {
          unterhaltsreinigung: {
              icon: 'lucide:star',
              title: 'Unterhaltsreinigung',
              content: '<h4 class="text-xl font-normal text-slate-900 tracking-tight">Kontinuierliche Pflege für höchste Ansprüche</h4><p>Eine erstklassige Unterhaltsreinigung ist mehr als nur Sauberkeit. Sie ist der Werterhalt Ihrer Räumlichkeiten und die Visitenkarte Ihres Unternehmens.</p><h5 class="text-lg font-normal text-slate-900 mt-8 mb-4">Was Sie von uns erwarten dürfen:</h5><ul class="space-y-3"><li class="flex items-start gap-3"><iconify-icon icon="lucide:check" class="text-slate-400 mt-1 shrink-0"></iconify-icon><span><strong>Individuelle Leistungsverzeichnisse:</strong> Wir passen uns Ihren Abläufen an.</span></li><li class="flex items-start gap-3"><iconify-icon icon="lucide:check" class="text-slate-400 mt-1 shrink-0"></iconify-icon><span><strong>Geschultes Fachpersonal:</strong> Diskretion und ein Auge fürs Detail.</span></li><li class="flex items-start gap-3"><iconify-icon icon="lucide:check" class="text-slate-400 mt-1 shrink-0"></iconify-icon><span><strong>Modernste Ausstattung:</strong> Umweltschonend und effizient.</span></li></ul>'
          },
          glasreinigung: {
              icon: 'lucide:app-window',
              title: 'Glas- & Fensterreinigung',
              content: '<h4 class="text-xl font-normal text-slate-900 tracking-tight">Glanzvolle Akzente durch professionelle Glaspflege</h4><p>Glasflächen sind das Gesicht Ihres Objektes. Ob Schaufenster, Wintergarten oder komplexe Glasfassade: Wir sorgen für rückstandslose Sauberkeit.</p><h5 class="text-lg font-normal text-slate-900 mt-8 mb-4">Was Sie von uns erwarten dürfen:</h5><ul class="space-y-3"><li class="flex items-start gap-3"><iconify-icon icon="lucide:check" class="text-slate-400 mt-1 shrink-0"></iconify-icon><span><strong>Streifenfreie Perfektion:</strong> Klare Sicht ohne Rückstände.</span></li><li class="flex items-start gap-3"><iconify-icon icon="lucide:check" class="text-slate-400 mt-1 shrink-0"></iconify-icon><span><strong>Ganzheitliche Rahmenpflege:</strong> Materialien schonend und gründlich gereinigt.</span></li><li class="flex items-start gap-3"><iconify-icon icon="lucide:check" class="text-slate-400 mt-1 shrink-0"></iconify-icon><span><strong>Sicherheit:</strong> Einhaltung aller Sicherheitsstandards in jeder Höhe.</span></li></ul>'
          },
          grundreinigung: {
              icon: 'lucide:refresh-cw',
              title: 'Grundreinigung',
              content: '<h4 class="text-xl font-normal text-slate-900 tracking-tight">Intensive Pflege: Wenn Sauberkeit in die Tiefe geht</h4><p>Wir befreien Bodenbeläge, Oberflächen und schwer zugängliche Bereiche von hartnäckigen Rückständen und tiefsitzenden Verschmutzungen.</p><h5 class="text-lg font-normal text-slate-900 mt-8 mb-4">Was Sie von uns erwarten dürfen:</h5><ul class="space-y-3"><li class="flex items-start gap-3"><iconify-icon icon="lucide:check" class="text-slate-400 mt-1 shrink-0"></iconify-icon><span><strong>Tiefenwirksame Bodenpflege:</strong> Fachgerechte Reinigung und Versiegelung.</span></li><li class="flex items-start gap-3"><iconify-icon icon="lucide:check" class="text-slate-400 mt-1 shrink-0"></iconify-icon><span><strong>Detailfokus:</strong> Reinigung bis in den letzten Winkel.</span></li><li class="flex items-start gap-3"><iconify-icon icon="lucide:check" class="text-slate-400 mt-1 shrink-0"></iconify-icon><span><strong>Werterhalt:</strong> Verlängerte Lebensdauer Ihrer Ausstattung.</span></li></ul>'
          },
          industriereinigung: {
              icon: 'lucide:factory',
              title: 'Industriereinigung',
              content: '<h4 class="text-xl font-normal text-slate-900 tracking-tight">Effizienz sichern durch professionelle Industriepflege</h4><p>Wir minimieren Ausfallzeiten und steigern die Arbeitssicherheit durch fachgerechte Pflege in Fertigungshallen und Lagerbereichen.</p><h5 class="text-lg font-normal text-slate-900 mt-8 mb-4">Was Sie von uns erwarten dürfen:</h5><ul class="space-y-3"><li class="flex items-start gap-3"><iconify-icon icon="lucide:check" class="text-slate-400 mt-1 shrink-0"></iconify-icon><span><strong>Anlagenreinigung:</strong> Entfernung von Ölen, Fetten und Produktionsrückständen.</span></li><li class="flex items-start gap-3"><iconify-icon icon="lucide:check" class="text-slate-400 mt-1 shrink-0"></iconify-icon><span><strong>Hallenboden:</strong> Intensive Pflege auch bei extremen Verschmutzungen.</span></li><li class="flex items-start gap-3"><iconify-icon icon="lucide:check" class="text-slate-400 mt-1 shrink-0"></iconify-icon><span><strong>Spezialisierte Technik:</strong> Einsatz von Hochleistungsgeräten.</span></li></ul>'
          },
          hygieneartikel: {
              icon: 'lucide:package',
              title: 'Hygieneartikelservice',
              content: '<h4 class="text-xl font-normal text-slate-900 tracking-tight">Volle Bestände, null Aufwand</h4><p>Unser Service übernimmt für Sie die komplette Bevorratung und Bestückung von Waschräumen oder Teeküchen.</p><h5 class="text-lg font-normal text-slate-900 mt-8 mb-4">Was Sie von uns erwarten dürfen:</h5><ul class="space-y-3"><li class="flex items-start gap-3"><iconify-icon icon="lucide:check" class="text-slate-400 mt-1 shrink-0"></iconify-icon><span><strong>Bedarfsgenaue Lieferung:</strong> Pünktlich und zuverlässig.</span></li><li class="flex items-start gap-3"><iconify-icon icon="lucide:check" class="text-slate-400 mt-1 shrink-0"></iconify-icon><span><strong>Hochwertige Produkte:</strong> Namhafte Hersteller für Verbrauchsmaterialien.</span></li><li class="flex items-start gap-3"><iconify-icon icon="lucide:check" class="text-slate-400 mt-1 shrink-0"></iconify-icon><span><strong>Spender-Management:</strong> Installation und Wartung moderner Systeme.</span></li></ul>'
          },
          praxisreinigung: {
              icon: 'lucide:stethoscope',
              title: 'Praxisreinigung',
              content: '<h4 class="text-xl font-normal text-slate-900 tracking-tight">Medizinische Reinheit</h4><p>Unsere spezialisierte Praxisreinigung orientiert sich an strengsten Hygienevorgaben, um Infektionsketten zu unterbrechen.</p><h5 class="text-lg font-normal text-slate-900 mt-8 mb-4">Was Sie von uns erwarten dürfen:</h5><ul class="space-y-3"><li class="flex items-start gap-3"><iconify-icon icon="lucide:check" class="text-slate-400 mt-1 shrink-0"></iconify-icon><span><strong>Desinfizierende Reinigung:</strong> Nach geltenden Hygieneplänen.</span></li><li class="flex items-start gap-3"><iconify-icon icon="lucide:check" class="text-slate-400 mt-1 shrink-0"></iconify-icon><span><strong>Keimfreie Sanitärzonen:</strong> Intensive Pflege für maximale Sicherheit.</span></li><li class="flex items-start gap-3"><iconify-icon icon="lucide:check" class="text-slate-400 mt-1 shrink-0"></iconify-icon><span><strong>Dokumentation:</strong> Nachvollziehbare Checklisten.</span></li></ul>'
          },
          kindergarten: {
              icon: 'lucide:baby',
              title: 'Kitas & Schulen',
              content: '<h4 class="text-xl font-normal text-slate-900 tracking-tight">Verantwortung für die Kleinsten</h4><p>Wir bieten ein Reinigungskonzept, das Schutz und Wohlbefinden vereint – die Grundlage für ein gesundes Aufwachsen.</p><h5 class="text-lg font-normal text-slate-900 mt-8 mb-4">Was Sie von uns erwarten dürfen:</h5><ul class="space-y-3"><li class="flex items-start gap-3"><iconify-icon icon="lucide:check" class="text-slate-400 mt-1 shrink-0"></iconify-icon><span><strong>Kindgerechte Mittel:</strong> Ökologische und allergikerfreundliche Produkte.</span></li><li class="flex items-start gap-3"><iconify-icon icon="lucide:check" class="text-slate-400 mt-1 shrink-0"></iconify-icon><span><strong>Hygiene in Spielbereichen:</strong> Keimarme Umgebung ohne Oberflächen anzugreifen.</span></li></ul>'
          },
          desinfektion: {
              icon: 'lucide:shield-check',
              title: 'Flächendesinfektion',
              content: '<h4 class="text-xl font-normal text-slate-900 tracking-tight">Prävention auf höchstem Niveau</h4><p>Unsere Desinfektion zielt darauf ab, Infektionsketten effektiv zu unterbrechen und die Gesundheit nachhaltig zu schützen.</p><h5 class="text-lg font-normal text-slate-900 mt-8 mb-4">Was Sie von uns erwarten dürfen:</h5><ul class="space-y-3"><li class="flex items-start gap-3"><iconify-icon icon="lucide:check" class="text-slate-400 mt-1 shrink-0"></iconify-icon><span><strong>Wischdesinfektion:</strong> Fokus auf High-Touch-Flächen.</span></li><li class="flex items-start gap-3"><iconify-icon icon="lucide:check" class="text-slate-400 mt-1 shrink-0"></iconify-icon><span><strong>Zertifizierte Wirkstoffe:</strong> Nachgewiesene Wirksamkeit.</span></li><li class="flex items-start gap-3"><iconify-icon icon="lucide:check" class="text-slate-400 mt-1 shrink-0"></iconify-icon><span><strong>Geschultes Personal:</strong> Fachmännischer Umgang mit Lösungen.</span></li></ul>'
          }
      };

      function openServiceModal(serviceKey) {
          const service = serviceData[serviceKey];
          if (!service) return;

          document.getElementById('modal-icon').innerHTML = `<iconify-icon icon="${service.icon}" width="24" height="24" class="text-blue-600"></iconify-icon>`;
          document.getElementById('modal-title').textContent = service.title;
          document.getElementById('modal-content-body').innerHTML = service.content;

          openModal('service-modal', 'service-modal-content');
      }

      function closeServiceModal() {
          closeModal('service-modal', 'service-modal-content');
      }
    
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
      

<div className="fixed inset-0 z-[100] hidden items-center justify-center bg-slate-900/40 backdrop-blur-md p-4 transition-all duration-300 opacity-0" id="service-modal" onclick="if(event.target===this)closeServiceModal()">
<div className="bg-white rounded-3xl max-w-2xl w-full flex flex-col shadow-2xl relative overflow-hidden border border-slate-100 max-h-[85vh] transform scale-95 transition-transform duration-300" id="service-modal-content">

<div className="absolute top-4 right-4 z-20">
<button className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-all" onclick="closeServiceModal()">
<iconify-icon height="20" icon="lucide:x" width="20"></iconify-icon>
</button>
</div>

<div className="p-8 md:p-12 overflow-y-auto">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-blue-50/50 border border-blue-100" id="modal-icon"></div>
<h3 className="text-3xl font-normal text-slate-900 tracking-tight mb-4" id="modal-title"></h3>
<div className="text-lg text-slate-600 leading-relaxed font-light space-y-4" id="modal-content-body"></div>
<div className="mt-10 pt-8 border-t border-slate-100">
<button className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-base font-normal rounded-xl transition-all shadow-sm group" onclick="closeServiceModal();openContactModal()">
              Jetzt Angebot anfordern
              <iconify-icon className="group-hover:translate-x-1 transition-transform" height="18" icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[100] hidden items-center justify-center bg-slate-900/40 backdrop-blur-md p-4 transition-all duration-300 opacity-0" id="apply-modal" onclick="if(event.target===this)closeApplyModal()">
<div className="bg-white rounded-3xl max-w-lg w-full flex flex-col shadow-2xl relative overflow-hidden border border-slate-100 max-h-[85vh] transform scale-95 transition-transform duration-300" id="apply-modal-content">
<div className="absolute top-4 right-4 z-20">
<button className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-all" onclick="closeApplyModal()">
<iconify-icon height="20" icon="lucide:x" width="20"></iconify-icon>
</button>
</div>
<div className="p-8 md:p-10 overflow-y-auto">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-slate-50 border border-slate-100">
<iconify-icon className="text-slate-700" height="22" icon="lucide:briefcase" width="22"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-slate-900 tracking-tight mb-2">
            Jetzt bewerben
          </h3>
<p className="text-base text-slate-500 mb-8 font-light">
            Werden Sie Teil unseres Teams. Füllen Sie das Formular aus.
          </p>
<form className="space-y-4" id="apply-form" onsubmit="return submitApplyForm(event)">
<div>
<label className="block text-sm font-normal text-slate-700 mb-1.5">
                Name
              </label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 text-base font-light focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400" name="name" placeholder="Ihr Name" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-normal text-slate-700 mb-1.5">
                E-Mail
              </label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 text-base font-light focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400" name="email" placeholder="mail@beispiel.de" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-normal text-slate-700 mb-1.5">
                Telefon
              </label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 text-base font-light focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400" name="phone" placeholder="+49 ..." required="" type="tel"/>
</div>
<div>
<label className="block text-sm font-normal text-slate-700 mb-1.5">
                Kurznachricht
              </label>
<textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 text-base font-light focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 resize-none" name="message" placeholder="Kurze Info zu Ihnen..." rows="3"></textarea>
</div>
<button className="w-full px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-base font-normal rounded-xl transition-all shadow-sm mt-4" type="submit">
              Bewerbung senden
            </button>
</form>
<div className="hidden text-center py-10" id="apply-success">
<div className="w-16 h-16 rounded-full bg-green-50 text-green-500 flex items-center justify-center mx-auto mb-4 border border-green-100">
<iconify-icon height="28" icon="lucide:check" width="28"></iconify-icon>
</div>
<h4 className="text-xl font-normal text-slate-900 tracking-tight mb-2">
              Erfolgreich gesendet
            </h4>
<p className="text-base text-slate-500 font-light">
              Wir melden uns in Kürze bei Ihnen.
            </p>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[100] hidden items-center justify-center bg-slate-900/40 backdrop-blur-md p-4 transition-all duration-300 opacity-0" id="contact-modal" onclick="if(event.target===this)closeContactModal()">
<div className="bg-white rounded-3xl max-w-lg w-full flex flex-col shadow-2xl relative overflow-hidden border border-slate-100 max-h-[85vh] transform scale-95 transition-transform duration-300" id="contact-modal-content">
<div className="absolute top-4 right-4 z-20">
<button className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-all" onclick="closeContactModal()">
<iconify-icon height="20" icon="lucide:x" width="20"></iconify-icon>
</button>
</div>
<div className="p-8 md:p-10 overflow-y-auto">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-blue-50 border border-blue-100">
<iconify-icon className="text-blue-600" height="22" icon="lucide:mail" width="22"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-slate-900 tracking-tight mb-2">
            Angebot anfordern
          </h3>
<p className="text-base text-slate-500 mb-8 font-light">
            Hinterlassen Sie Ihre Daten für ein maßgeschneidertes Angebot.
          </p>
<form className="space-y-4" id="contact-form" onsubmit="return submitContactForm(event)">
<div>
<label className="block text-sm font-normal text-slate-700 mb-1.5">
                Firma / Name
              </label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 text-base font-light focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400" name="name" placeholder="Unternehmen oder Name" required="" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-normal text-slate-700 mb-1.5">
                  Telefon
                </label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 text-base font-light focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400" name="phone" placeholder="+49 ..." required="" type="tel"/>
</div>
<div>
<label className="block text-sm font-normal text-slate-700 mb-1.5">
                  E-Mail
                </label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 text-base font-light focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400" name="email" placeholder="mail@firma.de" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-sm font-normal text-slate-700 mb-1.5">
                Ihre Anfrage
              </label>
<textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 text-base font-light focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 resize-none" name="message" placeholder="Wie können wir unterstützen?" rows="3"></textarea>
</div>
<button className="w-full px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-base font-normal rounded-xl transition-all shadow-sm mt-4" type="submit">
              Anfrage absenden
            </button>
</form>
<div className="hidden text-center py-10" id="contact-success">
<div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 border border-blue-100">
<iconify-icon height="28" icon="lucide:check" width="28"></iconify-icon>
</div>
<h4 className="text-xl font-normal text-slate-900 tracking-tight mb-2">
              Erfolgreich gesendet
            </h4>
<p className="text-base text-slate-500 font-light">
              Wir melden uns schnellstmöglich mit einem Angebot.
            </p>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[90] hidden opacity-0 transition-opacity duration-300" id="mobile-menu">
<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onclick="closeMobileMenu()"></div>
<div className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl p-6 pt-24 flex flex-col gap-2 transform translate-x-full transition-transform duration-300" id="mobile-menu-content">
<a className="px-4 py-3 text-lg font-normal text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors" href="#services" onclick="closeMobileMenu()">
          Leistungen
        </a>
<a className="px-4 py-3 text-lg font-normal text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors" href="#einsatzbereiche" onclick="closeMobileMenu()">
          Einsatzbereiche
        </a>
<a className="px-4 py-3 text-lg font-normal text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors" href="#karriere" onclick="closeMobileMenu()">
          Karriere
        </a>
<a className="px-4 py-3 text-lg font-normal text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors" href="#contact" onclick="closeMobileMenu()">
          Kontakt
        </a>
<div className="mt-8 pt-8 border-t border-slate-100">
<button className="w-full px-4 py-3.5 bg-slate-900 text-white text-base font-normal rounded-xl" onclick="closeMobileMenu();openContactModal()">
            Angebot anfordern
          </button>
</div>
</div>
</div>

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100/50 transition-all duration-300">
<div className="flex h-20 max-w-[90rem] mx-auto px-6 lg:px-12 items-center justify-between">
<a className="flex items-center gap-3 cursor-pointer group" href="#">
<div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white">
<iconify-icon height="20" icon="lucide:droplets" width="20"></iconify-icon>
</div>
<span className="text-xl font-normal tracking-tight text-slate-900">
            CSA Service
          </span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#services">
            Leistungen
          </a>
<a className="hover:text-slate-900 transition-colors" href="#einsatzbereiche">
            Einsatzbereiche
          </a>
<a className="hover:text-slate-900 transition-colors" href="#karriere">
            Karriere
          </a>
<a className="hover:text-slate-900 transition-colors" href="#contact">
            Kontakt
          </a>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2" href="tel:021329145330">
<iconify-icon height="16" icon="lucide:phone" width="16"></iconify-icon>
            02132 914 533-0
          </a>
<button className="text-sm font-normal text-white bg-slate-900 hover:bg-slate-800 rounded-full py-2.5 px-6 transition-all shadow-sm" onclick="openContactModal()">
            Angebot anfordern
          </button>
</div>
<button className="md:hidden text-slate-900 p-2 -mr-2" onclick="openMobileMenu()">
<iconify-icon height="24" icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</nav>
<main className="pt-20">

<section className="relative min-h-[85vh] flex items-center overflow-hidden bg-slate-50">
<div className="absolute inset-0 z-0">
<img alt="Sunlit Lobby" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2301&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/80 to-transparent"></div>
</div>
<div className="relative z-10 max-w-[90rem] mx-auto px-6 lg:px-12 w-full">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-white/60 backdrop-blur-md text-slate-600 text-xs font-normal mb-8 uppercase tracking-widest">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
              Premium Facility Services
            </div>
<h1 className="text-6xl md:text-7xl lg:text-[5rem] font-normal text-slate-900 tracking-tight leading-[1.05] mb-8">
              Sichtbare Perfektion.
              <br/>
<span className="text-blue-600">Spürbare Entlastung.</span>
</h1>
<p className="text-xl md:text-2xl text-slate-600 max-w-2xl font-light leading-relaxed mb-12">
              Ihr Partner für anspruchsvolles Gebäudemanagement. Wir schaffen
              repräsentative Sauberkeit für Unternehmen, die Wert auf Details
              legen.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white text-base font-normal rounded-xl transition-all flex items-center justify-center gap-2 group" onclick="openContactModal()">
                Kostenloses Angebot
                <iconify-icon className="group-hover:translate-x-1 transition-transform" height="18" icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
<a className="w-full sm:w-auto px-8 py-4 bg-white/50 backdrop-blur-sm border border-slate-200 hover:border-slate-300 hover:bg-white text-slate-700 text-base font-normal rounded-xl transition-all flex items-center justify-center" href="#services">
                Unsere Leistungen
              </a>
</div>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden bg-[#070b14]" id="services">

<div className="absolute inset-0 opacity-[0.07]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M29 29h2v2h-2v-2zm-2 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-2-2h2v2h-2v-2zm0 4h2v2h-2v-2z\\' fill=\\'%23ffffff\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E\')'}}></div>

<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
<div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
<div className="relative z-10 max-w-[90rem] mx-auto px-6 lg:px-12">
<div className="text-center mb-20 max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl font-normal text-white tracking-tight mb-6">
              Unsere Leistungen
            </h2>
<p className="text-xl font-light text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Ein Portfolio für höchste Ansprüche. Professionelle Lösungen für
              jede Anforderung – von der täglichen Pflege bis zur
              Spezialreinigung.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:-translate-y-1 cursor-pointer" onclick="openServiceModal('unterhaltsreinigung')">
<img alt="Office" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#070b14]/40 via-[#070b14]/80 to-[#070b14]"></div>
<div className="relative z-10 p-8 flex flex-col h-full min-h-[400px]">
<div className="w-12 h-12 rounded-[14px] bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-slate-300 backdrop-blur-md">
<iconify-icon height="20" icon="lucide:star" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-white tracking-tight mb-3">
                  Unterhaltsreinigung
                </h3>
<p className="text-base text-slate-400 font-light leading-relaxed flex-grow">
                  Eine erstklassige Unterhaltsreinigung ist mehr als nur
                  Sauberkeit. Sie ist der Werterhalt Ihrer Räumlichkeiten und
                  die Visitenkarte Ihres Unternehmens.
                </p>
<div className="mt-8 flex items-center gap-2 text-sm font-normal text-blue-400 group-hover:text-blue-300 transition-colors">
                  Mehr erfahren
                  <iconify-icon className="group-hover:translate-x-1 transition-transform" height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:-translate-y-1 cursor-pointer" onclick="openServiceModal('glasreinigung')">
<img alt="Glass Building" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1574259392081-dbe3c19cd15e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#070b14]/40 via-[#070b14]/80 to-[#070b14]"></div>
<div className="relative z-10 p-8 flex flex-col h-full min-h-[400px]">
<div className="w-12 h-12 rounded-[14px] bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-slate-300 backdrop-blur-md">
<iconify-icon height="20" icon="lucide:app-window" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-white tracking-tight mb-3">
                  Glas- &amp; Fensterreinigung
                </h3>
<p className="text-base text-slate-400 font-light leading-relaxed flex-grow">
                  Glasflächen sind das Gesicht Ihres Objektes. Ob Schaufenster,
                  Wintergarten oder komplexe Glasfassade: Wir sorgen für
                  rückstandslose Sauberkeit.
                </p>
<div className="mt-8 flex items-center gap-2 text-sm font-normal text-blue-400 group-hover:text-blue-300 transition-colors">
                  Mehr erfahren
                  <iconify-icon className="group-hover:translate-x-1 transition-transform" height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:-translate-y-1 cursor-pointer" onclick="openServiceModal('grundreinigung')">
<img alt="Cleaning Floor" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#070b14]/40 via-[#070b14]/80 to-[#070b14]"></div>
<div className="relative z-10 p-8 flex flex-col h-full min-h-[400px]">
<div className="w-12 h-12 rounded-[14px] bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-slate-300 backdrop-blur-md">
<iconify-icon height="20" icon="lucide:refresh-cw" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-white tracking-tight mb-3">
                  Grundreinigung
                </h3>
<p className="text-base text-slate-400 font-light leading-relaxed flex-grow">
                  Wir befreien Bodenbeläge, Oberflächen und schwer zugängliche
                  Bereiche von hartnäckigen Rückständen und tiefsitzenden
                  Verschmutzungen.
                </p>
<div className="mt-8 flex items-center gap-2 text-sm font-normal text-blue-400 group-hover:text-blue-300 transition-colors">
                  Mehr erfahren
                  <iconify-icon className="group-hover:translate-x-1 transition-transform" height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:-translate-y-1 cursor-pointer" onclick="openServiceModal('industriereinigung')">
<img alt="Factory" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#070b14]/40 via-[#070b14]/80 to-[#070b14]"></div>
<div className="relative z-10 p-8 flex flex-col h-full min-h-[400px]">
<div className="w-12 h-12 rounded-[14px] bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-slate-300 backdrop-blur-md">
<iconify-icon height="20" icon="lucide:factory" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-white tracking-tight mb-3">
                  Industriereinigung
                </h3>
<p className="text-base text-slate-400 font-light leading-relaxed flex-grow">
                  Wir minimieren Ausfallzeiten und steigern die
                  Arbeitssicherheit durch fachgerechte Pflege in
                  Fertigungshallen und Lagerbereichen.
                </p>
<div className="mt-8 flex items-center gap-2 text-sm font-normal text-blue-400 group-hover:text-blue-300 transition-colors">
                  Mehr erfahren
                  <iconify-icon className="group-hover:translate-x-1 transition-transform" height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:-translate-y-1 cursor-pointer" onclick="openServiceModal('hygieneartikel')">
<img alt="Gloves" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#070b14]/40 via-[#070b14]/80 to-[#070b14]"></div>
<div className="relative z-10 p-8 flex flex-col h-full min-h-[400px]">
<div className="w-12 h-12 rounded-[14px] bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-slate-300 backdrop-blur-md">
<iconify-icon height="20" icon="lucide:package" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-white tracking-tight mb-3">
                  Hygieneartikelservice
                </h3>
<p className="text-base text-slate-400 font-light leading-relaxed flex-grow">
                  Unser Service übernimmt für Sie die komplette Bevorratung und
                  Bestückung von Waschräumen oder Teeküchen.
                </p>
<div className="mt-8 flex items-center gap-2 text-sm font-normal text-blue-400 group-hover:text-blue-300 transition-colors">
                  Mehr erfahren
                  <iconify-icon className="group-hover:translate-x-1 transition-transform" height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:-translate-y-1 cursor-pointer" onclick="openServiceModal('praxisreinigung')">
<img alt="Medical" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#070b14]/40 via-[#070b14]/80 to-[#070b14]"></div>
<div className="relative z-10 p-8 flex flex-col h-full min-h-[400px]">
<div className="w-12 h-12 rounded-[14px] bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-slate-300 backdrop-blur-md">
<iconify-icon height="20" icon="lucide:stethoscope" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-white tracking-tight mb-3">
                  Praxisreinigung
                </h3>
<p className="text-base text-slate-400 font-light leading-relaxed flex-grow">
                  Unsere spezialisierte Praxisreinigung orientiert sich an
                  strengsten Hygienevorgaben, um Infektionsketten zu
                  unterbrechen.
                </p>
<div className="mt-8 flex items-center gap-2 text-sm font-normal text-blue-400 group-hover:text-blue-300 transition-colors">
                  Mehr erfahren
                  <iconify-icon className="group-hover:translate-x-1 transition-transform" height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:-translate-y-1 cursor-pointer" onclick="openServiceModal('kindergarten')">
<img alt="School" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#070b14]/40 via-[#070b14]/80 to-[#070b14]"></div>
<div className="relative z-10 p-8 flex flex-col h-full min-h-[400px]">
<div className="w-12 h-12 rounded-[14px] bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-slate-300 backdrop-blur-md">
<iconify-icon height="20" icon="lucide:baby" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-white tracking-tight mb-3">
                  Kitas &amp; Schulen
                </h3>
<p className="text-base text-slate-400 font-light leading-relaxed flex-grow">
                  Wir bieten ein Reinigungskonzept, das Schutz und Wohlbefinden
                  vereint – die Grundlage für ein gesundes Aufwachsen.
                </p>
<div className="mt-8 flex items-center gap-2 text-sm font-normal text-blue-400 group-hover:text-blue-300 transition-colors">
                  Mehr erfahren
                  <iconify-icon className="group-hover:translate-x-1 transition-transform" height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:-translate-y-1 cursor-pointer" onclick="openServiceModal('desinfektion')">
<img alt="Desinfektion" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1584820927498-cafe2c118128?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#070b14]/40 via-[#070b14]/80 to-[#070b14]"></div>
<div className="relative z-10 p-8 flex flex-col h-full min-h-[400px]">
<div className="w-12 h-12 rounded-[14px] bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-slate-300 backdrop-blur-md">
<iconify-icon height="20" icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-white tracking-tight mb-3">
                  Flächendesinfektion
                </h3>
<p className="text-base text-slate-400 font-light leading-relaxed flex-grow">
                  Unsere Desinfektion zielt darauf ab, Infektionsketten effektiv
                  zu unterbrechen und die Gesundheit nachhaltig zu schützen.
                </p>
<div className="mt-8 flex items-center gap-2 text-sm font-normal text-blue-400 group-hover:text-blue-300 transition-colors">
                  Mehr erfahren
                  <iconify-icon className="group-hover:translate-x-1 transition-transform" height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white border-b border-slate-100" id="einsatzbereiche">
<div className="max-w-[90rem] mx-auto px-6 lg:px-12">
<div className="text-center mb-20 max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight mb-6">
              Einsatzbereiche
            </h2>
<p className="text-xl font-light text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Vielseitige Expertise für anspruchsvolle Branchen. Wir betreuen
              ein breites Spektrum an Kunden.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-10 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all duration-300">
<div className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-6 bg-white border border-slate-200 shadow-sm text-slate-700">
<iconify-icon height="20" icon="lucide:briefcase" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-normal text-slate-900 tracking-tight mb-3">
                Business &amp; Finanzen
              </h3>
<p className="text-base text-slate-500 leading-relaxed font-light">
                Steuerberatungs- und Anwaltskanzleien, Banken, Büros und
                Immobilienverwaltungen.
              </p>
</div>
<div className="p-10 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all duration-300">
<div className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-6 bg-white border border-slate-200 shadow-sm text-slate-700">
<iconify-icon height="20" icon="lucide:stethoscope" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-normal text-slate-900 tracking-tight mb-3">
                Medizin &amp; Pflege
              </h3>
<p className="text-base text-slate-500 leading-relaxed font-light">
                Arztpraxen, Zahnärzte, Physiotherapiezentren und medizinische
                Labore.
              </p>
</div>
<div className="p-10 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all duration-300">
<div className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-6 bg-white border border-slate-200 shadow-sm text-slate-700">
<iconify-icon height="20" icon="lucide:factory" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-normal text-slate-900 tracking-tight mb-3">
                Industrie &amp; Handwerk
              </h3>
<p className="text-base text-slate-500 leading-relaxed font-light">
                Produktionshallen, Lagerstätten, Werkstätten und industrielle
                Anlagen.
              </p>
</div>
<div className="p-10 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all duration-300">
<div className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-6 bg-white border border-slate-200 shadow-sm text-slate-700">
<iconify-icon height="20" icon="lucide:graduation-cap" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-normal text-slate-900 tracking-tight mb-3">
                Bildung &amp; Soziales
              </h3>
<p className="text-base text-slate-500 leading-relaxed font-light">
                Kindergärten, Schulen, Weiterbildungseinrichtungen und Kitas.
              </p>
</div>
<div className="p-10 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all duration-300">
<div className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-6 bg-white border border-slate-200 shadow-sm text-slate-700">
<iconify-icon height="20" icon="lucide:shopping-bag" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-normal text-slate-900 tracking-tight mb-3">
                Handel &amp; Gastronomie
              </h3>
<p className="text-base text-slate-500 leading-relaxed font-light">
                Einzelhandelsgeschäfte, Showrooms, Autohäuser und Restaurants.
              </p>
</div>
<div className="p-10 rounded-[2rem] border border-dashed border-slate-300 hover:border-slate-400 bg-white transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer group" onclick="openContactModal()">
<div className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-4 bg-slate-50 border border-slate-100 text-slate-600 group-hover:bg-slate-100 transition-colors">
<iconify-icon height="20" icon="lucide:mail" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-normal text-slate-900 tracking-tight mb-2">
                Ihre Branche?
              </h3>
<p className="text-base text-slate-500 font-light">
                Individuelles Konzept anfragen.
              </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-50 border-b border-slate-100" id="karriere">
<div className="max-w-[90rem] mx-auto px-6 lg:px-12">
<div className="text-center mb-20 max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight mb-6">
              Karriere bei uns
            </h2>
<p className="text-xl font-light text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Werden Sie Teil unseres Teams. Wir bieten sichere Arbeitsplätze
              und faire Bedingungen im Raum NRW.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
<div className="bg-white border border-slate-100 rounded-[2rem] p-10 shadow-sm">
<h3 className="text-xl font-normal text-slate-900 tracking-tight mb-6">
                Dein Profil
              </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-600 text-base font-light">
<iconify-icon className="text-slate-400 mt-0.5" height="18" icon="lucide:check" width="18"></iconify-icon>
<span>Blick für Details &amp; Sauberkeit</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base font-light">
<iconify-icon className="text-slate-400 mt-0.5" height="18" icon="lucide:check" width="18"></iconify-icon>
<span>Zuverlässigkeit &amp; Pünktlichkeit</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base font-light">
<iconify-icon className="text-slate-400 mt-0.5" height="18" icon="lucide:check" width="18"></iconify-icon>
<span>Gepflegtes Auftreten</span>
</li>
</ul>
</div>
<div className="bg-white border border-slate-100 rounded-[2rem] p-10 shadow-sm">
<h3 className="text-xl font-normal text-slate-900 tracking-tight mb-6">
                Unser Angebot
              </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-600 text-base font-light">
<iconify-icon className="text-slate-400 mt-0.5" height="18" icon="lucide:check" width="18"></iconify-icon>
<span>Faire &amp; pünktliche Bezahlung</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base font-light">
<iconify-icon className="text-slate-400 mt-0.5" height="18" icon="lucide:check" width="18"></iconify-icon>
<span>Flexible Arbeitszeiten</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base font-light">
<iconify-icon className="text-slate-400 mt-0.5" height="18" icon="lucide:check" width="18"></iconify-icon>
<span>Wertschätzendes Klima</span>
</li>
</ul>
</div>
<div className="bg-white border border-slate-100 rounded-[2rem] p-10 shadow-sm">
<h3 className="text-xl font-normal text-slate-900 tracking-tight mb-6">
                Einsatzorte
              </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-600 text-base font-light">
<iconify-icon className="text-slate-400 mt-0.5" height="18" icon="lucide:check" width="18"></iconify-icon>
<span>Moderne Büros &amp; Kanzleien</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base font-light">
<iconify-icon className="text-slate-400 mt-0.5" height="18" icon="lucide:check" width="18"></iconify-icon>
<span>Medizinische Einrichtungen</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base font-light">
<iconify-icon className="text-slate-400 mt-0.5" height="18" icon="lucide:check" width="18"></iconify-icon>
<span>Schulen &amp; Kindergärten</span>
</li>
</ul>
</div>
</div>
<div className="text-center">
<button className="inline-flex items-center justify-center px-10 py-4 bg-slate-900 text-white hover:bg-slate-800 text-base font-normal rounded-xl transition-all shadow-sm" onclick="openApplyModal()">
              Jetzt bewerben
            </button>
</div>
</div>
</section>
</main>

<footer className="bg-white pt-24 pb-12 mt-auto border-t border-slate-100">
<div className="max-w-[90rem] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="flex flex-col gap-6">
<div className="flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon height="16" icon="lucide:droplets" width="16"></iconify-icon>
</div>
<span className="text-lg font-normal tracking-tight text-slate-900">
                CSA Service
              </span>
</div>
<p className="text-sm font-light text-slate-500 leading-relaxed max-w-xs">
              Ihr Partner für anspruchsvolles Gebäudemanagement in Meerbusch und
              ganz NRW.
            </p>
</div>

<div>
<h4 className="text-sm font-normal text-slate-900 mb-6 tracking-tight">
              Unternehmen
            </h4>
<ul className="flex flex-col gap-3">
<li>
<a className="text-sm font-light text-slate-500 hover:text-slate-900 transition-colors" href="#">
                  Über Uns
                </a>
</li>
<li>
<a className="text-sm font-light text-slate-500 hover:text-slate-900 transition-colors" href="#karriere">
                  Karriere
                </a>
</li>
<li>
<a className="text-sm font-light text-slate-500 hover:text-slate-900 transition-colors" href="#">
                  Impressum
                </a>
</li>
<li>
<a className="text-sm font-light text-slate-500 hover:text-slate-900 transition-colors" href="#">
                  Datenschutz
                </a>
</li>
</ul>
</div>

<div>
<h4 className="text-sm font-normal text-slate-900 mb-6 tracking-tight">
              Services
            </h4>
<ul className="flex flex-col gap-3">
<li>
<button className="text-sm font-light text-slate-500 hover:text-slate-900 transition-colors" onclick="openServiceModal('unterhaltsreinigung')">
                  Unterhaltsreinigung
                </button>
</li>
<li>
<button className="text-sm font-light text-slate-500 hover:text-slate-900 transition-colors" onclick="openServiceModal('glasreinigung')">
                  Glasreinigung
                </button>
</li>
<li>
<button className="text-sm font-light text-slate-500 hover:text-slate-900 transition-colors" onclick="openServiceModal('industriereinigung')">
                  Industrieservice
                </button>
</li>
</ul>
</div>

<div>
<h4 className="text-sm font-normal text-slate-900 mb-6 tracking-tight">
              Kontakt
            </h4>
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-3 text-sm font-light text-slate-500">
<iconify-icon className="text-slate-400 mt-0.5 shrink-0" height="16" icon="lucide:map-pin" width="16"></iconify-icon>
<span>
                  CSA Cleaning Service
                  <br/>
                  Meerbusch, Deutschland
                </span>
</li>
<li>
<a className="flex items-center gap-3 text-sm font-light text-slate-500 hover:text-slate-900 transition-colors" href="tel:021329145330">
<iconify-icon className="text-slate-400 shrink-0" height="16" icon="lucide:phone" width="16"></iconify-icon>
<span>02132 / 914 533-0</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 text-sm font-light text-slate-500 hover:text-slate-900 transition-colors" href="mailto:info@csa-service.de">
<iconify-icon className="text-slate-400 shrink-0" height="16" icon="lucide:mail" width="16"></iconify-icon>
<span>info@csa-service.de</span>
</a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-100">
<p className="text-sm font-light text-slate-400">
            © 2025 CSA Service. Alle Rechte vorbehalten.
          </p>
</div>
</div>
</footer>


    </>
  );
}
