import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
function navigateTo(pageId, event) {
if (event) event.preventDefault();
document.querySelectorAll('.page-view').forEach(el => el.classList.add('hidden'));
document.getElementById(pageId).classList.remove('hidden');
window.scrollTo({ top: 0, behavior: 'smooth' });
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-400/20 blur-[120px]"></div>
</div>

<header className="fixed top-0 w-full z-50 bg-white/40 backdrop-blur-xl border-b border-white/60 shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-lg font-medium tracking-tighter text-slate-900" href="#" onclick="navigateTo('home', event)">
            storevink
          </a>
<nav className="hidden md:flex gap-6">
<a className="text-sm font-normal text-slate-600 hover:text-purple-700 transition-colors" href="#" onclick="navigateTo('home', event)">
              Platform
            </a>
<a className="text-sm font-normal text-slate-600 hover:text-purple-700 transition-colors" href="#" onclick="navigateTo('home', event)">
              Export
            </a>
<a className="text-sm font-normal text-slate-600 hover:text-purple-700 transition-colors" href="#" onclick="navigateTo('home', event)">
              Local Markets
            </a>
<a className="text-sm font-normal text-slate-600 hover:text-purple-700 transition-colors" href="#" onclick="navigateTo('contact', event)">
              Contact
            </a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-900 hover:text-purple-700 transition-colors" href="#" onclick="navigateTo('signin', event)">
            Sign in
          </a>
<a className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full hover:opacity-90 transition-all shadow-[0_4px_14px_rgba(147,51,234,0.25)]" href="#" onclick="navigateTo('demo', event)">
            Book demo
          </a>
</div>
</div>
</header>

<div className="flex-grow">

<div className="page-view" id="home">

<main className="pt-32 pb-24 px-6 relative">
<div className="max-w-4xl mx-auto text-center mt-12">
<a className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/60 bg-white/40 backdrop-blur-md text-xs font-medium text-purple-700 mb-8 hover:bg-white/60 transition-colors shadow-sm" href="#">
<span className="w-2 h-2 rounded-full bg-purple-600"></span>
              Now supporting Flipkart &amp; Meesho
              <iconify-icon className="text-purple-400" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-slate-900 mb-6 leading-[1.1]">
              Unify your global &amp;
              <br className="hidden md:block"/>
              local commerce.
            </h1>
<p className="text-base md:text-lg text-slate-600 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
              Storevink is the all-in-one management platform for ambitious
              brands. Streamline your direct-to-consumer, local marketplaces,
              international export, and B2B wholesale channels from a single
              dashboard.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:opacity-90 transition-all shadow-[0_4px_14px_rgba(147,51,234,0.25)] flex items-center justify-center gap-2" href="#">
                Start building
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto text-sm font-medium bg-white/50 backdrop-blur-md text-slate-900 border border-white/60 px-6 py-3 rounded-full hover:bg-white/70 transition-all flex items-center justify-center gap-2 shadow-sm" href="#">
<iconify-icon className="text-slate-500 text-base" icon="solar:play-circle-linear"></iconify-icon>
                Watch overview
              </a>
</div>
</div>

<div className="max-w-5xl mx-auto mt-20 relative">
<div className="absolute inset-0 bg-gradient-to-t from-[#fdf4ff] via-transparent to-transparent z-10 h-full w-full pointer-events-none opacity-50"></div>
<div className="bg-white/60 backdrop-blur-2xl rounded-t-2xl border border-white/80 border-b-0 shadow-[0_8px_32px_rgba(0,0,0,0.04)] p-4 overflow-hidden relative" style={{height: '400px'}}>

<div className="flex items-center justify-between border-b border-white/40 pb-4 mb-6">
<div className="flex gap-4">
<div className="h-4 w-24 bg-white/80 rounded shadow-sm"></div>
<div className="h-4 w-16 bg-white/80 rounded shadow-sm"></div>
<div className="h-4 w-20 bg-white/80 rounded shadow-sm"></div>
</div>
<div className="h-6 w-6 bg-purple-100 rounded-full shadow-sm"></div>
</div>

<div className="grid grid-cols-3 gap-6 h-full">
<div className="col-span-2 space-y-4">
<div className="h-32 bg-white/50 rounded-lg border border-white/60 w-full shadow-sm"></div>
<div className="grid grid-cols-2 gap-4">
<div className="h-24 bg-white/50 rounded-lg border border-white/60 w-full shadow-sm"></div>
<div className="h-24 bg-white/50 rounded-lg border border-white/60 w-full shadow-sm"></div>
</div>
</div>
<div className="col-span-1 space-y-4">
<div className="h-16 bg-white/50 rounded-lg border border-white/60 w-full shadow-sm flex items-center px-4">
<div className="w-8 h-8 rounded-full bg-blue-100 mr-3"></div>
<div className="h-3 w-16 bg-white/80 rounded"></div>
</div>
<div className="h-16 bg-white/50 rounded-lg border border-white/60 w-full shadow-sm flex items-center px-4">
<div className="w-8 h-8 rounded-full bg-purple-100 mr-3"></div>
<div className="h-3 w-20 bg-white/80 rounded"></div>
</div>
<div className="h-16 bg-white/50 rounded-lg border border-white/60 w-full shadow-sm flex items-center px-4">
<div className="w-8 h-8 rounded-full bg-indigo-100 mr-3"></div>
<div className="h-3 w-14 bg-white/80 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 px-6 border-t border-white/40 relative">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">
                Complete operational control.
              </h2>
<p className="text-base text-slate-600 max-w-xl">
                Everything you need to manage complex multi-channel sales
                without the technical overhead.
              </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

<div className="md:col-span-2 bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.03)] rounded-2xl p-8 hover:bg-white/50 transition-colors flex flex-col justify-between group relative overflow-hidden">
<div className="absolute right-0 top-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -mr-10 -mt-10 opacity-50 group-hover:opacity-70 transition-opacity"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/80 border border-white flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-blue-600 text-xl" icon="solar:buildings-2-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">
                    Dedicated B2B Portals
                  </h3>
<p className="text-sm text-slate-600 max-w-sm">
                    Create self-serve ordering experiences for wholesale
                    clients. Set custom pricing tiers, manage net terms, and
                    automate bulk order processing.
                  </p>
</div>

<div className="mt-8 bg-white/80 border border-white/60 rounded-xl p-4 shadow-sm w-full max-w-md relative z-10">
<div className="flex justify-between items-center mb-3">
<span className="text-xs font-medium text-slate-500">
                      Tier A Partners
                    </span>
<span className="text-xs text-purple-700 bg-purple-100/80 px-2 py-0.5 rounded backdrop-blur-md">
                      Active
                    </span>
</div>
<div className="space-y-2">
<div className="flex justify-between items-center text-sm">
<span className="text-slate-700">Standard Discount</span>
<span className="font-medium text-slate-900">
                        25% Off MSRP
                      </span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-slate-700">Payment Terms</span>
<span className="font-medium text-slate-900">Net 30</span>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.03)] rounded-2xl p-8 hover:bg-white/50 transition-colors flex flex-col group">
<div className="w-10 h-10 rounded-lg bg-white/80 border border-white flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-purple-600 text-xl" icon="solar:earth-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">
                  Frictionless Export
                </h3>
<p className="text-sm text-slate-600 mb-8">
                  Automate customs documentation, calculate landed costs in
                  real-time, and manage multi-currency catalogs effortlessly.
                </p>
<div className="mt-auto space-y-3">
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-purple-500" icon="solar:check-circle-linear"></iconify-icon>
                    Auto-generated invoices
                  </div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-purple-500" icon="solar:check-circle-linear"></iconify-icon>
                    Live duty &amp; tax calculation
                  </div>
</div>
</div>

<div className="md:col-span-1 bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.03)] rounded-2xl p-8 hover:bg-white/50 transition-colors flex flex-col">
<div className="w-10 h-10 rounded-lg bg-white/80 border border-white flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-indigo-600 text-xl" icon="solar:shop-2-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">
                  Local Marketplaces
                </h3>
<p className="text-sm text-slate-600 mb-6">
                  Deep integrations with regional giants. Sync your D2C
                  inventory seamlessly with
                  <strong>Flipkart</strong>
                  ,
                  <strong>Meesho</strong>
                  , and Amazon to avoid stockouts and overselling.
                </p>
<div className="mt-auto flex gap-2">
<span className="px-2 py-1 bg-white/60 border border-white/80 rounded-md text-xs font-medium text-slate-600 shadow-sm">
                    Flipkart
                  </span>
<span className="px-2 py-1 bg-white/60 border border-white/80 rounded-md text-xs font-medium text-slate-600 shadow-sm">
                    Meesho
                  </span>
</div>
</div>

<div className="md:col-span-2 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between group shadow-lg">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10 md:w-1/2">
<div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center mb-6 backdrop-blur-md shadow-sm">
<iconify-icon className="text-white text-xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">
                    Unified Analytics
                  </h3>
<p className="text-sm text-indigo-100">
                    Stop patching together spreadsheets. Get a holistic view of
                    your brand's performance across D2C, B2B, Export, and Local
                    Marketplaces.
                  </p>
</div>

<div className="absolute right-0 bottom-0 w-1/2 h-full hidden md:flex items-end justify-end p-8 pb-0">
<div className="w-full h-3/4 flex items-end gap-2 border-b border-white/10 pb-4">
<div className="w-1/5 bg-white/20 rounded-t-sm h-1/3 group-hover:h-2/5 transition-all duration-500 backdrop-blur-sm"></div>
<div className="w-1/5 bg-white/30 rounded-t-sm h-1/2 group-hover:h-3/5 transition-all duration-500 delay-75 backdrop-blur-sm"></div>
<div className="w-1/5 bg-purple-400/50 rounded-t-sm h-2/3 group-hover:h-4/5 transition-all duration-500 delay-150 backdrop-blur-sm"></div>
<div className="w-1/5 bg-blue-400/70 rounded-t-sm h-full transition-all duration-500 delay-200 relative backdrop-blur-sm shadow-[0_0_15px_rgba(96,165,250,0.5)]">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-white bg-white/20 px-2 py-0.5 rounded backdrop-blur-md border border-white/30">
                        Local
                      </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-5xl mx-auto bg-white/40 backdrop-blur-2xl rounded-3xl border border-white/60 p-10 md:p-16 text-center relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.05)]">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-300/30 rounded-full blur-[80px] pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-slate-900 mb-6">
                Ready to scale your operations?
              </h2>
<p className="text-base text-slate-600 max-w-xl mx-auto mb-10">
                Join forward-thinking brands that use Storevink to manage their
                e-commerce, export, marketplaces and B2B channels seamlessly.
              </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:opacity-90 transition-all shadow-[0_4px_14px_rgba(147,51,234,0.25)]" href="#">
                  Start your free trial
                </a>
<a className="w-full sm:w-auto text-sm font-medium bg-white/60 text-slate-900 border border-white/80 px-8 py-3 rounded-full hover:bg-white/80 transition-colors shadow-sm" href="#" onclick="navigateTo('contact', event)">
                  Talk to sales
                </a>
</div>
</div>
</div>
</section>
</div>

<div className="page-view hidden" id="contact">
<main className="pt-40 pb-24 px-6 relative">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 mb-4">
                Get in touch
              </h1>
<p className="text-base text-slate-600 max-w-xl mx-auto">
                Have questions about our platform, enterprise pricing, or
                marketplace integrations? Our team is here to help.
              </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

<div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.03)] h-full">
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-6">
                  Contact Information
                </h3>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-blue-100/50 flex items-center justify-center shrink-0 border border-white/60">
<iconify-icon className="text-blue-600 text-lg" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Email</h4>
<p className="text-sm text-slate-500 mt-1">
                        hello@storevink.com
                      </p>
<p className="text-sm text-slate-500">
                        support@storevink.com
                      </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-purple-100/50 flex items-center justify-center shrink-0 border border-white/60">
<iconify-icon className="text-purple-600 text-lg" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Office</h4>
<p className="text-sm text-slate-500 mt-1">
                        100 Tech Hub Boulevard
                        <br/>
                        Suite 400
                        <br/>
                        San Francisco, CA 94107
                      </p>
</div>
</div>
</div>
<div className="mt-12 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-white/60">
<h4 className="text-sm font-medium text-slate-900 mb-2">
                    Looking for partnership?
                  </h4>
<p className="text-xs text-slate-600 mb-4">
                    We're always looking to integrate with new local
                    marketplaces and logistics providers.
                  </p>
<a className="text-xs font-medium text-purple-700 hover:text-purple-800 flex items-center gap-1" href="#">
                    Apply for partnership
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.03)]">
<form className="space-y-4" onsubmit="event.preventDefault();">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">
                        First Name
                      </label>
<input className="w-full bg-white/50 border border-white/80 rounded-xl py-2.5 px-4 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all backdrop-blur-sm placeholder:text-slate-400 shadow-sm" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">
                        Last Name
                      </label>
<input className="w-full bg-white/50 border border-white/80 rounded-xl py-2.5 px-4 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all backdrop-blur-sm placeholder:text-slate-400 shadow-sm" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">
                      Work Email
                    </label>
<input className="w-full bg-white/50 border border-white/80 rounded-xl py-2.5 px-4 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all backdrop-blur-sm placeholder:text-slate-400 shadow-sm" placeholder="jane@company.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">
                      Company Size
                    </label>
<select className="w-full bg-white/50 border border-white/80 rounded-xl py-2.5 px-4 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all backdrop-blur-sm shadow-sm appearance-none">
<option>1-50 employees</option>
<option>51-200 employees</option>
<option>201-1000 employees</option>
<option>1000+ employees</option>
</select>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">
                      How can we help?
                    </label>
<textarea className="w-full bg-white/50 border border-white/80 rounded-xl py-3 px-4 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all backdrop-blur-sm placeholder:text-slate-400 shadow-sm resize-none" placeholder="Tell us about your current operational setup..." rows="4"></textarea>
</div>
<button className="w-full mt-4 text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:opacity-90 transition-all shadow-[0_4px_14px_rgba(147,51,234,0.25)]" type="submit">
                    Send message
                  </button>
</form>
</div>
</div>
</div>
</main>
</div>
<div className="page-view hidden" id="signin">
<main className="pt-40 pb-24 px-6 relative flex items-center justify-center min-h-[80vh]">
<div className="max-w-md w-full bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.03)] text-center relative z-10">
<h1 className="text-3xl font-semibold tracking-tighter text-slate-900 mb-2">
              Welcome back
            </h1>
<p className="text-sm text-slate-600 mb-8">
              Sign in to your storevink account.
            </p>
<form className="space-y-4 text-left" onsubmit="event.preventDefault(); navigateTo('home', event);">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">
                  Email
                </label>
<input className="w-full bg-white/50 border border-white/80 rounded-xl py-2.5 px-4 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all backdrop-blur-sm placeholder:text-slate-400 shadow-sm" placeholder="you@company.com" type="email"/>
</div>
<div className="space-y-1.5">
<div className="flex justify-between items-center">
<label className="text-xs font-medium text-slate-700 ml-1">
                    Password
                  </label>
<a className="text-xs font-medium text-purple-700 hover:text-purple-800" href="#">
                    Forgot?
                  </a>
</div>
<input className="w-full bg-white/50 border border-white/80 rounded-xl py-2.5 px-4 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all backdrop-blur-sm placeholder:text-slate-400 shadow-sm" placeholder="••••••••" type="password"/>
</div>
<button className="w-full mt-6 text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:opacity-90 transition-all shadow-[0_4px_14px_rgba(147,51,234,0.25)]" type="submit">
                Sign in
              </button>
</form>
<div className="mt-6 text-sm text-slate-600">
              Don't have an account?
              <a className="font-medium text-purple-700 hover:text-purple-800" href="#" onclick="navigateTo('demo', event)">
                Book a demo
              </a>
</div>
</div>
</main>
</div>
<div className="page-view hidden" id="demo">
<main className="pt-40 pb-24 px-6 relative flex items-center justify-center min-h-[80vh]">
<div className="max-w-xl w-full mx-auto bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.03)] text-center relative z-10">
<div className="w-12 h-12 mx-auto bg-purple-100/50 rounded-full flex items-center justify-center border border-white/60 mb-6 shadow-sm">
<iconify-icon className="text-purple-600 text-2xl" icon="solar:calendar-linear"></iconify-icon>
</div>
<h1 className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-900 mb-4">
              Book a Demo
            </h1>
<p className="text-base text-slate-600 mb-8">
              See how Storevink can unify your global and local commerce
              operations. Pick a time that works for you.
            </p>
<form className="space-y-4 text-left" onsubmit="event.preventDefault(); alert('Demo scheduled successfully!'); navigateTo('home', event);">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">
                    First Name
                  </label>
<input className="w-full bg-white/50 border border-white/80 rounded-xl py-2.5 px-4 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all backdrop-blur-sm placeholder:text-slate-400 shadow-sm" placeholder="Jane" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">
                    Last Name
                  </label>
<input className="w-full bg-white/50 border border-white/80 rounded-xl py-2.5 px-4 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all backdrop-blur-sm placeholder:text-slate-400 shadow-sm" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">
                  Work Email
                </label>
<input className="w-full bg-white/50 border border-white/80 rounded-xl py-2.5 px-4 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all backdrop-blur-sm placeholder:text-slate-400 shadow-sm" placeholder="jane@company.com" required="" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">
                  Company Website
                </label>
<input className="w-full bg-white/50 border border-white/80 rounded-xl py-2.5 px-4 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all backdrop-blur-sm placeholder:text-slate-400 shadow-sm" placeholder="https://" required="" type="url"/>
</div>
<button className="w-full mt-6 text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:opacity-90 transition-all shadow-[0_4px_14px_rgba(147,51,234,0.25)] flex justify-center items-center gap-2" type="submit">
                Schedule Demo
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</main>
</div>
</div>

<footer className="border-t border-white/40 bg-white/20 backdrop-blur-md pt-16 pb-8 px-6 mt-auto">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2 pr-8">
<a className="text-lg font-medium tracking-tighter text-slate-900 block mb-4" href="#" onclick="navigateTo('home', event)">
            storevink
          </a>
<p className="text-xs text-slate-600 max-w-xs mb-6 leading-relaxed">
            The modern infrastructure for brands to manage e-commerce, local
            marketplaces like Flipkart &amp; Meesho, global exports, and B2B
            wholesale from a single platform.
          </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center border border-white/60 text-slate-500 hover:text-purple-600 hover:bg-white/80 transition-all shadow-sm" href="#">
<iconify-icon className="text-sm" icon="solar:twitter-bold"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center border border-white/60 text-slate-500 hover:text-purple-600 hover:bg-white/80 transition-all shadow-sm" href="#">
<iconify-icon className="text-sm" icon="solar:round-alt-arrow-right-bold"></iconify-icon>

</a>
<a className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center border border-white/60 text-slate-500 hover:text-purple-600 hover:bg-white/80 transition-all shadow-sm" href="#">
<iconify-icon className="text-sm" icon="solar:camera-bold"></iconify-icon>

</a>
<a className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center border border-white/60 text-slate-500 hover:text-purple-600 hover:bg-white/80 transition-all shadow-sm" href="#">
<iconify-icon className="text-sm" icon="solar:link-circle-bold"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-xs font-medium text-slate-900 mb-4 uppercase tracking-wider">
            Product
          </h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-slate-600 hover:text-purple-700 transition-colors" href="#">
                DTC Management
              </a>
</li>
<li>
<a className="text-sm text-slate-600 hover:text-purple-700 transition-colors" href="#">
                Local Marketplaces
              </a>
</li>
<li>
<a className="text-sm text-slate-600 hover:text-purple-700 transition-colors" href="#">
                B2B Portals
              </a>
</li>
<li>
<a className="text-sm text-slate-600 hover:text-purple-700 transition-colors" href="#">
                Export Logistics
              </a>
</li>
<li>
<a className="text-sm text-slate-600 hover:text-purple-700 transition-colors" href="#">
                Analytics
              </a>
</li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-slate-900 mb-4 uppercase tracking-wider">
            Resources
          </h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-slate-600 hover:text-purple-700 transition-colors" href="#">
                Documentation
              </a>
</li>
<li>
<a className="text-sm text-slate-600 hover:text-purple-700 transition-colors" href="#">
                API Reference
              </a>
</li>
<li>
<a className="text-sm text-slate-600 hover:text-purple-700 transition-colors" href="#">
                Blog
              </a>
</li>
<li>
<a className="text-sm text-slate-600 hover:text-purple-700 transition-colors" href="#">
                Case Studies
              </a>
</li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-slate-900 mb-4 uppercase tracking-wider">
            Company
          </h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-slate-600 hover:text-purple-700 transition-colors" href="#">
                About
              </a>
</li>
<li>
<a className="text-sm text-slate-600 hover:text-purple-700 transition-colors" href="#" onclick="navigateTo('contact', event)">
                Contact Us
              </a>
</li>
<li>
<a className="text-sm text-slate-600 hover:text-purple-700 transition-colors" href="#">
                Careers
              </a>
</li>
<li>
<a className="text-sm text-slate-600 hover:text-purple-700 transition-colors" href="#">
                Privacy Policy
              </a>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-white/50 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500">
          © 2024 Storevink Inc. All rights reserved.
        </p>
<div className="flex items-center gap-2 text-xs text-slate-500 bg-white/40 px-3 py-1.5 rounded-full border border-white/60">
<span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
          All systems operational
        </div>
</div>
</footer>

    </>
  );
}
