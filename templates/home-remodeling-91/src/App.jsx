import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // FAQ Toggle Logic
        function toggleFaq(button) {
            const container = button.parentElement;
            const content = button.nextElementSibling;
            
            // Close other FAQs
            document.querySelectorAll('#faq .group').forEach(item => {
                if (item !== container) {
                    item.classList.remove('active');
                    item.querySelector('div.max-h-0').style.maxHeight = null;
                }
            });

            // Toggle current
            container.classList.toggle('active');
            if (container.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        }

        // Scroll Animation Logic
        const mediaWrapper = document.getElementById('hero-media-wrapper');
        const mediaInner = document.getElementById('hero-media-inner');
        const badge = document.getElementById('hero-badge');

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const threshold = 400; 
            
            const progress = Math.min(scrollY / threshold, 1);
            
            if (window.innerWidth >= 768) {
                const startWidth = 80;
                const currentWidth = startWidth + (progress * (100 - startWidth));
                mediaWrapper.style.width = `${currentWidth}%`;
            } else {
                const startWidth = 90;
                const currentWidth = startWidth + (progress * (100 - startWidth));
                mediaWrapper.style.width = `${currentWidth}%`;
            }

            const currentRadius = 16 - (progress * 16);
            mediaInner.style.borderRadius = `${currentRadius}px`;

            if (scrollY > 10) {
                mediaInner.classList.add('stop-float');
                badge.style.opacity = '0';
            } else {
                mediaInner.classList.remove('stop-float');
                badge.style.opacity = '1';
            }
        });

        // Process Timeline Logic
        (function() {
            const container = document.getElementById('process-timeline');
            const progress = document.getElementById('process-progress');
            const steps = document.querySelectorAll('.process-step');

            function onScroll() {
                if (!container) return;
                
                const rect = container.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const startThreshold = windowHeight * 0.7; 
                
                const relativeY = startThreshold - rect.top;
                const totalHeight = rect.height;
                
                let percent = (relativeY / totalHeight) * 100;
                percent = Math.max(0, Math.min(100, percent));
                
                progress.style.height = `${percent}%`;

                steps.forEach((step, index) => {
                    const stepRect = step.getBoundingClientRect();
                    const marker = step.querySelector('.step-marker');
                    const number = step.querySelector('.step-number');
                    const content = step.querySelector('.step-content');
                    
                    if (stepRect.top < windowHeight * 0.75) {
                        marker.classList.remove('border-neutral-800', 'bg-neutral-950');
                        marker.classList.add('border-white', 'bg-white', 'scale-110', 'shadow-[0_0_15px_rgba(255,255,255,0.4)]');
                        number.classList.remove('text-neutral-600');
                        number.classList.add('text-black');
                        content.classList.remove('opacity-30', 'translate-y-8');
                        content.classList.add('opacity-100', 'translate-y-0');
                    } else {
                        marker.classList.add('border-neutral-800', 'bg-neutral-950');
                        marker.classList.remove('border-white', 'bg-white', 'scale-110', 'shadow-[0_0_15px_rgba(255,255,255,0.4)]');
                        number.classList.add('text-neutral-600');
                        number.classList.remove('text-black');
                        content.classList.add('opacity-30', 'translate-y-8');
                        content.classList.remove('opacity-100', 'translate-y-0');
                    }
                });
            }

            window.addEventListener('scroll', onScroll);
            window.addEventListener('resize', onScroll);
            setTimeout(onScroll, 100);
        })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b backdrop-blur-xl border-white/5 bg-black/50">
<div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-sm flex items-center justify-center bg-white">
<div className="bg-black w-3 h-3 rounded-[1px]"></div>
</div>
<span className="text-lg font-medium tracking-tight">Matos Homes Improvements LLC</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="transition-colors hover:text-white text-sm font-normal text-neutral-400" href="#process">Process</a>
<a className="text-sm font-normal transition-colors text-neutral-400 hover:text-white" href="#services">Services</a>
<a className="text-sm font-normal transition-colors text-neutral-400 hover:text-white" href="#projects">Projects</a>
<a className="text-sm font-normal transition-colors text-neutral-400 hover:text-white" href="#faq">FAQ</a>
</div>
<a className="group flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all bg-white text-black hover:bg-neutral-200" href="#contact">
                Book Consultation
                <i className="w-4 h-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</a>
</div>
</nav>

<section className="md:pt-48 overflow-hidden pt-32 pb-0 relative">
<div className="absolute inset-0 pointer-events-none z-0">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl overflow-hidden opacity-40">
<div className="absolute top-[-20%] left-[20%] w-[30rem] h-[30rem] mix-blend-overlay rounded-full blur-[80px] opacity-20 animate-blob bg-white"></div>
<div className="absolute top-[-10%] right-[20%] w-[25rem] h-[25rem] mix-blend-overlay rounded-full blur-[80px] opacity-20 animate-blob animation-delay-2000 bg-neutral-600"></div>
<div className="absolute bottom-[20%] left-[30%] w-[35rem] h-[35rem] mix-blend-overlay rounded-full blur-[80px] opacity-10 animate-blob animation-delay-4000 bg-white"></div>
</div>
<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent to-transparent via-white/20"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-20 bg-gradient-to-b to-transparent blur-[60px] from-white/10"></div>
</div>
<div className="flex flex-col text-center max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative items-center">
<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium tracking-wide mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)] border-white/10 bg-white/5 text-neutral-300">
<span className="w-1.5 h-1.5 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)] bg-amber-500"></span>
                SERVING WATAUGA, TX &amp; SURROUNDING AREAS
            </div>
<h1 className="reveal reveal-delay-1 md:text-7xl lg:text-8xl leading-tight md:leading-[1.1] bg-clip-text text-5xl font-medium text-transparent tracking-tight bg-gradient-to-b from-white via-white to-neutral-400 mb-6 pt-2 pb-2 drop-shadow-sm">
                Excellence in every<br/>home improvement detail.
            </h1>
<p className="reveal reveal-delay-2 max-w-xl text-lg md:text-xl font-light leading-relaxed mb-12 text-neutral-400">
                High-quality window, door, and flooring solutions for Watauga homeowners who value precision and seamless execution.
            </p>
<div className="reveal reveal-delay-3 flex flex-col md:flex-row gap-4 w-full md:w-auto mb-12">
<a className="flex items-center justify-center gap-2 transition-all hover:bg-neutral-200 font-medium text-black bg-white h-12 rounded-full pr-8 pl-8 shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#contact">
                    Start Your Project
                </a>
<a className="flex items-center justify-center gap-2 transition-all hover:bg-white/10 font-medium text-white bg-white/5 h-12 border-white/10 border rounded-full pr-8 pl-8 backdrop-blur-md" href="#process">
                    See How We Work
                </a>
</div>
</div>
<div className="reveal reveal-delay-3 relative mx-auto w-[90%] md:w-[80%] h-[500px] md:h-[600px] transition-all ease-out will-change-transform z-20" id="hero-media-wrapper">
<div className="absolute -inset-1 bg-gradient-to-r rounded-2xl blur opacity-20 from-white/20 to-white/0"></div>
<div className="relative w-full h-full rounded-2xl overflow-hidden border shadow-2xl animate-float border-white/10" id="hero-media-inner">
<video autoplay="" className="filter brightness-[0.85] w-full h-full max-h-full object-cover" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f1c0dbae-e955-4545-a42b-d1ee7c115cc3_3840w.webp">
<source src="https://videos.pexels.com/video-files/7578544/7578544-uhd_2560_1440_30fps.mp4" type="video/mp4"/>
</video>
<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 backdrop-blur-md border p-4 rounded-xl flex items-center gap-4 transition-opacity duration-300 bg-black/60 border-white/10" id="hero-badge">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 bg-[url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64')] bg-cover border-black bg-neutral-800"></div>
<div className="w-10 h-10 rounded-full border-2 bg-[url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64')] bg-cover border-black bg-neutral-800"></div>
<div className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-medium border-black bg-neutral-800 text-white">500+</div>
</div>
<div className="text-left">
<p className="text-sm font-medium text-white">Happy Clients</p>
<p className="text-xs text-neutral-400">In Watauga &amp; DFW</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 border-t relative z-10 border-white/5 bg-neutral-950">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">The "Anti-Chaos" Experience.</h2>
<p className="text-lg font-light leading-relaxed mb-6 text-neutral-400">
                        Too many Watauga homeowners have been burned by missed deadlines and mediocre craftsmanship. The industry standard is broken.
                    </p>
<p className="text-lg font-light leading-relaxed text-neutral-400">
                        At <span className="font-normal text-white">Matos Homes Improvements LLC</span>, we operate differently. We treat your window, door, and flooring projects with high-stakes precision.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="p-6 rounded-2xl border transition-colors bg-white/5 border-white/10 hover:border-white/20">
<i className="w-6 h-6 mb-4 text-white" data-lucide="clock"></i>
<h3 className="text-lg font-medium mb-2">Deadlines Kept</h3>
<p className="text-base font-light text-neutral-400">We build realistic schedules and stick to them. No endless delays.</p>
</div>
<div className="p-6 rounded-2xl border transition-colors bg-white/5 border-white/10 hover:border-white/20">
<i className="w-6 h-6 mb-4 text-white" data-lucide="scan-line"></i>
<h3 className="text-lg font-medium mb-2">Transparent Costs</h3>
<p className="text-base font-light text-neutral-400">Detailed estimates. No surprise change orders unless you request them.</p>
</div>
<div className="p-6 rounded-2xl border transition-colors bg-white/5 border-white/10 hover:border-white/20">
<i className="w-6 h-6 mb-4 text-white" data-lucide="shield-check"></i>
<h3 className="text-lg font-medium mb-2">Superior Workmanship</h3>
<p className="text-base font-light text-neutral-400">From installation to painting, we ensure a flawless finish that lasts.</p>
</div>
<div className="p-6 rounded-2xl border transition-colors bg-white/5 border-white/10 hover:border-white/20">
<i className="w-6 h-6 mb-4 text-white" data-lucide="award"></i>
<h3 className="text-lg font-medium mb-2">Local Expertise</h3>
<p className="text-base font-light text-neutral-400">Serving Watauga, TX with pride. We know the area and the needs of our neighbors.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative bg-black" id="services">
<div className="bg-grid absolute inset-0 opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Our Services</h2>
<p className="text-lg font-light max-w-md text-neutral-400">Comprehensive installation and improvement solutions tailored for your property.</p>
</div>
<a className="text-sm border-b pb-1 transition-colors text-white border-white/30 hover:border-white" href="#contact">Get a free quote</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group flex flex-col h-full rounded-2xl overflow-hidden border bg-white/[0.02] border-white/10 hover:border-white/20 transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75" src="https://images.unsplash.com/photo-1503602642458-232111445657?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<i className="absolute bottom-4 left-4 text-white w-6 h-6" data-lucide="door-open"></i>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-lg font-medium mb-3 text-white">Window &amp; Door Installation</h3>
<p className="text-sm font-light leading-relaxed text-neutral-400 mb-4 line-clamp-4">
                            Experience top-quality window and door installation services. Our skilled team guarantees professional and efficient installation for improved energy efficiency, enhanced curb appeal, and increased home value.
                        </p>
</div>
</div>

<div className="group flex flex-col h-full rounded-2xl overflow-hidden border bg-white/[0.02] border-white/10 hover:border-white/20 transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75" src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<i className="absolute bottom-4 left-4 text-white w-6 h-6" data-lucide="wrench"></i>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-lg font-medium mb-3 text-white">Window Repair &amp; Install</h3>
<p className="text-sm font-light leading-relaxed text-neutral-400 mb-4 line-clamp-4">
                            Reliable solutions for all your window needs. Whether it's repairing a cracked window or installing brand new ones, we guarantee a professional and seamless experience that increases energy efficiency.
                        </p>
</div>
</div>

<div className="group flex flex-col h-full rounded-2xl overflow-hidden border bg-white/[0.02] border-white/10 hover:border-white/20 transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<i className="absolute bottom-4 left-4 text-white w-6 h-6" data-lucide="building-2"></i>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-lg font-medium mb-3 text-white">Commercial Windows</h3>
<p className="text-sm font-light leading-relaxed text-neutral-400 mb-4 line-clamp-4">
                            Efficient and timely installation for commercial properties. We use high-quality materials and modern techniques to ensure durable, visually appealing results for your office or building.
                        </p>
</div>
</div>

<div className="group flex flex-col h-full rounded-2xl overflow-hidden border bg-white/[0.02] border-white/10 hover:border-white/20 transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75" src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<i className="absolute bottom-4 left-4 text-white w-6 h-6" data-lucide="app-window"></i>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-lg font-medium mb-3 text-white">Window Installation</h3>
<p className="text-sm font-light leading-relaxed text-neutral-400 mb-4 line-clamp-4">
                            Top-of-the-line services to enhance aesthetic and functionality. From energy efficient options to stylish designs, we offer seamless and secure installation tailored to your specific needs.
                        </p>
</div>
</div>

<div className="group flex flex-col h-full rounded-2xl overflow-hidden border bg-white/[0.02] border-white/10 hover:border-white/20 transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<i className="absolute bottom-4 left-4 text-white w-6 h-6" data-lucide="layers"></i>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-lg font-medium mb-3 text-white">Flooring Installation</h3>
<p className="text-sm font-light leading-relaxed text-neutral-400 mb-4 line-clamp-4">
                            Exceptional results with attention to detail. Whether you need new flooring for your home or office, our skilled installers ensure a flawless finish that enhances the value of your property.
                        </p>
</div>
</div>

<div className="group flex flex-col h-full rounded-2xl overflow-hidden border bg-white/[0.02] border-white/10 hover:border-white/20 transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<i className="absolute bottom-4 left-4 text-white w-6 h-6" data-lucide="layout-dashboard"></i>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-lg font-medium mb-3 text-white">Flooring Services</h3>
<p className="text-sm font-light leading-relaxed text-neutral-400 mb-4 line-clamp-4">
                            Professional flooring installation and repair for residential and commercial properties. With a wide selection of materials, we help you achieve the perfect look for your space.
                        </p>
</div>
</div>

<div className="group flex flex-col h-full rounded-2xl overflow-hidden border bg-white/[0.02] border-white/10 hover:border-white/20 transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<i className="absolute bottom-4 left-4 text-white w-6 h-6" data-lucide="paint-bucket"></i>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-lg font-medium mb-3 text-white">Frame Painting</h3>
<p className="text-sm font-light leading-relaxed text-neutral-400 mb-4 line-clamp-4">
                            Give your doors and windows a fresh, vibrant look. We use high-quality materials to protect your frames from weathering while adding significant aesthetic value to your home.
                        </p>
</div>
</div>

<div className="group flex flex-col h-full rounded-2xl overflow-hidden border bg-white/[0.02] border-white/10 hover:border-white/20 transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<i className="absolute bottom-4 left-4 text-white w-6 h-6" data-lucide="archive"></i>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-lg font-medium mb-3 text-white">Cabinets</h3>
<p className="text-sm font-light leading-relaxed text-neutral-400 mb-4 line-clamp-4">
                            Your one-stop solution for all cabinet needs. We provide top-quality cabinet installations, repairs, and replacements, ensuring functional and aesthetically pleasing spaces for your home.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5 bg-neutral-950" id="process">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-24">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white">A Predictable Process</h2>
<p className="text-lg font-light text-neutral-400 max-w-xl mx-auto">From concept to completion, we guide you every step of the way with transparency and precision.</p>
</div>
<div className="relative pl-0" id="process-timeline">
<div className="absolute left-8 top-4 bottom-8 w-px bg-white/10 overflow-hidden rounded-full">
<div className="w-full bg-white h-0 transition-all duration-150 ease-out shadow-[0_0_15px_rgba(255,255,255,0.8)]" id="process-progress"></div>
</div>
<div className="space-y-12">
<div className="relative pl-28 pr-4 group process-step">
<div className="absolute left-8 top-0 -translate-x-1/2 w-8 h-8 rounded-full border flex items-center justify-center z-10 transition-all duration-500 step-marker border-neutral-800 bg-neutral-950">
<span className="text-xs font-semibold transition-colors duration-300 step-number text-neutral-600">1</span>
</div>
<div className="transition-all duration-700 step-content opacity-30 translate-y-8">
<h3 className="text-2xl font-medium mb-3 text-white">Consultation</h3>
<p className="text-lg font-light text-neutral-400 leading-relaxed">We meet at your Watauga home to discuss your vision, budget, and timeline feasibility.</p>
</div>
</div>
<div className="relative pl-28 pr-4 group process-step">
<div className="absolute left-8 top-0 -translate-x-1/2 w-8 h-8 rounded-full border flex items-center justify-center z-10 transition-all duration-500 step-marker border-neutral-800 bg-neutral-950">
<span className="text-xs font-semibold transition-colors duration-300 step-number text-neutral-600">2</span>
</div>
<div className="transition-all duration-700 step-content opacity-30 translate-y-8">
<h3 className="text-2xl font-medium mb-3 text-white">Design &amp; Plan</h3>
<p className="text-lg font-light text-neutral-400 leading-relaxed">Our team creates detailed plans, selects materials, and secures all necessary permits.</p>
</div>
</div>
<div className="relative pl-28 pr-4 group process-step">
<div className="absolute left-8 top-0 -translate-x-1/2 w-8 h-8 rounded-full border flex items-center justify-center z-10 transition-all duration-500 step-marker border-neutral-800 bg-neutral-950">
<span className="text-xs font-semibold transition-colors duration-300 step-number text-neutral-600">3</span>
</div>
<div className="transition-all duration-700 step-content opacity-30 translate-y-8">
<h3 className="text-2xl font-medium mb-3 text-white">Installation</h3>
<p className="text-lg font-light text-neutral-400 leading-relaxed">Work begins. We protect your home, work efficiently on windows, doors or flooring, and update you daily.</p>
</div>
</div>
<div className="relative pl-28 pr-4 group process-step">
<div className="absolute left-8 top-0 -translate-x-1/2 w-8 h-8 rounded-full border flex items-center justify-center z-10 transition-all duration-500 step-marker border-neutral-800 bg-neutral-950">
<span className="text-xs font-semibold transition-colors duration-300 step-number text-neutral-600">4</span>
</div>
<div className="transition-all duration-700 step-content opacity-30 translate-y-8">
<h3 className="text-2xl font-medium mb-3 text-white">Delivery</h3>
<p className="text-lg font-light text-neutral-400 leading-relaxed">A final walkthrough to ensure perfection, followed by a clean turnover.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-black">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 border rounded-3xl p-12 bg-white/[0.02] border-white/10">
<div className="max-w-lg">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">Watauga Expertise</h2>
<p className="text-lg font-light text-neutral-400">We know the local architecture and weather challenges in Texas. We ensure your windows and doors are energy efficient and built to last.</p>
</div>
<div className="flex gap-12">
<div>
<div className="text-4xl md:text-5xl font-medium tracking-tight mb-1 text-white">100%</div>
<div className="text-sm text-neutral-500 uppercase tracking-widest">Satisfaction</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-medium tracking-tight mb-1 text-white">Pro</div>
<div className="text-sm text-neutral-500 uppercase tracking-widest">Installers</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-neutral-950" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">

<div className="group border rounded-xl bg-white/[0.02] border-white/5 overflow-hidden transition-all hover:border-white/10">
<button className="w-full flex items-center justify-between p-6 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-white">Do you handle commercial projects?</span>
<i className="w-5 h-5 text-neutral-400 transition-transform duration-300 group-[.active]:rotate-45" data-lucide="plus"></i>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
<div className="p-6 pt-0 text-neutral-400 font-light leading-relaxed">
                            Yes. We offer specialized Commercial Window Installation services. Our team is experienced in providing efficient and timely installation for office buildings and commercial properties using high-quality materials.
                        </div>
</div>
</div>

<div className="group border rounded-xl bg-white/[0.02] border-white/5 overflow-hidden transition-all hover:border-white/10">
<button className="w-full flex items-center justify-between p-6 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-white">How long does a window installation take?</span>
<i className="w-5 h-5 text-neutral-400 transition-transform duration-300 group-[.active]:rotate-45" data-lucide="plus"></i>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
<div className="p-6 pt-0 text-neutral-400 font-light leading-relaxed">
                            For standard residential projects, we aim for efficiency. Most window installations can be completed within 1-3 days, depending on the quantity and complexity. We provide a specific timeline during your consultation.
                        </div>
</div>
</div>

<div className="group border rounded-xl bg-white/[0.02] border-white/5 overflow-hidden transition-all hover:border-white/10">
<button className="w-full flex items-center justify-between p-6 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-white">Do you offer painting services for frames?</span>
<i className="w-5 h-5 text-neutral-400 transition-transform duration-300 group-[.active]:rotate-45" data-lucide="plus"></i>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
<div className="p-6 pt-0 text-neutral-400 font-light leading-relaxed">
                            Absolutely. We offer top-notch Door and Window Frame Painting services. Our team prepares the surface and applies high-quality paint to protect against weathering and enhance curb appeal.
                        </div>
</div>
</div>

<div className="group border rounded-xl bg-white/[0.02] border-white/5 overflow-hidden transition-all hover:border-white/10">
<button className="w-full flex items-center justify-between p-6 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-white">What areas do you serve?</span>
<i className="w-5 h-5 text-neutral-400 transition-transform duration-300 group-[.active]:rotate-45" data-lucide="plus"></i>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
<div className="p-6 pt-0 text-neutral-400 font-light leading-relaxed">
                            We are based in and proudly serve Watauga, TX, and the surrounding areas. Contact us to see if your property falls within our service range.
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-black border-y border-white/5 overflow-hidden relative">

<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
<div className="flex animate-marquee whitespace-nowrap">

<div className="flex items-center gap-16 pr-16">
<span className="text-8xl md:text-9xl font-bold tracking-tighter text-stroke">WINDOWS</span>
<span className="text-8xl md:text-9xl font-bold tracking-tighter text-white">DOORS</span>
<span className="text-8xl md:text-9xl font-bold tracking-tighter text-stroke">FLOORING</span>
<span className="text-8xl md:text-9xl font-bold tracking-tighter text-white">WATAUGA</span>
<span className="text-8xl md:text-9xl font-bold tracking-tighter text-stroke">QUALITY</span>
</div>
<div className="flex items-center gap-16 pr-16">
<span className="text-8xl md:text-9xl font-bold tracking-tighter text-stroke">WINDOWS</span>
<span className="text-8xl md:text-9xl font-bold tracking-tighter text-white">DOORS</span>
<span className="text-8xl md:text-9xl font-bold tracking-tighter text-stroke">FLOORING</span>
<span className="text-8xl md:text-9xl font-bold tracking-tighter text-white">WATAUGA</span>
<span className="text-8xl md:text-9xl font-bold tracking-tighter text-stroke">QUALITY</span>
</div>
</div>
</section>

<footer className="relative pt-32 pb-12 px-6 overflow-hidden" id="contact">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-8">Ready to upgrade<br/>your home?</h2>
<p className="text-xl font-light mb-10 max-w-xl mx-auto text-neutral-400">Book a free consultation. No sales pressure, just a conversation about your project.</p>
<form className="max-w-md mx-auto mb-16 space-y-4">
<div className="flex gap-4">
<input className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors placeholder:text-neutral-600 bg-white/5 border-white/10 text-white" placeholder="Name" type="text"/>
<input className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors placeholder:text-neutral-600 bg-white/5 border-white/10 text-white" placeholder="Email" type="email"/>
</div>
<input className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors placeholder:text-neutral-600 bg-white/5 border-white/10 text-white" placeholder="Phone Number" type="tel"/>
<button className="w-full font-medium py-3 rounded-lg transition-colors bg-white text-black hover:bg-neutral-200" type="button">Request Estimate</button>
</form>
<div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t text-sm text-neutral-500 border-white/10">
<div>© 2024 Matos Homes Improvements LLC. All rights reserved.</div>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="transition-colors hover:text-white" href="#">Privacy</a>
<a className="transition-colors hover:text-white" href="#">Terms</a>
<a className="transition-colors hover:text-white" href="#">Instagram</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
