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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Mobile Menu Logic
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const links = document.querySelectorAll('.mobile-link');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
            });
        });

        // Chatbot Logic
        const chatToggle = document.getElementById('chat-toggle');
        const chatWindow = document.getElementById('chat-window');
        const closeChat = document.getElementById('close-chat');
        const chatMessages = document.getElementById('chat-messages');
        const chatInput = document.getElementById('chat-input');
        const sendBtn = document.getElementById('send-btn');
        const quickRepliesContainer = document.getElementById('quick-replies');

        let chatOpen = false;
        let currentStep = 'init';
        let orderData = { meal: '', qty: '', location: '' };

        function toggleChat() {
            chatOpen = !chatOpen;
            if (chatOpen) {
                chatWindow.classList.remove('scale-0', 'opacity-0', 'invisible');
                chatWindow.classList.add('scale-100', 'opacity-100', 'visible');
                chatToggle.classList.add('scale-0', 'opacity-0', 'invisible');
                chatToggle.classList.remove('animate-bounce');
                
                // Initialize chat if empty
                if(chatMessages.children.length === 0) {
                    setTimeout(() => {
                        addMessage("Hello 👋 Welcome to Akwaaba Bites.<br>Would you like to see our menu or place an order?", "bot", true);
                        setTimeout(showQuickReplies, 600);
                    }, 300);
                }
            } else {
                chatWindow.classList.remove('scale-100', 'opacity-100', 'visible');
                chatWindow.classList.add('scale-0', 'opacity-0', 'invisible');
                chatToggle.classList.remove('scale-0', 'opacity-0', 'invisible');
            }
        }

        chatToggle.addEventListener('click', toggleChat);
        closeChat.addEventListener('click', toggleChat);

        function addMessage(text, sender = 'bot', isHtml = false) {
            const msgDiv = document.createElement('div');
            msgDiv.className = `flex w-full ${sender === 'user' ? 'justify-end' : 'justify-start'}`;
            
            const innerDiv = document.createElement('div');
            innerDiv.className = `max-w-[85%] px-4 py-2.5 text-sm ${
                sender === 'user' 
                ? 'bg-orange-600 text-white rounded-2xl rounded-tr-sm shadow-sm' 
                : 'bg-white border border-gray-100 text-gray-800 rounded-2xl rounded-tl-sm shadow-sm'
            }`;
            
            if (isHtml) {
                innerDiv.innerHTML = text;
            } else {
                innerDiv.textContent = text;
            }
            
            msgDiv.appendChild(innerDiv);
            chatMessages.appendChild(msgDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function showQuickReplies() {
            quickRepliesContainer.innerHTML = '';
            quickRepliesContainer.classList.remove('hidden');
            
            const replies = [
                { id: 'menu', text: '📋 View Menu' },
                { id: 'order', text: '🛒 Place Order' },
                { id: 'location', text: '📍 Location' },
                { id: 'support', text: '💬 Contact Support' }
            ];

            replies.forEach(reply => {
                const btn = document.createElement('button');
                btn.className = 'whitespace-nowrap px-3.5 py-2 bg-white hover:bg-orange-50 text-gray-700 hover:text-orange-700 rounded-full text-xs font-medium transition-colors border border-gray-200 hover:border-orange-200 shadow-sm';
                btn.textContent = reply.text;
                btn.onclick = () => handleQuickReply(reply.id, reply.text);
                quickRepliesContainer.appendChild(btn);
            });
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function handleQuickReply(action, text) {
            addMessage(text, 'user');
            quickRepliesContainer.classList.add('hidden');

            setTimeout(() => {
                if (action === 'menu') {
                    addMessage("You can view our delicious offerings in the Menu section on our page! Let me know if you're ready to order.", 'bot');
                    currentStep = 'init';
                    setTimeout(showQuickReplies, 1200);
                } else if (action === 'location') {
                    addMessage("We are located in Accra, Ghana. We deliver all across the metropolitan area!", 'bot');
                    currentStep = 'init';
                    setTimeout(showQuickReplies, 1200);
                } else if (action === 'support') {
                    addMessage('Our team is ready to help! You can reach support directly via WhatsApp by clicking <a href="https://wa.me/233246070047" target="_blank" class="text-orange-600 font-medium hover:underline">here</a>.', 'bot', true);
                    currentStep = 'init';
                    setTimeout(showQuickReplies, 1200);
                } else if (action === 'order') {
                    currentStep = 'ask_meal';
                    addMessage("Great! What meal would you like to order today?", 'bot');
                }
            }, 600);
        }

        function handleSend() {
            const text = chatInput.value.trim();
            if (!text) return;

            addMessage(text, 'user');
            chatInput.value = '';
            quickRepliesContainer.classList.add('hidden');

            setTimeout(() => {
                processOrderStep(text);
            }, 600);
        }

        sendBtn.addEventListener('click', handleSend);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSend();
        });

        function processOrderStep(text) {
            if (currentStep === 'ask_meal') {
                orderData.meal = text;
                currentStep = 'ask_qty';
                addMessage(`Yum! "${text}" is a great choice. How many portions would you like?`, 'bot');
            } else if (currentStep === 'ask_qty') {
                orderData.qty = text;
                currentStep = 'ask_location';
                addMessage("Got it! Where should we deliver this to? (Please provide your address or landmark)", 'bot');
            } else if (currentStep === 'ask_location') {
                orderData.location = text;
                currentStep = 'done';
                
                const summaryText = `
                    <div class="space-y-3">
                        <p class="font-medium text-gray-900">Here is your order summary:</p>
                        <div class="bg-gray-50 p-3 rounded-xl border border-gray-100 text-xs space-y-1.5 text-gray-600">
                            <p><strong class="text-gray-900">Meal:</strong> ${orderData.meal}</p>
                            <p><strong class="text-gray-900">Quantity:</strong> ${orderData.qty}</p>
                            <p><strong class="text-gray-900">Location:</strong> ${orderData.location}</p>
                        </div>
                        <p class="text-xs">Click the button below to confirm your order on WhatsApp!</p>
                    </div>
                `;
                addMessage(summaryText, 'bot', true);

                const waText = encodeURIComponent(`Hello, I would like to confirm my order.\n\nMeal: ${orderData.meal}\nQuantity: ${orderData.qty}\nLocation: ${orderData.location}`);
                const waUrl = `https://wa.me/233246070047?text=${waText}`;

                setTimeout(() => {
                    const actionDiv = document.createElement('div');
                    actionDiv.className = `flex w-full justify-start mt-2`;
                    actionDiv.innerHTML = `
                        <a href="${waUrl}" target="_blank" class="bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-2.5 rounded-xl text-sm font-medium shadow-sm transition-all flex items-center gap-2 hover:-translate-y-0.5">
                            <iconify-icon icon="solar:chat-round-dots-bold" width="18"></iconify-icon>
                            Confirm on WhatsApp
                        </a>
                    `;
                    chatMessages.appendChild(actionDiv);
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                    
                    orderData = { meal: '', qty: '', location: '' };
                    currentStep = 'init';
                    setTimeout(showQuickReplies, 2000);
                }, 800);
            } else {
                // Natural language fallback simulation
                const lowerText = text.toLowerCase();
                if (lowerText.includes('order') || lowerText.includes('buy') || lowerText.includes('food')) {
                    handleQuickReply('order', 'Place Order');
                } else if (lowerText.includes('menu')) {
                    handleQuickReply('menu', 'View Menu');
                } else {
                    addMessage("I'm an AI assistant in training! 🤖 If you're ready to place an order, just use the quick replies below or type 'order'.", 'bot');
                    setTimeout(showQuickReplies, 1000);
                }
            }
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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white shadow-sm group-hover:shadow-md transition-all">
<iconify-icon icon="solar:chef-hat-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-gray-900">Akwaaba Bites</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors" href="#menu">Menu</a>
<a className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors" href="#testimonials">Testimonials</a>
<a className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors" href="#contact">Contact</a>
</div>

<div className="hidden md:flex">
<a className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5" href="https://wa.me/233246070047?text=Hello,%20I%20would%20like%20to%20place%20an%20order." rel="noopener noreferrer" target="_blank">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        Order on WhatsApp
                    </a>
</div>

<button className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</div>

<div className="hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl py-4 px-6 flex-col gap-4" id="mobile-menu">
<a className="block py-2 text-base font-medium text-gray-800 mobile-link" href="#about">About Us</a>
<a className="block py-2 text-base font-medium text-gray-800 mobile-link" href="#menu">Our Menu</a>
<a className="block py-2 text-base font-medium text-gray-800 mobile-link" href="#testimonials">Testimonials</a>
<a className="block py-2 text-base font-medium text-gray-800 mobile-link" href="#contact">Contact &amp; Location</a>
<a className="mt-4 flex items-center justify-center gap-2 bg-[#25D366] text-white w-full py-3 rounded-xl text-sm font-semibold shadow-sm" href="https://wa.me/233246070047?text=Hello,%20I%20would%20like%20to%20place%20an%20order." target="_blank">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Order on WhatsApp
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">

<div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs font-semibold mb-6">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="16"></iconify-icon>
                        Authentic Taste of Ghana
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.1] mb-6">
                        Delicious Meals <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Delivered Fresh.</span>
</h1>
<p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                        Experience the rich, vibrant flavors of local Ghanaian dishes and savory fast food. Prepared with passion, delivered hot to your doorstep.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-orange-600 hover:bg-orange-700 text-white rounded-full text-base font-semibold transition-all shadow-sm hover:shadow-md" href="https://wa.me/233246070047?text=Hello,%20I%20would%20like%20to%20place%20an%20order." target="_blank">
                            Order Now
                            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-white border border-gray-200 hover:border-orange-200 hover:bg-orange-50 text-gray-700 rounded-full text-base font-semibold transition-all" href="#menu">
                            View Menu
                        </a>
</div>
</div>

<div className="relative w-full aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border border-gray-100">
<img alt="Delicious African Food" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>

<div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-500 font-medium">Always using</p>
<p className="text-sm font-semibold text-gray-900 tracking-tight">Fresh Ingredients</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-gray-100" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mx-auto text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">Crafting Joy Through Food</h2>
<p className="text-base text-gray-600 leading-relaxed">
                    At Akwaaba Bites, our passion is deeply rooted in the rich culinary heritage of Ghana. We believe that every meal should be an experience—a comforting reminder of home. We carefully select the finest local ingredients and prepare every dish with love to ensure premium quality and unparalleled customer satisfaction.
                </p>
</div>
<div className="grid sm:grid-cols-3 gap-8">

<div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center hover:-translate-y-1 transition-transform">
<div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
<iconify-icon icon="solar:fire-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Authentic Recipes</h3>
<p className="text-sm text-gray-600">Traditional methods passed down through generations for that genuine homemade taste.</p>
</div>

<div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center hover:-translate-y-1 transition-transform">
<div className="w-14 h-14 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Fast Delivery</h3>
<p className="text-sm text-gray-600">Hot and fresh directly from our kitchen to your door, right when you crave it.</p>
</div>

<div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center hover:-translate-y-1 transition-transform">
<div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Made with Love</h3>
<p className="text-sm text-gray-600">Every ingredient is handpicked to ensure the highest quality and maximum satisfaction.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]" id="menu">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-3">Explore Our Menu</h2>
<p className="text-base text-gray-600 max-w-xl">From comforting local classics to refreshing drinks, find your new favorite meal below.</p>
</div>
<div className="flex-shrink-0">
<a className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm hover:text-orange-700 transition-colors" href="https://wa.me/233246070047?text=Hello,%20I%20would%20like%20to%20place%20an%20order." target="_blank">
                        Download Full Menu PDF
                        <iconify-icon icon="solar:document-download-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="flex overflow-x-auto gap-4 mb-10 pb-4 no-scrollbar">
<button className="px-5 py-2 rounded-full bg-gray-900 text-white text-sm font-medium whitespace-nowrap shadow-sm">All</button>
<button className="px-5 py-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-medium whitespace-nowrap transition-colors">Local Dishes</button>
<button className="px-5 py-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-medium whitespace-nowrap transition-colors">Rice Meals</button>
<button className="px-5 py-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-medium whitespace-nowrap transition-colors">Swallow &amp; Soup</button>
<button className="px-5 py-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-medium whitespace-nowrap transition-colors">Grills</button>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

<div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
<div className="h-48 bg-gray-100 relative overflow-hidden">
<img alt="Jollof Rice" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce6aaf0d-6b2b-4f39-bf7b-e154961f1236_800w.jpg"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900 shadow-sm">GHS 65</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">Rice Meals</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Classic Jollof Rice &amp; Chicken</h3>
<p className="text-sm text-gray-500 mb-6 flex-1">Smoky, rich party jollof served with grilled chicken, kelewele, and fresh coleslaw.</p>
<a className="w-full py-2.5 rounded-xl bg-orange-50 text-orange-700 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-orange-100 transition-colors" href="https://wa.me/233246070047?text=Hello,%20I%20would%20like%20to%20order%20the%20Classic%20Jollof%20Rice%20&amp;%20Chicken." target="_blank">
<iconify-icon icon="solar:cart-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Add to Order
                        </a>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
<div className="h-48 bg-gray-100 relative overflow-hidden">
<img alt="Waakye Special" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f97f6a19-ef3e-4c41-ac98-53cbe9aa0ff1_800w.jpg"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900 shadow-sm">GHS 55</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">Local Dishes</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Waakye Special Fiesta</h3>
<p className="text-sm text-gray-500 mb-6 flex-1">Traditional waakye served with wele, egg, beef, spaghetti, gari, and our signature shito.</p>
<a className="w-full py-2.5 rounded-xl bg-orange-50 text-orange-700 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-orange-100 transition-colors" href="https://wa.me/233246070047?text=Hello,%20I%20would%20like%20to%20order%20the%20Waakye%20Special." target="_blank">
<iconify-icon icon="solar:cart-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Add to Order
                        </a>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
<div className="h-48 bg-gray-100 relative overflow-hidden">
<img alt="Fufu and Soup" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d55aec48-30cb-43dd-8a67-565c01ec6d0e_800w.jpg"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900 shadow-sm">GHS 80</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">Swallow &amp; Soup</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Fufu &amp; Goat Light Soup</h3>
<p className="text-sm text-gray-500 mb-6 flex-1">Freshly pounded fufu swimming in spicy goat meat light soup, packed with rich local spices.</p>
<a className="w-full py-2.5 rounded-xl bg-orange-50 text-orange-700 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-orange-100 transition-colors" href="https://wa.me/233246070047?text=Hello,%20I%20would%20like%20to%20order%20the%20Fufu%20&amp;%20Goat%20Light%20Soup." target="_blank">
<iconify-icon icon="solar:cart-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Add to Order
                        </a>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
<div className="h-48 bg-gray-100 relative overflow-hidden">
<img alt="Grilled Tilapia" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17086e4d-f7a0-4fdc-8640-63f3dfe2bcb8_800w.webp"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900 shadow-sm">GHS 90</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">Grills</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Spicy Grilled Tilapia &amp; Banku</h3>
<p className="text-sm text-gray-500 mb-6 flex-1">Perfectly marinated and grilled whole tilapia, served with soft banku, fresh pepper, and onions.</p>
<a className="w-full py-2.5 rounded-xl bg-orange-50 text-orange-700 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-orange-100 transition-colors" href="https://wa.me/233246070047?text=Hello,%20I%20would%20like%20to%20order%20the%20Grilled%20Tilapia%20&amp;%20Banku." target="_blank">
<iconify-icon icon="solar:cart-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Add to Order
                        </a>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
<div className="h-48 bg-gray-100 relative overflow-hidden">
<img alt="Suya" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b434194a-f40a-4be6-b52a-557887d8970e_800w.webp"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900 shadow-sm">GHS 40</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">Grills</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Beef Suya Skewers</h3>
<p className="text-sm text-gray-500 mb-6 flex-1">Tender cuts of beef coated in spicy peanut rub, grilled over open flames, served with sliced onions.</p>
<a className="w-full py-2.5 rounded-xl bg-orange-50 text-orange-700 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-orange-100 transition-colors" href="https://wa.me/233246070047?text=Hello,%20I%20would%20like%20to%20order%20the%20Beef%20Suya." target="_blank">
<iconify-icon icon="solar:cart-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Add to Order
                        </a>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
<div className="overflow-hidden flex bg-gray-100 h-48 relative items-center justify-center">

<div className="text-red-800 flex flex-col items-center">
<iconify-icon icon="solar:glass-water-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900 shadow-sm">GHS 15</div>
</div><div className="flex-1 flex flex-col pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">Drinks</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Chilled Sobolo (Bissap)</h3>
<p className="text-sm text-gray-500 mb-6 flex-1">Refreshing hibiscus drink brewed with pineapple, ginger, and cloves. Served ice cold.</p>
<a className="w-full py-2.5 rounded-xl bg-orange-50 text-orange-700 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-orange-100 transition-colors" href="https://wa.me/233246070047?text=Hello,%20I%20would%20like%20to%20order%20Sobolo." target="_blank">
<iconify-icon icon="solar:cart-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Add to Order
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-gray-100" id="testimonials">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">Loved by the Community</h2>
<p className="text-base text-gray-600">Don't just take our word for it—see what our happy customers are saying.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-gray-700 text-sm leading-relaxed mb-6 flex-1">"The Jollof tastes exactly like my grandmother used to make! The delivery was incredibly fast and the food arrived piping hot. Highly recommend!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-semibold text-sm">A</div>
<div>
<p className="text-sm font-semibold text-gray-900">Abena M.</p>
<p className="text-xs text-gray-500">Accra, GH</p>
</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-gray-700 text-sm leading-relaxed mb-6 flex-1">"Ordering via WhatsApp is so convenient. They respond instantly and are very polite. The Grilled Tilapia is out of this world."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-semibold text-sm">K</div>
<div>
<p className="text-sm font-semibold text-gray-900">Kwame D.</p>
<p className="text-xs text-gray-500">Osu, GH</p>
</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-line-duotone" width="20"></iconify-icon>
</div>
<p className="text-gray-700 text-sm leading-relaxed mb-6 flex-1">"Great portion sizes for the price. The packaging is neat and secure. Best place to satisfy local food cravings on a busy workday."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-semibold text-sm">S</div>
<div>
<p className="text-sm font-semibold text-gray-900">Sarah T.</p>
<p className="text-xs text-gray-500">East Legon, GH</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-start">

<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">Get in Touch</h2>
<p className="text-base text-gray-600 mb-8">Have a special catering request or just want to say hello? Send us a message, and we'll get back to you shortly.</p>
<form className="space-y-5" onsubmit="event.preventDefault();">
<div className="grid sm:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-sm font-medium text-gray-700">First Name</label>
<input className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" placeholder="Kwame" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-gray-700">Last Name</label>
<input className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" placeholder="Mensah" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-gray-700">Email Address</label>
<input className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" placeholder="kwame@example.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-gray-700">Your Message</label>
<textarea className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all resize-none" placeholder="How can we help you?" rows="4"></textarea>
</div>
<button className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-sm font-semibold transition-colors shadow-sm" type="submit">
                            Send Message
                        </button>
<p className="text-xs text-gray-500 text-center mt-4">For immediate orders, please use the chat assistant at the bottom right.</p>
</form>
</div>

<div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-full flex flex-col justify-center relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6 relative z-10">Our Location</h3>
<div className="space-y-6 relative z-10">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">Accra, Ghana</p>
<p className="text-sm text-gray-600 mt-1">We operate from our central kitchen in Accra. Available for delivery and pickup within the metropolitan area.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">Operating Hours</p>
<div className="text-sm text-gray-600 mt-1 space-y-1">
<p className="flex justify-between w-48"><span>Mon - Sat:</span> <span>9:00 AM - 9:00 PM</span></p>
<p className="flex justify-between w-48 text-gray-400"><span>Sunday:</span> <span>Closed</span></p>
</div>
</div>
</div>

<div className="mt-8 pt-8 border-t border-gray-100">
<p className="text-sm font-medium text-gray-900 mb-3">Ready to eat?</p>
<a className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white w-full py-3.5 rounded-xl text-base font-semibold shadow-sm transition-all hover:shadow-md" href="https://wa.me/233246070047?text=Hello,%20I%20would%20like%20to%20place%20an%20order." target="_blank">
<iconify-icon icon="solar:chat-round-dots-bold" width="22"></iconify-icon>
                                Message us on WhatsApp
                            </a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-gray-800 pb-8">

<div className="md:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:chef-hat-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-white">Akwaaba Bites</span>
</a>
<p className="text-sm text-gray-400 max-w-sm mb-6">
                        Bringing the authentic taste of Ghana directly to you. High quality, fresh ingredients, and reliable delivery.
                    </p>

<div className="flex gap-4">
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Company</h4>
<ul className="space-y-2">
<li><a className="text-sm hover:text-orange-400 transition-colors" href="#about">About Us</a></li>
<li><a className="text-sm hover:text-orange-400 transition-colors" href="#menu">Our Menu</a></li>
<li><a className="text-sm hover:text-orange-400 transition-colors" href="#testimonials">Testimonials</a></li>
<li><a className="text-sm hover:text-orange-400 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Legal</h4>
<ul className="space-y-2">
<li><a className="text-sm hover:text-orange-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm hover:text-orange-400 transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-sm hover:text-orange-400 transition-colors" href="#">Refund Policy</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
<p>© 2024 Akwaaba Bites. All rights reserved. Built with pride in Ghana.</p>
</div>
</div>
</footer>


<button aria-label="Open chat assistant" className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-orange-500 to-red-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 animate-bounce group focus:outline-none" id="chat-toggle">
<iconify-icon className="group-hover:hidden" icon="solar:chat-square-call-linear" strokeWidth="1.5" width="28"></iconify-icon>
<iconify-icon className="hidden group-hover:block" icon="solar:chat-square-call-bold" width="28"></iconify-icon>
<span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></span>
</button>

<div className="fixed bottom-6 right-6 z-[60] w-[calc(100vw-2rem)] sm:w-[380px] h-[550px] max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden transition-all duration-300 transform origin-bottom-right scale-0 opacity-0 invisible" id="chat-window">

<div className="bg-gradient-to-br from-orange-500 to-red-600 p-4 flex items-center justify-between shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm">
<iconify-icon icon="solar:smart-home-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white text-sm font-medium tracking-tight">Akwaaba Assistant</h4>
<p className="text-white/80 text-xs flex items-center gap-1">
<span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Online
                    </p>
</div>
</div>
<button className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors focus:outline-none" id="close-chat">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto p-4 flex flex-col bg-gray-50/50 space-y-4 no-scrollbar" id="chat-messages">

</div>

<div className="px-4 pb-3 flex flex-wrap gap-2 hidden bg-gray-50/50" id="quick-replies">

</div>

<div className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
<input className="flex-1 bg-gray-100 rounded-full px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-orange-500/20 text-gray-800 placeholder-gray-500 transition-all" id="chat-input" placeholder="Type a message..." type="text"/>
<button className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors shadow-sm focus:outline-none shrink-0" id="send-btn">
<iconify-icon icon="solar:plain-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>



    </>
  );
}
