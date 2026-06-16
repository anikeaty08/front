import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        let menuOpen = false;

        mobileMenuBtn.addEventListener('click', () => {
            menuOpen = !menuOpen;
            mobileMenu.classList.toggle('hidden');
            mobileMenuBtn.setAttribute('aria-expanded', menuOpen);
        });

        // Close mobile menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuOpen = false;
                mobileMenuBtn.setAttribute('aria-expanded', false);
            });
        });

        // Project Filter
        const filterBtns = document.querySelectorAll('[id^="filter-"]');
        const projects = document.querySelectorAll('#projects-grid > div');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.id.replace('filter-', '');
                
                filterBtns.forEach(b => {
                    b.classList.remove('bg-[#2C3E50]', 'text-white');
                    b.classList.add('bg-white', 'text-gray-600');
                });
                btn.classList.remove('bg-white', 'text-gray-600');
                btn.classList.add('bg-[#2C3E50]', 'text-white');

                projects.forEach(project => {
                    if (filter === 'all' || project.dataset.category === filter) {
                        project.style.display = 'block';
                        project.style.animation = 'fadeIn 0.5s ease-out';
                    } else {
                        project.style.display = 'none';
                    }
                });
            });
        });

        // Form Validation and Submission
        const contactForm = document.getElementById('contact-form');
        const successMessage = document.getElementById('success-message');
        const submitBtn = document.getElementById('submit-btn');
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toast-message');

        function showToast(message) {
            toastMessage.textContent = message;
            toast.classList.remove('translate-y-20', 'opacity-0');
            setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0');
            }, 3000);
        }

        function validateEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }

        function validatePhone(phone) {
            return /^[\+]?[0-9]{10,14}$/.test(phone.replace(/\s/g, ''));
        }

        // Real-time validation
        document.getElementById('name').addEventListener('blur', function() {
            const error = document.getElementById('name-error');
            if (!this.value.trim()) {
                error.classList.remove('hidden');
                this.classList.add('border-red-500');
            } else {
                error.classList.add('hidden');
                this.classList.remove('border-red-500');
            }
        });

        document.getElementById('email').addEventListener('blur', function() {
            const error = document.getElementById('email-error');
            if (!validateEmail(this.value)) {
                error.classList.remove('hidden');
                this.classList.add('border-red-500');
            } else {
                error.classList.add('hidden');
                this.classList.remove('border-red-500');
            }
        });

        document.getElementById('phone').addEventListener('blur', function() {
            const error = document.getElementById('phone-error');
            if (!validatePhone(this.value)) {
                error.classList.remove('hidden');
                this.classList.add('border-red-500');
            } else {
                error.classList.add('hidden');
                this.classList.remove('border-red-500');
            }
        });

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;

            let isValid = true;

            if (!name.trim()) {
                document.getElementById('name-error').classList.remove('hidden');
                document.getElementById('name').classList.add('border-red-500');
                isValid = false;
            }

            if (!validateEmail(email)) {
                document.getElementById('email-error').classList.remove('hidden');
                document.getElementById('email').classList.add('border-red-500');
                isValid = false;
            }

            if (!validatePhone(phone)) {
                document.getElementById('phone-error').classList.remove('hidden');
                document.getElementById('phone').classList.add('border-red-500');
                isValid = false;
            }

            if (isValid) {
                // Show loading state
                submitBtn.innerHTML = '<span class="iconify animate-spin" data-icon="lucide:loader-2" data-width="20" style="stroke-width: 1.5"></span> Submitting...';
                submitBtn.disabled = true;

                // Simulate form submission
                setTimeout(() => {
                    contactForm.classList.add('hidden');
                    successMessage.classList.remove('hidden');
                    showToast('Your request has been submitted successfully!');
                }, 1500);
            }
        });

        // Smooth scroll for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add scroll animation to elements
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        // Active navigation state on scroll
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav a[href^="#"]');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                if (scrollY >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('text-[#2C3E50]');
                link.classList.add('text-gray-600');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.remove('text-gray-600');
                    link.classList.add('text-[#2C3E50]');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<a className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#2C3E50] text-white px-4 py-2 rounded-lg z-50" href="#main-content">Skip to main content</a>

<nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-40 border-b border-gray-100" role="navigation">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 lg:h-20">
<a className="flex items-center gap-2" href="#home">
<div className="w-10 h-10 bg-[#F39C12] rounded-lg flex items-center justify-center">
<span className="text-white font-semibold text-lg tracking-tighter">CB9</span>
</div>
<span className="hidden sm:block text-base font-semibold text-[#2C3E50] tracking-tight">Corner Bricks 9</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-[#2C3E50] hover:text-[#F39C12] transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#F39C12] transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#F39C12] transition-colors" href="#projects">Projects</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#F39C12] transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#F39C12] transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center gap-2 bg-[#2C3E50] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#1a252f] transition-colors" href="#contact">
                        Get Quote
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<button aria-expanded="false" aria-label="Toggle menu" className="md:hidden p-2 text-[#2C3E50]" id="mobile-menu-btn">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-white border-t border-gray-100 px-4 py-4" id="mobile-menu">
<div className="flex flex-col gap-4">
<a className="text-sm font-medium text-[#2C3E50] py-2" href="#home">Home</a>
<a className="text-sm font-medium text-gray-600 py-2" href="#services">Services</a>
<a className="text-sm font-medium text-gray-600 py-2" href="#projects">Projects</a>
<a className="text-sm font-medium text-gray-600 py-2" href="#about">About</a>
<a className="text-sm font-medium text-gray-600 py-2" href="#contact">Contact</a>
<a className="inline-flex items-center justify-center gap-2 bg-[#2C3E50] text-white px-5 py-2.5 rounded-lg text-sm font-medium mt-2" href="#contact">
                    Get Quote
                </a>
</div>
</div>
</nav>
<main className="" id="main-content">

<section className="pt-20 lg:pt-24 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white fade-in" id="home">
<div className="sm:px-6 lg:px-8 lg:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="fade-in">
<div className="inline-flex items-center gap-2 bg-[#F39C12]/10 text-[#F39C12] px-4 py-2 rounded-full text-sm font-medium mb-6">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Chennai's Trusted Builder Since 2009
                        </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#2C3E50] tracking-tight leading-tight mb-6">
                            Building Dreams,<br/>
<span className="text-[#F39C12]">One Brick at a Time</span>
</h1>
<p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
                            Transform your vision into reality with Corner Bricks 9. We specialize in premium residential construction across Chennai, delivering excellence in every project.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 bg-[#2C3E50] text-white px-6 py-3.5 rounded-lg text-base font-medium hover:bg-[#1a252f] transition-all hover-lift" href="#projects">
                                View Our Projects
                                <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 border-2 border-[#2C3E50] text-[#2C3E50] px-6 py-3.5 rounded-lg text-base font-medium hover:bg-[#2C3E50] hover:text-white transition-all" href="#contact">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Talk to Us
                            </a>
</div>
<div className="flex items-center gap-8 mt-12 pt-8 border-t border-gray-200">
<div>
<div className="text-3xl font-semibold text-[#2C3E50]">250+</div>
<div className="text-sm text-gray-500">Projects Completed</div>
</div>
<div>
<div className="text-3xl font-semibold text-[#2C3E50]">15+</div>
<div className="text-sm text-gray-500">Years Experience</div>
</div>
<div>
<div className="text-3xl font-semibold text-[#2C3E50]">98%</div>
<div className="text-sm text-gray-500">Client Satisfaction</div>
</div>
</div>
</div>
<div className="relative fade-in">
<div className="aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
<img alt="Modern residential building" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&amp;h=1000&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 hidden sm:flex items-center gap-3">
<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-green-600 iconify--lucide" data-icon="lucide:check-circle" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
</div>
<div>
<div className="text-sm font-medium text-[#2C3E50]">CMDA Approved</div>
<div className="text-xs text-gray-500">100% Legal &amp; Safe</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 bg-[#3498DB]/10 text-[#3498DB] px-4 py-2 rounded-full text-sm font-medium mb-4">
                        Our Services
                    </div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2C3E50] tracking-tight mb-4">
                        Complete Construction Solutions
                    </h2>
<p className="text-gray-600 text-lg">
                        From concept to completion, we handle every aspect of your residential construction project with expertise and care.
                    </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="group bg-gray-50 rounded-2xl p-8 hover-lift cursor-pointer border border-gray-100 hover:border-[#F39C12]/30">
<div className="w-14 h-14 bg-[#F39C12]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F39C12] transition-colors">
<svg aria-hidden="true" className="iconify text-[#F39C12] group-hover:text-white transition-colors iconify--lucide" data-icon="lucide:home" data-width="28" height="28" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-[#2C3E50] mb-3 tracking-tight">Individual Houses</h3>
<p className="text-gray-600 mb-4">Custom-designed independent houses tailored to your lifestyle and budget, built with premium materials.</p>
<a className="inline-flex items-center gap-2 text-[#F39C12] font-medium text-sm group-hover:gap-3 transition-all" href="#contact">
                            Learn More
                            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>

<div className="group bg-gray-50 rounded-2xl p-8 hover-lift cursor-pointer border border-gray-100 hover:border-[#F39C12]/30">
<div className="w-14 h-14 bg-[#3498DB]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3498DB] transition-colors">
<svg aria-hidden="true" className="iconify text-[#3498DB] group-hover:text-white transition-colors iconify--lucide" data-icon="lucide:building" data-width="28" height="28" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 10h.01M12 14h.01M12 6h.01M16 10h.01M16 14h.01M16 6h.01M8 10h.01M8 14h.01M8 6h.01M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path><rect height="20" rx="2" width="16" x="4" y="2"></rect></g></svg>
</div>
<h3 className="text-xl font-semibold text-[#2C3E50] mb-3 tracking-tight">Apartment Buildings</h3>
<p className="text-gray-600 mb-4">Multi-story residential complexes with modern amenities, optimized for space and community living.</p>
<a className="inline-flex items-center gap-2 text-[#3498DB] font-medium text-sm group-hover:gap-3 transition-all" href="#contact">
                            Learn More
                            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>

<div className="group bg-gray-50 rounded-2xl p-8 hover-lift cursor-pointer border border-gray-100 hover:border-[#F39C12]/30">
<div className="w-14 h-14 bg-[#2C3E50]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2C3E50] transition-colors">
<svg aria-hidden="true" className="iconify text-[#2C3E50] group-hover:text-white transition-colors iconify--lucide" data-icon="lucide:ruler" data-width="28" height="28" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Zm-6.8-2.8l2-2m-5-1l2-2m-5-1l2-2m7 11l2-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-semibold text-[#2C3E50] mb-3 tracking-tight">Architectural Design</h3>
<p className="text-gray-600 mb-4">Professional architectural planning with 3D visualization, ensuring your dream home comes to life.</p>
<a className="inline-flex items-center gap-2 text-[#2C3E50] font-medium text-sm group-hover:gap-3 transition-all" href="#contact">
                            Learn More
                            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>

<div className="group bg-gray-50 rounded-2xl p-8 hover-lift cursor-pointer border border-gray-100 hover:border-[#F39C12]/30">
<div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors">
<svg aria-hidden="true" className="iconify text-green-600 group-hover:text-white transition-colors iconify--lucide" data-icon="lucide:hammer" data-width="28" height="28" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path><path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-[#2C3E50] mb-3 tracking-tight">Renovation &amp; Remodeling</h3>
<p className="text-gray-600 mb-4">Transform your existing space with our expert renovation services, from minor updates to complete overhauls.</p>
<a className="inline-flex items-center gap-2 text-green-600 font-medium text-sm group-hover:gap-3 transition-all" href="#contact">
                            Learn More
                            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>

<div className="group bg-gray-50 rounded-2xl p-8 hover-lift cursor-pointer border border-gray-100 hover:border-[#F39C12]/30">
<div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors">
<svg aria-hidden="true" className="iconify text-purple-600 group-hover:text-white transition-colors iconify--lucide" data-icon="lucide:paintbrush" data-width="28" height="28" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="m14.622 17.897l-10.68-2.913M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0zM9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-semibold text-[#2C3E50] mb-3 tracking-tight">Interior Design</h3>
<p className="text-gray-600 mb-4">Complete interior solutions including modular kitchens, wardrobes, and custom furniture design.</p>
<a className="inline-flex items-center gap-2 text-purple-600 font-medium text-sm group-hover:gap-3 transition-all" href="#contact">
                            Learn More
                            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>

<div className="group bg-gray-50 rounded-2xl p-8 hover-lift cursor-pointer border border-gray-100 hover:border-[#F39C12]/30">
<div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500 transition-colors">
<svg aria-hidden="true" className="iconify text-red-500 group-hover:text-white transition-colors iconify--lucide" data-icon="lucide:file-check" data-width="28" height="28" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M9 15l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-[#2C3E50] mb-3 tracking-tight">Legal &amp; Approvals</h3>
<p className="text-gray-600 mb-4">Complete assistance with CMDA approvals, building permits, and all legal documentation.</p>
<a className="inline-flex items-center gap-2 text-red-500 font-medium text-sm group-hover:gap-3 transition-all" href="#contact">
                            Learn More
                            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-gray-50" id="projects">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
<div>
<div className="inline-flex items-center gap-2 bg-[#F39C12]/10 text-[#F39C12] px-4 py-2 rounded-full text-sm font-medium mb-4">
                            Our Portfolio
                        </div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2C3E50] tracking-tight mb-4">
                            Featured Projects
                        </h2>
<p className="text-gray-600 text-lg max-w-2xl">
                            Explore our completed projects across Chennai, showcasing our commitment to quality and design excellence.
                        </p>
</div>
<div className="flex gap-2">
<button className="px-5 py-2.5 rounded-lg text-sm font-medium bg-[#2C3E50] text-white transition-colors" id="filter-all">All</button>
<button className="px-5 py-2.5 rounded-lg text-sm font-medium bg-white text-gray-600 hover:bg-[#2C3E50] hover:text-white transition-colors" id="filter-villa">Villas</button>
<button className="px-5 py-2.5 rounded-lg text-sm font-medium bg-white text-gray-600 hover:bg-[#2C3E50] hover:text-white transition-colors" id="filter-apartment">Apartments</button>
</div>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="projects-grid">

<div className="group relative rounded-2xl overflow-hidden hover-lift" data-category="villa">
<div className="aspect-[4/3]">
<img alt="Modern Villa in Adyar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&amp;h=450&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/90 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="text-[#F39C12] text-sm font-medium mb-2">Villa • 4500 sq.ft</div>
<h3 className="text-xl font-semibold text-white mb-1 tracking-tight">Serenity Villa</h3>
<p className="text-gray-300 text-sm">Adyar, Chennai</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden hover-lift" data-category="apartment">
<div className="aspect-[4/3]">
<img alt="Luxury Apartments in OMR" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&amp;h=450&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/90 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="text-[#F39C12] text-sm font-medium mb-2">Apartment • 24 Units</div>
<h3 className="text-xl font-semibold text-white mb-1 tracking-tight">Horizon Heights</h3>
<p className="text-gray-300 text-sm">OMR, Chennai</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden hover-lift" data-category="villa">
<div className="aspect-[4/3]">
<img alt="Contemporary Home in Velachery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&amp;h=450&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/90 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="text-[#F39C12] text-sm font-medium mb-2">Villa • 3200 sq.ft</div>
<h3 className="text-xl font-semibold text-white mb-1 tracking-tight">Urban Nest</h3>
<p className="text-gray-300 text-sm">Velachery, Chennai</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden hover-lift" data-category="apartment">
<div className="aspect-[4/3]">
<img alt="Premium Flats in Anna Nagar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&amp;h=450&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/90 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="text-[#F39C12] text-sm font-medium mb-2">Apartment • 36 Units</div>
<h3 className="text-xl font-semibold text-white mb-1 tracking-tight">Skyline Residency</h3>
<p className="text-gray-300 text-sm">Anna Nagar, Chennai</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden hover-lift" data-category="villa">
<div className="aspect-[4/3]">
<img alt="Luxury Home in ECR" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&amp;h=450&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/90 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="text-[#F39C12] text-sm font-medium mb-2">Villa • 5800 sq.ft</div>
<h3 className="text-xl font-semibold text-white mb-1 tracking-tight">Beach View Estate</h3>
<p className="text-gray-300 text-sm">ECR, Chennai</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden hover-lift" data-category="apartment">
<div className="aspect-[4/3]">
<img alt="Modern Complex in Porur" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=600&amp;h=450&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/90 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="text-[#F39C12] text-sm font-medium mb-2">Apartment • 48 Units</div>
<h3 className="text-xl font-semibold text-white mb-1 tracking-tight">Green Valley Homes</h3>
<p className="text-gray-300 text-sm">Porur, Chennai</p>
</div>
</div>
</div>
<div className="text-center mt-12">
<a className="inline-flex items-center gap-2 border-2 border-[#2C3E50] text-[#2C3E50] px-6 py-3 rounded-lg text-base font-medium hover:bg-[#2C3E50] hover:text-white transition-all" href="#contact">
                        View All Projects
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-white" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="relative">
<div className="aspect-square rounded-2xl overflow-hidden">
<img alt="Construction team at work" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&amp;h=800&amp;fit=crop"/>
</div>
<div className="absolute -bottom-8 -right-8 bg-[#F39C12] rounded-2xl p-8 hidden lg:block">
<div className="text-white">
<div className="text-5xl font-semibold tracking-tight">15+</div>
<div className="text-lg mt-1">Years of Excellence</div>
</div>
</div>
</div>
<div>
<div className="inline-flex items-center gap-2 bg-[#2C3E50]/10 text-[#2C3E50] px-4 py-2 rounded-full text-sm font-medium mb-4">
                            About Us
                        </div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2C3E50] tracking-tight mb-6">
                            Building Trust, Delivering Dreams
                        </h2>
<p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            Corner Bricks 9 has been at the forefront of residential construction in Chennai since 2009. Our commitment to quality, transparency, and customer satisfaction has made us one of the most trusted names in the industry.
                        </p>
<p className="text-gray-600 mb-8 leading-relaxed">
                            With a team of experienced architects, engineers, and skilled craftsmen, we bring your dream home to life while ensuring timely delivery and adherence to the highest construction standards.
                        </p>
<div className="grid grid-cols-2 gap-6 mb-8">
<div className="flex items-start gap-3">
<div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
<svg aria-hidden="true" className="iconify text-green-600 iconify--lucide" data-icon="lucide:check" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="font-medium text-[#2C3E50]">Quality Materials</div>
<div className="text-sm text-gray-500">Premium grade only</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
<svg aria-hidden="true" className="iconify text-green-600 iconify--lucide" data-icon="lucide:check" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="font-medium text-[#2C3E50]">On-Time Delivery</div>
<div className="text-sm text-gray-500">98% track record</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
<svg aria-hidden="true" className="iconify text-green-600 iconify--lucide" data-icon="lucide:check" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="font-medium text-[#2C3E50]">Transparent Pricing</div>
<div className="text-sm text-gray-500">No hidden costs</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
<svg aria-hidden="true" className="iconify text-green-600 iconify--lucide" data-icon="lucide:check" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="font-medium text-[#2C3E50]">5-Year Warranty</div>
<div className="text-sm text-gray-500">Structural guarantee</div>
</div>
</div>
</div>
<a className="inline-flex items-center gap-2 bg-[#F39C12] text-white px-6 py-3.5 rounded-lg text-base font-medium hover:bg-[#e08e0b] transition-all hover-lift" href="#contact">
                            Schedule a Consultation
                            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:calendar" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-[#2C3E50]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 bg-white/10 text-[#F39C12] px-4 py-2 rounded-full text-sm font-medium mb-4">
                        Testimonials
                    </div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-4">
                        What Our Clients Say
                    </h2>
<p className="text-gray-300 text-lg">
                        Hear from homeowners who trusted us with their dream projects.
                    </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
<div className="flex items-center gap-1 mb-4">
<svg aria-hidden="true" className="iconify text-[#F39C12] iconify--lucide" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: '#F39C12'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-[#F39C12] iconify--lucide" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: '#F39C12'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-[#F39C12] iconify--lucide" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: '#F39C12'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-[#F39C12] iconify--lucide" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: '#F39C12'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-[#F39C12] iconify--lucide" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: '#F39C12'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-gray-300 mb-6 leading-relaxed">"Corner Bricks 9 exceeded our expectations. Our villa was completed on time and the quality is outstanding. Highly recommend their services!"</p>
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-[#F39C12] rounded-full flex items-center justify-center text-white font-semibold">RK</div>
<div>
<div className="text-white font-medium">Rajesh Kumar</div>
<div className="text-gray-400 text-sm">Villa Owner, Adyar</div>
</div>
</div>
</div>
<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
<div className="flex items-center gap-1 mb-4">
<svg aria-hidden="true" className="iconify text-[#F39C12] iconify--lucide" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: '#F39C12'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-[#F39C12] iconify--lucide" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: '#F39C12'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-[#F39C12] iconify--lucide" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: '#F39C12'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-[#F39C12] iconify--lucide" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: '#F39C12'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-[#F39C12] iconify--lucide" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: '#F39C12'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-gray-300 mb-6 leading-relaxed">"Professional team, transparent pricing, and excellent communication throughout the project. Our apartment complex is now fully occupied!"</p>
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-[#3498DB] rounded-full flex items-center justify-center text-white font-semibold">PS</div>
<div>
<div className="text-white font-medium">Priya Sundaram</div>
<div className="text-gray-400 text-sm">Property Developer, OMR</div>
</div>
</div>
</div>
<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
<div className="flex items-center gap-1 mb-4">
<svg aria-hidden="true" className="iconify text-[#F39C12] iconify--lucide" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: '#F39C12'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-[#F39C12] iconify--lucide" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: '#F39C12'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-[#F39C12] iconify--lucide" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: '#F39C12'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-[#F39C12] iconify--lucide" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: '#F39C12'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-[#F39C12] iconify--lucide" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: '#F39C12'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-gray-300 mb-6 leading-relaxed">"From design to delivery, Corner Bricks 9 handled everything seamlessly. The attention to detail in our home renovation was remarkable."</p>
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">MN</div>
<div>
<div className="text-white font-medium">Meena Natarajan</div>
<div className="text-gray-400 text-sm">Homeowner, Velachery</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-gray-50" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
<div>
<div className="inline-flex items-center gap-2 bg-[#F39C12]/10 text-[#F39C12] px-4 py-2 rounded-full text-sm font-medium mb-4">
                            Get In Touch
                        </div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2C3E50] tracking-tight mb-6">
                            Let's Build Your Dream Home
                        </h2>
<p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Ready to start your construction project? Contact us today for a free consultation and quotation. Our team is here to help you every step of the way.
                        </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-[#2C3E50]/10 rounded-xl flex items-center justify-center flex-shrink-0">
<svg aria-hidden="true" className="iconify text-[#2C3E50] iconify--lucide" data-icon="lucide:map-pin" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<div>
<div className="font-medium text-[#2C3E50] mb-1">Visit Our Office</div>
<div className="text-gray-600">No. 42, Mount Road, GuindyChennai - 600032, Tamil Nadu</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-[#F39C12]/10 rounded-xl flex items-center justify-center flex-shrink-0">
<svg aria-hidden="true" className="iconify text-[#F39C12] iconify--lucide" data-icon="lucide:phone" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="font-medium text-[#2C3E50] mb-1">Call Us</div>
<div className="text-gray-600">+91 98765 43210+91 44 2345 6789</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-[#3498DB]/10 rounded-xl flex items-center justify-center flex-shrink-0">
<svg aria-hidden="true" className="iconify text-[#3498DB] iconify--lucide" data-icon="lucide:mail" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<div>
<div className="font-medium text-[#2C3E50] mb-1">Email Us</div>
<div className="text-gray-600">info@cornerbricks9.comsales@cornerbricks9.com</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
<svg aria-hidden="true" className="iconify text-green-600 iconify--lucide" data-icon="lucide:clock" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<div>
<div className="font-medium text-[#2C3E50] mb-1">Working Hours</div>
<div className="text-gray-600">Mon - Sat: 9:00 AM - 7:00 PMSunday: By Appointment</div>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
<h3 className="text-2xl font-semibold text-[#2C3E50] tracking-tight mb-6">Request a Free Quote</h3>
<form className="space-y-5" id="contact-form">
<div className="grid sm:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">Full Name *</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F39C12] focus:ring-2 focus:ring-[#F39C12]/20 outline-none transition-all" id="name" name="name" placeholder="John Doe" required="" type="text"/>
<p className="text-red-500 text-xs mt-1 hidden" id="name-error">Please enter your name</p>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">Phone Number *</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F39C12] focus:ring-2 focus:ring-[#F39C12]/20 outline-none transition-all" id="phone" name="phone" placeholder="+91 98765 43210" required="" type="tel"/>
<p className="text-red-500 text-xs mt-1 hidden" id="phone-error">Please enter a valid phone number</p>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">Email Address *</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F39C12] focus:ring-2 focus:ring-[#F39C12]/20 outline-none transition-all" id="email" name="email" placeholder="john@example.com" required="" type="email"/>
<p className="text-red-500 text-xs mt-1 hidden" id="email-error">Please enter a valid email address</p>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="service">Service Required *</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F39C12] focus:ring-2 focus:ring-[#F39C12]/20 outline-none transition-all appearance-none bg-white" id="service" name="service" required="">
<option value="">Select a service</option>
<option value="individual-house">Individual House Construction</option>
<option value="apartment">Apartment Building</option>
<option value="renovation">Renovation &amp; Remodeling</option>
<option value="interior">Interior Design</option>
<option value="consultation">Consultation Only</option>
</select>
<svg aria-hidden="true" className="iconify absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none iconify--lucide" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="budget">Estimated Budget</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F39C12] focus:ring-2 focus:ring-[#F39C12]/20 outline-none transition-all appearance-none bg-white" id="budget" name="budget">
<option value="">Select budget range</option>
<option value="below-50">Below ₹50 Lakhs</option>
<option value="50-1cr">₹50 Lakhs - ₹1 Crore</option>
<option value="1cr-2cr">₹1 Crore - ₹2 Crore</option>
<option value="above-2cr">Above ₹2 Crore</option>
</select>
<svg aria-hidden="true" className="iconify absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none iconify--lucide" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">Project Details</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F39C12] focus:ring-2 focus:ring-[#F39C12]/20 outline-none transition-all resize-none" id="message" name="message" placeholder="Tell us about your project requirements..." rows="4"></textarea>
</div>
<button className="w-full bg-[#F39C12] text-white px-6 py-4 rounded-lg text-base font-medium hover:bg-[#e08e0b] transition-all flex items-center justify-center gap-2" id="submit-btn" type="submit">
<span>Submit Request</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:send" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</form>

<div className="hidden text-center py-8" id="success-message">
<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
<svg aria-hidden="true" className="iconify text-green-600 iconify--lucide" data-icon="lucide:check-circle" data-width="32" height="32" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
</div>
<h4 className="text-xl font-semibold text-[#2C3E50] mb-2">Thank You!</h4>
<p className="text-gray-600">Your request has been submitted. We'll contact you within 24 hours.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-[#F39C12]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center justify-between gap-8">
<div className="text-center lg:text-left">
<h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-2">Ready to Start Your Project?</h2>
<p className="text-white/90">Get a free consultation and estimate from our experts today.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 bg-white text-[#F39C12] px-6 py-3.5 rounded-lg text-base font-medium hover:bg-gray-100 transition-all" href="tel:+919876543210">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Call Now
                        </a>
<a className="inline-flex items-center justify-center gap-2 bg-[#2C3E50] text-white px-6 py-3.5 rounded-lg text-base font-medium hover:bg-[#1a252f] transition-all" href="https://wa.me/919876543210">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-circle" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            WhatsApp
                        </a>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#2C3E50] text-white py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-10 h-10 bg-[#F39C12] rounded-lg flex items-center justify-center">
<span className="text-white font-semibold text-lg tracking-tighter">CB9</span>
</div>
<span className="font-semibold text-base tracking-tight">Corner Bricks 9</span>
</div>
<p className="text-gray-400 mb-6 text-sm leading-relaxed">Building quality homes in Chennai since 2009. Your trusted partner for residential construction.</p>
<div className="flex gap-4">
<a aria-label="Facebook" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#F39C12] transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a aria-label="Instagram" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#F39C12] transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a aria-label="LinkedIn" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#F39C12] transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
<a aria-label="YouTube" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#F39C12] transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:youtube" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15l5-3l-5-3z"></path></g></svg>
</a>
</div>
</div>
<div>
<h4 className="font-semibold text-base mb-6">Services</h4>
<ul className="space-y-3 text-sm">
<li><a className="text-gray-400 hover:text-[#F39C12] transition-colors" href="#services">Individual Houses</a></li>
<li><a className="text-gray-400 hover:text-[#F39C12] transition-colors" href="#services">Apartment Buildings</a></li>
<li><a className="text-gray-400 hover:text-[#F39C12] transition-colors" href="#services">Renovation</a></li>
<li><a className="text-gray-400 hover:text-[#F39C12] transition-colors" href="#services">Interior Design</a></li>
<li><a className="text-gray-400 hover:text-[#F39C12] transition-colors" href="#services">Legal Approvals</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-base mb-6">Quick Links</h4>
<ul className="space-y-3 text-sm">
<li><a className="text-gray-400 hover:text-[#F39C12] transition-colors" href="#about">About Us</a></li>
<li><a className="text-gray-400 hover:text-[#F39C12] transition-colors" href="#projects">Our Projects</a></li>
<li><a className="text-gray-400 hover:text-[#F39C12] transition-colors" href="#contact">Contact Us</a></li>
<li><a className="text-gray-400 hover:text-[#F39C12] transition-colors" href="#">Careers</a></li>
<li><a className="text-gray-400 hover:text-[#F39C12] transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-base mb-6">Contact Info</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-[#F39C12] mt-0.5 iconify--lucide" data-icon="lucide:map-pin" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
<span className="text-gray-400">No. 42, Mount Road, GuindyChennai - 600032</span>
</li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-[#F39C12] iconify--lucide" data-icon="lucide:phone" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<a className="text-gray-400 hover:text-[#F39C12] transition-colors" href="tel:+919876543210">+91 98765 43210</a>
</li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-[#F39C12] iconify--lucide" data-icon="lucide:mail" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
<a className="text-gray-400 hover:text-[#F39C12] transition-colors" href="mailto:info@cornerbricks9.com">info@cornerbricks9.com</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-gray-400 text-sm">© 2024 Corner Bricks 9. All rights reserved.</p>
<div className="flex gap-6 text-sm">
<a className="text-gray-400 hover:text-[#F39C12] transition-colors" href="#">Privacy Policy</a>
<a className="text-gray-400 hover:text-[#F39C12] transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 bg-[#2C3E50] text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 transform translate-y-20 opacity-0 transition-all duration-300 z-50" id="toast">
<svg aria-hidden="true" className="iconify text-green-400 iconify--lucide" data-icon="lucide:check-circle" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span id="toast-message">Message sent successfully!</span>
</div>


    </>
  );
}
