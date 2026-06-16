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
navy: { 900: '#020610', 800: '#0B1221', 700: '#152035' },
beige: { 50: '#F7F5F0', 100: '#EBE5D9', 300: '#D6C8B0', 500: '#BFA885' },
gold: { 400: '#D4AF37', 500: '#C5A028' }
},
fontFamily: {
sans: ['Cairo', 'IBM Plex Sans Arabic', 'sans-serif'],
},
fontSize: {
xs: '0.875rem',   // Minimum size requested
sm: '1rem',
base: '1.25rem',  // Scaled up
lg: '1.5rem',
xl: '1.75rem',
'2xl': '2.25rem',
'3xl': '3rem',
'4xl': '4rem',
'5xl': '5rem',
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
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



      // Icons
      lucide.createIcons();

      // Custom Cursor
      const cursor = document.getElementById('cursor-ring');
      let mouseX = 0, mouseY = 0;
      let cursorX = 0, cursorY = 0;

      document.addEventListener('mousemove', (e) => {
          mouseX = e.clientX;
          mouseY = e.clientY;
      });

      function animateCursor() {
          cursorX += (mouseX - cursorX) * 0.15;
          cursorY += (mouseY - cursorY) * 0.15;
          cursor.style.left = `${cursorX}px`;
          cursor.style.top = `${cursorY}px`;
          requestAnimationFrame(animateCursor);
      }
      animateCursor();

      // Magnetic Buttons
      const magnetics = document.querySelectorAll('.magnetic-trigger');
      magnetics.forEach(btn => {
          btn.addEventListener('mouseenter', () => {
              cursor.style.width = '60px';
              cursor.style.height = '60px';
              cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              cursor.style.borderColor = 'transparent';
          });
          btn.addEventListener('mouseleave', () => {
              cursor.style.width = '24px';
              cursor.style.height = '24px';
              cursor.style.backgroundColor = 'transparent';
              cursor.style.borderColor = '#D6C8B0';
              gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
          });
          btn.addEventListener('mousemove', (e) => {
              const rect = btn.getBoundingClientRect();
              const x = e.clientX - rect.left - rect.width / 2;
              const y = e.clientY - rect.top - rect.height / 2;
              gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.2 });
          });
      });

      // Background Canvas Animation (Subtle Liquid)
      const canvas = document.getElementById('liquid-bg');
      const ctx = canvas.getContext('2d');
      let width, height;

      function resizeCanvas() {
          width = canvas.width = window.innerWidth;
          height = canvas.height = window.innerHeight;
      }
      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();

      let time = 0;
      function drawLiquid() {
          ctx.clearRect(0, 0, width, height);
          ctx.fillStyle = '#020610';
          ctx.fillRect(0,0,width,height);
          
          // Draw subtle moving gradients
          const gradient = ctx.createRadialGradient(
              width/2 + Math.sin(time)*200, 
              height/2 + Math.cos(time*0.5)*100, 
              0, 
              width/2, 
              height/2, 
              width
          );
          gradient.addColorStop(0, 'rgba(21, 32, 53, 0.4)');
          gradient.addColorStop(1, 'rgba(2, 6, 16, 0)');
          
          ctx.fillStyle = gradient;
          ctx.fillRect(0,0,width,height);

          time += 0.005;
          requestAnimationFrame(drawLiquid);
      }
      drawLiquid();

      // Text Reveal
      const revealElements = document.querySelectorAll('.reveal-text');
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if(entry.isIntersecting) {
                  entry.target.classList.add('active');
              }
          });
      }, { threshold: 0.1 });
      revealElements.forEach(el => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="cursor-ring" style={{left: '1490px', top: '287px', width: '24px', height: '24px', backgroundColor: 'transparent', borderColor: 'rgb(214, 200, 176)'}}></div>

<canvas className="fixed top-0 left-0 w-full h-full -z-10 opacity-40" height="902" id="liquid-bg" width="1920"></canvas>

<nav className="fixed top-0 left-0 w-full z-40 py-8 px-8 lg:px-16 flex items-center justify-between pointer-events-none">

<a className="magnetic-trigger group flex items-center gap-4 pointer-events-auto" href="#" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>
<div className="relative w-14 h-14 transition-transform duration-500 group-hover:scale-105">

<img alt="Muhrah Logo" className="w-full h-full object-contain relative drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/57144639-c0cf-4ed1-afa4-95d99e61caec_320w.png"/>
</div>
<span className="group-hover:text-gold-400 transition-colors duration-300 text-3xl font-bold text-white tracking-tight"></span>
</a>

<div className="hidden md:flex pointer-events-auto gap-8 glass-liquid border-white/5 border rounded-full pt-3 pr-8 pb-3 pl-8 gap-x-8 gap-y-8 items-center">
<a className="text-beige-300/60 hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] text-base font-medium" href="#home">الرئيسية</a>
<a className="text-beige-300/60 hover:text-white text-base font-medium transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" href="#shop">المتجر</a>
<a className="text-beige-300/60 hover:text-white text-base font-medium transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" href="#catalogs">الكتالوجات</a>
<a className="text-beige-300/60 hover:text-white text-base font-medium transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" href="#about">من نحن</a>
</div>

<div className="w-14 hidden lg:block"></div>
</nav>


<section className="min-h-screen flex overflow-hidden pt-20 pr-6 pl-6 relative items-center justify-center" id="home">

<div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-7xl gap-x-16 gap-y-16 items-center">

<div className="order-2 lg:order-1 z-10 text-right relative">
<div className="overflow-hidden text-2xl font-extrabold italic text-[#fffaef] tracking-wider mb-6 blur-none">شركة مهرة الطبية
</div>
<div className="overflow-hidden mb-12 pl-12" style={{}}></div>
<div className="reveal-text delay-200 flex gap-6 items-center justify-start active">
<a className="magnetic-trigger glass-btn px-10 py-5 rounded-xl text-white text-lg font-medium flex items-center gap-4 group" href="#shop" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>
<span className="">استكشف المجموعة</span>
<svg className="lucide lucide-arrow-left w-6 h-6 group-hover:-translate-x-1 transition-transform stroke-2" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</a>
<div className="h-[1px] w-24 bg-gradient-to-r from-white/20 to-transparent"></div>
</div>
</div>

<div className="order-1 lg:order-2 flex justify-center items-center relative perspective-1000">
<div className="aspect-square flex animate-float w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5d28ab36-da90-4e3b-bb07-30987339054d_3840w.png)] max-w-7xl bg-cover relative perspective-dramatic items-center justify-center" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 65%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 65%, transparent)'}}>



</div>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40 mix-blend-screen">
<span className="text-xs uppercase tracking-[0.3em] text-beige-300">تمرير</span>
<div className="w-[1px] h-16 bg-gradient-to-b from-beige-300 to-transparent"></div>
</div>
</section><div className="fixed -translate-y-1/2 z-50 flex flex-col gap-4 glass-liquid rounded-2xl pt-2 pr-2 pb-2 pl-2 top-1/2 left-6 gap-x-4 gap-y-4">

<button className="lang-option active w-12 h-12 rounded-xl flex items-center justify-center cursor-none magnetic-trigger group relative" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>
<span className="filter text-2xl drop-shadow-lg">AR</span>
<span className="absolute right-full mr-4 bg-navy-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">العربية</span>
</button>
<div className="w-8 h-[1px] bg-white/10 mx-auto"></div>

<button className="lang-option w-12 h-12 rounded-xl flex items-center justify-center cursor-none magnetic-trigger group relative hover:bg-white/5" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>
<span className="filter text-2xl drop-shadow-lg">EN</span>
<span className="absolute right-full mr-4 bg-navy-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">English</span>
</button>
</div>

<section className="lg:px-12 z-10 pt-32 pr-6 pb-32 pl-6 relative" id="shop">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/5 pb-8">
<h2 className="text-5xl font-semibold tracking-tight text-white">أرشيف الأدوات</h2>
<span className="text-beige-300/40 font-mono text-sm mt-4 md:mt-0 tracking-widest">SERIES: 2024-X</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[450px]">

<div className="md:col-span-2 relative group rounded-3xl overflow-hidden glass-liquid p-12 flex flex-col justify-between hover:bg-white/5 transition-colors duration-500">
<div className="absolute top-0 left-0 p-8 opacity-40 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-crosshair w-10 h-10 text-white" data-lucide="crosshair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
</div>
<div className="">
<span className="text-beige-300/60 text-sm font-mono tracking-[0.2em] uppercase">سلسلة التيتانيوم</span>
<h3 className="text-4xl text-white mt-3 font-medium tracking-tight">نظام المشرط X1</h3>
</div>
<div className="relative w-full h-48 flex items-center justify-center">

<div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute w-32 h-1 bg-white blur-[2px] translate-x-10 group-hover:translate-x-0 transition-transform duration-700"></div>
</div>
<div className="flex justify-between items-center border-t border-white/5 pt-8">
<span className="text-2xl font-light text-white" style={{}}>420.00 د.إ</span>
<button className="magnetic-trigger w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>
<svg className="lucide lucide-plus w-6 h-6" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>

<div className="relative group rounded-3xl overflow-hidden glass-liquid p-10 flex flex-col justify-between hover:bg-white/5 transition-colors duration-500">
<div className="absolute top-0 left-0 p-8 opacity-40">
<svg className="lucide lucide-scissors w-8 h-8 text-white" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
</div>
<div className="">
<span className="text-beige-300/60 text-sm font-mono tracking-[0.2em] uppercase">ملاقط</span>
<h3 className="text-3xl text-white mt-3 font-medium">مايكرو-جريب 4</h3>
</div>
<div className="flex justify-between items-center pt-6">
<span className="text-xl text-white">185.00 د.إ</span>
<span className="text-xs text-green-400 font-mono border border-green-400/20 px-2 py-1 rounded">متوفر</span>
</div>
</div>
</div>
</div>
</section>

<footer className="z-10 border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-4 mb-8">
</div>
<p className="text-beige-300/40 leading-relaxed text-lg font-light max-w-sm translate-x-16 translate-y-16 scale-90" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 60%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 60%, transparent)'}}>ISO 13485:2016 Certified.</p>
</div>
<div className="">
<h4 className="text-white font-medium mb-8 text-lg">روابط سريعة</h4>
<ul className="space-y-4 text-beige-300/50 font-light">
<li className=""><a className="hover:text-white transition-colors" href="#">الرئيسية</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">المتجر</a></li>
<li><a className="hover:text-white transition-colors" href="#">الكتالوجات</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-8 text-lg">تواصل معنا</h4>
<ul className="space-y-4 text-beige-300/50 font-light">
<li>info@muhrah.com</li>
<li className="">+971 4 000 0000</li>
<li className="">Dubai Design District</li>
</ul>
</div>
</div>
</footer>



    </>
  );
}
