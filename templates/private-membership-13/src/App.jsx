import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Modal Logic
        const setupModal = (modalId, openBtns, closeBtn) => {
            const modal = document.getElementById(modalId);
            if (!modal) return;

            const openModal = () => {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            };

            const closeModal = () => {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            };

            if (openBtns.length) {
                openBtns.forEach(btn => btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    openModal();
                }));
            }

            if (closeBtn) {
                closeBtn.addEventListener('click', closeModal);
            }

            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal();
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
            });
            
            return { openModal, closeModal };
        };

        // Initialize Modals
        setupModal('menuModal', [document.getElementById('openMenuModalBtn')], document.getElementById('closeMenuModal'));
        setupModal('privacyModal', [document.getElementById('openPrivacyFooterBtn'), document.querySelector('button:contains("Submit Private Inquiry")')], document.getElementById('closePrivacyModal'));
        
        const membershipModalObj = setupModal('membershipModal', [document.getElementById('navMembershipBtn')], document.getElementById('closeMembershipModal'));

        // Handle Membership specific logic
        const memTriggers = document.querySelectorAll('.membership-trigger');
        const memSelect = document.getElementById('membershipType');
        
        memTriggers.forEach(btn => {
            btn.addEventListener('click', () => {
                if (memSelect && btn.dataset.tier) {
                    memSelect.value = btn.dataset.tier;
                }
                membershipModalObj.openModal();
            });
        });

        // Form Submission
        const form = document.getElementById('membershipForm');
        const successMsg = document.getElementById('successMessage');
        const closeSuccess = document.getElementById('closeSuccessBtn');

        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                form.classList.add('hidden');
                successMsg.classList.remove('hidden');
            });
        }

        if (closeSuccess) {
            closeSuccess.addEventListener('click', () => {
                membershipModalObj.closeModal();
                setTimeout(() => {
                    form.reset();
                    form.classList.remove('hidden');
                    successMsg.classList.add('hidden');
                }, 400);
            });
        }

        // Text Reveal logic adapting to new design
        const revealEl = document.getElementById('revealText');
        if (revealEl) {
            const text = revealEl.innerText;
            revealEl.innerHTML = '';
            const words = text.split(' ');
            
            words.forEach(word => {
                const span = document.createElement('span');
                span.innerText = word + ' ';
                span.className = 'opacity-20 transition-opacity duration-500 inline-block';
                revealEl.appendChild(span);
            });

            const spans = revealEl.querySelectorAll('span');
            
            window.addEventListener('scroll', () => {
                const rect = revealEl.getBoundingClientRect();
                const vh = window.innerHeight;
                if (rect.top < vh * 0.8 && rect.bottom > 0) {
                    const scrolled = Math.max(0, (vh * 0.8) - rect.top);
                    const total = rect.height;
                    const percent = Math.min(1, scrolled / total);
                    const activeCount = Math.floor(percent * spans.length);
                    
                    spans.forEach((span, i) => {
                        span.style.opacity = i < activeCount ? '1' : '0.2';
                    });
                }
            });
        }
        
        // Helper for the Privacy button selector
        document.querySelectorAll('button').forEach(btn => {
            if(btn.innerText.includes('Submit Private Inquiry')) {
                 btn.addEventListener('click', () => {
                     document.getElementById('privacyModal').classList.add('active');
                     document.body.style.overflow = 'hidden';
                 });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="modal-overlay fixed inset-0 z-[100] bg-zinc-950/80 backdrop-blur-xl overflow-y-auto" id="menuModal">
<div className="modal-content min-h-screen flex items-center justify-center p-4 md:p-8">
<button className="fixed top-6 right-6 md:top-8 md:right-8 z-50 w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors text-white" id="closeMenuModal">
<iconify-icon height="24" icon="solar:close-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<div className="w-full max-w-3xl bg-zinc-900/50 border border-white/10 rounded-2xl p-8 md:p-16 relative overflow-hidden">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="text-center mb-16">
<span className="text-2xl font-medium tracking-tight text-white">MST</span>
<p className="text-xs uppercase tracking-widest text-zinc-500 mt-2">Dinner Menu</p>
</div>
<div className="space-y-16">

<div>
<h3 className="text-xl font-medium tracking-tight text-white mb-8 border-b border-white/5 pb-4">Starters</h3>
<div className="grid md:grid-cols-2 gap-8">
<div className="group">
<div className="flex justify-between items-baseline mb-1 text-sm text-white font-medium">
<h4 className="uppercase tracking-widest">Bone Marrow</h4>
<span>18</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">Roasted marrow bones, herb gremolata, grilled sourdough, fleur de sel</p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-1 text-sm text-white font-medium">
<h4 className="uppercase tracking-widest">Burrata</h4>
<span>22</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">Heirloom tomatoes, aged balsamic, basil oil, grilled ciabatta</p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-1 text-sm text-white font-medium">
<h4 className="uppercase tracking-widest">Tuna Tartare</h4>
<span>24</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">Yellowfin tuna, avocado, sesame, ginger, wonton crisps</p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-1 text-sm text-white font-medium">
<h4 className="uppercase tracking-widest">Oysters</h4>
<span>28</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">Half dozen, mignonette, cocktail sauce, fresh horseradish, lemon</p>
</div>
</div>
</div>

<div>
<h3 className="text-xl font-medium tracking-tight text-white mb-8 border-b border-white/5 pb-4">Mains</h3>
<div className="grid md:grid-cols-2 gap-8">
<div className="group">
<div className="flex justify-between items-baseline mb-1 text-sm text-white font-medium">
<h4 className="uppercase tracking-widest">Brick Oven Chicken</h4>
<span>34</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">Brined breast + thigh, crispy potato, broccolini, garlic, chiles, jus</p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-1 text-sm text-white font-medium">
<h4 className="uppercase tracking-widest">The 35 Day Ribeye</h4>
<span>68</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">16oz bone-in, truffle butter, roasted garlic, herb compound</p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-1 text-sm text-white font-medium">
<h4 className="uppercase tracking-widest">Heritage Pork Chop</h4>
<span>42</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">Apple cider brine, mustard greens, bacon lardon, maple glaze</p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-1 text-sm text-white font-medium">
<h4 className="uppercase tracking-widest">Faroe Island Salmon</h4>
<span>38</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">Sustainable salmon, kale, root vegetables, sweet potato, fig balsamic reduction</p>
</div>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-white/5 text-center">
<p className="text-[10px] uppercase tracking-widest text-zinc-600">Special Dietary Needs Accommodated</p>
</div>
</div>
</div>
</div>

<div className="modal-overlay fixed inset-0 z-[100] bg-zinc-950 overflow-y-auto" id="privacyModal">
<div className="modal-content min-h-screen">
<button className="fixed top-6 right-6 md:top-8 md:right-8 z-50 w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors text-white" id="closePrivacyModal">
<iconify-icon height="24" icon="solar:close-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<div className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-12">
<div className="absolute inset-0 z-0">
<img alt="Private Interior" className="w-full h-full object-cover opacity-20 grayscale" src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-zinc-950"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
<h2 className="text-4xl md:text-6xl text-white tracking-tight font-medium mb-6">The Inner Sanctum</h2>
<p className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed">Where legends shed their armor and reclaim their humanity.</p>
<p className="text-xs uppercase tracking-widest text-zinc-500">Wine Cellar • Hookah Lounge • Brewing Experience</p>
</div>
</div>

<div className="max-w-5xl mx-auto px-6 py-24 border-t border-white/5">
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<iconify-icon className="text-white mb-6" height="24" icon="solar:eye-closed-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-white mb-3">Absolute Privacy</h3>
<p className="text-sm text-zinc-500 leading-relaxed">No phones allowed in dining areas. Staff sign NDAs. Your presence here is known only to those you choose to tell.</p>
</div>
<div className="p-8 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<iconify-icon className="text-white mb-6" height="24" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-white mb-3">Family &amp; Connection</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Designed for you to reconnect with your loved ones without pressure. No autographs, no interviews.</p>
</div>
<div className="p-8 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<iconify-icon className="text-white mb-6" height="24" icon="solar:hand-shake-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-white mb-3">Genuine Hospitality</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Our staff serves you, not your status. We provide care in your most vulnerable moments, without expectation.</p>
</div>
</div>
</div>
<div className="text-center py-24 border-t border-white/5">
<button className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-zinc-950 bg-white rounded-full hover:opacity-90 transition-opacity gap-2">
                    Submit Private Inquiry
                    <iconify-icon height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="modal-overlay fixed inset-0 z-[100] bg-zinc-950/80 backdrop-blur-xl overflow-y-auto" id="membershipModal">
<div className="modal-content min-h-screen flex items-center justify-center p-4 md:p-8">
<button className="fixed top-6 right-6 md:top-8 md:right-8 z-50 w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors text-white" id="closeMembershipModal">
<iconify-icon height="24" icon="solar:close-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<div className="w-full max-w-xl bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 relative overflow-hidden">
<div className="text-center mb-10">
<h2 className="text-2xl font-medium tracking-tight text-white">Membership Inquiry</h2>
<p className="text-sm text-zinc-500 mt-2">Join the inner circle.</p>
</div>
<form className="space-y-5" id="membershipForm">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400">First Name</label>
<input className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white/30 focus:bg-black/40 transition-colors" placeholder="John" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400">Last Name</label>
<input className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white/30 focus:bg-black/40 transition-colors" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400">Email Address</label>
<input className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white/30 focus:bg-black/40 transition-colors" placeholder="john@example.com" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400">Membership Type</label>
<div className="relative">
<select className="w-full appearance-none bg-black/20 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white/30 focus:bg-black/40 transition-colors" id="membershipType" required="">
<option className="bg-zinc-900 text-zinc-500" value="">Select tier</option>
<option className="bg-zinc-900 text-white" value="legacy">Legacy (Retired &amp; Alumni)</option>
<option className="bg-zinc-900 text-white" value="active">Active Elite (Current Roster)</option>
<option className="bg-zinc-900 text-white" value="family">Family (Support System)</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</div>
<button className="w-full mt-8 bg-white text-zinc-950 font-medium text-sm py-3 rounded-lg hover:opacity-90 transition-opacity" type="submit">
                        Submit Application
                    </button>
<p className="text-[10px] text-zinc-600 text-center mt-4">All communications are strictly confidential.</p>
</form>
<div className="hidden text-center py-8" id="successMessage">
<iconify-icon className="text-white mb-4" height="48" icon="solar:check-circle-linear" strokeWidth="1.5" width="48"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Request Received</h3>
<p className="text-sm text-zinc-500 mb-6">Our concierge will review your inquiry and contact you shortly.</p>
<button className="px-6 py-2 bg-white/10 text-white text-sm rounded-lg hover:bg-white/20 transition-colors" id="closeSuccessBtn">Close</button>
</div>
</div>
</div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/60 backdrop-blur-md transition-all duration-300" id="navbar">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#ethos">The Vow</a>
<a className="hover:text-white transition-colors" href="#history">Legacy</a>
</div>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
<a className="text-lg font-medium tracking-tight text-white hover:opacity-80 transition-opacity" href="#">MST</a>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#menu">Dining</a>
<a className="hover:text-white transition-colors" href="#private-dining">Private</a>
<button className="hover:bg-white hover:text-black transition-colors text-white border-white/10 border rounded-full pt-1.5 pr-4 pb-1.5 pl-4" id="navMembershipBtn">Apply</button>
</div>
<button className="md:hidden text-zinc-400 hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Atmosphere" className="w-full h-full object-cover opacity-10 grayscale" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80" style={{filter: 'blur(2px) grayscale(100%)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
<div className="inline-flex gap-2 text-[10px] uppercase text-zinc-500 tracking-widest border-white/5 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                Detroit • Grand Rapids
            </div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-medium text-white tracking-tight mb-6">Cape for Bonke</h1>
<p className="text-base md:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed mb-10">
                A restorative sanctuary for the legends who gave their bodies to the game, and the families who stood by them.
            </p>
<button className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-zinc-950 bg-white rounded-full hover:bg-zinc-200 transition-colors" onclick="document.getElementById('navMembershipBtn').click()">
                Request Access
            </button>
</div>
<div className="absolute bottom-12 right-12 hidden md:block">
<div className="relative w-24 h-24 flex items-center justify-center cursor-pointer group">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-zinc-950 group-hover:bg-white group-hover:text-black text-white transition-colors duration-500 z-10">
<iconify-icon height="20" icon="solar:shield-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<svg className="animate-spin-slow absolute inset-0 w-full h-full text-zinc-600" viewbox="0 0 100 100">
<path d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" id="circlePath"></path>
<text className="text-[8.5px] uppercase tracking-widest font-medium" fill="currentColor">
<textpath href="#circlePath"> • For The Legends • Since 2026</textpath>
</text>
</svg>
</div>
</div>
</header>

<section className="py-32 relative bg-zinc-950 border-t border-white/5" id="mission">
<div className="max-w-4xl mx-auto px-6 text-center">
<p className="text-3xl md:text-5xl lg:text-6xl text-white tracking-tight font-medium leading-[1.2]" id="revealText">
                For decades, you gave us your Sundays. You gave us your knees, your backs, and your youth. The world cheered while you bled. This is sanctuary for you and yours.
            </p>
</div>
</section>

<section className="py-32 relative border-t border-white/5" id="ethos">
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-xs font-medium tracking-widest uppercase text-zinc-500 mb-4 block">The Silent Vow</span>
<h2 className="text-4xl md:text-5xl text-white tracking-tight font-medium mb-8">More Than A Tavern.<br/><span className="text-zinc-600">A Sanctuary.</span></h2>
<div className="space-y-6 text-zinc-400 text-sm leading-relaxed pr-8">
<p>In the roar of the arena, you were warriors defined by output. But when the jersey comes off, the human remains. Society tells athletes to bury the struggle. We understand the toll that takes on the mind—and the home.</p>
<p>Here, there are no cameras. No press. Just the shared understanding of those who have carried the weight of a city's expectations. We provide the comfort you were denied in the public eye.</p>
</div>
<div className="mt-12 flex items-center gap-12">
<div>
<span className="text-3xl font-medium tracking-tight text-white block">100%</span>
<span className="text-[10px] uppercase tracking-widest text-zinc-500 mt-1 block">Privacy Guaranteed</span>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div>
<span className="text-3xl font-medium tracking-tight text-white block">Zero</span>
<span className="text-[10px] uppercase tracking-widest text-zinc-500 mt-1 block">Judgement</span>
</div>
</div>
</div>
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-b from-white/10 to-transparent rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition duration-1000"></div>
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900">
<img alt="Locker Room" className="w-full h-full object-cover opacity-60 grayscale group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative border-t border-white/5" id="history">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20">
<div>
<span className="text-xs font-medium tracking-widest uppercase text-zinc-500 mb-4 block">Heritage</span>
<h2 className="text-4xl text-white tracking-tight font-medium">The Shoulders We Stand On.</h2>
</div>
<p className="text-zinc-500 text-sm max-w-xs mt-4 md:mt-0">We honor the sacrifice, not just the score.</p>
</div>
<div className="grid md:grid-cols-12 gap-8">
<div className="md:col-span-7 aspect-[16/9] rounded-2xl overflow-hidden relative border border-white/5 group">
<img alt="Heritage 1" className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-80 transition-all duration-700" src="https://images.unsplash.com/photo-1510076857177-7470076d4098?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<h3 className="text-white font-medium tracking-tight text-xl mb-1">The Grind</h3>
<p className="text-xs text-zinc-400">Blue collar resilience.</p>
</div>
</div>
<div className="md:col-span-5 aspect-[16/9] md:aspect-auto rounded-2xl overflow-hidden relative border border-white/5 bg-zinc-900/30 p-8 flex flex-col justify-end">
<div className="absolute top-8 left-8">
<iconify-icon className="text-white/20" height="32" icon="solar:quote-left-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<p className="text-lg text-zinc-300 leading-relaxed mb-4 font-medium tracking-tight">They asked for our bodies. We gave them. Now, we reclaim our peace.</p>
<span className="text-[10px] uppercase tracking-widest text-zinc-500">— Anonymous '04 Champion</span>
</div>
</div>
</div>
</section>

<section className="py-32 relative border-t border-white/5" id="menu">
<div className="max-w-4xl mx-auto px-6 text-center">
<span className="text-xs font-medium tracking-widest uppercase text-zinc-500 mb-4 block">Nourishment</span>
<h2 className="text-4xl text-white tracking-tight font-medium mb-6">Comfort for the Soul</h2>
<p className="text-zinc-400 text-sm mb-16 max-w-lg mx-auto leading-relaxed">Food is more than fuel; it is memory. Our menu is designed not for performance, but for pleasure. Rich, hearty, and unapologetic.</p>
<div className="grid md:grid-cols-2 gap-x-12 gap-y-8 text-left mb-16">
<div className="border-b border-white/5 pb-4">
<div className="flex justify-between items-baseline mb-1">
<h4 className="text-sm font-medium text-white tracking-tight">Brick Oven Chicken</h4>
<span className="text-sm text-zinc-500">34</span>
</div>
<p className="text-xs text-zinc-500">Crispy potato, broccolini, garlic, chiles, jus.</p>
</div>
<div className="border-b border-white/5 pb-4">
<div className="flex justify-between items-baseline mb-1">
<h4 className="text-sm font-medium text-white tracking-tight">The 35 Day Ribeye</h4>
<span className="text-sm text-zinc-500">68</span>
</div>
<p className="text-xs text-zinc-500">Bone-in, truffle butter, roasted garlic.</p>
</div>
<div className="border-b border-white/5 pb-4">
<div className="flex justify-between items-baseline mb-1">
<h4 className="text-sm font-medium text-white tracking-tight">Heritage Pork Chop</h4>
<span className="text-sm text-zinc-500">42</span>
</div>
<p className="text-xs text-zinc-500">Apple cider brine, mustard greens, bacon lardon.</p>
</div>
<div className="border-b border-white/5 pb-4">
<div className="flex justify-between items-baseline mb-1">
<h4 className="text-sm font-medium text-white tracking-tight">Lobster Mac</h4>
<span className="text-sm text-zinc-500">28</span>
</div>
<p className="text-xs text-zinc-500">Aged cheddar, gruyere, butter poached tail.</p>
</div>
</div>
<button className="inline-flex items-center gap-2 text-xs font-medium text-white uppercase tracking-widest hover:text-zinc-300 transition-colors" id="openMenuModalBtn">
                View Full Menu
                <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</section>

<section className="py-32 relative border-t border-white/5" id="membership">
<div className="max-w-6xl mx-auto px-6 text-center">
<h2 className="text-4xl text-white tracking-tight font-medium mb-6">The Inner Circle</h2>
<p className="text-zinc-400 text-sm max-w-2xl mx-auto leading-relaxed mb-16">Membership is earned through contribution to the culture of sports. We prioritize retired athletes, active roster players, and their support systems.</p>
<div className="grid md:grid-cols-3 gap-6 text-left">

<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col justify-between hover:bg-white/[0.04] transition-colors group">
<div>
<h3 className="text-lg font-medium text-white mb-1">Legacy</h3>
<p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-6">Retired &amp; Alumni</p>
<p className="text-sm text-zinc-400 mb-8">For those who have hung up the cleats but still carry the spirit.</p>
</div>
<button className="membership-trigger w-full py-2.5 rounded-lg border border-white/10 text-xs font-medium text-white hover:bg-white/10 transition-colors" data-tier="legacy">Inquire</button>
</div>

<div className="p-8 rounded-2xl border border-white/20 bg-white/[0.04] flex flex-col justify-between hover:bg-white/[0.06] transition-colors relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[50px] pointer-events-none"></div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-white mb-1">Active Elite</h3>
<p className="text-[10px] uppercase tracking-widest text-white/70 mb-6">Current Roster</p>
<p className="text-sm text-zinc-400 mb-8">A safe haven during the season. Priority access and absolute discretion.</p>
</div>
<button className="membership-trigger relative z-10 w-full py-2.5 rounded-lg bg-white text-zinc-950 text-xs font-medium hover:opacity-90 transition-opacity" data-tier="active">Verify Status</button>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col justify-between hover:bg-white/[0.04] transition-colors group">
<div>
<h3 className="text-lg font-medium text-white mb-1">Family</h3>
<p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-6">Support System</p>
<p className="text-sm text-zinc-400 mb-8">For the spouses, parents, and children who support the legends through every battle.</p>
</div>
<button className="membership-trigger w-full py-2.5 rounded-lg border border-white/10 text-xs font-medium text-white hover:bg-white/10 transition-colors" data-tier="family">Join Family</button>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-zinc-950 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
<span className="text-2xl font-medium tracking-tight text-white mb-8">MST</span>
<div className="flex flex-wrap justify-center gap-8 text-xs font-medium text-zinc-500 mb-12">
<a className="hover:text-white transition-colors" href="#">Press</a>
<a className="hover:text-white transition-colors" href="#">Private Events</a>
<a className="hover:text-white transition-colors text-white" href="#" id="openPrivacyFooterBtn">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Member Portal</a>
</div>
<p className="text-[10px] text-zinc-700 uppercase tracking-widest">© 2024 Migliaccio Serenity Tavern. Detroit.</p>
</div>
</footer>


    </>
  );
}
