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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="w-8 h-8 text-brand-indigo" height="100%" icon="solar:document-add-linear" width="100%"></iconify-icon>
<span className="font-sans text-2xl font-bold tracking-tight">Hireflow</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-base text-gray-600 hover:text-gray-900 transition-colors" href="#">Home</a>
<a className="text-base text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1" href="#">Features <iconify-icon className="w-4 h-4" icon="solar:alt-arrow-down-linear"></iconify-icon></a>
<a className="text-base text-gray-600 hover:text-gray-900 transition-colors" href="#">Resources</a>
<a className="text-base text-gray-600 hover:text-gray-900 transition-colors" href="#">Templates</a>
<a className="text-base text-gray-600 hover:text-gray-900 transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-base font-medium text-gray-900 hidden sm:block" href="#">Log In</a>
<a className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-base font-medium hover:bg-gray-800 transition-colors" href="#">Sign Up</a>
</div>
</div>
</nav>

<section className="relative pt-24 pb-16 px-6 overflow-hidden">

<div className="daisy-bg w-64 h-64 top-10 left-10"></div>
<div className="daisy-bg w-80 h-80 top-20 right-[-5%]"></div>
<div className="daisy-bg w-72 h-72 bottom-10 left-[-10%]"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h1 className="font-sans text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                Turn Your Experience<br/>Into Interviews
            </h1>
<p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                Create a professional, ATS-friendly resume in minutes. Built to help you stand out and get hired faster.
            </p>
<a className="inline-flex items-center gap-2 bg-brand-indigo text-white px-8 py-3.5 rounded-full text-base font-medium hover:bg-indigo-600 transition-all shadow-sm hover:shadow-md" href="#">
<span className="bg-white text-brand-indigo rounded-full p-1"><iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear"></iconify-icon></span>
                Create Resume
            </a>
</div>

<div className="max-w-6xl mx-auto mt-20 relative z-10">
<div className="relative rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[21/9] shadow-2xl">
<img alt="Person working on laptop" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>

<div className="absolute top-10 left-10 md:top-20 md:left-20 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2.5 flex items-center gap-3 shadow-lg transform -rotate-2">
<div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-brand-indigo font-semibold text-sm">92%</div>
<span className="text-base font-medium text-gray-800">Resume Score</span>
</div>
<div className="absolute bottom-20 left-10 md:bottom-32 md:left-24 bg-white/95 backdrop-blur-sm rounded-full px-5 py-3 flex items-center gap-3 shadow-lg transform rotate-1">
<iconify-icon className="w-5 h-5 text-brand-indigo" icon="solar:stars-linear"></iconify-icon>
<span className="text-base font-medium text-gray-800">Ask AI Coach Anything...</span>
</div>
<div className="absolute top-1/2 right-4 md:right-20 -translate-y-1/2 bg-white rounded-2xl p-5 shadow-xl w-[280px]">
<div className="flex items-center justify-between mb-4">
<span className="text-base font-semibold text-gray-900 flex items-center gap-2">Skills <iconify-icon className="w-4 h-4 text-gray-400" icon="solar:pen-linear"></iconify-icon></span>
<button className="bg-brand-indigo text-white text-sm px-3 py-1.5 rounded-full flex items-center gap-1 font-medium"><iconify-icon className="w-3 h-3" icon="solar:add-circle-linear"></iconify-icon> Add Skill</button>
</div>
<div className="flex flex-col gap-2">
<span className="bg-gray-50 text-gray-700 text-sm px-3 py-2 rounded-lg border border-gray-100">Management Skills</span>
<span className="bg-gray-50 text-gray-700 text-sm px-3 py-2 rounded-lg border border-gray-100">Analytical thinking</span>
<span className="bg-gray-50 text-gray-700 text-sm px-3 py-2 rounded-lg border border-gray-100">Leadership</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto border-t border-gray-100 mt-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative order-2 lg:order-1">
<div className="rounded-3xl overflow-hidden aspect-[4/5] bg-gray-100">
<img alt="Professional portrait" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>

<div className="absolute top-10 right-[-20px] md:right-[-40px] bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
<div className="text-sm text-gray-500 font-medium mb-1">Resume Match Score</div>
<div className="text-green-500 text-base font-semibold flex items-center gap-1"><iconify-icon className="w-4 h-4" icon="solar:graph-up-linear"></iconify-icon> +42% improvement</div>
</div>
<div className="absolute bottom-32 left-[-20px] md:left-[-40px] bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
<div className="text-base font-medium text-gray-900 mb-1">Build Time</div>
<div className="text-sm text-gray-500">Under 5 minutes</div>
</div>
<div className="absolute bottom-10 right-10 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
<div className="text-base font-medium text-gray-900 mb-1">Interview Callbacks</div>
<div className="text-green-500 text-sm font-semibold">+18% increase</div>
</div>
</div>

<div className="order-1 lg:order-2">
<h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
                    AI-Powered Interview<br/>Ready Resumes
                </h2>
<p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Hireflow helps job seekers optimize their resumes with AI improving visibility, relevance, and recruiter engagement across every application.
                </p>
<a className="inline-flex items-center gap-2 text-brand-indigo font-medium text-base hover:text-indigo-600 transition-colors mb-16" href="#">
<span className="bg-brand-indigo/10 rounded-full p-1.5"><iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear"></iconify-icon></span>
                    See How It Works
                </a>
<div className="grid grid-cols-3 gap-8 border-t border-gray-100 pt-8">
<div>
<div className="text-4xl font-light text-gray-900 mb-2">40%</div>
<div className="text-sm text-gray-500 leading-tight">Higher ATS match rate</div>
</div>
<div>
<div className="text-4xl font-light text-gray-900 mb-2">32%</div>
<div className="text-sm text-gray-500 leading-tight">More recruiter engagement</div>
</div>
<div>
<div className="text-4xl font-light text-gray-900 mb-2">3x</div>
<div className="text-sm text-gray-500 leading-tight">Faster resume creation</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-gray-50/50">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">Everything You Need<br/>to Get Hired Faster</h2>
<p className="text-lg text-gray-600 max-w-xl mx-auto">From AI-powered writing to ATS optimization everything you need for a job-winning resume.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-card-1 rounded-3xl p-8 md:p-12 overflow-hidden relative min-h-[450px] flex flex-col justify-between group text-white">
<div className="relative z-10 max-w-sm">
<h3 className="text-2xl font-medium mb-3">AI Resume Builder</h3>
<p className="text-base text-white/80 leading-relaxed">Create a complete resume instantly based on your input. No formatting stress.</p>
</div>
<div className="mt-8 bg-white rounded-2xl p-6 shadow-2xl relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="text-gray-900 font-semibold text-lg mb-2">Professional Summary</div>
<div className="text-gray-400 text-sm mb-4">Write 2-4 short sentences to interest the reader. Mention your role, experience &amp; most importantly, your biggest achievements, best qualities and skill</div>
<div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600 leading-relaxed border border-gray-100">
                            Experienced and effective Business Development manager bringing forth significant value and a genuine passion for management. With a proven track record of driving growth and fostering strong client relationships, I am dedicated to creating innovative strategies that enhance business
                        </div>
</div>
</div>

<div className="bg-card-2 rounded-3xl p-8 md:p-12 overflow-hidden relative min-h-[450px] flex flex-col justify-between group text-white">
<div className="relative z-10 max-w-sm">
<h3 className="text-2xl font-medium mb-3">ATS Optimization</h3>
<p className="text-base text-white/80 leading-relaxed">Your resume is structured to pass applicant tracking systems and reach recruiters.</p>
</div>
<div className="mt-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 border border-white/20">
<div className="flex flex-col gap-4">
<div className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm">
<div className="bg-green-100 text-green-600 rounded-full p-1"><iconify-icon className="w-4 h-4" icon="solar:check-read-linear"></iconify-icon></div>
<span className="text-sm text-gray-500">Step 1 <span className="text-gray-900 font-medium ml-2">• Personal Details</span></span>
</div>
<div className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm">
<div className="bg-green-100 text-green-600 rounded-full p-1"><iconify-icon className="w-4 h-4" icon="solar:check-read-linear"></iconify-icon></div>
<span className="text-sm text-gray-500">Step 2 <span className="text-gray-900 font-medium ml-2">• Personal Summary</span></span>
</div>
<div className="bg-white rounded-xl p-4 flex flex-col gap-3 shadow-sm">
<div className="flex items-center gap-3">
<div className="bg-green-100 text-green-600 rounded-full p-1"><iconify-icon className="w-4 h-4" icon="solar:check-read-linear"></iconify-icon></div>
<span className="text-sm text-gray-500">Step 3 <span className="text-gray-900 font-medium ml-2">• Skills</span></span>
</div>
<div className="flex gap-2 pl-9">
<span className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1.5 rounded-lg flex items-center gap-1">Management Skills <iconify-icon className="w-3 h-3 text-gray-400" icon="solar:add-circle-linear"></iconify-icon></span>
<span className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1.5 rounded-lg flex items-center gap-1">Leadership <iconify-icon className="w-3 h-3 text-gray-400" icon="solar:add-circle-linear"></iconify-icon></span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-card-3 rounded-3xl p-8 md:p-12 overflow-hidden relative min-h-[450px] flex flex-col justify-between group text-white">
<div className="relative z-10 max-w-sm">
<h3 className="text-2xl font-medium mb-3">Smart Suggestions</h3>
<p className="text-base text-white/80 leading-relaxed">Get real-time improvements for content, wording, and impact.</p>
</div>
<div className="mt-8 bg-white rounded-t-2xl p-8 pb-0 shadow-2xl relative z-10 transform translate-y-8 group-hover:translate-y-4 transition-transform duration-500 flex flex-col items-center">
<div className="w-full flex justify-between items-start mb-6">
<div>
<div className="text-gray-900 font-semibold text-lg">Hireflow Score</div>
<div className="text-gray-400 text-sm">My first resume</div>
</div>
</div>

<div className="relative w-48 h-48 mt-4 overflow-hidden">
<svg className="w-full h-full transform -rotate-180" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="transparent" r="40" stroke="#f3f4f6" stroke-dasharray="125 125" stroke-dashoffset="0" strokeLinecap="round" strokeWidth="12"></circle>
<circle cx="50" cy="50" fill="transparent" r="40" stroke="#4F46E5" stroke-dasharray="125 125" stroke-dashoffset="60" strokeLinecap="round" strokeWidth="12"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center top-6">
<span className="text-4xl font-semibold text-gray-900">48%</span>
<span className="text-xs text-gray-500 font-medium mt-1">Need Improvement</span>
</div>
</div>
</div>
</div>

<div className="bg-card-4 rounded-3xl p-8 md:p-12 overflow-hidden relative min-h-[450px] flex flex-col justify-between group text-white">
<div className="relative z-10 max-w-sm">
<h3 className="text-2xl font-medium mb-3">Job Match Insights</h3>
<p className="text-base text-white/80 leading-relaxed">See how well your resume matches job descriptions before applying.</p>
</div>
<div className="mt-8 relative z-10 flex flex-col items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">

<div className="bg-white/40 backdrop-blur-sm rounded-xl w-4/5 h-12 absolute -top-4 shadow-sm border border-white/20"></div>
<div className="bg-white/70 backdrop-blur-sm rounded-xl w-11/12 h-12 absolute -top-2 shadow-sm border border-white/40 text-center text-sm text-gray-500 pt-2 font-medium">https://www.figma.com</div>
<div className="bg-white rounded-2xl p-6 w-full shadow-2xl relative border border-gray-100">
<div className="text-gray-900 font-medium text-base mb-4">Paste a link to the job you want</div>
<div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-4">
<span className="text-gray-400 text-sm truncate w-64">https://dribbble.com/work/lab_agency</span>
<iconify-icon className="w-5 h-5 text-green-500" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="flex items-center justify-center gap-2 text-sm text-gray-500 font-medium bg-gray-50 py-3 rounded-xl">
<iconify-icon className="w-4 h-4 text-[#0A66C2]" icon="solar:users-group-rounded-linear"></iconify-icon> LinkedIn
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#F8F9FA]">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">Not Just a Resume Builder</h2>
<p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                    Built for real hiring systems • Designed to convert, not just look good • Saves hours of manual work • Helps you stand out instantly
                </p>
<a className="inline-flex items-center gap-2 bg-brand-indigo text-white px-6 py-3 rounded-full text-base font-medium hover:bg-indigo-600 transition-colors shadow-sm" href="#">
<span className="bg-white text-brand-indigo rounded-full p-1"><iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear"></iconify-icon></span>
                    Build My Resume with AI
                </a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 border-t border-gray-200 pt-12">
<div>
<h3 className="text-xl font-medium text-gray-900 mb-4">Resumes created</h3>
<div className="text-4xl font-semibold text-gray-900 mb-3 tracking-tight">100,000+</div>
<p className="text-base text-gray-600 leading-relaxed">Built with a mission to simplify resume creation using intelligent automation.</p>
</div>
<div>
<h3 className="text-xl font-medium text-gray-900 mb-4">Users got interview calls</h3>
<div className="text-4xl font-semibold text-brand-indigo mb-3 tracking-tight">92%</div>
<p className="text-base text-gray-600 leading-relaxed">Thousands of personalized resumes crafted across roles, industries, and career levels.</p>
</div>
<div>
<h3 className="text-xl font-medium text-gray-900 mb-4">Faster job applications</h3>
<div className="text-4xl font-semibold text-gray-900 mb-3 tracking-tight">3x</div>
<p className="text-base text-gray-600 leading-relaxed">Most users see improved ATS results and higher interview shortlisting rates.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="relative rounded-3xl overflow-hidden aspect-video md:aspect-square group">
<img alt="Desk setup" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-lg w-max">
<iconify-icon className="w-4 h-4 text-brand-indigo" icon="solar:document-linear"></iconify-icon>
<span className="text-sm font-medium text-gray-900">Pro Templates <iconify-icon className="w-3 h-3 inline text-gray-900" icon="solar:check-read-linear"></iconify-icon></span>
</div>
</div>
<div className="relative rounded-3xl overflow-hidden aspect-video md:aspect-square group">
<img alt="Pattern texture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-lg w-max">
<iconify-icon className="w-4 h-4 text-brand-indigo" icon="solar:stars-linear"></iconify-icon>
<span className="text-sm font-medium text-gray-900">AI Resume Writing <iconify-icon className="w-3 h-3 inline text-gray-900" icon="solar:check-read-linear"></iconify-icon></span>
</div>
</div>
<div className="relative rounded-3xl overflow-hidden aspect-video md:aspect-square group">
<img alt="Landscape view" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-lg w-max">
<iconify-icon className="w-4 h-4 text-brand-indigo" icon="solar:bolt-linear"></iconify-icon>
<span className="text-sm font-medium text-gray-900">Fast &amp; Simple <iconify-icon className="w-3 h-3 inline text-gray-900" icon="solar:check-read-linear"></iconify-icon></span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
                    Clean Templates
                </h2>
<p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                    Modern, professional designs that recruiters actually like.
                </p>
<a className="inline-flex items-center gap-2 bg-brand-indigo text-white px-6 py-3 rounded-full text-base font-medium hover:bg-indigo-600 transition-colors shadow-sm mb-16" href="#">
<span className="bg-white text-brand-indigo rounded-full p-1"><iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear"></iconify-icon></span>
                    View All Templates
                </a>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
<div>
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-4 text-gray-900">
<iconify-icon className="w-5 h-5" icon="solar:document-add-linear"></iconify-icon>
</div>
<h4 className="text-base font-semibold text-gray-900 mb-2">Modern &amp; Clean Layouts</h4>
<p className="text-sm text-gray-600 leading-relaxed">Minimal, well-structured designs that highlight your skills and experience clearly.</p>
</div>
<div>
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-4 text-gray-900">
<iconify-icon className="w-5 h-5" icon="solar:file-check-linear"></iconify-icon>
</div>
<h4 className="text-base font-semibold text-gray-900 mb-2">ATS-Compatible Formats</h4>
<p className="text-sm text-gray-600 leading-relaxed">All templates are tested to work seamlessly with Applicant Tracking Systems.</p>
</div>
</div>
</div>

<div className="relative rounded-[2.5rem] bg-[#54483C] p-2 md:p-6 shadow-2xl">
<div className="rounded-3xl overflow-hidden relative">
<img alt="Professional working" className="w-full h-auto object-cover border border-white/10 rounded-3xl" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute top-8 left-[-10px] md:left-[-30px] bg-white rounded-full px-4 py-2.5 flex items-center gap-2 shadow-xl border border-gray-100">
<iconify-icon className="w-4 h-4 text-gray-900" icon="solar:stars-linear"></iconify-icon>
<span className="text-sm font-medium text-gray-900">AI-Optimized Content Fit</span>
</div>
<div className="absolute bottom-16 right-[-10px] md:right-[-30px] bg-white rounded-full px-4 py-2.5 flex items-center gap-2 shadow-xl border border-gray-100">
<iconify-icon className="w-4 h-4 text-gray-900" icon="solar:pen-new-square-linear"></iconify-icon>
<span className="text-sm font-medium text-gray-900">Fully Customizable</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#F8F9FA]">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">Simple, Transparent Pricing</h2>
<p className="text-lg text-gray-600">Start free, upgrade when you're ready no hidden fees.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">

<div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 h-max">
<h3 className="text-xl font-medium text-gray-900 mb-6">Free Plan</h3>
<div className="flex items-baseline gap-2 mb-8">
<span className="text-5xl font-semibold tracking-tight text-gray-900">$0</span>
<div className="flex flex-col">
<span className="text-sm text-gray-500 font-medium">Per user</span>
<span className="text-sm text-gray-500">Per month</span>
</div>
</div>
<button className="w-full py-3 px-4 rounded-full border border-gray-300 text-gray-900 font-medium text-base hover:bg-gray-100 transition-colors mb-8">Get started</button>
<div className="text-sm font-medium text-gray-900 mb-4">Features</div>
<p className="text-sm text-gray-500 mb-6 pb-6 border-b border-gray-200">Everything included in our free plan...</p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-gray-700"><iconify-icon className="w-4 h-4 text-brand-indigo mt-0.5" icon="solar:check-read-linear"></iconify-icon> Basic resume builder</li>
<li className="flex items-start gap-3 text-sm text-gray-700"><iconify-icon className="w-4 h-4 text-brand-indigo mt-0.5" icon="solar:check-read-linear"></iconify-icon> Limited templates</li>
</ul>
</div>

<div className="bg-brand-indigo rounded-3xl p-10 border border-transparent shadow-2xl relative z-10 md:scale-105 text-white h-max">
<h3 className="text-xl font-medium mb-6 text-white/90">Pro Plan</h3>
<div className="flex items-baseline gap-2 mb-8">
<span className="text-6xl font-semibold tracking-tight">$29</span>
<div className="flex flex-col text-white/80">
<span className="text-sm font-medium">Per user</span>
<span className="text-sm">Per month</span>
</div>
</div>
<button className="w-full py-3.5 px-4 rounded-full bg-white text-gray-900 font-semibold text-base hover:bg-gray-50 transition-colors mb-8 shadow-sm">Get started</button>
<div className="text-sm font-medium mb-4 text-white/90">Features</div>
<p className="text-sm text-white/70 mb-6 pb-6 border-b border-white/20">Everything included in our pro plan...</p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-white"><div className="bg-white/20 rounded-full p-0.5 mt-0.5"><iconify-icon className="w-3 h-3 text-white" icon="solar:check-read-linear"></iconify-icon></div> All templates</li>
<li className="flex items-start gap-3 text-sm text-white"><div className="bg-white/20 rounded-full p-0.5 mt-0.5"><iconify-icon className="w-3 h-3 text-white" icon="solar:check-read-linear"></iconify-icon></div> AI suggestions</li>
<li className="flex items-start gap-3 text-sm text-white"><div className="bg-white/20 rounded-full p-0.5 mt-0.5"><iconify-icon className="w-3 h-3 text-white" icon="solar:check-read-linear"></iconify-icon></div> ATS optimization</li>
</ul>
</div>

<div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 h-max">
<h3 className="text-xl font-medium text-gray-900 mb-6">Premium Plan</h3>
<div className="flex items-baseline gap-2 mb-8">
<span className="text-5xl font-semibold tracking-tight text-gray-900">$129</span>
<div className="flex flex-col">
<span className="text-sm text-gray-500 font-medium">Per user</span>
<span className="text-sm text-gray-500">Per month</span>
</div>
</div>
<button className="w-full py-3 px-4 rounded-full border border-gray-300 text-gray-900 font-medium text-base hover:bg-gray-100 transition-colors mb-8">Get started</button>
<div className="text-sm font-medium text-gray-900 mb-4">Features</div>
<p className="text-sm text-gray-500 mb-6 pb-6 border-b border-gray-200">Everything included in our premium plan...</p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-gray-700"><iconify-icon className="w-4 h-4 text-gray-400 mt-0.5" icon="solar:check-read-linear"></iconify-icon> Job match insights</li>
<li className="flex items-start gap-3 text-sm text-gray-700"><iconify-icon className="w-4 h-4 text-gray-400 mt-0.5" icon="solar:check-read-linear"></iconify-icon> Resume scoring</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
<h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight text-gray-900 lg:w-1/2 leading-tight">
                Trusted by Job<br/>Seekers Worldwide
            </h2>
<p className="text-lg text-gray-600 lg:w-1/2 pt-4">
                See how professionals landed interviews faster using AI-powered resumes built with Hireflow.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="flex flex-col gap-6">

<div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
<div className="flex items-center gap-4 mb-6">
<img alt="Arjun Patel" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div>
<div className="text-base font-semibold text-gray-900">Arjun Patel</div>
<div className="text-sm text-gray-500">Business Graduate</div>
</div>
</div>
<p className="text-base text-gray-700 leading-relaxed italic">"The templates look modern and professional, and the AI bullet points saved me hours saved me hours effortlessly."</p>
</div>

<div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
<img alt="Sarah Lee" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
<div className="flex items-center gap-4">
<img alt="Sarah Lee small" className="w-10 h-10 rounded-full object-cover border-2 border-white" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div>
<div className="text-base font-semibold text-white">Sarah Lee</div>
<div className="text-sm text-gray-300">Marketing Manager</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="relative rounded-3xl overflow-hidden aspect-square">
<img alt="Alex Morgan" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
<div className="flex items-center gap-4">
<img alt="Alex Morgan small" className="w-12 h-12 rounded-full object-cover border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div>
<div className="text-lg font-semibold text-white">Alex Morgan</div>
<div className="text-sm text-gray-300">Product Designer</div>
</div>
</div>
</div>
</div>

<div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
<div className="flex items-center gap-4 mb-6">
<img alt="Sarah Johnson" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div>
<div className="text-base font-semibold text-gray-900">Sarah Johnson</div>
<div className="text-sm text-gray-500">HR Manager, TechNova Inc.</div>
</div>
</div>
<p className="text-base text-gray-700 leading-relaxed italic">Hireflow's AI rewrote my resume exactly how recruiters expect it. Huge difference in responses.</p>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
<div className="flex items-center gap-4 mb-6">
<img alt="Alexy Ven" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div>
<div className="text-base font-semibold text-gray-900">Alexy Ven</div>
<div className="text-sm text-gray-500">HR Manager, TechNova Inc.</div>
</div>
</div>
<p className="text-base text-gray-700 leading-relaxed italic">"Hireflow completely transformed my resume. The AI bullet points matched the job description perfectly."</p>
</div>

<div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
<img alt="Humaira Kabir" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
<div className="flex items-center gap-4">
<img alt="Humaira Kabir small" className="w-10 h-10 rounded-full object-cover border-2 border-white" src="https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div>
<div className="text-base font-semibold text-white">Humaira Kabir</div>
<div className="text-sm text-gray-300">HR Manager, TechNova Inc.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-6 max-w-7xl mx-auto w-full mb-12">
<div className="relative rounded-3xl overflow-hidden h-[400px] flex items-center justify-center text-center">
<img alt="Forest path background" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-black/40"></div>
<div className="relative z-10 px-6">
<h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Your Next Job Starts Here</h2>
<p className="text-lg text-gray-200 mb-8 max-w-xl mx-auto">Build your resume in minutes and start applying today</p>
<a className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full text-base font-medium hover:bg-gray-100 transition-colors shadow-lg" href="#">
<span className="bg-gray-900 text-white rounded-full p-1"><iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear"></iconify-icon></span>
                    Create My Resume
                </a>
</div>
</div>
</section>

<footer className="bg-white pt-20 overflow-hidden relative">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20 relative z-10">

<div className="lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="w-8 h-8 text-brand-indigo" height="100%" icon="solar:document-add-linear" width="100%"></iconify-icon>
<span className="font-sans text-2xl font-bold tracking-tight text-gray-900">Hireflow</span>
</div>
<p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                    Build job-ready, ATS-optimized resumes using the power of AI.
                </p>
<div className="flex gap-4 mt-8 text-gray-400">
<a className="hover:text-gray-900 transition-colors" href="#"><iconify-icon className="w-5 h-5" icon="solar:camera-linear"></iconify-icon></a>
<a className="hover:text-gray-900 transition-colors" href="#"><iconify-icon className="w-5 h-5" icon="solar:play-linear"></iconify-icon></a>
<a className="hover:text-gray-900 transition-colors" href="#">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
</a>
<a className="hover:text-gray-900 transition-colors" href="#"><iconify-icon className="w-5 h-5" icon="solar:global-linear"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="font-semibold text-gray-900 mb-6 text-base">Product</h4>
<ul className="space-y-4">
<li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">Resume Builder</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">AI Cover Letter</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">Resume Templates</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">Resume Score</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-6 text-base">Resources</h4>
<ul className="space-y-4">
<li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">Resume Tips</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">Career Guides</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">Interview Prep</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-6 text-base">Support</h4>
<ul className="space-y-4">
<li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">Help Center</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">FAQs</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">Email Support</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">Report a Bug</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-6 text-base">Email</h4>
<a className="text-sm text-gray-500 hover:text-gray-900 underline mb-6 block" href="mailto:support@hireflow.com">support@hireflow.com</a>
<h4 className="font-semibold text-gray-900 mb-2 text-base">Phone</h4>
<a className="text-sm text-gray-500 hover:text-gray-900" href="tel:+01234567890">+0123 456 7890</a>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 py-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10 bg-white">
<div className="text-sm text-gray-500">© 2026 Hireflow. All rights reserved.</div>
<div className="flex gap-6 text-sm text-gray-500">
<a className="hover:text-gray-900" href="#">Privacy Policy</a>
<span>|</span>
<a className="hover:text-gray-900" href="#">Terms of Service</a>
</div>
</div>

<div className="relative w-full h-[30vh] overflow-hidden flex items-end justify-center pointer-events-none mt-10">

<div className="absolute inset-x-0 bottom-0 h-full w-full flex justify-between items-end opacity-40 px-10">
<img alt="" className="w-64 h-64 object-cover rounded-full mix-blend-multiply translate-y-10 -translate-x-10" src="https://images.unsplash.com/photo-1560790671-b76ca4de55ef?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<img alt="" className="w-80 h-80 object-cover rounded-full mix-blend-multiply translate-y-20" src="https://images.unsplash.com/photo-1560790671-b76ca4de55ef?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<img alt="" className="w-72 h-72 object-cover rounded-full mix-blend-multiply translate-y-12 translate-x-10" src="https://images.unsplash.com/photo-1560790671-b76ca4de55ef?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<h1 className="font-sans text-[20vw] font-bold leading-[0.7] tracking-tighter text-gray-900 relative z-10 bottom-[-5%] text-center w-full">Hireflow</h1>
</div>
</footer>

    </>
  );
}
