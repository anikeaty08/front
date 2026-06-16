import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
slate: {
50: '#f8fafc',
100: '#f1f5f9',
200: '#e2e8f0',
300: '#cbd5e1',
400: '#94a3b8',
500: '#64748b',
600: '#475569',
700: '#334155',
800: '#1e293b',
900: '#0f172a',
},
// Matching the logo Green
accent: {
DEFAULT: '#559F2D',
hover: '#458324',
light: '#dcfce7'
},
// Matching the logo Blue
primary: {
DEFAULT: '#0057B8',
hover: '#004494',
light: '#e0f2fe'
}
},
fontFamily: {
sans: ['Plus Jakarta Sans', 'sans-serif'],
arabic: ['Tajawal', 'sans-serif'],
},
animation: {
'bounce-slow': 'bounce 3s infinite',
'blob': 'blob 7s infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
}
},
boxShadow: {
'glow': '0 0 20px rgba(85, 159, 45, 0.3)',
'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.05)',
'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
}
}
}
}



        // Initialize Lucide Icons with specific configuration
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        const translations = {
            en: {
                nav_services: "Services",
                nav_process: "Process",
                nav_pricing: "Pricing",
                nav_cta: "Start Assessment",
                hero_stats: "12.5k visas granted",
                hero_title_1: "Elite Global",
                hero_title_2: "Migration",
                hero_desc: "From strategic business investments to skilled migration pathways, secure your future with our government-licensed consultation services.",
                btn_book: "Book Consultation",
                btn_meet: "Meet Consultants",
                rating_text: "4.9/5 Rating",
                certified_text: "Government Certified",
                card_name: "Sarah Jenkins",
                card_role: "Senior Consultant",
                card_msg: "\"Your Golden Visa application has been pre-approved. Let's finalize the investment details.\"",
                card_status: "Application Status: Reviewing",
                stat_val: "98% Success",
                stat_label: "Visa Approval Rate",
                services_title: "Migration Pathways",
                services_subtitle: "Select your journey.",
                srv_1_title: "Skilled Worker",
                srv_1_desc: "Job placement and visa processing for professionals.",
                srv_2_title: "Business Investor",
                srv_2_desc: "Company formation and Golden Visa opportunities.",
                srv_3_title: "Student Visa",
                srv_3_desc: "Study at top universities globally.",
                srv_4_title: "Citizenship",
                srv_4_desc: "Second passport by investment programs.",
                learn_more: "Learn More",
                booking_tag: "Booking",
                booking_title: "Schedule Your Private Consultation",
                booking_desc: "Choose a time that works for you. Our experts are ready to analyze your case and provide a tailored roadmap.",
                feat_1_title: "Expert Assessment",
                feat_1_desc: "In-depth profile analysis.",
                feat_2_title: "Clear Roadmap",
                feat_2_desc: "Step-by-step application plan.",
                form_type_label: "Consultation Type",
                form_opt_std: "Standard",
                form_price_std: "$100 / 1hr",
                form_opt_biz: "Business",
                form_price_biz: "$250 / 1hr",
                form_pay_label: "Payment Details",
                ph_card: "Card number",
                ph_date: "MM / YY",
                ph_cvc: "CVC",
                btn_pay: "Confirm & Pay",
                pricing_title: "Transparent Pricing",
                pkg_1_tag: "Hourly",
                pkg_1_price: "$100",
                pkg_1_f1: "Initial Assessment",
                pkg_1_f2: "Document Review",
                btn_select: "Select",
                pop_tag: "POPULAR",
                pkg_2_tag: "Full Package",
                pkg_2_price: "$2,500",
                pkg_2_f1: "End-to-End Service",
                pkg_2_f2: "Government Liaison",
                btn_start: "Get Started",
                pkg_3_tag: "Enterprise",
                pkg_3_price: "Custom",
                pkg_3_f1: "Corporate Relocation",
                pkg_3_f2: "Multiple Applicants",
                btn_contact: "Contact Sales",
                footer_copy: "© 2024 EAM Immigration Services. Dubai, UAE."
            },
            ar: {
                nav_services: "خدماتنا",
                nav_process: "العملية",
                nav_pricing: "الأسعار",
                nav_cta: "ابدأ التقييم",
                hero_stats: "12.5 ألف تأشيرة ممنوحة",
                hero_title_1: "النخبة العالمية",
                hero_title_2: "للهجرة",
                hero_desc: "من الاستثمارات التجارية الاستراتيجية إلى مسارات الهجرة للكفاءات، أمّن مستقبلك مع خدماتنا الاستشارية المرخصة حكومياً.",
                btn_book: "احجز استشارة",
                btn_meet: "قابل المستشارين",
                rating_text: "4.9/5 تقييم",
                certified_text: "مرخص حكومياً",
                card_name: "سارة جنكينز",
                card_role: "مستشار أول",
                card_msg: "\"تمت الموافقة المبدئية على طلب التأشيرة الذهبية الخاص بك. دعنا ننهي تفاصيل الاستثمار.\"",
                card_status: "حالة الطلب: قيد المراجعة",
                stat_val: "98% نجاح",
                stat_label: "معدل الموافقة",
                services_title: "مسارات الهجرة",
                services_subtitle: "اختر رحلتك.",
                srv_1_title: "العمالة الماهرة",
                srv_1_desc: "التوظيف ومعالجة التأشيرات للمهنيين.",
                srv_2_title: "المستثمر التجاري",
                srv_2_desc: "تأسيس الشركات وفرص التأشيرة الذهبية.",
                srv_3_title: "تأشيرة الطالب",
                srv_3_desc: "الدراسة في أفضل الجامعات عالمياً.",
                srv_4_title: "الجنسية",
                srv_4_desc: "جواز سفر ثانٍ عبر برامج الاستثمار.",
                learn_more: "اعرف المزيد",
                booking_tag: "الحجز",
                booking_title: "جدول استشارتك الخاصة",
                booking_desc: "اختر الوقت الذي يناسبك. خبراؤنا مستعدون لتحليل حالتك وتقديم خارطة طريق مخصصة.",
                feat_1_title: "تقييم الخبراء",
                feat_1_desc: "تحليل متعمق للملف الشخصي.",
                feat_2_title: "خارطة طريق واضحة",
                feat_2_desc: "خطة تقديم خطوة بخطوة.",
                form_type_label: "نوع الاستشارة",
                form_opt_std: "قياسي",
                form_price_std: "100$ / ساعة",
                form_opt_biz: "أعمال",
                form_price_biz: "250$ / ساعة",
                form_pay_label: "تفاصيل الدفع",
                ph_card: "رقم البطاقة",
                ph_date: "شهر / سنة",
                ph_cvc: "رمز الأمان",
                btn_pay: "تأكيد ودفع",
                pricing_title: "أسعار شفافة",
                pkg_1_tag: "بالساعة",
                pkg_1_price: "$100",
                pkg_1_f1: "التقييم الأولي",
                pkg_1_f2: "مراجعة المستندات",
                btn_select: "اختر",
                pop_tag: "شائع",
                pkg_2_tag: "الباقة الكاملة",
                pkg_2_price: "$2,500",
                pkg_2_f1: "خدمة شاملة",
                pkg_2_f2: "التواصل الحكومي",
                btn_start: "ابدأ الآن",
                pkg_3_tag: "شركات",
                pkg_3_price: "مخصص",
                pkg_3_f1: "نقل الشركات",
                pkg_3_f2: "متقدمين متعددين",
                btn_contact: "تواصل مع المبيعات",
                footer_copy: "© 2024 خدمات الهجرة EAM. دبي، الإمارات."
            }
        };

        let currentLang = 'en';

        function toggleLanguage() {
            currentLang = currentLang === 'en' ? 'ar' : 'en';
            const html = document.documentElement;
            const body = document.body;
            
            // Toggle Direction and Font
            if (currentLang === 'ar') {
                html.setAttribute('dir', 'rtl');
                html.setAttribute('lang', 'ar');
                body.classList.remove('font-en');
                body.classList.add('font-ar');
            } else {
                html.setAttribute('dir', 'ltr');
                html.setAttribute('lang', 'en');
                body.classList.remove('font-ar');
                body.classList.add('font-en');
            }

            // Update Text
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[currentLang][key]) {
                    el.innerText = translations[currentLang][key];
                }
            });

            // Update Placeholders
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if (translations[currentLang][key]) {
                    el.placeholder = translations[currentLang][key];
                }
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

<div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] animate-blob mix-blend-multiply filter"></div>

<div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-[600px] h-[600px] bg-blue-300/30 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply filter"></div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 w-[800px] h-[800px] bg-slate-200/50 rounded-full blur-[100px] mix-blend-multiply filter"></div>

<svg className="absolute inset-0 w-full h-full opacity-[0.03]" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>

<div className="relative z-10 w-full max-w-[1400px] bg-white/60 backdrop-blur-3xl rounded-[40px] shadow-2xl overflow-hidden border border-white/40 min-h-[90vh] ring-1 ring-black/5">

<nav className="z-50 sm:px-10 w-full pt-6 pr-6 pb-6 pl-6 absolute top-0">
<div className="flex items-center justify-between">

<a className="block group shrink-0" href="#">
<img alt="EAM Immigration" className="sm:h-14 mix-blend-multiply w-auto h-10 object-contain translate-x-8 translate-y-1 scale-150" onerror="this.onerror=null; this.src='https://placehold.co/240x80/transparent/0057B8?text=EAM+IMMIGRATION&amp;font=montserrat';" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d39e2efd-8732-48b3-8341-aba706d72a0a_800w.png"/>
</a>

<div className="hidden md:flex items-center gap-8 rtl:flex-row-reverse bg-white/50 px-8 py-2.5 rounded-full border border-white/20 shadow-sm backdrop-blur-md">
<a className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors" data-i18n="nav_services" href="#services">Services</a>
<a className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors" data-i18n="nav_process" href="#process">Process</a>
<a className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors" data-i18n="nav_pricing" href="#pricing">Pricing</a>
</div>

<div className="flex items-center gap-3">

<button className="flex items-center justify-center h-10 px-4 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold text-slate-700 transition-all gap-2 shadow-sm" onclick="toggleLanguage()">
<svg aria-hidden="true" className="lucide lucide-globe w-4 h-4 text-slate-500" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span id="lang-text">EN / AR</span>
</button>
<a className="hidden sm:flex bg-accent hover:bg-accent-hover text-white text-sm font-semibold py-2.5 px-6 rounded-full transition-all shadow-glow hover:shadow-lg hover:-translate-y-0.5" data-i18n="nav_cta" href="#booking">
                        Start Assessment
                    </a>
</div>
</div>
</nav>

<div className="h-full w-full overflow-y-auto overflow-x-hidden no-scrollbar">

<section className="sm:px-12 lg:px-20 lg:pt-40 pe-6 ps-6 pt-32 pb-20 relative">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl rtl:text-right relative z-10">

<div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-full py-1.5 ps-1.5 pe-4 mb-8 shadow-sm">
<div className="flex -space-x-3 rtl:space-x-reverse">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=2" style={{}}/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=3" style={{}}/>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] text-slate-600 font-bold">+2k</div>
</div>
<span className="text-sm text-slate-600 font-semibold" data-i18n="hero_stats">12.5k visas granted</span>
</div>
<h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
<span className="" data-i18n="hero_title_1">Elite Global</span>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent" data-i18n="hero_title_2">Migration</span>
</h1>
<p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg rtl:ml-auto font-medium" data-i18n="hero_desc">
                            From strategic business investments to skilled migration pathways, secure your future with our government-licensed consultation services.
                        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold py-3.5 px-8 rounded-full transition-all shadow-glow hover:shadow-lg hover:-translate-y-0.5" href="#booking">
<svg aria-hidden="true" className="lucide lucide-play-circle w-5 h-5 rtl-flip" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span data-i18n="btn_book">Book Consultation</span>
</a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold py-3.5 px-8 rounded-full transition-all shadow-sm hover:border-slate-300" href="#services">
<svg aria-hidden="true" className="lucide lucide-users w-5 h-5 text-primary" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="" data-i18n="btn_meet">Meet Consultants</span>
</a>
</div>

<div className="flex items-center gap-6">
<div className="flex items-center gap-1">
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-slate-900 font-bold ms-2" data-i18n="rating_text">4.9/5 Rating</span>
</div>
<div className="w-px h-6 bg-slate-200"></div>
<div className="flex items-center gap-2 text-slate-600">
<svg aria-hidden="true" className="lucide lucide-shield-check w-5 h-5 text-primary" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-semibold" data-i18n="certified_text">Government Certified</span>
</div>
</div>
</div>

<div className="relative perspective-1000">

<div className="relative rounded-[32px] overflow-hidden bg-white shadow-2xl border border-white/50 aspect-[4/3] group transform transition-transform duration-700 hover:rotate-1">
<img alt="Dubai Skyline" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc0a2b97-89cc-49a0-a96e-9e3d9c69467f_1600w.png" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

<div className="absolute top-6 start-6 flex items-center gap-3 bg-white/90 backdrop-blur-md border border-white/40 p-2 rounded-full pe-4 shadow-lg">
<img className="w-10 h-10 rounded-full border border-white" src="https://i.pravatar.cc/100?img=11"/>
<div className="rtl:text-right">
<p className="text-xs text-slate-900 font-bold" data-i18n="card_name">Sarah Jenkins</p>
<p className="text-[10px] text-accent font-semibold" data-i18n="card_role">Senior Consultant</p>
</div>
</div>

<div className="absolute top-6 end-6 flex gap-2">
<div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:bg-white/40 transition-colors cursor-pointer">
<svg aria-hidden="true" className="lucide lucide-play w-4 h-4 rtl-flip fill-current" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>

<div className="absolute top-1/3 start-6 max-w-[240px] bg-white/90 backdrop-blur-xl border border-white/50 p-4 rounded-2xl rounded-tl-sm text-sm text-slate-700 shadow-xl rtl:rounded-tr-sm rtl:rounded-tl-2xl rtl:text-right">
<span data-i18n="card_msg">"Your Golden Visa application has been pre-approved. Let's finalize the investment details."</span>
</div>

<div className="absolute bottom-6 left-6 right-6">
<div className="flex justify-between text-xs font-bold text-white mb-2">
<span className="drop-shadow-md" data-i18n="card_status">Application Status: Reviewing</span>
<span className="drop-shadow-md">89%</span>
</div>
<div className="h-1.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
<div className="h-full w-[89%] bg-accent rounded-full shadow-[0_0_10px_rgba(85,159,45,0.8)]"></div>
</div>
</div>
</div>

<div className="absolute -bottom-8 -end-8 bg-white border border-slate-100 p-5 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] flex items-center gap-4 animate-bounce-slow">
<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<svg aria-hidden="true" className="lucide lucide-trending-up w-6 h-6 rtl-flip" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div className="rtl:text-right">
<p className="text-slate-900 font-bold text-lg" data-i18n="stat_val">98% Success</p>
<p className="text-slate-500 text-xs font-medium" data-i18n="stat_label">Visa Approval Rate</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="services">

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent pointer-events-none"></div>
<div className="px-6 sm:px-12 lg:px-20 mb-10 flex items-end justify-between rtl:flex-row-reverse relative z-10">
<div className="rtl:text-right">
<h2 className="text-3xl font-bold text-slate-900 mb-2" data-i18n="services_title">Migration Pathways</h2>
<p className="text-slate-500 font-medium" data-i18n="services_subtitle">Select your journey.</p>
</div>

<div className="flex gap-2 rtl:flex-row-reverse">
<button className="p-3 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300 transition-colors bg-white shadow-sm" onclick="document.getElementById('services-scroll').scrollBy({left: -350, behavior: 'smooth'})">
<svg aria-hidden="true" className="lucide lucide-arrow-left w-5 h-5 rtl-flip" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="p-3 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300 transition-colors bg-white shadow-sm" onclick="document.getElementById('services-scroll').scrollBy({left: 350, behavior: 'smooth'})">
<svg aria-hidden="true" className="lucide lucide-arrow-right w-5 h-5 rtl-flip" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div className="flex overflow-x-auto gap-6 px-6 sm:px-12 lg:px-20 pb-12 snap-x snap-mandatory no-scrollbar rtl:flex-row-reverse relative z-10" id="services-scroll">

<div className="snap-center shrink-0 w-[300px] h-[400px] rounded-3xl bg-white border border-slate-200 shadow-card hover:shadow-xl transition-all relative overflow-hidden group cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
<img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ba52a185-d375-492f-a1cd-2bca756a4fd0_800w.jpg"/>
<div className="absolute bottom-0 p-6 w-full rtl:text-right z-20">
<div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center mb-4 shadow-lg">
<svg aria-hidden="true" className="lucide lucide-briefcase w-5 h-5" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<h3 className="text-xl font-bold text-white mb-1" data-i18n="srv_1_title">Skilled Worker</h3>
<p className="text-sm text-slate-200 mb-4 line-clamp-2" data-i18n="srv_1_desc">Job placement and visa processing for professionals.</p>
<span className="text-accent-light text-xs font-bold uppercase tracking-wider flex items-center gap-1 rtl:flex-row-reverse">
<span data-i18n="learn_more">Learn More</span>
<svg aria-hidden="true" className="lucide lucide-arrow-right w-3 h-3 rtl-flip" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>

<div className="snap-center shrink-0 w-[300px] h-[400px] rounded-3xl bg-white border border-slate-200 shadow-card hover:shadow-xl transition-all relative overflow-hidden group cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
<img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/22ee1243-09ad-4c31-8752-980d657730fe_800w.png"/>
<div className="absolute bottom-0 p-6 w-full rtl:text-right z-20">
<div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mb-4 shadow-lg">
<svg aria-hidden="true" className="lucide lucide-building-2 w-5 h-5" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<h3 className="text-xl font-bold text-white mb-1" data-i18n="srv_2_title">Business Investor</h3>
<p className="text-sm text-slate-200 mb-4 line-clamp-2" data-i18n="srv_2_desc">Company formation and Golden Visa opportunities.</p>
<span className="text-blue-200 text-xs font-bold uppercase tracking-wider flex items-center gap-1 rtl:flex-row-reverse">
<span data-i18n="learn_more">Learn More</span>
<svg aria-hidden="true" className="lucide lucide-arrow-right w-3 h-3 rtl-flip" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>

<div className="snap-center shrink-0 w-[300px] h-[400px] rounded-3xl bg-white border border-slate-200 shadow-card hover:shadow-xl transition-all relative overflow-hidden group cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
<img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f02218a5-df30-4ad1-8084-1533fe96978b_800w.png"/>
<div className="absolute bottom-0 p-6 w-full rtl:text-right z-20">
<div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center mb-4 shadow-lg">
<svg aria-hidden="true" className="lucide lucide-graduation-cap w-5 h-5" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</div>
<h3 className="text-xl font-bold text-white mb-1" data-i18n="srv_3_title">Student Visa</h3>
<p className="text-sm text-slate-200 mb-4 line-clamp-2" data-i18n="srv_3_desc">Study at top universities globally.</p>
<span className="text-emerald-200 text-xs font-bold uppercase tracking-wider flex items-center gap-1 rtl:flex-row-reverse">
<span data-i18n="learn_more">Learn More</span>
<svg aria-hidden="true" className="lucide lucide-arrow-right w-3 h-3 rtl-flip" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>

<div className="snap-center shrink-0 w-[300px] h-[400px] rounded-3xl bg-white border border-slate-200 shadow-card hover:shadow-xl transition-all relative overflow-hidden group cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
<img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6953bfef-d5c0-4d14-b66c-05c6f632d85f_800w.png"/>
<div className="absolute bottom-0 p-6 w-full rtl:text-right z-20">
<div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center mb-4 shadow-lg">
<svg aria-hidden="true" className="lucide lucide-globe-2 w-5 h-5" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-xl font-bold text-white mb-1" data-i18n="srv_4_title">Citizenship</h3>
<p className="text-sm text-slate-200 mb-4 line-clamp-2" data-i18n="srv_4_desc">Second passport by investment programs.</p>
<span className="text-purple-200 text-xs font-bold uppercase tracking-wider flex items-center gap-1 rtl:flex-row-reverse">
<span data-i18n="learn_more">Learn More</span>
<svg aria-hidden="true" className="lucide lucide-arrow-right w-3 h-3 rtl-flip" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</div>
</section>

<section className="sm:px-12 lg:px-20 pt-24 pr-6 pb-24 pl-6 relative" id="booking">
<div className="grid lg:grid-cols-2 gap-16 relative z-10">
<div className="rtl:text-right">
<span className="text-accent text-sm font-bold uppercase tracking-widest mb-2 block" data-i18n="booking_tag">Booking</span>
<h2 className="text-4xl font-bold text-slate-900 mb-6" data-i18n="booking_title">Schedule Your Private Consultation</h2>
<p className="text-slate-500 mb-8 leading-relaxed" data-i18n="booking_desc">Choose a time that works for you. Our experts are ready to analyze your case and provide a tailored roadmap.</p>
<div className="space-y-6">
<div className="flex items-start gap-4 rtl:flex-row-reverse p-4 bg-white/40 rounded-2xl border border-white/50 backdrop-blur-sm">
<div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 text-accent">
<svg aria-hidden="true" className="lucide lucide-check-circle w-5 h-5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<div className="">
<h4 className="text-slate-900 font-bold" data-i18n="feat_1_title">Expert Assessment</h4>
<p className="text-sm text-slate-500" data-i18n="feat_1_desc">In-depth profile analysis.</p>
</div>
</div>
<div className="flex items-start gap-4 rtl:flex-row-reverse p-4 bg-white/40 rounded-2xl border border-white/50 backdrop-blur-sm">
<div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 text-accent">
<svg aria-hidden="true" className="lucide lucide-map w-5 h-5" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</div>
<div className="">
<h4 className="text-slate-900 font-bold" data-i18n="feat_2_title">Clear Roadmap</h4>
<p className="text-sm text-slate-500" data-i18n="feat_2_desc">Step-by-step application plan.</p>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-[32px] p-8 shadow-2xl rtl:text-right">
<form className="space-y-6" onsubmit="event.preventDefault();">

<div>
<label className="text-sm font-bold text-slate-700 mb-3 block" data-i18n="form_type_label">Consultation Type</label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="service" type="radio"/>
<div className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-accent/50 transition-all peer-checked:bg-accent/5 peer-checked:border-accent">
<span className="text-slate-900 font-bold text-sm block mb-1" data-i18n="form_opt_std">Standard</span>
<span className="text-slate-500 text-xs" data-i18n="form_price_std">$100 / 1hr</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="service" type="radio"/>
<div className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-accent/50 transition-all peer-checked:bg-accent/5 peer-checked:border-accent">
<span className="text-slate-900 font-bold text-sm block mb-1" data-i18n="form_opt_biz">Business</span>
<span className="text-slate-500 text-xs" data-i18n="form_price_biz">$250 / 1hr</span>
</div>
</label>
</div>
</div>

<div>
<label className="text-sm font-bold text-slate-700 mb-3 block" data-i18n="form_pay_label">Payment Details</label>
<div className="space-y-3">
<div className="relative">
<input className="w-full pl-10 pr-4 py-3 rounded-xl text-sm transition-all rtl:text-right rtl:pr-10 rtl:pl-4" data-i18n-placeholder="ph_card" placeholder="Card number" type="text"/>
<svg aria-hidden="true" className="lucide lucide-credit-card w-4 h-4 text-slate-400 absolute top-3.5 left-3.5 rtl:right-3.5 rtl:left-auto" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div className="grid grid-cols-2 gap-3">
<input className="w-full px-4 py-3 rounded-xl text-sm transition-all rtl:text-right" data-i18n-placeholder="ph_date" placeholder="MM / YY" type="text"/>
<input className="w-full px-4 py-3 rounded-xl text-sm transition-all rtl:text-right" data-i18n-placeholder="ph_cvc" placeholder="CVC" type="text"/>
</div>
</div>
</div>
<button className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-4 rounded-xl transition-all shadow-glow hover:shadow-lg flex items-center justify-center gap-2 mt-4">
<span data-i18n="btn_pay">Confirm &amp; Pay</span>
<svg aria-hidden="true" className="lucide lucide-arrow-right w-5 h-5 rtl-flip" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</form>
</div>
</div>
</section>

<section className="py-20 px-6 sm:px-12 lg:px-20 border-t border-slate-200 bg-slate-50/50" id="pricing">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold text-slate-900" data-i18n="pricing_title">Transparent Pricing</h2>
</div>
<div className="grid md:grid-cols-3 gap-6 relative z-10">

<div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all flex flex-col rtl:text-right">
<div className="mb-4">
<span className="text-slate-500 text-xs font-bold uppercase tracking-wider" data-i18n="pkg_1_tag">Hourly</span>
<div className="text-4xl font-extrabold text-slate-900 mt-2" data-i18n="pkg_1_price">$100</div>
</div>
<ul className="space-y-3 mb-8 text-sm text-slate-600 flex-1">
<li className="flex items-center gap-2 rtl:flex-row-reverse"><svg aria-hidden="true" className="lucide lucide-check-circle-2 w-4 h-4 text-accent" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> <span data-i18n="pkg_1_f1">Initial Assessment</span></li>
<li className="flex items-center gap-2 rtl:flex-row-reverse"><svg aria-hidden="true" className="lucide lucide-check-circle-2 w-4 h-4 text-accent" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> <span data-i18n="pkg_1_f2">Document Review</span></li>
</ul>
<button className="w-full py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-sm transition-all" data-i18n="btn_select">Select</button>
</div>

<div className="p-8 rounded-3xl bg-white border border-accent ring-2 ring-accent/10 relative shadow-xl flex flex-col rtl:text-right transform md:-translate-y-2">
<div className="absolute top-0 right-0 rtl:right-auto rtl:left-0 bg-accent text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl rtl:rounded-tr-none rtl:rounded-tl-2xl rtl:rounded-br-xl" data-i18n="pop_tag">POPULAR</div>
<div className="mb-4">
<span className="text-accent text-xs font-bold uppercase tracking-wider" data-i18n="pkg_2_tag">Full Package</span>
<div className="text-4xl font-extrabold text-slate-900 mt-2" data-i18n="pkg_2_price">$2,500</div>
</div>
<ul className="space-y-3 mb-8 text-sm text-slate-600 flex-1">
<li className="flex items-center gap-2 rtl:flex-row-reverse"><svg aria-hidden="true" className="lucide lucide-check-circle-2 w-4 h-4 text-accent" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> <span data-i18n="pkg_2_f1">End-to-End Service</span></li>
<li className="flex items-center gap-2 rtl:flex-row-reverse"><svg aria-hidden="true" className="lucide lucide-check-circle-2 w-4 h-4 text-accent" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> <span data-i18n="pkg_2_f2">Government Liaison</span></li>
</ul>
<button className="w-full py-3 rounded-xl bg-accent text-white hover:bg-accent-hover font-bold text-sm transition-all shadow-lg shadow-accent/20" data-i18n="btn_start">Get Started</button>
</div>

<div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all flex flex-col rtl:text-right">
<div className="mb-4">
<span className="text-slate-500 text-xs font-bold uppercase tracking-wider" data-i18n="pkg_3_tag">Enterprise</span>
<div className="text-4xl font-extrabold text-slate-900 mt-2" data-i18n="pkg_3_price">Custom</div>
</div>
<ul className="space-y-3 mb-8 text-sm text-slate-600 flex-1">
<li className="flex items-center gap-2 rtl:flex-row-reverse"><svg aria-hidden="true" className="lucide lucide-check-circle-2 w-4 h-4 text-accent" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> <span data-i18n="pkg_3_f1">Corporate Relocation</span></li>
<li className="flex items-center gap-2 rtl:flex-row-reverse"><svg aria-hidden="true" className="lucide lucide-check-circle-2 w-4 h-4 text-accent" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> <span data-i18n="pkg_3_f2">Multiple Applicants</span></li>
</ul>
<button className="w-full py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-sm transition-all" data-i18n="btn_contact">Contact Sales</button>
</div>
</div>
</section>

<footer className="py-12 px-6 sm:px-12 lg:px-20 border-t border-slate-200 bg-white/80 backdrop-blur-xl rtl:text-right">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 rtl:flex-row-reverse">
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
<img alt="EAM Immigration Logo" className="h-8 w-auto object-contain mix-blend-multiply" onerror="this.onerror=null; this.src='https://placehold.co/240x80/transparent/0057B8?text=EAM+IMMIGRATION&amp;font=montserrat';" src="https://placehold.co/240x80/transparent/0057B8?text=EAM+IMMIGRATION&amp;font=montserrat"/>
</div>
<div className="text-slate-500 text-sm font-medium" data-i18n="footer_copy">
                        © 2024 EAM Immigration Services. Dubai, UAE.
                    </div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-primary transition-colors" href="#"><svg aria-hidden="true" className="lucide lucide-message-circle w-5 h-5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg></a>
<a className="text-slate-400 hover:text-primary transition-colors" href="#"><svg aria-hidden="true" className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg></a>
<a className="text-slate-400 hover:text-primary transition-colors" href="#"><svg aria-hidden="true" className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>
</footer>
</div>
</div>



    </>
  );
}
