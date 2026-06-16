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
page: '#030405',
surface: '#0A0A0B',
surfaceHighlight: '#121214',
border: '#ffffff15',
brand: {
DEFAULT: '#10B981',
dim: '#059669',
accent: '#34D399',
glow: 'rgba(16, 185, 129, 0.15)'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
animation: {
'fade-up': 'fadeUp 0.8s ease-out forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'spin-fast': 'spin 0.6s linear infinite',
},
keyframes: {
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
},
backgroundImage: {
'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E\")",
}
}
}
}



        lucide.createIcons();

        // --- BACKEND CONFIGURATION ---
        const STRIPE_LINK = 'https://buy.stripe.com/28E4gA4nM6me7bC6s23ZK08';
        
        // Mapping all products to the single link provided, can be separated later
        const STRIPE_CONFIG = {
            'course_bundle': STRIPE_LINK,
            'micro_course': STRIPE_LINK,
            'blueprint': STRIPE_LINK,
            'case_study': STRIPE_LINK,
            'access_pass': STRIPE_LINK,
            'membership': STRIPE_LINK
        };

        // --- CHECKOUT LOGIC ---
        async function handleCheckout(productId, btnElement) {
            // Save original state
            const originalContent = btnElement.innerHTML;
            const width = btnElement.offsetWidth;
            
            // Set loading state
            btnElement.style.width = `${width}px`;
            btnElement.disabled = true;
            btnElement.innerHTML = `<span class="loader"></span>`;
            
            // Notify user about the DM step
            showToast("Redirecting... Remember to DM 'pumeled' after payment!", "brand");
            
            // Short delay so they see the toast
            await new Promise(resolve => setTimeout(resolve, 1500));

            const paymentLink = STRIPE_CONFIG[productId];

            if (paymentLink) {
                // Redirect to Stripe
                window.location.href = paymentLink;
            } else {
                // Error handling
                btnElement.innerHTML = originalContent;
                btnElement.disabled = false;
                btnElement.style.width = 'auto';
                lucide.createIcons();
                
                showToast("Configuration Error: Payment link missing.", "error");
            }
        }

        // --- UI UTILITIES ---
        function toggleFaq(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('i');
            
            document.querySelectorAll('.group button + div').forEach(div => {
                if (div !== content) {
                    div.style.height = '0';
                    div.style.opacity = '0';
                    div.previousElementSibling.querySelector('i').style.transform = 'rotate(0deg)';
                }
            });

            if (content.style.height === '0px' || !content.style.height) {
                content.style.height = content.scrollHeight + 'px';
                content.style.opacity = '1';
                icon.style.transform = 'rotate(180deg)';
            } else {
                content.style.height = '0';
                content.style.opacity = '0';
                icon.style.transform = 'rotate(0deg)';
            }
        }

        function showToast(message, type = 'default') {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            
            // Toast Styling
            let bgClass = 'bg-surfaceHighlight border-white/10 text-white';
            let iconName = 'check-circle';
            
            if (type === 'error') {
                bgClass = 'bg-red-500/10 border-red-500/20 text-red-200';
                iconName = 'alert-circle';
            } else if (type === 'brand') {
                bgClass = 'bg-brand-dim/10 border-brand-accent/20 text-brand-accent';
                iconName = 'info';
            }
            
            toast.className = `
                pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-lg shadow-2xl border 
                backdrop-blur-xl transform transition-all duration-300 translate-x-10 opacity-0
                ${bgClass}
            `;
            
            toast.innerHTML = `
                <i data-lucide="${iconName}" class="w-4 h-4"></i>
                <span class="text-sm font-medium">${message}</span>
            `;

            container.appendChild(toast);
            lucide.createIcons();

            // Animate In
            requestAnimationFrame(() => {
                toast.classList.remove('translate-x-10', 'opacity-0');
            });

            // Remove after 4s (slightly longer for instruction reading)
            setTimeout(() => {
                toast.classList.add('translate-x-10', 'opacity-0');
                setTimeout(() => toast.remove(), 300);
            }, 4000);
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-glow blur-[100px] opacity-40"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[600px] bg-blue-900/10 blur-[120px] opacity-30"></div>
<div className="bg-noise absolute inset-0 z-0 pointer-events-none"></div>
</div>

<div className="fixed top-4 right-4 z-[60] flex flex-col gap-2 pointer-events-none" id="toast-container"></div>

<nav className="fixed w-full top-0 z-50 border-b border-white/5 bg-page/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-gradient-to-br from-brand-accent to-brand-dim flex items-center justify-center text-page font-bold text-lg">M</div>
<span className="font-medium tracking-tight text-white">Make Your Millions</span>
</div>
<div className="flex items-center gap-6">
<a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Login</a>
<button className="bg-white text-black px-4 py-2 rounded text-sm font-medium hover:bg-gray-200 transition-all flex items-center gap-2" onclick="handleCheckout('membership', this)">
                    Get Access
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 z-10">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/20 bg-brand-dim/10 text-brand-accent text-xs font-medium mb-8 reveal animate-fade-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
</span>
                Premium $5 Entry System
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6 leading-[1.1] reveal delay-100">
                Learn Skills. Build Your <br/>
<span className="text-gradient-brand">Digital Empire.</span>
</h1>
<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed reveal delay-200">
                A premium platform for young entrepreneurs. Access the exact strategies I used to generate over <span className="text-white font-medium">$10,000 at age 14</span> — without experience or startup capital.
            </p>
<div className="flex flex-col items-center gap-6 reveal delay-300">
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
<button className="w-full sm:w-auto bg-brand-DEFAULT text-white px-8 py-3.5 rounded-lg font-medium text-sm hover:bg-brand-dim transition-all shadow-lg shadow-brand-DEFAULT/20 flex items-center justify-center gap-2 group" onclick="handleCheckout('course_bundle', this)">
<span>Start Your Journey for $5</span>
<i className="w-4 h-4 group-hover:fill-current transition-colors icon-default" data-lucide="zap"></i>
</button>
<button className="w-full sm:w-auto bg-surface border border-white/10 text-gray-300 px-8 py-3.5 rounded-lg font-medium text-sm hover:bg-white/5 hover:text-white transition-all">
                        View Case Studies
                    </button>
</div>

<div className="flex items-center gap-2 text-xs text-gray-500 bg-white/5 px-4 py-2 rounded-full border border-white/5">
<i className="w-3.5 h-3.5 text-brand-accent" data-lucide="info"></i>
<span>Important: After payment, please <strong>DM "pumeled"</strong> to get access.</span>
</div>
</div>
</div>
</section>

<section className="py-12 px-6 relative z-10">
<div className="max-w-5xl mx-auto">
<div className="glass-card rounded-3xl p-8 md:p-12 overflow-hidden relative reveal">
<div className="absolute top-0 right-0 w-64 h-64 bg-brand-dim/10 blur-[80px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>
<div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
<div>
<h2 className="text-sm font-medium text-brand-accent uppercase tracking-wider mb-3">The Origin Story</h2>
<h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">How I made $10,000 from one project at 14.</h3>
<div className="space-y-4 text-gray-400 text-base leading-relaxed">
<p>
                                At 14 years old, I didn't have a team, investment, or connections. I just had a blueprint and a laptop.
                            </p>
<p>
                                I built a digital project using <strong className="text-white">YouTube automation</strong> and viral marketing funnels. The project blew up, generating over $10,000 and proving that age doesn't limit income online—systems do.
                            </p>
</div>
</div>
<div className="bg-surfaceHighlight border border-white/10 rounded-xl p-6 relative">
<div className="flex justify-between items-center mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-brand-dim/20 flex items-center justify-center">
<i className="w-5 h-5 text-brand-accent" data-lucide="trending-up"></i>
</div>
<div>
<div className="text-xs text-gray-500 uppercase">Total Revenue</div>
<div className="text-xl font-medium text-white">$10,432.00</div>
</div>
</div>
<div className="px-2 py-1 bg-brand-dim/10 rounded text-xs text-brand-accent font-medium">+100%</div>
</div>
<div className="flex items-end gap-2 h-32 w-full mt-4">
<div className="flex-1 bg-white/5 rounded-t w-full h-[20%]"></div>
<div className="flex-1 bg-white/5 rounded-t w-full h-[35%]"></div>
<div className="flex-1 bg-white/5 rounded-t w-full h-[30%]"></div>
<div className="flex-1 bg-brand-dim/30 rounded-t w-full h-[50%] animate-pulse-slow"></div>
<div className="flex-1 bg-brand-dim/50 rounded-t w-full h-[75%]"></div>
<div className="flex-1 bg-brand-DEFAULT rounded-t w-full h-[95%] relative group"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:text-center reveal">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">Premium Systems. <span className="text-gray-500">$5 Entry.</span></h2>
<p className="text-gray-400 max-w-2xl mx-auto">
                    This isn't a free course site. It's a premium marketplace for high-ROI skills. <br/>
<span className="text-brand-accent">Note: You must DM "pumeled" after paying.</span>
</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group glass-card p-8 rounded-2xl hover:border-brand-dim/50 transition-all duration-500 reveal delay-100 flex flex-col">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 border border-white/10">
<i className="w-6 h-6 text-brand-accent" data-lucide="play-circle"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Micro-Courses</h3>
<p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        Short, high-impact modules covering YouTube Automation and Viral Shorts.
                    </p>
<div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
<span className="text-2xl font-medium text-white">$5 <span className="text-sm text-gray-500 font-normal">/ course</span></span>
<button className="text-sm font-medium text-white bg-white/10 px-3 py-1.5 rounded hover:bg-brand-DEFAULT transition-colors" onclick="handleCheckout('micro_course', this)">Buy Now</button>
</div>
</div>

<div className="group glass-card p-8 rounded-2xl border-brand-dim/30 hover:border-brand-DEFAULT transition-all duration-500 reveal delay-200 relative overflow-hidden flex flex-col">
<div className="absolute top-0 right-0 bg-brand-DEFAULT text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">Most Popular</div>
<div className="w-12 h-12 bg-brand-dim/20 rounded-lg flex items-center justify-center mb-6 border border-brand-dim/20">
<i className="w-6 h-6 text-brand-accent" data-lucide="file-code"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Blueprints &amp; Systems</h3>
<p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        Plug-and-play assets. Viral Hook Scripts, Video Templates, and Launch Frameworks.
                    </p>
<div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
<span className="text-2xl font-medium text-white">$5 <span className="text-sm text-gray-500 font-normal">/ pack</span></span>
<button className="text-sm font-medium text-black bg-brand-DEFAULT px-3 py-1.5 rounded hover:bg-brand-accent transition-colors shadow-[0_0_15px_rgba(16,185,129,0.4)]" onclick="handleCheckout('blueprint', this)">Get It</button>
</div>
</div>

<div className="group glass-card p-8 rounded-2xl hover:border-brand-dim/50 transition-all duration-500 reveal delay-300 flex flex-col">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 border border-white/10">
<i className="w-6 h-6 text-brand-accent" data-lucide="lock-open"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Paid Case Studies</h3>
<p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        Deep dives into real projects. The $10k breakdown and backend revenue setup.
                    </p>
<div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
<span className="text-2xl font-medium text-white">$5 <span className="text-sm text-gray-500 font-normal">/ study</span></span>
<button className="text-sm font-medium text-white bg-white/10 px-3 py-1.5 rounded hover:bg-brand-DEFAULT transition-colors" onclick="handleCheckout('case_study', this)">Unlock</button>
</div>
</div>
</div>

<div className="mt-8 rounded-2xl bg-gradient-to-r from-surfaceHighlight to-surface border border-white/10 p-1 relative overflow-hidden reveal delay-300">
<div className="bg-page/50 absolute inset-0"></div>
<div className="relative p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex items-start gap-5">
<div className="p-3 bg-brand-dim/20 rounded-xl text-brand-accent hidden sm:block">
<i className="w-8 h-8" data-lucide="crown"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">The Access Pass</h3>
<p className="text-gray-400 max-w-lg text-sm mb-2">Unlock weekly strategy drops and community access.</p>
<div className="text-xs text-brand-accent font-medium">After purchase: DM "pumeled" to activate.</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="text-right hidden sm:block">
<div className="text-xs text-gray-500 line-through">$29.00</div>
<div className="text-2xl font-medium text-white">$5.00 <span className="text-sm text-gray-500 font-normal">/ mo</span></div>
</div>
<button className="bg-white text-black px-6 py-3 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors whitespace-nowrap" onclick="handleCheckout('access_pass', this)">
                             Join the Inner Circle
                         </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 relative bg-surface/30">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight text-center text-white mb-12 reveal">Common Questions</h2>
<div className="space-y-4 reveal delay-100">
<div className="group border border-white/10 rounded-xl bg-surface transition-all duration-300 hover:border-white/20">
<button className="w-full flex justify-between items-center p-6 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="text-base font-medium text-gray-200">How do I access the content?</span>
<i className="w-5 h-5 text-gray-500 transition-transform duration-300 group-hover:text-white" data-lucide="chevron-down"></i>
</button>
<div className="h-0 overflow-hidden transition-all duration-300 ease-in-out opacity-0">
<div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                            After your $5 payment, <strong>send a DM saying "pumeled"</strong> to the admin account. This verifies your purchase and grants you instant access to the private vault.
                        </div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-page py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex flex-col items-center md:items-start gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-brand-accent to-brand-dim flex items-center justify-center text-page font-bold text-xs">M</div>
<span className="font-medium tracking-tight text-white">Make Your Millions</span>
</div>
<p className="text-sm text-gray-500">© 2024 MYM Platform. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
