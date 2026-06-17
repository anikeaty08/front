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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
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
      

<header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<div className="flex items-center gap-2">

<div className="h-8 w-8 rounded bg-gray-900"></div>
<span className="font-['Josefin_Sans'] text-xl font-medium tracking-tight text-gray-900">ROCKWELL FITNESS</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
<a className="hover:text-[#10aeec] transition-colors" href="#">Home</a>
<a className="hover:text-[#10aeec] transition-colors" href="#">Gym Memberships</a>
<a className="hover:text-[#10aeec] transition-colors" href="#">Classes</a>
<a className="text-[#10aeec]" href="#">Personal Trainers</a>
</nav>
<div className="flex items-center gap-4">
<a className="rounded-full bg-[#ccff00] px-5 py-2 text-sm font-medium text-gray-900 hover:bg-[#b3e600] transition-colors" href="#">Free Class</a>
<a className="rounded-full bg-[#10aeec] px-5 py-2 text-sm font-medium text-white hover:bg-[#0e9bd2] transition-colors" href="#">Free Trial</a>
</div>
</div>
</header>

<section className="relative overflow-hidden bg-white pt-20 pb-16 lg:pt-32 lg:pb-24">
<div className="mx-auto max-w-7xl px-6 text-center">
<h1 className="mx-auto max-w-4xl font-['Josefin_Sans'] text-5xl font-medium leading-tight tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                Personal Trainers <br/>
<span className="text-[#10aeec]">Severna Park</span>
</h1>
<p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500 sm:text-xl leading-relaxed">
                Certified trainers to help you reach your fitness and wellness goals. Experience specialized guidance tailored to your body and lifestyle.
            </p>
</div>
</section>

<section className="border-y border-gray-100 bg-white py-16">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-12 md:grid-cols-3">

<div className="group flex flex-col items-start gap-4 rounded-2xl bg-gray-50 p-8 transition-all hover:shadow-lg hover:shadow-gray-200/50">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-gray-200">
<i className="h-6 w-6 text-[#10aeec]" data-lucide="award"></i>
</div>
<div>
<h3 className="font-['Josefin_Sans'] text-xl font-medium tracking-tight text-gray-900">Certified Trainers</h3>
<p className="mt-2 text-lg leading-relaxed text-gray-500">
                            Our training team is certified, regularly undergoes ongoing education and has a passion for helping others achieve their health goals.
                        </p>
</div>
</div>

<div className="group flex flex-col items-start gap-4 rounded-2xl bg-gray-50 p-8 transition-all hover:shadow-lg hover:shadow-gray-200/50">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-gray-200">
<i className="h-6 w-6 text-[#10aeec]" data-lucide="user-plus"></i>
</div>
<div>
<h3 className="font-['Josefin_Sans'] text-xl font-medium tracking-tight text-gray-900">Free Session</h3>
<p className="mt-2 text-lg leading-relaxed text-gray-500">
                            New to Rockwell? Sign up for a gym membership, and receive 1 FREE session with a personal trainer to get you started on the right path.
                        </p>
</div>
</div>

<div className="group flex flex-col items-start gap-4 rounded-2xl bg-gray-50 p-8 transition-all hover:shadow-lg hover:shadow-gray-200/50">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-gray-200">
<i className="h-6 w-6 text-[#10aeec]" data-lucide="sliders"></i>
</div>
<div>
<h3 className="font-['Josefin_Sans'] text-xl font-medium tracking-tight text-gray-900">Customized Plans</h3>
<p className="mt-2 text-lg leading-relaxed text-gray-500">
                            It doesn’t matter what your age, body type, or fitness level is - private training gives you the plan, support and knowledge necessary.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32">
<div className="mx-auto max-w-7xl px-6">
<div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-gray-200/40 ring-1 ring-gray-100 lg:grid lg:grid-cols-2">
<div className="relative h-64 lg:h-auto">

<img alt="Personal Training Group" className="absolute h-full w-full object-cover" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
</div>
<div className="flex flex-col justify-center p-10 lg:p-16">
<div className="flex items-center gap-2 text-[#10aeec]">
<i className="h-5 w-5" data-lucide="target"></i>
<span className="font-medium uppercase tracking-wide text-xs">Goal Oriented</span>
</div>
<h2 className="mt-4 font-['Josefin_Sans'] text-3xl font-medium tracking-tight text-gray-900 lg:text-4xl">
                        Find the Best Trainer for Your Personal Goals
                    </h2>
<p className="mt-4 text-lg text-gray-500">
                        Not everyone has the same fitness goals. Some want to get lean and fit, some want to improve their overall health, some want to "lose the baby weight". Whatever your goal, we have a pro for you.
                    </p>
<div className="mt-8">
<h3 className="font-['Josefin_Sans'] text-xl font-medium text-gray-900">Ready to Book a Session?</h3>
<p className="mt-2 text-gray-500">To get started with one of our Severna Park Personal Trainers, click below.</p>
<p className="mt-1 font-medium text-[#10aeec]">(410) 432-6140</p>
<div className="mt-6 flex gap-4">
<button className="inline-flex items-center justify-center rounded-lg bg-[#10aeec] px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#0e9bd2] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#10aeec] focus:ring-offset-2">
                                Request Info
                            </button>
<button className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2">
                                Learn More
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 py-16">
<div className="mx-auto max-w-7xl px-6">
<h2 className="mb-16 text-center font-['Josefin_Sans'] text-4xl font-medium tracking-tight text-gray-900">Meet Our Trainers</h2>
<div className="space-y-24">

<div className="group flex flex-col items-center gap-10 lg:flex-row lg:items-start">
<div className="relative w-full overflow-hidden rounded-2xl shadow-lg lg:w-1/3">
<img alt="Jarrod Astor" className="aspect-[3/4] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="w-full lg:w-2/3">
<h3 className="font-['Josefin_Sans'] text-3xl font-medium tracking-tight text-gray-900">Jarrod Astor, CPT</h3>
<p className="text-sm font-medium uppercase tracking-wide text-[#10aeec] mt-1">Certified Personal Trainer</p>
<div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-500">
<p>Meet Jarrod! Jarrod has over 20 years of experience in the fitness industry. His clientele has ranged from bikini competitors and body builders; to youth strength and conditioning for athletic performance; to functional movements for the elderly population.</p>
<p>He enjoys seeing what fitness does for his clients both physically and mentally. Jarrod is an enthusiastic and driven trainer that is guaranteed to push you to reach your goals in a realistic and safe time frame.</p>
</div>
<div className="mt-8 flex items-center gap-2">
<i className="h-5 w-5 text-[#10aeec]" data-lucide="mail"></i>
<span className="text-base font-medium text-gray-900">Contact <a className="text-[#10aeec] underline decoration-1 underline-offset-4 hover:text-[#0e9bd2]" href="#">info@rwfitness.com</a> to schedule with Jarrod.</span>
</div>
</div>
</div>

<div className="group flex flex-col items-center gap-10 lg:flex-row-reverse lg:items-start">
<div className="relative w-full overflow-hidden rounded-2xl shadow-lg lg:w-1/3">
<img alt="Trista Chandler" className="aspect-[3/4] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="w-full lg:w-2/3">
<h3 className="font-['Josefin_Sans'] text-3xl font-medium tracking-tight text-gray-900">Trista Chandler, CPT</h3>
<p className="text-sm font-medium uppercase tracking-wide text-[#10aeec] mt-1">Certified Personal Trainer, Pre and Post Natal Specialist</p>
<div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-500">
<p>Meet Trista! She was a dancer for 10 years, have massive dreams of traveling the world and spreading fitness, health, and joy across the globe. Trista is a National Academy of Sports Medicine (NASM) certified personal trainer (2016).</p>
<p>Trista acts as a health coach, lifestyle, and finding balance in everyday. She believes that we are all unique, we are all beautiful, it’s time you enhance that.</p>
</div>
<div className="mt-8 flex items-center gap-2">
<i className="h-5 w-5 text-[#10aeec]" data-lucide="mail"></i>
<span className="text-base font-medium text-gray-900">Contact <a className="text-[#10aeec] underline decoration-1 underline-offset-4 hover:text-[#0e9bd2]" href="#">info@rwfitness.com</a> to schedule with Trista.</span>
</div>
</div>
</div>

<div className="group flex flex-col items-center gap-10 lg:flex-row lg:items-start">
<div className="relative w-full overflow-hidden rounded-2xl shadow-lg lg:w-1/3">
<img alt="Isaiah Jefferson" className="aspect-[3/4] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="w-full lg:w-2/3">
<h3 className="font-['Josefin_Sans'] text-3xl font-medium tracking-tight text-gray-900">Isaiah Jefferson, CPT</h3>
<p className="text-sm font-medium uppercase tracking-wide text-[#10aeec] mt-1">Certified Personal Trainer, Muscle Building Specialist</p>
<div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-500">
<p>Meet Isaiah! Being an Air Force Veteran, many people assume Isaiah got in shape because of the military, which is completely false. Isaiah developed his passion for training when he turned 17. At that time in my life, he wasn't happy with how he looked and was motivated to make a change.</p>
<p>Isaiah is now a certified personal trainer through NASM and here to help any and everyone who wants to make a change. He believes that fitness is the gratification of seeing individuals make personal progress.</p>
</div>
<div className="mt-8 flex items-center gap-2">
<i className="h-5 w-5 text-[#10aeec]" data-lucide="mail"></i>
<span className="text-base font-medium text-gray-900">Contact <a className="text-[#10aeec] underline decoration-1 underline-offset-4 hover:text-[#0e9bd2]" href="#">info@rwfitness.com</a> to schedule with Isaiah.</span>
</div>
</div>
</div>

<div className="group flex flex-col items-center gap-10 lg:flex-row-reverse lg:items-start">
<div className="relative w-full overflow-hidden rounded-2xl shadow-lg lg:w-1/3">
<img alt="Tahir Jalil" className="aspect-[3/4] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="w-full lg:w-2/3">
<h3 className="font-['Josefin_Sans'] text-3xl font-medium tracking-tight text-gray-900">Tahir Jalil, CPT</h3>
<p className="text-sm font-medium uppercase tracking-wide text-[#10aeec] mt-1">Certified Personal Trainer</p>
<div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-500">
<p>Meet Tahir, (or just “T”!) Tahir has been a personal trainer for over 5 years. He was born in Newark, NJ and attended college at the Pennsylvania State University where he majored in kinesiology, with dual minors in psychology and sociology.</p>
<p>Tahir’s training programs are designed based around the latest scientific training concepts and tailored to meet each client’s specific needs. Whether a young athlete is looking to build explosiveness or a new retiree looking to feel better.</p>
</div>
<div className="mt-8 flex items-center gap-2">
<i className="h-5 w-5 text-[#10aeec]" data-lucide="mail"></i>
<span className="text-base font-medium text-gray-900">Contact <a className="text-[#10aeec] underline decoration-1 underline-offset-4 hover:text-[#0e9bd2]" href="#">info@rwfitness.com</a> to schedule with Tahir.</span>
</div>
</div>
</div>

<div className="group flex flex-col items-center gap-10 lg:flex-row lg:items-start">
<div className="relative w-full overflow-hidden rounded-2xl shadow-lg lg:w-1/3">
<img alt="Jeff Turner" className="aspect-[3/4] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="w-full lg:w-2/3">
<h3 className="font-['Josefin_Sans'] text-3xl font-medium tracking-tight text-gray-900">Jeff Turner, CPT</h3>
<p className="text-sm font-medium uppercase tracking-wide text-[#10aeec] mt-1">Certified Personal Trainer</p>
<div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-500">
<p>Meet Jeff! Jeff's road into the Health and Fitness World started as a teenager. He began developing acne in my early teens, which caused him to feel out of place in social situations. However, he enjoyed sports and began playing high school football.</p>
<p>After a year of consistent training, Jeff started seeing noticeable changes. In 2001, he competed in the Maryland National Bodybuilding Competition. Jeff believes there is no better feeling than helping someone set a personal goal, implement the process, overcome the obstacles and achieve their goal.</p>
</div>
<div className="mt-8 flex items-center gap-2">
<i className="h-5 w-5 text-[#10aeec]" data-lucide="mail"></i>
<span className="text-base font-medium text-gray-900">Contact <a className="text-[#10aeec] underline decoration-1 underline-offset-4 hover:text-[#0e9bd2]" href="#">info@rwfitness.com</a> to schedule with Jeff.</span>
</div>
</div>
</div>

<div className="group flex flex-col items-center gap-10 lg:flex-row-reverse lg:items-start">
<div className="relative w-full overflow-hidden rounded-2xl shadow-lg lg:w-1/3">
<img alt="Bree Moore" className="aspect-[3/4] h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="w-full lg:w-2/3">
<h3 className="font-['Josefin_Sans'] text-3xl font-medium tracking-tight text-gray-900">Bree Moore, CPT</h3>
<p className="text-sm font-medium uppercase tracking-wide text-[#10aeec] mt-1">ISSA Certified Personal Trainer, Nutrition Coach</p>
<div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-500">
<p>Meet Bree! Bree is a mom of 2 girls, 5 &amp; 7, as well as an ISSA certified personal trainer and Nutrition coach. Bree has worked with a variety of clients from sports performance training, busy moms/dads and elderly.</p>
<p>She has a passion for helping clients achieve their goals without “yo-yo dieting and fad workout programs”. Bree’s programs are customized to her clients needs/goals that are not only time manageable but also efficient.</p>
</div>
<div className="mt-8 flex items-center gap-2">
<i className="h-5 w-5 text-[#10aeec]" data-lucide="mail"></i>
<span className="text-base font-medium text-gray-900">Contact <a className="text-[#10aeec] underline decoration-1 underline-offset-4 hover:text-[#0e9bd2]" href="#">info@rwfitness.com</a> to schedule with Bree.</span>
</div>
</div>
</div>

<div className="group flex flex-col items-center gap-10 lg:flex-row lg:items-start">
<div className="relative w-full overflow-hidden rounded-2xl shadow-lg lg:w-1/3">
<img alt="Travis Clay" className="aspect-[3/4] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="w-full lg:w-2/3">
<h3 className="font-['Josefin_Sans'] text-3xl font-medium tracking-tight text-gray-900">Travis Clay, CPT</h3>
<p className="text-sm font-medium uppercase tracking-wide text-[#10aeec] mt-1">Certified Personal Trainer</p>
<div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-500">
<p>Meet Travis! Travis is a husband, father of two boys and former corporate professional turned ACE Certified Personal Trainer. His fitness programs were created to give those busy husband and wives, mothers and fathers, everyday professionals a plan of action.</p>
<p>The biggest problem of the general population is time. Clay believes people spend too much time on our smartphones looking for work out programs, waiting for equipment and wasting effort on exercises that aren't getting results.</p>
</div>
<div className="mt-8 flex items-center gap-2">
<i className="h-5 w-5 text-[#10aeec]" data-lucide="mail"></i>
<span className="text-base font-medium text-gray-900">Contact <a className="text-[#10aeec] underline decoration-1 underline-offset-4 hover:text-[#0e9bd2]" href="#">info@rwfitness.com</a> to schedule with Travis.</span>
</div>
</div>
</div>

<div className="mt-24 rounded-3xl bg-gray-900 p-8 text-white lg:p-12">
<div className="flex flex-col items-center gap-10 lg:flex-row">
<div className="w-full lg:w-1/3">
<img alt="Coach Power" className="h-64 w-full rounded-2xl object-cover lg:h-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="mt-4 flex items-center justify-center rounded-xl bg-white/10 p-4 backdrop-blur-sm">
<div className="text-center">
<h4 className="font-['Josefin_Sans'] text-xl font-medium text-[#ccff00]">Krav Maga</h4>
<p className="text-sm text-gray-300">Saturdays &amp; Sundays</p>
<p className="mt-1 text-lg font-bold text-white">410-777-3556</p>
</div>
</div>
</div>
<div className="w-full lg:w-2/3">
<h3 className="font-['Josefin_Sans'] text-3xl font-medium tracking-tight text-white">Coach Power</h3>
<p className="text-sm font-medium uppercase tracking-wide text-[#ccff00] mt-1">Krav Maga &amp; Self-Defense Instructor</p>
<p className="mt-6 text-lg leading-relaxed text-gray-300">
                                Join our Krav Maga &amp; Self-Defense class at Rockwell Fitness on Saturdays and Sundays with Coach Power, from 9-11am.
                            </p>
<p className="mt-4 text-xl font-medium text-white">1 Month Unlimited Classes – $125</p>
<p className="mt-4 text-gray-400">
                                Contact Coach Power at (410) 777-3556 or via email at <a className="text-[#10aeec] hover:text-[#ccff00] transition-colors" href="#">Epower372@gmail.com</a> to register.
                            </p>
</div>
</div>
</div>

<div className="group flex flex-col items-center gap-10 lg:flex-row-reverse lg:items-start pt-16">
<div className="relative w-full overflow-hidden rounded-2xl shadow-lg lg:w-1/3">
<img alt="Alana Roach" className="aspect-[3/4] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="w-full lg:w-2/3">
<h3 className="font-['Josefin_Sans'] text-3xl font-medium tracking-tight text-gray-900">Alana Roach</h3>
<p className="text-sm font-medium uppercase tracking-wide text-[#10aeec] mt-1">RockWell Project Manager, Yoga &amp; Barre Coordinator</p>
<div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-500">
<p>Alana is a huge believer in mindfulness and holistic practices to help people and families reach their full potential. With an extensive background in the wellness industry that spans across all of the many hats that she wears at RockWell Fitness. She has been getting her Integrative Nutrition &amp; Life Coaching Consultant certification since 2015-2016.</p>
<p>In addition to leading over 3,000 hours of classes, teacher training, workshops, private classes, small group classes, retreats, and events all over the world, she has also run a thriving business. In Alana’s free time, she enjoys spending time with her 4 children and husband, Brad.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-gray-200 bg-white py-20">
<div className="mx-auto max-w-4xl px-6 text-center">
<h3 className="font-['Josefin_Sans'] text-2xl font-medium text-gray-900">Unsure as to whether hiring a trainer works? Check out this recent article:</h3>
<a className="group mt-10 block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all" href="#">
<div className="aspect-video w-full overflow-hidden">
<img alt="Personal Training Article" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="p-8 text-left">
<h4 className="font-['Josefin_Sans'] text-2xl font-medium text-gray-900 group-hover:text-[#10aeec] transition-colors">Why Booking 4 Sessions With A Personal Trainer Can Help You Achieve Your Fitness Goals</h4>
<p className="mt-3 text-lg text-gray-500">Read the full story on how structured sessions lead to better results...</p>
<div className="mt-6 flex items-center gap-2 text-sm text-gray-400">
<i className="h-4 w-4" data-lucide="book-open"></i>
<span>Read article</span>
</div>
</div>
</a>
</div>
</section>

<section className="bg-gray-50 py-24">
<div className="mx-auto max-w-3xl px-6">
<div className="mb-12 text-center">
<h2 className="font-['Josefin_Sans'] text-4xl font-medium tracking-tight text-gray-900">We Make Fitness Training Easy - Get Started Today!</h2>
<p className="mt-4 text-lg text-gray-500">Now that you've met the team, it's time to take the next step. Please complete the form below to get started.</p>
</div>
<form className="rounded-3xl bg-white p-8 shadow-xl shadow-gray-200/50 md:p-12 ring-1 ring-gray-100">
<div className="space-y-6">
<div>
<label className="block text-sm font-medium text-gray-700" htmlFor="name">Name *</label>
<input className="mt-2 block w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#10aeec] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#10aeec]/10 transition-all" id="name" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700" htmlFor="email">Email *</label>
<input className="mt-2 block w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#10aeec] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#10aeec]/10 transition-all" id="email" placeholder="jane@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700" htmlFor="phone">Phone *</label>
<input className="mt-2 block w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#10aeec] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#10aeec]/10 transition-all" id="phone" placeholder="(555) 555-5555" type="tel"/>
</div>
<div className="pt-4">
<label className="block text-sm font-medium text-gray-700 mb-4">What are you interested in?</label>
<div className="space-y-3">
<label className="flex items-center gap-3">
<input className="h-5 w-5 rounded border-gray-300 text-[#10aeec] focus:ring-[#10aeec]" type="checkbox"/>
<span className="text-gray-600">Gym Membership</span>
</label>
<label className="flex items-center gap-3">
<input className="h-5 w-5 rounded border-gray-300 text-[#10aeec] focus:ring-[#10aeec]" type="checkbox"/>
<span className="text-gray-600">Boxing</span>
</label>
<label className="flex items-center gap-3">
<input className="h-5 w-5 rounded border-gray-300 text-[#10aeec] focus:ring-[#10aeec]" type="checkbox"/>
<span className="text-gray-600">Personal Training (In-person)</span>
</label>
<label className="flex items-center gap-3">
<input className="h-5 w-5 rounded border-gray-300 text-[#10aeec] focus:ring-[#10aeec]" type="checkbox"/>
<span className="text-gray-600">Personal Training (Virtual)</span>
</label>
<label className="flex items-center gap-3">
<input className="h-5 w-5 rounded border-gray-300 text-[#10aeec] focus:ring-[#10aeec]" type="checkbox"/>
<span className="text-gray-600">Weight Loss</span>
</label>
<label className="flex items-center gap-3">
<input className="h-5 w-5 rounded border-gray-300 text-[#10aeec] focus:ring-[#10aeec]" type="checkbox"/>
<span className="text-gray-600">Infrared Red Light Therapy</span>
</label>
<label className="flex items-center gap-3">
<input className="h-5 w-5 rounded border-gray-300 text-[#10aeec] focus:ring-[#10aeec]" type="checkbox"/>
<span className="text-gray-600">Infrared Sauna</span>
</label>
</div>
</div>
<div className="pt-6">
<button className="w-full rounded-lg bg-gray-900 px-8 py-4 text-base font-medium text-white shadow-lg shadow-gray-900/20 transition-all hover:bg-gray-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2" type="submit">
                            Submit Inquiry
                        </button>
</div>
</div>
</form>
</div>
</section>

<footer className="bg-gray-900 py-12 text-center text-gray-400">
<p className="font-['Josefin_Sans'] text-2xl text-white">ROCKWELL FITNESS</p>
<p className="mt-4 text-sm">© 2024 Rockwell Fitness. All rights reserved.</p>
</footer>


    </>
  );
}
