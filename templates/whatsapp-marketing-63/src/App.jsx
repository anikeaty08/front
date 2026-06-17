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



        function switchView(viewName, scrollTargetId = null) {
            // 1. Hide all views
            document.querySelectorAll('.app-view').forEach(el => {
                el.classList.remove('active');
            });

            // 2. Show the requested view
            const targetView = document.getElementById('view-' + viewName);
            if(targetView) {
                targetView.classList.add('active');
            }

            // 3. Handle scrolling
            if (viewName === 'landing') {
                if (scrollTargetId) {
                    // Slight delay to allow display:block to render before scrolling
                    setTimeout(() => {
                        const element = document.getElementById(scrollTargetId);
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                        }
                    }, 10);
                } else {
                    window.scrollTo(0, 0);
                }
            } else {
                window.scrollTo(0, 0);
            }
        }
    
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
      

<nav className="fixed w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<a className="flex items-center gap-2 group" href="#" onclick="switchView('landing', 'home')">
<div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:message-circle" data-width="20"></span>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">WhatsGrow</span>
</a>

<div className="hidden lg:flex space-x-8 text-sm font-medium text-slate-500">
<button className="hover:text-slate-900 transition-colors" onclick="switchView('landing', 'features')">Features</button>
<button className="hover:text-slate-900 transition-colors" onclick="switchView('landing', 'cases')">Use Cases</button>
<button className="hover:text-slate-900 transition-colors" onclick="switchView('landing', 'pricing')">Pricing</button>
<button className="hover:text-slate-900 transition-colors" onclick="switchView('landing', 'how-it-works')">How It Works</button>
<button className="hover:text-slate-900 transition-colors" onclick="switchView('landing', 'faq')">FAQ</button>
</div>

<div className="flex items-center space-x-4">
<button className="text-sm font-medium text-slate-600 hover:text-slate-900 hidden sm:block" onclick="switchView('login')">Login</button>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-5 py-2 rounded-lg transition-all shadow-sm hover:shadow-md" onclick="switchView('signup')">
                        Start Free Trial
                    </button>

<button className="lg:hidden text-slate-500">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</div>
</nav>

<div className="pt-16 flex-grow">

<div className="app-view active" id="view-landing">

<section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-mesh overflow-hidden" id="home">
<div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium mb-8">
<span className="iconify" data-icon="lucide:check-circle" data-width="14"></span>
                        Official Meta Business Partner
                    </div>
<h1 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tighter mb-6 leading-[1.15]">
                        Grow Your Indian Business <br className="hidden md:block"/> on <span className="text-emerald-600">WhatsApp</span> Safely
                    </h1>
<p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Send bulk offers, automate replies, and collect payments without getting your number banned. trusted by 5,000+ Indian shops and coaching centers.
                    </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-lg font-medium transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2" onclick="switchView('signup')">
                            Start Free Trial
                            <span className="iconify" data-icon="lucide:arrow-right" data-width="18"></span>
</button>
<button className="w-full sm:w-auto bg-white border border-slate-200 hover:border-slate-300 text-slate-700 px-8 py-3.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2" onclick="switchView('landing', 'features')">
                            See Features
                        </button>
</div>
<p className="mt-6 text-xs text-slate-400">No credit card required • 7-day free trial</p>
</div>
</section>

<section className="py-10 border-y border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-4 text-center">
<p className="text-sm font-medium text-slate-400 mb-6 uppercase tracking-widest">Trusted by 5,000+ Indian Businesses</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 font-semibold text-slate-900"><span className="iconify" data-icon="lucide:graduation-cap"></span> Shiksha Classes</div>
<div className="flex items-center gap-2 font-semibold text-slate-900"><span className="iconify" data-icon="lucide:scissors"></span> Glamour Salon</div>
<div className="flex items-center gap-2 font-semibold text-slate-900"><span className="iconify" data-icon="lucide:shopping-bag"></span> Urban Dukan</div>
<div className="flex items-center gap-2 font-semibold text-slate-900"><span className="iconify" data-icon="lucide:flower-2"></span> Ishta Yoga</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Stop Risking Your Number</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
<span className="iconify text-red-500" data-icon="lucide:ban" data-width="20"></span>
</div>
<div>
<h3 className="font-medium text-slate-900">Personal WhatsApp = Ban Risk</h3>
<p className="text-sm text-slate-500 mt-1">Sending bulk messages from your phone will get you blocked by WhatsApp immediately.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
<span className="iconify text-orange-500" data-icon="lucide:message-square-off" data-width="20"></span>
</div>
<div>
<h3 className="font-medium text-slate-900">Manual Replies = Lost Sales</h3>
<p className="text-sm text-slate-500 mt-1">You can't reply to 100 customers at once. Leads go cold while you type.</p>
</div>
</div>
</div>
</div>
<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 relative">
<div className="absolute top-0 right-0 p-4">
<span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded">OFFICIAL API</span>
</div>
<div className="space-y-4 font-mono text-sm">
<div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 w-3/4">
                                    Hi! Do you have the new saree collection?
                                </div>
<div className="whatsapp-bubble">
                                    Yes! Here is our catalogue 👇<br/>
<span className="text-blue-600 underline">view-catalogue.link</span>
<div className="mt-2 text-[10px] text-slate-500 text-right">Automated via WhatsGrow</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50/50" id="features">
<div className="max-w-3xl mx-auto text-center px-4 mb-16">
<h1 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Everything You Can Do</h1>
<p className="text-slate-500">Powerful tools built for non-tech business owners.</p>
</div>
<div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 text-emerald-600">
<span className="iconify" data-icon="lucide:megaphone" data-width="20"></span>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Bulk Broadcasts</h3>
<p className="text-sm text-slate-500 mb-4">Send offers to 10,000+ customers in one click. 98% open rate guaranteed.</p>
<div className="bg-slate-50 p-3 rounded text-xs text-slate-400 font-mono">
                            "Diwali Sale! Flat 50% OFF..." <span className="text-emerald-600">Sent to 500 contacts</span>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
<span className="iconify" data-icon="lucide:bot" data-width="20"></span>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Auto-Reply Chatbot</h3>
<p className="text-sm text-slate-500 mb-4">Set up "Press 1 for Price", "Press 2 for Address". Work while you sleep.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
<span className="iconify" data-icon="lucide:indian-rupee" data-width="20"></span>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Payment Links</h3>
<p className="text-sm text-slate-500 mb-4">Send Razorpay/UPI links directly in chat. Verify payment status automatically.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4 text-orange-600">
<span className="iconify" data-icon="lucide:users" data-width="20"></span>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Customer Segments</h3>
<p className="text-sm text-slate-500 mb-4">Tag users as "VIP", "New Lead", or "Paid". Send relevant messages only.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-4 text-slate-600">
<span className="iconify" data-icon="lucide:bar-chart-3" data-width="20"></span>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Live Analytics</h3>
<p className="text-sm text-slate-500 mb-4">See who read your message and who clicked. Stop guessing.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mb-4 text-pink-600">
<span className="iconify" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Green Tick Help</h3>
<p className="text-sm text-slate-500 mb-4">We help you apply for the official WhatsApp Green Tick verification.</p>
</div>
</div>
</section>

<section className="py-20 bg-white" id="cases">
<div className="max-w-6xl mx-auto px-4">
<div className="text-center mb-16">
<h1 className="text-3xl font-semibold text-slate-900 tracking-tight">Built for Your Business</h1>
</div>
<div className="grid gap-12">

<div className="grid md:grid-cols-2 gap-8 items-center border border-slate-100 rounded-2xl p-8 shadow-sm">
<div>
<div className="flex items-center gap-2 mb-4">
<span className="bg-blue-100 text-blue-700 p-2 rounded-lg"><span className="iconify" data-icon="lucide:graduation-cap"></span></span>
<h3 className="text-xl font-semibold text-slate-900">Coaching Institutes</h3>
</div>
<h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-2">The Problem</h4>
<p className="text-sm text-slate-500 mb-4">Students miss classes, parents don't see emails about fees.</p>
<h4 className="text-sm font-semibold text-emerald-700 uppercase tracking-wide mb-2">WhatsGrow Solution</h4>
<p className="text-sm text-slate-500">Automated attendance alerts and fee reminders on WhatsApp.</p>
</div>
<div className="bg-slate-50 p-6 rounded-xl">
<div className="whatsapp-bubble">
                                    📢 <span className="font-bold">Fee Reminder:</span><br/>
                                    Dear Parent, fees for Rahul (Class 10) is due. Please pay via link:<br/>
<span className="text-blue-600">pay.link/rahul-fees</span>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-8 items-center border border-slate-100 rounded-2xl p-8 shadow-sm">
<div>
<div className="flex items-center gap-2 mb-4">
<span className="bg-pink-100 text-pink-700 p-2 rounded-lg"><span className="iconify" data-icon="lucide:scissors"></span></span>
<h3 className="text-xl font-semibold text-slate-900">Salons &amp; Spas</h3>
</div>
<h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-2">The Problem</h4>
<p className="text-sm text-slate-500 mb-4">Clients forget appointments or don't return for months.</p>
<h4 className="text-sm font-semibold text-emerald-700 uppercase tracking-wide mb-2">WhatsGrow Solution</h4>
<p className="text-sm text-slate-500">Appointment confirmations and "We miss you" offers.</p>
</div>
<div className="bg-slate-50 p-6 rounded-xl">
<div className="whatsapp-bubble">
                                    👋 Hi Priya! It's been 30 days since your last haircut.<br/>
                                    Book today and get <span className="font-bold">20% OFF</span>.<br/>
                                    Reply "BOOK" to schedule.
                                </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="how-it-works">
<div className="max-w-5xl mx-auto px-4">
<div className="text-center mb-16">
<h1 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Live in 10 Minutes</h1>
<p className="text-slate-500">No coding. No technical team needed.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-slate-200"></div>
<div className="space-y-12">

<div className="relative flex flex-col md:flex-row items-center justify-between">
<div className="md:w-5/12 text-center md:text-right order-2 md:order-1">
<h3 className="text-lg font-semibold text-slate-900">1. Connect Number</h3>
<p className="text-sm text-slate-500 mt-2">Log in with Facebook and connect your WhatsApp Business number.</p>
</div>
<div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white text-sm font-bold z-10 border-4 border-slate-50">1</div>
<div className="md:w-5/12 order-1 md:order-2 pl-0 md:pl-10 pb-6 md:pb-0">
<div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
<div className="flex items-center gap-3">
<span className="iconify text-blue-600" data-icon="logos:facebook" data-width="24"></span>
<span className="text-sm font-medium">Continue with Facebook</span>
</div>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between">
<div className="md:w-5/12 order-1 pr-0 md:pr-10 pb-6 md:pb-0 flex justify-end">
<div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 w-full max-w-xs">
<div className="flex items-center gap-2 text-sm text-slate-500">
<span className="iconify text-green-500" data-icon="lucide:file-spreadsheet"></span>
                                            customers.csv uploaded
                                        </div>
</div>
</div>
<div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white text-sm font-bold z-10 border-4 border-slate-50">2</div>
<div className="md:w-5/12 text-center md:text-left order-2">
<h3 className="text-lg font-semibold text-slate-900">2. Upload Contacts</h3>
<p className="text-sm text-slate-500 mt-2">Upload your Excel sheet or sync with your website.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between">
<div className="md:w-5/12 text-center md:text-right order-2 md:order-1">
<h3 className="text-lg font-semibold text-slate-900">3. Send &amp; Relax</h3>
<p className="text-sm text-slate-500 mt-2">Create your message template and hit send. Watch sales come in.</p>
</div>
<div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white text-sm font-bold z-10 border-4 border-slate-50">3</div>
<div className="md:w-5/12 order-1 md:order-2 pl-0 md:pl-10 pb-6 md:pb-0">
<div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
<button className="bg-emerald-600 text-white text-xs font-medium px-4 py-2 rounded w-full">Send Campaign</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h1 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Simple Indian Pricing</h1>
<p className="text-slate-500">Pay for the platform. WhatsApp conversation charges are paid directly to Meta.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="border border-slate-200 rounded-2xl p-8 hover:border-slate-300 transition-colors">
<h3 className="text-lg font-medium text-slate-900">Starter</h3>
<div className="mt-4 flex items-baseline">
<span className="text-3xl font-bold text-slate-900">₹999</span>
<span className="text-slate-500 ml-1">/month</span>
</div>
<p className="mt-2 text-sm text-slate-500">For small shops just starting.</p>
<button className="mt-6 w-full py-2.5 border border-slate-200 rounded-lg text-sm font-medium hover:border-slate-900 hover:text-slate-900 transition-colors" onclick="switchView('signup')">Start Free Trial</button>
<ul className="mt-6 space-y-3 check-list">
<li><span className="iconify text-emerald-600" data-icon="lucide:check"></span> 1,000 Broadcasts/mo</li>
<li><span className="iconify text-emerald-600" data-icon="lucide:check"></span> Basic Chatbot</li>
<li><span className="iconify text-emerald-600" data-icon="lucide:check"></span> No Green Tick support</li>
</ul>
</div>

<div className="border border-emerald-500 bg-slate-900 rounded-2xl p-8 text-white relative shadow-xl transform md:-translate-y-4">
<div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">Most Popular</div>
<h3 className="text-lg font-medium text-emerald-400">Growth</h3>
<div className="mt-4 flex items-baseline">
<span className="text-3xl font-bold text-white">₹2,499</span>
<span className="text-slate-400 ml-1">/month</span>
</div>
<p className="mt-2 text-sm text-slate-400">For growing businesses.</p>
<button className="mt-6 w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-medium transition-colors" onclick="switchView('signup')">Start Free Trial</button>
<ul className="mt-6 space-y-3">
<li className="flex items-start gap-2 text-sm text-slate-300"><span className="iconify text-emerald-400" data-icon="lucide:check"></span> 10,000 Broadcasts/mo</li>
<li className="flex items-start gap-2 text-sm text-slate-300"><span className="iconify text-emerald-400" data-icon="lucide:check"></span> Advanced Chatbot Flows</li>
<li className="flex items-start gap-2 text-sm text-slate-300"><span className="iconify text-emerald-400" data-icon="lucide:check"></span> Priority Support</li>
<li className="flex items-start gap-2 text-sm text-slate-300"><span className="iconify text-emerald-400" data-icon="lucide:check"></span> Green Tick Application</li>
</ul>
</div>

<div className="border border-slate-200 rounded-2xl p-8 hover:border-slate-300 transition-colors">
<h3 className="text-lg font-medium text-slate-900">Pro</h3>
<div className="mt-4 flex items-baseline">
<span className="text-3xl font-bold text-slate-900">₹5,999</span>
<span className="text-slate-500 ml-1">/month</span>
</div>
<p className="mt-2 text-sm text-slate-500">For large scale operations.</p>
<button className="mt-6 w-full py-2.5 border border-slate-200 rounded-lg text-sm font-medium hover:border-slate-900 hover:text-slate-900 transition-colors" onclick="switchView('landing', 'contact')">Contact Sales</button>
<ul className="mt-6 space-y-3 check-list">
<li><span className="iconify text-emerald-600" data-icon="lucide:check"></span> Unlimited Broadcasts</li>
<li><span className="iconify text-emerald-600" data-icon="lucide:check"></span> API Access</li>
<li><span className="iconify text-emerald-600" data-icon="lucide:check"></span> Dedicated Account Manager</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="faq">
<div className="max-w-3xl mx-auto px-4">
<h1 className="text-3xl font-semibold text-slate-900 tracking-tight mb-12 text-center">Common Questions</h1>
<div className="space-y-4">
<div className="bg-white p-6 rounded-xl border border-slate-200">
<h3 className="font-medium text-slate-900 mb-2">Will my WhatsApp number get banned?</h3>
<p className="text-sm text-slate-500">No. Since we use the Official WhatsApp Business API, your number is whitelisted by Meta. You can send thousands of messages safely.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200">
<h3 className="font-medium text-slate-900 mb-2">Can I use my existing mobile number?</h3>
<p className="text-sm text-slate-500">Yes! We will help you migrate your current WhatsApp number to the API platform. Your chat history on the old app will be deleted, but you keep the number.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200">
<h3 className="font-medium text-slate-900 mb-2">Do I need a GST number?</h3>
<p className="text-sm text-slate-500">While GST helps verify your business faster with Meta, it is possible to verify using other business documents like Udyam Aadhar.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="contact">
<div className="max-w-4xl mx-auto px-4">
<div className="text-center mb-12">
<h1 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Let's Talk</h1>
<p className="text-slate-500">We reply within 2 hours during Indian business hours.</p>
</div>
<div className="grid md:grid-cols-2 gap-12">
<div className="space-y-6">
<div className="bg-slate-50 p-6 rounded-xl">
<h3 className="font-medium text-slate-900 mb-2">Chat on WhatsApp</h3>
<p className="text-sm text-slate-500 mb-4">Fastest way to reach us.</p>
<a className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700" href="#">
<span className="iconify" data-icon="lucide:message-circle"></span> +91 98765 43210
                                </a>
</div>
<div className="bg-slate-50 p-6 rounded-xl">
<h3 className="font-medium text-slate-900 mb-2">Email Us</h3>
<p className="text-sm text-slate-500 mb-4">For partnership or support.</p>
<a className="inline-flex items-center gap-2 text-slate-600 font-medium hover:text-slate-900" href="#">
<span className="iconify" data-icon="lucide:mail"></span> hello@whatsgrow.in
                                </a>
</div>
</div>
<form className="space-y-4">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
<input className="w-full rounded-lg border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 text-sm p-3 border" placeholder="Your Name" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Mobile Number</label>
<input className="w-full rounded-lg border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 text-sm p-3 border" placeholder="+91" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
<textarea className="w-full rounded-lg border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 text-sm p-3 border" placeholder="How can we help?" rows="4"></textarea>
</div>
<button className="w-full bg-slate-900 text-white py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors" type="button">Send Message</button>
</form>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="text-lg font-semibold tracking-tight text-slate-900">WhatsGrow</span>
<p className="text-sm text-slate-500 mt-1">Helping Indian businesses grow on WhatsApp.</p>
</div>
<div className="flex gap-6 text-sm text-slate-500">
<button className="hover:text-slate-900" onclick="switchView('landing', 'faq')">FAQ</button>
<button className="hover:text-slate-900" onclick="switchView('landing', 'contact')">Contact</button>
<a className="hover:text-slate-900" href="#">Terms</a>
<a className="hover:text-slate-900" href="#">Privacy</a>
</div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-blue-600" href="#"><span className="iconify" data-icon="lucide:facebook"></span></a>
<a className="text-slate-400 hover:text-blue-400" href="#"><span className="iconify" data-icon="lucide:twitter"></span></a>
<a className="text-slate-400 hover:text-pink-600" href="#"><span className="iconify" data-icon="lucide:instagram"></span></a>
</div>
</div>
<div className="text-center mt-8 text-xs text-slate-400">
                    © 2024 WhatsGrow. All rights reserved. Not affiliated with WhatsApp Inc. or Meta.
                </div>
</footer>
</div>

<div className="app-view" id="view-login">
<section className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 w-full max-w-md">
<div className="text-center mb-8">
<div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
<span className="iconify" data-icon="lucide:message-circle" data-width="24"></span>
</div>
<h2 className="text-2xl font-semibold text-slate-900">Welcome Back</h2>
<p className="text-sm text-slate-500 mt-2">Login to manage your campaigns</p>
</div>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-700 uppercase mb-1">Mobile Number</label>
<div className="relative">
<span className="absolute left-3 top-3 text-slate-400 text-sm">+91</span>
<input className="w-full rounded-lg border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 text-sm py-2.5 pl-10 pr-3 border" placeholder="9876543210" type="tel"/>
</div>
</div>
<button className="w-full bg-slate-900 text-white py-2.5 rounded-lg font-medium hover:bg-slate-800 transition-colors" type="button">Get OTP</button>
</form>
<p className="text-center text-xs text-slate-400 mt-6">
                        Don't have an account? <button className="text-emerald-600 font-medium hover:underline" onclick="switchView('signup')">Sign up</button>
</p>
</div>
</section>
</div>

<div className="app-view" id="view-signup">
<section className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 w-full max-w-md">
<div className="text-center mb-8">
<h2 className="text-2xl font-semibold text-slate-900">Start Free Trial</h2>
<p className="text-sm text-slate-500 mt-2">No credit card required. 7 days free.</p>
</div>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-700 uppercase mb-1">Full Name</label>
<input className="w-full rounded-lg border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 text-sm p-2.5 border" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 uppercase mb-1">Business Name</label>
<input className="w-full rounded-lg border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 text-sm p-2.5 border" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 uppercase mb-1">Mobile Number</label>
<div className="relative">
<span className="absolute left-3 top-2.5 text-slate-400 text-sm">+91</span>
<input className="w-full rounded-lg border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 text-sm py-2.5 pl-10 pr-3 border" placeholder="9876543210" type="tel"/>
</div>
</div>
<button className="w-full bg-emerald-600 text-white py-2.5 rounded-lg font-medium hover:bg-emerald-700 transition-colors" type="button">Create Account</button>
</form>
<p className="text-center text-xs text-slate-400 mt-6">
                        Already have an account? <button className="text-emerald-600 font-medium hover:underline" onclick="switchView('login')">Login</button>
</p>
</div>
</section>
</div>
</div>



    </>
  );
}
