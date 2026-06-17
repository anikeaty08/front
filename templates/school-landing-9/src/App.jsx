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
      

<div className="bg-slate-900 text-slate-400 py-3 text-xs border-b border-slate-800 hidden md:block">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<div className="flex items-center gap-6">
<a className="flex items-center gap-2 hover:text-white transition-colors" href="tel:+9779769744441">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>+977 976 9744441</span>
</a>
<a className="flex items-center gap-2 hover:text-white transition-colors" href="mailto:mail@marigoldbrj.edu.np">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>mail@marigoldbrj.edu.np</span>
</a>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-orange-500 transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="16"></iconify-icon></a>
<a className="hover:text-orange-500 transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="16"></iconify-icon></a>
<a className="hover:text-orange-500 transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" width="16"></iconify-icon></a>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="/">
<div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white group-hover:rotate-6 transition-transform">
<span className="font-bold text-lg">M</span>
</div>
<div className="flex flex-col">
<span className="text-slate-900 font-semibold tracking-tighter text-lg leading-none">MARIGOLD</span>
<span className="text-xs text-slate-500 tracking-wide uppercase">Secondary School</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="text-orange-600" href="#">Home</a>
<a className="hover:text-slate-900 transition-colors" href="#">About</a>
<a className="hover:text-slate-900 transition-colors" href="#">Academics</a>
<a className="hover:text-slate-900 transition-colors" href="#">Notice</a>
<a className="hover:text-slate-900 transition-colors" href="#">Contact</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white transition-all bg-slate-900 rounded-full hover:bg-slate-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900" href="#">
                    Apply Now
                </a>
<button className="lg:hidden text-slate-900 p-2">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative h-[85vh] w-full overflow-hidden bg-slate-900">

<div className="absolute inset-0">
<img alt="Students Learning" className="w-full h-full object-cover opacity-60" src="https://marigoldbrj.edu.np/wp-content/uploads/2025/05/DSC_0076-scaled.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
</div>
<div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start">
<div className="max-w-3xl space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium uppercase tracking-wider backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                    Admissions Open 2025
                </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1]">
                    Better Education For <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">A Better World.</span>
</h1>
<p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl leading-relaxed">
                    At Marigold Secondary School, we nurture young minds and shape bright futures through a commitment to academic excellence, personal growth, and holistic education.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white transition-all bg-orange-600 rounded-full hover:bg-orange-500 shadow-lg shadow-orange-900/20" href="#">
                        Start Your Education
                    </a>
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white transition-all bg-white/10 border border-white/10 backdrop-blur-md rounded-full hover:bg-white/20" href="#">
                        Take A Tour
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<h5 className="text-orange-600 font-medium tracking-wide uppercase text-sm">Welcome</h5>
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight">
                        Inspiring Curiosity, <br/>Fostering Growth.
                    </h2>
<p className="text-slate-600 leading-relaxed text-lg">
                        We are a nurturing community dedicated to achieving academic excellence. Explore our programs and join us in shaping bright futures through quality education and strong values.
                    </p>
<div className="pt-4">
<a className="inline-flex items-center gap-2 text-slate-900 font-medium hover:text-orange-600 transition-colors group" href="#">
                            Read more about us 
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<img alt="Campus Life" className="rounded-3xl w-full h-64 object-cover shadow-2xl translate-y-8" src="https://marigoldbrj.edu.np/wp-content/uploads/2025/04/about02.jpg"/>
<img alt="Library" className="rounded-3xl w-full h-64 object-cover shadow-xl" src="https://marigoldbrj.edu.np/wp-content/uploads/2025/05/Library.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:book-bookmark-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Books &amp; Library</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        A peaceful space encouraging reading, research, and a lifelong love of learning with a rich collection.
                    </p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:diploma-verified-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Certified Teachers</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Caring and skilled teachers committed to student success and holistic development.
                    </p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Student Life</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Vibrant student life that balances academics with extracurricular activities and personal growth.
                    </p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:medal-ribbon-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Certification</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Complete academic program from Pre-Primary to Grade 12, following the NEB curriculum.
                    </p>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-slate-900 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Background" className="w-full h-full object-cover opacity-20" src="https://marigoldbrj.edu.np/wp-content/uploads/2025/04/home-bg01.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight">
                    Learn Something New <br/>Every Day
                </h2>
<p className="text-slate-400 text-lg font-light leading-relaxed max-w-md">
                    Marigold Secondary School offers quality education from Pre-Primary to Grade 12. With a focus on academic excellence, we provide a supportive environment to help learners grow.
                </p>

<div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-3xl mt-8">
<h3 className="text-white font-medium mb-4">Request Information</h3>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" placeholder="Your Name" type="text"/>
<input className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" placeholder="Email Address" type="email"/>
</div>
<textarea className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" placeholder="Message" rows="2"></textarea>
<button className="w-full bg-orange-600 hover:bg-orange-500 text-white font-medium py-3 rounded-xl transition-colors" type="button">Send Request</button>
</form>
</div>
</div>

<div className="grid grid-cols-2 gap-6">
<div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl text-center backdrop-blur-md">
<iconify-icon className="text-orange-500 text-4xl mb-2" icon="solar:history-linear"></iconify-icon>
<div className="text-3xl font-bold text-white tracking-tight">1995</div>
<div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Established</div>
</div>
<div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl text-center backdrop-blur-md">
<iconify-icon className="text-orange-500 text-4xl mb-2" icon="solar:user-id-linear"></iconify-icon>
<div className="text-3xl font-bold text-white tracking-tight">50+</div>
<div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Certified Teachers</div>
</div>
<div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl text-center backdrop-blur-md">
<iconify-icon className="text-orange-500 text-4xl mb-2" icon="solar:users-group-rounded-linear"></iconify-icon>
<div className="text-3xl font-bold text-white tracking-tight">10k+</div>
<div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Alumni</div>
</div>
<div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl text-center backdrop-blur-md">
<iconify-icon className="text-orange-500 text-4xl mb-2" icon="solar:book-2-linear"></iconify-icon>
<div className="text-3xl font-bold text-white tracking-tight">PG-12</div>
<div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Grades</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h5 className="text-orange-600 font-medium tracking-wide uppercase text-sm mb-2">Features</h5>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Why Choose Us</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16">

<div className="flex gap-5">
<div className="shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
<iconify-icon icon="solar:diploma-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">Academic Excellence</h4>
<p className="text-slate-500 text-sm leading-relaxed">Marigold follows the Nepal Education Board curriculum, ensuring high-quality education and a strong foundation.</p>
</div>
</div>

<div className="flex gap-5">
<div className="shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
<iconify-icon icon="solar:buildings-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">State-of-the-Art Facilities</h4>
<p className="text-slate-500 text-sm leading-relaxed">Modern classrooms, a well-stocked library, and digital resources enhancing the learning experience.</p>
</div>
</div>

<div className="flex gap-5">
<div className="shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
<iconify-icon icon="solar:user-hand-up-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">Experienced Teachers</h4>
<p className="text-slate-500 text-sm leading-relaxed">The school boasts a team of certified educators committed to guiding students academically.</p>
</div>
</div>

<div className="flex gap-5">
<div className="shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
<iconify-icon icon="solar:basketball-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">Holistic Development</h4>
<p className="text-slate-500 text-sm leading-relaxed">Beyond academics, we promote extracurricular activities in sports, arts, and leadership.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h5 className="text-orange-600 font-medium tracking-wide uppercase text-sm mb-2">Teachers</h5>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Our Expert Instructors</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group text-center">
<div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
<img alt="Mr. Ravi Koirala" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale hover:grayscale-0" src="https://marigoldbrj.edu.np/wp-content/uploads/2025/05/IMG_5021.jpg"/>
</div>
<h3 className="text-lg font-semibold text-slate-900">Mr. Ravi Koirala</h3>
<p className="text-sm text-orange-600 font-medium">Principal</p>
</div>

<div className="group text-center">
<div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
<img alt="Mr. Ajit Limbu" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale hover:grayscale-0" src="https://marigoldbrj.edu.np/wp-content/uploads/2025/05/IMG_5007-1-scaled.jpg"/>
</div>
<h3 className="text-lg font-semibold text-slate-900">Mr. Ajit Limbu</h3>
<p className="text-sm text-orange-600 font-medium">Examination Dept.</p>
</div>

<div className="group text-center">
<div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
<img alt="Mr. Sambhu Sah" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale hover:grayscale-0" src="https://marigoldbrj.edu.np/wp-content/uploads/2025/05/IMG_0001.jpg"/>
</div>
<h3 className="text-lg font-semibold text-slate-900">Mr. Sambhu Sah</h3>
<p className="text-sm text-orange-600 font-medium">Faculty</p>
</div>

<div className="group text-center">
<div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
<img alt="Mrs. Sunita Shrestha" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale hover:grayscale-0" src="https://marigoldbrj.edu.np/wp-content/uploads/2025/05/IMG_5001.jpg"/>
</div>
<h3 className="text-lg font-semibold text-slate-900">Mrs. Sunita Shrestha</h3>
<p className="text-sm text-orange-600 font-medium">Faculty Nepali</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-center text-slate-900 mb-12 tracking-tight">Student Voices</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
<div className="flex items-center gap-1 mb-4 text-orange-400">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed italic">"Studying at Marigold has truly shaped who I am. The teachers are always approachable and make even the toughest subjects interesting."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">A</div>
<div>
<div className="text-sm font-semibold text-slate-900">Aakash Das</div>
<div className="text-xs text-slate-500">Alumni</div>
</div>
</div>
</div>

<div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
<div className="flex items-center gap-1 mb-4 text-orange-400">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed italic">"What I love most is the balance between academics and extracurriculars. It helped me grow as a leader and discover my passions."</p>
<div className="flex items-center gap-4">
<img alt="Student" className="w-10 h-10 rounded-full object-cover" src="https://marigoldbrj.edu.np/wp-content/uploads/2025/04/student03.jpg"/>
<div>
<div className="text-sm font-semibold text-slate-900">Johnny B.</div>
<div className="text-xs text-slate-500">Student</div>
</div>
</div>
</div>

<div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
<div className="flex items-center gap-1 mb-4 text-orange-400">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed italic">"Marigold feels like a second home. My classmates are friendly, and we learn in creative ways like experiments and group activities."</p>
<div className="flex items-center gap-4">
<img alt="Student" className="w-10 h-10 rounded-full object-cover" src="https://marigoldbrj.edu.np/wp-content/uploads/2025/04/student04.jpg"/>
<div>
<div className="text-sm font-semibold text-slate-900">Sarah K.</div>
<div className="text-xs text-slate-500">Student</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div className="space-y-4">
<div className="flex items-center gap-2 text-white">
<div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center font-bold">M</div>
<span className="font-semibold tracking-tight">Marigold Secondary School</span>
</div>
<p className="text-sm leading-relaxed">
                        Offering quality education from Pre-Primary to Grade 12. Focusing on academic excellence and holistic development since 1995.
                    </p>
<div className="flex gap-4 pt-2">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-bold" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-bold" width="20"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-4">Academics</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-orange-500 transition-colors" href="#">Pre-Primary</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Primary Level</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Secondary (SEE)</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Plus Two (NEB)</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-4">Quick Links</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-orange-500 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Admissions</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Notices</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-4">Contact Info</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-orange-500" icon="solar:map-point-linear"></iconify-icon>
<span>Khumal Tole -6, Birgunj, Nepal</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-orange-500" icon="solar:phone-calling-linear"></iconify-icon>
<span>+977 976 9744441</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-orange-500" icon="solar:letter-linear"></iconify-icon>
<span>mail@marigoldbrj.edu.np</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
<p>© 2025 Marigold Secondary School. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
