import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Scroll Reveal Animation
        const revealElements = document.querySelectorAll('.reveal');
        const revealOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

        const revealOnScroll = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            });
        }, revealOptions);

        revealElements.forEach(el => revealOnScroll.observe(el));

        // Sticky Nav & Mobile Sticky CTA logic
        const navbar = document.getElementById('navbar');
        const mobileCta = document.getElementById('mobile-sticky-cta');
        const heroSection = document.querySelector('section');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('py-[-10px]', 'shadow-md');
                // Optional: make nav slightly smaller on scroll
            } else {
                navbar.classList.remove('py-[-10px]', 'shadow-md');
            }

            // Show mobile CTA after scrolling past hero
            if (window.scrollY > heroSection.offsetHeight * 0.5) {
                mobileCta.classList.remove('translate-y-full');
            } else {
                mobileCta.classList.add('translate-y-full');
            }
        });

        // Mobile Menu Toggle
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileClose = document.getElementById('mobile-close');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMobileMenu() {
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.remove('hidden');
                setTimeout(() => {
                    mobileMenu.classList.remove('opacity-0');
                    document.body.style.overflow = 'hidden';
                }, 10);
            } else {
                mobileMenu.classList.add('opacity-0');
                document.body.style.overflow = '';
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                }, 300);
            }
        }

        mobileBtn.addEventListener('click', toggleMobileMenu);
        mobileClose.addEventListener('click', toggleMobileMenu);
        mobileLinks.forEach(link => link.addEventListener('click', toggleMobileMenu));

        // FAQ Accordion
        function toggleFaq(element) {
            const parent = element.parentElement;
            const allItems = document.querySelectorAll('.faq-item');
            
            // Close others
            allItems.forEach(item => {
                if (item !== parent && item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            });
            
            // Toggle current
            parent.classList.toggle('active');
        }

        // Room Selection Link to Form
        function selectRoom(roomName) {
            const select = document.getElementById('room-select');
            for(let i=0; i < select.options.length; i++) {
                if(select.options[i].value === roomName) {
                    select.selectedIndex = i;
                    break;
                }
            }
            document.getElementById('enquire').scrollIntoView({ behavior: 'smooth' });
            
            // Highlight step 2 slightly logic could go here
        }

        // Multi-step Form Logic
        let currentStep = 1;
        const totalSteps = 3;

        function updateProgress() {
            const progressBar = document.getElementById('progress-bar');
            const indicators = document.querySelectorAll('.step-indicator');
            
            // Update bar width
            const percentage = ((currentStep - 1) / (totalSteps - 1)) * 100;
            progressBar.style.width = percentage + '%';

            // Update indicators
            indicators.forEach((ind, index) => {
                if (index + 1 < currentStep) {
                    ind.className = 'w-8 h-8 rounded-full bg-gold text-black flex items-center justify-center text-sm font-medium step-indicator transition-colors duration-300';
                    ind.innerHTML = '<iconify-icon icon="solar:check-linear" width="16"></iconify-icon>';
                } else if (index + 1 === currentStep) {
                    ind.className = 'w-8 h-8 rounded-full bg-gold text-black flex items-center justify-center text-sm font-medium step-indicator transition-colors duration-300 shadow-[0_0_15px_rgba(197,160,89,0.3)]';
                    ind.innerHTML = currentStep;
                } else {
                    ind.className = 'w-8 h-8 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-[#555] flex items-center justify-center text-sm font-medium step-indicator transition-colors duration-300';
                    ind.innerHTML = index + 1;
                }
            });
        }

        function validateStep(stepNum) {
            const step = document.getElementById(`step-${stepNum}`);
            const inputs = step.querySelectorAll('input[required], select[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value) {
                    isValid = false;
                    input.classList.add('border-red-900', 'bg-red-900/10');
                    input.addEventListener('input', function removeError() {
                        this.classList.remove('border-red-900', 'bg-red-900/10');
                        this.removeEventListener('input', removeError);
                    }, {once: true});
                }
            });
            return isValid;
        }

        function nextStep(step) {
            if (step > currentStep && !validateStep(currentStep)) return; // Prevent moving forward if invalid
            
            document.getElementById(`step-${currentStep}`).classList.remove('active');
            document.getElementById(`step-${currentStep}`).classList.add('previous');
            
            currentStep = step;
            
            const newStep = document.getElementById(`step-${currentStep}`);
            newStep.classList.remove('previous');
            newStep.classList.add('active');
            
            updateProgress();
        }

        function prevStep(step) {
            document.getElementById(`step-${currentStep}`).classList.remove('active');
            currentStep = step;
            
            const newStep = document.getElementById(`step-${currentStep}`);
            newStep.classList.remove('previous');
            newStep.classList.add('active');
            
            updateProgress();
        }

        function submitForm(e) {
            e.preventDefault();
            if (!validateStep(3)) return;

            const btn = document.getElementById('submit-btn');
            const originalText = btn.innerHTML;
            
            // Fake loading state
            btn.innerHTML = '<iconify-icon icon="solar:spinner-linear" width="20" class="animate-spin"></iconify-icon> Processing...';
            btn.classList.add('opacity-80', 'cursor-not-allowed');

            setTimeout(() => {
                // Show success
                document.getElementById('step-3').classList.remove('active');
                document.getElementById('form-progress').classList.add('hidden');
                const successState = document.getElementById('form-success');
                successState.classList.remove('hidden');
                
                // Small delay to allow display block to render before opacity transition
                setTimeout(() => {
                    successState.classList.remove('opacity-0');
                }, 50);

                // Reset button for future
                btn.innerHTML = originalText;
                btn.classList.remove('opacity-80', 'cursor-not-allowed');
            }, 1500);
        }

        function resetForm() {
            document.getElementById('booking-form').reset();
            const successState = document.getElementById('form-success');
            successState.classList.add('opacity-0');
            
            setTimeout(() => {
                successState.classList.add('hidden');
                document.getElementById('form-progress').classList.remove('hidden');
                currentStep = 1;
                
                document.querySelectorAll('.form-step').forEach(s => {
                    s.classList.remove('active', 'previous');
                });
                document.getElementById('step-1').classList.add('active');
                updateProgress();
            }, 500);
        }

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 glass-nav transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-24">

<a className="font-serif tracking-widest text-2xl font-medium text-white uppercase flex items-center gap-2" href="#">
<span className="w-2 h-2 rounded-full bg-gold"></span>
                AURA
            </a>

<nav className="hidden md:flex gap-8 items-center text-sm tracking-wide text-[#a19f9a] font-light">
<a className="hover:text-white transition-colors" href="#spaces">Spaces</a>
<a className="hover:text-white transition-colors" href="#menus">Menus</a>
<a className="hover:text-white transition-colors" href="#packages">Packages</a>
<a className="hover:text-white transition-colors" href="#gallery">Gallery</a>
<a className="btn-primary px-6 py-2.5 rounded-sm font-medium tracking-wide" href="#enquire">Enquire Now</a>
</nav>

<button aria-label="Toggle Menu" className="md:hidden text-white p-2" id="mobile-menu-btn">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>

<div className="fixed inset-0 bg-[#0a0a0a] z-40 hidden flex-col justify-center items-center gap-8 text-lg font-serif tracking-widest opacity-0 transition-opacity duration-300" id="mobile-menu">
<button className="absolute top-8 right-8 text-white p-2" id="mobile-close">
<iconify-icon height="32" icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
<a className="mobile-link text-white hover:text-gold transition-colors" href="#spaces">Private Spaces</a>
<a className="mobile-link text-white hover:text-gold transition-colors" href="#menus">Curated Menus</a>
<a className="mobile-link text-white hover:text-gold transition-colors" href="#packages">Event Packages</a>
<a className="mobile-link text-white hover:text-gold transition-colors" href="#gallery">The Gallery</a>
<a className="mobile-link btn-primary px-8 py-3 mt-4 rounded-sm font-sans font-medium text-sm" href="#enquire">Start Planning</a>
</div>
</header>

<section className="relative h-[100svh] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[#0a0a0a]">

<img alt="Luxury Private Dining Table" className="w-full h-full object-cover opacity-40 scale-105" id="hero-img" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#0a0a0a]"></div>
</div>
<div className="relative z-10 text-center max-w-4xl px-6 flex flex-col items-center mt-12">
<span className="text-gold uppercase tracking-[0.2em] text-xs font-medium mb-6 reveal">Exclusive Events</span>
<h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1] mb-6 reveal delay-100">
                Private Dining, Designed for Memorable Gatherings
            </h1>
<p className="text-[#a19f9a] text-base md:text-lg font-light max-w-2xl mx-auto mb-10 leading-relaxed reveal delay-200">
                From intimate celebrations to polished corporate dinners, enjoy tailored menus, refined spaces, and seamless hospitality. Ideal for birthdays, anniversaries, and business hosting.
            </p>
<div className="flex flex-col sm:flex-row gap-4 reveal delay-300">
<a className="btn-primary px-8 py-4 rounded-sm font-medium tracking-wide flex items-center justify-center gap-2" href="#enquire">
                    Enquire Now
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="btn-outline px-8 py-4 rounded-sm font-medium tracking-wide flex items-center justify-center bg-black/20 backdrop-blur-sm" href="#spaces">
                    Explore Private Rooms
                </a>
</div>
</div>

<a className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors flex flex-col items-center gap-2 reveal delay-300" href="#intro">
<span className="text-xs tracking-widest uppercase">Scroll to Discover</span>
<iconify-icon className="animate-bounce" icon="solar:arrow-down-linear" width="20"></iconify-icon>
</a>
</section>

<section className="py-24 md:py-32 relative bg-[#0a0a0a]" id="intro">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="reveal">
<span className="text-gold uppercase tracking-[0.2em] text-xs font-medium mb-4 block">The Experience</span>
<h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
                        An Exceptional Setting for Private Events
                    </h2>
<p className="text-[#a19f9a] text-base font-light mb-6 leading-relaxed">
                        At Aura, a private event is more than just a reservation—it is a carefully orchestrated experience. We combine cinematic atmospheres, world-class culinary execution, and anticipatory service to create moments that linger long after the final toast.
                    </p>
<p className="text-[#a19f9a] text-base font-light mb-8 leading-relaxed">
                        Whether you are hosting a high-stakes executive dinner, an intimate engagement, or a milestone birthday, our dedicated events team ensures every detail is flawlessly executed.
                    </p>
<img alt="Details" className="w-full h-48 object-cover rounded-sm grayscale opacity-70 md:hidden mt-8" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative hidden md:block reveal delay-100 img-zoom-container rounded-sm">
<img alt="Fine dining preparation" className="w-full h-[600px] object-cover img-zoom rounded-sm opacity-90" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 border border-white/10 m-4 rounded-sm pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#121212] border-y border-[#1a1a1a]">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Crafted For Every Occasion</h2>
<p className="text-[#a19f9a] font-light">Tailored environments and menus suited for life's most important gatherings.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-sm group reveal cursor-default">
<div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-black transition-colors duration-300">
<iconify-icon icon="solar:gift-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-white mb-3">Birthday Celebrations</h3>
<p className="text-[#a19f9a] text-sm font-light leading-relaxed">Intimate or grand, celebrate milestones with bespoke menus and dedicated service in a stunning setting.</p>
</div>

<div className="glass-card p-8 rounded-sm group reveal delay-100 cursor-default">
<div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-black transition-colors duration-300">
<iconify-icon icon="solar:buildings-2-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-white mb-3">Corporate Dining</h3>
<p className="text-[#a19f9a] text-sm font-light leading-relaxed">Impress clients or host executive board dinners with polished hospitality, privacy, and refined cuisine.</p>
</div>

<div className="glass-card p-8 rounded-sm group reveal delay-200 cursor-default">
<div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-black transition-colors duration-300">
<iconify-icon icon="solar:hearts-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-white mb-3">Anniversaries &amp; Engagements</h3>
<p className="text-[#a19f9a] text-sm font-light leading-relaxed">Romantic, candlelit spaces designed for significant moments, complete with sommelier wine pairings.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#0a0a0a]" id="spaces">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center mb-20 reveal">
<span className="text-gold uppercase tracking-[0.2em] text-xs font-medium mb-4 block">The Venues</span>
<h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-white">Exclusive Spaces</h2>
</div>
<div className="space-y-24 md:space-y-32">

<div className="grid md:grid-cols-2 gap-12 items-center reveal">
<div className="img-zoom-container rounded-sm h-[400px] md:h-[500px]">
<img alt="The Emerald Room" className="w-full h-full object-cover img-zoom opacity-90" src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="md:pl-12">
<h3 className="font-serif text-3xl text-white mb-4">The Emerald Room</h3>
<p className="text-[#a19f9a] font-light mb-6">An intimate and sophisticated fully private room ideal for elegant dinners and executive gatherings. Features deep green velvet accents, a private marble fireplace, and dedicated service staff.</p>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="flex items-center gap-3 text-sm text-[#d1cfca]">
<iconify-icon className="text-gold" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
                                Up to 18 Guests
                            </div>
<div className="flex items-center gap-3 text-sm text-[#d1cfca]">
<iconify-icon className="text-gold" icon="solar:shield-keyhole-linear" width="20"></iconify-icon>
                                Fully Private
                            </div>
<div className="flex items-center gap-3 text-sm text-[#d1cfca]">
<iconify-icon className="text-gold" icon="solar:monitor-linear" width="20"></iconify-icon>
                                AV Available
                            </div>
<div className="flex items-center gap-3 text-sm text-[#d1cfca]">
<iconify-icon className="text-gold" icon="solar:music-note-linear" width="20"></iconify-icon>
                                Custom Audio
                            </div>
</div>
<button className="btn-outline px-6 py-3 rounded-sm text-sm tracking-wide uppercase font-medium" onclick="selectRoom('Emerald Room')">Enquire About This Room</button>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 items-center reveal">
<div className="order-2 md:order-1 md:pr-12">
<h3 className="font-serif text-3xl text-white mb-4">The Terrace Suite</h3>
<p className="text-[#a19f9a] font-light mb-6">A refined semi-private setting with natural light during the day and a sultry, contemporary ambiance by night. Perfect for larger social celebrations and cocktail receptions.</p>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="flex items-center gap-3 text-sm text-[#d1cfca]">
<iconify-icon className="text-gold" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
                                Up to 40 Guests
                            </div>
<div className="flex items-center gap-3 text-sm text-[#d1cfca]">
<iconify-icon className="text-gold" icon="solar:eye-scan-linear" width="20"></iconify-icon>
                                Semi-Private
                            </div>
<div className="flex items-center gap-3 text-sm text-[#d1cfca]">
<iconify-icon className="text-gold" icon="solar:wineglass-linear" width="20"></iconify-icon>
                                Private Bar Access
                            </div>
<div className="flex items-center gap-3 text-sm text-[#d1cfca]">
<iconify-icon className="text-gold" icon="solar:armchair-linear" width="20"></iconify-icon>
                                Lounge Seating
                            </div>
</div>
<button className="btn-outline px-6 py-3 rounded-sm text-sm tracking-wide uppercase font-medium" onclick="selectRoom('Terrace Suite')">Enquire About This Room</button>
</div>
<div className="img-zoom-container rounded-sm h-[400px] md:h-[500px] order-1 md:order-2">
<img alt="The Terrace Suite" className="w-full h-full object-cover img-zoom opacity-90" src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-[#121212] border-t border-[#1a1a1a]">
<div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8 reveal">
<div>
<h3 className="font-serif text-2xl text-white mb-2">Flexible Configurations</h3>
<p className="text-[#a19f9a] text-sm font-light">We adapt our spaces to suit the rhythm of your event.</p>
</div>
<div className="flex flex-wrap gap-8">
<div className="flex items-center gap-4 border-l border-[#2a2a2a] pl-6">
<iconify-icon className="text-[#555]" icon="solar:sofa-linear" width="32"></iconify-icon>
<div>
<span className="block text-white text-sm font-medium">Seated Dinner</span>
<span className="block text-xs text-[#a19f9a] uppercase tracking-wider">Up to 30</span>
</div>
</div>
<div className="flex items-center gap-4 border-l border-[#2a2a2a] pl-6">
<iconify-icon className="text-[#555]" icon="solar:glass-water-linear" width="32"></iconify-icon>
<div>
<span className="block text-white text-sm font-medium">Cocktail Reception</span>
<span className="block text-xs text-[#a19f9a] uppercase tracking-wider">Up to 50</span>
</div>
</div>
<div className="flex items-center gap-4 border-l border-[#2a2a2a] pl-6">
<iconify-icon className="text-[#555]" icon="solar:table-linear" width="32"></iconify-icon>
<div>
<span className="block text-white text-sm font-medium">Boardroom Setup</span>
<span className="block text-xs text-[#a19f9a] uppercase tracking-wider">Up to 16</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#0a0a0a]" id="packages">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<span className="text-gold uppercase tracking-[0.2em] text-xs font-medium mb-4 block">Curated Menus</span>
<h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">Event Packages</h2>
<p className="text-[#a19f9a] font-light">Carefully designed dining experiences featuring seasonal ingredients and exquisite presentation.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="glass-card p-8 rounded-sm flex flex-col reveal">
<h3 className="font-serif text-2xl text-white mb-2">The Classic</h3>
<p className="text-[#a19f9a] text-sm font-light mb-6 min-h-[40px]">Perfect for relaxed social gatherings and family celebrations.</p>
<div className="text-3xl text-white font-medium mb-8">From $125<span className="text-sm text-[#a19f9a] font-light">/pp</span></div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm text-[#d1cfca] font-light">
<iconify-icon className="text-gold mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            3-Course Set Menu
                        </li>
<li className="flex items-start gap-3 text-sm text-[#d1cfca] font-light">
<iconify-icon className="text-gold mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Glass of Champagne on arrival
                        </li>
<li className="flex items-start gap-3 text-sm text-[#d1cfca] font-light">
<iconify-icon className="text-gold mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Still &amp; Sparkling Water
                        </li>
<li className="flex items-start gap-3 text-sm text-[#d1cfca] font-light">
<iconify-icon className="text-gold mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Standard Table Styling
                        </li>
</ul>
<a className="btn-outline w-full py-3 rounded-sm text-center text-sm uppercase tracking-wide font-medium" href="#enquire">Select Package</a>
</div>

<div className="glass-card p-8 rounded-sm flex flex-col reveal delay-100 relative overflow-hidden border-gold/30">
<div className="absolute top-4 right-4 text-xs bg-gold text-black px-2 py-1 rounded-sm uppercase tracking-widest font-medium">Popular</div>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>
<h3 className="font-serif text-2xl text-white mb-2">The Executive</h3>
<p className="text-[#a19f9a] text-sm font-light mb-6 min-h-[40px]">Elevated dining designed for client hosting and sophisticated affairs.</p>
<div className="text-3xl text-white font-medium mb-8">From $185<span className="text-sm text-[#a19f9a] font-light">/pp</span></div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm text-[#d1cfca] font-light">
<iconify-icon className="text-gold mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            4-Course Signature Menu
                        </li>
<li className="flex items-start gap-3 text-sm text-[#d1cfca] font-light">
<iconify-icon className="text-gold mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Arrival Canapés (3 per person)
                        </li>
<li className="flex items-start gap-3 text-sm text-[#d1cfca] font-light">
<iconify-icon className="text-gold mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Sommelier Selected Wine Pairing
                        </li>
<li className="flex items-start gap-3 text-sm text-[#d1cfca] font-light">
<iconify-icon className="text-gold mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Personalized Menu Cards
                        </li>
</ul>
<a className="btn-primary w-full py-3 rounded-sm text-center text-sm uppercase tracking-wide font-medium" href="#enquire">Select Package</a>
</div>

<div className="glass-card p-8 rounded-sm flex flex-col reveal delay-200">
<h3 className="font-serif text-2xl text-white mb-2">The Bespoke</h3>
<p className="text-[#a19f9a] text-sm font-light mb-6 min-h-[40px]">A fully customized experience crafted alongside our Executive Chef.</p>
<div className="text-3xl text-white font-medium mb-8">Custom Quote</div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm text-[#d1cfca] font-light">
<iconify-icon className="text-gold mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Tasting Menu (5 to 7 Courses)
                        </li>
<li className="flex items-start gap-3 text-sm text-[#d1cfca] font-light">
<iconify-icon className="text-gold mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Premium Open Bar Package
                        </li>
<li className="flex items-start gap-3 text-sm text-[#d1cfca] font-light">
<iconify-icon className="text-gold mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Celebration Cake Design
                        </li>
<li className="flex items-start gap-3 text-sm text-[#d1cfca] font-light">
<iconify-icon className="text-gold mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Premium Floral Styling
                        </li>
</ul>
<a className="btn-outline w-full py-3 rounded-sm text-center text-sm uppercase tracking-wide font-medium" href="#enquire">Request Quote</a>
</div>
</div>

<p className="text-center text-[#777] text-xs mt-8 font-light reveal">All menus offer full vegetarian, vegan, and specific dietary accommodation upon request.</p>
</div>
</section>

<section className="py-24 bg-[#121212]" id="gallery">
<div className="max-w-[1400px] mx-auto px-4 lg:px-8">
<div className="text-center mb-16 reveal">
<h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-white mb-2">A Glimpse of Aura</h2>
<p className="text-[#a19f9a] font-light">The atmosphere, the details, the culinary craft.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
<div className="img-zoom-container col-span-2 row-span-2 h-[300px] md:h-[600px] rounded-sm reveal">
<img alt="Restaurant Interior" className="w-full h-full object-cover img-zoom" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="img-zoom-container h-[145px] md:h-[292px] rounded-sm reveal delay-100">
<img alt="Wine" className="w-full h-full object-cover img-zoom" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="img-zoom-container h-[145px] md:h-[292px] rounded-sm reveal delay-200">
<img alt="Table Setting" className="w-full h-full object-cover img-zoom" src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="img-zoom-container h-[145px] md:h-[292px] rounded-sm reveal delay-100">
<img alt="Food Plate" className="w-full h-full object-cover img-zoom" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="img-zoom-container h-[145px] md:h-[292px] rounded-sm reveal delay-200">
<img alt="Cocktails" className="w-full h-full object-cover img-zoom" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0a]">
<div className="max-w-3xl mx-auto px-6 lg:px-12">
<div className="text-center mb-16 reveal">
<h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-white mb-2">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">

<div className="faq-item border border-[#2a2a2a] rounded-sm bg-[#121212] reveal cursor-pointer">
<div className="flex justify-between items-center p-6" onclick="toggleFaq(this)">
<h4 className="font-medium text-white text-base">Is there a minimum spend required?</h4>
<iconify-icon className="faq-icon text-[#555] transition-transform duration-300" icon="solar:add-linear" width="24"></iconify-icon>
</div>
<div className="faq-content text-[#a19f9a] text-sm font-light">
<div className="px-6 pb-6 pt-0">
                            Yes, minimum spends vary depending on the day of the week, the specific room selected, and the time of year. Our events team will provide a transparent quote outlining these details upon receiving your enquiry.
                        </div>
</div>
</div>

<div className="faq-item border border-[#2a2a2a] rounded-sm bg-[#121212] reveal cursor-pointer">
<div className="flex justify-between items-center p-6" onclick="toggleFaq(this)">
<h4 className="font-medium text-white text-base">Can you accommodate severe dietary restrictions?</h4>
<iconify-icon className="faq-icon text-[#555] transition-transform duration-300" icon="solar:add-linear" width="24"></iconify-icon>
</div>
<div className="faq-content text-[#a19f9a] text-sm font-light">
<div className="px-6 pb-6 pt-0">
                            Absolutely. Our culinary team is highly experienced in catering to allergies, vegan, vegetarian, and gluten-free requirements. We ask for dietary details at least 7 days prior to your event to ensure a flawless dining experience.
                        </div>
</div>
</div>

<div className="faq-item border border-[#2a2a2a] rounded-sm bg-[#121212] reveal cursor-pointer">
<div className="flex justify-between items-center p-6" onclick="toggleFaq(this)">
<h4 className="font-medium text-white text-base">Do you require a deposit to secure the booking?</h4>
<iconify-icon className="faq-icon text-[#555] transition-transform duration-300" icon="solar:add-linear" width="24"></iconify-icon>
</div>
<div className="faq-content text-[#a19f9a] text-sm font-light">
<div className="px-6 pb-6 pt-0">
                            To secure your desired date and private room, a 30% non-refundable deposit of the minimum spend is required at the time of contract signing. The remaining balance is typically settled on the night of the event.
                        </div>
</div>
</div>

<div className="faq-item border border-[#2a2a2a] rounded-sm bg-[#121212] reveal cursor-pointer">
<div className="flex justify-between items-center p-6" onclick="toggleFaq(this)">
<h4 className="font-medium text-white text-base">Can we bring our own celebration cake?</h4>
<iconify-icon className="faq-icon text-[#555] transition-transform duration-300" icon="solar:add-linear" width="24"></iconify-icon>
</div>
<div className="faq-content text-[#a19f9a] text-sm font-light">
<div className="px-6 pb-6 pt-0">
                            You are welcome to bring an outside cake. Please note that a "cakeage" fee of $8 per person applies for our team to cut, plate, and serve it. Alternatively, our pastry chef can design a bespoke cake for your occasion.
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#121212] relative overflow-hidden" id="enquire">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
<div className="text-center mb-12 reveal">
<span className="text-gold uppercase tracking-[0.2em] text-xs font-medium mb-4 block">Booking Request</span>
<h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">Start Planning Your Event</h2>
<p className="text-[#a19f9a] font-light max-w-2xl mx-auto">Share a few details below, and our dedicated events team will be in touch shortly with availability, bespoke recommendations, and a tailored proposal.</p>
</div>

<div className="glass-card rounded-md p-6 md:p-12 relative min-h-[500px] overflow-hidden reveal">

<div className="flex justify-between mb-8 relative px-2" id="form-progress">
<div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#2a2a2a] -z-10 -translate-y-1/2"></div>
<div className="absolute top-1/2 left-0 h-[1px] bg-gold -z-10 -translate-y-1/2 transition-all duration-500" id="progress-bar" style={{width: '0%'}}></div>
<div className="flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gold text-black flex items-center justify-center text-sm font-medium step-indicator">1</div>
<span className="text-[10px] uppercase tracking-wider text-gold hidden sm:block">Details</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-[#555] flex items-center justify-center text-sm font-medium step-indicator transition-colors duration-300">2</div>
<span className="text-[10px] uppercase tracking-wider text-[#555] hidden sm:block">Event</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-[#555] flex items-center justify-center text-sm font-medium step-indicator transition-colors duration-300">3</div>
<span className="text-[10px] uppercase tracking-wider text-[#555] hidden sm:block">Menu</span>
</div>
</div>
<form id="booking-form" onsubmit="submitForm(event)">

<div className="form-step active" id="step-1">
<div className="grid md:grid-cols-2 gap-6 mb-8">
<div>
<label className="block text-xs uppercase tracking-wider text-[#a19f9a] mb-2 ml-1">First Name *</label>
<input className="w-full custom-input px-4 py-3 rounded-sm text-sm" placeholder="James" required="" type="text"/>
</div>
<div>
<label className="block text-xs uppercase tracking-wider text-[#a19f9a] mb-2 ml-1">Last Name *</label>
<input className="w-full custom-input px-4 py-3 rounded-sm text-sm" placeholder="Bond" required="" type="text"/>
</div>
<div>
<label className="block text-xs uppercase tracking-wider text-[#a19f9a] mb-2 ml-1">Email Address *</label>
<input className="w-full custom-input px-4 py-3 rounded-sm text-sm" placeholder="james@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs uppercase tracking-wider text-[#a19f9a] mb-2 ml-1">Phone Number *</label>
<input className="w-full custom-input px-4 py-3 rounded-sm text-sm" placeholder="+1 (555) 000-0000" required="" type="tel"/>
</div>
<div className="md:col-span-2">
<label className="block text-xs uppercase tracking-wider text-[#a19f9a] mb-2 ml-1">Company Name (Optional)</label>
<input className="w-full custom-input px-4 py-3 rounded-sm text-sm" placeholder="If booking for a corporate event" type="text"/>
</div>
</div>
<div className="flex justify-end">
<button className="btn-primary px-8 py-3 rounded-sm text-sm tracking-wide font-medium flex items-center gap-2" onclick="nextStep(2)" type="button">
                                Continue <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="form-step" id="step-2">
<div className="grid md:grid-cols-2 gap-6 mb-8">
<div>
<label className="block text-xs uppercase tracking-wider text-[#a19f9a] mb-2 ml-1">Event Type *</label>
<div className="relative">
<select className="w-full custom-input px-4 py-3 rounded-sm text-sm appearance-none cursor-pointer" required="">
<option className="bg-neutral-900" disabled="" selected="" value="">Select Occasion</option>
<option className="bg-neutral-900" value="birthday">Birthday Celebration</option>
<option className="bg-neutral-900" value="corporate">Corporate Dinner</option>
<option className="bg-neutral-900" value="anniversary">Anniversary / Engagement</option>
<option className="bg-neutral-900" value="other">Other Gathering</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555] pointer-events-none" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs uppercase tracking-wider text-[#a19f9a] mb-2 ml-1">Number of Guests *</label>
<div className="relative">
<select className="w-full custom-input px-4 py-3 rounded-sm text-sm appearance-none cursor-pointer" required="">
<option className="bg-neutral-900" disabled="" selected="" value="">Estimated Count</option>
<option className="bg-neutral-900" value="1-10">1 to 10 Guests</option>
<option className="bg-neutral-900" value="11-20">11 to 20 Guests</option>
<option className="bg-neutral-900" value="21-30">21 to 30 Guests</option>
<option className="bg-neutral-900" value="31+">31+ Guests</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555] pointer-events-none" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs uppercase tracking-wider text-[#a19f9a] mb-2 ml-1">Preferred Date *</label>
<input className="w-full custom-input px-4 py-3 rounded-sm text-sm text-[#d1cfca]" required="" type="date"/>
</div>
<div>
<label className="block text-xs uppercase tracking-wider text-[#a19f9a] mb-2 ml-1">Preferred Room</label>
<div className="relative">
<select className="w-full custom-input px-4 py-3 rounded-sm text-sm appearance-none cursor-pointer" id="room-select">
<option className="bg-neutral-900" value="Any">Any Available Space</option>
<option className="bg-neutral-900" value="Emerald Room">The Emerald Room (Up to 18)</option>
<option className="bg-neutral-900" value="Terrace Suite">The Terrace Suite (Up to 40)</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555] pointer-events-none" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
</div>
<div className="flex justify-between">
<button className="text-[#a19f9a] hover:text-white transition-colors text-sm font-medium" onclick="prevStep(1)" type="button">Back</button>
<button className="btn-primary px-8 py-3 rounded-sm text-sm tracking-wide font-medium flex items-center gap-2" onclick="nextStep(3)" type="button">
                                Continue <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="form-step" id="step-3">
<div className="mb-6">
<label className="block text-xs uppercase tracking-wider text-[#a19f9a] mb-3 ml-1">Package Interest</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<label className="cursor-pointer">
<input className="peer sr-only" name="package" type="radio" value="classic"/>
<div className="border border-[#2a2a2a] bg-[#1a1a1a] rounded-sm p-4 text-center peer-checked:border-gold peer-checked:bg-gold/5 transition-all">
<span className="block text-sm text-white mb-1">The Classic</span>
<span className="block text-xs text-[#777]">From $125/pp</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="package" type="radio" value="executive"/>
<div className="border border-[#2a2a2a] bg-[#1a1a1a] rounded-sm p-4 text-center peer-checked:border-gold peer-checked:bg-gold/5 transition-all">
<span className="block text-sm text-white mb-1">The Executive</span>
<span className="block text-xs text-[#777]">From $185/pp</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="package" type="radio" value="bespoke"/>
<div className="border border-[#2a2a2a] bg-[#1a1a1a] rounded-sm p-4 text-center peer-checked:border-gold peer-checked:bg-gold/5 transition-all">
<span className="block text-sm text-white mb-1">Bespoke</span>
<span className="block text-xs text-[#777]">Custom Quote</span>
</div>
</label>
</div>
</div>
<div className="mb-6">
<label className="block text-xs uppercase tracking-wider text-[#a19f9a] mb-2 ml-1">Additional Notes / Dietary Info</label>
<textarea className="w-full custom-input px-4 py-3 rounded-sm text-sm h-24 resize-none" placeholder="Let us know if you need specific floral arrangements, AV support, or have specific dietary requirements..."></textarea>
</div>
<div className="mb-8 flex items-start gap-3">
<input className="custom-checkbox mt-0.5 flex-shrink-0" id="terms" required="" type="checkbox"/>
<label className="text-xs text-[#a19f9a] font-light leading-relaxed cursor-pointer select-none" htmlFor="terms">
                                I agree to the <a className="text-white underline decoration-[#555] hover:text-gold transition-colors" href="#">Privacy Policy</a> and understand that submitting this enquiry does not confirm a booking until a deposit is paid.
                            </label>
</div>
<div className="flex justify-between items-center">
<button className="text-[#a19f9a] hover:text-white transition-colors text-sm font-medium" onclick="prevStep(2)" type="button">Back</button>
<button className="btn-primary px-8 py-3 rounded-sm text-sm tracking-wide font-medium flex items-center gap-2" id="submit-btn" type="submit">
                                Request Proposal
                            </button>
</div>
</div>
</form>

<div className="absolute inset-0 bg-[#121212] z-20 flex flex-col items-center justify-center text-center px-8 hidden opacity-0 transition-opacity duration-500" id="form-success">
<div className="w-16 h-16 rounded-full bg-gold/10 text-gold flex items-center justify-center mb-6">
<iconify-icon icon="solar:check-read-linear" width="32"></iconify-icon>
</div>
<h3 className="font-serif text-3xl text-white mb-3">Enquiry Received</h3>
<p className="text-[#a19f9a] font-light text-sm max-w-md">Thank you for considering Aura for your event. Our events team is reviewing your details and will be in touch within 24 hours.</p>
<button className="mt-8 btn-outline px-6 py-2 rounded-sm text-sm uppercase tracking-wide" onclick="resetForm()">Back to Home</button>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-[#0a0a0a] border-t border-[#1a1a1a]">
<div className="absolute inset-0 opacity-20">
<img alt="Background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 max-w-3xl mx-auto px-6 text-center reveal">
<h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Ready to Create a Memorable Experience?</h2>
<p className="text-[#a19f9a] font-light mb-10 text-lg">Let our dedicated team handle the details while you enjoy flawless hospitality in a stunning setting.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="btn-primary px-8 py-4 rounded-sm font-medium tracking-wide" href="#enquire">Start Your Enquiry</a>
<a className="btn-outline px-8 py-4 rounded-sm font-medium tracking-wide bg-black/40 backdrop-blur-sm flex items-center justify-center gap-2" href="tel:+15550000000">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
                    Speak With Us
                </a>
</div>
</div>
</section>

<div className="fixed bottom-0 left-0 right-0 p-4 bg-[#0a0a0a]/90 backdrop-blur-md border-t border-[#1a1a1a] md:hidden z-40 transform translate-y-full transition-transform duration-300" id="mobile-sticky-cta">
<a className="btn-primary w-full py-3 rounded-sm text-center text-sm font-medium tracking-wide block" href="#enquire">Enquire Now</a>
</div>

<footer className="bg-[#050505] pt-20 pb-10 border-t border-[#1a1a1a]">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="md:col-span-1">
<a className="font-serif tracking-widest text-2xl font-medium text-white uppercase flex items-center gap-2 mb-6" href="#">
<span className="w-2 h-2 rounded-full bg-gold"></span>AURA
                    </a>
<p className="text-[#555] text-sm font-light leading-relaxed">Elevated private dining and sophisticated events in the heart of the city.</p>
</div>

<div>
<h5 className="text-white text-xs uppercase tracking-widest font-medium mb-6">Explore</h5>
<ul className="space-y-4">
<li><a className="text-[#777] hover:text-white transition-colors text-sm" href="#spaces">Private Rooms</a></li>
<li><a className="text-[#777] hover:text-white transition-colors text-sm" href="#menus">Curated Menus</a></li>
<li><a className="text-[#777] hover:text-white transition-colors text-sm" href="#packages">Event Packages</a></li>
<li><a className="text-[#777] hover:text-white transition-colors text-sm" href="#gallery">The Gallery</a></li>
</ul>
</div>

<div>
<h5 className="text-white text-xs uppercase tracking-widest font-medium mb-6">Contact</h5>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-[#777] text-sm">
<iconify-icon className="text-gold" icon="solar:letter-linear" width="18"></iconify-icon>
                            events@auradining.com
                        </li>
<li className="flex items-center gap-3 text-[#777] text-sm">
<iconify-icon className="text-gold" icon="solar:phone-linear" width="18"></iconify-icon>
                            +1 (555) 123-4567
                        </li>
<li className="flex items-start gap-3 text-[#777] text-sm">
<iconify-icon className="text-gold mt-0.5" icon="solar:map-point-linear" width="18"></iconify-icon>
                            100 Luxury Ave, Suite 2<br/>Metropolis, NY 10001
                        </li>
</ul>
</div>

<div>
<h5 className="text-white text-xs uppercase tracking-widest font-medium mb-6">Social</h5>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-[#2a2a2a] flex items-center justify-center text-[#777] hover:border-gold hover:text-gold transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-[#2a2a2a] flex items-center justify-center text-[#777] hover:border-gold hover:text-gold transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-[#1a1a1a] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[#555] text-xs font-light">© 2023 Aura Dining. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-[#555] hover:text-white text-xs font-light transition-colors" href="#">Privacy Policy</a>
<a className="text-[#555] hover:text-white text-xs font-light transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
