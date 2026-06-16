import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            /* --- Education Tabs Script --- */
            const tabs = document.querySelectorAll('.tab-btn');
            const tabImage = document.getElementById('tab-image');
            const tabBadgeText = document.getElementById('tab-badge-text');

            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    tabs.forEach(t => {
                        t.classList.remove('border-amber-500/30');
                        t.classList.add('border-white/5');
                        
                        t.querySelector('.active-indicator').classList.add('hidden');
                        
                        const iconContainer = t.querySelector('.icon-container');
                        iconContainer.classList.remove('text-amber-500', 'bg-amber-500/10', 'border-amber-500/20');
                        iconContainer.classList.add('text-slate-300', 'bg-white/5', 'border-white/10');
                        
                        const progressBar = t.querySelector('.progress-bar');
                        progressBar.classList.remove('bg-amber-500');
                        progressBar.classList.add('bg-white/20');
                    });

                    tab.classList.add('border-amber-500/30');
                    tab.classList.remove('border-white/5');
                    
                    tab.querySelector('.active-indicator').classList.remove('hidden');
                    
                    const activeIconContainer = tab.querySelector('.icon-container');
                    activeIconContainer.classList.add('text-amber-500', 'bg-amber-500/10', 'border-amber-500/20');
                    activeIconContainer.classList.remove('text-slate-300', 'bg-white/5', 'border-white/10');
                    
                    const activeProgressBar = tab.querySelector('.progress-bar');
                    activeProgressBar.classList.add('bg-amber-500');
                    activeProgressBar.classList.remove('bg-white/20');

                    tabImage.style.opacity = '0';
                    setTimeout(() => {
                        tabImage.src = tab.dataset.image;
                        tabBadgeText.textContent = tab.dataset.badge;
                        tabImage.style.opacity = '0.9';
                    }, 300);
                });
            });

            /* --- Destinations Slider Script --- */
            const sliderTrack = document.getElementById('slider-track');
            const prevBtn = document.getElementById('slider-prev');
            const nextBtn = document.getElementById('slider-next');

            const getScrollAmount = (track) => {
                if(!track.firstElementChild) return 0;
                const cardWidth = track.firstElementChild.offsetWidth;
                const gap = 24; 
                return cardWidth + gap;
            };

            nextBtn.addEventListener('click', () => {
                sliderTrack.scrollBy({ left: getScrollAmount(sliderTrack), behavior: 'smooth' });
            });

            prevBtn.addEventListener('click', () => {
                sliderTrack.scrollBy({ left: -getScrollAmount(sliderTrack), behavior: 'smooth' });
            });
            
            /* --- Testimonials Slider Script --- */
            const testimonialTrack = document.getElementById('testimonial-track');
            const testPrevBtn = document.getElementById('testimonial-prev');
            const testNextBtn = document.getElementById('testimonial-next');

            testNextBtn.addEventListener('click', () => {
                testimonialTrack.scrollBy({ left: getScrollAmount(testimonialTrack), behavior: 'smooth' });
            });

            testPrevBtn.addEventListener('click', () => {
                testimonialTrack.scrollBy({ left: -getScrollAmount(testimonialTrack), behavior: 'smooth' });
            });
            
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="relative min-h-screen flex flex-col justify-between">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&amp;w=2073&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/60 to-[#050505]"></div>
</div>
<nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12 w-full max-w-screen-2xl mx-auto">
<div className="flex items-center gap-2">
<span className="text-xl font-normal tracking-tight text-amber-500">FTA</span>
<span className="text-sm font-normal tracking-widest text-slate-300 uppercase">Vacations</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-300">
<a className="hover:text-white transition-colors" href="#">Journey</a>
<a className="hover:text-white transition-colors" href="#">Training</a>
<a className="hover:text-white transition-colors" href="#">Destinations</a>
<a className="hover:text-white transition-colors" href="#">University</a>
</div>
<a className="bg-amber-500 hover:bg-amber-400 text-black px-6 py-2.5 rounded-full text-sm font-medium transition-colors" href="#">
                Join FTA
            </a>
</nav>
<div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-6 mt-12 md:mt-0">
<p className="text-amber-500 text-sm font-normal tracking-[0.2em] uppercase mb-6">
                Travel Agent Education &amp; Careers
            </p>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white leading-[1.1] max-w-4xl">
                Become a <br/>
<span className="text-amber-400 italic font-light">Travel Expert.</span> <br/>
                Build a Career. <br/>
<span className="text-sky-400">Explore the World.</span>
</h1>
<p className="mt-8 text-lg md:text-xl font-light text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Join FTA Vacations and transform your passion for travel into a thriving career with world-class training, mentorship, and community.
            </p>
</div>
<div className="relative z-10 pb-12 flex flex-col items-center gap-3 text-slate-400">
<span className="text-xs font-normal tracking-[0.2em] uppercase">Scroll to explore</span>
<div className="w-px h-12 bg-gradient-to-b from-slate-400/50 to-transparent"></div>
</div>
</section>

<section className="border-y border-white/5 bg-[#080808]">
<div className="max-w-screen-xl mx-auto px-6 py-16 md:py-24">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
<div>
<h3 className="text-4xl md:text-5xl font-semibold text-amber-500 tracking-tight mb-2">500<span className="text-slate-500 text-3xl font-light">+</span></h3>
<p className="text-xs font-normal tracking-[0.15em] text-slate-400 uppercase">Certified Agents</p>
</div>
<div>
<h3 className="text-4xl md:text-5xl font-semibold text-amber-500 tracking-tight mb-2">$2.4M</h3>
<p className="text-xs font-normal tracking-[0.15em] text-slate-400 uppercase">Agent Earnings</p>
</div>
<div>
<h3 className="text-4xl md:text-5xl font-semibold text-amber-500 tracking-tight mb-2">45<span className="text-slate-500 text-3xl font-light">+</span></h3>
<p className="text-xs font-normal tracking-[0.15em] text-slate-400 uppercase">Destinations</p>
</div>
<div>
<h3 className="text-4xl md:text-5xl font-semibold text-amber-500 tracking-tight mb-2">98%</h3>
<p className="text-xs font-normal tracking-[0.15em] text-slate-400 uppercase">Satisfaction Rate</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative">
<div className="max-w-screen-xl mx-auto px-6">
<div className="text-center mb-20">
<p className="text-amber-500 text-xs font-normal tracking-[0.2em] uppercase mb-4">Your Journey</p>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
                    From <span className="text-amber-500 italic font-light">Passion</span> to <span className="text-sky-400">Profession</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="relative bg-[#0c0c0c] border border-white/5 rounded-2xl p-8 pt-12 flex flex-col items-center text-center group hover:border-white/10 transition-colors mt-4">
<div className="absolute -top-4 w-8 h-8 rounded-full bg-amber-500 text-black flex items-center justify-center text-xs font-semibold ring-4 ring-[#050505]">1</div>
<div className="w-16 h-16 rounded-full bg-sky-950/30 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="32" icon="solar:compass-linear" width="32"></iconify-icon>
</div>
<span className="text-xs font-normal tracking-[0.15em] text-slate-500 uppercase mb-3">Discover</span>
<h3 className="text-xl font-medium text-white tracking-tight mb-4">Find Your Path</h3>
<p className="text-sm font-light text-slate-400 leading-relaxed">Explore the world of travel and discover how FTA can launch your career in the industry.</p>
</div>

<div className="relative bg-[#0c0c0c] border border-white/5 rounded-2xl p-8 pt-12 flex flex-col items-center text-center group hover:border-white/10 transition-colors mt-4">
<div className="absolute -top-4 w-8 h-8 rounded-full bg-amber-500 text-black flex items-center justify-center text-xs font-semibold ring-4 ring-[#050505]">2</div>
<div className="w-16 h-16 rounded-full bg-amber-950/30 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="32" icon="solar:book-bookmark-linear" width="32"></iconify-icon>
</div>
<span className="text-xs font-normal tracking-[0.15em] text-slate-500 uppercase mb-3">Learn</span>
<h3 className="text-xl font-medium text-white tracking-tight mb-4">Master Your Craft</h3>
<p className="text-sm font-light text-slate-400 leading-relaxed">Access world-class training, certifications, and mentorship from top industry professionals.</p>
</div>

<div className="relative bg-[#0c0c0c] border border-white/5 rounded-2xl p-8 pt-12 flex flex-col items-center text-center group hover:border-white/10 transition-colors mt-4">
<div className="absolute -top-4 w-8 h-8 rounded-full bg-amber-500 text-black flex items-center justify-center text-xs font-semibold ring-4 ring-[#050505]">3</div>
<div className="w-16 h-16 rounded-full bg-sky-950/30 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="32" icon="solar:cup-star-linear" width="32"></iconify-icon>
</div>
<span className="text-xs font-normal tracking-[0.15em] text-slate-500 uppercase mb-3">Succeed</span>
<h3 className="text-xl font-medium text-white tracking-tight mb-4">Build Your Business</h3>
<p className="text-sm font-light text-slate-400 leading-relaxed">Leverage proven systems, exclusive supplier partnerships, and a thriving agent community.</p>
</div>

<div className="relative bg-[#0c0c0c] border border-white/5 rounded-2xl p-8 pt-12 flex flex-col items-center text-center group hover:border-white/10 transition-colors mt-4">
<div className="absolute -top-4 w-8 h-8 rounded-full bg-amber-500 text-black flex items-center justify-center text-xs font-semibold ring-4 ring-[#050505]">4</div>
<div className="w-16 h-16 rounded-full bg-amber-950/30 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="32" icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
</div>
<span className="text-xs font-normal tracking-[0.15em] text-slate-500 uppercase mb-3">Join</span>
<h3 className="text-xl font-medium text-white tracking-tight mb-4">Grow Together</h3>
<p className="text-sm font-light text-slate-400 leading-relaxed">Become part of a network of passionate travel professionals building extraordinary careers.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#080808]">
<div className="max-w-screen-xl mx-auto px-6">
<div className="text-center mb-16">
<p className="text-amber-500 text-xs font-normal tracking-[0.2em] uppercase mb-4">Training &amp; Certification</p>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6">
                    World-Class <span className="text-amber-500 italic font-light">Education</span>
</h2>
<p className="text-lg font-light text-slate-400 max-w-2xl mx-auto">
                    Our comprehensive curriculum transforms aspiring agents into confident travel professionals.
                </p>
</div>
<div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

<div className="w-full lg:w-1/2 relative">
<div className="absolute -inset-4 bg-gradient-to-tr from-sky-500/10 to-amber-500/10 blur-2xl rounded-[3rem]"></div>
<div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]">
<img alt="Training Module" className="w-full h-auto object-cover aspect-[4/3] opacity-90" id="tab-image" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 right-6 md:right-auto bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 rounded-xl p-4 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center">
<iconify-icon height="24" icon="solar:medal-ribbon-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-lg font-medium text-white tracking-tight" id="tab-badge-text">Destination Master</p>
<p className="text-xs font-light text-slate-400">Industry-recognized</p>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 flex flex-col gap-4">

<button className="tab-btn w-full text-left bg-[#0f0f0f] border border-amber-500/30 rounded-xl p-6 relative overflow-hidden transition-all duration-300" data-badge="Destination Master" data-image="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&amp;w=2069&amp;auto=format&amp;fit=crop">
<div className="active-indicator absolute top-0 left-0 w-1 h-full bg-amber-500 transition-opacity"></div>
<div className="flex items-start gap-4 mb-4">
<div className="icon-container w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-500 transition-colors">
<iconify-icon height="20" icon="solar:global-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-white tracking-tight mb-2">Destination Mastery</h4>
<p className="text-sm font-light text-slate-400 leading-relaxed">In-depth knowledge of luxury, adventure, and group travel destinations worldwide.</p>
</div>
</div>
<div className="mt-4">
<div className="flex justify-between text-xs text-slate-500 uppercase tracking-widest mb-2 font-normal">
<span>92% Completion Rate</span>
</div>
<div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
<div className="progress-bar w-[92%] h-full bg-amber-500 rounded-full transition-colors"></div>
</div>
</div>
</button>

<button className="tab-btn w-full text-left bg-[#0f0f0f] border border-white/5 rounded-xl p-6 relative overflow-hidden transition-all duration-300 hover:border-white/20" data-badge="Sales Strategist" data-image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&amp;w=2070&amp;auto=format&amp;fit=crop">
<div className="active-indicator hidden absolute top-0 left-0 w-1 h-full bg-amber-500 transition-opacity"></div>
<div className="flex items-start gap-4 mb-4">
<div className="icon-container w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-slate-300 transition-colors">
<iconify-icon height="20" icon="solar:chart-square-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-white tracking-tight mb-2">Sales &amp; Marketing</h4>
<p className="text-sm font-light text-slate-400 leading-relaxed">Proven strategies to build your client base and grow revenue year over year.</p>
</div>
</div>
<div className="mt-4">
<div className="flex justify-between text-xs text-slate-500 uppercase tracking-widest mb-2 font-normal">
<span>87% Completion Rate</span>
</div>
<div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
<div className="progress-bar w-[87%] h-full bg-white/20 rounded-full transition-colors"></div>
</div>
</div>
</button>

<button className="tab-btn w-full text-left bg-[#0f0f0f] border border-white/5 rounded-xl p-6 relative overflow-hidden transition-all duration-300 hover:border-white/20" data-badge="Certified Professional" data-image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&amp;w=2070&amp;auto=format&amp;fit=crop">
<div className="active-indicator hidden absolute top-0 left-0 w-1 h-full bg-amber-500 transition-opacity"></div>
<div className="flex items-start gap-4 mb-4">
<div className="icon-container w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-slate-300 transition-colors">
<iconify-icon height="20" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-white tracking-tight mb-2">Industry Certification</h4>
<p className="text-sm font-light text-slate-400 leading-relaxed">Earn recognized certifications that establish your authority in the travel industry.</p>
</div>
</div>
<div className="mt-4">
<div className="flex justify-between text-xs text-slate-500 uppercase tracking-widest mb-2 font-normal">
<span>95% Completion Rate</span>
</div>
<div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
<div className="progress-bar w-[95%] h-full bg-white/20 rounded-full transition-colors"></div>
</div>
</div>
</button>

<button className="tab-btn w-full text-left bg-[#0f0f0f] border border-white/5 rounded-xl p-6 relative overflow-hidden transition-all duration-300 hover:border-white/20" data-badge="Partner Network" data-image="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&amp;w=1932&amp;auto=format&amp;fit=crop">
<div className="active-indicator hidden absolute top-0 left-0 w-1 h-full bg-amber-500 transition-opacity"></div>
<div className="flex items-start gap-4 mb-4">
<div className="icon-container w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-slate-300 transition-colors">
<iconify-icon height="20" icon="solar:handshake-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-white tracking-tight mb-2">Supplier Partnerships</h4>
<p className="text-sm font-light text-slate-400 leading-relaxed">Exclusive access to top-tier supplier programs, FAM trips, and commission structures.</p>
</div>
</div>
<div className="mt-4">
<div className="flex justify-between text-xs text-slate-500 uppercase tracking-widest mb-2 font-normal">
<span>89% Completion Rate</span>
</div>
<div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
<div className="progress-bar w-[89%] h-full bg-white/20 rounded-full transition-colors"></div>
</div>
</div>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 overflow-hidden border-t border-white/5">
<div className="max-w-screen-xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<p className="text-slate-500 text-xs font-normal tracking-[0.2em] uppercase mb-4">Explore Destinations</p>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
                        Where Your <span className="text-amber-500 italic font-light">Career</span> Takes You
                    </h2>
</div>
<div className="flex gap-4">
<button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all" id="slider-prev">
<iconify-icon height="20" icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all" id="slider-next">
<iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8" id="slider-track" style={{scrollbarWidth: 'none'}}>

<div className="snap-start shrink-0 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer border border-white/5">
<img alt="Caribbean Islands" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="flex items-center gap-2 text-xs font-normal tracking-widest text-sky-400 uppercase mb-3">
<iconify-icon height="16" icon="solar:map-point-linear" width="16"></iconify-icon>
                            Inclusive Pro
                        </div>
<h3 className="text-3xl font-semibold text-white tracking-tight">Caribbean Islands</h3>
</div>
</div>

<div className="snap-start shrink-0 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer border border-white/5">
<img alt="Agent Success" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="flex items-center gap-2 text-xs font-normal tracking-widest text-amber-500 uppercase mb-3">
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
                            Career Growth
                        </div>
<h3 className="text-3xl font-semibold text-white tracking-tight">Agent Success</h3>
</div>
</div>

<div className="snap-start shrink-0 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer border border-white/5">
<img alt="Live Training" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="flex items-center gap-2 text-xs font-normal tracking-widest text-sky-400 uppercase mb-3">
<iconify-icon height="16" icon="solar:videocamera-linear" width="16"></iconify-icon>
                            Events
                        </div>
<h3 className="text-3xl font-semibold text-white tracking-tight">Live Training</h3>
</div>
</div>

<div className="snap-start shrink-0 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer border border-white/5">
<img alt="European Tours" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="flex items-center gap-2 text-xs font-normal tracking-widest text-amber-500 uppercase mb-3">
<iconify-icon height="16" icon="solar:map-point-linear" width="16"></iconify-icon>
                            Luxury Travel
                        </div>
<h3 className="text-3xl font-semibold text-white tracking-tight">European Tours</h3>
</div>
</div>

<div className="snap-start shrink-0 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer border border-white/5">
<img alt="Networking" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="flex items-center gap-2 text-xs font-normal tracking-widest text-sky-400 uppercase mb-3">
<iconify-icon height="16" icon="solar:users-group-rounded-linear" width="16"></iconify-icon>
                            Community
                        </div>
<h3 className="text-3xl font-semibold text-white tracking-tight">Global Network</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#050505] overflow-hidden">
<div className="max-w-screen-xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<p className="text-amber-500 text-xs font-normal tracking-[0.2em] uppercase mb-4">Success Stories</p>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
                        Hear From Our <span className="text-amber-500 italic font-light">Agents</span>
</h2>
</div>
<div className="flex gap-4">
<button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all" id="testimonial-prev">
<iconify-icon height="20" icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all" id="testimonial-next">
<iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8" id="testimonial-track" style={{scrollbarWidth: 'none'}}>

<div className="snap-start shrink-0 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-[#0c0c0c] border border-white/5 rounded-2xl p-8 flex flex-col justify-between group hover:border-white/10 transition-colors relative overflow-hidden">
<div className="absolute -top-12 -right-8 text-white/5">
<iconify-icon height="160" icon="solar:chat-square-quote-linear" width="160"></iconify-icon>
</div>
<div>
<iconify-icon className="text-amber-500/50 mb-6" height="32" icon="solar:chat-square-quote-linear" width="32"></iconify-icon>
<p className="text-sm font-light text-slate-300 leading-relaxed mb-8 relative z-10">
                            "FTA Vacations transformed my life. I went from dreaming about travel to running a six-figure business in just two years. The training is unmatched."
                        </p>
</div>
<div className="relative z-10 mt-4">
<div className="flex gap-1 text-amber-500 mb-4">
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white tracking-tight">Sarah Mitchell</h4>
<p className="text-xs font-normal tracking-widest text-slate-500 uppercase mt-1">Travel Advisor, 3 Years</p>
</div>
</div>

<div className="snap-start shrink-0 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-[#0c0c0c] border border-white/5 rounded-2xl p-8 flex flex-col justify-between group hover:border-white/10 transition-colors relative overflow-hidden">
<div className="absolute -top-12 -right-8 text-white/5">
<iconify-icon height="160" icon="solar:chat-square-quote-linear" width="160"></iconify-icon>
</div>
<div>
<iconify-icon className="text-amber-500/50 mb-6" height="32" icon="solar:chat-square-quote-linear" width="32"></iconify-icon>
<p className="text-sm font-light text-slate-300 leading-relaxed mb-8 relative z-10">
                            "The mentorship and supplier relationships FTA provides are incredible. I felt supported from day one and my commissions have grown 300% since joining."
                        </p>
</div>
<div className="relative z-10 mt-4">
<div className="flex gap-1 text-amber-500 mb-4">
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white tracking-tight">James Rodriguez</h4>
<p className="text-xs font-normal tracking-widest text-slate-500 uppercase mt-1">Luxury Specialist</p>
</div>
</div>

<div className="snap-start shrink-0 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-[#0c0c0c] border border-white/5 rounded-2xl p-8 flex flex-col justify-between group hover:border-white/10 transition-colors relative overflow-hidden">
<div className="absolute -top-12 -right-8 text-white/5">
<iconify-icon height="160" icon="solar:chat-square-quote-linear" width="160"></iconify-icon>
</div>
<div>
<iconify-icon className="text-amber-500/50 mb-6" height="32" icon="solar:chat-square-quote-linear" width="32"></iconify-icon>
<p className="text-sm font-light text-slate-300 leading-relaxed mb-8 relative z-10">
                            "I was skeptical at first, but FTA's community and education programs are the real deal. I now travel the world while earning a great income for my family."
                        </p>
</div>
<div className="relative z-10 mt-4">
<div className="flex gap-1 text-amber-500 mb-4">
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white tracking-tight">Elena Vasquez</h4>
<p className="text-xs font-normal tracking-widest text-slate-500 uppercase mt-1">Group Travel Expert</p>
</div>
</div>

<div className="snap-start shrink-0 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-[#0c0c0c] border border-white/5 rounded-2xl p-8 flex flex-col justify-between group hover:border-white/10 transition-colors relative overflow-hidden">
<div className="absolute -top-12 -right-8 text-white/5">
<iconify-icon height="160" icon="solar:chat-square-quote-linear" width="160"></iconify-icon>
</div>
<div>
<iconify-icon className="text-amber-500/50 mb-6" height="32" icon="solar:chat-square-quote-linear" width="32"></iconify-icon>
<p className="text-sm font-light text-slate-300 leading-relaxed mb-8 relative z-10">
                            "The ongoing support from the network is what kept me going. They actually care about your success. Highly recommend to anyone looking to start a career."
                        </p>
</div>
<div className="relative z-10 mt-4">
<div className="flex gap-1 text-amber-500 mb-4">
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white tracking-tight">Marcus Chen</h4>
<p className="text-xs font-normal tracking-widest text-slate-500 uppercase mt-1">Independent Advisor</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6">
<div className="max-w-4xl mx-auto bg-[#0c0c0c] border border-white/10 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-10">
<p className="text-amber-500 text-xs font-normal tracking-[0.2em] uppercase mb-6">Ready to Begin?</p>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
                    Your <span className="text-amber-500 italic font-light">Adventure</span> Starts Here
                </h2>
<p className="text-lg font-light text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
                    Join hundreds of successful travel professionals who chose FTA Vacations as their launchpad to an extraordinary career.
                </p>
<button className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-black px-10 py-4 rounded-full text-base font-medium transition-all hover:scale-105 active:scale-95 group">
                    Apply Now
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-xs font-normal tracking-widest text-slate-500 uppercase">
<span>No experience required</span>
<span className="w-1 h-1 rounded-full bg-slate-700"></span>
<span>Free consultation</span>
<span className="w-1 h-1 rounded-full bg-slate-700"></span>
<span>Start earning in weeks</span>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-[#050505]">
<div className="max-w-screen-2xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-normal tracking-tight text-amber-500">FTA</span>
<span className="text-xs font-normal tracking-widest text-slate-400 uppercase">Vacations</span>
</div>
<div className="flex items-center gap-8 text-sm font-light text-slate-400">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<p className="text-xs font-light text-slate-500">
                © 2024 FTA Vacations. All rights reserved.
            </p>
</div>
</footer>



    </>
  );
}
