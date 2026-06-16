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
serif: ['Playfair Display', 'serif'],
},
colors: {
brand: {
50: '#f2f8f8',
100: '#deedec',
200: '#bfe0de',
300: '#8fcac7',
400: '#58ada9',
500: '#38918d',
600: '#2d7471',
700: '#265d5b',
800: '#224c4b',
900: '#1e403f',
},
stone: {
850: '#1c1917',
}
},
letterSpacing: {
tightest: '-.075em',
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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-stone-200 bg-white/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4 lg:px-8">
<a @click.prevent="navigate('home')" className="flex items-center rtl:space-x-reverse z-50 group" href="#">
<span className="self-center text-2xl font-serif font-semibold tracking-tighter text-stone-900 leading-none group-hover:text-stone-700 transition-colors">
                    AT<span className="text-brand-600">.</span>
</span>
</a>
<button @click="mobileMenuOpen = !mobileMenuOpen" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-stone-500 rounded-lg lg:hidden hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-200" type="button">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<div :className="{'block': mobileMenuOpen, 'hidden': !mobileMenuOpen}" className="hidden w-full lg:block lg:w-auto absolute lg:relative top-full left-0 bg-white lg:bg-transparent border-b lg:border-0 border-stone-200 lg:p-0 p-4 shadow-lg lg:shadow-none h-screen lg:h-auto overflow-y-auto lg:overflow-visible pb-20 lg:pb-0">
<ul className="font-medium flex flex-col lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:items-center">
<li><a @click.prevent="navigate('home')" className="block py-2 px-3 text-stone-600 hover:text-brand-700 lg:p-0 transition-colors duration-200" href="#">Home</a></li>

<li @mouseleave="dropdownOpen = false" className="relative group" x-data="{ dropdownOpen: false }">
<button :className="{'text-brand-700': dropdownOpen}" @click="dropdownOpen = !dropdownOpen" @mouseover="dropdownOpen = true" className="flex items-center w-full py-2 px-3 text-stone-600 hover:text-brand-700 lg:p-0 transition-colors">
                            Services 
                            <iconify-icon :className="{'rotate-180': dropdownOpen}" className="ml-1 text-xs transition-transform duration-200" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>

<div className="lg:absolute top-full left-0 mt-2 w-full lg:w-64 bg-stone-50 lg:bg-white rounded-xl shadow-none lg:shadow-xl border-y lg:border border-stone-100 py-2 z-50" style={{display: 'none'}} x-show="dropdownOpen" x-transition:enter="transition ease-out duration-200 lg:duration-100" x-transition:enter-end="opacity-100 lg:translate-y-0" x-transition:enter-start="opacity-0 lg:translate-y-2" x-transition:leave="transition ease-in duration-150 lg:duration-75" x-transition:leave-end="opacity-0 lg:translate-y-2" x-transition:leave-start="opacity-100 lg:translate-y-0">
<a @click.prevent="navigate('orientation'); dropdownOpen = false" className="block px-4 py-3 text-sm text-stone-600 hover:bg-stone-100 hover:text-brand-700 flex items-center gap-3 group/item" href="#">
<span className="bg-white lg:bg-stone-50 w-8 h-8 rounded-lg flex items-center justify-center text-stone-400 group-hover/item:text-brand-600 transition-colors border border-stone-100"><iconify-icon icon="solar:compass-big-linear"></iconify-icon></span>
<div>
<span className="block font-medium text-stone-900">Orientation</span>
<span className="block text-xs text-stone-400 font-light">Find your path</span>
</div>
</a>
<a @click.prevent="navigate('transition'); dropdownOpen = false" className="block px-4 py-3 text-sm text-stone-600 hover:bg-stone-100 hover:text-brand-700 flex items-center gap-3 group/item" href="#">
<span className="bg-white lg:bg-stone-50 w-8 h-8 rounded-lg flex items-center justify-center text-stone-400 group-hover/item:text-brand-600 transition-colors border border-stone-100"><iconify-icon icon="solar:transfer-horizontal-linear"></iconify-icon></span>
<div>
<span className="block font-medium text-stone-900">Transition</span>
<span className="block text-xs text-stone-400 font-light">New roles &amp; pivots</span>
</div>
</a>
<a @click.prevent="navigate('development'); dropdownOpen = false" className="block px-4 py-3 text-sm text-stone-600 hover:bg-stone-100 hover:text-brand-700 flex items-center gap-3 group/item" href="#">
<span className="bg-white lg:bg-stone-50 w-8 h-8 rounded-lg flex items-center justify-center text-stone-400 group-hover/item:text-brand-600 transition-colors border border-stone-100"><iconify-icon icon="solar:stairs-linear"></iconify-icon></span>
<div>
<span className="block font-medium text-stone-900">Development</span>
<span className="block text-xs text-stone-400 font-light">Leadership skills</span>
</div>
</a>
<div className="h-px bg-stone-100 my-1 mx-4"></div>
<a @click.prevent="navigate('teams'); dropdownOpen = false" className="block px-4 py-3 text-sm text-stone-600 hover:bg-stone-100 hover:text-brand-700 flex items-center gap-3 group/item" href="#">
<span className="bg-white lg:bg-stone-50 w-8 h-8 rounded-lg flex items-center justify-center text-stone-400 group-hover/item:text-brand-600 transition-colors border border-stone-100"><iconify-icon icon="solar:users-group-two-rounded-linear"></iconify-icon></span>
<div>
<span className="block font-medium text-stone-900">For Teams</span>
<span className="block text-xs text-stone-400 font-light">Cohesion &amp; Workshops</span>
</div>
</a>
</div>
</li>
<li><a className="block py-2 px-3 text-stone-600 hover:text-brand-700 lg:p-0 transition-colors duration-200" href="#contact">Contact</a></li>
<li className="pt-4 lg:pt-0 lg:pl-4 border-t lg:border-t-0 lg:border-l border-stone-200 flex items-center gap-3">
<button @click="toggleLang()" className="text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded hover:bg-stone-100 transition-colors flex items-center gap-1">
<iconify-icon className="text-stone-400" icon="solar:global-linear"></iconify-icon>
<span x-text="lang === 'en' ? 'FR' : 'EN'"></span>
</button>
<a className="text-white bg-stone-900 hover:bg-stone-800 focus:ring-4 focus:ring-stone-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5" href="#contact">
                            Book Call
                        </a>
</li>
</ul>
</div>
</div>
</nav>



<main x-show="page === 'home'" x-transition.opacity.duration.500ms="">

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10 h-full w-full bg-stone-50 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
<div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
<div className="inline-flex items-center gap-x-2 rounded-full border border-stone-200 bg-white/50 backdrop-blur px-3 py-1 text-xs font-medium text-stone-600 shadow-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-brand-500"></span>
<span x-text="lang === 'en' ? 'Accepting new clients for October' : 'Nouveaux clients acceptés pour Octobre'"></span>
</div>
<h1 className="mx-auto max-w-4xl font-serif text-5xl font-medium tracking-tight text-stone-900 sm:text-7xl mb-6 leading-[1.1]">
<span x-show="lang === 'en'">Career clarity &amp; <br/> confident transitions.</span>
<span x-show="lang === 'fr'">Clarté de carrière &amp; <br/> transitions sereines.</span>
</h1>
<p className="mx-auto max-w-2xl text-lg text-stone-600 mb-10 leading-relaxed font-light">
<span x-show="lang === 'en'">
                        Professional coaching in Brussels &amp; Online. Helping leaders and individuals navigate change with purpose and assertiveness.
                    </span>
<span x-show="lang === 'fr'">
                        Coaching professionnel à Bruxelles &amp; en ligne. Accompagner les dirigeants et les particuliers à naviguer le changement avec sens et assurance.
                    </span>
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-white rounded-lg bg-brand-700 hover:bg-brand-800 focus:ring-4 focus:ring-brand-100 transition-all shadow-sm" href="#contact">
<span>Start with a free call</span>
<iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<button @click="navigate('orientation')" className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-stone-900 bg-white border border-stone-200 rounded-lg hover:bg-stone-50 hover:border-stone-300 focus:ring-4 focus:ring-stone-100 transition-all shadow-sm">
                        Explore services
                    </button>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-200">
<div className="max-w-7xl mx-auto px-4 lg:px-8">
<div className="text-center mb-16 max-w-2xl mx-auto">
<span className="text-brand-600 font-semibold tracking-wider text-sm uppercase">Services</span>
<h2 className="font-serif text-3xl lg:text-4xl text-stone-900 mt-2 mb-4">How can I help?</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div @click="navigate('orientation')" className="cursor-pointer bg-stone-50 rounded-xl p-6 shadow-sm border border-stone-200 hover:border-brand-300 hover:shadow-md transition-all flex flex-col h-full group">
<div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-stone-700 mb-4 group-hover:text-brand-600 transition-colors">
<iconify-icon icon="solar:compass-big-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-2">Orientation</h3>
<p className="text-sm text-stone-500 mb-4 flex-grow">Clarify values and find your professional path.</p>
<span className="text-sm font-semibold text-brand-700 flex items-center gap-1 mt-auto">
                            Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div @click="navigate('transition')" className="cursor-pointer bg-stone-50 rounded-xl p-6 shadow-sm border border-stone-200 hover:border-brand-300 hover:shadow-md transition-all flex flex-col h-full group">
<div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-stone-700 mb-4 group-hover:text-brand-600 transition-colors">
<iconify-icon icon="solar:transfer-horizontal-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-2">Transition</h3>
<p className="text-sm text-stone-500 mb-4 flex-grow">Navigate new roles or career pivots successfully.</p>
<span className="text-sm font-semibold text-brand-700 flex items-center gap-1 mt-auto">
                            Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div @click="navigate('development')" className="cursor-pointer bg-stone-50 rounded-xl p-6 shadow-sm border border-stone-200 hover:border-brand-300 hover:shadow-md transition-all flex flex-col h-full group">
<div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-stone-700 mb-4 group-hover:text-brand-600 transition-colors">
<iconify-icon icon="solar:stairs-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-2">Development</h3>
<p className="text-sm text-stone-500 mb-4 flex-grow">Master soft skills and leadership presence.</p>
<span className="text-sm font-semibold text-brand-700 flex items-center gap-1 mt-auto">
                            Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div @click="navigate('teams')" className="cursor-pointer bg-stone-850 rounded-xl p-6 shadow-md border border-stone-800 text-stone-300 hover:shadow-xl transition-all flex flex-col h-full transform hover:-translate-y-1">
<div className="w-10 h-10 rounded-lg bg-stone-700 flex items-center justify-center text-white mb-4">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-white mb-2">For Teams</h3>
<p className="text-sm text-stone-400 mb-4 flex-grow">Enhance cohesion and collective intelligence.</p>
<span className="text-sm font-semibold text-white flex items-center gap-1 mt-auto">
                            B2B Services <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</div>
</section>
</main>



<main x-show="page === 'orientation'" x-transition.opacity.duration.300ms="">
<section className="relative pt-32 pb-20 bg-stone-50">
<div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
<button @click="navigate('home')" className="mb-8 inline-flex items-center text-sm text-stone-500 hover:text-stone-900 transition-colors">
<iconify-icon className="mr-1" icon="solar:arrow-left-linear"></iconify-icon> Back to home
                </button>
<div className="inline-block p-3 rounded-2xl bg-brand-100 text-brand-700 mb-6">
<iconify-icon icon="solar:compass-big-linear" width="40"></iconify-icon>
</div>
<h1 className="font-serif text-4xl lg:text-5xl text-stone-900 mb-6 tracking-tight">Orientation Coaching</h1>
<p className="text-xl text-stone-600 leading-relaxed font-light">For individuals seeking meaning. Clarify your values, identify strengths, and define a professional path that aligns with who you truly are.</p>
</div>
</section>
<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-serif text-3xl text-stone-900 mb-6">Is this for you?</h2>
<ul className="space-y-4">
<li className="flex gap-4 items-start">
<iconify-icon className="text-stone-400 text-xl mt-1 flex-shrink-0" icon="solar:question-circle-linear"></iconify-icon>
<span className="text-stone-600">You feel <strong>stuck</strong> in your current role but don't know what else you could do.</span>
</li>
<li className="flex gap-4 items-start">
<iconify-icon className="text-stone-400 text-xl mt-1 flex-shrink-0" icon="solar:question-circle-linear"></iconify-icon>
<span className="text-stone-600">You are experiencing a loss of <strong>motivation</strong> or meaning (brown-out).</span>
</li>
<li className="flex gap-4 items-start">
<iconify-icon className="text-stone-400 text-xl mt-1 flex-shrink-0" icon="solar:question-circle-linear"></iconify-icon>
<span className="text-stone-600">You have many interests but struggle to <strong>focus</strong> on one direction.</span>
</li>
<li className="flex gap-4 items-start">
<iconify-icon className="text-stone-400 text-xl mt-1 flex-shrink-0" icon="solar:question-circle-linear"></iconify-icon>
<span className="text-stone-600">You want your next career move to be based on <strong>values</strong>, not just salary.</span>
</li>
</ul>
</div>
<div className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
<h3 className="font-serif text-2xl text-stone-900 mb-4">Outcomes</h3>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700"><iconify-icon icon="solar:check-read-linear"></iconify-icon></div>
<span className="font-medium text-stone-800">Clear Professional Vision</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700"><iconify-icon icon="solar:check-read-linear"></iconify-icon></div>
<span className="font-medium text-stone-800">Values &amp; Strengths Blueprint</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700"><iconify-icon icon="solar:check-read-linear"></iconify-icon></div>
<span className="font-medium text-stone-800">Action Plan for Pivot</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700"><iconify-icon icon="solar:check-read-linear"></iconify-icon></div>
<span className="font-medium text-stone-800">Renewed Energy</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-20 bg-stone-50 border-t border-stone-200">
<div className="max-w-3xl mx-auto px-4 text-center">
<h2 className="font-serif text-3xl text-stone-900 mb-8">Typical Journey</h2>
<div className="relative border-l-2 border-stone-200 ml-4 md:mx-auto space-y-12 text-left md:pl-8">
<div className="relative pl-8 md:pl-0">
<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-500 border-4 border-stone-50"></div>
<h4 className="text-lg font-semibold text-stone-900">1. Introspection</h4>
<p className="text-stone-500 text-sm mt-1">Deep dive into your past experiences, successes, and failures to identify patterns.</p>
</div>
<div className="relative pl-8 md:pl-0">
<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-stone-300 border-4 border-stone-50"></div>
<h4 className="text-lg font-semibold text-stone-900">2. The "Ikigai" Exploration</h4>
<p className="text-stone-500 text-sm mt-1">Connecting what you love, what you are good at, what the world needs, and what you can be paid for.</p>
</div>
<div className="relative pl-8 md:pl-0">
<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-stone-300 border-4 border-stone-50"></div>
<h4 className="text-lg font-semibold text-stone-900">3. Market Reality</h4>
<p className="text-stone-500 text-sm mt-1">Confronting the ideal vision with market realities. Networking strategies.</p>
</div>
</div>
<div className="mt-16 bg-white p-6 rounded-xl border border-stone-200 shadow-sm inline-block w-full max-w-md">
<div className="text-sm font-semibold text-stone-500 uppercase tracking-wide mb-2">Structure</div>
<div className="text-3xl font-serif text-stone-900 mb-4">8 Sessions</div>
<p className="text-stone-500 text-sm mb-6">Spread over 3-4 months. Includes exercises between sessions.</p>
<a className="block w-full py-3 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors" href="#contact">Book Discovery Call</a>
</div>
</div>
</section>
</main>



<main x-show="page === 'transition'" x-transition.opacity.duration.300ms="">
<section className="relative pt-32 pb-20 bg-stone-50">
<div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
<button @click="navigate('home')" className="mb-8 inline-flex items-center text-sm text-stone-500 hover:text-stone-900 transition-colors">
<iconify-icon className="mr-1" icon="solar:arrow-left-linear"></iconify-icon> Back to home
                </button>
<div className="inline-block p-3 rounded-2xl bg-brand-100 text-brand-700 mb-6">
<iconify-icon icon="solar:transfer-horizontal-linear" width="40"></iconify-icon>
</div>
<h1 className="font-serif text-4xl lg:text-5xl text-stone-900 mb-6 tracking-tight">Transition Coaching</h1>
<p className="text-xl text-stone-600 leading-relaxed font-light">Navigate change with strategy. Whether taking on a new executive role, launching a business, or managing a career pivot.</p>
</div>
</section>
<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 lg:px-8">
<div className="grid lg:grid-cols-3 gap-8">

<div className="p-8 border border-stone-100 rounded-2xl shadow-sm hover:border-brand-200 transition-colors">
<iconify-icon className="text-3xl text-brand-600 mb-4" icon="solar:chair-2-linear"></iconify-icon>
<h3 className="font-serif text-xl text-stone-900 mb-3">New Role Onboarding</h3>
<p className="text-sm text-stone-500 mb-4">The "First 90 Days" are critical. Secure your integration, define your leadership style early, and build key alliances quickly.</p>
</div>

<div className="p-8 border border-stone-100 rounded-2xl shadow-sm hover:border-brand-200 transition-colors">
<iconify-icon className="text-3xl text-brand-600 mb-4" icon="solar:rocket-2-linear"></iconify-icon>
<h3 className="font-serif text-xl text-stone-900 mb-3">Entrepreneurship</h3>
<p className="text-sm text-stone-500 mb-4">Moving from employee to founder. Managing the uncertainty, the mindset shift, and the isolation of the entrepreneur.</p>
</div>

<div className="p-8 border border-stone-100 rounded-2xl shadow-sm hover:border-brand-200 transition-colors">
<iconify-icon className="text-3xl text-brand-600 mb-4" icon="solar:exit-linear"></iconify-icon>
<h3 className="font-serif text-xl text-stone-900 mb-3">Exit Strategy</h3>
<p className="text-sm text-stone-500 mb-4">Negotiating a departure, leaving gracefully, and preparing the mental space for what comes next.</p>
</div>
</div>
</div>
</section>
<section className="py-20 bg-stone-900 text-stone-300">
<div className="max-w-5xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center gap-12">
<div className="flex-1">
<h2 className="font-serif text-3xl text-white mb-6">Why Coaching in Transition?</h2>
<p className="mb-6 font-light text-lg"> Transitions are periods of high vulnerability but also high leverage. A neutral partner helps you avoid common pitfalls like:</p>
<ul className="space-y-3">
<li className="flex items-center gap-3"><iconify-icon className="text-red-400" icon="solar:close-circle-linear"></iconify-icon> Imposter syndrome paralyzing action</li>
<li className="flex items-center gap-3"><iconify-icon className="text-red-400" icon="solar:close-circle-linear"></iconify-icon> Misreading the company culture</li>
<li className="flex items-center gap-3"><iconify-icon className="text-red-400" icon="solar:close-circle-linear"></iconify-icon> Burnout from trying to prove yourself too fast</li>
</ul>
</div>
<div className="flex-1 bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-sm">
<div className="text-sm font-semibold text-brand-400 uppercase tracking-wide mb-2">Package</div>
<div className="text-2xl font-serif text-white mb-2">The 90-Day Ramp Up</div>
<p className="text-stone-400 text-sm mb-6">Intensive support during your first quarter.</p>
<ul className="text-sm space-y-2 mb-8 text-stone-300">
<li className="flex gap-2"><iconify-icon className="text-brand-500" icon="solar:check-read-linear"></iconify-icon> 6 Coaching Sessions (bi-weekly)</li>
<li className="flex gap-2"><iconify-icon className="text-brand-500" icon="solar:check-read-linear"></iconify-icon> Stakeholder Mapping Analysis</li>
<li className="flex gap-2"><iconify-icon className="text-brand-500" icon="solar:check-read-linear"></iconify-icon> Unlimited WhatsApp Support</li>
</ul>
<a className="block w-full py-3 bg-white text-stone-900 font-medium text-center rounded-lg hover:bg-stone-200 transition-colors" href="#contact">Inquire Now</a>
</div>
</div>
</section>
</main>



<main x-show="page === 'development'" x-transition.opacity.duration.300ms="">
<section className="relative pt-32 pb-20 bg-stone-50">
<div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
<button @click="navigate('home')" className="mb-8 inline-flex items-center text-sm text-stone-500 hover:text-stone-900 transition-colors">
<iconify-icon className="mr-1" icon="solar:arrow-left-linear"></iconify-icon> Back to home
                </button>
<div className="inline-block p-3 rounded-2xl bg-brand-100 text-brand-700 mb-6">
<iconify-icon icon="solar:stairs-linear" width="40"></iconify-icon>
</div>
<h1 className="font-serif text-4xl lg:text-5xl text-stone-900 mb-6 tracking-tight">Development Coaching</h1>
<p className="text-xl text-stone-600 leading-relaxed font-light">Elevate your game. Focused on specific competencies: Leadership, Emotional Intelligence, Public Speaking, and Assertiveness.</p>
</div>
</section>
<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 lg:px-8">
<div className="grid md:grid-cols-2 gap-12">

<div className="flex gap-6">
<div className="w-12 h-12 rounded-full bg-stone-100 flex-shrink-0 flex items-center justify-center text-stone-700">
<iconify-icon className="text-xl" icon="solar:microphone-2-linear"></iconify-icon>
</div>
<div>
<h3 className="font-serif text-xl text-stone-900 mb-2">Communication &amp; Impact</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                                Struggling to be heard in meetings? We work on your vocal presence, structure of argumentation, and ability to influence without authority.
                            </p>
</div>
</div>

<div className="flex gap-6">
<div className="w-12 h-12 rounded-full bg-stone-100 flex-shrink-0 flex items-center justify-center text-stone-700">
<iconify-icon className="text-xl" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div>
<h3 className="font-serif text-xl text-stone-900 mb-2">Boundaries &amp; Assertiveness</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                                Learn to say "No" cleanly. Move from people-pleasing to respected professional. Protect your time and energy to focus on high-value tasks.
                            </p>
</div>
</div>

<div className="flex gap-6">
<div className="w-12 h-12 rounded-full bg-stone-100 flex-shrink-0 flex items-center justify-center text-stone-700">
<iconify-icon className="text-xl" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<div>
<h3 className="font-serif text-xl text-stone-900 mb-2">Emotional Regulation</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                                Manage stress and triggers. Keep your cool in high-stakes environments. Developing EQ is often the missing link to the C-suite.
                            </p>
</div>
</div>

<div className="flex gap-6">
<div className="w-12 h-12 rounded-full bg-stone-100 flex-shrink-0 flex items-center justify-center text-stone-700">
<iconify-icon className="text-xl" icon="solar:crown-star-linear"></iconify-icon>
</div>
<div>
<h3 className="font-serif text-xl text-stone-900 mb-2">Authentic Leadership</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                                Define your own style of leadership. It's not about copying Steve Jobs; it's about leading from a place that feels true to you.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-brand-700 text-white rounded-none lg:rounded-3xl mx-0 lg:mx-8 mb-0 lg:mb-8">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="font-serif text-3xl mb-4">Ready to grow?</h2>
<p className="text-brand-100 mb-8 max-w-xl mx-auto">Development coaching usually typically requires 5 to 10 sessions, depending on the depth of the topic.</p>
<a className="inline-block bg-white text-brand-800 font-semibold px-8 py-3 rounded-lg hover:bg-brand-50 transition-colors" href="#contact">Book a consultation</a>
</div>
</section>
</main>



<main x-show="page === 'teams'" x-transition.opacity.duration.300ms="">
<section className="relative pt-32 pb-20 bg-stone-900 text-white">
<div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
<button @click="navigate('home')" className="mb-8 inline-flex items-center text-sm text-stone-400 hover:text-white transition-colors">
<iconify-icon className="mr-1" icon="solar:arrow-left-linear"></iconify-icon> Back to home
                </button>
<div className="inline-block p-3 rounded-2xl bg-white/10 backdrop-blur text-white mb-6">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="40"></iconify-icon>
</div>
<h1 className="font-serif text-4xl lg:text-5xl text-white mb-6 tracking-tight">Team Coaching &amp; Workshops</h1>
<p className="text-xl text-stone-300 leading-relaxed font-light">For organizations. Move from a group of individuals to a high-performing, cohesive team.</p>
</div>
</section>
<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<span className="text-brand-600 font-semibold tracking-wider text-sm uppercase">Methodology</span>
<h2 className="font-serif text-3xl text-stone-900 mt-2 mb-6">Systemic Approach</h2>
<p className="text-stone-600 mb-6 leading-relaxed">
                            A team is a living system. When one part changes, the whole system adapts. I don't just coach individuals within a team; I coach the <em>relationships</em> between them.
                        </p>
<p className="text-stone-600 mb-6 leading-relaxed">
                            My interventions are often based on the Lencioni model (5 Dysfunctions of a Team) or Systemic Coaching principles.
                        </p>
<div className="grid grid-cols-2 gap-4 mt-8">
<div className="bg-stone-50 p-4 rounded-lg">
<div className="font-semibold text-stone-900 mb-1">Trust</div>
<div className="text-xs text-stone-500">Psychological safety foundation</div>
</div>
<div className="bg-stone-50 p-4 rounded-lg">
<div className="font-semibold text-stone-900 mb-1">Conflict</div>
<div className="text-xs text-stone-500">Constructive debate vs harmony</div>
</div>
<div className="bg-stone-50 p-4 rounded-lg">
<div className="font-semibold text-stone-900 mb-1">Commitment</div>
<div className="text-xs text-stone-500">Buy-in even without consensus</div>
</div>
<div className="bg-stone-50 p-4 rounded-lg">
<div className="font-semibold text-stone-900 mb-1">Accountability</div>
<div className="text-xs text-stone-500">Peer-to-peer standards</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-stone-100 rounded-2xl -rotate-2"></div>
<div className="relative bg-white border border-stone-200 p-8 rounded-2xl shadow-lg">
<h3 className="font-serif text-2xl text-stone-900 mb-6">Format Options</h3>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 flex-shrink-0 font-bold">1</div>
<div>
<h4 className="font-semibold text-stone-900">One-off Workshop</h4>
<p className="text-sm text-stone-500">1 or 2 days offsite. Ideal for team bonding, defining vision/mission, or kicking off a new project.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 flex-shrink-0 font-bold">2</div>
<div>
<h4 className="font-semibold text-stone-900">Long-term Team Coaching</h4>
<p className="text-sm text-stone-500">Quarterly sessions over 6-12 months. Coaching the team during real meetings to observe and correct dynamics in real-time.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 flex-shrink-0 font-bold">3</div>
<div>
<h4 className="font-semibold text-stone-900">Conflict Mediation</h4>
<p className="text-sm text-stone-500">Specific intervention to resolve deadlocks between key stakeholders or departments.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-t border-stone-200 bg-stone-50">
<div className="max-w-7xl mx-auto px-4 text-center">
<p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-8">Trusting Companies</p>
<div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">

<span className="text-xl font-bold font-serif text-stone-800">DELOITTE</span>
<span className="text-xl font-bold font-sans tracking-tighter text-stone-800">SOLVAY</span>
<span className="text-xl font-bold font-serif italic text-stone-800">L'Oréal</span>
<span className="text-xl font-bold font-sans text-stone-800">Swift</span>
<span className="text-xl font-bold font-sans tracking-widest text-stone-800">ENGIE</span>
</div>
</div>
</section>
</main>




<section className="py-24 bg-stone-50 border-t border-stone-200" id="contact">
<div className="max-w-7xl mx-auto px-4 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24">

<div>
<span className="text-brand-600 font-semibold tracking-wider text-sm uppercase">Get Started</span>
<h2 className="font-serif text-3xl lg:text-4xl text-stone-900 mt-2 mb-6">Book your discovery call</h2>
<p className="text-stone-600 mb-8">
                        The first step is a 15-minute conversation to see if we are a good fit. Select a time in the calendar below.
                    </p>

<div className="bg-white p-4 rounded-xl shadow-sm border border-stone-200 h-[400px] flex items-center justify-center relative overflow-hidden group cursor-pointer">
<div className="absolute inset-0 bg-stone-50 animate-pulse"></div>
<div className="z-10 text-center">
<iconify-icon className="text-brand-600 text-4xl mb-2" icon="solar:calendar-add-linear"></iconify-icon>
<p className="font-medium text-stone-900">Calendly Integration Placeholder</p>
<p className="text-xs text-stone-500 mt-1">(Real calendar widget loads here)</p>
<button className="mt-4 px-4 py-2 bg-stone-900 text-white text-sm rounded-lg">View Availability</button>
</div>
</div>
</div>

<div>
<h3 className="font-serif text-2xl text-stone-900 mb-6">Or send a message</h3>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block mb-2 text-sm font-medium text-stone-900" htmlFor="first-name">First Name</label>
<input className="bg-white border border-stone-200 text-stone-900 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full p-2.5" id="first-name" required="" type="text"/>
</div>
<div>
<label className="block mb-2 text-sm font-medium text-stone-900" htmlFor="last-name">Last Name</label>
<input className="bg-white border border-stone-200 text-stone-900 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full p-2.5" id="last-name" required="" type="text"/>
</div>
</div>
<div>
<label className="block mb-2 text-sm font-medium text-stone-900" htmlFor="email">Email</label>
<input className="bg-white border border-stone-200 text-stone-900 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full p-2.5" id="email" required="" type="email"/>
</div>
<div>
<label className="block mb-2 text-sm font-medium text-stone-900" htmlFor="message">Message</label>
<textarea className="bg-white border border-stone-200 text-stone-900 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full p-2.5" id="message" rows="4"></textarea>
</div>
<button className="w-full text-white bg-stone-900 hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 font-medium rounded-lg text-sm px-5 py-3 text-center transition-all" type="submit">
                            Send Message
                        </button>
</form>
<div className="mt-8 pt-8 border-t border-stone-200">
<p className="flex items-center gap-2 text-stone-600 mb-2">
<iconify-icon className="text-brand-600" icon="solar:letter-linear"></iconify-icon> contact@alexandretielemans.com
                        </p>
<p className="flex items-center gap-2 text-stone-600">
<iconify-icon className="text-brand-600" icon="solar:map-point-linear"></iconify-icon> Luxembourg Square / Avenue Louise, Brussels
                        </p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<span className="self-center text-xl font-serif font-bold tracking-tighter text-stone-900">AT<span className="text-brand-600">.</span></span>
<p className="mt-4 text-xs text-stone-500 leading-relaxed">
                        ICF Professional Certified Coach based in Brussels.<br/>
                        Helping you move forward with clarity.
                    </p>
</div>
<div>
<h3 className="font-semibold text-stone-900 mb-4 text-sm">Sitemap</h3>
<ul className="space-y-2 text-xs text-stone-500">
<li><a @click.prevent="navigate('home')" className="hover:text-brand-600" href="#">Home</a></li>
<li><a className="hover:text-brand-600" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h3 className="font-semibold text-stone-900 mb-4 text-sm">Services</h3>
<ul className="space-y-2 text-xs text-stone-500">
<li><a @click.prevent="navigate('orientation')" className="hover:text-brand-600" href="#">Orientation</a></li>
<li><a @click.prevent="navigate('transition')" className="hover:text-brand-600" href="#">Transition</a></li>
<li><a @click.prevent="navigate('development')" className="hover:text-brand-600" href="#">Development</a></li>
<li><a @click.prevent="navigate('teams')" className="hover:text-brand-600" href="#">Team Coaching</a></li>
</ul>
</div>
<div>
<h3 className="font-semibold text-stone-900 mb-4 text-sm">Legal</h3>
<ul className="space-y-2 text-xs text-stone-500">
<li><a className="hover:text-brand-600" href="#">Privacy Policy</a></li>
<li><a className="hover:text-brand-600" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-400">
<p>© 2023 Alexandre Tielemans. All rights reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
