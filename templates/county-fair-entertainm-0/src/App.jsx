import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
yellow: '#fbba2f',
dark: '#231f20',
},
neutral: {
50: '#fafafa',
100: '#f5f5f5',
200: '#e5e5e5',
300: '#d4d4d4',
400: '#a3a3a3',
500: '#737373',
600: '#525252',
700: '#404040',
800: '#262626',
900: '#231f20', // Overriding 900 to match requested dark
}
},
boxShadow: {
'glow': '0 10px 15px -3px rgba(251, 186, 47, 0.25), 0 4px 6px -2px rgba(251, 186, 47, 0.1)',
'glow-lg': '0 20px 25px -5px rgba(251, 186, 47, 0.3), 0 10px 10px -5px rgba(251, 186, 47, 0.15)',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-neutral-50/80 backdrop-blur-md border-b border-neutral-200">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-heading font-semibold text-lg tracking-tighter text-brand-dark" href="#">
                FUNPIANOS
            </a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-neutral-500">
<a className="hover:text-brand-dark transition-colors" href="#features">Experience</a>
<a className="hover:text-brand-dark transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-brand-dark transition-colors" href="#testimonials">Reviews</a>
</div>
<a className="hidden md:flex bg-brand-dark hover:bg-neutral-700 text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors shadow-lg shadow-brand-dark/20" href="#contact">
                Book Now
            </a>
<button className="md:hidden text-brand-dark">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-sm mb-8 animate-slide">
<span className="w-2 h-2 rounded-full bg-brand-yellow shadow-[0_0_10px_rgba(251,186,47,0.6)]"></span>
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Now Booking 2025 Season</span>
</div>
<h1 className="font-heading text-4xl md:text-6xl font-semibold text-brand-dark tracking-tight mb-6 leading-tight animate-slide delay-100">
                The Ultimate Dueling Piano <br className="hidden md:block"/> Experience for County Fairs.
            </h1>
<p className="text-lg md:text-xl text-neutral-500 font-normal max-w-2xl mx-auto mb-10 leading-relaxed animate-slide delay-200">
                High-energy, interactive musical comedy that keeps crowds engaged, staying longer, and spending more. The highlight of your fairground schedule.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide delay-300">
<a className="w-full sm:w-auto bg-brand-yellow hover:bg-[#eab340] text-brand-dark text-sm font-semibold px-8 py-3 rounded-lg transition-all shadow-glow hover:shadow-glow-lg flex items-center justify-center gap-2" href="#contact">
                    Request Availability
                    <iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-white hover:bg-neutral-50 border border-neutral-200 text-brand-dark text-sm font-medium px-8 py-3 rounded-lg transition-all shadow-sm flex items-center justify-center gap-2" href="#gallery">
                    Watch Video
                    <iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-neutral-200" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12">

<div className="group">
<div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center border border-neutral-200 mb-6 group-hover:border-brand-yellow group-hover:shadow-[0_4px_20px_-4px_rgba(251,186,47,0.3)] transition-all duration-300">
<iconify-icon className="text-brand-dark" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-heading text-xl font-semibold text-brand-dark mb-3 tracking-tight">Crowd Interactive</h3>
<p className="text-neutral-500 leading-relaxed text-base">
                        We don't just play at them; we play with them. Our show is built on audience participation, making every performance unique to your crowd.
                    </p>
</div>

<div className="group">
<div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center border border-neutral-200 mb-6 group-hover:border-brand-yellow group-hover:shadow-[0_4px_20px_-4px_rgba(251,186,47,0.3)] transition-all duration-300">
<iconify-icon className="text-brand-dark" icon="solar:music-note-slider-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-heading text-xl font-semibold text-brand-dark mb-3 tracking-tight">100% Request Driven</h3>
<p className="text-neutral-500 leading-relaxed text-base">
                        From classic rock to today's hits and country favorites. If the crowd wants to hear it, we play it. A tailored soundtrack for your attendees.
                    </p>
</div>

<div className="group">
<div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center border border-neutral-200 mb-6 group-hover:border-brand-yellow group-hover:shadow-[0_4px_20px_-4px_rgba(251,186,47,0.3)] transition-all duration-300">
<iconify-icon className="text-brand-dark" icon="solar:face-scan-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-heading text-xl font-semibold text-brand-dark mb-3 tracking-tight">Family Friendly Fun</h3>
<p className="text-neutral-500 leading-relaxed text-base">
                        Wholesome entertainment suitable for all ages. We pride ourselves on delivering a clean, hilarious show that parents and kids both enjoy.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="gallery">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
<div>
<h2 className="font-heading text-3xl font-semibold text-brand-dark tracking-tight mb-4">Live from the Fairgrounds</h2>
<p className="text-neutral-500 max-w-lg">See the energy we bring to stages across the country.</p>
</div>
<div className="mt-4 md:mt-0">
<a className="text-sm font-medium text-brand-dark border-b border-neutral-300 pb-0.5 hover:border-brand-yellow transition-colors" href="#">View Instagram</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-96 md:h-[500px]">

<div className="lg:col-span-2 lg:row-span-2 relative group overflow-hidden rounded-2xl shadow-md border border-neutral-200">
<img alt="Concert Crowd" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in group-hover:scale-105" src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-brand-dark/0 transition-colors"></div>
</div>

<div className="relative group overflow-hidden rounded-2xl shadow-md border border-neutral-200">
<img alt="Piano Keys" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in group-hover:scale-105" src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative group overflow-hidden rounded-2xl shadow-md border border-neutral-200">
<img alt="Stage Lights" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in group-hover:scale-105" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="lg:col-span-2 relative group overflow-hidden rounded-2xl shadow-md border border-neutral-200">
<img alt="Musicians" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-neutral-200" id="testimonials">
<div className="max-w-6xl mx-auto px-6">
<h2 className="font-heading text-3xl font-semibold text-center text-brand-dark tracking-tight mb-16">Organizers Love Us</h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="p-8 rounded-2xl border border-neutral-200 bg-neutral-50 shadow-md flex flex-col justify-between">
<div>
<div className="flex text-brand-yellow mb-4 gap-1 drop-shadow-[0_2px_4px_rgba(251,186,47,0.25)]">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-neutral-600 text-lg font-medium leading-relaxed mb-6">"Hands down the best entertainment we've booked in years. The tent was packed every single show, and the revenue from concessions nearby doubled."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-600 font-semibold text-sm">SJ</div>
<div>
<div className="text-sm font-semibold text-brand-dark">Sarah Jenkins</div>
<div className="text-xs text-neutral-500">Director, State County Fair</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl border border-neutral-200 bg-neutral-50 shadow-md flex flex-col justify-between">
<div>
<div className="flex text-brand-yellow mb-4 gap-1 drop-shadow-[0_2px_4px_rgba(251,186,47,0.25)]">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-neutral-600 text-lg font-medium leading-relaxed mb-6">"Professional, easy to work with, and incredibly talented. Fun Pianos took care of everything sound-wise and just delivered a killer show."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-600 font-semibold text-sm">MR</div>
<div>
<div className="text-sm font-semibold text-brand-dark">Mike Ross</div>
<div className="text-xs text-neutral-500">Events Coordinator</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="contact">
<div className="max-w-xl mx-auto">
<div className="text-center mb-10">
<h2 className="font-heading text-3xl font-semibold text-brand-dark tracking-tight mb-3">Bring the Fun to Your Fair</h2>
<p className="text-neutral-500">Fill out the details below and we'll send you our 2025 kit and pricing.</p>
</div>
<form className="space-y-5 bg-white p-8 rounded-2xl shadow-md border border-neutral-200">
<div className="grid grid-cols-2 gap-5">
<div className="col-span-2 sm:col-span-1">
<label className="block text-xs font-semibold text-neutral-500 mb-2 uppercase tracking-wide">First Name</label>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow transition-all text-sm placeholder-neutral-400" placeholder="Jane" type="text"/>
</div>
<div className="col-span-2 sm:col-span-1">
<label className="block text-xs font-semibold text-neutral-500 mb-2 uppercase tracking-wide">Last Name</label>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow transition-all text-sm placeholder-neutral-400" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-neutral-500 mb-2 uppercase tracking-wide">Work Email</label>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow transition-all text-sm placeholder-neutral-400" placeholder="jane@countyfair.com" type="email"/>
</div>
<div>
<label className="block text-xs font-semibold text-neutral-500 mb-2 uppercase tracking-wide">Fair / Event Name</label>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow transition-all text-sm placeholder-neutral-400" placeholder="Springfield County Fair" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-neutral-500 mb-2 uppercase tracking-wide">Estimated Attendance</label>
<div className="relative">
<select className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow transition-all text-sm appearance-none">
<option>Under 5,000</option>
<option>5,000 - 20,000</option>
<option>20,000 - 50,000</option>
<option>50,000+</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="pt-2">
<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-neutral-300 bg-white transition-all checked:border-brand-yellow checked:bg-brand-yellow hover:border-brand-yellow" type="checkbox"/>
<iconify-icon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-neutral-500 group-hover:text-brand-dark transition-colors">I agree to receive communications about Fun Pianos availability.</span>
</label>
</div>
<button className="w-full bg-brand-dark hover:bg-neutral-700 text-white font-medium text-sm py-3 rounded-lg shadow-lg shadow-brand-dark/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 mt-4" type="submit">
                    Send Inquiry
                </button>
</form>
</div>
</section>

<footer className="bg-white border-t border-neutral-200 py-12 px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="font-heading font-semibold text-lg tracking-tighter text-brand-dark block mb-2">FUNPIANOS</span>
<p className="text-neutral-400 text-sm">© 2024 Fun Pianos Entertainment. All rights reserved.</p>
</div>
<div className="flex gap-6">
<a className="text-neutral-400 hover:text-brand-yellow transition-colors" href="#">
<iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-brand-yellow transition-colors" href="#">
<iconify-icon icon="solar:brand-facebook-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-brand-yellow transition-colors" href="#">
<iconify-icon icon="solar:brand-youtube-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
