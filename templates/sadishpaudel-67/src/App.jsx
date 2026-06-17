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



        function checkLogin() {
            const pass = document.getElementById('adminPass').value;
            const error = document.getElementById('errorMsg');
            
            if(pass === 'sadish911') {
                document.getElementById('loginModal').close();
                document.getElementById('main-website').style.display = 'none';
                document.getElementById('adminDashboard').style.display = 'block';
                document.getElementById('adminPass').value = '';
                error.classList.add('hidden');
            } else {
                error.classList.remove('hidden');
            }
        }

        function logout() {
            document.getElementById('main-website').style.display = 'block';
            document.getElementById('adminDashboard').style.display = 'none';
        }
    
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
      

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]"></div>
</div>

<div id="main-website">

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tight text-white flex items-center gap-2 group" href="#">
<span className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white group-hover:scale-110 transition-transform">SP</span>
<span className="opacity-90">Sadish.</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-light text-slate-400">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#education">Education</a>
<a className="hover:text-white transition-colors" href="#gallery">Gallery</a>
<a className="px-4 py-2 rounded-full border border-white/10 hover:bg-white/5 text-white transition-all" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex w-8 h-8 rounded-full bg-white/10 items-center justify-center hover:bg-green-500/20 hover:text-green-400 transition-colors" href="tel:9857627163" title="Call Me">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
</a>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">

<div className="space-y-6 order-2 lg:order-1 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                        Student &amp; Learner
                    </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[1.1]">
                        Hi, I'm <br/>
<span className="text-gradient-blue">Sadish Paudel</span>
</h1>
<p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                        A motivated and curious student from <span className="text-slate-200">Malaj, Nepal</span>. I love exploring code, nature, and the creative intersection of art and technology.
                    </p>
<div className="flex flex-wrap gap-4 pt-4">
<a className="px-6 py-3 rounded-lg bg-white text-slate-950 font-medium text-sm hover:bg-slate-200 transition-colors flex items-center gap-2" href="tel:9857627163">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                            Call Me
                        </a>
<a className="px-6 py-3 rounded-lg border border-white/10 text-white font-medium text-sm hover:bg-white/5 transition-colors flex items-center gap-2" href="#about">
                            About Me
                        </a>
</div>
</div>

<div className="order-1 lg:order-2 flex justify-center items-center h-[400px] relative">
<div className="float relative">

<div className="relative w-[280px] h-[280px] rounded-full p-2 border border-white/10 backdrop-blur-sm bg-white/5">

<img alt="Sadish Paudel with Nepal Flag" className="w-full h-full rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/200e015c-a256-4214-b472-5c08831f15f1_3840w.jpg?w=800&amp;q=80"/>

<div className="absolute inset-0 rounded-full border border-indigo-500/30 animate-[spin_10s_linear_infinite]"></div>
<div className="absolute -inset-4 rounded-full border border-dashed border-purple-500/20 animate-[spin_15s_linear_infinite_reverse]"></div>
</div>

<div className="absolute -top-4 -right-10 p-3 glass-card rounded-xl animate-pulse delay-75 hidden md:block">
<iconify-icon className="text-indigo-400" icon="solar:code-circle-linear" width="28"></iconify-icon>
</div>
<div className="absolute -bottom-4 -left-10 p-3 glass-card rounded-xl animate-pulse delay-150 hidden md:block">
<iconify-icon className="text-red-500" icon="solar:flag-linear" width="28"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="about">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight mb-12 text-gradient">Personal Profile</h2>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

<div className="col-span-1 md:col-span-2 glass-card rounded-2xl p-8 flex flex-col justify-between min-h-[200px]">
<div>
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-indigo-400" icon="solar:user-circle-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-slate-300">Identity</span>
</div>
<h3 className="text-2xl font-light text-white mb-2">Sadish Paudel</h3>
<p className="text-slate-400 text-sm">DOB: 2071-01-03 BS</p>
</div>
<div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
<iconify-icon className="text-indigo-400" icon="solar:map-point-linear"></iconify-icon>
                            Malaj, Nepal &amp; Beni, Myagdi
                        </div>
</div>

<div className="col-span-1 md:col-span-1 lg:col-span-2 glass-card rounded-2xl p-8">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-purple-400" icon="solar:diploma-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-slate-300">Education</span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Beni Secondary School</h3>
<p className="text-slate-500 text-sm mb-6">Currently pursuing academic excellence.</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-slate-300">Science</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-slate-300">Mathematics</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-slate-300">Technology</span>
</div>
</div>

<div className="col-span-1 md:col-span-3 lg:col-span-4 glass-card rounded-2xl p-8">
<div className="flex items-center gap-3 mb-8">
<iconify-icon className="text-yellow-400" icon="solar:stars-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-slate-300">Skills &amp; Interests</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-default">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:laptop-linear" width="20"></iconify-icon>
</div>
<span className="text-sm text-slate-300">Coding</span>
</div>

<div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-default">
<div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
<iconify-icon icon="solar:football-linear" width="20"></iconify-icon>
</div>
<span className="text-sm text-slate-300">Football</span>
</div>

<div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-default">
<div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-400">
<iconify-icon icon="solar:music-note-linear" width="20"></iconify-icon>
</div>
<span className="text-sm text-slate-300">Music</span>
</div>

<div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-default">
<div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400">
<iconify-icon icon="solar:pallete-2-linear" width="20"></iconify-icon>
</div>
<span className="text-sm text-slate-300">Art &amp; Drawing</span>
</div>

<div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-default">
<div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</div>
<span className="text-sm text-slate-300">Photography</span>
</div>

<div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-default">
<div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:book-bookmark-linear" width="20"></iconify-icon>
</div>
<span className="text-sm text-slate-300">Reading</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-slate-950/50" id="gallery">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl font-medium tracking-tight text-white">Visual Journey</h2>
<p className="text-slate-400 font-light mt-2">Moments from Beni, nature, and school life.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
<iconify-icon className="text-slate-300" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
<iconify-icon className="text-slate-300" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative aspect-[4/3] rounded-2xl overflow-hidden glass-card">
<img alt="Nature in Nepal" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8356862e-79cd-49f1-8660-309ac1bb12fd_1600w.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
<span className="text-xs font-medium text-indigo-400 mb-1">Nature</span>
<h4 className="text-lg font-medium text-white">Malaj Landscapes</h4>
</div>
</div>

<div className="group relative aspect-[4/3] rounded-2xl overflow-hidden glass-card">
<img alt="School Activities" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1f76ef53-2e81-47da-ad7f-4e77ae5f14b5_800w.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
<span className="text-xs font-medium text-purple-400 mb-1">Academic</span>
<h4 className="text-lg font-medium text-white">School Projects</h4>
</div>
</div>

<div className="group relative aspect-[4/3] rounded-2xl overflow-hidden glass-card">
<img alt="Technology" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
<span className="text-xs font-medium text-blue-400 mb-1">Hobbies</span>
<h4 className="text-lg font-medium text-white">Exploring Tech</h4>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="contact">

<div className="absolute right-0 top-1/4 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-xl mx-auto px-6 relative z-10">
<div className="text-center mb-10">
<h2 className="text-3xl font-medium tracking-tight text-white">Let's Connect</h2>
<p className="text-slate-400 mt-2 font-light">Have a question? Call me or send a message.</p>
</div>

<div className="flex justify-center mb-8">
<a className="px-8 py-3 rounded-full bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:border-slate-600 text-white transition-all flex items-center gap-3 shadow-lg" href="tel:9857627163">
<iconify-icon className="text-green-400" icon="solar:phone-calling-linear" width="20"></iconify-icon>
<span className="font-medium tracking-wide">9857627163</span>
</a>
</div>
<form className="space-y-4 glass-card p-8 rounded-2xl">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-400 ml-1">Name</label>
<input className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600" placeholder="Your name" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-400 ml-1">Email</label>
<input className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600" placeholder="hello@example.com" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-400 ml-1">Message</label>
<textarea className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600 resize-none" placeholder="Your message here..." rows="4"></textarea>
</div>
<div className="flex items-center justify-between pt-2">
<label className="flex items-center gap-3 cursor-pointer">
<input type="checkbox"/>
<span className="text-xs text-slate-500">Subscribe to updates</span>
</label>
<button className="px-6 py-2.5 bg-white text-slate-950 text-sm font-medium rounded-lg hover:bg-slate-200 transition-colors" type="button">
                            Send Message
                        </button>
</div>
</form>
<div className="flex justify-center gap-6 mt-12">
<a className="text-slate-500 hover:text-indigo-400 transition-colors" href="#"><iconify-icon icon="solar:brand-facebook-linear" width="24"></iconify-icon></a>
<a className="text-slate-500 hover:text-pink-400 transition-colors" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="24"></iconify-icon></a>
<a className="text-slate-500 hover:text-blue-400 transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="24"></iconify-icon></a>
</div>
</div>
</section>
<footer className="py-8 border-t border-white/5 relative">
<div className="text-center text-xs text-slate-600 font-light">
<p>© 2081 BS Sadish Paudel. All Rights Reserved.</p>
<p className="mt-1 opacity-50">Designed with passion in Nepal.</p>
</div>

<button className="absolute bottom-8 right-8 text-slate-700 hover:text-slate-500 transition-colors" onclick="document.getElementById('loginModal').showModal()" title="Admin">
<iconify-icon icon="solar:lock-keyhole-linear" width="16"></iconify-icon>
</button>
</footer>
</div>

<dialog className="bg-transparent p-0 backdrop:bg-black/80 backdrop:backdrop-blur-sm" id="loginModal">
<div className="glass-card p-8 rounded-2xl w-[90vw] max-w-sm shadow-2xl border border-white/10 bg-slate-900">
<div className="flex justify-between items-center mb-6">
<h3 className="text-xl font-medium text-white">Admin Access</h3>
<button className="text-slate-400 hover:text-white" onclick="document.getElementById('loginModal').close()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="space-y-4">
<div>
<label className="text-xs text-slate-400 ml-1">Password</label>
<input className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 placeholder:text-slate-700 mt-1" id="adminPass" placeholder="Enter code" type="password"/>
</div>
<button className="w-full py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-colors" onclick="checkLogin()">
                    Login
                </button>
<p className="text-red-400 text-xs text-center hidden" id="errorMsg">Incorrect password</p>
</div>
</div>
</dialog>

<div className="hidden-section min-h-screen bg-[#02040a]" id="adminDashboard">

<nav className="border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white"><iconify-icon icon="solar:shield-user-linear" width="18"></iconify-icon></span>
<span className="text-white font-medium">Admin Panel</span>
</div>
<button className="text-sm text-slate-400 hover:text-white flex items-center gap-2" onclick="logout()">
                    Logout <iconify-icon icon="solar:logout-2-linear"></iconify-icon>
</button>
</div>
</nav>
<div className="max-w-7xl mx-auto px-6 py-10">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
<div className="glass-card p-6 rounded-2xl">
<div className="flex justify-between items-start">
<div>
<p className="text-slate-400 text-sm mb-1">Total Views</p>
<h3 className="text-3xl font-semibold text-white">1,234</h3>
</div>
<div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
<iconify-icon icon="solar:eye-linear" width="24"></iconify-icon>
</div>
</div>
<div className="mt-4 text-xs text-green-400 flex items-center gap-1">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon> +12% this week
                    </div>
</div>
<div className="glass-card p-6 rounded-2xl">
<div className="flex justify-between items-start">
<div>
<p className="text-slate-400 text-sm mb-1">Messages</p>
<h3 className="text-3xl font-semibold text-white">8</h3>
</div>
<div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
</div>
<div className="mt-4 text-xs text-slate-500">2 unread</div>
</div>
<div className="glass-card p-6 rounded-2xl">
<div className="flex justify-between items-start">
<div>
<p className="text-slate-400 text-sm mb-1">Gallery Items</p>
<h3 className="text-3xl font-semibold text-white">3</h3>
</div>
<div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
<iconify-icon icon="solar:gallery-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 glass-card rounded-2xl p-6">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-medium text-white">Recent Messages</h3>
<button className="text-xs text-indigo-400 hover:text-indigo-300">View All</button>
</div>
<div className="space-y-4">

<div className="p-4 rounded-xl bg-white/5 border border-white/5 flex gap-4">
<div className="w-10 h-10 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 font-bold">R</div>
<div>
<h4 className="text-sm font-medium text-white">Ramesh KC</h4>
<p className="text-xs text-slate-400 mt-1">Hello Sadish, I loved your portfolio. Are you available for a project?</p>
<p className="text-[10px] text-slate-600 mt-2">2 hours ago</p>
</div>
</div>

<div className="p-4 rounded-xl bg-white/5 border border-white/5 flex gap-4">
<div className="w-10 h-10 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center shrink-0 font-bold">S</div>
<div>
<h4 className="text-sm font-medium text-white">Sita Sharma</h4>
<p className="text-xs text-slate-400 mt-1">Great photos from Malaj! Keep it up.</p>
<p className="text-[10px] text-slate-600 mt-2">1 day ago</p>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-6">
<h3 className="text-lg font-medium text-white mb-6">Quick Actions</h3>
<div className="space-y-3">
<button className="w-full p-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors text-left flex items-center gap-3">
<iconify-icon icon="solar:upload-linear" width="18"></iconify-icon> Upload Photo
                        </button>
<button className="w-full p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 text-sm font-medium transition-colors text-left flex items-center gap-3">
<iconify-icon icon="solar:pen-new-square-linear" width="18"></iconify-icon> Edit Profile
                        </button>
<button className="w-full p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 text-sm font-medium transition-colors text-left flex items-center gap-3">
<iconify-icon icon="solar:settings-linear" width="18"></iconify-icon> Site Settings
                        </button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
