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
brand: {
50: '#eff6ff',
100: '#dbeafe',
500: '#3b82f6',
600: '#2563eb', // Primary Blue
700: '#1d4ed8',
900: '#0f172a', // Dark Slate
}
}
}
}
}


document.write(new Date().getFullYear())


        function showPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page-content');
            pages.forEach(page => {
                page.classList.add('hidden');
                page.classList.remove('block');
            });
            
            // Show selected page
            const selected = document.getElementById(pageId + '-page');
            if(selected) {
                selected.classList.remove('hidden');
                selected.classList.add('block');
                window.scrollTo(0, 0);
            }

            // Close mobile menu if open
            document.getElementById('mobile-menu').classList.add('hidden');
        }

        // Initialize animation styles
        const style = document.createElement('style');
        style.innerHTML = `
            .fade-in { animation: fadeIn 0.4s ease-out; }
            @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
        `;
        document.head.appendChild(style);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer" onclick="showPage('home')">
<div className="flex items-center justify-center w-8 h-8 rounded bg-brand-600 text-white">
<svg aria-hidden="true" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">SEARM IT</span>
</div>
<div className="hidden md:block">
<div className="flex items-baseline space-x-8">
<button className="nav-link text-sm font-medium text-slate-900 hover:text-brand-600 transition-colors" onclick="showPage('home')">Home</button>
<button className="nav-link text-sm font-medium text-slate-500 hover:text-brand-600 transition-colors" onclick="showPage('about')">About Us</button>
<button className="nav-link text-sm font-medium text-slate-500 hover:text-brand-600 transition-colors" onclick="showPage('services')">Services</button>
<button className="nav-link px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all shadow-sm" onclick="showPage('contact')">Contact Us</button>
</div>
</div>

<div className="-mr-2 flex md:hidden">
<button className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 focus:outline-none" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" type="button">
<svg aria-hidden="true" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden border-t border-slate-100 bg-white" id="mobile-menu">
<div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
<button className="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-600" onclick="showPage('home')">Home</button>
<button className="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-600" onclick="showPage('about')">About Us</button>
<button className="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-600" onclick="showPage('services')">Services</button>
<button className="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-600" onclick="showPage('contact')">Contact</button>
</div>
</div>
</nav>

<main className="page-content block fade-in" id="home-page">

<section className="relative overflow-hidden bg-slate-50 py-20 sm:py-32 lg:pb-32 xl:pb-36">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative z-10 max-w-4xl mx-auto text-center">
<h1 className="sm:text-5xl lg:text-6xl text-4xl font-semibold text-slate-900 tracking-tight">
                        Simplifying Business operations with tailored <span className="text-brand-600">Zoho and IT innovations</span>
</h1>
<p className="leading-relaxed text-lg text-slate-600 max-w-2xl mt-6 mr-auto ml-auto">
                        At SEARM IT Solutions, a Zoho Implementation Company, we offer a comprehensive range of IT services and Zoho CRM solutions designed to empower your business.
                    </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto inline-flex justify-center items-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 transition-all" onclick="showPage('contact')">
                            Contact Us for your free consultation!
                        </button>
<a className="w-full sm:w-auto inline-flex justify-center items-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 transition-all group" href="https://wa.me/" target="_blank">
<svg aria-hidden="true" data-icon="lucide:message-circle" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            WhatsApp Us!
                        </a>
</div>
</div>

<div className="mt-16 relative rounded-xl bg-slate-900 shadow-2xl overflow-hidden aspect-[16/9] lg:aspect-[21/9] flex items-center justify-center group">
<img alt="Dashboard" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
<div className="relative z-10 text-center">
<svg aria-hidden="true" data-icon="lucide:layout-dashboard" data-strokeWidth="1" data-width="48" height="48" role="img" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></g></svg>
<p className="text-slate-300 font-medium tracking-wide">Business Intelligence Dashboard</p>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Why Choose Us</h2>
<p className="mt-4 text-lg text-slate-500">Empower your business to succeed with Zoho Software</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="flex flex-col items-center text-center">
<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 mb-6">
<svg aria-hidden="true" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-slate-900">Rapid Implementation</h3>
<p className="text-base text-slate-600 mt-2">Quick deployment of Zoho solutions to get your operations running efficiently without downtime.</p>
</div>
<div className="flex flex-col text-center items-center">
<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 mb-6">
<svg aria-hidden="true" data-icon="lucide:settings-2" data-strokeWidth="1.5" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14 17H5M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></g></svg>
</div>
<h3 className="text-lg font-medium text-slate-900">Customized Solutions</h3>
<p className="text-base text-slate-600 mt-2">Tailored configurations that align perfectly with your unique business processes and goals.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 mb-6">
<svg aria-hidden="true" data-icon="lucide:headphones" data-strokeWidth="1.5" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-slate-900">Dedicated Support</h3>
<p className="mt-2 text-base text-slate-600">Ongoing developer assistance and support to ensure sustained growth and system health.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl mb-6">What we do at SEARM ITS?</h2>
<div className="prose prose-slate prose-lg text-slate-600">
<h3 className="text-xl font-medium text-brand-600 mb-4">Zoho Implementation</h3>
<p className="mb-6">
                                We transform your business operations through precise and tailored Zoho setups. Our expertise bridges the gap between your requirements and technology.
                            </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start">
<svg aria-hidden="true" data-icon="lucide:check-circle-2" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="">Comprehensive  architecture and automation.</span>
</li>
<li className="flex items-start">
<svg aria-hidden="true" data-icon="lucide:check-circle-2" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="">Custom Apps built on .</span>
</li>
<li className="flex items-start">
<svg aria-hidden="true" data-icon="lucide:check-circle-2" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="">Financial streamline with .</span>
</li>
<li className="flex items-start">
<svg aria-hidden="true" data-icon="lucide:check-circle-2" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="">Support ticketing via .</span>
</li>
<li className="flex items-start">
<svg aria-hidden="true" data-icon="lucide:check-circle-2" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span>Advanced .</span>
</li>
</ul>
<div className="flex gap-4">
<button className="rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800 transition-colors" onclick="showPage('contact')">Contact Us</button>
<a className="rounded-md border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors" href="https://wa.me/">WhatsApp Us!</a>
</div>
</div>
</div>
<div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100">
<img alt="Team working" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2340&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Our outstanding achievements</h2>
<p className="mt-2 text-lg text-slate-500">Ask us about our Zoho experience...</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="h-48 w-full bg-slate-100 overflow-hidden">
<img alt="CRM Setup" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-slate-900">Industry-Wide Setup</h3>
<p className="mt-2 text-sm text-slate-500">Extensive experience implementing Zoho CRM across diverse industries including Logistics, Real Estate, and Retail.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="h-48 w-full bg-slate-100 overflow-hidden">
<img alt="Integration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-slate-900">Intra-Zoho Integration</h3>
<p className="mt-2 text-sm text-slate-500">Seamlessly connecting Zoho Books, Desk, and Creator to create a unified data ecosystem.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="h-48 w-full bg-slate-100 overflow-hidden">
<img alt="Developer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-slate-900">End-to-End Assistance</h3>
<p className="mt-2 text-sm text-slate-500">Providing full-cycle developer assistance from requirement gathering to post-deployment support.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-16 text-center">Our Experience</h2>
<div className="space-y-12">

<div className="flex flex-col md:flex-row items-center gap-8 rounded-2xl bg-white p-6 shadow-sm">
<div className="w-full md:w-1/2 overflow-hidden rounded-xl">
<img alt="Logistics" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
<div className="w-full md:w-1/2">
<div className="flex items-center gap-3 mb-2">
<svg aria-hidden="true" data-icon="lucide:truck" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></g></svg>
<h3 className="text-xl font-medium text-slate-900">Serama Logistics</h3>
</div>
<p className="text-slate-600">Complete Mailing System transformation, automating dispatch notifications and tracking updates directly through Zoho CRM.</p>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-8 rounded-2xl bg-white p-6 shadow-sm">
<div className="w-full md:w-1/2 overflow-hidden rounded-xl">
<img alt="Code" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
<div className="w-full md:w-1/2">
<div className="flex items-center gap-3 mb-2">
<svg aria-hidden="true" data-icon="lucide:code-2" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-xl font-medium text-slate-900">Zoho Deluge</h3>
</div>
<p className="text-slate-600">Developed over 100+ custom functions to handle complex business logic, validation rules, and third-party API webhooks.</p>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-8 rounded-2xl bg-white p-6 shadow-sm">
<div className="w-full md:w-1/2 overflow-hidden rounded-xl">
<img alt="AI" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
<div className="w-full md:w-1/2">
<div className="flex items-center gap-3 mb-2">
<svg aria-hidden="true" data-icon="lucide:cpu" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg>
<h3 className="text-xl font-medium text-slate-900">ChatGPT Integration</h3>
</div>
<p className="text-slate-600">Automated data processing and intelligent response generation by integrating OpenAI's API within Zoho workflows.</p>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-8 rounded-2xl bg-white p-6 shadow-sm">
<div className="w-full md:w-1/2 overflow-hidden rounded-xl">
<img alt="Planning" className="w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="w-full md:w-1/2">
<div className="flex items-center gap-3 mb-2">
<svg aria-hidden="true" data-icon="lucide:map" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-xl font-medium text-slate-900">BRD Mapping</h3>
</div>
<p className="text-slate-600">Expert Business Requirement Document mapping to translate stakeholder needs into precise technical specifications.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white">
<div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Let’s Redefine Your Business with Zoho</h2>
<p className="mt-4 text-xl text-slate-400">Have a Zoho implementation in mind? We’re here to transform your business with smart, scalable Zoho solutions tailored to your goals.</p>
<div className="mt-10">
<button className="rounded-full bg-white text-slate-900 px-8 py-4 text-sm font-semibold hover:bg-slate-100 transition-colors" onclick="showPage('contact')">Contact Us</button>
</div>
</div>
</section>
</main>

<main className="page-content hidden fade-in" id="about-page">
<section className="bg-slate-50 py-20 border-b border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
<h1 className="text-4xl font-semibold tracking-tight text-slate-900">About Us</h1>
<p className="mt-4 text-lg text-slate-500">Leading Zoho Implementation &amp; IT Solutions Provider</p>
</div>
</section>
<section className="py-24 bg-white">
<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
<p className="text-xl leading-relaxed text-slate-600">
                    SEARM ITS is a new-age consultancy built on years of deep industry experience. We don't just implement software; we engineer growth. Our mission is to deliver smart, sustainable, strategic solutions for modern businesses looking to leverage the power of the cloud.
                </p>
</div>
</section>
<section className="py-20 bg-slate-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
<div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600 mb-6">
<svg aria-hidden="true" data-icon="lucide:eye" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></g></svg>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-4">Our Vision</h3>
<p className="text-slate-600">To be the global benchmark for simplified, effective IT and Zoho implementations that drive measurable success for enterprises of all sizes.</p>
</div>
<div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
<div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600 mb-6">
<svg aria-hidden="true" data-icon="lucide:target" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></g></svg>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-4">Our Mission</h3>
<p className="text-slate-600">To empower businesses by bridging the gap between operational needs and technological capabilities through tailored innovation.</p>
</div>
</div>
</div>
</section>
<section className="py-24 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 text-center mb-12">Core Values</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="text-center p-6">
<div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 text-slate-900 mb-4">
<svg aria-hidden="true" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-slate-900">Integrity</h3>
<p className="mt-2 text-slate-500">Honest consultancy and transparent processes.</p>
</div>
<div className="text-center p-6">
<div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 text-slate-900 mb-4">
<svg aria-hidden="true" data-icon="lucide:lightbulb" data-strokeWidth="1.5" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-slate-900">Client-centric Innovation</h3>
<p className="mt-2 text-slate-500">Solutions designed around your specific challenges.</p>
</div>
<div className="text-center p-6">
<div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 text-slate-900 mb-4">
<svg aria-hidden="true" data-icon="lucide:activity" data-strokeWidth="1.5" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-slate-900">Reliability &amp; Performance</h3>
<p className="mt-2 text-slate-500">Systems that work when you need them most.</p>
</div>
</div>
</div>
</section>
<section className="py-24 bg-slate-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 text-center mb-12">Meet the Experts</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-white p-4 rounded-xl shadow-sm">
<div className="aspect-square bg-slate-200 rounded-lg mb-4 overflow-hidden">
<img alt="Team 1" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<h3 className="font-medium text-slate-900">John Doe</h3>
<p className="text-xs text-brand-600 font-medium">Zoho Architect</p>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm">
<div className="aspect-square bg-slate-200 rounded-lg mb-4 overflow-hidden">
<img alt="Team 2" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<h3 className="font-medium text-slate-900">Jane Smith</h3>
<p className="text-xs text-brand-600 font-medium">Deluge Developer</p>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm">
<div className="aspect-square bg-slate-200 rounded-lg mb-4 overflow-hidden">
<img alt="Team 3" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<h3 className="font-medium text-slate-900">Robert Fox</h3>
<p className="text-xs text-brand-600 font-medium">Project Manager</p>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm">
<div className="aspect-square bg-slate-200 rounded-lg mb-4 overflow-hidden">
<img alt="Team 4" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<h3 className="font-medium text-slate-900">Emily Davis</h3>
<p className="text-xs text-brand-600 font-medium">Integration Specialist</p>
</div>
</div>
</div>
</section>
<section className="py-24 bg-white border-t border-slate-100">
<div className="mx-auto max-w-4xl text-center px-4">
<h2 className="text-2xl font-semibold text-slate-900 mb-6">Ready to transform your business?</h2>
<button className="rounded-md bg-brand-600 px-6 py-3 text-sm font-medium text-white hover:bg-brand-700 transition-colors" onclick="showPage('contact')">Get in Touch</button>
</div>
</section>
</main>

<main className="page-content hidden fade-in" id="services-page">
<section className="bg-slate-900 py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
<h1 className="text-4xl font-semibold tracking-tight text-white">Our Services</h1>
<p className="mt-4 text-lg text-slate-400">Comprehensive Zoho &amp; IT Services to Transform Your Business.</p>
</div>
</section>
<section className="py-24 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-brand-200 hover:shadow-lg transition-all bg-white">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
<svg aria-hidden="true" data-icon="lucide:users" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Zoho CRM Implementation</h3>
<p className="text-sm text-slate-500 mb-4">Full CRM setup, customization, and automation to streamline your sales pipeline.</p>
<ul className="text-sm text-slate-600 space-y-2">
<li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>Pipeline Management</li>
<li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>Lead Automation</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-brand-200 hover:shadow-lg transition-all bg-white">
<div className="w-12 h-12 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-6">
<svg aria-hidden="true" data-icon="lucide:app-window" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="M10 4v4M2 8h20M6 4v4"></path></g></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Zoho Creator Apps</h3>
<p className="text-sm text-slate-500 mb-4">Build custom low-code business applications tailored to your unique operations.</p>
<ul className="text-sm text-slate-600 space-y-2">
<li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>Custom Portals</li>
<li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>Workflow Logic</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-brand-200 hover:shadow-lg transition-all bg-white">
<div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-lg flex items-center justify-center mb-6">
<svg aria-hidden="true" data-icon="lucide:book-open" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Zoho Books &amp; Accounting</h3>
<p className="text-sm text-slate-500 mb-4">Financial automation, gst compliance, and accounting setup for transparent finances.</p>
<ul className="text-sm text-slate-600 space-y-2">
<li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-2"></span>Invoice Automation</li>
<li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-2"></span>Expense Tracking</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-brand-200 hover:shadow-lg transition-all bg-white">
<div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-6">
<svg aria-hidden="true" data-icon="lucide:arrow-left-right" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3L4 7l4 4M4 7h16m-4 14l4-4l-4-4m4 4H4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Migration &amp; Integration</h3>
<p className="text-sm text-slate-500 mb-4">Seamless migrations from legacy systems and robust API integrations with third-party tools.</p>
<ul className="text-sm text-slate-600 space-y-2">
<li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>Data Cleansing</li>
<li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>API Connections</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-brand-200 hover:shadow-lg transition-all bg-white">
<div className="w-12 h-12 bg-red-50 text-red-600 rounded-lg flex items-center justify-center mb-6">
<svg aria-hidden="true" data-icon="lucide:code" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18l6-6l-6-6M8 6l-6 6l6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Deluge Custom Functions</h3>
<p className="text-sm text-slate-500 mb-4">Advanced scripting to automate complex business rules beyond standard features.</p>
<ul className="text-sm text-slate-600 space-y-2">
<li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2"></span>Custom Schedules</li>
<li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2"></span>Cross-Module Logic</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-brand-200 hover:shadow-lg transition-all bg-white">
<div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-6">
<svg aria-hidden="true" data-icon="lucide:bot" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">ChatGPT / AI Integrations</h3>
<p className="text-sm text-slate-500 mb-4">Intelligent workflows, automated insights, and AI-driven data processing.</p>
<ul className="text-sm text-slate-600 space-y-2">
<li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2"></span>Smart Auto-replies</li>
<li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2"></span>Data Summarization</li>
</ul>
</div>
</div>
</div>
</section>
<section className="py-20 bg-slate-50">
<div className="mx-auto max-w-4xl text-center px-4">
<h2 className="text-2xl font-semibold text-slate-900">Have Questions? Contact Us Today!</h2>
<div className="mt-8">
<button className="rounded-full bg-slate-900 px-8 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition-colors" onclick="showPage('contact')">Request a Quote</button>
</div>
</div>
</section>
</main>

<main className="page-content hidden fade-in" id="contact-page">
<section className="bg-slate-50 py-20 border-b border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
<h1 className="text-4xl font-semibold tracking-tight text-slate-900">Contact Us</h1>
<p className="mt-4 text-lg text-slate-500">Reach out to us for consultations and project discussions.</p>
</div>
</section>
<section className="py-24 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

<div className="space-y-8">
<div className="rounded-2xl border border-slate-100 p-6 bg-slate-50">
<div className="flex items-center gap-4 mb-4">
<svg aria-hidden="true" data-icon="lucide:map-pin" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
<h3 className="font-medium text-slate-900">India Office</h3>
</div>
<p className="text-sm text-slate-600">22/10(27), Vaidyaraman Street,<br/>T. Nagar, Chennai,<br/>Tamil Nadu, India – 600017</p>
</div>
<div className="rounded-2xl border border-slate-100 p-6 bg-slate-50">
<div className="flex items-center gap-4 mb-4">
<svg aria-hidden="true" data-icon="lucide:phone" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="font-medium text-slate-900">Phone</h3>
</div>
<div className="text-sm text-slate-600 space-y-1">
<p>+91 76038 29419</p>
<p>+91 82224 56789</p>
<p>+91 92620 18566</p>
</div>
</div>
<div className="rounded-2xl border border-slate-100 p-6 bg-slate-50">
<div className="flex items-center gap-4 mb-4">
<svg aria-hidden="true" data-icon="lucide:mail" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
<h3 className="font-medium text-slate-900">Email</h3>
</div>
<p className="text-sm text-slate-600">info@searmits.com</p>
</div>
<a className="block w-full rounded-2xl border border-green-200 bg-green-50 p-6 text-center hover:bg-green-100 transition-colors" href="https://wa.me/">
<div className="flex items-center justify-center gap-2 text-green-700 font-medium">
<svg aria-hidden="true" data-icon="lucide:message-circle" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Click here to connect on WhatsApp!
                            </div>
</a>
</div>

<div className="lg:col-span-2">
<form className="space-y-6 bg-white">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
<input className="block w-full rounded-lg border-slate-200 bg-slate-50 p-3 text-sm focus:border-brand-500 focus:bg-white focus:ring-1 focus:ring-brand-500 outline-none transition-all" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
<input className="block w-full rounded-lg border-slate-200 bg-slate-50 p-3 text-sm focus:border-brand-500 focus:bg-white focus:ring-1 focus:ring-brand-500 outline-none transition-all" placeholder="john@example.com" type="email"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
<input className="block w-full rounded-lg border-slate-200 bg-slate-50 p-3 text-sm focus:border-brand-500 focus:bg-white focus:ring-1 focus:ring-brand-500 outline-none transition-all" placeholder="+91 ..." type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
<textarea className="block w-full rounded-lg border-slate-200 bg-slate-50 p-3 text-sm focus:border-brand-500 focus:bg-white focus:ring-1 focus:ring-brand-500 outline-none transition-all" placeholder="How can we help you?" rows="6"></textarea>
</div>
<div className="pt-4">
<button className="w-full rounded-lg bg-slate-900 px-8 py-3.5 text-sm font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 transition-all" type="submit">Send Message</button>
</div>
</form>
</div>
</div>
</div>
</section>

<section className="h-96 w-full bg-slate-200">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6876116858276!2d80.2376!3d13.0396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526655a5555555%3A0x5555555555555555!2sT.+Nagar%2C+Chennai!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" style={{border: '0'}} width="100%"></iframe>
</section>
<section className="py-16 bg-brand-600 text-white">
<div className="mx-auto max-w-7xl px-4 text-center">
<h2 className="text-2xl font-semibold mb-6">Let’s Start Your Project Together!</h2>
<button className="bg-white text-brand-600 px-8 py-3 rounded-full font-medium hover:bg-slate-100 transition-colors">Send Message</button>
</div>
</section>
</main>

<footer className="bg-slate-900 text-slate-400 py-16">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
<div className="col-span-1 md:col-span-1">
<span className="text-xl font-bold text-white tracking-tight">SEARM IT</span>
<p className="mt-4 text-sm">Empowering businesses with intelligent Zoho solutions and robust IT infrastructure.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Quick Links</h4>
<ul className="space-y-2 text-sm">
<li><button className="hover:text-white transition-colors" onclick="showPage('home')">Home</button></li>
<li><button className="hover:text-white transition-colors" onclick="showPage('about')">About Us</button></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Contact</h4>
<ul className="space-y-2 text-sm">
<li>22/10(27), Vaidyaraman St, T. Nagar</li>
<li>Chennai, TN, India – 600017</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Connect</h4>
<a className="inline-flex items-center text-sm text-green-400 hover:text-green-300" href="https://wa.me/">
<svg aria-hidden="true" data-icon="lucide:message-circle" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        WhatsApp Us
                    </a>
</div>
</div>
<div className="text-center text-sm text-slate-600">
                © 2025 SEARM IT Solutions. Delivering smart, sustainable, strategic solutions.
            </div>
</div>
</footer>



    </>
  );
}
