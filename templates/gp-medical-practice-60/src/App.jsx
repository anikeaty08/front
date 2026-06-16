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
nhs: {
blue: '#005eb8',
dark: '#003087',
bright: '#0072CE',
},
gray: {
50: '#F9FAFB',
100: '#F3F4F6',
200: '#E5E7EB',
300: '#D1D5DB',
400: '#9CA3AF',
500: '#6B7280',
600: '#4B5563',
700: '#374151',
800: '#1F2937',
900: '#111827',
}
},
boxShadow: {
'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
'card': '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
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
      

<div className="h-1.5 w-full bg-nhs-blue"></div>

<header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="flex-shrink-0 flex items-center gap-3">
<a className="flex items-center gap-3 group" href="/">
<div className="w-10 h-10 bg-nhs-blue rounded-lg flex items-center justify-center text-white shadow-sm group-hover:bg-nhs-dark transition-colors">
<span className="font-semibold text-lg tracking-tighter">NHS</span>
</div>
<div className="flex flex-col">
<span className="text-gray-900 font-semibold tracking-tight text-sm uppercase">Silverdale</span>
<span className="text-gray-500 font-medium tracking-tight text-xs uppercase">Medical Centre</span>
</div>
</a>
</div>

<nav className="hidden md:flex space-x-6">
<a className="text-sm font-medium text-gray-900 hover:text-nhs-blue transition-colors" href="/">Home</a>
<a className="hover:text-nhs-blue transition-colors text-sm font-medium text-gray-500" href="/appointments" style={{}}>Appointments</a>
<a className="hover:text-nhs-blue transition-colors text-sm font-medium text-gray-500" href="/prescriptions">Prescriptions</a>
<a className="text-sm font-medium text-gray-500 hover:text-nhs-blue transition-colors" href="/join-the-practice">Join</a>
<a className="text-sm font-medium text-gray-500 hover:text-nhs-blue transition-colors" href="/contact-us-1">Contact</a>
</nav>

<div className="flex items-center gap-3">
<button className="text-gray-400 hover:text-gray-600 transition-colors">
<iconify-icon className="" height="22" icon="solar:global-linear" strokeWidth="1.5" style={{color: 'rgb(75, 85, 99)'}} width="22"></iconify-icon>
</button>
<div className="relative hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" icon="solar:magnifer-linear" width="18"></iconify-icon>
<input className="pl-9 pr-4 py-1.5 text-sm bg-gray-100 border-none rounded-md focus:ring-1 focus:ring-nhs-blue focus:bg-white transition-all w-48 placeholder:text-gray-400" placeholder="Search..." type="text"/>
</div>
<button className="md:hidden text-gray-600">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<main className="">

<div className="overflow-hidden bg-white border-gray-100 border-b relative">
<div className="max-w-7xl mx-auto">
<div className="z-10 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 bg-white pb-8 relative">
<main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
<div className="sm:text-center lg:text-left">
<div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-nhs-blue text-xs font-medium mb-6 tracking-wide uppercase border border-blue-100">
                                Welcome to your practice
                            </div>
<h1 className="text-4xl tracking-tight font-semibold text-gray-900 sm:text-5xl md:text-6xl">
<span className="block xl:inline">Silverdale</span>
<span className="block text-nhs-blue xl:inline">Medical Centre</span>
</h1>
<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-light">
                                Providing high quality healthcare to Silverdale and the surrounding areas. Manage your health online with our digital services.
                            </p>
<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-3">
<div className="rounded-md shadow-subtle">
<a className="flex items-center justify-center hover:bg-nhs-dark md:py-3 md:text-lg md:px-10 transition-all shadow-blue-500/20 text-base font-medium text-white w-full border-transparent border rounded-lg pt-3 pr-8 pb-3 pl-8 shadow-lg" href="/appointments">
                                        Book Appointment
                                    </a>
</div>
<div className="mt-3 sm:mt-0 sm:ml-3">
<a className="w-full flex items-center justify-center px-8 py-3 border border-gray-200 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 md:py-3 md:text-lg md:px-10 transition-all" href="/prescriptions">
                                        Order Prescriptions
                                    </a>
</div>
</div>
</div>
</main>
</div>
</div>
<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
<img alt="Medical Centre Interior" className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full grayscale-[10%] opacity-90" src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2091&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent lg:via-white/20"></div>
</div>
</div>

<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
<a className="group relative block w-full rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-0.5" href="https://accurx.nhs.uk/patient-initiated/C82627" target="_blank">
<div className="absolute inset-0 opacity-20 pattern-dots"></div>
<div className="relative px-8 py-10 sm:px-12 sm:py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="">
<h2 className="text-2xl font-semibold tracking-tight text-white mb-2">Contact us online with Accurx</h2>
<p className="text-indigo-100 font-light text-lg">Submit a request for medical advice or admin help without visiting the practice.</p>
</div>
<div className="flex-shrink-0 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20 text-white font-medium group-hover:bg-white group-hover:text-indigo-600 transition-colors flex items-center gap-2">
                        Start Request
                        <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</a>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
<h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase mb-6 ml-1">Core Services</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<a className="group relative bg-white p-6 rounded-2xl border border-gray-200 shadow-subtle hover:shadow-card-hover hover:border-nhs-blue/30 transition-all duration-300" href="/appointments">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-nhs-blue flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:calendar-add-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2 group-hover:text-nhs-blue transition-colors">Appointments</h3>
<p className="text-sm text-gray-500 font-normal leading-relaxed">Make, change or cancel an appointment with a GP or nurse.</p>
</a>

<a className="group relative bg-white p-6 rounded-2xl border border-gray-200 shadow-subtle hover:shadow-card-hover hover:border-nhs-blue/30 transition-all duration-300" href="/prescriptions">
<div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:pill-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2 group-hover:text-green-600 transition-colors">Prescriptions</h3>
<p className="text-sm text-gray-500 font-normal leading-relaxed">Order your repeat prescriptions online quickly and easily.</p>
</a>

<a className="group relative bg-white p-6 rounded-2xl border border-gray-200 shadow-subtle hover:shadow-card-hover hover:border-nhs-blue/30 transition-all duration-300" href="/test-results">
<div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:clipboard-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2 group-hover:text-purple-600 transition-colors">Test Results</h3>
<p className="text-sm text-gray-500 font-normal leading-relaxed">Get your test results online via the NHS app or by contacting us.</p>
</a>

<a className="group relative bg-white p-6 rounded-2xl border border-gray-200 shadow-subtle hover:shadow-card-hover hover:border-nhs-blue/30 transition-all duration-300" href="/join-the-practice">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:user-plus-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2 group-hover:text-orange-600 transition-colors">Join the Surgery</h3>
<p className="text-sm text-gray-500 font-normal leading-relaxed">Register as a new patient within our catchment area.</p>
</a>

<a className="group relative bg-white p-6 rounded-2xl border border-gray-200 shadow-subtle hover:shadow-card-hover hover:border-nhs-blue/30 transition-all duration-300" href="/request-a-sick-note-for-work">
<div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:document-medicine-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2 group-hover:text-red-600 transition-colors">Med 3 / Sick Notes</h3>
<p className="text-sm text-gray-500 font-normal leading-relaxed">Request a sick note for work if you have been ill for more than 7 days.</p>
</a>

<a className="group relative bg-white p-6 rounded-2xl border border-gray-200 shadow-subtle hover:shadow-card-hover hover:border-nhs-blue/30 transition-all duration-300" href="/contact-us-1">
<div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2 group-hover:text-teal-600 transition-colors">Contact Us</h3>
<p className="text-sm text-gray-500 font-normal leading-relaxed">Find opening times, location details and how to get in touch.</p>
</a>
</div>
</div>

<div className="bg-gray-100 border-y border-gray-200 py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<a className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm p-8 group hover:shadow-lg transition-all" href="/the-nhs-app">
<div className="flex flex-col h-full justify-between relative z-10">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-nhs-blue text-xs font-semibold mb-4">
<iconify-icon icon="solar:smartphone-linear"></iconify-icon> Recommended
                                </div>
<h3 className="text-2xl font-semibold text-gray-900 tracking-tight mb-3">The NHS App</h3>
<p className="text-gray-500 font-light leading-relaxed mb-6">Securely access a range of NHS services on your smartphone or tablet. Check symptoms, book appointments, and more.</p>
</div>
<span className="text-nhs-blue font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                                Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
<div className="absolute -right-10 -bottom-10 opacity-5">
<iconify-icon icon="solar:smartphone-linear" width="250"></iconify-icon>
</div>
</a>

<a className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm p-8 group hover:shadow-lg transition-all" href="/health-information">
<div className="flex flex-col h-full justify-between relative z-10">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold mb-4">
<iconify-icon icon="solar:heart-pulse-linear"></iconify-icon> Self Help
                                </div>
<h3 className="text-2xl font-semibold text-gray-900 tracking-tight mb-3">Health Information</h3>
<p className="text-gray-500 font-light leading-relaxed mb-6">Look up Health Information, COVID-19 guidance, Self-Help resources and use reliable NHS tools.</p>
</div>
<span className="text-green-700 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                                View resources <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
<div className="absolute -right-10 -bottom-10 opacity-5">
<iconify-icon icon="solar:book-linear" width="250"></iconify-icon>
</div>
</a>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-8">
<div className="flex items-center justify-between">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">Have Your Say</h2>
</div>

<div className="bg-white rounded-2xl border border-gray-200 p-6 flex items-start gap-4 hover:border-nhs-blue/50 transition-colors">
<div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg text-gray-600">
<iconify-icon icon="solar:users-group-rounded-linear" width="28"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium text-gray-900 mb-1">Patient Participation Group</h3>
<p className="text-sm text-gray-500 font-normal mb-3">Join our PPG to help shape the future of the practice. We value your input.</p>
<a className="text-sm font-medium text-nhs-blue hover:text-nhs-dark" href="/patient-participation-group">Join the group →</a>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
<h3 className="text-xl font-semibold text-gray-900 mb-1">NHS Friends and Family Test</h3>
<p className="text-sm text-gray-500 mb-6 font-light">Thinking about your GP practice overall, how was your experience?</p>
<form action="/submit-feedback" className="space-y-5" method="post">
<div className="">
<label className="block text-xs font-medium text-gray-700 uppercase tracking-wide mb-2">Your Experience</label>
<div className="relative">
<select className="block w-full pl-3 pr-10 py-2.5 text-sm border-gray-300 focus:outline-none focus:ring-1 focus:ring-nhs-blue focus:border-nhs-blue sm:text-sm rounded-lg bg-gray-50 hover:bg-white transition-colors cursor-pointer appearance-none">
<option disabled="" selected="">Please select...</option>
<option value="Very Good">Very Good</option>
<option value="Good">Good</option>
<option value="Neither Good Nor Poor">Neither</option>
<option value="Poor">Poor</option>
<option value="Very Poor">Very Poor</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="">
<label className="block text-xs font-medium text-gray-700 uppercase tracking-wide mb-2">Why did you give this response? (Optional)</label>
<textarea className="shadow-sm focus:ring-nhs-blue focus:border-nhs-blue block w-full sm:text-sm border-gray-300 rounded-lg bg-gray-50 hover:bg-white transition-colors p-3" placeholder="Tell us more..." rows="3"></textarea>
</div>
<div className="flex items-start">
<div className="flex items-center h-5">
<input className="form-checkbox text-nhs-blue rounded cursor-pointer" id="consent" name="consent" type="checkbox"/>
</div>
<div className="ml-3 text-sm">
<label className="font-normal text-gray-500" htmlFor="consent">I consent to publishing my comment anonymously.</label>
</div>
</div>
<button className="w-full inline-flex justify-center items-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-gray-900 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-all" type="submit">
                                Submit Feedback
                            </button>
</form>
</div>

<a className="block bg-gray-50 rounded-xl p-4 border border-dashed border-gray-300 text-center hover:bg-white hover:border-gray-400 transition-all" href="/leave-feedback">
<span className="text-sm font-medium text-gray-600">Need to make a formal complaint or specific feedback? <span className="text-nhs-blue underline">Click here.</span></span>
</a>
</div>

<div className="space-y-6">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">Latest News</h2>
<article className="bg-white rounded-2xl border border-gray-200 shadow-subtle overflow-hidden flex flex-col h-full">
<div className="h-2 bg-yellow-400 w-full"></div> 
<div className="p-6 flex-1">
<span className="inline-block px-2 py-1 rounded bg-yellow-100 text-yellow-800 text-xs font-semibold tracking-wide uppercase mb-3">Important</span>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">Mounjaro: Prescribing Update</h3>
<div className="prose prose-sm text-gray-500 font-light">
<p className="mb-3">Despite media reports, Mounjaro is  available to a limited group of patients meeting strict criteria.</p>
<p className="mb-3"></p>
<p className="text-red-600 font-medium">Please do not contact the surgery requesting this unless you meet criteria.</p>
</div>
</div>
<div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
<button className="text-sm font-medium text-gray-900 hover:text-nhs-blue flex items-center gap-2">
                                Read full article <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</article>

<div className="bg-white border-gray-200 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-subtle">
<div className="flex items-center justify-between mb-2">
<h4 className="font-semibold text-gray-900">CQC Rating</h4>
<span className="text-xs font-mono text-gray-400">Mar 2025</span>
</div>
<div className="flex items-center gap-2 text-green-600 font-bold text-lg">
<iconify-icon icon="solar:star-circle-bold" width="24"></iconify-icon>
                            Good
                        </div>
<p className="text-xs text-gray-400 mt-2">Care Quality Commission</p>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 text-center">
<p className="text-xs text-gray-400 font-mono">Page last reviewed: 05 February 2026</p>
</div>
</main>

<footer className="bg-white border-t border-gray-200">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
<div className="">
<h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">The Practice</h3>
<ul className="space-y-3">
<li className=""><a className="text-sm text-gray-500 hover:text-nhs-blue transition-colors" href="#">You and Your GP</a></li>
<li><a className="text-sm text-gray-500 hover:text-nhs-blue transition-colors" href="#">Practice Policies</a></li>
<li><a className="text-sm text-gray-500 hover:text-nhs-blue transition-colors" href="#">Staff</a></li>
<li><a className="text-sm text-gray-500 hover:text-nhs-blue transition-colors" href="#">GP Earnings</a></li>
</ul>
</div>
<div>
<h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Patient Info</h3>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-nhs-blue transition-colors" href="#">Carers Support</a></li>
<li><a className="text-sm text-gray-500 hover:text-nhs-blue transition-colors" href="#">Pregnancy Planner</a></li>
<li><a className="text-sm text-gray-500 hover:text-nhs-blue transition-colors" href="#">Bowel Screening</a></li>
<li><a className="text-sm text-gray-500 hover:text-nhs-blue transition-colors" href="#">GDPR &amp; Data</a></li>
</ul>
</div>
<div className="">
<h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">External</h3>
<ul className="space-y-3">
<li className=""><a className="text-sm text-gray-500 hover:text-nhs-blue transition-colors" href="#">Federation Website</a></li>
<li className=""><a className="hover:text-nhs-blue transition-colors text-sm text-gray-500" href="#" style={{}}>NHS.uk</a></li>
<li className=""><a className="text-sm text-gray-500 hover:text-nhs-blue transition-colors" href="#">Patient Access</a></li>
</ul>
</div>
<div className="">
<h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Legal</h3>
<ul className="space-y-3">
<li className=""><a className="text-sm text-gray-500 hover:text-nhs-blue transition-colors" href="#">Accessibility</a></li>
<li className=""><a className="text-sm text-gray-500 hover:text-nhs-blue transition-colors" href="#">Cookie Policy</a></li>
<li><a className="text-sm text-gray-500 hover:text-nhs-blue transition-colors" href="#">Sitemap</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row gap-4 border-gray-100 border-t pt-8 gap-x-4 gap-y-4 items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-bold text-nhs-blue text-xl tracking-tight">NHS</span>
<p className="text-sm text-gray-400">© 2026 Silverdale Medical Centre.</p>
</div>
<div className="flex items-center gap-6">
<a className="text-sm font-medium text-gray-900 hover:text-nhs-blue" href="/login">Sign in</a>
<span className="text-gray-300">|</span>
<p className="text-sm text-gray-400">Built by My Surgery Website</p>
</div>
</div>
</div>
</footer>

    </>
  );
}
