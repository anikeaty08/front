import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('bg-white/70', 'backdrop-blur-xl', 'border-slate-200/60');
                navbar.classList.remove('border-transparent');
            } else {
                navbar.classList.remove('bg-white/70', 'backdrop-blur-xl', 'border-slate-200/60');
                navbar.classList.add('border-transparent');
            }
        });

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
            observer.observe(element);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/33d63c77-2d8e-452b-9e2d-b00681f69560_3840w.png")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="fixed inset-0 pointer-events-none mix-blend-multiply opacity-[0.025] z-50" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>

<header className="fixed top-0 w-full z-40 transition-all duration-300 border-b" id="navbar">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex flex-col relative z-50 group" href="#">
<span className="text-xl md:text-2xl tracking-tight font-semibold text-orange-900">
                    Skin &amp; Spine Clinic
                </span>
<span className="text-xs tracking-widest text-orange-500 font-medium uppercase mt-0.5">Gandhinagar</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-orange-500 transition-colors hover:text-orange-900" href="#services">Services</a>
<a className="transition-colors text-sm font-medium text-orange-500 hover:text-orange-900" href="#about">About Dr. Neetisha</a>
<a className="text-sm font-medium text-orange-500 transition-colors hover:text-orange-900" href="#results">Results</a>
<a className="text-sm font-medium text-orange-500 transition-colors hover:text-orange-900" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center transition-all hover:bg-orange-800 text-sm font-medium text-white bg-orange-900 rounded-lg pt-2.5 pr-5 pb-2.5 pl-5 shadow-sm" href="#appointment">
                    Book Consultation
                </a>
<button aria-label="Menu" className="md:hidden text-orange-900 relative">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="solar" data-solar="hamburger-menu-linear" height="24" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(124, 45, 18)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 7H4m16 5H4m16 5H4" fill="none" stroke="#7c2d12" strokeLinecap="round" strokeWidth="1.5"></path></svg>
</button>
</div>
</div>
</header>

<section className="overflow-hidden bg-center md:pt-48 md:pb-32 bg-orange-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/05e5a912-6940-4bdf-a65f-340c1ecab6f1_800w.jpg)] bg-cover border-green-400/60 border-b pt-32 pb-20 relative">

<div className="absolute inset-0 bg-gradient-to-b pointer-events-none from-orange-50/50 via-white to-white"></div>
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] to-transparent rounded-full blur-3xl pointer-events-none from-amber-100/40 via-orange-100/20"></div>
<div className="absolute inset-0 bg-grid-fade pointer-events-none opacity-80"></div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="max-w-3xl reveal-on-scroll is-visible">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-md border shadow-sm text-xs font-medium mb-6 bg-white/60 border-orange-200/60 text-orange-700">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-amber-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</span>
                    Accepting New Patients in Gandhinagar
                </div>
<h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight mb-6 text-orange-900">
                    Advanced Dermatology &amp; Cosmetic Care.
                </h1>
<p className="text-lg md:text-xl text-orange-500 font-normal leading-relaxed mb-10 max-w-2xl">
                    Led by Dr. Neetisha Agarwal, offering specialized treatments for skin, hair, and cosmetic needs tailored to reveal your natural confidence.
                </p>
<div className="flex flex-col sm:flex-row gap-x-4 gap-y-4">
<a className="inline-flex justify-center items-center transition-all hover:bg-orange-800 text-sm font-medium text-white bg-orange-900 rounded-lg pt-3 pr-6 pb-3 pl-6 shadow-sm" href="#appointment">
                        Schedule an Appointment
                    </a>
<a className="inline-flex justify-center items-center gap-2 px-6 py-3 backdrop-blur-md border text-sm font-medium rounded-lg transition-all shadow-sm bg-white/80 border-orange-200/80 text-orange-700 hover:bg-orange-50" href="tel:+919408128796">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
                        +91 94081 28796
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden border-b border-orange-200/60" id="about">

<div className="absolute inset-0 bg-gradient-to-b pointer-events-none from-white via-orange-50/50 to-orange-50"></div>
<div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-gradient-to-tl to-transparent rounded-full blur-3xl pointer-events-none translate-x-1/4 translate-y-1/4 from-orange-200/30"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative reveal-on-scroll order-2 lg:order-1 is-visible">
<div className="absolute -inset-4 bg-gradient-to-tr rounded-[2rem] blur-xl opacity-50 z-0 from-orange-100 to-white"></div>
<div className="aspect-[4/5] rounded-2xl overflow-hidden relative z-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border bg-orange-100 border-white/60">
<img alt="Dermatology Care" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec28a41e-6344-4ef6-8fe4-5240917cdbb1_1600w.png?w=800&amp;q=80"/>
<div className="absolute inset-0 border rounded-2xl pointer-events-none border-orange-900/5"></div>
</div>
</div>
<div className="reveal-on-scroll reveal-delay-200 order-1 lg:order-2">
<h2 className="text-xs font-semibold tracking-widest uppercase mb-3 text-orange-400">Meet The Specialist</h2>
<h3 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-orange-900">Dr. Neetisha Agarwal</h3>
<div className="space-y-4 font-normal leading-relaxed mb-8 text-base text-orange-600">
<p className="">
                            Dr. Neetisha Agarwal is a dedicated Dermatologist specializing in comprehensive skin, hair, and laser treatments at the Skin &amp; Spine Clinic in Gandhinagar.
                        </p>
<p className="">
                            With a passion for aesthetic medicine and clinical dermatology, she provides evidence-based, personalized regimens. Whether addressing complex medical skin conditions or performing advanced cosmetic procedures, her goal is to help you achieve and maintain healthy, radiant skin.
                        </p>
</div>
<div className="grid grid-cols-2 gap-6 pt-6 border-t border-orange-200/60">
<div className="">
<p className="text-2xl font-semibold tracking-tight mb-1 text-orange-900">Expert</p>
<p className="text-xs text-orange-500 uppercase tracking-widest font-medium">Dermatologist</p>
</div>
<div className="">
<p className="text-2xl font-semibold tracking-tight mb-1 text-orange-900">Advanced</p>
<p className="text-xs text-orange-500 uppercase tracking-widest font-medium">Cosmetic Care</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden border-b border-orange-200/60" id="services">

<div className="absolute inset-0 z-0 bg-orange-50"></div>
<div className="absolute inset-0 bg-dots opacity-40 mix-blend-multiply z-0 pointer-events-none"></div>
<div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b to-transparent pointer-events-none z-0 from-orange-50"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] rounded-[100%] blur-[100px] pointer-events-none z-0 opacity-80 bg-white"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16 reveal-on-scroll">
<h2 className="text-xs font-semibold tracking-widest uppercase mb-3 text-orange-400">Our Expertise</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-orange-900">Comprehensive Treatments</h3>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl backdrop-blur-xl border shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 reveal-on-scroll group bg-white/60 border-white hover:bg-white/80">
<div className="flex group-hover:scale-105 transition-transform duration-300 text-orange-700 bg-gradient-to-b from-white to-orange-50 w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3db48075-e56a-4214-a97b-f66f2b7e35e9_320w.png?w=800&amp;q=80)] bg-cover bg-center border-orange-200/60 border rounded-lg mb-6 shadow-sm items-center justify-center">
<iconify-icon icon="solar:face-scan-linear" width="22"></iconify-icon>
</div>
<h4 className="text-lg font-medium mb-2 tracking-tight text-orange-900">Acne Treatment</h4>
<p className="text-sm text-orange-500 leading-relaxed">
                        Targeted therapies to clear active breakouts and prevent future acne, restoring your skin's natural balance.
                    </p>
</div>

<div className="p-8 rounded-2xl backdrop-blur-xl border shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 reveal-on-scroll reveal-delay-100 group bg-white/60 border-white hover:bg-white/80">
<div className="w-10 h-10 rounded-lg bg-gradient-to-b border flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300 from-white to-orange-50 border-orange-200/60 text-orange-700">
<iconify-icon className="" icon="solar:user-rounded-linear" width="22"></iconify-icon>
</div>
<h4 className="text-lg font-medium mb-2 tracking-tight text-orange-900">Hair Fall Treatment</h4>
<p className="text-sm text-orange-500 leading-relaxed">
                        Advanced diagnostic and treatment protocols to address thinning hair and promote robust regrowth.
                    </p>
</div>

<div className="p-8 rounded-2xl backdrop-blur-xl border shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 reveal-on-scroll reveal-delay-200 group bg-white/60 border-white hover:bg-white/80">
<div className="w-10 h-10 rounded-lg bg-gradient-to-b border flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300 from-white to-orange-50 border-orange-200/60 text-orange-700">
<iconify-icon className="" icon="solar:magic-stick-3-linear" width="22"></iconify-icon>
</div>
<h4 className="text-lg font-medium mb-2 tracking-tight text-orange-900">Laser Hair Removal</h4>
<p className="text-sm text-orange-500 leading-relaxed">
                        Safe, permanent hair reduction using state-of-the-art laser technology for smooth, flawless skin.
                    </p>
</div>

<div className="p-8 rounded-2xl backdrop-blur-xl border shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 reveal-on-scroll group bg-white/60 border-white hover:bg-white/80">
<div className="flex group-hover:scale-105 transition-transform duration-300 text-orange-700 bg-gradient-to-b from-white to-orange-50 w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7744ee97-a0fa-4429-8ee0-ccc41476eaa3_320w.png?w=800&amp;q=80)] bg-cover bg-center border-orange-200/60 border rounded-lg mb-6 shadow-sm items-center justify-center">
<iconify-icon icon="solar:droplets-linear" width="22"></iconify-icon>
</div>
<h4 className="text-lg font-medium mb-2 tracking-tight text-orange-900">Pigmentation Treatment</h4>
<p className="text-sm text-orange-500 leading-relaxed">
                        Effective solutions for melasma, sun spots, and uneven skin tone to reveal a brighter complexion.
                    </p>
</div>

<div className="p-8 rounded-2xl backdrop-blur-xl border shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 reveal-on-scroll reveal-delay-100 group bg-white/60 border-white hover:bg-white/80">
<div className="w-10 h-10 rounded-lg bg-gradient-to-b border flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300 from-white to-orange-50 border-orange-200/60 text-orange-700">
<iconify-icon icon="solar:test-tube-linear" width="22"></iconify-icon>
</div>
<h4 className="text-lg font-medium mb-2 tracking-tight text-orange-900">Chemical Peels</h4>
<p className="text-sm text-orange-500 leading-relaxed">
                        Customized exfoliating treatments to resurface the skin, reducing fine lines and improving texture.
                    </p>
</div>

<div className="p-8 rounded-2xl backdrop-blur-xl border shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 reveal-on-scroll reveal-delay-200 group bg-white/60 border-white hover:bg-white/80">
<div className="w-10 h-10 rounded-lg bg-gradient-to-b border flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300 from-white to-orange-50 border-orange-200/60 text-orange-700">
<iconify-icon icon="solar:shield-warning-linear" width="22"></iconify-icon>
</div>
<h4 className="text-lg font-medium mb-2 tracking-tight text-orange-900">Skin Allergy</h4>
<p className="text-sm text-orange-500 leading-relaxed">
                        Expert diagnosis and management of dermatitis, eczema, hives, and other allergic skin reactions.
                    </p>
</div>

<div className="p-8 rounded-2xl backdrop-blur-xl border shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 reveal-on-scroll group bg-white/60 border-white hover:bg-white/80">
<div className="w-10 h-10 rounded-lg bg-gradient-to-b border flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300 from-white to-orange-50 border-orange-200/60 text-orange-700">
<iconify-icon icon="solar:stars-linear" width="22"></iconify-icon>
</div>
<h4 className="text-lg font-medium mb-2 tracking-tight text-orange-900">Cosmetic Dermatology</h4>
<p className="text-sm text-orange-500 leading-relaxed">
                        Non-invasive aesthetic enhancements designed to rejuvenate your appearance and boost confidence.
                    </p>
</div>

<div className="p-8 rounded-2xl backdrop-blur-xl border shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 reveal-on-scroll reveal-delay-100 group bg-white/60 border-white hover:bg-white/80">
<div className="w-10 h-10 rounded-lg bg-gradient-to-b border flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300 from-white to-orange-50 border-orange-200/60 text-orange-700">
<iconify-icon icon="solar:adhesive-plaster-linear" width="22"></iconify-icon>
</div>
<h4 className="text-lg font-medium mb-2 tracking-tight text-orange-900">Scar Treatment</h4>
<p className="text-sm text-orange-500 leading-relaxed">
                        Advanced therapies to minimize the appearance of acne scars, surgical scars, and trauma scars.
                    </p>
</div>

<div className="p-8 rounded-2xl backdrop-blur-xl border shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 reveal-on-scroll reveal-delay-200 group bg-white/60 border-white hover:bg-white/80">
<div className="w-10 h-10 rounded-lg bg-gradient-to-b border flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300 from-white to-orange-50 border-orange-200/60 text-orange-700">
<iconify-icon icon="solar:target-linear" width="22"></iconify-icon>
</div>
<h4 className="text-lg font-medium mb-2 tracking-tight text-orange-900">Mole Removal</h4>
<p className="text-sm text-orange-500 leading-relaxed">
                        Safe, precise removal of benign moles and skin tags for aesthetic improvement and peace of mind.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden border-b border-orange-200/60" id="results">

<div className="absolute inset-0 bg-gradient-to-br pointer-events-none z-0 from-white via-orange-50 to-white"></div>
<div className="absolute inset-0 bg-grid-fade opacity-40 pointer-events-none z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal-on-scroll">
<div className="">
<h2 className="text-xs font-semibold tracking-widest uppercase mb-3 text-orange-400">Clinical Excellence</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-orange-900">Modern Facilities</h3>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="relative group rounded-2xl overflow-hidden reveal-on-scroll h-72 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border bg-white border-orange-200/50">
<img alt="Clinical Room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative group rounded-2xl overflow-hidden reveal-on-scroll reveal-delay-100 h-72 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border bg-white border-orange-200/50">
<img alt="Dermatology Assessment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/33d63c77-2d8e-452b-9e2d-b00681f69560_800w.png?w=800&amp;q=80"/>
</div>
<div className="relative group rounded-2xl overflow-hidden reveal-on-scroll reveal-delay-200 h-72 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border bg-white border-orange-200/50">
<img alt="Advanced Treatment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden border-b border-orange-200/60">

<div className="absolute inset-0 pointer-events-none z-0 bg-white"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] via-transparent to-transparent rounded-full blur-[80px] pointer-events-none z-0 from-orange-100"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16 reveal-on-scroll">
<h2 className="text-xs font-semibold tracking-widest uppercase mb-3 text-orange-400">Testimonials</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-orange-900">Patient Experiences</h3>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-gradient-to-b rounded-2xl p-8 border shadow-[0_4px_20px_rgb(0,0,0,0.02)] reveal-on-scroll from-white to-orange-50/50 border-orange-100">
<div className="flex gap-0.5 mb-6 gap-x-0.5 gap-y-0.5 text-orange-900">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm leading-relaxed mb-8 text-orange-600">"Dr. Neetisha is incredibly knowledgeable. My acne has significantly cleared up after just a few sessions. Highly recommend her clinic in Gandhinagar."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium border bg-orange-100 text-orange-700 border-orange-200/60">A</div>
<div>
<p className="font-medium text-sm text-orange-900">Aarohi P.</p>
</div>
</div>
</div>
<div className="reveal-on-scroll reveal-delay-100 bg-gradient-to-b border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] from-white to-orange-50/50 border-orange-100">
<div className="flex mb-6 gap-0.5 text-orange-900">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm leading-relaxed mb-8 text-orange-600">"I had a severe hair fall issue, but the treatment protocol provided here worked wonders. Very professional and clean environment."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium border bg-orange-100 text-orange-700 border-orange-200/60">R</div>
<div className="">
<p className="font-medium text-sm text-orange-900">Rahul M.</p>
</div>
</div>
</div>
<div className="bg-gradient-to-b rounded-2xl p-8 border shadow-[0_4px_20px_rgb(0,0,0,0.02)] reveal-on-scroll reveal-delay-200 from-white to-orange-50/50 border-orange-100">
<div className="flex mb-6 gap-0.5 text-orange-900">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm leading-relaxed mb-8 text-orange-600">"The laser hair removal service is top-notch. Painless and effective. Dr. Neetisha patiently explained everything before the procedure."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium border bg-orange-100 text-orange-700 border-orange-200/60">S</div>
<div>
<p className="font-medium text-sm text-orange-900">Sneha K.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="appointment">

<div className="absolute inset-0 z-0 bg-orange-50"></div>
<div className="absolute inset-0 bg-dots opacity-30 mix-blend-multiply z-0 pointer-events-none"></div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tl to-transparent rounded-full blur-[100px] pointer-events-none z-0 from-orange-200/40 via-amber-50/20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">

<div className="reveal-on-scroll">
<h2 className="text-xs font-semibold tracking-widest uppercase mb-3 text-orange-400">Visit Clinic</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8 text-orange-900">Location &amp; Contact</h3>
<div className="backdrop-blur-xl rounded-2xl border p-6 mb-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white/80 border-white">
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1 text-orange-400">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div className="">
<p className="font-medium text-sm mb-1 text-orange-900">Skin &amp; Spine Clinic</p>
<p className="text-orange-500 text-sm leading-relaxed">1st Floor, Shivalay Residency,<br/>Opp Vishal Supermarket,<br/>Kudasan, Gandhinagar, Gujarat</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="text-orange-400">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<div>
<a className="text-sm font-medium transition-colors text-orange-900 hover:text-amber-600" href="tel:+919408128796">+91 94081 28796</a>
</div>
</div>
</div>
</div>

<div className="w-full h-64 rounded-2xl overflow-hidden border shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative z-10 bg-orange-200 border-white">
<iframe allowfullscreen="" className="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.497589578278!2d72.6288647150242!3d23.188448984869446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2a3c9618d285%3A0x19932158dfa32f6!2sKudasan%2C%20Gandhinagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1689000000000!5m2!1sen!2sin" style={{border: '0', filter: 'grayscale(100%) opacity(0.8)'}} width="100%"></iframe>
</div>
</div>

<div className="backdrop-blur-2xl p-8 rounded-2xl border shadow-[0_8px_30px_rgb(0,0,0,0.06)] reveal-on-scroll reveal-delay-200 relative z-10 bg-white/80 border-white">
<h4 className="text-xl font-semibold tracking-tight mb-2 text-orange-900">Request an Appointment</h4>
<p className="text-sm text-orange-500 mb-8">Fill out the form below and our team will contact you to confirm your schedule.</p>
<form action="#" className="space-y-5 relative">
<div className="grid grid-cols-2 gap-5">
<div className="">
<label className="block text-xs font-medium mb-1.5 text-orange-700">First Name</label>
<input className="w-full border rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-900/10 focus:border-orange-400 transition-all shadow-sm bg-white border-orange-200/80 text-orange-900" placeholder="John" type="text"/>
</div>
<div className="">
<label className="block text-xs font-medium mb-1.5 text-orange-700">Last Name</label>
<input className="w-full border rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-900/10 focus:border-orange-400 transition-all shadow-sm bg-white border-orange-200/80 text-orange-900" placeholder="Doe" type="text"/>
</div>
</div>
<div className="">
<label className="block text-xs font-medium mb-1.5 text-orange-700">Phone Number</label>
<input className="w-full border rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-900/10 focus:border-orange-400 transition-all shadow-sm bg-white border-orange-200/80 text-orange-900" placeholder="+91 ..." type="tel"/>
</div>
<div className="">
<label className="block text-xs font-medium mb-1.5 text-orange-700">Treatment Interest</label>
<div className="relative">
<select className="w-full appearance-none border rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-900/10 focus:border-orange-400 transition-all shadow-sm bg-white border-orange-200/80 text-orange-900">
<option>General Dermatology Consultation</option>
<option>Acne Treatment</option>
<option>Hair Fall Treatment</option>
<option>Laser Hair Removal</option>
<option>Pigmentation Treatment</option>
<option>Chemical Peel</option>
<option>Skin Allergy</option>
<option>Cosmetic Dermatology</option>
<option>Scar / Mole Removal</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-orange-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="">
<label className="block text-xs font-medium mb-1.5 text-orange-700">Message (Optional)</label>
<textarea className="w-full border rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-900/10 focus:border-orange-400 transition-all resize-none shadow-sm bg-white border-orange-200/80 text-orange-900" placeholder="Briefly describe your concern..." rows="3"></textarea>
</div>
<button className="w-full py-3 mt-2 font-medium text-sm rounded-lg transition-all shadow-sm bg-orange-900 text-white hover:bg-orange-800" type="submit">
                            Submit Request
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t pt-16 pb-8 relative overflow-hidden bg-white border-orange-200/60" id="contact">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[200px] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] to-transparent rounded-[100%] blur-[60px] pointer-events-none z-0 from-orange-100"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-lg font-semibold tracking-tight block mb-3 text-orange-900" href="#">Skin &amp; Spine Clinic</a>
<p className="text-sm text-orange-500 leading-relaxed mb-6">
                        Advanced dermatological, hair, and cosmetic care in Gandhinagar, led by Dr. Neetisha Agarwal.
                    </p>
</div>
<div className="">
<h4 className="font-medium text-sm mb-4 text-orange-900">Clinic</h4>
<ul className="space-y-3 text-sm text-orange-500">
<li className=""><a className="transition-colors hover:text-orange-900" href="#about">About Dr. Neetisha</a></li>
<li className=""><a className="transition-colors hover:text-orange-900" href="#services">Treatments</a></li>
<li className=""><a className="transition-colors hover:text-orange-900" href="#results">Facilities</a></li>
</ul>
</div>
<div className="">
<h4 className="font-medium text-sm mb-4 text-orange-900">Legal</h4>
<ul className="space-y-3 text-sm text-orange-500">
<li className=""><a className="transition-colors hover:text-orange-900" href="#">Privacy Policy</a></li>
<li><a className="transition-colors hover:text-orange-900" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-orange-900">Contact</h4>
<ul className="space-y-3 text-sm text-orange-500">
<li className="flex items-center gap-2">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon> 
                            +91 94081 28796
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5" icon="solar:map-point-linear" width="16"></iconify-icon>
<span>1st Floor, Shivalay Residency,<br/>Kudasan, Gandhinagar</span>
</li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-xs border-orange-100 text-orange-400">
<p>© 2023 Skin &amp; Spine Clinic. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
