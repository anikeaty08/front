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
            // Views
            const viewPortal = document.getElementById('view-portal');
            const viewLoading = document.getElementById('view-loading');
            const viewTicket = document.getElementById('view-ticket');
            
            // Elements
            const form = document.getElementById('access-form');
            const inputName = document.getElementById('input-name');
            const inputCode = document.getElementById('input-code');
            const errorMsg = document.getElementById('error-message');
            const progressFill = document.getElementById('progress-fill');
            const lightSweep = document.getElementById('light-sweep');
            const ticketCard = document.getElementById('ticket-card');
            
            // Required Code
            const REQUIRED_CODE = "APY-7X92KQ-39LMR8";
            // 180 seconds loading duration
            const LOADING_DURATION_MS = 180000; 
            
            let ticketData = {};

            // --- Form Submission Logic ---
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const code = inputCode.value.trim().toUpperCase();
                
                if (code !== REQUIRED_CODE) {
                    errorMsg.classList.remove('hidden');
                    inputCode.classList.add('border-red-500/50', 'focus:border-red-500/50', 'focus:ring-red-500/50');
                    inputCode.classList.remove('focus:border-blue-500/50', 'focus:ring-blue-500/50');
                } else {
                    errorMsg.classList.add('hidden');
                    ticketData.name = inputName.value.trim();
                    startLoadingSequence();
                }
            });

            inputCode.addEventListener('input', () => {
                errorMsg.classList.add('hidden');
                inputCode.classList.remove('border-red-500/50', 'focus:border-red-500/50', 'focus:ring-red-500/50');
                inputCode.classList.add('focus:border-blue-500/50', 'focus:ring-blue-500/50');
            });

            // --- Loading Sequence Logic ---
            function startLoadingSequence() {
                // Switch View
                viewPortal.classList.remove('opacity-100');
                viewPortal.classList.add('opacity-0');
                
                setTimeout(() => {
                    viewPortal.classList.add('hidden');
                    viewLoading.classList.remove('hidden');
                    
                    // Trigger reflow to apply transition
                    void viewLoading.offsetWidth;
                    viewLoading.classList.remove('opacity-0');
                    viewLoading.classList.add('opacity-100');
                    
                    animateProgressBar();
                }, 500);
            }

            function animateProgressBar() {
                const startTime = Date.now();
                
                function update() {
                    const elapsed = Date.now() - startTime;
                    const percent = Math.min((elapsed / LOADING_DURATION_MS) * 100, 100);
                    progressFill.style.width = `${percent}%`;
                    
                    if (percent < 100) {
                        requestAnimationFrame(update);
                    } else {
                        setTimeout(generateAndShowTicket, 500);
                    }
                }
                requestAnimationFrame(update);
            }

            // --- Ticket Generation Logic ---
            function generateAndShowTicket() {
                // Generate Data
                const now = new Date();
                const pad = (n) => n.toString().padStart(2, '0');
                ticketData.time = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())} UTC`;
                
                // Generate random alphanumeric pass ID like: G-8X2M-99P
                const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
                let randomId = '';
                for(let i=0; i<4; i++) randomId += chars.charAt(Math.floor(Math.random() * chars.length));
                let randomId2 = '';
                for(let i=0; i<3; i++) randomId2 += chars.charAt(Math.floor(Math.random() * chars.length));
                ticketData.passId = `GT-${randomId}-${randomId2}`;

                // Populate DOM
                document.getElementById('display-name').textContent = ticketData.name;
                document.getElementById('display-pass-id').textContent = ticketData.passId;
                document.getElementById('display-time').textContent = ticketData.time;

                // Switch View
                viewLoading.classList.remove('opacity-100');
                viewLoading.classList.add('opacity-0');
                
                setTimeout(() => {
                    viewLoading.classList.add('hidden');
                    viewTicket.classList.remove('hidden');
                    
                    void viewTicket.offsetWidth;
                    viewTicket.classList.remove('opacity-0');
                    viewTicket.classList.add('opacity-100');
                    
                    startTicketAnimations();
                }, 1000);
            }

            // --- Ticket Animations (3D + Light Sweep) ---
            let animationFrameId;
            let timeElapsed = 0;

            function startTicketAnimations() {
                function animate() {
                    timeElapsed += 0.02;
                    
                    // Subtle 3D Rotation
                    const rotX = Math.sin(timeElapsed) * 2; // -2 to 2 degrees
                    const rotY = Math.cos(timeElapsed * 0.8) * 2;
                    ticketCard.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;

                    // Light Sweep Translation
                    // Moves from -100% to 100% and resets smoothly
                    const sweepPos = ((timeElapsed * 15) % 300) - 100; 
                    lightSweep.style.transform = `translateX(${sweepPos}%)`;

                    animationFrameId = requestAnimationFrame(animate);
                }
                animate();
            }

            // --- PDF Generation Logic ---
            document.getElementById('btn-download').addEventListener('click', async () => {
                const btn = document.getElementById('btn-download');
                const originalText = btn.innerHTML;
                btn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin"></iconify-icon> Generating...';
                btn.disabled = true;

                // Pause animations & reset transforms for clean canvas capture
                cancelAnimationFrame(animationFrameId);
                ticketCard.style.transform = 'none';
                lightSweep.style.opacity = '0'; // Hide sweep to avoid rendering artifacts

                try {
                    // Slight delay to ensure transforms are reset in DOM
                    await new Promise(r => setTimeout(r, 100));

                    const canvas = await html2canvas(ticketCard, {
                        backgroundColor: '#0a0f1c',
                        scale: 2, // Higher resolution
                        useCORS: true,
                        logging: false
                    });

                    const imgData = canvas.toDataURL('image/jpeg', 1.0);
                    
                    // Calculate aspect ratio for PDF
                    const { jsPDF } = window.jspdf;
                    const pdf = new jsPDF({
                        orientation: 'landscape',
                        unit: 'px',
                        format: [canvas.width, canvas.height]
                    });

                    pdf.addImage(imgData, 'JPEG', 0, 0, canvas.width, canvas.height);
                    
                    const safeName = ticketData.name.replace(/[^a-z0-9]/gi, '_');
                    const filename = `Clearance_Ticket_${safeName}_${ticketData.passId}.pdf`;
                    
                    pdf.save(filename);

                } catch (error) {
                    console.error("PDF Generation failed", error);
                    alert("Failed to generate PDF. Please try again.");
                } finally {
                    // Restore animations
                    lightSweep.style.opacity = '1';
                    startTicketAnimations();
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                }
            });

            // --- Return Logic ---
            document.getElementById('btn-return').addEventListener('click', () => {
                cancelAnimationFrame(animationFrameId);
                
                viewTicket.classList.remove('opacity-100');
                viewTicket.classList.add('opacity-0');
                
                setTimeout(() => {
                    viewTicket.classList.add('hidden');
                    
                    // Reset Form
                    inputName.value = '';
                    inputCode.value = '';
                    progressFill.style.width = '0%';
                    ticketCard.style.transform = 'none';
                    
                    viewPortal.classList.remove('hidden');
                    void viewPortal.offsetWidth;
                    viewPortal.classList.remove('opacity-0');
                    viewPortal.classList.add('opacity-100');
                }, 500);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-1/4 w-[50vw] h-[50vh] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="fixed bottom-0 right-1/4 w-[40vw] h-[40vh] bg-blue-800/5 rounded-full blur-[100px] pointer-events-none"></div>

<main className="relative z-10 w-full max-w-md p-6 flex flex-col gap-8 opacity-100 transition-opacity duration-500" id="view-portal">

<header className="flex flex-col items-center justify-center gap-1 text-center">
<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-xl text-blue-400" icon="solar:shield-keyhole-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xl font-medium tracking-tighter">N.MEX</span>
</div>
<span className="text-xs text-slate-400 uppercase tracking-widest font-medium">Clearance Authority</span>
</header>

<div className="text-center flex flex-col gap-2">
<h1 className="text-2xl tracking-tight font-medium text-slate-100">Secure Asset Release Portal</h1>
<p className="text-sm text-slate-400">Authorized Audit Code Required</p>
</div>

<div className="bg-[#111827]/80 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 shadow-[0_0_40px_-15px_rgba(59,130,246,0.1)] relative group">
<div className="absolute inset-0 rounded-2xl ring-1 ring-blue-500/10 group-hover:ring-blue-500/20 transition-all pointer-events-none"></div>
<form className="flex flex-col gap-5 relative z-10" id="access-form">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-400 ml-1" htmlFor="input-name">Full Name</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-slate-500" icon="solar:user-linear"></iconify-icon>
<input autocomplete="off" className="w-full bg-[#0a0f1c] border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-sm text-slate-200 placeholder-slate-600 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all" id="input-name" required="" type="text"/>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-400 ml-1" htmlFor="input-code">Audit Code</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-slate-500" icon="solar:lock-keyhole-linear"></iconify-icon>
<input autocomplete="off" className="w-full bg-[#0a0f1c] border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-sm text-slate-200 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all uppercase font-mono" id="input-code" required="" type="text"/>
</div>
<span className="text-xs text-red-400 ml-1 mt-1 hidden" id="error-message">Invalid Audit Code. Access Denied.</span>
</div>
<button className="mt-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg py-2.5 px-4 text-sm font-medium transition-all shadow-[0_0_20px_-5px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.6)] flex items-center justify-center gap-2" type="submit">
                    Access Clearance
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
<p className="text-xs text-slate-500 text-center max-w-sm mx-auto leading-relaxed">
            All access attempts are monitored, logged, and subject to audit verification protocols.
        </p>
</main>

<section className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0f1c] hidden opacity-0 transition-opacity duration-1000" id="view-loading">
<div className="flex flex-col items-center max-w-sm px-6 text-center gap-8 w-full">
<div className="relative flex items-center justify-center w-16 h-16">
<div className="absolute inset-0 border border-blue-500/20 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
<iconify-icon className="text-3xl text-blue-400" icon="solar:server-square-update-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-2">
<h2 className="text-xl tracking-tight font-medium text-slate-100">Verifying Audit Credentials</h2>
<p className="text-sm text-slate-400">Please wait while clearance authorization protocols are being processed.</p>
</div>

<div className="w-full flex flex-col gap-2">
<div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 rounded-full w-0 shadow-[0_0_10px_rgba(59,130,246,0.8)]" id="progress-fill" style={{transition: 'width 0.5s linear'}}></div>
</div>
</div>
<p className="text-xs text-slate-500 mt-8">Do not refresh or close this window during authorization.</p>
</div>
</section>

<section className="relative z-10 w-full max-w-2xl p-6 flex flex-col items-center gap-8 hidden opacity-0 transition-opacity duration-1000" id="view-ticket">
<header className="flex flex-col items-center justify-center gap-1 text-center">
<span className="text-xs text-slate-400 uppercase tracking-widest font-medium">N.MEX Clearance Authority</span>
<h1 className="text-2xl tracking-tight font-medium text-blue-400 mt-1">Clearance Ticket Issued</h1>
</header>

<div className="w-full" style={{perspective: '1000px'}}>

<div className="relative w-full bg-gradient-to-br from-[#161e2e] to-[#0a0f1c] border border-blue-500/30 rounded-xl p-8 overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] transition-transform duration-100" id="ticket-card">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/5 to-transparent -translate-x-full" id="light-sweep" style={{width: '200%', transition: 'transform 0.1s linear'}}></div>

<iconify-icon className="absolute -right-10 -bottom-10 text-[200px] text-blue-900/10 pointer-events-none" icon="solar:shield-check-linear"></iconify-icon>

<div className="relative z-10 flex justify-between items-start border-b border-slate-700/50 pb-6 mb-6">
<div className="flex items-center gap-3 text-white">
<iconify-icon className="text-2xl text-blue-400" icon="solar:shield-keyhole-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="flex flex-col">
<span className="text-lg font-medium tracking-tighter leading-none">N.MEX</span>
<span className="text-xs text-slate-400 uppercase tracking-widest mt-1">Clearance Authority</span>
</div>
</div>
<div className="text-right">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium uppercase tracking-wider">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
                            Verified
                        </div>
</div>
</div>

<div className="relative z-10 grid grid-cols-2 gap-y-6 gap-x-8">
<div className="flex flex-col gap-1 col-span-2 sm:col-span-1">
<span className="text-xs text-slate-500 uppercase tracking-wider">Authorized Personnel</span>
<span className="text-base font-medium text-slate-100" id="display-name"></span>
</div>
<div className="flex flex-col gap-1 col-span-2 sm:col-span-1">
<span className="text-xs text-slate-500 uppercase tracking-wider">Audit Code</span>
<span className="text-base font-medium font-mono text-slate-300">APY-7X92KQ-39LMR8</span>
</div>
<div className="flex flex-col gap-1 col-span-2 sm:col-span-1">
<span className="text-xs text-slate-500 uppercase tracking-wider">Base Gate Pass ID</span>
<span className="text-base font-medium font-mono text-blue-400" id="display-pass-id"></span>
</div>
<div className="flex flex-col gap-1 col-span-2 sm:col-span-1">
<span className="text-xs text-slate-500 uppercase tracking-wider">Issuance Timestamp</span>
<span className="text-sm font-medium text-slate-300" id="display-time"></span>
</div>
</div>

<div className="relative z-10 mt-8 pt-6 border-t border-slate-700/50 flex justify-between items-end">
<p className="text-xs text-slate-500 max-w-[250px] leading-relaxed">
                        This document is system-generated and validated under internal clearance protocols.
                    </p>
<div className="w-16 h-16 bg-[#0a0f1c] border border-slate-700 rounded-md flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4px_4px] opacity-20"></div>
<iconify-icon className="text-2xl text-slate-400 relative z-10" icon="solar:qr-code-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
<button className="bg-blue-600 hover:bg-blue-500 text-white rounded-lg py-2.5 px-6 text-sm font-medium transition-all shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2 w-full sm:w-auto" id="btn-download">
<iconify-icon icon="solar:document-download-linear"></iconify-icon>
                Download Ticket (PDF)
            </button>
<button className="bg-transparent border border-slate-700 hover:bg-slate-800 text-slate-300 rounded-lg py-2.5 px-6 text-sm font-medium transition-all flex items-center justify-center gap-2 w-full sm:w-auto" id="btn-return">
<iconify-icon icon="solar:logout-2-linear"></iconify-icon>
                Return to Portal
            </button>
</div>
</section>


    </>
  );
}
