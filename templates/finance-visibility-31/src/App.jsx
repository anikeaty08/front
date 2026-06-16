import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


      (function () {
      const container = document.currentScript.parentElement;
      const steps = Array.from(container.querySelectorAll('.step'));
      const img = container.querySelector('#stage-image');
      const intervalTime = 8000; // זמן מעבר 8 שניות
      let current = 0;
      let interval;

      function setActive(step) {
        steps.forEach(s => {
          const isActive = s === step;
          s.setAttribute('aria-selected', isActive ? 'true' : 'false');
          s.style.background = 'transparent';
          s.style.boxShadow = 'none';

          const bar = s.querySelector('.progress-bar');
          bar.style.transition = 'none';
          bar.style.width = '0%';
          if (isActive) {
            requestAnimationFrame(() => {
              bar.style.transition = `width ${intervalTime}ms ease-in-out`;
              bar.style.width = '100%';
            });
          }
        });
      }

      function updateImage(src, altText) {
        if (!img || !src) return;
        img.classList.add('opacity-0');
        const preload = new Image();
        preload.onload = () => {
          img.src = src;
          if (altText) img.alt = altText;
          requestAnimationFrame(() => img.classList.remove('opacity-0'));
        };
        preload.src = src;
      }

      function labelFor(step) {
        const title = step.querySelector('p');
        return title ? `${title.textContent.trim()} stage image` : 'Stage image';
      }

      function activateStep(index) {
        const step = steps[index];
        if (!step) return;
        setActive(step);
        const src = step.getAttribute('data-image');
        updateImage(src, labelFor(step));
      }

      function startAutoCycle() {
        clearInterval(interval);
        interval = setInterval(() => {
          current = (current + 1) % steps.length;
          activateStep(current);
        }, intervalTime);
      }

      steps.forEach((step, index) => {
        step.addEventListener('click', () => {
          current = index;
          activateStep(index);
          startAutoCycle();
        });
      });

      activateStep(0);
      startAutoCycle();
    })();
    


    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
  


    (function () {
    function initDynamicWord() {
      const words = ['engagement', 'momentum', 'loyalty'];
      const span = document.getElementById('dynamic-word');
      if (!span) return;

      let index = 0;
      function changeWord() {
        span.style.opacity = 0;
        setTimeout(() => {
          index = (index + 1) % words.length;
          span.textContent = words[index];
          span.style.opacity = 1;
        }, 300);
      }

      setInterval(changeWord, 3000);
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initDynamicWord);
    } else {
      initDynamicWord();
    }
  })();
  


    document.addEventListener('DOMContentLoaded', function () {
      // Initialize Lucide icons for any placeholders
      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }

      // Mobile navigation toggle
      const mobileToggle = document.getElementById('mobileToggle');
      const mobileMenu = document.getElementById('mobileMenu');
      const iconMenu = document.getElementById('iconMenu');
      const iconClose = document.getElementById('iconClose');

      if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
          const expanded = !mobileMenu.classList.contains('hidden');
          mobileToggle.setAttribute('aria-expanded', String(expanded));
          if (iconMenu && iconClose) {
            iconMenu.classList.toggle('hidden', expanded);
            iconClose.classList.toggle('hidden', !expanded);
          }
        });
      }

      // Simple horizontal slider controls
      const aiCards = document.getElementById('aiCards');
      const aiNext = document.getElementById('aiNext');
      const aiPrev = document.getElementById('aiPrev');

      function stepAmount() {
        const first = aiCards?.querySelector('article');
        const styles = aiCards ? getComputedStyle(aiCards) : null;
        const gap = styles ? parseInt(styles.columnGap || styles.gap || '16', 10) : 16;
        return (first ? first.getBoundingClientRect().width : aiCards.clientWidth * 0.8) + gap;
      }

      function updateArrows() {
        if (!aiCards || !aiPrev) return;
        const atStart = aiCards.scrollLeft <= 2;
        aiPrev.style.opacity = atStart ? '0.5' : '1';
        aiPrev.classList.toggle('cursor-not-allowed', atStart);
        aiPrev.disabled = atStart;
      }

      if (aiCards && aiNext) {
        aiNext.addEventListener('click', () => {
          aiCards.scrollBy({ left: stepAmount(), behavior: 'smooth' });
        });
        if (aiPrev) {
          aiPrev.addEventListener('click', () => {
            aiCards.scrollBy({ left: -stepAmount(), behavior: 'smooth' });
          });
        }
        aiCards.addEventListener('scroll', updateArrows, { passive: true });
        updateArrows();
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<style className="">
    @keyframes fadeSlideIn { 0% { opacity: 0; transform: translateY(30px); filter: blur(8px); } 100% { opacity: 1; transform: translateY(0); filter: blur(0px); } }
  </style>

<div className="aura-background-component top-0 w-full -z-10 h-screen absolute" style={{}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full" style={{}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="yACzULFKkgXAmEcep6hu"></div>

</div>
</div>

<header className="z-20 border-gray-100 border-b relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex sm:py-6 pt-4 pb-4 items-center justify-between">

<div className="flex items-center gap-3">
<a className="inline-flex items-center justify-center bg-center bg-left text-left w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fd13a2f6-45be-4ff7-92b5-e90889bf383b_320w.png)] bg-contain bg-no-repeat" href="#">
</a>
<span className="sr-only font-geist">Finance</span>
</div>

<nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-gray-600">
<a className="hover:text-gray-900 transition-colors font-geist" href="#">Overview</a>
<a className="hover:text-gray-900 transition-colors font-geist" href="#">Product</a>
<a className="hover:text-gray-900 transition-colors font-geist" href="#">Pricing</a>
<a className="hover:text-gray-900 transition-colors font-geist" href="#">Docs</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center rounded-full bg-gray-900 px-3 sm:px-4 py-2 text-sm font-medium text-white shadow-lg shadow-gray-900/20 hover:bg-black transition-colors font-geist" href="#">Get Started</a>

<button aria-controls="mobileMenu" aria-expanded="false" className="md:hidden inline-flex items-center rounded-lg border border-gray-200 bg-white px-2.5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900/10" id="mobileToggle">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" id="iconMenu" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
<svg className="lucide lucide-x h-5 w-5 hidden" data-lucide="x" fill="none" height="24" id="iconClose" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="sr-only font-geist">Toggle navigation</span>
</button>
</div>
</div>
</div>

<div className="md:hidden hidden" id="mobileMenu">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="border-t border-gray-100"></div>
<div className="py-3 space-y-1 divide-y divide-gray-100 border-b border-gray-100">
<a className="block px-2 py-3 text-sm text-gray-700 hover:text-gray-900 font-geist" href="#">Overview</a>
<a className="block px-2 py-3 text-sm text-gray-700 hover:text-gray-900 font-geist" href="#">Product</a>
<a className="block px-2 py-3 text-sm text-gray-700 hover:text-gray-900 font-geist" href="#">Pricing</a>
<a className="block px-2 py-3 text-sm text-gray-700 hover:text-gray-900 font-geist" href="#">Docs</a>
<div className="pt-3">
<a className="inline-flex w-full items-center justify-center rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-gray-900/20 hover:bg-black transition-colors font-geist" href="#">Get Started</a>
</div>
</div>
</div>
</div>
</header>

<main className="border-0 ring-0 relative">
<div className="sm:px-6 lg:px-8 sm:pt-24 lg:pt-32 sm:pb-24 lg:pb-32 xl:pt-40 xl:pb-40 xl:pl-0 xl:pr-0 max-w-7xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4">
<div className="grid grid-cols-1 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 gap-x-8 gap-y-8 items-center">

<section className="order-1 relative">
<h1 className="sm:mt-6 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-[0.95] text-4xl tracking-tight font-manrope text-center max-w-4xl mt-6 mr-auto ml-auto" style={{animation: '1s ease-out 0.2s 1 normal both running fadeSlideIn'}}>
          Activate Every Ambassador. Amplify Every Campaign.
        </h1>
<p className="sm:mt-6 sm:text-lg lg:text-base xl:text-lg lg:max-w-none text-base text-gray-600 font-geist text-center max-w-xl mt-6" style={{animation: 'fadeSlideIn 1s ease-out 0.2s both'}}>
          All-in-one platform to manage, train, and track ambassadors effortlessly.
        </p>
</section>

<section className="order-2 text-center relative" style={{animation: '1s ease-out 0.6s 1 normal both running fadeSlideIn'}}>
<div className="-inset-6 sm:-inset-10 pointer-events-none text-center absolute"></div>
<section className="order-2 text-center relative flex justify-center" style={{animation: '1s ease-out 0.6s 1 normal both running fadeSlideIn'}}>
<div className="-inset-6 sm:-inset-10 pointer-events-none text-center absolute"></div>
<div className="flex sm:max-w-sm sm:rounded-3xl sm:p-0 z-10 ring-0 rounded-none mr-auto ml-auto pt-0 pb-0 relative shadow backdrop-blur-md items-center justify-center">
<img alt="During stage image" className="h-auto max-w-full object-contain rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/476b7af6-e04a-41a3-94ff-c86d971bef1b_1600w.png"/>
</div>
</section>
</section>
</div>
</div>
<div className="sm:px-6 lg:px-8 xl:pl-0 xl:pr-0 max-w-7xl mr-auto ml-auto pt-8 pr-0 pb-8 pl-0">
<div className="text-center w-full">
<h2 className="sm:mt-6 sm:text-5xl md:text-6xl md:mt-0 text-3xl font-normal text-gray-900 tracking-tight font-manrope mt-6" id="journey-heading" style={{animation: '1s ease-out 0.2s 1 normal both running fadeSlideIn'}}>
      One engine. The whole journey.
    </h2>
</div>
</div>
</main>
<section aria-labelledby="dark-how-it-works" className="">

<div className="pointer-events-none border-0 ring-0 absolute top-0 right-0 bottom-0 left-0">
<div className="absolute -left-1/4 top-10 h-[900px] w-[900px] rounded-full bg-indigo-500/10 blur-3xl"></div>
<div className="absolute -right-1/3 bottom-0 h-[1200px] w-[1200px] rounded-full bg-fuchsia-500/10 blur-3xl"></div>
<div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(255,255,255,0.06),transparent_60%)]"></div>
</div>

<div className="w-full">

<div className="grid grid-cols-1 sm:px-12 lg:grid-cols-2 lg:gap-16 lg:pl-0 lg:pr-0 max-w-[1280px] mr-auto ml-auto gap-x-10 gap-y-0 items-start">

<div className="flex transition-all duration-1000 ease-in-out order-1 relative items-center justify-center" style={{animation: '2s ease-out 0.2s 1 normal both running fadeSlideIn'}}>
<div className="overflow-hidden rounded-2xl relative shadow-lg">
<img alt="Before stage image" className="aspect-video md:aspect-auto transition-opacity duration-1500 opacity-100 w-full h-full object-cover opacity-0" id="stage-image" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/08157077-5ad0-4967-b099-949b54ebd558_1600w.png"/>
</div>
</div>

<div aria-live="polite" className="order-2" style={{animation: '1s ease-out 0.1s 1 normal both running fadeSlideIn'}}>

<div aria-label="Journey stages" className="sm:space-y-10 mt-8 px-4 space-y-15" id="steps" role="tablist">
<div aria-selected="true" className="step cursor-pointer border-0 ring-0 rounded-none mt-0 mr-0 mb-0 ml-0 pt-0 pr-0 pb-2 pl-0 relative" data-image="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/08157077-5ad0-4967-b099-949b54ebd558_1600w.png" role="tab" style={{background: 'transparent', boxShadow: 'none'}} tabindex="0">
<div className="progress-bar absolute left-0 h-1 bg-slate-300 w-0 rounded-full" style={{bottom: '0px', marginTop: '20px', transition: 'none', width: '0%'}}></div>
<p className="sm:text-3xl text-2xl text-gray-900 tracking-tight font-manrope mt-0 mb-4">Before</p>
<p className="sm:text-base text-sm text-gray-700 font-geist mt-1 mb-4" style={{}}>Filter and organize your contacts before the campaign even begins—be fully prepared.</p>
</div>
<div aria-selected="false" className="step cursor-pointer border-0 ring-0 rounded-none pt-0 pr-0 pb-2 pl-0 relative" data-image="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e14f3226-d661-41f5-8780-96c03c63e5af_3840w.png" role="tab" style={{background: 'transparent', boxShadow: 'none'}} tabindex="0">
<div className="progress-bar bg-slate-800 w-0 h-1 rounded-full absolute left-0" style={{bottom: '0px', marginTop: '20px', transition: 'none', width: '0%'}}></div>
<p className="sm:text-3xl text-2xl text-gray-900 tracking-tight font-manrope mb-4">During</p>
<p className="sm:text-base text-sm text-gray-700 font-geist mt-1 mb-4" style={{}}>Manage your outreach with all
              the
              tools at your fingertips—calls, WhatsApp, emails, templates, and gamified motivation.</p>
</div>
<div aria-selected="false" className="step cursor-pointer border-0 rounded-none ring-0 pt-0 pr-0 pb-2 pl-0 relative" data-image="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0a80f138-b498-462b-9307-ffa025628596_3840w.png" role="tab" style={{background: 'transparent', boxShadow: 'none'}} tabindex="0">
<div className="progress-bar absolute left-0 h-1 bg-slate-800 w-0 rounded-full" style={{bottom: '0px', marginTop: '20px', transition: 'none', width: '0%'}}></div>
<p className="sm:text-3xl text-2xl text-gray-900 tracking-tight font-manrope mb-4">After</p>
<p className="sm:text-base text-sm text-gray-700 font-geist mt-1 mb-4">
              Send personalized thank-you messages to donors and maintain meaningful connections long after the campaign
              ends.
            </p>
</div>
</div>
</div>
</div>


</div>
</section><section aria-labelledby="ai-section" className="overflow-hidden border-black/5 border-t px-0 relative">

<div className="pointer-events-none absolute inset-0">
<div className="absolute -right-1/4 top-24 h-[900px] w-[900px] rounded-full border border-white/10"></div>
<div className="absolute -right-1/3 top-64 h-[1200px] w-[1200px] rounded-full border border-white/5"></div>
</div>
<div className="sm:px-6 sm:py-24 lg:pl-0 lg:pr-0 lg:pb-0 max-w-7xl mr-auto ml-auto pt-0 pr-4 pb-8 pl-4 relative">
<div className="flex gap-6 gap-x-6 gap-y-6 items-start justify-between">
<div className="w-full">
<h2 className="sm:mt-4 sm:text-5xl md:text-6xl md:mt-0 text-3xl tracking-tight font-manrope text-center mt-4 mb-10" id="ai-section" style={{animation: 'fadeSlideIn 1s ease-out 0.2s both'}}>
    All an Ambassador Needs
    <span className="block text-gray-600">in One Place</span>
</h2>
</div>

</div>


</div>
<title className="" style={{display: 'none'}}>Insert — Feature Grid</title>


<section aria-labelledby="features" className="sm:px-6 lg:pl-0 lg:pr-0 lg:pt-0 lg:pb-0 z-10 max-w-7xl mt-0 mr-auto ml-auto pt-8 pr-4 pb-8 pl-4 relative">
<div className="flex flex-col w-full gap-x-8 gap-y-8" style={{animation: '1s ease-out 0.15s 1 normal both running fadeSlideIn'}}>

<div className="group overflow-hidden flex flex-col md:flex-row bg-white border-gray-100 border ring-black/5 ring-1 rounded-2xl relative" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
<div className="md:w-1/2 relative">
<img alt="Smart Leads Board" className="aspect-video md:aspect-auto w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0a80f138-b498-462b-9307-ffa025628596_3840w.png"/>
<div className="pointer-events-none bg-gradient-to-t from-black/15 via-black/0 to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<div className="md:w-1/2 sm:p-8 flex flex-col pt-6 pr-6 pb-6 pl-6 justify-center" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
<h3 className="sm:text-3xl text-2xl font-medium tracking-tight font-manrope">Smart Leads Board</h3>
<p className="mt-3 text-sm sm:text-base text-gray-600 font-geist">
            View all your contacts from your phone in a highly organized way, with tabs for open leads,
            in-process, closed, donated, or irrelevant contacts, making it easy for the ambassador to track progress at
            a
            glance.
          </p>
</div>
</div>
<div className="group overflow-hidden flex flex-col md:flex-row bg-white border-gray-100 border ring-black/5 ring-1 rounded-2xl relative">
<div className="md:w-1/2 relative">
<img alt="Smart Leads Board" className="aspect-video md:aspect-auto w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f69fffce-0272-4e67-ba56-7adaccfba6ae_1600w.png"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-black/0 to-transparent">
</div>
</div>
<div className="md:w-1/2 sm:p-8 flex flex-col pt-6 pr-6 pb-6 pl-6 justify-center">
<h3 className="sm:text-3xl text-2xl font-medium tracking-tight font-manrope">Advanced Contact List </h3>
<p className="sm:text-base text-sm text-gray-600 font-geist mt-3">Ambassadors can reach out directly to their own
            contacts using calls, WhatsApp, or email, with ready-made templates and one-click actions that make
            communication simple and efficient.</p>
</div>
</div>
<div className="group overflow-hidden flex flex-col md:flex-row bg-white border-gray-100 border ring-black/5 ring-1 rounded-2xl relative">
<div className="md:w-1/2 relative">
<img alt="Smart Leads Board" className="aspect-video md:aspect-auto bg-center w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f1c1136b-55e0-430c-a5fe-b8188cca8ed2_1600w.png"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-black/0 to-transparent">
</div>
</div>
<div className="md:w-1/2 sm:p-8 flex flex-col pt-6 pr-6 pb-6 pl-6 justify-center">
<h3 className="sm:text-3xl text-2xl font-medium tracking-tight font-manrope" style={{}}>Campaign Dashboard</h3>
<p className="sm:text-base text-sm text-gray-600 font-geist mt-3">Ambassadors can monitor their own campaign
      progress
      in real time, seeing how much they’ve contributed, how close they are to their goals, and track their
      personal
      achievements visually and intuitively.</p>
</div>
</div>



</div>
</section>

<style className="">
    #aiCards::-webkit-scrollbar {
      display: none;
    }
  </style>
</section>
<section aria-labelledby="mobile-app" className="overflow-hidden border-black/5 border-t relative">


<div className="sm:px-6 sm:py-24 lg:pl-0 lg:pr-0 lg:pb-0 max-w-[1280px] mr-auto ml-auto pt-8 pr-0 pb-0 pl-0 relative">
<div className="grid grid-cols-1 lg:grid-cols-1 gap-10 lg:gap-16 w-full gap-x-10 gap-y-10 items-center">

<div className="flex flex-col w-full" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
<h2 className="sm:mt-0 sm:text-5xl md:text-6xl md:mb-8 text-3xl text-[#000000] tracking-tight font-manrope text-center mt-0 mb-8" id="mobile-app">
  More <span className="text-gray-500" id="dynamic-word" style={{opacity: '1'}}>momentum</span>
</h2>



</div>

</div>
</div>

<style className="">
    #dynamic-word {
      transition: opacity 0.3s ease-in-out;
    }
  </style>
</section><div className="bg-gray-50 w-full pt-8 pr-4 pb-8 pl-4">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[1280px] mr-auto ml-auto">

<div className="overflow-hidden flex flex-col bg-white border-gray-100 border rounded-2xl">
<img alt="Smart Leads Board" className="w-full h-60 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d6915ac4-6220-4d10-b580-13c5bf6e0cfa_1600w.png"/>
<div className="p-6 flex flex-col">
<h3 className="sm:text-2xl text-2xl font-medium font-manrope" style={{}}>Link Tracker</h3>
<p className="sm:text-base text-sm text-gray-600 font-geist mt-3">
          Ambassadors can monitor their own campaign progress in real time, seeing how much they’ve contributed, how
          close they are to their goals, and track their personal achievements visually and intuitively.
        </p>
</div>
</div>

<div className="bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col">
<img alt="Smart Leads Board" className="w-full h-60 object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e983d18a-6136-46c8-b918-cc8c4e504241_1600w.png"/>
<div className="p-6 flex flex-col">
<h3 className="sm:text-2xl text-2xl font-medium font-manrope">XP Journey</h3>
<p className="text-sm sm:text-base text-gray-600 font-geist mt-3">
          Ambassadors can monitor their own campaign progress in real time, seeing how much they’ve contributed, how
          close they are to their goals, and track their personal achievements visually and intuitively.
        </p>
</div>
</div>

<div className="bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col">
<img alt="Smart Leads Board" className="w-full h-60 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8cf6216f-171a-492c-ba1d-7182198d6c26_1600w.png"/>
<div className="p-6 flex flex-col">
<h3 className="sm:text-2xl text-2xl font-medium font-manrope">Donor Insights</h3>
<p className="text-sm sm:text-base text-gray-600 font-geist mt-3">
          Ambassadors can monitor their own campaign progress in real time, seeing how much they’ve contributed, how
          close they are to their goals, and track their personal achievements visually and intuitively.
        </p>
</div>
</div>

</div>
</div><div className="bg-gray-50 w-full pt-0 pr-4 pb-8 pl-4">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[1280px] mr-auto ml-auto">

<div className="overflow-hidden flex flex-col bg-white border-gray-100 border rounded-2xl">
<img alt="Smart Leads Board" className="w-full h-60 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e19911fe-4930-4fc2-8b8c-abe73ebbfe47_800w.png"/>
<div className="p-6 flex flex-col">
<h3 className="sm:text-2xl text-2xl font-medium font-manrope">Whatsapp template</h3>
<p className="sm:text-base text-sm text-gray-600 font-geist mt-3">
          Ambassadors can monitor their own campaign progress in real time, seeing how much they’ve contributed, how
          close they are to their goals, and track their personal achievements visually and intuitively.
        </p>
</div>
</div>

<div className="bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col">
<img alt="Smart Leads Board" className="bg-center w-full h-60 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/71165920-11ca-4c60-97ab-3fe4594b1d9f_1600w.png"/>
<div className="p-6 flex flex-col">
<h3 className="sm:text-2xl text-2xl font-medium font-manrope">Leaderboard</h3>
<p className="sm:text-base text-sm text-gray-600 font-geist mt-3">
          Ambassadors can monitor their own campaign progress in real time, seeing how much they’ve contributed, how
          close they are to their goals, and track their personal achievements visually and intuitively.
        </p>
</div>
</div>

<div className="bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col">
<img alt="Smart Leads Board" className="w-full h-60 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8cf6216f-171a-492c-ba1d-7182198d6c26_1600w.png"/>
<div className="p-6 flex flex-col">
<h3 className="sm:text-2xl text-2xl font-medium font-manrope">Donor Insights</h3>
<p className="text-sm sm:text-base text-gray-600 font-geist mt-3">
          Ambassadors can monitor their own campaign progress in real time, seeing how much they’ve contributed, how
          close they are to their goals, and track their personal achievements visually and intuitively.
        </p>
</div>
</div>

</div>
</div><div className="bg-white w-full pt-16 pr-4 pb-16 pl-4">
<div className="mx-auto max-w-xl border border-gray-200 rounded-2xl shadow-sm p-8">
<h2 className="text-5xl font-medium text-slate-900 text-center">Contact us</h2>
<form className="mt-8 space-y-5">
<div>
<label className="block text-sm font-medium text-slate-900 font-geist mb-2">Name</label>
<input className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 rounded-md focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all" placeholder="Enter Name" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-900 font-geist mb-2">Email</label>
<input className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 rounded-md focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all" placeholder="Enter Email" type="email"/>
</div>
<div className="">
<label className="block text-sm font-medium text-slate-900 font-geist mb-2">Subject</label>
<input className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 rounded-md focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all" placeholder="Enter Subject" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-900 font-geist mb-2">Message</label>
<textarea className="w-full px-4 py-3 text-slate-800 bg-gray-100 border border-gray-200 rounded-md focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all" placeholder="Enter Message" rows="6"></textarea>
</div>
<button className="text-white bg-slate-900 font-medium hover:bg-slate-800 tracking-wide text-sm px-4 py-2.5 w-full rounded-md border-0 outline-0 cursor-pointer transition-colors" type="button">
        Send message
      </button>
</form>
</div>
</div>



    </>
  );
}
