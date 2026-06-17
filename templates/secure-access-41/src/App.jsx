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



        document.addEventListener('DOMContentLoaded', () => {
            const page1 = document.getElementById('page-1');
            const page2 = document.getElementById('page-2');
            const form = document.getElementById('access-form');
            const errorMsg = document.getElementById('error-msg');
            const nameInput = document.getElementById('full-name');
            const codeInput = document.getElementById('audit-code');
            const ticketCard = document.getElementById('ticket-card');
            const downloadBtn = document.getElementById('btn-download-pdf');
            
            // Required System Code
            const REQUIRED_CODE = 'APY-7X92KQ-39LMR8';

            // Form Submission Logic
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const enteredName = nameInput.value.trim();
                const enteredCode = codeInput.value.trim();

                if (enteredCode !== REQUIRED_CODE) {
                    errorMsg.style.display = 'flex';
                    codeInput.classList.remove('border-[#1e293b]', 'focus:border-sky-500', 'focus:ring-sky-500/50');
                    codeInput.classList.add('border-red-500/50', 'focus:border-red-500', 'focus:ring-red-500/20', 'text-red-200');
                    
                    form.style.transform = 'translateX(5px)';
                    setTimeout(() => form.style.transform = 'translateX(-5px)', 50);
                    setTimeout(() => form.style.transform = 'translateX(5px)', 100);
                    setTimeout(() => form.style.transform = 'translateX(0)', 150);
                } else {
                    errorMsg.style.display = 'none';
                    
                    const ticketId = 'NX-' + Math.random().toString(36).substr(2, 8).toUpperCase();
                    const now = new Date();
                    const timestamp = now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
                    
                    // Populate UI Ticket Data
                    document.getElementById('tkt-name').textContent = enteredName;
                    document.getElementById('tkt-code').textContent = enteredCode;
                    document.getElementById('tkt-id').textContent = ticketId;
                    document.getElementById('tkt-time').textContent = timestamp;

                    // Populate Hidden PDF Template Data
                    document.getElementById('pdf-name').textContent = enteredName;
                    document.getElementById('pdf-code').textContent = enteredCode;
                    document.getElementById('pdf-id').textContent = ticketId;
                    document.getElementById('pdf-time').textContent = timestamp;

                    page1.style.opacity = '0';
                    setTimeout(() => {
                        page1.style.display = 'none';
                        page2.style.display = 'flex';
                        void page2.offsetWidth;
                        page2.style.opacity = '1';
                    }, 500);
                }
            });

            codeInput.addEventListener('input', () => {
                errorMsg.style.display = 'none';
                codeInput.classList.add('border-[#1e293b]', 'focus:border-sky-500', 'focus:ring-sky-500/50');
                codeInput.classList.remove('border-red-500/50', 'focus:border-red-500', 'focus:ring-red-500/20', 'text-red-200');
            });

            document.getElementById('btn-return').addEventListener('click', () => {
                page2.style.opacity = '0';
                setTimeout(() => {
                    page2.style.display = 'none';
                    page1.style.display = 'flex';
                    void page1.offsetWidth;
                    page1.style.opacity = '1';
                    form.reset();
                    codeInput.value = 'APY-7X92KQ-39LMR8'; // Reset to default code for ease
                }, 500);
            });

            // PDF Generation Logic
            downloadBtn.addEventListener('click', async () => {
                const originalHtml = downloadBtn.innerHTML;
                downloadBtn.disabled = true;
                downloadBtn.innerHTML = '<iconify-icon icon="solar:hourglass-linear" stroke-width="1.5" class="animate-spin"></iconify-icon><span>Generating...</span>';

                const name = document.getElementById('pdf-name').textContent.replace(/\s+/g, '_');
                const id = document.getElementById('pdf-id').textContent;
                const element = document.getElementById('pdf-template');
                const wrapper = document.getElementById('pdf-wrapper');

                const opt = {
                    margin: 0,
                    filename: `Clearance_Ticket_${name}_${id}.pdf`,
                    image: { type: 'jpeg', quality: 1.0 },
                    html2canvas: { 
                        scale: 2, 
                        useCORS: true, 
                        letterRendering: true,
                        backgroundColor: '#0f172a'
                    },
                    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
                };

                try {
                    // Temporarily expose the element to html2canvas renderer
                    wrapper.style.opacity = '1';
                    wrapper.style.zIndex = '9999';
                    
                    await html2pdf().set(opt).from(element).save();
                } catch (error) {
                    console.error('PDF Generation Error:', error);
                } finally {
                    // Hide the template wrapper again
                    wrapper.style.opacity = '0';
                    wrapper.style.zIndex = '-999';
                    
                    downloadBtn.innerHTML = originalHtml;
                    downloadBtn.disabled = false;
                }
            });

            // 3D Hover Effect for Ticket Card
            ticketCard.addEventListener('mousemove', (e) => {
                const rect = ticketCard.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -6;
                const rotateY = ((x - centerX) / centerX) * 6;
                ticketCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            ticketCard.addEventListener('mouseleave', () => {
                ticketCard.style.transform = `rotateX(0deg) rotateY(0deg)`;
            });

            // Animated Light Sweep Logic
            const sweepEffect = document.getElementById('sweep-effect');
            let startTimestamp = null;
            
            function animateSweep(timestamp) {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = timestamp - startTimestamp;
                const duration = 4000;
                const loopPosition = progress % duration;
                let percentage = (loopPosition / duration) * 300 - 100;
                sweepEffect.style.transform = `translateX(${percentage}%) skewX(-15deg)`;
                requestAnimationFrame(animateSweep);
            }
            requestAnimationFrame(animateSweep);
        });
    
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
      

<div className="flex-1 flex flex-col transition-opacity duration-500 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" id="page-1" style={{opacity: '1', display: 'flex'}}>

<header className="flex items-center gap-3 w-full max-w-md mx-auto sm:max-w-none sm:mx-0 sm:justify-start mb-12 sm:mb-0">
<div className="flex items-center justify-center w-8 h-8 rounded border border-sky-500/30 bg-sky-950/20 shadow-[0_0_15px_rgba(14,165,233,0.15)]">
<iconify-icon className="text-sky-400 text-lg" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tighter text-white leading-none">N.MEX</span>
<span className="text-[0.65rem] font-medium text-slate-400 uppercase tracking-widest leading-tight mt-0.5">Clearance Authority</span>
</div>
</header>

<main className="flex-1 flex flex-col justify-center items-center w-full">
<div className="text-center mb-8">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-2">Secure Asset Release Portal</h1>
<p className="text-sm text-slate-400 font-medium">Authorized Audit Code Required</p>
</div>

<div className="w-full max-w-md bg-[#0f172a] border border-[#1e293b] rounded-xl p-6 sm:p-8 relative shadow-[0_0_40px_-10px_rgba(14,165,233,0.1)]">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-sky-500/50 to-transparent"></div>
<form className="flex flex-col gap-5" id="access-form">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-400" htmlFor="full-name">Full Name</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-slate-500" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
<input autocomplete="off" className="w-full bg-[#020617] border border-[#1e293b] text-slate-200 text-sm rounded-lg pl-9 pr-4 py-2.5 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/50 transition-all shadow-inner" id="full-name" required="" style={{boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)'}} type="text"/>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-400" htmlFor="audit-code">Audit Code</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-slate-500" icon="solar:lock-password-linear" strokeWidth="1.5"></iconify-icon>
<input autocomplete="off" className="w-full bg-[#020617] border border-[#1e293b] text-slate-200 text-sm rounded-lg pl-9 pr-4 py-2.5 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/50 transition-all font-mono uppercase tracking-wider shadow-inner" id="audit-code" required="" style={{boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)'}} type="text" value="APY-7X92KQ-39LMR8"/>
</div>
<div className="text-xs font-medium text-red-400 mt-1 flex items-center gap-1.5" id="error-msg" style={{display: 'none'}}>
<iconify-icon icon="solar:danger-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Invalid Audit Code. Access Denied.
                        </div>
</div>
<div className="mt-2">
<button className="w-full bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium py-2.5 rounded-lg shadow-[0_0_20px_-5px_rgba(2,132,199,0.4)] transition-all duration-200 flex items-center justify-center gap-2 group border border-sky-400/20" type="submit">
                            Access Clearance
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</form>
</div>

<div className="max-w-xs mt-8 text-center flex items-center justify-center gap-2 text-slate-500">
<iconify-icon className="text-xs shrink-0" icon="solar:info-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-[0.65rem] leading-relaxed">All access attempts are monitored, logged, and subject to audit verification protocols.</p>
</div>
</main>
</div>

<div className="flex-1 flex flex-col transition-opacity duration-500 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" id="page-2" style={{opacity: '0', display: 'none'}}>

<header className="flex items-center gap-3 w-full sm:justify-start mb-8">
<div className="flex items-center justify-center w-8 h-8 rounded border border-sky-500/30 bg-sky-950/20 shadow-[0_0_15px_rgba(14,165,233,0.15)]">
<iconify-icon className="text-sky-400 text-lg" icon="solar:document-medicine-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tighter text-white leading-none">N.MEX</span>
<span className="text-[0.65rem] font-medium text-slate-400 uppercase tracking-widest leading-tight mt-0.5">Clearance Authority</span>
</div>
</header>
<main className="flex-1 flex flex-col items-center justify-center w-full">
<div className="text-center mb-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-2">Clearance Ticket Issued</h2>
<p className="text-sm text-sky-400 font-medium flex items-center justify-center gap-1.5">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Authentication Successful
                </p>
</div>

<div className="w-full max-w-md relative" style={{perspective: '1000px'}}>

<div className="bg-gradient-to-b from-[#0f172a] to-[#020617] border border-sky-900/50 rounded-2xl p-6 relative overflow-hidden shadow-[0_0_30px_rgba(14,165,233,0.1)] transition-transform duration-200 ease-out" id="ticket-card" style={{transform: 'rotateX(0deg) rotateY(0deg)'}}>

<div className="absolute top-0 bottom-0 w-[150%] pointer-events-none z-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" id="sweep-effect" style={{transform: 'translateX(-100%) skewX(-15deg)'}}></div>

<div className="relative z-10 flex flex-col h-full gap-6">

<div className="flex justify-between items-start">
<iconify-icon className="text-sky-400 text-3xl" icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>
<div className="bg-sky-500/10 border border-sky-500/30 px-2.5 py-1 rounded text-[0.65rem] font-semibold text-sky-400 uppercase tracking-wider">
                                Verified
                            </div>
</div>

<div className="flex flex-col gap-4">
<div>
<p className="text-[0.65rem] font-medium text-slate-500 uppercase tracking-widest mb-1">Authorized Personnel</p>
<p className="text-lg font-semibold text-white tracking-tight" id="tkt-name">-</p>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-[0.65rem] font-medium text-slate-500 uppercase tracking-widest mb-1">Audit Code</p>
<p className="text-xs font-mono text-slate-300" id="tkt-code">-</p>
</div>
<div>
<p className="text-[0.65rem] font-medium text-slate-500 uppercase tracking-widest mb-1">Ticket ID</p>
<p className="text-xs font-mono text-slate-300" id="tkt-id">-</p>
</div>
</div>
</div>
<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent my-2"></div>

<div className="flex justify-between items-end">
<div>
<p className="text-[0.65rem] font-medium text-slate-500 uppercase tracking-widest mb-1">Timestamp</p>
<p className="text-xs font-mono text-slate-400" id="tkt-time">-</p>
</div>
<div className="p-1.5 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
<iconify-icon className="text-slate-300 text-3xl block" icon="solar:qr-code-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="w-full max-w-md mt-8 flex flex-col sm:flex-row gap-3">
<button className="flex-1 bg-[#1e293b] hover:bg-[#334155] border border-[#334155] text-slate-200 text-sm font-medium py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" id="btn-download-pdf">
<iconify-icon icon="solar:download-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span>Download PDF</span>
</button>
<button className="flex-1 bg-transparent hover:bg-white/5 border border-slate-700 hover:border-slate-600 text-slate-300 text-sm font-medium py-2.5 rounded-lg transition-all flex items-center justify-center gap-2" id="btn-return">
<iconify-icon icon="solar:restart-linear" strokeWidth="1.5"></iconify-icon>
                    Return to Portal
                </button>
</div>
</main>
</div>

<div className="fixed top-0 -left-[9999px] z-[-999] opacity-0 pointer-events-none" id="pdf-wrapper">

<div className="w-[816px] h-[1056px] bg-[#0f172a] text-slate-200 p-12 relative font-sans box-border" id="pdf-template" style={{fontFamily: '\'Inter\', sans-serif'}}>

<div className="border-[4px] border-[#475569] h-full p-12 flex flex-col relative bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#020617] rounded-sm shadow-inner box-border">

<div className="flex items-center justify-between border-b-2 border-[#475569] pb-8 mb-10">
<div className="flex items-center gap-5">

<div className="w-14 h-14 rounded border border-sky-500/50 bg-sky-950/40 flex items-center justify-center">
<svg className="w-8 h-8 text-sky-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="flex flex-col">
<h1 className="text-4xl font-semibold tracking-tighter text-white leading-none m-0">N.MEX</h1>
<span className="text-sm font-medium text-slate-400 uppercase tracking-widest mt-1.5">Clearance Authority</span>
</div>
</div>
<div className="text-right">
<div className="text-sm font-semibold text-sky-400 uppercase tracking-widest">Clearance Ticket</div>
<div className="text-3xl font-mono text-white mt-2" id="pdf-id">NX-XXXXXX</div>
</div>
</div>

<div className="flex flex-col gap-12 flex-1 mt-4">
<div className="grid grid-cols-2 gap-12">
<div>
<p className="text-xs font-semibold text-[#64748b] uppercase tracking-widest mb-3">Authorized Personnel</p>
<p className="text-3xl font-semibold text-white tracking-tight m-0" id="pdf-name">-</p>
</div>
<div>
<p className="text-xs font-semibold text-[#64748b] uppercase tracking-widest mb-3">Clearance Status</p>
<div className="inline-flex items-center gap-2 border border-sky-500/40 bg-sky-900/30 px-4 py-1.5 rounded">
<svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-sm font-semibold text-sky-400 uppercase tracking-widest">Verified</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-12">
<div>
<p className="text-xs font-semibold text-[#64748b] uppercase tracking-widest mb-3">Audit Code</p>
<p className="text-xl font-mono text-slate-300 m-0" id="pdf-code">APY-7X92KQ-39LMR8</p>
</div>
<div>
<p className="text-xs font-semibold text-[#64748b] uppercase tracking-widest mb-3">Timestamp of Issuance</p>
<p className="text-xl font-mono text-slate-300 m-0" id="pdf-time">-</p>
</div>
</div>

<div className="mt-4">
<p className="text-xs font-semibold text-[#64748b] uppercase tracking-widest mb-4">Authentication Node</p>
<div className="w-40 h-40 border-2 border-[#475569] bg-white/5 p-3 flex items-center justify-center rounded-sm">
<svg className="w-full h-full text-slate-400 opacity-80" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M3.75 3.75v4.5h4.5v-4.5h-4.5zM15.75 3.75v4.5h4.5v-4.5h-4.5zM3.75 15.75v4.5h4.5v-4.5h-4.5z" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M10.5 10.5h3v3h-3zM15.75 15.75h4.5v4.5h-4.5zM10.5 15.75h3v4.5h-3zM15.75 10.5h4.5v3h-4.5zM3.75 10.5h4.5v3h-4.5z" strokeLinecap="round"></path>
</svg>
</div>
</div>
</div>

<div className="mt-auto border-t-2 border-[#475569] pt-8 text-center">
<p className="text-[0.85rem] text-[#64748b] font-medium tracking-wide">
                        This document is system-generated and validated under internal clearance protocols.
                    </p>
</div>
</div>
</div>
</div>


    </>
  );
}
