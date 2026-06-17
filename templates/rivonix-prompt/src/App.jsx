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



    // Initialize Lucide icons
    lucide.createIcons();
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
    
    // Scroll animations with Intersection Observer
    const observerOptions = { 
      threshold: 0.1, 
      rootMargin: '0px 0px -50px 0px' 
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    
    // Trigger animations for elements already in view on load
    setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('animated');
        }
      });
    }, 100);
    
    // Copy to clipboard functionality
    document.querySelectorAll('textarea').forEach(textarea => {
      textarea.addEventListener('click', function() {
        this.select();
        document.execCommand('copy');
        
        // Visual feedback
        const originalBorder = this.style.borderColor;
        this.style.borderColor = '#22c55e';
        setTimeout(() => {
          this.style.borderColor = originalBorder;
        }, 500);
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
      

<div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
<div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '80px 80px'}}></div>
<div className="gradient-animate absolute left-1/2 top-[-10%] -translate-x-1/2 h-[40rem] w-[40rem] rounded-full blur-3xl" style={{background: 'radial-gradient(closest-side, rgba(231,37,67,0.2), transparent)'}}></div>
<div className="gradient-animate absolute right-[0%] top-[30%] h-[30rem] w-[30rem] rounded-full blur-3xl" style={{background: 'radial-gradient(closest-side, rgba(168,85,247,0.1), transparent)', animationDelay: '2s'}}></div>
<div className="gradient-animate absolute left-[5%] bottom-[10%] h-[35rem] w-[35rem] rounded-full blur-3xl" style={{background: 'radial-gradient(closest-side, rgba(255,58,90,0.1), transparent)', animationDelay: '4s'}}></div>
</div>

<header className="animate-on-scroll slide-up sticky top-0 z-50 backdrop-blur-2xl" style={{background: 'rgba(5, 5, 5, 0.85)', borderBottom: '1px solid rgba(255,255,255,0.06)'}}>
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="flex items-center gap-3">
<div className="pulse-glow inline-flex items-center justify-center w-9 h-9 rounded-xl" style={{background: 'linear-gradient(135deg, #ff9bb1, #e72543 60%, #7a1225)'}}></div>
<div className="hidden sm:block leading-tight">
<div className="text-xs font-semibold uppercase tracking-widest" style={{color: '#a1a1aa'}}>Rivonix Branding Studio</div>
<div className="text-xs" style={{color: '#71717a'}}>Aura / AI Prompt Library</div>
</div>
</div>

<nav className="hidden md:flex items-center gap-1 rounded-full px-2 py-1.5" style={{background: 'rgba(39, 39, 42, 0.5)', border: '1px solid rgba(255,255,255,0.08)'}}>
<a className="nav-link px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover:bg-white/5" href="#page-prompts" style={{color: '#d4d4d8'}}>Page</a>
<a className="nav-link px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover:bg-white/5" href="#section-prompts" style={{color: '#d4d4d8'}}>Section</a>
<a className="nav-link px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover:bg-white/5" href="#modular-prompts" style={{color: '#d4d4d8'}}>Modular</a>
<a className="nav-link px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover:bg-white/5" href="#hero-prompts" style={{color: '#d4d4d8'}}>Hero / Visual</a>
</nav>

<button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl transition-colors hover:bg-white/5" id="mobileMenuBtn" style={{border: '1px solid rgba(255,255,255,0.1)'}}>
<i className="w-5 h-5" data-lucide="menu" style={{color: '#d4d4d8'}}></i>
</button>
</div>
</div>

<div className="hidden md:hidden" id="mobileMenu" style={{background: 'rgba(5, 5, 5, 0.95)', borderTop: '1px solid rgba(255,255,255,0.06)'}}>
<div className="px-4 py-4 space-y-2">
<a className="block px-4 py-2 rounded-lg text-sm transition-colors hover:bg-white/5" href="#page-prompts" style={{color: '#d4d4d8'}}>Page Prompts</a>
<a className="block px-4 py-2 rounded-lg text-sm transition-colors hover:bg-white/5" href="#section-prompts" style={{color: '#d4d4d8'}}>Section Prompts</a>
<a className="block px-4 py-2 rounded-lg text-sm transition-colors hover:bg-white/5" href="#modular-prompts" style={{color: '#d4d4d8'}}>Modular Prompts</a>
<a className="block px-4 py-2 rounded-lg text-sm transition-colors hover:bg-white/5" href="#hero-prompts" style={{color: '#d4d4d8'}}>Hero / Visual</a>
</div>
</div>
</header>
<main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20 space-y-20">

<section className="animate-on-scroll blur-in grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
<div className="space-y-6">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]" style={{color: '#fafafa'}}>
          Rivonix<br/>
<span className="hero-gradient">Aura Prompt Library</span>
</h1>
<p className="text-base sm:text-lg leading-relaxed max-w-xl" style={{color: '#a1a1aa'}}>
          ศูนย์รวม <strong style={{color: '#f4f4f5', fontWeight: '500'}}>Prompt สำเร็จรูป</strong> สำหรับออกแบบ UI / UX บน
          <strong style={{color: '#f4f4f5', fontWeight: '500'}}>Aura.build</strong><br/>
          รองรับทั้งภาษาไทยและอังกฤษ แค่เปิดหน้านี้แล้วก๊อปไปวางในโปรเจกต์ของคุณได้ทันที
        </p>

<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium" style={{background: 'rgba(39, 39, 42, 0.6)', border: '1px solid rgba(255,255,255,0.1)', color: '#d4d4d8'}}>
<span className="w-2 h-2 rounded-full" style={{background: '#e72543'}}></span>
            โทนเว็บ: Dark + Neon #e72543
          </span>
<span className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium" style={{background: 'rgba(39, 39, 42, 0.6)', border: '1px solid rgba(255,255,255,0.1)', color: '#d4d4d8'}}>
<span className="w-2 h-2 rounded-full" style={{background: 'linear-gradient(135deg, #e72543, #a855f7)'}}></span>
            ภาษา: ไทย + English
          </span>
<span className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium" style={{background: 'rgba(39, 39, 42, 0.6)', border: '1px solid rgba(255,255,255,0.1)', color: '#d4d4d8'}}>
<span className="w-2 h-2 rounded-full" style={{background: 'linear-gradient(135deg, #22c55e, #10b981)'}}></span>
            ใช้ซ้ำได้: Page / Section / Modular
          </span>
</div>
</div>

<aside className="rounded-2xl p-6 backdrop-blur-md" style={{background: 'linear-gradient(145deg, rgba(231, 37, 67, 0.08), rgba(9, 9, 11, 0.9) 40%)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 25px 60px rgba(0,0,0,0.5)'}}>
<div className="flex items-center gap-2 mb-5">
<i className="w-4 h-4" data-lucide="zap" style={{color: '#e72543'}}></i>
<span className="text-xs uppercase font-semibold tracking-widest" style={{color: '#71717a'}}>Quick Start</span>
</div>
<div className="space-y-3">
<a className="group flex items-center justify-between w-full rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 hover:scale-[1.02]" href="#page-prompts" style={{background: 'linear-gradient(135deg, #ff6b8a, #e72543)', color: 'white', boxShadow: '0 4px 20px rgba(231,37,67,0.4)'}}>
<span>Page Prompts</span>
<i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
<a className="group flex items-center justify-between w-full rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 hover:bg-white/10" href="#section-prompts" style={{background: 'rgba(39, 39, 42, 0.6)', border: '1px solid rgba(255,255,255,0.1)', color: '#d4d4d8'}}>
<span>Section / Components</span>
<i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
<a className="group flex items-center justify-between w-full rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 hover:bg-white/10" href="#modular-prompts" style={{background: 'rgba(39, 39, 42, 0.6)', border: '1px solid rgba(255,255,255,0.1)', color: '#d4d4d8'}}>
<span>Modular Fix / Add-on</span>
<i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-5 pt-4" style={{borderTop: '1px dashed rgba(255,255,255,0.1)'}}>
<p className="text-xs leading-relaxed" style={{color: '#71717a'}}>
<strong style={{color: '#a1a1aa'}}>วิธีใช้:</strong> เลือก Prompt ตามหมวด → คัดลอกข้อความในกล่อง → วางลงใน Aura.build แล้วปรับชื่อ Section หรือรายละเอียดให้ตรงกับหน้าเว็บจริงของคุณ
          </p>
</div>
</aside>
</section>

<section className="space-y-8 scroll-mt-24" id="page-prompts">
<div className="animate-on-scroll slide-up">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase font-semibold tracking-widest mb-3" style={{background: 'rgba(231, 37, 67, 0.15)', border: '1px solid rgba(231,37,67,0.3)', color: '#ff6b8a'}}>
<i className="w-3 h-3" data-lucide="layers"></i>
              Page Level
            </div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{color: '#fafafa'}}>Page Prompts – หน้าเต็ม</h2>
</div>
<p className="text-sm max-w-md" style={{color: '#a1a1aa'}}>
            สำหรับสร้างหรือรีดีไซน์หน้าเว็บทั้งหน้าใน Aura.build เช่น หน้า Home หรือหน้า Projects โดยกำหนดธีม Dark Mode, ภาษาไทย+อังกฤษ และโครงสร้าง Section ให้ครบ
          </p>
</div>
</div>
<div className="grid gap-6 lg:grid-cols-2">

<article className="animate-on-scroll slide-up delay-100 group rounded-2xl card-shine hover-glow" style={{background: 'linear-gradient(145deg, rgba(24, 24, 27, 0.9), rgba(9, 9, 11, 0.95))', border: '1px solid rgba(255,255,255,0.08)'}}>
<div className="p-6 space-y-4">
<div className="flex items-center justify-between flex-wrap gap-2">
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-full text-xs uppercase font-semibold tracking-wide" style={{background: 'linear-gradient(135deg, rgba(255,134,160,0.9), rgba(231,37,67,0.9))', color: 'white'}}>Page</span>
<span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#a1a1aa'}}>Base Layout</span>
</div>
<span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16,185,129,0.4)', color: '#6ee7b7'}}>✓ Tested</span>
</div>
<div>
<h3 className="text-lg font-semibold mb-2" style={{color: '#fafafa'}}>Page – Base Layout (Dark, TH/EN)</h3>
<p className="text-sm leading-relaxed" style={{color: '#a1a1aa'}}>Prompt แม่แบบสำหรับสร้างหน้าใหม่ใน Aura (ทุกหน้า) ใช้โทน Dark, สีแดง #e72543, รองรับ heading ภาษาอังกฤษ + body ภาษาไทย</p>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>All Pages</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Layout</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Dark Theme</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>TH+EN</span>
</div>
<div className="flex items-center gap-2 text-xs pt-2" style={{color: '#71717a'}}>
<i className="w-3.5 h-3.5" data-lucide="copy"></i>
<span>Prompt (Copy &amp; paste into Aura)</span>
</div>
<textarea className="w-full rounded-xl p-4 text-xs font-mono resize-y min-h-[200px] focus:outline-none focus:ring-2 transition-all" readonly="" style={{background: 'rgba(0, 0, 0, 0.6)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#e4e4e7', '--tw-ring-color': 'rgba(231,37,67,0.5)'}}>Create a responsive web page using semantic HTML + Tailwind CSS for **{{BRAND_NAME}}**.

Goal / เป้าหมาย:
- EN: Build a premium dark-mode page for {{BRAND_NAME}} focused on {{PAGE_PURPOSE}}.
- TH: สร้างหน้าเว็บโหมดมืดดีไซน์พรีเมียมสำหรับ {{BRAND_NAME}} ที่โฟกัสเรื่อง {{PAGE_PURPOSE}}

Brand &amp; Theme:
- Use a dark mode palette: background #050505 – #0a0a0a, with primary accent #e72543 and subtle neon glow.
- Headings (H1–H3): English only, modern sans-serif.
- Body text &amp; descriptions: natural, readable Thai.

Typography:
- EN heading font: modern sans-serif (Inter / Geist).
- TH body font: "Kanit" หรือฟอนต์ไทยกลิ่น modern.
- H1 ~ 40–48px, H2 ~ 28–32px, body 16px.

Framework:
- ใช้ semantic HTML5: &lt;header&gt;, &lt;main&gt;, &lt;section&gt;, &lt;footer&gt;.
- ใช้ Tailwind utilities สำหรับ layout, spacing, colors, typography.

Responsive:
- Desktop (≥ 1024px): container mx-auto, px-6, max-w-6xl.
- Tablet (768–1023px): ปรับ grid เป็น 2 คอลัมน์.
- Mobile (&lt; 768px): ทุกอย่างเป็น 1 คอลัมน์.

Animation &amp; Interactions:
- Scroll: fade + slide up, 400–600ms ease-out.
- Hover บน card: scale 1.03–1.05x, shadow นุ่ม ๆ, border glow ด้วย #e72543.
- Button hover: scale เล็กน้อย + glow border.

Now implement the following sections:
- {{PAGE_SPECIFIC_SECTIONS}}</textarea>
</div>
</article>

<article className="animate-on-scroll slide-up delay-200 group rounded-2xl card-shine hover-glow" style={{background: 'linear-gradient(145deg, rgba(24, 24, 27, 0.9), rgba(9, 9, 11, 0.95))', border: '1px solid rgba(255,255,255,0.08)'}}>
<div className="p-6 space-y-4">
<div className="flex items-center justify-between flex-wrap gap-2">
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-full text-xs uppercase font-semibold tracking-wide" style={{background: 'linear-gradient(135deg, rgba(255,134,160,0.9), rgba(231,37,67,0.9))', color: 'white'}}>Page</span>
<span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#a1a1aa'}}>Home</span>
</div>
<span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{background: 'rgba(251, 191, 36, 0.15)', border: '1px solid rgba(251,191,36,0.4)', color: '#fcd34d'}}>★ Favorite</span>
</div>
<div>
<h3 className="text-lg font-semibold mb-2" style={{color: '#fafafa'}}>Home – Update from rivonix26</h3>
<p className="text-sm leading-relaxed" style={{color: '#a1a1aa'}}>ใช้ตอนแก้หน้า Home ปัจจุบัน ให้มี Branding for Thai Businesses, การ์ดสถิตินีออน 3 ใบ, FAQs และ Portfolio ครบ</p>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Home</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Sections</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Neon Stats</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>FAQs</span>
</div>
<div className="flex items-center gap-2 text-xs pt-2" style={{color: '#71717a'}}>
<i className="w-3.5 h-3.5" data-lucide="copy"></i>
<span>Prompt (Copy &amp; paste into Aura)</span>
</div>
<textarea className="w-full rounded-xl p-4 text-xs font-mono resize-y min-h-[200px] focus:outline-none focus:ring-2 transition-all" readonly="" style={{background: 'rgba(0, 0, 0, 0.6)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#e4e4e7', '--tw-ring-color': 'rgba(231,37,67,0.5)'}}>You are editing the existing **Rivonix Branding Studio** home page.
Use the current code in **rivonix26.html** as the base.

Global:
- Keep dark mode: background #050505–#0a0a0a, accent #e72543.
- Use semantic HTML + Tailwind CSS only.

1) Reuse Sections from rivonix25.html
- Copy the entire **FAQs** and **About Rivonix** section from rivonix25.html.
- Replace the current FAQ section with the FAQ from rivonix25.html.

2) Separate "Branding for Thai Businesses" from Hero + Neon Stats Cards
- เพิ่มการ์ดสถิตินีออน 3 ใบ:
  Card 1: "100+" / "Brand Projects Delivered"
  Card 2: "20+" / "Industries"
  Card 3: "10" / "Years of Experience"

3) Section: Start a Project
- EN heading: "Start a Project"
- TH: "เล่าโจทย์แบรนด์ของคุณให้ Rivonix ช่วยคิดและออกแบบ"

4) Section: Portfolio – Restore Missing Cards
- ใช้ grid: Desktop 3 col, Tablet 2, Mobile 1.
- เติมการ์ดที่หายไปให้ครบ (อย่างน้อย 8 การ์ด).

5) Global Animations
- fade in + slide in + blur in, element by element.
- Button hover: 1px border beam animation.</textarea>
</div>
</article>

<article className="animate-on-scroll slide-up delay-300 group rounded-2xl card-shine hover-glow" style={{background: 'linear-gradient(145deg, rgba(24, 24, 27, 0.9), rgba(9, 9, 11, 0.95))', border: '1px solid rgba(255,255,255,0.08)'}}>
<div className="p-6 space-y-4">
<div className="flex items-center justify-between flex-wrap gap-2">
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-full text-xs uppercase font-semibold tracking-wide" style={{background: 'linear-gradient(135deg, rgba(255,134,160,0.9), rgba(231,37,67,0.9))', color: 'white'}}>Page</span>
<span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#a1a1aa'}}>Projects</span>
</div>
</div>
<div>
<h3 className="text-lg font-semibold mb-2" style={{color: '#fafafa'}}>Projects Page – Portfolio Gallery</h3>
<p className="text-sm leading-relaxed" style={{color: '#a1a1aa'}}>สำหรับสร้างหน้า Projects ใหม่ที่แสดงผลงานออกแบบของ Rivonix แบบ Grid Gallery พร้อม Filter ตามหมวดหมู่</p>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Projects</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Gallery</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Filter</span>
</div>
<div className="flex items-center gap-2 text-xs pt-2" style={{color: '#71717a'}}>
<i className="w-3.5 h-3.5" data-lucide="copy"></i>
<span>Prompt (Copy &amp; paste into Aura)</span>
</div>
<textarea className="w-full rounded-xl p-4 text-xs font-mono resize-y min-h-[180px] focus:outline-none focus:ring-2 transition-all" readonly="" style={{background: 'rgba(0, 0, 0, 0.6)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#e4e4e7', '--tw-ring-color': 'rgba(231,37,67,0.5)'}}>Create a new **Projects** page for Rivonix Branding Studio.

Page Structure:
1) Hero Section
- EN heading: "Our Projects"
- TH subheading: "ผลงานออกแบบแบรนด์และกราฟิกที่เราภูมิใจนำเสนอ"

2) Filter Bar
- Categories: All / Branding / Packaging / Digital / Print
- Style: pill buttons, active state with #e72543 background

3) Project Grid
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column
- Each card: image (16:10), project name, category tag, hover overlay with "View Project" button

4) Load More Button
- Center aligned, ghost style with border

Global:
- Dark theme (#050505–#0a0a0a)
- Accent: #e72543
- Smooth hover transitions on cards</textarea>
</div>
</article>

<article className="animate-on-scroll slide-up delay-400 group rounded-2xl card-shine hover-glow" style={{background: 'linear-gradient(145deg, rgba(24, 24, 27, 0.9), rgba(9, 9, 11, 0.95))', border: '1px solid rgba(255,255,255,0.08)'}}>
<div className="p-6 space-y-4">
<div className="flex items-center justify-between flex-wrap gap-2">
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-full text-xs uppercase font-semibold tracking-wide" style={{background: 'linear-gradient(135deg, rgba(255,134,160,0.9), rgba(231,37,67,0.9))', color: 'white'}}>Page</span>
<span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#a1a1aa'}}>Contact</span>
</div>
</div>
<div>
<h3 className="text-lg font-semibold mb-2" style={{color: '#fafafa'}}>Contact Page – Start a Project Form</h3>
<p className="text-sm leading-relaxed" style={{color: '#a1a1aa'}}>หน้า Contact ที่มีฟอร์มส่งข้อมูลโปรเจกต์ใหม่ พร้อมข้อมูลติดต่อและ Social Links ของ Rivonix</p>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Contact</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Form</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Social</span>
</div>
<div className="flex items-center gap-2 text-xs pt-2" style={{color: '#71717a'}}>
<i className="w-3.5 h-3.5" data-lucide="copy"></i>
<span>Prompt (Copy &amp; paste into Aura)</span>
</div>
<textarea className="w-full rounded-xl p-4 text-xs font-mono resize-y min-h-[180px] focus:outline-none focus:ring-2 transition-all" readonly="" style={{background: 'rgba(0, 0, 0, 0.6)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#e4e4e7', '--tw-ring-color': 'rgba(231,37,67,0.5)'}}>Create a **Contact** page for Rivonix Branding Studio.

Layout: Two columns on desktop, stacked on mobile.

Left Column:
- EN heading: "Start a Project"
- TH description: "พร้อมเริ่มโปรเจกต์กับเรา? เล่าโจทย์ของคุณมาได้เลย"
- Contact info cards:
  - Email: hello@rivonix.co
  - Phone: +66 XX XXX XXXX
  - Location: Bangkok, Thailand
- Social links: Instagram, Facebook, LINE

Right Column - Contact Form:
- Name field
- Email field
- Project type dropdown (Branding / Packaging / Digital / Other)
- Budget range dropdown
- Message textarea
- Submit button with #e72543 background

Styling:
- Dark theme, accent #e72543
- Form inputs: dark bg, border-white/10, focus ring #e72543
- Smooth transitions on all interactive elements</textarea>
</div>
</article>
</div>
</section>

<section className="space-y-8 scroll-mt-24" id="section-prompts">
<div className="animate-on-scroll slide-up">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase font-semibold tracking-widest mb-3" style={{background: 'rgba(168, 85, 247, 0.15)', border: '1px solid rgba(168,85,247,0.3)', color: '#c4b5fd'}}>
<i className="w-3 h-3" data-lucide="layout-grid"></i>
              Section Level
            </div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{color: '#fafafa'}}>Section / Component Prompts</h2>
</div>
<p className="text-sm max-w-md" style={{color: '#a1a1aa'}}>
            Prompt สำหรับ Section เดี่ยว เช่น FAQs, About, Portfolio Grid หรือ Neon Stats ใช้แทรกลงในหน้าต่าง ๆ ตามต้องการ
          </p>
</div>
</div>
<div className="grid gap-6 lg:grid-cols-2">

<article className="animate-on-scroll slide-up delay-100 group rounded-2xl card-shine hover-glow" style={{background: 'linear-gradient(145deg, rgba(24, 24, 27, 0.9), rgba(9, 9, 11, 0.95))', border: '1px solid rgba(255,255,255,0.08)'}}>
<div className="p-6 space-y-4">
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-full text-xs uppercase font-semibold tracking-wide" style={{background: 'linear-gradient(135deg, rgba(192,132,252,0.9), rgba(168,85,247,0.9))', color: 'white'}}>Section</span>
<span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#a1a1aa'}}>FAQs</span>
</div>
<div>
<h3 className="text-lg font-semibold mb-2" style={{color: '#fafafa'}}>Section – FAQs (คำถามที่พบบ่อย)</h3>
<p className="text-sm leading-relaxed" style={{color: '#a1a1aa'}}>Section FAQs สำหรับบริการออกแบบกราฟิก/สร้างแบรนด์ แบบอ่านง่าย รองรับ accordion หรือ layout 2 คอลัมน์</p>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>FAQ</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Home</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Accordion</span>
</div>
<div className="flex items-center gap-2 text-xs pt-2" style={{color: '#71717a'}}>
<i className="w-3.5 h-3.5" data-lucide="copy"></i>
<span>Prompt</span>
</div>
<textarea className="w-full rounded-xl p-4 text-xs font-mono resize-y min-h-[160px] focus:outline-none focus:ring-2 transition-all" readonly="" style={{background: 'rgba(0, 0, 0, 0.6)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#e4e4e7', '--tw-ring-color': 'rgba(231,37,67,0.5)'}}>Add a dedicated **FAQs** section near the bottom of the page.

Structure:
- EN heading: "FAQs"
- TH subheading: "คำถามที่พบบ่อย"
- Layout: On desktop 2-column or accordion. On mobile 1 column stacked.

Content (5-6 items):
- ระยะเวลาทำงานโดยเฉลี่ย
- ขั้นตอนการเริ่มโปรเจกต์
- สิ่งที่ลูกค้าควรเตรียมก่อนเริ่ม
- ราคาและแพ็กเกจบริการ
- การแก้ไขและ Revision

Styling:
- Background: dark (#050505–#0a0a0a).
- Section padding: py-16–20, container mx-auto, px-6.
- Active/open FAQ: highlight with #e72543 indicator.
- Smooth expand/collapse animation.</textarea>
</div>
</article>

<article className="animate-on-scroll slide-up delay-200 group rounded-2xl card-shine hover-glow" style={{background: 'linear-gradient(145deg, rgba(24, 24, 27, 0.9), rgba(9, 9, 11, 0.95))', border: '1px solid rgba(255,255,255,0.08)'}}>
<div className="p-6 space-y-4">
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-full text-xs uppercase font-semibold tracking-wide" style={{background: 'linear-gradient(135deg, rgba(192,132,252,0.9), rgba(168,85,247,0.9))', color: 'white'}}>Section</span>
<span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#a1a1aa'}}>About</span>
</div>
<div>
<h3 className="text-lg font-semibold mb-2" style={{color: '#fafafa'}}>Section – About Rivonix</h3>
<p className="text-sm leading-relaxed" style={{color: '#a1a1aa'}}>Section สำหรับเล่า Story ของ Rivonix, แนวคิดการออกแบบ และแนวทางการทำงาน ใช้ layout 2 คอลัมน์</p>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>About</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Story</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>2-Column</span>
</div>
<div className="flex items-center gap-2 text-xs pt-2" style={{color: '#71717a'}}>
<i className="w-3.5 h-3.5" data-lucide="copy"></i>
<span>Prompt</span>
</div>
<textarea className="w-full rounded-xl p-4 text-xs font-mono resize-y min-h-[160px] focus:outline-none focus:ring-2 transition-all" readonly="" style={{background: 'rgba(0, 0, 0, 0.6)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#e4e4e7', '--tw-ring-color': 'rgba(231,37,67,0.5)'}}>Add a dedicated **About Rivonix** section to tell the studio story.

Structure:
- EN heading: "About Rivonix"
- TH body copy: หลายย่อหน้าเล่าเรื่อง:
  - แนวคิดของสตูดิโอ Rivonix
  - จุดเด่นด้าน Branding / Packaging / Digital
  - วิธีการทำงานแบบร่วมคิดกับลูกค้า (co-creation)

Layout:
- Desktop: 2 columns
  - Left: main story text (paragraphs).
  - Right: 3–4 small highlight cards:
    - "Brand Strategy"
    - "Visual Identity"
    - "Packaging &amp; Experience"
    - "Digital Presence"
- Mobile: stack vertically.

Styling:
- Background: slightly lighter (#101010–#141414).
- Accent: use #e72543 for bullets, underlines, card borders.</textarea>
</div>
</article>

<article className="animate-on-scroll slide-up delay-300 group rounded-2xl card-shine hover-glow" style={{background: 'linear-gradient(145deg, rgba(24, 24, 27, 0.9), rgba(9, 9, 11, 0.95))', border: '1px solid rgba(255,255,255,0.08)'}}>
<div className="p-6 space-y-4">
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-full text-xs uppercase font-semibold tracking-wide" style={{background: 'linear-gradient(135deg, rgba(192,132,252,0.9), rgba(168,85,247,0.9))', color: 'white'}}>Section</span>
<span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#a1a1aa'}}>Portfolio</span>
</div>
<div>
<h3 className="text-lg font-semibold mb-2" style={{color: '#fafafa'}}>Section – Portfolio Grid</h3>
<p className="text-sm leading-relaxed" style={{color: '#a1a1aa'}}>Grid แสดงผลงานแบบ masonry หรือ uniform grid พร้อม hover effect และ category tag</p>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Portfolio</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Grid</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Hover</span>
</div>
<div className="flex items-center gap-2 text-xs pt-2" style={{color: '#71717a'}}>
<i className="w-3.5 h-3.5" data-lucide="copy"></i>
<span>Prompt</span>
</div>
<textarea className="w-full rounded-xl p-4 text-xs font-mono resize-y min-h-[160px] focus:outline-none focus:ring-2 transition-all" readonly="" style={{background: 'rgba(0, 0, 0, 0.6)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#e4e4e7', '--tw-ring-color': 'rgba(231,37,67,0.5)'}}>Create a **Portfolio** section showcasing Rivonix projects.

Structure:
- EN heading: "Our Work"
- TH subheading: "ผลงานที่เราภูมิใจ"
- Grid: Desktop 3 col, Tablet 2 col, Mobile 1 col

Each Card:
- Image container with 16:10 aspect ratio
- Dark overlay on hover (opacity 0 → 0.8)
- Project name (EN)
- Category tag (e.g., Branding, Packaging)
- "View Project" button appears on hover

Styling:
- Cards: rounded-xl, overflow-hidden
- Image: object-cover, smooth scale on hover (1.05x)
- Transition: all 300ms ease
- Category tag: small pill with #e72543 background</textarea>
</div>
</article>

<article className="animate-on-scroll slide-up delay-400 group rounded-2xl card-shine hover-glow" style={{background: 'linear-gradient(145deg, rgba(24, 24, 27, 0.9), rgba(9, 9, 11, 0.95))', border: '1px solid rgba(255,255,255,0.08)'}}>
<div className="p-6 space-y-4">
<div className="flex items-center justify-between flex-wrap gap-2">
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-full text-xs uppercase font-semibold tracking-wide" style={{background: 'linear-gradient(135deg, rgba(192,132,252,0.9), rgba(168,85,247,0.9))', color: 'white'}}>Section</span>
<span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#a1a1aa'}}>Stats</span>
</div>
<span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{background: 'rgba(251, 191, 36, 0.15)', border: '1px solid rgba(251,191,36,0.4)', color: '#fcd34d'}}>★ Favorite</span>
</div>
<div>
<h3 className="text-lg font-semibold mb-2" style={{color: '#fafafa'}}>Section – Neon Stats Cards</h3>
<p className="text-sm leading-relaxed" style={{color: '#a1a1aa'}}>การ์ดสถิตินีออน 3-4 ใบ แสดงตัวเลขผลงาน เช่น 100+ Projects, 20+ Industries พร้อม glow effect</p>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Stats</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Neon</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Numbers</span>
</div>
<div className="flex items-center gap-2 text-xs pt-2" style={{color: '#71717a'}}>
<i className="w-3.5 h-3.5" data-lucide="copy"></i>
<span>Prompt</span>
</div>
<textarea className="w-full rounded-xl p-4 text-xs font-mono resize-y min-h-[160px] focus:outline-none focus:ring-2 transition-all" readonly="" style={{background: 'rgba(0, 0, 0, 0.6)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#e4e4e7', '--tw-ring-color': 'rgba(231,37,67,0.5)'}}>Create a **Neon Stats** section with glowing number cards.

Structure:
- EN heading: "Branding for Thai Businesses"
- TH subheading: "ออกแบบแบรนด์สำหรับธุรกิจไทย"
- 3 stat cards in a row (responsive grid)

Cards:
1. Number: "100+" / Label: "Brand Projects Delivered"
2. Number: "20+" / Label: "Industries Served"
3. Number: "10" / Label: "Years of Experience"

Styling per card:
- Background: dark glass effect (bg-black/40, backdrop-blur)
- Border: 1px solid rgba(231,37,67,0.3)
- Number: large text (text-4xl), gradient text #e72543 → #ff6b8a
- Glow: box-shadow with rgba(231,37,67,0.4)
- Hover: increase glow intensity, slight scale

Animation:
- Numbers can count up on scroll (optional)
- Cards fade in with stagger delay</textarea>
</div>
</article>
</div>
</section>

<section className="space-y-8 scroll-mt-24" id="modular-prompts">
<div className="animate-on-scroll slide-up">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase font-semibold tracking-widest mb-3" style={{background: 'rgba(34, 197, 94, 0.15)', border: '1px solid rgba(34,197,94,0.3)', color: '#86efac'}}>
<i className="w-3 h-3" data-lucide="puzzle"></i>
              Modular
            </div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{color: '#fafafa'}}>Modular Prompts – Fix / Add-on</h2>
</div>
<p className="text-sm max-w-md" style={{color: '#a1a1aa'}}>
            Prompt แบบ "ตัวช่วยเสริม" สำหรับดึง Section จากไฟล์เก่า, ปรับสี Neon, ใส่พื้นหลัง หรือเพิ่ม Animation
          </p>
</div>
</div>
<div className="grid gap-6 lg:grid-cols-2">

<article className="animate-on-scroll slide-up delay-100 group rounded-2xl card-shine hover-glow" style={{background: 'linear-gradient(145deg, rgba(24, 24, 27, 0.9), rgba(9, 9, 11, 0.95))', border: '1px solid rgba(255,255,255,0.08)'}}>
<div className="p-6 space-y-4">
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-full text-xs uppercase font-semibold tracking-wide" style={{background: 'linear-gradient(135deg, rgba(134,239,172,0.9), rgba(34,197,94,0.9))', color: '#052e16'}}>Modular</span>
<span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#a1a1aa'}}>Copy Section</span>
</div>
<div>
<h3 className="text-lg font-semibold mb-2" style={{color: '#fafafa'}}>Mod – Copy Section from Old File</h3>
<p className="text-sm leading-relaxed" style={{color: '#a1a1aa'}}>ใช้เวลาต้องการ "ยก Section ทั้งชุด" จากไฟล์เดิมไปใช้ในไฟล์ใหม่โดยไม่ต้องเขียนใหม่</p>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Reuse</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Components</span>
</div>
<div className="flex items-center gap-2 text-xs pt-2" style={{color: '#71717a'}}>
<i className="w-3.5 h-3.5" data-lucide="copy"></i>
<span>Prompt</span>
</div>
<textarea className="w-full rounded-xl p-4 text-xs font-mono resize-y min-h-[140px] focus:outline-none focus:ring-2 transition-all" readonly="" style={{background: 'rgba(0, 0, 0, 0.6)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#e4e4e7', '--tw-ring-color': 'rgba(231,37,67,0.5)'}}>Use the existing code in **{{TARGET_FILE}}** as the base layout.

Now copy the entire **{{SECTION_NAME}}** section from **{{SOURCE_FILE}}** and insert it into this page:

- SOURCE_FILE: {{SOURCE_FILE}} (e.g., rivonix25.html)
- TARGET_FILE: {{TARGET_FILE}} (e.g., rivonix26.html)
- SECTION_NAME: {{SECTION_NAME}} (e.g., "FAQs", "About Rivonix")

ภาษาไทย:
- โปรดคัดลอก Section '{{SECTION_NAME}}' ทั้งชุดจากไฟล์ {{SOURCE_FILE}}
- รักษาโครงสร้าง HTML เดิม แล้วปรับสีให้เข้ากับธีมปัจจุบัน
- ห้ามลบ Section อื่นที่มีอยู่แล้ว</textarea>
</div>
</article>

<article className="animate-on-scroll slide-up delay-200 group rounded-2xl card-shine hover-glow" style={{background: 'linear-gradient(145deg, rgba(24, 24, 27, 0.9), rgba(9, 9, 11, 0.95))', border: '1px solid rgba(255,255,255,0.08)'}}>
<div className="p-6 space-y-4">
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-full text-xs uppercase font-semibold tracking-wide" style={{background: 'linear-gradient(135deg, rgba(134,239,172,0.9), rgba(34,197,94,0.9))', color: '#052e16'}}>Modular</span>
<span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#a1a1aa'}}>Styling</span>
</div>
<div>
<h3 className="text-lg font-semibold mb-2" style={{color: '#fafafa'}}>Mod – Change Neon Card Color to Rivonix Theme</h3>
<p className="text-sm leading-relaxed" style={{color: '#a1a1aa'}}>ใช้เวลาต้องการเปลี่ยนโทนไฟนีออนทั้งหมดให้เป็น #e72543 โดยไม่ยุ่งโครงสร้าง</p>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Styling</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Neon</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Color</span>
</div>
<div className="flex items-center gap-2 text-xs pt-2" style={{color: '#71717a'}}>
<i className="w-3.5 h-3.5" data-lucide="copy"></i>
<span>Prompt</span>
</div>
<textarea className="w-full rounded-xl p-4 text-xs font-mono resize-y min-h-[140px] focus:outline-none focus:ring-2 transition-all" readonly="" style={{background: 'rgba(0, 0, 0, 0.6)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#e4e4e7', '--tw-ring-color': 'rgba(231,37,67,0.5)'}}>Update the styling of all **{{CARD_TYPE}}** to match the Rivonix neon theme.

Rules:
- Use #e72543 as the primary neon accent color.
- Use #ff3a5a / #ff6b8a for gradients and glows.
- Soft outer glow / shadow: rgba(231,37,67,0.4–0.6).
- Background of cards: dark (#050505–#0a0a0a).

ภาษาไทย:
- ปรับสี glow, border, highlight ของ {{CARD_TYPE}} ให้ใช้ #e72543 เป็นหลัก
- หากมี gradient border / animated neon line ให้ใช้โทนแดงอมชมพู
- ห้ามเปลี่ยนเนื้อหาใน card เปลี่ยนเฉพาะ layer ของสีและเอฟเฟกต์</textarea>
</div>
</article>

<article className="animate-on-scroll slide-up delay-300 group rounded-2xl card-shine hover-glow" style={{background: 'linear-gradient(145deg, rgba(24, 24, 27, 0.9), rgba(9, 9, 11, 0.95))', border: '1px solid rgba(255,255,255,0.08)'}}>
<div className="p-6 space-y-4">
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-full text-xs uppercase font-semibold tracking-wide" style={{background: 'linear-gradient(135deg, rgba(134,239,172,0.9), rgba(34,197,94,0.9))', color: '#052e16'}}>Modular</span>
<span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#a1a1aa'}}>Background</span>
</div>
<div>
<h3 className="text-lg font-semibold mb-2" style={{color: '#fafafa'}}>Mod – Add Unicorn Aura Background</h3>
<p className="text-sm leading-relaxed" style={{color: '#a1a1aa'}}>เพิ่ม Background แบบ gradient blur หลายสี (Unicorn / Aurora) ให้หน้าเว็บดู Futuristic มากขึ้น</p>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Background</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Gradient</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Aurora</span>
</div>
<div className="flex items-center gap-2 text-xs pt-2" style={{color: '#71717a'}}>
<i className="w-3.5 h-3.5" data-lucide="copy"></i>
<span>Prompt</span>
</div>
<textarea className="w-full rounded-xl p-4 text-xs font-mono resize-y min-h-[140px] focus:outline-none focus:ring-2 transition-all" readonly="" style={{background: 'rgba(0, 0, 0, 0.6)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#e4e4e7', '--tw-ring-color': 'rgba(231,37,67,0.5)'}}>Add a **Unicorn Aura** background effect to the page.

Implementation:
- Create a fixed background layer (z-index: -1) behind all content.
- Add 3-4 large blurred gradient circles:
  - Circle 1: #e72543 (red) at top-left, blur-3xl, opacity 0.15
  - Circle 2: #a855f7 (purple) at top-right, blur-3xl, opacity 0.1
  - Circle 3: #ff6b8a (pink) at bottom-center, blur-3xl, opacity 0.1
- Optional: subtle grid pattern overlay (opacity 0.05)

Animation:
- Gentle opacity pulse animation (8-10s loop)
- Each circle can have different animation delay

ภาษาไทย:
- เพิ่มพื้นหลังแบบ Aurora / Unicorn ที่มีวงกลม gradient เบลอหลายวง
- ให้มี animation เปลี่ยน opacity อย่างนุ่มนวล
- ห้ามบังเนื้อหาหลักของหน้า</textarea>
</div>
</article>

<article className="animate-on-scroll slide-up delay-400 group rounded-2xl card-shine hover-glow" style={{background: 'linear-gradient(145deg, rgba(24, 24, 27, 0.9), rgba(9, 9, 11, 0.95))', border: '1px solid rgba(255,255,255,0.08)'}}>
<div className="p-6 space-y-4">
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-full text-xs uppercase font-semibold tracking-wide" style={{background: 'linear-gradient(135deg, rgba(134,239,172,0.9), rgba(34,197,94,0.9))', color: '#052e16'}}>Modular</span>
<span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#a1a1aa'}}>Animation</span>
</div>
<div>
<h3 className="text-lg font-semibold mb-2" style={{color: '#fafafa'}}>Mod – Global Animation / Motion Pack</h3>
<p className="text-sm leading-relaxed" style={{color: '#a1a1aa'}}>เพิ่ม Animation แบบ fade-in, slide-up, blur-in ให้กับ elements ต่าง ๆ บนหน้าเว็บ</p>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Animation</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Motion</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Scroll</span>
</div>
<div className="flex items-center gap-2 text-xs pt-2" style={{color: '#71717a'}}>
<i className="w-3.5 h-3.5" data-lucide="copy"></i>
<span>Prompt</span>
</div>
<textarea className="w-full rounded-xl p-4 text-xs font-mono resize-y min-h-[140px] focus:outline-none focus:ring-2 transition-all" readonly="" style={{background: 'rgba(0, 0, 0, 0.6)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#e4e4e7', '--tw-ring-color': 'rgba(231,37,67,0.5)'}}>Add a **Global Animation Pack** to the page for scroll-based animations.

CSS Keyframes to add:
- fadeIn: opacity 0 → 1
- slideUp: opacity 0, translateY(24px) → opacity 1, translateY(0)
- blurIn: opacity 0, blur(8px) → opacity 1, blur(0)

Implementation:
- Add .animate-on-scroll class to sections, cards, headings
- Use Intersection Observer to trigger animations when elements enter viewport
- Stagger animations with delay classes (.delay-100, .delay-200, etc.)

Timing:
- Duration: 500-700ms
- Easing: ease-out
- Threshold: 0.1 (trigger when 10% visible)

ภาษาไทย:
- เพิ่ม CSS keyframes สำหรับ fade, slide, blur animations
- ใช้ Intersection Observer ให้ element animate เมื่อ scroll มาถึง
- ให้ animation ทำงานทีละ element แบบ stagger</textarea>
</div>
</article>
</div>
</section>

<section className="space-y-8 scroll-mt-24" id="hero-prompts">
<div className="animate-on-scroll slide-up">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase font-semibold tracking-widest mb-3" style={{background: 'rgba(251, 191, 36, 0.15)', border: '1px solid rgba(251,191,36,0.3)', color: '#fcd34d'}}>
<i className="w-3 h-3" data-lucide="sparkles"></i>
              Hero / Visual
            </div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{color: '#fafafa'}}>Hero &amp; Visual Effect Prompts</h2>
</div>
<p className="text-sm max-w-md" style={{color: '#a1a1aa'}}>
            Prompt สำหรับเล่นกับ Hero Text, Gradient Animation และ Visual Effects เพื่อให้หน้าเว็บดู Futuristic มากขึ้น
          </p>
</div>
</div>
<div className="grid gap-6 lg:grid-cols-2">

<article className="animate-on-scroll slide-up delay-100 group rounded-2xl card-shine hover-glow" style={{background: 'linear-gradient(145deg, rgba(24, 24, 27, 0.9), rgba(9, 9, 11, 0.95))', border: '1px solid rgba(255,255,255,0.08)'}}>
<div className="p-6 space-y-4">
<div className="flex items-center justify-between flex-wrap gap-2">
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-full text-xs uppercase font-semibold tracking-wide" style={{background: 'linear-gradient(135deg, rgba(253,224,71,0.9), rgba(251,191,36,0.9))', color: '#451a03'}}>Visual</span>
<span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#a1a1aa'}}>Hero Text</span>
</div>
<span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{background: 'rgba(251, 191, 36, 0.15)', border: '1px solid rgba(251,191,36,0.4)', color: '#fcd34d'}}>★ Favorite</span>
</div>
<div>
<h3 className="text-lg font-semibold mb-2" style={{color: '#fafafa'}}>Hero – Gradient Text Animation "Design Studio"</h3>
<p className="text-sm leading-relaxed" style={{color: '#a1a1aa'}}>ใช้แก้ Hero heading ให้คำว่า "Design Studio" มี gradient แดง→ม่วง→เขียว เคลื่อนไหว 8 วินาที วนลูป</p>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Hero</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Gradient</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Animation</span>
</div>
<div className="flex items-center gap-2 text-xs pt-2" style={{color: '#71717a'}}>
<i className="w-3.5 h-3.5" data-lucide="copy"></i>
<span>Prompt</span>
</div>
<textarea className="w-full rounded-xl p-4 text-xs font-mono resize-y min-h-[160px] focus:outline-none focus:ring-2 transition-all" readonly="" style={{background: 'rgba(0, 0, 0, 0.6)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#e4e4e7', '--tw-ring-color': 'rgba(231,37,67,0.5)'}}>You are editing the Hero section of the current homepage.

Goal:
- Keep the full heading "Digital Brand Design Studio".
- Animate only the word "Design Studio" with a gradient text effect.

Instructions:
- Wrap "Digital Brand" and "Design Studio" in separate spans.
- Leave "Digital Brand" as normal static text (white).
- Apply an animated gradient background to "Design Studio" span:
  - Gradient colors: #e72543 → #a855f7 → #22c55e → #e72543
  - background-size: 300% 300%
  - Animate horizontally over 6-8 seconds
  - Loop infinitely
  - Use background-clip: text, color: transparent

CSS:
@keyframes heroGradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

ภาษาไทย:
- ทำให้คำว่า "Design Studio" เป็น Gradient Text Animation
- ไล่สีแดง → ม่วง → เขียว แล้ววนกลับ
- ระยะเวลา 6-8 วินาทีต่อรอบ วนลูปไม่สิ้นสุด</textarea>
</div>
</article>

<article className="animate-on-scroll slide-up delay-200 group rounded-2xl card-shine hover-glow" style={{background: 'linear-gradient(145deg, rgba(24, 24, 27, 0.9), rgba(9, 9, 11, 0.95))', border: '1px solid rgba(255,255,255,0.08)'}}>
<div className="p-6 space-y-4">
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-full text-xs uppercase font-semibold tracking-wide" style={{background: 'linear-gradient(135deg, rgba(253,224,71,0.9), rgba(251,191,36,0.9))', color: '#451a03'}}>Visual</span>
<span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#a1a1aa'}}>Scrolling Grid</span>
</div>
<div>
<h3 className="text-lg font-semibold mb-2" style={{color: '#fafafa'}}>Scrolling Image Grid – Portrait 4:5</h3>
<p className="text-sm leading-relaxed" style={{color: '#a1a1aa'}}>ใช้ปรับ Section "Responsive scrolling image grid" ให้ภาพเป็นแนวตั้ง 4:5 พร้อม marquee animation</p>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Gallery</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Marquee</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Portrait</span>
</div>
<div className="flex items-center gap-2 text-xs pt-2" style={{color: '#71717a'}}>
<i className="w-3.5 h-3.5" data-lucide="copy"></i>
<span>Prompt</span>
</div>
<textarea className="w-full rounded-xl p-4 text-xs font-mono resize-y min-h-[160px] focus:outline-none focus:ring-2 transition-all" readonly="" style={{background: 'rgba(0, 0, 0, 0.6)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#e4e4e7', '--tw-ring-color': 'rgba(231,37,67,0.5)'}}>Create a **Scrolling Image Grid** section with auto-scrolling marquee effect.

Structure:
- Full-width section with overflow hidden
- Two rows of images scrolling in opposite directions
- Row 1: scroll left → right
- Row 2: scroll right → left

Image Cards:
- Aspect ratio: 4:5 (portrait)
- Width: 200-250px each
- Rounded corners: rounded-xl
- Gap between cards: 16-24px
- Duplicate images to create seamless loop

Animation:
- CSS @keyframes marquee for infinite scroll
- Duration: 30-40 seconds per loop
- Linear timing (no easing)
- Pause on hover (optional)

Styling:
- Cards: subtle border, dark background
- Optional: hover scale effect (1.05x)
- Fade edges with gradient mask (left/right)

ภาษาไทย:
- สร้าง Grid ภาพแบบ auto-scroll (marquee)
- ภาพเป็นแนวตั้ง 4:5
- มี 2 แถว เลื่อนสวนทางกัน</textarea>
</div>
</article>

<article className="animate-on-scroll slide-up delay-300 group rounded-2xl card-shine hover-glow" style={{background: 'linear-gradient(145deg, rgba(24, 24, 27, 0.9), rgba(9, 9, 11, 0.95))', border: '1px solid rgba(255,255,255,0.08)'}}>
<div className="p-6 space-y-4">
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-full text-xs uppercase font-semibold tracking-wide" style={{background: 'linear-gradient(135deg, rgba(253,224,71,0.9), rgba(251,191,36,0.9))', color: '#451a03'}}>Visual</span>
<span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#a1a1aa'}}>Button Effect</span>
</div>
<div>
<h3 className="text-lg font-semibold mb-2" style={{color: '#fafafa'}}>Button – Border Beam Animation</h3>
<p className="text-sm leading-relaxed" style={{color: '#a1a1aa'}}>เพิ่ม Effect "Border Beam" บนปุ่ม โดยมีแสงวิ่งรอบขอบปุ่มเมื่อ hover</p>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Button</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Border</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Hover</span>
</div>
<div className="flex items-center gap-2 text-xs pt-2" style={{color: '#71717a'}}>
<i className="w-3.5 h-3.5" data-lucide="copy"></i>
<span>Prompt</span>
</div>
<textarea className="w-full rounded-xl p-4 text-xs font-mono resize-y min-h-[140px] focus:outline-none focus:ring-2 transition-all" readonly="" style={{background: 'rgba(0, 0, 0, 0.6)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#e4e4e7', '--tw-ring-color': 'rgba(231,37,67,0.5)'}}>Add a **Border Beam** animation effect to buttons on hover.

Implementation:
- Use a pseudo-element (::before or ::after) for the beam
- Beam travels around the button border (clockwise)
- Beam color: #e72543 with soft glow
- Beam size: small gradient dot (~20-30px wide)

CSS approach:
- Button: position relative, overflow hidden
- Pseudo-element: absolute positioned, animated with @keyframes
- Animation rotates around the border edges
- Duration: 2-3 seconds per loop

Alternative (conic-gradient):
- Use conic-gradient as border-image
- Animate the gradient angle from 0deg to 360deg

ภาษาไทย:
- เพิ่ม effect แสงวิ่งรอบขอบปุ่มเมื่อ hover
- ใช้สี #e72543 พร้อม glow effect
- Animation วนรอบปุ่มแบบ clockwise</textarea>
</div>
</article>

<article className="animate-on-scroll slide-up delay-400 group rounded-2xl card-shine hover-glow" style={{background: 'linear-gradient(145deg, rgba(24, 24, 27, 0.9), rgba(9, 9, 11, 0.95))', border: '1px solid rgba(255,255,255,0.08)'}}>
<div className="p-6 space-y-4">
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-full text-xs uppercase font-semibold tracking-wide" style={{background: 'linear-gradient(135deg, rgba(253,224,71,0.9), rgba(251,191,36,0.9))', color: '#451a03'}}>Visual</span>
<span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#a1a1aa'}}>Glass Effect</span>
</div>
<div>
<h3 className="text-lg font-semibold mb-2" style={{color: '#fafafa'}}>Card – Glassmorphism Effect</h3>
<p className="text-sm leading-relaxed" style={{color: '#a1a1aa'}}>ปรับ Card ให้มี effect แบบ Glassmorphism พร้อม backdrop-blur และ gradient border</p>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Card</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Glass</span>
<span className="px-2 py-0.5 rounded text-xs" style={{background: 'rgba(39,39,42,0.8)', color: '#71717a'}}>Blur</span>
</div>
<div className="flex items-center gap-2 text-xs pt-2" style={{color: '#71717a'}}>
<i className="w-3.5 h-3.5" data-lucide="copy"></i>
<span>Prompt</span>
</div>
<textarea className="w-full rounded-xl p-4 text-xs font-mono resize-y min-h-[140px] focus:outline-none focus:ring-2 transition-all" readonly="" style={{background: 'rgba(0, 0, 0, 0.6)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#e4e4e7', '--tw-ring-color': 'rgba(231,37,67,0.5)'}}>Apply **Glassmorphism** effect to all cards in {{SECTION_NAME}}.

Card Styling:
- Background: rgba(255,255,255,0.03) or rgba(0,0,0,0.4)
- Backdrop-filter: blur(12px) or blur(16px)
- Border: 1px solid rgba(255,255,255,0.08)
- Border-radius: rounded-2xl (16px)

Gradient Border (optional):
- Use a wrapper div with gradient background
- Inner card with solid dark background
- 1px gap creates gradient border effect

Shadow:
- box-shadow: 0 8px 32px rgba(0,0,0,0.3)
- On hover: increase shadow spread

Hover Effect:
- Background opacity: 0.03 → 0.06
- Border opacity: 0.08 → 0.15
- Subtle scale: 1.02x

ภาษาไทย:
- ทำให้ Card เป็น Glassmorphism (พื้นหลังเบลอแบบกระจก)
- เพิ่ม backdrop-blur และ border แบบ gradient
- Hover ให้มี effect เปลี่ยน opacity และ scale เล็กน้อย</textarea>
</div>
</article>
</div>
</section>

<section className="animate-on-scroll fade-in delay-300">
<div className="rounded-2xl p-6 flex items-start gap-4" style={{background: 'rgba(39, 39, 42, 0.3)', border: '1px dashed rgba(255,255,255,0.15)'}}>
<div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{background: 'rgba(251, 191, 36, 0.15)', border: '1px solid rgba(251,191,36,0.3)'}}>
<i className="w-5 h-5" data-lucide="lightbulb" style={{color: '#fcd34d'}}></i>
</div>
<div>
<h4 className="font-semibold mb-2" style={{color: '#fafafa'}}>Tips สำหรับการใช้งาน</h4>
<p className="text-sm leading-relaxed" style={{color: '#a1a1aa'}}>
            คุณสามารถค่อย ๆ เพิ่ม Prompt ใหม่เข้าหน้านี้ แล้วใช้ Aura / Notion เป็น <strong style={{color: '#d4d4d8'}}>"Prompt Hub"</strong> ส่วนตัวของ Rivonix — เวลาจะออกแบบหน้าใหม่ แค่เลือกหมวด (Page / Section / Modular) แล้วคัดลอกไปวางใน <strong style={{color: '#d4d4d8'}}>Aura.build</strong> ได้ทันที ไม่ต้องเขียนใหม่ตั้งแต่ต้น
          </p>
</div>
</div>
</section>
</main>

<footer style={{borderTop: '1px solid rgba(255,255,255,0.06)'}}>
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-xl" style={{background: 'linear-gradient(135deg, #ff9bb1, #e72543 60%, #7a1225)', boxShadow: '0 0 20px rgba(231,37,67,0.4)'}}></div>
<div>
<div className="font-semibold" style={{color: '#fafafa'}}>Rivonix Branding Studio</div>
<div className="text-xs" style={{color: '#71717a'}}>Aura Prompt Library v1.0</div>
</div>
</div>
<p className="text-sm" style={{color: '#71717a'}}>
          © 2025 Rivonix. All rights reserved.
        </p>
</div>
</div>
</footer>


    </>
  );
}
