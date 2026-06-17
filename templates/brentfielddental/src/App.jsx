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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
brand: {
50: '#fbfaf8',
100: '#f5f1ea', // Light beige/sand base
200: '#ede4d3', // Original #d6cbba approx match
300: '#dcd0b8',
400: '#c5b496',
500: '#a89475',
600: '#8c775b',
700: '#715e49',
800: '#5c4d3e',
900: '#4a3f33', // Deep warm grey
950: '#2f2820', // Almost black
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
boxShadow: {
'soft': '0 2px 10px rgba(0, 0, 0, 0.03)',
'glow': '0 0 20px rgba(214, 203, 186, 0.5)',
}
}
}
}



        const chatWindow = document.getElementById('chat-window');
        const chatMessages = document.getElementById('chat-messages');
        const chatInput = document.getElementById('chat-input');
        let isChatOpen = false;

        function toggleChat() {
            isChatOpen = !isChatOpen;
            if (isChatOpen) {
                chatWindow.classList.remove('scale-0', 'opacity-0');
                chatWindow.classList.add('scale-100', 'opacity-100');
                setTimeout(() => chatInput.focus(), 300);
            } else {
                chatWindow.classList.add('scale-0', 'opacity-0');
                chatWindow.classList.remove('scale-100', 'opacity-100');
            }
        }

        function scrollToBottom() {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function addMessage(text, sender) {
            const div = document.createElement('div');
            
            if (sender === 'user') {
                div.className = 'flex gap-3 flex-row-reverse fade-in-up';
                div.innerHTML = `
                    <div class="w-8 h-8 bg-brand-950 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs">You</div>
                    <div class="bg-brand-950 p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[85%]">
                        <p class="text-sm text-white">${text}</p>
                    </div>
                `;
            } else {
                div.className = 'flex gap-3 fade-in-up';
                div.innerHTML = `
                    <div class="w-8 h-8 bg-brand-200 rounded-full flex-shrink-0 flex items-center justify-center text-brand-800 text-xs">AI</div>
                    <div class="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-brand-100 max-w-[85%]">
                        <p class="text-sm text-brand-800">${text}</p>
                    </div>
                `;
            }
            chatMessages.appendChild(div);
            scrollToBottom();
        }

        function simulateTypingAndReply(userText) {
            const typingDiv = document.createElement('div');
            typingDiv.className = 'flex gap-3 fade-in-up';
            typingDiv.id = 'typing-indicator';
            typingDiv.innerHTML = `
                <div class="w-8 h-8 bg-brand-200 rounded-full flex-shrink-0 flex items-center justify-center text-brand-800 text-xs">AI</div>
                <div class="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-brand-100 flex gap-1 items-center">
                    <span class="w-1.5 h-1.5 bg-brand-400 rounded-full animate-bounce"></span>
                    <span class="w-1.5 h-1.5 bg-brand-400 rounded-full animate-bounce delay-100"></span>
                    <span class="w-1.5 h-1.5 bg-brand-400 rounded-full animate-bounce delay-200"></span>
                </div>
            `;
            chatMessages.appendChild(typingDiv);
            scrollToBottom();

            // Simulate instant AI processing
            setTimeout(() => {
                document.getElementById('typing-indicator').remove();
                let reply = "";
                const text = userText.toLowerCase();

                if (text.includes('book') || text.includes('appointment')) {
                    reply = "To book an appointment, please give us a call at 020 8451 7226 during our opening hours, or leave your details here and we'll call you back shortly!";
                } else if (text.includes('hour') || text.includes('open')) {
                    reply = "We are open Monday to Friday from 9:00 AM to 6:00 PM, and Saturday from 10:00 AM to 2:00 PM.";
                } else if (text.includes('service') || text.includes('treatment')) {
                    reply = "We offer a wide range of services including Preventative Care, Cosmetic Dentistry (Whitening, Veneers), and Restorative Care (Implants, Bridges).";
                } else if (text.includes('price') || text.includes('cost')) {
                    reply = "Our prices vary depending on the treatment. A standard consultation starts from a competitive rate. Would you like me to connect you with reception?";
                } else {
                    reply = "Thank you for your message. A member of our team will assist you with that shortly. Is there anything else I can help with?";
                }
                
                addMessage(reply, 'bot');
            }, 600); // 600ms delay for "natural" feel but instant response
        }

        function handleChatSubmit(e) {
            e.preventDefault();
            const text = chatInput.value.trim();
            if (!text) return;
            
            addMessage(text, 'user');
            chatInput.value = '';
            simulateTypingAndReply(text);
        }

        function sendQuickReply(text) {
            addMessage(text, 'user');
            simulateTypingAndReply(text);
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
      

<nav className="fixed w-full z-50 top-0 left-0 transition-all duration-300 backdrop-blur-md bg-white/80 border-b border-brand-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-brand-950 text-white rounded-lg flex items-center justify-center">
<span className="font-semibold text-lg">B</span>
</div>
<span className="font-semibold text-lg tracking-tight group-hover:opacity-80 transition-opacity">
                    Brentfield<span className="text-brand-500 font-normal">Dental</span>
</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-brand-700 hover:text-brand-950 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-brand-700 hover:text-brand-950 transition-colors" href="#about">About Us</a>
<a className="text-sm font-medium text-brand-700 hover:text-brand-950 transition-colors" href="#policies">Policies</a>
<a className="text-sm font-medium text-brand-700 hover:text-brand-950 transition-colors" href="#reviews">Reviews</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-900" href="tel:02084517226">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                    020 8451 7226
                </a>
<button className="bg-brand-950 text-white px-5 py-2 rounded-full text-xs font-medium tracking-wide hover:bg-brand-800 transition-all shadow-soft flex items-center gap-2">
                    Book Appointment
                    <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="max-w-2xl fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 border border-brand-200 text-brand-800 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                    Accepting New Patients
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.1] mb-6 text-brand-950">
                    Healthy smiles <br/>
<span className="text-brand-400 italic font-medium">for life.</span>
</h1>
<p className="text-lg text-brand-700 mb-8 max-w-lg leading-relaxed font-light">
                    Providing exceptional quality dental care for you and your family in Brent. Comprehensive, compassionate, and cosmetic dentistry tailored to your needs.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="h-12 px-8 bg-brand-950 text-white rounded-lg font-medium text-sm hover:translate-y-[-2px] transition-transform shadow-lg shadow-brand-900/10 flex items-center justify-center gap-2">
<iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
                        Book Online
                    </button>
<button className="h-12 px-8 bg-white border border-brand-200 text-brand-900 rounded-lg font-medium text-sm hover:bg-brand-50 transition-colors flex items-center justify-center gap-2">
                        View Services
                    </button>
</div>

<div className="mt-12 flex items-center gap-6">
<div className="flex -space-x-3">
<img alt="Patient" className="w-10 h-10 rounded-full border-2 border-brand-50 object-cover" src="https://i.pravatar.cc/100?img=1"/>
<img alt="Patient" className="w-10 h-10 rounded-full border-2 border-brand-50 object-cover" src="https://i.pravatar.cc/100?img=5"/>
<img alt="Patient" className="w-10 h-10 rounded-full border-2 border-brand-50 object-cover" src="https://i.pravatar.cc/100?img=8"/>
<div className="w-10 h-10 rounded-full border-2 border-brand-50 bg-brand-200 flex items-center justify-center text-xs font-medium text-brand-800">
                            +2k
                        </div>
</div>
<div>
<div className="flex items-center gap-1 text-yellow-500 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-xs text-brand-600 mt-1">Trusted by local families</p>
</div>
</div>
</div>

<div className="relative fade-in-up delay-200 lg:h-[600px] rounded-3xl overflow-hidden bg-brand-200 group">
<img alt="Dental Care" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-soft border border-white/50">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs font-semibold uppercase tracking-wider text-brand-400 mb-1">Clinic Status</p>
<h3 className="font-medium text-brand-900">Open Today</h3>
</div>
<div className="bg-green-100 text-green-700 p-2 rounded-full">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
</div>
<div className="w-full bg-brand-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-brand-900 h-full w-2/3 rounded-full"></div>
</div>
<p className="text-right text-[10px] text-brand-500 mt-2">Appointments Filling Fast</p>
</div>
</div>
</div>
</main>

<section className="py-20 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-950 mb-4">Comprehensive Care</h2>
<p className="text-brand-600 font-light">From routine check-ups to complex cosmetic procedures, we offer a full range of treatments to keep your smile healthy.</p>
</div>
<a className="text-brand-900 font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all" href="/services">
                    View All Treatments
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-brand-50 hover:bg-brand-100 transition-colors cursor-pointer group border border-brand-100">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-900 mb-6 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 text-brand-900">Preventative Care</h3>
<p className="text-sm text-brand-600 leading-relaxed mb-6">Regular check-ups, hygiene appointments, and fluoride treatments to prevent issues before they start.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-brand-800">
<iconify-icon className="text-brand-400" icon="solar:check-circle-linear"></iconify-icon> Check-ups
                        </li>
<li className="flex items-center gap-2 text-xs text-brand-800">
<iconify-icon className="text-brand-400" icon="solar:check-circle-linear"></iconify-icon> Hygiene
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl bg-brand-50 hover:bg-brand-100 transition-colors cursor-pointer group border border-brand-100">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-900 mb-6 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 text-brand-900">Cosmetic Dentistry</h3>
<p className="text-sm text-brand-600 leading-relaxed mb-6">Enhance your smile with whitening, veneers, and alignment treatments designed for natural results.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-brand-800">
<iconify-icon className="text-brand-400" icon="solar:check-circle-linear"></iconify-icon> Teeth Whitening
                        </li>
<li className="flex items-center gap-2 text-xs text-brand-800">
<iconify-icon className="text-brand-400" icon="solar:check-circle-linear"></iconify-icon> Veneers
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl bg-brand-50 hover:bg-brand-100 transition-colors cursor-pointer group border border-brand-100">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-900 mb-6 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 text-brand-900">Restorative Care</h3>
<p className="text-sm text-brand-600 leading-relaxed mb-6">Repair damaged teeth and replace missing ones with implants, crowns, and bridges.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-brand-800">
<iconify-icon className="text-brand-400" icon="solar:check-circle-linear"></iconify-icon> Implants
                        </li>
<li className="flex items-center gap-2 text-xs text-brand-800">
<iconify-icon className="text-brand-400" icon="solar:check-circle-linear"></iconify-icon> Crowns &amp; Bridges
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-brand-200/50 bg-brand-50" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-semibold tracking-widest text-brand-500 uppercase mb-3 block">Words of Smiles</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-950">Patient Stories</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-xl border border-brand-100 shadow-sm">
<div className="flex text-yellow-500 mb-4 gap-0.5">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-brand-800 text-sm leading-relaxed mb-6">"Absolutely fantastic service. The team at Brentfield put me at ease immediately. Best dental experience I've had in London."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brand-200 flex items-center justify-center text-xs font-bold text-brand-900">S</div>
<div>
<p className="text-xs font-semibold text-brand-900">Sarah Jenkins</p>
<p className="text-[10px] text-brand-500">Regular Patient</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-brand-100 shadow-sm">
<div className="flex text-yellow-500 mb-4 gap-0.5">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-brand-800 text-sm leading-relaxed mb-6">"Professional, clean, and incredibly thorough. They explain every step of the process. My family won't go anywhere else."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brand-900 flex items-center justify-center text-xs font-bold text-white">M</div>
<div>
<p className="text-xs font-semibold text-brand-900">Michael Dave</p>
<p className="text-[10px] text-brand-500">Cosmetic Treatment</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-brand-100 shadow-sm">
<div className="flex text-yellow-500 mb-4 gap-0.5">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-brand-800 text-sm leading-relaxed mb-6">"Emergency appointment handled with such care. Pain-free treatment and great follow-up advice. Highly recommended."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brand-200 flex items-center justify-center text-xs font-bold text-brand-900">E</div>
<div>
<p className="text-xs font-semibold text-brand-900">Emma Thompson</p>
<p className="text-[10px] text-brand-500">Emergency Care</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-brand-950 rounded-3xl overflow-hidden text-white grid lg:grid-cols-2">
<div className="p-10 md:p-16 flex flex-col justify-between">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-6">Visit Us</h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1 p-2 bg-white/10 rounded-lg">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<p className="font-medium">Brentfield Dental Centre</p>
<p className="text-brand-200 text-sm mt-1 leading-relaxed">10 Kingfisher Way, Brent,<br/>London, NW10 8TF</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 p-2 bg-white/10 rounded-lg">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<p className="font-medium">Contact</p>
<p className="text-brand-200 text-sm mt-1">020 8451 7226</p>
</div>
</div>
</div>
</div>
<div className="mt-12 pt-12 border-t border-white/10">
<p className="text-xs font-semibold uppercase tracking-widest text-brand-400 mb-4">Opening Hours</p>
<div className="grid grid-cols-2 gap-4 text-sm">
<div className="flex justify-between border-b border-white/5 pb-2">
<span className="text-brand-200">Mon - Fri</span>
<span>9:00 - 18:00</span>
</div>
<div className="flex justify-between border-b border-white/5 pb-2">
<span className="text-brand-200">Saturday</span>
<span>10:00 - 14:00</span>
</div>
<div className="flex justify-between border-b border-white/5 pb-2">
<span className="text-brand-200">Sunday</span>
<span className="text-brand-400">Closed</span>
</div>
</div>
</div>
</div>
<div className="bg-brand-900 relative h-64 lg:h-auto group overflow-hidden">
<iframe allowfullscreen="" className="opacity-70 group-hover:opacity-100 transition-opacity duration-500" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.993707792672!2d-0.252!3d51.549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMyJzU2LjQiTiAwwrAxNScwNy4yIlc!5e0!3m2!1sen!2suk!4v1634567890123!5m2!1sen!2suk" style={{border: '0', filter: 'grayscale(100%) invert(90%) hue-rotate(180deg) brightness(85%) contrast(1.2)'}} width="100%"></iframe>
<div className="absolute inset-0 pointer-events-none flex items-center justify-center">
<a className="px-6 py-3 bg-white text-brand-950 font-medium text-sm rounded-full shadow-lg pointer-events-auto hover:scale-105 transition-transform" href="https://maps.google.com" target="_blank">
                            Get Directions
                        </a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-brand-200/60 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<h3 className="font-semibold text-lg tracking-tight mb-4 text-brand-950">Brentfield Dental Centre</h3>
<p className="text-brand-600 text-sm max-w-sm mb-6">Dedicated to providing quality dental care for you and your family in a comfortable, modern environment.</p>
</div>
<div>
<h4 className="font-medium text-brand-900 mb-4 text-sm">Links</h4>
<ul className="space-y-3 text-sm text-brand-600">
<li><a className="hover:text-brand-900 transition-colors" href="#">Home</a></li>
<li><a className="hover:text-brand-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-brand-900 transition-colors" href="#">Services</a></li>
<li><a className="hover:text-brand-900 transition-colors" href="#">Policies</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-brand-900 mb-4 text-sm">Legal</h4>
<ul className="space-y-3 text-sm text-brand-600">
<li><a className="hover:text-brand-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-brand-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-brand-900 transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-100 text-xs text-brand-500">
<p>© 2024 Brentfield Dental Centre. All rights reserved.</p>
<p className="mt-2 md:mt-0">London, United Kingdom</p>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end" id="chatbot-container">

<div className="w-[360px] bg-white rounded-2xl shadow-2xl shadow-brand-900/10 border border-brand-100 overflow-hidden transform transition-all duration-300 origin-bottom-right scale-0 opacity-0 mb-4 flex flex-col max-h-[500px]" id="chat-window">

<div className="bg-brand-950 p-4 flex items-center justify-between text-white">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-10 h-10 bg-brand-800 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:user-heart-bold" width="20"></iconify-icon>
</div>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-brand-950 rounded-full"></span>
</div>
<div>
<h4 className="font-medium text-sm">Support Team</h4>
<p className="text-[10px] text-brand-200">Replies instantly</p>
</div>
</div>
<button className="text-brand-200 hover:text-white transition-colors" onclick="toggleChat()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<div className="flex-1 bg-brand-50/50 p-4 overflow-y-auto chat-scroll space-y-4" id="chat-messages">
<div className="flex gap-3">
<div className="w-8 h-8 bg-brand-200 rounded-full flex-shrink-0 flex items-center justify-center text-brand-800 text-xs">AI</div>
<div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-brand-100 max-w-[85%]">
<p className="text-sm text-brand-800">Hello! 👋 Welcome to Brentfield Dental Centre. How can I help you today?</p>
</div>
</div>
<div className="flex gap-2 flex-wrap ml-11">
<button className="px-3 py-1.5 bg-white border border-brand-200 rounded-full text-xs text-brand-700 hover:bg-brand-50 hover:border-brand-300 transition-colors" onclick="sendQuickReply('Book Appointment')">Book Appointment</button>
<button className="px-3 py-1.5 bg-white border border-brand-200 rounded-full text-xs text-brand-700 hover:bg-brand-50 hover:border-brand-300 transition-colors" onclick="sendQuickReply('Services')">Services</button>
<button className="px-3 py-1.5 bg-white border border-brand-200 rounded-full text-xs text-brand-700 hover:bg-brand-50 hover:border-brand-300 transition-colors" onclick="sendQuickReply('Opening Hours')">Opening Hours</button>
</div>
</div>

<div className="p-3 bg-white border-t border-brand-100">
<form className="relative" onsubmit="handleChatSubmit(event)">
<input className="w-full bg-brand-50 border-0 rounded-full px-4 py-3 text-sm text-brand-900 focus:ring-2 focus:ring-brand-200 focus:outline-none placeholder-brand-400" id="chat-input" placeholder="Type a message..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-brand-950 text-white rounded-full hover:bg-brand-800 transition-colors flex items-center justify-center" type="submit">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</form>
</div>
</div>

<button className="h-14 w-14 bg-brand-950 hover:bg-brand-800 text-white rounded-full shadow-xl shadow-brand-900/20 flex items-center justify-center transition-all hover:scale-105 group relative" onclick="toggleChat()">
<span className="absolute -top-1 -right-1 flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
</span>
<iconify-icon className="group-hover:rotate-12 transition-transform" icon="solar:chat-round-dots-linear" width="28"></iconify-icon>
</button>
</div>


    </>
  );
}
