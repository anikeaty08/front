import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Element-by-element Scroll Animation
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('is-visible');
                        }, index * 50); 
                        
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const scrollElements = document.querySelectorAll('.reveal-on-scroll');
            scrollElements.forEach((el) => observer.observe(el));
        });

        // Testimonial Rotation
        let currentIndex = 0;
        const cards = document.querySelectorAll('.testimonial-card');
        const totalCards = cards.length;

        function updateClasses() {
            cards.forEach((card, index) => {
                card.classList.remove('active');
                
                if (index === currentIndex) {
                    card.classList.add('active');
                }
            });
        }

        window.rotateTestimonial = (direction) => {
            if (direction === 'next') {
                currentIndex = (currentIndex + 1) % totalCards;
            } else {
                currentIndex = (currentIndex - 1 + totalCards) % totalCards;
            }
            updateClasses();
        };

        // Auto rotate
        setInterval(() => {
            rotateTestimonial('next');
        }, 6000);

        updateClasses();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full z-0"><iframe frameborder="0" height="100%" src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/" width="100%"></iframe></div></div>

<div className="vertical-lines">
<div></div>
<div></div>
<div></div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-white/[0.03] blur-[100px] rounded-full"></div>
</div>

<nav className="fixed z-50 backdrop-blur-xl border-b bg-[#020202]/80 transition-all duration-300 w-full top-0 border-white/5">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer z-10">
<div className="relative w-8 h-8 flex items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:trash-bin-trash-linear" data-icon-replaced="true" data-icon-set="lucide" data-lucide="truck" data-strokeWidth="1.5" data-width="24" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<span className="font-semibold text-slate-50 tracking-tight font-sans" style={{}}>Triple R Contractors</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium z-10 text-emerald-400" style={{}}>
<a className="transition-colors hover:text-white font-sans" href="#services" style={{}}>Services</a>
<a className="transition-colors hover:text-white font-sans" href="#gallery" style={{}}>Work</a>
<a className="transition-colors hover:text-white font-sans" href="#pricing" style={{}}>Pricing</a>
</div>
<a className="hidden md:flex items-center btn-gradient-border group z-10" href="#contact">
<div className="btn-inner group-hover:bg-emerald-900 transition-colors text-xs font-semibold text-white tracking-wide bg-black pt-1.5 pr-4 pb-1.5 pl-4" onclick="window.location.href='https://triplerjunkremoval.com/'" role="button">
                    Get a Quote
                </div>
</a>
<button className="md:hidden z-10 text-white" style={{}}>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:hamburger-menu-linear" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7H4m16 5H4m16 5H4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
</button>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-6 overflow-hidden">
<div className="relative z-10 max-w-4xl mx-auto text-center">

<div className="clip-animate flex justify-center mb-10">
<div className="inline-flex rounded-full border backdrop-blur-md px-3 py-1 border-white/10 bg-white/5">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--solar text-white" data-icon="solar:star-shine-linear" data-width="14" height="14" role="img" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10.577 8.704C11.21 7.568 11.527 7 12 7s.79.568 1.423 1.704l.164.294c.18.323.27.484.41.59c.14.107.316.147.665.226l.318.072c1.23.278 1.845.417 1.991.888c.147.47-.273.96-1.111 1.941l-.217.254c-.238.278-.357.418-.41.59c-.055.172-.037.358 0 .73l.032.338c.127 1.308.19 1.962-.193 2.253c-.383.29-.958.026-2.11-.504l-.298-.138c-.327-.15-.49-.226-.664-.226c-.173 0-.337.076-.664.226l-.298.138c-1.152.53-1.727.795-2.11.504c-.383-.29-.32-.945-.193-2.253l.032-.338c.037-.372.055-.558 0-.73c-.053-.172-.172-.312-.41-.59l-.217-.254c-.838-.98-1.258-1.47-1.111-1.941c.146-.47.76-.61 1.99-.888l.319-.072c.35-.08.524-.119.665-.225c.14-.107.23-.268.41-.59z"></path><path d="M12 2v2m0 16v2M2 12h2m16 0h2M6 18l.343-.343M17.657 6.343L18 6m0 12l-.343-.343M6.343 6.343L6 6" strokeLinecap="round"></path></g></svg>
<span className="text-xs font-medium tracking-wide uppercase text-emerald-300 font-sans" style={{}}>Premier Junk Removal</span>
</div>
</div>
</div>

<h1 className="clip-animate delay-100 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter mb-8 leading-[1.05] drop-shadow-2xl">
<span className="text-gradient font-newsreader font-light" style={{}}>Space Reclaimed.</span><br/>
<span className="text-emerald-600 font-newsreader font-light" style={{}}>Clutter Gone.</span>
</h1>

<p className="clip-animate delay-200 md:text-xl leading-relaxed text-lg font-normal text-emerald-400 max-w-xl mr-auto mb-12 ml-auto font-sans" style={{}}>Professional junk removal service for homes and businesses. We handle the heavy lifting at an affordable price so you can enjoy the freedom of space.</p>

<div className="clip-animate delay-300 flex flex-col sm:flex-row items-center justify-center gap-5">
<a className="group btn-gradient-border p-[1px] cursor-pointer" href="#pricing">
<div className="btn-inner group-hover:shadow-[0_0_40px_-5px_#10b981] group-hover:bg-emerald-100 transition-all duration-300 text-sm font-medium text-black bg-white pt-4 pr-8 pb-4 pl-8 shadow-[0_0_30px_-5px_#10b981]">
                        Schedule Pickup
                        <svg aria-hidden="true" className="iconify ml-2 iconify--solar" data-icon="solar:arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
</a>
<a className="group btn-gradient-border p-[1px] cursor-pointer" href="#services">
<div className="btn-inner px-8 py-4 text-sm font-medium group-hover:bg-white/10 transition-colors bg-black text-white font-sans" style={{}}>
                        View Services
                    </div>
</a>
</div>
</div>

<div className="clip-animate delay-500 mt-24 relative w-full max-w-5xl mx-auto h-[300px] md:h-[500px] rounded-3xl z-10 p-[1px] bg-gradient-to-b to-transparent from-white/20">
<div className="w-full h-full rounded-3xl overflow-hidden relative group bg-black">
<img alt="Clean Room" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-105 transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4ea2a69c-dc9e-4f30-88fb-214a6391ba65_1600w.png"/>
<div className="bg-gradient-to-t from-black/0 via-black/10 to-black/0 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute bottom-8 left-8 flex flex-col md:flex-row gap-4">
<div className="backdrop-blur-md border px-4 py-3 rounded-xl flex items-center gap-3 shadow-lg bg-white/5 border-white/10">
<svg aria-hidden="true" className="iconify iconify--solar text-white" data-icon="solar:check-circle-linear" data-width="18" height="18" role="img" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="m8.5 12.5l2 2l5-5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
<span className="text-xs font-medium tracking-wide font-sans" style={{}}>One Call, We Haul</span>
</div>
<div className="backdrop-blur-md border px-4 py-3 rounded-xl flex items-center gap-3 shadow-lg bg-white/5 border-white/10">
<svg aria-hidden="true" className="iconify iconify--solar text-white" data-icon="solar:clock-circle-linear" data-width="18" height="18" role="img" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l2.5 2.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
<span className="text-xs font-medium tracking-wide font-sans" style={{}}>Same-Day Service</span>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 pt-32 pr-6 pb-32 pl-6 relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="max-w-2xl mb-20">
<h2 className="reveal-on-scroll md:text-5xl text-3xl text-white tracking-tight mb-6 font-newsreader font-light" style={{}}>Why choose Triple R?</h2>
<p className="reveal-on-scroll text-lg leading-relaxed text-emerald-400 font-sans" style={{}}>We combine speed, sustainability, and transparency to deliver the best junk removal experience in the industry.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6">

<div className="reveal-on-scroll border-gradient rounded-3xl group">
<div className="border-gradient-content p-8">
<div className="w-12 h-12 rounded-full border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 bg-white/5 border-white/5">
<svg aria-hidden="true" className="iconify iconify--solar text-white" data-icon="solar:leaf-linear" data-width="24" height="24" role="img" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 9l4.5-4.5m-4.5 10L18.5 8M12 19.5l7.5-7.5M12 22c4.418 0 8-3.646 8-8.143c0-4.462-2.553-9.67-6.537-11.531A3.45 3.45 0 0 0 12 2m0 20c-4.418 0-8-3.646-8-8.143c0-4.462 2.553-9.67 6.537-11.531A3.45 3.45 0 0 1 12 2m0 20V2" fill="none" stroke="currentColor" strokeWidth="1.5"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white font-sans" style={{}}>Eco-Friendly</h3>
<p className="leading-relaxed text-sm text-emerald-400 font-sans" style={{}}>We donate and recycle up to 70% of items. Minimizing landfill waste is our priority.</p>
</div>
</div>

<div className="reveal-on-scroll border-gradient rounded-3xl group">
<div className="border-gradient-content p-8">
<div className="w-12 h-12 rounded-full border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 bg-white/5 border-white/5">
<svg aria-hidden="true" className="iconify iconify--solar text-white" data-icon="solar:stopwatch-linear" data-width="24" height="24" role="img" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 13a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"></path><path d="M12 13V9" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 2h4" strokeLinecap="round"></path></g></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white font-sans" style={{}}>Fast Turnaround</h3>
<p className="leading-relaxed text-sm text-emerald-400 font-sans" style={{}}>Same-day and next-day appointments available. We value your time.</p>
</div>
</div>

<div className="reveal-on-scroll border-gradient rounded-3xl group">
<div className="border-gradient-content p-8">
<div className="w-12 h-12 rounded-full border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 bg-white/5 border-white/5">
<svg aria-hidden="true" className="iconify iconify--solar text-white" data-icon="solar:wallet-linear" data-width="24" height="24" role="img" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor"><path d="M6 8h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M20.833 9h-2.602C16.446 9 15 10.343 15 12s1.447 3 3.23 3h2.603c.084 0 .125 0 .16-.002c.54-.033.97-.432 1.005-.933c.002-.032.002-.071.002-.148v-3.834c0-.077 0-.116-.002-.148c-.036-.501-.465-.9-1.005-.933C20.959 9 20.918 9 20.834 9Z" strokeWidth="1.5"></path><path d="M20.965 9c-.078-1.872-.328-3.02-1.137-3.828C18.657 4 16.771 4 13 4h-3C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h3c3.771 0 5.657 0 6.828-1.172c.809-.808 1.06-1.956 1.137-3.828" strokeWidth="1.5"></path><path d="M17.991 12h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></g></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white font-sans" style={{}}>Transparent Pricing</h3>
<p className="leading-relaxed text-sm text-emerald-400 font-sans" style={{}}>Volume-based pricing with no hidden fees. You know exactly what you pay upfront.</p>
</div>
</div>

<div className="reveal-on-scroll md:col-span-2 border-gradient rounded-3xl group">
<div className="border-gradient-content p-8 flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<div className="w-12 h-12 rounded-full border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 bg-white/5 border-white/5">
<svg aria-hidden="true" className="iconify iconify--solar text-white" data-icon="solar:sofa-linear" data-width="24" height="24" role="img" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5.556 18h12.888A3.556 3.556 0 0 0 22 14.444V12a2 2 0 1 0-4 0v1.2a.8.8 0 0 1-.8.8H6.8a.8.8 0 0 1-.8-.8V12a2 2 0 1 0-4 0v2.444A3.556 3.556 0 0 0 5.556 18Z"></path><path d="M20 10c0-.93 0-1.394-.077-1.78a4 4 0 0 0-3.143-3.143C16.394 5 15.93 5 15 5H9c-.93 0-1.394 0-1.78.077A4 4 0 0 0 4.077 8.22C4 8.606 4 9.07 4 10"></path><path d="M20 19v-1M4 19v-1" strokeLinecap="round"></path></g></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white font-sans" style={{}}>We Take Almost Everything</h3>
<p className="leading-relaxed text-sm mb-8 text-emerald-400 font-sans" style={{}}>Furniture, appliances, construction debris, yard waste, and more. If we can lift it safely, we can take it.</p>
<a className="text-sm font-medium border-b pb-1 transition-colors inline-flex items-center gap-1 group/link text-white border-white/30 hover:border-white font-sans" href="#gallery" style={{}}>
                                See our work <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</a>
</div>
<div className="w-full md:w-1/2 h-48 md:h-full rounded-xl overflow-hidden relative border border-white/5">
<img alt="Furniture Removal" className="absolute inset-0 w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/276e2d56-e6ef-491d-b4d8-a2c9f056c0d7_800w.jpg"/>
</div>
</div>
</div>

<div className="reveal-on-scroll border-gradient rounded-3xl group">
<div className="border-gradient-content p-8 flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-full border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 bg-white/5 border-white/5">
<svg aria-hidden="true" className="iconify iconify--solar text-white" data-icon="solar:shield-check-linear" data-width="24" height="24" role="img" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991z"></path><path d="m9.5 12.4l1.429 1.6l3.571-4" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white font-sans" style={{}}>Fully Insured</h3>
<p className="leading-relaxed text-sm text-emerald-400 font-sans" style={{}}>We are fully licensed and insured for your peace of mind and protection.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 bg-[#020202] pt-32 pr-6 pb-32 pl-6 relative" id="gallery">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end mb-16 justify-between">
<div className="">
<h2 className="reveal-on-scroll md:text-5xl text-3xl text-white tracking-tight mb-4 font-newsreader font-light" style={{}}>Recent Projects</h2>
<p className="reveal-on-scroll text-lg text-emerald-400 font-sans" style={{}}>From chaotic clutter to pristine space.</p>
</div>
<div className="reveal-on-scroll flex gap-3 mt-6 md:mt-0">
<button className="w-10 h-10 rounded-full border flex items-center justify-center transition-all border-white/10 hover:bg-white hover:text-black">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-left-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 12H4m0 0l6-6m-6 6l6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
<button className="w-10 h-10 rounded-full border flex items-center justify-center transition-all border-white/10 hover:bg-white hover:text-black">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">

<div className="reveal-on-scroll border-gradient rounded-2xl group cursor-pointer aspect-[4/5]">
<div className="border-gradient-content rounded-2xl overflow-hidden relative">
<img alt="Garage" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d9858c7c-f5ac-4970-9d5b-d7dfdfd09923_1600w.png" style={{}}/>
<div className="bg-gradient-to-t via-transparent to-transparent from-black opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-[10px] font-bold uppercase tracking-widest mb-2 block text-white/70 font-sans" style={{}}>Residential</span>
<h3 className="text-xl font-medium text-white font-sans" style={{}}>Garage Cleanout</h3>
</div>
</div>
</div>

<div className="reveal-on-scroll border-gradient rounded-2xl group cursor-pointer aspect-[4/5]">
<div className="border-gradient-content rounded-2xl overflow-hidden relative">
<img alt="Commercial" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e17d7ee1-e0dd-456d-a190-54747753e3af_1600w.png"/>
<div className="bg-gradient-to-t via-transparent to-transparent from-black opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-[10px] font-bold uppercase tracking-widest mb-2 block text-white/70 font-sans" style={{}}>Commercial</span>
<h3 className="text-xl font-medium text-white font-sans" style={{}}>Office Renovation</h3>
</div>
</div>
</div>

<div className="reveal-on-scroll border-gradient rounded-2xl group cursor-pointer aspect-[4/5]">
<div className="border-gradient-content rounded-2xl overflow-hidden relative">
<img alt="Estate" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3ce227ce-6155-4ff4-8b12-bcf59d1fa6b7_1600w.jpg"/>
<div className="bg-gradient-to-t via-transparent to-transparent from-black opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-[10px] font-bold uppercase tracking-widest mb-2 block text-white/70 font-sans" style={{}}>Estate Services</span>
<h3 className="text-xl font-medium text-white font-sans" style={{}}>Property Clearance</h3>
</div>
</div>
</div>
</div>
</div>
</section><section className="z-10 bg-[#020202] pt-32 pr-6 pb-32 pl-6 relative" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<h2 className="reveal-on-scroll text-3xl md:text-5xl tracking-tight mb-4 text-white font-newsreader font-light" style={{}}>Transparent Pricing</h2>
<p className="reveal-on-scroll text-lg text-emerald-400 font-sans" style={{}}>Pay only for the space you fill.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-x-8 gap-y-8 items-start">

<div className="reveal-on-scroll border-gradient rounded-3xl group">
<div className="border-gradient-content pt-8 pr-8 pb-8 pl-8">
<div className="mb-6">
<svg aria-hidden="true" className="iconify text-3xl iconify--solar text-white" data-icon="solar:box-linear" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m15.578 3.382l2 1.05c2.151 1.129 3.227 1.693 3.825 2.708C22 8.154 22 9.417 22 11.942v.117c0 2.524 0 3.787-.597 4.801c-.598 1.015-1.674 1.58-3.825 2.709l-2 1.049C13.822 21.539 12.944 22 12 22s-1.822-.46-3.578-1.382l-2-1.05c-2.151-1.129-3.227-1.693-3.825-2.708C2 15.846 2 14.583 2 12.06v-.117c0-2.525 0-3.788.597-4.802c.598-1.015 1.674-1.58 3.825-2.708l2-1.05C10.178 2.461 11.056 2 12 2s1.822.46 3.578 1.382ZM21 7.5l-4 2M12 12L3 7.5m9 4.5v9.5m0-9.5l4.5-2.25l.5-.25m0 0V13m0-3.5l-9.5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
<h3 className="text-xl font-medium text-white mt-4 font-sans" style={{}}>Single Item</h3>
<p className="text-xs text-emerald-500 h-8 mt-2 font-sans" style={{}}>Perfect for a mattress, sofa, or appliance.</p>
</div>
<div className="text-3xl text-white tracking-tight mb-8 font-newsreader font-light" style={{}}>from $99</div>
<ul className="space-y-4 mb-8 text-sm text-emerald-300" style={{}}>
<li className="flex items-center gap-3 font-sans" style={{}}>
<svg aria-hidden="true" className="iconify text-neutral-500 iconify--solar" data-icon="solar:check-read-linear" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m4 12.9l3.143 3.6L15 7.5m5 .063l-8.572 9L11 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg> Curbside pickup
                            </li>
<li className="flex items-center gap-3 font-sans" style={{}}>
<svg aria-hidden="true" className="iconify text-neutral-500 iconify--solar" data-icon="solar:check-read-linear" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m4 12.9l3.143 3.6L15 7.5m5 .063l-8.572 9L11 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg> Recycling fees included
                            </li>
<li className="flex items-center gap-3 font-sans" style={{}}>
<svg aria-hidden="true" className="iconify text-neutral-500 iconify--solar" data-icon="solar:check-read-linear" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m4 12.9l3.143 3.6L15 7.5m5 .063l-8.572 9L11 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg> 15-min loading time
                            </li>
</ul>
<a className="group btn-gradient-border p-[1px] block text-center" href="#contact">
<div className="btn-inner group-hover:bg-emerald-900 transition-colors text-sm font-medium text-white bg-black pt-3 pb-3 font-sans" style={{}}>Book Now</div>
</a>
</div>
</div>

<div className="reveal-on-scroll border-gradient rounded-3xl group transform md:-translate-y-4 relative">
<div className="absolute inset-0 bg-gradient-to-b to-transparent rounded-3xl pointer-events-none from-white/10"></div>
<div className="border-gradient-content bg-[#080808] pt-8 pr-8 pb-8 pl-8">
<div className="absolute top-0 right-0 p-5">
<div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse" style={{}}></div>
</div>
<div className="mb-6">
<svg aria-hidden="true" className="iconify text-3xl iconify--solar text-white" data-icon="solar:delivery-linear" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none"><path className="" d="M7.506 15.265a.75.75 0 0 0 1.446-.4zm-1.43-7.99l.724-.2zM4.705 5.92l-.2.723zM3.2 4.725a.75.75 0 1 0-.402 1.445zm16.988 11a.75.75 0 1 0-.378-1.451zm-9.991 1.834c.31 1.12-.37 2.303-1.574 2.616L9 21.626c1.977-.513 3.185-2.502 2.643-4.467zm-1.574 2.616c-1.212.315-2.428-.389-2.74-1.519l-1.446.4c.54 1.955 2.594 3.082 4.563 2.57zm-2.74-1.519c-.31-1.12.37-2.303 1.574-2.616l-.377-1.45c-1.977.513-3.186 2.502-2.643 4.467zm1.574-2.616c1.212-.315 2.428.389 2.74 1.519l1.446-.4c-.54-1.955-2.594-3.082-4.563-2.57zm1.494-1.175L6.8 7.075l-1.446.4l2.152 7.79zM4.904 5.197l-1.703-.472l-.402 1.445l1.704.473zM6.8 7.075a2.71 2.71 0 0 0-1.896-1.878l-.4 1.446c.425.118.742.44.85.831zm4.31 11.01l9.079-2.36l-.378-1.451l-9.079 2.36z" fill="currentColor"></path><path d="M9.565 8.73c-.485-1.755-.727-2.633-.315-3.324c.411-.692 1.316-.927 3.126-1.398l1.92-.498c1.81-.47 2.715-.706 3.428-.307c.713.4.956 1.277 1.44 3.033l.515 1.862c.485 1.755.728 2.633.316 3.325c-.412.691-1.317.927-3.127 1.397l-1.92.499c-1.81.47-2.715.705-3.428.306c-.713-.4-.955-1.277-1.44-3.032z" stroke="currentColor" strokeWidth="1.5"></path></g></svg>
<h3 className="text-xl font-medium mt-4 text-white font-sans" style={{}}>1/2 Truck Load</h3>
<p className="text-xs mt-2 h-8 text-emerald-400 font-sans" style={{}}>Garage cleanout or room renovation debris.</p>
</div>
<div className="text-3xl text-white tracking-tight mb-8 font-newsreader font-light" style={{}}>from $299</div>
<ul className="space-y-4 mb-8 text-sm text-emerald-300" style={{}}>
<li className="flex gap-3 gap-x-3 gap-y-3 items-center font-sans" style={{}}>
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--solar" data-icon="solar:check-read-linear" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m4 12.9l3.143 3.6L15 7.5m5 .063l-8.572 9L11 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg> 2-person crew
                            </li>
<li className="flex items-center gap-3 font-sans" style={{}}>
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--solar" data-icon="solar:check-read-linear" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m4 12.9l3.143 3.6L15 7.5m5 .063l-8.572 9L11 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg> Heavy lifting included
                            </li>
<li className="flex gap-3 gap-x-3 gap-y-3 items-center font-sans" style={{}}>
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--solar" data-icon="solar:check-read-linear" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m4 12.9l3.143 3.6L15 7.5m5 .063l-8.572 9L11 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg> Sweep up afterwards
                            </li>
</ul>
<a className="group btn-gradient-border p-[1px] block text-center" href="#contact">
<div className="btn-inner group-hover:bg-emerald-200 transition-colors text-sm font-medium text-black bg-white pt-3 pb-3 font-sans" style={{}}>Schedule Pickup</div>
</a>
</div>
</div>

<div className="reveal-on-scroll border-gradient rounded-3xl group">
<div className="border-gradient-content p-8">
<div className="mb-6">
<svg aria-hidden="true" className="iconify text-3xl iconify--solar text-white" data-icon="solar:home-linear" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 22H2m0-11l8.126-6.5a3 3 0 0 1 3.748 0L22 11m-6.5-5.5v-2A.5.5 0 0 1 16 3h2.5a.5.5 0 0 1 .5.5v5M4 22V9.5M20 22V9.5" strokeLinecap="round"></path><path d="M15 22v-5c0-1.414 0-2.121-.44-2.56C14.122 14 13.415 14 12 14s-2.121 0-2.56.44C9 14.878 9 15.585 9 17v5m5-12.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></path></g></svg>
<h3 className="text-xl font-medium mt-4 text-white font-sans" style={{}}>Full Truck Load</h3>
<p className="text-emerald-500 text-xs mt-2 h-8 font-sans" style={{}}>Estate cleanouts and major hoarding situations.</p>
</div>
<div className="text-3xl mb-8 tracking-tight text-white font-newsreader font-light" style={{}}>from $549</div>
<ul className="space-y-4 mb-8 text-sm text-emerald-300" style={{}}>
<li className="flex items-center gap-3 font-sans" style={{}}>
<svg aria-hidden="true" className="iconify text-neutral-500 iconify--solar" data-icon="solar:check-read-linear" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m4 12.9l3.143 3.6L15 7.5m5 .063l-8.572 9L11 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg> Large volume discount
                            </li>
<li className="flex items-center gap-3 font-sans" style={{}}>
<svg aria-hidden="true" className="iconify text-neutral-500 iconify--solar" data-icon="solar:check-read-linear" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m4 12.9l3.143 3.6L15 7.5m5 .063l-8.572 9L11 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg> Priority scheduling
                            </li>
<li className="flex items-center gap-3 font-sans" style={{}}>
<svg aria-hidden="true" className="iconify text-neutral-500 iconify--solar" data-icon="solar:check-read-linear" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m4 12.9l3.143 3.6L15 7.5m5 .063l-8.572 9L11 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg> Sorting &amp; Donation
                            </li>
</ul>
<a className="group btn-gradient-border p-[1px] block text-center" href="#contact">
<div className="btn-inner py-3 text-sm font-medium group-hover:bg-emerald-900 transition-colors bg-black text-white font-sans" style={{}}>Get Estimate</div>
</a>
</div>
</div>
</div>
</div>
</section>


<section className="overflow-hidden py-32 px-6 relative border-y z-10 bg-black/50 border-white/5">
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="reveal-on-scroll mb-8">
<span className="iconify w-10 h-10 mx-auto text-white/20" data-icon="solar:chat-square-quote-linear" data-strokeWidth="1.5"></span>
</div>
<div className="reveal-on-scroll relative h-[300px] w-full flex justify-center items-center">

<div className="testimonial-card active" data-index="0" style={{zIndex: '10'}}>
<h3 className="md:text-4xl text-2xl tracking-tight mb-8 max-w-2xl mx-auto leading-tight text-white font-newsreader font-light" style={{}}>
                        "Triple R completely saved my weekend. They cleared out a decade of clutter from my basement in just two hours."
                    </h3>
<div className="flex items-center justify-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold bg-white text-black font-sans" style={{}}>JD</div>
<div className="text-left">
<p className="text-sm font-medium text-white font-sans" style={{}}>James Dalton</p>
<p className="text-emerald-500 text-xs font-sans" style={{}}>Homeowner</p>
</div>
</div>
</div>

<div className="testimonial-card" data-index="1" style={{zIndex: '-1'}}>
<h3 className="md:text-4xl text-2xl tracking-tight mb-8 max-w-2xl mx-auto leading-tight text-white font-newsreader font-light" style={{}}>
                        "Professional, punctual, and surprisingly affordable. The crew was respectful of my property and very efficient."
                    </h3>
<div className="flex items-center justify-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold bg-white text-black font-sans" style={{}}>MK</div>
<div className="text-left">
<p className="text-sm font-medium text-white font-sans" style={{}}>Maria K.</p>
<p className="text-emerald-500 text-xs font-sans" style={{}}>Real Estate Agent</p>
</div>
</div>
</div>

<div className="testimonial-card" data-index="2" style={{zIndex: '-1'}}>
<h3 className="md:text-4xl text-2xl tracking-tight mb-8 max-w-2xl mx-auto leading-tight text-white font-newsreader font-light" style={{}}>
                        "I didn't have to lift a finger. They handled the heavy furniture and construction debris without a scratch on the walls."
                    </h3>
<div className="flex items-center justify-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold bg-white text-black font-sans" style={{}}>SR</div>
<div className="text-left">
<p className="text-sm font-medium text-white font-sans" style={{}}>Sarah Ross</p>
<p className="text-emerald-500 text-xs font-sans" style={{}}>Business Owner</p>
</div>
</div>
</div>
</div>

<div className="reveal-on-scroll flex items-center justify-center gap-4 mt-8">
<button className="group p-2 rounded-full transition-colors hover:bg-white/10" onclick="rotateTestimonial('prev')">
<svg aria-hidden="true" className="iconify iconify--solar text-white" data-icon="solar:arrow-left-linear" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 12H4m0 0l6-6m-6 6l6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
<button className="group p-2 rounded-full transition-colors hover:bg-white/10" onclick="rotateTestimonial('next')">
<svg aria-hidden="true" className="iconify iconify--solar text-white" data-icon="solar:arrow-right-linear" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
</div>
</div>
</section>

<footer className="py-20 px-6 border-t bg-[#020202] relative z-10 border-white/5" id="contact">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<svg aria-hidden="true" className="iconify iconify--solar text-white" data-icon="solar:trash-bin-trash-linear" data-width="24" height="24" role="img" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.5 6h-17m15.333 2.5l-.46 6.9c-.177 2.654-.265 3.981-1.13 4.79s-2.196.81-4.856.81h-.774c-2.66 0-3.991 0-4.856-.81c-.865-.809-.954-2.136-1.13-4.79l-.46-6.9M9.5 11l.5 5m4.5-5l-.5 5" strokeLinecap="round"></path><path d="M6.5 6h.11a2 2 0 0 0 1.83-1.32l.034-.103l.097-.291c.083-.249.125-.373.18-.479a1.5 1.5 0 0 1 1.094-.788C9.962 3 10.093 3 10.355 3h3.29c.262 0 .393 0 .51.019a1.5 1.5 0 0 1 1.094.788c.055.106.097.23.18.479l.097.291A2 2 0 0 0 17.5 6"></path></g></svg>
<span className="font-semibold tracking-tight text-xl text-white font-sans" style={{}}>Triple R</span>
</div>
<p className="text-emerald-500 text-sm leading-relaxed max-w-sm mb-8 font-sans" style={{}}>
                    Reclaiming your space, responsibly. We provide top-tier junk removal services with a focus on recycling and donation.
                </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-white/5 text-emerald-400 hover:bg-white hover:text-black" href="#" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-white/5 text-emerald-400 hover:bg-white hover:text-black" href="#" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-white/5 text-emerald-400 hover:bg-white hover:text-black" href="#" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
<div className="">
<h4 className="font-medium mb-6 text-sm text-white font-sans" style={{}}>Services</h4>
<ul className="space-y-4 text-xs text-emerald-500 font-medium" style={{}}>
<li className=""><a className="transition-colors hover:text-white font-sans" href="#" style={{}}>Residential Removal</a></li>
<li className=""><a className="transition-colors hover:text-white font-sans" href="#" style={{}}>Commercial Cleanouts</a></li>
<li><a className="transition-colors hover:text-white font-sans" href="#" style={{}}>Construction Debris</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-6 text-sm text-white font-sans" style={{}}>Company</h4>
<ul className="space-y-4 text-xs text-emerald-500 font-medium" style={{}}>
<li><a className="transition-colors hover:text-white font-sans" href="#" style={{}}>About Us</a></li>
<li><a className="transition-colors hover:text-white font-sans" href="#" style={{}}>Contact</a></li>
<li><a className="transition-colors hover:text-white font-sans" href="#" style={{}}>Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto mt-20 pt-8 border-t text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs border-white/5 text-emerald-600" style={{}}>
<p className="font-sans" style={{}}>© 2024 Triple R Contractor. All rights reserved.</p>
<p className="font-sans" style={{}}>Designed with precision.</p>
</div>
</footer>


    </>
  );
}
