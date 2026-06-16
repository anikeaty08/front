import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
<iconify-icon height="18" icon="solar:bone-linear" width="18"></iconify-icon>
</div>
<span className="text-xl font-medium tracking-tight text-emerald-950">LeGault Chiropractic</span>
</div>
<div className="hidden md:flex items-center gap-8 text-lg font-medium text-stone-600">
<a className="hover:text-emerald-900 transition-colors" href="#services">Services</a>
<a className="hover:text-emerald-900 transition-colors" href="#why-choose">Why Choose Us</a>
<a className="hover:text-emerald-900 transition-colors" href="#conditions">Conditions</a>
<a className="hover:text-emerald-900 transition-colors" href="#reviews">Reviews</a>
</div>
<a className="hidden md:inline-flex bg-emerald-900 text-[#FBF9F6] px-5 py-2.5 rounded-full text-base font-medium hover:bg-emerald-800 transition-all hover:scale-[1.02] shadow-lg shadow-emerald-900/10" href="#appointments">
                Schedule Online
            </a>
</div>
</nav>

<header className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

<div className="reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100/50 text-emerald-900 rounded-full text-sm font-medium mb-6 border border-emerald-200/50">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Accepting New Patients in North Hills
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-emerald-950 leading-[1.1] mb-8">
                    Gentle care for <br/> <span className="italic serif text-emerald-800">better movement.</span>
</h1>
<p className="text-xl text-stone-600 leading-relaxed max-w-lg mb-10 font-normal">
                    Trusted Pittsburgh chiropractor serving Ross Township and West View. We combine focused, gentle adjustments with evidence-informed care plans personalized to your goals.
                </p>
<div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
<a className="bg-emerald-900 text-[#FBF9F6] px-8 py-4 rounded-full text-lg font-medium hover:bg-emerald-800 transition-all hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2" href="#appointments">
                        Book Appointment
                        <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="px-8 py-4 rounded-full text-lg font-medium text-emerald-900 border border-emerald-900/10 hover:bg-emerald-50 transition-all flex items-center gap-2" href="tel:4123644100">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                        412.364.4100
                    </a>
</div>

<div className="flex flex-wrap gap-x-8 gap-y-2 text-stone-500 text-sm font-medium pt-8 border-t border-stone-200">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-700" icon="solar:verified-check-linear" width="18"></iconify-icon> Evidence-Informed
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-700" icon="solar:star-linear" width="18"></iconify-icon> 5-Star Rated
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-700" icon="solar:clock-circle-linear" width="18"></iconify-icon> Online Booking 24/7
                    </div>
</div>
</div>

<div className="relative lg:h-[600px] reveal delay-200 hidden lg:block">

<div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl">
<img alt="Chiropractic Adjustment" className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/42bb8462-52ad-42fc-b208-c234480eca73_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent"></div>
</div>

<div className="absolute top-12 -left-8 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-xl border border-white/50 animate-float max-w-xs">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
<iconify-icon icon="solar:user-hands-linear" width="18"></iconify-icon>
</div>
<div className="">
<div className="text-xs text-stone-500 font-medium">Technique</div>
<div className="text-sm font-semibold text-emerald-950">Hands-on &amp; Instrument</div>
</div>
</div>
</div>

<div className="absolute bottom-24 -right-8 bg-white/95 backdrop-blur rounded-2xl p-5 shadow-xl border border-white/50 animate-float-delayed">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full overflow-hidden bg-stone-100 flex items-center justify-center">
<iconify-icon className="text-emerald-900" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-stone-900">Personalized Plans</p>
<div className="flex text-emerald-500 mt-0.5 text-xs font-medium">
                                Fits your goals
                            </div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 mx-2 md:mx-6 bg-white rounded-[3rem] shadow-sm border border-stone-100 relative overflow-hidden" id="why-choose">
<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
<div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-stone-100 rounded-full blur-3xl"></div>
<div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-emerald-50 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto relative z-10">
<h2 className="text-4xl md:text-5xl font-medium text-emerald-950 tracking-tight mb-16 text-center max-w-3xl mx-auto reveal">
                Why Choose <br/> <span className="italic serif text-stone-400">LeGault Chiropractic?</span>
</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-[#FBF9F6]/80 backdrop-blur p-10 rounded-3xl group hover:bg-[#FBF9F6] transition-colors reveal">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-stone-600 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:user-id-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-emerald-950 mb-3 tracking-tight">Personalized Care.</h3>
<p className="text-lg text-stone-600 leading-relaxed">We don't do cookie-cutter. You get a plan based specifically on your symptoms, goals, and exam findings.</p>
</div>

<div className="bg-[#FBF9F6]/80 backdrop-blur p-10 rounded-3xl group hover:bg-[#FBF9F6] transition-colors reveal delay-100">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-stone-600 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:diploma-verified-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-emerald-950 mb-3 tracking-tight">Proven Techniques.</h3>
<p className="text-lg text-stone-600 leading-relaxed">Utilizing Diversified, Thompson, soft-tissue work, and Webster Technique for pregnancy-focused care.</p>
</div>

<div className="bg-[#FBF9F6]/80 backdrop-blur p-10 rounded-3xl group hover:bg-[#FBF9F6] transition-colors reveal delay-200">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-stone-600 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:calendar-date-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-emerald-950 mb-3 tracking-tight">Convenient.</h3>
<p className="text-lg text-stone-600 leading-relaxed">Care for adults, kids, and expectant moms. We make it easy to get started with 24/7 online booking.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="services">
<div className="max-w-6xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-4xl md:text-5xl font-medium text-emerald-950 tracking-tight mb-6">
                        Chiropractic Care in the North Hills
                    </h2>
<p className="text-xl text-stone-600 leading-relaxed mb-8">
                        Whether symptoms developed from desk work, sports, or auto injuries, our goal is to restore healthy movement and reduce stress on the spine.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
<iconify-icon icon="solar:bone-broken-linear" width="24"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-xl font-medium text-emerald-950 mb-1">Spinal Adjustments</h4>
<p className="text-stone-600">Restoring proper motion to the spine to relieve pain and improve function.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
<iconify-icon icon="solar:body-linear" width="24"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-xl font-medium text-emerald-950 mb-1">Soft Tissue &amp; Mobility</h4>
<p className="text-stone-600">Including Graston / Instrument-assisted techniques to address muscle tightness.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
<iconify-icon icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-xl font-medium text-emerald-950 mb-1">Prenatal Care</h4>
<p className="text-stone-600">Webster Technique certified care to support pregnancy discomfort and baby positioning.</p>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xl reveal delay-100 relative">
<img alt="Consultation" className="opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/169bfb0b-82ef-4468-a6ee-45f04e82d26a_1600w.jpg"/>
<div className="bg-white/95 border-stone-100 border-t pt-6 pr-6 pb-6 pl-6 absolute right-0 bottom-0 left-0 backdrop-blur-md">
<div className="font-medium text-emerald-950 mb-2">Also specializing in:</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-stone-100 rounded-full text-sm text-stone-600">Sports Injuries</span>
<span className="px-3 py-1 bg-stone-100 rounded-full text-sm text-stone-600">Auto Accidents</span>
<span className="px-3 py-1 bg-stone-100 rounded-full text-sm text-stone-600">Sciatica</span>
<span className="px-3 py-1 bg-stone-100 rounded-full text-sm text-stone-600">Wellness Care</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 mx-2 md:mx-6 bg-gradient-to-br from-emerald-50 to-[#FBF9F6] rounded-[3rem] border border-stone-100" id="conditions">
<div className="max-w-5xl mx-auto text-center reveal">
<h2 className="text-4xl font-medium text-emerald-950 tracking-tight mb-4">Conditions We Commonly Treat</h2>
<p className="text-lg text-stone-600 mb-12 max-w-2xl mx-auto">We help patients restoring healthy movement and reducing stress on the spine and joints.</p>
<div className="flex flex-wrap justify-center gap-4 mb-12">
<span className="px-6 py-3 rounded-full bg-white border border-stone-200 text-lg text-stone-700 hover:border-emerald-500 hover:text-emerald-900 transition-colors cursor-default shadow-sm">Back Pain</span>
<span className="px-6 py-3 rounded-full bg-white border border-stone-200 text-lg text-stone-700 hover:border-emerald-500 hover:text-emerald-900 transition-colors cursor-default shadow-sm">Neck Pain</span>
<span className="px-6 py-3 rounded-full bg-white border border-stone-200 text-lg text-stone-700 hover:border-emerald-500 hover:text-emerald-900 transition-colors cursor-default shadow-sm">Sciatica</span>
<span className="px-6 py-3 rounded-full bg-white border border-stone-200 text-lg text-stone-700 hover:border-emerald-500 hover:text-emerald-900 transition-colors cursor-default shadow-sm">Headaches</span>
<span className="px-6 py-3 rounded-full bg-white border border-stone-200 text-lg text-stone-700 hover:border-emerald-500 hover:text-emerald-900 transition-colors cursor-default shadow-sm">Joint Pain</span>
<span className="px-6 py-3 rounded-full bg-white border border-stone-200 text-lg text-stone-700 hover:border-emerald-500 hover:text-emerald-900 transition-colors cursor-default shadow-sm">Pregnancy Discomfort</span>
</div>
<a className="inline-flex items-center gap-2 text-emerald-900 font-medium text-lg hover:underline underline-offset-4 decoration-emerald-500" href="#appointments">
                Not sure if we can help? Book a consultation 
                <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-stone-200" id="reviews">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl font-medium text-emerald-950 tracking-tight mb-4">What Our Patients Are Saying</h2>
<div className="flex justify-center gap-1 text-emerald-500">
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
</div>
<p className="text-stone-500 mt-2 font-medium">Trusted by the community</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-[#FBF9F6] p-10 rounded-3xl border border-stone-100 shadow-sm reveal hover:shadow-lg transition-shadow">
<p className="text-xl text-stone-700 leading-relaxed mb-6 italic">
                        "I was new to chiropractic, but LeGault made it easy. The plan was clear, the care was gentle, and I finally have relief from my back pain."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-800 font-bold font-serif">P</div>
<div className="text-sm font-medium text-emerald-950">Patient Review</div>
</div>
</div>

<div className="bg-[#FBF9F6] p-10 rounded-3xl border border-stone-100 shadow-sm reveal delay-100 hover:shadow-lg transition-shadow">
<p className="text-xl text-stone-700 leading-relaxed mb-6 italic">
                        "Great for pregnancy care. The Webster technique really helped with my discomfort. Highly recommend for any expectant mothers."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-800 font-bold font-serif">S</div>
<div className="text-sm font-medium text-emerald-950">Patient Review</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#FBF9F6]" id="appointments">
<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
<div className="reveal">
<h2 className="text-5xl md:text-6xl font-medium text-emerald-950 tracking-tight mb-6 leading-tight">
                    Ready to feel better?
                </h2>
<p className="text-xl text-stone-600 mb-10 leading-relaxed">
                    Schedule your chiropractic appointment online 24/7 or call us today. We look forward to helping you reach your health goals.
                </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-emerald-900 mt-1">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-emerald-950 text-lg">Location</h4>
<p className="text-stone-600">120 Three Degree Rd, Suite C<br/>Pittsburgh, PA 15237</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-emerald-900 mt-1">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-emerald-950 text-lg">Contact</h4>
<a className="text-stone-600 hover:text-emerald-900 transition-colors" href="tel:4123644100">412.364.4100</a>
</div>
</div>
</div>
</div>
<div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-100 shadow-xl reveal delay-100 relative">
<div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-100 rounded-full blur-2xl opacity-60"></div>
<div className="text-center space-y-6 relative z-10">
<h3 className="text-2xl font-medium text-emerald-950">New Patient?</h3>
<p className="text-stone-600">We make it easy to get started. Book your initial exam and consultation online.</p>
<button className="w-full bg-emerald-900 text-white font-medium text-lg py-4 rounded-xl hover:bg-emerald-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 transform flex items-center justify-center gap-2">
                        Schedule Online Now
                        <iconify-icon icon="solar:calendar-add-linear" width="20"></iconify-icon>
</button>
<p className="text-sm text-stone-400">Secure online booking via our patient portal</p>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-stone-200 bg-white">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-center md:text-left">
<div className="flex items-center gap-2 justify-center md:justify-start mb-2">
<iconify-icon className="text-emerald-900" icon="solar:bone-linear" width="20"></iconify-icon>
<span className="font-medium tracking-tight text-emerald-950">LeGault Chiropractic</span>
</div>
<p className="text-stone-500 text-sm">Serving Ross Township, West View, Ben Avon, and Ohio Township.</p>
</div>
<div className="flex gap-6 text-stone-400">
<a className="hover:text-emerald-900 transition-colors" href="#"><iconify-icon icon="brandico:facebook-rect" width="20"></iconify-icon></a>
<a className="hover:text-emerald-900 transition-colors" href="#"><iconify-icon icon="brandico:instagram" width="20"></iconify-icon></a>
<a className="hover:text-emerald-900 transition-colors" href="#"><iconify-icon icon="brandico:twitter-bird" width="20"></iconify-icon></a>
<a className="hover:text-emerald-900 transition-colors" href="#"><iconify-icon icon="brandico:linkedin-rect" width="20"></iconify-icon></a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-stone-100 text-center text-stone-400 text-xs">
<p>© 2024 LeGault Chiropractic. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
