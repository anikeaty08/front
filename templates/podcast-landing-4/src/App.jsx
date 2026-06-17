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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const navbar = document.getElementById('navbar');
            const navPlaying = document.getElementById('nav-playing');

            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    // Scrolled state
                    navbar.classList.add('bg-[#364C61]/85', 'backdrop-blur-md', 'border-[#899678]/20', 'shadow-lg');
                    navbar.classList.remove('bg-transparent', 'border-transparent');
                    
                    // Show EQ
                    navPlaying.classList.remove('opacity-0', 'w-0', 'pl-0');
                    navPlaying.classList.add('opacity-100', 'w-auto', 'pl-6');
                } else {
                    // Top state
                    navbar.classList.remove('bg-[#364C61]/85', 'backdrop-blur-md', 'border-[#899678]/20', 'shadow-lg');
                    navbar.classList.add('bg-transparent', 'border-transparent');
                    
                    // Hide EQ
                    navPlaying.classList.add('opacity-0', 'w-0', 'pl-0');
                    navPlaying.classList.remove('opacity-100', 'w-auto', 'pl-6');
                }
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
      
<div className="bg-noise"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-3 py-3 rounded-full w-[92%] max-w-5xl transition-all duration-400 border" id="navbar">
<div className="flex items-center gap-4 pl-1">
<div className="w-10 h-10 rounded-full bg-[#1C1C1C] flex items-center justify-center overflow-hidden border border-[#899678]/30">
<span className="font-display font-semibold text-lg text-[#F5F0EB] tracking-tight">H</span>
</div>
<span className="font-display font-semibold tracking-tight uppercase text-sm hidden sm:block">Hunt for Success</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
<a className="hover:text-[#899678] transition-colors" href="#">Episodes</a>
<a className="hover:text-[#899678] transition-colors" href="#">About</a>
<a className="hover:text-[#899678] transition-colors" href="#">Guests</a>
<div className="flex items-center gap-3 overflow-hidden transition-all duration-500 ease-in-out border-l border-[#899678]/30" id="nav-playing">
<div className="flex items-end gap-[3px] h-3.5">
<div className="w-1 bg-[#899678] eq-bar h-full rounded-t-sm"></div>
<div className="w-1 bg-[#899678] eq-bar h-full rounded-t-sm"></div>
<div className="w-1 bg-[#899678] eq-bar h-full rounded-t-sm"></div>
</div>
<span className="font-mono text-xs text-[#899678] tracking-widest uppercase truncate max-w-[120px]">Ep. 01 Built in</span>
</div>
</div>
<a className="btn-sliding btn-magnetic text-[#F5F0EB] px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-colors" href="#listen">
            Start Listening
        </a>
</nav>

<section className="relative min-h-[100svh] w-full flex flex-col justify-end pb-32 sm:pb-24 px-6 md:px-12 lg:px-24">

<div className="absolute inset-0 z-0">
<img alt="Campfire under dark sky" className="w-full h-full object-cover object-bottom" src="https://assets.cdn.filesafe.space/urI9NXscsbbGdnXhycTH/media/69a1ee66b617a7ec6fccfc87.webp"/>
<div className="absolute inset-0 bg-[#364C61]/40 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C]/60 via-transparent to-[#364C61]"></div>
</div>

<div className="flex flex-col w-full max-w-7xl z-10 mr-auto ml-auto relative gap-x-8 gap-y-8 items-start">
<div className="flex items-center gap-4 bg-[#1C1C1C]/40 backdrop-blur-md rounded-full pr-6 p-2 border border-[#899678]/20">
<img alt="Dr. Sam McGough" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<span className="font-mono text-xs text-[#899678] uppercase tracking-widest font-semibold">Hosted by Dr. Sam McGough</span>
</div>
<div className="max-w-5xl">
<h1 className="text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] font-extrabold text-[#F5F0EB] tracking-tight font-display mb-6">Success is not an accident.<br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F0EB] to-[#899678]">it's a hunt.</span></h1>
<p className="md:text-lg leading-relaxed text-base font-medium text-[#F5F0EB]/80 font-body max-w-2xl">Real conversations with entrepreneurs who built wealth, discipline, and freedom - and designed a life worth living.</p>
</div>
<div className="flex flex-wrap items-center gap-6 mt-4">
<a className="btn-sliding btn-magnetic text-[#F5F0EB] px-8 py-4 rounded-full text-sm font-semibold tracking-wide uppercase flex items-center gap-3" href="#listen">
<iconify-icon className="text-xl" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Start Listening
                </a>
<div className="flex items-center gap-3">
<a className="platform-badge w-12 h-12 rounded-full bg-[#1C1C1C]/50 backdrop-blur-md border border-[#F5F0EB]/10 flex items-center justify-center text-[#F5F0EB]" href="#">
<iconify-icon className="text-xl" icon="solar:music-note-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="platform-badge w-12 h-12 rounded-full bg-[#1C1C1C]/50 backdrop-blur-md border border-[#F5F0EB]/10 flex items-center justify-center text-[#F5F0EB]" href="#">
<iconify-icon className="text-xl" icon="solar:podcast-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="platform-badge w-12 h-12 rounded-full bg-[#1C1C1C]/50 backdrop-blur-md border border-[#F5F0EB]/10 flex items-center justify-center text-[#F5F0EB]" href="#">
<iconify-icon className="text-xl" icon="solar:play-stream-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>

<a className="absolute bottom-6 left-6 right-6 md:left-12 md:right-12 lg:left-24 lg:right-24 z-20 group" href="#episode">
</a>
</section>

<section className="md:px-12 lg:px-24 square-edges w-full max-w-[100rem] mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="episode">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="bg-[#1C1C1C]/60 backdrop-blur-sm border border-[#899678]/20 rounded-[2rem] p-8 flex flex-col h-full relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-[#88653D]/5 to-transparent pointer-events-none"></div>
<span className="font-mono text-xs text-[#899678] uppercase tracking-widest font-semibold mb-8 block">Latest Episode</span>
<div className="flex gap-6 items-start mb-auto">
<img alt="Episode Art" className="w-24 h-24 rounded-[1rem] object-cover shadow-lg" src="https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div className="">
<h3 className="font-display font-semibold text-xl tracking-tight leading-tight mb-2">Built in the Backcountry</h3>
<p className="font-body text-xs text-[#F5F0EB]/60 line-clamp-3">How a ranch owner turned a passion for the outdoors into an 8-figure business — and why the lessons he learned in the field mattered more than any boardroom.</p>
</div>
</div>
<div className="mt-8">

<div className="flex items-end gap-1 h-12 mb-4 w-full opacity-60 group-hover:opacity-100 transition-opacity">
<div className="flex-1 bg-[#88653D] h-[20%] rounded-sm"></div>
<div className="flex-1 bg-[#88653D] h-[40%] rounded-sm"></div>
<div className="flex-1 bg-[#88653D] h-[80%] rounded-sm"></div>
<div className="flex-1 bg-[#88653D] h-[100%] rounded-sm"></div>
<div className="flex-1 bg-[#88653D] h-[60%] rounded-sm"></div>
<div className="flex-1 bg-[#88653D] h-[30%] rounded-sm"></div>
<div className="flex-1 bg-[#88653D] h-[70%] rounded-sm"></div>
<div className="flex-1 bg-[#88653D] h-[90%] rounded-sm"></div>
<div className="flex-1 bg-[#88653D] h-[50%] rounded-sm"></div>
<div className="flex-1 bg-[#88653D] h-[20%] rounded-sm"></div>
<div className="flex-1 bg-[#364C61] h-[40%] rounded-sm"></div>
<div className="flex-1 bg-[#364C61] h-[60%] rounded-sm"></div>
<div className="flex-1 bg-[#364C61] h-[30%] rounded-sm"></div>
<div className="flex-1 bg-[#364C61] h-[50%] rounded-sm"></div>
<div className="flex-1 bg-[#364C61] h-[20%] rounded-sm"></div>
</div>
<div className="flex items-center gap-4">
<button className="w-12 h-12 flex-shrink-0 rounded-full bg-[#88653D] text-[#F5F0EB] flex items-center justify-center active:scale-95 transition-transform shadow-[0_4px_14px_rgba(136,101,61,0.4)]">
<iconify-icon className="text-xl ml-1" icon="solar:play-linear" strokeWidth="2"></iconify-icon>
</button>
<div className="flex-1">
<div className="w-full bg-[#364C61] h-1.5 rounded-full overflow-hidden relative cursor-pointer">
<div className="absolute left-0 top-0 h-full bg-[#88653D] w-[30%] rounded-full"></div>
</div>
<div className="flex justify-between mt-2 font-mono text-[10px] text-[#F5F0EB]/40">
<span>11:31</span>
<span>38:24</span>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col lg:min-h-[400px] bg-[#1C1C1C]/60 h-full border-[#899678]/20 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 backdrop-blur-sm">
<span className="font-mono text-xs text-[#899678] uppercase tracking-widest font-semibold mb-8 block">What to Expect</span>
<div className="relative flex-1 mt-4">

<div className="absolute top-8 left-[5%] w-[90%] bg-[#364C61]/30 border border-[#899678]/10 rounded-[1.5rem] p-6 h-32 transform scale-y-90 opacity-40 z-10 transition-all duration-500"></div>

<div className="absolute top-4 left-[2.5%] w-[95%] bg-[#364C61]/60 border border-[#899678]/20 rounded-[1.5rem] p-6 h-32 transform scale-y-95 opacity-70 z-20 transition-all duration-500"></div>

<div className="absolute top-0 left-0 w-full bg-[#364C61] border border-[#899678]/40 rounded-[1.5rem] p-6 h-auto min-h-[8rem] z-30 shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-default group">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-[#88653D]/20 flex items-center justify-center text-[#88653D] flex-shrink-0 mt-1">
<iconify-icon icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<h4 className="font-display font-semibold text-lg tracking-tight mb-2 group-hover:text-[#88653D] transition-colors">Elite Insights</h4>
<p className="font-body text-xs text-[#F5F0EB]/80 leading-relaxed">Real stories, real strategies from operators who've built at the highest level. No scripts. No filters.</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-[#1C1C1C]/60 backdrop-blur-sm border border-[#899678]/20 rounded-[2rem] p-8 flex flex-col h-full">
<span className="font-mono text-xs text-[#899678] uppercase tracking-widest font-semibold mb-8 block">Listen Everywhere</span>
<div className="flex flex-col gap-6 flex-1 justify-center">

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4 relative">
<div className="w-10 h-10 rounded-full bg-[#364C61] flex items-center justify-center text-[#F5F0EB]">
<iconify-icon icon="solar:music-note-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-body text-sm font-semibold tracking-wide">Spotify</span>

<div className="absolute left-10 top-1/2 -translate-y-1/2 w-12 h-[1px] bg-[#899678]/30 overflow-hidden hidden sm:block">
<div className="w-full h-full bg-[#899678] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
</div>
</div>
<a className="btn-magnetic px-4 py-1.5 rounded-full border border-[#88653D] text-[#88653D] text-[10px] font-mono uppercase tracking-widest hover:bg-[#88653D] hover:text-[#F5F0EB] transition-colors ml-auto sm:ml-0" href="#">Subscribe</a>
</div>
<div className="w-full h-[1px] bg-[#899678]/10"></div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4 relative">
<div className="w-10 h-10 rounded-full bg-[#364C61] flex items-center justify-center text-[#F5F0EB]">
<iconify-icon icon="solar:podcast-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-body text-sm font-semibold tracking-wide">Apple Podcasts</span>
<div className="absolute left-10 top-1/2 -translate-y-1/2 w-12 h-[1px] bg-[#899678]/30 overflow-hidden hidden sm:block">
<div className="w-full h-full bg-[#899678] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
</div>
</div>
<a className="btn-magnetic px-4 py-1.5 rounded-full border border-[#88653D] text-[#88653D] text-[10px] font-mono uppercase tracking-widest hover:bg-[#88653D] hover:text-[#F5F0EB] transition-colors ml-auto sm:ml-0" href="#">Subscribe</a>
</div>
<div className="w-full h-[1px] bg-[#899678]/10"></div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4 relative">
<div className="w-10 h-10 rounded-full bg-[#364C61] flex items-center justify-center text-[#F5F0EB]">
<iconify-icon className="" icon="solar:play-stream-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-body text-sm font-semibold tracking-wide">YouTube</span>
<div className="absolute left-10 top-1/2 -translate-y-1/2 w-12 h-[1px] bg-[#899678]/30 overflow-hidden hidden sm:block">
<div className="w-full h-full bg-[#899678] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
</div>
</div>
<a className="btn-magnetic px-4 py-1.5 rounded-full border border-[#88653D] text-[#88653D] text-[10px] font-mono uppercase tracking-widest hover:bg-[#88653D] hover:text-[#F5F0EB] transition-colors ml-auto sm:ml-0" href="#">Subscribe</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full py-32 md:py-48 px-6 square-edges bg-[#1C1C1C] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0 opacity-20">
<img alt="Night ridgeline" className="w-full h-full object-cover mix-blend-luminosity" src="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-[#1C1C1C]"></div>
</div>
<div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center">
<p className="font-body text-sm md:text-base text-[#F5F0EB]/60 uppercase tracking-[0.2em] mb-8 max-w-2xl font-medium">
                Most business podcasts give you: frameworks without freedom. Tactics without context. Advice without access.
            </p>
<h2 className="text-[clamp(2.5rem,5vw,5rem)] leading-[1.1] font-extrabold italic text-[#F5F0EB] tracking-tight font-display mb-12">We give you the unfiltered story of <span className="text-[#899678]">how success gets lived.</span></h2>
<div className="flex items-center justify-center gap-4 opacity-70">
<div className="w-8 h-[1px] bg-[#88653D]"></div>
<span className="font-body text-sm italic tracking-wide">Dr. Sam McGough, Founder, Hunt for Success</span>
<div className="w-8 h-[1px] bg-[#88653D]"></div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 w-full relative z-20 bg-[#364C61]">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

<div className="w-full lg:w-1/2 relative group">
<div className="absolute inset-0 bg-[#88653D] rounded-[2rem] transform translate-x-4 translate-y-4 opacity-40 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
<img alt="Dr. Sam McGough" className="relative z-10 w-full aspect-[4/5] object-cover rounded-[2rem] border border-[#899678]/20 shadow-2xl grayscale-[15%] group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-8 right-8 lg:-left-8 lg:right-auto bg-[#1C1C1C] border border-[#899678]/20 rounded-2xl p-6 z-20 shadow-xl hidden sm:block">
<span className="font-mono text-xs text-[#88653D] uppercase tracking-widest font-semibold block mb-1">The Host</span>
<span className="font-display text-xl text-[#F5F0EB] tracking-tight font-semibold">Dr. Sam McGough</span>
</div>
</div>

<div className="w-full lg:w-1/2 flex flex-col items-start">
<span className="font-mono text-xs text-[#899678] uppercase tracking-widest font-semibold mb-6 block flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:microphone-3-linear" strokeWidth="1.5"></iconify-icon>
                        Behind the Mic
                    </span>
<h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight text-[#F5F0EB] mb-8 leading-tight">
                        Built in the boardroom.<br/>Refined in the wild.
                    </h2>
<div className="space-y-6 text-sm md:text-base text-[#F5F0EB]/70 font-body leading-relaxed mb-10">
<p>
                            Dr. Sam McGough isn't just an interviewer—he's an operator. Having scaled multiple successful ventures, he understands the quiet, grueling realities of building something that lasts. 
                        </p>
<p>
                            But true success isn't just measured by revenue. It's measured by freedom, discipline, and the ability to step away from the desk and into the backcountry. Sam created <span className="text-[#F5F0EB] font-medium italic">Hunt for Success</span> to bridge the gap between high-level business strategy and the unrelenting mindset forged in the outdoors.
                        </p>
</div>
<div className="grid grid-cols-2 gap-8 w-full border-t border-[#899678]/20 pt-8">
<div className="border-l-2 border-[#88653D] pl-4">
<span className="font-display text-3xl text-[#F5F0EB] font-semibold tracking-tight block mb-1">15+</span>
<span className="font-mono text-xs text-[#899678] uppercase tracking-widest">Years Building</span>
</div>
<div className="border-l-2 border-[#88653D] pl-4">
<span className="font-display text-3xl text-[#F5F0EB] font-semibold tracking-tight block mb-1">100+</span>
<span className="font-mono text-xs text-[#899678] uppercase tracking-widest">Elite Guests</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 w-full max-w-4xl mx-auto relative bg-[#364C61]">
<div className="text-center mb-16 md:mb-24">
<h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-[#F5F0EB]">The Protocol</h2>
<div className="w-12 h-1 bg-[#88653D] mx-auto mt-6 rounded-full"></div>
</div>
<div className="flex flex-col -space-y-12 md:-space-y-24 items-center w-full">

<div className="w-full bg-[#1C1C1C] border border-[#899678]/30 rounded-[2rem] p-8 md:p-12 shadow-[0_-10px_40px_rgba(28,28,28,0.8)] z-30 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 justify-between group">
<div className="absolute right-0 top-0 w-64 h-64 bg-[#88653D]/5 rounded-bl-[100%] pointer-events-none"></div>
<div className="max-w-lg z-10">
<span className="font-mono text-xl text-[#88653D] font-bold block mb-4">01</span>
<h3 className="font-display font-semibold text-2xl md:text-3xl tracking-tight mb-4">Authority First.</h3>
<p className="font-body text-sm md:text-base text-[#F5F0EB]/70 leading-relaxed">
                        Meet the builder. Learn what they've created. Every guest is introduced through the lens of what they've built and the principles that drove them. No filler. No fluff.
                    </p>
</div>
<div className="w-32 h-32 flex-shrink-0 relative z-10 hidden md:block">

<svg className="w-full h-full text-[#899678]/40" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="45" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1"></circle>
<circle cx="50" cy="50" fill="none" r="30" stroke="currentColor" strokeWidth="1"></circle>

<g className="svg-sweep">
<line stroke="#88653D" strokeLinecap="round" strokeWidth="2" x1="50" x2="50" y1="50" y2="5"></line>
<polygon fill="#88653D" points="50,5 47,12 53,12"></polygon>
<path className="" d="M 50 50 L 50 5 A 45 45 0 0 1 95 50 Z" fill="#88653D" opacity="0.1"></path>
</g>
<circle cx="50" cy="50" fill="#88653D" r="3"></circle>
</svg>
</div>
</div>

<div className="w-[95%] bg-[#364C61] border border-[#899678]/20 rounded-[2rem] p-8 md:p-12 pt-20 md:pt-32 shadow-[0_-10px_40px_rgba(28,28,28,0.9)] z-20 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 justify-between">
<div className="max-w-lg z-10">
<span className="font-mono text-xl text-[#88653D] font-bold block mb-4">02</span>
<h3 className="font-display font-semibold text-2xl md:text-3xl tracking-tight mb-4">Into the Field.</h3>
<p className="font-body text-sm md:text-base text-[#F5F0EB]/70 leading-relaxed">
                        The outdoors reveals the operator. Hunting, fishing, adventure — the lifestyle stories that reveal how top performers think, lead, and recover.
                    </p>
</div>
<div className="w-32 h-32 flex-shrink-0 relative z-10 hidden md:block overflow-hidden bg-[#1C1C1C]/30 rounded-lg border border-[#899678]/10">

<svg className="" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="10" id="dotGrid" patternunits="userSpaceOnUse" width="10">
<circle cx="2" cy="2" fill="#899678" opacity="0.3" r="1"></circle>
</pattern>
</defs>
<rect className="" fill="url(#dotGrid)" height="100%" width="100%"></rect>
<rect className="svg-scan-line" fill="#899678" height="100%" style={{boxShadow: '0 0 10px #899678'}} width="2"></rect>
</svg>
</div>
</div>

<div className="w-[90%] bg-[#1C1C1C] border border-[#899678]/10 rounded-[2rem] p-8 md:p-12 pt-20 md:pt-32 shadow-[0_-10px_40px_rgba(28,28,28,0.95)] z-10 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 justify-between">
<div className="max-w-lg z-10">
<span className="font-mono text-xl text-[#88653D] font-bold block mb-4">03</span>
<h3 className="font-display font-semibold text-2xl md:text-3xl tracking-tight mb-4">The Takeaway.</h3>
<p className="font-body text-sm md:text-base text-[#F5F0EB]/70 leading-relaxed">
                        Leave with something real. Every episode closes with repeatable principles, mental models, and lessons you can carry from the podcast into the field — and into your business.
                    </p>
</div>
<div className="w-32 h-32 flex-shrink-0 relative z-10 hidden md:flex items-center justify-center">

<svg className="w-full h-auto drop-shadow-[0_0_8px_rgba(136,101,61,0.5)]" viewbox="0 0 100 50">
<path className="svg-ekg" d="M 0 25 L 20 25 L 25 10 L 35 45 L 45 5 L 55 35 L 60 25 L 100 25" fill="none" stroke="#88653D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M 0 25 L 20 25 L 25 10 L 35 45 L 45 5 L 55 35 L 60 25 L 100 25" fill="none" opacity="0.2" stroke="#88653D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-[#F2E0D0] text-[#1C1C1C] square-edges" id="listen">
<div className="w-full max-w-[100rem] mx-auto">
<div className="text-center mb-16">
<h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight">The Listening Station</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">

<div className="bg-white/50 backdrop-blur-sm rounded-[2rem] p-8 border border-[#1C1C1C]/10 h-full flex flex-col justify-between hover:-translate-y-1 transition-transform">
<div>
<span className="font-mono text-xs text-[#899678] uppercase tracking-widest font-semibold mb-6 block">Start with one</span>
<div className="flex items-center gap-4 mb-8">
<img alt="Thumbnail" className="w-16 h-16 rounded-xl object-cover shadow-sm" src="https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<h4 className="font-display font-semibold text-lg leading-tight">Ep. 01 — Built in the Backcountry</h4>
</div>
</div>
<button className="w-full py-3 rounded-full bg-[#88653D] text-[#F5F0EB] text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#C1694F] transition-colors btn-magnetic">
                        Listen Now
                    </button>
</div>

<div className="bg-[#364C61] text-[#F5F0EB] rounded-[2.5rem] p-10 relative z-10 pulse-ring shadow-2xl scale-100 lg:scale-105 border border-[#899678]/30">
<span className="font-mono text-xs text-[#899678] uppercase tracking-widest font-semibold mb-8 block text-center">Follow on your platform</span>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 rounded-2xl bg-[#1C1C1C]/40 border border-[#F5F0EB]/10 hover:bg-[#1C1C1C]/60 transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-[#899678]" icon="solar:music-note-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-body text-sm font-semibold">Spotify</span>
</div>
<button className="px-4 py-1.5 rounded-full bg-[#F5F0EB] text-[#1C1C1C] text-[10px] font-mono uppercase tracking-widest font-bold hover:bg-[#88653D] hover:text-[#F5F0EB] transition-colors">Follow</button>
</div>
<div className="flex items-center justify-between p-3 rounded-2xl bg-[#1C1C1C]/40 border border-[#F5F0EB]/10 hover:bg-[#1C1C1C]/60 transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-[#899678]" icon="solar:podcast-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-body text-sm font-semibold">Apple Podcasts</span>
</div>
<button className="px-4 py-1.5 rounded-full bg-[#F5F0EB] text-[#1C1C1C] text-[10px] font-mono uppercase tracking-widest font-bold hover:bg-[#88653D] hover:text-[#F5F0EB] transition-colors">Follow</button>
</div>
<div className="flex items-center justify-between p-3 rounded-2xl bg-[#1C1C1C]/40 border border-[#F5F0EB]/10 hover:bg-[#1C1C1C]/60 transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-[#899678]" icon="solar:play-stream-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-body text-sm font-semibold">YouTube</span>
</div>
<button className="px-4 py-1.5 rounded-full bg-[#F5F0EB] text-[#1C1C1C] text-[10px] font-mono uppercase tracking-widest font-bold hover:bg-[#88653D] hover:text-[#F5F0EB] transition-colors">Follow</button>
</div>
</div>
</div>

<div className="bg-white/50 backdrop-blur-sm rounded-[2rem] p-8 border border-[#1C1C1C]/10 h-full flex flex-col justify-center gap-4 hover:-translate-y-1 transition-transform">
<button className="w-full py-4 rounded-full border-2 border-[#88653D] text-[#88653D] text-xs font-mono uppercase tracking-widest font-bold hover:bg-[#88653D] hover:text-[#F5F0EB] transition-colors flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:star-linear" strokeWidth="2"></iconify-icon>
                        Leave a Review
                    </button>
<button className="w-full py-4 rounded-full border-2 border-[#899678] text-[#899678] text-xs font-mono uppercase tracking-widest font-bold hover:bg-[#899678] hover:text-[#F5F0EB] transition-colors flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:share-linear" strokeWidth="2"></iconify-icon>
                        Share this Episode
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-[#1C1C1C] rounded-t-[4rem] px-8 md:px-16 lg:px-24 pt-24 pb-12 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
<div className="w-full max-w-[100rem] mr-auto ml-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

<div className="flex flex-col items-start col-span-1 md:col-span-2 lg:col-span-1 pr-0 lg:pr-8">
<div className="w-16 h-16 rounded-2xl bg-[#364C61] flex items-center justify-center border border-[#899678]/30 mb-6">
<span className="font-display font-semibold text-3xl text-[#F5F0EB] tracking-tight">H</span>
</div>
<h3 className="font-display font-semibold text-xl tracking-tight uppercase mb-2">Hunt for Success</h3>
<p className="font-body text-sm text-[#F5F0EB]/60 mb-6">Success Is Earned. Freedom Is Designed.</p>
<div className="flex items-center gap-3 mb-8">
<a className="text-[#899678] hover:text-[#F5F0EB] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:music-note-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="text-[#899678] hover:text-[#F5F0EB] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:podcast-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="text-[#899678] hover:text-[#F5F0EB] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:play-stream-linear" strokeWidth="1.5"></iconify-icon></a>
</div>
<span className="font-mono text-[10px] text-[#F5F0EB]/30 mt-auto uppercase tracking-widest">© 2025 Hunt for Success</span>
</div>

<div className="flex flex-col gap-4">
<span className="font-mono text-xs text-[#899678] uppercase tracking-widest font-semibold mb-2">Show</span>
<a className="font-body text-sm text-[#F5F0EB]/80 hover:text-[#88653D] transition-colors w-fit" href="#">Episodes</a>
<a className="font-body text-sm text-[#F5F0EB]/80 hover:text-[#88653D] transition-colors w-fit" href="#">About</a>
<a className="font-body text-sm text-[#F5F0EB]/80 hover:text-[#88653D] transition-colors w-fit" href="#">Guests</a>
<a className="font-body text-sm text-[#F5F0EB]/80 hover:text-[#88653D] transition-colors w-fit" href="#">Latest Episode</a>
</div>

<div className="flex flex-col gap-4">
<span className="font-mono text-xs text-[#899678] uppercase tracking-widest font-semibold mb-2">Listen</span>
<a className="font-body text-sm text-[#F5F0EB]/80 hover:text-[#88653D] transition-colors w-fit" href="#">Spotify</a>
<a className="font-body text-sm text-[#F5F0EB]/80 hover:text-[#88653D] transition-colors w-fit" href="#">Apple Podcasts</a>
<a className="font-body text-sm text-[#F5F0EB]/80 hover:text-[#88653D] transition-colors w-fit" href="#">YouTube</a>
<a className="font-body text-sm text-[#F5F0EB]/80 hover:text-[#88653D] transition-colors w-fit" href="#">Newsletter</a>
</div>

<div className="flex flex-col gap-4">
<span className="font-mono text-xs text-[#899678] uppercase tracking-widest font-semibold mb-2">Info</span>
<a className="font-body text-sm text-[#F5F0EB]/80 hover:text-[#88653D] transition-colors w-fit" href="#">Privacy Policy</a>
<a className="font-body text-sm text-[#F5F0EB]/80 hover:text-[#88653D] transition-colors w-fit" href="#">Terms of Service</a>
<a className="font-body text-sm text-[#F5F0EB]/80 hover:text-[#88653D] transition-colors w-fit mb-4" href="#">Contact</a>
<div className="h-[1px] w-full bg-[#899678]/20 my-2"></div>
<div className="flex items-center gap-3 mt-2 bg-[#364C61]/20 w-fit px-3 py-1.5 rounded-md border border-[#88653D]/20">
<div className="flex items-end gap-[2px] h-3">
<div className="w-1 bg-[#899678] eq-bar h-full rounded-t-sm"></div>
<div className="w-1 bg-[#899678] eq-bar h-full rounded-t-sm"></div>
<div className="w-1 bg-[#899678] eq-bar h-full rounded-t-sm"></div>
</div>
<span className="font-mono text-[10px] text-[#88653D] tracking-widest uppercase font-semibold">Broadcasting · Ep. 01</span>
</div>
</div>
</div>
<div className="border-t border-[#899678]/10 pt-8 flex justify-between items-center">
<span className="font-mono text-[10px] text-[#899678] uppercase tracking-[0.2em]">1 Episode · New Show</span>
</div>
</div>
</footer>



    </>
  );
}
