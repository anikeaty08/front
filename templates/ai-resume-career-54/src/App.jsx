import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      

<header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter text-slate-900">RESUMAI</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#features">Features</a>
<a className="hover:text-slate-900 transition-colors" href="#dashboard">Templates</a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-slate-900 transition-colors" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-4">
<button className="hidden sm:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Log in</button>
<a className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800" href="#auth">
                    Sign up
                </a>
</div>
</div>
</header>
<main>

<section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 mb-8">
<iconify-icon className="mr-1.5" icon="solar:magic-stick-3-linear" width="14"></iconify-icon>
                    AI Model 2.0 Now Available
                </div>
<h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                    Build Your Professional Resume in Minutes
                </h1>
<p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500 leading-relaxed">
                    Leverage advanced AI to craft ATS-optimized resumes and personalized cover letters. Stand out to recruiters without the stress of writing from scratch.
                </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Create Resume Now
                        <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<p className="text-xs text-slate-400 sm:hidden">No credit card required</p>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-4 pb-24" id="dashboard">
<div className="rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col md:flex-row" style={{height: '42rem'}}>

<div className="w-full md:w-64 bg-slate-50 border-r border-slate-200 flex flex-col p-4 shrink-0">
<div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Workspace</div>
<nav className="space-y-1 flex-1">
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50/50 rounded-md">
<iconify-icon icon="solar:document-linear" width="18"></iconify-icon>
                            Resume Builder
                        </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 rounded-md transition-colors">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
                            Cover Letter
                        </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 rounded-md transition-colors">
<iconify-icon icon="solar:folder-with-files-linear" width="18"></iconify-icon>
                            My Documents
                        </button>
</nav>
<div className="mt-auto border-t border-slate-200 pt-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">JD</div>
<div className="text-sm font-medium text-slate-700">John Doe</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col bg-white overflow-hidden">
<div className="h-14 border-b border-slate-100 flex items-center justify-between px-6 shrink-0 bg-white">
<div className="flex items-center gap-6">
<span className="text-sm font-medium text-slate-900 border-b-2 border-slate-900 py-4">Editor</span>
<span className="text-sm font-medium text-slate-400 py-4">Settings</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-slate-400 flex items-center gap-1">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="14"></iconify-icon> Saved
                            </span>
<button className="inline-flex items-center justify-center rounded-md bg-white border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition-colors">
<iconify-icon className="mr-1.5" icon="solar:download-linear" width="14"></iconify-icon>
                                Export PDF
                            </button>
</div>
</div>
<div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
<div className="max-w-2xl">

<div className="mb-8">
<label className="block text-sm font-medium text-slate-900 mb-3">Template Style</label>
<div className="grid grid-cols-3 gap-3">
<div className="cursor-pointer rounded-lg border-2 border-blue-600 bg-white p-3 text-center transition-all">
<div className="h-16 w-full bg-slate-100 rounded mb-2 flex flex-col gap-1 p-1">
<div className="h-2 w-1/2 bg-slate-300 rounded"></div>
<div className="h-1 w-full bg-slate-200 rounded"></div>
</div>
<span className="text-xs font-medium text-slate-900">Modern</span>
</div>
<div className="cursor-pointer rounded-lg border border-slate-200 bg-white p-3 text-center hover:border-slate-300 transition-all">
<div className="h-16 w-full bg-slate-100 rounded mb-2 flex flex-col gap-1 p-1 items-center">
<div className="h-2 w-1/3 bg-slate-300 rounded"></div>
<div className="h-1 w-2/3 bg-slate-200 rounded"></div>
</div>
<span className="text-xs font-medium text-slate-600">Minimal</span>
</div>
<div className="cursor-pointer rounded-lg border border-slate-200 bg-white p-3 text-center hover:border-slate-300 transition-all">
<div className="h-16 w-full bg-slate-100 rounded mb-2 flex flex-col gap-1 p-1 border-l-4 border-slate-400">
<div className="h-2 w-1/2 bg-slate-300 rounded"></div>
<div className="h-1 w-full bg-slate-200 rounded"></div>
</div>
<span className="text-xs font-medium text-slate-600">Corporate</span>
</div>
</div>
</div>

<div className="space-y-6">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Full Name</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-slate-400" type="text" value="John Doe"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Target Role</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-slate-400" type="text" value="Product Manager"/>
</div>
</div>
<div className="rounded-lg border border-blue-100 bg-blue-50/30 p-4">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-blue-600" icon="solar:magic-stick-3-linear" width="16"></iconify-icon>
<label className="text-sm font-medium text-blue-900">AI Experience Generation</label>
</div>
<textarea className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-slate-400 mb-3" placeholder="Briefly describe your last role..." rows="3">Managed a team of 5 engineers to launch the new mobile app, increasing user retention by 20%.</textarea>
<button className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors">
                                        Generate Professional Bullets
                                    </button>
</div>
<div>
<label className="block text-sm font-medium text-slate-900 mb-3 border-b border-slate-100 pb-2">Generated Experience</label>
<div className="space-y-3">
<div className="flex items-start gap-3 group">
<div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white">
<div className="h-2 w-2 rounded-full bg-blue-600"></div>
</div>
<p className="text-sm text-slate-600 leading-relaxed">Spearheaded the cross-functional development and successful launch of a flagship mobile application, directing a high-performing team of 5 software engineers.</p>
</div>
<div className="flex items-start gap-3 group">
<div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white">
<div className="h-2 w-2 rounded-full bg-blue-600"></div>
</div>
<p className="text-sm text-slate-600 leading-relaxed">Implemented strategic UX/UI enhancements that directly correlated with a 20% sustained increase in user retention over Q3.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden lg:flex w-1/3 bg-slate-100 border-l border-slate-200 p-6 flex-col items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(45deg,#f1f5f9_25%,transparent_25%,transparent_75%,#f1f5f9_75%,#f1f5f9),linear-gradient(45deg,#f1f5f9_25%,transparent_25%,transparent_75%,#f1f5f9_75%,#f1f5f9)] bg-[length:20px_20px] bg-[position:0_0,10px_10px] opacity-50"></div>
<div className="relative w-full aspect-[1/1.4] bg-white shadow-md rounded-sm p-6 overflow-hidden scale-90 origin-top">
<div className="border-b-2 border-slate-800 pb-4 mb-4">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight uppercase">John Doe</h2>
<p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Product Manager</p>
</div>
<div className="space-y-4">
<div>
<h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">Experience</h3>
<div className="mb-2">
<div className="flex justify-between items-baseline">
<h4 className="text-sm font-medium text-slate-800">TechCorp Inc.</h4>
<span className="text-xs text-slate-400">2021 - Present</span>
</div>
<p className="text-xs text-slate-500 italic mb-1">Senior Product Manager</p>
<ul className="list-disc pl-4 text-[10px] text-slate-600 space-y-1">
<li>Spearheaded the cross-functional development...</li>
<li>Implemented strategic UX/UI enhancements...</li>
</ul>
</div>
</div>
<div>
<h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">Education</h3>
<div>
<div className="flex justify-between items-baseline">
<h4 className="text-sm font-medium text-slate-800">University of Design</h4>
<span className="text-xs text-slate-400">2017 - 2021</span>
</div>
<p className="text-[10px] text-slate-600">B.S. Computer Science</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="features">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Everything you need to land the job</h2>
<p className="mt-4 text-slate-500">Our suite of tools is designed to get you past ATS filters and in front of hiring managers.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-8 transition-all hover:bg-slate-50 hover:shadow-sm">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">AI-Powered Writing</h3>
<p className="text-sm text-slate-500 leading-relaxed">Instantly generate impactful bullet points and summaries tailored to your target job description.</p>
</div>

<div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-8 transition-all hover:bg-slate-50 hover:shadow-sm">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Smart Cover Letters</h3>
<p className="text-sm text-slate-500 leading-relaxed">Create highly personalized cover letters that match your resume style and address the specific role.</p>
</div>

<div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-8 transition-all hover:bg-slate-50 hover:shadow-sm">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
<iconify-icon icon="solar:layers-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Premium Templates</h3>
<p className="text-sm text-slate-500 leading-relaxed">Choose from modern, minimal, and corporate templates designed by HR experts to pass ATS scanners.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-12 text-center">Trusted by professionals worldwide</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 line-clamp-4">"The AI rewrote my bullet points to sound so much more professional. I applied to 5 jobs and got 3 interviews within a week. Highly recommend!"</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-500">SM</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Sarah M.</h4>
<p className="text-xs text-slate-500">Marketing Director</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 line-clamp-4">"I hate formatting resumes. This tool did it automatically, and the cover letter generator saved me hours of staring at a blank page."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-500">DR</div>
<div>
<h4 className="text-sm font-medium text-slate-900">David R.</h4>
<p className="text-xs text-slate-500">Software Engineer</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hidden lg:block">
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 line-clamp-4">"The corporate template looks stunning. It strikes the perfect balance between standing out and remaining professional for traditional industries."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-500">EL</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Emily L.</h4>
<p className="text-xs text-slate-500">Financial Analyst</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="pricing">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Simple, transparent pricing</h2>
<p className="mt-4 text-slate-500">Start for free, upgrade when you need more power.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="rounded-2xl border border-slate-200 bg-white p-8">
<h3 className="text-lg font-medium text-slate-900">Basic</h3>
<p className="text-sm text-slate-500 mt-2 h-10">Essential tools to get your resume started.</p>
<div className="mt-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-slate-900">$0</span>
<span className="text-sm text-slate-500">/ forever</span>
</div>
<ul className="mt-8 space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear" width="18"></iconify-icon> 1 Resume
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear" width="18"></iconify-icon> 1 Template (Minimal)
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear" width="18"></iconify-icon> Basic PDF Export
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-400">
<iconify-icon icon="solar:close-circle-linear" width="18"></iconify-icon> No AI Generation
                            </li>
</ul>
<button className="mt-8 w-full rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors">Get Started</button>
</div>

<div className="rounded-2xl border-2 border-blue-600 bg-white p-8 relative shadow-lg shadow-blue-900/5">
<div className="absolute top-0 right-6 -translate-y-1/2 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white tracking-wide">POPULAR</div>
<h3 className="text-lg font-medium text-slate-900">Pro</h3>
<p className="text-sm text-slate-500 mt-2 h-10">Unlimited AI power to land your dream job.</p>
<div className="mt-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-slate-900">$12</span>
<span className="text-sm text-slate-500">/ month</span>
</div>
<ul className="mt-8 space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear" width="18"></iconify-icon> Unlimited Resumes
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear" width="18"></iconify-icon> All Premium Templates
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear" width="18"></iconify-icon> Unlimited AI Generation
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear" width="18"></iconify-icon> AI Cover Letter Builder
                            </li>
</ul>
<button className="mt-8 w-full rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors">Create Resume Now</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="auth">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Start building today</h2>
<p className="mt-2 text-sm text-slate-500">Create an account to save your progress.</p>
</div>
<div className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-sm border border-slate-200">
<div className="mb-8 text-center">
<span className="text-xl font-bold tracking-tighter text-slate-900">RESUMAI</span>
</div>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Email address</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="you@example.com" type="email"/>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<label className="block text-xs font-medium text-slate-700">Password</label>
<a className="text-xs text-blue-600 hover:text-blue-500" href="#">Forgot?</a>
</div>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="••••••••" type="password"/>
</div>
<button className="w-full rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-colors mt-2" type="button">
                            Sign In
                        </button>
</form>
<div className="mt-6 flex items-center justify-center gap-2">
<span className="h-px w-full bg-slate-100"></span>
<span className="text-xs text-slate-400 uppercase tracking-wider">or</span>
<span className="h-px w-full bg-slate-100"></span>
</div>
<button className="mt-6 w-full flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors" type="button">
<iconify-icon icon="logos:google-icon" width="16"></iconify-icon>
                        Continue with Google
                    </button>
<p className="mt-6 text-center text-xs text-slate-500">
                        Don't have an account? <a className="font-medium text-blue-600 hover:text-blue-500" href="#">Sign up</a>
</p>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
<div className="divide-y divide-slate-100 border-y border-slate-100">
<div className="py-6 group cursor-pointer">
<h3 className="text-base font-medium text-slate-900 flex justify-between items-center">
                            Are the templates ATS friendly?
                            <iconify-icon className="text-slate-400 transition-transform group-hover:text-slate-900" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</h3>
<p className="mt-2 text-sm text-slate-500 pr-8">Yes, all our templates—Modern, Minimal, and Corporate—are designed specifically to pass Applicant Tracking Systems by using standard fonts and clean layouts without complex tables or images.</p>
</div>
<div className="py-6 group cursor-pointer">
<h3 className="text-base font-medium text-slate-900 flex justify-between items-center">
                            How does the AI generation work?
                            <iconify-icon className="text-slate-400 transition-transform group-hover:text-slate-900" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</h3>
<p className="mt-2 text-sm text-slate-500 pr-8">Simply type a rough draft or paste your old experience. Our AI analyzes the text and rewrites it into professional, action-oriented bullet points tailored to your industry.</p>
</div>
<div className="py-6 group cursor-pointer">
<h3 className="text-base font-medium text-slate-900 flex justify-between items-center">
                            Can I download it as a PDF?
                            <iconify-icon className="text-slate-400 transition-transform group-hover:text-slate-900" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</h3>
<p className="mt-2 text-sm text-slate-500 pr-8">Absolutely. You can export your finished resume and cover letter directly to a high-quality PDF format, ready to be attached to your job applications.</p>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white py-12 border-t border-slate-100">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-bold tracking-tighter text-slate-900">RESUMAI</span>
</div>
<p className="text-sm text-slate-400">© 2024 ResumAI Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:twitter-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:github-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
