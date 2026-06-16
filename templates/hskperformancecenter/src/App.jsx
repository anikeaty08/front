import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Intersection Observer for scroll reveal animations
      document.addEventListener('DOMContentLoaded', () => {
          const observerOptions = {
              threshold: 0.1,
              rootMargin: "0px"
          };

          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('reveal-visible');
                  }
              });
          }, observerOptions);

          document.querySelectorAll('h2, .group, p').forEach(el => {
              el.classList.add('reveal-on-scroll');
              observer.observe(el);
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
<a className="vertical-text block bg-black border-y border-r border-red-900/50 text-red-600 text-xs font-bold tracking-[0.2em] py-8 px-3 hover:bg-red-600 hover:text-black hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all duration-500 uppercase" href="mailto:contact@hsk-performance.de">
<div className="flex items-center gap-2">
            Kontakt
        </div>
</a>
</div>

<nav className="fixed top-0 w-full z-40 mix-blend-difference px-6 py-6 border-b border-white/5 backdrop-blur-sm">
<div className="max-w-7xl mx-auto flex justify-between items-center">

<div className="text-lg tracking-tighter text-white uppercase flex items-center gap-3 font-semibold">
<div className="text-red-600 text-2xl font-extrabold flex items-center tracking-tighter">
             HSK
          </div>
<span className="text-neutral-500 text-xs tracking-widest border-l border-neutral-700 pl-3">
            Performance Center
          </span>
</div>

<div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase text-neutral-400">
<a className="hover:text-red-600 transition-colors" href="#philosophy">
            Philosophie
          </a>
<a className="hover:text-red-600 transition-colors" href="#integration">
            Biometrie
          </a>
<a className="hover:text-red-600 transition-colors" href="#membership">
            Preise
          </a>
</div>

<button className="hidden md:flex group items-center gap-2 text-xs font-semibold tracking-widest uppercase border border-red-900/30 text-neutral-300 px-6 py-3 hover:bg-red-600 hover:text-black hover:border-red-600 transition-all duration-500 reveal-on-scroll reveal-visible">
          Warteliste
          <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>

<button className="md:hidden text-white hover:text-red-600 transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-950">

<div className="absolute inset-0 z-0">
<img alt="HSK Gym Background" className="w-full h-full object-cover grayscale brightness-[0.45] contrast-125 scale-105 animate-[pulse_10s_ease-in-out_infinite]" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=3840&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 md:pb-32 w-full h-full max-w-7xl z-10 pr-6 pb-24 pl-6 relative gap-x-8 gap-y-8 items-end">
<div className="md:col-span-8">

<div className="mb-8 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">

<div className="relative">
<h1 className="text-8xl md:text-9xl leading-none font-extrabold text-red-700 tracking-tighter flex items-center" style={{filter: 'drop-shadow(0 0 30px rgba(185,28,28,0.4))'}}>
                HSK
              </h1>
</div>

<div className="overflow-hidden py-2 pl-1">
<h2 className="animate-logo-text text-4xl md:text-6xl text-neutral-300 tracking-tight leading-[0.9] uppercase font-semibold reveal-on-scroll reveal-visible">
                Performance
                <br/>
<span className="text-neutral-500">Center</span>
</h2>
</div>
</div>
<p className="text-sm md:text-lg text-neutral-400 max-w-lg leading-relaxed border-l-2 border-red-700 pl-6 reveal-on-scroll reveal-visible">
            Luxus ist kein Komfort. Luxus ist die Fähigkeit zu widerstehen.
            Willkommen im Untergrund-Heiligtum der Elite.
          </p>
</div>
<div className="md:col-span-4 flex flex-col gap-6 justify-end">
<div className="flex gap-4 text-xs text-red-600 font-mono gap-x-4 gap-y-4 items-center">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
</span>
            KAPAZITÄT: 89% AUSGEBUCHT
          </div>
<div className="grid grid-cols-2 gap-px bg-white/5 border border-white/5">
<div className="bg-black/80 p-5 hover:bg-red-950/30 transition-colors cursor-pointer group border-r border-white/5 reveal-on-scroll reveal-visible">
<span className="block text-2xl text-white font-medium mb-1">01</span>
<span className="text-[10px] uppercase tracking-widest text-neutral-500 group-hover:text-red-500 transition-colors">
                Kraft
              </span>
</div>
<div className="bg-black/80 p-5 hover:bg-red-950/30 transition-colors cursor-pointer group reveal-on-scroll reveal-visible">
<span className="block text-2xl text-white font-medium mb-1">02</span>
<span className="text-[10px] uppercase tracking-widest text-neutral-500 group-hover:text-red-500 transition-colors">
                Kondition
              </span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
<div className="w-px h-16 bg-gradient-to-b from-transparent via-red-600 to-transparent animate-pulse"></div>
</div>
</header>

<section className="relative py-32 bg-black overflow-hidden border-t border-neutral-900" id="philosophy">
<div className="absolute inset-0 laser-grid opacity-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

<div className="md:col-span-7">
<span className="inline-block text-red-600 text-xs font-bold tracking-[0.2em] mb-6 uppercase flex items-center gap-2">
<span className="w-4 h-px bg-red-600"></span>
              Das Manifest
            </span>
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-tight mb-8 reveal-on-scroll">
              WIR VERKAUFEN KEINE
              <span className="text-neutral-700">FITNESS.</span>
<br/>
              WIR SCHMIEDEN
              <span className="text-red-700">DOMINANZ.</span>
</h2>
<div className="space-y-8 text-neutral-400 text-sm md:text-lg font-light leading-relaxed max-w-2xl">
<p className="reveal-on-scroll">
                Die moderne Welt macht dich weich. Sie bietet Bequemlichkeit auf
                Kosten der Leistungsfähigkeit. Im HSK Center Performance
                entfernen wir den Überschuss. Keine Ablenkungen. Keine Spiegel.
                Nur rohes Eisen und der Wille, die Schwerkraft zu besiegen.
              </p>
<p className="reveal-on-scroll">
                Entworfen von brutalistischen Architekten und
                Elite-Performance-Coaches ist unsere Anlage eine asymmetrische
                Landschaft der Herausforderung. Jeder Winkel, jeder Schatten ist
                berechnet, um deinen Geist auf das Einzige zu fokussieren, das
                zählt: Output.
              </p>
<p className="reveal-on-scroll">
                Wir glauben an die Reinheit des Schmerzes. Wachstum findet nur
                am Punkt des Widerstands statt. HSK ist der Amboss, auf dem du
                dich selbst neu schmiedest – härter, schärfer, unzerbrechlich.
              </p>
</div>
<div className="mt-12 flex items-center gap-10">
<div className="flex flex-col border-l border-red-900 pl-4">
<span className="text-3xl font-light text-white">
                  500
                  <span className="text-red-600 text-lg align-top">+</span>
</span>
<span className="text-[10px] uppercase text-neutral-500 tracking-wider mt-1">
                  Elite Mitglieder
                </span>
</div>
<div className="flex flex-col border-l border-neutral-800 pl-4">
<span className="text-3xl font-light text-white">
                  24
                  <span className="text-red-600 text-lg align-top">/7</span>
</span>
<span className="text-[10px] uppercase text-neutral-500 tracking-wider mt-1">
                  Zugang
                </span>
</div>
</div>
</div>

<div className="md:col-span-5 relative h-full min-h-[500px]">
<div className="absolute inset-0 bg-neutral-900 border border-neutral-800/50 p-1 group reveal-on-scroll">
<div className="h-full w-full bg-cover bg-center grayscale contrast-125 brightness-75 opacity-60 group-hover:opacity-80 transition-opacity duration-700 bg-[url(https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1600&amp;q=80)]" style={{}}></div>
<div className="absolute bottom-6 left-6 right-6 border-t border-red-600 pt-4 bg-gradient-to-t from-black/90 to-transparent p-4">
<div className="flex justify-between items-end">
<div className="">
<span className="block text-white text-lg font-semibold tracking-tight">
                      UNSERE PHILOSOPHIE
                    </span>
<span className="text-[10px] font-mono text-red-500">
                      SEKTOR_04 // FREIHANTEL
                    </span>
</div>
<iconify-icon className="text-white group-hover:rotate-45 transition-transform duration-500" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-y border-neutral-900 relative overflow-hidden" id="integration">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="text-center mb-16">
<span className="inline-flex items-center gap-2 rounded-full bg-red-950/20 px-4 py-1.5 text-[10px] text-red-500 ring-1 ring-red-900/30 uppercase tracking-widest mb-6 border border-red-900/20">
<iconify-icon icon="solar:heart-pulse-linear" width="14"></iconify-icon>
            Biometrische Synchronisation
          </span>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight reveal-on-scroll">
            BIOMETRIE &amp;
            <span className="text-neutral-600">ANALYSE</span>
</h2>
<p className="mx-auto mt-6 max-w-xl text-sm text-neutral-400 reveal-on-scroll">
            Verbinde deinen Wearable-Stack. Unsere Anlage liest deine Daten in
            Echtzeit und passt Beleuchtung, Musiktempo und Gerätewiderstand an.
          </p>
</div>

<div className="relative mx-auto mt-20 max-w-4xl w-full aspect-[3/1]">

<div className="absolute top-[13.33%] left-[21.11%] -translate-x-1/2 -translate-y-[180%] z-20">
<span className="inline-flex items-center justify-center bg-white/5 w-12 h-12 ring-white/10 ring-1 rounded-lg hover:bg-red-900/10 hover:ring-red-600/40 transition-all duration-500 shadow-lg">
<iconify-icon className="text-neutral-400" icon="solar:watch-square-linear" width="24"></iconify-icon>
</span>
</div>

<div className="absolute top-[13.33%] left-[50%] -translate-x-1/2 -translate-y-[180%] z-20">
<span className="inline-flex items-center justify-center bg-white/5 w-12 h-12 ring-white/10 ring-1 rounded-lg hover:bg-red-900/10 hover:ring-red-600/40 transition-all duration-500 shadow-lg">
<iconify-icon className="text-neutral-400" icon="solar:smartphone-linear" width="24"></iconify-icon>
</span>
</div>

<div className="absolute top-[13.33%] left-[78.89%] -translate-x-1/2 -translate-y-[180%] z-20">
<span className="inline-flex items-center justify-center bg-white/5 w-12 h-12 ring-white/10 ring-1 rounded-lg hover:bg-red-900/10 hover:ring-red-600/40 transition-all duration-500 shadow-lg">
<iconify-icon className="text-neutral-400" icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</span>
</div>

<svg className="absolute inset-0 w-full h-full opacity-90" fill="none" strokeWidth="2" viewbox="0 0 900 300">
<defs>
<filter height="200%" id="glow-red" width="200%" x="-50%" y="-50%">
<fegaussianblur result="coloredBlur" stddeviation="3"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>
<path d="M450 250 C 450 180, 250 120, 190 40" fill="none" opacity="0.6" stroke="#dc2626" stroke-dasharray="400" stroke-dashoffset="400" strokeLinecap="round" strokeWidth="1.5">
<animate attributename="stroke-dashoffset" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="400;0;400"></animate>
</path>
<path d="M450 250 C 450 180, 450 120, 450 40" fill="none" opacity="0.6" stroke="#dc2626" stroke-dasharray="400" stroke-dashoffset="400" strokeLinecap="round" strokeWidth="1.5">
<animate attributename="stroke-dashoffset" begin="0.2s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="400;0;400"></animate>
</path>
<path d="M450 250 C 450 180, 650 120, 710 40" fill="none" opacity="0.6" stroke="#dc2626" stroke-dasharray="400" stroke-dashoffset="400" strokeLinecap="round" strokeWidth="1.5">
<animate attributename="stroke-dashoffset" begin="0.4s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="400;0;400"></animate>
</path>
<circle cx="190" cy="40" fill="#ef4444" filter="url(#glow-red)" r="3">
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.4;1;0.4"></animate>
</circle>
<circle cx="450" cy="40" fill="#ef4444" filter="url(#glow-red)" r="3">
<animate attributename="opacity" begin="0.2s" dur="2s" repeatcount="indefinite" values="0.4;1;0.4"></animate>
</circle>
<circle cx="710" cy="40" fill="#ef4444" filter="url(#glow-red)" r="3">
<animate attributename="opacity" begin="0.4s" dur="2s" repeatcount="indefinite" values="0.4;1;0.4"></animate>
</circle>
</svg>

<svg className="absolute inset-0 w-full h-full opacity-50 blur-[2px]" fill="none" strokeWidth="2" viewbox="0 0 900 300">
<path d="M450 250 C 450 180, 250 120, 190 40" fill="none" stroke="#dc2626" stroke-dasharray="400" stroke-dashoffset="400" strokeLinecap="round" strokeWidth="2">
<animate attributename="stroke-dashoffset" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="400;0;400"></animate>
</path>
<path d="M450 250 C 450 180, 450 120, 450 40" fill="none" stroke="#dc2626" stroke-dasharray="400" stroke-dashoffset="400" strokeLinecap="round" strokeWidth="2">
<animate attributename="stroke-dashoffset" begin="0.2s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="400;0;400"></animate>
</path>
<path d="M450 250 C 450 180, 650 120, 710 40" fill="none" stroke="#dc2626" stroke-dasharray="400" stroke-dashoffset="400" strokeLinecap="round" strokeWidth="2">
<animate attributename="stroke-dashoffset" begin="0.4s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="400;0;400"></animate>
</path>
</svg>

<div className="absolute top-[83.33%] left-[50%] -translate-x-1/2 translate-y-[20%] z-20">
<span className="inline-flex items-center justify-center bg-black w-20 h-20 border-red-900/50 border rounded-2xl shadow-[0_0_50px_rgba(220,38,38,0.25)]">
<iconify-icon className="text-red-600 animate-pulse" icon="solar:dumbbell-large-linear" width="32"></iconify-icon>
</span>
</div>
</div>

<div className="flex justify-center gap-8 mt-16">
<div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-neutral-500">
<iconify-icon className="text-red-600" icon="solar:bolt-linear" width="14"></iconify-icon>
<span>Instant Sync</span>
</div>
<div className="w-px h-4 bg-neutral-800"></div>
<div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-neutral-500">
<iconify-icon className="text-red-600" icon="solar:shield-check-linear" width="14"></iconify-icon>
<span>Secure</span>
</div>
<div className="w-px h-4 bg-neutral-800"></div>
<div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-neutral-500">
<iconify-icon className="text-red-600" icon="solar:speedometer-linear" width="14"></iconify-icon>
<span>Real-time</span>
</div>
</div>
</div>
</section>

<section className="bg-black pt-32 pb-32 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
<div className="">
<h3 className="text-3xl font-semibold text-white tracking-tight uppercase">
              Ziele &amp; Atmosphäre
            </h3>
<p className="text-neutral-500 text-sm mt-2 reveal-on-scroll">
              Wo Schatten auf Stahl trifft.
            </p>
</div>
<a className="text-xs text-red-600 hover:text-white transition-colors uppercase tracking-widest mt-4 md:mt-0 flex items-center gap-2 group reveal-on-scroll" href="#">
            Ganze Galerie
            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-2 h-[800px] md:h-[650px]">

<div className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-neutral-900 reveal-on-scroll">
<img className="w-full h-full object-cover grayscale brightness-90 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100" src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&amp;w=1600&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-8 left-8 border-l-2 border-red-600 pl-4">
<h4 className="text-2xl text-white font-semibold uppercase tracking-tight">
                Freihantel Bereich
              </h4>
<p className="text-xs text-neutral-400 mt-1 uppercase tracking-widest reveal-on-scroll">
                Olympischer Standard
              </p>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-neutral-900 reveal-on-scroll">
<img className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:scale-105 group-hover:brightness-100" src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&amp;w=800&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute top-4 right-4 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:target-linear" width="20"></iconify-icon>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 bg-red-950/10 border border-red-900/20 p-8 flex flex-col justify-center items-start group hover:bg-red-900/20 transition-colors relative overflow-hidden reveal-on-scroll">
<div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
<div className="relative z-10 w-full">
<h4 className="text-red-600 text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_red]"></span>
                Unsere Ziele
              </h4>
<ul className="space-y-4 text-white text-sm font-medium tracking-wide uppercase">
<li className="flex items-center gap-3 border-b border-red-900/20 pb-2">
<iconify-icon className="text-red-600" icon="solar:dumbbell-large-linear" width="14"></iconify-icon>
                  Physische Dominanz
                </li>
<li className="flex items-center gap-3 border-b border-red-900/20 pb-2">
<iconify-icon className="text-red-600" icon="solar:brain-linear" width="14"></iconify-icon>
                  Mentale Härte
                </li>
<li className="flex items-center gap-3 pb-2">
<iconify-icon className="text-red-600" icon="solar:star-linear" width="14"></iconify-icon>
                  Ästhetische Perfektion
                </li>
</ul>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 relative group overflow-hidden bg-neutral-900 reveal-on-scroll">
<img className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" src="https://images.unsplash.com/flagged/photo-1556746834-1cb5b8fabd54?w=1600&amp;q=80" style={{}}/>
<div className="bg-gradient-to-r from-black/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-8 left-8">
<h4 className="text-xl text-white font-semibold uppercase tracking-tight">
                Cardio Theater
              </h4>
<p className="text-xs text-neutral-400 mt-1 uppercase tracking-widest reveal-on-scroll">
                Immersives Erlebnis
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-neutral-950 relative" id="membership">
<div className="opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4 uppercase reveal-on-scroll">
            Preise &amp; Mitgliedschaft
          </h2>
<p className="text-neutral-500 text-sm tracking-wide uppercase reveal-on-scroll">
            Wähle deine Verpflichtung
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="group relative bg-white/5 border border-white/5 hover:border-white/20 p-8 flex flex-col transition-all duration-300 reveal-on-scroll">
<div className="mb-8">
<h3 className="text-lg font-bold text-white uppercase tracking-widest">
                Initiat
              </h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-bold text-white tracking-tight" style={{}}>30€</span>
<span className="ml-2 text-sm text-neutral-500">/mtl.</span>
</div>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-sm text-neutral-400">
<iconify-icon className="text-neutral-600 mt-0.5" icon="solar:check-read-linear" width="16"></iconify-icon>
<span className="">Off-Peak Zugang (09:00 - 16:00)</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<iconify-icon className="text-neutral-600 mt-0.5" icon="solar:check-read-linear" width="16"></iconify-icon>
<span>Standard Schließfach</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<iconify-icon className="text-neutral-600 mt-0.5" icon="solar:check-read-linear" width="16"></iconify-icon>
<span className="">Cardio &amp; Kraft Zonen</span>
</li>
</ul>
<button className="w-full py-4 border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
              Bewerben
            </button>
</div>

<div className="group relative bg-black border border-red-600/50 p-10 flex flex-col shadow-[0_0_50px_rgba(220,38,38,0.1)] scale-105 z-10 reveal-on-scroll">
<div className="absolute top-0 inset-x-0 h-1 bg-red-600 shadow-[0_0_20px_rgba(239,68,68,0.8)]"></div>
<div className="mb-8">
<div className="flex justify-between items-center mb-2">
<h3 className="text-xl font-bold text-white uppercase tracking-widest">
                  Elite
                </h3>
<span className="bg-red-600/10 text-red-500 text-[9px] font-bold px-2 py-1 uppercase tracking-widest border border-red-600/30">
                  Beliebt
                </span>
</div>
<div className="mt-4 flex items-baseline">
<span className="glow-text text-5xl font-bold text-white tracking-tight" style={{}}>40€</span>
<span className="ml-2 text-sm text-neutral-400">/mtl.</span>
</div>
</div>
<ul className="space-y-5 mb-10 flex-1">
<li className="flex items-start gap-3 text-sm text-white">
<iconify-icon className="text-red-600 mt-0.5" icon="solar:check-read-linear" width="16"></iconify-icon>
<span className="">24/7 Biometrischer Zugang</span>
</li>
<li className="flex items-start gap-3 text-sm text-white">
<iconify-icon className="text-red-600 mt-0.5" icon="solar:check-read-linear" width="16"></iconify-icon>
<span className="">Private Kryotherapie Sessions</span>
</li>
<li className="flex items-start gap-3 text-sm text-white">
<iconify-icon className="text-red-600 mt-0.5" icon="solar:check-read-linear" width="16"></iconify-icon>
<span className="">Ernährungs-Concierge</span>
</li>
</ul>
<button className="w-full py-4 bg-red-700 text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-red-600 transition-all shadow-[0_0_20px_rgba(185,28,28,0.3)]">
              Platz sichern
            </button>
</div>

<div className="group relative bg-white/5 border border-white/5 hover:border-white/20 p-8 flex flex-col transition-all duration-300 reveal-on-scroll">
<div className="mb-8">
<h3 className="text-lg font-bold text-white uppercase tracking-widest">
                Apex
              </h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-bold text-white tracking-tight" style={{}}>60€</span>
<span className="ml-2 text-sm text-neutral-500">/mtl.</span>
</div>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-sm text-neutral-400">
<iconify-icon className="text-neutral-600 mt-0.5" icon="solar:check-read-linear" width="16"></iconify-icon>
<span className="">Alle Elite Vorteile</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<iconify-icon className="text-neutral-600 mt-0.5" icon="solar:check-read-linear" width="16"></iconify-icon>
<span>1-on-1 Performance Coaching</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<iconify-icon className="text-neutral-600 mt-0.5" icon="solar:check-read-linear" width="16"></iconify-icon>
<span className="">Privates Executive Schließfach</span>
</li>
</ul>
<button className="w-full py-4 border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
              Anfragen
            </button>
</div>
</div>

<div className="mt-16 flex justify-center items-center gap-4">
<span className="text-xs font-bold uppercase text-neutral-500 tracking-widest">
            Monatlich
          </span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="peer-focus:outline-none peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-neutral-400 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neutral-900 peer-checked:border-red-900 peer-checked:after:bg-red-600 bg-neutral-900 w-12 h-6 border-neutral-800 border rounded-full"></div>
</label>
<span className="text-xs font-bold uppercase text-white tracking-widest">
            Jährlich
            <span className="text-red-600 ml-1">(-20%)</span>
</span>
</div>
</div>
</section>

<footer className="bg-black pt-24 pb-12 border-t border-neutral-900">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="text-2xl font-bold tracking-tighter text-white uppercase mb-6 flex items-center gap-2">
<span className="text-red-600 font-extrabold tracking-tighter">
                 HSK
              </span>
              PERFORMANCE CENTER
            </div>
<p className="text-neutral-500 text-sm max-w-sm leading-relaxed reveal-on-scroll">
              Eine Untergrund-Anlage für diejenigen, die Mittelmäßigkeit
              verweigern. Wir existieren in den Schatten, um das Licht in dir zu
              entfachen.
            </p>
<div className="flex gap-6 mt-8">
<a className="text-neutral-600 hover:text-red-600 transition-colors" href="#">
<iconify-icon icon="mdi:instagram" width="20"></iconify-icon>
</a>
<a className="text-neutral-600 hover:text-red-600 transition-colors" href="#">
<iconify-icon icon="mdi:twitter" width="20"></iconify-icon>
</a>
<a className="text-neutral-600 hover:text-red-600 transition-colors" href="#">
<iconify-icon icon="mdi:youtube" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="">
<h4 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-red-700">
              Standort
            </h4><p className="leading-relaxed reveal-on-scroll text-sm text-neutral-500">HSK Performance Center Strackestraße 22 59929 Brilon</p>
<p className="text-neutral-500 text-sm mt-4 hover:text-red-500 transition-colors cursor-pointer reveal-on-scroll">
              access@hsk-performance.de
            </p>
</div>
<div className="">
<h4 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-red-700">
              Rechtliches
            </h4>
<ul className="space-y-3 text-sm text-neutral-600 font-medium">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Impressum
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Datenschutz
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">AGB</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-neutral-800 text-[10px] uppercase tracking-widest reveal-on-scroll">
            © 2024 HSK Center Performance. All Rights Reserved.
          </p>
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse shadow-[0_0_10px_red]"></div>
<span className="text-neutral-600 text-[10px] font-mono tracking-widest">
              SYSTEM STATUS: ONLINE
            </span>
</div>
</div>
</div>
</footer>


    </>
  );
}
