import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize Icons
      lucide.createIcons();

      // Intersection Observer
      document.addEventListener('DOMContentLoaded', () => {
          
          /* --- Basic Reveal --- */
          const observerOptions = {
              root: null,
              rootMargin: '0px',
              threshold: 0.1
          };

          const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('active');
                      observer.unobserve(entry.target); 
                  }
              });
          }, observerOptions);

          const revealElements = document.querySelectorAll('.reveal');
          revealElements.forEach(el => observer.observe(el));

          /* --- Text Animation --- */
          const textElement = document.querySelector('.animated-text');
          if (textElement) {
              const text = textElement.innerText;
              textElement.innerHTML = '';
              const words = text.split(' ');
              
              words.forEach((word, index) => {
                  const wrapper = document.createElement('span');
                  wrapper.className = 'word-wrapper';
                  
                  const span = document.createElement('span');
                  span.innerText = word + '\u00A0'; 
                  span.className = 'word-reveal';
                  span.style.transitionDelay = `${index * 30}ms`; 
                  
                  wrapper.appendChild(span);
                  textElement.appendChild(wrapper);
              });

              const textObserver = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                      const spans = entry.target.querySelectorAll('.word-reveal');
                      if (entry.isIntersecting) {
                          spans.forEach(span => span.classList.add('visible'));
                      } else {
                          if (entry.boundingClientRect.y > 0) {
                              spans.forEach(span => span.classList.remove('visible'));
                          }
                      }
                  });
              }, { threshold: 0.2 });
              
              textObserver.observe(textElement);
          }

          /* --- Project Carousel --- */
          const container = document.getElementById('projectContainer');
          const prevBtn = document.getElementById('prevBtn');
          const nextBtn = document.getElementById('nextBtn');

          if(container && prevBtn && nextBtn) {
              nextBtn.addEventListener('click', () => {
                  const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : window.innerWidth * 0.4;
                  container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
              });

              prevBtn.addEventListener('click', () => {
                  const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : window.innerWidth * 0.4;
                  container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
              });
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 text-white mix-blend-difference px-8 py-6">
<div className="flex justify-between items-start w-full relative">

<div className="hidden md:flex flex-1 gap-12 text-[11px] font-semibold tracking-[0.2em] uppercase pt-2">
<a className="hover:text-stone-300 transition-colors" href="#featured-projects">Projects</a>
<a className="hover:text-stone-300 transition-colors" href="#services">Services</a>
<a className="hover:text-stone-300 transition-colors" href="#contact">Contact</a>
</div>

<div className="absolute left-1/2 transform -translate-x-1/2 top-0 text-center">
<a className="block font-display text-4xl font-semibold tracking-tighter uppercase leading-none" href="#">
                    Bam Architects
                </a>
</div>

<div className="hidden md:flex flex-1 justify-end items-center gap-12 text-[11px] font-semibold tracking-[0.2em] uppercase pt-2">
<a className="hover:text-stone-300 transition-colors" href="#about">About</a>
<a className="hover:text-stone-300 transition-colors" href="#team">Team</a>
<a className="flex items-center gap-2 bg-stone-100/10 backdrop-blur-sm border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-stone-900 transition-all duration-300" href="#contact">
<span>Let's Talk</span>
<svg className="lucide lucide-plus" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</a>
</div>

<button className="md:hidden absolute right-0 top-0 text-white pt-1">
<svg className="lucide lucide-menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</div>
</nav>

<section className="relative h-screen w-full overflow-hidden bg-stone-900">

<div className="absolute inset-0 z-0">
<img alt="Architectural Render" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-b from-stone-900/40 via-transparent to-stone-900/60 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
<div className="w-24 h-24 rounded-full border border-white/30 backdrop-blur-[2px] flex items-center justify-center animate-spin-slow">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
</div>

<div className="absolute bottom-0 w-full z-20 px-8 pb-8 flex justify-between items-end text-white">
<div className="flex gap-16 text-[11px] font-semibold tracking-[0.2em] uppercase">
<div className="flex flex-col gap-1">
<span className="opacity-60">Recent Project</span>
<span>Villa Saint-Tropez</span>
</div>
<div className="hidden md:flex flex-col gap-1">
<span className="opacity-60">Location</span>
<span>Côte d'Azur, France</span>
</div>
</div>
<a className="bg-white text-stone-900 px-6 py-3 rounded-full text-[11px] font-bold tracking-[0.1em] uppercase hover:bg-stone-200 transition-colors flex items-center gap-2" href="#featured-projects">
                View Project
            </a>
</div>
</section>

<section className="relative min-h-[80vh] w-full bg-[#1C1917] flex items-center justify-center px-6 py-20 overflow-hidden" id="about">
<div className="max-w-6xl mx-auto">
<h2 className="animated-text font-display text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-[#E7E5E4] font-medium text-center"><span className="word-wrapper"><span className="word-reveal" style={{transitionDelay: '0ms'}}>We </span></span><span className="word-wrapper"><span className="word-reveal" style={{transitionDelay: '30ms'}}>create </span></span><span className="word-wrapper"><span className="word-reveal" style={{transitionDelay: '60ms'}}>spaces </span></span><span className="word-wrapper"><span className="word-reveal" style={{transitionDelay: '90ms'}}>where </span></span><span className="word-wrapper"><span className="word-reveal" style={{transitionDelay: '120ms'}}>aesthetics </span></span><span className="word-wrapper"><span className="word-reveal" style={{transitionDelay: '150ms'}}>meet </span></span><span className="word-wrapper"><span className="word-reveal" style={{transitionDelay: '180ms'}}>autonomy. </span></span><span className="word-wrapper"><span className="word-reveal" style={{transitionDelay: '210ms'}}>A </span></span><span className="word-wrapper"><span className="word-reveal" style={{transitionDelay: '240ms'}}>bold </span></span><span className="word-wrapper"><span className="word-reveal" style={{transitionDelay: '270ms'}}>fusion </span></span><span className="word-wrapper"><span className="word-reveal" style={{transitionDelay: '300ms'}}>of </span></span><span className="word-wrapper"><span className="word-reveal" style={{transitionDelay: '330ms'}}>interior </span></span><span className="word-wrapper"><span className="word-reveal" style={{transitionDelay: '360ms'}}>architecture </span></span><span className="word-wrapper"><span className="word-reveal" style={{transitionDelay: '390ms'}}>and </span></span><span className="word-wrapper"><span className="word-reveal" style={{transitionDelay: '420ms'}}>medical </span></span><span className="word-wrapper"><span className="word-reveal" style={{transitionDelay: '450ms'}}>expertise </span></span><span className="word-wrapper"><span className="word-reveal" style={{transitionDelay: '480ms'}}>to </span></span><span className="word-wrapper"><span className="word-reveal" style={{transitionDelay: '510ms'}}>elevate </span></span><span className="word-wrapper"><span className="word-reveal" style={{transitionDelay: '540ms'}}>your </span></span><span className="word-wrapper"><span className="word-reveal" style={{transitionDelay: '570ms'}}>daily </span></span><span className="word-wrapper"><span className="word-reveal" style={{transitionDelay: '600ms'}}>life </span></span><span className="word-wrapper"><span className="word-reveal" style={{transitionDelay: '630ms'}}>without </span></span><span className="word-wrapper"><span className="word-reveal" style={{transitionDelay: '660ms'}}>compromise. </span></span></h2>
<div className="mt-16 flex justify-center reveal delay-500">
<a className="border border-stone-700 text-stone-400 px-8 py-4 rounded-full text-xs tracking-widest uppercase hover:border-stone-500 hover:text-white transition-all" href="#contact">
                    Our Philosophy
                </a>
</div>
</div>
</section>

<div className="w-full bg-stone-900 relative" id="featured-projects">

<section className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden border-b border-stone-800/20">
<div className="absolute inset-0 w-full h-full">
<img alt="Queen Elizabeth House Exterior" className="w-full h-full object-cover brightness-[0.65]" src="https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&amp;w=2554&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
</div>
<div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12">
<div className="max-w-5xl">
<span className="block text-white text-lg font-medium tracking-tight mb-6 reveal">Projects</span>
<h2 className="text-white font-display text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[0.9] mb-12 reveal delay-100">
                        Queen ElizabethHouse
                    </h2>
<div className="reveal delay-200">
<a className="inline-flex items-center gap-3 text-white text-base font-semibold uppercase tracking-widest hover:gap-5 transition-all duration-300 group" href="#">
<span className="border-b border-transparent group-hover:border-white transition-colors">View Project</span>
<svg className="lucide lucide-arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden border-b border-stone-800/20 shadow-2xl">
<div className="absolute inset-0 w-full h-full">
<img alt="Kyoto Retreat" className="w-full h-full object-cover brightness-[0.6]" src="https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
</div>
<div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12">
<div className="max-w-5xl">
<span className="block text-white text-lg font-medium tracking-tight mb-6">Projects</span>
<h2 className="text-white font-display text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[0.9] mb-12">
                        Kyoto WellnessRetreat
                    </h2>
<div>
<a className="inline-flex items-center gap-3 text-white text-base font-semibold uppercase tracking-widest hover:gap-5 transition-all duration-300 group" href="#">
<span className="border-b border-transparent group-hover:border-white transition-colors">View Project</span>
<svg className="lucide lucide-arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden border-b border-stone-800/20 shadow-2xl">
<div className="absolute inset-0 w-full h-full">
<img alt="Nordic House" className="w-full h-full object-cover brightness-[0.6]" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
</div>
<div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12">
<div className="max-w-5xl">
<span className="block text-white text-lg font-medium tracking-tight mb-6">Projects</span>
<h2 className="text-white font-display text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[0.9] mb-12">
                        Nordic GlassHouse
                    </h2>
<div>
<a className="inline-flex items-center gap-3 text-white text-base font-semibold uppercase tracking-widest hover:gap-5 transition-all duration-300 group" href="#">
<span className="border-b border-transparent group-hover:border-white transition-colors">View Project</span>
<svg className="lucide lucide-arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>
</div>

<section className="relative z-10 bg-[#F5F4F0] pt-32 pb-32 px-6" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-stone-300 pb-8 reveal">
<h3 className="font-display text-4xl md:text-5xl text-stone-900 uppercase tracking-tighter">Our Expertise</h3>
<p className="text-stone-500 text-sm mt-4 md:mt-0 max-w-sm">A holistic approach to residential design.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-300 border border-stone-300">

<div className="bg-[#F5F4F0] p-12 hover:bg-white transition-colors duration-500 group reveal delay-100">
<div className="mb-12 opacity-50 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-pen-tool" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<h4 className="font-display text-2xl mb-4 uppercase font-medium">Bespoke Design</h4>
<p className="text-stone-600 text-sm leading-relaxed mb-8">Unique interiors designed to reflect your personality while anticipating your future needs.</p>
<a className="text-[10px] font-bold uppercase tracking-widest border-b border-stone-900 pb-1" href="#">Learn More</a>
</div>

<div className="bg-[#F5F4F0] p-12 hover:bg-white transition-colors duration-500 group reveal delay-200">
<div className="mb-12 opacity-50 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-activity" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
</div>
<h4 className="font-display text-2xl mb-4 uppercase font-medium">Clinical Precision</h4>
<p className="text-stone-600 text-sm leading-relaxed mb-8">A clinical analysis of your habits for domestic safety without aesthetic compromise.</p>
<a className="text-[10px] font-bold uppercase tracking-widest border-b border-stone-900 pb-1" href="#">Learn More</a>
</div>

<div className="bg-[#F5F4F0] p-12 hover:bg-white transition-colors duration-500 group reveal delay-300">
<div className="mb-12 opacity-50 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-eye" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h4 className="font-display text-2xl mb-4 uppercase font-medium">Invisible Ergonomics</h4>
<p className="text-stone-600 text-sm leading-relaxed mb-8">Discreet adaptive solutions that elevate your interior instead of medicalizing it.</p>
<a className="text-[10px] font-bold uppercase tracking-widest border-b border-stone-900 pb-1" href="#">Learn More</a>
</div>
</div>
</div>
</section>

<section className="bg-white py-32 px-6 relative z-10 overflow-hidden">
<div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

<div className="lg:col-span-4 flex flex-col gap-12 reveal">
<span className="text-xs font-bold uppercase tracking-widest text-stone-900">(Our Process)</span>
<div className="relative w-full aspect-[4/5] bg-stone-100 overflow-hidden">
<img alt="Process Detail" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col text-sm text-stone-900 font-medium">
<div className="flex justify-between items-center py-3 border-b border-stone-200">
<span className="opacity-40 text-xs">01</span>
<span>Sketch Design</span>
</div>
<div className="flex justify-between items-center py-3 border-b border-stone-200">
<span className="opacity-40 text-xs">02</span>
<span>Design Development</span>
</div>
<div className="flex justify-between items-center py-3 border-b border-stone-200">
<span className="opacity-40 text-xs">03</span>
<span>Development Application</span>
</div>
<div className="flex justify-between items-center py-3 border-b border-stone-200">
<span className="opacity-40 text-xs">04</span>
<span>Interior Design</span>
</div>
<div className="flex justify-between items-center py-3 border-b border-stone-200">
<span className="opacity-40 text-xs">05</span>
<span>Building approval plans</span>
</div>
<div className="flex justify-between items-center py-3 border-b border-stone-200">
<span className="opacity-40 text-xs">06</span>
<span>Construction plans</span>
</div>
</div>
</div>

<div className="lg:col-span-8 flex flex-col justify-center reveal delay-100">
<h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1] tracking-tight text-stone-900 mb-16">
                    Our approach at Bam Architects is designed to make your journey from concept to completion as smooth and enjoyable as possible.
                </h2>
<h3 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1] tracking-tight text-stone-900 mb-20">
                    With our 6-stage process, we prioritise clarity, collaboration, and your unique vision. At every step, we'll keep you informed, inspired, and involved.
                </h3>
<div>
<a className="inline-block bg-stone-900 text-white px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-stone-700 transition-colors" href="#contact">
                        Get to know our process <span className="ml-2 opacity-50">○</span>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F5F4F0] border-t border-stone-200 relative z-10" id="team">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20">
<h3 className="font-display text-4xl md:text-5xl text-stone-900 uppercase tracking-tighter">The Team</h3>
<a className="hidden md:block text-xs font-bold uppercase tracking-widest border-b border-stone-900 pb-1 hover:text-stone-500 hover:border-stone-500 transition-colors" href="#">Join Us</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">

<div className="group reveal">
<div className="aspect-[3/4] overflow-hidden mb-6 bg-stone-200">
<img alt="Sarah Jenkins" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="font-display text-lg uppercase tracking-tight text-stone-900">Sarah Jenkins</h4>
<p className="text-xs uppercase tracking-wider text-stone-500 mt-1">Lead Architect</p>
</div>

<div className="group reveal delay-100">
<div className="aspect-[3/4] overflow-hidden mb-6 bg-stone-200">
<img alt="David Chen" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="font-display text-lg uppercase tracking-tight text-stone-900">David Chen</h4>
<p className="text-xs uppercase tracking-wider text-stone-500 mt-1">Interior Director</p>
</div>

<div className="group reveal delay-200">
<div className="aspect-[3/4] overflow-hidden mb-6 bg-stone-200">
<img alt="Elena Rossi" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="font-display text-lg uppercase tracking-tight text-stone-900">Elena Rossi</h4>
<p className="text-xs uppercase tracking-wider text-stone-500 mt-1">Occupational Therapist</p>
</div>

<div className="group reveal delay-300">
<div className="aspect-[3/4] overflow-hidden mb-6 bg-stone-200">
<img alt="Marcus Thorne" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="font-display text-lg uppercase tracking-tight text-stone-900">Marcus Thorne</h4>
<p className="text-xs uppercase tracking-wider text-stone-500 mt-1">Technical Lead</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative z-10" id="archive">
<div className="px-6 md:px-12 mb-16 flex justify-between items-end reveal">
<h2 className="font-display text-4xl md:text-6xl text-stone-900 uppercase tracking-tighter">Archive</h2>
<div className="hidden md:flex gap-4">
<button className="p-3 border border-stone-300 rounded-full hover:bg-stone-900 hover:text-white transition-colors active:scale-95" id="prevBtn">
<svg className="lucide lucide-arrow-left" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="p-3 border border-stone-300 rounded-full hover:bg-stone-900 hover:text-white transition-colors active:scale-95" id="nextBtn">
<svg className="lucide lucide-arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div className="flex overflow-x-auto gap-6 px-6 md:px-12 pb-12 snap-x snap-mandatory no-scrollbar scroll-smooth" id="projectContainer">

<div className="min-w-[85vw] md:min-w-[40vw] snap-center group cursor-pointer reveal">
<div className="relative overflow-hidden aspect-[4/3] mb-6">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
</div>
<div className="flex justify-between items-start border-t border-stone-300 pt-4">
<div>
<h4 className="font-display text-xl text-stone-900 uppercase tracking-tight font-medium">Residence Mont-Royal</h4>
<p className="text-stone-500 text-xs mt-1 uppercase tracking-wider">Complete Renovation</p>
</div>
<span className="text-xs font-bold border border-stone-300 px-2 py-1 uppercase text-stone-600">2023</span>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[40vw] snap-center group cursor-pointer reveal delay-100">
<div className="relative overflow-hidden aspect-[4/3] mb-6">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
</div>
<div className="flex justify-between items-start border-t border-stone-300 pt-4">
<div>
<h4 className="font-display text-xl text-stone-900 uppercase tracking-tight font-medium">Loft St-Henri</h4>
<p className="text-stone-500 text-xs mt-1 uppercase tracking-wider">Adapted Kitchen</p>
</div>
<span className="text-xs font-bold border border-stone-300 px-2 py-1 uppercase text-stone-600">2024</span>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[40vw] snap-center group cursor-pointer reveal delay-200">
<div className="relative overflow-hidden aspect-[4/3] mb-6">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
</div>
<div className="flex justify-between items-start border-t border-stone-300 pt-4">
<div>
<h4 className="font-display text-xl text-stone-900 uppercase tracking-tight font-medium">West Villa</h4>
<p className="text-stone-500 text-xs mt-1 uppercase tracking-wider">Exterior Accessibility</p>
</div>
<span className="text-xs font-bold border border-stone-300 px-2 py-1 uppercase text-stone-600">2023</span>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[40vw] snap-center group cursor-pointer reveal delay-300">
<div className="relative overflow-hidden aspect-[4/3] mb-6">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
</div>
<div className="flex justify-between items-start border-t border-stone-300 pt-4">
<div>
<h4 className="font-display text-xl text-stone-900 uppercase tracking-tight font-medium">Harbor House</h4>
<p className="text-stone-500 text-xs mt-1 uppercase tracking-wider">Living Area</p>
</div>
<span className="text-xs font-bold border border-stone-300 px-2 py-1 uppercase text-stone-600">2023</span>
</div>
</div>
</div>
</section>

<section className="relative bg-white text-stone-900 min-h-[60vh] flex flex-col items-center justify-center overflow-hidden z-10 py-32" id="contact">
<div className="max-w-[1400px] w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

<div className="lg:col-span-8 flex flex-col gap-12 reveal">
<h2 className="font-display text-5xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.85] text-stone-900">
                    Ready to build<br/>the future?
                </h2>
<h3 className="font-display text-3xl md:text-5xl tracking-tight text-stone-900 leading-tight max-w-2xl">
                    Reach out to discuss your project. We're here to listen and create.
                </h3>
</div>

<div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center reveal delay-100">
<a className="inline-block bg-stone-900 text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-stone-700 transition-all duration-300 hover:scale-105 hover:shadow-xl" href="mailto:hello@bamarchitects.com">
                    Get in touch <span className="ml-2 opacity-50">○</span>
</a>
<div className="mt-12 text-left lg:text-right space-y-2">
<p className="text-sm font-medium text-stone-500 uppercase tracking-wide">Or email us directly</p>
<p className="text-xl font-display font-medium text-stone-900 border-b border-stone-300 pb-1">hello@bamarchitects.com</p>
</div>
</div>
</div>
</section>

<footer className="bg-[#F5F4F0] pt-24 pb-12 px-6 border-t border-stone-300 relative z-10">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-1">
<a className="block font-display text-2xl font-bold tracking-tighter uppercase mb-6" href="#">Bam Architects</a>
</div>
<div className="space-y-4">
<h5 className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Office</h5>
<p className="text-sm text-stone-600 leading-relaxed">
                    12 Peace Avenue<br/>
                    London, UK<br/>
                    +44 20 1234 5678
                </p>
</div>
<div className="space-y-4">
<h5 className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Social</h5>
<div className="flex flex-col gap-2 text-sm text-stone-600 font-medium uppercase tracking-wide">
<a className="hover:text-stone-900" href="#">Instagram</a>
<a className="hover:text-stone-900" href="#">LinkedIn</a>
<a className="hover:text-stone-900" href="#">Pinterest</a>
</div>
</div>
<div className="space-y-4">
<h5 className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Legal</h5>
<div className="flex flex-col gap-2 text-sm text-stone-600">
<a className="hover:text-stone-900" href="#">Legal Notice</a>
<a className="hover:text-stone-900" href="#">Privacy Policy</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] text-stone-400 uppercase tracking-widest border-t border-stone-200 pt-8">
<span>© 2024 Bam Architects</span>
<span>Design &amp; Occupational Therapy</span>
</div>
</footer>


    </>
  );
}
