import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
slate: {
850: '#161f32',
900: '#0f172a',
950: '#020617',
},
brand: {
400: '#38bdf8',
500: '#0ea5e9',
600: '#0284c7',
glow: '#38bdf8',
},
accent: {
teal: '#2dd4bf',
indigo: '#818cf8',
rose: '#fb7185',
purple: '#c084fc'
}
},
backgroundImage: {
'hero-glow': 'radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.15) 0%, transparent 60%)',
'grid-pattern': "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%2338bdf8\" fill-opacity=\"0.05\" fill-rule=\"evenodd\"%3E%3Cpath d=\"M0 40L40 0H20L0 20M40 40V20L20 40\"/%3E%3C/g%3E%3C/svg%3E')",
'dot-pattern': "url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%2394a3b8\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"1\" cy=\"1\" r=\"1\"/%3E%3C/g%3E%3C/svg%3E')"
}
}
}
}



      lucide.createIcons();

      function navigateTo(pageId) {
          document.querySelectorAll('.page-view').forEach(el => el.classList.add('hidden'));
          const target = document.getElementById('page-' + pageId);
          if (target) {
              target.classList.remove('hidden');
              window.scrollTo({ top: 0, behavior: 'smooth' });
              lucide.createIcons();
          }
      }

      function toggleMobile() {
           document.getElementById('mobile-menu').classList.toggle('hidden');
      }

      // Back to top visibility logic
      const backToTopBtn = document.getElementById('back-to-top');
      window.addEventListener('scroll', () => {
          if (window.scrollY > 300) {
              backToTopBtn.classList.add('visible');
          } else {
              backToTopBtn.classList.remove('visible');
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<button className="fixed bottom-8 right-8 z-50 p-3 bg-brand-600 hover:bg-brand-500 text-white rounded-full shadow-lg shadow-brand-500/30 opacity-0 transform translate-y-10 transition-all duration-300 pointer-events-none border border-white/20" id="back-to-top" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
<i className="w-5 h-5" data-lucide="arrow-up"></i>
</button>

<header className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3 cursor-pointer group" onclick="navigateTo('home')">
<div className="relative w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-brand-500 to-indigo-600 text-white shadow-lg shadow-brand-500/20 group-hover:shadow-brand-500/40 group-hover:scale-105 transition-all duration-300">
<i className="w-5 h-5" data-lucide="heart-handshake"></i>
</div>
<div className="flex flex-col">
<span className="text-lg font-bold tracking-tight text-white group-hover:text-brand-400 transition-colors leading-none">
              Dwell-In
            </span>
<span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold leading-none mt-1">
              Social Care
            </span>
</div>
</div>

<nav className="hidden xl:flex items-center gap-1 text-sm font-medium text-slate-400">
<button className="px-4 py-2 hover:text-white hover:bg-white/5 rounded-full transition-all" onclick="navigateTo('home')">
            Home
          </button>
<button className="px-4 py-2 hover:text-white hover:bg-white/5 rounded-full transition-all" onclick="navigateTo('about')">
            About Us
          </button>
<button className="px-4 py-2 hover:text-white hover:bg-white/5 rounded-full transition-all" onclick="navigateTo('services')">
            Our Services
          </button>
<button className="px-4 py-2 hover:text-white hover:bg-white/5 rounded-full transition-all" onclick="navigateTo('quality')">
            Quality
          </button>
<button className="px-4 py-2 hover:text-white hover:bg-white/5 rounded-full transition-all" onclick="navigateTo('families')">
            Families
          </button>
<button className="px-4 py-2 hover:text-white hover:bg-white/5 rounded-full transition-all" onclick="navigateTo('careers')">
            Careers
          </button>
<button className="px-4 py-2 hover:text-white hover:bg-white/5 rounded-full transition-all" onclick="navigateTo('news')">
            News
          </button>
</nav>
<div className="flex items-center gap-4">
<button className="hidden sm:inline-flex items-center justify-center px-5 py-2 text-sm font-bold text-white transition-all bg-white/5 border border-white/10 rounded-full hover:bg-brand-600 hover:border-brand-500 hover:shadow-glow active:scale-95" onclick="navigateTo('contact')">
            Contact Us
          </button>
<button className="xl:hidden p-2 text-slate-400 hover:text-white bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="hidden xl:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 p-6 absolute w-full top-20 left-0 flex flex-col gap-4 shadow-2xl h-screen overflow-y-auto pb-24 z-50" id="mobile-menu">
<button className="text-left text-lg font-medium text-slate-300 py-2 border-b border-white/5" onclick="navigateTo('home'); toggleMobile()">
          Home
        </button>
<button className="text-left text-lg font-medium text-slate-300 py-2 border-b border-white/5" onclick="navigateTo('about'); toggleMobile()">
          About Us
        </button>
<button className="text-left text-lg font-medium text-slate-300 py-2 border-b border-white/5" onclick="navigateTo('services'); toggleMobile()">
          Services
        </button>
<button className="text-left text-lg font-medium text-slate-300 py-2 border-b border-white/5" onclick="navigateTo('quality'); toggleMobile()">
          Quality
        </button>
<button className="text-left text-lg font-medium text-slate-300 py-2 border-b border-white/5" onclick="navigateTo('families'); toggleMobile()">
          Families
        </button>
<button className="text-left text-lg font-medium text-slate-300 py-2 border-b border-white/5" onclick="navigateTo('careers'); toggleMobile()">
          Careers
        </button>
<button className="text-left text-lg font-medium text-slate-300 py-2 border-b border-white/5" onclick="navigateTo('news'); toggleMobile()">
          News
        </button>
<button className="text-left text-lg font-medium text-brand-400 py-2" onclick="navigateTo('contact'); toggleMobile()">
          Contact
        </button>
</div>
</header>
<main className="pt-20 min-h-screen relative">

<div className="page-view fade-enter" id="page-home">
<section className="relative pt-24 pb-20 overflow-hidden">
<div className="absolute top-0 inset-x-0 h-[800px] bg-hero-glow -z-10 pointer-events-none"></div>
<div className="absolute inset-0 bg-grid-pattern opacity-30 -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="relative z-10 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/40 border border-brand-500/30 text-brand-400 text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-md shadow-lg shadow-brand-500/10 hover:bg-blue-950/60 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                Regulated Health &amp; Social Care
              </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                All round compassionate,
                <span className="text-gradient">Person Centred Support</span>
                and Care.
              </h1>
<div className="flex flex-col gap-4 mb-8">
<p className="text-xl text-brand-400 font-medium flex items-center gap-2 justify-center lg:justify-start">
<i className="w-5 h-5" data-lucide="shield-check"></i>
                  Your Welfare always Our Priority
                </p>
<p className="text-lg text-slate-300 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Welcome to Dwell-In Social Care. We provide Ofsted- and
                  CQC-regulated health and social care services, ensuring
                  safety, dignity, and independence at every stage of life.
                </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<button className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-full transition-all shadow-lg shadow-brand-500/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-2" onclick="navigateTo('services')">
                  Explore Services
                  <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium rounded-full transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2" onclick="navigateTo('about')">
                  Read About Us
                </button>
</div>

<div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-xs font-medium text-slate-500">
<div className="flex items-center gap-1">
<i className="w-3 h-3 text-green-500" data-lucide="check"></i>
                  Ofsted Regulated
                </div>
<div className="w-1 h-1 bg-slate-700 rounded-full"></div>
<div className="flex items-center gap-1">
<i className="w-3 h-3 text-green-500" data-lucide="check"></i>
                  CQC Registered
                </div>
<div className="w-1 h-1 bg-slate-700 rounded-full"></div>
<div className="flex items-center gap-1">
<i className="w-3 h-3 text-green-500" data-lucide="check"></i>
                  24/7 Support
                </div>
</div>
</div>
<div className="relative hidden lg:block group perspective-1000">
<div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/10 transform transition-transform duration-500 group-hover:rotate-1">
<img alt="Care support" className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-4 shadow-xl">
<div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<div>
<div className="text-white font-bold text-sm">Rated Good</div>
<div className="text-slate-400 text-xs">
                      Consistent Ofsted Ratings
                    </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-slate-900/50 relative overflow-hidden">
<div className="absolute inset-0 bg-dot-pattern opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-8 flex items-center justify-center gap-4">
<span className="w-8 h-px bg-slate-800"></span>
              Regulated &amp; Trusted By
              <span className="w-8 h-px bg-slate-800"></span>
</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-70">
<div className="flex items-center gap-2 font-bold text-white text-lg hover:opacity-100 transition-opacity cursor-default group">
<div className="w-8 h-8 rounded bg-white flex items-center justify-center">
<i className="text-purple-600" data-lucide="check-circle"></i>
</div>
<span className="group-hover:text-purple-400 transition-colors">
                  Ofsted
                </span>
</div>
<div className="flex items-center gap-2 font-bold text-white text-lg hover:opacity-100 transition-opacity cursor-default group">
<div className="w-8 h-8 rounded bg-white flex items-center justify-center">
<i className="text-blue-600" data-lucide="activity"></i>
</div>
<span className="group-hover:text-blue-400 transition-colors">
                  CQC
                </span>
</div>
<div className="flex items-center gap-2 font-bold text-slate-300 hover:text-white transition-colors cursor-default">
                Mentor
              </div>
<div className="flex items-center gap-2 font-bold text-slate-300 hover:text-white transition-colors cursor-default">
                ClearCare
              </div>
<div className="flex items-center gap-2 font-bold text-slate-300 hover:text-white transition-colors cursor-default">
                Log My Care
              </div>
<div className="flex items-center gap-2 font-bold text-brand-400 hover:text-brand-300 transition-colors cursor-default">
<i className="w-5 h-5" data-lucide="shield-check"></i>
                Safeguarding First
              </div>
</div>
</div>
</section>

<section className="py-24 px-6 relative bg-slate-950">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<div className="text-brand-400 text-sm font-bold uppercase tracking-wider mb-2">
                  Our Expertise
                </div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Tailored Support for Every Stage
                </h2>
<p className="text-slate-400 text-lg">
                  From children’s homes to supported living for adults, we
                  create safe environments that promote independence.
                </p>
</div>
<button className="shrink-0 px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 text-white text-sm font-medium transition-colors flex items-center gap-2 group" onclick="navigateTo('services')">
                View All Services
                <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="glass-card p-6 rounded-2xl cursor-pointer group col-span-1 relative overflow-hidden" onclick="navigateTo('services')">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<i className="w-24 h-24" data-lucide="home"></i>
</div>
<i className="w-10 h-10 text-brand-400 mb-4 group-hover:scale-110 transition-transform" data-lucide="home"></i>
<h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
                  Children's Homes
                </h3>
<p className="text-sm text-slate-400 mb-4">
                  Nurturing environments for 6-16 year olds.
                </p>
<span className="text-xs font-bold text-brand-500 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Learn more
                  <i className="w-3 h-3" data-lucide="chevron-right"></i>
</span>
</div>
<div className="glass-card p-6 rounded-2xl cursor-pointer group col-span-1 relative overflow-hidden" onclick="navigateTo('services')">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<i className="w-24 h-24" data-lucide="key"></i>
</div>
<i className="w-10 h-10 text-indigo-400 mb-4 group-hover:scale-110 transition-transform" data-lucide="key"></i>
<h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  16+ Supported Accom.
                </h3>
<p className="text-sm text-slate-400 mb-4">
                  Building independence for 16-17 year olds.
                </p>
<span className="text-xs font-bold text-indigo-500 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Learn more
                  <i className="w-3 h-3" data-lucide="chevron-right"></i>
</span>
</div>
<div className="glass-card p-6 rounded-2xl cursor-pointer group col-span-1 relative overflow-hidden" onclick="navigateTo('services')">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<i className="w-24 h-24" data-lucide="users"></i>
</div>
<i className="w-10 h-10 text-purple-400 mb-4 group-hover:scale-110 transition-transform" data-lucide="users"></i>
<h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  Adult Supported Accom.
                </h3>
<p className="text-sm text-slate-400 mb-4">
                  Safe, structured housing for adults.
                </p>
<span className="text-xs font-bold text-purple-500 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Learn more
                  <i className="w-3 h-3" data-lucide="chevron-right"></i>
</span>
</div>
<div className="glass-card p-6 rounded-2xl cursor-pointer group col-span-1 md:col-span-1.5 lg:col-span-1 relative overflow-hidden" onclick="navigateTo('services')">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<i className="w-24 h-24" data-lucide="sun"></i>
</div>
<i className="w-10 h-10 text-amber-400 mb-4 group-hover:scale-110 transition-transform" data-lucide="sun"></i>
<h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  Supported Living
                </h3>
<p className="text-sm text-slate-400 mb-4">
                  Flexible support for learning disabilities.
                </p>
<span className="text-xs font-bold text-amber-500 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Learn more
                  <i className="w-3 h-3" data-lucide="chevron-right"></i>
</span>
</div>
<div className="glass-card p-6 rounded-2xl cursor-pointer group col-span-1 md:col-span-1.5 lg:col-span-1 relative overflow-hidden" onclick="navigateTo('services')">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<i className="w-24 h-24" data-lucide="heart-handshake"></i>
</div>
<i className="w-10 h-10 text-rose-400 mb-4 group-hover:scale-110 transition-transform" data-lucide="heart-handshake"></i>
<h3 className="text-lg font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                  Personal Care
                </h3>
<p className="text-sm text-slate-400 mb-4">
                  Compassionate care in your own home.
                </p>
<span className="text-xs font-bold text-rose-500 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Learn more
                  <i className="w-3 h-3" data-lucide="chevron-right"></i>
</span>
</div>
<div className="glass-card p-6 rounded-2xl cursor-pointer bg-brand-900/20 border-brand-500/30 hover:bg-brand-900/30 transition-colors group flex flex-col justify-center items-center text-center shadow-lg shadow-brand-900/20" onclick="navigateTo('services')">
<div className="w-12 h-12 rounded-full bg-brand-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-brand-400" data-lucide="arrow-right"></i>
</div>
<span className="text-brand-400 font-bold mb-1">
                  View Full Service Catalogue
                </span>
<span className="text-xs text-brand-500/70">
                  Explore all options
                </span>
</div>
</div>
</div>
</section>

<section className="py-12 bg-slate-900 border-y border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-brand-900/10 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex items-center gap-6">
<div className="hidden md:flex w-16 h-16 rounded-2xl bg-slate-800 border border-white/10 items-center justify-center text-brand-400">
<i className="w-8 h-8" data-lucide="users"></i>
</div>
<div>
<h3 className="text-2xl font-bold text-white mb-1">
                  Join the Dwell-In Family
                </h3>
<p className="text-slate-400 text-sm">
                  We are always looking for passionate people to join our team.
                </p>
</div>
</div>
<button className="px-6 py-3 bg-white text-slate-950 font-bold rounded-full hover:bg-brand-50 transition-colors shadow-lg hover:shadow-white/20" onclick="navigateTo('careers')">
              View Current Vacancies
            </button>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold text-white mb-4">
                Trusted by Families
              </h2>
<p className="text-slate-400 max-w-2xl mx-auto">
                Don't just take our word for it. Here is what our community
                says.
              </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="glass-card p-8 rounded-2xl relative">
<div className="text-brand-500/20 absolute top-4 right-6 text-6xl font-serif">
                  "
                </div>
<div className="flex gap-1 text-amber-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-300 mb-6 text-sm leading-relaxed">
                  "The support my son has received at Stratford House has been
                  transformative. The staff truly care and have helped him build
                  confidence I never thought possible."
                </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-white">
                    S
                  </div>
<div>
<div className="text-white text-sm font-bold">Sarah M.</div>
<div className="text-slate-500 text-xs">Parent</div>
</div>
</div>
</div>
<div className="glass-card p-8 rounded-2xl relative">
<div className="text-brand-500/20 absolute top-4 right-6 text-6xl font-serif">
                  "
                </div>
<div className="flex gap-1 text-amber-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-300 mb-6 text-sm leading-relaxed">
                  "Professional, compassionate, and reliable. The communication
                  from the team is excellent, and we always feel involved in
                  care decisions."
                </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-white">
                    D
                  </div>
<div>
<div className="text-white text-sm font-bold">David L.</div>
<div className="text-slate-500 text-xs">Guardian</div>
</div>
</div>
</div>
<div className="glass-card p-8 rounded-2xl relative hidden lg:block">
<div className="text-brand-500/20 absolute top-4 right-6 text-6xl font-serif">
                  "
                </div>
<div className="flex gap-1 text-amber-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-300 mb-6 text-sm leading-relaxed">
                  "Working with Dwell-In as a local authority partner has been
                  seamless. Their compliance and reporting standards are
                  consistently high."
                </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-white">
                    J
                  </div>
<div>
<div className="text-white text-sm font-bold">James T.</div>
<div className="text-slate-500 text-xs">Social Worker</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 border-t border-white/5">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-bold text-white mb-2 text-center">
              Frequently Asked Questions
            </h2>
<p className="text-slate-400 text-center mb-12">
              Common questions about our care services and processes.
            </p>
<div className="space-y-4">
<details className="group bg-slate-950 p-6 rounded-2xl border border-white/5 open:border-brand-500/30 open:bg-slate-900 transition-all duration-300 cursor-pointer">
<summary className="flex justify-between items-center font-bold text-white">
                  How do I make a referral?
                  <span className="transition-transform duration-300 group-open:rotate-180 text-brand-400">
<i data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-slate-400 mt-4 text-sm leading-relaxed">
                  Referrals can be made by Local Authorities, health
                  professionals, or directly by families. You can use our
                  contact form or call our referrals team directly on 01506
                  260400 to discuss specific needs.
                </div>
</details>
<details className="group bg-slate-950 p-6 rounded-2xl border border-white/5 open:border-brand-500/30 open:bg-slate-900 transition-all duration-300 cursor-pointer">
<summary className="flex justify-between items-center font-bold text-white">
                  What age groups do you support?
                  <span className="transition-transform duration-300 group-open:rotate-180 text-brand-400">
<i data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-slate-400 mt-4 text-sm leading-relaxed">
                  We support a wide range of ages: Children's Homes cover ages
                  6-16, our Supported Accommodation is for 16-17 year olds, and
                  our Adult Services and Personal Care support adults aged
                  18-65.
                </div>
</details>
<details className="group bg-slate-950 p-6 rounded-2xl border border-white/5 open:border-brand-500/30 open:bg-slate-900 transition-all duration-300 cursor-pointer">
<summary className="flex justify-between items-center font-bold text-white">
                  Are your staff qualified?
                  <span className="transition-transform duration-300 group-open:rotate-180 text-brand-400">
<i data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-slate-400 mt-4 text-sm leading-relaxed">
                  Absolutely. All our staff undergo rigorous training and DBS
                  checks. We fund and support staff to achieve NVQ Level 3, 4,
                  and 5 qualifications in Health &amp; Social Care.
                </div>
</details>
<details className="group bg-slate-950 p-6 rounded-2xl border border-white/5 open:border-brand-500/30 open:bg-slate-900 transition-all duration-300 cursor-pointer">
<summary className="flex justify-between items-center font-bold text-white">
                  Can family visit?
                  <span className="transition-transform duration-300 group-open:rotate-180 text-brand-400">
<i data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-slate-400 mt-4 text-sm leading-relaxed">
                  Yes, maintaining family connections is vital. Visits are
                  encouraged and arranged in line with individual care plans and
                  safeguarding guidelines to ensure the safety and wellbeing of
                  everyone.
                </div>
</details>
</div>
</div>
</section>

<section className="py-16 bg-gradient-to-r from-indigo-900/40 to-brand-900/40 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
<div>
<h3 className="text-2xl font-bold text-white mb-2">
                Looking for safe, supportive care?
              </h3>
<p className="text-slate-300">
                We’re here to help children, young people, and adults live safe,
                fulfilling lives.
              </p>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-lg transition-colors shadow-lg shadow-brand-500/20 hover:scale-105 active:scale-95" onclick="navigateTo('contact')">
                Make a Referral
              </button>
<button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-colors border border-white/10 hover:border-white/30" onclick="navigateTo('contact')">
                Contact Us
              </button>
</div>
</div>
</section>
</div>

<div className="page-view hidden fade-enter" id="page-services">

<section className="py-20 px-6 bg-slate-950 border-b border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-brand-400 uppercase bg-brand-500/10 rounded-full border border-brand-500/20">
              Comprehensive Care
            </div>
<h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
<p className="text-xl text-slate-400 leading-relaxed mb-6">
              At Dwell-In, we provide modern, outward-looking residential care
              that nurtures children, young people, and adults with dignity and
              respect.
            </p>
<div className="flex flex-wrap gap-2 justify-center text-sm font-medium text-slate-400">
<span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 hover:border-brand-500/50 hover:text-white transition-colors cursor-default">
                Children's Homes
              </span>
<span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 hover:border-brand-500/50 hover:text-white transition-colors cursor-default">
                16+ Supported Accom
              </span>
<span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 hover:border-brand-500/50 hover:text-white transition-colors cursor-default">
                Adult Services
              </span>
<span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 hover:border-brand-500/50 hover:text-white transition-colors cursor-default">
                Home Care
              </span>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 relative border-b border-white/5">
<div className="max-w-7xl mx-auto">
<div className="flex items-center gap-3 mb-8">
<span className="px-3 py-1 rounded bg-cyan-500/20 text-cyan-400 text-xs font-bold uppercase border border-cyan-500/20">
                Ofsted Regulated
              </span>
<h2 className="text-3xl font-bold text-white">
                Children's Homes (6-16 Years)
              </h2>
</div>
<p className="text-slate-400 max-w-3xl mb-12">
              Dwell-In Children’s Homes comprises a great senior management team
              with extensive experience in residential care and a consistent
              proven record of GOOD in Ofsted ratings. We provide around the
              clock therapeutic and trauma-informed support.
            </p>
<div className="grid lg:grid-cols-2 gap-10">

<div className="group cursor-pointer glass-card-bright bg-slate-800/40 p-0 overflow-hidden rounded-2xl border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300" onclick="navigateTo('stratford')">
<div className="h-64 bg-slate-700 relative overflow-hidden">
<div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Stratford House" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-4 left-4 z-20">
<div className="text-cyan-400 text-xs font-bold uppercase mb-1 bg-black/50 backdrop-blur px-2 py-1 rounded inline-block">
                      Therapeutic EBD
                    </div>
<div className="text-white text-xl font-bold drop-shadow-md">
                      Stratford House
                    </div>
</div>
</div>
<div className="p-8">
<p className="text-slate-300 text-sm mb-4 line-clamp-3">
                    A welcoming and nurturing home designed for up to three
                    young people of all genders, aged 8-17. Specialising in
                    Emotional Behavioural Difficulties (EBD).
                  </p>
<span className="text-cyan-400 text-sm font-bold group-hover:underline flex items-center gap-1">
                    View Full Profile
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</span>
</div>
</div>

<div className="group cursor-pointer glass-card-bright bg-slate-800/40 p-0 overflow-hidden rounded-2xl border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300" onclick="navigateTo('pevrel')">
<div className="h-64 bg-slate-700 relative overflow-hidden">
<div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Pevrel House" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-4 left-4 z-20">
<div className="text-cyan-400 text-xs font-bold uppercase mb-1 bg-black/50 backdrop-blur px-2 py-1 rounded inline-block">
                      Solo Placement
                    </div>
<div className="text-white text-xl font-bold drop-shadow-md">
                      Pevrel House
                    </div>
</div>
</div>
<div className="p-8">
<p className="text-slate-300 text-sm mb-4 line-clamp-3">
                    A welcoming home designed for one child or young person aged
                    6-17. Dedicated solo placement with Key Worker and 24/7
                    staff.
                  </p>
<span className="text-cyan-400 text-sm font-bold group-hover:underline flex items-center gap-1">
                    View Full Profile
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-950 relative border-b border-white/5">
<div className="max-w-7xl mx-auto">
<div className="flex items-center gap-3 mb-8">
<span className="px-3 py-1 rounded bg-indigo-500/20 text-indigo-400 text-xs font-bold uppercase border border-indigo-500/20">
                Ofsted Regulated
              </span>
<h2 className="text-3xl font-bold text-white">
                Independent Supported Accommodation (16+)
              </h2>
</div>
<div className="grid lg:grid-cols-2 gap-16">
<div>
<p className="text-slate-400 mb-6 leading-relaxed">
                  At Dwell-In, we’re proud to have helped over
                  <strong className="text-white">
                    120 children and young people
                  </strong>
                  discover brighter futures. Since opening our doors in 2017,
                  we’ve grown into a trusted provider offering a smooth pathway
                  from childhood through to independent living.
                </p>
<p className="text-slate-400 mb-6 leading-relaxed">
                  We offer a variety of accommodation options for 16- and
                  17-year-olds. Whether it’s a cosy single room, a friendly
                  shared house, or a self-contained flat, we make sure every
                  space feels homely.
                </p>
<h3 className="text-xl font-bold text-white mb-4">Our Locations</h3>
<div className="space-y-4 text-sm text-slate-300">
<div className="p-4 bg-slate-900 rounded-lg border border-white/5 hover:border-indigo-500/30 transition-colors">
<div className="flex items-center gap-2 mb-1">
<i className="w-4 h-4 text-indigo-400" data-lucide="map-pin"></i>
<strong className="text-indigo-400 block">Corby</strong>
</div>
                    NN17 1RL (2 Bed), NN18 8GG (2 Bed)
                  </div>
<div className="p-4 bg-slate-900 rounded-lg border border-white/5 hover:border-indigo-500/30 transition-colors">
<div className="flex items-center gap-2 mb-1">
<i className="w-4 h-4 text-indigo-400" data-lucide="map-pin"></i>
<strong className="text-indigo-400 block">Kettering</strong>
</div>
                    NN16 8QL (Multiple Flats - 2 Bed Non-Ring-Fenced)
                  </div>
<div className="p-4 bg-slate-900 rounded-lg border border-white/5 hover:border-indigo-500/30 transition-colors">
<div className="flex items-center gap-2 mb-1">
<i className="w-4 h-4 text-indigo-400" data-lucide="map-pin"></i>
<strong className="text-indigo-400 block">Northampton</strong>
</div>
                    Beckets NN1 5NJ, Beech Av NN3 2LE, Langsett NN3 9SG,
                    Woodpecker NN4 0QP
                  </div>
</div>
</div>
<div className="relative">
<div className="absolute top-4 right-4 z-10 bg-indigo-600/90 backdrop-blur text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
                  98% Occupancy
                </div>
<img className="rounded-2xl w-full object-cover h-full min-h-[400px] border border-white/10 shadow-2xl" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 relative">
<div className="max-w-7xl mx-auto">
<div className="flex items-center gap-3 mb-8">
<span className="px-3 py-1 rounded bg-green-500/20 text-green-400 text-xs font-bold uppercase border border-green-500/20">
                CQC Regulated
              </span>
<h2 className="text-3xl font-bold text-white">
                Adult Services &amp; Personal Care
              </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="glass-card p-8 rounded-xl hover:bg-slate-800/80">
<i className="w-8 h-8 text-green-400 mb-4" data-lucide="armchair"></i>
<h3 className="text-xl font-bold text-white mb-3">
                  Supported Living
                </h3>
<p className="text-slate-400 text-sm mb-4">
                  Flexible, personalised support delivered in people’s own homes
                  or shared accommodation. Empowering choices and independent
                  living.
                </p>
<div className="h-px bg-white/5 w-full mb-4"></div>
<ul className="text-xs text-slate-500 space-y-2 mb-4">
<li className="flex items-center gap-2">
<i className="w-3 h-3 text-green-500" data-lucide="check"></i>
                    Learning difficulties
                  </li>
<li className="flex items-center gap-2">
<i className="w-3 h-3 text-green-500" data-lucide="check"></i>
                    Autism spectrum conditions
                  </li>
<li className="flex items-center gap-2">
<i className="w-3 h-3 text-green-500" data-lucide="check"></i>
                    Complex needs
                  </li>
</ul>
</div>

<div className="glass-card p-8 rounded-xl hover:bg-slate-800/80">
<i className="w-8 h-8 text-rose-400 mb-4" data-lucide="brain-circuit"></i>
<h3 className="text-xl font-bold text-white mb-3">
                  Mental Health Support
                </h3>
<p className="text-slate-400 text-sm mb-4">
                  Focused on helping people with complex mental health needs
                  build towards a future that is fulfilling. Includes community
                  group accommodation.
                </p>
<div className="h-px bg-white/5 w-full mb-4"></div>
<button className="text-xs font-bold text-rose-400 hover:text-rose-300">
                  Learn about our approach
                  <i className="w-3 h-3 inline" data-lucide="arrow-right"></i>
</button>
</div>

<div className="glass-card p-8 rounded-xl border-t-4 border-t-brand-500 hover:bg-slate-800/80">
<i className="w-8 h-8 text-brand-400 mb-4" data-lucide="hand-heart"></i>
<h3 className="text-xl font-bold text-white mb-3">
                  Home &amp; Personal Care
                </h3>
<p className="text-slate-400 text-sm mb-4">
                  Feel safe, supported, and yourself—at home. We help with daily
                  tasks, personal care, and companionship (Ages 18-65).
                </p>
<div className="h-px bg-white/5 w-full mb-4"></div>
<ul className="text-xs text-slate-500 space-y-2 mb-4">
<li className="flex items-center gap-2">
<i className="w-3 h-3 text-brand-500" data-lucide="check"></i>
                    Daily living &amp; Personal care
                  </li>
<li className="flex items-center gap-2">
<i className="w-3 h-3 text-brand-500" data-lucide="check"></i>
                    Companionship
                  </li>
<li className="flex items-center gap-2">
<i className="w-3 h-3 text-brand-500" data-lucide="check"></i>
                    Complex health needs
                  </li>
</ul>
</div>
</div>
</div>
</section>
</div>

<div className="page-view hidden fade-enter" id="page-about">

<section className="relative py-24 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-wider mb-8">
                Our Mission
              </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8">
                Empowering lives through principled delivery of
                <span className="text-gradient">exceptional care</span>
                .
              </h1>
<p className="text-lg text-slate-400 leading-relaxed mb-8 border-l-2 border-brand-500 pl-6">
                Our existence is premised on empowering lives through principled
                delivery of exceptional care and support for everyone. We do
                this by unlocking potential and providing inspiration to enable
                an extraordinary positive experience every day.
              </p>
<div className="flex items-center gap-6 text-sm font-medium text-slate-300">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-xs font-bold text-white">
                    A
                  </div>
<div className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-xs font-bold text-white">
                    J
                  </div>
<div className="w-10 h-10 rounded-full bg-slate-600 border-2 border-slate-900 flex items-center justify-center text-xs font-bold text-white">
                    K
                  </div>
</div>
<span>Join our growing team of 50+ professionals</span>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-purple-500/20 rounded-2xl blur-2xl -z-10"></div>
<div className="grid grid-cols-2 gap-4">
<img className="rounded-2xl border border-white/10 shadow-2xl translate-y-8 hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<img className="rounded-2xl border border-white/10 shadow-2xl hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900/50 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
<div className="p-4">
<div className="text-4xl font-bold text-white mb-2">2017</div>
<div className="text-sm text-slate-400 uppercase tracking-widest">
                  Founded in Corby
                </div>
</div>
<div className="p-4">
<div className="text-4xl font-bold text-white mb-2">120+</div>
<div className="text-sm text-slate-400 uppercase tracking-widest">
                  Young Lives Supported
                </div>
</div>
<div className="p-4">
<div className="text-4xl font-bold text-white mb-2">Good</div>
<div className="text-sm text-slate-400 uppercase tracking-widest">
                  Ofsted Ratings
                </div>
</div>
<div className="p-4">
<div className="text-4xl font-bold text-white mb-2">50+</div>
<div className="text-sm text-slate-400 uppercase tracking-widest">
                  Dedicated Staff
                </div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-bold text-white mb-4">
                Our Core Values
              </h2>
<p className="text-slate-400">
                These principles guide every decision we make, from the
                boardroom to the living room.
              </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="glass-card p-8 rounded-2xl group hover:bg-slate-800/60">
<div className="w-12 h-12 bg-brand-500/10 rounded-lg flex items-center justify-center text-brand-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-bold text-white mb-3">
                  Safeguarding First
                </h3>
<p className="text-slate-400 leading-relaxed text-sm">
                  We maintain a rigorous culture of safety. Every staff member
                  is trained to recognize signs of harm and empowered to act.
                </p>
</div>

<div className="glass-card p-8 rounded-2xl group hover:bg-slate-800/60">
<div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="heart"></i>
</div>
<h3 className="text-xl font-bold text-white mb-3">
                  Person-Centred
                </h3>
<p className="text-slate-400 leading-relaxed text-sm">
                  We don't believe in 'one size fits all'. We co-produce care
                  plans with individuals, respecting their history and wishes.
                </p>
</div>

<div className="glass-card p-8 rounded-2xl group hover:bg-slate-800/60">
<div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="trending-up"></i>
</div>
<h3 className="text-xl font-bold text-white mb-3">
                  Outcome Focused
                </h3>
<p className="text-slate-400 leading-relaxed text-sm">
                  Care is a journey. We measure success by the tangible progress
                  our people make—whether that's cooking or college.
                </p>
</div>

<div className="glass-card p-8 rounded-2xl group hover:bg-slate-800/60">
<div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<h3 className="text-xl font-bold text-white mb-3">Partnership</h3>
<p className="text-slate-400 leading-relaxed text-sm">
                  We work transparently with local authorities, families, and
                  health professionals. Open communication is key.
                </p>
</div>

<div className="glass-card p-8 rounded-2xl group hover:bg-slate-800/60">
<div className="w-12 h-12 bg-rose-500/10 rounded-lg flex items-center justify-center text-rose-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="star"></i>
</div>
<h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
<p className="text-slate-400 leading-relaxed text-sm">
                  We aim to exceed the standards set by Ofsted and CQC. We
                  invest in staff training and quality assurance.
                </p>
</div>

<div className="glass-card p-8 rounded-2xl group hover:bg-slate-800/60">
<div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="sun"></i>
</div>
<h3 className="text-xl font-bold text-white mb-3">
                  Respect &amp; Dignity
                </h3>
<p className="text-slate-400 leading-relaxed text-sm">
                  We treat everyone with unwavering respect. We champion the
                  rights of those we support and celebrate diversity.
                </p>
</div>
</div>
</div>
</section>
</div>

<div className="page-view hidden fade-enter" id="page-quality">

<section className="py-20 px-6 bg-slate-950 border-b border-white/5 relative">
<div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<span className="text-purple-400 font-bold tracking-widest text-xs uppercase mb-4 block">
              Our Standard
            </span>
<h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Uncompromising Quality
            </h1>
<p className="text-xl text-slate-400 leading-relaxed">
              Quality isn't just a box we tick. It is the foundation of trust
              between us, the families we serve, and our regulators. We operate
              under a rigorous internal governance framework.
            </p>
</div>
</section>

<section className="py-24 px-6 bg-slate-900">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12 mb-20">

<div className="glass-card-bright p-10 rounded-3xl relative overflow-hidden group border-purple-500/20 hover:border-purple-500/50 transition-colors">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
<i className="w-48 h-48 text-purple-500" data-lucide="check-circle"></i>
</div>
<div className="relative z-10">
<div className="flex items-center gap-4 mb-8">
<div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center text-purple-400 border border-purple-500/20">
<i className="w-8 h-8" data-lucide="book-open"></i>
</div>
<div>
<h3 className="text-2xl font-bold text-white">
                        Ofsted Regulated
                      </h3>
<div className="text-purple-400 font-medium text-sm">
                        Social Care Common Inspection Framework (SCCIF)
                      </div>
</div>
</div>
<p className="text-slate-300 mb-8 leading-relaxed">
                    Our children's homes and 16+ supported accommodation are
                    inspected regularly. We focus on the progress and experience
                    of children and young people.
                  </p>
<div className="bg-slate-950/50 rounded-xl p-6 border border-white/5 backdrop-blur-sm">
<h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
                      Key Compliance Areas
                    </h4>
<div className="grid sm:grid-cols-2 gap-4">
<div className="flex items-center gap-3 text-sm text-slate-400">
<i className="text-purple-500 w-4 h-4" data-lucide="check-circle-2"></i>
                        Regulation 44 Visits
                      </div>
<div className="flex items-center gap-3 text-sm text-slate-400">
<i className="text-purple-500 w-4 h-4" data-lucide="check-circle-2"></i>
                        Location Risk Assessments
                      </div>
<div className="flex items-center gap-3 text-sm text-slate-400">
<i className="text-purple-500 w-4 h-4" data-lucide="check-circle-2"></i>
                        Workforce Development
                      </div>
<div className="flex items-center gap-3 text-sm text-slate-400">
<i className="text-purple-500 w-4 h-4" data-lucide="check-circle-2"></i>
                        Leadership &amp; Management
                      </div>
</div>
</div>
</div>
</div>

<div className="glass-card-bright p-10 rounded-3xl relative overflow-hidden group border-blue-500/20 hover:border-blue-500/50 transition-colors">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
<i className="w-48 h-48 text-blue-500" data-lucide="activity"></i>
</div>
<div className="relative z-10">
<div className="flex items-center gap-4 mb-8">
<div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 border border-blue-500/20">
<i className="w-8 h-8" data-lucide="shield"></i>
</div>
<div>
<h3 className="text-2xl font-bold text-white">
                        CQC Regulated
                      </h3>
<div className="text-blue-400 font-medium text-sm">
                        Fundamental Standards of Quality &amp; Safety
                      </div>
</div>
</div>
<p className="text-slate-300 mb-8 leading-relaxed">
                    Our adult services adhere to the five key questions asked by
                    the Care Quality Commission: Are we Safe, Effective, Caring,
                    Responsive, and Well-led?
                  </p>
<div className="bg-slate-950/50 rounded-xl p-6 border border-white/5 backdrop-blur-sm">
<h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
                      The 5 Key Questions
                    </h4>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-bold text-blue-400">
                        Safe
                      </span>
<span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-bold text-blue-400">
                        Effective
                      </span>
<span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-bold text-blue-400">
                        Caring
                      </span>
<span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-bold text-blue-400">
                        Responsive
                      </span>
<span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-bold text-blue-400">
                        Well-led
                      </span>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-white/5 pt-16">
<h2 className="text-3xl font-bold text-white mb-12 text-center">
                Internal Governance Cycle
              </h2>
<div className="grid md:grid-cols-4 gap-6">
<div className="p-6 rounded-2xl bg-slate-800/20 border border-white/5">
<span className="text-4xl font-bold text-white/10 mb-4 block">
                    01
                  </span>
<h4 className="text-white font-bold mb-2">Policy Review</h4>
<p className="text-slate-400 text-sm">
                    Annual review of all policies to align with latest
                    legislation.
                  </p>
</div>
<div className="p-6 rounded-2xl bg-slate-800/20 border border-white/5">
<span className="text-4xl font-bold text-white/10 mb-4 block">
                    02
                  </span>
<h4 className="text-white font-bold mb-2">Staff Training</h4>
<p className="text-slate-400 text-sm">
                    Ongoing CPD and mandatory training for all support workers.
                  </p>
</div>
<div className="p-6 rounded-2xl bg-slate-800/20 border border-white/5">
<span className="text-4xl font-bold text-white/10 mb-4 block">
                    03
                  </span>
<h4 className="text-white font-bold mb-2">Audit &amp; Check</h4>
<p className="text-slate-400 text-sm">
                    Monthly internal audits on medication, H&amp;S, and care
                    plans.
                  </p>
</div>
<div className="p-6 rounded-2xl bg-slate-800/20 border border-white/5">
<span className="text-4xl font-bold text-white/10 mb-4 block">
                    04
                  </span>
<h4 className="text-white font-bold mb-2">Feedback Loop</h4>
<p className="text-slate-400 text-sm">
                    Surveys from families and residents drive improvements.
                  </p>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-view hidden fade-enter" id="page-careers">

<section className="py-24 px-6 relative overflow-hidden">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-900/10 to-transparent -z-10"></div>
<div className="max-w-7xl mx-auto text-center">
<span className="text-brand-400 font-bold tracking-widest text-xs uppercase mb-4 block">
              Careers at Dwell-In
            </span>
<h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Do something that matters.
            </h1>
<p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
              Join a team of passionate individuals dedicated to changing lives.
              We offer industry-leading training, clear career progression, and
              a supportive family culture.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="px-8 py-3 bg-white text-slate-950 font-bold rounded-full hover:bg-slate-200 transition-colors hover:scale-105" href="#vacancies">
                View Vacancies
              </a>
<a className="px-8 py-3 bg-slate-800 text-white font-medium rounded-full hover:bg-slate-700 transition-colors border border-slate-700 hover:border-slate-500" href="#benefits">
                Why Join Us?
              </a>
</div>
</div>
</section>

<section className="py-20 px-6 bg-slate-900/50" id="benefits">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-bold text-white mb-12 text-center">
              Benefits &amp; Culture
            </h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="glass-card p-8 rounded-2xl group hover:border-brand-500/50">
<div className="w-12 h-12 bg-brand-500/20 rounded-xl flex items-center justify-center text-brand-400 mb-6">
<i className="w-6 h-6" data-lucide="graduation-cap"></i>
</div>
<h3 className="text-xl font-bold text-white mb-3">
                  Funded Qualifications
                </h3>
<p className="text-slate-400 text-sm leading-relaxed">
                  We invest in you. We fully fund NVQ Level 3, 4, and 5
                  qualifications, helping you progress from Support Worker to
                  Management.
                </p>
</div>
<div className="glass-card p-8 rounded-2xl group hover:border-emerald-500/50">
<div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 mb-6">
<i className="w-6 h-6" data-lucide="clock"></i>
</div>
<h3 className="text-xl font-bold text-white mb-3">
                  Flexible Balance
                </h3>
<p className="text-slate-400 text-sm leading-relaxed">
                  We offer a variety of shift patterns including long days, wake
                  nights, and flexible contracts to support your work-life
                  balance.
                </p>
</div>
<div className="glass-card p-8 rounded-2xl group hover:border-amber-500/50">
<div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-400 mb-6">
<i className="w-6 h-6" data-lucide="pound-sterling"></i>
</div>
<h3 className="text-xl font-bold text-white mb-3">
                  Competitive Pay
                </h3>
<p className="text-slate-400 text-sm leading-relaxed">
                  We offer competitive hourly rates, regular pay reviews,
                  overtime enhancements, and a 'Recommend a Friend' bonus
                  scheme.
                </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-5xl mx-auto" id="vacancies">
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-3xl font-bold text-white">
                Current Opportunities
              </h2>
<p className="text-slate-400 mt-2">
                Find your next role with Dwell-In.
              </p>
</div>
</div>
<div className="space-y-4">

<div className="group relative bg-slate-900 border border-white/5 hover:border-brand-500/30 rounded-xl p-6 transition-all duration-300 hover:bg-slate-800">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-brand-500/10 text-brand-400 border border-brand-500/20">
                      Corby
                    </span>
<span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-700 text-slate-300">
                      Permanent
                    </span>
</div>
<h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">
                    Residential Support Worker
                  </h3>
<p className="text-slate-400 text-sm mt-1 max-w-xl">
                    Supporting children and young people with Emotional and
                    Behavioural Difficulties (EBD) in a residential setting.
                  </p>
<div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
<span className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="clock"></i>
                      Full Time
                    </span>
<span className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="wallet"></i>
                      £23k - £26k OTE
                    </span>
</div>
</div>
<div className="flex items-center gap-4">
<button className="px-6 py-2.5 bg-white text-slate-950 text-sm font-bold rounded-lg hover:bg-brand-400 transition-colors" onclick="navigateTo('contact')">
                    Apply Now
                  </button>
</div>
</div>
</div>

<div className="group relative bg-slate-900 border border-white/5 hover:border-brand-500/30 rounded-xl p-6 transition-all duration-300 hover:bg-slate-800">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-brand-500/10 text-brand-400 border border-brand-500/20">
                      Northampton
                    </span>
<span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-700 text-slate-300">
                      Permanent
                    </span>
</div>
<h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">
                    Team Leader (Supported Living)
                  </h3>
<p className="text-slate-400 text-sm mt-1 max-w-xl">
                    Lead a team of support workers, managing rotas and ensuring
                    high-quality care delivery.
                  </p>
<div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
<span className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="clock"></i>
                      Full Time
                    </span>
<span className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="wallet"></i>
                      £27k - £30k
                    </span>
</div>
</div>
<div className="flex items-center gap-4">
<button className="px-6 py-2.5 bg-white text-slate-950 text-sm font-bold rounded-lg hover:bg-brand-400 transition-colors" onclick="navigateTo('contact')">
                    Apply Now
                  </button>
</div>
</div>
</div>

<div className="group relative bg-slate-900 border border-white/5 hover:border-brand-500/30 rounded-xl p-6 transition-all duration-300 hover:bg-slate-800">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-brand-500/10 text-brand-400 border border-brand-500/20">
                      Kettering
                    </span>
<span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-700 text-slate-300">
                      Bank
                    </span>
</div>
<h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">
                    Waking Night Support Worker
                  </h3>
<p className="text-slate-400 text-sm mt-1 max-w-xl">
                    Provide overnight support and security for young people in
                    our supported accommodation.
                  </p>
<div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
<span className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="clock"></i>
                      Bank / Casual
                    </span>
<span className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="wallet"></i>
                      £12.50 / hr
                    </span>
</div>
</div>
<div className="flex items-center gap-4">
<button className="px-6 py-2.5 bg-white text-slate-950 text-sm font-bold rounded-lg hover:bg-brand-400 transition-colors" onclick="navigateTo('contact')">
                    Apply Now
                  </button>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-view hidden fade-enter" id="page-news">
<section className="py-24 max-w-7xl mx-auto px-6">

<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 border-b border-white/5 pb-8">
<div>
<span className="text-brand-400 font-bold tracking-widest text-xs uppercase mb-2 block">
                Our Blog
              </span>
<h1 className="text-4xl font-bold text-white mb-2">
                News &amp; Updates
              </h1>
<p className="text-slate-400">
                Latest stories, regulatory updates, and community events from
                Dwell-In.
              </p>
</div>
<div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
<button className="px-4 py-2 bg-brand-600 text-white text-sm rounded-lg font-medium shadow-lg shadow-brand-500/20 whitespace-nowrap">
                All Posts
              </button>
<button className="px-4 py-2 bg-slate-800 text-slate-300 text-sm rounded-lg hover:bg-slate-700 font-medium transition-colors whitespace-nowrap border border-slate-700">
                Company News
              </button>
<button className="px-4 py-2 bg-slate-800 text-slate-300 text-sm rounded-lg hover:bg-slate-700 font-medium transition-colors whitespace-nowrap border border-slate-700">
                Regulatory
              </button>
<button className="px-4 py-2 bg-slate-800 text-slate-300 text-sm rounded-lg hover:bg-slate-700 font-medium transition-colors whitespace-nowrap border border-slate-700">
                Events
              </button>
</div>
</div>

<div className="glass-card p-0 rounded-2xl overflow-hidden mb-16 group cursor-pointer hover:border-brand-500/50 transition-colors">
<div className="grid md:grid-cols-2">
<div className="h-64 md:h-auto bg-slate-800 relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1516733968668-dbdce39c4651?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/20"></div>
</div>
<div className="p-8 md:p-12 flex flex-col justify-center bg-slate-900/50">
<div className="flex items-center gap-3 mb-4">
<span className="px-3 py-1 bg-brand-500/20 text-brand-400 text-xs font-bold uppercase rounded-full border border-brand-500/20">
                    New Opening
                  </span>
<span className="text-slate-500 text-xs font-medium flex items-center gap-1">
<i className="w-3 h-3" data-lucide="calendar"></i>
                    Oct 12, 2023
                  </span>
</div>
<h2 className="text-3xl font-bold text-white mb-4 leading-tight group-hover:text-brand-400 transition-colors">
                  Expanding Our Care: Pevrel House Welcomes Its First Resident
                </h2>
<p className="text-slate-400 mb-8 line-clamp-3 leading-relaxed">
                  We are delighted to announce that Pevrel House in Desborough
                  is officially open. This new solo placement home provides a
                  bespoke environment for children with complex needs, featuring
                  sensory rooms and large outdoor spaces.
                </p>
<span className="text-white font-bold text-sm flex items-center gap-2 group-hover:text-brand-400 transition-colors">
                  Read Full Story
                  <i className="w-4 h-4" data-lucide="arrow-right"></i>
</span>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="glass-card p-6 rounded-2xl flex flex-col h-full group cursor-pointer hover:bg-slate-800/40 transition-colors hover:-translate-y-1">
<div className="h-48 rounded-xl bg-slate-800 mb-6 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur px-2.5 py-1 rounded-md text-xs font-bold text-green-400 uppercase border border-white/10">
                  Training
                </div>
</div>
<div className="flex-1">
<h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors leading-tight">
                  Staff Achieve NVQ Level 3 Excellence
                </h3>
<p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  Congratulations to our latest cohort of Residential Support
                  Workers who have successfully completed their Level 3 Diploma
                  in Residential Childcare.
                </p>
</div>
<div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-xs text-slate-500">
<span>Sep 28, 2023</span>
<span className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="clock"></i>
                  3 min read
                </span>
</div>
</div>

<div className="glass-card p-6 rounded-2xl flex flex-col h-full group cursor-pointer hover:bg-slate-800/40 transition-colors hover:-translate-y-1">
<div className="h-48 rounded-xl bg-slate-800 mb-6 overflow-hidden relative border border-white/5">
<div className="w-full h-full flex items-center justify-center bg-indigo-900/20">
<i className="w-12 h-12 text-indigo-400" data-lucide="award"></i>
</div>
<div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur px-2.5 py-1 rounded-md text-xs font-bold text-indigo-400 uppercase border border-white/10">
                  Regulatory
                </div>
</div>
<div className="flex-1">
<h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors leading-tight">
                  Ofsted Inspection Success at Stratford
                </h3>
<p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  Our Stratford House location has retained its 'Good' rating
                  following a recent unannounced interim inspection. Read the
                  full inspector's report.
                </p>
</div>
<div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-xs text-slate-500">
<span>Aug 15, 2023</span>
<span className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="clock"></i>
                  2 min read
                </span>
</div>
</div>

<div className="glass-card p-6 rounded-2xl flex flex-col h-full group cursor-pointer hover:bg-slate-800/40 transition-colors hover:-translate-y-1">
<div className="h-48 rounded-xl bg-slate-800 mb-6 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur px-2.5 py-1 rounded-md text-xs font-bold text-pink-400 uppercase border border-white/10">
                  Community
                </div>
</div>
<div className="flex-1">
<h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors leading-tight">
                  Summer Charity Fun Day
                </h3>
<p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  We raised over £500 for local charities at our annual summer
                  BBQ. A huge thank you to the staff and families who attended.
                </p>
</div>
<div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-xs text-slate-500">
<span>Jul 02, 2023</span>
<span className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="clock"></i>
                  1 min read
                </span>
</div>
</div>
</div>
</section>
</div>

<div className="page-view hidden fade-enter" id="page-contact">
<section className="py-24 max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<h1 className="text-4xl font-bold text-white mb-8">Get in Touch</h1>
<p className="text-slate-400 mb-10">
                We’d love to hear from you. You can write to us, phone or email
                us using the contact details below.
              </p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-brand-400 shrink-0 border border-slate-700">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<div>
<h3 className="text-white font-bold">Head Office</h3>
<p className="text-slate-400 text-sm">
                      Dwell-In Social Care, 3 Canberra House, Corby, NN17 5JG
                    </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-brand-400 shrink-0 border border-slate-700">
<i className="w-5 h-5" data-lucide="phone"></i>
</div>
<div>
<h3 className="text-white font-bold">Phone</h3>
<p className="text-slate-400">01506 260400</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-red-900/30 rounded-full flex items-center justify-center text-red-400 shrink-0 border border-red-900/50">
<i className="w-5 h-5" data-lucide="alert-circle"></i>
</div>
<div>
<h3 className="text-white font-bold">Emergency</h3>
<p className="text-slate-400 text-sm">
                      If you are worried about the immediate safety of a child
                      or adult, please call 999.
                    </p>
</div>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-2xl border-t-4 border-t-brand-500">
<h3 className="text-2xl font-bold text-white mb-6">
                Send us a message
              </h3>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-slate-400 text-xs font-bold uppercase mb-2">
                      First Name *
                    </label>
<input className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-brand-500 focus:outline-none transition-colors" type="text"/>
</div>
<div>
<label className="block text-slate-400 text-xs font-bold uppercase mb-2">
                      Last Name *
                    </label>
<input className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-brand-500 focus:outline-none transition-colors" type="text"/>
</div>
</div>
<div>
<label className="block text-slate-400 text-xs font-bold uppercase mb-2">
                    Email Address *
                  </label>
<input className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-brand-500 focus:outline-none transition-colors" type="email"/>
</div>
<div>
<label className="block text-slate-400 text-xs font-bold uppercase mb-2">
                    Message *
                  </label>
<textarea className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-brand-500 focus:outline-none transition-colors" rows="4"></textarea>
</div>
<button className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-brand-500/20 hover:scale-105 active:scale-95">
                  Send Message
                </button>
</form>
</div>
</div>
</section>
</div>

<div className="page-view hidden fade-enter" id="page-stratford">
<section className="relative pt-32 pb-20 overflow-hidden">
<div className="absolute inset-0 bg-hero-glow -z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<button className="group flex items-center gap-2 text-cyan-400 font-bold text-sm mb-8 hover:text-cyan-300 transition-colors" onclick="navigateTo('services')">
<div className="p-1 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/20 border border-cyan-500/20">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
</div>
              Back to Services
            </button>
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase border border-green-500/20 flex items-center gap-1">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
                    Rated Good
                  </span>
<span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold uppercase border border-cyan-500/20">
                    Ages 8-17
                  </span>
<span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-bold uppercase border border-white/10">
                    Mixed Gender
                  </span>
</div>
<h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Stratford House
                  <span className="block text-slate-500 text-2xl mt-2 font-medium">
                    Therapeutic EBD Home
                  </span>
</h1>
<p className="text-lg text-slate-400 mb-8 leading-relaxed border-l-2 border-cyan-500 pl-6">
                  A nurturing, therapeutic environment designed to support up to
                  three young people with Emotional and Behavioural Difficulties
                  (EBD). Stratford House offers stability, routine, and
                  professional care to help young people heal and thrive.
                </p>
<div className="flex flex-wrap gap-4">
<button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-full transition-all shadow-lg shadow-cyan-500/20" onclick="navigateTo('contact')">
                    Make a Referral
                  </button>
<button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-full border border-slate-700 transition-all">
                    Statement of Purpose
                  </button>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
<img className="relative rounded-2xl border border-white/10 shadow-2xl w-full object-cover h-96" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>
</section>
<section className="py-20 bg-slate-900 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">
<div className="glass-card p-8 rounded-2xl">
<div className="w-12 h-12 bg-cyan-900/50 rounded-lg flex items-center justify-center text-cyan-400 mb-6 border border-cyan-500/20">
<i className="w-6 h-6" data-lucide="home"></i>
</div>
<h3 className="text-xl font-bold text-white mb-3">Accommodation</h3>
<p className="text-slate-400 text-sm">
                  3 spacious bedrooms with en-suite options. Large communal
                  lounge, modern kitchen-diner, and a dedicated therapy/sensory
                  room.
                </p>
</div>
<div className="glass-card p-8 rounded-2xl">
<div className="w-12 h-12 bg-cyan-900/50 rounded-lg flex items-center justify-center text-cyan-400 mb-6 border border-cyan-500/20">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<h3 className="text-xl font-bold text-white mb-3">
                  Staffing Ratio
                </h3>
<p className="text-slate-400 text-sm">
                  High staffing ratios ensuring 24/7 support. Minimum 1:1
                  staffing during waking hours, with sleeping-in and waking
                  night staff.
                </p>
</div>
<div className="glass-card p-8 rounded-2xl">
<div className="w-12 h-12 bg-cyan-900/50 rounded-lg flex items-center justify-center text-cyan-400 mb-6 border border-cyan-500/20">
<i className="w-6 h-6" data-lucide="map-pin"></i>
</div>
<h3 className="text-xl font-bold text-white mb-3">Location</h3>
<p className="text-slate-400 text-sm">
                  Situated in a quiet residential area of Corby with excellent
                  transport links, local schools, and access to leisure
                  facilities.
                </p>
</div>
</div>
</div>
</section>
<section className="py-20 px-6 max-w-7xl mx-auto">
<div className="bg-slate-800/50 rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden">
<div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
<i className="w-64 h-64 text-white" data-lucide="quote"></i>
</div>
<div className="relative z-10">
<h2 className="text-2xl font-bold text-white mb-6">
                Manager's Vision
              </h2>
<div className="flex flex-col md:flex-row gap-8 items-start">
<div className="w-24 h-24 rounded-full bg-slate-700 flex-shrink-0 border-2 border-cyan-500/50 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div>
<p className="text-lg text-slate-300 italic mb-6">
                    "At Stratford House, we don't just provide a bed; we provide
                    a home. Our focus is on building trusting relationships that
                    allow young people to feel safe enough to explore their
                    potential. We celebrate every small victory."
                  </p>
<div className="font-bold text-white">Registered Manager</div>
<div className="text-cyan-400 text-sm">Stratford House</div>
</div>
</div>
</div>
</div>
</section>
</div>
<div className="page-view hidden fade-enter" id="page-pevrel">
<section className="relative pt-32 pb-20 overflow-hidden">
<div className="absolute inset-0 bg-hero-glow -z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<button className="group flex items-center gap-2 text-indigo-400 font-bold text-sm mb-8 hover:text-indigo-300 transition-colors" onclick="navigateTo('services')">
<div className="p-1 rounded-full bg-indigo-500/10 group-hover:bg-indigo-500/20 border border-indigo-500/20">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
</div>
              Back to Services
            </button>
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold uppercase border border-indigo-500/20 flex items-center gap-1">
<i className="w-3 h-3 fill-current" data-lucide="shield"></i>
                    Solo Placement
                  </span>
<span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-bold uppercase border border-white/10">
                    Ages 6-17
                  </span>
<span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-bold uppercase border border-white/10">
                    Complex Needs
                  </span>
</div>
<h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Pevrel House
                  <span className="block text-slate-500 text-2xl mt-2 font-medium">
                    Specialist Solo Home
                  </span>
</h1>
<p className="text-lg text-slate-400 mb-8 leading-relaxed border-l-2 border-indigo-500 pl-6">
                  A bespoke solo placement home designed for children and young
                  people who require high levels of supervision and 1:1 support.
                  Pevrel House offers a distraction-free environment tailored to
                  complex needs.
                </p>
<div className="flex flex-wrap gap-4">
<button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-all shadow-lg shadow-indigo-500/20" onclick="navigateTo('contact')">
                    Make a Referral
                  </button>
<button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-full border border-slate-700 transition-all">
                    Statement of Purpose
                  </button>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
<img className="relative rounded-2xl border border-white/10 shadow-2xl w-full object-cover h-96" src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>
</section>
<section className="py-20 bg-slate-900 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">
<div className="glass-card p-8 rounded-2xl">
<div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
<i className="w-6 h-6" data-lucide="home"></i>
</div>
<h3 className="text-xl font-bold text-white mb-3">
                  Solo Environment
                </h3>
<p className="text-slate-400 text-sm">
                  Dedicated entirely to one young person. This allows for a
                  completely tailored routine and environment without peer
                  dynamics.
                </p>
</div>
<div className="glass-card p-8 rounded-2xl">
<div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
<i className="w-6 h-6" data-lucide="heart-pulse"></i>
</div>
<h3 className="text-xl font-bold text-white mb-3">
                  Intensive Support
                </h3>
<p className="text-slate-400 text-sm">
                  2:1 staffing ratio as standard, with capability for 3:1 if
                  required. Staff are trained in specific complex needs and
                  de-escalation.
                </p>
</div>
<div className="glass-card p-8 rounded-2xl">
<div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-bold text-white mb-3">
                  Safety &amp; Security
                </h3>
<p className="text-slate-400 text-sm">
                  Located in Desborough, offering a balance of community
                  integration and safety. Secure garden and resilient fittings
                  throughout.
                </p>
</div>
</div>
</div>
</section>
<section className="py-20 px-6 max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-bold text-white mb-6">
                Why a Solo Placement?
              </h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold shrink-0">
                    1
                  </div>
<div>
<h4 className="text-white font-bold mb-1">Tailored Pace</h4>
<p className="text-slate-400 text-sm">
                      The entire home moves at the pace of the young person.
                      There is no competition for staff attention.
                    </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold shrink-0">
                    2
                  </div>
<div>
<h4 className="text-white font-bold mb-1">Risk Reduction</h4>
<p className="text-slate-400 text-sm">
                      Ideal for young people who may be vulnerable to
                      exploitation or pose risks to other children.
                    </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold shrink-0">
                    3
                  </div>
<div>
<h4 className="text-white font-bold mb-1">Therapeutic Focus</h4>
<p className="text-slate-400 text-sm">
                      Intensive therapeutic input can be delivered more
                      effectively in a calm, controlled environment.
                    </p>
</div>
</div>
</div>
</div>
<div className="glass-card p-2 rounded-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
<img className="rounded-xl w-full" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</section>
</div>

<div className="page-view hidden fade-enter" id="page-families">
<section className="py-24 max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-brand-400 font-bold tracking-widest text-xs uppercase mb-4 block">
              Information for Families
            </span>
<h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Partners in Care
            </h1>
<p className="text-xl text-slate-400">
              We understand that choosing care for a child, young person, or
              adult is one of the most important decisions you will make. We are
              here to guide you.
            </p>
</div>

<div className="grid md:grid-cols-3 gap-8 mb-20 relative">

<div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent z-0"></div>
<div className="relative z-10 text-center">
<div className="w-24 h-24 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-xl">
                1
              </div>
<h3 className="text-xl font-bold text-white mb-3">Referral</h3>
<p className="text-slate-400 text-sm px-4">
                Initial contact is made via Local Authority or family. We review
                the needs and compatibility of the individual.
              </p>
</div>
<div className="relative z-10 text-center">
<div className="w-24 h-24 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-xl">
                2
              </div>
<h3 className="text-xl font-bold text-white mb-3">Assessment</h3>
<p className="text-slate-400 text-sm px-4">
                Our manager visits to meet the individual and family. We build
                an impact risk assessment together.
              </p>
</div>
<div className="relative z-10 text-center">
<div className="w-24 h-24 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-xl">
                3
              </div>
<h3 className="text-xl font-bold text-white mb-3">Transition</h3>
<p className="text-slate-400 text-sm px-4">
                Planned visits and tea-time visits to get used to the home
                before the official move-in date.
              </p>
</div>
</div>

<div className="grid md:grid-cols-2 gap-8 mb-12">
<div className="glass-card p-10 rounded-2xl border-l-4 border-l-brand-500">
<h3 className="text-2xl font-bold text-white mb-4">
                Support for Families
              </h3>
<p className="text-slate-400 mb-6 leading-relaxed">
                We believe you are the expert on your loved one. We ensure you
                are:
              </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-300">
<i className="w-5 h-5 text-brand-500 mt-0.5" data-lucide="check-circle"></i>
<span>
                    Kept informed with weekly updates and monthly reports.
                  </span>
</li>
<li className="flex items-start gap-3 text-slate-300">
<i className="w-5 h-5 text-brand-500 mt-0.5" data-lucide="check-circle"></i>
<span>
                    Invited to attend all care planning meetings and reviews.
                  </span>
</li>
<li className="flex items-start gap-3 text-slate-300">
<i className="w-5 h-5 text-brand-500 mt-0.5" data-lucide="check-circle"></i>
<span>
                    Supported to visit and maintain contact (where appropriate).
                  </span>
</li>
</ul>
</div>
<div className="glass-card p-10 rounded-2xl border-l-4 border-l-purple-500">
<h3 className="text-2xl font-bold text-white mb-4">Our Promise</h3>
<p className="text-slate-400 mb-6 leading-relaxed">
                When your family member joins Dwell-In, we promise to:
              </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-300">
<i className="w-5 h-5 text-purple-500 mt-0.5" data-lucide="heart"></i>
<span>
                    Treat them with dignity, respect, and compassion at all
                    times.
                  </span>
</li>
<li className="flex items-start gap-3 text-slate-300">
<i className="w-5 h-5 text-purple-500 mt-0.5" data-lucide="shield"></i>
<span>
                    Keep them safe while encouraging reasonable risk-taking.
                  </span>
</li>
<li className="flex items-start gap-3 text-slate-300">
<i className="w-5 h-5 text-purple-500 mt-0.5" data-lucide="sun"></i>
<span>
                    Celebrate their achievements, no matter how small.
                  </span>
</li>
</ul>
</div>
</div>
<div className="text-center">
<p className="text-slate-500 mb-4">
              Have specific questions about funding or availability?
            </p>
<button className="text-white border-b border-brand-500 pb-0.5 hover:text-brand-400 transition-colors" onclick="navigateTo('contact')">
              Contact our Admissions Team
            </button>
</div>
</section>
</div>
</main>

<footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10 text-sm relative overflow-hidden">
<div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-indigo-600 flex items-center justify-center text-white">
<i className="w-4 h-4" data-lucide="heart-handshake"></i>
</div>
<span className="text-white font-bold text-lg">
                Dwell-In Social Care
              </span>
</div>
<p className="text-slate-500 mb-6 leading-relaxed">
              High-quality, compassionate care for children, young people and
              adults — regulated by Ofsted &amp; CQC.
            </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
</div>
</div>

<div>
<h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
<ul className="space-y-3 text-slate-500">
<li>
<button className="hover:text-brand-400 flex items-center gap-2 transition-colors" onclick="navigateTo('services')">
<i className="w-3 h-3" data-lucide="chevron-right"></i>
                  Services
                </button>
</li>
<li>
<button className="hover:text-brand-400 flex items-center gap-2 transition-colors" onclick="navigateTo('families')">
<i className="w-3 h-3" data-lucide="chevron-right"></i>
                  Families
                </button>
</li>
<li>
<button className="hover:text-brand-400 flex items-center gap-2 transition-colors" onclick="navigateTo('careers')">
<i className="w-3 h-3" data-lucide="chevron-right"></i>
                  Careers
                </button>
</li>
<li>
<button className="hover:text-brand-400 flex items-center gap-2 transition-colors" onclick="navigateTo('quality')">
<i className="w-3 h-3" data-lucide="chevron-right"></i>
                  Compliance
                </button>
</li>
<li>
<button className="hover:text-brand-400 flex items-center gap-2 transition-colors" onclick="navigateTo('contact')">
<i className="w-3 h-3" data-lucide="chevron-right"></i>
                  Contact
                </button>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
<ul className="space-y-4 text-slate-500">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" data-lucide="map-pin"></i>
<span>
                  3 Canberra House, Corby Gate Business Park, NN17 5JG
                </span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-brand-500 shrink-0" data-lucide="phone"></i>
<span>01506 260400</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-brand-500 shrink-0" data-lucide="mail"></i>
<span>info@dwellinsocialcare.co.uk</span>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-bold mb-6 text-lg">Stay Updated</h4>
<p className="text-slate-500 mb-4">
              Subscribe to our newsletter for the latest updates and regulatory
              news.
            </p>
<div className="relative">
<input className="w-full bg-slate-900 border border-slate-800 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="Enter your email" type="email"/>
<button className="absolute right-2 top-2 bg-brand-600 hover:bg-brand-500 text-white p-1.5 rounded-md transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>

<div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-slate-600 font-light text-xs flex flex-col md:flex-row gap-4">
<span>© 2024 Dwell-In Social Care Ltd.</span>
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Terms of Service</a>
</div>
<div className="flex gap-6 opacity-60">
<div className="flex items-center gap-2 font-bold text-slate-400 text-xs uppercase tracking-wider">
<div className="w-2 h-2 rounded-full bg-purple-500"></div>
              OFSTED
            </div>
<div className="flex items-center gap-2 font-bold text-slate-400 text-xs uppercase tracking-wider">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
              CQC
            </div>
</div>
</div>
</div>
</footer>


    </>
  );
}
