import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 flex items-center justify-center font-bold text-xs rounded bg-black text-white">AV</div>
<span className="font-medium tracking-tighter text-lg group-hover:opacity-80 transition-opacity text-rose-300">AVNI INDIA AV</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium transition-colors text-cyan-400 hover:text-cyan-600" href="#services">Govt Services</a>
<a className="text-xs font-medium transition-colors text-cyan-400 hover:text-cyan-600" href="#job-forms">Job Forms</a>
<a className="text-xs font-medium transition-colors text-cyan-400 hover:text-cyan-600" href="#printing">Printing</a>
<a className="text-xs font-medium transition-colors text-cyan-400 hover:text-cyan-600" href="#portal">Login/Register</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:flex text-xs font-medium border px-4 py-2 rounded-full transition-colors bg-black/10 border-black/10 text-black hover:bg-black/20" href="#portal">
                    Register
                </a>
<a className="hidden sm:flex text-xs font-medium px-4 py-2 rounded-full transition-colors bg-black text-white hover:bg-indigo-800" href="#portal">
                    Login
                </a>
<button className="md:hidden text-indigo-700 hover:text-cyan-600">
<iconify-icon height="24" icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-24 overflow-hidden glow-effect pt-32 pr-6 pb-20 pl-6 relative">
<div className="text-center max-w-5xl mr-auto ml-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs mb-8 transition-colors cursor-default border-black/10 bg-black/5 text-indigo-700 hover:bg-black/10">
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                Authorized Digital Seva Kendra
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 leading-[1.1] text-rose-300">
                Digital Services <br className="hidden md:block"/>
<span className="text-gradient">&amp; Form Center.</span>
</h1>
<p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed text-cyan-400">
                One-stop portal for PAN Card, Aadhar, Driving License, Job Applications, and Mobile Recharge. Login now to access services.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full font-medium text-sm hover:bg-blue-500 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-blue-500/20 bg-blue-400 text-rose-300" href="#portal">
                    Customer Login
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" height="16" icon="lucide:log-in" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full font-medium text-sm transition-all flex items-center justify-center gap-2 bg-black text-white hover:bg-gray-800" href="#portal">
                    New Registration
                    <iconify-icon height="16" icon="lucide:user-plus" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 border-t bg-white/[0.01] border-black/5" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16 flex flex-col md:flex-row items-end justify-between gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-rose-300">Digital Services</h2>
<p className="text-lg font-light max-w-xl text-cyan-400">Access all government and online services from a single dashboard.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl border bg-white/[0.02] card-hover group relative overflow-hidden border-black/10">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon height="100" icon="lucide:fingerprint" width="100"></iconify-icon>
</div>
<div className="h-10 w-10 rounded-lg bg-orange-500/10 flex items-center justify-center border border-orange-500/20 mb-6 text-orange-600">
<iconify-icon height="20" icon="lucide:file-badge" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight text-rose-300">Govt Documents</h3>
<p className="text-sm leading-relaxed font-light mb-4 text-cyan-400">
                        Authorized center for New PAN Card, Aadhar Card corrections, Driving License (DL), and Vehicle RC services.
                    </p>
<div className="flex gap-2 flex-wrap">
<span className="text-[10px] px-2 py-1 rounded border bg-black/5 text-cyan-400 border-black/10">PAN Card</span>
<span className="text-[10px] px-2 py-1 rounded border bg-black/5 text-cyan-400 border-black/10">Aadhar</span>
<span className="text-[10px] px-2 py-1 rounded border bg-black/5 text-cyan-400 border-black/10">RC/DL</span>
</div>
</div>

<div className="p-8 rounded-2xl border bg-white/[0.02] card-hover group border-black/10" id="job-forms">
<div className="h-10 w-10 rounded-lg bg-pink-500/10 flex items-center justify-center border border-pink-500/20 mb-6 text-pink-600">
<iconify-icon height="20" icon="lucide:briefcase" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight text-rose-300">Online Job Forms</h3>
<p className="text-sm leading-relaxed font-light mb-4 text-cyan-400">
                        Expert filing for Govt Jobs, Sarkari Exams, UPSC, SSC, Banking forms, Admit Cards, and Results.
                    </p>
<div className="flex gap-2">
<span className="text-[10px] px-2 py-1 rounded border bg-black/5 text-cyan-400 border-black/10">Apply Online</span>
<span className="text-[10px] px-2 py-1 rounded border bg-black/5 text-cyan-400 border-black/10">Admit Card</span>
</div>
</div>

<div className="p-8 rounded-2xl border bg-white/[0.02] card-hover group border-black/10">
<div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 mb-6 text-blue-600">
<iconify-icon height="20" icon="lucide:zap" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight text-rose-300">Recharge &amp; Bills</h3>
<p className="text-sm leading-relaxed font-light mb-4 text-cyan-400">
                        Instant mobile recharge, DTH, electricity, water, and gas bill payments with 100% success rate.
                    </p>
<div className="w-full h-1.5 rounded-full overflow-hidden bg-black/5">
<div className="bg-blue-500 w-3/4 h-full"></div>
</div>
<p className="text-[10px] mt-2 text-cyan-600">Instant Settlement</p>
</div>

<div className="p-8 rounded-2xl border bg-white/[0.02] card-hover group border-black/10" id="printing">
<div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20 mb-6 text-green-600">
<iconify-icon height="20" icon="lucide:printer" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight text-rose-300">Print Services</h3>
<p className="text-sm leading-relaxed font-light mb-4 text-cyan-400">
                        Upload documents (PDF, JPG) and get high-quality prints delivered. Color &amp; B/W options available.
                    </p>
<div className="flex items-center gap-2 text-xs font-medium text-rose-300">
                        Upload Files <iconify-icon height="12" icon="lucide:arrow-right" width="12"></iconify-icon>
</div>
</div>

<div className="p-8 rounded-2xl border bg-white/[0.02] card-hover group border-black/10">
<div className="h-10 w-10 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 mb-6 text-cyan-600">
<iconify-icon height="20" icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight text-rose-300">Online Shopping</h3>
<p className="text-sm leading-relaxed font-light mb-4 text-cyan-400">
                        Exclusive deals on electronics, accessories, and daily essentials. Secure checkout.
                    </p>
</div>

<div className="p-8 rounded-2xl border bg-white/[0.02] card-hover group border-l-2 border-black/10 border-l-rose-300">
<div className="h-10 w-10 rounded-lg bg-rose-500/10 flex items-center justify-center border border-rose-500/20 mb-6 text-rose-600">
<iconify-icon height="20" icon="lucide:user-circle" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight text-black">Member Access</h3>
<p className="text-sm leading-relaxed font-light mb-4 text-cyan-400">
                        Login to track your applications, download admit cards, and manage your wallet balance.
                    </p>
<a className="text-xs font-medium text-rose-500 flex items-center gap-1 hover:text-rose-600" href="#portal">
                        Login to Dashboard <iconify-icon height="12" icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t relative border-black/5" id="portal">
<div className="absolute inset-0 bg-gradient-to-b via-transparent to-transparent pointer-events-none from-indigo-100/50"></div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">

<div className="md:w-1/2">
<div className="inline-flex items-center gap-2 font-medium text-xs uppercase tracking-wider mb-6 text-blue-600">
<iconify-icon height="14" icon="lucide:shield-check" strokeWidth="1.5" width="14"></iconify-icon>
                    Secure Portal
                </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-rose-300">
                    Login or Register <br/>to get started.
                </h2>
<p className="text-lg font-light mb-8 leading-relaxed text-cyan-400">
                    Create an account to apply for government services, fill job forms, and order prints online.
                </p>
<div className="grid grid-cols-2 gap-6 mt-10">
<div className="flex flex-col gap-2">
<span className="text-3xl font-semibold tracking-tight text-rose-300">Fast</span>
<span className="text-sm text-indigo-500">Service Delivery</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-3xl font-semibold tracking-tight text-rose-300">Secure</span>
<span className="text-sm text-indigo-500">Data Protection</span>
</div>
</div>
</div>

<div className="md:w-1/2 w-full">
<div className="backdrop-blur-xl border rounded-2xl p-8 shadow-2xl relative overflow-hidden bg-white/40 border-black/10">

<div className="flex p-1 rounded-lg mb-8 relative bg-black/5">
<div className="w-1/2 text-center py-2 text-sm font-medium rounded shadow-sm cursor-pointer tab-active transition-all">
                            Login
                        </div>
<div className="w-1/2 text-center py-2 text-sm font-medium cursor-pointer transition-colors tab-inactive">
                            Register
                        </div>
</div>

<form className="space-y-5" onsubmit="event.preventDefault();">
<div className="space-y-1.5">
<label className="text-xs font-medium ml-1 text-indigo-700">Mobile / User ID</label>
<div className="relative">
<span className="absolute left-3 top-2.5 text-indigo-500">
<iconify-icon height="16" icon="lucide:user" width="16"></iconify-icon>
</span>
<input className="w-full custom-input rounded-lg py-2.5 pl-10 pr-4 text-sm placeholder-indigo-600" placeholder="+91 98765 43210" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium ml-1 text-indigo-700">Password</label>
<div className="relative">
<span className="absolute left-3 top-2.5 text-indigo-500">
<iconify-icon height="16" icon="lucide:lock" width="16"></iconify-icon>
</span>
<input className="w-full custom-input rounded-lg py-2.5 pl-10 pr-4 text-sm placeholder-indigo-600" placeholder="••••••••" type="password"/>
</div>
</div>
<div className="flex items-center justify-between text-xs">
<label className="flex items-center gap-2 cursor-pointer text-cyan-400">
<input className="w-3.5 h-3.5 rounded checked:bg-blue-500 accent-blue-500 bg-black/5 border-black/20" type="checkbox"/>
                                Remember me
                            </label>
<a className="text-blue-600 hover:text-blue-700" href="#">Forgot Password?</a>
</div>
<button className="w-full py-2.5 hover:bg-blue-500 font-medium rounded-lg text-sm transition-colors flex items-center justify-center gap-2 bg-blue-400 text-black">
                            Access Dashboard
                            <iconify-icon height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</form>
<div className="mt-6 text-center border-t pt-6 border-black/5">
<p className="text-xs text-indigo-500 mb-2">Don't have an ID?</p>
<button className="w-full py-2.5 border font-medium rounded-lg text-sm transition-colors bg-black/5 hover:bg-black/10 border-black/10 text-rose-300">
                            Create New Account
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t pt-16 pb-8 px-6 border-black/10 bg-slate-50">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="font-medium tracking-tighter text-lg block mb-6 text-rose-300" href="#">AVNI INDIA AV</a>
<p className="text-indigo-500 text-sm font-light max-w-xs leading-relaxed">
                        Your trusted partner for Online Jobs, Govt Services, Printing, and Shopping.
                    </p>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-rose-300">Services</h4>
<ul className="space-y-3">
<li><a className="text-indigo-500 text-sm transition-colors hover:text-cyan-600" href="#">PAN &amp; Aadhar</a></li>
<li><a className="text-indigo-500 text-sm transition-colors hover:text-cyan-600" href="#">Online Job Forms</a></li>
<li><a className="text-indigo-500 text-sm transition-colors hover:text-cyan-600" href="#">RC &amp; DL Services</a></li>
<li><a className="text-indigo-500 text-sm transition-colors hover:text-cyan-600" href="#">Print Services</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-rose-300">Account</h4>
<ul className="space-y-3">
<li><a className="text-indigo-500 text-sm transition-colors hover:text-cyan-600" href="#portal">Login</a></li>
<li><a className="text-indigo-500 text-sm transition-colors hover:text-cyan-600" href="#portal">Register</a></li>
<li><a className="text-indigo-500 text-sm transition-colors hover:text-cyan-600" href="#">Check Status</a></li>
<li><a className="text-indigo-500 text-sm transition-colors hover:text-cyan-600" href="#">Wallet</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-rose-300">Support</h4>
<ul className="space-y-3">
<li><a className="text-indigo-500 text-sm transition-colors hover:text-cyan-600" href="#">Contact Us</a></li>
<li><a className="text-indigo-500 text-sm transition-colors hover:text-cyan-600" href="#">WhatsApp Help</a></li>
<li><a className="text-indigo-500 text-sm transition-colors hover:text-cyan-600" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-black/5">
<div className="text-xs text-indigo-400">
                    © 2023 Avni India AV. All rights reserved.
                </div>
<div className="flex items-center gap-6">
<a className="text-indigo-500 transition-colors hover:text-cyan-600" href="#">
<iconify-icon height="16" icon="lucide:facebook" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="text-indigo-500 transition-colors hover:text-cyan-600" href="#">
<iconify-icon height="16" icon="lucide:instagram" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="text-indigo-500 transition-colors hover:text-cyan-600" href="#">
<iconify-icon height="16" icon="lucide:twitter" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
