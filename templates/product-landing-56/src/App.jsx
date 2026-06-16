import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // Brand Slider Logic
        const slider = document.getElementById('brandSlider');
        const buttons = document.querySelectorAll('.brand-btn');
        const stageBg = document.getElementById('stageBg');
        const stageTitle = document.getElementById('stageTitle');

        document.getElementById('slideLeft').addEventListener('click', () => slider.scrollBy({ left: -200, behavior: 'smooth' }));
        document.getElementById('slideRight').addEventListener('click', () => slider.scrollBy({ left: 200, behavior: 'smooth' }));

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                // UI Update
                buttons.forEach(b => b.classList.remove('brand-active'));
                btn.classList.add('brand-active');

                // Data Extraction
                const newImage = btn.dataset.bg;
                const newTitle = btn.dataset.title;

                // Visual Transition
                stageBg.style.opacity = '0';
                
                setTimeout(() => {
                    stageBg.style.backgroundImage = `url('${newImage}')`;
                    stageTitle.innerText = newTitle;
                    stageBg.style.opacity = '0.6'; // Return to target opacity
                }, 300);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<svg aria-hidden="true" focusable="false" style={{width: '0', height: '0', position: 'absolute'}}>
<defs>
<lineargradient id="silver-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#a1a1aa"></stop> 
<stop offset="25%" stop-color="#e4e4e7"></stop> 
<stop offset="50%" stop-color="#d4d4d8"></stop> 
<stop offset="75%" stop-color="#52525b"></stop> 
<stop offset="100%" stop-color="#a1a1aa"></stop>
</lineargradient>

<lineargradient id="silver-animated" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#71717a"></stop>
<stop offset="50%" stop-color="#ffffff">
<animate attributename="offset" dur="3s" repeatcount="indefinite" values="-1; 2"></animate>
</stop>
<stop offset="100%" stop-color="#71717a"></stop>
</lineargradient>
</defs>
</svg>

<nav className="fixed top-0 left-0 w-full z-50 glass-panel border-b-0 border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-sm font-semibold tracking-tight uppercase flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-gradient-to-tr from-white to-zinc-500 block"></span>
                PHONEHOLDER.CH
            </div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400 tracking-wide">
<a className="hover:text-white transition-colors" href="#interieur">INTERIEUR</a>
<a className="hover:text-white transition-colors" href="#features">GRAVITY TECH</a>
<a className="hover:text-white transition-colors" href="#mount">MONTAGE</a>
</div>
<button className="bg-white text-black px-5 py-2 rounded-full text-xs font-semibold hover:bg-zinc-200 transition-colors tracking-tight">
                Jetzt sichern
            </button>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] z-10 pointer-events-none"></div>
<div className="z-20 text-center space-y-6 max-w-4xl px-6 fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-[10px] font-medium tracking-widest uppercase text-zinc-300">Neu: Das 2024 Gravity-Upgrade</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600">
                Unsichtbar.<br/>Bis du es brauchst.
            </h1>
<p className="text-lg md:text-xl text-zinc-400 font-normal tracking-tight max-w-lg mx-auto leading-relaxed">
                Die kleinste Schwerkraft-Halterung der Welt. Entfaltet sich automatisch, wenn du dein Smartphone einlegst. Verschwindet, wenn du es entnimmst.
            </p>
</div>

<div className="relative z-10 mt-16 stage-3d fade-in-up" style={{animationDelay: '0.2s'}}>
<div className="w-64 h-64 md:w-80 md:h-80 relative flex items-center justify-center animate-float">

<div className="w-20 h-20 bg-gradient-to-br from-zinc-700 to-black rounded-full border border-zinc-600 shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)] z-20 flex items-center justify-center">
<div className="w-12 h-12 bg-zinc-900 rounded-full border border-zinc-700 flex items-center justify-center">
<span className="text-[10px] font-bold text-zinc-500">GRAVITY</span>
</div>
</div>

<div className="absolute w-48 h-2 bg-gradient-to-r from-zinc-600 via-zinc-400 to-zinc-600 rounded-full rotate-45 z-10 shadow-lg"></div>
<div className="absolute w-48 h-2 bg-gradient-to-r from-zinc-600 via-zinc-400 to-zinc-600 rounded-full -rotate-45 z-10 shadow-lg"></div>

<div className="absolute w-4 h-8 bg-black border border-zinc-600 rounded-md top-[20%] left-[20%] z-30"></div>
<div className="absolute w-4 h-8 bg-black border border-zinc-600 rounded-md top-[20%] right-[20%] z-30"></div>
<div className="absolute w-4 h-8 bg-black border border-zinc-600 rounded-md bottom-[20%] left-[20%] z-30"></div>
<div className="absolute w-4 h-8 bg-black border border-zinc-600 rounded-md bottom-[20%] right-[20%] z-30"></div>

<div className="absolute inset-0 bg-blue-500/10 blur-[60px] rounded-full"></div>
</div>
<p className="text-center text-xs text-zinc-500 mt-8 font-medium tracking-wider uppercase">Fährt automatisch aus</p>
</div>
</section>

<section className="relative py-24 bg-zinc-950 border-t border-white/5" id="interieur">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8">
<div>
<h2 className="text-sm font-semibold text-zinc-400 tracking-wider uppercase mb-3">Premium Integration</h2>
<h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white">Passt in jedes Cockpit.</h3>
</div>

<div className="flex gap-2">
<button className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-zinc-400 hover:text-white" id="slideLeft">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-zinc-400 hover:text-white" id="slideRight">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>
</div>

<div className="relative w-full overflow-hidden mb-12">
<div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 snap-x" id="brandSlider">

<button className="brand-btn brand-active group flex-shrink-0 snap-start px-8 py-6 rounded-2xl border border-white/10 transition-all duration-300 w-40 md:w-48 flex flex-col items-center justify-center gap-4" data-bg="https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?q=80&amp;w=2574&amp;auto=format&amp;fit=crop" data-title="Audi Cockpit">
<svg className="w-14 h-auto silver-logo" viewbox="0 0 100 40" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5,28.5c-4.1,0-7.5-3.4-7.5-7.5s3.4-7.5,7.5-7.5s7.5,3.4,7.5,7.5S26.6,28.5,22.5,28.5z M22.5,15.5
                                c-3,0-5.5,2.5-5.5,5.5s2.5,5.5,5.5,5.5s5.5-2.5,5.5-5.5S25.5,15.5,22.5,15.5z M40.5,28.5c-4.1,0-7.5-3.4-7.5-7.5
                                s3.4-7.5,7.5-7.5s7.5,3.4,7.5,7.5S44.6,28.5,40.5,28.5z M40.5,15.5c-3,0-5.5,2.5-5.5,5.5s2.5,5.5,5.5,5.5s5.5-2.5,5.5-5.5
                                S43.5,15.5,40.5,15.5z M58.5,28.5c-4.1,0-7.5-3.4-7.5-7.5s3.4-7.5,7.5-7.5s7.5,3.4,7.5,7.5S62.6,28.5,58.5,28.5z M58.5,15.5
                                c-3,0-5.5,2.5-5.5,5.5s2.5,5.5,5.5,5.5s5.5-2.5,5.5-5.5S61.5,15.5,58.5,15.5z M76.5,28.5c-4.1,0-7.5-3.4-7.5-7.5
                                s3.4-7.5,7.5-7.5s7.5,3.4,7.5,7.5S80.6,28.5,76.5,28.5z M76.5,15.5c-3,0-5.5,2.5-5.5,5.5s2.5,5.5,5.5,5.5s5.5-2.5,5.5-5.5
                                S79.5,15.5,76.5,15.5z" fill="url(#silver-gradient)"></path>
</svg>
<span className="text-xs font-medium tracking-wide text-zinc-400 group-hover:text-white">Audi</span>
</button>

<button className="brand-btn group flex-shrink-0 snap-start px-8 py-6 rounded-2xl border border-white/10 transition-all duration-300 w-40 md:w-48 flex flex-col items-center justify-center gap-4" data-bg="https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&amp;w=2625&amp;auto=format&amp;fit=crop" data-title="Mercedes-Benz Interior">
<svg className="w-12 h-12 silver-logo" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" fill="none" r="45" stroke="url(#silver-gradient)" strokeWidth="4"></circle>
<path d="M50 8 L55 48 L90 62 L51 51 L50 90 L49 51 L10 62 L45 48 Z" fill="url(#silver-gradient)"></path>
</svg>
<span className="text-xs font-medium tracking-wide text-zinc-400 group-hover:text-white">Mercedes</span>
</button>

<button className="brand-btn group flex-shrink-0 snap-start px-8 py-6 rounded-2xl border border-white/10 transition-all duration-300 w-40 md:w-48 flex flex-col items-center justify-center gap-4" data-bg="https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" data-title="Porsche Interior">
<svg className="w-10 h-10 silver-logo fill-none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="M25 15 C25 15 75 15 75 15 C80 15 85 20 85 30 L85 40 C85 65 50 90 50 90 C50 90 15 65 15 40 L15 30 C15 20 20 15 25 15 Z" fill="none" stroke="url(#silver-gradient)" strokeWidth="4"></path>
<path d="M25 35 L75 35" stroke="url(#silver-gradient)" strokeWidth="2"></path>
</svg>
<span className="text-xs font-medium tracking-wide text-zinc-400 group-hover:text-white">Porsche</span>
</button>

<button className="brand-btn group flex-shrink-0 snap-start px-8 py-6 rounded-2xl border border-white/10 transition-all duration-300 w-40 md:w-48 flex flex-col items-center justify-center gap-4" data-bg="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&amp;w=2661&amp;auto=format&amp;fit=crop" data-title="Tesla Minimalist">
<svg className="w-10 h-10 silver-logo" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="M50 25 C65 25 80 20 90 15 L88 20 C75 28 60 30 50 30 C40 30 25 28 12 20 L10 15 C20 20 35 25 50 25 Z M50 35 C55 35 68 33 78 28 L75 35 C68 45 60 50 53 50 L53 85 L47 85 L47 50 C40 50 32 45 25 35 L22 28 C32 33 45 35 50 35 Z" fill="url(#silver-gradient)"></path>
</svg>
<span className="text-xs font-medium tracking-wide text-zinc-400 group-hover:text-white">Tesla</span>
</button>

<button className="brand-btn group flex-shrink-0 snap-start px-8 py-6 rounded-2xl border border-white/10 transition-all duration-300 w-40 md:w-48 flex flex-col items-center justify-center gap-4" data-bg="https://images.unsplash.com/photo-1555215695-3004980adade?q=80&amp;w=2670&amp;auto=format&amp;fit=crop" data-title="BMW Cockpit">
<svg className="w-12 h-12 silver-logo" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" fill="none" r="45" stroke="url(#silver-gradient)" strokeWidth="3"></circle>
<circle cx="50" cy="50" fill="none" r="30" stroke="url(#silver-gradient)" strokeWidth="1"></circle>
</svg>
<span className="text-xs font-medium tracking-wide text-zinc-400 group-hover:text-white">BMW</span>
</button>

<button className="brand-btn group flex-shrink-0 snap-start px-8 py-6 rounded-2xl border border-white/10 transition-all duration-300 w-40 md:w-48 flex flex-col items-center justify-center gap-4" data-bg="https://images.unsplash.com/photo-1621285853634-713b8dd6b520?q=80&amp;w=2574&amp;auto=format&amp;fit=crop" data-title="VW Interior">
<svg className="w-12 h-12 silver-logo" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" fill="none" r="45" stroke="url(#silver-gradient)" strokeWidth="4"></circle>
<path d="M25 25 L50 85 L75 25 M38 25 L50 55 L62 25 M38 55 L25 25 M62 55 L75 25" fill="none" stroke="url(#silver-gradient)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>
</svg>
<span className="text-xs font-medium tracking-wide text-zinc-400 group-hover:text-white">VW</span>
</button>
</div>
</div>

<div className="mt-8 w-full h-[50vh] md:h-[65vh] rounded-3xl relative overflow-hidden transition-all duration-500 border border-white/10 bg-black group shadow-2xl">

<div className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out scale-105 group-hover:scale-110 opacity-60" id="stageBg" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?q=80&amp'}}>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" id="productMount">

<div className="relative w-48 h-64 flex flex-col items-center justify-center animate-float">

<div className="w-36 h-64 rounded-[2rem] border-[4px] border-zinc-800 bg-black shadow-2xl relative z-20 flex flex-col overflow-hidden">
<div className="absolute inset-0 bg-zinc-900/90 backdrop-blur-sm flex items-center justify-center">
<i className="text-blue-500 w-12 h-12" data-lucide="navigation"></i>
</div>

<div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
</div>

<div className="absolute bottom-10 w-44 h-12 bg-zinc-800 rounded-full z-30 translate-y-4 border border-zinc-600 flex items-center justify-between px-2">
<div className="w-2 h-8 bg-zinc-500 rounded-full"></div> 
<div className="w-2 h-8 bg-zinc-500 rounded-full"></div> 
</div>
</div>
</div>

<div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-30">
<div className="inline-flex items-center gap-2 mb-2">
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
<p className="text-xs text-zinc-300 uppercase tracking-widest">Kompatibel</p>
</div>
<h4 className="text-3xl md:text-4xl font-semibold tracking-tight text-white drop-shadow-lg" id="stageTitle">Audi Cockpit</h4>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Kleiner als ein Feuerzeug.</h2>
<p className="text-zinc-400">Herkömmliche Halterungen verschandeln das Interieur. Unsere wurde entwickelt, um unsichtbar zu sein.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-900/60 transition-colors">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white border border-white/10">
<i className="w-5 h-5" data-lucide="arrow-down-to-line"></i>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-zinc-100">Gravity Linkage</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                        Das Eigengewicht des Handys schließt die 5-Punkt-Klammern automatisch. Bombenfester Halt ohne Motoren oder Magnete.
                    </p>
</div>

<div className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-900/60 transition-colors">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white border border-white/10">
<i className="w-5 h-5" data-lucide="anchor"></i>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-zinc-100">Adler-Haken Design</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                        Der patentierte "Eagle Beak"-Haken verkrallt sich hinter der Lüftungslamelle. Kein Verrutschen, selbst bei Vollbremsungen.
                    </p>
</div>

<div className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-900/60 transition-colors">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white border border-white/10">
<i className="w-5 h-5" data-lucide="shield"></i>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-zinc-100">Pneumatischer Schutz</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                        Verdickte Silikon-Pads mit Luftpolstern dämpfen Vibrationen und schützen Ihr teures Smartphone vor Kratzern.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="glass-panel p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-12 relative overflow-hidden border-white/10">

<div className="absolute inset-0 bg-gradient-to-br from-zinc-800/50 via-zinc-900/50 to-black/80 z-0"></div>
<div className="flex-1 relative z-10 w-full">

<div className="aspect-[4/3] bg-zinc-900 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-700/30 to-black"></div>

<div className="relative w-32 h-32 flex items-center justify-center">
<div className="w-full h-2 bg-zinc-600 rounded-full rotate-45 absolute"></div>
<div className="w-full h-2 bg-zinc-600 rounded-full -rotate-45 absolute"></div>
<div className="w-16 h-16 bg-zinc-800 rounded-full border-4 border-zinc-600 z-10 shadow-2xl"></div>
</div>
</div>
</div>
<div className="flex-1 space-y-8 relative z-10">
<div>
<div className="inline-block px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider text-white mb-4 border border-white/10">Bestseller</div>
<h2 className="text-4xl font-semibold tracking-tight mb-2 text-white">Gravity Pro Mount</h2>
<div className="flex items-baseline gap-4 mt-4">
<span className="text-5xl font-bold tracking-tight text-white">CHF 29.90</span>
<span className="text-xl text-zinc-500 line-through">CHF 59.90</span>
</div>
</div>
<ul className="space-y-3 text-zinc-400 text-sm">
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-white" data-lucide="check"></i> Matt-Schwarzes Finish (Passt zu jedem Dashboard)
                        </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-white" data-lucide="check"></i> Für 4.7" bis 7.0" Smartphones
                        </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-white" data-lucide="check"></i> Hält auch mit Handyhülle
                        </li>
</ul>
<button className="w-full bg-white text-black text-lg font-bold py-4 rounded-xl hover:bg-zinc-200 transition-all active:scale-95 flex items-center justify-center gap-2 group shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                        In den Warenkorb
                        <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<div className="flex justify-center gap-6 text-[10px] text-zinc-500 uppercase tracking-widest">
<span>Gratis Versand</span>
<span>Schweizer Shop</span>
<span>2 Jahre Garantie</span>
</div>
</div>
</div>
</div>
</section>
<footer className="py-12 border-t border-white/5 bg-black text-center relative z-10">
<div className="text-xl font-semibold tracking-tight uppercase mb-4 text-zinc-600">PHONEHOLDER.CH</div>
<div className="text-xs text-zinc-600 flex flex-col md:flex-row justify-center gap-6">
<a className="hover:text-white transition-colors" href="#">Impressum</a>
<a className="hover:text-white transition-colors" href="#">Datenschutz</a>
<a className="hover:text-white transition-colors" href="#">Widerrufsrecht</a>
<span>© 2024 Switzerland</span>
</div>
</footer>


    </>
  );
}
