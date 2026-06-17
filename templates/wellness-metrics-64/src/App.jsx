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


tailwind.config={darkMode:'class'};


const translations = {
en: {
brand:"ARIANA INTEGRITY", nav_visa:"Visa & Immigration", nav_props:"Global Properties",
hero_badge:"Based in Dubai \u2022 Global Reach", hero_t1:"Your Passport to", hero_t2:"Global Freedom.",
hero_desc:"Navigate complex immigration pathways with precision. We specialize in transforming aspirations into approvals\u2014delivering visa solutions for work, study, investment, and citizenship across six continents.",
hero_btn1:"Start Your Journey", hero_btn2:"Explore Destinations",
about_title1:"Redefining Immigration", about_title2:"With Intelligence.",
about_desc:"The future of global mobility starts here. Our AI-enhanced platform combines human expertise with predictive technology to streamline your immigration journey.",
about_f1_title:"Military-Grade Security", about_f1_desc:"Bank-level encryption protects your sensitive documents and personal data across all touchpoints.",
about_f2_title:"Multilingual Excellence", about_f2_desc:"Native speakers in Dari, Pashto, Arabic, Urdu, and 12+ languages ensure seamless communication.",
serv_tag:"GLOBAL SOLUTIONS", serv_c1:"Global Work Visas", serv_c2:"Investment Immigration", serv_c3:"UAE Golden Gateway", serv_c4:"Afghan Resettlement Hub",
s_afghan_tag:"Humanitarian Priority Processing", s_afghan_btn:"Access Afghan Services",
s_invest_tag:"Premium Investment Routes", s_invest_btn:"Explore Investment Options",
s_work_tag:"Global Career Acceleration", s_work_btn:"Find Your Career Path",
s_uae_tag:"Dubai Real Estate Intelligence", s_uae_btn:"View Property Portfolio",
rev_badge:"Verified Success Stories", rev_title:"Trusted by thousands across 6 continents",
rev_desc:"Real journeys. Real outcomes. Real people who transformed their lives with Ariana Integrity.",
rev1_name:"Ahmad Z.", rev1_loc:"Kabul, Afghanistan", rev1_text:"\u201CTheir service is very professional and reliable. Our work was completed quickly and with good quality.\u201D",
rev2_name:"Farid M.", rev2_loc:"Herat, Afghanistan", rev2_text:"\u201CMy experience with this team was excellent. Fast response, strong support and accurate results.\u201D",
rev3_name:"Sarah Jenkins", rev3_loc:"London, UK", rev3_text:"\u201CProfessional, reliable, and easy to work with. The team delivered exactly what we needed.\u201D",
footer_tagline:"Global mobility shouldn\u2019t be a maze. We make it a mission.",
footer_hq:"Headquarters", footer_city:"Dubai, United Arab Emirates", footer_addr:"Business Bay Tower, 15th Floor",
footer_copy:"\u00A9 2026 Ariana Integrity Global Immigration Services", footer_sub:"Empowering mobility. Transforming lives.",
modal_title:"Begin Your Journey", modal_sub:"Complete this 60-second assessment and receive a personalized immigration roadmap within 24 hours.",
modal_afghan_title:"Comprehensive Afghan Resettlement Solutions",
modal_afghan_desc:"We understand the urgency and complexity facing Afghan nationals.\n\nPriority Programs:\nUSA: SIV, P1/P2 Refugee processing, Humanitarian parole.\nCanada: Special Immigration Measures, Family reunification.\nEurope: UK ARAP, Germany humanitarian visas.\nAustralia: Humanitarian visa subclass 202.\n\nLanguages: Dari, Pashto, English, Urdu.\nSuccess Rate: 94.7%",
modal_cbi_title:"CBI \u2013 Citizenship by Investment",
modal_cbi_desc:"Fast-track your family\u2019s global mobility.\n\nFeatured Programs:\n\u2022 Dominica: From USD 200,000.\n\u2022 Turkey: Strategic access to markets.\n\nDue diligence, structuring, and full management.",
modal_work_title:"Skilled Worker Solutions",
modal_work_desc:"Navigate global employment markets.\n\nTarget Markets:\n\u2022 Canada Express Entry\n\u2022 Australia Skilled Migration\n\u2022 Germany Opportunity Card\n\u2022 UAE Professional Visas",
modal_uae_title:"UAE Property Investment & Golden Visa",
modal_uae_desc:"Dubai real estate: your gateway to residency.\n\nGolden Visa Through Property: 10-year renewable visa, family inclusion.\n\nPremium Locations: Dubai Marina, Downtown, Palm Jumeirah.\nTimeline: 60-90 days.",
info_modal_btn:"Start Your Journey",
form_name:"Full Name", form_name_ph:"Enter your full legal name", form_email:"Email Address", form_email_ph:"your.email@example.com",
form_phone:"Phone Number", form_phone_ph:"+971 50 123 4567", form_nationality:"Current Nationality", form_select_country:"Select Country",
form_destination:"Preferred Destination", form_select_dest:"Select Destination",
c_afghanistan:"Afghanistan", c_uae:"UAE", c_usa:"USA", c_uk:"UK", c_canada:"Canada", c_australia:"Australia", c_europe:"Europe", c_other:"Other",
form_goal:"Immigration Goal", form_goal_sub:"(Select all that apply)",
goal_work:"Work Visa", goal_golden:"Golden Visa", goal_citizenship:"Citizenship", goal_refugee:"Refugee",
form_consent:"I agree to Ariana Integrity\u2019s Privacy Policy and consent to being contacted.",
form_submit:"Submit & Get Free Assessment",
},
da: {
brand:"\u0622\u0631\u06CC\u0646\u0627 \u0627\u06CC\u0646\u062A\u06AF\u0631\u06CC\u062A\u06CC",
nav_visa:"\u0631\u0627\u0647\u06A9\u0627\u0631\u0647\u0627\u06CC \u0648\u06CC\u0632\u0627",
nav_props:"\u0627\u0645\u0644\u0627\u06A9 \u062C\u0647\u0627\u0646\u06CC",
hero_badge:"\u062F\u0641\u062A\u0631 \u0645\u0631\u06A9\u0632\u06CC \u062F\u0628\u06CC \u2022",
hero_t1:"\u067E\u0627\u0633\u067E\u0648\u0631\u062A \u0634\u0645\u0627 \u0628\u0647 \u0633\u0648\u06CC",
hero_t2:"\u0622\u0632\u0627\u062F\u06CC \u062C\u0647\u0627\u0646\u06CC.",
hero_desc:"\u0645\u0633\u06CC\u0631\u0647\u0627\u06CC \u067E\u06CC\u0686\u06CC\u062F\u0647 \u0645\u0647\u0627\u062C\u0631\u062A \u0631\u0627 \u0628\u0627 \u062F\u0642\u062A \u0637\u06CC \u06A9\u0646\u06CC\u062F.",
hero_btn1:"\u0633\u0641\u0631 \u062E\u0648\u062F \u0631\u0627 \u0622\u063A\u0627\u0632 \u06A9\u0646\u06CC\u062F",
info_modal_btn:"\u0633\u0641\u0631 \u062E\u0648\u062F \u0631\u0627 \u0622\u063A\u0627\u0632 \u06A9\u0646\u06CC\u062F",
form_submit:"\u0627\u0631\u0633\u0627\u0644 \u0648 \u062F\u0631\u06CC\u0627\u0641\u062A \u0627\u0631\u0632\u06CC\u0627\u0628\u06CC \u0631\u0627\u06CC\u06AF\u0627\u0646",
}
};
function setLanguage(lang) {
if(!translations[lang]) lang="en";
const isRTL=["ar","da","ps"].includes(lang);
const html=document.getElementById("main-html");
html.setAttribute("lang",lang); html.setAttribute("dir",isRTL?"rtl":"ltr");
localStorage.setItem("language",lang);
const sel=document.getElementById("lang-selector"); if(sel) sel.value=lang;
document.querySelectorAll("[data-i18n]").forEach(el=>{
const k=el.getAttribute("data-i18n");
if(translations[lang]&&translations[lang][k]){
if(el.tagName==="INPUT"||el.tagName==="TEXTAREA") el.placeholder=translations[lang][k];
else el.textContent=translations[lang][k];
}
});
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    document.addEventListener("DOMContentLoaded", () => {
      
      // Initialize Vanta Background
      const vantaEffect = VANTA.WAVES({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x080c16, // Dark sophisticated blue/black 
        shininess: 35.00,
        waveHeight: 14.00,
        waveSpeed: 0.50,
        zoom: 0.85
      });

      // Handle resize for Vanta
      window.addEventListener('resize', () => {
        if(vantaEffect) vantaEffect.resize();
      });

      // Language Check
      const savedLang=localStorage.getItem("language")||"en";
      setLanguage(savedLang);

      // --- STAGGERED CLIP-SLIDE ANIMATION ---
      gsap.registerPlugin(ScrollTrigger);

      // 1. Initial Load Stagger (Nav & Hero)
      const loadTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      loadTl.fromTo(".clip-anim",
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", y: "1.5rem", opacity: 0 },
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", y: 0, opacity: 1, duration: 1.2, stagger: 0.12, delay: 0.2 }
      );

      // 2. Scroll-triggered Stagger
      gsap.utils.toArray('.scroll-clip-anim').forEach((el) => {
        gsap.fromTo(el,
          { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", y: "2.5rem", opacity: 0 },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", y: 0, opacity: 1,
            duration: 1.2, ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      });

      // Nav bar hide/show on scroll
      let lastScroll = 0;
      const navEl = document.getElementById('main-nav');
      ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          const currentScroll = window.scrollY;
          if (currentScroll < 100) {
            gsap.to(navEl, { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" });
          } else if (currentScroll > lastScroll && currentScroll > 200) {
            gsap.to(navEl, { y: -80, opacity: 0, duration: 0.4, ease: "power2.in" });
          } else if (currentScroll < lastScroll) {
            gsap.to(navEl, { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" });
          }
          lastScroll = currentScroll;
        }
      });
    });

    // Form Overlay Logic
    let formOpen = false;
    let formTl = null;

    function openHeroForm() {
      if(formOpen) return;
      formOpen = true;
      const overlay = document.getElementById('hero-form-overlay');
      const backdrop = document.getElementById('hero-form-backdrop');
      const card = document.getElementById('hero-form-card');
      const fields = card.querySelectorAll('.form-field-reveal');

      overlay.classList.add('active');
      
      gsap.set(backdrop, { opacity: 0 });
      gsap.set(card, { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", y: 40, opacity: 0 });
      gsap.set(fields, { y: 15, opacity: 0 });

      formTl = gsap.timeline();
      formTl.to(backdrop, { opacity: 1, duration: 0.5, ease: "power2.out" })
            .to(card, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.3")
            .to(fields, { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: "power2.out" }, "-=0.4");
    }

    function closeHeroForm() {
      if(!formOpen) return;
      formOpen = false;
      const overlay = document.getElementById('hero-form-overlay');
      const backdrop = document.getElementById('hero-form-backdrop');
      const card = document.getElementById('hero-form-card');

      if(formTl) formTl.kill();

      gsap.timeline({ onComplete: () => overlay.classList.remove('active') })
          .to(card, { y: 20, opacity: 0, duration: 0.3, ease: "power2.in" })
          .to(backdrop, { opacity: 0, duration: 0.3, ease: "power2.in" }, "-=0.2");
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
      
<div className="absolute inset-0 z-0 flex justify-center pointer-events-none overflow-hidden">
<div className="w-full max-w-6xl flex justify-between px-4 sm:px-8 absolute h-full pointer-events-none">
<div className="absolute left-0 top-0 bottom-0 w-px bg-white/20 overflow-hidden">
<div className="absolute w-full h-[50vh] -top-[50vh] bg-gradient-to-b from-transparent via-[#C8956C] to-transparent animate-beam-drop shadow-[0_0_25px_rgba(200,149,108,0.8)]" style={{opacity: '0.7', animationDelay: '0s', animationDuration: '14s'}}></div>
</div>
<div className="absolute right-0 top-0 bottom-0 w-px bg-white/20 overflow-hidden">
<div className="absolute w-full h-[50vh] -top-[50vh] bg-gradient-to-b from-transparent via-[#46d4c6] to-transparent animate-beam-drop shadow-[0_0_25px_rgba(70,212,198,0.6)]" style={{opacity: '0.7', animationDelay: '4s', animationDuration: '13s'}}></div>
</div>
</div>
</div>
<nav className="fixed top-0 left-0 right-0 z-[100] print:hidden clip-anim" id="main-nav">
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
<a className="nav-logo-box group hover:shadow-lg transition-shadow" href="#">
<img alt="Logo" className="w-8 h-8 rounded-lg group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/396946ad-5421-448c-8ca8-03ba9e1dd2d9_1600w.png"/>
<span className="font-medium text-sm tracking-tight text-gray-900 hidden sm:block" data-i18n="brand">Ariana Integrity</span>
</a>
<div className="nav-right-group">
<select className="text-xs font-medium text-white/80 bg-white/10 backdrop-blur-md border border-white/15 cursor-pointer focus:outline-none rounded-full px-3 py-2 hover:bg-white/20 transition-colors appearance-none" id="lang-selector" onchange="setLanguage(this.value)">
<option className="text-gray-900" value="en">EN</option><option className="text-gray-900" value="da">دری</option>
</select>
<div className="menu-dropdown" id="nav-menu-dropdown">
<button aria-expanded="false" aria-haspopup="true" aria-label="Navigation menu" className="menu-dropdown-btn" onclick="var dd=document.getElementById('nav-menu-dropdown');dd.classList.toggle('open');this.setAttribute('aria-expanded',dd.classList.contains('open'))">
            Menu
            <iconify-icon icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</button>
<div className="menu-dropdown-panel">
<a href="#services" onclick="document.getElementById('nav-menu-dropdown').classList.remove('open')">Visa &amp; Immigration</a>
<a href="#about" onclick="document.getElementById('nav-menu-dropdown').classList.remove('open')">About</a>
<a href="#reviews" onclick="document.getElementById('nav-menu-dropdown').classList.remove('open')">Reviews</a>
<a className="menu-cta" href="https://wa.me/971521234567" onclick="document.getElementById('nav-menu-dropdown').classList.remove('open')" target="_blank">
              Get In Touch
              <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</nav>
<main className="w-full z-10 pb-40 relative">
<section className="hero-fullbleed" id="hero-section">

<div className="absolute inset-0 z-0" id="vanta-bg"></div>
<div className="hero-fullbleed-overlay"></div>
<div className="hero-fullbleed-content" id="hero-content">
<div className="clip-anim mb-8">
<span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs font-normal text-white/90 shadow-lg">
<span className="bg-[#C8956C] text-white text-xs font-medium px-2 py-0.5 rounded-full uppercase tracking-wider">New</span>
            Dubai-based global visa solutions
          </span>
</div>
<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-medium text-white tracking-tight leading-[1.05] mb-6 max-w-5xl flex flex-col items-center">
<span className="clip-anim block">Consider your visa</span>
<span className="clip-anim block font-editorial italic font-light">problems solved.</span>
</h1>
<p className="clip-anim text-lg sm:text-xl font-light text-white/80 leading-relaxed mb-10 max-w-2xl">
          Go anywhere you dream of while we handle<br className="hidden sm:block"/> your visa paperwork from start to finish.
        </p>
<div className="clip-anim">
<button className="group relative inline-flex items-center gap-3 text-sm font-medium text-gray-900 bg-white rounded-full pl-8 pr-6 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.18)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 active:shadow-[0_4px_16px_rgba(0,0,0,0.15)] overflow-hidden isolate" id="hero-start-btn" onclick="openHeroForm()">
<div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none z-0"></div>
<span className="relative z-10">Start your application</span>
<span className="relative z-10 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center group-hover:bg-[#C8956C] transition-colors duration-300">
<iconify-icon className="rtl-flip group-hover:translate-x-0.5 transition-transform duration-300" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</button>
</div>
</div>
<div className="hero-bottom-curve">
<svg preserveaspectratio="none" style={{height: 'clamp(100px,12vw,180px)'}} viewbox="0 0 1440 180" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="720" cy="180" fill="#c9d0da" rx="900" ry="180"></ellipse>
</svg>
</div>
</section>
<section className="max-w-6xl mx-auto px-4 sm:px-6 mt-40 perspective-[2000px]" id="services">
<div className="flex flex-col items-center text-center mb-16 scroll-clip-anim">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8956C]/10 border border-[#C8956C]/20 text-[#C8956C] text-xs font-normal uppercase tracking-widest mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-[#C8956C] animate-pulse"></span>
<span data-i18n="serv_tag">Global Solutions</span>
</div>
<h2 className="text-4xl sm:text-5xl font-normal text-gray-900 tracking-tight">Intelligent pathways<br/><span className="font-editorial italic">engineered for success.</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
<div className="relative block w-full aspect-[4/3] scroll-flip-card scroll-clip-anim" style={{perspective: '2000px'}}>
<div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]" id="svc-card-1">
<div className="absolute inset-0 w-full h-full [backface-visibility:hidden] cursor-pointer group rounded-[2.5rem] overflow-hidden bg-white border border-gray-100 shadow-2xl shadow-gray-300/60 ring-1 ring-black/[0.03]" onclick="document.getElementById('svc-card-1').classList.add('[transform:rotateY(180deg)]')">
<img alt="Afghan Services" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc0a2b97-89cc-49a0-a96e-9e3d9c69467f_1600w.png"/>
<div className="absolute inset-0 service-overlay"></div>
<div className="p-8 sm:p-10 flex flex-col z-10 absolute inset-0 justify-between pointer-events-none">
<span className="inline-flex self-start items-center rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-light text-gray-700 border border-white/40 shadow-sm uppercase tracking-wider" data-i18n="s_afghan_tag">Humanitarian Priority</span>
<div>
<h3 className="text-3xl sm:text-4xl font-light text-white tracking-tight mb-2 group-hover:text-[#C8956C] transition-colors">Resettlement &amp;<br/>Work Programs</h3>
<p className="text-sm font-light text-gray-200">Specialized support across six continents.</p>
</div>
</div>
</div>
<div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[2.5rem] bg-white border border-gray-100 shadow-2xl ring-1 ring-black/[0.03] p-6 sm:p-10 flex flex-col z-20">
<div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
<h3 className="text-lg font-medium text-gray-900 tracking-tight">Visa Services</h3>
<button className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors" onclick="document.getElementById('svc-card-1').classList.remove('[transform:rotateY(180deg)]')"><iconify-icon icon="solar:close-circle-linear" width="22"></iconify-icon></button>
</div>
<div className="flex-1 overflow-y-auto text-sm font-light text-gray-600 leading-relaxed space-y-3">
<p>Priority humanitarian processing for nationals: SIV, P1/P2, ARAP, and family reunification across US, Canada, Europe.</p>
<div className="flex gap-3 mt-4">
<button className="flex-1 bg-gray-900 text-white text-xs font-medium py-3 rounded-xl hover:bg-gray-800 transition-colors">Details</button>
</div>
</div>
</div>
</div>
</div>
<div className="relative block w-full aspect-[4/3] scroll-flip-card scroll-clip-anim md:mt-24" style={{perspective: '2000px'}}>
<div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]" id="svc-card-2">
<div className="absolute inset-0 w-full h-full [backface-visibility:hidden] cursor-pointer group rounded-[2.5rem] overflow-hidden bg-white border border-gray-100 shadow-2xl shadow-gray-300/60 ring-1 ring-black/[0.03]" onclick="document.getElementById('svc-card-2').classList.add('[transform:rotateY(180deg)]')">
<img alt="Investment" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f02218a5-df30-4ad1-8084-1533fe96978b_1600w.png"/>
<div className="absolute inset-0 service-overlay"></div>
<div className="p-8 sm:p-10 flex flex-col z-10 absolute inset-0 justify-between pointer-events-none">
<span className="inline-flex self-start items-center rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-light text-gray-700 border border-white/40 shadow-sm uppercase tracking-wider" data-i18n="s_invest_tag">Premium Routes</span>
<div>
<h3 className="text-3xl sm:text-4xl font-light text-white tracking-tight mb-2 group-hover:text-[#46d4c6] transition-colors">Investment &amp;<br/>Golden Visa</h3>
<p className="text-sm font-light text-gray-200">Citizenship &amp; residency through investment.</p>
</div>
</div>
</div>
<div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[2.5rem] bg-white border border-gray-100 shadow-2xl ring-1 ring-black/[0.03] p-6 sm:p-10 flex flex-col z-20">
<div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
<h3 className="text-lg font-medium text-gray-900 tracking-tight">Investment Services</h3>
<button className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors" onclick="document.getElementById('svc-card-2').classList.remove('[transform:rotateY(180deg)]')"><iconify-icon icon="solar:close-circle-linear" width="22"></iconify-icon></button>
</div>
<div className="flex-1 overflow-y-auto text-sm font-light text-gray-600 leading-relaxed space-y-3">
<p>Citizenship-by-Investment: Dominica, Turkey. Fast-track global mobility.</p>
<div className="flex gap-3 mt-4">
<button className="flex-1 bg-gray-900 text-white text-xs font-medium py-3 rounded-xl hover:bg-gray-800 transition-colors">Explore Options</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="max-w-6xl mx-auto px-4 sm:px-6 mt-40" id="about">
<div className="text-center mb-16 scroll-clip-anim">
<h2 className="text-4xl sm:text-5xl font-normal text-gray-900 tracking-tight mb-4"><span data-i18n="about_title1">Redefining Immigration</span> <span className="font-editorial italic" data-i18n="about_title2">With Intelligence.</span></h2>
<p className="text-base font-light text-gray-700 max-w-2xl mx-auto" data-i18n="about_desc">The future of global mobility starts here.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="scroll-clip-anim bg-white/60 backdrop-blur-xl border border-white/60 rounded-[2rem] p-8 shadow-2xl hover:shadow-[#C8956C]/10 transition-all hover:-translate-y-1">
<div className="w-10 h-10 bg-gray-900 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg"><iconify-icon icon="solar:shield-user-linear" width="20"></iconify-icon></div>
<h3 className="text-lg font-medium text-gray-900 mb-2 tracking-tight" data-i18n="about_f1_title">Military-Grade Security</h3>
<p className="text-gray-600 text-sm font-light leading-relaxed" data-i18n="about_f1_desc">Bank-level encryption protects your sensitive documents and personal data.</p>
</div>
<div className="scroll-clip-anim bg-white/60 backdrop-blur-xl border border-white/60 rounded-[2rem] p-8 shadow-2xl hover:shadow-[#46d4c6]/10 transition-all hover:-translate-y-1 md:mt-12">
<div className="w-10 h-10 bg-gray-900 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg"><iconify-icon icon="solar:chat-round-line-linear" width="20"></iconify-icon></div>
<h3 className="text-lg font-medium text-gray-900 mb-2 tracking-tight" data-i18n="about_f2_title">Multilingual Excellence</h3>
<p className="text-gray-600 text-sm font-light leading-relaxed" data-i18n="about_f2_desc">Native speakers in Dari, Pashto, Arabic, Urdu, and 12+ languages.</p>
</div>
</div>
</section>
<section className="max-w-6xl mx-auto px-4 sm:px-6 mt-40" id="reviews">
<div className="text-center mb-16 scroll-clip-anim">
<h2 className="text-4xl sm:text-5xl font-normal text-gray-900 tracking-tight">Trusted by thousands across<br/><span className="font-editorial italic">6 continents.</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="scroll-clip-anim bg-white/70 backdrop-blur-xl border border-white/60 rounded-[2rem] p-8 shadow-xl flex flex-col justify-between">
<div><iconify-icon className="text-[#C8956C] mb-4" icon="solar:quote-up-bold" width="20"></iconify-icon><p className="text-base font-medium text-gray-900 leading-snug mb-6" data-i18n="rev1_text">“Their service is very professional and reliable.”</p></div>
<div className="flex items-center gap-3 mt-auto"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-stone-400 to-stone-600 flex items-center justify-center text-white font-medium text-xs">A</div><div><p className="text-xs font-medium text-gray-900" data-i18n="rev1_name">Ahmad Z.</p></div></div>
</div>
<div className="scroll-clip-anim bg-white/70 backdrop-blur-xl border border-white/60 rounded-[2rem] p-8 shadow-xl flex flex-col justify-between md:mt-12">
<div><iconify-icon className="text-[#C8956C] mb-4" icon="solar:quote-up-bold" width="20"></iconify-icon><p className="text-base font-medium text-gray-900 leading-snug mb-6" data-i18n="rev2_text">“My experience with this team was excellent.”</p></div>
<div className="flex items-center gap-3 mt-auto"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center text-white font-medium text-xs">F</div><div><p className="text-xs font-medium text-gray-900" data-i18n="rev2_name">Farid M.</p></div></div>
</div>
<div className="scroll-clip-anim bg-white/70 backdrop-blur-xl border border-white/60 rounded-[2rem] p-8 shadow-xl flex flex-col justify-between">
<div><iconify-icon className="text-[#C8956C] mb-4" icon="solar:quote-up-bold" width="20"></iconify-icon><p className="text-base font-medium text-gray-900 leading-snug mb-6" data-i18n="rev3_text">“Professional, reliable, and easy to work with.”</p></div>
<div className="flex items-center gap-3 mt-auto"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-medium text-xs">S</div><div><p className="text-xs font-medium text-gray-900" data-i18n="rev3_name">Sarah Jenkins</p></div></div>
</div>
</div>
</section>
<section className="max-w-5xl mx-auto px-4 sm:px-6 mt-40 perspective-[2000px]">
<div className="relative bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-gray-300/60 border border-white/50 ring-1 ring-black/[0.03] scroll-clip-anim">
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C8956C] via-[#46d4c6] to-[#C8956C]"></div>
<div className="py-16 sm:py-24 flex flex-col z-10 text-center px-6 relative items-center">
<h2 className="text-4xl sm:text-5xl font-normal text-gray-900 tracking-tight mb-4">Ready to begin your <span className="font-editorial italic">journey?</span></h2>
<p className="text-lg font-light text-gray-600 max-w-2xl mx-auto mb-10" data-i18n="footer_tagline">Global mobility shouldn't be a maze. We make it a mission.</p>
<button className="group inline-flex items-center gap-2 text-sm font-medium text-white rounded-full px-8 py-4 shadow-lg shadow-[#C8956C]/30 hover:-translate-y-0.5 transition-all relative overflow-hidden isolate" onclick="openHeroForm()">
<div className="absolute inset-[1px] rounded-full bg-[#C8956C] group-hover:bg-[#b5804f] transition-colors pointer-events-none z-0"></div>
<span className="relative z-10 flex items-center gap-2" data-i18n="hero_btn1">Start Your Journey</span>
<iconify-icon className="relative z-10 rtl-flip" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</section>
</main>
<div className="hero-form-overlay" id="hero-form-overlay">
<div className="hero-form-backdrop" id="hero-form-backdrop" onclick="closeHeroForm()"></div>
<div className="hero-form-card" id="hero-form-card">
<div className="bg-white/90 backdrop-blur-2xl border border-white/60 rounded-[2rem] p-8 sm:p-10 shadow-[0_40px_100px_-25px_rgba(0,0,0,0.3)] relative overflow-hidden">
<button aria-label="Close form" className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all z-10 hover:rotate-90 duration-300" onclick="closeHeroForm()">
<iconify-icon className="text-gray-500" icon="solar:close-circle-linear" width="18"></iconify-icon>
</button>
<h3 className="text-xl font-medium text-gray-900 mb-1.5 tracking-tight form-field-reveal">Where do you want to go?</h3>
<p className="text-xs font-light text-gray-500 mb-7 form-field-reveal">Start your travel Visa application</p>
<form className="space-y-4" onsubmit="event.preventDefault(); closeHeroForm();" role="form">
<div className="form-field-reveal">
<label className="block text-xs uppercase tracking-wider font-medium text-gray-700 mb-1.5">Full Name</label>
<input className="w-full bg-gray-50 border border-gray-200/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#C8956C]/50 focus:border-[#C8956C]/50 transition-all font-light" placeholder="Your Name" required="" type="text"/>
</div>
<div className="form-field-reveal">
<label className="block text-xs uppercase tracking-wider font-medium text-gray-700 mb-1.5">Email</label>
<input className="w-full bg-gray-50 border border-gray-200/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#C8956C]/50 focus:border-[#C8956C]/50 transition-all font-light" placeholder="your@email.com" required="" type="email"/>
</div>
<div className="form-field-reveal">
<label className="block text-xs uppercase tracking-wider font-medium text-gray-700 mb-1.5">Destination</label>
<div className="relative">
<select className="w-full bg-gray-50 border border-gray-200/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#C8956C]/50 focus:border-[#C8956C]/50 transition-all font-light appearance-none text-gray-500" required="">
<option disabled="" selected="" value="">Select Destination</option>
<option value="usa">USA</option>
<option value="uk">UK</option>
<option value="uae">UAE</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<div className="form-field-reveal pt-2">
<label className="custom-checkbox cursor-pointer flex items-center gap-2 group">
<input className="peer hidden" required="" type="checkbox"/>
<div className="w-4 h-4 rounded border border-gray-300 flex items-center justify-center text-transparent transition-colors group-hover:border-[#C8956C]/50">
<iconify-icon className="peer-checked:text-[#C8956C]" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-xs font-light text-gray-500" data-i18n="form_consent">I agree to the Privacy Policy.</span>
</label>
</div>
<button className="form-field-reveal w-full bg-gray-900 text-white font-medium py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors shadow-lg active:scale-[0.98] mt-2" type="submit">
            Start Application
            <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
<footer className="w-full max-w-6xl mx-auto px-6 pb-12 pt-16 relative z-10">
<div className="border-t border-gray-300 pt-16 flex flex-col md:flex-row justify-between gap-12 md:gap-24">
<div className="max-w-xs">
<div className="flex items-center gap-2.5 mb-6">
<img alt="Logo" className="w-8 h-8 rounded-lg object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/396946ad-5421-448c-8ca8-03ba9e1dd2d9_1600w.png"/>
<span className="font-medium text-sm tracking-tight text-gray-900">ARIANA INTEGRITY</span>
</div>
<p className="text-sm font-light text-gray-700 leading-snug mb-4">Global mobility shouldn't be a maze.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 w-full md:w-auto">
<div className="flex flex-col gap-3"><span className="text-xs font-medium text-gray-900 uppercase tracking-wider">Headquarters</span><p className="text-xs font-light text-gray-600">Dubai, UAE</p></div>
<div className="flex flex-col gap-3"><span className="text-xs font-medium text-gray-900 uppercase tracking-wider">Contact</span><a className="text-xs font-light text-gray-600 hover:text-gray-900" href="#">+971 52 123 4567</a></div>
</div>
</div>
<div className="mt-12 pt-6 border-t border-gray-300 flex flex-col md:flex-row justify-between text-xs font-light text-gray-500 gap-2">
<span>© 2026 Ariana Integrity</span>
<span>Empowering mobility. Transforming lives.</span>
</div>
</footer>


    </>
  );
}
