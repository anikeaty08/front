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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Configuration
            const REQUIRED_AUDIT_CODE = "APY-7X92KQ-39LMR8";
            
            // DOM Elements
            const viewPortal = document.getElementById('view-portal');
            const viewTicket = document.getElementById('view-ticket');
            const authForm = document.getElementById('auth-form');
            const inputName = document.getElementById('fullName');
            const inputCode = document.getElementById('auditCode');
            const errorMessage = document.getElementById('error-message');
            
            // Ticket Elements
            const displayName = document.getElementById('display-name');
            const displayCode = document.getElementById('display-code');
            const displayId = document.getElementById('display-id');
            const displayTime = document.getElementById('display-time');
            
            // Buttons
            const btnDownload = document.getElementById('btn-download');
            const btnReturn = document.getElementById('btn-return');

            // State
            let sessionData = {
                name: '',
                ticketId: ''
            };

            // Helpers
            const generateTicketId = () => {
                const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Excluded confusing chars
                let result = 'AUTH-';
                for (let i = 0; i < 9; i++) {
                    if (i === 4) result += '-';
                    else result += chars.charAt(Math.floor(Math.random() * chars.length));
                }
                return result;
            };

            const getFormattedTimestamp = () => {
                const now = new Date();
                const date = now.toISOString().split('T')[0];
                const time = now.toTimeString().split(' ')[0];
                return `${date} ${time} UTC`;
            };

            // Form Submission
            authForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const nameVal = inputName.value.trim();
                const codeVal = inputCode.value.trim().toUpperCase();

                if (codeVal !== REQUIRED_AUDIT_CODE) {
                    // Show Error
                    errorMessage.classList.remove('hidden');
                    errorMessage.classList.add('flex');
                    inputCode.classList.add('border-red-500/50', 'focus:border-red-500', 'focus:ring-red-500/50');
                    inputCode.classList.remove('border-slate-800', 'focus:border-sky-500/50', 'focus:ring-sky-500/50');
                } else {
                    // Success Path
                    errorMessage.classList.add('hidden');
                    errorMessage.classList.remove('flex');
                    
                    // Save State
                    sessionData.name = nameVal;
                    sessionData.ticketId = generateTicketId();

                    // Populate Ticket
                    displayName.textContent = sessionData.name;
                    displayCode.textContent = REQUIRED_AUDIT_CODE;
                    displayId.textContent = sessionData.ticketId;
                    displayTime.textContent = getFormattedTimestamp();

                    // Transition Views
                    viewPortal.style.opacity = '0';
                    setTimeout(() => {
                        viewPortal.classList.add('hidden');
                        viewTicket.classList.remove('hidden');
                        viewTicket.classList.add('flex');
                        
                        // Re-trigger ticket animation
                        const doc = document.getElementById('clearance-document');
                        doc.style.animation = 'none';
                        doc.offsetHeight; // trigger reflow
                        doc.style.animation = null;
                        
                        viewPortal.style.opacity = '1'; // reset for returning
                    }, 300);
                }
            });

            // Clear error styling on input
            inputCode.addEventListener('input', () => {
                errorMessage.classList.add('hidden');
                errorMessage.classList.remove('flex');
                inputCode.classList.remove('border-red-500/50', 'focus:border-red-500', 'focus:ring-red-500/50');
                inputCode.classList.add('border-slate-800', 'focus:border-sky-500/50', 'focus:ring-sky-500/50');
            });

            // Return to Portal
            btnReturn.addEventListener('click', () => {
                authForm.reset();
                viewTicket.classList.add('hidden');
                viewTicket.classList.remove('flex');
                viewPortal.classList.remove('hidden');
                inputName.focus();
            });

            // Download PDF
            btnDownload.addEventListener('click', () => {
                const element = document.getElementById('clearance-document');
                const originalBg = element.style.backgroundColor;
                
                // Optimize element for PDF rendering (remove specific effects that break html2canvas)
                element.classList.remove('shimmer-effect', 'shadow-[0_20px_50px_-15px_rgba(14,165,233,0.15)]', 'animate-ticket');
                element.style.backgroundColor = '#0f172a'; // Ensure solid background

                const fileNameName = sessionData.name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
                
                const opt = {
                    margin:       0.5,
                    filename:     `Clearance_Ticket_${fileNameName}_${sessionData.ticketId}.pdf`,
                    image:        { type: 'jpeg', quality: 1 },
                    html2canvas:  { 
                        scale: 2, 
                        useCORS: true, 
                        backgroundColor: '#020617', // Match body bg
                        windowWidth: 800 // Force standard width for consistent layout
                    },
                    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
                };

                // Change button state
                const originalBtnContent = btnDownload.innerHTML;
                btnDownload.innerHTML = `<iconify-icon icon="solar:hourglass-linear" class="text-lg animate-spin"></iconify-icon> Generating...`;
                btnDownload.disabled = true;

                html2pdf().set(opt).from(element).save().then(() => {
                    // Restore original state
                    element.classList.add('shimmer-effect', 'shadow-[0_20px_50px_-15px_rgba(14,165,233,0.15)]');
                    element.style.backgroundColor = originalBg;
                    btnDownload.innerHTML = originalBtnContent;
                    btnDownload.disabled = false;
                }).catch(err => {
                    console.error("PDF Generation Error:", err);
                    btnDownload.innerHTML = originalBtnContent;
                    btnDownload.disabled = false;
                });
            });
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
      

<div className="w-full max-w-md p-6 flex flex-col items-center justify-center transition-opacity duration-500" id="view-portal">

<div className="text-center mb-10 w-full">
<div className="flex items-center justify-center gap-2 mb-1">
<iconify-icon className="text-sky-400 text-xl" icon="solar:shield-keyhole-linear"></iconify-icon>
<h1 className="text-xl font-medium tracking-tighter text-slate-200">N.MEX</h1>
</div>
<p className="text-xs tracking-widest text-slate-500 uppercase font-medium">Clearance Authority</p>
</div>

<div className="w-full bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-xl p-8 relative shadow-[0_0_40px_-10px_rgba(14,165,233,0.1)]">

<div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-sky-500/50 to-transparent"></div>
<div className="mb-8">
<h2 className="text-lg font-medium tracking-tight text-slate-100 mb-1">Secure Asset Release Portal</h2>
<p className="text-sm text-slate-400">Authorized Audit Code Required</p>
</div>
<form className="space-y-6" id="auth-form">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-slate-400" htmlFor="fullName">Full Name</label>
<input autocomplete="off" className="w-full bg-slate-950/50 border border-slate-800 rounded-lg text-sm text-slate-200 px-3.5 py-2.5 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all placeholder:text-slate-600" id="fullName" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-slate-400" htmlFor="auditCode">Audit Code</label>
<input autocomplete="off" className="w-full bg-slate-950/50 border border-slate-800 rounded-lg text-sm text-slate-200 px-3.5 py-2.5 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all uppercase tracking-widest font-mono" id="auditCode" required="" type="text"/>
</div>

<div className="hidden items-start gap-2.5 bg-red-950/20 border border-red-900/50 rounded-lg p-3" id="error-message">
<iconify-icon className="text-red-400 text-base shrink-0 mt-0.5" icon="solar:danger-circle-linear"></iconify-icon>
<p className="text-xs text-red-400 leading-relaxed font-medium">Invalid Audit Code. Access Denied.</p>
</div>
<button className="w-full bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-400 text-sm font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] group" type="submit">
                    Access Clearance
                    <iconify-icon className="text-base group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>

<p className="text-xs text-slate-500 text-center mt-8 max-w-xs leading-relaxed font-light">
            All access attempts are monitored, logged, and subject to audit verification protocols.
        </p>
</div>

<div className="hidden w-full max-w-2xl p-6 flex-col items-center justify-center min-h-screen" id="view-ticket">

<div className="text-center mb-10">
<h1 className="text-xl font-medium tracking-tight text-slate-200">N.MEX Clearance Authority</h1>
<p className="text-sm text-slate-400 mt-1.5">Clearance Ticket Issued</p>
</div>

<div className="w-full tilt-container mb-10 perspective-1000">

<div className="shimmer-effect bg-slate-900 border border-sky-900/50 rounded-xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(14,165,233,0.15)] relative animate-ticket" id="clearance-document">

<div className="px-8 py-6 border-b border-slate-800 bg-slate-900 flex justify-between items-center">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-sky-950/50 border border-sky-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(14,165,233,0.1)]">
<iconify-icon className="text-sky-400 text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<h2 className="text-base font-medium tracking-tight text-slate-100">Clearance Pass</h2>
<p className="text-xs text-slate-400 mt-0.5">Corporate Logistics Asset Control</p>
</div>
</div>
<div className="bg-emerald-950/30 border border-emerald-900/50 px-3.5 py-1.5 rounded-full flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-emerald-400 tracking-wide uppercase">Verified</span>
</div>
</div>

<div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 bg-gradient-to-b from-slate-900 to-[#0b1120]">
<div>
<p className="text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wider">Authorized Personnel</p>
<p className="text-base font-medium text-slate-200" id="display-name"></p>
</div>
<div>
<p className="text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wider">Audit Code Reference</p>
<p className="text-base font-medium font-mono text-sky-400 tracking-widest" id="display-code"></p>
</div>
<div>
<p className="text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wider">Unique Ticket ID</p>
<p className="text-sm font-medium font-mono text-slate-300" id="display-id"></p>
</div>
<div>
<p className="text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wider">Issuance Timestamp</p>
<p className="text-sm font-medium text-slate-300" id="display-time"></p>
</div>
</div>

<div className="px-8 py-6 border-t border-slate-800 bg-slate-950/50 flex justify-between items-end gap-6">
<p className="text-xs text-slate-500 leading-relaxed max-w-[280px]">
                        This document is system-generated and validated under internal clearance protocols.
                    </p>

<div className="w-16 h-16 bg-slate-100 rounded flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-900 text-4xl" icon="solar:qr-code-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="w-full flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
<button className="flex-1 bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(14,165,233,0.2)]" id="btn-download">
<iconify-icon className="text-lg" icon="solar:document-add-linear"></iconify-icon>
                Download Ticket (PDF)
            </button>
<button className="flex-1 bg-transparent hover:bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2" id="btn-return">
<iconify-icon className="text-lg" icon="solar:restart-linear"></iconify-icon>
                Return to Portal
            </button>
</div>
</div>



    </>
  );
}
