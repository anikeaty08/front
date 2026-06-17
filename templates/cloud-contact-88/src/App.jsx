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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
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
      

<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] bg-[#D1FAE5] rounded-full mix-blend-multiply filter blur-[120px] opacity-60 z-0 pointer-events-none"></div>
<div className="absolute top-[20%] right-[-10%] w-[40%] h-[50%] bg-[#E9F0EB] rounded-full mix-blend-multiply filter blur-[100px] opacity-70 z-0 pointer-events-none"></div>
<div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-[#FEE2E2] rounded-full mix-blend-multiply filter blur-[150px] opacity-50 z-0 pointer-events-none"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50 bg-white/60 backdrop-blur-xl border border-white/60 rounded-2xl px-6 py-4 flex justify-between items-center shadow-lg shadow-[#1A202C]/5">
<div className="flex items-center gap-2">
<div className="w-10 h-10 bg-[#2D4732] rounded-xl flex items-center justify-center text-white shadow-sm">
<i data-lucide="zap"></i>
</div>
<span className="text-[#2D4732] font-semibold text-2xl tracking-tight">Amplify</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-[#364767] hover:text-[#1A202C] font-medium text-base transition-colors" href="#">Platform</a>
<a className="text-[#364767] hover:text-[#1A202C] font-medium text-base transition-colors" href="#">Solutions</a>
<a className="text-[#364767] hover:text-[#1A202C] font-medium text-base transition-colors" href="#">Integrations</a>
<a className="text-[#364767] hover:text-[#1A202C] font-medium text-base transition-colors" href="#">Resources</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-[#364767] hover:text-[#1A202C] font-medium text-base transition-colors" href="#">Sign In</a>
<a className="bg-[#F58220] hover:bg-[#E57A1E] text-white px-6 py-2.5 rounded-full font-medium text-base transition-all shadow-md shadow-[#F58220]/20 flex items-center gap-2" href="#">
                Get Started
            </a>
</div>
</nav>

<header className="relative z-10 pt-48 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-center text-center">

<div className="bg-white/40 backdrop-blur-md border border-white/60 text-[#2D4732] px-5 py-2 rounded-full text-sm font-medium mb-8 flex items-center gap-2 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-[#38A169]"></span>
            AWS Connect Advanced Partner
        </div>

<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#1A202C] mb-8 max-w-4xl leading-[1.1]">
            Supercharge your contact center with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D4732] to-[#38A169]">AWS Connect</span>
</h1>

<p className="text-xl md:text-2xl text-[#364767] mb-12 max-w-2xl font-normal leading-relaxed">
            Amplify delivers cutting-edge, omnichannel customer experiences. Seamlessly scale, integrate AI, and transform your support operations instantly.
        </p>

<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="bg-[#1A202C] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#2D4732] transition-all flex items-center gap-2 shadow-xl shadow-[#1A202C]/10 w-full sm:w-auto justify-center">
                Start your free trial
                <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<button className="bg-white/30 backdrop-blur-md border border-[#A0A0A0]/30 text-[#1A202C] px-8 py-4 rounded-full font-medium text-lg hover:bg-white/50 transition-all w-full sm:w-auto justify-center">
                Book a demo
            </button>
</div>

<div className="relative w-full max-w-5xl mx-auto mt-24">

<div className="absolute inset-0 bg-gradient-to-b from-[#38A169]/20 to-transparent blur-3xl -z-10 rounded-[3rem]"></div>
<div className="bg-white/30 backdrop-blur-2xl border border-white/60 rounded-[2rem] p-3 shadow-2xl shadow-[#1A202C]/5">
<div className="bg-white/50 border border-white/60 rounded-2xl h-[450px] flex overflow-hidden backdrop-blur-3xl">

<div className="w-64 border-r border-[#DEDEDE]/40 p-6 flex flex-col gap-6 hidden md:flex bg-white/20">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 bg-[#2D4732] rounded-lg flex items-center justify-center text-white">
<i className="w-4 h-4" data-lucide="layers"></i>
</div>
<div className="h-5 w-24 bg-[#A3B8A8]/40 rounded-md"></div>
</div>
<div className="flex flex-col gap-4">
<div className="h-8 w-full bg-[#E9F0EB] rounded-lg border border-white/50"></div>
<div className="h-8 w-4/5 bg-white/30 rounded-lg"></div>
<div className="h-8 w-5/6 bg-white/30 rounded-lg"></div>
<div className="h-8 w-3/4 bg-white/30 rounded-lg"></div>
</div>
</div>

<div className="flex-1 p-8 flex flex-col gap-8">

<div className="flex justify-between items-center">
<div className="h-8 w-64 bg-[#E9F0EB] rounded-lg border border-white/50"></div>
<div className="flex gap-3">
<div className="h-10 w-10 bg-white/50 rounded-full border border-white/60"></div>
<div className="h-10 w-10 bg-[#F58220]/20 rounded-full border border-[#F58220]/30 flex items-center justify-center text-[#F58220]">
<i className="w-5 h-5" data-lucide="bell"></i>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-6">
<div className="h-36 bg-[#D1FAE5]/50 rounded-2xl border border-white/60 p-5 flex flex-col justify-between">
<div className="w-10 h-10 bg-[#38A169]/20 rounded-xl flex items-center justify-center text-[#38A169]">
<i className="w-5 h-5" data-lucide="phone-call"></i>
</div>
<div>
<div className="h-4 w-16 bg-[#38A169]/30 rounded mb-2"></div>
<div className="h-8 w-24 bg-[#38A169]/60 rounded"></div>
</div>
</div>
<div className="h-36 bg-[#FDF0E5]/60 rounded-2xl border border-white/60 p-5 flex flex-col justify-between">
<div className="w-10 h-10 bg-[#F58220]/20 rounded-xl flex items-center justify-center text-[#F58220]">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<div>
<div className="h-4 w-16 bg-[#F58220]/30 rounded mb-2"></div>
<div className="h-8 w-24 bg-[#F58220]/60 rounded"></div>
</div>
</div>
<div className="h-36 bg-white/40 rounded-2xl border border-white/60 p-5 flex flex-col justify-between">
<div className="w-10 h-10 bg-[#C1C1C1]/20 rounded-xl flex items-center justify-center text-[#1A202C]">
<i className="w-5 h-5" data-lucide="clock"></i>
</div>
<div>
<div className="h-4 w-16 bg-[#C1C1C1]/40 rounded mb-2"></div>
<div className="h-8 w-24 bg-[#A0A0A0]/50 rounded"></div>
</div>
</div>
</div>

<div className="flex-1 bg-white/30 rounded-2xl border border-white/60 p-6 flex items-end gap-4 relative">
<div className="absolute top-6 left-6 h-5 w-32 bg-[#A3B8A8]/30 rounded"></div>
<div className="w-full bg-[#A3B8A8]/30 rounded-t-xl h-[30%] hover:bg-[#A3B8A8]/50 transition-colors"></div>
<div className="w-full bg-[#A3B8A8]/30 rounded-t-xl h-[50%] hover:bg-[#A3B8A8]/50 transition-colors"></div>
<div className="w-full bg-[#A3B8A8]/30 rounded-t-xl h-[40%] hover:bg-[#A3B8A8]/50 transition-colors"></div>
<div className="w-full bg-[#38A169]/50 rounded-t-xl h-[85%] relative border-t border-[#38A169]">
<div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#1A202C] text-white text-sm py-1.5 px-3 rounded-lg shadow-lg whitespace-nowrap">
                                    Peak Volume
                                </div>
</div>
<div className="w-full bg-[#A3B8A8]/30 rounded-t-xl h-[60%] hover:bg-[#A3B8A8]/50 transition-colors"></div>
<div className="w-full bg-[#A3B8A8]/30 rounded-t-xl h-[45%] hover:bg-[#A3B8A8]/50 transition-colors"></div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-32 px-6 relative z-10 max-w-7xl mx-auto">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1A202C] mb-6">
                Everything you need to scale support
            </h2>
<p className="text-xl text-[#364767] max-w-2xl mx-auto">
                Built natively on AWS, Amplify provides the tools to manage inbound, outbound, and digital channels effortlessly.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white/40 backdrop-blur-xl border border-white/60 p-10 rounded-[2rem] shadow-sm hover:shadow-lg hover:shadow-[#2D4732]/5 transition-all">
<div className="w-16 h-16 bg-[#D1FAE5] rounded-2xl flex items-center justify-center text-[#38A169] mb-8 border border-white">
<i className="w-8 h-8" data-lucide="git-merge"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-[#1A202C] mb-4">Omnichannel Routing</h3>
<p className="text-lg text-[#364767] leading-relaxed">
                    Intelligently route voice, chat, and tasks to the right agent based on skill, availability, and sentiment in real-time.
                </p>
</div>

<div className="bg-white/40 backdrop-blur-xl border border-white/60 p-10 rounded-[2rem] shadow-sm hover:shadow-lg hover:shadow-[#2D4732]/5 transition-all">
<div className="w-16 h-16 bg-[#FDF0E5] rounded-2xl flex items-center justify-center text-[#F58220] mb-8 border border-white">
<i className="w-8 h-8" data-lucide="bot"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-[#1A202C] mb-4">Conversational AI</h3>
<p className="text-lg text-[#364767] leading-relaxed">
                    Deploy Amazon Lex chatbots and IVRs instantly to automate routine inquiries and reduce average handle times.
                </p>
</div>

<div className="bg-white/40 backdrop-blur-xl border border-white/60 p-10 rounded-[2rem] shadow-sm hover:shadow-lg hover:shadow-[#2D4732]/5 transition-all">
<div className="w-16 h-16 bg-[#E9F0EB] rounded-2xl flex items-center justify-center text-[#2D4732] mb-8 border border-white">
<i className="w-8 h-8" data-lucide="bar-chart-3"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-[#1A202C] mb-4">Advanced Analytics</h3>
<p className="text-lg text-[#364767] leading-relaxed">
                    Gain deep insights into customer interactions with built-in speech analytics, sentiment tracking, and custom dashboards.
                </p>
</div>

<div className="bg-white/40 backdrop-blur-xl border border-white/60 p-10 rounded-[2rem] shadow-sm hover:shadow-lg hover:shadow-[#2D4732]/5 transition-all">
<div className="w-16 h-16 bg-[#FEE2E2] rounded-2xl flex items-center justify-center text-[#E53E3E] mb-8 border border-white">
<i className="w-8 h-8" data-lucide="shield-check"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-[#1A202C] mb-4">Enterprise Security</h3>
<p className="text-lg text-[#364767] leading-relaxed">
                    Rely on AWS's secure infrastructure with end-to-end encryption, compliance certifications, and granular access controls.
                </p>
</div>

<div className="bg-white/40 backdrop-blur-xl border border-white/60 p-10 rounded-[2rem] shadow-sm hover:shadow-lg hover:shadow-[#2D4732]/5 transition-all lg:col-span-2">
<div className="w-16 h-16 bg-white/60 rounded-2xl flex items-center justify-center text-[#1A202C] mb-8 border border-[#DEDEDE]/50">
<i className="w-8 h-8" data-lucide="blocks"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-[#1A202C] mb-4">Seamless CRM Integration</h3>
<p className="text-lg text-[#364767] leading-relaxed max-w-3xl">
                    Connect out-of-the-box with Salesforce, Zendesk, ServiceNow, and custom applications. Push and pull data dynamically to give your agents full context before they even say "Hello."
                </p>
</div>
</div>
</section>

<section className="my-20 relative max-w-7xl mx-auto px-6">
<div className="bg-[#1A202C] rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">

<div className="absolute top-[-20%] right-[-10%] w-[50%] h-[80%] bg-[#2D4732] rounded-full mix-blend-screen filter blur-[100px] opacity-80 z-0"></div>
<div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[60%] bg-[#364767] rounded-full mix-blend-screen filter blur-[100px] opacity-60 z-0"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
<div className="flex-1">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                        Ready to elevate your customer experience?
                    </h2>
<p className="text-xl text-[#A3B8A8] mb-10 leading-relaxed">
                        Join hundreds of forward-thinking companies running their contact centers on Amplify's managed AWS Connect platform.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-[#F58220] hover:bg-[#E57A1E] text-white px-8 py-4 rounded-full font-medium text-lg transition-all shadow-lg shadow-[#F58220]/20 flex items-center justify-center gap-2">
                            Get a personalized demo
                        </button>
</div>
</div>

<div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
<div className="text-4xl font-semibold tracking-tight text-white mb-2">45%</div>
<div className="text-lg text-[#A3B8A8]">Reduction in wait times</div>
</div>
<div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
<div className="text-4xl font-semibold tracking-tight text-white mb-2">99.99%</div>
<div className="text-lg text-[#A3B8A8]">Platform uptime SLA</div>
</div>
<div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl sm:col-span-2 flex items-center justify-between">
<div>
<div className="text-4xl font-semibold tracking-tight text-white mb-2">Zero</div>
<div className="text-lg text-[#A3B8A8]">Hardware maintenance</div>
</div>
<div className="w-16 h-16 bg-[#2D4732]/50 rounded-2xl flex items-center justify-center text-[#D1FAE5] border border-[#38A169]/30">
<i className="w-8 h-8" data-lucide="cloud"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-[#DEDEDE]/60 bg-white/40 backdrop-blur-md pt-20 pb-10 px-6 mt-32 relative z-10">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1 flex flex-col gap-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-[#2D4732] rounded-lg flex items-center justify-center text-white">
<i className="w-4 h-4" data-lucide="zap"></i>
</div>
<span className="text-[#2D4732] font-semibold text-xl tracking-tight">Amplify</span>
</div>
<p className="text-base text-[#364767] leading-relaxed">
                    The next generation of cloud contact centers powered by AWS Connect.
                </p>
</div>
<div>
<h4 className="font-semibold text-[#1A202C] text-lg mb-6">Product</h4>
<ul className="flex flex-col gap-4">
<li><a className="text-base text-[#364767] hover:text-[#F58220] transition-colors" href="#">Features</a></li>
<li><a className="text-base text-[#364767] hover:text-[#F58220] transition-colors" href="#">Integrations</a></li>
<li><a className="text-base text-[#364767] hover:text-[#F58220] transition-colors" href="#">Pricing</a></li>
<li><a className="text-base text-[#364767] hover:text-[#F58220] transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-[#1A202C] text-lg mb-6">Resources</h4>
<ul className="flex flex-col gap-4">
<li><a className="text-base text-[#364767] hover:text-[#F58220] transition-colors" href="#">Documentation</a></li>
<li><a className="text-base text-[#364767] hover:text-[#F58220] transition-colors" href="#">Blog</a></li>
<li><a className="text-base text-[#364767] hover:text-[#F58220] transition-colors" href="#">AWS Partnership</a></li>
<li><a className="text-base text-[#364767] hover:text-[#F58220] transition-colors" href="#">Support</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-[#1A202C] text-lg mb-6">Company</h4>
<ul className="flex flex-col gap-4">
<li><a className="text-base text-[#364767] hover:text-[#F58220] transition-colors" href="#">About Us</a></li>
<li><a className="text-base text-[#364767] hover:text-[#F58220] transition-colors" href="#">Careers</a></li>
<li><a className="text-base text-[#364767] hover:text-[#F58220] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-base text-[#364767] hover:text-[#F58220] transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-[#DEDEDE]/60 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-base text-[#A0A0A0]">
                © 2024 Amplify Tech Inc. All rights reserved.
            </p>
<div className="flex gap-6 text-[#A0A0A0]">
<a className="hover:text-[#1A202C] transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="hover:text-[#1A202C] transition-colors" href="#"><i className="w-5 h-5" data-lucide="github"></i></a>
<a className="hover:text-[#1A202C] transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
</footer>



    </>
  );
}
