import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();

        // Waitlist Modal Logic
        const modal = document.getElementById('waitlist-modal');
        const formContent = document.getElementById('form-content');
        const successContent = document.getElementById('success-content');
        const body = document.body;

        function openWaitlistModal() {
            modal.classList.remove('hidden');
            body.style.overflow = 'hidden'; // Prevent background scrolling
            formContent.classList.remove('hidden');
            successContent.classList.add('hidden');
            document.getElementById('first-name').focus();
        }

        function closeWaitlistModal() {
            modal.classList.add('hidden');
            body.style.overflow = 'auto';
        }

        function submitForm(e) {
            e.preventDefault();
            // Simulate API call delay
            setTimeout(() => {
                formContent.classList.add('hidden');
                successContent.classList.remove('hidden');
            }, 300);
        }

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeWaitlistModal();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-40 glass-nav border-b border-slate-800 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 relative z-10" href="#">
<img alt="Club Voyaj" className="h-10 object-contain mix-blend-screen mix-blend-plus-lighter" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</a>
<button className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-medium px-5 py-2.5 rounded-full text-sm transition-all shadow-sm" onclick="openWaitlistModal()">
                Join Waitlist
            </button>
</div>
</nav>

<div className="fixed inset-0 z-50 hidden" id="waitlist-modal">
<div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onclick="closeWaitlistModal()"></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-6">
<div className="bg-white rounded-2xl shadow-2xl p-8 relative">
<button className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors" onclick="closeWaitlistModal()">
<i className="w-6 h-6" data-lucide="x" strokeWidth="1.5"></i>
</button>
<div id="form-content">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Join the Waitlist</h3>
<p className="text-slate-500 text-base mb-6">Lock in founding member pricing today.</p>
<form className="space-y-4" onsubmit="submitForm(event)">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="first-name">First Name</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder:text-slate-400 text-base shadow-sm" id="first-name" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="email">Email Address</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder:text-slate-400 text-base shadow-sm" id="email" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="tier">Which tier interests you most? <span className="text-slate-400 font-normal">(Optional)</span></label>
<select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-base shadow-sm cursor-pointer" id="tier">
<option disabled="" selected="" value="">Select a tier</option>
<option value="explorer">Explorer</option>
<option value="voyager">Voyager</option>
<option value="elite">Elite</option>
</select>
</div>
<button className="w-full mt-2 bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3.5 rounded-xl text-base transition-all shadow-md flex justify-center items-center gap-2 group" type="submit">
                            Join the Waitlist — It's Free
                            <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<p className="text-center text-slate-500 text-sm mt-4">No credit card required.</p>
</form>
</div>
<div className="hidden text-center py-8" id="success-content">
<div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
<i className="w-8 h-8" data-lucide="check" strokeWidth="2"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">You're in.</h3>
<p className="text-slate-600 text-base">Watch your inbox — founding member access is coming.</p>
<button className="mt-8 text-sm font-medium text-slate-900 hover:text-amber-600 transition-colors" onclick="closeWaitlistModal()">
                        Return to site
                    </button>
</div>
</div>
</div>
</div>

<header className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-slate-900">

<div className="absolute inset-0 z-0">
<img alt="Luxury Paris Travel" className="w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&amp;fit=crop&amp;q=80&amp;w=2560"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white mt-12">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-8 leading-[1.05]">
                Travel the World,<br/><span className="text-amber-500 italic font-medium pr-2">For Less.</span>
</h1>
<p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Club Voyaj is the membership built for travelers who want more — more access, more value, and more peace of mind on every trip.
            </p>
<div className="flex flex-col items-center gap-4">
<button className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-medium px-8 py-4 md:px-10 md:py-5 rounded-full text-base md:text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 group" onclick="openWaitlistModal()">
                    Join the Waitlist — It's Free
                    <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<p className="text-sm md:text-base text-slate-400">
                    Founding member rates available for a limited time. No credit card required.
                </p>
</div>
</div>
</header>

<section className="py-24 md:py-32 bg-white px-6">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/9] bg-slate-900 border border-slate-200 group w-full max-w-[900px] mx-auto">
<img alt="Travel Video Preview" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8 text-white ml-1" data-lucide="play" strokeWidth="1.5"></i>
</div>
</div>
<div className="absolute bottom-4 left-4 right-4 flex justify-between text-white/80 text-xs font-medium tracking-wide">
<span>travelSlidepromo.mp4</span>
<span>02:14</span>
</div>
</div>
<div className="flex flex-col justify-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                        One Membership.<br/>A Better Way to See the World.
                    </h2>
<div className="space-y-5 text-slate-600 mb-10">
<p>
                            Club Voyaj was built on a simple belief — that every traveler deserves access to better rates, smarter tools, and real support, without paying luxury-agency prices.
                        </p>
<p>
                            Whether you're planning a weekend escape, a family vacation, or a global adventure, Club Voyaj gives you the access, savings, and assurance to travel with confidence.
                        </p>
<p className="font-medium text-slate-900">
                            This is not a booking site. This is a membership that works for you every time you travel.
                        </p>
</div>
<blockquote className="pl-6 border-l-4 border-amber-500 text-xl text-slate-700 italic mb-10 py-2">
                        "Access. Value. Assurance. Three things most travel companies talk about — and rarely deliver."
                    </blockquote>
<div>
<a className="inline-flex items-center gap-2 text-slate-900 font-medium text-lg hover:text-amber-600 transition-colors group" href="#pricing">
                            See the Plans
                            <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-slate-50 px-6 border-t border-slate-200/60">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-16 text-center">
                Everything You Need to Travel Smarter
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">

<div className="flex flex-col">
<div className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-slate-900">
<i className="w-7 h-7" data-lucide="globe" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-4 flex items-center gap-2">
<span className="w-2 h-2 bg-amber-500 rounded-full"></span> ACCESS — Go Anywhere
                    </h3>
<p className="text-slate-600 leading-relaxed text-base">
                        Member-only rates on 3,000,000+ hotels, 950+ airlines, 40,000+ cruise itineraries, and 300,000+ tours and activities worldwide. One membership. Endless possibilities.
                    </p>
</div>

<div className="flex flex-col">
<div className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-slate-900">
<i className="w-7 h-7" data-lucide="tag" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-4 flex items-center gap-2">
<span className="w-2 h-2 bg-amber-500 rounded-full"></span> VALUE — Pay Dramatically Less
                    </h3>
<p className="text-slate-600 leading-relaxed text-base">
                        Our Best Price Promise means if you find a lower rate anywhere online, we match it and give you 110% of the difference in credit. Add Room Coins rewards and daily member discounts, and you'll wonder why you ever booked any other way.
                    </p>
</div>

<div className="flex flex-col">
<div className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-slate-900">
<i className="w-7 h-7" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-4 flex items-center gap-2">
<div className="flex gap-0.5"><span className="w-2 h-2 bg-amber-500 rounded-full"></span><span className="w-2 h-2 bg-amber-500 rounded-full"></span></div> ASSURANCE — Travel with Confidence
                    </h3>
<p className="text-slate-600 leading-relaxed text-base">
                        From live assistance and luggage protection to flight insurance, telemedicine, and travel legal support — Club Voyaj has your back before, during, and after every trip.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white px-6" id="pricing">
<div className="max-w-7xl mx-auto text-center mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
                Choose the Plan That Fits How You Travel
            </h2>
<p className="text-xl text-slate-500 max-w-2xl mx-auto">
                Start with Explorer. Upgrade anytime. Lock in your founding member rate today.
            </p>
</div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

<div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
<div className="mb-8">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2 uppercase tracking-wide text-sm">Explorer</h3>
<div className="text-4xl font-semibold tracking-tight text-slate-900 mb-2">$19<span className="text-lg text-slate-500 font-normal">/month</span> <span className="text-base text-slate-400 font-normal ml-2">or $190/year</span></div>
<p className="text-slate-500 text-base">Start Your Journey</p>
</div>
<button className="w-full bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 font-medium px-6 py-3.5 rounded-xl transition-all mb-8" onclick="openWaitlistModal()">
                    Join as Explorer
                </button>
<ul className="space-y-4 text-slate-600 text-base flex-grow">
<li className="flex items-start gap-3"><i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> 3,000,000+ hotels at member-only rates</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> 300,000+ tours and activities worldwide</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> AI-generated personalized itineraries</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> Best Price Promise (110% credit guarantee)</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> 500 Room Coins welcome bonus ($25 value)</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> 24/7 platform support</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> UGC Creator Community access</li>
</ul>
</div>

<div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 shadow-xl relative flex flex-col h-full lg:-mt-4 lg:mb-4">
<div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
<span className="bg-amber-500 text-slate-950 text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full shadow-sm">
                        Most Popular
                    </span>
</div>
<div className="mb-8 mt-2">
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2 uppercase tracking-wide text-sm flex items-center gap-2">Voyager <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div></h3>
<div className="text-4xl font-semibold tracking-tight text-white mb-2">$29<span className="text-lg text-slate-400 font-normal">/month</span> <span className="text-base text-slate-500 font-normal ml-2">or $290/year</span></div>
<p className="text-amber-500 text-base font-medium">Go Further</p>
</div>
<button className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-medium px-6 py-3.5 rounded-xl transition-all mb-8 shadow-sm" onclick="openWaitlistModal()">
                    Join as Voyager
                </button>
<div className="text-slate-300 text-sm font-medium mb-4 pb-4 border-b border-slate-800">Everything in Explorer, plus:</div>
<ul className="space-y-4 text-slate-300 text-base flex-grow">
<li className="flex items-start gap-3"><i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> Flights at member pricing (950+ airlines)</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> Vacation rentals and resort weeks</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> 40,000+ cruise itineraries</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> Airport lounge access — 1,700+ lounges worldwide</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> Global Data eSIM — 1GB in 159 countries</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> Luggage storage at 4,000+ locations</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> BagAssure — up to $500 lost luggage reimbursement</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> $200,000 flight insurance</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> Fast Pass Passport and Visa Service</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> Daily discounts — up to 50% off dining and wellness</li>
</ul>
</div>

<div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
<div className="mb-8">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2 uppercase tracking-wide text-sm">Elite</h3>
<div className="text-4xl font-semibold tracking-tight text-slate-900 mb-2">$49<span className="text-lg text-slate-500 font-normal">/month</span> <span className="text-base text-slate-400 font-normal ml-2">or $490/year</span></div>
<p className="text-slate-500 text-base">Own the World</p>
</div>
<button className="w-full bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 font-medium px-6 py-3.5 rounded-xl transition-all mb-8" onclick="openWaitlistModal()">
                    Join as Elite
                </button>
<div className="text-slate-500 text-sm font-medium mb-4 pb-4 border-b border-slate-100">Everything in Voyager, plus:</div>
<ul className="space-y-4 text-slate-600 text-base flex-grow">
<li className="flex items-start gap-3"><i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> 24/7 Personal Travel Agent</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> 24/7 Concierge Assistant</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> Private Jet Service (sourced within 1 business day)</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> Private Yacht Charter</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> 4 complimentary airport lounge visits</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> BagAssure Family — up to $1,000 for entire travel party</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> MedAssure — up to $500 medical reimbursement</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> Doc in a Suitcase — unlimited telemedicine on every trip</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> Medi-Jet worldwide air medical transport</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> Travel Legal Assistance</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> Global Office — 10 hrs/month at premium co-working spaces</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> Club Voyaj Creator Verified Badge</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i> Annual Creator Trip Giveaway eligibility</li>
</ul>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-slate-50 px-6 border-t border-slate-200/60" id="library">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                    Everything Inside Club Voyaj
                </h2>
<p className="text-xl text-slate-600">
                    One membership. One platform. One price. Every benefit below lives inside Club Voyaj — available across our Explorer, Voyager, and Elite tiers. Choose the package that matches how you travel today.
                </p>
</div>
<div className="space-y-4">

<details className="group bg-white rounded-2xl border border-slate-200 overflow-hidden" open="">
<summary className="flex justify-between items-center cursor-pointer p-6 bg-white hover:bg-slate-50 transition-colors">
<span className="text-xl font-medium text-slate-900 flex items-center gap-3">
<span className="w-2 h-2 bg-amber-500 rounded-sm"></span> TRAVEL ACCESS
                        </span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="p-6 pt-0 text-slate-600 bg-white border-t border-slate-100">
<ul className="space-y-4">
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">3,000,000+ Hotels and Resorts</strong> — Member-only rates worldwide. No blackout dates.</div></li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">950+ Airlines</strong> — Book flights at member pricing through a single platform. <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 ml-1 border border-slate-200">Voyager+</span></div></li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">40,000+ Cruise Itineraries</strong> — Every major line. Every ocean. <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 ml-1 border border-slate-200">Voyager+</span></div></li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">300,000+ Tours and Activities</strong> — Guided experiences and local discoveries worldwide.</div></li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">Vacation Rentals and Resort Weeks</strong> — Villas, condos, and private getaways at member rates. <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 ml-1 border border-slate-200">Voyager+</span></div></li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">Ride Center</strong> — Car rentals and ground transfers coordinated through your membership. <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 ml-1 border border-slate-200">Voyager+</span></div></li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">Virgin Experience Days</strong> — Curated premium experiences in the US and UK. <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 ml-1 border border-slate-200">Voyager+</span></div></li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">Group Getaways</strong> — Curated group adventures with a dedicated Club Voyaj ambassador. <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-900 text-white ml-1">Elite Only</span></div></li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">Private Jet Service</strong> — Charter sourced and arranged within one business day. <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-900 text-white ml-1">Elite Only</span></div></li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">Private Yacht Charter</strong> — Bespoke sailing experiences arranged on request. <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-900 text-white ml-1">Elite Only</span></div></li>
</ul>
</div>
</details>

<details className="group bg-white rounded-2xl border border-slate-200 overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-6 bg-white hover:bg-slate-50 transition-colors">
<span className="text-xl font-medium text-slate-900 flex items-center gap-3">
<span className="w-2 h-2 bg-amber-500 rounded-sm"></span> VALUE AND SAVINGS
                        </span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="p-6 pt-0 text-slate-600 bg-white border-t border-slate-100">
<ul className="space-y-4">
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">Best Price Promise</strong> — Find a lower rate anywhere and we match it, plus give you 110% credit.</div></li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">Room Coins</strong> — Earn rewards on every booking. Redeem toward future stays.</div></li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">Room Coins Welcome Bonus</strong> — 500 coins deposited on joining ($25 value).</div></li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">Room Coins Monthly Credit</strong> — 100 coins credited automatically every month. <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-900 text-white ml-1">Elite Only</span></div></li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">Daily Discounts</strong> — Up to 50% off dining, wellness, and entertainment at US merchants. <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 ml-1 border border-slate-200">Voyager+</span></div></li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">Travel Marketplace</strong> — VIP pricing on Tumi, ClubGlove, and premium travel gear (up to 33% off). <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 ml-1 border border-slate-200">Voyager+</span></div></li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">TasteCard</strong> — Up to 50% off dining at 6,000+ UK restaurants. <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-900 text-white ml-1">Elite Only</span></div></li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">Founding Member Rate Lock</strong> — Lock in the lowest rate for life.</div></li>
</ul>
</div>
</details>

<details className="group bg-white rounded-2xl border border-slate-200 overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-6 bg-white hover:bg-slate-50 transition-colors">
<span className="text-xl font-medium text-slate-900 flex items-center gap-3">
<div className="flex gap-0.5"><span className="w-2 h-2 bg-amber-500 rounded-sm"></span><span className="w-2 h-2 bg-amber-500 rounded-sm"></span></div> ASSURANCE AND PROTECTION
                        </span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="p-6 pt-0 text-slate-600 bg-white border-t border-slate-100">
<ul className="space-y-4">
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">BagAssure Individual</strong> — Up to $500 reimbursement for lost or delayed luggage. <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 ml-1 border border-slate-200">Voyager+</span></div></li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">BagAssure Family</strong> — Up to $1,000 coverage for the entire travel party. <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-900 text-white ml-1">Elite Only</span></div></li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">Flight Insurance</strong> — $200,000 accidental coverage on all booked flights. <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 ml-1 border border-slate-200">Voyager+</span></div></li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">MedAssure</strong> — Up to $500 reimbursement for medical expenses during travel. <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-900 text-white ml-1">Elite Only</span></div></li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">Doc in a Suitcase</strong> — Unlimited telemedicine on every vacation. Call, chat, video, prescriptions. <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-900 text-white ml-1">Elite Only</span></div></li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">Medi-Jet Service</strong> — Worldwide air medical evacuation if hospitalized 500+ miles from home. <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-900 text-white ml-1">Elite Only</span></div></li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">Travel Legal Assistance</strong> — International legal support in local jurisdictions. <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-900 text-white ml-1">Elite Only</span></div></li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">Fast Pass Passport and Visa Service</strong> — Expedited processing support. <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 ml-1 border border-slate-200">Voyager+</span></div></li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">Frequent Flyer Help Desk</strong> — Expert support maximizing your miles and status. <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 ml-1 border border-slate-200">Voyager+</span></div></li>
</ul>
</div>
</details>

<details className="group bg-white rounded-2xl border border-slate-200 overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-6 bg-white hover:bg-slate-50 transition-colors">
<span className="text-xl font-medium text-slate-900 flex items-center gap-3">
<span className="w-2 h-2 bg-amber-500 rounded-sm"></span> CONCIERGE AND PERSONAL SERVICE
                        </span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="p-6 pt-0 text-slate-600 bg-white border-t border-slate-100">
<ul className="space-y-4">
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">24/7 Personal Travel Agent</strong> — Flights, hotels, cars, dining, and full itinerary management. <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-900 text-white ml-1">Elite Only</span></div></li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">24/7 Concierge Assistant</strong> — On-call support for dining, events, errands, and emergencies. <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-900 text-white ml-1">Elite Only</span></div></li>
</ul>
</div>
</details>

<details className="group bg-white rounded-2xl border border-slate-200 overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-6 bg-white hover:bg-slate-50 transition-colors">
<span className="text-xl font-medium text-slate-900 flex items-center gap-3">
<span className="w-2 h-2 bg-amber-500 rounded-sm"></span> ON-THE-ROAD PERKS
                        </span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="p-6 pt-0 text-slate-600 bg-white border-t border-slate-100">
<ul className="space-y-4">
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">Airport Lounge Access</strong> — 1,700+ lounges worldwide. <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 ml-1 border border-slate-200">Voyager+</span></div></li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">Global Data eSIM</strong> — 1GB of data in 159 countries. <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 ml-1 border border-slate-200">Voyager+</span></div></li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">Luggage Storage</strong> — 4,000+ secure locations. One free bag per air booking. <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 ml-1 border border-slate-200">Voyager+</span></div></li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">Global Office</strong> — 10 hours per month at premium co-working spaces worldwide. <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-900 text-white ml-1">Elite Only</span></div></li>
</ul>
</div>
</details>

<details className="group bg-white rounded-2xl border border-slate-200 overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-6 bg-white hover:bg-slate-50 transition-colors">
<span className="text-xl font-medium text-slate-900 flex items-center gap-3">
<span className="w-2 h-2 bg-amber-500 rounded-sm"></span> CREATOR COMMUNITY
                        </span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="p-6 pt-0 text-slate-600 bg-white border-t border-slate-100">
<ul className="space-y-4">
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">UGC Creator Community</strong> — Submit travel videos for Club Voyaj YouTube and social platforms.</div></li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">Creator Verified Badge</strong> — Elite members receive official Club Voyaj Creator status. <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-900 text-white ml-1">Elite Only</span></div></li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">Priority Content Placement</strong> — Voyager and Elite submissions receive priority review. <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 ml-1 border border-slate-200">Voyager+</span></div></li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></span><div className="flex-1"><strong className="font-medium text-slate-900">Annual Creator Trip Giveaway</strong> — Elite members eligible for the annual all-expenses creator trip. <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-900 text-white ml-1">Elite Only</span></div></li>
</ul>
</div>
</details>
</div>

<div className="mt-12 bg-slate-900 text-white rounded-3xl p-8 md:p-10 text-center shadow-lg relative overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&amp;fit=crop&amp;q=80')] bg-cover bg-center"></div>
<div className="relative z-10">
<p className="text-amber-500 font-medium mb-4 uppercase tracking-wider text-sm">Not every benefit is in every tier — and that's by design.</p>
<p className="text-lg md:text-xl text-slate-300 mb-6 max-w-2xl mx-auto leading-relaxed">
                        Explorer gives you the foundation. Voyager adds the tools frequent travelers actually use. Elite wraps everything in personal service, medical protection, and concierge support — because when you travel at that level, someone else should be handling the details.
                    </p>
<p className="text-xl md:text-2xl font-semibold mb-8 text-white">Start where you are. Upgrade when you're ready.</p>
<a className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-medium px-8 py-3.5 rounded-xl transition-all shadow-sm group" href="#pricing">
                        Compare All Tiers
                        <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-slate-950 text-white px-6 border-t border-slate-800">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 flex flex-col justify-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">
                    Travel It. Film It.<br/><span className="text-amber-500">Inspire the World.</span>
</h2>
<p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-lg">
                    Club Voyaj members don't just travel — they share. Submit a short 60 to 90 second travel video and get featured across Club Voyaj's YouTube, Instagram, and social platforms. The best stories inspire our growing global community. Your next trip could inspire someone else's journey.
                </p>
<ul className="space-y-5 mb-10">
<li className="flex items-center gap-4 text-slate-200">
<div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0">
<div className="w-1.5 h-1.5 bg-amber-500 rounded-sm"></div>
</div>
                        Submit from anywhere in the world
                    </li>
<li className="flex items-center gap-4 text-slate-200">
<div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0">
<div className="w-1.5 h-1.5 bg-amber-500 rounded-sm"></div>
</div>
                        Elite members earn Creator Verified status
                    </li>
<li className="flex items-center gap-4 text-slate-200">
<div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0">
<div className="w-1.5 h-1.5 bg-amber-500 rounded-sm"></div>
</div>
                        Top creators featured on Club Voyaj YouTube
                    </li>
<li className="flex items-center gap-4 text-slate-200">
<div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-amber-500" data-lucide="plane" strokeWidth="1.5"></i>
</div>
                        Elite members eligible for the annual Creator Trip giveaway
                    </li>
</ul>
<div>
<button className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-medium px-8 py-3.5 rounded-xl transition-all group" onclick="openWaitlistModal()">
                        Join the Creator Community
                        <i className="w-5 h-5 text-amber-500 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="order-1 lg:order-2 relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
<img alt="Travel Creator" className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full border-2 border-amber-500 overflow-hidden bg-slate-800">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<div>
<div className="text-sm font-medium flex items-center gap-1">@SarahExplores <i className="w-4 h-4 text-amber-500" data-lucide="badge-check" strokeWidth="2"></i></div>
<div className="text-xs text-slate-300">Creator Verified</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden bg-slate-900">
<div className="absolute inset-0 z-0">
<img alt="Epic Travel Destination" className="w-full h-full object-cover opacity-50 mix-blend-overlay" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&amp;fit=crop&amp;q=80&amp;w=2560"/>
<div className="absolute inset-0 bg-slate-950/60"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
                Your World is Waiting.
            </h2>
<p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-normal">
                Join the Club Voyaj waitlist today and be first to access founding member pricing — the lowest rate this membership will ever be offered.
            </p>
<div className="flex flex-col items-center gap-4">
<button className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-medium px-10 py-5 rounded-full text-lg transition-all shadow-xl hover:-translate-y-0.5 flex items-center gap-2 group" onclick="openWaitlistModal()">
                    Join the Waitlist — It's Free
                </button>
<p className="text-sm md:text-base text-slate-300 opacity-80">
                    No credit card required. Founding member rates available for a limited time.
                </p>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white px-6 border-b border-slate-200">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-12 text-center">
                Frequently Asked Questions
            </h2>
<div className="space-y-2">

<details className="group bg-slate-50 rounded-2xl border border-slate-200" open="">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-slate-900">
                        What is Club Voyaj?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="p-6 pt-0 text-slate-600 text-base leading-relaxed">
                        Club Voyaj is a travel membership that gives members access to exclusive rates on hotels, flights, cruises, tours, and experiences worldwide — plus rewards, savings tools, and travel assurance built into every tier.
                    </div>
</details>

<details className="group bg-slate-50 rounded-2xl border border-slate-200">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-slate-900">
                        How is Club Voyaj different from booking on my own?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="p-6 pt-0 text-slate-600 text-base leading-relaxed">
                        Club Voyaj gives you member-only pricing not available to the public, a Best Price Promise that guarantees you won't overpay, and an assurance layer including luggage protection, flight insurance, and live assistance — none of which you get from a standard booking site.
                    </div>
</details>

<details className="group bg-slate-50 rounded-2xl border border-slate-200">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-slate-900">
                        What is included in each tier?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="p-6 pt-0 text-slate-600 text-base leading-relaxed">
                        Explorer covers hotels, tours, AI itineraries, and member savings. Voyager adds flights, cruises, lounges, insurance, and frequent traveler tools. Elite includes everything in Voyager plus a 24/7 personal travel agent and concierge, medical support, legal assistance, and premium services.
                    </div>
</details>

<details className="group bg-slate-50 rounded-2xl border border-slate-200">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-slate-900">
                        Can I upgrade my tier?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="p-6 pt-0 text-slate-600 text-base leading-relaxed">
                        Yes. You can upgrade at any time. Founding members who lock in their rate keep that rate, even after upgrading.
                    </div>
</details>

<details className="group bg-slate-50 rounded-2xl border border-slate-200">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-slate-900">
                        Is there a contract or commitment?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="p-6 pt-0 text-slate-600 text-base leading-relaxed">
                        No long-term contract required. Monthly plans cancel anytime. Annual plans offer the best value.
                    </div>
</details>

<details className="group bg-slate-50 rounded-2xl border border-slate-200">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-slate-900">
                        What is the Best Price Promise?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="p-6 pt-0 text-slate-600 text-base leading-relaxed">
                        If you find a lower price on any booking anywhere online, Club Voyaj matches it and credits you 110% of the difference in Room Coins.
                    </div>
</details>

<details className="group bg-slate-50 rounded-2xl border border-slate-200">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-slate-900">
                        What are Room Coins?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="p-6 pt-0 text-slate-600 text-base leading-relaxed">
                        Room Coins are the Club Voyaj rewards currency. Earn them on every booking and redeem them toward future travel. Explorer and Voyager members receive 500 on joining. Elite members receive 100 every month automatically.
                    </div>
</details>

<details className="group bg-slate-50 rounded-2xl border border-slate-200">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-slate-900">
                        What is the Creator Community?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="p-6 pt-0 text-slate-600 text-base leading-relaxed">
                        Any Club Voyaj member can submit short travel videos for featuring on Club Voyaj's YouTube, Instagram, and social platforms. Elite members receive a Creator Verified badge, priority placement, and eligibility for the annual Club Voyaj Creator Trip giveaway.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-16 px-6 border-t border-slate-900">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-1">
<img alt="Club Voyaj" className="h-8 object-contain mix-blend-screen mix-blend-plus-lighter mb-4" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<p className="text-sm text-slate-500">Travel the World, For Less.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4 tracking-wide text-sm uppercase">Explore</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-amber-500 transition-colors" href="#">How It Works</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#pricing">Compare Plans</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Creator Community</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 tracking-wide text-sm uppercase">Connect</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-amber-500 transition-colors" href="#">Instagram @ClubVoyaj</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">YouTube @ClubVoyaj</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Facebook: Club Voyaj</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="mailto:go@clubvoyaj.com">go@clubvoyaj.com</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 tracking-wide text-sm uppercase">Legal</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Refund Policy</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 text-sm text-slate-600 flex flex-col md:flex-row justify-between items-center gap-4">
<p>Copyright: © 2026 Club Voyaj. All rights reserved.</p>
</div>
</footer>



    </>
  );
}
