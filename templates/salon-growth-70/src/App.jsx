import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const icon = btn.querySelector('iconify-icon');
        const links = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            const isOpen = !menu.classList.contains('opacity-0');
            if (isOpen) {
                menu.classList.add('opacity-0', 'pointer-events-none');
                icon.setAttribute('icon', 'solar:hamburger-menu-linear');
                document.body.style.overflow = '';
            } else {
                menu.classList.remove('opacity-0', 'pointer-events-none');
                icon.setAttribute('icon', 'solar:close-circle-linear');
                document.body.style.overflow = 'hidden';
            }
        }

        btn.addEventListener('click', toggleMenu);
        links.forEach(link => link.addEventListener('click', toggleMenu));

        // Navbar blur on scroll
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-sm', 'bg-white/90');
                nav.classList.remove('bg-transparent');
            } else {
                nav.classList.remove('shadow-sm', 'bg-white/90');
                nav.classList.add('bg-transparent');
            }
        });

        // FAQ Accordion Logic
        const faqBtns = document.querySelectorAll('.faq-btn');
        faqBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const content = btn.nextElementSibling;
                const icon = btn.querySelector('.faq-icon');
                const isOpen = content.style.maxHeight;

                // Close all other accordions
                document.querySelectorAll('.faq-content').forEach(c => {
                    c.style.maxHeight = null;
                    c.classList.add('opacity-0');
                    c.classList.remove('opacity-100');
                });
                document.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('rotate-180'));

                // Open clicked if it was closed
                if (!isOpen) {
                    content.style.maxHeight = content.scrollHeight + "px";
                    content.classList.remove('opacity-0');
                    content.classList.add('opacity-100');
                    icon.classList.add('rotate-180');
                }
            });
        });

        // Custom Dropdown Logic for Booking Form
        function setupDropdown(containerId, btnId, menuId, textId, inputId, iconId, optionClass) {
            const container = document.getElementById(containerId);
            const btn = document.getElementById(btnId);
            const menu = document.getElementById(menuId);
            const text = document.getElementById(textId);
            const input = document.getElementById(inputId);
            const icon = document.getElementById(iconId);
            const options = document.querySelectorAll(`.${optionClass}`);

            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const isOpen = !menu.classList.contains('opacity-0');
                
                // Close all other dropdowns
                document.querySelectorAll('.dropdown-menu-custom').forEach(m => {
                    m.classList.add('opacity-0', 'invisible', 'translate-y-2');
                    m.classList.remove('opacity-100', 'visible', 'translate-y-0');
                });
                document.querySelectorAll('.dropdown-icon-custom').forEach(i => {
                    i.classList.remove('rotate-180');
                });

                if (!isOpen) {
                    menu.classList.remove('opacity-0', 'invisible', 'translate-y-2');
                    menu.classList.add('opacity-100', 'visible', 'translate-y-0');
                    icon.classList.add('rotate-180');
                }
            });

            options.forEach(option => {
                option.addEventListener('click', (e) => {
                    e.stopPropagation();
                    text.textContent = option.textContent;
                    text.classList.remove('text-gray-400');
                    text.classList.add('text-[#333333]');
                    input.value = option.textContent;
                    
                    menu.classList.add('opacity-0', 'invisible', 'translate-y-2');
                    menu.classList.remove('opacity-100', 'visible', 'translate-y-0');
                    icon.classList.remove('rotate-180');
                });
            });

            document.addEventListener('click', (e) => {
                if (!container.contains(e.target)) {
                    menu.classList.add('opacity-0', 'invisible', 'translate-y-2');
                    menu.classList.remove('opacity-100', 'visible', 'translate-y-0');
                    icon.classList.remove('rotate-180');
                }
            });
        }

        setupDropdown('service-dropdown-container', 'service-dropdown-btn', 'service-dropdown-menu', 'service-dropdown-text', 'service-input', 'service-dropdown-icon', 'service-option');
        setupDropdown('time-dropdown-container', 'time-dropdown-btn', 'time-dropdown-menu', 'time-dropdown-text', 'time-input', 'time-dropdown-icon', 'time-option');

        // Scroll Reveal Animation using Intersection Observer
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealOnScroll = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, revealOptions);

        revealElements.forEach(el => {
            revealOnScroll.observe(el);
        });

        // Trigger reveal for elements already in view on load
        setTimeout(() => {
            revealElements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    el.classList.add('active');
                }
            });
        }, 100);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-panel transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-xl bg-[#FDE2E4] text-[#E76F9B] flex items-center justify-center group-hover:bg-[#E76F9B] group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:crown-star-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="font-semibold text-xl tracking-tight text-[#333333]">Glow</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-500 hover:text-[#E76F9B] transition-colors" href="#problem">The Problem</a>
<a className="text-sm font-medium text-gray-500 hover:text-[#E76F9B] transition-colors" href="#solution">Solutions</a>
<a className="text-sm font-medium text-gray-500 hover:text-[#E76F9B] transition-colors" href="#testimonials">Success Stories</a>
<a className="text-sm font-medium text-gray-500 hover:text-[#E76F9B] transition-colors" href="#faq">FAQ</a>
<a className="text-sm font-medium text-gray-500 hover:text-[#E76F9B] transition-colors" href="#booking">Book Now</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 bg-[#E76F9B] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#d45c88] hover:shadow-lg hover:shadow-[#FDE2E4] transition-all duration-300 hover:-translate-y-0.5 text-white" href="#cta">
                    Get Started
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<button className="md:hidden text-[#333333] flex items-center justify-center p-1" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-40 backdrop-blur-md flex flex-col items-center justify-center gap-8 opacity-0 pointer-events-none transition-opacity duration-300 md:hidden bg-white/95" id="mobile-menu">
<a className="mobile-link text-2xl font-semibold tracking-tight text-[#333333] hover:text-[#E76F9B]" href="#problem">The Problem</a>
<a className="mobile-link text-2xl font-semibold tracking-tight text-[#333333] hover:text-[#E76F9B]" href="#solution">Solutions</a>
<a className="mobile-link text-2xl font-semibold tracking-tight text-[#333333] hover:text-[#E76F9B]" href="#testimonials">Success Stories</a>
<a className="mobile-link text-2xl font-semibold tracking-tight text-[#333333] hover:text-[#E76F9B]" href="#faq">FAQ</a>
<a className="mobile-link text-2xl font-semibold tracking-tight text-[#333333] hover:text-[#E76F9B]" href="#booking">Book Now</a>
<a className="mobile-link mt-4 bg-[#E76F9B] px-8 py-3 rounded-full text-base font-medium shadow-lg shadow-[#FDE2E4] text-white" href="#cta">Book your free trial</a>
</div>

<main className="lg:pt-40 lg:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FDE2E4] rounded-full blur-[100px] opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E76F9B] rounded-full blur-[120px] opacity-10 translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-x-16 gap-y-16 items-center">

<div className="flex flex-col gap-6 z-10 lg:text-left text-center relative gap-x-6 gap-y-6">
<div className="inline-flex items-center gap-2 bg-[#FDE2E4] text-[#E76F9B] px-4 py-1.5 rounded-full text-xs font-medium mx-auto lg:mx-0 w-max reveal active">
<iconify-icon icon="solar:stars-linear" strokeWidth="1.5" width="14"></iconify-icon>
                        Complete Salon Growth System
                    </div>
<h1 className="leading-[1.1] reveal delay-100 md:text-6xl lg:text-5xl active text-5xl font-semibold text-[#333333] tracking-tight">
                        With our system, you won't lose any more <span className="inline-block text-[#E76F9B] relative">
                            Bookings
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#FDE2E4] -z-10" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="8"></path>
</svg>
</span>
</h1>
<p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0 reveal delay-200 active">
                        Turn every lost contact into a loyal client. A smart automation system that replies to messages, manages appointments, and automatically boosts your Google reviews.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mt-4 justify-center lg:justify-start reveal delay-300 active">
<a className="w-full sm:w-auto bg-[#E76F9B] px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#d45c88] hover:shadow-xl hover:shadow-[#FDE2E4] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 text-white" href="#cta">
                            Book a Free Trial
                            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3.5 text-gray-500 text-sm font-medium hover:text-[#E76F9B] transition-colors flex items-center justify-center gap-2" href="#how-it-works">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            How it works?
                        </a>
</div>

<div className="flex gap-3 text-sm font-medium text-[#333333] items-center justify-center lg:justify-start mt-2">
<div className="flex -space-x-2">
<img alt="Client" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<img alt="Client" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Client" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
</div>
<span>Trusted by dozens of beauty salons</span>
</div>
</div>

<div className="relative flex justify-center lg:justify-end reveal delay-200 active">
<div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#FDE2E4]/50">
<img alt="Beauty Salon" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-[#333333]/60 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="-left-6 lg:-left-12 glass-panel animate-float w-[200px] rounded-2xl p-4 absolute top-1/4 shadow-xl">
<div className="flex gap-1 mb-2 text-yellow-400">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-xs font-medium text-[#333333] mb-1">Amazing service!</p>
<p className="text-xs text-gray-500">New Google review added</p>
</div>

<div className="-right-4 lg:-right-8 glass-panel animate-float delay-100 flex gap-3 w-[220px] rounded-2xl p-4 absolute bottom-1/4 shadow-xl items-center">
<div className="w-10 h-10 rounded-full bg-[#E76F9B] flex items-center justify-center shrink-0 text-white">
<iconify-icon icon="solar:calendar-add-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-[#333333]">New Booking Confirmed</p>
<p className="text-xs text-gray-500 mt-0.5">Sarah - Color &amp; Cut (Tmrw 4 PM)</p>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 bg-gray-50/50" id="problem">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="font-semibold text-3xl md:text-4xl tracking-tight text-[#333333] mb-4">Struggling with these issues in your salon?</h2>
<p className="text-gray-500 text-sm">Managing a salon takes time, and small delays can cost you potential clients.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-[2rem] border shadow-sm hover:shadow-md transition-shadow reveal delay-100 group bg-white border-gray-100">
<div className="w-12 h-12 rounded-2xl bg-[#FDE2E4] text-[#E76F9B] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-xl tracking-tight text-[#333333] mb-3">Lost Bookings</h3>
<p className="text-sm text-gray-500 leading-relaxed">Clients won't wait. Delayed responses on WhatsApp or Instagram mean they go to another salon immediately.</p>
</div>

<div className="p-8 rounded-[2rem] border shadow-sm hover:shadow-md transition-shadow reveal delay-200 group bg-white border-gray-100">
<div className="w-12 h-12 rounded-2xl bg-[#FDE2E4] text-[#E76F9B] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:star-fall-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-xl tracking-tight text-[#333333] mb-3">Low Reviews</h3>
<p className="text-sm text-gray-500 leading-relaxed">Your Google reviews might not reflect your true service quality because clients simply forget to rate after their visit.</p>
</div>

<div className="p-8 rounded-[2rem] border shadow-sm hover:shadow-md transition-shadow reveal delay-300 group bg-white border-gray-100">
<div className="w-12 h-12 rounded-2xl bg-[#FDE2E4] text-[#E76F9B] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-xl tracking-tight text-[#333333] mb-3">Scheduling Chaos</h3>
<p className="text-sm text-gray-500 leading-relaxed">Tracking and managing bookings manually consumes your time and often leads to confusing double-booked appointments.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="solution">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<div className="mb-10 reveal">
<span className="text-[#E76F9B] font-medium text-xs tracking-wider mb-3 block uppercase">The Complete Solution</span>
<h2 className="font-semibold text-3xl md:text-4xl tracking-tight text-[#333333] mb-4">One system to solve everything for your salon</h2>
<p className="text-gray-500 text-sm leading-relaxed">Our system is designed to act as your tireless personal assistant, caring for your clients and seamlessly boosting your revenue.</p>
</div>
<div className="space-y-10">
<div className="flex gap-5 group">
<div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#FFF7F9] flex items-center justify-center text-[#E76F9B] shadow-sm group-hover:bg-[#E76F9B] group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:chat-round-line-bold-duotone" width="28"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-lg text-[#333333] mb-2">Instant automated replies</h4>
<p className="text-sm text-[#777777] leading-relaxed">An automation system that answers client inquiries in seconds across platforms, ensuring no booking opportunity is lost.</p>
</div>
</div>
<div className="flex gap-5 group">
<div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#FFF7F9] flex items-center justify-center text-[#E76F9B] shadow-sm group-hover:bg-[#E76F9B] group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:calendar-add-bold-duotone" width="28"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-lg text-[#333333] mb-2">Smart appointment management</h4>
<p className="text-sm text-[#777777] leading-relaxed">Automated, conflict-free scheduling that handles availability and sends reminders to clients to drastically reduce no-shows.</p>
</div>
</div>
<div className="flex gap-5 group">
<div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#FFF7F9] flex items-center justify-center text-[#E76F9B] shadow-sm group-hover:bg-[#E76F9B] group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:graph-up-bold-duotone" width="28"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-lg text-[#333333] mb-2">Automated review requests</h4>
<p className="text-sm text-[#777777] leading-relaxed">The system sends smart review requests to clients after their visit, boosting your Google reputation and attracting new clients.</p>
</div>
</div>
<div className="flex gap-5 group">
<div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#FFF7F9] flex items-center justify-center text-[#E76F9B] shadow-sm group-hover:bg-[#E76F9B] group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:devices-bold-duotone" width="28"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-lg text-[#333333] mb-2">Free website + Live Chat Widget</h4>
<p className="text-sm text-[#777777] leading-relaxed">Get an elegant digital storefront for your salon featuring a live chat tool to make client communication and booking effortless.</p>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative flex justify-center reveal delay-200">
<div className="absolute inset-0 bg-gradient-to-tr from-[#FDE2E4]/40 to-transparent rounded-[3rem] transform rotate-3 scale-105"></div>
<div className="w-full max-w-md border shadow-2xl rounded-[2.5rem] p-6 relative z-10 bg-white border-gray-100">

<div className="flex items-center justify-between border-b pb-4 mb-4 border-gray-50">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100">
<iconify-icon className="text-gray-400" icon="solar:user-rounded-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-[#333333]">New Conversation</p>
<p className="text-xs text-green-500 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Online
                                    </p>
</div>
</div>
<div className="flex gap-2 text-gray-400">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:menu-dots-circle-linear" width="18"></iconify-icon>
</div>
</div>

<div className="space-y-4 mb-6">

<div className="flex justify-end">
<div className="rounded-2xl rounded-tr-sm p-3 max-w-[80%] text-xs bg-gray-100 text-gray-600">
                                    Hi, are there any available appointments today for hair coloring?
                                </div>
</div>

<div className="flex justify-start">
<div className="bg-[#E76F9B] rounded-2xl rounded-tl-sm p-3 max-w-[85%] text-xs shadow-md shadow-[#FDE2E4] text-white">
                                    Welcome to Glow Salon! 🌸 Yes, we have openings at 5:00 PM and 7:30 PM. You can confirm your booking directly via the link below:
                                    <div className="mt-2 p-2 rounded-xl flex items-center justify-between cursor-pointer transition-colors bg-white/20 hover:bg-white/30">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
<span>Select Appointment</span>
</div>
</div>
</div>
</div>

<div className="flex justify-end">
<div className="rounded-2xl rounded-tr-sm p-3 max-w-[80%] text-xs bg-gray-100 text-gray-600">
                                    Perfect, I booked for 5 PM. Thank you!
                                </div>
</div>

<div className="flex justify-start">
<div className="bg-[#E76F9B] rounded-2xl rounded-tl-sm p-3 max-w-[85%] text-xs shadow-md shadow-[#FDE2E4] text-white">
                                    Your appointment is confirmed ✅ We look forward to seeing you.
                                </div>
</div>
</div>

<div className="rounded-full p-2 flex items-center gap-2 border bg-gray-50 border-gray-100">
<div className="w-8 h-8 rounded-full flex items-center justify-center shadow-sm bg-white text-gray-400">
<iconify-icon icon="solar:smile-circle-linear"></iconify-icon>
</div>
<div className="flex-1 text-xs text-gray-400">Automated reply active...</div>
<div className="w-8 h-8 rounded-full bg-[#E76F9B] flex items-center justify-center shadow-sm text-white">
<iconify-icon icon="solar:plain-2-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#FDE2E4]/30 pt-24 pb-24" id="testimonials">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center mb-16 reveal">
<span className="text-[#E76F9B] font-medium text-xs tracking-wider mb-3 block uppercase">Client Testimonials</span>
<h2 className="font-semibold text-3xl md:text-4xl tracking-tight text-[#333333]">Salons that turned into success stories</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">
<div className="hover:shadow-lg transition-all duration-300 bg-[#f7c5d6]/60 border-[#FFF7F9] border rounded-2xl p-8 relative shadow-sm flex flex-col">
<div className="flex text-[#E76F9B] mb-4 gap-1">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-sm md:text-base text-[#333333] leading-relaxed mb-8 font-medium">
                        "In just one month, my bookings increased significantly and replies are fully automated. Clients appreciate the professional, fast response, and our reviews skyrocketed."
                    </p>
<div className="flex items-center gap-4 mt-auto">
<img alt="Sarah O." className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<h5 className="font-medium text-sm text-[#333333]">Sarah O.</h5>
<span className="text-xs text-gray-500">Owner, Sarah Beauty Salon</span>
</div>
</div>
</div>
<div className="hover:shadow-lg transition-all duration-300 bg-[#f7c5d6]/60 border-[#FFF7F9] border rounded-2xl p-8 relative shadow-sm flex flex-col">
<div className="flex text-[#E76F9B] mb-4 gap-1">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-sm md:text-base text-[#333333] leading-relaxed mb-8 font-medium">
                        "The best investment I've made for my salon. Management is much easier, and the automatic review requests after service helped us rank first in our area on Google."
                    </p>
<div className="flex items-center gap-4 mt-auto">
<img alt="Noura K." className="w-12 h-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div>
<h5 className="font-medium text-sm text-[#333333]">Noura K.</h5>
<span className="text-xs text-[#777777]">Manager, Noura Beauty Center</span>
</div>
</div>
</div>
<div className="hover:shadow-lg transition-all duration-300 bg-[#f7c5d6]/60 border-[#FFF7F9] border rounded-2xl p-8 relative shadow-sm flex flex-col">
<div className="flex text-[#E76F9B] mb-4 gap-1">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-sm md:text-base text-[#333333] leading-relaxed mb-8 font-medium">
                        "I used to struggle with manual scheduling, but now everything is automatically organized. My staff is relieved, and clients easily book via WhatsApp anytime."
                    </p>
<div className="flex items-center gap-4 mt-auto">
<img alt="Laila A." className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<h5 className="font-medium text-sm text-[#333333]">Laila A.</h5>
<span className="text-xs text-[#777777]">Founder, Elegant Touch Salon</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="faq">
<div className="max-w-4xl mx-auto px-6 md:px-12">
<div className="text-center mb-16 reveal">
<span className="text-[#E76F9B] font-medium text-xs tracking-wider mb-3 block uppercase">FAQ</span>
<h2 className="font-semibold text-3xl md:text-4xl tracking-tight text-[#333333]">Everything you need to know</h2>
</div>
<div className="space-y-2 reveal delay-100">

<div className="border-b last:border-0 border-gray-100">
<button className="faq-btn flex group focus:outline-none text-left bg-gray-100 w-full py-6 items-center justify-between px-4 rounded-xl">
<span className="font-medium text-base md:text-lg text-[#333333] group-hover:text-[#E76F9B] transition-colors">Do I need technical experience to use the system?</span>
<div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#FDE2E4] transition-colors bg-gray-50 ml-4">
<iconify-icon className="group-hover:text-[#E76F9B] transition-transform duration-300 faq-icon text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<div className="faq-content overflow-hidden max-h-0 transition-all duration-300 ease-in-out px-4">
<p className="text-gray-500 text-sm leading-relaxed pb-6 pt-2">
                            Not at all! The system is designed to be highly intuitive and easy to use. Plus, our team will fully set up the system for you and connect it to your salon's social accounts.
                        </p>
</div>
</div>

<div className="border-b last:border-0 border-gray-100 mt-2">
<button className="faq-btn flex group focus:outline-none text-left bg-gray-100 w-full py-6 items-center justify-between px-4 rounded-xl">
<span className="font-medium text-base md:text-lg text-[#333333] group-hover:text-[#E76F9B] transition-colors">How do automated replies on WhatsApp and Instagram work?</span>
<div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#FDE2E4] transition-colors bg-gray-50 ml-4">
<iconify-icon className="group-hover:text-[#E76F9B] transition-transform duration-300 faq-icon text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<div className="faq-content overflow-hidden max-h-0 transition-all duration-300 ease-in-out px-4">
<p className="text-gray-500 text-sm leading-relaxed pb-6 pt-2">
                            We connect your salon's accounts to our secure system, then program smart responses that answer common client questions and provide a direct booking link without any manual intervention.
                        </p>
</div>
</div>

<div className="border-b last:border-0 border-gray-100 mt-2">
<button className="faq-btn flex group focus:outline-none text-left bg-gray-100 w-full py-6 items-center justify-between px-4 rounded-xl">
<span className="font-medium text-base md:text-lg text-[#333333] group-hover:text-[#E76F9B] transition-colors">Can I customize the automated messages to match my salon's tone?</span>
<div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#FDE2E4] transition-colors bg-gray-50 ml-4">
<iconify-icon className="group-hover:text-[#E76F9B] transition-transform duration-300 faq-icon text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<div className="faq-content overflow-hidden max-h-0 transition-all duration-300 ease-in-out px-4">
<p className="text-gray-500 text-sm leading-relaxed pb-6 pt-2">
                            Absolutely. You can edit all message texts, add emojis, and set the tone of voice that reflects your brand identity so the messages sound natural and friendly.
                        </p>
</div>
</div>

<div className="border-b last:border-0 border-gray-100 mt-2">
<button className="faq-btn flex group focus:outline-none text-left bg-gray-100 w-full py-6 items-center justify-between px-4 rounded-xl">
<span className="font-medium text-base md:text-lg text-[#333333] group-hover:text-[#E76F9B] transition-colors">How does the system help increase Google reviews?</span>
<div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#FDE2E4] transition-colors bg-gray-50 ml-4">
<iconify-icon className="group-hover:text-[#E76F9B] transition-transform duration-300 faq-icon text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<div className="faq-content overflow-hidden max-h-0 transition-all duration-300 ease-in-out px-4">
<p className="text-gray-500 text-sm leading-relaxed pb-6 pt-2">
                            Once a client's appointment is complete, the system automatically sends a thank-you message via WhatsApp containing a direct link to review the salon on Google, encouraging them to leave positive feedback easily.
                        </p>
</div>
</div>

<div className="border-b last:border-0 border-gray-100 mt-2">
<button className="faq-btn flex group focus:outline-none text-left bg-gray-100 w-full py-6 items-center justify-between px-4 rounded-xl">
<span className="font-medium text-base md:text-lg text-[#333333] group-hover:text-[#E76F9B] transition-colors">Is there technical support if I face an issue?</span>
<div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#FDE2E4] transition-colors bg-gray-50 ml-4">
<iconify-icon className="group-hover:text-[#E76F9B] transition-transform duration-300 faq-icon text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<div className="faq-content overflow-hidden max-h-0 transition-all duration-300 ease-in-out px-4">
<p className="text-gray-500 text-sm leading-relaxed pb-6 pt-2">
                            Yes, we provide dedicated technical support to assist you at any time. Whether you have a question or face technical challenges, our team is always ready to ensure the system runs smoothly.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FFF7F9]/40 border-t border-gray-50 relative" id="booking">
<div className="absolute inset-0 bg-gradient-to-b from-white to-transparent h-24"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div className="reveal">
<span className="text-[#E76F9B] font-medium text-xs tracking-wider mb-3 block uppercase">Book an Appointment</span>
<h2 className="font-semibold text-3xl md:text-4xl tracking-tight text-[#333333] mb-4">Ready for your glow up?</h2>
<p className="text-gray-500 text-sm leading-relaxed mb-8">Fill out the form to request an appointment. Our automated system will confirm your booking instantly or our staff will get back to you right away.</p>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
<div className="w-10 h-10 rounded-full bg-[#FDE2E4] text-[#E76F9B] flex items-center justify-center shrink-0">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-sm text-[#333333]">Our Location</h4>
<p className="text-xs text-gray-500 mt-0.5">123 Beauty Boulevard, Style City, SC 10001</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
<div className="w-10 h-10 rounded-full bg-[#FDE2E4] text-[#E76F9B] flex items-center justify-center shrink-0">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-sm text-[#333333]">Working Hours</h4>
<p className="text-xs text-gray-500 mt-0.5">Monday - Saturday: 9:00 AM - 8:00 PM</p>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-xl shadow-[#FDE2E4]/20 reveal delay-200">
<form className="space-y-6">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-[#333333] ml-1">Full Name</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:bg-white focus:outline-none focus:border-[#E76F9B] focus:ring-1 focus:ring-[#E76F9B] transition-all text-[#333333] placeholder-gray-400" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-[#333333] ml-1">Phone Number</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:bg-white focus:outline-none focus:border-[#E76F9B] focus:ring-1 focus:ring-[#E76F9B] transition-all text-[#333333] placeholder-gray-400" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-[#333333] ml-1">Email Address</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:bg-white focus:outline-none focus:border-[#E76F9B] focus:ring-1 focus:ring-[#E76F9B] transition-all text-[#333333] placeholder-gray-400" placeholder="jane@example.com" type="email"/>
</div>

<div className="space-y-2 relative" id="service-dropdown-container">
<label className="text-xs font-medium text-[#333333] ml-1">Select Service</label>
<div className="relative cursor-pointer" id="service-dropdown-btn">
<div className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm hover:border-[#E76F9B]/50 transition-all text-[#333333] flex items-center justify-between">
<span className="text-gray-400" id="service-dropdown-text">Choose a service...</span>
<iconify-icon className="text-gray-400 transition-transform duration-300 dropdown-icon-custom" icon="solar:alt-arrow-down-linear" id="service-dropdown-icon"></iconify-icon>
</div>
</div>

<div className="absolute z-20 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-lg shadow-gray-200/50 opacity-0 invisible translate-y-2 transition-all duration-200 dropdown-menu-custom" id="service-dropdown-menu">
<div className="p-2 space-y-1 max-h-48 overflow-y-auto">
<div className="service-option px-3 py-2 text-sm text-[#333333] hover:bg-[#FDE2E4]/50 rounded-lg cursor-pointer transition-colors">Haircut &amp; Styling</div>
<div className="service-option px-3 py-2 text-sm text-[#333333] hover:bg-[#FDE2E4]/50 rounded-lg cursor-pointer transition-colors">Coloring &amp; Highlights</div>
<div className="service-option px-3 py-2 text-sm text-[#333333] hover:bg-[#FDE2E4]/50 rounded-lg cursor-pointer transition-colors">Manicure &amp; Pedicure</div>
<div className="service-option px-3 py-2 text-sm text-[#333333] hover:bg-[#FDE2E4]/50 rounded-lg cursor-pointer transition-colors">Facial Treatment</div>
<div className="service-option px-3 py-2 text-sm text-[#333333] hover:bg-[#FDE2E4]/50 rounded-lg cursor-pointer transition-colors">Bridal Package</div>
</div>
</div>
<input id="service-input" name="service" type="hidden"/>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-[#333333] ml-1">Preferred Date</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:bg-white focus:outline-none focus:border-[#E76F9B] focus:ring-1 focus:ring-[#E76F9B] transition-all text-[#333333] appearance-none" style={{colorScheme: 'light'}} type="date"/>
</div>
<div className="space-y-2 relative" id="time-dropdown-container">
<label className="text-xs font-medium text-[#333333] ml-1">Preferred Time</label>
<div className="relative cursor-pointer" id="time-dropdown-btn">
<div className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm hover:border-[#E76F9B]/50 transition-all text-[#333333] flex items-center justify-between">
<span className="text-gray-400" id="time-dropdown-text">Select time...</span>
<iconify-icon className="text-gray-400 transition-transform duration-300 dropdown-icon-custom" icon="solar:alt-arrow-down-linear" id="time-dropdown-icon"></iconify-icon>
</div>
</div>

<div className="absolute z-20 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-lg shadow-gray-200/50 opacity-0 invisible translate-y-2 transition-all duration-200 dropdown-menu-custom" id="time-dropdown-menu">
<div className="p-2 space-y-1 max-h-48 overflow-y-auto">
<div className="time-option px-3 py-2 text-sm text-[#333333] hover:bg-[#FDE2E4]/50 rounded-lg cursor-pointer transition-colors">Morning (9:00 AM - 12:00 PM)</div>
<div className="time-option px-3 py-2 text-sm text-[#333333] hover:bg-[#FDE2E4]/50 rounded-lg cursor-pointer transition-colors">Afternoon (12:00 PM - 4:00 PM)</div>
<div className="time-option px-3 py-2 text-sm text-[#333333] hover:bg-[#FDE2E4]/50 rounded-lg cursor-pointer transition-colors">Evening (4:00 PM - 8:00 PM)</div>
</div>
</div>
<input id="time-input" name="time" type="hidden"/>
</div>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-[#333333] ml-1">Additional Notes <span className="text-gray-400 font-normal">(Optional)</span></label>
<textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:bg-white focus:outline-none focus:border-[#E76F9B] focus:ring-1 focus:ring-[#E76F9B] transition-all text-[#333333] placeholder-gray-400 resize-none" placeholder="Any specific requests or details?" rows="3"></textarea>
</div>

<button className="w-full bg-[#E76F9B] text-white font-medium text-sm py-4 rounded-xl hover:bg-[#d45c88] hover:shadow-lg hover:shadow-[#FDE2E4] transition-all duration-300 flex items-center justify-center gap-2 mt-4" type="button">
                            Confirm Booking Request
                            <iconify-icon icon="solar:calendar-add-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="cta">

<div className="absolute inset-0 bg-[#333333]"></div>
<div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#E76F9B]/20 via-transparent to-transparent opacity-80 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10 reveal">
<h2 className="font-semibold text-3xl md:text-5xl tracking-tight mb-6 leading-tight text-white">
                Start today and turn every lost contact into a <span className="text-[#E76F9B]">paying client!</span>
</h2>
<p className="text-sm md:text-base mb-10 max-w-2xl mx-auto leading-relaxed text-gray-300">
                Don't let competitors take your clients due to a simple delay in responding. Get the complete system and experience the difference yourself.
            </p>
<button className="bg-[#E76F9B] px-10 py-4 rounded-full text-base font-medium hover:text-[#E76F9B] transition-colors duration-300 shadow-xl shadow-[#E76F9B]/20 flex items-center justify-center gap-3 mx-auto group text-white hover:bg-white">
                Book your free trial now
                <iconify-icon className="group-hover:rotate-12 transition-transform" icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<p className="text-xs mt-4 text-gray-400">No prior commitment • Quick and easy setup</p>
</div>
</section>

<footer className="pt-16 pb-8 border-t bg-white border-gray-100">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

<div className="col-span-1 md:col-span-2 text-left">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-8 h-8 rounded-xl bg-[#E76F9B] flex items-center justify-center text-white">
<iconify-icon icon="solar:crown-star-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="font-semibold text-xl tracking-tight text-[#333333]">Glow</span>
</a>
<p className="text-xs text-gray-500 leading-relaxed max-w-sm">
                        The #1 system specifically designed for beauty salon growth. We help you manage messages, bookings, and effortlessly improve your digital reputation.
                    </p>
</div>

<div className="text-left">
<h4 className="font-semibold text-sm text-[#333333] mb-4">Quick Links</h4>
<ul className="space-y-3">
<li><a className="text-xs text-gray-500 hover:text-[#E76F9B] transition-colors" href="#problem">The Problem</a></li>
<li><a className="text-xs text-gray-500 hover:text-[#E76F9B] transition-colors" href="#solution">How it works</a></li>
<li><a className="text-xs text-gray-500 hover:text-[#E76F9B] transition-colors" href="#testimonials">Success Stories</a></li>
<li><a className="text-xs text-gray-500 hover:text-[#E76F9B] transition-colors" href="#faq">FAQ</a></li>
<li><a className="text-xs text-gray-500 hover:text-[#E76F9B] transition-colors" href="#booking">Book Appointment</a></li>
</ul>
</div>

<div className="text-left">
<h4 className="font-semibold text-sm text-[#333333] mb-4">Contact Us</h4>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-xs text-gray-500">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
                            hello@glowsalon.com
                        </li>
<li className="flex items-center gap-2 text-xs text-gray-500">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
                            +1 (555) 123-4567
                        </li>
</ul>
<div className="flex gap-3 mt-4">
<a className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#E76F9B] transition-colors bg-gray-50 text-gray-400 hover:text-white" href="#">
<iconify-icon icon="solar:camera-linear" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#E76F9B] transition-colors bg-gray-50 text-gray-400 hover:text-white" href="#">
<iconify-icon icon="solar:chat-round-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-gray-50 text-left">
<p className="text-xs text-gray-400">© 2025 Glow Salon System. All rights reserved.</p>
<div className="flex gap-4 text-xs text-gray-400">
<a className="hover:text-[#333333]" href="#">Privacy Policy</a>
<a className="hover:text-[#333333]" href="#">Terms of Use</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
