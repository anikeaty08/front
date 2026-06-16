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

        // Custom FAQ Accordion Logic
        document.addEventListener('DOMContentLoaded', () => {
            const faqToggles = document.querySelectorAll('.faq-toggle');
            
            faqToggles.forEach(toggle => {
                toggle.addEventListener('click', () => {
                    const content = toggle.nextElementSibling;
                    const icon = toggle.querySelector('.icon-plus');
                    
                    // Close all other open items
                    document.querySelectorAll('.faq-content').forEach(otherContent => {
                        if (otherContent !== content && !otherContent.classList.contains('hidden')) {
                            otherContent.classList.add('hidden');
                            otherContent.previousElementSibling.querySelector('.icon-plus').style.transform = 'rotate(0deg)';
                        }
                    });

                    // Toggle current item
                    if (content.classList.contains('hidden')) {
                        content.classList.remove('hidden');
                        icon.style.transform = 'rotate(45deg)'; // Turn plus into cross
                    } else {
                        content.classList.add('hidden');
                        icon.style.transform = 'rotate(0deg)';
                    }
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 bg-white border-b border-zinc-200 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<span className="font-extrabold text-2xl tracking-tighter uppercase text-zinc-950 group-hover:text-[#FF0000] transition-colors">Rolando Monge</span>
<div className="w-2 h-2 bg-[#FF0000] rounded-full"></div>
</a>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-semibold tracking-wide uppercase text-zinc-600 hover:text-[#FF0000] transition-colors" href="#home">Home</a>
<a className="text-sm font-semibold tracking-wide uppercase text-zinc-600 hover:text-[#FF0000] transition-colors" href="#about">About</a>
<a className="text-sm font-semibold tracking-wide uppercase text-zinc-600 hover:text-[#FF0000] transition-colors" href="#programs">Programs</a>
<a className="text-sm font-semibold tracking-wide uppercase text-zinc-600 hover:text-[#FF0000] transition-colors" href="#results">Results</a>
<a className="text-sm font-semibold tracking-wide uppercase text-zinc-600 hover:text-[#FF0000] transition-colors" href="#faq">FAQ</a>
</div>
<a className="hidden md:inline-flex bg-[#FF0000] text-white px-6 py-3 font-semibold text-sm uppercase tracking-wide hover:bg-red-700 transition-colors" href="#contact">
                Sign Up For VIP Coaching
            </a>

<button className="md:hidden text-zinc-950">
<i className="w-8 h-8" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<section className="relative pt-20 pb-32 min-h-screen flex items-center bg-zinc-950 clip-diagonal" id="home">

<div className="absolute inset-0 bg-zinc-900 overflow-hidden">

<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-950 to-black"></div>

<div className="absolute top-0 right-10 w-px h-full bg-white/5 transform rotate-12"></div>
<div className="absolute top-0 right-32 w-px h-full bg-white/5 transform rotate-12"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-12">
<div className="max-w-4xl">
<div className="inline-flex items-center gap-2 mb-6 border border-[#FF0000]/30 bg-[#FF0000]/10 px-3 py-1">
<div className="w-1.5 h-1.5 bg-[#FF0000] rounded-full animate-pulse"></div>
<span className="text-[#FF0000] text-xs font-semibold tracking-widest uppercase">Online Fitness Coach</span>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white tracking-tighter uppercase leading-[0.85] mb-8">
                    Unleash Your<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Best Body</span><br/>
                    In 90 Days<span className="text-[#FF0000]">.</span>
</h1>
<p className="text-xl md:text-2xl text-zinc-400 font-medium max-w-2xl mb-10 leading-relaxed">
                    Helping Men &amp; Women lose weight, get fit &amp; develop healthy habits through structured, proven systems.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-20">
<a className="bg-[#FF0000] text-white px-8 py-4 text-center font-semibold text-base uppercase tracking-widest hover:bg-red-700 transition-colors flex items-center justify-center gap-2 group" href="#programs">
                        Join VIP Coaching
                        <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="border-2 border-white text-[#FF0000] px-8 py-4 text-center font-semibold text-base uppercase tracking-widest hover:bg-white hover:text-zinc-950 transition-colors flex items-center justify-center" href="#contact">
                        Get Free Blueprint
                    </a>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-zinc-800 pt-10">
<div>
<div className="text-3xl font-extrabold text-white tracking-tighter">1,500+</div>
<div className="text-sm text-zinc-500 uppercase tracking-widest font-semibold mt-1">Followers</div>
</div>
<div>
<div className="text-3xl font-extrabold text-white tracking-tighter">500+</div>
<div className="text-sm text-zinc-500 uppercase tracking-widest font-semibold mt-1">Clients Helped</div>
</div>
<div>
<div className="text-3xl font-extrabold text-white tracking-tighter">90 Day</div>
<div className="text-sm text-zinc-500 uppercase tracking-widest font-semibold mt-1">Results</div>
</div>
<div>
<div className="text-3xl font-extrabold text-white tracking-tighter">7+ Years</div>
<div className="text-sm text-zinc-500 uppercase tracking-widest font-semibold mt-1">Experience</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="relative group">
<div className="absolute -inset-4 bg-zinc-100 transform rotate-3 group-hover:rotate-1 transition-transform duration-500"></div>
<div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-[#FF0000] z-20"></div>
<div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-[#FF0000] z-20"></div>
<div className="relative aspect-[4/5] bg-zinc-900 overflow-hidden z-10 flex items-center justify-center">
<i className="w-16 h-16 text-zinc-800" data-lucide="camera" strokeWidth="1.5"></i>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white font-semibold tracking-widest uppercase text-sm">@rolo_408</div>
</div>
</div>
<div>
<span className="text-[#FF0000] text-xs font-semibold tracking-widest uppercase block mb-4">Meet Your Coach</span>
<h2 className="text-5xl md:text-6xl font-extrabold text-zinc-950 tracking-tighter uppercase mb-6 leading-tight">
<span className="text-[#FF0000] mr-2">+</span>Committed to your transformation journey
                    </h2>
<p className="text-zinc-600 mb-8 text-xl leading-relaxed">
                        I'm <strong className="text-zinc-950 font-semibold">Rolando Monge</strong>, an Online Fitness &amp; Lifestyle Coach dedicated to helping Men &amp; Women lose weight, get fit &amp; develop healthy habits in 90 days or less. With a proven system built around real results, I guide you every step of the way.
                    </p>
<div className="space-y-4 mb-10">
<div className="flex items-center gap-4 bg-zinc-50 p-4 border-l-2 border-[#FF0000]">
<i className="w-8 h-8 text-[#FF0000]" data-lucide="target" strokeWidth="1.5"></i>
<span className="font-semibold text-zinc-950 uppercase tracking-wide">Proven System</span>
</div>
<div className="flex items-center gap-4 bg-zinc-50 p-4 border-l-2 border-[#FF0000]">
<i className="w-8 h-8 text-[#FF0000]" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
<span className="font-semibold text-zinc-950 uppercase tracking-wide">Results Focused</span>
</div>
<div className="flex items-center gap-4 bg-zinc-50 p-4 border-l-2 border-[#FF0000]">
<i className="w-8 h-8 text-[#FF0000]" data-lucide="users" strokeWidth="1.5"></i>
<span className="font-semibold text-zinc-950 uppercase tracking-wide">Community Driven</span>
</div>
</div>
<a className="inline-flex bg-[#FF0000] text-white px-8 py-4 font-semibold text-sm uppercase tracking-widest hover:bg-zinc-950 transition-colors" href="#contact">
                        Work With Me
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 relative border-t border-zinc-200" id="programs">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-[#FF0000] text-xs font-semibold tracking-widest uppercase block mb-4">Training Options</span>
<h2 className="text-5xl md:text-6xl font-extrabold text-zinc-950 tracking-tighter uppercase">
<span className="text-[#FF0000] mr-2">+</span>Find your perfect program
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-zinc-950 border-t-[3px] border-[#FF0000] group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full shadow-xl shadow-zinc-200/50">
<div className="aspect-video bg-zinc-900 relative flex items-center justify-center overflow-hidden">
<i className="w-12 h-12 text-zinc-800" data-lucide="dumbbell" strokeWidth="1.5"></i>
<div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-300"></div>
</div>
<div className="p-8 flex flex-col flex-grow">
<div className="flex gap-2 mb-4">
<span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 border border-zinc-800 px-2 py-1">All Levels</span>
<span className="text-xs font-semibold uppercase tracking-widest text-[#FF0000] border border-[#FF0000]/30 px-2 py-1 bg-[#FF0000]/10">8 Weeks</span>
</div>
<h3 className="text-2xl font-extrabold text-white tracking-tighter uppercase mb-4">Strategic Fat Loss</h3>
<p className="text-zinc-400 mb-8 flex-grow">The structured fat loss system for busy professionals. Lose fat and build lean muscle fast without living in the gym.</p>
<a className="block w-full text-center bg-[#FF0000] text-white py-4 font-semibold text-sm uppercase tracking-widest hover:bg-red-700 transition-colors" href="#contact">
                            Get Started
                        </a>
</div>
</div>

<div className="bg-zinc-950 border-t-[3px] border-[#FF0000] group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full shadow-xl shadow-zinc-200/50">
<div className="aspect-video bg-zinc-900 relative flex items-center justify-center overflow-hidden">
<i className="w-12 h-12 text-zinc-800" data-lucide="flame" strokeWidth="1.5"></i>
<div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-300"></div>
</div>
<div className="p-8 flex flex-col flex-grow">
<div className="flex gap-2 mb-4">
<span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 border border-zinc-800 px-2 py-1">Advanced</span>
<span className="text-xs font-semibold uppercase tracking-widest text-[#FF0000] border border-[#FF0000]/30 px-2 py-1 bg-[#FF0000]/10">90 Days</span>
</div>
<h3 className="text-2xl font-extrabold text-white tracking-tighter uppercase mb-4">VIP 1:1 Coaching</h3>
<p className="text-zinc-400 mb-8 flex-grow">Get a six pack in 90 days or less with fully personalized training, custom nutrition plans, and daily accountability.</p>
<a className="block w-full text-center bg-[#FF0000] text-white py-4 font-semibold text-sm uppercase tracking-widest hover:bg-red-700 transition-colors" href="#contact">
                            Apply Now
                        </a>
</div>
</div>

<div className="bg-zinc-950 border-t-[3px] border-[#FF0000] group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full shadow-xl shadow-zinc-200/50">
<div className="aspect-video bg-zinc-900 relative flex items-center justify-center overflow-hidden">
<i className="w-12 h-12 text-zinc-800" data-lucide="phone-call" strokeWidth="1.5"></i>
<div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-300"></div>
</div>
<div className="p-8 flex flex-col flex-grow">
<div className="flex gap-2 mb-4">
<span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 border border-zinc-800 px-2 py-1">Consultation</span>
<span className="text-xs font-semibold uppercase tracking-widest text-[#FF0000] border border-[#FF0000]/30 px-2 py-1 bg-[#FF0000]/10">45 Mins</span>
</div>
<h3 className="text-2xl font-extrabold text-white tracking-tighter uppercase mb-4">Strategy Call</h3>
<p className="text-zinc-400 mb-8 flex-grow">Serious about results? Let's map out your complete fat-loss and muscle-building roadmap together on a free call.</p>
<a className="block w-full text-center bg-transparent border-2 border-zinc-700 text-white py-4 font-semibold text-sm uppercase tracking-widest hover:border-white transition-colors" href="#contact">
                            Book Call
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950 relative -skew-y-3 mt-[-4vw] mb-[-4vw] z-10 border-y-4 border-[#FF0000]">
<div className="max-w-7xl mx-auto px-6 skew-y-3">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<span className="text-[#FF0000] text-xs font-semibold tracking-widest uppercase block mb-4">The Advantage</span>
<h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter uppercase leading-[0.9]">
<span className="text-[#FF0000] mr-2">+</span>Built Different,<br/>Better &amp; Proven.
                    </h2>
</div>
<div className="space-y-6">

<div className="flex items-start gap-6 group">
<div className="w-14 h-14 bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-[#FF0000] transition-colors">
<i className="w-6 h-6 text-[#FF0000]" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-2xl font-extrabold text-white tracking-tighter uppercase mb-2">Personalized Approach</h4>
<p className="text-zinc-400 text-base">No cookie-cutter plans. Everything is tailored to your body type, lifestyle, and specific goals.</p>
</div>
</div>

<div className="flex items-start gap-6 group">
<div className="w-14 h-14 bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-[#FF0000] transition-colors">
<i className="w-6 h-6 text-[#FF0000]" data-lucide="award" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-2xl font-extrabold text-white tracking-tighter uppercase mb-2">Expert Coaching</h4>
<p className="text-zinc-400 text-base">Years of real-world experience distilled into actionable steps that guarantee results if you follow them.</p>
</div>
</div>

<div className="flex items-start gap-6 group">
<div className="w-14 h-14 bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-[#FF0000] transition-colors">
<i className="w-6 h-6 text-[#FF0000]" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-2xl font-extrabold text-white tracking-tighter uppercase mb-2">Flexible Schedule</h4>
<p className="text-zinc-400 text-base">Train when you want, where you want. The program adapts to your busy professional life.</p>
</div>
</div>
</div>
</div>

<div className="mt-16 bg-zinc-900 border border-zinc-800 border-t-2 border-t-[#FF0000] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
<div className="absolute right-0 top-0 w-64 h-64 bg-[#FF0000] opacity-5 blur-3xl rounded-full"></div>
<div className="relative z-10">
<h4 className="text-3xl font-extrabold text-white tracking-tighter uppercase mb-2">Stop guessing. Start transforming.</h4>
<p className="text-zinc-400 max-w-xl">Take the first step towards your dream physique today.</p>
</div>
<a className="relative z-10 shrink-0 bg-white text-zinc-950 px-8 py-4 font-semibold text-sm uppercase tracking-widest hover:bg-[#FF0000] hover:text-white transition-colors" href="#contact">
                    Join The Program
                </a>
</div>
</div>
</section>

<section className="py-32 bg-white relative z-20" id="results">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-[#FF0000] text-xs font-semibold tracking-widest uppercase block mb-4">Real Results</span>
<h2 className="text-5xl md:text-6xl font-extrabold text-zinc-950 tracking-tighter uppercase">
<span className="text-[#FF0000] mr-2">+</span>See what clients accomplished
                </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white border border-zinc-100 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow relative">
<div className="absolute top-0 left-0 w-full h-1 bg-zinc-100">
<div className="w-1/3 h-full bg-[#FF0000]"></div>
</div>
<div className="flex gap-1 mb-6">
<i className="w-5 h-5 text-[#FF0000]" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
<i className="w-5 h-5 text-[#FF0000]" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
<i className="w-5 h-5 text-[#FF0000]" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
<i className="w-5 h-5 text-[#FF0000]" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
<i className="w-5 h-5 text-[#FF0000]" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
</div>
<p className="text-zinc-600 mb-8 italic text-lg leading-relaxed">"Rolando's system completely changed how I look at fitness. I lost 25lbs in my first 90 days and kept it off. The accountability is unmatched."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-zinc-200 rounded-full"></div>
<div>
<div className="font-extrabold text-zinc-950 uppercase tracking-tight text-lg">Michael T.</div>
<div className="text-sm text-zinc-500 uppercase tracking-widest font-semibold">VIP Client</div>
</div>
</div>
</div>

<div className="bg-white border border-zinc-100 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow relative">
<div className="absolute top-0 left-0 w-full h-1 bg-zinc-100">
<div className="w-1/3 h-full bg-[#FF0000]"></div>
</div>
<div className="flex gap-1 mb-6">
<i className="w-5 h-5 text-[#FF0000]" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
<i className="w-5 h-5 text-[#FF0000]" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
<i className="w-5 h-5 text-[#FF0000]" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
<i className="w-5 h-5 text-[#FF0000]" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
<i className="w-5 h-5 text-[#FF0000]" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
</div>
<p className="text-zinc-600 mb-8 italic text-lg leading-relaxed">"I was skeptical about online coaching, but the custom app and daily check-ins made it feel like Rolando was right there in the gym with me."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-zinc-200 rounded-full"></div>
<div>
<div className="font-extrabold text-zinc-950 uppercase tracking-tight text-lg">Sarah J.</div>
<div className="text-sm text-zinc-500 uppercase tracking-widest font-semibold">Fat Loss Program</div>
</div>
</div>
</div>

<div className="bg-white border border-zinc-100 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow relative md:col-span-2 lg:col-span-1">
<div className="absolute top-0 left-0 w-full h-1 bg-zinc-100">
<div className="w-1/3 h-full bg-[#FF0000]"></div>
</div>
<div className="flex gap-1 mb-6">
<i className="w-5 h-5 text-[#FF0000]" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
<i className="w-5 h-5 text-[#FF0000]" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
<i className="w-5 h-5 text-[#FF0000]" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
<i className="w-5 h-5 text-[#FF0000]" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
<i className="w-5 h-5 text-[#FF0000]" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
</div>
<p className="text-zinc-600 mb-8 italic text-lg leading-relaxed">"Best investment I've made in myself. Gained 10lbs of lean muscle and finally see my abs. The nutrition plan was surprisingly easy to follow."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-zinc-200 rounded-full"></div>
<div>
<div className="font-extrabold text-zinc-950 uppercase tracking-tight text-lg">David W.</div>
<div className="text-sm text-zinc-500 uppercase tracking-widest font-semibold">VIP Client</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-200" id="faq">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-[#FF0000] text-xs font-semibold tracking-widest uppercase block mb-4">Knowledge Base</span>
<h2 className="text-5xl md:text-6xl font-extrabold text-zinc-950 tracking-tighter uppercase">
<span className="text-[#FF0000] mr-2">+</span>Common Questions
                </h2>
</div>
<div className="space-y-4">

<div className="bg-white border border-zinc-200 group">
<button className="faq-toggle w-full px-6 py-5 flex items-center justify-between focus:outline-none">
<span className="font-extrabold text-zinc-950 uppercase tracking-tight text-left text-xl">What coaching options are available?</span>
<div className="w-8 h-8 bg-zinc-100 flex items-center justify-center group-hover:bg-[#FF0000] group-hover:text-white transition-colors shrink-0 rounded-sm">
<i className="w-4 h-4 text-[#FF0000] group-hover:text-white transition-transform duration-300 icon-plus" data-lucide="plus" strokeWidth="2"></i>
</div>
</button>
<div className="faq-content hidden px-6 pb-6 text-zinc-600 text-lg">
                        I offer primarily 1:1 VIP Coaching which is a comprehensive 90-day transformation program. I also have standalone structured fat loss programs for those who prefer less daily check-ins but still want a proven roadmap.
                    </div>
</div>

<div className="bg-white border border-zinc-200 group">
<button className="faq-toggle w-full px-6 py-5 flex items-center justify-between focus:outline-none">
<span className="font-extrabold text-zinc-950 uppercase tracking-tight text-left text-xl">How fast will I see results?</span>
<div className="w-8 h-8 bg-zinc-100 flex items-center justify-center group-hover:bg-[#FF0000] group-hover:text-white transition-colors shrink-0 rounded-sm">
<i className="w-4 h-4 text-[#FF0000] group-hover:text-white transition-transform duration-300 icon-plus" data-lucide="plus" strokeWidth="2"></i>
</div>
</button>
<div className="faq-content hidden px-6 pb-6 text-zinc-600 text-lg">
                        If you follow the program exactly as laid out, clients typically start seeing visible changes in their body composition within the first 14-21 days. Significant transformations occur at the 90-day mark.
                    </div>
</div>

<div className="bg-white border border-zinc-200 group">
<button className="faq-toggle w-full px-6 py-5 flex items-center justify-between focus:outline-none">
<span className="font-extrabold text-zinc-950 uppercase tracking-tight text-left text-xl">What is your training method?</span>
<div className="w-8 h-8 bg-zinc-100 flex items-center justify-center group-hover:bg-[#FF0000] group-hover:text-white transition-colors shrink-0 rounded-sm">
<i className="w-4 h-4 text-[#FF0000] group-hover:text-white transition-transform duration-300 icon-plus" data-lucide="plus" strokeWidth="2"></i>
</div>
</button>
<div className="faq-content hidden px-6 pb-6 text-zinc-600 text-lg">
                        We focus on progressive overload through resistance training combined with strategic cardio. The exact split depends on your current level, goals, and how many days you can commit to training.
                    </div>
</div>

<div className="bg-white border border-zinc-200 group">
<button className="faq-toggle w-full px-6 py-5 flex items-center justify-between focus:outline-none">
<span className="font-extrabold text-zinc-950 uppercase tracking-tight text-left text-xl">Do you offer nutrition guidance?</span>
<div className="w-8 h-8 bg-zinc-100 flex items-center justify-center group-hover:bg-[#FF0000] group-hover:text-white transition-colors shrink-0 rounded-sm">
<i className="w-4 h-4 text-[#FF0000] group-hover:text-white transition-transform duration-300 icon-plus" data-lucide="plus" strokeWidth="2"></i>
</div>
</button>
<div className="faq-content hidden px-6 pb-6 text-zinc-600 text-lg">
                        Absolutely. Nutrition is 80% of the battle. You will receive customized macro/calorie targets, meal timing strategies, and grocery list guides tailored to your specific preferences and goals.
                    </div>
</div>

<div className="bg-white border border-zinc-200 group">
<button className="faq-toggle w-full px-6 py-5 flex items-center justify-between focus:outline-none">
<span className="font-extrabold text-zinc-950 uppercase tracking-tight text-left text-xl">How do I cancel my program?</span>
<div className="w-8 h-8 bg-zinc-100 flex items-center justify-center group-hover:bg-[#FF0000] group-hover:text-white transition-colors shrink-0 rounded-sm">
<i className="w-4 h-4 text-[#FF0000] group-hover:text-white transition-transform duration-300 icon-plus" data-lucide="plus" strokeWidth="2"></i>
</div>
</button>
<div className="faq-content hidden px-6 pb-6 text-zinc-600 text-lg">
                        VIP Coaching requires a minimum 90-day commitment to ensure results. After the initial term, it moves to month-to-month and can be canceled with 30 days notice via email.
                    </div>
</div>

<div className="bg-white border border-zinc-200 group">
<button className="faq-toggle w-full px-6 py-5 flex items-center justify-between focus:outline-none">
<span className="font-extrabold text-zinc-950 uppercase tracking-tight text-left text-xl">What should I do to get started?</span>
<div className="w-8 h-8 bg-zinc-100 flex items-center justify-center group-hover:bg-[#FF0000] group-hover:text-white transition-colors shrink-0 rounded-sm">
<i className="w-4 h-4 text-[#FF0000] group-hover:text-white transition-transform duration-300 icon-plus" data-lucide="plus" strokeWidth="2"></i>
</div>
</button>
<div className="faq-content hidden px-6 pb-6 text-zinc-600 text-lg">
                        The best first step is to book a free strategy call or fill out the application form for VIP Coaching. We will assess your current situation and see if we are a good fit to work together.
                    </div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FF0000] relative overflow-hidden" id="contact">

<div className="absolute inset-0 opacity-10">
<svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
<defs><pattern height="20" id="a" patterntransform="scale(2) rotate(45)" patternunits="userSpaceOnUse" width="20"><rect fill="none" height="100%" width="100%" x="0" y="0"></rect><path d="M 0 10 L 20 10 M 10 0 L 10 20" fill="none" stroke="currentColor" strokeWidth="1"></path></pattern></defs>
<rect fill="url(#a)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter uppercase mb-6 leading-tight">
                Start your transformation with expert guidance
            </h2>
<p className="text-white/90 text-xl md:text-2xl font-medium mb-12">
                Join hundreds of men and women who already changed their lives. Stop waiting for the "perfect time".
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="w-full sm:w-auto bg-white text-zinc-950 px-10 py-5 font-extrabold text-base uppercase tracking-widest hover:bg-zinc-100 transition-colors shadow-2xl shadow-black/20" href="#">
                    Sign Up For VIP Coaching
                </a>
<a className="w-full sm:w-auto border-2 border-white text-white px-10 py-5 font-semibold text-base uppercase tracking-widest hover:bg-white hover:text-[#FF0000] transition-colors" href="#">
                    Book Strategy Call
                </a>
</div>
</div>
</section>

<footer className="bg-zinc-950 pt-20 pb-10 border-t-4 border-[#FF0000]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<a className="flex items-center gap-2 mb-6" href="#">
<span className="font-extrabold text-2xl tracking-tighter uppercase text-white">Rolando Monge</span>
<div className="w-2 h-2 bg-[#FF0000] rounded-full"></div>
</a>
<p className="text-zinc-500 text-sm mb-6 leading-relaxed">
                        Online Fitness &amp; Lifestyle Coaching. Real results for real people through structured, proven methods.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 bg-zinc-900 flex items-center justify-center text-white hover:bg-[#FF0000] transition-colors" href="https://instagram.com/rolo_408">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 bg-zinc-900 flex items-center justify-center text-white hover:bg-[#FF0000] transition-colors" href="#">
<i className="w-5 h-5" data-lucide="video" strokeWidth="1.5"></i> 
</a>
</div>
</div>

<div>
<h4 className="font-extrabold text-white uppercase tracking-tight mb-6">Quick Links</h4>
<ul className="space-y-4">
<li><a className="text-zinc-400 hover:text-[#FF0000] transition-colors text-sm uppercase tracking-widest font-semibold" href="#home">Home</a></li>
<li><a className="text-zinc-400 hover:text-[#FF0000] transition-colors text-sm uppercase tracking-widest font-semibold" href="#about">About Coach</a></li>
<li><a className="text-zinc-400 hover:text-[#FF0000] transition-colors text-sm uppercase tracking-widest font-semibold" href="#results">Client Results</a></li>
<li><a className="text-zinc-400 hover:text-[#FF0000] transition-colors text-sm uppercase tracking-widest font-semibold" href="stan.store/Rolo_408">Stan Store</a></li>
</ul>
</div>

<div>
<h4 className="font-extrabold text-white uppercase tracking-tight mb-6">Programs</h4>
<ul className="space-y-4">
<li><a className="text-zinc-400 hover:text-[#FF0000] transition-colors text-sm uppercase tracking-widest font-semibold" href="#">1:1 VIP Coaching</a></li>
<li><a className="text-zinc-400 hover:text-[#FF0000] transition-colors text-sm uppercase tracking-widest font-semibold" href="#">Fat Loss System</a></li>
<li><a className="text-zinc-400 hover:text-[#FF0000] transition-colors text-sm uppercase tracking-widest font-semibold" href="#">Muscle Building</a></li>
<li><a className="text-zinc-400 hover:text-[#FF0000] transition-colors text-sm uppercase tracking-widest font-semibold" href="#">Strategy Call</a></li>
</ul>
</div>

<div>
<h4 className="font-extrabold text-white uppercase tracking-tight mb-6">Get Weekly Tips</h4>
<form className="space-y-4" onsubmit="event.preventDefault();">
<div className="relative">
<input className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF0000] transition-colors text-sm uppercase tracking-widest font-semibold" placeholder="ENTER YOUR EMAIL" type="email"/>
</div>
<button className="w-full bg-[#FF0000] text-white px-4 py-3 font-semibold text-sm uppercase tracking-widest hover:bg-red-700 transition-colors" type="submit">
                            Subscribe
                        </button>
</form>
</div>
</div>
<div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-zinc-600 text-sm font-semibold uppercase tracking-widest">© 2025 Rolando Monge. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-zinc-600 hover:text-white transition-colors text-sm font-semibold uppercase tracking-widest" href="#">Privacy Policy</a>
<a className="text-zinc-600 hover:text-white transition-colors text-sm font-semibold uppercase tracking-widest" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
