import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Enable dark mode based on system/device preference
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative overflow-hidden py-16">

<div className="max-w-7xl mx-auto px-6 mb-16">
<div className="text-center">
<span className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-blue-100 via-emerald-100 to-purple-100 dark:from-blue-900 dark:via-emerald-900 dark:to-purple-900 text-xs font-semibold text-blue-700 dark:text-blue-300 tracking-wider uppercase transition">
          Testimonials
        </span>
<h2 className="mb-6 text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
          Trusted by <span className="text-blue-600 dark:text-blue-400">Industry Leaders</span>
</h2>
<p className="mb-8 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 font-inter font-normal leading-snug">
          See what our customers are saying about our platform and how it has transformed their workflow.
        </p>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 w-full">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative p-8 rounded-2xl border border-gray-100/80 dark:border-white/10 bg-white dark:bg-black hover:shadow-2xl hover:-translate-y-1 shadow dark:shadow-lg transition-all">
<div className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-100">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:5px_5px]"></div>
</div>
<div className="relative flex flex-col h-full">

<div className="text-blue-500 mb-6">
<svg className="fill-current opacity-20" height="36" viewbox="0 0 45 36" width="45" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 0C6.04 0 0 6.04 0 13.5C0 20.96 6.04 27 13.5 27H18V36H9C4.03 36 0 31.97 0 27V25.65C0 22.77 1.17 20.04 3.26 17.96C5.34 15.87 8.07 14.7 10.95 14.7H13.5C16.8 14.7 19.8 12.15 20.25 8.85C20.25 8.85 20.25 8.55 20.25 8.55C20.25 3.83 16.42 0 11.7 0H13.5ZM40.5 0C33.04 0 27 6.04 27 13.5C27 20.96 33.04 27 40.5 27H45V36H36C31.03 36 27 31.97 27 27V25.65C27 22.77 28.17 20.04 30.26 17.96C32.34 15.87 35.07 14.7 37.95 14.7H40.5C43.8 14.7 46.8 12.15 47.25 8.85C47.25 8.85 47.25 8.55 47.25 8.55C47.25 3.83 43.42 0 38.7 0H40.5Z"></path>
</svg>
</div>

<p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-inter mb-8 flex-grow">
              The Smart UI Builder revolutionized how we approach design. We've reduced our development time by 40% while maintaining exceptional quality. The AI-driven components are intuitive and the responsive layouts work flawlessly across all devices.
            </p>

<div className="flex items-center mt-auto">
<img alt="Sarah Johnson" className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-blue-100 dark:border-blue-900" src="https://randomuser.me/api/portraits/women/32.jpg"/>
<div>
<h4 className="font-semibold text-gray-900 dark:text-white">Sarah Johnson</h4>
<p className="text-sm text-gray-500 dark:text-gray-400 font-inter">CTO, TechFusion</p>
</div>
</div>
</div>
<div className="absolute inset-0 -z-10 rounded-2xl p-px bg-gradient-to-br from-transparent via-blue-100/40 to-transparent dark:via-blue-800/20"></div>
</div>

<div className="group relative p-8 rounded-2xl border border-gray-100/80 dark:border-white/10 bg-white dark:bg-black hover:shadow-2xl hover:-translate-y-1 shadow dark:shadow-lg transition-all">
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:5px_5px]"></div>
</div>
<div className="relative flex flex-col h-full">

<div className="text-emerald-500 mb-6">
<svg className="fill-current opacity-20" height="36" viewbox="0 0 45 36" width="45" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 0C6.04 0 0 6.04 0 13.5C0 20.96 6.04 27 13.5 27H18V36H9C4.03 36 0 31.97 0 27V25.65C0 22.77 1.17 20.04 3.26 17.96C5.34 15.87 8.07 14.7 10.95 14.7H13.5C16.8 14.7 19.8 12.15 20.25 8.85C20.25 8.85 20.25 8.55 20.25 8.55C20.25 3.83 16.42 0 11.7 0H13.5ZM40.5 0C33.04 0 27 6.04 27 13.5C27 20.96 33.04 27 40.5 27H45V36H36C31.03 36 27 31.97 27 27V25.65C27 22.77 28.17 20.04 30.26 17.96C32.34 15.87 35.07 14.7 37.95 14.7H40.5C43.8 14.7 46.8 12.15 47.25 8.85C47.25 8.85 47.25 8.55 47.25 8.55C47.25 3.83 43.42 0 38.7 0H40.5Z"></path>
</svg>
</div>

<p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-inter mb-8 flex-grow">
              Flow Engine has transformed our team's productivity. The visual automation tools streamlined our approval processes and eliminated bottlenecks. What used to take days now happens in minutes. The ROI has been incredible for our organization.
            </p>

<div className="flex items-center mt-auto">
<img alt="Marcus Chen" className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-emerald-100 dark:border-emerald-900" src="https://randomuser.me/api/portraits/men/54.jpg"/>
<div>
<h4 className="font-semibold text-gray-900 dark:text-white">Marcus Chen</h4>
<p className="text-sm text-gray-500 dark:text-gray-400 font-inter">Product Director, Elevate Studios</p>
</div>
</div>
</div>
<div className="absolute inset-0 -z-10 rounded-2xl p-px bg-gradient-to-br from-transparent via-emerald-100/40 to-transparent dark:via-emerald-800/20"></div>
</div>

<div className="group relative p-8 rounded-2xl border border-gray-100/80 dark:border-white/10 bg-white dark:bg-black hover:shadow-2xl hover:-translate-y-1 shadow dark:shadow-lg transition-all">
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:5px_5px]"></div>
</div>
<div className="relative flex flex-col h-full">

<div className="text-purple-500 mb-6">
<svg className="fill-current opacity-20" height="36" viewbox="0 0 45 36" width="45" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 0C6.04 0 0 6.04 0 13.5C0 20.96 6.04 27 13.5 27H18V36H9C4.03 36 0 31.97 0 27V25.65C0 22.77 1.17 20.04 3.26 17.96C5.34 15.87 8.07 14.7 10.95 14.7H13.5C16.8 14.7 19.8 12.15 20.25 8.85C20.25 8.85 20.25 8.55 20.25 8.55C20.25 3.83 16.42 0 11.7 0H13.5ZM40.5 0C33.04 0 27 6.04 27 13.5C27 20.96 33.04 27 40.5 27H45V36H36C31.03 36 27 31.97 27 27V25.65C27 22.77 28.17 20.04 30.26 17.96C32.34 15.87 35.07 14.7 37.95 14.7H40.5C43.8 14.7 46.8 12.15 47.25 8.85C47.25 8.85 47.25 8.55 47.25 8.55C47.25 3.83 43.42 0 38.7 0H40.5Z"></path>
</svg>
</div>

<p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-inter mb-8 flex-grow">
              Vault Storage solved our asset management nightmare. With teams across three continents, having a single source of truth for our brand assets has been game-changing. The version control and security features give us peace of mind.
            </p>

<div className="flex items-center mt-auto">
<img alt="Aisha Patel" className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-purple-100 dark:border-purple-900" src="https://randomuser.me/api/portraits/women/68.jpg"/>
<div>
<h4 className="font-semibold text-gray-900 dark:text-white">Aisha Patel</h4>
<p className="text-sm text-gray-500 dark:text-gray-400 font-inter">Creative Director, Global Brands</p>
</div>
</div>
</div>
<div className="absolute inset-0 -z-10 rounded-2xl p-px bg-gradient-to-br from-transparent via-purple-100/40 to-transparent dark:via-purple-800/20"></div>
</div>

<div className="group relative p-8 rounded-2xl border border-gray-100/80 dark:border-white/10 bg-white dark:bg-black hover:shadow-2xl hover:-translate-y-1 shadow dark:shadow-lg transition-all">
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:5px_5px]"></div>
</div>
<div className="relative flex flex-col h-full">

<div className="text-sky-500 mb-6">
<svg className="fill-current opacity-20" height="36" viewbox="0 0 45 36" width="45" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 0C6.04 0 0 6.04 0 13.5C0 20.96 6.04 27 13.5 27H18V36H9C4.03 36 0 31.97 0 27V25.65C0 22.77 1.17 20.04 3.26 17.96C5.34 15.87 8.07 14.7 10.95 14.7H13.5C16.8 14.7 19.8 12.15 20.25 8.85C20.25 8.85 20.25 8.55 20.25 8.55C20.25 3.83 16.42 0 11.7 0H13.5ZM40.5 0C33.04 0 27 6.04 27 13.5C27 20.96 33.04 27 40.5 27H45V36H36C31.03 36 27 31.97 27 27V25.65C27 22.77 28.17 20.04 30.26 17.96C32.34 15.87 35.07 14.7 37.95 14.7H40.5C43.8 14.7 46.8 12.15 47.25 8.85C47.25 8.85 47.25 8.55 47.25 8.55C47.25 3.83 43.42 0 38.7 0H40.5Z"></path>
</svg>
</div>

<p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-inter mb-8 flex-grow">
              Multi-Zone Hosting has been a revelation for our global user base. Page load times decreased by 65% and our application availability is now at 99.99%. The smart failover has saved us during regional outages multiple times.
            </p>

<div className="flex items-center mt-auto">
<img alt="David Rodriguez" className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-sky-100 dark:border-sky-900" src="https://randomuser.me/api/portraits/men/22.jpg"/>
<div>
<h4 className="font-semibold text-gray-900 dark:text-white">David Rodriguez</h4>
<p className="text-sm text-gray-500 dark:text-gray-400 font-inter">VP Engineering, CloudMatrix</p>
</div>
</div>
</div>
<div className="absolute inset-0 -z-10 rounded-2xl p-px bg-gradient-to-br from-transparent via-sky-100/40 to-transparent dark:via-sky-800/20"></div>
</div>
</div>
</div>
</div>


    </>
  );
}
