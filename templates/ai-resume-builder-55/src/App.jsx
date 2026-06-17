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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Geist', 'sans-serif'],
serif: ['Newsreader', 'serif'],
},
colors: {
paper: '#FDFBF7',
ink: '#121212',
pencil: '#525252',
signal: '#FF4F00', // Distinctive Orange
line: '#E5E2DC',
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(18, 18, 18, 0.05)',
'sharp': '4px 4px 0px 0px rgba(18, 18, 18, 1)',
}
}
}
}



        const views = {
            'landing': 'view-landing',
            'login-otp': 'view-login-otp',
            'verify-otp': 'view-verify-otp',
            'dashboard': 'view-dashboard',
            'editor': 'view-editor',
            'preview': 'view-preview'
        };

        const layouts = {
            'landing': 'view-landing',
            'auth': 'auth-layout',
            'app': 'app-layout'
        };

        function navigate(target) {
            // Reset all top-level containers
            document.getElementById('view-landing').classList.add('hidden');
            document.getElementById('auth-layout').classList.add('hidden');
            document.getElementById('auth-layout').classList.remove('grid');
            document.getElementById('app-layout').classList.add('hidden');
            
            // Reset inner views
            document.querySelectorAll('.auth-view, .app-view').forEach(el => el.classList.add('hidden'));

            if (target === 'landing') {
                document.getElementById('view-landing').classList.remove('hidden');
            } 
            else if (target.includes('otp')) {
                const layout = document.getElementById('auth-layout');
                layout.classList.remove('hidden');
                layout.classList.add('grid');
                document.getElementById('view-' + target).classList.remove('hidden');
            } 
            else {
                const layout = document.getElementById('app-layout');
                layout.classList.remove('hidden');
                const view = document.getElementById('view-' + target);
                view.classList.remove('hidden');
                
                // Specific styling for editor layout
                if (target === 'editor') {
                    view.classList.add('flex');
                } else if (target === 'preview') {
                    view.classList.add('flex');
                }
            }

            window.scrollTo(0,0);
        }

        // Initialize marquee animation
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-marquee {
                animation: marquee 20s linear infinite;
            }
        `;
        document.head.appendChild(style);
    
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
      

<div className="no-print fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-full shadow-sharp flex gap-4 text-xs overflow-x-auto max-w-[90vw] items-center bg-white border border-ink">
<span className="font-bold uppercase tracking-widest mr-2 font-serif italic">Views</span>
<button className="hover:text-signal transition-colors font-medium" onclick="navigate('landing')">Home</button>
<span className="text-gray-300">/</span>
<button className="hover:text-signal transition-colors font-medium" onclick="navigate('login-otp')">Log/Sign</button>
<button className="hover:text-signal transition-colors font-medium" onclick="navigate('verify-otp')">Verify</button>
<span className="text-gray-300">/</span>
<button className="hover:text-signal transition-colors font-medium" onclick="navigate('dashboard')">Desk</button>
<button className="hover:text-signal transition-colors font-medium" onclick="navigate('editor')">Studio</button>
<button className="hover:text-signal transition-colors font-medium" onclick="navigate('preview')">Print</button>
</div>



<div className="view-section w-full" id="view-landing">

<nav className="fixed top-0 w-full z-40 border-b border-line bg-paper/90 backdrop-blur-md">
<div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-ink text-white flex items-center justify-center rounded-sm">
<span className="font-serif italic font-bold text-sm">S</span>
</div>
<span className="font-serif font-semibold text-lg tracking-tight">Smart Resume</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-pencil">
<a className="hover:text-ink transition-colors" href="#">Manifesto</a>
<a className="hover:text-ink transition-colors" href="#">Samples</a>
<a className="hover:text-ink transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium hover:text-signal transition-colors" onclick="navigate('login-otp')">Log in</button>
<button className="bg-ink text-white px-5 py-2 text-sm font-medium rounded-full hover:bg-signal transition-colors duration-300 flex items-center gap-2" onclick="navigate('login-otp')">
<span>Draft Resume</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="pt-32 pb-20 px-6 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-white text-xs font-medium text-pencil">
<iconify-icon className="text-signal" icon="solar:star-linear"></iconify-icon>
<span>Optimization Engine v2.0 Live</span>
</div>
<h1 className="text-6xl md:text-8xl font-medium tracking-tight leading-[0.95] text-ink">
                    Not just a resume. <br/>
<span className="italic font-light text-pencil">Your narrative.</span>
</h1>
<p className="text-xl md:text-2xl text-pencil font-light max-w-xl leading-relaxed">
                    The AI-powered architect for your career. Craft bespoke, ATS-ready documents that don't look like templates.
                </p>
<div className="flex flex-wrap items-center gap-4 pt-4">
<button className="bg-signal text-white px-8 py-4 text-base font-medium rounded-lg hover:bg-ink transition-colors shadow-soft flex items-center gap-3" onclick="navigate('login-otp')">
<iconify-icon icon="solar:magic-stick-linear" width="20"></iconify-icon>
                        Start Building Free
                    </button>
<div className="flex items-center gap-3 px-6 text-sm text-pencil">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-paper bg-gray-200"></div>
<div className="w-8 h-8 rounded-full border-2 border-paper bg-gray-300"></div>
<div className="w-8 h-8 rounded-full border-2 border-paper bg-gray-400"></div>
</div>
<span>Joined by 10k+ professionals</span>
</div>
</div>
</div>

<div className="lg:col-span-5 relative h-[500px] w-full bg-grid border border-line rounded-none lg:rounded-tl-[80px] overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-t from-paper to-transparent z-10"></div>

<div className="relative w-64 h-80 bg-white shadow-sharp border border-ink rotate-[-6deg] z-0 flex flex-col p-6">
<div className="w-12 h-12 bg-gray-100 rounded-full mb-4"></div>
<div className="w-32 h-4 bg-gray-100 mb-2"></div>
<div className="w-20 h-3 bg-gray-50 mb-6"></div>
<div className="space-y-2">
<div className="w-full h-2 bg-gray-50"></div>
<div className="w-full h-2 bg-gray-50"></div>
<div className="w-2/3 h-2 bg-gray-50"></div>
</div>
</div>
<div className="absolute w-64 h-80 bg-ink text-white shadow-xl rotate-[3deg] z-10 flex flex-col p-6 translate-x-8 translate-y-8">
<div className="flex justify-between items-start mb-6">
<div className="text-4xl font-serif italic">Aa</div>
<iconify-icon className="text-signal text-2xl" icon="solar:verified-check-bold"></iconify-icon>
</div>
<p className="font-serif text-2xl leading-tight mb-2">Senior<br/>Product<br/>Designer</p>
<div className="mt-auto flex items-center gap-2 text-xs opacity-60">
<span>98/100 ATS Score</span>
</div>
</div>
</div>
</header>

<div className="border-y border-line py-4 overflow-hidden bg-white">
<div className="flex gap-12 items-center animate-marquee whitespace-nowrap text-sm font-medium uppercase tracking-widest text-pencil/60">
<span>Used by talent at</span>
<span className="text-ink">Stripe</span>
<span className="text-ink">Linear</span>
<span className="text-ink">Vercel</span>
<span className="text-ink">Shopify</span>
<span className="text-ink">Airbnb</span>
<span className="text-ink">Notion</span>
<span className="text-ink">Spotify</span>

</div>
</div>

<section className="max-w-[1400px] mx-auto px-6 py-24">
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">

<div className="bg-paper p-10 flex flex-col justify-between h-96 group hover:bg-white transition-colors">
<div className="w-12 h-12 border border-line rounded-full flex items-center justify-center bg-white text-xl text-ink mb-6">
<iconify-icon icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-medium mb-3">Intelligent Drafting</h3>
<p className="text-pencil leading-relaxed">Stop staring at a blank page. Our language engine drafts impactful bullet points tailored to your role.</p>
</div>
</div>

<div className="bg-paper p-10 flex flex-col justify-between h-96 group hover:bg-white transition-colors">
<div className="w-12 h-12 border border-line rounded-full flex items-center justify-center bg-white text-xl text-ink mb-6">
<iconify-icon icon="solar:filters-linear"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-medium mb-3">ATS Calibration</h3>
<p className="text-pencil leading-relaxed">Real-time analysis against industry standards ensuring your resume parses perfectly by recruiting bots.</p>
</div>
</div>

<div className="bg-paper p-10 flex flex-col justify-between h-96 group hover:bg-white transition-colors">
<div className="w-12 h-12 border border-line rounded-full flex items-center justify-center bg-white text-xl text-ink mb-6">
<iconify-icon icon="solar:printer-linear"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-medium mb-3">Print &amp; Digital</h3>
<p className="text-pencil leading-relaxed">Export as a crisp PDF or share a live web link. Typography that holds up on screen and paper.</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-line bg-white pt-20 pb-10">
<div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
<div className="max-w-xs">
<span className="font-serif font-bold text-xl italic tracking-tight block mb-4">Smart Resume</span>
<p className="text-pencil text-sm">Building the future of career narratives. Crafted with care for ambitious professionals.</p>
</div>
<div className="flex gap-20 text-sm">
<div className="flex flex-col gap-3">
<span className="font-bold text-ink">Product</span>
<a className="text-pencil hover:text-signal" href="#">Features</a>
<a className="text-pencil hover:text-signal" href="#">Pricing</a>
<a className="text-pencil hover:text-signal" href="#">Changelog</a>
</div>
<div className="flex flex-col gap-3">
<span className="font-bold text-ink">Company</span>
<a className="text-pencil hover:text-signal" href="#">About</a>
<a className="text-pencil hover:text-signal" href="#">Manifesto</a>
<a className="text-pencil hover:text-signal" href="#">Contact</a>
</div>
</div>
</div>
<div className="max-w-[1400px] mx-auto px-6 mt-20 pt-6 border-t border-line flex justify-between items-center text-xs text-pencil/50 uppercase tracking-wider">
<p>© 2024 Smart Resume Inc.</p>
<p>Designed by Aura</p>
</div>
</footer>
</div>



<div className="hidden min-h-screen w-full grid-cols-1 md:grid-cols-2" id="auth-layout">

<div className="hidden md:flex flex-col justify-between p-12 bg-ink text-paper relative overflow-hidden">
<div className="z-10">
<span className="font-serif italic font-bold text-lg">Smart Resume</span>
</div>
<div className="z-10 max-w-md">
<h2 className="text-5xl font-serif italic mb-6 leading-tight">"Design is the silent ambassador of your brand."</h2>
<p className="text-white/60">— Paul Rand</p>
</div>

<div className="absolute inset-0 opacity-20">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 L100 0" stroke="white" strokeWidth="0.5"></path>
<path d="M20 100 L100 20" stroke="white" strokeWidth="0.5"></path>
<path d="M40 100 L100 40" stroke="white" strokeWidth="0.5"></path>
</svg>
</div>
</div>

<div className="flex flex-col justify-center items-center px-6 py-12 bg-paper relative">
<button className="absolute top-8 right-8 text-pencil hover:text-ink" onclick="navigate('landing')">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="w-full max-w-sm space-y-8">

<div className="auth-view hidden" id="view-login-otp">
<div className="mb-8">
<h3 className="text-2xl font-medium mb-2 text-ink">Welcome back</h3>
<p className="text-pencil text-sm">Enter your email to receive a magic code.</p>
</div>
<form className="space-y-5" onsubmit="event.preventDefault(); navigate('verify-otp');">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-ink/80">Email Address</label>
<input className="w-full h-12 px-4 border border-line bg-white rounded-md text-ink placeholder:text-gray-300 focus:outline-none focus:border-ink focus:ring-0 transition-all" placeholder="name@company.com" required="" type="email"/>
</div>
<button className="w-full h-12 bg-ink text-white font-medium rounded-md hover:bg-signal transition-colors flex items-center justify-center gap-2">
<span>Continue</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
<div className="mt-8 pt-8 border-t border-line text-center">
<p className="text-xs text-pencil">By continuing, you agree to our <a className="underline hover:text-ink" href="#">Terms</a> and <a className="underline hover:text-ink" href="#">Privacy Policy</a>.</p>
</div>
</div>

<div className="auth-view hidden" id="view-verify-otp">
<div className="mb-8">
<button className="flex items-center gap-1 text-xs text-pencil hover:text-ink mb-4" onclick="navigate('login-otp')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back
                        </button>
<h3 className="text-2xl font-medium mb-2 text-ink">Check your inbox</h3>
<p className="text-pencil text-sm">We sent a temporary login code to your email.</p>
</div>
<div className="flex gap-3 justify-between mb-8">

<input autofocus="" className="w-14 h-16 text-center text-2xl font-serif bg-white border border-line rounded-md focus:border-ink focus:outline-none focus:ring-0" maxlength="1" type="text"/>
<input className="w-14 h-16 text-center text-2xl font-serif bg-white border border-line rounded-md focus:border-ink focus:outline-none focus:ring-0" maxlength="1" type="text"/>
<input className="w-14 h-16 text-center text-2xl font-serif bg-white border border-line rounded-md focus:border-ink focus:outline-none focus:ring-0" maxlength="1" type="text"/>
<input className="w-14 h-16 text-center text-2xl font-serif bg-white border border-line rounded-md focus:border-ink focus:outline-none focus:ring-0" maxlength="1" type="text"/>
</div>
<button className="w-full h-12 bg-ink text-white font-medium rounded-md hover:bg-signal transition-colors shadow-sharp" onclick="navigate('dashboard')">
                        Verify &amp; Enter
                    </button>
<p className="text-center mt-6 text-xs text-pencil">
                        Didn't receive it? <button className="underline hover:text-ink">Resend Code</button>
</p>
</div>
</div>
</div>
</div>



<div className="hidden min-h-screen flex flex-col bg-paper" id="app-layout">

<header className="h-16 border-b border-line bg-white sticky top-0 z-30 px-6 flex items-center justify-between">
<div className="flex items-center gap-6">
<div className="cursor-pointer flex items-center gap-2" onclick="navigate('dashboard')">
<div className="w-6 h-6 bg-ink text-white flex items-center justify-center rounded-sm">
<span className="font-serif italic font-bold text-sm">S</span>
</div>
</div>
<nav className="hidden md:flex items-center gap-1 bg-paper p-1 rounded-lg border border-line">
<button className="px-3 py-1.5 text-xs font-medium rounded hover:bg-white hover:shadow-sm transition-all text-ink" onclick="navigate('dashboard')">Desk</button>
<button className="px-3 py-1.5 text-xs font-medium rounded hover:bg-white hover:shadow-sm transition-all text-pencil">Templates</button>
<button className="px-3 py-1.5 text-xs font-medium rounded hover:bg-white hover:shadow-sm transition-all text-pencil">Guide</button>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-signal border border-signal/20 bg-signal/5 px-3 py-1.5 rounded-full">
<iconify-icon icon="solar:star-linear"></iconify-icon> Pro
                </button>
<div className="h-8 w-8 rounded-full bg-line overflow-hidden border border-white shadow-sm">
<img alt="Avatar" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"/>
</div>
</div>
</header>

<div className="app-view hidden max-w-6xl mx-auto w-full p-8 fade-in" id="view-dashboard">
<div className="flex items-end justify-between mb-12 border-b border-line pb-6">
<div>
<h1 className="text-4xl font-serif text-ink mb-2">My Desk</h1>
<p className="text-pencil">Manage your documents and applications.</p>
</div>
<button className="bg-ink text-white px-5 py-2.5 text-sm font-medium rounded-md hover:bg-signal transition-colors shadow-soft flex items-center gap-2" onclick="navigate('editor')">
<iconify-icon icon="solar:add-square-linear"></iconify-icon>
                    Create New
                </button>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
<div className="p-4 border-l-2 border-ink pl-4">
<span className="block text-xs uppercase tracking-wider text-pencil mb-1">Active Resumes</span>
<span className="text-3xl font-serif">3</span>
</div>
<div className="p-4 border-l-2 border-line pl-4">
<span className="block text-xs uppercase tracking-wider text-pencil mb-1">Total Views</span>
<span className="text-3xl font-serif">142</span>
</div>
<div className="p-4 border-l-2 border-line pl-4">
<span className="block text-xs uppercase tracking-wider text-pencil mb-1">Optimization Score</span>
<span className="text-3xl font-serif text-emerald-700">94%</span>
</div>
</div>

<h2 className="text-sm font-bold uppercase tracking-widest text-pencil mb-6">Recent Files</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer" onclick="navigate('editor')">
<div className="bg-white aspect-[210/297] border border-line shadow-soft group-hover:shadow-sharp group-hover:-translate-y-1 transition-all duration-300 p-6 relative overflow-hidden mb-4">

<div className="w-full h-full opacity-60 pointer-events-none select-none flex flex-col gap-3 scale-90 origin-top">
<div className="h-8 w-1/2 bg-ink/10"></div>
<div className="h-4 w-1/3 bg-pencil/10 mb-4"></div>
<div className="space-y-2">
<div className="h-2 w-full bg-line"></div>
<div className="h-2 w-full bg-line"></div>
<div className="h-2 w-4/5 bg-line"></div>
</div>
</div>
<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-8 h-8 bg-ink text-white rounded-full flex items-center justify-center">
<iconify-icon icon="solar:pen-linear"></iconify-icon>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-ink group-hover:text-signal transition-colors">Product Designer_v4</h3>
<p className="text-xs text-pencil mt-1">Edited 2h ago</p>
</div>
<iconify-icon className="text-pencil hover:text-ink" icon="solar:menu-dots-bold"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-white aspect-[210/297] border border-line shadow-soft group-hover:shadow-sharp group-hover:-translate-y-1 transition-all duration-300 p-6 relative overflow-hidden mb-4">
<div className="w-full h-full opacity-60 pointer-events-none select-none flex flex-col gap-3 scale-90 origin-top">
<div className="flex justify-between mb-4">
<div className="h-8 w-1/3 bg-ink/10"></div>
<div className="h-8 w-8 rounded-full bg-pencil/10"></div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="h-20 bg-line/50"></div>
<div className="h-20 bg-line/50"></div>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-ink group-hover:text-signal transition-colors">Frontend Developer</h3>
<p className="text-xs text-pencil mt-1">Edited 5 days ago</p>
</div>
<iconify-icon className="text-pencil hover:text-ink" icon="solar:menu-dots-bold"></iconify-icon>
</div>
</div>

<div className="aspect-[210/297] border border-dashed border-pencil/30 rounded-lg flex flex-col items-center justify-center gap-4 text-pencil hover:text-signal hover:border-signal hover:bg-white transition-all cursor-pointer" onclick="navigate('editor')">
<iconify-icon icon="solar:add-circle-linear" width="32"></iconify-icon>
<span className="font-medium">Create New Resume</span>
</div>
</div>
</div>

<div className="app-view hidden flex-1 h-[calc(100vh-64px)] overflow-hidden flex" id="view-editor">

<aside className="w-80 bg-white border-r border-line flex flex-col z-20 shadow-sm">
<div className="p-4 border-b border-line">
<h2 className="text-xs font-bold uppercase tracking-widest text-pencil mb-1">Sections</h2>
</div>
<div className="flex-1 overflow-y-auto p-2 space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-3 rounded-md bg-paper border border-line text-ink font-medium text-sm">
<iconify-icon className="text-lg" icon="solar:user-circle-linear"></iconify-icon>
                        Header &amp; Contact
                    </button>
<button className="w-full flex items-center gap-3 px-3 py-3 rounded-md hover:bg-paper text-pencil hover:text-ink font-medium text-sm transition-colors">
<iconify-icon className="text-lg" icon="solar:case-linear"></iconify-icon>
                        Experience
                    </button>
<button className="w-full flex items-center gap-3 px-3 py-3 rounded-md hover:bg-paper text-pencil hover:text-ink font-medium text-sm transition-colors">
<iconify-icon className="text-lg" icon="solar:hat-graduation-linear"></iconify-icon>
                        Education
                    </button>
<button className="w-full flex items-center gap-3 px-3 py-3 rounded-md hover:bg-paper text-pencil hover:text-ink font-medium text-sm transition-colors">
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
                        Skills
                    </button>
</div>
<div className="p-4 border-t border-line bg-paper">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium">Completeness</span>
<span className="text-xs font-bold">40%</span>
</div>
<div className="h-1 w-full bg-line rounded-full overflow-hidden">
<div className="h-full w-[40%] bg-ink rounded-full"></div>
</div>
</div>
</aside>

<main className="flex-1 bg-paper overflow-y-auto border-r border-line">
<div className="max-w-2xl mx-auto p-8 pb-32">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-serif text-ink">Header &amp; Contact</h2>
<button className="text-xs flex items-center gap-1 text-signal font-medium bg-signal/10 px-2 py-1 rounded">
<iconify-icon icon="solar:magic-stick-linear"></iconify-icon> Auto-Fill
                        </button>
</div>
<div className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-pencil">First Name</label>
<input className="w-full p-3 bg-white border border-line rounded-sm focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink transition-all" type="text" value="John"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-pencil">Last Name</label>
<input className="w-full p-3 bg-white border border-line rounded-sm focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink transition-all" type="text" value="Doe"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-pencil">Target Role / Title</label>
<input className="w-full p-3 bg-white border border-line rounded-sm focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink transition-all" type="text" value="Senior Product Designer"/>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-pencil">Email</label>
<input className="w-full p-3 bg-white border border-line rounded-sm focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink transition-all" type="email" value="john@example.com"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-pencil">Phone</label>
<input className="w-full p-3 bg-white border border-line rounded-sm focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink transition-all" type="tel" value="+1 555 0192"/>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between items-end">
<label className="text-xs font-bold uppercase tracking-wider text-pencil">Professional Summary</label>
<span className="text-[10px] text-pencil">240 / 500 chars</span>
</div>
<textarea className="w-full p-3 h-32 bg-white border border-line rounded-sm focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink transition-all resize-none leading-relaxed">Multidisciplinary designer with 6+ years of experience leading design systems for fintech products.</textarea>
</div>
</div>
<div className="mt-12 flex justify-end">
<button className="bg-ink text-white px-6 py-3 text-sm font-medium rounded hover:bg-signal transition-colors shadow-sharp">
                            Save &amp; Next Section
                        </button>
</div>
</div>
</main>

<aside className="w-[450px] hidden xl:flex flex-col bg-gray-100 border-l border-line relative z-10">
<div className="h-10 flex items-center justify-between px-4 border-b border-line bg-white text-xs text-pencil uppercase tracking-wider">
<span>Live Preview</span>
<button className="hover:text-ink" onclick="navigate('preview')"><iconify-icon icon="solar:maximize-linear"></iconify-icon></button>
</div>
<div className="flex-1 overflow-hidden flex items-center justify-center p-8 bg-grid">
<div className="bg-white shadow-soft w-[210mm] h-[297mm] origin-center transform scale-[0.45] text-[12px] p-[20mm] flex flex-col text-ink border border-line">

<div className="border-b-2 border-black pb-4 mb-6">
<h1 className="text-4xl font-serif font-bold mb-1">John Doe</h1>
<p className="text-sm uppercase tracking-widest text-gray-600 font-medium">Senior Product Designer</p>
</div>
<div className="grid grid-cols-12 gap-8 h-full">
<div className="col-span-8 space-y-6">
<div>
<h3 className="font-bold text-xs uppercase border-b border-gray-200 pb-1 mb-2">Summary</h3>
<p className="text-xs leading-relaxed text-gray-700">Multidisciplinary designer with 6+ years of experience leading design systems for fintech products. Proven track record of increasing user engagement through data-driven UX improvements.</p>
</div>
<div>
<h3 className="font-bold text-xs uppercase border-b border-gray-200 pb-1 mb-2">Experience</h3>
<div className="mb-4">
<div className="flex justify-between items-baseline mb-1">
<span className="font-bold">Lead Designer</span>
<span className="text-gray-500 text-[10px]">2021 - Present</span>
</div>
<p className="text-gray-600 italic mb-1">Stripe, San Francisco</p>
<ul className="list-disc ml-4 space-y-1 text-gray-700">
<li>Spearheaded the redesign of the checkout flow, increasing conversion by 12%.</li>
<li>Managed a team of 4 junior designers.</li>
</ul>
</div>
</div>
</div>
<div className="col-span-4 space-y-6">
<div>
<h3 className="font-bold text-xs uppercase border-b border-gray-200 pb-1 mb-2">Contact</h3>
<p className="text-gray-600">john@example.com</p>
<p className="text-gray-600">+1 555 0192</p>
<p className="text-gray-600">San Francisco, CA</p>
</div>
<div>
<h3 className="font-bold text-xs uppercase border-b border-gray-200 pb-1 mb-2">Skills</h3>
<p className="text-gray-600">Figma, Prototyping, HTML/CSS, User Research, Agile</p>
</div>
</div>
</div>
</div>
</div>
</aside>
</div>

<div className="app-view hidden flex-col h-full overflow-hidden bg-gray-800" id="view-preview">

<div className="h-16 bg-white border-b border-line flex items-center justify-between px-6 no-print z-50">
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 text-sm text-pencil hover:text-ink" onclick="navigate('editor')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
                        Back to Editor
                    </button>
<div className="h-6 w-px bg-line"></div>
<span className="font-serif italic font-medium">John Doe - Resume.pdf</span>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 text-sm font-medium border border-line rounded bg-white hover:bg-gray-50 text-ink">Share Link</button>
<button className="px-4 py-2 text-sm font-medium bg-signal text-white rounded hover:bg-orange-600 flex items-center gap-2 shadow-sm" onclick="window.print()">
<iconify-icon icon="solar:printer-linear"></iconify-icon> Download PDF
                    </button>
</div>
</div>

<div className="flex-1 overflow-y-auto bg-pencil/10 p-8 md:p-12 flex justify-center">

<div className="a4-page p-[20mm] text-ink relative mx-auto">

<header className="flex justify-between items-start border-b-2 border-black pb-8 mb-8">
<div>
<h1 className="text-5xl font-serif font-medium tracking-tight mb-2">John Doe</h1>
<p className="text-lg font-medium tracking-wide uppercase text-gray-600">Senior Product Designer</p>
</div>
<div className="text-right text-sm space-y-1 text-gray-600 font-medium">
<p>john.doe@example.com</p>
<p>+1 (555) 123-4567</p>
<p>San Francisco, CA</p>
<p>portfolio.com/johndoe</p>
</div>
</header>

<div className="grid grid-cols-12 gap-10">

<div className="col-span-8 space-y-10">

<section>
<h3 className="text-sm font-bold uppercase tracking-widest border-b border-gray-200 pb-2 mb-4">Professional Profile</h3>
<p className="text-sm leading-relaxed text-gray-800 text-justify">
                                    Award-winning Product Designer with over 6 years of experience transforming complex problems into elegant, user-centric solutions. Expertise in building design systems from scratch and leading cross-functional teams in high-growth startup environments. Passionate about bridging the gap between design and engineering.
                                </p>
</section>

<section>
<h3 className="text-sm font-bold uppercase tracking-widest border-b border-gray-200 pb-2 mb-6">Experience</h3>

<div className="mb-8 relative pl-6 border-l border-gray-200">
<div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-black border-2 border-white"></div>
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-bold text-lg">Senior Product Designer</h4>
<span className="text-sm font-medium text-gray-500">2021 — Present</span>
</div>
<p className="font-serif italic text-gray-600 mb-3">TechFlow Inc. | San Francisco, CA</p>
<ul className="list-disc ml-4 text-sm space-y-2 text-gray-700 marker:text-gray-400">
<li>Led the complete redesign of the core dashboard, resulting in a <span className="font-semibold text-black">25% increase in daily active users</span> within 3 months.</li>
<li>Established a unified design system (Atomic Design) used by 15+ designers and 50+ engineers, reducing design QA time by 40%.</li>
<li>Mentored 3 junior designers and introduced a new critique framework to improve team collaboration.</li>
</ul>
</div>

<div className="mb-8 relative pl-6 border-l border-gray-200">
<div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-gray-300 border-2 border-white"></div>
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-bold text-lg">Product Designer</h4>
<span className="text-sm font-medium text-gray-500">2018 — 2021</span>
</div>
<p className="font-serif italic text-gray-600 mb-3">CloudScale Systems | Austin, TX</p>
<ul className="list-disc ml-4 text-sm space-y-2 text-gray-700 marker:text-gray-400">
<li>Managed the end-to-end design process for the mobile application, achieving a 4.8-star rating on the App Store.</li>
<li>Collaborated closely with engineering to reduce technical debt, improving load times by 40%.</li>
</ul>
</div>
</section>
</div>

<div className="col-span-4 space-y-10">

<section>
<h3 className="text-sm font-bold uppercase tracking-widest border-b border-gray-200 pb-2 mb-4">Education</h3>
<div className="mb-4">
<h4 className="font-bold text-sm">BFA, Interaction Design</h4>
<p className="text-sm text-gray-600 italic">California College of the Arts</p>
<p className="text-xs text-gray-500 mt-1">2014 — 2018</p>
</div>
</section>

<section>
<h3 className="text-sm font-bold uppercase tracking-widest border-b border-gray-200 pb-2 mb-4">Core Competencies</h3>
<div className="space-y-2">
<div className="text-sm font-medium text-gray-800">User Interface Design</div>
<div className="h-1 w-full bg-gray-100 rounded-full"><div className="h-full w-[95%] bg-black rounded-full"></div></div>
<div className="text-sm font-medium text-gray-800 pt-2">Design Systems</div>
<div className="h-1 w-full bg-gray-100 rounded-full"><div className="h-full w-[90%] bg-black rounded-full"></div></div>
<div className="text-sm font-medium text-gray-800 pt-2">Prototyping (Figma)</div>
<div className="h-1 w-full bg-gray-100 rounded-full"><div className="h-full w-[100%] bg-black rounded-full"></div></div>
<div className="text-sm font-medium text-gray-800 pt-2">HTML / CSS / Tailwind</div>
<div className="h-1 w-full bg-gray-100 rounded-full"><div className="h-full w-[75%] bg-black rounded-full"></div></div>
</div>
</section>

<section>
<h3 className="text-sm font-bold uppercase tracking-widest border-b border-gray-200 pb-2 mb-4">Recognition</h3>
<div className="text-sm">
<p className="font-bold">Awwwards SOTD</p>
<p className="text-gray-600 text-xs mb-3">2023</p>
<p className="font-bold">Best UI, App Store</p>
<p className="text-gray-600 text-xs">2020</p>
</div>
</section>
</div>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
