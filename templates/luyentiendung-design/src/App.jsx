import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    (function() {
      const cards = Array.from(document.querySelectorAll('.coach-card'));
      let current = 2;

      function applyPositions() {
        const baseX = window.innerWidth < 640 ? 44 : 72;
        const baseY = window.innerWidth < 640 ? 10 : 14;
        const baseR = 5;

        cards.forEach((card, i) => {
          const offset = i - current;
          const depth = Math.abs(offset);

          if (depth > 2) {
            card.style.opacity = 0;
            card.style.pointerEvents = 'none';
            card.style.transform = 'translate3d(0,0,0) scale(0.9)';
            card.style.zIndex = 0;
            return;
          }

          const translateX = offset * baseX;
          const translateY = depth * baseY + (offset === 0 ? 0 : 6);
          const rotate = offset * -baseR;
          const scale = offset === 0 ? 1 : (depth === 1 ? 0.965 : 0.93);

          card.style.opacity = 1;
          card.style.pointerEvents = offset === 0 ? 'auto' : 'none';
          card.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) rotate(${rotate}deg) scale(${scale})`;
          card.style.transition = 'transform 400ms cubic-bezier(.2,.7,0,1), opacity 300ms ease';
          card.style.zIndex = String(100 - depth);
          card.style.filter = offset === 0 ? 'drop-shadow(0 15px 25px rgba(15,23,42,0.25))' : 'drop-shadow(0 8px 16px rgba(15,23,42,0.12))';
        });
      }

      function next() {
        current = (current + 1) % cards.length;
        applyPositions();
      }
      
      function prev() {
        current = (current - 1 + cards.length) % cards.length;
        applyPositions();
      }

      const nextBtn = document.getElementById('nextBtn');
      const prevBtn = document.getElementById('prevBtn');
      
      if (nextBtn) nextBtn.addEventListener('click', next);
      if (prevBtn) prevBtn.addEventListener('click', prev);
      
      window.addEventListener('resize', applyPositions);

      document.querySelectorAll('.save-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const isSaved = btn.dataset.saved === 'true';
          btn.dataset.saved = !isSaved;
          btn.innerHTML = isSaved
            ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-slate-100"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>'
            : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-emerald-400"><path d="M20 6 9 17l-5-5"></path></svg>';
        });
      });

      applyPositions();
    })();
  


      // Initialize lucide icons
      window.lucide && window.lucide.createIcons();

      const cards = Array.from(document.querySelectorAll('.coach-card'));
      let current = 2; // start centered on the middle card for 5 items

      function applyPositions() {
        const baseX = window.innerWidth < 640 ? 44 : 72; // spacing
        const baseY = window.innerWidth < 640 ? 10 : 14; // stack offset
        const baseR = 5; // rotation degrees

        cards.forEach((card, i) => {
          const offset = i - current;
          const depth = Math.abs(offset);

          if (depth > 2) {
            card.style.opacity = 0;
            card.style.pointerEvents = 'none';
            card.style.transform = 'translate3d(0,0,0) scale(0.9)';
            card.style.zIndex = 0;
            return;
          }

          const translateX = offset * baseX;
          const translateY = depth * baseY + (offset === 0 ? 0 : 6);
          const rotate = offset * -baseR;
          const scale = offset === 0 ? 1 : (depth === 1 ? 0.965 : 0.93);

          card.style.opacity = 1;
          card.style.pointerEvents = offset === 0 ? 'auto' : 'none';
          card.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) rotate(${rotate}deg) scale(${scale})`;
          card.style.transition = 'transform 400ms cubic-bezier(.2,.7,0,1), opacity 300ms ease';
          card.style.zIndex = String(100 - depth);
          card.style.filter = offset === 0 ? 'drop-shadow(0 15px 25px rgba(15,23,42,0.25))' : 'drop-shadow(0 8px 16px rgba(15,23,42,0.12))';
        });
      }

      function next() {
        current = (current + 1) % cards.length;
        applyPositions();
      }
      function prev() {
        current = (current - 1 + cards.length) % cards.length;
        applyPositions();
      }

      document.getElementById('nextBtn').addEventListener('click', next);
      document.getElementById('prevBtn').addEventListener('click', prev);
      window.addEventListener('resize', applyPositions);

      // Save button toggles
      document.querySelectorAll('.save-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const isSaved = btn.dataset.saved === 'true';
          btn.dataset.saved = !isSaved;
          btn.innerHTML = isSaved
            ? '<i data-lucide="plus" class="w-5 h-5 text-slate-900"></i>'
            : '<i data-lucide="check" class="w-5 h-5 text-emerald-600"></i>';
          window.lucide && window.lucide.createIcons();
        });
      });

      // Initial layout
      applyPositions();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="top-0 w-full -z-10 h-[1140px] bg-cover bg-center absolute blur-2xl" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a321d955-bf50-4745-bd6a-5555c9e712e7_3840w.webp")'}}></div>


<div className="fixed -z-10 top-0 right-0 bottom-0 left-0" style={{}}>
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
<div className="-top-40 -right-32 bg-gradient-to-br w-[42rem] h-[42rem] rounded-full absolute blur-3xl from-indigo-800/40 via-fuchsia-800/30 to-cyan-800/30" style={{visibility: 'hidden'}}></div>
<div className="-bottom-32 -left-20 bg-gradient-to-tr w-[32rem] h-[32rem] rounded-full absolute blur-3xl from-sky-800/40 via-violet-800/30 to-rose-800/30" style={{visibility: 'hidden'}}></div>
</div>

<header className="fixed z-40 xl:bg-black/20 bg-black/80 border-white/10 border-b top-0 right-0 left-0 backdrop-blur-lg">
<div className="sm:px-8 max-w-7xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between">
<a className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[130px] h-[20px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f3db1202-96e3-416d-8235-c9d02c748d03_1600w.png)] bg-cover rounded pt-2 pb-2 invert" href="#"></a>
<nav className="hidden md:flex items-center gap-7 text-sm text-slate-400">
<a className="transition-colors hover:text-slate-100" href="#">Services</a>
<a className="transition-colors hover:text-slate-100" href="#">Portfolio</a>
<a className="transition-colors hover:text-slate-100" href="#">Pricing</a>
</nav>
<div className="hidden sm:flex items-center gap-3">
<button className="px-3.5 py-2 rounded-md text-sm text-slate-300 hover:text-slate-100">Log in</button>
<button className="px-3.5 py-2 rounded-md text-sm text-black bg-slate-100 hover:bg-slate-200">Get Started</button>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="sm:px-8 sm:pt-16 text-center max-w-3xl mr-auto ml-auto pt-10 pr-6 pl-6">
<h1 className="sm:text-5xl md:text-6xl md:text-[#ffffff] md:mt-20 text-4xl font-semibold text-slate-100 tracking-tight mt-20">
      Beautiful websites that convert.
    </h1>
</div>

<div className="sm:px-8 sm:mt-16 max-w-5xl mt-16 mr-auto ml-auto pr-6 pl-6 relative">
<div className="sm:h-[600px] h-[520px] relative">

<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center" id="cardStack">

<article className="coach-card sm:w-[420px] aspect-[4/5] overflow-hidden shadow-slate-100/10 bg-slate-900 w-[78%] ring-white/5 ring-1 rounded-2xl absolute shadow-xl" style={{opacity: '1', pointerEvents: 'none', transform: 'translate3d(-144px, 34px, 0px) rotate(10deg) scale(0.93)', zIndex: '98', filter: 'drop-shadow(rgba(15, 23, 42, 0.12) 0px 8px 16px)', transition: 'transform 400ms cubic-bezier(0.2, 0.7, 0, 1), opacity 300ms'}}>
<img alt="E-commerce design preview" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa91f7af-c0ee-487e-9b71-34905a5f7414_1600w.webp" style={{}}/>
<div className="absolute top-4 right-4">
<button className="save-btn transition hover:bg-black bg-black/80 rounded-full pt-2 pr-2.5 pb-2 pl-2.5 shadow-sm backdrop-blur">
<svg className="lucide lucide-plus text-slate-100 w-5 h-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<div className="sm:p-6 bg-gradient-to-t to-transparent from-slate-100/70 via-slate-100/20 pt-5 pr-5 pb-5 pl-5 absolute right-0 bottom-0 left-0">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-tight text-black">E-commerce Platform</h3>
<p className="text-sm sm:text-base mt-1 text-slate-800">Complete online store design</p>
</div>
</article>

<article className="coach-card absolute w-[78%] sm:w-[420px] aspect-[4/5] rounded-2xl shadow-xl overflow-hidden ring-1 bg-slate-900 shadow-slate-100/10 ring-white/5" style={{opacity: '1', pointerEvents: 'none', transform: 'translate3d(-72px, 20px, 0px) rotate(5deg) scale(0.965)', zIndex: '99', filter: 'drop-shadow(rgba(15, 23, 42, 0.12) 0px 8px 16px)', transition: 'transform 400ms cubic-bezier(0.2, 0.7, 0, 1), opacity 300ms'}}>
<img alt="SaaS dashboard design" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5929dfb3-6ba0-482e-8054-7c6b716e45bc_1600w.jpg" style={{}}/>
<div className="absolute top-4 right-4">
<button className="save-btn rounded-full backdrop-blur px-2.5 py-2 shadow-sm transition bg-black/80 hover:bg-black">
<svg className="lucide lucide-plus w-5 h-5 text-slate-100" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 bg-gradient-to-t to-transparent from-slate-100/70 via-slate-100/20">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-tight text-black">SaaS Dashboard</h3>
<p className="text-sm sm:text-base mt-1 text-slate-800">Modern analytics interface</p>
</div>
</article>

<article className="coach-card absolute w-[78%] sm:w-[420px] aspect-[4/5] rounded-2xl shadow-xl overflow-hidden ring-1 bg-slate-900 shadow-slate-100/10 ring-white/5" style={{opacity: '1', pointerEvents: 'auto', transform: 'translate3d(0px, 0px, 0px) rotate(0deg) scale(1)', zIndex: '100', filter: 'drop-shadow(rgba(15, 23, 42, 0.25) 0px 15px 25px)', transition: 'transform 400ms cubic-bezier(0.2, 0.7, 0, 1), opacity 300ms'}}>
<img alt="Landing page design" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce6d7146-78eb-4530-bc2a-2885666e1383_1600w.webp" style={{}}/>
<div className="absolute top-4 right-4">
<button className="save-btn rounded-full backdrop-blur px-2.5 py-2 shadow-sm transition bg-black/80 hover:bg-black">
<svg className="lucide lucide-plus w-5 h-5 text-slate-100" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 bg-gradient-to-t to-transparent from-slate-100/70 via-slate-100/20">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-tight text-black">Landing Pages</h3>
<p className="text-sm sm:text-base mt-1 text-slate-800">High-converting designs</p>
</div>
</article>

<article className="coach-card absolute w-[78%] sm:w-[420px] aspect-[4/5] rounded-2xl shadow-xl overflow-hidden ring-1 bg-slate-900 shadow-slate-100/10 ring-white/5" style={{opacity: '1', pointerEvents: 'none', transform: 'translate3d(72px, 20px, 0px) rotate(-5deg) scale(0.965)', zIndex: '99', filter: 'drop-shadow(rgba(15, 23, 42, 0.12) 0px 8px 16px)', transition: 'transform 400ms cubic-bezier(0.2, 0.7, 0, 1), opacity 300ms'}}>
<img alt="Mobile app design" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c75a3e33-28d5-4996-97d3-cabbf3908ede_1600w.webp" style={{}}/>
<div className="absolute top-4 right-4">
<button className="save-btn rounded-full backdrop-blur px-2.5 py-2 shadow-sm transition bg-black/80 hover:bg-black">
<svg className="lucide lucide-plus w-5 h-5 text-slate-100" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 bg-gradient-to-t to-transparent from-slate-100/70 via-slate-100/20">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-tight text-black">Mobile App UI</h3>
<p className="text-sm sm:text-base mt-1 text-slate-800">Native &amp; responsive experiences</p>
</div>
</article>

<article className="coach-card absolute w-[78%] sm:w-[420px] aspect-[4/5] rounded-2xl shadow-xl overflow-hidden ring-1 bg-slate-900 shadow-slate-100/10 ring-white/5" style={{opacity: '1', pointerEvents: 'none', transform: 'translate3d(144px, 34px, 0px) rotate(-10deg) scale(0.93)', zIndex: '98', filter: 'drop-shadow(rgba(15, 23, 42, 0.12) 0px 8px 16px)', transition: 'transform 400ms cubic-bezier(0.2, 0.7, 0, 1), opacity 300ms'}}>
<img alt="Brand identity design" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c4ba3f45-b7fb-47e5-a442-3c55bd9f9f1c_1600w.webp" style={{}}/>
<div className="absolute top-4 right-4">
<button className="save-btn rounded-full backdrop-blur px-2.5 py-2 shadow-sm transition bg-black/80 hover:bg-black">
<svg className="lucide lucide-plus w-5 h-5 text-slate-100" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 bg-gradient-to-t to-transparent from-slate-100/70 via-slate-100/20">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-tight text-black">Brand Identity</h3>
<p className="text-sm sm:text-base mt-1 text-slate-800">Complete visual systems</p>
</div>
</article>
</div>

<div className="-left-2 sm:-left-8 flex absolute top-0 bottom-0 items-center">
<button className="group relative inline-flex items-center justify-center h-11 w-11 rounded-full shadow-md ring-1 hover:shadow-lg transition bg-black ring-slate-800 hover:ring-slate-700" id="prevBtn">
<svg className="lucide lucide-chevron-left text-slate-100 group-hover:text-slate-50 w-5 h-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
</div>
<div className="absolute inset-y-0 -right-2 sm:-right-8 flex items-center">
<button className="group relative inline-flex items-center justify-center h-11 w-11 rounded-full shadow-md ring-1 hover:shadow-lg transition bg-black ring-slate-800 hover:ring-slate-700" id="nextBtn">
<svg className="lucide lucide-chevron-right text-slate-100 group-hover:text-slate-50 w-5 h-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>

<div className="mt-10 sm:mt-12 flex items-center justify-center gap-4">
<a className="inline-flex items-center gap-2 xl:text-slate-50 text-sm hover:text-slate-100 text-slate-300" href="#">
<svg className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
        Watch our process
      </a>
<span className="h-4 w-px bg-slate-800"></span>
<a className="inline-flex items-center gap-2 xl:text-slate-50/60 text-sm hover:text-indigo-300 text-indigo-400" href="#">
        View full portfolio
        <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

</section><div className="animate-[slideUp_0.6s_ease-out_0.5s_both] xl:ml-auto xl:mr-auto xl:bg-zinc-900 bg-zinc-900 max-w-full border-0 rounded-none mt-4 mr-auto ml-auto pt-8 pr-8 pb-8 pl-8">
<div className="xl:mt-10 text-center mt-20 mb-12">
<h2 className="sm:text-4xl md:text-5xl md:mt-10 text-3xl font-semibold text-slate-100 tracking-tight font-geist mt-10">
      Your success is our priority
    </h2>
<p className="text-base md:text-lg mt-3 max-w-2xl mx-auto font-geist text-slate-400">
      Strategic design solutions backed by proven results and expert craftsmanship
    </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-6">

<div className="overflow-hidden bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/41438a62-3777-4cae-924c-e588db59dba3_1600w.webp)] bg-cover border-slate-800 border rounded-2xl relative">
<div className="sm:h-[560px] sm:p-8 flex flex-col bg-gradient-to-t from-black/80 via-black/40 to-transparent h-[450px] pt-6 pr-6 pb-6 pl-6 relative">
<div className="flex items-center gap-3">
<div className="">
<p className="text-sm font-geist text-slate-300">Our Approach</p>
<p className="text-xs sm:text-sm mt-1 font-geist text-slate-400">Strategic Design Thinking</p>
</div>
</div>
<div className="mt-auto">
<div className="sm:text-4xl text-2xl font-semibold tracking-tight font-geist mb-4 text-slate-100">Design with <span className="text-blue-400">Purpose</span></div>
<div className="flex items-center gap-2 mb-6 text-slate-300">
<div className="flex items-center gap-1">
<div className="h-2 w-2 rounded-full bg-blue-500"></div>
<div className="h-2 w-2 rounded-full bg-blue-600"></div>
<div className="h-2 w-2 rounded-full bg-blue-400"></div>
</div>
<p className="text-sm font-geist">Every pixel has intention</p>
</div>
<div className="flex items-center gap-2 text-xs font-geist text-slate-400">
            Discover our process
            <svg className="lucide lucide-arrow-up-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>

<div className="flex flex-col min-h-[420px] sm:p-6 sm:bg-zinc-800/50 bg-slate-800/50 border-zinc-800 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg justify-between">
<div className="pointer-events-none absolute inset-0 opacity-20" style={{background: 'repeating-radial-gradient(circle at 80% -20%, rgba(59,130,246,0.08) 0 1px, transparent 1px 60px)'}}></div>
<div className="relative">
<p className="text-sm font-geist text-slate-400">Proven Results</p>
<h3 className="mt-2 text-2xl sm:text-3xl font-geist font-light tracking-tight text-slate-100">
<span className="font-semibold text-blue-400">3x</span> faster delivery, <span className="font-semibold text-blue-500">2x</span> better engagement
        </h3>
<p className="mt-8 text-sm font-geist text-slate-400">Our Process</p>
<div className="mt-4 space-y-3">
<div className="flex items-center gap-3 text-sm font-geist text-slate-300">
<span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
            Strategic Discovery &amp; Research
          </div>
<div className="flex items-center gap-3 text-sm font-geist text-slate-300">
<span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
            Collaborative Design Execution
          </div>
<div className="flex items-center gap-3 text-sm font-geist text-slate-300">
<span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
            Data-Driven Optimization
          </div>
</div>
<div className="xl:bg-zinc-800/75 bg-slate-800/50 border-zinc-800 border rounded-xl mt-8 px-5 py-5">
<div className="flex items-center gap-1 mb-3 text-amber-500">
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="mt-3 text-sm font-geist text-slate-300">"DesignStudio transformed our digital presence completely. Their strategic approach and attention to detail elevated our entire brand."</p>
<div className="mt-4 flex items-center gap-3">
<img alt="Michael Torres" className="h-8 w-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/096dab35-ecaf-418f-a932-5b514543b035_320w.jpg"/>
<div className="text-sm">
<p className="font-geist text-slate-200">Michael Torres</p>
<p className="text-xs text-slate-400 font-geist">CEO, Innovation Labs</p>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-rows-2 gap-6 gap-x-6 gap-y-6">

<div className="flex flex-col sm:p-6 sm:bg-zinc-800/50 bg-slate-800/50 border-zinc-800 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg justify-between">
<div className="flex items-center sm:block">
<div className="relative h-28 w-28 sm:mx-auto">
<div className="absolute inset-0 rounded-full bg-blue-500"></div>
<div className="absolute inset-[10px] rounded-full flex items-center justify-center bg-slate-900/80">
<svg className="lucide lucide-shield-check text-blue-500" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>
<div className="ml-5 sm:ml-0 sm:mt-6 text-center">
<h4 className="text-lg font-geist font-medium tracking-tight text-slate-100">100% Satisfaction</h4>
<p className="mt-2 text-sm font-geist text-slate-400">Guaranteed results or your money back. Your success is our commitment.</p>
</div>
</div>
</div>

<div className="flex flex-col sm:p-6 sm:bg-zinc-800/50 bg-slate-800/50 border-zinc-800 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg justify-between">
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="">
<div className="text-2xl font-geist font-medium tracking-tight text-slate-100">150+</div>
<p className="text-xs mt-1 font-geist text-slate-400">Projects delivered</p>
</div>
<div className="">
<div className="text-2xl font-geist font-medium tracking-tight text-slate-100">48h</div>
<p className="text-xs mt-1 font-geist text-slate-400">Average start time</p>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-sm font-geist">
<span className="text-slate-400">Brand Strategy</span>
<span className="text-blue-400">Expert</span>
</div>
<div className="flex items-center justify-between text-sm font-geist">
<span className="text-slate-400">Visual Design</span>
<span className="text-blue-500">Expert</span>
</div>
<div className="flex items-center justify-between text-sm font-geist">
<span className="text-slate-400">Digital Marketing</span>
<span className="text-blue-300">Expert</span>
</div>
</div>
<div className="mt-6 pt-4 border-t border-slate-800">
<div className="flex items-center gap-2 text-xs font-geist text-slate-400">
<svg className="lucide lucide-check text-green-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            DesignStudio Certified Team
          </div>
</div>
</div>
</div>
</div>
</div><section className="sm:pt-24 md:pt-28 md:mx-auto max-w-7xl mr-auto ml-auto pt-24 pb-20 relative">

<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute left-1/2 -translate-x-1/2 -top-16 w-[42rem] h-[42rem] rounded-full bg-gradient-to-b from-indigo-600/15 via-blue-500/10 to-transparent blur-3xl"></div>
</div>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="text-center mb-12">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-100">
        Design services that deliver
      </h2>
<p className="text-base md:text-lg mt-3 max-w-2xl mx-auto text-slate-400">
        Comprehensive solutions from concept to launch, crafted to elevate your brand.
      </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
<div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 1px)', backgroundSize: '14px 14px'}}></div>
<div className="relative flex w-10 h-10 ring-1 ring-white/20 bg-slate-50/5 rounded-full shadow-lg items-center justify-center">
<svg className="w-[20px] h-[20px]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
<h3 className="relative sm:text-3xl text-2xl font-semibold tracking-tight font-manrope mt-5">Web Design</h3>
<p className="relative mt-2 text-white/70 text-sm sm:text-base font-sans">Custom websites that convert visitors into customers with stunning visuals and seamless experiences.</p>

<div className="bg-gradient-to-b from-white/[0.03] to-transparent ring-white/10 ring-1 rounded-2xl mt-6 pt-4 pr-4 pb-4 pl-4 relative">
<div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-600/10 via-indigo-700/10 to-transparent pointer-events-none"></div>

<div className="relative flex items-center justify-between gap-2">
<div className="w-8 h-8 rounded-full bg-white/10 ring-1 ring-white/10 flex items-center justify-center text-white/90">
<svg className="w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
<div className="w-8 h-8 rounded-full bg-white/10 ring-1 ring-white/10 flex items-center justify-center text-white/90">
<svg className="w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
</div>
<div className="w-8 h-8 rounded-full bg-white/10 ring-1 ring-white/10 flex items-center justify-center text-white/90">
<svg className="w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<div className="w-8 h-8 rounded-full bg-white/10 ring-1 ring-white/10 flex items-center justify-center text-white/90">
<svg className="w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
</div>
<div className="w-8 h-8 rounded-full bg-white/10 ring-1 ring-white/10 flex items-center justify-center text-white/90">
<svg className="w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m3 17 2 2 4-4"></path><path d="m3 7 2 2 4-4"></path><path d="M13 6h8"></path><path d="M13 12h8"></path><path d="M13 18h8"></path></svg>
</div>
</div>

<svg className="relative max-w-[320px] opacity-80 mt-6 mr-auto ml-auto w-[320px] h-[24px]" fill="none" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 320 100">
<path d="M20 5 C60 40, 120 40, 160 85" opacity="0.7" stroke="url(#g1)" strokeWidth="1.2"></path>
<path d="M85 5 C110 40, 140 40, 160 85" opacity="0.7" stroke="url(#g1)" strokeWidth="1.2"></path>
<path d="M150 5 C155 40, 160 40, 160 85" opacity="0.7" stroke="url(#g1)" strokeWidth="1.2"></path>
<path d="M235 5 C210 40, 180 40, 160 85" opacity="0.7" stroke="url(#g1)" strokeWidth="1.2"></path>
<path d="M300 5 C260 40, 200 40, 160 85" opacity="0.7" stroke="url(#g1)" strokeWidth="1.2"></path>
<defs>
</defs>
</svg>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
<div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 1px)', backgroundSize: '14px 14px'}}></div>
<div className="relative flex w-10 h-10 ring-1 ring-white/20 bg-slate-50/5 rounded-full shadow-lg items-center justify-center">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<h3 className="relative mt-5 text-2xl sm:text-3xl font-semibold tracking-tight font-manrope">Brand Identity</h3>
<p className="relative mt-2 text-white/70 text-sm sm:text-base font-sans">Complete visual systems that capture your brand essence and resonate with your audience.</p>

<div className="relative mt-6 rounded-2xl p-4 ring-1 ring-white/10 bg-gradient-to-b from-white/[0.03] to-transparent overflow-hidden">
<div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-indigo-600/10 via-blue-700/10 to-transparent pointer-events-none"></div>
<div className="relative grid grid-cols-3 gap-2 text-[11px] sm:text-xs">
<span className="text-white/60 bg-white/5 border-white/10 border rounded-full pt-1 pr-2.5 pb-1 pl-2.5">Logo Design</span>
<span className="text-white/60 bg-white/5 border-white/10 border rounded-full pt-1 pr-2.5 pb-1 pl-2.5">Typography</span>
<span className="text-white/70 bg-white/5 border-white/10 border rounded-full pt-1 pr-2.5 pb-1 pl-2.5">Color System</span>
<span className="text-white/60 bg-white/5 border-white/10 border rounded-full pt-1 pr-2.5 pb-1 pl-2.5">Guidelines</span>
<span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">Assets</span>
<span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">Templates</span>
<span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">Collateral</span>
<span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">Style Guide</span>
<span className="text-white/70 bg-white/5 border-white/10 border rounded-full pt-1 pr-2.5 pb-1 pl-2.5">Strategy</span>
</div>

</div>
</div>

<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
<div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 1px)', backgroundSize: '14px 14px'}}></div>
<div className="relative flex w-10 h-10 ring-1 ring-white/20 bg-slate-50/5 rounded-full shadow-lg items-center justify-center">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="14" y="3"></rect><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path></svg>
</div>
<h3 className="relative mt-5 text-2xl sm:text-3xl font-semibold tracking-tight font-manrope">UX Strategy</h3>
<p className="relative mt-2 text-white/70 text-sm sm:text-base font-sans">User-centered design backed by research and testing for optimal engagement and conversions.</p>

<div className="relative mt-6 rounded-2xl p-4 ring-1 ring-white/10 bg-gradient-to-b from-white/[0.03] to-transparent">
<div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-600/10 via-indigo-700/10 to-transparent pointer-events-none"></div>
<div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-600/30 to-indigo-600/30 border border-white/10 text-xs sm:text-sm text-white shadow-md">
<span className="w-2 h-2 rounded-full bg-white/80 ring-1 ring-white/40"></span>
            User Research
          </div>

<div className="relative mt-4 rounded-xl bg-black/40 ring-1 ring-white/10 px-3 py-3 flex items-center gap-3">
<button className="shrink-0 w-9 h-9 rounded-full bg-gradient-to-b from-blue-500 to-indigo-600 ring-1 ring-white/20 flex items-center justify-center text-white shadow-md">
<svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 18a4 4 0 0 0-8 0"></path><circle className="" cx="12" cy="11" r="3"></circle><rect className="" height="18" rx="2" width="18" x="3" y="4"></rect></svg>
</button>

<div className="flex-1 flex items-end gap-1">
<div className="w-1 bg-blue-400/60 rounded-full h-3"></div>
<div className="w-1 bg-blue-400/70 rounded-full h-6"></div>
<div className="w-1 bg-blue-400/60 rounded-full h-4"></div>
<div className="w-1 bg-blue-400/80 rounded-full h-8"></div>
<div className="w-1 bg-blue-400/50 rounded-full h-3"></div>
<div className="w-1 bg-blue-400/70 rounded-full h-6"></div>
<div className="w-1 bg-blue-400/60 rounded-full h-4"></div>
<div className="w-1 bg-blue-400/80 rounded-full h-7"></div>
<div className="w-1 bg-blue-400/50 rounded-full h-3"></div>
<div className="w-1 bg-blue-400/70 rounded-full h-5"></div>
<div className="w-1 bg-blue-400/60 rounded-full h-4"></div>
<div className="w-1 bg-blue-400/80 rounded-full h-7"></div>
<div className="w-1 bg-blue-400/50 rounded-full h-3"></div>
<div className="w-1 bg-blue-400/70 rounded-full h-6"></div>
<div className="w-1 bg-blue-400/60 rounded-full h-4"></div>
</div>
<div className="shrink-0 w-2.5 h-6 rounded-full bg-gradient-to-b from-blue-500 to-indigo-600"></div>
</div>
</div>
</div>
</div>

<div className="mt-10 sm:mt-12 border-t border-white/10 pt-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="flex items-start gap-3">
<span className="inline-flex w-9 h-9 ring-1 ring-white/15 items-center justify-center bg-white/5 rounded-full">
<svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</span>
<div className="">
<p className="text-sm font-medium text-white/90 font-sans">Conversion Focus</p>
<p className="text-sm text-white/60 mt-1 font-sans">Designs optimized for results.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="inline-flex w-9 h-9 ring-1 ring-white/15 items-center justify-center bg-white/5 rounded-full">
<svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect><path className="" d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
</span>
<div className="">
<p className="text-sm font-medium text-white/90 font-sans">Responsive Design</p>
<p className="text-sm text-white/60 mt-1 font-sans">Perfect on every device.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="inline-flex w-9-center justify-center bg-white/5 rounded-full">
<svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
</span>
<div className="">
<p className="text-sm font-medium text-white/90 font-sans">Fast Turnaround</p>
<p className="text-sm text-white/60 mt-1 font-sans">Launch quickly with quality.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="inline-flex w-9 h-9 ring-1 ring-white/15 items-center justify-center bg-white/5 rounded-full">
<svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</span>
<div>
<p className="text-sm font-medium text-white/90 font-sans">Expert Team</p>
<p className="text-sm text-white/60 mt-1 font-sans">Seasoned design professionals.</p>
</div>
</div>
</div>
</div>
</div>
</section><section className="sm:p-8 sm:bg-zinc-900 border-0 rounded-none pt-6 pr-6 pb-6 pl-6">
<div className="mt-2 xl:text-center xl:mt-10">
<h2 className="sm:text-4xl md:text-5xl text-3xl font-semibold text-slate-100 tracking-tight mt-4">Real results</h2>
<p className="mt-1 text-sm sm:text-base font-normal font-geist text-slate-400">From concept to conversion</p>
</div>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

<article className="flex flex-col min-h-[420px] sm:p-6 sm:bg-zinc-800/50 bg-slate-800/50 border-zinc-800 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg justify-between">
<div className="space-y-5">
<div className="flex gap-2 gap-x-2 gap-y-2 items-end">
<span className="text-5xl sm:text-6xl font-geist font-medium tracking-tighter text-slate-100">150+</span>
</div>
<p className="text-sm font-geist text-slate-300">We've delivered <span className="font-medium font-geist text-slate-100">successful projects</span> across industries with exceptional results and client satisfaction.</p>
<div className="flex items-center gap-3">
<span className="text-sm font-medium font-geist text-slate-100">DesignStudio</span>
</div>
<div className="flex items-center gap-2">
<div className="h-7 w-7 bg-gradient-to-br border rounded-full flex items-center justify-center from-slate-700 to-slate-600 border-slate-600">
<svg className="lucide lucide-palette h-3 w-3 text-slate-300" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<div className="h-7 w-7 bg-gradient-to-br border -ml-2 rounded-full flex items-center justify-center from-slate-700 to-slate-600 border-slate-600">
<svg className="lucide lucide-layout h-3 w-3 text-slate-300" data-lucide="layout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
<div className="h-7 w-7 bg-gradient-to-br border -ml-2 rounded-full flex items-center justify-center from-slate-700 to-slate-600 border-slate-600">
<svg className="lucide lucide-trending-up h-3 w-3 text-slate-300" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="inline-flex items-center justify-center -ml-1 h-7 px-2 rounded-full text-xs font-normal font-geist bg-indigo-500 text-slate-100">150+</span>
</div>
<div className="flex items-center gap-1 text-green-500">
<svg className="lucide lucide-trending-up h-4 w-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-xs font-normal font-geist text-slate-400">99% client satisfaction rate</span>
</div>
</div>
<button className="mt-6 h-11 w-full rounded-full text-sm font-normal transition font-geist bg-indigo-500 text-slate-100 hover:bg-indigo-600">
                        Start your project
                    </button>
</article>

<div className="grid grid-rows-[auto_1fr] gap-4">
<article className="flex xl:bg-zinc-800/50 bg-slate-800/50 border-zinc-800 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-lg items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 flex bg-cover border rounded-md items-center justify-center border-slate-700 bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6931cecd-5f27-498d-90aa-86489df2ef35_320w.webp)]">
</div>
<div className="">
<p className="text-sm font-medium tracking-tight leading-tight font-geist text-slate-100">Sarah Chen</p>
<p className="text-xs font-geist text-slate-400">TechFlow Solutions</p>
</div>
</div>
<span className="text-slate-600">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</article>
<article className="flex flex-col min-h-[420px] sm:p-6 sm:bg-zinc-800/50 bg-slate-800/50 border-zinc-800 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg justify-between">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 text-green-500">
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(34, 197, 94)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(34, 197, 94)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-slate-600">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</div>
<p className="text-2xl sm:text-3xl text-right leading-snug font-geist font-medium tracking-tighter text-slate-100">Our new website increased conversions by 180% in the first month. Absolutely transformative.</p>
</article>
</div>
<div className="grid grid-rows-[1fr_auto] gap-4">
<article className="flex flex-col min-h-[420px] sm:p-6 sm:bg-zinc-800/50 bg-slate-800/50 border-zinc-800 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg justify-between">
<p className="text-2xl sm:text-3xl text-center leading-snug font-geist font-medium tracking-tighter text-slate-100">DesignStudio understood our vision and delivered beyond expectations. True design partners.</p>
<div className="mt-6 flex items-center justify-between">
<div className="flex items-center gap-1 text-green-500">
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-slate-600">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</div>
</article>
<article className="flex xl:bg-zinc-800/50 bg-slate-800/50 border-zinc-800 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-lg items-center justify-between">
<div className="h-9 w-9 flex bg-cover border rounded-md items-center justify-center border-slate-700 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/287ca1e2-ccca-409b-b256-664c7ae20a40_320w.webp)] bg-center">
</div>
<div className="">
<p className="text-sm font-medium tracking-tight leading-tight font-geist text-slate-100">Marcus Johnson</p>
<p className="text-xs font-geist text-slate-400">Innovate Labs</p>
</div>
</article>
</div>
<div className="grid grid-rows-[auto_1fr] gap-4">
<article className="flex xl:bg-zinc-800/50 bg-slate-800/50 border-zinc-800 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-lg items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 flex bg-cover border rounded-md items-center justify-center border-slate-700 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb364025-2387-4977-a5e2-b5466b778b1d_320w.webp)] bg-center">
</div>
<div className="">
<p className="text-sm font-medium tracking-tight leading-tight font-geist text-slate-100">Maya Patel</p>
<p className="text-xs font-geist text-slate-400">CEO, Digital Ventures</p>
</div>
</div>
<span className="text-slate-600">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</article>
<article className="flex flex-col min-h-[420px] sm:p-6 sm:bg-zinc-800/50 bg-slate-800/50 border-zinc-800 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg justify-between">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 text-green-500">
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-slate-600">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</div>
<p className="text-2xl sm:text-3xl text-right leading-snug font-geist font-medium tracking-tighter text-slate-100">Professional, responsive, and delivered ahead of schedule. Best design investment we've made.</p>
</article>
</div>
</div>
</section><section className="sm:px-8 sm:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 relative">
<div className="sm:mb-16 text-center mb-12">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mt-4 text-slate-100">
      Choose your plan
    </h2>
<p className="text-base md:text-lg mt-3 max-w-2xl mx-auto text-slate-400">
      Transparent pricing that scales with your needs. No hidden fees, no surprises.
    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">

<article className="relative flex flex-col rounded-2xl border p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow border-slate-800 bg-black">
<div className="flex-1">
<h3 className="text-lg font-semibold text-slate-100">Starter</h3>
<p className="text-sm mt-1 text-slate-400">Perfect for small projects</p>
<div className="mt-6 flex items-baseline gap-2">
<span className="text-4xl font-semibold tracking-tight text-slate-100">$2,500</span>
<span className="text-slate-400">per project</span>
</div>
<ul className="mt-8 space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-400">
<svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-indigo-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Up to 5 pages</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-indigo-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Responsive design</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-indigo-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">2 revision rounds</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-indigo-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">1 week delivery</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-indigo-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Email support</span>
</li>
</ul>
</div>
<button className="mt-8 w-full h-11 rounded-lg border text-sm font-medium transition border-slate-700 bg-black text-slate-100 hover:bg-slate-950">
        Get Started
      </button>
</article>

<article className="relative flex flex-col rounded-2xl border-2 p-6 sm:p-8 shadow-lg border-indigo-400 bg-black">
<div className="absolute -top-4 left-1/2 -translate-x-1/2">
<span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium bg-indigo-400 text-black">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
          Most Popular
        </span>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold text-slate-100">Professional</h3>
<p className="text-sm mt-1 text-slate-400">For growing businesses</p>
<div className="mt-6 flex items-baseline gap-2">
<span className="text-4xl font-semibold tracking-tight text-slate-100">$5,500</span>
<span className="text-slate-400">per project</span>
</div>
<ul className="mt-8 space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-400">
<svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-indigo-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Up to 15 pages</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-indigo-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Advanced interactions</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-indigo-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Unlimited revisions</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-indigo-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">2 week delivery</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-indigo-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">CMS integration</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-indigo-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Priority support</span>
</li>
</ul>
</div>
<button className="mt-8 w-full h-11 rounded-lg text-sm font-medium transition shadow-sm bg-indigo-400 text-black hover:bg-indigo-300">
        Get Started
      </button>
</article>

<article className="relative flex flex-col rounded-2xl border p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow border-slate-800 bg-black">
<div className="flex-1">
<h3 className="text-lg font-semibold text-slate-100">Enterprise</h3>
<p className="text-sm mt-1 text-slate-400">Custom solutions</p>
<div className="mt-6 flex items-baseline gap-2">
<span className="text-4xl font-semibold tracking-tight text-slate-100">Custom</span>
</div>
<ul className="mt-8 space-y-3">
<li className="flex items-start gap-3http://www.w3.org/2000/svg" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24"><path d="M20 6 9 17l-5-5"></path>
<span>Unlimited pages</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-indigo-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Custom features</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-indigo-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Dedicated team</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-indigo-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Flexible timeline</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-indigo-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>API integrations</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-indigo-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>24/7 support</span>
</li>
</ul>
</div>
<button className="mt-8 w-full h-11 rounded-lg border text-sm font-medium transition border-slate-700 bg-black text-slate-100 hover:bg-slate-950">
        Contact Sales
      </button>
</article>
</div>
<div className="mt-12 text-center">
<p className="text-sm text-slate-400">
      All plans include source files and 30 days of post-launch support
    </p>
</div>
</section><section className="sm:px-8 sm:py-24 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f52e2f1-d904-420f-82c5-91ee43087973_3840w.webp)] max-w-full bg-cover mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 relative">
<div className="text-center mb-12 sm:mb-16">
<h2 className="text-3xl font-semibold tracking-tight mt-4 sm:text-4xl md:text-5xl md:text-[#ffffff] text-slate-100">
      Frequently asked questions
    </h2>
<p className="text-base md:text-lg mt-3 max-w-2xl mx-auto text-slate-400">
      Everything you need to know about our design services and process.
    </p>
</div>
<div className="max-w-3xl mr-auto ml-auto space-y-4">

<details className="group overflow-hidden transition-colors xl:bg-[#ffffff]/20 border rounded-xl backdrop-blur-xl hover:border-slate-700 bg-black border-slate-800/10">
<summary className="flex cursor-pointer sm:p-7 list-none pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<h3 className="text-base font-medium pr-4 sm:text-lg sm:text-[#ffffff]/60 text-slate-100">What's your typical project timeline?</h3>
<svg className="flex-shrink-0 group-open:rotate-180 transition-transform w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(71, 85, 105)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-0">
<p className="text-sm sm:text-base leading-relaxed text-slate-400">
          Project timelines vary based on scope. A typical landing page takes 1-2 weeks, while a full website with multiple pages can take 3-6 weeks. We'll provide a detailed timeline during our initial consultation and keep you updated throughout the process.
        </p>
</div>
</details>

<details className="group overflow-hidden transition-colors xl:bg-[#ffffff]/20 border rounded-xl backdrop-blur-xl hover:border-slate-700 bg-black border-slate-800/10">
<summary className="flex cursor-pointer sm:p-7 list-none pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<h3 className="sm:text-lg sm:text-[#ffffff]/60 text-base font-medium pr-4 text-slate-100">Do you offer ongoing support after launch?</h3>
<svg className="flex-shrink-0 group-open:rotate-180 transition-transform w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(148, 163, 184)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-0">
<p className="text-sm sm:text-base leading-relaxed text-slate-400">
          Yes! All our plans include 30 days of post-launch support. After that, we offer monthly maintenance packages or hourly support options to ensure your website stays updated and performs optimally.
        </p>
</div>
</details>

<details className="group overflow-hidden transition-colors xl:bg-[#ffffff]/20 border rounded-xl backdrop-blur-xl hover:border-slate-700 bg-black border-slate-800/10">
<summary className="flex cursor-pointer sm:p-7 list-none pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<h3 className="sm:text-lg sm:text-[#ffffff]/60 text-base font-medium pr-4 text-slate-100">What platforms do you design for?</h3>
<svg className="flex-shrink-0 group-open:rotate-180 transition-transform w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" stroke-linecoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(71, 85, 105)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-0">
<p className="text-sm sm:text-base leading-relaxed text-slate-400">
          We specialize in custom websites, Webflow, WordPress, and Shopify. Our designs are responsive and work seamlessly across all devices. We can also integrate with popular tools like HubSpot, Mailchimp, and various CMS platforms.
        </p>
</div>
</details>

<details className="group overflow-hidden transition-colors xl:bg-[#ffffff]/20 border rounded-xl backdrop-blur-xl hover:border-slate-700 bg-black border-slate-800/10">
<summary className="flex cursor-pointer sm:p-7 list-none pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<h3 className="sm:text-lg sm:text-[#ffffff]/60 text-base font-medium pr-4 text-slate-100">How does the revision process work?</h3>
<svg className="w-5 h-5 flex-shrink-0 group-open:rotate-180 transition-transform text-slate-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-0">
<p className="text-sm sm:text-base leading-relaxed text-slate-400">
          We present designs at key milestones and gather your feedback. The number of revision rounds depends on your plan - from 2 rounds in the Starter plan to unlimited revisions in Professional and Enterprise. We work closely with you to ensure the final design exceeds expectations.
        </p>
</div>
</details>

<details className="group overflow-hidden transition-colors xl:bg-[#ffffff]/20 border rounded-xl backdrop-blur-xl hover:border-slate-700 bg-black border-slate-800/10">
<summary className="flex cursor-pointer sm:p-7 list-none pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<h3 className="sm:text-lg sm:text-[#ffffff]/60 text-base font-medium pr-4 text-slate-100">What do I need to provide to get started?</h3>
<svg className="flex-shrink-0 group-open:rotate-180 transition-transform w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(148, 163, 184)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-0">
<p className="text-sm sm:text-base leading-relaxed text-slate-400">
          To begin, we'll need your brand assets (logo, colors, fonts), content (text and images), and a clear understanding of your goals. Don't have everything ready? No problem - we can help with content creation, photography recommendations, and brand development.
        </p>
</div>
</details>

<details className="group overflow-hidden transition-colors xl:bg-[#ffffff]/20 border rounded-xl backdrop-blur-xl hover:border-slate-700 bg-black border-slate-800/10">
<summary className="flex cursor-pointer sm:p-7 list-none pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<h3 className="sm:text-lg sm:text-[#ffffff]/60 text-base font-medium text-slate-100 pr-4">Can you help with SEO and performance?</h3>
<svg className="flex-shrink-0 group-open:rotate-180 transition-transform w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(148, 163, 184)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9 6 6 6-6"></path></svg></summary></details></div></section>

<footer className="xl:mt-0 border-slate-800 border-t mt-0">
<div className="sm:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

<div className="space-y-4">
<a className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[130px] h-[20px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f3db1202-96e3-416d-8235-c9d02c748d03_1600w.png)] bg-cover rounded pt-2 pb-2 invert" href="#"></a>
<p className="text-sm text-slate-400 leading-relaxed">
              Design with purpose. Build with precision. Creating exceptional digital experiences that drive results.
            </p>
<div className="flex items-center gap-3 pt-2">
<a className="w-9 h-9 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-slate-400 hover:text-slate-100 hover:bg-white/10 transition" href="#">
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
</a>
<a className="w-9 h-9 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-slate-400 hover:text-slate-100 hover:bg-white/10 transition" href="#">
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>
</a>
<a className="w-9 h-9 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-slate-400 hover:text-slate-100 hover:bg-white/10 transition" href="#">
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path></svg>
</a>
<a className="w-9 h-9 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-slate-400 hover:text-slate-100 hover:bg-white/10 transition" href="#">
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
</a>
</div>
</div>

<div className="space-y-4">
<h3 className="text-sm font-semibold text-slate-100 uppercase tracking-wider">Services</h3>
<ul className="space-y-3">
<li className=""><a className="text-sm text-slate-400 hover:text-slate-100 transition" href="#">Web Design</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-slate-100 transition" href="#">Brand Identity</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-slate-100 transition" href="#">UX Strategy</a></li>
<li><a className="text-sm text-slate-400 hover:text-slate-100 transition" href="#">Mobile Design</a></li>
<li><a className="text-sm text-slate-400 hover:text-slate-100 transition" href="#">E-commerce</a></li>
</ul>
</div>

<div className="space-y-4">
<h3 className="text-sm font-semibold text-slate-100 uppercase tracking-wider">Company</h3>
<ul className="space-y-3">
<li><a className="text-sm text-slate-400 hover:text-slate-100 transition" href="#">About Us</a></li>
<li><a className="text-sm text-slate-400 hover:text-slate-100 transition" href="#">Portfolio</a></li>
<li><a className="text-sm text-slate-400 hover:text-slate-100 transition" href="#">Case Studies</a></li>
<li><a className="text-sm text-slate-400 hover:text-slate-100 transition" href="#">Careers</a></li>
<li><a className="text-sm text-slate-400 hover:text-slate-100 transition" href="#">Contact</a></li>
</ul>
</div>

<div className="space-y-4">
<h3 className="text-sm font-semibold text-slate-100 uppercase tracking-wider">Get In Touch</h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-slate-400">
<svg className="flex-shrink-0 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>123 Design StreetSan Francisco, CA 94102</span>
</li>
<li className="flex items-center gap-2 text-sm text-slate-400">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
<a className="hover:text-slate-100 transition" href="tel:+1234567890">(415) 555-0123</a>
</li>
<li className="flex items-center gap-2 text-sm text-slate-400">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
<a className="hover:text-slate-100 transition" href="mailto:hello@designstudio.com">hello@designstudio.com</a>
</li>
</ul>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-slate-800 gap-4">
<div className="text-sm text-slate-400">
            © 2025 DesignStudio. All rights reserved.
          </div>
<div className="flex items-center gap-6 text-sm">
<a className="text-slate-400 hover:text-slate-100 transition" href="#">Privacy Policy</a>
<a className="text-slate-400 hover:text-slate-100 transition" href="#">Terms of Service</a>
<a className="text-slate-400 hover:text-slate-100 transition" href="#">Cookie Policy</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
