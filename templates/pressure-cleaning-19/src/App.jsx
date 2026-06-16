import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



document.addEventListener("DOMContentLoaded", () => {
// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("visible");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.05, rootMargin: "0px 0px -10% 0px" });
document.querySelectorAll(".fade-enter").forEach((el) => observer.observe(el));
// Mobile Menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
let isMenuOpen = false;
menuBtn.addEventListener('click', () => {
isMenuOpen = !isMenuOpen;
if (isMenuOpen) {
mobileMenu.classList.remove('closed');
mobileMenu.classList.add('open');
document.body.style.overflow = 'hidden';
} else {
mobileMenu.classList.remove('open');
mobileMenu.classList.add('closed');
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
track.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
}
nextBtn.addEventListener('click', () => {
currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
updateSlider();
});
prevBtn.addEventListener('click', () => {
currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
updateSlider();
});
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav bis_size='{"x":0,"y":4220,"w":1513,"h":65,"abs_x":0,"abs_y":4263}' className="fixed top-0 w-full z-50 glass-nav">
<div bis_size='{"x":0,"y":4220,"w":1513,"h":64,"abs_x":0,"abs_y":4263}' className="max-w-screen-2xl mx-auto px-6 h-16 flex items-center justify-between relative">

<div bis_size='{"x":24,"y":4236,"w":222,"h":32,"abs_x":24,"abs_y":4279}' className="flex items-center gap-2">
<div bis_size='{"x":24,"y":4236,"w":32,"h":32,"abs_x":24,"abs_y":4279}' className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon bis_size='{"x":31,"y":4243,"w":18,"h":18,"abs_x":31,"abs_y":4286}' icon="lucide:droplets" strokeWidth="2" width="18"></iconify-icon>
</div>
<span bis_size='{"x":64,"y":4242,"w":182,"h":20,"abs_x":64,"abs_y":4285}' className="text-sm font-semibold tracking-tight text-zinc-900">South Side <span bis_size='{"x":137,"y":4244,"w":109,"h":16,"abs_x":137,"abs_y":4287}' className="text-zinc-500 font-normal">Pressure Cleaning</span></span>
</div>

<div bis_size='{"x":606,"y":4242,"w":312,"h":19,"abs_x":606,"abs_y":4285}' className="hidden md:flex items-center gap-8 text-[13px] font-medium text-zinc-500">
<a bis_size='{"x":606,"y":4242,"w":49,"h":19,"abs_x":606,"abs_y":4285}' className="hover:text-zinc-900 transition-colors" href="#services">Services</a>
<a bis_size='{"x":688,"y":4242,"w":46,"h":19,"abs_x":688,"abs_y":4285}' className="hover:text-zinc-900 transition-colors" href="#process">Process</a>
<a bis_size='{"x":767,"y":4242,"w":74,"h":19,"abs_x":767,"abs_y":4285}' className="hover:text-zinc-900 transition-colors" href="#projects">Recent Work</a>
<a bis_size='{"x":874,"y":4242,"w":44,"h":19,"abs_x":874,"abs_y":4285}' className="hover:text-zinc-900 transition-colors" href="#contact">Contact</a>
</div>

<div bis_size='{"x":1279,"y":4234,"w":209,"h":35,"abs_x":1279,"abs_y":4277}' className="flex items-center gap-4">
<a bis_size='{"x":1279,"y":4242,"w":101,"h":19,"abs_x":1279,"abs_y":4285}' className="hidden md:flex items-center gap-2 text-[13px] font-medium text-zinc-600 hover:text-blue-600 transition-colors" href="tel:0483056729">
<iconify-icon bis_size='{"x":1279,"y":4245,"w":14,"h":14,"abs_x":1279,"abs_y":4288}' icon="lucide:phone" width="14"></iconify-icon>
                    0483 056 729
                </a>
<a bis_size='{"x":1397,"y":4234,"w":91,"h":35,"abs_x":1397,"abs_y":4277}' className="hidden md:block bg-zinc-900 text-white px-4 py-2 rounded-md text-[13px] font-medium hover:bg-zinc-800 transition shadow-sm" href="#contact">
                    Get Quote
                </a>
<button bis_size='{"x":0,"y":4220,"w":0,"h":0,"abs_x":0,"abs_y":4263}' className="md:hidden text-zinc-900 pt-1" id="menu-btn">
<iconify-icon bis_size='{"x":0,"y":4220,"w":0,"h":0,"abs_x":0,"abs_y":4263}' icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>

<div bis_size='{"x":0,"y":4220,"w":0,"h":0,"abs_x":0,"abs_y":4263}' className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 closed md:hidden h-screen" id="mobile-menu">
<div bis_size='{"x":0,"y":4220,"w":0,"h":0,"abs_x":0,"abs_y":4263}' className="flex flex-col gap-6 text-xl font-medium tracking-tight text-zinc-900">
<a bis_size='{"x":0,"y":4220,"w":0,"h":0,"abs_x":0,"abs_y":4263}' className="border-b border-zinc-100 pb-4 flex justify-between items-center" href="#services">
<span bis_size='{"x":0,"y":4220,"w":0,"h":0,"abs_x":0,"abs_y":4263}'>Services</span>
<iconify-icon bis_size='{"x":0,"y":4220,"w":0,"h":0,"abs_x":0,"abs_y":4263}' className="text-zinc-300" icon="lucide:chevron-right"></iconify-icon>
</a>
<a bis_size='{"x":0,"y":4220,"w":0,"h":0,"abs_x":0,"abs_y":4263}' className="border-b border-zinc-100 pb-4 flex justify-between items-center" href="#process">
<span bis_size='{"x":0,"y":4220,"w":0,"h":0,"abs_x":0,"abs_y":4263}'>Process</span>
<iconify-icon bis_size='{"x":0,"y":4220,"w":0,"h":0,"abs_x":0,"abs_y":4263}' className="text-zinc-300" icon="lucide:chevron-right"></iconify-icon>
</a>
<a bis_size='{"x":0,"y":4220,"w":0,"h":0,"abs_x":0,"abs_y":4263}' className="border-b border-zinc-100 pb-4 flex justify-between items-center" href="#projects">
<span bis_size='{"x":0,"y":4220,"w":0,"h":0,"abs_x":0,"abs_y":4263}'>Recent Work</span>
<iconify-icon bis_size='{"x":0,"y":4220,"w":0,"h":0,"abs_x":0,"abs_y":4263}' className="text-zinc-300" icon="lucide:chevron-right"></iconify-icon>
</a>
<a bis_size='{"x":0,"y":4220,"w":0,"h":0,"abs_x":0,"abs_y":4263}' className="border-b border-zinc-100 pb-4 flex justify-between items-center" href="#contact">
<span bis_size='{"x":0,"y":4220,"w":0,"h":0,"abs_x":0,"abs_y":4263}'>Contact</span>
<iconify-icon bis_size='{"x":0,"y":4220,"w":0,"h":0,"abs_x":0,"abs_y":4263}' className="text-zinc-300" icon="lucide:chevron-right"></iconify-icon>
</a>
</div>
<div bis_size='{"x":0,"y":4220,"w":0,"h":0,"abs_x":0,"abs_y":4263}' className="mt-auto mb-10">
<a bis_size='{"x":0,"y":4220,"w":0,"h":0,"abs_x":0,"abs_y":4263}' className="block w-full py-4 bg-zinc-900 text-white text-center rounded-lg font-medium text-sm mb-4" href="tel:0483056729">
                    Call 0483 056 729
                </a>
<p bis_size='{"x":0,"y":4220,"w":0,"h":0,"abs_x":0,"abs_y":4263}' className="text-center text-xs text-zinc-400">Serving Kwinana Town Centre &amp; Surrounds</p>
</div>
</div>
</nav>

<header bis_size='{"x":0,"y":0,"w":1513,"h":800,"abs_x":0,"abs_y":43}' className="relative w-full h-[800px] bg-zinc-100 overflow-hidden flex flex-col justify-center">

<div bis_size='{"x":0,"y":0,"w":1513,"h":800,"abs_x":0,"abs_y":43}' className="absolute inset-0 z-0">
<img alt="Clean Surface Texture" bis_size='{"x":0,"y":0,"w":1513,"h":800,"abs_x":0,"abs_y":43}' className="opacity-100 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/12131ff7-d316-452c-99fc-f693ab0d20fb_3840w.jpg"/>
<div bis_size='{"x":0,"y":0,"w":1513,"h":800,"abs_x":0,"abs_y":43}' className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div bis_size='{"x":0,"y":0,"w":1513,"h":800,"abs_x":0,"abs_y":43}' className="backdrop-blur-[1px] bg-white/20 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div bis_size='{"x":0,"y":153,"w":1513,"h":493,"abs_x":0,"abs_y":196}' className="z-10 w-full max-w-screen-2xl mr-auto ml-auto pt-10 pr-6 pl-6 relative">
<div bis_size='{"x":24,"y":193,"w":768,"h":453,"abs_x":24,"abs_y":236}' className="max-w-3xl">
<div bis_size='{"x":24,"y":193,"w":768,"h":22,"abs_x":24,"abs_y":236}' className="flex items-center gap-2 text-blue-600 mb-6 fade-enter visible">
<span bis_size='{"x":24,"y":193,"w":105,"h":22,"abs_x":24,"abs_y":236}' className="px-2 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-[11px] font-semibold uppercase tracking-wider">Servicing WA</span>
</div>
<h1 bis_size='{"x":24,"y":239,"w":768,"h":199,"abs_x":24,"abs_y":282}' className="text-5xl md:text-8xl font-semibold text-zinc-50 tracking-tight leading-[1.05] mb-8 fade-enter visible" style={{fontWeight: '550'}}>
                    Restore clarity <br bis_size='{"x":601,"y":232,"w":0,"h":110,"abs_x":601,"abs_y":275}'/>
<span bis_size='{"x":24,"y":319,"w":682,"h":128,"abs_x":24,"abs_y":362}' className="italic text-zinc-50/80 font-playfair">to your surfaces.</span>
</h1>
<p bis_size='{"x":24,"y":470,"w":512,"h":87,"abs_x":24,"abs_y":513}' className="text-lg text-zinc-300 max-w-lg font-normal leading-relaxed mb-10 fade-enter visible">
                    Professional high-pressure cleaning, sealing, and restoration services for residential and commercial properties in Kwinana Town Centre.
                </p>
<div bis_size='{"x":24,"y":598,"w":768,"h":48,"abs_x":24,"abs_y":641}' className="flex flex-col sm:flex-row gap-4 fade-enter visible">
<a bis_size='{"x":24,"y":598,"w":196,"h":48,"abs_x":24,"abs_y":641}' className="h-12 px-8 rounded-full bg-zinc-900 text-white flex items-center justify-center gap-2 text-sm font-medium hover:bg-zinc-800 transition" href="#contact">
                        Get a Free Quote
                        <iconify-icon bis_size='{"x":172,"y":614,"w":16,"h":16,"abs_x":172,"abs_y":657}' icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
<a bis_size='{"x":236,"y":598,"w":171,"h":48,"abs_x":236,"abs_y":641}' className="h-12 px-8 rounded-full border border-zinc-200 bg-white/50 backdrop-blur-sm text-zinc-900 flex items-center justify-center gap-2 text-sm font-medium hover:bg-white transition" href="#services">
                        Explore Services
                    </a>
</div>
</div>

<div bis_size='{"x":1197,"y":508,"w":267,"h":90,"abs_x":1197,"abs_y":551}' className="absolute bottom-12 right-6 md:right-12 fade-enter hidden lg:block visible">
<div bis_size='{"x":1197,"y":508,"w":267,"h":90,"abs_x":1197,"abs_y":551}' className="bg-white/80 backdrop-blur-md border border-zinc-200 p-5 rounded-xl shadow-2xl shadow-zinc-200/50 flex items-center gap-4 max-w-xs">
<div bis_size='{"x":1218,"y":529,"w":48,"h":48,"abs_x":1218,"abs_y":572}' className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 border border-blue-100">
<iconify-icon bis_size='{"x":1230,"y":541,"w":24,"h":24,"abs_x":1230,"abs_y":584}' icon="lucide:shield-check" width="24"></iconify-icon>
</div>
<div bis_size='{"x":1282,"y":534,"w":161,"h":38,"abs_x":1282,"abs_y":577}'>
<div bis_size='{"x":1282,"y":534,"w":161,"h":20,"abs_x":1282,"abs_y":577}' className="text-zinc-900 text-sm font-semibold">Satisfaction Guaranteed</div>
<div bis_size='{"x":1282,"y":556,"w":161,"h":16,"abs_x":1282,"abs_y":599}' className="text-zinc-500 text-xs mt-0.5">Premium sealants used</div>
</div>
</div>
</div>
</div>
</header>

<section bis_size='{"x":0,"y":800,"w":1513,"h":727,"abs_x":0,"abs_y":843}' className="py-24 bg-white border-b border-zinc-100">
<div bis_size='{"x":0,"y":896,"w":1513,"h":534,"abs_x":0,"abs_y":939}' className="max-w-screen-2xl mx-auto px-6">
<div bis_size='{"x":24,"y":896,"w":1465,"h":534,"abs_x":24,"abs_y":939}' className="grid grid-cols-1 lg:grid-cols-12 gap-16">

<div bis_size='{"x":24,"y":896,"w":827,"h":192,"abs_x":24,"abs_y":939}' className="lg:col-span-7 fade-enter">
<h2 bis_size='{"x":24,"y":896,"w":827,"h":192,"abs_x":24,"abs_y":939}' className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 leading-[1.15]">
                        We don't just clean; we preserve. Using industrial-grade equipment and <span bis_size='{"x":24,"y":940,"w":812,"h":103,"abs_x":24,"abs_y":983}' className="text-zinc-400">eco-safe compounds</span> to extend the lifespan of your property's exterior.
                    </h2>
</div>

<div bis_size='{"x":24,"y":1216,"w":1465,"h":214,"abs_x":24,"abs_y":1259}' className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 mt-16 pt-16 border-t border-zinc-100">
<div bis_size='{"x":24,"y":1281,"w":467,"h":149,"abs_x":24,"abs_y":1324}' className="group fade-enter">
<div bis_size='{"x":24,"y":1281,"w":40,"h":40,"abs_x":24,"abs_y":1324}' className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 text-zinc-900">
<iconify-icon bis_size='{"x":34,"y":1291,"w":20,"h":20,"abs_x":34,"abs_y":1334}' icon="lucide:layers" width="20"></iconify-icon>
</div>
<h3 bis_size='{"x":24,"y":1345,"w":467,"h":28,"abs_x":24,"abs_y":1388}' className="text-lg font-semibold text-zinc-900 mb-3 tracking-tight">Multi-Stage Treatment</h3>
<p bis_size='{"x":24,"y":1385,"w":467,"h":45,"abs_x":24,"abs_y":1428}' className="text-sm text-zinc-500 leading-relaxed">
                            From pre-treatment breakdown of grime to high-pressure rinsing and post-clean sealing, we follow a strict protocol.
                        </p>
</div>
<div bis_size='{"x":523,"y":1281,"w":467,"h":149,"abs_x":523,"abs_y":1324}' className="group fade-enter">
<div bis_size='{"x":523,"y":1281,"w":40,"h":40,"abs_x":523,"abs_y":1324}' className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 text-zinc-900">
<iconify-icon bis_size='{"x":533,"y":1291,"w":20,"h":20,"abs_x":533,"abs_y":1334}' className="" icon="lucide:droplets" width="20"></iconify-icon>
</div>
<h3 bis_size='{"x":523,"y":1345,"w":467,"h":28,"abs_x":523,"abs_y":1388}' className="text-lg font-semibold text-zinc-900 mb-3 tracking-tight">Re-sanding &amp; Sealing</h3>
<p bis_size='{"x":523,"y":1385,"w":467,"h":45,"abs_x":523,"abs_y":1428}' className="text-sm text-zinc-500 leading-relaxed">
                            We replace lost joint sand and apply premium sealers to lock in the clean look and prevent weed growth.
                        </p>
</div>
<div bis_size='{"x":1022,"y":1281,"w":467,"h":149,"abs_x":1022,"abs_y":1324}' className="group fade-enter">
<div bis_size='{"x":1022,"y":1281,"w":40,"h":40,"abs_x":1022,"abs_y":1324}' className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 text-zinc-900">
<iconify-icon bis_size='{"x":1032,"y":1291,"w":20,"h":20,"abs_x":1032,"abs_y":1334}' icon="lucide:home" width="20"></iconify-icon>
</div>
<h3 bis_size='{"x":1022,"y":1345,"w":467,"h":28,"abs_x":1022,"abs_y":1388}' className="text-lg font-semibold text-zinc-900 mb-3 tracking-tight">Full Exterior Care</h3>
<p bis_size='{"x":1022,"y":1385,"w":467,"h":45,"abs_x":1022,"abs_y":1428}' className="text-sm text-zinc-500 leading-relaxed">
                            Roofs, driveways, patios, and walls. A comprehensive all-round outdoor pressure clean for your home.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":1527,"w":1513,"h":852,"abs_x":0,"abs_y":1570}' className="py-24 bg-zinc-50/50" id="process">
<div bis_size='{"x":0,"y":1623,"w":1513,"h":660,"abs_x":0,"abs_y":1666}' className="max-w-screen-2xl mx-auto px-6">
<div bis_size='{"x":24,"y":1623,"w":1465,"h":112,"abs_x":24,"abs_y":1666}' className="flex flex-col md:flex-row justify-between items-end mb-12 fade-enter">
<div bis_size='{"x":24,"y":1623,"w":279,"h":112,"abs_x":24,"abs_y":1666}'>
<span bis_size='{"x":24,"y":1626,"w":155,"h":22,"abs_x":24,"abs_y":1669}' className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded-sm">Featured Service</span>
<h2 bis_size='{"x":24,"y":1663,"w":279,"h":72,"abs_x":24,"abs_y":1706}' className="text-3xl font-medium text-zinc-900 mt-4 tracking-tight">Concrete &amp; Pavement<br bis_size='{"x":303,"y":1664,"w":0,"h":34,"abs_x":303,"abs_y":1707}'/>Restoration</h2>
</div>
</div>
<div bis_size='{"x":24,"y":1783,"w":1465,"h":500,"abs_x":24,"abs_y":1826}' className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div bis_size='{"x":24,"y":1783,"w":720,"h":500,"abs_x":24,"abs_y":1826}' className="relative overflow-hidden rounded-xl fade-enter h-[500px] border border-zinc-200">
<img alt="Pavement Cleaning" bis_size='{"x":25,"y":1784,"w":718,"h":498,"abs_x":25,"abs_y":1827}' className="transition duration-700 hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b5453d1c-546d-414d-80cf-8b6669508956_1600w.jpg"/>
<div bis_size='{"x":25,"y":1784,"w":718,"h":498,"abs_x":25,"abs_y":1827}' className="bg-gradient-to-t from-black/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div bis_size='{"x":49,"y":2202,"w":219,"h":56,"abs_x":49,"abs_y":2245}' className="absolute bottom-6 left-6 text-white">
<div bis_size='{"x":49,"y":2202,"w":219,"h":16,"abs_x":49,"abs_y":2245}' className="text-xs font-mono text-white/80 mb-2 uppercase tracking-wider">Project: Kwinana Residential</div>
<div bis_size='{"x":49,"y":2226,"w":219,"h":32,"abs_x":49,"abs_y":2269}' className="text-2xl font-medium tracking-tight">Driveway Restoration</div>
</div>
</div>

<div bis_size='{"x":768,"y":1783,"w":720,"h":500,"abs_x":768,"abs_y":1826}' className="bg-white p-12 flex flex-col justify-center border border-zinc-200 rounded-xl fade-enter">
<div bis_size='{"x":817,"y":1853,"w":622,"h":32,"abs_x":817,"abs_y":1896}' className="flex items-center justify-between mb-8">
<iconify-icon bis_size='{"x":817,"y":1853,"w":32,"h":32,"abs_x":817,"abs_y":1896}' className="text-zinc-400" icon="lucide:brush" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 bis_size='{"x":817,"y":1917,"w":622,"h":28,"abs_x":817,"abs_y":1960}' className="text-xl font-semibold text-zinc-900 mb-4">Pavement Sealing &amp; Painting</h3>
<p bis_size='{"x":817,"y":1961,"w":622,"h":87,"abs_x":817,"abs_y":2004}' className="text-lg text-zinc-500 font-normal leading-relaxed mb-10">
                        Beyond cleaning, we specialize in concrete painting and sealing. This process protects the porous surface from oil stains, tyre marks, and weathering, keeping your driveway looking pristine for years.
                    </p>
<ul bis_size='{"x":817,"y":2089,"w":622,"h":84,"abs_x":817,"abs_y":2132}' className="space-y-3 mb-10">
<li bis_size='{"x":817,"y":2089,"w":622,"h":20,"abs_x":817,"abs_y":2132}' className="flex items-center gap-3 text-sm text-zinc-600">
<iconify-icon bis_size='{"x":817,"y":2091,"w":16,"h":16,"abs_x":817,"abs_y":2134}' className="text-blue-500" icon="lucide:check-circle" width="16"></iconify-icon>
                            High-durability concrete paint
                        </li>
<li bis_size='{"x":817,"y":2121,"w":622,"h":20,"abs_x":817,"abs_y":2164}' className="flex items-center gap-3 text-sm text-zinc-600">
<iconify-icon bis_size='{"x":817,"y":2123,"w":16,"h":16,"abs_x":817,"abs_y":2166}' className="text-blue-500" icon="lucide:check-circle" width="16"></iconify-icon>
                            Penetrating sealers
                        </li>
<li bis_size='{"x":817,"y":2153,"w":622,"h":20,"abs_x":817,"abs_y":2196}' className="flex items-center gap-3 text-sm text-zinc-600">
<iconify-icon bis_size='{"x":817,"y":2155,"w":16,"h":16,"abs_x":817,"abs_y":2198}' className="text-blue-500" icon="lucide:check-circle" width="16"></iconify-icon>
                            Anti-slip additives available
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":2379,"w":1513,"h":1266,"abs_x":0,"abs_y":2422}' className="py-24 bg-white" id="services">
<div bis_size='{"x":0,"y":2475,"w":1513,"h":1074,"abs_x":0,"abs_y":2518}' className="max-w-screen-2xl mx-auto px-6">
<div bis_size='{"x":420,"y":2475,"w":672,"h":68,"abs_x":420,"abs_y":2518}' className="text-center max-w-2xl mx-auto mb-20 fade-enter">
<span bis_size='{"x":420,"y":2475,"w":672,"h":16,"abs_x":420,"abs_y":2518}' className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3 block">Our Capabilities</span>
<h2 bis_size='{"x":420,"y":2503,"w":672,"h":40,"abs_x":420,"abs_y":2546}' className="text-4xl font-semibold text-zinc-900 tracking-tight">Complete Surface Solutions</h2>
</div>
<div bis_size='{"x":24,"y":2623,"w":1465,"h":926,"abs_x":24,"abs_y":2666}' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<div bis_size='{"x":24,"y":2623,"w":467,"h":439,"abs_x":24,"abs_y":2666}' className="group cursor-default fade-enter">
<div bis_size='{"x":24,"y":2623,"w":467,"h":350,"abs_x":24,"abs_y":2666}' className="bg-zinc-100 aspect-[4/3] rounded-xl mb-6 overflow-hidden relative">
<img bis_size='{"x":24,"y":2623,"w":467,"h":350,"abs_x":24,"abs_y":2666}' className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
</div>
<div bis_size='{"x":24,"y":2997,"w":467,"h":65,"abs_x":24,"abs_y":3040}' className="flex justify-between items-start border-t border-zinc-100 pt-4">
<div bis_size='{"x":24,"y":3014,"w":231,"h":48,"abs_x":24,"abs_y":3057}'>
<h3 bis_size='{"x":24,"y":3014,"w":231,"h":24,"abs_x":24,"abs_y":3057}' className="text-base font-semibold text-zinc-900">Pavement Re-sanding</h3>
<p bis_size='{"x":24,"y":3042,"w":231,"h":20,"abs_x":24,"abs_y":3085}' className="text-sm text-zinc-500 mt-1">Stabilize pavers &amp; prevent movement</p>
</div>
<iconify-icon bis_size='{"x":473,"y":3014,"w":18,"h":18,"abs_x":473,"abs_y":3057}' className="text-zinc-300" icon="lucide:arrow-up-right" width="18"></iconify-icon>
</div>
</div>

<div bis_size='{"x":523,"y":2623,"w":467,"h":439,"abs_x":523,"abs_y":2666}' className="group cursor-default fade-enter">
<div bis_size='{"x":523,"y":2623,"w":467,"h":350,"abs_x":523,"abs_y":2666}' className="bg-zinc-100 aspect-[4/3] rounded-xl mb-6 overflow-hidden relative">
<img bis_size='{"x":523,"y":2623,"w":467,"h":350,"abs_x":523,"abs_y":2666}' className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div bis_size='{"x":523,"y":2997,"w":467,"h":65,"abs_x":523,"abs_y":3040}' className="flex justify-between items-start border-t border-zinc-100 pt-4">
<div bis_size='{"x":523,"y":3014,"w":225,"h":48,"abs_x":523,"abs_y":3057}'>
<h3 bis_size='{"x":523,"y":3014,"w":225,"h":24,"abs_x":523,"abs_y":3057}' className="text-base font-semibold text-zinc-900">Pre-Treatment</h3>
<p bis_size='{"x":523,"y":3042,"w":225,"h":20,"abs_x":523,"abs_y":3085}' className="text-sm text-zinc-500 mt-1">Chemical breakdown of tough stains</p>
</div>
<iconify-icon bis_size='{"x":972,"y":3014,"w":18,"h":18,"abs_x":972,"abs_y":3057}' className="text-zinc-300" icon="lucide:arrow-up-right" width="18"></iconify-icon>
</div>
</div>

<div bis_size='{"x":1022,"y":2623,"w":467,"h":439,"abs_x":1022,"abs_y":2666}' className="group cursor-default fade-enter">
<div bis_size='{"x":1022,"y":2623,"w":467,"h":350,"abs_x":1022,"abs_y":2666}' className="bg-zinc-100 aspect-[4/3] rounded-xl mb-6 overflow-hidden relative">
<img bis_size='{"x":1022,"y":2623,"w":467,"h":350,"abs_x":1022,"abs_y":2666}' className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div bis_size='{"x":1022,"y":2997,"w":467,"h":65,"abs_x":1022,"abs_y":3040}' className="flex justify-between items-start border-t border-zinc-100 pt-4">
<div bis_size='{"x":1022,"y":3014,"w":197,"h":48,"abs_x":1022,"abs_y":3057}'>
<h3 bis_size='{"x":1022,"y":3014,"w":197,"h":24,"abs_x":1022,"abs_y":3057}' className="text-base font-semibold text-zinc-900">Roof Cleaning</h3>
<p bis_size='{"x":1022,"y":3042,"w":197,"h":20,"abs_x":1022,"abs_y":3085}' className="text-sm text-zinc-500 mt-1">Remove lichen and moss safely</p>
</div>
<iconify-icon bis_size='{"x":1471,"y":3014,"w":18,"h":18,"abs_x":1471,"abs_y":3057}' className="text-zinc-300" icon="lucide:arrow-up-right" width="18"></iconify-icon>
</div>
</div>

<div bis_size='{"x":24,"y":3110,"w":467,"h":439,"abs_x":24,"abs_y":3153}' className="group cursor-default fade-enter">
<div bis_size='{"x":24,"y":3110,"w":467,"h":350,"abs_x":24,"abs_y":3153}' className="bg-zinc-100 aspect-[4/3] rounded-xl mb-6 overflow-hidden relative">
<img bis_size='{"x":24,"y":3110,"w":467,"h":350,"abs_x":24,"abs_y":3153}' className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&amp;w=2873&amp;auto=format&amp;fit=crop"/>
</div>
<div bis_size='{"x":24,"y":3485,"w":467,"h":65,"abs_x":24,"abs_y":3528}' className="flex justify-between items-start border-t border-zinc-100 pt-4">
<div bis_size='{"x":24,"y":3502,"w":203,"h":48,"abs_x":24,"abs_y":3545}'>
<h3 bis_size='{"x":24,"y":3502,"w":203,"h":24,"abs_x":24,"abs_y":3545}' className="text-base font-semibold text-zinc-900">Concrete Painting</h3>
<p bis_size='{"x":24,"y":3530,"w":203,"h":20,"abs_x":24,"abs_y":3573}' className="text-sm text-zinc-500 mt-1">Color restoration for old concrete</p>
</div>
<iconify-icon bis_size='{"x":473,"y":3502,"w":18,"h":18,"abs_x":473,"abs_y":3545}' className="text-zinc-300" icon="lucide:arrow-up-right" width="18"></iconify-icon>
</div>
</div>

<div bis_size='{"x":523,"y":3110,"w":467,"h":439,"abs_x":523,"abs_y":3153}' className="group cursor-default fade-enter">
<div bis_size='{"x":523,"y":3110,"w":467,"h":350,"abs_x":523,"abs_y":3153}' className="bg-zinc-100 aspect-[4/3] rounded-xl mb-6 overflow-hidden relative">
<img bis_size='{"x":523,"y":3110,"w":467,"h":350,"abs_x":523,"abs_y":3153}' className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div bis_size='{"x":523,"y":3485,"w":467,"h":65,"abs_x":523,"abs_y":3528}' className="flex justify-between items-start border-t border-zinc-100 pt-4">
<div bis_size='{"x":523,"y":3502,"w":197,"h":48,"abs_x":523,"abs_y":3545}'>
<h3 bis_size='{"x":523,"y":3502,"w":197,"h":24,"abs_x":523,"abs_y":3545}' className="text-base font-semibold text-zinc-900">Sealing Services</h3>
<p bis_size='{"x":523,"y":3530,"w":197,"h":20,"abs_x":523,"abs_y":3573}' className="text-sm text-zinc-500 mt-1">Protective coatings for longevity</p>
</div>
<iconify-icon bis_size='{"x":972,"y":3502,"w":18,"h":18,"abs_x":972,"abs_y":3545}' className="text-zinc-300" icon="lucide:arrow-up-right" width="18"></iconify-icon>
</div>
</div>

<div bis_size='{"x":1022,"y":3110,"w":467,"h":439,"abs_x":1022,"abs_y":3153}' className="group cursor-default fade-enter">
<div bis_size='{"x":1022,"y":3110,"w":467,"h":350,"abs_x":1022,"abs_y":3153}' className="bg-zinc-100 aspect-[4/3] rounded-xl mb-6 overflow-hidden relative">
<img bis_size='{"x":1022,"y":3110,"w":467,"h":350,"abs_x":1022,"abs_y":3153}' className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div bis_size='{"x":1022,"y":3485,"w":467,"h":65,"abs_x":1022,"abs_y":3528}' className="flex justify-between items-start border-t border-zinc-100 pt-4">
<div bis_size='{"x":1022,"y":3502,"w":168,"h":48,"abs_x":1022,"abs_y":3545}'>
<h3 bis_size='{"x":1022,"y":3502,"w":168,"h":24,"abs_x":1022,"abs_y":3545}' className="text-base font-semibold text-zinc-900">House Wash</h3>
<p bis_size='{"x":1022,"y":3530,"w":168,"h":20,"abs_x":1022,"abs_y":3573}' className="text-sm text-zinc-500 mt-1">Full exterior pressure clean</p>
</div>
<iconify-icon bis_size='{"x":1471,"y":3502,"w":18,"h":18,"abs_x":1471,"abs_y":3545}' className="text-zinc-300" icon="lucide:arrow-up-right" width="18"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":3646,"w":1513,"h":550,"abs_x":0,"abs_y":3689}' className="py-24 bg-zinc-50 border-y border-zinc-200 overflow-hidden">
<div bis_size='{"x":0,"y":3743,"w":1513,"h":356,"abs_x":0,"abs_y":3786}' className="max-w-screen-2xl mx-auto px-6">
<div bis_size='{"x":24,"y":3743,"w":1465,"h":40,"abs_x":24,"abs_y":3786}' className="flex justify-between items-center mb-12 fade-enter">
<h2 bis_size='{"x":24,"y":3745,"w":247,"h":36,"abs_x":24,"abs_y":3788}' className="text-3xl font-semibold text-zinc-900 tracking-tight">Client Satisfaction</h2>
<div bis_size='{"x":1401,"y":3743,"w":88,"h":40,"abs_x":1401,"abs_y":3786}' className="flex gap-2">
<button bis_size='{"x":1401,"y":3743,"w":40,"h":40,"abs_x":1401,"abs_y":3786}' className="w-10 h-10 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-600 hover:border-zinc-400 transition" id="prev-voice">
<iconify-icon bis_size='{"x":1412,"y":3754,"w":18,"h":18,"abs_x":1412,"abs_y":3797}' icon="lucide:arrow-left" width="18"></iconify-icon>
</button>
<button bis_size='{"x":1449,"y":3743,"w":40,"h":40,"abs_x":1449,"abs_y":3786}' className="w-10 h-10 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-600 hover:border-zinc-400 transition" id="next-voice">
<iconify-icon bis_size='{"x":1460,"y":3754,"w":18,"h":18,"abs_x":1460,"abs_y":3797}' icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
</div>
</div>
<div bis_size='{"x":24,"y":3831,"w":1465,"h":268,"abs_x":24,"abs_y":3874}' className="relative w-full overflow-hidden">
<div bis_size='{"x":24,"y":3831,"w":1465,"h":268,"abs_x":24,"abs_y":3874}' className="flex w-full" id="testimonial-track">

<div bis_size='{"x":24,"y":3831,"w":488,"h":268,"abs_x":24,"abs_y":3874}' className="testimonial-slide min-w-full md:min-w-[50%] lg:min-w-[33.33%] p-4">
<div bis_size='{"x":40,"y":3847,"w":456,"h":236,"abs_x":40,"abs_y":3890}' className="bg-white p-8 rounded-xl border border-zinc-200 h-full">
<div bis_size='{"x":73,"y":3880,"w":390,"h":16,"abs_x":73,"abs_y":3923}' className="flex gap-1 text-blue-500 mb-4">
<iconify-icon bis_size='{"x":73,"y":3880,"w":16,"h":16,"abs_x":73,"abs_y":3923}' fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon bis_size='{"x":93,"y":3880,"w":16,"h":16,"abs_x":93,"abs_y":3923}' fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon bis_size='{"x":113,"y":3880,"w":16,"h":16,"abs_x":113,"abs_y":3923}' fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon bis_size='{"x":133,"y":3880,"w":16,"h":16,"abs_x":133,"abs_y":3923}' fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon bis_size='{"x":153,"y":3880,"w":16,"h":16,"abs_x":153,"abs_y":3923}' fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p bis_size='{"x":73,"y":3912,"w":390,"h":78,"abs_x":73,"abs_y":3955}' className="text-zinc-700 leading-relaxed mb-6">
                                "The difference in our driveway is night and day. The re-sanding made it look brand new again. Highly professional service."
                            </p>
<div bis_size='{"x":73,"y":4014,"w":390,"h":36,"abs_x":73,"abs_y":4057}' className="flex items-center gap-3 mt-auto">
<div bis_size='{"x":73,"y":4016,"w":32,"h":32,"abs_x":73,"abs_y":4059}' className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-bold text-zinc-500">SK</div>
<div bis_size='{"x":117,"y":4014,"w":96,"h":36,"abs_x":117,"abs_y":4057}'>
<div bis_size='{"x":117,"y":4014,"w":96,"h":20,"abs_x":117,"abs_y":4057}' className="text-sm font-semibold text-zinc-900">Sarah K.</div>
<div bis_size='{"x":117,"y":4034,"w":96,"h":16,"abs_x":117,"abs_y":4077}' className="text-xs text-zinc-500">Kwinana Resident</div>
</div>
</div>
</div>
</div>

<div bis_size='{"x":512,"y":3831,"w":488,"h":268,"abs_x":512,"abs_y":3874}' className="testimonial-slide min-w-full md:min-w-[50%] lg:min-w-[33.33%] p-4">
<div bis_size='{"x":528,"y":3847,"w":456,"h":236,"abs_x":528,"abs_y":3890}' className="bg-white p-8 rounded-xl border border-zinc-200 h-full">
<div bis_size='{"x":561,"y":3880,"w":390,"h":16,"abs_x":561,"abs_y":3923}' className="flex gap-1 text-blue-500 mb-4">
<iconify-icon bis_size='{"x":561,"y":3880,"w":16,"h":16,"abs_x":561,"abs_y":3923}' fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon bis_size='{"x":581,"y":3880,"w":16,"h":16,"abs_x":581,"abs_y":3923}' fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon bis_size='{"x":601,"y":3880,"w":16,"h":16,"abs_x":601,"abs_y":3923}' fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon bis_size='{"x":621,"y":3880,"w":16,"h":16,"abs_x":621,"abs_y":3923}' fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon bis_size='{"x":641,"y":3880,"w":16,"h":16,"abs_x":641,"abs_y":3923}' fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p bis_size='{"x":561,"y":3912,"w":390,"h":52,"abs_x":561,"abs_y":3955}' className="text-zinc-700 leading-relaxed mb-6">
                                "Great attention to detail on the roof cleaning. No mess left behind, just a spotless home exterior."
                            </p>
<div bis_size='{"x":561,"y":3988,"w":390,"h":36,"abs_x":561,"abs_y":4031}' className="flex items-center gap-3 mt-auto">
<div bis_size='{"x":561,"y":3990,"w":32,"h":32,"abs_x":561,"abs_y":4033}' className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-bold text-zinc-500">MP</div>
<div bis_size='{"x":605,"y":3988,"w":119,"h":36,"abs_x":605,"abs_y":4031}'>
<div bis_size='{"x":605,"y":3988,"w":119,"h":20,"abs_x":605,"abs_y":4031}' className="text-sm font-semibold text-zinc-900">Michael P.</div>
<div bis_size='{"x":605,"y":4008,"w":119,"h":16,"abs_x":605,"abs_y":4051}' className="text-xs text-zinc-500">Local Business Owner</div>
</div>
</div>
</div>
</div>

<div bis_size='{"x":1000,"y":3831,"w":488,"h":268,"abs_x":1000,"abs_y":3874}' className="testimonial-slide min-w-full md:min-w-[50%] lg:min-w-[33.33%] p-4">
<div bis_size='{"x":1016,"y":3847,"w":456,"h":236,"abs_x":1016,"abs_y":3890}' className="bg-white p-8 rounded-xl border border-zinc-200 h-full">
<div bis_size='{"x":1049,"y":3880,"w":390,"h":16,"abs_x":1049,"abs_y":3923}' className="flex gap-1 text-blue-500 mb-4">
<iconify-icon bis_size='{"x":1049,"y":3880,"w":16,"h":16,"abs_x":1049,"abs_y":3923}' fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon bis_size='{"x":1069,"y":3880,"w":16,"h":16,"abs_x":1069,"abs_y":3923}' fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon bis_size='{"x":1089,"y":3880,"w":16,"h":16,"abs_x":1089,"abs_y":3923}' fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon bis_size='{"x":1109,"y":3880,"w":16,"h":16,"abs_x":1109,"abs_y":3923}' fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon bis_size='{"x":1129,"y":3880,"w":16,"h":16,"abs_x":1129,"abs_y":3923}' fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p bis_size='{"x":1049,"y":3912,"w":390,"h":78,"abs_x":1049,"abs_y":3955}' className="text-zinc-700 leading-relaxed mb-6">
                                "We had our concrete patio painted and sealed. It has transformed our backyard entertaining area completely."
                            </p>
<div bis_size='{"x":1049,"y":4014,"w":390,"h":36,"abs_x":1049,"abs_y":4057}' className="flex items-center gap-3 mt-auto">
<div bis_size='{"x":1049,"y":4016,"w":32,"h":32,"abs_x":1049,"abs_y":4059}' className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-bold text-zinc-500">DJ</div>
<div bis_size='{"x":1093,"y":4014,"w":53,"h":36,"abs_x":1093,"abs_y":4057}'>
<div bis_size='{"x":1093,"y":4014,"w":53,"h":20,"abs_x":1093,"abs_y":4057}' className="text-sm font-semibold text-zinc-900">David J.</div>
<div bis_size='{"x":1093,"y":4034,"w":53,"h":16,"abs_x":1093,"abs_y":4077}' className="text-xs text-zinc-500">Kwinana</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":4196,"w":1513,"h":596,"abs_x":0,"abs_y":4239}' className="py-12 md:py-24 px-6 fade-enter" id="contact">
<div bis_size='{"x":308,"y":4292,"w":896,"h":404,"abs_x":308,"abs_y":4335}' className="max-w-4xl mx-auto bg-zinc-900 rounded-2xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">

<div bis_size='{"x":308,"y":4292,"w":256,"h":256,"abs_x":308,"abs_y":4335}' className="absolute top-0 left-0 w-64 h-64 bg-blue-600 blur-[100px] opacity-20"></div>
<div bis_size='{"x":948,"y":4440,"w":256,"h":256,"abs_x":948,"abs_y":4483}' className="absolute bottom-0 right-0 w-64 h-64 bg-zinc-600 blur-[100px] opacity-20"></div>
<div bis_size='{"x":372,"y":4356,"w":768,"h":276,"abs_x":372,"abs_y":4399}' className="relative z-10">
<h2 bis_size='{"x":372,"y":4356,"w":768,"h":48,"abs_x":372,"abs_y":4399}' className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                    Ready to revitalize your space?
                </h2>
<p bis_size='{"x":500,"y":4428,"w":512,"h":56,"abs_x":500,"abs_y":4471}' className="text-zinc-400 mb-10 max-w-lg mx-auto text-lg">
                    Contact us today for a free assessment and quote for your home or business in Kwinana Town Centre.
                </p>
<div bis_size='{"x":372,"y":4524,"w":768,"h":56,"abs_x":372,"abs_y":4567}' className="flex flex-col sm:flex-row justify-center gap-4">
<a bis_size='{"x":644,"y":4524,"w":223,"h":56,"abs_x":644,"abs_y":4567}' className="flex items-center justify-center gap-3 bg-white text-zinc-900 px-8 py-4 rounded-full hover:bg-zinc-100 transition font-medium" href="tel:0483056729">
<iconify-icon bis_size='{"x":676,"y":4543,"w":18,"h":18,"abs_x":676,"abs_y":4586}' icon="lucide:phone" width="18"></iconify-icon>
                        Call 0483 056 729
                    </a>
</div>
<div bis_size='{"x":372,"y":4612,"w":768,"h":20,"abs_x":372,"abs_y":4655}' className="mt-8 text-sm text-zinc-500">
                    Locally owned and operated in WA.
                </div>
</div>
</div>
</section>

<footer bis_size='{"x":0,"y":4792,"w":1513,"h":406,"abs_x":0,"abs_y":4835}' className="bg-white border-t border-zinc-100 pt-20 pb-12">
<div bis_size='{"x":0,"y":4873,"w":1513,"h":277,"abs_x":0,"abs_y":4916}' className="max-w-screen-2xl mx-auto px-6">
<div bis_size='{"x":24,"y":4873,"w":1465,"h":164,"abs_x":24,"abs_y":4916}' className="flex flex-col md:flex-row justify-between mb-16 gap-10">
<div bis_size='{"x":24,"y":4873,"w":230,"h":164,"abs_x":24,"abs_y":4916}' className="max-w-xs">
<div bis_size='{"x":24,"y":4873,"w":230,"h":32,"abs_x":24,"abs_y":4916}' className="flex items-center gap-2 mb-6">
<div className="flex text-white bg-zinc-900 w-8 h-8 rounded-lg items-center justify-center overflow-hidden">
<img alt="South Side Pressure Cleaning Logo" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<span bis_size='{"x":64,"y":4879,"w":190,"h":20,"abs_x":64,"abs_y":4922}' className="text-sm font-semibold tracking-tight text-zinc-900">South Side Pressure Cleaning</span>
</div>
<div bis_size='{"x":24,"y":4929,"w":230,"h":48,"abs_x":24,"abs_y":4972}' className="text-sm text-zinc-500 space-y-2">
<p bis_size='{"x":24,"y":4929,"w":230,"h":20,"abs_x":24,"abs_y":4972}'>Kwinana Town Centre, WA</p>
<p bis_size='{"x":24,"y":4957,"w":230,"h":20,"abs_x":24,"abs_y":5000}'>Australia</p>
</div>
</div>
<div bis_size='{"x":1189,"y":4873,"w":299,"h":164,"abs_x":1189,"abs_y":4916}' className="flex gap-20">
<div bis_size='{"x":1189,"y":4873,"w":115,"h":164,"abs_x":1189,"abs_y":4916}' className="flex flex-col gap-4 text-sm">
<span bis_size='{"x":1189,"y":4873,"w":115,"h":20,"abs_x":1189,"abs_y":4916}' className="font-semibold text-zinc-900">Services</span>
<a bis_size='{"x":1189,"y":4909,"w":115,"h":20,"abs_x":1189,"abs_y":4952}' className="text-zinc-500 hover:text-zinc-900 transition" href="#">Pressure Cleaning</a>
<a bis_size='{"x":1189,"y":4945,"w":115,"h":20,"abs_x":1189,"abs_y":4988}' className="text-zinc-500 hover:text-zinc-900 transition" href="#">Sealing</a>
<a bis_size='{"x":1189,"y":4981,"w":115,"h":20,"abs_x":1189,"abs_y":5024}' className="text-zinc-500 hover:text-zinc-900 transition" href="#">Re-sanding</a>
<a bis_size='{"x":1189,"y":5017,"w":115,"h":20,"abs_x":1189,"abs_y":5060}' className="text-zinc-500 hover:text-zinc-900 transition" href="#">Roof Clean</a>
</div>
<div bis_size='{"x":1384,"y":4873,"w":104,"h":164,"abs_x":1384,"abs_y":4916}' className="flex flex-col gap-4 text-sm">
<span bis_size='{"x":1384,"y":4873,"w":104,"h":20,"abs_x":1384,"abs_y":4916}' className="font-semibold text-zinc-900">Contact</span>
<a bis_size='{"x":1384,"y":4909,"w":104,"h":20,"abs_x":1384,"abs_y":4952}' className="text-zinc-500 hover:text-zinc-900 transition" href="tel:0483056729">0483 056 729</a>
<span bis_size='{"x":1384,"y":4945,"w":104,"h":20,"abs_x":1384,"abs_y":4988}' className="text-zinc-400">Available 7 Days</span>
</div>
</div>
</div>
<div bis_size='{"x":24,"y":5101,"w":1465,"h":49,"abs_x":24,"abs_y":5144}' className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-400 uppercase tracking-wider">
<div bis_size='{"x":24,"y":5134,"w":431,"h":16,"abs_x":24,"abs_y":5177}'>© 2024 South side Pressure Cleaning. All Rights Reserved.</div>
<div bis_size='{"x":1364,"y":5134,"w":125,"h":16,"abs_x":1364,"abs_y":5177}' className="flex gap-6 mt-4 md:mt-0">
<a bis_size='{"x":1364,"y":5134,"w":56,"h":16,"abs_x":1364,"abs_y":5177}' className="hover:text-zinc-900 transition" href="#">Privacy</a>
<a bis_size='{"x":1444,"y":5134,"w":45,"h":16,"abs_x":1444,"abs_y":5177}' className="hover:text-zinc-900 transition" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
