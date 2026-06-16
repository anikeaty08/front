import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


    document.addEventListener("DOMContentLoaded", () => {
      
      // --- 1. Text Decryption Effect ---
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&";
      const decryptObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            const target = entry.target;
            let iteration = 0;
            const originalText = target.dataset.value;
            decryptObserver.unobserve(target);
            
            const interval = setInterval(() => {
              target.innerText = originalText
                .split("")
                .map((letter, index) => {
                  if(index < iteration) {
                    return originalText[index];
                  }
                  return letters[Math.floor(Math.random() * 26)];
                })
                .join("");
              
              if(iteration >= originalText.length){ 
                clearInterval(interval);
              }
              iteration += 1/3; 
            }, 30);
          }
        });
      }, { threshold: 0.5 });
      document.querySelectorAll('.decrypt-target').forEach(el => decryptObserver.observe(el));

      // --- 2. Ticker Fade In ---
      const ticker = document.getElementById('partners-ticker');
      const tickerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ticker-section-visible');
          }
        });
      }, { threshold: 0.2 });
      tickerObserver.observe(ticker);

      // --- 3. Developer API Scroll Animation (Slide from right) ---
      const devSection = document.getElementById('developer-api');
      const apiCards = document.querySelectorAll('.api-card');
      
      // Function to handle scroll animation for dev section
      function handleDevScroll() {
        if (!devSection) return;
        
        const rect = devSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Calculate progress based on how far we've scrolled into the section
        // 0 = section start touches bottom of viewport
        // 1 = section end touches top of viewport (approx)
        // We actually want progress within the pinned area.
        
        // Simpler approach: Map scroll position relative to section top to 0-1 range
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        
        // When sectionTop is 0, we are at the start of the pin.
        // We scroll down for (sectionHeight - viewportHeight) pixels.
        const scrollDistance = sectionHeight - viewportHeight;
        const scrolled = -sectionTop;
        
        let progress = Math.max(0, Math.min(1, scrolled / scrollDistance));
        
        // Logic:
        // 0 - 0.3: Card 1 only
        // 0.3 - 0.6: Card 2 enters
        // 0.6 - 1.0: Card 3 enters
        
        // Card 2
        if (progress > 0.2) {
          apiCards[1].style.transform = 'translateX(0)';
        } else {
          apiCards[1].style.transform = 'translateX(120%)';
        }
        
        // Card 3
        if (progress > 0.6) {
          apiCards[2].style.transform = 'translateX(0)';
        } else {
          apiCards[2].style.transform = 'translateX(120%)';
        }
      }

      window.addEventListener('scroll', () => {
        window.requestAnimationFrame(handleDevScroll);
      });

    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="0yOnLW8hxq07qszxBw0D"></div>

</div></div>

<div className="fixed inset-0 -z-10 bg-grid opacity-30"></div>
<div className="fixed top-0 left-0 w-full h-[500px] bg-gradient-to-b from-cyan-900/10 to-transparent -z-10 pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="brand-font bg-center text-xl font-bold text-white tracking-tight bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a6b29e6-f166-4901-9838-5ff8b5b7ac9b_320w.png)] bg-cover pt-6 pr-12 pb-6 pl-12"></span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-400 hover:text-cyan-400 transition-colors" href="#constellation">Constellation</a>
<a className="text-sm font-medium text-neutral-400 hover:text-cyan-400 transition-colors" href="#schema">Schema</a>
<a className="text-sm font-medium text-neutral-400 hover:text-cyan-400 transition-colors" href="#pricing">Access</a>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 px-3 py-1 rounded border border-white/10 bg-white/5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="mono-font text-[10px] text-neutral-400">GRID: ONLINE</span>
</div>
<button className="bg-white text-black px-5 py-2 text-sm font-semibold hover:bg-cyan-50 transition-colors">
          Initialize
        </button>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 overflow-hidden min-h-screen flex flex-col items-center justify-center">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] -z-10 flex items-center justify-center opacity-60 pointer-events-none">
<div className="orbit-scene relative flex items-center justify-center">
<div className="planet"></div>
<div className="orbit-ring orbit-ring-1">
<div className="satellite" style={{transformOrigin: '150px', top: '0', left: '50%'}}></div>
</div>
<div className="orbit-ring orbit-ring-2">
<div className="satellite" style={{transformOrigin: '250px', background: 'white', width: '6px', height: '6px'}}></div>
</div>
<div className="orbit-ring orbit-ring-3"></div>
</div>
</div>
<div className="container z-10 text-center mr-auto ml-auto pr-4 pl-4 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-medium tracking-widest uppercase mono-font">
<span className="w-2 h-2 border border-cyan-400 bg-cyan-400/50"></span>
    Global Latency &lt; 10ms
  </div>
<h1 className="md:text-8xl text-5xl font-medium text-white tracking-tighter mb-6 leading-[1.05]">
  PLANETARY SCALE
  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-cyan-400 to-teal-500 decrypt-target" data-value="DATA MESH">
    DATA MESH
  </span>
</h1>
<p className="max-w-xl mx-auto text-lg text-neutral-400 mb-10 leading-relaxed font-light">
    The first decentralized orbital network for high-frequency trading and autonomous logistics.
    <span className="text-white">Zero terrestrial bottlenecks.</span>
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="group relative px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold tracking-wide transition-all overflow-hidden">
<div className="absolute inset-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] -translate-x-[100%] group-hover:animate-[shine_1s_infinite]"></div>
<span className="relative flex items-center gap-2">
            DEPLOY NODE
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</button>
<button className="px-8 py-4 bg-transparent border border-white/10 text-white hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-950/10 transition-all font-medium mono-font text-sm">
          VIEW DOCUMENTATION
        </button>
</div>
</div>
</main>

<section className="relative py-24 bg-black overflow-hidden border-y border-white/5 opacity-0 translate-y-8 transition-all duration-1000 ease-out" id="partners-ticker" style={{zIndex: '10'}}>
<div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-20 pointer-events-none"></div>
<div className="transform -rotate-3 scale-110 origin-center select-none">
<div className="flex mb-8 w-[200%] animate-scroll-left hover:opacity-100 opacity-60 transition-opacity duration-300">
<div className="flex items-center gap-16 px-8">
<div className="flex items-center gap-2"><svg aria-hidden="true" data-icon="simple-icons:spacex" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M24 7.417C8.882 8.287 1.89 14.75.321 16.28L0 16.583h2.797C10.356 9.005 21.222 7.663 24 7.417m-17.046 6.35c-.472.321-.945.68-1.398 1.02l2.457 1.796h2.778zM2.948 10.8H.189l3.25 2.381c.473-.321 1.02-.661 1.512-.945Z" fill="currentColor"></path></svg> <span className="text-2xl font-bold brand-font text-neutral-500">AERODYNAMICS</span></div>
<div className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:cpu" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg> <span className="text-2xl font-bold brand-font text-neutral-500">NEURAL_CORE</span></div>
<div className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:satellite" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m13.5 6.5l-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5m7-3L19 5m-1.5 5.5l3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5M9 21a6 6 0 0 0-6-6"></path><path d="M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z"></path></g></svg> <span className="text-2xl font-bold brand-font text-neutral-500">SAT_LINK</span></div>
<div className="flex items-center gap-2"><svg aria-hidden="true" data-icon="simple-icons:nasa" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4.344 13.598c.075.281.195.39.407.39c.22 0 .335-.132.335-.39V8.804h1.379v4.794c0 .675-.088.968-.43 1.31c-.247.248-.703.439-1.278.439c-.464 0-.909-.154-1.192-.438c-.249-.25-.386-.505-.599-1.311l-.846-3.196c-.074-.281-.194-.39-.406-.39c-.22 0-.336.132-.336.39v4.794H0v-4.794c0-.675.088-.968.43-1.31c.247-.248.703-.439 1.278-.439c.464 0 .909.154 1.192.438c.249.25.385.505.599 1.311zm18.231 1.598l-1.591-4.98a.4.4 0 0 0-.06-.132a.23.23 0 0 0-.186-.082a.23.23 0 0 0-.185.082a.4.4 0 0 0-.06.132l-1.591 4.98h-1.425l1.739-5.44c.09-.283.22-.524.384-.684c.282-.275.614-.419 1.138-.419c.525 0 .857.144 1.139.42c.164.16.294.4.384.683L24 15.196zm-7.044 0c.903 0 1.344-.192 1.692-.538c.385-.383.569-.802.569-1.427c0-.553-.202-1.064-.51-1.37c-.403-.4-.903-.527-1.719-.527h-1.142c-.436 0-.61-.053-.748-.188c-.094-.093-.139-.23-.139-.393c0-.168.04-.334.156-.448c.103-.1.243-.147.511-.147h3.301V8.804h-3.049c-.903 0-1.343.192-1.691.538c-.385.383-.57.802-.57 1.427c0 .553.203 1.064.51 1.37c.404.4.904.527 1.72.527h1.141c.437 0 .61.053.748.188c.095.093.14.23.14.393c0 .169-.041.335-.157.448c-.102.1-.242.147-.51.147h-3.405l-1.306-4.086c-.09-.283-.22-.524-.384-.684c-.282-.275-.615-.419-1.139-.419s-.857.144-1.138.42c-.165.16-.294.4-.385.683l-1.738 5.44h1.424l1.592-4.98a.4.4 0 0 1 .06-.132a.23.23 0 0 1 .185-.082q.121 0 .186.082a.4.4 0 0 1 .06.132l1.591 4.98z" fill="currentColor"></path></svg> <span className="text-2xl font-bold brand-font text-white">VOYAGER</span></div>
<div className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:zap" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> <span className="text-2xl font-bold brand-font text-neutral-500">HYPER_VOLT</span></div>
<div className="flex items-center gap-2"><svg aria-hidden="true" data-icon="simple-icons:nvidia" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8.948 8.798v-1.43a7 7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851a3.7 3.7 0 0 1-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6 6 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964a6.5 6.5 0 0 1-1.095-.097v1.325c.3.035.61.062.91.062c3.957 0 6.82-2.023 9.593-4.408c.459.371 2.34 1.263 2.73 1.652c-2.633 2.208-8.772 3.984-12.253 3.984c-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936" fill="currentColor"></path></svg> <span className="text-2xl font-bold brand-font text-neutral-500">TENSOR_FLOW</span></div>
</div>
<div className="flex items-center gap-16 px-8">
<div className="flex items-center gap-2"><svg aria-hidden="true" data-icon="simple-icons:spacex" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M24 7.417C8.882 8.287 1.89 14.75.321 16.28L0 16.583h2.797C10.356 9.005 21.222 7.663 24 7.417m-17.046 6.35c-.472.321-.945.68-1.398 1.02l2.457 1.796h2.778zM2.948 10.8H.189l3.25 2.381c.473-.321 1.02-.661 1.512-.945Z" fill="currentColor"></path></svg> <span className="text-2xl font-bold brand-font text-neutral-500">AERODYNAMICS</span></div>
<div className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:cpu" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg> <span className="text-2xl font-bold brand-font text-neutral-500">NEURAL_CORE</span></div>
<div className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:satellite" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m13.5 6.5l-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5m7-3L19 5m-1.5 5.5l3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5M9 21a6 6 0 0 0-6-6"></path><path d="M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z"></path></g></svg> <span className="text-2xl font-bold brand-font text-neutral-500">SAT_LINK</span></div>
<div className="flex items-center gap-2"><svg aria-hidden="true" data-icon="simple-icons:nasa" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4.344 13.598c.075.281.195.39.407.39c.22 0 .335-.132.335-.39V8.804h1.379v4.794c0 .675-.088.968-.43 1.31c-.247.248-.703.439-1.278.439c-.464 0-.909-.154-1.192-.438c-.249-.25-.386-.505-.599-1.311l-.846-3.196c-.074-.281-.194-.39-.406-.39c-.22 0-.336.132-.336.39v4.794H0v-4.794c0-.675.088-.968.43-1.31c.247-.248.703-.439 1.278-.439c.464 0 .909.154 1.192.438c.249.25.385.505.599 1.311zm18.231 1.598l-1.591-4.98a.4.4 0 0 0-.06-.132a.23.23 0 0 0-.186-.082a.23.23 0 0 0-.185.082a.4.4 0 0 0-.06.132l-1.591 4.98h-1.425l1.739-5.44c.09-.283.22-.524.384-.684c.282-.275.614-.419 1.138-.419c.525 0 .857.144 1.139.42c.164.16.294.4.384.683L24 15.196zm-7.044 0c.903 0 1.344-.192 1.692-.538c.385-.383.569-.802.569-1.427c0-.553-.202-1.064-.51-1.37c-.403-.4-.903-.527-1.719-.527h-1.142c-.436 0-.61-.053-.748-.188c-.094-.093-.139-.23-.139-.393c0-.168.04-.334.156-.448c.103-.1.243-.147.511-.147h3.301V8.804h-3.049c-.903 0-1.343.192-1.691.538c-.385.383-.57.802-.57 1.427c0 .553.203 1.064.51 1.37c.404.4.904.527 1.72.527h1.141c.437 0 .61.053.748.188c.095.093.14.23.14.393c0 .169-.041.335-.157.448c-.102.1-.242.147-.51.147h-3.405l-1.306-4.086c-.09-.283-.22-.524-.384-.684c-.282-.275-.615-.419-1.139-.419s-.857.144-1.138.42c-.165.16-.294.4-.385.683l-1.738 5.44h1.424l1.592-4.98a.4.4 0 0 1 .06-.132a.23.23 0 0 1 .185-.082q.121 0 .186.082a.4.4 0 0 1 .06.132l1.591 4.98z" fill="currentColor"></path></svg> <span className="text-2xl font-bold brand-font text-white">VOYAGER</span></div>
<div className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:zap" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> <span className="text-2xl font-bold brand-font text-neutral-500">HYPER_VOLT</span></div>
<div className="flex items-center gap-2"><svg aria-hidden="true" data-icon="simple-icons:nvidia" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8.948 8.798v-1.43a7 7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851a3.7 3.7 0 0 1-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6 6 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964a6.5 6.5 0 0 1-1.095-.097v1.325c.3.035.61.062.91.062c3.957 0 6.82-2.023 9.593-4.408c.459.371 2.34 1.263 2.73 1.652c-2.633 2.208-8.772 3.984-12.253 3.984c-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936" fill="currentColor"></path></svg> <span className="text-2xl font-bold brand-font text-neutral-500">TENSOR_FLOW</span></div>
</div>
</div>
<div className="flex w-[200%] animate-scroll-right hover:opacity-100 opacity-40 transition-opacity duration-300">
<div className="flex items-center gap-16 px-8">
<div className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:database" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path><path d="M3 12a9 3 0 0 0 18 0"></path></g></svg> <span className="text-2xl font-bold brand-font text-cyan-900">DATA_HEAVY</span></div>
<div className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:shield-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg> <span className="text-2xl font-bold brand-font text-cyan-900">SECURE_NET</span></div>
<div className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:globe" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path></g></svg> <span className="text-2xl font-bold brand-font text-cyan-900">GLOBAL_OPS</span></div>
<div className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:code-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> <span className="text-2xl font-bold brand-font text-cyan-800">SYNTAX_CORP</span></div>
<div className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:wifi" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.859a10 10 0 0 1 14 0m-10.5 3.57a5 5 0 0 1 7 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> <span className="text-2xl font-bold brand-font text-cyan-900">SIGNAL_IO</span></div>
<div className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:server" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><path d="M6 6h.01M6 18h.01"></path></g></svg> <span className="text-2xl font-bold brand-font text-cyan-900">MAINFRAME</span></div>
</div>
<div className="flex items-center gap-16 px-8">
<div className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:database" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path><path d="M3 12a9 3 0 0 0 18 0"></path></g></svg> <span className="text-2xl font-bold brand-font text-cyan-900">DATA_HEAVY</span></div>
<div className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:shield-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg> <span className="text-2xl font-bold brand-font text-cyan-900">SECURE_NET</span></div>
<div className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:globe" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path></g></svg> <span className="text-2xl font-bold brand-font text-cyan-900">GLOBAL_OPS</span></div>
<div className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:code-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> <span className="text-2xl font-bold brand-font text-cyan-800">SYNTAX_CORP</span></div>
<div className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:wifi" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.859a10 10 0 0 1 14 0m-10.5 3.57a5 5 0 0 1 7 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> <span className="text-2xl font-bold brand-font text-cyan-900">SIGNAL_IO</span></div>
<div className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:server" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><path d="M6 6h.01M6 18h.01"></path></g></svg> <span className="text-2xl font-bold brand-font text-cyan-900">MAINFRAME</span></div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#080808] border-white/5 border-t pt-24 pb-24 relative" id="constellation" style={{maskImage: 'linear-gradient(180deg, transparent, black 5%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 5%, black 100%, transparent)'}}>
<div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
<div className="">
<h2 className="text-4xl md:text-5xl text-white font-medium mb-4 decrypt-target" data-value="Global Constellation">Global Constellation</h2>
<p className="text-neutral-400 max-w-md">Real-time telemetry of the active node topology. Monitoring 4,203 satellites in Low Earth Orbit.</p>
</div>
<div className="flex flex-col items-end">
<div className="text-4xl text-cyan-400 font-bold mono-font">4,203</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Active Nodes</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 h-[500px] relative">
<div className="bg-center opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat border-white/10 border rounded-lg absolute top-0 right-0 bottom-0 left-0" style={{filter: 'invert(1) grayscale(1)', maskImage: 'linear-gradient(180deg, transparent, black 25%, black 30%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 25%, black 30%, transparent)'}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent pointer-events-none"></div>
<div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
<div className="radar-line"></div>
</div>
<div className="map-dot absolute top-[30%] left-[25%] w-2 h-2 bg-cyan-400 rounded-full"></div>
<div className="map-dot absolute top-[35%] left-[28%] w-1.5 h-1.5 bg-cyan-400 rounded-full" style={{animationDelay: '0.5s'}}></div>
<div className="map-dot absolute top-[28%] left-[75%] w-2 h-2 bg-cyan-400 rounded-full" style={{animationDelay: '1s'}}></div>
<div className="map-dot absolute top-[45%] left-[60%] w-2 h-2 bg-cyan-400 rounded-full" style={{animationDelay: '1.5s'}}></div>
<div className="map-dot absolute top-[60%] left-[80%] w-1.5 h-1.5 bg-cyan-400 rounded-full" style={{animationDelay: '0.2s'}}></div>
<div className="map-dot absolute top-[32%] left-[48%] w-3 h-3 bg-white rounded-full box-shadow-[0_0_10px_white]"></div>
<div className="absolute bottom-6 left-6 p-4 bg-black/80 border border-white/10 backdrop-blur-md rounded mono-font text-xs">
<div className="flex items-center gap-2 mb-2 text-cyan-400">
<svg aria-hidden="true" data-icon="lucide:radio" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16.247 7.761a6 6 0 0 1 0 8.478m2.828-11.306a10 10 0 0 1 0 14.134m-14.15 0a10 10 0 0 1 0-14.134m2.828 11.306a6 6 0 0 1 0-8.478"></path><circle cx="12" cy="12" r="2"></circle></g></svg>
<span>SIGNAL STRENGTH: 98%</span>
</div>
<div className="text-neutral-500">
          LAT: 34.0522 N 
          LON: 118.2437 W
        </div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/5 relative" id="schema">
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/3 order-2 lg:order-1">
<div className="text-cyan-500 mono-font text-xs mb-4">/// ARCHITECTURE VIEW</div>
<h2 className="text-3xl text-white font-medium mb-6">Neural Uplink Schema</h2>
<p className="text-neutral-400 mb-6 leading-relaxed">
          Data packets are sharded and encrypted at the source, then beamed via laser-link to the nearest orbital node. The mesh network dynamically routes around weather patterns and solar interference.
        </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
            Source Sharding (Client-Side)
          </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
            Optical Laser Uplink (10Gbps)
          </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
            Mesh Routing (Space Layer)
          </li>
</ul>
</div>
<div className="lg:w-2/3 w-full order-1 lg:order-2 relative">
<div className="border border-white/10 bg-[#0A0A0A] rounded-xl p-8 relative overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.05)]">
<div className="absolute inset-0 bg-grid opacity-20"></div>
<svg className="w-full h-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 800 400">
<path d="M 50 200 L 200 200 L 250 100 L 550 100 L 600 200 L 750 200" stroke="#333" stroke-dasharray="4 4"></path>
<path d="M 50 200 L 200 200 L 250 300 L 550 300 L 600 200 L 750 200" stroke="#333" stroke-dasharray="4 4"></path>
<path className="schema-path" d="M 50 200 L 200 200 L 250 100 L 550 100 L 600 200 L 750 200" stroke="#06b6d4" strokeWidth="2"></path>
<path className="schema-path" d="M 50 200 L 200 200 L 250 300 L 550 300 L 600 200 L 750 200" stroke="#06b6d4" strokeWidth="2" style={{animationDelay: '1.5s'}}></path>
<circle cx="50" cy="200" fill="#333" r="4"></circle>
<text fill="#666" fontFamily="monospace" fontSize="10" text-anchor="middle" x="50" y="230">SOURCE</text>
<circle className="pulse-node" cx="200" cy="200" fill="#333" r="4"></circle>
<rect height="40" rx="4" stroke="#444" width="40" x="180" y="180"></rect>
<text fill="#666" fontFamily="monospace" fontSize="10" text-anchor="middle" x="200" y="240">ENCRYPT</text>
<circle className="pulse-node" cx="250" cy="100" fill="#333" r="4" style={{animationDelay: '0.5s'}}></circle>
<circle className="pulse-node" cx="400" cy="100" fill="#333" r="4" style={{animationDelay: '0.8s'}}></circle>
<circle className="pulse-node" cx="550" cy="100" fill="#333" r="4" style={{animationDelay: '1.1s'}}></circle>
<circle className="pulse-node" cx="250" cy="300" fill="#333" r="4" style={{animationDelay: '2.0s'}}></circle>
<circle className="pulse-node" cx="400" cy="300" fill="#333" r="4" style={{animationDelay: '2.3s'}}></circle>
<circle className="pulse-node" cx="550" cy="300" fill="#333" r="4" style={{animationDelay: '2.6s'}}></circle>
<circle className="pulse-node" cx="600" cy="200" fill="#333" r="4"></circle>
<rect height="40" rx="4" stroke="#444" width="40" x="580" y="180"></rect>
<text fill="#666" fontFamily="monospace" fontSize="10" text-anchor="middle" x="600" y="240">DECRYPT</text>
<circle cx="750" cy="200" fill="#333" r="4"></circle>
<text fill="#666" fontFamily="monospace" fontSize="10" text-anchor="middle" x="750" y="230">TARGET</text>
</svg>
<div className="absolute top-4 right-4 text-xs text-cyan-500 mono-font animate-pulse">LIVE TRAFFIC VIEW</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl text-white font-medium mb-4">Protocol Layers</h2>
<p className="text-neutral-500">Full stack verification from physical uplink to application logic.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">

<div className="group relative bg-[#050505] border border-white/5 p-6 rounded hover:border-cyan-500/30 transition-colors">
<div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
<div className="text-xs text-neutral-600 mono-font mb-2">LAYER 1</div>
<div className="text-white font-bold mb-1">Physical</div>
<div className="text-xs text-neutral-400">Laser Optical Link</div>
<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" data-icon="lucide:zap" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>

<div className="group relative bg-[#050505] border border-white/5 p-6 rounded hover:border-cyan-500/30 transition-colors">
<div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-75"></div>
<div className="text-xs text-neutral-600 mono-font mb-2">LAYER 2</div>
<div className="text-white font-bold mb-1">Network</div>
<div className="text-xs text-neutral-400">Orbital Mesh Routing</div>
<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" data-icon="lucide:globe" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path></g></svg>
</div>
</div>

<div className="group relative bg-[#050505] border border-white/5 p-6 rounded hover:border-cyan-500/30 transition-colors">
<div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-150"></div>
<div className="text-xs text-neutral-600 mono-font mb-2">LAYER 3</div>
<div className="text-white font-bold mb-1">Transport</div>
<div className="text-xs text-neutral-400">Quantum Encryption</div>
<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" data-icon="lucide:shield-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
</div>

<div className="group relative bg-[#050505] border border-white/5 p-6 rounded hover:border-cyan-500/30 transition-colors">
<div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200"></div>
<div className="text-xs text-neutral-600 mono-font mb-2">LAYER 4</div>
<div className="text-white font-bold mb-1">Application</div>
<div className="text-xs text-neutral-400">Edge Compute API</div>
<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" data-icon="lucide:terminal" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8M4 17l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</div>
</section>

<section className="h-[300vh] bg-[#0A0A0A] border-y border-white/5 relative" id="developer-api">

<div className="sticky top-0 h-screen w-full overflow-hidden">
<div className="max-w-7xl mx-auto px-6 h-full flex flex-col lg:flex-row gap-16 items-center">

<div className="lg:w-1/2 h-full flex flex-col justify-center relative z-20">
<div className="flex items-center gap-2 mb-6">
<div className="px-2 py-0.5 rounded bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 text-[10px] font-bold uppercase tracking-wider">Developer API</div>
</div>
<h2 className="text-4xl md:text-5xl text-white font-medium mb-6 decrypt-target" data-value="Direct Neural Interface">Direct Neural Interface</h2>
<p className="text-neutral-400 mb-8 leading-relaxed max-w-md">
            Interact with the grid using our CLI or SDKs. Provision bandwidth, spawn satellite instances, and route encrypted packets with simple commands.
          </p>
<div className="flex flex-col gap-4">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded bg-neutral-800 flex items-center justify-center text-white shrink-0 mt-1">1</div>
<div>
<h4 className="text-white font-medium">Install CLI</h4>
<p className="text-sm text-neutral-500">npm install -g orbital-cli</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded bg-neutral-800 flex items-center justify-center text-white shrink-0 mt-1">2</div>
<div>
<h4 className="text-white font-medium">Authenticate</h4>
<p className="text-sm text-neutral-500">orbital auth --token=sk_live_...</p>
</div>
</div>
</div>
</div>

<div className="lg:w-1/2 w-full h-full relative flex items-center justify-center" id="api-cards-container">

<div className="api-card absolute w-full max-w-lg bg-[#050505] rounded-xl border border-white/10 overflow-hidden shadow-2xl transition-transform duration-700 ease-out" style={{zIndex: '10'}}>
<div className="bg-[#111] px-4 py-2 flex items-center gap-2 border-b border-white/5">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="ml-auto text-xs text-neutral-600 mono-font">bash — 80x24</div>
</div>
<div className="p-6 font-mono text-sm text-neutral-300">
<p className="mb-2"><span className="text-green-500">user@orbital</span>:<span className="text-blue-500">~</span>$ orbital connect --region=us-east</p>
<p className="mb-2 text-neutral-500">Initializing handshake...</p>
<p className="mb-2 text-neutral-500">Resolving sat_id: <span className="text-yellow-500">SAT-9942</span></p>
<p className="mb-2"><span className="text-cyan-400">✓ Link established (3ms)</span></p>
<div className="mt-2 flex items-center"><span className="text-green-500 mr-2">➜</span><span className="w-2 h-4 bg-white cursor-blink"></span></div>
</div>
</div>

<div className="api-card absolute w-full max-w-lg bg-[#080808] rounded-xl border border-cyan-500/30 overflow-hidden shadow-2xl transform translate-x-[120%] transition-transform duration-700 ease-out" style={{zIndex: '20'}}>
<div className="bg-[#111] px-4 py-2 flex items-center justify-between border-b border-white/5">
<span className="text-xs text-cyan-500 font-bold mono-font">JSON_RESPONSE</span>
<div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
</div>
<div className="p-6 font-mono text-sm text-cyan-100/80">
<pre>{
  "status": "connected",
  "node": "LEO-492",
  "latency": "4ms",
  "encryption": "QUANTUM-256",
  "throughput": "100GB/s"
}</pre>
</div>
</div>

<div className="api-card absolute w-full max-w-lg bg-[#050505] rounded-xl border border-emerald-500/30 overflow-hidden shadow-2xl transform translate-x-[120%] transition-transform duration-700 ease-out" style={{zIndex: '30'}}>
<div className="bg-emerald-900/10 px-4 py-2 flex items-center gap-2 border-b border-emerald-500/20">
<svg aria-hidden="true" data-icon="lucide:lock" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
<span className="text-xs text-emerald-500 font-bold mono-font">SECURE_CHANNEL</span>
</div>
<div className="p-6 flex flex-col items-center justify-center gap-4 py-12">
<div className="w-16 h-16 rounded-full border-2 border-emerald-500/50 flex items-center justify-center">
<svg aria-hidden="true" data-icon="lucide:shield-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<div className="text-center">
<h4 className="text-white font-bold">End-to-End Encrypted</h4>
<p className="text-xs text-neutral-500 mt-1">Keys managed via satellite hardware module</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden pricing-container" id="pricing">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-cyan-900/10 blur-[100px] rounded-full -z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl text-white font-medium mb-4 decrypt-target" data-value="Access Tiers">Access Tiers</h2>
<p className="text-neutral-400">Scale your bandwidth from atmospheric to deep space.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

<div className="book-wrapper">

<div className="book-inside">
<h4 className="text-white font-bold mb-4">Plan Details</h4>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 10TB Bandwidth</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Standard Routing</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> API Access</li>
</ul>
<button className="w-full py-3 rounded border border-white/10 text-white hover:bg-white hover:text-black transition-colors font-medium">Select Plan</button>
</div>

<div className="book-cover">
<div className="text-xs text-neutral-500 font-bold uppercase tracking-widest mb-4">Atmospheric</div>
<div className="text-3xl text-white font-bold mb-6">$499<span className="text-sm text-neutral-500 font-normal">/mo</span></div>
<p className="text-sm text-neutral-400">Hover to open specifications</p>
<div className="mt-auto flex justify-end">
<svg aria-hidden="true" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>

<div className="book-wrapper featured">

<div className="book-inside">
<h4 className="text-white font-bold mb-4">Plan Details</h4>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 100TB Bandwidth</li>
<li className="flex items-center gap-3 text-sm text-white"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Priority LEO Routing</li>
<li className="flex items-center gap-3 text-sm text-white"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Edge Functions</li>
</ul>
<button className="w-full py-3 rounded bg-cyan-600 text-white hover:bg-cyan-500 transition-colors font-medium shadow-[0_0_20px_rgba(6,182,212,0.3)]">Initialize</button>
</div>

<div className="book-cover">
<div className="absolute top-0 right-0 bg-cyan-500 text-black text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">Recommended</div>
<div className="text-xs text-cyan-400 font-bold uppercase tracking-widest mb-4">Stratospheric</div>
<div className="text-4xl text-white font-bold mb-6">$1,299<span className="text-sm text-neutral-500 font-normal">/mo</span></div>
<p className="text-sm text-neutral-400">Hover to open specifications</p>
<div className="mt-auto flex justify-end">
<svg aria-hidden="true" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>

<div className="book-wrapper">

<div className="book-inside">
<h4 className="text-white font-bold mb-4">Plan Details</h4>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Unlimited Bandwidth</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Dedicated Satellite</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 24/7 Mission Control</li>
</ul>
<button className="w-full py-3 rounded border border-white/10 text-white hover:bg-white hover:text-black transition-colors font-medium">Contact Sales</button>
</div>

<div className="book-cover">
<div className="text-xs text-neutral-500 font-bold uppercase tracking-widest mb-4">Orbital</div>
<div className="text-3xl text-white font-bold mb-6">Custom</div>
<p className="text-sm text-neutral-400">Hover to open specifications</p>
<div className="mt-auto flex justify-end">
<svg aria-hidden="true" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-gradient-to-b from-[#050505] to-black" id="testimonials">
<div className="max-w-7xl mx-auto px-6 text-center mb-10">
<h2 className="text-4xl text-white font-medium mb-4 decrypt-target" data-value="Transmission Logs">Transmission Logs</h2>
<p className="text-neutral-500">Encrypted testimonials from the deep web.</p>
</div>

<div className="tornado-container flex justify-center items-center h-[800px]">
<div className="tornado-ring">

<div className="tornado-card t-card-1">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover grayscale opacity-80" src="https://i.pravatar.cc/150?img=11"/>
</div>
<div>
<div className="text-sm font-bold text-white">Commander Shepard</div>
<div className="text-xs text-cyan-500 mono-font">SSV NORMANDY</div>
</div>
</div>
<p className="text-sm text-neutral-300 leading-relaxed">"The latency on the Orbital grid is practically non-existent. We stream telemetry from the outer rim without a single packet drop."</p>
<div className="mt-4 pt-4 border-t border-white/5 flex justify-between text-[10px] text-neutral-500 mono-font">
<span>SECURE_CHANNEL</span>
<span>VERIFIED</span>
</div>
</div>

<div className="tornado-card t-card-2">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover grayscale opacity-80" src="https://i.pravatar.cc/150?img=3"/>
</div>
<div>
<div className="text-sm font-bold text-white">Dr. Aris Arasaka</div>
<div className="text-xs text-cyan-500 mono-font">NETWATCH</div>
</div>
</div>
<p className="text-sm text-neutral-300 leading-relaxed">"Security is paramount when dealing with rogue AIs. Orbital's quantum encryption layer is the only thing we trust."</p>
<div className="mt-4 pt-4 border-t border-white/5 flex justify-between text-[10px] text-neutral-500 mono-font">
<span>SECURE_CHANNEL</span>
<span>VERIFIED</span>
</div>
</div>

<div className="tornado-card t-card-3">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover grayscale opacity-80" src="https://i.pravatar.cc/150?img=59"/>
</div>
<div>
<div className="text-sm font-bold text-white">Unit 734</div>
<div className="text-xs text-cyan-500 mono-font">AUTONOMOUS COLLECTIVE</div>
</div>
</div>
<p className="text-sm text-neutral-300 leading-relaxed">"Uplink successful. Throughput exceeds terrestrial limitations by 400%. Logic execution at edge nodes confirmed."</p>
<div className="mt-4 pt-4 border-t border-white/5 flex justify-between text-[10px] text-neutral-500 mono-font">
<span>SECURE_CHANNEL</span>
<span>VERIFIED</span>
</div>
</div>

<div className="tornado-card t-card-4">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover grayscale opacity-80" src="https://i.pravatar.cc/150?img=8"/>
</div>
<div>
<div className="text-sm font-bold text-white">Sarah Connor</div>
<div className="text-xs text-cyan-500 mono-font">RESISTANCE</div>
</div>
</div>
<p className="text-sm text-neutral-300 leading-relaxed">"They can't shut this network down. It's decentralized, resilient, and fast. Exactly what we needed."</p>
<div className="mt-4 pt-4 border-t border-white/5 flex justify-between text-[10px] text-neutral-500 mono-font">
<span>SECURE_CHANNEL</span>
<span>VERIFIED</span>
</div>
</div>

<div className="tornado-card t-card-5">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover grayscale opacity-80" src="https://i.pravatar.cc/150?img=33"/>
</div>
<div>
<div className="text-sm font-bold text-white">Hiro Protagonist</div>
<div className="text-xs text-cyan-500 mono-font">METAVERSE COURIER</div>
</div>
</div>
<p className="text-sm text-neutral-300 leading-relaxed">"Delivering heavy data payloads used to be a headache. With the Orbital API, I just point and shoot."</p>
<div className="mt-4 pt-4 border-t border-white/5 flex justify-between text-[10px] text-neutral-500 mono-font">
<span>SECURE_CHANNEL</span>
<span>VERIFIED</span>
</div>
</div>

<div className="tornado-card t-card-6">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover grayscale opacity-80" src="https://i.pravatar.cc/150?img=12"/>
</div>
<div>
<div className="text-sm font-bold text-white">Elon M.</div>
<div className="text-xs text-cyan-500 mono-font">MARS COLONY 1</div>
</div>
</div>
<p className="text-sm text-neutral-300 leading-relaxed">"The interplanetary lag is finally manageable. We are using Orbital for all colony logistics."</p>
<div className="mt-4 pt-4 border-t border-white/5 flex justify-between text-[10px] text-neutral-500 mono-font">
<span>SECURE_CHANNEL</span>
<span>VERIFIED</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/10 pt-20 pb-10 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_10px_#06b6d4]"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-cyan-500 blur-[20px] opacity-50 pointer-events-none"></div>
<div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
<div className="max-w-lg">
<div className="flex items-center gap-2 mb-6">
<span className="brand-font bg-center text-xl font-bold text-white tracking-tight bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a6b29e6-f166-4901-9838-5ff8b5b7ac9b_320w.png)] bg-cover pt-6 pr-12 pb-6 pl-12"></span>
</div>
<h2 className="text-4xl font-medium text-white mb-6">Ready to leave the atmosphere?</h2>
<div className="flex gap-4">
<input className="bg-white/5 border border-white/10 px-4 py-3 text-sm w-64 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-neutral-600" placeholder="Enter signal frequency (email)" type="email"/>
<button className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 text-sm font-bold uppercase transition-colors">Connect</button>
</div>
</div>
<div className="flex gap-16">
<div className="flex flex-col gap-4">
<h4 className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-2">Protocol</h4>
<a className="text-neutral-300 hover:text-cyan-400 transition-colors text-sm" href="#">Documentation</a>
<a className="text-neutral-300 hover:text-cyan-400 transition-colors text-sm" href="#">API Reference</a>
<a className="text-neutral-300 hover:text-cyan-400 transition-colors text-sm" href="#">Node Status</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-2">Corporation</h4>
<a className="text-neutral-300 hover:text-cyan-400 transition-colors text-sm" href="#">About</a>
<a className="text-neutral-300 hover:text-cyan-400 transition-colors text-sm" href="#">Careers</a>
<a className="text-neutral-300 hover:text-cyan-400 transition-colors text-sm" href="#">Legal</a>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 mono-font">
<p>© 2088 ORBITAL INDUSTRIES. ALL RIGHTS RESERVED.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<span>SECURED BY QUANTUM-256</span>
<span>LOCATION: LOW EARTH ORBIT</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
