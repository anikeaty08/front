import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Testimonials carousel data
        const testimonials = [
            {
                quote: "Lumi transformed our brand from ordinary to extraordinary. Their creative vision and attention to detail delivered results beyond our wildest dreams.",
                author: "Sarah Johnson, Marketing Director at TechFlow",
                avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=640&q=60",
                nextName: "Michael R.",
                nextAvatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=640&q=60"
            },
            {
                quote: "Working with Lumi was a game-changer for our startup. They didn't just design our brand - they helped us discover our identity.",
                author: "Michael Rodriguez, CEO at InnovateTech",
                avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=640&q=60",
                nextName: "Emily C.",
                nextAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=640&q=60"
            },
            {
                quote: "The level of creativity and professionalism from the Lumi team is unmatched. They brought our vision to life in ways we never imagined.",
                author: "Emily Chen, Creative Director at FutureForward",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=640&q=60",
                nextName: "Sarah J.",
                nextAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=640&q=60"
            }
        ];

        let currentTestimonial = 0;

        function updateTestimonial(index) {
            const testimonial = testimonials[index];
            document.getElementById('t-quote').textContent = testimonial.quote;
            document.getElementById('t-author').textContent = `— ${testimonial.author}`;
            document.getElementById('t-avatar').src = testimonial.avatar;
            document.getElementById('t-next-name').textContent = testimonial.nextName;
            document.getElementById('t-next-avatar').src = testimonial.nextAvatar;

            // Update dots
            document.querySelectorAll('.t-dot').forEach((dot, i) => {
                if (i === index) {
                    dot.className = 't-dot h-1.5 w-6 rounded-full bg-gray-900';
                } else {
                    dot.className = 't-dot h-1.5 w-1.5 rounded-full bg-gray-300';
                }
            });
        }

        // Navigation buttons
        document.getElementById('t-prev').addEventListener('click', () => {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            updateTestimonial(currentTestimonial);
        });

        document.getElementById('t-next').addEventListener('click', () => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            updateTestimonial(currentTestimonial);
        });

        // Dot navigation
        document.querySelectorAll('.t-dot').forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentTestimonial = index;
                updateTestimonial(currentTestimonial);
            });
        });

        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe all scroll elements
        document.querySelectorAll('.scroll-element').forEach(el => {
            observer.observe(el);
        });

        // Custom CSS for animations
        const style = document.createElement('style');
        style.textContent = `
            .scroll-element {
                opacity: 0;
                transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .fade-in-up {
                transform: translateY(40px);
            }
            
            .fade-in-left {
                transform: translateX(-40px);
            }
            
            .fade-in-right {
                transform: translateX(40px);
            }
            
            .stagger-1 {
                transition-delay: 0.1s;
            }
            
            .stagger-2 {
                transition-delay: 0.2s;
            }
            
            .stagger-3 {
                transition-delay: 0.3s;
            }
            
            .animate-in {
                opacity: 1;
                transform: translateY(0) translateX(0);
            }

            .text-coral-500 {
                color: #ff6b47;
            }
            
            .bg-coral-50 {
                background-color: #fef2f2;
            }
            
            .bg-coral-500 {
                background-color: #ff6b47;
            }
            
            .bg-coral-600 {
                background-color: #e55a3b;
            }
            
            .hover\\:text-coral-500:hover {
                color: #ff6b47;
            }
            
            .hover\\:bg-coral-600:hover {
                background-color: #e55a3b;
            }
            
            .ring-coral-200 {
                --tw-ring-color: #fecaca;
            }
            
            .ring-coral-300 {
                --tw-ring-color: #fca5a5;
            }
            
            .hover\\:ring-coral-300:hover {
                --tw-ring-color: #fca5a5;
            }
        `;
        document.head.appendChild(style);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="aura-background-component fixed top-0 w-full h-screen -z-10">
<div className="spline-container absolute top-0 left-0 w-full h-full -z-10">
<iframe frameborder="0" height="100%" src="https://my.spline.design/radialpattern-hkyfBWXPTPO4g8csZKdL866B/" width="100%"></iframe>
</div>
</div>

<div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg ring-1 ring-gray-200 scroll-element fade-in-up">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center">
<span className="text-xl font-semibold text-gray-900 tracking-tight">Lumi</span>
</div>
<nav className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-gray-600 hover:text-coral-500 transition-colors" href="#">Analytics</a>
<a className="text-sm font-medium text-gray-600 hover:text-coral-500 transition-colors" href="#">Platform</a>
<a className="text-sm font-medium text-gray-600 hover:text-coral-500 transition-colors" href="#">Solutions</a>
<a className="text-sm font-medium text-gray-600 hover:text-coral-500 transition-colors" href="#">Enterprise</a>
<a className="text-sm font-medium text-gray-600 hover:text-coral-500 transition-colors" href="#">Pricing</a>
</nav>
<div className="flex items-center gap-2">
<button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<button className="hidden md:flex p-2 rounded-lg hover:bg-gray-100 transition-colors">
<svg className="lucide lucide-user w-4 h-4" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</button>
<button className="hidden md:flex p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
<svg className="lucide lucide-bar-chart-3 w-4 h-4" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<span className="absolute -top-1 -right-1 w-4 h-4 bg-coral-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
</button>
</div>
</div>
</div>
</div>

<section className="lg:pt-32 lg:pb-20 pt-24 pb-16">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">

<div className="text-center space-y-4 mb-16 scroll-element fade-in-up">
<h1 className="text-4xl sm:text-6xl lg:text-8xl font-light tracking-tighter leading-none">
<span className="flex items-center justify-center gap-4">
                        CREATIVE
                        <span className="inline-flex bg-coral-50 rounded-full p-2">
<svg className="lucide lucide-arrow-big-right w-6 h-6 text-coral-500" data-lucide="arrow-big-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 9a1 1 0 0 0 1-1V5.061a1 1 0 0 1 1.811-.75l6.836 6.836a1.207 1.207 0 0 1 0 1.707l-6.836 6.835a1 1 0 0 1-1.811-.75V16a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"></path></svg>
</span>
                        DESIGN
                    </span>
</h1>
<h1 className="text-4xl sm:text-6xl lg:text-8xl font-light tracking-tighter leading-none">
<span className="flex items-center justify-center gap-4">
                        VISUAL
                        <span className="inline-flex bg-coral-50 rounded-full p-2">
<svg className="lucide lucide-arrow-big-right w-6 h-6 text-coral-500" data-lucide="arrow-big-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 9a1 1 0 0 0 1-1V5.061a1 1 0 0 1 1.811-.75l6.836 6.836a1.207 1.207 0 0 1 0 1.707l-6.836 6.835a1 1 0 0 1-1.811-.75V16a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"></path></svg>
</span>
<span className="flex items-center justify-center gap-4">STUDIO</span>
</span>
</h1>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 space-x-8">

<div className="lg:col-span-1 scroll-element fade-in-left">
<div className="lg:min-h-[520px] flex flex-col ring-1 ring-gray-200 bg-gradient-to-br from-gray-50 to-white rounded-3xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-baseline gap-2">
<span className="sm:text-6xl text-5xl font-light text-gray-900 tracking-tighter">200+</span>
<span className="text-gray-600">projects</span>
</div>
<p className="text-gray-700 mt-3">We craft visual experiences that inspire, engage, and leave lasting impressions.</p>
<p className="mt-4 italic text-gray-500">Design. Create. Inspire.</p>
<div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-gray-300">
<div className="relative w-full h-44 sm:h-56 bg-gradient-to-br from-white to-gray-100">

<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(1200px 300px at -10% -10%, rgba(0,0,0,0.08), transparent 60%), radial-gradient(600px 200px at 110% 0%, rgba(0,0,0,0.04), transparent 55%)'}}></div>

<div className="relative h-full w-full sm:p-5 flex flex-col pt-4 pr-4 pb-4 pl-4">

<div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-gray-200">
<div className="flex items-center gap-3">
<div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-gray-800 text-white flex items-center justify-center text-sm font-medium ring-1 ring-gray-300 shadow-sm">BG</div>
<div className="flex flex-col">
<span className="text-gray-900 text-sm sm:text-base font-medium">Bryan Gill</span>
<span className="text-[11px] text-gray-500">Active</span>
</div>
</div>
<span className="text-sm text-gray-600">UI Designers</span>
</div>

<div className="mt-3 sm:mt-4 space-y-3 sm:space-y-3.5">

<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-gray-200 ring-1 ring-gray-300 flex items-center justify-center text-gray-700">
<svg className="lucide lucide-check-square w-4.5 h-4.5" data-lucide="check-square" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<div className="flex-1">
<div className="h-2.5 rounded-full bg-gray-300"></div>
<div className="mt-2 h-2.5 w-2/5 rounded-full bg-gray-200"></div>
</div>
</div>

<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-gray-200 ring-1 ring-gray-300 flex items-center justify-center text-gray-700">
<svg className="lucide lucide-calendar-check-2 w-4.5 h-4.5" data-lucide="calendar-check-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path><path d="M3 10h18"></path><path d="m16 20 2 2 4-4"></path></svg>
</div>
<div className="flex-1">
<div className="h-2.5 rounded-full bg-gray-300"></div>
<div className="mt-2 h-2.5 w-3/5 rounded-full bg-gray-200"></div>
</div>
</div>

<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-gray-200 ring-1 ring-gray-300 flex items-center justify-center text-gray-700">
<svg className="lucide lucide-clock w-4.5 h-4.5" data-lucide="clock" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="flex-1">
<div className="h-2.5 rounded-full bg-gray-300"></div>
<div className="mt-2 h-2.5 w-1/2 rounded-full bg-gray-200"></div>
</div>
</div>
</div>

<div className="mt-auto">
<div className="mt-4 h-8 w-full rounded-xl bg-gray-300 ring-1 ring-gray-400"></div>
</div>
</div>

<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-gray-300"></div>
</div>
</div>
<div className="mt-5">
<button className="inline-flex gap-2 hover:bg-black transition-colors ring-1 ring-gray-300 text-sm font-medium text-white bg-gray-900 rounded-full pt-2.5 pr-4 pb-2.5 pl-4 shadow-sm items-center">
                                Start Project
                                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="lg:col-span-1 lg:min-h-[520px] flex flex-col scroll-element fade-in-up">

<div className="text-center space-y-6 mb-8">
<p className="text-lg sm:text-xl text-gray-700">Where creativity meets strategy. We transform brands through compelling visual storytelling and innovative design solutions.</p>
<div className="flex flex-wrap gap-3 items-center justify-center" id="aura-emfahwltj">
<button className="inline-flex gap-2 hover:bg-gray-800 transition-colors text-sm font-medium text-white bg-black rounded-full pt-2.5 pr-4 pb-2.5 pl-4 items-center">
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                                Get Started
                            </button>
<button className="inline-flex gap-2 ring-1 ring-black text-black hover:bg-gray-100 transition-colors text-sm font-medium bg-white rounded-full pt-2.5 pr-4 pb-2.5 pl-4 items-center">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                                Call Us
                            </button>
</div>
</div>

<div className="ring text-white bg-gray-900 rounded-3xl mt-auto pt-6 pr-6 pb-6 pl-6 space-y-4">
<div className="mb-4 space-y-6">
<div className="relative h-40 sm:h-48">

<div className="absolute -left-2 top-2 sm:-left-1 sm:top-0 w-28 h-24 sm:w-32 sm:h-28 ring-1 ring-gray-200 bg-white rounded-2xl pt-1 pr-1 pb-1 pl-1 shadow-xl rotate-[-12deg]">
<img alt="Team portrait" className="w-full h-full object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fc935cb1-ef8c-4e13-8bce-c3fd8e402f63_320w.jpg" style={{}}/>
</div>

<div className="absolute -right-1 top-4 sm:right-0 sm:top-2 w-28 h-24 sm:w-32 sm:h-28 ring-1 ring-gray-200 bg-white rounded-2xl pt-1 pr-1 pb-1 pl-1 shadow-xl rotate-[12deg]">
<img alt="Team portrait" className="w-full h-full object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/202914e3-8b47-46de-95d5-7de1f0a0aa79_320w.jpg" style={{}}/>
</div>

<div className="absolute left-2 bottom-0 w-28 h-24 sm:w-32 sm:h-28 ring-1 ring-gray-200 bg-white rounded-2xl pt-1 pr-1 pb-1 pl-1 shadow-xl rotate-[10deg]">
<img ="team="" className="w-full h-full object-cover rounded-xl" portrait"="" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/80aff1f9-dccb-4b5d-8dc6-89e37c211930_320w.jpg" style={{}}/>
</div>

<div className="absolute right-1 bottom-1 w-28 h-24 sm:w-32 sm:h-28 ring-1 ring-gray-200 bg-white rounded-2xl pt-1 pr-1 pb-1 pl-1 shadow-xl rotate-[-8deg]">
<img alt="Team portrait" className="w-full h-full object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0e60f1bd-bde0-4ec4-8c23-24383a8b650a_320w.jpg" style={{}}/>
</div>

<div className="absolute inset-0 w-40 h-32 sm:w-48 sm:h-36 ring-1 ring-gray-200 z-10 bg-white rounded-2xl mt-auto mr-auto mb-auto ml-auto pt-1 pr-1 pb-1 pl-1 shadow-xl">
<img alt="Lead creative" className="w-full h-full object-cover rounded-xl" src="https://cdn.midjourney.com/57ea9136-4c5d-4313-8748-67d826cbe22d/0_3.png?w=800&amp;q=80" style={{}}/>
</div>
</div>
<p className="text-gray-300 mt-4"><span className="sm:text-6xl text-5xl font-light text-gray-50 tracking-tighter">25+</span> creatives</p>
</div>
<p className="text-sm text-gray-400">Our passionate team pushes creative boundaries to deliver exceptional results that exceed expectations.</p>
</div>
</div>

<div className="lg:col-span-1 scroll-element fade-in-right">
<div className="lg:min-h-[520px] flex flex-col ring-1 ring-gray-200 bg-gradient-to-br from-gray-50 to-white rounded-3xl pt-6 pr-6 pb-6 pl-6">
<h3 className="text-lg font-semibold mb-2 text-gray-900">Creative Services</h3>
<p className="text-gray-700 mt-3 mb-8">From concept to completion, we deliver creative solutions that make an impact.</p>
<div className="flex-1 relative">
<div className="relative overflow-hidden rounded-2xl ring-1 ring-gray-200 bg-gradient-to-br from-white to-gray-50 h-full">

<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(800px 400px at 50% 0%, rgba(17,24,39,0.03), transparent 70%)'}}></div>

<div className="relative h-full flex flex-col pt-4 pr-4 pb-4 pl-4">

<div className="mb-0">
<div className="inline-flex items-center gap-3 mb-4">
<h4 className="text-2xl font-light tracking-tight text-gray-900">We Create</h4>
</div>
</div>

<div className="grid grid-cols-2 gap-3 mb-6">
<div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 p-4 ring-1 ring-gray-200 hover:ring-gray-300 transition-all hover:scale-[1.02]">
<div className="flex gap-2 mb-2 items-center">
<span className="text-sm font-medium text-gray-900">Brand Identity</span>
</div>
<div className="space-y-1">
<div className="h-1.5 rounded-full bg-gray-300 w-full"></div>
<div className="h-1.5 rounded-full bg-gray-200 w-2/3"></div>
</div>
</div>
<div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 p-4 ring-1 ring-gray-200 hover:ring-gray-300 transition-all hover:scale-[1.02]">
<div className="flex items-center gap-2 mb-2">
<span className="text-sm font-medium text-gray-900">UI/UX Design</span>
</div>
<div className="space-y-1">
<div className="h-1.5 rounded-full bg-gray-300 w-4/5"></div>
<div className="h-1.5 rounded-full bg-gray-200 w-full"></div>
</div>
</div>
<div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 p-4 ring-1 ring-gray-200 hover:ring-gray-300 transition-all hover:scale-[1.02]">
<div className="flex items-center gap-2 mb-2">
<div className="h-6 w-6center"></div>
<span className="text-sm font-medium text-gray-900">Animation</span>
</div>
<div className="space-y-1">
<div className="h-1.5 rounded-full bg-gray-300 w-3/4"></div>
<div className="h-1.5 rounded-full bg-gray-200 w-1/2"></div>
</div>
</div>
<div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 p-4 ring-1 ring-gray-200 hover:ring-gray-300 transition-all hover:scale-[1.02]">
<div className="flex items-center gap-2 mb-2">
<span className="text-sm font-medium text-gray-900">Art Direction</span>
</div>
<div className="space-y-1">
<div className="h-1.5 rounded-full bg-gray-300 w-5/6"></div>
<div className="h-1.5 rounded-full bg-gray-200 w-3/4"></div>
</div>
</div>
</div>

<div className="mt-auto">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-gray-600 uppercase tracking-wide">Creative Process</span>
<span className="text-xs text-gray-500">75% Complete</span>
</div>
<div className="flex items-center gap-3">
<div className="flex-1">
<p className="text-xs text-gray-600">Brand identity development in progress</p>
</div>
<button className="h-8 w-8 hover:bg-gray-700 flex transition-colors bg-gray-900 rounded-full items-center justify-center">
<svg className="w-3.5 h-3.5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-20 pt-16 pb-16 scroll-element fade-in-up">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-gray-200 bg-gradient-to-br from-gray-50 to-white sm:px-10 lg:px-14 lg:py-14 pt-10 pr-6 pb-10 pl-6">
<div className="flex items-end justify-between mb-8">
<div className="">
<p className="text-[11px] sm:text-xs tracking-widest text-gray-500 font-light uppercase mb-3">(05) Portfolio</p>
<h2 className="text-3xl sm:text-5xl font-light tracking-tighter text-gray-900">Featured Work</h2>
<p className="mt-4 text-xl text-gray-600">Exploring the intersection of creativity and innovation</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-gradient-to-br from-gray-50 to-white ring-1 ring-gray-200 rounded-3xl overflow-hidden group hover:ring-coral-300 transition-colors scroll-element fade-in-up stagger-1">
<div className="aspect-video overflow-hidden">
<img alt="Brand Identity Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&amp;w=600&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div className="p-6">
<h3 className="font-semibold mb-2 text-gray-900">Brand Identity</h3>
<p className="text-gray-600 text-sm">Complete visual identity for tech startup</p>
<div className="mt-4 flex justify-between items-center">
<span className="text-coral-500 text-sm">Visual Identity</span>
<button className="h-8 w-8 hover:bg-gray-700 flex transition-colors bg-gray-900 rounded-full items-center justify-center">
<svg className="w-3.5 h-3.5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</div>
</div>
</div>
<div className="bg-gradient-to-br from-gray-50 to-white ring-1 ring-gray-200 rounded-3xl overflow-hidden group hover:ring-coral-300 transition-colors scroll-element fade-in-up stagger-2">
<div className="aspect-video overflow-hidden">
<img alt="UI/UX Design Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<h3 className="font-semibold mb-2 text-gray-900">Mobile App Design</h3>
<p className="text-gray-600 text-sm">User experience design for fintech platform</p>
<div className="mt-4 flex justify-between items-center">
<span className="text-coral-500 text-sm">UI/UX Design</span>
<button className="h-8 w-8 hover:bg-gray-700 flex transition-colors bg-gray-900 rounded-full items-center justify-center">
<svg className="w-3.5 h-3.5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</div>
</div>
</div>
<div className="bg-gradient-to-br from-gray-50 to-white ring-1 ring-gray-200 rounded-3xl overflow-hidden group hover:ring-coral-300 transition-colors scroll-element fade-in-up stagger-3">
<div className="aspect-video overflow-hidden">
<img alt="Animation Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<h3 className="font-semibold mb-2 text-gray-900">Motion Graphics</h3>
<p className="text-gray-600 text-sm">Animated explainer video series</p>
<div className="mt-4 flex justify-between items-center">
<span className="text-coral-500 text-sm">Animation</span>
<button className="h-8 w-8 hover:bg-gray-700 flex transition-colors bg-gray-900 rounded-full items-center justify-center">
<svg className="w-3.5 h-3.5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
<div className="text-center mt-12 scroll-element fade-in-up">
<button className="inline-flex gap-2 hover:bg-black transition-colors ring-1 ring-gray-300 text-sm font-medium text-white bg-gray-900 rounded-full pt-2.5 pr-4 pb-2.5 pl-4 shadow-sm items-center">
                        View All Projects
                        <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 scroll-element fade-in-up">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-gray-200 bg-gradient-to-br from-gray-50 to-white sm:px-10 lg:px-14 lg:py-14 pt-10 pr-6 pb-10 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="scroll-element fade-in-left">
<p className="text-[11px] sm:text-xs tracking-widest text-gray-500 font-light uppercase mb-3">(03) Process</p>
<h2 className="sm:text-5xl text-3xl font-light text-gray-900 tracking-tighter mb-6">Our Creative Process</h2>
<p className="text-xl text-gray-600 mb-8">We believe great design starts with understanding your vision and ends with exceeding your expectations.</p>
<div className="space-y-6">
<div className="flex items-start gap-4 scroll-element fade-in-up stagger-1">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-coral-50 flex items-center justify-center">
<span className="text-coral-500 font-semibold text-sm">01</span>
</div>
<div>
<h3 className="font-semibold mb-2 text-gray-900">Discovery &amp; Strategy</h3>
<p className="text-gray-600">We dive deep into your brand, audience, and goals to create a solid foundation.</p>
</div>
</div>
<div className="flex items-start gap-4 scroll-element fade-in-up stagger-2">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-coral-50 flex items-center justify-center">
<span className="text-coral-500 font-semibold text-sm">02</span>
</div>
<div className="">
<h3 className="font-semibold mb-2 text-gray-900">Creative Development</h3>
<p className="text-gray-600">Our team crafts innovative concepts that bring your vision to life.</p>
</div>
</div>
<div className="flex items-start gap-4 scroll-element fade-in-up stagger-3">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-coral-50 flex items-center justify-center">
<span className="text-coral-500 font-semibold text-sm">03</span>
</div>
<div className="">
<h3 className="font-semibold mb-2 text-gray-900">Execution &amp; Delivery</h3>
<p className="text-gray-600">We refine every detail to ensure pixel-perfect results that exceed expectations.</p>
</div>
</div>
</div>
</div>
<div className="relative scroll-element fade-in-right">
<div className="aspect-square flex bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a7491ea5-1a7a-4f23-a5e0-d0f3c352111c_1600w.jpg)] bg-cover ring-1 ring-gray-200 rounded-2xl pt-8 pr-8 pb-8 pl-8 items-end justify-start">
<div className="max-w-md text-left bg-white/90 backdrop-blur-sm rounded-2xl pt-6 pr-6 pb-6 pl-6 ring-1 ring-gray-200/50">
<h3 className="text-2xl font-light tracking-tighter text-gray-900 mb-3">Creative Excellence</h3>
<p className="text-gray-700">Every project is a canvas for innovation and artistic expression.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 scroll-element fade-in-up">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-gray-200 bg-gradient-to-br from-gray-50 to-white sm:px-10 lg:px-14 lg:py-14 pt-10 pr-6 pb-10 pl-6">
<div className="relative">
<div className="flex items-end justify-between mb-8">
<div className="">
<p className="text-[11px] sm:text-xs tracking-widest text-gray-500 font-light uppercase">(04) Testimonials</p>
<h3 className="mt-2 text-3xl sm:text-4xl tracking-tight font-light">Creative partnerships that inspire.</h3>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
<div className="lg:col-span-4">
<div className="w-40 h-48 sm:w-48 sm:h-56 rounded-2xl overflow-hidden ring-1 ring-gray-200 bg-white">
<img alt="Client portrait" className="w-full h-full object-cover" id="t-avatar" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=640&amp;q=60"/>
</div>
<p className="mt-4 text-[11px] tracking-widest text-gray-500 uppercase font-light">Client Story</p>
<div className="mt-6 flex items-center gap-3">
<button aria-label="Previous testimonial" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-gray-200 shadow-sm hover:bg-gray-50 transition" id="t-prev">
<svg className="lucide lucide-arrow-left h-4 w-4 text-gray-900" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button aria-label="Next testimonial" className="inline-flex h-10 w-10 ring-1 ring-black/10 hover:bg-black transition text-white bg-gray-900 rounded-full shadow-sm items-center justify-center" id="t-next">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div className="lg:col-span-8 relative">
<div className="text-gray-900">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 ring-1 ring-gray-200">
<svg className="lucide lucide-quote h-4 w-4 text-gray-700" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</span>
<p className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-[1.25] tracking-tight" id="t-quote">
                            Lumi transformed our brand from ordinary to extraordinary. Their creative vision and attention to detail delivered results beyond our wildest dreams.
                          </p>
<p className="mt-6 text-sm text-gray-600" id="t-author">— Sarah Johnson, Marketing Director at TechFlow</p>
</div>
<div className="absolute right-0 -bottom-2 sm:bottom-0">
<div className="flex items-center gap-3 p-2 rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm">
<img alt="Next client" className="h-14 w-20 object-cover rounded-xl" id="t-next-avatar" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&amp;fit=crop&amp;w=640&amp;q=60"/>
<div className="pr-2">
<p className="text-[11px] tracking-widest text-gray-500 uppercase font-light">Next Story →</p>
<p className="mt-1 text-xs text-gray-700" id="t-next-name">Michael R.</p>
</div>
</div>
</div>
</div>
</div>
<div className="mt-10 flex items-center gap-2">
<button className="t-dot h-1.5 w-6 rounded-full bg-gray-900" data-dot="0"></button>
<button className="t-dot h-1.5 w-1.5 rounded-full bg-gray-300" data-dot="1"></button>
<button className="t-dot h-1.5 w-1.5 rounded-full bg-gray-300" data-dot="2"></button>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-20 pt-16 pb-16 scroll-element fade-in-up">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-gray-200 bg-gradient-to-br from-gray-50 to-white sm:px-10 lg:px-14 lg:py-14 pt-10 pr-6 pb-10 pl-6">
<div className="flex items-end justify-between mb-8">
<div>
<p className="text-[11px] sm:text-xs tracking-widest text-gray-500 font-light uppercase mb-3">(06) Investment</p>
<h2 className="mt-3 text-3xl sm:text-5xl font-light tracking-tighter text-gray-900">Creative Services Packages</h2>
<p className="mt-4 text-xl text-gray-600">Transparent pricing for exceptional creative solutions</p>
</div>
<div className="hidden sm:flex items-center gap-3">
<span className="text-xs text-gray-500">Save 20% annually</span>
<div className="inline-flex rounded-full border border-gray-200 bg-white p-1">
<button className="px-3 py-1.5 text-xs font-medium rounded-full bg-gray-900 text-white font-sans">Monthly</button>
<button className="px-3 py-1.5 text-xs font-medium rounded-full text-gray-700 hover:text-gray-900 font-sans">Yearly</button>
</div>
</div>
</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
<article className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white to-gray-50 p-6 shadow-sm ring-1 ring-gray-200 scroll-element fade-in-up stagger-1">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Essential</h3>
<span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-600">Start Here</span>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-semibold tracking-tight text-gray-900">$2,500</span>
<span className="text-sm text-gray-500">/project</span>
</div>
<p className="mt-1 text-sm text-gray-600">Perfect for startups and small businesses</p>
</div>
<ul className="space-y-3 mb-6">
<li className="flex items-start gap-2 text-sm text-gray-700">
<svg className="text-coral-500 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                                Logo &amp; Brand Identity
                            </li>
<li className="flex items-start gap-2 text-sm text-gray-700">
<svg className="text-coral-500 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                                Brand Guidelines
                            </li>
<li className="flex items-start gap-2 text-sm text-gray-700">
<svg className="text-coral-500 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                                3 Design Concepts
                            </li>
<li className="flex items-start gap-2 text-sm text-gray-700">
<svg className="text-coral-500 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                                2 Weeks Delivery
                            </li>
</ul>
<button className="w-full inline-flex gap-2 hover:bg-gray-50 transition-colors text-sm font-medium text-gray-900 bg-white border-gray-200 border rounded-full pt-2.5 pr-4 pb-2.5 pl-4 items-center justify-center">
                            Get Started
                            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</article>
<article className="relative overflow-hidden ring-1 ring-coral-200 bg-gray-950 rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-sm scroll-element fade-in-up stagger-2">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold text-gray-50 tracking-tight">Professional</h3>
<span className="inline-flex items-center gap-1 rounded-full bg-coral-100 px-2 py-0.5 text-[10px] font-medium text-coral-700">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
</svg>
                                Most Popular
                            </span>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-semibold text-gray-50 tracking-tight">$5,500</span>
<span className="text-sm text-gray-300">/project</span>
</div>
<p className="text-sm text-gray-300 mt-1">For growing businesses ready to stand out</p>
</div>
<ul className="space-y-3 mb-6">
<li className="flex gap-2 text-sm text-gray-300 items-start">
<svg className="text-coral-500 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                                Complete Brand System
                            </li>
<li className="flex gap-2 text-sm text-gray-300 items-start">
<svg className="text-coral-500 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                                UI/UX Design
                            </li>
<li className="flex gap-2 text-sm text-gray-300 items-start">
<svg className="text-coral-500 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                                Marketing Materials
                            </li>
<li className="flex gap-2 text-sm text-gray-300 items-start">
<svg className="text-coral-500 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                                Priority Support
                            </li>
</ul>
<button className="w-full inline-flex gap-2 hover:bg-gray-50 transition-colors text-sm font-medium text-gray-900 bg-white border-gray-200 border rounded-full pt-2.5 pr-4 pb-2.5 pl-4 items-center justify-center">
                            Start Project
                            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</article>
<article className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white to-gray-50 p-6 shadow-sm ring-1 ring-gray-200 scroll-element fade-in-up stagger-3">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Enterprise</h3>
<span className="inline-flex items-center rounded-full bg-gray-700 px-2 py-0.5 text-[10px] font-medium text-white">Premium</span>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-semibold tracking-tight text-gray-900">Custom</span>
</div>
<p className="mt-1 text-sm text-gray-600">Tailored solutions for complex projects</p>
</div>
<ul className="space-y-3 mb-6">
<li className="flex items-start gap-2 text-sm text-gray-700">
<svg className="text-gray-700 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
</svg>
                                Full Creative Direction
                            </li>
<li className="flex items-start gap-2 text-sm text-gray-700">
<svg className="text-gray-700 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
</svg>
                                Motion Graphics
                            </li>
<li className="flex items-start gap-2 text-sm text-gray-700">
<svg className="text-gray-700 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
                                Dedicated Team
                            </li>
<li className="flex items-start gap-2 text-sm text-gray-700">
<svg className="text-gray-700 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
<path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path>
</svg>
                                24/7 Creative Support
                            </li>
</ul>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors">
                            Let's Talk
                            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
<path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path>
</svg>
</button>
</article>
</div>
<div className="text-center mt-8">
<p className="text-xs text-gray-500">All packages include unlimited revisions and full project ownership. Custom payment plans available.</p>
</div>
</div>
</div>
</section>
<section className="sm:py-20 pt-16 pb-16 scroll-element fade-in-up">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="bg-gradient-to-br from-gray-50 to-white ring-1 ring-gray-200 rounded-3xl sm:px-10 lg:px-14 lg:py-14 pt-10 pr-6 pb-10 pl-6 text-center">
<h3 className="text-3xl sm:text-5xl font-light tracking-tighter text-gray-900 mb-4">Ready to Create Something Amazing?</h3>
<p className="text-xl text-gray-600 mb-8">Let's collaborate and bring your creative vision to life.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="inline-flex items-center gap-2 bg-coral-500 hover:bg-coral-600 text-white rounded-full px-6 py-3 text-sm font-medium transition-colors">
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                        Start Your Project
                    </button>
<button className="inline-flex items-center gap-2 ring-1 ring-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-6 py-3 text-sm font-medium transition-colors">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                        Schedule Consultation
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-gradient-to-br from-gray-50 to-white ring-t ring-gray-200 pt-12 pb-12 scroll-element fade-in-up">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<span className="text-xl font-semibold tracking-tight text-gray-900">Lumi</span>
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-coral-50">
<svg className="lucide lucide-zap w-3.5 h-3.5 text-coral-500" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</span>
</div>
<p className="text-gray-600 mb-4">Creative studio bringing ideas to life through innovative design and strategic thinking.</p>
<div className="flex items-center gap-4">
<a className="text-gray-400 hover:text-coral-500 transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-1.1 6.4-1.6 3.4-4.6 1.6-1.6-1.1-2.9-2.5-1.1z"></path></svg>
</a>
<a className="text-gray-400 hover:text-coral-500 transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-gray-400 hover:text-coral-500 transition-colors" href="#">
<svg className="lucide lucide-dribbble w-5 h-5" data-lucide="dribbble" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m8.56 2.75 4.37 6.03M21.7 13.4l-4.37 6.03M22.23 10.23l-6.03 4.37"></path></svg>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-4">Services</h4>
<ul className="space-y-2">
<li><a className="text-sm text-gray-600 hover:text-coral-500 transition-colors" href="#">Brand Identity</a></li>
<li><a className="text-sm text-gray-600 hover:text-coral-500 transition-colors" href="#">UI/UX Design</a></li>
<li><a className="text-sm text-gray-600 hover:text-coral-500 transition-colors" href="#">Art Direction</a></li>
<li><a className="text-sm text-gray-600 hover:text-coral-500 transition-colors" href="#">Motion Graphics</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-4">Contact</h4>
<ul className="space-y-2">
<li><a className="text-sm text-gray-600 hover:text-coral-500 transition-colors" href="mailto:hello@lumi.studio">hello@lumi.studio</a></li>
<li><a className="text-sm text-gray-600 hover:text-coral-500 transition-colors" href="tel:+1-555-123-4567">+1 (555) 123-4567</a></li>
<li><span className="text-sm text-gray-600">San Francisco, CA</span></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
<p className="text-sm text-gray-500">© 2024 Lumi Creative Studio. All rights reserved.</p>
<div className="flex items-center gap-6 mt-4 sm:mt-0">
<a className="text-sm text-gray-500 hover:text-coral-500 transition-colors" href="#">Privacy Policy</a>
<a className="text-sm text-gray-500 hover:text-coral-500 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
