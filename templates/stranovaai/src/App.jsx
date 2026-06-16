import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Smooth scroll functionality for all CTA buttons
        function smoothScroll(e) {
            e.preventDefault();
            const targetId = 'book-demo';
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }

        // ROI Calculator Logic
        document.addEventListener('DOMContentLoaded', () => {
            const callsInput = document.getElementById('callsPerDay');
            const percentInput = document.getElementById('missedPercent');
            const valueInput = document.getElementById('jobValue');
            
            const monthlyDisplay = document.getElementById('monthlyLost');
            const dailyDisplay = document.getElementById('dailyLost');
            const yearlyDisplay = document.getElementById('yearlyLost');

            function formatCurrency(num) {
                return new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    maximumFractionDigits: 0
                }).format(num);
            }

            function calculateROI() {
                // Get values
                const callsPerDay = parseFloat(callsInput.value) || 0;
                const missedPercent = parseFloat(percentInput.value) || 0;
                const jobValue = parseFloat(valueInput.value) || 0;

                // Calculations
                // Daily lost = (calls * (percent/100)) * jobValue
                const dailyLostCalls = callsPerDay * (missedPercent / 100);
                const dailyRevenue = dailyLostCalls * jobValue;
                
                // Monthly (22 working days)
                const monthlyRevenue = dailyRevenue * 22;
                
                // Yearly
                const yearlyRevenue = monthlyRevenue * 12;

                // Update DOM
                dailyDisplay.textContent = formatCurrency(dailyRevenue);
                monthlyDisplay.textContent = formatCurrency(monthlyRevenue);
                yearlyDisplay.textContent = formatCurrency(yearlyRevenue);
            }

            // Add event listeners
            [callsInput, percentInput, valueInput].forEach(input => {
                input.addEventListener('input', calculateROI);
            });

            // Initial calculation
            calculateROI();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="lucide:bot" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">Stranova<span className="text-blue-600">AI</span></span>
</div>
<nav className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#features">Features</a>
<a className="hover:text-slate-900 transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-slate-900 transition-colors" href="#results">Results</a>
<a className="hover:text-slate-900 transition-colors" href="#faq">FAQ</a>
</nav>
<a className="bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all shadow-sm shadow-orange-600/20" href="#book-demo" onclick="smoothScroll(event)">
                Book Free Demo
            </a>
</div>
</header>

<section className="relative pt-32 pb-20 overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white -z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
</span>
                        24/7 AI Lead Capture System
                    </div>
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                        Never Miss Another <span className="text-blue-600">Lead</span> Again.
                    </h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg">
                        Stop losing $10,000+ monthly in missed calls while you're on the job site. Get the StranovaAI receptionist that answers every call, filters tire-kickers, and books jobs automatically.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-xl font-medium transition-all shadow-lg shadow-blue-600/20" href="#book-demo" onclick="smoothScroll(event)">
                            Book Your Free Demo
                            <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<button className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-8 py-3.5 rounded-xl font-medium transition-all">
<iconify-icon icon="lucide:play-circle" strokeWidth="1.5" width="18"></iconify-icon>
                            Listen to Demo
                        </button>
</div>
<div className="pt-6 border-t border-slate-100">
<p className="text-xs font-medium text-slate-400 mb-4 uppercase tracking-wider">Trusted by 500+ contractors nationwide</p>
<div className="flex gap-6 opacity-50 grayscale mix-blend-multiply">

<div className="h-6 flex items-center gap-1"><div className="w-6 h-6 bg-slate-800 rounded"></div><span className="font-bold text-slate-800">BuildCo</span></div>
<div className="h-6 flex items-center gap-1"><div className="w-6 h-6 bg-slate-800 rounded-full"></div><span className="font-bold text-slate-800">Apex</span></div>
<div className="h-6 flex items-center gap-1"><div className="w-6 h-6 bg-slate-800 rotate-45"></div><span className="font-bold text-slate-800">Struct</span></div>
<div className="h-6 flex items-center gap-1"><div className="w-6 h-6 border-2 border-slate-800 rounded"></div><span className="font-bold text-slate-800">Craft</span></div>
</div>
</div>
</div>

<div className="relative mx-auto lg:ml-auto w-full max-w-lg">

<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
<img alt="Contractor on phone" className="w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-8 right-[-20px] bg-white/95 backdrop-blur rounded-xl p-4 shadow-xl border border-slate-100 w-64 animate-[bounce_3s_infinite]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white animate-pulse">
<iconify-icon icon="lucide:phone" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500 font-medium">Incoming Call</p>
<p className="text-sm font-semibold text-slate-900">Potential Lead (HVAC)</p>
</div>
</div>
</div>

<div className="absolute bottom-8 left-8 right-8 bg-slate-900/95 backdrop-blur text-white rounded-xl p-4 shadow-xl border border-white/10">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-lg bg-blue-600 flex-shrink-0 flex items-center justify-center">
<iconify-icon icon="lucide:bot" width="16"></iconify-icon>
</div>
<div className="space-y-1">
<p className="text-xs text-blue-300 font-medium uppercase tracking-wide">AI Assistant Active</p>
<p className="text-sm font-medium">"Hi, this is Mike's Plumbing assistant. I can help schedule that leak repair for you right now."</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative order-2 lg:order-1">
<div className="absolute inset-0 bg-gradient-to-tr from-red-50 to-transparent rounded-2xl transform -rotate-2"></div>
<img alt="Stressed Contractor" className="relative rounded-2xl shadow-lg w-full object-cover h-[400px] grayscale contrast-125" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 right-6 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
                        - $15,000 / month
                    </div>
</div>

<div className="order-1 lg:order-2">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                        You're Bleeding Money Every Time Your Phone Rings
                    </h2>
<p className="text-lg text-slate-500 mb-10">
                        You're an expert at your trade, but you can't be in two places at once. Every missed call is a homeowner who immediately calls your competitor.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 text-red-600">
<iconify-icon icon="lucide:phone-missed" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900">67% of leads go elsewhere</h3>
<p className="text-slate-500 mt-1">If you don't answer, they don't leave a voicemail. They just call the next number on Google.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 text-red-600">
<iconify-icon icon="lucide:banknote" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900">$15,000 lost monthly</h3>
<p className="text-slate-500 mt-1">Average contractor misses 10-20 viable leads per month due to being on the job site.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 text-red-600">
<iconify-icon icon="lucide:hammer" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900">Focus on the work</h3>
<p className="text-slate-500 mt-1">Your team is paid to build and fix, not to play phone tag with indecisive customers.</p>
</div>
</div>
</div>
<div className="mt-10">
<a className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-medium transition-all" href="#book-demo" onclick="smoothScroll(event)">
                            Get Started Today
                            <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                    Meet Your New AI Receptionist
                </h2>
<p className="text-lg text-slate-500">
                    Works 24/7, never takes a sick day, and sounds completely human. It qualifies leads, checks your schedule, and books appointments directly into your calendar.
                </p>
</div>
<div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden max-w-4xl mx-auto flex flex-col md:flex-row">

<div className="p-10 md:w-1/2 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100">
<div className="space-y-8">
<div>
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-3">
<iconify-icon icon="lucide:clock" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900">Instant Response</h3>
<p className="text-sm text-slate-500 mt-1">Answers within 2 seconds, 24 hours a day.</p>
</div>
<div>
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-3">
<iconify-icon icon="lucide:filter" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900">Smart Qualifying</h3>
<p className="text-sm text-slate-500 mt-1">Asks about job type and location before booking.</p>
</div>
<div>
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-3">
<iconify-icon icon="lucide:calendar-check" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900">Auto-Scheduling</h3>
<p className="text-sm text-slate-500 mt-1">Syncs with your calendar to book available slots.</p>
</div>
</div>
</div>

<div className="p-6 md:w-1/2 bg-slate-50">
<div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 h-full flex flex-col">
<div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-4">
<div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
<iconify-icon icon="lucide:bot" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">StranovaAI</div>
<div className="text-xs text-green-500 flex items-center gap-1">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Online
                                </div>
</div>
</div>
<div className="space-y-4 text-sm flex-1 overflow-hidden">

<div className="flex gap-3">
<div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none text-slate-700 max-w-[85%]">
                                    Thanks for calling Elite Electric. I'm the automated assistant. How can we help you today?
                                </div>
</div>

<div className="flex gap-3 flex-row-reverse">
<div className="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-none max-w-[85%]">
                                    Hi, I have a breaker that keeps tripping in my kitchen.
                                </div>
</div>

<div className="flex gap-3">
<div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none text-slate-700 max-w-[85%]">
                                    I can help with that. Is this for a residential or commercial property, and what is your zip code?
                                </div>
</div>

<div className="flex gap-3 flex-row-reverse">
<div className="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-none max-w-[85%]">
                                    Residential. 78704.
                                </div>
</div>

<div className="flex gap-3">
<div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none text-slate-700 max-w-[85%]">
                                    Great. Our diagnostic fee is $89 which is waived if we do the work. I have an opening tomorrow at 10 AM or 2 PM. Which works better?
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Everything You Need to Scale</h2>
<p className="text-lg text-slate-500">Powerful features designed specifically for the trades.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1 bg-white group">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:phone-call" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">24/7 Call Answering</h3>
<p className="text-slate-500">Never miss a call, even at 10 PM, weekends, or holidays. We capture leads while you sleep.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1 bg-white group">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:check-circle" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Lead Qualification</h3>
<p className="text-slate-500">AI asks the right questions to filter out spam and tire-kickers, sending you only serious jobs.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1 bg-white group">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:calendar" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Instant Scheduling</h3>
<p className="text-slate-500">Books appointments directly into your existing Google, Outlook, or CRM calendar.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1 bg-white group">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:languages" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Bilingual Support</h3>
<p className="text-slate-500">Seamlessly switches between English and Spanish to serve a wider customer base.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1 bg-white group">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:database" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">CRM Integration</h3>
<p className="text-slate-500">Syncs automatically with ServiceTitan, Housecall Pro, Jobber, and more.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1 bg-white group">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:mic" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Professional Voice</h3>
<p className="text-slate-500">Sounds indistinguishable from a human receptionist. Professional, polite, and on-brand.</p>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-xl font-medium transition-all shadow-lg shadow-blue-600/20" href="#book-demo" onclick="smoothScroll(event)">
                    Book Your Demo
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="results">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                    See Why Contractors Love Us
                </h2>
<p className="text-lg text-slate-500">Real results from real business owners.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
<div>
<div className="flex text-orange-400 mb-4">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-700 mb-6 font-medium">"I used to miss 5 calls a day while under sinks. Now, StranovaAI captures everything. We increased booked jobs by 40% in the first month alone."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Mike Rodriguez</div>
<div className="text-xs text-slate-500">Rodriguez Plumbing</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
<div>
<div className="flex text-orange-400 mb-4">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-700 mb-6 font-medium">"It pays for itself in one booked job. The best part is the qualification - my team only goes out to serious customers now."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Sarah Jenkins</div>
<div className="text-xs text-slate-500">Jenkins HVAC Services</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
<div>
<div className="flex text-orange-400 mb-4">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-700 mb-6 font-medium">"Setup took 15 minutes. It handles our after-hours emergency calls perfectly. Customers love that they talk to 'someone' instantly."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">David Chen</div>
<div className="text-xs text-slate-500">Chen Construction</div>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-lg font-medium transition-all" href="#book-demo" onclick="smoothScroll(event)">
                    Schedule Your Free Demo
                    <iconify-icon icon="lucide:calendar" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Get Started in 3 Simple Steps</h2>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-100 -z-10"></div>

<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 bg-white border-4 border-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 shadow-sm">
<iconify-icon icon="lucide:calendar-search" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">1. Book a Demo</h3>
<p className="text-slate-500 text-sm max-w-xs">Schedule a 15-minute call to discuss your business needs and call volume.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 bg-white border-4 border-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 shadow-sm">
<iconify-icon icon="lucide:settings-2" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">2. We Set It Up</h3>
<p className="text-slate-500 text-sm max-w-xs">We train your custom AI on your services and pricing in just 24 hours.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 bg-white border-4 border-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 shadow-sm">
<iconify-icon icon="lucide:trending-up" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">3. Start Capturing Leads</h3>
<p className="text-slate-500 text-sm max-w-xs">Go live, forward your calls, and watch your calendar fill up automatically.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Calculate Your Lost Revenue</h2>
<p className="text-slate-400">See how much money you're leaving on the table right now.</p>
</div>
<div className="bg-slate-800 rounded-3xl p-8 lg:p-12 border border-slate-700 shadow-2xl">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8">
<div>
<label className="block text-sm font-medium text-slate-300 mb-3">Average calls per day</label>
<div className="relative">
<input className="calc-input w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg" id="callsPerDay" min="0" placeholder="10" type="number" value="10"/>
<div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
<iconify-icon icon="lucide:phone" width="20"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-300 mb-3">Percentage of calls missed %</label>
<div className="relative">
<input className="calc-input w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg" id="missedPercent" max="100" min="0" placeholder="30" type="number" value="30"/>
<div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
<iconify-icon icon="lucide:percent" width="20"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-300 mb-3">Average job value $</label>
<div className="relative">
<input className="calc-input w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg" id="jobValue" min="0" placeholder="500" type="number" value="500"/>
<div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
<iconify-icon icon="lucide:dollar-sign" width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="flex flex-col justify-center items-center bg-slate-900/50 rounded-2xl p-8 border border-slate-700 h-full relative overflow-hidden group">

<div className="absolute inset-0 bg-red-500/5 blur-3xl group-hover:bg-red-500/10 transition-all duration-700"></div>
<div className="relative z-10 text-center w-full">
<p className="text-red-400 text-sm font-semibold mb-2 uppercase tracking-wide">You are losing approximately</p>
<div className="text-5xl lg:text-6xl font-bold text-white mb-2 tracking-tight">
<span className="text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-orange-600" id="monthlyLost">$33,000</span>
</div>
<p className="text-slate-400 mb-8">per month in missed opportunities</p>
<div className="grid grid-cols-2 gap-4 border-t border-slate-700/50 pt-6 mb-8 w-full">
<div>
<p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Daily Loss</p>
<p className="text-lg font-semibold text-white" id="dailyLost">$1,500</p>
</div>
<div>
<p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Yearly Loss</p>
<p className="text-lg font-semibold text-white" id="yearlyLost">$396,000</p>
</div>
</div>
<a className="w-full block bg-red-600 hover:bg-red-500 text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-lg shadow-red-900/20 transform hover:-translate-y-1" href="#book-demo" onclick="smoothScroll(event)">
                                Stop Losing Money - Book a Demo
                            </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Costs Less Than a Part-Time Employee</h2>
<p className="text-lg text-slate-500">Why hire a receptionist when you can have a full team for a fraction of the cost?</p>
</div>
<div className="overflow-x-auto">
<div className="min-w-[700px] max-w-4xl mx-auto">
<div className="grid grid-cols-3 gap-4 text-center">

<div className="p-4 font-semibold text-slate-500">Receptionist</div>
<div className="p-4 font-semibold text-slate-500">Ignoring Calls</div>
<div className="p-4 font-bold text-blue-600 bg-blue-50 rounded-t-xl border-t border-x border-blue-100">StranovaAI</div>

<div className="p-6 border-b border-slate-100 flex flex-col items-center justify-center">
<span className="text-2xl font-bold text-slate-900">$3,000</span>
<span className="text-xs text-slate-400">per month</span>
</div>
<div className="p-6 border-b border-slate-100 flex flex-col items-center justify-center">
<span className="text-2xl font-bold text-red-500">-$15,000</span>
<span className="text-xs text-slate-400">lost revenue</span>
</div>
<div className="p-6 bg-blue-50 border-x border-blue-100 flex flex-col items-center justify-center">
<span className="text-2xl font-bold text-slate-900">Fraction</span>
<span className="text-xs text-slate-500">of the cost</span>
</div>

<div className="p-4 border-b border-slate-100 text-sm text-slate-600">9am - 5pm Only</div>
<div className="p-4 border-b border-slate-100 text-sm text-slate-600">0 Hours</div>
<div className="p-4 bg-blue-50 border-x border-blue-100 text-sm font-semibold text-slate-900">24/7/365</div>

<div className="p-4 border-b border-slate-100 text-sm text-slate-600">Needs Training &amp; Sick Days</div>
<div className="p-4 border-b border-slate-100 text-sm text-slate-600">Zero Growth</div>
<div className="p-4 bg-blue-50 border-x border-blue-100 text-sm font-semibold text-slate-900">Always On, Instant Scale</div>

<div className="p-4"></div>
<div className="p-4"></div>
<div className="p-4 bg-blue-50 rounded-b-xl border-b border-x border-blue-100">
<iconify-icon className="text-blue-600" icon="lucide:check-circle" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer text-slate-900 font-medium select-none">
                        Will it sound robotic?
                        <span className="transition-transform group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                        Not at all. We use advanced voice synthesis that includes natural pauses and intonation. Most customers don't realize they're speaking to an AI until the booking is confirmed.
                    </div>
</details>
<details className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer text-slate-900 font-medium select-none">
                        Can it handle emergency calls?
                        <span className="transition-transform group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                        Yes. We can program custom logic to detect keywords like "emergency," "flooding," or "no power" and immediately forward those calls to your personal cell or an on-call technician.
                    </div>
</details>
<details className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer text-slate-900 font-medium select-none">
                        How long does setup take?
                        <span className="transition-transform group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                        We can have your basic agent up and running within 24 hours after our onboarding call. Integration with complex CRMs may take an additional day.
                    </div>
</details>
<details className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer text-slate-900 font-medium select-none">
                        Can I customize what it says?
                        <span className="transition-transform group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                        Absolutely. We build a knowledge base specific to your company, including your pricing, service areas, and company policies.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white" id="book-demo">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
                Ready to Stop Losing Leads?
            </h2>
<p className="text-xl text-slate-500 mb-12">
                Join 500+ contractors capturing more leads automatically. See exactly how it works in 15 minutes.
            </p>
<div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 overflow-hidden min-h-[750px]">

<div className="calendly-inline-widget" data-url="https://calendly.com/stranovamarketing/new-meeting" style={{minWidth: '320px', height: '700px'}}></div>

</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white">
<iconify-icon icon="lucide:bot" width="14"></iconify-icon>
</div>
<span className="font-bold text-slate-900">StranovaAI</span>
</div>
<div className="flex gap-8 text-sm text-slate-500">
<a className="hover:text-slate-900" href="#">Privacy Policy</a>
<a className="hover:text-slate-900" href="#">Terms of Service</a>
<a className="hover:text-slate-900" href="#">Contact Support</a>
</div>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-blue-600 transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="hover:text-blue-600 transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
<a className="hover:text-blue-600 transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
</div>
</div>
<div className="mt-8 text-center text-xs text-slate-400">
                © 2024 StranovaAI. All rights reserved. Designed for contractors.
            </div>
</div>
</footer>



    </>
  );
}
