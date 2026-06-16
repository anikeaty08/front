import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
slate: {
850: '#1e293b',
},
blue: {
50: '#eff6ff',
500: '#3b82f6',
600: '#2563eb',
700: '#1d4ed8',
}
},
boxShadow: {
'glow': '0 0 40px -10px rgba(59, 130, 246, 0.15)',
'card': '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
'floating': '0 20px 40px -5px rgba(0, 0, 0, 0.08), 0 10px 20px -5px rgba(0, 0, 0, 0.02)',
'inner-light': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.5)',
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200/60 glass-card transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="w-5 h-5 bg-slate-900 rounded-[4px] flex items-center justify-center text-white transition-transform group-hover:rotate-3 shadow-sm">
<span className="font-semibold text-[10px] tracking-tighter">C</span>
</div>
<span className="font-semibold text-slate-900 tracking-tight text-base">candidesk</span>
</a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#customers">Customers</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Log in</a>
<a className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-500/20 active:scale-95 shadow-inner-light" href="#">
                    Start for free
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden border-b border-slate-100">
<div className="absolute inset-0 -z-10 bg-grid h-[600px]"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 hero-gradient"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Now with AI Parsing 2.0
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-slate-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
                Recruitment workflows <br className="hidden md:block"/>
<span className="text-slate-400">reimagined for speed.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                The operating system for modern agencies. Parse resumes, white-label formats, and share via magic links in seconds.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="w-full sm:w-auto px-8 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10 shadow-inner-light">
                    Get Started
                    <iconify-icon height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3 bg-white text-slate-600 border border-slate-200 rounded-full font-medium hover:bg-slate-50 hover:border-slate-300 transition-all">
                    Book a Demo
                </button>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 border border-blue-100">
<iconify-icon icon="lucide:sparkles" width="24"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Unstructured data,<br/>instantly structured.</h2>
<p className="text-slate-500 text-lg leading-relaxed mb-8">
                        Our AI engine ingests PDF, DOCX, and RTF files, instantly identifying skills, experience, and education. It handles non-standard layouts with human-level accuracy, so you never have to copy-paste again.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-slate-700 text-sm font-medium">
<iconify-icon className="text-blue-500" icon="lucide:check" width="16"></iconify-icon>
                            Extracts 50+ data points automatically
                        </li>
<li className="flex items-center gap-3 text-slate-700 text-sm font-medium">
<iconify-icon className="text-blue-500" icon="lucide:check" width="16"></iconify-icon>
                            Normalizes job titles and skills
                        </li>
<li className="flex items-center gap-3 text-slate-700 text-sm font-medium">
<iconify-icon className="text-blue-500" icon="lucide:check" width="16"></iconify-icon>
                            Multi-language support
                        </li>
</ul>
</div>
<div className="relative group">

<div className="absolute -inset-4 bg-gradient-to-r from-blue-50 to-slate-50 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>

<div className="relative bg-white rounded-xl border border-slate-200 shadow-floating p-6 z-10">
<div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-red-50 text-red-500 flex items-center justify-center border border-red-100">
<iconify-icon icon="lucide:file-text" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold text-slate-900">resume_alex_design.pdf</div>
<div className="text-[10px] text-slate-500">2.4 MB • Uploaded just now</div>
</div>
</div>
<div className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold rounded uppercase flex items-center gap-1">
<iconify-icon icon="lucide:check-circle" width="10"></iconify-icon> Success
                            </div>
</div>
<div className="grid grid-cols-2 gap-4">

<div className="p-3 bg-slate-50 rounded border border-slate-100 opacity-60">
<div className="w-16 h-2 bg-slate-300 rounded mb-2"></div>
<div className="space-y-1 mb-4">
<div className="w-full h-1 bg-slate-300 rounded"></div>
<div className="w-3/4 h-1 bg-slate-300 rounded"></div>
<div className="w-5/6 h-1 bg-slate-300 rounded"></div>
</div>
</div>

<div className="space-y-3">
<div className="p-3 bg-white rounded border border-blue-100 shadow-sm">
<div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">Skills Detected</div>
<div className="flex flex-wrap gap-1">
<span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-medium rounded border border-blue-100">Figma</span>
<span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-medium rounded border border-blue-100">React</span>
<span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-medium rounded border border-blue-100">Node.js</span>
</div>
</div>
<div className="p-3 bg-white rounded border border-slate-200 shadow-sm">
<div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">Experience</div>
<div className="text-xs font-medium text-slate-800">Senior Designer</div>
<div className="text-[10px] text-slate-500">4 Years • Tech Co.</div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white shadow-lg z-20">
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">

<div className="absolute inset-0 bg-grid opacity-50 h-full w-full"></div>
<div className="relative z-10 bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden max-w-md mx-auto transform rotate-1 transition-transform hover:rotate-0 duration-500">

<div className="h-10 bg-slate-50 border-b border-slate-200 flex items-center px-4 justify-between">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
</div>
<div className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Preview Mode</div>
</div>

<div className="p-8 bg-white min-h-[400px]">

<div className="flex justify-between items-end border-b-2 border-slate-900 pb-4 mb-6">
<div>
<div className="w-8 h-8 bg-slate-900 rounded mb-2 flex items-center justify-center text-white font-bold text-xs">AC</div>
<div className="text-xs font-bold text-slate-900 uppercase tracking-widest">Acme Recruiting</div>
</div>
<div className="text-[10px] text-slate-500 text-right">
                                    Prepared for: <span className="font-medium text-slate-900">Netflix</span><br/>
                                    Role: <span className="font-medium text-slate-900">Senior Engineer</span>
</div>
</div>

<div className="space-y-6">
<div>
<div className="flex items-center justify-between mb-2">
<div className="w-32 h-5 bg-slate-800 rounded"></div>
<div className="w-16 h-4 bg-green-100 rounded text-green-700 text-[10px] flex items-center justify-center font-bold">MATCH 98%</div>
</div>
<div className="w-full h-2 bg-slate-100 rounded mb-1"></div>
<div className="w-3/4 h-2 bg-slate-100 rounded"></div>
</div>
<div className="p-4 bg-slate-50 rounded border border-slate-100">
<div className="text-[10px] font-bold text-slate-400 uppercase mb-2">Executive Summary</div>
<div className="space-y-1.5">
<div className="w-full h-1.5 bg-slate-300 rounded"></div>
<div className="w-full h-1.5 bg-slate-300 rounded"></div>
<div className="w-5/6 h-1.5 bg-slate-300 rounded"></div>
</div>
</div>
</div>
</div>

<div className="absolute top-20 right-8 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-full shadow-lg flex items-center gap-2 animate-bounce">
<iconify-icon icon="lucide:palette" width="12"></iconify-icon>
                            Your Brand Here
                        </div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6 border border-purple-100">
<iconify-icon icon="lucide:pen-tool" width="24"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Consistent branding,<br/>zero effort.</h2>
<p className="text-slate-500 text-lg leading-relaxed mb-8">
                        Stop manually formatting Word documents. Candidesk automatically removes candidate contact info and wraps the profile in your agency's branding. Ensure every CV you send looks professional and uniform.
                    </p>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-lg border border-slate-200 bg-white">
<iconify-icon className="text-slate-400 mb-2" icon="lucide:user-x" width="20"></iconify-icon>
<h4 className="text-sm font-semibold text-slate-900">Anonymization</h4>
<p className="text-xs text-slate-500 mt-1">Auto-hide phone &amp; email.</p>
</div>
<div className="p-4 rounded-lg border border-slate-200 bg-white">
<iconify-icon className="text-slate-400 mb-2" icon="lucide:layout-template" width="20"></iconify-icon>
<h4 className="text-sm font-semibold text-slate-900">Custom Templates</h4>
<p className="text-xs text-slate-500 mt-1">Match your brand guidelines.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 border border-emerald-100">
<iconify-icon icon="lucide:link" width="24"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Secure Magic Links,<br/>not attachments.</h2>
<p className="text-slate-500 text-lg leading-relaxed mb-8">
                        Send candidate profiles via secure, expiring links. Control who sees what and for how long. Revoke access instantly if a client goes cold or a role is filled.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
<div className="mt-1 bg-white p-1.5 rounded border border-slate-200 text-slate-600">
<iconify-icon icon="lucide:clock" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Time-based Expiry</h4>
<p className="text-xs text-slate-500 mt-1">Set links to self-destruct after 24 hours, 7 days, or never.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
<div className="mt-1 bg-white p-1.5 rounded border border-slate-200 text-slate-600">
<iconify-icon icon="lucide:eye" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Viewership Rights</h4>
<p className="text-xs text-slate-500 mt-1">Restrict downloads or limit visibility to specific domains.</p>
</div>
</div>
</div>
</div>
<div className="relative flex justify-center">

<div className="w-full max-w-sm bg-white rounded-2xl border border-slate-200 shadow-floating p-6 relative z-10">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">Live Link</span>
</div>
<iconify-icon className="text-slate-400" icon="lucide:more-horizontal"></iconify-icon>
</div>
<div className="mb-6">
<div className="text-2xl font-semibold text-slate-900 tracking-tight mb-1">Frontend Developer</div>
<div className="text-sm text-slate-500">Candidate ID: #88291 • 3 Profiles</div>
</div>
<div className="bg-slate-50 rounded-lg p-4 border border-slate-100 mb-6">
<div className="flex items-center justify-between text-xs mb-3">
<span className="font-medium text-slate-600">Access Settings</span>
<span className="text-blue-600 font-medium">Edit</span>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-slate-600">
<iconify-icon icon="lucide:calendar-clock" width="14"></iconify-icon>
<span className="text-xs">Expires in</span>
</div>
<span className="text-xs font-medium text-slate-900 bg-white border border-slate-200 px-2 py-0.5 rounded">48 Hours</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-slate-600">
<iconify-icon icon="lucide:shield-check" width="14"></iconify-icon>
<span className="text-xs">Password</span>
</div>
<div className="w-8 h-4 bg-emerald-500 rounded-full relative">
<div className="w-3 h-3 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm"></div>
</div>
</div>
</div>
</div>
<div className="flex gap-2">
<div className="flex-1 bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-xs text-slate-500 truncate font-mono">
                                candidesk.com/s/9j2k...
                            </div>
<button className="bg-slate-900 text-white px-3 py-2 rounded-md hover:bg-slate-800 transition-colors">
<iconify-icon icon="lucide:copy" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="absolute top-10 -right-4 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
<div className="absolute bottom-10 -left-4 w-24 h-24 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">

<div className="bg-white rounded-xl border border-slate-200 shadow-floating p-6 max-w-md mx-auto relative">

<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 font-bold text-sm">JD</div>
<div>
<div className="font-semibold text-slate-900">John Doe</div>
<div className="text-xs text-slate-500">Product Manager</div>
</div>
<div className="ml-auto">
<span className="px-2 py-1 bg-yellow-50 text-yellow-700 text-[10px] font-bold rounded uppercase border border-yellow-100">Pending</span>
</div>
</div>

<div className="border-t border-slate-100 pt-5">
<div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Client Feedback</div>
<div className="flex gap-3 mb-4">
<button className="flex-1 py-2 border border-slate-200 rounded-lg hover:border-red-200 hover:bg-red-50 text-slate-600 hover:text-red-600 transition-all flex items-center justify-center gap-2 group">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="lucide:thumbs-down" width="16"></iconify-icon>
<span className="text-xs font-medium">Reject</span>
</button>
<button className="flex-1 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all shadow-md shadow-slate-200 flex items-center justify-center gap-2">
<iconify-icon icon="lucide:calendar" width="16"></iconify-icon>
<span className="text-xs font-medium">Interview</span>
</button>
</div>

<div className="bg-slate-50 rounded-lg p-3 space-y-3">
<div className="flex gap-2">
<div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-[10px] font-bold text-blue-600">CM</div>
<div className="flex-1">
<div className="bg-white p-2 rounded-tr-lg rounded-br-lg rounded-bl-lg border border-slate-100 text-xs text-slate-600 shadow-sm">
                                            Great experience, but is he willing to relocate?
                                        </div>
<div className="text-[10px] text-slate-400 mt-1">Client Manager • 10m ago</div>
</div>
</div>
</div>
</div>

<div className="absolute -top-3 -right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-md animate-pulse border-2 border-white">
                            1 New Comment
                        </div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-6 border border-orange-100">
<iconify-icon icon="lucide:message-square" width="24"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Close the feedback loop,<br/>faster.</h2>
<p className="text-slate-500 text-lg leading-relaxed mb-8">
                        Stop chasing clients via email. Let them approve, reject, or comment directly on the candidate profile. Get notified instantly and keep the momentum going.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex gap-3">
<div className="mt-1 text-slate-900">
<iconify-icon icon="lucide:zap" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Instant Notifications</h4>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">Get alerted on Slack or Email the moment a client reviews a CV.</p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-1 text-slate-900">
<iconify-icon icon="lucide:history" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Audit Trail</h4>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">Keep a permanent record of all feedback and decisions for every role.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 mb-6">Ready to upgrade your workflow?</h2>
<p className="text-slate-500 text-lg mb-10 max-w-2xl mx-auto font-light">Join forward-thinking recruiters who are closing roles 2x faster with Candidesk.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 active:scale-95">
                    Start 14-day free trial
                </button>
</div>
<p className="mt-6 text-xs text-slate-400">No credit card required • Cancel anytime</p>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 bg-slate-900 rounded-[4px] flex items-center justify-center text-white">
<span className="font-semibold text-[10px] tracking-tighter">C</span>
</div>
<span className="font-semibold text-slate-900 tracking-tight">candidesk</span>
</div>
<p className="text-xs text-slate-500 mb-4">
                        The operating system for modern recruitment agencies.
                    </p>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="lucide:github" width="18"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Community</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Help Center</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">About</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Legal</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Candidesk Inc. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-400">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
