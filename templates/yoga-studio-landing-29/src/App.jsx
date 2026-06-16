import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="font-heading font-semibold text-lg tracking-tight text-stone-900 uppercase hover:text-teal-700 transition-colors" href="#">
                [STUDIO_NAME]
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
<a className="hover:text-teal-700 transition-colors" href="#about">About</a>
<a className="hover:text-teal-700 transition-colors" href="#classes">Classes</a>
<a className="hover:text-teal-700 transition-colors" href="#schedule">Schedule</a>
<a className="hover:text-teal-700 transition-colors" href="#pricing">Pricing</a>
<a className="px-5 py-2.5 bg-teal-700 text-stone-50 rounded-full hover:bg-teal-800 transition-all shadow-sm hover:shadow-md" href="#contact">
                    Book a Class
                </a>
</div>

<div className="md:hidden text-stone-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
<div className="fade-in-up" style={{animationDelay: '0.1s'}}>
<span className="inline-block py-1 px-3 rounded-full bg-stone-100 text-teal-800 text-xs font-semibold tracking-wide mb-6 border border-stone-200">
                    Welcome to your sanctuary
                </span>
<h1 className="font-heading text-4xl md:text-6xl font-medium text-stone-900 tracking-tight leading-[1.1] mb-6">
                    Find Your Calm in the Heart of [CITY]
                </h1>
<p className="text-lg md:text-xl text-stone-500 leading-relaxed mb-8 max-w-lg">
                    Breathe. Move. Come Home to Yourself. A warm, inclusive space for busy minds to slow down and reconnect.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-8 py-3.5 bg-teal-700 text-white rounded-full font-medium hover:bg-teal-800 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5" href="#contact">
                        Book a Class
                    </a>
<a className="inline-flex justify-center items-center px-8 py-3.5 bg-white text-stone-900 border border-stone-200 rounded-full font-medium hover:bg-stone-50 transition-all hover:border-stone-300" href="#schedule">
                        View Schedule
                    </a>
</div>
</div>
<div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl fade-in-up" style={{animationDelay: '0.3s'}}>

<img alt="Diverse group practicing gentle yoga in a sunlit studio" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent"></div>
</div>
</div>
</header>

<section className="py-24 bg-stone-100/50" id="about">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="font-heading text-3xl md:text-4xl font-medium text-stone-900 tracking-tight mb-6">
                More Than Just a Studio
            </h2>
<p className="text-lg text-stone-600 mb-12 leading-relaxed">
                [STUDIO_NAME] was created to be a pause button in a fast-paced world. We believe yoga isn't about the perfect pose, but about how you feel while you're in it. Our mission is to provide a safe, non-judgmental space where people can slow down, breathe deeply, and practice in a supportive community.
            </p>
<div className="grid md:grid-cols-3 gap-8 text-left md:text-center">
<div className="p-6 bg-white rounded-2xl border border-stone-100 shadow-sm">
<div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-teal-700 mb-4 md:mx-auto">
<i className="w-5 h-5" data-lucide="heart"></i>
</div>
<h3 className="font-heading text-lg font-semibold text-stone-900 mb-2">Presence</h3>
<p className="text-sm text-stone-500">Leaving the to-do lists at the door to arrive fully in the moment.</p>
</div>
<div className="p-6 bg-white rounded-2xl border border-stone-100 shadow-sm">
<div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-teal-700 mb-4 md:mx-auto">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<h3 className="font-heading text-lg font-semibold text-stone-900 mb-2">Community</h3>
<p className="text-sm text-stone-500">Connecting with others in a space where everyone belongs.</p>
</div>
<div className="p-6 bg-white rounded-2xl border border-stone-100 shadow-sm">
<div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-teal-700 mb-4 md:mx-auto">
<i className="w-5 h-5" data-lucide="sprout"></i>
</div>
<h3 className="font-heading text-lg font-semibold text-stone-900 mb-2">Growth</h3>
<p className="text-sm text-stone-500">Evolving your practice safely at your own unique pace.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto" id="classes">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="font-heading text-3xl md:text-4xl font-medium text-stone-900 tracking-tight mb-4">
                    Our Classes
                </h2>
<p className="text-stone-500 max-w-md">
                    Explore a variety of styles designed to meet you exactly where you are today. New to yoga? Start with Gentle Flow or Hatha.
                </p>
</div>
<a className="text-teal-700 font-medium hover:text-teal-800 inline-flex items-center gap-1" href="#schedule">
                View Schedule <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<article className="group relative bg-white border border-stone-200 rounded-2xl p-8 hover:border-teal-200 hover:shadow-lg transition-all duration-300">
<div className="absolute top-6 right-6 p-2 bg-stone-50 rounded-full text-stone-400 group-hover:text-teal-600 transition-colors">
<i className="w-5 h-5" data-lucide="sun"></i>
</div>
<span className="text-xs font-semibold tracking-wider text-teal-700 uppercase mb-2 block">Beginner Friendly</span>
<h3 className="font-heading text-xl font-semibold text-stone-900 mb-3">Hatha Yoga</h3>
<p className="text-stone-500 text-sm leading-relaxed mb-6">
                    A slower-paced class focusing on alignment and breathing. You'll hold poses longer to build strength and awareness. Perfect for grounding.
                </p>
<div className="h-1 w-12 bg-stone-100 group-hover:bg-teal-500 transition-colors rounded-full"></div>
</article>

<article className="group relative bg-white border border-stone-200 rounded-2xl p-8 hover:border-teal-200 hover:shadow-lg transition-all duration-300">
<div className="absolute top-6 right-6 p-2 bg-stone-50 rounded-full text-stone-400 group-hover:text-teal-600 transition-colors">
<i className="w-5 h-5" data-lucide="wind"></i>
</div>
<span className="text-xs font-semibold tracking-wider text-stone-500 uppercase mb-2 block">Open Level</span>
<h3 className="font-heading text-xl font-semibold text-stone-900 mb-3">Vinyasa Flow</h3>
<p className="text-stone-500 text-sm leading-relaxed mb-6">
                    Sync breath with movement in this dynamic flow. Expect a smooth sequence that builds heat and improves flexibility.
                </p>
<div className="h-1 w-12 bg-stone-100 group-hover:bg-teal-500 transition-colors rounded-full"></div>
</article>

<article className="group relative bg-white border border-stone-200 rounded-2xl p-8 hover:border-teal-200 hover:shadow-lg transition-all duration-300">
<div className="absolute top-6 right-6 p-2 bg-stone-50 rounded-full text-stone-400 group-hover:text-teal-600 transition-colors">
<i className="w-5 h-5" data-lucide="moon"></i>
</div>
<span className="text-xs font-semibold tracking-wider text-stone-500 uppercase mb-2 block">All Levels</span>
<h3 className="font-heading text-xl font-semibold text-stone-900 mb-3">Yin &amp; Restore</h3>
<p className="text-stone-500 text-sm leading-relaxed mb-6">
                    Deep relaxation. Gentle poses held for longer periods to target connective tissue and calm the nervous system.
                </p>
<div className="h-1 w-12 bg-stone-100 group-hover:bg-teal-500 transition-colors rounded-full"></div>
</article>

<article className="group relative bg-white border border-stone-200 rounded-2xl p-8 hover:border-teal-200 hover:shadow-lg transition-all duration-300">
<div className="absolute top-6 right-6 p-2 bg-stone-50 rounded-full text-stone-400 group-hover:text-teal-600 transition-colors">
<i className="w-5 h-5" data-lucide="smile"></i>
</div>
<span className="text-xs font-semibold tracking-wider text-teal-700 uppercase mb-2 block">Beginner Friendly</span>
<h3 className="font-heading text-xl font-semibold text-stone-900 mb-3">Gentle Flow</h3>
<p className="text-stone-500 text-sm leading-relaxed mb-6">
                    Soft movements and easy transitions. Ideal for stress relief, injury recovery, or anyone wanting a softer practice.
                </p>
<div className="h-1 w-12 bg-stone-100 group-hover:bg-teal-500 transition-colors rounded-full"></div>
</article>

<article className="group relative bg-white border border-stone-200 rounded-2xl p-8 hover:border-teal-200 hover:shadow-lg transition-all duration-300">
<div className="absolute top-6 right-6 p-2 bg-stone-50 rounded-full text-stone-400 group-hover:text-teal-600 transition-colors">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<span className="text-xs font-semibold tracking-wider text-stone-500 uppercase mb-2 block">Intermediate</span>
<h3 className="font-heading text-xl font-semibold text-stone-900 mb-3">Power Yoga</h3>
<p className="text-stone-500 text-sm leading-relaxed mb-6">
                    A strength-building practice that challenges the body and focuses the mind. Be prepared to sweat.
                </p>
<div className="h-1 w-12 bg-stone-100 group-hover:bg-teal-500 transition-colors rounded-full"></div>
</article>

<article className="group relative bg-white border border-stone-200 rounded-2xl p-8 hover:border-teal-200 hover:shadow-lg transition-all duration-300">
<div className="absolute top-6 right-6 p-2 bg-stone-50 rounded-full text-stone-400 group-hover:text-teal-600 transition-colors">
<i className="w-5 h-5" data-lucide="cloud"></i>
</div>
<span className="text-xs font-semibold tracking-wider text-stone-500 uppercase mb-2 block">All Levels</span>
<h3 className="font-heading text-xl font-semibold text-stone-900 mb-3">Breathwork</h3>
<p className="text-stone-500 text-sm leading-relaxed mb-6">
                    Guided pranayama and meditation techniques to reduce anxiety, improve lung capacity, and find inner silence.
                </p>
<div className="h-1 w-12 bg-stone-100 group-hover:bg-teal-500 transition-colors rounded-full"></div>
</article>
</div>
</section>

<section className="py-24 bg-stone-900 text-stone-50" id="schedule">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="font-heading text-3xl md:text-4xl font-medium tracking-tight mb-4">Weekly Schedule</h2>
<p className="text-stone-400">Join us on the mat.</p>
</div>
<div className="bg-stone-800 rounded-2xl p-6 md:p-10 border border-stone-700">

<div className="flex flex-col gap-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b border-stone-700">
<div className="w-24 font-heading font-semibold text-teal-400">Mon</div>
<div className="flex-1 w-full md:w-auto mt-2 md:mt-0">
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-medium">07:00 AM</span>
<span className="text-sm text-stone-300">Morning Flow</span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm font-medium">06:00 PM</span>
<span className="text-sm text-stone-300">Hatha Yoga</span>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b border-stone-700">
<div className="w-24 font-heading font-semibold text-teal-400">Tue</div>
<div className="flex-1 w-full md:w-auto mt-2 md:mt-0">
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-medium">09:00 AM</span>
<span className="text-sm text-stone-300">Gentle Yoga</span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm font-medium">07:30 PM</span>
<span className="text-sm text-stone-300">Vinyasa Flow</span>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b border-stone-700">
<div className="w-24 font-heading font-semibold text-teal-400">Wed</div>
<div className="flex-1 w-full md:w-auto mt-2 md:mt-0">
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-medium">07:00 AM</span>
<span className="text-sm text-stone-300">Power Yoga</span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm font-medium">06:00 PM</span>
<span className="text-sm text-stone-300">Yin &amp; Restore</span>
</div>
</div>
</div>
</div>
<div className="mt-8 text-center">
<button className="w-full md:w-auto px-6 py-3 bg-stone-700 hover:bg-stone-600 text-white rounded-lg text-sm font-medium transition-colors">
                        View Full Schedule &amp; Book
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-heading text-3xl md:text-4xl font-medium text-stone-900 tracking-tight mb-4">Meet Your Guides</h2>
<p className="text-stone-500">Experienced teachers dedicated to your growth and well-being.</p>
</div>
<div className="grid md:grid-cols-3 gap-10">

<div className="text-center">
<div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-stone-100 shadow-md relative">
<img alt="Sarah J." className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-heading text-lg font-semibold text-stone-900">Sarah J.</h3>
<p className="text-teal-700 text-xs font-semibold tracking-wide uppercase mb-3">Vinyasa &amp; Power</p>
<p className="text-sm text-stone-500 leading-relaxed">
                    With over 10 years of experience, Sarah brings dynamic energy and a focus on anatomical alignment to every class.
                </p>
</div>

<div className="text-center">
<div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-stone-100 shadow-md relative">
<img alt="David M." className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-heading text-lg font-semibold text-stone-900">David M.</h3>
<p className="text-teal-700 text-xs font-semibold tracking-wide uppercase mb-3">Hatha &amp; Breathwork</p>
<p className="text-sm text-stone-500 leading-relaxed">
                    David's calm presence and gentle guidance help students connect deeply with their breath and find stillness within.
                </p>
</div>

<div className="text-center">
<div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-stone-100 shadow-md relative">
<img alt="Elena R." className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-heading text-lg font-semibold text-stone-900">Elena R.</h3>
<p className="text-teal-700 text-xs font-semibold tracking-wide uppercase mb-3">Restorative &amp; Yin</p>
<p className="text-sm text-stone-500 leading-relaxed">
                    Elena specializes in restorative practices, creating a warm, nurturing environment for deep relaxation and healing.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-stone-100/30 border-y border-stone-200/50" id="pricing">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="font-heading text-3xl md:text-4xl font-medium text-stone-900 tracking-tight mb-4">Simple Pricing</h2>
<p className="text-stone-500">Invest in yourself. No hidden fees.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

<div className="bg-white p-8 rounded-2xl border border-stone-200 hover:border-stone-300 transition-all">
<h3 className="font-heading text-lg font-semibold text-stone-900">Drop-In</h3>
<div className="mt-4 flex items-baseline text-stone-900">
<span className="text-3xl font-bold tracking-tight">[PRICE]</span>
<span className="ml-1 text-sm text-stone-500">/class</span>
</div>
<p className="mt-4 text-sm text-stone-500 leading-relaxed min-h-[60px]">
                        Perfect for visitors or trying us out for the first time.
                    </p>
<ul className="mt-6 space-y-4 text-sm text-stone-600">
<li className="flex gap-3">
<i className="w-5 h-5 text-teal-600 shrink-0" data-lucide="check"></i> Access to any class
                        </li>
<li className="flex gap-3">
<i className="w-5 h-5 text-teal-600 shrink-0" data-lucide="check"></i> Mat rental included
                        </li>
<li className="flex gap-3">
<i className="w-5 h-5 text-teal-600 shrink-0" data-lucide="check"></i> Valid for 30 days
                        </li>
</ul>
<a className="mt-8 block w-full rounded-lg bg-stone-50 border border-stone-200 px-3 py-2.5 text-center text-sm font-semibold text-stone-900 hover:bg-stone-100 transition-colors" href="#">
                        Select Drop-In
                    </a>
</div>

<div className="bg-white p-8 rounded-2xl border border-teal-200 ring-1 ring-teal-100 shadow-sm relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Most Popular</div>
<h3 className="font-heading text-lg font-semibold text-stone-900">10 Class Pack</h3>
<div className="mt-4 flex items-baseline text-stone-900">
<span className="text-3xl font-bold tracking-tight">[PRICE]</span>
<span className="ml-1 text-sm text-stone-500">total</span>
</div>
<p className="mt-4 text-sm text-stone-500 leading-relaxed min-h-[60px]">
                        Commit to your practice with a flexible pack. Saves you money per class.
                    </p>
<ul className="mt-6 space-y-4 text-sm text-stone-600">
<li className="flex gap-3">
<i className="w-5 h-5 text-teal-600 shrink-0" data-lucide="check"></i> Shareable with a friend
                        </li>
<li className="flex gap-3">
<i className="w-5 h-5 text-teal-600 shrink-0" data-lucide="check"></i> Valid for 6 months
                        </li>
<li className="flex gap-3">
<i className="w-5 h-5 text-teal-600 shrink-0" data-lucide="check"></i> 10% off workshops
                        </li>
</ul>
<a className="mt-8 block w-full rounded-lg bg-teal-700 px-3 py-2.5 text-center text-sm font-semibold text-white hover:bg-teal-800 transition-colors" href="#">
                        Choose Pack
                    </a>
</div>

<div className="bg-white p-8 rounded-2xl border border-stone-200 hover:border-stone-300 transition-all">
<h3 className="font-heading text-lg font-semibold text-stone-900">Unlimited</h3>
<div className="mt-4 flex items-baseline text-stone-900">
<span className="text-3xl font-bold tracking-tight">[PRICE]</span>
<span className="ml-1 text-sm text-stone-500">/month</span>
</div>
<p className="mt-4 text-sm text-stone-500 leading-relaxed min-h-[60px]">
                        For the dedicated yogi. Deepen your practice with unlimited access.
                    </p>
<ul className="mt-6 space-y-4 text-sm text-stone-600">
<li className="flex gap-3">
<i className="w-5 h-5 text-teal-600 shrink-0" data-lucide="check"></i> Unlimited classes
                        </li>
<li className="flex gap-3">
<i className="w-5 h-5 text-teal-600 shrink-0" data-lucide="check"></i> Free towel rental
                        </li>
<li className="flex gap-3">
<i className="w-5 h-5 text-teal-600 shrink-0" data-lucide="check"></i> Priority booking
                        </li>
</ul>
<a className="mt-8 block w-full rounded-lg bg-stone-50 border border-stone-200 px-3 py-2.5 text-center text-sm font-semibold text-stone-900 hover:bg-stone-100 transition-colors" href="#">
                        Join Monthly
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto">
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
<div className="flex gap-1 text-teal-600 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-stone-600 italic mb-4">
                    "[STUDIO_NAME] feels like a second home. The teachers are so welcoming, and I never feel out of place, even as a beginner."
                </p>
<p className="font-semibold text-stone-900 text-sm">- Jessica L.</p>
</div>
<div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
<div className="flex gap-1 text-teal-600 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-stone-600 italic mb-4">
                    "I come here to decompress after work. The Yin classes have completely changed how I manage stress. Highly recommend."
                </p>
<p className="font-semibold text-stone-900 text-sm">- Mark T.</p>
</div>
<div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
<div className="flex gap-1 text-teal-600 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-stone-600 italic mb-4">
                    "Finally, a studio that isn't about competition. It's truly a community. I leave every class feeling grounded."
                </p>
<p className="font-semibold text-stone-900 text-sm">- Alex R.</p>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-stone-100">
<div className="max-w-3xl mx-auto px-6">
<h2 className="font-heading text-3xl font-medium text-stone-900 tracking-tight mb-10 text-center">Common Questions</h2>
<div className="space-y-4">
<details className="group bg-stone-50 p-4 rounded-lg cursor-pointer">
<summary className="flex justify-between items-center font-medium text-stone-900">
                        I’m a complete beginner. Can I join?
                        <span className="transition-transform group-open:rotate-180">
<i className="w-5 h-5 text-stone-400" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="mt-3 text-stone-600 text-sm leading-relaxed">
                        Absolutely! We love beginners. We recommend starting with our Gentle Flow or Hatha classes. Our teachers are trained to offer modifications for all levels, ensuring you feel safe and comfortable.
                    </p>
</details>
<details className="group bg-stone-50 p-4 rounded-lg cursor-pointer">
<summary className="flex justify-between items-center font-medium text-stone-900">
                        What should I bring to class?
                        <span className="transition-transform group-open:rotate-180">
<i className="w-5 h-5 text-stone-400" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="mt-3 text-stone-600 text-sm leading-relaxed">
                        Wear comfortable clothing you can move in. We have mats available for rent (free for members), but you are welcome to bring your own. A water bottle is also a good idea!
                    </p>
</details>
<details className="group bg-stone-50 p-4 rounded-lg cursor-pointer">
<summary className="flex justify-between items-center font-medium text-stone-900">
                        Do I need to book in advance?
                        <span className="transition-transform group-open:rotate-180">
<i className="w-5 h-5 text-stone-400" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="mt-3 text-stone-600 text-sm leading-relaxed">
                        We recommend booking online to secure your spot as some evening classes fill up quickly. However, walk-ins are welcome if there is space available.
                    </p>
</details>
<details className="group bg-stone-50 p-4 rounded-lg cursor-pointer">
<summary className="flex justify-between items-center font-medium text-stone-900">
                        What if I have an injury?
                        <span className="transition-transform group-open:rotate-180">
<i className="w-5 h-5 text-stone-400" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="mt-3 text-stone-600 text-sm leading-relaxed">
                        Please inform the teacher before class starts. They can suggest modifications to keep you safe. Listen to your body and never push into pain.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto" id="contact">
<div className="grid md:grid-cols-2 gap-12 lg:gap-24">
<div>
<h2 className="font-heading text-3xl font-medium text-stone-900 tracking-tight mb-6">Get in Touch</h2>
<p className="text-stone-500 mb-8">
                    Have a question or want to book a private session? Fill out the form or drop by the studio.
                </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-2 bg-stone-100 rounded-lg text-teal-700">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="font-semibold text-stone-900 text-sm">Visit Us</h4>
<p className="text-stone-500 text-sm mt-1">[ADDRESS_LINE_1]<br/>[CITY, COUNTRY]</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 bg-stone-100 rounded-lg text-teal-700">
<i className="w-5 h-5" data-lucide="clock"></i>
</div>
<div>
<h4 className="font-semibold text-stone-900 text-sm">Opening Hours</h4>
<p className="text-stone-500 text-sm mt-1">Mon-Fri: 6:30 AM – 9:00 PM<br/>Sat-Sun: 8:00 AM – 6:00 PM</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 bg-stone-100 rounded-lg text-teal-700">
<i className="w-5 h-5" data-lucide="mail"></i>
</div>
<div>
<h4 className="font-semibold text-stone-900 text-sm">Contact</h4>
<p className="text-stone-500 text-sm mt-1">[EMAIL_ADDRESS]<br/>[PHONE_NUMBER]</p>
</div>
</div>
</div>

<div className="mt-8 h-48 bg-stone-200 rounded-2xl flex items-center justify-center text-stone-400 text-sm">
<div className="flex flex-col items-center gap-2">
<i className="w-6 h-6" data-lucide="map"></i>
<span>Map Embed Placeholder</span>
</div>
</div>
</div>
<form className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
<div className="space-y-5">
<div>
<label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="name">Name</label>
<input className="w-full rounded-lg border-stone-200 bg-stone-50 focus:border-teal-500 focus:ring-teal-500 text-sm py-3 px-4 transition-colors placeholder:text-stone-400" id="name" placeholder="Your name" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="email">Email</label>
<input className="w-full rounded-lg border-stone-200 bg-stone-50 focus:border-teal-500 focus:ring-teal-500 text-sm py-3 px-4 transition-colors placeholder:text-stone-400" id="email" placeholder="you@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="reason">Reason for contacting</label>
<div className="relative">
<select className="w-full rounded-lg border-stone-200 bg-stone-50 focus:border-teal-500 focus:ring-teal-500 text-sm py-3 px-4 appearance-none text-stone-600" id="reason">
<option>General Question</option>
<option>Private Session</option>
<option>Corporate Yoga</option>
<option>Other</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-stone-500">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="message">Message</label>
<textarea className="w-full rounded-lg border-stone-200 bg-stone-50 focus:border-teal-500 focus:ring-teal-500 text-sm py-3 px-4 transition-colors placeholder:text-stone-400" id="message" placeholder="How can we help?" rows="4"></textarea>
</div>
<button className="w-full py-3 px-4 bg-teal-700 text-white rounded-lg font-medium hover:bg-teal-800 transition-all shadow-sm" type="button">
                        Send Message
                    </button>
</div>
</form>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-16">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-1">
<a className="font-heading font-semibold text-lg text-stone-50 uppercase tracking-tight mb-4 inline-block" href="#">[STUDIO_NAME]</a>
<p className="text-sm leading-relaxed mb-6">
                    A peaceful sanctuary in [CITY] dedicated to mindful movement and community.
                </p>
<div className="flex gap-4">
<a className="hover:text-teal-400 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="hover:text-teal-400 transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="hover:text-teal-400 transition-colors" href="#"><i className="w-5 h-5" data-lucide="phone"></i></a>
</div>
</div>
<div>
<h4 className="text-stone-50 font-medium mb-4">Explore</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-teal-400 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-teal-400 transition-colors" href="#classes">Class Styles</a></li>
<li><a className="hover:text-teal-400 transition-colors" href="#teachers">Teachers</a></li>
<li><a className="hover:text-teal-400 transition-colors" href="#pricing">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-stone-50 font-medium mb-4">Visit</h4>
<ul className="space-y-2 text-sm">
<li>[ADDRESS_LINE_1]</li>
<li>[CITY, COUNTRY]</li>
<li><a className="hover:text-teal-400 transition-colors mt-2 inline-block" href="#contact">Get Directions</a></li>
</ul>
</div>
<div>
<h4 className="text-stone-50 font-medium mb-4">Book Now</h4>
<p className="text-sm mb-4">Ready to find your calm?</p>
<a className="inline-block px-5 py-2 bg-stone-800 text-stone-200 rounded-lg text-sm font-medium border border-stone-700 hover:bg-teal-900 hover:text-teal-100 hover:border-teal-800 transition-colors" href="#schedule">
                    View Schedule
                </a>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-stone-800 text-xs text-center md:text-left flex flex-col md:flex-row justify-between gap-4">
<p>© 2023 [STUDIO_NAME]. All rights reserved.</p>
<div className="flex gap-6 justify-center md:justify-end">
<a className="hover:text-stone-200" href="#">Privacy Policy</a>
<a className="hover:text-stone-200" href="#">Terms of Service</a>
</div>
</div>
</footer>


    </>
  );
}
