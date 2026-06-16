import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        setTimeout(() => {
          const newObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                newObserver.unobserve(entry.target);
              }
            });
          }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
          document.querySelectorAll('.reveal-up').forEach((el) => {
            if (window.getComputedStyle(el).animationPlayState === 'paused' || el.style.animationPlayState !== 'running') {
              el.style.animationPlayState = 'paused';
              newObserver.observe(el);
            }
          });
        }, 100);
      


      lucide.createIcons({
          attrs: {
              'stroke-width': 1.5
          }
      });
    


      (function(){const words=['productive.','efficient.','fast.','successful.','unstoppable.','dangerous.'];let currentWordIndex=0;let currentWord='';let isDeleting=false;const wordElement=document.getElementById('word-carousel');if(!wordElement)return;function type(){const fullWord=words[currentWordIndex];if(isDeleting){currentWord=fullWord.substring(0,currentWord.length-1);}else{currentWord=fullWord.substring(0,currentWord.length+1);}wordElement.textContent=currentWord;let typeSpeed=80;if(isDeleting)typeSpeed/=2;if(!isDeleting&&currentWord===fullWord){if(currentWordIndex===words.length-1){setTimeout(()=>{wordElement.classList.remove('animate-blink');wordElement.style.borderRight='none';},3000);return;}typeSpeed=1500;isDeleting=true;}else if(isDeleting&&currentWord===''){isDeleting=false;currentWordIndex++;typeSpeed=500;}setTimeout(type,typeSpeed);}wordElement.textContent='';setTimeout(type,1000);})();

      document.addEventListener("DOMContentLoaded", () => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.animationPlayState = 'running';
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.reveal-up').forEach((el) => {
          el.style.animationPlayState = 'paused';
          observer.observe(el);
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="absolute top-0 left-0 w-full h-screen -z-10 bg-cover bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/169cdb38-2656-4555-bec1-d1acc64bb6fa_3840w.png)] animate-bg-intro"></div>
<div className="w-full max-w-7xl flex flex-col relative min-h-screen">

<header className="md:px-12 flex z-10 w-full pt-6 pr-6 pb-6 pl-6 relative items-center justify-between animate-header-intro">
<a className="flex items-center select-none" href="#">
<img alt="Sondero" className="mix-blend-multiply h-7 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1cecfee1-4f70-44cb-859d-503cb03a9e42_320w.png"/>
</a>
<nav className="hidden gap-x-4 md:flex">
<a className="text-sm font-normal text-gray-500 hover:text-gray-900 transition-colors" href="#">
            Product
          </a>
<a className="text-sm font-normal text-gray-500 hover:text-gray-900 transition-colors" href="#">
            Security
          </a>
<a className="text-sm font-normal text-gray-500 hover:text-gray-900 transition-colors" href="#">
            Pricing
          </a>
<a className="text-sm font-normal text-gray-500 hover:text-gray-900 transition-colors" href="#">
            Documentation
          </a>
<a className="text-sm font-normal text-gray-500 hover:text-gray-900 transition-colors" href="#">
            Support
          </a>
</nav>
<div className="flex items-center gap-6">
<a className="text-xs tracking-widest font-normal text-gray-500 hover:text-gray-900 uppercase transition-colors hidden sm:block" href="#">
            Log In
          </a>
<a className="inline-flex items-center justify-center text-white px-5 py-2.5 rounded text-xs font-medium tracking-[0.15em] uppercase transition-all shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.1)] hover:opacity-90 bg-[#0D3C1F]" href="#">
            Start Free Trial
          </a>
</div>
</header>

<main className="flex-grow flex flex-col text-center pt-0 pr-6 pb-32 pl-6 items-center justify-center">
<h1 className="leading-[1.1] bg-clip-text md:text-7xl text-5xl font-semibold text-transparent tracking-tighter font-geist bg-gradient-to-b from-[#3D7F61] to-[#0D3C1F] max-w-4xl animate-title-intro" style={{fontFamily: '"Playfair Display", serif'}}>
          AI systems that make your best people
          <span className="inline-block border-r-4 border-[#0D3C1F] pr-1 animate-blink" id="word-carousel">
            p
          </span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-normal text-gray-500 max-w-2xl mt-8 animate-subtitle-intro" style={{fontFamily: '\'Geist\', sans-serif'}}>
          We are building an AI operating system for companies that want more
          revenue in less time.
        </p>
<div className="mt-14 animate-btn-intro">
<a className="inline-flex items-center justify-center uppercase transition-all hover:opacity-90 text-xs font-medium text-white tracking-[0.15em] rounded pt-4 pr-8 pb-4 pl-8 shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.1)]" href="#" style={{backgroundColor: '#0D3C1F'}}>
            See it in action
          </a>
</div>
</main>
</div>

<section className="w-full bg-[#FAF9F6] py-24 md:py-32 px-6 flex justify-center relative z-20">
<div className="max-w-7xl w-full flex flex-col items-center">

<h2 className="text-3xl md:text-5xl font-semibold text-[#0D3C1F] text-center max-w-3xl tracking-tight leading-tight reveal-up" style={{fontFamily: '"Playfair Display", serif', animationPlayState: 'paused'}}>
          AI war lange nur was fürs Silicon Valley und Startups. Das ändert sich
          jetzt.
        </h2>
<p className="mt-6 text-lg text-[#4A6B5A] text-center max-w-2xl leading-relaxed font-geist reveal-up delay-100" style={{animationPlayState: 'paused'}}>
          Die meisten AI-Initiativen enden mit einer Präsentation. Nicht mit
          einem System, das morgens um 7 läuft. Sondero baut fertige AI-Systeme,
          die sich direkt in eure bestehenden Tools einklinken — und euren
          Leuten den Rücken freihalten für die Arbeit, die wirklich zählt.
        </p>

<div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">

<div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(13,60,31,0.06)] flex flex-col overflow-hidden max-w-sm mx-auto w-full reveal-up delay-100 transition-transform duration-500 hover:-translate-y-1" style={{animationPlayState: 'paused'}}>

<div className="h-72 w-full relative bg-gradient-to-br from-[#F5F8F6] to-[#EAEFEB] overflow-hidden flex items-center justify-center border-b border-gray-50">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent"></div>
<div className="absolute -bottom-12 -right-12 w-64 h-64 bg-white/80 blur-3xl rounded-full"></div>

<div className="relative z-10 flex items-center gap-5">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-px bg-gradient-to-r from-transparent via-[#3D7F61]/20 to-transparent"></div>
<div className="w-12 h-12 rounded-xl bg-white/40 backdrop-blur-md border border-white/60 shadow-sm flex items-center justify-center text-[#3D7F61] z-10">
<i className="w-5 h-5" data-lucide="mail"></i>
</div>
<div className="w-16 h-16 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/80 shadow-md flex items-center justify-center text-[#0D3C1F] z-20 scale-110">
<i className="w-7 h-7" data-lucide="message-square"></i>
</div>
<div className="w-12 h-12 rounded-xl bg-white/40 backdrop-blur-md border border-white/60 shadow-sm flex items-center justify-center text-[#3D7F61] z-10">
<i className="w-5 h-5" data-lucide="calendar"></i>
</div>
</div>
</div>

<div className="p-8 flex flex-col gap-3 grow">
<h3 className="text-xl font-semibold text-[#0D3C1F] tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Arbeitet mit dem, was ihr schon habt.
              </h3>
<p className="text-base text-[#4A6B5A] leading-relaxed font-geist">
                Sondero verbindet sich direkt mit euren bestehenden Tools —
                Gmail, Outlook, Slack, Teams. Kein Systemwechsel, keine
                Migration, kein IT-Projekt.
              </p>
</div>
</div>

<div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(13,60,31,0.06)] flex flex-col overflow-hidden max-w-sm mx-auto w-full reveal-up delay-200 transition-transform duration-500 hover:-translate-y-1" style={{animationPlayState: 'paused'}}>

<div className="h-72 w-full relative bg-gradient-to-bl from-[#F5F8F6] to-[#EAEFEB] overflow-hidden flex items-center justify-center border-b border-gray-50">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent"></div>
<div className="absolute -top-12 -left-12 w-64 h-64 bg-white/80 blur-3xl rounded-full"></div>

<div className="relative z-10 w-28 h-32 rounded-t-full rounded-b-2xl bg-white/50 backdrop-blur-xl border border-white/80 shadow-[0_8px_16px_rgba(13,60,31,0.04)] flex flex-col items-center justify-center">
<i className="w-10 h-10 text-[#0D3C1F] opacity-80 mb-2" data-lucide="shield"></i>
<div className="flex gap-1 opacity-70">
<i className="w-3 h-3 text-[#3D7F61] fill-current" data-lucide="star"></i>
<i className="w-3 h-3 text-[#3D7F61] fill-current" data-lucide="star"></i>
<i className="w-3 h-3 text-[#3D7F61] fill-current" data-lucide="star"></i>
</div>
</div>
</div>

<div className="p-8 flex flex-col gap-3 grow">
<h3 className="text-xl font-semibold text-[#0D3C1F] tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Gebaut für europäische Standards.
              </h3>
<p className="text-base text-[#4A6B5A] leading-relaxed font-geist">
                DSGVO-konform von Grund auf. EU-Server, Zero Data Retention, AVV
                inklusive. Eure Daten verlassen nicht die EU.
              </p>
</div>
</div>

<div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(13,60,31,0.06)] flex flex-col overflow-hidden max-w-sm mx-auto w-full reveal-up delay-300 transition-transform duration-500 hover:-translate-y-1" style={{animationPlayState: 'paused'}}>

<div className="h-72 w-full relative bg-gradient-to-b from-[#F5F8F6] to-[#EAEFEB] overflow-hidden flex items-center justify-center border-b border-gray-50">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent"></div>
<div className="absolute top-0 right-0 w-48 h-48 bg-[#3D7F61]/5 blur-3xl rounded-full"></div>

<div className="relative z-10 flex items-center">
<div className="w-20 h-20 rounded-full bg-white/60 backdrop-blur-xl border border-white/80 shadow-md flex items-center justify-center text-[#0D3C1F] z-20 translate-x-4">
<i className="w-8 h-8 opacity-80" data-lucide="user"></i>
</div>
<div className="w-20 h-20 rounded-2xl rotate-12 bg-gradient-to-br from-[#3D7F61]/10 to-transparent backdrop-blur-md border border-white/60 shadow-inner flex items-center justify-center text-[#3D7F61] z-10 -translate-x-4">
<i className="w-7 h-7 -rotate-12 opacity-70" data-lucide="sparkles"></i>
</div>
</div>
</div>

<div className="p-8 flex flex-col gap-3 grow">
<h3 className="text-xl font-semibold text-[#0D3C1F] tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Macht eure Leute stärker, nicht überflüssig.
              </h3>
<p className="text-base text-[#4A6B5A] leading-relaxed font-geist">
                Sondero ersetzt niemanden. Unsere Systeme nehmen euren besten
                Leuten die Arbeit ab, die kein Mensch machen müsste — damit sie
                sich auf das konzentrieren, was nur sie können.
              </p>
</div>
</div>
</div>

<p className="mt-16 text-sm text-[#4A6B5A] italic font-geist text-center reveal-up delay-300" style={{animationPlayState: 'paused'}}>
          Keine Beratung. Keine Workshops. Systeme, die laufen.
        </p>
</div>
</section>
<section className="w-full bg-white py-24 md:py-[100px] px-6 flex justify-center relative z-20">
<div className="max-w-[1200px] w-full flex flex-col items-center">

<h2 className="text-3xl md:text-5xl font-semibold text-[#0D3C1F] text-center max-w-3xl tracking-tight leading-tight reveal-up delay-100" style={{fontFamily: '"Playfair Display", serif', animationPlayState: 'paused'}}>
          Was wäre, wenn eure besten Leute nur noch das tun, was zählt?
        </h2>

<div className="mt-16 w-full grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[auto]">

<div className="md:col-span-5 md:row-span-2 bg-[#0D3C1F] rounded-2xl p-8 flex flex-col relative overflow-hidden reveal-up delay-100 min-h-[400px]" style={{animationPlayState: 'paused'}}>

<div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-transparent to-[#0D3C1F] z-10 pointer-events-none"></div>
<div className="absolute -top-10 -right-10 w-64 h-64 bg-[#3D7F61]/20 blur-3xl rounded-full"></div>
<div className="absolute top-8 right-8 w-40 h-32 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center transform rotate-6 z-0">
<svg className="text-[#FAF9F6] opacity-30 -rotate-6" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
<path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
</svg>
</div>
<div className="absolute top-16 right-24 w-24 h-20 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 shadow-inner flex items-center justify-center transform -rotate-3 z-0">
<svg className="text-[#3D7F61] opacity-50 rotate-3" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
</div>

<div className="mt-auto relative z-20 flex flex-col gap-2 pt-32">
<div className="text-[72px] leading-none text-[#F69066] font-semibold" style={{fontFamily: '\'Playfair Display\', serif'}}>
                28%
              </div>
<p className="text-[16px] text-[#FAF9F6] font-geist leading-relaxed">
                der Arbeitszeit geht für das Lesen und Sortieren von Emails
                drauf.
              </p>
<p className="text-[12px] text-[#3D7F61] font-geist italic mt-2">
                Microsoft Workplace Study
              </p>
</div>
</div>

<div className="md:col-span-4 bg-[#F5F5F3] rounded-2xl p-8 flex flex-col justify-between reveal-up delay-200 min-h-[220px]" style={{animationPlayState: 'paused'}}>
<div className="text-[56px] leading-tight text-[#0D3C1F] font-semibold" style={{fontFamily: '\'Playfair Display\', serif'}}>
              72%
            </div>
<div className="mt-4">
<p className="text-[15px] text-[#4A6B5A] font-geist leading-snug mb-2">
                der Vertriebszeit geht für Admin drauf. Nicht für Verkaufen.
              </p>
<p className="text-[11px] text-[#8A9E92] font-geist italic">
                Salesforce State of Sales 2025
              </p>
</div>
</div>

<div className="md:col-span-3 bg-[#3D7F61] rounded-2xl p-8 flex flex-col relative overflow-hidden reveal-up delay-300 min-h-[220px]" style={{animationPlayState: 'paused'}}>
<svg className="absolute top-6 right-6 text-white opacity-80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-2 7-2 2.5 0 4.5 1 6.5 2a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
<div className="mt-auto">
<h3 className="text-[22px] leading-tight text-white font-semibold mb-2" style={{fontFamily: '\'Playfair Display\', serif'}}>
                EU-Server.
                <br/>
                Zero Data Retention.
              </h3>
<p className="text-[14px] text-[#D4E8DC] font-geist leading-snug">
                Eure Daten verlassen nicht die EU. Punkt.
              </p>
</div>
</div>

<div className="md:col-span-4 bg-[#F5F5F3] rounded-2xl p-8 flex flex-col justify-between reveal-up delay-200 min-h-[220px]" style={{animationPlayState: 'paused'}}>
<div className="text-[56px] leading-tight text-[#0D3C1F] font-semibold" style={{fontFamily: '\'Playfair Display\', serif'}}>
              121
            </div>
<div className="mt-4">
<p className="text-[14px] text-[#4A6B5A] font-geist leading-snug">
                Emails pro Tag. Im Durchschnitt.
              </p>
</div>
</div>

<div className="md:col-span-3 bg-[#0D3C1F] rounded-2xl p-8 flex flex-col justify-end reveal-up delay-300 min-h-[220px]" style={{animationPlayState: 'paused'}}>
<h3 className="text-[20px] leading-tight text-[#FAF9F6] font-semibold mb-2" style={{fontFamily: '\'Playfair Display\', serif'}}>
              Sondero wächst mit euch.
            </h3>
<p className="text-[14px] text-[#8ABF9E] font-geist leading-snug">
              Jedes neue Modul nutzt eure bestehenden Anbindungen. Automatisch.
            </p>
</div>
</div>
</div>

</section>
<section className="w-full bg-white py-24 md:py-[100px] px-6 flex justify-center relative z-20">
<div className="max-w-[1200px] w-full flex flex-col items-center">

<h2 className="text-3xl md:text-5xl font-semibold text-[#0D3C1F] text-center max-w-3xl tracking-tight leading-tight reveal-up" style={{fontFamily: '"Playfair Display", serif', animationPlayState: 'paused'}}>
          Drei Wege, mit Sondero zu arbeiten.
        </h2>
<p className="mt-6 text-[16px] text-[#4A6B5A] text-center max-w-[600px] leading-relaxed font-geist reveal-up delay-100" style={{animationPlayState: 'running'}}>
          Ob fertige Module, strategische Begleitung oder maßgeschneiderte
          Systeme — ihr entscheidet, was euer Unternehmen braucht.
        </p>

<div className="mt-16 w-full flex flex-col gap-4">

<div className="md:p-16 flex flex-col md:flex-row min-h-[480px] overflow-hidden reveal-up delay-100 bg-[#0D3C1F] w-full rounded-[16px] p-8 relative shadow-[0_8px_32px_rgba(13,60,31,0.12)]" style={{animationPlayState: 'running'}}>

<div className="w-full md:w-[50%] flex flex-col justify-center relative z-20 md:pr-16">
<div className="text-[12px] uppercase tracking-[0.15em] text-[#3D7F61] font-geist font-medium mb-6">
                SONDERO PLATTFORM
              </div>
<h3 className="text-[36px] font-semibold text-[#FAF9F6] leading-tight mb-6 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Fertige AI-Module. Ein Dashboard. Sofort produktiv.
              </h3>
<p className="text-[16px] text-[#B8D4C4] font-geist leading-[1.8] mb-12 max-w-lg">
                Unsere Plattform verbindet sich mit euren bestehenden Tools und
                liefert fertige Workflows — von Email-Triage über
                Meeting-Vorbereitung bis hin zu automatisierten Reports. Keine
                Entwicklung nötig. Modul aktivieren, konfigurieren, läuft.
              </p>
<a className="mt-auto md:mt-0 self-start text-[15px] text-[#F69066] font-geist hover:underline flex items-center gap-2 transition-all" href="#">
                Plattform kennenlernen
                <span className="text-xl leading-none">→</span>
</a>
</div>

<div className="w-full md:w-[50%] mt-16 md:mt-0 relative flex items-center justify-center min-h-[320px] md:min-h-full">

<div className="absolute inset-0 w-full h-full flex flex-col gap-6 justify-center items-end opacity-90 transform translate-x-4 md:translate-x-12">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#3D7F61] blur-[100px] rounded-full opacity-60"></div>
<div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#F69066]/20 blur-[80px] rounded-full opacity-40"></div>

<div className="w-full max-w-[340px] h-24 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] p-5 flex items-center gap-5 transform -translate-x-12 relative z-10 hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-lg bg-[#3D7F61]/30 flex-shrink-0 flex items-center justify-center">
<svg className="text-[#8ABF9E]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
<line x1="12" x2="12" y1="22.08" y2="12"></line>
</svg>
</div>
<div className="flex flex-col gap-3 w-full">
<div className="w-3/4 h-2.5 rounded-full bg-white/30"></div>
<div className="w-1/2 h-2 rounded-full bg-white/10"></div>
</div>
</div>
<div className="w-full max-w-[400px] h-32 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_16px_48px_rgba(0,0,0,0.3)] p-6 flex flex-col justify-between relative z-20 transform -translate-x-4 hover:-translate-y-1 transition-transform duration-300">
<div className="flex items-center justify-between w-full">
<div className="flex items-center gap-4 w-full">
<div className="w-12 h-12 rounded-full bg-[#F69066]/20 border border-[#F69066]/30 flex-shrink-0 flex items-center justify-center">
<svg className="text-[#F69066]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20"></path>
<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
</div>
<div className="w-1/2 h-3.5 rounded-full bg-white/40"></div>
</div>
<div className="w-8 h-8 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center">
<svg className="text-white/70" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
</svg>
</div>
</div>
<div className="flex gap-3 w-full">
<div className="w-1/3 h-2.5 rounded-full bg-[#3D7F61]/60"></div>
<div className="w-1/4 h-2.5 rounded-full bg-white/20"></div>
<div className="w-1/5 h-2.5 rounded-full bg-white/10"></div>
</div>
</div>
<div className="w-full max-w-[320px] h-20 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] p-5 flex items-center gap-4 transform translate-x-2 relative z-10 hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-lg bg-white/10 flex-shrink-0 flex items-center justify-center">
<svg className="text-white/70" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M3 9h18"></path>
<path d="M9 21V9"></path>
</svg>
</div>
<div className="flex flex-col gap-2 w-full">
<div className="w-2/3 h-2 rounded-full bg-white/20"></div>
<div className="w-1/3 h-2 rounded-full bg-white/10"></div>
</div>
</div>
<div className="w-full max-w-[260px] h-16 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] p-4 flex items-center gap-4 transform translate-x-12 relative z-0 opacity-60">
<div className="w-8 h-8 rounded-full bg-white/10 flex-shrink-0"></div>
<div className="flex flex-col gap-2 w-full">
<div className="w-3/4 h-1.5 rounded-full bg-white/20"></div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">

<div className="bg-[#F5F5F3] rounded-[16px] p-8 flex flex-col reveal-up delay-200 hover:-translate-y-1 transition-transform duration-300" style={{animationPlayState: 'running'}}>
<div className="text-[11px] uppercase tracking-[0.15em] text-[#8A9E92] font-geist font-medium mb-4">
                BERATUNG
              </div>
<h3 className="text-[22px] font-semibold text-[#0D3C1F] leading-tight mb-3" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Wissen, wo AI bei euch den Hebel hat.
              </h3>
<p className="text-[14px] text-[#4A6B5A] font-geist leading-[1.6] mb-8 grow">
                Seid ihr AI-ready? Wo liegen die größten Potenziale? Wir
                analysieren eure Prozesse und zeigen euch, wo Automatisierung
                echten Impact bringt — bevor ihr einen Cent investiert.
              </p>
<a className="mt-auto self-start text-[13px] text-[#3D7F61] font-geist hover:underline flex items-center gap-1 transition-all" href="#">
                Erstgespräch buchen
                <span className="text-base leading-none">→</span>
</a>
</div>

<div className="bg-[#F5F5F3] rounded-[16px] p-8 flex flex-col reveal-up delay-300 hover:-translate-y-1 transition-transform duration-300" style={{animationPlayState: 'running'}}>
<div className="text-[11px] uppercase tracking-[0.15em] text-[#8A9E92] font-geist font-medium mb-4">
                CUSTOM BUILDS
              </div>
<h3 className="text-[22px] font-semibold text-[#0D3C1F] leading-tight mb-3" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Euer Workflow existiert noch nicht? Wir bauen ihn.
              </h3>
<p className="text-[14px] text-[#4A6B5A] font-geist leading-[1.6] mb-8 grow">
                Nicht jeder Prozess passt in ein Standardmodul. Wenn euer
                Anwendungsfall individuell ist, entwickeln wir ein
                maßgeschneidertes System — mit derselben Architektur, denselben
                Sicherheitsstandards.
              </p>
<a className="mt-auto self-start text-[13px] text-[#3D7F61] font-geist hover:underline flex items-center gap-1 transition-all" href="#">
                Projekt besprechen
                <span className="text-base leading-none">→</span>
</a>
</div>
</div>
</div>
</div>
</section>
<section className="w-full bg-[#FAF9F6] py-24 md:py-[100px] px-6 flex justify-center relative z-20">
<div className="max-w-[1200px] w-full flex flex-col items-center">
<h2 className="text-3xl md:text-5xl font-semibold text-[#0D3C1F] text-center max-w-3xl tracking-tight leading-tight reveal-up" style={{fontFamily: '\'Playfair Display\', serif'}}>
          Von Erstgespräch bis laufendes System. In Tagen, nicht Monaten.
        </h2>
<p className="mt-6 text-[16px] text-[#4A6B5A] text-center max-w-[620px] leading-relaxed font-geist reveal-up delay-100">
          Kein Onboarding-Marathon. Kein Change Management. Vier Schritte, dann
          läuft's.
        </p>

<div className="mt-20 w-full relative reveal-up delay-200">

<div className="hidden md:block absolute top-[20px] left-4 right-[20%] h-[1px] bg-[#0D3C1F]/20 z-0"></div>

<div className="md:hidden absolute top-[20px] bottom-10 left-[24px] w-[1px] bg-[#0D3C1F]/20 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">

<div className="flex flex-col relative pl-16 md:pl-0">
<div className="absolute md:relative left-0 top-0 flex justify-center md:justify-start md:mb-4 bg-[#FAF9F6] py-2 md:py-0 md:pr-6 md:inline-block w-12 md:w-auto z-10">
<span className="text-[40px] text-[#F69066] leading-none" style={{fontFamily: '\'Playfair Display\', serif'}}>
                  01
                </span>
</div>
<h3 className="text-[20px] font-semibold text-[#0D3C1F] mb-3 md:mt-2 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Gespräch
              </h3>
<p className="text-[14px] text-[#4A6B5A] font-geist leading-[1.6]">
                30 Minuten. Wir hören zu, stellen die richtigen Fragen und
                finden heraus, wo bei euch der größte Hebel liegt.
              </p>
</div>

<div className="flex flex-col relative pl-16 md:pl-0">
<div className="absolute md:relative left-0 top-0 flex justify-center md:justify-start md:mb-4 bg-[#FAF9F6] py-2 md:py-0 md:pr-6 md:inline-block w-12 md:w-auto z-10">
<span className="text-[40px] text-[#F69066] leading-none" style={{fontFamily: '\'Playfair Display\', serif'}}>
                  02
                </span>
</div>
<h3 className="text-[20px] font-semibold text-[#0D3C1F] mb-3 md:mt-2 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Potenzialanalyse
              </h3>
<p className="text-[14px] text-[#4A6B5A] font-geist leading-[1.6]">
                Wir analysieren eure bestehenden Workflows und identifizieren,
                welche Module und Anbindungen für euch Sinn ergeben.
              </p>
</div>

<div className="flex flex-col relative pl-16 md:pl-0">
<div className="absolute md:relative left-0 top-0 flex justify-center md:justify-start md:mb-4 bg-[#FAF9F6] py-2 md:py-0 md:pr-6 md:inline-block w-12 md:w-auto z-10">
<span className="text-[40px] text-[#F69066] leading-none" style={{fontFamily: '\'Playfair Display\', serif'}}>
                  03
                </span>
</div>
<h3 className="text-[20px] font-semibold text-[#0D3C1F] mb-3 md:mt-2 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Implementierung
              </h3>
<p className="text-[14px] text-[#4A6B5A] font-geist leading-[1.6]">
                Wir verbinden Sondero mit euren Tools, konfigurieren die Flows
                und testen alles — bis es sauber läuft.
              </p>
</div>

<div className="flex flex-col relative pl-16 md:pl-0">
<div className="absolute md:relative left-0 top-0 flex justify-center md:justify-start md:mb-4 bg-[#FAF9F6] py-2 md:py-0 md:pr-6 md:inline-block w-12 md:w-auto z-10">
<span className="text-[40px] text-[#F69066] leading-none" style={{fontFamily: '\'Playfair Display\', serif'}}>
                  04
                </span>
</div>
<h3 className="text-[20px] font-semibold text-[#0D3C1F] mb-3 md:mt-2 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Läuft.
              </h3>
<p className="text-[14px] text-[#4A6B5A] font-geist leading-[1.6]">
                Euer Team arbeitet weiter in Slack, Teams, Outlook — ganz
                normal. Die AI läuft im Hintergrund. Euer Admin steuert alles
                über ein zentrales Dashboard.
              </p>
</div>
</div>
</div>

<div className="mt-20 flex flex-col md:flex-row gap-4 justify-center items-center w-full reveal-up delay-300">
<div className="bg-[#0D3C1F] text-white rounded-full px-5 py-2 text-[13px] font-geist text-center w-full md:w-auto shadow-sm">
            Für euer Team: Keine neuen Tools. Alles läuft in den Apps, die ihr
            schon nutzt.
          </div>
<div className="bg-[#3D7F61] text-white rounded-full px-5 py-2 text-[13px] font-geist text-center w-full md:w-auto shadow-sm">
            Für euren Admin: Ein Dashboard. Alle Module, alle User, volle
            Kontrolle.
          </div>
</div>
</div>
</section>

<section className="w-full bg-[#FAF9F6] py-24 md:py-32 px-6 flex justify-center relative z-20">
<div className="max-w-[1100px] w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-12 reveal-up">

<div className="max-w-2xl">
<h2 className="text-5xl md:text-6xl font-semibold text-[#0D3C1F] tracking-tight leading-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>
            Get started in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F69066] to-[#E35D30]">minutes</span>
</h2>
<p className="mt-6 text-lg md:text-xl text-[#4A6B5A] leading-relaxed font-geist">
            Try out our playground, and start with our free tier to test Sondero models in your application.
          </p>
</div>

<div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0 mt-8 md:mt-0">
<a className="inline-flex items-center justify-center px-7 py-3.5 rounded text-xs font-medium tracking-[0.1em] uppercase transition-all bg-[#F69066] hover:bg-[#E35D30] text-white gap-2 shadow-[0_4px_14px_rgba(246,144,102,0.25)] hover:-translate-y-0.5" href="#">
            Get a Demo
            <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
<a className="inline-flex items-center justify-center px-7 py-3.5 rounded text-xs font-medium tracking-[0.1em] uppercase transition-all bg-[#EAEFEB] hover:bg-[#DCE4DF] text-[#0D3C1F] gap-2 shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:-translate-y-0.5" href="#">
            Sign up for free
            <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
</section>

<div className="w-full h-[180px] md:h-[260px] relative overflow-hidden reveal-up z-20">
<div className="absolute inset-0 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] contrast-125 sepia-[.3] hue-rotate-[-10deg] opacity-90"></div>
</div>

<footer className="w-full bg-[#FAF9F6] pt-12 pb-8 px-6 flex justify-center relative z-20">
<div className="max-w-[1100px] w-full flex flex-col">

<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
<a className="flex items-center select-none shrink-0" href="#">
<img alt="Sondero" className="mix-blend-multiply h-7 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1cecfee1-4f70-44cb-859d-503cb03a9e42_320w.png"/>
</a>
<div className="flex flex-wrap justify-center gap-8 md:gap-12 text-xs font-medium text-[#4A6B5A] tracking-[0.05em] uppercase font-geist">
<a className="hover:text-[#0D3C1F] transition-colors" href="#">Y Combinator</a>
<a className="hover:text-[#0D3C1F] transition-colors" href="#">About Us</a>
<a className="hover:text-[#0D3C1F] transition-colors" href="#">Email Us</a>
</div>
<div className="flex items-center gap-6 text-[#0D3C1F] shrink-0">
<a className="hover:opacity-70 transition-opacity" href="#">
<svg aria-hidden="true" className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.005 4.25H5.078z"></path></svg>
</a>
<a className="hover:opacity-70 transition-opacity" href="#">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</a>
</div>
</div>
<div className="w-full h-px bg-gray-200/80 mb-8"></div>

<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#8A9E92] font-geist">
<p>Copyright © 2026 Sondero</p>
<div className="flex flex-wrap justify-center gap-6">
<a className="hover:text-[#0D3C1F] transition-colors" href="#">Status</a>
<a className="hover:text-[#0D3C1F] transition-colors" href="#">Terms of Use</a>
<a className="hover:text-[#0D3C1F] transition-colors" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
