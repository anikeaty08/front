import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Initialize Lucide Icons
      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 bg-white/80 backdrop-blur-md border-b border-slate-100 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
<i className="text-white w-5 h-5" data-lucide="bot" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-semibold tracking-tight">FrontDesk AI</span>
</div>
<nav className="hidden md:flex gap-8">
<a className="text-base text-slate-600 hover:text-slate-900 transition-colors" href="#features">
            Features
          </a>
<a className="text-base text-slate-600 hover:text-slate-900 transition-colors" href="#how-it-works">
            How it Works
          </a>
<a className="text-base text-slate-600 hover:text-slate-900 transition-colors" href="#pricing">
            Pricing
          </a>
</nav>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors" href="#demo">
          Book Demo
        </a>
</div>
</header>

<section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative overflow-hidden">
<div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[100vw] -z-20 overflow-hidden">
<img alt="Hero Background" className="w-full h-full object-cover opacity-[0.03] pointer-events-none" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
</div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-8">
<span className="flex w-2 h-2 rounded-full bg-blue-600"></span>
<span className="text-sm font-medium text-slate-700">Available 24/7</span>
</div>
<h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tighter text-slate-900 mb-6 leading-[1.1] text-balance">
        Stop Missing Calls and
        <br className="hidden sm:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 drop-shadow-sm">
          Losing Bookings.
        </span>
</h1>
<p className="text-lg sm:text-xl text-slate-500 mb-10 max-w-2xl mx-auto text-balance">
        AI Voice, SMS, and Webchat replies for beauty professionals, med spas,
        and clinics. Never miss a client inquiry again with an AI front desk
        that works 24/7.
      </p>
<div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
<a className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-slate-900 hover:bg-slate-800 transition-all hover:scale-[1.02]" href="#demo">
          Book a Free Demo
        </a>
<a className="inline-flex justify-center items-center gap-2 px-8 py-3.5 border border-slate-200 text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 transition-all" href="#examples">
<i className="w-5 h-5" data-lucide="play-circle" strokeWidth="1.5"></i>
          Hear Examples
        </a>
</div>

<div className="grid grid-cols-12 gap-4 max-w-5xl mx-auto mt-12">
<div className="col-span-12 md:col-span-8 relative rounded-[2rem] overflow-hidden min-h-[400px] shadow-2xl shadow-slate-200/50 group">
<img alt="Med Spa Reception" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
<div className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce hover:animate-none cursor-pointer border border-white/20">
<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center relative">
<span className="absolute inset-0 rounded-full border-2 border-blue-600 animate-ping opacity-20"></span>
<i className="w-5 h-5 text-blue-600" data-lucide="phone-call"></i>
</div>
<div>
<p className="text-sm font-semibold text-slate-900 tracking-tight">
                  AI Front Desk
                </p>
<p className="text-xs text-slate-500">
                  Processing incoming call...
                </p>
</div>
</div>
</div>
</div>
<div className="col-span-12 md:col-span-4 flex flex-col gap-4">
<div className="relative rounded-[2rem] overflow-hidden flex-1 min-h-[200px] shadow-lg group">
<img alt="Aesthetic Clinic Treatment" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-slate-900/20"></div>
</div>
<a className="relative rounded-[2rem] overflow-hidden flex-1 min-h-[160px] shadow-lg bg-slate-900 p-8 flex flex-col justify-end group hover:bg-slate-800 transition-colors" href="#examples">
<div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-white ml-1" data-lucide="play"></i>
</div>
<p className="text-white font-medium text-xl leading-tight tracking-tight">
              Hear it in
              <br/>
              action
            </p>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden" id="features">
<img alt="Salon Background" className="absolute inset-0 w-full h-full object-cover opacity-[0.03] pointer-events-none grayscale mix-blend-multiply" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
              If you're tired of losing clients to...
            </h2>
<ul className="space-y-5 mb-8">
<li className="flex items-center gap-4 text-lg text-slate-600">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
<i className="w-4 h-4 text-red-600" data-lucide="x" strokeWidth="1.5"></i>
</div>
                Missed phone calls during busy hours
              </li>
<li className="flex items-center gap-4 text-lg text-slate-600">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
<i className="w-4 h-4 text-red-600" data-lucide="x" strokeWidth="1.5"></i>
</div>
                Unanswered text messages
              </li>
<li className="flex items-center gap-4 text-lg text-slate-600">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
<i className="w-4 h-4 text-red-600" data-lucide="x" strokeWidth="1.5"></i>
</div>
                Ignored Instagram &amp; Facebook DMs
              </li>
<li className="flex items-center gap-4 text-lg text-slate-600">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
<i className="w-4 h-4 text-red-600" data-lucide="x" strokeWidth="1.5"></i>
</div>
                Slow follow-ups leading to lost revenue
              </li>
</ul>
<div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
<p className="text-lg text-slate-800 leading-relaxed font-medium">
                We build a done-for-you AI front desk system that instantly
                answers calls, SMS, and DMs, helping beauty businesses respond
                faster and book more—24/7.
              </p>
</div>
</div>
<div className="grid gap-6 relative">
<div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="relative h-72 rounded-[2rem] overflow-hidden shadow-2xl mb-4 group">
<img alt="Salon Professional" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/30"></div>
</div>
<div className="bg-white/90 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-100 shadow-xl relative -mt-24 mx-4 sm:mx-8 z-10" id="examples">
<h3 className="text-2xl font-semibold tracking-tight mb-6">
                Hear Real AI Call Examples
              </h3>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-sm">
<i className="w-5 h-5 text-slate-700 ml-0.5" data-lucide="play" strokeWidth="1.5"></i>
</div>
<div className="flex-1">
<p className="text-base font-medium text-slate-900 tracking-tight">
                      Booking an Appointment
                    </p>
<p className="text-sm text-slate-500">01:45 • AI Voice</p>
</div>
<div className="w-full max-w-[80px] h-1.5 bg-slate-200 rounded-full overflow-hidden">
<div className="w-1/3 h-full bg-blue-600"></div>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-sm">
<i className="w-5 h-5 text-slate-700 ml-0.5" data-lucide="play" strokeWidth="1.5"></i>
</div>
<div className="flex-1">
<p className="text-base font-medium text-slate-900 tracking-tight">
                      Answering FAQs
                    </p>
<p className="text-sm text-slate-500">00:58 • AI Voice</p>
</div>
<div className="w-full max-w-[80px] h-1.5 bg-slate-200 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
<div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[100vw] -z-10 overflow-hidden bg-white">
<img alt="Data Background" className="w-full h-full object-cover opacity-[0.03] pointer-events-none grayscale" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
</div>
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
          Missed Calls Reduced by 95%
        </h2>
<p className="text-lg text-slate-500">
          Real results from integrating our AI Front Desk system.
        </p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col items-center text-center relative overflow-hidden opacity-90 grayscale-[0.2]">
<div className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">
            Before
          </div>
<div className="relative w-36 h-36 mb-6">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 36 36">
<path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
<path className="text-red-400" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="61, 100" strokeLinecap="round" strokeWidth="3"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<span className="text-3xl font-bold text-slate-700 tracking-tight">
                61%
              </span>
</div>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2 text-slate-700">
            Calls Missed
          </h3>
<p className="text-base text-slate-500">
            Over half of potential client inquiries went unanswered.
          </p>
</div>

<div className="bg-gradient-to-b from-blue-50 to-white p-8 rounded-[2rem] border border-blue-200 shadow-xl shadow-blue-100/50 flex flex-col items-center text-center relative overflow-hidden group">
<div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
<div className="absolute -right-12 -top-12 w-40 h-40 bg-blue-200 blur-3xl rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500 pointer-events-none"></div>
<div className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-6 relative z-10">
            After AI Integration
          </div>
<div className="relative w-36 h-36 mb-6 z-10">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 36 36">
<path className="text-blue-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
<path className="text-blue-600 drop-shadow-md" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="97, 100" strokeLinecap="round" strokeWidth="3"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<span className="text-3xl font-bold text-slate-900 tracking-tight">
                97%
              </span>
</div>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2 relative z-10">
            Calls Answered Instantly
          </h3>
<p className="text-base text-slate-600 relative z-10">
            Capturing every booking opportunity immediately.
          </p>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden" id="how-it-works">
<img alt="Workflow Background" className="absolute inset-0 w-full h-full object-cover opacity-[0.03] pointer-events-none grayscale mix-blend-multiply" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            How It Works
          </h2>
<p className="text-lg text-slate-500 max-w-2xl mx-auto">
            A seamless onboarding process to get your AI front desk running in
            no time.
          </p>
</div>
<div className="relative w-full h-48 sm:h-64 rounded-[2rem] overflow-hidden mb-16 shadow-xl">
<img alt="Customer Service Automation" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>
<div className="absolute inset-0 flex items-center justify-center text-center px-4">
<p className="text-white text-xl sm:text-2xl font-medium tracking-tight max-w-lg text-balance drop-shadow-md">
              Automate your front desk seamlessly without losing the personal
              touch.
            </p>
</div>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="relative">
<div className="hidden lg:block absolute top-8 left-1/2 w-full h-px bg-slate-200"></div>
<div className="relative bg-white w-16 h-16 rounded-2xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm mx-auto lg:mx-0 z-10">
<span className="text-lg font-semibold text-slate-900">1</span>
</div>
<div className="text-center lg:text-left">
<h3 className="text-lg font-semibold tracking-tight mb-3">
                Discovery
              </h3>
<p className="text-base text-slate-500">
                We learn your website, service list, FAQs, and key business
                details.
              </p>
</div>
</div>

<div className="relative">
<div className="hidden lg:block absolute top-8 left-1/2 w-full h-px bg-slate-200"></div>
<div className="relative bg-white w-16 h-16 rounded-2xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm mx-auto lg:mx-0 z-10">
<span className="text-lg font-semibold text-slate-900">2</span>
</div>
<div className="text-center lg:text-left">
<h3 className="text-lg font-semibold tracking-tight mb-3">Build</h3>
<p className="text-base text-slate-500">
                We custom build your AI voice, SMS, and DM reply system.
              </p>
</div>
</div>

<div className="relative">
<div className="hidden lg:block absolute top-8 left-1/2 w-full h-px bg-slate-200"></div>
<div className="relative bg-white w-16 h-16 rounded-2xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm mx-auto lg:mx-0 z-10">
<span className="text-lg font-semibold text-slate-900">3</span>
</div>
<div className="text-center lg:text-left">
<h3 className="text-lg font-semibold tracking-tight mb-3">Connect</h3>
<p className="text-base text-slate-500">
                We connect your calendar, CRM, and communication flows.
              </p>
</div>
</div>

<div className="relative">
<div className="relative bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm mx-auto lg:mx-0 z-10 text-white">
<i className="w-6 h-6" data-lucide="check" strokeWidth="1.5"></i>
</div>
<div className="text-center lg:text-left">
<h3 className="text-lg font-semibold tracking-tight mb-3">Go Live</h3>
<p className="text-base text-slate-500">
                Your system goes live and starts responding and booking 24/7.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative" id="pricing">
<div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[100vw] -z-10 overflow-hidden bg-white">
<img alt="Pricing Background" className="w-full h-full object-cover opacity-[0.03] pointer-events-none grayscale" src="https://images.unsplash.com/photo-1556741533-6e4a60b98f52?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
</div>
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
          Simple Setup Packages
        </h2>
<p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Choose the tier that fits your business size. Transparent pricing, no
          surprises.
        </p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
<h3 className="text-xl font-semibold tracking-tight mb-2">
            Solo Provider
          </h3>
<p className="text-base text-slate-500 mb-6">
            Perfect for independent professionals.
          </p>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight">$X</span>
<span className="text-base text-slate-500">/mo</span>
<p className="text-sm text-slate-500 mt-1">+$X setup fee</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-base text-slate-600">
<i className="w-5 h-5 text-slate-900 shrink-0" data-lucide="check" strokeWidth="1.5"></i>
              AI voice, SMS, Webchat
            </li>
<li className="flex items-start gap-3 text-base text-slate-600">
<i className="w-5 h-5 text-slate-900 shrink-0" data-lucide="check" strokeWidth="1.5"></i>
              Standard Calendar Integration
            </li>
<li className="flex items-start gap-3 text-base text-slate-600">
<i className="w-5 h-5 text-slate-900 shrink-0" data-lucide="check" strokeWidth="1.5"></i>
              Basic FAQs
            </li>
</ul>
<a className="block w-full py-3 px-4 text-center rounded-full border border-slate-200 text-slate-900 font-medium hover:bg-slate-50 transition-colors" href="#">
            Book Call
          </a>
</div>

<div className="bg-slate-900 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative transform md:-translate-y-4 overflow-hidden group">
<div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-600/20 blur-3xl rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
<div className="absolute top-0 inset-x-0 flex justify-center -mt-3">
<span className="bg-white text-slate-900 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">
            Team 2-4
          </h3>
<p className="text-base text-slate-400 mb-6">
            For growing clinics and med spas.
          </p>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight text-white">
              $X
            </span>
<span className="text-base text-slate-400">/mo</span>
<p className="text-sm text-slate-400 mt-1">+$X setup fee</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-base text-slate-300">
<i className="w-5 h-5 text-white shrink-0" data-lucide="check" strokeWidth="1.5"></i>
              Everything in Solo
            </li>
<li className="flex items-start gap-3 text-base text-slate-300">
<i className="w-5 h-5 text-white shrink-0" data-lucide="check" strokeWidth="1.5"></i>
              Multi-calendar Integration
            </li>
<li className="flex items-start gap-3 text-base text-slate-300">
<i className="w-5 h-5 text-white shrink-0" data-lucide="check" strokeWidth="1.5"></i>
              Advanced custom flows
            </li>
<li className="flex items-start gap-3 text-base text-slate-300">
<i className="w-5 h-5 text-white shrink-0" data-lucide="check" strokeWidth="1.5"></i>
              Priority Support
            </li>
</ul>
<a className="block w-full py-3 px-4 text-center rounded-full bg-white text-slate-900 font-medium hover:bg-slate-50 transition-colors" href="#">
            Book Call
          </a>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
<h3 className="text-xl font-semibold tracking-tight mb-2">Team 4+</h3>
<p className="text-base text-slate-500 mb-6">Enterprise level systems.</p>
<div className="mb-6">
<span className="text-2xl font-semibold tracking-tight">
              Custom Pricing
            </span>
<p className="text-sm text-white mt-1 opacity-0">spacer</p>

</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-base text-slate-600">
<i className="w-5 h-5 text-slate-900 shrink-0" data-lucide="check" strokeWidth="1.5"></i>
              Custom Voice Cloning
            </li>
<li className="flex items-start gap-3 text-base text-slate-600">
<i className="w-5 h-5 text-slate-900 shrink-0" data-lucide="check" strokeWidth="1.5"></i>
              Complex Integrations
            </li>
<li className="flex items-start gap-3 text-base text-slate-600">
<i className="w-5 h-5 text-slate-900 shrink-0" data-lucide="check" strokeWidth="1.5"></i>
              Dedicated Account Manager
            </li>
</ul>
<a className="block w-full py-3 px-4 text-center rounded-full border border-slate-200 text-slate-900 font-medium hover:bg-slate-50 transition-colors" href="#">
            Contact Us
          </a>
</div>
</div>

<div className="mt-16 max-w-3xl mx-auto border-t border-slate-200 pt-12">
<h4 className="text-center text-sm font-semibold tracking-widest text-slate-500 uppercase mb-8">
          Available Add-ons
        </h4>
<div className="grid sm:grid-cols-2 gap-4">
<div className="p-4 rounded-xl border border-slate-200 flex items-center justify-between bg-slate-50">
<div>
<p className="font-medium text-slate-900">Lead Catch Add-On</p>
<p className="text-sm text-slate-500">Capture forms &amp; webhooks</p>
</div>
<span className="font-semibold">+$X</span>
</div>
<div className="p-4 rounded-xl border border-slate-200 flex items-center justify-between bg-slate-50">
<div>
<p className="font-medium text-slate-900">Follow Up Add-On</p>
<p className="text-sm text-slate-500">
                Automated multi-day sequences
              </p>
</div>
<span className="font-semibold">+$X</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
<img alt="Testimonials Background" className="absolute inset-0 w-full h-full object-cover opacity-[0.04] pointer-events-none grayscale mix-blend-multiply" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-16 text-center">
          Trusted by Beauty Professionals
        </h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex gap-1 mb-4">
<i className="w-4 h-4 fill-slate-900 text-slate-900" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-slate-900 text-slate-900" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-slate-900 text-slate-900" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-slate-900 text-slate-900" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-slate-900 text-slate-900" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-slate-700 mb-6 font-medium">
              "This system has completely transformed my booking process. I wake
              up to new appointments every morning without lifting a finger."
            </p>
<div className="flex items-center gap-3">
<img alt="Sarah J." className="w-12 h-12 rounded-full object-cover shadow-sm ring-2 ring-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
<div>
<p className="text-base font-semibold text-slate-900">Sarah J.</p>
<p className="text-sm text-slate-500">Med Spa Owner</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex gap-1 mb-4">
<i className="w-4 h-4 fill-slate-900 text-slate-900" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-slate-900 text-slate-900" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-slate-900 text-slate-900" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-slate-900 text-slate-900" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-slate-900 text-slate-900" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-slate-700 mb-6 font-medium">
              "My clients love that they can get answers to their questions
              instantly, 24/7. It's saved me hours of administrative work each
              week."
            </p>
<div className="flex items-center gap-3">
<img alt="Amanda R." className="w-12 h-12 rounded-full object-cover shadow-sm ring-2 ring-white" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
<div>
<p className="text-base font-semibold text-slate-900">Amanda R.</p>
<p className="text-sm text-slate-500">Aesthetician</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex gap-1 mb-4">
<i className="w-4 h-4 fill-slate-900 text-slate-900" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-slate-900 text-slate-900" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-slate-900 text-slate-900" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-slate-900 text-slate-900" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-slate-900 text-slate-900" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-slate-700 mb-6 font-medium">
              "Before this, I was losing money on missed calls while with
              clients. Now, the AI handles it seamlessly. Best investment for my
              clinic."
            </p>
<div className="flex items-center gap-3">
<img alt="Dr. Michael C." className="w-12 h-12 rounded-full object-cover shadow-sm ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
<div>
<p className="text-base font-semibold text-slate-900">
                  Dr. Michael C.
                </p>
<p className="text-sm text-slate-500">Clinic Director</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto relative">
<div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[100vw] -z-10 overflow-hidden bg-white">
<img alt="FAQ Background" className="w-full h-full object-cover opacity-[0.03] pointer-events-none grayscale" src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
</div>
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
          Frequently Asked Questions
        </h2>
</div>
<div className="space-y-4">
<details className="group bg-white border border-slate-200 rounded-xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-medium">
<h2 className="text-lg">
              Does it integrate with my current booking system?
            </h2>
<span className="shrink-0 rounded-full bg-slate-50 p-1.5 text-slate-900 sm:p-3 group-open:-rotate-180 transition-transform">
<i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="px-6 pb-6 text-slate-600 text-base leading-relaxed">
            Yes, we integrate with most major calendar and CRM systems used by
            beauty professionals and med spas.
          </div>
</details>
<details className="group bg-white border border-slate-200 rounded-xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-medium">
<h2 className="text-lg">Does the AI voice sound robotic?</h2>
<span className="shrink-0 rounded-full bg-slate-50 p-1.5 text-slate-900 sm:p-3 group-open:-rotate-180 transition-transform">
<i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="px-6 pb-6 text-slate-600 text-base leading-relaxed">
            No, we use state-of-the-art conversational AI that sounds incredibly
            natural and human-like. Listen to our examples above.
          </div>
</details>
<details className="group bg-white border border-slate-200 rounded-xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-medium">
<h2 className="text-lg">
              What happens if the AI doesn't know the answer?
            </h2>
<span className="shrink-0 rounded-full bg-slate-50 p-1.5 text-slate-900 sm:p-3 group-open:-rotate-180 transition-transform">
<i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="px-6 pb-6 text-slate-600 text-base leading-relaxed">
            The AI is trained to handle unexpected questions gracefully by
            taking a message and alerting your team, ensuring the lead is never
            lost.
          </div>
</details>
<details className="group bg-white border border-slate-200 rounded-xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-medium">
<h2 className="text-lg">How long does setup take?</h2>
<span className="shrink-0 rounded-full bg-slate-50 p-1.5 text-slate-900 sm:p-3 group-open:-rotate-180 transition-transform">
<i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="px-6 pb-6 text-slate-600 text-base leading-relaxed">
            Depending on the complexity of your requirements, we typically have
            your system built, tested, and live within 3 to 5 business days.
          </div>
</details>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center">
<i className="text-white w-4 h-4" data-lucide="bot" strokeWidth="1.5"></i>
</div>
<span className="text-base font-semibold tracking-tight text-slate-900">
            FrontDesk AI
          </span>
</div>
<p className="text-sm text-slate-500">
          © 2024 FrontDesk AI. All rights reserved.
        </p>
<div className="flex gap-6">
<a className="text-sm text-slate-500 hover:text-slate-900" href="#">
            Privacy Policy
          </a>
<a className="text-sm text-slate-500 hover:text-slate-900" href="#">
            Terms of Service
          </a>
</div>
</div>
</footer>


    </>
  );
}
