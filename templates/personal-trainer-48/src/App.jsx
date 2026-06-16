import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // FAQ Toggle Logic
        function toggleFaq(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('.faq-icon');
            const isHidden = content.classList.contains('hidden');

            // Optional: Close all other open FAQs
            // document.querySelectorAll('.faq-content').forEach(el => { el.classList.add('hidden'); el.style.paddingBottom = '0'; el.style.height = '0'; });
            // document.querySelectorAll('.faq-icon').forEach(el => el.classList.remove('rotate-180'));

            if (isHidden) {
                content.classList.remove('hidden');
                // Small delay to allow display block to apply before transition (simulated height transition effect)
                setTimeout(() => {
                    content.style.height = 'auto';
                    content.classList.add('pb-6');
                }, 10);
                icon.classList.add('rotate-180');
            } else {
                content.classList.add('hidden');
                content.classList.remove('pb-6');
                icon.classList.remove('rotate-180');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 w-full z-50 bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-oswald text-2xl font-medium tracking-tight uppercase flex items-center gap-1" href="#">
                StephenPT<span className="text-[#FF6B00]">•</span>
</a>
<nav className="hidden md:flex gap-8">
<a className="text-base font-medium text-zinc-300 hover:text-[#FF6B00] transition-colors" href="#about">About</a>
<a className="text-base font-medium text-zinc-300 hover:text-[#FF6B00] transition-colors" href="#programs">Programs</a>
<a className="text-base font-medium text-zinc-300 hover:text-[#FF6B00] transition-colors" href="#testimonials">Testimonials</a>
<a className="text-base font-medium text-zinc-300 hover:text-[#FF6B00] transition-colors" href="#pricing">Pricing</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex bg-[#FF6B00] text-[#0D0D0D] px-6 py-2.5 rounded-full text-base font-medium hover:bg-[#FF7A1A] transition-colors items-center justify-center" href="#contact">
                    Contact
                </a>
<button className="md:hidden text-white p-2">
<i data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#0D0D0D] overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="relative z-10 max-w-2xl">
<h1 className="font-oswald text-5xl md:text-6xl lg:text-[5rem] font-medium tracking-tight uppercase leading-[1.05] text-white">
                    I help people <span className="text-[#FF6B00]">move</span>,<br/>
                    build and transform<br/>
                    their best self
                </h1>
<p className="mt-8 text-lg md:text-xl text-zinc-400 leading-relaxed max-w-lg">
                    Personalised training and proven programs designed to transform your fitness, boost confidence, and keep you motivated every step of the way — in Warsaw or online.
                </p>
<div className="mt-10">
<a className="inline-flex items-center gap-3 bg-[#FF6B00] text-[#0D0D0D] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#FF7A1A] transition-transform hover:scale-105 group" href="#">
<span className="bg-[#0D0D0D] text-[#FF6B00] p-1.5 rounded-full group-hover:bg-white group-hover:text-[#0D0D0D] transition-colors">
<i className="w-5 h-5 ml-0.5" data-lucide="play" strokeWidth="1.5"></i>
</span>
                        Watch Free Tutorial
                    </a>
</div>
</div>
<div className="relative w-full aspect-[4/3] sm:aspect-square flex justify-center items-center">

<div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00]/5 to-transparent rounded-full blur-3xl"></div>

<div className="relative w-[90%] h-[90%] max-w-[500px]">

<div className="absolute -inset-4 border border-[#FF6B00]/40 rounded-full shadow-[0_0_60px_rgba(255,107,0,0.15)] animate-[pulse_4s_ease-in-out_infinite]"></div>

<div className="relative w-full h-full rounded-full overflow-hidden bg-zinc-900 border border-white/5">

<div className="absolute inset-0 bg-zinc-800 mix-blend-overlay"></div>
<div className="flex text-zinc-700 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<i className="w-16 h-16 opacity-50" data-lucide="image" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="bg-[#FF6B00] py-4 border-y border-black overflow-hidden relative">
<div className="marquee-container text-[#0D0D0D] font-oswald text-2xl tracking-tight font-medium uppercase flex items-center whitespace-nowrap">
<span className="mx-4">STRENGTH</span><span className="mx-2">•</span>
<span className="mx-4">MOVEMENT</span><span className="mx-2">•</span>
<span className="mx-4">PARKOUR</span><span className="mx-2">•</span>
<span className="mx-4">CONDITIONING</span><span className="mx-2">•</span>
<span className="mx-4">MOBILITY</span><span className="mx-2">•</span>
<span className="mx-4">MINDFULNESS</span><span className="mx-2">•</span>
<span className="mx-4">BODY TRANSFORMATION</span><span className="mx-2">•</span>
<span className="mx-4">WARSAW</span><span className="mx-2">•</span>

<span className="mx-4">STRENGTH</span><span className="mx-2">•</span>
<span className="mx-4">MOVEMENT</span><span className="mx-2">•</span>
<span className="mx-4">PARKOUR</span><span className="mx-2">•</span>
<span className="mx-4">CONDITIONING</span><span className="mx-2">•</span>
<span className="mx-4">MOBILITY</span><span className="mx-2">•</span>
<span className="mx-4">MINDFULNESS</span><span className="mx-2">•</span>
<span className="mx-4">BODY TRANSFORMATION</span><span className="mx-2">•</span>
<span className="mx-4">WARSAW</span><span className="mx-2">•</span>
</div>
</div>

<section className="bg-white text-[#0D0D0D] py-24 lg:py-32" id="about">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="relative w-full aspect-[4/5] bg-zinc-100 rounded-[2rem] overflow-hidden shadow-xl border border-zinc-200">

<div className="flex text-zinc-300 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<i className="w-24 h-24" data-lucide="user" strokeWidth="1.5"></i>
</div>
</div>
<div>
<h2 className="font-oswald text-4xl lg:text-5xl font-medium tracking-tight uppercase leading-tight">
                    CERTIFIED MASTER TRAINER GUIDING YOU TO ACHIEVE YOUR BEST BODY AND MOVEMENT
                </h2>
<p className="mt-6 text-lg text-zinc-600 leading-relaxed">
                    I'm Stephen Walker, a Master Trainer dedicated to helping people move better and transform their lives. With a background in parkour, strength training and mindfulness coaching, I make fitness effective, fearless and sustainable.
                </p>
<div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10">
<div>
<div className="font-oswald text-4xl lg:text-5xl text-[#FF6B00] font-medium tracking-tight mb-2">100+</div>
<div className="text-base text-zinc-800 font-medium uppercase tracking-wider">Happy Clients</div>
</div>
<div>
<div className="font-oswald text-4xl lg:text-5xl text-[#FF6B00] font-medium tracking-tight mb-2">500+</div>
<div className="text-base text-zinc-800 font-medium uppercase tracking-wider">Sessions Completed</div>
</div>
<div>
<div className="font-oswald text-4xl lg:text-5xl text-[#FF6B00] font-medium tracking-tight mb-2">8+</div>
<div className="text-base text-zinc-800 font-medium uppercase tracking-wider">Years of Experience</div>
</div>
<div>
<div className="font-oswald text-4xl lg:text-5xl text-[#FF6B00] font-medium tracking-tight mb-2">6</div>
<div className="text-base text-zinc-800 font-medium uppercase tracking-wider">Specialised Programs</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0D0D0D] py-24 lg:py-32" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-oswald text-4xl lg:text-5xl font-medium tracking-tight uppercase text-white">
                    Pick Your <span className="text-[#FF6B00]">Perfect</span> Plan
                </h2>
<p className="mt-4 text-lg text-zinc-400">Find the perfect training program to match your goals and lifestyle.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">

<div className="bg-[#111111] border border-white/10 rounded-[2rem] p-8 lg:p-10 transition-colors hover:border-[#FF6B00]/40">
<h3 className="font-oswald text-3xl font-medium tracking-tight uppercase text-white mb-2">Starter Plan</h3>
<div className="text-lg text-zinc-400 mb-8 pb-8 border-b border-white/10 h-[60px]">Contact for pricing</div>
<ul className="space-y-5 mb-10 min-h-[200px]">
<li className="flex items-start gap-3">
<div className="w-2 h-2 rounded-full bg-[#FF6B00] mt-2 shrink-0"></div>
<span className="text-lg text-zinc-300">2 Sessions per Week</span>
</li>
<li className="flex items-start gap-3">
<div className="w-2 h-2 rounded-full bg-[#FF6B00] mt-2 shrink-0"></div>
<span className="text-lg text-zinc-300">Personalised Beginner Workout Plan</span>
</li>
<li className="flex items-start gap-3">
<div className="w-2 h-2 rounded-full bg-[#FF6B00] mt-2 shrink-0"></div>
<span className="text-lg text-zinc-300">Movement Assessment</span>
</li>
<li className="flex items-start gap-3">
<div className="w-2 h-2 rounded-full bg-[#FF6B00] mt-2 shrink-0"></div>
<span className="text-lg text-zinc-300">Flexible Scheduling</span>
</li>
</ul>
<a className="block w-full py-4 px-6 rounded-full border border-[#FF6B00] text-[#FF6B00] text-center text-lg font-medium hover:bg-[#FF6B00] hover:text-[#0D0D0D] transition-colors" href="#">
                        Book Your Plan
                    </a>
</div>

<div className="bg-[#FF6B00] rounded-[2rem] p-8 lg:p-10 transform md:-translate-y-4 shadow-2xl relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-3xl rounded-full"></div>
<h3 className="font-oswald text-3xl font-medium tracking-tight uppercase text-[#0D0D0D] mb-2 relative z-10">Standard Plan</h3>
<div className="text-lg text-[#0D0D0D]/80 mb-8 pb-8 border-b border-[#0D0D0D]/10 font-medium h-[60px] relative z-10">Most Popular</div>
<ul className="space-y-5 mb-10 min-h-[200px] relative z-10">
<li className="flex items-start gap-3">
<div className="w-2 h-2 rounded-full bg-[#0D0D0D] mt-2 shrink-0"></div>
<span className="text-lg text-[#0D0D0D] font-medium">4 Sessions per Week</span>
</li>
<li className="flex items-start gap-3">
<div className="w-2 h-2 rounded-full bg-[#0D0D0D] mt-2 shrink-0"></div>
<span className="text-lg text-[#0D0D0D] font-medium">Nutrition Guidance Included</span>
</li>
<li className="flex items-start gap-3">
<div className="w-2 h-2 rounded-full bg-[#0D0D0D] mt-2 shrink-0"></div>
<span className="text-lg text-[#0D0D0D] font-medium">Progress Tracking &amp; Feedback</span>
</li>
<li className="flex items-start gap-3">
<div className="w-2 h-2 rounded-full bg-[#0D0D0D] mt-2 shrink-0"></div>
<span className="text-lg text-[#0D0D0D] font-medium">Goal-Oriented Training Plan</span>
</li>
</ul>
<a className="block w-full py-4 px-6 rounded-full bg-[#0D0D0D] text-white text-center text-lg font-medium hover:bg-zinc-800 transition-colors relative z-10" href="#">
                        Book Your Plan
                    </a>
</div>

<div className="bg-[#111111] border border-white/10 rounded-[2rem] p-8 lg:p-10 transition-colors hover:border-[#FF6B00]/40">
<h3 className="font-oswald text-3xl font-medium tracking-tight uppercase text-white mb-2">Premium Plan</h3>
<div className="text-lg text-zinc-400 mb-8 pb-8 border-b border-white/10 h-[60px]">Contact for pricing</div>
<ul className="space-y-5 mb-10 min-h-[200px]">
<li className="flex items-start gap-3">
<div className="w-2 h-2 rounded-full bg-[#FF6B00] mt-2 shrink-0"></div>
<span className="text-lg text-zinc-300">Unlimited Sessions</span>
</li>
<li className="flex items-start gap-3">
<div className="w-2 h-2 rounded-full bg-[#FF6B00] mt-2 shrink-0"></div>
<span className="text-lg text-zinc-300">Full Movement &amp; Lifestyle Coaching</span>
</li>
<li className="flex items-start gap-3">
<div className="w-2 h-2 rounded-full bg-[#FF6B00] mt-2 shrink-0"></div>
<span className="text-lg text-zinc-300">Personalised Performance Programs</span>
</li>
<li className="flex items-start gap-3">
<div className="w-2 h-2 rounded-full bg-[#FF6B00] mt-2 shrink-0"></div>
<span className="text-lg text-zinc-300">24/7 WhatsApp Support</span>
</li>
</ul>
<a className="block w-full py-4 px-6 rounded-full border border-[#FF6B00] text-[#FF6B00] text-center text-lg font-medium hover:bg-[#FF6B00] hover:text-[#0D0D0D] transition-colors" href="#">
                        Book Your Plan
                    </a>
</div>
</div>
</div>
</section>

<section className="bg-white text-[#0D0D0D] py-24 lg:py-32 overflow-hidden" id="testimonials">
<div className="max-w-5xl mx-auto px-6 relative">
<i className="w-20 h-20 text-[#FF6B00]/20 absolute -top-8 -left-4 md:-top-12 md:-left-12 rotate-180" data-lucide="quote" fill="currentColor" strokeWidth="2"></i>
<div className="relative z-10">
<p className="font-oswald text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-snug uppercase">
                    "Training with Stephen completely changed how I move and feel. I went from chronic back pain to running, jumping and feeling stronger than ever. His approach is unique and genuinely fun."
                </p>
<div className="mt-12 flex items-center gap-4">
<div className="w-16 h-16 rounded-full bg-zinc-200 border-2 border-[#FF6B00] flex items-center justify-center overflow-hidden">
<i className="w-8 h-8 text-zinc-400" data-lucide="user" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-xl font-medium text-[#0D0D0D]">Client Name</div>
<div className="text-base text-zinc-500">Warsaw, Poland</div>
</div>
</div>
</div>

<div className="mt-16 flex items-center gap-6">
<button className="p-3 rounded-full border border-zinc-300 text-zinc-400 hover:text-[#FF6B00] hover:border-[#FF6B00] transition-colors">
<i className="w-6 h-6" data-lucide="arrow-left" strokeWidth="1.5"></i>
</button>
<button className="p-3 rounded-full border border-[#FF6B00] text-[#FF6B00] bg-orange-50 hover:bg-[#FF6B00] hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
<i className="w-20 h-20 text-[#FF6B00]/20 absolute -top-8 -left-4 md:-top-12 md:-left-12 rotate-180" data-lucide="quote" fill="currentColor" strokeWidth="2"></i>
</div>
</section>

<section className="bg-[#0D0D0D] py-24 lg:py-32">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1.5fr] gap-16">
<div className="max-w-md">
<h2 className="font-oswald text-4xl lg:text-5xl font-medium tracking-tight uppercase leading-tight text-white">
                    FREQUENTLY ASKED QUESTIONS
                </h2>
<p className="mt-6 text-lg text-zinc-400">
                    Quick answers to the things people ask most. Can't find what you're looking for? Reach out.
                </p>
<div className="mt-10">
<a className="inline-flex bg-[#FF6B00] text-[#0D0D0D] px-8 py-3.5 rounded-full text-lg font-medium hover:bg-[#FF7A1A] transition-colors" href="#contact">
                        Contact
                    </a>
</div>
</div>
<div className="space-y-1">

<div className="border-b border-white/10">
<button className="w-full py-6 flex items-center justify-between text-left group" onclick="toggleFaq(this)">
<div className="flex items-center gap-6">
<span className="font-oswald text-3xl text-[#FF6B00] font-medium tracking-tight">1</span>
<span className="font-oswald text-xl md:text-2xl font-medium tracking-tight uppercase text-white group-hover:text-[#FF6B00] transition-colors">Do you train in English?</span>
</div>
<i className="w-6 h-6 text-zinc-400 faq-icon rotate-180" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="faq-content overflow-hidden text-lg text-zinc-400 pb-6 pl-[3.5rem] md:pl-[4rem]">
                        Yes! As a native English speaker, all my training sessions, programs, and communications can be fully conducted in English. I also have a working knowledge of Polish.
                    </div>
</div>

<div className="border-b border-white/10">
<button className="w-full py-6 flex items-center justify-between text-left group" onclick="toggleFaq(this)">
<div className="flex items-center gap-6">
<span className="font-oswald text-3xl text-[#FF6B00] font-medium tracking-tight">2</span>
<span className="font-oswald text-xl md:text-2xl font-medium tracking-tight uppercase text-white group-hover:text-[#FF6B00] transition-colors">Where are you based in Warsaw?</span>
</div>
<i className="w-6 h-6 text-zinc-400 faq-icon" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="faq-content overflow-hidden text-lg text-zinc-400 pb-0 h-0 pl-[3.5rem] md:pl-[4rem] hidden">
                        I train clients at various well-equipped gym locations across Warsaw. We can discuss the most convenient location for you during our initial consultation. I also offer outdoor parkour sessions weather permitting.
                    </div>
</div>

<div className="border-b border-white/10">
<button className="w-full py-6 flex items-center justify-between text-left group" onclick="toggleFaq(this)">
<div className="flex items-center gap-6">
<span className="font-oswald text-3xl text-[#FF6B00] font-medium tracking-tight">3</span>
<span className="font-oswald text-xl md:text-2xl font-medium tracking-tight uppercase text-white group-hover:text-[#FF6B00] transition-colors">Do you offer online training?</span>
</div>
<i className="w-6 h-6 text-zinc-400 faq-icon" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="faq-content overflow-hidden text-lg text-zinc-400 pb-0 h-0 pl-[3.5rem] md:pl-[4rem] hidden">
                        Absolutely. My online programs are highly detailed and include video breakdowns, movement assessments, and regular check-ins to ensure you progress safely and effectively from anywhere in the world.
                    </div>
</div>

<div className="border-b border-white/10">
<button className="w-full py-6 flex items-center justify-between text-left group" onclick="toggleFaq(this)">
<div className="flex items-center gap-6">
<span className="font-oswald text-3xl text-[#FF6B00] font-medium tracking-tight">4</span>
<span className="font-oswald text-xl md:text-2xl font-medium tracking-tight uppercase text-white group-hover:text-[#FF6B00] transition-colors">What is your training style?</span>
</div>
<i className="w-6 h-6 text-zinc-400 faq-icon" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="faq-content overflow-hidden text-lg text-zinc-400 pb-0 h-0 pl-[3.5rem] md:pl-[4rem] hidden">
                        My approach blends traditional strength and conditioning with functional movement and parkour principles. The focus is on building a robust, pain-free body that is capable of handling real-world physical challenges while looking great.
                    </div>
</div>

<div className="border-b border-white/10">
<button className="w-full py-6 flex items-center justify-between text-left group" onclick="toggleFaq(this)">
<div className="flex items-center gap-6">
<span className="font-oswald text-3xl text-[#FF6B00] font-medium tracking-tight">5</span>
<span className="font-oswald text-xl md:text-2xl font-medium tracking-tight uppercase text-white group-hover:text-[#FF6B00] transition-colors">How do I get started?</span>
</div>
<i className="w-6 h-6 text-zinc-400 faq-icon" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="faq-content overflow-hidden text-lg text-zinc-400 pb-0 h-0 pl-[3.5rem] md:pl-[4rem] hidden">
                        Simply click the "Contact" button or reach out via email/WhatsApp. We'll set up a brief consultation to discuss your goals, history, and figure out which plan works best for your needs.
                    </div>
</div>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden mx-6 lg:max-w-7xl lg:mx-auto rounded-[2rem] mb-24">

<div className="absolute inset-0 bg-zinc-900">

<div className="absolute inset-0 opacity-20 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1eb9e2e7-6bbc-42fc-abc1-12d321a2e4ce_3840w.jpg)] bg-cover bg-center"></div>
</div>

<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
<div className="absolute inset-0 bg-[#FF6B00]/10 mix-blend-overlay"></div>
<div className="relative z-10 max-w-3xl mx-auto text-center px-6">
<h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight uppercase text-white">
                Ready to Transform Your Movement?
            </h2>
<p className="mt-6 text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">
                Take the first step toward a stronger, healthier, more confident you. Let's build a body that's capable of anything.
            </p>
<div className="mt-10">
<a className="inline-flex bg-[#FF6B00] text-[#0D0D0D] px-10 py-4 rounded-full text-lg font-medium hover:bg-[#FF7A1A] transition-colors shadow-xl shadow-[#FF6B00]/20" href="#contact">
                    Start Your Journey
                </a>
</div>
</div>
</section>

<footer className="bg-[#0D0D0D] pt-12 pb-8 overflow-hidden" id="contact">

<div className="marquee-container marquee-slow text-white opacity-90 font-oswald text-[12vw] tracking-tighter font-medium uppercase leading-none whitespace-nowrap mb-16 select-none">
<span className="mx-8">CONTACT ME</span><span className="text-[#FF6B00]">■</span>
<span className="mx-8">CONTACT ME</span><span className="text-[#FF6B00]">■</span>
<span className="mx-8">CONTACT ME</span><span className="text-[#FF6B00]">■</span>
<span className="mx-8">CONTACT ME</span><span className="text-[#FF6B00]">■</span>

<span className="mx-8">CONTACT ME</span><span className="text-[#FF6B00]">■</span>
<span className="mx-8">CONTACT ME</span><span className="text-[#FF6B00]">■</span>
<span className="mx-8">CONTACT ME</span><span className="text-[#FF6B00]">■</span>
<span className="mx-8">CONTACT ME</span><span className="text-[#FF6B00]">■</span>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 py-12 border-t border-white/10">
<div className="text-center md:text-left">
<div className="text-lg text-zinc-500 mb-2">Email</div>
<a className="text-xl md:text-2xl text-white font-medium hover:text-[#FF6B00] transition-colors" href="mailto:ziplokwalker@gmail.com">ziplokwalker@gmail.com</a>
</div>
<div className="hidden md:block w-px h-16 bg-white/10"></div>
<div className="text-center md:text-right">
<div className="text-lg text-zinc-500 mb-2">Phone</div>
<a className="text-xl md:text-2xl text-white font-medium hover:text-[#FF6B00] transition-colors" href="tel:+48882927380">+48 882 927 380</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
<p className="text-base text-zinc-500">
                    © 2025 Stephen Walker Personal Trainer. All Rights Reserved.
                </p>
<div className="flex items-center gap-6">
<a className="text-zinc-500 hover:text-[#FF6B00] transition-colors" href="#">
<i className="w-6 h-6" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="text-zinc-500 hover:text-[#FF6B00] transition-colors" href="#">
<i className="w-6 h-6" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="text-zinc-500 hover:text-[#FF6B00] transition-colors" href="https://linkedin.com/in/stephenwalkerpersonaltrainer" target="_blank">
<i className="w-6 h-6" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
