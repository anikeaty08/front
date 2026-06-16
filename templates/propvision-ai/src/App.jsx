import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



document.addEventListener("DOMContentLoaded", () => {
// Intersection Observer
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
// Mobile Menu Logic
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = menuBtn.querySelector('iconify-icon');
let isMenuOpen = false;
menuBtn.addEventListener('click', () => {
isMenuOpen = !isMenuOpen;
if (isMenuOpen) {
mobileMenu.classList.remove('closed');
mobileMenu.classList.add('open');
menuIcon.setAttribute('icon', 'lucide:x');
document.body.style.overflow = 'hidden';
} else {
mobileMenu.classList.remove('open');
mobileMenu.classList.add('closed');
menuIcon.setAttribute('icon', 'lucide:menu');
document.body.style.overflow = '';
}
});
// Testimonial Slider
const track = document.getElementById('testimonial-track');
const prevBtn = document.getElementById('prev-voice');
const nextBtn = document.getElementById('next-voice');
const slides = document.querySelectorAll('.testimonial-slide');
let currentIndex = 0;
function updateSlider() {
track.style.transform = `translateX(-${currentIndex * 100}%)`;
slides.forEach((slide, index) => {
slide.style.opacity = index === currentIndex ? '1' : '0.4';
});
}
updateSlider();
nextBtn.addEventListener('click', () => {
if (currentIndex < slides.length - 1) {
currentIndex++;
} else {
currentIndex = 0;
}
updateSlider();
});
prevBtn.addEventListener('click', () => {
if (currentIndex > 0) {
currentIndex--;
} else {
currentIndex = slides.length - 1;
}
updateSlider();
});
});



      document.addEventListener("DOMContentLoaded", () => {
        const container = document.getElementById('use-case-toggles');
        if (!container) return;
        const bg = document.getElementById('toggle-bg');
        const btns = container.querySelectorAll('button');

        function update(target) {
          bg.style.width = `${target.offsetWidth}px`;
          bg.style.height = `${target.offsetHeight}px`;
          bg.style.left = `${target.offsetLeft}px`;
          bg.style.top = `${target.offsetTop}px`;

          btns.forEach(b => {
            if (b === target) {
              b.classList.remove('text-stone-400');
              b.classList.add('text-[#383B26]');
            } else {
              b.classList.add('text-stone-400');
              b.classList.remove('text-[#383B26]');
            }
          });
        }

        // Init
        update(btns[0]);

        // Listeners
        btns.forEach(btn => btn.addEventListener('click', () => update(btn)));

        // Resize handler
        window.addEventListener('resize', () => {
            const active = Array.from(btns).find(b => b.classList.contains('text-[#383B26]'));
            if(active) update(active);
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-[#FDFCFB]/90 backdrop-blur-xl border-b border-[#EBE5DA] transition-all duration-300">
<div className="max-w-screen-2xl mx-auto px-6 h-16 flex items-center justify-between relative z-50">

<div className="flex items-center gap-2">

<div className="flex items-center justify-center text-[#8F907E]">
<iconify-icon icon="lucide:armchair" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-[#383B26] serif">
            PropVision
            <span className="text-[#8F907E]">.ai</span>
</span>
</div>

<div className="hidden md:flex items-center gap-8 text-xs font-semibold text-stone-500 uppercase tracking-widest">
<a className="hover:text-[#8F907E] transition-colors" href="#">
            Collections
          </a>
<a className="hover:text-[#8F907E] transition-colors" href="#">Studio</a>
<a className="hover:text-[#8F907E] transition-colors" href="#">
            Business
          </a>
<a className="hover:text-[#8F907E] transition-colors" href="#">Pricing</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-semibold text-stone-500 hover:text-[#383B26] transition-colors uppercase tracking-widest" href="#">
            Sign in
          </a>

<button className="bg-[#383B26] text-[#DADFDB] px-6 py-2.5 text-xs font-medium tracking-widest uppercase transition-all rounded-sm hover:bg-[#2C2E1E] shadow-lg shadow-[#383B26]/10">
            Get Started
          </button>

<button className="md:hidden text-stone-600 hover:text-[#383B26] transition-colors" id="menu-btn">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="fixed inset-0 bg-[#FDFCFB] z-40 flex flex-col pt-24 px-6 closed md:hidden h-screen" id="mobile-menu">
<div className="flex flex-col gap-8 text-2xl font-light tracking-tight text-[#383B26] serif">
<a className="border-b border-[#EBE5DA] pb-4" href="#">Collections</a>
<a className="border-b border-[#EBE5DA] pb-4" href="#">Studio</a>
<a className="border-b border-[#EBE5DA] pb-4" href="#">Pricing</a>
<a className="border-b border-[#EBE5DA] pb-4" href="#">Journal</a>
</div>
<div className="mt-auto mb-12">
<button className="w-full py-4 bg-[#383B26] text-[#DADFDB] text-xs font-semibold uppercase tracking-widest shadow-xl">
            Create Account
          </button>
</div>
</div>
</nav>

<header className="overflow-hidden flex flex-col min-h-[clamp(700px,100vh,900px)] bg-[#FDFCFB] w-full pt-28 relative justify-center">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#EBE5DA]/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3">
</div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#8F907E]/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4">
</div>
<div className="z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-screen-2xl mr-auto ml-auto pr-6 pl-6 relative gap-x-16 gap-y-16 items-center">

<div className="animate-on-scroll max-w-xl">
<div className="inline-flex items-center gap-2 mb-8 px-3 py-1 bg-[#F2F0E9] border border-[#EBE5DA] rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-[#8F907E]"></span>
<span className="text-[10px] uppercase font-semibold text-[#654C37] tracking-[0.2em]">PropVISION Model 2.4</span>
</div>
<h1 className="md:text-8xl leading-[0.95] text-6xl font-normal text-[#2C2825] tracking-tight mb-8">
          Interiors,
          <br/>
<span className="italic text-[#8F907E]">reimagined.</span>
</h1>
<p className="md:text-2xl leading-relaxed text-xl font-light text-stone-500 max-w-lg mb-12">Transform cluttered,
          vacant spaces into curated sanctuaries using our generative vision engine trained on architectural elegance.</p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-[#383B26] text-[#DADFDB] px-8 py-4 text-sm font-medium hover:bg-[#2C2E1E] transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#383B26]/10 uppercase tracking-widest">
                Start Staging
                <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<button className="px-8 py-4 text-sm font-medium text-[#654C37] border border-[#EBE5DA] hover:bg-[#F2F0E9] hover:border-[#8F907E] transition-all flex items-center justify-center gap-3 uppercase tracking-widest bg-white/50">
<iconify-icon icon="lucide:play-circle" width="16"></iconify-icon>
                View Gallery
              </button>
</div>
<div className="mt-12 flex items-center gap-8 text-stone-500 text-xs font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#8F907E]" icon="lucide:check"></iconify-icon>
            Photorealistic Textures
          </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#8F907E]" icon="lucide:check"></iconify-icon>
            Physically Based Lighting
          </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#8F907E]" icon="lucide:check"></iconify-icon>
            4K Export
          </div>
</div>
</div>

<div className="relative animate-on-scroll w-full mt-12 lg:mt-0">

<div className="relative p-2 bg-white shadow-2xl shadow-[#383B26]/5 border border-[#EBE5DA]">
<div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full group overflow-hidden">

<img alt="Staged" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/512104dc-396b-46a8-9736-1d19239a7002_1600w.webp"/>

<div className="absolute inset-0 w-1/2 overflow-hidden border-r border-white/70 bg-stone-900/10 transition-all duration-500 ease-out group-hover:w-[15%]">
<img alt="Empty" className="filter brightness-[0.8] sepia-[0.2] w-[200%] h-full max-w-none object-cover absolute top-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b1bbe5c6-7c15-46ed-b472-9fd636769ca5_320w.png"/>
<div className="absolute bottom-6 left-6 bg-[#383B26]/90 backdrop-blur-md px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#DADFDB] border border-[#DADFDB]/20">
                Raw Space
              </div>
</div>

<div className="flex flex-col gap-4 bg-[#FDFCFB]/95 w-48 border-[#EBE5DA] border p-5 absolute right-6 bottom-6 shadow-lg backdrop-blur">
<div className="flex justify-between items-center text-[10px] text-stone-400 uppercase tracking-wider">
<span>Style</span>
<span className="text-[#383B26] font-semibold">Japandi</span>
</div>
<div className="flex gap-2">

<button className="h-8 flex-1 bg-[#383B26] text-[#FDFCFB] border border-[#383B26] shadow-sm rounded-sm flex items-center justify-center text-[9px] font-medium transition-all">
        Japandi
      </button>

<button className="h-8 flex-1 bg-[#F2F0E9] text-[#383B26] border border-[#EBE5DA] hover:border-[#8F907E] hover:bg-white shadow-sm rounded-sm flex items-center justify-center text-[9px] font-medium transition-all">
        Modern
      </button>

<button className="h-8 flex-1 bg-[#F2F0E9] text-[#383B26] border border-[#EBE5DA] hover:border-[#8F907E] hover:bg-white shadow-sm rounded-sm flex items-center justify-center text-[9px] font-medium transition-all">
        Nordic
      </button>
</div>
<button className="w-full bg-[#DADFDB] hover:bg-[#EBE5DA] text-[#383B26] text-[10px] font-semibold py-2 uppercase tracking-widest transition-colors rounded-sm">
      Regenerate
    </button>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 border-y border-[#EBE5DA] bg-[#F2F0E9]">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

<div className="lg:col-span-6 animate-on-scroll">
<div className="flex items-center gap-3 mb-6">
<span className="w-8 h-[1px] bg-[#8F907E]"></span>
<span className="text-xs font-semibold uppercase tracking-widest text-[#8F907E]">
                Design Intelligence
              </span>
</div>
<h2 className="md:text-7xl leading-[0.95] serif text-5xl font-normal text-[#2C2825] tracking-tight">Powered by semantics, <br/> <span className="italic text-[#8F907E]">perfected by light.</span></h2>
<p className="leading-relaxed text-xl font-light text-stone-600 max-w-xl mt-8">Our model understands not just spatial geometry, but the subtle interplay of material, texture, and natural light that makes a house a home.</p>
<div className="mt-10 flex gap-12 border-t border-[#DADFDB] pt-8">
<div>
<div className="text-3xl font-medium text-[#383B26] serif">
                  1.2s
                </div>
<div className="text-[10px] text-stone-500 uppercase tracking-widest mt-1">
                  Generation Time
                </div>
</div>
<div className="">
<div className="text-3xl font-medium text-[#383B26] serif">
                  200+
                </div>
<div className="text-[10px] text-stone-500 uppercase tracking-widest mt-1">
                  Design Styles
                </div>
</div>
</div>
</div>

<div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
<div className="group">
<div className="w-10 h-10 rounded-full bg-[#DADFDB] flex items-center justify-center text-[#383B26] mb-6">
<iconify-icon icon="lucide:scan-line" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3 text-[#2C2825] serif">
                Spatial Awareness
              </h3>
<p className="text-sm text-stone-500 leading-relaxed">
                Automatically identifies architectural boundaries to place
                furniture with accurate scale and perspective.
              </p>
</div>
<div className="group">
<div className="w-10 h-10 rounded-full bg-[#EBE5DA] flex items-center justify-center text-[#654C37] mb-6">
<iconify-icon icon="lucide:sun" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3 text-[#2C2825] serif">
                Organic Lighting
              </h3>
<p className="text-sm text-stone-500 leading-relaxed">
                Analyses window placement to simulate natural daylight, creating
                soft shadows and warm highlights.
              </p>
</div>
<div className="group">
<div className="w-10 h-10 rounded-full bg-[#8F907E]/20 flex items-center justify-center text-[#8F907E] mb-6">
<iconify-icon icon="lucide:palette" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3 text-[#2C2825] serif">
                Material Physics
              </h3>
<p className="text-sm text-stone-500 leading-relaxed">
                Distinguishes between velvet, linen, oak, and marble to render
                textures you can almost feel.
              </p>
</div>
<div className="group">
<div className="w-10 h-10 rounded-full bg-[#383B26]/10 flex items-center justify-center text-[#383B26] mb-6">
<iconify-icon icon="lucide:eraser" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3 text-[#2C2825] serif">
                Smart Declutter
              </h3>
<p className="text-sm text-stone-500 leading-relaxed">
                Digitally removes personal items and clutter while preserving
                the original flooring and fixtures.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-[#FDFCFB]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#EBE5DA] blur-[100px] rounded-full -z-10 opacity-60"></div>
<div className="max-w-screen-2xl mx-auto px-6 text-center">
<span className="text-xs text-[#8F907E] font-bold uppercase tracking-widest mb-4 block animate-on-scroll">
          Seamless Integration
        </span>
<h2 className="text-5xl md:text-7xl font-normal text-[#2C2825] tracking-tight mb-24 text-center serif">
          Designed for flow.
        </h2>
<div className="relative max-w-5xl mx-auto animate-on-scroll">

<div className="rounded-sm border border-[#EBE5DA] bg-[#FDFCFB] shadow-2xl shadow-[#383B26]/5">

<div className="h-10 border-b border-[#EBE5DA] flex items-center px-4 gap-2 bg-[#F9F8F6]">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-[#DADFDB]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#EBE5DA]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#EBE5DA]"></div>
</div>
<div className="mx-auto text-[10px] text-stone-400 font-mono tracking-wide">
                studio.propvision.ai
              </div>
</div>

<div className="flex h-[550px]">

<div className="w-64 border-r border-[#EBE5DA] p-5 flex flex-col gap-1 hidden md:flex bg-[#FDFCFB]">
<div className="py-2.5 px-3 text-xs font-semibold text-[#DADFDB] bg-[#383B26] rounded-sm mb-6 flex items-center justify-center gap-2 shadow-md hover:bg-[#2C2E1E] transition cursor-pointer">
<iconify-icon icon="lucide:plus" width="14"></iconify-icon>
                  New Project
                </div>
<div className="space-y-4">
<div className="">
<div className="text-[9px] text-stone-400 uppercase font-bold tracking-widest mb-3 px-2">
                      Recent
                    </div>
<div className="px-2 py-2 text-xs text-[#383B26] bg-[#F2F0E9] rounded-sm font-medium flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-[#8F907E] rounded-full"></span>
                      Nordic Loft
                    </div>
<div className="px-2 py-2 text-xs text-stone-500 hover:bg-[#F9F8F6] rounded-sm cursor-pointer transition">
                      Sunset Villa
                    </div>
<div className="px-2 py-2 text-xs text-stone-500 hover:bg-[#F9F8F6] rounded-sm cursor-pointer transition">
                      Modern Ranch
                    </div>
</div>
<div className="">
<div className="text-[9px] text-stone-400 uppercase font-semibold tracking-widest mb-3 px-2">
      Design Styles
    </div>
<div className="flex gap-2 text-xs text-[#383B26] bg-[#F2F0E9] rounded-sm px-2 py-1.5 items-center font-medium mb-1 cursor-pointer transition-colors">
<iconify-icon className="text-[#8F907E]" icon="lucide:sprout" width="12"></iconify-icon>
      Japandi
    </div>
<div className="px-2 py-1.5 text-xs text-stone-500 flex items-center gap-2 hover:bg-[#F9F8F6] rounded-sm cursor-pointer transition-colors mb-1">
<iconify-icon className="text-stone-400" icon="lucide:layout-grid" width="12"></iconify-icon>
      Minimalist
    </div>
<div className="px-2 py-1.5 text-xs text-stone-500 flex items-center gap-2 hover:bg-[#F9F8F6] rounded-sm cursor-pointer transition-colors">
<iconify-icon className="text-stone-400" icon="lucide:factory" width="12"></iconify-icon>
      Industrial
    </div>
</div>
</div>
</div>

<div className="flex-1 bg-[#F2F0E9] p-8 flex items-center justify-center relative">

<div className="relative p-3 bg-white shadow-lg rotate-1 border border-[#EBE5DA]">
<img alt="Dashboard" className="max-h-[400px] object-cover grayscale-[0.1]" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-6 right-6 bg-white/95 backdrop-blur border border-[#DADFDB] text-[#383B26] text-[10px] px-4 py-2 flex items-center gap-2 shadow-sm font-medium tracking-wide uppercase">
<iconify-icon className="animate-spin text-[#8F907E]" icon="lucide:loader-2"></iconify-icon>
                  Rendering
                </div>
</div>

<div className="w-72 border-l border-[#EBE5DA] p-6 hidden lg:block text-left bg-[#FDFCFB]">
<div className="mb-8">
<label className="text-[9px] text-stone-400 uppercase tracking-widest block mb-3 font-bold">
                    Room Type
                  </label>
<div className="w-full py-2 bg-[#F9F8F6] border border-[#EBE5DA] rounded-sm px-3 flex items-center justify-between text-xs text-[#383B26]">
                    Living Room
                    <iconify-icon className="text-stone-400" icon="lucide:chevron-down"></iconify-icon>
</div>
</div>
<div className="mb-8">
<label className="text-[9px] text-stone-400 uppercase tracking-widest block mb-3 font-bold">
                    Aesthetic
                  </label>
<div className="grid grid-cols-2 gap-3">
<div className="h-20 border border-[#8F907E] bg-[#F2F0E9] rounded-sm flex flex-col items-center justify-center gap-2 cursor-pointer">
<div className="w-6 h-6 rounded-full bg-[#DADFDB] border border-[#8F907E]"></div>
<span className="text-[10px] text-[#383B26] font-medium uppercase tracking-wider">
                        Mist
                      </span>
</div>
<div className="h-20 border border-[#EBE5DA] bg-white rounded-sm flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-[#DADFDB]">
<div className="w-6 h-6 rounded-full bg-[#654C37]"></div>
<span className="text-[10px] text-stone-400 font-medium uppercase tracking-wider">
                        Earth
                      </span>
</div>
</div>
</div>
<div>
<label className="text-[9px] text-stone-400 uppercase tracking-widest block mb-3 font-bold">
                    Natural Light
                  </label>
<div className="w-full bg-[#EBE5DA] h-1 rounded-full overflow-hidden">
<div className="w-3/4 bg-[#8F907E] h-full"></div>
</div>
<div className="flex justify-between mt-2 text-[9px] text-stone-400">
<span>Soft</span>
<span>Intense</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FDFCFB] border-t border-[#EBE5DA]">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="flex justify-between items-end mb-16 animate-on-scroll">
<h2 className="text-4xl md:text-6xl font-normal text-[#2C2825] tracking-tight serif">
            Trusted Voices.
          </h2>
<div className="flex gap-2">
<button className="w-12 h-12 border border-[#EBE5DA] bg-[#FDFCFB] rounded-full flex items-center justify-center text-stone-400 hover:text-[#383B26] hover:border-[#8F907E] transition duration-300" id="prev-voice">
<iconify-icon className="" icon="lucide:arrow-left" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 border border-[#EBE5DA] bg-[#FDFCFB] rounded-full flex items-center justify-center text-stone-400 hover:text-[#383B26] hover:border-[#8F907E] transition duration-300" id="next-voice">
<iconify-icon className="" icon="lucide:arrow-right" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="relative w-full overflow-hidden">
<div className="slider-track flex w-full" id="testimonial-track" style={{transform: 'translateX(0%)'}}>

<div className="testimonial-slide min-w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center" style={{opacity: '1'}}>
<div className="p-0 border-0 h-full flex flex-col justify-center">
<iconify-icon className="text-[#8F907E] mb-8 opacity-50" icon="lucide:quote" width="32"></iconify-icon>
<p className="md:text-4xl leading-[1.2] serif text-3xl font-light italic text-[#383B26] tracking-tight mb-10">"The object removal tool is magic. We took photos of a messy estate sale and had clean, modern visuals for the listing in
                minutes."</p>
<div className="flex items-center gap-4 border-t border-[#EBE5DA] pt-8 w-max">
<div className="text-sm font-bold text-[#2C2825] uppercase tracking-widest">
                    Elena Rostova
                  </div>
<span className="text-[#DADFDB]">•</span>
<div className="text-xs text-stone-500 font-serif italic">
                    Senior Designer, Sotheby's
                  </div>
</div>
</div>

<div className="hidden md:block h-[400px] bg-[#F2F0E9] rounded-sm p-4">
<img alt="Interior" className="w-full h-full object-cover grayscale-[0.2]" src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="testimonial-slide min-w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center" style={{opacity: '0.4'}}>
<div className="p-0 border-0 h-full flex flex-col justify-center">
<iconify-icon className="text-[#8F907E] mb-8 opacity-50" icon="lucide:quote" width="32"></iconify-icon>
<p className="text-3xl md:text-4xl text-[#383B26] leading-[1.2] font-light mb-10 tracking-tight serif italic">
                  "We needed to remove clutter from a heritage property.
                  PropVision kept the original pine floors perfectly intact
                  while modernizing the furniture."
                </p>
<div className="flex items-center gap-4 border-t border-[#EBE5DA] pt-8 w-max">
<div className="text-sm font-bold text-[#2C2825] uppercase tracking-widest">
                    Marcus Chen
                  </div>
<span className="text-[#DADFDB]">•</span>
<div className="text-xs text-stone-500 font-serif italic">
                    Founder, ArchDaily
                  </div>
</div>
</div>
<div className="hidden md:block h-[400px] bg-[#F2F0E9] rounded-sm p-4">
<img alt="Interior" className="w-full h-full object-cover grayscale-[0.2]" src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F9F8F6]">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 animate-on-scroll">
<div className="">
<div className="flex items-center gap-2 mb-3">
<span className="w-1.5 h-1.5 bg-[#8F907E] rounded-full"></span>
<span className="text-xs font-bold text-[#8F907E] uppercase tracking-widest">
                Capabilities
              </span>
</div>
<h2 className="text-4xl md:text-6xl font-normal text-[#2C2825] tracking-tight serif">
              Adaptive Scenarios.
            </h2>
</div>
<div className="relative flex items-center bg-[#F2F0E9] rounded-sm p-1 border border-[#EBE5DA]" id="use-case-toggles">
<div className="absolute left-1 top-1 bg-white rounded-sm shadow-sm transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]" id="toggle-bg" style={{width: '96px', height: '31px', left: '4px', top: '4px'}}></div>
<button className="relative z-10 px-5 py-2 text-[10px] uppercase font-bold tracking-widest text-[#383B26] bg-transparent transition-colors duration-300 focus:outline-none">
              Interior
            </button>
<button className="relative z-10 px-5 py-2 text-[10px] uppercase font-bold tracking-widest text-stone-400 bg-transparent hover:text-[#383B26] transition-colors duration-300 focus:outline-none">
              Exterior
            </button>
<button className="relative z-10 px-5 py-2 text-[10px] uppercase font-bold tracking-widest text-stone-400 bg-transparent hover:text-[#383B26] transition-colors duration-300 focus:outline-none">
              Commercial
            </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">

<div className="group cursor-pointer animate-on-scroll">
<div className="relative bg-[#DADFDB] aspect-[4/3] mb-5 overflow-hidden group-hover:shadow-xl transition-all duration-500">
<img alt="Room" className="w-full h-full object-cover transition duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#383B26]/20 group-hover:bg-transparent transition duration-500"></div>
<div className="absolute top-4 right-4">
<div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-[#383B26] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</div>
</div>
<div className="absolute bottom-4 left-4">
<span className="text-[9px] font-bold text-[#DADFDB] bg-[#383B26] px-3 py-1.5 uppercase tracking-widest">
                  Virtual Furnishing
                </span>
</div>
</div>
<div className="">
<h3 className="text-lg font-medium text-[#2C2825] serif">
                Minimalist Staging
              </h3>
<p className="text-sm font-light text-stone-500 mt-2">Populate empty spaces with scale-accurate furniture.</p>
</div>
</div>

<div className="group cursor-pointer animate-on-scroll">
<div className="relative bg-[#654C37] aspect-[4/3] mb-5 overflow-hidden group-hover:shadow-xl transition-all duration-500">
<img alt="Kitchen" className="w-full h-full object-cover transition duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#654C37]/20 group-hover:bg-transparent transition duration-500"></div>
<div className="absolute bottom-4 left-4">
<span className="text-[9px] font-bold text-[#383B26] bg-[#DADFDB] px-3 py-1.5 uppercase tracking-widest">
                  Declutter
                </span>
</div>
</div>
<div className="">
<h3 className="text-lg font-medium text-[#2C2825] serif">
                Modernize Finishes
              </h3>
<p className="text-sm font-light text-stone-500 mt-2">Remove personal items and update cabinetry and fixtures to modern style.</p>
</div>
</div>

<div className="group cursor-pointer animate-on-scroll">
<div className="relative bg-[#8F907E] aspect-[4/3] mb-5 overflow-hidden group-hover:shadow-xl transition-all duration-500">
<img alt="Pool" className="w-full h-full object-cover transition duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2053&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#8F907E]/20 group-hover:bg-transparent transition duration-500"></div>
<div className="absolute bottom-4 left-4">
<span className="text-[9px] font-bold text-[#DADFDB] bg-[#8F907E] px-3 py-1.5 uppercase tracking-widest">
                  Atmosphere
                </span>
</div>
</div>
<div className="">
<h3 className="text-lg font-medium text-[#2C2825] serif">
                Golden Hour
              </h3>
<p className="text-sm text-stone-500 mt-2 font-light">
                Adjust lighting to simulate the warm glow of late afternoon sun.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FDFCFB] border-t border-[#EBE5DA]">
<div className="max-w-screen-2xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-20 text-center max-w-2xl mx-auto animate-on-scroll">
<h2 className="text-4xl md:text-5xl font-normal text-[#2C2825] tracking-tight mb-6 serif">
            Simple, natural pricing.
          </h2>
<p className="text-stone-500 font-light text-lg">
            Start for free, then scale with your agency.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="flex flex-col animate-on-scroll transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#383B26]/5 hover:border-[#8F907E]/50 cursor-pointer group bg-[#F9F8F6] border-[#EBE5DA] border rounded-sm pt-8 pr-8 pb-8 pl-8 relative">
<div className="mb-4">
<span className="text-xs font-semibold text-stone-400 uppercase tracking-widest group-hover:text-[#8F907E] transition-colors duration-300">
                Starter
              </span>
</div>
<div className="mb-6">
<span className="text-4xl font-medium text-[#383B26] tracking-tight serif">
                $0
              </span>
<span className="text-stone-400">/mo</span>
</div>
<p className="text-sm text-stone-500 border-[#EBE5DA] border-b mb-8 pb-8 transition-colors duration-300">Perfect for trying out the platform
    and small
    projects.</p>
<ul className="flex-col gap-4 flex-1 flex mb-8 gap-x-4 gap-y-4">
<li className="flex gap-3 text-sm text-stone-600 gap-x-3 gap-y-3 items-center">
<iconify-icon className="text-[#8F907E]" icon="lucide:check"></iconify-icon>
      5 renderings/mo
    </li>
<li className="flex items-center gap-3 text-sm text-stone-400">
<iconify-icon className="text-[#8F907E]" icon="lucide:check"></iconify-icon>
      Standard resolution
    </li>
<li className="flex items-center gap-3 text-sm text-stone-400">
<iconify-icon className="text-[#8F907E]" icon="lucide:check"></iconify-icon>
      Personal use license
    </li>
</ul>
<button className="w-full py-3 rounded-sm border border-[#EBE5DA] text-stone-500 text-xs font-bold uppercase tracking-widest group-hover:border-[#8F907E] group-hover:text-[#383B26] group-hover:bg-white transition-all duration-300 bg-[#F9F8F6]">
              Get Started
            </button>
</div>

<div className="p-8 rounded-sm border border-[#8F907E] bg-white flex flex-col relative animate-on-scroll shadow-2xl shadow-[#8F907E]/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-3xl hover:shadow-[#8F907E]/20 cursor-pointer group z-10 hover:scale-[1.01]">
<div className="absolute top-0 right-0 p-3">
<div className="px-3 py-1 bg-[#F2F0E9] text-[#383B26] text-[9px] font-bold uppercase tracking-widest border border-[#EBE5DA] group-hover:bg-[#8F907E] group-hover:text-white group-hover:border-[#8F907E] transition-all duration-300">
                Agency Choice
              </div>
</div>
<div className="mb-4">
<span className="text-xs font-semibold text-[#8F907E] uppercase tracking-widest">
                Pro
              </span>
</div>
<div className="mb-6">
<span className="text-4xl font-medium text-[#2C2825] tracking-tight serif">
                $49
              </span>
<span className="text-stone-400">/mo</span>
</div>
<p className="text-sm text-stone-500 border-[#F2F0E9] border-b mb-8 pb-8">For real estate agents and professional stagers.</p>
<ul className="flex-col gap-4 mb-8 flex-1 flex">
<li className="flex items-center gap-3 text-sm text-stone-600">
<iconify-icon className="text-[#383B26]" icon="lucide:check"></iconify-icon>
                50 renderings/mo
              </li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<iconify-icon className="text-[#383B26]" icon="lucide:check"></iconify-icon>
                4K Export
              </li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<iconify-icon className="text-[#383B26]" icon="lucide:check"></iconify-icon>
                Commercial license
              </li>
</ul>
<button className="w-full py-3 rounded-sm bg-[#383B26] text-[#DADFDB] text-xs font-bold uppercase tracking-widest hover:bg-[#2C2E1E] transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:scale-[1.02]">
              Start Free Trial
            </button>
</div>

<div className="p-8 rounded-sm border border-[#383B26] bg-[#2C2825] flex flex-col animate-on-scroll transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#383B26]/40 cursor-pointer group">
<div className="mb-4">
<span className="text-xs font-semibold text-[#DADFDB] uppercase tracking-widest group-hover:text-[#8F907E] transition-colors duration-300">
                Enterprise
              </span>
</div>
<div className="mb-6">
<span className="text-4xl font-medium text-[#DADFDB] tracking-tight serif">
                Custom
              </span>
</div>
<p className="text-sm text-[#8F907E] border-white/10 border-b mb-8 pb-8 group-hover:border-white/20 transition-colors duration-300">For brokerages and large volume needs.</p>
<ul className="flex-col gap-4 mb-8 flex-1 flex">
<li className="flex items-center gap-3 text-sm text-[#DADFDB]">
<iconify-icon className="text-[#8F907E]" icon="lucide:check"></iconify-icon>
                Unlimited renderings
              </li>
<li className="flex items-center gap-3 text-sm text-[#DADFDB]">
<iconify-icon className="text-[#8F907E]" icon="lucide:check"></iconify-icon>
                Custom Model Training
              </li>
<li className="flex items-center gap-3 text-sm text-[#DADFDB]">
<iconify-icon className="text-[#8F907E]" icon="lucide:check"></iconify-icon>
                SSO &amp; SLA
              </li>
</ul>
<button className="w-full py-3 rounded-sm border border-white/20 text-[#DADFDB] text-xs font-bold uppercase tracking-widest hover:bg-[#383B26] hover:border-[#8F907E] transition-all duration-300 group-hover:bg-[#383B26] group-hover:border-[#8F907E] group-hover:text-white">
              Contact Sales
            </button>
</div>
</div>
</div>
</section>

<section className="py-32 mx-6 mb-20 relative bg-[#8F907E] rounded-sm overflow-hidden">

<div className="absolute inset-0 bg-[#383B26] opacity-10 mix-blend-multiply"></div>
<div className="relative max-w-2xl mx-auto text-center py-12 px-6">
<h2 className="text-5xl md:text-7xl font-normal text-[#FDFCFB] tracking-tight mb-8 serif">
          Elevate your
          
          <span className="text-[#DADFDB] italic">visual strategy.</span>
</h2>
<p className="text-[#F2F0E9] mb-10 text-base font-light opacity-90">
          Join 10,000+ real estate professionals using PropVision to create
          emotionally resonant imagery.
        </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-[#FDFCFB] text-[#383B26] px-8 py-3.5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#F2F0E9] transition shadow-lg">
            Start Free Trial
          </button>
<button className="bg-transparent border border-[#FDFCFB] text-[#FDFCFB] px-8 py-3.5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#FDFCFB] hover:text-[#383B26] transition flex items-center justify-center gap-2">
            Contact Sales
          </button>
</div>
</div>
</section>

<footer className="bg-[#2C2825] text-[#DADFDB] pt-32 pb-12 border-t border-[#383B26]">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between mb-20">
<div className="max-w-md mb-12 md:mb-0">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-[#8F907E]" icon="lucide:armchair" width="20"></iconify-icon>
<span className="text-lg font-medium tracking-tight text-[#FDFCFB] serif">
                PropVision
              </span>
</div>
<h3 className="text-2xl font-light leading-snug text-[#8F907E] serif">
              The operating system for
              <br/>
<span className="text-[#FDFCFB]">interior excellence.</span>
</h3>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-[#8F907E] transition text-stone-400 hover:text-[#8F907E]" href="#">
<iconify-icon icon="lucide:twitter" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-[#8F907E] transition text-stone-400 hover:text-[#8F907E]" href="#">
<iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-[#8F907E] transition text-stone-400 hover:text-[#8F907E]" href="#">
<iconify-icon icon="lucide:linkedin" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-xs text-stone-400 mb-16 border-t border-white/5 pt-16 font-medium">
<div className="flex flex-col gap-4">
<span className="text-[#FDFCFB] mb-2 uppercase tracking-widest font-bold">
              Product
            </span>
<a className="hover:text-[#8F907E] transition" href="#">
              Virtual Staging
            </a>
<a className="hover:text-[#8F907E] transition" href="#">
              Style Transfer
            </a>
<a className="hover:text-[#8F907E] transition" href="#">Declutter AI</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-[#FDFCFB] mb-2 uppercase tracking-widest font-bold">
              Company
            </span>
<a className="hover:text-[#8F907E] transition" href="#">Philosophy</a>
<a className="hover:text-[#8F907E] transition" href="#">Journal</a>
<a className="hover:text-[#8F907E] transition" href="#">Careers</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-[#FDFCFB] mb-2 uppercase tracking-widest font-bold">
              Resources
            </span>
<a className="hover:text-[#8F907E] transition" href="#">Gallery</a>
<a className="hover:text-[#8F907E] transition" href="#">Support</a>
<a className="hover:text-[#8F907E] transition" href="#">API Docs</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-[#FDFCFB] mb-2 uppercase tracking-widest font-bold">
              Legal
            </span>
<a className="hover:text-[#8F907E] transition" href="#">Privacy</a>
<a className="hover:text-[#8F907E] transition" href="#">Terms</a>
</div>
</div>
<div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] text-stone-500 uppercase tracking-widest">
<div className="">© 2024 PropVision AI. San Francisco.</div>
<div className="flex items-center gap-2 mt-4 md:mt-0">
<span className="w-2 h-2 rounded-full bg-[#8F907E]"></span>
<span className="text-[#8F907E]">Systems Operational</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
