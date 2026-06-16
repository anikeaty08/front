import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Progress Bar
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById('progress').style.width = scrolled + '%';
        });

        // Intersection Observer for Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Trigger animation
                    entry.target.classList.remove('opacity-0', 'translate-y-8');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    
                    // Unobserve after animating once
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-item').forEach(item => {
            observer.observe(item);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-1.5 bg-gray-200 z-50">
<div className="h-full bg-orange-500 w-0 transition-all duration-75" id="progress"></div>
</div>

<main className="w-full max-w-[1920px] mx-auto bg-white flex flex-col shadow-2xl relative overflow-hidden">

<section className="min-h-screen w-full bg-[#f4f5f7] relative flex flex-col border-b border-gray-200">
<div className="w-full max-w-[1280px] mx-auto px-6 py-20 lg:px-12 flex-1 flex flex-col justify-center relative">
<div className="absolute top-10 left-6 lg:top-16 lg:left-8 -rotate-90 origin-top-left text-xs font-medium tracking-widest text-gray-500 hidden md:block">tidyhire</div>
<div className="absolute bottom-10 left-6 lg:bottom-12 lg:left-8 text-base font-medium text-gray-500 hidden md:block">01</div>
<div className="flex-1 flex flex-col items-center justify-center text-center mt-12 lg:mt-0">
<h1 className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out text-5xl lg:text-7xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
                        Reimagining the Future of <br/>Hiring with <span className="text-orange-600">AI</span>
</h1>
<p className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out mt-8 text-lg lg:text-2xl text-gray-600 max-w-4xl tracking-tight mx-auto">
                        One OS that replaces RPOs, point solutions, and manual hiring — end to end.
                    </p>
<div className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out flex flex-col md:flex-row gap-6 mt-16 w-full justify-center">
<div className="bg-orange-600 p-8 rounded-xl w-full md:w-64 text-left shadow-md">
<div className="text-3xl font-semibold tracking-tight text-white mb-2">1 Billion</div>
<div className="text-lg text-orange-100 font-medium tracking-tight">Conversations</div>
</div>
<div className="bg-orange-600 p-8 rounded-xl w-full md:w-64 text-left shadow-md">
<div className="text-3xl font-semibold tracking-tight text-white mb-2">1 Million</div>
<div className="text-lg text-orange-100 font-medium tracking-tight">Hires</div>
</div>
<div className="bg-orange-600 p-8 rounded-xl w-full md:w-64 text-left shadow-md">
<div className="text-3xl font-semibold tracking-tight text-white mb-2">1 OS</div>
<div className="text-lg text-orange-100 font-medium tracking-tight">To Run It All</div>
</div>
</div>
</div>
</div>

<div className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out w-full bg-white border-t border-gray-200">
<div className="max-w-[1280px] mx-auto py-6 px-6 lg:px-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm lg:text-base font-medium text-gray-600 hidden md:flex">
<span>$878K revenue</span><span className="text-gray-300">|</span>
<span>0% churn</span><span className="text-gray-300">|</span>
<span>28 accounts</span><span className="text-gray-300">|</span>
<span>85% joining</span><span className="text-gray-300">|</span>
<span>48-hr deploy</span><span className="text-gray-300">|</span>
<span>3 continents</span>
</div>
</div>
</section>

<section className="min-h-screen w-full bg-white relative flex flex-col justify-center border-b border-gray-100 py-20">
<div className="w-full max-w-[1280px] mx-auto px-6 lg:px-12 flex flex-col relative">
<div className="absolute top-0 left-6 lg:top-0 lg:left-8 -rotate-90 origin-top-left text-xs font-medium tracking-widest text-gray-500 hidden md:block">tidyhire</div>
<div className="absolute bottom-0 left-6 lg:bottom-0 lg:left-8 text-base font-medium text-gray-500 hidden md:block">02</div>
<div className="flex flex-col lg:flex-row justify-between items-start gap-12 pt-8 lg:pt-0 pl-0 lg:pl-20">
<div className="w-full lg:w-1/3 pt-0 lg:pt-12 animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out">
<h2 className="text-4xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
                            PMF <br/><span className="text-orange-600">Confirmed</span>
</h2>
<p className="mt-6 text-xl text-gray-500 max-w-sm tracking-tight">Early indicators show massive demand and exceptional retention across enterprise clients.</p>
</div>
<div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 relative right-0 animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out">
<div className="bg-orange-600 rounded-xl p-8 lg:p-10 flex flex-col justify-end shadow-md min-h-[14rem] md:col-start-2">
<div className="text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-3">$878K</div>
<div className="text-lg text-orange-100 font-medium">FY26 Revenue</div>
</div>
<div className="bg-orange-600 rounded-xl p-8 lg:p-10 flex flex-col justify-end shadow-md min-h-[14rem]">
<div className="text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-3">$2M</div>
<div className="text-lg text-orange-100 font-medium">Weighted Pipeline</div>
</div>
<div className="bg-orange-600 rounded-xl p-8 lg:p-10 flex flex-col justify-end shadow-md min-h-[14rem]">
<div className="text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-3">0%</div>
<div className="text-lg text-orange-100 font-medium">Logo Churn</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pl-0 lg:pl-20 animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out">
<div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
<iconify-icon className="text-orange-600 text-3xl mb-4" icon="solar:users-group-rounded-linear"></iconify-icon>
<div className="text-2xl font-semibold tracking-tight text-gray-900">250</div>
<div className="text-sm lg:text-base text-gray-500 mt-1">Hires delivered</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
<iconify-icon className="text-orange-600 text-3xl mb-4" icon="solar:user-check-rounded-linear"></iconify-icon>
<div className="text-2xl font-semibold tracking-tight text-gray-900">85%</div>
<div className="text-sm lg:text-base text-gray-500 mt-1">Joining ratio</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
<iconify-icon className="text-orange-600 text-3xl mb-4" icon="solar:bolt-linear"></iconify-icon>
<div className="text-2xl font-semibold tracking-tight text-gray-900">48 hr</div>
<div className="text-sm lg:text-base text-gray-500 mt-1">Deploy time</div>
</div>
<div className="bg-orange-600 border border-orange-500 rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
<iconify-icon className="text-white text-3xl mb-4" icon="solar:graph-up-linear"></iconify-icon>
<div className="text-2xl font-semibold tracking-tight text-white">75:1 <span className="text-orange-200 font-normal">&amp;</span> 145%</div>
<div className="text-sm lg:text-base text-orange-100 mt-1">LTV:CAC | NRR</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen w-full bg-[#f4f5f7] relative flex flex-col justify-center border-b border-gray-200 py-20">
<div className="w-full max-w-[1280px] mx-auto px-6 lg:px-12 flex flex-col relative">
<div className="absolute top-0 left-6 lg:top-0 lg:left-8 -rotate-90 origin-top-left text-xs font-medium tracking-widest text-gray-500 hidden md:block">tidyhire</div>
<div className="absolute bottom-0 left-6 lg:bottom-0 lg:left-8 text-base font-medium text-gray-500 hidden md:block">03</div>
<div className="pl-0 lg:pl-20">
<h2 className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-12 lg:mb-16">
                        Explosive Early <span className="text-orange-600">Growth</span>
</h2>
<div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

<div className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out w-full lg:w-1/2 flex flex-col bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-sm min-h-[400px]">
<h3 className="text-xl font-medium tracking-tight text-gray-800 mb-12">Quarterly Revenue Trajectory</h3>
<div className="flex-1 flex items-end gap-4 lg:gap-6 justify-between border-b border-gray-200 pb-4 relative min-h-[250px]">
<div className="absolute w-full top-0 h-[1px] bg-gray-100"></div>
<div className="absolute w-full top-1/3 h-[1px] bg-gray-100"></div>
<div className="absolute w-full top-2/3 h-[1px] bg-gray-100"></div>
<div className="flex flex-col items-center gap-3 relative z-10 w-full h-full justify-end group">
<div className="text-sm lg:text-base font-medium text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">$62K</div>
<div className="w-full bg-orange-100 rounded-t-md h-[16%] transition-all hover:bg-orange-200"></div>
<div className="text-sm lg:text-base text-gray-400">Q1</div>
</div>
<div className="flex flex-col items-center gap-3 relative z-10 w-full h-full justify-end group">
<div className="text-sm lg:text-base font-medium text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">$131K</div>
<div className="w-full bg-orange-300 rounded-t-md h-[34%] transition-all hover:bg-orange-400"></div>
<div className="text-sm lg:text-base text-gray-400">Q2</div>
</div>
<div className="flex flex-col items-center gap-3 relative z-10 w-full h-full justify-end group">
<div className="text-sm lg:text-base font-medium text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">$302K</div>
<div className="w-full bg-orange-400 rounded-t-md h-[78%] transition-all hover:bg-orange-500"></div>
<div className="text-sm lg:text-base text-gray-400">Q3</div>
</div>
<div className="flex flex-col items-center gap-3 relative z-10 w-full h-full justify-end">
<div className="text-sm lg:text-base font-medium text-gray-900">$383K</div>
<div className="w-full bg-orange-600 rounded-t-md h-[100%] transition-all shadow-md"></div>
<div className="text-sm lg:text-base font-medium text-gray-900">Q4</div>
</div>
</div>
</div>

<div className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out w-full lg:w-1/2 flex flex-col justify-center">
<h3 className="text-xl font-medium tracking-tight text-gray-800 mb-8">FY27 Revenue Build</h3>
<div className="space-y-4 mb-12">
<div className="flex justify-between items-center bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<span className="text-base lg:text-lg text-gray-600 flex items-center gap-3"><div className="w-3 h-3 rounded-full bg-gray-300"></div>Existing</span>
<span className="text-lg lg:text-xl font-medium tracking-tight text-gray-900">$878K</span>
</div>
<div className="flex justify-between items-center bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<span className="text-base lg:text-lg text-gray-600 flex items-center gap-3"><div className="w-3 h-3 rounded-full bg-orange-200"></div>Pipeline</span>
<span className="text-lg lg:text-xl font-medium tracking-tight text-gray-900">$800K</span>
</div>
<div className="flex justify-between items-center bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<span className="text-base lg:text-lg text-gray-600 flex items-center gap-3"><div className="w-3 h-3 rounded-full bg-orange-400"></div>Expansion</span>
<span className="text-lg lg:text-xl font-medium tracking-tight text-gray-900">$400K</span>
</div>
<div className="flex justify-between items-center bg-orange-50 p-5 rounded-xl border border-orange-200 shadow-sm">
<span className="text-base lg:text-lg text-orange-800 font-medium flex items-center gap-3"><div className="w-3 h-3 rounded-full bg-orange-600"></div>New Logos</span>
<span className="text-lg lg:text-xl font-medium tracking-tight text-orange-800">$1.92M</span>
</div>
</div>
<div className="border-t-2 border-gray-200 pt-8 flex justify-between items-end">
<div className="text-xl lg:text-2xl text-gray-500 font-medium tracking-tight">Target FY27</div>
<div className="text-5xl lg:text-6xl font-semibold tracking-tight text-orange-600">$4.0M</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen w-full bg-white relative flex flex-col justify-center border-b border-gray-100 py-20">
<div className="w-full max-w-[1280px] mx-auto px-6 lg:px-12 flex flex-col relative">
<div className="absolute top-0 left-6 lg:top-0 lg:left-8 -rotate-90 origin-top-left text-xs font-medium tracking-widest text-gray-500 hidden md:block">tidyhire</div>
<div className="absolute bottom-0 left-6 lg:bottom-0 lg:left-8 text-base font-medium text-gray-500 hidden md:block">04</div>
<div className="pl-0 lg:pl-20">
<h2 className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-12 lg:mb-16 text-center">
                        Hiring Is Still <span className="text-orange-600">Manual</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-sm flex flex-col">
<div className="h-16 w-16 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-gray-400 text-3xl" icon="solar:buildings-2-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6 pb-4 border-b border-gray-100">Agencies</h3>
<div className="flex flex-wrap gap-2 text-sm lg:text-base text-gray-400 mb-8 font-medium">
<span>Randstad</span> · <span>Adecco</span> · <span>ANSR</span>
</div>
<ul className="space-y-5 text-base lg:text-lg text-gray-600 flex-1">
<li className="flex items-start gap-3"><iconify-icon className="text-red-400 text-2xl shrink-0" icon="solar:close-circle-linear"></iconify-icon>15–25% CTC cost</li>
<li className="flex items-start gap-3"><iconify-icon className="text-red-400 text-2xl shrink-0" icon="solar:close-circle-linear"></iconify-icon>Resume dumping</li>
<li className="flex items-start gap-3"><iconify-icon className="text-red-400 text-2xl shrink-0" icon="solar:close-circle-linear"></iconify-icon>Low joining ratio</li>
</ul>
</div>

<div className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-sm flex flex-col" style={{transitionDelay: '100ms'}}>
<div className="h-16 w-16 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-gray-400 text-3xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6 pb-4 border-b border-gray-100">Internal Teams</h3>
<div className="flex flex-wrap gap-2 text-sm lg:text-base text-gray-400 mb-8 font-medium">
<span>Recruiters</span> · <span>Managers</span>
</div>
<ul className="space-y-5 text-base lg:text-lg text-gray-600 flex-1">
<li className="flex items-start gap-3"><iconify-icon className="text-red-400 text-2xl shrink-0" icon="solar:close-circle-linear"></iconify-icon>Endless manual screening</li>
<li className="flex items-start gap-3"><iconify-icon className="text-red-400 text-2xl shrink-0" icon="solar:close-circle-linear"></iconify-icon>5000+ hrs/year wasted</li>
<li className="flex items-start gap-3"><iconify-icon className="text-red-400 text-2xl shrink-0" icon="solar:close-circle-linear"></iconify-icon>Candidate ghosting</li>
</ul>
</div>

<div className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-sm flex flex-col" style={{transitionDelay: '200ms'}}>
<div className="h-16 w-16 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-gray-400 text-3xl" icon="solar:devices-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6 pb-4 border-b border-gray-100">Software</h3>
<div className="flex flex-wrap gap-2 text-sm lg:text-base text-gray-400 mb-8 font-medium">
<span>HireVue</span> · <span>Greenhouse</span> · <span>Workday</span>
</div>
<ul className="space-y-5 text-base lg:text-lg text-gray-600 flex-1">
<li className="flex items-start gap-3"><iconify-icon className="text-red-400 text-2xl shrink-0" icon="solar:close-circle-linear"></iconify-icon>Passive tracking only</li>
<li className="flex items-start gap-3"><iconify-icon className="text-red-400 text-2xl shrink-0" icon="solar:close-circle-linear"></iconify-icon>Fragmented tool stack</li>
<li className="flex items-start gap-3"><iconify-icon className="text-red-400 text-2xl shrink-0" icon="solar:close-circle-linear"></iconify-icon>No active intelligence</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen w-full bg-orange-600 relative flex flex-col justify-center py-20">
<div className="w-full max-w-[1280px] mx-auto px-6 lg:px-12 flex flex-col relative">
<div className="absolute top-0 left-6 lg:top-0 lg:left-8 -rotate-90 origin-top-left text-xs font-medium tracking-widest text-orange-300 hidden md:block">tidyhire</div>
<div className="absolute bottom-0 left-6 lg:bottom-0 lg:left-8 text-base font-medium text-orange-300 hidden md:block">05</div>
<div className="flex-1 flex flex-col items-center justify-center text-center pl-0 lg:pl-20">
<div className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out space-y-4 mb-16">
<p className="text-2xl lg:text-4xl text-orange-200 font-medium tracking-tight">Every workflow has an OS.</p>
<p className="text-2xl lg:text-4xl text-orange-200 font-medium tracking-tight">Every department is automated.</p>
</div>
<h2 className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out text-4xl lg:text-6xl font-semibold tracking-tight text-white leading-tight max-w-4xl" style={{transitionDelay: '150ms'}}>
                        Hiring is the <span className="text-orange-200">last manual</span> business function.
                    </h2>
<div className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out mt-16 lg:mt-24 pt-12 border-t border-orange-500 w-full max-w-2xl" style={{transitionDelay: '300ms'}}>
<p className="text-xl lg:text-2xl text-orange-100 font-medium tracking-tight">"More recruiters = more hires."</p>
<p className="text-base lg:text-lg text-orange-300 mt-2">That's the broken model today.</p>
</div>
</div>
</div>
</section>

<section className="min-h-screen w-full bg-[#f4f5f7] relative flex flex-col justify-center border-b border-gray-200 py-20">
<div className="w-full max-w-[1280px] mx-auto px-6 lg:px-12 flex flex-col relative">
<div className="absolute top-0 left-6 lg:top-0 lg:left-8 -rotate-90 origin-top-left text-xs font-medium tracking-widest text-gray-500 hidden md:block">tidyhire</div>
<div className="absolute bottom-0 left-6 lg:bottom-0 lg:left-8 text-base font-medium text-gray-500 hidden md:block">06</div>
<div className="pl-0 lg:pl-20">
<h2 className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-12 lg:mb-16 text-center">
                        The AI-Led <span className="text-orange-600">Hiring OS</span>
</h2>
<div className="flex flex-col lg:flex-row items-stretch justify-center gap-8">

<div className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-sm w-full lg:w-80 flex flex-col">
<div className="text-xs lg:text-sm font-medium tracking-widest text-gray-400 uppercase mb-4">Service</div>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">Augmented</h3>
<p className="text-base lg:text-lg text-gray-500 mb-8 lg:h-14">Expert Recruiters <br/>+ AI agents</p>
<ul className="space-y-4 text-base lg:text-lg text-gray-700 flex-1 pt-8 border-t border-gray-100">
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>$2,500 per hire</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>85% joining rate</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>48 hour deploy</li>
</ul>
</div>

<div className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out bg-orange-600 rounded-2xl p-8 lg:p-10 shadow-lg w-full lg:w-80 flex flex-col relative lg:-translate-y-4" style={{transitionDelay: '100ms'}}>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs lg:text-sm font-medium px-4 py-1 rounded-full tracking-tight whitespace-nowrap shadow-sm">Core Platform</div>
<div className="text-xs lg:text-sm font-medium tracking-widest text-orange-200 uppercase mb-4 mt-2">Platform</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2">AI-Native ATS</h3>
<p className="text-base lg:text-lg text-orange-100 mb-8 lg:h-14">Param.ai system</p>
<ul className="space-y-4 text-base lg:text-lg text-white flex-1 pt-8 border-t border-orange-500">
<li className="flex items-center gap-3"><iconify-icon className="text-orange-200 text-xl" icon="solar:check-circle-linear"></iconify-icon>Intelligent tracking</li>
<li className="flex items-center gap-3"><iconify-icon className="text-orange-200 text-xl" icon="solar:check-circle-linear"></iconify-icon>Predictive analytics</li>
<li className="flex items-center gap-3"><iconify-icon className="text-orange-200 text-xl" icon="solar:check-circle-linear"></iconify-icon>Data flywheel</li>
</ul>
</div>

<div className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-sm w-full lg:w-80 flex flex-col" style={{transitionDelay: '200ms'}}>
<div className="text-xs lg:text-sm font-medium tracking-widest text-gray-400 uppercase mb-4">Automation</div>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">Autonomous AI</h3>
<p className="text-base lg:text-lg text-gray-500 mb-8 lg:h-14">RIA + CHARLIE</p>
<ul className="space-y-4 text-base lg:text-lg text-gray-700 flex-1 pt-8 border-t border-gray-100">
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>AI voice screening</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>AI video interviews</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>1200 screens/day</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen w-full bg-white relative flex flex-col justify-center border-b border-gray-100 py-20">
<div className="w-full max-w-[1280px] mx-auto px-6 lg:px-12 flex flex-col relative">
<div className="absolute top-0 left-6 lg:top-0 lg:left-8 -rotate-90 origin-top-left text-xs font-medium tracking-widest text-gray-500 hidden md:block">tidyhire</div>
<div className="absolute bottom-0 left-6 lg:bottom-0 lg:left-8 text-base font-medium text-gray-500 hidden md:block">07</div>
<div className="pl-0 lg:pl-20">
<h2 className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-12 lg:mb-16 text-center">
                        Who Buys <span className="text-orange-600">TidyHire</span>
</h2>
<div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

<div className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out w-full lg:w-1/2 bg-white rounded-2xl p-8 lg:p-12 border border-gray-200 shadow-sm flex flex-col">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center">
<iconify-icon className="text-orange-600 text-2xl" icon="solar:buildings-linear"></iconify-icon>
</div>
<h3 className="text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">GCCs &amp; New Entities</h3>
</div>
<div className="inline-block bg-gray-100 text-gray-700 text-xs lg:text-sm font-medium px-4 py-1.5 rounded-full mb-8 self-start">Augmented Model</div>
<ul className="space-y-4 lg:space-y-6 text-lg lg:text-xl text-gray-600 flex-1">
<li className="flex items-center gap-4"><iconify-icon className="text-orange-500 text-xl" icon="solar:arrow-right-linear"></iconify-icon>500 – 50,000 employees</li>
<li className="flex items-center gap-4"><iconify-icon className="text-orange-500 text-xl" icon="solar:arrow-right-linear"></iconify-icon>50 – 500 hires/year</li>
<li className="flex items-center gap-4"><iconify-icon className="text-orange-500 text-xl" icon="solar:arrow-right-linear"></iconify-icon>$500k – $2M hiring budget</li>
</ul>
</div>

<div className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out w-full lg:w-1/2 bg-orange-600 rounded-2xl p-8 lg:p-12 shadow-md flex flex-col text-white" style={{transitionDelay: '150ms'}}>
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center">
<iconify-icon className="text-white text-2xl" icon="solar:global-linear"></iconify-icon>
</div>
<h3 className="text-2xl lg:text-3xl font-semibold tracking-tight text-white">Large Enterprises</h3>
</div>
<div className="inline-block bg-orange-500 text-white text-xs lg:text-sm font-medium px-4 py-1.5 rounded-full mb-8 self-start shadow-sm">Autonomous Model</div>
<ul className="space-y-4 lg:space-y-6 text-lg lg:text-xl text-orange-100 flex-1">
<li className="flex items-center gap-4"><iconify-icon className="text-white text-xl" icon="solar:arrow-right-linear"></iconify-icon>1,000 – 100,000 employees</li>
<li className="flex items-center gap-4"><iconify-icon className="text-white text-xl" icon="solar:arrow-right-linear"></iconify-icon>200 – 5,000 hires/year</li>
<li className="flex items-center gap-4"><iconify-icon className="text-white text-xl" icon="solar:arrow-right-linear"></iconify-icon>$100k – $500k AI budget</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen w-full bg-[#f4f5f7] relative flex flex-col justify-center border-b border-gray-200 py-20">
<div className="w-full max-w-[1280px] mx-auto px-6 lg:px-12 flex flex-col relative">
<div className="absolute top-0 left-6 lg:top-0 lg:left-8 -rotate-90 origin-top-left text-xs font-medium tracking-widest text-gray-500 hidden md:block">tidyhire</div>
<div className="absolute bottom-0 left-6 lg:bottom-0 lg:left-8 text-base font-medium text-gray-500 hidden md:block">08</div>
<div className="pl-0 lg:pl-20">
<h2 className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-16 lg:mb-20 text-center">
                        One <span className="text-orange-600">AI Core</span>
</h2>
<div className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out flex flex-col lg:flex-row justify-between items-center relative gap-12 lg:gap-0">

<div className="hidden lg:block absolute top-1/2 left-10 right-10 h-1 bg-gray-200 -z-10 -translate-y-1/2 rounded-full"></div>

<div className="bg-white border-2 border-gray-200 rounded-2xl p-6 lg:p-8 w-full lg:w-72 text-center shadow-sm relative z-10 group hover:border-orange-500 transition-colors">
<div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-600 transition-colors duration-300">
<iconify-icon className="text-orange-600 text-3xl group-hover:text-white transition-colors duration-300" icon="solar:cpu-linear"></iconify-icon>
</div>
<h3 className="text-xl lg:text-2xl font-semibold tracking-tight text-gray-900 mb-2">CHARLIE + RIA</h3>
<p className="text-base lg:text-lg text-gray-500 font-medium">AI Screening &amp; Interviews</p>
</div>

<div className="bg-orange-600 border-4 border-white rounded-3xl p-8 lg:p-10 w-full lg:w-80 text-center shadow-xl relative z-20 lg:scale-110">
<div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
<iconify-icon className="text-white text-4xl" icon="solar:server-square-linear"></iconify-icon>
</div>
<h3 className="text-2xl lg:text-3xl font-semibold tracking-tight text-white mb-2">Param.ai</h3>
<p className="text-lg lg:text-xl text-orange-100 font-medium">AI Native ATS</p>
</div>

<div className="bg-white border-2 border-gray-200 rounded-2xl p-6 lg:p-8 w-full lg:w-72 text-center shadow-sm relative z-10 group hover:border-orange-500 transition-colors">
<div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-600 transition-colors duration-300">
<iconify-icon className="text-orange-600 text-3xl group-hover:text-white transition-colors duration-300" icon="solar:user-plus-rounded-linear"></iconify-icon>
</div>
<h3 className="text-xl lg:text-2xl font-semibold tracking-tight text-gray-900 mb-2">Recruiter + AI</h3>
<p className="text-base lg:text-lg text-gray-500 font-medium">Augmented Agency Delivery</p>
</div>
</div>
<div className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out mt-12 lg:mt-20 text-center">
<p className="text-2xl lg:text-3xl font-semibold tracking-tight text-gray-800">One core. <span className="text-orange-600">Two delivery models.</span></p>
</div>
</div>
</div>
</section>

<section className="min-h-screen w-full bg-white relative flex flex-col justify-center border-b border-gray-100 py-20">
<div className="w-full max-w-[1280px] mx-auto px-6 lg:px-12 flex flex-col relative">
<div className="absolute top-0 left-6 lg:top-0 lg:left-8 -rotate-90 origin-top-left text-xs font-medium tracking-widest text-gray-500 hidden md:block">tidyhire</div>
<div className="absolute bottom-0 left-6 lg:bottom-0 lg:left-8 text-base font-medium text-gray-500 hidden md:block">09</div>
<div className="pl-0 lg:pl-20">
<h2 className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-12 lg:mb-16 text-center">
                        The <span className="text-orange-600">Moat</span>
</h2>
<div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

<div className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out w-full lg:w-1/2 bg-white rounded-2xl p-8 lg:p-12 border border-gray-200 shadow-sm flex flex-col items-center justify-center text-center">
<h3 className="text-xl lg:text-2xl font-semibold tracking-tight text-gray-500 mb-8 lg:mb-12">Traditional RPO</h3>
<div className="flex flex-col gap-4 mb-8 lg:mb-12 w-full max-w-xs">
<div className="bg-gray-100 px-6 py-3 rounded-lg flex items-center justify-center gap-3 border border-gray-200">
<iconify-icon className="text-gray-500 text-xl" icon="solar:user-rounded-linear"></iconify-icon>
<span className="text-base lg:text-lg font-medium text-gray-700">Recruiter</span>
</div>
<div className="bg-gray-100 px-6 py-3 rounded-lg flex items-center justify-center gap-3 border border-gray-200">
<iconify-icon className="text-gray-500 text-xl" icon="solar:user-rounded-linear"></iconify-icon>
<span className="text-base lg:text-lg font-medium text-gray-700">Recruiter</span>
</div>
<div className="bg-gray-100 px-6 py-3 rounded-lg flex items-center justify-center gap-3 border border-gray-200">
<iconify-icon className="text-gray-500 text-xl" icon="solar:user-rounded-linear"></iconify-icon>
<span className="text-base lg:text-lg font-medium text-gray-700">Recruiter</span>
</div>
</div>
<div className="space-y-2">
<div className="text-lg lg:text-xl text-gray-800 font-medium">1:1 service model</div>
<div className="text-lg lg:text-xl text-red-500 font-medium">Linear cost to scale</div>
</div>
</div>

<div className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out w-full lg:w-1/2 bg-orange-50 rounded-2xl p-8 lg:p-12 border border-orange-200 shadow-sm flex flex-col items-center justify-center text-center" style={{transitionDelay: '150ms'}}>
<h3 className="text-xl lg:text-2xl font-semibold tracking-tight text-orange-800 mb-8 lg:mb-12">TidyHire OS</h3>
<div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 mb-8 lg:mb-12 relative">
<div className="bg-white px-6 py-4 rounded-xl flex items-center gap-3 border-2 border-orange-200 shadow-sm z-10 w-full lg:w-auto justify-center">
<iconify-icon className="text-orange-600 text-2xl" icon="solar:user-check-rounded-linear"></iconify-icon>
<span className="text-lg lg:text-xl font-semibold text-gray-900">1 Recruiter</span>
</div>
<iconify-icon className="text-orange-400 text-3xl rotate-90 lg:rotate-0" icon="solar:arrow-right-linear"></iconify-icon>
<div className="bg-orange-600 px-6 py-4 rounded-xl flex items-center gap-3 shadow-md z-10 w-full lg:w-auto justify-center">
<iconify-icon className="text-white text-2xl" icon="solar:smart-speaker-linear"></iconify-icon>
<span className="text-lg lg:text-xl font-semibold text-white">100 AI Agents</span>
</div>
</div>
<div className="space-y-2">
<div className="text-lg lg:text-xl text-gray-800 font-medium">1:Many productized service</div>
<div className="text-lg lg:text-xl text-green-600 font-medium">Infinite scalability, low marginal cost</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen w-full bg-orange-600 relative flex flex-col justify-center">
<div className="w-full max-w-[1280px] mx-auto px-6 py-20 lg:px-12 flex flex-col relative flex-1 items-center justify-center">
<div className="absolute top-10 left-6 lg:top-16 lg:left-8 -rotate-90 origin-top-left text-xs font-medium tracking-widest text-orange-300 hidden md:block">tidyhire</div>
<div className="absolute bottom-10 left-6 lg:bottom-12 lg:left-8 text-base font-medium text-orange-300 hidden md:block">10</div>
<div className="flex-1 flex flex-col items-center justify-center text-center">
<h2 className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out text-5xl lg:text-8xl font-semibold tracking-tight text-white leading-tight mb-8">
                        Raising $5M
                    </h2>
<p className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out text-2xl lg:text-4xl text-orange-100 font-medium tracking-tight max-w-2xl leading-snug" style={{transitionDelay: '150ms'}}>
                        to build the definitive<br/>
<span className="text-white font-semibold">AI-Led Hiring OS</span>
</p>
</div>
</div>

<div className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out w-full bg-gray-900" style={{transitionDelay: '300ms'}}>
<div className="max-w-[1280px] mx-auto py-8 px-6 lg:px-12 flex flex-wrap justify-center gap-12 lg:gap-24 text-center">
<div>
<div className="text-3xl lg:text-4xl font-semibold tracking-tight text-white">1B</div>
<div className="text-xs lg:text-base text-gray-400 font-medium mt-1">Conversations</div>
</div>
<div>
<div className="text-3xl lg:text-4xl font-semibold tracking-tight text-white">1M</div>
<div className="text-xs lg:text-base text-gray-400 font-medium mt-1">Hires</div>
</div>
<div>
<div className="text-3xl lg:text-4xl font-semibold tracking-tight text-white">1</div>
<div className="text-xs lg:text-base text-gray-400 font-medium mt-1">OS</div>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
