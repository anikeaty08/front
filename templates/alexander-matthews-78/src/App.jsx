import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons with proper stroke width
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Intersection Observer for Scroll Animations (Fade Up)
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Run once
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));

            // Mobile Menu Toggle Logic
            const menuBtn = document.getElementById('mobile-menu-btn');
            const navbar = document.getElementById('navbar');
            
            menuBtn.addEventListener('click', () => {
                // Simplistic mobile menu toggle for styling context (real app would have a dedicated mobile menu drawer)
                const linksContainer = navbar.querySelector('.hidden.md\\:flex');
                if(linksContainer.classList.contains('hidden')) {
                    linksContainer.classList.remove('hidden', 'md:flex');
                    linksContainer.classList.add('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'w-full', 'bg-white', 'p-6', 'shadow-lg', 'border-t');
                } else {
                    linksContainer.classList.add('hidden', 'md:flex');
                    linksContainer.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'w-full', 'bg-white', 'p-6', 'shadow-lg', 'border-t');
                }
            });

            // Navbar shrink on scroll
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('py-0');
                    navbar.classList.remove('py-2');
                } else {
                    navbar.classList.add('py-2');
                    navbar.classList.remove('py-0');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-[#FFFFFF]/95 backdrop-blur-sm border-b border-[#1A1A1A]/5 transition-all duration-300 shadow-sm" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 bg-[#1A1A1A] text-[#FFFFFF] rounded flex items-center justify-center font-heading font-semibold text-xl tracking-tight transition-transform group-hover:scale-105">
                    AM
                </div>
<span className="font-heading font-semibold text-base tracking-tight uppercase hidden sm:block">
                    Alexander Matthews
                </span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-[#F5A623] transition-colors" href="#home">Home</a>
<a className="text-sm font-medium hover:text-[#F5A623] transition-colors" href="#about">About Us</a>
<a className="text-sm font-medium hover:text-[#F5A623] transition-colors" href="#programs">Programs</a>
<a className="text-sm font-medium hover:text-[#F5A623] transition-colors" href="#testimonials">Testimonials</a>
</div>

<a className="hidden sm:inline-flex items-center justify-center bg-[#F5A623] text-[#1A1A1A] text-xs font-semibold uppercase tracking-widest rounded-full px-6 py-3 hover:bg-[#e0961f] transition-colors" href="#apply">
                Apply Now
            </a>

<button className="md:hidden text-[#1A1A1A]" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-end pt-20 pb-16 md:pb-24 lg:pb-32 overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<img alt="Alexander Matthews training" className="w-full h-full object-cover object-top" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#1A1A1A]/95 via-[#1A1A1A]/50 to-transparent"></div>
<div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex justify-between items-end">

<div className="max-w-2xl reveal">
<span className="uppercase tracking-[0.2em] text-xs font-semibold text-white/70 mb-6 block">Online Fitness Coach</span>
<h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1] mb-6">
                    Build Your Best Body — With a Coach Who's Done It
                </h1>
<p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl">
                    Personalized training &amp; nutrition for driven men ready to stop guessing and start transforming.
                </p>
<a className="inline-flex items-center justify-center bg-[#F5A623] text-[#1A1A1A] text-sm font-semibold uppercase tracking-widest rounded-full px-8 py-4 hover:bg-[#e0961f] transition-all hover:scale-105 group" href="#apply">
                    Start Your Journey
                    <i className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>

<div className="hidden md:flex flex-col items-center gap-8 reveal delay-200">
<div className="flex flex-col gap-4 text-white">
<a className="p-2 hover:text-[#F5A623] transition-colors border border-white/20 rounded-full hover:border-[#F5A623]/50 bg-white/5 backdrop-blur-sm" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="p-2 hover:text-[#F5A623] transition-colors border border-white/20 rounded-full hover:border-[#F5A623]/50 bg-white/5 backdrop-blur-sm" href="#">
<i className="w-5 h-5" data-lucide="video"></i>
</a>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50 text-xs uppercase tracking-widest reveal delay-300">
            Scroll
            <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
</div>

<div className="absolute bottom-8 left-6 z-20 hidden lg:flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 pr-5 rounded-full border border-white/10 reveal delay-200">
<div className="w-8 h-8 bg-[#F5A623] rounded-full flex items-center justify-center text-[#1A1A1A] font-heading font-semibold text-xs">AM</div>
<span className="text-white text-xs font-semibold uppercase tracking-widest">Est. 2018</span>
</div>
</header>

<section className="py-24 md:py-32 bg-[#FFFFFF]" id="about">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center max-w-4xl mx-auto mb-16 md:mb-24 reveal">
<span className="inline-block border border-[#1A1A1A]/10 rounded-full px-4 py-2 uppercase tracking-[0.2em] text-xs font-semibold text-[#1A1A1A]/60 mb-8">About Alex</span>
<h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-8">
                    Your Coach to <i className="text-[#F5A623] font-normal">Build</i>, <i className="text-[#F5A623] font-normal">Perform</i>, and <i className="text-[#F5A623] font-normal">Transform</i>
</h2>
<p className="text-[#1A1A1A]/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    Alex Matthews is an online fitness coach dedicated to helping driven men build real, lasting physiques — through smart training, sustainable nutrition, and real accountability.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 items-center">
<div className="rounded-[16px] overflow-hidden h-[400px] reveal delay-100">
<img alt="Training form" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-[16px] overflow-hidden h-[500px] md:-mt-12 reveal delay-200">
<img alt="Alex coaching" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-[16px] overflow-hidden h-[400px] reveal delay-300">
<img alt="Nutrition prep" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto reveal">

<div className="w-full md:w-1/2 bg-[#E8E4DE] rounded-[16px] p-8 md:p-12 text-center relative overflow-hidden group">
<div className="absolute inset-0 bg-[#F5A623]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
<div className="relative z-10 font-heading text-5xl md:text-6xl font-semibold tracking-tight text-[#1A1A1A] mb-2">100+</div>
<div className="relative z-10 text-sm font-medium text-[#1A1A1A]/60 uppercase tracking-widest">Clients Transformed</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
<a className="flex items-center justify-center bg-white text-[#1A1A1A] w-20 h-20 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:scale-110 hover:text-[#F5A623] transition-all group" href="#">
<span className="text-xs font-semibold uppercase tracking-widest">Read<br/>More</span>
</a>
</div>

<div className="w-full md:w-1/2 bg-[#E8E4DE] rounded-[16px] p-8 md:p-12 text-center relative overflow-hidden group">
<div className="absolute inset-0 bg-[#F5A623]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
<div className="relative z-10 font-heading text-5xl md:text-6xl font-semibold tracking-tight text-[#1A1A1A] mb-2">98%</div>
<div className="relative z-10 text-sm font-medium text-[#1A1A1A]/60 uppercase tracking-widest">Client Retention Rate</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#F7F4EE] rounded-[40px] md:rounded-[60px] mx-2 md:mx-6 my-6" id="programs">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

<div className="lg:col-span-5 relative">
<div className="sticky top-32 reveal">
<span className="inline-block border border-[#1A1A1A]/10 bg-white/50 rounded-full px-4 py-2 uppercase tracking-[0.2em] text-xs font-semibold text-[#1A1A1A]/60 mb-8">Our Programs</span>
<h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
                            Find the Perfect <i className="text-[#F5A623] font-normal">Program</i> for You
                        </h2>
<p className="text-[#1A1A1A]/70 text-lg mb-10 leading-relaxed">
                            Every plan is built around your body, your goals, and your lifestyle. No cookie-cutter templates, just proven systems customized to yield maximum results.
                        </p>
<a className="inline-flex items-center justify-center bg-[#F5A623] text-[#1A1A1A] text-sm font-semibold uppercase tracking-widest rounded-full px-8 py-4 hover:bg-[#e0961f] transition-all group" href="#">
                            See All Programs
                            <i className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="lg:col-span-7 flex flex-col gap-6">

<div className="bg-[#E8E4DE] rounded-[16px] p-6 md:p-8 flex flex-col-reverse md:flex-row items-center gap-8 group hover:bg-[#e3ded7] transition-colors reveal">
<div className="flex-1">
<h3 className="font-heading text-2xl font-semibold tracking-tight mb-4 group-hover:text-[#F5A623] transition-colors">Custom Training Plan</h3>
<p className="text-[#1A1A1A]/70 mb-6 text-base">Fully personalized workout programming built around your schedule, equipment access, and specific goals.</p>
<button className="w-12 h-12 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center group-hover:bg-[#F5A623] group-hover:border-[#F5A623] group-hover:text-[#1A1A1A] transition-all">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</button>
</div>
<div className="w-full md:w-48 h-48 rounded-[12px] overflow-hidden shrink-0">
<img alt="Training plan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="bg-[#E8E4DE] rounded-[16px] p-6 md:p-8 flex flex-col-reverse md:flex-row items-center gap-8 group hover:bg-[#e3ded7] transition-colors reveal delay-100">
<div className="flex-1">
<h3 className="font-heading text-2xl font-semibold tracking-tight mb-4 group-hover:text-[#F5A623] transition-colors">Nutrition Coaching</h3>
<p className="text-[#1A1A1A]/70 mb-6 text-base">Learn exactly what to eat to fuel performance and accelerate fat loss without giving up the foods you love.</p>
<button className="w-12 h-12 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center group-hover:bg-[#F5A623] group-hover:border-[#F5A623] group-hover:text-[#1A1A1A] transition-all">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</button>
</div>
<div className="w-full md:w-48 h-48 rounded-[12px] overflow-hidden shrink-0">
<img alt="Nutrition" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="bg-[#E8E4DE] rounded-[16px] p-6 md:p-8 flex flex-col-reverse md:flex-row items-center gap-8 group hover:bg-[#e3ded7] transition-colors reveal delay-200">
<div className="flex-1">
<h3 className="font-heading text-2xl font-semibold tracking-tight mb-4 group-hover:text-[#F5A623] transition-colors">1-on-1 Online Coaching</h3>
<p className="text-[#1A1A1A]/70 mb-6 text-base">Direct access to Alex with weekly check-ins, form reviews, and real-time adjustments to your strategy.</p>
<button className="w-12 h-12 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center group-hover:bg-[#F5A623] group-hover:border-[#F5A623] group-hover:text-[#1A1A1A] transition-all">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</button>
</div>
<div className="w-full md:w-48 h-48 rounded-[12px] overflow-hidden shrink-0">
<img alt="1-on-1 Coaching" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="bg-[#E8E4DE] rounded-[16px] p-6 md:p-8 flex flex-col-reverse md:flex-row items-center gap-8 group hover:bg-[#e3ded7] transition-colors reveal delay-300">
<div className="flex-1">
<h3 className="font-heading text-2xl font-semibold tracking-tight mb-4 group-hover:text-[#F5A623] transition-colors">Physique Transformation</h3>
<p className="text-[#1A1A1A]/70 mb-6 text-base">The complete system: tailored training, macro-based nutrition, and supreme accountability bundled into one.</p>
<button className="w-12 h-12 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center group-hover:bg-[#F5A623] group-hover:border-[#F5A623] group-hover:text-[#1A1A1A] transition-all">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</button>
</div>
<div className="w-full md:w-48 h-48 rounded-[12px] overflow-hidden shrink-0">
<img alt="Transformation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#FFFFFF] overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative h-[600px] md:h-[700px] w-full reveal">

<div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4 opacity-[0.03] pointer-events-none">
<div className="border border-[#1A1A1A]"></div><div className="border border-[#1A1A1A]"></div><div className="border border-[#1A1A1A]"></div>
<div className="border border-[#1A1A1A]"></div><div className="border border-[#1A1A1A]"></div><div className="border border-[#1A1A1A]"></div>
<div className="border border-[#1A1A1A]"></div><div className="border border-[#1A1A1A]"></div><div className="border border-[#1A1A1A]"></div>
</div>

<div className="absolute top-0 left-0 w-[60%] h-[50%] rounded-[16px] overflow-hidden z-10 shadow-lg">
<img alt="Coach portrait 1" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 left-4 font-heading text-4xl text-white/50 font-semibold tracking-tight">01.</span>
</div>

<div className="absolute bottom-12 left-[15%] w-[55%] h-[55%] rounded-[16px] overflow-hidden z-20 shadow-xl border-4 border-white">
<img alt="Coach portrait 2" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<span className="absolute bottom-4 right-4 font-heading text-5xl text-white/50 font-semibold tracking-tight">02.</span>
</div>

<div className="absolute top-[20%] right-0 w-[45%] h-[45%] rounded-[16px] overflow-hidden z-10 shadow-lg">
<img alt="Coach portrait 3" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<span className="absolute top-4 left-4 font-heading text-4xl text-white/50 font-semibold tracking-tight">03.</span>
</div>

<div className="absolute bottom-0 left-0 bg-[#E8E4DE] p-4 pr-12 rounded-[16px] flex items-center gap-4 z-30 shadow-lg border border-white">
<div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
<img alt="Alex small" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="font-heading font-semibold text-base leading-tight">Alex Matthews</h4>
<p className="text-xs text-[#1A1A1A]/60">Online Fitness Coach</p>
</div>
<div className="absolute right-[-16px] top-1/2 -translate-y-1/2 bg-[#F5A623] w-8 h-8 rounded-full flex items-center justify-center shadow-sm">
<i className="w-4 h-4 text-[#1A1A1A]" data-lucide="check"></i>
</div>
</div>
</div>

<div className="reveal delay-200 lg:pl-12">
<span className="inline-block border border-[#1A1A1A]/10 rounded-full px-4 py-2 uppercase tracking-[0.2em] text-xs font-semibold text-[#1A1A1A]/60 mb-8">Meet Your Coach</span>
<h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-8">
                        A <i className="text-[#F5A623] font-normal">Coach</i> Who Transforms Your Routine Into Lasting Results.
                    </h2>
<p className="text-[#1A1A1A]/70 text-lg mb-10 leading-relaxed">
                        With over a decade of experience in the trenches and hundreds of successful client transformations, Alex brings a no-nonsense, science-backed approach to your fitness journey. It's not about quick fixes; it's about building a sustainable lifestyle.
                    </p>
<a className="inline-flex items-center justify-center bg-[#F5A623] text-[#1A1A1A] text-sm font-semibold uppercase tracking-widest rounded-full px-8 py-4 hover:bg-[#e0961f] transition-all group" href="#apply">
                        Find Your Perfect Plan
                        <i className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#FFFFFF] border-t border-[#1A1A1A]/5" id="testimonials">
<div className="max-w-7xl mx-auto px-6">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24 reveal">
<div className="max-w-2xl">
<span className="inline-block border border-[#1A1A1A]/10 rounded-full px-4 py-2 uppercase tracking-[0.2em] text-xs font-semibold text-[#1A1A1A]/60 mb-8">Testimonials</span>
<h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
                        Words From Our <i className="text-[#F5A623] font-normal">Thriving</i> Community
                    </h2>
</div>
<div className="max-w-sm flex flex-col items-start md:items-end gap-6 text-left md:text-right">
<p className="text-[#1A1A1A]/70 text-base">
                        Real stories. Real results. Hear from the men who trusted the process and completely changed their lives.
                    </p>
<div className="flex gap-3">
<button className="w-12 h-12 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center hover:bg-[#F5A623] hover:border-[#F5A623] hover:text-[#1A1A1A] transition-all">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<button className="w-12 h-12 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center hover:bg-[#F5A623] hover:text-[#1A1A1A] transition-all">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>

<div className="columns-1 md:columns-2 gap-6 space-y-6">

<div className="break-inside-avoid bg-[#E8E4DE] p-8 rounded-[16px] reveal">
<div className="flex items-center gap-1 mb-6 text-[#F5A623]">
<i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-xl md:text-2xl font-heading tracking-tight leading-snug mb-8">
                        "Alex completely changed how I approach training. Lost 12kg and feel stronger than ever. The custom nutrition plan was a game changer for my energy levels at work."
                    </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#1A1A1A]/10 overflow-hidden">
<img alt="James R." className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h5 className="font-semibold text-base">James R.</h5>
<p className="text-xs text-[#1A1A1A]/60 uppercase tracking-widest">Sydney, AU</p>
</div>
</div>
</div>

<div className="break-inside-avoid bg-[#E8E4DE] p-8 rounded-[16px] reveal delay-100 relative overflow-hidden group">
<img alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10">
<div className="flex items-center gap-1 mb-6 text-[#F5A623]">
<i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-xl md:text-2xl font-heading tracking-tight leading-snug mb-8">
                            "The accountability alone was worth it. I finally stayed consistent for 6 months straight. I used to hop between random workouts, but having a clear, structured path made all the difference."
                        </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#1A1A1A]/10 overflow-hidden">
<img alt="Marcus T." className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h5 className="font-semibold text-base">Marcus T.</h5>
<p className="text-xs text-[#1A1A1A]/60 uppercase tracking-widest">Melbourne, AU</p>
</div>
</div>
</div>
</div>

<div className="break-inside-avoid bg-white border border-[#1A1A1A]/10 p-8 rounded-[16px] reveal delay-200">
<div className="flex items-center gap-1 mb-6 text-[#F5A623]">
<i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-xl md:text-2xl font-heading tracking-tight leading-snug mb-8">
                        "Best investment I've made in myself. Custom plan, real results, and Alex is always available to answer questions and tweak the program."
                    </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#1A1A1A]/10 overflow-hidden">
<img alt="Daniel K." className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h5 className="font-semibold text-base">Daniel K.</h5>
<p className="text-xs text-[#1A1A1A]/60 uppercase tracking-widest">Brisbane, AU</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 md:py-48 bg-[#1A1A1A] overflow-hidden" id="apply">

<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center reveal">
<h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight text-white mb-10">
                Ready to Build Your Best Physique and unlock your <i className="text-[#F5A623] font-normal">strongest self</i> with Alex?
            </h2>
<a className="inline-flex items-center justify-center bg-[#F5A623] text-[#1A1A1A] text-base font-semibold uppercase tracking-widest rounded-full px-10 py-5 hover:bg-white hover:text-[#1A1A1A] hover:scale-105 transition-all group" href="#">
                Apply for Coaching
                <i className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<footer className="relative bg-[#111111] pt-24 pb-8 overflow-hidden text-white/70">

<div className="absolute bottom-[-10%] left-0 w-full text-center text-[15vw] font-heading font-semibold text-white/[0.02] pointer-events-none leading-none z-0 whitespace-nowrap select-none">
            ALEXANDER
        </div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 border-b border-white/10 pb-16 mb-8">

<div className="md:col-span-4 flex flex-col gap-6">
<a className="flex items-center gap-3" href="#">
<div className="w-10 h-10 bg-[#F5A623] text-[#1A1A1A] rounded flex items-center justify-center font-heading font-semibold text-xl tracking-tight">
                            AM
                        </div>
<span className="font-heading font-semibold text-base tracking-tight text-white uppercase">
                            Alexander Matthews
                        </span>
</a>
<p className="text-sm max-w-xs mt-2">Premium online coaching for men dedicated to building their best bodies.</p>
<div className="flex flex-col gap-2 mt-4 text-sm font-medium">
<a className="hover:text-[#F5A623] transition-colors flex items-center gap-2" href="mailto:contact@alexmatthews.fit">
<i className="w-4 h-4" data-lucide="mail"></i> contact@alexmatthews.fit
                        </a>
<a className="hover:text-[#F5A623] transition-colors flex items-center gap-2" href="tel:+1234567890">
<i className="w-4 h-4" data-lucide="phone"></i> +1 (555) 123-4567
                        </a>
</div>
</div>

<div className="md:col-span-4 flex flex-col items-start md:items-center">
<div className="flex flex-col gap-4">
<h6 className="text-white text-xs uppercase tracking-[0.2em] font-semibold mb-2">Quick Links</h6>
<a className="text-sm hover:text-[#F5A623] transition-colors" href="#home">Home</a>
<a className="text-sm hover:text-[#F5A623] transition-colors" href="#about">About Us</a>
<a className="text-sm hover:text-[#F5A623] transition-colors" href="#programs">Our Programs</a>
<a className="text-sm hover:text-[#F5A623] transition-colors" href="#testimonials">Testimonials</a>
<a className="text-sm hover:text-[#F5A623] transition-colors" href="#apply">Apply Now</a>
</div>
</div>

<div className="md:col-span-4 flex flex-col gap-4">
<h6 className="text-white text-xs uppercase tracking-[0.2em] font-semibold mb-2">Join Our Newsletter</h6>
<p className="text-sm mb-2">Get weekly training tips and exclusive offers direct to your inbox.</p>
<form className="relative group">
<input className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] transition-all" placeholder="Your email address" required="" type="email"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#F5A623] rounded-full flex items-center justify-center text-[#1A1A1A] hover:bg-white transition-colors" type="submit">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</form>
<div className="flex gap-4 mt-4">
<a className="text-white/50 hover:text-[#F5A623] transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-white/50 hover:text-[#F5A623] transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-white/50 hover:text-[#F5A623] transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
<p>© 2024 Alexander Matthews Coaching. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
