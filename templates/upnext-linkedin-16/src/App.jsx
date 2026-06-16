import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            
            // FAQ Accordion Logic
            const faqQuestions = document.querySelectorAll('.faq-item button');
            
            faqQuestions.forEach(question => {
                question.addEventListener('click', () => {
                    const answer = question.nextElementSibling;
                    const icon = question.querySelector('.icon-plus');
                    const isOpen = answer.classList.contains('open');

                    // Close all others (optional - standard accordion behavior)
                    document.querySelectorAll('.faq-answer').forEach(item => {
                        item.classList.remove('open');
                    });
                    document.querySelectorAll('.icon-plus').forEach(i => {
                        i.textContent = '+';
                        i.style.transform = 'rotate(0deg)';
                    });

                    // Toggle current
                    if (!isOpen) {
                        answer.classList.add('open');
                        icon.textContent = '−'; // Minus sign
                        icon.style.transform = 'rotate(180deg)';
                    }
                });
            });

            // Form Validation and Submission
            const form = document.getElementById('waitlist-form');
            const successMessage = document.getElementById('success-message');
            
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                let isValid = true;

                // Reset errors
                document.getElementById('name-error').classList.add('hidden');
                document.getElementById('email-error').classList.add('hidden');
                document.getElementById('name').classList.remove('border-[#FF3333]');
                document.getElementById('email').classList.remove('border-[#FF3333]');

                // Get values
                const name = document.getElementById('name').value.trim();
                const email = document.getElementById('email').value.trim();

                // Validate Name
                if (name === '') {
                    document.getElementById('name-error').classList.remove('hidden');
                    document.getElementById('name').classList.add('border-[#FF3333]');
                    isValid = false;
                }

                // Validate Email
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    document.getElementById('email-error').classList.remove('hidden');
                    document.getElementById('email').classList.add('border-[#FF3333]');
                    isValid = false;
                }

                if (isValid) {
                    const formData = new FormData(form);
                    const data = Object.fromEntries(formData);
                    
                    console.log('Waitlist Signup:', data);

                    // Animation switch
                    form.style.opacity = '0';
                    setTimeout(() => {
                        form.classList.add('hidden');
                        successMessage.classList.remove('hidden');
                        successMessage.style.opacity = '0';
                        successMessage.style.transition = 'opacity 500ms ease';
                        
                        // Force reflow
                        void successMessage.offsetWidth; 
                        
                        successMessage.style.opacity = '1';
                    }, 200);

                    // Reset logic (simulated)
                    setTimeout(() => {
                        // In a real app, you wouldn't necessarily reset immediately unless it's a kiosk
                        // But per instructions:
                        /* 
                        form.reset();
                        successMessage.classList.add('hidden');
                        form.classList.remove('hidden');
                        form.style.opacity = '1';
                        */
                    }, 5000);
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-[#1A1A1A] transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-[#CCFF00] font-bold text-xl tracking-tight hover:text-white transition-colors duration-200" href="#">
                UPNEXT
            </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#E0E0E0]">

</nav>
<a className="bg-[#CCFF00] text-black hover:bg-[#b3e600] active:scale-95 transition-all duration-200 font-semibold text-sm px-4 py-2 rounded-md uppercase tracking-wide" href="#waitlist">
                Join Waitlist
            </a>
</div>
</header>
<main>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center text-center overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1A1A1A] via-black to-black -z-10 opacity-50"></div>
<h1 className="text-[#CCFF00] font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight max-w-4xl mb-6 leading-[1.1] text-glow">
                The place for LinkedIn domination.
            </h1>
<p className="text-white font-semibold text-xl md:text-2xl mb-6 tracking-tight">
                Will you be up next?
            </p>
<p className="text-[#E0E0E0] text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
                Stop getting lost in the noise. Join 500+ ambitious creators building accountability, visibility, and real influence on LinkedIn.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="bg-[#CCFF00] text-black font-semibold text-base px-8 py-3 rounded-md hover:bg-[#b3e600] hover:scale-[1.02] transition-all duration-200 shadow-[0_0_20px_rgba(204,255,0,0.2)]" href="#waitlist">
                    APPLY FOR WAITLIST
                </a>
</div>
</section>

<section className="py-20 px-6 max-w-7xl mx-auto">
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-[#1A1A1A] p-8 rounded-xl border-t-4 border-[#CCFF00] hover:scale-[1.02] transition-transform duration-200 shadow-lg">
<div className="text-[#CCFF00] mb-6">
<iconify-icon icon="solar:eye-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h4 className="text-white text-2xl font-semibold mb-3 tracking-tight">Visibility</h4>
<p className="text-[#E0E0E0] leading-relaxed">
                        Get noticed on LinkedIn with a community that celebrates your wins publicly and helps you stand out from the crowd.
                    </p>
</div>

<div className="bg-[#1A1A1A] p-8 rounded-xl border-t-4 border-[#CCFF00] hover:scale-[1.02] transition-transform duration-200 shadow-lg">
<div className="text-[#CCFF00] mb-6">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h4 className="text-white text-2xl font-semibold mb-3 tracking-tight">Accountability</h4>
<p className="text-[#E0E0E0] leading-relaxed">
                        Join cohorts of ambitious creators committed to growth. No more ghosting on your goals—we keep you on track.
                    </p>
</div>

<div className="bg-[#1A1A1A] p-8 rounded-xl border-t-4 border-[#CCFF00] hover:scale-[1.02] transition-transform duration-200 shadow-lg">
<div className="text-[#CCFF00] mb-6">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h4 className="text-white text-2xl font-semibold mb-3 tracking-tight">Authenticity</h4>
<p className="text-[#E0E0E0] leading-relaxed">
                        Real strategies, real people, real results. We don't teach cheap hacks; we build sustainable thought leadership.
                    </p>
</div>
</div>
</section>

<section className="py-20 px-6 bg-[#0A0A0A] border-y border-[#1A1A1A]">
<div className="max-w-4xl mx-auto">
<div className="grid md:grid-cols-2 gap-8">

<article className="flex flex-col items-center text-center p-8 bg-[#1A1A1A] rounded-2xl">
<div className="text-[#CCFF00] mb-4 text-3xl">🚀</div>
<p className="text-[#CCFF00] font-semibold text-xl md:text-2xl mb-6 italic tracking-tight">
                            "+200 profile views, +150 connections in just 30 days."
                        </p>
<div className="mt-auto">
<strong className="block text-white text-lg">Sarah Chen</strong>
<span className="text-[#999999] text-sm">Product Manager</span>
</div>
</article>

<article className="flex flex-col items-center text-center p-8 bg-[#1A1A1A] rounded-2xl">
<div className="text-[#CCFF00] mb-4 text-3xl">✨</div>
<p className="text-[#CCFF00] font-semibold text-xl md:text-2xl mb-6 italic tracking-tight">
                            "Finally stopped overthinking and started posting. 3 viral posts in a month!"
                        </p>
<div className="mt-auto">
<strong className="block text-white text-lg">Marcus Davis</strong>
<span className="text-[#999999] text-sm">Founder &amp; Creator</span>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto">
<h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16 tracking-tight">
                How It Works
            </h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">

<div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-[#1A1A1A] -z-10"></div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-[#CCFF00] flex items-center justify-center text-[#CCFF00] text-2xl font-bold mb-6 shadow-[0_0_15px_rgba(204,255,0,0.1)] bg-black z-10">
                        1
                    </div>
<h4 className="text-white text-lg font-semibold mb-2">Apply</h4>
<p className="text-[#999999] text-sm leading-relaxed">
                        Tell us about your LinkedIn goals and current challenges.
                    </p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-[#CCFF00] flex items-center justify-center text-[#CCFF00] text-2xl font-bold mb-6 shadow-[0_0_15px_rgba(204,255,0,0.1)] bg-black z-10">
                        2
                    </div>
<h4 className="text-white text-lg font-semibold mb-2">Join Cohort</h4>
<p className="text-[#999999] text-sm leading-relaxed">
                        Get matched with 20–50 ambitious creators at your level.
                    </p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-[#CCFF00] flex items-center justify-center text-[#CCFF00] text-2xl font-bold mb-6 shadow-[0_0_15px_rgba(204,255,0,0.1)] bg-black z-10">
                        3
                    </div>
<h4 className="text-white text-lg font-semibold mb-2">Execute</h4>
<p className="text-[#999999] text-sm leading-relaxed">
                        Follow the framework, post content, and share wins publicly.
                    </p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-[#CCFF00] flex items-center justify-center text-[#CCFF00] text-2xl font-bold mb-6 shadow-[0_0_15px_rgba(204,255,0,0.1)] bg-black z-10">
                        4
                    </div>
<h4 className="text-white text-lg font-semibold mb-2">Dominate</h4>
<p className="text-[#999999] text-sm leading-relaxed">
                        Watch your visibility, connections, and influence grow daily.
                    </p>
</div>
</div>
</section>

<section className="py-20 px-6 bg-[#1A1A1A]">
<div className="max-w-3xl mx-auto">
<h3 className="text-[#CCFF00] text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">
                    Frequently Asked Questions
                </h3>
<div className="space-y-4">

<div className="border border-[#333] rounded-lg bg-black overflow-hidden faq-item">
<button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group">
<span className="text-white font-semibold text-lg pr-4">What makes UPNEXT different from courses?</span>
<span className="text-[#CCFF00] text-2xl transition-transform duration-200 group-hover:scale-110 icon-plus">+</span>
</button>
<div className="faq-answer bg-black border-t border-[#1A1A1A]">
<div className="faq-inner px-6 pb-6 pt-2 text-[#E0E0E0] leading-relaxed">
                                We focus on execution and community, not just information. Most courses give you videos to watch alone. We put you in a room with people who ensure you actually do the work.
                            </div>
</div>
</div>

<div className="border border-[#333] rounded-lg bg-black overflow-hidden faq-item">
<button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group">
<span className="text-white font-semibold text-lg pr-4">How much time does it take?</span>
<span className="text-[#CCFF00] text-2xl transition-transform duration-200 group-hover:scale-110 icon-plus">+</span>
</button>
<div className="faq-answer bg-black border-t border-[#1A1A1A]">
<div className="faq-inner px-6 pb-6 pt-2 text-[#E0E0E0] leading-relaxed">
                                Expect to spend 2–3 hours per week engaging with your cohort and creating content. It's designed for busy professionals.
                            </div>
</div>
</div>

<div className="border border-[#333] rounded-lg bg-black overflow-hidden faq-item">
<button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group">
<span className="text-white font-semibold text-lg pr-4">Is there a money-back guarantee?</span>
<span className="text-[#CCFF00] text-2xl transition-transform duration-200 group-hover:scale-110 icon-plus">+</span>
</button>
<div className="faq-answer bg-black border-t border-[#1A1A1A]">
<div className="faq-inner px-6 pb-6 pt-2 text-[#E0E0E0] leading-relaxed">
                                Absolutely. If you join a cohort, do the work, and don't see value within the first 14 days, we'll refund you 100%.
                            </div>
</div>
</div>

<div className="border border-[#333] rounded-lg bg-black overflow-hidden faq-item">
<button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group">
<span className="text-white font-semibold text-lg pr-4">Can I join if I'm new to LinkedIn?</span>
<span className="text-[#CCFF00] text-2xl transition-transform duration-200 group-hover:scale-110 icon-plus">+</span>
</button>
<div className="faq-answer bg-black border-t border-[#1A1A1A]">
<div className="faq-inner px-6 pb-6 pt-2 text-[#E0E0E0] leading-relaxed">
                                Yes! We have specific tracks for beginners. We'll help you optimize your profile and start posting with confidence.
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="waitlist">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1A1A1A] via-black to-black -z-10"></div>
<div className="max-w-xl mx-auto bg-[#1A1A1A] p-8 md:p-12 rounded-2xl border border-[#333] shadow-2xl relative">
<div className="text-center mb-10">
<h2 className="text-[#CCFF00] text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                        Ready to get up next?
                    </h2>
<p className="text-white text-lg">
                        Join 500+ ambitious creators. Apply now for our next cohort.
                    </p>
</div>

<div className="hidden text-center py-12" id="success-message">
<div className="text-[#CCFF00] text-6xl mb-4 mx-auto">
<iconify-icon icon="solar:check-circle-bold" width="64"></iconify-icon>
</div>
<h3 className="text-white text-2xl font-bold mb-2">You're on the list!</h3>
<p className="text-[#E0E0E0]">Thanks! Check your email for next steps. 🚀</p>
</div>

<form className="space-y-5" id="waitlist-form" novalidate="">
<div className="space-y-2">
<label className="block text-sm font-medium text-white" htmlFor="name">Full Name</label>
<input className="w-full bg-black border border-[#333] text-white rounded px-4 py-3 focus:border-[#CCFF00] focus:ring-0 input-glow transition-all outline-none placeholder-[#666]" id="name" name="name" placeholder="Ex. Jordan Lee" required="" type="text"/>
<p className="text-[#FF3333] text-xs hidden" id="name-error">Please enter your name.</p>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-white" htmlFor="email">Email Address</label>
<input className="w-full bg-black border border-[#333] text-white rounded px-4 py-3 focus:border-[#CCFF00] focus:ring-0 input-glow transition-all outline-none placeholder-[#666]" id="email" name="email" placeholder="you@company.com" required="" type="email"/>
<p className="text-[#FF3333] text-xs hidden" id="email-error">Please enter a valid email address.</p>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-white" htmlFor="linkedin">LinkedIn URL <span className="text-[#666] font-normal">(Optional)</span></label>
<input className="w-full bg-black border border-[#333] text-white rounded px-4 py-3 focus:border-[#CCFF00] focus:ring-0 input-glow transition-all outline-none placeholder-[#666]" id="linkedin" name="linkedin" placeholder="linkedin.com/in/username" type="url"/>
</div>
<div className="pt-2">
<label className="flex items-start cursor-pointer group custom-checkbox">
<input className="hidden" name="subscribe" type="checkbox"/>
<div className="w-5 h-5 rounded border border-[#666] bg-black flex items-center justify-center mr-3 mt-0.5 group-hover:border-[#CCFF00] transition-colors">
<svg className="w-3 h-3 text-black hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-sm text-[#E0E0E0] select-none">Get updates about future cohorts and community events</span>
</label>
</div>
<button className="w-full bg-[#CCFF00] text-black font-bold text-lg uppercase tracking-wide py-4 rounded hover:bg-[#b3e600] active:scale-[0.98] transition-all duration-200 mt-4 shadow-[0_4px_14px_rgba(204,255,0,0.3)]" type="submit">
                        Join Waitlist
                    </button>
</form>
</div>
</section>
</main>

<footer className="bg-black border-t border-[#CCFF00] pt-12 pb-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<p className="text-[#CCFF00] font-bold text-lg mb-2 tracking-tight">UPNEXT</p>
<p className="text-[#666] text-sm">© 2026 UPNEXT. All rights reserved.</p>
</div>
<div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-white">
<a className="hover:text-[#CCFF00] transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-[#CCFF00] transition-colors" href="#">Terms of Service</a>
<a className="hover:text-[#CCFF00] transition-colors" href="#">Twitter</a>
<a className="hover:text-[#CCFF00] transition-colors" href="#">LinkedIn</a>
<a className="hover:text-[#CCFF00] transition-colors" href="mailto:support@upnext.com">Contact</a>
</div>
</div>
</footer>



    </>
  );
}
