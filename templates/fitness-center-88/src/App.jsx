import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Schedule Tabs Logic
        function switchTab(tabId) {
            const todayBtn = document.getElementById('tab-today');
            const tomorrowBtn = document.getElementById('tab-tomorrow');
            const todayContent = document.getElementById('content-today');
            const tomorrowContent = document.getElementById('content-tomorrow');

            // Reset buttons
            todayBtn.className = 'rounded-full px-6 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-all';
            tomorrowBtn.className = 'rounded-full px-6 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-all';

            // Hide contents
            todayContent.classList.add('hidden');
            tomorrowContent.classList.add('hidden');

            // Activate selected
            if(tabId === 'today') {
                todayBtn.className = 'rounded-full bg-zinc-800 px-6 py-2 text-sm font-medium text-white shadow-sm transition-all';
                todayContent.classList.remove('hidden');
            } else {
                tomorrowBtn.className = 'rounded-full bg-zinc-800 px-6 py-2 text-sm font-medium text-white shadow-sm transition-all';
                tomorrowContent.classList.remove('hidden');
            }
        }

        // Pricing Toggle Logic
        const billingToggle = document.getElementById('billing-toggle');
        const priceDisplays = document.querySelectorAll('.price-display');
        const monthlyLabel = document.getElementById('monthly-label');
        const yearlyLabel = document.getElementById('yearly-label');

        billingToggle.addEventListener('change', (e) => {
            const isYearly = e.target.checked;
            
            if(isYearly) {
                monthlyLabel.classList.remove('text-white');
                monthlyLabel.classList.add('text-zinc-400');
                yearlyLabel.classList.remove('text-zinc-400');
                yearlyLabel.classList.add('text-white');
            } else {
                monthlyLabel.classList.add('text-white');
                monthlyLabel.classList.remove('text-zinc-400');
                yearlyLabel.classList.add('text-zinc-400');
                yearlyLabel.classList.remove('text-white');
            }

            priceDisplays.forEach(display => {
                if(isYearly) {
                    display.textContent = display.getAttribute('data-yearly');
                    display.nextElementSibling.textContent = '৳ / বছর';
                } else {
                    display.textContent = display.getAttribute('data-monthly');
                    display.nextElementSibling.textContent = '৳ / মাস';
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
<iconify-icon className="text-xl" icon="solar:dumbbell-large-linear"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-white uppercase">ফিট</span>
</div>

<div className="hidden md:flex md:items-center md:gap-8">
<a className="text-sm font-medium text-white transition-colors hover:text-emerald-400" href="#home">হোম</a>
<a className="text-sm font-medium text-zinc-400 transition-colors hover:text-white" href="#features">সুবিধাসমূহ</a>
<a className="text-sm font-medium text-zinc-400 transition-colors hover:text-white" href="#schedule">শিডিউল</a>
<a className="text-sm font-medium text-zinc-400 transition-colors hover:text-white" href="#pricing">প্যাকেজ</a>
</div>

<div className="hidden md:flex md:items-center md:gap-4">
<button className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">লগ ইন</button>
<button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200">
                        সদস্য হোন
                    </button>
</div>

<div className="flex items-center md:hidden">
<button className="text-zinc-400 hover:text-white" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden border-t border-zinc-800 bg-zinc-950 md:hidden" id="mobile-menu">
<div className="space-y-1 px-6 pb-6 pt-4">
<a className="block rounded-lg px-3 py-2 text-base font-medium text-white hover:bg-zinc-900" href="#home">হোম</a>
<a className="block rounded-lg px-3 py-2 text-base font-medium text-zinc-400 hover:bg-zinc-900 hover:text-white" href="#features">সুবিধাসমূহ</a>
<a className="block rounded-lg px-3 py-2 text-base font-medium text-zinc-400 hover:bg-zinc-900 hover:text-white" href="#schedule">শিডিউল</a>
<a className="block rounded-lg px-3 py-2 text-base font-medium text-zinc-400 hover:bg-zinc-900 hover:text-white" href="#pricing">প্যাকেজ</a>
<div className="mt-4 border-t border-zinc-800 pt-4 flex flex-col gap-3">
<button className="w-full text-left rounded-lg px-3 py-2 text-base font-medium text-zinc-400 hover:bg-zinc-900 hover:text-white">লগ ইন</button>
<button className="w-full rounded-full bg-white px-4 py-2 text-center text-sm font-medium text-zinc-950 hover:bg-zinc-200">সদস্য হোন</button>
</div>
</div>
</div>
</nav>

<main>
<section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32" id="home">

<div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[800px] -translate-x-1/2 bg-[radial-gradient(closest-side,#059669_0%,transparent_100%)] opacity-20 blur-3xl"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">

<div className="mb-8 flex justify-center">
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
<iconify-icon icon="solar:stars-linear"></iconify-icon>
                        নতুন ব্যাচে ভর্তি চলছে
                    </div>
</div>

<h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                    আপনার শরীর, <br className="md:hidden"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">আপনার নিয়ম</span>
</h1>
<p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed">
                    অত্যাধুনিক সরঞ্জাম, বিশেষজ্ঞ ট্রেইনার এবং একটি অনুপ্রেরণামূলক পরিবেশের সাথে আপনার ফিটনেস লক্ষ্য অর্জন করুন। আজই শুরু করুন আপনার সুস্থতার যাত্রা।
                </p>

<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto rounded-full bg-white px-8 py-3 text-sm font-medium text-zinc-950 transition-all hover:bg-zinc-200 hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                        যাত্রা শুরু করুন
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto rounded-full border border-zinc-800 bg-zinc-900/50 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-zinc-800 backdrop-blur-sm flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
                        ট্যুর দেখুন
                    </button>
</div>

<div className="mt-16 sm:mt-20 relative mx-auto max-w-5xl">
<div className="relative rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-1 sm:p-2 shadow-2xl backdrop-blur-sm">
<img alt="আধুনিক জিম" className="w-full h-[250px] sm:h-[400px] object-cover rounded-xl opacity-80" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none"></div>

<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none rounded-b-2xl"></div>
</div>
</div>

<div className="mt-16 grid grid-cols-2 gap-8 border-t border-zinc-800/50 pt-10 md:grid-cols-4 lg:mx-auto lg:max-w-4xl text-center relative z-10">
<div>
<div className="text-4xl font-semibold tracking-tight text-white">২০০০+</div>
<div className="mt-1 text-xs font-medium text-zinc-500 uppercase tracking-widest">সক্রিয় সদস্য</div>
</div>
<div>
<div className="text-4xl font-semibold tracking-tight text-white">৫০+</div>
<div className="mt-1 text-xs font-medium text-zinc-500 uppercase tracking-widest">বিশেষজ্ঞ ট্রেইনার</div>
</div>
<div>
<div className="text-4xl font-semibold tracking-tight text-white">১০০+</div>
<div className="mt-1 text-xs font-medium text-zinc-500 uppercase tracking-widest">আধুনিক মেশিন</div>
</div>
<div>
<div className="text-4xl font-semibold tracking-tight text-white">২৪/৭</div>
<div className="mt-1 text-xs font-medium text-zinc-500 uppercase tracking-widest">খোলা থাকে</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-950" id="features">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mb-16 max-w-2xl">
<h2 className="text-base font-medium text-emerald-400">সুবিধাসমূহ</h2>
<p className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">কেন আমাদের বেছে নেবেন?</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:bg-zinc-900 hover:border-zinc-700">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800/50 text-white group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-colors">
<iconify-icon className="text-2xl" icon="solar:dumbbell-linear"></iconify-icon>
</div>
<h3 className="mb-3 text-lg font-medium text-white tracking-tight">আধুনিক সরঞ্জাম</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            বিশ্বমানের টেকনোজিম এবং ম্যাট্রিক্স মেশিন দিয়ে সাজানো আমাদের জিম ফ্লোর, যা আপনার ওয়ার্কআউটকে করবে আরও কার্যকর।
                        </p>
</div>

<div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:bg-zinc-900 hover:border-zinc-700">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800/50 text-white group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-colors">
<iconify-icon className="text-2xl" icon="solar:user-speak-linear"></iconify-icon>
</div>
<h3 className="mb-3 text-lg font-medium text-white tracking-tight">ব্যক্তিগত গাইডেন্স</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            সার্টিফাইড পার্সোনাল ট্রেইনাররা আপনার শারীরিক গঠন ও লক্ষ্য অনুযায়ী কাস্টমাইজড ডায়েট এবং ওয়ার্কআউট প্ল্যান তৈরি করে দেবেন।
                        </p>
</div>

<div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:bg-zinc-900 hover:border-zinc-700">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800/50 text-white group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-colors">
<iconify-icon className="text-2xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<h3 className="mb-3 text-lg font-medium text-white tracking-tight">পরিচ্ছন্ন পরিবেশ</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            সম্পূর্ণ শীতাতপ নিয়ন্ত্রিত, স্বাস্থ্যসম্মত এবং সুরক্ষিত পরিবেশ যেখানে আপনি নিশ্চিন্তে আপনার ফিটনেস চর্চা করতে পারবেন।
                        </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-900/20 border-y border-zinc-800/50" id="schedule">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div>
<h2 className="text-base font-medium text-emerald-400">শিডিউল</h2>
<p className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">আজকের ক্লাসসমূহ</p>
</div>

<div className="inline-flex rounded-full border border-zinc-800 bg-zinc-900/50 p-1">
<button className="rounded-full bg-zinc-800 px-6 py-2 text-sm font-medium text-white shadow-sm transition-all" id="tab-today" onclick="switchTab('today')">আজ</button>
<button className="rounded-full px-6 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-all" id="tab-tomorrow" onclick="switchTab('tomorrow')">আগামীকাল</button>
</div>
</div>

<div className="rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden">

<div className="divide-y divide-zinc-800/50" id="content-today">

<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 hover:bg-zinc-900/50 transition-colors gap-4">
<div className="flex items-center gap-6 w-full sm:w-auto">
<div className="text-center min-w-[80px]">
<div className="text-lg font-semibold text-white">০৭:০০</div>
<div className="text-xs text-zinc-500">সকাল</div>
</div>
<div>
<h4 className="text-base font-medium text-white tracking-tight">যোগব্যায়াম (Yoga)</h4>
<div className="mt-2 flex items-center gap-2 text-xs font-medium text-zinc-400">
<img alt="Trainer" className="h-5 w-5 rounded-full object-cover border border-zinc-800" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
                                        রাফসান আহমেদ
                                    </div>
</div>
</div>
<button className="w-full sm:w-auto rounded-full border border-zinc-700 bg-transparent px-4 py-2 text-xs font-medium text-white hover:bg-white hover:text-black transition-colors">
                                বুক করুন
                            </button>
</div>

<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 hover:bg-zinc-900/50 transition-colors gap-4">
<div className="flex items-center gap-6 w-full sm:w-auto">
<div className="text-center min-w-[80px]">
<div className="text-lg font-semibold text-white">১৭:৩০</div>
<div className="text-xs text-zinc-500">বিকেল</div>
</div>
<div>
<h4 className="text-base font-medium text-white tracking-tight">হাই ইনটেনসিটি (HIIT)</h4>
<div className="mt-2 flex items-center gap-2 text-xs font-medium text-zinc-400">
<img alt="Trainer" className="h-5 w-5 rounded-full object-cover border border-zinc-800" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
                                        সাদিয়া ইসলাম
                                    </div>
</div>
</div>
<button className="w-full sm:w-auto rounded-full border border-zinc-700 bg-transparent px-4 py-2 text-xs font-medium text-white hover:bg-white hover:text-black transition-colors">
                                বুক করুন
                            </button>
</div>

<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 hover:bg-zinc-900/50 transition-colors gap-4">
<div className="flex items-center gap-6 w-full sm:w-auto">
<div className="text-center min-w-[80px]">
<div className="text-lg font-semibold text-white">১৯:০০</div>
<div className="text-xs text-zinc-500">সন্ধ্যা</div>
</div>
<div>
<h4 className="text-base font-medium text-white tracking-tight">ভারোত্তোলন (Weightlifting)</h4>
<div className="mt-2 flex items-center gap-2 text-xs font-medium text-zinc-400">
<img alt="Trainer" className="h-5 w-5 rounded-full object-cover border border-zinc-800" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
                                        কামরুল হাসান
                                    </div>
</div>
</div>
<button className="w-full sm:w-auto rounded-full border border-zinc-700 bg-transparent px-4 py-2 text-xs font-medium text-white hover:bg-white hover:text-black transition-colors">
                                বুক করুন
                            </button>
</div>
</div>

<div className="hidden divide-y divide-zinc-800/50" id="content-tomorrow">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 hover:bg-zinc-900/50 transition-colors gap-4">
<div className="flex items-center gap-6 w-full sm:w-auto">
<div className="text-center min-w-[80px]">
<div className="text-lg font-semibold text-white">০৬:৩০</div>
<div className="text-xs text-zinc-500">সকাল</div>
</div>
<div>
<h4 className="text-base font-medium text-white tracking-tight">কার্ডিও ব্লাস্ট</h4>
<div className="mt-2 flex items-center gap-2 text-xs font-medium text-zinc-400">
<img alt="Trainer" className="h-5 w-5 rounded-full object-cover border border-zinc-800" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
                                        সাদিয়া ইসলাম
                                    </div>
</div>
</div>
<button className="w-full sm:w-auto rounded-full border border-zinc-700 bg-transparent px-4 py-2 text-xs font-medium text-white hover:bg-white hover:text-black transition-colors">
                                বুক করুন
                            </button>
</div>
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 hover:bg-zinc-900/50 transition-colors gap-4">
<div className="flex items-center gap-6 w-full sm:w-auto">
<div className="text-center min-w-[80px]">
<div className="text-lg font-semibold text-white">১৮:০০</div>
<div className="text-xs text-zinc-500">সন্ধ্যা</div>
</div>
<div>
<h4 className="text-base font-medium text-white tracking-tight">জুম্বা ড্যান্স</h4>
<div className="mt-2 flex items-center gap-2 text-xs font-medium text-zinc-400">
<img alt="Trainer" className="h-5 w-5 rounded-full object-cover border border-zinc-800" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
                                        ফারহানা আক্তার
                                    </div>
</div>
</div>
<button className="w-full sm:w-auto rounded-full border border-zinc-700 bg-transparent px-4 py-2 text-xs font-medium text-white hover:bg-white hover:text-black transition-colors">
                                বুক করুন
                            </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-950" id="pricing">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-base font-medium text-emerald-400">প্যাকেজ</h2>
<p className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">সবার জন্য সাশ্রয়ী প্ল্যান</p>

<div className="mt-8 flex items-center justify-center gap-3">
<span className="text-sm font-medium text-zinc-400" id="monthly-label">মাসিক</span>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-transform duration-200 ease-in-out z-10" id="billing-toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-zinc-700 cursor-pointer transition-colors duration-200 ease-in-out" htmlFor="billing-toggle"></label>
</div>
<span className="text-sm font-medium text-white" id="yearly-label">বার্ষিক <span className="text-emerald-400 text-xs ml-1">(২০% ছাড়)</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

<div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8">
<h3 className="text-lg font-medium text-white tracking-tight">বেসিক</h3>
<p className="mt-2 text-sm text-zinc-400">নতুনদের জন্য উপযুক্ত।</p>
<div className="mt-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-white price-display" data-monthly="১৫০০" data-yearly="১৪৪০০">১৫০০</span>
<span className="text-sm font-medium text-zinc-500">৳ / মাস</span>
</div>
<ul className="mt-8 space-y-3 text-sm text-zinc-300">
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                সাধারণ মেশিন ব্যবহার
                            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                লকার সুবিধা
                            </li>
<li className="flex items-center gap-3 text-zinc-600">
<iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon>
                                গ্রুপ ক্লাস
                            </li>
<li className="flex items-center gap-3 text-zinc-600">
<iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon>
                                ব্যক্তিগত ট্রেইনার
                            </li>
</ul>
<button className="mt-8 w-full rounded-full border border-zinc-700 bg-transparent py-2.5 text-sm font-medium text-white hover:bg-zinc-800 transition-colors">
                            শুরু করুন
                        </button>
</div>

<div className="relative rounded-3xl border border-emerald-500/30 bg-zinc-900 p-8 shadow-2xl shadow-emerald-500/5 md:scale-105 z-10">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-xs font-medium text-emerald-950">
                            সবচেয়ে জনপ্রিয়
                        </div>
<h3 className="text-lg font-medium text-white tracking-tight">প্রো</h3>
<p className="mt-2 text-sm text-zinc-400">নিয়মিত ব্যায়ামকারীদের জন্য।</p>
<div className="mt-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-white price-display" data-monthly="২৫০০" data-yearly="২৪০০০">২৫০০</span>
<span className="text-sm font-medium text-zinc-500">৳ / মাস</span>
</div>
<ul className="mt-8 space-y-3 text-sm text-zinc-300">
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                সকল মেশিন ব্যবহার
                            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                প্রিমিয়াম লকার ও শাওয়ার
                            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                সকল গ্রুপ ক্লাস ফ্রি
                            </li>
<li className="flex items-center gap-3 text-zinc-600">
<iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon>
                                ব্যক্তিগত ট্রেইনার
                            </li>
</ul>
<button className="mt-8 w-full rounded-full bg-white py-2.5 text-sm font-medium text-zinc-950 hover:bg-zinc-200 transition-colors">
                            সাবস্ক্রাইব করুন
                        </button>
</div>

<div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8">
<h3 className="text-lg font-medium text-white tracking-tight">এলিট</h3>
<p className="mt-2 text-sm text-zinc-400">সর্বোচ্চ ফলাফলের জন্য।</p>
<div className="mt-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-white price-display" data-monthly="৫০০০" data-yearly="৪৮০০০">৫০০০</span>
<span className="text-sm font-medium text-zinc-500">৳ / মাস</span>
</div>
<ul className="mt-8 space-y-3 text-sm text-zinc-300">
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                সকল সুবিধা অন্তর্ভুক্ত
                            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                ফ্রি সাপ্লিমেন্ট ড্রিংকস
                            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                ডায়েট চার্ট তৈরি
                            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                ব্যক্তিগত ট্রেইনার (সপ্তাহে ৩ দিন)
                            </li>
</ul>
<button className="mt-8 w-full rounded-full border border-zinc-700 bg-transparent py-2.5 text-sm font-medium text-white hover:bg-zinc-800 transition-colors">
                            শুরু করুন
                        </button>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-800/50 bg-zinc-950 py-12 text-sm text-zinc-400">
<div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<span className="text-lg font-semibold tracking-tight text-white uppercase">ফিট</span>
</div>
<p className="mb-4">আপনার ফিটনেস যাত্রার বিশ্বস্ত সঙ্গী। স্বাস্থ্যকর জীবনের জন্য আজই যুক্ত হোন।</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:facebook-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">লিঙ্কসমূহ</h4>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#">আমাদের সম্পর্কে</a></li>
<li><a className="hover:text-white transition-colors" href="#">ট্রেইনার প্যানেল</a></li>
<li><a className="hover:text-white transition-colors" href="#">সাফল্যের গল্প</a></li>
<li><a className="hover:text-white transition-colors" href="#">ক্যারিয়ার</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">সাহায্য</h4>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#">সচরাচর জিজ্ঞাসা (FAQ)</a></li>
<li><a className="hover:text-white transition-colors" href="#">শর্তাবলী</a></li>
<li><a className="hover:text-white transition-colors" href="#">প্রাইভেসি পলিসি</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">যোগাযোগ</h4>
<ul className="space-y-3">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-lg" icon="solar:map-point-linear"></iconify-icon>
<span>১২৩, ফিটনেস এভিনিউ, ধানমন্ডি, ঢাকা ১২০৯</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
<span>+৮৮০ ১২৩৪-৫৬৭৮৯০</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
<span>hello@fitgym.com.bd</span>
</li>
</ul>
</div>
</div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
<p>© ২০২৪ ফিটনেস সেন্টার। সর্বস্বত্ব সংরক্ষিত।</p>
</div>
</footer>



    </>
  );
}
