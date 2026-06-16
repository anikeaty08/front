import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Icons
        lucide.createIcons();

        // Reveal Animation on Scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-[#FBF9F6]/80 backdrop-blur-md border-b border-stone-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-emerald-900 rounded-full flex items-center justify-center text-white">
<i className="w-4 h-4" data-lucide="leaf"></i>
</div>
<span className="text-xl font-medium tracking-tight text-emerald-950">Nirva</span>
</div>
<div className="hidden md:flex items-center gap-8 text-lg font-medium text-stone-600">
<a className="hover:text-emerald-900 transition-colors" href="#problem">The Problem</a>
<a className="hover:text-emerald-900 transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-emerald-900 transition-colors" href="#outcomes">Results</a>
<a className="hover:text-emerald-900 transition-colors" href="#stories">Stories</a>
</div>
<a className="hidden md:inline-flex bg-emerald-900 text-[#FBF9F6] px-5 py-2.5 rounded-full text-base font-medium hover:bg-emerald-800 transition-all hover:scale-[1.02] shadow-lg shadow-emerald-900/10" href="#consultation">
                Book Consultation
            </a>
</div>
</nav>

<header className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

<div className="reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100/50 text-emerald-900 rounded-full text-sm font-medium mb-6 border border-emerald-200/50">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Now accepting new members for Fall
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-emerald-950 leading-[1.1] mb-8">
                    When medication <br/> isn't enough.
                </h1>
<p className="text-xl text-stone-600 leading-relaxed max-w-lg mb-10 font-normal">
                    Lifestyle medicine that works <span className="italic serif text-emerald-800 font-medium">with</span> your doctor. 87% of members see symptoms improve in 3 weeks.
                </p>
<div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
<a className="bg-emerald-900 text-[#FBF9F6] px-8 py-4 rounded-full text-lg font-medium hover:bg-emerald-800 transition-all hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2" href="#consultation">
                        Book Free Consultation
                        <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
<div className="flex items-center gap-4 px-6 py-4">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#FBF9F6]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#FBF9F6]" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#FBF9F6]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div className="text-sm font-medium text-stone-600">
<span className="text-emerald-900 font-bold">50k+</span> members
                        </div>
</div>
</div>

<div className="flex flex-wrap gap-x-8 gap-y-2 text-stone-500 text-sm font-medium pt-8 border-t border-stone-200">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-700" data-lucide="check-circle"></i> CQC Registered
                    </div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-700 fill-emerald-700" data-lucide="star"></i> 4.9/5 Average Rating
                    </div>
</div>
</div>

<div className="relative lg:h-[600px] reveal delay-200 hidden lg:block">

<div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl">
<img alt="Doctor and patient consultation" className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent"></div>
</div>

<div className="absolute top-12 -left-8 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-xl border border-white/50 animate-float max-w-xs">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700">
<i className="w-4 h-4" data-lucide="activity"></i>
</div>
<div>
<div className="text-xs text-stone-500 font-medium">Daily Energy</div>
<div className="text-sm font-semibold text-emerald-950">Consistent Levels</div>
</div>
</div>
<div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[85%] rounded-full"></div>
</div>
</div>

<div className="absolute bottom-24 -right-8 bg-white/95 backdrop-blur rounded-2xl p-5 shadow-xl border border-white/50 animate-float-delayed">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<p className="text-sm font-medium text-stone-900">"Finally off my meds."</p>
<div className="flex text-emerald-500 mt-0.5">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 mx-2 md:mx-6 bg-white rounded-[3rem] shadow-sm border border-stone-100 relative overflow-hidden" id="problem">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
<div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-stone-100 rounded-full blur-3xl"></div>
<div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-emerald-50 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto relative z-10">
<h2 className="text-4xl md:text-5xl font-medium text-emerald-950 tracking-tight mb-16 text-center max-w-3xl mx-auto reveal">
                You've done everything right. <br/> <span className="italic serif text-stone-400">So why do you still feel this way?</span>
</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-[#FBF9F6]/80 backdrop-blur p-10 rounded-3xl group hover:bg-[#FBF9F6] transition-colors reveal">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-stone-600 shadow-sm group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="stethoscope"></i>
</div>
<h3 className="text-2xl font-medium text-emerald-950 mb-3 tracking-tight">Doctor treats the diagnosis.</h3>
<p className="text-lg text-stone-600 leading-relaxed">But no one addresses the 23 hours between appointments where health actually happens.</p>
</div>

<div className="bg-[#FBF9F6]/80 backdrop-blur p-10 rounded-3xl group hover:bg-[#FBF9F6] transition-colors reveal delay-100">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-stone-600 shadow-sm group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="pill"></i>
</div>
<h3 className="text-2xl font-medium text-emerald-950 mb-3 tracking-tight">Meds manage symptoms.</h3>
<p className="text-lg text-stone-600 leading-relaxed">They mask the alarm bells without fixing the fire causing them.</p>
</div>

<div className="bg-[#FBF9F6]/80 backdrop-blur p-10 rounded-3xl group hover:bg-[#FBF9F6] transition-colors reveal delay-200">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-stone-600 shadow-sm group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="heart-crack"></i>
</div>
<h3 className="text-2xl font-medium text-emerald-950 mb-3 tracking-tight">You're not failing.</h3>
<p className="text-lg text-stone-600 leading-relaxed">The system wasn't designed for chronic lifestyle conditions. We are.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-6xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-4xl md:text-5xl font-medium text-emerald-950 tracking-tight mb-6">
                        The missing prescription
                    </h2>
<p className="text-xl text-stone-600 leading-relaxed mb-8">
                        Your GP handles medicine. We handle everything else—nutrition, movement, sleep, stress—so treatment actually sticks.
                    </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4">
<img alt="Healthy Food" className="w-20 h-20 rounded-2xl object-cover shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="flex-1">
<h4 className="font-medium text-emerald-950">Nutritional Therapy</h4>
<p className="text-sm text-stone-500">Food as medicine, not just fuel.</p>
</div>
</div>
<div className="flex items-center gap-4">
<img alt="Movement" className="w-20 h-20 rounded-2xl object-cover shadow-sm" src="https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div className="flex-1">
<h4 className="font-medium text-emerald-950">Movement Protocols</h4>
<p className="text-sm text-stone-500">Sustainable activity for your body type.</p>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xl reveal delay-100 transform rotate-1 hover:rotate-0 transition-transform duration-500">
<div className="grid grid-cols-2 text-lg text-center font-medium border-b border-stone-100">
<div className="py-6 text-stone-400 bg-stone-50/50">Standard Care</div>
<div className="py-6 text-emerald-900 bg-emerald-50/30 font-semibold">+ Nirva</div>
</div>
<div className="divide-y divide-stone-100">
<div className="grid grid-cols-2 py-5 px-6 items-center group hover:bg-stone-50 transition-colors">
<div className="text-stone-500 text-sm md:text-base">Treats symptoms</div>
<div className="text-emerald-900 font-medium flex items-center gap-2 text-sm md:text-base">
<i className="w-5 h-5 text-emerald-600" data-lucide="check-circle-2"></i>
                                Root causes
                            </div>
</div>
<div className="grid grid-cols-2 py-5 px-6 items-center group hover:bg-stone-50 transition-colors">
<div className="text-stone-500 text-sm md:text-base">10-min appointment</div>
<div className="text-emerald-900 font-medium flex items-center gap-2 text-sm md:text-base">
<i className="w-5 h-5 text-emerald-600" data-lucide="check-circle-2"></i>
                                Daily support
                            </div>
</div>
<div className="grid grid-cols-2 py-5 px-6 items-center group hover:bg-stone-50 transition-colors">
<div className="text-stone-500 text-sm md:text-base">Generic advice</div>
<div className="text-emerald-900 font-medium flex items-center gap-2 text-sm md:text-base">
<i className="w-5 h-5 text-emerald-600" data-lucide="check-circle-2"></i>
                                Personalised data
                            </div>
</div>
<div className="grid grid-cols-2 py-5 px-6 items-center group hover:bg-stone-50 transition-colors">
<div className="text-stone-500 text-sm md:text-base">Solo journey</div>
<div className="text-emerald-900 font-medium flex items-center gap-2 text-sm md:text-base">
<i className="w-5 h-5 text-emerald-600" data-lucide="check-circle-2"></i>
                                Expert team
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 mx-2 md:mx-6 rounded-[3rem] relative overflow-hidden" id="how-it-works">

<div className="absolute inset-0">
<img alt="Background" className="w-full h-full object-cover grayscale brightness-[0.25]" src="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-emerald-950/80 mix-blend-multiply"></div>
</div>
<div className="max-w-7xl mx-auto relative z-10 text-[#FBF9F6]">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-20 text-center reveal">From stuck to in control</h2>
<div className="grid md:grid-cols-4 gap-12 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-white/10 z-0"></div>

<div className="relative z-10 reveal delay-100">
<div className="w-12 h-12 bg-white text-emerald-900 rounded-full flex items-center justify-center font-serif text-xl font-medium mb-6 shadow-[0_0_20px_rgba(255,255,255,0.2)]">1</div>
<h3 className="text-2xl font-medium mb-4">Map</h3>
<p className="text-lg text-emerald-100/70 leading-relaxed">
                        We assess your patterns—digestion, hormones, energy, sleep—before recommending anything.
                    </p>
</div>

<div className="relative z-10 reveal delay-200">
<div className="w-12 h-12 bg-emerald-800 border border-emerald-600 text-emerald-100 rounded-full flex items-center justify-center font-serif text-xl font-medium mb-6">2</div>
<h3 className="text-2xl font-medium mb-4">Plan</h3>
<p className="text-lg text-emerald-100/70 leading-relaxed">
                        Your protocol is built around <span className="italic text-white">your</span> biology. Evidence-based. Personalised. Practical.
                    </p>
</div>

<div className="relative z-10 reveal delay-300">
<div className="w-12 h-12 bg-emerald-800 border border-emerald-600 text-emerald-100 rounded-full flex items-center justify-center font-serif text-xl font-medium mb-6">3</div>
<h3 className="text-2xl font-medium mb-4">Support</h3>
<p className="text-lg text-emerald-100/70 leading-relaxed">
                        Daily guidance through our app. Weekly check-ins. A human team that actually responds.
                    </p>
</div>

<div className="relative z-10 reveal delay-400">
<div className="w-12 h-12 bg-emerald-800 border border-emerald-600 text-emerald-100 rounded-full flex items-center justify-center font-serif text-xl font-medium mb-6">4</div>
<h3 className="text-2xl font-medium mb-4">Progress</h3>
<p className="text-lg text-emerald-100/70 leading-relaxed">
                        Track what's working. Adjust what isn't. See measurable change in weeks, not years.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="outcomes">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl md:text-5xl font-medium text-emerald-950 tracking-tight mb-16 reveal">Results you can measure</h2>
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative reveal order-2 lg:order-1">
<div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
<img alt="Meditation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>

<div className="absolute -bottom-8 -right-8 bg-[#FBF9F6] p-8 rounded-2xl shadow-xl border border-stone-200 hidden md:block animate-float">
<div className="flex items-center gap-4 mb-4">
<div className="bg-emerald-100 p-2 rounded-lg text-emerald-900">
<i className="w-6 h-6" data-lucide="trending-up"></i>
</div>
<div>
<div className="text-sm text-stone-500">Member Success</div>
<div className="font-semibold text-emerald-950 text-lg">Consistent Growth</div>
</div>
</div>
<div className="flex gap-2 items-end h-16 w-48">
<div className="w-1/5 bg-emerald-200 rounded-t h-[40%]"></div>
<div className="w-1/5 bg-emerald-300 rounded-t h-[60%]"></div>
<div className="w-1/5 bg-emerald-400 rounded-t h-[50%]"></div>
<div className="w-1/5 bg-emerald-500 rounded-t h-[80%]"></div>
<div className="w-1/5 bg-emerald-600 rounded-t h-[100%]"></div>
</div>
</div>
</div>

<div className="space-y-12 order-1 lg:order-2 reveal delay-100">
<div className="border-l-2 border-emerald-900/20 pl-8 hover:border-emerald-900 transition-colors duration-300 cursor-default">
<div className="text-7xl font-serif text-emerald-900 mb-2">87%</div>
<p className="text-xl text-stone-600 font-medium">report improved symptoms in 3 weeks</p>
</div>
<div className="border-l-2 border-emerald-900/20 pl-8 hover:border-emerald-900 transition-colors duration-300 cursor-default">
<div className="text-7xl font-serif text-emerald-900 mb-2">70%</div>
<p className="text-xl text-stone-600 font-medium">reduce medication reliance within 6 months</p>
</div>
<div className="border-l-2 border-emerald-900/20 pl-8 hover:border-emerald-900 transition-colors duration-300 cursor-default">
<div className="text-7xl font-serif text-emerald-900 mb-2">94%</div>
<p className="text-xl text-stone-600 font-medium">say it's worth the investment</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-stone-200">
<div className="max-w-5xl mx-auto text-center reveal">
<h2 className="text-4xl font-medium text-emerald-950 tracking-tight mb-12">We help when these won't shift</h2>
<div className="flex flex-wrap justify-center gap-4 mb-12">
<span className="px-6 py-3 rounded-full bg-stone-50 border border-stone-200 text-lg text-stone-700 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-900 transition-colors cursor-default">Digestive issues (IBS)</span>
<span className="px-6 py-3 rounded-full bg-stone-50 border border-stone-200 text-lg text-stone-700 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-900 transition-colors cursor-default">Chronic fatigue</span>
<span className="px-6 py-3 rounded-full bg-stone-50 border border-stone-200 text-lg text-stone-700 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-900 transition-colors cursor-default">Hormonal imbalances</span>
<span className="px-6 py-3 rounded-full bg-stone-50 border border-stone-200 text-lg text-stone-700 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-900 transition-colors cursor-default">Metabolic conditions</span>
<span className="px-6 py-3 rounded-full bg-stone-50 border border-stone-200 text-lg text-stone-700 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-900 transition-colors cursor-default">Sleep disruption</span>
</div>
<a className="inline-flex items-center gap-2 text-emerald-900 font-medium text-lg hover:underline underline-offset-4 decoration-emerald-500" href="#consultation">
                Not sure if we can help? Book a free consultation 
                <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<section className="py-24 px-6" id="stories">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl font-medium text-emerald-950 tracking-tight mb-16 text-center reveal">Real lives, reclaimed</h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white p-10 rounded-3xl border border-stone-100 shadow-sm reveal hover:shadow-lg transition-shadow">
<div className="flex items-center justify-between mb-8">
<img alt="User" className="w-16 h-16 rounded-full object-cover border border-stone-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="flex text-emerald-500">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
</div>
<p className="text-xl text-stone-700 leading-relaxed mb-6 italic">
                        "I joined Nirva last year—one of the best decisions I've made. Diet, exercise, knowing how to use everything together. In one word? Road to good health."
                    </p>
<div>
<div className="font-serif font-medium text-lg text-emerald-950">Judith P.</div>
<div className="text-sm text-stone-500">Member since 2023</div>
</div>
</div>

<div className="bg-white p-10 rounded-3xl border border-stone-100 shadow-sm reveal delay-100 hover:shadow-lg transition-shadow">
<div className="flex items-center justify-between mb-8">
<img alt="User" className="w-16 h-16 rounded-full object-cover border border-stone-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="flex text-emerald-500">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
</div>
<p className="text-xl text-stone-700 leading-relaxed mb-6 italic">
                        "I wanted something that looked at the whole picture, not just isolated symptoms. Nirva offered exactly that. I feel heard for the first time."
                    </p>
<div>
<div className="font-serif font-medium text-lg text-emerald-950">Kiran R.</div>
<div className="text-sm text-stone-500">Program Graduate</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 mx-2 md:mx-6 bg-gradient-to-br from-emerald-50 to-[#FBF9F6] rounded-[3rem] border border-stone-100">
<div className="max-w-5xl mx-auto">
<h2 className="text-4xl font-medium text-emerald-950 tracking-tight mb-12 text-center reveal">Everything you need. <br/><span className="text-stone-400 font-normal serif italic">Nothing you don't.</span></h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal delay-100">
<div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-emerald-100/50 hover:-translate-y-1 transition-transform">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700"><i className="w-5 h-5" data-lucide="video"></i></div>
<span className="text-lg text-stone-700">GP-led workshops</span>
</div>
<div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-emerald-100/50 hover:-translate-y-1 transition-transform">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700"><i className="w-5 h-5" data-lucide="flower-2"></i></div>
<span className="text-lg text-stone-700">Weekly yoga sessions</span>
</div>
<div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-emerald-100/50 hover:-translate-y-1 transition-transform">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700"><i className="w-5 h-5" data-lucide="file-text"></i></div>
<span className="text-lg text-stone-700">Personalised protocols</span>
</div>
<div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-emerald-100/50 hover:-translate-y-1 transition-transform">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700"><i className="w-5 h-5" data-lucide="smartphone"></i></div>
<span className="text-lg text-stone-700">Nirva app access</span>
</div>
<div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-emerald-100/50 hover:-translate-y-1 transition-transform">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700"><i className="w-5 h-5" data-lucide="users"></i></div>
<span className="text-lg text-stone-700">Community support</span>
</div>
<div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-emerald-100/50 hover:-translate-y-1 transition-transform">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700"><i className="w-5 h-5" data-lucide="message-circle"></i></div>
<span className="text-lg text-stone-700">Direct team messaging</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-stone-200" id="consultation">
<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
<div className="reveal">
<h2 className="text-5xl md:text-6xl font-medium text-emerald-950 tracking-tight mb-6 leading-tight">
                    Ready to feel the difference?
                </h2>
<p className="text-xl text-stone-600 mb-10 leading-relaxed">
                    Free 30-minute consultation. No obligation. Just clarity on your next steps to health.
                </p>
<div className="flex items-center gap-4 text-stone-500 bg-[#FBF9F6] p-4 rounded-xl border border-stone-100 w-fit">
<div className="flex -space-x-3 overflow-hidden">
<img alt="Member" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Member" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-200 flex items-center justify-center text-emerald-800 text-xs font-bold">+2k</div>
</div>
<span className="text-sm font-medium">Join 50,000+ members</span>
</div>
</div>
<div className="bg-[#FBF9F6] p-8 md:p-10 rounded-3xl border border-stone-100 shadow-xl reveal delay-100 relative">
<div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-100 rounded-full blur-2xl opacity-60"></div>
<form className="space-y-5 relative z-10">
<div className="grid md:grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-sm font-medium text-stone-500 ml-1">First Name</label>
<input className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-900/10 focus:border-emerald-900 transition-all placeholder:text-stone-300" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-500 ml-1">Last Name</label>
<input className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-900/10 focus:border-emerald-900 transition-all placeholder:text-stone-300" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-500 ml-1">Email</label>
<input className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-900/10 focus:border-emerald-900 transition-all placeholder:text-stone-300" placeholder="jane@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-500 ml-1">Primary Health Concern</label>
<div className="relative">
<select className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-900/10 focus:border-emerald-900 transition-all text-stone-600 appearance-none">
<option>Select a concern...</option>
<option>Digestive Issues</option>
<option>Fatigue / Energy</option>
<option>Hormonal Imbalance</option>
<option>Weight / Metabolic</option>
<option>Other</option>
</select>
<i className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<button className="w-full bg-emerald-900 text-white font-medium text-lg py-4 rounded-xl mt-4 hover:bg-emerald-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 transform" type="button">
                        Book Your Free Consultation
                    </button>
<p className="text-center text-sm text-stone-400 mt-4 flex items-center justify-center gap-2">
<i className="w-3 h-3" data-lucide="lock"></i> Secure &amp; Confidential
                    </p>
</form>
</div>
</div>
</section>

<footer className="py-12 text-center text-stone-400 text-sm border-t border-stone-200 bg-[#FBF9F6]">
<div className="mb-8">
<i className="w-6 h-6 mx-auto text-emerald-900 mb-2" data-lucide="leaf"></i>
</div>
<p className="font-medium tracking-wide text-stone-500 mb-4">NIRVA</p>
<p>Lifestyle medicine. Evidence-based. Human-led.</p>
<p className="mt-8">© 2024 Nirva Health. All rights reserved.</p>
</footer>


    </>
  );
}
