import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        // Data
        const services = [
            "Polaroids (Photo Prints)",
            "Printing Services",
            "Stationery",
            "Digital Marketing",
            "Content Writing",
            "Website Designing",
            "Amazon Product Listing",
            "Social Media Management",
            "Social Media Marketing",
            "Graphic Designing",
            "Logo Designing",
            "Music Composition (AI)",
            "Video Editing",
            "YouTube Timestamps",
            "CV and Resume Services",
            "Video Captioning",
            "Quizzes",
            "Game and Activity Ideas",
            "Influencer Video Editing",
            "Shopify Store Setup",
            "Podcast Editing",
            "Domain and Hosting",
            "Business Presentation Design",
            "Yearly Event Graphics Pack",
            "Social Media and GMB Setup",
            "Sound and Voice Editing"
        ];

        const whatsappNumber = "1234567890"; // REPLACE
        let selectedServices = new Set();

        // Animation Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        function initAnimations() {
            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
            });
        }

        // Initialization
        document.addEventListener('DOMContentLoaded', () => {
            renderServices();
            initAnimations();
        });

        // Toggle Mobile Menu
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        }

        // SPA Navigation
        function showPage(pageId) {
            const home = document.getElementById('home-page');
            const services = document.getElementById('services-page');
            
            window.scrollTo({ top: 0, behavior: 'smooth' });

            if (pageId === 'home') {
                services.classList.add('opacity-0');
                setTimeout(() => {
                    services.classList.add('hidden');
                    home.classList.remove('hidden');
                    // Small delay to allow display:block to apply before opacity transition
                    requestAnimationFrame(() => {
                        home.classList.remove('opacity-0');
                    });
                }, 300);
            } else {
                home.classList.add('opacity-0');
                setTimeout(() => {
                    home.classList.add('hidden');
                    services.classList.remove('hidden');
                    requestAnimationFrame(() => {
                        services.classList.remove('opacity-0');
                    });
                }, 300);
            }
        }

        // Render Service Cards
        function renderServices() {
            const container = document.getElementById('service-list');
            container.innerHTML = '';

            services.forEach((service, index) => {
                const id = `service-${index}`;
                let icon = 'lucide:zap';
                // Icon selection logic
                if(service.includes("Video") || service.includes("YouTube")) icon = "lucide:video";
                else if(service.includes("Design") || service.includes("Graphic") || service.includes("Logo")) icon = "lucide:pen-tool";
                else if(service.includes("Web") || service.includes("Domain") || service.includes("Shopify")) icon = "lucide:globe";
                else if(service.includes("Social") || service.includes("Marketing")) icon = "lucide:share-2";
                else if(service.includes("Print") || service.includes("Polaroid") || service.includes("Stationery")) icon = "lucide:printer";
                else if(service.includes("Sound") || service.includes("Music") || service.includes("Podcast")) icon = "lucide:mic";
                else if(service.includes("Amazon") || service.includes("Business")) icon = "lucide:briefcase";

                // Added animation delay based on index for staggering effect
                const delay = (index % 10) * 50; 

                const html = `
                    <div class="service-card reveal group relative flex items-center justify-between p-4 rounded-xl border border-white/10 bg-slate-900/50 hover:bg-slate-800/50 transition-all cursor-pointer hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5" style="transition-delay: ${delay}ms" onclick="toggleSelection('${service}', '${id}')">
                        <div class="flex items-center gap-4">
                            <!-- Custom Checkbox -->
                            <div class="relative">
                                <input type="checkbox" id="${id}" class="custom-checkbox peer sr-only" onchange="handleCheckboxChange(event, '${service}')">
                                <div class="w-5 h-5 rounded border border-slate-600 bg-slate-950 peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-all duration-300 flex items-center justify-center">
                                    <span class="iconify text-white hidden pointer-events-none" data-icon="lucide:check" data-width="14"></span>
                                </div>
                            </div>
                            
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-indigo-400 group-hover:bg-indigo-500/10 transition-colors duration-300">
                                    <span class="iconify" data-icon="${icon}" data-width="16"></span>
                                </div>
                                <span class="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">${service}</span>
                            </div>
                        </div>

                        <!-- Direct Message Button -->
                        <button onclick="sendSingleMessage(event, '${service}')" class="text-slate-500 hover:text-green-400 p-2 rounded-full hover:bg-green-400/10 transition-all hover:scale-110" title="Inquire about this service">
                            <span class="iconify" data-icon="lucide:message-circle" data-width="20"></span>
                        </button>
                    </div>
                `;
                container.insertAdjacentHTML('beforeend', html);
            });
            
            // Re-run observer on new elements
            initAnimations();
        }

        // Search Filter
        function filterServices() {
            const input = document.getElementById('service-search').value.toLowerCase();
            const cards = document.getElementsByClassName('service-card');
            
            Array.from(cards).forEach(card => {
                const text = card.innerText.toLowerCase();
                if (text.includes(input)) {
                    card.classList.remove('hidden');
                    // Reset animation for search results
                    card.classList.remove('active'); 
                    setTimeout(() => card.classList.add('active'), 50);
                } else {
                    card.classList.add('hidden');
                }
            });
        }

        // Logic
        function toggleSelection(serviceName, checkboxId) {
            const checkbox = document.getElementById(checkboxId);
            checkbox.checked = !checkbox.checked;
            updateSet(serviceName, checkbox.checked);
        }

        function handleCheckboxChange(e, serviceName) {
            e.stopPropagation(); 
            updateSet(serviceName, e.target.checked);
        }

        function updateSet(serviceName, isChecked) {
            if (isChecked) {
                selectedServices.add(serviceName);
            } else {
                selectedServices.delete(serviceName);
            }
            updateQuoteBar();
        }

        function updateQuoteBar() {
            const bar = document.getElementById('quote-bar');
            const countDisplay = document.getElementById('count-display');
            
            countDisplay.innerText = selectedServices.size;

            if (selectedServices.size > 0) {
                bar.classList.remove('translate-y-[200%]');
            } else {
                bar.classList.add('translate-y-[200%]');
            }
        }

        // WhatsApp Functions
        function sendSingleMessage(e, serviceName) {
            e.stopPropagation();
            const message = `Hi Urban Techx, I'm interested in *${serviceName}*. Could you please provide more details and a quote?`;
            const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        }

        function sendComboMessage() {
            if (selectedServices.size === 0 && window.innerWidth < 768) {
                // If on mobile and clicking whatsapp link in footer without selection
                 const url = `https://wa.me/${whatsappNumber}`;
                 window.open(url, '_blank');
                 return;
            }
            
            const list = Array.from(selectedServices).map(s => `- ${s}`).join('\n');
            const message = `Hi Urban Techx, I'm interested in a quote for the following services:\n\n${list}\n\nLooking forward to hearing from you.`;
            const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        }

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 mix-blend-luminosity" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="qPVvnWEWLLiJgYtSkKyB"></div>
</div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl shadow-2xl transition-all duration-300">
<div className="px-6 h-14 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#" onclick="showPage('home')">
<div className="flex shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300 text-sm font-bold text-white tracking-tighter bg-gradient-to-tr from-indigo-500 to-purple-500 w-8 h-8 rounded-lg shadow-lg items-center justify-center">
                    UT
                </div>
<span className="text-base font-semibold tracking-tight group-hover:text-white text-slate-200 transition-colors">Urban Techx</span>
</a>

<div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors hover:-translate-y-0.5 transform duration-200" href="#" onclick="showPage('home')">Home</a>
<a className="hover:text-white transition-colors hover:-translate-y-0.5 transform duration-200" href="#featured">Services</a>
<button className="px-4 py-1.5 rounded-full bg-white text-slate-950 hover:bg-slate-200 transition-all font-semibold tracking-tight hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 duration-200 text-xs" onclick="showPage('services')">
                    Start Project
                </button>
</div>

<button className="md:hidden text-slate-400 hover:text-white transition-transform active:scale-90" onclick="toggleMobileMenu()">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<div className="hidden md:hidden absolute top-full left-0 w-full mt-2 rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur-xl p-4 flex-col gap-2 animate-[slideDown_0.2s_ease-out] shadow-2xl" id="mobile-menu">
<a className="text-slate-300 hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg transition-colors block" href="#" onclick="showPage('home'); toggleMobileMenu()">Home</a>
<a className="text-slate-300 hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg transition-colors block" href="#" onclick="showPage('services'); toggleMobileMenu()">All Services</a>
<a className="text-indigo-400 hover:bg-indigo-500/10 px-4 py-2 rounded-lg transition-colors block" href="#" onclick="showPage('services'); toggleMobileMenu()">Get a Quote</a>
</div>
</nav>

<main className="pt-32 min-h-screen relative overflow-hidden">

<div className="animate-glow absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] -z-10 pointer-events-none transition-all duration-1000"></div>

<div className="transition-opacity duration-500 ease-in-out" id="home-page">

<section className="md:py-24 text-center max-w-5xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">
<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-indigo-300 mb-8 hover:bg-white/10 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
        Available for new projects
    </div>
<h1 className="reveal delay-100 text-5xl md:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-6 leading-[1.1]">
        Digital excellence for<br/>the modern urban brand.
    </h1>
<p className="reveal delay-200 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
        Urban Techx is your all-in-one creative agency. From AI-composed music and Polaroid prints to full-scale digital
        marketing and web development.
    </p>
<div className="reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group w-full sm:w-auto px-8 py-3.5 rounded-lg bg-white text-slate-950 font-semibold hover:bg-slate-200 transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95 duration-200" onclick="showPage('services')">
                        View All Services
                        <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-white/10 hover:bg-white/5 text-white transition-all font-medium flex items-center justify-center hover:scale-105 active:scale-95 duration-200" href="#featured">
            Explore Features
        </a>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20" id="featured">
<div className="flex items-end justify-between mb-12 reveal">
<div className="">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">Curated Services</h2>
<p className="text-slate-400 text-sm">Selected highlights from our offerings.</p>
</div>
<button className="group hidden md:flex text-sm text-indigo-400 hover:text-indigo-300 items-center gap-1 transition-colors" onclick="showPage('services')">
                        See all services <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="reveal delay-100 group hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:monitor" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect className="" height="14" rx="2" width="20" x="2" y="3"></rect><path className="" d="M8 21h8m-4-4v4"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-slate-200 mb-2">Website Designing</h3>
<p className="text-sm text-slate-400 leading-relaxed">Responsive, modern websites tailored to your brand identity using the latest tech.</p>
</div>

<div className="reveal delay-200 group relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:camera" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></g></svg>
</div>
<h3 className="text-lg font-medium text-slate-200 mb-2">Polaroids &amp; Printing</h3>
<p className="text-sm text-slate-400 leading-relaxed">Retro-style polaroid prints and high-quality stationery printing services.</p>
</div>

<div className="reveal delay-300 group relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trending-up" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-slate-200 mb-2">Digital Marketing</h3>
<p className="text-sm text-slate-400 leading-relaxed">Comprehensive strategies to boost your online presence and sales.</p>
</div>

<div className="reveal delay-100 group relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-pink-500/10">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 mb-4 group-hover:scale-110 group-hover:bg-pink-500/20 transition-all duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-slate-200 mb-2">Social Media Mgmt</h3>
<p className="text-sm text-slate-400 leading-relaxed">End-to-end management of your social profiles, content, and engagement.</p>
</div>

<div className="reveal delay-200 group relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shopping-bag" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-slate-200 mb-2">Shopify Store Setup</h3>
<p className="text-sm text-slate-400 leading-relaxed">Complete e-commerce solutions to get your products selling online fast.</p>
</div>

<div className="reveal delay-300 group relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/10">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:music" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></g></svg>
</div>
<h3 className="text-lg font-medium text-slate-200 mb-2">AI Music Composition</h3>
<p className="text-sm text-slate-400 leading-relaxed">Unique, AI-generated soundscapes and music for your content.</p>
</div>
</div>
<div className="reveal mt-12 text-center md:hidden">
<button className="w-full px-6 py-3 rounded-lg border border-white/10 text-sm font-medium hover:bg-white/5 transition-colors" onclick="showPage('services')">
                        View Full Catalog
                    </button>
</div>
</section>
</div>

<div className="hidden opacity-0 min-h-screen transition-opacity duration-500 ease-in-out" id="services-page">
<section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
<div className="mb-10 pb-8 border-b border-white/10">
<button className="mb-6 flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group" onclick="showPage('home')">
<svg aria-hidden="true" className="iconify group-hover:-translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-left" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 19l-7-7l7-7m7 7H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Back to Home
                    </button>
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 animate-[fadeUp_0.5s_ease-out]">Service Catalog</h1>
<p className="text-slate-400 max-w-2xl text-lg font-light animate-[fadeUp_0.5s_ease-out_0.1s_both]">
                        Select multiple services to build a custom package, or click the WhatsApp icon next to a single service to inquire directly.
                    </p>
</div>

<div className="flex flex-col md:flex-row gap-4 mb-8 animate-[fadeUp_0.5s_ease-out_0.2s_both]">
<div className="relative w-full md:w-96 group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:search" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</span>
<input className="w-full bg-slate-900 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-all duration-300" id="service-search" onkeyup="filterServices()" placeholder="Search services..." type="text"/>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-32" id="service-list">

</div>
</section>
</div>
</main>

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-lg bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 flex items-center justify-between shadow-2xl z-40 transform translate-y-[200%] transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)" id="quote-bar">
<div className="flex flex-col">
<span className="text-xs text-indigo-300 font-medium uppercase tracking-wider">Your Bundle</span>
<span className="text-sm font-medium text-white"><span id="count-display">0</span> services selected</span>
</div>
<button className="bg-white text-slate-950 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2" onclick="sendComboMessage()">
            Get Quote
            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<footer className="border-t border-white/10 bg-slate-950 py-12 relative z-10">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-2 reveal">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center text-white text-xs font-bold">UT</div>
<span className="font-semibold tracking-tight text-white">Urban Techx</span>
</div>
<p className="text-sm text-slate-500 max-w-xs">Transforming ideas into digital reality. Your partner for creative and technical solutions.</p>
</div>
<div className="reveal delay-100">
<h4 className="text-white font-medium mb-4">Services</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><button className="hover:text-indigo-400 transition-colors" onclick="showPage('services')">Marketing</button></li>
<li><button className="hover:text-indigo-400 transition-colors" onclick="showPage('services')">Design</button></li>
<li><button className="hover:text-indigo-400 transition-colors" onclick="showPage('services')">Development</button></li>
<li><button className="hover:text-indigo-400 transition-colors" onclick="showPage('services')">Printing</button></li>
</ul>
</div>
<div className="reveal delay-200">
<h4 className="text-white font-medium mb-4">Connect</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors flex items-center gap-2" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg> Instagram</a></li>
<li><a className="hover:text-indigo-400 transition-colors flex items-center gap-2" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg> LinkedIn</a></li>
<li><a className="hover:text-indigo-400 transition-colors flex items-center gap-2" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Twitter</a></li>
<li><a className="hover:text-indigo-400 transition-colors flex items-center gap-2" href="#" onclick="sendComboMessage()"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> WhatsApp</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 mt-8 border-t border-white/5 text-center md:text-left text-xs text-slate-600 flex flex-col md:flex-row justify-between items-center">
<p>© 2024 Urban Techx. All rights reserved.</p>
<p className="mt-2 md:mt-0 opacity-50 hover:opacity-100 transition-opacity">Designed with precision.</p>
</div>
</footer>



    </>
  );
}
