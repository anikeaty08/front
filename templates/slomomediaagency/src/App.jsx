import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
orange: '#e3a66a',
dark: '#1a1a1a',
light: '#fdfbf7',
gray: '#888888',
surface: '#f3f1ed'
}
},
boxShadow: {
'glass': '0 4px 30px rgba(0, 0, 0, 0.03)',
'chat': '0 10px 40px -10px rgba(0,0,0,0.1)',
'glow': '0 0 20px rgba(227, 166, 106, 0.3)',
},
animation: {
'bounce-slow': 'bounce 3s infinite',
'fade-in': 'fadeIn 0.3s ease-out forwards',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        lucide.createIcons();

        document.addEventListener('DOMContentLoaded', () => {
            // --- Mobile Menu ---
            const mobileBtn = document.getElementById('mobile-menu-btn');
            const closeMobileBtn = document.getElementById('close-mobile-menu');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');

            function toggleMobileMenu() {
                if(mobileMenu.classList.contains('hidden-menu')) {
                    mobileMenu.classList.remove('hidden-menu');
                    mobileMenu.classList.add('visible-menu');
                    document.body.style.overflow = 'hidden'; 
                } else {
                    mobileMenu.classList.remove('visible-menu');
                    mobileMenu.classList.add('hidden-menu');
                    document.body.style.overflow = '';
                }
            }

            mobileBtn.addEventListener('click', toggleMobileMenu);
            closeMobileBtn.addEventListener('click', toggleMobileMenu);
            
            mobileLinks.forEach(link => {
                link.addEventListener('click', toggleMobileMenu);
            });

            // --- Chat Widget Logic ---
            const toggleBtn = document.getElementById('chat-toggle');
            const closeBtn = document.getElementById('close-chat');
            const chatWindow = document.getElementById('chat-window');
            const iconOpen = document.getElementById('icon-open');
            const iconClose = document.getElementById('icon-close');
            const chatForm = document.getElementById('chat-form');
            const chatInput = document.getElementById('chat-input');
            const messagesContainer = document.getElementById('chat-messages');
            const promptBtns = document.querySelectorAll('.chat-prompt-btn');

            let isOpen = false;

            function toggleChat() {
                isOpen = !isOpen;
                if (isOpen) {
                    chatWindow.classList.remove('hidden');
                    setTimeout(() => {
                        chatWindow.classList.remove('scale-95', 'opacity-0');
                        chatWindow.classList.add('scale-100', 'opacity-100');
                    }, 10);
                    iconOpen.classList.add('hidden');
                    iconClose.classList.remove('hidden');
                    setTimeout(() => chatInput.focus(), 300);
                } else {
                    chatWindow.classList.remove('scale-100', 'opacity-100');
                    chatWindow.classList.add('scale-95', 'opacity-0');
                    setTimeout(() => {
                        chatWindow.classList.add('hidden');
                    }, 300);
                    iconOpen.classList.remove('hidden');
                    iconClose.classList.add('hidden');
                }
            }

            toggleBtn.addEventListener('click', toggleChat);
            closeBtn.addEventListener('click', toggleChat);

            const knowledgeBase = [
                {
                    keywords: ['refresh', '30 days', 'reset', 'one-time'],
                    response: "The Content Refresh is a $2,500 one-time package. It includes 4 weeks of done-with-you service: Strategy, a 3-hour Shoot, 6-8 Reels, Photos, and a Posting Plan. It's the best way to start without a retainer."
                },
                {
                    keywords: ['tier 1', 'presence', '$1500'],
                    response: "Tier 1 ($1,500/mo) is for keeping you active. You get a 3-hour shoot, 4-6 reels, and we handle the posting. It's great if you just want to look good without deep strategy."
                },
                {
                    keywords: ['tier 2', 'growth', 'popular', '$3000'],
                    response: "Tier 2 ($3,000/mo) is our most popular option. It includes 8-12 reels, multi-location coverage, weekly content direction, and strategic captions. It's designed for growth."
                },
                {
                    keywords: ['tier 3', 'system', '$4000', 'ai', 'ads'],
                    response: "Tier 3 ($4,000/mo) is a full operating system. We handle everything from Tier 2 plus Stories, Analytics, Ad Assets, DM Automation, and AI assistance."
                },
                {
                    keywords: ['retreat', 'event', 'coverage'],
                    response: "We love retreats! Standard pricing is $2,500/day. However, if you are a retainer client, you get preferred pricing (15-40% off depending on your tier)."
                }
            ];

            function findResponse(userText) {
                const lowerText = userText.toLowerCase();
                for (let item of knowledgeBase) {
                    if (item.keywords.some(keyword => lowerText.includes(keyword))) {
                        return item.response;
                    }
                }
                return "That's a great question. While I'm just an AI assistant, I'd recommend booking a quick call to discuss that specific detail! Is there anything else about pricing or our process I can answer?";
            }

            function addMessage(text, isUser = false) {
                const div = document.createElement('div');
                div.className = `flex gap-3 ${isUser ? 'flex-row-reverse' : ''} chat-enter animate-[fadeIn_0.3s_ease-out_forwards]`;
                const bubbleColor = isUser ? 'bg-[#e3a66a] text-white rounded-tr-none' : 'bg-white text-gray-600 rounded-tl-none border border-stone-100 shadow-sm';
                div.innerHTML = `
                    <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1 ${isUser ? 'bg-stone-200 text-stone-500' : 'bg-[#e3a66a] text-white'}">
                        ${isUser 
                            ? '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' 
                            : '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bot"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>'
                        }
                    </div>
                    <div class="${bubbleColor} p-3 rounded-2xl text-sm max-w-[85%] leading-relaxed">
                        ${text}
                    </div>
                `;
                messagesContainer.appendChild(div);
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
                setTimeout(() => div.classList.remove('chat-enter'), 300);
            }

            function handleSubmit(e) {
                if(e) e.preventDefault();
                const text = chatInput.value.trim();
                if (!text) return;
                addMessage(text, true);
                chatInput.value = '';
                setTimeout(() => {
                    const response = findResponse(text);
                    addMessage(response, false);
                }, 800 + Math.random() * 500);
            }

            chatForm.addEventListener('submit', handleSubmit);
            
            promptBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    chatInput.value = e.target.textContent;
                    handleSubmit();
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
<div className="mx-auto max-w-7xl px-6 md:px-8">
<div className="flex glass-panel bg-white/60 h-20 rounded-2xl mt-4 pr-6 pl-6 relative shadow-glass items-center justify-between">

<a className="text-xl font-bold tracking-tight group flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded-full bg-[#e3a66a] flex items-center justify-center text-white">
<svg aria-hidden="true" className="lucide lucide-camera lucide-aperture w-[20px] h-[20px]" data-lucide="camera" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
<span className="">Slomo Media</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="#work">Work</a>
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="#services">Services</a>
<a className="hover:text-black transition-colors text-sm font-medium text-gray-600" href="#about">About Us</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center hover:bg-[#e3a66a] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-sm font-medium text-white bg-black rounded-full pt-2.5 pr-6 pb-2.5 pl-6 shadow-sm" href="https://form.typeform.com/to/isMbl1GV">
                        Book a Call
                    </a>
<button className="md:hidden p-2 text-gray-600 hover:text-black hover:bg-black/5 rounded-full transition-colors" id="mobile-menu-btn">
<svg aria-hidden="true" className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<div className="hidden-menu fixed inset-0 z-50 bg-white/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center" id="mobile-menu">
<button className="absolute top-8 right-8 p-2 text-gray-600 hover:text-black hover:bg-black/5 rounded-full transition-colors" id="close-mobile-menu">
<svg className="lucide lucide-x" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="flex flex-col items-center gap-8 text-2xl font-medium">
<a className="mobile-link hover:text-[#e3a66a] transition-colors" href="#work">Work</a>
<a className="mobile-link hover:text-[#e3a66a] transition-colors" href="#services">Services</a>
<a className="mobile-link hover:text-[#e3a66a] transition-colors" href="#faq">FAQ</a>
<a className="mobile-link mt-4 px-8 py-3 bg-black text-white rounded-full text-lg hover:bg-[#e3a66a] transition-colors" href="#book">Book a Call</a>
</div>
</div>

<section className="sm:px-6 overflow-hidden min-h-[90vh] flex pt-32 pr-4 pb-24 pl-4 relative items-center justify-center">

<div className="md:p-16 lg:p-24 flex flex-col min-h-[600px] bg-white/30 w-full max-w-7xl border-[#e3a66a]/20 border rounded-sm mr-auto ml-auto pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm items-center justify-center">


<div className="absolute -top-[1px] -left-[1px] w-8 h-8 border-t-2 border-l-2 border-[#e3a66a]"></div>

<div className="absolute -top-[1px] -right-[1px] w-8 h-8 border-t-2 border-r-2 border-[#e3a66a]"></div>

<div className="absolute -bottom-[1px] -left-[1px] w-8 h-8 border-b-2 border-l-2 border-[#e3a66a]"></div>

<div className="absolute -bottom-[1px] -right-[1px] w-8 h-8 border-b-2 border-r-2 border-[#e3a66a]"></div>
<div className="z-10 text-center max-w-5xl mr-auto ml-auto relative">

<div className="flex flex-wrap gap-3 animate-fade-in opacity-0 mb-10 gap-x-3 gap-y-3 justify-center" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
<span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold text-stone-600 bg-stone-100/80 ring-1 ring-inset ring-stone-200/50 hover:bg-white hover:ring-[#e3a66a] transition-all cursor-default">Boutique Fitness Studios</span>
<span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold text-stone-600 bg-stone-100/80 ring-1 ring-inset ring-stone-200/50 hover:bg-white hover:ring-[#e3a66a] transition-all cursor-default">Retreats</span>
<span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold text-stone-600 bg-stone-100/80 ring-1 ring-inset ring-stone-200/50 hover:bg-white hover:ring-[#e3a66a] transition-all cursor-default">Unique Lodging</span>
<span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold text-stone-600 bg-stone-100/80 ring-1 ring-inset ring-stone-200/50 hover:bg-white hover:ring-[#e3a66a] transition-all cursor-default">Adventure Brands</span>
</div>

<div className="mb-10 animate-fade-in opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] cursor-default text-4xl font-semibold tracking-tight text-center w-full mx-auto" onmousemove="const rect = this.getBoundingClientRect(); this.style.setProperty('--x', (event.clientX - rect.left) + 'px'); this.style.setProperty('--y', (event.clientY - rect.top) + 'px');" style={{backgroundImage: 'radial-gradient(300px circle at var(--x, 50%) var(--y, 50%), #e3a66a 0%, #1a1a1a 60%)', backgroundClip: 'text', color: 'transparent', -X: '694.6484375px', -Y: '58px'}}>Stay present with your clients.</h1>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.1] interactive-text cursor-default mt-2 transition-all duration-300 hover:drop-shadow-[0_0_25px_rgba(227,166,106,0.6)]">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9a6435] via-[#e3a66a] to-[#9a6435]">We handle the feed.</span>
</h1>
</div>

<p className="md:text-xl text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in opacity-0 transition-all duration-300 hover:text-[#e3a66a] hover:drop-shadow-[0_0_15px_rgba(227,166,106,0.4)]" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                    We turn your real-life vibe into content systems that grab attention. One shoot, a full month of consistency, zero stress.
                </p>

<div className="flex flex-col sm:flex-row gap-5 animate-fade-in opacity-0 gap-x-5 gap-y-5 items-center justify-center" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
<a className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#e3a66a] to-[#d89555] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-200/50 transition-all duration-300 hover:scale-105 hover:shadow-orange-300 hover:shadow-xl w-full sm:w-auto overflow-hidden" href="#services">
<span className="z-10 relative">Start Your Content System</span>
<svg className="lucide lucide-arrow-right w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</a>
<a className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-brand-dark shadow-sm ring-1 ring-gray-200 hover:ring-[#e3a66a]/50 hover:scale-105 hover:shadow-md transition-all duration-300 w-full sm:w-auto" href="#work">
<span className="w-2 h-2 rounded-full bg-[#e3a66a]"></span>
                        See the Vibe
                    </a>
</div>
</div>

<div className="absolute top-1/4 -left-10 w-64 h-64 bg-orange-100 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>
<div className="absolute bottom-1/4 -right-10 w-64 h-64 bg-orange-50 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>
</div>
</section>

<section className="pt-10 pr-6 pb-20 pl-6">
<div className="mx-auto max-w-7xl">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group p-8 rounded-3xl bg-white border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-[#e3a66a] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-camera w-6 h-6" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Capture the Feeling</h3>
<p className="text-gray-600 leading-relaxed">Your feed should match the IRL experience. We capture the sweat, the silence, and the vibe without it feeling staged.</p>
</div>
<div className="group hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-white border-stone-100 border rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-[#e3a66a] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-calendar-check w-6 h-6" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Make Consistency Easy</h3>
<p className="text-gray-600 leading-relaxed">Stop scrambling for something to post. Our "one shoot = one month" system gives you your time back.</p>
</div>
<div className="group p-8 rounded-3xl bg-white border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-[#e3a66a] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-trending-up w-6 h-6" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Presence to Demand</h3>
<p className="text-gray-600 leading-relaxed">Turn casual scrollers into booked clients with content structured to convert, not just entertain.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#f8f6f4] pt-24 pr-6 pb-24 pl-6" id="work">
<div className="max-w-7xl mr-auto ml-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="">
<h2 className="md:text-4xl text-3xl font-semibold tracking-tight mb-4">Content you feel.</h2>
<p className="text-gray-600 max-w-lg">We don't chase trends. We capture the timeless quality of your experience.</p>
</div>
<a className="text-sm font-medium text-[#e3a66a] hover:text-black flex items-center gap-1 transition-colors" href="https://instagram.com" target="_blank">
                    See latest on Instagram <svg aria-hidden="true" className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
<div className="aspect-[9/16] bg-stone-200 rounded-2xl relative overflow-hidden group cursor-pointer">
<img alt="Pilates Studio" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:bg-black/20 transition-all bg-black/10 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
<p className="text-xs font-medium uppercase tracking-wider">Pilates</p>
</div>
</div>
<div className="aspect-[9/16] bg-stone-200 rounded-2xl relative overflow-hidden group cursor-pointer">
<img alt="Retreat Center" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&amp;w=2031&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:bg-black/20 transition-all bg-black/10 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
<p className="text-xs font-medium uppercase tracking-wider">Retreat</p>
</div>
</div>
<div className="aspect-[9/16] bg-stone-200 rounded-2xl relative overflow-hidden group cursor-pointer">
<img alt="Boutique Stay" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:bg-black/20 transition-all bg-black/10 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
<p className="text-xs font-medium uppercase tracking-wider">Hospitality</p>
</div>
</div>
<div className="aspect-[9/16] bg-stone-200 rounded-2xl relative overflow-hidden group cursor-pointer">
<img alt="Adventure Tour" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&amp;w=1994&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all"></div>
<div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
<p className="text-xs font-medium uppercase tracking-wider">Adventure</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-x-8 gap-y-8">
<div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
<p className="text-xs font-semibold text-[#e3a66a] uppercase tracking-wide mb-2">Yoga Studio Refresh</p>
<h4 className="text-lg font-semibold mb-2" style={{}}>From "random posting" to "Soulful Brand"</h4>
<p className="text-sm text-gray-600" style={{}}>Replaced inconsistent phone photos with a cohesive library. This increases brand trust and engagement over time.</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
<p className="uppercase text-xs font-semibold text-[#e3a66a] tracking-wide mb-2" style={{}}>Retreat Launch</p>
<h4 className="text-lg font-semibold mb-2" style={{}}>Sell out by showing the feeling</h4>
<p className="text-sm text-gray-600">1 month of content that sells the feeling people are searching for. Organic social posts pull in ideal clients and create warm leads while you sleep.</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
<p className="uppercase text-xs font-semibold text-[#e3a66a] tracking-wide mb-2">Adventure Tour</p>
<h4 className="text-lg font-semibold mb-2">Consistency without Burnout</h4>
<p className="text-sm text-gray-600">It's common for owners to post sporadically because they're focusing on clients. But with implementing one of our monthly systems, daily presence with consistent advertising is guaranteed. </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pr-6 pb-24 pl-6 relative" id="services">

<div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-50 blur-3xl rounded-full opacity-50 -z-10"></div>
<div className="max-w-7xl mr-auto ml-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Choose Your Path</h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">Whether you need a one-time visual reset or a monthly growth engine, we have a system for you.</p>
</div>

<div className="bg-white border border-stone-200 rounded-3xl p-8 lg:p-12 mb-16 shadow-lg shadow-stone-100 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-2 rounded-full border border-stone-100 shadow-sm text-xs font-bold uppercase tracking-widest text-[#e3a66a]">
                    Best for a Reset
                </div>
<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12 border-b border-stone-100 pb-8">
<div className="">
<h3 className="text-2xl font-bold tracking-tight mb-2">THE CONTENT REFRESH™</h3>
<p className="text-gray-600 max-w-xl">A complete presence reset in 30 days. One-time, done-with-you reset designed to elevate your brand, clarify your message, and give you a full month of content—without locking you into a long-term commitment.</p>
<p className="text-sm text-stone-500 mt-2 font-medium">Best for: Pilates, yoga, wellness studios, retreats, charters, and experience-based brands.</p>
</div>
<div className="text-right flex-shrink-0">
<div className="text-4xl font-bold tracking-tight">$2,500</div>
<span className="text-sm text-gray-500">one-time</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

<div className="space-y-3">
<div className="text-sm font-bold text-stone-900 uppercase tracking-wide border-b border-stone-100 pb-2 mb-2">Week 1 — Alignment</div>
<ul className="space-y-2 text-sm text-gray-600">
<li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#e3a66a] mt-1.5"></div> Brand alignment call</li>
<li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#e3a66a] mt-1.5"></div> Visual mood board</li>
<li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#e3a66a] mt-1.5"></div> Shot list + content plan</li>
<li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#e3a66a] mt-1.5"></div> Posting cadence plan</li>
</ul>
</div>

<div className="space-y-3">
<div className="text-sm font-bold text-stone-900 uppercase tracking-wide border-b border-stone-100 pb-2 mb-2">Week 2 — Capture</div>
<ul className="space-y-2 text-sm text-gray-600">
<li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#e3a66a] mt-1.5"></div> 1× 3-hour cinematic shoot</li>
<li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#e3a66a] mt-1.5"></div> Environment &amp; details</li>
<li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#e3a66a] mt-1.5"></div> Movement &amp; people</li>
<li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#e3a66a] mt-1.5"></div> Light on-camera guidance</li>
</ul>
</div>

<div className="space-y-3">
<div className="text-sm font-bold text-stone-900 uppercase tracking-wide border-b border-stone-100 pb-2 mb-2">Week 3 — Editing</div>
<ul className="space-y-2 text-sm text-gray-600">
<li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#e3a66a] mt-1.5"></div> 6–8 cinematic reels</li>
<li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#e3a66a] mt-1.5"></div> 20–30 edited photos</li>
<li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#e3a66a] mt-1.5"></div> Draft grid layout</li>
<li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#e3a66a] mt-1.5"></div> Captions &amp; hashtags</li>
</ul>
</div>

<div className="space-y-3">
<div className="text-sm font-bold text-stone-900 uppercase tracking-wide border-b border-stone-100 pb-2 mb-2">Week 4 — Delivery</div>
<ul className="space-y-2 text-sm text-gray-600">
<li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#e3a66a] mt-1.5"></div> Complete asset package</li>
<li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#e3a66a] mt-1.5"></div> Brand mini-kit (colors/tone)</li>
<li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#e3a66a] mt-1.5"></div> 30-day posting plan</li>
<li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#e3a66a] mt-1.5"></div> Simple CTAs included</li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 bg-stone-50 rounded-xl pt-6 pr-6 pb-6 pl-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="flex gap-4">
<svg className="lucide lucide-shield-check text-[#e3a66a] w-6 h-6 flex-shrink-0 mt-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
<div className="">
<p className="font-semibold text-sm mb-1">Our Zero-Pressure Guarantee</p>
<p className="text-xs text-gray-600">If a deliverable is late, we add a bonus asset. If it doesn’t feel aligned, we fix it or refund.</p>
</div>
</div>
<a className="whitespace-nowrap hover:bg-[#e3a66a] transition-colors text-sm font-semibold text-white bg-black rounded-lg pt-3 pr-6 pb-3 pl-6 shadow-md" href="https://form.typeform.com/to/isMbl1GV">
                        Book a Refresh
                    </a>
</div>
</div>
<div className="text-center mb-12">
<h3 className="text-2xl font-bold tracking-tight">MONTHLY RETAINERS</h3>
<p className="text-gray-500 mt-2">So your presence stays consistent—without stealing your focus.</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-20">

<div className="rounded-3xl p-8 bg-white border border-stone-200 shadow-sm hover:border-stone-300 transition-colors h-full flex flex-col hover:-translate-y-1 duration-300">
<div className="mb-6">
<h3 className="text-xl font-bold tracking-tight">Tier 1 — Presence</h3>
<p className="text-sm text-gray-500 mt-2">Keep us active and looking good.</p>
</div>
<div className="text-3xl font-bold tracking-tight mb-6">$1,500 <span className="text-base font-normal text-gray-500">/ mo</span></div>
<ul className="space-y-4 mb-8 text-sm text-gray-600 flex-1">
<li className="flex items-start gap-3"><iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon> <span>1× 3-hour content shoot</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-lg" icon="solar:clapperboard-play-linear"></iconify-icon> <span>4–6 reels</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-lg" icon="solar:pen-new-square-linear"></iconify-icon> <span>Basic captions</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-lg" icon="solar:calendar-linear"></iconify-icon> <span>Posting handled</span></li>
</ul>
<a className="flex items-center justify-center hover:bg-stone-200 transition-colors text-sm font-semibold text-stone-900 bg-stone-100 w-full rounded-lg pt-3 pr-4 pb-3 pl-4" href="https://form.typeform.com/to/isMbl1GV">
                        Inquire Tier 1
                    </a>
</div>

<div className="rounded-3xl p-8 bg-[#1c1917] text-white shadow-xl relative scale-105 z-10 h-full flex flex-col hover:-translate-y-1 duration-300">
<div className="absolute top-0 right-0 -mt-3 -mr-3 bg-[#e3a66a] text-xs font-bold px-3 py-1 rounded-full text-white uppercase tracking-wider">
                        Most Popular
                    </div>
<div className="mb-6">
<h3 className="text-xl font-bold tracking-tight text-white">Tier 2 — Growth</h3>
<p className="text-sm text-gray-400 mt-2">Content, messaging, and momentum.</p>
</div>
<div className="text-3xl font-bold tracking-tight mb-6 text-white">$3,000 <span className="text-base font-normal text-gray-400">/ mo</span></div>
<ul className="space-y-4 mb-8 text-sm text-gray-300 flex-1">
<li className="flex items-start gap-3 text-white"><iconify-icon className="text-lg text-[#e3a66a]" icon="solar:camera-minimalistic-linear"></iconify-icon> <span className="">3-hour content shoot</span></li>
<li className="flex items-start gap-3 text-white"><iconify-icon className="text-lg text-[#e3a66a]" icon="solar:map-point-wave-linear"></iconify-icon> <span className="">Multi-location coverage</span></li>
<li className="flex items-start gap-3 text-white"><iconify-icon className="text-lg text-[#e3a66a]" icon="solar:clapperboard-play-linear"></iconify-icon> <span className="">8–12 reels</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-lg" icon="solar:pen-new-square-linear"></iconify-icon> <span className="">Intentional captions + Hashtags</span></li>

</ul>
<a className="flex items-center justify-center hover:bg-white hover:text-black transition-all text-sm font-semibold text-white bg-[#e3a66a] w-full rounded-lg pt-3 pr-4 pb-3 pl-4" href="https://form.typeform.com/to/isMbl1GV">
                        Apply for Tier 2
                    </a>
<p className="text-center text-xs text-gray-500 mt-4">Limited to 4 active clients.</p>
</div>

<div className="rounded-3xl p-8 bg-white border border-stone-200 shadow-sm hover:border-stone-300 transition-colors h-full flex flex-col hover:-translate-y-1 duration-300">
<div className="mb-6">
<h3 className="text-xl font-bold tracking-tight">Tier 3 — System</h3>
<p className="text-sm text-gray-500 mt-2">Take social media completely off your plate.</p>
</div>
<div className="text-3xl font-bold tracking-tight mb-6">$4,000 <span className="text-base font-normal text-gray-500">/ mo</span></div>
<ul className="space-y-4 mb-8 text-sm text-gray-600 flex-1">
<li className="font-semibold text-black">Everything in Tier 2, plus:</li>
<li className="flex items-start gap-3"><iconify-icon className="text-lg" icon="solar:calendar-date-linear"></iconify-icon> <span>Posting &amp; scheduling (IG + FB)</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon> <span>Light account management</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-lg" icon="solar:history-linear"></iconify-icon> <span>Weekly stories</span></li>
</ul>
<a className="flex items-center justify-center hover:bg-stone-200 transition-colors text-sm font-semibold text-stone-900 bg-stone-100 w-full rounded-lg pt-3 pr-4 pb-3 pl-4" href="https://form.typeform.com/to/isMbl1GV">
                        Inquire Tier 3
                    </a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-stone-50 rounded-2xl p-8 border border-stone-100">
<h4 className="text-lg font-bold mb-4 flex items-center gap-2">
<iconify-icon className="text-[#e3a66a]" icon="solar:layers-minimalistic-linear"></iconify-icon>
                        Additional Volume
                    </h4>
<p className="text-sm text-gray-500 mb-6">Tiers define the relationship. Add-ons adjust volume. Add-ons must fit within existing shoot scope.</p>
<div className="space-y-3">
<div className="flex justify-between items-center bg-white p-3 rounded-lg border border-stone-100">
<span className="text-sm font-medium">+2 Reels</span>
<span className="text-sm font-bold">$400</span>
</div>
<div className="flex justify-between items-center bg-white p-3 rounded-lg border border-stone-100">
<span className="text-sm font-medium">+4 Reels</span>
<span className="text-sm font-bold">$700</span>
</div>
<div className="flex justify-between items-center bg-white p-3 rounded-lg border border-stone-100">
<span className="text-sm font-medium">+8 Reels</span>
<span className="text-sm font-bold">$1,200</span>
</div>
</div>
</div>

<div className="bg-stone-50 border-stone-100 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<h4 className="text-lg font-bold mb-4 flex items-center gap-2">
<iconify-icon className="text-[#e3a66a]" icon="solar:plane-linear"></iconify-icon>
                        Retreat &amp; Event Coverage
                    </h4>
<p className="text-sm text-gray-500 mb-6">Preferred pricing for ongoing clients. Standard pricing for one-off events.</p>
<div className="grid grid-cols-2 gap-6">
<div className="">
<p className="text-xs font-semibold uppercase text-gray-400 mb-2">Standard Pricing</p>
<ul className="text-sm space-y-2">
<li className="flex justify-between"><span className="text-gray-600">1-Day</span> <span className="font-bold">$2,500</span></li>
<li className="flex justify-between"><span className="text-gray-600">2-Day</span> <span className="font-bold">$4,500</span></li>
<li className="flex justify-between"><span className="text-gray-600">3-Day</span> <span className="font-bold">$6,000</span></li>
</ul>
</div>
<div className="border-l border-stone-200 pl-6">
<p className="text-xs font-semibold uppercase text-[#e3a66a] mb-2">Client Pricing</p>
<ul className="text-sm space-y-2">
<li className="flex justify-between"><span className="text-gray-600">Tier 1</span> <span className="font-bold text-green-700">15% off</span></li>
<li className="flex justify-between"><span className="text-gray-600">Tier 2</span> <span className="font-bold text-green-700">25% off</span></li>
<li className="flex justify-between"><span className="text-gray-600">Tier 3</span> <span className="font-bold text-green-700">40% off</span></li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="border-y bg-[#fcfaf8] border-stone-100 pt-24 pr-6 pb-24 pl-6" id="about">

<div className="mx-auto max-w-7xl mb-32">
<div className="text-center mb-16">
<div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#e3a66a]/10 text-[#e3a66a] text-xs font-semibold uppercase tracking-wider mb-6">Our Team</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-stone-900 mb-6">Meet the team behind your success.</h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Creators, strategists, and storytellers. We're a tight-knit group dedicated to capturing your brand's essence without disrupting the experience.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative flex flex-col items-center text-center">
<div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-stone-200 mb-6 shadow-sm group-hover:shadow-2xl group-hover:shadow-[#e3a66a]/10 transition-all duration-500 transform group-hover:-translate-y-2">
<img alt="Sofia Little" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<div className="flex items-center justify-center gap-3 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">

<a className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#e3a66a] hover:border-[#e3a66a] hover:scale-110 transition-all duration-300" href="#">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect className="" height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>

<a className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#e3a66a] hover:border-[#e3a66a] hover:scale-110 transition-all duration-300 delay-75" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>

<a className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#e3a66a] hover:border-[#e3a66a] hover:scale-110 transition-all duration-300 delay-150" href="#">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect className="" height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path></svg>
</a>
</div>
<div className="mt-6 border-t border-white/20 pt-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100 ease-out">
<p className="leading-relaxed text-sm font-medium text-[#e3a66a]/90"></p>
</div>
</div>
</div>
<h3 className="text-xl font-semibold text-stone-900 tracking-tight">Tehah Silfvenius</h3>
<p className="uppercase text-xs font-semibold text-[#e3a66a] tracking-wider mt-2">Camera Specialist + Aesthetic Curator</p>
</div>

<div className="group relative flex flex-col items-center text-center">
<div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-stone-200 mb-6 shadow-sm group-hover:shadow-2xl group-hover:shadow-[#e3a66a]/10 transition-all duration-500 transform group-hover:-translate-y-2">
<img alt="James Cohen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex flex-col bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end">
<div className="flex items-center justify-center gap-3 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
<a className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#e3a66a] hover:border-[#e3a66a] hover:scale-110 transition-all duration-300" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#e3a66a] hover:border-[#e3a66a] hover:scale-110 transition-all duration-300 delay-75" href="#">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path></svg>
</a>
</div>
<div className="group-hover:translate-y-0 transition-transform duration-500 delay-100 ease-out border-white/20 border-t mt-6 pt-4 translate-y-8">
<p className="leading-relaxed text-sm font-medium text-white/90"></p>
</div>
</div>
</div>
<h3 className="text-xl font-semibold text-stone-900 tracking-tight">David Colvin III</h3>
<p className="uppercase text-xs font-semibold text-[#e3a66a] tracking-wider mt-2">Owner | Lead Editor + Growth specialist </p>
</div>

<div className="group relative flex flex-col items-center text-center">
<div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-stone-200 mb-6 shadow-sm group-hover:shadow-2xl group-hover:shadow-[#e3a66a]/10 transition-all duration-500 transform group-hover:-translate-y-2">
<img alt="Maya Rodriguez" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<div className="flex items-center justify-center gap-3 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
<a className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#e3a66a] hover:border-[#e3a66a] hover:scale-110 transition-all duration-300" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#e3a66a] hover:border-[#e3a66a] hover:scale-110 transition-all duration-300 delay-75" href="#">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
<div className="mt-6 border-t border-white/20 pt-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100 ease-out">
<p className="leading-relaxed text-sm font-medium text-white/90"></p>
</div>
</div>
</div>
<h3 className="text-xl font-semibold text-stone-900 tracking-tight">Erik Nguyen</h3>
<p className="uppercase text-xs font-semibold text-[#e3a66a] tracking-wider mt-2">Lighting + Videography Specialist</p>
</div>
</div>
</div>

<div className="mx-auto max-w-4xl text-center">
<h2 className="text-sm font-semibold text-[#e3a66a] uppercase tracking-wider mb-4">Our Philosophy</h2>
<h3 className="md:text-4xl text-3xl font-semibold tracking-tight mb-8">
            Content shouldn't cost you the moment.
        </h3>
<div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
<p className="mb-6" style={{}}>We built Slomo Media for business owners who love what they do but hate the "content treadmill." You started your studio, retreat, or brand to create experiences, not to be a full-time influencer.</p>
<p className="">
                We believe your digital presence should be a quiet, powerful reflection of your real-world quality. 
                Calm, consistent, and cinematic. We capture the magic so you can stay present in it.
            </p>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#fcfaf8] pt-24 pr-6 pb-24 pl-6 relative" id="contact">
<div className="mx-auto max-w-5xl relative z-10">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold tracking-tight mb-4 text-stone-900">Get in Touch</h2>
<p className="text-lg text-gray-600 max-w-2xl mr-auto ml-auto">Ready to elevate your brand? Reach out through any of these channels and we'll get back to you within 24 hours.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-6 gap-y-6">

<div className="relative overflow-hidden p-8 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md hover:border-[#e3a66a]/30 transition-all duration-300 group">
<div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
<div className="absolute inset-0 bg-gradient-to-r from-stone-50/50 to-stone-100/50 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-50">
<svg aria-hidden="true" className="absolute inset-0 h-full w-full fill-stone-50 stroke-stone-200 mix-blend-multiply">
<defs>
<pattern height="20" id="pattern-1" patternunits="userSpaceOnUse" width="20" x="-12" y="4">
<path d="M.5 20V.5H20" fill="none"></path>
</pattern>
</defs>
<rect fill="url(#pattern-1)" height="100%" strokewidth="0" width="100%"></rect>
</svg>
</div>
</div>
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-[#e3a66a] mb-6 relative z-10 ring-1 ring-[#e3a66a]/20">
<svg className="lucide lucide-mail" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path></svg>
</div>
<h3 className="text-lg font-semibold text-stone-900 relative z-10">Email Us</h3>
<p className="text-gray-500 relative z-10 mt-2 text-sm">Send us a note about your project.</p>
<a className="relative z-10 mt-6 inline-flex items-center text-sm font-medium text-stone-900 hover:text-[#e3a66a] transition-colors" href="mailto:hello@slomomedia.com">
                    hello@slomomedia.com
                    <svg className="lucide lucide-arrow-right ml-2 w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="relative overflow-hidden p-8 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md hover:border-[#e3a66a]/30 transition-all duration-300 group">
<div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
<div className="absolute inset-0 bg-gradient-to-r from-stone-50/50 to-stone-100/50 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-50">
<svg aria-hidden="true" className="absolute inset-0 h-full w-full fill-stone-50 stroke-stone-200 mix-blend-multiply">
<defs>
<pattern height="20" id="pattern-2" patternunits="userSpaceOnUse" width="20" x="-12" y="4">
<path d="M.5 20V.5H20" fill="none"></path>
</pattern>
</defs>
<rect fill="url(#pattern-2)" height="100%" strokewidth="0" width="100%"></rect>
</svg>
</div>
</div>
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-[#e3a66a] mb-6 relative z-10 ring-1 ring-[#e3a66a]/20">
<svg className="lucide lucide-calendar-check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line><path d="m9 16 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-semibold text-stone-900 relative z-10">Book a Call</h3>
<p className="text-gray-500 relative z-10 mt-2 text-sm">Schedule a free 20-minute alignment call.</p>
<a className="relative z-10 mt-6 inline-flex items-center text-sm font-medium text-stone-900 hover:text-[#e3a66a] transition-colors" href="#book">
                    View Calendar
                    <svg className="lucide lucide-arrow-right ml-2 w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>


<div className="overflow-hidden hover:shadow-md hover:border-[#e3a66a]/30 transition-all duration-300 group md:col-span-2 bg-white border-stone-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm">
<style className="">
        .social-dock-item span {
            background-color: #e3a66a;
            opacity: 0;
            position: absolute;
            border-radius: 0.75rem;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            height: 100%;
            width: 100%;
            left: 0;
            top: 0;
            pointer-events: none;
            z-index: 0;
        }
        .social-dock-item:hover span { opacity: 1; }
        .social-dock-item:hover span:nth-child(1) { opacity: 0.15; transform: translate(5px, -5px); }
        .social-dock-item:hover span:nth-child(2) { opacity: 0.3; transform: translate(10px, -10px); }
        .social-dock-item:hover span:nth-child(3) { opacity: 0.45; transform: translate(15px, -15px); }
        
        .social-dock-item .icon-wrapper {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            z-index: 10;
        }
        .social-dock-item:hover .icon-wrapper { 
            transform: translate(20px, -20px); 
            box-shadow: -10px 10px 20px rgba(227, 166, 106, 0.25);
            background-color: #e3a66a;
        }
        .social-dock-item:hover .icon-wrapper svg {
            fill: white;
            transform: scale(1.1);
        }
        
        .social-dock-item .tooltip {
            opacity: 0;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            pointer-events: none;
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%) translateY(10px) skew(-5deg);
            white-space: nowrap;
        }
        .social-dock-item:hover .tooltip {
            opacity: 1;
            transform: translateX(-30%) translateY(-35px) skew(-5deg);
        }
    </style>

<div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
<div className="absolute inset-0 bg-gradient-to-r from-stone-50/50 to-stone-100/50 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-50">
<svg aria-hidden="true" className="absolute inset-0 h-full w-full fill-stone-50 stroke-stone-200 mix-blend-multiply">
<defs>
<pattern height="20" id="pattern-dock" patternunits="userSpaceOnUse" width="20" x="-12" y="4">
<path d="M.5 20V.5H20" fill="none"></path>
</pattern>
</defs>
<rect fill="url(#pattern-dock)" height="100%" strokewidth="0" width="100%"></rect>
</svg>
</div>
</div>

<div className="z-10 flex flex-col md:flex-row gap-8 h-full pr-2 pl-2 relative gap-x-8 gap-y-8 items-center justify-between">

<div className="flex flex-col items-center md:items-start text-center md:text-left">
<div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-[#e3a66a] mb-4 ring-1 ring-[#e3a66a]/20">
<svg className="lucide lucide-share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-stone-900 mb-2">Connect Online</h3>
<p className="text-sm text-gray-500 max-w-md">Join our community for daily inspiration, behind-the-scenes content, and exclusive updates.</p>
</div>

<div className="flex gap-5 md:gap-8 md:pt-0 md:pr-8 pt-6 pb-4 gap-x-5 gap-y-5 items-center">

<a className="social-dock-item relative w-[60px] h-[60px] flex items-center justify-center cursor-pointer group/item" href="https://instagram.com/slomo_media" target="_blank">
<span className=""></span><span className=""></span><span></span>
<div className="icon-wrapper flex bg-stone-900 w-full h-full border-white/10 border rounded-2xl shadow-sm items-center justify-center cursor-pointer" onclick="window.location.href='https://www.instagram.com/slomo_media/'" role="button">
<svg className="fill-white transition-all duration-300 w-[26px] h-[26px]" data-icon-replaced="true" height="26" strokeWidth="2" style={{width: '26px', height: '26px', color: 'rgb(26, 26, 26)'}} viewbox="0 0 448 512" width="26" xmlns="http://www.w3.org/2000/svg"><path className="" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
</div>
<div className="tooltip bg-stone-900 text-white text-xs font-semibold py-1.5 px-3 rounded-md shadow-xl border border-stone-800">Instagram</div>
</a>

<a className="social-dock-item flex items-center justify-center cursor-pointer group/item w-[60px] h-[60px] relative" href="https://www.facebook.com/profile.php?id=61585371433245">
<span className=""></span><span className=""></span><span></span>
<div className="icon-wrapper w-full h-full bg-stone-900 rounded-2xl flex items-center justify-center shadow-sm border border-white/10">
<svg className="fill-white transition-all duration-300" height="26" viewbox="0 0 448 512" width="26" xmlns="http://www.w3.org/2000/svg"><path className="" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg>
</div>
<div className="tooltip bg-stone-900 text-white text-xs font-semibold py-1.5 px-3 rounded-md shadow-xl border border-stone-800">Facebook</div>
</a>

<a className="social-dock-item relative w-[60px] h-[60px] flex items-center justify-center cursor-pointer group/item" href="#">
<span></span><span></span><span></span>
<div className="icon-wrapper w-full h-full bg-stone-900 rounded-2xl flex items-center justify-center shadow-sm border border-white/10">
<svg className="fill-white transition-all duration-300" height="26" viewbox="0 0 448 512" width="26" xmlns="http://www.w3.org/2000/svg"><path className="" d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7a53.79 53.79 0 1 1 0-107.58 53.79 53.79 0 0 1 0 107.58zM447.8 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.7 31.3-2.3 5.6-2.8 13.3-2.8 21.1V448h-92.5s1.2-266.9 0-294.1h92.5v41.7c12.3-19 34.3-46 83.5-46 60.9 0 106.6 39.8 106.6 125.3V448z"></path></svg>
</div>
<div className="tooltip bg-stone-900 text-white text-xs font-semibold py-1.5 px-3 rounded-md shadow-xl border border-stone-800">LinkedIn</div>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-stone-200 border-t pt-12 pr-6 pb-12 pl-6">
<div className="flex flex-col md:flex-row max-w-7xl mr-auto ml-auto gap-x-8 gap-y-8 items-center justify-between">
<div className="text-center md:text-left">
<a className="text-xl font-bold tracking-tight flex items-center justify-center md:justify-start gap-2 mb-2" href="#">
<div className="w-6 h-6 rounded-full bg-[#e3a66a] flex items-center justify-center text-white">
<svg aria-hidden="true" className="lucide lucide-aperture w-3 h-3" data-lucide="aperture" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
</div>
<span className="">Slomo Media</span>
</a>
<p className="text-sm text-gray-500">© 2024 Slomo Media. All rights reserved.</p>
</div>
<div className="flex gap-8 text-sm font-medium text-gray-600">
<a className="hover:text-black" href="#work">Work</a>
<a className="hover:text-black" href="#services">Services</a>
<a className="hover:text-[#e3a66a]" href="https://www.instagram.com/slomo_media/">Instagram</a>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 font-sans" id="slomo-chat-container">

<div className="hidden w-[90vw] md:w-[380px] h-[500px] bg-white rounded-2xl shadow-chat border border-stone-200 flex flex-col transition-all duration-300 origin-bottom-right transform scale-95 opacity-0" id="chat-window">

<div className="bg-black text-white p-4 rounded-t-2xl flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-8 h-8 rounded-full bg-[#e3a66a] flex items-center justify-center text-white">
<svg aria-hidden="true" className="lucide lucide-sparkles" data-lucide="sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-black"></span>
</div>
<div>
<h3 className="text-sm font-bold">Slomo Assistant</h3>
<p className="text-xs text-stone-400">Ask me anything about our services</p>
</div>
</div>
<button className="p-1 hover:bg-stone-800 rounded-full transition-colors" id="close-chat">
<svg aria-hidden="true" className="lucide lucide-x" data-lucide="x" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-4 chat-scroll bg-stone-50" id="chat-messages">

<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-[#e3a66a] flex-shrink-0 flex items-center justify-center text-white mt-1">
<svg aria-hidden="true" className="lucide lucide-bot" data-lucide="bot" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="bg-white p-3 rounded-2xl rounded-tl-none border border-stone-100 shadow-sm text-sm text-gray-600 max-w-[85%]">
<p>Hi there! 👋 I'm the Slomo AI assistant.</p>
<p className="mt-2">I can help answer questions about our new pricing tiers, the Content Refresh, or retreat coverage. What's on your mind?</p>
</div>
</div>

<div className="flex flex-wrap gap-2 ml-11">
<button className="chat-prompt-btn text-xs bg-white border border-stone-200 px-3 py-1.5 rounded-full hover:bg-stone-100 hover:border-[#e3a66a] transition-colors text-gray-600">What's the Refresh?</button>
<button className="chat-prompt-btn text-xs bg-white border border-stone-200 px-3 py-1.5 rounded-full hover:bg-stone-100 hover:border-[#e3a66a] transition-colors text-gray-600">Retainer pricing?</button>
</div>
</div>

<form className="p-3 bg-white border-t border-stone-100 rounded-b-2xl" id="chat-form">
<div className="flex gap-2">
<input autocomplete="off" className="flex-1 bg-stone-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-[#e3a66a] focus:bg-white transition-all outline-none" id="chat-input" placeholder="Type your question..." type="text"/>
<button className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#e3a66a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed" type="submit">
<svg aria-hidden="true" className="lucide lucide-send" data-lucide="send" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</div>
</form>
</div>

<button className="w-14 h-14 rounded-full bg-[#e3a66a] text-white shadow-lg shadow-orange-200 hover:scale-110 hover:bg-black transition-all duration-300 flex items-center justify-center group relative z-50" id="chat-toggle">
<svg aria-hidden="true" className="lucide lucide-message-circle animate-bounce-slow" data-lucide="message-circle" fill="none" height="28" id="icon-open" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<svg aria-hidden="true" className="lucide lucide-chevron-down hidden" data-lucide="chevron-down" fill="none" height="28" id="icon-close" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>



    </>
  );
}
