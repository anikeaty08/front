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
shim: {
blue: '#004080',
lightBlue: '#0060A0',
dark: '#002060',
yellow: '#E0E000',
light: '#F3F4F6'
}
}
}
}
}



        // Init Icons
        lucide.createIcons();

        // Mobile Menu Toggle Logic
        const toggleBtn = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
        const navbar = document.getElementById('navbar-sticky');
        
        toggleBtn.addEventListener('click', () => {
            navbar.classList.toggle('hidden');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-shim-blue/90 backdrop-blur-md">
<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
<a className="flex items-center space-x-3 rtl:space-x-reverse group" href="#">
<div className="w-10 h-10 bg-shim-yellow rounded-full flex items-center justify-center text-shim-blue font-semibold text-lg group-hover:scale-105 transition-transform">
                    S
                </div>
<div className="flex flex-col">
<span className="self-center text-lg font-semibold whitespace-nowrap text-white tracking-tight">Cong. Sun J. Shimura</span>
<span className="text-xs text-shim-yellow font-medium tracking-wide uppercase">4th District, Cebu</span>
</div>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<button className="text-shim-blue bg-shim-yellow hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors" type="button">
                    Get Assistance
                </button>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-white/10 focus:outline-none" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
<li>
<a aria-current="page" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-shim-yellow md:p-0" href="#">Home</a>
</li>
<li>
<a className="block py-2 px-3 text-gray-200 rounded hover:bg-white/10 md:hover:bg-transparent md:hover:text-white md:p-0 transition-colors" href="#services">Services</a>
</li>
<li>
<a className="block py-2 px-3 text-gray-200 rounded hover:bg-white/10 md:hover:bg-transparent md:hover:text-white md:p-0 transition-colors" href="#projects">Projects</a>
</li>
<li>
<a className="block py-2 px-3 text-gray-200 rounded hover:bg-white/10 md:hover:bg-transparent md:hover:text-white md:p-0 transition-colors" href="#about">About</a>
</li>
</ul>
</div>
</div>
</nav>

<section className="relative bg-gradient-to-br from-shim-blue via-shim-lightBlue to-shim-dark pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-shim-yellow opacity-10 rounded-full blur-3xl"></div>
<div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 relative z-10">
<div className="mr-auto place-self-center lg:col-span-7">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-shim-yellow text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-shim-yellow opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-shim-yellow"></span>
</span>
                    Active Now: Medical Assistance Program
                </div>
<h1 className="max-w-2xl mb-6 text-4xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
                    Public Service <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-shim-yellow to-yellow-200">Closer to You.</span>
</h1>
<p className="max-w-2xl mb-8 font-light text-gray-200 lg:mb-10 md:text-lg lg:text-xl leading-relaxed">
                    Welcome to the digital hub of the 4th District of Cebu. Access services, track projects, and connect with Congressman Sun J. Shimura directly from your device.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-center text-shim-blue bg-shim-yellow rounded-lg hover:bg-yellow-300 focus:ring-4 focus:ring-yellow-300 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1" href="#">
                        Book Office Visit
                        <i className="w-4 h-4 ml-2" data-lucide="calendar-days"></i>
</a>
<a className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-center text-white border border-white/30 rounded-lg hover:bg-white/10 focus:ring-4 focus:ring-gray-100 transition-all" href="#">
                        View District Map
                        <i className="w-4 h-4 ml-2" data-lucide="map"></i>
</a>
</div>
</div>
<div className="hidden lg:mt-0 lg:col-span-5 lg:flex relative">

<div className="relative w-full h-full min-h-[500px] flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-t from-shim-blue to-transparent z-10"></div>

<div className="w-full h-full bg-cover bg-center bg-no-repeat rounded-2xl shadow-2xl border border-white/10 overflow-hidden" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp'}}>

<div className="absolute bottom-0 left-0 p-8 w-full z-20">
<div className="backdrop-blur-md bg-white/10 p-4 rounded-xl border border-white/20">
<p className="text-shim-yellow font-semibold text-sm uppercase tracking-wide">@DokTimbancaya</p>
<p className="text-white text-xs mt-1 opacity-90">"Serving with heart, leading with action."</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white relative -mt-10 rounded-t-3xl z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]" id="services">
<div className="max-w-screen-xl mx-auto px-4">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-shim-blue sm:text-4xl">Essential Services</h2>
<p className="mt-4 text-lg text-gray-500 font-light max-w-2xl mx-auto">Skip the lines. Access government assistance and constituent services securely online.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="col-span-1 md:col-span-2 bg-shim-light p-8 rounded-2xl border border-gray-100 hover:border-shim-blue/30 transition-all group relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
<i className="w-32 h-32 text-shim-blue" data-lucide="heart-pulse"></i>
</div>
<div className="relative z-10">
<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-shim-blue">
<i className="w-6 h-6" data-lucide="file-heart"></i>
</div>
<h3 className="text-2xl font-semibold text-gray-900 mb-2 tracking-tight">Medical &amp; Burial Assistance</h3>
<p className="text-gray-600 mb-6 font-light max-w-md">Submit requests for financial aid regarding hospital bills, medicines, or burial needs. Track your application status in real-time.</p>
<a className="inline-flex items-center text-shim-blue font-medium hover:underline decoration-shim-yellow decoration-2 underline-offset-4" href="#">
                            Start Application <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
<div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 text-yellow-700">
<i className="w-6 h-6" data-lucide="scroll-text"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2 tracking-tight">Bills &amp; Laws</h3>
<p className="text-gray-600 mb-6 text-sm">Review authored bills and understand how they impact the 4th District.</p>
<a className="text-sm font-medium text-gray-900 flex items-center opacity-70 hover:opacity-100" href="#">
                        View Legislation <i className="w-4 h-4 ml-1" data-lucide="chevron-right"></i>
</a>
</div>

<div className="bg-shim-blue p-8 rounded-2xl border border-blue-800 text-white shadow-lg md:row-span-2 flex flex-col justify-between overflow-hidden relative">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-shim-yellow">
<i className="w-6 h-6" data-lucide="map-pin"></i>
</div>
<h3 className="text-xl font-semibold mb-2 tracking-tight">Project Map</h3>
<p className="text-blue-100 mb-6 text-sm font-light">Interactive view of infrastructure, health, and educational projects across the district.</p>
</div>
<div className="relative z-10 bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-shim-yellow uppercase font-semibold">Latest Project</span>
<span className="text-[10px] text-white/60">Completed</span>
</div>
<p className="text-sm font-medium">Daanbantayan Multi-Purpose Hall</p>
<div className="mt-3 w-full bg-blue-900/50 rounded-full h-1.5">
<div className="bg-shim-yellow h-1.5 rounded-full" style={{width: '100%'}}></div>
</div>
</div>
</div>

<div className="md:col-span-2 bg-white p-6 rounded-2xl border border-gray-200 flex flex-col md:flex-row items-center gap-6 shadow-sm">
<div className="flex-shrink-0 bg-orange-50 p-4 rounded-full">
<i className="w-6 h-6 text-orange-600" data-lucide="message-square-warning"></i>
</div>
<div className="flex-grow text-center md:text-left">
<h3 className="text-lg font-semibold text-gray-900 tracking-tight">Report a Concern</h3>
<p className="text-gray-500 text-sm">Help us improve the community by reporting local issues or sharing feedback.</p>
</div>
<button className="whitespace-nowrap px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                        Submit Report
                    </button>
</div>
</div>
</div>
</section>

<section className="py-16 bg-gray-50 border-t border-gray-200">
<div className="max-w-screen-xl mx-auto px-4">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div className="max-w-xl">
<h2 className="text-3xl font-semibold tracking-tight text-shim-blue">Development Roadmap</h2>
<p className="mt-2 text-gray-600 font-light">Transparency in action. See where we are headed.</p>
</div>
<a className="hidden md:flex items-center text-sm font-medium text-shim-blue hover:text-shim-dark mt-4 md:mt-0" href="#">
                    See Full Plan <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group">
<div className="flex items-center gap-4 mb-4">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-xs font-bold ring-4 ring-white">01</span>
<div className="h-0.5 w-full bg-gray-200 group-hover:bg-green-200 transition-colors"></div>
</div>
<h3 className="text-lg font-semibold text-gray-900">Health Security</h3>
<p className="mt-2 text-sm text-gray-500 leading-relaxed">Upgrade of district hospitals and expansion of Malasakit Centers in all municipalities.</p>
</div>

<div className="group">
<div className="flex items-center gap-4 mb-4">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-xs font-bold ring-4 ring-white">02</span>
<div className="h-0.5 w-full bg-gray-200 group-hover:bg-blue-200 transition-colors"></div>
</div>
<h3 className="text-lg font-semibold text-gray-900">Education &amp; Sports</h3>
<p className="mt-2 text-sm text-gray-500 leading-relaxed">Scholarship distribution and construction of covered courts for youth development.</p>
</div>

<div className="group">
<div className="flex items-center gap-4 mb-4">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-700 text-xs font-bold ring-4 ring-white">03</span>
<div className="h-0.5 w-full bg-gray-200 group-hover:bg-purple-200 transition-colors"></div>
</div>
<h3 className="text-lg font-semibold text-gray-900">Digital Governance</h3>
<p className="mt-2 text-sm text-gray-500 leading-relaxed">Full implementation of e-governance systems for faster processing of constituent documents.</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-t border-gray-200">
<div className="max-w-screen-xl mx-auto px-4">
<div className="flex items-center gap-3 mb-10">
<div className="p-2 bg-blue-600 rounded-lg text-white">
<i className="w-5 h-5" data-lucide="facebook"></i>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">Latest Updates</h2>
</div>
<div className="flex overflow-x-auto gap-6 no-scrollbar pb-4 snap-x snap-mandatory">

<div className="min-w-[300px] md:min-w-[350px] snap-center bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
<div className="h-48 bg-gray-200 w-full overflow-hidden">
<img alt="Event" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex-1 flex flex-col">
<span className="text-xs font-medium text-blue-600 mb-2">Legislative Update</span>
<h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">Committee approval of the new eco-tourism bill for Northern Cebu.</h3>
<p className="text-sm text-gray-500 mb-4 line-clamp-3">Today, we successfully defended the budget proposal for the improvement of...</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
<span className="text-xs text-gray-400">2 hours ago</span>
<a className="text-xs font-medium text-gray-900 hover:text-shim-blue" href="#">Read on Facebook</a>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[350px] snap-center bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
<div className="h-48 bg-gray-200 w-full overflow-hidden">
<img alt="Event" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex-1 flex flex-col">
<span className="text-xs font-medium text-green-600 mb-2">Community Action</span>
<h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">Medical Mission success in Medellin.</h3>
<p className="text-sm text-gray-500 mb-4 line-clamp-3">Over 500 residents received free check-ups and medicines during our visit.</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
<span className="text-xs text-gray-400">Yesterday</span>
<a className="text-xs font-medium text-gray-900 hover:text-shim-blue" href="#">Read on Facebook</a>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[350px] snap-center bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
<div className="h-48 bg-gray-200 w-full overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
<i className="w-8 h-8" data-lucide="image"></i>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<span className="text-xs font-medium text-orange-600 mb-2">Advisory</span>
<h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">Office Visitation Schedule Adjustment.</h3>
<p className="text-sm text-gray-500 mb-4 line-clamp-3">Please be advised that the district office will be closed this Friday for...</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
<span className="text-xs text-gray-400">3 days ago</span>
<a className="text-xs font-medium text-gray-900 hover:text-shim-blue" href="#">Read on Facebook</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-shim-dark text-white text-center px-4 relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Join the Kerrie Cares Community</h2>
<p className="text-blue-100 mb-8 font-light">Stay connected with your neighbors and get direct updates from the Congressman's team. A platform for constructive dialogue.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-shim-blue bg-white rounded-lg hover:bg-gray-100 transition-colors" href="#">
<i className="w-4 h-4 mr-2" data-lucide="users"></i> Join Facebook Group
                </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-200 pt-16 pb-8">
<div className="max-w-screen-xl mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center space-x-3 mb-6">
<div className="w-8 h-8 bg-shim-blue rounded-lg flex items-center justify-center text-white font-bold text-sm">
                            S
                        </div>
<span className="text-lg font-semibold text-shim-blue tracking-tight">Congressman Sun J. Shimura</span>
</div>
<p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                        Dedicated to serving the 4th District of Cebu with transparency, responsiveness, and heart. 
                        #KerrieCares #AlagangShimura
                    </p>
<div className="flex space-x-4 mt-6">
<a className="text-gray-400 hover:text-blue-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-gray-400 hover:text-pink-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-gray-400 hover:text-blue-400 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-4">Constituents</h4>
<ul className="space-y-3 text-sm text-gray-600">
<li><a className="hover:text-shim-blue transition-colors" href="#">Medical Assistance</a></li>
<li><a className="hover:text-shim-blue transition-colors" href="#">Book Appointment</a></li>
<li><a className="hover:text-shim-blue transition-colors" href="#">District Projects</a></li>
<li><a className="hover:text-shim-blue transition-colors" href="#">Scholarships</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-4">Contact Office</h4>
<ul className="space-y-3 text-sm text-gray-600">
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5 text-shim-blue" data-lucide="map-pin"></i>
<span>4th District Office, Bogo City, Cebu</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-shim-blue" data-lucide="phone"></i>
<span>(032) 123-4567</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-shim-blue" data-lucide="mail"></i>
<span>office@shimura.gov.ph</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-xs text-gray-400">© 2023 Office of Congressman Sun J. Shimura. All rights reserved.</span>
<div className="flex space-x-6 text-xs text-gray-400">
<a className="hover:text-gray-600" href="#">Privacy Policy</a>
<a className="hover:text-gray-600" href="#">Terms of Service</a>
<a className="hover:text-gray-600" href="#">Accessibility</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
