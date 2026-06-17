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



        const translations = {
            en: {
                brandName: "HAADI ACADEMY",
                brandSub: "EDUCATIONAL EXCELLENCE",
                navHome: "Home",
                navAbout: "About Us",
                navCourses: "Courses",
                navContact: "Contact",
                navCall: "Call Now",
                heroBadge: "Admissions Open 2024-25",
                heroTitle: "Guiding Minds,<br><span class='text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-teal-600'>Building Futures.</span>",
                heroDesc: "A premium educational institute focused on academic excellence, moral values, and holistic development for the leaders of tomorrow.",
                ctaWhatsapp: "WhatsApp Enquiry",
                ctaVisit: "Visit Campus",
                stat1: "Dedication",
                stat2: "Faculty",
                stat3: "Environment",
                stat4: "Support",
                aboutTitle: "About Haadi Academy",
                aboutDesc: "We are committed to providing a balanced education that nurtures the mind and the soul. Our curriculum integrates modern academic standards with profound moral teachings.",
                missionTitle: "Our Mission",
                missionDesc: "To empower students with knowledge and character, fostering a generation of responsible and enlightened citizens.",
                visionTitle: "Our Vision",
                visionDesc: "To be a beacon of excellence in education, blending academic rigor with ethical values respected globally.",
                valuesTitle: "Core Values",
                valuesDesc: "Integrity, Compassion, Excellence, and Faith are the pillars upon which we build our educational journey.",
                whyTitle: "Why Choose Haadi?",
                whyDesc: "We go beyond textbooks. We create an environment where children feel safe, valued, and inspired to learn. Our holistic approach ensures success in this world and the hereafter.",
                feat1: "Experienced & Caring Educators",
                feat2: "Focus on Moral & Academic Growth",
                feat3: "Affordable Fee Structure",
                feat4: "Separate Facilities for Boys & Girls",
                whyCard1T: "Excellence", whyCard1D: "Top-tier curriculum",
                whyCard2T: "Tarbiyah", whyCard2D: "Character building",
                whyCard3T: "Community", whyCard3D: "Strong parent ties",
                whyCard4T: "Safety", whyCard4D: "Secure campus",
                courseTitle: "Our Programs",
                courseSubtitle: "Tailored learning paths for every age group.",
                viewAll: "Enquire Now",
                prog1T: "School Tuitions", prog1D: "Comprehensive support for regular school curriculum across all subjects.",
                prog2T: "Islamic Studies", prog2D: "Quran Nazira, Hifz, Tajweed, and fundamental Islamic jurisprudence.",
                prog3T: "Skill Development", prog3D: "Computer basics, language proficiency, and soft skills training.",
                prog4T: "Academic Support", prog4D: "Exam preparation, homework assistance, and personalized guidance.",
                learnMore: "Learn More &rarr;",
                contactTitle: "Get in Touch",
                contactDesc: "We are here to answer your questions. Visit us or contact us via phone or WhatsApp.",
                addressLabel: "Address",
                phoneLabel: "Phone",
                formName: "Full Name",
                formPhone: "Phone Number",
                formMessage: "Message",
                formSubmit: "Send Enquiry via WhatsApp",
                footerDesc: "Empowering the next generation through education rooted in moral values and academic excellence.",
                linkTitle: "Quick Links",
                socialTitle: "Social Media"
            },
            ur: {
                brandName: "ہادی اکیڈمی",
                brandSub: "تعلیمی فضیلت",
                navHome: "ہوم",
                navAbout: "ہمارے بارے میں",
                navCourses: "کورسیز",
                navContact: "رابطہ کریں",
                navCall: "ابھی کال کریں",
                heroBadge: "داخلے جاری ہیں ۲۰۲۴-۲۵",
                heroTitle: "ذہنوں کی رہنمائی،<br><span class='text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-teal-600'>مستقبل کی تعمیر۔</span>",
                heroDesc: "ایک پریمیم تعلیمی ادارہ جو تعلیمی فضیلت، اخلاقی اقدار اور کل کے رہنماؤں کی ہمہ گیر ترقی پر مرکوز ہے۔",
                ctaWhatsapp: "واٹس ایپ انکوائری",
                ctaVisit: "کیمپس کا دورہ کریں",
                stat1: "لگن",
                stat2: "اساتذہ",
                stat3: "ماحول",
                stat4: "تعاون",
                aboutTitle: "ہادی اکیڈمی کے بارے میں",
                aboutDesc: "ہم ایک ایسی متوازن تعلیم فراہم کرنے کے لیے پرعزم ہیں جو ذہن اور روح کی پرورش کرے۔ ہمارا نصاب جدید تعلیمی معیارات کو گہری اخلاقی تعلیمات کے ساتھ مربوط کرتا ہے۔",
                missionTitle: "ہمارا مشن",
                missionDesc: "طلباء کو علم اور کردار کے ساتھ بااختیار بنانا، ذمہ دار اور روشن خیال شہریوں کی نسل کو فروغ دینا۔",
                visionTitle: "ہمارا وژن",
                visionDesc: "تعلیم میں فضیلت کا مینار بننا، تعلیمی سختی کو اخلاقی اقدار کے ساتھ ملانا جو عالمی سطح پر قابل احترام ہوں۔",
                valuesTitle: "بنیادی اقدار",
                valuesDesc: "دیانتداری، شفقت، فضیلت اور ایمان وہ ستون ہیں جن پر ہم اپنا تعلیمی سفر استوار کرتے ہیں۔",
                whyTitle: "ہادی کا انتخاب کیوں؟",
                whyDesc: "ہم درسی کتابوں سے آگے جاتے ہیں۔ ہم ایسا ماحول بناتے ہیں جہاں بچے محفوظ، قابل قدر اور سیکھنے کے لیے متاثر محسوس کریں۔ ہمارا ہمہ گیر نقطہ نظر دنیا اور آخرت میں کامیابی کو یقینی بناتا ہے۔",
                feat1: "تجربہ کار اور شفیق اساتذہ",
                feat2: "اخلاقی اور تعلیمی ترقی پر توجہ",
                feat3: "مناسب فیس کا ڈھانچہ",
                feat4: "لڑکوں اور لڑکیوں کے لیے الگ سہولیات",
                whyCard1T: "فضیلت", whyCard1D: "اعلیٰ معیار کا نصاب",
                whyCard2T: "تربیت", whyCard2D: "کردار سازی",
                whyCard3T: "کمیونٹی", whyCard3D: "والدین کے مضبوط تعلقات",
                whyCard4T: "حفاظت", whyCard4D: "محفوظ کیمپس",
                courseTitle: "ہمارے پروگرام",
                courseSubtitle: "ہر عمر کے گروپ کے لیے موزوں سیکھنے کے راستے۔",
                viewAll: "ابھی پوچھ گچھ کریں",
                prog1T: "اسکول ٹیوشن", prog1D: "تمام مضامین میں باقاعدہ اسکول کے نصاب کے لیے جامع تعاون۔",
                prog2T: "اسلامی علوم", prog2D: "قرآن ناظرہ، حفظ، تجوید، اور بنیادی اسلامی فقہ۔",
                prog3T: "مہارت کی ترقی", prog3D: "کمپیوٹر کی بنیادی باتیں، زبان کی مہارت، اور نرم مہارت کی تربیت۔",
                prog4T: "تعلیمی معاونت", prog4D: "امتحان کی تیاری، ہوم ورک میں مدد، اور ذاتی رہنمائی۔",
                learnMore: "مزید جانیں &larr;",
                contactTitle: "رابطہ کریں",
                contactDesc: "ہم آپ کے سوالات کا جواب دینے کے لیے یہاں ہیں۔ ہم سے ملیں یا فون یا واٹس ایپ کے ذریعے رابطہ کریں۔",
                addressLabel: "پتہ",
                phoneLabel: "فون",
                formName: "پورا نام",
                formPhone: "فون نمبر",
                formMessage: "پیغام",
                formSubmit: "واٹس ایپ کے ذریعے بھیجیں",
                footerDesc: "اخلاقی اقدار اور تعلیمی فضیلت میں جڑی تعلیم کے ذریعے اگلی نسل کو بااختیار بنانا۔",
                linkTitle: "فوری لنکس",
                socialTitle: "سوشل میڈیا"
            }
        };

        let currentLang = 'en';

        function toggleLanguage() {
            currentLang = currentLang === 'en' ? 'ur' : 'en';
            
            // Toggle Direction
            document.documentElement.setAttribute('dir', currentLang === 'ur' ? 'rtl' : 'ltr');
            document.documentElement.lang = currentLang;

            // Toggle Fonts
            const body = document.body;
            if (currentLang === 'ur') {
                body.classList.add('font-urdu');
                body.classList.remove('font-sans');
            } else {
                body.classList.remove('font-urdu');
                body.classList.add('font-sans');
            }

            // Update Content
            const elements = document.querySelectorAll('[data-key]');
            elements.forEach(el => {
                const key = el.getAttribute('data-key');
                if (translations[currentLang][key]) {
                    el.classList.add('fade-in');
                    el.innerHTML = translations[currentLang][key];
                    setTimeout(() => el.classList.remove('fade-in'), 500);
                }
            });
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
      

<nav className="fixed w-full z-50 bg-amber-100/80 backdrop-blur-md border-b border-teal-200 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-20 items-center">

<div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onclick="window.scrollTo(0,0)">
<div className="w-10 h-10 bg-lime-500 rounded-lg flex items-center justify-center text-white shadow-md">
<span className="iconify" data-icon="lucide:book-open" data-width="24"></span>
</div>
<div className="flex flex-col">
<span className="font-semibold text-slate-900 tracking-tight leading-none text-lg" data-key="brandName">HAADI ACADEMY</span>
<span className="text-xs text-slate-500 font-medium tracking-wide mt-1" data-key="brandSub">EDUCATIONAL EXCELLENCE</span>
</div>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-slate-600 hover:text-lime-600 transition-colors" data-key="navHome" href="#home">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-lime-600 transition-colors" data-key="navAbout" href="#about">About Us</a>
<a className="text-sm font-medium text-slate-600 hover:text-lime-600 transition-colors" data-key="navCourses" href="#courses">Courses</a>
<a className="text-sm font-medium text-slate-600 hover:text-lime-600 transition-colors" data-key="navContact" href="#contact">Contact</a>

<button className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-200 bg-white/50 text-xs font-medium hover:bg-white transition-colors" onclick="toggleLanguage()">
<span className="iconify" data-icon="lucide:languages" data-width="14"></span>
<span id="langLabel">English / اردو</span>
</button>

<a className="bg-slate-900 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all flex items-center gap-2 shadow-xl shadow-lime-500/10" href="tel:+919686654172">
<span className="iconify" data-icon="lucide:phone" data-width="16"></span>
<span data-key="navCall">Call Now</span>
</a>
</div>

<div className="md:hidden flex items-center gap-4">
<button className="text-slate-600" onclick="toggleLanguage()">
<span className="iconify" data-icon="lucide:languages" data-width="20"></span>
</button>
<button className="text-slate-600 hover:text-lime-600" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-amber-50 border-t border-teal-100 absolute w-full left-0" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-2">
<a className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-amber-100" data-key="navHome" href="#home">Home</a>
<a className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-amber-100" data-key="navAbout" href="#about">About Us</a>
<a className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-amber-100" data-key="navCourses" href="#courses">Courses</a>
<a className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-amber-100" data-key="navContact" href="#contact">Contact</a>
</div>
</div>
</nav>

<section className="min-h-screen w-full bg-amber-100 relative overflow-hidden flex items-center pt-20" id="home">

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-lime-200/30 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute bottom-[10%] right-[10%] w-[40%] h-[60%] bg-teal-200/30 rounded-full blur-3xl"></div>

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="flex flex-col items-start text-left space-y-8 animate-hero delay-100">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-teal-200 shadow-xl shadow-teal-100/50">
<span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse"></span>
<span className="text-xs font-semibold text-slate-700 tracking-wide uppercase" data-key="heroBadge">Admissions Open 2024-25</span>
</div>

<h1 className="text-5xl lg:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.1]" data-key="heroTitle">
                        Guiding Minds,<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-teal-600">Building Futures.</span>
</h1>

<p className="text-lg text-slate-600 leading-relaxed max-w-lg" data-key="heroDesc">
                        A premium educational institute focused on academic excellence, moral values, and holistic development for the leaders of tomorrow.
                    </p>

<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="px-8 py-4 rounded-xl bg-lime-500 text-white font-semibold hover:bg-lime-600 transition-all shadow-xl shadow-lime-500/20 flex items-center justify-center gap-2 transform hover:-translate-y-1 active:scale-95" href="https://wa.me/919686654172" target="_blank">
<span className="iconify" data-icon="lucide:message-circle" data-width="20"></span>
<span data-key="ctaWhatsapp">WhatsApp Enquiry</span>
</a>
<a className="px-8 py-4 rounded-xl bg-white border border-teal-200 text-slate-700 font-medium hover:bg-teal-50 hover:border-teal-300 transition-all shadow-xl shadow-teal-100/50 flex items-center justify-center gap-2 transform hover:-translate-y-1 active:scale-95" href="#contact">
<span className="iconify" data-icon="lucide:map-pin" data-width="20"></span>
<span data-key="ctaVisit">Visit Campus</span>
</a>
</div>

<div className="pt-4 flex items-center gap-6 text-sm font-medium text-slate-500">
<div className="flex items-center gap-2">
<span className="iconify text-teal-500" data-icon="lucide:check-circle" data-width="16"></span>
<span>Expert Faculty</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-teal-500" data-icon="lucide:check-circle" data-width="16"></span>
<span>Safe Campus</span>
</div>
</div>
</div>

<div className="relative hidden lg:block h-full min-h-[500px] w-full animate-hero delay-300">


<div className="absolute top-10 right-20 w-80 h-96 bg-lime-100 rounded-3xl border border-lime-300 rotate-[-6deg] shadow-xl z-0 transition-transform duration-700 hover:rotate-[-8deg]"></div>

<div className="absolute top-20 right-10 w-80 h-96 bg-teal-100 rounded-3xl border border-teal-200 rotate-[12deg] shadow-xl z-0 transition-transform duration-700 hover:rotate-[15deg]"></div>

<div className="absolute top-16 right-16 w-80 h-96 bg-white rounded-3xl border border-teal-200 shadow-xl z-10 p-6 flex flex-col justify-between transform transition-transform duration-500 hover:scale-[1.02]">
<div>
<div className="w-12 h-12 bg-lime-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-lime-500/30">
<span className="iconify" data-icon="lucide:graduation-cap" data-width="24"></span>
</div>
<div className="space-y-3">
<div className="h-2 w-24 bg-slate-100 rounded-full"></div>
<div className="h-2 w-full bg-slate-100 rounded-full"></div>
<div className="h-2 w-2/3 bg-slate-100 rounded-full"></div>
</div>
</div>
<div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-teal-200"></div>
<div>
<div className="h-2 w-16 bg-slate-200 rounded-full mb-1"></div>
<div className="h-1.5 w-10 bg-slate-200 rounded-full"></div>
</div>
</div>
<div className="h-1.5 w-full bg-slate-200/50 rounded-full"></div>
</div>
</div>

<div className="absolute bottom-20 right-80 bg-white px-4 py-3 rounded-xl border border-teal-200 shadow-xl z-20 flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
<span className="flex h-3 w-3 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-lime-500"></span>
</span>
<span className="text-xs font-semibold text-slate-700">Admissions Open</span>
</div>
</div>
</div>
</div>
</section>

<div className="border-y border-teal-200 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="hover:translate-y-[-2px] transition-transform duration-300">
<div className="text-3xl font-semibold text-slate-900 mb-1">100%</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wider" data-key="stat1">Dedication</div>
</div>
<div className="hover:translate-y-[-2px] transition-transform duration-300">
<div className="text-3xl font-semibold text-slate-900 mb-1">Exp.</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wider" data-key="stat2">Faculty</div>
</div>
<div className="hover:translate-y-[-2px] transition-transform duration-300">
<div className="text-3xl font-semibold text-slate-900 mb-1">Safe</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wider" data-key="stat3">Environment</div>
</div>
<div className="hover:translate-y-[-2px] transition-transform duration-300">
<div className="text-3xl font-semibold text-slate-900 mb-1">RTL</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wider" data-key="stat4">Support</div>
</div>
</div>
</div>
</div>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4" data-key="aboutTitle">About Haadi Academy</h2>
<p className="text-slate-500 leading-relaxed" data-key="aboutDesc">
                    We are committed to providing a balanced education that nurtures the mind and the soul. Our curriculum integrates modern academic standards with profound moral teachings.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-teal-200 transition-colors hover:shadow-xl shadow-teal-100/20">
<div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center text-lime-700 mb-6">
<span className="iconify" data-icon="lucide:target" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3" data-key="missionTitle">Our Mission</h3>
<p className="text-sm text-slate-500 leading-relaxed" data-key="missionDesc">To empower students with knowledge and character, fostering a generation of responsible and enlightened citizens.</p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-teal-200 transition-colors hover:shadow-xl shadow-teal-100/20">
<div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-6">
<span className="iconify" data-icon="lucide:eye" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3" data-key="visionTitle">Our Vision</h3>
<p className="text-sm text-slate-500 leading-relaxed" data-key="visionDesc">To be a beacon of excellence in education, blending academic rigor with ethical values respected globally.</p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-teal-200 transition-colors hover:shadow-xl shadow-teal-100/20">
<div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 mb-6">
<span className="iconify" data-icon="lucide:heart-handshake" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3" data-key="valuesTitle">Core Values</h3>
<p className="text-sm text-slate-500 leading-relaxed" data-key="valuesDesc">Integrity, Compassion, Excellence, and Faith are the pillars upon which we build our educational journey.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row gap-16 items-center">
<div className="w-full md:w-1/2">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6" data-key="whyTitle">Why Choose Haadi?</h2>
<p className="text-slate-400 mb-8 leading-relaxed" data-key="whyDesc">
                        We go beyond textbooks. We create an environment where children feel safe, valued, and inspired to learn. Our holistic approach ensures success in this world and the hereafter.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<span className="iconify text-lime-400" data-icon="lucide:check-circle" data-width="20"></span>
<span data-key="feat1">Experienced &amp; Caring Educators</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-lime-400" data-icon="lucide:check-circle" data-width="20"></span>
<span data-key="feat2">Focus on Moral &amp; Academic Growth</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-lime-400" data-icon="lucide:check-circle" data-width="20"></span>
<span data-key="feat3">Affordable Fee Structure</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-lime-400" data-icon="lucide:check-circle" data-width="20"></span>
<span data-key="feat4">Separate Facilities for Boys &amp; Girls</span>
</li>
</ul>
</div>
<div className="w-full md:w-1/2">
<div className="grid grid-cols-2 gap-4">
<div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
<span className="iconify text-lime-400 mb-4" data-icon="lucide:graduation-cap" data-width="32"></span>
<h4 className="font-semibold mb-1" data-key="whyCard1T">Excellence</h4>
<p className="text-xs text-slate-400" data-key="whyCard1D">Top-tier curriculum</p>
</div>
<div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm mt-8">
<span className="iconify text-lime-400 mb-4" data-icon="lucide:book-heart" data-width="32"></span>
<h4 className="font-semibold mb-1" data-key="whyCard2T">Tarbiyah</h4>
<p className="text-xs text-slate-400" data-key="whyCard2D">Character building</p>
</div>
<div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
<span className="iconify text-lime-400 mb-4" data-icon="lucide:users" data-width="32"></span>
<h4 className="font-semibold mb-1" data-key="whyCard3T">Community</h4>
<p className="text-xs text-slate-400" data-key="whyCard3D">Strong parent ties</p>
</div>
<div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm mt-8">
<span className="iconify text-lime-400 mb-4" data-icon="lucide:shield-check" data-width="32"></span>
<h4 className="font-semibold mb-1" data-key="whyCard4T">Safety</h4>
<p className="text-xs text-slate-400" data-key="whyCard4D">Secure campus</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-amber-50" id="courses">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-2" data-key="courseTitle">Our Programs</h2>
<p className="text-slate-500" data-key="courseSubtitle">Tailored learning paths for every age group.</p>
</div>
<a className="text-teal-700 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#contact">
<span data-key="viewAll">Enquire Now</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group hover:border-teal-200">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 group-hover:bg-lime-50 group-hover:text-lime-700 transition-colors mb-4">
<span className="iconify" data-icon="lucide:pencil-ruler" data-width="20"></span>
</div>
<h3 className="font-semibold text-slate-900 mb-2" data-key="prog1T">School Tuitions</h3>
<p className="text-xs text-slate-500 leading-relaxed mb-4" data-key="prog1D">Comprehensive support for regular school curriculum across all subjects.</p>
<a className="text-xs font-medium text-teal-700 hover:text-teal-800" data-key="learnMore" href="https://wa.me/919686654172">Learn More →</a>
</div>

<div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group hover:border-teal-200">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 group-hover:bg-lime-50 group-hover:text-lime-700 transition-colors mb-4">
<span className="iconify" data-icon="lucide:book-open-check" data-width="20"></span>
</div>
<h3 className="font-semibold text-slate-900 mb-2" data-key="prog2T">Islamic Studies</h3>
<p className="text-xs text-slate-500 leading-relaxed mb-4" data-key="prog2D">Quran Nazira, Hifz, Tajweed, and fundamental Islamic jurisprudence.</p>
<a className="text-xs font-medium text-teal-700 hover:text-teal-800" data-key="learnMore" href="https://wa.me/919686654172">Learn More →</a>
</div>

<div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group hover:border-teal-200">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 group-hover:bg-lime-50 group-hover:text-lime-700 transition-colors mb-4">
<span className="iconify" data-icon="lucide:brain-circuit" data-width="20"></span>
</div>
<h3 className="font-semibold text-slate-900 mb-2" data-key="prog3T">Skill Development</h3>
<p className="text-xs text-slate-500 leading-relaxed mb-4" data-key="prog3D">Computer basics, language proficiency, and soft skills training.</p>
<a className="text-xs font-medium text-teal-700 hover:text-teal-800" data-key="learnMore" href="https://wa.me/919686654172">Learn More →</a>
</div>

<div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group hover:border-teal-200">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 group-hover:bg-lime-50 group-hover:text-lime-700 transition-colors mb-4">
<span className="iconify" data-icon="lucide:trophy" data-width="20"></span>
</div>
<h3 className="font-semibold text-slate-900 mb-2" data-key="prog4T">Academic Support</h3>
<p className="text-xs text-slate-500 leading-relaxed mb-4" data-key="prog4D">Exam preparation, homework assistance, and personalized guidance.</p>
<a className="text-xs font-medium text-teal-700 hover:text-teal-800" data-key="learnMore" href="https://wa.me/919686654172">Learn More →</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6" data-key="contactTitle">Get in Touch</h2>
<p className="text-slate-500 mb-10" data-key="contactDesc">We are here to answer your questions. Visit us or contact us via phone or WhatsApp.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-lime-50 rounded-full flex items-center justify-center text-lime-700 shrink-0 border border-lime-200">
<span className="iconify" data-icon="lucide:map-pin" data-width="18"></span>
</div>
<div>
<h4 className="font-medium text-slate-900" data-key="addressLabel">Address</h4>
<p className="text-sm text-slate-500 leading-relaxed mt-1">
                                    160, 2nd Cross, 1st Main Road,<br/>
                                    Kushal Nagar, Kadugondanahalli,<br/>
                                    Bengaluru, Karnataka – 560045
                                </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-lime-50 rounded-full flex items-center justify-center text-lime-700 shrink-0 border border-lime-200">
<span className="iconify" data-icon="lucide:phone" data-width="18"></span>
</div>
<div>
<h4 className="font-medium text-slate-900" data-key="phoneLabel">Phone</h4>
<a className="text-sm text-slate-500 hover:text-lime-700 block mt-1" href="tel:+919686654172">+91 9686654172</a>
</div>
</div>
</div>

<div className="mt-8 h-64 bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.277717616674!2d77.6151!3d13.0182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAxJzAyLjIiTiA3N8KwMzYnNTQuNCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" style={{border: '0'}} width="100%"></iframe>
</div>
</div>

<div className="bg-amber-50 p-8 rounded-2xl border border-teal-200 shadow-xl shadow-teal-100/50">
<form className="space-y-4" onsubmit="event.preventDefault(); window.location.href='https://wa.me/919686654172'">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" data-key="formName">Full Name</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500/20 focus:border-lime-500 transition-all bg-white" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" data-key="formPhone">Phone Number</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500/20 focus:border-lime-500 transition-all bg-white" placeholder="+91 90000 00000" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" data-key="formMessage">Message</label>
<textarea className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500/20 focus:border-lime-500 transition-all bg-white" placeholder="I would like to enquire about..." rows="4"></textarea>
</div>
<button className="w-full py-3 rounded-lg bg-lime-500 text-white font-medium text-sm hover:bg-lime-600 transition-all shadow-md shadow-lime-500/20" data-key="formSubmit" type="submit">
                            Send Enquiry via WhatsApp
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 bg-lime-500 rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:book-open" data-width="18"></span>
</div>
<span className="font-semibold text-slate-900 tracking-tight" data-key="brandName">HAADI ACADEMY</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed" data-key="footerDesc">Empowering the next generation through education rooted in moral values and academic excellence.</p>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4" data-key="linkTitle">Quick Links</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-lime-600 transition-colors" data-key="navHome" href="#home">Home</a></li>
<li><a className="hover:text-lime-600 transition-colors" data-key="navAbout" href="#about">About Us</a></li>
<li><a className="hover:text-lime-600 transition-colors" data-key="navCourses" href="#courses">Courses</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4" data-key="socialTitle">Social Media</h4>
<div className="flex space-x-4">
<a className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-lime-50 hover:text-lime-600 transition-colors" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="16"></span>
</a>
<a className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-lime-50 hover:text-lime-600 transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="16"></span>
</a>
<a className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-lime-50 hover:text-lime-600 transition-colors" href="#">
<span className="iconify" data-icon="lucide:youtube" data-width="16"></span>
</a>
</div>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4" data-key="contactTitle">Contact</h4>
<p className="text-xs text-slate-500 mb-2">+91 9686654172</p>
<p className="text-xs text-slate-500">Kushal Nagar, Bengaluru</p>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
<p>© 2024 HAADI EDUCATIONAL ACADEMY. All rights reserved.</p>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-40 bg-lime-500 text-white p-4 rounded-full shadow-lg hover:bg-lime-600 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center" href="https://wa.me/919686654172?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20enquire%20about%20HAADI%20EDUCATIONAL%20ACADEMY." target="_blank">
<span className="iconify" data-icon="lucide:message-circle" data-width="24"></span>
</a>



    </>
  );
}
