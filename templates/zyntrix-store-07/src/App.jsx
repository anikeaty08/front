import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        /* --- Data & State --- */
        let state = { lang: 'en', page: 'home' };
        const PAYMENT_NUMBER = "01837194497";

        const translations = {
            en: {
                nav_home: "Home", nav_software: "Software", nav_games: "Game Top-Up", nav_contact: "Support",
                hero_title: "Premium Digital Subscriptions",
                hero_subtitle: "Instant delivery for Netflix, Spotify, Games, and Creative Tools. Trusted by thousands in Bangladesh.",
                hero_cta: "Explore Store",
                sec_featured: "Featured Products", sec_software: "Creative & Utility", sec_games: "Game Top-Up",
                footer_desc: "Bangladesh's premium destination for digital subscriptions, gaming credits, and software licenses.",
                footer_links: "Quick Links", footer_contact: "Contact",
                modal_title: "Payment Details",
                modal_instruction: "You can send money using bKash or Nagad. After sending, provide the Transaction ID. Please wait while our admin verifies your payment.",
                modal_pay_method: "Select Method",
                modal_send_money: "Send Money To (Personal)",
                modal_trx: "Transaction ID",
                modal_email: "Email / Player ID",
                modal_btn_confirm: "Verify Payment",
                card_buy: "Order Now",
                bot_welcome: "Hello! I'm Zyntrix AI. I assist with payments and verification. How can I help?",
                
                // Chat Flow
                msg_trx_received: "Transaction ID received ✅ Our admin will verify the payment. Please wait 5–30 minutes.",
                msg_verifying: "Verification in Progress...",
                msg_payment_verified: "🎉 Payment verified! Your order is now processed. You will receive your subscription / top-up shortly."
            },
            bn: {
                nav_home: "হোম", nav_software: "সফটওয়্যার", nav_games: "গেম টপ-আপ", nav_contact: "সাপোর্ট",
                hero_title: "প্রিমিয়াম ডিজিটাল সাবস্ক্রিপশন",
                hero_subtitle: "নেটফ্লিক্স, স্পটিফাই, গেমস এবং ক্রিয়েটিভ টুলের দ্রুত ডেলিভারি। বাংলাদেশের হাজারো মানুষের আস্থার প্রতীক।",
                hero_cta: "স্টোর দেখুন",
                sec_featured: "জনপ্রিয় প্রোডাক্ট", sec_software: "সফটওয়্যার ও টুলস", sec_games: "গেম টপ-আপ",
                footer_desc: "ডিজিটাল সাবস্ক্রিপশন, গেমিং ক্রেডিট এবং সফটওয়্যার লাইসেন্সের জন্য বাংলাদেশের প্রিমিয়াম গন্তব্য।",
                footer_links: "কুইক লিঙ্ক", footer_contact: "যোগাযোগ",
                modal_title: "পেমেন্ট ডিটেইলস",
                modal_instruction: "আপনি বিকাশ বা নগদ ব্যবহার করে পেমেন্ট করতে পারেন। Payment করার পর Transaction ID আমাদের দিন। যাচাইয়ের জন্য কিছুক্ষণ অপেক্ষা করুন।",
                modal_pay_method: "পেমেন্ট মাধ্যম",
                modal_send_money: "সেন্ড মানি নাম্বার (পার্সোনাল)",
                modal_trx: "ট্রানজেকশন আইডি",
                modal_email: "ইমেইল / প্লেয়ার আইডি",
                modal_btn_confirm: "পেমেন্ট ভেরিফাই করুন",
                card_buy: "অর্ডার করুন",
                bot_welcome: "নমস্কার! আমি জিনেট্রিক্স এআই। পেমেন্ট এবং ভেরিফিকেশনে আমি সাহায্য করছি।",

                // Chat Flow
                msg_trx_received: "Transaction ID পেয়েছি ✅ আমাদের অ্যাডমিন পেমেন্ট যাচাই করবেন। অনুগ্রহ করে ৫–৩০ মিনিট অপেক্ষা করুন।",
                msg_verifying: "পেমেন্ট যাচাই করা হচ্ছে...",
                msg_payment_verified: "🎉 পেমেন্ট সফলভাবে যাচাই হয়েছে! এখন আপনার অর্ডার প্রসেস করা হচ্ছে। অল্প সময়ের মধ্যেই আপনার সাবস্ক্রিপশন / টপ-আপ ডেলিভারি পাবেন।"
            }
        };

        const products = [
            { id: 1, type: 'streaming', name: 'Netflix Premium', price: '400 BDT', sub: '1 Month / 4K UHD', icon: 'logos:netflix-icon' },
            { id: 2, type: 'streaming', name: 'Spotify Premium', price: '150 BDT', sub: 'Individual / 1 Month', icon: 'logos:spotify-icon' },
            { id: 3, type: 'software', name: 'CapCut Pro', price: '350 BDT', sub: 'Pro Features Unlocked', icon: 'simple-icons:capcut' },
            { id: 4, type: 'game', name: 'PUBG Mobile UC', price: '120 BDT', sub: '60 UC Global', icon: 'solar:gamepad-linear' },
            { id: 5, type: 'game', name: 'Free Fire Diamonds', price: '90 BDT', sub: '115 Diamonds', icon: 'solar:flame-linear' },
            { id: 6, type: 'software', name: 'Adobe Photoshop', price: '800 BDT', sub: 'Pre-activated / Lifetime', icon: 'logos:adobe-photoshop' },
            { id: 7, type: 'gift', name: 'Google Play Gift Card', price: '550 BDT', sub: '$5 USD Region US', icon: 'logos:google-play-icon' },
            { id: 8, type: 'software', name: 'Canva Pro', price: '99 BDT', sub: 'Education/Team Invite', icon: 'logos:canva' },
        ];

        /* --- Initialization --- */
        document.addEventListener('DOMContentLoaded', () => { router('home'); });

        /* --- Routing --- */
        function router(pageName) {
            state.page = pageName;
            const main = document.getElementById('mainContent');
            window.scrollTo(0, 0);
            
            let content = '';
            if (pageName === 'home') {
                content = `
                    <section class="min-h-[80vh] flex flex-col justify-center items-center text-center relative mb-20">
                        <div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950"></div>
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-6 animate-fade-in">
                            <span class="relative flex h-2 w-2">
                              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                              <span class="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                            </span>
                            Trusted by 10k+ Gamers & Creators
                        </div>
                        <h1 class="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6 leading-[1.1] animate-fade-in text-glow">
                            <span data-key="hero_title">${t('hero_title')}</span>
                        </h1>
                        <p class="text-slate-400 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed animate-fade-in" style="animation-delay: 0.1s" data-key="hero_subtitle">${t('hero_subtitle')}</p>
                        <button onclick="router('software')" class="px-8 py-3.5 bg-white text-slate-950 font-medium rounded-full hover:bg-indigo-50 transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] animate-fade-in" style="animation-delay: 0.2s">
                            <span data-key="hero_cta">${t('hero_cta')}</span> <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                        </button>
                    </section>
                    <section class="mb-20">
                        <div class="flex items-center justify-between mb-8"><h2 class="text-2xl font-medium text-white tracking-tight" data-key="sec_featured">${t('sec_featured')}</h2></div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">${renderProductGrid(products.slice(0, 4))}</div>
                    </section>
                `;
            } else if (pageName === 'software' || pageName === 'streaming') {
                content = `<div class="mb-8 pt-6"><h2 class="text-3xl font-medium text-white tracking-tight mb-2" data-key="sec_software">${t('sec_software')}</h2></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">${renderProductGrid(products.filter(p => p.type === 'software' || p.type === 'streaming'))}</div>`;
            } else if (pageName === 'games') {
                content = `<div class="mb-8 pt-6"><h2 class="text-3xl font-medium text-white tracking-tight mb-2" data-key="sec_games">${t('sec_games')}</h2></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">${renderProductGrid(products.filter(p => p.type === 'game' || p.type === 'gift'))}</div>`;
            } else if (pageName === 'contact') {
                content = `
                    <div class="max-w-2xl mx-auto pt-10">
                        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
                            <div class="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-6"><iconify-icon icon="solar:headphones-round-sound-linear" class="text-indigo-400" width="32"></iconify-icon></div>
                            <h2 class="text-2xl font-medium text-white mb-2">Support</h2>
                            <p class="text-slate-400 text-sm mb-8">We are available from 10:00 AM to 12:00 AM (BDT).</p>
                            <div class="space-y-4 text-left">
                                <a href="#" class="block p-4 rounded-xl border border-slate-800 bg-slate-950/50 flex items-center gap-4"><iconify-icon icon="logos:whatsapp-icon" width="24"></iconify-icon><div><div class="text-white text-sm font-medium">WhatsApp</div><div class="text-slate-500 text-xs">${PAYMENT_NUMBER}</div></div></a>
                            </div>
                        </div>
                    </div>
                `;
            }
            main.innerHTML = content;
        }

        function renderProductGrid(items) {
            return items.map(p => `
                <div class="group relative bg-slate-900 rounded-xl p-5 border border-slate-800 hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] transition-all duration-300 overflow-hidden">
                    <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity duration-500"><iconify-icon icon="solar:arrow-right-up-linear" class="text-indigo-400" width="20"></iconify-icon></div>
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-white"><iconify-icon icon="${p.icon}" width="24"></iconify-icon></div>
                        <div><div class="text-xs text-slate-500 uppercase tracking-wider">${p.type}</div><h3 class="text-white font-medium leading-tight">${p.name}</h3></div>
                    </div>
                    <p class="text-sm text-slate-400 mb-6">${p.sub}</p>
                    <div class="flex items-center justify-between mt-auto">
                        <span class="text-lg font-semibold text-white tracking-tight">${p.price}</span>
                        <button onclick="openOrderModal('${p.name}', '${p.price}', '${p.icon}')" class="px-4 py-2 bg-slate-800 hover:bg-white hover:text-black text-white text-xs font-medium rounded-lg transition-all duration-300" data-key="card_buy">${t('card_buy')}</button>
                    </div>
                </div>
            `).join('');
        }

        /* --- Language --- */
        function toggleLanguage() {
            state.lang = state.lang === 'en' ? 'bn' : 'en';
            document.getElementById('currentLangLabel').innerText = state.lang.toUpperCase();
            document.body.classList.toggle('lang-bn', state.lang === 'bn');
            document.querySelectorAll('[data-key]').forEach(el => el.innerText = translations[state.lang][el.getAttribute('data-key')] || el.innerText);
            const welcomeMsg = document.querySelector('.bot-welcome');
            if(welcomeMsg) welcomeMsg.innerText = translations[state.lang].bot_welcome;
            router(state.page);
        }
        function t(key) { return translations[state.lang][key] || key; }

        /* --- Chatbot Logic --- */
        function toggleChat() {
            const chatWin = document.getElementById('chat-window');
            if (chatWin.classList.contains('hidden')) {
                chatWin.classList.remove('hidden');
                setTimeout(() => chatWin.classList.remove('scale-95', 'opacity-0'), 10);
                document.getElementById('chat-input').focus();
            } else {
                chatWin.classList.add('scale-95', 'opacity-0');
                setTimeout(() => chatWin.classList.add('hidden'), 300);
            }
        }

        function handleChatSubmit(e) {
            e.preventDefault();
            const inputEl = document.getElementById('chat-input');
            const message = inputEl.value.trim();
            if (!message) return;
            addMessage(message, 'user');
            inputEl.value = '';
            
            // Basic Response
            setTimeout(() => {
                const lowerInput = message.toLowerCase();
                if(lowerInput.includes('bkash') || lowerInput.includes('nagad') || lowerInput.includes('number')) {
                    addMessage(state.lang === 'en' ? `Our bKash/Nagad number is: ${PAYMENT_NUMBER}` : `আমাদের বিকাশ/নগদ নাম্বার: ${PAYMENT_NUMBER}`, 'bot');
                } else {
                     addMessage(state.lang === 'en' ? "Please use the 'Buy' button on a product to start an order. I will guide you through verification." : "অর্ডার করতে প্রোডাক্টের 'Order' বাটনে ক্লিক করুন। আমি আপনাকে ভেরিফিকেশনে সাহায্য করবো।", 'bot');
                }
            }, 800);
        }

        function addMessage(text, sender) {
            const container = document.getElementById('chat-messages');
            const div = document.createElement('div');
            div.className = sender === 'user' ? "flex justify-end animate-fade-in" : "flex gap-3 animate-fade-in";
            div.innerHTML = sender === 'user' ? 
                `<div class="bg-indigo-600 text-white rounded-2xl rounded-tr-none px-4 py-2 text-sm max-w-[85%]">${text}</div>` : 
                `<div class="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-1"><iconify-icon icon="solar:robot-linear" class="text-indigo-400" width="14"></iconify-icon></div><div class="bg-slate-800/50 border border-white/5 rounded-2xl rounded-tl-none p-3 text-sm text-slate-300 max-w-[85%]">${text}</div>`;
            container.appendChild(div);
            container.scrollTop = container.scrollHeight;
        }

        function addCustomComponent(html) {
             const container = document.getElementById('chat-messages');
             const div = document.createElement('div');
             div.className = "flex gap-3 animate-fade-in";
             div.innerHTML = `
                <div class="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-1"><iconify-icon icon="solar:robot-linear" class="text-indigo-400" width="14"></iconify-icon></div>
                <div class="w-full max-w-[85%]">${html}</div>
             `;
             container.appendChild(div);
             container.scrollTop = container.scrollHeight;
        }

        /* --- Modal Logic --- */
        function openOrderModal(name, price, icon) {
            document.getElementById('orderModal').classList.remove('hidden');
            document.getElementById('modal-product-name').innerText = name;
            document.getElementById('modal-product-price').innerText = price;
            document.getElementById('modal-img-container').innerHTML = `<iconify-icon icon="${icon}" class="text-white w-full h-full flex items-center justify-center text-2xl"></iconify-icon>`;
            document.getElementById('payment-number').innerText = PAYMENT_NUMBER;
            document.getElementById('trx-id').value = '';
        }

        function closeOrderModal() { document.getElementById('orderModal').classList.add('hidden'); }
        function copyNumber() {
            navigator.clipboard.writeText(PAYMENT_NUMBER);
            const btn = document.querySelector('button[title="Copy"]');
            btn.innerHTML = `<iconify-icon icon="solar:check-circle-linear" class="text-emerald-400"></iconify-icon>`;
            setTimeout(() => btn.innerHTML = `<iconify-icon icon="solar:copy-linear"></iconify-icon>`, 2000);
        }

        function submitOrder() {
            const trx = document.getElementById('trx-id').value;
            const contact = document.getElementById('user-contact').value;

            if (trx.length < 5 || !contact) {
                alert(state.lang === 'en' ? "Please enter valid Transaction ID and Email." : "দয়া করে সঠিক ট্রানজেকশন আইডি এবং ইমেইল দিন।");
                return;
            }

            closeOrderModal();
            
            // --- AI Payment Verification Flow ---
            const chatWin = document.getElementById('chat-window');
            if(chatWin.classList.contains('hidden')) toggleChat();

            // Step 2: Receive & Wait
            setTimeout(() => {
                addMessage(t('msg_trx_received'), 'bot');
            }, 500);

            // Step 3: Visual Wait Mode
            setTimeout(() => {
                const verifyingHTML = `
                    <div class="bg-slate-800/80 border border-white/5 rounded-xl p-4 space-y-3">
                        <div class="flex items-center gap-3 mb-2">
                             <div class="relative w-8 h-8 flex items-center justify-center">
                                 <div class="absolute inset-0 rounded-full border-2 border-indigo-500/30"></div>
                                 <div class="absolute inset-0 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin"></div>
                                 <iconify-icon icon="solar:hourglass-linear" class="text-indigo-400 text-xs"></iconify-icon>
                             </div>
                             <div>
                                 <div class="text-xs text-slate-400 font-medium">Status</div>
                                 <div class="text-sm text-white font-medium" id="verify-status-text">${t('msg_verifying')}</div>
                             </div>
                        </div>
                        <div class="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                            <div class="h-full bg-indigo-500 animate-stripes w-full"></div>
                        </div>
                        <div class="flex justify-between text-[10px] text-slate-500">
                             <span>Admin Checking...</span>
                             <span>ID: ${trx}</span>
                        </div>
                    </div>
                `;
                addCustomComponent(verifyingHTML);
            }, 1500);

            // Step 4: Success Simulation (Admin Confirm)
            setTimeout(() => {
                // Update previous status card logic (visual simulation only here)
                const successHTML = `
                    <div class="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 flex gap-3 items-start animate-fade-in">
                        <div class="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                            <iconify-icon icon="solar:check-circle-bold" width="18"></iconify-icon>
                        </div>
                        <div>
                            <h4 class="text-sm font-semibold text-white mb-1">Payment Successful</h4>
                            <p class="text-xs text-emerald-100/80 leading-relaxed">${t('msg_payment_verified')}</p>
                        </div>
                    </div>
                `;
                addCustomComponent(successHTML);
            }, 6000); // 6s wait for demo
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative min-h-screen flex flex-col" id="app">

<nav className="fixed top-0 w-full z-50 glass border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#" onclick="router('home')">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white font-semibold tracking-tighter shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">Z</div>
<span className="text-lg font-medium tracking-tight text-white group-hover:text-indigo-300 transition-colors">ZYNTRIX</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<button className="hover:text-white transition-colors nav-item" data-key="nav_home" onclick="router('home')">Home</button>
<button className="hover:text-white transition-colors nav-item" data-key="nav_software" onclick="router('software')">Software</button>
<button className="hover:text-white transition-colors nav-item" data-key="nav_games" onclick="router('games')">Game Top-Up</button>
<button className="hover:text-white transition-colors nav-item" data-key="nav_contact" onclick="router('contact')">Support</button>
</div>
<div className="flex items-center gap-4">
<button className="flex items-center gap-1.5 text-xs font-medium bg-slate-800/50 hover:bg-slate-800 border border-white/10 rounded-full px-3 py-1.5 transition-all text-slate-300" id="langToggle" onclick="toggleLanguage()">
<iconify-icon icon="solar:global-linear" width="14"></iconify-icon>
<span id="currentLangLabel">EN</span>
</button>
<button className="md:hidden text-slate-300 hover:text-white" onclick="document.getElementById('mobileMenu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:hidden glass border-t border-white/5 p-4 flex flex-col gap-4" id="mobileMenu">
<button className="text-left text-sm text-slate-300" data-key="nav_home" onclick="router('home')">Home</button>
<button className="text-left text-sm text-slate-300" data-key="nav_software" onclick="router('software')">Software</button>
<button className="text-left text-sm text-slate-300" data-key="nav_games" onclick="router('games')">Game Top-Up</button>
<button className="text-left text-sm text-slate-300" data-key="nav_contact" onclick="router('contact')">Support</button>
</div>
</nav>

<main className="flex-grow pt-24 pb-12 px-6" id="mainContent">

</main>

<footer className="border-t border-white/5 bg-slate-950/50 py-12">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-2">
<h3 className="text-lg font-medium tracking-tight text-white mb-4">ZYNTRIX SHOP</h3>
<p className="text-sm text-slate-500 max-w-xs" data-key="footer_desc">
                        Bangladesh's premium destination for digital subscriptions, gaming credits, and software licenses.
                    </p>
<div className="flex gap-4 mt-6">
<iconify-icon className="opacity-70 grayscale hover:grayscale-0 transition-all" icon="logos:bkash" width="40"></iconify-icon>
<iconify-icon className="opacity-50 grayscale hover:grayscale-0 transition-all" icon="logos:mastercard" width="30"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4" data-key="footer_links">Quick Links</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#" onclick="router('software')">Software</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#" onclick="router('games')">Game Top-Up</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4" data-key="footer_contact">Contact</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-center gap-2"><iconify-icon icon="solar:phone-linear"></iconify-icon> +880 1837-194497</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:letter-linear"></iconify-icon> support@zyntrix.com</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-xs text-slate-600 flex justify-between items-center">
<p>© 2024 Zyntrix Shop. All rights reserved.</p>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none" id="chatbot-container">

<div className="pointer-events-auto hidden w-80 md:w-96 bg-slate-900/95 backdrop-blur-xl border border-indigo-500/20 rounded-2xl shadow-2xl shadow-indigo-900/20 overflow-hidden flex flex-col mb-4 transition-all duration-300 origin-bottom-right transform scale-95 opacity-0" id="chat-window">
<div className="p-4 border-b border-white/5 bg-slate-900 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:stars-minimalistic-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white">Zyntrix AI</h4>
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs text-slate-400">Online | Admin Verified</span>
</div>
</div>
</div>
<button className="text-slate-400 hover:text-white" onclick="toggleChat()"><iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon></button>
</div>
<div className="h-80 overflow-y-auto p-4 space-y-4 bg-slate-950/50" id="chat-messages">
<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-1">
<iconify-icon className="text-indigo-400" icon="solar:robot-linear" width="14"></iconify-icon>
</div>
<div className="bg-slate-800/50 border border-white/5 rounded-2xl rounded-tl-none p-3 text-sm text-slate-300">
<p className="bot-welcome">Hello! I'm Zyntrix AI. I assist with payments and verification. How can I help?</p>
</div>
</div>
</div>
<div className="p-3 bg-slate-900 border-t border-white/5">
<form className="relative" onsubmit="handleChatSubmit(event)">
<input className="w-full bg-slate-800 text-sm text-white placeholder-slate-500 rounded-xl pl-4 pr-10 py-2.5 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 transition-all" id="chat-input" placeholder="Type here..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 text-indigo-400 hover:text-indigo-300 p-1" type="submit">
<iconify-icon icon="solar:plain-3-linear" width="20"></iconify-icon>
</button>
</form>
</div>
</div>

<button className="pointer-events-auto group flex items-center gap-3" onclick="toggleChat()">
<span className="bg-slate-800 text-slate-200 text-xs py-1.5 px-3 rounded-lg border border-white/10 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">Need Help? / সাহায্য চাই?</span>
<div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/30 hover:scale-110 transition-transform cursor-pointer relative">
<span className="absolute top-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-slate-900 rounded-full"></span>
<iconify-icon icon="solar:chat-round-dots-linear" width="28"></iconify-icon>
</div>
</button>
</div>

<div className="fixed inset-0 z-[60] hidden" id="orderModal">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onclick="closeOrderModal()"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6">
<div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden relative animate-fade-in">

<div className="p-5 border-b border-white/5 flex justify-between items-center bg-slate-900/50">
<h3 className="text-lg font-medium text-white flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:card-send-linear"></iconify-icon>
<span data-key="modal_title">Payment Details</span>
</h3>
<button className="text-slate-400 hover:text-white" onclick="closeOrderModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<div className="p-6 space-y-5">
<div className="flex items-center gap-4 p-3 bg-slate-800/30 rounded-lg border border-white/5">
<div className="w-12 h-12 rounded bg-slate-700 overflow-hidden" id="modal-img-container"></div>
<div>
<h4 className="text-sm font-medium text-white" id="modal-product-name">Product Name</h4>
<p className="text-xs text-indigo-400" id="modal-product-price">00 BDT</p>
</div>
</div>

<div className="text-xs text-slate-300 leading-relaxed bg-indigo-500/10 border border-indigo-500/20 p-3 rounded-lg flex gap-3">
<iconify-icon className="text-indigo-400 flex-shrink-0 text-lg" icon="solar:info-circle-linear"></iconify-icon>
<p data-key="modal_instruction">You can send money using bKash or Nagad. After sending, provide the Transaction ID below.</p>
</div>
<div className="space-y-3">
<label className="block text-xs font-medium text-slate-400" data-key="modal_pay_method">Payment Method</label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer group">
<input checked="" className="peer sr-only" name="payment" onchange="updatePaymentInst()" type="radio" value="bkash"/>
<div className="p-3 rounded-lg border border-slate-700 bg-slate-800/50 peer-checked:border-pink-500 peer-checked:bg-pink-500/10 transition-all flex flex-col items-center justify-center gap-1 group-hover:bg-slate-800">
<div className="flex items-center gap-2 text-slate-300 peer-checked:text-pink-400">
<iconify-icon className="grayscale peer-checked:grayscale-0" icon="logos:bkash" width="20"></iconify-icon>
<span className="text-sm font-medium">bKash</span>
</div>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="payment" onchange="updatePaymentInst()" type="radio" value="nagad"/>
<div className="p-3 rounded-lg border border-slate-700 bg-slate-800/50 peer-checked:border-orange-500 peer-checked:bg-orange-500/10 transition-all flex flex-col items-center justify-center gap-1 group-hover:bg-slate-800">
<div className="flex items-center gap-2 text-slate-300 peer-checked:text-orange-400">
<iconify-icon className="peer-checked:text-orange-500" icon="simple-icons:nagad" width="20"></iconify-icon>
<span className="text-sm font-medium">Nagad</span>
</div>
</div>
</label>
</div>
</div>

<div className="p-3 bg-slate-950 border border-slate-800 rounded-lg flex justify-between items-center group">
<div>
<p className="text-[10px] text-slate-500 uppercase tracking-wider mb-0.5" data-key="modal_send_money">Send Money (Personal)</p>
<p className="font-mono text-lg text-white font-medium tracking-wide" id="payment-number">01837194497</p>
</div>
<button className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-md transition-colors" onclick="copyNumber()" title="Copy">
<iconify-icon icon="solar:copy-linear"></iconify-icon>
</button>
</div>
<div className="space-y-4">
<div className="space-y-1">
<label className="block text-xs font-medium text-slate-400" data-key="modal_trx">Transaction ID</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors uppercase font-mono" id="trx-id" placeholder="8N7..." type="text"/>
</div>
<div className="space-y-1">
<label className="block text-xs font-medium text-slate-400" data-key="modal_email">Your Email / Player ID</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" id="user-contact" placeholder="example@mail.com" type="text"/>
</div>
</div>
</div>

<div className="p-5 border-t border-white/5 bg-slate-900/50">
<button className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2" onclick="submitOrder()">
<span data-key="modal_btn_confirm">Verify Payment</span>
<iconify-icon icon="solar:shield-check-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
