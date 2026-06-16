import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
background: '#030303',
surface: '#0A0A0A',
surfaceHighlight: '#161616',
border: '#262626',
primary: '#FFFFFF',
secondary: '#A1A1AA',
brand: '#3B82F6', // Blue-500 equivalent for accents
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out forwards',
'slide-up': 'slideUp 0.5s ease-out forwards',
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { transform: 'translateY(20px)', opacity: '0' },
'100%': { transform: 'translateY(0)', opacity: '1' },
}
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // --- Auth Logic ---
        let isLoginMode = true;
        let isLoggedIn = false;

        function toggleAuthModal(mode) {
            const modal = document.getElementById('authModal');
            const content = document.getElementById('authContent');
            
            if (modal.classList.contains('opacity-0')) {
                // Open
                modal.classList.remove('hidden');
                // Trigger reflow
                void modal.offsetWidth;
                modal.classList.remove('opacity-0', 'pointer-events-none');
                content.classList.remove('scale-95');
                content.classList.add('scale-100');
                
                if(mode) {
                    isLoginMode = (mode === 'login');
                    updateAuthUI();
                }
            } else {
                // Close
                modal.classList.add('opacity-0', 'pointer-events-none');
                content.classList.remove('scale-100');
                content.classList.add('scale-95');
                setTimeout(() => {
                    modal.classList.add('hidden');
                }, 300);
            }
        }

        function switchAuthMode() {
            isLoginMode = !isLoginMode;
            updateAuthUI();
        }

        function updateAuthUI() {
            const title = document.getElementById('authTitle');
            const btnText = document.getElementById('authBtnText');
            const switchText = document.getElementById('authSwitchText');
            const switchBtn = document.getElementById('authSwitchBtn');
            const nameField = document.getElementById('nameField');
            
            if (isLoginMode) {
                title.innerText = 'Welcome Back';
                btnText.innerText = 'Sign In';
                switchText.innerText = "Don't have an account?";
                switchBtn.innerText = 'Sign Up';
                nameField.classList.add('hidden');
            } else {
                title.innerText = 'Create Account';
                btnText.innerText = 'Create Account';
                switchText.innerText = 'Already have an account?';
                switchBtn.innerText = 'Sign In';
                nameField.classList.remove('hidden');
            }
        }

        function handleAuth(e) {
            e.preventDefault();
            const btnText = document.getElementById('authBtnText');
            const loader = document.getElementById('authLoader');
            const email = document.getElementById('emailInput').value;
            
            // Simple validation
            if (!email.includes('@')) {
                alert('Please enter a valid email');
                return;
            }

            // Simulate loading
            btnText.classList.add('hidden');
            loader.classList.remove('hidden');
            
            setTimeout(() => {
                isLoggedIn = true;
                toggleAuthModal();
                updateNavState();
                
                // Reset form
                btnText.classList.remove('hidden');
                loader.classList.add('hidden');
            }, 1500);
        }

        function updateNavState() {
            const navAuth = document.getElementById('navAuthButtons');
            const userMenu = document.getElementById('userMenu');
            
            if (isLoggedIn) {
                navAuth.classList.remove('md:flex');
                navAuth.classList.add('hidden');
                userMenu.classList.remove('hidden');
                userMenu.classList.add('md:flex', 'flex');
            }
        }

        // --- Pricing Logic ---
        function togglePricing() {
            const isYearly = document.getElementById('pricingToggle').checked;
            const prices = document.querySelectorAll('.price-display');
            const monthlyLabel = document.getElementById('monthlyLabel');
            const yearlyLabel = document.getElementById('yearlyLabel');

            if (isYearly) {
                monthlyLabel.classList.replace('text-white', 'text-secondary');
                yearlyLabel.classList.replace('text-secondary', 'text-white');
            } else {
                yearlyLabel.classList.replace('text-white', 'text-secondary');
                monthlyLabel.classList.replace('text-secondary', 'text-white');
            }

            prices.forEach(price => {
                // Fade out effect could be added here
                price.innerText = isYearly ? price.dataset.yearly : price.dataset.monthly;
            });
        }

        // --- Payment Logic ---
        function startCheckout() {
            if (!isLoggedIn) {
                toggleAuthModal('signup');
                return;
            }

            const modal = document.getElementById('paymentModal');
            const processing = document.getElementById('paymentProcessing');
            const success = document.getElementById('paymentSuccess');

            modal.classList.remove('hidden');
            void modal.offsetWidth;
            modal.classList.remove('opacity-0', 'pointer-events-none');
            
            // Reset state
            processing.classList.remove('hidden');
            success.classList.add('hidden');

            // Simulate API call
            setTimeout(() => {
                processing.classList.add('hidden');
                success.classList.remove('hidden');
                // Trigger confetti or success sound here if desired
            }, 2000);
        }

        function closePaymentModal() {
            const modal = document.getElementById('paymentModal');
            modal.classList.add('opacity-0', 'pointer-events-none');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        // --- AI Chat Logic ---
        function handleChat(e) {
            e.preventDefault();
            const input = document.getElementById('chatInput');
            const container = document.getElementById('chatContainer');
            const message = input.value.trim();
            
            if (!message) return;

            // Add User Message
            const userHTML = `
                <div class="flex items-start gap-4 max-w-[85%] ml-auto flex-row-reverse animate-fade-in">
                    <div class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <i data-lucide="user" class="w-4 h-4 text-white"></i>
                    </div>
                    <div class="bg-indigo-600/20 border border-indigo-500/30 rounded-2xl rounded-tr-none px-4 py-3">
                        <p class="text-sm text-white">${escapeHtml(message)}</p>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', userHTML);
            lucide.createIcons();
            input.value = '';
            container.scrollTop = container.scrollHeight;

            // Simulate Thinking
            const thinkingId = 'thinking-' + Date.now();
            const thinkingHTML = `
                <div id="${thinkingId}" class="flex items-start gap-4 max-w-[85%] animate-fade-in">
                    <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shrink-0">
                        <i data-lucide="bot" class="w-4 h-4 text-white"></i>
                    </div>
                    <div class="bg-surfaceHighlight border border-white/5 rounded-2xl rounded-tl-none px-4 py-3">
                        <div class="flex gap-1 h-5 items-center">
                            <div class="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce" style="animation-delay: 0s"></div>
                            <div class="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                            <div class="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                        </div>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', thinkingHTML);
            lucide.createIcons();
            container.scrollTop = container.scrollHeight;

            // Simulate Response
            setTimeout(() => {
                const thinkingNode = document.getElementById(thinkingId);
                if (thinkingNode) thinkingNode.remove();

                const responses = [
                    "I've analyzed that request. Based on current system parameters, the optimal solution involves deploying a microservice architecture.",
                    "Processing data... The Anupam Thakur System calculates a 98.4% efficiency increase with that approach.",
                    "I can certainly help with that. Here is the generated code snippet you requested based on standard protocols.",
                    "Accessing international database... Verified. The information is accurate and up to date."
                ];
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];

                const aiHTML = `
                    <div class="flex items-start gap-4 max-w-[85%] animate-fade-in">
                        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shrink-0">
                            <i data-lucide="bot" class="w-4 h-4 text-white"></i>
                        </div>
                        <div class="bg-surfaceHighlight border border-white/5 rounded-2xl rounded-tl-none px-4 py-3">
                            <p class="text-sm text-gray-200">${randomResponse}</p>
                        </div>
                    </div>
                `;
                container.insertAdjacentHTML('beforeend', aiHTML);
                lucide.createIcons();
                container.scrollTop = container.scrollHeight;
            }, 1500);
        }

        function clearChat() {
            const container = document.getElementById('chatContainer');
            container.innerHTML = `
                <div class="flex items-start gap-4 max-w-[85%]">
                    <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shrink-0">
                        <i data-lucide="bot" class="w-4 h-4 text-white"></i>
                    </div>
                    <div class="bg-surfaceHighlight border border-white/5 rounded-2xl rounded-tl-none px-4 py-3">
                        <p class="text-sm text-gray-200">Chat history cleared. Ready for new inputs.</p>
                    </div>
                </div>
            `;
            lucide.createIcons();
        }

        function escapeHtml(text) {
            return text
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        }

        // --- Mobile Menu ---
        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
            lucide.createIcons();
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[60] hidden flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300 opacity-0 pointer-events-none" id="authModal">
<div className="bg-surface border border-border rounded-xl p-8 w-full max-w-md shadow-2xl relative transform scale-95 transition-transform duration-300" id="authContent">
<button className="absolute top-4 right-4 text-secondary hover:text-white transition-colors" onclick="toggleAuthModal()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
<div className="text-center mb-8">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 mb-4">
<i className="w-5 h-5 text-white" data-lucide="lock"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2" id="authTitle">Welcome Back</h3>
<p className="text-sm text-secondary">Enter your credentials to access the system.</p>
</div>
<form className="space-y-4" id="authForm" onsubmit="handleAuth(event)">
<div className="hidden" id="nameField">
<label className="block text-xs font-medium text-secondary mb-1.5">Full Name</label>
<input className="w-full bg-surfaceHighlight border border-border rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white/40 transition-colors" placeholder="Anupam Thakur" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-secondary mb-1.5">Email Address</label>
<input className="w-full bg-surfaceHighlight border border-border rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white/40 transition-colors" id="emailInput" placeholder="name@company.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-secondary mb-1.5">Password</label>
<input className="w-full bg-surfaceHighlight border border-border rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white/40 transition-colors" placeholder="••••••••" required="" type="password"/>
</div>
<div className="pt-2">
<button className="w-full bg-white text-black hover:bg-gray-200 font-medium text-sm py-2.5 rounded-lg transition-all transform active:scale-95 flex justify-center items-center gap-2" type="submit">
<span id="authBtnText">Sign In</span>
<div className="loader hidden !border-black !border-t-transparent" id="authLoader"></div>
</button>
</div>
</form>
<div className="mt-6 text-center">
<p className="text-xs text-secondary">
<span id="authSwitchText">Don't have an account?</span>
<button className="text-white hover:underline ml-1 font-medium transition-colors" id="authSwitchBtn" onclick="switchAuthMode()">Sign Up</button>
</p>
</div>
</div>
</div>

<div className="fixed inset-0 z-[60] hidden flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300 opacity-0 pointer-events-none" id="paymentModal">
<div className="bg-surface border border-border rounded-xl p-8 w-full max-w-sm shadow-2xl text-center transform scale-95 transition-transform duration-300">
<div id="paymentProcessing">
<div className="loader mx-auto w-10 h-10 border-4 border-t-white border-white/20 mb-4"></div>
<h3 className="text-lg font-medium text-white">Processing Payment...</h3>
<p className="text-sm text-secondary mt-2">Connecting to secure gateway.</p>
</div>
<div className="hidden" id="paymentSuccess">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 mb-4 text-green-500">
<i className="w-6 h-6" data-lucide="check"></i>
</div>
<h3 className="text-lg font-medium text-white">Payment Successful</h3>
<p className="text-sm text-secondary mt-2 mb-6">Your subscription is now active.</p>
<button className="w-full bg-white text-black hover:bg-gray-200 font-medium text-sm py-2.5 rounded-lg transition-all" onclick="closePaymentModal()">Continue to Dashboard</button>
</div>
</div>
</div>

<nav className="fixed top-0 w-full z-50 glass transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white to-gray-500 flex items-center justify-center shadow-[0_0_15px_-3px_rgba(255,255,255,0.4)] group-hover:shadow-[0_0_20px_-3px_rgba(255,255,255,0.6)] transition-all">
<span className="font-bold text-black text-xs tracking-tighter">AT</span>
</div>
<span className="font-medium text-sm tracking-tight text-white/90 group-hover:text-white transition-colors">Anupam Thakur AI</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-secondary hover:text-white transition-colors" href="#features">Features</a>
<a className="text-sm text-secondary hover:text-white transition-colors" href="#demo">AI Demo</a>
<a className="text-sm text-secondary hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>

<div className="hidden md:flex items-center gap-4" id="navAuthButtons">
<button className="text-sm text-secondary hover:text-white transition-colors" onclick="toggleAuthModal('login')">Log in</button>
<button className="text-sm bg-white/10 hover:bg-white/20 border border-white/5 text-white px-4 py-2 rounded-full transition-all backdrop-blur-md" onclick="toggleAuthModal('signup')">Sign Up</button>
</div>

<div className="hidden md:hidden items-center gap-3" id="userMenu">
<div className="text-sm text-right">
<div className="text-white font-medium text-xs">User</div>
<div className="text-secondary text-[10px]">Pro Plan</div>
</div>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border border-white/10"></div>
</div>

<button className="md:hidden text-white" onclick="toggleMobileMenu()">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>

<div className="hidden md:hidden bg-surface border-b border-border absolute w-full left-0 top-16 px-6 py-6 flex-col gap-4 shadow-2xl" id="mobileMenu">
<a className="text-sm text-secondary hover:text-white py-2 block" href="#features" onclick="toggleMobileMenu()">Features</a>
<a className="text-sm text-secondary hover:text-white py-2 block" href="#demo" onclick="toggleMobileMenu()">AI Demo</a>
<a className="text-sm text-secondary hover:text-white py-2 block" href="#pricing" onclick="toggleMobileMenu()">Pricing</a>
<div className="h-px bg-white/5 my-2"></div>
<button className="text-sm text-left text-white py-2 block w-full" onclick="toggleAuthModal('login'); toggleMobileMenu()">Log in</button>
<button className="text-sm bg-white text-black font-medium py-2.5 rounded-lg w-full text-center mt-2" onclick="toggleAuthModal('signup'); toggleMobileMenu()">Sign Up</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] -z-10 opacity-30 pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] -z-10 opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-indigo-300 mb-8 animate-fade-in">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Anupam Thakur AI System v2.0 Live
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1] glow-text max-w-4xl mx-auto animate-slide-up" style={{animationDelay: '0.1s'}}>
                The International Standard <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">for Artificial Intelligence</span>
</h1>
<p className="text-lg text-secondary max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
                Experience the pinnacle of machine learning. Automate workflows, generate code, and analyze data with the Anupam Thakur International AI System.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{animationDelay: '0.3s'}}>
<button className="group relative px-8 py-3.5 bg-white text-black rounded-full font-medium text-sm transition-all hover:bg-gray-200 hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)] overflow-hidden" onclick="toggleAuthModal('signup')">
<span className="relative z-10 flex items-center gap-2">
                        Get Started <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</span>
</button>
<a className="px-8 py-3.5 bg-white/5 text-white border border-white/10 rounded-full font-medium text-sm hover:bg-white/10 transition-all backdrop-blur-sm" href="#demo">
                    Interactive Demo
                </a>
</div>

<div className="mt-20 relative max-w-5xl mx-auto perspective-1000 group animate-slide-up" style={{animationDelay: '0.5s'}}>
<div className="relative bg-surface border border-white/10 rounded-xl shadow-2xl overflow-hidden transform group-hover:scale-[1.01] transition-transform duration-700 ease-out glow-box">

<div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
<div className="ml-4 h-4 w-64 bg-white/5 rounded-full"></div>
</div>

<div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 h-[400px] bg-black/40 backdrop-blur-sm">

<div className="hidden md:flex flex-col gap-4 border-r border-white/5 pr-6">
<div className="h-8 w-full bg-white/10 rounded mb-4"></div>
<div className="h-4 w-3/4 bg-white/5 rounded"></div>
<div className="h-4 w-full bg-white/5 rounded"></div>
<div className="h-4 w-5/6 bg-white/5 rounded"></div>
<div className="mt-auto h-20 w-full bg-gradient-to-b from-indigo-500/10 to-transparent rounded border border-indigo-500/20"></div>
</div>

<div className="col-span-2 flex flex-col gap-6">
<div className="flex gap-4">
<div className="flex-1 h-24 bg-surfaceHighlight rounded-lg border border-white/5 p-4 relative overflow-hidden group/card">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
<div className="h-2 w-8 bg-indigo-500 rounded mb-2"></div>
<div className="h-6 w-12 bg-white rounded"></div>
</div>
<div className="flex-1 h-24 bg-surfaceHighlight rounded-lg border border-white/5 p-4">
<div className="h-2 w-8 bg-purple-500 rounded mb-2"></div>
<div className="h-6 w-12 bg-white rounded"></div>
</div>
<div className="flex-1 h-24 bg-surfaceHighlight rounded-lg border border-white/5 p-4">
<div className="h-2 w-8 bg-emerald-500 rounded mb-2"></div>
<div className="h-6 w-12 bg-white rounded"></div>
</div>
</div>
<div className="flex-1 bg-surfaceHighlight rounded-lg border border-white/5 p-6 relative">

<div className="flex items-end justify-between h-full gap-2 pt-8">
<div className="w-full bg-indigo-500/20 rounded-t hover:bg-indigo-500/40 transition-colors h-[40%]"></div>
<div className="w-full bg-indigo-500/20 rounded-t hover:bg-indigo-500/40 transition-colors h-[70%]"></div>
<div className="w-full bg-indigo-500/20 rounded-t hover:bg-indigo-500/40 transition-colors h-[50%]"></div>
<div className="w-full bg-indigo-500/20 rounded-t hover:bg-indigo-500/40 transition-colors h-[85%]"></div>
<div className="w-full bg-indigo-500/20 rounded-t hover:bg-indigo-500/40 transition-colors h-[60%]"></div>
<div className="w-full bg-indigo-500/20 rounded-t hover:bg-indigo-500/40 transition-colors h-[90%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface/50 border-t border-white/5" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4">Engineered for Excellence</h2>
<p className="text-secondary max-w-xl mx-auto">Our system architecture is designed to handle the most demanding AI workloads with zero latency.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-surfaceHighlight border border-white/5 hover:border-white/10 transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl -mr-16 -mt-16 transition-opacity group-hover:opacity-75"></div>
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-indigo-400">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Real-time Processing</h3>
<p className="text-sm text-secondary leading-relaxed">Lightning fast responses powered by our edge computing network infrastructure.</p>
</div>

<div className="group p-8 rounded-2xl bg-surfaceHighlight border border-white/5 hover:border-white/10 transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -mr-16 -mt-16 transition-opacity group-hover:opacity-75"></div>
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-purple-400">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Enterprise Security</h3>
<p className="text-sm text-secondary leading-relaxed">SOC2 Type II compliant with end-to-end encryption for all data streams.</p>
</div>

<div className="group p-8 rounded-2xl bg-surfaceHighlight border border-white/5 hover:border-white/10 transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -mr-16 -mt-16 transition-opacity group-hover:opacity-75"></div>
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-emerald-400">
<i className="w-5 h-5" data-lucide="cpu"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Neural Automation</h3>
<p className="text-sm text-secondary leading-relaxed">Self-learning algorithms that adapt to your workflow patterns automatically.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="demo">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight mb-4">Talk to the System</h2>
<p className="text-secondary">Experience the responsiveness of our Large Language Model.</p>
</div>
<div className="bg-surface border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]">

<div className="h-14 border-b border-white/5 bg-surfaceHighlight flex items-center justify-between px-6">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
<div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
</div>
<span className="text-sm font-medium text-white">Anupam Thakur AI</span>
</div>
<button className="text-secondary hover:text-white transition-colors" onclick="clearChat()">
<i className="w-4 h-4" data-lucide="refresh-cw"></i>
</button>
</div>

<div className="flex-1 bg-black/40 p-6 overflow-y-auto space-y-4" id="chatContainer">

<div className="flex items-start gap-4 max-w-[85%]">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-white" data-lucide="bot"></i>
</div>
<div className="bg-surfaceHighlight border border-white/5 rounded-2xl rounded-tl-none px-4 py-3">
<p className="text-sm text-gray-200">Hello. I am the Anupam Thakur International AI System. How can I assist you today?</p>
</div>
</div>
</div>

<div className="p-4 bg-surfaceHighlight border-t border-white/5">
<form className="relative" onsubmit="handleChat(event)">
<input className="w-full bg-black/30 border border-white/10 rounded-xl pl-4 pr-12 py-3.5 text-sm text-white focus:outline-none focus:border-white/20 focus:bg-black/50 transition-colors" id="chatInput" placeholder="Ask anything..." type="text"/>
<button className="absolute right-2 top-2 p-1.5 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" type="submit">
<i className="w-4 h-4" data-lucide="arrow-up"></i>
</button>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface/50 border-t border-white/5" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-10">
<h2 className="text-3xl font-medium tracking-tight mb-4">Simple Pricing</h2>
<p className="text-secondary mb-8">Choose the plan that fits your ambition.</p>

<div className="flex items-center justify-center gap-4 mb-8">
<span className="text-sm font-medium text-white" id="monthlyLabel">Monthly</span>
<label className="relative inline-block w-12 h-6 cursor-pointer" htmlFor="pricingToggle">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all duration-300 right-6" id="pricingToggle" onchange="togglePricing()" type="checkbox"/>
<span className="toggle-label block overflow-hidden h-6 rounded-full bg-white/10 cursor-pointer transition-colors duration-300"></span>
</label>
<span className="text-sm font-medium text-secondary" id="yearlyLabel">Yearly <span className="text-xs text-indigo-400 font-normal ml-1">-20%</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="p-8 rounded-2xl border border-white/5 bg-surfaceHighlight flex flex-col hover:border-white/10 transition-colors">
<h3 className="text-lg font-medium text-white mb-2">Starter</h3>
<p className="text-sm text-secondary mb-6">For personal projects.</p>
<div className="text-4xl font-medium text-white mb-6">$0</div>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-white font-medium text-sm hover:bg-white/5 transition-colors mb-8" onclick="toggleAuthModal('signup')">Get Started</button>
<ul className="space-y-3 flex-1">
<li className="flex items-center gap-3 text-sm text-secondary">
<i className="w-4 h-4 text-white" data-lucide="check"></i> 500 AI Generations
                        </li>
<li className="flex items-center gap-3 text-sm text-secondary">
<i className="w-4 h-4 text-white" data-lucide="check"></i> Standard Speed
                        </li>
<li className="flex items-center gap-3 text-sm text-secondary">
<i className="w-4 h-4 text-white" data-lucide="check"></i> Community Support
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-indigo-500/30 bg-surfaceHighlight/50 relative flex flex-col shadow-2xl overflow-hidden group">
<div className="absolute inset-0 bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors"></div>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
<h3 className="text-lg font-medium text-white mb-2 relative z-10">Professional</h3>
<p className="text-sm text-secondary mb-6 relative z-10">For power users and teams.</p>
<div className="flex items-baseline gap-1 mb-6 relative z-10">
<span className="text-4xl font-medium text-white price-display" data-monthly="$29" data-yearly="$24">$29</span>
<span className="text-sm text-secondary">/mo</span>
</div>
<button className="w-full py-2.5 rounded-lg bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors mb-8 relative z-10" onclick="startCheckout()">Buy Now</button>
<ul className="space-y-3 flex-1 relative z-10">
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-4 h-4 text-indigo-400" data-lucide="check"></i> Unlimited Generations
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-4 h-4 text-indigo-400" data-lucide="check"></i> Priority Processing
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-4 h-4 text-indigo-400" data-lucide="check"></i> Advanced Analytics
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-4 h-4 text-indigo-400" data-lucide="check"></i> API Access
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-surfaceHighlight flex flex-col hover:border-white/10 transition-colors">
<h3 className="text-lg font-medium text-white mb-2">International</h3>
<p className="text-sm text-secondary mb-6">For large scale operations.</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-medium text-white price-display" data-monthly="$99" data-yearly="$79">$99</span>
<span className="text-sm text-secondary">/mo</span>
</div>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-white font-medium text-sm hover:bg-white/5 transition-colors mb-8" onclick="startCheckout()">Buy Now</button>
<ul className="space-y-3 flex-1">
<li className="flex items-center gap-3 text-sm text-secondary">
<i className="w-4 h-4 text-white" data-lucide="check"></i> Dedicated Infrastructure
                        </li>
<li className="flex items-center gap-3 text-sm text-secondary">
<i className="w-4 h-4 text-white" data-lucide="check"></i> 24/7 Dedicated Support
                        </li>
<li className="flex items-center gap-3 text-sm text-secondary">
<i className="w-4 h-4 text-white" data-lucide="check"></i> Custom Model Training
                        </li>
</ul>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/10 bg-black text-sm">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-[10px] font-bold">AT</div>
<span className="text-secondary">© 2024 Anupam Thakur International AI System</span>
</div>
<div className="flex gap-6">
<a className="text-secondary hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-secondary hover:text-white transition-colors" href="#">Terms</a>
<a className="text-secondary hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</footer>



    </>
  );
}
