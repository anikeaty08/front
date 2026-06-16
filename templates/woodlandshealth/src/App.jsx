import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#eff6ff',
100: '#dbeafe',
600: '#2563eb', // Modern Blue to match og scheme
700: '#1d4ed8',
900: '#0f172a',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        // Mobile menu toggle logic
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Close menu when clicking a link
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-brand-600 text-white rounded-lg flex items-center justify-center text-lg">
<span className="font-semibold tracking-tighter">W</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-900 tracking-tight leading-none group-hover:text-brand-600 transition-colors">WOODLANDS</span>
<span className="text-[10px] text-slate-400 font-medium tracking-wide uppercase">Chiropractic Health</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#therapies">Therapies</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#team">Practitioners</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#prices">Prices</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium px-4 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md" href="#">
                    Book Online
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<button className="md:hidden text-slate-900 p-2" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:hidden bg-white border-b border-slate-100 absolute w-full px-6 py-6 flex flex-col gap-4 shadow-xl" id="mobile-menu">
<a className="text-sm font-medium text-slate-600" href="#therapies">Therapies</a>
<a className="text-sm font-medium text-slate-600" href="#team">Practitioners</a>
<a className="text-sm font-medium text-slate-600" href="#about">About</a>
<a className="text-sm font-medium text-slate-600" href="#prices">Prices</a>
<a className="flex justify-center items-center gap-2 bg-brand-600 text-white text-sm font-medium w-full py-3 rounded-lg mt-2" href="#">
                Book Online
            </a>
</div>
</header>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-[-1]">
<div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-brand-50 rounded-full blur-3xl opacity-60"></div>
<div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-slate-100 rounded-full blur-3xl opacity-60"></div>
</div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
</span>
                Accepting New Patients in Harrogate
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tighter mb-6 leading-[1.1]">
                Modern Health.<br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-900">Holistic Recovery.</span>
</h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Harrogate's leading multidisciplinary clinic. We specialise in Chiropractic, Shockwave Therapy, Acupuncture, and Massage to restore your body's natural balance.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg shadow-brand-900/10 hover:shadow-xl hover:scale-105" href="#">
                    Book Appointment
                </a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 px-8 py-3.5 rounded-full font-medium transition-all hover:bg-slate-50" href="#therapies">
                    View Treatments
                </a>
</div>

<div className="mt-16 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 opacity-60 grayscale">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-900" icon="solar:star-bold"></iconify-icon>
<span className="text-xs font-semibold tracking-tight">Google Reviews</span>
</div>
<div className="h-4 w-px bg-slate-300 hidden sm:block"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-900" icon="solar:shield-check-bold"></iconify-icon>
<span className="text-xs font-semibold tracking-tight">Registered Professionals</span>
</div>
<div className="h-4 w-px bg-slate-300 hidden sm:block"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-900" icon="solar:map-point-bold"></iconify-icon>
<span className="text-xs font-semibold tracking-tight">Located in Harrogate</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="therapies">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-xl mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Our Therapies</h2>
<p className="text-slate-500 font-light">We offer a range of evidence-based treatments tailored to your specific needs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-blue-50 text-brand-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bone-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Chiropractic</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Diagnosis and treatment of musculoskeletal and nervous system disorders through manual adjustments.</p>
<a className="text-sm font-medium text-brand-600 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-blue-50 text-brand-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Shockwave Therapy</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Medical-grade therapy using acoustic waves to treat chronic pain and promote tissue healing.</p>
<a className="text-sm font-medium text-brand-600 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-blue-50 text-brand-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:needles-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Acupuncture</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Ancient holistic method using fine needles to aid Qi flow and improve general wellbeing.</p>
<a className="text-sm font-medium text-brand-600 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-blue-50 text-brand-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:hand-stars-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Massage Therapy</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Relaxation of soft tissue to improve pain, range of joint movement and reduce stress.</p>
<a className="text-sm font-medium text-brand-600 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-blue-50 text-brand-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:feet-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Reflexology</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Stimulating reflex points on the feet to promote relaxation and healing throughout the body.</p>
<a className="text-sm font-medium text-brand-600 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="team">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Meet the Team</h2>
<p className="text-slate-500 font-light">Our experienced practitioners are dedicated to your recovery.</p>
</div>
<a className="text-sm font-medium text-slate-900 border-b border-slate-200 hover:border-slate-900 transition-all pb-0.5" href="#about">Read Bios</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

<div className="flex flex-col">
<div className="aspect-square bg-slate-100 rounded-2xl mb-4 overflow-hidden relative group">
<div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-500">
<iconify-icon icon="solar:user-linear" width="48"></iconify-icon>
</div>
</div>
<h4 className="font-semibold text-slate-900">Giles Muller</h4>
<span className="text-xs text-brand-600 font-medium uppercase tracking-wide mt-1">Chiropractor</span>
</div>

<div className="flex flex-col">
<div className="aspect-square bg-slate-100 rounded-2xl mb-4 overflow-hidden relative group">
<div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-500">
<iconify-icon icon="solar:user-linear" width="48"></iconify-icon>
</div>
</div>
<h4 className="font-semibold text-slate-900">Tomi Leppänen</h4>
<span className="text-xs text-brand-600 font-medium uppercase tracking-wide mt-1">Chiropractor</span>
</div>

<div className="flex flex-col">
<div className="aspect-square bg-slate-100 rounded-2xl mb-4 overflow-hidden relative group">
<div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-500">
<iconify-icon icon="solar:user-linear" width="48"></iconify-icon>
</div>
</div>
<h4 className="font-semibold text-slate-900">Andrea Lascelles</h4>
<span className="text-xs text-brand-600 font-medium uppercase tracking-wide mt-1">Acupuncturist</span>
</div>

<div className="flex flex-col">
<div className="aspect-square bg-slate-100 rounded-2xl mb-4 overflow-hidden relative group">
<div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-500">
<iconify-icon icon="solar:user-linear" width="48"></iconify-icon>
</div>
</div>
<h4 className="font-semibold text-slate-900">Sue Elwen</h4>
<span className="text-xs text-brand-600 font-medium uppercase tracking-wide mt-1">Reflexologist</span>
</div>

<div className="flex flex-col">
<div className="aspect-square bg-slate-100 rounded-2xl mb-4 overflow-hidden relative group">
<div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-500">
<iconify-icon icon="solar:user-linear" width="48"></iconify-icon>
</div>
</div>
<h4 className="font-semibold text-slate-900">Angus Young</h4>
<span className="text-xs text-brand-600 font-medium uppercase tracking-wide mt-1">Massage Therapist</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-96 h-96 bg-brand-600 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-6">Ready to feel better?</h2>
<p className="text-slate-400 mb-10 font-light text-lg">Book your appointment online today. We are located centrally in Harrogate with convenient access.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-3.5 rounded-full font-medium hover:bg-slate-100 transition-colors" href="#">
                    Book Online Now
                </a>
<a className="inline-flex items-center justify-center border border-slate-700 text-white px-8 py-3.5 rounded-full font-medium hover:bg-slate-800 transition-colors" href="mailto:health@woodlandschiro.co.uk">
                    Contact Us
                </a>
</div>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 bg-brand-600 text-white rounded text-sm flex items-center justify-center">W</div>
<span className="text-sm font-semibold text-slate-900 tracking-tight">WOODLANDS</span>
</a>
<p className="text-xs text-slate-500 leading-relaxed mb-4">
                        Harrogate's comprehensive clinic for physical wellness and rehabilitation.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-brand-600 transition-colors" href="https://www.facebook.com/woodlandschiropractichealthcentreharrogate" target="_blank">
<iconify-icon icon="solar:facebook-bold" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-brand-600 transition-colors" href="https://www.instagram.com/woodlands_chiropractic/" target="_blank">
<iconify-icon icon="solar:instagram-bold" width="20"></iconify-icon>
</a>
</div>
</div>

<div>
<h5 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Clinic</h5>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-brand-600 transition-colors" href="#therapies">Therapies</a></li>
<li><a className="text-sm text-slate-500 hover:text-brand-600 transition-colors" href="#team">Practitioners</a></li>
<li><a className="text-sm text-slate-500 hover:text-brand-600 transition-colors" href="#about">About Us</a></li>
<li><a className="text-sm text-slate-500 hover:text-brand-600 transition-colors" href="#prices">Prices</a></li>
</ul>
</div>

<div>
<h5 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Contact</h5>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-slate-400 flex-shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm text-slate-500">Harrogate, England<br/>HG2 7AT</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-slate-400 flex-shrink-0" icon="solar:letter-linear"></iconify-icon>
<a className="text-sm text-slate-500 hover:text-brand-600 transition-colors break-all" href="mailto:health@woodlandschiro.co.uk">health@woodlandschiro.co.uk</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-slate-400 flex-shrink-0" icon="solar:phone-linear"></iconify-icon>
<a className="text-sm text-slate-500 hover:text-brand-600 transition-colors" href="tel:01132371173">0113 237 1173</a>
</li>
</ul>
</div>

<div>
<h5 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Legal</h5>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-brand-600 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-slate-500 hover:text-brand-600 transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-sm text-slate-500 hover:text-brand-600 transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2025 Woodlands Chiropractic Health Centre. All rights reserved.</p>
<div className="flex items-center gap-1.5 text-xs text-slate-400">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span>System Operational</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
