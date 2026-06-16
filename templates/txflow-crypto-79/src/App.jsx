import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
bg: '#050505',
header: '#050505',
surface: '#0A0A0A',
border: '#1A1A1A',
primary: '#00FF85',
'primary-hover': '#00CC6A',
secondary: '#A3A3A3',
white: '#FFFFFF',
'white-dim': 'rgba(255, 255, 255, 0.6)',
'white-dimmer': 'rgba(255, 255, 255, 0.3)',
danger: '#FF453A',
},
fontFamily: {
mono: ['"JetBrains Mono"', 'monospace'],
grotesk: ['"Space Grotesk"', 'sans-serif'],
},
maxWidth: {
'container': '1400px',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // --- Interaction Logic ---
      const $ = (id) => document.getElementById(id);
      const $$ = (sel) => document.querySelectorAll(sel);

      // Tab Switching Logic
      function switchTab(tabId) {
          $$('.tab-content').forEach(el => el.classList.add('hidden'));
          const activeContent = $('view-' + tabId);
          if (activeContent) activeContent.classList.remove('hidden');

          $$('.tab-btn').forEach(btn => {
              btn.classList.remove('border-white', 'text-white', 'font-bold');
              btn.classList.add('border-transparent', 'text-secondary', 'font-medium');
          });

          const activeBtn = $('tab-' + tabId);
          if (activeBtn) {
              activeBtn.classList.remove('border-transparent', 'text-secondary', 'font-medium');
              activeBtn.classList.add('border-white', 'text-white', 'font-bold');
          }
      }

      // 1. Mobile Menu
      const mobileMenu = $('mobile-menu');
      const btnMenu = $('btn-mobile-menu');
      const btnCloseMenu = $('close-menu');

      function toggleMenu() {
        const isHidden = mobileMenu.classList.contains('hidden');
        if (isHidden) {
          mobileMenu.classList.remove('hidden');
          requestAnimationFrame(() => mobileMenu.classList.remove('opacity-0'));
        } else {
          mobileMenu.classList.add('opacity-0');
          setTimeout(() => mobileMenu.classList.add('hidden'), 300);
        }
      }
      if(btnMenu) btnMenu.onclick = toggleMenu;
      if(btnCloseMenu) btnCloseMenu.onclick = toggleMenu;

      // 2. Toast System
      let toastTimer;
      function showToast(msg, type = 'success') {
        const toast = $('toast');
        const title = $('toast-title');
        const message = $('toast-msg');

        title.innerText = type === 'success' ? 'Success' : 'Notification';
        message.innerText = msg;

        toast.classList.remove('translate-y-32');

        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
          toast.classList.add('translate-y-32');
        }, 3000);
      }

      // 3. Modals
      const backdrop = $('modal-backdrop');

      function openModal(modalId) {
        backdrop.classList.remove('hidden');
        $$('[id^="modal-"]').forEach(el => {
          if (el !== backdrop) {
            el.classList.add('hidden');
            el.classList.remove('scale-100');
            el.classList.add('scale-95');
          }
        });

        const target = $(modalId);
        if(target) {
            target.classList.remove('hidden');
            requestAnimationFrame(() => {
                backdrop.classList.remove('opacity-0');
                target.classList.remove('scale-95');
                target.classList.add('scale-100');
            });
        }
      }

      function closeAllModals() {
        backdrop.classList.add('opacity-0');
        $$('[id^="modal-"]').forEach(el => {
          if(el !== backdrop) {
            el.classList.remove('scale-100');
            el.classList.add('scale-95');
          }
        });
        setTimeout(() => {
          backdrop.classList.add('hidden');
          $$('[id^="modal-"]').forEach(el => {
              if(el !== backdrop) el.classList.add('hidden');
          });
        }, 300);
      }

      if(backdrop) backdrop.onclick = (e) => { if(e.target === backdrop) closeAllModals(); };
      $$('.close-modal').forEach(btn => btn.onclick = closeAllModals);

      // 4. Button Bindings
      if($('btn-claim')) $('btn-claim').onclick = () => showToast('Rewards claimed to wallet successfully!');
      if($('btn-share')) $('btn-share').onclick = () => showToast('Referral link copied to clipboard.');
      if($('btn-wallet')) $('btn-wallet').onclick = () => showToast('Wallet details copied!', 'info');
    


      // --- Interaction Logic ---
      function handleCreateCode() {
        closeAllModals();
        showToast('Referral code created successfully!', 'success');

        const cardContent = document.querySelector('#referral-card-container .relative.z-10');
        if(!cardContent) return;

        // Animate out
        cardContent.style.opacity = '0';
        cardContent.style.transition = 'opacity 0.2s ease';

        setTimeout(() => {
            const boundSection = document.getElementById('bound-code-section');
            const boundHtml = boundSection ? boundSection.outerHTML : '';

            cardContent.innerHTML = `
                <div class="flex flex-col gap-6">
                    <div class="w-12 h-12 bg-primary/10 flex items-center justify-center text-primary mb-2">
                        <iconify-icon icon="solar:gift-linear" class="text-2xl"></iconify-icon>
                    </div>
                    <h2 class="text-2xl font-bold text-white uppercase tracking-tight leading-tight">
                        Refer users &amp; Earn 10% Commission
                    </h2>
                    <p class="text-white-dim text-sm leading-relaxed max-w-md">
                        Your referral code is active! Share it with friends to earn 10% of the net fees generated by your referrals.
                    </p>
                </div>

                <div class="flex flex-col gap-4 mt-auto">
                    <div class="flex flex-col gap-2">
                        <label class="text-xs text-white-dim uppercase font-medium">Your Unique Code</label>
                        <div class="flex gap-2">
                            <div class="flex-1 bg-black border border-border px-4 flex items-center justify-between h-[46px] group-hover:border-primary/30 transition-colors">
                                <span class="font-mono text-lg text-white tracking-widest uppercase">ALEX-WAGMI</span>
                                <button class="text-white-dim hover:text-primary transition-colors" onclick="showToast('Code copied')">
                                    <iconify-icon icon="solar:copy-linear" class="text-lg"></iconify-icon>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-3">
                        <button class="h-[42px] bg-[#2AABEE]/10 border border-[#2AABEE]/20 text-[#2AABEE] hover:bg-[#2AABEE] hover:text-white transition-colors text-sm font-bold uppercase flex items-center justify-center gap-2" onclick="window.open('https://telegram.org', '_blank')">
                            <iconify-icon icon="ri:telegram-fill" class="text-xl"></iconify-icon>
                            Telegram
                        </button>
                        <button class="h-[42px] bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-colors text-sm font-bold uppercase flex items-center justify-center gap-2" onclick="window.open('https://twitter.com', '_blank')">
                            <iconify-icon icon="ri:twitter-x-fill" class="text-lg"></iconify-icon>
                            Twitter
                        </button>
                    </div>
                </div>
                ${boundHtml}
            `;
            cardContent.style.opacity = '1';
        }, 200);
      }

      function handleConfirmCode() {
        const input = document.getElementById('input-referral-code');
        const code = input.value.trim().toUpperCase() || 'TX-8888';

        // Check for specific 'FAIL' code to trigger failure modal
        if (code === 'FAIL') {
            document.getElementById('fail-code-display').innerText = code;
            openModal('modal-bind-fail');
        } else {
            // Trigger success modal
            document.getElementById('success-code-display').innerText = code;
            openModal('modal-bind-success');
        }
      }

      function handleBindSuccess() {
        closeAllModals();
        showToast('Referral code applied!', 'success');
        handleEnterCode(); // Update the UI in the main card
      }

      function handleAcceptInvite() {
        closeAllModals();
        showToast('Invite Accepted! Binding account...', 'success');
        // Simulate binding delay
        setTimeout(() => {
            document.getElementById('success-code-display').innerText = '0xEbBe...3EDC';
            openModal('modal-bind-success');
        }, 1500);
      }

      function handleEnterCode() {
        const code = document.getElementById('success-code-display').innerText || 'TX-8888';

        const cardContent = document.querySelector('#referral-card-container .relative.z-10');
        if(!cardContent) return;

        if(document.getElementById('bound-code-section')) return;

        const section = document.createElement('div');
        section.id = 'bound-code-section';
        section.className = 'mt-6 pt-6 border-t border-dashed border-white/10 flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500';
        section.innerHTML = `
            <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wide">
                <iconify-icon icon="solar:check-circle-bold" class="text-sm"></iconify-icon>
                Code Applied
            </div>
            <div class="bg-black/50 border border-border p-3 flex items-center justify-between group hover:border-primary/30 transition-colors">
                <div class="flex flex-col gap-1">
                    <span class="text-[10px] text-white-dim uppercase font-medium">You are using code</span>
                    <span class="text-sm text-white font-mono font-bold tracking-widest uppercase">${code}</span>
                </div>
                <span class="text-[10px] font-bold text-black bg-primary px-1.5 py-0.5 uppercase">-5% Fees</span>
            </div>
        `;
        cardContent.appendChild(section);
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="border-b border-border h-[56px] flex items-center px-4 md:px-6 sticky top-0 z-50 bg-header backdrop-blur-md w-full">
<div className="flex items-center justify-between w-full max-w-[1920px] mx-auto">

<div className="flex items-center gap-8">

<div className="flex items-center gap-2 text-primary font-bold tracking-tight cursor-pointer">
<iconify-icon className="text-xl" icon="solar:bolt-linear"></iconify-icon>
<span className="text-lg tracking-tight uppercase">TxFlow</span>
</div>

<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="text-white hover:text-primary transition-colors" href="#">
              Trade
            </a>
<a className="text-white hover:text-primary transition-colors" href="#">
              Vaults
            </a>
<a className="text-white hover:text-primary transition-colors" href="#">
              Portfolio
            </a>
<a className="text-primary font-medium" href="#">Referrals</a>
<a className="text-white hover:text-primary transition-colors" href="#">
              Explore
            </a>
</nav>
</div>

<div className="flex items-center gap-6 text-sm">
<div className="hidden lg:flex items-center gap-6">
<span className="text-white hover:text-primary cursor-pointer transition-colors">
              Testnet
            </span>
<div className="flex items-center gap-1 cursor-pointer group">
<span className="text-white group-hover:text-primary transition-colors">
                Points
              </span>
<div className="bg-primary text-black text-[8px] font-bold px-1 py-[1px] leading-tight flex items-center h-[12px]">
                HOT
              </div>
</div>
<a className="text-white hover:text-primary transition-colors" href="#">
              Docs
            </a>
</div>
<div className="hidden sm:flex items-center gap-2 bg-primary/15 px-2 py-1 text-primary border border-primary/20 h-[22px]">
<iconify-icon className="text-xs" icon="solar:stars-minimalistic-linear"></iconify-icon>
<span className="text-[10px] font-medium uppercase leading-none">
              Rewards Hub
            </span>
</div>

<div className="flex items-center gap-3 border border-[#3C3D3C] px-3 h-[32px] hover:border-primary/50 transition-colors cursor-pointer bg-transparent" id="btn-wallet">
<span className="text-xs font-medium text-white font-grotesk">
              0xEbBe...3EDC
            </span>
<iconify-icon className="text-secondary text-sm" icon="ri:arrow-down-s-line"></iconify-icon>
</div>

<button className="md:hidden text-white">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</header>

<main className="flex-1 px-4 md:px-6 py-8 max-w-container mx-auto w-full flex flex-col gap-8">

<div className="flex flex-col gap-6 w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
<div className="flex items-center justify-between">
<h1 className="text-xl font-semibold text-white tracking-tight uppercase font-grotesk">
            Referral Dashboard
          </h1>
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
<span className="text-xs font-mono text-primary">Live Updates</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="relative overflow-hidden bg-surface border border-primary/30 rounded-none p-5 flex flex-col justify-between gap-4 group hover:border-primary/50 transition-all shadow-[0_0_30px_-15px_rgba(0,255,133,0.15)]">
<div className="absolute -right-6 -top-6 text-primary/5 group-hover:text-primary/10 transition-colors pointer-events-none">
<iconify-icon className="text-9xl" icon="lucide:wallet"></iconify-icon>
</div>
<div className="relative z-10 flex flex-col gap-1">
<span className="text-secondary text-xs font-medium uppercase tracking-wider">
                Claimable Rebate
              </span>
<span className="text-3xl font-mono font-semibold text-primary tracking-tight drop-shadow-[0_0_8px_rgba(0,255,133,0.4)]">
                $888.88
              </span>
</div>
<button className="relative z-10 w-fit h-8 px-4 bg-primary text-black text-xs font-bold uppercase tracking-wide flex items-center gap-2 hover:bg-primary-hover transition-colors shadow-[0_0_15px_-5px_rgba(0,255,133,0.6)]" id="btn-claim-kpi" onclick="showToast('Rewards claimed!')">
<iconify-icon className="text-sm" icon="lucide:arrow-down-to-line"></iconify-icon>
              Claim
            </button>
</div>

<div className="bg-surface border border-white/5 rounded-none p-5 flex flex-col justify-center gap-2 hover:border-white/10 transition-all group">
<div className="flex items-center gap-2 text-secondary text-xs font-medium uppercase tracking-wider group-hover:text-white transition-colors">
<iconify-icon className="text-sm" icon="lucide:coins"></iconify-icon>
              Total Earned
            </div>
<span className="text-2xl font-mono font-semibold text-white tracking-tight">
              $9,777.76
            </span>
</div>

<div className="bg-surface border border-white/5 rounded-none p-5 flex flex-col justify-center gap-2 hover:border-white/10 transition-all group">
<div className="flex items-center gap-2 text-secondary text-xs font-medium uppercase tracking-wider group-hover:text-white transition-colors">
<iconify-icon className="text-sm" icon="lucide:users"></iconify-icon>
              Traders Referred
            </div>
<span className="text-2xl font-mono font-semibold text-white tracking-tight">
              100
            </span>
</div>

<div className="bg-surface border border-white/5 rounded-none p-5 flex flex-col justify-center gap-2 hover:border-white/10 transition-all group">
<div className="flex items-center gap-2 text-secondary text-xs font-medium uppercase tracking-wider group-hover:text-white transition-colors">
<iconify-icon className="text-sm" icon="lucide:zap"></iconify-icon>
              XP Boost
            </div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-mono font-semibold text-white tracking-tight">
                1.05x
              </span>
<span className="text-[10px] font-bold text-black bg-primary px-1.5 py-0.5 uppercase">
                Active
              </span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch animate-in fade-in slide-in-from-bottom-8 duration-1000">

<div className="lg:col-span-7 xl:col-span-8 bg-surface border border-white/5 p-6 md:p-8 flex flex-col gap-6 relative">
<div className="flex items-center justify-between border-b border-white/5 pb-4">
<h3 className="text-white font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
<iconify-icon className="text-primary" icon="lucide:share-2"></iconify-icon>
              Referral Link
            </h3>
<span className="text-xs text-secondary hidden sm:inline-block">
              Earn 10% lifetime commissions
            </span>
</div>

<div className="flex flex-col gap-2">
<label className="text-xs text-secondary uppercase font-medium">
              Your Unique Link
            </label>
<div className="flex w-full group">
<div className="flex-1 bg-black/40 border border-white/10 border-r-0 h-12 flex items-center px-4 font-mono text-sm text-white/80 select-all group-hover:border-primary/30 transition-colors truncate">
                https://txflow.io/r/ALEX-WAGMI
              </div>
<button className="h-12 w-12 bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-colors flex items-center justify-center" onclick="showToast('Referral link copied')" title="Copy">
<iconify-icon className="text-lg" icon="lucide:copy"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<button className="h-10 border border-white/10 bg-transparent text-white hover:bg-[#2AABEE] hover:border-[#2AABEE] hover:text-white transition-all text-xs font-bold uppercase tracking-wide flex items-center justify-center gap-2 group" onclick="window.open('https://telegram.org', '_blank')">
<iconify-icon className="text-base group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" icon="lucide:send"></iconify-icon>
              Telegram
            </button>
<button className="h-10 border border-white/10 bg-transparent text-white hover:bg-white hover:text-black transition-all text-xs font-bold uppercase tracking-wide flex items-center justify-center gap-2 group" onclick="window.open('https://twitter.com', '_blank')">
<iconify-icon className="text-base group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" icon="lucide:twitter"></iconify-icon>
              Twitter / X
            </button>
</div>

<div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-3">
<div className="flex justify-between items-end text-xs">
<span className="text-secondary font-medium uppercase">
                Volume Goal (Unlock Tier 2)
              </span>
<span className="text-white font-mono font-semibold">
                $1,111.12
                <span className="text-white/30 font-normal">/</span>
                $10,000
              </span>
</div>
<div className="h-1.5 w-full bg-black border border-white/5">
<div className="h-full bg-primary w-[11%] shadow-[0_0_10px_rgba(0,255,133,0.5)]"></div>
</div>
</div>
</div>

<div className="lg:col-span-5 xl:col-span-4 bg-surface border border-white/5 p-6 md:p-8 flex flex-col gap-6">
<div className="flex items-center justify-between border-b border-white/5 pb-4">
<h3 className="text-white font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
<iconify-icon className="text-primary" icon="lucide:info"></iconify-icon>
              Structure
            </h3>
</div>
<div className="flex flex-col gap-5">

<div className="flex items-start gap-4 group">
<div className="w-10 h-10 shrink-0 bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-lg" icon="lucide:percent"></iconify-icon>
</div>
<div className="flex flex-col gap-0.5 pt-0.5">
<span className="text-white font-semibold text-sm uppercase tracking-wide">
                  10% Commission
                </span>
<span className="text-secondary text-xs leading-relaxed">
                  Earn 10% of fees from every trade your referrals make.
                </span>
</div>
</div>

<div className="flex items-start gap-4 group">
<div className="w-10 h-10 shrink-0 bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-lg" icon="lucide:zap"></iconify-icon>
</div>
<div className="flex flex-col gap-0.5 pt-0.5">
<span className="text-white font-semibold text-sm uppercase tracking-wide">
                  +5% XP Boost
                </span>
<span className="text-secondary text-xs leading-relaxed">
                  Both you and your invitee receive a permanent XP multiplier.
                </span>
</div>
</div>

<div className="flex items-start gap-4 group">
<div className="w-10 h-10 shrink-0 bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-lg" icon="lucide:tag"></iconify-icon>
</div>
<div className="flex flex-col gap-0.5 pt-0.5">
<span className="text-white font-semibold text-sm uppercase tracking-wide">
                  5% Fee Discount
                </span>
<span className="text-secondary text-xs leading-relaxed">
                  Invitees get cheaper trading fees on all pairs.
                </span>
</div>
</div>
</div>
</div>
</div>

<div className="border border-white/5 bg-surface flex flex-col font-mono text-xs">

<div className="flex flex-col md:flex-row items-start md:items-center justify-between px-6 pt-5 pb-0 border-b border-white/5 gap-4">
<div className="flex items-center gap-8 overflow-x-auto w-full md:w-auto scrollbar-hide">
<button className="tab-btn pb-3 border-b-2 border-primary text-white font-bold uppercase tracking-wider hover:text-white transition-colors whitespace-nowrap" id="tab-invitee" onclick="switchTab('invitee')">
              Invitee List
            </button>
<button className="tab-btn pb-3 border-b-2 border-transparent text-secondary font-medium uppercase tracking-wider hover:text-white transition-colors whitespace-nowrap" id="tab-affiliate" onclick="switchTab('affiliate')">
              Affiliate List
            </button>
<button className="tab-btn pb-3 border-b-2 border-transparent text-secondary font-medium uppercase tracking-wider hover:text-white transition-colors whitespace-nowrap" id="tab-claim" onclick="switchTab('claim')">
              Claim Records
            </button>
<button className="tab-btn pb-3 border-b-2 border-transparent text-secondary font-medium uppercase tracking-wider hover:text-white transition-colors whitespace-nowrap" id="tab-commission" onclick="switchTab('commission')">
              Commission Records
            </button>
</div>
<div className="pb-3 text-secondary font-medium uppercase tracking-wide hidden md:flex items-center gap-2">
<iconify-icon className="text-sm" icon="lucide:users"></iconify-icon>
            Total Invitees:
            <span className="text-white font-mono" id="total-count">100</span>
</div>
</div>

<div className="overflow-x-auto w-full relative min-h-[400px]">

<div className="tab-content min-w-[800px] animate-in fade-in duration-300" id="view-invitee">
<div className="grid grid-cols-5 gap-4 px-6 py-4 border-b border-white/5 text-secondary font-medium uppercase tracking-wide bg-[#0E0E0E]">
<div className="col-span-1">Address</div>
<div className="col-span-1">Invitation Time</div>
<div className="col-span-1">Trading Volume</div>
<div className="col-span-1">Trader Fees</div>
<div className="col-span-1 border-b border-dashed border-secondary/30 inline-block w-fit cursor-help" title="Commission details">
                Referral Commission
              </div>
</div>
<div className="flex flex-col">
<div className="grid grid-cols-5 gap-4 px-6 py-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors group items-center">
<div className="col-span-1 flex items-center gap-2 text-white font-medium uppercase">
                  0x1234...5678
                  <iconify-icon className="text-secondary hover:text-primary cursor-pointer transition-colors" icon="lucide:external-link"></iconify-icon>
</div>
<div className="col-span-1 text-secondary font-mono">
                  2025-12-24 23:59:59
                </div>
<div className="col-span-1 text-white font-mono">$888,888.88</div>
<div className="col-span-1 text-white font-mono">$8,888.88</div>
<div className="col-span-1 text-primary font-bold font-mono">
                  $888.88
                </div>
</div>

</div>
</div>

<div className="tab-content hidden min-w-[1000px] animate-in fade-in duration-300" id="view-affiliate">
<div className="px-6 py-4 flex items-center gap-3 text-xs border-b border-white/5 bg-[#0E0E0E]">
<span className="text-secondary">Affiliate Tier View</span>
</div>
<div className="p-12 flex flex-col items-center justify-center gap-3 opacity-50">
<iconify-icon className="text-4xl text-secondary" icon="lucide:network"></iconify-icon>
<p className="text-xs text-secondary uppercase tracking-widest">
                Affiliate Data Loading...
              </p>
</div>
</div>

<div className="tab-content hidden min-w-[800px] animate-in fade-in duration-300" id="view-claim">
<div className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-white/5 text-secondary font-medium uppercase tracking-wide bg-[#0E0E0E]">
<div className="col-span-1">Time</div>
<div className="col-span-1">Transaction Hash</div>
<div className="col-span-1">Amount Claimed</div>
<div className="col-span-1 text-right">Status</div>
</div>
<div className="flex flex-col">
<div className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors group items-center">
<div className="col-span-1 text-secondary font-mono">
                  2025-10-10 12:00:00
                </div>
<div className="col-span-1 flex items-center gap-2 text-white font-medium uppercase">
                  0xab...cd12
                  <iconify-icon className="hover:text-primary cursor-pointer text-secondary transition-colors" icon="lucide:copy"></iconify-icon>
</div>
<div className="col-span-1 text-white font-mono font-bold">
                  $1,234.56
                </div>
<div className="col-span-1 flex justify-end">
<span className="bg-primary/10 text-primary text-[10px] uppercase font-bold px-2 py-0.5 border border-primary/20">
                    Success
                  </span>
</div>
</div>
</div>
</div>

<div className="tab-content hidden min-w-[800px] animate-in fade-in duration-300" id="view-commission">
<div className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-white/5 text-secondary font-medium uppercase tracking-wide bg-[#0E0E0E]">
<div className="col-span-1">Time</div>
<div className="col-span-1">Source (User)</div>
<div className="col-span-1">Type</div>
<div className="col-span-1 text-right">Commission</div>
</div>
<div className="flex flex-col">
<div className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors group items-center">
<div className="col-span-1 text-secondary font-mono">
                  2025-11-05 14:20:00
                </div>
<div className="col-span-1 text-white font-mono uppercase">
                  0x1234...5678
                </div>
<div className="col-span-1 text-white-dim text-xs">
                  Trading Fee Rebate
                </div>
<div className="col-span-1 text-primary text-right font-mono font-bold">
                  +$12.50
                </div>
</div>
</div>
</div>

<div className="flex items-center justify-center gap-2 py-6 border-t border-white/5 mt-auto bg-surface">
<button className="w-8 h-8 flex items-center justify-center text-secondary hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="lucide:chevron-left"></iconify-icon>
</button>
<button className="w-6 h-6 flex items-center justify-center bg-white/10 text-white font-bold text-xs border border-white/10">
              1
            </button>
<button className="w-6 h-6 flex items-center justify-center text-secondary hover:text-white transition-colors text-xs font-medium">
              2
            </button>
<span className="text-secondary text-xs px-1">...</span>
<button className="w-8 h-8 flex items-center justify-center text-secondary hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="lucide:chevron-right"></iconify-icon>
</button>
</div>
</div>
</div>
</main>
<div className="relative z-[100]" id="interaction-layer">

<div className="fixed inset-0 bg-[#000000]/95 backdrop-blur-md z-50 hidden flex-col items-center justify-center gap-8 transition-opacity duration-300 opacity-0" id="mobile-menu">
<button className="absolute top-5 right-4 text-white p-2 hover:text-primary transition-colors" id="close-menu">
<iconify-icon className="text-4xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<nav className="flex flex-col items-center gap-8 text-2xl font-grotesk font-medium">
<a className="text-white hover:text-primary transition-colors" href="#">
            Trade
          </a>
<a className="text-white hover:text-primary transition-colors" href="#">
            Vaults
          </a>
<a className="text-white hover:text-primary transition-colors" href="#">
            Portfolio
          </a>
<a className="text-primary" href="#">Referrals</a>
<a className="text-white hover:text-primary transition-colors" href="#">
            Explore
          </a>
</nav>
</div>

<div className="fixed inset-0 bg-black/80 backdrop-blur-[2px] z-[60] hidden transition-opacity duration-300 opacity-0 flex items-center justify-center p-4" id="modal-backdrop">

<div className="bg-[#121412] border border-[#222622] w-full max-w-[440px] p-8 hidden flex-col items-center gap-8 shadow-2xl rounded-none relative scale-95 transition-all duration-300" id="modal-invite">
<button className="close-modal absolute top-5 right-5 text-secondary hover:text-white transition-colors" onclick="closeAllModals()">
<iconify-icon className="text-xl" icon="lucide:x"></iconify-icon>
</button>

<div className="w-16 h-16 rounded-none bg-[#1C261C] flex items-center justify-center mt-2">
<iconify-icon className="text-3xl text-primary" icon="lucide:users"></iconify-icon>
</div>

<div className="flex flex-col gap-4 text-center">
<h3 className="text-white font-bold font-grotesk text-lg leading-tight tracking-tight">
              You've been invited by your friend to join TxFlow
            </h3>
<div className="font-mono text-white text-base tracking-wide bg-transparent">
              User 0xEbBe...3EDC
            </div>
</div>

<div className="grid grid-cols-2 gap-4 w-full mt-2">
<button className="w-full h-[46px] border border-primary/40 hover:border-primary text-white font-medium rounded-none transition-colors flex items-center justify-center close-modal" onclick="closeAllModals()">
              Cancel
            </button>
<button className="w-full h-[46px] bg-primary hover:bg-primary-hover text-black font-semibold rounded-none transition-colors flex items-center justify-center" onclick="handleAcceptInvite()">
              Proceed
            </button>
</div>
</div>

<div className="bg-surface border border-border w-full max-w-md p-8 hidden flex-col gap-8 shadow-2xl scale-95 transition-all duration-300 rounded-none" id="modal-enter-code">
<div className="flex justify-between items-center">
<h3 className="text-white font-bold text-lg uppercase tracking-tight">
              Enter Referral Code
            </h3>
<button className="close-modal text-white-dim hover:text-white transition-colors rounded-none" onclick="handleEnterCode()">
<iconify-icon className="text-2xl" icon="solar:close-square-linear"></iconify-icon>
</button>
</div>
<div className="flex flex-col gap-3">
<label className="text-xs text-white-dim uppercase font-medium">
              Referral Code
            </label>
<input className="w-full bg-black border border-border p-4 text-white focus:border-primary focus:outline-none font-mono text-sm placeholder:text-white-dimmer uppercase tracking-wide transition-colors rounded-none" id="input-referral-code" placeholder="Ex: TX-1234 or try 'FAIL'" type="text"/>
</div>
<button className="w-full bg-primary text-black font-bold h-[46px] uppercase text-sm hover:bg-primary-hover transition-colors flex items-center justify-center gap-2 rounded-none" onclick="handleConfirmCode()">
            Confirm Code
          </button>
</div>

<div className="bg-surface border border-border w-full max-w-md p-8 hidden flex-col gap-8 shadow-2xl scale-95 transition-all duration-300 rounded-none" id="modal-create-code">
<div className="flex justify-between items-center">
<h3 className="text-white font-bold text-lg uppercase tracking-tight">
              Create Your Code
            </h3>
<button className="close-modal text-white-dim hover:text-white transition-colors rounded-none" onclick="closeAllModals()">
<iconify-icon className="text-2xl" icon="solar:close-square-linear"></iconify-icon>
</button>
</div>
<div className="flex flex-col gap-3">
<label className="text-xs text-white-dim uppercase font-medium">
              Your Unique Code
            </label>
<div className="flex gap-3">
<input className="flex-1 bg-black border border-border p-4 text-white font-mono text-sm uppercase text-center tracking-widest outline-none cursor-default rounded-none" readonly="" type="text" value="ALEX-WAGMI"/>
<button className="bg-[#1C261C] text-primary px-4 border border-border hover:bg-primary hover:text-black transition-colors rounded-none" onclick="showToast('Code refreshed')">
<iconify-icon className="text-xl" icon="solar:restart-linear"></iconify-icon>
</button>
</div>
<p className="text-[10px] text-white-dim mt-1">
              Share this code with friends to earn 10% rebates.
            </p>
</div>
<button className="w-full bg-primary text-black font-bold h-[46px] uppercase text-sm hover:bg-primary-hover transition-colors flex items-center justify-center gap-2 rounded-none" onclick="handleCreateCode()">
            Create Now
          </button>
</div>

<div className="bg-surface border border-border w-full max-w-sm p-8 hidden flex-col items-center gap-8 shadow-2xl scale-95 transition-all duration-300 text-center relative rounded-none" id="modal-bind-success">
<button className="close-modal absolute top-5 right-5 text-white-dim hover:text-white transition-colors rounded-none">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<div className="w-16 h-16 rounded-none bg-primary/10 flex items-center justify-center mt-2">
<iconify-icon className="text-4xl text-primary" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div className="flex flex-col gap-3">
<h3 className="text-white font-bold text-xl uppercase tracking-tight">
              Bind Successful
            </h3>
<div className="flex flex-col text-sm gap-1.5">
<span className="text-white-dim font-medium uppercase text-xs tracking-wider">
                Referral Code
              </span>
<span className="font-mono text-white tracking-wider" id="success-code-display">
                TX-1234
              </span>
</div>
</div>
<button className="w-full bg-primary text-black font-bold h-[46px] uppercase text-sm hover:bg-primary-hover transition-colors rounded-none" onclick="handleBindSuccess()">
            Start Trading
          </button>
</div>

<div className="bg-surface border border-border w-full max-w-sm p-8 hidden flex-col items-center gap-8 shadow-2xl scale-95 transition-all duration-300 text-center relative rounded-none" id="modal-bind-fail">
<button className="close-modal absolute top-5 right-5 text-white-dim hover:text-white transition-colors rounded-none">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<div className="w-16 h-16 rounded-none bg-[#FF453A]/10 flex items-center justify-center mt-2">
<iconify-icon className="text-4xl text-[#FF453A]" icon="solar:close-circle-bold"></iconify-icon>
</div>
<div className="flex flex-col gap-3">
<h3 className="text-white font-bold text-xl uppercase tracking-tight">
              Bind Unsuccessful
            </h3>
<div className="flex flex-col text-sm gap-1.5">
<span className="text-white-dim font-medium uppercase text-xs tracking-wider">
                Referral Code
              </span>
<span className="font-mono text-white tracking-wider" id="fail-code-display">
                MONEYALWAYSSLEEPS888
              </span>
</div>
</div>
<button className="w-full bg-primary text-black font-bold h-[46px] uppercase text-sm hover:bg-primary-hover transition-colors rounded-none" onclick="openModal('modal-enter-code')">
            Try again
          </button>
</div>
</div>

<div className="fixed bottom-6 right-6 z-[80] bg-[#0B0F08] border border-primary/20 p-4 flex items-center gap-4 shadow-2xl translate-y-32 transition-transform duration-500 max-w-sm w-full" id="toast">
<div className="w-8 h-8 bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
<iconify-icon className="text-lg" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div className="flex flex-col gap-0.5">
<h4 className="text-white font-bold text-sm uppercase tracking-wide" id="toast-title">
            Success
          </h4>
<p className="text-xs text-white-dim" id="toast-msg">
            Operation completed successfully.
          </p>
</div>
</div>
</div>



    </>
  );
}
