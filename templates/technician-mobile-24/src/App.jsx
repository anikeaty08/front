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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="relative w-[390px] min-h-[844px] h-max bg-[#F2F4F4] rounded-[48px] shadow-2xl overflow-hidden border-[6px] border-white flex flex-col shrink-0">
<div className="absolute top-[-10%] left-[-10%] w-[80%] h-[40%] bg-[#A9E3E0] rounded-full mix-blend-multiply filter blur-[80px] opacity-60"></div>
<div className="absolute top-[20%] right-[-10%] w-[70%] h-[50%] bg-[#2EC5BF] rounded-full mix-blend-multiply filter blur-[80px] opacity-30"></div>
<div className="relative z-10 flex-1 flex flex-col p-8 pt-24">
<div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-white flex items-center justify-center mb-8">
<iconify-icon className="inline-block text-3xl text-[#17B6B1]" icon="solar:wrench-linear" mode="svg" strokeWidth="1.5"></iconify-icon>
</div>
<h1 className="text-3xl font-semibold text-[#1F4F57] tracking-tight mb-2">Welcome Back</h1>
<p className="text-sm text-[#1F4F57]/60 mb-10 leading-relaxed">Enter your registered mobile number to login to your partner account.</p>
<div className="bg-white/80 backdrop-blur-xl border border-white rounded-[24px] p-6 shadow-sm mb-6">
<label className="text-xs font-semibold text-[#1F4F57]/60 uppercase tracking-wider mb-2 block">Mobile Number</label>
<div className="flex items-center gap-3 border-b border-[#1F4F57]/15 pb-2">
<span className="text-base font-semibold text-[#1F4F57]">+91</span>
<input className="w-full bg-transparent text-lg font-semibold text-[#1F4F57] focus:outline-none tracking-tight" type="tel" value="9876543210"/>
</div>
</div>
<div className="bg-white/80 backdrop-blur-xl border border-white rounded-[24px] p-6 shadow-sm mb-auto">
<div className="flex justify-between items-center mb-4">
<label className="text-xs font-semibold text-[#1F4F57]/60 uppercase tracking-wider">Enter OTP</label>
<span className="text-xs font-semibold text-[#17B6B1]">00:45</span>
</div>
<div className="flex justify-between gap-2">
<input className="w-14 h-14 bg-white border border-[#1F4F57]/15 rounded-xl text-center text-2xl font-semibold text-[#1F4F57] focus:border-[#17B6B1] focus:outline-none shadow-sm" readonly="" type="text" value="4"/>
<input className="w-14 h-14 bg-white border border-[#1F4F57]/15 rounded-xl text-center text-2xl font-semibold text-[#1F4F57] focus:border-[#17B6B1] focus:outline-none shadow-sm" readonly="" type="text" value="8"/>
<input className="w-14 h-14 bg-white border border-[#1F4F57]/15 rounded-xl text-center text-2xl font-semibold text-[#1F4F57] focus:border-[#17B6B1] focus:outline-none shadow-sm" readonly="" type="text" value="2"/>
<input className="w-14 h-14 bg-white border border-[#17B6B1] rounded-xl text-center text-2xl font-semibold text-[#1F4F57] focus:outline-none shadow-sm ring-2 ring-[#A9E3E0]" readonly="" type="text" value="9"/>
</div>
</div>
<button className="w-full bg-[#13AFA9] text-white rounded-[20px] py-4 text-base font-semibold shadow-xl shadow-[#13AFA9]/30 transition active:scale-[0.98] mb-6 flex items-center justify-center gap-2">
                Verify &amp; Login <iconify-icon className="inline-block" icon="solar:alt-arrow-right-linear" mode="svg" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="relative w-[390px] min-h-[844px] h-max bg-[#F2F4F4] rounded-[48px] shadow-2xl overflow-hidden border-[6px] border-white flex flex-col shrink-0">
<div className="absolute top-[-10%] left-[-10%] w-[80%] h-[40%] bg-[#A9E3E0] rounded-full mix-blend-multiply filter blur-[80px] opacity-60"></div>
<div className="absolute top-[20%] right-[-10%] w-[70%] h-[50%] bg-[#2EC5BF] rounded-full mix-blend-multiply filter blur-[80px] opacity-30"></div>
<div className="relative z-10 flex-1 pb-28">
<div className="flex items-center justify-between px-6 pt-12 pb-6">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-white shadow-sm">
<img alt="Tech Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<p className="text-sm text-[#1F4F57]/60 font-medium">Hello, Rahul</p>
<p className="text-lg text-[#1F4F57] font-semibold tracking-tight">Ready for work?</p>
</div>
</div>
<div className="flex flex-col items-end gap-1">
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-[#1F4F57]/15 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[#1F4F57]/15 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2EC5BF] shadow-sm"></div>
</label>
<span className="text-xs font-medium text-[#2EC5BF]">Online</span>
</div>
</div>
<div className="px-6 space-y-6">
<div>
<h3 className="text-lg font-semibold text-[#1F4F57] tracking-tight mb-3 px-1">Today's Jobs</h3>
<div className="grid grid-cols-3 gap-3">
<div className="bg-white/60 backdrop-blur-lg border border-white/50 rounded-2xl p-4 shadow-sm flex flex-col items-center">
<span className="text-2xl font-semibold text-[#1F4F57] tracking-tight mb-1">2</span>
<span className="text-xs font-medium text-[#1F4F57]/60">Pending</span>
</div>
<div className="bg-white/60 backdrop-blur-lg border border-white/50 rounded-2xl p-4 shadow-sm flex flex-col items-center">
<span className="text-2xl font-semibold text-[#17B6B1] tracking-tight mb-1">1</span>
<span className="text-xs font-medium text-[#1F4F57]/60">Accepted</span>
</div>
<div className="bg-white/60 backdrop-blur-lg border border-white/50 rounded-2xl p-4 shadow-sm flex flex-col items-center">
<span className="text-2xl font-semibold text-[#2EC5BF] tracking-tight mb-1">4</span>
<span className="text-xs font-medium text-[#1F4F57]/60">Completed</span>
</div>
</div>
</div>
<div>
<div className="flex items-center justify-between px-1 mb-3">
<h3 className="text-lg font-semibold text-[#1F4F57] tracking-tight">New Requests</h3>
<span className="bg-[#1F4F57] text-white text-xs font-semibold px-2 py-0.5 rounded-full animate-pulse">1 New</span>
</div>
<div className="bg-white/80 backdrop-blur-xl border border-white rounded-[28px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-[#A9E3E0]/40 rounded-full blur-2xl"></div>
<div className="flex justify-between items-start mb-4 relative z-10">
<div>
<h4 className="text-base font-semibold text-[#1F4F57]">RO Filter Change</h4>
<p className="text-sm text-[#1F4F57]/70 mt-0.5">Amit Sharma</p>
<div className="flex items-center gap-1.5 mt-2 text-[#17B6B1] bg-[#A9E3E0]/30 w-max px-2 py-1 rounded-lg">
<iconify-icon className="inline-block" icon="solar:routing-linear" mode="svg" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">2.5 km away</span>
</div>
</div>
<div className="w-10 h-10 bg-[#1F4F57]/5 rounded-full flex items-center justify-center border border-[#1F4F57]/10 shadow-sm text-[#1F4F57]/40">
<iconify-icon className="inline-block text-lg" icon="solar:map-linear" mode="svg" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex gap-3 relative z-10">
<button className="flex-1 bg-white border border-[#1F4F57]/15 text-[#1F4F57] rounded-xl py-2.5 text-sm font-medium shadow-sm transition active:scale-[0.98]">Reject</button>
<button className="flex-1 bg-[#13AFA9] text-white rounded-xl py-2.5 text-sm font-medium shadow-md shadow-[#13AFA9]/20 transition active:scale-[0.98]">Accept</button>
</div>
</div>
</div>
<div>
<h3 className="text-lg font-semibold text-[#1F4F57] tracking-tight mb-3 px-1">Next Active Job</h3>
<div className="bg-gradient-to-br from-[#17B6B1] to-[#2EC5BF] rounded-[28px] p-5 text-white shadow-lg shadow-[#17B6B1]/20 relative overflow-hidden">
<img alt="Water splash abstract" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay" src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="relative z-10 flex justify-between items-center mb-4">
<div>
<h4 className="text-lg font-semibold tracking-tight">Installation</h4>
<p className="text-sm text-white/80">Priya Singh • 14:00 PM</p>
</div>
<iconify-icon className="inline-block text-3xl text-white/50" icon="solar:clock-circle-linear" mode="svg" strokeWidth="1.5"></iconify-icon>
</div>
<button className="w-full bg-white text-[#13AFA9] rounded-xl py-2.5 text-sm font-semibold shadow-sm flex items-center justify-center gap-2 transition active:scale-[0.98]">
                            Start Navigation <iconify-icon className="inline-block" icon="solar:alt-arrow-right-linear" mode="svg" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
<div className="absolute bottom-6 left-6 right-6 bg-white/70 backdrop-blur-2xl border border-white/60 rounded-[32px] p-2 shadow-[0_10px_40px_rgb(0,0,0,0.06)] z-50">
<div className="flex justify-between items-center px-4 py-2">
<div className="flex flex-col items-center gap-1 text-[#17B6B1]">
<iconify-icon className="inline-block text-2xl" icon="solar:home-2-linear" mode="svg" strokeWidth="2"></iconify-icon>
<span className="text-xs font-medium">Home</span>
</div>
<div className="flex flex-col items-center gap-1 text-[#1F4F57]/40">
<iconify-icon className="inline-block text-2xl" icon="solar:case-linear" mode="svg" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">Jobs</span>
</div>
<div className="flex flex-col items-center gap-1 text-[#1F4F57]/40">
<iconify-icon className="inline-block text-2xl" icon="solar:wallet-linear" mode="svg" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">Earnings</span>
</div>
<div className="flex flex-col items-center gap-1 text-[#1F4F57]/40">
<iconify-icon className="inline-block text-2xl" icon="solar:user-linear" mode="svg" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">Profile</span>
</div>
</div>
</div>
</div>

<div className="relative w-[390px] min-h-[844px] h-max bg-[#F2F4F4] rounded-[48px] shadow-2xl overflow-hidden border-[6px] border-white flex flex-col shrink-0">
<div className="absolute top-[-10%] left-[-10%] w-[80%] h-[40%] bg-[#A9E3E0] rounded-full mix-blend-multiply filter blur-[80px] opacity-60"></div>
<div className="relative z-10 flex-1 flex flex-col">
<div className="flex items-center gap-4 px-6 pt-12 pb-4 bg-[#F2F4F4]/80 backdrop-blur-md z-20 sticky top-0">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-[#1F4F57]/10 text-[#1F4F57]">
<iconify-icon className="inline-block text-xl" icon="solar:alt-arrow-left-linear" mode="svg" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-lg font-semibold text-[#1F4F57] tracking-tight">Job Request</h2>
</div>
<div className="flex-1 pb-32">
<div className="h-48 bg-[#1F4F57]/15 relative">
<img alt="Map" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#F2F4F4] to-transparent"></div>
<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white flex items-center gap-2 text-sm font-medium text-[#1F4F57] w-max max-w-[90%]">
<iconify-icon className="inline-block text-[#17B6B1] text-lg" icon="solar:routing-linear" mode="svg"></iconify-icon> 2.5 km • 10 mins
                    </div>
</div>
<div className="px-6 space-y-6 -mt-4 relative z-10">
<div className="bg-white/80 backdrop-blur-xl border border-white rounded-[28px] p-5 shadow-sm">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-[#A9E3E0]/30 rounded-full flex items-center justify-center text-[#17B6B1] text-xl font-semibold">A</div>
<div>
<h3 className="text-base font-semibold text-[#1F4F57]">Amit Sharma</h3>
<p className="text-sm text-[#1F4F57]/60 mt-0.5">+91 98765 43210</p>
</div>
</div>
<div className="p-3 bg-[#1F4F57]/5 rounded-xl flex items-start gap-3">
<iconify-icon className="inline-block text-[#1F4F57]/40 text-lg mt-0.5" icon="solar:map-point-linear" mode="svg"></iconify-icon>
<p className="text-sm text-[#1F4F57]/70 leading-relaxed">Flat 402, Block B, Green Valley Apartments, Sector 88, FBD</p>
</div>
</div>
<div className="bg-white/60 backdrop-blur-lg border border-white/50 rounded-[28px] p-5 shadow-sm">
<h4 className="text-sm font-semibold text-[#1F4F57] mb-2">Issue Description</h4>
<p className="text-sm text-[#1F4F57]/70 leading-relaxed">RO is making a strange humming noise and water flow is very slow. Filters haven't been changed in 10 months.</p>
</div>
<div>
<h4 className="text-sm font-semibold text-[#1F4F57] mb-3 px-1">Customer Photos</h4>
<div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 snap-x">
<img alt="RO Unit" className="w-28 h-28 object-cover rounded-2xl snap-start border-2 border-white shadow-sm shrink-0" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div className="w-28 h-28 bg-white/50 rounded-2xl border border-dashed border-[#1F4F57]/20 flex flex-col items-center justify-center text-[#1F4F57]/40 snap-start shrink-0">
<iconify-icon className="inline-block text-2xl mb-1" icon="solar:gallery-linear" mode="svg"></iconify-icon>
<span className="text-xs">No more</span>
</div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#1F4F57]/10 p-6 pb-10 flex gap-4 z-20">
<button className="flex-1 bg-white border-2 border-[#1F4F57]/15 text-[#1F4F57] rounded-[20px] py-4 text-base font-semibold shadow-sm transition active:scale-[0.98]">Reject</button>
<button className="flex-1 bg-[#13AFA9] text-white rounded-[20px] py-4 text-base font-semibold shadow-md shadow-[#13AFA9]/30 transition active:scale-[0.98]">Accept Job</button>
</div>
</div>
</div>

<div className="relative w-[390px] min-h-[844px] h-max bg-[#F2F4F4] rounded-[48px] shadow-2xl overflow-hidden border-[6px] border-white flex flex-col shrink-0">
<div className="absolute inset-0 bg-[#1F4F57]/15">
<img alt="Full Map" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<svg className="absolute inset-0 w-full h-full pointer-events-none" viewbox="0 0 390 844">
<path d="M 150 200 Q 200 300 180 450 T 250 600" fill="none" stroke="#17B6B1" stroke-dasharray="1 12" strokeLinecap="round" strokeWidth="6"></path>
<circle cx="150" cy="200" fill="#17B6B1" r="8" stroke="white" strokeWidth="3"></circle>
<circle cx="250" cy="600" fill="#2EC5BF" r="10" stroke="white" strokeWidth="3"></circle>
</svg>
</div>
<div className="absolute top-12 left-6 right-6 flex items-center justify-between z-20">
<div className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg border border-white text-[#1F4F57]">
<iconify-icon className="inline-block text-xl" icon="solar:alt-arrow-left-linear" mode="svg" strokeWidth="1.5"></iconify-icon>
</div>
<div className="bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-white flex items-center gap-2">
<div className="w-2 h-2 bg-[#17B6B1] rounded-full animate-pulse"></div>
<span className="text-sm font-semibold text-[#1F4F57]">En Route</span>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[40px] shadow-[0_-10px_40px_rgb(0,0,0,0.06)] p-8 pb-12 z-20">
<div className="w-12 h-1.5 bg-[#1F4F57]/10 rounded-full mx-auto mb-6"></div>
<div className="flex justify-between items-end mb-6">
<div>
<h2 className="text-3xl font-semibold text-[#1F4F57] tracking-tight">12 <span className="text-lg text-[#1F4F57]/60 font-medium">min</span></h2>
<p className="text-sm text-[#1F4F57]/60 mt-1">4.2 km • Arrival at 14:15</p>
</div>
<div className="bg-[#1F4F57]/5 p-3 rounded-2xl border border-[#1F4F57]/10 flex flex-col items-center justify-center text-center">
<span className="text-xs text-[#1F4F57]/60 font-medium">Customer</span>
<span className="text-sm font-semibold text-[#1F4F57]">Amit S.</span>
</div>
</div>
<div className="flex gap-4">
<button className="w-14 h-14 shrink-0 bg-[#1F4F57]/5 text-[#1F4F57] rounded-2xl flex items-center justify-center shadow-sm border border-[#1F4F57]/10 transition active:scale-[0.98]">
<iconify-icon className="inline-block text-2xl" icon="solar:phone-linear" mode="svg" strokeWidth="1.5"></iconify-icon>
</button>
<button className="flex-1 bg-[#13AFA9] text-white rounded-2xl py-4 text-base font-semibold shadow-lg shadow-[#13AFA9]/30 flex items-center justify-center gap-2 transition active:scale-[0.98]">
<iconify-icon className="inline-block text-xl" icon="solar:routing-linear" mode="svg"></iconify-icon> Start Navigation
                </button>
</div>
</div>
</div>

<div className="relative w-[390px] min-h-[844px] h-max bg-[#F2F4F4] rounded-[48px] shadow-2xl overflow-hidden border-[6px] border-white flex flex-col shrink-0">
<div className="absolute top-[-10%] left-[-10%] w-[100%] h-[50%] bg-[#A9E3E0]/60 rounded-full mix-blend-multiply filter blur-[80px]"></div>
<div className="relative z-10 flex-1 flex flex-col h-full">
<div className="flex items-center justify-between px-6 pt-12 pb-4 bg-[#F2F4F4]/90 backdrop-blur-md z-20 sticky top-0">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-[#1F4F57]/10 text-[#1F4F57]">
<iconify-icon className="inline-block text-xl" icon="solar:close-circle-linear" mode="svg" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-lg font-semibold text-[#1F4F57] tracking-tight">Active Job</h2>
<div className="bg-[#A9E3E0]/30 text-[#1F4F57] px-3 py-1.5 rounded-full border border-[#A9E3E0]/50 flex items-center gap-1.5 shadow-sm">
<div className="w-1.5 h-1.5 bg-[#2EC5BF] rounded-full animate-pulse"></div>
<span className="text-xs font-semibold tracking-widest tabular-nums">14:22</span>
</div>
</div>
<div className="flex-1 px-6 space-y-6 pb-32 pt-2">
<div className="bg-white/80 backdrop-blur-xl rounded-[20px] p-4 shadow-sm border border-white flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-[#A9E3E0]/50 text-[#1F4F57] rounded-full flex items-center justify-center text-lg font-semibold">A</div>
<div>
<h3 className="text-sm font-semibold text-[#1F4F57]">Amit Sharma</h3>
<p className="text-xs text-[#1F4F57]/60">RO Repair Service</p>
</div>
</div>
<button className="w-8 h-8 bg-[#1F4F57]/5 rounded-full flex items-center justify-center text-[#1F4F57]/70 border border-[#1F4F57]/10">
<iconify-icon className="inline-block text-sm" icon="solar:phone-linear" mode="svg"></iconify-icon>
</button>
</div>
<div>
<h3 className="text-sm font-semibold text-[#1F4F57] mb-3 px-1">Service Proof</h3>
<div className="grid grid-cols-2 gap-3">
<div className="relative bg-white rounded-[20px] p-2 shadow-sm border border-white group">
<img alt="Before" className="w-full h-24 object-cover rounded-[12px]" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div className="absolute top-4 right-4 w-6 h-6 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#1F4F57] shadow-sm cursor-pointer">
<iconify-icon className="inline-block text-xs" icon="solar:pen-linear" mode="svg"></iconify-icon>
</div>
<p className="text-xs font-medium text-center text-[#1F4F57]/70 mt-2">Before Service</p>
</div>
<div className="bg-[#A9E3E0]/20 rounded-[20px] p-2 border-2 border-dashed border-[#A9E3E0] flex flex-col items-center justify-center text-center cursor-pointer transition">
<div className="w-10 h-10 bg-white text-[#17B6B1] rounded-full flex items-center justify-center mb-2 shadow-sm">
<iconify-icon className="inline-block text-xl" icon="solar:camera-linear" mode="svg" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-semibold text-[#1F4F57]">Add Photo</span>
<p className="text-[10px] text-[#1F4F57]/60 mt-0.5">After Service</p>
</div>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-3 px-1">
<h3 className="text-sm font-semibold text-[#1F4F57]">Spares &amp; Material</h3>
<button className="text-xs text-[#17B6B1] font-semibold bg-[#A9E3E0]/30 px-2 py-1 rounded-lg">+ Add Item</button>
</div>
<div className="bg-white/80 backdrop-blur-xl rounded-[24px] p-2 shadow-sm border border-white space-y-1">
<div className="flex justify-between items-center p-3 rounded-2xl bg-[#1F4F57]/5 border border-[#1F4F57]/10">
<div className="flex flex-col">
<span className="text-sm font-semibold text-[#1F4F57]">Sediment Filter</span>
<span className="text-xs text-[#1F4F57]/60">₹ 450 / unit</span>
</div>
<div className="flex items-center gap-3 bg-white rounded-full px-2 py-1 shadow-sm border border-[#1F4F57]/15">
<button className="w-6 h-6 rounded-full flex items-center justify-center text-[#1F4F57]/60 hover:bg-[#1F4F57]/5">
<iconify-icon className="inline-block" icon="solar:minus-linear" mode="svg"></iconify-icon>
</button>
<span className="text-xs font-semibold text-[#1F4F57] w-3 text-center">1</span>
<button className="w-6 h-6 rounded-full flex items-center justify-center text-[#1F4F57]/60 hover:bg-[#1F4F57]/5">
<iconify-icon className="inline-block" icon="solar:add-linear" mode="svg"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 text-center">
<span className="text-xs text-[#1F4F57]/40">No other parts added.</span>
</div>
</div>
</div>
<div>
<h3 className="text-sm font-semibold text-[#1F4F57] mb-3 px-1">Invoice Summary</h3>
<div className="bg-white/90 backdrop-blur-xl rounded-[24px] p-5 shadow-sm border border-white relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 h-2 bg-[radial-gradient(circle,transparent_50%,#F2F4F4_50%)] bg-[length:12px_12px] bg-bottom"></div>
<div className="space-y-3 mb-4">
<div className="flex justify-between items-center">
<span className="text-sm text-[#1F4F57]/60">Service Charge</span>
<span className="text-sm font-semibold text-[#1F4F57]">₹ 299</span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-[#1F4F57]/60">Spares Total (1)</span>
<span className="text-sm font-semibold text-[#1F4F57]">₹ 450</span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-[#1F4F57]/60">Taxes &amp; Fees</span>
<span className="text-sm font-semibold text-[#1F4F57]">₹ 0</span>
</div>
</div>
<div className="border-t border-dashed border-[#1F4F57]/20 pt-4 flex justify-between items-end mb-2">
<span className="text-sm font-semibold text-[#1F4F57]">Total Payable</span>
<span className="text-2xl font-semibold text-[#13AFA9] tracking-tight">₹ 749</span>
</div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#1F4F57]/10 p-6 pb-10 z-20">
<button className="w-full bg-[#13AFA9] text-white rounded-[20px] py-4 text-base font-semibold shadow-md shadow-[#13AFA9]/30 transition active:scale-[0.98] flex items-center justify-center gap-2">
                    Generate Invoice <iconify-icon className="inline-block text-xl" icon="solar:bill-linear" mode="svg"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="relative w-[390px] min-h-[844px] h-max bg-[#F2F4F4] rounded-[48px] shadow-2xl overflow-hidden border-[6px] border-white flex flex-col shrink-0">
<div className="absolute top-[-20%] left-[-20%] w-[100%] h-[60%] bg-[#A9E3E0]/70 rounded-full blur-[100px]"></div>
<div className="relative z-10 flex-1 flex flex-col p-6 pt-12">
<div className="flex items-center justify-between mb-8">
<div className="w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm border border-white text-[#1F4F57]">
<iconify-icon className="inline-block text-xl" icon="solar:alt-arrow-left-linear" mode="svg" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-base font-semibold text-[#1F4F57]">Payment Collection</h2>
<div className="w-10 h-10"></div>
</div>
<div className="text-center mb-8">
<p className="text-sm text-[#1F4F57]/60 font-medium mb-1">Total Amount Due</p>
<h1 className="text-5xl font-semibold text-[#1F4F57] tracking-tight">₹ 749</h1>
</div>
<div className="bg-white rounded-[32px] p-8 shadow-[0_10px_40px_rgb(0,0,0,0.04)] border border-[#1F4F57]/10 flex flex-col items-center mb-8 relative">
<div className="absolute -top-4 bg-[#A9E3E0]/40 text-[#1F4F57] border border-[#A9E3E0] px-4 py-1.5 rounded-full flex items-center gap-2 text-xs font-semibold shadow-sm">
<iconify-icon className="inline-block text-base animate-spin" icon="solar:refresh-circle-linear" mode="svg" strokeWidth="2"></iconify-icon> Pending
                </div>
<div className="w-full aspect-square bg-[#1F4F57]/5 rounded-2xl border-2 border-dashed border-[#1F4F57]/15 flex items-center justify-center p-4 mb-6 relative">
<div className="w-full h-full border-[12px] border-[#1F4F57] rounded-xl relative p-2 flex flex-wrap gap-1 content-start overflow-hidden">
<div className="w-6 h-6 bg-[#1F4F57] rounded-sm"></div><div className="w-6 h-6"></div><div className="w-6 h-6 bg-[#1F4F57] rounded-sm"></div><div className="w-6 h-6 bg-[#1F4F57] rounded-sm"></div>
<div className="w-6 h-6"></div><div className="w-6 h-6 bg-[#1F4F57] rounded-sm"></div><div className="w-6 h-6"></div><div className="w-6 h-6 bg-[#1F4F57] rounded-sm"></div>
<div className="w-6 h-6 bg-[#1F4F57] rounded-sm"></div><div className="w-6 h-6 bg-[#1F4F57] rounded-sm"></div><div className="w-6 h-6 bg-[#1F4F57] rounded-sm"></div><div className="w-6 h-6"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
<span className="font-bold text-[#17B6B1] tracking-tighter">UPI</span>
</div>
</div>
</div>
<p className="text-sm font-medium text-[#1F4F57]/70">Scan to pay via any UPI app</p>
</div>
<div className="mt-auto space-y-3 pb-8">
<button className="w-full bg-white border border-[#1F4F57]/20 text-[#1F4F57] rounded-2xl py-4 text-base font-medium shadow-sm flex items-center justify-center gap-2">
<iconify-icon className="inline-block text-xl" icon="solar:share-linear" mode="svg"></iconify-icon> Share Payment Link
                </button>
<button className="w-full bg-[#13AFA9] text-white rounded-2xl py-4 text-base font-semibold shadow-md flex items-center justify-center gap-2">
<iconify-icon className="inline-block text-xl" icon="solar:wallet-money-linear" mode="svg"></iconify-icon> Collect Cash / Mark Paid
                </button>
</div>
</div>
</div>

<div className="relative w-[390px] min-h-[844px] h-max bg-[#F2F4F4] rounded-[48px] shadow-2xl overflow-hidden border-[6px] border-white flex flex-col shrink-0">
<div className="absolute top-[-10%] right-[-10%] w-[60%] h-[30%] bg-[#2EC5BF] rounded-full mix-blend-multiply filter blur-[80px] opacity-40"></div>
<div className="relative z-10 flex-1 flex flex-col h-full pb-28">
<div className="px-6 pt-12 pb-4">
<h2 className="text-2xl font-semibold text-[#1F4F57] tracking-tight">Earnings</h2>
</div>
<div className="px-6 mb-6">
<div className="bg-gradient-to-br from-[#1F4F57] to-[#13AFA9] rounded-[28px] p-6 text-white shadow-xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
<p className="text-sm text-white/80 font-medium mb-1">This Week</p>
<h3 className="text-4xl font-semibold tracking-tight mb-4">₹ 12,450</h3>
<div className="flex items-center gap-4 text-sm bg-white/10 w-max px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
<div className="flex items-center gap-1 text-[#A9E3E0]">
<iconify-icon className="inline-block" icon="solar:round-arrow-right-up-linear" mode="svg"></iconify-icon> +14.5%
                        </div>
<span className="text-white/60">vs last week</span>
</div>
</div>
</div>
<div className="px-6 mb-8">
<div className="bg-white/80 backdrop-blur-xl rounded-[24px] p-5 shadow-sm border border-white">
<div className="flex justify-between items-end h-32 gap-2 mb-2">
<div className="flex-1 flex flex-col justify-end items-center gap-2 group">
<div className="w-full bg-[#A9E3E0]/40 rounded-md transition-all h-[40%] group-hover:bg-[#2EC5BF]"></div>
<span className="text-xs text-[#1F4F57]/40">M</span>
</div>
<div className="flex-1 flex flex-col justify-end items-center gap-2 group">
<div className="w-full bg-[#A9E3E0]/40 rounded-md transition-all h-[65%] group-hover:bg-[#2EC5BF]"></div>
<span className="text-xs text-[#1F4F57]/40">T</span>
</div>
<div className="flex-1 flex flex-col justify-end items-center gap-2 group">
<div className="w-full bg-[#17B6B1] rounded-md transition-all h-[80%] shadow-sm"></div>
<span className="text-xs font-semibold text-[#1F4F57]">W</span>
</div>
<div className="flex-1 flex flex-col justify-end items-center gap-2 group">
<div className="w-full bg-[#A9E3E0]/40 rounded-md transition-all h-[50%] group-hover:bg-[#2EC5BF]"></div>
<span className="text-xs text-[#1F4F57]/40">T</span>
</div>
<div className="flex-1 flex flex-col justify-end items-center gap-2 group">
<div className="w-full bg-[#A9E3E0]/40 rounded-md transition-all h-[30%] group-hover:bg-[#2EC5BF]"></div>
<span className="text-xs text-[#1F4F57]/40">F</span>
</div>
<div className="flex-1 flex flex-col justify-end items-center gap-2 group">
<div className="w-full bg-[#A9E3E0]/40 rounded-md transition-all h-[90%] group-hover:bg-[#2EC5BF]"></div>
<span className="text-xs text-[#1F4F57]/40">S</span>
</div>
<div className="flex-1 flex flex-col justify-end items-center gap-2 group">
<div className="w-full bg-[#A9E3E0]/40 rounded-md transition-all h-[20%] group-hover:bg-[#2EC5BF]"></div>
<span className="text-xs text-[#1F4F57]/40">S</span>
</div>
</div>
</div>
</div>
<div className="px-6 space-y-4">
<h3 className="text-sm font-semibold text-[#1F4F57] px-1">Recent Transactions</h3>
<div className="bg-white/80 backdrop-blur-xl border border-white rounded-[24px] p-2 shadow-sm space-y-1">
<div className="flex items-center justify-between p-3 rounded-2xl hover:bg-[#1F4F57]/5 transition">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-[#A9E3E0]/30 text-[#2EC5BF] flex items-center justify-center">
<iconify-icon className="inline-block text-xl" icon="solar:wallet-money-linear" mode="svg"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-[#1F4F57]">Payout</h4>
<p className="text-xs text-[#1F4F57]/60">Today, 08:00 AM</p>
</div>
</div>
<span className="text-sm font-semibold text-[#2EC5BF]">+₹ 4,200</span>
</div>
<div className="flex items-center justify-between p-3 rounded-2xl hover:bg-[#1F4F57]/5 transition">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-[#A9E3E0]/30 text-[#17B6B1] flex items-center justify-center">
<iconify-icon className="inline-block text-xl" icon="solar:case-linear" mode="svg"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-[#1F4F57]">Job #4029</h4>
<p className="text-xs text-[#1F4F57]/60">Yesterday, 14:30 PM</p>
</div>
</div>
<span className="text-sm font-semibold text-[#1F4F57]">₹ 749</span>
</div>
</div>
</div>
</div>
<div className="absolute bottom-6 left-6 right-6 bg-white/70 backdrop-blur-2xl border border-white/60 rounded-[32px] p-2 shadow-[0_10px_40px_rgb(0,0,0,0.06)] z-50">
<div className="flex justify-between items-center px-4 py-2">
<div className="flex flex-col items-center gap-1 text-[#1F4F57]/40">
<iconify-icon className="inline-block text-2xl" icon="solar:home-2-linear" mode="svg" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">Home</span>
</div>
<div className="flex flex-col items-center gap-1 text-[#1F4F57]/40">
<iconify-icon className="inline-block text-2xl" icon="solar:case-linear" mode="svg" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">Jobs</span>
</div>
<div className="flex flex-col items-center gap-1 text-[#17B6B1]">
<iconify-icon className="inline-block text-2xl" icon="solar:wallet-linear" mode="svg" strokeWidth="2"></iconify-icon>
<span className="text-xs font-medium">Earnings</span>
</div>
<div className="flex flex-col items-center gap-1 text-[#1F4F57]/40">
<iconify-icon className="inline-block text-2xl" icon="solar:user-linear" mode="svg" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">Profile</span>
</div>
</div>
</div>
</div>

<div className="relative w-[390px] min-h-[844px] h-max bg-[#F2F4F4] rounded-[48px] shadow-2xl overflow-hidden border-[6px] border-white flex flex-col shrink-0">
<div className="absolute top-[-10%] right-[-10%] w-[60%] h-[30%] bg-[#17B6B1] rounded-full mix-blend-multiply filter blur-[80px] opacity-40"></div>
<div className="relative z-10 flex-1 flex flex-col h-full">
<div className="px-6 pt-12 pb-4">
<h2 className="text-2xl font-semibold text-[#1F4F57] tracking-tight">History</h2>
</div>
<div className="px-6 mb-4">
<div className="bg-white/60 backdrop-blur-md p-1 rounded-2xl flex border border-white/50 shadow-sm">
<button className="flex-1 py-2 text-sm font-semibold bg-white rounded-xl shadow-sm text-[#1F4F57] transition">Today</button>
<button className="flex-1 py-2 text-sm font-medium text-[#1F4F57]/60 rounded-xl hover:text-[#1F4F57] transition">Weekly</button>
<button className="flex-1 py-2 text-sm font-medium text-[#1F4F57]/60 rounded-xl hover:text-[#1F4F57] transition">Monthly</button>
</div>
</div>
<div className="flex gap-2 px-6 overflow-x-auto no-scrollbar pb-2">
<button className="px-4 py-1.5 bg-[#1F4F57] text-white text-xs font-semibold rounded-full shrink-0">All</button>
<button className="px-4 py-1.5 bg-white border border-[#1F4F57]/20 text-[#1F4F57]/70 text-xs font-medium rounded-full shrink-0">Accepted</button>
<button className="px-4 py-1.5 bg-white border border-[#1F4F57]/20 text-[#1F4F57]/70 text-xs font-medium rounded-full shrink-0">Rejected</button>
<button className="px-4 py-1.5 bg-white border border-[#1F4F57]/20 text-[#1F4F57]/70 text-xs font-medium rounded-full shrink-0">Completed</button>
</div>
<div className="flex-1 px-6 py-4 space-y-4 pb-28">
<div className="bg-white/80 backdrop-blur-lg border border-white rounded-[24px] p-4 shadow-sm">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-2">
<div className="w-10 h-10 rounded-xl bg-[#A9E3E0]/30 text-[#2EC5BF] flex items-center justify-center">
<iconify-icon className="inline-block text-xl" icon="solar:check-circle-linear" mode="svg"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-[#1F4F57]">RO Repair</h4>
<p className="text-xs text-[#1F4F57]/60">Today, 10:30 AM</p>
</div>
</div>
<span className="text-sm font-semibold text-[#1F4F57]">₹ 749</span>
</div>
<div className="flex items-center gap-2 text-xs text-[#1F4F57]/60 bg-[#1F4F57]/5 px-3 py-2 rounded-xl">
<iconify-icon className="inline-block" icon="solar:user-linear" mode="svg"></iconify-icon> Amit Sharma (Sector 88)
                    </div>
</div>
<div className="bg-white/80 backdrop-blur-lg border border-white rounded-[24px] p-4 shadow-sm opacity-70">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-2">
<div className="w-10 h-10 rounded-xl bg-[#1F4F57]/10 text-[#1F4F57]/50 flex items-center justify-center">
<iconify-icon className="inline-block text-xl" icon="solar:close-circle-linear" mode="svg"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-[#1F4F57]">Installation</h4>
<p className="text-xs text-[#1F4F57]/60">Today, 09:15 AM</p>
</div>
</div>
<span className="text-xs font-semibold text-[#1F4F57]/70 bg-[#1F4F57]/10 px-2 py-1 rounded-lg">Rejected</span>
</div>
<div className="flex items-center gap-2 text-xs text-[#1F4F57]/60 bg-[#1F4F57]/5 px-3 py-2 rounded-xl">
<iconify-icon className="inline-block" icon="solar:user-linear" mode="svg"></iconify-icon> Priya S. (Sector 12)
                    </div>
</div>
</div>
</div>
<div className="absolute bottom-6 left-6 right-6 bg-white/70 backdrop-blur-2xl border border-white/60 rounded-[32px] p-2 shadow-[0_10px_40px_rgb(0,0,0,0.06)] z-50">
<div className="flex justify-between items-center px-4 py-2">
<div className="flex flex-col items-center gap-1 text-[#1F4F57]/40">
<iconify-icon className="inline-block text-2xl" icon="solar:home-2-linear" mode="svg" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">Home</span>
</div>
<div className="flex flex-col items-center gap-1 text-[#17B6B1]">
<iconify-icon className="inline-block text-2xl" icon="solar:case-linear" mode="svg" strokeWidth="2"></iconify-icon>
<span className="text-xs font-medium">Jobs</span>
</div>
<div className="flex flex-col items-center gap-1 text-[#1F4F57]/40">
<iconify-icon className="inline-block text-2xl" icon="solar:wallet-linear" mode="svg" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">Earnings</span>
</div>
<div className="flex flex-col items-center gap-1 text-[#1F4F57]/40">
<iconify-icon className="inline-block text-2xl" icon="solar:user-linear" mode="svg" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">Profile</span>
</div>
</div>
</div>
</div>

<div className="relative w-[390px] min-h-[844px] h-max bg-[#F2F4F4] rounded-[48px] shadow-2xl overflow-hidden border-[6px] border-white flex flex-col shrink-0">
<div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-[#A9E3E0]/40 to-transparent opacity-60"></div>
<div className="relative z-10 flex-1 pb-28">
<div className="px-6 pt-12 pb-4 text-center">
<h2 className="text-xl font-semibold text-[#1F4F57] tracking-tight">Profile</h2>
</div>
<div className="px-6 flex flex-col items-center mt-2 mb-8">
<div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-4 relative">
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div className="absolute bottom-0 right-0 w-6 h-6 bg-[#2EC5BF] border-2 border-white rounded-full"></div>
</div>
<h3 className="text-xl font-semibold text-[#1F4F57] tracking-tight">Rahul Verma</h3>
<p className="text-sm text-[#1F4F57]/60 mt-1">+91 98765 12345</p>
<div className="flex items-center gap-1 mt-3 bg-white px-3 py-1.5 rounded-full shadow-sm border border-[#1F4F57]/10">
<iconify-icon className="inline-block text-[#2EC5BF] text-sm" icon="solar:star-bold" mode="svg"></iconify-icon>
<span className="text-sm font-semibold text-[#1F4F57]">4.8</span>
<span className="text-xs text-[#1F4F57]/40 ml-1">(120 jobs)</span>
</div>
</div>
<div className="px-6 space-y-4">
<div className="bg-white/80 backdrop-blur-xl border border-white rounded-[28px] p-2 shadow-sm">
<button className="w-full flex items-center justify-between p-4 hover:bg-[#1F4F57]/5 rounded-2xl transition">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-[#A9E3E0]/30 text-[#17B6B1] flex items-center justify-center">
<iconify-icon className="inline-block text-xl" icon="solar:document-text-linear" mode="svg"></iconify-icon>
</div>
<span className="text-sm font-semibold text-[#1F4F57]">Personal Details</span>
</div>
<iconify-icon className="inline-block text-[#1F4F57]/40" icon="solar:alt-arrow-right-linear" mode="svg"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-4 hover:bg-[#1F4F57]/5 rounded-2xl transition">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-[#A9E3E0]/30 text-[#17B6B1] flex items-center justify-center">
<iconify-icon className="inline-block text-xl" icon="solar:card-linear" mode="svg"></iconify-icon>
</div>
<span className="text-sm font-semibold text-[#1F4F57]">Bank Information</span>
</div>
<iconify-icon className="inline-block text-[#1F4F57]/40" icon="solar:alt-arrow-right-linear" mode="svg"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-4 hover:bg-[#1F4F57]/5 rounded-2xl transition">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-[#A9E3E0]/30 text-[#17B6B1] flex items-center justify-center">
<iconify-icon className="inline-block text-xl" icon="solar:settings-linear" mode="svg"></iconify-icon>
</div>
<span className="text-sm font-semibold text-[#1F4F57]">Settings</span>
</div>
<iconify-icon className="inline-block text-[#1F4F57]/40" icon="solar:alt-arrow-right-linear" mode="svg"></iconify-icon>
</button>
</div>
<div className="bg-white/80 backdrop-blur-xl border border-white rounded-[28px] p-2 shadow-sm">
<button className="w-full flex items-center justify-between p-4 hover:bg-[#1F4F57]/5 rounded-2xl transition text-[#1F4F57]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-[#1F4F57]/10 text-[#1F4F57] flex items-center justify-center">
<iconify-icon className="inline-block text-xl" icon="solar:logout-2-linear" mode="svg"></iconify-icon>
</div>
<span className="text-sm font-semibold">Logout</span>
</div>
</button>
</div>
</div>
</div>
<div className="absolute bottom-6 left-6 right-6 bg-white/70 backdrop-blur-2xl border border-white/60 rounded-[32px] p-2 shadow-[0_10px_40px_rgb(0,0,0,0.06)] z-50">
<div className="flex justify-between items-center px-4 py-2">
<div className="flex flex-col items-center gap-1 text-[#1F4F57]/40">
<iconify-icon className="inline-block text-2xl" icon="solar:home-2-linear" mode="svg" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">Home</span>
</div>
<div className="flex flex-col items-center gap-1 text-[#1F4F57]/40">
<iconify-icon className="inline-block text-2xl" icon="solar:case-linear" mode="svg" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">Jobs</span>
</div>
<div className="flex flex-col items-center gap-1 text-[#1F4F57]/40">
<iconify-icon className="inline-block text-2xl" icon="solar:wallet-linear" mode="svg" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">Earnings</span>
</div>
<div className="flex flex-col items-center gap-1 text-[#17B6B1]">
<iconify-icon className="inline-block text-2xl" icon="solar:user-linear" mode="svg" strokeWidth="2"></iconify-icon>
<span className="text-xs font-medium">Profile</span>
</div>
</div>
</div>
</div>

    </>
  );
}
