import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Mobile Menu Logic
      const toggleBtn = document.getElementById('mobile-menu-toggle');
      const closeBtn = document.getElementById('mobile-menu-close');
      const menu = document.getElementById('mobile-menu');
      const links = menu.querySelectorAll('a');

      function openMenu() {
          menu.classList.remove('translate-x-full');
          document.body.style.overflow = 'hidden';
      }

      function closeMenu() {
          menu.classList.add('translate-x-full');
          document.body.style.overflow = '';
      }

      toggleBtn.addEventListener('click', openMenu);
      closeBtn.addEventListener('click', closeMenu);

      links.forEach(link => {
          link.addEventListener('click', closeMenu);
      });

      // Scroll Reveal Animation
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('active');
              }
          });
      }, observerOptions);

      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="flex flex-col min-h-screen relative overflow-hidden">

<header className="fixed z-50 md:px-6 lg:px-8 reveal pt-4 pr-4 pl-4 right-0 left-0 active">
<div className="max-w-[1680px] mr-auto ml-auto">
<div className="flex md:px-6 glass-nav rounded-full pt-3 pr-4 pb-3 pl-6 shadow-sm border border-slate-200/50 items-center justify-between">

<a className="flex items-center gap-3 group" href="/">

<svg className="group-hover:scale-105 transition-transform duration-300" fill="none" height="40" viewbox="0 0 100 100" width="40" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="gradTop" x1="0" x2="1" y1="1" y2="0">
<stop offset="0%" stop-color="#1e40af"></stop>

<stop offset="100%" stop-color="#38bdf8"></stop>

</lineargradient>
<lineargradient gradientunits="userSpaceOnUse" id="gradBottom" x1="0" x2="1" y1="0.5" y2="0.5">
<stop offset="0%" stop-color="#1e3a8a"></stop>

<stop offset="40%" stop-color="#0ea5e9"></stop>

<stop offset="100%" stop-color="#10b981"></stop>

</lineargradient>
<lineargradient gradientunits="userSpaceOnUse" id="gradRight" x1="0.5" x2="0.8" y1="1" y2="0">
<stop offset="0%" stop-color="#10b981"></stop>

<stop offset="100%" stop-color="#4ade80"></stop>

</lineargradient>
</defs>

<path d="M40 38 C38 25 45 15 60 12 C72 10 80 20 82 30 C84 42 75 48 62 48 C50 48 42 45 40 38 Z" fill="url(#gradTop)"></path>

<path d="M15 65 C12 52 35 48 50 50 C65 52 72 65 68 78 C64 88 45 92 30 88 C15 84 16 70 15 65 Z" fill="url(#gradBottom)"></path>

<path d="M72 82 C78 60 88 25 95 8 C88 28 80 50 70 75 C68 80 70 84 72 82 Z" fill="url(#gradRight)"></path>
</svg>
<span className="text-2xl font-bold tracking-wide text-slate-800 font-sans">
                Aram Labs
              </span>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#about">
                About
              </a>
<a className="text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#services">
                Services
              </a>
<a className="text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#process">
                Process
              </a>
<a className="text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#contact">
                Contact
              </a>
</nav>

<div className="hidden md:flex items-center">
<a className="btn-hover inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-[15px] font-medium rounded-full px-5 py-2.5 transition-all" href="#contact">
                Let's Talk
              </a>
</div>

<button className="lg:hidden p-2 text-slate-600 hover:text-slate-900" id="mobile-menu-toggle">
<svg className="lucide lucide-menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
</div>
</header>

<main className="flex-1">

<section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden">

<div className="aram-glow top-[-200px] left-[-100px] opacity-60"></div>
<div className="aram-glow bottom-[-100px] right-[-100px] opacity-40 bg-emerald-200"></div>
<div className="mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px] relative z-10 text-center">
<div className="reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-6">
<span className="w-2 h-2 rounded-full bg-blue-600"></span>
                AI for Small Business
              </div>
<h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] font-semibold text-slate-800 tracking-tight font-serif mb-6">
                You Focus on Your Clients.
                <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 italic">
                  We'll Handle the Rest.
                </span>
</h1>
<p className="text-xl md:text-2xl text-slate-500 font-normal mb-8 max-w-2xl mx-auto font-serif">
                Less noise. More results. Just a trusted partner in your corner.
              </p>
<p className="text-base md:text-lg text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                AI doesn't have to be complicated. Aram Labs takes the guesswork
                out of improving your operations—so you can get back to what you
                do best.
              </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="btn-hover inline-flex items-center justify-center gap-2 bg-slate-900 text-white text-lg font-medium rounded-full px-8 py-3.5 transition-all w-full sm:w-auto" href="#contact">
                  Let's Talk
                  <svg className="lucide lucide-arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white relative">
<div className="mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px]">
<div className="grid lg:grid-cols-2 gap-16 items-center reveal">
<div className="relative">
<div className="absolute -top-10 -left-10 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-60"></div>
<h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight tracking-tight">
                  You Didn't Start Your Business to
                  <span className="italic text-slate-400">Drown</span>
                  in Busywork
                </h2>
<p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  You started your business because you're great at what you do.
                  But somewhere along the way, the emails piled up. The
                  scheduling got complicated. The paperwork never stopped.
                </p>
<p className="text-lg font-medium text-slate-900">
                  We get it. And we're here to help.
                </p>
</div>
<div className="relative">
<div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 relative shadow-xl">
<img alt="Business planning" className="w-full h-full object-cover opacity-80 mix-blend-multiply" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden" id="about">
<div className="aram-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30"></div>
<div className="mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px] relative z-10">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6 tracking-tight">
                Meet Your
                <span className="text-emerald-600 italic">AI-Powered</span>
                Operations Partner
              </h2>
<p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Aram Labs works alongside you—not instead of you. Our AI tools
                learn how your business runs and quietly take care of the tasks
                that slow you down.
              </p>
</div>
<div className="grid md:grid-cols-3 gap-6 reveal">

<div className="glass-card p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 font-serif tracking-tight">
                  Save Time
                </h3>
<p className="text-slate-600 leading-relaxed">
                  Automate repetitive work and reclaim hours every week to focus
                  on growth.
                </p>
</div>

<div className="glass-card p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 font-serif tracking-tight">
                  Eliminate Inefficiencies
                </h3>
<p className="text-slate-600 leading-relaxed">
                  Spot bottlenecks and streamline your operations effortlessly.
                </p>
</div>

<div className="glass-card p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-focus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
<path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
<path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
<path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 font-serif tracking-tight">
                  Stay Focused
                </h3>
<p className="text-slate-600 leading-relaxed">
                  Keep your attention on customers and craft, not boring admin
                  work.
                </p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-y border-slate-100">
<div className="mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px] text-center reveal">
<h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-4 tracking-tight">
              Built for Businesses Like Yours
            </h2>
<p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
              We work with small business owners across industries—real estate
              agents, property managers, developers, millwork manufacturers, and
              more. If you run a business and want it to run smoother, we're a
              good fit.
            </p>
<a className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors" href="#services">
              See How It Works
              <svg className="lucide lucide-arrow-right ml-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</section>

<section className="py-24 bg-white">
<div className="mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px] space-y-24">

<div className="grid md:grid-cols-2 gap-12 items-center reveal">
<div className="order-2 md:order-1">
<span className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2 block">
                  Our Story
                </span>
<h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 tracking-tight">
                  We Started Aram Labs Because Small Businesses Deserve Better
                  Tools
                </h2>
<div className="space-y-4 text-lg text-slate-600">
<p>
                    Big companies have entire teams to handle operations. Small
                    business owners? They have themselves—and maybe a few
                    trusted employees.
                  </p>
<p className="font-medium text-slate-800">
                    That didn't seem fair to us.
                  </p>
<p>
                    So we built Aram Labs: AI tools designed specifically for
                    small businesses. Not complicated enterprise software. Not
                    one-size-fits-all solutions. Just practical, approachable
                    technology that works the way you work.
                  </p>
</div>
</div>
<div className="order-1 md:order-2">
<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-slate-50 relative">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 mix-blend-overlay z-10"></div>
<img alt="Small business owner" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=1632&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-8 reveal">
<div className="glass-card bg-slate-50 p-10 rounded-3xl border border-slate-100">
<span className="text-sm font-semibold text-emerald-600 uppercase tracking-widest mb-2 block">
                  Our Mission
                </span>
<h3 className="text-3xl font-serif text-slate-900 mb-4 tracking-tight">
                  Your Success Is Our Purpose
                </h3>
<p className="text-lg text-slate-600 mb-4">
                  We believe small business owners are the backbone of our
                  communities. You create jobs, serve neighbors, and pour your
                  heart into your work.
                </p>
<p className="text-lg text-slate-600">
                  Our mission is simple: give you back your time and energy so
                  you can keep doing what matters.
                </p>
</div>
<div className="glass-card bg-blue-50/50 p-10 rounded-3xl border border-blue-100">
<span className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2 block">
                  Our Approach
                </span>
<h3 className="text-3xl font-serif text-slate-900 mb-4 tracking-tight">
                  Technology That Feels Like a Teammate
                </h3>
<p className="text-lg text-slate-600 mb-6">
                  We don't believe in replacing people with robots. We believe
                  in giving people superpowers.
                </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-slate-700">
<svg className="lucide lucide-check text-blue-500 mt-1" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                    Learns your business, not the other way around
                  </li>
<li className="flex items-start gap-3 text-slate-700">
<svg className="lucide lucide-check text-blue-500 mt-1" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                    Works quietly in the background
                  </li>
<li className="flex items-start gap-3 text-slate-700">
<svg className="lucide lucide-check text-blue-500 mt-1" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                    Makes you look organized (even on busy days)
                  </li>
<li className="flex items-start gap-3 text-slate-700">
<svg className="lucide lucide-check text-blue-500 mt-1" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                    Grows with you as your business grows
                  </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="services">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px] relative z-10">
<div className="text-center mb-16 reveal">
<span className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2 block">
                Services
              </span>
<h2 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight">
                AI Solutions That Actually
                <span className="italic text-slate-400">Make Sense</span>
</h2>
<p className="text-lg text-slate-300 max-w-2xl mx-auto">
                No jargon. No complicated setups. Just tools that help your
                business run better, starting day one.
              </p>
</div>
<div className="grid md:grid-cols-2 gap-6 reveal">

<div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
<svg className="lucide lucide-settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 7h-9"></path>
<path d="M14 17H5"></path>
<circle cx="17" cy="17" r="3"></circle>
<circle cx="7" cy="7" r="3"></circle>
</svg>
</div>
<h3 className="text-2xl font-serif mb-2 tracking-tight">
                  Intelligent Operations
                </h3>
<p className="text-slate-300 mb-4">
                  Automates the repetitive tasks eating up your day—scheduling,
                  follow-ups, data entry, and more.
                </p>
<p className="text-sm font-medium text-emerald-400">
                  Why it matters: You get hours back every week without hiring
                  extra help.
                </p>
</div>

<div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
<svg className="lucide lucide-message-square-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
<path d="M13 8H7"></path>
<path d="M17 12H7"></path>
</svg>
</div>
<h3 className="text-2xl font-serif mb-2 tracking-tight">
                  Smart Communication
                </h3>
<p className="text-slate-300 mb-4">
                  AI-assisted email management, customer responses, and internal
                  coordination.
                </p>
<p className="text-sm font-medium text-emerald-400">
                  Why it matters: Never miss an important message. Respond
                  faster.
                </p>
</div>

<div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<div className="w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
<svg className="lucide lucide-bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="M18 17V9"></path>
<path d="M13 17V5"></path>
<path d="M8 17v-3"></path>
</svg>
</div>
<h3 className="text-2xl font-serif mb-2 tracking-tight">
                  Business Insights
                </h3>
<p className="text-slate-300 mb-4">
                  Tracks your operations and surfaces patterns you might
                  miss—what's working, what's not.
                </p>
<p className="text-sm font-medium text-emerald-400">
                  Why it matters: Make confident decisions based on real data.
                </p>
</div>

<div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mb-6">
<svg className="lucide lucide-sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
<path d="M5 3v4"></path>
<path d="M9 3v4"></path>
<path d="M3 5h4"></path>
<path d="M3 9h4"></path>
</svg>
</div>
<h3 className="text-2xl font-serif mb-2 tracking-tight">
                  Custom AI Solutions
                </h3>
<p className="text-slate-300 mb-4">
                  We build tailored tools for challenges unique to your
                  business.
                </p>
<p className="text-sm font-medium text-emerald-400">
                  Why it matters: Your business isn't cookie-cutter. Tools
                  shouldn't be either.
                </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="process">
<div className="mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px]">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4 tracking-tight">
                How We Work Together
              </h2>
<p className="text-lg text-slate-600">
                A simple, transparent process designed to get you results.
              </p>
</div>
<div className="grid md:grid-cols-4 gap-8 reveal">
<div className="relative">
<span className="text-6xl font-serif text-slate-100 absolute -top-8 -left-4 z-0">
                  1
                </span>
<div className="relative z-10">
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">
                    Discovery Call
                  </h3>
<p className="text-slate-600">
                    We learn about your business and challenges.
                  </p>
</div>
</div>
<div className="relative">
<span className="text-6xl font-serif text-slate-100 absolute -top-8 -left-4 z-0">
                  2
                </span>
<div className="relative z-10">
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">
                    Custom Plan
                  </h3>
<p className="text-slate-600">
                    We design a solution that fits your needs and budget.
                  </p>
</div>
</div>
<div className="relative">
<span className="text-6xl font-serif text-slate-100 absolute -top-8 -left-4 z-0">
                  3
                </span>
<div className="relative z-10">
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">
                    Implementation
                  </h3>
<p className="text-slate-600">
                    We set everything up with minimal disruption to you.
                  </p>
</div>
</div>
<div className="relative">
<span className="text-6xl font-serif text-slate-100 absolute -top-8 -left-4 z-0">
                  4
                </span>
<div className="relative z-10">
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">
                    Ongoing Support
                  </h3>
<p className="text-slate-600">
                    We're always here when you need us.
                  </p>
</div>
</div>
</div>
<div className="mt-16 text-center reveal">
<a className="btn-hover inline-flex items-center gap-2 bg-blue-600 text-white text-lg font-medium rounded-full px-8 py-3 hover:bg-blue-700 transition-colors" href="#contact">
                Book a Free Consultation
                <svg className="lucide lucide-calendar" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden" id="contact">
<div className="mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px] relative z-10">
<div className="grid lg:grid-cols-2 gap-16">
<div className="reveal">
<span className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2 block">
                  Get In Touch
                </span>
<h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 tracking-tight">
                  Let's Start a Conversation
                </h2>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Whether you have questions, want to explore how AI could help
                  your business, or just want to say hello—we'd love to hear
                  from you.
                  <br/>
<br/>
                  No pressure. No hard sells. Just a friendly chat about what's
                  possible.
                </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600">
<svg className="lucide lucide-mail" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
</div>
<span className="text-lg text-slate-700">
                      hello@aramlabs.com
                    </span>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600">
<svg className="lucide lucide-phone" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
</div>
<a className="text-lg text-slate-700 underline decoration-slate-300 underline-offset-4 hover:decoration-blue-500 hover:text-blue-600 transition-all" href="#">
                      Book a 15-minute call
                    </a>
</div>
</div>
</div>
<div className="glass-card bg-white p-8 rounded-3xl shadow-sm reveal delay-100">
<form className="space-y-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="name">
                      Name
                    </label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50" id="name" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="email">
                      Email
                    </label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50" id="email" placeholder="jane@company.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="business">
                      Business Name (Optional)
                    </label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50" id="business" placeholder="Acme Inc." type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="message">
                      How can we help you?
                    </label>
<textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50" id="message" placeholder="Tell us a bit about your challenges..." rows="4"></textarea>
</div>
<button className="w-full btn-hover bg-slate-900 text-white font-medium py-3.5 rounded-xl hover:bg-slate-800 transition-colors" type="button">
                    Send Message
                  </button>
<p className="text-center text-sm text-slate-500">
                    We read every message personally. You'll hear back from a
                    real human—usually within one business day.
                  </p>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
<div className="mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px]">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">

<a className="flex items-center gap-2 group" href="/">
<svg className="grayscale group-hover:grayscale-0 transition-all duration-300" fill="none" height="32" viewbox="0 0 100 100" width="32" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="logoGradFooter" x1="0" x2="1" y1="0.5" y2="0.5">
<stop offset="0%" stop-color="#1e3a8a"></stop>
<stop offset="50%" stop-color="#0ea5e9"></stop>
<stop offset="100%" stop-color="#22c55e"></stop>
</lineargradient>
</defs>

<path d="M40 38 C38 25 45 15 60 12 C72 10 80 20 82 30 C84 42 75 48 62 48 C50 48 42 45 40 38 Z" fill="url(#logoGradFooter)"></path>
<path d="M15 65 C12 52 35 48 50 50 C65 52 72 65 68 78 C64 88 45 92 30 88 C15 84 16 70 15 65 Z" fill="url(#logoGradFooter)"></path>
<path d="M72 82 C78 60 88 25 95 8 C88 28 80 50 70 75 C68 80 70 84 72 82 Z" fill="url(#logoGradFooter)"></path>
</svg>
<span className="text-2xl font-bold tracking-wide text-white font-sans">
                Aram Labs
              </span>
</a>
<div className="flex gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#about">
                About
              </a>
<a className="hover:text-white transition-colors" href="#services">
                Services
              </a>
<a className="hover:text-white transition-colors" href="#contact">
                Contact
              </a>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
<p>© 2024 Aram Labs. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>
</div>

<div className="fixed inset-0 z-50 bg-white transform translate-x-full transition-transform duration-300 lg:hidden" id="mobile-menu">
<div className="flex flex-col h-full">
<div className="flex items-center justify-between p-4 border-b border-slate-100">
<div className="flex items-center gap-2">
<span className="text-2xl font-bold tracking-wide text-slate-800 font-sans">
              Aram Labs
            </span>
</div>
<button className="p-2 text-slate-600 hover:text-slate-900" id="mobile-menu-close">
<svg className="lucide lucide-x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>
<nav className="flex-1 p-6 space-y-6">
<a className="block text-2xl font-serif text-slate-900" href="#about">
            About
          </a>
<a className="block text-2xl font-serif text-slate-900" href="#services">
            Services
          </a>
<a className="block text-2xl font-serif text-slate-900" href="#process">
            Process
          </a>
<a className="block text-2xl font-serif text-slate-900" href="#contact">
            Contact
          </a>
</nav>
<div className="p-6 border-t border-slate-100">
<a className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 text-white text-lg font-medium rounded-full py-4" href="#contact">
            Let's Talk
          </a>
</div>
</div>
</div>


    </>
  );
}
