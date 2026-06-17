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



        // Data Configuration
        const regionData = {
            US: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"],
            CA: ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Northwest Territories", "Nunavut", "Yukon"]
        };

        // State Management
        let currentSessionData = {};

        // DOM Elements
        const stateSelect = document.getElementById('state');
        const countrySelect = document.getElementById('country');
        
        // Functions
        function populateStates() {
            const country = countrySelect.value;
            stateSelect.innerHTML = '<option value="" disabled selected>Select State / Province</option>';
            
            if (regionData[country]) {
                regionData[country].forEach(state => {
                    const option = document.createElement('option');
                    option.value = state;
                    option.textContent = state;
                    stateSelect.appendChild(option);
                });
                stateSelect.disabled = false;
            } else {
                stateSelect.disabled = true;
                stateSelect.innerHTML = '<option value="" disabled selected>Pending Selection</option>';
            }
        }

        function switchPage(pageId) {
            document.querySelectorAll('.page-view').forEach(page => {
                page.classList.remove('active');
            });
            // Small delay to allow CSS opacity transition logic if implemented
            setTimeout(() => {
                document.getElementById(pageId).classList.add('active');
                if (pageId === 'page2') document.getElementById('verifyCode').focus();
            }, 50);
        }

        function handleRegistration(e) {
            e.preventDefault();
            
            // Store data
            currentSessionData = {
                fname: document.getElementById('fname').value.trim(),
                lname: document.getElementById('lname').value.trim(),
                auditCode: document.getElementById('auditCode').value.trim().toUpperCase(),
                state: document.getElementById('state').value
            };

            switchPage('page2');
        }

        function verifyAndGenerate(e) {
            e.preventDefault();
            
            // Populate digital pass
            document.getElementById('display-name').textContent = `${currentSessionData.fname} ${currentSessionData.lname}`;
            document.getElementById('display-audit').textContent = currentSessionData.auditCode;
            document.getElementById('display-region').textContent = currentSessionData.state;
            
            // Generate mock IDs and times
            const passId = 'NMX-' + Math.random().toString(36).substring(2, 8).toUpperCase();
            document.getElementById('display-id').textContent = passId;
            
            const now = new Date();
            const timeString = now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
            document.getElementById('display-time').textContent = timeString;

            switchPage('page3');
        }

        function resetSystem() {
            document.getElementById('registrationForm').reset();
            document.getElementById('verifyCode').value = '';
            countrySelect.value = '';
            populateStates(); // resets state dropdown to disabled
            currentSessionData = {};
            switchPage('page1');
        }
    
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
      

<header className="w-full py-5 px-6 sm:px-10 flex justify-between items-center border-b border-white/5 bg-[#0B1120]/80 backdrop-blur-md sticky top-0 z-50">
<div className="flex flex-col">
<div className="text-xl font-medium tracking-tighter text-white flex items-center gap-2">
                N.MEX
            </div>
<span className="text-[10px] tracking-widest text-slate-500 uppercase mt-0.5">Clearance Authority</span>
</div>
<div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 font-light bg-slate-900/50 px-3 py-1.5 rounded-full border border-white/5">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon>
<span>Secure Enterprise Node</span>
</div>
</header>

<main className="flex-grow flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

<div className="page-view active w-full max-w-xl relative z-10" id="page1">
<div className="text-center mb-8">
<h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-2">Secure Asset Release Portal</h1>
<p className="text-sm text-slate-400 font-light">Authorized Access Registration Required</p>
</div>
<div className="bg-[#111827]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-10 shadow-[0_0_40px_-15px_rgba(59,130,246,0.15)] relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
<form className="space-y-5" id="registrationForm" onsubmit="handleRegistration(event)">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-slate-400 ml-1">First Name</label>
<input className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors placeholder:text-slate-600" id="fname" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-slate-400 ml-1">Last Name</label>
<input className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors placeholder:text-slate-600" id="lname" required="" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-slate-400 ml-1">Phone Number</label>
<input className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors placeholder:text-slate-600" required="" type="tel"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-slate-400 ml-1">Email Address</label>
<input className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors placeholder:text-slate-600" id="email" required="" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-slate-400 ml-1">Audit Code</label>
<input className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors uppercase font-mono tracking-widest" id="auditCode" required="" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-slate-400 ml-1">Country</label>
<div className="relative">
<select className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors appearance-none cursor-pointer" id="country" onchange="populateStates()" required="">
<option className="text-slate-500" disabled="" selected="" value="">Select Region</option>
<option value="US">United States</option>
<option value="CA">Canada</option>
</select>
<iconify-icon className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-slate-400 ml-1">State / Province</label>
<div className="relative">
<select className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors appearance-none disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer" disabled="" id="state" required="">
<option disabled="" selected="" value="">Pending Selection</option>
</select>
<iconify-icon className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="pt-6">
<button className="w-full bg-[#2563EB] hover:bg-[#3B82F6] text-white font-medium text-sm py-3 px-4 rounded-lg shadow-[0_0_20px_-5px_rgba(59,130,246,0.4)] transition-all duration-300 flex items-center justify-center gap-2" type="submit">
<span>Request Verification Code</span>
<iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</form>
</div>
<p className="text-xs text-slate-500 text-center mt-6 max-w-sm mx-auto font-light flex items-start sm:items-center justify-center gap-1.5">
<iconify-icon className="mt-0.5 sm:mt-0 flex-shrink-0" icon="solar:info-circle-linear"></iconify-icon>
<span>All access requests are monitored, logged, and subject to audit verification protocols.</span>
</p>
</div>

<div className="page-view w-full max-w-md relative z-10" id="page2">
<div className="bg-[#111827]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-8 sm:p-10 shadow-[0_0_40px_-15px_rgba(59,130,246,0.15)] text-center relative overflow-hidden">
<button className="absolute top-6 left-6 text-slate-500 hover:text-slate-300 transition-colors" onclick="switchPage('page1')" type="button">
<iconify-icon className="text-lg" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-6 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
<iconify-icon className="text-blue-400 text-xl" icon="solar:letter-opened-linear"></iconify-icon>
</div>
<h2 className="text-xl sm:text-2xl font-medium tracking-tight text-white mb-3">Email Verification Required</h2>
<p className="text-sm text-slate-400 font-light mb-8">A secure verification code has been sent to your registered email address. Please enter the code below to continue.</p>
<form className="space-y-6" onsubmit="verifyAndGenerate(event)">
<div>
<input autocomplete="off" className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-4 py-4 text-2xl text-center tracking-[0.5em] font-mono text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors placeholder:text-slate-700 placeholder:tracking-normal placeholder:font-sans" id="verifyCode" maxlength="6" pattern="[0-9]{6}" placeholder="000000" required="" type="text"/>
</div>
<button className="w-full bg-[#2563EB] hover:bg-[#3B82F6] text-white font-medium text-sm py-3 px-4 rounded-lg shadow-[0_0_20px_-5px_rgba(59,130,246,0.4)] transition-all duration-300 flex items-center justify-center gap-2" type="submit">
<span>Verify &amp; Generate Clearance Pass</span>
<iconify-icon className="text-base" icon="solar:check-circle-linear"></iconify-icon>
</button>
</form>
</div>
<p className="text-xs text-slate-500 font-light text-center mt-6">
                Verification codes expire after a limited time.
            </p>
</div>

<div className="page-view w-full max-w-2xl relative z-10" id="page3">
<div className="text-center mb-10">
<h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-2">Clearance Pass Issued</h1>
<p className="text-sm text-slate-400 font-light">Present this digital credential at the security checkpoint.</p>
</div>

<div className="perspective-container w-full max-w-[420px] mx-auto mb-10">
<div className="card-3d relative rounded-2xl bg-gradient-to-b from-slate-800 to-[#0B1120] border border-blue-500/30 p-1 shadow-[0_20px_50px_-15px_rgba(59,130,246,0.2)] overflow-hidden">

<div className="relative bg-[#0B1120]/80 rounded-xl p-6 sm:p-8 h-full border border-white/5 backdrop-blur-md overflow-hidden">

<div className="animate-sweep"></div>

<div className="flex justify-between items-start mb-8 border-b border-white/5 pb-5 relative z-10">
<div>
<div className="text-[10px] text-blue-400/80 font-mono uppercase tracking-widest mb-1.5">Clearance Level</div>
<div className="text-lg font-medium text-white tracking-tight flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:shield-check-linear"></iconify-icon>
                                    Authorized Access
                                </div>
</div>
<div className="w-10 h-10 bg-slate-800/50 rounded-lg border border-white/10 flex items-center justify-center text-slate-300">
<iconify-icon className="text-xl" icon="solar:user-id-linear"></iconify-icon>
</div>
</div>

<div className="space-y-5 relative z-10 mb-8">
<div>
<div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Holder Name</div>
<div className="text-base text-slate-200 font-medium" id="display-name">--</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Audit Code</div>
<div className="text-sm text-slate-300 font-mono bg-slate-900/50 px-2 py-1 rounded inline-block border border-white/5" id="display-audit">--</div>
</div>
<div>
<div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Region</div>
<div className="text-sm text-slate-300 truncate" id="display-region">--</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Status</div>
<div className="text-xs text-emerald-400 font-medium flex items-center gap-1.5 bg-emerald-500/10 px-2 py-1 rounded inline-block border border-emerald-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                        Verified
                                    </div>
</div>
<div>
<div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Pass ID</div>
<div className="text-xs text-slate-400 font-mono" id="display-id">--</div>
</div>
</div>
</div>

<div className="flex justify-between items-end relative z-10 pt-5 border-t border-white/5">
<div>
<div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Timestamp</div>
<div className="text-[11px] text-slate-400 font-mono" id="display-time">--</div>
</div>

<div className="w-14 h-14 bg-white p-1 rounded-sm opacity-90 mix-blend-screen">
<div className="w-full h-full" style={{backgroundImage: 'repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundPosition: '0 0, 4px 4px', backgroundSize: '8px 8px'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
<button className="w-full sm:w-auto bg-slate-200 hover:bg-white text-slate-900 font-medium text-sm py-2.5 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
<iconify-icon className="text-base" icon="solar:download-square-linear"></iconify-icon>
<span>Download Clearance Pass (PDF)</span>
</button>
<button className="w-full sm:w-auto bg-transparent hover:bg-white/5 text-slate-300 border border-white/10 font-medium text-sm py-2.5 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2" onclick="resetSystem()">
<span>Return to Portal</span>
</button>
</div>
</div>
</main>


    </>
  );
}
