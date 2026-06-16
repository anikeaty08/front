import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // Advanced Mouse Interactive Background
        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;

        const mouseGlow = document.getElementById('mouseGlow');
        const spotlight = document.getElementById('spotlight');

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Update spotlight
            const xPercent = (mouseX / window.innerWidth) * 100;
            const yPercent = (mouseY / window.innerHeight) * 100;
            spotlight.style.setProperty('--mouse-x', `${xPercent}%`);
            spotlight.style.setProperty('--mouse-y', `${yPercent}%`);
        });

        // Smooth mouse glow animation
        function animateMouseGlow() {
            const dx = mouseX - currentX;
            const dy = mouseY - currentY;
            
            currentX += dx * 0.1;
            currentY += dy * 0.1;
            
            mouseGlow.style.left = currentX + 'px';
            mouseGlow.style.top = currentY + 'px';
            mouseGlow.style.opacity = '1';
            
            requestAnimationFrame(animateMouseGlow);
        }
        animateMouseGlow();

        // Hide glow when mouse leaves
        document.addEventListener('mouseleave', () => {
            mouseGlow.style.opacity = '0';
        });

        document.addEventListener('mouseenter', () => {
            mouseGlow.style.opacity = '1';
        });

        // Create floating particles
        function createParticles() {
            const container = document.getElementById('particles-container');
            const particleCount = 30;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                container.appendChild(particle);
            }
        }
        createParticles();

        // 3D Card Animation
        document.addEventListener('mousemove', function(event){
            const card = document.getElementById('main-card');
            if (!card) return;
            
            let card_x = getTransformValue(event.clientX, window.innerWidth, 56);
            let card_y = getTransformValue(event.clientY, window.innerHeight, 56);
            
            card.style.transform = `rotateX(${card_y/1}deg) rotateY(${card_x}deg)`;
            card.style.boxShadow = `${-card_x}px ${card_y/1}px 55px rgba(0, 0, 0, 0.55)`;
        });

        function getTransformValue(v1, v2, value){
            return ((v1/v2*value-value/2)*1).toFixed(1);                        
        }

        // AI Assistant Modal
        const aiModal = document.getElementById('ai-modal');
        const aiBtn = document.getElementById('ai-assistant-btn');
        const closeModal = document.getElementById('close-modal');

        aiBtn.addEventListener('click', () => {
            aiModal.classList.remove('hidden');
            aiModal.classList.add('flex');
            lucide.createIcons();
        });

        closeModal.addEventListener('click', () => {
            aiModal.classList.add('hidden');
            aiModal.classList.remove('flex');
        });

        aiModal.addEventListener('click', (e) => {
            if (e.target === aiModal) {
                aiModal.classList.add('hidden');
                aiModal.classList.remove('flex');
            }
        });

        // Card Customization
        const cardNameInput = document.getElementById('card-name-input');
        const cardHolder = document.getElementById('card-holder');
        const cardEmojiSelect = document.getElementById('card-emoji-select');
        const cardEmoji = document.getElementById('card-emoji');
        const mainCard = document.getElementById('main-card');
        const colorButtons = document.querySelectorAll('[data-gradient]');

        cardNameInput.addEventListener('input', () => {
            cardHolder.textContent = cardNameInput.value.toUpperCase();
        });

        cardEmojiSelect.addEventListener('change', () => {
            cardEmoji.textContent = cardEmojiSelect.value;
        });

        colorButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                colorButtons.forEach(b => b.classList.remove('ring-2'));
                btn.classList.add('ring-2');
                const gradient = btn.dataset.gradient;
                mainCard.style.background = `linear-gradient(145deg, var(--tw-gradient-stops))`;
                mainCard.className = mainCard.className.replace(/from-\S+ to-\S+/g, gradient);
            });
        });

        document.getElementById('save-card-btn').addEventListener('click', () => {
            showToast('Card customization saved successfully!', 'success');
        });

        // Toast Notifications
        function showToast(message, type = 'info') {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            const colors = {
                success: 'from-green-600 to-green-700',
                warning: 'from-orange-600 to-orange-700',
                error: 'from-red-600 to-red-700',
                info: 'from-blue-600 to-blue-700'
            };
            
            toast.className = `glass-morphism flex items-center gap-3 bg-gradient-to-r ${colors[type]} text-white px-6 py-4 rounded-2xl shadow-lg floating-card slide-up`;
            toast.innerHTML = `
                <i data-lucide="check-circle" style="width: 20px; height: 20px; stroke-width: 1.5;"></i>
                <span class="text-sm font-medium">${message}</span>
            `;
            
            container.appendChild(toast);
            lucide.createIcons();
            
            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateX(100px)';
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        // Confetti Effect
        function createConfetti() {
            const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];
            for (let i = 0; i < 50; i++) {
                const confetti = document.createElement('div');
                confetti.style.position = 'fixed';
                confetti.style.width = '10px';
                confetti.style.height = '10px';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animation = `confetti ${Math.random() * 2 + 2}s ease-out forwards`;
                confetti.style.animationDelay = Math.random() * 0.5 + 's';
                confetti.style.borderRadius = '50%';
                confetti.style.pointerEvents = 'none';
                confetti.style.zIndex = '9999';
                document.body.appendChild(confetti);
                
                setTimeout(() => confetti.remove(), 3000);
            }
        }

        const style = document.createElement('style');
        style.textContent = `
            @keyframes confetti {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100vh) rotate(720deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        document.getElementById('confetti-btn').addEventListener('click', () => {
            createConfetti();
            showToast('Keep up the great work! 🎉', 'success');
        });

        // Spending Chart
        const ctx = document.getElementById('spending-chart').getContext('2d');
        
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Dining', 'Shopping', 'Transport', 'Others'],
                datasets: [{
                    data: [32, 28, 22, 18],
                    backgroundColor: [
                        '#a855f7',
                        '#3b82f6',
                        '#10b981',
                        '#f97316'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true,
                            pointStyle: 'circle',
                            color: '#e5e7eb',
                            font: {
                                size: 12,
                                family: 'Inter'
                            }
                        }
                    }
                },
                cutout: '70%'
            }
        });

        // Show initial toast
        setTimeout(() => {
            showToast('Welcome back! You have 3 new notifications', 'info');
        }, 1000);

        // Touch optimization
        if ('ontouchstart' in window) {
            document.body.style.webkitTapHighlightColor = 'transparent';
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-bg">

<div className="mesh-gradient"></div>

<div className="aura-layer">
<div className="aura-orb aura-orb-1"></div>
<div className="aura-orb aura-orb-2"></div>
<div className="aura-orb aura-orb-3"></div>
<div className="aura-orb aura-orb-4"></div>
</div>

<div className="spotlight" id="spotlight"></div>

<div className="mouse-glow" id="mouseGlow"></div>

<div className="noise-texture"></div>

<div id="particles-container"></div>
</div>

<div className="content-layer">

<div className="fixed top-4 right-4 z-50 space-y-2" id="toast-container"></div>

<aside className="fixed left-0 top-0 bottom-0 w-64 glass-morphism z-40 hidden lg:block soft-shadow">
<div className="flex flex-col h-full p-4">

<div className="p-4 mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg"></div>
<span className="text-xl font-semibold tracking-tight text-white">Qaxel Card</span>
</div>
</div>

<nav className="flex-1 space-y-2 overflow-y-auto">
<a className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg touch-target touch-feedback ripple" href="#dashboard">
<i data-lucide="layout-dashboard" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-300 hover:bg-gray-800/50 transition-all touch-target touch-feedback micro-interaction" href="#cards">
<i data-lucide="credit-card" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<span>My Cards</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-300 hover:bg-gray-800/50 transition-all touch-target touch-feedback micro-interaction" href="#transactions">
<i data-lucide="arrow-left-right" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<span>Transactions</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-300 hover:bg-gray-800/50 transition-all touch-target touch-feedback micro-interaction" href="#analytics">
<i data-lucide="bar-chart-3" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<span>Analytics</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-300 hover:bg-gray-800/50 transition-all touch-target touch-feedback micro-interaction" href="#rewards">
<i data-lucide="gift" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<span>Rewards</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-300 hover:bg-gray-800/50 transition-all touch-target touch-feedback micro-interaction" href="#security">
<i data-lucide="shield" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<span>Security</span>
</a>
</nav>

<div className="p-4 glass-morphism rounded-2xl mt-4">
<div className="flex items-center gap-3 cursor-pointer touch-target touch-feedback">
<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-lg"></div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium truncate text-white">John Doe</div>
<div className="text-xs text-gray-400 truncate">john@example.com</div>
</div>
<i className="text-gray-400" data-lucide="more-vertical" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
</aside>

<main className="lg:ml-64 min-h-screen">

<header className="sticky top-0 z-30 glass-morphism">
<div className="flex items-center justify-between px-4 lg:px-8 py-4">
<div className="flex items-center gap-4">
<button className="lg:hidden p-2 rounded-2xl hover:bg-gray-800/50 touch-target touch-feedback">
<i data-lucide="menu" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</button>
<div>
<h1 className="text-xl font-semibold tracking-tight text-white">Dashboard</h1>
<p className="text-sm text-gray-400">Welcome back, John</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="p-3 rounded-2xl hover:bg-gray-800/50 relative transition-all touch-target touch-feedback elastic-btn">
<i className="text-gray-300" data-lucide="bell" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
</button>
<button className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 touch-target touch-feedback liquid-btn" id="ai-assistant-btn">
<i data-lucide="sparkles" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
<span className="hidden sm:inline">AI Assistant</span>
</button>
</div>
</div>
</header>

<div className="p-4 lg:p-8 space-y-6">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="glass-morphism rounded-3xl p-6 floating-card stats-card slide-up">
<div className="flex items-start justify-between mb-4">
<div className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg">
<i className="text-white" data-lucide="wallet" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</div>
<button className="p-2 hover:bg-gray-800/50 rounded-xl transition-all touch-target touch-feedback">
<i className="text-gray-300" data-lucide="more-horizontal" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="text-sm text-gray-400 mb-1">Total Balance</div>
<div className="text-3xl font-light tracking-tight mb-2 text-white">$24,580.00</div>
<div className="flex items-center gap-2 text-sm">
<div className="flex items-center gap-1 text-green-400">
<i data-lucide="trending-up" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
<span>+12.5%</span>
</div>
<span className="text-gray-400">vs last month</span>
</div>
</div>

<div className="glass-morphism rounded-3xl p-6 floating-card stats-card slide-up" style={{animationDelay: '0.1s'}}>
<div className="flex items-start justify-between mb-4">
<div className="p-3 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl shadow-lg">
<i className="text-white" data-lucide="trending-down" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</div>
<button className="p-2 hover:bg-gray-800/50 rounded-xl transition-all touch-target touch-feedback">
<i className="text-gray-300" data-lucide="more-horizontal" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="text-sm text-gray-400 mb-1">This Month</div>
<div className="text-3xl font-light tracking-tight mb-2 text-white">$8,420.00</div>
<div className="flex items-center gap-2 text-sm text-gray-400">
<div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full" style={{width: '68%'}}></div>
</div>
<span>68%</span>
</div>
</div>

<div className="glass-morphism rounded-3xl p-6 floating-card stats-card slide-up" style={{animationDelay: '0.2s'}}>
<div className="flex items-start justify-between mb-4">
<div className="p-3 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl shadow-lg">
<i className="text-white" data-lucide="gift" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</div>
<button className="p-2 hover:bg-gray-800/50 rounded-xl transition-all touch-target touch-feedback">
<i className="text-gray-300" data-lucide="more-horizontal" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="text-sm text-gray-400 mb-1">Cashback Earned</div>
<div className="text-3xl font-light tracking-tight mb-2 text-white">$342.50</div>
<button className="text-sm text-green-400 font-medium hover:underline touch-target">Redeem now</button>
</div>

<div className="glass-morphism rounded-3xl p-6 floating-card stats-card slide-up" style={{animationDelay: '0.3s'}}>
<div className="flex items-start justify-between mb-4">
<div className="p-3 bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl shadow-lg">
<i className="text-white" data-lucide="shield-check" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</div>
<button className="p-2 hover:bg-gray-800/50 rounded-xl transition-all touch-target touch-feedback">
<i className="text-gray-300" data-lucide="more-horizontal" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="text-sm text-gray-400 mb-1">Available Limit</div>
<div className="text-3xl font-light tracking-tight mb-2 text-white">$16,160</div>
<div className="text-sm text-gray-400">of $25,000 limit</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6">

<div className="glass-morphism rounded-3xl p-6 floating-card">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-semibold tracking-tight text-white">My Cards</h2>
<button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl text-sm font-medium shadow-lg hover:shadow-xl transition-all touch-target touch-feedback liquid-btn">
<i data-lucide="plus" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
<span>Add Card</span>
</button>
</div>

<div className="card-3d-container mb-6">
<div className="card-3d" id="main-card">
<div className="card-thickness"></div>
<div className="card-thickness"></div>
<div className="card-thickness"></div>
<div className="card-body">
<div className="flex items-start justify-between">
<div>
<div className="text-xs opacity-70 mb-1">Card Holder</div>
<div className="card-holder" id="card-holder">JOHN DOE</div>
</div>
<div className="flex items-center gap-2">
<span className="text-2xl" id="card-emoji" style={{transform: 'translateZ(30px)'}}>💳</span>
</div>
</div>
<div>
<div className="card-chip mb-4"></div>
<div className="card-number mb-4" id="card-number">•••• •••• •••• 4829</div>
<div className="flex items-center justify-between text-white" style={{transform: 'translateZ(30px)'}}>
<div>
<div className="text-xs opacity-70 mb-1">Expires</div>
<div className="font-medium">12/26</div>
</div>
<div>
<div className="text-xs opacity-70 mb-1">CVV</div>
<div className="font-medium">•••</div>
</div>
<div className="text-xl font-semibold opacity-90">VISA</div>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between text-sm font-medium mb-3">
<span className="text-white">Customize Your Card</span>
<button className="text-blue-400 hover:underline touch-target" id="save-card-btn">Save Changes</button>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm text-gray-400 mb-2">Card Name</label>
<input className="w-full px-4 py-3 glass-morphism rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm touch-target text-white" id="card-name-input" type="text" value="JOHN DOE"/>
</div>
<div>
<label className="block text-sm text-gray-400 mb-2">Card Emoji</label>
<select className="w-full px-4 py-3 glass-morphism rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm touch-target text-white" id="card-emoji-select">
<option value="💳">💳 Credit Card</option>
<option value="💎">💎 Diamond</option>
<option value="⭐">⭐ Star</option>
<option value="🔥">🔥 Fire</option>
<option value="✨">✨ Sparkles</option>
<option value="🎯">🎯 Target</option>
</select>
</div>
</div>
<div>
<label className="block text-sm text-gray-400 mb-2">Card Color</label>
<div className="flex gap-3">
<button className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 ring-2 ring-gray-600 shadow-lg touch-feedback elastic-btn" data-gradient="from-gray-900 to-gray-700"></button>
<button className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 hover:ring-2 ring-blue-600 transition-all shadow-lg touch-feedback elastic-btn" data-gradient="from-blue-600 to-purple-600"></button>
<button className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 hover:ring-2 ring-emerald-600 transition-all shadow-lg touch-feedback elastic-btn" data-gradient="from-emerald-600 to-teal-600"></button>
<button className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-600 to-red-600 hover:ring-2 ring-orange-600 transition-all shadow-lg touch-feedback elastic-btn" data-gradient="from-orange-600 to-red-600"></button>
<button className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-600 to-rose-600 hover:ring-2 ring-pink-600 transition-all shadow-lg touch-feedback elastic-btn" data-gradient="from-pink-600 to-rose-600"></button>
</div>
</div>
</div>
</div>

<div className="glass-morphism rounded-3xl p-6 floating-card">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-lg font-semibold tracking-tight text-white">Spending Analytics</h2>
<p className="text-sm text-gray-400 mt-1">Your spending breakdown this month</p>
</div>
<button className="p-2 hover:bg-gray-800/50 rounded-2xl transition-all touch-target touch-feedback">
<i className="text-gray-300" data-lucide="download" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</button>
</div>

<div className="glass-morphism rounded-2xl p-4 mb-6 border border-blue-800">
<div className="flex items-start gap-3">
<div className="p-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg">
<i className="text-white" data-lucide="sparkles" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1">
<div className="text-sm font-medium mb-1 text-white">AI Insight</div>
<div className="text-sm text-gray-400">You spent 20% more on dining this month compared to last month. Consider setting a budget to save more.</div>
</div>
</div>
</div>
<div className="relative h-64 mb-6">
<canvas id="spending-chart"></canvas>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between p-4 glass-morphism rounded-2xl touch-feedback micro-interaction cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg">
<i className="text-white" data-lucide="utensils" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="text-sm font-medium text-white">Dining</div>
<div className="text-xs text-gray-400">32% of spending</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-white">$2,694</div>
<div className="text-xs text-red-400">+20%</div>
</div>
</div>
<div className="flex items-center justify-between p-4 glass-morphism rounded-2xl touch-feedback micro-interaction cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
<i className="text-white" data-lucide="shopping-bag" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="text-sm font-medium text-white">Shopping</div>
<div className="text-xs text-gray-400">28% of spending</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-white">$2,358</div>
<div className="text-xs text-green-400">-5%</div>
</div>
</div>
<div className="flex items-center justify-between p-4 glass-morphism rounded-2xl touch-feedback micro-interaction cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center shadow-lg">
<i className="text-white" data-lucide="car" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="text-sm font-medium text-white">Transport</div>
<div className="text-xs text-gray-400">22% of spending</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-white">$1,852</div>
<div className="text-xs text-gray-400">+2%</div>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="glass-morphism rounded-3xl p-6 floating-card">
<h2 className="text-lg font-semibold tracking-tight mb-6 text-white">Security &amp; Controls</h2>
<div className="space-y-3">

<div className="flex items-center justify-between p-4 glass-morphism rounded-2xl touch-feedback">
<div className="flex items-center gap-3">
<div className="p-2 bg-gradient-to-br from-red-600 to-red-700 rounded-xl shadow-lg">
<i className="text-white" data-lucide="lock" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="text-sm font-medium text-white">Lock Card</div>
<div className="text-xs text-gray-400">Temporarily disable</div>
</div>
</div>
<div className="ios-toggle" onclick="this.classList.toggle('active')"></div>
</div>

<div className="flex items-center justify-between p-4 glass-morphism rounded-2xl touch-feedback cursor-pointer">
<div className="flex items-center gap-3">
<div className="p-2 bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl shadow-lg">
<i className="text-white" data-lucide="trending-up" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="text-sm font-medium text-white">Spending Limit</div>
<div className="text-xs text-gray-400">Set monthly cap</div>
</div>
</div>
<button className="text-sm text-blue-400 font-medium hover:underline touch-target">
                                        Edit
                                    </button>
</div>

<div className="flex items-center justify-between p-4 glass-morphism rounded-2xl touch-feedback">
<div className="flex items-center gap-3">
<div className="p-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg">
<i className="text-white" data-lucide="map-pin" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="text-sm font-medium text-white">Geo-Blocking</div>
<div className="text-xs text-gray-400">Location restrictions</div>
</div>
</div>
<div className="ios-toggle active" onclick="this.classList.toggle('active')"></div>
</div>

<div className="flex items-center justify-between p-4 glass-morphism rounded-2xl touch-feedback">
<div className="flex items-center gap-3">
<div className="p-2 bg-gradient-to-br from-green-600 to-green-700 rounded-xl shadow-lg">
<i className="text-white" data-lucide="fingerprint" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="text-sm font-medium text-white">Biometric Auth</div>
<div className="text-xs text-gray-400">Fingerprint login</div>
</div>
</div>
<div className="ios-toggle active" onclick="this.classList.toggle('active')"></div>
</div>
</div>
</div>

<div className="glass-morphism rounded-3xl p-6 floating-card">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-semibold tracking-tight text-white">Virtual Cards</h2>
<button className="text-sm text-blue-400 font-medium hover:underline touch-target">
                                    + Create
                                </button>
</div>
<div className="space-y-3">
<div className="p-4 glass-morphism rounded-2xl border border-purple-800 touch-feedback micro-interaction cursor-pointer">
<div className="flex items-center justify-between mb-3">
<div className="text-sm font-medium text-white">Online Shopping</div>
<span className="px-3 py-1 bg-gradient-to-r from-green-600 to-green-700 text-white text-xs font-medium rounded-full shadow-lg">Active</span>
</div>
<div className="font-mono text-sm mb-2 text-white">•••• •••• •••• 9284</div>
<div className="flex items-center justify-between text-xs text-gray-400">
<span>Limit: $500</span>
<span>Expires: 01/25</span>
</div>
</div>
<div className="p-4 glass-morphism rounded-2xl border border-blue-800 touch-feedback micro-interaction cursor-pointer">
<div className="flex items-center justify-between mb-3">
<div className="text-sm font-medium text-white">One-Time Use</div>
<span className="px-3 py-1 bg-gradient-to-r from-orange-600 to-orange-700 text-white text-xs font-medium rounded-full shadow-lg">Pending</span>
</div>
<div className="font-mono text-sm mb-2 text-white">•••• •••• •••• 7361</div>
<div className="flex items-center justify-between text-xs text-gray-400">
<span>Limit: $200</span>
<span>Single use only</span>
</div>
</div>
</div>
</div>

<div className="glass-morphism rounded-3xl p-6 floating-card border border-yellow-800">
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold tracking-tight text-white">Rewards</h2>
<button className="p-2 hover:bg-gray-800/50 rounded-xl transition-all touch-target touch-feedback elastic-btn" id="confetti-btn">
<i className="text-yellow-400" data-lucide="trophy" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="mb-4">
<div className="flex items-center justify-between text-sm mb-2">
<span className="font-medium text-white">Level Progress</span>
<span className="text-gray-400">750 / 1000 pts</span>
</div>
<div className="h-3 glass-morphism rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all duration-500 shadow-lg" style={{width: '75%'}}></div>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center gap-3 p-3 glass-morphism rounded-2xl touch-feedback micro-interaction cursor-pointer">
<span className="text-2xl">🎖️</span>
<div className="flex-1">
<div className="text-sm font-medium text-white">Gold Member</div>
<div className="text-xs text-gray-400">Current tier</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 glass-morphism rounded-2xl opacity-60">
<span className="text-2xl">💎</span>
<div className="flex-1">
<div className="text-sm font-medium text-white">Platinum Member</div>
<div className="text-xs text-gray-400">250 pts to unlock</div>
</div>
</div>
</div>
</div>

<div className="glass-morphism rounded-3xl p-6 floating-card">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-semibold tracking-tight text-white">Recent Activity</h2>
<button className="text-sm text-blue-400 font-medium hover:underline touch-target">
                                    View All
                                </button>
</div>
<div className="space-y-2">
<div className="flex items-center gap-3 p-3 glass-morphism rounded-2xl touch-feedback micro-interaction cursor-pointer">
<div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
<i className="text-white" data-lucide="shopping-cart" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium truncate text-white">Amazon</div>
<div className="text-xs text-gray-400">Today, 2:45 PM</div>
</div>
<div className="text-sm font-medium text-white">-$124.99</div>
</div>
<div className="flex items-center gap-3 p-3 glass-morphism rounded-2xl touch-feedback micro-interaction cursor-pointer">
<div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center shadow-lg">
<i className="text-white" data-lucide="arrow-down-left" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium truncate text-white">Salary Deposit</div>
<div className="text-xs text-gray-400">Yesterday</div>
</div>
<div className="text-sm font-medium text-green-400">+$5,240.00</div>
</div>
<div className="flex items-center gap-3 p-3 glass-morphism rounded-2xl touch-feedback micro-interaction cursor-pointer">
<div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg">
<i className="text-white" data-lucide="utensils" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium truncate text-white">Starbucks</div>
<div className="text-xs text-gray-400">Yesterday</div>
</div>
<div className="text-sm font-medium text-white">-$8.50</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

<div className="fixed inset-0 bg-black/40 modal-blur z-50 hidden items-center justify-center p-4" id="ai-modal">
<div className="glass-morphism rounded-3xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col floating-card">
<div className="flex items-center justify-between p-6 border-b border-gray-700/50">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
<i className="text-white" data-lucide="sparkles" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-white">AI Assistant</h3>
<p className="text-sm text-gray-400">Ask me anything about your finances</p>
</div>
</div>
<button className="p-2 hover:bg-gray-800/50 rounded-2xl transition-all touch-target touch-feedback elastic-btn" id="close-modal">
<i className="text-gray-300" data-lucide="x" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-4">
<div className="flex gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
<i className="text-white" data-lucide="bot" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 glass-morphism rounded-3xl rounded-tl-none p-4">
<p className="text-sm text-white">Hello! I'm your AI assistant. I can help you with:</p>
<ul className="text-sm mt-2 space-y-1 text-gray-400">
<li>• Transaction history and analysis</li>
<li>• Budget recommendations</li>
<li>• Card security settings</li>
<li>• Spending insights</li>
</ul>
</div>
</div>
<div className="flex gap-3 justify-end">
<div className="flex-1 max-w-[80%] bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl rounded-tr-none p-4 shadow-lg">
<p className="text-sm">What are my top spending categories?</p>
</div>
<div className="w-10 h-10 bg-gray-700 rounded-full flex-shrink-0 shadow-lg"></div>
</div>
<div className="flex gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
<i className="text-white" data-lucide="bot" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 glass-morphism rounded-3xl rounded-tl-none p-4">
<p className="text-sm text-white">Based on your spending this month, your top categories are:</p>
<ul className="text-sm mt-2 space-y-1 text-white">
<li>1. <strong>Dining</strong> - $2,694 (32%)</li>
<li>2. <strong>Shopping</strong> - $2,358 (28%)</li>
<li>3. <strong>Transport</strong> - $1,852 (22%)</li>
</ul>
<p className="text-sm mt-2 text-gray-400">You're spending 20% more on dining compared to last month. Would you like me to set a budget alert?</p>
</div>
</div>
</div>
<div className="p-6 border-t border-gray-700/50">
<div className="flex gap-2">
<input className="flex-1 px-4 py-3 glass-morphism rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm touch-target text-white placeholder-gray-400" placeholder="Type your message..." type="text"/>
<button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 touch-target touch-feedback liquid-btn">
<span>Send</span>
<i data-lucide="send" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</div>
</div>


    </>
  );
}
