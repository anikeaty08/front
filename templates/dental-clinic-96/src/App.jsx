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
      

<nav className="sticky top-0 z-50 bg-[#F7F6F2]/90 backdrop-blur-md border-b border-[#98B37C]/20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center">
<a className="font-serif text-xl tracking-tighter text-[#1F2937] uppercase" href="#">
                        Hedgewood Dental
                    </a>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm text-gray-600 hover:text-[#98B37C] transition-colors" href="#services">Services</a>
<a className="text-sm text-gray-600 hover:text-[#98B37C] transition-colors" href="#about">Meet the Doctor</a>
<a className="text-sm text-gray-600 hover:text-[#98B37C] transition-colors" href="#reviews">Patient Stories</a>
<a className="text-sm text-gray-600 hover:text-[#98B37C] transition-colors" href="#contact">Contact</a>
<a className="bg-[#98B37C] text-white px-5 py-2.5 rounded-md text-sm hover:bg-[#86a16b] transition-colors shadow-sm" href="#appointment">
                        Request Appointment
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-gray-600 hover:text-[#1F2937] focus:outline-none">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="max-w-2xl">
<span className="inline-block py-1 px-3 rounded-full bg-[#98B37C]/10 text-[#98B37C] text-xs font-medium tracking-wide mb-6 border border-[#98B37C]/20">
                        Welcoming New Patients
                    </span>
<h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#1F2937] font-medium leading-[1.15] mb-6">
                        Trusted Family &amp; Cosmetic Dentist in Woodbridge, VA
                    </h1>
<p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
                        Personalized dental care combining modern technology, compassionate treatment, and long-term smile health for patients across Woodbridge and surrounding communities.
                    </p>

<ul className="space-y-3 mb-10 text-gray-700">
<li className="flex items-center gap-3 text-sm">
<iconify-icon className="text-[#98B37C] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Comprehensive Dental Care</span>
</li>
<li className="flex items-center gap-3 text-sm">
<iconify-icon className="text-[#98B37C] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Experienced Dental Team</span>
</li>
<li className="flex items-center gap-3 text-sm">
<iconify-icon className="text-[#98B37C] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Advanced Modern Treatments</span>
</li>
</ul>

<div className="flex flex-col sm:flex-row gap-4 mb-8">
<a className="inline-flex justify-center items-center bg-[#98B37C] text-white px-8 py-3.5 rounded-md text-base hover:bg-[#86a16b] transition-all shadow-md hover:shadow-lg" href="#appointment">
                            Request Appointment
                        </a>
<a className="inline-flex justify-center items-center border border-[#D1965D] text-[#D1965D] px-8 py-3.5 rounded-md text-base hover:bg-[#D1965D] hover:text-white transition-all" href="tel:7035551234">
                            Call Our Office
                        </a>
</div>

<div className="flex items-start gap-3 text-xs text-gray-500 mt-8 border-t border-gray-200 pt-6">
<iconify-icon className="text-lg text-[#98B37C] mt-0.5 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<p>
<strong className="text-gray-700 font-normal">Hedgewood Dental P.C.</strong><br/>
                            1234 Smoketown Rd, Woodbridge, VA 22192<br/>
                            Proudly serving Woodbridge, Lake Ridge, and Dale City.
                        </p>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden shadow-xl">
<div className="absolute inset-0 bg-gradient-to-tr from-[#98B37C]/20 to-transparent z-10 mix-blend-multiply"></div>
<img alt="Friendly dentist consulting with patient in modern Woodbridge dental office" className="w-full h-[500px] lg:h-[600px] object-cover object-center relative z-0" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-white" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer aspect-[4/5] md:aspect-auto md:h-[600px]">
<img alt="Portrait of Dr. Christine Mai, Dentist in Woodbridge" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#98B37C] shadow-xl group-hover:scale-110 transition-transform">
<iconify-icon className="text-4xl ml-1" icon="solar:play-linear"></iconify-icon>
</div>
</div>
<div className="absolute bottom-6 left-6 right-6 text-white">
<p className="text-sm font-medium tracking-wide drop-shadow-md">WATCH VIDEO</p>
<p className="text-xl font-serif drop-shadow-md">Welcome to our practice</p>
</div>
</div>

<div>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-[#1F2937] font-medium mb-6">
                        Meet Dr. Christine Mai
                    </h2>
<div className="space-y-6 text-gray-600 font-light text-base md:text-lg leading-relaxed mb-10">
<p>
                            With over a decade of experience in advanced dentistry, Dr. Mai is dedicated to transforming smiles through a gentle, patient-first approach. She believes that true dental care goes beyond procedures—it’s about building lasting relationships based on trust and comfort.
                        </p>
<p>
                            Her philosophy centers on making every visit to our Woodbridge clinic as relaxing as possible. By integrating the latest in dental technology with compassionate care, Dr. Mai ensures that whether you are here for a routine cleaning or a complex cosmetic transformation, your well-being is always the priority.
                        </p>
</div>
<a className="inline-flex justify-center items-center border-b border-[#1F2937] text-[#1F2937] pb-1 text-base hover:text-[#98B37C] hover:border-[#98B37C] transition-colors group" href="#appointment">
                        Schedule Your Visit 
                        <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28 bg-[#F7F6F2]" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-[#1F2937] font-medium mb-4">
                    Why Woodbridge Patients Choose Hedgewood Dental
                </h2>
<p className="text-gray-600 text-base md:text-lg font-light">
                    Read what our local community has to say about their experience with our dedicated dental team.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
<div className="flex text-[#D1965D] mb-4 text-lg">
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow font-light">
                        "Finding a great dentist in Woodbridge VA was tough until I found Hedgewood. Dr. Mai and her team are incredibly gentle. I usually have high anxiety, but they made me feel completely at ease during my entire cosmetic procedure."
                    </p>
<div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-50">
<div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
<img alt="Patient Sarah" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<div>
<p className="text-sm font-medium text-[#1F2937]">Sarah Jenkins</p>
<p className="text-xs text-gray-500">Local Guide</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
<div className="flex text-[#D1965D] mb-4 text-lg">
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow font-light">
                        "The clinic is pristine and uses state-of-the-art technology. I went in for dental implants and the process was explained perfectly. Easily the most professional dental experience I've had in Northern Virginia."
                    </p>
<div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-50">
<div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
<img alt="Patient Michael" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<div>
<p className="text-sm font-medium text-[#1F2937]">Michael T.</p>
<p className="text-xs text-gray-500">Implant Patient</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
<div className="flex text-[#D1965D] mb-4 text-lg">
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow font-light">
                        "Brought my whole family here for cleanings. The staff is so patient with children and the environment is very calming. Highly recommend them if you are looking for a reliable family dentist in the area."
                    </p>
<div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-50">
<div className="w-10 h-10 rounded-full bg-[#98B37C]/20 flex items-center justify-center text-[#98B37C] font-serif text-lg">
                            E
                        </div>
<div>
<p className="text-sm font-medium text-[#1F2937]">Elena R.</p>
<p className="text-xs text-gray-500">Family Care</p>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#98B37C] transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:global-linear"></iconify-icon>
                    Read more reviews on Google
                </a>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-[#1F2937] font-medium mb-4">
                        Complete Dental Services in Woodbridge
                    </h2>
<p className="text-gray-600 text-base md:text-lg font-light">
                        From routine preventive care to full-mouth restorations, we offer a comprehensive suite of treatments designed for your unique needs.
                    </p>
</div>
<a className="hidden md:inline-flex justify-center items-center border border-gray-200 text-gray-600 px-6 py-2.5 rounded-md text-sm hover:border-[#98B37C] hover:text-[#98B37C] transition-all whitespace-nowrap" href="#">
                    View All Services
                </a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<a className="group block bg-[#F7F6F2]/50 rounded-2xl overflow-hidden hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100" href="#">
<div className="h-48 overflow-hidden">
<img alt="Confident adult smiling - Dental Implants" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-8">
<h3 className="font-serif text-xl text-[#1F2937] mb-3 font-medium">Dental Implants</h3>
<p className="text-sm text-gray-600 font-light mb-6 line-clamp-3">
                            Restore your confidence and bite function with permanent, natural-looking tooth replacements tailored for our Woodbridge patients seeking long-term solutions.
                        </p>
<div className="flex items-center text-sm font-medium text-[#98B37C]">
                            Learn more <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</a>

<a className="group block bg-[#F7F6F2]/50 rounded-2xl overflow-hidden hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100" href="#">
<div className="h-48 overflow-hidden">
<img alt="Bright natural smile - Cosmetic Dentistry" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-8">
<h3 className="font-serif text-xl text-[#1F2937] mb-3 font-medium">Cosmetic Dentistry</h3>
<p className="text-sm text-gray-600 font-light mb-6 line-clamp-3">
                            Enhance your natural beauty with professional teeth whitening, porcelain veneers, and custom smile makeovers designed to give you a radiant appearance.
                        </p>
<div className="flex items-center text-sm font-medium text-[#98B37C]">
                            Learn more <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</a>

<a className="group block bg-[#F7F6F2]/50 rounded-2xl overflow-hidden hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100" href="#">
<div className="h-48 overflow-hidden">
<img alt="Preventive Dentistry Care" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-8">
<h3 className="font-serif text-xl text-[#1F2937] mb-3 font-medium">Preventive Dentistry</h3>
<p className="text-sm text-gray-600 font-light mb-6 line-clamp-3">
                            Maintain optimal oral health with thorough cleanings, comprehensive exams, and oral cancer screenings for the whole family in a calming environment.
                        </p>
<div className="flex items-center text-sm font-medium text-[#98B37C]">
                            Learn more <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</a>

<a className="group block bg-[#F7F6F2]/50 rounded-2xl overflow-hidden hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100" href="#">
<div className="p-8 h-full flex flex-col justify-center">
<iconify-icon className="text-4xl text-[#D1965D] mb-4" icon="solar:health-linear"></iconify-icon>
<h3 className="font-serif text-xl text-[#1F2937] mb-3 font-medium">Restorative Care</h3>
<p className="text-sm text-gray-600 font-light mb-6">
                            Repair damaged or decayed teeth with tooth-colored fillings, custom crowns, and bridges that blend seamlessly with your natural smile.
                        </p>
<div className="flex items-center text-sm font-medium text-[#98B37C] mt-auto">
                            Learn more <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</a>

<a className="group block bg-[#F7F6F2]/50 rounded-2xl overflow-hidden hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100" href="#">
<div className="p-8 h-full flex flex-col justify-center">
<iconify-icon className="text-4xl text-[#D1965D] mb-4" icon="solar:magic-stick-3-linear"></iconify-icon>
<h3 className="font-serif text-xl text-[#1F2937] mb-3 font-medium">Clear Aligners</h3>
<p className="text-sm text-gray-600 font-light mb-6">
                            Straighten your teeth discreetly with custom-fit clear aligners. A comfortable and invisible alternative to traditional braces for teens and adults.
                        </p>
<div className="flex items-center text-sm font-medium text-[#98B37C] mt-auto">
                            Learn more <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</a>

<a className="group block bg-[#98B37C]/10 rounded-2xl overflow-hidden hover:bg-[#98B37C]/20 transition-all duration-300 border border-transparent" href="#">
<div className="p-8 h-full flex flex-col justify-center">
<iconify-icon className="text-4xl text-[#98B37C] mb-4" icon="solar:bell-bing-linear"></iconify-icon>
<h3 className="font-serif text-xl text-[#1F2937] mb-3 font-medium">Emergency Dentistry</h3>
<p className="text-sm text-gray-600 font-light mb-6">
                            Experiencing severe tooth pain or a dental injury? We offer prompt emergency appointments to relieve pain and protect your oral health.
                        </p>
<div className="flex items-center text-sm font-medium text-[#98B37C] mt-auto">
                            Call now for immediate care <iconify-icon className="ml-2" icon="solar:phone-linear"></iconify-icon>
</div>
</div>
</a>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-flex justify-center items-center border border-gray-200 text-gray-600 px-6 py-2.5 rounded-md text-sm hover:border-[#98B37C] hover:text-[#98B37C] transition-all" href="#">
                    View All Services
                </a>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[#F7F6F2]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-[#1F2937] font-medium mb-6">
                        Helping Woodbridge Patients Smile with Confidence
                    </h2>
<p className="text-gray-600 text-base md:text-lg font-light mb-8 leading-relaxed">
                        We don't just fix teeth; we restore confidence and improve overall health. Our personalized treatment plans are designed to deliver long-lasting, beautiful outcomes that positively impact your daily life.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#D1965D] shrink-0 shadow-sm border border-gray-100">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-[#1F2937] mb-1">Improved Oral Health</h4>
<p className="text-sm text-gray-600 font-light">Addressing underlying issues to prevent future complications and maintain strong, healthy gums and teeth.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#D1965D] shrink-0 shadow-sm border border-gray-100">
<iconify-icon className="text-xl" icon="solar:face-smile-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-[#1F2937] mb-1">Confidence Restoration</h4>
<p className="text-sm text-gray-600 font-light">Cosmetic and restorative techniques that give you the freedom to smile, speak, and laugh without hesitation.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#D1965D] shrink-0 shadow-sm border border-gray-100">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-[#1F2937] mb-1">Long-Term Solutions</h4>
<p className="text-sm text-gray-600 font-light">Utilizing high-quality materials and proven techniques to ensure your results last for years to come.</p>
</div>
</li>
</ul>
</div>

<div className="relative">
<div className="grid grid-cols-2 gap-4">
<div className="relative rounded-2xl overflow-hidden shadow-lg mt-12">
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-medium tracking-wide text-gray-600 z-10">
                                Before Treatment
                            </div>
<img alt="Patient before treatment" className="w-full h-64 lg:h-80 object-cover grayscale opacity-80 mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="relative rounded-2xl overflow-hidden shadow-lg">
<div className="absolute top-4 left-4 bg-[#98B37C] text-white px-3 py-1 rounded text-xs font-medium tracking-wide z-10">
                                After Treatment
                            </div>
<img alt="Patient after cosmetic dentistry" className="w-full h-64 lg:h-80 object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
</div>

<div className="absolute -z-10 -bottom-8 -right-8 w-32 h-32 bg-[#D1965D]/10 rounded-full blur-2xl"></div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-[#1F2937] font-medium mb-4">
                    Why Patients Trust Hedgewood Dental
                </h2>
<p className="text-gray-600 text-base md:text-lg font-light">
                    We combine medical expertise with a genuinely compassionate approach, ensuring every visit meets the highest standards of clinical excellence.
                </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="text-center p-6">
<div className="w-16 h-16 mx-auto bg-[#98B37C]/10 rounded-2xl flex items-center justify-center text-[#98B37C] mb-6 rotate-3">
<iconify-icon className="text-3xl" icon="solar:diploma-verified-linear"></iconify-icon>
</div>
<h3 className="font-serif text-lg text-[#1F2937] font-medium mb-2">Proven Experience</h3>
<p className="text-sm text-gray-600 font-light leading-relaxed">
                        Over a decade of clinical practice focusing on comprehensive restorative and family care.
                    </p>
</div>

<div className="text-center p-6">
<div className="w-16 h-16 mx-auto bg-[#98B37C]/10 rounded-2xl flex items-center justify-center text-[#98B37C] mb-6 -rotate-3">
<iconify-icon className="text-3xl" icon="solar:scanner-linear"></iconify-icon>
</div>
<h3 className="font-serif text-lg text-[#1F2937] font-medium mb-2">Modern Technology</h3>
<p className="text-sm text-gray-600 font-light leading-relaxed">
                        Equipped with digital imaging and advanced diagnostic tools for precise, minimally invasive treatments.
                    </p>
</div>

<div className="text-center p-6">
<div className="w-16 h-16 mx-auto bg-[#98B37C]/10 rounded-2xl flex items-center justify-center text-[#98B37C] mb-6 rotate-3">
<iconify-icon className="text-3xl" icon="solar:hearts-linear"></iconify-icon>
</div>
<h3 className="font-serif text-lg text-[#1F2937] font-medium mb-2">Personalized Care</h3>
<p className="text-sm text-gray-600 font-light leading-relaxed">
                        No rushed appointments. We take the time to listen, explain options, and tailor treatments to you.
                    </p>
</div>

<div className="text-center p-6">
<div className="w-16 h-16 mx-auto bg-[#98B37C]/10 rounded-2xl flex items-center justify-center text-[#98B37C] mb-6 -rotate-3">
<iconify-icon className="text-3xl" icon="solar:sofa-linear"></iconify-icon>
</div>
<h3 className="font-serif text-lg text-[#1F2937] font-medium mb-2">Comfortable Environment</h3>
<p className="text-sm text-gray-600 font-light leading-relaxed">
                        A calming clinic atmosphere designed to reduce anxiety and make every dental visit a positive one.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[#1F2937] text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight font-medium mb-4">
                    What Happens During Your First Visit
                </h2>
<p className="text-gray-300 text-base md:text-lg font-light">
                    We aim to make your introduction to our practice as smooth, transparent, and anxiety-free as possible.
                </p>
</div>
<div className="grid md:grid-cols-4 gap-6 relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gray-700 -translate-y-1/2 z-0"></div>

<div className="relative z-10 bg-[#273344] p-8 rounded-xl border border-gray-600 text-center">
<div className="w-8 h-8 mx-auto bg-[#98B37C] rounded-full flex items-center justify-center text-sm font-bold text-white mb-4 shadow-lg ring-4 ring-[#1F2937]">1</div>
<h3 className="font-serif text-lg font-medium mb-2">Consultation</h3>
<p className="text-sm text-gray-400 font-light">We begin by discussing your medical history, dental concerns, and goals in a private, relaxed setting.</p>
</div>

<div className="relative z-10 bg-[#273344] p-8 rounded-xl border border-gray-600 text-center">
<div className="w-8 h-8 mx-auto bg-[#98B37C] rounded-full flex items-center justify-center text-sm font-bold text-white mb-4 shadow-lg ring-4 ring-[#1F2937]">2</div>
<h3 className="font-serif text-lg font-medium mb-2">Digital Exam</h3>
<p className="text-sm text-gray-400 font-light">A gentle, comprehensive examination including low-radiation digital imaging to assess your oral health.</p>
</div>

<div className="relative z-10 bg-[#273344] p-8 rounded-xl border border-gray-600 text-center">
<div className="w-8 h-8 mx-auto bg-[#98B37C] rounded-full flex items-center justify-center text-sm font-bold text-white mb-4 shadow-lg ring-4 ring-[#1F2937]">3</div>
<h3 className="font-serif text-lg font-medium mb-2">Treatment Plan</h3>
<p className="text-sm text-gray-400 font-light">Dr. Mai will clearly explain her findings and collaborate with you on a personalized, pressure-free plan.</p>
</div>

<div className="relative z-10 bg-[#273344] p-8 rounded-xl border border-gray-600 text-center">
<div className="w-8 h-8 mx-auto bg-[#98B37C] rounded-full flex items-center justify-center text-sm font-bold text-white mb-4 shadow-lg ring-4 ring-[#1F2937]">4</div>
<h3 className="font-serif text-lg font-medium mb-2">Comfortable Care</h3>
<p className="text-sm text-gray-400 font-light">Whether starting treatment or scheduling a follow-up, our team ensures your experience is comfortable and clear.</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-24 bg-white border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row gap-12 items-center">

<div className="w-full lg:w-1/2">
<div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
<img alt="Hedgewood Dental exterior in Woodbridge, VA" className="w-full h-72 md:h-96 object-cover grayscale-[20%]" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>

<div className="w-full lg:w-1/2">
<h2 className="font-serif text-2xl md:text-3xl tracking-tight text-[#1F2937] font-medium mb-6">
                        Your Local Dentist Serving Woodbridge and Nearby Communities
                    </h2>
<div className="prose prose-gray font-light text-gray-600 text-sm md:text-base leading-relaxed">
<p className="mb-4">
                            Located conveniently on Smoketown Road, Hedgewood Dental is proud to be a trusted healthcare provider for families throughout Prince William County. We understand the importance of having a reliable, accessible dental professional close to home.
                        </p>
<p className="mb-4">
                            Whether you reside right here in <strong>Woodbridge</strong>, or are traveling from neighboring <strong>Lake Ridge</strong>, <strong>Dale City</strong>, <strong>Occoquan</strong>, or <strong>Dumfries</strong>, our clinic offers ample parking and flexible scheduling to accommodate your busy lifestyle.
                        </p>
<p>
                            We are deeply committed to our local community, participating in oral health education and striving to make premium dental care—from routine checkups to advanced implants—accessible to our Northern Virginia neighbors.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[#F7F6F2]">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-[#1F2937] font-medium mb-4">
                    Frequently Asked Questions
                </h2>
<p className="text-gray-600 font-light">
                    Clear answers to help you prepare for your visit.
                </p>
</div>
<div className="space-y-4">

<details className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden" open="">
<summary className="flex justify-between items-center font-medium cursor-pointer p-6 text-[#1F2937]">
<span>How often should I visit the dentist?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-gray-400">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-gray-600 font-light border-t border-gray-50 pt-4 leading-relaxed">
                        For most patients, we recommend visiting us every six months for a routine checkup and professional cleaning. However, if you have specific oral health conditions like gum disease, we might suggest more frequent visits to keep your smile healthy.
                    </div>
</details>

<details className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer p-6 text-[#1F2937]">
<span>Do you accept new patients?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-gray-400">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-gray-600 font-light border-t border-gray-50 pt-4 leading-relaxed">
                        Yes, we are currently welcoming new patients from Woodbridge and surrounding areas! Whether you need a simple cleaning, a second opinion, or complete cosmetic work, our team is ready to assist you.
                    </div>
</details>

<details className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer p-6 text-[#1F2937]">
<span>What insurance do you accept?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-gray-400">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-gray-600 font-light border-t border-gray-50 pt-4 leading-relaxed">
                        We accept most major PPO dental insurance plans. Our front desk team is highly experienced in verifying benefits and will happily file claims on your behalf to help maximize your coverage. Please call us with your insurance details to confirm.
                    </div>
</details>

<details className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer p-6 text-[#1F2937]">
<span>Do you offer cosmetic dentistry?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-gray-400">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-gray-600 font-light border-t border-gray-50 pt-4 leading-relaxed">
                        Absolutely. Dr. Mai specializes in aesthetic treatments including professional teeth whitening, porcelain veneers, clear aligners (Invisalign), and complete smile makeovers designed to look natural and beautiful.
                    </div>
</details>

<details className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer p-6 text-[#1F2937]">
<span>Are dental implants painful?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-gray-400">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-gray-600 font-light border-t border-gray-50 pt-4 leading-relaxed">
                        Your comfort is our priority. We use local anesthesia during the implant placement procedure, so you won't feel pain, just some pressure. Post-procedure discomfort is typically mild and manageable with over-the-counter pain relievers.
                    </div>
</details>
</div>
</div>
</section>

<section className="relative py-24 md:py-32 overflow-hidden" id="appointment">

<div className="absolute inset-0 z-0">
<img alt="Dental office background" className="w-full h-full object-cover blur-[2px]" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-[#1F2937]/80 mix-blend-multiply"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-white font-medium mb-6">
                Ready for a Healthier Smile?
            </h2>
<p className="text-gray-300 text-lg font-light mb-10 max-w-2xl mx-auto">
                Join the hundreds of Woodbridge families who trust Hedgewood Dental. Friendly team. Comfortable visits. New patients always welcome.
            </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<a className="w-full sm:w-auto inline-flex justify-center items-center bg-[#98B37C] text-white px-8 py-4 rounded-md text-lg hover:bg-[#86a16b] transition-all shadow-lg hover:shadow-xl font-medium" href="#">
                    Request Appointment
                </a>
<a className="w-full sm:w-auto inline-flex justify-center items-center text-white px-8 py-4 rounded-md text-lg hover:bg-white/10 transition-all font-light" href="tel:7035551234">
<iconify-icon className="mr-2" icon="solar:phone-linear"></iconify-icon> (703) 555-1234
                </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="font-serif text-xl tracking-tighter text-[#1F2937] uppercase mb-4 inline-block" href="#">
                        Hedgewood Dental
                    </a>
<p className="text-sm text-gray-500 font-light mb-6 max-w-md leading-relaxed">
                        Premium family and cosmetic dentistry in Woodbridge, VA. Dedicated to providing compassionate, high-quality dental care in a comfortable environment.
                    </p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-[#98B37C] transition-colors" href="#">
<iconify-icon className="text-2xl" icon="solar:facebook-linear"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-[#98B37C] transition-colors" href="#">
<iconify-icon className="text-2xl" icon="solar:instagram-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-[#1F2937] uppercase tracking-wider mb-4">Quick Links</h4>
<ul className="space-y-3 text-sm text-gray-500 font-light">
<li><a className="hover:text-[#98B37C] transition-colors" href="#services">Dental Services</a></li>
<li><a className="hover:text-[#98B37C] transition-colors" href="#about">Meet Dr. Mai</a></li>
<li><a className="hover:text-[#98B37C] transition-colors" href="#reviews">Patient Reviews</a></li>
<li><a className="hover:text-[#98B37C] transition-colors" href="#">New Patient Forms</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-[#1F2937] uppercase tracking-wider mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-gray-500 font-light">
<li className="flex items-start gap-2">
<iconify-icon className="text-lg text-[#98B37C] shrink-0 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span>1234 Smoketown Rd<br/>Woodbridge, VA 22192</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="text-lg text-[#98B37C] shrink-0" icon="solar:phone-linear"></iconify-icon>
<span>(703) 555-1234</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-400 font-light">
                    © 2023 Hedgewood Dental P.C. All rights reserved.
                </p>
<div className="flex gap-6 text-xs text-gray-400 font-light">
<a className="hover:text-gray-600 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-gray-600 transition-colors" href="#">Accessibility</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
