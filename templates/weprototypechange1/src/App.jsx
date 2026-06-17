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



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


            !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
          


      // Scroll Reveal Interaction
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('active');
              }
          });
      }, observerOptions);

      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

      // Subtle Mouse Parallax for Background Orbs
      document.addEventListener('mousemove', (e) => {
          const orbs = document.querySelectorAll('.orb');
          const x = e.clientX / window.innerWidth;
          const y = e.clientY / window.innerHeight;

          orbs.forEach((orb, index) => {
              const speed = orb.getAttribute('data-speed');
              const xOffset = (window.innerWidth - e.clientX * speed) / 100;
              const yOffset = (window.innerHeight - e.clientY * speed) / 100;

              orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 hue-rotate-180 brightness-125" data-alpha-mask="47" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 47%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 47%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ty3N7ZPaIU7KlWixQFIc"></div>

</div>
</div>

<div className="orb-canvas" id="parallax-bg" style={{background: 'transparent'}}>
<div className="orb orb-1" data-speed="2" style={{transform: 'translate(2.56px, 10.45px)'}}></div>
<div className="orb orb-2" data-speed="-3" style={{transform: 'translate(32.11px, 10.55px)'}}></div>
<div className="orb orb-3" data-speed="1" style={{transform: 'translate(8.47px, 10.47px)'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 nav-glass transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-lg font-medium tracking-tight-custom text-gray-900 flex items-center gap-2 font-geist" href="#" style={{}}>
<iconify-icon className="text-[#f5821f] text-xl" icon="solar:layers-minimalistic-linear" style={{}}></iconify-icon>
          We Prototype Change
        </a>
<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-gray-600 hover:text-[#f5821f] transition-colors font-geist" href="#what-we-mean" style={{}}>
            What we mean
          </a>
<a className="text-sm font-medium text-gray-600 hover:text-[#f5821f] transition-colors font-geist" href="#services" style={{}}>
            Services
          </a>
<a className="text-sm font-medium text-gray-600 hover:text-[#f5821f] transition-colors font-geist" href="#examples" style={{}}>
            Examples
          </a>
<a className="text-sm font-medium text-gray-600 hover:text-[#f5821f] transition-colors font-geist" href="#about" style={{}}>
            About
          </a>
<a className="text-sm font-medium text-gray-600 hover:text-[#f5821f] transition-colors font-geist" href="#thinking" style={{}}>
            Thinking
          </a>
</div>
<a className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-full btn-primary font-geist" href="#contact">
          Start a conversation
        </a>

<button className="lg:hidden text-gray-900 text-2xl" style={{}}>
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<section className="min-h-screen flex pt-20 relative items-center justify-center">
<div className="absolute inset-0" data-container-bg="true">
<div className="aura-background-component top-0 w-full absolute h-full">
<div className="absolute w-full h-full left-0 top-0" data-us-project="ZHhDKfVqqu8PKOSMwfuA"></div>

</div>
</div>
<div className="reveal active text-center max-w-5xl mr-auto ml-auto pr-6 pl-6 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-100 bg-orange-50/50 mb-8" style={{}}>
<span className="w-2 h-2 rounded-full bg-[#f5821f]"></span>
<span className="text-xs font-medium text-orange-600 uppercase tracking-wide font-geist" style={{}}>
            Consultancy for the uncertain
          </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl text-gray-900 tracking-tighter-custom leading-[1.1] mb-8 font-playfair font-bold" style={{}}>
          We Prototype
          <br/>
<span className="text-[#f5821f] relative inline-block font-playfair font-bold" style={{}}>
            Change
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#f5821f] opacity-30" preserveaspectratio="none" style={{}} viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
</span>
</h1>
<p className="md:text-2xl leading-relaxed text-lg font-medium text-gray-800 font-playfair max-w-2xl mb-6">
          The world is always moving. So should you.
        </p>
<p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed font-geist" style={{}}>
          We help organisations turn uncertainty into action — by prototyping
          change before it’s too late.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="px-8 py-3.5 rounded-full text-base font-medium btn-primary w-full sm:w-auto font-geist" href="#contact" style={{}}>
            Start a conversation
          </a>
<a className="px-8 py-3.5 rounded-full text-base font-medium text-gray-700 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all w-full sm:w-auto flex items-center justify-center gap-2 group font-geist" href="#how-it-works" style={{}}>
            See how it works
            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<iconify-icon className="text-2xl text-gray-400" icon="solar:mouse-minimalistic-linear" style={{}}></iconify-icon>
</div>
</section>

<section className="py-24 md:py-32 border-t border-gray-100" id="what-we-mean" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div className="reveal active">
<h2 className="text-4xl md:text-5xl text-gray-900 tracking-tighter-custom leading-tight mb-8 font-playfair font-medium" style={{}}>
              Change rarely fails because of ambition.
            </h2>
</div>
<div className="reveal delay-100 active">
<p className="md:text-2xl leading-relaxed text-xl font-medium text-gray-600 font-playfair mb-8" style={{transition: 'outline 0.1s ease-in-out'}}>
              It fails because it stays abstract for too long.
            </p>
<div className="pl-6 border-l-2 border-[#f5821f]">
<p className="text-lg text-gray-800 font-medium leading-relaxed font-geist" style={{}}>
                We prototype change — so strategy becomes tangible, people stay
                engaged, and delivery becomes reliable.
              </p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 reveal active">

<div className="group p-8 rounded-2xl bg-gray-50/50 border border-gray-100 card-hover" style={{}}>
<div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-6 text-gray-400 group-hover:text-[#f5821f] group-hover:border-[#f5821f] transition-colors" style={{}}>
<iconify-icon className="text-xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight font-geist" style={{}}>
              Action beats alignment
            </h3>
<p className="text-gray-500 leading-relaxed text-sm font-geist" style={{}}>
              Momentum is built by making, not debating. We move fast to create
              evidence.
            </p>
</div>

<div className="group p-8 rounded-2xl bg-gray-50/50 border border-gray-100 card-hover" style={{}}>
<div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-6 text-gray-400 group-hover:text-[#f5821f] group-hover:border-[#f5821f] transition-colors" style={{}}>
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight font-geist" style={{}}>
              People drive change
            </h3>
<p className="text-gray-500 leading-relaxed text-sm font-geist" style={{}}>
              Real progress happens when teams are involved early, not just told
              what to do.
            </p>
</div>

<div className="group p-8 rounded-2xl bg-gray-50/50 border border-gray-100 card-hover" style={{}}>
<div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-6 text-gray-400 group-hover:text-[#f5821f] group-hover:border-[#f5821f] transition-colors" style={{}}>
<iconify-icon className="text-xl" icon="solar:ruler-pen-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight font-geist" style={{}}>
              Delivery must be designed
            </h3>
<p className="text-gray-500 leading-relaxed text-sm font-geist" style={{}}>
              Execution doesn’t happen by accident — it’s engineered from day
              one.
            </p>
</div>
</div>
</div>
</section>

<section className="border-y bg-gray-50 border-gray-200 pt-24 pb-24" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal active">
<span className="text-sm font-semibold text-[#f5821f] tracking-widest uppercase mb-2 block font-geist" style={{}}>
            Our Offerings
          </span>
<h2 className="text-3xl md:text-4xl text-gray-900 tracking-tighter-custom font-playfair font-medium" style={{}}>
            What we do
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="hover:shadow-lg transition-shadow duration-300 reveal active bg-white border-gray-200 border rounded-xl p-8 flex flex-col h-full">
<div className="flex mb-6 items-center justify-between">
<h3 className="text-xl font-semibold text-gray-900 tracking-tight font-geist">
                Innovation Salons
              </h3>
<svg className="text-2xl text-gray-300" data-icon-set="solar" data-solar="chat-round-line-linear" height="24" style={{color: 'rgb(209, 213, 219)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeWidth="1.5">
<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z"></path>
<path d="M8 10.5h8M8 14h5.5" strokeLinecap="round"></path>
</g>
</svg>
</div>
<p className="leading-relaxed text-sm text-gray-500 font-geist mb-6 flex-grow">
              Curated, senior-level sessions to explore challenges and shape
              direction — fast.
            </p>
<div className="h-px w-full bg-gray-100 mb-6" style={{}}></div>
<a className="inline-flex items-center text-sm font-medium text-[#f5821f] hover:text-[#d96e12] transition-colors group font-geist w-fit" href="#">
              Learn more
              <iconify-icon className="ml-2 text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300 reveal delay-100 relative overflow-hidden active flex flex-col h-full" style={{}}>
<div className="absolute top-0 right-0 w-16 h-16 bg-orange-50 rounded-bl-full -z-10" style={{}}></div>
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-semibold text-gray-900 tracking-tight font-geist" style={{}}>
                Hands-on Workshops
              </h3>
<iconify-icon className="text-[#f5821f] text-2xl" icon="solar:hand-stars-linear" style={{}}></iconify-icon>
</div>
<p className="text-gray-500 text-sm leading-relaxed mb-6 font-geist flex-grow" style={{}}>
              Short engagements that turn ideas into prototypes, frameworks, or
              tested concepts.
            </p>
<div className="h-px w-full bg-gray-100 mb-6" style={{}}></div>
<a className="inline-flex items-center text-sm font-medium text-[#f5821f] hover:text-[#d96e12] transition-colors group font-geist w-fit" href="#">
              Learn more
              <iconify-icon className="ml-2 text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300 reveal delay-200 active flex flex-col h-full" style={{}}>
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-semibold text-gray-900 tracking-tight font-geist" style={{}}>
                Capability Training
              </h3>
<iconify-icon className="text-gray-300 text-2xl" icon="solar:diploma-verified-linear" style={{}}></iconify-icon>
</div>
<p className="text-gray-500 text-sm leading-relaxed mb-6 font-geist flex-grow" style={{}}>
              Practical training that enables teams to lead change themselves.
            </p>
<div className="h-px w-full bg-gray-100 mb-6" style={{}}></div>
<a className="inline-flex items-center text-sm font-medium text-[#f5821f] hover:text-[#d96e12] transition-colors group font-geist w-fit" href="#">
              Learn more
              <iconify-icon className="ml-2 text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24" id="examples">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="reveal active">
<h2 className="text-3xl md:text-4xl text-gray-900 tracking-tighter-custom mb-6 font-playfair font-medium" style={{}}>
            Example engagements
          </h2>
<p className="leading-relaxed text-lg text-gray-900 font-geist mb-8">
            Typical engagements run from a few days to a few weeks. We
            prioritize velocity over volume.
          </p>
<a className="text-[#f5821f] font-medium inline-flex items-center gap-2 hover:gap-3 transition-all font-geist" href="#contact" style={{}}>
            Discuss your project
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="space-y-6 reveal delay-100 active">
<div className="flex gap-4 items-start">
<div className="mt-1 w-6 h-6 rounded-full bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-base" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-medium text-gray-900 font-geist" style={{}}>
                Stress-testing Operating Models
              </h4>
<p className="text-gray-500 text-sm mt-1 font-geist" style={{}}>
                Leadership teams testing new structures in days, not months.
              </p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 w-6 h-6 rounded-full bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-base" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-medium text-gray-900 font-geist" style={{}}>
                Prototyping AI Services
              </h4>
<p className="text-gray-500 text-sm mt-1 font-geist" style={{}}>
                Product teams validating AI-enabled concepts before building.
              </p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 w-6 h-6 rounded-full bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-base" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-medium text-gray-900 font-geist" style={{}}>
                Roadmap Alignment
              </h4>
<p className="text-gray-500 text-sm mt-1 font-geist" style={{}}>
                Transformation teams aligning delivery around tangible
                milestones.
              </p>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 border-t border-gray-100 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6 text-center mb-16 reveal">
<p className="uppercase text-sm font-semibold text-orange-500 tracking-widest font-geist">
          Trusted by teams at leading companies
        </p>
</div>
<div className="relative w-full mask-linear-fade">
<div className="flex w-max animate-marquee gap-24 items-center">
<div className="flex gap-24 shrink-0 items-center">
<div className="w-48 h-16 bg-contain bg-no-repeat bg-center invert opacity-30 hover:opacity-100 transition-opacity duration-300" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e5f2922d-4fb6-4f7c-8795-cd9ba63105a4_1600w.png\')'}}></div>
<div className="w-48 h-16 bg-contain bg-no-repeat bg-center invert opacity-30 hover:opacity-100 transition-opacity duration-300" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92287bc0-bc70-4864-bf05-a89c1b99a218_1600w.png\')'}}></div>
<div className="w-48 h-16 bg-contain bg-no-repeat bg-center invert opacity-30 hover:opacity-100 transition-opacity duration-300" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8284c62f-bfed-4d35-aaa2-956d0a8969b3_1600w.png\')'}}></div>
<div className="w-36 h-16 bg-contain bg-no-repeat bg-center invert opacity-30 hover:opacity-100 transition-opacity duration-300" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3764a6eb-78e1-495f-9143-c85a648446c4_1600w.png\')'}}></div>
<div className="w-36 h-16 bg-contain bg-no-repeat bg-center invert opacity-30 hover:opacity-100 transition-opacity duration-300" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dea31d52-7076-423f-bace-53eeec3014d3_1600w.png\')'}}></div>
<div className="w-48 h-16 bg-contain bg-no-repeat bg-center invert opacity-30 hover:opacity-100 transition-opacity duration-300" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b16a9cf6-6be1-4d0d-bc63-07a471092998_1600w.png\')'}}></div>
</div>
<div className="flex gap-24 shrink-0 items-center">
<div className="w-48 h-16 bg-contain bg-no-repeat bg-center invert opacity-30 hover:opacity-100 transition-opacity duration-300" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e5f2922d-4fb6-4f7c-8795-cd9ba63105a4_1600w.png\')'}}></div>
<div className="w-48 h-16 bg-contain bg-no-repeat bg-center invert opacity-30 hover:opacity-100 transition-opacity duration-300" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92287bc0-bc70-4864-bf05-a89c1b99a218_1600w.png\')'}}></div>
<div className="w-48 h-16 bg-contain bg-no-repeat bg-center invert opacity-30 hover:opacity-100 transition-opacity duration-300" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8284c62f-bfed-4d35-aaa2-956d0a8969b3_1600w.png\')'}}></div>
<div className="w-36 h-16 bg-contain bg-no-repeat bg-center invert opacity-30 hover:opacity-100 transition-opacity duration-300" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3764a6eb-78e1-495f-9143-c85a648446c4_1600w.png\')'}}></div>
<div className="w-36 h-16 bg-contain bg-no-repeat bg-center invert opacity-30 hover:opacity-100 transition-opacity duration-300" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dea31d52-7076-423f-bace-53eeec3014d3_1600w.png\')'}}></div>
<div className="w-48 h-16 bg-contain bg-no-repeat bg-center invert opacity-30 hover:opacity-100 transition-opacity duration-300" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b16a9cf6-6be1-4d0d-bc63-07a471092998_1600w.png\')'}}></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#f5821f] text-white overflow-hidden relative" id="how-it-works">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[150px] opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="text-3xl md:text-4xl tracking-tighter-custom mb-16 text-center reveal active font-playfair font-medium">
          How it works
        </h2>
<div className="grid grid-cols-1 md:grid-cols-5 gap-4 reveal active">

<div className="relative group">
<div className="group-hover:text-white transition-colors text-6xl font-medium text-white/30 font-playfair mb-4">
              01
            </div>
<h3 className="text-2xl font-semibold font-geist mb-2">Frame</h3>
<p className="text-sm text-orange-100 font-geist">
              Define the core challenge.
            </p>
</div>

<div className="relative group">
<div className="group-hover:text-white transition-colors text-6xl font-medium text-white/30 font-playfair mb-4">
              02
            </div>
<h3 className="text-2xl font-semibold font-geist mb-2">Prototype</h3>
<p className="text-sm text-orange-100 font-geist">
              Build a tangible future state.
            </p>
</div>

<div className="relative group">
<div className="group-hover:text-white transition-colors text-6xl font-medium text-white/30 font-playfair mb-4">
              03
            </div>
<h3 className="text-2xl font-semibold font-geist mb-2">Test</h3>
<p className="text-sm text-orange-100 font-geist">
              Validate with real people.
            </p>
</div>

<div className="relative group">
<div className="group-hover:text-white transition-colors text-6xl font-medium text-white/30 font-playfair mb-4">
              04
            </div>
<h3 className="text-2xl font-semibold font-geist mb-2">Refine</h3>
<p className="text-sm text-orange-100 font-geist">
              Iterate on what actually works.
            </p>
</div>

<div className="relative group">
<div className="group-hover:text-white transition-colors text-6xl font-medium text-white/30 font-playfair mb-4">
              05
            </div>
<h3 className="text-2xl font-semibold font-geist mb-2">Support</h3>
<p className="text-sm text-orange-100 font-geist">
              Help delivery teams execute.
            </p>
</div>
</div>
</div>
</section>

<section className="md:py-32 pt-24 pb-24" id="about">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-7 reveal active">
<span className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6 block font-geist" style={{}}>
            About us
          </span>
<h2 className="text-3xl text-gray-900 tracking-tight mb-6 font-playfair font-medium" style={{}}>
            A boutique consultancy built by industry veterans.
          </h2>
<p className="text-gray-500 leading-relaxed mb-8 font-geist" style={{}}>
            We’ve led change from the inside — and we know what it takes to make
            it stick. We are practitioners, not career advisors.
          </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-gray-600 text-sm font-geist" style={{}}>
<svg className="text-orange-500 text-lg w-[18px] h-[18px]" data-icon-replaced="true" data-icon-set="solar" data-solar="global-linear" height="18" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" stroke="currentColor" strokeWidth="1.5">
<path className="" d="M22 12a10 10 0 1 1-20.001 0A10 10 0 0 1 22 12Z"></path>
<path className="" d="M16 12c0 1.313-.104 2.614-.305 3.827c-.2 1.213-.495 2.315-.867 3.244c-.371.929-.812 1.665-1.297 2.168c-.486.502-1.006.761-1.531.761s-1.045-.259-1.53-.761c-.486-.503-.927-1.24-1.298-2.168c-.372-.929-.667-2.03-.868-3.244A23.6 23.6 0 0 1 8 12c0-1.313.103-2.614.304-3.827s.496-2.315.868-3.244c.371-.929.812-1.665 1.297-2.168C10.955 2.26 11.475 2 12 2s1.045.259 1.53.761c.486.503.927 1.24 1.298 2.168c.372.929.667 2.03.867 3.244C15.897 9.386 16 10.687 16 12Z"></path>
<path d="M2 12h20" strokeLinecap="round"></path>
</g>
</svg>
              A global network across multiple countries
            </li>
<li className="flex items-center gap-3 text-gray-600 text-sm font-geist" style={{}}>
<svg className="text-orange-500 text-lg w-[18px] h-[18px]" data-icon-replaced="true" data-icon-set="solar" data-solar="buildings-linear" height="18" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" stroke="currentColor" strokeWidth="1.5">
<path d="M22 22H2" strokeLinecap="round"></path>
<path d="M21 22V6c0-1.886 0-2.828-.586-3.414S18.886 2 17 2h-2c-1.886 0-2.828 0-3.414.586c-.472.471-.564 1.174-.582 2.414"></path>
<path className="" d="M15 22V9c0-1.886 0-2.828-.586-3.414S12.886 5 11 5H7c-1.886 0-2.828 0-3.414.586S3 7.114 3 9v13"></path>
<path className="" d="M9 22v-3M6 8h6m-6 3h6m-6 3h6" strokeLinecap="round"></path>
</g>
</svg>
              Senior experience inside large, complex organisations
            </li>
</ul>
</div>

<div className="lg:col-span-5 reveal delay-100 active">
<div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 h-full flex flex-col justify-center" style={{}}>
<span className="text-sm font-semibold text-[#f5821f] uppercase tracking-widest mb-6 block font-geist" style={{}}>
              Our Point of View
            </span>
<div className="opacity-100 space-y-1" style={{maskImage: 'linear-gradient(200deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(200deg, transparent, black 0%, black 100%, transparent)'}}>
<p className="text-xl font-medium text-gray-900 font-geist" style={{}}>
                Change shouldn’t feel theoretical.
              </p>
<p className="text-xl font-medium text-gray-800 font-geist opacity-80">
                It should feel inevitable.
              </p>
<p className="text-xl font-medium text-gray-800 opacity-60 font-geist" style={{}}>
                Prototypes create clarity.
              </p>
<p className="text-xl font-medium text-gray-800 opacity-40 font-geist" style={{}}>
                Clarity creates confidence.
              </p>
<p className="text-xl font-medium text-gray-800 opacity-20 font-geist" style={{}}>
                Confidence drives delivery.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-gray-100 border-t pt-24 pb-24" id="thinking">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12 reveal active">
<div className="">
<h2 className="text-3xl text-gray-900 tracking-tight mb-2 font-playfair font-medium" style={{}}>
              Latest Thinking
            </h2>
<p className="text-gray-500 font-geist" style={{}}>
              Short perspectives on action, people, and delivery.
            </p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-[#f5821f] hover:text-orange-700 transition-colors font-geist" href="#" style={{}}>
            Read the latest
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal active">

<a className="group block" href="#">
<div className="bg-gray-100 h-48 rounded-xl mb-4 overflow-hidden relative" style={{}}>
<div className="bg-gradient-to-tr from-orange-100 to-white opacity-50 absolute top-0 right-0 bottom-0 left-0">
<img alt="Container background" className="opacity-100 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/59cf146e-5467-4bb3-a897-131fcff4364b_3840w.webp"/>
</div>
<div className="absolute bottom-4 left-4 p-2 bg-white/90 backdrop-blur rounded-lg shadow-sm">
<iconify-icon className="text-[#f5821f]" icon="solar:book-linear" style={{}}></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#f5821f] transition-colors font-geist" style={{}}>
              Prototyping change: a practical playbook
            </h3>
<p className="text-gray-500 text-sm line-clamp-2 font-geist" style={{}}>
              Why documentation kills momentum and how to fix it.
            </p>
</a>

<a className="group block" href="#">
<div className="bg-gray-100 h-48 rounded-xl mb-4 overflow-hidden relative" style={{}}>
<div className="bg-gradient-to-bl from-gray-200 to-white opacity-50 absolute top-0 right-0 bottom-0 left-0">
<img alt="Container background" className="opacity-100 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0f87d45-2825-45f2-9e7a-790b267b0b1d_3840w.webp"/>
</div>
<div className="absolute bottom-4 left-4 p-2 bg-white/90 backdrop-blur rounded-lg shadow-sm">
<iconify-icon className="text-[#f5821f]" icon="solar:route-linear" style={{}}></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#f5821f] transition-colors font-geist" style={{}}>
              Designing delivery, not just strategy
            </h3>
<p className="text-gray-500 text-sm line-clamp-2 font-geist" style={{}}>
              How to bridge the gap between slide decks and reality.
            </p>
</a>

<a className="group block" href="#">
<div className="bg-gray-100 h-48 rounded-xl mb-4 overflow-hidden relative" style={{}}>
<div className="bg-gradient-to-br from-orange-50 to-gray-100 opacity-50 absolute top-0 right-0 bottom-0 left-0">
<img alt="Container background" className="absolute inset-0 w-full h-full object-cover" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ba91017e-d4da-48a7-8944-85fa3787325f_3840w.webp"/>
</div>
<div className="absolute bottom-4 left-4 p-2 bg-white/90 backdrop-blur rounded-lg shadow-sm">
<iconify-icon className="text-[#f5821f]" icon="solar:wind-linear" style={{}}></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#f5821f] transition-colors font-geist" style={{}}>
              Building momentum under uncertainty
            </h3>
<p className="text-gray-500 text-sm line-clamp-2 font-geist" style={{}}>
              Strategies for leaders when the destination isn't clear.
            </p>
</a>
</div>
</div>
</section>

<section className="overflow-hidden pt-32 pb-32 relative" id="contact">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-50/50 pointer-events-none" style={{}}></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal active">
<h2 className="text-4xl md:text-6xl text-gray-900 tracking-tighter-custom mb-6 font-playfair font-medium" style={{}}>
          Let’s prototype what’s next.
        </h2>
<p className="text-xl text-gray-500 font-light mb-10 max-w-2xl mx-auto font-geist" style={{}}>
          If you’re navigating change — we can help you make it tangible.
        </p>
<div className="flex flex-col items-center gap-6">
<button className="px-10 py-4 rounded-full text-lg font-medium btn-primary shadow-xl shadow-orange-200/50 font-geist" style={{}}>
            Get in touch
          </button>
<div className="flex items-center gap-2 text-sm text-gray-400 font-geist" style={{}}>
<iconify-icon className="text-base" icon="solar:letter-linear"></iconify-icon>
            hello@weprototypechange.com
          </div>
</div>
</div>
</section>

<footer className="py-12 border-t border-gray-100 bg-white relative z-20" style={{}}>
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-300" icon="solar:layers-minimalistic-linear" style={{}}></iconify-icon>
<span className="text-sm font-medium text-gray-500 font-geist" style={{}}>
            © We Prototype Change
          </span>
</div>
<div className="flex items-center gap-6">
<a className="text-gray-400 hover:text-[#f5821f] transition-colors" href="#" style={{}}>
<iconify-icon icon="brandico:linkedin-rect" width="20"></iconify-icon>
</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-geist" href="#" style={{}}>
            Privacy Policy
          </a>
</div>
</div>
</footer>


    </>
  );
}
