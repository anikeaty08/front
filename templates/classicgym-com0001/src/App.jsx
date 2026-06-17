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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        // Dialog Backdrop Click Handler
        const modal = document.getElementById('trial_modal');
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.close();
            }
        });

        /* --- STATE MANAGEMENT --- */
        const state = {
            capacity: [
                { time: "06:00 AM", activity: "Cardio Blast", booked: 28, max: 30 },
                { time: "07:00 AM", activity: "Power Yoga", booked: 12, max: 20 },
                { time: "09:00 AM", activity: "CrossFit", booked: 15, max: 15 },
                { time: "05:00 PM", activity: "Box & Burn", booked: 18, max: 25 },
                { time: "06:00 PM", activity: "HIIT Circuit", booked: 22, max: 30 },
                { time: "07:00 PM", activity: "Powerlifting", booked: 8, max: 12 },
                { time: "08:00 PM", activity: "Recovery", booked: 5, max: 10 },
                { time: "09:00 PM", activity: "Open Gym", booked: 40, max: 100 }
            ],
            chatHistory: [
                { sender: 'bot', text: "Hello! I'm the gym's AI assistant. Ask me about membership, hours, or equipment." }
            ],
            aiEnabled: true
        };

        /* --- 3D INTERACTION LOGIC --- */
        
        function handleHeroMove(e) {
            const grid = document.getElementById('hero-grid');
            const content = document.getElementById('hero-content');
            const glow = document.getElementById('hero-glow');
            
            if(!grid || !content || !glow) return;

            // Smooth Glow
            glow.style.opacity = '1';
            glow.style.transform = `translate(${e.clientX - window.innerWidth/2}px, ${e.clientY - window.innerHeight/2}px)`;
            glow.style.background = `radial-gradient(600px circle at center, rgba(255,255,255,0.06), transparent 40%)`;

            // Parallax
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;

            grid.style.transform = `perspective(1000px) rotateX(20deg) translateX(${x}px) translateY(${y}px)`;
            content.style.transform = `translateX(${x * 0.3}px) translateY(${y * 0.3}px)`;
        }

        function tiltCard(e, card) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -8; 
            const rotateY = ((x - centerX) / centerX) * 8;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        }

        function resetTilt(card) {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        }

        /* --- APP LOGIC --- */
        function renderBookingGrid() {
            const grid = document.getElementById('booking-grid');
            const adminTable = document.getElementById('admin-capacity-table');
            
            if(!grid) return;

            grid.innerHTML = '';
            if(adminTable) adminTable.innerHTML = '';

            state.capacity.forEach((slot, index) => {
                const isFull = slot.booked >= slot.max;
                const percent = (slot.booked / slot.max) * 100;
                
                // Client Card
                const card = document.createElement('div');
                card.className = `tilt-card group p-6 rounded-2xl border ${isFull ? 'border-red-900/30 bg-red-900/10' : 'border-white/10 bg-neutral-900'} relative overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]`;
                
                card.onmousemove = (e) => tiltCard(e, card);
                card.onmouseleave = () => resetTilt(card);

                card.innerHTML = `
                    <div class="tilt-content">
                        <div class="flex justify-between items-start mb-4">
                            <span class="text-base font-medium text-white tracking-tight">${slot.time}</span>
                            ${isFull 
                                ? '<span class="text-[10px] bg-red-500/10 text-red-400 px-2 py-0.5 rounded border border-red-500/20 font-medium tracking-wide uppercase">Full</span>' 
                                : '<span class="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-medium tracking-wide uppercase">Open</span>'}
                        </div>
                        <div class="text-sm text-neutral-400 mb-6 flex items-center gap-2 font-light">
                             <iconify-icon icon="solar:dumbbell-small-linear" class="text-white"></iconify-icon>
                             ${slot.activity}
                        </div>
                        <div class="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-4">
                            <div class="h-full ${isFull ? 'bg-red-500' : 'bg-white'} transition-all duration-500" style="width: ${percent}%"></div>
                        </div>
                        <button onclick="bookSlot(${index})" ${isFull ? 'disabled' : ''} class="w-full text-xs font-medium py-2.5 rounded-lg border border-white/10 ${isFull ? 'opacity-50 cursor-not-allowed text-neutral-500' : 'text-white hover:bg-white hover:text-black transition-colors spring-active'}">
                            ${isFull ? 'Join Waitlist' : 'Book Session'}
                        </button>
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                `;
                grid.appendChild(card);

                // Admin Row
                if(adminTable) {
                    const row = document.createElement('tr');
                    row.className = "hover:bg-white/5 transition";
                    row.innerHTML = `
                        <td class="px-6 py-4 text-white font-medium">${slot.time}</td>
                        <td class="px-6 py-4">${slot.activity}</td>
                        <td class="px-6 py-4">${slot.booked}</td>
                        <td class="px-6 py-4">
                            <input type="number" value="${slot.max}" onchange="updateMaxCapacity(${index}, this.value)" class="w-16 bg-black border border-white/10 rounded px-2 py-1 text-xs text-white focus:border-indigo-500 outline-none">
                        </td>
                        <td class="px-6 py-4 text-${isFull ? 'red' : 'emerald'}-400 font-medium text-xs uppercase">${isFull ? 'Full' : 'Open'}</td>
                    `;
                    adminTable.appendChild(row);
                }
            });
        }

        function bookSlot(index) {
            if (state.capacity[index].booked < state.capacity[index].max) {
                state.capacity[index].booked++;
                renderBookingGrid();
                showToast("Booking Confirmed", `Spot reserved for ${state.capacity[index].activity}`);
            }
        }

        function addToCart(itemName) {
            showToast("Added to Cart", `${itemName} has been added.`);
        }

        function updateMaxCapacity(index, val) {
            state.capacity[index].max = parseInt(val);
            renderBookingGrid();
        }

        function handleRegistration(e) {
            e.preventDefault();
            const name = document.getElementById('reg-name').value;
            document.getElementById('trial_modal').close();
            
            showToast("Welcome to Empire", `${name} joined via WhatsApp Bridge`);

            setTimeout(() => {
                window.open(`https://wa.me/?text=I%20just%20registered%20as%20${encodeURIComponent(name)}`, '_blank');
            }, 600);
        }

        function toggleChat() {
            const widget = document.getElementById('chat-widget');
            const isHidden = widget.classList.contains('hidden');
            
            if (isHidden) {
                widget.classList.remove('hidden');
                requestAnimationFrame(() => {
                    widget.classList.remove('scale-95', 'opacity-0');
                    widget.classList.add('scale-100', 'opacity-100');
                });
            } else {
                widget.classList.remove('scale-100', 'opacity-100');
                widget.classList.add('scale-95', 'opacity-0');
                setTimeout(() => widget.classList.add('hidden'), 300);
            }
        }

        function handleClientChat(e) {
            e.preventDefault();
            const input = document.getElementById('client-chat-input');
            const text = input.value.trim();
            if (!text) return;

            addMessageToFeeds('user', text);
            input.value = '';

            if (state.aiEnabled) {
                setTimeout(() => {
                    const response = generateAIResponse(text);
                    addMessageToFeeds('bot', response);
                }, 1000);
            }
        }

        function adminSendMessage() {
            const input = document.getElementById('admin-chat-input');
            const text = input.value.trim();
            if (!text) return;

            if (state.aiEnabled) toggleAI();
            addMessageToFeeds('admin', text);
            input.value = '';
        }

        function addMessageToFeeds(sender, text) {
            state.chatHistory.push({ sender, text });
            
            const clientFeed = document.getElementById('client-chat-feed');
            const clientBubble = document.createElement('div');
            clientBubble.className = `flex flex-col ${sender === 'user' ? 'items-end' : 'items-start'} gap-1 animate-fade-in-up`;
            clientBubble.innerHTML = `
                <div class="${sender === 'user' ? 'bg-white text-black rounded-tr-none' : 'bg-white/10 text-neutral-200 rounded-tl-none border border-white/5'} text-xs px-3.5 py-2.5 rounded-2xl max-w-[85%] shadow-sm">
                    ${text}
                </div>
            `;
            clientFeed.appendChild(clientBubble);
            clientFeed.scrollTop = clientFeed.scrollHeight;

            const mirrorFeed = document.getElementById('mirror-chat-feed');
            if(mirrorFeed) {
                const mirrorBubble = document.createElement('div');
                mirrorBubble.className = `flex flex-col ${sender === 'admin' ? 'items-end' : 'items-start'} gap-1 animate-fade-in-up`;
                
                let bubbleColor = 'bg-white/10 text-neutral-300';
                if (sender === 'bot') bubbleColor = 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20';
                if (sender === 'admin') bubbleColor = 'bg-white text-black';

                mirrorBubble.innerHTML = `
                    <div class="flex items-center gap-2 mb-1">
                        <span class="text-[10px] uppercase font-bold text-neutral-500 tracking-wider">${sender}</span>
                    </div>
                    <div class="${bubbleColor} text-xs px-3.5 py-2.5 rounded-lg max-w-[80%]">
                        ${text}
                    </div>
                `;
                mirrorFeed.appendChild(mirrorBubble);
                mirrorFeed.scrollTop = mirrorFeed.scrollHeight;
            }
        }

        function generateAIResponse(query) {
            const q = query.toLowerCase();
            if (q.includes('price') || q.includes('cost')) return "We have plans starting at ₹2,999/mo. Check the Membership section.";
            if (q.includes('time') || q.includes('open')) return "We are open Mon-Fri 5AM-11PM and weekends 6AM-10PM.";
            return "I can help with schedules, pricing, or trainers. Would you like to speak to a human staff member?";
        }

        function toggleAI() {
            state.aiEnabled = !state.aiEnabled;
            const btn = document.getElementById('ai-toggle-btn').querySelector('div');
            const indicator = document.getElementById('ai-active-indicator');
            const input = document.getElementById('admin-chat-input');
            
            if (state.aiEnabled) {
                btn.classList.remove('translate-x-full');
                document.getElementById('ai-toggle-btn').classList.remove('bg-neutral-600');
                document.getElementById('ai-toggle-btn').classList.add('bg-emerald-500');
                indicator.style.display = 'flex';
                input.placeholder = "Disable AI to type...";
            } else {
                btn.classList.add('translate-x-full');
                document.getElementById('ai-toggle-btn').classList.add('bg-neutral-600');
                document.getElementById('ai-toggle-btn').classList.remove('bg-emerald-500');
                indicator.style.display = 'none';
                input.placeholder = "Type to reply manually...";
                input.disabled = false;
                input.focus();
            }
        }

        function toggleAdminView() {
            const client = document.getElementById('client-view');
            const admin = document.getElementById('admin-view');
            
            if (admin.classList.contains('hidden')) {
                admin.classList.remove('hidden');
                admin.classList.add('flex');
                client.style.opacity = '0';
                renderBookingGrid();
                const mirrorFeed = document.getElementById('mirror-chat-feed');
                mirrorFeed.innerHTML = ''; 
                state.chatHistory.forEach(msg => {
                   const bubble = document.createElement('div');
                   bubble.className = `flex flex-col ${msg.sender === 'admin' ? 'items-end' : 'items-start'} gap-1`;
                   let color = msg.sender === 'user' ? 'bg-white/10 text-neutral-300' : (msg.sender === 'bot' ? 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20' : 'bg-white text-black');
                   bubble.innerHTML = `<div class="${color} text-xs px-3.5 py-2.5 rounded-lg max-w-[80%]">${msg.text}</div>`;
                   mirrorFeed.appendChild(bubble);
                });
            } else {
                admin.classList.add('hidden');
                admin.classList.remove('flex');
                client.style.opacity = '1';
            }
        }

        function switchAdminTab(tab) {
            ['overview', 'members', 'chat'].forEach(t => {
                document.getElementById(`view-${t}`).classList.add('hidden');
                document.getElementById(`tab-${t}`).classList.remove('bg-white/10', 'text-white');
                document.getElementById(`tab-${t}`).classList.add('text-neutral-400');
            });
            document.getElementById(`view-${tab}`).classList.remove('hidden');
            if(tab === 'chat') document.getElementById(`view-${tab}`).classList.add('flex');
            document.getElementById(`tab-${tab}`).classList.add('bg-white/10', 'text-white');
            document.getElementById(`tab-${tab}`).classList.remove('text-neutral-400');
        }

        function showToast(title, message) {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            toast.className = "bg-neutral-900/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl flex items-start gap-3 w-80 transform translate-x-full transition-transform duration-500 pointer-events-auto z-50";
            toast.innerHTML = `
                <div class="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-white border border-white/5">
                    <iconify-icon icon="solar:bell-linear" width="16"></iconify-icon>
                </div>
                <div>
                    <h4 class="text-sm font-medium text-white tracking-tight">${title}</h4>
                    <p class="text-xs text-neutral-400 mt-1 font-light">${message}</p>
                </div>
            `;
            container.appendChild(toast);
            requestAnimationFrame(() => toast.classList.remove('translate-x-full'));
            setTimeout(() => {
                toast.classList.add('translate-x-full', 'opacity-0');
                setTimeout(() => toast.remove(), 500);
            }, 4000);
        }

        // Init
        renderBookingGrid();
    
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
      

<div className="bg-noise"></div>

<div className="fixed top-0 left-0 w-full h-full opacity-0 transition-opacity duration-700 pointer-events-none z-0" id="hero-glow" style={{background: 'radial-gradient(600px, rgba(255, 255, 255, 0.06), transparent 40%)'}}></div>

<div className="fixed top-6 right-6 z-[100] flex flex-col gap-3 pointer-events-none" id="toast-container"></div>

<div className="transition-opacity duration-500 relative z-10" id="client-view">

<nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/60 backdrop-blur-md supports-[backdrop-filter]:bg-black/30">
<div className="flex sweezy-custom-cursor-hover h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between" style={{cursor: 'url(\'data:image/png'}}>
<a className="flex items-center gap-3 text-white transition hover:opacity-80 group" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 spring-transition group-hover:bg-white group-hover:text-black">
<iconify-icon height="18" icon="solar:dumbbell-large-minimalistic-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tight sweezy-custom-cursor-hover" style={{cursor: 'url(\'data:image/png'}}>CLASSIC GYM</span>
</a>
<div className="hidden md:flex items-center gap-8 sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<a className="text-xs font-medium text-neutral-400 transition hover:text-white" href="#amenities">Amenities</a>
<a className="text-xs font-medium text-neutral-400 transition hover:text-white" href="#store">Store</a>
<a className="text-xs font-medium text-neutral-400 transition hover:text-white" href="#schedule">Schedule</a>
</div>
<div className="flex items-center gap-4">
<button className="spring-transition spring-active group relative flex h-8 items-center justify-center rounded-full bg-white px-4 text-xs font-medium text-black hover:bg-neutral-200 sweezy-custom-cursor-hover" onclick="document.getElementById('trial_modal').showModal()" style={{cursor: 'url("data:image/png'}}>
<span className="custom-cursor-on-hover">Join Now</span>
<iconify-icon className="ml-1 opacity-0 -translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" icon="solar:arrow-right-linear" strokeWidth="1.5" width="12"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-20 sweezy-custom-cursor-hover" onmousemove="handleHeroMove(event)" style={{cursor: 'url(\'data:image/png'}}>

<div className="opacity-20 z-0 absolute -top-[50%] -left-[50%] w-[200%] h-[200%] pointer-events-none transition-transform duration-100 ease-out" id="hero-grid" style={{backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '80px 80px', maskImage: 'radial-gradient(circle at center, black 0%, transparent 60%)'}}>
</div>
<div className="relative z-10 flex max-w-4xl flex-col items-center px-6 text-center sweezy-custom-cursor-hover" id="hero-content" style={{cursor: 'url(\'data:image/png'}}>
<div className="flex gap-2.5 text-[10px] uppercase font-medium text-neutral-300 tracking-wider bg-white/5 border border-white/10 rounded-full mb-8 pt-1.5 pr-3.5 pb-1.5 pl-3.5 backdrop-blur-md items-center shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-default hover:bg-white/10 transition-colors sweezy-custom-cursor-default-hover" style={{cursor: 'url("data:image/png'}}>
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
                Live Capacity: <span className="text-white" id="live-capacity-display">65%</span>
</div>
<h1 className="bg-clip-text sm:text-7xl md:leading-[1.05] sweezy-custom-cursor-hover text-5xl font-medium text-transparent tracking-tight bg-gradient-to-b from-white via-white to-white/40 drop-shadow-2xl" style={{cursor: 'url(\'data:image/png'}}>Get Ready To Be Fit</h1>
<p className="mt-8 max-w-xl text-lg text-neutral-400 font-light leading-relaxed tracking-wide sweezy-custom-cursor-hover" style={{cursor: 'url(\'data:image/png'}}>
              Experience a training environment designed for focus. 
              Real-time crowd monitoring, AI-assisted scheduling, and elite equipment.
            </p>
<div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
<button className="spring-transition spring-active inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-white px-8 text-sm font-medium text-black hover:bg-neutral-200 sm:w-auto shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]" onclick="document.getElementById('trial_modal').showModal()">
                Start 7-Day Trial
              </button>
<a className="spring-transition spring-active inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-transparent px-8 text-sm font-medium text-white hover:bg-white/5 sm:w-auto backdrop-blur-sm" href="#schedule">
                Book Session
              </a>
</div>
</div>
</section>

<section className="py-32 bg-neutral-950/50 border-t border-white/5 relative overflow-hidden sweezy-custom-cursor-hover" id="amenities" style={{cursor: 'url("data:image/png'}}>
<div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-white/10 to-transparent"></div>
<div className="mx-auto max-w-7xl px-6 relative z-10 sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="mb-20">
<h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl">Premium Amenities</h2>
<p className="mt-4 text-neutral-500 max-w-xl font-light sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>Elevate your performance with our state-of-the-art infrastructure designed for the modern athlete.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-px rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-white/20 transition-all duration-500">
<div className="relative h-full bg-black rounded-[23px] p-8 flex flex-col items-start overflow-hidden sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110 sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<iconify-icon className="sweezy-custom-cursor-hover" icon="solar:scanner-bold" style={{cursor: 'url("data:image/png'}} width="120"></iconify-icon>
</div>
<div className="h-12 w-12 mb-6 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
<iconify-icon icon="solar:scanner-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Biometric Access</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-light">Keyless entry synced to your unique physiological profile. Seamless, secure, and instant.</p>
</div>
</div>
<div className="group relative p-px rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-indigo-500/20 transition-all duration-500">
<div className="relative h-full bg-black rounded-[23px] p-8 flex flex-col items-start overflow-hidden sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110 text-indigo-500">
<iconify-icon className="sweezy-custom-cursor-hover" icon="solar:bottle-bold" style={{cursor: 'url("data:image/png'}} width="120"></iconify-icon>
</div>
<div className="h-12 w-12 mb-6 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-white group-hover:bg-indigo-500 group-hover:border-indigo-400 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:bottle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Smart Supplement Bar</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-light">Automated mixing station that prepares your pre/post workout stack based on intensity.</p>
</div>
</div>
<div className="group relative p-px rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-emerald-500/20 transition-all duration-500">
<div className="relative h-full bg-black rounded-[23px] p-8 flex flex-col items-start overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110 text-emerald-500">
<iconify-icon icon="solar:graph-up-bold" width="120"></iconify-icon>
</div>
<div className="h-12 w-12 mb-6 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-white group-hover:bg-emerald-500 group-hover:border-emerald-400 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Growth Tracking</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-light">AI-driven analytics that visualize your progressive overload and recovery metrics.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black border-t border-white/5 relative overflow-hidden sweezy-custom-cursor-hover" id="store" style={{cursor: 'url("data:image/png'}}>
<div className="mx-auto max-w-7xl px-6 relative z-10 sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl">Performance Fuel</h2>
<p className="mt-4 max-w-xl text-neutral-500 font-light">Elite supplements from trusted brands to optimize your gains.</p>
</div>
<a className="text-sm font-medium text-white flex items-center gap-2 hover:opacity-80 transition" href="#">
                        View All Products <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>

<div className="group relative rounded-2xl bg-neutral-900 border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/20 hover:-translate-y-1">
<div className="aspect-[4/5] w-full overflow-hidden bg-white/5 relative">

<img alt="MuscleBlaze Whey" className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}></div>
<button className="absolute bottom-4 right-4 h-10 w-10 bg-white text-black rounded-full flex items-center justify-center opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110" onclick="addToCart('MuscleBlaze Biozyme Whey')">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="20"></iconify-icon>
</button>
</div>
<div className="p-5 sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="flex sweezy-custom-cursor-hover mb-1 items-start justify-between" style={{cursor: 'url("data:image/png'}}>
<h3 className="text-sm font-medium text-white tracking-tight sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>MuscleBlaze Biozyme Whey</h3>
<span className="text-sm font-medium text-emerald-400">₹3,299</span>
</div>
<p className="text-xs text-neutral-500 font-light sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>Performance Whey, Rich Chocolate.</p>
</div>
</div>

<div className="group relative rounded-2xl bg-neutral-900 border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/20 hover:-translate-y-1 sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="aspect-[4/5] w-full overflow-hidden bg-white/5 relative">

<img alt="Creatine Monohydrate" className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}></div>
<button className="absolute bottom-4 right-4 h-10 w-10 bg-white text-black rounded-full flex items-center justify-center opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110" onclick="addToCart('Creatine Monohydrate')">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="20"></iconify-icon>
</button>
</div>
<div className="p-5 sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="flex justify-between items-start mb-1 sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<h3 className="text-sm font-medium text-white tracking-tight sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>Creatine Monohydrate</h3>
<span className="text-sm font-medium text-neutral-300 sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>₹649</span>
</div>
<p className="text-xs text-neutral-500 font-light sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>Pure unflavoured micronized creatine.</p>
</div>
</div>

<div className="group relative rounded-2xl bg-neutral-900 border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/20 hover:-translate-y-1 sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="aspect-[4/5] w-full overflow-hidden bg-white/5 relative">

<img alt="Mass Gainer" className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
<button className="absolute bottom-4 right-4 h-10 w-10 bg-white text-black rounded-full flex items-center justify-center opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110" onclick="addToCart('MuscleBlaze Mass Gainer XXL')">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="20"></iconify-icon>
</button>
</div>
<div className="p-5 sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-white tracking-tight sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>Mass Gainer XXL</h3>
<span className="text-sm font-medium text-neutral-300">₹1,199</span>
</div>
<p className="text-xs text-neutral-500 font-light sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>High calorie formula for bulking.</p>
</div>
</div>

<div className="group relative rounded-2xl bg-neutral-900 border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/20 hover:-translate-y-1 sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="aspect-[4/5] w-full overflow-hidden bg-white/5 relative">

<img alt="High Protein Oats" className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
<button className="absolute bottom-4 right-4 h-10 w-10 bg-white text-black rounded-full flex items-center justify-center opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110" onclick="addToCart('High Protein Oats')">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="20"></iconify-icon>
</button>
</div>
<div className="p-5 sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="flex justify-between items-start mb-1 sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<h3 className="text-sm font-medium text-white tracking-tight">High Protein Oats</h3>
<span className="text-sm font-medium text-neutral-300">₹549</span>
</div>
<p className="text-xs text-neutral-500 font-light">Dark chocolate flavor, 1kg.</p>
</div>
</div>



<div className="group relative rounded-2xl bg-neutral-900 border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/20 hover:-translate-y-1 sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="aspect-[4/5] w-full overflow-hidden bg-white/5 relative">
<img alt="Multivitamin" className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
<button className="absolute bottom-4 right-4 h-10 w-10 bg-white text-black rounded-full flex items-center justify-center opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110" onclick="addToCart('MB Multivitamin')">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="20"></iconify-icon>
</button>
</div>
<div className="p-5 sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-white tracking-tight">MB Multivitamin</h3>
<span className="text-sm font-medium text-neutral-300">₹899</span>
</div>
<p className="text-xs text-neutral-500 font-light">60 tablets for immunity &amp; stamina.</p>
</div>
</div>

</div>
</div>
</section>

<section className="border-t border-white/5 bg-black py-32 relative overflow-hidden sweezy-custom-cursor-hover" id="schedule" style={{cursor: 'url("data:image/png'}}>
<div className="z-10 sweezy-custom-cursor-hover max-w-7xl mr-auto ml-auto pr-6 pl-6 relative" style={{cursor: 'url("data:image/png'}}>
<div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>Live Booking</h2>
<p className="mt-4 max-w-xl text-neutral-500 font-light sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>Reserve your spot. Hover cards to explore session details.</p>
</div>
<div className="flex items-center gap-4 text-xs font-medium text-neutral-500 bg-neutral-900/50 px-4 py-2 rounded-full border border-white/5">
<div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span> Available</div>
<div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-500"></span> Full</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000 custom-cursor-on-hover" id="booking-grid"><div className="tilt-card group p-6 rounded-2xl border border-white/10 bg-neutral-900 relative overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="tilt-content sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="flex justify-between items-start mb-4 sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<span className="text-base font-medium text-white tracking-tight">06:00 AM</span>
<span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-medium tracking-wide uppercase sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>Open</span>
</div>
<div className="text-sm text-neutral-400 mb-6 flex items-center gap-2 font-light sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<iconify-icon className="text-white" icon="solar:dumbbell-small-linear"></iconify-icon>
                             Cardio Blast
                        </div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-4">
<div className="h-full bg-white transition-all duration-500" style={{width: '93.33333333333333%'}}></div>
</div>
<button className="w-full text-xs font-medium py-2.5 rounded-lg border border-white/10 text-white hover:bg-white hover:text-black transition-colors spring-active sweezy-custom-cursor-hover" onclick="bookSlot(0)" style={{cursor: 'url("data:image/png'}}>
                            Book Session
                        </button>
</div>
<div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
</div><div className="tilt-card group p-6 rounded-2xl border border-white/10 bg-neutral-900 relative overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="tilt-content sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="flex justify-between items-start mb-4">
<span className="text-base font-medium text-white tracking-tight sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>07:00 AM</span>
<span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-medium tracking-wide uppercase">Open</span>
</div>
<div className="text-sm text-neutral-400 mb-6 flex items-center gap-2 font-light custom-cursor-on-hover">
<iconify-icon className="text-white" icon="solar:dumbbell-small-linear"></iconify-icon>
                             Power Yoga
                        </div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-4">
<div className="h-full bg-white transition-all duration-500" style={{width: '60%'}}></div>
</div>
<button className="w-full text-xs font-medium py-2.5 rounded-lg border border-white/10 text-white hover:bg-white hover:text-black transition-colors spring-active sweezy-custom-cursor-hover" onclick="bookSlot(1)" style={{cursor: 'url("data:image/png'}}>
                            Book Session
                        </button>
</div>
<div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
</div><div className="tilt-card group p-6 rounded-2xl border border-red-900/30 bg-red-900/10 relative overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="tilt-content sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="flex justify-between items-start mb-4">
<span className="text-base font-medium text-white tracking-tight">09:00 AM</span>
<span className="text-[10px] bg-red-500/10 text-red-400 px-2 py-0.5 rounded border border-red-500/20 font-medium tracking-wide uppercase">Full</span>
</div>
<div className="text-sm text-neutral-400 mb-6 flex items-center gap-2 font-light sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<iconify-icon className="text-white sweezy-custom-cursor-hover" icon="solar:dumbbell-small-linear" style={{cursor: 'url("data:image/png'}}></iconify-icon>
                             CrossFit
                        </div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-4">
<div className="h-full bg-red-500 transition-all duration-500" style={{width: '100%'}}></div>
</div>
<button className="w-full text-xs font-medium py-2.5 rounded-lg border border-white/10 opacity-50 cursor-not-allowed text-neutral-500 sweezy-custom-cursor-hover" disabled="" onclick="bookSlot(2)" style={{cursor: 'url("data:image/png'}}>
                            Join Waitlist
                        </button>
</div>
<div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
</div><div className="tilt-card group p-6 rounded-2xl border border-white/10 bg-neutral-900 relative overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] custom-cursor-on-hover">
<div className="tilt-content sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="flex justify-between items-start mb-4">
<span className="text-base font-medium text-white tracking-tight">05:00 PM</span>
<span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-medium tracking-wide uppercase">Open</span>
</div>
<div className="text-sm text-neutral-400 mb-6 flex items-center gap-2 font-light sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<iconify-icon className="text-white" icon="solar:dumbbell-small-linear"></iconify-icon>
                             Box &amp; Burn
                        </div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-4">
<div className="h-full bg-white transition-all duration-500" style={{width: '72%'}}></div>
</div>
<button className="w-full text-xs font-medium py-2.5 rounded-lg border border-white/10 text-white hover:bg-white hover:text-black transition-colors spring-active" onclick="bookSlot(3)">
                            Book Session
                        </button>
</div>
<div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
</div><div className="tilt-card group p-6 rounded-2xl border border-white/10 bg-neutral-900 relative overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="tilt-content sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="flex justify-between items-start mb-4">
<span className="text-base font-medium text-white tracking-tight">06:00 PM</span>
<span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-medium tracking-wide uppercase">Open</span>
</div>
<div className="text-sm text-neutral-400 mb-6 flex items-center gap-2 font-light sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<iconify-icon className="text-white" icon="solar:dumbbell-small-linear"></iconify-icon>
                             HIIT Circuit
                        </div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-4">
<div className="h-full bg-white transition-all duration-500" style={{width: '73.33333333333333%'}}></div>
</div>
<button className="w-full text-xs font-medium py-2.5 rounded-lg border border-white/10 text-white hover:bg-white hover:text-black transition-colors spring-active" onclick="bookSlot(4)">
                            Book Session
                        </button>
</div>
<div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
</div><div className="tilt-card group p-6 rounded-2xl border border-white/10 bg-neutral-900 relative overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="tilt-content sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="flex justify-between items-start mb-4">
<span className="text-base font-medium text-white tracking-tight">07:00 PM</span>
<span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-medium tracking-wide uppercase">Open</span>
</div>
<div className="text-sm text-neutral-400 mb-6 flex items-center gap-2 font-light">
<iconify-icon className="text-white" icon="solar:dumbbell-small-linear"></iconify-icon>
                             Powerlifting
                        </div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-4">
<div className="h-full bg-white transition-all duration-500" style={{width: '66.66666666666666%'}}></div>
</div>
<button className="w-full text-xs font-medium py-2.5 rounded-lg border border-white/10 text-white hover:bg-white hover:text-black transition-colors spring-active" onclick="bookSlot(5)">
                            Book Session
                        </button>
</div>
<div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
</div><div className="tilt-card group p-6 rounded-2xl border border-white/10 bg-neutral-900 relative overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="tilt-content sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="flex justify-between items-start mb-4">
<span className="text-base font-medium text-white tracking-tight">08:00 PM</span>
<span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-medium tracking-wide uppercase">Open</span>
</div>
<div className="text-sm text-neutral-400 mb-6 flex items-center gap-2 font-light sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<iconify-icon className="text-white" icon="solar:dumbbell-small-linear"></iconify-icon>
                             Recovery
                        </div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-4">
<div className="h-full bg-white transition-all duration-500" style={{width: '50%'}}></div>
</div>
<button className="w-full text-xs font-medium py-2.5 rounded-lg border border-white/10 text-white hover:bg-white hover:text-black transition-colors spring-active sweezy-custom-cursor-hover" onclick="bookSlot(6)" style={{cursor: 'url("data:image/png'}}>
                            Book Session
                        </button>
</div>
<div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
</div><div className="tilt-card group p-6 rounded-2xl border border-white/10 bg-neutral-900 relative overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="tilt-content">
<div className="flex justify-between items-start mb-4">
<span className="text-base font-medium text-white tracking-tight">09:00 PM</span>
<span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-medium tracking-wide uppercase">Open</span>
</div>
<div className="text-sm text-neutral-400 mb-6 flex items-center gap-2 font-light sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<iconify-icon className="text-white" icon="solar:dumbbell-small-linear"></iconify-icon>
                             Open Gym
                        </div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-4">
<div className="h-full bg-white transition-all duration-500" style={{width: '40%'}}></div>
</div>
<button className="w-full text-xs font-medium py-2.5 rounded-lg border border-white/10 text-white hover:bg-white hover:text-black transition-colors spring-active" onclick="bookSlot(7)">
                            Book Session
                        </button>
</div>
<div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
</div></div>
</div>
</section>

<footer className="border-t border-white/5 bg-neutral-950/30 pt-20 pb-10 sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="mx-auto max-w-7xl px-6 sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="grid gap-12 md:grid-cols-4">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 text-white" href="#">
<iconify-icon icon="solar:dumbbell-large-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-base font-medium tracking-tight">CLASSIC GYM</span>
</a>
</div>
<div></div>
<div></div>
<div className="flex flex-col items-start md:items-end gap-2">
<button className="text-[10px] uppercase tracking-wider text-neutral-600 hover:text-white transition flex items-center gap-2" onclick="toggleAdminView()">
<iconify-icon icon="solar:shield-user-linear" width="14"></iconify-icon> Staff Portal
                  </button>
</div>
</div>
<div className="mt-16 border-t border-white/5 pt-8 flex justify-between items-center">
<p className="text-xs text-neutral-600">© 2023 Classic Gym. Empire Edition.</p>
<div className="flex gap-4">
<iconify-icon className="text-neutral-600 hover:text-white transition cursor-pointer" icon="solar:instagram-linear"></iconify-icon>
<iconify-icon className="text-neutral-600 hover:text-white transition cursor-pointer" icon="solar:twitter-linear"></iconify-icon>
</div>
</div>
</div>
</footer>
</div>

<div className="fixed inset-0 z-[60] bg-black hidden flex-col animate-fade-in-up" id="admin-view">

<div className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-neutral-900">
<div className="flex items-center gap-3">
<div className="h-8 w-8 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 border border-indigo-500/20 shadow-[0_0_10px_rgba(99,102,241,0.1)]">
<iconify-icon icon="solar:settings-minimalistic-bold" width="18"></iconify-icon>
</div>
<span className="font-medium text-white tracking-tight">Operations Layer</span>
</div>
<button className="spring-transition spring-active text-xs font-medium text-neutral-400 hover:text-white border border-white/10 rounded px-3 py-1.5 hover:bg-white/5" onclick="toggleAdminView()">
                Exit Dashboard
            </button>
</div>
<div className="flex-1 flex overflow-hidden">

<div className="w-64 border-r border-white/10 bg-black p-4 flex flex-col gap-1">
<button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white bg-white/10 font-medium transition-all" id="tab-overview" onclick="switchAdminTab('overview')">
<iconify-icon icon="solar:chart-square-linear" width="18"></iconify-icon> Live Overview
                </button>
<button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-all" id="tab-members" onclick="switchAdminTab('members')">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon> Member Database
                </button>
<button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-all relative" id="tab-chat" onclick="switchAdminTab('chat')">
<iconify-icon icon="solar:chat-line-linear" width="18"></iconify-icon> AI Mirror
                    <span className="absolute right-3 top-3.5 h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></span>
</button>
</div>

<div className="flex-1 overflow-y-auto bg-black p-8 custom-scrollbar">

<div className="max-w-5xl animate-fade-in-up" id="view-overview">
<h2 className="text-xl font-medium text-white mb-6 tracking-tight">Crowd Management Engine</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
<div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/50">
<div className="text-xs text-neutral-500 mb-2 uppercase tracking-wide">Current Occupancy</div>
<div className="text-3xl font-medium text-white tracking-tight">42<span className="text-neutral-500 text-lg font-light">/60</span></div>
<div className="mt-4 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[70%] shadow-[0_0_10px_rgba(99,102,241,0.3)]"></div>
</div>
</div>
<div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/50">
<div className="text-xs text-neutral-500 mb-2 uppercase tracking-wide">Pending Requests</div>
<div className="text-3xl font-medium text-white tracking-tight">8</div>
<div className="mt-2 text-xs text-emerald-400 flex items-center gap-1.5">
<iconify-icon icon="mdi:whatsapp"></iconify-icon> Synced via WhatsApp
                            </div>
</div>
</div>
<h3 className="text-sm font-medium text-neutral-400 mb-4 uppercase tracking-wider">Session Capacity Control</h3>
<div className="rounded-xl border border-white/10 bg-neutral-900/30 overflow-hidden">
<table className="w-full text-left text-sm text-neutral-400">
<thead className="bg-white/5 text-[10px] uppercase font-semibold text-white tracking-wider border-b border-white/5">
<tr>
<th className="px-6 py-4">Time Slot</th>
<th className="px-6 py-4">Activity</th>
<th className="px-6 py-4">Booked</th>
<th className="px-6 py-4">Max Cap</th>
<th className="px-6 py-4">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5" id="admin-capacity-table"><tr className="hover:bg-white/5 transition">
<td className="px-6 py-4 text-white font-medium">06:00 AM</td>
<td className="px-6 py-4">Cardio Blast</td>
<td className="px-6 py-4">28</td>
<td className="px-6 py-4">
<input className="w-16 bg-black border border-white/10 rounded px-2 py-1 text-xs text-white focus:border-indigo-500 outline-none" onchange="updateMaxCapacity(0, this.value)" type="number" value="30"/>
</td>
<td className="px-6 py-4 text-emerald-400 font-medium text-xs uppercase">Open</td>
</tr><tr className="hover:bg-white/5 transition">
<td className="px-6 py-4 text-white font-medium">07:00 AM</td>
<td className="px-6 py-4">Power Yoga</td>
<td className="px-6 py-4">12</td>
<td className="px-6 py-4">
<input className="w-16 bg-black border border-white/10 rounded px-2 py-1 text-xs text-white focus:border-indigo-500 outline-none" onchange="updateMaxCapacity(1, this.value)" type="number" value="20"/>
</td>
<td className="px-6 py-4 text-emerald-400 font-medium text-xs uppercase">Open</td>
</tr><tr className="hover:bg-white/5 transition">
<td className="px-6 py-4 text-white font-medium">09:00 AM</td>
<td className="px-6 py-4">CrossFit</td>
<td className="px-6 py-4">15</td>
<td className="px-6 py-4">
<input className="w-16 bg-black border border-white/10 rounded px-2 py-1 text-xs text-white focus:border-indigo-500 outline-none" onchange="updateMaxCapacity(2, this.value)" type="number" value="15"/>
</td>
<td className="px-6 py-4 text-red-400 font-medium text-xs uppercase">Full</td>
</tr><tr className="hover:bg-white/5 transition">
<td className="px-6 py-4 text-white font-medium">05:00 PM</td>
<td className="px-6 py-4">Box &amp; Burn</td>
<td className="px-6 py-4">18</td>
<td className="px-6 py-4">
<input className="w-16 bg-black border border-white/10 rounded px-2 py-1 text-xs text-white focus:border-indigo-500 outline-none" onchange="updateMaxCapacity(3, this.value)" type="number" value="25"/>
</td>
<td className="px-6 py-4 text-emerald-400 font-medium text-xs uppercase">Open</td>
</tr><tr className="hover:bg-white/5 transition">
<td className="px-6 py-4 text-white font-medium">06:00 PM</td>
<td className="px-6 py-4">HIIT Circuit</td>
<td className="px-6 py-4">22</td>
<td className="px-6 py-4">
<input className="w-16 bg-black border border-white/10 rounded px-2 py-1 text-xs text-white focus:border-indigo-500 outline-none" onchange="updateMaxCapacity(4, this.value)" type="number" value="30"/>
</td>
<td className="px-6 py-4 text-emerald-400 font-medium text-xs uppercase">Open</td>
</tr><tr className="hover:bg-white/5 transition">
<td className="px-6 py-4 text-white font-medium">07:00 PM</td>
<td className="px-6 py-4">Powerlifting</td>
<td className="px-6 py-4">8</td>
<td className="px-6 py-4">
<input className="w-16 bg-black border border-white/10 rounded px-2 py-1 text-xs text-white focus:border-indigo-500 outline-none" onchange="updateMaxCapacity(5, this.value)" type="number" value="12"/>
</td>
<td className="px-6 py-4 text-emerald-400 font-medium text-xs uppercase">Open</td>
</tr><tr className="hover:bg-white/5 transition">
<td className="px-6 py-4 text-white font-medium">08:00 PM</td>
<td className="px-6 py-4">Recovery</td>
<td className="px-6 py-4">5</td>
<td className="px-6 py-4">
<input className="w-16 bg-black border border-white/10 rounded px-2 py-1 text-xs text-white focus:border-indigo-500 outline-none" onchange="updateMaxCapacity(6, this.value)" type="number" value="10"/>
</td>
<td className="px-6 py-4 text-emerald-400 font-medium text-xs uppercase">Open</td>
</tr><tr className="hover:bg-white/5 transition">
<td className="px-6 py-4 text-white font-medium">09:00 PM</td>
<td className="px-6 py-4">Open Gym</td>
<td className="px-6 py-4">40</td>
<td className="px-6 py-4">
<input className="w-16 bg-black border border-white/10 rounded px-2 py-1 text-xs text-white focus:border-indigo-500 outline-none" onchange="updateMaxCapacity(7, this.value)" type="number" value="100"/>
</td>
<td className="px-6 py-4 text-emerald-400 font-medium text-xs uppercase">Open</td>
</tr></tbody>
</table>
</div>
</div>

<div className="max-w-5xl hidden animate-fade-in-up" id="view-members">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-medium text-white tracking-tight">Member Database</h2>
<button className="text-xs bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-neutral-200 transition">Export CSV</button>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-900/30 overflow-hidden">
<table className="w-full text-left text-sm text-neutral-400">
<thead className="bg-white/5 text-[10px] uppercase font-semibold text-white tracking-wider border-b border-white/5">
<tr>
<th className="px-6 py-4">Member</th>
<th className="px-6 py-4">Plan</th>
<th className="px-6 py-4">Last Check-in</th>
<th className="px-6 py-4">Contact</th>
<th className="px-6 py-4">Status</th>
</tr>
</thead>
<tbody>
<tr className="hover:bg-white/5 transition">
<td className="px-6 py-4 text-white font-medium">Sarah Jenkins</td>
<td className="px-6 py-4"><span className="px-2 py-0.5 rounded border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-[10px] font-medium uppercase tracking-wide">Pro</span></td>
<td className="px-6 py-4">Today, 09:14 AM</td>
<td className="px-6 py-4 flex items-center gap-2 text-xs">
<iconify-icon className="text-emerald-500" icon="mdi:whatsapp"></iconify-icon>
                                        +1 202-555-0192
                                    </td>
<td className="px-6 py-4 text-emerald-500 text-xs">Active</td>
</tr>
<tr className="hover:bg-white/5 transition">
<td className="px-6 py-4 text-white font-medium">Mike Ross</td>
<td className="px-6 py-4"><span className="px-2 py-0.5 rounded border border-white/10 bg-white/5 text-neutral-400 text-[10px] font-medium uppercase tracking-wide">Standard</span></td>
<td className="px-6 py-4">Yesterday</td>
<td className="px-6 py-4 flex items-center gap-2 text-xs">
<iconify-icon className="text-emerald-500" icon="mdi:whatsapp"></iconify-icon>
                                        +1 202-555-0144
                                    </td>
<td className="px-6 py-4 text-emerald-500 text-xs">Active</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="h-full hidden flex-col animate-fade-in-up" id="view-chat">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-xl font-medium text-white tracking-tight">AI Conversation Mirror</h2>
<p className="text-sm text-neutral-500 mt-1">Monitor automated responses or take control.</p>
</div>
<div className="flex items-center gap-3 bg-neutral-900 px-3 py-1.5 rounded-lg border border-white/5">
<span className="text-xs text-neutral-400 font-medium">AI Auto-Reply</span>
<button className="w-9 h-5 bg-emerald-500 rounded-full relative transition-colors duration-300" id="ai-toggle-btn" onclick="toggleAI()">
<div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-300 shadow-sm"></div>
</button>
</div>
</div>
<div className="flex-1 grid grid-cols-3 gap-6 min-h-0">

<div className="col-span-1 border border-white/10 rounded-xl bg-neutral-900/50 overflow-hidden flex flex-col">
<div className="p-4 border-b border-white/5 font-medium text-white text-xs uppercase tracking-wider">Active Sessions</div>
<div className="flex-1 overflow-y-auto">
<div className="p-4 border-b border-white/5 bg-white/5 cursor-pointer border-l-2 border-l-indigo-500">
<div className="flex justify-between mb-1">
<span className="text-white text-sm font-medium">Guest #4921</span>
<span className="text-[10px] text-neutral-500">Now</span>
</div>
<p className="text-xs text-neutral-400 truncate">Do you have parking available?</p>
</div>
</div>
</div>

<div className="col-span-2 border border-white/10 rounded-xl bg-neutral-900/50 overflow-hidden flex flex-col relative">

<div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar" id="mirror-chat-feed">

</div>

<div className="p-4 border-t border-white/10 bg-neutral-950">
<div className="relative">
<input className="w-full bg-white/5 border border-white/10 rounded-lg pl-4 pr-12 py-3 text-sm text-white focus:border-indigo-500 outline-none transition disabled:opacity-50 disabled:cursor-not-allowed placeholder-neutral-600" id="admin-chat-input" placeholder="Take over conversation..." type="text"/>
<button className="absolute right-2 top-2 p-1.5 text-indigo-400 hover:text-white transition" onclick="adminSendMessage()">
<iconify-icon icon="solar:plain-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="absolute bottom-24 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] text-emerald-400 font-medium backdrop-blur-md pointer-events-none flex items-center gap-1.5" id="ai-active-indicator">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
                                AI Active • Monitoring
                            </div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-4 pointer-events-none">

<div className="pointer-events-auto hidden w-80 h-[400px] bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl flex-col overflow-hidden mb-2 transition-all duration-300 origin-bottom-right transform scale-95 opacity-0 backdrop-blur-xl" id="chat-widget">
<div className="bg-white/5 p-4 border-b border-white/10 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div>
<span className="text-sm font-medium text-white tracking-tight">Support Bot</span>
</div>
<button className="text-neutral-400 hover:text-white transition" onclick="toggleChat()">
<iconify-icon icon="solar:minimize-square-linear"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-3 bg-black/40 custom-scrollbar" id="client-chat-feed">
<div className="flex flex-col items-start gap-1">
<div className="bg-white/10 text-neutral-200 text-xs px-3.5 py-2.5 rounded-2xl rounded-tl-none max-w-[85%] leading-relaxed border border-white/5">
                        Hello! I'm the gym's AI assistant. Ask me about membership, hours, or equipment.
                    </div>
</div>
</div>
<div className="p-3 bg-neutral-900 border-t border-white/10">
<form className="flex gap-2" onsubmit="handleClientChat(event)">
<input className="flex-1 bg-black border border-white/10 rounded-lg px-3 py-2.5 text-xs text-white focus:border-white/30 outline-none placeholder-neutral-600" id="client-chat-input" placeholder="Type a message..." type="text"/>
<button className="bg-white text-black p-2 rounded-lg hover:bg-neutral-200 transition flex items-center justify-center" type="submit">
<iconify-icon icon="solar:plain-bold-duotone" width="16"></iconify-icon>
</button>
</form>
</div>
</div>

<div className="flex flex-col gap-3 pointer-events-auto">
<button className="spring-transition spring-active h-12 w-12 rounded-full bg-neutral-800 border border-white/10 text-white shadow-lg flex items-center justify-center hover:bg-neutral-700 hover:border-white/20 group relative" onclick="toggleChat()">
<span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-red-500 border-2 border-black"></span>
<iconify-icon icon="solar:chat-line-linear" width="22"></iconify-icon>
</button>
<a className="spring-transition spring-active h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:bg-[#20bd5a] group hover:-translate-y-1" href="https://wa.me/1234567890?text=I%20want%20to%20book%20a%20session" target="_blank">
<iconify-icon className="group-hover:scale-110 transition duration-300" icon="mdi:whatsapp" width="28"></iconify-icon>
</a>
</div>
</div>

<dialog className="bg-transparent p-0 w-full max-w-sm m-auto backdrop-blur-md open:animate-fade-in-up focus:outline-none" id="trial_modal">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 p-8 shadow-2xl" onclick="event.stopPropagation()">
<button className="absolute right-4 top-4 text-neutral-500 hover:text-white transition" onclick="document.getElementById('trial_modal').close()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="mb-6">
<div className="h-10 w-10 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="solar:crown-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">Start Your 7-Day Free Trial</h3>
<p className="mt-2 text-xs text-neutral-400 font-light leading-relaxed">Access premium amenities and AI tracking. Confirmation sent via WhatsApp.</p>
</div>
<form className="flex flex-col gap-4" method="dialog" onsubmit="handleRegistration(event)">
<div className="space-y-1.5">
<label className="block text-[10px] font-medium text-neutral-400 uppercase tracking-wide">Full Name</label>
<input className="w-full rounded-lg border border-white/10 bg-black/50 px-3 py-2.5 text-sm text-white placeholder-neutral-700 outline-none focus:border-white/30 transition-colors" id="reg-name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-[10px] font-medium text-neutral-400 uppercase tracking-wide flex justify-between">
                  WhatsApp Number
                  <iconify-icon className="text-emerald-500" icon="mdi:whatsapp"></iconify-icon>
</label>
<input className="w-full rounded-lg border border-white/10 bg-black/50 px-3 py-2.5 text-sm text-white placeholder-neutral-700 outline-none focus:border-white/30 transition-colors" id="reg-phone" placeholder="+1 234 567 890" required="" type="tel"/>
</div>
<button className="spring-transition spring-active mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-white py-3 text-sm font-medium text-black hover:bg-neutral-200" type="submit">
              Claim Free Pass
              <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</form>
</div>
</dialog>


    </>
  );
}
