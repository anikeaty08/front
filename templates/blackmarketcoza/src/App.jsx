import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        /* --- 1. INTRO --- */
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('intro-screen').classList.add('intro-hidden');
            }, 2500);
        });

        /* --- 2. CUSTOM CURSOR & TRAIL --- */
        const cursorDot = document.getElementById('cursor-dot');
        const cursorRing = document.getElementById('cursor-ring');

        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            cursorRing.style.left = `${posX}px`;
            cursorRing.style.top = `${posY}px`;

            createTrail(posX, posY);
        });

        function createTrail(x, y) {
            if (Math.random() > 0.3) return;
            const trail = document.createElement('div');
            trail.classList.add('trail-dot');
            trail.style.left = `${x}px`;
            trail.style.top = `${y}px`;
            document.body.appendChild(trail);
            setTimeout(() => trail.remove(), 800);
        }

        /* --- 3. 3D TILT --- */
        const cards = document.querySelectorAll('.tilt-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -10;
                const rotateY = ((x - centerX) / centerX) * 10;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
            });
        });

        /* --- 4. MAGNETIC BUTTONS --- */
        const magnets = document.querySelectorAll('.magnetic-btn');
        magnets.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = `translate(0px, 0px)`;
            });
        });

        /* --- 5. ADMIN METRICS (unchanged) --- */
        let views = localStorage.getItem('aura_views') || 8492;
        views = parseInt(views) + 1;
        localStorage.setItem('aura_views', views);
        document.getElementById('admin-views').innerText = views.toLocaleString();

        const salesFeed = document.getElementById('sales-feed');
        const salesData = [
            { item: "Faceless Kit", time: "2m ago", price: "$14.50" },
            { item: "Prompt Vault", time: "14m ago", price: "$9.99" },
            { item: "Faceless Kit", time: "42m ago", price: "$14.50" }
        ];
        let feedHtml = '';
        salesData.forEach(sale => {
            feedHtml += `
            <div class="flex justify-between items-center py-3 border-b border-white/5 last:border-0">
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <iconify-icon icon="solar:bag-check-linear" style="--iconify-stroke-width: 1.5;"></iconify-icon>
                    </div>
                    <div>
                        <div class="text-white text-xs font-semibold">${sale.item}</div>
                        <div class="text-xs text-neutral-500">${sale.time}</div>
                    </div>
                </div>
                <span class="text-emerald-400 text-xs font-semibold">+${sale.price}</span>
            </div>`;
        });
        salesFeed.innerHTML = feedHtml;

        /* --- 6. PAYPAL (Buttons + CardFields submit button) --- */
        let currentProduct = null;
        let cardFieldsInstance = null;

        const products = {
            vault: {
                name: "Creator’s AI Vault",
                shortName: "Creator's AI Vault",
                price: 9.99,
                icon: "solar:magic-stick-3-linear",
                color: "indigo",
                downloadUrl: "https://example.com/files/creators-ai-vault.zip"
            },
            kit: {
                name: "Faceless Viral Kit",
                shortName: "Faceless Viral Kit",
                price: 14.50,
                icon: "solar:videocamera-record-linear",
                color: "cyan",
                downloadUrl: "https://example.com/files/faceless-viral-kit.zip"
            }
        };

        function resetCheckoutUI() {
            document.getElementById('payment-error').classList.add('hidden');

            document.getElementById('paypal-area').classList.remove('hidden');
            document.getElementById('download-area').classList.add('hidden');

            document.getElementById('card-fields-wrap').classList.add('hidden');

            const downloadBtn = document.getElementById('download-btn');
            downloadBtn.href = "#";

            document.getElementById('paypal-buttons').innerHTML = '';

            // clear any card field containers so re-opening modal doesn't double-render
            document.getElementById('card-number').innerHTML = '';
            document.getElementById('card-expiration').innerHTML = '';
            document.getElementById('card-cvv').innerHTML = '';
            document.getElementById('card-submit-container').innerHTML = '';

            cardFieldsInstance = null;
        }

        function showPaymentError(msg) {
            const box = document.getElementById('payment-error');
            document.getElementById('payment-error-msg').innerText = msg || "Please try again.";
            box.classList.remove('hidden');
        }

        function getBuyerDetails() {
            const email = (document.getElementById('buyer-email')?.value || '').trim();

            const address1 = (document.getElementById('billing-address1')?.value || '').trim();
            const city = (document.getElementById('billing-city')?.value || '').trim();
            const state = (document.getElementById('billing-state')?.value || '').trim();
            const postal_code = (document.getElementById('billing-zip')?.value || '').trim();
            const country_code_raw = (document.getElementById('billing-country')?.value || 'US').trim().toUpperCase();
            const country_code = country_code_raw.length === 2 ? country_code_raw : 'US';

            return {
                email,
                billingAddress: {
                    address_line_1: address1 || undefined,
                    admin_area_2: city || undefined,
                    admin_area_1: state || undefined,
                    postal_code: postal_code || undefined,
                    country_code: country_code || 'US'
                }
            };
        }

        function initiateCheckout(pid) {
            currentProduct = products[pid];

            const cartIcon = document.getElementById('cart-icon');
            cartIcon.classList.add('animate-bounce-cart');
            setTimeout(() => cartIcon.classList.remove('animate-bounce-cart'), 500);

            const btn = document.getElementById(`btn-buy-${pid}`);
            const text = btn.querySelector('.btn-text');
            const spinner = btn.querySelector('.spinner');

            btn.disabled = true;
            text.classList.add('opacity-0');
            spinner.classList.remove('hidden');

            setTimeout(() => {
                openModal();
                btn.disabled = false;
                text.classList.remove('opacity-0');
                spinner.classList.add('hidden');
            }, 650);
        }

        function openModal() {
            const modal = document.getElementById('checkout-modal');
            const container = document.getElementById('modal-container');

            resetCheckoutUI();

            document.getElementById('cart-item-display').innerHTML = `
                <div class="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                    <div class="w-12 h-12 rounded-xl bg-${currentProduct.color}-500/20 flex items-center justify-center text-${currentProduct.color}-400">
                        <iconify-icon icon="${currentProduct.icon}" class="text-2xl" style="--iconify-stroke-width: 1.5;"></iconify-icon>
                    </div>
                    <div>
                        <div class="text-white font-semibold">${currentProduct.name}</div>
                        <div class="text-xs text-neutral-500">Instant Digital Delivery</div>
                    </div>
                </div>
            `;
            document.getElementById('modal-total').innerText = `$${currentProduct.price.toFixed(2)}`;

            modal.classList.remove('hidden');
            setTimeout(() => {
                container.classList.remove('scale-95');
                container.classList.add('scale-100');
            }, 10);

            renderPayPalButtons();
            renderCardFields();
        }

        function createOrderPayload() {
            const buyer = getBuyerDetails();

            const payload = {
                purchase_units: [{
                    description: currentProduct.name,
                    amount: { value: currentProduct.price.toFixed(2) }
                }]
            };

            // Ensure buyer email + billing address are linked into the order so capture doesn't fail
            if (buyer.email) {
                payload.payer = payload.payer || {};
                payload.payer.email_address = buyer.email;
            }

            const addr = buyer.billingAddress || {};
            const hasAddr = Object.values(addr).some(v => !!v);
            if (hasAddr) {
                payload.purchase_units[0].billing_address = addr;
            }

            return payload;
        }

        function finalizeSuccess() {
            document.getElementById('paypal-area').classList.add('hidden');
            document.getElementById('download-area').classList.remove('hidden');

            const downloadBtn = document.getElementById('download-btn');
            downloadBtn.href = currentProduct.downloadUrl;

            document.getElementById('download-btn-text').innerHTML = `
                Download ${currentProduct.shortName}
                <iconify-icon icon="solar:download-linear" style="--iconify-stroke-width: 1.5;"></iconify-icon>
            `;

            const countEl = document.getElementById('cart-count');
            countEl.textContent = "1";
        }

        function renderPayPalButtons() {
            if (!window.paypal || !paypal.Buttons) {
                showPaymentError("PayPal is not available right now. Please refresh and try again.");
                return;
            }

            paypal.Buttons({
                style: {
                    layout: 'vertical',
                    color: 'gold',
                    shape: 'pill',
                    label: 'paypal'
                },
                createOrder: (data, actions) => actions.order.create(createOrderPayload()),
                onApprove: async (data, actions) => {
                    try {
                        document.getElementById('payment-error').classList.add('hidden');
                        await actions.order.capture();
                        finalizeSuccess();
                    } catch (err) {
                        showPaymentError("We couldn’t finalize the payment. Please try again.");
                    }
                },
                onCancel: () => {},
                onError: () => showPaymentError("Something went wrong with PayPal. Please try again.")
            }).render('#paypal-buttons');
        }

        function renderCardFields() {
            const wrap = document.getElementById('card-fields-wrap');
            const fallbackBtn = document.getElementById('card-submit-fallback');
            fallbackBtn.disabled = false;

            if (!window.paypal || !paypal.CardFields) {
                // Keep minimal: if CardFields isn't available, just don't show the card form
                return;
            }

            // Show the card fields section
            wrap.classList.remove('hidden');

            const cardFields = paypal.CardFields({
                createOrder: (data, actions) => actions.order.create(createOrderPayload()),
                onApprove: async (data, actions) => {
                    try {
                        document.getElementById('payment-error').classList.add('hidden');
                        await actions.order.capture();
                        finalizeSuccess();
                    } catch (err) {
                        showPaymentError("We couldn’t finalize the card payment. Please verify your details and try again.");
                    }
                },
                onError: () => showPaymentError("Card payment error. Please try again.")
            });

            if (!cardFields.isEligible()) {
                // Hide card fields if not eligible; keep PayPal buttons intact
                wrap.classList.add('hidden');
                return;
            }

            cardFieldsInstance = cardFields;

            cardFields.NumberField().render('#card-number');
            cardFields.ExpiryField().render('#card-expiration');
            cardFields.CVVField().render('#card-cvv');

            // Correctly render PayPal CardFields submit button target
            // Some environments render an internal button; we provide the target container.
            try {
                cardFields.SubmitButton().render('#card-submit-container');
            } catch (e) {
                // If SubmitButton is not supported, fallback button still works.
            }

            // If PayPal renders a hidden button, force it visible and match "Pay Now" styling as close as possible
            setTimeout(() => {
                const container = document.getElementById('card-submit-container');
                const btn = container ? container.querySelector('button') : null;

                if (btn) {
                    btn.type = 'button';
                    btn.className = fallbackBtn.className; // match your Pay Now design
                    btn.innerHTML = fallbackBtn.innerHTML;
                    btn.style.display = 'flex';
                    btn.style.visibility = 'visible';
                    btn.style.opacity = '1';
                }
            }, 50);

            // Ensure onClick triggers cardFields.submit()
            fallbackBtn.onclick = async () => {
                if (!cardFieldsInstance) return;

                // minimal validation to reduce capture failures
                const buyer = getBuyerDetails();
                if (!buyer.email) return showPaymentError("Please enter your email before paying.");
                if (!buyer.billingAddress.address_line_1 || !buyer.billingAddress.postal_code) {
                    return showPaymentError("Please enter your billing address and ZIP before paying.");
                }

                try {
                    document.getElementById('payment-error').classList.add('hidden');
                    fallbackBtn.disabled = true;
                    await cardFieldsInstance.submit();
                } catch (e) {
                    showPaymentError("Card submission failed. Please check your details and try again.");
                } finally {
                    fallbackBtn.disabled = false;
                }
            };
        }

        function toggleCart() {
            const modal = document.getElementById('checkout-modal');
            const container = document.getElementById('modal-container');
            if (!modal.classList.contains('hidden')) {
                container.classList.add('scale-95');
                container.classList.remove('scale-100');
                setTimeout(() => modal.classList.add('hidden'), 300);
            }
        }

        function toggleAdmin() {
            const main = document.getElementById('main-view');
            const admin = document.getElementById('admin-panel');

            if (admin.classList.contains('hidden')) {
                main.classList.add('hidden');
                admin.classList.remove('hidden');
            } else {
                admin.classList.add('hidden');
                main.classList.remove('hidden');
            }
            window.scrollTo(0, 0);
        }

        function toggleTerms() {
            document.getElementById('terms-modal').classList.toggle('hidden');
        }

        // Keyboard Shortcut for Admin
        document.addEventListener('keydown', (e) => {
            if (e.altKey && e.code === 'KeyA') toggleAdmin();
        });

        /* --- 7. FAQ accordion --- */
        function toggleFaq(btn) {
            const panel = btn.nextElementSibling;
            const chevron = btn.querySelector('.faq-chevron');
            const isOpen = !panel.classList.contains('hidden');

            const container = btn.closest('.glass-panel');
            container.querySelectorAll('.faq-panel').forEach(p => p.classList.add('hidden'));
            container.querySelectorAll('.faq-chevron').forEach(c => c.style.transform = 'rotate(0deg)');

            if (!isOpen) {
                panel.classList.remove('hidden');
                chevron.style.transform = 'rotate(180deg)';
            }
        }

        /* --- 8. Countdown timer (2 hours, resets per new visitor) --- */
        (function initCountdown() {
            const key = 'aura_offer_deadline';
            const now = Date.now();
            let deadline = parseInt(localStorage.getItem(key) || '0', 10);

            if (!deadline || deadline < now) {
                deadline = now + 2 * 60 * 60 * 1000;
                localStorage.setItem(key, String(deadline));
            }

            const el = document.getElementById('countdown');

            function tick() {
                const remaining = Math.max(0, deadline - Date.now());
                const totalSeconds = Math.floor(remaining / 1000);
                const h = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
                const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
                const s = String(totalSeconds % 60).padStart(2, '0');
                el.textContent = `${h}:${m}:${s}`;
            }

            tick();
            setInterval(tick, 1000);
        })();

        /* --- Live sales toast generator removed per request --- */
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="hidden md:block" id="cursor-dot"></div>
<div className="hidden md:block" id="cursor-ring"></div>

<div id="intro-screen">
<iconify-icon className="wireframe-sphere mb-8" icon="solar:atom-bold-duotone"></iconify-icon>
<div className="text-2xl font-semibold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500" id="intro-text">
            LOADING SYSTEM...
        </div>
</div>

<div className="mesh-bg">
<div className="mesh-blob blob-1"></div>
<div className="mesh-blob blob-2"></div>
<div className="mesh-blob blob-3"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '50px 50px', maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'}}></div>
</div>

<div className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#020410]/70 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6">
<div className="h-12 flex items-center justify-between gap-4">
<div className="flex items-center gap-2 text-xs text-neutral-300 uppercase tracking-widest">
<span className="inline-flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:alarm-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
                        Limited Time Offer
                    </span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-500">Ends in</span>
<div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-white tracking-tight">
<span id="countdown">02:00:00</span>
</div>
</div>
</div>
</div>
</div>

<nav className="fixed top-12 w-full z-40 border-b border-white/5 bg-[#020410]/70 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-3 cursor-pointer group magnetic-btn" onclick="window.location.reload()">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:border-cyan-400/50 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.1)]">
<span className="text-white font-semibold tracking-tighter z-10">A</span>
<div className="absolute inset-0 bg-cyan-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<span className="text-xl font-semibold tracking-tight text-white group-hover:text-cyan-400 transition-colors">AURA</span>
</div>

<div className="flex items-center gap-8">
<button className="text-xs font-medium text-neutral-500 hover:text-white transition-colors uppercase tracking-widest hidden md:block magnetic-btn" onclick="toggleAdmin()">
                    Admin
                </button>
<div className="relative cursor-pointer group magnetic-btn" onclick="toggleCart()">
<div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 group-hover:bg-white/10 group-hover:border-cyan-500/30 transition-all" id="cart-btn-bg">
<iconify-icon className="text-neutral-400 group-hover:text-cyan-400 transition-colors text-xl" icon="solar:bag-3-bold-duotone" id="cart-icon"></iconify-icon>
<span className="text-sm font-semibold text-neutral-400 group-hover:text-white" id="cart-count">0</span>
</div>
</div>
</div>
</div>
</nav>

<main className="pt-44 px-6 max-w-7xl mx-auto w-full flex-grow flex flex-col pb-20" id="main-view">
<header className="text-center mb-16 relative">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-tight" id="hero-headline">
                THE FUTURE OF <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 animate-gradient-x">AI TOOLS</span> IS HERE
            </h1>
<p className="text-neutral-400 font-light text-xl max-w-2xl mx-auto tracking-wide">
                Dominating the digital algorithm has never been this effortless.
            </p>

<div className="max-w-xl mx-auto mt-10">
<div className="flex items-center justify-between text-xs text-neutral-500 uppercase tracking-widest mb-3">
<span>Licenses</span>
<span className="text-neutral-300 font-medium normal-case tracking-wide">85% of licenses claimed</span>
</div>
<div className="h-2 rounded-full bg-white/5 border border-white/10 overflow-hidden">
<div className="h-full w-[85%] rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.25)]"></div>
</div>
</div>
</header>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto w-full">

<div className="tilt-card group relative rounded-[2rem] border border-white/10 glass-panel overflow-hidden flex flex-col hover:border-indigo-500/50 hover:shadow-[0_0_50px_rgba(99,102,241,0.15)] transition-all duration-500 h-full">

<div className="h-80 relative overflow-hidden flex items-center justify-center bg-indigo-950/20">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
<div className="absolute w-64 h-64 rounded-full bg-gradient-to-tr from-indigo-600/40 to-purple-600/10 blur-[80px] group-hover:scale-110 transition-transform duration-700"></div>
<div className="tilt-content flex flex-col items-center">
<iconify-icon className="text-8xl text-indigo-300 drop-shadow-[0_0_25px_rgba(165,180,252,0.6)] group-hover:text-indigo-200 transition-colors duration-500" icon="solar:magic-stick-3-bold-duotone"></iconify-icon>
</div>
<div className="absolute top-6 right-6 tilt-content">
<div className="bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                            Best Seller
                        </div>
</div>
</div>
<div className="p-10 flex flex-col flex-grow justify-between relative z-10 bg-gradient-to-t from-black/80 to-transparent">
<div>
<h2 className="text-3xl font-semibold text-white mb-4 tracking-tight group-hover:text-indigo-300 transition-colors">Creator’s AI Vault</h2>
<p className="text-neutral-400 text-base font-light leading-relaxed mb-8">
                            100+ God-Tier Prompts. Midjourney &amp; ChatGPT scripts designed to break the algorithm.
                        </p>
</div>
<div className="flex items-center justify-between pt-6 border-t border-white/5">
<div className="text-3xl font-semibold text-white tracking-tight">$9.99</div>
<button className="magnetic-btn relative overflow-hidden bg-white text-black px-8 py-3.5 rounded-full font-semibold text-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group/btn" id="btn-buy-vault" onclick="initiateCheckout('vault')">
<span className="btn-text relative z-10 flex items-center gap-2">
                                Buy
                                <iconify-icon className="group-hover/btn:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</span>
<div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
<div className="spinner spinner-dark hidden relative z-20"></div>
</button>
</div>

<div className="mt-6 pt-6 border-t border-white/5">
<div className="flex items-center justify-between gap-4">
<div className="text-xs text-neutral-500 uppercase tracking-widest flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:shield-check-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
                                100% Secure Checkout
                            </div>
<div className="flex items-center gap-3 opacity-70">
<iconify-icon className="text-xl" icon="logos:paypal"></iconify-icon>
<iconify-icon className="text-xl" icon="logos:visa"></iconify-icon>
<iconify-icon className="text-xl" icon="logos:mastercard"></iconify-icon>
<div className="flex items-center gap-1 text-xs text-neutral-500">
<iconify-icon icon="solar:lock-keyhole-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
                                    SSL
                                </div>
</div>
</div>
</div>
</div>
</div>

<div className="tilt-card group relative rounded-[2rem] border border-white/10 glass-panel overflow-hidden flex flex-col hover:border-cyan-500/50 hover:shadow-[0_0_50px_rgba(6,182,212,0.15)] transition-all duration-500 h-full">

<div className="h-80 relative overflow-hidden flex items-center justify-center bg-cyan-950/20">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
<div className="absolute w-64 h-64 rounded-full bg-gradient-to-tr from-cyan-600/40 to-blue-600/10 blur-[80px] group-hover:scale-110 transition-transform duration-700"></div>
<div className="tilt-content flex flex-col items-center">
<iconify-icon className="text-8xl text-cyan-300 drop-shadow-[0_0_25px_rgba(103,232,249,0.6)] group-hover:text-cyan-200 transition-colors duration-500" icon="solar:videocamera-record-bold-duotone"></iconify-icon>
</div>
<div className="absolute top-6 right-6 tilt-content">
<div className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                            Trending
                        </div>
</div>
</div>
<div className="p-10 flex flex-col flex-grow justify-between relative z-10 bg-gradient-to-t from-black/80 to-transparent">
<div>
<h2 className="text-3xl font-semibold text-white mb-4 tracking-tight group-hover:text-cyan-300 transition-colors">Faceless Viral Kit</h2>
<p className="text-neutral-400 text-base font-light leading-relaxed mb-8">
                            Launch channels in 24h. The blueprint for faceless content dominance on TikTok &amp; Shorts.
                        </p>
</div>
<div className="flex items-center justify-between pt-6 border-t border-white/5">
<div className="text-3xl font-semibold text-white tracking-tight">$14.50</div>
<button className="magnetic-btn relative overflow-hidden bg-white text-black px-8 py-3.5 rounded-full font-semibold text-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group/btn" id="btn-buy-kit" onclick="initiateCheckout('kit')">
<span className="btn-text relative z-10 flex items-center gap-2">
                                Buy
                                <iconify-icon className="group-hover/btn:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</span>
<div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
<div className="spinner spinner-dark hidden relative z-20"></div>
</button>
</div>

<div className="mt-6 pt-6 border-t border-white/5">
<div className="flex items-center justify-between gap-4">
<div className="text-xs text-neutral-500 uppercase tracking-widest flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:shield-check-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
                                100% Secure Checkout
                            </div>
<div className="flex items-center gap-3 opacity-70">
<iconify-icon className="text-xl" icon="logos:paypal"></iconify-icon>
<iconify-icon className="text-xl" icon="logos:visa"></iconify-icon>
<iconify-icon className="text-xl" icon="logos:mastercard"></iconify-icon>
<div className="flex items-center gap-1 text-xs text-neutral-500">
<iconify-icon icon="solar:lock-keyhole-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
                                    SSL
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="max-w-6xl mx-auto w-full mt-24">
<div className="flex items-end justify-between gap-6 mb-10">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">What Creators Are Saying</h2>
<p className="text-neutral-400 text-base font-light mt-3 max-w-2xl">Real results from creators using these systems to ship faster and grow.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass-panel rounded-[2rem] p-8 border border-white/10">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10"></div>
<div>
<div className="text-sm font-semibold text-white">Alex M.</div>
<div className="text-xs text-neutral-500">Short-form Creator</div>
</div>
</div>
<div className="flex items-center gap-1 text-amber-300 mb-4">
<iconify-icon icon="solar:star-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-sm text-neutral-300 leading-relaxed font-light">
                        “The Vault prompts are insane. My workflow is faster and my outputs feel instantly more polished.”
                    </p>
</div>
<div className="glass-panel rounded-[2rem] p-8 border border-white/10">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10"></div>
<div>
<div className="text-sm font-semibold text-white">Samira K.</div>
<div className="text-xs text-neutral-500">Agency Operator</div>
</div>
</div>
<div className="flex items-center gap-1 text-amber-300 mb-4">
<iconify-icon icon="solar:star-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-sm text-neutral-300 leading-relaxed font-light">
                        “Faceless Kit is a complete playbook. We launched a new channel format in one afternoon.”
                    </p>
</div>
<div className="glass-panel rounded-[2rem] p-8 border border-white/10">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10"></div>
<div>
<div className="text-sm font-semibold text-white">Jordan T.</div>
<div className="text-xs text-neutral-500">Solo Founder</div>
</div>
</div>
<div className="flex items-center gap-1 text-amber-300 mb-4">
<iconify-icon icon="solar:star-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-sm text-neutral-300 leading-relaxed font-light">
                        “Clean UI, instant delivery, and the content frameworks are very actionable. Worth it.”
                    </p>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto w-full mt-24">
<div className="mb-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">FAQ</h2>
<p className="text-neutral-400 text-base font-light mt-3 max-w-2xl">Quick answers before you check out.</p>
</div>
<div className="glass-panel rounded-[2rem] border border-white/10 overflow-hidden">
<button className="w-full text-left px-8 py-6 flex items-center justify-between gap-6 border-b border-white/5 hover:bg-white/[0.03] transition-colors" onclick="toggleFaq(this)">
<div>
<div className="text-sm font-semibold text-white">How does delivery work?</div>
<div className="text-xs text-neutral-500 mt-1">Instant access after payment is captured.</div>
</div>
<iconify-icon className="text-neutral-400 text-xl faq-chevron" icon="solar:alt-arrow-down-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="hidden px-8 py-6 text-sm text-neutral-300 leading-relaxed font-light faq-panel">
                    After checkout, the payment is captured, then the download link is revealed instantly on this page (no redirects).
                </div>
<button className="w-full text-left px-8 py-6 flex items-center justify-between gap-6 border-b border-white/5 hover:bg-white/[0.03] transition-colors" onclick="toggleFaq(this)">
<div>
<div className="text-sm font-semibold text-white">Is there a refund policy?</div>
<div className="text-xs text-neutral-500 mt-1">Digital goods policy.</div>
</div>
<iconify-icon className="text-neutral-400 text-xl faq-chevron" icon="solar:alt-arrow-down-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="hidden px-8 py-6 text-sm text-neutral-300 leading-relaxed font-light faq-panel">
                    Due to the digital nature of the products and instant delivery, all sales are final.
                </div>
<button className="w-full text-left px-8 py-6 flex items-center justify-between gap-6 hover:bg-white/[0.03] transition-colors" onclick="toggleFaq(this)">
<div>
<div className="text-sm font-semibold text-white">Will I receive updates?</div>
<div className="text-xs text-neutral-500 mt-1">If the toolkit gets expanded.</div>
</div>
<iconify-icon className="text-neutral-400 text-xl faq-chevron" icon="solar:alt-arrow-down-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="hidden px-8 py-6 text-sm text-neutral-300 leading-relaxed font-light faq-panel">
                    If updates are released, you’ll be able to download the latest version from the link provided after purchase.
                </div>
</div>
</section>
<div className="text-center mt-24 mb-16">
<div className="inline-flex items-center gap-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
<iconify-icon className="text-2xl" icon="logos:paypal"></iconify-icon>
<iconify-icon className="text-2xl" icon="logos:mastercard"></iconify-icon>
<iconify-icon className="text-3xl" icon="logos:visa"></iconify-icon>
</div>
</div>
</main>

<section className="hidden pt-28 pb-20 px-6 max-w-7xl mx-auto min-h-screen" id="admin-panel">
<div className="flex items-center justify-between mb-10">
<h2 className="text-3xl font-semibold text-white tracking-tight flex items-center gap-4">
<span className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e] animate-pulse"></span>
                System Dashboard
            </h2>
<button className="px-6 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs text-neutral-300 transition-colors uppercase tracking-widest magnetic-btn" onclick="toggleAdmin()">
                Exit
            </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
<div className="glass-panel p-10 rounded-[2rem] relative overflow-hidden">
<div className="flex items-center justify-between mb-4 relative z-10">
<span className="text-sm text-neutral-400 uppercase tracking-widest">Total Views</span>
<iconify-icon className="text-neutral-500 text-xl" icon="solar:eye-bold-duotone"></iconify-icon>
</div>
<div className="text-6xl font-semibold text-white tracking-tight relative z-10" id="admin-views">0</div>
<div className="absolute -right-10 -bottom-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
</div>
<div className="glass-panel p-10 rounded-[2rem] relative overflow-hidden group">
<div className="flex items-center justify-between mb-4 relative z-10">
<span className="text-sm text-neutral-400 uppercase tracking-widest">Revenue (Editable)</span>
<iconify-icon className="text-neutral-500 text-xl" icon="solar:wallet-money-bold-duotone"></iconify-icon>
</div>
<div className="text-6xl font-semibold text-white tracking-tight relative z-10 flex items-center">
<span className="text-green-400">$</span>
<span className="ml-2 cursor-text hover:text-green-200 transition-colors focus:text-green-400 outline-none" contenteditable="true" id="admin-revenue">12,450</span>
</div>
<div className="absolute -right-10 -bottom-10 w-48 h-48 bg-green-500/10 rounded-full blur-3xl"></div>
</div>
</div>
<div className="glass-panel p-8 rounded-[2rem]">
<h3 className="text-xs text-neutral-500 mb-6 uppercase tracking-widest flex items-center gap-2">
<iconify-icon className="text-neutral-300" icon="solar:bell-bing-bold-duotone"></iconify-icon> Live Transaction Feed
            </h3>
<div className="space-y-4" id="sales-feed"></div>
</div>
</section>

<footer className="w-full py-10 text-center border-t border-white/5 bg-[#020410] relative z-10">
<div className="flex flex-col items-center gap-4">
<span className="text-white font-semibold tracking-tight text-lg">AURA</span>
<div className="flex gap-6">
<button className="text-xs text-neutral-600 hover:text-white transition-colors" onclick="toggleTerms()">Terms</button>
<button className="text-xs text-neutral-600 hover:text-white transition-colors">Privacy</button>
<button className="text-xs text-neutral-600 hover:text-white transition-colors">Contact</button>
</div>
<p className="text-xs text-neutral-700 mt-4">© 2024 Aura Digital. All rights reserved.</p>
</div>
</footer>

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl hidden transition-opacity duration-300" id="checkout-modal">
<div className="bg-[#0a0a0a] border border-white/10 w-full max-w-md p-8 rounded-[2rem] shadow-2xl transform scale-95 transition-transform duration-300 relative overflow-hidden" id="modal-container">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px]"></div>
<button className="absolute top-6 right-6 text-neutral-500 hover:text-white z-10 magnetic-btn" onclick="toggleCart()">
<iconify-icon className="text-3xl" icon="solar:close-circle-bold-duotone"></iconify-icon>
</button>
<div className="relative z-10" id="checkout-content">
<div className="flex justify-between items-center mb-8">
<h3 className="text-xl font-semibold text-white flex items-center gap-2 tracking-tight">
<iconify-icon className="text-emerald-400" icon="solar:shield-check-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon> Secure PayPal Checkout
                    </h3>
</div>
<div className="mb-6" id="cart-item-display"></div>
<div className="flex justify-between items-center mb-6 pt-6 border-t border-white/5">
<span className="text-neutral-400 font-medium">Total Due</span>
<span className="text-3xl font-semibold text-white tracking-tight" id="modal-total">$0.00</span>
</div>

<div className="hidden mb-5 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-2xl" id="payment-error">
<div className="flex items-start gap-3">
<iconify-icon className="text-red-400 text-xl" icon="solar:danger-triangle-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
<div>
<div className="text-sm text-red-200 font-semibold">Payment issue</div>
<div className="text-xs text-red-200/80 mt-1" id="payment-error-msg">Please try again.</div>
</div>
</div>
</div>

<div id="paypal-area">
<div className="mb-5">
<div className="rounded-2xl overflow-hidden" id="paypal-buttons"></div>
</div>

<div className="hidden" id="card-fields-wrap">
<div className="mt-6 pt-6 border-t border-white/5">
<div className="flex items-center justify-between mb-4">
<div className="text-xs text-neutral-400 uppercase tracking-widest">Pay with Card</div>
<div className="text-xs text-neutral-500">Secure card form</div>
</div>
<div className="space-y-4">

<div>
<label className="block text-xs text-neutral-400 mb-2 uppercase tracking-widest" htmlFor="buyer-email">Email</label>
<input autocomplete="email" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/30" id="buyer-email" placeholder="you@domain.com" type="email"/>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="sm:col-span-2">
<label className="block text-xs text-neutral-400 mb-2 uppercase tracking-widest" htmlFor="billing-address1">Billing Address</label>
<input autocomplete="billing street-address" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/30" id="billing-address1" placeholder="Street address" type="text"/>
</div>
<div>
<input autocomplete="billing address-level2" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/30" id="billing-city" placeholder="City" type="text"/>
</div>
<div>
<input autocomplete="billing address-level1" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/30" id="billing-state" placeholder="State" type="text"/>
</div>
<div>
<input autocomplete="billing postal-code" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/30" id="billing-zip" placeholder="ZIP" type="text"/>
</div>
<div>
<input autocomplete="billing country" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/30" id="billing-country" placeholder="Country code (US)" type="text"/>
</div>
</div>

<div className="grid grid-cols-1 gap-4">
<div>
<div className="text-xs text-neutral-400 mb-2 uppercase tracking-widest">Card Number</div>
<div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3" id="card-number"></div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<div className="text-xs text-neutral-400 mb-2 uppercase tracking-widest">Expiration</div>
<div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3" id="card-expiration"></div>
</div>
<div>
<div className="text-xs text-neutral-400 mb-2 uppercase tracking-widest">CVC</div>
<div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3" id="card-cvv"></div>
</div>
</div>
</div>

<div className="pt-2" id="card-submit-container"></div>

<button className="magnetic-btn w-full py-4 bg-white text-black font-semibold rounded-xl flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all" id="card-submit-fallback" type="button">
<span className="flex items-center gap-2">
                                        Pay Now
                                        <iconify-icon icon="solar:arrow-right-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</span>
</button>
<p className="text-xs text-neutral-500 leading-relaxed">
                                    Your payment is processed securely. The download link appears only after the payment is captured.
                                </p>
</div>
</div>
</div>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Your payment is processed securely. The download link appears only after the payment is captured.
                    </p>
</div>

<div className="hidden" id="download-area">
<div className="mb-6 px-4 py-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
<div className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:check-circle-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
<div>
<div className="text-sm text-emerald-100 font-semibold">Payment approved</div>
<div className="text-xs text-emerald-100/80 mt-1">Your download is ready.</div>
</div>
</div>
</div>
<a className="magnetic-btn w-full py-4 bg-white text-black font-semibold rounded-xl flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all" href="#" id="download-btn" rel="noopener" target="_blank">
<span className="flex items-center gap-2" id="download-btn-text">
                            Download
                            <iconify-icon icon="solar:download-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</span>
</a>
<button className="mt-4 w-full py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-xs text-neutral-300 transition-colors uppercase tracking-widest magnetic-btn" onclick="toggleCart()">
                        Close
                    </button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-md hidden" id="terms-modal">
<div className="glass-panel w-full max-w-sm p-8 rounded-3xl relative">
<button className="absolute top-4 right-4 text-neutral-500 hover:text-white" onclick="toggleTerms()">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</button>
<h3 className="text-lg font-semibold text-white mb-4 tracking-tight">Terms of Service</h3>
<p className="text-sm text-neutral-400 leading-relaxed">All sales are final due to the digital nature of these products.</p>
</div>
</div>

<div className="fixed bottom-6 left-6 z-[70] hidden" id="sales-toast">
<div className="glass-panel border border-white/10 rounded-2xl px-4 py-3 max-w-xs shadow-[0_0_40px_rgba(0,0,0,0.35)]">
<div className="flex items-start gap-3">
<div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-300">
<iconify-icon className="text-xl" icon="solar:bag-check-linear" style={{-IconifyStrokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="min-w-0">
<div className="text-xs font-semibold text-white truncate" id="toast-title">Someone just purchased a tool!</div>
<div className="text-xs text-neutral-500 mt-1 truncate" id="toast-subtitle">Just now</div>
</div>
</div>
</div>
</div>


    </>
  );
}
