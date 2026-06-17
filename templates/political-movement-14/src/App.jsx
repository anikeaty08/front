import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function openSurvey() {
            document.getElementById('main-view').classList.add('hidden');
            document.getElementById('survey-view').classList.remove('hidden');
            window.scrollTo(0, 0);
        }

        function closeSurvey() {
            document.getElementById('survey-view').classList.add('hidden');
            document.getElementById('main-view').classList.remove('hidden');
            window.scrollTo(0, 0);
        }

        document.getElementById('surveyForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const requiredGroups = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'];
            const missing = requiredGroups.filter(name => {
                return !document.querySelector(`input[name="${name}"]:checked`);
            });

            if (missing.length > 0) {
                alert('Please answer all 6 questions before submitting.');
                return;
            }

            const btn = document.getElementById('submit-btn');
            const originalContent = btn.innerHTML;

            btn.disabled = true;
            btn.innerHTML = '<iconify-icon icon="solar:check-circle-linear" class="text-xl"></iconify-icon> Submitted Successfully!';
            btn.classList.remove('bg-zinc-900', 'hover:bg-zinc-800');
            btn.classList.add('bg-emerald-600');

            setTimeout(() => {
                this.reset();

                btn.innerHTML = originalContent;
                btn.classList.add('bg-zinc-900', 'hover:bg-zinc-800');
                btn.classList.remove('bg-emerald-600');
                btn.disabled = false;

                alert('Thank you! Your response has been submitted.');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 1500);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="" id="main-view">

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 text-xl font-semibold tracking-tight" href="#home">
                    The Feminist Party
                    <iconify-icon className="text-pink-500 text-xl" icon="solar:stars-linear"></iconify-icon>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#about">About</a>
<a className="hover:text-zinc-900 transition-colors" href="#platform">Platform</a>
<a className="hover:text-zinc-900 transition-colors" href="#ads">Campaign Ads</a>
<a className="hover:text-zinc-900 transition-colors" href="#candidates">Candidates</a>
</div>
<button className="text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors" onclick="openSurvey()">
                    Take the Poll
                </button>
</div>
</nav>

<section className="sm:pt-32 sm:pb-24 overflow-hidden pt-24 pr-6 pb-16 pl-6" id="home">
<div className="flex flex-col text-center max-w-4xl mr-auto ml-auto items-center">
<div className="inline-flex ring-inset text-sm font-medium text-pink-600 bg-pink-50 rounded-full ring-pink-500/20 ring-1 mb-8 pt-2 pr-5 pb-2 pl-5 shadow-sm items-center">"Your body, your choice."</div>
<div className="aspect-[3/2] overflow-hidden w-full max-w-2xl border border-zinc-100 rounded-3xl mb-12 relative shadow-sm">
<img alt="Hero representation" className="w-full h-full object-cover" src="https://i.imgur.com/4rCpI2R.png"/>
</div>
<h1 className="sm:text-6xl md:text-7xl leading-[1.05] text-5xl font-extrabold text-pink-600 tracking-tight font-serif text-center mb-6">
                    The Feminist Party
                </h1>
<p className="sm:text-3xl text-2xl font-medium text-pink-500 tracking-tight mb-6">
                    Equality, finally.
                </p>
<p className="text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed">
                    A movement dedicated to making life safer, healthier, and more equitable for everyone by addressing the systemic burdens women face daily.
                </p>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50 border-y border-zinc-100" id="about">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-8 flex items-center gap-3">
<iconify-icon className="text-zinc-400 text-2xl" icon="solar:info-circle-linear"></iconify-icon>
                    About Us
                </h2>
<p className="text-lg text-zinc-600 leading-relaxed">
                    We, The Feminist Party, believe government should actively remove the unfair burdens women face in everyday life. Our platform prioritizes women's health, economic fairness, and personal safety, while promoting equality in schools, workplaces, and public spaces. We believe modern society has the resources to solve issues that disproportionately affect women, and our policies aim to make life safer, healthier, and more equitable for everyone.
                </p>
</div>
</section>

<section className="py-24 px-6" id="platform">
<div className="max-w-3xl mx-auto">
<div className="mb-16">
<h2 className="text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Our Platform</h2>
<p className="text-lg text-zinc-500">Real policies for real problems. No summaries, just the full plan.</p>
</div>
<div className="space-y-16">

<div className="relative pl-8 md:pl-0">
<div className="hidden md:flex absolute -left-12 top-1 w-8 h-8 bg-pink-100 text-pink-600 rounded-full items-center justify-center font-medium text-sm">1</div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-4 flex items-center gap-3">
<iconify-icon className="text-pink-500 text-2xl md:hidden" icon="solar:box-minimalistic-linear"></iconify-icon>
                            Free Tampons &amp; Pads Everywhere
                        </h3>
<p className="text-lg text-zinc-600 leading-relaxed">
                            The Feminist Party proposes a Menstrual Equity Act, requiring all public schools, colleges, workplaces, and government buildings to provide free menstrual products in restrooms. Just as toilet paper and soap are considered necessities, tampons and pads should be treated the same way. Funding would come from public health budgets and local school allocations. This policy reduces missed class time, workplace discomfort, and the financial burden placed on women and families.
                        </p>
</div>

<div className="relative pl-8 md:pl-0">
<div className="hidden md:flex absolute -left-12 top-1 w-8 h-8 bg-pink-100 text-pink-600 rounded-full items-center justify-center font-medium text-sm">2</div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-4 flex items-center gap-3">
<iconify-icon className="text-pink-500 text-2xl md:hidden" icon="solar:heart-pulse-linear"></iconify-icon>
                            No More Period Cramps
                        </h3>
<p className="text-lg text-zinc-600 leading-relaxed mb-6">
                            Our party proposes increased federal funding for women's health research, specifically targeting menstrual pain, hormonal disorders, and reproductive health conditions. For decades, women's pain has been under-researched compared to other health issues. By investing in medical innovation, grants, and pharmaceutical research, our goal is to develop better treatments and long-term solutions so women no longer have to suffer through severe cramps, migraines, and fatigue every month.
                        </p>
<blockquote className="border-l-2 border-pink-500 pl-5 py-2 text-lg text-zinc-500 italic font-medium">
                            "In the 21st century, no woman should still be losing battles to biology every month."
                        </blockquote>
</div>

<div className="relative pl-8 md:pl-0">
<div className="hidden md:flex absolute -left-12 top-1 w-8 h-8 bg-pink-100 text-pink-600 rounded-full items-center justify-center font-medium text-sm">3</div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-4 flex items-center gap-3">
<iconify-icon className="text-pink-500 text-2xl md:hidden" icon="solar:tag-linear"></iconify-icon>
                            Pink Tax Ban
                        </h3>
<p className="text-lg text-zinc-600 leading-relaxed">
                            The Feminist Party supports a Pink Tax Elimination Law, making it illegal for companies to charge higher prices for products marketed toward women when they are functionally identical to men's products. This includes razors, shampoo, deodorant, clothing basics, and hygiene items. Government consumer protection agencies would monitor price discrimination and fine companies that violate the law. This policy ensures women are not unfairly charged extra simply because of gendered branding.
                        </p>
</div>

<div className="relative pl-8 md:pl-0">
<div className="hidden md:flex absolute -left-12 top-1 w-8 h-8 bg-pink-100 text-pink-600 rounded-full items-center justify-center font-medium text-sm">4</div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-4 flex items-center gap-3">
<iconify-icon className="text-pink-500 text-2xl md:hidden" icon="solar:calendar-linear"></iconify-icon>
                            Paid Period Leave
                        </h3>
<p className="text-lg text-zinc-600 leading-relaxed">
                            We support a Women's Workplace Wellness Policy that grants workers 1–2 excused paid health days per month for severe menstrual symptoms, including cramps, migraines, nausea, or exhaustion. This policy protects employees from being penalized for health issues outside of their control and promotes a healthier, more productive work environment. Employers would treat these days similarly to sick leave while protecting employee privacy.
                        </p>
</div>

<div className="relative pl-8 md:pl-0">
<div className="hidden md:flex absolute -left-12 top-1 w-8 h-8 bg-pink-100 text-pink-600 rounded-full items-center justify-center font-medium text-sm">5</div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-4 flex items-center gap-3">
<iconify-icon className="text-pink-500 text-2xl md:hidden" icon="solar:shield-check-linear"></iconify-icon>
                            Women's Safety Everywhere
                        </h3>
<p className="text-lg text-zinc-600 leading-relaxed">
                            The Feminist Party proposes a national Safe Spaces Initiative focused on improving public safety for women. This includes better street and campus lighting, security cameras in high-risk areas, safer parking lots, stricter harassment penalties, and free nighttime ride services for students and workers. The goal is to reduce fear, harassment, and violence while making women feel safer in schools, cities, and workplaces.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-100 bg-zinc-50" id="ads">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-12">Campaign Ad</h2>
<div className="max-w-2xl">

<div className="group rounded-2xl border border-zinc-200 bg-white overflow-hidden hover:border-zinc-300 transition-colors shadow-sm">
<div className="aspect-video bg-zinc-100 relative overflow-hidden">
<iframe allow="autoplay" className="w-full h-full" src="https://drive.google.com/file/d/1qZInMbU9l8MT8yqM5SVAOryk2uOiNjYa/preview">
</iframe>
</div>
<div className="p-6">
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2">Campaign Ad: “Wait… People Oppose This?”</h3>
<ul className="text-lg text-zinc-500 space-y-1">
<li className="flex items-start gap-2">
<span className="text-pink-500 mt-1">•</span>
                                    Students react to anti-feminism
                                </li>
<li className="flex items-start gap-2">
<span className="text-pink-500 mt-1">•</span>
                                    Message: equality is basic human rights
                                </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-zinc-100 border-t pt-24 pr-6 pb-24 pl-6" id="candidates">
<div className="max-w-6xl mr-auto ml-auto">
<h2 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-12 text-center md:text-left">Meet the Candidates</h2>

<div className="flex overflow-x-scroll no-scrollbar snap-x snap-proximity -mx-6 sm:mx-0 sm:px-0 pr-6 pb-8 pl-6 gap-x-8 gap-y-8">

<div className="shrink-0 flex flex-col snap-start text-center w-48 items-center">
<img alt="Adam" className="w-48 h-48 object-cover border-zinc-200 border rounded-2xl shadow-sm" src="https://i.imgur.com/tOp1WdO.jpeg"/>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mt-4">Adam</h3>
</div>

<div className="w-48 shrink-0 flex flex-col items-center text-center snap-start">
<img alt="Manav" className="w-48 h-48 rounded-2xl object-cover shadow-sm border border-zinc-200" src="https://i.imgur.com/eSraS14.jpeg"/>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mt-4">Manav</h3>
</div>

<div className="w-48 shrink-0 flex flex-col items-center text-center snap-start">
<img alt="Yusof" className="w-48 h-48 rounded-2xl object-cover shadow-sm border border-zinc-200" src="https://i.imgur.com/nJUXIoT.jpeg"/>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mt-4">Yusof</h3>
</div>

<div className="w-48 shrink-0 flex flex-col items-center text-center snap-start">
<div className="overflow-hidden flex text-zinc-400 bg-zinc-100 w-48 h-48 border-zinc-200 border rounded-2xl mb-4 shadow-sm items-center justify-center">
<img alt="User" className="w-full h-full object-cover" src="https://i.imgur.com/Uy9Rd4q.jpeg"/>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900">Mo</h3>
</div>

<div className="w-48 shrink-0 flex flex-col items-center text-center snap-start">
<div className="overflow-hidden flex bg-zinc-100 w-48 h-48 border-zinc-200 border rounded-2xl mb-4 shadow-sm items-center justify-center">
<img alt="Candidate" className="w-full h-full object-cover rounded-2xl" src="https://i.imgur.com/ZaNRe68.jpeg"/>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900">Mokham</h3>
</div>
</div>
</div>
</section>

<section className="text-white text-center bg-zinc-900 pt-24 pr-6 pb-24 pl-6" id="poll-cta">
<div className="max-w-2xl mx-auto">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Your Voice Matters</h2>
<p className="text-lg text-zinc-400 mb-8">Share your opinion on key issues affecting women today. Your feedback shapes our movement.</p>
<button className="inline-flex gap-2 hover:bg-zinc-100 transition-colors font-medium text-zinc-900 bg-white rounded-full pt-4 pr-8 pb-4 pl-8 gap-x-2 gap-y-2 items-center" onclick="openSurvey()">
                    Take the Survey
                    <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</section>

<footer className="text-sm bg-white border-zinc-100 border-t py-12 px-6 flex flex-col items-center gap-6">
<a className="inline-flex items-center gap-2 text-zinc-600 font-medium hover:text-zinc-900 transition-all border border-zinc-200 rounded-full px-5 py-2 hover:border-zinc-300 hover:bg-zinc-50 shadow-sm" href="https://instagram.com/wscafeministparty" rel="noopener noreferrer" target="_blank">
                Follow us on Instagram @wscafeministparty
                <iconify-icon className="text-lg text-zinc-400" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
<p className="text-zinc-400 text-center">© The Feminist Party. All rights reserved.</p>
</footer>
</div>

<div className="hidden min-h-screen bg-zinc-50 pb-24" id="survey-view">

<div className="bg-white border-b border-zinc-100 sticky top-0 z-50">
<div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
<button className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" onclick="closeSurvey()">
<iconify-icon className="text-lg" icon="solar:arrow-left-linear"></iconify-icon>
                    Back to Home
                </button>
<span className="text-sm font-medium text-zinc-900 tracking-tight">Public Opinion Poll</span>
<div className="w-[100px]"></div>
</div>
</div>

<section className="pt-16 pr-6 pl-6" id="poll-form-container">
<div className="max-w-3xl mx-auto">
<div className="mb-10 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-3">Shape the Future</h2>
<p className="text-lg text-zinc-500">Your anonymous feedback helps us prioritize our platform.</p>
</div>
<form className="space-y-12 bg-white border border-zinc-200 p-8 sm:p-12 rounded-[2rem] shadow-sm" id="surveyForm" novalidate="">

<fieldset className="space-y-5">
<legend className="text-lg font-medium text-zinc-900 mb-4 leading-snug">1. How strongly do you agree that menstrual products should be provided for free in all public schools and workplaces?</legend>
<div className="space-y-3">
<label className="group flex items-center gap-4 p-4 border border-zinc-200 rounded-xl cursor-pointer hover:bg-zinc-50 transition-all has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50/50">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" name="q1" type="radio" value="Strongly Agree"/>
<div className="w-5 h-5 rounded-full border-2 border-zinc-300 peer-checked:border-pink-500 peer-checked:bg-pink-500 transition-colors"></div>
<div className="absolute w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-base text-zinc-700 font-medium group-hover:text-zinc-900 group-has-[:checked]:text-zinc-900">Strongly Agree</span>
</label>
<label className="group flex items-center gap-4 p-4 border border-zinc-200 rounded-xl cursor-pointer hover:bg-zinc-50 transition-all has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50/50">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" name="q1" type="radio" value="Somewhat Agree"/>
<div className="w-5 h-5 rounded-full border-2 border-zinc-300 peer-checked:border-pink-500 peer-checked:bg-pink-500 transition-colors"></div>
<div className="absolute w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-base text-zinc-700 font-medium group-hover:text-zinc-900 group-has-[:checked]:text-zinc-900">Somewhat Agree</span>
</label>
<label className="group flex items-center gap-4 p-4 border border-zinc-200 rounded-xl cursor-pointer hover:bg-zinc-50 transition-all has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50/50">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" name="q1" type="radio" value="Disagree"/>
<div className="w-5 h-5 rounded-full border-2 border-zinc-300 peer-checked:border-pink-500 peer-checked:bg-pink-500 transition-colors"></div>
<div className="absolute w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-base text-zinc-700 font-medium group-hover:text-zinc-900 group-has-[:checked]:text-zinc-900">Disagree</span>
</label>
<label className="group flex items-center gap-4 p-4 border border-zinc-200 rounded-xl cursor-pointer hover:bg-zinc-50 transition-all has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50/50">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" name="q1" type="radio" value="Strongly Disagree"/>
<div className="w-5 h-5 rounded-full border-2 border-zinc-300 peer-checked:border-pink-500 peer-checked:bg-pink-500 transition-colors"></div>
<div className="absolute w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-base text-zinc-700 font-medium group-hover:text-zinc-900 group-has-[:checked]:text-zinc-900">Strongly Disagree</span>
</label>
</div>
</fieldset>

<fieldset className="space-y-5">
<legend className="text-lg font-medium text-zinc-900 mb-4 leading-snug">2. What is your opinion on companies charging different prices for similar products marketed to different genders?</legend>
<div className="space-y-3">
<label className="group flex items-center gap-4 p-4 border border-zinc-200 rounded-xl cursor-pointer hover:bg-zinc-50 transition-all has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50/50">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" name="q2" type="radio" value="Unfair and illegal"/>
<div className="w-5 h-5 rounded-full border-2 border-zinc-300 peer-checked:border-pink-500 peer-checked:bg-pink-500 transition-colors"></div>
<div className="absolute w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-base text-zinc-700 font-medium group-hover:text-zinc-900 group-has-[:checked]:text-zinc-900">It is unfair and should be illegal</span>
</label>
<label className="group flex items-center gap-4 p-4 border border-zinc-200 rounded-xl cursor-pointer hover:bg-zinc-50 transition-all has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50/50">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" name="q2" type="radio" value="Sometimes justified"/>
<div className="w-5 h-5 rounded-full border-2 border-zinc-300 peer-checked:border-pink-500 peer-checked:bg-pink-500 transition-colors"></div>
<div className="absolute w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-base text-zinc-700 font-medium group-hover:text-zinc-900 group-has-[:checked]:text-zinc-900">It is sometimes justified</span>
</label>
<label className="group flex items-center gap-4 p-4 border border-zinc-200 rounded-xl cursor-pointer hover:bg-zinc-50 transition-all has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50/50">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" name="q2" type="radio" value="Not a real issue"/>
<div className="w-5 h-5 rounded-full border-2 border-zinc-300 peer-checked:border-pink-500 peer-checked:bg-pink-500 transition-colors"></div>
<div className="absolute w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-base text-zinc-700 font-medium group-hover:text-zinc-900 group-has-[:checked]:text-zinc-900">It is not a real issue</span>
</label>
<label className="group flex items-center gap-4 p-4 border border-zinc-200 rounded-xl cursor-pointer hover:bg-zinc-50 transition-all has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50/50">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" name="q2" type="radio" value="Not sure"/>
<div className="w-5 h-5 rounded-full border-2 border-zinc-300 peer-checked:border-pink-500 peer-checked:bg-pink-500 transition-colors"></div>
<div className="absolute w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-base text-zinc-700 font-medium group-hover:text-zinc-900 group-has-[:checked]:text-zinc-900">Not sure</span>
</label>
</div>
</fieldset>

<fieldset className="space-y-5">
<legend className="text-lg font-medium text-zinc-900 mb-4 leading-snug">3. Do you support the idea of paid medical leave for severe menstrual symptoms?</legend>
<div className="space-y-3">
<label className="group flex items-center gap-4 p-4 border border-zinc-200 rounded-xl cursor-pointer hover:bg-zinc-50 transition-all has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50/50">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" name="q3" type="radio" value="Fully support"/>
<div className="w-5 h-5 rounded-full border-2 border-zinc-300 peer-checked:border-pink-500 peer-checked:bg-pink-500 transition-colors"></div>
<div className="absolute w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-base text-zinc-700 font-medium group-hover:text-zinc-900 group-has-[:checked]:text-zinc-900">Yes, fully support it</span>
</label>
<label className="group flex items-center gap-4 p-4 border border-zinc-200 rounded-xl cursor-pointer hover:bg-zinc-50 transition-all has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50/50">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" name="q3" type="radio" value="Support with limits"/>
<div className="w-5 h-5 rounded-full border-2 border-zinc-300 peer-checked:border-pink-500 peer-checked:bg-pink-500 transition-colors"></div>
<div className="absolute w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-base text-zinc-700 font-medium group-hover:text-zinc-900 group-has-[:checked]:text-zinc-900">Support it with limits (e.g., a few days per year)</span>
</label>
<label className="group flex items-center gap-4 p-4 border border-zinc-200 rounded-xl cursor-pointer hover:bg-zinc-50 transition-all has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50/50">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" name="q3" type="radio" value="Do not support"/>
<div className="w-5 h-5 rounded-full border-2 border-zinc-300 peer-checked:border-pink-500 peer-checked:bg-pink-500 transition-colors"></div>
<div className="absolute w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-base text-zinc-700 font-medium group-hover:text-zinc-900 group-has-[:checked]:text-zinc-900">Do not support it</span>
</label>
<label className="group flex items-center gap-4 p-4 border border-zinc-200 rounded-xl cursor-pointer hover:bg-zinc-50 transition-all has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50/50">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" name="q3" type="radio" value="Not sure"/>
<div className="w-5 h-5 rounded-full border-2 border-zinc-300 peer-checked:border-pink-500 peer-checked:bg-pink-500 transition-colors"></div>
<div className="absolute w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-base text-zinc-700 font-medium group-hover:text-zinc-900 group-has-[:checked]:text-zinc-900">Not sure</span>
</label>
</div>
</fieldset>

<fieldset className="space-y-5">
<legend className="text-lg font-medium text-zinc-900 mb-4 leading-snug">4. How would you rate the current level of government funding for women’s health research?</legend>
<div className="space-y-3">
<label className="group flex items-center gap-4 p-4 border border-zinc-200 rounded-xl cursor-pointer hover:bg-zinc-50 transition-all has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50/50">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" name="q4" type="radio" value="Severely underfunded"/>
<div className="w-5 h-5 rounded-full border-2 border-zinc-300 peer-checked:border-pink-500 peer-checked:bg-pink-500 transition-colors"></div>
<div className="absolute w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-base text-zinc-700 font-medium group-hover:text-zinc-900 group-has-[:checked]:text-zinc-900">Severely underfunded</span>
</label>
<label className="group flex items-center gap-4 p-4 border border-zinc-200 rounded-xl cursor-pointer hover:bg-zinc-50 transition-all has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50/50">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" name="q4" type="radio" value="Slightly underfunded"/>
<div className="w-5 h-5 rounded-full border-2 border-zinc-300 peer-checked:border-pink-500 peer-checked:bg-pink-500 transition-colors"></div>
<div className="absolute w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-base text-zinc-700 font-medium group-hover:text-zinc-900 group-has-[:checked]:text-zinc-900">Slightly underfunded</span>
</label>
<label className="group flex items-center gap-4 p-4 border border-zinc-200 rounded-xl cursor-pointer hover:bg-zinc-50 transition-all has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50/50">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" name="q4" type="radio" value="About right"/>
<div className="w-5 h-5 rounded-full border-2 border-zinc-300 peer-checked:border-pink-500 peer-checked:bg-pink-500 transition-colors"></div>
<div className="absolute w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-base text-zinc-700 font-medium group-hover:text-zinc-900 group-has-[:checked]:text-zinc-900">About right</span>
</label>
<label className="group flex items-center gap-4 p-4 border border-zinc-200 rounded-xl cursor-pointer hover:bg-zinc-50 transition-all has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50/50">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" name="q4" type="radio" value="Overfunded"/>
<div className="w-5 h-5 rounded-full border-2 border-zinc-300 peer-checked:border-pink-500 peer-checked:bg-pink-500 transition-colors"></div>
<div className="absolute w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-base text-zinc-700 font-medium group-hover:text-zinc-900 group-has-[:checked]:text-zinc-900">Overfunded</span>
</label>
</div>
</fieldset>

<fieldset className="space-y-5">
<legend className="text-lg font-medium text-zinc-900 mb-4 leading-snug">5. Which issue should be the highest priority for the government?</legend>
<div className="space-y-3">
<label className="group flex items-center gap-4 p-4 border border-zinc-200 rounded-xl cursor-pointer hover:bg-zinc-50 transition-all has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50/50">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" name="q5" type="radio" value="Health care"/>
<div className="w-5 h-5 rounded-full border-2 border-zinc-300 peer-checked:border-pink-500 peer-checked:bg-pink-500 transition-colors"></div>
<div className="absolute w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-base text-zinc-700 font-medium group-hover:text-zinc-900 group-has-[:checked]:text-zinc-900">Women’s health care</span>
</label>
<label className="group flex items-center gap-4 p-4 border border-zinc-200 rounded-xl cursor-pointer hover:bg-zinc-50 transition-all has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50/50">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" name="q5" type="radio" value="Workplace equality"/>
<div className="w-5 h-5 rounded-full border-2 border-zinc-300 peer-checked:border-pink-500 peer-checked:bg-pink-500 transition-colors"></div>
<div className="absolute w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-base text-zinc-700 font-medium group-hover:text-zinc-900 group-has-[:checked]:text-zinc-900">Workplace equality</span>
</label>
<label className="group flex items-center gap-4 p-4 border border-zinc-200 rounded-xl cursor-pointer hover:bg-zinc-50 transition-all has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50/50">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" name="q5" type="radio" value="Cost of living"/>
<div className="w-5 h-5 rounded-full border-2 border-zinc-300 peer-checked:border-pink-500 peer-checked:bg-pink-500 transition-colors"></div>
<div className="absolute w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-base text-zinc-700 font-medium group-hover:text-zinc-900 group-has-[:checked]:text-zinc-900">Cost of living / economic fairness</span>
</label>
<label className="group flex items-center gap-4 p-4 border border-zinc-200 rounded-xl cursor-pointer hover:bg-zinc-50 transition-all has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50/50">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" name="q5" type="radio" value="Public safety"/>
<div className="w-5 h-5 rounded-full border-2 border-zinc-300 peer-checked:border-pink-500 peer-checked:bg-pink-500 transition-colors"></div>
<div className="absolute w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-base text-zinc-700 font-medium group-hover:text-zinc-900 group-has-[:checked]:text-zinc-900">Public safety</span>
</label>
<label className="group flex items-center gap-4 p-4 border border-zinc-200 rounded-xl cursor-pointer hover:bg-zinc-50 transition-all has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50/50">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" name="q5" type="radio" value="All equally important"/>
<div className="w-5 h-5 rounded-full border-2 border-zinc-300 peer-checked:border-pink-500 peer-checked:bg-pink-500 transition-colors"></div>
<div className="absolute w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-base text-zinc-700 font-medium group-hover:text-zinc-900 group-has-[:checked]:text-zinc-900">All are equally important</span>
</label>
</div>
</fieldset>

<fieldset className="space-y-5">
<legend className="text-lg font-medium text-zinc-900 mb-4 leading-snug">6. Do you feel public spaces (schools, streets, workplaces) are currently safe for women?</legend>
<div className="space-y-3">
<label className="group flex items-center gap-4 p-4 border border-zinc-200 rounded-xl cursor-pointer hover:bg-zinc-50 transition-all has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50/50">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" name="q6" type="radio" value="Yes"/>
<div className="w-5 h-5 rounded-full border-2 border-zinc-300 peer-checked:border-pink-500 peer-checked:bg-pink-500 transition-colors"></div>
<div className="absolute w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-base text-zinc-700 font-medium group-hover:text-zinc-900 group-has-[:checked]:text-zinc-900">Yes</span>
</label>
<label className="group flex items-center gap-4 p-4 border border-zinc-200 rounded-xl cursor-pointer hover:bg-zinc-50 transition-all has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50/50">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" name="q6" type="radio" value="Somewhat"/>
<div className="w-5 h-5 rounded-full border-2 border-zinc-300 peer-checked:border-pink-500 peer-checked:bg-pink-500 transition-colors"></div>
<div className="absolute w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-base text-zinc-700 font-medium group-hover:text-zinc-900 group-has-[:checked]:text-zinc-900">Somewhat</span>
</label>
<label className="group flex items-center gap-4 p-4 border border-zinc-200 rounded-xl cursor-pointer hover:bg-zinc-50 transition-all has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50/50">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" name="q6" type="radio" value="No"/>
<div className="w-5 h-5 rounded-full border-2 border-zinc-300 peer-checked:border-pink-500 peer-checked:bg-pink-500 transition-colors"></div>
<div className="absolute w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-base text-zinc-700 font-medium group-hover:text-zinc-900 group-has-[:checked]:text-zinc-900">No</span>
</label>
<label className="group flex items-center gap-4 p-4 border border-zinc-200 rounded-xl cursor-pointer hover:bg-zinc-50 transition-all has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50/50">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer sr-only" name="q6" type="radio" value="Prefer not to say"/>
<div className="w-5 h-5 rounded-full border-2 border-zinc-300 peer-checked:border-pink-500 peer-checked:bg-pink-500 transition-colors"></div>
<div className="absolute w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-base text-zinc-700 font-medium group-hover:text-zinc-900 group-has-[:checked]:text-zinc-900">Prefer not to say</span>
</label>
</div>
</fieldset>

<div className="pt-8 border-t border-zinc-100">
<button className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white font-medium rounded-full hover:bg-zinc-800 transition-all flex items-center justify-center gap-2" id="submit-btn" type="submit">
                            Submit Your Response
                        </button>
</div>
</form>
</div>
</section>
</div>


    </>
  );
}
