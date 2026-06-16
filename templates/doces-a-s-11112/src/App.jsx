import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



{
"@context": "https://schema.org",
"@type": "AgriculturalBusiness",
"name": "DOČEŠ a.s.",
"image": "https://images.unsplash.com/photo-1625246333195-5519a49d75f0",
"telephone": "+420 384 386 111",
"email": "doces@doces.cz",
"address": {
"@type": "PostalAddress",
"streetAddress": "Jarošov nad Nežárkou 239",
"addressLocality": "Jarošov nad Nežárkou",
"postalCode": "378 41",
"addressCountry": "CZ"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 49.1895,
"longitude": 15.0722
},
"url": "http://www.doces.cz",
"foundingDate": "1991"
}



      // Mobile Menu Toggle
      const btn = document.getElementById('mobile-menu-btn');
      const menu = document.getElementById('mobile-menu');
      // Select all links inside the mobile menu to ensure it closes on click
      const mobileLinks = menu.querySelectorAll('a');

      if(btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Hide menu immediately for better UX
                menu.classList.add('hidden');
            });
        });
      }

      // Sticky Nav Style Change on Scroll
      window.addEventListener('scroll', () => {
          const nav = document.getElementById('navbar');
          if (window.scrollY > 20) {
              nav.classList.add('shadow-sm');
              nav.classList.replace('bg-white/80', 'bg-white/95');
          } else {
              nav.classList.remove('shadow-sm');
              nav.classList.replace('bg-white/95', 'bg-white/80');
          }
      });

      // Gallery Toggle Logic
      const toggleBtn = document.getElementById('gallery-toggle');
      const hiddenImages = document.querySelectorAll('.gallery-hidden');
      const galleryText = document.getElementById('gallery-text');
      const galleryIcon = document.getElementById('gallery-icon');
      let isExpanded = false;

      if(toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            isExpanded = !isExpanded;
            hiddenImages.forEach(img => {
                if(isExpanded) {
                    img.classList.remove('hidden');
                    img.classList.add('block', 'animate-[fadeIn_0.5s_ease-out]');
                } else {
                    img.classList.add('hidden');
                    img.classList.remove('block');
                }
            });

            galleryText.textContent = isExpanded ? 'Zobrazit méně' : 'Zobrazit více realizací';
            galleryIcon.setAttribute('icon', isExpanded ? 'lucide:chevron-up' : 'lucide:chevron-down');

            // If collapsing, scroll back to gallery top smoothly
            if(!isExpanded) {
                document.getElementById('galerie').scrollIntoView({behavior: 'smooth'});
            }
        });
      }

      // Reveal on Scroll Animation
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('active');
                  observer.unobserve(entry.target);
              }
          });
      }, observerOptions);

      document.querySelectorAll('.reveal').forEach(el => {
          observer.observe(el);
      });
    


      const careerModal = document.getElementById('career-modal');
      const careerBackdrop = document.getElementById('career-modal-backdrop');
      const careerPanel = document.getElementById('career-modal-panel');
      const modalTitle = document.getElementById('modal-job-title');
      const modalType = document.getElementById('modal-job-type');
      const modalDesc = document.getElementById('modal-job-desc');
      const modalReq = document.getElementById('modal-job-req');
      const navbar = document.getElementById('navbar');

      function openCareerModal(title, type, desc, req) {
          if(modalTitle) modalTitle.textContent = title;
          if(modalType) modalType.textContent = type;
          if(modalDesc) modalDesc.textContent = desc;
          if(modalReq) modalReq.textContent = req;

          // Calculate scrollbar width and compensate
          const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
          document.body.style.paddingRight = scrollbarWidth + 'px';
          if (navbar) navbar.style.paddingRight = scrollbarWidth + 'px';

          document.body.style.overflow = 'hidden';

          careerModal.classList.remove('hidden');
          setTimeout(() => {
              careerBackdrop.classList.remove('opacity-0');
              careerPanel.classList.remove('opacity-0', 'translate-y-4', 'sm:translate-y-0', 'sm:scale-95');
              careerPanel.classList.add('opacity-100', 'translate-y-0', 'sm:scale-100');
          }, 10);
      }

      function closeCareerModal() {
          careerBackdrop.classList.add('opacity-0');
          careerPanel.classList.add('opacity-0', 'translate-y-4', 'sm:translate-y-0', 'sm:scale-95');
          careerPanel.classList.remove('opacity-100', 'translate-y-0', 'sm:scale-100');
          setTimeout(() => {
              careerModal.classList.add('hidden');
              document.body.style.overflow = '';
              document.body.style.paddingRight = '';
              if (navbar) navbar.style.paddingRight = '';
          }, 300);
      }

      function scrollToContact() {
          closeCareerModal();
          setTimeout(() => {
              const contactForm = document.getElementById('contact-form-anchor');
              if(contactForm) {
                  contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
              } else {
                  document.getElementById('kontakt').scrollIntoView({ behavior: 'smooth' });
              }
          }, 350);
      }

      careerModal.addEventListener('click', (e) => {
          if (e.target.closest('#career-modal-panel') === null) {
              closeCareerModal();
          }
      });

      document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && !careerModal.classList.contains('hidden')) {
              closeCareerModal();
          }
      });
    


      (() => {
        const form = document.querySelector('form[action="/send.php"], form[action="send.php"]');
        if (!form) return;

        const alertBox = form.querySelector('#form-alert');

        const submitBtn = form.querySelector('button[type="submit"]');

        const fields = {
          name: form.querySelector('[name="name"]'),
          email: form.querySelector('[name="email"]'),
          phone: form.querySelector('[name="phone"]'),
          message: form.querySelector('[name="message"]'),
          gdpr: form.querySelector('[name="gdpr"]'),
          attachment: form.querySelector('[name="attachment"]')
        };

        function setAlert(kind, text) {
          if (!alertBox) return;
          alertBox.classList.remove('hidden');
          alertBox.textContent = text;

          // stone/green design, ale error musí být vidět
          alertBox.className = 'rounded-xl border px-4 py-3 text-sm';
          if (kind === 'error') {
            alertBox.classList.add('border-red-200','bg-red-50','text-red-800');
          } else {
            alertBox.classList.add('border-green-200','bg-green-50','text-green-800');
          }
        }

        function clearAlert() {
          if (!alertBox) return;
          alertBox.classList.add('hidden');
          alertBox.textContent = '';
        }

        function clearErrors() {
          clearAlert();

          // per-field messages
          form.querySelectorAll('[data-error-for]').forEach(el => {
            el.classList.add('hidden');
            el.textContent = '';
          });

          // remove invalid styles
          Object.values(fields).forEach(el => {
            if (!el) return;
            el.removeAttribute('aria-invalid');
            el.classList.remove('border-red-300','ring-2','ring-red-200');
          });
        }

        function showFieldError(name, msg) {
          const el = fields[name];
          const err = form.querySelector(`[data-error-for="${name}"]`);
          if (err) {
            err.textContent = msg;
            err.classList.remove('hidden');
          }
          if (el) {
            el.setAttribute('aria-invalid', 'true');
            el.classList.add('border-red-300','ring-2','ring-red-200');
          }
        }

        function setLoading(isLoading) {
          if (!submitBtn) return;
          submitBtn.disabled = isLoading;
          if (isLoading) {
            submitBtn.dataset.origText = submitBtn.textContent;
            submitBtn.textContent = 'Odesílám…';
            submitBtn.classList.add('opacity-80','cursor-not-allowed');
          }
          else {
            submitBtn.textContent = submitBtn.dataset.origText || submitBtn.textContent;
            submitBtn.classList.remove('opacity-80','cursor-not-allowed');
          }
        }

        form.addEventListener('submit', async (e) => {
          // progressive enhancement: když JS běží, vyžaduj JSON
          e.preventDefault();
          clearErrors();
          setLoading(true);

          try {
            const fd = new FormData(form);
            // volitelně: fd.set('_json', '1');

            const res = await fetch(form.action, {
              method: 'POST',
              body: fd,
              headers: { 'Accept': 'application/json' }
            });

            const data = await res.json().catch(() => null);
            if (!data) throw new Error('Invalid JSON');

            if (data.success) {
              // čistý redirect na děkujeme (lepší než inline success)
              window.location.href = data.redirect || '/dekujeme.html';
              return;
            }

            // error
            setLoading(false);

            const fieldErrors = data.fieldErrors || {};
            Object.keys(fieldErrors).forEach(k => showFieldError(k, fieldErrors[k]));

            const errs = (data.errors && data.errors.length) ? data.errors : ['Odeslání se nepodařilo. Zkuste to prosím znovu.'];
            setAlert('error', errs[0]);

            // scroll na alert
            if (alertBox) alertBox.scrollIntoView({ behavior: 'smooth', block: 'center' });

          } catch (err) {
            // fallback: normální POST (zachrání i případy, kdy někdo blokuje fetch)
            setLoading(false);
            form.removeEventListener('submit', () => {});
            form.submit();
          }
        });
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-stone-200/50" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">

<div className="flex-shrink-0 flex gap-3 gap-x-3 gap-y-3 items-center">
<img alt="DOČEŠ a.s. Logo" className="w-[112px] h-[56px] object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b6c4d1e-a474-4b93-bfbd-3424d5336519_original.gif" style={{}}/>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-stone-600 hover:text-green-800 transition-colors" href="#o-nas">
              O nás
            </a>
<a className="text-sm font-medium text-stone-600 hover:text-green-800 transition-colors" href="#sluzby">
              Služby
            </a>
<a className="text-sm font-medium text-stone-600 hover:text-green-800 transition-colors" href="#kariera">
              Kariéra
            </a>
<a className="text-sm font-medium text-stone-600 hover:text-green-800 transition-colors" href="#akcionari">
              Akcionáři
            </a>
<a className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white transition-all duration-200 bg-stone-800 rounded-full hover:bg-stone-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900" href="#kontakt">
              Kontaktovat
            </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-stone-500 hover:text-stone-900 focus:outline-none" id="mobile-menu-btn">
<iconify-icon height="24" icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-white border-t border-stone-100" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
<a className="block px-3 py-2 rounded-md text-base font-medium text-stone-700 hover:text-green-800 hover:bg-stone-50" href="#o-nas">
            O nás
          </a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-stone-700 hover:text-green-800 hover:bg-stone-50" href="#sluzby">
            Služby
          </a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-stone-700 hover:text-green-800 hover:bg-stone-50" href="#kariera">
            Kariéra
          </a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-stone-700 hover:text-green-800 hover:bg-stone-50" href="#akcionari">
            Akcionáři
          </a>
<a className="block px-3 py-2 mt-4 text-center rounded-md text-base font-medium bg-green-900 text-white" href="#kontakt">
            Kontaktovat nás
          </a>
</div>
</div>
</nav>

<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Letecký pohled na pole a zemědělskou krajinu" className="w-full h-full object-cover object-center transform scale-105 motion-safe:animate-[pulse_10s_ease-in-out_infinite]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fae072ce-a5e3-4b84-98ac-9970723c1de6_3840w.webp" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/70"></div>
</div>
<div className="z-10 sm:px-6 lg:px-8 reveal text-center max-w-5xl mr-auto ml-auto pr-4 pl-4 relative active">
<span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-green-100 text-xs font-medium uppercase tracking-wider mb-6">
          Od roku 1991
        </span>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-tight tracking-tight">
          Tradice v srdci přírody.
          <br className="hidden md:block"/>
<span className="text-green-200 serif-italic">Kvalita</span>
          pro vaši úrodu.
        </h1>
<p className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Spolehlivý partner v oblasti výroby krmných směsí, výkupu komodit a
          laboratorních analýz. Stavíme na poctivém řemesle a moderních
          technologiích.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-green-800 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-green-900/30 flex items-center justify-center gap-2" href="#sluzby">
            Naše služby
            <iconify-icon height="18" icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 rounded-lg font-medium transition-all duration-300 flex items-center justify-center" href="#kontakt">
            Kontaktovat
          </a>
</div>
</div>

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70">
<iconify-icon className="text-white" height="32" icon="lucide:chevron-down" strokeWidth="1" width="32"></iconify-icon>
</div>
</section>

<section className="overflow-hidden bg-white pt-24 pb-24" id="o-nas">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 items-center">
<div className="reveal active">
<h2 className="text-3xl md:text-4xl font-semibold text-stone-900 mb-6">
              Pevné kořeny v jižních Čechách
            </h2>
<div className="h-1 w-20 bg-green-800 mb-8 rounded-full"></div>
<p className="leading-relaxed text-stone-600">
              Společnost
              <strong className="text-stone-800">DOČEŠ a.s.</strong>
              byla založena v roce 1991. Sídlíme v malebném prostředí Jarošova
              nad Nežárkou, kde navazujeme na dlouholetou zemědělskou tradici
              regionu.
            </p>
<p className="leading-relaxed text-stone-600 mt-4 mb-4">
              Naší prioritou není jen objem, ale především stabilita a důvěra.
              Provozujeme moderní posklizňovou linku a výrobnu krmných směsí,
              která splňuje nejpřísnější evropské normy. Jsme hrdým partnerem
              pro desítky farmářů i velkých podniků.
            </p>
<dl className="grid grid-cols-2 border-stone-100 border-t gap-x-8 gap-y-8">
<div className="">
<dt className="text-sm font-medium text-stone-500">Založeno</dt>
<dd className="mt-1 text-3xl font-semibold text-green-900 tracking-tight">
                  1991
                </dd>
</div>
<div className="">
<dt className="text-sm font-medium text-stone-500">
                  Skladovací kapacita
                </dt>
<dd className="mt-1 text-3xl font-semibold text-green-900 tracking-tight">
                  41 000 t
                </dd>
</div>
</dl>
<div className="bg-stone-50 border-stone-100 border rounded-2xl my-4 px-6 py-6">
<span className="text-xs font-semibold text-stone-400 uppercase tracking-wider block mb-4">
                Držitelé certifikátů
              </span>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="bg-white rounded-xl p-6 shadow-sm border border-stone-100 flex flex-col items-center justify-center text-center gap-3 hover:shadow-md transition-all duration-300">
<img alt="GMP+ B3" className="opacity-80 mix-blend-multiply w-full h-16 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f72a68b7-0931-4bd7-ae73-27a8fc95d706_320w.png" style={{}}/>
<p className="text-xs text-stone-500 font-medium leading-tight">
                    Mezinárodní standard bezpečnosti krmiv
                  </p>
</div>
<div className="bg-white rounded-xl p-6 shadow-sm border border-stone-100 flex flex-col items-center justify-center text-center gap-3 hover:shadow-md transition-all duration-300">
<img alt="ISCC EU" className="opacity-80 mix-blend-multiply w-full h-16 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2bd20a72-294c-4d5b-935c-39dc5b507178_320w.png" style={{}}/>
<p className="text-xs text-stone-500 font-medium leading-tight">
                    Certifikace udržitelnosti a úspor emisí
                  </p>
</div>
</div>
</div>
</div>
<div className="relative reveal delay-200 active">
<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-stone-200">
<img alt="Areál sila a zemědělská technika" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1564505288635-35d201f6df8c?w=1600&amp;q=80" style={{}}/>
</div>

<div className="absolute -bottom-6 -left-6 w-24 h-24 bg-stone-100 rounded-lg -z-10"></div>
<div className="absolute -top-6 -right-6 w-32 h-32 bg-green-50 rounded-full -z-10 blur-xl"></div>
</div>
</div>
</div>
</section>

<section className="bg-stone-50 pt-24 pb-24" id="sluzby">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16 reveal active">
<h2 className="text-3xl md:text-4xl font-semibold text-stone-900 mb-4">
            Naše hlavní činnosti
          </h2>
<p className="text-stone-600">
            Komplexní služby pro moderní zemědělství pod jednou střechou.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal bg-white border-stone-100 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm active">
<div className="flex group-hover:bg-green-800 group-hover:text-white transition-colors text-green-800 bg-green-50 w-12 h-12 rounded-xl mb-6 items-center justify-center">
<iconify-icon height="24" icon="lucide:warehouse" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3">
              Výkup a skladování
            </h3>
<p className="text-stone-600 text-sm leading-relaxed mb-4">
              Disponujeme dvěma betonovými sily s celkovou kapacitou 41 000 tun.
              Zajišťujeme nákup, ošetření a bezpečné skladování rostlinných
              komodit.
            </p>
<ul className="text-xs text-stone-500 space-y-2">
<li className="flex items-center gap-2">
<iconify-icon className="text-green-600" icon="lucide:check"></iconify-icon>
                Aktivní větrání
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-green-600" icon="lucide:check"></iconify-icon>
                Teplotní monitoring
              </li>
</ul>
</div>

<div className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal delay-100 bg-white border-stone-100 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm active">
<div className="w-12 h-12 bg-amber-50 text-amber-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
<iconify-icon className="" height="24" icon="lucide:factory" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3">
              Výroba krmiv
            </h3>
<p className="text-stone-600 text-sm leading-relaxed mb-4">
              Ročně vyrobíme cca 23 000 tun krmných směsí. Specializujeme se na
              optimalizované receptury pro vysokou užitkovost a zdraví zvířat.
            </p>
<ul className="text-xs text-stone-500 space-y-2">
<li className="flex items-center gap-2">
<iconify-icon className="text-amber-600" icon="lucide:check"></iconify-icon>
                Vlastní míchárna
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-amber-600" icon="lucide:check"></iconify-icon>
                Medikované směsi
              </li>
</ul>
</div>

<div className="group bg-white rounded-2xl p-8 shadow-sm border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal delay-200 active">
<div className="w-12 h-12 bg-sky-50 text-sky-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-700 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="lucide:flask-conical" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3">Laboratoř</h3>
<p className="text-stone-600 text-sm leading-relaxed mb-4">
              Provozujeme vlastní laboratoř pro kontrolu kvality vstupních
              surovin i hotových výrobků. Služby nabízíme i externím partnerům.
            </p>
<ul className="text-xs text-stone-500 space-y-2">
<li className="flex items-center gap-2">
<iconify-icon className="text-sky-600" icon="lucide:check"></iconify-icon>
                Rozbory obilovin
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-sky-600" icon="lucide:check"></iconify-icon>
                Kontrola mykotoxinů
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-0" id="produkty">

<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="lg:px-16 flex flex-col text-white bg-amber-50 pt-24 pr-8 pb-24 pl-8 justify-center">
<div className="lg:mx-0 reveal max-w-md mr-auto ml-auto">
<div className="flex gap-3 text-green-400 mb-4 items-center">
<iconify-icon className="" height="24" icon="lucide:wheat" width="24"></iconify-icon>
<span className="uppercase text-sm font-medium text-slate-950 tracking-widest">
                Komodity
              </span>
</div>
<h2 className="md:text-4xl text-3xl font-semibold text-slate-950 mb-6">
              Rostlinné produkty
            </h2>
<p className="font-light text-stone-600 mb-8">
              Vykupujeme a prodáváme široké spektrum zemědělských komodit. Důraz
              klademe na čistotu a potravinářskou kvalitu.
            </p>
<div className="grid grid-cols-2 gap-4 text-slate-950 gap-x-3 gap-y-3">
<div className="flex gap-3 bg-orange-200/30 border-gray-700/10 border rounded-lg pt-3 pr-3 pb-3 pl-3 gap-x-3 gap-y-3 items-center">
<span className="w-1.5 h-1.5 text-slate-950 bg-amber-500 rounded-full"></span>
                Pšenice
              </div>
<div className="flex gap-3 bg-orange-200/30 border-gray-700/10 border rounded-lg pt-3 pr-3 pb-3 pl-3 gap-x-3 gap-y-3 items-center">
<span className="w-1.5 h-1.5 text-slate-950 bg-amber-500 rounded-full"></span>
                Ječmen
              </div>
<div className="flex gap-3 bg-orange-200/30 border-gray-700/10 border rounded-lg pt-3 pr-3 pb-3 pl-3 gap-x-3 gap-y-3 items-center">
<span className="w-1.5 h-1.5 text-slate-950 bg-amber-500 rounded-full"></span>
                Řepka
              </div>
<div className="flex gap-3 bg-orange-200/30 border-gray-700/10 border rounded-lg pt-3 pr-3 pb-3 pl-3 gap-x-3 gap-y-3 items-center">
<span className="w-1.5 h-1.5 text-slate-950 bg-amber-500 rounded-full"></span>
                Oves
              </div>
<div className="flex gap-3 bg-orange-200/30 border-gray-700/10 border rounded-lg pt-3 pr-3 pb-3 pl-3 gap-x-3 gap-y-3 items-center">
<span className="w-1.5 h-1.5 text-slate-950 bg-amber-500 rounded-full"></span>
                Tritikále
              </div>
<div className="flex bg-orange-200/30 border-gray-700/10 border rounded-lg pt-3 pr-3 pb-3 pl-3 gap-x-3 gap-y-3 items-center">
<span className="w-1.5 h-1.5 text-slate-950 bg-amber-500 rounded-full"></span>
                Hrách
              </div>
</div>
</div>
</div>
<div className="h-96 lg:h-auto relative">
<img alt="Detail zralé pšenice" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1694621216902-905423a13491?w=1600&amp;q=80"/>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="lg:h-auto order-2 lg:order-1 h-96 relative min-h-[400px]">
<img alt="Hospodářská zvířata" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="lg:px-16 flex flex-col order-1 lg:order-2 bg-amber-50 pt-20 pr-8 pb-20 pl-8 justify-center">
<div className="reveal max-w-xl mx-auto lg:mx-0">
<div className="flex items-center gap-3 mb-4 text-amber-700">
<iconify-icon height="24" icon="lucide:factory" width="24"></iconify-icon>
<span className="text-sm font-bold uppercase tracking-widest">
                Výroba krmiv
              </span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-stone-900 mb-6 leading-tight">
              Kvalitní krmné směsi na míru
            </h2>
<p className="text-stone-600 mb-8 leading-relaxed">
              Nabízíme kompletní sortiment směsí pro monogastry a prasata, nebo
              dokážeme připravit téměř jakoukoliv recepturu podle individuálních
              požadavků zákazníka, s výjimkou směsí pro přežvýkavce.
            </p>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="bg-white/50 border border-amber-100 rounded-lg p-4 flex items-center gap-3 shadow-sm hover:bg-white transition-colors">
<iconify-icon className="text-amber-600 text-xl" icon="mdi:bird"></iconify-icon>
<span className="text-stone-800 font-medium text-sm">Drůbež</span>
</div>
<div className="bg-white/50 border border-amber-100 rounded-lg p-4 flex items-center gap-3 shadow-sm hover:bg-white transition-colors">
<iconify-icon className="text-amber-600 text-xl" icon="mdi:pig"></iconify-icon>
<span className="text-stone-800 font-medium text-sm">Prasata</span>
</div>
</div>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3">
<div className="bg-amber-200/50 p-1.5 rounded-full text-amber-800">
<iconify-icon height="14" icon="lucide:flask-conical" width="14"></iconify-icon>
</div>
<span className="text-stone-700 text-sm leading-snug">
                  Připravíme téměř jakoukoliv recepturu dle vašich požadavků.
                </span>
</li>
<li className="flex items-center gap-3">
<div className="bg-amber-200/50 p-1.5 rounded-full text-amber-800">
<iconify-icon height="14" icon="lucide:heart-pulse" width="14"></iconify-icon>
</div>
<span className="text-stone-700 text-sm leading-snug">
                  Výroba medikovaných směsí pro maximální zdraví chovu.
                </span>
</li>
</ul>
<div className="bg-white rounded-xl p-6 border border-stone-100 shadow-sm relative overflow-hidden">
<div className="absolute -top-2 -right-2 p-4 opacity-[0.03] text-stone-900">
<iconify-icon height="100" icon="lucide:shopping-bag" width="100"></iconify-icon>
</div>
<h4 className="font-semibold text-stone-900 mb-2 flex items-center gap-2">
<iconify-icon className="text-amber-600" icon="lucide:store"></iconify-icon>
                Podniková prodejna
              </h4>
<p className="text-sm text-stone-600 mb-4">
                Pro menší odběry nabízíme možnost nákupu pytlovaných směsí.
              </p>
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-stone-100 rounded-md text-xs font-semibold text-stone-600">
<iconify-icon icon="lucide:clock" width="14"></iconify-icon>
<span className="">Otevřeno: Po–Pá 7:00 – 15:30</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="laborator">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-stone-900 mb-6">
          Laboratorní služby
        </h2>
<p className="text-lg text-stone-600 mb-12 max-w-2xl mx-auto">
          Kvalita není náhoda. V naší laboratoři provádíme precizní rozbory pro
          potřeby výroby i pro veřejnost a obchodní partnery.
        </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 rounded-xl bg-stone-50 border border-stone-100 text-left">
<h4 className="font-semibold text-stone-900 mb-2">Vstupní analýza</h4>
<p className="text-sm text-stone-500">
              Rychlé stanovení vlhkosti, N-látek, škrobu a příměsí u obilovin.
            </p>
</div>
<div className="p-6 rounded-xl bg-stone-50 border border-stone-100 text-left">
<h4 className="font-semibold text-stone-900 mb-2">Hygiena krmiv</h4>
<p className="text-sm text-stone-500">
              Testování na přítomnost mykotoxinů a mikrobiologickou nezávadnost.
            </p>
</div>
<div className="p-6 rounded-xl bg-stone-50 border border-stone-100 text-left">
<h4 className="font-semibold text-stone-900 mb-2">Poradenství</h4>
<p className="text-sm text-stone-500">
              Interpretace výsledků a doporučení pro úpravu krmných dávek.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-stone-900 py-12 border-t border-stone-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 reveal">
<div className="flex items-center gap-6">
<img alt="Logo EU" className="w-16 h-12 object-contain border border-blue-700/50 bg-blue-900/10 shadow-inner rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c86c0a73-9d1d-42e8-9e8a-0a6f5597da9f_320w.png"/>
<div className="">
<h3 className="text-lg font-medium text-white">
              Projekt modernizace výroby krmných směsí
            </h3>
<p className="text-stone-400 text-sm mt-1">
              Spolufinancováno Evropskou unií. Cílem je zvýšení kvality a
              snížení energetické náročnosti.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-stone-50 pt-24 pb-24" id="galerie">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<div className="">
<h2 className="text-3xl font-semibold text-stone-900">
              Galerie realizací
            </h2>
<p className="text-stone-500 mt-2">Nahlédněte do našeho provozu.</p>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4" id="gallery-grid">

<div className="aspect-square rounded-xl overflow-hidden bg-stone-200 group relative cursor-pointer">
<img alt="Silo detail" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" src="https://images.unsplash.com/photo-1645206974100-dd47dae46387?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
</div>
<div className="aspect-square rounded-xl overflow-hidden bg-stone-200 group relative cursor-pointer">
<img alt="Sklizeň" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" src="https://images.unsplash.com/photo-1566840842463-fdd9ea744d1c?w=800&amp;q=80"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden bg-stone-200 group relative cursor-pointer">
<img alt="Laboratorní zkumavky" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" src="https://images.unsplash.com/photo-1627920769842-6887c6df05ca?w=800&amp;q=80"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden bg-stone-200 group relative cursor-pointer">
<img alt="Pole při západu slunce" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" src="https://images.unsplash.com/photo-1594771804886-a933bb2d609b?w=800&amp;q=80"/>
</div>

<div className="aspect-square rounded-xl overflow-hidden bg-stone-200 hidden gallery-hidden">
<img alt="Galerie 5" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1627920770555-b9bc65b30242?w=2560&amp;q=80"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden bg-stone-200 hidden gallery-hidden">
<img alt="Galerie 6" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1454179083322-198bb4daae41?w=2560&amp;q=80"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden bg-stone-200 hidden gallery-hidden">
<img alt="Galerie 7" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1761350970621-eaf1a05ce35a?w=2560&amp;q=80"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden bg-stone-200 hidden gallery-hidden">
<img alt="Galerie 8" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1635174815612-fd9636f70146?w=800&amp;q=80"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden bg-stone-200 hidden gallery-hidden">
<img alt="Galerie 9" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1762083328496-9401a8e675e3?w=2560&amp;q=80"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden bg-stone-200 hidden gallery-hidden">
<img alt="Galerie 10" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1758609195377-af2c59b235a7?w=2560&amp;q=80"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden bg-stone-200 hidden gallery-hidden">
<img alt="Galerie 11" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1615071017819-62f659090f4c?w=2560&amp;q=80"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden bg-stone-200 hidden gallery-hidden">
<img alt="Galerie 12" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1675221659295-245735d4a156?w=2560&amp;q=80"/>
</div>
</div>
<div className="mt-8 text-center">
<button className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 hover:text-stone-900 transition-colors focus-custom" id="gallery-toggle">
<span id="gallery-text">Zobrazit více realizací</span>
<iconify-icon icon="lucide:chevron-down" id="gallery-icon"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="border-y bg-white border-stone-100 py-8">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<p className="uppercase text-sm font-medium text-stone-400 tracking-widest text-center my-4">
          Důvěřují nám zemědělci i zpracovatelé
        </p>
<div className="flex flex-wrap gap-8 md:gap-16 hover:grayscale-0 transition-all duration-500 opacity-60 mb-10 grayscale gap-x-8 gap-y-8 items-center justify-center">
<img alt="Partner Logo" className="h-10 md:h-12 w-auto object-contain mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d1541f6-6b3f-40bc-8433-46827b4856e3_320w.jpg"/>
<img alt="Partner Logo" className="h-10 md:h-12 w-auto object-contain mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8ff52296-6833-4d40-a30d-f6ad04fd9a67_320w.png"/>
<img alt="Partner Logo" className="md:h-12 mix-blend-multiply w-auto h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b80d6aa3-e34a-4ff7-a112-09352838cdb0_320w.png"/>
<img alt="Partner Logo" className="h-10 md:h-12 w-auto object-contain mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e1a9e0d8-4935-4a1f-8133-a20f6107fd9b_320w.png"/>
<img alt="Partner Logo" className="h-10 md:h-12 w-auto object-contain mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/20d186e0-e9f3-4220-bac6-a568e42a44fc_320w.png"/>
</div>
<div className="border-stone-100 border-t">
<p className="uppercase text-sm font-medium text-stone-400 tracking-widest text-center my-4">
            Naše dceřiné společnosti
          </p>
<div className="flex flex-wrap gap-8 md:gap-16 hover:grayscale-0 transition-all duration-500 opacity-60 grayscale gap-x-8 gap-y-8 items-center justify-center">
<img alt="Subsidiary Logo" className="h-10 md:h-12 w-auto object-contain mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d96ba946-1655-475e-b7e9-2001f744d885_320w.jpg"/>
<img alt="Subsidiary Logo" className="h-10 md:h-12 w-auto object-contain mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7cf7c41a-39d5-4203-bc95-cc6d34cac912_320w.png"/>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white border-stone-100 border-b py-16 relative" id="kariera">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="md:p-12 overflow-hidden group text-center bg-stone-50 border-stone-100 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm">

<div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-green-100/50 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-stone-200/50 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10">
<div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm border border-stone-100 mb-8 text-green-800 transform group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="32" icon="lucide:briefcase" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-stone-900 mb-6 tracking-tight">
              Kariéra v DOČEŠ a.s.
            </h2>
<p className="text-lg text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Jsme stabilní česká společnost s dlouholetou tradicí v
              zemědělství. Neustále rosteme a hledáme talentované kolegy do
              našeho týmu. Nabízíme férové podmínky a zázemí silného partnera.
            </p>
<div className="flex flex-wrap justify-center gap-3 mb-10">
<div className="px-4 py-2 bg-white border border-stone-200 rounded-full text-sm font-medium text-stone-700 shadow-sm flex items-center gap-2">
<iconify-icon className="text-green-600" icon="lucide:shield-check"></iconify-icon>
                Stabilita
              </div>
<div className="px-4 py-2 bg-white border border-stone-200 rounded-full text-sm font-medium text-stone-700 shadow-sm flex items-center gap-2">
<iconify-icon className="text-green-600" icon="lucide:trending-up"></iconify-icon>
                Rozvoj
              </div>
<div className="px-4 py-2 bg-white border border-stone-200 rounded-full text-sm font-medium text-stone-700 shadow-sm flex items-center gap-2">
<iconify-icon className="text-green-600" icon="lucide:users"></iconify-icon>
                Kolektiv
              </div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center justify-center px-8 py-3.5 bg-green-800 hover:bg-green-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-green-900/20 hover:-translate-y-0.5" href="#contact-form-anchor">
<span>Mám zájem o práci</span>
<iconify-icon className="ml-2" height="18" icon="lucide:arrow-down-right" width="18"></iconify-icon>
</a>
<span className="text-sm text-stone-500">
                nebo volejte
                <a className="font-medium text-stone-900 hover:text-green-800 underline decoration-stone-300 underline-offset-4" href="tel:+420384386111">
                  384 386 111
                </a>
</span>
</div>
</div>
</div>
</div>
</section>
<section className="bg-stone-50 pt-24 pb-24" id="kontakt">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

<div className="reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-stone-900 mb-6">
              Kontaktujte nás
            </h2>
<p className="text-stone-600 mb-10">
              Máte dotaz ohledně výkupu, nebo potřebujete vyrobit krmnou směs na
              míru? Jsme tu pro vás.
            </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-green-700 border border-stone-100 shrink-0">
<iconify-icon icon="lucide:map-pin" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="font-semibold text-stone-900">
                    Sídlo společnosti
                  </h4>
<p className="text-stone-600 mt-1">
                    Jarošov nad Nežárkou 239, 378 41 Jarošov nad Nežárkou
                  </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-green-700 border border-stone-100 shrink-0">
<iconify-icon icon="lucide:phone" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="font-semibold text-stone-900">Telefon</h4>
<p className="text-stone-600 mt-1">
<a className="hover:text-green-800 transition-colors" href="tel:+420384386111">
                      +420 384 386 111
                    </a>
</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-green-700 border border-stone-100 shrink-0">
<iconify-icon icon="lucide:mail" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="font-semibold text-stone-900">E-mail</h4>
<p className="text-stone-600 mt-1">
<a className="hover:text-green-800 transition-colors" href="mailto:doces@doces.cz">
                      doces@doces.cz
                    </a>
</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-green-700 border border-stone-100 shrink-0">
<iconify-icon icon="lucide:building-2" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="font-semibold text-stone-900">Firemní údaje</h4>
<p className="text-stone-600 mt-1">IČO: 13503871</p>
<p className="text-stone-600">DIČ: CZ13503871</p>
<p className="text-stone-600">Datová schránka: vvizcya</p>
</div>
</div>
</div>

<div className="mt-10 rounded-2xl overflow-hidden shadow-lg border border-stone-200 h-64 w-full relative group">
<iframe allowfullscreen="" className="" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18802.478102923073!2d15.054944861382234!3d49.18438446835482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470cd070d999b7b1%3A0xe848cedd5b7ac87!2zRG_EjWXFoSBhLnMu!5e0!3m2!1sen!2scz!4v1765706807293!5m2!1sen!2scz" style={{border: '0'}} width="600"></iframe>
<div className="absolute inset-0 pointer-events-none border-4 border-white/50 rounded-2xl"></div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-stone-100 reveal delay-100">
<form action="/send.php" className="space-y-6" enctype="multipart/form-data" id="contact-form-anchor" method="POST">
<div className="hidden rounded-xl border px-4 py-3 text-sm" id="form-alert"></div>
<div className="">
<label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="name">
                  Jméno a příjmení
                </label>
<input className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 focus-custom transition-all" id="name" name="name" placeholder="Jan Novák" type="text"/>
<p className="mt-1 text-sm text-red-700 hidden" data-error-htmlFor="name"></p>
</div>
<div className="">
<label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="phone">
                  Telefon
                </label>
<input className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 focus-custom transition-all" id="phone" name="phone" placeholder="+420 777 000 000" type="tel"/>
<p className="mt-1 text-sm text-red-700 hidden" data-error-htmlFor="phone"></p>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="email">
                  E-mail
                </label>
<input className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 focus-custom transition-all" id="email" name="email" placeholder="jan@firma.cz" type="email"/>
<p className="mt-1 text-sm text-red-700 hidden" data-error-htmlFor="email"></p>
</div>
<div className="">
<label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="message">
                  Zpráva
                </label>
<textarea className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 focus-custom transition-all resize-none" id="message" name="message" placeholder="Mám zájem o..." rows="4"></textarea>
<p className="mt-1 text-sm text-red-700 hidden" data-error-htmlFor="message"></p>
<p className="mt-1 text-sm text-red-700 hidden" data-error-htmlFor="attachment"></p>
</div>
<div className="">
<label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="attachment">
                  Příloha (nepovinné)
                </label>
<label className="flex items-center w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 focus-within:ring-2 focus-within:ring-green-700/20 focus-within:border-green-700 cursor-pointer hover:bg-stone-100 transition-all" htmlFor="attachment">
<span className="mr-4 py-2 px-4 rounded-lg border-0 text-sm font-medium bg-green-50 text-green-700 hover:bg-green-100 transition-colors">
                    Nahrajte soubor
                  </span>
<span className="text-sm text-stone-500 truncate" id="file-name-display"></span>
<input className="sr-only" id="attachment" name="attachment" onchange="document.getElementById('file-name-display').textContent = this.files[0] ? this.files[0].name : ''" type="file"/>
</label>
<p className="text-xs text-stone-500 mt-1">
                  Např. životopis, dokumenty nebo jiné podklady
                </p>
</div>
<div className="flex items-start gap-3">
<div className="flex items-center h-5">
<input className="w-4 h-4 rounded border-stone-300 text-green-700 focus:ring-green-700" id="gdpr" name="gdpr" type="checkbox"/>
</div>
<div className="text-sm">
<label className="font-medium text-stone-600" htmlFor="gdpr">
                    Souhlasím se zpracováním osobních údajů za účelem vyřízení
                    tohoto dotazu a související komunikace.
                  </label>
<p className="mt-2 text-sm text-red-700 hidden" data-error-htmlFor="gdpr"></p>
</div>
</div>
<div aria-hidden="true" style={{position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden'}}>
<label>
                  Nechte prázdné:
                  <input autocomplete="off" name="website" tabindex="-1" type="text"/>
</label>
</div>
<button className="w-full px-6 py-4 bg-gradient-to-r from-green-800 to-green-700 hover:from-green-700 hover:to-green-600 text-white font-medium rounded-lg shadow-lg shadow-green-900/10 transition-all duration-300 transform hover:-translate-y-0.5" type="submit">
                Odeslat nezávaznou poptávku
              </button>
</form>
</div>
</div>
</div>
</section>
<section className="bg-white border-stone-200 border-t pt-16 pb-16" id="akcionari">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
<h3 className="text-2xl md:text-3xl font-semibold text-stone-900 mb-8">
          Informace pro akcionáře
        </h3>
<div className="max-w-2xl mx-auto bg-stone-50 rounded-2xl p-10 border border-stone-100">
<div className="flex flex-col items-center gap-6">
<div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm text-green-800 border border-stone-100">
<iconify-icon icon="lucide:file-text" width="28"></iconify-icon>
</div>
<div className="text-center">
<h4 className="text-xl font-medium text-stone-900 mb-2">
                Pozvánka na valnou hromadu akcionářů
              </h4>
<p className="text-stone-500 mb-8">
                Dokument je připraven ke stažení ve formátu PDF.
              </p>
<a className="inline-flex items-center gap-2 px-8 py-3 bg-stone-900 hover:bg-stone-800 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-stone-900/10 hover:-translate-y-0.5" href="/valna-hromada.pdf" target="_blank">
<span className="">Zobrazit pozvánku</span>
<iconify-icon icon="lucide:download" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div className="col-span-1 md:col-span-1">
<span className="text-white font-semibold tracking-tight text-lg block mb-4">
              DOČEŠ a.s.
            </span>
<p className="text-sm leading-relaxed">
              Spolehlivý partner pro zemědělce v Jihočeském kraji i celé ČR.
              Kvalita, tradice, budoucnost.
            </p>
<p className="leading-relaxed text-sm"></p>
</div>
<div>
<h5 className="text-white font-medium mb-4">Navigace</h5>
<ul className="space-y-2 text-sm">
<li>
<a className="hover:text-white transition-colors" href="#o-nas">
                  O nás
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#sluzby">
                  Služby
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#kariera">
                  Kariéra
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#akcionari">
                  Akcionáři
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#kontakt">
                  Kontakt
                </a>
</li>
</ul>
</div>
<div>
<h5 className="text-white font-medium mb-4">Produkce</h5>
<ul className="space-y-2 text-sm">
<li>
<a className="hover:text-white transition-colors" href="#produkty">
                  Rostlinné produkty
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#produkty">
                  Výroba krmiv
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#laborator">
                  Laboratorní služby
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#galerie">
                  Galerie
                </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
<p className="">© 2026 DOČEŠ a.s. Všechna práva vyhrazena.</p>
<p className="md:mt-0 cursor-pointer mt-2" onclick="window.location.href='/Bley.cz'" role="button">
            Design by BLEY.cz
          </p>
</div>
</div>
</footer>


<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-[100] hidden" id="career-modal" role="dialog">
<div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity opacity-0" id="career-modal-backdrop"></div>
<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
<div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-2xl opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" id="career-modal-panel">
<div className="absolute right-4 top-4 z-10">
<button className="rounded-full bg-white p-2 text-stone-400 hover:text-stone-500 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors" onclick="closeCareerModal()" type="button">
<span className="sr-only">Zavřít</span>
<iconify-icon icon="lucide:x" width="24"></iconify-icon>
</button>
</div>
<div className="px-6 py-8 sm:p-10">
<div className="mb-6">
<h3 className="text-2xl font-semibold leading-6 text-stone-900 tracking-tight mb-2" id="modal-job-title">
                  Pozice
                </h3>
<p className="text-sm text-stone-500">
<span className="font-medium text-stone-900">
                    Pracovní poměr:
                  </span>
<span id="modal-job-type">Typ</span>
</p>
</div>
<div className="space-y-6">
<div>
<h4 className="text-base font-semibold text-stone-900 mb-2">
                    Detail pozice:
                  </h4>
<p className="text-sm text-stone-600 leading-relaxed" id="modal-job-desc">
                    Popis...
                  </p>
</div>
<div>
<h4 className="text-base font-semibold text-stone-900 mb-2">
                    Koho hledáme:
                  </h4>
<p className="text-sm text-stone-600 leading-relaxed" id="modal-job-req">
                    Požadavky...
                  </p>
</div>
</div>
<div className="mt-8 pt-6 border-t border-stone-100">
<p className="text-sm font-medium text-stone-900 mb-4">
                  Zaujala vás tato pozice? Vyplňte kontaktní formulář, přiložte
                  životopis nebo nám zavolejte. Rádi se vám ozveme zpět.
                </p>
<button className="inline-flex w-full justify-center rounded-lg bg-green-800 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-all" onclick="scrollToContact()" type="button">
                  Mám zájem (Kontakt)
                </button>
</div>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
