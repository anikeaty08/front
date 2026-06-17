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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<section className="bg-[#0A0A0A] py-12 md:py-20 px-5" id="vsl-section">
<div className="max-w-screen-lg mx-auto flex flex-col items-center">
<img alt="Miguel De La Rosa Logo" className="w-20 md:w-24 object-contain py-8" src="https://image2url.com/r2/default/images/1774587782659-8f3da3f9-3238-4ad9-bede-552aa7a68b77.png"/>
<p className="font-heading font-semibold text-sm tracking-widest text-[#f5f35f] uppercase text-center mb-6">
                FOR BUSY MEN WHO ARE DONE STARTING OVER EVERY FEW MONTHS
            </p>
<h1 className="font-heading font-semibold text-3xl md:text-5xl text-white uppercase text-center leading-tight tracking-tight max-w-[1000px] mb-8">
                IN THE NEXT 90 DAYS, I'LL HELP YOU DROP 15-25LBS USING MY "<span className="text-[#f5f35f]">DISCIPLINE &amp; BALANCE SYSTEM</span>" THAT HELPED ME GO FROM OUT OF SHAPE TO BUILDING THE BODY I WANTED, WHILE KEEPING MY SCHEDULE, MY SANITY AND THE FOODS I ACTUALLY ENJOY
            </h1>
<p className="text-base md:text-lg text-[#A0A0A0] text-center max-w-screen-md mx-auto leading-relaxed mb-10">
                Without starving yourself, spending hours in the gym, following cookie-cutter meal plans that don't fit your life, or giving up every food you love just to see the scale move
            </p>
<p className="text-sm text-white text-center mb-4">
                Step 1 of 2: Watch the video below
            </p>
<div className="w-full max-w-[800px] aspect-video rounded-lg border border-[#2A2A2A] overflow-hidden mb-4 bg-[#1A1A1A]">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full border-0" src="https://www.youtube.com/embed/U_ykg_cczsA?rel=0&amp;modestbranding=1" title="VSL Video"></iframe>
</div>
<p className="text-sm text-white text-center mb-10 mt-2">
                Step 2 of 2: Fill out the quick form below
            </p>
<div className="mt-10 w-full md:w-auto">
<a className="block w-full md:w-auto bg-[#f5f35f] text-[#0A0A0A] font-heading font-semibold text-base uppercase tracking-wide px-12 py-4 rounded-md text-center" href="#vsl-section">
                    APPLY NOW
                </a>
</div>
</div>
</section>

<section className="bg-[#111111] py-12 md:py-20 px-5">
<div className="max-w-screen-lg mx-auto">
<p className="font-heading font-semibold text-sm tracking-widest text-[#f5f35f] uppercase text-center mb-6">
                REAL MEN. REAL RESULTS.
            </p>
<h2 className="font-heading font-semibold text-2xl md:text-4xl text-white uppercase text-center leading-tight tracking-tight max-w-[900px] mx-auto mb-10">
                THESE GUYS WERE EXACTLY WHERE YOU ARE. BUSY. CARRYING EXTRA WEIGHT. TIRED OF STARTING OVER. HERE'S WHAT HAPPENED WHEN THEY COMMITTED TO THE PROCESS.
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 md:p-8 flex flex-col w-full">
<div className="w-full aspect-video rounded-lg overflow-hidden mb-6 bg-black border border-[#2A2A2A]">
<iframe allowfullscreen="" className="w-full h-full border-0" src="https://www.youtube.com/embed/qcBaY5EQx-U?rel=0"></iframe>
</div>
<p className="text-base md:text-lg text-white italic leading-relaxed mb-4">
                        "I finally stopped guessing and started seeing real changes in the mirror. The system just made sense for my schedule."
                    </p>
<p className="text-base text-[#f5f35f] font-semibold mb-2 mt-auto">
                        Lost 22lbs in 11 weeks while working 50+ hour weeks
                    </p>
<p className="text-sm text-[#A0A0A0]">Client Case Study</p>
</div>

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 md:p-8 flex flex-col w-full">
<div className="w-full aspect-video rounded-lg overflow-hidden mb-6 bg-black border border-[#2A2A2A]">
<iframe allowfullscreen="" className="w-full h-full border-0" src="https://www.youtube.com/embed/cI192vbpAfM?rel=0"></iframe>
</div>
<p className="text-base md:text-lg text-white italic leading-relaxed mb-4">
                        "I thought I had to cut everything I loved eating. Turns out I just needed someone to show me how to balance it."
                    </p>
<p className="text-base text-[#f5f35f] font-semibold mb-2 mt-auto">
                        Dropped 18lbs and kept it off for 6+ months
                    </p>
<p className="text-sm text-[#A0A0A0]">Client Case Study</p>
</div>

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 md:p-8 flex flex-col w-full">
<div className="w-full aspect-video rounded-lg overflow-hidden mb-6 bg-black border border-[#2A2A2A]">
<iframe allowfullscreen="" className="w-full h-full border-0" src="https://www.youtube.com/embed/sOwyZtncOJs?rel=0"></iframe>
</div>
<p className="text-base md:text-lg text-white italic leading-relaxed mb-4">
                        "The accountability was the game changer. Having Miguel in my corner made all the difference."
                    </p>
<p className="text-base text-[#f5f35f] font-semibold mb-2 mt-auto">
                        Lost 25lbs in 90 days and completely changed his energy levels
                    </p>
<p className="text-sm text-[#A0A0A0]">Client Case Study</p>
</div>

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 md:p-8 flex flex-col w-full">
<div className="w-full aspect-video rounded-lg overflow-hidden mb-6 bg-black border border-[#2A2A2A]">
<iframe allowfullscreen="" className="w-full h-full border-0" src="https://www.youtube.com/embed/Ou3OJDtW8Tk?rel=0"></iframe>
</div>
<p className="text-base md:text-lg text-white italic leading-relaxed mb-4">
                        "I've tried programs before. This was the first one that actually worked around my life, not against it."
                    </p>
<p className="text-base text-[#f5f35f] font-semibold mb-2 mt-auto">
                        Lost 17lbs while traveling for work every other week
                    </p>
<p className="text-sm text-[#A0A0A0]">Client Case Study</p>
</div>

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 md:p-8 flex flex-col w-full">
<div className="w-full aspect-video rounded-lg overflow-hidden mb-6 bg-black border border-[#2A2A2A]">
<iframe allowfullscreen="" className="w-full h-full border-0" src="https://www.youtube.com/embed/3adQy5LaoSQ?rel=0"></iframe>
</div>
<p className="text-base md:text-lg text-white italic leading-relaxed mb-4">
                        "I used to skip meals or eat garbage because I didn't have time. Now I eat better in less time than before."
                    </p>
<p className="text-base text-[#f5f35f] font-semibold mb-2 mt-auto">
                        Dropped 20lbs and built a routine he can maintain for life
                    </p>
<p className="text-sm text-[#A0A0A0]">Client Case Study</p>
</div>

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 md:p-8 flex flex-col w-full">
<div className="w-full aspect-video rounded-lg overflow-hidden mb-6 bg-black border border-[#2A2A2A]">
<iframe allowfullscreen="" className="w-full h-full border-0" src="https://www.youtube.com/embed/xvMl09IwzHg?rel=0"></iframe>
</div>
<p className="text-base md:text-lg text-white italic leading-relaxed mb-4">
                        "I didn't think I could lose weight without giving up everything. Miguel showed me I was wrong."
                    </p>
<p className="text-base text-[#f5f35f] font-semibold mb-2 mt-auto">
                        Lost 19lbs and still eats the foods he loves on a weekly basis
                    </p>
<p className="text-sm text-[#A0A0A0]">Client Case Study</p>
</div>
</div>
<div className="mt-10 flex justify-center w-full">
<a className="block w-full md:w-auto bg-[#f5f35f] text-[#0A0A0A] font-heading font-semibold text-base uppercase tracking-wide px-12 py-4 rounded-md text-center mt-10" href="#vsl-section">
                    GET STARTED
                </a>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] py-12 md:py-20 px-5">
<div className="max-w-screen-lg mx-auto">
<p className="font-heading font-semibold text-sm tracking-widest text-[#f5f35f] uppercase text-center mb-6">
                SOUND FAMILIAR?
            </p>
<h2 className="font-heading font-semibold text-2xl md:text-4xl text-white uppercase text-center leading-tight tracking-tight max-w-[900px] mx-auto mb-6">
                YOU'VE TRIED TO LOSE WEIGHT BEFORE. MAYBE MORE THAN ONCE. AND EVERY TIME, IT STARTS THE SAME WAY AND ENDS THE SAME WAY.
            </h2>
<p className="text-base md:text-lg text-[#A0A0A0] text-center max-w-screen-md mx-auto leading-relaxed mb-10">
                The problem isn't your effort. It's that nobody has given you a system that <span className="text-white font-normal">actually fits the life you're living</span> right now. Here's what's really going on.
            </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 md:p-8 flex flex-col gap-4 w-full">
<iconify-icon className="text-[#f5f35f] text-3xl mb-2" icon="solar:restart-circle-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-lg md:text-xl text-white uppercase tracking-tight">
                        YOU EAT CLEAN FOR A WEEK, THEN FALL OFF AND UNDO ALL THE PROGRESS
                    </h3>
<p className="text-base text-[#A0A0A0] leading-relaxed">
                        You start strong every Monday, but by Thursday life takes over. Work runs late, you're too tired to cook, you grab whatever's fast, and before you know it, another week goes by where you feel like you're back at square one.
                    </p>
</div>

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 md:p-8 flex flex-col gap-4 w-full">
<iconify-icon className="text-[#f5f35f] text-3xl mb-2" icon="solar:layers-minimalistic-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-lg md:text-xl text-white uppercase tracking-tight">
                        YOU HAVE ACCESS TO A MILLION VIDEOS AND PLANS BUT NONE OF THEM STICK
                    </h3>
<p className="text-base text-[#A0A0A0] leading-relaxed">
                        You've watched the YouTube videos, downloaded the PDF meal plans, maybe even followed a program for a few weeks. But none of it was built for your actual schedule, your actual food preferences, or your actual life. So it never lasted.
                    </p>
</div>

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 md:p-8 flex flex-col gap-4 w-full">
<iconify-icon className="text-[#f5f35f] text-3xl mb-2" icon="solar:brain-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-lg md:text-xl text-white uppercase tracking-tight">
                        YOU KNOW WHAT YOU SHOULD BE EATING BUT YOU STILL DON'T DO IT
                    </h3>
<p className="text-base text-[#A0A0A0] leading-relaxed">
                        This is the part nobody talks about. You already know chicken is better than fast food. You know you should eat more protein. The information isn't the problem. The structure and accountability is.
                    </p>
</div>

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 md:p-8 flex flex-col gap-4 w-full">
<iconify-icon className="text-[#f5f35f] text-3xl mb-2" icon="solar:clock-circle-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-lg md:text-xl text-white uppercase tracking-tight">
                        YOU DON'T HAVE 2 HOURS A DAY TO MEAL PREP AND TRAIN
                    </h3>
<p className="text-base text-[#A0A0A0] leading-relaxed">
                        You're not a fitness influencer. You've got a job, maybe a family, real responsibilities. And every program you've tried assumes you have unlimited time to spend in the kitchen and the gym.
                    </p>
</div>

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 md:p-8 flex flex-col gap-4 w-full">
<iconify-icon className="text-[#f5f35f] text-3xl mb-2" icon="solar:graph-down-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-lg md:text-xl text-white uppercase tracking-tight">
                        YOU LOSE A FEW POUNDS, THEN GAIN IT ALL BACK
                    </h3>
<p className="text-base text-[#A0A0A0] leading-relaxed">
                        The yo-yo cycle is real. You drop 8 or 10 pounds, feel good, relax a little, and two months later you're right back where you started. Sometimes heavier.
                    </p>
</div>

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 md:p-8 flex flex-col gap-4 w-full">
<iconify-icon className="text-[#f5f35f] text-3xl mb-2" icon="solar:wallet-money-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-lg md:text-xl text-white uppercase tracking-tight">
                        YOU'VE SPENT MONEY ON PROGRAMS, SUPPLEMENTS, OR GEAR THAT DIDN'T WORK
                    </h3>
<p className="text-base text-[#A0A0A0] leading-relaxed">
                        Protein shakes, fat burners, apps with monthly subscriptions, a gym membership you barely use. You've invested money before and got nothing lasting in return. That makes it harder to trust the next thing.
                    </p>
</div>
</div>
<div className="mt-10 flex justify-center w-full">
<a className="block w-full md:w-auto bg-[#f5f35f] text-[#0A0A0A] font-heading font-semibold text-base uppercase tracking-wide px-12 py-4 rounded-md text-center mt-10" href="#vsl-section">
                    APPLY NOW
                </a>
</div>
</div>
</section>

<section className="bg-[#111111] py-12 md:py-20 px-5">
<div className="max-w-screen-lg mx-auto">
<p className="font-heading font-semibold text-sm tracking-widest text-[#f5f35f] uppercase text-center mb-6">
                NOW IMAGINE THIS INSTEAD.
            </p>
<h2 className="font-heading font-semibold text-2xl md:text-4xl text-white uppercase text-center leading-tight tracking-tight max-w-[900px] mx-auto mb-6">
                WHAT IF YOU HAD A SIMPLE SYSTEM, BUILT AROUND YOUR REAL LIFE, THAT ACTUALLY GOT THE WEIGHT OFF AND KEPT IT OFF?
            </h2>
<p className="text-base md:text-lg text-[#A0A0A0] text-center max-w-screen-md mx-auto leading-relaxed mb-10">
                Here's what changes when you stop guessing and start following a plan that <span className="text-white font-normal">works</span>.
            </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 md:p-8 flex flex-col gap-4 w-full">
<iconify-icon className="text-[#f5f35f] text-3xl mb-2" icon="solar:cup-star-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-lg md:text-xl text-white uppercase tracking-tight">
                        YOU EAT CLEAN WITHOUT FEELING RESTRICTED OR DEPRIVED
                    </h3>
<p className="text-base text-[#A0A0A0] leading-relaxed">
                        Good carbs, good proteins, good fats. Simple meals you actually enjoy. Egg whites, oats, avocado, olive oil, grilled chicken. Stuff you can grab at Costco and cook in 10 minutes. You eat every day foods that fuel your body, enjoy your favorites once a week, and save the indulgences for once a month. That's balance. That's sustainable.
                    </p>
</div>

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 md:p-8 flex flex-col gap-4 w-full">
<iconify-icon className="text-[#f5f35f] text-3xl mb-2" icon="solar:graph-up-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-lg md:text-xl text-white uppercase tracking-tight">
                        THE WEIGHT COMES OFF AND STAYS OFF BECAUSE THE HABITS STICK
                    </h3>
<p className="text-base text-[#A0A0A0] leading-relaxed">
                        This isn't a crash diet. It's a system you can run for life. When you build discipline around the basics, the results don't disappear when the program ends. They compound.
                    </p>
</div>

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 md:p-8 flex flex-col gap-4 w-full">
<iconify-icon className="text-[#f5f35f] text-3xl mb-2" icon="solar:smile-circle-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-lg md:text-xl text-white uppercase tracking-tight">
                        YOU STOP OVERTHINKING FOOD AND START ENJOYING IT AGAIN
                    </h3>
<p className="text-base text-[#A0A0A0] leading-relaxed">
                        No more calorie counting apps, no more Googling "is this good for me," no more guilt after eating something you like. You learn the framework once, and it just becomes how you eat.
                    </p>
</div>

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 md:p-8 flex flex-col gap-4 w-full">
<iconify-icon className="text-[#f5f35f] text-3xl mb-2" icon="solar:bolt-circle-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-lg md:text-xl text-white uppercase tracking-tight">
                        YOU HAVE MORE ENERGY, BETTER SLEEP, AND ACTUALLY FEEL GOOD
                    </h3>
<p className="text-base text-[#A0A0A0] leading-relaxed">
                        When your nutrition is dialed in, everything else follows. You wake up feeling lighter. You're not dragging through the afternoon. You show up better at work, at home, everywhere.
                    </p>
</div>

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 md:p-8 flex flex-col gap-4 w-full">
<iconify-icon className="text-[#f5f35f] text-3xl mb-2" icon="solar:eye-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-lg md:text-xl text-white uppercase tracking-tight">
                        YOU LOOK IN THE MIRROR AND ACTUALLY LIKE WHAT YOU SEE
                    </h3>
<p className="text-base text-[#A0A0A0] leading-relaxed">
                        Your clothes fit different. People start noticing. And for the first time in a while, you feel confident with your shirt off. That's not vanity. That's what happens when you take care of yourself.
                    </p>
</div>

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 md:p-8 flex flex-col gap-4 w-full">
<iconify-icon className="text-[#f5f35f] text-3xl mb-2" icon="solar:calendar-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-lg md:text-xl text-white uppercase tracking-tight">
                        YOU FINALLY HAVE A SYSTEM THAT WORKS AROUND YOUR SCHEDULE, NOT AGAINST IT
                    </h3>
<p className="text-base text-[#A0A0A0] leading-relaxed">
                        Early mornings, late nights, travel weeks, busy seasons. It doesn't matter. This is built for the guy who has a full life and needs something that fits inside of it. Not the other way around.
                    </p>
</div>
</div>
<div className="mt-10 flex justify-center w-full">
<a className="block w-full md:w-auto bg-[#f5f35f] text-[#0A0A0A] font-heading font-semibold text-base uppercase tracking-wide px-12 py-4 rounded-md text-center mt-10" href="#vsl-section">
                    GET STARTED
                </a>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] py-12 md:py-20 px-5">
<div className="max-w-screen-lg mx-auto">
<p className="font-heading font-semibold text-sm tracking-widest text-[#f5f35f] uppercase text-center mb-6">
                HERE'S EXACTLY WHAT YOU GET WHEN YOU WORK WITH ME.
            </p>
<p className="text-base md:text-lg text-[#A0A0A0] text-center max-w-screen-md mx-auto leading-relaxed mb-10">
                I built this to be everything I wish I had when I was out of shape, working long hours, and trying to figure this out on my own. Simple. Direct. No fluff. Just what works.
            </p>
<div className="flex flex-col gap-6 mt-10">

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center w-full">
<div className="w-full md:w-[300px] shrink-0 aspect-[3/2] bg-[#2A2A2A] border border-dashed border-[#555] rounded-lg flex items-center justify-center">
<span className="text-sm text-[#A0A0A0]">Nutrition Plan Mockup</span>
</div>
<div className="flex flex-col gap-3 w-full">
<iconify-icon className="text-[#f5f35f] text-3xl" icon="solar:apple-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-xl md:text-2xl text-white uppercase tracking-tight">
                            CUSTOMIZED NUTRITION PLAN BUILT AROUND YOUR LIFE
                        </h3>
<p className="text-base text-[#A0A0A0] leading-relaxed">
                            A meal plan based on the foods you actually like, the schedule you actually have, and the goals you actually want to hit. Good carbs, good proteins, good fats. Portioned and structured for fat loss without making you miserable.
                        </p>
</div>
</div>

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center w-full">
<div className="w-full md:w-[300px] shrink-0 aspect-[3/2] bg-[#2A2A2A] border border-dashed border-[#555] rounded-lg flex items-center justify-center">
<span className="text-sm text-[#A0A0A0]">Training Program Mockup</span>
</div>
<div className="flex flex-col gap-3 w-full">
<iconify-icon className="text-[#f5f35f] text-3xl" icon="solar:dumbell-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-xl md:text-2xl text-white uppercase tracking-tight">
                            PERSONALIZED TRAINING PROGRAM
                        </h3>
<p className="text-base text-[#A0A0A0] leading-relaxed">
                            A workout plan that matches where your body is right now. Not some generic 6-day split designed for someone who lives at the gym. We train smart, we train based on what your body needs, and we adjust as you progress.
                        </p>
</div>
</div>

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center w-full">
<div className="w-full md:w-[300px] shrink-0 aspect-[3/2] bg-[#2A2A2A] border border-dashed border-[#555] rounded-lg flex items-center justify-center">
<span className="text-sm text-[#A0A0A0]">Weekly Check-In Mockup</span>
</div>
<div className="flex flex-col gap-3 w-full">
<iconify-icon className="text-[#f5f35f] text-3xl" icon="solar:users-group-rounded-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-xl md:text-2xl text-white uppercase tracking-tight">
                            WEEKLY 1-ON-1 CHECK-INS WITH ME
                        </h3>
<p className="text-base text-[#A0A0A0] leading-relaxed">
                            Every week, we connect. We review your progress, adjust the plan, and make sure the weight keeps coming off. You're not doing this alone. I'm in your corner the entire 90 days.
                        </p>
</div>
</div>

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center w-full">
<div className="w-full md:w-[300px] shrink-0 aspect-[3/2] bg-[#2A2A2A] border border-dashed border-[#555] rounded-lg flex items-center justify-center">
<span className="text-sm text-[#A0A0A0]">Direct Access Mockup</span>
</div>
<div className="flex flex-col gap-3 w-full">
<iconify-icon className="text-[#f5f35f] text-3xl" icon="solar:chat-round-line-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-xl md:text-2xl text-white uppercase tracking-tight">
                            DIRECT ACCESS &amp; ACCOUNTABILITY
                        </h3>
<p className="text-base text-[#A0A0A0] leading-relaxed">
                            You can reach me directly. When you're at a restaurant and don't know what to order, when you had a rough week and want to quit, when you need someone to keep you honest. That's what I'm here for.
                        </p>
</div>
</div>

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center w-full">
<div className="w-full md:w-[300px] shrink-0 aspect-[3/2] bg-[#2A2A2A] border border-dashed border-[#555] rounded-lg flex items-center justify-center">
<span className="text-sm text-[#A0A0A0]">D&amp;B Framework Mockup</span>
</div>
<div className="flex flex-col gap-3 w-full">
<iconify-icon className="text-[#f5f35f] text-3xl" icon="solar:target-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-xl md:text-2xl text-white uppercase tracking-tight">
                            THE DISCIPLINE &amp; BALANCE FRAMEWORK
                        </h3>
<p className="text-base text-[#A0A0A0] leading-relaxed">
                            This is the system behind everything. It's not about cutting all foods forever. It's about building discipline and learning balance. You learn what to eat every day, what to enjoy once a week, and what to save for once a month. That's how real fat loss works.
                        </p>
</div>
</div>
</div>
<div className="mt-10 flex justify-center w-full">
<a className="block w-full md:w-auto bg-[#f5f35f] text-[#0A0A0A] font-heading font-semibold text-base uppercase tracking-wide px-12 py-4 rounded-md text-center mt-10" href="#vsl-section">
                    APPLY NOW
                </a>
</div>
</div>
</section>

<section className="bg-[#111111] py-12 md:py-20 px-5">
<div className="max-w-screen-lg mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#2A2A2A] rounded-xl overflow-hidden mt-10">

<div className="bg-[#1A1A1A] flex flex-col">
<div className="p-6 text-center border-b border-[#2A2A2A]">
<h3 className="font-heading font-semibold text-xl text-white uppercase tracking-tight">
                            WITHOUT A COACH
                        </h3>
</div>
<div className="p-5 border-b border-[#2A2A2A] flex items-start gap-4 h-full">
<iconify-icon className="text-[#FF4444] text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<p className="text-base text-[#A0A0A0]">You Google meal plans and piece together random advice from different sources</p>
</div>
<div className="p-5 border-b border-[#2A2A2A] flex items-start gap-4 h-full">
<iconify-icon className="text-[#FF4444] text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<p className="text-base text-[#A0A0A0]">You start strong on Monday and fall off by the weekend with no one to hold you accountable</p>
</div>
<div className="p-5 border-b border-[#2A2A2A] flex items-start gap-4 h-full">
<iconify-icon className="text-[#FF4444] text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<p className="text-base text-[#A0A0A0]">You cut out everything you love, feel miserable, and eventually binge</p>
</div>
<div className="p-5 border-b border-[#2A2A2A] flex items-start gap-4 h-full">
<iconify-icon className="text-[#FF4444] text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<p className="text-base text-[#A0A0A0]">You lose 10 pounds, gain it back, lose it again, gain it back, repeat the cycle for years</p>
</div>
<div className="p-5 border-b border-[#2A2A2A] flex items-start gap-4 h-full">
<iconify-icon className="text-[#FF4444] text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<p className="text-base text-[#A0A0A0]">You waste money on supplements, apps, and programs that don't account for how busy you are</p>
</div>
<div className="p-5 flex items-start gap-4 h-full">
<iconify-icon className="text-[#FF4444] text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<p className="text-base text-[#A0A0A0]">You keep telling yourself "I'll start next week" because nothing has ever worked long enough to matter</p>
</div>
</div>

<div className="bg-[#1A1A1A] flex flex-col md:border-l border-[#2A2A2A]">
<div className="p-6 text-center bg-[#f5f35f]">
<h3 className="font-heading font-semibold text-xl text-[#0A0A0A] uppercase tracking-tight">
                            WORKING WITH ME
                        </h3>
</div>
<div className="p-5 border-b border-[#f5f35f]/10 flex items-start gap-4 h-full bg-[#1A1A1A]">
<div className="bg-[#f5f35f] text-[#0A0A0A] rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<p className="text-base text-white">You get a customized plan built specifically for your body, your schedule, and your goals</p>
</div>
<div className="p-5 border-b border-[#f5f35f]/10 flex items-start gap-4 h-full bg-[#1A1A1A]">
<div className="bg-[#f5f35f] text-[#0A0A0A] rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<p className="text-base text-white">You have weekly check-ins and direct access to me so you never drift without someone pulling you back</p>
</div>
<div className="p-5 border-b border-[#f5f35f]/10 flex items-start gap-4 h-full bg-[#1A1A1A]">
<div className="bg-[#f5f35f] text-[#0A0A0A] rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<p className="text-base text-white">You learn how to eat the foods you enjoy in a balanced way that still drops weight</p>
</div>
<div className="p-5 border-b border-[#f5f35f]/10 flex items-start gap-4 h-full bg-[#1A1A1A]">
<div className="bg-[#f5f35f] text-[#0A0A0A] rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<p className="text-base text-white">You build habits and a framework that keeps the weight off permanently because it fits your actual life</p>
</div>
<div className="p-5 border-b border-[#f5f35f]/10 flex items-start gap-4 h-full bg-[#1A1A1A]">
<div className="bg-[#f5f35f] text-[#0A0A0A] rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<p className="text-base text-white">You invest once in a system designed specifically for busy men, with a coach who's been exactly where you are</p>
</div>
<div className="p-5 flex items-start gap-4 h-full bg-[#1A1A1A]">
<div className="bg-[#f5f35f] text-[#0A0A0A] rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<p className="text-base text-white">You're 15-25lbs lighter in 90 days with a clear system you can maintain for life</p>
</div>
</div>
</div>
<div className="mt-10 flex justify-center w-full">
<a className="block w-full md:w-auto bg-[#f5f35f] text-[#0A0A0A] font-heading font-semibold text-base uppercase tracking-wide px-12 py-4 rounded-md text-center mt-10" href="#vsl-section">
                    GET STARTED
                </a>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] py-12 md:py-20 px-5">
<div className="max-w-[720px] mx-auto">
<h2 className="font-heading font-semibold text-2xl md:text-4xl text-white uppercase text-center leading-tight tracking-tight mb-10">
                QUESTIONS YOU PROBABLY HAVE RIGHT NOW.
            </h2>
<div className="flex flex-col gap-3">

<details className="group bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl overflow-hidden cursor-pointer">
<summary className="p-5 flex justify-between items-center font-heading font-semibold text-base text-white uppercase tracking-wide">
                        WHAT EXACTLY IS THIS?
                        <iconify-icon className="text-[#f5f35f] text-xl group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-base text-[#A0A0A0] leading-relaxed border-t border-[#2A2A2A] pt-4">
                        This is a 90-day coaching program where I personally help busy men drop 15-25 pounds through customized nutrition, a training plan that fits your life, and weekly 1-on-1 accountability. It's not a course. It's not a PDF. It's me working with you directly to get the weight off and build habits that keep it off.
                    </div>
</details>

<details className="group bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl overflow-hidden cursor-pointer">
<summary className="p-5 flex justify-between items-center font-heading font-semibold text-base text-white uppercase tracking-wide">
                        WHO IS THIS FOR?
                        <iconify-icon className="text-[#f5f35f] text-xl group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-base text-[#A0A0A0] leading-relaxed border-t border-[#2A2A2A] pt-4">
                        This is for men who are carrying extra weight, know they need to make a change, but don't have the time or patience for complicated programs. If you've got a busy schedule and you're tired of starting over every few months, this was built for you. If you're looking for a magic pill or you're not willing to put in the work, this isn't for you.
                    </div>
</details>

<details className="group bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl overflow-hidden cursor-pointer">
<summary className="p-5 flex justify-between items-center font-heading font-semibold text-base text-white uppercase tracking-wide">
                        HOW IS THIS DIFFERENT FROM OTHER PROGRAMS I'VE TRIED?
                        <iconify-icon className="text-[#f5f35f] text-xl group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-base text-[#A0A0A0] leading-relaxed border-t border-[#2A2A2A] pt-4">
                        Most programs hand you a generic meal plan and leave you to figure it out. This is the opposite. Your nutrition plan is built around the foods you actually like. Your training matches where your body is right now. And you have me checking in with you every single week, adjusting things, keeping you on track. I've been where you are. I was out of shape. I had to figure out where I was at and where I was going. That's exactly what I help you do.
                    </div>
</details>

<details className="group bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl overflow-hidden cursor-pointer">
<summary className="p-5 flex justify-between items-center font-heading font-semibold text-base text-white uppercase tracking-wide">
                        WHAT RESULTS CAN I REALISTICALLY EXPECT?
                        <iconify-icon className="text-[#f5f35f] text-xl group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-base text-[#A0A0A0] leading-relaxed border-t border-[#2A2A2A] pt-4">
                        If you follow the plan and stay consistent, 15-25 pounds in 90 days is realistic. Some guys hit it faster. It depends on where you're starting, how dialed in you are, and how consistent you stay. But I'm not going to sit here and promise overnight results. This takes discipline. It takes showing up. And if you do that, the results come.
                    </div>
</details>

<details className="group bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl overflow-hidden cursor-pointer">
<summary className="p-5 flex justify-between items-center font-heading font-semibold text-base text-white uppercase tracking-wide">
                        DO I NEED TO SPEND HOURS COOKING OR LIVE IN THE GYM?
                        <iconify-icon className="text-[#f5f35f] text-xl group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-base text-[#A0A0A0] leading-relaxed border-t border-[#2A2A2A] pt-4">
                        No. That's the whole point. The meals I build for you are simple. We're talking egg whites, oats, avocado, grilled chicken, olive oil. Stuff you can find at Costco. Stuff that takes 10 minutes. And the training is built for real schedules. You don't need 2 hours a day. You need consistency with a smart plan.
                    </div>
</details>
</div>
<div className="mt-10 flex justify-center w-full">
<a className="block w-full md:w-auto bg-[#f5f35f] text-[#0A0A0A] font-heading font-semibold text-base uppercase tracking-wide px-12 py-4 rounded-md text-center mt-10" href="#vsl-section">
                    APPLY NOW
                </a>
</div>
</div>
</section>

<section className="bg-[#111111] py-12 md:py-20 px-5 flex flex-col items-center">
<div className="max-w-[600px] mx-auto text-center">
<p className="text-base md:text-lg text-[#A0A0A0] leading-relaxed mb-10">
<span className="text-white font-normal">90 days from now</span> you can be 15-25 pounds lighter, feeling better than you have in years, with a system you can maintain for life. Or you can keep doing what you've been doing.
            </p>
<div className="mb-10 w-full md:w-auto">
<a className="block w-full md:w-auto bg-[#f5f35f] text-[#0A0A0A] font-heading font-semibold text-base uppercase tracking-wide px-12 py-4 rounded-md text-center inline-block" href="#vsl-section">
                    APPLY NOW
                </a>
</div>
<p className="text-xs text-[#A0A0A0] mt-10">
                © 2026 Miguel De La Rosa. All rights reserved.
            </p>
</div>
</section>

    </>
  );
}
