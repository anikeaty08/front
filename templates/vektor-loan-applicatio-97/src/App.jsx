import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- CONFIGURATION & STATE ---
        const INTEREST_RATE = 0.25; // Fixed 25%
        const PLANS = {
            TIER_1: { max: 19999, label: '1 Week', days: 7 },
            TIER_2: { max: 49999, label: '2 Weeks', days: 14 },
            TIER_3: { max: Infinity, label: '1 Month', days: 30 }
        };

        const state = {
            step: 1,
            amount: 20000,
            durationLabel: '2 Weeks',
            durationDays: 14,
            formData: {
                fullName: '',
                govtId: '',
                phone: '',
                payout: 'Wave'
            },
            contractDetails: {},
            photos: { selfie: null },
            signature: null
        };

        // --- DOM ELEMENTS ---
        const els = {
            slider: document.getElementById('amount-slider'),
            dispAmount: document.getElementById('display-amount'),
            dispInterest: document.getElementById('display-interest'),
            dispDuration: document.getElementById('display-duration'),
            dispTotal: document.getElementById('display-total'),
            dispDate: document.getElementById('display-date'),
            nextBtn: document.getElementById('next-btn'),
            progressBar: document.getElementById('progress-bar'),
            stepIndicator: document.getElementById('step-indicator'),
            sections: [
                document.getElementById('step-1'),
                document.getElementById('step-2'),
                document.getElementById('step-3'),
                document.getElementById('step-4'),
                document.getElementById('step-success')
            ],
            // Contract
            contractName: document.getElementById('contract-name'),
            contractId: document.getElementById('contract-id'),
            contractPrincipal: document.getElementById('contract-principal'),
            contractInterest: document.getElementById('contract-interest'),
            contractTotal: document.getElementById('contract-total'),
            contractDate: document.getElementById('contract-date'),
            // Signature
            canvas: document.getElementById('signature-pad'),
            clearSig: document.getElementById('clear-sig'),
            consent: document.getElementById('consent-check'),
            // Camera
            video: document.getElementById('camera-feed'),
            captureBtn: document.getElementById('capture-btn'),
            // WhatsApp Link
            whatsappLink: document.getElementById('whatsapp-link')
        };

        // --- UTILS ---
        const formatMoney = (num) => new Intl.NumberFormat('fr-FR').format(num) + ' XAF';
        
        const updateCalculation = () => {
            const val = parseInt(els.slider.value);
            state.amount = val;
            
            // Determine Plan
            if(val < 20000) {
                state.durationLabel = PLANS.TIER_1.label;
                state.durationDays = PLANS.TIER_1.days;
            } else if (val < 50000) {
                state.durationLabel = PLANS.TIER_2.label;
                state.durationDays = PLANS.TIER_2.days;
            } else {
                state.durationLabel = PLANS.TIER_3.label;
                state.durationDays = PLANS.TIER_3.days;
            }

            const interest = val * INTEREST_RATE;
            const total = val + interest;
            const dueDate = new Date();
            dueDate.setDate(dueDate.getDate() + state.durationDays);

            // Update UI
            els.dispAmount.textContent = formatMoney(val);
            els.dispInterest.textContent = formatMoney(interest);
            els.dispDuration.textContent = state.durationLabel;
            els.dispTotal.textContent = formatMoney(total);
            els.dispDate.textContent = dueDate.toLocaleDateString('en-GB');

            // Save for contract
            state.contractDetails = {
                interest: formatMoney(interest),
                total: formatMoney(total),
                date: dueDate.toLocaleDateString('en-GB')
            };
        };

        // --- NAVIGATION ---
        const updateStep = (newStep) => {
            // Validate before moving
            if (newStep > state.step) {
                if (state.step === 2) {
                    const form = document.getElementById('personal-form');
                    if (!form.checkValidity()) {
                        form.reportValidity();
                        return;
                    }
                    // Save Form Data accurately
                    const formData = new FormData(form);
                    state.formData.fullName = formData.get('fullName');
                    state.formData.govtId = formData.get('govtId');
                    state.formData.phone = formData.get('phone');
                    state.formData.payout = formData.get('payout');
                }
                if (state.step === 3) {
                    if (!state.photos.selfie) {
                        alert("Selfie required for verification.");
                        return;
                    }
                }
                if (state.step === 4) {
                    if (!state.signature || !els.consent.checked) {
                        alert("Please sign and accept the terms.");
                        return;
                    }
                    submitLoan();
                    return;
                }
            }

            // Transition
            els.sections[state.step - 1].classList.add('hidden');
            els.sections[state.step - 1].classList.remove('fade-enter-active');
            
            state.step = newStep;
            
            els.sections[state.step - 1].classList.remove('hidden');
            setTimeout(() => els.sections[state.step - 1].classList.add('fade-enter-active'), 10);

            // Update Header
            const progress = Math.min((state.step / 4) * 100, 100);
            els.progressBar.style.width = `${progress}%`;
            els.stepIndicator.textContent = `Step ${state.step}/4`;

            // Step Specific Logic
            if (state.step === 3) initCamera();
            if (state.step === 4) populateContract();
            
            // Button Text
            const btnSpan = els.nextBtn.querySelector('span');
            if (state.step === 4) {
                btnSpan.textContent = "Sign & Submit";
            } else if (state.step === 5) {
                els.nextBtn.parentElement.classList.add('hidden'); // Hide footer on success
            } else {
                btnSpan.textContent = "Continue";
            }
        };

        // --- CAMERA LOGIC ---
        const initCamera = async () => {
            try {
                if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
                    els.video.srcObject = stream;
                } else {
                    console.log("Camera API unavailable.");
                }
            } catch (e) {
                console.error("Camera access denied", e);
            }
        };

        els.captureBtn.addEventListener('click', () => {
            const canvas = document.getElementById('photo-canvas');
            canvas.width = els.video.videoWidth;
            canvas.height = els.video.videoHeight;
            canvas.getContext('2d').drawImage(els.video, 0, 0);
            state.photos.selfie = canvas.toDataURL('image/jpeg');
            
            els.video.pause();
            els.captureBtn.innerHTML = `<iconify-icon icon="lucide:check" width="18"></iconify-icon> Photo Captured`;
            els.captureBtn.classList.replace('bg-zinc-900', 'bg-green-600');
        });

        // --- SIGNATURE PAD ---
        let isDrawing = false;
        const ctx = els.canvas.getContext('2d');
        
        function resizeCanvas() {
            const ratio = Math.max(window.devicePixelRatio || 1, 1);
            els.canvas.width = els.canvas.offsetWidth * ratio;
            els.canvas.height = els.canvas.offsetHeight * ratio;
            ctx.scale(ratio, ratio);
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';
            ctx.strokeStyle = '#000';
        }
        window.addEventListener('resize', resizeCanvas);
        setTimeout(resizeCanvas, 100);

        const getPos = (e) => {
            const rect = els.canvas.getBoundingClientRect();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            return { x: clientX - rect.left, y: clientY - rect.top };
        }

        const startDraw = (e) => {
            e.preventDefault();
            isDrawing = true;
            const pos = getPos(e);
            ctx.beginPath();
            ctx.moveTo(pos.x, pos.y);
            els.canvas.nextElementSibling.style.opacity = '0'; 
        };

        const draw = (e) => {
            if (!isDrawing) return;
            e.preventDefault();
            const pos = getPos(e);
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
        };

        const endDraw = () => {
            if(isDrawing) {
                isDrawing = false;
                state.signature = els.canvas.toDataURL();
            }
        };

        els.canvas.addEventListener('mousedown', startDraw);
        els.canvas.addEventListener('mousemove', draw);
        els.canvas.addEventListener('mouseup', endDraw);
        els.canvas.addEventListener('touchstart', startDraw);
        els.canvas.addEventListener('touchmove', draw);
        els.canvas.addEventListener('touchend', endDraw);

        els.clearSig.addEventListener('click', () => {
            ctx.clearRect(0, 0, els.canvas.width, els.canvas.height);
            state.signature = null;
            els.canvas.nextElementSibling.style.opacity = '0.1';
        });

        // --- CONTRACT GENERATION ---
        const populateContract = () => {
            els.contractName.textContent = state.formData.fullName || 'UNKNOWN';
            els.contractId.textContent = state.formData.govtId || 'UNKNOWN';
            els.contractPrincipal.textContent = formatMoney(state.amount);
            els.contractInterest.textContent = state.contractDetails.interest;
            els.contractTotal.textContent = state.contractDetails.total;
            els.contractDate.textContent = state.contractDetails.date;
        };

        // --- SUBMISSION & WHATSAPP ---
        const submitLoan = () => {
            els.nextBtn.disabled = true;
            els.nextBtn.innerHTML = `<iconify-icon icon="lucide:loader-2" width="18" class="animate-spin"></iconify-icon> Processing...`;
            
            setTimeout(() => {
                // 1. Prepare WhatsApp Message
                const targetNumber = "221769554829";
                const refCode = `VK-${Math.floor(1000 + Math.random() * 9000)}`;
                
                const message = `*NEW LOAN APPLICATION*\n` +
                                `------------------\n` +
                                `👤 *Name:* ${state.formData.fullName}\n` +
                                `🆔 *ID:* ${state.formData.govtId}\n` +
                                `📱 *Phone:* +221 ${state.formData.phone}\n` +
                                `💰 *Amount:* ${formatMoney(state.amount)}\n` +
                                `📅 *Duration:* ${state.durationLabel}\n` +
                                `💳 *Payout:* ${state.formData.payout}\n` +
                                `💵 *Repayment:* ${state.contractDetails.total}\n` +
                                `📝 *Ref:* ${refCode}\n` +
                                `------------------\n` +
                                `Status: Signed & Verified`;

                const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;
                
                // 2. Update Success Screen Link
                els.whatsappLink.href = whatsappUrl;

                // 3. Show Success Screen
                els.sections[3].classList.add('hidden'); // Hide step 4
                els.sections[4].classList.remove('hidden'); // Show Success
                els.nextBtn.parentElement.classList.add('hidden'); // Hide Footer
                
                // 4. Update Header
                els.stepIndicator.textContent = "Done";
                els.progressBar.style.width = "100%";
                els.progressBar.classList.replace('bg-zinc-900', 'bg-green-600');

            }, 1500);
        };

        // --- EVENTS ---
        els.slider.addEventListener('input', updateCalculation);
        els.nextBtn.addEventListener('click', () => updateStep(state.step + 1));
        
        // Init
        updateCalculation();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-md bg-white rounded-2xl shadow-[0_2px_12px_-4px_rgba(0,0,0,0.08)] border border-zinc-200 overflow-hidden relative min-h-[600px] flex flex-col" id="app-container">

<header className="px-6 py-5 border-b border-zinc-100 flex justify-between items-center bg-white z-10">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<h1 className="text-lg font-semibold tracking-tighter text-zinc-900">VEKTOR</h1>
</div>
<div className="text-xs font-medium text-zinc-500 tracking-tight" id="step-indicator">Step 1/4</div>
</header>

<div className="w-full h-1 bg-zinc-50">
<div className="h-full bg-zinc-900 transition-all duration-500 ease-out" id="progress-bar" style={{width: '25%'}}></div>
</div>

<main className="flex-1 overflow-y-auto scrollbar-hide relative">

<section className="p-6 fade-enter-active" id="step-1">
<div className="mb-8">
<h2 className="text-xl font-semibold text-zinc-900 tracking-tight mb-2">Loan Configuration</h2>
<p className="text-sm text-zinc-500">Select an amount. Rules are fixed.</p>
</div>

<div className="bg-zinc-50 rounded-xl p-6 border border-zinc-100 mb-8">
<div className="flex justify-between items-baseline mb-2">
<label className="text-xs font-medium uppercase tracking-wider text-zinc-500">Amount Required</label>
<span className="text-2xl font-semibold tracking-tight text-zinc-900" id="display-amount">20,000 XAF</span>
</div>
<input className="w-full mb-6" id="amount-slider" max="100000" min="10000" step="5000" type="range" value="20000"/>
<div className="grid grid-cols-2 gap-4 border-t border-zinc-200 pt-4 mt-4">
<div>
<p className="text-xs text-zinc-500 mb-1">Interest (Fixed 25%)</p>
<p className="text-sm font-medium text-zinc-900" id="display-interest">5,000 XAF</p>
</div>
<div className="text-right">
<p className="text-xs text-zinc-500 mb-1">Duration</p>
<span className="inline-flex items-center px-2 py-1 rounded-md bg-white border border-zinc-200 text-xs font-medium text-zinc-900 shadow-sm" id="display-duration">
                                2 Weeks
                            </span>
</div>
</div>
</div>
<div className="bg-zinc-900 text-white p-5 rounded-xl flex justify-between items-center shadow-lg shadow-zinc-200/50">
<div>
<p className="text-xs text-zinc-400 mb-0.5">Total Repayment</p>
<p className="text-xl font-semibold tracking-tight" id="display-total">25,000 XAF</p>
</div>
<div className="h-8 w-px bg-zinc-700 mx-2"></div>
<div className="text-right">
<p className="text-xs text-zinc-400 mb-0.5">Due Date</p>
<p className="text-sm font-medium" id="display-date">...</p>
</div>
</div>
<div className="mt-8 flex gap-3 text-xs text-zinc-500 bg-amber-50 border border-amber-100 p-3 rounded-lg items-start">
<iconify-icon className="text-amber-600 mt-0.5 shrink-0" icon="lucide:alert-triangle" width="16"></iconify-icon>
<p>By proceeding, you agree that the 25% interest rate is non-negotiable and the repayment deadline is strict.</p>
</div>
</section>

<section className="hidden p-6" id="step-2">
<div className="mb-6">
<h2 className="text-xl font-semibold text-zinc-900 tracking-tight mb-2">Personal Details</h2>
<p className="text-sm text-zinc-500">Legal verification required.</p>
</div>
<form className="space-y-4" id="personal-form">
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-700">Full Legal Name</label>
<input className="w-full px-3 py-2.5 rounded-lg border border-zinc-200 bg-white text-sm placeholder-zinc-400 focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-shadow" name="fullName" placeholder="e.g. Jean Dupont" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-700">Government ID Number</label>
<input className="w-full px-3 py-2.5 rounded-lg border border-zinc-200 bg-white text-sm placeholder-zinc-400 focus:ring-2 focus:ring-zinc-900 transition-shadow" name="govtId" pattern="[A-Z0-9]+" placeholder="ID-XXXXXXXX" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-700">Phone Number (WhatsApp)</label>
<div className="flex">
<span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-zinc-200 bg-zinc-50 text-zinc-500 text-sm border-r-zinc-200">+221</span>
<input className="w-full px-3 py-2.5 rounded-r-lg border border-zinc-200 bg-white text-sm placeholder-zinc-400 focus:ring-2 focus:ring-zinc-900 transition-shadow" name="phone" pattern="[0-9]{9}" placeholder="77 000 00 00" required="" type="tel"/>
</div>
</div>
<div className="pt-2">
<label className="text-xs font-medium text-zinc-700 block mb-2">Payout Method</label>
<div className="grid grid-cols-2 gap-3">
<label className="relative cursor-pointer">
<input checked="" className="peer sr-only" name="payout" type="radio" value="Wave"/>
<div className="p-3 rounded-lg border border-zinc-200 peer-checked:border-zinc-900 peer-checked:bg-zinc-50 peer-checked:ring-1 peer-checked:ring-zinc-900 transition-all flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-blue-400"></div>
<span className="text-sm font-medium">Wave</span>
</div>
</label>
<label className="relative cursor-pointer">
<input className="peer sr-only" name="payout" type="radio" value="Orange Money"/>
<div className="p-3 rounded-lg border border-zinc-200 peer-checked:border-orange-500 peer-checked:bg-orange-50 peer-checked:ring-1 peer-checked:ring-orange-500 transition-all flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-orange-500"></div>
<span className="text-sm font-medium">Orange</span>
</div>
</label>
</div>
</div>
</form>
</section>

<section className="hidden p-6 h-full flex flex-col" id="step-3">
<div className="mb-4">
<h2 className="text-xl font-semibold text-zinc-900 tracking-tight mb-1">Identity Verification</h2>
<p className="text-sm text-zinc-500">We need a live selfie for verification.</p>
</div>

<div className="flex-1 flex flex-col" id="kyc-step-selfie">
<div className="bg-zinc-100 rounded-xl overflow-hidden relative aspect-[3/4] mb-4 border border-zinc-200">

<video autoplay="" className="w-full h-full object-cover" id="camera-feed" muted="" playsinline=""></video>
<canvas className="hidden w-full h-full object-cover" id="photo-canvas"></canvas>

<div className="absolute inset-0 border-2 border-white/30 m-8 rounded-full pointer-events-none"></div>
<div className="absolute bottom-4 left-0 right-0 text-center">
<span className="bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-md">Position face in circle</span>
</div>
</div>
<button className="w-full py-3 bg-zinc-900 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors" id="capture-btn">
<iconify-icon icon="lucide:camera" width="18"></iconify-icon>
                        Take Selfie
                    </button>
</div>
</section>

<section className="hidden p-0 h-full flex flex-col" id="step-4">
<div className="p-6 pb-2">
<h2 className="text-xl font-semibold text-zinc-900 tracking-tight mb-2">Review &amp; Sign</h2>
<p className="text-sm text-zinc-500">Legally binding contract.</p>
</div>

<div className="flex-1 overflow-y-auto px-6 py-2">
<div className="bg-white border border-zinc-200 rounded-lg p-4 shadow-sm">
<div className="border-b border-zinc-100 pb-3 mb-3 flex justify-between items-center">
<span className="text-xs font-mono text-zinc-400">REF: PRE-VK-2023</span>
<span className="text-xs font-bold text-zinc-900">LOAN AGREEMENT</span>
</div>
<div className="space-y-3 text-xs text-zinc-600 font-mono leading-relaxed">
<p><strong>BORROWER:</strong> <span id="contract-name">...</span></p>
<p><strong>ID NUMBER:</strong> <span id="contract-id">...</span></p>
<div className="my-4 border-y border-dashed border-zinc-200 py-3">
<div className="flex justify-between mb-1">
<span>PRINCIPAL:</span>
<span id="contract-principal">...</span>
</div>
<div className="flex justify-between mb-1">
<span>INTEREST (25%):</span>
<span id="contract-interest">...</span>
</div>
<div className="flex justify-between font-bold text-zinc-900 mt-2">
<span>TOTAL REPAYMENT:</span>
<span id="contract-total">...</span>
</div>
</div>
<p className="text-[10px] text-zinc-400 text-justify">
                                By signing below, the Borrower acknowledges receipt of the Loan Amount and agrees to repay the Total Repayment amount by <span className="font-bold text-zinc-700" id="contract-date">...</span>. The Borrower consents to data processing and WhatsApp communication for identity verification.
                            </p>
</div>
</div>
</div>

<div className="p-6 pt-2 bg-white border-t border-zinc-100 z-20">
<label className="text-xs font-medium text-zinc-700 block mb-2">Sign Below (Finger or Mouse)</label>
<div className="border border-zinc-300 rounded-lg overflow-hidden bg-zinc-50 touch-none mb-3 relative group">
<canvas className="w-full h-32 block" id="signature-pad"></canvas>
<div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10 group-hover:opacity-0 transition-opacity">
<span className="text-3xl font-cursive text-zinc-400 font-mono">Sign Here</span>
</div>
<button className="absolute top-2 right-2 text-xs text-zinc-400 hover:text-red-500 bg-white/80 px-2 py-1 rounded" id="clear-sig" type="button">Clear</button>
</div>
<div className="flex items-start gap-2 mb-4">
<input className="custom-checkbox mt-0.5 w-4 h-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900 cursor-pointer" id="consent-check" type="checkbox"/>
<label className="text-xs text-zinc-500 leading-tight cursor-pointer" htmlFor="consent-check">
                            I certify the information is true and I accept the <span className="underline">Terms of Service</span>.
                        </label>
</div>
</div>
</section>

<section className="hidden p-6 h-full flex flex-col items-center justify-center text-center" id="step-success">
<div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
<iconify-icon icon="lucide:check" width="32"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold text-zinc-900 tracking-tight mb-2">Application Generated</h2>
<p className="text-sm text-zinc-500 max-w-[280px] mb-8">
                    Your application <span className="font-mono text-zinc-900">#VK-TEMP</span> is ready. <br/>
                    You must send the request via WhatsApp to finalize the process.
                </p>
<a className="w-full px-6 py-3.5 bg-[#25D366] text-white text-sm font-semibold rounded-xl hover:bg-[#1db954] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-200" href="#" id="whatsapp-link" target="_blank">
<iconify-icon icon="lucide:message-circle" width="20"></iconify-icon>
                    Finalize on WhatsApp
                </a>
<p className="text-[10px] text-zinc-400 mt-4">Opens in WhatsApp (+221 76 955 4829)</p>
</section>
</main>

<footer className="p-6 border-t border-zinc-100 bg-white z-10">
<button className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-3.5 px-4 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" id="next-btn">
<span>Continue</span>
<iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
</footer>
</div>



    </>
  );
}
