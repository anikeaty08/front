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
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
brand: {
blue: '#3D5AFE',
indigo: '#4B6FFF',
darkIndigo: '#5C2CFE',
purple: '#C8C2FF',
sky: '#7BC4FF',
aqua: '#00D2FF',
bg: '#F7F9FE',
},
neutral: {
900: '#1C1C28',
600: '#4B5563',
400: '#9CA3AF',
}
},
boxShadow: {
'soft': '0 24px 48px -12px rgba(61, 90, 254, 0.12)',
'glow': '0 0 40px -10px rgba(61, 90, 254, 0.2)',
}
}
}
}



        lucide.createIcons();
    
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
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-[#F7F9FE]/90 backdrop-blur-md border-b border-[#EEF1FF]">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="sparkles"></i>
</div>
<span className="text-xl font-bold tracking-tight text-[#1C1C28]">TalentFlip</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-[#4B5563] hover:text-[#3D5AFE] transition-colors" href="#">How it works</a>
<a className="text-sm font-medium text-[#4B5563] hover:text-[#3D5AFE] transition-colors" href="#">For Companies</a>
<a className="text-sm font-medium text-[#4B5563] hover:text-[#3D5AFE] transition-colors" href="#">Success Stories</a>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-semibold text-[#1C1C28] hover:text-[#3D5AFE] transition-colors">Log In</button>
<button className="bg-[#3D5AFE] hover:bg-[#5C2CFE] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-[#3D5AFE]/20">
                    Get Started
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#C8C2FF] rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-pulse"></div>
<div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-[#7BC4FF] rounded-full mix-blend-multiply filter blur-[100px] opacity-30"></div>
</div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#EEF1FF] shadow-sm mb-8">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D2FF] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#3D5AFE]"></span>
</span>
<span className="text-xs font-medium text-[#4B5563] tracking-wide uppercase">AI-Powered Career Matching</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] text-[#1C1C28] mb-6">
                Stop Applying.<br/>
<span className="text-gradient">Start Getting Invited.</span>
</h1>
<p className="text-lg md:text-xl text-[#4B5563] max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                Let AI analyze your skills and match you with companies already looking for you. Skip the applications and get direct interview invites.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="w-full sm:w-auto bg-[#3D5AFE] hover:bg-[#5C2CFE] text-white px-8 py-4 rounded-full text-base font-semibold transition-all shadow-xl shadow-[#3D5AFE]/25 flex items-center justify-center gap-2 group">
                    Create Your Profile
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#1C1C28] border border-[#EEF1FF] px-8 py-4 rounded-full text-base font-semibold transition-all shadow-sm flex items-center justify-center gap-2">
<i className="w-4 h-4 text-[#3D5AFE]" data-lucide="play-circle"></i>
                    How It Works
                </button>
</div>

<div className="relative max-w-4xl mx-auto">
<div className="absolute inset-0 bg-gradient-brand blur-[60px] opacity-10 rounded-full"></div>

<div className="relative bg-white rounded-3xl p-6 md:p-8 shadow-soft border border-[#EEF1FF]">
<div className="flex items-start justify-between mb-8">
<div className="flex items-center gap-4">
<div className="relative">
<div className="w-16 h-16 rounded-2xl bg-gray-100 overflow-hidden">
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<div className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full shadow-md">
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
</div>
</div>
<div className="text-left">
<h3 className="text-lg font-semibold text-[#1C1C28]">Sarah Jenkins</h3>
<p className="text-sm text-[#4B5563]">Product Designer • 5 Yrs Exp</p>
</div>
</div>
<div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#F7F9FE] rounded-full border border-[#EEF1FF]">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-medium text-[#4B5563]">Open to work</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="bg-[#F7F9FE] p-4 rounded-2xl border border-[#EEF1FF] text-left">
<div className="text-xs font-medium text-[#9CA3AF] mb-1">Match Score</div>
<div className="text-2xl font-bold text-[#1C1C28]">98%</div>
<div className="w-full bg-gray-200 h-1.5 rounded-full mt-2 overflow-hidden">
<div className="bg-gradient-brand h-full w-[98%] rounded-full"></div>
</div>
</div>
<div className="bg-[#F7F9FE] p-4 rounded-2xl border border-[#EEF1FF] text-left">
<div className="text-xs font-medium text-[#9CA3AF] mb-1">Weekly Views</div>
<div className="text-2xl font-bold text-[#1C1C28]">1,240</div>
<div className="text-xs text-green-600 mt-2 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="trending-up"></i> +12% vs last week
                            </div>
</div>
<div className="bg-[#F7F9FE] p-4 rounded-2xl border border-[#EEF1FF] text-left">
<div className="text-xs font-medium text-[#9CA3AF] mb-1">Invites</div>
<div className="text-2xl font-bold text-[#1C1C28]">14</div>
<div className="flex -space-x-2 mt-2">
<div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
<div className="w-6 h-6 rounded-full bg-gray-400 border-2 border-white"></div>
<div className="w-6 h-6 rounded-full bg-gray-500 border-2 border-white"></div>
</div>
</div>
</div>

<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full bg-[#EEF1FF] text-[#3D5AFE] text-xs font-semibold border border-[#C8C2FF]/30">Figma</span>
<span className="px-3 py-1 rounded-full bg-[#EEF1FF] text-[#3D5AFE] text-xs font-semibold border border-[#C8C2FF]/30">Prototyping</span>
<span className="px-3 py-1 rounded-full bg-[#EEF1FF] text-[#3D5AFE] text-xs font-semibold border border-[#C8C2FF]/30">User Research</span>
<span className="px-3 py-1 rounded-full bg-white text-[#9CA3AF] text-xs font-medium border border-[#EEF1FF]">+4 more</span>
</div>
</div>

<div className="absolute -right-4 md:-right-12 top-12 bg-white p-4 rounded-xl shadow-soft border border-[#EEF1FF] animate-[bounce_3s_infinite]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-[#3D5AFE]">
<i className="w-5 h-5" data-lucide="mail"></i>
</div>
<div className="text-left">
<div className="text-xs text-[#9CA3AF]">New Invitation</div>
<div className="text-sm font-semibold text-[#1C1C28]">Stripe</div>
</div>
</div>
</div>

<div className="absolute -left-4 md:-left-12 bottom-12 bg-white p-4 rounded-xl shadow-soft border border-[#EEF1FF] animate-[bounce_4s_infinite]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-[#5C2CFE]">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<div className="text-left">
<div className="text-xs text-[#9CA3AF]">Skill Match</div>
<div className="text-sm font-semibold text-[#1C1C28]">Top 1% Rank</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-semibold text-[#1C1C28] tracking-tight mb-4">Your journey to the perfect role</h2>
<p className="text-[#4B5563] max-w-xl mx-auto">We've simplified the hiring process. No cover letters, no cold applications.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group p-8 rounded-3xl bg-white border border-[#EEF1FF] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#3D5AFE] flex items-center justify-center mb-6 group-hover:bg-[#3D5AFE] group-hover:text-white transition-colors">
<span className="font-bold text-lg">1</span>
</div>
<h3 className="text-lg font-semibold text-[#1C1C28] mb-3">Create Profile</h3>
<p className="text-sm text-[#4B5563] leading-relaxed">Import your LinkedIn or resume in seconds. Our AI builds your highlighted profile.</p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-[#EEF1FF] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-2xl bg-indigo-50 text-[#4B6FFF] flex items-center justify-center mb-6 group-hover:bg-[#4B6FFF] group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-lg font-semibold text-[#1C1C28] mb-3">AI Analytics</h3>
<p className="text-sm text-[#4B5563] leading-relaxed">We analyze your skills against market demand and optimize your visibility.</p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-[#EEF1FF] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#5C2CFE] flex items-center justify-center mb-6 group-hover:bg-[#5C2CFE] group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="bell"></i>
</div>
<h3 className="text-lg font-semibold text-[#1C1C28] mb-3">Get Invited</h3>
<p className="text-sm text-[#4B5563] leading-relaxed">Receive interview requests directly from top companies. You are in control.</p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-[#EEF1FF] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#00D2FF] flex items-center justify-center mb-6 group-hover:bg-[#00D2FF] group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="check-circle"></i>
</div>
<h3 className="text-lg font-semibold text-[#1C1C28] mb-3">Choose Path</h3>
<p className="text-sm text-[#4B5563] leading-relaxed">Compare offers, salaries, and benefits to choose the role that fits you best.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="rounded-[2.5rem] overflow-hidden bg-white shadow-soft border border-[#EEF1FF] flex flex-col md:flex-row">

<div className="w-full md:w-1/2 bg-gradient-brand p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full filter blur-[50px] translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00D2FF] opacity-20 rounded-full filter blur-[50px] -translate-x-1/2 translate-y-1/2"></div>
<div className="relative z-10">
<div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold mb-6 border border-white/20">
                        Free Resource
                    </div>
<h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6 tracking-tight">Get the Ultimate Career Transformation Guide</h2>
<p className="text-blue-100 leading-relaxed text-lg">Learn the secrets to profile optimization, salary negotiation, and how AI matches really work.</p>
</div>
<div className="relative z-10 mt-12 flex gap-4">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#4B6FFF]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#4B6FFF]" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#4B6FFF]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<div className="text-blue-100 text-sm flex items-center">Downloaded by 10k+ pros</div>
</div>
</div>

<div className="w-full md:w-1/2 p-12 lg:p-16 bg-white">
<form className="space-y-6">
<div>
<label className="block text-sm font-medium text-[#4B5563] mb-2">Full Name</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3D5AFE] focus:ring-2 focus:ring-[#3D5AFE]/20 outline-none transition-all text-[#1C1C28] placeholder-gray-400 bg-[#F7F9FE]" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-[#4B5563] mb-2">Work Email</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3D5AFE] focus:ring-2 focus:ring-[#3D5AFE]/20 outline-none transition-all text-[#1C1C28] placeholder-gray-400 bg-[#F7F9FE]" placeholder="john@company.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-[#4B5563] mb-2">Years of Experience</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3D5AFE] focus:ring-2 focus:ring-[#3D5AFE]/20 outline-none transition-all text-[#1C1C28] bg-[#F7F9FE] appearance-none cursor-pointer">
<option>0-2 Years</option>
<option>3-5 Years</option>
<option>5-10 Years</option>
<option>10+ Years</option>
</select>
<i className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<button className="w-full bg-[#1C1C28] hover:bg-[#3D5AFE] text-white font-semibold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl mt-4" type="button">
                        Download Free Guide
                    </button>
</form>
</div>
</div>
</section>

<section className="py-24 bg-[#F7F9FE] border-t border-[#EEF1FF]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-[#1C1C28] tracking-tight">Transforming careers with proven results</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-[#EEF1FF] text-center">
<div className="text-4xl font-bold text-[#3D5AFE] mb-2">500+</div>
<div className="text-sm font-medium text-[#4B5563] uppercase tracking-wide">Top Companies</div>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-[#EEF1FF] text-center">
<div className="text-4xl font-bold text-[#3D5AFE] mb-2">24k+</div>
<div className="text-sm font-medium text-[#4B5563] uppercase tracking-wide">Matches Made</div>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-[#EEF1FF] text-center">
<div className="text-4xl font-bold text-[#3D5AFE] mb-2">90%</div>
<div className="text-sm font-medium text-[#4B5563] uppercase tracking-wide">Success Rate</div>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-[#EEF1FF] text-center">
<div className="text-4xl font-bold text-[#3D5AFE] mb-2">50%</div>
<div className="text-sm font-medium text-[#4B5563] uppercase tracking-wide">Avg Salary Increase</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="w-full lg:w-1/2 relative">
<div className="absolute inset-0 bg-blue-100 rounded-full blur-[80px] opacity-40"></div>
<div className="relative bg-white rounded-2xl shadow-soft border border-[#EEF1FF] overflow-hidden">

<div className="border-b border-gray-100 p-4 flex items-center justify-between bg-gray-50/50">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="text-xs text-gray-400 font-medium">Recruiter Dashboard</div>
</div>

<div className="flex">

<div className="w-16 border-r border-gray-100 p-3 flex flex-col gap-4 items-center bg-gray-50/30">
<div className="w-8 h-8 rounded-lg bg-blue-100 text-[#3D5AFE] flex items-center justify-center">
<i className="w-4 h-4" data-lucide="users"></i>
</div>
<div className="w-8 h-8 rounded-lg text-gray-400 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="message-square"></i>
</div>
<div className="w-8 h-8 rounded-lg text-gray-400 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="calendar"></i>
</div>
</div>

<div className="flex-1 p-6">
<div className="flex justify-between items-center mb-6">
<h4 className="font-semibold text-[#1C1C28]">Top Matches</h4>
<span className="text-xs font-medium bg-[#EEF1FF] text-[#3D5AFE] px-2 py-1 rounded">AI Curated</span>
</div>
<div className="space-y-4">

<div className="p-4 rounded-xl border border-[#3D5AFE] bg-[#F7F9FE] relative">
<div className="absolute top-4 right-4 text-xs font-bold text-[#3D5AFE]">99% Match</div>
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-gradient-brand"></div>
<div>
<div className="font-semibold text-sm text-[#1C1C28]">Candidate #8420</div>
<div className="text-xs text-[#4B5563]">Senior Developer</div>
</div>
</div>
<div className="flex gap-2 mt-2">
<span className="text-[10px] bg-white border border-gray-200 px-2 py-1 rounded text-gray-500">React</span>
<span className="text-[10px] bg-white border border-gray-200 px-2 py-1 rounded text-gray-500">Node.js</span>
</div>
<div className="mt-4 flex gap-2">
<button className="flex-1 bg-[#3D5AFE] text-white text-xs font-medium py-2 rounded-lg">Invite to Interview</button>
</div>
</div>

<div className="p-4 rounded-xl border border-gray-100 bg-white opacity-60">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200"></div>
<div>
<div className="font-semibold text-sm text-[#1C1C28]">Candidate #9122</div>
<div className="text-xs text-[#4B5563]">Product Manager</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2">
<h2 className="text-3xl md:text-4xl font-semibold text-[#1C1C28] tracking-tight mb-6">See how recruiters view your profile</h2>
<p className="text-[#4B5563] text-lg mb-8 leading-relaxed">
                        Recruiters don't see a boring resume. They see a standardized, AI-highlighted profile that puts your best skills forward.
                    </p>
<div className="space-y-4 mb-10">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-[#E0F7FA] text-[#00D2FF] flex items-center justify-center shrink-0">
<i className="w-3.5 h-3.5 stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-[#1C1C28] font-medium">AI-powered visibility boost</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-[#E0F7FA] text-[#00D2FF] flex items-center justify-center shrink-0">
<i className="w-3.5 h-3.5 stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-[#1C1C28] font-medium">Verified opportunities only</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-[#E0F7FA] text-[#00D2FF] flex items-center justify-center shrink-0">
<i className="w-3.5 h-3.5 stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-[#1C1C28] font-medium">Reduced noise, higher accuracy</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-[#E0F7FA] text-[#00D2FF] flex items-center justify-center shrink-0">
<i className="w-3.5 h-3.5 stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-[#1C1C28] font-medium">Direct interview invitations</span>
</div>
</div>
<button className="bg-[#1C1C28] hover:bg-[#3D5AFE] text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl">
                        Create Your Profile
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F7F9FE]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-[#1C1C28] tracking-tight mb-4">What our members say</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-soft border border-[#EEF1FF]">
<div className="flex gap-1 text-[#FFC107] mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-[#4B5563] mb-6 leading-relaxed">"I stopped applying to jobs 3 months ago. TalentFlip sent me 5 invites in my first week. It's magic."</p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div>
<div className="text-sm font-semibold text-[#1C1C28]">Elena Rodriguez</div>
<div className="text-xs text-[#9CA3AF]">Marketing Director</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-soft border border-[#EEF1FF]">
<div className="flex gap-1 text-[#FFC107] mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-[#4B5563] mb-6 leading-relaxed">"The AI matching is incredibly accurate. The roles I get invited to are exactly what I'm looking for."</p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div>
<div className="text-sm font-semibold text-[#1C1C28]">Marcus Chen</div>
<div className="text-xs text-[#9CA3AF]">Senior Software Engineer</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-soft border border-[#EEF1FF]">
<div className="flex gap-1 text-[#FFC107] mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-[#4B5563] mb-6 leading-relaxed">"TalentFlip changed how I view job hunting. No more ghosting, just real conversations with real companies."</p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div>
<div className="text-sm font-semibold text-[#1C1C28]">Sarah Miller</div>
<div className="text-xs text-[#9CA3AF]">Product Manager</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-[#1C1C28] text-center mb-12 tracking-tight">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white border border-[#EEF1FF] rounded-xl overflow-hidden transition-all duration-300 open:shadow-md">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-[#1C1C28]">Is TalentFlip free for candidates?</span>
<i className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-[#4B5563] text-sm leading-relaxed">
                        Yes, TalentFlip is completely free for professionals looking for work. We charge companies when they successfully hire top talent.
                    </div>
</details>
<details className="group bg-white border border-[#EEF1FF] rounded-xl overflow-hidden transition-all duration-300">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-[#1C1C28]">How does the AI matching work?</span>
<i className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-[#4B5563] text-sm leading-relaxed">
                        Our AI analyzes thousands of data points from your profile and matches them with company requirements, culture fit, and future potential to ensure high-quality connections.
                    </div>
</details>
<details className="group bg-white border border-[#EEF1FF] rounded-xl overflow-hidden transition-all duration-300">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-[#1C1C28]">Can I stay anonymous?</span>
<i className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-[#4B5563] text-sm leading-relaxed">
                        Absolutely. You can choose to hide your profile from your current employer or remain completely anonymous until you accept an interview request.
                    </div>
</details>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden">

<div className="absolute inset-0 bg-[#F7F9FE]" style={{backgroundImage: 'radial-gradient(#C8C2FF 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: '0.5'}}></div>

<div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#7BC4FF] rounded-full filter blur-[100px] opacity-20"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4B6FFF] rounded-full filter blur-[100px] opacity-20"></div>
<div className="relative max-w-4xl mx-auto px-6 text-center z-10">
<h2 className="text-4xl md:text-5xl font-bold text-[#1C1C28] mb-6 tracking-tight">
                Stop applying. <br/><span className="text-[#3D5AFE]">Start getting invited.</span>
</h2>
<p className="text-lg text-[#4B5563] mb-10">Join 2M+ professionals finding their dream jobs through AI.</p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto mb-12 border-b border-gray-200 pb-12">
<div>
<div className="text-2xl font-bold text-[#1C1C28]">100%</div>
<div className="text-xs text-gray-500 mt-1">Matched Profiles</div>
</div>
<div>
<div className="text-2xl font-bold text-[#1C1C28]">24h</div>
<div className="text-xs text-gray-500 mt-1">Avg Response Time</div>
</div>
<div>
<div className="text-2xl font-bold text-[#1C1C28]">5x</div>
<div className="text-xs text-gray-500 mt-1">Higher Visibility</div>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-[#3D5AFE] hover:bg-[#5C2CFE] text-white px-8 py-4 rounded-full text-base font-semibold transition-all shadow-xl shadow-[#3D5AFE]/25">
                    Create Your Profile
                </button>
<button className="w-full sm:w-auto bg-white text-[#1C1C28] border border-gray-200 hover:border-[#3D5AFE] px-8 py-4 rounded-full text-base font-semibold transition-all">
                    Learn More
                </button>
</div>
</div>
</section>

<footer className="bg-[#0F1120] text-white py-20 border-t border-gray-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-gradient-brand flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="sparkles"></i>
</div>
<span className="text-lg font-bold tracking-tight">TalentFlip</span>
</div>
<p className="text-gray-400 text-sm leading-relaxed mb-6">
                        The AI-powered platform that flips the hiring process. Companies apply to you.
                    </p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-gray-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-gray-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>

<div>
<h4 className="font-semibold mb-6 text-white">For Talent</h4>
<ul className="space-y-4 text-sm text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">Browse Jobs</a></li>
<li><a className="hover:text-white transition-colors" href="#">Salary Calculator</a></li>
<li><a className="hover:text-white transition-colors" href="#">Success Stories</a></li>
<li><a className="hover:text-white transition-colors" href="#">Career Advice</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-6 text-white">For Companies</h4>
<ul className="space-y-4 text-sm text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">Hire Talent</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integration</a></li>
<li><a className="hover:text-white transition-colors" href="#">Recruiter Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-6 text-white">Company</h4>
<ul className="space-y-4 text-sm text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-sm text-gray-500">© 2023 TalentFlip Inc. All rights reserved.</div>
<div className="flex gap-2 items-center">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-sm text-gray-400">All systems operational</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
