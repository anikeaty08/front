import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- Icons ---
        lucide.createIcons();

        // --- Intersection Observer ---
        const observerOptions = { threshold: 0.1, rootMargin: "0px" };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, observerOptions);
        document.querySelectorAll('.reveal-element').forEach(el => observer.observe(el));

        // --- Flashlight Effect ---
        document.addEventListener('mousemove', (e) => {
            document.querySelectorAll('.flashlight-card').forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // --- Process Tabs Logic ---
        let currentStep = 1;
        let autoPlayInterval;

        function setStep(step) {
            currentStep = step;
            
            // Reset Active States
            document.querySelectorAll('.process-step').forEach(el => el.classList.remove('active'));
            document.querySelectorAll('.process-image').forEach(el => el.classList.remove('active'));
            
            // Set Active State
            document.getElementById(`step-btn-${step}`).classList.add('active');
            document.getElementById(`step-img-${step}`).classList.add('active');
            
            // Reset Timer on manual interaction
            resetAutoPlay();
        }

        function nextStep() {
            currentStep = currentStep >= 4 ? 1 : currentStep + 1;
            setStep(currentStep);
        }

        function resetAutoPlay() {
            clearInterval(autoPlayInterval);
            autoPlayInterval = setInterval(nextStep, 5000); // Change image every 5 seconds
        }

        // Start Auto Play
        resetAutoPlay();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-100 bg-white/80 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-bold tracking-tight flex items-center gap-2 text-slate-900" href="#">
<i className="text-blue-600 fill-blue-100 w-6 h-6" data-lucide="smile"></i>
<span className="tracking-tighter">LUXO <span className="text-blue-600">DENTAL</span></span>
</a>
<div className="hidden md:flex gap-8 text-sm text-slate-500 font-medium">
<a className="hover:text-blue-600 transition-colors" href="#why-luxo">Why Luxo</a>
<a className="hover:text-blue-600 transition-colors" href="#how-it-works">Process</a>
<a className="hover:text-blue-600 transition-colors" href="#advanced-care">Technology</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors" href="tel:+1234567890">(800) 123-4567</a>
<div className="btn-beam-wrapper group">
<button className="relative bg-blue-600 text-white text-sm font-medium py-2 px-5 rounded-full overflow-hidden transition-all hover:shadow-lg hover:bg-blue-700 hover:-translate-y-0.5">
                        Book Appointment
                    </button>
</div>
</div>
</div>
</nav>

<header className="relative min-h-[95vh] flex flex-col items-center justify-center pt-20 overflow-hidden bg-white">

<div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),rgba(255,255,255,0)_50%)]"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl opacity-60"></div>
<div className="absolute bottom-20 left-10 w-[300px] h-[300px] bg-indigo-50/50 rounded-full blur-3xl opacity-60"></div>

<div className="absolute inset-0 pointer-events-none overflow-hidden max-w-7xl mx-auto">

<div className="absolute top-1/4 left-[5%] md:left-[10%] w-20 h-20 md:w-24 md:h-24 rounded-2xl glass-3d flex items-center justify-center float-1 z-0 opacity-80">
<i className="w-8 h-8 md:w-10 md:h-10 text-blue-500 drop-shadow-md" data-lucide="gem"></i>
</div>

<div className="absolute bottom-1/3 right-[5%] md:right-[12%] w-48 h-auto p-4 rounded-xl glass-3d float-2 z-0 hidden md:block">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<i className="w-4 h-4" data-lucide="calendar"></i>
</div>
<div>
<div className="h-2 w-16 bg-slate-200 rounded mb-1"></div>
<div className="h-1.5 w-10 bg-slate-100 rounded"></div>
</div>
</div>
<div className="flex gap-1">
<div className="h-6 w-full bg-blue-500/10 rounded-md"></div>
</div>
</div>

<div className="absolute top-[15%] right-[15%] w-12 h-12 rounded-full border border-blue-100 bg-white/30 backdrop-blur-sm float-3 flex items-center justify-center">
<div className="w-4 h-4 rounded-full bg-blue-400"></div>
</div>

<div className="absolute bottom-[20%] left-[15%] w-16 h-16 rounded-xl glass-3d float-2 flex items-center justify-center -rotate-12">
<i className="w-8 h-8 text-indigo-500" data-lucide="shield-check"></i>
</div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-10">

<div className="reveal-element inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-100 bg-white shadow-sm text-xs font-semibold text-blue-600 mb-8 hover:scale-105 transition-transform cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Mobile Dentistry Reimagined
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 leading-[1.05] text-slate-900">
                Concierge dental care, <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">delivered to your door.</span>
</h1>
<p className="reveal-element text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Experience the ultimate in-home convenience. Professional, discreet, and tailored specifically for adults &amp; seniors.
            </p>
<div className="reveal-element flex flex-col sm:flex-row items-center justify-center gap-4">
<div className="btn-beam-wrapper group cursor-pointer w-full sm:w-auto">
<button className="w-full sm:w-auto relative bg-slate-900 text-white text-sm font-medium py-3 px-8 rounded-full overflow-hidden hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                        Schedule a Visit <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<button className="w-full sm:w-auto text-slate-500 hover:text-blue-600 text-sm font-medium py-3 px-6 transition-colors flex items-center justify-center gap-2 border border-slate-200 rounded-full hover:border-blue-200 hover:bg-white bg-white/50 backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="play-circle"></i> How it Works
                </button>
</div>

<div className="mt-16 reveal-element pt-8 border-t border-slate-100/50 flex flex-wrap justify-center gap-8 text-slate-400 grayscale opacity-70">
<div className="flex items-center gap-2"><i className="w-5 h-5" data-lucide="shield-check"></i><span className="font-semibold text-sm">HIPAA Compliant</span></div>
<div className="flex items-center gap-2"><i className="w-5 h-5" data-lucide="award"></i><span className="font-semibold text-sm">Licensed Professionals</span></div>
<div className="flex items-center gap-2"><i className="w-5 h-5" data-lucide="star"></i><span className="font-semibold text-sm">5-Star Rated</span></div>
</div>
</div>
</header>

<section className="py-24 bg-slate-50 relative" id="why-luxo">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 reveal-element">Why Luxo Mobile Dental?</h2>
<p className="text-slate-500 max-w-xl mx-auto reveal-element">
                    We bring the dental office to your living room, combining state-of-the-art technology with the comfort of home.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="flashlight-card p-8 rounded-2xl flex flex-col items-start gap-4 reveal-element md:col-span-2 lg:col-span-1">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2 ring-1 ring-blue-100">
<i className="w-6 h-6" data-lucide="home"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900">In-Home Convenience</h3>
<p className="text-slate-500 leading-relaxed text-sm">
                        Skip the traffic and the waiting room. We set up in your preferred space, making dental care effortless and stress-free.
                    </p>
</div>

<div className="flashlight-card p-8 rounded-2xl flex flex-col items-start gap-4 reveal-element">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2 ring-1 ring-blue-100">
<i className="w-6 h-6" data-lucide="crown"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900">Concierge Service</h3>
<p className="text-slate-500 leading-relaxed text-sm">
                        Personalized care plans managed by a dedicated team. We handle all coordination so you can focus on your health.
                    </p>
</div>

<div className="flashlight-card p-8 rounded-2xl flex flex-col items-start gap-4 reveal-element">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2 ring-1 ring-blue-100">
<i className="w-6 h-6" data-lucide="lock"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900">Discreet &amp; Private</h3>
<p className="text-slate-500 leading-relaxed text-sm">
                        Your privacy is paramount. Our unmarked vehicles and professional staff ensure a discreet experience every time.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="how-it-works">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16">
<span className="text-blue-600 font-semibold tracking-wider text-xs uppercase mb-2 block">The Experience</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Seamless care, step by step.</h2>
</div>
<div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

<div className="w-full lg:w-1/3 flex flex-col gap-2 relative">

<div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-100 hidden lg:block"></div>

<div className="process-step group cursor-pointer relative p-4 rounded-xl border border-transparent hover:bg-slate-50 active" id="step-btn-1" onclick="setStep(1)">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-l-xl opacity-0 step-indicator transition-opacity"></div>
<div className="flex gap-4">
<div className="step-icon w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-500 flex items-center justify-center text-sm font-semibold relative z-10 transition-colors">
                                01
                            </div>
<div className="flex flex-col pt-2">
<h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">Digital Booking</h3>
<p className="text-slate-500 text-sm leading-relaxed">Book effortlessly via our app or phone. We coordinate with your schedule immediately.</p>
</div>
</div>
</div>

<div className="process-step group cursor-pointer relative p-4 rounded-xl border border-transparent hover:bg-slate-50" id="step-btn-2" onclick="setStep(2)">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-l-xl opacity-0 step-indicator transition-opacity"></div>
<div className="flex gap-4">
<div className="step-icon w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-500 flex items-center justify-center text-sm font-semibold relative z-10 transition-colors">
                                02
                            </div>
<div className="flex flex-col pt-2">
<h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">We Come to You</h3>
<p className="text-slate-500 text-sm leading-relaxed">Our discreet mobile unit arrives. No waiting rooms, no travel time required.</p>
</div>
</div>
</div>

<div className="process-step group cursor-pointer relative p-4 rounded-xl border border-transparent hover:bg-slate-50" id="step-btn-3" onclick="setStep(3)">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-l-xl opacity-0 step-indicator transition-opacity"></div>
<div className="flex gap-4">
<div className="step-icon w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-500 flex items-center justify-center text-sm font-semibold relative z-10 transition-colors">
                                03
                            </div>
<div className="flex flex-col pt-2">
<h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">Full Setup &amp; Care</h3>
<p className="text-slate-500 text-sm leading-relaxed">We transform your space with portable, advanced equipment for complete care.</p>
</div>
</div>
</div>

<div className="process-step group cursor-pointer relative p-4 rounded-xl border border-transparent hover:bg-slate-50" id="step-btn-4" onclick="setStep(4)">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-l-xl opacity-0 step-indicator transition-opacity"></div>
<div className="flex gap-4">
<div className="step-icon w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-500 flex items-center justify-center text-sm font-semibold relative z-10 transition-colors">
                                04
                            </div>
<div className="flex flex-col pt-2">
<h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">Instant Results</h3>
<p className="text-slate-500 text-sm leading-relaxed">Walk away with a brighter smile immediately. All billing is handled digitally.</p>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-2/3 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-slate-100 ring-1 ring-slate-200 shadow-xl">

<div className="absolute top-0 left-0 right-0 h-10 bg-white/90 backdrop-blur z-20 border-b border-slate-200 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-amber-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
<div className="mx-auto text-[10px] font-medium text-slate-400">luxodental.com/experience</div>
</div>

<div className="process-image active h-full w-full" id="step-img-1">
<img alt="Booking App" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/90 backdrop-blur text-white text-xs font-medium mb-2">
<i className="w-3 h-3" data-lucide="smartphone"></i> App Booking
                            </div>
<p className="text-white/90 text-sm">Schedule your concierge visit in seconds.</p>
</div>
</div>

<div className="process-image h-full w-full" id="step-img-2">
<img alt="Mobile Unit" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/90 backdrop-blur text-white text-xs font-medium mb-2">
<i className="w-3 h-3" data-lucide="truck"></i> Concierge Arrival
                            </div>
<p className="text-white/90 text-sm">Our fully equipped mobile suite at your doorstep.</p>
</div>
</div>

<div className="process-image h-full w-full" id="step-img-3">
<img alt="Treatment" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/90 backdrop-blur text-white text-xs font-medium mb-2">
<i className="w-3 h-3" data-lucide="stethoscope"></i> Precision Care
                            </div>
<p className="text-white/90 text-sm">Hospital-grade sterilization and advanced tools.</p>
</div>
</div>

<div className="process-image h-full w-full" id="step-img-4">
<img alt="Happy Patient" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/90 backdrop-blur text-white text-xs font-medium mb-2">
<i className="w-3 h-3" data-lucide="smile"></i> Radiant Results
                            </div>
<p className="text-white/90 text-sm">Immediate results with zero hassle.</p>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center reveal-element">
<div className="btn-beam-wrapper inline-block">
<button className="relative bg-slate-900 text-white text-base font-medium py-3 px-10 rounded-full overflow-hidden transition-all hover:bg-slate-800">
                        Book Your First Appointment
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white overflow-hidden" id="advanced-care">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2 reveal-element">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">Advanced Care, <span className="text-blue-400">Anywhere.</span></h2>
<div className="space-y-6 text-slate-300 font-light leading-relaxed">
<p>
                            At Luxo Mobile Dental, we bring advanced dental technology directly to you without compromising on quality, safety, or comfort.
                        </p>
<p>
                            Our mobile setup includes state-of-the-art portable equipment, such as digital X-ray units, a fully functional dental unit, a portable Cavitron for ultrasonic cleanings, and ergonomic dental chairs when needed.
                        </p>
<div className="mt-10 grid grid-cols-2 gap-4">
<div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<i className="text-blue-400 mb-2 w-6 h-6" data-lucide="scan"></i>
<div className="text-sm font-medium text-white">Digital X-Rays</div>
<div className="text-xs text-slate-400 mt-1">Instant high-res imaging</div>
</div>
<div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<i className="text-blue-400 mb-2 w-6 h-6" data-lucide="zap"></i>
<div className="text-sm font-medium text-white">Ultrasonic Clean</div>
<div className="text-xs text-slate-400 mt-1">Gentle plaque removal</div>
</div>
</div>
</div>
</div>
<div className="w-full lg:w-1/2 relative reveal-element">
<div className="grid grid-cols-2 gap-4">

<div className="col-span-2 h-64 bg-slate-800 rounded-2xl overflow-hidden relative group border border-white/10">
<img alt="Luxo Mobile Car" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-xs font-medium text-white border border-white/10">Mobile Unit</div>
</div>

<div className="h-48 bg-slate-800 rounded-2xl overflow-hidden relative group border border-white/10">
<img alt="Dental Tools" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>

<div className="h-48 bg-slate-800 rounded-2xl overflow-hidden relative group border border-white/10">
<img alt="Treatment Setup" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 transform" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-slate-100 bg-slate-50 overflow-hidden reveal-element">
<div className="mb-12 text-center">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Patient Experiences</h2>
</div>
<div className="marquee-container w-full mask-linear">
<div className="marquee-content gap-6 px-6">

<div className="w-[350px] p-6 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col gap-4">
<div className="flex gap-1 text-amber-400"><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i></div>
<p className="text-sm text-slate-600 leading-relaxed">"I was nervous about dental work, but having Luxo come to my home changed everything. So professional and convenient."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">MJ</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">Mary Jenkins</span>
<span className="text-[10px] text-slate-400">Homeowner</span>
</div>
</div>
</div>
<div className="w-[350px] p-6 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col gap-4">
<div className="flex gap-1 text-amber-400"><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i></div>
<p className="text-sm text-slate-600 leading-relaxed">"The perfect solution for my elderly father. The team was incredibly patient and the equipment was top notch."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">DC</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">David Chen</span>
<span className="text-[10px] text-slate-400">Caregiver</span>
</div>
</div>
</div>
<div className="w-[350px] p-6 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col gap-4">
<div className="flex gap-1 text-amber-400"><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i></div>
<p className="text-sm text-slate-600 leading-relaxed">"Clean, discreet, and flexible. I booked a cleaning during my lunch break at home. Highly recommended!"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">ER</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">Elena Ross</span>
<span className="text-[10px] text-slate-400">Remote Worker</span>
</div>
</div>
</div>
<div className="w-[350px] p-6 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col gap-4">
<div className="flex gap-1 text-amber-400"><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i></div>
<p className="text-sm text-slate-600 leading-relaxed">"I didn't realize a mobile dentist could have X-rays and everything. It felt just like a regular office but better."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">AS</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">Adam Scott</span>
<span className="text-[10px] text-slate-400">Patient</span>
</div>
</div>
</div>

<div className="w-[350px] p-6 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col gap-4">
<div className="flex gap-1 text-amber-400"><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i></div>
<p className="text-sm text-slate-600 leading-relaxed">"I was nervous about dental work, but having Luxo come to my home changed everything. So professional and convenient."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">MJ</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">Mary Jenkins</span>
<span className="text-[10px] text-slate-400">Homeowner</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-slate-200 bg-white">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-bold tracking-tight flex items-center gap-2 text-slate-900 mb-4" href="#">
<i className="text-blue-600 w-5 h-5" data-lucide="smile"></i>
                    LUXO
                </a>
<p className="text-xs text-slate-500">Advanced dental care, delivered to your doorstep.</p>
<div className="flex gap-4 mt-4">
<i className="w-4 h-4 text-slate-400 hover:text-blue-600 cursor-pointer" data-lucide="facebook"></i>
<i className="w-4 h-4 text-slate-400 hover:text-blue-600 cursor-pointer" data-lucide="instagram"></i>
<i className="w-4 h-4 text-slate-400 hover:text-blue-600 cursor-pointer" data-lucide="twitter"></i>
</div>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 mb-4">Services</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li className="hover:text-blue-600 cursor-pointer">Cleanings</li>
<li className="hover:text-blue-600 cursor-pointer">Examinations</li>
<li className="hover:text-blue-600 cursor-pointer">X-Rays</li>
<li className="hover:text-blue-600 cursor-pointer">Consultations</li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li className="hover:text-blue-600 cursor-pointer">About Us</li>
<li className="hover:text-blue-600 cursor-pointer">Careers</li>
<li className="hover:text-blue-600 cursor-pointer">Contact</li>
<li className="hover:text-blue-600 cursor-pointer">Areas Served</li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 mb-4">Legal</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li className="hover:text-blue-600 cursor-pointer">Privacy Policy</li>
<li className="hover:text-blue-600 cursor-pointer">Terms of Service</li>
<li className="hover:text-blue-600 cursor-pointer">HIPAA Notice</li>
</ul>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-slate-100 text-center text-[10px] text-slate-400">
            © 2024 Luxo Mobile Dental. All rights reserved.
        </div>
</footer>


    </>
  );
}
