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



        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
            }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
            document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
            
            const header = document.getElementById('navbar');
            const navBg = document.getElementById('nav-bg');
            const navBrand = document.getElementById('nav-brand');
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    navBrand.classList.replace('py-4', 'py-2');
                    navBg.style.backgroundColor = 'var(--nav-bg)';
                } else {
                    navBrand.classList.replace('py-2', 'py-4');
                    navBg.style.backgroundColor = 'transparent';
                }
            });

            const themeToggle = document.getElementById('theme-toggle');
            const savedTheme = localStorage.getItem('theme');
            const systemLight = window.matchMedia('(prefers-color-scheme: light)').matches;
            
            if (savedTheme === 'light' || (!savedTheme && systemLight)) {
                document.body.classList.add('light-theme');
                themeToggle.innerHTML = '<i data-lucide="moon" stroke-width="1.5" class="w-5 h-5"></i>';
                lucide.createIcons();
            }

            themeToggle.addEventListener('click', () => {
                document.body.classList.toggle('light-theme');
                
                if (document.body.classList.contains('light-theme')) {
                    themeToggle.innerHTML = '<i data-lucide="moon" stroke-width="1.5" class="w-5 h-5"></i>';
                    localStorage.setItem('theme', 'light');
                } else {
                    themeToggle.innerHTML = '<i data-lucide="sun" stroke-width="1.5" class="w-5 h-5"></i>';
                    localStorage.setItem('theme', 'dark');
                }
                lucide.createIcons();
            });

            const heroSection = document.getElementById('hero-section');
            if (heroSection) {
                heroSection.addEventListener('mousemove', (e) => {
                    const rect = heroSection.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    heroSection.style.setProperty('--mouse-x', `${x}px`);
                    heroSection.style.setProperty('--mouse-y', `${y}px`);
                });
            }

            const galleryItems = document.querySelectorAll('.sq-item');
            const lightbox = document.getElementById('lightbox');
            const lightboxContent = document.getElementById('lightbox-content');
            const lightboxClose = document.getElementById('lightbox-close');

            function openLightbox(type, src) {
                lightbox.classList.remove('hidden');
                setTimeout(() => lightbox.classList.add('active'), 10); 
                
                if (type === 'image') {
                    lightboxContent.innerHTML = `<img src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200&auto=format&fit=crop" alt="Gallery Image" class="w-full h-auto object-contain">`;
                } else if (type === 'video') {
                    lightboxContent.innerHTML = `<iframe src="${src}" class="w-full aspect-video border-0 rounded-2xl shadow-2xl" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
                }
                document.body.style.overflow = 'hidden';
            }

            function closeLightbox() {
                lightbox.classList.remove('active');
                setTimeout(() => {
                    lightbox.classList.add('hidden');
                    lightboxContent.innerHTML = '';
                    document.body.style.overflow = '';
                }, 300);
            }

            galleryItems.forEach(item => {
                item.addEventListener('click', () => {
                    openLightbox(item.getAttribute('data-media-type'), item.getAttribute('data-src'));
                });
            });

            lightboxClose.addEventListener('click', closeLightbox);
            lightbox.addEventListener('click', (e) => {
                if(e.target === lightbox || e.target === lightboxContent) closeLightbox();
            });
            document.addEventListener('keydown', (e) => {
                if(e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
            });

            const langToggle = document.getElementById('lang-toggle');
            let currentLang = 'en';

            const translations = {
                en: {
                    nav_about: "About", nav_programs: "Programs", nav_activities: "Activities", nav_facilities: "Facilities", nav_gallery: "Gallery", nav_contact: "Contact",
                    hero_badge: "Inclusion, peace, development.", hero_title_1: "Building a future of learning,", hero_title_2: "unity and growth.",
                    hero_desc: "Circle of Peace is a registered youth and family association in Helsinki. We support learning, growth, and community through values of peace, kindness, and respect.",
                    hero_btn: "Discover Our Mission",
                    about_subtitle: "About Rauhapiiri", about_desc: "Circle of Peace is a nationally active Muslim youth and family organization based in Helsinki. We support the personal, social, and spiritual development of children and young people by providing a safe and values-based environment for learning and growth.",
                    about_quote: "“Our mission is to strengthen identity, foster community, and promote positive interaction between families and society.”",
                    prog_title: "Our Programs", prog_subtitle: "Comprehensive activities designed to support, educate, and unite our community.",
                    prog_1_title: "Education & Learning", prog_1_desc: "Seminars, workshops and knowledge sharing, art and craft workshops, weekend culture school, and educational programs that strengthen moral and ethical values.",
                    prog_2_title: "Family & Parenting Support", prog_2_desc: "Exchange ideas and receive peer support in parenting matters. Playgroups, storytelling sessions, and social awareness programs for families.",
                    prog_3_title: "Cultural Events & Programs", prog_3_desc: "Podcasts, seminars, cultural celebrations and regular weekly programs bringing our diverse community together.",
                    prog_4_title: "Sports & Recreation", prog_4_desc: "Sports days, game days, camps and active socializing activities for youth and families to stay healthy and connected.",
                    prog_5_title: "Community Service", prog_5_desc: "Donating food and clothes to homeless shelters and organizing charitable activities to serve our wider community.",
                    prog_6_title: "Club Facilities & Collaboration", prog_6_desc: "Club facilities in Lassila, Haaga, Konala area with discussion sessions, games, crafts and collaboration with other organizations across Helsinki region.",
                    mem_badge: "Membership & Impact", mem_title: "Join Our Growing Community", mem_desc: "Become a member to support our mission, access exclusive programs, and make a real difference in shaping the future of our youth and families.", mem_btn: "Apply for Membership",
                    stat_1: "Active Members", stat_2: "Events Organized", stat_3: "Volunteering Hours", stat_4: "Active Programs",
                    news_badge: "Latest Updates", news_title: "News & Activities", news_desc: "Stay informed about our upcoming events, community programs, and recent highlights.",
                    news_1_title: "Annual Youth Summer Camp", news_1_desc: "Join us for a week of outdoor activities, team building, and spiritual growth in the beautiful Finnish archipelago.",
                    news_2_title: "New Weekend School Programs", news_2_desc: "We are expanding our educational offerings with new language and culture classes for children of all ages.",
                    news_3_title: "Family Wellness Workshop", news_3_desc: "A successful weekend workshop focusing on family well-being, mental health, and strengthening relationships.",
                    news_read_more: "Read more", news_view_all: "View All News",
                    fac_image_title: "Rauhapiiri Centre", fac_image_desc: "A perfect venue for community gatherings and cultural events.",
                    fac_badge: "Premium Venue", fac_title: "Book Our Club Facilities",
                    fac_desc: "Looking for a well-equipped venue in Helsinki? Our Centre is designed to host your meetings, programs, or events comfortably with full amenities included.",
                    fac_amenity_1: "Seats 150 persons", fac_amenity_2: "Sound System", fac_amenity_3: "Projector & TV", fac_amenity_4: "Equipped Kitchen", fac_amenity_5: "Free Wi-Fi", fac_amenity_6: "Ample Parking",
                    fac_btn: "Inquire Booking",
                    gallery_badge: "Visual Journey", gallery_title: "Community Mosaic", gallery_note: "Click on any image or video to expand.",
                    contact_title: "Get in Touch", contact_subtitle: "Reach out to us for any inquiries, bookings, or collaborations.",
                    form_title: "Send a Message", form_name: "Name", form_email: "Email", form_subject: "Subject", form_msg: "Message", form_submit: "Send Message",
                    footer_desc: "Supporting the personal, social, and spiritual development of youth through community, learning, and values.",
                    footer_news: "Stay Connected", footer_news_desc: "Subscribe to receive updates on upcoming events and community news directly to your inbox."
                },
                fi: {
                    nav_about: "Tietoa", nav_programs: "Ohjelmat", nav_activities: "Toiminta", nav_facilities: "Tilat", nav_gallery: "Galleria", nav_contact: "Ota yhteyttä",
                    hero_badge: "Osallisuus, rauha, kehitys.", hero_title_1: "Rakennamme oppimisen,", hero_title_2: "yhtenäisyyden ja kasvun tulevaisuutta.",
                    hero_desc: "Rauhapiiri on rekisteröity nuoriso- ja perheyhdistys Helsingissä. Tuemme oppimista, kasvua ja yhteisöllisyyttä rauhan, ystävällisyyden ja kunnioituksen arvojen kautta.",
                    hero_btn: "Tutustu tehtäväämme",
                    about_subtitle: "Tietoa Rauhapiiristä", about_desc: "Rauhapiiri on valtakunnallisesti toimiva musliminuoriso- ja perhejärjestö, jonka kotipaikka on Helsinki. Tuemme lasten ja nuorten henkilökohtaista, sosiaalista ja henkistä kehitystä tarjoamalla turvallisen ja arvopohjaisen ympäristön oppimiselle ja kasvulle.",
                    about_quote: "”Tehtävämme on vahvistaa identiteettiä, edistää yhteisöllisyyttä ja tukea positiivista vuorovaikutusta perheiden ja yhteiskunnan välillä.”",
                    prog_title: "Ohjelmamme", prog_subtitle: "Kattavat toiminnot, jotka on suunniteltu tukemaan, kouluttamaan ja yhdistämään yhteisöämme.",
                    prog_1_title: "Koulutus ja oppiminen", prog_1_desc: "Seminaareja, työpajoja, tiedon jakamista, taide- ja käsityöpajoja, viikonloppukulttuurikoulu sekä moraalisia ja eettisiä arvoja vahvistavia opetusohjelmia.",
                    prog_2_title: "Perhe ja vanhemmuuden tuki", prog_2_desc: "Vaihda ajatuksia ja saa vertaistukea vanhemmuuden asioissa. Leikkiryhmiä, satutuokioita ja yhteiskunnallisia tietoisuusohjelmia perheille.",
                    prog_3_title: "Kulttuuritapahtumat ja ohjelmat", prog_3_desc: "Podcasteja, seminaareja, kulttuurijuhlia ja säännöllisiä viikko-ohjelmia, jotka tuovat monimuotoisen yhteisömme yhteen.",
                    prog_4_title: "Urheilu ja virkistys", prog_4_desc: "Liikuntapäiviä, pelipäiviä, leirejä ja aktiivista sosiaalista toimintaa nuorille ja perheille pysyäkseen terveinä ja yhteydessä.",
                    prog_5_title: "Yhteisöpalvelu", prog_5_desc: "Ruoan ja vaatteiden lahjoittaminen asunnottomien yömajoihin ja hyväntekeväisyystoiminnan järjestäminen palvellaksemme laajempaa yhteisöämme.",
                    prog_6_title: "Kerhotilat ja yhteistyö", prog_6_desc: "Kerhotilat Lassilassa, Haagassa, Konalassa, joissa järjestetään keskustelutilaisuuksia, pelejä, käsitöitä ja yhteistyötä muiden järjestöjen kanssa Helsingin seudulla.",
                    mem_badge: "Jäsenyys ja vaikuttavuus", mem_title: "Liity kasvavaan yhteisöömme", mem_desc: "Liity jäseneksi tukeaksesi tehtäväämme, saadaksesi pääsyn eksklusiivisiin ohjelmiin ja tehdäksesi todellisen eron nuorten ja perheiden tulevaisuuden muovaamisessa.", mem_btn: "Hae jäsenyyttä",
                    stat_1: "Aktiivista jäsentä", stat_2: "Järjestettyä tapahtumaa", stat_3: "Vapaaehtoistuntia", stat_4: "Aktiivista ohjelmaa",
                    news_badge: "Viimeisimmät päivitykset", news_title: "Uutiset & Toiminta", news_desc: "Pysy ajan tasalla tulevista tapahtumistamme, yhteisöohjelmistamme ja viimeisimmistä kohokohdista.",
                    news_1_title: "Vuotuinen nuorten kesäleiri", news_1_desc: "Liity mukaamme viikon mittaiselle leirille, joka sisältää ulkoilua, tiiminrakennusta ja henkistä kasvua kauniissa Suomen saaristossa.",
                    news_2_title: "Uudet viikonloppukoulun ohjelmat", news_2_desc: "Laajennamme koulutustarjontaamme uusilla kieli- ja kulttuuritunneilla kaikenikäisille lapsille.",
                    news_3_title: "Perheen hyvinvointityöpaja", news_3_desc: "Menestyksekäs viikonlopputyöpaja, joka keskittyi perheen hyvinvointiin, mielenterveyteen ja suhteiden vahvistamiseen.",
                    news_read_more: "Lue lisää", news_view_all: "Näytä kaikki uutiset",
                    fac_image_title: "Rauhapiiri Keskus", fac_image_desc: "Täydellinen paikka yhteisön kokoontumisille ja kulttuuritapahtumille.",
                    fac_badge: "Premium-Tilat", fac_title: "Varaa kerhotilamme",
                    fac_desc: "Etsitkö hyvin varusteltua tilaa Helsingistä? Keskuksemme on suunniteltu isännöimään kokouksia, ohjelmia tai tapahtumia mukavasti kattavilla mukavuuksilla.",
                    fac_amenity_1: "Paikkoja 150 hengelle", fac_amenity_2: "Äänentoistojärjestelmä", fac_amenity_3: "Projektori & TV", fac_amenity_4: "Varusteltu keittiö", fac_amenity_5: "Ilmainen Wi-Fi", fac_amenity_6: "Tilava pysäköinti",
                    fac_btn: "Kysy varausta",
                    gallery_badge: "Visuaalinen matka", gallery_title: "Yhteisön mosaiikki", gallery_note: "Klikkaa mitä tahansa kuvaa tai videota suurentaaksesi.",
                    contact_title: "Ota yhteyttä", contact_subtitle: "Ota meihin yhteyttä tiedusteluja, varauksia tai yhteistyötä varten.",
                    form_title: "Lähetä viesti", form_name: "Nimi", form_email: "Sähköposti", form_subject: "Aihe", form_msg: "Viesti", form_submit: "Lähetä viesti",
                    footer_desc: "Tuemme nuorten henkilökohtaista, sosiaalista ja henkistä kehitystä yhteisön, oppimisen ja arvojen kautta.",
                    footer_news: "Pysy yhteydessä", footer_news_desc: "Tilaa päivitykset tulevista tapahtumista ja yhteisön uutisista suoraan sähköpostiisi."
                }
            };

            function updateLanguage() {
                document.querySelectorAll('[data-i18n]').forEach(el => {
                    const key = el.getAttribute('data-i18n');
                    if (translations[currentLang][key]) {
                        el.innerText = translations[currentLang][key];
                    }
                });
            }

            langToggle.addEventListener('click', () => {
                currentLang = currentLang === 'en' ? 'fi' : 'en';
                langToggle.innerText = currentLang === 'en' ? 'EN' : 'FI';
                updateLanguage();
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
      
<div className="grain-mask"></div>

<header className="fixed top-0 z-40 w-full transition-all duration-500" id="navbar">
<div className="absolute inset-0 backdrop-blur-md border-b border-[var(--border-color)] transition-colors duration-500" id="nav-bg" style={{backgroundColor: 'transparent'}}></div>
<div className="relative mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex items-center justify-between">
<a className="flex items-center py-4 transition-all duration-500" href="#" id="nav-brand">
<img alt="Rauhapiiri Logo" className="h-10 sm:h-12 w-auto object-contain bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-sm border border-[var(--border-color)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</a>
<nav className="hidden gap-8 md:flex text-base text-[var(--text-faint)]">
<a className="hover:text-[var(--text-main)] transition-colors" data-i18n="nav_about" href="#about">About</a>
<a className="hover:text-[var(--text-main)] transition-colors" data-i18n="nav_programs" href="#programs">Programs</a>
<a className="hover:text-[var(--text-main)] transition-colors" data-i18n="nav_activities" href="#activities">Activities</a>
<a className="hover:text-[var(--text-main)] transition-colors" data-i18n="nav_facilities" href="#facilities">Facilities</a>
<a className="hover:text-[var(--text-main)] transition-colors" data-i18n="nav_contact" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<button className="flex h-9 w-14 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-main)] text-sm hover:scale-105 transition-all duration-300 shadow-sm" id="lang-toggle">
                        EN
                    </button>
<button aria-label="Toggle Theme" className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-main)] hover:scale-110 transition-all duration-300 shadow-sm" id="theme-toggle">
<i className="w-5 h-5" data-lucide="sun" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</header>

<section className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-20 bg-[var(--bg-base)] transition-colors duration-500 border-b border-[var(--border-color)]" id="hero-section">

<div className="absolute inset-0 z-0 interactive-dots"></div>
<div className="relative z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:gap-16 px-6 lg:grid-cols-2 lg:px-8 flex-grow">
<div className="flex flex-col justify-center order-2 lg:order-1 reveal-on-scroll active">
<div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-500/30 bg-blue-900/10 px-4 py-1.5 text-sm uppercase tracking-widest text-blue-500 mb-8">
<div className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400"></div>
<span data-i18n="hero_badge">Inclusion, peace, development.</span>
</div>
<div className="min-h-[200px] sm:min-h-[220px] md:min-h-[260px] lg:min-h-[280px] flex flex-col justify-start">
<h1 className="text-5xl font-extralight leading-[1.1] tracking-tight text-[var(--text-main)] sm:text-6xl md:text-7xl text-glow transition-colors duration-500 mb-6">
<span data-i18n="hero_title_1">Building a future of learning,</span> <br/>
<span className="italic text-blue-500" data-i18n="hero_title_2">unity and growth.</span>
</h1>
<p className="max-w-lg text-2xl leading-relaxed text-[var(--text-muted)] transition-colors duration-500" data-i18n="hero_desc">
                        Circle of Peace is a registered youth and family association in Helsinki. We support learning, growth, and community through values of peace, kindness, and respect.
                    </p>
</div>
<div className="pt-2 flex items-center gap-6">
<button className="shiny-btn group relative rounded-full bg-blue-600 px-8 py-4 text-base text-white shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:bg-blue-500" onclick="document.getElementById('about').scrollIntoView({behavior: 'smooth'})">
<span data-i18n="hero_btn">Discover Our Mission</span>
</button>
</div>
</div>
<div className="relative flex items-center justify-center h-[350px] sm:h-[450px] lg:h-[500px] order-1 lg:order-2 reveal-on-scroll active delay-200">
<div className="absolute inset-0 z-0 bg-blue-500/10 blur-[100px] rounded-full"></div>
<div className="relative w-full max-w-md h-full">
<img alt="Learning" className="absolute top-4 sm:top-10 left-0 w-2/3 aspect-[4/5] object-cover rounded-2xl shadow-2xl border border-[var(--border-color)] transform -rotate-6 transition-transform hover:rotate-0 hover:z-30 duration-500 opacity-80 hover:opacity-100" src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Youth Community" className="absolute bottom-4 sm:bottom-10 right-0 w-3/4 aspect-square object-cover rounded-3xl shadow-2xl border border-[var(--border-color)] transform rotate-3 transition-transform hover:-translate-y-4 hover:z-30 duration-500 z-20" src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-[var(--text-faint)] z-20 transition-colors">
<i className="w-8 h-8" data-lucide="mouse" strokeWidth="1.5"></i>
</div>
</section>

<section className="relative flex w-full items-center justify-center overflow-hidden py-32 bg-[var(--bg-alt2)] transition-colors duration-500 border-b border-[var(--border-color)]" id="about">
<div className="absolute inset-0 opacity-[0.03] dark:opacity-10" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23888888\\' fillOpacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')'}}></div>
<div className="reveal-on-scroll relative z-10 max-w-4xl px-6 text-center">
<h3 className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-blue-500" data-i18n="about_subtitle">About Rauhapiiri</h3>
<p className="mb-12 text-2xl text-[var(--text-muted)] leading-relaxed transition-colors" data-i18n="about_desc">
                Circle of Peace is a nationally active Muslim youth and family organization based in Helsinki. We support the personal, social, and spiritual development of children and young people by providing a safe and values-based environment for learning and growth.
            </p>
<div className="relative py-12">
<div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"></div>
<h2 className="relative bg-[var(--bg-alt2)] px-4 text-3xl font-extralight tracking-tight text-[var(--text-main)] sm:text-5xl lg:text-6xl text-glow leading-tight transition-colors duration-500" data-i18n="about_quote">
                    “Our mission is to strengthen identity, foster community, and promote positive interaction between families and society.”
                </h2>
</div>
</div>
</section>

<section className="relative w-full bg-[var(--bg-base)] py-32 transition-colors duration-500 border-b border-[var(--border-color)] overflow-hidden" id="programs">
<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-4xl sm:text-5xl tracking-tight text-[var(--text-main)] mb-6 transition-colors" data-i18n="prog_title">Our Programs</h2>
<p className="text-[var(--text-muted)] text-base max-w-2xl mx-auto transition-colors" data-i18n="prog_subtitle">Comprehensive activities designed to support, educate, and unite our community.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-on-scroll delay-100">
<div className="group relative flex flex-col p-8 rounded-3xl bg-[var(--bg-alt)] border border-[var(--border-color)] transition-all duration-300 hover:bg-[var(--card-hover)] hover:border-blue-500/30 hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="book" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl text-[var(--text-main)] mb-3" data-i18n="prog_1_title">Education &amp; Learning</h3>
<p className="text-base text-[var(--text-muted)] leading-relaxed flex-grow" data-i18n="prog_1_desc">Seminars, workshops and knowledge sharing, art and craft workshops, weekend culture school, and educational programs that strengthen moral and ethical values.</p>
</div>
<div className="group relative flex flex-col p-8 rounded-3xl bg-[var(--bg-alt)] border border-[var(--border-color)] transition-all duration-300 hover:bg-[var(--card-hover)] hover:border-blue-500/30 hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl text-[var(--text-main)] mb-3" data-i18n="prog_2_title">Family &amp; Parenting Support</h3>
<p className="text-base text-[var(--text-muted)] leading-relaxed flex-grow" data-i18n="prog_2_desc">Exchange ideas and receive peer support in parenting matters. Playgroups, storytelling sessions, and social awareness programs for families.</p>
</div>
<div className="group relative flex flex-col p-8 rounded-3xl bg-[var(--bg-alt)] border border-[var(--border-color)] transition-all duration-300 hover:bg-[var(--card-hover)] hover:border-blue-500/30 hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="smile" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl text-[var(--text-main)] mb-3" data-i18n="prog_3_title">Cultural Events &amp; Programs</h3>
<p className="text-base text-[var(--text-muted)] leading-relaxed flex-grow" data-i18n="prog_3_desc">Podcasts, seminars, cultural celebrations and regular weekly programs bringing our diverse community together.</p>
</div>
<div className="group relative flex flex-col p-8 rounded-3xl bg-[var(--bg-alt)] border border-[var(--border-color)] transition-all duration-300 hover:bg-[var(--card-hover)] hover:border-blue-500/30 hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl text-[var(--text-main)] mb-3" data-i18n="prog_4_title">Sports &amp; Recreation</h3>
<p className="text-base text-[var(--text-muted)] leading-relaxed flex-grow" data-i18n="prog_4_desc">Sports days, game days, camps and active socializing activities for youth and families to stay healthy and connected.</p>
</div>
<div className="group relative flex flex-col p-8 rounded-3xl bg-[var(--bg-alt)] border border-[var(--border-color)] transition-all duration-300 hover:bg-[var(--card-hover)] hover:border-blue-500/30 hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="heart-handshake" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl text-[var(--text-main)] mb-3" data-i18n="prog_5_title">Community Service</h3>
<p className="text-base text-[var(--text-muted)] leading-relaxed flex-grow" data-i18n="prog_5_desc">Donating food and clothes to homeless shelters and organizing charitable activities to serve our wider community.</p>
</div>
<div className="group relative flex flex-col p-8 rounded-3xl bg-[var(--bg-alt)] border border-[var(--border-color)] transition-all duration-300 hover:bg-[var(--card-hover)] hover:border-blue-500/30 hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="building" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl text-[var(--text-main)] mb-3" data-i18n="prog_6_title">Club Facilities &amp; Collaboration</h3>
<p className="text-base text-[var(--text-muted)] leading-relaxed flex-grow" data-i18n="prog_6_desc">Club facilities in Lassila, Haaga, Konala area with discussion sessions, games, crafts and collaboration with other organizations across Helsinki region.</p>
</div>
</div>
</div>
</section>

<section className="relative w-full bg-[var(--bg-alt2)] py-24 transition-colors duration-500 border-b border-[var(--border-color)] overflow-hidden" id="membership">
<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
<div className="reveal-on-scroll relative rounded-[2rem] overflow-hidden border border-[var(--border-color)] bg-[var(--bg-card)] flex flex-col lg:flex-row shadow-2xl">

<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-[var(--border-color)] pointer-events-none"></div>

<div className="p-10 lg:p-16 lg:w-[45%] border-b lg:border-b-0 lg:border-r border-[var(--border-color)] relative z-10 flex flex-col justify-center">
<div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-500/30 bg-blue-900/10 px-3 py-1 text-sm uppercase tracking-widest text-blue-500 mb-6">
<i className="w-4 h-4" data-lucide="users" strokeWidth="1.5"></i>
<span data-i18n="mem_badge">Membership &amp; Impact</span>
</div>
<h2 className="text-3xl sm:text-4xl tracking-tight text-[var(--text-main)] mb-4" data-i18n="mem_title">Join Our Growing Community</h2>
<p className="text-[var(--text-muted)] text-base mb-8 leading-relaxed" data-i18n="mem_desc">Become a member to support our mission, access exclusive programs, and make a real difference in shaping the future of our youth and families.</p>
<button className="shiny-btn w-fit rounded-full bg-[var(--text-main)] px-8 py-3.5 text-base font-medium text-[var(--bg-base)] shadow-md hover:scale-105 transition-all">
<span data-i18n="mem_btn">Apply for Membership</span>
</button>
</div>

<div className="p-10 lg:p-16 lg:w-[55%] relative z-10 flex items-center bg-[var(--bg-alt)]/50">
<div className="grid grid-cols-2 gap-8 w-full">
<div className="flex flex-col gap-1">
<span className="text-4xl sm:text-5xl text-[var(--text-main)] tracking-tight">500+</span>
<span className="text-sm uppercase tracking-wider text-[var(--text-faint)]" data-i18n="stat_1">Active Members</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-4xl sm:text-5xl text-[var(--text-main)] tracking-tight">120+</span>
<span className="text-sm uppercase tracking-wider text-[var(--text-faint)]" data-i18n="stat_2">Events Organized</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-4xl sm:text-5xl text-[var(--text-main)] tracking-tight">1000+</span>
<span className="text-sm uppercase tracking-wider text-[var(--text-faint)]" data-i18n="stat_3">Volunteering Hours</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-4xl sm:text-5xl text-[var(--text-main)] tracking-tight">5+</span>
<span className="text-sm uppercase tracking-wider text-[var(--text-faint)]" data-i18n="stat_4">Active Programs</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full bg-[var(--bg-base)] py-32 transition-colors duration-500 overflow-hidden border-b border-[var(--border-color)]" id="activities">
<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
<div className="text-center mb-16 reveal-on-scroll">
<div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-500/30 bg-blue-900/10 px-3 py-1 text-sm uppercase tracking-widest text-blue-500 mb-6">
<i className="w-4 h-4" data-lucide="file-text" strokeWidth="1.5"></i>
<span data-i18n="news_badge">Latest Updates</span>
</div>
<h2 className="text-4xl sm:text-5xl tracking-tight text-[var(--text-main)] mb-6 transition-colors" data-i18n="news_title">News &amp; Activities</h2>
<p className="text-[var(--text-muted)] text-base max-w-2xl mx-auto transition-colors" data-i18n="news_desc">Stay informed about our upcoming events, community programs, and recent highlights.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-on-scroll delay-100">
<article className="group relative flex flex-col items-start justify-between rounded-3xl bg-[var(--bg-alt)] border border-[var(--border-color)] p-2 transition-all duration-300 hover:bg-[var(--card-hover)] hover:border-blue-500/30">
<div className="relative w-full overflow-hidden rounded-2xl aspect-[16/9] mb-4">
<img alt="Summer Camp" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="px-4 pb-6 w-full">
<div className="flex items-center gap-x-4 text-sm mb-3">
<time className="text-[var(--text-faint)]" datetime="2024-06-15">Jun 15, 2024</time>
<span className="relative z-10 rounded-full bg-[var(--bg-alt2)] border border-[var(--border-color)] px-3 py-1.5 text-[var(--text-main)] transition-colors hover:bg-[var(--bg-card)]">Community</span>
</div>
<h3 className="mt-3 text-xl leading-6 text-[var(--text-main)] group-hover:text-blue-500 transition-colors tracking-tight">
<a href="#">
<span className="absolute inset-0"></span>
<span data-i18n="news_1_title">Annual Youth Summer Camp</span>
</a>
</h3>
<p className="mt-3 line-clamp-3 text-base leading-relaxed text-[var(--text-muted)]" data-i18n="news_1_desc">Join us for a week of outdoor activities, team building, and spiritual growth in the beautiful Finnish archipelago.</p>
<div className="mt-6 flex items-center text-base text-blue-500 group-hover:text-blue-400">
<span data-i18n="news_read_more">Read more</span>
<i className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</article>
<article className="group relative flex flex-col items-start justify-between rounded-3xl bg-[var(--bg-alt)] border border-[var(--border-color)] p-2 transition-all duration-300 hover:bg-[var(--card-hover)] hover:border-blue-500/30">
<div className="relative w-full overflow-hidden rounded-2xl aspect-[16/9] mb-4">
<img alt="Education" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="px-4 pb-6 w-full">
<div className="flex items-center gap-x-4 text-sm mb-3">
<time className="text-[var(--text-faint)]" datetime="2024-05-20">May 20, 2024</time>
<span className="relative z-10 rounded-full bg-[var(--bg-alt2)] border border-[var(--border-color)] px-3 py-1.5 text-[var(--text-main)] transition-colors hover:bg-[var(--bg-card)]">Education</span>
</div>
<h3 className="mt-3 text-xl leading-6 text-[var(--text-main)] group-hover:text-blue-500 transition-colors tracking-tight">
<a href="#">
<span className="absolute inset-0"></span>
<span data-i18n="news_2_title">New Weekend School Programs</span>
</a>
</h3>
<p className="mt-3 line-clamp-3 text-base leading-relaxed text-[var(--text-muted)]" data-i18n="news_2_desc">We are expanding our educational offerings with new language and culture classes for children of all ages.</p>
<div className="mt-6 flex items-center text-base text-blue-500 group-hover:text-blue-400">
<span data-i18n="news_read_more">Read more</span>
<i className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</article>
<article className="group relative flex flex-col items-start justify-between rounded-3xl bg-[var(--bg-alt)] border border-[var(--border-color)] p-2 transition-all duration-300 hover:bg-[var(--card-hover)] hover:border-blue-500/30">
<div className="relative w-full overflow-hidden rounded-2xl aspect-[16/9] mb-4">
<img alt="Workshop" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="px-4 pb-6 w-full">
<div className="flex items-center gap-x-4 text-sm mb-3">
<time className="text-[var(--text-faint)]" datetime="2024-04-10">Apr 10, 2024</time>
<span className="relative z-10 rounded-full bg-[var(--bg-alt2)] border border-[var(--border-color)] px-3 py-1.5 text-[var(--text-main)] transition-colors hover:bg-[var(--bg-card)]">Events</span>
</div>
<h3 className="mt-3 text-xl leading-6 text-[var(--text-main)] group-hover:text-blue-500 transition-colors tracking-tight">
<a href="#">
<span className="absolute inset-0"></span>
<span data-i18n="news_3_title">Family Wellness Workshop</span>
</a>
</h3>
<p className="mt-3 line-clamp-3 text-base leading-relaxed text-[var(--text-muted)]" data-i18n="news_3_desc">A successful weekend workshop focusing on family well-being, mental health, and strengthening relationships.</p>
<div className="mt-6 flex items-center text-base text-blue-500 group-hover:text-blue-400">
<span data-i18n="news_read_more">Read more</span>
<i className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</article>
</div>
<div className="mt-16 flex justify-center reveal-on-scroll delay-200">
<a className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] px-6 py-3 text-base text-[var(--text-main)] hover:bg-[var(--bg-alt)] hover:border-blue-500/50 hover:text-blue-500 transition-all duration-300" href="#">
<span data-i18n="news_view_all">View All News</span>
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="relative w-full bg-[var(--bg-alt)] py-32 transition-colors duration-500 overflow-hidden border-b border-[var(--border-color)]" id="facilities">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-[var(--bg-alt)]/95 backdrop-blur-3xl z-10"></div>
<img alt="Facilities bg" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-20 mx-auto max-w-6xl px-6 lg:px-8">
<div className="reveal-on-scroll relative rounded-[2rem] p-[1px] bg-gradient-to-br from-blue-500/30 via-[var(--border-color)] to-sky-500/30 shadow-[0_0_50px_rgba(59,130,246,0.05)] group">
<div className="relative rounded-[31px] bg-[var(--bg-card)]/90 backdrop-blur-2xl overflow-hidden flex flex-col lg:flex-row border border-[var(--bg-base)]">
<div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full overflow-hidden">
<img alt="Event Hall" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8 text-white">
<h3 className="text-3xl tracking-tight mb-2 shadow-black drop-shadow-lg" data-i18n="fac_image_title">Rauhapiiri Centre</h3>
<p className="text-base text-stone-300 shadow-black drop-shadow-md" data-i18n="fac_image_desc">A perfect venue for community gatherings and cultural events.</p>
</div>
</div>
<div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
<div className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-xs uppercase tracking-widest text-blue-500 mb-6 border border-blue-500/20">
<i className="w-3.5 h-3.5" data-lucide="building" strokeWidth="1.5"></i> <span data-i18n="fac_badge">Premium Venue</span>
</div>
<h2 className="text-3xl sm:text-4xl tracking-tight text-[var(--text-main)] mb-4 transition-colors leading-tight" data-i18n="fac_title">Book Our Club Facilities</h2>
<p className="text-[var(--text-muted)] mb-8 text-base leading-relaxed transition-colors" data-i18n="fac_desc">
                            Looking for a well-equipped venue in Helsinki? Our Centre is designed to host your meetings, programs, or events comfortably with full amenities included.
                        </p>
<div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-8 text-base text-[var(--text-main)] transition-colors">
<div className="flex items-center gap-3"><div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500"><i className="w-4 h-4" data-lucide="check-circle" strokeWidth="1.5"></i></div> <span data-i18n="fac_amenity_1">Seats 150 persons</span></div>
<div className="flex items-center gap-3"><div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500"><i className="w-4 h-4" data-lucide="check-circle" strokeWidth="1.5"></i></div> <span data-i18n="fac_amenity_2">Sound System</span></div>
<div className="flex items-center gap-3"><div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500"><i className="w-4 h-4" data-lucide="check-circle" strokeWidth="1.5"></i></div> <span data-i18n="fac_amenity_3">Projector &amp; TV</span></div>
<div className="flex items-center gap-3"><div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500"><i className="w-4 h-4" data-lucide="check-circle" strokeWidth="1.5"></i></div> <span data-i18n="fac_amenity_4">Equipped Kitchen</span></div>
<div className="flex items-center gap-3"><div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500"><i className="w-4 h-4" data-lucide="check-circle" strokeWidth="1.5"></i></div> <span data-i18n="fac_amenity_5">Free Wi-Fi</span></div>
<div className="flex items-center gap-3"><div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500"><i className="w-4 h-4" data-lucide="check-circle" strokeWidth="1.5"></i></div> <span data-i18n="fac_amenity_6">Ample Parking</span></div>
</div>
<div className="mt-auto pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="flex flex-col text-base text-[var(--text-faint)] w-full sm:w-auto text-center sm:text-left">
<span className="flex items-center justify-center sm:justify-start gap-2 mb-1"><i className="w-4 h-4 text-blue-500" data-lucide="map-pin" strokeWidth="1.5"></i> Leiviskätie 4 K, Helsinki</span>
</div>
<a className="shiny-btn w-full sm:w-auto text-center rounded-full bg-blue-600 text-white px-8 py-3 text-base font-medium tracking-wide hover:bg-blue-500" href="#contact">
<span data-i18n="fac_btn">Inquire Booking</span>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full bg-[var(--bg-base)] py-24 transition-colors duration-500 border-b border-[var(--border-color)]" id="gallery">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="text-center mb-16 reveal-on-scroll">
<h3 className="text-sm font-medium uppercase tracking-[0.3em] text-blue-500 flex justify-center items-center gap-2 mb-4">
<i className="w-4 h-4" data-lucide="image" strokeWidth="1.5"></i> <span data-i18n="gallery_badge">Visual Journey</span>
</h3>
<h2 className="text-4xl tracking-tight text-[var(--text-main)] mb-4" data-i18n="gallery_title">Community Mosaic</h2>
<p className="text-[var(--text-muted)] text-base max-w-2xl mx-auto" data-i18n="gallery_note">Click on any image or video to expand.</p>
</div>
<div className="reveal-on-scroll delay-100">
<div className="square-mosaic">
<div className="sq-item sq-1 group" data-media-type="image" data-src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&amp;w=1200&amp;auto=format&amp;fit=crop">
<img alt="Community" src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-md rounded-full p-2 text-white"><i className="w-5 h-5" data-lucide="maximize" strokeWidth="1.5"></i></div>
</div>
<div className="sq-item sq-2 group" data-media-type="image" data-src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&amp;w=1200&amp;auto=format&amp;fit=crop">
<img alt="Event" src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-md rounded-full p-2 text-white"><i className="w-5 h-5" data-lucide="maximize" strokeWidth="1.5"></i></div>
</div>
<div className="sq-item sq-3 group" data-media-type="image" data-src="https://images.unsplash.com/photo-1526976663112-00d5a1197da0?q=80&amp;w=800&amp;auto=format&amp;fit=crop">
<img alt="Sports" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-md rounded-full p-2 text-white"><i className="w-5 h-5" data-lucide="maximize" strokeWidth="1.5"></i></div>
</div>
<div className="sq-item sq-4 group" data-media-type="image" data-src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&amp;w=800&amp;auto=format&amp;fit=crop">
<img alt="Youth" src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-md rounded-full p-2 text-white"><i className="w-5 h-5" data-lucide="maximize" strokeWidth="1.5"></i></div>
</div>
<div className="sq-item sq-5 group" data-media-type="image" data-src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&amp;w=800&amp;auto=format&amp;fit=crop">
<img alt="Workshop" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-md rounded-full p-2 text-white"><i className="w-5 h-5" data-lucide="maximize" strokeWidth="1.5"></i></div>
</div>
<div className="sq-item sq-6 group" data-media-type="image" data-src="https://images.unsplash.com/photo-1531496681078-27dc2277e898?q=80&amp;w=800&amp;auto=format&amp;fit=crop">
<img alt="Meeting" src="https://images.unsplash.com/photo-1531496681078-27dc2277e898?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-md rounded-full p-2 text-white"><i className="w-5 h-5" data-lucide="maximize" strokeWidth="1.5"></i></div>
</div>
<div className="sq-item sq-7 group relative" data-media-type="video" data-src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1">
<div className="absolute inset-0 bg-black/20 z-10 flex items-center justify-center group-hover:bg-black/40 transition-colors">
<i className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" data-lucide="play-circle" strokeWidth="1.5"></i>
</div>
<video autoplay="" className="pointer-events-none w-full h-full object-cover" loop="" muted="" playsinline="">
<source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
</video>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full bg-[var(--bg-alt2)] py-24 transition-colors duration-500" id="contact">
<div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 blur-[150px] pointer-events-none"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-4xl tracking-tight text-[var(--text-main)] mb-4" data-i18n="contact_title">Get in Touch</h2>
<p className="text-[var(--text-muted)] text-base max-w-2xl mx-auto" data-i18n="contact_subtitle">Reach out to us for any inquiries, bookings, or collaborations.</p>
<div className="mx-auto mt-6 h-1 w-20 bg-blue-500 rounded-full"></div>
</div>
<div className="reveal-on-scroll delay-100 grid lg:grid-cols-2 gap-0 rounded-[2rem] overflow-hidden border border-[var(--border-color)] bg-[var(--bg-card)] shadow-2xl">

<div className="relative min-h-[400px] w-full bg-[var(--bg-alt)] border-b lg:border-b-0 lg:border-r border-[var(--border-color)]">
<iframe allowfullscreen="" className="absolute inset-0 w-full h-full theme-map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.3340579978438!2d24.887251876523963!3d60.23960097505299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469209d84f2ccf3b%3A0x6b4fb6c9a3d4f8!2sLeivisk%C3%A4tie%204%2C%2000440%20Helsinki%2C%20Finland!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" style={{border: '0'}}></iframe>
<div className="absolute bottom-6 left-6 right-6 lg:right-auto bg-[var(--bg-card)]/90 backdrop-blur-md border border-[var(--border-color)] p-5 rounded-2xl shadow-xl">
<h4 className="text-lg text-[var(--text-main)] mb-1">Rauhapiiri Centre</h4>
<p className="text-base text-[var(--text-muted)] flex items-center gap-2 mb-3"><i className="w-4 h-4 text-blue-500" data-lucide="map-pin" strokeWidth="1.5"></i> Leiviskätie 4 K, 00440 Helsinki</p>
<p className="text-base text-[var(--text-muted)] flex items-center gap-2"><i className="w-4 h-4 text-blue-500" data-lucide="phone" strokeWidth="1.5"></i> +358 46 891 8555</p>
</div>
</div>

<div className="p-8 sm:p-12 relative flex flex-col justify-center">
<h3 className="text-2xl tracking-tight text-[var(--text-main)] mb-8 flex items-center gap-3">
<i className="w-6 h-6 text-blue-500" data-lucide="mail" strokeWidth="1.5"></i> <span data-i18n="form_title">Send a Message</span>
</h3>
<form className="flex flex-col gap-5 relative z-10 w-full" onsubmit="event.preventDefault(); alert('Message sent successfully!');">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div><label className="block text-sm font-medium text-[var(--text-faint)] mb-2 uppercase tracking-wider pl-1" data-i18n="form_name">Name</label><input className="custom-input" placeholder="John Doe" required="" type="text"/></div>
<div><label className="block text-sm font-medium text-[var(--text-faint)] mb-2 uppercase tracking-wider pl-1" data-i18n="form_email">Email</label><input className="custom-input" placeholder="john@example.com" required="" type="email"/></div>
</div>
<div><label className="block text-sm font-medium text-[var(--text-faint)] mb-2 uppercase tracking-wider pl-1" data-i18n="form_subject">Subject</label><input className="custom-input" placeholder="Booking Inquiry" required="" type="text"/></div>
<div><label className="block text-sm font-medium text-[var(--text-faint)] mb-2 uppercase tracking-wider pl-1" data-i18n="form_msg">Message</label><textarea className="custom-input resize-none" placeholder="How can we help you?" required="" rows="8"></textarea></div>
<button className="shiny-btn mt-4 w-full rounded-xl bg-blue-600 px-6 py-4 text-base font-medium tracking-wide text-white shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:bg-blue-500 transition-colors flex items-center justify-center gap-2" type="submit"><span data-i18n="form_submit">Send Message</span> <i className="w-4 h-4" data-lucide="send" strokeWidth="1.5"></i></button>
</form>
</div>
</div>
</div>
</section>

<footer className="relative bg-[var(--bg-base)] border-t border-[var(--border-color)] transition-colors duration-500 overflow-hidden pt-24 pb-8">
<div className="absolute top-10 left-1/2 -translate-x-1/2 w-full footer-bg-text">RAUHAPIIRI</div>
<div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 pb-16">

<div className="md:col-span-4 flex flex-col items-start gap-6">
<a className="flex items-center" href="#">
<img alt="Rauhapiiri Logo" className="h-12 sm:h-14 w-auto object-contain bg-white/95 px-4 py-2 rounded-2xl shadow-sm border border-[var(--border-color)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</a>
<p className="text-xl text-[var(--text-muted)] max-w-sm" data-i18n="footer_desc">Supporting the personal, social, and spiritual development of youth through community, learning, and values.</p>
<div className="flex gap-3 text-2xl mt-2">
<a className="h-10 w-10 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] flex items-center justify-center text-[var(--text-faint)] hover:text-blue-500 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300" href="#"><i className="w-4 h-4" data-lucide="facebook" strokeWidth="1.5"></i></a>
<a className="h-10 w-10 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] flex items-center justify-center text-[var(--text-faint)] hover:text-blue-500 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300" href="#"><i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="h-10 w-10 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] flex items-center justify-center text-[var(--text-faint)] hover:text-blue-500 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300" href="#"><i className="w-4 h-4" data-lucide="youtube" strokeWidth="1.5"></i></a>
</div>
</div>

<div className="md:col-span-4 flex flex-col md:items-center">
<div className="flex flex-col gap-4 min-w-[120px]">
<h4 className="text-sm font-medium text-[var(--text-main)] uppercase tracking-[0.2em] mb-2">Explore</h4>
<a className="text-base text-[var(--text-muted)] hover:text-blue-500 transition-colors flex items-center gap-2 group" href="#about"><i className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -ml-6 text-blue-500" data-lucide="chevron-right" strokeWidth="1.5"></i><span data-i18n="nav_about">About Us</span></a>
<a className="text-base text-[var(--text-muted)] hover:text-blue-500 transition-colors flex items-center gap-2 group" href="#programs"><i className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -ml-6 text-blue-500" data-lucide="chevron-right" strokeWidth="1.5"></i><span data-i18n="nav_programs">Programs</span></a>
<a className="text-base text-[var(--text-muted)] hover:text-blue-500 transition-colors flex items-center gap-2 group" href="#facilities"><i className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -ml-6 text-blue-500" data-lucide="chevron-right" strokeWidth="1.5"></i><span data-i18n="nav_facilities">Facilities</span></a>
<a className="text-base text-[var(--text-muted)] hover:text-blue-500 transition-colors flex items-center gap-2 group" href="#contact"><i className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -ml-6 text-blue-500" data-lucide="chevron-right" strokeWidth="1.5"></i><span data-i18n="nav_contact">Contact</span></a>
</div>
</div>

<div className="md:col-span-4 flex flex-col md:items-end text-left md:text-right">
<h4 className="text-sm font-medium text-[var(--text-main)] uppercase tracking-[0.2em] mb-4" data-i18n="footer_news">Stay Connected</h4>
<p className="text-base text-[var(--text-muted)] mb-6 max-w-[280px]" data-i18n="footer_news_desc">Subscribe to receive updates on upcoming events and community news directly to your inbox.</p>
<form className="relative w-full max-w-[280px]" onsubmit="event.preventDefault(); alert('Subscribed!');">
<input className="w-full bg-[var(--bg-alt2)] border border-[var(--border-color)] text-[var(--text-main)] px-5 py-3.5 rounded-2xl text-base outline-none focus:border-blue-500 transition-colors pr-14" placeholder="Email Address" required="" type="email"/>
<button className="absolute right-1.5 top-1.5 bottom-1.5 w-10 bg-blue-600 hover:bg-blue-500 text-white rounded-xl flex items-center justify-center transition-colors" type="submit"><i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i></button>
</form>
</div>
</div>
<div className="pt-8 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="text-sm text-[var(--text-faint)]">© 2025 Rauhapiiri ry. All rights reserved.</div>
<div className="text-xs uppercase tracking-widest text-[var(--text-faint)]">Developed by <span className="text-blue-500">Md Abdur Rahman Emad</span></div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden flex-col items-center justify-center bg-black/95 backdrop-blur-xl opacity-0 transition-opacity duration-300" id="lightbox">
<button className="absolute top-6 right-6 lg:top-10 lg:right-10 text-stone-400 hover:text-blue-500 transition-colors p-2 z-50" id="lightbox-close"><i className="w-10 h-10" data-lucide="x-circle" strokeWidth="1.5"></i></button>
<div className="w-full h-full max-w-6xl p-4 md:p-12 flex justify-center items-center" id="lightbox-content"></div>
</div>



    </>
  );
}
