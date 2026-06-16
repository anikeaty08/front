import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener('DOMContentLoaded', () => {
          // 1. Header Scroll
          const header = document.getElementById('header');
          const onScroll = () => {
              if (window.scrollY > 40) {
                  header.classList.add('bg-black/90', 'backdrop-blur-md', 'border-white/10', 'py-3', 'md:py-4');
                  header.classList.remove('bg-transparent', 'border-transparent', 'md:py-6', 'py-4');
              } else {
                  header.classList.remove('bg-black/90', 'backdrop-blur-md', 'border-white/10', 'py-3', 'md:py-4');
                  header.classList.add('bg-transparent', 'border-transparent', 'md:py-6', 'py-4');
              }
          };
          window.addEventListener('scroll', onScroll, { passive: true });

          // 2. Observer for Fade In
          const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('is-visible');
                      if(entry.target.tagName === 'VIDEO') entry.target.play(); 
                      observer.unobserve(entry.target);
                  }
              });
          }, { threshold: 0.1 });
          document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

          // 3. Cycle Hero Videos (One fade out, next fade in)
          const videos = document.querySelectorAll('.hero-video');
          let currentVideo = 0;
          if(videos.length > 0) {
              videos[0].classList.add('is-active');
              setInterval(() => {
                  videos[currentVideo].classList.remove('is-active');
                  currentVideo = (currentVideo + 1) % videos.length;
                  videos[currentVideo].classList.add('is-active');
                  videos[currentVideo].play();
              }, 6000);
          }

          // 4. Accordion
          document.querySelectorAll('.accordion-item button').forEach(button => {
              button.addEventListener('click', () => {
                  const item = button.parentElement;
                  const isActive = item.classList.contains('accordion-open');
                  document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('accordion-open'));
                  if (!isActive) item.classList.add('accordion-open');
              });
          });

          // 5. PARALLAX ENGINE
          const parallaxItems = document.querySelectorAll('.parallax-bg');
          let lastScrollY = window.scrollY;
          let ticking = false;

          function updateParallax() {
              const scrollY = window.scrollY;
              
              parallaxItems.forEach(el => {
                  const speed = parseFloat(el.getAttribute('data-speed')) || 0;
                  const rect = el.parentElement.getBoundingClientRect();
                  
                  // Only animate if parent is roughly in view
                  if (rect.bottom > 0 && rect.top < window.innerHeight) {
                      // Calculate offset based on scroll relative to viewport
                      // For fixed hero effect: just use scrollY
                      // For content down the page: use offset from center
                      
                      let yPos = 0;
                      
                      // Check if it's the hero section (top of page)
                      if(rect.top <= 0 && rect.bottom >= 0 && rect.top > -window.innerHeight) {
                          // Hero logic: scrollY * speed
                          yPos = scrollY * speed;
                      } else {
                          // Standard parallax: (distance from center) * speed
                          const distanceFromCenter = rect.top - (window.innerHeight / 2);
                          yPos = distanceFromCenter * speed * -1; // Invert for "depth" feel
                      }
                      
                      el.style.transform = `translate3d(0, ${yPos}px, 0)`;
                  }
              });

              ticking = false;
          }

          window.addEventListener('scroll', () => {
              if (!ticking) {
                  window.requestAnimationFrame(updateParallax);
                  ticking = true;
              }
          }, { passive: true });
          
          // Initial trigger
          updateParallax();
      });

      // FORM LOGIC
      document.addEventListener('DOMContentLoaded', () => {
          const form = document.getElementById('enquiry-form');
          if(!form) return;
          const steps = Array.from(document.querySelectorAll('.form-step'));
          const progressBar = document.getElementById('progress-bar');
          const stepIndicator = document.getElementById('step-indicator');
          const stepTitle = document.getElementById('step-title');
          const prevBtn = document.getElementById('prev-btn');
          const nextBtn = document.getElementById('next-btn');
          const submitBtn = document.getElementById('submit-btn');
          const formNav = document.getElementById('form-nav');
          const successMsg = document.getElementById('success-message');
          const formHeader = document.getElementById('form-header');
          const microcopy = document.getElementById('step-1-microcopy');
          const altCta = document.getElementById('alt-cta');
          let currentStep = 0;
          const stepTitles = ["Basics", "Details", "The Idea", "Placement", "Preferences", "Availability", "References"];

          function updateUI() {
              steps.forEach((step, index) => step.classList.toggle('hidden', index !== currentStep));
              progressBar.style.width = `${((currentStep + 1) / steps.length) * 100}%`;
              stepIndicator.textContent = `Step ${currentStep + 1} of ${steps.length}`;
              stepTitle.textContent = stepTitles[currentStep];

              if (currentStep === 0) {
                  formHeader.classList.replace('opacity-100', 'opacity-0');
                  prevBtn.classList.add('invisible');
                  if(microcopy) microcopy.style.display = 'block';
                  if(altCta) altCta.style.display = 'block';
              } else {
                  formHeader.classList.replace('opacity-0', 'opacity-100');
                  prevBtn.classList.remove('invisible');
                  if(microcopy) microcopy.style.display = 'none';
                  if(altCta) altCta.style.display = 'none';
              }

              if (currentStep === steps.length - 1) {
                  nextBtn.classList.add('hidden');
                  submitBtn.classList.remove('hidden');
              } else {
                  nextBtn.classList.remove('hidden');
                  submitBtn.classList.add('hidden');
              }
          }

          function validateStep() {
              const currentStepEl = steps[currentStep];
              const inputs = currentStepEl.querySelectorAll('input[required], textarea[required], select[required]');
              let valid = true;
              inputs.forEach(input => { if (!input.checkValidity()) { input.reportValidity(); valid = false; } });
              return valid;
          }

          nextBtn.addEventListener('click', () => { if(validateStep() && currentStep < steps.length - 1) { currentStep++; updateUI(); } });
          prevBtn.addEventListener('click', () => { if(currentStep > 0) { currentStep--; updateUI(); } });
          form.addEventListener('submit', (e) => {
              e.preventDefault();
              submitBtn.innerText = 'Sending...';
              submitBtn.disabled = true;
              setTimeout(() => {
                  steps.forEach(s => s.classList.add('hidden'));
                  formNav.classList.add('hidden');
                  formHeader.classList.replace('opacity-100', 'opacity-0');
                  successMsg.classList.remove('hidden');
              }, 1500);
          });
          updateUI();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent" id="header">
<div className="md:px-12 md:py-6 flex pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<a className="font-display text-xl md:text-2xl italic tracking-tight text-white relative z-50" href="#">
          Kaleidoscope.
        </a>

<nav className="hidden md:flex gap-10 text-[11px] font-medium tracking-[0.15em] uppercase items-center text-white">
<a className="hover:text-gray-300 transition-colors" href="#artists">Artists</a>
<a className="hover:text-gray-300 transition-colors" href="#studio">Studio</a>
<a className="hover:text-gray-300 transition-colors" href="#faq">FAQ</a>
<a className="hover:text-gray-300 transition-colors" href="#contact">Contact</a>
<a className="bg-white text-black px-6 py-3 hover:bg-gray-200 transition-colors duration-300 min-h-[44px] flex items-center" href="#booking">
            Book Now
          </a>
</nav>

<button aria-label="Menu" className="md:hidden text-2xl text-white p-2" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</header>

<div className="hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 text-white" id="mobile-menu">
<button className="absolute top-6 right-6 text-3xl p-2" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon>
</button>
<a className="font-display text-3xl italic" href="#artists" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Artists</a>
<a className="font-display text-3xl italic" href="#studio" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Studio</a>
<a className="font-display text-3xl italic" href="#faq" onclick="document.getElementById('mobile-menu').classList.add('hidden')">FAQ</a>
<a className="font-display text-3xl italic" href="#booking" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Book Now</a>
</div>
<main>

<section className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden flex items-end pt-[120px] md:pt-[120px] lg:pt-[140px] pb-24 md:pb-32 px-6 md:px-12">

<div className="absolute inset-0 z-0 overflow-hidden">

<div className="absolute inset-x-0 h-[120%] -top-[10%] parallax-bg" data-speed="0.5">
<video className="hero-video absolute inset-0 w-full h-full object-cover opacity-0" muted="" playsinline="" preload="auto">
<source src="https://www.sorasolution.com/wp-content/uploads/2026/02/0_Bondi_Beach_3840x2160.mp4" type="video/mp4"/>
</video>
<video className="hero-video absolute inset-0 w-full h-full object-cover opacity-0" muted="" playsinline="" preload="auto">
<source src="https://www.sorasolution.com/wp-content/uploads/2026/02/0_Tattoo_Artist_3840x2160.mp4" type="video/mp4"/>
</video>
<video className="hero-video absolute inset-0 w-full h-full object-cover opacity-0" muted="" playsinline="" preload="auto">
<source src="https://www.sorasolution.com/wp-content/uploads/2026/02/0_Tattoo_Glove_4096x2160.mp4" type="video/mp4"/>
</video>
</div>

<div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
<div className="absolute inset-0 backdrop-blur-[1px] pointer-events-none"></div>
</div>
<div className="relative z-10 w-full max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-end fade-in-up is-visible">
<div className="md:col-span-8 text-left md:text-left mx-auto md:mx-0 w-full">
<h1 className="font-display text-white mb-6 tracking-tight-lg drop-shadow-lg text-[clamp(3rem,5.5vw,6.5rem)] leading-[1.05]">
              Kaleidoscope Tattoo Studio
              <br/>
<span className="italic text-white/80 font-light block mt-2 text-[clamp(1.8rem,3.5vw,3.75rem)]">
                Bondi, Sydney
              </span>
</h1>
<p className="text-gray-200 text-base md:text-xl font-light max-w-lg mb-10 leading-relaxed drop-shadow-md">
              Custom tattoos &amp; professional piercing. Established since 1995.
            </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
<a className="bg-white text-black px-8 py-4 text-[11px] uppercase tracking-[0.15em] font-semibold hover:bg-gray-200 transition-colors text-center min-h-[50px] flex items-center justify-center" href="#booking">
                Make an Enquiry
              </a>
<a className="border border-white/30 backdrop-blur-sm text-white px-8 py-4 text-[11px] uppercase tracking-[0.15em] font-semibold hover:bg-white hover:text-black transition-colors text-center min-h-[50px] flex items-center justify-center" href="#artists">
                Meet the Artists
              </a>
</div>
<div className="flex flex-wrap items-center gap-4 text-xs text-white/80 font-medium">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-yellow-400" icon="solar:star-bold"></iconify-icon>
<span>Google Reviews</span>
</div>
<span className="hidden sm:inline opacity-30">•</span>
<div className="flex items-center gap-1.5">
<iconify-icon className="" icon="solar:calendar-linear"></iconify-icon>
<span>Since 1995</span>
</div>
<span className="hidden sm:inline opacity-30">•</span>
<div className="flex items-center gap-1.5">
<iconify-icon className="" icon="solar:walking-linear"></iconify-icon>
<span>Walk-ins Welcome</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#080808] border-b border-white/5 py-16 md:py-20 overflow-hidden relative fade-in-up">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12">
<div className="flex flex-col md:flex-row md:items-end gap-4">
<h2 className="font-display text-3xl md:text-4xl text-white">Client Stories</h2>
<div className="flex items-center gap-2 text-sm text-gray-400 md:mb-1.5 md:ml-4">
<span className="flex text-yellow-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</span>
<span className="text-xs uppercase tracking-wider opacity-60">500+ Google Reviews</span>
</div>
</div>
</div>
<div className="relative w-full">
<div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none"></div>
<div className="flex animate-marquee hover:pause items-stretch">

<div className="flex gap-6 pl-6">

<div className="w-[300px] md:w-[400px] bg-[#121212] border border-white/5 p-6 rounded-sm flex flex-col justify-between shrink-0 hover:border-white/20 transition-colors group cursor-default">
<div className="mb-4">
<div className="flex justify-between items-start mb-3">
<div className="flex text-yellow-400 text-xs gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<iconify-icon className="text-white/10 text-xl group-hover:text-white/30 transition-colors" icon="solar:quote-up-linear"></iconify-icon>
</div>
<p className="text-white/80 font-light text-sm leading-relaxed line-clamp-3">"Absolutely incredible experience. The studio is spotless and Marcella took my idea and made it better than I imagined."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">S</div>
<div><div className="text-xs text-white font-medium">Sarah Jenkins</div><div className="text-[9px] text-gray-500 uppercase tracking-widest">Via Google</div></div>
</div>
</div>
<div className="w-[300px] md:w-[400px] bg-[#121212] border border-white/5 p-6 rounded-sm flex flex-col justify-between shrink-0 hover:border-white/20 transition-colors group cursor-default">
<div className="mb-4">
<div className="flex justify-between items-start mb-3">
<div className="flex text-yellow-400 text-xs gap-0.5"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<iconify-icon className="text-white/10 text-xl group-hover:text-white/30 transition-colors" icon="solar:quote-up-linear"></iconify-icon>
</div>
<p className="text-white/80 font-light text-sm leading-relaxed line-clamp-3">"Been coming here since 2010. The vibe is unmatched and the hygiene standards are top tier."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">D</div>
<div><div className="text-xs text-white font-medium">David K.</div><div className="text-[9px] text-gray-500 uppercase tracking-widest">Via Google</div></div>
</div>
</div>
<div className="w-[300px] md:w-[400px] bg-[#121212] border border-white/5 p-6 rounded-sm flex flex-col justify-between shrink-0 hover:border-white/20 transition-colors group cursor-default">
<div className="mb-4">
<div className="flex justify-between items-start mb-3">
<div className="flex text-yellow-400 text-xs gap-0.5"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<iconify-icon className="text-white/10 text-xl group-hover:text-white/30 transition-colors" icon="solar:quote-up-linear"></iconify-icon>
</div>
<p className="text-white/80 font-light text-sm leading-relaxed line-clamp-3">"Attention to detail is insane. Orlando did a large realism piece on my arm and it looks like a photograph."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">J</div>
<div><div className="text-xs text-white font-medium">James P.</div><div className="text-[9px] text-gray-500 uppercase tracking-widest">Via Google</div></div>
</div>
</div>
</div>

<div className="flex gap-6 pl-6">
<div className="w-[300px] md:w-[400px] bg-[#121212] border border-white/5 p-6 rounded-sm flex flex-col justify-between shrink-0 hover:border-white/20 transition-colors group cursor-default">
<div className="mb-4">
<div className="flex justify-between items-start mb-3">
<div className="flex text-yellow-400 text-xs gap-0.5"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<iconify-icon className="text-white/10 text-xl group-hover:text-white/30 transition-colors" icon="solar:quote-up-linear"></iconify-icon>
</div>
<p className="text-white/80 font-light text-sm leading-relaxed line-clamp-3">"Absolutely incredible experience. The studio is spotless and Marcella took my idea and made it better than I imagined."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">S</div>
<div><div className="text-xs text-white font-medium">Sarah Jenkins</div><div className="text-[9px] text-gray-500 uppercase tracking-widest">Via Google</div></div>
</div>
</div>
<div className="w-[300px] md:w-[400px] bg-[#121212] border border-white/5 p-6 rounded-sm flex flex-col justify-between shrink-0 hover:border-white/20 transition-colors group cursor-default">
<div className="mb-4">
<div className="flex justify-between items-start mb-3">
<div className="flex text-yellow-400 text-xs gap-0.5"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<iconify-icon className="text-white/10 text-xl group-hover:text-white/30 transition-colors" icon="solar:quote-up-linear"></iconify-icon>
</div>
<p className="text-white/80 font-light text-sm leading-relaxed line-clamp-3">"Been coming here since 2010. The vibe is unmatched and the hygiene standards are top tier."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">D</div>
<div><div className="text-xs text-white font-medium">David K.</div><div className="text-[9px] text-gray-500 uppercase tracking-widest">Via Google</div></div>
</div>
</div>
<div className="w-[300px] md:w-[400px] bg-[#121212] border border-white/5 p-6 rounded-sm flex flex-col justify-between shrink-0 hover:border-white/20 transition-colors group cursor-default">
<div className="mb-4">
<div className="flex justify-between items-start mb-3">
<div className="flex text-yellow-400 text-xs gap-0.5"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<iconify-icon className="text-white/10 text-xl group-hover:text-white/30 transition-colors" icon="solar:quote-up-linear"></iconify-icon>
</div>
<p className="text-white/80 font-light text-sm leading-relaxed line-clamp-3">"Attention to detail is insane. Orlando did a large realism piece on my arm and it looks like a photograph."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">J</div>
<div><div className="text-xs text-white font-medium">James P.</div><div className="text-[9px] text-gray-500 uppercase tracking-widest">Via Google</div></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-24 bg-[#0a0a0a] border-b border-white/5 fade-in-up" id="booking">
<div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h2 className="font-display text-4xl md:text-5xl text-white mb-6">Start Your <br/><span className="italic text-gray-500">Tattoo Enquiry</span></h2>
<p className="text-gray-400 font-light text-base leading-relaxed mb-8">Tell us a little about your idea and we’ll guide you through the rest.</p>
<ul className="space-y-4 text-sm text-gray-300 mb-8">
<li className="flex items-center gap-3"><iconify-icon className="text-xl text-white" icon="solar:check-circle-linear"></iconify-icon><span>No obligation to book</span></li>
<li className="flex items-center gap-3"><iconify-icon className="text-xl text-white" icon="solar:users-group-rounded-linear"></iconify-icon><span>We'll match you with the right artist</span></li>
<li className="flex items-center gap-3"><iconify-icon className="text-xl text-white" icon="solar:heart-linear"></iconify-icon><span>First tattoos welcome</span></li>
</ul>
</div>
<div className="bg-[#121212] border border-white/10 p-6 md:p-8 flex flex-col h-full relative rounded-sm" id="multi-step-form-container">
<div className="mb-6 opacity-0 transition-opacity duration-300" id="form-header">
<div className="flex justify-between text-[10px] uppercase tracking-widest text-gray-500 mb-2">
<span id="step-indicator">Step 1 of 7</span>
<span id="step-title">Basics</span>
</div>
<div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
<div className="h-full bg-white transition-all duration-300 w-[14%]" id="progress-bar" style={{width: '14.2857%'}}></div>
</div>
</div>
<form className="flex-grow flex flex-col justify-between" id="enquiry-form" onsubmit="event.preventDefault();">

<div className="form-step" data-step="1">
<div className="space-y-5">
<div className="space-y-1"><label className="text-[10px] uppercase tracking-widest text-gray-500">First Name</label><input className="w-full bg-black/30 border border-white/10 p-3 text-white focus:border-white outline-none transition-colors rounded-sm" name="fname" required="" type="text"/></div>
<div className="space-y-1"><label className="text-[10px] uppercase tracking-widest text-gray-500">Email</label><input className="w-full bg-black/30 border border-white/10 p-3 text-white focus:border-white outline-none transition-colors rounded-sm" name="email" required="" type="email"/></div>
<div>
<label className="text-[10px] uppercase tracking-widest text-gray-500 block mb-2">Tattoo Type</label>
<div className="space-y-2">
<label className="flex items-center gap-3 p-3 border border-white/10 bg-black/30 hover:bg-white/5 cursor-pointer rounded-sm"><input checked="" className="accent-white" name="tattoo_type" type="radio" value="New"/><span className="text-sm text-white">New Tattoo</span></label>
<label className="flex items-center gap-3 p-3 border border-white/10 bg-black/30 hover:bg-white/5 cursor-pointer rounded-sm"><input className="accent-white" name="tattoo_type" type="radio" value="Cover-up"/><span className="text-sm text-white">Cover-up / Rework</span></label>
<label className="flex items-center gap-3 p-3 border border-white/10 bg-black/30 hover:bg-white/5 cursor-pointer rounded-sm"><input className="accent-white" name="tattoo_type" type="radio" value="Touch-up"/><span className="text-sm text-white">Touch-up</span></label>
</div>
</div>
</div>
</div>
<div className="form-step hidden" data-step="2">
<h3 className="font-display text-2xl text-white mb-6">Details</h3>
<div className="space-y-5">
<label className="flex items-start gap-4 p-4 border border-white/10 hover:bg-white/5 cursor-pointer transition-colors group"><input className="mt-1 w-5 h-5 accent-white" id="age-confirm" required="" type="checkbox"/><div><span className="block text-sm text-white font-medium mb-1">I confirm I am 18+</span><span className="block text-xs text-gray-500 font-light">Valid ID required at appointment.</span></div></label>
<div className="space-y-1"><label className="text-[10px] uppercase tracking-widest text-gray-500">Phone</label><input className="w-full bg-black/30 border border-white/10 p-3 text-white focus:border-white outline-none transition-colors rounded-sm" name="phone" required="" type="tel"/></div>
<div className="space-y-1"><label className="text-[10px] uppercase tracking-widest text-gray-500">Instagram (Optional)</label><input className="w-full bg-black/30 border border-white/10 p-3 text-white focus:border-white outline-none transition-colors rounded-sm" name="instagram" placeholder="@" type="text"/></div>
</div>
</div>
<div className="form-step hidden" data-step="3">
<h3 className="font-display text-2xl text-white mb-6">The Idea</h3>
<div className="space-y-5">
<div>
<label className="text-[10px] uppercase tracking-widest text-gray-500 block mb-2">Is this your first tattoo?</label>
<div className="flex gap-6">
<label className="flex items-center gap-2 cursor-pointer"><input className="accent-white" name="is_first" type="radio" value="Yes"/><span className="text-sm text-white">Yes</span></label>
<label className="flex items-center gap-2 cursor-pointer"><input checked="" className="accent-white" name="is_first" type="radio" value="No"/><span className="text-sm text-white">No</span></label>
</div>
</div>
<div className="space-y-1"><label className="text-[10px] uppercase tracking-widest text-gray-500">Description</label><textarea className="w-full bg-black/30 border border-white/10 p-4 text-white focus:border-white outline-none transition-colors resize-none rounded-sm" name="description" placeholder="Describe your vision..." required="" rows="6"></textarea></div>
</div>
</div>
<div className="form-step hidden" data-step="4">
<h3 className="font-display text-2xl text-white mb-6">Placement</h3>
<div className="space-y-5">
<div className="space-y-1"><label className="text-[10px] uppercase tracking-widest text-gray-500">Body Placement</label><input className="w-full bg-black/30 border border-white/10 p-3 text-white focus:border-white outline-none transition-colors" name="placement" required="" type="text"/></div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1"><label className="text-[10px] uppercase tracking-widest text-gray-500">Width (cm)</label><input className="w-full bg-black/30 border border-white/10 p-3 text-white focus:border-white outline-none transition-colors" name="width" type="number"/></div>
<div className="space-y-1"><label className="text-[10px] uppercase tracking-widest text-gray-500">Height (cm)</label><input className="w-full bg-black/30 border border-white/10 p-3 text-white focus:border-white outline-none transition-colors" name="height" type="number"/></div>
</div>
</div>
</div>
<div className="form-step hidden" data-step="5">
<h3 className="font-display text-2xl text-white mb-6">Preferences</h3>
<div className="space-y-5">
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest text-gray-500">Preferred Artist</label>
<select className="w-full bg-black/30 border border-white/10 p-3 text-white focus:border-white outline-none transition-colors appearance-none cursor-pointer rounded-sm" name="artist">
<option value="Open">Open to suggestion</option><option value="Marcella">Marcella</option><option value="Jin">Jin</option><option value="Orlando">Orlando</option><option value="Peque">Peque</option><option value="Leo">Leo</option>
</select>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-gray-500 block">Existing skin conditions?</label>
<div className="flex gap-6">
<label className="flex items-center gap-2 cursor-pointer"><input className="accent-white" name="skin_condition" onchange="document.getElementById('condition-desc-new').classList.remove('hidden')" type="radio" value="Yes"/><span className="text-sm text-white">Yes</span></label>
<label className="flex items-center gap-2 cursor-pointer"><input checked="" className="accent-white" name="skin_condition" onchange="document.getElementById('condition-desc-new').classList.add('hidden')" type="radio" value="No"/><span className="text-sm text-white">No</span></label>
</div>
<textarea className="hidden w-full bg-black/30 border border-white/10 p-3 text-white focus:border-white outline-none transition-colors rounded-sm" id="condition-desc-new" name="condition_details" placeholder="Please describe..." rows="2"></textarea>
</div>
</div>
</div>
<div className="form-step hidden" data-step="6">
<h3 className="font-display text-2xl text-white mb-6">Availability</h3>
<div className="space-y-5">
<div className="grid grid-cols-1 gap-3">
<label className="flex items-center gap-3 p-3 border border-white/10 bg-black/30 hover:bg-white/5 cursor-pointer rounded-sm"><input checked="" className="accent-white" name="availability" type="radio" value="Open"/><span className="text-sm text-white">Open availability</span></label>
<label className="flex items-center gap-3 p-3 border border-white/10 bg-black/30 hover:bg-white/5 cursor-pointer rounded-sm"><input className="accent-white" name="availability" type="radio" value="Specific"/><span className="text-sm text-white">Specific dates</span></label>
</div>
</div>
</div>
<div className="form-step hidden" data-step="7">
<h3 className="font-display text-2xl text-white mb-6">References</h3>
<div className="border-2 border-dashed border-white/10 bg-white/5 p-8 text-center hover:bg-white/10 transition-colors relative rounded-sm">
<input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" multiple="" onchange="this.nextElementSibling.innerText = this.files.length + ' file(s) selected'" type="file"/>
<div className="pointer-events-none flex flex-col items-center gap-2">
<iconify-icon className="text-3xl text-gray-400" icon="solar:upload-minimalistic-linear"></iconify-icon>
<span className="text-xs uppercase tracking-widest text-white">Tap to Upload</span>
</div>
</div>
</div>
<div className="hidden text-center py-12 flex-grow flex flex-col justify-center items-center" id="success-message">
<iconify-icon className="text-6xl text-white mb-6" icon="solar:check-circle-bold"></iconify-icon>
<h3 className="font-display text-3xl text-white mb-4">Received</h3>
<p className="text-gray-400 text-sm mb-6">We'll be in touch shortly.</p>
<button className="text-xs uppercase tracking-widest border-b border-white pb-1" onclick="location.reload()" type="button">New Enquiry</button>
</div>
<div className="mt-8 pt-4 border-t border-white/5" id="form-nav">
<div className="flex flex-col gap-4">
<button className="w-full bg-white text-black py-4 text-[11px] uppercase tracking-[0.15em] font-bold hover:bg-gray-200 transition-colors" id="next-btn" type="button">Continue Enquiry →</button>
<button className="hidden w-full bg-white text-black py-4 text-[11px] uppercase tracking-[0.15em] font-bold hover:bg-gray-200 transition-colors" id="submit-btn" type="submit">Submit Request</button>
<div className="flex justify-between items-center">
<button className="text-[10px] uppercase tracking-widest text-gray-500 hover:text-white transition-colors invisible" id="prev-btn" type="button">Back</button>
<div className="text-[10px] text-gray-500" id="step-1-microcopy" style={{display: 'block'}}>Takes 2–3 mins</div>
</div>
<a className="text-center text-[10px] uppercase tracking-widest text-white/50 hover:text-white transition-colors border-b border-transparent hover:border-white/30 pb-1 self-center" href="#artists" id="alt-cta" style={{display: 'block'}}>Not ready? Explore artists ↓</a>
</div>
</div>
</form>
</div>
</div>
</section>

<section className="py-12 px-6 md:px-12 border-b border-white/5 bg-[#0a0a0a]">
<div className="max-w-[1400px] mx-auto flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-50 grayscale hover:opacity-100 transition-opacity duration-500">
<span className="font-display italic text-2xl font-semibold">Vogue</span>
<span className="font-display font-bold text-xl tracking-tighter">GQ</span>
<span className="font-display uppercase text-lg tracking-[0.2em]">Hypebeast</span>
<span className="font-display italic text-2xl font-bold">Inked</span>
<span className="font-display font-bold text-xl">Broadsheet</span>
</div>
</section>

<section className="py-20 md:py-32 px-6 md:px-12 max-w-[1920px] mx-auto" id="artists">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 fade-in-up">
<div>
<span className="text-[10px] uppercase tracking-[0.25em] text-white/50 block mb-3">The Team</span>
<h2 className="font-display text-4xl md:text-5xl text-white">Our Artists</h2>
</div>
<p className="text-sm text-gray-400 max-w-xs leading-relaxed">Select an artist to view their portfolio. Each specializes in unique styles ranging from fine line to realism.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16">

<div className="group cursor-pointer fade-in-up">
<div className="overflow-hidden aspect-[3/4] mb-5 relative bg-[#111]">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url(\'https://www.sorasolution.com/wp-content/uploads/2026/02/marcella-tattoo-hero-goldfish.jpg\')'}}></div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
</div>
<div>
<div className="flex justify-between items-baseline mb-1">
<h3 className="font-display text-2xl italic text-white group-hover:underline decoration-white/30 underline-offset-4">Marcella</h3>
<span className="text-[10px] uppercase tracking-widest text-white/50">Fine Line</span>
</div>
<p className="text-sm text-gray-500 line-clamp-2">Specializing in delicate botanical work and intricate micro-realism.</p>
</div>
</div>

<div className="group cursor-pointer fade-in-up delay-100">
<div className="overflow-hidden aspect-[3/4] mb-5 relative bg-[#111]">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url(\'https://www.sorasolution.com/wp-content/uploads/2026/02/jin-tattoo-hero.jpg\')'}}></div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
</div>
<div>
<div className="flex justify-between items-baseline mb-1">
<h3 className="font-display text-2xl italic text-white group-hover:underline decoration-white/30 underline-offset-4">Jin</h3>
<span className="text-[10px] uppercase tracking-widest text-white/50">Surrealism</span>
</div>
<p className="text-sm text-gray-500 line-clamp-2">Pushing boundaries with abstract concepts and smooth shading.</p>
</div>
</div>

<div className="group cursor-pointer fade-in-up delay-200">
<div className="overflow-hidden aspect-[3/4] mb-5 relative bg-[#111]">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url(\'https://www.sorasolution.com/wp-content/uploads/2026/02/orlando-tattoo-hero.jpg\')'}}></div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
</div>
<div>
<div className="flex justify-between items-baseline mb-1">
<h3 className="font-display text-2xl italic text-white group-hover:underline decoration-white/30 underline-offset-4">Orlando</h3>
<span className="text-[10px] uppercase tracking-widest text-white/50">Realism</span>
</div>
<p className="text-sm text-gray-500 line-clamp-2">Master of large scale realism and portraits with high contrast.</p>
</div>
</div>

<div className="group cursor-pointer fade-in-up">
<div className="overflow-hidden aspect-[3/4] mb-5 relative bg-[#111]">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url(\'https://www.sorasolution.com/wp-content/uploads/2026/02/wybie-piercing-12-9-2022_113321.jpg\')'}}></div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
</div>
<div>
<div className="flex justify-between items-baseline mb-1">
<h3 className="font-display text-2xl italic text-white group-hover:underline decoration-white/30 underline-offset-4">Wybie</h3>
<span className="text-[10px] uppercase tracking-widest text-white/50">Piercing</span>
</div>
<p className="text-sm text-gray-500 line-clamp-2">Precision piercing and curation using high-grade titanium.</p>
</div>
</div>

<div className="group cursor-pointer fade-in-up delay-100">
<div className="overflow-hidden aspect-[3/4] mb-5 relative bg-[#111]">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url(\'https://www.sorasolution.com/wp-content/uploads/2026/02/peque-tattoo-hero.jpg\')'}}></div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
</div>
<div>
<div className="flex justify-between items-baseline mb-1">
<h3 className="font-display text-2xl italic text-white group-hover:underline decoration-white/30 underline-offset-4">Peque</h3>
<span className="text-[10px] uppercase tracking-widest text-white/50">Lettering</span>
</div>
<p className="text-sm text-gray-500 line-clamp-2">Bold, street-inspired scripts and urban art styles.</p>
</div>
</div>

<div className="group cursor-pointer fade-in-up delay-200">
<div className="overflow-hidden aspect-[3/4] mb-5 relative bg-[#111]">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url(\'https://www.sorasolution.com/wp-content/uploads/2026/02/leo-tattoo.jpg\')'}}></div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
</div>
<div>
<div className="flex justify-between items-baseline mb-1">
<h3 className="font-display text-2xl italic text-white group-hover:underline decoration-white/30 underline-offset-4">Leo</h3>
<span className="text-[10px] uppercase tracking-widest text-white/50">Geometric</span>
</div>
<p className="text-sm text-gray-500 line-clamp-2">Sacred geometry, dotwork and complex pattern mandalas.</p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-block border-b border-white pb-1 text-[11px] uppercase tracking-[0.15em] hover:text-white/70 transition-colors" href="#booking">Start a Project with an Artist</a>
</div>
</section>

<section className="py-20 px-6 md:px-12 bg-[#080808] fade-in-up">
<div className="mx-auto max-w-[1100px]">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="space-y-4 p-6 border border-white/5 hover:bg-white/5 transition-colors"><iconify-icon className="text-3xl text-white/80" icon="solar:pen-new-square-linear"></iconify-icon><h4 className="text-xs uppercase tracking-widest text-white">Custom Tattoos</h4><p className="text-xs text-gray-500">From concept to skin.</p></div>
<div className="space-y-4 p-6 border border-white/5 hover:bg-white/5 transition-colors"><iconify-icon className="text-3xl text-white/80" icon="solar:refresh-circle-linear"></iconify-icon><h4 className="text-xs uppercase tracking-widest text-white">Cover Ups</h4><p className="text-xs text-gray-500">Transform old work.</p></div>
<div className="space-y-4 p-6 border border-white/5 hover:bg-white/5 transition-colors"><iconify-icon className="text-3xl text-white/80" icon="solar:stars-minimalistic-linear"></iconify-icon><h4 className="text-xs uppercase tracking-widest text-white">Piercing</h4><p className="text-xs text-gray-500">Professional &amp; sterile.</p></div>
<div className="space-y-4 p-6 border border-white/5 hover:bg-white/5 transition-colors"><iconify-icon className="text-3xl text-white/80" icon="solar:shield-check-linear"></iconify-icon><h4 className="text-xs uppercase tracking-widest text-white">Aftercare</h4><p className="text-xs text-gray-500">Healing guidance.</p></div>
</div>
</div>
</section>

<section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-[#111] fade-in-up overflow-hidden" id="studio">

<div className="absolute inset-0 w-full h-full overflow-hidden">
<div className="absolute inset-x-0 h-[120%] -top-[10%] parallax-bg" data-speed="0.2">
<video autoplay="" className="w-full h-full object-cover grayscale contrast-[1.1] brightness-90" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/98c8f8c4-f6ef-4103-a6cb-83c6a5927651_3840w.jpg">
<source src="https://www.sorasolution.com/wp-content/uploads/2026/02/0_Care_Equipment_3840x2160.mp4" type="video/mp4"/>
</video>
</div>
</div>

<div className="absolute inset-0 bg-black/50"></div>
<div className="text-center max-w-2xl z-10 px-6 relative" style={{maskImage: 'linear-gradient(360deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(360deg, transparent, black 0%, black 100%, transparent)'}}>
<h2 className="md:text-6xl text-4xl text-white font-display mb-6">The Space</h2>
<p className="leading-relaxed md:text-base text-sm font-light mb-8">Designed for creativity and comfort. Our Bondi studio is an open-plan sanctuary where hygiene meets high art.</p>
<a className="bg-white text-black px-8 py-3 text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-colors" href="#booking">Visit Us</a>
</div>
</section>

<section className="py-20 md:py-24 px-6 md:px-12 max-w-3xl mx-auto fade-in-up" id="faq">
<h2 className="font-display text-3xl md:text-4xl mb-12 text-center">Common Questions</h2>
<div className="space-y-1">
<div className="accordion-item border-b border-white/10">
<button className="w-full flex justify-between items-center py-5 text-left focus:outline-none group">
<span className="text-base font-display italic text-gray-200 group-hover:text-white transition-colors">How do bookings work?</span>
<iconify-icon className="accordion-icon text-xl text-gray-500" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="pb-5 text-gray-500 font-light text-sm leading-relaxed pr-8">Submit an enquiry via our form below. Once received, our studio manager will match you with the best artist for your concept and provide a quote or consultation time.</div>
</div>
</div>
<div className="accordion-item border-b border-white/10">
<button className="w-full flex justify-between items-center py-5 text-left focus:outline-none group">
<span className="text-base font-display italic text-gray-200 group-hover:text-white transition-colors">Do you take walk-ins?</span>
<iconify-icon className="accordion-icon text-xl text-gray-500" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="pb-5 text-gray-500 font-light text-sm leading-relaxed pr-8">Yes, depending on artist availability. We recommend calling ahead (02 9365 0000) or checking our Instagram stories for last-minute openings.</div>
</div>
</div>
<div className="accordion-item border-b border-white/10">
<button className="w-full flex justify-between items-center py-5 text-left focus:outline-none group">
<span className="text-base font-display italic text-gray-200 group-hover:text-white transition-colors">Minimum age requirements?</span>
<iconify-icon className="accordion-icon text-xl text-gray-500" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="pb-5 text-gray-500 font-light text-sm leading-relaxed pr-8">Strictly 18+ for tattoos with valid photo ID. Piercings: 16+ with parental consent and presence.</div>
</div>
</div>
</div>
</section>

<footer className="bg-black text-white py-16 border-t border-white/10">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-12">
<div className="md:w-1/3">
<a className="font-display text-2xl italic tracking-tight mb-4 block" href="#">Kaleidoscope.</a>
<p className="text-xs text-gray-600 uppercase tracking-widest">© 2024 Kaleidoscope Tattoo Studio</p>
</div>
<div className="flex flex-wrap gap-12 md:gap-24">
<div>
<h4 className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4">Connect</h4>
<ul className="space-y-3 text-xs font-light text-gray-400">
<li><a className="hover:text-white" href="#">Instagram</a></li>
<li><a className="hover:text-white" href="#">Facebook</a></li>
<li><a className="hover:text-white" href="#">Email</a></li>
</ul>
</div>
</div>
</div>
</footer>

<div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#121212] border-t border-white/10 p-4 safe-pb shadow-2xl flex items-center justify-between">
<div className="flex flex-col"><span className="text-[10px] uppercase text-gray-400 tracking-wider">Ready to ink?</span><span className="text-xs font-display italic text-white">Free Consultation</span></div>
<a className="bg-white text-black px-6 py-3 text-[10px] uppercase tracking-widest font-bold" href="#booking">Book A Tattoo</a>
</div>
</main>



    </>
  );
}
