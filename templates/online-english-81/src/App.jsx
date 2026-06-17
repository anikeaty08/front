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



tailwind.config = {
theme: {
extend: {
colors: {
navy: {
DEFAULT: '#0B3D91',
50: '#F0F4FA',
100: '#E1E8F5',
800: '#082A66',
900: '#051D47',
},
coral: {
DEFAULT: '#E94E4E',
hover: '#D63D3D'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
fontSize: {
'xs': '0.8rem',
'sm': '0.925rem',
'base': '1.05rem',
'lg': '1.175rem',
'xl': '1.35rem',
'2xl': '1.6rem',
'3xl': '2rem',
'4xl': '2.5rem',
'5xl': '3.25rem',
'6xl': '4rem',
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // --- Mobile Menu Logic ---
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // --- FAQ Accordion Logic ---
        document.querySelectorAll('.faq-toggle').forEach(button => {
            button.addEventListener('click', () => {
                const content = button.nextElementSibling;
                const icon = button.querySelector('i');
                const isExpanded = !content.classList.contains('hidden');

                // Close all others (optional behavior)
                document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
                document.querySelectorAll('.faq-toggle i').forEach(i => i.style.transform = 'rotate(0deg)');

                if (!isExpanded) {
                    content.classList.remove('hidden');
                    icon.style.transform = 'rotate(180deg)';
                    button.setAttribute('aria-expanded', 'true');
                } else {
                    button.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // --- Modal Logic (Enrollment) ---
        const enrollModal = document.getElementById('enrollModal');
        const backdrop = enrollModal.querySelector('.modal-backdrop');
        const panel = enrollModal.querySelector('.modal-panel');
        const courseSelect = document.getElementById('course-select');

        function openEnrollModal(preselectedCourse = null) {
            enrollModal.classList.remove('hidden');
            // Small timeout to allow display:block to apply before opacity transition
            setTimeout(() => {
                backdrop.classList.remove('opacity-0');
                panel.classList.remove('opacity-0', 'translate-y-4');
            }, 10);
            
            if (preselectedCourse) {
                // Find option containing the text and select it
                Array.from(courseSelect.options).forEach(opt => {
                    if(opt.value.includes(preselectedCourse)) {
                        courseSelect.value = opt.value;
                    }
                });
            }
            
            // Trap focus
            document.getElementById('name').focus();
        }

        function closeEnrollModal() {
            backdrop.classList.add('opacity-0');
            panel.classList.add('opacity-0', 'translate-y-4');
            setTimeout(() => {
                enrollModal.classList.add('hidden');
            }, 300);
        }

        // --- Modal Logic (Course Details) ---
        const courseModal = document.getElementById('courseModal');
        const coursePanel = document.getElementById('course-panel');
        const courseTitle = document.getElementById('course-detail-title');

        function openCourseModal(title) {
            courseTitle.innerText = title;
            courseModal.classList.remove('hidden');
            setTimeout(() => {
                coursePanel.classList.remove('translate-x-full');
            }, 10);
        }

        function closeCourseModal() {
            coursePanel.classList.add('translate-x-full');
            setTimeout(() => {
                courseModal.classList.add('hidden');
            }, 500);
        }

        // --- Payment Simulation Logic ---
        const enrollForm = document.getElementById('enrollForm');
        const submitBtn = document.getElementById('submit-btn');
        const errorMsg = document.getElementById('form-error');

        function simulatePayment(data) {
            return new Promise((resolve, reject) => {
                console.log("Processing payment for:", data);
                // Simulate network delay
                setTimeout(() => {
                    const success = Math.random() > 0.1; // 90% success rate
                    success ? resolve("Transaction ID: 12345") : reject("Card declined");
                }, 2000);
            });
        }

        enrollForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            errorMsg.classList.add('hidden');

            // Basic Validation
            if (!enrollForm.checkValidity()) {
                errorMsg.classList.remove('hidden');
                return;
            }

            const formData = new FormData(enrollForm);
            const data = Object.fromEntries(formData.entries());

            // UI Loading State
            const originalBtnContent = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<div class="spinner mx-auto"></div>`;

            try {
                // INTEGRATION POINT: Replace with Stripe.confirmPayment() or fetch('/api/checkout')
                await simulatePayment(data);
                
                // Success State
                submitBtn.innerHTML = `<span class="flex items-center gap-2"><i data-lucide="check" class="w-5 h-5"></i> Enrollment Successful!</span>`;
                submitBtn.classList.remove('bg-navy');
                submitBtn.classList.add('bg-green-600');
                
                setTimeout(() => {
                    closeEnrollModal();
                    // Reset form after closing
                    setTimeout(() => {
                        enrollForm.reset();
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = originalBtnContent;
                        submitBtn.classList.add('bg-navy');
                        submitBtn.classList.remove('bg-green-600');
                    }, 500);
                }, 1500);

            } catch (error) {
                // Error State
                errorMsg.innerText = "Payment failed. Please try again.";
                errorMsg.classList.remove('hidden');
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnContent;
            }
        });

        // Close modals on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (!enrollModal.classList.contains('hidden')) closeEnrollModal();
                if (!courseModal.classList.contains('hidden')) closeCourseModal();
            }
        });

        // Sticky Nav Blur Effect on Scroll
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-sm');
            } else {
                nav.classList.remove('shadow-sm');
            }
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
      

<header className="fixed transition-all duration-300 bg-white/90 w-full z-50 border-slate-100 border-b backdrop-blur-md" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center cursor-pointer" onclick="window.scrollTo(0,0)">
<div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center mr-3 text-white">
<svg className="lucide lucide-languages w-6 h-6" data-lucide="languages" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>
</div>
<span className="text-xl font-semibold tracking-tight text-navy-900">LinguaPro</span>
</div>

<nav className="hidden md:flex space-x-8">
<a className="text-base font-medium text-slate-600 hover:text-navy transition-colors" href="#benefits">Why Us</a>
<a className="text-base font-medium text-slate-600 hover:text-navy transition-colors" href="#courses">Courses</a>
<a className="text-base font-medium text-slate-600 hover:text-navy transition-colors" href="#pricing">Pricing</a>
<a className="text-base font-medium text-slate-600 hover:text-navy transition-colors" href="#faq">FAQ</a>
</nav>

<div className="hidden md:flex items-center space-x-4">
<a className="text-base font-medium text-navy hover:text-navy-800" href="#" onclick="alert('Login mockup')">Log in</a>
<button className="bg-coral hover:bg-coral-hover text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-lg shadow-coral/20" onclick="openEnrollModal()">
                        Get Started
                    </button>
</div>

<div className="md:hidden flex items-center">
<button aria-label="Toggle menu" className="text-slate-600 hover:text-navy focus:outline-none" id="mobile-menu-btn">
<svg className="lucide lucide-menu w-7 h-7" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-white border-b border-slate-100" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-2">
<a className="block px-3 py-3 text-lg font-medium text-slate-700 rounded-md hover:bg-slate-50" href="#benefits">Why Us</a>
<a className="block px-3 py-3 text-lg font-medium text-slate-700 rounded-md hover:bg-slate-50" href="#courses">Courses</a>
<a className="block px-3 py-3 text-lg font-medium text-slate-700 rounded-md hover:bg-slate-50" href="#pricing">Pricing</a>
<button className="w-full mt-4 bg-coral text-white px-5 py-3 rounded-lg text-lg font-medium text-center" onclick="openEnrollModal()">
                    Enroll Now
                </button>
</div>
</div>
</header>
<main className="">


<section className="relative pt-32 pb-40 lg:pt-48 lg:pb-48 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Students talking" className="w-full h-full object-cover" loading="eager" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-navy-900/80 mix-blend-multiply"></div>
<div className="bg-gradient-to-t from-navy-900 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
<span className="flex h-2 w-2 rounded-full bg-coral"></span>
<span className="text-sm font-medium text-white tracking-wide uppercase">New term starting soon</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                    Speak English with <br className="hidden md:block"/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">Confidence &amp; Clarity</span>
</h1>
<p className="mt-4 text-xl text-slate-200 max-w-2xl mx-auto mb-10 font-light">
                    Join LinguaPro Online to unlock global opportunities. Interactive live classes, expert native tutors, and a curriculum tailored to your career goals.
                </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-coral hover:bg-coral-hover text-white px-8 py-4 rounded-xl text-lg font-medium transition-all shadow-xl shadow-coral/20 flex items-center justify-center gap-2" onclick="openEnrollModal()">
                        Start Learning Today
                        <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<a className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl text-lg font-medium transition-all flex items-center justify-center" href="#courses">
                        Explore Courses
                    </a>
</div>
</div>

<div className="absolute bottom-0 w-full z-20 border-t border-white/10 bg-navy-900/40 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
<div>
<div className="text-3xl font-semibold tracking-tight">15k+</div>
<div className="text-sm text-slate-300 font-medium mt-1">Active Students</div>
</div>
<div className="">
<div className="text-3xl font-semibold tracking-tight" style={{}}>98%</div>
<div className="text-sm text-slate-300 font-medium mt-1">Satisfaction Rate</div>
</div>
<div className="">
<div className="text-3xl font-semibold tracking-tight">120+</div>
<div className="text-sm text-slate-300 font-medium mt-1">Native Tutors</div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight">24/7</div>
<div className="text-sm text-slate-300 font-medium mt-1">Platform Access</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="benefits">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-coral font-medium tracking-wider uppercase text-sm">Why Choose Us</span>
<h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-navy-900">
                        A modern approach to language mastery
                    </h2>
</div>
<div className="grid md:grid-cols-3 gap-12">

<div className="group p-6 rounded-2xl bg-slate-50 hover:bg-navy-50 transition-colors duration-300 border border-slate-100">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-navy mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-video w-6 h-6" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
</div>
<h3 className="text-xl font-semibold text-navy-900 mb-3 tracking-tight">Live Interactive Classes</h3>
<p className="text-slate-600 leading-relaxed">
                            Connect via Zoom for real-time practice. Small groups ensure you get personal feedback from instructors every session.
                        </p>
</div>

<div className="group p-6 rounded-2xl bg-slate-50 hover:bg-navy-50 transition-colors duration-300 border border-slate-100">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-navy mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-clock w-6 h-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-navy-900 mb-3 tracking-tight">Flexible Scheduling</h3>
<p className="text-slate-600 leading-relaxed">
                            Book classes that fit your life. Morning, evening, or weekend slots available across multiple time zones.
                        </p>
</div>

<div className="group p-6 rounded-2xl bg-slate-50 hover:bg-navy-50 transition-colors duration-300 border border-slate-100">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-navy mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-award w-6 h-6" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-navy-900 mb-3 tracking-tight">Certified Curriculum</h3>
<p className="text-slate-600 leading-relaxed">
                            Our courses align with CEFR standards. Earn certificates recognized by employers and universities worldwide.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
<div className="relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
<img alt="Student learning on laptop" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl hidden md:block max-w-xs border border-slate-100">
<div className="flex items-center gap-4 mb-3">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<svg className="lucide lucide-check w-5 h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Progress Tracking</p>
<p className="text-xs text-slate-500">Weekly reports included</p>
</div>
</div>
<div className="w-full bg-slate-100 rounded-full h-2 mb-1">
<div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
</div>
</div>
</div>
<div className="mt-12 lg:mt-0">
<span className="text-coral font-medium tracking-wider uppercase text-sm">Our Methodology</span>
<h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-navy-900 mb-6">
                            Structured learning for real-world results
                        </h2>
<p className="text-lg text-slate-600 mb-8">
                            We don't just teach grammar; we teach communication. Our immersion technique simulates real-life scenarios from day one.
                        </p>
<div className="space-y-6">

<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-navy-100 text-navy flex items-center justify-center font-semibold text-sm">01</div>
<div>
<h4 className="text-lg font-semibold text-navy-900">Placement Test</h4>
<p className="text-base text-slate-500 mt-1">We assess your current level (A1-C2) to place you in the perfect group.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-navy-100 text-navy flex items-center justify-center font-semibold text-sm">02</div>
<div>
<h4 className="text-lg font-semibold text-navy-900">Interactive Modules</h4>
<p className="text-base text-slate-500 mt-1">Access 24/7 video lessons, quizzes, and vocabulary drills before class.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-navy-100 text-navy flex items-center justify-center font-semibold text-sm">03</div>
<div>
<h4 className="text-lg font-semibold text-navy-900">Live Practice</h4>
<p className="text-base text-slate-500 mt-1">Join 60-minute conversational sessions with native instructors.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="courses">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<span className="text-coral font-medium tracking-wider uppercase text-sm">Our Courses</span>
<h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-navy-900">
                            Find the right path for you
                        </h2>
</div>
<a className="text-navy font-medium hover:text-navy-800 flex items-center gap-1 group" href="#">
                        View all courses <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<span className="absolute top-4 right-4 bg-white/90 backdrop-blur text-navy text-xs font-semibold px-2 py-1 rounded">Beginner</span>
<img alt="General English" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-semibold text-navy-900 mb-2 tracking-tight">General English Foundations</h3>
<p className="text-slate-500 text-base mb-6 flex-1">Perfect for absolute beginners. Learn essential vocabulary for travel and daily life.</p>
<div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
<div className="flex items-center gap-1"><svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> 8 Weeks</div>
<div className="flex items-center gap-1"><svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg> Group</div>
</div>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
<span className="text-2xl font-semibold text-navy-900">$199</span>
<button className="text-coral font-medium hover:text-coral-hover" onclick="openCourseModal('General English')">View Details</button>
</div>
</div>
</div>

<div className="flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<span className="absolute top-4 right-4 bg-navy text-white text-xs font-semibold px-2 py-1 rounded">Popular</span>
<img alt="Business English" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-semibold text-navy-900 mb-2 tracking-tight">Business English Pro</h3>
<p className="text-slate-500 text-base mb-6 flex-1">Master presentations, negotiations, and professional email writing.</p>
<div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
<div className="flex items-center gap-1"><svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> 12 Weeks</div>
<div className="flex items-center gap-1"><svg className="lucide lucide-briefcase w-4 h-4" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg> Career</div>
</div>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
<span className="text-2xl font-semibold text-navy-900">$349</span>
<button className="text-coral font-medium hover:text-coral-hover" onclick="openCourseModal('Business English Pro')">View Details</button>
</div>
</div>
</div>

<div className="flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<span className="absolute top-4 right-4 bg-white/90 backdrop-blur text-navy text-xs font-semibold px-2 py-1 rounded">Advanced</span>
<img alt="IELTS Prep" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-semibold text-navy-900 mb-2 tracking-tight">IELTS &amp; TOEFL Prep</h3>
<p className="text-slate-500 text-base mb-6 flex-1">Intensive preparation strategies to maximize your exam score.</p>
<div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
<div className="flex items-center gap-1"><svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> 6 Weeks</div>
<div className="flex items-center gap-1"><svg className="lucide lucide-book-open w-4 h-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg> Exam</div>
</div>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
<span className="text-2xl font-semibold text-navy-900">$299</span>
<button className="text-coral font-medium hover:text-coral-hover" onclick="openCourseModal('IELTS Prep')">View Details</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-navy-900 text-white relative overflow-hidden">

<div className="absolute top-0 right-0 p-12 opacity-10">
<svg className="lucide lucide-quote w-64 h-64 text-white" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">What our students say</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-navy-800 p-8 rounded-2xl border border-navy-700">
<div className="flex text-coral mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-lg text-slate-200 mb-6 italic">"The instructors are incredible. I needed English for my software engineering job, and within 3 months I was leading meetings confidently."</p>
<div className="flex items-center gap-4">
<img alt="User" className="w-12 h-12 rounded-full border-2 border-navy-700" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div>
<h4 className="font-medium text-white">Carlos M.</h4>
<span className="text-sm text-slate-400">Software Developer, Brazil</span>
</div>
</div>
</div>

<div className="bg-navy-800 p-8 rounded-2xl border border-navy-700">
<div className="flex text-coral mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-lg text-slate-200 mb-6 italic">"I was afraid of speaking, but the small group sessions made me feel safe. Now I'm traveling Europe without using a translator app!"</p>
<div className="flex items-center gap-4">
<img alt="User" className="w-12 h-12 rounded-full border-2 border-navy-700" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<div>
<h4 className="font-medium text-white">Yuki T.</h4>
<span className="text-sm text-slate-400">Student, Japan</span>
</div>
</div>
</div>

<div className="bg-navy-800 p-8 rounded-2xl border border-navy-700">
<div className="flex text-coral mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-lg text-slate-200 mb-6 italic">"LinguaPro's Business English course helped me secure a promotion. The negotiation role-plays were exactly what I needed."</p>
<div className="flex items-center gap-4">
<img alt="User" className="w-12 h-12 rounded-full border-2 border-navy-700" src="https://randomuser.me/api/portraits/women/68.jpg"/>
<div>
<h4 className="font-medium text-white">Sarah L.</h4>
<span className="text-sm text-slate-400">Marketing Manager, Germany</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-coral font-medium tracking-wider uppercase text-sm">Flexible Pricing</span>
<h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-navy-900">
                        Invest in your future
                    </h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
<h3 className="text-xl font-semibold text-navy-900">Basic</h3>
<p className="text-slate-500 mt-2 text-sm">For casual learners</p>
<div className="mt-6 mb-8">
<span className="text-4xl font-bold text-navy-900">$49</span>
<span className="text-slate-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 text-slate-600 text-sm">
<li className="flex gap-3"><svg className="lucide lucide-check w-5 h-5 text-green-500 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Access to video library</li>
<li className="flex gap-3"><svg className="lucide lucide-check w-5 h-5 text-green-500 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 1 Group class / week</li>
<li className="flex gap-3"><svg className="lucide lucide-check w-5 h-5 text-green-500 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Grammar exercises</li>
<li className="flex gap-3"><svg className="lucide lucide-x w-5 h-5 text-slate-300 shrink-0" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> No certificate</li>
</ul>
<button className="w-full py-3 px-4 border border-navy text-navy font-medium rounded-xl hover:bg-navy-50 transition-colors" onclick="openEnrollModal('Basic')">Choose Basic</button>
</div>

<div className="bg-navy-900 rounded-2xl p-8 border border-navy-900 shadow-2xl relative transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-coral text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide">MOST POPULAR</div>
<h3 className="text-xl font-semibold text-white">Intensive</h3>
<p className="text-slate-300 mt-2 text-sm">For rapid progress</p>
<div className="mt-6 mb-8">
<span className="text-4xl font-bold text-white">$129</span>
<span className="text-slate-400">/mo</span>
</div>
<ul className="space-y-4 mb-8 text-slate-300 text-sm">
<li className="flex gap-3"><svg className="lucide lucide-check w-5 h-5 text-coral shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Unlimited video library</li>
<li className="flex gap-3"><svg className="lucide lucide-check w-5 h-5 text-coral shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 3 Group classes / week</li>
<li className="flex gap-3"><svg className="lucide lucide-check w-5 h-5 text-coral shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 1 Private session / mo</li>
<li className="flex gap-3"><svg className="lucide lucide-check w-5 h-5 text-coral shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Course Certificate</li>
</ul>
<button className="w-full py-3 px-4 bg-coral text-white font-medium rounded-xl hover:bg-coral-hover transition-colors shadow-lg shadow-coral/25" onclick="openEnrollModal('Intensive')">Choose Intensive</button>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
<h3 className="text-xl font-semibold text-navy-900">Premium</h3>
<p className="text-slate-500 mt-2 text-sm">For professional mastery</p>
<div className="mt-6 mb-8">
<span className="text-4xl font-bold text-navy-900">$249</span>
<span className="text-slate-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 text-slate-600 text-sm">
<li className="flex gap-3"><svg className="lucide lucide-check w-5 h-5 text-green-500 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> All Intensive features</li>
<li className="flex gap-3"><svg className="lucide lucide-check w-5 h-5 text-green-500 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Unlimited Group classes</li>
<li className="flex gap-3"><svg className="lucide lucide-check w-5 h-5 text-green-500 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 4 Private sessions / mo</li>
<li className="flex gap-3"><svg className="lucide lucide-check w-5 h-5 text-green-500 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Exam prep support</li>
</ul>
<button className="w-full py-3 px-4 border border-navy text-navy font-medium rounded-xl hover:bg-navy-50 transition-colors" onclick="openEnrollModal('Premium')">Choose Premium</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-navy-900">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">

<div className="border border-slate-200 rounded-lg overflow-hidden">
<button className="faq-toggle w-full flex justify-between items-center p-5 text-left bg-slate-50 hover:bg-slate-100 transition-colors">
<span className="font-medium text-navy-900">Do I need to buy textbooks?</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-500 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="faq-content hidden p-5 pt-0 bg-slate-50 text-slate-600 border-t border-transparent">
                            No. All learning materials are digital and included in your subscription price. You can access them via our student portal.
                        </div>
</div>

<div className="border border-slate-200 rounded-lg overflow-hidden">
<button className="faq-toggle w-full flex justify-between items-center p-5 text-left bg-slate-50 hover:bg-slate-100 transition-colors">
<span className="font-medium text-navy-900">How do the live classes work?</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-500 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="faq-content hidden p-5 pt-0 bg-slate-50 text-slate-600 border-t border-transparent">
                            We use Zoom integration. You simply log in to your dashboard, select a class time that suits you, and click "Join". Classes are capped at 6 students.
                        </div>
</div>

<div className="border border-slate-200 rounded-lg overflow-hidden">
<button className="faq-toggle w-full flex justify-between items-center p-5 text-left bg-slate-50 hover:bg-slate-100 transition-colors">
<span className="font-medium text-navy-900">Can I cancel my subscription?</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-500 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="faq-content hidden p-5 pt-0 bg-slate-50 text-slate-600 border-t border-transparent">
                            Yes, you can cancel anytime from your account settings. You will retain access until the end of your billing cycle.
                        </div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-coral text-white text-center px-4">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Ready to fluent your future?</h2>
<p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">Join over 15,000 students achieving their goals. Try your first week risk-free.</p>
<button className="bg-white text-coral hover:bg-slate-50 px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl" onclick="openEnrollModal()">
                    Get Started Now
                </button>
</div>
</section>
</main>

<footer className="bg-navy-900 text-slate-300 pt-16 pb-8 border-t border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center text-white mb-4">
<div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-2">
<svg className="lucide lucide-languages w-5 h-5" data-lucide="languages" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight">LinguaPro</span>
</div>
<p className="text-sm leading-relaxed mb-6">
                        Empowering global communication through accessible, high-quality English education.
                    </p>
<div className="flex space-x-4">
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Resources</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Student Portal</a></li>
<li><a className="hover:text-white transition-colors" href="#">Free English Test</a></li>
<li><a className="hover:text-white transition-colors" href="#">Vocabulary List</a></li>
<li><a className="hover:text-white transition-colors" href="#">Community</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 text-center text-sm">
                © 2023 LinguaPro Online School. All rights reserved.
            </div>
</div>
</footer>


<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-[60] hidden" id="enrollModal" role="dialog">

<div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity opacity-0 modal-backdrop" onclick="closeEnrollModal()"></div>

<div className="fixed inset-0 z-10 overflow-y-auto">
<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
<div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg opacity-0 translate-y-4 modal-panel">
<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
<div className="sm:flex sm:items-start">
<div className="w-full">
<div className="flex justify-between items-center mb-5">
<h3 className="text-2xl font-semibold leading-6 text-navy-900" id="modal-title">Complete Enrollment</h3>
<button className="text-slate-400 hover:text-slate-600" onclick="closeEnrollModal()">
<svg className="lucide lucide-x w-6 h-6" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<form className="space-y-4" id="enrollForm" novalidate="">
<div>
<label className="block text-sm font-medium text-slate-700" htmlFor="name">Full Name</label>
<input className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-navy focus:ring-navy px-3 py-2 border text-base" id="name" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700" htmlFor="email">Email Address</label>
<input className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-navy focus:ring-navy px-3 py-2 border text-base" id="email" name="email" placeholder="jane@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700" htmlFor="course-select">Selected Plan/Course</label>
<select className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-navy focus:ring-navy px-3 py-2 border text-base" id="course-select" name="course">
<option value="General English">General English ($199)</option>
<option value="Business English Pro">Business English Pro ($349)</option>
<option value="IELTS Prep">IELTS Prep ($299)</option>
<option value="Basic">Basic Subscription ($49/mo)</option>
<option value="Intensive">Intensive Subscription ($129/mo)</option>
<option value="Premium">Premium Subscription ($249/mo)</option>
</select>
</div>

<div className="pt-4 border-t border-slate-100">
<label className="block text-sm font-medium text-slate-700 mb-2">Payment Details</label>
<div className="p-3 border border-slate-300 rounded-lg bg-slate-50 flex items-center justify-between">
<div className="flex items-center gap-2 text-slate-400 text-sm">
<svg className="lucide lucide-credit-card w-5 h-5" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
<span>•••• •••• •••• 4242</span>
</div>
<span className="text-xs font-semibold text-slate-400">MM/YY</span>
</div>
<p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
<svg className="lucide lucide-lock w-3 h-3" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Secure connection via Stripe
                                        </p>
</div>
<div className="text-red-500 text-sm hidden" id="form-error">Please fill in all required fields correctly.</div>
<div className="mt-5 sm:mt-6">
<button className="inline-flex w-full justify-center rounded-xl bg-navy px-3 py-3 text-base font-semibold text-white shadow-sm hover:bg-navy-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy disabled:opacity-70 disabled:cursor-not-allowed" id="submit-btn" type="submit">
<span>Confirm &amp; Pay</span>
</button>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div aria-labelledby="course-title" aria-modal="true" className="fixed inset-0 z-[60] hidden overflow-hidden" id="courseModal" role="dialog">
<div className="absolute inset-0 overflow-hidden">
<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
<div className="pointer-events-auto w-screen max-w-2xl transform transition ease-in-out duration-500 sm:duration-700 translate-x-full" id="course-panel">
<div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">

<div className="px-4 py-6 sm:px-6 bg-navy-900 text-white">
<div className="flex items-start justify-between">
<h2 className="text-2xl font-semibold leading-6" id="course-detail-title">Course Name</h2>
<div className="ml-3 flex h-7 items-center">
<button className="relative rounded-md text-slate-200 hover:text-white focus:outline-none" onclick="closeCourseModal()" type="button">
<span className="absolute -inset-2.5"></span>
<span className="sr-only">Close panel</span>
<svg className="lucide lucide-x w-6 h-6" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>
<p className="mt-2 text-sm text-slate-300">Level: Intermediate • 12 Weeks</p>
</div>

<div className="relative flex-1 px-4 py-6 sm:px-6">
<div className="space-y-8">

<div>
<h3 className="text-lg font-semibold text-navy-900 mb-2">Overview</h3>
<p className="text-slate-600 leading-relaxed">
                                        This comprehensive course is designed to take your skills to the next level. Through a mix of video lectures, interactive quizzes, and live group sessions, you will master the nuances of the language.
                                    </p>
</div>

<div>
<h3 className="text-lg font-semibold text-navy-900 mb-4">Syllabus</h3>
<div className="space-y-3">
<div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
<div className="font-medium text-navy-900">Module 1: Foundations</div>
<div className="text-sm text-slate-500 mt-1">Grammar refresher and core vocabulary.</div>
</div>
<div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
<div className="font-medium text-navy-900">Module 2: Advanced Conversation</div>
<div className="text-sm text-slate-500 mt-1">Idioms, phrasal verbs, and fluency practice.</div>
</div>
<div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
<div className="font-medium text-navy-900">Module 3: Real World Application</div>
<div className="text-sm text-slate-500 mt-1">Business scenarios and travel simulations.</div>
</div>
</div>
</div>

<div>
<h3 className="text-lg font-semibold text-navy-900 mb-4">Instructor</h3>
<div className="flex items-center gap-4">
<img className="w-16 h-16 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/33.jpg"/>
<div>
<div className="font-medium text-navy-900">Dr. Emily Watson</div>
<div className="text-sm text-slate-500">PhD in Linguistics, 10+ years experience</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-slate-200 px-4 py-6 sm:px-6 bg-slate-50">
<button className="w-full bg-coral hover:bg-coral-hover text-white px-6 py-3 rounded-xl text-lg font-medium shadow-lg shadow-coral/20" onclick="closeCourseModal(); openEnrollModal();">
                                Enroll in this Course
                            </button>
</div>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
