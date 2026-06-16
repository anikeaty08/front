import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
charcoal: '#0B0B12',
neon: '#3B82F6',
neonhover: '#2563EB',
glass: 'rgba(255, 255, 255, 0.03)',
glassborder: 'rgba(255, 255, 255, 0.08)',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
heading: ['Poppins', 'sans-serif'],
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



      // Initialize AOS
      AOS.init({
          duration: 800,
          once: true,
          offset: 50,
          easing: 'ease-out-cubic'
      });

      // Smooth Parallax for Hero Video
      window.addEventListener('scroll', () => {
          const scrolled = window.scrollY;
          const heroBg = document.querySelector('.hero-video-container');
          if (heroBg) {
              heroBg.style.transform = `translateY(${scrolled * 0.4}px)`;
          }
      });

      // Smooth Scroll for Anchors
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
              e.preventDefault();
              document.querySelector(this.getAttribute('href')).scrollIntoView({
                  behavior: 'smooth'
              });
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0 hero-parallax">
<div className="absolute inset-0 bg-[#0B0B12] z-0"></div>
<div className="hero-video-container">
<video autoplay="" className="hero-video" loop="" muted="" playsinline="">
<source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-blue-particles-4786-large.mp4" type="video/mp4"/>
</video>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-[#0B0B12]/90 via-[#0B0B12]/60 to-[#0B0B12] z-10"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-10"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="font-heading font-semibold text-xl tracking-tighter text-white flex items-center gap-2 group" href="#">
<span className="text-neon group-hover:rotate-12 transition-transform duration-300">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="24"></span>
</span>
          IEM
          <span className="text-gray-500">Mart</span>
</a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="#features">
            Features
          </a>
<a className="hover:text-white transition-colors" href="#categories">
            Categories
          </a>
<a className="hover:text-white transition-colors" href="#how-it-works">
            How it Works
          </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#">
            Log in
          </a>
<a className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-neon border border-white/10 hover:border-neon text-white text-xs font-medium tracking-wide transition-all duration-300 btn-neon-glow" href="#">
            Sign Up
          </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neon mb-8 animate-float">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-neon"></span>
</span>
        Live on 50+ Campuses
      </div>
<h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
        Upgrade Your
        <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-neon via-blue-400 to-purple-400 text-glow">
          Campus Lifestyle
        </span>
</h1>
<p className="font-sans text-gray-400 text-base sm:text-lg max-w-2xl mb-10 leading-relaxed">
        The exclusive marketplace for students. Buy, sell, and trade textbooks,
        lab gear, and dorm essentials securely within your university network.
      </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="px-8 py-3.5 rounded-lg bg-neon text-white font-medium text-sm tracking-wide hover:bg-neonhover transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2 group" href="#browse">
          Browse Items
          <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="18"></span>
</a>
<a className="px-8 py-3.5 rounded-lg glass-card text-white font-medium text-sm tracking-wide hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 group" href="#list">
<span className="iconify text-gray-400 group-hover:text-white transition-colors" data-icon="lucide:plus" data-strokeWidth="1.5" data-width="18"></span>
          List an Item
        </a>
</div>
</section>
<div className="w-full bg-white/[0.02] border-y border-white/5 py-4 overflow-hidden relative z-20 backdrop-blur-sm">
<div className="flex w-max animate-marquee">
<div className="flex items-center gap-12 mx-6 text-sm font-medium text-gray-500 uppercase tracking-widest">
<span>IEM Kolkata</span>
<span className="text-neon">•</span>
<span>UEM Jaipur</span>
<span className="text-neon">•</span>
<span>IIT Kharagpur</span>
<span className="text-neon">•</span>
<span>Techno India</span>
<span className="text-neon">•</span>
<span>Jadavpur University</span>
<span className="text-neon">•</span>
<span>Heritage Institute</span>
<span className="text-neon">•</span>
<span>Amity University</span>
<span className="text-neon">•</span>
<span>St. Xavier's</span>
<span className="text-neon">•</span>
</div>
<div className="flex items-center gap-12 mx-6 text-sm font-medium text-gray-500 uppercase tracking-widest">
<span>IEM Kolkata</span>
<span className="text-neon">•</span>
<span>UEM Jaipur</span>
<span className="text-neon">•</span>
<span>IIT Kharagpur</span>
<span className="text-neon">•</span>
<span>Techno India</span>
<span className="text-neon">•</span>
<span>Jadavpur University</span>
<span className="text-neon">•</span>
<span>Heritage Institute</span>
<span className="text-neon">•</span>
<span>Amity University</span>
<span className="text-neon">•</span>
<span>St. Xavier's</span>
<span className="text-neon">•</span>
</div>
</div>
</div>

<section className="py-20 px-6 max-w-7xl mx-auto" id="features">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300 group" data-aos="fade-up" data-aos-delay="0">
<div className="w-10 h-10 rounded-lg bg-neon/10 flex items-center justify-center text-neon mb-4 group-hover:bg-neon group-hover:text-white transition-colors duration-300">
<span className="iconify" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="font-heading text-lg font-semibold text-white mb-2 tracking-tight">
            Easy Listing
          </h3>
<p className="text-sm text-gray-400 leading-relaxed">
            Snap a photo, add a price, and list your item in under 60 seconds.
          </p>
</div>

<div className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300 group" data-aos="fade-up" data-aos-delay="100">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
<span className="iconify" data-icon="lucide:graduation-cap" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="font-heading text-lg font-semibold text-white mb-2 tracking-tight">
            Verified Students
          </h3>
<p className="text-sm text-gray-400 leading-relaxed">
            Join a trusted community. Only accessible with a valid .edu email
            address.
          </p>
</div>

<div className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300 group" data-aos="fade-up" data-aos-delay="200">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
<span className="iconify" data-icon="lucide:wallet" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="font-heading text-lg font-semibold text-white mb-2 tracking-tight">
            Student Prices
          </h3>
<p className="text-sm text-gray-400 leading-relaxed">
            Find deals up to 70% cheaper than retail stores on campus
            essentials.
          </p>
</div>

<div className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300 group" data-aos="fade-up" data-aos-delay="300">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
<span className="iconify" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="font-heading text-lg font-semibold text-white mb-2 tracking-tight">
            Safe Meetups
          </h3>
<p className="text-sm text-gray-400 leading-relaxed">
            Meet safely on campus grounds. No shipping fees, no waiting.
          </p>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-7xl mx-auto border-t border-white/5" id="categories">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-2">
            Explore Categories
          </h2>
<p className="text-gray-400 text-sm">
            Everything you need for the semester.
          </p>
</div>
<a className="text-neon text-sm font-medium hover:text-neonhover transition-colors flex items-center gap-1 group" href="#">
          View All
          <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

<a className="glass-card p-6 rounded-xl flex flex-col items-center justify-center text-center gap-4 hover:border-neon/50 hover:bg-white/5 transition-all duration-300 group" href="#">
<div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-gray-300 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:book-open" data-strokeWidth="1.5" data-width="28"></span>
</div>
<span className="text-sm font-medium text-gray-200 group-hover:text-white">
            Books &amp; Notes
          </span>
</a>

<a className="glass-card p-6 rounded-xl flex flex-col items-center justify-center text-center gap-4 hover:border-neon/50 hover:bg-white/5 transition-all duration-300 group" href="#">
<div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-gray-300 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:laptop" data-strokeWidth="1.5" data-width="28"></span>
</div>
<span className="text-sm font-medium text-gray-200 group-hover:text-white">
            Electronics
          </span>
</a>

<a className="glass-card p-6 rounded-xl flex flex-col items-center justify-center text-center gap-4 hover:border-neon/50 hover:bg-white/5 transition-all duration-300 group" href="#">
<div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-gray-300 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:drafting-compass" data-strokeWidth="1.5" data-width="28"></span>
</div>
<span className="text-sm font-medium text-gray-200 group-hover:text-white">
            Project Materials
          </span>
</a>

<a className="glass-card p-6 rounded-xl flex flex-col items-center justify-center text-center gap-4 hover:border-neon/50 hover:bg-white/5 transition-all duration-300 group" href="#">
<div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-gray-300 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:pen-tool" data-strokeWidth="1.5" data-width="28"></span>
</div>
<span className="text-sm font-medium text-gray-200 group-hover:text-white">
            Stationery
          </span>
</a>

<a className="glass-card p-6 rounded-xl flex flex-col items-center justify-center text-center gap-4 hover:border-neon/50 hover:bg-white/5 transition-all duration-300 group" href="#">
<div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-gray-300 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:lamp" data-strokeWidth="1.5" data-width="28"></span>
</div>
<span className="text-sm font-medium text-gray-200 group-hover:text-white">
            Dorm Essentials
          </span>
</a>
</div>
</section>

<section className="py-20 px-6 bg-white/[0.02]" id="how-it-works">
<div className="max-w-7xl mx-auto">
<h2 className="font-heading text-2xl sm:text-3xl font-semibold text-center text-white tracking-tight mb-16">
          How ReCycle Works
        </h2>
<div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-neon/50 via-purple-500/50 to-neon/50 border-t border-dashed border-white/20 -z-10"></div>

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-[#0B0B12] border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-neon/50 transition-colors duration-300">
<span className="text-2xl font-semibold text-neon">01</span>
</div>
<h4 className="text-white font-medium mb-2">Sign Up</h4>
<p className="text-sm text-gray-400">
              Register with your official .edu email address.
            </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-[#0B0B12] border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-neon/50 transition-colors duration-300">
<span className="text-2xl font-semibold text-neon">02</span>
</div>
<h4 className="text-white font-medium mb-2">Browse or List</h4>
<p className="text-sm text-gray-400">
              Search for what you need or upload items to sell.
            </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-[#0B0B12] border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-neon/50 transition-colors duration-300">
<span className="text-2xl font-semibold text-neon">03</span>
</div>
<h4 className="text-white font-medium mb-2">Connect</h4>
<p className="text-sm text-gray-400">
              Chat securely within the app to arrange a meetup.
            </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-[#0B0B12] border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-neon/50 transition-colors duration-300">
<span className="text-2xl font-semibold text-neon">04</span>
</div>
<h4 className="text-white font-medium mb-2">Exchange</h4>
<p className="text-sm text-gray-400">
              Meet on campus and complete the exchange.
            </p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-7xl mx-auto overflow-hidden">
<h2 className="font-heading text-2xl font-semibold text-white tracking-tight mb-10">
        What Students Say
      </h2>
<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4">

<div className="min-w-[300px] md:min-w-[350px] glass-card p-6 rounded-xl snap-start border-l-4 border-l-neon">
<div className="flex gap-1 text-yellow-500 mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-sm text-gray-300 leading-relaxed mb-6">
            "Saved over $200 on engineering textbooks this semester alone. The
            best part is picking them up right after class."
          </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400"></div>
<div>
<p className="text-xs font-semibold text-white">Alex M.</p>
<p className="text-[10px] text-gray-500">Computer Science, Year 3</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[350px] glass-card p-6 rounded-xl snap-start border-l-4 border-l-purple-500">
<div className="flex gap-1 text-yellow-500 mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-sm text-gray-300 leading-relaxed mb-6">
            "Finally sold my old drafting table. It was collecting dust in my
            dorm. Listing was super easy and fast."
          </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-400"></div>
<div>
<p className="text-xs font-semibold text-white">Sarah L.</p>
<p className="text-[10px] text-gray-500">Architecture, Year 2</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[350px] glass-card p-6 rounded-xl snap-start border-l-4 border-l-emerald-500">
<div className="flex gap-1 text-yellow-500 mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-sm text-gray-300 leading-relaxed mb-6">
            "Great for finding electronics. Got a second-hand monitor for my
            coding setup at a bargain."
          </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-green-400"></div>
<div>
<p className="text-xs font-semibold text-white">Davide R.</p>
<p className="text-[10px] text-gray-500">Info Systems, Year 4</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-5xl mx-auto rounded-3xl relative overflow-hidden glass-card px-6 py-16 text-center border-neon/30">

<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neon/10 to-transparent pointer-events-none"></div>
<div className="absolute -top-24 -right-24 w-64 h-64 bg-neon/20 rounded-full blur-[80px]"></div>
<h2 className="relative font-heading text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
          Ready to declutter?
        </h2>
<p className="relative text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
          Join thousands of students saving money and reducing waste today.
        </p>
<a className="relative inline-flex items-center justify-center px-8 py-4 rounded-lg bg-neon text-white font-medium text-sm tracking-wide hover:bg-neonhover transition-all duration-300 shadow-lg shadow-neon/25 btn-neon-glow" href="#">
          Start Selling Now
        </a>
</div>
</section>

<footer className="border-t border-white/5 py-12 px-6 bg-charcoal">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="font-heading font-semibold text-lg tracking-tighter text-white flex items-center gap-2 mb-4" href="#">
<span className="text-neon">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="20"></span>
</span>
            IEM Mart
          </a>
<p className="text-xs text-gray-500 leading-relaxed">
            The trusted marketplace for university students. Sustainable,
            secure, and smart.
          </p>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Platform</h4>
<ul className="space-y-2 text-xs text-gray-400">
<li>
<a className="hover:text-neon transition-colors" href="#">Browse</a>
</li>
<li>
<a className="hover:text-neon transition-colors" href="#">Selling</a>
</li>
<li>
<a className="hover:text-neon transition-colors" href="#">Safety</a>
</li>
<li>
<a className="hover:text-neon transition-colors" href="#">
                Mobile App
              </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Support</h4>
<ul className="space-y-2 text-xs text-gray-400">
<li>
<a className="hover:text-neon transition-colors" href="#">
                Help Center
              </a>
</li>
<li>
<a className="hover:text-neon transition-colors" href="#">
                Campus Guidelines
              </a>
</li>
<li>
<a className="hover:text-neon transition-colors" href="#">
                Contact Us
              </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Stay Updated</h4>
<div className="flex gap-2">
<input className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-neon transition-colors" placeholder="Email address" type="email"/>
<button className="bg-neon text-white p-2 rounded-md hover:bg-neonhover transition-colors">
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-gray-600">
          © 2023 ReCycle Campus. All rights reserved.
        </p>
<div className="flex gap-6">
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="16"></span>
</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="16"></span>
</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:github" data-width="16"></span>
</a>
</div>
</div>
</footer>



    </>
  );
}
