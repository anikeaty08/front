import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



            (function() {
                const container = document.getElementById('drag-container-hero');
                const card = document.getElementById('draggable-card-hero');
                const target = document.getElementById('drop-target-hero');
                const hint = document.getElementById('drop-hint-hero');
                const toast = document.getElementById('success-toast-hero');
                
                if (!container || !card || !target) return;

                let isDragging = false;
                let startX, startY;
                let currentX = 0, currentY = 0;
                let locked = false;

                function initSize() {
                    if(locked) return;
                    const targetRect = target.getBoundingClientRect();
                    const containerRect = container.getBoundingClientRect();
                    
                    if (targetRect.width === 0) {
                        setTimeout(initSize, 100);
                        return;
                    }
                    
                    card.style.width = targetRect.width + 'px';
                    card.style.height = targetRect.height + 'px';
                    
                    const isMobile = window.innerWidth < 768;
                    const offsetX = targetRect.left - containerRect.left - (isMobile ? 15 : 40); 
                    const offsetY = targetRect.top - containerRect.top + (isMobile ? 25 : 50);
                    
                    const safeX = Math.max(16, Math.min(offsetX, containerRect.width - targetRect.width - 16));
                    const safeY = Math.max(16, Math.min(offsetY, containerRect.height - targetRect.height - 16));

                    card.style.left = safeX + 'px';
                    card.style.top = safeY + 'px';
                }

                // Initial position mapping
                requestAnimationFrame(initSize);
                window.addEventListener('resize', initSize);

                function startDrag(e) {
                    if (locked) return;
                    isDragging = true;
                    
                    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
                    const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
                    
                    startX = clientX - currentX;
                    startY = clientY - currentY;
                    
                    card.style.transition = 'none';
                    card.style.zIndex = '50';
                    card.classList.add('shadow-2xl', 'scale-[1.02]', 'border-[#B05A2F]');
                    card.classList.remove('border-[#111110]');
                }

                function onDrag(e) {
                    if (!isDragging) return;
                    e.preventDefault();
                    
                    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
                    const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
                    
                    currentX = clientX - startX;
                    currentY = clientY - startY;
                    
                    card.style.transform = `translate(${currentX}px, ${currentY}px)`;

                    const cardRect = card.getBoundingClientRect();
                    const targetRect = target.getBoundingClientRect();
                    
                    const cardCenterX = cardRect.left + cardRect.width / 2;
                    const cardCenterY = cardRect.top + cardRect.height / 2;
                    
                    const isClose = (
                        cardCenterX > targetRect.left && 
                        cardCenterX < targetRect.right && 
                        cardCenterY > targetRect.top && 
                        cardCenterY < targetRect.bottom
                    );

                    if (isClose) {
                        target.classList.add('bg-[#B05A2F]/10', 'border-[#B05A2F]');
                        target.classList.remove('border-[#D9D9D6]', 'bg-[#F7F7F5]/50');
                    } else {
                        target.classList.remove('bg-[#B05A2F]/10', 'border-[#B05A2F]');
                        target.classList.add('border-[#D9D9D6]', 'bg-[#F7F7F5]/50');
                    }
                }

                function endDrag(e) {
                    if (!isDragging) return;
                    isDragging = false;
                    
                    const cardRect = card.getBoundingClientRect();
                    const targetRect = target.getBoundingClientRect();
                    
                    const cardCenterX = cardRect.left + cardRect.width / 2;
                    const cardCenterY = cardRect.top + cardRect.height / 2;
                    
                    const isClose = (
                        cardCenterX > targetRect.left && 
                        cardCenterX < targetRect.right && 
                        cardCenterY > targetRect.top && 
                        cardCenterY < targetRect.bottom
                    );

                    card.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
                    card.classList.remove('shadow-2xl', 'scale-[1.02]');

                    if (isClose) {
                        locked = true;
                        
                        card.style.transform = 'translate(0px, 0px)';
                        currentX = 0; currentY = 0;
                        
                        hint.style.opacity = '0';
                        setTimeout(() => hint.remove(), 300);

                        target.appendChild(card);
                        
                        card.style.position = 'absolute';
                        card.style.left = '-2px';
                        card.style.top = '-2px';
                        card.style.width = 'calc(100% + 4px)';
                        card.style.height = 'calc(100% + 4px)';
                        
                        card.classList.remove('border-[#111110]', 'cursor-grab', 'active:cursor-grabbing');
                        card.classList.add('border-transparent', 'bg-[#B05A2F]');
                        
                        document.getElementById('drag-icon-bg-hero').classList.replace('bg-[#F0F0EE]', 'bg-white/20');
                        document.getElementById('drag-line-1-hero').classList.replace('bg-[#111110]', 'bg-white');
                        document.getElementById('drag-line-2-hero').classList.replace('bg-[#A1A1A0]', 'bg-white/70');
                        
                        const icon = document.getElementById('drag-icon-hero');
                        icon.setAttribute('icon', 'solar:check-circle-bold');
                        icon.classList.remove('text-gray-400');
                        icon.classList.add('text-white', 'text-xl');

                        target.classList.remove('border-dashed', 'border-[#D9D9D6]', 'border-[#B05A2F]');
                        target.classList.add('border-transparent');
                        
                        if(toast) {
                            toast.classList.remove('opacity-0', 'translate-y-4');
                        }
                        
                    } else {
                        currentX = 0;
                        currentY = 0;
                        card.style.transform = `translate(0px, 0px)`;
                        card.classList.remove('border-[#B05A2F]');
                        card.classList.add('border-[#111110]');
                        
                        target.classList.remove('bg-[#B05A2F]/10', 'border-[#B05A2F]');
                        target.classList.add('border-[#D9D9D6]', 'bg-[#F7F7F5]/50');
                    }
                }

                card.addEventListener('mousedown', startDrag);
                window.addEventListener('mousemove', onDrag, { passive: false });
                window.addEventListener('mouseup', endDrag);
                
                card.addEventListener('touchstart', startDrag, { passive: false });
                window.addEventListener('touchmove', onDrag, { passive: false });
                window.addEventListener('touchend', endDrag);
            })();
        
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 w-full h-16 bg-[#F7F7F5]/80 backdrop-blur-md border-b border-[#D9D9D6] transition-all">
<div className="flex h-full max-w-[1440px] mr-auto ml-auto pr-8 pl-8 items-center justify-between">
<a className="text-base tracking-tighter font-semibold" href="#">
                JD
            </a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-[#111110] hover:text-[#B05A2F] transition-colors" href="#work">Work</a>
<a className="text-sm text-gray-500 hover:text-[#111110] transition-colors" href="#about">About</a>
<a className="text-sm text-gray-500 hover:text-[#111110] transition-colors" href="#contact">Contact</a>
<a className="hover:bg-black/10 transition-colors flex items-center gap-2 text-xs font-medium bg-black/5 rounded-lg pt-2 pr-4 pb-2 pl-4" href="https://drive.google.com/file/d/1nmJQYh4zqkpriuskNbCKDm9GPwQcqInn/view?usp=drive_link">
                    Resume
                    <iconify-icon icon="solar:download-linear"></iconify-icon>
</a>
</div>

<button className="md:hidden text-[#111110]">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="w-full max-w-[1440px] mx-auto px-8 py-24 md:py-32 lg:py-40">
<div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">

<div className="md:col-span-6 flex flex-col items-start">
<h1 className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl font-semibold text-[#111110] tracking-tighter max-w-xl">
                    Designing systems that drive clear outcomes.
                </h1>
<p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed max-w-md">
                    Product designer specializing in complex web applications, scalable design systems, and functional user experiences.
                </p>
<div className="mt-10 flex flex-wrap items-center gap-4">
<a className="bg-[#B05A2F] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#9c4f29] transition-all shadow-sm flex items-center gap-2 group" href="#work">
                        View Work
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="px-6 py-3 rounded-lg text-sm font-medium text-[#111110] border border-[#D9D9D6] hover:bg-black/5 transition-colors" href="#contact">
                        Get in touch
                    </a>
</div>
</div>

<div className="md:col-span-6 flex justify-end w-full">

<div className="aspect-[4/3] overflow-hidden md:p-6 select-none flex bg-[#F7F7F5] w-full max-w-[540px] border-[#D9D9D6] border rounded-2xl pt-4 pr-4 pb-4 pl-4 relative shadow-sm" id="drag-container-hero">

<div className="absolute inset-0 pointer-events-none opacity-40" style={{backgroundImage: 'radial-gradient(#111110 1px, transparent 1px)', backgroundSize: '20px 20px', backgroundPosition: '-10px -10px'}}></div>

<div className="w-20 md:w-24 h-full bg-white border border-[#D9D9D6] shadow-sm rounded-xl hidden sm:flex flex-col gap-3 p-4 mr-4 md:mr-6 relative z-0 pointer-events-none">
<div className="w-full h-3 bg-[#EAEAE8] rounded-full mb-2"></div>
<div className="w-3/4 h-2 bg-[#F0F0EE] rounded-full"></div>
<div className="w-full h-2 bg-[#F0F0EE] rounded-full"></div>
<div className="w-5/6 h-2 bg-[#F0F0EE] rounded-full"></div>
<div className="w-full h-2 bg-[#F0F0EE] rounded-full mt-4"></div>
<div className="w-2/3 h-2 bg-[#F0F0EE] rounded-full"></div>
</div>

<div className="flex-1 h-full flex flex-col gap-4 md:gap-6 relative z-0 pointer-events-none">

<div className="w-full h-12 bg-white border border-[#D9D9D6] shadow-sm rounded-xl flex items-center px-4 justify-between shrink-0">
<div className="w-24 md:w-32 h-2.5 bg-[#EAEAE8] rounded-full"></div>
<div className="w-6 h-6 bg-[#F0F0EE] rounded-full"></div>
</div>

<div className="w-full flex-1 grid grid-cols-2 gap-4 md:gap-6 pb-2 relative">

<div className="bg-white border border-[#D9D9D6] shadow-sm rounded-xl p-4 flex flex-col gap-3">
<div className="w-8 h-8 rounded-lg bg-[#F0F0EE]"></div>
<div className="w-full h-2 bg-[#EAEAE8] rounded-full mt-auto"></div>
<div className="w-2/3 h-2 bg-[#F0F0EE] rounded-full"></div>
</div>

<div className="bg-white border border-[#D9D9D6] shadow-sm rounded-xl p-4 flex flex-col gap-3">
<div className="w-8 h-8 rounded-lg bg-[#F0F0EE]"></div>
<div className="w-full h-2 bg-[#EAEAE8] rounded-full mt-auto"></div>
<div className="w-4/5 h-2 bg-[#F0F0EE] rounded-full"></div>
</div>

<div className="border-2 border-dashed border-[#D9D9D6] rounded-xl bg-[#F7F7F5]/50 transition-all duration-300 flex items-center justify-center relative" id="drop-target-hero">
<div className="flex flex-col items-center gap-2 opacity-100 transition-opacity" id="drop-hint-hero">
<div className="w-8 h-8 rounded-full bg-[#EAEAE8]/50 flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-[#D9D9D6]"></div>
</div>
<span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest hidden md:block">Align Element</span>
</div>
</div>

<div className="bg-white border border-[#D9D9D6] shadow-sm rounded-xl p-4 flex flex-col gap-3">
<div className="w-8 h-8 rounded-lg bg-[#F0F0EE]"></div>
<div className="w-full h-2 bg-[#EAEAE8] rounded-full mt-auto"></div>
<div className="w-1/2 h-2 bg-[#F0F0EE] rounded-full"></div>
</div>
</div>
</div>

<div className="absolute bg-white border border-[#111110] shadow-xl rounded-xl p-4 flex flex-col gap-3 cursor-grab active:cursor-grabbing z-20 touch-none transform-gpu" id="draggable-card-hero" style={{left: '-1000px', top: '-1000px'}}>
<div className="flex justify-between items-start pointer-events-none w-full">
<div className="w-8 h-8 rounded-lg bg-[#F0F0EE] transition-colors duration-300" id="drag-icon-bg-hero"></div>
<iconify-icon className="text-gray-400 text-lg transition-colors duration-300" icon="solar:hamburger-menu-linear" id="drag-icon-hero"></iconify-icon>
</div>
<div className="w-full h-2 bg-[#111110] rounded-full mt-auto pointer-events-none transition-colors duration-300" id="drag-line-1-hero"></div>
<div className="w-3/4 h-2 bg-[#A1A1A0] rounded-full pointer-events-none transition-colors duration-300" id="drag-line-2-hero"></div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#111110] text-white px-5 py-2.5 rounded-full text-xs font-medium opacity-0 translate-y-4 transition-all duration-500 ease-out flex items-center gap-2 z-30 shadow-lg pointer-events-none" id="success-toast-hero">
<iconify-icon className="text-[#B05A2F] text-base" icon="solar:check-circle-bold"></iconify-icon>
                        System Aligned
                    </div>
</div>
</div>
</div>

</header>

<section className="w-full max-w-[1440px] mx-auto px-8 py-24 md:py-32" id="work">
<h2 className="text-2xl font-semibold tracking-tight text-[#111110] mb-12">Selected Work</h2>
<div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16">

<article className="md:col-span-6 group cursor-pointer">
<div className="w-full aspect-[4/3] rounded-xl bg-white border border-[#D9D9D6] overflow-hidden relative mb-6 flex items-center justify-center p-8">

<div className="w-full h-full border border-gray-100 rounded-lg shadow-sm bg-gray-50 flex flex-col group-hover:scale-[1.02] transition-transform duration-500 ease-out">
<div className="h-10 border-b border-gray-100 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-gray-200"></div>
<div className="w-3 h-3 rounded-full bg-gray-200"></div>
<div className="w-3 h-3 rounded-full bg-gray-200"></div>
</div>
<div className="flex-1 p-6 flex gap-6">
<div className="w-1/4 h-full bg-white rounded border border-gray-100 p-3 flex flex-col gap-3">
<div className="w-full h-4 bg-gray-100 rounded"></div>
<div className="w-3/4 h-4 bg-gray-100 rounded"></div>
</div>
<div className="w-3/4 h-full flex flex-col gap-4">
<div className="w-full h-32 bg-white rounded border border-gray-100"></div>
<div className="flex gap-4">
<div className="w-1/2 h-20 bg-white rounded border border-gray-100"></div>
<div className="w-1/2 h-20 bg-white rounded border border-gray-100"></div>
</div>
</div>
</div>
</div>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-gray-500 tracking-wide uppercase mb-2">Fintech • Core Platform</span>
<h3 className="text-xl font-semibold tracking-tight text-[#111110] mb-3">Reimagining Financial Analytics</h3>
<div className="flex flex-col gap-1 mb-5">
<p className="text-sm text-gray-600"><strong className="font-medium text-[#111110]">Problem:</strong> Fragmented data dashboards caused a 40% drop-off in user session duration.</p>
<p className="text-sm text-gray-600"><strong className="font-medium text-[#111110]">Outcome:</strong> Unified system architecture leading to a 2.5x increase in daily active engagement.</p>
</div>
<div className="flex items-center gap-1 text-sm font-medium text-[#B05A2F]">
                        View Case Study
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</article>

<article className="md:col-span-6 group cursor-pointer mt-0 md:mt-24">
<div className="w-full aspect-[4/3] rounded-xl bg-white border border-[#D9D9D6] overflow-hidden relative mb-6 flex items-center justify-center p-8">

<div className="w-full h-full border border-gray-100 rounded-lg shadow-sm bg-gray-50 flex flex-col group-hover:scale-[1.02] transition-transform duration-500 ease-out">
<div className="h-12 border-b border-gray-100 flex items-center justify-between px-6">
<div className="w-24 h-4 bg-gray-200 rounded"></div>
<div className="w-8 h-8 rounded-full bg-[#B05A2F]/20"></div>
</div>
<div className="flex-1 p-6 grid grid-cols-2 gap-4">
<div className="col-span-2 h-24 bg-white rounded border border-gray-100 p-4 flex flex-col justify-end">
<div className="w-1/2 h-3 bg-gray-100 rounded mb-2"></div>
<div className="w-1/3 h-6 bg-gray-200 rounded"></div>
</div>
<div className="h-full bg-white rounded border border-gray-100"></div>
<div className="h-full bg-white rounded border border-gray-100"></div>
</div>
</div>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-gray-500 tracking-wide uppercase mb-2">SaaS • Design System</span>
<h3 className="text-xl font-semibold tracking-tight text-[#111110] mb-3">Enterprise Component Library</h3>
<div className="flex flex-col gap-1 mb-5">
<p className="text-sm text-gray-600"><strong className="font-medium text-[#111110]">Problem:</strong> Inconsistent UI patterns across 4 product lines slowed engineering velocity.</p>
<p className="text-sm text-gray-600"><strong className="font-medium text-[#111110]">Outcome:</strong> Centralized token architecture reducing design-to-code time by 35%.</p>
</div>
<div className="flex items-center gap-1 text-sm font-medium text-[#B05A2F]">
                        View Case Study
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</article>
</div>
</section>

<section className="border-y bg-white w-full border-[#D9D9D6] pt-24 pb-24">
<div className="max-w-[1440px] mx-auto px-8">
<div className="mb-12 md:mb-16 max-w-3xl">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-[#111110] mb-4">Key Decisions</h2>
<p className="text-base text-gray-500 leading-relaxed">Design is about intentional trade-offs. Here is a look at the systematic approach and product thinking behind recent evolutions.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">

<div className="flex flex-col p-8 rounded-2xl bg-[#F7F7F5] border border-[#D9D9D6] shadow-sm">
<div className="flex items-center gap-4 mb-8">
<div className="w-10 h-10 rounded-full bg-white border border-[#D9D9D6] flex items-center justify-center text-[#111110] shadow-sm shrink-0">
<svg className="lucide lucide-minimize-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line <h3="" className="text-lg font-medium tracking-tight text-[#111110]" x1="3">Streamlined Onboarding
                </line></svg></div>
<div className="space-y-6">
<div className="flex flex-col gap-1.5">
<span className="text-[11px] font-medium text-gray-400 uppercase tracking-widest">Problem</span>
<p className="text-sm text-gray-600 leading-relaxed">Complex, multi-step entry caused user fatigue and high drop-off rates during sign-up.</p>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-[11px] font-medium text-gray-400 uppercase tracking-widest">Decision &amp; Reasoning</span>
<p className="text-sm text-[#111110] leading-relaxed">Reduced steps from 6 to 3. Users abandoned the flow when asked for non-essential information upfront, so we deferred full profile completion.</p>
</div>
<div className="flex flex-col gap-1.5 pt-5 border-t border-[#D9D9D6]">
<span className="text-[11px] font-medium text-[#B05A2F] uppercase tracking-widest">Outcome</span>
<p className="text-sm text-[#111110] leading-relaxed">Simpler, faster entry into the core product experience.</p>
</div>
</div>
</div>

<div className="flex flex-col p-8 rounded-2xl bg-[#F7F7F5] border border-[#D9D9D6] shadow-sm">
<div className="flex items-center gap-4 mb-8">
<div className="w-10 h-10 rounded-full bg-white border border-[#D9D9D6] flex items-center justify-center text-[#111110] shadow-sm shrink-0">
<svg className="lucide lucide-layout-dashboard" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</div>
<h3 className="text-lg font-medium tracking-tight text-[#111110]">Unified Architecture</h3>
</div>
<div className="space-y-6">
<div className="flex flex-col gap-1.5">
<span className="text-[11px] font-medium text-gray-400 uppercase tracking-widest">Problem</span>
<p className="text-sm text-gray-600 leading-relaxed">Fragmented data scattered across multiple disconnected views created navigation friction.</p>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-[11px] font-medium text-gray-400 uppercase tracking-widest">Decision &amp; Reasoning</span>
<p className="text-sm text-[#111110] leading-relaxed">Introduced progressive disclosure to reduce cognitive load, grouping related metrics intuitively into a single hub.</p>
</div>
<div className="flex flex-col gap-1.5 pt-5 border-t border-[#D9D9D6]">
<span className="text-[11px] font-medium text-[#B05A2F] uppercase tracking-widest">Outcome</span>
<p className="text-sm text-[#111110] leading-relaxed">Improved discoverability and sustained daily active engagement.</p>
</div>
</div>
</div>

<div className="flex flex-col p-8 rounded-2xl bg-[#F7F7F5] border border-[#D9D9D6] shadow-sm">
<div className="flex items-center gap-4 mb-8">
<div className="w-10 h-10 rounded-full bg-white border border-[#D9D9D6] flex items-center justify-center text-[#111110] shadow-sm shrink-0">
<svg className="lucide lucide-component" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"></path><path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"></path><path d="m18.5 8.5 3.5 3.5-3.5 3.5L15 12l3.5-3.5Z"></path><path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight text-[#111110]">Centralized Components</h3>
</div>
<div className="space-y-6">
<div className="flex flex-col gap-1.5">
<span className="text-[11px] font-medium text-gray-400 uppercase tracking-widest">Problem</span>
<p className="text-sm text-gray-600 leading-relaxed">Inconsistent UI patterns slowed engineering velocity across 4 distinct product lines.</p>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-[11px] font-medium text-gray-400 uppercase tracking-widest">Decision &amp; Reasoning</span>
<p className="text-sm text-[#111110] leading-relaxed">Established a strict design token and component architecture to create a scalable, predictable global foundation.</p>
</div>
<div className="flex flex-col gap-1.5 pt-5 border-t border-[#D9D9D6]">
<span className="text-[11px] font-medium text-[#B05A2F] uppercase tracking-widest">Outcome</span>
<p className="text-sm text-[#111110] leading-relaxed">Faster design-to-code workflow and a cohesive brand experience.</p>
</div>
</div>
</div>
</div>
</div>
</div></section>

<section className="md:py-32 w-full max-w-[1440px] mr-auto ml-auto pt-24 pr-8 pb-24 pl-8" id="about">
<div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">

<div className="md:col-span-5 w-full aspect-[4/5] bg-white border border-[#D9D9D6] rounded-2xl p-4 shadow-sm">
<div className="w-full h-full bg-[#F0F0EE] rounded-xl relative overflow-hidden flex items-center justify-center">

<svg className="absolute inset-0 w-full h-full text-black/5" height="40" viewbox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
<defs><pattern height="20" id="dots" patternunits="userSpaceOnUse" width="20"><circle cx="2" cy="2" fill="currentColor" r="1"></circle></pattern></defs>
<rect fill="url(#dots)" height="100%" width="100%"></rect>
</svg>
<iconify-icon className="text-gray-400 relative z-10" height="48" icon="solar:user-linear" width="48"></iconify-icon>
</div>
</div>

<div className="md:col-span-7 flex flex-col">
<h2 className="text-2xl font-semibold tracking-tight text-[#111110] mb-8">About</h2>
<p className="text-lg text-[#111110] font-medium leading-relaxed mb-6">
                    I build bridges between user needs and business objectives through rigorous design systems and structured product thinking.
                </p>
<p className="text-base text-gray-600 leading-relaxed mb-10">
                    With over 6 years of experience scaling software products, my focus is on removing friction. I believe good design is inherently invisible—it manifests as a workflow that simply feels correct. I partner closely with engineering and product management to ensure that what we design is not only valuable, but shippable and maintainable.
                </p>
<div className="grid grid-cols-2 gap-8 mb-10">
<div>
<h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">Core Competencies</h4>
<ul className="text-sm text-[#111110] flex flex-col gap-2">
<li>Product Strategy</li>
<li>Interaction Design</li>
<li>Design Systems</li>
<li>Prototyping</li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">Tools &amp; Tech</h4>
<ul className="text-sm text-[#111110] flex flex-col gap-2">
<li>Figma / FigJam</li>
<li>HTML / CSS / Tailwind</li>
<li>Framer</li>
<li>Git / Version Control</li>
</ul>
</div>
</div>
<div className="">
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#111110] hover:text-[#B05A2F] transition-colors group" href="#">
                        Download Full Resume
                        <iconify-icon className="group-hover:-translate-y-0.5 transition-transform" icon="solar:download-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="bg-white w-full border-[#D9D9D6] border-t pt-32 pb-32" id="contact">
<div className="max-w-2xl mx-auto px-8 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-[#F7F7F5] border border-[#D9D9D6] rounded-full flex items-center justify-center mb-6">
<iconify-icon className="text-[#111110]" height="24" icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-[#111110] mb-4">Let's build something concrete.</h2>
<p className="text-base text-gray-600 mb-10 leading-relaxed">
                Currently open for new opportunities. Whether you have a specific project in mind or just want to discuss product architecture, my inbox is open.
            </p>
<a className="bg-[#B05A2F] text-white px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-[#9c4f29] transition-all shadow-sm hover:scale-[1.02] active:scale-100" href="mailto:hello@example.com">
                hello@designer.com
            </a>
<div className="mt-12 flex items-center gap-6">
<a className="text-gray-400 hover:text-[#111110] transition-colors flex items-center gap-2 text-sm font-medium" href="#">
<iconify-icon height="20" icon="solar:link-linear" width="20"></iconify-icon>
                    LinkedIn
                </a>
<a className="text-gray-400 hover:text-[#111110] transition-colors flex items-center gap-2 text-sm font-medium" href="#">
<iconify-icon height="20" icon="solar:code-linear" width="20"></iconify-icon>
                    GitHub
                </a>
</div>
</div>
</section>

<footer className="w-full bg-white pb-8">
<div className="max-w-[1440px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
<p>© 2024 Product Designer. All rights reserved.</p>
<p className="mt-2 md:mt-0">Designed systematically.</p>
</div>
</footer>

    </>
  );
}
