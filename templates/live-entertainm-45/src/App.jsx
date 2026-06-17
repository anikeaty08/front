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



        // ========== NAVIGATION SCROLL ==========
        const nav = document.getElementById('nav');

        function updateNav() {
            if (window.scrollY > 50) {
                nav.classList.add('bg-[#111111]/95', 'backdrop-blur-md', 'py-4', 'border-b', 'border-white/5');
                nav.classList.remove('py-8', 'md:py-10');
            } else {
                nav.classList.remove('bg-[#111111]/95', 'backdrop-blur-md', 'py-4', 'border-b', 'border-white/5');
                nav.classList.add('py-8', 'md:py-10');
            }
        }

        window.addEventListener('scroll', updateNav);

        // ========== SCROLL REVEAL ==========
        const revealElements = document.querySelectorAll('.scroll-reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-8');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        revealElements.forEach(el => revealObserver.observe(el));

        // ========== CALCULATOR LOGIC ==========
        let currentStep = 1;

        function showStep(step) {
            document.querySelectorAll('.calc-step').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('block', 'animate-[fadeIn_0.4s_ease]');
            });
            const target = document.getElementById(`step-${step}`);
            target.classList.remove('hidden');
            target.classList.add('block');
        }
        
        function nextStep(step) { currentStep = step; showStep(currentStep); }
        function prevStep(step) { currentStep = step; showStep(currentStep); }

        function goToStep3() {
            const parts = Array.from(document.querySelectorAll('input[name="eventParts"]:checked')).map(el => el.value);
            const container = document.getElementById('dynamicLineup');
            
            if(parts.length === 0) {
                alert("Please select at least one event part.");
                return;
            }

            let html = '';
            parts.forEach(part => {
                const title = part.charAt(0).toUpperCase() + part.slice(1);
                let defaultAct = "party_band";
                if(part === "ceremony") defaultAct = "strings";
                if(part === "cocktails") defaultAct = "instrumental";

                html += `
                <div class="lineup-row grid grid-cols-1 md:grid-cols-[150px_1fr_1fr] gap-4 items-center p-5 bg-gradient-to-b from-[#251610] to-[#1A0E0A] border border-white/5 rounded-sm group shadow-[0_4px_10px_rgba(0,0,0,0.3),_inset_0_1px_0_rgba(255,255,255,0.03)] hover:border-[#C39E70]/40 transition-all duration-300" data-part="${part}">
                    <div class="font-normal text-[#C39E70] text-base">${title}</div>
                    <div class="relative w-full">
                        <select class="act-select block w-full relative z-10 py-3 bg-transparent border-b border-[#C39E70]/20 text-[#F9F8F4] font-['Raleway'] text-base outline-none focus:border-[#C39E70] transition-colors appearance-none cursor-pointer">
                            <option value="party_band" class="bg-[#1A1A1A] text-[#F9F8F4]" ${defaultAct==='party_band'?'selected':''}>Party Band</option>
                            <option value="strings" class="bg-[#1A1A1A] text-[#F9F8F4]" ${defaultAct==='strings'?'selected':''}>Strings</option>
                            <option value="dj" class="bg-[#1A1A1A] text-[#F9F8F4]" ${defaultAct==='dj'?'selected':''}>DJ</option>
                            <option value="instrumental" class="bg-[#1A1A1A] text-[#F9F8F4]" ${defaultAct==='instrumental'?'selected':''}>Instrumental Ensemble</option>
                            <option value="solo" class="bg-[#1A1A1A] text-[#F9F8F4]" ${defaultAct==='solo'?'selected':''}>Solo Musician</option>
                            <option value="unsure" class="bg-[#1A1A1A] text-[#F9F8F4]">Not sure yet</option>
                        </select>
                        <iconify-icon icon="solar:alt-arrow-down-linear" class="absolute right-2 top-1/2 -translate-y-1/2 text-lg text-[#C39E70]/70 pointer-events-none z-0"></iconify-icon>
                    </div>
                    <div class="relative w-full">
                        <select class="size-select block w-full relative z-10 py-3 bg-transparent border-b border-[#C39E70]/20 text-[#F9F8F4] font-['Raleway'] text-base outline-none focus:border-[#C39E70] transition-colors appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                            <!-- Populated by JS Event Listener -->
                        </select>
                        <iconify-icon icon="solar:alt-arrow-down-linear" class="absolute right-2 top-1/2 -translate-y-1/2 text-lg text-[#C39E70]/70 pointer-events-none z-0"></iconify-icon>
                    </div>
                </div>
                `;
            });
            container.innerHTML = html;
            
            // Attach event listeners for dynamic musician size options
            container.querySelectorAll('.lineup-row').forEach(row => {
                const actSelect = row.querySelector('.act-select');
                const sizeSelect = row.querySelector('.size-select');
                
                actSelect.addEventListener('change', (e) => {
                    const val = e.target.value;
                    let maxOpts = 12;
                    let labelSingular = 'Musician';
                    let labelPlural = 'Musicians';
                    
                    let currentVal = parseInt(sizeSelect.value);
                    let defaultVal = isNaN(currentVal) ? 4 : currentVal; 
                    
                    if (val === 'solo') { maxOpts = 1; labelSingular = 'Musician'; defaultVal = 1; }
                    else if (val === 'dj') { maxOpts = 2; labelSingular = 'DJ'; labelPlural = 'DJs'; defaultVal = Math.min(defaultVal, 2); }
                    else if (isNaN(currentVal)) { defaultVal = 4; } 

                    let newOptions = '';
                    for(let i = 1; i <= maxOpts; i++) {
                        let text = i === 1 ? labelSingular : labelPlural;
                        newOptions += `<option value="${i}" class="bg-[#1A1A1A] text-[#F9F8F4]" ${i === defaultVal ? 'selected' : ''}>${i} ${text}</option>`;
                    }
                    sizeSelect.innerHTML = newOptions;
                    
                    sizeSelect.disabled = (val === 'solo');
                });
                
                // Trigger once to set initial state correctly
                actSelect.dispatchEvent(new Event('change'));
            });

            nextStep(3);
        }

        function validateEmail(email) { return String(email).toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/); }

        function validateAndCalculate() {
            let isValid = true;
            const nameEl = document.getElementById('calcName');
            const emailEl = document.getElementById('calcEmail');
            const phoneEl = document.getElementById('calcPhone');
            const submitBtn = document.getElementById('calcSubmitBtn');

            [nameEl, emailEl, phoneEl].forEach(el => {
                el.classList.remove('border-red-500');
                el.classList.add('border-[#C39E70]/30');
            });
            ['errName', 'errEmail', 'errPhone'].forEach(id => document.getElementById(id).classList.add('hidden'));

            if (!nameEl.value.trim()) { 
                nameEl.classList.remove('border-[#C39E70]/30'); nameEl.classList.add('border-red-500'); 
                document.getElementById('errName').classList.remove('hidden'); isValid = false; 
            }
            if (!emailEl.value.trim() || !validateEmail(emailEl.value)) { 
                emailEl.classList.remove('border-[#C39E70]/30'); emailEl.classList.add('border-red-500'); 
                document.getElementById('errEmail').classList.remove('hidden'); isValid = false; 
            }
            if (!phoneEl.value.trim()) { 
                phoneEl.classList.remove('border-[#C39E70]/30'); phoneEl.classList.add('border-red-500'); 
                document.getElementById('errPhone').classList.remove('hidden'); isValid = false; 
            }
            
            if (!isValid) return;

            // Change button state
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = 'Calculating...';
            submitBtn.disabled = true;

            let baseTotal = 0;
            let maxMusicians = 0;
            let lineupSummaryArr = [];

            // Capture Lineup & Calculate Base
            document.querySelectorAll('.lineup-row').forEach(row => {
                const part = row.querySelector('div').innerText;
                const actSelect = row.querySelector('.act-select');
                const actName = actSelect.options[actSelect.selectedIndex].text;
                const actVal = actSelect.value;
                const size = parseInt(row.querySelector('.size-select').value);
                
                let sizeLabel = (actVal === 'dj') ? (size === 1 ? '1 DJ' : '2 DJs') : `${size} Piece`;
                if (actVal === 'solo') sizeLabel = 'Solo';
                lineupSummaryArr.push(`<strong>${part}:</strong> ${sizeLabel} ${actName}`);

                if (size > maxMusicians) maxMusicians = size;

                let cost = 0;
                if (actVal === 'strings') cost = size * 1000;
                else if (actVal === 'party_band') cost = size * 1200;
                else if (actVal === 'instrumental' || actVal === 'unsure') cost = size * 900;
                else if (actVal === 'solo') cost = 1300;
                else if (actVal === 'dj') cost = size * 1450;

                baseTotal += cost;
            });

            // Capture City & Source
            const city = document.getElementById('calcCity').value || 'Not specified';

            // Capture Addons
            const addonsArr = [];
            const addons = Array.from(document.querySelectorAll('input[name="addons"]:checked')).map(el => {
                addonsArr.push(el.parentElement.querySelector('span').innerText);
                return el.value;
            });
            if (addons.includes('audio_tech')) baseTotal += (maxMusicians > 2) ? 1900 : 1300;
            if (addons.includes('light_classic')) baseTotal += 350;
            if (addons.includes('light_premium')) baseTotal += 850;
            if (addons.includes('mc')) baseTotal += 500;

            const lowEst = Math.floor(baseTotal * 0.9);
            const highEst = Math.floor(baseTotal * 1.15);
            const estimatedPriceString = `$${lowEst.toLocaleString()} - $${highEst.toLocaleString()}`;

            document.getElementById('quotePriceOut').innerText = estimatedPriceString;

            // Generate Summary View
            const eventTypeEl = document.querySelector('input[name="eventType"]:checked');
            const eventTypeStr = eventTypeEl ? eventTypeEl.parentElement.querySelector('span').innerText : 'Special Event';

            let summaryHTML = `
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C39E70] text-[#111] text-[0.65rem] font-bold uppercase tracking-[0.2em] px-4 py-1 rounded-full shadow-[0_0_10px_rgba(195,158,112,0.4)] whitespace-nowrap">Estimate Details</div>
                <h4 class="font-['Playfair_Display'] text-xl text-[#C39E70] mb-5 tracking-tight border-b border-[#C39E70]/20 pb-4 text-center mt-2">Your Custom Package</h4>
                <ul class="space-y-4">
                    <li class="flex items-start gap-3">
                        <iconify-icon icon="solar:heart-angle-linear" class="text-[#C39E70] text-xl shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(195,158,112,0.4)]"></iconify-icon> 
                        <span class="text-[#F9F8F4]"><strong>Celebration:</strong> ${eventTypeStr}</span>
                    </li>
                    <li class="flex items-start gap-3">
                        <iconify-icon icon="solar:music-note-linear" class="text-[#C39E70] text-xl shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(195,158,112,0.4)]"></iconify-icon> 
                        <span class="text-[#F9F8F4]">${lineupSummaryArr.join('<br>')}</span>
                    </li>
                    ${addonsArr.length > 0 ? `
                    <li class="flex items-start gap-3">
                        <iconify-icon icon="solar:magic-stick-3-linear" class="text-[#C39E70] text-xl shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(195,158,112,0.4)]"></iconify-icon> 
                        <span class="text-[#F9F8F4]"><strong>Add-ons:</strong> ${addonsArr.join(', ')}</span>
                    </li>` : ''}
                    <li class="flex items-start gap-3">
                        <iconify-icon icon="solar:map-point-linear" class="text-[#C39E70] text-xl shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(195,158,112,0.4)]"></iconify-icon> 
                        <span class="text-[#F9F8F4]"><strong>Location:</strong> ${city}</span>
                    </li>
                </ul>
            `;
            
            const summaryContainer = document.getElementById('calcSummary');
            summaryContainer.innerHTML = summaryHTML;
            summaryContainer.classList.remove('hidden');

            // Send Data to Zoho Mail via FormSubmit API
            const emailData = {
                Website: "Lovegeneration.ca",
                name: nameEl.value,
                email: emailEl.value,
                phone: phoneEl.value,
                city: city,
                eventType: eventTypeStr,
                lineup: lineupSummaryArr.map(item => item.replace(/<[^>]*>?/gm, '')).join(' | '), 
                addons: addonsArr.length > 0 ? addonsArr.join(', ') : 'None',
                estimatedPrice: estimatedPriceString,
                _subject: "New Estimate Request - Love Generation",
                _url: "https://lovegeneration.ca"
            };

            fetch("https://formsubmit.co/ajax/info@lovegeneration.ca", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(emailData)
            })
            .then(response => response.json())
            .then(data => {
                // Restore button and move to next step
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                nextStep(7);
            })
            .catch(error => {
                console.error("Error sending estimate:", error);
                // Even if email fails, show them their numbers
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                nextStep(7);
            });
        }

        function resetCalc() {
            document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]').forEach(el => {
                el.value = '';
                el.classList.remove('border-red-500');
                el.classList.add('border-[#C39E70]/30');
            });
            document.getElementById('calcCity').value = '';
            ['errName', 'errEmail', 'errPhone'].forEach(id => document.getElementById(id).classList.add('hidden'));
            
            document.querySelectorAll('input[name="eventType"]').forEach(el => el.checked = false);
            document.querySelectorAll('input[name="eventParts"]').forEach(el => el.checked = false);
            document.querySelectorAll('input[name="addons"]').forEach(el => el.checked = false);
            
            document.getElementById('calcSummary').classList.add('hidden');
            
            nextStep(1);
        }

        // ========== STANDARD CONTACT FORM LOGIC ==========
        function submitContactForm(e) {
            e.preventDefault();
            const btn = document.getElementById('contactSubmitBtn');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = 'Sending... <iconify-icon icon="solar:clock-circle-linear" class="text-lg"></iconify-icon>';
            btn.disabled = true;
            
            const formData = {
                Website: "Lovegeneration.ca",
                name: document.getElementById('contactName').value,
                email: document.getElementById('contactEmail').value,
                eventDetails: document.getElementById('contactDetails').value,
                message: document.getElementById('contactMessage').value,
                _subject: "New Website Inquiry - Love Generation",
                _url: "https://lovegeneration.ca"
            };

            fetch("https://formsubmit.co/ajax/info@lovegeneration.ca", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                alert('Message sent! We will reach out to you shortly.');
                btn.innerHTML = originalText;
                btn.disabled = false;
                e.target.reset();
            })
            .catch(error => {
                console.error("Error:", error);
                alert('Something went wrong sending your message. Please email us directly at info@lovegeneration.ca');
                btn.innerHTML = originalText;
                btn.disabled = false;
            });
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
      

<section className="relative h-screen min-h-[45rem] flex flex-col items-center justify-center bg-zinc-950 overflow-hidden" id="hero">

<div className="absolute inset-0 z-0 w-full h-full bg-zinc-950">
<div className="absolute inset-0 flex items-center justify-center opacity-20">
<span className="text-white font-light text-sm uppercase tracking-[0.3em]">Hero Background Placeholder</span>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90 pointer-events-none"></div>
</div>

<nav className="fixed top-0 left-0 w-full z-[1000] px-8 py-8 md:px-12 md:py-10 flex items-center justify-center md:justify-between transition-all duration-500" id="nav">
<a className="font-['Playfair_Display'] text-2xl text-white tracking-tight font-light" href="#">Love Generation</a>
<div className="hidden md:flex items-center gap-10 lg:gap-14">
<a className="text-xs text-white/80 hover:text-white uppercase tracking-[0.2em] font-light transition-colors" href="#about">About</a>
<a className="text-xs text-white/80 hover:text-white uppercase tracking-[0.2em] font-light transition-colors" href="#services">Services</a>
<a className="text-xs text-white/80 hover:text-white uppercase tracking-[0.2em] font-light transition-colors" href="#media">Media</a>
<a className="text-xs text-white/80 hover:text-white uppercase tracking-[0.2em] font-light transition-colors" href="#contact">Contact</a>
<a className="text-xs text-[#C39E70] border border-[#C39E70]/80 px-6 py-2.5 uppercase tracking-[0.15em] font-light hover:bg-[#C39E70] hover:text-white transition-all duration-300 ml-4" href="#contact">Book Now</a>
</div>
</nav>

<div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-5xl mt-12">
<h1 className="font-['Playfair_Display'] text-5xl md:text-6xl text-[#C39E70] leading-[1.1] tracking-tight font-light mb-8">
                Love Generation
            </h1>
<div className="w-12 h-[1px] bg-[#C39E70] mb-8 opacity-80"></div>
<p className="text-xs sm:text-sm text-white/90 uppercase tracking-[0.25em] sm:tracking-[0.3em] font-light mb-12 max-w-2xl">
                Premium Live Entertainment, Made With Love.
            </p>
<button className="border border-[#C39E70]/80 text-[#C39E70] px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-light hover:bg-[#C39E70] hover:text-white transition-all duration-300" onclick="document.querySelector('#calculator').scrollIntoView({behavior:'smooth'})">
                Get Your Free Estimate
            </button>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50 cursor-pointer hover:text-white transition-colors animate-bounce" onclick="document.querySelector('#calculator').scrollIntoView({behavior:'smooth'})">
<iconify-icon className="text-2xl" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<div className="hidden md:flex absolute bottom-12 right-12 z-10 gap-3">
<div className="w-8 h-[1px] bg-white/30"></div>
<div className="w-8 h-[1px] bg-[#C39E70]"></div>
</div>
</section>

<section className="bg-[#F9F8F4] py-24 md:py-32 px-6 md:px-12 relative z-10" id="calculator">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-light text-[#111111] mb-4 tracking-tight">Let's Put a Band to Your Night</h2>
<p className="text-lg text-[#7A756C] font-light">Build your dream live music package in under a minute.</p>
<p className="text-sm text-[#7A756C] opacity-80 font-light mt-2">Tell us about your party and we'll jam out a custom estimate just for you.</p>
</div>

<div className="bg-[#1C110C] w-full py-12 px-8 md:py-16 md:px-14 rounded-xl border border-[#C39E70]/20 shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative overflow-hidden scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 delay-100 ease-out">

<div className="calc-step block relative z-10" id="step-1">
<h3 className="font-['Playfair_Display'] text-3xl font-light text-[#F9F8F4] mb-2 tracking-tight">What are we celebrating?</h3>
<p className="text-base text-[#BCA38F] mb-10 font-light">Pick your kind of party.</p>
<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
<label className="relative flex items-center justify-center p-6 bg-gradient-to-b from-[#F9F6F0] to-[#E3D5C1] border border-[#FFF] rounded-sm cursor-pointer transition-all duration-150 shadow-[0_6px_0_#9C8464,_0_10px_20px_rgba(0,0,0,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_0_#9C8464,_0_15px_25px_rgba(0,0,0,0.5)] has-[:checked]:translate-y-[6px] has-[:checked]:shadow-[0_0_0_#9C8464,_0_0_15px_rgba(195,158,112,0.3),_inset_0_4px_10px_rgba(0,0,0,0.4)] has-[:checked]:bg-gradient-to-b has-[:checked]:from-[#DCD2C1] has-[:checked]:to-[#C2B49D] group" onclick="setTimeout(() =&gt; nextStep(2), 350)">
<input className="sr-only" name="eventType" type="radio" value="wedding"/>
<span className="w-full text-center text-[0.8rem] font-bold uppercase tracking-[0.15em] text-[#4A3324] group-has-[:checked]:text-[#8B5E3C] transition-colors drop-shadow-[0_1px_0_rgba(255,255,255,0.8)] group-has-[:checked]:drop-shadow-[0_0_8px_rgba(195,158,112,0.4)] leading-snug">Wedding</span>
</label>
<label className="relative flex items-center justify-center p-6 bg-gradient-to-b from-[#F9F6F0] to-[#E3D5C1] border border-[#FFF] rounded-sm cursor-pointer transition-all duration-150 shadow-[0_6px_0_#9C8464,_0_10px_20px_rgba(0,0,0,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_0_#9C8464,_0_15px_25px_rgba(0,0,0,0.5)] has-[:checked]:translate-y-[6px] has-[:checked]:shadow-[0_0_0_#9C8464,_0_0_15px_rgba(195,158,112,0.3),_inset_0_4px_10px_rgba(0,0,0,0.4)] has-[:checked]:bg-gradient-to-b has-[:checked]:from-[#DCD2C1] has-[:checked]:to-[#C2B49D] group" onclick="setTimeout(() =&gt; nextStep(2), 350)">
<input className="sr-only" name="eventType" type="radio" value="corporate"/>
<span className="w-full text-center text-[0.8rem] font-bold uppercase tracking-[0.15em] text-[#4A3324] group-has-[:checked]:text-[#8B5E3C] transition-colors drop-shadow-[0_1px_0_rgba(255,255,255,0.8)] group-has-[:checked]:drop-shadow-[0_0_8px_rgba(195,158,112,0.4)] leading-snug">Corporate</span>
</label>
<label className="relative flex items-center justify-center p-6 bg-gradient-to-b from-[#F9F6F0] to-[#E3D5C1] border border-[#FFF] rounded-sm cursor-pointer transition-all duration-150 shadow-[0_6px_0_#9C8464,_0_10px_20px_rgba(0,0,0,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_0_#9C8464,_0_15px_25px_rgba(0,0,0,0.5)] has-[:checked]:translate-y-[6px] has-[:checked]:shadow-[0_0_0_#9C8464,_0_0_15px_rgba(195,158,112,0.3),_inset_0_4px_10px_rgba(0,0,0,0.4)] has-[:checked]:bg-gradient-to-b has-[:checked]:from-[#DCD2C1] has-[:checked]:to-[#C2B49D] group" onclick="setTimeout(() =&gt; nextStep(2), 350)">
<input className="sr-only" name="eventType" type="radio" value="private"/>
<span className="w-full text-center text-[0.8rem] font-bold uppercase tracking-[0.15em] text-[#4A3324] group-has-[:checked]:text-[#8B5E3C] transition-colors drop-shadow-[0_1px_0_rgba(255,255,255,0.8)] group-has-[:checked]:drop-shadow-[0_0_8px_rgba(195,158,112,0.4)] leading-snug">Private Party</span>
</label>
<label className="relative flex items-center justify-center p-6 bg-gradient-to-b from-[#F9F6F0] to-[#E3D5C1] border border-[#FFF] rounded-sm cursor-pointer transition-all duration-150 shadow-[0_6px_0_#9C8464,_0_10px_20px_rgba(0,0,0,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_0_#9C8464,_0_15px_25px_rgba(0,0,0,0.5)] has-[:checked]:translate-y-[6px] has-[:checked]:shadow-[0_0_0_#9C8464,_0_0_15px_rgba(195,158,112,0.3),_inset_0_4px_10px_rgba(0,0,0,0.4)] has-[:checked]:bg-gradient-to-b has-[:checked]:from-[#DCD2C1] has-[:checked]:to-[#C2B49D] group" onclick="setTimeout(() =&gt; nextStep(2), 350)">
<input className="sr-only" name="eventType" type="radio" value="other"/>
<span className="w-full text-center text-[0.8rem] font-bold uppercase tracking-[0.15em] text-[#4A3324] group-has-[:checked]:text-[#8B5E3C] transition-colors drop-shadow-[0_1px_0_rgba(255,255,255,0.8)] group-has-[:checked]:drop-shadow-[0_0_8px_rgba(195,158,112,0.4)] leading-snug">Other Night</span>
</label>
</div>
<div className="flex justify-end mt-12 pt-8 border-t border-[#C39E70]/10">
<button className="flex items-center gap-2 bg-[#C39E70] text-[#111111] px-8 py-4 text-xs font-normal uppercase tracking-[0.15em] hover:bg-[#A38054] hover:text-white transition-colors rounded-sm cursor-pointer shadow-[0_4px_15px_rgba(195,158,112,0.3)] hover:shadow-[0_6px_20px_rgba(195,158,112,0.4)]" onclick="nextStep(2)">
                            Next Step <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="calc-step hidden relative z-10" id="step-2">
<h3 className="font-['Playfair_Display'] text-3xl font-light text-[#F9F8F4] mb-2 tracking-tight">Event Coverage</h3>
<p className="text-base text-[#BCA38F] mb-10 font-light">Which parts of the day need music? Select all that apply.</p>
<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
<label className="relative flex items-center justify-center p-6 bg-gradient-to-b from-[#F9F6F0] to-[#E3D5C1] border border-[#FFF] rounded-sm cursor-pointer transition-all duration-150 shadow-[0_6px_0_#9C8464,_0_10px_20px_rgba(0,0,0,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_0_#9C8464,_0_15px_25px_rgba(0,0,0,0.5)] has-[:checked]:translate-y-[6px] has-[:checked]:shadow-[0_0_0_#9C8464,_0_0_15px_rgba(195,158,112,0.3),_inset_0_4px_10px_rgba(0,0,0,0.4)] has-[:checked]:bg-gradient-to-b has-[:checked]:from-[#DCD2C1] has-[:checked]:to-[#C2B49D] group">
<input className="sr-only" name="eventParts" type="checkbox" value="ceremony"/>
<span className="w-full text-center text-[0.8rem] font-bold uppercase tracking-[0.15em] text-[#4A3324] group-has-[:checked]:text-[#8B5E3C] transition-colors drop-shadow-[0_1px_0_rgba(255,255,255,0.8)] group-has-[:checked]:drop-shadow-[0_0_8px_rgba(195,158,112,0.4)] leading-snug">Ceremony</span>
</label>
<label className="relative flex items-center justify-center p-6 bg-gradient-to-b from-[#F9F6F0] to-[#E3D5C1] border border-[#FFF] rounded-sm cursor-pointer transition-all duration-150 shadow-[0_6px_0_#9C8464,_0_10px_20px_rgba(0,0,0,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_0_#9C8464,_0_15px_25px_rgba(0,0,0,0.5)] has-[:checked]:translate-y-[6px] has-[:checked]:shadow-[0_0_0_#9C8464,_0_0_15px_rgba(195,158,112,0.3),_inset_0_4px_10px_rgba(0,0,0,0.4)] has-[:checked]:bg-gradient-to-b has-[:checked]:from-[#DCD2C1] has-[:checked]:to-[#C2B49D] group">
<input className="sr-only" name="eventParts" type="checkbox" value="cocktails"/>
<span className="w-full text-center text-[0.8rem] font-bold uppercase tracking-[0.15em] text-[#4A3324] group-has-[:checked]:text-[#8B5E3C] transition-colors drop-shadow-[0_1px_0_rgba(255,255,255,0.8)] group-has-[:checked]:drop-shadow-[0_0_8px_rgba(195,158,112,0.4)] leading-snug">Cocktails</span>
</label>
<label className="relative flex items-center justify-center p-6 bg-gradient-to-b from-[#F9F6F0] to-[#E3D5C1] border border-[#FFF] rounded-sm cursor-pointer transition-all duration-150 shadow-[0_6px_0_#9C8464,_0_10px_20px_rgba(0,0,0,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_0_#9C8464,_0_15px_25px_rgba(0,0,0,0.5)] has-[:checked]:translate-y-[6px] has-[:checked]:shadow-[0_0_0_#9C8464,_0_0_15px_rgba(195,158,112,0.3),_inset_0_4px_10px_rgba(0,0,0,0.4)] has-[:checked]:bg-gradient-to-b has-[:checked]:from-[#DCD2C1] has-[:checked]:to-[#C2B49D] group">
<input className="sr-only" name="eventParts" type="checkbox" value="dinner"/>
<span className="w-full text-center text-[0.8rem] font-bold uppercase tracking-[0.15em] text-[#4A3324] group-has-[:checked]:text-[#8B5E3C] transition-colors drop-shadow-[0_1px_0_rgba(255,255,255,0.8)] group-has-[:checked]:drop-shadow-[0_0_8px_rgba(195,158,112,0.4)] leading-snug">Dinner</span>
</label>
<label className="relative flex items-center justify-center p-6 bg-gradient-to-b from-[#F9F6F0] to-[#E3D5C1] border border-[#FFF] rounded-sm cursor-pointer transition-all duration-150 shadow-[0_6px_0_#9C8464,_0_10px_20px_rgba(0,0,0,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_0_#9C8464,_0_15px_25px_rgba(0,0,0,0.5)] has-[:checked]:translate-y-[6px] has-[:checked]:shadow-[0_0_0_#9C8464,_0_0_15px_rgba(195,158,112,0.3),_inset_0_4px_10px_rgba(0,0,0,0.4)] has-[:checked]:bg-gradient-to-b has-[:checked]:from-[#DCD2C1] has-[:checked]:to-[#C2B49D] group">
<input className="sr-only" name="eventParts" type="checkbox" value="reception"/>
<span className="w-full text-center text-[0.8rem] font-bold uppercase tracking-[0.15em] text-[#4A3324] group-has-[:checked]:text-[#8B5E3C] transition-colors drop-shadow-[0_1px_0_rgba(255,255,255,0.8)] group-has-[:checked]:drop-shadow-[0_0_8px_rgba(195,158,112,0.4)] leading-snug">Reception</span>
</label>
</div>
<div className="flex justify-between mt-12 pt-8 border-t border-[#C39E70]/10 items-center">
<button className="text-[#BCA38F] hover:text-[#C39E70] text-xs font-normal uppercase tracking-[0.1em] transition-colors cursor-pointer" onclick="prevStep(1)">Back</button>
<button className="flex items-center gap-2 bg-[#C39E70] text-[#111111] px-8 py-4 text-xs font-normal uppercase tracking-[0.15em] hover:bg-[#A38054] hover:text-white transition-colors rounded-sm cursor-pointer shadow-[0_4px_15px_rgba(195,158,112,0.3)] hover:shadow-[0_6px_20px_rgba(195,158,112,0.4)]" onclick="goToStep3()">
                            Next Step <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="calc-step hidden relative z-10" id="step-3">
<h3 className="font-['Playfair_Display'] text-3xl font-light text-[#F9F8F4] mb-2 tracking-tight">Build Your Lineup</h3>
<p className="text-base text-[#BCA38F] mb-10 font-light">Select the act type and number of musicians for each part.</p>
<div className="space-y-4" id="dynamicLineup">

</div>
<div className="flex justify-between mt-12 pt-8 border-t border-[#C39E70]/10 items-center">
<button className="text-[#BCA38F] hover:text-[#C39E70] text-xs font-normal uppercase tracking-[0.1em] transition-colors cursor-pointer" onclick="prevStep(2)">Back</button>
<button className="flex items-center gap-2 bg-[#C39E70] text-[#111111] px-8 py-4 text-xs font-normal uppercase tracking-[0.15em] hover:bg-[#A38054] hover:text-white transition-colors rounded-sm cursor-pointer shadow-[0_4px_15px_rgba(195,158,112,0.3)] hover:shadow-[0_6px_20px_rgba(195,158,112,0.4)]" onclick="nextStep(4)">
                            Next Step <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="calc-step hidden relative z-10" id="step-4">
<h3 className="font-['Playfair_Display'] text-3xl font-light text-[#F9F8F4] mb-2 tracking-tight">Want us to handle the tech magic?</h3>
<p className="text-base text-[#BCA38F] mb-10 font-light">Add the pro touch. Tick what you’d love us to take off your plate.</p>
<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
<label className="relative flex items-center justify-center p-6 bg-gradient-to-b from-[#F9F6F0] to-[#E3D5C1] border border-[#FFF] rounded-sm cursor-pointer transition-all duration-150 shadow-[0_6px_0_#9C8464,_0_10px_20px_rgba(0,0,0,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_0_#9C8464,_0_15px_25px_rgba(0,0,0,0.5)] has-[:checked]:translate-y-[6px] has-[:checked]:shadow-[0_0_0_#9C8464,_0_0_15px_rgba(195,158,112,0.3),_inset_0_4px_10px_rgba(0,0,0,0.4)] has-[:checked]:bg-gradient-to-b has-[:checked]:from-[#DCD2C1] has-[:checked]:to-[#C2B49D] group">
<input className="sr-only" name="addons" type="checkbox" value="audio_tech"/>
<span className="w-full text-center text-[0.8rem] font-bold uppercase tracking-[0.15em] text-[#4A3324] group-has-[:checked]:text-[#8B5E3C] transition-colors drop-shadow-[0_1px_0_rgba(255,255,255,0.8)] group-has-[:checked]:drop-shadow-[0_0_8px_rgba(195,158,112,0.4)] leading-snug">Full PA &amp; Audio</span>
</label>
<label className="relative flex items-center justify-center p-6 bg-gradient-to-b from-[#F9F6F0] to-[#E3D5C1] border border-[#FFF] rounded-sm cursor-pointer transition-all duration-150 shadow-[0_6px_0_#9C8464,_0_10px_20px_rgba(0,0,0,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_0_#9C8464,_0_15px_25px_rgba(0,0,0,0.5)] has-[:checked]:translate-y-[6px] has-[:checked]:shadow-[0_0_0_#9C8464,_0_0_15px_rgba(195,158,112,0.3),_inset_0_4px_10px_rgba(0,0,0,0.4)] has-[:checked]:bg-gradient-to-b has-[:checked]:from-[#DCD2C1] has-[:checked]:to-[#C2B49D] group">
<input className="sr-only" name="addons" type="checkbox" value="light_classic"/>
<span className="w-full text-center text-[0.8rem] font-bold uppercase tracking-[0.15em] text-[#4A3324] group-has-[:checked]:text-[#8B5E3C] transition-colors drop-shadow-[0_1px_0_rgba(255,255,255,0.8)] group-has-[:checked]:drop-shadow-[0_0_8px_rgba(195,158,112,0.4)] leading-snug">Classic Lights</span>
</label>
<label className="relative flex items-center justify-center p-6 bg-gradient-to-b from-[#F9F6F0] to-[#E3D5C1] border border-[#FFF] rounded-sm cursor-pointer transition-all duration-150 shadow-[0_6px_0_#9C8464,_0_10px_20px_rgba(0,0,0,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_0_#9C8464,_0_15px_25px_rgba(0,0,0,0.5)] has-[:checked]:translate-y-[6px] has-[:checked]:shadow-[0_0_0_#9C8464,_0_0_15px_rgba(195,158,112,0.3),_inset_0_4px_10px_rgba(0,0,0,0.4)] has-[:checked]:bg-gradient-to-b has-[:checked]:from-[#DCD2C1] has-[:checked]:to-[#C2B49D] group">
<input className="sr-only" name="addons" type="checkbox" value="light_premium"/>
<span className="w-full text-center text-[0.8rem] font-bold uppercase tracking-[0.15em] text-[#4A3324] group-has-[:checked]:text-[#8B5E3C] transition-colors drop-shadow-[0_1px_0_rgba(255,255,255,0.8)] group-has-[:checked]:drop-shadow-[0_0_8px_rgba(195,158,112,0.4)] leading-snug">Premium Lights</span>
</label>
<label className="relative flex items-center justify-center p-6 bg-gradient-to-b from-[#F9F6F0] to-[#E3D5C1] border border-[#FFF] rounded-sm cursor-pointer transition-all duration-150 shadow-[0_6px_0_#9C8464,_0_10px_20px_rgba(0,0,0,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_0_#9C8464,_0_15px_25px_rgba(0,0,0,0.5)] has-[:checked]:translate-y-[6px] has-[:checked]:shadow-[0_0_0_#9C8464,_0_0_15px_rgba(195,158,112,0.3),_inset_0_4px_10px_rgba(0,0,0,0.4)] has-[:checked]:bg-gradient-to-b has-[:checked]:from-[#DCD2C1] has-[:checked]:to-[#C2B49D] group">
<input className="sr-only" name="addons" type="checkbox" value="mc"/>
<span className="w-full text-center text-[0.8rem] font-bold uppercase tracking-[0.15em] text-[#4A3324] group-has-[:checked]:text-[#8B5E3C] transition-colors drop-shadow-[0_1px_0_rgba(255,255,255,0.8)] group-has-[:checked]:drop-shadow-[0_0_8px_rgba(195,158,112,0.4)] leading-snug">MC / Host</span>
</label>
</div>
<div className="flex justify-between mt-12 pt-8 border-t border-[#C39E70]/10 items-center">
<button className="text-[#BCA38F] hover:text-[#C39E70] text-xs font-normal uppercase tracking-[0.1em] transition-colors cursor-pointer" onclick="prevStep(3)">Back</button>
<button className="flex items-center gap-2 bg-[#C39E70] text-[#111111] px-8 py-4 text-xs font-normal uppercase tracking-[0.15em] hover:bg-[#A38054] hover:text-white transition-colors rounded-sm cursor-pointer shadow-[0_4px_15px_rgba(195,158,112,0.3)] hover:shadow-[0_6px_20px_rgba(195,158,112,0.4)]" onclick="nextStep(5)">
                            Next Step <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="calc-step hidden relative z-10" id="step-5">
<h3 className="font-['Playfair_Display'] text-3xl font-light text-[#F9F8F4] mb-2 tracking-tight">Where's the party?</h3>
<p className="text-base text-[#BCA38F] mb-10 font-light">Which city will your event take place?</p>
<div className="flex flex-col md:flex-row gap-8">
<div className="w-full md:max-w-md">
<label className="text-sm text-[#BCA38F] block mb-2 font-normal">City / Location</label>
<input className="w-full py-4 bg-transparent border-b border-[#C39E70]/30 text-[#C39E70] font-['Raleway'] text-lg outline-none focus:border-[#C39E70] focus:shadow-[0_1px_0_rgba(195,158,112,1)] transition-all" id="calcCity" placeholder="e.g. Toronto, ON" type="text"/>
</div>
</div>
<div className="flex justify-between mt-12 pt-8 border-t border-[#C39E70]/10 items-center">
<button className="text-[#BCA38F] hover:text-[#C39E70] text-xs font-normal uppercase tracking-[0.1em] transition-colors cursor-pointer" onclick="prevStep(4)">Back</button>
<button className="flex items-center gap-2 bg-[#C39E70] text-[#111111] px-8 py-4 text-xs font-normal uppercase tracking-[0.15em] hover:bg-[#A38054] hover:text-white transition-colors rounded-sm cursor-pointer shadow-[0_4px_15px_rgba(195,158,112,0.3)] hover:shadow-[0_6px_20px_rgba(195,158,112,0.4)]" onclick="nextStep(6)">
                            Next Step <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="calc-step hidden relative z-10" id="step-6">
<h3 className="font-['Playfair_Display'] text-3xl font-light text-[#F9F8F4] mb-2 tracking-tight">Almost there.</h3>
<p className="text-base text-[#BCA38F] mb-10 font-light">Drop your details and we’ll show your estimate instantly.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="relative">
<input className="w-full py-4 bg-transparent border-b border-[#C39E70]/30 text-[#C39E70] font-['Raleway'] text-lg outline-none focus:border-[#C39E70] focus:shadow-[0_1px_0_rgba(195,158,112,1)] transition-all placeholder:text-[#9C978E]/50" id="calcName" placeholder="Your name" type="text"/>
<p className="text-xs text-red-500 mt-2 hidden absolute -bottom-5" id="errName">Give us a name.</p>
</div>
<div className="relative">
<input className="w-full py-4 bg-transparent border-b border-[#C39E70]/30 text-[#C39E70] font-['Raleway'] text-lg outline-none focus:border-[#C39E70] focus:shadow-[0_1px_0_rgba(195,158,112,1)] transition-all placeholder:text-[#9C978E]/50" id="calcEmail" placeholder="Email address" type="email"/>
<p className="text-xs text-red-500 mt-2 hidden absolute -bottom-5" id="errEmail">We need a valid email.</p>
</div>
<div className="relative">
<input className="w-full py-4 bg-transparent border-b border-[#C39E70]/30 text-[#C39E70] font-['Raleway'] text-lg outline-none focus:border-[#C39E70] focus:shadow-[0_1px_0_rgba(195,158,112,1)] transition-all placeholder:text-[#9C978E]/50" id="calcPhone" placeholder="Phone number" type="tel"/>
<p className="text-xs text-red-500 mt-2 hidden absolute -bottom-5" id="errPhone">Add a phone number.</p>
</div>
</div>
<div className="flex justify-between mt-12 pt-8 border-t border-[#C39E70]/10 items-center">
<button className="text-[#BCA38F] hover:text-[#C39E70] text-xs font-normal uppercase tracking-[0.1em] transition-colors cursor-pointer" onclick="prevStep(5)">Back</button>
<button className="flex items-center gap-2 bg-[#C39E70] text-[#111111] px-8 py-4 text-xs font-normal uppercase tracking-[0.15em] hover:bg-[#A38054] hover:text-white transition-colors rounded-sm cursor-pointer shadow-[0_4px_15px_rgba(195,158,112,0.3)] hover:shadow-[0_6px_20px_rgba(195,158,112,0.4)]" id="calcSubmitBtn" onclick="validateAndCalculate()">
                            Show me my numbers <iconify-icon className="text-lg" icon="solar:magic-stick-3-linear"></iconify-icon>
</button>
</div>
</div>

<div className="calc-step hidden text-center py-8 relative z-10" id="step-7">
<h3 className="font-['Playfair_Display'] text-3xl font-light text-[#F9F8F4] mb-2 tracking-tight">Your night, roughly in numbers</h3>
<p className="text-base text-[#BCA38F] font-light">Your custom live entertainment package is estimated at:</p>
<div className="font-['Playfair_Display'] text-5xl md:text-6xl text-[#C39E70] my-10 tracking-tight font-normal drop-shadow-[0_0_20px_rgba(195,158,112,0.6)]" id="quotePriceOut">$0 - $0</div>

<div className="text-left bg-gradient-to-b from-[#2A1710] to-[#160B07] p-6 md:p-8 rounded-sm border border-[#C39E70]/20 mt-8 mb-10 text-sm text-[#BCA38F] font-light hidden max-w-2xl mx-auto shadow-[0_10px_30px_rgba(0,0,0,0.5),_inset_0_1px_0_rgba(255,255,255,0.05)] relative" id="calcSummary">

</div>
<p className="text-base text-[#BCA38F] leading-loose max-w-2xl mx-auto mb-10 font-light">This is a starting point — we’ll tune things up with timing, logistics and any special touches you want. We've sent a copy to your email and will reach out shortly.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="border border-[#C39E70]/30 text-[#C39E70] px-8 py-4 text-xs font-normal uppercase tracking-[0.15em] hover:bg-[#222222] transition-colors rounded-sm cursor-pointer" onclick="resetCalc()">Start Over</button>
<button className="bg-[#C39E70] text-[#111111] px-8 py-4 text-xs font-normal uppercase tracking-[0.15em] hover:bg-[#A38054] hover:text-white transition-colors rounded-sm cursor-pointer shadow-[0_4px_15px_rgba(195,158,112,0.3)] hover:shadow-[0_6px_20px_rgba(195,158,112,0.4)]" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">Book Now</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center bg-[#F9F8F4] text-[#111111] max-w-[90rem] mx-auto" id="about">
<div className="order-2 lg:order-1 scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<div className="flex items-center gap-4 mb-8">
<span className="w-8 h-[1px] bg-[#C39E70]"></span>
<span className="text-xs font-medium tracking-[0.25em] uppercase text-[#A38054]">Our Story</span>
</div>
<h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-8 font-light">
                Bringing the Love<br/>
                Back to <span className="italic text-[#A38054]">Live Music.</span>
</h2>
<div className="space-y-6 text-lg leading-loose text-[#7A756C] font-light">
<p>
                    Music has always been the heartbeat of every great celebration. I started Love Generation because I believe deeply in the magic that happens when a live band truly connects with a room full of people. After years of directing music for events, I've learned that a beautiful performance isn't just about playing the right songs—it's about feeling the energy of the room and bringing everyone together.
                </p>
<p>
                    We focus entirely on the music and the sound, seamlessly working alongside your vendor team so the entertainment flows effortlessly. We bring together top-tier, award winning musicians who genuinely love what they do—artists who know exactly how to read a crowd, share their passion, and keep your guests dancing all night.
                </p>
<p>
                    Every performance is crafted with precision, real passion, and delivered, always, with love.
                </p>
<p className="pt-4 text-base text-[#111111]">
<span className="font-medium">- Mirian Katrib,</span>
<span className="italic text-[#7A756C]">Founder / Musical Director / Event Manager</span>
</p>
</div>
</div>
<div className="order-1 lg:order-2 relative h-[30rem] lg:h-[40rem] scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 delay-200 ease-out">
<div className="w-full h-full bg-[#EFECE4] shadow-xl rounded-sm flex items-center justify-center border border-black/5">
<span className="text-[#9C978E] font-light text-sm uppercase tracking-[0.2em]">Image Placeholder</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 bg-[#111111] text-[#F9F8F4]" id="services">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<div className="flex items-center justify-center gap-4 mb-6">
<span className="w-8 h-[1px] bg-[#C39E70]"></span>
<span className="text-xs font-medium tracking-[0.25em] uppercase text-[#C39E70]">What We Do</span>
<span className="w-8 h-[1px] bg-[#C39E70]"></span>
</div>
<h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight font-light">
                    Our <span className="italic text-[#C39E70]">Services</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
<div className="bg-[#1A1A1A] p-8 lg:p-10 border border-white/5 rounded-sm relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_1rem_3rem_rgba(0,0,0,0.4)] group scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<iconify-icon className="text-4xl text-[#C39E70] mb-6 block transform group-hover:scale-110 transition-transform duration-500" icon="solar:music-notes-linear"></iconify-icon>
<h3 className="font-['Playfair_Display'] text-2xl font-light mb-3 tracking-tight">Weddings</h3>
<p className="text-base leading-relaxed text-[#9C978E] font-light">From ceremony strings to reception dance floors, we craft the perfect musical journey for your most important day. Every setlist is curated with love.</p>
</div>
<div className="bg-[#1A1A1A] p-8 lg:p-10 border border-white/5 rounded-sm relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_1rem_3rem_rgba(0,0,0,0.4)] group scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 delay-100 ease-out">
<iconify-icon className="text-4xl text-[#C39E70] mb-6 block transform group-hover:scale-110 transition-transform duration-500" icon="solar:case-minimalistic-linear"></iconify-icon>
<h3 className="font-['Playfair_Display'] text-2xl font-light mb-3 tracking-tight">Corporate Events</h3>
<p className="text-base leading-relaxed text-[#9C978E] font-light">Elevate your galas, product launches, and conferences with polished, professional live entertainment that leaves a lasting impression on every guest.</p>
</div>
<div className="bg-[#1A1A1A] p-8 lg:p-10 border border-white/5 rounded-sm relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_1rem_3rem_rgba(0,0,0,0.4)] group scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 delay-200 ease-out">
<iconify-icon className="text-4xl text-[#C39E70] mb-6 block transform group-hover:scale-110 transition-transform duration-500" icon="solar:stars-linear"></iconify-icon>
<h3 className="font-['Playfair_Display'] text-2xl font-light mb-3 tracking-tight">Private Parties</h3>
<p className="text-base leading-relaxed text-[#9C978E] font-light">Birthdays, anniversaries, holiday parties—whatever the celebration, we bring the energy, the soul, and of course, the love.</p>
</div>
<div className="bg-[#1A1A1A] p-8 lg:p-10 border border-white/5 rounded-sm relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_1rem_3rem_rgba(0,0,0,0.4)] group scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 delay-300 ease-out">
<iconify-icon className="text-4xl text-[#C39E70] mb-6 block transform group-hover:scale-110 transition-transform duration-500" icon="solar:boombox-linear"></iconify-icon>
<h3 className="font-['Playfair_Display'] text-2xl font-light mb-3 tracking-tight">Audio &amp; Lighting</h3>
<p className="text-base leading-relaxed text-[#9C978E] font-light">Professional sound and lighting packages available when you book our talent. Complete with expert audio engineers to ensure flawless production from start to finish.</p>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-40 px-6 md:px-20 bg-zinc-950 text-[#F9F8F4]" id="media">
<div className="max-w-[90rem] mx-auto">
<div className="text-center mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<div className="flex items-center justify-center gap-4 mb-6">
<span className="w-8 h-[1px] bg-white/20"></span>
<span className="text-xs font-medium tracking-[0.25em] uppercase text-[#9C978E]">See us Live</span>
<span className="w-8 h-[1px] bg-white/20"></span>
</div>
<h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight font-light">
                    The <span className="italic text-[#C39E70]">Experience</span>
</h2>
</div>
<div className="max-w-5xl mx-auto aspect-video bg-[#1A1A1A] border border-[#333333] shadow-2xl rounded-sm overflow-hidden scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 delay-100 ease-out">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube-nocookie.com/embed/ATGeVUx9Nvk?rel=0&amp;modestbranding=1" title="YouTube video player"></iframe>
</div>
</div>
</section>

<section className="py-32 md:py-40 px-6 md:px-20 bg-[#EFECE4] text-[#111111]" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
<div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<div className="flex items-center gap-4 mb-6">
<span className="w-8 h-[1px] bg-[#C39E70]"></span>
<span className="text-xs font-medium tracking-[0.25em] uppercase text-[#A38054]">Reach Out</span>
</div>
<h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-8 font-light">
                    Let's get this<br/><span className="italic text-[#A38054]">Party Started.</span>
</h2>
<p className="text-lg leading-loose text-[#7A756C] mb-12 font-light max-w-lg">Ready to build the perfect soundscape for your event? Drop us a line. We'd love to chat about your vision and how we can bring it to life.</p>
<div className="space-y-8">
<div className="flex items-center gap-6">
<div className="w-12 h-12 rounded-full border border-[#C39E70]/30 flex items-center justify-center text-[#C39E70]">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<span className="text-lg font-normal tracking-wide">Toronto, Canada</span>
</div>
<div className="flex items-center gap-6">
<div className="w-12 h-12 rounded-full border border-[#C39E70]/30 flex items-center justify-center text-[#C39E70]">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
<a className="text-lg font-normal tracking-wide hover:text-[#A38054] transition-colors" href="mailto:info@lovegeneration.ca">info@lovegeneration.ca</a>
</div>
<div className="flex items-center gap-6">
<div className="w-12 h-12 rounded-full border border-[#C39E70]/30 flex items-center justify-center text-[#C39E70]">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
</div>
<a className="text-lg font-normal tracking-wide hover:text-[#A38054] transition-colors" href="tel:+19057166640">+1-905-716-6640</a>
</div>
</div>
</div>
<div className="bg-[#F9F8F4] p-10 md:p-14 border border-black/5 rounded-sm shadow-xl scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 delay-100 ease-out">
<form className="space-y-8" onsubmit="submitContactForm(event)">
<input className="w-full py-4 bg-transparent border-b border-black/15 text-[#111111] font-['Raleway'] text-lg outline-none focus:border-[#C39E70] transition-colors placeholder:text-[#9C978E]" id="contactName" placeholder="Your Name" required="" type="text"/>
<input className="w-full py-4 bg-transparent border-b border-black/15 text-[#111111] font-['Raleway'] text-lg outline-none focus:border-[#C39E70] transition-colors placeholder:text-[#9C978E]" id="contactEmail" placeholder="Email Address" required="" type="email"/>
<input className="w-full py-4 bg-transparent border-b border-black/15 text-[#111111] font-['Raleway'] text-lg outline-none focus:border-[#C39E70] transition-colors placeholder:text-[#9C978E]" id="contactDetails" placeholder="Event Type &amp; Date" required="" type="text"/>
<textarea className="w-full py-4 bg-transparent border-b border-black/15 text-[#111111] font-['Raleway'] text-lg outline-none focus:border-[#C39E70] transition-colors resize-none placeholder:text-[#9C978E]" id="contactMessage" placeholder="Tell us about your event..." required="" rows="4"></textarea>
<button className="w-full flex items-center justify-center gap-3 bg-[#111111] text-[#F9F8F4] px-8 py-5 text-xs font-normal uppercase tracking-[0.2em] hover:bg-[#A38054] transition-colors rounded-sm mt-4 cursor-pointer shadow-md hover:shadow-lg" id="contactSubmitBtn" type="submit">
                        Send Message <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="py-12 md:py-16 px-6 md:px-20 bg-[#111111] text-[#9C978E] border-t border-[#333333] flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
<div className="font-['Playfair_Display'] text-2xl text-[#F9F8F4] tracking-tight font-light">Love Generation</div>
<div className="flex gap-8 text-sm font-light uppercase tracking-[0.1em]">
<a className="hover:text-[#C39E70] transition-colors" href="https://www.instagram.com/miriankatrib/" target="_blank">Instagram</a>
<a className="hover:text-[#C39E70] transition-colors" href="https://youtu.be/ATGeVUx9Nvk" target="_blank">YouTube</a>
<a className="hover:text-[#C39E70] transition-colors" href="#">Privacy</a>
</div>
<div className="text-xs font-light tracking-wider opacity-60">© 2025 Love Generation. Premium Live Entertainment.</div>
</footer>


    </>
  );
}
