import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        document.addEventListener("DOMContentLoaded", () => {
            const timelineSection = document.getElementById('how-we-work-timeline');
            if (!timelineSection) return;
            
            const steps = timelineSection.querySelectorAll('.timeline-step');
            const progressLine = document.getElementById('timeline-progress');

            const updateTimeline = () => {
                const viewportHeight = window.innerHeight;
                // Trigger animation when step reaches roughly 65% down the viewport
                const triggerPoint = viewportHeight * 0.65;
                let activeIndex = -1;

                steps.forEach((step, index) => {
                    const rect = step.getBoundingClientRect();
                    if (rect.top < triggerPoint) {
                        activeIndex = index;
                    }
                });

                steps.forEach((step, index) => {
                    const circle = step.querySelector('.timeline-circle');
                    const content = step.querySelector('.timeline-content');
                    
                    if (index <= activeIndex) {
                        // Active state
                        circle.classList.remove('bg-slate-100', 'border-slate-200', 'text-slate-400', 'scale-100');
                        circle.classList.add('bg-blue-600', 'border-blue-600', 'text-white', 'shadow-[0_0_20px_rgba(37,99,235,0.3)]', 'scale-110');
                        content.classList.remove('opacity-40', 'translate-y-4');
                        content.classList.add('opacity-100', 'translate-y-0');
                    } else {
                        // Inactive state
                        circle.classList.add('bg-slate-100', 'border-slate-200', 'text-slate-400', 'scale-100');
                        circle.classList.remove('bg-blue-600', 'border-blue-600', 'text-white', 'shadow-[0_0_20px_rgba(37,99,235,0.3)]', 'scale-110');
                        content.classList.add('opacity-40', 'translate-y-4');
                        content.classList.remove('opacity-100', 'translate-y-0');
                    }
                });

                // Calculate progress line dynamic height
                if (activeIndex >= 0) {
                    const activeStep = steps[activeIndex];
                    const activeCircle = activeStep.querySelector('.timeline-circle');
                    const firstCircle = steps[0].querySelector('.timeline-circle');
                    
                    const firstCenter = firstCircle.getBoundingClientRect().top + (firstCircle.getBoundingClientRect().height / 2);
                    const activeCenter = activeCircle.getBoundingClientRect().top + (activeCircle.getBoundingClientRect().height / 2);
                    
                    let height = activeCenter - firstCenter;
                    
                    // Clamp max height
                    const lastCircle = steps[steps.length - 1].querySelector('.timeline-circle');
                    const lastCenter = lastCircle.getBoundingClientRect().top + (lastCircle.getBoundingClientRect().height / 2);
                    const maxHeight = lastCenter - firstCenter;
                    
                    progressLine.style.height = `${Math.min(Math.max(0, height), maxHeight)}px`;
                } else {
                    progressLine.style.height = '0px';
                }
            };

            window.addEventListener('scroll', updateTimeline, { passive: true });
            window.addEventListener('resize', updateTimeline, { passive: true });
            setTimeout(updateTimeline, 100);
        });
    


        document.addEventListener("DOMContentLoaded", () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8', '-translate-y-4');
                        observer.unobserve(entry.target);
                    }
                });
            }, { 
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            });

            document.querySelectorAll('.scroll-anim').forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ty3N7ZPaIU7KlWixQFIc"></div>

</div></div>

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 scroll-anim transition-all duration-700 ease-out">
<div className="sm:px-6 lg:px-8 flex h-20 max-w-7xl mr-auto ml-auto pr-4 pl-4 items-center">
<a className="flex items-center" href="#">
<img alt="Holmes Plumbing" className="w-auto h-12 object-contain pt-0 pb-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7e238935-b7ab-4c73-84be-a4a5acb14377_1600w.png"/>
</a>
</div>
</header>

<section className="sm:pt-40 sm:pb-24 lg:pb-32 sm:px-6 lg:px-8 flex flex-col overflow-hidden scroll-anim transition-all duration-700 ease-out delay-100 text-center max-w-7xl mr-auto ml-auto pt-32 pr-4 pb-20 pl-4 relative items-center">

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/60 to-slate-50 pointer-events-none"></div>
<div className="z-10 flex flex-col relative items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-normal text-blue-700 mb-8 tracking-tight shadow-sm">
<div className="flex gap-0.5 text-yellow-500">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
                Consistent 5-Star Reviews
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tighter text-slate-900 max-w-3xl leading-[1.1]">
                Reliable Plumbing Done Right the First Time.
            </h1>
<p className="leading-relaxed sm:text-xl text-lg font-light text-slate-950 max-w-2xl mt-6">
                Fast, professional plumbing services for homeowners and property managers. Clear communication, expert repairs, and immediate response when you need it most.
            </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center w-full">

<a className="hover:scale-[1.02] transition-all flex text-base font-normal text-white bg-blue-600 rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-[0px_0px_0px_1px_rgba(37,99,235,0.06),0px_1px_1px_-0.5px_rgba(37,99,235,0.06),0px_3px_3px_-1.5px_rgba(37,99,235,0.06),_0px_6px_6px_-3px_rgba(37,99,235,0.06),0px_12px_12px_-6px_rgba(37,99,235,0.06),0px_24px_24px_-12px_rgba(37,99,235,0.06)] gap-x-2.5 items-center w-full sm:w-auto justify-center" href="tel:6199859211" style={{boxShadow: '0 18px 35px rgba(37, 99, 235, 0.25), 0 0 0 1px rgba(37, 99, 235, 1)', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.1))', -BorderRadiusBefore: '9999px'}}>
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
<span className="tracking-tight">Call Now: 619-985-9211</span>
</a>
</div>
<p className="mt-6 text-xs text-slate-400 font-normal tracking-tight">
                Mon–Sat: 8:00 AM – 6:00 PM • Fast Response
            </p>
</div>
</section>

<section className="py-20 sm:py-24 bg-white border-t border-slate-200/50 scroll-anim transition-all duration-700 ease-out">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900">Comprehensive Plumbing Solutions</h2>
<p className="mt-4 text-base text-slate-500">Expert diagnostics and lasting repairs tailored to your property's specific needs.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl border border-slate-200/60 bg-slate-50/50 hover:bg-blue-50/30 transition-colors flex flex-col items-start group hover:border-blue-100">
<div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
<iconify-icon className="text-blue-600 text-xl" icon="solar:waterdrop-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-900 mb-2">Leak Detection &amp; Repair</h3>
<p className="text-base text-slate-500 leading-relaxed">Pinpoint accuracy in finding hidden leaks to prevent water damage and costly utility bills.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-200/60 bg-slate-50/50 hover:bg-blue-50/30 transition-colors flex flex-col items-start group hover:border-blue-100">
<div className="flex group-hover:scale-105 transition-transform bg-blue-50 w-10 h-10 border-blue-100 border rounded-lg mb-4 shadow-sm items-center justify-center">
<iconify-icon className="text-blue-600 text-xl" icon="solar:settings-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-900 mb-2">General Plumbing Repairs</h3>
<p className="text-base text-slate-500 leading-relaxed">From faulty fixtures to running toilets, we handle everyday plumbing issues efficiently.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-200/60 bg-slate-50/50 hover:bg-blue-50/30 transition-colors flex flex-col items-start group hover:border-blue-100">
<div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
<iconify-icon className="text-blue-600 text-xl" icon="solar:arrow-down-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-900 mb-2">Drain Issues &amp; Clogs</h3>
<p className="text-base text-slate-500 leading-relaxed">Professional drain cleaning to restore proper flow and prevent severe blockages.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-200/60 bg-slate-50/50 hover:bg-blue-50/30 transition-colors flex flex-col items-start group hover:border-blue-100">
<div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
<iconify-icon className="text-blue-600 text-xl" icon="solar:buildings-2-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-900 mb-2">Property Management</h3>
<p className="text-base text-slate-500 leading-relaxed">Reliable partnerships for property managers needing prompt, tenant-friendly service.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-200/60 bg-slate-50/50 hover:bg-blue-50/30 transition-colors flex flex-col items-start group sm:col-span-2 lg:col-span-2 hover:border-blue-100">
<div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
<iconify-icon className="text-blue-600 text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-900 mb-2">Maintenance &amp; Troubleshooting</h3>
<p className="text-base text-slate-500 leading-relaxed max-w-xl">Proactive system checks and expert troubleshooting to identify potential hazards before they become expensive emergencies. Keeping your plumbing infrastructure healthy year-round.</p>
</div>
</div>
</div>
</section>

<section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200/50 scroll-anim transition-all duration-700 ease-out overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

<div className="flex-1 max-w-2xl lg:max-w-none">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/50 border border-slate-300/50 text-xs font-medium text-slate-700 mb-6 tracking-tight shadow-sm">
<iconify-icon className="text-sm" icon="solar:users-group-rounded-linear"></iconify-icon>
                        Local &amp; Trusted
                    </div>
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 mb-6">About Holmes Plumbing</h2>
<div className="space-y-4 text-base sm:text-lg text-slate-500 font-light leading-relaxed">
<p className="">
                            We are a locally owned and operated plumbing company dedicated to serving our community with honesty and expertise. With over a decade of experience, we've built our reputation on doing the job right the first time.
                        </p>
<p className="">
                            Our team understands that plumbing issues can be stressful. That's why we focus on clear communication, arriving on time, and treating your home with the utmost respect. From quick repairs to complex installations, you can count on us for reliable, long-lasting solutions.
                        </p>
</div>
<div className="mt-8 flex items-center gap-4">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-slate-50 bg-slate-200 overflow-hidden shadow-sm">
<img alt="Team member" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-slate-50 bg-slate-200 overflow-hidden shadow-sm">
<img alt="Team member" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900 tracking-tight">Dedicated Professionals</span>
<span className="text-xs text-slate-500">Locally trusted team</span>
</div>
</div>
</div>

<div className="w-full sm:w-[320px] md:w-[360px] shrink-0 relative mt-6 lg:mt-0">
<div className="rounded-2xl overflow-hidden border border-slate-200/60 bg-white p-2 shadow-sm">
<div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 relative group">
<img alt="Plumbing Professional at Work" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/72d84100-cbd8-4de8-9963-f7ec255854e0_800w.png"/>
<div className="absolute inset-0 border border-black/5 rounded-xl pointer-events-none"></div>
</div>
</div>

<div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white/90 backdrop-blur-md border border-slate-200/80 px-4 py-3 rounded-xl shadow-sm flex items-center gap-3">
<div className="w-8 h-8 bg-blue-50 rounded-md flex items-center justify-center text-blue-600 border border-blue-100">
<iconify-icon className="text-lg" icon="solar:medal-ribbon-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="leading-none text-sm font-medium text-slate-900 tracking-tight">20+ Years</span>
<span className="text-[10px] text-slate-500 mt-1 font-medium uppercase tracking-wider">Experience</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 sm:py-32 bg-slate-50 overflow-hidden border-t border-slate-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 sm:mb-24 scroll-anim transition-all duration-700 ease-out">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900">How We Work</h2>
<p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">A straightforward process designed to get your plumbing fixed fast.</p>
</div>
<div className="max-w-3xl mx-auto relative pt-4 pb-4" id="how-we-work-timeline">

<div className="absolute left-[23px] sm:left-[31px] top-[28px] sm:top-[36px] bottom-[28px] sm:bottom-[36px] w-[2px] bg-slate-200"></div>

<div className="absolute left-[23px] sm:left-[31px] top-[28px] sm:top-[36px] w-[2px] bg-blue-600 transition-all duration-700 ease-out" id="timeline-progress" style={{height: '0px'}}></div>

<div className="timeline-step relative flex items-start gap-6 sm:gap-10 mb-16 sm:mb-20 last:mb-0 group">
<div className="timeline-circle relative z-10 shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 flex items-center justify-center font-medium text-lg sm:text-xl transition-all duration-500 ease-out">1</div>
<div className="timeline-content pt-1 sm:pt-3 transition-all duration-500 ease-out">
<h3 className="text-xl sm:text-2xl font-medium tracking-tight text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Call Holmes Plumbing</h3>
<p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl">Skip the confusing forms. Call us directly to speak with a professional immediately. We're ready to diagnose the problem over the phone.</p>
</div>
</div>

<div className="timeline-step relative flex items-start gap-6 sm:gap-10 mb-16 sm:mb-20 last:mb-0 group">
<div className="timeline-circle relative z-10 shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center text-slate-400 font-medium text-lg sm:text-xl transition-all duration-500 ease-out scale-100">2</div>
<div className="timeline-content pt-1 sm:pt-3 opacity-40 transition-all duration-500 ease-out translate-y-4">
<h3 className="text-xl sm:text-2xl font-medium tracking-tight text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Get Clear Answers</h3>
<p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl">We assess the issue, explain the remedy clearly, and provide honest recommendations and pricing before any work begins.</p>
</div>
</div>

<div className="timeline-step relative flex items-start gap-6 sm:gap-10 mb-16 sm:mb-20 last:mb-0 group">
<div className="timeline-circle relative z-10 shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center text-slate-400 font-medium text-lg sm:text-xl transition-all duration-500 ease-out scale-100">3</div>
<div className="timeline-content pt-1 sm:pt-3 opacity-40 transition-all duration-500 ease-out translate-y-4">
<h3 className="text-xl sm:text-2xl font-medium tracking-tight text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Get It Fixed Right</h3>
<p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl">Our experts work efficiently to resolve the problem with lasting, high-quality results. We clean up our workspace and ensure your satisfaction.</p>
</div>
</div>
</div>
<div className="mt-20 flex justify-center scroll-anim transition-all duration-700 ease-out">
<a className="hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all flex text-base font-medium text-slate-700 bg-white rounded-full pt-3 pr-8 pb-3 pl-8 shadow-sm border border-slate-200 gap-x-2 items-center" href="tel:6199859211">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
<span className="tracking-tight">Speak Directly With a Professional Today</span>
</a>
</div>
</div>
</section>

<section className="py-12 sm:py-16 bg-white border-t border-slate-200/50 scroll-anim transition-all duration-700 ease-out">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-5">

<div className="aspect-square rounded-md sm:rounded-lg overflow-hidden bg-slate-100 border border-slate-200/50 shadow-sm">
<img alt="Plumbing installation" className="hover:scale-105 transition-transform duration-500 w-full h-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/988e444c-5d8b-4707-bc26-a7f17cdf8aba_320w.png"/>
</div>

<div className="aspect-square rounded-md sm:rounded-lg overflow-hidden bg-slate-100 border border-slate-200/50 shadow-sm">
<img alt="Modern faucet installation" className="hover:scale-105 transition-transform duration-500 w-full h-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4dd2a6f9-4c53-42b1-ae06-53a1dc4f0066_320w.png"/>
</div>

<div className="aspect-square rounded-md sm:rounded-lg overflow-hidden bg-slate-100 border border-slate-200/50 shadow-sm">
<img alt="Under sink repair" className="hover:scale-105 transition-transform duration-500 w-full h-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bcd3697d-db5c-418a-b3a1-23600d170914_320w.png"/>
</div>

<div className="aspect-square rounded-md sm:rounded-lg overflow-hidden bg-slate-100 border border-slate-200/50 shadow-sm">
<img alt="Professional plumbing tools" className="hover:scale-105 transition-transform duration-500 w-full h-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fab5a3a1-c30c-4540-a73e-d9a716509138_320w.png"/>
</div>

<div className="aspect-square rounded-md sm:rounded-lg overflow-hidden bg-slate-100 border border-slate-200/50 shadow-sm">
<img alt="Clean water flow" className="hover:scale-105 transition-transform duration-500 w-full h-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/80b48362-03ce-4e6f-9505-fea1bc52d946_320w.png"/>
</div>

<div className="aspect-square rounded-md sm:rounded-lg overflow-hidden bg-slate-100 border border-slate-200/50 shadow-sm">
<img alt="Plumber at work" className="hover:scale-105 transition-transform duration-500 w-full h-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e3953518-e92c-4be5-b5a1-dd81f87df8cf_320w.png"/>
</div>
</div>
</div>
</section>

<section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200/50 scroll-anim transition-all duration-700 ease-out overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
<div className="text-center">
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900">Trusted by Locals</h2>
<p className="mt-4 text-base text-slate-500">See why homeowners and property managers rely on us.</p>
</div>
</div>
<div className="relative w-full max-w-[100vw] mx-auto overflow-hidden py-4" style={{touchAction: 'pan-y', WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'}}>
<div className="flex gap-6 group">

<div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused] shrink-0">

<div className="w-[320px] sm:w-[400px] p-8 rounded-2xl bg-white border border-slate-200/80 flex flex-col justify-between shadow-sm shrink-0 transition-all duration-300 hover:shadow-md hover:border-slate-300">
<div>
<div className="flex gap-1 text-yellow-500 mb-6">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-slate-700 leading-relaxed italic">
                                "So grateful to Holmes Plumbing for another job well done! Josh and Eric came over quickly to fix our plumbing leak, they are experts in their field and are wonderful to work with."
                            </p>
</div>
<div className="mt-8 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-sm font-medium text-blue-700 border border-blue-100">SM</div>
<div className="flex flex-col">
<span className="text-sm font-medium tracking-tight text-slate-900">Sarah M.</span>
<span className="text-xs font-normal text-slate-500">Homeowner</span>
</div>
</div>
</div>

<div className="w-[320px] sm:w-[400px] p-8 rounded-2xl bg-white border border-slate-200/80 flex flex-col justify-between shadow-sm shrink-0 transition-all duration-300 hover:shadow-md hover:border-slate-300">
<div>
<div className="flex gap-1 text-yellow-500 mb-6">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-slate-700 leading-relaxed italic">
                                "Our property manager hires Holmes Plumbing and I understand why. Communicates well, on time and very professional. They explain the issues clearly and work efficiently."
                            </p>
</div>
<div className="mt-8 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-sm font-medium text-blue-700 border border-blue-100">DK</div>
<div className="flex flex-col">
<span className="text-sm font-medium tracking-tight text-slate-900">David K.</span>
<span className="text-xs font-normal text-slate-500">Tenant</span>
</div>
</div>
</div>

<div className="w-[320px] sm:w-[400px] p-8 rounded-2xl bg-white border border-slate-200/80 flex flex-col justify-between shadow-sm shrink-0 transition-all duration-300 hover:shadow-md hover:border-slate-300">
<div>
<div className="flex gap-1 text-yellow-500 mb-6">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-slate-700 leading-relaxed italic">
                                "Fast, reliable, and reasonably priced. The plumber was extremely polite and cleaned up perfectly after the repair. We won't be using anyone else for our business."
                            </p>
</div>
<div className="mt-8 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-sm font-medium text-blue-700 border border-blue-100">ER</div>
<div className="flex flex-col">
<span className="text-sm font-medium tracking-tight text-slate-900">Elena R.</span>
<span className="text-xs font-normal text-slate-500">Restaurant Owner</span>
</div>
</div>
</div>
</div>

<div aria-hidden="true" className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused] shrink-0">

<div className="w-[320px] sm:w-[400px] p-8 rounded-2xl bg-white border border-slate-200/80 flex flex-col justify-between shadow-sm shrink-0 transition-all duration-300 hover:shadow-md hover:border-slate-300">
<div>
<div className="flex gap-1 text-yellow-500 mb-6">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-slate-700 leading-relaxed italic">
                                "So grateful to Holmes Plumbing for another job well done! Josh and Eric came over quickly to fix our plumbing leak, they are experts in their field and are wonderful to work with."
                            </p>
</div>
<div className="mt-8 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-sm font-medium text-blue-700 border border-blue-100">SM</div>
<div className="flex flex-col">
<span className="text-sm font-medium tracking-tight text-slate-900">Sarah M.</span>
<span className="text-xs font-normal text-slate-500">Homeowner</span>
</div>
</div>
</div>

<div className="w-[320px] sm:w-[400px] p-8 rounded-2xl bg-white border border-slate-200/80 flex flex-col justify-between shadow-sm shrink-0 transition-all duration-300 hover:shadow-md hover:border-slate-300">
<div>
<div className="flex gap-1 text-yellow-500 mb-6">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-slate-700 leading-relaxed italic">
                                "Our property manager hires Holmes Plumbing and I understand why. Communicates well, on time and very professional. They explain the issues clearly and work efficiently."
                            </p>
</div>
<div className="mt-8 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-sm font-medium text-blue-700 border border-blue-100">DK</div>
<div className="flex flex-col">
<span className="text-sm font-medium tracking-tight text-slate-900">David K.</span>
<span className="text-xs font-normal text-slate-500">Tenant</span>
</div>
</div>
</div>

<div className="w-[320px] sm:w-[400px] p-8 rounded-2xl bg-white border border-slate-200/80 flex flex-col justify-between shadow-sm shrink-0 transition-all duration-300 hover:shadow-md hover:border-slate-300">
<div>
<div className="flex gap-1 text-yellow-500 mb-6">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-slate-700 leading-relaxed italic">
                                "Fast, reliable, and reasonably priced. The plumber was extremely polite and cleaned up perfectly after the repair. We won't be using anyone else for our business."
                            </p>
</div>
<div className="mt-8 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-sm font-medium text-blue-700 border border-blue-100">ER</div>
<div className="flex flex-col">
<span className="text-sm font-medium tracking-tight text-slate-900">Elena R.</span>
<span className="text-xs font-normal text-slate-500">Restaurant Owner</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 sm:py-24 bg-white border-t border-slate-200/50 scroll-anim transition-all duration-700 ease-out">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900">Frequently Asked Questions</h2>
</div>
<div className="divide-y divide-slate-200 border-y border-slate-200">

<details className="group [&amp;_summary::-webkit-details-marker]:hidden pt-5 pb-5">
<summary className="flex cursor-pointer list-none font-medium text-slate-900 tracking-tight items-center justify-between">
                        What is the estimated cost of service?
                        <span className="ml-6 flex-shrink-0 transition-transform duration-300 group-open:-rotate-180">
<iconify-icon className="text-xl text-slate-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-base text-slate-500 font-normal leading-relaxed">
                        To provide you with an accurate quote, we first need to perform a comprehensive diagnostic. This ensures we identify the exact cause and only bill for the necessary repairs.
                    </p>
</details>

<details className="group py-5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer font-medium text-slate-900 tracking-tight list-none">
                        Do you work with property managers?
                        <span className="ml-6 flex-shrink-0 transition-transform duration-300 group-open:-rotate-180">
<iconify-icon className="text-xl text-slate-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-base text-slate-500 font-normal leading-relaxed">
                        Yes, we have reliable partnerships with property managers and provide prompt, tenant-friendly services.
                    </p>
</details>

<details className="group py-5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer font-medium text-slate-900 tracking-tight list-none">
                        How quickly can you come out?
                        <span className="ml-6 flex-shrink-0 transition-transform duration-300 group-open:-rotate-180">
<iconify-icon className="text-xl text-slate-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-base text-slate-500 font-normal leading-relaxed">
                        We prioritize fast responses. Call us directly to check our current availability and schedule an immediate assessment.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200/50 scroll-anim transition-all duration-700 ease-out">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
<div className="text-center">
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900">Our Location</h2>
<p className="mt-4 text-base text-slate-500">Find us easily. We're proud to serve our local community.</p>
</div>
</div>
<div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
<div className="w-full sm:rounded-2xl overflow-hidden border-y sm:border border-slate-200/60 shadow-sm h-[400px] sm:h-[500px] relative bg-slate-200 group">

<iframe allowfullscreen="" className="absolute inset-0 w-full h-full" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=San+Diego,+CA&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{border: '0'}} width="100%">
</iframe>

<div className="absolute inset-0 bg-slate-900/5 pointer-events-none transition-colors duration-500 group-hover:bg-transparent"></div>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex justify-center w-full px-4 pointer-events-none">
<a className="pointer-events-auto hover:bg-white transition-all flex text-sm sm:text-base font-medium text-slate-800 bg-white/95 backdrop-blur-sm border border-slate-200/80 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] gap-x-2.5 items-center hover:text-blue-700 hover:border-blue-200 hover:-translate-y-1" href="https://maps.app.goo.gl/h36hv9aV1MXkLxnb7" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-xl text-blue-600" icon="solar:map-point-linear"></iconify-icon>
<span className="tracking-tight">Open in Google Maps</span>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 text-white relative overflow-hidden scroll-anim transition-all duration-700 ease-out">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tighter mb-6">Need Plumbing Help Now?</h2>
<p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light">
                Don't wait for the problem to get worse. Speak directly with our team and get your plumbing fixed by professionals today.
            </p>
<div className="flex justify-center">
<a className="hover:bg-blue-50 transition-all flex text-base font-normal text-blue-700 bg-white rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-xl gap-x-2 items-center" href="tel:6199859211" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.5))', -BorderRadiusBefore: '9999px'}}>
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
<span className="tracking-tight">Call Now for Fast, Reliable Plumbing</span>
</a>
</div>
<p className="mt-6 text-sm text-slate-400 font-normal tracking-tight">
                Directly dial: <a className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-4 decoration-blue-400/50" href="tel:6199859211">619-985-9211</a>
</p>
</div>
</section>

<footer className="bg-white py-12 border-t border-slate-200 mt-auto scroll-anim transition-opacity duration-1000">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-blue-600 text-white rounded-md flex items-center justify-center font-medium tracking-tighter text-sm shadow-sm">
                    HP
                </div>
<div className="flex flex-col">
<span className="font-medium tracking-tight text-base text-slate-900">Holmes Plumbing</span>
<span className="text-sm text-slate-500 font-normal">Professional &amp; Reliable</span>
</div>
</div>
<div className="flex flex-col items-center md:items-end gap-1 text-base text-slate-500">
<a className="font-normal text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-1" href="tel:6199859211">
<iconify-icon className="text-base" icon="solar:phone-linear"></iconify-icon>
                    619-985-9211
                </a>
<span className="text-sm">Mon–Sat: 8:00 AM – 6:00 PM | Closed Sunday</span>
</div>
</div>
</footer>





    </>
  );
}
