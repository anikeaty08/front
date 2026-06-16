import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



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
      

<nav className="fixed w-full top-0 z-50 glass-nav border-b transition-all duration-300 border-blue-800/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-2" href="#">
<div className="flex text-lg font-semibold tracking-tighter w-8 h-8 rounded-lg items-center justify-center text-black bg-cyan-400">T</div>
<span className="uppercase text-xl font-semibold text-sky-950 tracking-tight">Titans School</span>
</a>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium transition-colors text-blue-400 hover:text-cyan-400" href="#about">About Us</a>
<a className="text-sm font-medium transition-colors text-blue-400 hover:text-cyan-400" href="#academics">Academics</a>
<a className="text-sm font-medium transition-colors text-blue-400 hover:text-cyan-400" href="#facilities">Facilities</a>
<a className="text-sm font-medium transition-colors text-blue-400 hover:text-cyan-400" href="#gallery">Gallery</a>
<a className="text-sm font-medium transition-colors text-blue-400 hover:text-cyan-400" href="#admissions">Admissions</a>
<a className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium rounded-full hover:bg-green-500 transition-all hover:shadow-md hover:-translate-y-0.5 text-blue-100 bg-green-600" href="#admissions">
                        Apply Now
                    </a>
</div>

<button className="md:hidden p-2 rounded-lg transition-colors text-blue-400 hover:bg-blue-900" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:hidden border-b px-4 pt-2 pb-6 space-y-1 shadow-lg bg-black border-blue-800/50" id="mobile-menu">
<a className="block px-3 py-2 rounded-md text-base font-medium text-blue-300 hover:bg-blue-950 hover:text-cyan-400" href="#about">About Us</a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-blue-300 hover:bg-blue-950 hover:text-cyan-400" href="#academics">Academics</a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-blue-300 hover:bg-blue-950 hover:text-cyan-400" href="#facilities">Facilities</a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-blue-300 hover:bg-blue-950 hover:text-cyan-400" href="#gallery">Gallery</a>
<a className="block mt-4 text-center px-4 py-3 text-base font-medium rounded-xl hover:bg-green-500 text-blue-100 bg-green-600" href="#admissions">Apply Now</a>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="absolute inset-0 bg-grid-pattern -z-10 opacity-60"></div>
<div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] rounded-full blur-3xl -z-10 bg-cyan-900/50"></div>
<div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] rounded-full blur-3xl -z-10 bg-green-900/50"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
<div className="inline-flex gap-2 text-xs font-medium border rounded-full mb-6 pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center text-cyan-400 bg-cyan-950 border-cyan-900">Admissions Open for 2026-27</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 leading-[1.1] text-blue-100">
                        Building <span className="text-cyan-400">Bright</span><br/>Futures Today.
                    </h1>
<p className="text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed text-blue-400">
                        Welcome to Titans School, Hyderabad. We nurture young minds with modern education, interactive learning, and a safe, engaging environment.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5 text-black bg-cyan-400 hover:bg-cyan-300 hover:shadow-cyan-400/20" href="#admissions">
                            Start Application
                            <iconify-icon className="" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium border rounded-full transition-all hover:-translate-y-0.5 text-blue-300 bg-black border-blue-800 hover:bg-blue-950" href="#about">
                            Discover Campus
                        </a>
</div>
</div>

<div className="relative hidden sm:block">
<div className="grid grid-cols-2 gap-4">
<img alt="Students" className="rounded-3xl w-full h-64 object-cover shadow-lg border border-blue-900" src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<img alt="Learning" className="rounded-3xl w-full h-80 object-cover shadow-lg border translate-y-8 border-blue-900" src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm p-4 rounded-2xl shadow-xl border flex items-center gap-4 z-10 bg-black/90 border-blue-900">
<div className="w-12 h-12 rounded-full flex items-center justify-center bg-green-900 text-green-400">
<iconify-icon icon="solar:star-fall-minimalistic-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="">
<p className="text-2xl font-semibold tracking-tight text-blue-100">15+</p>
<p className="text-xs text-blue-500 font-medium">Years of Excellence</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pb-20 relative z-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid sm:grid-cols-3 gap-6 -mt-12">
<div className="p-6 rounded-3xl shadow-sm border hover:shadow-md transition-shadow group bg-black border-blue-800/60">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-cyan-950 text-cyan-400">
<iconify-icon icon="solar:user-speak-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2 text-blue-100">Experienced Teachers</h3>
<p className="text-sm text-blue-400">Our faculty consists of highly trained professionals dedicated to student success.</p>
</div>
<div className="p-6 rounded-3xl shadow-sm border hover:shadow-md transition-shadow group bg-black border-blue-800/60">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-green-950 text-green-400">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2 text-blue-100">Safe Campus</h3>
<p className="text-sm text-blue-400">24/7 security, CCTV surveillance, and a caring environment for complete peace of mind.</p>
</div>
<div className="p-6 rounded-3xl shadow-sm border hover:shadow-md transition-shadow group bg-black border-blue-800/60">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-yellow-950 text-yellow-400">
<iconify-icon icon="solar:diploma-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2 text-blue-100">Holistic Development</h3>
<p className="text-sm text-blue-400">Focus on academics, sports, arts, and character building for all-round growth.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t bg-black border-blue-900" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<img alt="Campus" className="rounded-[2.5rem] shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute -bottom-8 -right-8 p-8 rounded-[2rem] shadow-xl max-w-xs hidden sm:block bg-blue-100 text-black">
<iconify-icon className="text-blue-500 mb-4" icon="solar:quote-right-linear" strokeWidth="1.5" width="32"></iconify-icon>
<p className="text-sm font-medium leading-relaxed mb-4">"Education is not preparation for life; education is life itself. We strive to make every day a learning experience."</p>
<p className="text-xs text-blue-600">— Principal, Titans School</p>
</div>
</div>
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 bg-blue-900 text-blue-400">
                        About Our Institution
                    </div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6 text-blue-100">Empowering the leaders of tomorrow.</h2>
<p className="text-base mb-8 leading-relaxed text-blue-400">
                        Located in the heart of Hyderabad, Titans School is committed to providing world-class education. We believe in creating an ecosystem where curiosity is encouraged, and potential is maximized from LKG to Higher Classes.
                    </p>
<div className="space-y-4">
<div className="p-6 rounded-3xl border bg-cyan-950/50 border-cyan-900/50">
<h3 className="text-lg font-semibold tracking-tight mb-2 flex items-center gap-2 text-cyan-100">
<iconify-icon className="text-cyan-400" icon="solar:eye-linear" strokeWidth="1.5" width="20"></iconify-icon>
                                Our Vision
                            </h3>
<p className="text-sm text-cyan-200/80">To be a premier educational institution that fosters intellectual, social, and emotional growth, creating responsible global citizens.</p>
</div>
<div className="p-6 rounded-3xl border bg-green-950/50 border-green-900/50">
<h3 className="text-lg font-semibold tracking-tight mb-2 flex items-center gap-2 text-green-100">
<iconify-icon className="text-green-400" icon="solar:target-linear" strokeWidth="1.5" width="20"></iconify-icon>
                                Our Mission
                            </h3>
<p className="text-sm text-green-200/80">To deliver a progressive curriculum with activity-based learning, ensuring every child discovers their unique talents and passions.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t relative overflow-hidden bg-blue-950 border-blue-800/50" id="academics">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4 text-blue-100">Academic Excellence</h2>
<p className="text-base text-blue-400">A structured, engaging, and comprehensive curriculum designed to build a strong foundation for lifelong learning.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="rounded-3xl p-8 shadow-sm border bg-black border-blue-800/60">
<div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 bg-blue-900">
<iconify-icon className="text-blue-300" icon="solar:book-bookmark-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 text-blue-100">Comprehensive Curriculum</h3>
<p className="text-sm mb-6 text-blue-400">Following national standards, our syllabus covers core subjects extensively while integrating modern disciplines.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-blue-400"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Mathematics &amp; Sciences</li>
<li className="flex items-center gap-2 text-sm text-blue-400"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Languages &amp; Arts</li>
<li className="flex items-center gap-2 text-sm text-blue-400"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Computer Science</li>
</ul>
</div>

<div className="rounded-3xl p-8 shadow-md bg-cyan-400 text-black">
<div className="w-10 h-10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 bg-black/20">
<iconify-icon className="text-black" icon="solar:gamepad-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 text-black">Activity-Based Learning</h3>
<p className="text-sm mb-6 text-cyan-900">We move beyond textbooks. Our methodology emphasizes practical application, experiments, and collaborative projects.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-cyan-950"><iconify-icon className="text-cyan-800" icon="solar:check-circle-linear"></iconify-icon> Hands-on Experiments</li>
<li className="flex items-center gap-2 text-sm text-cyan-950"><iconify-icon className="text-cyan-800" icon="solar:check-circle-linear"></iconify-icon> Educational Field Trips</li>
<li className="flex items-center gap-2 text-sm text-cyan-950"><iconify-icon className="text-cyan-800" icon="solar:check-circle-linear"></iconify-icon> Group Presentations</li>
</ul>
</div>

<div className="rounded-3xl p-8 shadow-sm border bg-black border-blue-800/60">
<div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 bg-blue-900">
<iconify-icon className="text-blue-300" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 text-blue-100">Classes Offered</h3>
<p className="text-sm mb-6 text-blue-400">We provide a seamless educational journey from early childhood to higher secondary education.</p>
<div className="space-y-3">
<div className="flex justify-between items-center py-2 border-b border-blue-900">
<span className="text-sm font-medium text-blue-200">Pre-Primary</span>
<span className="text-xs text-blue-500">LKG - UKG</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-blue-900">
<span className="text-sm font-medium text-blue-200">Primary</span>
<span className="text-xs text-blue-500">Grades 1 - 5</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-blue-900">
<span className="text-sm font-medium text-blue-200">Secondary</span>
<span className="text-xs text-blue-500">Grades 6 - 10</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t pt-24 pb-24 bg-black border-blue-900" id="facilities">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end gap-6 mb-12 gap-x-6 gap-y-6 justify-between">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4 text-blue-100">World-Class Facilities</h2>
<p className="text-base text-blue-400">Our campus is equipped with state-of-the-art infrastructure to support diverse learning styles and extracurricular activities.</p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 sm:gap-6 rotate-x-5 gap-x-8 gap-y-4">
<div className="rounded-3xl p-6 border transition-colors group bg-blue-950 border-blue-900 hover:border-cyan-800">
<div className="w-12 h-12 rounded-2xl shadow-sm border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-black border-blue-800 text-cyan-400">
<iconify-icon icon="solar:monitor-camera-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight mb-1 text-blue-100">Smart Classrooms</h3>
<p className="text-xs text-blue-500">Interactive boards &amp; digital tools.</p>
</div>
<div className="rounded-3xl p-6 border transition-colors group bg-blue-950 border-blue-900 hover:border-green-800">
<div className="w-12 h-12 rounded-2xl shadow-sm border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-black border-blue-800 text-green-400">
<iconify-icon className="" icon="solar:book-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight mb-1 text-blue-100">Library</h3>
<p className="text-xs text-blue-500">Vast collection of books &amp; e-resources.</p>
</div>
<div className="transition-colors group max-w-xs border rounded-3xl pt-6 pr-6 pb-6 pl-6 hover:border-yellow-800 bg-blue-950 border-blue-900">
<div className="w-12 h-12 rounded-2xl shadow-sm border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-black border-blue-800 text-yellow-400">
<iconify-icon className="" icon="solar:basketball-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight mb-1 text-blue-100">Playground</h3>
<p className="text-xs text-blue-500">Sprawling grounds for multiple sports.</p>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden bg-blue-100 text-black" id="gallery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Campus Life</h2>
<p className="text-base max-w-2xl mx-auto text-blue-600">Glimpses of daily activities, events, and the vibrant atmosphere at Titans School.</p>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
<div className="col-span-2 row-span-2 relative group overflow-hidden rounded-3xl">
<img alt="Classroom" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 from-white/60">
<span className="text-sm font-medium">Smart Classrooms</span>
</div>
</div>
<div className="relative group overflow-hidden rounded-3xl">
<img alt="Students" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="relative group overflow-hidden rounded-3xl">
<img alt="Activity" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="col-span-2 relative group overflow-hidden rounded-3xl">
<img alt="Library" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>
</div>
</section>

<section className="py-24 border-t bg-blue-950 border-blue-800/50" id="admissions">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 max-w-none max-h-none relative top-1111 left-1 gap-x-16 gap-y-16">

<div className="">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6 text-blue-100">Join the Titans Family.</h2>
<p className="text-base text-blue-400 mb-8">Admission are open for the upcoming academic year. Follow our simple process to enroll your child.</p>
<div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-200 before:to-transparent">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border group-[.is-active]:bg-cyan-600 text-blue-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 border-black bg-blue-900">
                                1
                            </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-2xl shadow-sm border bg-black border-blue-900">
<h4 className="text-base font-semibold tracking-tight mb-1 text-blue-100">contact </h4>
<p className="text-xs text-blue-500">Contact the given number Or message the number</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border text-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 border-black bg-blue-900">
                                2
                            </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-2xl shadow-sm border bg-black border-blue-900">
<h4 className="text-base font-semibold tracking-tight mb-1 text-blue-100">Campus Visit</h4>
<p className="text-xs text-blue-500">Meet counselors and tour the school facilities.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border text-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 border-black bg-blue-900">
                                3
                            </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-2xl shadow-sm border bg-black border-blue-900">
<h4 className="text-base font-semibold tracking-tight mb-1 text-blue-100">Interaction</h4>
<p className="text-xs text-blue-500">A brief, friendly interaction with the student.</p>
</div>
</div>
</div>
</div>

</div>
</div>
</section>

<section className="py-24 border-t bg-black border-blue-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-12 text-center text-blue-100">What Parents Say</h2>
<div className="grid md:grid-cols-3 gap-6">
<div className="p-8 rounded-3xl border bg-blue-950 border-blue-900">
<div className="flex mb-4 text-green-600">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm mb-6 italic text-blue-400">"The activity-based learning approach has completely transformed how my child views going to school. He is excited every morning!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm bg-cyan-900 text-cyan-300">SP</div>
<div className="">
<p className="text-sm font-semibold text-blue-100">Sneha Patel</p>
<p className="text-xs text-blue-500">Parent of Grade 3 student</p>
</div>
</div>
</div>
<div className="p-8 rounded-3xl border bg-blue-950 border-blue-900">
<div className="flex mb-4 text-green-600">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm mb-6 italic text-blue-400">"Safety was our primary concern, but Titans School's secure campus and caring staff have put us completely at ease. Excellent facilities."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm bg-yellow-900 text-yellow-300">RK</div>
<div>
<p className="text-sm font-semibold text-blue-100">Rajesh Kumar</p>
<p className="text-xs text-blue-500">Parent of LKG student</p>
</div>
</div>
</div>
<div className="p-8 rounded-3xl border bg-blue-950 border-blue-900">
<div className="flex mb-4 text-green-600">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm mb-6 italic text-blue-400">"The teachers are highly qualified and very approachable. The focus on overall development is visible in my daughter's confidence."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm bg-green-900 text-green-300">AR</div>
<div className="">
<p className="text-sm font-semibold text-blue-100">Anjali Reddy</p>
<p className="text-xs text-blue-500">Parent of Grade 8 student</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t bg-blue-50 text-blue-700 border-blue-200">

<div className="border-b" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(156, 163, 175, 1), rgba(75, 85, 99, 1))'}}>
<div className="sm:px-6 lg:px-8 max-w-7xl border-gray-900 mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="grid lg:grid-cols-2 gap-12">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight mb-6 text-black">Contact Us</h2>
<p className="text-sm mb-8 max-w-md text-blue-600">Have questions about admissions or facilities? Our team is here to help you.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full border flex items-center justify-center shrink-0 bg-blue-100 border-blue-200">
<iconify-icon className="text-cyan-600" icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium mb-1 text-black">Campus Address</h4><p className="leading-relaxed text-sm text-blue-600">8/3, 169/11&amp;11A, Indira Nagar, Balaji Enclave, Habib Fatima Nagar, Borabanda, Hyderabad, Telangana 500114</p>
<p className="leading-relaxed text-sm text-blue-600"></p>
</div>
</div>
<div className="flex gap-4 gap-x-4 gap-y-4 items-start">
<div className="w-10 h-10 rounded-full border flex items-center justify-center shrink-0 bg-blue-100 border-blue-200">
<iconify-icon className="text-cyan-600" icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium mb-1 text-black">Phone</h4>
<p className="text-sm text-blue-600">+91 9000673766 /+91 9440510494</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex shrink-0 bg-blue-100 w-10 h-10 border-blue-200 border rounded-full items-center justify-center">
<iconify-icon className="text-cyan-600" icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium mb-1 text-black">Email</h4>
<p className="text-sm text-blue-600">titansschool@gmail.com</p>
</div>
</div>
</div>
</div>

<div className="rounded-3xl border overflow-hidden relative min-h-[300px] flex items-center justify-center group cursor-pointer bg-blue-100 border-blue-200">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&amp;fit=crop&amp;q=80&amp;w=800')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-500"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg mb-3 animate-bounce bg-cyan-400 shadow-cyan-100/50">
<iconify-icon className="text-black" height="24" icon="solar:map-point-bold" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon>
</div>
<span className="text-xs font-medium border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur-sm text-black bg-blue-50/80 border-blue-200">View on Google Maps</span>
</div>
</div>
</div>
</div>
</div>

<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-10 pr-4 pb-10 pl-4">
<div className="flex flex-col md:flex-row gap-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg flex items-center justify-center font-semibold text-lg tracking-tighter bg-cyan-400 text-black">T</div>
<span className="uppercase text-xl font-semibold tracking-tight text-black">Titans School</span>
</div>
<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-blue-600">
<a className="transition-colors hover:text-black" href="#">Home</a>
<a className="transition-colors hover:text-black" href="#about">About Us</a>
<a className="transition-colors hover:text-black" href="#academics">Academics</a>
<a className="transition-colors hover:text-black" href="#facilities">Facilities</a>
<a className="transition-colors hover:text-black" href="#gallery">Gallery</a>
</div>
<div className="flex items-center gap-4">
<a className="flex items-center justify-center transition-all hover:bg-cyan-400 hover:border-cyan-400 hover:text-black bg-blue-100 w-10 h-10 border-blue-200 border rounded-full" href="#">
<iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border flex items-center justify-center transition-all bg-blue-100 border-blue-200 hover:bg-cyan-600 hover:border-cyan-600 hover:text-black" href="#">
<iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="mt-8 text-center text-xs text-blue-400">
                © 2024 Titans School, Hyderabad. All rights reserved.
            </div>
</div>
</footer>

<a className="fixed bottom-6 right-6 w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/30 hover:scale-110 transition-all z-50 text-black hover:bg-yellow-400" href="#">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="28"></iconify-icon>
</a>

    </>
  );
}
