import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Mobile Menu Toggle Logic
        function toggleMenu() {
            const menu = document.getElementById("mobile-menu");
            const iconMenu = document.getElementById("icon-menu");
            const iconClose = document.getElementById("icon-close");
            
            const isHidden = menu.classList.contains("hidden");

            if (isHidden) {
                // OPEN MENU
                menu.classList.remove("hidden");
                // Allow browser paint cycle to register removal of 'hidden' before animating opacity
                setTimeout(() => {
                    menu.classList.remove("opacity-0", "-translate-y-4");
                    menu.classList.add("opacity-100", "translate-y-0");
                }, 10);
                
                // Toggle Icons
                iconMenu.classList.add("hidden");
                iconClose.classList.remove("hidden");

                // Lock scroll
                document.body.style.overflow = "hidden";
            } else {
                // CLOSE MENU
                menu.classList.remove("opacity-100", "translate-y-0");
                menu.classList.add("opacity-0", "-translate-y-4");
                
                // Toggle Icons
                iconMenu.classList.remove("hidden");
                iconClose.classList.add("hidden");

                document.body.style.overflow = "auto";

                // Wait for animation to finish before hiding
                setTimeout(() => {
                    menu.classList.add("hidden");
                }, 300);
            }
        }

        // Intersection Observer for Scroll Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 transition-all duration-300" style={{}}>
<div className="lg:px-8 flex z-50 bg-transparent h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center justify-between">

<a className="text-xl font-bold tracking-tighter text-slate-900 hover:text-slate-700 transition-colors z-50" href="#" style={{}}>
                Victor.
            </a>


<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#how-it-works" style={{}}>Process</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#results" style={{}}>Results</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#faq" style={{}}>FAQs</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#portfolio" style={{}}>Portfolio</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#about" style={{}}>About</a>
</div>


<button aria-label="Toggle menu" className="lg:hidden p-2 -mr-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none z-50 relative" id="mobile-menu-btn" onclick="toggleMenu()" style={{}}>
<div className="block" id="icon-menu">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(71, 85, 105)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line className="" x1="4" x2="20" y1="12" y2="12"></line><line className="" x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</div>
<div className="hidden" id="icon-close">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
</button>
</div>


<div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-100 flex flex-col pt-24 px-6 pb-6 gap-2 transition-all duration-300 ease-in-out lg:hidden origin-top opacity-0 -translate-y-4 hidden" id="mobile-menu" style={{}}>
<a className="text-2xl font-semibold text-slate-900 py-3 border-b border-slate-100 hover:text-brand-600 hover:pl-2 transition-all" href="#home" onclick="toggleMenu()" style={{}}>Home</a>
<a className="text-2xl font-semibold text-slate-900 py-3 border-b border-slate-100 hover:text-brand-600 hover:pl-2 transition-all" href="#how-it-works" onclick="toggleMenu()" style={{}}>Process</a>
<a className="text-2xl font-semibold text-slate-900 py-3 border-b border-slate-100 hover:text-brand-600 hover:pl-2 transition-all" href="#results" onclick="toggleMenu()" style={{}}>Results</a>
<a className="text-2xl font-semibold text-slate-900 py-3 border-b border-slate-100 hover:text-brand-600 hover:pl-2 transition-all" href="#faq" onclick="toggleMenu()" style={{}}>FAQs</a>
<a className="text-2xl font-semibold text-slate-900 py-3 border-b border-slate-100 hover:text-brand-600 hover:pl-2 transition-all" href="#portfolio" onclick="toggleMenu()" style={{}}>Portfolio</a>
<a className="text-2xl font-semibold text-slate-900 py-3 border-b border-slate-100 hover:text-brand-600 hover:pl-2 transition-all" href="#about" onclick="toggleMenu()" style={{}}>About</a>
<div className="mt-auto">
<a className="flex justify-center items-center w-full py-4 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all shadow-lg" href="#book" onclick="toggleMenu()" style={{}}>
                    Book Strategy Call
                </a>
<p className="text-center text-xs text-slate-400 mt-6" style={{}}>Victor Consultant © 2023</p>
</div>
</div>
</nav>

<section className="lg:pt-40 lg:pb-32 overflow-hidden pt-32 pb-20 relative" id="home">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

<div className="lg:w-1/2 reveal active w-full space-y-8">
<div className="inline-flex gap-2 text-sm font-medium text-slate-600 bg-slate-100 border-slate-200 border rounded-full pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" style={{}}></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" style={{}}></span>
</span>
                        For Realtors Tired of Invisibility
                    </div>
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]" style={{}}>
                        Stop Chasing Leads. <br/>
<span className="text-slate-500" style={{}}>Become The Brand</span> Sellers Choose First.
                    </h1>
<p className="text-lg lg:text-xl text-slate-600 max-w-lg" style={{}}>
                        We build high-converting personal brands for realtors using cinematic content and automated client acquisition systems. No cold calling. No door knocking.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex justify-center items-center px-8 py-4 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300 w-full sm:w-auto text-center" href="#book" style={{}}>
                            Book Your Free Strategy Call
                        </a>
<a className="inline-flex justify-center items-center px-8 py-4 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-all w-full sm:w-auto text-center hover:border-slate-300" href="#how-it-works" style={{}}>
                            See How It Works
                        </a>
</div>
<div className="flex items-center gap-4 text-sm text-slate-500 pt-4" style={{}}>
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden" style={{}}><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/></div>
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden" style={{}}><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/></div>
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden" style={{}}><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/></div>
</div>
<p style={{}}>Trusted by top 1% agents</p>
</div>
</div>

<div className="w-full lg:w-1/2 relative reveal reveal-delay-200 active">
<div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-slate-100 relative group" style={{}}>

<img alt="Victor Consultant" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
<svg className="w-6 h-6 text-white fill-current ml-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden lg:block animate-fade-in-up" style={{animationDelay: '0.5s'}}>
<div className="flex items-center gap-3">
<div className="bg-green-100 p-2 rounded-lg" style={{}}>
<svg className="w-5 h-5 text-green-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wide" style={{}}>Avg Client Results</p>
<p className="text-lg font-semibold text-slate-900" style={{}}>+3 Listings / Mo</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-slate-50" style={{}}>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="w-full lg:w-1/2 order-2 lg:order-1 reveal active">
<div className="relative rounded-2xl overflow-hidden shadow-lg group">
<img alt="Frustrated Realtor" className="w-full h-full object-cover grayscale-[20%] contrast-125 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-slate-900/10" style={{}}></div>
</div>
</div>

<div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-6 reveal reveal-delay-100 active">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight" style={{}}>
                        You’re an expert agent, but you feel invisible.
                    </h2>
<p className="text-slate-600 text-lg" style={{}}>
                        The market has shifted. Door knocking is exhausting, and cold calling feels like begging. You see other agents dominating Instagram while your calendar sits empty.
                    </p>
<ul className="space-y-4 pt-4">
<li className="flex items-start gap-3">
<svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-slate-700" style={{}}>Spending hours on content that gets 5 likes and zero DMs.</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-slate-700" style={{}}>Relying on referrals that have become unpredictable and dry.</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-slate-700" style={{}}>Buying low-quality leads from Zillow that ghost you instantly.</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-slate-700" style={{}}>Watching less experienced agents sign listings because they "look famous" online.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="w-full lg:w-1/2 space-y-6 reveal active">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight" style={{}}>
                        What If Sellers Started Reaching Out to <span className="text-brand-600" style={{}}>YOU?</span>
</h2>
<p className="text-slate-600 text-lg" style={{}}>
                        Imagine waking up to DMs from qualified homeowners asking to list their property. Imagine your phone ringing not with spam, but with buyers who already trust you because they've watched your videos.
                    </p>
<p className="text-slate-600 text-lg" style={{}}>
                        This isn't luck. It's a system. We transform you from a "local agent" into the "local authority" by combining storytelling content with paid traffic automation.
                    </p>
<div className="pt-4">
<div className="flex items-center gap-2 font-medium text-slate-900" style={{}}>
<svg className="w-5 h-5 text-brand-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span style={{}}>Predictable Lead Flow</span>
</div>
<div className="flex items-center gap-2 font-medium text-slate-900 mt-2" style={{}}>
<svg className="w-5 h-5 text-brand-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span style={{}}>Premium Brand Positioning</span>
</div>
<div className="flex items-center gap-2 font-medium text-slate-900 mt-2" style={{}}>
<svg className="w-5 h-5 text-brand-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span style={{}}>Automated Follow-up</span>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 reveal reveal-delay-100 active">
<div className="relative">
<img alt="Confident Realtor" className="rounded-2xl shadow-xl w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<div className="absolute top-10 -right-4 lg:-right-10 bg-white p-3 rounded-lg shadow-lg border border-slate-100 flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
<div className="bg-blue-500 rounded-full p-1.5" style={{}}><svg className="w-4 h-4 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></div>
<div className="text-xs">
<p className="font-semibold text-slate-900" style={{}}>New Message Request</p>
<p className="text-slate-500" style={{}}>"Hi, we're looking to sell our condo..."</p>
</div>
</div>
<div className="absolute bottom-20 -left-4 lg:-left-10 bg-white p-3 rounded-lg shadow-lg border border-slate-100 flex items-center gap-3" style={{}}>
<div className="bg-green-500 rounded-full p-1.5" style={{}}><svg className="w-4 h-4 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg></div>
<div className="text-xs">
<p className="font-semibold text-slate-900" style={{}}>Listing Consult Booked</p>
<p className="text-slate-500" style={{}}>Tomorrow, 2:00 PM</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-slate-50" id="how-it-works" style={{}}>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 reveal active">
<span className="text-brand-600 font-semibold tracking-wide uppercase text-sm" style={{}}>The Process</span>
<h2 className="mt-3 text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight" style={{}}>The 3-Phase Authority System</h2>
<p className="mt-4 text-slate-600 text-lg" style={{}}>We install a complete client acquisition infrastructure into your business.</p>
</div>
<div className="space-y-24">

<div className="flex flex-col md:flex-row items-center gap-12 reveal active">
<div className="w-full md:w-1/2">
<div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300" style={{}}>

<div className="aspect-video bg-slate-100 rounded-xl flex items-center justify-center relative overflow-hidden group" style={{}}>
<img alt="Filming Content" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 flex items-center justify-center">
<div className="bg-white/90 backdrop-blur rounded-lg px-4 py-2 shadow-sm">
<div className="flex items-center gap-2">
<svg className="w-4 h-4 text-slate-900" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
<span className="text-sm font-semibold text-slate-900" style={{}}>Viral Script Structure</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="w-full md:w-1/2 space-y-4">
<div className="w-12 h-12 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-slate-900/20" style={{}}>1</div>
<h3 className="text-2xl font-semibold text-slate-900" style={{}}>Storytelling &amp; Content Production</h3>
<p className="text-slate-600 leading-relaxed" style={{}}>
                            We don't just "post." We script, film, and edit cinematic reels that tell your story and showcase your expertise. We create a month's worth of content in a single 4-hour shoot. You show up, speak, and we handle the rest.
                        </p>
<ul className="text-sm text-slate-500 space-y-2 pt-2" style={{}}>
<li className="flex items-center gap-2" style={{}}><svg className="w-4 h-4 text-brand-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Professional Videography</li>
<li className="flex items-center gap-2" style={{}}><svg className="w-4 h-4 text-brand-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Strategic Scripting</li>
<li className="flex items-center gap-2" style={{}}><svg className="w-4 h-4 text-brand-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Viral Editing Style</li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-12 reveal active">
<div className="w-full md:w-1/2">
<div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300" style={{}}>

<div className="aspect-video bg-slate-50 rounded-xl relative overflow-hidden flex flex-col items-center justify-center p-8" style={{}}>
<div className="w-full bg-white rounded-lg shadow-sm p-4 border border-slate-100 mb-3 opacity-90" style={{}}>
<div className="flex items-center justify-between mb-2">
<div className="h-2 w-24 bg-slate-200 rounded" style={{}}></div>
<div className="h-4 w-12 bg-green-100 text-green-700 text-[10px] flex items-center justify-center rounded" style={{}}>Active</div>
</div>
<div className="flex gap-2">
<div className="h-16 w-16 bg-slate-200 rounded" style={{}}></div>
<div className="flex-1 space-y-2">
<div className="h-2 w-full bg-slate-100 rounded" style={{}}></div>
<div className="h-2 w-3/4 bg-slate-100 rounded" style={{}}></div>
</div>
</div>
</div>
<div className="absolute bottom-4 right-4 bg-slate-900 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 shadow-lg" style={{}}>
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg> ROI: 450%
                                </div>
</div>
</div>
</div>
<div className="w-full md:w-1/2 space-y-4">
<div className="w-12 h-12 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-slate-900/20" style={{}}>2</div>
<h3 className="text-2xl font-semibold text-slate-900" style={{}}>Meta Ads Amplification</h3>
<p className="text-slate-600 leading-relaxed" style={{}}>
                            Organic reach isn't enough. We deploy sophisticated Meta (Facebook/Instagram) ad campaigns to put your best content in front of every homeowner in your specific farming area. We turn views into qualified traffic.
                        </p>
<ul className="text-sm text-slate-500 space-y-2 pt-2" style={{}}>
<li className="flex items-center gap-2" style={{}}><svg className="w-4 h-4 text-brand-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Geo-Targeted Farming</li>
<li className="flex items-center gap-2" style={{}}><svg className="w-4 h-4 text-brand-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Retargeting Warm Audiences</li>
<li className="flex items-center gap-2" style={{}}><svg className="w-4 h-4 text-brand-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Lead Generation Forms</li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-12 reveal active">
<div className="w-full md:w-1/2">
<div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300" style={{}}>

<div className="aspect-video bg-white rounded-xl relative border border-slate-100 flex items-center justify-center p-4" style={{}}>
<div className="space-y-3 w-full max-w-sm">
<div className="flex justify-end">
<div className="bg-blue-600 text-white text-xs p-2 rounded-l-lg rounded-t-lg max-w-[80%] shadow-sm" style={{}}>
                                            Thanks for the guide! We are thinking of selling.
                                        </div>
</div>
<div className="flex justify-start">
<div className="bg-slate-100 text-slate-700 text-xs p-2 rounded-r-lg rounded-t-lg max-w-[80%]" style={{}}>
                                            That's great! Would you like to book a quick valuation call?
                                        </div>
</div>
<div className="flex justify-center pt-2">
<div className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-md text-xs font-medium text-slate-600 flex items-center gap-2" style={{}}>
<svg className="w-3 h-3 text-green-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></rect></svg> Call Booked Automatically
                                        </div>
</div>
</div>
</div>
</div>
</div>
<div className="w-full md:w-1/2 space-y-4">
<div className="w-12 h-12 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-slate-900/20" style={{}}>3</div>
<h3 className="text-2xl font-semibold text-slate-900" style={{}}>DM Automation &amp; Conversion</h3>
<p className="text-slate-600 leading-relaxed" style={{}}>
                            Stop manually replying to "Is this available?" We build custom ManyChat automation flows that engage leads instantly, qualify them, and book appointments directly onto your calendar while you sleep.
                        </p>
<ul className="text-sm text-slate-500 space-y-2 pt-2" style={{}}>
<li className="flex items-center gap-2" style={{}}><svg className="w-4 h-4 text-brand-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Instant 24/7 Response</li>
<li className="flex items-center gap-2" style={{}}><svg className="w-4 h-4 text-brand-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Automated Lead Qualification</li>
<li className="flex items-center gap-2" style={{}}><svg className="w-4 h-4 text-brand-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Direct Calendar Booking</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-white border-t border-slate-100" id="results" style={{}}>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight text-center mb-16 reveal active" style={{}}>
                Real Realtors Documented Results
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors reveal reveal-delay-100 active" style={{}}>
<div className="flex items-center gap-4 mb-6">
<img className="w-12 h-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div>
<p className="font-semibold text-slate-900" style={{}}>Sarah M.</p>
<p className="text-xs text-slate-500" style={{}}>Re/Max Hall of Fame</p>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6" style={{}}>
                        "Before working with Victor, I was invisible online. Within 60 days, we generated 3 listing appointments purely from Instagram ads. The automation is a game changer."
                    </p>
<div className="h-px w-full bg-slate-200 mb-4" style={{}}></div>
<div className="flex items-center gap-2 text-sm font-semibold text-slate-900" style={{}}>
<svg className="w-4 h-4 text-brand-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                        3 Listings Signed
                    </div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors reveal reveal-delay-200 active" style={{}}>
<div className="flex items-center gap-4 mb-6">
<img className="w-12 h-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div>
<p className="font-semibold text-slate-900" style={{}}>David K.</p>
<p className="text-xs text-slate-500" style={{}}>Century 21 Agent</p>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6" style={{}}>
                        "The content quality is unlike anything else. I look like a celebrity agent. Sellers are actually recognizing me at open houses now. Victor knows real estate."
                    </p>
<div className="h-px w-full bg-slate-200 mb-4" style={{}}></div>
<div className="flex items-center gap-2 text-sm font-semibold text-slate-900" style={{}}>
<svg className="w-4 h-4 text-brand-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                        15k+ Targeted Views
                    </div>
</div>

<div className="bg-slate-900 p-8 rounded-2xl text-white flex flex-col justify-between reveal reveal-delay-300 shadow-2xl active" style={{}}>
<div>
<p className="text-slate-400 text-sm uppercase tracking-widest font-medium mb-2" style={{}}>Our Clients Generated</p>
<p className="text-5xl font-bold tracking-tight mb-2" style={{}}>$45M+</p>
<p className="text-slate-300" style={{}}>In total sales volume attributed to social media leads in the last 12 months.</p>
</div>
<div className="mt-8 flex gap-2">
<div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden" style={{}}>
<div className="h-full w-[80%] bg-white rounded-full"></div>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center reveal active">
<img alt="Sold Signs" className="mx-auto rounded-xl shadow-lg h-48 object-cover w-full max-w-2xl opacity-90 grayscale-[50%] hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<p className="text-xs text-slate-400 mt-2" style={{}}>Results from recent campaigns</p>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight text-center mb-16 reveal active" style={{}}>
                The Complete Authority Package
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-6 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 reveal active" style={{}}>
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4" style={{}}>
<svg className="w-5 h-5 text-brand-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
<h3 className="font-semibold text-slate-900 mb-2" style={{}}>Monthly Content Days</h3>
<p className="text-sm text-slate-600" style={{}}>On-site filming of 4-8 high quality reels and lifestyle photos.</p>
</div>
<div className="p-6 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 reveal reveal-delay-100 active" style={{}}>
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4" style={{}}>
<svg className="w-5 h-5 text-brand-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 21h8"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg>
</div>
<h3 className="font-semibold text-slate-900 mb-2" style={{}}>Professional Editing</h3>
<p className="text-sm text-slate-600" style={{}}>Fast-paced, engaging edits with captions, b-roll, and music.</p>
</div>
<div className="p-6 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 reveal reveal-delay-200 active" style={{}}>
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4" style={{}}>
<svg className="w-5 h-5 text-brand-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<h3 className="font-semibold text-slate-900 mb-2" style={{}}>Ad Management</h3>
<p className="text-sm text-slate-600" style={{}}>Full setup, testing, and scaling of Facebook &amp; Instagram ad campaigns.</p>
</div>
<div className="p-6 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 reveal active" style={{}}>
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4" style={{}}>
<svg className="w-5 h-5 text-brand-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</div>
<h3 className="font-semibold text-slate-900 mb-2" style={{}}>Chat Automation</h3>
<p className="text-sm text-slate-600" style={{}}>Custom ManyChat flows to nurture leads 24/7 automatically.</p>
</div>
<div className="p-6 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 reveal reveal-delay-100 active" style={{}}>
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4" style={{}}>
<svg className="w-5 h-5 text-brand-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<h3 className="font-semibold text-slate-900 mb-2" style={{}}>Brand Identity</h3>
<p className="text-sm text-slate-600" style={{}}>Consulting on your niche, tone of voice, and visual aesthetic.</p>
</div>
<div className="p-6 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 reveal reveal-delay-200 active" style={{}}>
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4" style={{}}>
<svg className="w-5 h-5 text-brand-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
<h3 className="font-semibold text-slate-900 mb-2" style={{}}>Lead CRM Setup</h3>
<p className="text-sm text-slate-600" style={{}}>Integration with your existing CRM to ensure no lead is lost.</p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-slate-50" style={{}}>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="reveal active">
<h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2" style={{}}>
<svg className="w-6 h-6 text-green-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11 3 3L22 4"></path></svg>
                        Who This Is For
                    </h3>
<div className="bg-white rounded-2xl p-8 shadow-sm space-y-4 h-full border border-slate-100 hover:shadow-md transition-all duration-300" style={{}}>
<div className="flex items-start gap-3">
<div className="mt-1"><svg className="w-4 h-4 text-green-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<p className="text-slate-700 text-sm" style={{}}>Agents doing $10M+ volume looking to scale to $30M+.</p>
</div>
<div className="flex items-start gap-3">
<div className="mt-1"><svg className="w-4 h-4 text-green-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<p className="text-slate-700 text-sm" style={{}}>Realtors tired of cold prospecting who want inbound leads.</p>
</div>
<div className="flex items-start gap-3">
<div className="mt-1"><svg className="w-4 h-4 text-green-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<p className="text-slate-700 text-sm" style={{}}>Agents ready to invest in their personal brand as an asset.</p>
</div>
<div className="flex items-start gap-3">
<div className="mt-1"><svg className="w-4 h-4 text-green-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<p className="text-slate-700 text-sm" style={{}}>Those willing to be on camera (with our coaching).</p>
</div>
</div>
</div>

<div className="reveal reveal-delay-100 active">
<h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2" style={{}}>
<svg className="w-6 h-6 text-red-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
                        Who This Is NOT For
                    </h3>
<div className="bg-white rounded-2xl p-8 shadow-sm space-y-4 h-full border border-slate-100 hover:shadow-md transition-all duration-300" style={{}}>
<div className="flex items-start gap-3">
<div className="mt-1"><svg className="w-4 h-4 text-red-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></div>
<p className="text-slate-700 text-sm" style={{}}>New agents with zero budget for marketing.</p>
</div>
<div className="flex items-start gap-3">
<div className="mt-1"><svg className="w-4 h-4 text-red-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></div>
<p className="text-slate-700 text-sm" style={{}}>Agents looking for "get rich quick" lead schemes.</p>
</div>
<div className="flex items-start gap-3">
<div className="mt-1"><svg className="w-4 h-4 text-red-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></div>
<p className="text-slate-700 text-sm" style={{}}>Anyone unwilling to trust the process for at least 90 days.</p>
</div>
<div className="flex items-start gap-3">
<div className="mt-1"><svg className="w-4 h-4 text-red-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></div>
<p className="text-slate-700 text-sm" style={{}}>Part-time agents treating real estate as a hobby.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-white scroll-mt-20" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col lg:flex-row gap-x-16 gap-y-16 items-center">
<div className="w-full lg:w-5/12 reveal active">
<div className="relative group">
<div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">

<img alt="Victor Portrait" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>

<div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white p-2 rounded-xl shadow-xl rotate-3 hidden md:block group-hover:rotate-6 transition-transform duration-500">
<img className="w-full h-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&amp;fit=crop&amp;w=400&amp;q=80" style={{}}/>
</div>
</div>
</div>
<div className="w-full lg:w-7/12 space-y-6 reveal reveal-delay-200 active">
<span className="text-brand-600 font-semibold tracking-wide uppercase text-sm" style={{}}>About Victor</span>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight" style={{}}>
                        Helping Realtors Become Market Leaders
                    </h2>
<p className="text-slate-600 text-lg" style={{}}>
                        I started my career in digital marketing, managing millions in ad spend for e-commerce brands. But I saw a massive gap in real estate: Agents were still using marketing tactics from 2005.
                    </p>
<p className="text-slate-600 text-lg" style={{}}>
                        I founded this consultancy to bridge that gap. My mission is simple: to help talented realtors stop chasing business and start attracting it through world-class branding and systems.
                    </p>
<div className="pt-4 flex flex-wrap gap-4">
<div className="bg-slate-50 px-4 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-700 hover:border-slate-300 transition-colors" style={{}}>
                            $50M+ Client Sales Generated
                        </div>
<div className="bg-slate-50 px-4 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-700 hover:border-slate-300 transition-colors" style={{}}>
                            Marketing Strategist
                        </div>
<div className="bg-slate-50 px-4 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-700 hover:border-slate-300 transition-colors" style={{}}>
                            Content Specialist
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-slate-50" id="faq" style={{}}>
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight text-center mb-12 reveal active" style={{}}>
                Frequently Asked Questions
            </h2>
<div className="space-y-4 reveal reveal-delay-100 active">

<div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-slate-300 transition-colors" style={{}}>
<details className="group p-6 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-slate-900 list-none" style={{}}>
<span style={{}}>Do I have to dance on TikTok?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="text-slate-600 mt-4 text-sm leading-relaxed animate-in slide-in-from-top-1 duration-200" style={{}}>
                            Absolutely not. We focus on educational, authority-building content that showcases your expertise. No dancing or trends required.
                        </p>
</details>
</div>

<div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-slate-300 transition-colors" style={{}}>
<details className="group p-6 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-slate-900 list-none" style={{}}>
<span style={{}}>How much time does this require from me?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="text-slate-600 mt-4 text-sm leading-relaxed animate-in slide-in-from-top-1 duration-200" style={{}}>
                            Approximately 4-6 hours per month. We batch film content on a single day, and handle all the editing, posting, and ad management for you.
                        </p>
</details>
</div>

<div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-slate-300 transition-colors" style={{}}>
<details className="group p-6 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-slate-900 list-none" style={{}}>
<span style={{}}>Do you work with new agents?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="text-slate-600 mt-4 text-sm leading-relaxed animate-in slide-in-from-top-1 duration-200" style={{}}>
                            We generally require agents to have at least 1 year of experience and a marketing budget. Our system amplifies success; it doesn't replace foundational real estate skills.
                        </p>
</details>
</div>

<div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-slate-300 transition-colors" style={{}}>
<details className="group p-6 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-slate-900 list-none" style={{}}>
<span style={{}}>What results can I expect?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="text-slate-600 mt-4 text-sm leading-relaxed animate-in slide-in-from-top-1 duration-200" style={{}}>
                            While results vary, most clients see a significant increase in engagement within 30 days and start generating qualified conversations within 60 days.
                        </p>
</details>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center justify-center gap-12">

<div className="w-full lg:w-1/2 reveal active">
<h3 className="text-2xl font-semibold text-slate-900 mb-8" style={{}}>Implementation Timeline</h3>
<div className="relative border-l border-slate-200 ml-3 space-y-10" style={{}}>
<div className="relative pl-8">
<div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-white bg-brand-600 shadow"></div>
<h4 className="font-semibold text-slate-900" style={{}}>Week 1: Strategy &amp; Brand Audit</h4>
<p className="text-sm text-slate-500 mt-1" style={{}}>Deep dive into your niche and offer.</p>
</div>
<div className="relative pl-8">
<div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-white bg-slate-300" style={{}}></div>
<h4 className="font-semibold text-slate-900" style={{}}>Week 2: Content Day</h4>
<p className="text-sm text-slate-500 mt-1" style={{}}>Filming your first month of assets.</p>
</div>
<div className="relative pl-8">
<div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-white bg-slate-300" style={{}}></div>
<h4 className="font-semibold text-slate-900" style={{}}>Week 3: Tech Build</h4>
<p className="text-sm text-slate-500 mt-1" style={{}}>Setting up Ads Manager and ManyChat flows.</p>
</div>
<div className="relative pl-8">
<div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-white bg-slate-300" style={{}}></div>
<h4 className="font-semibold text-slate-900" style={{}}>Week 4: Launch</h4>
<p className="text-sm text-slate-500 mt-1" style={{}}>Campaigns go live. Leads start flowing.</p>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 max-w-md reveal reveal-delay-200 active">
<div className="rounded-2xl bg-slate-900 p-8 text-center text-white shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300" style={{}}>
<div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider animate-pulse" style={{}}>
                            Limited Spots
                        </div>
<h3 className="text-2xl font-semibold mb-2" style={{}}>Book Your Strategy Call</h3>
<p className="text-slate-400 text-sm mb-8" style={{}}>
                            We only work with 4 new agents per month to ensure quality.
                        </p>
<div className="text-4xl font-bold mb-2" style={{}}>$0</div>
<p className="text-sm text-slate-400 mb-8" style={{}}>30-Minute Consultation</p>
<a className="block w-full py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-colors" href="#book" style={{}}>
                            Claim Your Spot
                        </a>
<p className="text-xs text-slate-500 mt-4" style={{}}>No obligation. Just strategy.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 lg:py-32 overflow-hidden" id="book">

<div className="absolute inset-0 z-0">
<img alt="City Skyline" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" style={{}}></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center reveal active">
<h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6" style={{}}>
                Ready to Become the Authority?
            </h2>
<p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto" style={{}}>
                Stop watching other agents win with social media. Let's build your brand and fill your pipeline.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-10 py-5 bg-white text-slate-900 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1" style={{}}>
                    Book Your Free Strategy Call
                </button>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12" style={{}}>
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-slate-900 font-bold text-xl tracking-tight" style={{}}>
                VICTOR.
            </div>
<div className="flex gap-8 text-sm text-slate-500" style={{}}>
<a className="hover:text-slate-900" href="#" style={{}}>Privacy Policy</a>
<a className="hover:text-slate-900" href="#" style={{}}>Terms of Service</a>
</div>
<div className="text-sm text-slate-400" style={{}}>
                © 2023 Victor Consulting. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
