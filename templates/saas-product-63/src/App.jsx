import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // State Variables
        let currentPlatform = 'telegram';
        
        // Step Management Elements
        const step2Content = document.getElementById('step-2-content');
        const step3Content = document.getElementById('step-3-content');
        const continueContainer = document.getElementById('continue-container');

        // Layout Panels
        const summaryProgressPanel = document.getElementById('summary-progress-panel');
        const summaryActivationPanel = document.getElementById('summary-activation-panel');
        const waWarningNote = document.getElementById('wa-warning-note');

        // Headers
        const pageTitle = document.getElementById('page-title');
        const pageSubtitle = document.getElementById('page-subtitle');
        const devToggles = document.getElementById('dev-toggles');

        // Platform Switch Logic (Demo)
        function setPlatform(platform) {
            currentPlatform = platform;
            resetStates();
            
            // Toggle UI
            const btnTg = document.getElementById('toggle-telegram');
            const btnWa = document.getElementById('toggle-whatsapp');
            
            if (platform === 'telegram') {
                // Button Styles
                btnTg.classList.replace('text-gray-500', 'bg-white');
                btnTg.classList.replace('hover:text-gray-900', 'shadow');
                btnWa.classList.replace('bg-white', 'text-gray-500');
                btnWa.classList.replace('shadow', 'hover:text-gray-900');
                
                // Show Content
                document.getElementById('telegram-flow').classList.remove('hidden');
                document.getElementById('whatsapp-flow').classList.add('hidden');
                
                // Metadata Updates
                updateMetadata('telegram');
                waWarningNote.classList.add('hidden');
                
            } else {
                // Button Styles
                btnWa.classList.replace('text-gray-500', 'bg-white');
                btnWa.classList.replace('hover:text-gray-900', 'shadow');
                btnTg.classList.replace('bg-white', 'text-gray-500');
                btnTg.classList.replace('shadow', 'hover:text-gray-900');
                
                // Show Content
                document.getElementById('whatsapp-flow').classList.remove('hidden');
                document.getElementById('telegram-flow').classList.add('hidden');
                
                // Demo Auto-Connect
                simulateWhatsAppConnection();
                
                // Metadata Updates
                updateMetadata('whatsapp');
                waWarningNote.classList.remove('hidden');
            }
            lucide.createIcons();
        }

        function updateMetadata(platform) {
            const isWa = platform === 'whatsapp';
            
            // Review Section Updates
            const rIcon = document.getElementById('review-platform-icon');
            rIcon.className = `w-4 h-4 ${isWa ? 'text-green-600' : 'text-blue-600'}`;
            rIcon.innerHTML = `<i data-lucide="${isWa ? 'message-circle' : 'send'}" class="w-full h-full ${isWa ? '' : 'fill-current'}" stroke-width="${isWa ? 2 : 0}"></i>`;
            document.getElementById('review-platform-name').innerText = isWa ? 'WhatsApp' : 'Telegram';

            // Success Screen Updates
            const sIcon = document.getElementById('success-icon');
            sIcon.setAttribute('data-lucide', isWa ? 'message-circle' : 'send');
            sIcon.className = `w-3.5 h-3.5 ${isWa ? 'text-green-600' : 'text-blue-500'}`;
            if (!isWa) sIcon.classList.add('fill-current');
            document.getElementById('success-platform').innerText = isWa ? 'WhatsApp' : 'Telegram';
        }

        function resetStates() {
            continueContainer.classList.add('hidden');
            document.getElementById('tg-state-initial').classList.remove('hidden');
            document.getElementById('tg-state-waiting').classList.add('hidden');
            document.getElementById('tg-state-success').classList.add('hidden');
            document.getElementById('wa-state-waiting').classList.remove('hidden');
            document.getElementById('wa-state-success').classList.add('hidden');
        }

        // --- Demo Simulation Logic ---

        function startTgConnection() {
            document.getElementById('tg-state-initial').classList.add('hidden');
            document.getElementById('tg-state-waiting').classList.remove('hidden');
            // Simulate user action
            setTimeout(() => {
                document.getElementById('tg-state-waiting').classList.add('hidden');
                document.getElementById('tg-state-success').classList.remove('hidden');
                continueContainer.classList.remove('hidden');
            }, 1500);
        }

        function simulateWhatsAppConnection() {
            setTimeout(() => {
                if(currentPlatform === 'whatsapp') {
                    document.getElementById('wa-state-waiting').classList.add('hidden');
                    document.getElementById('wa-state-success').classList.remove('hidden');
                    continueContainer.classList.remove('hidden');
                }
            }, 2500);
        }

        // --- Transition to Step 3 (Activate) ---

        function goToStep3() {
            // 1. Hide Dev Toggles & Update Header
            devToggles.style.opacity = '0';
            devToggles.style.pointerEvents = 'none';
            
            // Text Fade Transition
            pageTitle.style.opacity = '0';
            pageSubtitle.style.opacity = '0';
            
            setTimeout(() => {
                pageTitle.innerText = "Activate Product";
                pageSubtitle.innerText = "Review your setup and make your product available to customers.";
                pageTitle.style.opacity = '1';
                pageSubtitle.style.opacity = '1';
            }, 200);

            // 2. Stepper Updates
            const s2c = document.getElementById('step-2-circle');
            s2c.innerHTML = `<i data-lucide="check" class="w-3 h-3"></i>`;
            s2c.className = "w-5 h-5 rounded-full bg-green-600 text-white flex items-center justify-center text-[10px] font-bold shadow-sm cursor-pointer hover:opacity-80 transition-all";
            document.getElementById('step-2-text').className = "text-sm font-medium text-gray-900 cursor-pointer hover:text-gray-700 transition-colors";

            const s3i = document.getElementById('step-3-indicator');
            s3i.classList.remove('opacity-50');
            const s3c = document.getElementById('step-3-circle');
            s3c.innerHTML = "3";
            s3c.className = "step-circle w-5 h-5 rounded-full bg-gray-900 text-white flex items-center justify-center text-[10px] font-bold shadow-sm ring-4 ring-gray-100 transition-all";
            document.getElementById('step-3-text').className = "step-text text-sm font-semibold text-gray-900 transition-colors";

            // 3. Layout Switch
            step2Content.classList.add('hidden'); // Hide setup
            step2Content.classList.remove('block');
            
            step3Content.classList.remove('hidden'); // Show review
            step3Content.classList.add('block');
            
            // Switch Right Sidebar Panels
            summaryProgressPanel.style.display = 'none';
            summaryActivationPanel.classList.remove('hidden');

            lucide.createIcons();
            document.getElementById('main-scroll-area').scrollTo({top: 0, behavior: 'smooth'});
        }

        function backToStep2() {
            // Revert Header
            devToggles.style.opacity = '1';
            devToggles.style.pointerEvents = 'auto';
            pageTitle.innerText = "Link Product to Group";
            pageSubtitle.innerText = "Connect your product to the group where members will get access.";

            // Revert Stepper
            const s2c = document.getElementById('step-2-circle');
            s2c.innerHTML = "2";
            s2c.className = "step-circle w-5 h-5 rounded-full bg-gray-900 text-white flex items-center justify-center text-[10px] font-bold shadow-sm ring-4 ring-gray-100";
            document.getElementById('step-2-text').className = "step-text text-sm font-semibold text-gray-900";

            const s3i = document.getElementById('step-3-indicator');
            s3i.classList.add('opacity-50');
            const s3c = document.getElementById('step-3-circle');
            s3c.className = "step-circle w-5 h-5 rounded-full border border-gray-300 text-gray-500 flex items-center justify-center text-[10px] font-bold bg-white";
            document.getElementById('step-3-text').className = "step-text text-sm font-medium text-gray-500";

            // Revert Layout
            step3Content.classList.add('hidden');
            step3Content.classList.remove('block');
            
            step2Content.classList.remove('hidden');
            step2Content.classList.add('block');

            summaryProgressPanel.style.display = 'block';
            summaryActivationPanel.classList.add('hidden');

            lucide.createIcons();
        }

        // --- Activation Logic ---

        function activateProduct() {
            const btn = document.getElementById('btn-final-activate');
            
            // Loading State
            const originalText = btn.innerHTML;
            btn.innerHTML = `<div class="loader mr-2"></div> Activating...`;
            btn.classList.add('opacity-90', 'cursor-not-allowed');
            btn.disabled = true;
            
            setTimeout(() => {
                // Show Success Screen
                document.getElementById('success-screen').classList.remove('hidden');
                lucide.createIcons();
            }, 1800);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col flex-shrink-0 z-20">
<div className="p-6">
<div className="flex items-center gap-2 mb-8">
<div className="w-6 h-6 bg-gray-900 rounded-md flex items-center justify-center text-white shadow-sm">
<i className="w-3.5 h-3.5" data-lucide="zap" strokeWidth="2.5"></i>
</div>
<span className="font-semibold text-sm tracking-tight text-gray-900">Syncgram</span>
</div>
<nav className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="home" strokeWidth="1.5"></i>
                    Overview
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-900 font-medium bg-gray-50 rounded-md shadow-sm ring-1 ring-gray-200/50" href="#">
<i className="w-4 h-4" data-lucide="package" strokeWidth="1.5"></i>
                    Products
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="users" strokeWidth="1.5"></i>
                    Customers
                </a>
</nav>
</div>
<div className="mt-auto p-4 border-t border-gray-100">
<div className="flex items-center gap-3">
<img alt="Profile" className="w-8 h-8 rounded-full border border-gray-200" src="https://ui-avatars.com/api/?name=Omotola+Joseph&amp;background=random&amp;color=fff"/>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-gray-900 truncate">Omotola Joseph</p>
<p className="text-xs text-gray-500 truncate">omojoseph@sync.com</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="bg-white border-b border-gray-200 px-8 py-5 flex-shrink-0 z-10">
<div className="flex items-center justify-between mb-2">
<nav className="flex items-center text-xs text-gray-500">
<a className="hover:text-gray-800 transition-colors" href="#">Products</a>
<i className="w-3 h-3 mx-2 text-gray-400" data-lucide="chevron-right"></i>
<span className="text-gray-900 font-medium">New Product</span>
</nav>

<div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg transition-opacity duration-300" id="dev-toggles">
<button className="px-3 py-1 text-[10px] font-medium rounded-md bg-white shadow text-gray-900 transition-all" id="toggle-telegram" onclick="setPlatform('telegram')">Telegram</button>
<button className="px-3 py-1 text-[10px] font-medium rounded-md text-gray-500 hover:text-gray-900 transition-all" id="toggle-whatsapp" onclick="setPlatform('whatsapp')">WhatsApp</button>
</div>
</div>
<h1 className="text-xl font-semibold text-gray-900 tracking-tight transition-all duration-300" id="page-title">Link Product to Group</h1>
<p className="text-sm text-gray-500 mt-1 transition-all duration-300" id="page-subtitle">Connect your product to the group where members will get access.</p>
</header>

<div className="flex-1 overflow-y-auto bg-gray-50 scroll-smooth" id="main-scroll-area">
<div className="max-w-6xl mx-auto px-8 py-10">

<div className="mb-10 max-w-2xl">
<div className="flex items-center gap-4">

<div className="flex items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity" onclick="backToStep2()">
<div className="w-5 h-5 rounded-full bg-green-600 text-white flex items-center justify-center text-[10px] font-bold shadow-sm">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
<span className="text-sm font-medium text-gray-900">Product Details</span>
</div>

<div className="h-px w-6 bg-gray-300"></div>

<div className="flex items-center gap-2 transition-all duration-300 cursor-pointer" id="step-2-indicator" onclick="backToStep2()">
<div className="step-circle w-5 h-5 rounded-full bg-gray-900 text-white flex items-center justify-center text-[10px] font-bold shadow-sm ring-4 ring-gray-100" id="step-2-circle">2</div>
<span className="step-text text-sm font-semibold text-gray-900" id="step-2-text">Link Group</span>
</div>

<div className="h-px w-6 bg-gray-300 opacity-50"></div>

<div className="flex items-center gap-2 opacity-50 transition-all duration-300" id="step-3-indicator">
<div className="step-circle w-5 h-5 rounded-full border border-gray-300 text-gray-500 flex items-center justify-center text-[10px] font-bold bg-white" id="step-3-circle">3</div>
<span className="step-text text-sm font-medium text-gray-500" id="step-3-text">Activate</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 min-h-[500px]" id="layout-grid">



<div className="lg:col-span-8 flex flex-col relative block" id="step-2-content">

<div className="block" id="telegram-flow">
<div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 mb-6">
<div className="flex items-start gap-5">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 ring-1 ring-blue-100">
<i className="w-6 h-6 fill-current" data-lucide="send" strokeWidth="0"></i>
</div>
<div className="flex-1">
<h2 className="text-base font-semibold text-gray-900">Connect to Telegram Group</h2>
<p className="text-sm text-gray-500 mt-1 leading-relaxed">
                                            We’ll open your admin bot so you can choose which group this product controls. You must be an administrator.
                                        </p>

<div className="mt-8" id="tg-state-initial">
<button className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-all shadow-sm active:translate-y-0.5" onclick="startTgConnection()">
<span>Open Telegram to Link Group</span>
<i className="w-4 h-4 text-blue-100" data-lucide="arrow-up-right"></i>
</button>
</div>

<div className="hidden mt-8 p-4 bg-gray-50 border border-gray-200 rounded-lg" id="tg-state-waiting">
<div className="flex items-center gap-3">
<div className="loader !border-gray-300 !border-t-gray-900"></div>
<span className="text-sm font-medium text-gray-700">Waiting for you to select a group...</span>
</div>
</div>

<div className="hidden mt-8 slide-up" id="tg-state-success">
<div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-100 rounded-lg text-emerald-800">
<div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
<i className="w-3 h-3 text-emerald-600" data-lucide="check" strokeWidth="3"></i>
</div>
<span className="text-sm font-medium">Group "VIP Signals" connected successfully.</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden" id="whatsapp-flow">
<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-6">
<div className="p-6 border-b border-gray-100 bg-gray-50/50 flex justify-between items-start">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center flex-shrink-0 ring-1 ring-green-200">
<i className="w-5 h-5" data-lucide="message-circle"></i>
</div>
<div>
<h2 className="text-base font-semibold text-gray-900">Connect to WhatsApp Group</h2>
</div>
</div>
</div>
<div className="p-8">
<div className="space-y-6">

<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-6 h-6 rounded-full bg-gray-100 text-gray-600 text-xs font-bold flex items-center justify-center border border-gray-200">1</div>
</div>
<div className="w-full">
<h3 className="text-sm font-medium text-gray-900">Send Linking Command</h3>
<div className="mt-2 flex items-center gap-2 w-full max-w-sm">
<div className="flex-1 flex items-center justify-between bg-gray-100 border border-gray-200 rounded-md px-3 py-2 group">
<code className="font-mono text-sm text-gray-800">/link AA79JLXY96</code>
</div>
</div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-gray-100">
<div className="flex items-center gap-3 text-gray-500" id="wa-state-waiting">
<div className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
</div>
<span className="text-xs font-medium">Listening for command...</span>
</div>
<div className="hidden flex items-center gap-3 p-3 bg-emerald-50 border border-emerald-100 rounded-lg text-emerald-800 slide-up" id="wa-state-success">
<div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
<i className="w-3 h-3 text-emerald-600" data-lucide="check" strokeWidth="3"></i>
</div>
<span className="text-sm font-medium">Group connected successfully.</span>
</div>
</div>
</div>
</div>
</div>

<div className="hidden flex justify-end mt-6 fade-in" id="continue-container">
<button className="group flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-all shadow-sm hover:shadow active:translate-y-0.5" onclick="goToStep3()">
<span>Continue to Activation</span>
<i className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" data-lucide="arrow-right"></i>
</button>
</div>
</div>



<div className="lg:col-span-8 hidden fade-in space-y-8" id="step-3-content">

<section>
<h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-tight">Product Summary</h3>
<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">

<div className="p-6 space-y-6">
<div>
<div className="flex justify-between items-center mb-1.5">
<span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</span>
<button className="text-xs text-blue-600 hover:text-blue-700 font-medium transition-colors" onclick="backToStep2()">Edit</button>
</div>
<div className="text-sm font-semibold text-gray-900">VIP Signals Group</div>
</div>
<div>
<div className="flex justify-between items-center mb-1.5">
<span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</span>
<button className="text-xs text-blue-600 hover:text-blue-700 font-medium transition-colors" onclick="backToStep2()">Edit</button>
</div>
<div className="flex items-center gap-2">
<div className="w-4 h-4 text-blue-500" id="review-platform-icon">

</div>
<span className="text-sm font-medium text-gray-900" id="review-platform-name">Telegram</span>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-1.5">
<span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Linked Group</span>
<button className="text-xs text-blue-600 hover:text-blue-700 font-medium transition-colors" onclick="backToStep2()">Edit</button>
</div>
<div className="text-sm font-medium text-gray-900 truncate">VIP Signals</div>
</div>
</div>

<div className="p-6 space-y-6">
<div>
<div className="flex justify-between items-center mb-1.5">
<span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Pricing</span>
<button className="text-xs text-blue-600 hover:text-blue-700 font-medium transition-colors" onclick="backToStep2()">Edit</button>
</div>
<div className="text-sm font-semibold text-gray-900">$100.00 <span className="text-gray-500 font-normal">/ month</span></div>
</div>
<div>
<div className="flex justify-between items-center mb-1.5">
<span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Type</span>
</div>
<div className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="users"></i>
<span className="text-sm font-medium text-gray-900">Community Access</span>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-1.5">
<span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Billing</span>
</div>
<div className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="credit-card"></i>
<span className="text-sm font-medium text-gray-900">Recurring Subscription</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section>
<h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-tight">Access Behavior</h3>
<div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
<div className="space-y-5">
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 ring-1 ring-emerald-100">
<i className="w-3 h-3" data-lucide="check" strokeWidth="3"></i>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Automatic Access</p>
<p className="text-xs text-gray-500 mt-0.5">Members are instantly invited to the group after successful payment.</p>
</div>
</div>
<div className="w-full h-px bg-gray-50"></div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 ring-1 ring-emerald-100">
<i className="w-3 h-3" data-lucide="check" strokeWidth="3"></i>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Subscription Enforcement</p>
<p className="text-xs text-gray-500 mt-0.5">Syncgram automatically removes members if their subscription expires.</p>
</div>
</div>
<div className="w-full h-px bg-gray-50"></div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 ring-1 ring-emerald-100">
<i className="w-3 h-3" data-lucide="check" strokeWidth="3"></i>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Bot Managed</p>
<p className="text-xs text-gray-500 mt-0.5">The bot handles invite links and kicks silently in the background.</p>
</div>
</div>
</div>
</div>
</section>
</div>



<div className="lg:col-span-4">
<div className="sticky top-6">

<div className="transition-opacity duration-300 block" id="summary-progress-panel">
<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Setup Progress</h3>
<div className="bg-white rounded-xl border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden">
<div className="p-1 bg-gray-50 border-b border-gray-100">
<div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
<div className="h-full bg-gray-900 w-2/3"></div>
</div>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-4">
<span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-medium bg-yellow-50 text-yellow-700 border border-yellow-200">
                                                Draft
                                            </span>
<span className="text-xs text-gray-400">Step 2 of 3</span>
</div>
<h4 className="text-base font-semibold text-gray-900 tracking-tight">VIP Signals Group</h4>
<div className="mt-6 p-3 bg-gray-50 rounded-lg border border-gray-100">
<p className="text-[11px] text-gray-500 leading-tight">
                                                Complete the setup to activate this product.
                                            </p>
</div>
</div>
</div>
</div>

<div className="hidden scale-in" id="summary-activation-panel">
<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Activation</h3>
<div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden">

<div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
<span className="text-xs font-medium text-gray-500">Current Status</span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-gray-100 text-gray-600 border border-gray-200">
<span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                                            Draft
                                        </span>
</div>
<div className="p-5">
<p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                            Once activated, this product will be <strong>live</strong> and able to accept new subscribers immediately.
                                        </p>

<button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-black hover:shadow-lg transition-all transform active:scale-[0.98]" id="btn-final-activate" onclick="activateProduct()">
<span>Activate Product</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>

<div className="text-center mt-4">
<p className="text-[11px] text-gray-400">
                                                Not ready? You can leave this page and activate later.
                                            </p>
</div>

<div className="hidden mt-6 pt-4 border-t border-gray-100" id="wa-warning-note">
<div className="flex gap-2">
<i className="w-3.5 h-3.5 text-gray-400 mt-0.5" data-lucide="info"></i>
<p className="text-[10px] text-gray-500 leading-tight">
                                                    WhatsApp enforcement depends on bot admin permissions.
                                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden absolute inset-0 bg-white z-50 flex flex-col items-center justify-center fade-in" id="success-screen">
<div className="max-w-md w-full px-6 text-center z-10">

<div className="mb-8 relative inline-block">
<div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-20"></div>
<div className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border border-green-50">
<span className="text-3xl">🎉</span>
</div>
</div>
<h1 className="text-2xl font-bold text-gray-900 tracking-tight mb-2">Your product is now live</h1>
<p className="text-gray-500 mb-8 text-sm leading-relaxed">Access is automated and ready for your first customer.</p>

<div className="bg-gray-50 rounded-xl border border-gray-200 p-5 mb-8 text-left shadow-sm">
<div className="space-y-3">
<div className="flex justify-between items-center text-sm">
<span className="text-gray-500">Product</span>
<span className="font-medium text-gray-900">VIP Signals Group</span>
</div>
<div className="w-full h-px bg-gray-200 border-dashed-custom"></div>
<div className="flex justify-between items-center text-sm">
<span className="text-gray-500">Platform</span>
<span className="font-medium text-gray-900 flex items-center gap-1.5">
<i className="w-3.5 h-3.5 text-blue-500" data-lucide="send" id="success-icon"></i>
<span id="success-platform">Telegram</span>
</span>
</div>
<div className="w-full h-px bg-gray-200 border-dashed-custom"></div>
<div className="flex justify-between items-center text-sm">
<span className="text-gray-500">Price</span>
<span className="font-medium text-gray-900">$100.00 / month</span>
</div>
</div>
</div>

<div className="text-left mb-8 px-2">
<p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What happens next?</p>
<ul className="space-y-2">
<li className="flex items-start gap-2.5">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
<span className="text-sm text-gray-600">Customers can now subscribe via checkout link.</span>
</li>
<li className="flex items-start gap-2.5">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
<span className="text-sm text-gray-600">Members are added automatically upon payment.</span>
</li>
</ul>
</div>

<div className="space-y-3">
<button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-black transition-all shadow-sm active:translate-y-0.5">
                        View Product Dashboard
                    </button>
<button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 border border-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 transition-all active:translate-y-0.5">
<i className="w-4 h-4 text-gray-500" data-lucide="link"></i>
                        Copy Checkout Link
                    </button>
</div>
</div>

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-[20%] left-[20%] w-2 h-2 bg-blue-500 rounded-full opacity-20"></div>
<div className="absolute top-[30%] right-[25%] w-3 h-3 bg-green-500 rotate-45 opacity-20"></div>
<div className="absolute bottom-[25%] left-[30%] w-2 h-2 bg-yellow-500 rounded-full opacity-20"></div>
</div>
</div>
</main>


    </>
  );
}
