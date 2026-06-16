import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Chatbot Logic
        document.addEventListener('DOMContentLoaded', () => {
            const toggleBtn = document.getElementById('chatbot-toggle');
            const closeBtn = document.getElementById('chatbot-close');
            const windowEl = document.getElementById('chatbot-window');
            const iconOpen = document.getElementById('chatbot-icon-open');
            const iconClose = document.getElementById('chatbot-icon-close');
            const inputEl = document.getElementById('chatbot-input');
            const sendBtn = document.getElementById('chatbot-send');
            const messagesEl = document.getElementById('chatbot-messages');
            const typingEl = document.getElementById('chatbot-typing');

            let isOpen = false;

            // Toggle Chat Window
            function toggleChat() {
                isOpen = !isOpen;
                if(isOpen) {
                    windowEl.classList.remove('opacity-0', 'pointer-events-none', 'scale-95');
                    windowEl.classList.add('opacity-100', 'pointer-events-auto', 'scale-100');
                    iconOpen.classList.replace('opacity-100', 'opacity-0');
                    iconOpen.classList.replace('scale-100', 'scale-50');
                    iconClose.classList.replace('opacity-0', 'opacity-100');
                    iconClose.classList.replace('scale-50', 'scale-100');
                    setTimeout(() => inputEl.focus(), 300);
                } else {
                    windowEl.classList.add('opacity-0', 'pointer-events-none', 'scale-95');
                    windowEl.classList.remove('opacity-100', 'pointer-events-auto', 'scale-100');
                    iconOpen.classList.replace('opacity-0', 'opacity-100');
                    iconOpen.classList.replace('scale-50', 'scale-100');
                    iconClose.classList.replace('opacity-100', 'opacity-0');
                    iconClose.classList.replace('scale-100', 'scale-50');
                }
            }

            toggleBtn.addEventListener('click', toggleChat);
            closeBtn.addEventListener('click', toggleChat);

            // Add Message to Chat
            function addMessage(text, isUser) {
                const msgDiv = document.createElement('div');
                msgDiv.className = `flex gap-2.5 max-w-[85%] ${isUser ? 'ml-auto' : ''}`;
                
                let innerHTML = '';
                
                if(!isUser) {
                    innerHTML += `
                        <div class="w-6 h-6 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5 text-blue-700 font-semibold text-[10px] tracking-tighter">
                            M
                        </div>
                    `;
                }
                
                innerHTML += `
                    <div class="${isUser 
                        ? 'bg-slate-900 text-white rounded-2xl rounded-tr-none px-3.5 py-2.5 text-sm shadow-sm leading-relaxed' 
                        : 'bg-white border border-slate-200 text-slate-700 rounded-2xl rounded-tl-none px-3.5 py-2.5 text-sm shadow-sm leading-relaxed'}">
                        ${text}
                    </div>
                `;
                              
                msgDiv.innerHTML = innerHTML;
                messagesEl.appendChild(msgDiv);
                messagesEl.scrollTop = messagesEl.scrollHeight;
            }

            // Handle Send Action
            function handleSend() {
                const text = inputEl.value.trim();
                if(!text) return;
                
                // Add user message
                addMessage(text, true);
                inputEl.value = '';
                
                // Show typing indicator
                typingEl.classList.remove('hidden');
                messagesEl.scrollTop = messagesEl.scrollHeight;
                
                // Simulate AI response delay
                setTimeout(() => {
                    typingEl.classList.add('hidden');
                    addMessage("Thanks for reaching out! Our team will get back to you shortly. For immediate assistance or emergencies, please call us directly at 773-622-1818.", false);
                }, 1500);
            }

            sendBtn.addEventListener('click', handleSend);
            inputEl.addEventListener('keypress', (e) => {
                if(e.key === 'Enter') handleSend();
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-slate-900 text-slate-300 py-2 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
<div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
<span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
<iconify-icon className="text-sm" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon> 
                773-622-1818
            </span>
<span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer hidden md:flex">
<iconify-icon className="text-sm" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon> 
                7185 W Grand Ave, Chicago, IL
            </span>
</div>
<div className="flex items-center gap-1.5 font-medium text-blue-400">
<iconify-icon className="text-sm" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon> 
            24 Hour Emergency Service
        </div>
</div>

<header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5 flex justify-between items-center">

<a className="flex flex-col group" href="#">
<span className="text-xl font-semibold tracking-tighter text-slate-900 group-hover:text-blue-600 transition-colors">MONTCLARE</span>
<span className="text-xs font-medium text-slate-500 tracking-tight">ADNAN ATCHA DMD</span>
</a>

<nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#">HOME</a>
<a className="hover:text-slate-900 transition-colors" href="#">SERVICES</a>
<a className="hover:text-slate-900 transition-colors" href="#">FAMILY DENTISTRY</a>
<a className="hover:text-slate-900 transition-colors" href="#">COSMETIC DENTISTRY</a>
<a className="hover:text-slate-900 transition-colors" href="#">REVIEWS</a>
<a className="hover:text-slate-900 transition-colors" href="#">CONTACT US</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" href="#">
                    Book Appointment
                </a>

<button className="lg:hidden text-slate-600 hover:text-slate-900 p-1">
<iconify-icon className="text-2xl block" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative bg-white overflow-hidden border-b border-slate-200">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="sm:px-6 lg:px-8 md:py-32 flex flex-col lg:flex-row lg:gap-20 max-w-7xl mr-auto ml-auto pt-20 pr-4 pb-20 pl-4 relative gap-x-12 gap-y-12 items-center">
<div className="flex-1 space-y-8 text-center lg:text-left">
<div className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                    Montclare Dental Inc
                </div>
<div className="space-y-4">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                        Gentle care for the <br className="hidden lg:block"/> whole family.
                    </h1>
<p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
                        Specializing in General &amp; Cosmetic Dentistry in Chicago. We prioritize your comfort and deliver healthy, confident smiles.
                    </p>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition-colors" href="#">
                        Call Now to Book
                    </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-white border border-slate-200 px-6 py-3 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition-colors" href="#">
                        View Our Services
                    </a>
</div>
</div>
<div className="flex-1 w-full max-w-lg lg:max-w-none relative">
<div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-slate-100 to-white border border-slate-200 shadow-sm flex items-center justify-center overflow-hidden relative group">
<div className="absolute inset-0 bg-blue-50/50 mix-blend-multiply transition-opacity group-hover:opacity-0 duration-500"></div>
<iconify-icon className="text-8xl text-slate-300" icon="solar:smile-circle-linear" strokeWidth="1"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
<div className="mb-16 md:flex md:items-end md:justify-between space-y-4 md:space-y-0">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-3">Comprehensive Care</h2>
<p className="text-slate-600">Everything you need for a healthy smile under one roof.</p>
</div>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">

<div className="group relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Affordable care</h3>
<p className="text-slate-600 text-sm leading-relaxed mb-6">Our friendly and professional dentists offer you affordable dental care for the whole family.</p>
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700" href="#">
                    Click here for details <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="group relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:stethoscope-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Quality dentistry</h3>
<p className="text-slate-600 text-sm leading-relaxed mb-6">The secret to healthy teeth is regular dental check-ups. We offer quality dentistry in Chicago, IL for all ages.</p>
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700" href="#">
                    Click here for details <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="group relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:star-shine-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">A brighter smile</h3>
<p className="text-slate-600 text-sm leading-relaxed">Regain your confidence and get the bright shiny smile you've always wanted! Benefit from our effective cosmetic dentistry services.</p>
</div>

<div className="group relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 flex flex-col">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Professional team</h3>
<p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">Our team is here to make your visit comfortable and anxiety free. We're on call 24/7. Call Montclare Dental Inc.</p>
<div className="flex gap-2">
<span className="inline-flex items-center rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">24/7 On Call</span>
<span className="inline-flex items-center rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">Se Habla Español</span>
</div>
</div>
</div>
</section>

<section className="bg-blue-600 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center space-y-6">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-2">
<iconify-icon className="text-3xl text-white" icon="solar:ticket-sale-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-white">Save on your next visit</h2>
<p className="text-blue-100 text-base max-w-lg mx-auto">Take advantage of our special offers and coupons designed to make quality dental care even more affordable.</p>
<div className="pt-4">
<button className="bg-white text-blue-900 px-6 py-3 rounded-md text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600">
                    Claim Coupon
                </button>
</div>
</div>
</section>

<div className="border-t border-slate-200 bg-white px-4 sm:px-6 lg:px-8 py-6">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
<div className="space-y-1">
<h4 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon> 
                    Privacy Policy &amp; Consent
                </h4>
<p className="text-xs text-slate-500 max-w-3xl leading-relaxed">We use cookies to enhance site navigation, analyze site usage and assist in our marketing efforts. You can accept these cookies, or you can modify your choices.</p>
</div>
<div className="flex flex-wrap gap-3 shrink-0">
<button className="text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 px-4 py-2 rounded-md bg-white hover:bg-slate-50 transition-colors">
                    Customize cookie consent
                </button>
<button className="text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-md transition-colors shadow-sm">
                    Accept All
                </button>
</div>
</div>
</div>

<footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-8">
<a className="inline-block group" href="#">
<span className="text-lg font-semibold tracking-tighter text-slate-900 group-hover:text-blue-600 transition-colors block">MONTCLARE</span>
<span className="text-[10px] font-medium text-slate-500 tracking-tight block mt-0.5">DENTAL INC.</span>
</a>
<div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Manage Consent Preferences</a>
<a className="hover:text-slate-900 transition-colors" href="#">Do Not Share My Information</a>
<a className="hover:text-slate-900 transition-colors" href="#">Conditions of Use</a>
<a className="hover:text-slate-900 transition-colors" href="#">Notice and Take Down Policy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Website Accessibility Policy</a>
</div>
<div className="border-t border-slate-200 w-full max-w-2xl pt-8">
<p className="text-xs text-slate-400 leading-relaxed">
                    © 2026 The content on this website is owned by us and our licensors. Do not copy any content (including images) without our consent.
                </p>
</div>
</div>
</footer>

<div className="fixed sm:bottom-6 sm:right-6 z-[100] flex flex-col gap-4 right-4 bottom-4 items-end">

<div className="opacity-0 pointer-events-none scale-95 origin-bottom-right transition-all duration-300 ease-out bg-white/95 backdrop-blur-xl border border-slate-200/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-3xl w-[calc(100vw-2rem)] sm:w-[400px] flex flex-col overflow-hidden" id="chatbot-window">

<div className="bg-white/90 px-5 py-4 flex items-center justify-between border-b border-slate-100 shadow-sm z-10">
<div className="flex items-center gap-3">
<div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white shadow-sm">
<svg className="lucide lucide-sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
<span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
</div>
<div>
<h3 className="text-sm font-medium tracking-tight text-slate-900 leading-none">Smart Assistant</h3>
<p className="text-[11px] text-slate-500 mt-1 font-normal">Adaptive AI Engine</p>
</div>
</div>
<button className="text-slate-400 hover:text-slate-700 hover:bg-slate-100 h-8 w-8 flex items-center justify-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200" id="chatbot-close">
<svg className="lucide lucide-x" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="flex-1 h-[360px] overflow-y-auto p-5 bg-slate-50/50 space-y-6 flex flex-col relative scroll-smooth" id="chatbot-messages">

<div className="flex justify-center mt-1">
<span className="text-[10px] font-medium text-slate-400 bg-slate-100/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-slate-200/50">Today</span>
</div>

<div className="flex gap-3 max-w-[90%]">
<div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shrink-0 mt-1 text-white shadow-sm">
<svg className="lucide lucide-sparkles" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
</div>
<div className="flex flex-col gap-2.5">
<div className="bg-white border border-slate-200/80 text-slate-700 rounded-2xl rounded-tl-sm px-4 py-3 text-[13px] shadow-sm leading-relaxed">
                        Hello! I'm your adaptive AI assistant. I can help you manage appointments, understand services, or handle emergencies. What do you need today?
                    </div>

<div className="flex flex-wrap gap-2">
<button className="text-[11px] font-medium px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all shadow-sm flex items-center gap-1.5">
<svg className="lucide lucide-calendar-plus" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path><path d="M3 10h18"></path><path d="M16 19h6"></path><path d="M19 16v6"></path></svg>
                            Book Appointment
                        </button>
<button className="text-[11px] font-medium px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all shadow-sm flex items-center gap-1.5">
<svg className="lucide lucide-search" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                            View Services
                        </button>
<button className="text-[11px] font-medium px-3 py-1.5 rounded-full border border-red-200 bg-red-50 text-red-600 hover:bg-red-100 hover:border-red-300 transition-all shadow-sm flex items-center gap-1.5">
<svg className="lucide lucide-phone-alert" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="m8 11.5 5 5"></path><path d="m11.5 8 5 5"></path><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><path d="M22 2h-6"></path><path d="M19 5v-3"></path></svg>
                            Emergency
                        </button>
</div>
</div>
</div>

<div className="hidden flex gap-3 max-w-[85%]" id="chatbot-typing">
<div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 text-slate-400">
<svg className="lucide lucide-bot" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm px-4 py-3.5 shadow-sm flex items-center gap-1.5 w-16 justify-center">
<div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
<div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
<div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
</div>
</div>
</div>

<div className="p-3 bg-white border-t border-slate-100/80 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.02)] z-10">
<div className="relative flex items-center bg-slate-50 border border-slate-200/80 rounded-2xl shadow-sm focus-within:ring-4 focus-within:ring-blue-500/10 focus-within:border-blue-400 transition-all focus-within:bg-white">
<button className="pl-3 pr-2 text-slate-400 hover:text-blue-600 transition-colors focus:outline-none">
<svg className="lucide lucide-paperclip" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
</button>
<input className="flex-1 bg-transparent py-3 text-[13px] focus:outline-none placeholder:text-slate-400 text-slate-700" id="chatbot-input" placeholder="Ask anything..." type="text"/>
<button className="mr-1.5 p-1.5 shrink-0 rounded-xl bg-slate-900 text-white flex items-center justify-center hover:bg-blue-600 transition-colors shadow-sm focus:outline-none hover:scale-105 active:scale-95 duration-200" id="chatbot-send">
<svg className="lucide lucide-arrow-up" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</button>
</div>
<div className="text-center mt-2.5 mb-1">
<p className="text-[9px] text-slate-400 font-normal">AI may produce inaccurate info. Verify important details.</p>
</div>
</div>
</div>

<button className="group h-14 w-14 rounded-full bg-slate-900 text-white shadow-xl shadow-slate-900/30 flex items-center justify-center hover:bg-slate-800 transition-all hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-slate-900/20 relative z-50" id="chatbot-toggle">

<span className="absolute right-0 top-0 flex h-3.5 w-3.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-blue-500 border-2 border-slate-900"></span>
</span>
<svg className="lucide lucide-sparkles absolute transition-all duration-300 opacity-100 scale-100 group-hover:scale-110" fill="none" height="24" id="chatbot-icon-open" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
<svg className="lucide lucide-x absolute transition-all duration-300 opacity-0 scale-50 group-hover:scale-110" fill="none" height="24" id="chatbot-icon-close" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>


    </>
  );
}
