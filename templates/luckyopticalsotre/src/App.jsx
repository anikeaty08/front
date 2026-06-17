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



{
"@context": "https://schema.org",
"@type": "OpticalStore",
"name": "Lucky Optical Centre",
"image": "https://luckyopticalcentre.wixsite.com/luckyopticalcentre/image-placeholder",
"@id": "",
"url": "https://luckyopticalcentre.wixsite.com/luckyopticalcentre",
"telephone": "03-8961 5008",
"address": {
"@type": "PostalAddress",
"streetAddress": "5, Medan, Jalan Taming 1, Taman Taming Jaya",
"addressLocality": "Balakong",
"addressRegion": "Selangor",
"postalCode": "43300",
"addressCountry": "MY"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 3.0275,
"longitude": 101.7458
},
"openingHoursSpecification": [
{
"@type": "OpeningHoursSpecification",
"dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
"opens": "11:00",
"closes": "20:30"
},
{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Sunday",
"opens": "11:00",
"closes": "15:00"
}
],
"aggregateRating": {
"@type": "AggregateRating",
"ratingValue": "5.0",
"reviewCount": "54"
},
"paymentAccepted": "Cash, Credit Card, Debit Card, NFC mobile payments",
"isAccessibleForFree": true
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Elements
            const chatBtn = document.getElementById('ai-chat-btn');
            const closeIcon = document.getElementById('ai-chat-close-icon');
            const chatWindow = document.getElementById('ai-chat-window');
            const minimizeBtn = document.getElementById('ai-chat-minimize');
            const chatContent = document.getElementById('ai-chat-content');
            const chatForm = document.getElementById('ai-chat-form');
            const chatInput = document.getElementById('ai-chat-input');
            const quickRepliesContainer = document.getElementById('ai-quick-replies');

            // State
            let isOpen = false;
            let bookingState = 'NONE'; // NONE, ASK_NAME, ASK_PHONE
            let userData = { name: '', phone: '' };

            // Initial Messages
            const initialGreeting = "Hi there! Welcome to Lucky Optical Centre. 👋<br><br>I'm your virtual assistant. I can help with opening hours, location, pricing, or booking an eye check.";
            
            // Default Quick Replies
            const defaultReplies = ["Book Eye Check", "Opening Hours", "Location", "Pricing"];

            // Toggle Chat
            function toggleChat() {
                isOpen = !isOpen;
                if (isOpen) {
                    chatWindow.classList.remove('scale-0', 'opacity-0', 'pointer-events-none');
                    chatWindow.classList.add('scale-100', 'opacity-100');
                    closeIcon.classList.remove('hidden');
                    closeIcon.classList.add('block');
                    chatBtn.firstElementChild.classList.add('hidden');
                    if(chatContent.children.length === 0) {
                        setTimeout(() => addMessage('ai', initialGreeting), 300);
                        setQuickReplies(defaultReplies);
                    }
                    setTimeout(() => chatInput.focus(), 300);
                } else {
                    chatWindow.classList.add('scale-0', 'opacity-0', 'pointer-events-none');
                    chatWindow.classList.remove('scale-100', 'opacity-100');
                    closeIcon.classList.add('hidden');
                    closeIcon.classList.remove('block');
                    chatBtn.firstElementChild.classList.remove('hidden');
                }
            }

            chatBtn.addEventListener('click', toggleChat);
            minimizeBtn.addEventListener('click', toggleChat);

            // Render Message
            function addMessage(sender, text) {
                const wrapper = document.createElement('div');
                wrapper.className = `flex w-full ${sender === 'user' ? 'justify-end' : 'justify-start'}`;
                
                const bubble = document.createElement('div');
                bubble.className = `max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                    sender === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-sm' 
                    : 'bg-white text-slate-800 border border-slate-200 rounded-bl-sm shadow-sm'
                }`;
                bubble.innerHTML = text; // allow basic HTML links/formatting from AI
                
                wrapper.appendChild(bubble);
                chatContent.appendChild(wrapper);
                
                // Scroll to bottom
                chatContent.scrollTop = chatContent.scrollHeight;
            }

            // Render Quick Replies
            function setQuickReplies(replies) {
                quickRepliesContainer.innerHTML = '';
                if(replies.length === 0) {
                    quickRepliesContainer.classList.add('hidden');
                    return;
                }
                quickRepliesContainer.classList.remove('hidden');
                replies.forEach(reply => {
                    const btn = document.createElement('button');
                    btn.className = 'text-xs font-medium px-3 py-1.5 bg-white border border-slate-200 rounded-full text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm';
                    btn.innerText = reply;
                    btn.onclick = () => handleUserAction(reply);
                    quickRepliesContainer.appendChild(btn);
                });
            }

            // Simulate Typing
            function showTyping() {
                const wrapper = document.createElement('div');
                wrapper.id = 'typing-indicator';
                wrapper.className = 'flex w-full justify-start';
                wrapper.innerHTML = `
                    <div class="bg-white border border-slate-200 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1 shadow-sm">
                        <div class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                        <div class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                        <div class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                `;
                chatContent.appendChild(wrapper);
                chatContent.scrollTop = chatContent.scrollHeight;
            }

            function removeTyping() {
                const indicator = document.getElementById('typing-indicator');
                if(indicator) indicator.remove();
            }

            // Handle Input Submit
            chatForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const text = chatInput.value.trim();
                if(text) handleUserAction(text);
            });

            // Core Logic Engine
            function handleUserAction(text) {
                addMessage('user', text);
                chatInput.value = '';
                setQuickReplies([]); // clear replies while processing
                showTyping();

                setTimeout(() => {
                    removeTyping();
                    processAIResponse(text.toLowerCase());
                }, 800 + Math.random() * 500); // Simulate network delay
            }

            function processAIResponse(input) {
                // Handle Booking Flow State Machine
                if (bookingState === 'ASK_NAME') {
                    userData.name = input;
                    bookingState = 'ASK_PHONE';
                    addMessage('ai', `Thanks, ${userData.name}. What is the best phone number to reach you at?`);
                    return;
                }
                
                if (bookingState === 'ASK_PHONE') {
                    userData.phone = input;
                    bookingState = 'NONE';
                    addMessage('ai', `Perfect! We have your request down. Mr. Han will contact you shortly at ${userData.phone} to confirm your appointment time.<br><br>If it's urgent, feel free to <a href="tel:0389615008" class="font-medium text-blue-600 hover:underline">Call Us directly</a>.`);
                    setQuickReplies(["Location", "Services"]);
                    return;
                }

                // Keyword Routing
                if (input.includes('book') || input.includes('appointment') || input.includes('check')) {
                    bookingState = 'ASK_NAME';
                    addMessage('ai', "I'd be happy to help arrange an eye check for you. <br><br>First, may I have your name?");
                } 
                else if (input.includes('hour') || input.includes('time') || input.includes('open')) {
                    addMessage('ai', "We are open:<br>• <b>Mon - Sat:</b> 11:00 AM - 8:30 PM<br>• <b>Sunday:</b> 11:00 AM - 3:00 PM<br><br><i>Note: Hours may vary during Lunar New Year.</i>");
                    setQuickReplies(["Book Eye Check", "Location"]);
                } 
                else if (input.includes('location') || input.includes('where') || input.includes('address')) {
                    addMessage('ai', "We are located at:<br><b>5, Medan, Jalan Taming 1, Taman Taming Jaya, 43300 Balakong, Selangor.</b><br><br>There is wheelchair-accessible parking available.");
                    setQuickReplies(["Opening Hours", "Book Eye Check"]);
                }
                else if (input.includes('price') || input.includes('cost') || input.includes('how much')) {
                    addMessage('ai', "Our pricing is very reasonable, and Mr. Han firmly believes in <b>no hard selling</b>. The exact cost depends on your specific prescription and frame choice. <br><br>We recommend dropping by for a free consultation!");
                    setQuickReplies(["Book Eye Check", "Services"]);
                }
                else if (input.includes('service') || input.includes('what do you do') || input.includes('lens')) {
                    addMessage('ai', "We provide:<br>• Comprehensive Eye Exams<br>• High Power Lens Solutions<br>• Spectacles & Frame Fitting<br>• Contact Lenses<br>• Sunglasses");
                    setQuickReplies(["Book Eye Check", "Pricing"]);
                }
                else if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
                    addMessage('ai', "Hello again! How can I help you today?");
                    setQuickReplies(defaultReplies);
                }
                else {
                    // Fallback
                    addMessage('ai', "I'm a simple AI assistant, so I might not understand everything perfectly yet. <br><br>You can ask me about our <b>hours</b>, <b>location</b>, <b>prices</b>, or to <b>book an appointment</b>. Or, you can call us at 03-8961 5008.");
                    setQuickReplies(defaultReplies);
                }
            }
        });
    
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
      

<nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:eye-linear" style={{strokeWidth: '1.5'}} width="1.5em"></iconify-icon>
<span className="font-semibold tracking-tight text-base uppercase">LUCKY OPTICAL</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#about">Why Us</a>
<a className="hover:text-slate-900 transition-colors" href="#testimonials">Reviews</a>
<a className="hover:text-slate-900 transition-colors" href="#contact">Location</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="tel:0389615008">
<iconify-icon icon="solar:phone-linear" width="1.2em"></iconify-icon>
                    03-8961 5008
                </a>
<button className="bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-slate-800 transition-all shadow-sm flex items-center gap-2" onclick="document.getElementById('ai-chat-btn').click()">
                    Book Exam
                </button>
</div>
</div>
</nav>

<section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40 px-4">
<div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-slate-50 -z-10"></div>
<div className="absolute inset-y-0 right-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&amp;w=2574&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-5 mask-image-gradient -z-10"></div>
<div className="max-w-7xl mx-auto text-center md:text-left md:flex items-center gap-12">
<div className="md:w-3/5 fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium mb-6">
<iconify-icon className="text-amber-400" icon="solar:star-bold"></iconify-icon>
                    5.0 Star Rated Eye Care in Balakong
                </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-6 text-slate-900">
                    Professional Eye Care <br className="hidden md:block"/>Without the Hard Sell.
                </h1>
<p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                    Experience patient-first consultations with Mr. Han. We specialize in comprehensive eye examinations and personalized solutions for complex prescriptions at affordable prices.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
<a className="w-full sm:w-auto bg-blue-600 text-white text-base font-medium px-6 py-3 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2" href="tel:0389615008">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                        Call Us Now
                    </a>
<button className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 text-base font-medium px-6 py-3 rounded-full hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm" onclick="document.getElementById('ai-chat-btn').click()">
<iconify-icon icon="solar:calendar-date-linear"></iconify-icon>
                        Book via Assistant
                    </button>
</div>
</div>
<div className="hidden md:block md:w-2/5 fade-in-up delay-200">
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50 bg-white p-2">
<img alt="Optometrist examining patient" className="w-full h-auto rounded-xl object-cover aspect-[4/3] grayscale-[20%] contrast-110" src="https://images.unsplash.com/photo-1554232456-8727aae0cfa4?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur rounded-xl p-4 shadow-sm border border-slate-100 flex items-center gap-4">
<div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
<iconify-icon icon="solar:verified-check-linear" width="1.5em"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Mr. Han, Optician</p>
<p className="text-xs text-slate-500">Expert in High Power Prescriptions</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-white" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16 fade-in-up">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Comprehensive Eye Care Services</h2>
<p className="text-base text-slate-600">From precise medical examinations to finding the perfect frame for your lifestyle and budget.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all group fade-in-up">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:eye-scan-linear" width="1.5em"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Comprehensive Eye Exam</h3>
<p className="text-sm text-slate-600 leading-relaxed">Detailed and accurate eye checks with clear, patient explanations of your eye health and prescription.</p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all group fade-in-up delay-100">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:glasses-linear" width="1.5em"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Spectacle &amp; Frame Selection</h3>
<p className="text-sm text-slate-600 leading-relaxed">Personalized recommendations to match your face shape, style preferences, and visual requirements.</p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all group fade-in-up delay-200">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:magnifer-zoom-in-linear" width="1.5em"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">High Power Lens Solutions</h3>
<p className="text-sm text-slate-600 leading-relaxed">Specialized expertise in crafting comfortable and aesthetically pleasing lenses for complex, high prescriptions.</p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all group fade-in-up">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:sun-2-linear" width="1.5em"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Quality Sunglasses</h3>
<p className="text-sm text-slate-600 leading-relaxed">Protect your eyes from UV rays with our curated selection of stylish and functional sunglasses.</p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all group lg:col-span-2 fade-in-up delay-100">
<div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:user-speak-linear" width="1.5em"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Honest Lens Consultation</h3>
<p className="text-sm text-slate-600 leading-relaxed">We pride ourselves on our strict "no hard selling" policy. Mr. Han provides transparent advice on the exact lenses you need, ensuring affordability without compromising quality.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-slate-900 text-white" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="fade-in-up">
<h2 className="text-3xl font-semibold tracking-tight mb-6">Why Balakong Trusts Lucky Optical</h2>
<p className="text-base text-slate-400 mb-8 leading-relaxed">
                    With a perfect 5.0-star rating built on years of trust, we focus on medical professionalism rather than retail pressure. Our repeat customer rate is a testament to our comfortable environment and expert care.
                </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<iconify-icon className="text-blue-400 mt-1" icon="solar:check-circle-linear" width="1.5em"></iconify-icon>
<div>
<h4 className="text-sm font-semibold mb-1">Clear Explanation, No Hard Sell</h4>
<p className="text-sm text-slate-400">We explain your prescription thoroughly and only recommend what you genuinely need.</p>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-blue-400 mt-1" icon="solar:wallet-money-linear" width="1.5em"></iconify-icon>
<div>
<h4 className="text-sm font-semibold mb-1">Affordable &amp; Reasonable Pricing</h4>
<p className="text-sm text-slate-400">High-quality eye care and premium frames shouldn't break the bank.</p>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-blue-400 mt-1" icon="solar:wheelchair-linear" width="1.5em"></iconify-icon>
<div>
<h4 className="text-sm font-semibold mb-1">Fully Accessible Environment</h4>
<p className="text-sm text-slate-400">Wheelchair-accessible car park, seating, and gender-neutral toilet facilities available for all.</p>
</div>
</li>
</ul>
</div>
<div className="relative fade-in-up delay-200">
<div className="aspect-square rounded-full bg-blue-600/20 absolute -inset-4 blur-3xl -z-10"></div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 pt-8">
<div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
<div className="text-3xl font-semibold text-white mb-1">5.0</div>
<div className="flex text-amber-400 mb-2">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-xs text-slate-400">Google Rating</p>
</div>
<div className="bg-blue-600 p-6 rounded-2xl">
<iconify-icon className="text-white mb-4" icon="solar:users-group-two-rounded-linear" width="2em"></iconify-icon>
<h4 className="text-sm font-semibold text-white mb-1">High Repeat Rate</h4>
<p className="text-xs text-blue-100">Patients trust us for life.</p>
</div>
</div>
<div className="space-y-4">
<div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
<iconify-icon className="text-blue-400 mb-4" icon="solar:diploma-verified-linear" width="2em"></iconify-icon>
<h4 className="text-sm font-semibold text-white mb-1">Expert Optician</h4>
<p className="text-xs text-slate-400">Led by Mr. Han.</p>
</div>
<div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
<iconify-icon className="text-blue-400 mb-4" icon="solar:eye-linear" width="2em"></iconify-icon>
<h4 className="text-sm font-semibold text-white mb-1">High Power</h4>
<p className="text-xs text-slate-400">Specialist prescriptions.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-slate-50" id="testimonials">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 fade-in-up">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Patient Experiences</h2>
<p className="text-base text-slate-600">Don't just take our word for it. Read what our local community has to say about their visits.</p>
</div>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1" href="https://maps.google.com/?q=Lucky+Optical+Centre+Balakong" target="_blank">
                    View all 54 reviews <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 fade-in-up">
<div className="flex text-amber-400 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-700 mb-6 italic leading-relaxed">"Mr. Han is a very professional and experienced optician. Good advice on suitable lens and frame choice. Great service, no rush - no hard sell. Reasonable prices."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-semibold text-sm">GG</div>
<div>
<p className="text-sm font-semibold text-slate-900">Gl Gl</p>
<p className="text-xs text-slate-500">Local Guide</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 fade-in-up delay-100">
<div className="flex text-amber-400 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-700 mb-6 italic leading-relaxed">"Good service and very professional by Mr Han. He explained everything clearly and made the whole experience comfortable."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-semibold text-sm">YW</div>
<div>
<p className="text-sm font-semibold text-slate-900">Yen Yen Wong</p>
<p className="text-xs text-slate-500">Repeat Customer</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 fade-in-up delay-200">
<div className="flex text-amber-400 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-700 mb-6 italic leading-relaxed">"Thank you Han for his professional advice, he suggested a frame suitable for my extremely high power, and the final result is fantastic!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-semibold text-sm">AC</div>
<div>
<p className="text-sm font-semibold text-slate-900">Andrew Cch</p>
<p className="text-xs text-slate-500">Local Guide</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-white border-t border-slate-100" id="contact">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="fade-in-up">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-8">Visit Our Store</h2>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 shrink-0 mt-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Address</h4>
<p className="text-sm text-slate-600 leading-relaxed">
                                5, Medan, Jalan Taming 1<br/>
                                Taman Taming Jaya<br/>
                                43300 Balakong, Selangor
                            </p>
<p className="text-xs text-slate-400 mt-2">Map Code: 2PFR+QM Balakong</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 shrink-0 mt-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Opening Hours</h4>
<div className="text-sm text-slate-600 grid grid-cols-2 gap-x-8 gap-y-1">
<span>Mon - Sat:</span> <span>11:00 AM - 8:30 PM</span>
<span>Sunday:</span> <span>11:00 AM - 3:00 PM</span>
</div>
<p className="text-xs text-slate-400 mt-2">*Note: Lunar New Year hours may vary</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 shrink-0 mt-1">
<iconify-icon icon="solar:card-2-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Payment Options</h4>
<p className="text-sm text-slate-600">Credit Cards, Debit Cards, NFC Mobile Payments</p>
</div>
</div>
</div>
<div className="mt-10 pt-10 border-t border-slate-100">
<a className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white text-base font-medium px-8 py-4 rounded-full hover:bg-slate-800 transition-all shadow-sm" href="tel:0389615008">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                        03-8961 5008
                    </a>
</div>
</div>

<div className="bg-slate-100 rounded-2xl border border-slate-200 aspect-square md:aspect-auto md:h-full min-h-[400px] flex flex-col items-center justify-center text-slate-400 fade-in-up delay-100 relative overflow-hidden">
<iconify-icon className="mb-4 text-slate-300" icon="solar:map-bold-duotone" width="4em"></iconify-icon>
<p className="text-sm font-medium">Interactive Map Embed</p>
<p className="text-xs">Balakong, Selangor</p>

<div className="absolute inset-0 bg-slate-200/50 backdrop-blur-[2px]"></div>
<div className="absolute z-10 text-center">
<a className="bg-white text-slate-900 text-sm font-medium px-6 py-2 rounded-full shadow-sm hover:shadow-md transition-all border border-slate-200 inline-flex items-center gap-2" href="https://maps.google.com/?q=2PFR+QM+Balakong" target="_blank">
<iconify-icon icon="solar:routing-2-linear"></iconify-icon> Get Directions
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-12 px-4 border-t border-slate-800">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2 text-white">
<iconify-icon icon="solar:eye-linear" width="1.5em"></iconify-icon>
<span className="font-semibold tracking-tight text-sm uppercase">LUCKY OPTICAL CENTRE</span>
</div>
<p className="text-xs">© 2024 Lucky Optical Centre. All rights reserved.</p>
<div className="flex items-center gap-4 text-sm">
<span className="flex items-center gap-1" title="Wheelchair Accessible"><iconify-icon icon="solar:wheelchair-linear"></iconify-icon> Accessible</span>
<span className="flex items-center gap-1" title="Gender Neutral Toilet"><iconify-icon icon="solar:users-group-two-rounded-linear"></iconify-icon> Inclusive</span>
</div>
</div>
</footer>


<button className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-700 transition-transform hover:scale-105 z-50 group" id="ai-chat-btn">
<iconify-icon className="group-hover:hidden" icon="solar:chat-round-dots-linear" width="1.8em"></iconify-icon>
<iconify-icon className="hidden group-hover:block" icon="solar:close-circle-linear" id="ai-chat-close-icon" width="1.8em"></iconify-icon>
</button>

<div className="fixed bottom-24 right-6 w-[calc(100vw-3rem)] sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden z-50 transition-all origin-bottom-right transform scale-0 opacity-0 pointer-events-none h-[32rem] max-h-[80vh]" id="ai-chat-window">

<div className="bg-slate-900 text-white p-4 flex items-center justify-between shrink-0">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center relative">
<iconify-icon icon="solar:robot-linear" width="1.2em"></iconify-icon>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-slate-900 rounded-full"></span>
</div>
<div>
<h3 className="text-sm font-semibold">Optical Assistant</h3>
<p className="text-[10px] text-slate-300">Typically replies instantly</p>
</div>
</div>
<button className="text-slate-400 hover:text-white transition-colors" id="ai-chat-minimize">
<iconify-icon icon="solar:minimalistic-magnifer-zoom-out-linear" width="1.2em"></iconify-icon>
</button>
</div>

<div className="flex-1 p-4 overflow-y-auto no-scrollbar bg-slate-50 flex flex-col gap-4" id="ai-chat-content">

</div>

<div className="px-4 py-2 bg-slate-50 flex flex-wrap gap-2 shrink-0 border-t border-slate-100" id="ai-quick-replies">

</div>

<div className="p-3 bg-white border-t border-slate-200 shrink-0">
<form className="relative flex items-center" id="ai-chat-form">
<input autocomplete="off" className="w-full bg-slate-100 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 rounded-full pl-4 pr-12 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-all outline-none" id="ai-chat-input" placeholder="Type a message..." type="text"/>
<button className="absolute right-1 w-8 h-8 flex items-center justify-center text-blue-600 hover:bg-blue-50 rounded-full transition-colors" type="submit">
<iconify-icon icon="solar:plain-2-linear" width="1.2em"></iconify-icon>
</button>
</form>
</div>
</div>



    </>
  );
}
