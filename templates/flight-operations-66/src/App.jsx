import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // --- 1. Utilities ---
            const el = id => document.getElementById(id);
            const removeClass = (el, ...cls) => el.classList.remove(...cls);
            const addClass = (el, ...cls) => el.classList.add(...cls);
            
            // --- 2. Live Clock ---
            const clockEl = el('live-clock');
            setInterval(() => {
                const now = new Date();
                const timeStr = now.toISOString().split('T')[1].split('.')[0];
                clockEl.innerText = `${timeStr} UTC`;
            }, 1000);

            // --- 3. Initial Animation Sequence ---
            
            // Stagger Right Panel Data
            setTimeout(() => {
                const rows = document.querySelectorAll('.data-row');
                rows.forEach((row, i) => {
                    setTimeout(() => {
                        removeClass(row, 'opacity-0');
                    }, i * 100);
                });
            }, 300);

            // Flicker Left Panel slightly
            setInterval(() => {
                const list = el('flight-list-container');
                list.style.opacity = '0.7';
                setTimeout(() => list.style.opacity = '1', 50);
            }, 8000);

            // Center Panel sequence
            setTimeout(() => {
                const micro = el('micro-revalidating');
                if(micro) micro.style.opacity = '0';
            }, 1200);

            setTimeout(() => {
                const opts = el('resolution-options');
                removeClass(opts, 'opacity-0', 'translate-y-8');
            }, 1500);


            // --- 4. Interactive Flow ---

            // Click Upgrade Option
            el('btn-select-upgrade').addEventListener('click', () => {
                const chargeMod = el('charge-module');
                removeClass(chargeMod, 'hidden-state');
                
                // Trigger reflow
                void chargeMod.offsetWidth;
                removeClass(chargeMod, 'opacity-0', 'translate-y-4');

                // Stagger Charge Items
                setTimeout(() => {
                    const items = document.querySelectorAll('.charge-item');
                    items.forEach((item, i) => {
                        setTimeout(() => {
                            removeClass(item, 'opacity-0');
                        }, i * 150);
                    });
                }, 400);
            });

            // Click Confirm Payment
            el('btn-confirm-payment').addEventListener('click', () => {
                
                // Intensify red glow slightly
                const chargeMod = el('charge-module');
                chargeMod.style.boxShadow = '0 0 50px rgba(200,16,46,0.3)';

                setTimeout(() => {
                    // Show Modal
                    const modal = el('payment-modal');
                    removeClass(modal, 'hidden-state');
                    void modal.offsetWidth;
                    removeClass(modal, 'opacity-0');

                    setTimeout(() => {
                        removeClass(el('apple-pay-icon'), 'opacity-0', 'translate-y-4');
                    }, 100);

                    // Process (2s delay)
                    setTimeout(() => {
                        addClass(el('processing-view'), 'hidden-state');
                        removeClass(el('success-view'), 'hidden-state');
                        
                        setTimeout(() => {
                            removeClass(el('success-banner'), 'opacity-0', '-translate-y-4');
                        }, 50);

                        // Update underlying UI while modal is up
                        el('payment-status-text').innerText = 'COMPLETED';
                        removeClass(el('payment-status-text'), 'text-[#C8102E]');
                        addClass(el('payment-status-text'), 'text-[#1E7E34]');
                        
                        removeClass(el('total-price'), 'text-[#C8102E]');
                        addClass(el('total-price'), 'text-[#1E7E34]');
                        
                        el('awaiting-text').innerText = 'Transaction Successful';
                        removeClass(el('awaiting-text'), 'animate-pulse-soft');

                        // Update Passenger Data
                        const dataCabin = el('data-cabin');
                        const dataSeat = el('data-seat');
                        const dataGroup = el('data-group');
                        
                        dataCabin.innerText = 'BUSINESS PRIME';
                        addClass(dataCabin, 'text-[#BFA34A]');
                        
                        dataSeat.innerText = '2A';
                        addClass(dataSeat, 'text-[#F2F5F8]');
                        
                        dataGroup.innerText = 'PRIORITY';

                        // Transition to Final Clearance
                        setTimeout(() => {
                            addClass(modal, 'opacity-0');
                            setTimeout(() => {
                                addClass(modal, 'hidden-state');
                                
                                // Hide Alert UI
                                addClass(el('state-alert'), 'hidden-state');
                                addClass(el('charge-module'), 'hidden-state');
                                
                                // Show Clearance UI
                                const clearance = el('state-clearance');
                                removeClass(clearance, 'hidden-state');
                                void clearance.offsetWidth;
                                removeClass(clearance, 'opacity-0');
                                
                                setTimeout(() => {
                                    el('success-line').style.width = '100%';
                                }, 300);

                                // Start Boarding Countdown
                                startCountdown();

                            }, 300);
                        }, 2500);

                    }, 2000);
                }, 300);
            });

            // --- 5. Countdown Logic ---
            function startCountdown() {
                let time = 18 * 60 + 42; // 18:42
                const timerEl = el('boarding-countdown');
                
                setInterval(() => {
                    if(time <= 0) return;
                    time--;
                    const h = Math.floor(time / 3600);
                    const m = Math.floor((time % 3600) / 60);
                    const s = time % 60;
                    
                    timerEl.innerText = `00:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
                }, 1000);

                // Return to idle after 3s as requested
                setTimeout(() => {
                     // In a real system this would reset, but to show the end state we leave it.
                     // The prompt says "After 3 seconds, screen smoothly returns to idle state."
                     const clearance = el('state-clearance');
                     addClass(clearance, 'opacity-0');
                     
                     setTimeout(() => {
                        addClass(clearance, 'hidden-state');
                        
                        // Reset to Alert State for demonstration loop, or clear screen.
                        // We will clear the screen to an empty state indicating task done.
                        el('state-alert').innerHTML = `
                            <div class="text-[0.65rem] text-[#F2F5F8]/30 font-mono uppercase tracking-widest mt-20">System Idle • Awaiting Passenger Sync</div>
                        `;
                        removeClass(el('state-alert'), 'hidden-state');
                        
                     }, 500);
                }, 3000);
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-grain"></div>
<div className="bg-map"></div>
<div className="screen-glare"></div>

<header className="w-full h-12 border-b-[0.5px] border-[#2C3137] bg-[#101417]/90 backdrop-blur-sm flex items-center justify-between px-6 z-20 relative">
<div className="flex items-center gap-2">
<span className="text-xs tracking-[0.2em] font-medium uppercase text-white">Airpaz</span>
</div>
<div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
<iconify-icon className="text-[#2C3137] text-sm" icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs tracking-widest font-medium text-[#2C3137]">FLIGHT OPERATIONS CONTROL TERMINAL</span>
</div>
<div className="flex items-center gap-6 font-mono text-xs">
<div className="flex items-center gap-2 text-[#F2F5F8]/70">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
<span id="live-clock">14:02:45 UTC</span>
</div>
<div className="w-[1px] h-4 bg-[#2C3137]"></div>
<div className="text-[#F2F5F8]">YWG</div>
<div className="w-[1px] h-4 bg-[#2C3137]"></div>
<div className="flex items-center gap-2 text-[#1E7E34]">
<div className="w-1.5 h-1.5 rounded-full bg-[#1E7E34] animate-pulse-soft"></div>
<span>ACTIVE</span>
</div>
</div>

<div className="absolute bottom-0 left-0 w-32 h-[1px] bg-[#C8102E] shadow-[0_0_8px_#C8102E] animate-scan z-30"></div>
</header>

<main className="flex-1 flex w-full relative z-10 overflow-hidden">

<aside className="w-[25%] h-full border-r-[0.5px] border-[#2C3137] relative bg-[#101417] flex flex-col overflow-hidden">

<div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none opacity-[0.04] z-0">
<div className="flex whitespace-nowrap text-8xl font-medium tracking-tighter animate-scroll-left">
                    MANIFEST CHECK • CABIN LOAD UPDATE • BOARDING PRIORITY • GATE SYNC ACTIVE • MANIFEST CHECK • CABIN LOAD UPDATE • BOARDING PRIORITY • GATE SYNC ACTIVE • 
                </div>
</div>
<div className="p-4 border-b-[0.5px] border-[#2C3137] bg-[#101417]/80 backdrop-blur z-10">
<span className="text-[0.65rem] tracking-widest text-[#2C3137] uppercase font-medium">Live Departures</span>
</div>

<div className="flex-1 relative overflow-hidden z-10" id="flight-list-container">
<div className="absolute inset-x-0 top-0 animate-scroll-up flex flex-col">

<div className="flight-block flex flex-col">
<div className="px-5 py-4 border-b-[0.5px] border-[#2C3137]/40 flex flex-col gap-1 transition-colors duration-300">
<div className="flex justify-between items-center text-xs">
<span className="font-mono text-[#F2F5F8]">AP742</span>
<span className="text-[#C8102E] text-[0.65rem] tracking-wider uppercase">Boarding</span>
</div>
<div className="text-[0.65rem] text-[#F2F5F8]/50 flex items-center gap-2">
<span>YWG</span>
<iconify-icon className="text-[0.5rem]" icon="solar:arrow-right-linear"></iconify-icon>
<span>YYC</span>
</div>
</div>
<div className="px-5 py-4 border-b-[0.5px] border-[#2C3137]/40 flex flex-col gap-1">
<div className="flex justify-between items-center text-xs">
<span className="font-mono text-[#F2F5F8]">AP511</span>
<span className="text-[#BFA34A] text-[0.65rem] tracking-wider uppercase">Delayed</span>
</div>
<div className="text-[0.65rem] text-[#F2F5F8]/50 flex items-center gap-2">
<span>YWG</span>
<iconify-icon className="text-[0.5rem]" icon="solar:arrow-right-linear"></iconify-icon>
<span>YVR</span>
</div>
</div>
<div className="px-5 py-4 border-b-[0.5px] border-[#2C3137]/40 flex flex-col gap-1">
<div className="flex justify-between items-center text-xs">
<span className="font-mono text-[#F2F5F8]">AP233</span>
<span className="text-[#1E7E34] text-[0.65rem] tracking-wider uppercase">On Time</span>
</div>
<div className="text-[0.65rem] text-[#F2F5F8]/50 flex items-center gap-2">
<span>YWG</span>
<iconify-icon className="text-[0.5rem]" icon="solar:arrow-right-linear"></iconify-icon>
<span>YYZ</span>
</div>
</div>
<div className="px-5 py-4 border-b-[0.5px] border-[#2C3137]/40 flex flex-col gap-1">
<div className="flex justify-between items-center text-xs">
<span className="font-mono text-[#F2F5F8]">AP890</span>
<span className="text-[#C8102E] text-[0.65rem] tracking-wider uppercase animate-pulse-soft">Final Call</span>
</div>
<div className="text-[0.65rem] text-[#F2F5F8]/50 flex items-center gap-2">
<span>YWG</span>
<iconify-icon className="text-[0.5rem]" icon="solar:arrow-right-linear"></iconify-icon>
<span>YEG</span>
</div>
</div>
</div>

<div className="flight-block flex flex-col">
<div className="px-5 py-4 border-b-[0.5px] border-[#2C3137]/40 flex flex-col gap-1">
<div className="flex justify-between items-center text-xs">
<span className="font-mono text-[#F2F5F8]">AP742</span>
<span className="text-[#C8102E] text-[0.65rem] tracking-wider uppercase">Boarding</span>
</div>
<div className="text-[0.65rem] text-[#F2F5F8]/50 flex items-center gap-2">
<span>YWG</span>
<iconify-icon className="text-[0.5rem]" icon="solar:arrow-right-linear"></iconify-icon>
<span>YYC</span>
</div>
</div>
<div className="px-5 py-4 border-b-[0.5px] border-[#2C3137]/40 flex flex-col gap-1">
<div className="flex justify-between items-center text-xs">
<span className="font-mono text-[#F2F5F8]">AP511</span>
<span className="text-[#BFA34A] text-[0.65rem] tracking-wider uppercase">Delayed</span>
</div>
<div className="text-[0.65rem] text-[#F2F5F8]/50 flex items-center gap-2">
<span>YWG</span>
<iconify-icon className="text-[0.5rem]" icon="solar:arrow-right-linear"></iconify-icon>
<span>YVR</span>
</div>
</div>
<div className="px-5 py-4 border-b-[0.5px] border-[#2C3137]/40 flex flex-col gap-1">
<div className="flex justify-between items-center text-xs">
<span className="font-mono text-[#F2F5F8]">AP233</span>
<span className="text-[#1E7E34] text-[0.65rem] tracking-wider uppercase">On Time</span>
</div>
<div className="text-[0.65rem] text-[#F2F5F8]/50 flex items-center gap-2">
<span>YWG</span>
<iconify-icon className="text-[0.5rem]" icon="solar:arrow-right-linear"></iconify-icon>
<span>YYZ</span>
</div>
</div>
<div className="px-5 py-4 border-b-[0.5px] border-[#2C3137]/40 flex flex-col gap-1">
<div className="flex justify-between items-center text-xs">
<span className="font-mono text-[#F2F5F8]">AP890</span>
<span className="text-[#C8102E] text-[0.65rem] tracking-wider uppercase animate-pulse-soft">Final Call</span>
</div>
<div className="text-[0.65rem] text-[#F2F5F8]/50 flex items-center gap-2">
<span>YWG</span>
<iconify-icon className="text-[0.5rem]" icon="solar:arrow-right-linear"></iconify-icon>
<span>YEG</span>
</div>
</div>
</div>
</div>
</div>
</aside>

<section className="flex-1 h-full flex flex-col items-center justify-center p-10 relative">

<div className="w-full max-w-2xl flex flex-col items-center text-center transition-all duration-500 ease-in-out-custom" id="state-alert">
<div className="relative w-full border-[0.5px] border-[#C8102E]/40 bg-gradient-to-b from-[#C8102E]/[0.02] to-transparent p-10 flex flex-col items-center animate-pulse-border mb-8">

<div className="absolute top-3 right-4 text-[0.6rem] text-[#F2F5F8]/40 font-mono tracking-widest transition-opacity duration-300" id="micro-revalidating">
                        REVALIDATING MANIFEST...
                    </div>
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#C8102E]/10 border border-[#C8102E]/30 mb-6">
<iconify-icon className="text-[#C8102E] text-xl" icon="solar:danger-triangle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-xs text-[#C8102E] tracking-[0.2em] font-medium uppercase mb-2">Passenger Status Flagged</h2>
<h1 className="text-xl tracking-tight text-[#F2F5F8] font-medium mb-4">ECONOMY CABIN OVERSOLD</h1>
<div className="inline-flex items-center gap-2 px-3 py-1.5 border-[0.5px] border-[#2C3137] bg-[#151A20]">
<div className="w-1.5 h-1.5 rounded-full bg-[#C8102E] animate-pulse-dot"></div>
<span className="text-xs text-[#F2F5F8]/80 font-mono uppercase tracking-wider">Seat Protection Required</span>
</div>
</div>

<div className="w-full grid grid-cols-2 gap-4 opacity-0 translate-y-8 transition-all duration-500 ease-in-out-custom" id="resolution-options">

<button className="flex flex-col items-start text-left p-6 border-[0.5px] border-[#2C3137] bg-[#151A20]/50 hover:bg-[#151A20] transition-colors group">
<span className="text-xs text-[#F2F5F8]/50 uppercase tracking-widest mb-3 group-hover:text-[#F2F5F8]/70 transition-colors">Option 1</span>
<h3 className="text-sm font-medium text-[#F2F5F8] mb-1">STANDBY STATUS</h3>
<p className="text-[0.65rem] text-[#F2F5F8]/40">Boarding Not Guaranteed</p>
</button>

<button className="flex flex-col items-start text-left p-6 border-[0.5px] border-[#BFA34A]/40 bg-gradient-to-br from-[#BFA34A]/[0.05] to-transparent hover:from-[#BFA34A]/[0.08] transition-all relative overflow-hidden group shadow-[0_0_20px_rgba(191,163,74,0.05)]" id="btn-select-upgrade">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F2F5F8]/5 to-transparent -translate-x-full group-hover:animate-[scanline_2s_linear_infinite]"></div>
<span className="text-xs text-[#BFA34A] uppercase tracking-widest mb-3">Option 2 (Recommended)</span>
<h3 className="text-sm font-medium animate-shimmer mb-1">UPGRADE TO BUSINESS PRIME</h3>
<p className="text-[0.65rem] text-[#BFA34A]/70">Guaranteed Same-Day Protected Seat</p>
</button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-[#151A20] border-[1px] border-[#C8102E]/60 shadow-[0_0_30px_rgba(200,16,46,0.1)] flex flex-col hidden-state opacity-0 translate-y-4 transition-all duration-400 ease-in-out-custom z-20" id="charge-module">
<div className="p-4 border-b-[0.5px] border-[#2C3137] flex items-center justify-between bg-[#C8102E]/[0.02]">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-[#C8102E] animate-pulse-dot"></div>
<span className="text-xs text-[#C8102E] tracking-widest uppercase font-medium">Action Required</span>
</div>
<span className="text-[0.65rem] text-[#F2F5F8]/50 font-mono">SYS_REQ_742</span>
</div>
<div className="p-8 flex flex-col">
<h3 className="text-sm font-medium text-[#F2F5F8] tracking-tight mb-6 uppercase">Upgrade Payment Required To Confirm Protected Seat</h3>
<div className="flex flex-col gap-3 mb-6 font-mono text-xs">
<div className="flex justify-between charge-item opacity-0 transition-opacity duration-300">
<span className="text-[#F2F5F8]/60">Fare Difference</span>
<span className="text-[#F2F5F8]">$2450</span>
</div>
<div className="flex justify-between charge-item opacity-0 transition-opacity duration-300">
<span className="text-[#F2F5F8]/60">Same-Day Confirmed Adjustment</span>
<span className="text-[#F2F5F8]">$1000</span>
</div>
<div className="flex justify-between charge-item opacity-0 transition-opacity duration-300">
<span className="text-[#F2F5F8]/60">Service Revalidation Fee</span>
<span className="text-[#F2F5F8]">$550</span>
</div>
</div>
<div className="w-full h-[0.5px] bg-[#2C3137] mb-4 charge-item opacity-0 transition-opacity duration-300"></div>
<div className="flex justify-between items-end mb-8 charge-item opacity-0 transition-opacity duration-300">
<span className="text-xs text-[#F2F5F8] tracking-widest uppercase">Total Due</span>
<span className="text-base font-mono text-[#C8102E] transition-colors duration-500" id="total-price">$4,000</span>
</div>
<div className="flex items-center justify-between">
<div className="flex flex-col gap-1">
<span className="text-[0.65rem] text-[#F2F5F8]/40 uppercase tracking-widest">Payment Status</span>
<span className="text-xs font-mono text-[#C8102E] transition-colors duration-500" id="payment-status-text">PENDING</span>
</div>
<div className="text-[0.65rem] text-[#F2F5F8]/30 font-mono animate-pulse-soft" id="awaiting-text">
                            Awaiting Passenger Confirmation...
                        </div>
<button className="px-6 py-2.5 bg-[#F2F5F8] text-[#101417] text-xs font-medium uppercase tracking-widest hover:bg-white transition-colors" id="btn-confirm-payment">
                            Confirm Resolution
                        </button>
</div>
</div>
</div>

<div className="w-full max-w-2xl flex flex-col items-center text-center hidden-state opacity-0 transition-opacity duration-500 ease-in-out-custom" id="state-clearance">
<div className="relative w-full border-[0.5px] border-[#1E7E34]/40 bg-gradient-to-b from-[#1E7E34]/[0.02] to-transparent p-12 flex flex-col items-center shadow-[0_0_30px_rgba(30,126,52,0.05)]">
<div className="absolute top-0 left-0 h-[2px] bg-[#1E7E34] w-0 transition-all duration-1000 ease-out-expo" id="success-line"></div>
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1E7E34]/10 border border-[#1E7E34]/30 mb-6">
<iconify-icon className="text-[#1E7E34] text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-xs text-[#1E7E34] tracking-[0.2em] font-medium uppercase mb-2">Status Cleared</h2>
<h1 className="text-xl tracking-tight text-[#F2F5F8] font-medium mb-6">BOARDING AUTHORIZED</h1>
<div className="flex items-center gap-6">
<div className="flex flex-col items-center gap-1 border border-[#2C3137] bg-[#151A20] px-6 py-3 animate-pulse-soft">
<span className="text-[0.65rem] text-[#F2F5F8]/50 uppercase tracking-widest">Gate</span>
<span className="text-base font-mono text-[#F2F5F8]">B17</span>
</div>
<div className="flex flex-col items-center gap-1 border border-[#2C3137] bg-[#151A20] px-6 py-3">
<span className="text-[0.65rem] text-[#F2F5F8]/50 uppercase tracking-widest">Timer</span>
<span className="text-base font-mono text-[#F2F5F8]" id="boarding-countdown">00:18:42</span>
</div>
</div>
</div>
</div>
</section>

<aside className="w-[25%] h-full border-l-[0.5px] border-[#2C3137] bg-[#101417] flex flex-col relative z-10">
<div className="p-4 border-b-[0.5px] border-[#2C3137] bg-[#101417]/80 backdrop-blur flex justify-between items-center">
<span className="text-[0.65rem] tracking-widest text-[#2C3137] uppercase font-medium">Passenger Manifest Data</span>
<iconify-icon className="text-[#2C3137] text-sm" icon="solar:user-id-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="p-6 flex flex-col gap-6">

<div className="flex flex-col gap-1 data-row opacity-0 transition-opacity duration-300">
<span className="text-[0.65rem] text-[#2C3137] uppercase tracking-widest">Passenger Name</span>
<span className="text-xs font-medium text-[#F2F5F8]">Dawson Pastion Harry</span>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="flex flex-col gap-1 data-row opacity-0 transition-opacity duration-300">
<span className="text-[0.65rem] text-[#2C3137] uppercase tracking-widest">Gender</span>
<span className="text-xs font-medium text-[#F2F5F8]">Male</span>
</div>
<div className="flex flex-col gap-1 data-row opacity-0 transition-opacity duration-300">
<span className="text-[0.65rem] text-[#2C3137] uppercase tracking-widest">Date</span>
<span className="text-xs font-mono font-medium text-[#F2F5F8]">25 FEB 2026</span>
</div>
</div>
<div className="w-full h-[0.5px] bg-[#2C3137] data-row opacity-0 transition-opacity duration-300"></div>
<div className="grid grid-cols-2 gap-6">
<div className="flex flex-col gap-1 data-row opacity-0 transition-opacity duration-300">
<span className="text-[0.65rem] text-[#2C3137] uppercase tracking-widest">Route</span>
<span className="text-xs font-mono font-medium text-[#F2F5F8]">YWG → YYC</span>
</div>
<div className="flex flex-col gap-1 data-row opacity-0 transition-opacity duration-300">
<span className="text-[0.65rem] text-[#2C3137] uppercase tracking-widest">Flight</span>
<span className="text-xs font-mono font-medium text-[#F2F5F8]">AP742</span>
</div>
</div>
<div className="w-full h-[0.5px] bg-[#2C3137] data-row opacity-0 transition-opacity duration-300"></div>
<div className="flex flex-col gap-1 data-row opacity-0 transition-opacity duration-300 relative">
<span className="text-[0.65rem] text-[#2C3137] uppercase tracking-widest">Cabin</span>
<span className="text-xs font-medium text-[#F2F5F8] transition-colors duration-500" id="data-cabin">Economy</span>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="flex flex-col gap-1 data-row opacity-0 transition-opacity duration-300">
<span className="text-[0.65rem] text-[#2C3137] uppercase tracking-widest">Seat</span>
<span className="text-xs font-mono font-medium text-[#F2F5F8] transition-colors duration-500" id="data-seat">18C</span>
</div>
<div className="flex flex-col gap-1 data-row opacity-0 transition-opacity duration-300">
<span className="text-[0.65rem] text-[#2C3137] uppercase tracking-widest">Boarding Group</span>
<span className="text-xs font-mono font-medium text-[#F2F5F8] transition-colors duration-500" id="data-group">Zone 4</span>
</div>
</div>
</div>

<div className="mt-auto p-4 border-t-[0.5px] border-[#2C3137] flex justify-between items-center opacity-50">
<div className="flex gap-1">
<div className="w-1 h-3 bg-[#2C3137]"></div>
<div className="w-1 h-3 bg-[#2C3137]"></div>
<div className="w-1 h-3 bg-[#2C3137]"></div>
</div>
<span className="text-[0.5rem] font-mono text-[#2C3137]">SEC_ID: 9482-A</span>
</div>
</aside>
</main>

<div className="absolute inset-0 bg-[#101417]/80 backdrop-blur-md hidden-state flex flex-col items-center justify-center z-50 transition-opacity duration-300 opacity-0" id="payment-modal">
<div className="flex flex-col items-center text-center" id="processing-view">
<iconify-icon className="text-[#F2F5F8] text-3xl mb-6 opacity-0 translate-y-4 transition-all duration-500" icon="solar:wallet-linear" id="apple-pay-icon" strokeWidth="1.5"></iconify-icon>
<div className="relative w-12 h-12 mb-6">
<iconify-icon className="absolute inset-0 text-[#2C3137] text-5xl" icon="solar:refresh-circle-linear" strokeWidth="1"></iconify-icon>
<iconify-icon className="absolute inset-0 text-[#F2F5F8] text-5xl animate-[spin_2s_linear_infinite]" icon="solar:refresh-circle-linear" strokeWidth="1.5" style={{clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 50%)'}}></iconify-icon>
</div>
<span className="text-xs text-[#F2F5F8] tracking-[0.2em] font-medium uppercase font-mono">Processing Upgrade Request...</span>
</div>
<div className="flex flex-col items-center text-center hidden-state" id="success-view">
<div className="w-full bg-[#1E7E34] text-[#101417] py-2 px-12 mb-6 flex items-center gap-3 transform -translate-y-4 opacity-0 transition-all duration-500" id="success-banner">
<iconify-icon className="text-sm" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs tracking-widest uppercase font-medium">Upgrade Confirmed</span>
</div>
<div className="flex flex-col gap-2 font-mono text-xs text-[#F2F5F8]/70">
<div>CABIN: <span className="text-[#BFA34A] font-medium">BUSINESS PRIME</span></div>
<div>SEAT REASSIGNED: <span className="text-[#F2F5F8] font-medium">2A</span></div>
</div>
</div>
</div>


    </>
  );
}
