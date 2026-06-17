import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Chatbot Logic
        const chatWindow = document.getElementById('chat-window');
        const chatMessages = document.getElementById('chat-messages');
        const chatInput = document.getElementById('chat-input');
        const chatToggleBtn = document.getElementById('chat-toggle-btn');
        let isChatOpen = false;

        function toggleChat() {
            isChatOpen = !isChatOpen;
            if (isChatOpen) {
                chatWindow.classList.remove('hidden', 'scale-95', 'opacity-0');
                chatWindow.classList.add('scale-100', 'opacity-100');
                // Hide notification dot
                chatToggleBtn.querySelector('span').classList.add('hidden');
                setTimeout(() => chatInput.focus(), 100);
            } else {
                chatWindow.classList.add('scale-95', 'opacity-0');
                setTimeout(() => chatWindow.classList.add('hidden'), 300);
            }
        }

        function sendPredefined(msg) {
            chatInput.value = msg;
            handleChatSubmit({ preventDefault: () => {} });
        }

        function scrollToBottom() {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function addMessage(text, isUser = false) {
            const div = document.createElement('div');
            div.className = `flex gap-3 chat-anim ${isUser ? 'flex-row-reverse' : ''}`;
            
            const avatar = isUser ? 
                `<div class="w-8 h-8 rounded-full bg-[#2ea3f2] text-white flex-shrink-0 flex items-center justify-center text-xs"><iconify-icon icon="solar:user-bold"></iconify-icon></div>` :
                `<div class="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center text-xs">🤖</div>`;

            const bubbleClass = isUser ? 
                'bg-[#2ea3f2] text-white rounded-tr-none' : 
                'bg-white border border-slate-200 text-slate-600 rounded-tl-none';

            div.innerHTML = `
                ${avatar}
                <div class="${bubbleClass} rounded-2xl p-3 shadow-sm max-w-[85%] text-sm leading-relaxed">
                    <p>${text}</p>
                </div>
            `;
            
            chatMessages.appendChild(div);
            scrollToBottom();
        }

        function showTyping() {
            const div = document.createElement('div');
            div.id = 'typing-indicator';
            div.className = 'flex gap-3 chat-anim';
            div.innerHTML = `
                <div class="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center text-xs">🤖</div>
                <div class="bg-white border border-slate-200 rounded-2xl rounded-tl-none p-4 shadow-sm flex gap-1 items-center h-10">
                    <div class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
                    <div class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
                    <div class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
                </div>
            `;
            chatMessages.appendChild(div);
            scrollToBottom();
        }

        function removeTyping() {
            const el = document.getElementById('typing-indicator');
            if (el) el.remove();
        }

        function handleChatSubmit(e) {
            e.preventDefault();
            const msg = chatInput.value.trim();
            if (!msg) return;

            addMessage(msg, true);
            chatInput.value = '';
            
            showTyping();

            // Simulate AI delay and response logic
            setTimeout(() => {
                removeTyping();
                let reply = "";
                const lowerMsg = msg.toLowerCase();

                if (lowerMsg.includes('book') || lowerMsg.includes('appointment')) {
                    reply = "You can book an appointment easily! Please use the 'Book Online' button at the top of the page, or give us a call at 0203 143 1000. Would you like our opening hours?";
                } else if (lowerMsg.includes('price') || lowerMsg.includes('cost')) {
                    reply = "Our prices vary depending on the treatment. We offer a full price guide on our website. Routine exams start from £50. We also offer 0% finance on treatments over £500.";
                } else if (lowerMsg.includes('invisalign') || lowerMsg.includes('braces')) {
                    reply = "Yes! Dr. Stuart Levy is an expert in Invisalign. We offer a free cosmetic consultation to see if clear aligners are right for you. Shall I guide you to the booking page?";
                } else if (lowerMsg.includes('hour') || lowerMsg.includes('open')) {
                    reply = "We are open Monday to Friday 9:00am - 6:00pm, and Saturday 10:00am - 4:00pm. We are closed on Sundays.";
                } else if (lowerMsg.includes('park') || lowerMsg.includes('location')) {
                    reply = "We are located inside Brent Cross Shopping Centre (Ground Floor, Unit E1C). The best part? Parking is completely free!";
                } else {
                    reply = "Thanks for your message. A member of our team can help you with that specific query. Please call us at 0203 143 1000 or email reception@beamdental.clinic.";
                }
                
                addMessage(reply);
            }, 1200);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-40 glass">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-[#2ea3f2] text-white flex items-center justify-center">
<iconify-icon icon="solar:smile-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-lg text-slate-900 group-hover:text-[#2ea3f2] transition-colors">Beam Dental</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#services">Treatments</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#team">Team</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#2ea3f2] transition-colors" href="tel:02031431000">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                    0203 143 1000
                </a>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all flex items-center gap-2 shadow-sm hover:shadow-md" onclick="document.getElementById('appointment-modal').showModal()">
                    Book Online
                    <iconify-icon icon="solar:calendar-add-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="flex-1 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#2ea3f2] text-xs font-medium tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2ea3f2] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#2ea3f2]"></span>
</span>
                    Accepting New Patients in Brent Cross
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-slate-900 leading-[1.1] text-balance">
                    Exceptional dental care with a <span className="text-[#2ea3f2]">personal touch.</span>
</h1>
<p className="text-lg text-slate-500 max-w-xl leading-relaxed text-balance font-light">
                    Experience modern dentistry in a calm environment. Over 50 years of combined experience serving Hendon, Golders Green, and London. Located within Brent Cross Shopping Centre with free parking.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<button className="bg-[#2ea3f2] hover:bg-[#2589cc] text-white text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2">
                        Book Appointment
                        <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<button className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-base font-medium px-8 py-3.5 rounded-full transition-all flex items-center justify-center gap-2">
                        View Services
                    </button>
</div>
<div className="flex items-center gap-6 pt-6 border-t border-slate-100">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs overflow-hidden"><img alt="User" src="https://ui-avatars.com/api/?name=Mark+Becker&amp;background=random"/></div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs overflow-hidden"><img alt="User" src="https://ui-avatars.com/api/?name=Stuart+Levy&amp;background=random"/></div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs overflow-hidden"><img alt="User" src="https://ui-avatars.com/api/?name=Sarah+G&amp;background=random"/></div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-[#f8fafc] flex items-center justify-center text-xs font-medium text-slate-600">+2k</div>
</div>
<div className="flex flex-col">
<div className="flex text-yellow-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs text-slate-500 font-medium mt-0.5">4.9/5 from Google Reviews</span>
</div>
</div>
</div>

<div className="flex-1 relative">
<div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white aspect-[4/3]">
<img alt="Modern Dental Clinic" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg border border-slate-100 max-w-xs">
<div className="flex items-start gap-3">
<div className="p-2 bg-green-50 rounded-lg text-green-600">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Dr. Mark Becker</p>
<p className="text-xs text-slate-500">Principal Dentist &amp; Team</p>
</div>
</div>
</div>
</div>

<div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
<div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
</div>
</div>
</section>

<section className="py-24 bg-[#f8fafc]" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl font-medium tracking-tight text-slate-900">Comprehensive Treatments</h2>
<p className="text-slate-500 mt-2 font-light">From routine hygiene to complex smile makeovers.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bento-card rounded-2xl p-8 relative overflow-hidden group">
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2ea3f2] flex items-center justify-center mb-6">
<iconify-icon icon="solar:stars-minimalistic-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">Cosmetic Dentistry</h3>
<p className="text-slate-500 font-light max-w-md">Transform your smile with Invisalign, Porcelain Veneers, and professional whitening. We use the latest laser technology for gum reshaping.</p>
<div className="mt-8 flex gap-3">
<span className="px-3 py-1 rounded-full bg-slate-50 text-xs font-medium text-slate-600 border border-slate-100">Invisalign</span>
<span className="px-3 py-1 rounded-full bg-slate-50 text-xs font-medium text-slate-600 border border-slate-100">Veneers</span>
<span className="px-3 py-1 rounded-full bg-slate-50 text-xs font-medium text-slate-600 border border-slate-100">Whitening</span>
</div>
</div>
<div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-blue-50/50 to-transparent"></div>
</div>

<div className="bento-card rounded-2xl p-8 group">
<div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-500 flex items-center justify-center mb-6">
<iconify-icon icon="solar:heart-pulse-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">General Dentistry</h3>
<p className="text-slate-500 font-light text-sm mb-4">Routine check-ups, hygiene, fillings, and root canals. Focus on preventative care.</p>
<a className="text-sm font-medium text-indigo-500 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="bento-card rounded-2xl p-8 group">
<div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center mb-6">
<iconify-icon icon="solar:face-scan-circle-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">Facial Aesthetics</h3>
<p className="text-slate-500 font-light text-sm mb-4">Anti-wrinkle injections, fillers, and skin boosters to complement your smile.</p>
<a className="text-sm font-medium text-rose-500 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">View treatments <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="md:col-span-2 bento-card rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 group">
<div className="flex-1">
<div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-500 flex items-center justify-center mb-6">
<iconify-icon icon="solar:sleeping-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">Sleep Medicine &amp; Implants</h3>
<p className="text-slate-500 font-light mb-4">Advanced solutions for snoring and missing teeth. We offer dental sedation for nervous patients.</p>
<a className="text-sm font-medium text-teal-600 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Explore solutions <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="w-full md:w-48 h-32 rounded-lg bg-teal-50/50 border border-teal-100 flex items-center justify-center text-teal-800/20">
<iconify-icon icon="solar:bone-linear" width="64"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="team">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900">Meet the Experts</h2>
<p className="text-slate-500 mt-2 font-light">With over 50 years of combined experience.</p>
</div>
<a className="text-sm font-medium text-[#2ea3f2] hover:text-slate-900 transition-colors flex items-center gap-1" href="#">
                See full team <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group">
<div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 mb-4 relative">
<img alt="Dr Mark Becker" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://beamdental.clinic/wp-content/uploads/2026/01/Mark-Becker.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<span className="text-white text-sm font-medium">GDC Registered</span>
</div>
</div>
<h3 className="text-lg font-medium text-slate-900">Dr. Mark Becker</h3>
<p className="text-sm text-slate-500">Principal Dentist</p>
</div>

<div className="group">
<div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 mb-4 relative">
<img alt="Dr Stuart Levy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://beamdental.clinic/wp-content/uploads/2025/11/Stuart-Levy.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<span className="text-white text-sm font-medium">GDC Registered</span>
</div>
</div>
<h3 className="text-lg font-medium text-slate-900">Dr. Stuart Levy</h3>
<p className="text-sm text-slate-500">Dentist</p>
</div>

<div className="bg-slate-900 rounded-2xl p-8 text-white flex flex-col justify-between">
<div>
<div className="flex text-[#2ea3f2] mb-6">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<blockquote className="text-xl font-light leading-relaxed">
                        "Mark has been looking after me and my family for years. I can honestly say he’s the best dentist I’ve ever been to. The new surgery at Brent Cross is bright and modern."
                    </blockquote>
</div>
<div className="mt-8 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-medium">JJ</div>
<div>
<p className="text-sm font-medium">Jonathan Jacobs</p>
<p className="text-xs text-slate-400">Verified Patient</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-200 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-900 shrink-0">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-slate-900">Brent Cross Shopping Centre</h3>
<p className="text-sm text-slate-500 font-light">Unit E1C, Ground Floor, London NW4 3FH</p>
<p className="text-xs text-[#2ea3f2] mt-1 font-medium">Free Parking Available</p>
</div>
</div>
<div className="h-12 w-px bg-slate-200 hidden md:block"></div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-900 shrink-0">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-slate-900">Opening Hours</h3>
<p className="text-sm text-slate-500 font-light">Mon-Fri: 9am - 6pm</p>
<p className="text-sm text-slate-500 font-light">Sat: 10am - 4pm</p>
</div>
</div>
<div className="h-12 w-px bg-slate-200 hidden md:block"></div>
<div className="flex items-center gap-4">
<button className="bg-[#2ea3f2] hover:bg-[#2589cc] text-white font-medium px-6 py-3 rounded-full transition-all shadow-md">
                        Get Directions
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 rounded bg-slate-900 text-white flex items-center justify-center">
<iconify-icon icon="solar:smile-circle-linear" width="16"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-slate-900">Beam Dental</span>
</a>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                        High-spec dental practice providing general and cosmetic dentistry in a calm, modern environment.
                    </p>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Treatments</h4>
<ul className="space-y-3 text-sm text-slate-500 font-light">
<li><a className="hover:text-[#2ea3f2] transition-colors" href="#">Invisalign</a></li>
<li><a className="hover:text-[#2ea3f2] transition-colors" href="#">Implants</a></li>
<li><a className="hover:text-[#2ea3f2] transition-colors" href="#">Hygienist</a></li>
<li><a className="hover:text-[#2ea3f2] transition-colors" href="#">Facial Aesthetics</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Patient Area</h4>
<ul className="space-y-3 text-sm text-slate-500 font-light">
<li><a className="hover:text-[#2ea3f2] transition-colors" href="#">New Patients</a></li>
<li><a className="hover:text-[#2ea3f2] transition-colors" href="#">Price Guide</a></li>
<li><a className="hover:text-[#2ea3f2] transition-colors" href="#">Medical History Form</a></li>
<li><a className="hover:text-[#2ea3f2] transition-colors" href="#">Feedback</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Contact</h4>
<ul className="space-y-3 text-sm text-slate-500 font-light">
<li className="flex items-center gap-2">
<iconify-icon icon="solar:phone-linear"></iconify-icon> 0203 143 1000
                        </li>
<li className="flex items-center gap-2">
<iconify-icon icon="solar:letter-linear"></iconify-icon> reception@beamdental.clinic
                        </li>
</ul>
<div className="flex gap-4 mt-6">
<a className="text-slate-400 hover:text-[#2ea3f2] transition-colors" href="#"><iconify-icon icon="brandico:facebook" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-[#2ea3f2] transition-colors" href="#"><iconify-icon icon="brandico:instagram" width="20"></iconify-icon></a>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-light">
<p>© 2025 Beam Dental Clinic. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-900" href="#">Privacy Policy</a>
<a className="hover:text-slate-900" href="#">Complaints</a>
<a className="hover:text-slate-900" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4" id="chatbot-container">

<div className="hidden w-[350px] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col transition-all duration-300 origin-bottom-right transform scale-95 opacity-0" id="chat-window">

<div className="bg-slate-900 p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-white text-[#2ea3f2] flex items-center justify-center">
<iconify-icon icon="solar:smile-circle-linear" width="24"></iconify-icon>
</div>
<span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full"></span>
</div>
<div>
<h4 className="text-white font-medium text-sm">Beam Assistant</h4>
<p className="text-slate-400 text-xs">Replies instantly</p>
</div>
</div>
<button className="text-slate-400 hover:text-white transition-colors" onclick="toggleChat()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<div className="h-80 overflow-y-auto p-4 bg-slate-50 space-y-4" id="chat-messages">

<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center text-xs">🤖</div>
<div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none p-3 shadow-sm max-w-[85%]">
<p className="text-sm text-slate-600">Hi! Welcome to Beam Dental. I can help you with bookings, prices, or treatment info. How can I help today?</p>
</div>
</div>

<div className="flex gap-2 flex-wrap pl-11">
<button className="text-xs bg-white border border-blue-200 text-blue-600 px-3 py-1.5 rounded-full hover:bg-blue-50 transition-colors" onclick="sendPredefined('How do I book?')">Book Appointment</button>
<button className="text-xs bg-white border border-blue-200 text-blue-600 px-3 py-1.5 rounded-full hover:bg-blue-50 transition-colors" onclick="sendPredefined('Do you do Invisalign?')">Invisalign</button>
<button className="text-xs bg-white border border-blue-200 text-blue-600 px-3 py-1.5 rounded-full hover:bg-blue-50 transition-colors" onclick="sendPredefined('Opening hours?')">Opening Hours</button>
</div>
</div>

<div className="p-3 bg-white border-t border-slate-100">
<form className="relative" onsubmit="handleChatSubmit(event)">
<input className="w-full bg-slate-50 border border-slate-200 rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-[#2ea3f2] focus:ring-1 focus:ring-[#2ea3f2] transition-all" id="chat-input" placeholder="Type a message..." type="text"/>
<button className="absolute right-2 top-1.5 w-8 h-8 bg-[#2ea3f2] text-white rounded-full flex items-center justify-center hover:bg-[#2098df] transition-colors" type="submit">
<iconify-icon className="ml-0.5" icon="solar:plain-3-bold" width="16"></iconify-icon>
</button>
</form>
</div>
</div>

<button className="w-14 h-14 bg-[#2ea3f2] hover:bg-[#2098df] text-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 group" id="chat-toggle-btn" onclick="toggleChat()">
<iconify-icon className="group-hover:hidden" icon="solar:chat-round-dots-bold" width="28"></iconify-icon>
<iconify-icon className="hidden group-hover:block" icon="solar:close-circle-bold" width="28"></iconify-icon>

<span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full"></span>
</button>
</div>

<dialog className="backdrop:bg-slate-900/50 rounded-2xl p-0 w-full max-w-lg shadow-2xl open:animate-[slideIn_0.3s_ease-out]" id="appointment-modal">
<div className="bg-white p-6 md:p-8">
<div className="flex justify-between items-center mb-6">
<h3 className="text-xl font-medium text-slate-900">Request Appointment</h3>
<form method="dialog"><button className="text-slate-400 hover:text-slate-900"><iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon></button></form>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide">First Name</label>
<input className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#2ea3f2]" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Last Name</label>
<input className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#2ea3f2]" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Email</label>
<input className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#2ea3f2]" placeholder="jane@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Treatment Type</label>
<div className="relative">
<select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#2ea3f2] appearance-none">
<option>General Check-up</option>
<option>Hygienist</option>
<option>Cosmetic Consultation</option>
<option>Emergency</option>
</select>
<iconify-icon className="absolute right-3 top-3.5 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="pt-4">
<button className="w-full bg-[#2ea3f2] hover:bg-[#2098df] text-white font-medium py-3.5 rounded-lg transition-colors shadow-lg shadow-blue-500/20" type="button">
                        Submit Request
                    </button>
<p className="text-center text-xs text-slate-400 mt-3">Our team will confirm your slot via email shortly.</p>
</div>
</form>
</div>
</dialog>


    </>
  );
}
