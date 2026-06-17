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
                    fontFamily: {
                        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
                    },
                    colors: {
                        card: '#F0F9FF',
                        primary: '#0EA5E9'
                    }
                }
            }
        }
    


        function toggleFAQ(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('[data-lucide]');
            const iconContainer = button.querySelector('.w-8.h-8');
            
            // Close all other FAQ items
            document.querySelectorAll('[onclick="toggleFAQ(this)"]').forEach(btn => {
                if (btn !== button) {
                    const otherContent = btn.nextElementSibling;
                    const otherIcon = btn.querySelector('[data-lucide]');
                    otherContent.classList.add('hidden');
                    otherIcon.setAttribute('data-lucide', 'plus');
                }
            });
            
            // Toggle current item
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.setAttribute('data-lucide', 'minus');
            } else {
                content.classList.add('hidden');
                icon.setAttribute('data-lucide', 'plus');
            }
            
            // Refresh lucide icons
            lucide.createIcons();
        }

        // Initialize Lucide icons
        document.addEventListener('DOMContentLoaded', function() {
            lucide.createIcons();
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
      

<section className="relative bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
<div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

<div className="lg:w-2/5 xl:w-1/3">
<div className="sticky top-8">
<div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
<svg className="lucide lucide-help-circle w-4 h-4" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
                            Support Center
                        </div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-slate-900">
                            Frequently Asked Questions
                        </h2>
<p className="text-slate-600 text-lg mb-8 leading-relaxed">
                            Can't find what you're looking for? Our support team is here to help you get the most out of FinanceFlow.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg px-6 py-3 font-medium transition-all duration-200 shadow-sm hover:shadow-md">
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
                                Live Chat Support
                            </button>
<button className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 rounded-lg px-6 py-3 font-medium transition-all duration-200">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                                Email Us
                            </button>
</div>
<div className="mt-8 p-4 bg-slate-50 rounded-lg border border-slate-200">
<div className="flex items-center gap-3 mb-2">
<svg className="lucide lucide-clock w-5 h-5 text-slate-600" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span className="font-medium text-slate-900">Support Hours</span>
</div>
<p className="text-sm text-slate-600">Monday - Friday: 8AM - 8PM EST</p>
<p className="text-sm text-slate-600">Weekends: 10AM - 6PM EST</p>
</div>
</div>
</div>

<div className="lg:w-3/5 xl:w-2/3">
<div className="space-y-4">

<div className="border border-slate-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
<button className="w-full flex items-center justify-between p-6 text-left group" onclick="toggleFAQ(this)" type="button">
<span className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors pr-4">How secure is my financial data with FinanceFlow?</span>
<div className="flex-shrink-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-200">
<svg className="lucide lucide-minus w-4 h-4" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
</button>
<div className="px-6 pb-6">
<p className="text-slate-600 leading-relaxed mb-4">Your security is our top priority. We use bank-level 256-bit SSL encryption to protect all data transmission and store your information using advanced encryption protocols. We're SOC 2 Type II certified and comply with PCI DSS standards.</p>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-medium">
<svg className="lucide lucide-shield-check w-3 h-3" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                                        Bank-level encryption
                                    </span>
<span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium">
<svg className="lucide lucide-award w-3 h-3" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
                                        SOC 2 Certified
                                    </span>
</div>
</div>
</div>

<div className="border border-slate-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
<button className="w-full flex items-center justify-between p-6 text-left group" onclick="toggleFAQ(this)" type="button">
<span className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors pr-4">What types of accounts can I connect to FinanceFlow?</span>
<div className="flex-shrink-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-200">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</button>
<div className="px-6 pb-6 hidden">
<p className="text-slate-600 leading-relaxed mb-4">FinanceFlow supports over 10,000 financial institutions including checking accounts, savings accounts, credit cards, investment accounts, loans, and mortgages. We work with major banks like Chase, Bank of America, Wells Fargo, and thousands of credit unions and regional banks.</p>
<ul className="text-slate-600 space-y-2 text-sm">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Checking &amp; Savings Accounts</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Credit Cards &amp; Lines of Credit</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Investment &amp; Retirement Accounts</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Loans &amp; Mortgages</li>
</ul>
</div>
</div>

<div className="border border-slate-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
<button className="w-full flex items-center justify-between p-6 text-left group" onclick="toggleFAQ(this)" type="button">
<span className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors pr-4">How does the AI-powered budgeting feature work?</span>
<div className="flex-shrink-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-200">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</button>
<div className="px-6 pb-6 hidden">
<p className="text-slate-600 leading-relaxed mb-4">Our AI analyzes your spending patterns, income fluctuations, and financial goals to create personalized budget recommendations. It automatically categorizes transactions, identifies spending trends, and sends proactive alerts when you're approaching budget limits.</p>
<div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
<h4 className="font-medium text-slate-900 mb-2 flex items-center gap-2">
<svg className="lucide lucide-brain w-4 h-4 text-primary" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
                                        Smart Features Include:
                                    </h4>
<ul className="text-sm text-slate-600 space-y-1">
<li>• Automatic transaction categorization</li>
<li>• Predictive spending alerts</li>
<li>• Goal-based savings recommendations</li>
<li>• Bill payment reminders</li>
</ul>
</div>
</div>
</div>

<div className="border border-slate-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
<button className="w-full flex items-center justify-between p-6 text-left group" onclick="toggleFAQ(this)" type="button">
<span className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors pr-4">Is there a mobile app available for iOS and Android?</span>
<div className="flex-shrink-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-200">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</button>
<div className="px-6 pb-6 hidden">
<p className="text-slate-600 leading-relaxed mb-4">Yes! Our mobile apps for iOS and Android offer full functionality including account management, bill pay, money transfers, and real-time notifications. Both apps feature biometric login, dark mode, and offline access to your recent transactions.</p>
<div className="flex flex-col sm:flex-row gap-3">
<div className="flex items-center gap-2 text-sm">
<svg className="lucide lucide-star w-4 h-4 text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-slate-600">4.8/5 on App Store</span>
</div>
<div className="flex items-center gap-2 text-sm">
<svg className="lucide lucide-star w-4 h-4 text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-slate-600">4.7/5 on Google Play</span>
</div>
</div>
</div>
</div>

<div className="border border-slate-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
<button className="w-full flex items-center justify-between p-6 text-left group" onclick="toggleFAQ(this)" type="button">
<span className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors pr-4">What are the fees for using FinanceFlow Premium?</span>
<div className="flex-shrink-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-200">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</button>
<div className="px-6 pb-6 hidden">
<p className="text-slate-600 leading-relaxed mb-4">FinanceFlow Basic is completely free with core features. Premium is $9.99/month or $99/year (save 17%) and includes advanced analytics, investment tracking, tax optimization tools, and priority support. We offer a 30-day free trial for Premium features.</p>
<div className="grid sm:grid-cols-2 gap-4">
<div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
<h4 className="font-medium text-slate-900 mb-2">Basic (Free)</h4>
<ul className="text-sm text-slate-600 space-y-1">
<li>• Account aggregation</li>
<li>• Basic budgeting</li>
<li>• Bill reminders</li>
</ul>
</div>
<div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
<h4 className="font-medium text-slate-900 mb-2">Premium ($9.99/mo)</h4>
<ul className="text-sm text-slate-600 space-y-1">
<li>• Everything in Basic</li>
<li>• Investment tracking</li>
<li>• Tax optimization</li>
<li>• Priority support</li>
</ul>
</div>
</div>
</div>
</div>

<div className="border border-slate-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
<button className="w-full flex items-center justify-between p-6 text-left group" onclick="toggleFAQ(this)" type="button">
<span className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors pr-4">Can I export my financial data or reports?</span>
<div className="flex-shrink-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-200">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</button>
<div className="px-6 pb-6 hidden">
<p className="text-slate-600 leading-relaxed mb-4">Absolutely! You can export your data in multiple formats including CSV, Excel, PDF, and QIF for tax preparation or external analysis. Premium users get additional export options and can schedule automated monthly reports.</p>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-medium">
<svg className="lucide lucide-file-text w-3 h-3" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                                        PDF Reports
                                    </span>
<span className="inline-flex items-center gap-1 bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-medium">
<svg className="lucide lucide-table w-3 h-3" data-lucide="table" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path></svg>
                                        Excel/CSV
                                    </span>
<span className="inline-flex items-center gap-1 bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-medium">
<svg className="lucide lucide-download w-3 h-3" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                                        QIF Format
                                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-slate-900 bg-grid overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800"></div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

<div className="lg:w-1/2 text-center lg:text-left">
<div className="inline-flex gap-2 bg-primary/20 text-primary-light text-sm font-medium text-zinc-300 rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 items-center">
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                        Join 250,000+ Users
                    </div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6">
                        Take control of your financial future today
                    </h2>
<p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                        Start your journey to financial freedom with intelligent budgeting, automated savings, and personalized insights powered by AI.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<button className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 rounded-lg px-8 py-4 font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5">
<svg className="lucide lucide-credit-card w-5 h-5" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
                            Start Free Trial
                        </button>
<button className="inline-flex items-center justify-center gap-2 border-2 border-slate-600 hover:border-slate-400 text-white hover:bg-slate-800 rounded-lg px-8 py-4 font-semibold text-lg transition-all duration-200">
<svg className="lucide lucide-play-circle w-5 h-5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                            Watch Demo
                        </button>
</div>
<div className="flex items-center justify-center lg:justify-start gap-6 mt-8 text-sm text-slate-400">
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle w-4 h-4 text-green-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                            No setup fees
                        </div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle w-4 h-4 text-green-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                            Cancel anytime
                        </div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle w-4 h-4 text-green-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                            Bank-level security
                        </div>
</div>
</div>

<div className="lg:w-1/2 flex justify-center lg:justify-end">
<div className="relative">
<div className="w-80 sm:w-96 h-56 sm:h-60 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 text-white p-8 flex flex-col justify-between shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
<svg className="lucide lucide-trending-up w-5 h-5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="font-bold text-xl">FinanceFlow</span>
</div>
<div className="flex items-center gap-1">
<div className="w-8 h-5 bg-white/30 rounded backdrop-blur-sm"></div>
<div className="w-8 h-5 bg-white/30 rounded backdrop-blur-sm"></div>
</div>
</div>
<div className="space-y-2">
<div className="w-12 h-8 bg-white/30 rounded backdrop-blur-sm"></div>
<div className="text-lg font-mono tracking-wider">•••• •••• •••• 8429</div>
</div>
<div className="flex items-end justify-between">
<div>
<p className="text-xs uppercase tracking-wide opacity-80">Cardholder</p>
<p className="font-semibold text-lg">Alexandra Chen</p>
</div>
<div className="text-right">
<p className="text-xs uppercase tracking-wide opacity-80">Expires</p>
<p className="font-semibold">12/28</p>
</div>
<div className="font-bold text-2xl">VISA</div>
</div>
</div>

<div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
<div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
