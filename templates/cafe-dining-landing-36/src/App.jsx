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



        // --- DATA ---
        const menuItems = [
            { id: 1, name: "Hazelnut Cappuccino", price: 180, desc: "Rich espresso with steamed milk.", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80", category: "coffee" },
            { id: 2, name: "Paneer Tikka Pizza", price: 290, desc: "Wood-fired base with spiced paneer.", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80", category: "main" },
            { id: 3, name: "White Sauce Pasta", price: 240, desc: "Penne pasta in creamy sauce.", image: "https://images.unsplash.com/photo-1626844131082-256783844137?w=800&q=80", category: "main" },
            { id: 4, name: "Classic Cold Brew", price: 160, desc: "Steeped for 18 hours.", image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=800&q=80", category: "coffee" },
            { id: 5, name: "Peri Peri Fries", price: 140, desc: "Crispy fries with spicy seasoning.", image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=800&q=80", category: "snacks" },
            { id: 6, name: "Double Chocolate Brownie", price: 190, desc: "With vanilla ice cream.", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476d?w=800&q=80", category: "snacks" }
        ];

        // --- GLOBAL STATE ---
        let cart = {}; // ID -> Qty
        let chatState = {
            step: 'IDLE',
            data: { name: '', phone: '', type: 'Dine-in', location: '', notes: '' },
            history: []
        };

        // --- STANDARD CART FUNCTIONS ---
        function renderMenu(filter = 'all') {
            const grid = document.getElementById('menu-grid');
            grid.innerHTML = '';
            const filteredItems = filter === 'all' ? menuItems : menuItems.filter(item => item.category === filter);

            filteredItems.forEach(item => {
                const card = document.createElement('div');
                card.className = "group flex flex-col gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-300";
                card.innerHTML = `
                    <div class="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-800 relative shadow-inner">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" alt="${item.name}" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
                    </div>
                    <div class="flex flex-col flex-1">
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="text-base font-medium text-white tracking-tight">${item.name}</h3>
                            <span class="text-sm font-semibold text-lime-400">₹${item.price}</span>
                        </div>
                        <p class="text-xs text-neutral-500 leading-relaxed mb-5 line-clamp-2 font-light">${item.desc}</p>
                        <button onclick="addToCart(${item.id})" class="mt-auto w-full py-2.5 rounded-lg bg-neutral-800 text-neutral-300 text-xs font-medium hover:bg-white hover:text-black transition-all">
                            Add to Chat Order
                        </button>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        function filterMenu(cat) { renderMenu(cat); }

        function addToCart(id) {
            if(!cart[id]) cart[id] = 0;
            cart[id]++;
            updateCartUI();
            
            if(!document.getElementById('chat-window').classList.contains('pointer-events-none') && chatState.step === 'MENU') {
                const item = menuItems.find(i => i.id === id);
                addBotMessage(`Added ${item.name} to your order. Anything else?`);
            } else if (chatState.step === 'IDLE') {
                toggleChat();
                chatState.step = 'MENU';
                addBotMessage(`I've started your order with a ${menuItems.find(i => i.id === id).name}. Would you like to see the menu or add more?`);
            }
        }

        function updateCartUI() {
            const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
            const badge = document.getElementById('cart-badge');
            badge.style.opacity = totalItems > 0 ? '1' : '0';

            const container = document.getElementById('cart-items-container');
            container.innerHTML = '';
            let total = 0;
            
            Object.keys(cart).forEach(id => {
                const item = menuItems.find(i => i.id == id);
                const qty = cart[id];
                total += item.price * qty;
                container.innerHTML += `
                    <div class="flex justify-between items-center mb-4 text-sm text-neutral-300">
                        <span>${qty}x ${item.name}</span>
                        <span>₹${item.price * qty}</span>
                    </div>
                `;
            });
            document.getElementById('cart-total').innerText = '₹' + total;
        }

        function toggleCart() {
            const modal = document.getElementById('cart-modal');
            const panel = document.getElementById('cart-panel');
            if(modal.classList.contains('hidden')) {
                modal.classList.remove('hidden');
                setTimeout(() => panel.classList.remove('translate-x-full'), 10);
            } else {
                panel.classList.add('translate-x-full');
                setTimeout(() => modal.classList.add('hidden'), 300);
            }
        }

        // --- CHAT LOGIC ---
        const chatWindow = document.getElementById('chat-window');
        const messagesDiv = document.getElementById('chat-messages');
        const inputField = document.getElementById('chat-input');
        const quickActions = document.getElementById('quick-actions');

        function toggleChat() {
            if(chatWindow.classList.contains('opacity-0')) {
                chatWindow.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-10');
                if(chatState.history.length === 0) startConversation();
                inputField.focus();
            } else {
                chatWindow.classList.add('opacity-0', 'pointer-events-none', 'translate-y-10');
            }
        }

        function openChatWithIntent(intent) {
            if(chatWindow.classList.contains('opacity-0')) toggleChat();
            if(intent === 'checkout') {
                processUserInput('checkout');
            }
        }

        function startConversation() {
            addBotMessage("Namaste! Welcome to O2 Cafe. I am your AI Assistant. ☕");
            setTimeout(() => {
                addBotMessage("You can ask me to show the menu, or just tell me what you'd like to eat! How can I help you?");
                setQuickActions(['Show Menu', 'View Special Offers']);
            }, 800);
            chatState.step = 'IDLE';
        }

        function resetChat() {
            chatState = { step: 'IDLE', data: { name: '', phone: '', type: 'Dine-in', location: '', notes: '' }, history: [] };
            cart = {};
            updateCartUI();
            messagesDiv.innerHTML = '';
            startConversation();
        }

        function addBotMessage(text, isHTML = false) {
            const msgDiv = document.createElement('div');
            msgDiv.className = "flex flex-col items-start max-w-[85%]";
            const typingDiv = document.createElement('div');
            typingDiv.className = "bg-neutral-800 text-neutral-400 px-3 py-2 rounded-2xl rounded-tl-none text-xs flex gap-1 mb-1 w-12";
            typingDiv.innerHTML = `<div class="w-1.5 h-1.5 bg-neutral-500 rounded-full typing-dot"></div><div class="w-1.5 h-1.5 bg-neutral-500 rounded-full typing-dot"></div><div class="w-1.5 h-1.5 bg-neutral-500 rounded-full typing-dot"></div>`;
            messagesDiv.appendChild(typingDiv);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;

            setTimeout(() => {
                typingDiv.remove();
                msgDiv.innerHTML = `
                    <div class="bg-neutral-800 text-neutral-200 px-4 py-3 rounded-2xl rounded-tl-none text-xs leading-relaxed border border-white/5 shadow-sm">
                        ${isHTML ? text : `<p>${text}</p>`}
                    </div>
                `;
                messagesDiv.appendChild(msgDiv);
                messagesDiv.scrollTop = messagesDiv.scrollHeight;
                chatState.history.push({sender: 'bot', text: text});
            }, 600 + Math.random() * 400);
        }

        function addUserMessage(text) {
            const msgDiv = document.createElement('div');
            msgDiv.className = "flex flex-col items-end self-end max-w-[85%] ml-auto";
            msgDiv.innerHTML = `
                <div class="bg-lime-600 text-white px-4 py-3 rounded-2xl rounded-tr-none text-xs leading-relaxed shadow-sm">
                    <p>${text}</p>
                </div>
            `;
            messagesDiv.appendChild(msgDiv);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
            chatState.history.push({sender: 'user', text: text});
        }

        function setQuickActions(actions) {
            quickActions.innerHTML = '';
            if(actions.length === 0) {
                quickActions.classList.add('hidden');
                return;
            }
            quickActions.classList.remove('hidden');
            actions.forEach(action => {
                const btn = document.createElement('button');
                btn.className = "px-3 py-1.5 bg-neutral-800 border border-white/10 hover:bg-neutral-700 hover:border-lime-500/30 text-xs text-neutral-300 rounded-full whitespace-nowrap transition-colors";
                btn.textContent = action;
                btn.onclick = () => { processUserInput(action); };
                quickActions.appendChild(btn);
            });
        }

        inputField.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleUserMessage();
        });

        function handleUserMessage() {
            const text = inputField.value.trim();
            if (!text) return;
            inputField.value = '';
            addUserMessage(text);
            processUserInput(text);
        }

        function processUserInput(input) {
            const lowerInput = input.toLowerCase();

            if (chatState.step === 'IDLE' || chatState.step === 'MENU') {
                if (lowerInput.includes('menu') || lowerInput.includes('list')) {
                    chatState.step = 'MENU';
                    let menuHtml = `<p class="mb-2 font-semibold text-lime-400">Here is our menu:</p><div class="space-y-2">`;
                    menuItems.forEach(item => {
                        menuHtml += `<div class="flex justify-between border-b border-white/5 pb-1"><span>${item.id}. ${item.name}</span><span>₹${item.price}</span></div>`;
                    });
                    menuHtml += `</div><p class="mt-2 text-neutral-400">Type item name or number (e.g., "1 Coffee").</p>`;
                    addBotMessage(menuHtml, true);
                    setQuickActions(['Checkout', 'Recommend something']);
                    return;
                }

                if (lowerInput.includes('checkout') || lowerInput.includes('bill')) {
                    const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
                    if (totalItems === 0) {
                        addBotMessage("Your cart is empty. Please add items first!");
                        return;
                    }
                    calculateBillAndProceed();
                    return;
                }

                let foundItem = false;
                const numberMatch = lowerInput.match(/\b([1-6])\b/); 
                if (numberMatch) {
                    addToCart(parseInt(numberMatch[0]));
                    foundItem = true;
                } else {
                    menuItems.forEach(item => {
                        if (lowerInput.includes(item.name.toLowerCase()) || 
                           (item.category === 'coffee' && lowerInput.includes('coffee'))) {
                            addToCart(item.id);
                            foundItem = true;
                        }
                    });
                }

                if (!foundItem) {
                    if(lowerInput.includes('hi')) addBotMessage("Hello! Ready to order?");
                    else addBotMessage("I didn't catch that. Type 'Menu' to see list.");
                } else {
                    setQuickActions(['Checkout', 'Add More']);
                    chatState.step = 'MENU';
                }
                return;
            }

            if (chatState.step === 'DETAILS_NAME') {
                chatState.data.name = input;
                chatState.step = 'DETAILS_PHONE';
                addBotMessage(`Nice to meet you, ${input}. What is your **Phone Number**?`);
                setQuickActions([]);
                return;
            }

            if (chatState.step === 'DETAILS_PHONE') {
                chatState.data.phone = input;
                chatState.step = 'DETAILS_TYPE';
                addBotMessage("Got it. Is this for **Dine-in**, **Takeaway**, or **Delivery**?");
                setQuickActions(['Dine-in', 'Takeaway', 'Delivery']);
                return;
            }

            if (chatState.step === 'DETAILS_TYPE') {
                if (lowerInput.includes('delivery')) {
                    chatState.data.type = 'Delivery';
                    chatState.step = 'DETAILS_LOC';
                    addBotMessage("Please share your delivery address or location.");
                    const btn = document.createElement('button');
                    btn.className = "mt-2 px-4 py-2 bg-green-600/20 text-green-400 border border-green-600/50 rounded-lg text-xs flex items-center gap-2 hover:bg-green-600 hover:text-white transition-all";
                    btn.innerHTML = `<iconify-icon icon="lucide:map-pin"></iconify-icon> Share Current Location`;
                    btn.onclick = getUserLocation;
                    messagesDiv.appendChild(btn);
                    setQuickActions([]);
                } else {
                    chatState.data.type = lowerInput.includes('take') ? 'Takeaway' : 'Dine-in';
                    askNotes();
                }
                return;
            }

            if (chatState.step === 'DETAILS_LOC') {
                chatState.data.location = input;
                askNotes();
                return;
            }

            if (chatState.step === 'DETAILS_NOTES') {
                chatState.data.notes = (lowerInput === 'no') ? '' : input;
                showFinalSummary();
                return;
            }

            if (chatState.step === 'CONFIRM') {
                if (lowerInput.includes('yes') || lowerInput.includes('ok')) sendToWhatsApp();
                else {
                    addBotMessage("Order cancelled.");
                    resetChat();
                }
                return;
            }
        }

        function calculateBillAndProceed() {
            let total = 0;
            Object.keys(cart).forEach(id => {
                total += menuItems.find(i => i.id == id).price * cart[id];
            });
            addBotMessage(`Total is **₹${total}**. What is your **Name**?`);
            chatState.step = 'DETAILS_NAME';
            setQuickActions([]);
        }

        function getUserLocation() {
            if (navigator.geolocation) {
                addBotMessage("Fetching location...", false);
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        chatState.data.location = `https://www.google.com/maps?q=${position.coords.latitude},${position.coords.longitude}`;
                        addUserMessage("📍 Location Shared");
                        askNotes();
                    },
                    () => { addBotMessage("Could not fetch GPS. Type address manually."); }
                );
            }
        }

        function askNotes() {
            chatState.step = 'DETAILS_NOTES';
            addBotMessage("Any cooking instructions? Type 'No' to skip.");
            setQuickActions(['No Notes', 'Make it Spicy']);
        }

        function showFinalSummary() {
            chatState.step = 'CONFIRM';
            let total = 0;
            let summaryHTML = `<div class="space-y-1 font-mono text-[10px] text-neutral-300 border-l-2 border-lime-500 pl-3">`;
            
            Object.keys(cart).forEach(id => {
                const item = menuItems.find(i => i.id == id);
                const sub = item.price * cart[id];
                total += sub;
                summaryHTML += `<div class="flex justify-between"><span>${item.name} x${cart[id]}</span><span>₹${sub}</span></div>`;
            });
            
            summaryHTML += `<div class="border-t border-white/10 mt-2 pt-1 font-bold flex justify-between text-white"><span>Total</span><span>₹${total}</span></div>`;
            summaryHTML += `</div>`;

            addBotMessage("Here is your final summary:", false);
            setTimeout(() => {
                addBotMessage(summaryHTML, true);
                addBotMessage("Confirm order?");
                setQuickActions(['Yes, Confirm Order', 'Cancel']);
            }, 400);
        }

        function sendToWhatsApp() {
            const data = chatState.data;
            let total = 0;
            let message = `📌 *New Order – O2 Cafe* \n`;
            
            Object.keys(cart).forEach(id => {
                const item = menuItems.find(i => i.id == id);
                total += item.price * cart[id];
                message += `▪️ ${item.name} (${cart[id]}) - ₹${item.price * cart[id]}\n`;
            });

            message += `\n💰 *Total: ₹${total}*\n`;
            message += `👤 ${data.name} | 📞 ${data.phone}\n`;
            message += `📍 ${data.type}`;
            if(data.location) message += `\nLoc: ${data.location}`;
            if(data.notes) message += `\n📝 Note: ${data.notes}`;

            addBotMessage("Order Confirmed! Opening WhatsApp... ✅");
            setTimeout(() => {
                window.open(`https://wa.me/917505766050?text=${encodeURIComponent(message)}`, '_blank');
                resetChat();
            }, 1000);
        }

        renderMenu();
    
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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] blur-[120px] rounded-full pointer-events-none glow-effect z-0 bg-orange-600/10"></div>

<nav className="fixed top-4 left-0 right-0 z-40 px-4">
<div className="flex h-14 max-w-5xl border rounded-full mr-auto ml-auto pr-6 pl-6 shadow-lg backdrop-blur-xl items-center justify-between shadow-black/20 bg-neutral-900/80 border-white/5">
<a className="flex items-center gap-1 text-lg font-bold tracking-tighter text-white" href="#">
<span className="text-orange-500">O2</span> Cafe &amp; Dining
            </a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="transition-colors hover:text-white" href="#home">Home</a>
<a className="transition-colors hover:text-white" href="#menu">Menu</a>
<a className="transition-colors hover:text-white" href="#about">About</a>
<a className="transition-colors hover:text-white" href="#reviews">Reviews</a>
</div>
<button className="transition-colors group rounded-full pt-2 pr-2 pb-2 pl-2 relative hover:bg-white/5" onclick="toggleCart()">
<iconify-icon className="text-white" icon="lucide:shopping-bag" strokeWidth="1.5" width="18"></iconify-icon>
<span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full opacity-0 transition-opacity ring-2 bg-orange-500 ring-neutral-900" id="cart-badge"></span>
</button>
</div>
</nav>

<section className="z-10 pt-32 pr-6 pb-16 pl-6 relative" id="home">
<div className="max-w-5xl mx-auto">
<div className="flex flex-col md:flex-row bg-center gap-x-16 gap-y-16 items-center">
<div className="flex-1 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-medium tracking-wide uppercase bg-white/5 border-white/5 text-orange-400">
<span className="w-1.5 h-1.5 rounded-full animate-pulse bg-orange-500"></span>
                        Now Open
                    </div>
<h1 className="md:text-7xl leading-[1] text-5xl font-semibold tracking-tight text-white">
                        Breath of <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-200 to-orange-600">fresh flavours.</span>
</h1>
<p className="leading-relaxed text-lg font-light text-neutral-500 max-w-md">
                        Experience the vibrant atmosphere at Kargil Road. Artisanal coffee and curated dining in the heart of Agra.
                    </p>
<div className="flex pt-2 gap-x-4 gap-y-4">
<button className="px-8 py-3 text-xs font-semibold rounded-full transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] bg-white text-black hover:bg-neutral-200" onclick="openChatWithIntent('menu')">
                            Order via AI
                        </button>
<a className="px-8 py-3 bg-transparent border text-xs font-medium rounded-full transition-colors flex items-center gap-2 border-white/10 text-white hover:bg-white/5" href="https://wa.me/917505766050">
                            Book Table
                        </a>
</div>
</div>
<div className="flex-1 w-full relative group">
<div className="absolute -inset-1 bg-gradient-to-r to-green-500/20 rounded-[2rem] blur opacity-50 group-hover:opacity-75 transition duration-1000 from-orange-500/20"></div>
<div className="aspect-[4/3] overflow-hidden w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b9c6cf47-9d9d-4145-a29a-f5b3dbad9e0d_800w.jpg)] bg-cover bg-center ring-1 rounded-[2rem] relative shadow-2xl bg-neutral-900 ring-white/10">

<div className="absolute bottom-4 left-4 right-4 p-4 backdrop-blur-md rounded-xl border bg-black/40 border-white/10">
<p className="bg-center text-xs font-medium text-white">📍 Shop 76, M.K. Puram, Agra</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 pt-20 pr-6 pb-20 pl-6 relative" id="menu">
<div className="max-w-5xl mr-auto ml-auto">
<div className="flex flex-col md:flex-row mb-16 gap-x-6 gap-y-6 items-end justify-between">
<div className="">
<h2 className="text-3xl font-medium tracking-tight text-white">Curated Menu</h2>
<p className="text-neutral-500 text-sm mt-2 font-light">Meticulously prepared for the discerning palate.</p>
</div>

<div className="flex p-1 border rounded-full bg-neutral-900 border-white/5">
<button className="px-5 py-2 rounded-full text-xs font-medium transition-all focus:bg-neutral-800 focus:text-white hover:text-white text-neutral-400" onclick="filterMenu('all')">All</button>
<button className="px-5 py-2 rounded-full text-xs font-medium transition-all focus:bg-neutral-800 focus:text-white hover:text-white text-neutral-400" onclick="filterMenu('coffee')">Coffee</button>
<button className="px-5 py-2 rounded-full text-xs font-medium transition-all focus:bg-neutral-800 focus:text-white hover:text-white text-neutral-400" onclick="filterMenu('main')">Mains</button>
<button className="px-5 py-2 rounded-full text-xs font-medium transition-all focus:bg-neutral-800 focus:text-white hover:text-white text-neutral-400" onclick="filterMenu('snacks')">Snacks</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12" id="menu-grid"><div className="group flex flex-col gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-300">
<div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-800 relative shadow-inner">
<img alt="Hazelnut Cappuccino" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex flex-col flex-1">
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-medium text-white tracking-tight">Hazelnut Cappuccino</h3>
<span className="text-sm font-semibold text-lime-400">₹180</span>
</div>
<p className="text-xs text-neutral-500 leading-relaxed mb-5 line-clamp-2 font-light">Rich espresso with steamed milk.</p>
<button className="mt-auto w-full py-2.5 rounded-lg bg-neutral-800 text-neutral-300 text-xs font-medium hover:bg-white hover:text-black transition-all" onclick="addToCart(1)">
                            Add to Chat Order
                        </button>
</div>
</div><div className="group flex flex-col gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-300">
<div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-800 relative shadow-inner">
<img alt="Paneer Tikka Pizza" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex flex-col flex-1">
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-medium text-white tracking-tight">Paneer Tikka Pizza</h3>
<span className="text-sm font-semibold text-lime-400">₹290</span>
</div>
<p className="text-xs text-neutral-500 leading-relaxed mb-5 line-clamp-2 font-light">Wood-fired base with spiced paneer.</p>
<button className="mt-auto w-full py-2.5 rounded-lg bg-neutral-800 text-neutral-300 text-xs font-medium hover:bg-white hover:text-black transition-all" onclick="addToCart(2)">
                            Add to Chat Order
                        </button>
</div>
</div><div className="group flex flex-col gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-300">
<div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-800 relative shadow-inner">
<img alt="White Sauce Pasta" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex flex-col flex-1">
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-medium text-white tracking-tight">White Sauce Pasta</h3>
<span className="text-sm font-semibold text-lime-400">₹240</span>
</div>
<p className="text-xs text-neutral-500 leading-relaxed mb-5 line-clamp-2 font-light">Penne pasta in creamy sauce.</p>
<button className="mt-auto w-full py-2.5 rounded-lg bg-neutral-800 text-neutral-300 text-xs font-medium hover:bg-white hover:text-black transition-all" onclick="addToCart(3)">
                            Add to Chat Order
                        </button>
</div>
</div><div className="group flex flex-col gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-300">
<div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-800 relative shadow-inner">
<img alt="Classic Cold Brew" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex flex-col flex-1">
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-medium text-white tracking-tight">Classic Cold Brew</h3>
<span className="text-sm font-semibold text-lime-400">₹160</span>
</div>
<p className="text-xs text-neutral-500 leading-relaxed mb-5 line-clamp-2 font-light">Steeped for 18 hours.</p>
<button className="mt-auto w-full py-2.5 rounded-lg bg-neutral-800 text-neutral-300 text-xs font-medium hover:bg-white hover:text-black transition-all" onclick="addToCart(4)">
                            Add to Chat Order
                        </button>
</div>
</div><div className="group flex flex-col gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-300">
<div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-800 relative shadow-inner">
<img alt="Peri Peri Fries" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex flex-col flex-1">
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-medium text-white tracking-tight">Peri Peri Fries</h3>
<span className="text-sm font-semibold text-lime-400">₹140</span>
</div>
<p className="text-xs text-neutral-500 leading-relaxed mb-5 line-clamp-2 font-light">Crispy fries with spicy seasoning.</p>
<button className="mt-auto w-full py-2.5 rounded-lg bg-neutral-800 text-neutral-300 text-xs font-medium hover:bg-white hover:text-black transition-all" onclick="addToCart(5)">
                            Add to Chat Order
                        </button>
</div>
</div><div className="group flex flex-col gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-300">
<div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-800 relative shadow-inner">
<img alt="Double Chocolate Brownie" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex flex-col flex-1">
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-medium text-white tracking-tight">Double Chocolate Brownie</h3>
<span className="text-sm font-semibold text-lime-400">₹190</span>
</div>
<p className="text-xs text-neutral-500 leading-relaxed mb-5 line-clamp-2 font-light">With vanilla ice cream.</p>
<button className="mt-auto w-full py-2.5 rounded-lg bg-neutral-800 text-neutral-300 text-xs font-medium hover:bg-white hover:text-black transition-all" onclick="addToCart(6)">
                            Add to Chat Order
                        </button>
</div>
</div></div>
</div>
</section>

<section className="z-10 border-t pt-20 pr-6 pb-20 pl-6 relative bg-neutral-900/30 border-white/5" id="about">
<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl font-medium tracking-tight mb-8 text-white">The O2 Experience</h2>
<div className="space-y-8">
<p className="text-sm leading-7 font-light text-neutral-400">
                        Nestled in Kargil Road, Agra, O2 Cafe &amp; Dining is designed for those who seek solace in details. From the roast of our beans to the plating of our courses, we promise an atmosphere of modern elegance.
                    </p>
<div className="grid grid-cols-2 gap-6">
<div className="p-4 border rounded-2xl transition-colors bg-white/5 border-white/5 hover:bg-white/10">
<iconify-icon className="mb-3 text-orange-500" icon="lucide:map-pin" width="20"></iconify-icon>
<h3 className="text-sm font-medium text-white">Location</h3>
<p className="text-xs text-neutral-500 mt-1">Shop 76, M.K. Puram,<br/>Agra – 282007</p>
</div>
<div className="p-4 border rounded-2xl transition-colors bg-white/5 border-white/5 hover:bg-white/10">
<iconify-icon className="mb-3 text-orange-500" icon="lucide:clock" width="20"></iconify-icon>
<h3 className="text-sm font-medium text-white">Hours</h3>
<p className="text-xs text-neutral-500 mt-1">Daily<br/>11:00 AM - 11:00 PM</p>
</div>
</div>
</div>
</div>
<div className="h-80 md:h-[28rem] rounded-[2rem] overflow-hidden relative shadow-2xl ring-1 ring-white/5">
<img alt="Restaurant Interior" className="hover:grayscale-0 hover:opacity-100 transition-all duration-700 hover:scale-105 opacity-60 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d477ffee-4533-4685-9508-7801f4c44bd5_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-80 pointer-events-none from-neutral-900"></div>
</div>
</div>
</section>

<footer className="z-10 border-t pt-12 pr-6 pb-12 pl-6 relative bg-zinc-950 border-white/5">
<div className="flex flex-col md:flex-row gap-8 max-w-5xl mr-auto ml-auto gap-x-8 gap-y-8 items-start justify-between">
<div className="">
<span className="text-lg font-semibold tracking-tight text-white">O2 Cafe Cafe &amp; Dining</span>
<p className="text-xs mt-2 text-neutral-600">Breath of Fresh Flavours.</p>
</div>
<div className="flex gap-6 text-xs font-medium text-neutral-500">
<a className="transition-colors hover:text-white" href="#">Instagram</a>
<a className="transition-colors hover:text-white" href="#">WhatsApp</a>
<a className="transition-colors hover:text-white" href="#">Location</a>
</div>
</div>
<div className="text-[10px] flex uppercase tracking-widest max-w-5xl border-t mt-12 mr-auto ml-auto pt-8 justify-between text-neutral-700 border-white/5">
<span className="">© 2023 O2 Cafe &amp; Dining</span>
<span className="">Design by O2 Tech</span>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden" id="cart-modal">
<div className="absolute inset-0 backdrop-blur-sm transition-opacity bg-black/60" onclick="toggleCart()"></div>
<div className="absolute right-0 top-0 bottom-0 w-full max-w-md border-l shadow-2xl flex flex-col transform transition-transform duration-300 translate-x-full bg-neutral-900 border-white/10" id="cart-panel">
<div className="p-6 border-b flex items-center justify-between border-white/5">
<h2 className="text-base font-medium tracking-tight text-white">Your Selection</h2>
<button className="p-2 rounded-full transition-colors hover:bg-white/10 text-neutral-400 hover:text-white" onclick="toggleCart()">
<iconify-icon icon="lucide:x" width="20"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6" id="cart-items-container"></div>
<div className="p-6 border-t flex flex-col gap-3 bg-neutral-900 border-white/5">
<div className="flex justify-between font-semibold text-white">
<span>Total</span>
<span id="cart-total">₹0</span>
</div>
<button className="w-full py-3 text-xs font-bold rounded-lg bg-white text-black hover:bg-neutral-200" onclick="toggleCart(); openChatWithIntent('checkout')">Proceed to AI Checkout</button>
</div>
</div>
</div>


<button className="fixed z-50 flex hover:scale-110 transition-transform duration-300 group w-14 h-14 rounded-full right-6 bottom-6 shadow-[0_0_30px_rgba(255,255,255,0.2)] items-center justify-center text-black bg-white" onclick="toggleChat()">
<iconify-icon className="group-hover:hidden" icon="lucide:message-square" width="24"></iconify-icon>
<svg className="hidden group-hover:block w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 0, 0)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9l6 6l6-6"></path></svg>
<span className="absolute top-0 right-0 h-3 w-3 rounded-full ring-2 animate-pulse bg-orange-500 ring-black"></span>
</button>

<div className="fixed bottom-24 right-4 md:right-6 w-[calc(100%-2rem)] md:w-96 h-[500px] max-h-[80vh] backdrop-blur-2xl border rounded-2xl shadow-2xl z-40 transform transition-all duration-300 translate-y-10 opacity-0 pointer-events-none flex flex-col overflow-hidden bg-neutral-900/95 border-white/10" id="chat-window">

<div className="p-4 border-b flex items-center justify-between border-white/5 bg-neutral-900/50">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr flex items-center justify-center to-green-600 from-orange-400">
<iconify-icon className="text-white" icon="lucide:bot" width="16"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-white">O2 Assistant</h3>
<p className="text-[10px] flex items-center gap-1 text-orange-400">
<span className="w-1 h-1 rounded-full bg-orange-400"></span> Online
                    </p>
</div>
</div>
<button className="text-[10px] text-neutral-500 underline hover:text-white" onclick="resetChat()">Reset</button>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth" id="chat-messages"></div>

<div className="p-4 border-t border-white/5 bg-neutral-900">
<div className="flex gap-2" id="input-container">
<input autocomplete="off" className="flex-1 border rounded-lg px-4 py-2.5 text-xs placeholder:text-neutral-500 focus:outline-none transition-colors focus:border-orange-500/50 bg-neutral-800 border-white/10 text-white" id="chat-input" placeholder="Type your order..." type="text"/>
<button className="p-2.5 rounded-lg transition-colors flex items-center justify-center hover:bg-orange-500 text-white bg-orange-600" onclick="handleUserMessage()">
<iconify-icon icon="lucide:send" width="16"></iconify-icon>
</button>
</div>

<div className="flex gap-2 overflow-x-auto mt-3 hide-scrollbar pb-1 hidden" id="quick-actions"></div>
</div>
</div>


    </>
  );
}
