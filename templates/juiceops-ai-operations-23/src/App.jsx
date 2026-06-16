import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Initialize Lucide Icons
      lucide.createIcons();

      // Intersection Observer for scroll animations
      document.addEventListener('DOMContentLoaded', () => {
          const observerOptions = {
              root: null,
              rootMargin: '0px',
              threshold: 0.15
          };

          const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('is-visible');
                  }
              });
          }, observerOptions);

          const animElements = document.querySelectorAll('.reveal-up, .reveal-fade, .split-line');
          animElements.forEach(el => observer.observe(el));

          // Parallax effect for background glow
          const glow = document.getElementById('ambient-glow');
          window.addEventListener('scroll', () => {
              const scrolled = window.pageYOffset;
              if(glow) {
                  glow.style.transform = `translate(33%, -33%) translateY(${scrolled * 0.15}px)`;
              }
          });

          // Horizontal Sticky Scroll logic for Capabilities section (Desktop Only)
          const hzWrapper = document.getElementById('capabilities-wrapper');
          const hzTrack = document.getElementById('capabilities-track');

          function handleHorizontalScroll() {
              if (!hzWrapper || !hzTrack) return;

              if (window.innerWidth < 1024) {
                  hzTrack.style.transform = 'none';
                  hzWrapper.style.height = 'auto';
                  return;
              }

              hzWrapper.style.height = '350vh';

              const rect = hzWrapper.getBoundingClientRect();
              const vh = window.innerHeight;

              if (rect.top <= 0 && rect.bottom >= vh) {
                  const scrollProgress = Math.abs(rect.top) / (rect.height - vh);
                  const containerOffset = (window.innerWidth - 1400) > 0 ? (window.innerWidth - 1400) / 2 + 24 : 24;
                  const maxTranslate = hzTrack.scrollWidth - window.innerWidth + containerOffset;
                  hzTrack.style.transform = `translateX(-${scrollProgress * maxTranslate}px)`;
              } else if (rect.top > 0) {
                  hzTrack.style.transform = `translateX(0px)`;
              } else {
                  const containerOffset = (window.innerWidth - 1400) > 0 ? (window.innerWidth - 1400) / 2 + 24 : 24;
                  const maxTranslate = hzTrack.scrollWidth - window.innerWidth + containerOffset;
                  hzTrack.style.transform = `translateX(-${maxTranslate}px)`;
              }
          }

          window.addEventListener('scroll', handleHorizontalScroll, { passive: true });
          window.addEventListener('resize', handleHorizontalScroll);

          setTimeout(handleHorizontalScroll, 100);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 right-0 w-[800px] h-[800px] bg-orange-900/10 rounded-full blur-[120px] pointer-events-none -z-20 transform translate-x-1/3 -translate-y-1/3 parallax-bg" id="ambient-glow"></div>

<div className="fixed top-0 right-0 w-[120vw] h-[120vh] pointer-events-none -z-10 overflow-hidden transform translate-x-[10%] -translate-y-[10%]">
<div className="absolute w-[200%] h-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform -rotate-[38deg]">
<div className="absolute top-[5%] right-[25%] w-[120px] h-[150%] bg-gradient-to-b from-transparent via-orange-600/40 to-transparent blur-[24px]"></div>
<div className="absolute top-[-5%] right-[32%] w-[180px] h-[150%] bg-gradient-to-b from-transparent via-[#ff6a00]/50 to-transparent blur-[32px]"></div>
<div className="absolute top-[15%] right-[42%] w-[140px] h-[150%] bg-gradient-to-b from-transparent via-orange-500/30 to-transparent blur-[20px]"></div>
<div className="absolute top-[0%] right-[50%] w-[200px] h-[150%] bg-gradient-to-b from-transparent via-red-800/40 to-transparent blur-[40px]"></div>
</div>
</div>

<header className="flex z-50 w-full pt-8 pr-6 pl-6 relative justify-center sticky top-0 reveal-fade is-visible">
<div className="flex w-full max-w-[1400px] items-center justify-between">
<a className="w-12 h-12 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 hover:bg-white/10 transition duration-300" href="#">
<span className="text-xl font-normal tracking-tight text-white">JO</span>
</a>
<nav className="hidden lg:flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-8 py-3.5 gap-6 text-lg font-light text-neutral-400 shadow-xl shadow-black/50">
<a className="hover:text-white transition duration-200" href="#about">
            About
          </a>
<div className="w-1 h-1 bg-neutral-600 rounded-full"></div>
<a className="hover:text-white transition duration-200" href="#capabilities">
            Capabilities
          </a>
<div className="w-1 h-1 bg-neutral-600 rounded-full"></div>
<a className="hover:text-white transition duration-200" href="#process">
            Process
          </a>
<div className="w-1 h-1 bg-neutral-600 rounded-full"></div>
<a className="hover:text-white transition duration-200" href="#outcomes">
            Outcomes
          </a>
</nav>
<a className="text-lg font-normal text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md rounded-full px-7 py-3.5 transition duration-300" href="#cta">
          BOOK CALL
        </a>
</div>
</header>

<main className="w-full max-w-[1400px] mx-auto px-6 flex-grow flex flex-col justify-center relative z-10 pb-24 lg:pb-12 pt-16 lg:pt-8 min-h-[90vh]">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-end h-full">

<div className="lg:col-span-7 flex flex-col lg:pt-24 h-full pt-12 pb-12 justify-center">
<div className="max-w-3xl">
<h1 className="text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.05] mb-12 flex flex-col items-start">
<span className="split-line is-visible">
<span>Your ops team</span>
</span>
<span className="split-line is-visible">
<span className="delay-100">shouldn’t be</span>
</span>
<span className="split-line is-visible">
<span className="delay-200">running on empty.</span>
</span>
</h1>
<div className="flex flex-wrap items-center gap-5 reveal-up is-visible delay-300">
<a className="bg-white text-black px-9 py-4 rounded-full text-xl font-normal hover:bg-neutral-200 transition duration-300 flex items-center gap-2" href="#cta">
                → Book a Strategy Call
              </a>
<a className="bg-transparent text-white border border-white/20 px-9 py-4 rounded-full text-xl font-normal hover:bg-white/5 transition duration-300" href="#process">
                → See How It Works
              </a>
</div>
</div>

<div className="mt-24 lg:mt-32 flex flex-col xl:flex-row xl:items-end justify-between gap-12 pr-0 lg:pr-12 reveal-up is-visible delay-400">
<div className="max-w-md">
<div className="flex items-center gap-3 text-xl font-normal text-white mb-3 tracking-tight">
<span>Operations</span>
<div className="w-1.5 h-1.5 bg-neutral-600 rounded-full"></div>
<span>AI Automation</span>
</div>
<p className="text-neutral-400 text-xl leading-relaxed font-light">
                We design and implement AI-powered workflows that automate your
                operations, eliminate manual work, and keep your business
                running at full capacity.
              </p>
</div>
<div className="flex items-center gap-6 shrink-0">
<div className="flex items-center -space-x-3">
<img alt="Avatar" className="w-10 h-10 rounded-full object-cover border border-neutral-700/50 bg-neutral-800 relative z-[3]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&amp;h=64&amp;fit=crop&amp;crop=faces"/>
<img alt="Avatar" className="w-10 h-10 rounded-full object-cover border border-neutral-600/50 bg-neutral-700 relative z-[2]" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&amp;h=64&amp;fit=crop&amp;crop=faces"/>
<img alt="Avatar" className="w-10 h-10 rounded-full object-cover border border-neutral-500/50 bg-neutral-600 relative z-[1]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&amp;h=64&amp;fit=crop&amp;crop=faces"/>
<div className="w-10 h-10 rounded-full bg-white border border-neutral-300 flex items-center justify-center relative z-0">
<div className="w-2.5 h-2.5 bg-neutral-900 rounded-full"></div>
</div>
</div>
<div className="flex flex-col">
<span className="text-neutral-500 text-lg mb-1 font-light">
                  reduction in manual work
                </span>
<div className="flex items-start text-white leading-none">
<span className="text-5xl lg:text-6xl font-normal tracking-tight">
                    70
                  </span>
<div className="flex flex-col ml-1 pt-1.5">
<i className="w-6 h-6 text-green-500 -mb-1" data-lucide="arrow-down" strokeWidth="1.5"></i>
<span className="text-2xl font-normal text-neutral-400">%</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 relative w-full flex justify-end items-end h-full reveal-up is-visible delay-500">
<div className="bg-neutral-900/40 backdrop-blur-2xl border border-white/5 rounded-[2rem] p-8 pb-0 w-full max-w-[440px] relative overflow-hidden shadow-2xl shadow-orange-900/10 mb-0 group hover:-translate-y-2 transition-transform duration-500">
<div className="flex justify-between items-start mb-10">
<h3 className="text-3xl font-normal text-white tracking-tight leading-[1.2] max-w-[220px]">
                Systems that run your business
              </h3>
<div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 shadow-[0_0_15px_rgba(255,106,0,0.2)] group-hover:bg-orange-500/20 transition-colors duration-500">
<i className="w-6 h-6 group-hover:rotate-90 transition-transform duration-700" data-lucide="settings" strokeWidth="1.5"></i>
</div>
</div>
<div className="w-full bg-black border-[4px] border-neutral-800 rounded-t-[2.5rem] pt-5 px-5 h-[320px] relative mt-4 shadow-inner transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full flex items-center justify-between px-3 border border-white/5">
<span className="text-sm text-white font-normal tracking-tight">
                  System
                </span>
<div className="flex gap-1.5 items-center">
<i className="w-3 h-3 text-white" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="zap" strokeWidth="1.5"></i>
</div>
</div>
<div className="mt-10">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="wand-2" strokeWidth="1.5"></i>
</div>
<h4 className="text-white font-normal text-xl tracking-tight">
                    Workflow Engine
                  </h4>
</div>
<div className="flex flex-col gap-4">
<div className="bg-neutral-800/60 backdrop-blur-md rounded-2xl rounded-tl-sm p-4 w-[85%] border border-white/5">
<p className="text-neutral-300 text-lg font-light leading-relaxed">
                      Lead intake detected. CRM updated, internal task routed,
                      and follow-up sequence initiated.
                    </p>
</div>
<p className="text-neutral-600 text-sm ml-1 -mt-2">
                    Automated 2s ago
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="w-full relative pt-32 pb-48 border-t border-white/5 bg-gradient-to-b from-transparent to-neutral-950/50 z-20" id="about">
<div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">

<div className="flex flex-col lg:w-[45%] lg:sticky lg:top-40 reveal-up">
<span className="text-orange-500 font-normal text-base tracking-tight mb-4">
            ABOUT US
          </span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-6 leading-[1.1]">
            We build the systems that run your business.
          </h2>
<p className="text-neutral-400 text-xl md:text-2xl font-light leading-relaxed mb-6 max-w-lg">
            Most teams are drowning in repetitive tasks, disconnected tools, and
            manual processes.
          </p>
<p className="text-neutral-400 text-xl md:text-2xl font-light leading-relaxed mb-10 max-w-lg">
            We step in, map your operations, and replace the busywork with
            intelligent automation—so your team can focus on growth, not grunt
            work.
          </p>
<div className="grid grid-cols-2 gap-8 mb-8">
<div>
<span className="text-4xl font-normal tracking-tight text-white block mb-2">
                10x
              </span>
<span className="text-neutral-500 text-base font-light">
                Faster execution
              </span>
</div>
<div>
<span className="text-4xl font-normal tracking-tight text-white block mb-2">
                24/7
              </span>
<span className="text-neutral-500 text-base font-light">
                Automated operations
              </span>
</div>
</div>
<div className="bg-white/5 border border-white/10 rounded-xl p-4 inline-block self-start shadow-lg backdrop-blur-sm">
<span className="text-white font-normal tracking-tight">
              JuiceOps is your behind-the-scenes operations engine.
            </span>
</div>
</div>

<div className="w-full lg:w-[55%] flex flex-col gap-12 lg:gap-32 pb-10">

<div className="relative w-full aspect-square bg-neutral-900/30 rounded-3xl border border-white/5 overflow-hidden flex items-center justify-center group reveal-up shadow-2xl">
<div className="absolute inset-0 z-0 w-full h-full overflow-hidden opacity-60 group-hover:opacity-100 transition-opacity duration-700">
<img alt="Operations background" className="absolute inset-0 block w-full h-full object-cover mix-blend-screen group-hover:scale-110 transition-transform duration-1000" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-tr from-orange-500/30 to-black/50 pointer-events-none"></div>
</div>
<div className="w-24 h-24 rounded-full border border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-center relative z-10 shadow-[0_0_40px_rgba(255,106,0,0.2)]">
<i className="w-10 h-10 text-white group-hover:text-orange-500 transition-colors duration-500" data-lucide="infinity" strokeWidth="1.5"></i>
</div>
<div className="absolute w-[120%] h-[120%] border border-white/5 rounded-full z-0 animate-[spin_60s_linear_infinite]"></div>
<div className="absolute w-[80%] h-[80%] border border-white/5 rounded-full z-0 animate-[spin_40s_linear_infinite_reverse]"></div>
<div className="absolute w-[40%] h-[40%] border border-white/5 rounded-full z-0 animate-[spin_20s_linear_infinite]"></div>
</div>

</div>
</div>
</section>

<div className="w-full relative border-t border-white/5 bg-[#050505] z-30 lg:h-[350vh]" id="capabilities-wrapper" style={{height: '350vh'}}>
<section className="lg:sticky lg:top-0 lg:h-screen w-full flex flex-col justify-center py-20 lg:py-0 overflow-hidden">
<div className="max-w-[1400px] mx-auto px-6 w-full shrink-0 mb-10 lg:mb-16 reveal-up">
<span className="text-orange-500 font-normal text-base tracking-tight mb-4 block">
            CAPABILITIES
          </span>
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white max-w-2xl">
              Where we add the juice.
            </h2>
<p className="text-neutral-400 text-xl max-w-md pb-2 font-light">
              If it’s repeatable, we can automate it. Scroll to explore the
              systems we build.
            </p>
</div>
</div>
<div className="w-full lg:overflow-hidden pl-6 lg:pl-0">
<div className="flex flex-row gap-6 pb-8 lg:pb-0 pr-6 lg:pr-[20vw] overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none no-scrollbar lg:pl-[calc((100vw-1400px)/2+24px)] w-max lg:w-max items-stretch transition-transform duration-[0ms] lg:duration-75 ease-out" id="capabilities-track">
<div className="w-[85vw] md:w-[400px] shrink-0 bg-white/[0.03] border border-white/5 hover:border-white/10 hover:bg-white/[0.05] transition duration-300 rounded-2xl p-8 group snap-start flex flex-col h-full reveal-up delay-100">
<div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-orange-500 transition group-hover:scale-110">
<i className="w-6 h-6" data-lucide="magnet" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-normal tracking-tight text-white mb-3">
                Lead Automation
              </h3>
<p className="text-neutral-500 text-lg font-light leading-relaxed flex-1">
                Lead intake → CRM integration → instant follow-up automation to
                never miss a prospect. Fast and reliable pipeline processing.
              </p>
</div>
<div className="w-[85vw] md:w-[400px] shrink-0 bg-white/[0.03] border border-white/5 hover:border-white/10 hover:bg-white/[0.05] transition duration-300 rounded-2xl p-8 group snap-start flex flex-col h-full reveal-up delay-200">
<div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-orange-500 transition group-hover:scale-110">
<i className="w-6 h-6" data-lucide="user-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-normal tracking-tight text-white mb-3">
                Client Onboarding
              </h3>
<p className="text-neutral-500 text-lg font-light leading-relaxed flex-1">
                Frictionless client onboarding, automated document collection,
                personalized welcome sequences, and instant project setup.
              </p>
</div>
<div className="w-[85vw] md:w-[400px] shrink-0 bg-white/[0.03] border border-white/5 hover:border-white/10 hover:bg-white/[0.05] transition duration-300 rounded-2xl p-8 group snap-start flex flex-col h-full reveal-up delay-300">
<div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-orange-500 transition group-hover:scale-110">
<i className="w-6 h-6" data-lucide="route" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-normal tracking-tight text-white mb-3">
                Task Routing
              </h3>
<p className="text-neutral-500 text-lg font-light leading-relaxed flex-1">
                Intelligent internal workflows that automatically assign, track,
                and route tasks to the right team members based on capacity and
                skill.
              </p>
</div>
<div className="w-[85vw] md:w-[400px] shrink-0 bg-white/[0.03] border border-white/5 hover:border-white/10 hover:bg-white/[0.05] transition duration-300 rounded-2xl p-8 group snap-start flex flex-col h-full reveal-up delay-400">
<div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-orange-500 transition group-hover:scale-110">
<i className="w-6 h-6" data-lucide="database" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-normal tracking-tight text-white mb-3">
                Data Syncing
              </h3>
<p className="text-neutral-500 text-lg font-light leading-relaxed flex-1">
                Automated reporting and seamless, real-time data syncing across
                all your disparate software tools to maintain a single source of
                truth.
              </p>
</div>
<div className="w-[85vw] md:w-[400px] shrink-0 bg-white/[0.03] border border-white/5 hover:border-white/10 hover:bg-white/[0.05] transition duration-300 rounded-2xl p-8 group snap-start flex flex-col h-full reveal-up delay-500">
<div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-orange-500 transition group-hover:scale-110">
<i className="w-6 h-6" data-lucide="message-circle" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-normal tracking-tight text-white mb-3">
                AI Support
              </h3>
<p className="text-neutral-500 text-lg font-light leading-relaxed flex-1">
                Custom AI-powered communication agents trained on your data to
                handle tier-1 support, inquiries, and internal knowledge base
                queries instantly.
              </p>
</div>
<div className="w-[85vw] md:w-[400px] shrink-0 bg-white/[0.03] border border-white/5 hover:border-white/10 hover:bg-white/[0.05] transition duration-300 rounded-2xl p-8 group snap-start flex flex-col h-full reveal-up delay-600">
<div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-orange-500 transition group-hover:scale-110">
<i className="w-6 h-6" data-lucide="settings" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-normal tracking-tight text-white mb-3">
                Custom Systems
              </h3>
<p className="text-neutral-500 text-lg font-light leading-relaxed flex-1">
                If it requires manual clicks and takes away from deep work, we
                map it out line-by-line and engineer a custom automated system
                for it.
              </p>
</div>
</div>
</div>
<div className="lg:hidden w-full flex justify-center mt-4 text-neutral-600 text-base font-light items-center gap-2 reveal-fade">
<span>Swipe to explore</span>
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</section>
</div>

<section className="w-full relative py-32 border-t border-white/5 bg-[#050505] z-40" id="process">
<div className="max-w-[1400px] mx-auto px-6">
<div className="text-center mb-16 lg:mb-24 reveal-up">
<span className="text-orange-500 font-normal text-base tracking-tight mb-4 block">
            PROCESS
          </span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-6">
            Simple systems.
            <br/>
            Serious leverage.
          </h2>
</div>
<div className="w-full bg-neutral-950/80 backdrop-blur-3xl border border-white/10 rounded-2xl lg:rounded-[2rem] p-4 lg:p-6 shadow-2xl overflow-hidden reveal-up delay-200 transform-gpu">
<div className="w-full bg-[#0a0a0a] border border-white/5 rounded-xl lg:rounded-2xl h-[500px] lg:h-[700px] flex overflow-hidden relative">

<div className="w-16 lg:w-64 border-r border-white/5 bg-black/50 hidden md:flex flex-col justify-between py-6 z-10">
<div className="px-4 lg:px-6 flex flex-col gap-8">
<span className="text-white font-normal tracking-tight text-2xl hidden lg:block">
                  JO
                </span>
<span className="text-white font-normal tracking-tight text-2xl lg:hidden text-center">
                  J
                </span>
<nav className="flex flex-col gap-2">
<div className="w-full h-10 bg-white/10 rounded-lg flex items-center px-3 gap-3 transition-colors duration-300">
<i className="w-5 h-5 text-white" data-lucide="pen-tool" strokeWidth="1.5"></i>
<span className="text-base text-white font-normal hidden lg:block">
                      Design Phase
                    </span>
</div>
<div className="w-full h-10 hover:bg-white/5 rounded-lg flex items-center px-3 gap-3 cursor-pointer transition-colors duration-300">
<i className="w-5 h-5 text-neutral-500 hover:text-white transition-colors" data-lucide="hammer" strokeWidth="1.5"></i>
<span className="text-base text-neutral-500 font-normal hidden lg:block">
                      Implementation
                    </span>
</div>
<div className="w-full h-10 hover:bg-white/5 rounded-lg flex items-center px-3 gap-3 cursor-pointer transition-colors duration-300">
<i className="w-5 h-5 text-neutral-500 hover:text-white transition-colors" data-lucide="rocket" strokeWidth="1.5"></i>
<span className="text-base text-neutral-500 font-normal hidden lg:block">
                      Deployment
                    </span>
</div>
</nav>
</div>
</div>

<div className="flex-1 p-6 lg:p-10 flex flex-col overflow-y-auto no-scrollbar relative scroll-smooth">
<div className="flex justify-between items-center mb-10">
<div>
<h3 className="text-2xl font-normal tracking-tight text-white mb-1">
                    Implementation Blueprint
                  </h3>
<p className="text-base font-light text-neutral-500">
                    How we turn chaos into clockwork.
                  </p>
</div>
<div className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-base font-normal text-white flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Systems Active
                </div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
<div className="bg-white/5 border border-white/5 rounded-xl p-5 hover:bg-white/10 transition-colors duration-300">
<div className="flex items-center gap-2 mb-2">
<span className="text-orange-500 text-base font-normal block">
                      Step 1
                    </span>
</div>
<span className="text-2xl font-normal tracking-tight text-white mb-1 block">
                    Audit
                  </span>
<span className="text-neutral-400 text-base font-light">
                    We break down your current workflows and identify
                    inefficiencies.
                  </span>
</div>
<div className="bg-white/5 border border-white/5 rounded-xl p-5 hover:bg-white/10 transition-colors duration-300">
<div className="flex items-center gap-2 mb-2">
<span className="text-orange-500 text-base font-normal block">
                      Step 2
                    </span>
</div>
<span className="text-2xl font-normal tracking-tight text-white mb-1 block">
                    Build
                  </span>
<span className="text-neutral-400 text-base font-light">
                    We design and implement custom AI automations tailored to
                    your stack.
                  </span>
</div>
<div className="bg-white/5 border border-white/5 rounded-xl p-5 hover:bg-white/10 transition-colors duration-300">
<div className="flex items-center gap-2 mb-2">
<span className="text-orange-500 text-base font-normal block">
                      Step 3
                    </span>
</div>
<span className="text-2xl font-normal tracking-tight text-white mb-1 block">
                    Deploy
                  </span>
<span className="text-neutral-400 text-base font-light">
                    Your systems go live—fully integrated and tested for
                    resilience.
                  </span>
</div>
</div>
<div className="w-full bg-white/[0.02] border border-white/5 rounded-xl flex-1 flex flex-col overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a] z-10 pointer-events-none"></div>
<div className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-white/5">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-orange-500 animate-[spin_4s_linear_infinite]" data-lucide="refresh-cw" strokeWidth="1.5"></i>
<span className="text-white font-normal text-base">
                      Step 4: Optimize
                    </span>
</div>
<span className="text-neutral-500 text-base font-light">
                    Refining performance over time.
                  </span>
</div>

<div className="h-12 border-b border-white/5 flex items-center px-6 gap-4 opacity-50 hover:opacity-100 hover:bg-white/5 transition-all duration-300">
<div className="w-4 h-4 rounded border border-white/20"></div>
<div className="w-1/3 h-3 bg-white/10 rounded"></div>
<div className="w-1/4 h-3 bg-white/10 rounded"></div>
</div>
<div className="h-16 border-b border-white/5 flex items-center px-6 gap-4 bg-white/5 transition opacity-70">
<div className="w-4 h-4 rounded bg-white/20 flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="check" strokeWidth="1.5"></i>
</div>
<div className="w-1/3 h-3 bg-white/20 rounded"></div>
<div className="w-1/4 h-3 bg-orange-500/30 rounded"></div>
</div>
<div className="h-16 flex items-center px-6 gap-4 hover:bg-white/5 transition-all duration-300 opacity-90">
<div className="w-4 h-4 rounded border border-white/20"></div>
<div className="w-1/3 h-3 bg-white/10 rounded"></div>
<div className="w-1/4 h-3 bg-white/5 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full relative py-32 border-t border-white/5 bg-[#050505]" id="outcomes">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col items-center mb-16 lg:mb-24 text-center reveal-up">
<span className="text-orange-500 font-normal text-base tracking-tight mb-4">
            OUTCOMES
          </span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-6">
            More output. Less effort.
          </h2>
<p className="text-xl text-neutral-400 font-light max-w-2xl">
            Turn your business into a scalable, self-running system.
          </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
<div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 flex flex-col reveal-up delay-100 hover:bg-white/[0.04] transition-colors duration-500">
<h3 className="text-2xl font-normal tracking-tight text-white mb-2">
              Efficiency
            </h3>
<p className="text-base text-neutral-500 font-light mb-6">
              Reclaim thousands of hours per year.
            </p>
<div className="mb-8">
<span className="text-5xl font-normal tracking-tight text-white block mb-1">
                70%
              </span>
<span className="text-base text-neutral-400 font-light">
                Reduction in manual work
              </span>
</div>
<ul className="flex flex-col gap-4 text-base text-neutral-400 font-light flex-1 mb-8">
<li className="flex items-center gap-3">
<i className="w-[18px] h-[18px] text-neutral-500" data-lucide="check-circle" strokeWidth="1.5"></i>
                Eliminate copy-pasting
              </li>
<li className="flex items-center gap-3">
<i className="w-[18px] h-[18px] text-neutral-500" data-lucide="check-circle" strokeWidth="1.5"></i>
                Automate repetitive tasks
              </li>
<li className="flex items-center gap-3">
<i className="w-[18px] h-[18px] text-neutral-500" data-lucide="check-circle" strokeWidth="1.5"></i>
                Free up team bandwidth
              </li>
</ul>
</div>
<div className="bg-neutral-900/60 border border-orange-500/30 rounded-3xl p-8 flex flex-col relative shadow-[0_0_40px_rgba(255,106,0,0.05)] transform lg:-translate-y-4 reveal-up delay-200 group">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-600 to-red-600 text-white text-sm font-normal px-4 py-1 rounded-full tracking-wide shadow-lg z-10">
              CORE VALUE
            </div>
<h3 className="text-2xl font-normal tracking-tight text-white mb-2 relative z-10">
              Velocity
            </h3>
<p className="text-base text-neutral-400 font-light mb-6 relative z-10">
              Operations that never sleep.
            </p>
<div className="mb-8 relative z-10">
<span className="text-5xl font-normal tracking-tight text-white block mb-1">
                Zero
              </span>
<span className="text-base text-neutral-400 font-light">
                Bottlenecks across operations
              </span>
</div>
<ul className="flex flex-col gap-4 text-base text-neutral-300 font-light flex-1 mb-8 relative z-10">
<li className="flex items-center gap-3">
<i className="w-[18px] h-[18px] text-orange-500" data-lucide="check-circle" strokeWidth="1.5"></i>
                Instant data transfer
              </li>
<li className="flex items-center gap-3">
<i className="w-[18px] h-[18px] text-orange-500" data-lucide="check-circle" strokeWidth="1.5"></i>
                Error-free workflows
              </li>
<li className="flex items-center gap-3">
<i className="w-[18px] h-[18px] text-orange-500" data-lucide="check-circle" strokeWidth="1.5"></i>
                Real-time syncing
              </li>
</ul>
<a className="w-full bg-white text-black py-3 rounded-full text-base font-normal hover:bg-neutral-200 transition mt-auto flex justify-center relative z-10" href="#cta">
              Book a Strategy Call
            </a>
</div>
<div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 flex flex-col reveal-up delay-300 hover:bg-white/[0.04] transition-colors duration-500">
<h3 className="text-2xl font-normal tracking-tight text-white mb-2">
              Scale
            </h3>
<p className="text-base text-neutral-500 font-light mb-6">
              Grow margins, not headcount.
            </p>
<div className="mb-8">
<span className="text-5xl font-normal tracking-tight text-white block mb-1">
                10x
              </span>
<span className="text-base text-neutral-400 font-light">
                Move faster without hiring
              </span>
</div>
<ul className="flex flex-col gap-4 text-base text-neutral-400 font-light flex-1 mb-8">
<li className="flex items-center gap-3">
<i className="w-[18px] h-[18px] text-neutral-500" data-lucide="check-circle" strokeWidth="1.5"></i>
                Handle infinite volume
              </li>
<li className="flex items-center gap-3">
<i className="w-[18px] h-[18px] text-neutral-500" data-lucide="check-circle" strokeWidth="1.5"></i>
                Maintain high quality
              </li>
<li className="flex items-center gap-3">
<i className="w-[18px] h-[18px] text-neutral-500" data-lucide="check-circle" strokeWidth="1.5"></i>
                Decouple growth from cost
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="w-full relative py-40 border-t border-white/5 bg-gradient-to-t from-orange-900/10 to-[#050505] overflow-hidden" id="cta">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-orange-600/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center relative z-10 reveal-up">
<span className="text-orange-500 font-normal text-base tracking-tight mb-4 block">
          GET STARTED
        </span>
<h2 className="text-4xl md:text-5xl lg:text-7xl font-normal tracking-tight text-white mb-6">
          Get your business fully juiced.
        </h2>
<p className="text-neutral-400 text-xl md:text-2xl font-light leading-relaxed mb-10 max-w-xl">
          Stop wasting time on work that should already be automated.
        </p>
<a className="inline-flex items-center justify-center bg-white text-black px-10 py-5 rounded-full text-xl font-normal hover:bg-neutral-200 transition duration-300 transform hover:scale-105 active:scale-95" href="#">
          → Book a Strategy Call
        </a>
<div className="mt-24 pt-8 border-t border-white/10 w-full max-w-md reveal-fade delay-300">
<p className="text-neutral-500 text-lg font-light tracking-tight">
            Most businesses don’t need more people.
            <br/>
<span className="text-white font-normal">
              They need better systems.
            </span>
</p>
</div>
</div>
</section>

<footer className="w-full border-t border-white/5 bg-[#050505] pt-20 pb-10 relative z-10">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2 flex flex-col items-start pr-10">
<a className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 mb-6 hover:bg-white/10 transition" href="#">
<span className="text-lg font-normal tracking-tight text-white">
                JO
              </span>
</a>
<p className="text-neutral-500 text-base font-light leading-relaxed mb-6">
              JuiceOps is your behind-the-scenes operations engine. We design
              and implement AI workflows to eliminate manual work.
            </p>
</div>
<div>
<h4 className="text-white font-normal text-base tracking-tight mb-5">
              Services
            </h4>
<ul className="flex flex-col gap-3">
<li>
<a className="text-neutral-500 hover:text-white text-base font-light transition" href="#capabilities">
                  Capabilities
                </a>
</li>
<li>
<a className="text-neutral-500 hover:text-white text-base font-light transition" href="#process">
                  Process
                </a>
</li>
<li>
<a className="text-neutral-500 hover:text-white text-base font-light transition" href="#outcomes">
                  Outcomes
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-normal text-base tracking-tight mb-5">
              Company
            </h4>
<ul className="flex flex-col gap-3">
<li>
<a className="text-neutral-500 hover:text-white text-base font-light transition" href="#about">
                  About Us
                </a>
</li>
<li>
<a className="text-neutral-500 hover:text-white text-base font-light transition" href="#cta">
                  Contact
                </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<span className="text-neutral-600 text-sm font-light">
            © 2024 JuiceOps. All rights reserved.
          </span>
<div className="flex items-center gap-6">
<span className="flex items-center gap-2 text-sm text-neutral-600 font-light">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              All systems operational
            </span>
</div>
</div>
</div>
</footer>


    </>
  );
}
