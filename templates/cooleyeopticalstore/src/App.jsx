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
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
500: '#0ea5e9',
600: '#0284c7',
900: '#0c4a6e',
}
},
animation: {
'fade-in': 'fadeIn 0.8s ease-out forwards',
'slide-up': 'slideUp 0.8s ease-out forwards',
'bounce-subtle': 'bounceSubtle 2s infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
bounceSubtle: {
'0%, 100%': { transform: 'translateY(-5%)' },
'50%': { transform: 'translateY(0)' },
}
}
}
}
}



{
"@context": "https://schema.org",
"@type": "Optician",
"name": "CoolEye Optical",
"image": "",
"@id": "",
"url": "",
"telephone": "+60194776688",
"address": {
"@type": "PostalAddress",
"streetAddress": "29, Jalan Setia Balakong 1/1, Taman Setia Balakong",
"addressLocality": "Balakong",
"addressRegion": "Selangor",
"postalCode": "43300",
"addressCountry": "MY"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 3.0285,
"longitude": 101.7400
},
"openingHoursSpecification": {
"@type": "OpeningHoursSpecification",
"dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
"opens": "11:00",
"closes": "20:00"
},
"priceRange": "$$"
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Set current year
        document.getElementById('year').textContent = new Date().getFullYear();

        // --- AI Assistant Logic ---
        const chatBtn = document.getElementById('ai-chat-btn');
        const chatWindow = document.getElementById('ai-chat-window');
        const chatIcon = document.getElementById('chat-icon');
        const messagesContainer = document.getElementById('chat-messages');
        const chatForm = document.getElementById('chat-form');
        const chatInput = document.getElementById('chat-input');
        const quickRepliesContainer = document.getElementById('quick-replies');

        let isChatOpen = false;
        let hasGreeted = false;

        // Structured intent logic (Simulation for later API integration)
        const knowledgeBase = {
            greetings: ["hello", "hi", "hey", "morning", "afternoon"],
            hours: ["time", "open", "close", "hours", "operation", "sunday"],
            location: ["where", "location", "address", "map", "find"],
            services: ["service", "test", "exam", "check"],
            multifocal: ["multi", "focal", "progressive", "reading", "dizzy", "far near"],
            contact_lens: ["contact", "lens", "color"],
            price: ["price", "cost", "cheap", "affordable", "much"],
            frames: ["frame", "spectacle", "glasses", "style", "design"],
            contact: ["phone", "call", "whatsapp", "contact us"]
        };

        const responses = {
            greetings: "Hello! Welcome to CoolEye Optical. I'm your digital receptionist. How can I help you today?",
            hours: "We open at 11:00 AM. We are open on Sundays too! Please note that our hours might vary during public holidays like Lunar New Year. Would you like to call us to confirm today's hours?",
            location: "We are located at 29, Jalan Setia Balakong 1/1, Taman Setia Balakong. You can find us easily on Google Maps using code: 2Q72+PW.",
            services: "We offer professional eye examinations, multi-focal fittings, contact lenses, blue light protection, and a wide variety of stylish frames. We also do on-site adjustments!",
            multifocal: "Multi-focal lenses are our specialty! Many of our customers report quick adaptation with zero dizziness thanks to our precise measurements. Our consultants, like Mr. James and Raymond, will guide you through the process.",
            contact_lens: "We carry various high-quality contact lenses, including daily, monthly, and colored options. We also provide proper fitting and advice for dry eyes.",
            price: "CoolEye Optical is known for affordable and transparent pricing! While specific prices depend on your prescription and frame choice, we always recommend the best options suited for your budget without compromising quality.",
            frames: "We have a clean, minimalist store stocked with a wide variety of stylish, durable, and comfortable frames. Come visit us to try them on!",
            contact: "You can reach us directly at 019-477 6688.",
            default: "I'm a simulated AI assistant. To give you the best advice, I recommend calling our shop directly at 019-477 6688 or visiting us in Balakong. Would you like our location or phone number?"
        };

        const initialQuickReplies = [
            "Opening Hours", "Location", "Multi-focal lenses", "Price range"
        ];

        function toggleChat() {
            isChatOpen = !isChatOpen;
            if (isChatOpen) {
                chatWindow.classList.remove('closed');
                chatWindow.classList.add('open');
                chatIcon.setAttribute('icon', 'solar:close-linear');
                if (!hasGreeted) {
                    setTimeout(() => addBotMessage("Hi there! Welcome to CoolEye Optical in Balakong. How can I assist you with your eye care needs today?"), 300);
                    showQuickReplies(initialQuickReplies);
                    hasGreeted = true;
                }
            } else {
                chatWindow.classList.remove('open');
                chatWindow.classList.add('closed');
                chatIcon.setAttribute('icon', 'solar:smart-home-linear');
            }
        }

        function addMessage(text, isUser = false) {
            const msgDiv = document.createElement('div');
            msgDiv.className = `max-w-[85%] rounded-2xl px-4 py-2 ${isUser ? 'bg-slate-900 text-white self-end rounded-br-sm' : 'bg-slate-100 text-slate-800 self-start rounded-bl-sm'} animate-fade-in`;
            msgDiv.textContent = text;
            messagesContainer.appendChild(msgDiv);
            scrollToBottom();
        }

        function addTypingIndicator() {
            const div = document.createElement('div');
            div.id = 'typing-indicator';
            div.className = 'bg-slate-100 text-slate-800 self-start rounded-2xl rounded-bl-sm px-4 py-3 max-w-[85%] typing-indicator';
            div.innerHTML = '<span></span><span></span><span></span>';
            messagesContainer.appendChild(div);
            scrollToBottom();
            return div;
        }

        function removeTypingIndicator(element) {
            if (element && element.parentNode) {
                element.parentNode.removeChild(element);
            }
        }

        function addBotMessage(text, actions = []) {
            const typing = addTypingIndicator();
            
            // Simulate network delay
            setTimeout(() => {
                removeTypingIndicator(typing);
                addMessage(text, false);
                
                if (actions.length > 0) {
                    const actionDiv = document.createElement('div');
                    actionDiv.className = 'flex flex-wrap gap-2 mt-2 self-start animate-fade-in';
                    actions.forEach(action => {
                        if (action.type === 'call') {
                            actionDiv.innerHTML += `<a href="${action.url}" class="text-xs bg-brand-50 text-brand-600 border border-brand-100 px-3 py-1.5 rounded-full hover:bg-brand-100 transition-colors flex items-center gap-1"><iconify-icon icon="solar:phone-linear"></iconify-icon>${action.label}</a>`;
                        } else if (action.type === 'map') {
                            actionDiv.innerHTML += `<a href="${action.url}" target="_blank" class="text-xs bg-brand-50 text-brand-600 border border-brand-100 px-3 py-1.5 rounded-full hover:bg-brand-100 transition-colors flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon>${action.label}</a>`;
                        }
                    });
                    messagesContainer.appendChild(actionDiv);
                    scrollToBottom();
                }
            }, 600 + Math.random() * 400); // 600-1000ms delay
        }

        function showQuickReplies(replies) {
            quickRepliesContainer.innerHTML = '';
            replies.forEach(reply => {
                const btn = document.createElement('button');
                btn.className = 'text-xs bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-colors whitespace-nowrap';
                btn.textContent = reply;
                btn.onclick = () => handleUserInput(reply);
                quickRepliesContainer.appendChild(btn);
            });
        }

        function scrollToBottom() {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        function processIntent(input) {
            const lowerInput = input.toLowerCase();
            let matchedIntent = null;

            for (const [intent, keywords] of Object.entries(knowledgeBase)) {
                if (keywords.some(kw => lowerInput.includes(kw))) {
                    matchedIntent = intent;
                    break;
                }
            }

            let responseText = responses.default;
            let actions = [];

            if (matchedIntent) {
                responseText = responses[matchedIntent];
                if (matchedIntent === 'location') {
                    actions.push({ type: 'map', label: 'Open Maps', url: 'https://maps.google.com/?q=29,+Jalan+Setia+Balakong+1/1,+43300+Balakong' });
                }
                if (matchedIntent === 'contact' || matchedIntent === 'hours' || !matchedIntent) {
                     actions.push({ type: 'call', label: 'Call 019-477 6688', url: 'tel:0194776688' });
                }
            } else {
                 actions.push({ type: 'call', label: 'Call Store', url: 'tel:0194776688' });
                 actions.push({ type: 'map', label: 'Get Directions', url: 'https://maps.google.com/?q=29,+Jalan+Setia+Balakong+1/1,+43300+Balakong' });
            }

            addBotMessage(responseText, actions);
            quickRepliesContainer.innerHTML = ''; // Clear quick replies after interaction
        }

        function handleUserInput(text) {
            if (!text.trim()) return;
            addMessage(text, true);
            chatInput.value = '';
            processIntent(text);
        }

        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleUserInput(chatInput.value);
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
      

<header className="fixed top-0 w-full z-40 glass border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-slate-900 flex items-center gap-2" href="#">
<iconify-icon className="text-brand-600 text-xl" icon="solar:eye-linear" strokeWidth="1.5"></iconify-icon>
                COOLEYE
            </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#testimonials">Reviews</a>
<a className="hover:text-slate-900 transition-colors" href="#contact">Location</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-brand-600 transition-colors" href="tel:0194776688">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                    019-477 6688
                </a>
<button className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-sm" onclick="toggleChat()">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden sm:inline">Ask AI</span>
</button>
</div>
</div>
</header>
<main>

<section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden relative" id="hero">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-50 rounded-full blur-3xl opacity-50 -z-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-medium mb-4">
<iconify-icon icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
                    Top Rated in Balakong
                </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-slate-900 leading-tight">
                    Professional Eye Care &amp; <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">Stylish Frames</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
                    Experience thorough, patient consultations with affordable pricing. Your trusted neighborhood optical experts for multi-focal lenses and comprehensive eye health.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<a className="w-full sm:w-auto px-6 py-3 bg-brand-600 text-white rounded-full text-sm font-medium hover:bg-brand-500 transition-all shadow-sm shadow-brand-500/20 flex items-center justify-center gap-2" href="#contact">
                        Visit Our Store
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<button className="w-full sm:w-auto px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full text-sm font-medium hover:bg-slate-50 transition-all shadow-sm flex items-center justify-center gap-2" onclick="toggleChat()">
<iconify-icon icon="solar:smart-home-linear" strokeWidth="1.5"></iconify-icon>
                        Chat with Assistant
                    </button>
</div>
<div className="pt-12 flex items-center justify-center gap-8 text-slate-400 opacity-80">
<div className="flex items-center gap-2 text-sm font-medium">
<iconify-icon className="text-xl" icon="solar:card-linear" strokeWidth="1.5"></iconify-icon>
<span>Card &amp; NFC</span>
</div>
<div className="flex items-center gap-2 text-sm font-medium">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<span>Quality Lens</span>
</div>
<div className="flex items-center gap-2 text-sm font-medium hidden sm:flex">
<iconify-icon className="text-xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span>Easy Parking</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white px-6" id="about">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative">
<div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden relative group">

<div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200"></div>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-6xl text-slate-300 group-hover:scale-110 transition-transform duration-500" icon="solar:shop-linear" strokeWidth="1"></iconify-icon>
</div>
</div>

<div className="absolute -bottom-6 -right-6 glass p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
<iconify-icon className="text-xl" icon="solar:heart-angle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500 font-medium">Trusted by</p>
<p className="text-sm font-semibold text-slate-900">1000+ Locals</p>
</div>
</div>
</div>
<div className="order-1 md:order-2 space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-900">
                        Clarity, Comfort, and Patient-First Care.
                    </h2>
<p className="text-slate-500 leading-relaxed font-light">
                        At CoolEye Optical, we believe that understanding your vision should be a stress-free experience. Our clean, minimalist store is designed to make you feel at ease from the moment you walk in.
                    </p>
<p className="text-slate-500 leading-relaxed font-light">
                        Led by experienced consultants like Mr. James and Raymond, we are known throughout Balakong for taking the time to thoroughly explain your eye condition, offering honest advice without the hard sell. We bring you high-quality frames and multi-focal expertise at prices that make sense.
                    </p>
<ul className="pt-4 space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
<iconify-icon className="text-brand-500 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Detailed, non-rushed eye examinations
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
<iconify-icon className="text-brand-500 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Transparent, affordable pricing model
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
<iconify-icon className="text-brand-500 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Expert fitting for multi-focal lenses
                        </li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50" id="services">
<div className="max-w-6xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tighter text-slate-900 mb-4">Comprehensive Optical Services</h2>
<p className="text-slate-500 font-light">Tailored solutions for your vision needs, utilizing modern techniques and a wide array of premium products.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600 mb-6 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:eye-scan-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Detailed Eye Testing</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">Thorough assessments checking for clarity and overall eye health. We explain every step so you understand your prescription.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600 mb-6 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Multi-Focal Expertise</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">Struggling with near and far vision? We specialize in precise measurements for multi-focal lenses to ensure quick adaptation without dizziness.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600 mb-6 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:glasses-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Stylish Frames</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">A wide, carefully curated selection of minimalist, modern, and durable frames to suit all face shapes and budgets.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600 mb-6 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:sun-fog-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Blue Light Protection</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">Protect your eyes from digital strain with high-quality blue light filtering lenses, perfect for office workers and students.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600 mb-6 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:waterdrops-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Contact Lenses</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">Premium contact lenses including colors and astigmatism options. We provide proper fitting and care instructions for healthy usage.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600 mb-6 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">On-Site Adjustments</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">Free cleaning, precise frame adjustments, and minor repairs to ensure your glasses always fit perfectly and comfortably.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white overflow-hidden" id="testimonials">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tighter text-slate-900 mb-4">Loved by the Community</h2>
<p className="text-slate-500 font-light max-w-md">Don't just take our word for it. Read what our satisfied customers in Balakong have to say about their experience.</p>
</div>
<div className="flex items-center gap-2 text-sm font-medium text-slate-900 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
<span className="text-amber-400 flex items-center">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</span>
<span>5.0 Average Rating</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="flex gap-1 text-amber-400 text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 font-light leading-relaxed">"Very nice service from James, very patient and professional. He explained the product details clearly and answered my questions patiently. Will recommend to friends and family!"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">JE</div>
<span className="text-xs font-medium text-slate-900">Jay Yee Eng</span>
</div>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="flex gap-1 text-amber-400 text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 font-light leading-relaxed">"My first time visiting CoolEye to purchase a pair of multi-focal lenses. Surprisingly, I had no dizziness, easy focus far and near, and quick adaptation. Good service and reasonable pricing."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">SH</div>
<span className="text-xs font-medium text-slate-900">Siti Hajar</span>
</div>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="flex gap-1 text-amber-400 text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 font-light leading-relaxed">"Went there to buy contact lenses and they went above and beyond by cleaning my glasses and sharing a lot of info regarding dry eyes. Very informative chat, highly recommended."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">IF</div>
<span className="text-xs font-medium text-slate-900">Izyan Farha</span>
</div>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hidden md:block">
<div className="flex gap-1 text-amber-400 text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 font-light leading-relaxed">"Boss Raymond is very helpful and professional! Love their service and price is very affordable! Will visit again."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">EC</div>
<span className="text-xs font-medium text-slate-900">Elvira Cheong</span>
</div>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hidden md:block">
<div className="flex gap-1 text-amber-400 text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 font-light leading-relaxed">"My 64-year-old dad was very impressed by the professional service. Extremely patient and thorough testing, providing good advice. Great environment too."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">SY</div>
<span className="text-xs font-medium text-slate-900">Shahira Yumi</span>
</div>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hidden md:block">
<div className="flex gap-1 text-amber-400 text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 font-light leading-relaxed">"Very clean and minimalist shop. Lots of options, reasonable prices. Importantly, Mr. James is friendly and welcoming. Satisfactory descriptions of the glasses."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">A</div>
<span className="text-xs font-medium text-slate-900">Anonymous Local</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 text-white" id="contact">
<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div>
<h2 className="text-3xl font-semibold tracking-tighter mb-4">Visit Our Store</h2>
<p className="text-slate-400 font-light text-sm max-w-md">Drop by for a quick visit, browse our latest frame collections, or get a comprehensive eye examination.</p>
</div>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-white" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium mb-1">Address</h4>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                                    29, Jalan Setia Balakong 1/1<br/>
                                    Taman Setia Balakong<br/>
                                    43300 Balakong, Selangor
                                </p>
<p className="text-xs text-brand-400 mt-2 font-mono">Google Code: 2Q72+PW</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-white" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium mb-1">Opening Hours</h4>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                                    Opens 11:00 AM Daily<br/>
<span className="text-xs italic opacity-75">(Note: Lunar New Year hours may vary)</span>
</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-white" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium mb-1">Phone</h4>
<a className="text-sm text-slate-400 font-light hover:text-white transition-colors" href="tel:0194776688">019-477 6688</a>
</div>
</div>
</div>
</div>
<div className="relative w-full aspect-video lg:aspect-square bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 map-pattern flex flex-col items-center justify-center text-center p-6 group">
<iconify-icon className="text-6xl text-slate-600 mb-4 group-hover:text-brand-400 transition-colors" icon="solar:map-linear" strokeWidth="1"></iconify-icon>
<h3 className="text-lg font-medium text-slate-300 mb-2">Locate Us in Balakong</h3>
<p className="text-xs text-slate-500 max-w-xs mb-6">Easy parking available. Look for our clean, minimalist storefront.</p>
<a className="px-5 py-2.5 bg-white text-slate-900 rounded-full text-xs font-medium hover:bg-slate-100 transition-colors flex items-center gap-2" href="https://maps.google.com/?q=29,+Jalan+Setia+Balakong+1/1,+43300+Balakong" rel="noopener noreferrer" target="_blank">
                        Open in Google Maps
                        <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-20 bg-brand-50 px-6 border-b border-brand-100">
<div className="max-w-3xl mx-auto text-center space-y-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-900">Ready for clearer vision?</h2>
<p className="text-slate-600 font-light">Book your eye test today or chat with our AI assistant to get quick answers about our frames and services.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2" href="tel:0194776688">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                        Call for Consultation
                    </a>
<button className="w-full sm:w-auto px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full text-sm font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2" onclick="toggleChat()">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
                        Chat with AI
                    </button>
</div>
</div>
</section>
</main>

<footer className="bg-white py-12 px-6 border-t border-slate-100">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-lg font-semibold tracking-tighter text-slate-900">
<iconify-icon className="text-brand-600" icon="solar:eye-linear" strokeWidth="1.5"></iconify-icon>
                COOLEYE
            </div>
<p className="text-xs text-slate-400 font-light">© <span id="year"></span> CoolEye Optical. All rights reserved.</p>
<div className="flex gap-4 text-slate-400">
<iconify-icon className="text-xl" icon="solar:card-linear" title="Credit Cards Accepted"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:wallet-linear" title="Debit &amp; NFC Accepted"></iconify-icon>
</div>
</div>
</footer>

<button className="fixed bottom-6 right-6 w-14 h-14 bg-slate-900 text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center z-50" id="ai-chat-btn" onclick="toggleChat()">
<iconify-icon className="text-2xl" icon="solar:smart-home-linear" id="chat-icon"></iconify-icon>
</button>

<div className="closed fixed bottom-24 right-6 w-80 sm:w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden z-50 h-[500px] max-h-[70vh]" id="ai-chat-window">

<div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 relative">
<iconify-icon icon="solar:robot-linear"></iconify-icon>
<span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 border border-white rounded-full"></span>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 leading-none">CoolEye Assistant</h4>
<span className="text-[10px] text-slate-500">Always online</span>
</div>
</div>
<button className="text-slate-400 hover:text-slate-600 transition-colors p-1" onclick="toggleChat()">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm font-light flex flex-col" id="chat-messages">

</div>

<div className="px-4 pb-2 flex flex-wrap gap-2" id="quick-replies">

</div>

<div className="p-3 border-t border-slate-100 bg-white">
<form className="flex items-center gap-2 relative" id="chat-form">
<input autocomplete="off" className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-brand-300 focus:ring-1 focus:ring-brand-300 transition-all" id="chat-input" placeholder="Type your question..." type="text"/>
<button className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 hover:bg-slate-800 transition-colors" type="submit">
<iconify-icon icon="solar:plain-2-linear"></iconify-icon>
</button>
</form>
<div className="text-[9px] text-center text-slate-400 mt-2">Powered by AI Simulation</div>
</div>
</div>



    </>
  );
}
