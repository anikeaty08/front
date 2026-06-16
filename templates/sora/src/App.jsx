import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


    .preventDefault();const input = document.getElementById('chatInput');const message = input.value.trim();if (message) {const messagesContainer = document.getElementById('chatMessages');const userMessage = document.createElement('div');userMessage.className = 'self-end max-w-[75%] bg-blue-500 rounded-xl px-4 py-2 text-white font-medium text-sm leading-relaxed shadow-sm';userMessage.textContent = message;messagesContainer.appendChild(userMessage);input.value = '';messagesContainer.scrollTop = messagesContainer.scrollHeight;setTimeout(() => {const botMessage = document.createElement('div');botMessage.className = 'self-start max-w-[75%] bg-white rounded-xl px-4 py-2 text-gray-800 font-medium text-sm leading-relaxed shadow-sm border border-gray-100';botMessage.textContent = 'I\'ll help you create that design. Let me generate some options for you!';messagesContainer.appendChild(botMessage);messagesContainer.scrollTop = messagesContainer.scrollHeight;}, 1000);}});
  


    document.getElementById('chatForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const input = document.getElementById('chatInput');
      const message = input.value.trim();
      if (message) {
        // Handle form submission
        input.value = '';
      }
    });
  


      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
      });
    


  /* 
    Sequence animation on scroll when visible. Usage:
    1) Add to Tailwind Classes: [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll
  */
  (function () {
    // Inject CSS for paused/running states
    const style = document.createElement("style");
    style.textContent = `
      /* Default: paused */
      .animate-on-scroll { animation-play-state: paused !important; }
      /* Activated by JS */
      .animate-on-scroll.animate { animation-play-state: running !important; }
    `;
    document.head.appendChild(style);

    const once = true;

    if (!window.__inViewIO) {
      window.__inViewIO = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            if (once) window.__inViewIO.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
    }

    window.initInViewAnimations = function (selector = ".animate-on-scroll") {
      document.querySelectorAll(selector).forEach((el) => {
        window.__inViewIO.observe(el); // observing twice is a no-op
      });
    };

    document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
  })();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen relative" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1)">

<div aria-hidden="true" className="pointer-events-none w-px border-dashed border-neutral-200 border-l absolute top-0 bottom-0" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1)" style={{left: 'calc(50% - 46rem)', visibility: 'hidden'}}></div>
<div aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-px border-l border-dashed border-neutral-200" style={{right: 'calc(50% - 46rem)', visibility: 'hidden'}}></div>


<div aria-hidden="true" className="pointer-events-none relative">
<div className="mx-auto max-w-6xl px-6">
<div className="h-px border-t border-dashed border-neutral-200" style={{}}></div>
</div>
</div>

<main className="relative" style={{}}>









<div className="border-dashed [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll xl:mt-0 border-neutral-200 border-t mt-0" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(1)">


<div className="[animation:fadeSlideIn_1s_ease-out_0.1s_both] sm:px-6 lg:mt-0 lg:pl-0 lg:pr-0 max-w-7xl mt-0 mr-auto ml-auto pr-4 pl-4" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1)">


<div className="lg:pt-0 pt-16"></div>


<div className="mt-8 sm:mt-10 lg:mt-12" style={{visibility: 'hidden'}}>
</div>

<div className="entrance-animate entrance-animate-delay-1 bg-white w-full max-w-7xl border-gray-200 border rounded-2xl mt-0 mr-auto ml-auto relative shadow-sm" style={{}}>
<div className="overflow-hidden rounded-[inherit] relative" style={{}}>

<div className="flex entrance-animate entrance-animate-delay-2 [animation:fadeSlideIn_1s_ease-out_0.1s_both] border-gray-200 border-b pt-6 pr-8 pb-6 pl-8 items-center justify-between" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(3) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1)">
<a className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f9524606-599f-4f26-9765-94ff3fddacf5_1600w.png)] bg-cover rounded invert" href="#" style={{}}></a>
<nav className="hidden md:flex gap-8 text-sm font-medium">
<a className="text-gray-600 hover:text-gray-900 transition-colors duration-150 font-geist" href="#" style={{}}>Generate</a>
<a className="text-gray-600 hover:text-gray-900 transition-colors duration-150 font-geist" href="#" style={{}}>Templates</a>
<a className="hover:text-gray-900 transition-colors duration-150 text-gray-600 font-geist" href="#" style={{}}>About</a>
<a className="hover:text-gray-900 transition-colors duration-150 text-gray-600 font-geist" href="#" style={{}}>Contact</a>
</nav>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(3) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1)">
<button className="text-lg font-geist" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(3) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; button:nth-of-type(1)" onblur="this.style.boxShadow=''" onfocus="this.style.boxShadow='0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 5px 3px #999, inset 0 0 30px #aaa'" onmousedown="this.style.boxShadow='0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 5px 3px #999, inset 0 0 30px #aaa'" onmouseout="this.style.boxShadow=''" onmouseover="this.style.boxShadow='0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 3px 3px #CECFD1'" onmouseup="this.style.boxShadow='0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 3px 3px #CECFD1'" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', width: '150px', height: '50px', backgroundImage: 'linear-gradient(to top, rgb(216, 217, 219) 0%, rgb(255, 255, 255) 80%, rgb(253, 253, 253) 100%)', borderRadius: '30px', border: '1px solid rgb(143, 144, 146)', fontFamily: '"Source Sans Pro", sans-serif', fontSize: '14px', fontWeight: '600', color: 'rgb(96, 96, 96)', textShadow: 'rgb(255, 255, 255) 0px 1px'}}>Get Started</button>
</div>
</div>

<div className="w-fullgrid md:grid-cols-12">

<div className="md:col-span-7 lg:col-span-8 entrance-animate entrance-animate-delay-3 flex flex-col text-center w-full h-full pt-16 pr-8 pb-16 pl-8 items-center justify-center" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(3) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1)" style={{}}><div className="absolute top-0 right-0 bottom-0 left-0" data-container-bg="true" data-element-id="aura-emgfg0i9e16pf5qdf" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(3) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1)"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(3) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1)" data-us-project="qTiAlX0sxkuBOAiL7qHL"></div></div>
<h1 className="leading-tight sm:text-7xl lg:text-[96px] text-5xl max-w-3xl font-geist font-light tracking-tighter [animation:fadeSlideIn_1s_ease-out_0.1s_both]" style={{}}>Design Smarter with
    Sora</h1>
<p className="sm:text-base text-xl font-normal text-gray-600 max-w-2xl mx-auto py-6 font-geist [animation:fadeSlideIn_1s_ease-out_0.1s_both]" style={{}}>Generate stunning layouts
    instantly and customize them with powerful edits.</p>

<div className="w-full max-w-2xl mt-8 [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
<div className="relative rounded-2xl border border-gray-200 bg-white shadow-sm" style={{}}>
<textarea aria-label="Prompt input" className="w-full resize-none border-0 outline-none focus:ring-0 bg-transparent text-base sm:text-lg leading-relaxed text-gray-800 placeholder-gray-400 rounded-2xl p-4 sm:p-6 pr-16 pb-20 min-h-[140px]" placeholder="Create something beautiful..." style={{}}></textarea>

<div className="absolute left-4 sm:left-6 bottom-4 sm:bottom-6 flex flex-wrap items-center gap-2 sm:gap-3">
<button className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 font-geist" style={{}}>
<svg className="lucide lucide-wand-2 w-4 h-4" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
          Prompt Builder
        </button>
<button className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 font-geist" style={{}}>
<svg className="lucide lucide-paperclip w-4 h-4" data-lucide="paperclip" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg>
          Attach
        </button>
<button className="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50" style={{}}>
<svg className="lucide lucide-figma w-4 h-4" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
</button>
</div>

<button className="absolute right-4 sm:right-6 bottom-4 sm:bottom-6 h-10 w-10 rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50 text-gray-700 flex items-center justify-center" style={{}}>
<svg className="lucide lucide-arrow-up w-4 h-4" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</button>
</div>
</div>
</div>

</div>

<div className="col-span-full grid md:grid-cols-3 border-t border-gray-200 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll" style={{}}>

<article className="flex flex-col entrance-animate entrance-animate-delay-3 xl:pt-6 xl:pl-6 xl:pr-6 xl:pb-6 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll border-gray-200 border-r pt-6 pr-6 pb-6 pl-6 gap-x-4 gap-y-4" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(3) &gt; div:nth-of-type(1) &gt; div:nth-of-type(3) &gt; article:nth-of-type(1)" style={{}}>
<div className="flex flex-col transition hover:-translate-y-1 hover:shadow-2xl xl:pl-2 xl:pt-2 xl:pb-2 xl:pr-2 text-gray-900 bg-white max-h-[600px] ring-gray-200 ring-1 rounded-2xl pt-2 pr-2 pb-2 pl-2 shadow-lg" style={{}}>
<style className="">
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
* { font-family: 'Inter', 'Helvetica Neue', sans-serif; }
  </style>
<div className="flex flex-col gap-4 overflow-y-auto bg-gray-50 max-h-[300px] ring-gray-200 ring-1 rounded-xl mb-6 pt-4 pr-4 pb-4 pl-4 gap-x-4 gap-y-4" style={{}}>
<div className="flex flex-col space-y-2" id="chatMessages">
<div className="self-start max-w-[75%] bg-white rounded-xl px-4 py-2 text-gray-800 font-medium text-sm leading-relaxed shadow-sm border border-gray-100 font-geist" style={{}}>Hello! I'm your AI design assistant. What would you like to create today?</div>
<div className="self-end leading-relaxed xl:bg-stone-950 text-sm font-medium text-white bg-gray-500 max-w-[75%] rounded-xl px-4 py-2 shadow-sm font-geist" style={{}}>Create a modern dashboard with user analytics</div>
<div className="self-start max-w-[75%] bg-white rounded-xl px-4 py-2 text-gray-800 font-medium text-sm leading-relaxed shadow-sm border border-gray-100 font-geist" style={{}}>Great idea! I'll design a clean dashboard with charts, user metrics, and a modern layout. What color scheme would you prefer?</div>
<div className="self-end max-w-[75%] rounded-xl px-4 py-2 text-white font-medium text-sm leading-relaxed shadow-sm bg-gray-500 font-geist" style={{}}>Use a professional blue and white theme</div>
<div className="self-start max-w-[75%] bg-white rounded-xl px-4 py-2 text-gray-800 font-medium text-sm leading-relaxed shadow-sm border border-gray-100 font-geist" style={{}}>Perfect! I'm generating your dashboard design now. It will include user stats, revenue charts, and activity feeds.</div>
</div>
</div>
<form className="flex items-center gap-3" id="chatForm">
<input className="flex-grow rounded-xl bg-gray-50 ring-1 ring-gray-200 px-4 py-2 text-sm font-medium text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400" id="chatInput" placeholder="Describe what you want to design…" style={{}}/>
<button className="flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-md transition focus:outline-none focus:ring-2 bg-gray-500 hover:bg-gray-600 focus:ring-gray-400" style={{}} type="submit">
<svg className="h-4 w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m22 2-7 20-4-9-9-4Z"></path>
<path d="M22 2 11 13"></path>
</svg>
</button>
</form>

</div><h4 className="xl:text-[#000000] xl:text-xl text-lg font-medium text-gray-600 font-geist" style={{}}>Generate UI from Simple Prompts</h4><p className="text-sm text-gray-600 font-geist" style={{}}>
            Describe your vision in plain English and watch Sora create professional interfaces instantly. From buttons
            to complete layouts, AI understands your design intent.
          </p>
</article>

<article className="flex flex-col entrance-animate entrance-animate-delay-3 xl:pt-6 xl:pl-6 xl:pr-6 xl:pb-6 border-gray-200 border-r pt-6 pr-6 pb-6 pl-6 gap-x-4 gap-y-4 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll" style={{}}>
<div className="flex flex-col transition hover:-translate-y-1 hover:shadow-2xl xl:pl-2 xl:pt-2 xl:pb-2 xl:pr-2 ring-gray-200 ring-1 text-gray-900 bg-white bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2f05d044-a2ce-446d-a7ca-55578c449083_800w.jpg)] max-h-[600px] bg-cover rounded-2xl pt-2 pr-2 pb-2 pl-2 shadow-lg" style={{}}>
<style className="">
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
* { font-family: 'Inter', 'Helvetica Neue', sans-serif; }
  </style>
<div className="flex flex-col gap-4 overflow-hidden bg-gray-50 max-h-[300px] ring-gray-200 ring-1 rounded-xl mb-6 relative" style={{visibility: 'hidden'}}>
<img alt="Modern UI Design Interface" className="w-full h-[300px] object-cover rounded-xl" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80" style={{visibility: 'hidden'}}/>
</div>
<form className="flex gap-3 gap-x-3 gap-y-3 items-center" id="chatForm" style={{visibility: 'hidden'}}>
<input className="flex-grow rounded-xl bg-gray-50 ring-1 ring-gray-200 px-4 py-2 text-sm font-medium text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400" id="chatInput" placeholder="Describe what you want to design…" style={{}}/>
<button className="flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-md transition focus:outline-none focus:ring-2 bg-gray-500 hover:bg-gray-600 focus:ring-gray-400" style={{}} type="submit">
<svg className="h-4 w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m22 2-7 20-4-9-9-4Z"></path>
<path d="M22 2 11 13"></path>
</svg>
</button>
</form>

</div><h4 className="xl:text-[#000000] xl:text-xl text-lg font-medium text-gray-600 font-geist" style={{}}>Curated Template Library</h4><p className="text-sm text-gray-600 font-geist" style={{}}>Browse our growing collection of professionally designed templates. Each one is AI-generated and refined to meet modern design standards and best pratices.</p>
</article>

<article className="flex flex-col entrance-animate entrance-animate-delay-3 xl:pt-6 xl:pl-6 xl:pr-6 xl:pb-6 border-gray-200 border-r pt-6 pr-6 pb-6 pl-6 gap-x-4 gap-y-4 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll" style={{}}>
<div className="flex-1 flex flex-col md:pl-0 md:pt-0 md:pb-0 md:pr-0 max-w-4xl pt-2 pr-2 pb-2 pl-2" style={{}}>
<div className="flex-1 xl:bg-[#000000] bg-zinc-950/80 border-zinc-800/60 border rounded-2xl relative backdrop-blur-sm" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(3) &gt; div:nth-of-type(1) &gt; div:nth-of-type(3) &gt; article:nth-of-type(3) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1)">

<div className="flex gap-2.5 border-zinc-800/40 border-b pt-4 pr-5 pb-4 pl-5 gap-x-2.5 gap-y-2.5 items-center" style={{}}>
<div className="flex gap-2">
<span className="h-3 w-3 rounded-full bg-zinc-600" style={{}}></span>
<span className="h-3 w-3 rounded-full bg-zinc-600" style={{}}></span>
<span className="h-3 w-3 rounded-full bg-zinc-600" style={{}}></span>
</div>
<div className="flex-1 text-center">
<span className="text-zinc-500 text-sm tracking-tight font-geist" style={{}}>budget-analyzer.py</span>
</div>
</div>
<div className="md:p-6 flex-1 flex max-h-96 pt-5 pr-5 pb-5 pl-5 items-center" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(3) &gt; div:nth-of-type(1) &gt; div:nth-of-type(3) &gt; article:nth-of-type(3) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2)" style={{}}>
<pre className="text-[13px] md:text-[14px] leading-7 overflow-x-auto text-zinc-300 tracking-tight font-geist w-full" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(3) &gt; div:nth-of-type(1) &gt; div:nth-of-type(3) &gt; article:nth-of-type(3) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; pre:nth-of-type(1)" style={{}}><span className="text-zinc-600 select-none w-8 inline-block tracking-tight font-geist" style={{}}>1</span><span className="text-emerald-400 tracking-tight font-geist" style={{}}>import</span> pandas <span className="text-emerald-400 tracking-tight font-geist" style={{}}>as</span> pd
<span className="text-zinc-600 select-none w-8 inline-block tracking-tight font-geist" style={{}}>2</span><span className="text-emerald-400 tracking-tight font-geist" style={{}}>from</span> ai_models <span className="text-emerald-400 tracking-tight font-geist" style={{}}>import</span> BudgetPredictor
<span className="text-zinc-600 select-none w-8 inline-block tracking-tight font-geist" style={{}}>3</span>
<span className="text-zinc-600 select-none w-8 inline-block tracking-tight font-geist" style={{}}>4</span><span className="text-emerald-400 tracking-tight font-geist" style={{}}>class</span> <span className="text-white tracking-tight font-geist" style={{}}>BudgetAnalyzer</span>:
<span className="text-zinc-600 select-none w-8 inline-block tracking-tight font-geist" style={{}}>5</span>    <span className="text-emerald-400 tracking-tight font-geist" style={{}}>def</span> <span className="text-white tracking-tight font-geist" style={{}}>analyze_spending</span>(<span className="text-orange-400 tracking-tight font-geist" style={{}}>self</span>, data):
<span className="text-zinc-600 select-none w-8 inline-block tracking-tight font-geist" style={{}}>6</span>        predictions = <span className="text-orange-400 tracking-tight font-geist" style={{}}>self</span>.model.<span className="text-white tracking-tight font-geist" style={{}}>predict</span>(data)
<span className="text-zinc-600 select-none w-8 inline-block tracking-tight font-geist" style={{}}>7</span>        insights = <span className="text-orange-400 tracking-tight font-geist" style={{}}>self</span>.<span className="text-white tracking-tight font-geist" style={{}}>generate_insights</span>(predictions)
<span className="text-zinc-600 select-none w-8 inline-block tracking-tight font-geist" style={{}}>8</span>        <span className="text-emerald-400 tracking-tight font-geist" style={{}}>return</span> {
<span className="text-zinc-600 select-none w-8 inline-block tracking-tight font-geist" style={{}}>9</span>            <span className="text-blue-400 tracking-tight font-geist" style={{}}>'forecast'</span>: predictions,
<span className="text-zinc-600 select-none w-8 inline-block tracking-tight font-geist" style={{}}>10</span>            <span className="text-blue-400 tracking-tight font-geist" style={{}}>'recommendations'</span>: insights
<span className="text-zinc-600 select-none w-8 inline-block tracking-tight font-geist" style={{}}>11</span>        }</pre>
</div>

<div className="ring-inset ring-white ring-1 rounded-2xl absolute top-0 right-0 bottom-0 left-0" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(3) &gt; div:nth-of-type(1) &gt; div:nth-of-type(3) &gt; article:nth-of-type(3) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(3)" style={{}}></div>
</div>
</div><h4 className="xl:text-[#000000] xl:text-xl text-lg font-medium text-gray-600 font-geist" style={{}}>Clean Code Output</h4><p className="text-sm text-gray-600 font-geist" style={{}}>Every generated design comes with clean, production-ready-code. Export to React, Vue, HTML, or Figma. No cleanup needed, just copy and deploy.</p>
</article>
</div>
</div>
</div>

</div>
</div><div className="border-dashed border-neutral-200 border-t mt-24" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(2)" style={{}}>

<div className="lg:pt-16 pt-16 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll"></div>

<section className="sm:px-6 lg:px-8 lg:pt-8 lg:mt-0 lg:pb-0 max-w-7xl border-gray-200 border rounded-2xl mt-0 mr-auto ml-auto pt-8 pr-4 pb-8 pl-4" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(2) &gt; section:nth-of-type(1)">
<div className="grid [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll sm:mt-10 md:grid-cols-3 lg:mt-0 mt-10 gap-x-8 gap-y-8" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(2) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1)">
<div className="md:col-span-2">
<h2 className="sm:text-2xl md:text-3xl text-xl [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll font-geist font-light tracking-tighter" style={{}}>
        Design smarter, not harder</h2>
<p className="mt-3 text-neutral-600 tracking-tight leading-relaxed [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll font-geist" style={{}}>
        I create AI-powered design tools and premium templates that help designers and developers build beautiful
        products
        faster. Quality meets efficiency.
      </p>
</div>
<div className="flex md:justify-end items-end">
<button className="text-lg font-geist" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(2) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; button:nth-of-type(1)" onblur="this.style.boxShadow=''" onfocus="this.style.boxShadow='0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 5px 3px #999, inset 0 0 30px #aaa'" onmousedown="this.style.boxShadow='0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 5px 3px #999, inset 0 0 30px #aaa'" onmouseout="this.style.boxShadow=''" onmouseover="this.style.boxShadow='0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 3px 3px #CECFD1'" onmouseup="this.style.boxShadow='0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 3px 3px #CECFD1'" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', width: '150px', height: '50px', backgroundImage: 'linear-gradient(to top, rgb(216, 217, 219) 0%, rgb(255, 255, 255) 80%, rgb(253, 253, 253) 100%)', borderRadius: '30px', border: '1px solid rgb(143, 144, 146)', fontFamily: '"Source Sans Pro", sans-serif', fontSize: '14px', fontWeight: '600', color: 'rgb(96, 96, 96)', textShadow: 'rgb(255, 255, 255) 0px 1px'}}>Browse Templates</button>
</div>
</div>
<div className="grid grid-cols-1 divide-y divide-neutral-200 border-y border-dashed sm:grid-cols-2 sm:divide-y-0 sm:divide-x sm:border-x lg:grid-cols-4 lg:my-8 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll border-neutral-300 mt-8 mb-8" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(2) &gt; section:nth-of-type(1) &gt; div:nth-of-type(2)" style={{}}>
<div className="pt-8 pr-6 pb-8 pl-6">
<p className="text-sm text-neutral-600 font-geist" style={{}}>Photo sessions</p>
<p className="mt-2 text-3xl font-geist font-light tracking-tighter" style={{}}>500+</p>
</div>
<div className="pt-8 pr-6 pb-8 pl-6" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(2) &gt; section:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(2)">
<p className="text-sm text-neutral-600 font-geist" style={{}}>Happy clients</p>
<p className="mt-2 text-3xl font-geist font-light tracking-tighter" style={{}}>98%</p>
</div>
<div className="px-6 py-8">
<p className="text-sm text-neutral-600 font-geist" style={{}}>Photos delivered</p>
<p className="mt-2 text-3xl font-geist font-light tracking-tighter" style={{}}>15K+</p>
</div>
<div className="px-6 py-8">
<p className="text-sm text-neutral-600 font-geist" style={{}}>Years experience</p>
<p className="mt-2 text-3xl font-geist font-light tracking-tighter" style={{}}>12+</p>
</div>
</div>
</section>
</div><div className="border-dashed border-neutral-200 border-t mt-24" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(3)">

<div className="lg:pt-16 pt-16"></div>

<section className="sm:px-6 lg:mt-12 lg:pl-0 lg:pr-0 max-w-7xl mt-12 mr-auto ml-auto pr-4 pl-4" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(3) &gt; section:nth-of-type(1)">
<div className="overflow-hidden bg-white w-full border-gray-200 border rounded-2xl relative shadow-lg [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll" style={{}}>

<div className="flex bg-gray-50 border-gray-200 border-b pt-2 pr-3 pb-2 pl-3 items-center justify-between" style={{}}>
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-red-500" style={{}}></span>
<span className="h-3 w-3 rounded-full bg-yellow-500" style={{}}></span>
<span className="h-3 w-3 rounded-full bg-green-500"></span>
<div className="ml-3 hidden items-center gap-2 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs text-gray-600 sm:flex font-geist" style={{}}>
<svg className="lucide lucide-sparkles h-3.5 w-3.5 text-gray-500" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                    SORA Studio — AI UI Design Tool
                </div>
</div>
<div className="flex items-center gap-2">
<button className="hidden rounded-md border border-gray-200 bg-white p-1.5 text-gray-600 hover:bg-gray-50 sm:inline-flex" style={{}}>
<svg className="lucide lucide-save h-4 w-4" data-lucide="save" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path><path d="M7 3v4a1 1 0 0 0 1 1h7"></path></svg>
</button>
<button className="hidden rounded-md border border-gray-200 bg-white p-1.5 text-gray-600 hover:bg-gray-50 sm:inline-flex" style={{}}>
<svg className="lucide lucide-share-2 h-4 w-4" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</button>
<button className="hover:bg-gray-500 xl:bg-slate-950 text-xs font-medium text-white font-geist bg-gray-600 rounded-md px-3 py-1.5" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(3) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; button:nth-of-type(3)">Export Code</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12">

<aside className="hidden md:block md:col-span-3 bg-gray-50 border-gray-200 border-r pt-3 pr-3 pb-3 pl-3" style={{}}>
<div className="mb-3 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-700 font-geist" style={{}}>
<svg className="lucide lucide-layers h-3.5 w-3.5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
                        Components
                    </div>
<button className="rounded-md border border-gray-200 bg-white p-1 text-gray-500 hover:bg-gray-50" style={{}}>
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<div className="space-y-1 text-gray-700 h-[520px] flex flex-col" style={{}}>

<div className="flex gap-1 mb-3">
<button className="xl:bg-[#000000] text-xs text-white font-geist bg-gray-600 rounded px-2 py-1" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(3) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; aside:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; button:nth-of-type(1)">UI Kit</button>
<button className="px-2 py-1 text-xs bg-gray-200 text-gray-600 hover:bg-gray-300 rounded font-geist" style={{}}>Templates</button>
<button className="px-2 py-1 text-xs bg-gray-200 text-gray-600 hover:bg-gray-300 rounded font-geist" style={{}}>Icons</button>
</div>

<div className="bg-white rounded-lg p-2 mb-3 border border-gray-200" style={{}}>
<div className="text-xs text-gray-500 mb-2 font-geist" style={{}}>Basic Components</div>
<div className="grid grid-cols-3 gap-1">
<button className="p-2 rounded border border-gray-200 bg-white hover:bg-gray-50" style={{}}>
<svg className="h-4 w-4 mx-auto text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg>
</button>
<button className="p-2 rounded border border-gray-200 bg-white hover:bg-gray-50" style={{}}>
<svg className="h-4 w-4 text-green-500 mx-auto" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox"="" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
</button>
<button className="p-2 rounded border border-gray-200 bg-white hover:bg-gray-50" style={{}}>
<svg className="h-4 w-4 text-purple-500 mx-auto" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16"></path><path className="" d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"></path><path d="M9 20h6"></path></svg>
</button>
<button className="p-2 rounded border border-gray-200 bg-white hover:bg-gray-50" style={{}}>
<svg className="h-4 w-4 text-orange-500 mx-auto" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</button>
<button className="p-2 rounded border border-gray-200 bg-white hover:bg-gray-50" style={{}}>
<svg className="h-4 w-4 text-red-500 mx-auto" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
</button>
<button className="p-2 rounded border border-gray-200 bg-white hover:bg-gray-50" style={{}}>
<svg className="h-4 w-4 text-indigo-500 mx-auto" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</button>
</div>
</div>

<div className="bg-white rounded-lg p-2 flex-1 border border-gray-200" style={{}}>
<div className="text-xs text-gray-500 mb-2 font-geist" style={{}}>Layer Hierarchy</div>
<ul className="space-y-1 text-xs">
<li className="flex items-center gap-2 rounded-md border px-2 py-1 bg-gray-50 border-gray-200 font-geist" style={{}}>
<svg className="lucide lucide-square h-3.5 w-3.5 text-gray-600" data-lucide="square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg>
                                Hero Section
                                <div className="ml-auto flex items-center gap-1">
<button className="w-3 h-3 rounded-full bg-gray-500" style={{}}></button>
<button className="w-3 h-3 rounded-sm border border-gray-300" style={{}}>
<svg className="w-2 h-2 text-gray-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-gray-50 font-geist" style={{}}>
<svg className="lucide lucide-type h-3.5 w-3.5 text-green-500" data-lucide="type" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16"></path><path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"></path><path d="M9 20h6"></path></svg>
                                Main Heading
                                <div className="ml-auto flex items-center gap-1">
<button className="w-3 h-3 rounded-full bg-green-500"></button>
<button className="w-3 h-3 rounded-sm border border-gray-300" style={{}}>
<svg className="w-2 h-2 text-gray-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-gray-50 font-geist" style={{}}>
<svg className="lucide lucide-type h-3.5 w-3.5 text-gray-400" data-lucide="type" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16"></path><path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"></path><path d="M9 20h6"></path></svg>
                                Subtitle Text
                                <div className="ml-auto flex items-center gap-1">
<button className="w-3 h-3 rounded-full bg-gray-400" style={{}}></button>
<button className="w-3 h-3 rounded-sm border border-gray-300" style={{}}>
<svg className="w-2 h-2 text-gray-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-gray-50 font-geist" style={{}}>
<svg className="h-3.5 w-3.5 text-purple-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path className="" d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
                                Button Group
                                <div className="ml-auto flex items-center gap-1">
<button className="w-3 h-3 rounded-full bg-purple-500" style={{}}></button>
<button className="w-3 h-3 rounded-sm border border-gray-300" style={{}}>
<svg className="w-2 h-2 text-gray-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-gray-50 opacity-60 font-geist" style={{}}>
<svg className="h-3.5 w-3.5 text-yellow-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
                                Mobile Layout
                                <div className="ml-auto">
<span className="text-xs text-gray-400 font-geist" style={{}}>Hidden</span>
</div>
</li>
</ul>
</div>

<div className="bg-gradient-to-r to-purple-50 rounded-lg p-2 mt-3 border from-gray-50 border-gray-200" style={{}}>
<div className="mb-1 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-sparkles h-4 w-4 text-gray-600" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-xs font-medium text-gray-700 font-geist" style={{}}>AI Assistant</span>
</div>
<button className="p-1 rounded border bg-white border-gray-200 hover:bg-gray-50" style={{}}>
<svg className="w-3 h-3 text-gray-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
</button>
</div>
<div className="text-xs mb-2">
<input className="w-full px-2 py-1 text-xs border rounded bg-white placeholder-gray-400 font-geist border-gray-200" placeholder="Describe what you want to create..." style={{}} type="text"/>
</div>
<div className="flex gap-1">
<button className="text-[10px] xl:bg-[#000000] text-white font-geist bg-gray-600 rounded px-2 py-1" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(3) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; aside:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(4) &gt; div:nth-of-type(3) &gt; button:nth-of-type(1)">Generate</button>
<button className="px-2 py-1 text-[10px] bg-white border rounded border-gray-200 text-gray-600 font-geist" style={{}}>Refine</button>
</div>
</div>
</div>
</aside>

<main className="relative md:col-span-6 bg-gray-100" style={{}}>
<div className="flex xl:text-[#000000] text-xs text-gray-600 bg-white border-gray-200 border-b px-3 py-2 gap-x-2 gap-y-2 items-center" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(3) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; main:nth-of-type(1) &gt; div:nth-of-type(1)">
<svg className="lucide lucide-eye h-4 w-4 text-gray-500" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="font-geist">Design Mode</span>
<div className="text-gray-400 font-geist" style={{}}>•</div>
<span className="text-gray-500 font-geist" style={{}}>Desktop 1440px</span>
<div className="ml-auto flex items-center gap-1">
<div className="text-xs text-gray-500 font-geist" style={{}}>Zoom:</div>
<div className="text-xs text-gray-600 font-geist" style={{}}>100%</div>
<div className="h-4 w-px bg-gray-300 mx-2" style={{}}></div>
<button className="rounded-md border border-gray-200 bg-white p-1 hover:bg-gray-50" style={{}}>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17,8 12,3 7,8"></polyline><line className="" x1="12" x2="12" y1="3" y2="15"></line></svg>
</button>
<button className="rounded-md border border-gray-200 text-white p-1 bg-gray-600 hover:bg-gray-500" style={{}}>
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
</div>

<div className="flex items-center justify-between border-b border-gray-200 px-3 py-2 bg-white" style={{}}>
<div className="flex items-center gap-2">
<button className="hover:bg-gray-500 xl:bg-[#000000] text-white bg-gray-600 border-gray-200 border rounded px-1 py-1" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(3) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; main:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; button:nth-of-type(1)">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 12.586 19 19"></path><path d="M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"></path></svg>
</button>
<button className="p-1 rounded border border-gray-200 bg-white text-gray-600 hover:bg-gray-50" style={{}}>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg>
</button>
<div className="h-4 w-px bg-gray-300" style={{}}></div>
<div className="flex items-center gap-1">
<span className="text-xs text-gray-500 font-geist" style={{}}>Grid:</span>
<button className="px-2 py-0.5 rounded border border-gray-200 bg-white text-xs text-gray-600 hover:bg-gray-50 font-geist" style={{}}>8px</button>
</div>
</div>
<div className="flex items-center gap-2">
<button className="hover:bg-gray-500 xl:bg-[#000000] text-xs text-white font-geist bg-gray-600 border-gray-200 border rounded px-2 py-1" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(3) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; main:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(2) &gt; button:nth-of-type(1)">Desktop</button>
<button className="px-2 py-1 rounded border border-gray-200 bg-white text-xs text-gray-500 hover:bg-gray-50 font-geist" style={{}}>Tablet</button>
<button className="px-2 py-1 rounded border border-gray-200 bg-white text-xs text-gray-500 hover:bg-gray-50 font-geist" style={{}}>Mobile</button>
</div>
</div>
<div className="p-4 sm:p-6">
<div className="overflow-hidden min-h-[400px] sm:min-h-[450px] bg-white border-gray-300 border rounded-xl relative" style={{}}>

<div className="absolute top-6 right-6 left-6">
<div className="bg-white max-w-xl border-gray-200 border rounded-xl pt-4 pr-4 pb-4 pl-4 shadow-sm" style={{}}>
<h3 className="sm:text-3xl text-2xl text-gray-900 font-geist font-light tracking-tighter" style={{}}>AI-Powered UI Design</h3>
<p className="mt-1 text-sm text-gray-600 font-geist" style={{}}>Create beautiful interfaces with intelligent design assistance and real-time collaboration.</p>
<div className="flex gap-2 mt-3 items-center">
<button className="inline-flex xl:bg-slate-950 text-xs font-medium text-white font-geist bg-gray-600 rounded-md px-3 py-1.5 gap-x-2 gap-y-2 items-center" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(3) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; main:nth-of-type(1) &gt; div:nth-of-type(3) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; button:nth-of-type(1)">
<svg className="lucide lucide-sparkles h-3 w-3" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                    Generate Design
                </button>
<button className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700 font-geist" style={{}}>
<svg className="lucide lucide-settings h-3 w-3" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    Customize
                </button>
</div>
</div>
</div>

<div className="absolute top-64 right-6 left-6">
<div className="border-dashed bg-gray-50 w-full border-gray-300 border rounded-lg pt-6 pr-6 pb-6 pl-6" style={{}}>

<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-8 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<div className="h-4 w-4 bg-gray-300 rounded-full" style={{}}></div>
<div className="h-4 w-4 bg-gray-300 rounded-full" style={{}}></div>
<div className="h-4 w-4 bg-gray-300 rounded-full" style={{}}></div>
</div>
<div className="h-4 w-16 bg-gray-300 rounded" style={{}}></div>
<div className="h-4 w-16 bg-gray-300 rounded" style={{}}></div>
<div className="h-4 w-16 bg-gray-300 rounded" style={{}}></div>
</div>
<div className="bg-gray-300 w-24 h-5 rounded" style={{}}></div>
</div>

<div className="grid grid-cols-12 gap-6 mb-6">

<div className="col-span-8">
<div className="h-5 w-full bg-gray-300 rounded mb-2" style={{}}></div>
<div className="h-5 w-5/6 bg-gray-300 rounded mb-2" style={{}}></div>
<div className="h-5 w-4/5 bg-gray-300 rounded mb-6" style={{}}></div>

<div className="flex gap-3 mb-8">
<div className="h-10 w-32 rounded bg-gray-300" style={{}}></div>
<div className="h-10 w-24 bg-gray-300 rounded" style={{}}></div>
<div className="h-10 w-20 bg-gray-300 rounded" style={{}}></div>
</div>

<div className="grid grid-cols-3 gap-4">
<div className="p-4 bg-white rounded border border-gray-200" style={{}}>
<div className="h-6 w-6 rounded mb-3 bg-gray-300" style={{}}></div>
<div className="h-4 w-full bg-gray-400 rounded mb-2" style={{}}></div>
<div className="h-3 w-full bg-gray-300 rounded mb-1" style={{}}></div>
<div className="h-3 w-3/4 bg-gray-300 rounded" style={{}}></div>
</div>
<div className="p-4 bg-white rounded border border-gray-200" style={{}}>
<div className="h-6 w-6 bg-green-300 rounded mb-3" style={{}}></div>
<div className="h-4 w-full bg-gray-400 rounded mb-2" style={{}}></div>
<div className="h-3 w-full bg-gray-300 rounded mb-1" style={{}}></div>
<div className="h-3 w-4/5 bg-gray-300 rounded" style={{}}></div>
</div>
<div className="p-4 bg-white rounded border border-gray-200" style={{}}>
<div className="h-6 w-6 bg-purple-300 rounded mb-3" style={{}}></div>
<div className="h-4 w-full bg-gray-400 rounded mb-2" style={{}}></div>
<div className="h-3 w-full bg-gray-300 rounded mb-1" style={{}}></div>
<div className="h-3 w-2/3 bg-gray-300 rounded" style={{}}></div>
</div>
</div>
</div>

<div className="col-span-4">
<div className="bg-white p-5 rounded border border-gray-200" style={{}}>

<div className="flex items-center gap-3 mb-4">
<div className="h-12 w-12 bg-gray-300 rounded-full" style={{}}></div>
<div className="flex-1">
<div className="h-4 w-2/3 bg-gray-400 rounded mb-1" style={{}}></div>
<div className="h-3 w-1/2 bg-gray-300 rounded" style={{}}></div>
</div>
</div>

<div className="space-y-3">
<div className="">
<div className="flex justify-between text-xs mb-1">
<div className="h-3 w-16 bg-gray-300 rounded" style={{}}></div>
<div className="h-3 w-8 bg-gray-400 rounded" style={{}}></div>
</div>
<div className="h-2 bg-gray-200 rounded-full" style={{}}>
<div className="h-2 rounded-full w-4/5 bg-gray-400" style={{}}></div>
</div>
</div>
<div className="">
<div className="flex justify-between text-xs mb-1">
<div className="h-3 w-20 bg-gray-300 rounded" style={{}}></div>
<div className="h-3 w-10 bg-gray-400 rounded" style={{}}></div>
</div>
<div className="h-2 bg-gray-200 rounded-full" style={{}}>
<div className="h-2 bg-emerald-400 rounded-full w-full" style={{}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<div className="h-3 w-14 bg-gray-300 rounded" style={{}}></div>
<div className="h-3 w-6 bg-gray-400 rounded" style={{}}></div>
</div>
<div className="h-2 bg-gray-200 rounded-full" style={{}}>
<div className="h-2 bg-violet-400 rounded-full w-3/4" style={{}}></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-gray-200 pt-4" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-6">
<div className="h-4 w-20 bg-gray-300 rounded" style={{}}></div>
<div className="h-4 w-16 bg-gray-300 rounded" style={{}}></div>
<div className="h-4 w-14 bg-gray-300 rounded" style={{}}></div>
</div>
<div className="flex items-center gap-2">
<div className="h-4 w-4 bg-gray-300 rounded-full" style={{}}></div>
<div className="h-4 w-4 bg-gray-300 rounded-full" style={{}}></div>
<div className="h-4 w-4 bg-gray-300 rounded-full" style={{}}></div>
</div>
</div>
</div>

<div className="absolute -top-3 -right-3">
</div>
</div>
</div>

<div className="opacity-5 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(circle, rgb(107, 114, 128) 1px, transparent 1px)', backgroundSize: '16px 16px', visibility: 'hidden'}}></div>

</div>

<div className="mt-4 p-3 bg-gradient-to-r to-purple-50 border rounded-lg from-gray-50 border-gray-200" style={{}}>
<div className="flex items-center gap-3 mb-2">
<svg className="lucide lucide-sparkles h-4 w-4 text-gray-600" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-xs font-medium text-gray-700 font-geist" style={{}}>AI Suggestions</span>
<div className="flex-1 rounded-full h-1 bg-gray-200" style={{}}>
<div className="h-1 rounded-full w-3/4 bg-gray-600" style={{}}></div>
</div>
<span className="text-xs text-gray-600 font-geist" style={{}}>Processing...</span>
</div>
<div className="flex items-center justify-between text-xs text-gray-700" style={{}}>
<div className="flex items-center gap-2">
<span className="font-geist">Analyzing design patterns</span>
<div className="h-3 w-px bg-gray-300" style={{}}></div>
<span className="text-gray-600 font-geist" style={{}}>Generating layouts</span>
</div>
<div className="flex items-center gap-1">
<button className="px-2 py-0.5 rounded bg-white text-[10px] text-gray-600 hover:bg-gray-50 font-geist" style={{}}>Apply All</button>
<button className="text-[10px] xl:bg-[#000000] text-white font-geist bg-gray-600 rounded px-2 py-0.5" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(3) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; main:nth-of-type(1) &gt; div:nth-of-type(3) &gt; div:nth-of-type(2) &gt; div:nth-of-type(2) &gt; div:nth-of-type(2) &gt; button:nth-of-type(2)">Review</button>
</div>
</div>
</div>
</div>
</main>

<aside className="hidden md:block md:col-span-3 bg-gray-50 border-gray-200 border-l pt-3 pr-3 pb-3 pl-3" style={{}}>
<div className="mb-3 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-700 font-geist" style={{}}>
<svg className="lucide lucide-sliders-horizontal h-3.5 w-3.5" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3"></path><path d="M12 19H3"></path><path d="M14 3v4"></path><path d="M16 17v4"></path><path d="M21 12h-9"></path><path d="M21 19h-5"></path><path d="M21 5h-7"></path><path d="M8 10v4"></path><path d="M8 12H3"></path></svg>
                        Properties
                    </div>
<div className="flex gap-1">
<button className="rounded-md border border-gray-200 bg-white p-1 text-gray-500 hover:bg-gray-50" style={{}}>
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</button>
<button className="rounded-md border border-gray-200 bg-white p-1 text-gray-500 hover:bg-gray-50" style={{}}>
<svg className="lucide lucide-more-horizontal h-3 w-3" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>

<div className="flex gap-1 mb-3">
<button className="xl:bg-[#000000] text-xs text-white font-geist bg-gray-600 rounded px-2 py-1" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(3) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; aside:nth-of-type(2) &gt; div:nth-of-type(2) &gt; button:nth-of-type(1)">Design</button>
<button className="px-2 py-1 text-xs bg-gray-200 text-gray-600 hover:bg-gray-300 rounded font-geist" style={{}}>Layout</button>
<button className="px-2 py-1 text-xs bg-gray-200 text-gray-600 hover:bg-gray-300 rounded font-geist" style={{}}>Code</button>
</div>
<div className="space-y-3 h-[480px] overflow-y-auto">

<div className="bg-white rounded-lg p-3 border border-gray-200" style={{}}>
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-gray-600 font-geist" style={{}}>Selected Element</span>
<span className="text-xs text-gray-600 font-geist" style={{}}>Hero Section</span>
</div>
<div className="text-[10px] text-gray-500 space-y-1 font-geist" style={{}}>
<div className="flex justify-between">
<span className="font-geist">Position:</span>
<span className="font-geist">24px, 24px</span>
</div>
<div className="flex justify-between">
<span className="font-geist">Size:</span>
<span className="font-geist">400 × 160</span>
</div>
<div className="flex justify-between">
<span className="font-geist">Opacity:</span>
<span className="font-geist">100%</span>
</div>
</div>
</div>

<div className="bg-white rounded-lg p-3 space-y-3 border border-gray-200" style={{}}>
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-gray-700 font-geist" style={{}}>Appearance</span>
<span className="rounded-md bg-gray-100 px-2 py-0.5 text-[10px] text-gray-600 font-geist" style={{}}>Card</span>
</div>
<div className="grid grid-cols-2 gap-2 text-[11px]">
<button className="xl:bg-slate-950 text-white font-geist bg-gray-600 border-gray-200 border rounded-md px-2 py-1" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(3) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; aside:nth-of-type(2) &gt; div:nth-of-type(3) &gt; div:nth-of-type(2) &gt; div:nth-of-type(2) &gt; button:nth-of-type(1)">
<svg className="mr-1 inline h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>Fill
                            </button>
<button className="rounded-md border border-gray-200 bg-white px-2 py-1 text-gray-700 hover:bg-gray-50 font-geist" style={{}}>
<svg className="mr-1 inline h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="m15 19-3 3-3-3"></path><path d="m19 9 3 3-3 3"></path><path d="M2 12h20"></path><path d="m5 9-3 3 3 3"></path><path d="m9 5 3-3 3 3"></path></svg>Border
                            </button>
<button className="rounded-md border border-gray-200 bg-white px-2 py-1 text-gray-700 hover:bg-gray-50 font-geist" style={{}}>
<svg className="mr-1 inline h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg>Shadow
                            </button>
<button className="rounded-md border border-gray-200 bg-white px-2 py-1 text-gray-700 hover:bg-gray-50 font-geist" style={{}}>
<svg className="mr-1 inline h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line><line x1="11" x2="11" y1="8" y2="14"></line><line x1="8" x2="14" y1="11" y2="11"></line></svg>Effects
                            </button>
</div>

<div className="text-[10px]">
<div className="text-gray-600 mb-1 font-geist" style={{}}>Background Color</div>
<div className="flex gap-1">
<div className="w-6 h-6 rounded border border-gray-300 bg-white" style={{}}></div>
<input className="flex-1 px-2 py-1 text-xs border border-gray-300 rounded bg-white font-geist" style={{}} type="text" value="#FFFFFF"/>
</div>
</div>
</div>

<div className="bg-white rounded-lg p-3 space-y-3 border border-gray-200" style={{}}>
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-gray-700 font-geist" style={{}}>Spacing</span>
<button className="text-[10px] text-gray-600 hover:text-gray-500 font-geist" style={{}}>Auto</button>
</div>
<div className="space-y-3">
<div className="space-y-1">
<div className="flex items-center justify-between text-xs">
<span className="text-gray-600 font-geist" style={{}}>Padding</span>
<div className="flex items-center gap-1">
<input className="w-16 h-1 bg-gray-200 rounded-full appearance-none" max="100" min="0" style={{}} type="range" value="24"/>
<span className="text-gray-500 w-8 text-[10px] font-geist" style={{}}>24px</span>
</div>
</div>
</div>
<div className="space-y-1">
<div className="flex items-center justify-between text-xs">
<span className="text-gray-600 font-geist" style={{}}>Margin</span>
<div className="flex items-center gap-1">
<input className="w-16 h-1 bg-gray-200 rounded-full appearance-none" max="100" min="0" style={{}} type="range" value="16"/>
<span className="text-gray-500 w-8 text-[10px] font-geist" style={{}}>16px</span>
</div>
</div>
</div>
<div className="space-y-1">
<div className="flex items-center justify-between text-xs">
<span className="text-gray-600 font-geist" style={{}}>Border Radius</span>
<select className="bg-white border border-gray-300 rounded px-2 py-1 text-[10px] text-gray-600 font-geist" style={{}}>
<option className="font-geist">12px</option>
<option className="font-geist">8px</option>
<option className="font-geist">16px</option>
<option className="font-geist">24px</option>
<option className="font-geist">Custom</option>
</select>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-lg p-3 space-y-3 border border-gray-200" style={{}}>
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-gray-700 font-geist" style={{}}>Typography</span>
<button className="text-[10px] text-gray-500 hover:text-gray-400 font-geist" style={{}}>Reset</button>
</div>
<div className="space-y-2">
<div className="grid grid-cols-2 gap-2 text-[10px]">
<div>
<div className="text-gray-600 mb-1 font-geist" style={{}}>Font Family</div>
<select className="w-full bg-white border border-gray-300 rounded px-2 py-1 text-gray-600 font-geist" style={{}}>
<option className="font-geist">Inter</option>
<option className="font-geist">Geist</option>
<option className="font-geist">System</option>
</select>
</div>
<div>
<div className="text-gray-600 mb-1 font-geist" style={{}}>Font Size</div>
<input className="w-full bg-white border border-gray-300 rounded px-2 py-1 text-gray-600 font-geist" style={{}} type="number" value="24"/>
</div>
</div>
<div className="grid grid-cols-2 gap-2 text-[10px]">
<div>
<div className="text-gray-600 mb-1 font-geist" style={{}}>Weight</div>
<select className="w-full bg-white border border-gray-300 rounded px-2 py-1 text-gray-600 font-geist" style={{}}>
<option className="font-geist">600</option>
<option className="font-geist">400</option>
<option className="font-geist">500</option>
<option className="font-geist">700</option>
</select>
</div>
<div>
<div className="text-gray-600 mb-1 font-geist" style={{}}>Line Height</div>
<input className="w-full bg-white border border-gray-300 rounded px-2 py-1 text-gray-600 font-geist" step="0.1" style={{}} type="number" value="1.2"/>
</div>
</div>
<div className="text-[10px]">
<div className="text-gray-600 mb-1 font-geist" style={{}}>Text Color</div>
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded border border-gray-300 bg-gray-900" style={{}}></div>
<span className="text-gray-500 flex-1 font-geist" style={{}}>#111827</span>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-r to-purple-50 rounded-lg p-3 space-y-3 border from-gray-50 border-gray-200" style={{}}>
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-gray-700 font-geist" style={{}}>AI Recommendations</span>
<div className="flex items-center gap-1">
<span className="rounded-md px-2 py-0.5 text-[10px] bg-gray-100 text-gray-600 font-geist" style={{}}>3 new</span>
<button className="w-4 h-4 rounded border bg-white flex items-center justify-center border-gray-200 hover:bg-gray-50" style={{}}>
<svg className="w-2 h-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
<div className="space-y-2 text-[11px]">
<div className="flex items-center justify-between p-2 bg-white rounded border border-gray-200" style={{}}>
<div className="flex items-center gap-2">
<svg className="w-3 h-3 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-gray-700 font-geist" style={{}}>Improve Contrast</span>
</div>
<div className="flex items-center gap-1">
<button className="px-2 py-1 text-[9px] text-white rounded bg-gray-600 font-geist" style={{}}>Apply</button>
</div>
</div>
<div className="flex items-center justify-between p-2 bg-white rounded border border-gray-200" style={{}}>
<div className="flex items-center gap-2">
<svg className="w-3 h-3 text-green-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16"></path><path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"></path><path d="M9 20h6"></path></svg>
<span className="text-gray-700 font-geist" style={{}}>Optimize Spacing</span>
</div>
<div className="flex items-center gap-1">
<button className="px-2 py-1 text-[9px] text-white rounded bg-gray-600 font-geist" style={{}}>Apply</button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-4 flex gap-2">
<button className="flex-1 hover:bg-gray-500 xl:bg-slate-950 text-xs font-medium text-white font-geist bg-gray-600 rounded px-3 py-2" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(3) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; aside:nth-of-type(2) &gt; div:nth-of-type(4) &gt; button:nth-of-type(1)">Generate Code</button>
<button className="px-3 py-2 bg-white text-gray-700 rounded text-xs font-medium border border-gray-300 hover:bg-gray-50 font-geist" style={{}}>Preview</button>
</div>
</aside>
</div>
</div>
</section>
</div><div className="border-dashed border-neutral-200 border-t mt-24" style={{}}>

<div className="lg:pt-16 pt-16"></div>

<div className="entrance-animate entrance-animate-delay-1 bg-white w-full max-w-7xl border-gray-200 border rounded-2xl mt-0 mr-auto ml-auto relative shadow-sm" style={{}}>
<div className="overflow-hidden rounded-[inherit] relative">

<div className="text-center pt-16 pr-8 pb-12 pl-8" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; main:nth-of-type(1) &gt; div:nth-of-type(4) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1)">
<h2 className="leading-tight text-5xl sm:text-6xl lg:text-7xl text-gray-900 mb-4 font-geist font-light tracking-tighter [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll" style={{}}>Choose Your Plan</h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto font-geist [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll" style={{}}>Start creating beautiful UI designs with AI. From hobby projects to enterprise solutions.</p>

<div className="flex items-center justify-center gap-4 mt-8 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<span className="text-sm font-medium text-gray-600 font-geist" style={{}}>Monthly</span>
<div className="relative">
<input className="sr-only" id="billing-toggle" type="checkbox"/>
<label className="flex items-center cursor-pointer" htmlFor="billing-toggle">
<div className="relative w-12 h-6 bg-gray-200 rounded-full transition-colors duration-200" style={{}}>
<div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200 shadow-sm" style={{}}></div>
</div>
</label>
</div>
<span className="text-sm font-medium text-gray-900 font-geist" style={{}}>Annual</span>
<span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 font-geist" style={{}}>Save 20%</span>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-8 pr-8 pb-16 pl-8 gap-x-8 gap-y-8">

<div className="overflow-hidden bg-white border-gray-200 border rounded-[28px] relative shadow-sm" style={{}}>
<div className="xl:pt-4 xl:pb-4 xl:pl-4 xl:pr-4 rounded-3xl pt-4 pr-4 pb-4 pl-4 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="flex flex-col xl:py-4 xl:px-4 xl:bg-gray-50 border-gray-200 border rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] gap-x-2 gap-y-2 items-start" style={{}}>
<h3 className="xl:text-3xl text-xl text-gray-900 font-geist font-light tracking-tighter" style={{}}>Starter</h3>
<p className="text-sm text-gray-600 font-geist" style={{}}>Ideal for trying Sora’s AI UI tools on personal projects.</p><div className="flex gap-3 gap-x-3 gap-y-3 items-end">
<span className="text-4xl text-gray-900 font-geist font-light tracking-tighter" style={{}}>$0</span>
<span className="text-sm text-gray-600 mb-1 font-geist" style={{}}>/month</span>
</div>
</div>
<div className="mt-8">
</div>
<ul className="mt-8 space-y-3">
<li className="flex items-center gap-3 text-sm text-gray-700 font-geist" style={{}}>
<svg className="text-emerald-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          5 AI generations / month
        </li>
<li className="flex items-center gap-3 text-sm text-gray-700 font-geist" style={{}}>
<svg className="text-emerald-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          10 starter templates
        </li>
<li className="flex items-center gap-3 text-sm text-gray-700 font-geist" style={{}}>
<svg className="text-emerald-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          HTML export
        </li>
<li className="flex items-center gap-3 text-sm text-gray-700 font-geist" style={{}}>
<svg className="text-emerald-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          Community support
        </li>
</ul>

<div className="flex bg-gray-50 border-gray-200 border rounded-full mt-6 pt-2 pr-4 pb-2 pl-4 items-center justify-between" style={{}}>
<div className="flex items-center gap-2 text-sm text-gray-700" style={{}}>
<span className="font-geist">3× faster generations</span>
<span className="text-gray-500 font-geist" style={{}}>+ $5/mo</span>
</div>
<label className="relative inline-flex cursor-pointer items-center">
<input className="peer sr-only" type="checkbox"/>
<span className="h-6 w-10 rounded-full bg-gray-200 transition-colors peer-checked:bg-neutral-900" style={{}}></span>
<span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-transform peer-checked:translate-x-4" style={{}}></span>
</label>
</div>
<button className="mt-6 w-full rounded-full bg-neutral-900 px-6 py-4 text-sm font-medium text-white inline-flex items-center justify-between" style={{}}>
<span className="font-geist">Get Started Now</span>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800" style={{}}>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
</div>
</div>

<div className="relative rounded-[28px] border border-gray-200 bg-white shadow-sm overflow-hidden [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll" style={{}}>
<div className="xl:pt-4 xl:pb-4 xl:pl-4 xl:pr-4 rounded-3xl pt-4 pr-4 pb-4 pl-4">
<div className="flex flex-col xl:py-4 xl:px-4 xl:bg-gray-50 border-gray-200 border rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] gap-x-2 gap-y-2 items-start" style={{}}>
<h3 className="xl:text-3xl text-xl text-gray-900 font-geist font-light tracking-tighter" style={{}}>Pro</h3>
<p className="text-sm text-gray-600 font-geist" style={{}}>Power and flexibility  for designers who build every day.</p><div className="flex gap-3 gap-x-3 gap-y-3 items-end">
<span className="text-4xl text-gray-900 font-geist font-light tracking-tighter" style={{}}>$29</span>
<span className="text-sm text-gray-600 mb-1 font-geist" style={{}}>/month</span>
</div>
</div>
<div className="mt-8">
</div>
<ul className="mt-8 space-y-3">
<li className="flex text-sm text-gray-700 gap-x-3 gap-y-3 items-center font-geist" style={{}}><svg className="w-[18px] h-[18px]" data-icon-replaced="true" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px', color: 'rgb(16, 185, 129)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 6 9 17l-5-5"></path></svg>100 AI generations / month</li>
<li className="flex gap-3 text-sm text-gray-700 gap-x-3 gap-y-3 items-center font-geist" style={{}}><svg className="text-emerald-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 6 9 17l-5-5"></path></svg>React, Vue, HTML &amp; Figma export</li>
<li className="flex gap-3 text-sm text-gray-700 gap-x-3 gap-y-3 items-center font-geist" style={{}}><svg className="text-emerald-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>All 150+ templates</li>
<li className="flex text-sm text-gray-700 gap-x-3 gap-y-3 items-center font-geist" style={{}}><svg className="text-emerald-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Priority support &amp; version history</li><li className="flex text-sm text-gray-700 gap-x-3 gap-y-3 items-center font-geist" style={{}}><svg className="w-[18px] h-[18px]" data-icon-replaced="true" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px', color: 'rgb(16, 185, 129)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 6 9 17l-5-5"></path></svg>Advanced AI customization</li>
</ul>

<div className="flex bg-gray-50 border-gray-200 border rounded-full mt-6 pt-2 pr-4 pb-2 pl-4 items-center justify-between" style={{}}>
<div className="flex items-center gap-2 text-sm text-gray-700" style={{}}>
<span className="font-geist">3× faster generations</span>
<span className="text-gray-500 font-geist" style={{}}>+ $5/mo</span>
</div>
<label className="relative inline-flex cursor-pointer items-center">
<input className="peer sr-only" type="checkbox"/>
<span className="h-6 w-10 rounded-full bg-gray-200 transition-colors peer-checked:bg-neutral-900" style={{}}></span>
<span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-transform peer-checked:translate-x-4" style={{}}></span>
</label>
</div>
<button className="mt-6 w-full rounded-full bg-neutral-900 px-6 py-4 text-sm font-medium text-white inline-flex items-center justify-between" style={{}}>
<span className="font-geist">Get Started Now</span>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800" style={{}}>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
</div>
</div>

<div className="relative rounded-[28px] border border-neutral-800 bg-neutral-900 text-white overflow-hidden [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll" style={{}}>
<div className="p-8">
<h3 className="mt-5 text-xl font-semibold tracking-tight font-geist">Enterprise</h3>
<p className="mt-2 text-sm text-neutral-300 font-geist" style={{}}>Unlimited scale and collaboration for teams and organizations.</p>
<div className="mt-8">
<div className="flex items-end gap-2">
<span className="text-sm text-neutral-400 font-geist" style={{}}>Starts at</span>
<span className="text-4xl text-white font-geist font-light tracking-tighter" style={{}}>$99</span>
<span className="text-sm text-neutral-400 mb-1 font-geist" style={{}}>/month</span>
</div>
</div>
<ul className="mt-8 space-y-3">
<li className="flex items-center gap-3 text-sm text-neutral-200 font-geist" style={{}}>
<svg className="text-emerald-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          Unlimited AI generations
        </li>
<li className="flex items-center gap-3 text-sm text-neutral-200 font-geist" style={{}}>
<svg className="text-emerald-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          Custom template creation
        </li>
<li className="flex items-center gap-3 text-sm text-neutral-200 font-geist" style={{}}>
<svg className="text-emerald-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          Team collaboration &amp; advanced analytics
        </li>
<li className="flex items-center gap-3 text-sm text-neutral-200 font-geist" style={{}}>
<svg className="text-emerald-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          Dedicated account manager
        </li>
<li className="flex items-center gap-3 text-sm text-neutral-200 font-geist" style={{}}>
<svg className="text-emerald-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          SLA &amp; premium support
        </li>
</ul>
<button className="inline-flex hover:bg-neutral-100 text-sm font-medium text-neutral-900 bg-white w-full rounded-full mt-6 pt-4 pr-6 pb-4 pl-6 items-center justify-between" style={{}}>
<span className="font-geist">Get Started Now</span>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200" style={{}}>
<svg className="text-neutral-900" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
</div>
</div>
</div>

<div className="border-t border-gray-200 px-8 py-16 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll" style={{}}>
<div className="text-center mb-12">
<h3 className="text-2xl text-gray-900 mb-4 font-geist font-light tracking-tighter" style={{}}>Frequently Asked Questions</h3>
<p className="text-gray-600 font-geist" style={{}}>Everything you need to know about Sora pricing</p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
<div className="">
<h4 className="text-sm font-medium text-gray-900 mb-2 font-geist" style={{}}>Can I upgrade or downgrade my plan anytime?</h4>
<p className="text-sm text-gray-600 font-geist" style={{}}>Yes, you can change your plan at any time. Changes take effect immediately and your billing will be prorated.</p>
</div>
<div className="">
<h4 className="text-sm font-medium text-gray-900 mb-2 font-geist" style={{}}>What happens to my designs if I cancel?</h4>
<p className="text-sm text-gray-600 font-geist" style={{}}>You'll retain access to all your created designs and can export them. However, you won't be able to create new AI generations.</p>
</div>
<div className="">
<h4 className="text-sm font-medium text-gray-900 mb-2 font-geist" style={{}}>Do you offer refunds?</h4>
<p className="text-sm text-gray-600 font-geist" style={{}}>We offer a 14-day money-back guarantee for all paid plans. No questions asked.</p>
</div>
<div className="">
<h4 className="text-sm font-medium text-gray-900 mb-2 font-geist" style={{}}>Can I use Sora for commercial projects?</h4>
<p className="text-sm text-gray-600 font-geist" style={{}}>Yes, all paid plans include commercial usage rights. You own the designs you create with Sora.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


<footer className="border-dashed border-neutral-200 border-t mt-24 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll" style={{}}>
<div className="sm:px-6 lg:px-8 lg:mt-12 max-w-7xl mt-12 mr-auto ml-auto pr-4 pl-4">
<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 pt-16 pb-16 gap-x-8 gap-y-8">

<div className="lg:col-span-2">
<a className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[100px] h-[50px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f9524606-599f-4f26-9765-94ff3fddacf5_1600w.png)] bg-cover rounded invert" href="#"></a>
<p className="text-sm text-neutral-600 max-w-md leading-relaxed mb-6 font-geist" style={{}}>
        AI-powered design tools that help creators build beautiful interfaces faster. Democratizing great design through intelligent automation and smart templates.
      </p>
<a className="flex items-center justify-between text-sm border-neutral-200 border-b border-dashed pt-3 pb-3" href="#" style={{}}>
<span className="flex items-center gap-3 text-neutral-800 font-geist" style={{}}>
<svg className="lucide lucide-twitter h-4 w-4 text-neutral-600" data-lucide="twitter" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              Twitter
            </span>
<svg className="lucide lucide-arrow-right h-4 w-4 text-neutral-500" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a><a className="flex items-center justify-between text-sm border-neutral-200 border-b border-dashed pt-3 pb-3" href="#" style={{}}>
<span className="flex items-center gap-3 text-neutral-800 font-geist" style={{}}>
<svg className="lucide lucide-github h-4 w-4 text-neutral-600" data-lucide="github" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              GitHub
            </span>
<svg className="lucide lucide-arrow-right h-4 w-4 text-neutral-500" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a><a className="flex items-center justify-between text-sm border-neutral-200 border-b border-dashed pt-3 pb-3" href="#" style={{}}>
<span className="flex items-center gap-3 text-neutral-800 font-geist" style={{}}>
<svg className="lucide lucide-linkedin h-4 w-4 text-neutral-600" data-lucide="linkedin" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              LinkedIn
            </span>
<svg className="lucide lucide-arrow-right h-4 w-4 text-neutral-500" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="justify-center">
<h3 className="text-sm font-semibold text-neutral-900 mb-4 font-geist" style={{}}>Product</h3>
<ul className="space-y-3">
<li className=""><a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-geist" href="#" style={{}}>AI Generator</a></li>
<li className=""><a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-geist" href="#" style={{}}>Template Library</a></li>
<li className=""><a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-geist" href="#" style={{}}>Code Export</a></li>
<li className=""><a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-geist" href="#" style={{}}>Figma Plugin</a></li>
<li className=""><a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-geist" href="#" style={{}}>API Access</a></li>
</ul>
</div>

<div className="">
<h3 className="text-sm font-semibold text-neutral-900 mb-4 font-geist" style={{}}>Resources</h3>
<ul className="space-y-3">
<li className=""><a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-geist" href="#" style={{}}>Documentation</a></li>
<li className=""><a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-geist" href="#" style={{}}>Tutorials</a></li>
<li className=""><a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-geist" href="#" style={{}}>Community</a></li>
<li className=""><a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-geist" href="#" style={{}}>Support</a></li>
<li className=""><a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-geist" href="#" style={{}}>Changelog</a></li>
</ul>
</div>
</div>

<div className="border-dashed flex flex-col sm:flex-row gap-4 border-neutral-200 border-t pt-8 pb-8 items-center justify-between" style={{}}>
<p className="text-sm text-neutral-600 font-geist" style={{}}>© 2024 SORA Studio. All rights reserved.</p>
<div className="flex gap-6 text-sm text-neutral-600 items-center" style={{}}>
<a className="hover:text-neutral-900 transition-colors font-geist" href="#" style={{}}>Privacy Policy</a>
<a className="hover:text-neutral-900 transition-colors font-geist" href="#" style={{}}>Terms of Service</a>
<a className="hover:text-neutral-900 transition-colors font-geist" href="#" style={{}}>Status</a>
</div>
</div>
</div>
</footer>
</div>

<style>
  /* 
    Sequence animation intro. Usage:
    1) Add to Tailwind Classes: [animation:fadeSlideIn_1s_ease-out_0.1s_both]
  */
  @keyframes fadeSlideIn {
    0% {
      opacity: 0;
      transform: translateY(30px);
      filter: blur(8px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0px);
    }
  }
</style>


    </>
  );
}
