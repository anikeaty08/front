import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
plausible.init()



document.addEventListener("DOMContentLoaded", (event) => {
gsap.registerPlugin(ScrollTrigger);
// 1. Vertical Text Clip Slide Down (Hero Title)
const heroTitle = document.getElementById('hero-title');
if (heroTitle) {
const text = (heroTitle.getAttribute('data-hero-text') || heroTitle.textContent || '').trim();
heroTitle.innerHTML = '';
const words = text.split(/\s+/);
words.forEach((word, index) => {
const wordSpan = document.createElement('span');
wordSpan.className = 'inline-block whitespace-nowrap';
word.split('').forEach(char => {
const outerSpan = document.createElement('span');
outerSpan.className = 'inline-block overflow-hidden align-bottom pb-1 -mb-1';
const innerSpan = document.createElement('span');
innerSpan.className = 'inline-block translate-y-[120%] hero-char';
innerSpan.textContent = char;
outerSpan.appendChild(innerSpan);
wordSpan.appendChild(outerSpan);
});
heroTitle.appendChild(wordSpan);
if (index < words.length - 1) {
heroTitle.appendChild(document.createTextNode(' '));
}
});
gsap.to('.hero-char', {
y: '0%',
stagger: 0.02,
duration: 0.8,
ease: 'power3.out',
delay: 0.1
});
}
// 2. Masked Staggered Word Reveal (About Us)
const aboutText = document.getElementById('about-text');
if (aboutText) {
const words = aboutText.textContent.trim().split(/\s+/);
aboutText.innerHTML = '';
words.forEach(word => {
const outerSpan = document.createElement('span');
outerSpan.className = 'inline-block overflow-hidden align-bottom pb-2 -mb-2 mr-2';
const innerSpan = document.createElement('span');
innerSpan.className = 'inline-block translate-y-[120%] about-word';
innerSpan.textContent = word;
outerSpan.appendChild(innerSpan);
aboutText.appendChild(outerSpan);
});
gsap.to('.about-word', {
scrollTrigger: {
trigger: aboutText,
start: 'top 85%',
},
y: '0%',
stagger: 0.05,
duration: 0.8,
ease: 'power3.out'
});
}
// 3. Parallax Scrolling
gsap.utils.toArray('.parallax-bg').forEach(bg => {
gsap.to(bg, {
yPercent: 15,
ease: "none",
scrollTrigger: {
trigger: bg.parentElement,
start: "top bottom",
end: "bottom top",
scrub: true
}
});
});
// 4. Card Carousel Logic
const cards = Array.from(document.querySelectorAll('.card-slide'));
const btnNext = document.getElementById('next-card');
const btnPrev = document.getElementById('prev-card');
let currentIndex = 0;
function updateCards() {
cards.forEach((card, index) => {
card.className = 'absolute inset-0 card-slide';
if (index === currentIndex) {
card.classList.add('card-active');
} else if (index === (currentIndex + 1) % cards.length) {
card.classList.add('card-next');
} else {
card.classList.add('card-hidden');
}
});
}
function nextCard() {
currentIndex = (currentIndex + 1) % cards.length;
updateCards();
}
function prevCard() {
currentIndex = (currentIndex - 1 + cards.length) % cards.length;
updateCards();
}
if(btnNext && btnPrev) {
btnNext.addEventListener('click', nextCard);
btnPrev.addEventListener('click', prevCard);
}
});



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener("DOMContentLoaded", () => {
        const words = ["pergola", "outdoor office", "outdoor sauna", "garden office", "gazebo", "decking"];
        let i = 0;
        const cycleEl = document.getElementById("cycle-word");
        if (cycleEl) {
          gsap.from("#hero-title-new", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.1 });
          setInterval(() => {
            gsap.to(cycleEl, {
              y: -15, opacity: 0, duration: 0.4, ease: "power2.in", onComplete: () => {
                i = (i + 1) % words.length;
                cycleEl.textContent = words[i];
                gsap.fromTo(cycleEl, { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" });
              }
            });
          }, 3000);
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0 flex justify-center w-full max-w-7xl mx-auto border-x border-zinc-200/50">
<div className="w-full h-full grid-lines"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<nav className="flex items-center justify-between py-6 lg:py-8">
<div className="flex items-center gap-2 text-xl font-medium tracking-tight">
<div className="w-6 h-6 bg-zinc-900 rounded-md flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="solar:ruler-linear"></iconify-icon>
</div>
          OutdoorPlanning
        </div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#how-it-works">
            How it works
          </a>
<a className="hover:text-zinc-900 transition-colors" href="#features">
            Supported Builds
          </a>
<a className="hover:text-zinc-900 transition-colors" href="#testimonials">
            Reviews
          </a>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:block text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
            Log in
          </button>
<a className="bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors shadow-sm inline-flex items-center justify-center" href="https://app.outdoorplanning.co.uk">
            Start Check
          </a>
</div>
</nav>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 pt-12 lg:pt-20 pb-24 items-center min-h-[80vh]">
<div className="max-w-2xl pr-4">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 shadow-sm mb-6">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-zinc-600">
              Updated for 2024 UK Regulations
            </span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] tracking-tight font-medium leading-[1.05] text-zinc-900" id="hero-title-new">
            Does your
            <span className="text-emerald-600 inline-block" id="cycle-word">
              pergola
            </span>
            need planning permission?
          </h1>
<p className="mt-6 text-lg sm:text-xl text-zinc-500 font-normal leading-relaxed max-w-lg">
            Find out with our planning check.
          </p>
<div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-8">
<a className="relative group rounded-full p-[1px] overflow-hidden bg-zinc-200 inline-flex transition-transform hover:scale-[1.02] shadow-sm" href="https://app.outdoorplanning.co.uk">
<span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E4E4E7_0%,#18181B_50%,#E4E4E7_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
<span className="relative w-full h-full bg-white group-hover:bg-zinc-50 transition-colors rounded-full px-8 py-4 flex items-center justify-center gap-3 text-base font-medium text-zinc-900">
                Start planning check
                <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#FAFAFA] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#FAFAFA] object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#FAFAFA] object-cover bg-zinc-100" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="text-sm">
<div className="flex text-zinc-900 gap-0.5">
<iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon>
</div>
<span className="text-zinc-500 font-normal mt-0.5 block">
                  10,000+ checks run
                </span>
</div>
</div>
</div>
</div>
<div className="relative h-[500px] lg:h-[650px] w-full rounded-3xl overflow-hidden bg-zinc-100 border border-zinc-200/50 shadow-sm">
<img alt="Modern Garden Room" className="parallax-bg opacity-90 mix-blend-multiply w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 scale-[1.15]" src="https://images.unsplash.com/photo-1696846912973-3233cc80bf86?w=1600&amp;q=80"/>

<div className="absolute top-10 left-6 sm:left-10 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-zinc-200/50 w-72">
<div className="flex items-center justify-between mb-4">
<p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
                Question 3/8
              </p>
<iconify-icon className="text-zinc-400" icon="solar:ruler-cross-pen-linear"></iconify-icon>
</div>
<p className="text-sm font-medium tracking-tight mt-1 text-zinc-900 leading-snug">
              Is any part of the structure within 2 metres of the boundary of
              the curtilage?
            </p>
<div className="mt-5 flex items-center justify-between bg-zinc-50 p-3 rounded-xl border border-zinc-100">
<span className="text-xs font-medium text-zinc-600">Yes, it is</span>

<div className="relative inline-block w-10 align-middle select-none">
<input className="ui-toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-zinc-200 appearance-none cursor-pointer transition-colors duration-200 ease-in-out z-10 checked:border-zinc-900 focus:outline-none" id="toggle1" name="toggle" type="checkbox"/>
<label className="ui-toggle-label block overflow-hidden h-5 rounded-full bg-zinc-200 cursor-pointer transition-colors duration-200 ease-in-out" htmlFor="toggle1">
<span className="block w-4 h-4 m-[2px] rounded-full bg-white shadow-sm transform transition-transform duration-200 ease-in-out"></span>
</label>
</div>
</div>
</div>

<div className="absolute bottom-10 right-6 sm:right-10 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-zinc-200/50 flex flex-col items-start gap-2">
<div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mb-1">
<iconify-icon className="text-emerald-600 text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<p className="text-xs text-zinc-500 font-medium">Analysis Complete</p>
<p className="text-base font-medium tracking-tight text-zinc-900">
              Permitted Development
            </p>
<p className="text-xs text-zinc-400 mt-1 max-w-[180px] leading-relaxed font-normal">
              No formal planning application is required for this build.
            </p>
</div>
</div>
</section>
</div>

<div className="w-full border-y border-zinc-200/50 bg-white py-8 overflow-hidden flex relative z-10">
<div className="flex whitespace-nowrap animate-marquee items-center opacity-40">

<div className="flex gap-24 items-center px-12">
<span className="text-lg font-medium tracking-tight text-zinc-800 flex items-center gap-2">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
            Fully secure
          </span>
<span className="text-lg font-medium tracking-tight text-zinc-800 flex items-center gap-2">
<iconify-icon className="text-2xl" icon="solar:document-add-linear"></iconify-icon>
            Instant PDF Reports
          </span>
<span className="text-lg font-medium tracking-tight text-zinc-800 flex items-center gap-2">
<iconify-icon className="text-2xl" icon="solar:map-linear"></iconify-icon>
            UK Wide Coverage
          </span>
<span className="text-lg font-medium tracking-tight text-zinc-800 flex items-center gap-2">
<iconify-icon className="text-2xl" icon="solar:clock-circle-linear"></iconify-icon>
            3-Minute Process
          </span>
<span className="text-lg font-medium tracking-tight text-zinc-800 flex items-center gap-2">
<iconify-icon className="text-2xl" icon="solar:verified-check-linear"></iconify-icon>
            Based on Gov Guidance
          </span>
</div>

<div className="flex gap-24 items-center px-12">
<span className="text-lg font-medium tracking-tight text-zinc-800 flex items-center gap-2">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
            Fully secure
          </span>
<span className="text-lg font-medium tracking-tight text-zinc-800 flex items-center gap-2">
<iconify-icon className="text-2xl" icon="solar:document-add-linear"></iconify-icon>
            Instant PDF Reports
          </span>
<span className="text-lg font-medium tracking-tight text-zinc-800 flex items-center gap-2">
<iconify-icon className="text-2xl" icon="solar:map-linear"></iconify-icon>
            UK Wide Coverage
          </span>
<span className="text-lg font-medium tracking-tight text-zinc-800 flex items-center gap-2">
<iconify-icon className="text-2xl" icon="solar:clock-circle-linear"></iconify-icon>
            3-Minute Process
          </span>
<span className="text-lg font-medium tracking-tight text-zinc-800 flex items-center gap-2">
<iconify-icon className="text-2xl" icon="solar:verified-check-linear"></iconify-icon>
            Based on Gov Guidance
          </span>
</div>
</div>
</div>

<section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24" id="how-it-works">
<div className="lg:p-16 bg-white border-zinc-200/60 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-6 flex flex-col justify-center">
<span className="uppercase flex items-center gap-2 text-xs font-medium text-zinc-400 tracking-widest mb-8"><span className="w-1.5 h-1.5 rounded-full bg-zinc-800"></span> how it works</span>
<p className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-zinc-900" id="about-text"><span className="inline-block overflow-hidden align-bottom pb-2 -mb-2 mr-2"><span className="inline-block translate-y-[120%] about-word">3</span></span><span className="inline-block overflow-hidden align-bottom pb-2 -mb-2 mr-2"><span className="inline-block translate-y-[120%] about-word">Simple</span></span><span className="inline-block overflow-hidden align-bottom pb-2 -mb-2 mr-2"><span className="inline-block translate-y-[120%] about-word">Steps</span></span></p>
<p className="mt-6 text-lg text-zinc-500 font-normal leading-relaxed max-w-sm">
              We've streamlined the process to get you the planning answers you need quickly and accurately.
            </p>
</div>
<div className="lg:col-span-6 grid grid-cols-1 gap-6 pt-8 lg:pt-0">

<div className="p-6 rounded-2xl border border-zinc-100 bg-zinc-50/50 flex gap-5 items-start">
<div className="w-10 h-10 shrink-0 bg-white rounded-xl flex items-center justify-center shadow-sm border border-zinc-200/60 text-zinc-900 font-medium text-lg">
                1
              </div>
<div className="mt-1">
<h4 className="text-base font-medium tracking-tight mb-1 text-zinc-900">
                  Submit Project Details
                </h4>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">
                  Upload location, measurements, and drawings.
                </p>
</div>
</div>

<div className="p-6 rounded-2xl border border-zinc-100 bg-zinc-50/50 flex gap-5 items-start">
<div className="w-10 h-10 shrink-0 bg-white rounded-xl flex items-center justify-center shadow-sm border border-zinc-200/60 text-zinc-900 font-medium text-lg">
                2
              </div>
<div className="mt-1">
<h4 className="text-base font-medium tracking-tight mb-1 text-zinc-900">
                  We Assess the Planning Position
                </h4>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">
                  We review Permitted Development rights, constraints, and site-specific factors.
                </p>
</div>
</div>

<div className="p-6 rounded-2xl border border-zinc-100 bg-zinc-50/50 flex gap-5 items-start">
<div className="w-10 h-10 shrink-0 bg-white rounded-xl flex items-center justify-center shadow-sm border border-zinc-200/60 text-zinc-900 font-medium text-lg">
                3
              </div>
<div className="mt-1">
<h4 className="text-base font-medium tracking-tight mb-1 text-zinc-900">
                  Receive Your Planning Report
                </h4>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">
                  Clear, concise, ready to share with your client.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 lg:pb-32" id="features">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-10">
<div>
<span className="text-xs font-medium text-zinc-400 tracking-widest uppercase flex items-center gap-2 mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-800"></span>
            Supported Structures
          </span>
<h2 className="text-3xl sm:text-4xl tracking-tight font-medium text-zinc-900">
            What you can check
          </h2>
</div>
<div className="flex gap-3">
<button className="w-10 h-10 rounded-full border border-zinc-200 bg-white shadow-sm flex items-center justify-center hover:bg-zinc-50 transition-colors" id="prev-card">
<iconify-icon className="text-lg" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-zinc-200 bg-white shadow-sm flex items-center justify-center hover:bg-zinc-50 transition-colors" id="next-card">
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="relative h-[500px] w-full card-rotator overflow-hidden rounded-3xl">

<div className="absolute inset-0 card-slide card-active" data-index="0">
<div className="w-full h-full bg-white rounded-3xl border border-zinc-200/60 overflow-hidden flex flex-col sm:flex-row shadow-sm">
<div className="relative h-1/2 sm:h-full sm:w-1/2 overflow-hidden bg-zinc-100">
<img alt="Pergola" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1527359443443-84a48aec73d2?w=1600&amp;q=80"/>
</div>
<div className="flex-1 p-8 sm:p-12 flex flex-col justify-center">
<div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-6 text-zinc-800">
<iconify-icon className="text-2xl" icon="solar:home-angle-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-3">
                Pergolas &amp; Gazebos
              </h3>
<p className="text-zinc-500 text-sm font-normal leading-relaxed mb-8">
                Determine height restrictions, boundary proximity rules, and
                front-elevation constraints for freestanding garden structures.
              </p>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm text-zinc-600 font-normal">
<iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>
                  Eaves height calculations
                </div>
<div className="flex items-center gap-3 text-sm text-zinc-600 font-normal">
<iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>
                  Conservation area checks
                </div>
<div className="flex items-center gap-3 text-sm text-zinc-600 font-normal">
<iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>
                  Curtilage space limits
                </div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 card-slide card-next" data-index="1">
<div className="w-full h-full bg-white rounded-3xl border border-zinc-200/60 overflow-hidden flex flex-col sm:flex-row shadow-sm">
<div className="relative h-1/2 sm:h-full sm:w-1/2 overflow-hidden bg-zinc-100">
<img alt="Garden Room" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1688293963722-a0eaead0ff52?w=1600&amp;q=80"/>
</div>
<div className="flex-1 p-8 sm:p-12 flex flex-col justify-center">
<div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-6 text-zinc-800">
<iconify-icon className="text-2xl" icon="solar:home-smile-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-3">
                Garden Offices &amp; Studios
              </h3>
<p className="text-zinc-500 text-sm font-normal leading-relaxed mb-8">
                Navigate rules regarding incidental use, sleeping accommodation
                clauses, and roof pitch limitations for enclosed outbuildings.
              </p>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm text-zinc-600 font-normal">
<iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>
                  Primary use validation
                </div>
<div className="flex items-center gap-3 text-sm text-zinc-600 font-normal">
<iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>
                  Roof type logic (flat vs pitched)
                </div>
<div className="flex items-center gap-3 text-sm text-zinc-600 font-normal">
<iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>
                  Veranda inclusion checks
                </div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 card-slide card-hidden" data-index="2">
<div className="w-full h-full bg-white rounded-3xl border border-zinc-200/60 overflow-hidden flex flex-col sm:flex-row shadow-sm">
<div className="relative h-1/2 sm:h-full sm:w-1/2 overflow-hidden bg-zinc-100">
<img alt="Decking" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1722881445918-75ae564ffced?w=1600&amp;q=80"/>
</div>
<div className="flex-1 p-8 sm:p-12 flex flex-col justify-center">
<div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-6 text-zinc-800">
<iconify-icon className="text-2xl" icon="solar:stairs-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-3">
                Decking &amp; Raised Platforms
              </h3>
<p className="text-zinc-500 text-sm font-normal leading-relaxed mb-8">
                Ensure your foundational work complies. Checks height
                restrictions above existing ground level and coverage areas.
              </p>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm text-zinc-600 font-normal">
<iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>
                  30cm height threshold check
                </div>
<div className="flex items-center gap-3 text-sm text-zinc-600 font-normal">
<iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>
                  Combined structure area calc
                </div>
<div className="flex items-center gap-3 text-sm text-zinc-600 font-normal">
<iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>
                  Listed building constraints
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 lg:pb-32" id="services">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-10">
<div>
<span className="text-xs font-medium text-zinc-400 tracking-widest uppercase flex items-center gap-2 mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-800"></span>
            Optional Services
          </span>
<h2 className="text-3xl sm:text-4xl tracking-tight font-medium text-zinc-900">
            Get extra certainty
          </h2>
<p className="mt-3 text-sm sm:text-base text-zinc-500 font-normal max-w-2xl">
            Alongside your planning check, you can add professional review or
            formal council confirmation.
          </p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="bg-white rounded-3xl border border-zinc-200/60 shadow-sm p-8 sm:p-10">
<div className="flex items-start justify-between gap-6">
<div>
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-800">
<iconify-icon className="text-xl" icon="solar:user-check-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-900">
                  Professional Assessment
                </h3>
</div>
<p className="text-sm text-zinc-500 font-normal leading-relaxed max-w-xl">
                A qualified planning consultant will review all the details you
                have provided and give you a clear written opinion on whether
                planning permission is required for your project.
              </p>
</div>
<div className="text-right shrink-0">
<div className="text-2xl font-medium tracking-tight text-zinc-900">
                £250
              </div>
<div className="text-xs text-zinc-500 font-normal">ex VAT</div>
</div>
</div>
<div className="mt-8 space-y-3">
<div className="flex items-center gap-3 text-sm text-zinc-600 font-normal">
<iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>
              1–2 business day turnaround
            </div>
<div className="flex items-center gap-3 text-sm text-zinc-600 font-normal">
<iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>
              Full review of your dimensions, location, and structure type
            </div>
<div className="flex items-center gap-3 text-sm text-zinc-600 font-normal">
<iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>
              Cross-referenced against local planning policies
            </div>
<div className="flex items-center gap-3 text-sm text-zinc-600 font-normal">
<iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>
              Written report with a clear recommendation
            </div>
<div className="flex items-center gap-3 text-sm text-zinc-600 font-normal">
<iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>
              Advice on next steps if permission is needed
            </div>
</div>
<div className="mt-10">
<a className="bg-zinc-900 text-white rounded-full px-6 py-3 flex items-center justify-center gap-3 text-sm font-medium hover:bg-zinc-800 transition-colors shadow-sm" href="https://app.outdoorplanning.co.uk">
              Start check
              <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="bg-white rounded-3xl border border-zinc-200/60 shadow-sm p-8 sm:p-10">
<div className="flex items-start justify-between gap-6">
<div>
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-800">
<iconify-icon className="text-xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-900">
                  Lawful Development Certificate (LDC)
                </h3>
</div>
<p className="text-sm text-zinc-500 font-normal leading-relaxed max-w-xl">
                Formal confirmation from your local council that the work is
                lawful and does not require planning permission. Recommended for
                mortgage lenders, insurers, or future property sales.
              </p>
</div>
<div className="text-right shrink-0">
<div className="text-2xl font-medium tracking-tight text-zinc-900">
                £50
              </div>
<div className="text-xs text-zinc-500 font-normal">ex VAT</div>
</div>
</div>
<div className="mt-8 space-y-3">
<div className="flex items-center gap-3 text-sm text-zinc-600 font-normal">
<iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>
              Council-issued confirmation
            </div>
<div className="flex items-center gap-3 text-sm text-zinc-600 font-normal">
<iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>
              Useful for lenders, insurers, and conveyancing
            </div>
<div className="flex items-center gap-3 text-sm text-zinc-600 font-normal">
<iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>
              Helps de-risk future property sales
            </div>
</div>
<div className="mt-10">
<a className="bg-zinc-900 text-white rounded-full px-6 py-3 flex items-center justify-center gap-3 text-sm font-medium hover:bg-zinc-800 transition-colors shadow-sm" href="https://app.outdoorplanning.co.uk">
              Start check
              <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 lg:pb-32" id="faq">
<div className="text-center mb-12">
<h2 className="text-3xl sm:text-4xl tracking-tight font-medium text-zinc-900">
          Frequently Asked Questions
        </h2>
</div>
<div className="space-y-4">

<details className="group rounded-2xl border border-zinc-200/60 bg-white shadow-sm transition-all duration-200">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 rounded-2xl">
<h3 className="text-base font-medium tracking-tight">Is this an official council decision?</h3>
<span className="relative h-5 w-5 shrink-0 text-zinc-500">
<iconify-icon className="absolute inset-0 transition-transform duration-300 group-open:-rotate-180 text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-500 text-sm font-normal leading-relaxed">
<p>No. We provide a professional planning assessment based on UK legislation and local constraints. For formal confirmation, a Lawful Development Certificate may be required.</p>
</div>
</details>

<details className="group rounded-2xl border border-zinc-200/60 bg-white shadow-sm transition-all duration-200">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 rounded-2xl">
<h3 className="text-base font-medium tracking-tight">What if planning permission is required?</h3>
<span className="relative h-5 w-5 shrink-0 text-zinc-500">
<iconify-icon className="absolute inset-0 transition-transform duration-300 group-open:-rotate-180 text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-500 text-sm font-normal leading-relaxed">
<p>We can guide on next steps and refer to planning professionals if needed.</p>
</div>
</details>

<details className="group rounded-2xl border border-zinc-200/60 bg-white shadow-sm transition-all duration-200">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 rounded-2xl">
<h3 className="text-base font-medium tracking-tight">How quickly do you respond?</h3>
<span className="relative h-5 w-5 shrink-0 text-zinc-500">
<iconify-icon className="absolute inset-0 transition-transform duration-300 group-open:-rotate-180 text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-500 text-sm font-normal leading-relaxed">
<p>Typically within 1–2 working days.</p>
</div>
</details>
</div>
</section>

<section className="relative z-10 w-full max-w-[95%] mx-auto mb-24 rounded-3xl overflow-hidden h-[50vh] min-h-[400px] flex items-center justify-center text-center shadow-sm">
<div className="absolute inset-0 bg-zinc-900/60 z-10 mix-blend-multiply"></div>
<img alt="Architecture" className="absolute inset-0 w-full h-full object-cover parallax-bg brightness-90 scale-[1.15]" src="https://images.unsplash.com/photo-1542621334-a254cf47733d?w=3840&amp;q=80"/>
<div className="relative z-20 flex flex-col items-center px-4">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 max-w-2xl leading-[1.1]">
          Stop guessing. Start building.
        </h2>
<p className="text-zinc-200 text-sm sm:text-base font-normal mb-10 max-w-md">
          Get instant clarity on your permitted development rights without
          waiting weeks for council advice.
        </p>
<a className="bg-white text-zinc-900 rounded-full px-8 py-3.5 flex items-center justify-center gap-3 text-sm font-medium hover:scale-105 transition-transform shadow-lg" href="https://app.outdoorplanning.co.uk">
          Start Questionnaire
          <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<footer className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-t border-zinc-200/60 bg-[#FAFAFA]">
<div>
<div className="flex items-center gap-2 text-lg font-medium tracking-tight text-zinc-900 mb-2">
<div className="w-5 h-5 bg-zinc-900 rounded flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:ruler-linear"></iconify-icon>
</div>
          OutdoorPlanning
        </div>
<p className="text-sm font-normal text-zinc-500 max-w-xs">
          Simplifying UK planning regulations for homeowners and trades
          professionals.
        </p>
</div>
<div className="flex flex-col sm:flex-row gap-8 sm:gap-16 text-sm font-normal">
<div className="flex flex-col gap-3">
<span className="font-medium text-zinc-900 mb-1">Product</span>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
            How it works
          </a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
            Pricing
          </a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
            Sample Report
          </a>
</div>
<div className="flex flex-col gap-3">
<span className="font-medium text-zinc-900 mb-1">Legal</span>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
            Terms of Service
          </a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
            Privacy Policy
          </a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
            Disclaimer
          </a>
</div>
<div className="flex flex-col gap-3">
<span className="font-medium text-zinc-900 mb-1">Support</span>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors flex items-center gap-2" href="#">
<iconify-icon className="text-base" icon="solar:letter-linear"></iconify-icon>
            help@planchecker.uk
          </a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors flex items-center gap-2" href="#faq">
<iconify-icon className="text-base" icon="solar:question-circle-linear"></iconify-icon>
            FAQ
          </a>
</div>
</div>
</footer>
<div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center text-xs font-normal text-zinc-400">
<p>
        © 2024 Pergola Planning Checker. Not affiliated with the UK Government.
      </p>
</div>


    </>
  );
}
