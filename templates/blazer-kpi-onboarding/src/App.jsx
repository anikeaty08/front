import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        let currentStep = 1;
        const totalSteps = 4;
        let isOnboarding = false;

        // --- View Switching Logic ---
        function startOnboarding() {
            document.getElementById('view-dashboard').classList.add('hidden');
            document.getElementById('view-onboarding').classList.remove('hidden');
            document.getElementById('header-breadcrumb').textContent = "KPI Setup";
            
            // Update Sidebar Active State
            document.getElementById('nav-onepager').classList.remove('bg-orange-50', 'text-orange-700');
            document.getElementById('nav-onepager').classList.add('text-slate-600', 'hover:bg-slate-50');
            
            const kpiNav = document.getElementById('nav-kpi');
            kpiNav.classList.remove('text-slate-600', 'hover:bg-slate-50');
            kpiNav.classList.add('bg-orange-50', 'text-orange-700');

            isOnboarding = true;
            updateUI();
        }

        function switchView(viewName) {
            if (viewName === 'dashboard') {
                document.getElementById('view-dashboard').classList.remove('hidden');
                document.getElementById('view-onboarding').classList.add('hidden');
                document.getElementById('header-breadcrumb').textContent = "One Pager";
                
                // Revert Sidebar
                document.getElementById('nav-onepager').classList.add('bg-orange-50', 'text-orange-700');
                document.getElementById('nav-onepager').classList.remove('text-slate-600', 'hover:bg-slate-50');
                
                const kpiNav = document.getElementById('nav-kpi');
                kpiNav.classList.add('text-slate-600', 'hover:bg-slate-50');
                kpiNav.classList.remove('bg-orange-50', 'text-orange-700');

                isOnboarding = false;
            }
        }

        // --- Wizard Navigation ---
        function updateUI() {
            // Update Progress
            const progress = (currentStep / totalSteps) * 100;
            document.getElementById('progress-bar').style.width = `${progress}%`;
            document.getElementById('step-indicator').textContent = `Step ${currentStep}`;

            // Show/Hide Step Content
            document.querySelectorAll('.step-content').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('fade-in');
            });

            // Ensure loading screen is hidden
            document.getElementById('loading-screen').classList.add('hidden');

            const currentEl = document.getElementById(`step-${currentStep}`);
            if (currentEl) {
                currentEl.classList.remove('hidden');
                currentEl.classList.add('fade-in');
            }

            // Buttons
            document.getElementById('back-btn').disabled = currentStep === 1;
            const nextBtn = document.getElementById('next-btn');
            nextBtn.textContent = currentStep === totalSteps ? 'Launch Dashboard' : 'Next';
            
            lucide.createIcons();
        }

        function nextStep() {
            if (currentStep === 1) {
                showLoadingScreen();
            } else if (currentStep === 3) {
                // Validation for Step 3
                const northStarInput = document.getElementById('target-north-star');
                if (!northStarInput.value.trim()) {
                    northStarInput.classList.add('border-red-500', 'ring-2', 'ring-red-500/20');
                    northStarInput.focus();
                    return; // Stop if empty
                }
                currentStep++;
                updateUI();
            } else if (currentStep < totalSteps) {
                currentStep++;
                updateUI();
            } else {
                alert("Dashboard Launched Successfully!");
                switchView('dashboard');
            }
        }

        function prevStep() {
            if (currentStep > 1) {
                currentStep--;
                updateUI();
            }
        }

        function showLoadingScreen() {
            document.getElementById('step-1').classList.add('hidden');
            document.querySelector('footer').classList.add('hidden');
            
            const loader = document.getElementById('loading-screen');
            loader.classList.remove('hidden');
            
            setTimeout(() => {
                loader.classList.add('hidden');
                document.querySelector('footer').classList.remove('hidden');
                currentStep = 2;
                updateUI();
            }, 2000);
        }

        // --- Step 2: Tab Logic ---
        function switchTab(tab) {
            const chatView = document.getElementById('kpi-chat-interface');
            const builderView = document.getElementById('kpi-edit-interface');
            const btnChat = document.getElementById('tab-chat');
            const btnBuilder = document.getElementById('tab-builder');

            if (tab === 'chat') {
                chatView.classList.remove('hidden');
                builderView.classList.add('hidden');
                
                btnChat.classList.add('bg-white', 'text-slate-900', 'shadow-sm');
                btnChat.classList.remove('text-slate-500');
                btnBuilder.classList.remove('bg-white', 'text-slate-900', 'shadow-sm');
                btnBuilder.classList.add('text-slate-500');
            } else {
                chatView.classList.add('hidden');
                builderView.classList.remove('hidden');

                btnBuilder.classList.add('bg-white', 'text-slate-900', 'shadow-sm');
                btnBuilder.classList.remove('text-slate-500');
                btnChat.classList.remove('bg-white', 'text-slate-900', 'shadow-sm');
                btnChat.classList.add('text-slate-500');
            }
        }

        // --- Step 2: Chat Interaction ---
        function showQuestionInput() {
            document.getElementById('question-input-area').classList.remove('hidden');
            document.getElementById('chat-actions').classList.add('hidden');
            document.getElementById('user-question').focus();
        }

        function sendQuestion() {
            const input = document.getElementById('user-question');
            const text = input.value.trim();
            if (!text) return;

            const history = document.getElementById('chat-history');
            
            // User Msg
            const userMsg = document.createElement('div');
            userMsg.className = 'flex gap-4 justify-end fade-in';
            userMsg.innerHTML = `
                <div class="bg-orange-600 text-white p-3 rounded-2xl rounded-tr-none text-sm max-w-md shadow-sm">
                    ${text}
                </div>
                <div class="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600 border border-slate-300">N</div>
            `;
            history.appendChild(userMsg);
            input.value = '';

            setTimeout(() => {
                const aiMsg = document.createElement('div');
                aiMsg.className = 'flex gap-4 fade-in';
                aiMsg.innerHTML = `
                    <div class="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 border border-orange-200 mt-1">
                        <i data-lucide="sparkles" class="w-5 h-5 text-orange-600"></i>
                    </div>
                    <div class="bg-white border border-slate-200 rounded-2xl rounded-tl-none p-4 shadow-sm max-w-lg text-sm text-slate-700">
                        <p class="mb-3">I chose these metrics because early-stage SaaS benchmarks suggest keeping CAC Payback under 12 months is critical for cash flow, while NRR proves product stickiness.</p>
                        <p class="font-medium text-slate-900">Are you satisfied with this explanation?</p>
                    </div>
                `;
                history.appendChild(aiMsg);
                
                // Re-append buttons after AI response
                const buttonContainer = document.createElement('div');
                buttonContainer.className = 'flex gap-2 justify-end fade-in';
                buttonContainer.innerHTML = `
                    <button onclick="nextStep()" class="bg-orange-600 text-white px-4 py-2 rounded-lg text-xs font-medium">I'm satisfied</button>
                    <button onclick="switchTab('builder')" class="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-xs font-medium">Let me edit</button>
                `;
                history.appendChild(buttonContainer);
                
                lucide.createIcons();
                document.getElementById('kpi-chat-interface').scrollTop = document.getElementById('kpi-chat-interface').scrollHeight;
            }, 1000);
        }

        // --- Step 2 Builder Interactions ---
        function setNorthStar(btn) {
            // Reset all others in container
            const container = btn.closest('#selected-kpis-container');
            
            // Reset Styles
            container.querySelectorAll('.group').forEach(el => {
                el.classList.remove('border-orange-200', 'ring-1', 'ring-orange-100');
                el.classList.add('border-slate-200');
                const icon = el.querySelector('i[data-lucide="star"]');
                icon.classList.remove('fill-orange-500', 'text-orange-500');
                icon.classList.add('text-slate-300');
                // Hide Label
                const label = el.querySelector('.text-orange-600');
                if(label) label.remove();
            });

            // Set Active
            const card = btn.closest('.group');
            card.classList.remove('border-slate-200');
            card.classList.add('border-orange-200', 'ring-1', 'ring-orange-100');
            
            const icon = btn.querySelector('i');
            icon.classList.remove('text-slate-300');
            icon.classList.add('fill-orange-500', 'text-orange-500');

            // Add Label
            const textContainer = card.querySelector('div > div:nth-child(2)');
            if(textContainer) {
                 const label = document.createElement('div');
                 label.className = 'text-[10px] text-orange-600 font-medium fade-in';
                 label.innerText = 'North Star Metric';
                 textContainer.appendChild(label);
            }
        }

        function removeKPI(btn) {
            const card = btn.closest('.group');
            card.remove();
            // In real app, decrement counter
        }

        function addToSelected(btn) {
            // Simulate adding
            const name = btn.querySelector('.font-semibold').innerText;
            const cat = btn.querySelector('.text-slate-500').innerText;
            
            const container = document.getElementById('selected-kpis-container');
            const newCard = document.createElement('div');
            newCard.className = "relative group bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex items-center justify-between hover:border-slate-300 transition-all fade-in";
            newCard.innerHTML = `
                <div class="flex items-center gap-3">
                    <button onclick="setNorthStar(this)" class="p-1 rounded hover:bg-orange-50 transition-colors"><i data-lucide="star" class="w-4 h-4 text-slate-300 hover:text-orange-400"></i></button>
                    <div><div class="text-sm font-semibold text-slate-700">${name}</div><div class="text-[10px] text-slate-400">${cat}</div></div>
                </div>
                <button class="p-1.5 hover:bg-red-50 rounded text-slate-300 hover:text-red-500" onclick="removeKPI(this)"><i data-lucide="x" class="w-4 h-4"></i></button>
            `;
            container.appendChild(newCard);
            lucide.createIcons();
        }

        // --- Step 1 Interactions ---
        function selectGoal(el, isOther = false) {
            document.querySelectorAll('.goal-opt').forEach(btn => {
                btn.classList.remove('border-orange-500', 'bg-orange-50/50', 'ring-1', 'ring-orange-500');
                btn.querySelector('.check-dot').classList.remove('opacity-100');
                btn.querySelector('.check-dot').classList.add('opacity-0');
            });
            el.classList.add('border-orange-500', 'bg-orange-50/50', 'ring-1', 'ring-orange-500');
            el.querySelector('.check-dot').classList.remove('opacity-0');
            el.querySelector('.check-dot').classList.add('opacity-100');

            const otherInput = document.getElementById('other-input-container');
            if (isOther) {
                otherInput.classList.remove('hidden');
                otherInput.querySelector('input').focus();
            } else {
                otherInput.classList.add('hidden');
            }
        }

        function selectSpan(el) {
            document.querySelectorAll('.span-opt').forEach(btn => {
                btn.classList.remove('bg-orange-600', 'text-white', 'border-transparent');
                btn.classList.add('bg-white', 'text-slate-700', 'border-slate-200');
            });
            el.classList.remove('bg-white', 'text-slate-700', 'border-slate-200');
            el.classList.add('bg-orange-600', 'text-white', 'border-transparent');
        }

        // --- Step 4 Interactions ---
        function addTeamMember() {
            const input = document.getElementById('invite-email');
            const email = input.value;
            if(email && email.includes('@')) {
                const list = document.getElementById('team-list');
                const newItem = document.createElement('div');
                newItem.className = "flex items-center justify-between fade-in";
                const initials = email.substring(0,2).toUpperCase();
                newItem.innerHTML = `
                    <div class="flex items-center gap-3">
                        <div class="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold border border-blue-200">${initials}</div>
                        <div>
                            <p class="text-sm font-medium text-slate-900">Team Member</p>
                            <p class="text-xs text-slate-500">${email}</p>
                        </div>
                    </div>
                    <select class="text-xs border-none bg-transparent font-medium text-slate-600 focus:ring-0 cursor-pointer">
                        <option selected>Viewer</option>
                        <option>Editor</option>
                        <option>Admin</option>
                    </select>
                `;
                list.appendChild(newItem);
                input.value = '';
            }
        }

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-slate-200 flex flex-col flex-shrink-0 z-20 h-full">

<div className="h-16 flex items-center px-6 border-b border-slate-50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center relative">
<div className="w-4 h-4 bg-orange-600 rounded-full"></div>
</div>
<span className="font-semibold text-slate-900 tracking-tight text-lg">blazer</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto px-3 py-6 space-y-8">
<div>
<div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">Platform</div>
<div className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 bg-orange-50 text-orange-700 rounded-lg text-sm font-medium transition-colors" href="#" id="nav-onepager" onclick="switchView('dashboard')">
<i className="w-4 h-4" data-lucide="file-text"></i>
                        One Pager
                    </a>
<a className="flex items-center justify-between px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg text-sm font-medium transition-colors group" href="#">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="bar-chart"></i>
                            Reports
                        </div>
<i className="w-3.5 h-3.5 text-slate-300" data-lucide="chevron-right"></i>
</a>
<a className="flex items-center justify-between px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg text-sm font-medium transition-colors group" href="#">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="message-square"></i>
                            Blazer Coach
                        </div>
<span className="text-[10px] font-medium text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">Soon</span>
</a>

<a className="flex items-center justify-between px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg text-sm font-medium transition-colors group" href="#" id="nav-kpi">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="bar-chart-2"></i>
                            KPI Module
                        </div>
</a>
<a className="flex items-center justify-between px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg text-sm font-medium transition-colors group" href="#">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="folder"></i>
                            Files
                        </div>
<span className="text-[10px] font-medium text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">Soon</span>
</a>
</div>
</div>
</nav>

<div className="p-4 border-t border-slate-100">
<button className="flex items-center gap-3 w-full hover:bg-slate-50 p-2 rounded-lg transition-colors text-left">
<div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center text-xs font-semibold">N</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 truncate">Account</p>
<p className="text-xs text-slate-500 truncate">user@blazer.com</p>
</div>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-down"></i>
</button>
</div>
</aside>

<div className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 flex-shrink-0 z-10">
<div className="flex items-center gap-2 text-sm text-slate-500">
<span className="hover:text-slate-800 cursor-pointer transition-colors" onclick="switchView('dashboard')"><i className="w-4 h-4 inline mb-1" data-lucide="home"></i> Home</span>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
<span className="font-medium text-slate-900" id="header-breadcrumb">One Pager</span>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
<i className="w-4 h-4" data-lucide="download"></i>
                Download Slide
            </button>
</header>

<main className="flex-1 overflow-y-auto p-8 fade-in" id="view-dashboard">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-2 mb-3">
<i className="w-4 h-4 text-orange-600" data-lucide="users"></i>
<h3 className="text-sm font-semibold text-orange-600">Aligned Team Dynamics</h3>
</div>
<p className="text-xs text-slate-400 italic">No evidence</p>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-2 mb-3">
<i className="w-4 h-4 text-rose-600" data-lucide="target"></i>
<h3 className="text-sm font-semibold text-rose-600">Customer &amp; Growth</h3>
</div>
<ul className="space-y-2">
<li className="flex gap-2 text-xs text-slate-600 leading-relaxed"><span className="block w-1 h-1 bg-slate-300 rounded-full mt-1.5 flex-shrink-0"></span>Targets: Founder-led B2B tech</li>
</ul>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-2 mb-3">
<i className="w-4 h-4 text-blue-600" data-lucide="gem"></i>
<h3 className="text-sm font-semibold text-blue-600">Value Proposition</h3>
</div>
<ul className="space-y-2">
<li className="flex gap-2 text-xs text-slate-600 leading-relaxed"><span className="block w-1 h-1 bg-slate-300 rounded-full mt-1.5 flex-shrink-0"></span>AI Products: Broad suite</li>
</ul>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-2 mb-3">
<i className="w-4 h-4 text-amber-600" data-lucide="coins"></i>
<h3 className="text-sm font-semibold text-amber-600">Economics</h3>
</div>
<ul className="space-y-2">
<li className="flex gap-2 text-xs text-slate-600 leading-relaxed"><span className="block w-1 h-1 bg-slate-300 rounded-full mt-1.5 flex-shrink-0"></span>Funding: $3.5m pre-seed</li>
</ul>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group cursor-pointer" onclick="startOnboarding()">
<div className="flex items-center gap-2 mb-3">
<i className="w-4 h-4 text-orange-500" data-lucide="bar-chart-3"></i>
<h3 className="text-sm font-semibold text-orange-500">Measure &amp; Track</h3>
</div>
<div className="flex flex-col h-24 justify-between">
<p className="text-xs text-slate-400 italic">No KPI module active</p>
<button className="text-xs font-semibold text-orange-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                            Set up KPI Module <i className="w-3 h-3" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</main>

<main className="hidden flex-1 flex flex-col overflow-hidden bg-slate-50 relative" id="view-onboarding">

<div className="w-full border-b border-slate-200 bg-white sticky top-0 z-30">
<div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-6 w-6 bg-orange-100 rounded text-orange-600 flex items-center justify-center">
<i className="w-3.5 h-3.5" data-lucide="activity"></i>
</div>
<span className="font-semibold text-slate-900 text-sm">Pulse Setup</span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1">
<span className="text-xs font-medium text-orange-600" id="step-indicator">Step 1</span>
<span className="text-xs text-slate-400">of 4</span>
</div>
<div className="w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-orange-600 rounded-full transition-all duration-500" id="progress-bar" style={{width: '25%'}}></div>
</div>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto" id="wizard-scroll-container">
<div className="max-w-4xl mx-auto px-6 py-10 pb-24 min-h-full flex flex-col">

<div className="step-content fade-in" id="step-1">
<div className="mb-12">
<h1 className="text-3xl text-slate-900 font-semibold tracking-tight mb-3">Let's set your compass</h1>
<p className="text-base text-slate-500">To build the perfect dashboard, we need to know what matters most right now.</p>
</div>
<div className="space-y-12">

<div>
<label className="block text-xl font-semibold text-slate-900 mb-6">What is your primary business goal?</label>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<button className="goal-opt group relative flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white hover:border-orange-200 hover:bg-orange-50/30 transition-all text-left w-full focus:outline-none focus:ring-2 focus:ring-orange-500/20" onclick="selectGoal(this)">
<div className="mt-0.5"><div className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-orange-500 flex items-center justify-center"><div className="w-2.5 h-2.5 rounded-full bg-orange-600 opacity-0 transition-opacity check-dot"></div></div></div>
<span className="text-base font-medium text-slate-700 group-hover:text-slate-900">Grow revenue and profitability</span>
</button>
<button className="goal-opt group relative flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white hover:border-orange-200 hover:bg-orange-50/30 transition-all text-left w-full focus:outline-none focus:ring-2 focus:ring-orange-500/20" onclick="selectGoal(this)">
<div className="mt-0.5"><div className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-orange-500 flex items-center justify-center"><div className="w-2.5 h-2.5 rounded-full bg-orange-600 opacity-0 transition-opacity check-dot"></div></div></div>
<span className="text-base font-medium text-slate-700 group-hover:text-slate-900">Scale user acquisition</span>
</button>
<button className="goal-opt group relative flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white hover:border-orange-200 hover:bg-orange-50/30 transition-all text-left w-full focus:outline-none focus:ring-2 focus:ring-orange-500/20" onclick="selectGoal(this)">
<div className="mt-0.5"><div className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-orange-500 flex items-center justify-center"><div className="w-2.5 h-2.5 rounded-full bg-orange-600 opacity-0 transition-opacity check-dot"></div></div></div>
<span className="text-base font-medium text-slate-700 group-hover:text-slate-900">Achieve product-market fit</span>
</button>
<button className="goal-opt group relative flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white hover:border-orange-200 hover:bg-orange-50/30 transition-all text-left w-full focus:outline-none focus:ring-2 focus:ring-orange-500/20" onclick="selectGoal(this)">
<div className="mt-0.5"><div className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-orange-500 flex items-center justify-center"><div className="w-2.5 h-2.5 rounded-full bg-orange-600 opacity-0 transition-opacity check-dot"></div></div></div>
<span className="text-base font-medium text-slate-700 group-hover:text-slate-900">Expand to new markets</span>
</button>
<button className="goal-opt group relative flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white hover:border-orange-200 hover:bg-orange-50/30 transition-all text-left w-full focus:outline-none focus:ring-2 focus:ring-orange-500/20" onclick="selectGoal(this)">
<div className="mt-0.5"><div className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-orange-500 flex items-center justify-center"><div className="w-2.5 h-2.5 rounded-full bg-orange-600 opacity-0 transition-opacity check-dot"></div></div></div>
<span className="text-base font-medium text-slate-700 group-hover:text-slate-900">Improve operational efficiency</span>
</button>
<button className="goal-opt w-full group relative flex flex-col justify-center gap-3 p-5 rounded-xl border border-slate-200 bg-white hover:border-orange-200 hover:bg-orange-50/30 transition-all text-left focus:outline-none focus:ring-2 focus:ring-orange-500/20" onclick="selectGoal(this, true)">
<div className="flex items-start gap-4">
<div className="mt-0.5"><div className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-orange-500 flex items-center justify-center"><div className="w-2.5 h-2.5 rounded-full bg-orange-600 opacity-0 transition-opacity check-dot"></div></div></div>
<span className="text-base font-medium text-slate-700 group-hover:text-slate-900">Other (describe your goal)</span>
</div>
<div className="w-full hidden pl-9 pt-1" id="other-input-container">
<input className="w-full bg-transparent border-b border-slate-300 focus:border-orange-600 outline-none text-sm py-1 placeholder:text-slate-400" placeholder="Type here..." type="text"/>
</div>
</button>
</div>
</div>

<div>
<label className="block text-xl font-semibold text-slate-900 mb-6">How long do you want this goal to span?</label>
<div className="flex flex-wrap gap-3">
<button className="span-opt px-6 py-3 rounded-xl border border-slate-200 bg-white text-base font-medium text-slate-700 hover:border-orange-300 hover:text-orange-700 transition-colors" onclick="selectSpan(this)">6 months</button>
<button className="span-opt px-6 py-3 rounded-xl border border-slate-200 bg-white text-base font-medium text-slate-700 hover:border-orange-300 hover:text-orange-700 transition-colors" onclick="selectSpan(this)">12 months</button>
<button className="span-opt px-6 py-3 rounded-xl border border-slate-200 bg-white text-base font-medium text-slate-700 hover:border-orange-300 hover:text-orange-700 transition-colors" onclick="selectSpan(this)">18 months</button>
</div>
</div>
</div>
</div>

<div className="hidden flex-1 flex flex-col items-center justify-center py-20 fade-in" id="loading-screen">
<div className="relative w-20 h-20 flex items-center justify-center mb-8">
<div className="absolute w-full h-full rounded-full border-4 border-orange-100"></div>
<div className="loading-ring absolute w-full h-full"></div>
<i className="w-8 h-8 text-orange-600 relative z-10" data-lucide="brain-circuit"></i>
</div>
<h2 className="text-xl font-semibold text-slate-900 mb-2">Analyzing your strategy...</h2>
<p className="text-sm text-slate-500 max-w-sm text-center">Identifying the 7 vital metrics that align with your growth phase and market position.</p>
</div>

<div className="step-content hidden h-full flex flex-col" id="step-2">
<div className="mb-6 flex items-end justify-between flex-shrink-0">
<div>
<h1 className="text-2xl text-slate-900 font-semibold tracking-tight mb-2">Your KPI Framework</h1>
<p className="text-sm text-slate-500">A balanced scorecard approach tailored to your inputs.</p>
</div>

<div className="bg-slate-200 p-1.5 rounded-xl flex text-sm font-semibold shadow-inner">
<button className="px-5 py-2.5 rounded-lg bg-white text-slate-900 shadow-sm transition-all flex items-center gap-2" id="tab-chat" onclick="switchTab('chat')">
<i className="w-4 h-4" data-lucide="message-square"></i> Assistant
                                </button>
<button className="px-5 py-2.5 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-200/50 transition-all flex items-center gap-2" id="tab-builder" onclick="switchTab('builder')">
<i className="w-4 h-4" data-lucide="layout-grid"></i> Builder
                                </button>
</div>
</div>

<div className="flex flex-col gap-6 fade-in flex-1 overflow-y-auto pr-2" id="kpi-chat-interface">

<div className="flex gap-4">
<div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 border border-orange-200 mt-1">
<i className="w-5 h-5 text-orange-600" data-lucide="sparkles"></i>
</div>
<div className="flex flex-col gap-4 max-w-3xl w-full">
<div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none p-6 shadow-sm">
<p className="text-sm leading-relaxed mb-4 text-slate-700">
                                            Based on your goal to <span className="font-semibold text-slate-900">Grow revenue</span> and your current company stage, I've selected a <strong>Balanced 7-KPI Set</strong>. 
                                            <br/><br/>
                                            I selected <strong className="text-orange-600">MRR</strong> as your <i className="w-3 h-3 inline fill-orange-500 text-orange-500" data-lucide="star"></i> <strong>North Star</strong> because predictable revenue is the primary valuation driver for your stage. The other 6 KPIs were chosen from diverse categories (Efficiency, Sales, Retention) to ensure you don't over-optimize for growth at the expense of stability.
                                        </p>

<div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-4">
<div className="flex items-center justify-between mb-3 border-b border-slate-200 pb-2">
<span className="text-xs font-bold text-slate-500 uppercase">Your Proposed Set (7 Total)</span>
</div>
<div className="space-y-2">

<div className="flex items-center gap-3 p-2 bg-orange-50/50 rounded border border-orange-100">
<i className="w-4 h-4 fill-orange-500 text-orange-500 flex-shrink-0" data-lucide="star"></i>
<span className="text-sm font-semibold text-slate-900">MRR (Monthly Recurring Revenue)</span>
</div>

<div className="grid grid-cols-2 gap-2">
<div className="flex items-center gap-2 p-1.5"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div><span className="text-xs font-medium text-slate-700">Net Revenue Retention</span></div>
<div className="flex items-center gap-2 p-1.5"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div><span className="text-xs font-medium text-slate-700">CAC Payback Period</span></div>
<div className="flex items-center gap-2 p-1.5"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div><span className="text-xs font-medium text-slate-700">Sales Qualified Leads</span></div>
<div className="flex items-center gap-2 p-1.5"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div><span className="text-xs font-medium text-slate-700">Gross Margin</span></div>
<div className="flex items-center gap-2 p-1.5"><div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div><span className="text-xs font-medium text-slate-700">Churn Rate</span></div>
<div className="flex items-center gap-2 p-1.5"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div><span className="text-xs font-medium text-slate-700">Burn Rate</span></div>
</div>
</div>
</div>
<p className="text-sm font-medium text-slate-900">Are you satisfied and ready to proceed with these 7 metrics?</p>
</div>

<div className="flex flex-wrap gap-3" id="chat-actions">
<button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-colors shadow-sm shadow-orange-200 flex-1 md:flex-none text-center" onclick="nextStep()">
                                            I'm ok with that
                                        </button>
<button className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-6 py-2.5 rounded-xl text-sm font-medium transition-colors flex-1 md:flex-none text-center" onclick="showQuestionInput()">
                                            I'm still confused
                                        </button>
<button className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-6 py-2.5 rounded-xl text-sm font-medium transition-colors flex-1 md:flex-none text-center" onclick="switchTab('builder')">
                                            I want to edit
                                        </button>
</div>

<div className="hidden flex gap-2 w-full fade-in" id="question-input-area">
<input className="flex-1 bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-sm" id="user-question" placeholder="Ask about metrics, benchmarks, or why these were chosen..." type="text"/>
<button className="bg-slate-900 text-white px-5 py-3 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors" onclick="sendQuestion()">
<i className="w-4 h-4" data-lucide="send"></i>
</button>
</div>

<div className="space-y-6 w-full" id="chat-history"></div>
</div>
</div>
</div>

<div className="hidden fade-in h-full" id="kpi-edit-interface">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">

<div className="flex flex-col gap-3 h-full overflow-hidden">
<div className="flex items-center justify-between px-1">
<h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Available Library</h3>
<button className="text-xs flex items-center gap-1 text-slate-500 hover:text-orange-600 transition-colors">
<i className="w-3 h-3" data-lucide="filter"></i> Filter
                                        </button>
</div>
<div className="bg-slate-50 rounded-xl border border-slate-200 p-4 flex-1 overflow-y-auto space-y-3 custom-scrollbar">

<div className="group bg-white p-3 rounded-lg border border-slate-200 shadow-sm cursor-pointer hover:border-orange-300 hover:shadow-md transition-all flex items-center justify-between" onclick="addToSelected(this)">
<div>
<div className="text-sm font-semibold text-slate-800">LTV/CAC Ratio</div>
<div className="text-[10px] text-slate-500">Efficiency</div>
</div>
<div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-orange-100">
<i className="w-3.5 h-3.5 text-slate-400 group-hover:text-orange-600" data-lucide="plus"></i>
</div>
</div>

<div className="group bg-white p-3 rounded-lg border border-slate-200 shadow-sm cursor-pointer hover:border-orange-300 hover:shadow-md transition-all flex items-center justify-between" onclick="addToSelected(this)">
<div>
<div className="text-sm font-semibold text-slate-800">DAU/MAU</div>
<div className="text-[10px] text-slate-500">Engagement</div>
</div>
<div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-orange-100">
<i className="w-3.5 h-3.5 text-slate-400 group-hover:text-orange-600" data-lucide="plus"></i>
</div>
</div>

<div className="group bg-white p-3 rounded-lg border border-slate-200 shadow-sm cursor-pointer hover:border-orange-300 hover:shadow-md transition-all flex items-center justify-between" onclick="addToSelected(this)">
<div>
<div className="text-sm font-semibold text-slate-800">NPS</div>
<div className="text-[10px] text-slate-500">Customer Satisfaction</div>
</div>
<div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-orange-100">
<i className="w-3.5 h-3.5 text-slate-400 group-hover:text-orange-600" data-lucide="plus"></i>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-3 h-full overflow-hidden">
<div className="flex items-center justify-between px-1">
<h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Selected Dashboard (7/7)</h3>
<button className="text-xs font-semibold text-orange-600 hover:text-orange-700 bg-orange-50 px-2 py-1 rounded flex items-center gap-1 transition-colors">
<i className="w-3 h-3" data-lucide="refresh-cw"></i> AI Re-generate
                                        </button>
</div>
<div className="bg-white border-2 border-slate-200 rounded-xl p-4 shadow-sm flex-1 overflow-y-auto space-y-3" id="selected-kpis-container">

<div className="relative group bg-white p-3 rounded-lg border border-orange-200 ring-1 ring-orange-100 shadow-sm flex items-center justify-between transition-all">
<div className="flex items-center gap-3">
<button className="p-1 rounded hover:bg-orange-50 transition-colors focus:outline-none" onclick="setNorthStar(this)" title="Set as North Star">
<i className="w-4 h-4 fill-orange-500 text-orange-500" data-lucide="star"></i>
</button>
<div>
<div className="flex items-center gap-2">
<input className="text-sm font-bold text-slate-900 bg-transparent border-none p-0 focus:ring-0 w-32" type="text" value="MRR"/>
<i className="w-3 h-3 text-slate-300 cursor-pointer hover:text-slate-500" data-lucide="pencil"></i>
</div>
<div className="text-[10px] text-orange-600 font-medium">North Star Metric</div>
</div>
</div>
<button className="p-1.5 hover:bg-red-50 rounded text-slate-300 hover:text-red-500 transition-colors" onclick="removeKPI(this)"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>

<div className="relative group bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex items-center justify-between hover:border-slate-300 transition-all">
<div className="flex items-center gap-3">
<button className="p-1 rounded hover:bg-orange-50 transition-colors focus:outline-none" onclick="setNorthStar(this)" title="Set as North Star">
<i className="w-4 h-4 text-slate-300 hover:text-orange-400" data-lucide="star"></i>
</button>
<div>
<div className="flex items-center gap-2">
<input className="text-sm font-semibold text-slate-700 bg-transparent border-none p-0 focus:ring-0 w-40" type="text" value="Net Revenue Retention"/>
<i className="w-3 h-3 text-slate-300 cursor-pointer hover:text-slate-500" data-lucide="pencil"></i>
</div>
<div className="text-[10px] text-slate-400">Retention</div>
</div>
</div>
<button className="p-1.5 hover:bg-red-50 rounded text-slate-300 hover:text-red-500 transition-colors" onclick="removeKPI(this)"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>

<div className="relative group bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex items-center justify-between hover:border-slate-300 transition-all">
<div className="flex items-center gap-3">
<button className="p-1 rounded hover:bg-orange-50 transition-colors" onclick="setNorthStar(this)"><i className="w-4 h-4 text-slate-300 hover:text-orange-400" data-lucide="star"></i></button>
<div><div className="text-sm font-semibold text-slate-700">CAC Payback</div><div className="text-[10px] text-slate-400">Efficiency</div></div>
</div>
<button className="p-1.5 hover:bg-red-50 rounded text-slate-300 hover:text-red-500" onclick="removeKPI(this)"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
<div className="relative group bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex items-center justify-between hover:border-slate-300 transition-all">
<div className="flex items-center gap-3">
<button className="p-1 rounded hover:bg-orange-50 transition-colors" onclick="setNorthStar(this)"><i className="w-4 h-4 text-slate-300 hover:text-orange-400" data-lucide="star"></i></button>
<div><div className="text-sm font-semibold text-slate-700">Sales Qualified Leads</div><div className="text-[10px] text-slate-400">Sales</div></div>
</div>
<button className="p-1.5 hover:bg-red-50 rounded text-slate-300 hover:text-red-500" onclick="removeKPI(this)"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
<div className="relative group bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex items-center justify-between hover:border-slate-300 transition-all">
<div className="flex items-center gap-3">
<button className="p-1 rounded hover:bg-orange-50 transition-colors" onclick="setNorthStar(this)"><i className="w-4 h-4 text-slate-300 hover:text-orange-400" data-lucide="star"></i></button>
<div><div className="text-sm font-semibold text-slate-700">Gross Margin</div><div className="text-[10px] text-slate-400">Finance</div></div>
</div>
<button className="p-1.5 hover:bg-red-50 rounded text-slate-300 hover:text-red-500" onclick="removeKPI(this)"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
<div className="relative group bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex items-center justify-between hover:border-slate-300 transition-all">
<div className="flex items-center gap-3">
<button className="p-1 rounded hover:bg-orange-50 transition-colors" onclick="setNorthStar(this)"><i className="w-4 h-4 text-slate-300 hover:text-orange-400" data-lucide="star"></i></button>
<div><div className="text-sm font-semibold text-slate-700">Churn Rate</div><div className="text-[10px] text-slate-400">Retention</div></div>
</div>
<button className="p-1.5 hover:bg-red-50 rounded text-slate-300 hover:text-red-500" onclick="removeKPI(this)"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
<div className="relative group bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex items-center justify-between hover:border-slate-300 transition-all">
<div className="flex items-center gap-3">
<button className="p-1 rounded hover:bg-orange-50 transition-colors" onclick="setNorthStar(this)"><i className="w-4 h-4 text-slate-300 hover:text-orange-400" data-lucide="star"></i></button>
<div><div className="text-sm font-semibold text-slate-700">Burn Rate</div><div className="text-[10px] text-slate-400">Finance</div></div>
</div>
<button className="p-1.5 hover:bg-red-50 rounded text-slate-300 hover:text-red-500" onclick="removeKPI(this)"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="step-content hidden" id="step-3">
<div className="mb-8">
<h1 className="text-2xl text-slate-900 font-semibold tracking-tight mb-2">Set your Targets</h1>
<p className="text-sm text-slate-500">Define the success criteria for the next 12 months.</p>
</div>
<div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
<div className="grid grid-cols-12 bg-slate-50 border-b border-slate-200 py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
<div className="col-span-6">Metric</div>
<div className="col-span-2">Unit</div>
<div className="col-span-4">Target (12 Months)</div>
</div>
<div className="divide-y divide-slate-100" id="targets-container">

<div className="grid grid-cols-12 py-4 px-4 items-center bg-orange-50/40">
<div className="col-span-6 pr-4">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-orange-500 fill-orange-500" data-lucide="star"></i>
<div>
<p className="text-sm font-semibold text-slate-900">MRR</p>
<p className="text-[10px] text-orange-600 font-medium">North Star (Required)</p>
</div>
</div>
</div>
<div className="col-span-2 pr-4">
<div className="px-2 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs text-slate-500 font-medium text-center">Currency ($)</div>
</div>
<div className="col-span-4">
<input className="w-full pl-3 pr-3 py-2 border-orange-300 bg-white border rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-sm" id="target-north-star" placeholder="e.g. 100,000" type="text"/>
</div>
</div>

<div className="grid grid-cols-12 py-4 px-4 items-center">
<div className="col-span-6 pr-4"><p className="text-sm font-medium text-slate-700">Net Revenue Retention</p></div>
<div className="col-span-2 pr-4"><div className="px-2 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs text-slate-500 font-medium text-center">Percent (%)</div></div>
<div className="col-span-4"><input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" placeholder="Optional" type="text"/></div>
</div>
<div className="grid grid-cols-12 py-4 px-4 items-center">
<div className="col-span-6 pr-4"><p className="text-sm font-medium text-slate-700">CAC Payback</p></div>
<div className="col-span-2 pr-4"><div className="px-2 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs text-slate-500 font-medium text-center">Months</div></div>
<div className="col-span-4"><input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" placeholder="Optional" type="text"/></div>
</div>

</div>
</div>
</div>

<div className="step-content hidden" id="step-4">
<div className="mb-8">
<h1 className="text-2xl text-slate-900 font-semibold tracking-tight mb-2">Assemble the Squad</h1>
<p className="text-sm text-slate-500">Who should have visibility and ownership?</p>
</div>
<div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 space-y-6">
<div>
<label className="block text-sm font-medium text-slate-900 mb-2">Invite team members</label>
<div className="flex gap-2">
<input className="flex-1 px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all" id="invite-email" placeholder="colleague@company.com" type="email"/>
<button className="bg-slate-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm" onclick="addTeamMember()">Invite</button>
</div>
</div>
<div className="border-t border-slate-100 pt-4">
<h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Team Access</h3>
<div className="space-y-4" id="team-list">

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-sm font-bold border border-orange-200">N</div>
<div>
<p className="text-sm font-semibold text-slate-900">You</p>
<p className="text-xs text-slate-500">Admin</p>
</div>
</div>
<span className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-semibold text-slate-600">Owner</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<footer className="border-t border-slate-200 bg-white p-5 sticky bottom-0 z-30">
<div className="max-w-4xl mx-auto flex items-center justify-between">
<button className="text-sm font-medium text-slate-500 hover:text-slate-800 px-4 py-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled="" id="back-btn" onclick="prevStep()">
                        Back
                    </button>
<button className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-3 rounded-xl text-sm font-medium shadow-lg shadow-orange-200/50 transition-all transform active:scale-95" id="next-btn" onclick="nextStep()">
                        Next
                    </button>
</div>
</footer>
</main>
</div>


    </>
  );
}
