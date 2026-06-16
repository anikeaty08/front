import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Language toggle
      const btnEn = document.getElementById('lang-en');
      const btnAr = document.getElementById('lang-ar');
      function setLang(lang) {
        const enNodes = document.querySelectorAll('[data-lang="en"]');
        const arNodes = document.querySelectorAll('[data-lang="ar"]');
        enNodes.forEach(n => n.classList.toggle('hidden', lang !== 'en'));
        arNodes.forEach(n => n.classList.toggle('hidden', lang !== 'ar'));
        document.documentElement.lang = lang === 'ar' ? 'ar' : 'en';
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        // Visual state
        btnEn.classList.toggle('bg-white', lang === 'en');
        btnEn.classList.toggle('text-gray-900', lang === 'en');
        btnEn.classList.toggle('border', lang === 'en');
        btnEn.classList.toggle('border-black/5', lang === 'en');
        btnAr.classList.toggle('bg-white', lang === 'ar');
        btnAr.classList.toggle('text-gray-900', lang === 'ar');
        btnAr.classList.toggle('border', lang === 'ar');
        btnAr.classList.toggle('border-black/5', lang === 'ar');
      }
      btnEn.addEventListener('click', () => setLang('en'));
      btnAr.addEventListener('click', () => setLang('ar'));
      setLang('en');

      // Portfolio forms (EN/AR)
      const pf = document.getElementById('portfolioForm');
      const pfMsg = document.getElementById('portfolioMsg');
      if (pf) {
        pf.addEventListener('submit', (e) => {
          e.preventDefault();
          pfMsg.classList.remove('hidden');
          setTimeout(() => { pf.reset(); }, 200);
        });
      }
      const pfAr = document.getElementById('portfolioFormAr');
      const pfMsgAr = document.getElementById('portfolioMsgAr');
      if (pfAr) {
        pfAr.addEventListener('submit', (e) => {
          e.preventDefault();
          pfMsgAr.classList.remove('hidden');
          setTimeout(() => { pfAr.reset(); }, 200);
        });
      }

      // Contact form
      const cf = document.getElementById('contactForm');
      const cMsg = document.getElementById('contactMsg');
      if (cf) {
        cf.addEventListener('submit', (e) => {
          e.preventDefault();
          cMsg.classList.remove('hidden');
          setTimeout(() => { cf.reset(); }, 300);
        });
      }

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Icons
      if (window.lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons();
      }

      // Smooth scroll for internal anchor links
      document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
          const targetId = link.getAttribute('href');
          if (targetId && targetId.length > 1) {
            const el = document.querySelector(targetId);
            if (el) {
              e.preventDefault();
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        });
      });

      // Persist language preference
      try {
        const saved = localStorage.getItem('pj-lang');
        if (saved === 'ar' || saved === 'en') setLang(saved);
        btnEn.addEventListener('click', () => { try { localStorage.setItem('pj-lang', 'en'); } catch(_) {} });
        btnAr.addEventListener('click', () => { try { localStorage.setItem('pj-lang', 'ar'); } catch(_) {} });
      } catch (_) {}
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10">
<div className="absolute inset-0 opacity-[0.35] bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:16px_16px]"></div>
<div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] [background-size:120px_1px,1px_120px]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/60"></div>
</div>

<header className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
<div className="flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="h-8 w-8 rounded-xl bg-gray-900 text-white flex items-center justify-center ring-1 ring-black/10">
<span className="text-xs tracking-tight font-semibold">PJ</span>
</div>
<div>
<div className="text-sm sm:text-base tracking-tight font-semibold">Pioneer Jordan</div>
<div className="text-[11px] text-gray-500">Recruitment &amp; Outsourcing</div>
</div>
</a>

<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="text-gray-700 hover:text-gray-900 tracking-tight" href="#home">Home</a>
<a className="text-gray-700 hover:text-gray-900 tracking-tight" href="#about">About</a>
<a className="text-gray-700 hover:text-gray-900 tracking-tight" href="#services">Services</a>
<a className="text-gray-700 hover:text-gray-900 tracking-tight" href="#why">Why Us</a>
<a className="text-gray-700 hover:text-gray-900 tracking-tight" href="#clients">Clients</a>
<a className="text-gray-700 hover:text-gray-900 tracking-tight" href="#portfolio">Portfolio</a>
<a className="text-gray-700 hover:text-gray-900 tracking-tight" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-2">

<div className="inline-flex items-center gap-1 bg-gray-100 rounded-full border border-black/5 p-1">
<button className="px-3 py-1.5 text-xs tracking-tight rounded-full bg-white text-gray-900 border border-black/5" id="lang-en" type="button">EN</button>
<button className="px-3 py-1.5 text-xs tracking-tight rounded-full text-gray-700" id="lang-ar" type="button">AR</button>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium tracking-tight text-white bg-gray-900 hover:bg-gray-800 rounded-full px-4 py-2 border border-black/10" href="#portfolio">
<svg className="w-4 h-4" data-lucide="folder-open" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"></svg>
<span>Request Portfolio</span>
</a>
</div>
</div>
</header>

<section className="max-w-7xl mx-auto px-4 sm:px-6 mt-8" id="home">
<div className="relative rounded-[40px] bg-white border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative grid grid-cols-1 lg:grid-cols-12 gap-0">

<div className="lg:col-span-6 p-6 sm:p-8">

<div data-lang="en">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter leading-[1.05]">
                Pioneer Recruitment &amp; Outsourcing
              </h1>
<p className="mt-3 text-lg text-gray-700 tracking-tight">Your Partner in Professional Recruitment &amp; Outsourcing</p>
<p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                We match the right talent and deliver integrated outsourcing solutions for companies in Jordan and across the region.
              </p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 text-sm font-medium tracking-tight text-white bg-gray-900 hover:bg-gray-800 rounded-full px-4 py-2 border border-black/10" href="#portfolio">
<svg className="w-4 h-4" data-lucide="file-text" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"></svg>
<span>Request Portfolio</span>
</a>
<a className="inline-flex items-center gap-2 text-sm font-medium tracking-tight text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2 border border-black/5" href="#contact">
<svg className="w-4 h-4" data-lucide="send" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"></svg>
<span>Contact Us</span>
</a>
</div>
</div>

<div className="hidden" data-lang="ar" dir="rtl" style={{fontFamily: '\'IBM Plex Sans Arabic\', Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
                الشركة الريادية للتوظيف
              </h1>
<p className="mt-3 text-lg text-gray-700 tracking-tight">شركاؤك في التوظيف وoutsourcing الاحترافي</p>
<p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                نُوظّف المواهب المناسبة ونقدّم حلول التوظيف الخارجية المتكاملة للشركات في الأردن والمنطقة.
              </p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 text-sm font-medium tracking-tight text-white bg-gray-900 hover:bg-gray-800 rounded-full px-4 py-2 border border-black/10" href="#portfolio">
<svg className="w-4 h-4" data-lucide="file-text" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"></svg>
<span>اطلب ملف المشاريع</span>
</a>
<a className="inline-flex items-center gap-2 text-sm font-medium tracking-tight text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2 border border-black/5" href="#contact">
<svg className="w-4 h-4" data-lucide="send" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"></svg>
<span>تواصل معنا</span>
</a>
</div>
</div>

<div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="rounded-xl bg-gray-50 border border-black/5 p-3">
<div className="text-xl font-semibold tracking-tight">Jordan</div>
<p className="text-[11px] text-gray-500 mt-0.5">Amman HQ</p>
</div>
<div className="rounded-xl bg-gray-50 border border-black/5 p-3">
<div className="text-xl font-semibold tracking-tight">Regional</div>
<p className="text-[11px] text-gray-500 mt-0.5">MENA coverage</p>
</div>
<div className="rounded-xl bg-gray-50 border border-black/5 p-3">
<div className="text-xl font-semibold tracking-tight">Executive</div>
<p className="text-[11px] text-gray-500 mt-0.5">Search</p>
</div>
<div className="rounded-xl bg-gray-50 border border-black/5 p-3">
<div className="text-xl font-semibold tracking-tight">Outsourcing</div>
<p className="text-[11px] text-gray-500 mt-0.5">Payroll &amp; Staffing</p>
</div>
</div>
</div>

<div className="lg:col-span-6">
<div className="relative h-[44vh] sm:h-[54vh] lg:h-full">
<img alt="Recruitment and outsourcing team collaborating" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent"></div>

<div className="absolute bottom-4 left-4 right-4 flex gap-3 justify-end">
<div className="hidden sm:flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-black/10 rounded-xl px-3 py-2 shadow-sm">
<svg className="w-4 h-4 text-gray-700" data-lucide="users" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<span className="text-xs text-gray-800 tracking-tight">Pre-screened Talent Pool</span>
</div>
<div className="hidden sm:flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-black/10 rounded-xl px-3 py-2 shadow-sm">
<svg className="w-4 h-4 text-gray-700" data-lucide="badge-check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<span className="text-xs text-gray-800 tracking-tight">Compliance &amp; Payroll</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 sm:mt-16" id="about">
<div className="relative rounded-[40px] bg-white border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative p-6 sm:p-8">
<div className="flex items-end justify-between border-b border-black/5 pb-4">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tighter">About Us</h2>
<p className="hidden sm:block text-xs text-gray-500">Story, mission, and capabilities</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12">

<div className="lg:col-span-6 p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-black/5" data-lang="en">
<p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Pioneer Recruitment &amp; Outsourcing is an Amman-based recruitment and outsourcing agency providing recruitment, executive search, and outsourcing services (payroll / workforce outsourcing / staff management). Since our inception, we are committed to elevating your team’s performance by delivering top talent and transparent, quality solutions.
              </p>
</div>

<div className="hidden" data-lang="ar" dir="rtl" style={{fontFamily: '\'IBM Plex Sans Arabic\', Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}>
<p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                الشركة الريادية للتوظيف (“Pioneer Recruitment &amp; Outsourcing”) هي وكالة توظيف واستعانة خارجية مقرها عمّان، وتقدّم خدمات التوظيف، البحث التنفيذي، والتوظيف الخارجي (outsourcing / خدمات الرواتب / إدارة الموظفين) منذ تأسيسها. نلتزم برفع كفاءة فريقك عبر توفير أفضل الكفاءات، وتسليم أداء يتوافق مع معايير الجودة والشفافية.
              </p>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 sm:mt-6">
<div className="rounded-xl bg-gray-50 border border-black/5 p-4">
<div className="text-3xl font-semibold tracking-tighter">Exec</div>
<p className="text-[11px] text-gray-500 mt-0.5">Executive Search</p>
</div>
<div className="rounded-xl bg-gray-50 border border-black/5 p-4">
<div className="text-3xl font-semibold tracking-tighter">SME</div>
<p className="text-[11px] text-gray-500 mt-0.5">to Enterprise</p>
</div>
<div className="rounded-xl bg-gray-50 border border-black/5 p-4">
<div className="text-3xl font-semibold tracking-tighter">HR</div>
<p className="text-[11px] text-gray-500 mt-0.5">Payroll &amp; Compliance</p>
</div>
<div className="rounded-xl bg-gray-50 border border-black/5 p-4">
<div className="text-3xl font-semibold tracking-tighter">MENA</div>
<p className="text-[11px] text-gray-500 mt-0.5">Regional Reach</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 sm:mt-16" id="services">
<div className="relative rounded-[40px] bg-white border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative">
<div className="flex items-end justify-between p-6 sm:p-8 border-b border-black/5">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tighter">Services</h2>
<div className="hidden sm:flex items-center gap-2 text-xs text-gray-600">
<svg className="w-4 h-4" data-lucide="briefcase" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16"></svg>
<span>Recruitment, Outsourcing, Cross-Border</span>
</div>
</div>

<div className="divide-y divide-black/5">

<div className="p-6 sm:p-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
<div className="md:col-span-1">
<div className="text-3xl sm:text-4xl text-gray-400 tabular-nums tracking-tighter">1</div>
</div>
<div className="md:col-span-8">

<div className="space-y-2" data-lang="en">
<div className="flex items-start gap-2 text-sm text-gray-700">
<svg className="w-4 h-4 text-green-600 mt-0.5" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<span>Leadership and managerial talent discovery</span>
</div>
<div className="flex items-start gap-2 text-sm text-gray-700">
<svg className="w-4 h-4 text-green-600 mt-0.5" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<span>Mid to senior-level placements</span>
</div>
<div className="flex items-start gap-2 text-sm text-gray-700">
<svg className="w-4 h-4 text-green-600 mt-0.5" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<span>Job ads, screening, interviews, and assessments</span>
</div>
</div>

<div className="space-y-2 hidden" data-lang="ar" dir="rtl" style={{fontFamily: '\'IBM Plex Sans Arabic\', Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}>
<div className="flex items-start gap-2 text-sm text-gray-700">
<svg className="w-4 h-4 text-green-600 mt-0.5" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<span>اكتشاف الكفاءات القيادية والإدارية</span>
</div>
<div className="flex items-start gap-2 text-sm text-gray-700">
<svg className="w-4 h-4 text-green-600 mt-0.5" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<span>ملء المناصب المتوسطة إلى العليا</span>
</div>
<div className="flex items-start gap-2 text-sm text-gray-700">
<svg className="w-4 h-4 text-green-600 mt-0.5" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<span>تصميم إعلانات الوظائف، الفرز، المقابلات والتقييم</span>
</div>
</div>
</div>
<div className="md:col-span-3 md:text-right">
<h3 className="text-lg sm:text-xl tracking-tight font-semibold">Recruitment &amp; Executive Search</h3>
<p className="text-xs text-gray-500 mt-1">Targeted, confidential, effective</p>
</div>
</div>
</div>

<div className="p-6 sm:p-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
<div className="md:col-span-1">
<div className="text-3xl sm:text-4xl text-gray-400 tabular-nums tracking-tighter">2</div>
</div>
<div className="md:col-span-8">

<div className="space-y-2" data-lang="en">
<div className="flex items-start gap-2 text-sm text-gray-700">
<svg className="w-4 h-4 text-green-600 mt-0.5" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<span>Contract staffing and secondment</span>
</div>
<div className="flex items-start gap-2 text-sm text-gray-700">
<svg className="w-4 h-4 text-green-600 mt-0.5" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<span>Payroll, incentives, and benefits administration</span>
</div>
<div className="flex items-start gap-2 text-sm text-gray-700">
<svg className="w-4 h-4 text-green-600 mt-0.5" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<span>Talent management, labor relations, compliance</span>
</div>
</div>

<div className="space-y-2 hidden" data-lang="ar" dir="rtl" style={{fontFamily: '\'IBM Plex Sans Arabic\', Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}>
<div className="flex items-start gap-2 text-sm text-gray-700">
<svg className="w-4 h-4 text-green-600 mt-0.5" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<span>الإعارة / التعاقد (Contract Staffing)</span>
</div>
<div className="flex items-start gap-2 text-sm text-gray-700">
<svg className="w-4 h-4 text-green-600 mt-0.5" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<span>خدمات الرواتب، الحوافز، والمزايا</span>
</div>
<div className="flex items-start gap-2 text-sm text-gray-700">
<svg className="w-4 h-4 text-green-600 mt-0.5" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<span>إدارة الكفاءات، العلاقات العمالية، والامتثال</span>
</div>
</div>
</div>
<div className="md:col-span-3 md:text-right">
<h3 className="text-lg sm:text-xl tracking-tight font-semibold">Staffing &amp; Outsourcing</h3>
<p className="text-xs text-gray-500 mt-1">Run compliant and efficient operations</p>
</div>
</div>
</div>

<div className="p-6 sm:p-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
<div className="md:col-span-1">
<div className="text-3xl sm:text-4xl text-gray-400 tabular-nums tracking-tighter">3</div>
</div>
<div className="md:col-span-8">

<div className="space-y-2" data-lang="en">
<div className="flex items-start gap-2 text-sm text-gray-700">
<svg className="w-4 h-4 text-green-600 mt-0.5" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<span>Work visa coordination</span>
</div>
<div className="flex items-start gap-2 text-sm text-gray-700">
<svg className="w-4 h-4 text-green-600 mt-0.5" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<span>Immigration consulting and workflows</span>
</div>
<div className="flex items-start gap-2 text-sm text-gray-700">
<svg className="w-4 h-4 text-green-600 mt-0.5" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<span>Legal support for cross-border hiring</span>
</div>
</div>

<div className="space-y-2 hidden" data-lang="ar" dir="rtl" style={{fontFamily: '\'IBM Plex Sans Arabic\', Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}>
<div className="flex items-start gap-2 text-sm text-gray-700">
<svg className="w-4 h-4 text-green-600 mt-0.5" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<span>تنسيق تأشيرات العمل</span>
</div>
<div className="flex items-start gap-2 text-sm text-gray-700">
<svg className="w-4 h-4 text-green-600 mt-0.5" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<span>استشارات الهجرة وسير العمل</span>
</div>
<div className="flex items-start gap-2 text-sm text-gray-700">
<svg className="w-4 h-4 text-green-600 mt-0.5" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<span>الدعم القانوني للتوظيف العابر للحدود</span>
</div>
</div>
</div>
<div className="md:col-span-3 md:text-right">
<h3 className="text-lg sm:text-xl tracking-tight font-semibold">Cross-Border &amp; Visa Support</h3>
<p className="text-xs text-gray-500 mt-1">Navigate mobility with ease</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 sm:mt-16" id="why">
<div className="relative rounded-[40px] bg-neutral-950 text-white border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.18)] overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(255,255,255,0.08),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_120%,rgba(255,255,255,0.06),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(#ffffff12_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.18]"></div>
</div>
<div className="relative p-6 sm:p-8">
<div className="flex items-end justify-between">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tighter">Why Choose Us</h2>
</div>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="space-y-3" data-lang="en">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-start gap-2">
<svg className="w-4 h-4 text-white/80 mt-0.5" data-lucide="network" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<p className="text-sm">Extensive candidate network in Jordan and the region</p>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-start gap-2">
<svg className="w-4 h-4 text-white/80 mt-0.5" data-lucide="shield-check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<p className="text-sm">Commitment to transparency and credibility</p>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-start gap-2">
<svg className="w-4 h-4 text-white/80 mt-0.5" data-lucide="repeat" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<p className="text-sm">End-to-end support from hiring to staff management</p>
</div>
</div>
</div>

<div className="space-y-3" data-lang="en">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-start gap-2">
<svg className="w-4 h-4 text-white/80 mt-0.5" data-lucide="building-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<p className="text-sm">Cross-industry expertise (industrial, pharma, finance, hospitality, and more)</p>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-start gap-2">
<svg className="w-4 h-4 text-white/80 mt-0.5" data-lucide="smile" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<p className="text-sm">Ongoing performance and satisfaction follow-up</p>
</div>
</div>
</div>

<div className="space-y-3 hidden" data-lang="ar" dir="rtl" style={{fontFamily: '\'IBM Plex Sans Arabic\', Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-start gap-2">
<svg className="w-4 h-4 text-white/80 mt-0.5" data-lucide="network" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<p className="text-sm">شبكة واسعة من المرشحين في الأردن والمنطقة</p>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-start gap-2">
<svg className="w-4 h-4 text-white/80 mt-0.5" data-lucide="shield-check" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<p className="text-sm">التزام بالشفافية والمصداقية</p>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-start gap-2">
<svg className="w-4 h-4 text-white/80 mt-0.5" data-lucide="repeat" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<p className="text-sm">دعم متكامل من التوظيف إلى إدارة الموظفين</p>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-start gap-2">
<svg className="w-4 h-4 text-white/80 mt-0.5" data-lucide="building-2" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<p className="text-sm">خبرة متعددة القطاعات (الصناعة، الدواء، التمويل، الضيافة، وغيرها)</p>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-start gap-2">
<svg className="w-4 h-4 text-white/80 mt-0.5" data-lucide="smile" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<p className="text-sm">متابعة أداء ورضا العملاء والمرشحين</p>
</div>
</div>
</div>
</div>

<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-gray-900 bg-white hover:bg-white/90 border border-white/10" href="#contact">
<svg className="w-4 h-4" data-lucide="phone" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20"></svg>
<span data-lang="en">Talk to us</span>
<span className="hidden" data-lang="ar" dir="rtl" style={{fontFamily: '\'IBM Plex Sans Arabic\', Inter'}}>تحدث معنا</span>
</a>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 sm:mt-16" id="clients">
<div className="relative rounded-[40px] bg-white border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative p-6 sm:p-8">
<div className="flex items-end justify-between border-b border-black/5 pb-4">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tighter">References / Clients</h2>
<div className="text-xs text-gray-600 flex items-center gap-2">
<svg className="w-4 h-4" data-lucide="sparkles" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16"></svg>
<span>Selected partners</span>
</div>
</div>
<div className="mt-6 overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="text-gray-500">
<tr className="border-b border-black/5">
<th className="py-3 pr-4">Client</th>
<th className="py-3 pr-4">Sector</th>
<th className="py-3 pr-4">Notes</th>
</tr>
</thead>
<tbody className="divide-y divide-black/5">
<tr>
<td className="py-3 pr-4 font-medium tracking-tight">JTI Jordan</td>
<td className="py-3 pr-4 text-gray-700">Manufacturing / FMCG</td>
<td className="py-3 pr-4 text-gray-700">
                    Part of the global JTI network with operations in Jordan. 
                    <a className="underline text-gray-900 hover:text-gray-700" href="https://www.jti.com/en/careers/behind-the-scenes/middle-east?utm_source=chatgpt.com" target="_blank">jti.com</a>
</td>
</tr>
<tr>
<td className="py-3 pr-4 font-medium tracking-tight">Axantia / PIC</td>
<td className="py-3 pr-4 text-gray-700">Pharmaceutical</td>
<td className="py-3 pr-4 text-gray-700">
                    Regional pharma group owning PIC in Jordan.
                    <a className="underline text-gray-900 hover:text-gray-700" href="https://www.axantia.com/ar-jo/%D8%A7%D9%84%D8%B4%D8%B1%D9%83%D8%A7%D8%A1/?utm_source=chatgpt.com" target="_blank">axantia.com</a>
</td>
</tr>
</tbody>
</table>
</div>
<p className="mt-4 text-xs text-gray-600">
            Note: For more details (number of staff provided, contract duration) we can provide reference information upon request.
          </p>
<p className="mt-1 text-xs text-gray-600 hidden" data-lang="ar" dir="rtl" style={{fontFamily: '\'IBM Plex Sans Arabic\', Inter'}}>
            ملاحظة: لمزيد من التفاصيل (عدد الموظفين المقدمين، مدة التعاقد) يمكن طلب معلومات مرجعية من كل عميل.
          </p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 sm:mt-16" id="portfolio">
<div className="relative rounded-[40px] bg-white border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative p-6 sm:p-8">
<div className="flex items-end justify-between border-b border-black/5 pb-4">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tighter">Request Portfolio</h2>
<svg className="w-4 h-4 text-gray-600" data-lucide="inbox" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

<div data-lang="en">
<p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Would you like to review our project samples, success stories, and client testimonials? Enter your email and we will send you our detailed Portfolio.
              </p>
<form className="mt-4 flex gap-2" id="portfolioForm">
<div className="flex-1">
<input className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="your@email.com" required="" type="email"/>
</div>
<button className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium tracking-tight text-white bg-gray-900 hover:bg-gray-800 border border-black/10" type="submit">
<svg className="w-4 h-4" data-lucide="send" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<span>Send</span>
</button>
</form>
<p className="hidden mt-2 text-sm text-green-700" id="portfolioMsg">Thank you! We’ll email the portfolio shortly.</p>
</div>

<div className="hidden" data-lang="ar" dir="rtl" style={{fontFamily: '\'IBM Plex Sans Arabic\', Inter'}}>
<p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                هل ترغب بالاطلاع على نماذج مشاريعنا وقصص النجاح ومراجعات العملاء؟ أدخل بريدك الإلكتروني وسنرسل لك ملف المشاريع بالتفصيل.
              </p>
<form className="mt-4 flex gap-2" id="portfolioFormAr">
<div className="flex-1">
<input className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="name@example.com" required="" style={{fontFamily: '\'IBM Plex Sans Arabic\', Inter'}} type="email"/>
</div>
<button className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium tracking-tight text-white bg-gray-900 hover:bg-gray-800 border border-black/10" type="submit">
<svg className="w-4 h-4" data-lucide="send" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<span>إرسال</span>
</button>
</form>
<p className="hidden mt-2 text-sm text-green-700" id="portfolioMsgAr" style={{fontFamily: '\'IBM Plex Sans Arabic\', Inter'}}>شكرًا لك! سنرسل ملف المشاريع قريبًا.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 sm:mt-16 mb-10" id="contact">
<div className="relative rounded-[40px] bg-white border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative p-6 sm:p-8">
<div className="flex items-end justify-between border-b border-black/5 pb-4">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tighter">Contact Us</h2>
<svg className="w-4 h-4 text-gray-600" data-lucide="map-pin" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">

<div className="lg:col-span-5 space-y-4">

<div className="space-y-3" data-lang="en">
<div className="flex items-start gap-2">
<svg className="w-4 h-4 text-gray-700 mt-0.5" data-lucide="map-pin" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<p className="text-sm text-gray-700">Address: Jabal Amman – First Circle, Janbaik/Janbek Building, 3rd Floor</p>
</div>
<div className="flex items-start gap-2">
<svg className="w-4 h-4 text-gray-700 mt-0.5" data-lucide="phone" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<p className="text-sm text-gray-700">Phone: +962 7-9553-5224 / +962 79-872-2443</p>
</div>
<div className="flex items-start gap-2">
<svg className="w-4 h-4 text-gray-700 mt-0.5" data-lucide="mail" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<p className="text-sm text-gray-700">
                    General: <a className="underline" href="mailto:info@pioneerjo.com">info@pioneerjo.com</a><br/>
                    Portfolio: <a className="underline" href="mailto:portfolio@pioneerjo.com">portfolio@pioneerjo.com</a>
</p>
</div>
<div className="flex items-start gap-2">
<svg className="w-4 h-4 text-gray-700 mt-0.5" data-lucide="clock" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<p className="text-sm text-gray-700">Working Hours: Sunday to Thursday, 9:00 AM – 5:00 PM</p>
</div>
</div>

<div className="space-y-3 hidden" data-lang="ar" dir="rtl" style={{fontFamily: '\'IBM Plex Sans Arabic\', Inter'}}>
<div className="flex items-start gap-2">
<svg className="w-4 h-4 text-gray-700 mt-0.5" data-lucide="map-pin" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<p className="text-sm text-gray-700">العنوان: جبل عمّان – الدوار الأول، مبنى Janbaik/Janbek، الطابق الثالث</p>
</div>
<div className="flex items-start gap-2">
<svg className="w-4 h-4 text-gray-700 mt-0.5" data-lucide="phone" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<p className="text-sm text-gray-700">أرقام الهواتف: +962 7-9553-5224 / +962 79-872-2443</p>
</div>
<div className="flex items-start gap-2">
<svg className="w-4 h-4 text-gray-700 mt-0.5" data-lucide="mail" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<p className="text-sm text-gray-700">
                    البريد العام: <a className="underline" href="mailto:info@pioneerjo.com">info@pioneerjo.com</a><br/>
                    ملف المشاريع: <a className="underline" href="mailto:portfolio@pioneerjo.com">portfolio@pioneerjo.com</a>
</p>
</div>
<div className="flex items-start gap-2">
<svg className="w-4 h-4 text-gray-700 mt-0.5" data-lucide="clock" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<p className="text-sm text-gray-700">ساعات العمل: الأحد – الخميس، 9:00 صباحًا حتى 5:00 مساءً</p>
</div>
</div>

<div className="mt-4 p-4 rounded-xl bg-gray-50 border border-black/5">
<p className="text-[12px] text-gray-600" data-lang="en">“Pioneer Recruitment &amp; Outsourcing” is licensed by the Jordanian Ministry of Labor (License No.: …).</p>
<p className="text-[12px] text-gray-600 hidden" data-lang="ar" dir="rtl" style={{fontFamily: '\'IBM Plex Sans Arabic\', Inter'}}>“الشركة الريادية للتوظيف” مرخصة من وزارة العمل الأردنية (رقم الترخيص: …).</p>
</div>
</div>

<div className="lg:col-span-7">
<form className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-gray-50 border border-black/5 rounded-2xl p-4 sm:p-5" id="contactForm">
<div className="sm:col-span-1">
<label className="block text-xs text-gray-600 mb-1 tracking-tight" data-lang="en">Name</label>
<label className="hidden block text-xs text-gray-600 mb-1 tracking-tight" data-lang="ar" dir="rtl" style={{fontFamily: '\'IBM Plex Sans Arabic\', Inter'}}>الاسم</label>
<input className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-900/10" required="" type="text"/>
</div>
<div className="sm:col-span-1">
<label className="block text-xs text-gray-600 mb-1 tracking-tight" data-lang="en">Email</label>
<label className="hidden block text-xs text-gray-600 mb-1 tracking-tight" data-lang="ar" dir="rtl" style={{fontFamily: '\'IBM Plex Sans Arabic\', Inter'}}>البريد الإلكتروني</label>
<input className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-900/10" required="" type="email"/>
</div>
<div className="sm:col-span-1">
<label className="block text-xs text-gray-600 mb-1 tracking-tight" data-lang="en">Phone</label>
<label className="hidden block text-xs text-gray-600 mb-1 tracking-tight" data-lang="ar" dir="rtl" style={{fontFamily: '\'IBM Plex Sans Arabic\', Inter'}}>الهاتف</label>
<input className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-900/10" type="tel"/>
</div>
<div className="sm:col-span-2">
<label className="block text-xs text-gray-600 mb-1 tracking-tight" data-lang="en">Message</label>
<label className="hidden block text-xs text-gray-600 mb-1 tracking-tight" data-lang="ar" dir="rtl" style={{fontFamily: '\'IBM Plex Sans Arabic\', Inter'}}>رسالتك</label>
<textarea className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-900/10" rows="4"></textarea>
</div>
<div className="sm:col-span-2 flex items-center justify-between">
<button className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium tracking-tight text-white bg-gray-900 hover:bg-gray-800 border border-black/10" type="submit">
<svg className="w-4 h-4" data-lucide="send" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<span data-lang="en">Send Message</span>
<span className="hidden" data-lang="ar" dir="rtl" style={{fontFamily: '\'IBM Plex Sans Arabic\', Inter'}}>إرسال</span>
</button>
<p className="text-sm text-green-700 hidden" id="contactMsg">Thanks! We’ll get back to you shortly.</p>
</div>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="max-w-7xl mx-auto px-4 sm:px-6 mb-10">
<div className="relative rounded-[40px] bg-neutral-950 text-white border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.18)] p-6 sm:p-8">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(255,255,255,0.06),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_120%,rgba(255,255,255,0.05),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(#ffffff12_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.16]"></div>
</div>
<div className="relative">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div>
<p className="text-sm text-white/70" data-lang="en">Ready to hire or outsource?</p>
<p className="text-sm text-white/70 hidden" data-lang="ar" dir="rtl" style={{fontFamily: '\'IBM Plex Sans Arabic\', Inter'}}>هل أنت مستعد للتوظيف أو الاستعانة الخارجية؟</p>
<h3 className="mt-1 text-xl sm:text-2xl font-semibold tracking-tighter">Let’s talk.</h3>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-gray-900 bg-white hover:bg-white/90 border border-white/10" href="mailto:info@pioneerjo.com">
<svg className="w-4 h-4" data-lucide="mail" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<span>info@pioneerjo.com</span>
</a>
<a className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-white bg-blue-600 hover:bg-blue-700 border border-white/10" href="#contact">
<svg className="w-4 h-4" data-lucide="message-circle" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
<span data-lang="en">Contact</span>
<span className="hidden" data-lang="ar" dir="rtl" style={{fontFamily: '\'IBM Plex Sans Arabic\', Inter'}}>تواصل</span>
</a>
</div>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<p className="text-sm text-white/60">Navigate</p>
<div className="mt-3 grid grid-cols-2 gap-2 text-sm">
<a className="font-medium tracking-tight hover:underline" href="#home">Home</a>
<a className="font-medium tracking-tight hover:underline" href="#services">Services</a>
<a className="font-medium tracking-tight hover:underline" href="#why">Why Us</a>
<a className="font-medium tracking-tight hover:underline" href="#clients">Clients</a>
<a className="font-medium tracking-tight hover:underline" href="#portfolio">Portfolio</a>
<a className="font-medium tracking-tight hover:underline" href="#contact">Contact</a>
</div>
</div>
<div>
<p className="text-sm text-white/60">Legal</p>
<div className="mt-3 grid grid-cols-1 gap-2 text-sm">
<span className="font-medium tracking-tight text-white/80">© <span id="year">2025</span> Pioneer Recruitment &amp; Outsourcing. All rights reserved.</span>
<span className="text-white/60 text-xs">Amman, Jordan</span>
</div>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
