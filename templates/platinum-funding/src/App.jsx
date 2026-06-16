import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // State Management
        let currentStep = 1;
        const totalSteps = 3;
        const formData = {
            industry: '', revenue: '', timeInBusiness: '', amount: '', // Step 1
            firstName: '', lastName: '', businessName: '', website: '', email: '', phone: '', consent: false, // Step 2
            creditScore: '', useOfFunds: '', comments: '', // Step 3
            repId: '', tracking: {} // Meta
        };

        // DOM Elements
        const steps = [document.getElementById('step-1'), document.getElementById('step-2'), document.getElementById('step-3')];
        const progressBar = document.getElementById('progress-bar');
        const stepLabel = document.getElementById('step-label');
        const stepPercent = document.getElementById('step-percent');

        // Initialization
        document.addEventListener('DOMContentLoaded', () => {
            // Load URL Params
            const params = new URLSearchParams(window.location.search);
            const rep = params.get('rep');
            
            if (rep) {
                formData.repId = rep;
                const repDisplay = document.getElementById('rep-display');
                repDisplay.innerHTML = `👤 Referred by: ${rep.charAt(0).toUpperCase() + rep.slice(1)}`;
                repDisplay.classList.remove('hidden');
                document.getElementById('application-form').querySelector('.relative').classList.add('pt-10');
            }

            // Save UTMs
            ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'gclid'].forEach(param => {
                if(params.get(param)) formData.tracking[param] = params.get(param);
            });
            formData.tracking.pageLoadTime = new Date().toISOString();

            // Load saved state from session storage
            loadState();
        });

        // Navigation Logic
        function nextStep(step) {
            if (!validateStep(step)) return;
            
            saveState();
            logEvent(`form_step_${step}_complete`);
            
            // Fade out current
            steps[step-1].classList.add('hidden', 'opacity-0');
            
            // Update Progress
            currentStep = step + 1;
            updateProgress();
            
            // Fade in next
            steps[currentStep-1].classList.remove('hidden');
            // Small timeout to allow display:block to render before opacity transition
            setTimeout(() => {
                steps[currentStep-1].classList.remove('opacity-0');
                // Focus first input of new step
                const firstInput = steps[currentStep-1].querySelector('input, select');
                if(firstInput) firstInput.focus();
            }, 50);

            logEvent(`form_step_${currentStep}_view`);
        }

        function prevStep(step) {
            steps[step-1].classList.add('hidden', 'opacity-0');
            currentStep = step - 1;
            updateProgress();
            steps[currentStep-1].classList.remove('hidden');
            setTimeout(() => steps[currentStep-1].classList.remove('opacity-0'), 50);
        }

        function updateProgress() {
            const percent = Math.round(((currentStep - 1) / totalSteps) * 100) + 33; // Start at 33%
            const displayPercent = Math.min(percent, 95) + '%';
            progressBar.style.width = displayPercent;
            stepLabel.innerText = `Step ${currentStep} of ${totalSteps}`;
            stepPercent.innerText = displayPercent;
        }

        // Validation Logic
        function validateStep(step) {
            let isValid = true;
            const currentStepEl = steps[step-1];
            const inputs = currentStepEl.querySelectorAll('input, select, textarea');
            
            inputs.forEach(input => {
                if (input.hasAttribute('required') || 
                    (step === 1 && input.tagName === 'SELECT') || 
                    (step === 2 && ['firstName', 'lastName', 'businessName', 'email', 'phone'].includes(input.id)) ||
                    (input.type === 'checkbox' && input.id === 'consent')) {
                    
                    if (!validateField(input)) {
                        isValid = false;
                        // Focus first error
                        if(isValid) input.focus(); 
                    }
                }
            });

            if(step === 2) {
                if(!validateEmail(document.getElementById('email'))) isValid = false;
                if(!validatePhone(document.getElementById('phone'))) isValid = false;
            }

            return isValid;
        }

        function validateField(input) {
            const errorMsg = input.parentNode.querySelector('.error-msg') || input.parentNode.parentNode.querySelector('.error-msg');
            let valid = true;

            if (input.type === 'checkbox') {
                valid = input.checked;
            } else if (input.tagName === 'SELECT') {
                valid = input.value !== "";
            } else {
                valid = input.value.trim().length > 0;
                if (input.id === 'firstName' || input.id === 'lastName' || input.id === 'businessName') {
                    valid = input.value.trim().length >= 2;
                }
            }

            // Update State
            if (input.id) formData[input.id] = input.type === 'checkbox' ? input.checked : input.value;

            // UI
            if (!valid && errorMsg) {
                errorMsg.classList.remove('hidden');
                input.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                input.classList.remove('border-gray-300', 'focus:ring-[#008001]', 'focus:border-[#008001]');
            } else if (errorMsg) {
                errorMsg.classList.add('hidden');
                input.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                input.classList.add('border-gray-300', 'focus:ring-[#008001]', 'focus:border-[#008001]');
            }
            return valid;
        }

        function validateEmail(input) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const valid = re.test(input.value.toLowerCase());
            const errorMsg = input.parentNode.querySelector('.error-msg');
            
            // Simple domain typo check
            const value = input.value.toLowerCase();
            const suggestionBox = document.getElementById('email-suggestion');
            const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
            let suggestion = '';

            // Check for common typos like gmil.com, yaho.com
            if(value.includes('@')) {
                const domain = value.split('@')[1];
                domains.forEach(d => {
                    if(domain !== d && (d.includes(domain) || domain.includes(d.split('.')[0])) && Math.abs(domain.length - d.length) < 2) {
                        suggestion = value.split('@')[0] + '@' + d;
                    }
                });
            }

            if(suggestion && valid) {
                document.getElementById('suggested-email').innerText = suggestion;
                suggestionBox.classList.remove('hidden');
                suggestionBox.onclick = function() {
                    input.value = suggestion;
                    suggestionBox.classList.add('hidden');
                    formData.email = suggestion;
                }
            } else {
                suggestionBox.classList.add('hidden');
            }

            if (!valid) {
                errorMsg.classList.remove('hidden');
                input.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                input.classList.remove('border-gray-300', 'focus:ring-[#008001]', 'focus:border-[#008001]');
            } else {
                errorMsg.classList.add('hidden');
                input.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                input.classList.add('border-gray-300', 'focus:ring-[#008001]', 'focus:border-[#008001]');
                formData.email = input.value;
            }
            return valid;
        }

        function validatePhone(input) {
            const cleanNum = input.value.replace(/\D/g, '');
            const valid = cleanNum.length === 10;
            const errorMsg = input.parentNode.querySelector('.error-msg');

            if (!valid) {
                errorMsg.classList.remove('hidden');
                input.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
            } else {
                errorMsg.classList.add('hidden');
                input.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
                formData.phone = input.value;
            }
            return valid;
        }

        function formatPhone(input) {
            let x = input.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
            input.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        }

        // Logic Helpers
        function checkTimeInBusiness(Element) {
            const warning = document.getElementById('time-warning');
            if (thisElement.value === '<3m') {
                warning.classList.remove('hidden');
            } else {
                warning.classList.add('hidden');
            }
            validateField(thisElement);
        }

        function checkCredit(input) {
            const warning = document.getElementById('credit-warning');
            if (input.value === '<575') {
                warning.classList.remove('hidden');
            } else {
                warning.classList.add('hidden');
            }
            validateField(input);
        }

        function updateCharCount(textarea) {
            const count = textarea.value.length;
            document.getElementById('char-count').innerText = count;
            formData.comments = textarea.value;
        }

        // Form Submission Logic
        async function submitForm() {
            // Final validation check
            if (!validateStep(3)) return;

            const btn = document.getElementById('submit-btn');
            const originalContent = btn.innerHTML;
            
            // Set Loading State
            btn.disabled = true;
            btn.innerHTML = `<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Processing Application...`;

            try {
                // Prepare the payload
                const payload = {
                    ...formData,
                    submittedAt: new Date().toISOString(),
                    userAgent: navigator.userAgent,
                    referrer: document.referrer
                };

                // Example Webhook Implementation
                // Replace the URL below with your actual webhook endpoint (e.g., Zapier, Make, HighLevel)
                /* 
                const response = await fetch('https://your-webhook-url.com/endpoint', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                
                if (!response.ok) throw new Error('Submission failed');
                */

                // Simulated network delay for user experience (remove in production)
                await new Promise(resolve => setTimeout(resolve, 2000));

                // Success Handling
                logEvent('form_submission_success');
                
                // Clear saved state
                sessionStorage.removeItem('platinum_form_state');
                
                // Hide Form / Show Success Message
                document.getElementById('step-3').classList.add('hidden');
                document.getElementById('form-progress-container').classList.add('hidden');
                
                // Update success message email
                document.getElementById('success-email').innerText = formData.email;
                
                const successState = document.getElementById('success-state');
                successState.classList.remove('hidden');
                
                // Scroll to message
                document.getElementById('application-form').scrollIntoView({ behavior: 'smooth', block: 'center' });

            } catch (error) {
                console.error('Submission error:', error);
                alert('We encountered an error submitting your application. Please check your connection and try again.');
                
                // Reset button state
                btn.disabled = false;
                btn.innerHTML = originalContent;
            }
        }

        // Smooth Scrolling Helper
        function scrollToForm() {
            const hero = document.getElementById('hero');
            if (hero) {
                hero.scrollIntoView({ behavior: 'smooth' });
                // Attempt to focus the first input for accessibility
                setTimeout(() => {
                    const firstInput = document.getElementById('industry');
                    if (firstInput) firstInput.focus();
                }, 800);
            }
        }

        // Accordion / FAQ Logic
        function toggleFaq(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('.iconify');
            const isExpanded = content.style.maxHeight;

            // Close all other FAQs (optional accordion behavior)
            /*
            document.querySelectorAll('.accordion-content').forEach(el => {
                if (el !== content && el.style.maxHeight) {
                    el.style.maxHeight = null;
                    el.classList.remove('active');
                    el.previousElementSibling.querySelector('.iconify').style.transform = 'rotate(0deg)';
                }
            });
            */

            if (isExpanded) {
                content.style.maxHeight = null;
                content.classList.remove('active');
                icon.style.transform = 'rotate(0deg)';
            } else {
                content.classList.add('active');
                content.style.maxHeight = content.scrollHeight + "px";
                icon.style.transform = 'rotate(45deg)';
            }
        }

        // Session Storage for persistence across reloads
        function saveState() {
            try {
                sessionStorage.setItem('platinum_form_state', JSON.stringify({
                    timestamp: Date.now(),
                    step: currentStep,
                    data: formData
                }));
            } catch (e) {
                // Storage likely full or disabled
                console.warn('Unable to save form state');
            }
        }

        function loadState() {
            try {
                const saved = sessionStorage.getItem('platinum_form_state');
                if (!saved) return;

                const parsed = JSON.parse(saved);
                // Expire state after 24 hours
                if (Date.now() - parsed.timestamp > 86400000) {
                    sessionStorage.removeItem('platinum_form_state');
                    return;
                }

                // Restore Data
                if (parsed.data) {
                    Object.assign(formData, parsed.data);
                    
                    // Repopulate fields
                    Object.keys(formData).forEach(key => {
                        const el = document.getElementById(key);
                        if (el) {
                            if (el.type === 'checkbox') el.checked = formData[key];
                            else el.value = formData[key];
                        }
                    });
                }
            } catch (e) {
                console.error('Error loading state:', e);
            }
        }

        // Analytics Logger
        function logEvent(eventName, params = {}) {
            console.log(`[Event]: ${eventName}`, params);
            // Example integration:
            // if (window.dataLayer) window.dataLayer.push({ event: eventName, ...params });
        }

        // Mobile Sticky CTA Observer
        // Shows the sticky button only when the Hero section is scrolled out of view
        const observer = new IntersectionObserver((entries) => {
            const stickyCta = document.getElementById('mobile-sticky-cta');
            entries.forEach(entry => {
                if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
                    // Hero is above viewport, show sticky bar
                    stickyCta.style.transform = 'translateY(0)';
                } else {
                    // Hero is visible, hide sticky bar
                    stickyCta.style.transform = 'translateY(100%)';
                }
            });
        }, { threshold: 0, rootMargin: "-50px 0px 0px 0px" });

        const heroSection = document.getElementById('hero');
        if (heroSection) observer.observe(heroSection);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm transition-all duration-300" id="main-header">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

<div className="flex items-center gap-2">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-[#008001] rounded flex items-center justify-center text-white font-bold text-lg tracking-tighter group-hover:bg-[#006001] transition-colors">
                        P
                    </div>
<span className="font-bold text-lg tracking-tight text-gray-900 group-hover:text-[#008001] transition-colors">
                        PLATINUM<span className="font-normal text-gray-500 ml-1 hidden sm:inline">Funding Services</span>
</span>
</a>
</div>

<div className="hidden lg:block text-sm text-gray-500 font-medium">
                Fast Business Funding For 250+ Industries
            </div>

<div className="flex gap-4 gap-x-4 gap-y-4 items-center">

</div>
</div>
</header>

<section className="lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-24 pb-16 relative" id="hero">

<div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
<svg className="absolute right-0 top-0 h-full w-1/2 text-gray-50 fill-current" preserveaspectratio="none" viewbox="0 0 100 100">
<polygon points="50,0 100,0 100,100 0,100"></polygon>
</svg>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-7 flex flex-col pt-4 gap-x-6 gap-y-6">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                        Fast Business Funding <br className="hidden lg:block"/>
<span className="text-[#008001]">Without Headaches</span>
</h1>
<p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                        Simple online application, same-day approvals, and funds in your account in under a week. We fund 250+ industries with flexible options that fit real-world businesses.
                    </p>

<ul className="space-y-3 mt-2">
<li className="flex items-start gap-3">
<div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#008001]/10 flex items-center justify-center text-[#008001]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-gray-700">Funding from <span className="font-semibold text-gray-900">$5,000 to $1,500,000</span> <span className="text-xs text-gray-400 align-top">†</span></span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#008001]/10 flex items-center justify-center text-[#008001]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-gray-700">Minimum <span className="font-semibold text-gray-900">575</span> credit score considered</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#008001]/10 flex items-center justify-center text-[#008001]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-gray-700">Only <span className="font-semibold text-gray-900">1+ month in business</span> required</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#008001]/10 flex items-center justify-center text-[#008001]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-gray-700">Minimum <span className="font-semibold text-gray-900">$17,000 per month</span> in sales</span>
</li>
</ul>
<div className="pt-4 flex flex-col sm:flex-row gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-[#008001] hover:bg-[#006001] text-white font-semibold rounded shadow-lg shadow-[#008001]/20 transform transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2" onclick="scrollToForm()">
                            Check My Funding Options
                            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<p className="text-xs text-gray-500 flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:clock" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                        Takes about 2 minutes • No obligation to accept an offer
                    </p>
</div>

<div className="lg:col-span-5 w-full relative" id="application-form">
<div className="sm:p-8 overflow-hidden bg-white border-gray-100 border rounded-xl pt-6 pr-6 pb-6 pl-6 relative shadow-xl">

<div className="hidden absolute top-0 left-0 right-0 bg-[#008001]/5 py-1 px-8 text-xs font-medium text-[#008001] border-b border-[#008001]/20 text-center" id="rep-display">

</div>

<div className="mb-6 pt-2" id="form-progress-container">
<div className="flex justify-between text-xs font-medium text-gray-500 mb-2">
<span id="step-label">Step 1 of 3</span>
<span id="step-percent">33%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
<div className="bg-[#008001] h-2 rounded-full transition-all duration-500 ease-out" id="progress-bar" style={{width: '33%'}}></div>
</div>
</div>

<div className="form-step transition-opacity duration-300" id="step-1">
<h3 className="text-xl font-semibold text-gray-900 mb-6">Check My Funding Options</h3>
<div className="space-y-5">

<div className="">
<label className="block text-sm font-medium text-gray-700 mb-1">Industry <span className="text-red-500">*</span></label>
<select className="w-full px-4 py-3 rounded border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#008001] focus:border-[#008001] text-base" id="industry" onchange="validateField(this)">
<option disabled="" selected="" value="">Select Industry...</option>
<option value="Construction">Construction &amp; Contractors</option>
<option value="Restaurant">Restaurant / Food Service</option>
<option value="Retail">Retail &amp; In-Store</option>
<option value="Ecommerce">E-commerce &amp; Online Sales</option>
<option value="Healthcare">Healthcare &amp; Medical</option>
<option value="Professional">Professional Services</option>
<option value="Transportation">Transportation &amp; Logistics</option>
<option value="Manufacturing">Manufacturing</option>
<option value="Hospitality">Hospitality &amp; Hotels</option>
<option value="RealEstate">Real Estate Services</option>
<option value="Other">Other</option>
</select>
<p className="hidden text-red-600 text-xs mt-1 error-msg">Please select an industry.</p>
</div>

<div className="">
<label className="block text-sm font-medium text-gray-700 mb-1">Average Monthly Revenue <span className="text-red-500">*</span></label>
<select className="w-full px-4 py-3 rounded border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#008001] focus:border-[#008001] text-base" id="revenue" onchange="validateField(this)">
<option disabled="" selected="" value="">Select Revenue...</option>
<option value="17k-50k">$17,000 – $50,000</option>
<option value="50k-100k">$50,001 – $100,000</option>
<option value="100k-250k">$100,001 – $250,000</option>
<option value="250k-500k">$250,001 – $500,000</option>
<option value="500k+">$500,001+</option>
</select>
<p className="hidden text-red-600 text-xs mt-1 error-msg">Please select monthly revenue.</p>
</div>

<div className="">
<label className="block text-sm font-medium text-gray-700 mb-1">Time In Business <span className="text-red-500">*</span></label>
<select className="w-full px-4 py-3 rounded border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#008001] focus:border-[#008001] text-base" id="timeInBusiness" onchange="checkTimeInBusiness(this)">
<option disabled="" selected="" value="">Select Time...</option>
<option value="&lt;3m">Less than 3 months</option>
<option value="3-6m">3 – 6 months</option>
<option value="6-12m">6 – 12 months</option>
<option value="1-2y">1 – 2 years</option>
<option value="2y+">2+ years</option>
</select>
<div className="hidden mt-2 p-2 bg-amber-50 border border-amber-200 rounded text-xs text-amber-800 flex items-start gap-2" id="time-warning">
<svg aria-hidden="true" className="iconify mt-0.5 flex-shrink-0 iconify--lucide" data-icon="lucide:alert-triangle" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                        Most programs require 3+ months in business. Exceptions may apply.
                                    </div>
<p className="hidden text-red-600 text-xs mt-1 error-msg">Please select time in business.</p>
</div>

<div className="">
<label className="block text-sm font-medium text-gray-700 mb-1">Desired Funding Amount <span className="text-red-500">*</span></label>
<select className="w-full px-4 py-3 rounded border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#008001] focus:border-[#008001] text-base" id="amount" onchange="validateField(this)">
<option disabled="" selected="" value="">Select Amount...</option>
<option value="5k-25k">$5,000 – $25,000</option>
<option value="25k-100k">$25,001 – $100,000</option>
<option value="100k-250k">$100,001 – $250,000</option>
<option value="250k-500k">$250,001 – $500,000</option>
<option value="500k-1.5m">$500,001 – $1,500,000</option>
</select>
<p className="hidden text-red-600 text-xs mt-1 error-msg">Please select desired amount.</p>
</div>
<button className="hover:bg-[#006001] transition-colors flex gap-2 font-semibold text-white bg-[#008001] w-full rounded mt-4 pt-3 pr-4 pb-3 pl-4 shadow-md gap-x-2 gap-y-2 items-center justify-center" onclick="nextStep(1)">
                                    Continue to Step 2
                                </button>
</div>
</div>

<div className="form-step hidden opacity-0 transition-opacity duration-300" id="step-2">
<h3 className="text-xl font-semibold text-gray-900 mb-6">Where Should We Send Your Options?</h3>
<div className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">First Name <span className="text-red-500">*</span></label>
<input className="w-full px-4 py-3 rounded border border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#008001] focus:border-[#008001]" id="firstName" onblur="validateField(this)" placeholder="John" type="text"/>
<p className="hidden text-red-600 text-xs mt-1 error-msg">Required.</p>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Last Name <span className="text-red-500">*</span></label>
<input className="w-full px-4 py-3 rounded border border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#008001] focus:border-[#008001]" id="lastName" onblur="validateField(this)" placeholder="Smith" type="text"/>
<p className="hidden text-red-600 text-xs mt-1 error-msg">Required.</p>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Business Name <span className="text-red-500">*</span></label>
<input className="w-full px-4 py-3 rounded border border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#008001] focus:border-[#008001]" id="businessName" onblur="validateField(this)" placeholder="Smith &amp; Sons Construction" type="text"/>
<p className="hidden text-red-600 text-xs mt-1 error-msg">Business name is required.</p>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Business Website <span className="text-gray-400 font-normal">(Optional)</span></label>
<input className="w-full px-4 py-3 rounded border border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#008001] focus:border-[#008001]" id="website" placeholder="https://yourwebsite.com" type="url"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
<input className="w-full px-4 py-3 rounded border border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#008001] focus:border-[#008001]" id="email" onblur="validateEmail(this)" placeholder="john@company.com" type="email"/>
<div className="hidden mt-1 text-xs text-[#008001] font-medium cursor-pointer hover:underline" id="email-suggestion">Did you mean <span id="suggested-email"></span>?</div>
<p className="hidden text-red-600 text-xs mt-1 error-msg">Valid email required.</p>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Mobile Phone <span className="text-red-500">*</span></label>
<input className="w-full px-4 py-3 rounded border border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#008001] focus:border-[#008001]" id="phone" inputmode="numeric" onblur="validatePhone(this)" oninput="formatPhone(this)" placeholder="(555) 555-5555" type="tel"/>
<p className="hidden text-red-600 text-xs mt-1 error-msg">Valid 10-digit phone number required.</p>
</div>
<div className="pt-2">
<label className="flex items-start gap-3 cursor-pointer">
<input className="mt-1 w-5 h-5 text-[#008001] rounded border-gray-300 focus:ring-[#008001]" id="consent" onchange="validateField(this)" type="checkbox"/>
<span className="text-xs text-gray-500">
                                            I agree to receive calls, emails, or text messages from Platinum Funding Services about my funding options. Standard message/data rates may apply. Opt out anytime. <br/>
<span className="text-gray-400">By submitting, you consent to our Terms and Privacy Policy.</span>
</span>
</label>
<p className="hidden text-red-600 text-xs mt-1 pl-8 error-msg">Consent is required to proceed.</p>
</div>
<div className="flex gap-3 pt-2">
<button className="w-1/3 border-2 border-[#008001] text-[#008001] font-semibold py-3 rounded hover:bg-[#008001]/10 transition-colors" onclick="prevStep(2)">
                                        ← Back
                                    </button>
<button className="w-2/3 bg-[#008001] hover:bg-[#006001] text-white font-semibold py-3 rounded shadow-md transition-colors" onclick="nextStep(2)">
                                        Continue to Step 3
                                    </button>
</div>
</div>
</div>

<div className="form-step hidden opacity-0 transition-opacity duration-300" id="step-3">
<h3 className="text-xl font-semibold text-gray-900 mb-6">A Few Final Questions</h3>
<div className="space-y-5">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Estimated Personal Credit Score <span className="text-red-500">*</span></label>
<select className="w-full px-4 py-3 rounded border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#008001] focus:border-[#008001] text-base" id="creditScore" onchange="checkCredit(this)">
<option disabled="" selected="" value="">Select Score...</option>
<option value="&lt;575">Under 575</option>
<option value="575-649">575 – 649</option>
<option value="650-699">650 – 699</option>
<option value="700+">700+</option>
</select>
<div className="hidden mt-2 p-2 bg-amber-50 border border-amber-200 rounded text-xs text-amber-800 flex items-start gap-2" id="credit-warning">
<svg aria-hidden="true" className="iconify mt-0.5 flex-shrink-0 iconify--lucide" data-icon="lucide:alert-triangle" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                        A 575+ credit score is typically needed. We can email you details on how to qualify.
                                    </div>
<p className="hidden text-red-600 text-xs mt-1 error-msg">Please select credit score.</p>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Primary Use of Funds <span className="text-red-500">*</span></label>
<select className="w-full px-4 py-3 rounded border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#008001] focus:border-[#008001] text-base" id="useOfFunds" onchange="validateField(this)">
<option disabled="" selected="" value="">Select Use...</option>
<option value="Working Capital">Working capital and cash flow</option>
<option value="Expansion">Expansion or new location</option>
<option value="Equipment">Equipment or inventory purchase</option>
<option value="Marketing">Marketing and business growth</option>
<option value="Consolidate">Consolidate or pay off other loans/MCAs</option>
<option value="Hiring">Hiring and payroll</option>
<option value="Renovations">Renovations or improvements</option>
<option value="Other">Other</option>
</select>
<p className="hidden text-red-600 text-xs mt-1 error-msg">Please select use of funds.</p>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Additional Comments <span className="text-gray-400 font-normal">(Optional)</span></label>
<textarea className="w-full px-4 py-3 rounded border border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#008001] focus:border-[#008001]" id="comments" maxlength="500" oninput="updateCharCount(this)" placeholder="Anything else we should know?" rows="3"></textarea>
<div className="text-right text-xs text-gray-400 mt-1"><span id="char-count">0</span> / 500</div>
</div>
<div className="flex gap-3 pt-2">
<button className="w-1/3 border-2 border-[#008001] text-[#008001] font-semibold py-3 rounded hover:bg-[#008001]/10 transition-colors" onclick="prevStep(3)">
                                        ← Back
                                    </button>
<button className="w-2/3 bg-[#008001] hover:bg-[#006001] text-white font-semibold py-3 rounded shadow-md transition-colors flex justify-center items-center gap-2" id="submit-btn" onclick="submitForm()">
<span>Submit &amp; View Next Steps</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>

<div className="hidden text-center py-4" id="success-state">
<div className="w-20 h-20 bg-[#008001]/20 rounded-full flex items-center justify-center mx-auto mb-6">
<svg aria-hidden="true" className="iconify text-[#008001] iconify--lucide" data-icon="lucide:check" data-width="48" height="48" role="img" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
<p className="text-gray-600 mb-8">Your application has been received. Here's what happens next:</p>
<div className="space-y-6 text-left max-w-sm mx-auto mb-8">
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#008001]/20 flex items-center justify-center text-[#008001] font-bold text-sm">1</div>
<div>
<h4 className="font-semibold text-gray-900">Review in Progress</h4>
<p className="text-sm text-gray-500">We're reviewing your info (usually takes &lt; 2 hours).</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#008001]/20 flex items-center justify-center text-[#008001] font-bold text-sm">2</div>
<div>
<h4 className="font-semibold text-gray-900">Offer Selection</h4>
<p className="text-sm text-gray-500">We will email <span className="font-medium text-gray-900" id="success-email"></span> with your best funding options.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#008001]/20 flex items-center justify-center text-[#008001] font-bold text-sm">3</div>
<div>
<h4 className="font-semibold text-gray-900">Fast Funding</h4>
<p className="text-sm text-gray-500">Approved funds deposited in 3-5 business days.</p>
</div>
</div>
</div>
</div>
</div>

<div className="mt-4 flex justify-center items-center gap-4 opacity-70 grayscale">
<div className="flex items-center gap-1 text-xs text-gray-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:lock" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg> SSL Secure
                        </div>
<div className="flex items-center gap-1 text-xs text-gray-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg> Data Encrypted
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-b border-gray-100 py-12 relative z-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">

<div className="flex flex-col items-center justify-center p-4">
<span className="text-3xl sm:text-4xl font-semibold text-[#008001] tracking-tight mb-2">2,800+ Businesses</span>
<span className="text-gray-500 font-medium text-sm">Funded Since 2023</span>
</div>

<div className="flex flex-col items-center justify-center p-4">
<span className="text-3xl sm:text-4xl font-semibold text-[#008001] tracking-tight mb-2">$160 Million +</span>
<span className="text-gray-500 font-medium text-sm">Across The U.S.</span>
</div>

<div className="flex flex-col items-center justify-center p-4">
<span className="text-3xl sm:text-4xl font-semibold text-[#008001] tracking-tight mb-2">Tailored Funding</span>
<span className="text-gray-500 font-medium text-sm">From Startups to Empires</span>
</div>
</div>
</div>
</section>

<section className="py-16 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-12">
<h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">How Platinum Funding Works</h2>
<p className="text-lg text-gray-600">We keep it simple so you can focus on running your business, not chasing paperwork.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative group hover:shadow-md transition-shadow">
<div className="absolute -top-4 left-8 bg-[#008001] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md">1</div>
<div className="text-4xl mb-4">📝</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Apply In Minutes</h3>
<p className="text-gray-600 leading-relaxed">Complete a short online application that gives us a clear picture of your business. No long bank forms.</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative group hover:shadow-md transition-shadow">
<div className="absolute -top-4 left-8 bg-[#008001] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md">2</div>
<div className="text-4xl mb-4">🤝</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Get Matched</h3>
<p className="text-gray-600 leading-relaxed">A specialist reviews your info and matches you with the best program. Clear terms, no surprises.</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative group hover:shadow-md transition-shadow">
<div className="absolute -top-4 left-8 bg-[#008001] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md">3</div>
<div className="text-4xl mb-4">⚡</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Receive Funds</h3>
<p className="text-gray-600 leading-relaxed">Funds hit your account in under a week. Most clients get same-day approval decisions.</p>
</div>
</div>
<div className="text-center mt-12">
<button className="inline-flex items-center text-[#008001] font-semibold hover:text-[#006001] transition-colors" onclick="scrollToForm()">
                    Start My Application <svg aria-hidden="true" className="iconify ml-1 iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-white border-t border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-bold text-gray-900 text-center mb-6 tracking-tight">Why Choose Platinum Over Banks &amp; MCAs</h2>
<p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                Platinum Funding Services gives you the speed you want with a smarter structure that supports your cash flow.
            </p>
<div className="overflow-x-auto">
<div className="inline-block min-w-full align-middle">
<table className="min-w-full border-separate" style={{borderSpacing: '0'}}>
<thead className="">
<tr className="">
<th className="p-4 text-left text-sm font-semibold text-gray-500 bg-gray-50 rounded-tl-lg border-b border-gray-200">Feature</th>
<th className="p-4 text-left text-lg font-bold text-[#008001] bg-[#008001]/10 border-t border-l border-r border-[#008001]/20 rounded-t-lg w-1/3">🏆 Platinum Funding</th>
<th className="p-4 text-left text-base font-semibold text-gray-700 border-b border-gray-200 w-1/4">🏦 Big Banks</th>
<th className="p-4 text-left text-base font-semibold text-gray-700 border-b border-gray-200 w-1/4">⚠️ Merchant Cash Advance</th>
</tr>
</thead>
<tbody className="text-sm sm:text-base">

<tr className="">
<td className="p-4 border-b border-gray-200 text-gray-700 font-medium">Time to decision</td>
<td className="p-4 border-l border-r border-b border-[#008001]/20 bg-[#008001]/5 text-gray-900 font-semibold">Same day</td>
<td className="p-4 border-b border-gray-200 text-gray-500">Weeks or longer</td>
<td className="p-4 border-b border-gray-200 text-gray-500">1–3 days</td>
</tr>

<tr className="">
<td className="p-4 border-b border-gray-200 text-gray-700 font-medium">Time to funding</td>
<td className="p-4 border-l border-r border-b border-[#008001]/20 bg-[#008001]/5 text-gray-900 font-semibold">Under 7 days</td>
<td className="p-4 border-b border-gray-200 text-gray-500">30–90 days</td>
<td className="p-4 border-b border-gray-200 text-gray-500">1–3 days</td>
</tr>

<tr className="">
<td className="p-4 border-b border-gray-200 text-gray-700 font-medium">Min. credit score</td>
<td className="p-4 border-l border-r border-b border-[#008001]/20 bg-[#008001]/5 text-gray-900 font-semibold">575+ considered</td>
<td className="p-4 border-b border-gray-200 text-gray-500">680+</td>
<td className="p-4 border-b border-gray-200 text-gray-500">Varies widely</td>
</tr>

<tr className="">
<td className="p-4 border-b border-gray-200 text-gray-700 font-medium">Early payoff penalty</td>
<td className="p-4 border-l border-r border-b border-[#008001]/20 bg-[#008001]/5 text-gray-900 font-semibold">
<span className="text-[#008001]">None</span> on many offers
                                </td>
<td className="p-4 border-b border-gray-200 text-gray-500">Often</td>
<td className="p-4 border-b border-gray-200 text-gray-500">Often</td>
</tr>

<tr className="">
<td className="p-4 border-b border-gray-200 text-gray-700 font-medium rounded-bl-lg">Dedicated Support Team</td>
<td className="p-4 border-l border-r border-b border-[#008001]/20 bg-[#008001]/10 rounded-b-lg text-gray-900 font-semibold">
<svg aria-hidden="true" className="iconify inline text-[#008001] iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Always
                                </td>
<td className="p-4 border-b border-gray-200 text-gray-500">Rarely</td>
<td className="p-4 border-b border-gray-200 text-gray-500">Sometimes</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<section className="py-16 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-bold text-gray-900 text-center mb-12 tracking-tight">Minimum Criteria And Benefits</h2>
<div className="grid md:grid-cols-2 gap-8 lg:gap-16">

<div className="">
<h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">To qualify, you usually need:</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify mt-1 text-[#008001] flex-shrink-0 iconify--lucide" data-icon="lucide:check-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span className="text-gray-700"> Equifax credit score (some exceptions)</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify mt-1 text-[#008001] flex-shrink-0 iconify--lucide" data-icon="lucide:check-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span className="text-gray-700">At least  in business</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify mt-1 text-[#008001] flex-shrink-0 iconify--lucide" data-icon="lucide:check-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span className="text-gray-700">Min.  in sales ($200K/yr)</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify mt-1 text-[#008001] flex-shrink-0 iconify--lucide" data-icon="lucide:check-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span className="text-gray-700">Valid business checking account</span>
</li>
</ul>
<p className="mt-6 text-sm text-gray-500 italic">Don't meet every requirement? Contact our support team—we may still be able to help.</p>
</div>

<div>
<h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">What you can access:</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify mt-1 text-[#008001] flex-shrink-0 iconify--lucide" data-icon="lucide:plus-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8m-4-4v8"></path></g></svg>
<span className="text-gray-700">Funding up to </span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify mt-1 text-[#008001] flex-shrink-0 iconify--lucide" data-icon="lucide:plus-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8m-4-4v8"></path></g></svg>
<span className="text-gray-700">Terms up to 36 months</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify mt-1 text-[#008001] flex-shrink-0 iconify--lucide" data-icon="lucide:plus-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8m-4-4v8"></path></g></svg>
<span className="text-gray-700">Consolidate high-cost MCAs</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify mt-1 text-[#008001] flex-shrink-0 iconify--lucide" data-icon="lucide:plus-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8m-4-4v8"></path></g></svg>
<span className="text-gray-700">Early payoff options (no penalty often)</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-bold text-gray-900 text-center mb-2 tracking-tight">Real Businesses. Real Results.</h2>
<p className="text-center text-gray-600 mb-12">See how we've helped businesses like yours.</p>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-6 rounded-lg shadow border border-gray-100 flex flex-col h-full">
<div className="mb-4">
<span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">Restaurant</span>
</div>
<h3 className="text-lg font-bold text-gray-900 mb-3">From One Location to Two</h3>
<p className="text-gray-600 text-sm mb-4 flex-grow">"With $120k in sales and fair credit, they secured funding to open their new location in weeks, not months."</p>
<div className="pt-4 border-t border-gray-100 font-bold text-[#008001] flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:banknote" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></g></svg> $250,000 funded
                    </div>
</div>

<div className="bg-white p-6 rounded-lg shadow border border-gray-100 flex flex-col h-full">
<div className="mb-4">
<span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Construction</span>
</div>
<h3 className="text-lg font-bold text-gray-900 mb-3">Escaped the MCA Trap</h3>
<p className="text-gray-600 text-sm mb-4 flex-grow">"We helped refinance expensive daily-debit advances into a manageable term loan, saving their cash flow."</p>
<div className="pt-4 border-t border-gray-100 font-bold text-[#008001] flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trending-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 17h6v-6"></path><path d="m22 17l-8.5-8.5l-5 5L2 7"></path></g></svg> Payments cut by 60%
                    </div>
</div>

<div className="bg-white p-6 rounded-lg shadow border border-gray-100 flex flex-col h-full">
<div className="mb-4">
<span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">E-commerce</span>
</div>
<h3 className="text-lg font-bold text-gray-900 mb-3">Scaled Inventory Fast</h3>
<p className="text-gray-600 text-sm mb-4 flex-grow">"Secured a line to buy inventory in bulk, negotiating better pricing and increasing profit margins."</p>
<div className="pt-4 border-t border-gray-100 font-bold text-[#008001] flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:package" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12"></path><path d="M3.29 7L12 12l8.71-5M7.5 4.27l9 5.15"></path></g></svg> $150,000 inventory line
                    </div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-gray-50 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">What Our Clients Say</h2>
<div className="flex items-center justify-center gap-2 mb-2">
<div className="flex text-yellow-400">
<svg aria-hidden="true" className="fill-current" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg aria-hidden="true" className="fill-current" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg aria-hidden="true" className="fill-current" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg aria-hidden="true" className="fill-current" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg aria-hidden="true" className="fill-current" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
</div>
<p className="text-gray-600">Trusted by business owners across the country.</p>
</div>
<div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">

<div className="break-inside-avoid bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="flex text-yellow-400 mb-3 gap-0.5">
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-gray-600 text-sm leading-relaxed mb-4">"Outstanding experience! Needed a lump sum of $ for a business loan for expansion—approved in 48 hours with a competitive APR. Luke was a pro, explained everything clearly, no hidden fees. Funds hit my account same day. Highly recommend for fast capital lending!"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#008001]/10 flex items-center justify-center text-[#008001] font-bold text-xs">AS</div>
<div className="font-semibold text-gray-900 text-sm">Alfredo Sanchez</div>
</div>
</div>

<div className="break-inside-avoid bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="flex text-yellow-400 mb-3 gap-0.5">
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-gray-600 text-sm leading-relaxed mb-4">"I worked with Luke and had a tremendous experience! He helped me through every step of the process. We ran into multiple road blocks along the way, but each time Luke was able to come up with a solution. I couldn’t recommend working with them any higher!"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#008001]/10 flex items-center justify-center text-[#008001] font-bold text-xs">CP</div>
<div className="font-semibold text-gray-900 text-sm">Cody Peterson</div>
</div>
</div>

<div className="break-inside-avoid bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="flex text-yellow-400 mb-3 gap-0.5">
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-gray-600 text-sm leading-relaxed mb-4">"Working with them has been an amazing experience. Luke took the time to really understand my business and the challenges I was facing. He worked through every kink with patience and persistence, making the entire process clear and stress-free. This wasn’t just about securing funding — Luke helped strengthen my business."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#008001]/10 flex items-center justify-center text-[#008001] font-bold text-xs">VF</div>
<div className="font-semibold text-gray-900 text-sm">Veronica Foster</div>
</div>
</div>

<div className="break-inside-avoid bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="flex text-yellow-400 mb-3 gap-0.5">
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-gray-600 text-sm leading-relaxed mb-4">"They were able to help one of my clients who was a business owner of a local pool cleaning company. His personal credit and bank did not provide good options. Because of Luke’s help he was able to get approved for business credit card stacking which he was able to use to invest in his business."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#008001]/10 flex items-center justify-center text-[#008001] font-bold text-xs">MS</div>
<div className="font-semibold text-gray-900 text-sm">Maksim Shapovalov</div>
</div>
</div>

<div className="break-inside-avoid bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="flex text-yellow-400 mb-3 gap-0.5">
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-gray-600 text-sm leading-relaxed mb-4">"They provide the absolute highest quality of support and the owner Luke is professional, patient, and kind hearted individual as I genuinely feel he is on the lookout to truly support my financial needs. It has been a tremendous pleasure working with them and I look forward to a long partnership."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#008001]/10 flex items-center justify-center text-[#008001] font-bold text-xs">RH</div>
<div className="font-semibold text-gray-900 text-sm">Rodrigo A Henriquez</div>
</div>
</div>

<div className="break-inside-avoid bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="flex text-yellow-400 mb-3 gap-0.5">
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-gray-600 text-sm leading-relaxed mb-4">"Luke is a rock star. He helped save my business from closing down. Looking forward to doing more business with them as we grow our band nationwide. I would give 10 stars not 5. Thanks!!!!"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#008001]/10 flex items-center justify-center text-[#008001] font-bold text-xs">TS</div>
<div className="font-semibold text-gray-900 text-sm">Tony Sharpe</div>
</div>
</div>

<div className="break-inside-avoid bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="flex text-yellow-400 mb-3 gap-0.5">
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-gray-600 text-sm leading-relaxed mb-4">"I've worked with Zach for a while now; he has been awesome to work with, always goes above and beyond the call, and works within the parameters I set to come up with the best solution. He is with his clients from the beginning to the end of the process, and is always there."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#008001]/10 flex items-center justify-center text-[#008001] font-bold text-xs">MS</div>
<div className="font-semibold text-gray-900 text-sm">Marc Schnoll</div>
</div>
</div>

<div className="break-inside-avoid bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="flex text-yellow-400 mb-3 gap-0.5">
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="fill-current" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-gray-600 text-sm leading-relaxed mb-4">"Zach was very helpful. I had multiple MCAs, and he was a great help in getting me financing that would help me to get out of that situation. I honestly may not be in business without his help. Honest and very helpful, great guy to work with. Thanks Zach."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#008001]/10 flex items-center justify-center text-[#008001] font-bold text-xs">LG</div>
<div className="font-semibold text-gray-900 text-sm">Larry Green</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-16 pb-16 border-t border-gray-100">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-bold text-gray-900 text-center mb-8 tracking-tight">Frequently Asked Questions</h2>
<div className="space-y-4" id="faq-container">

<div className="bg-white rounded-lg shadow-sm border border-gray-200">
<button className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none" onclick="toggleFaq(this)">
<span className="font-semibold text-gray-900">Will checking my options hurt my credit?</span>
<svg aria-hidden="true" className="iconify text-gray-400 transform transition-transform duration-200 iconify--lucide" data-icon="lucide:plus" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<div className="accordion-content px-6 bg-gray-50">
<div className="py-4 text-gray-600 text-sm leading-relaxed">
                            We start with a soft review of your information to pre-qualify you. A hard pull may only be needed if you decide to accept a specific offer.
                        </div>
</div>
</div>

<div className="bg-white rounded-lg shadow-sm border border-gray-200">
<button className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none" onclick="toggleFaq(this)">
<span className="font-semibold text-gray-900">How fast can I get funds?</span>
<svg aria-hidden="true" className="iconify text-gray-400 transform transition-transform duration-200 iconify--lucide" data-icon="lucide:plus" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<div className="accordion-content px-6 bg-gray-50">
<div className="py-4 text-gray-600 text-sm leading-relaxed">
                            Many clients receive approval the same day and funds in under a week. Some programs fund in as little as 3-5 business days.
                        </div>
</div>
</div>

<div className="bg-white rounded-lg shadow-sm border border-gray-200">
<button className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none" onclick="toggleFaq(this)">
<span className="font-semibold text-gray-900">What if my credit score is under 575?</span>
<svg aria-hidden="true" className="iconify text-gray-400 transform transition-transform duration-200 iconify--lucide" data-icon="lucide:plus" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<div className="accordion-content px-6 bg-gray-50">
<div className="py-4 text-gray-600 text-sm leading-relaxed">
                            Our core programs start at 575. If you're close, we can guide you on what to improve. We recommend applying so we can assess your specific situation.
                        </div>
</div>
</div>

<div className="bg-white rounded-lg shadow-sm border border-gray-200">
<button className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none" onclick="toggleFaq(this)">
<span className="font-semibold text-gray-900">How is this different from an MCA?</span>
<svg aria-hidden="true" className="iconify text-gray-400 transform transition-transform duration-200 iconify--lucide" data-icon="lucide:plus" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<div className="accordion-content px-6 bg-gray-50">
<div className="py-4 text-gray-600 text-sm leading-relaxed">
                            MCAs take a percentage of daily sales, hurting cash flow. We focus on structured term loans with fixed payments and typically lower costs.
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="text-white text-center bg-[#008001] pt-20 pb-20">
<div className="max-w-4xl mx-auto px-4">
<h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Get The Funding Your Business Needs</h2>
<p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Stop waiting on banks. Get a simple process, dedicated support, and funding options that respect your cash flow.
            </p>
<div className="flex flex-col sm:flex-row gap-x-4 gap-y-4 justify-center">
<button className="px-8 py-4 bg-white text-[#008001] font-bold rounded shadow-lg hover:bg-gray-100 transition-colors transform hover:scale-105" onclick="scrollToForm()">
                    Start My Application →
                </button>
</div>
</div>
</section>

<footer className="text-sm text-gray-400 bg-gray-900 pt-12 pb-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 mb-8">
<div className="">
<h4 className="text-white font-bold text-lg mb-4">Platinum Funding Services</h4>
<p className="mb-4">Fast, flexible business funding for real-world companies.</p>
<p className="">📧 support@platinumfundingservices.com</p>
</div>
<div className="">
<h4 className="text-white font-bold mb-4">Quick Links</h4>
<ul className="space-y-2">
<li className=""><a className="hover:text-white" href="#" onclick="scrollToForm()">Apply Now</a></li>
<li className=""><a className="hover:text-white" href="#">How It Works</a></li>
<li className=""><a className="hover:text-white" href="/privacy">Privacy Policy</a></li>
<li className=""><a className="hover:text-white" href="#">Terms of Service</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-bold mb-4">Legal</h4>
<p className="leading-relaxed text-xs">
                    All funding subject to credit approval and program eligibility. Funding amounts, terms, and rates vary by program. Platinum Funding Services works with multiple lending partners.
                </p>
<div className="mt-4 flex items-center gap-2 text-xs">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:lock" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
                    Your information is secure.
                </div>
</div>
</div>
<div className="sm:px-6 lg:px-8 text-xs text-center max-w-7xl border-gray-800 border-t mr-auto ml-auto pt-8 pr-4 pl-4">© 2026 Platinum Funding Services. All rights reserved.</div>
</footer>

<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 shadow-lg z-40 transform transition-transform duration-300 md:hidden" id="mobile-sticky-cta" style={{transform: 'translateY(0px)'}}>
<button className="w-full bg-[#008001] text-white font-bold py-3 rounded shadow-sm" onclick="scrollToForm()">
            Check Funding Options
        </button>
</div>



    </>
  );
}
