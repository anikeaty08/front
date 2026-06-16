import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
navy: {
50: '#f2f5f9',
100: '#e1e8f2',
800: '#1a2744',
900: '#0f172a',
},
gold: {
400: '#facc15',
500: '#eab308',
600: '#ca8a04',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2" href="#">
<span className="font-serif text-xl tracking-widest font-medium text-navy-900 uppercase">Kent</span>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-navy-900 transition-colors" href="#about">About Us</a>
<a className="text-sm font-medium text-slate-600 hover:text-navy-900 transition-colors" href="#academics">Academics</a>
<a className="text-sm font-medium text-slate-600 hover:text-navy-900 transition-colors" href="#campus">Campus Life</a>
<a className="text-sm font-medium text-slate-600 hover:text-navy-900 transition-colors" href="#student-life">Student Life</a>
<a className="text-sm font-medium text-slate-600 hover:text-navy-900 transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium bg-gold-500 text-navy-900 rounded-lg hover:bg-gold-400 transition-colors shadow-sm" href="#admissions">
                    Apply Now
                </a>
<button className="lg:hidden text-slate-600 p-2">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</header>
<main>

<section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Campus" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-navy-900/80 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-12 pb-24 flex flex-col items-start text-left">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
<span className="w-2 h-2 rounded-full bg-gold-500"></span>
<span className="text-xs font-medium text-white tracking-wide uppercase">Admissions open for 2024-25</span>
</div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-[1.1] max-w-4xl">
                    Shaping future leaders with<br/>
<span className="text-gold-400 italic font-normal">knowledge, values &amp; vision.</span>
</h1>
<p className="mt-8 text-lg md:text-xl text-slate-300 font-light max-w-2xl leading-relaxed">
                    At Kent Public School, we nurture young minds to grow into confident, responsible, and globally aware individuals.
                </p>
<div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium bg-gold-500 text-navy-900 rounded-xl hover:bg-gold-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)]" href="#admissions">
                        Apply for Admission
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium bg-transparent text-white border border-white/30 rounded-xl hover:bg-white/10 transition-all" href="#contact">
                        Book a Campus Visit
                    </a>
</div>
</div>
</section>

<section className="relative z-20 -mt-16 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group">
<div className="absolute top-0 inset-x-0 h-1 bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center text-navy-900 mb-6">
<iconify-icon className="text-2xl" icon="solar:diploma-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-medium text-navy-900 tracking-tight mb-2">30+ Years</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">Of Academic Excellence shaping young minds.</p>
</div>

<div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group">
<div className="absolute top-0 inset-x-0 h-1 bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center text-navy-900 mb-6">
<iconify-icon className="text-2xl" icon="solar:book-bookmark-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-medium text-navy-900 tracking-tight mb-2">CBSE Curriculum</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">With modern learning methods and smart classrooms.</p>
</div>

<div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group">
<div className="absolute top-0 inset-x-0 h-1 bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center text-navy-900 mb-6">
<iconify-icon className="text-2xl" icon="solar:star-fall-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-medium text-navy-900 tracking-tight mb-2">Values &amp; Leadership</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">A strong focus on discipline, respect, and character.</p>
</div>

<div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group">
<div className="absolute top-0 inset-x-0 h-1 bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center text-navy-900 mb-6">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-medium text-navy-900 tracking-tight mb-2">Safe &amp; Inclusive</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">A student-centric environment fostering holistic development.</p>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-50 overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
<img alt="Students reading" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-8 -left-8 w-64 h-64 bg-navy-100 rounded-full blur-3xl opacity-50 z-0"></div>
</div>
<div className="max-w-xl">
<span className="text-xs font-medium text-gold-600 tracking-wider uppercase mb-4 block">About Kent Public School</span>
<h2 className="font-serif text-4xl lg:text-5xl font-medium text-navy-900 tracking-tight leading-tight mb-6">
                            Delivering quality education rooted in strong values since 1994.
                        </h2>
<div className="space-y-6 text-slate-600 font-light text-base leading-relaxed">
<p>
                                Kent Public School, established in 1994, is a premier CBSE institution committed to delivering quality education rooted in strong values and modern learning practices.
                            </p>
<p>
                                Located in Koottanad, Palakkad, we have been shaping young minds for over three decades, empowering students to succeed academically and grow as responsible, compassionate individuals.
                            </p>
</div>
<div className="mt-10 grid grid-cols-2 gap-8 py-8 border-y border-slate-200">
<div>
<p className="font-serif text-4xl font-medium text-navy-900 tracking-tight mb-1">30+</p>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Years of Excellence</p>
</div>
<div>
<p className="font-serif text-4xl font-medium text-navy-900 tracking-tight mb-1">CBSE</p>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Curriculum Standard</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="academics">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="font-serif text-4xl font-medium text-navy-900 tracking-tight mb-4">Learning Pathways for Every Stage</h2>
<p className="text-slate-500 font-light text-lg">Comprehensive educational programs tailored to nurture development from early years to graduation.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-navy-900 hover:text-gold-600 transition-colors group" href="#">
                        Explore Academics 
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-slate-100">
<img alt="Pre-Primary" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&amp;w=2922&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-xl font-medium text-navy-900 tracking-tight mb-2 group-hover:text-gold-600 transition-colors">Pre-Primary</h3>
<p className="text-sm text-slate-500 font-light">Foundation learning focused on curiosity, cognitive skills, and motor development.</p>
<div className="h-px w-0 bg-gold-500 mt-4 group-hover:w-full transition-all duration-500"></div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-slate-100">
<img alt="Primary" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-xl font-medium text-navy-900 tracking-tight mb-2 group-hover:text-gold-600 transition-colors">Primary</h3>
<p className="text-sm text-slate-500 font-light">Concept building and establishing a strong foundation in core subjects.</p>
<div className="h-px w-0 bg-gold-500 mt-4 group-hover:w-full transition-all duration-500"></div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-slate-100">
<img alt="Middle School" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<h3 className="font-serif text-xl font-medium text-navy-900 tracking-tight mb-2 group-hover:text-gold-600 transition-colors">Middle School</h3>
<p className="text-sm text-slate-500 font-light">Advanced skill development, encouraging critical thinking and independence.</p>
<div className="h-px w-0 bg-gold-500 mt-4 group-hover:w-full transition-all duration-500"></div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-slate-100">
<img alt="Secondary School" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-xl font-medium text-navy-900 tracking-tight mb-2 group-hover:text-gold-600 transition-colors">Secondary &amp; Senior</h3>
<p className="text-sm text-slate-500 font-light">Rigorous academic excellence preparing students for top universities.</p>
<div className="h-px w-0 bg-gold-500 mt-4 group-hover:w-full transition-all duration-500"></div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-navy-900 text-center relative overflow-hidden">

<div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6">
<iconify-icon className="text-4xl text-gold-500/50 mb-8 block mx-auto" icon="solar:quote-right-bold-duotone"></iconify-icon>
<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-tight">
                    Learning <span className="text-gold-400 italic font-normal">Today,</span><br/> Leading Tomorrow.
                </h2>
<p className="mt-8 text-lg text-slate-300 font-light max-w-2xl mx-auto">
                    We believe education is not just about academics—it’s about building character, confidence, and a lifelong passion for learning.
                </p>
<div className="w-16 h-px bg-gold-500 mx-auto mt-10"></div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-50" id="campus">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-serif text-4xl font-medium text-navy-900 tracking-tight mb-4">A Vibrant &amp; Engaging Campus</h2>
<p className="text-slate-500 font-light text-lg">Where students explore academics, sports, arts, and leadership opportunities in a supportive environment.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">

<div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative group">
<img alt="Main Building" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-md text-white rounded-full mb-3 inline-block">Eco-Friendly</span>
<h3 className="font-serif text-2xl font-medium text-white tracking-tight">Serene Main Campus</h3>
</div>
</div>

<div className="rounded-3xl overflow-hidden relative group">
<img alt="Library" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1568667256549-094345857637?q=80&amp;w=2830&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="font-serif text-xl font-medium text-white tracking-tight">Extensive Library</h3>
</div>
</div>

<div className="rounded-3xl overflow-hidden relative group">
<img alt="Science Lab" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="font-serif text-xl font-medium text-white tracking-tight">Science Laboratories</h3>
</div>
</div>

<div className="md:col-span-2 rounded-3xl overflow-hidden relative group">
<img alt="Sports Complex" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<h3 className="font-serif text-2xl font-medium text-white tracking-tight">Sports Complex &amp; Playgrounds</h3>
</div>
</div>

<div className="rounded-3xl overflow-hidden relative group">
<img alt="Smart Classrooms" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="font-serif text-xl font-medium text-white tracking-tight">Smart Classrooms</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white relative" id="admissions">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div className="flex flex-col justify-center">
<span className="text-xs font-medium text-gold-600 tracking-wider uppercase mb-4 block">Admissions Open</span>
<h2 className="font-serif text-4xl lg:text-5xl font-medium text-navy-900 tracking-tight leading-tight mb-6">
                            Join a school that shapes the future.
                        </h2>
<p className="text-slate-500 font-light text-lg mb-12">
                            Begin your child's journey at Kent Public School today. Our seamless admissions process is designed to welcome students who are ready to thrive.
                        </p>

<div className="space-y-8">
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-navy-900 text-white flex items-center justify-center text-sm font-medium z-10">1</div>
<div className="w-px h-full bg-slate-200 mt-2"></div>
</div>
<div className="pb-2">
<h4 className="font-medium text-navy-900 mb-1">Submit Application Form</h4>
<p className="text-sm text-slate-500 font-light">Complete the online form with birth certificate and previous records.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-slate-100 text-slate-400 border border-slate-200 flex items-center justify-center text-sm font-medium z-10">2</div>
<div className="w-px h-full bg-slate-200 mt-2"></div>
</div>
<div className="pb-2">
<h4 className="font-medium text-slate-400 mb-1">Interaction / Assessment</h4>
<p className="text-sm text-slate-400 font-light">Meet our educators for a foundational assessment and brief interaction.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-slate-100 text-slate-400 border border-slate-200 flex items-center justify-center text-sm font-medium z-10">3</div>
</div>
<div className="pb-2">
<h4 className="font-medium text-slate-400 mb-1">Confirmation of Admission</h4>
<p className="text-sm text-slate-400 font-light">Receive confirmation and secure your spot at Kent.</p>
</div>
</div>
</div>
</div>

<div className="relative">

<div className="absolute inset-0 bg-gold-400/20 blur-3xl rounded-[3rem] -z-10 transform translate-x-4 translate-y-4"></div>
<div className="bg-white border border-slate-100 shadow-[0_8px_40px_rgb(0,0,0,0.08)] rounded-3xl p-8 sm:p-10">
<h3 className="font-serif text-2xl font-medium text-navy-900 tracking-tight mb-6">Enquiry Form</h3>
<form className="space-y-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-600">Full Name</label>
<input className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 rounded-xl px-4 py-3 text-sm transition-all" placeholder="Enter parent/student name" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-600">Email Address</label>
<input className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 rounded-xl px-4 py-3 text-sm transition-all" placeholder="email@example.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-600">Phone Number</label>
<input className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 rounded-xl px-4 py-3 text-sm transition-all" placeholder="+91" type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-600">Grade Applying For</label>
<div className="relative">
<select className="w-full appearance-none bg-slate-50 border border-slate-200 focus:bg-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 rounded-xl px-4 py-3 text-sm text-slate-600 transition-all cursor-pointer">
<option value="">Select Grade</option>
<option value="pre">Pre-Primary</option>
<option value="pri">Primary School</option>
<option value="mid">Middle School</option>
<option value="high">Secondary &amp; Senior Secondary</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="w-full mt-6 bg-navy-900 text-white font-medium text-sm px-6 py-4 rounded-xl hover:bg-navy-800 transition-colors shadow-md flex justify-center items-center gap-2" type="button">
                                    Apply Now
                                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-xs text-gold-600 font-medium text-center mt-4 flex items-center justify-center gap-1.5 bg-gold-50 py-2 rounded-lg">
<iconify-icon className="text-base" icon="solar:fire-linear"></iconify-icon> 
                                    Admissions open for the upcoming academic year
                                </p>
</form>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-navy-900 text-white pt-20 pb-10 border-t border-slate-800" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

<div className="space-y-6">
<a className="font-serif text-2xl tracking-widest font-medium text-white uppercase block" href="#">Kent</a>
<p className="text-sm text-slate-400 font-light leading-relaxed max-w-xs">
                        Kent Public School, established in 1994, is a premier CBSE institution shaping young minds and empowering future leaders.
                    </p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:basketball-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="font-medium text-white mb-6 uppercase text-xs tracking-wider">Quick Links</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-400 hover:text-gold-400 transition-colors font-light" href="#about">About Us</a></li>
<li><a className="text-sm text-slate-400 hover:text-gold-400 transition-colors font-light" href="#academics">Academic Programs</a></li>
<li><a className="text-sm text-slate-400 hover:text-gold-400 transition-colors font-light" href="#admissions">Admissions Process</a></li>
<li><a className="text-sm text-slate-400 hover:text-gold-400 transition-colors font-light" href="#campus">Campus Life</a></li>
<li><a className="text-sm text-slate-400 hover:text-gold-400 transition-colors font-light" href="#">Careers</a></li>
</ul>
</div>

<div>
<h4 className="font-medium text-white mb-6 uppercase text-xs tracking-wider">Resources</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-400 hover:text-gold-400 transition-colors font-light" href="#">Student Portal</a></li>
<li><a className="text-sm text-slate-400 hover:text-gold-400 transition-colors font-light" href="#">Parent Directory</a></li>
<li><a className="text-sm text-slate-400 hover:text-gold-400 transition-colors font-light" href="#">School Calendar</a></li>
<li><a className="text-sm text-slate-400 hover:text-gold-400 transition-colors font-light" href="#">News &amp; Events</a></li>
</ul>
</div>

<div>
<h4 className="font-medium text-white mb-6 uppercase text-xs tracking-wider">Contact Us</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-400 font-light">
<iconify-icon className="text-lg text-gold-500 shrink-0 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span>Koottanad, Palakkad,<br/>Kerala</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-400 font-light">
<iconify-icon className="text-lg text-gold-500 shrink-0" icon="solar:phone-linear"></iconify-icon>
<span>+91 7356680413 <br/>+91 7356788413</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-400 font-light">
<iconify-icon className="text-lg text-gold-500 shrink-0" icon="solar:letter-linear"></iconify-icon>
<span>admin@kentpublicschool.in</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-500 font-light">© 2024 Kent Public School. Learning Today, Leading Tomorrow.</p>
<div className="flex gap-6">
<a className="text-xs text-slate-500 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-slate-500 hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
