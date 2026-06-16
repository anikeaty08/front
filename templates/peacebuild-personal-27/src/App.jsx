import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Initialize Lucide icons
            lucide.createIcons();

            // Scroll Reveal Logic
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -50px 0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach((el) => {
                observer.observe(el);
            });
            
            // Navbar blur effect
            const nav = document.querySelector('nav');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    nav.classList.add('shadow-sm');
                } else {
                    nav.classList.remove('shadow-sm');
                }
            });

            // Interactive Globe Scroll Logic
            const interactiveGlobe = document.getElementById('interactive-globe');
            if (interactiveGlobe) {
                window.addEventListener('scroll', () => {
                    const scrollY = window.scrollY;
                    // Apply rotation and slight parallax translation based on scroll position
                    interactiveGlobe.style.transform = `rotate(${scrollY * 0.05}deg) translateY(${scrollY * -0.05}px) translateX(${scrollY * 0.02}px)`;
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed inset-0 overflow-hidden pointer-events-none -z-20">
<div className="absolute top-0 -left-48 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute top-0 -right-48 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-48 left-20 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
</div>
<nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-xl border-b border-white/20 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="font-medium tracking-tight text-xl text-slate-900 flex items-center gap-2.5 group cursor-pointer">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-900 to-slate-700 text-white flex items-center justify-center text-xs font-semibold shadow-sm group-hover:scale-105 transition-transform duration-300">DG</div>
                Amb. Dauda Gidado
            </div>
<div className="hidden md:flex gap-8 text-base text-slate-500 font-medium">
<a className="hover:text-slate-900 transition-colors" href="#strategic">Capabilities</a>
<a className="hover:text-slate-900 transition-colors" href="#about">My Story</a>
<a className="hover:text-slate-900 transition-colors" href="#expertise">Expertise</a>
<a className="hover:text-slate-900 transition-colors" href="#impact">Global Impact</a>
</div>
<a className="bg-slate-900 text-white px-5 py-2.5 text-base rounded-full hover:bg-slate-800 transition-all font-medium shadow-[0_2px_10px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_15px_rgba(0,0,0,0.15)] active:scale-95 flex items-center gap-2" href="https://calendly.com/agdauda/60min" target="_blank">
                Book Consultation
            </a>
</div>
</nav>
<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative z-10 order-2 lg:order-1 reveal">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 text-sm font-medium mb-8 hover:shadow-md transition-shadow cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Global Peacebuilder &amp; Legal Professional
                </div>
<h1 className="text-4xl md:text-5xl lg:text-[4rem] font-semibold tracking-tight text-slate-900 leading-[1.05] mb-6">
                    Building peace, empowering youth, and driving sustainable development.
                </h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed max-w-xl font-normal">
                    Over the past decade, I have been working across continents to bridge policy with grassroots action in Africa and the world at large. I always knew I could make a change by taking action.
                </p>
<div className="mb-10 reveal delay-100">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Global Reach &amp; Presence</p>
<div className="flex -space-x-2.5">
<div className="w-11 h-11 rounded-full bg-white border-2 border-[#FAFAFA] flex items-center justify-center text-lg shadow-sm z-[8] animate-float hover:z-10 hover:scale-110 transition-transform cursor-pointer" style={{animationDelay: '0.1s'}}>🇳🇬</div>
<div className="w-11 h-11 rounded-full bg-white border-2 border-[#FAFAFA] flex items-center justify-center text-lg shadow-sm z-[7] animate-float hover:z-10 hover:scale-110 transition-transform cursor-pointer" style={{animationDelay: '0.3s'}}>🇿🇦</div>
<div className="w-11 h-11 rounded-full bg-white border-2 border-[#FAFAFA] flex items-center justify-center text-lg shadow-sm z-[6] animate-float hover:z-10 hover:scale-110 transition-transform cursor-pointer" style={{animationDelay: '0.5s'}}>🇪🇬</div>
<div className="w-11 h-11 rounded-full bg-white border-2 border-[#FAFAFA] flex items-center justify-center text-lg shadow-sm z-[5] animate-float hover:z-10 hover:scale-110 transition-transform cursor-pointer" style={{animationDelay: '0.7s'}}>🇰🇪</div>
<div className="w-11 h-11 rounded-full bg-white border-2 border-[#FAFAFA] flex items-center justify-center text-lg shadow-sm z-[4] animate-float hover:z-10 hover:scale-110 transition-transform cursor-pointer" style={{animationDelay: '0.9s'}}>🇦🇴</div>
<div className="w-11 h-11 rounded-full bg-white border-2 border-[#FAFAFA] flex items-center justify-center text-lg shadow-sm z-[3] animate-float hover:z-10 hover:scale-110 transition-transform cursor-pointer" style={{animationDelay: '1.1s'}}>🇧🇮</div>
<div className="w-11 h-11 rounded-full bg-white border-2 border-[#FAFAFA] flex items-center justify-center text-lg shadow-sm z-[2] animate-float hover:z-10 hover:scale-110 transition-transform cursor-pointer" style={{animationDelay: '1.3s'}}>🇹🇬</div>
<div className="w-11 h-11 rounded-full bg-white border-2 border-[#FAFAFA] flex items-center justify-center text-lg shadow-sm z-[1] animate-float hover:z-10 hover:scale-110 transition-transform cursor-pointer" style={{animationDelay: '1.5s'}}>🇨🇦</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center reveal delay-200">
<a className="px-8 py-3.5 bg-slate-900 text-white rounded-full font-medium text-base shadow-[0_4px_14px_0_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] hover:bg-slate-800 transition-all duration-300 flex items-center gap-2 group active:scale-95" href="https://calendly.com/agdauda/60min">
                        Book a Session
                        <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
<a className="px-8 py-3.5 text-slate-500 font-medium text-base hover:text-slate-900 transition-colors flex items-center gap-2 group" href="#about">
                        Read my story
                        <i className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" data-lucide="book"></i>
</a>
</div>
</div>
<div className="relative z-10 order-1 lg:order-2 flex justify-center lg:justify-end reveal delay-300">
<div className="relative w-full max-w-md aspect-[4/5] md:aspect-square hero-image-wrapper p-2 bg-gradient-to-tr from-slate-200/50 via-slate-100 to-amber-100/50 rounded-[3rem] shadow-2xl shadow-slate-200/50 rotate-[-2deg] hover:rotate-0 transition-transform duration-700 ease-out">
<div className="w-full h-full rounded-[2.5rem] overflow-hidden relative bg-white">
<img alt="Ambassador Dauda Abdurrazaq Gidado" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000 ease-out" src="https://media.licdn.com/dms/image/v2/D4E03AQFXff7WU3J1fA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720716122446?e=1772668800&amp;v=beta&amp;t=f6gieIdaYXf37CALH2h8rLhBWdcFHfa-2h0LXwMiXBk"/>
</div>
</div>
</div>
</div>
</header>

<section className="relative bg-[#050A14] py-32 md:py-48 px-6 overflow-hidden min-h-screen flex flex-col justify-center" id="strategic">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none"></div>

<div className="absolute top-1/2 right-0 md:right-[10%] -translate-y-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] z-0 pointer-events-none opacity-[0.35] mix-blend-lighten flex items-center justify-center">
<div className="w-full h-full rounded-full transition-transform duration-75 ease-out shadow-[inset_-50px_0_150px_rgba(0,0,0,1)] relative" id="interactive-globe">

<img alt="Global Reach" className="w-full h-full object-cover rounded-full sepia-[0.2] hue-rotate-[-10deg] saturate-50 contrast-[1.2]" src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&amp;w=1600&amp;auto=format&amp;fit=crop" style={{maskImage: 'radial-gradient(circle at center, black 65%, transparent 100%)', WebkitMaskImage: 'radial-gradient(circle at center, black 65%, transparent 100%)'}}/>

<div className="absolute inset-0 rounded-full shadow-[0_0_100px_rgba(245,158,11,0.1)] pointer-events-none mix-blend-screen"></div>
</div>
</div>
<div className="max-w-7xl mx-auto relative z-10 w-full">
<div className="max-w-4xl mb-32 reveal">
<h2 className="text-6xl md:text-[8rem] font-semibold tracking-tighter text-white leading-[0.9] mb-12">
                    Strategic<br/>
<span className="text-amber-500">Capabilities.</span>
</h2>
<div className="relative pl-8 md:pl-10 before:absolute before:inset-y-2 before:left-0 before:w-[2px] before:bg-slate-800 max-w-2xl">
<p className="text-slate-400 text-xl md:text-2xl font-normal leading-relaxed">
                        An integrated suite of intelligence tools designed for the modern statecraft. Monitor, analyze, and predict outcomes with military-grade precision.
                    </p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 pt-16 border-t border-slate-800/60 reveal delay-200">
<div>
<div className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">12ms</div>
<div className="text-xs md:text-sm text-slate-500 tracking-widest uppercase font-semibold">Latency</div>
</div>
<div>
<div className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">AES-256</div>
<div className="text-xs md:text-sm text-slate-500 tracking-widest uppercase font-semibold">Encryption</div>
</div>
<div>
<div className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">140+</div>
<div className="text-xs md:text-sm text-slate-500 tracking-widest uppercase font-semibold">Data Sources</div>
</div>
<div>
<div className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">99.9%</div>
<div className="text-xs md:text-sm text-slate-500 tracking-widest uppercase font-semibold">Uptime</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white relative" id="about">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-10 reveal">My Story</h2>
<div className="space-y-8 text-lg md:text-xl text-slate-500 leading-relaxed font-normal relative before:absolute before:inset-y-2 before:-left-8 before:w-0.5 before:bg-gradient-to-b before:from-amber-200 before:to-slate-100 before:rounded-full hidden sm:block">
</div>
<div className="space-y-8 text-lg md:text-xl text-slate-500 leading-relaxed font-normal sm:ml-6">
<p className="reveal">
                    I am a globally respected peacebuilder, youth leader, and legal professional, currently serving as Co-Chair of the Peacebuilding &amp; Mediation Council at the International Forum for Peace &amp; Diplomacy (IFPD). In this strategic leadership role, I am at the forefront of advancing dialogue, mediation, and conflict-prevention frameworks, shaping inclusive approaches to peace and diplomacy across regions.
                </p>
<p className="reveal">
                    I also serve as Global Chair of Carifika, where I provide visionary leadership to a growing network of young changemakers committed to governance reform, peacebuilding, and sustainable development. Through this platform, I continue to amplify youth voices and bridge policy with grassroots action.
                </p>
<p className="reveal">
                    Academically distinguished, I graduated with honors and multiple awards from the University of Ilorin, earning a Bachelor of Laws (LL.B.) degree. I am currently pursuing a Master of Laws (LL.M.), further strengthening my expertise in international law, diplomacy, and global policy frameworks.
                </p>
<p className="reveal">
                    A passionate and credible advocate for youth empowerment, I represent and collaborate with leading continental and global initiatives, including the African Union Commission, Theirworld, and Global Ambassadors for Sustainability. My work focuses on the critical intersections of peacebuilding, human rights, education, and sustainable development.
                </p>
</div>
<div className="mt-12 pt-10 border-t border-slate-100 flex items-center gap-4 reveal">
<span className="text-base font-medium text-slate-900">Connect professionally:</span>
<a className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border border-slate-200 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1" href="https://www.linkedin.com/in/dauda-abdurrazaq-gidado-942505197" target="_blank">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-slate-50 relative overflow-hidden" id="expertise">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNFMEUyRThBOCIvPjwvc3ZnPg==')] opacity-50"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="mb-16 max-w-2xl reveal">
<span className="text-amber-500 text-xs font-semibold tracking-widest uppercase block mb-4">My Services</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">Core Expertise.</h2>
<p className="text-slate-500 text-lg md:text-xl font-normal">Leveraging years of hands-on leadership, legal frameworks, and global diplomacy to deliver impactful results.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden reveal">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-5 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
<i className="w-32 h-32 text-slate-900" data-lucide="scale"></i>
</div>
<div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 shadow-sm">
<i className="w-6 h-6" data-lucide="scale"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Mediation &amp; Arbitration</h3>
<p className="text-slate-500 text-base leading-relaxed font-normal">
                        Active member of ICC, CIArb, and ICMC. Championing fairness, consensus-building, and peaceful resolution in complex environments.
                    </p>
</div>

<div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden reveal delay-100">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-5 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
<i className="w-32 h-32 text-slate-900" data-lucide="users"></i>
</div>
<div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 shadow-sm">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Youth Empowerment</h3>
<p className="text-slate-500 text-base leading-relaxed font-normal">
                        Providing visionary leadership as Global Chair of Carifika and representing youth voices as an African Union Youth Ambassador for Peace.
                    </p>
</div>

<div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden reveal delay-200">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-5 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
<i className="w-32 h-32 text-slate-900" data-lucide="bookmark"></i>
</div>
<div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 shadow-sm">
<i className="w-6 h-6" data-lucide="bookmark"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">International Law</h3>
<p className="text-slate-500 text-base leading-relaxed font-normal">
                        Providing legal opinions on compliance, drafting agreements, and exploring intersections of human rights, peacebuilding, and regional integration.
                    </p>
</div>

<div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden reveal">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-5 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
<i className="w-32 h-32 text-slate-900" data-lucide="globe"></i>
</div>
<div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 shadow-sm">
<i className="w-6 h-6" data-lucide="globe"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Peacebuilding &amp; Diplomacy</h3>
<p className="text-slate-500 text-base leading-relaxed font-normal">
                        Co-Chair of the Peacebuilding &amp; Mediation Council at IFPD. Advancing conflict-prevention frameworks and shaping inclusive approaches.
                    </p>
</div>

<div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden reveal delay-100">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-5 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
<i className="w-32 h-32 text-slate-900" data-lucide="leaf"></i>
</div>
<div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 shadow-sm">
<i className="w-6 h-6" data-lucide="leaf"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Sustainable Development</h3>
<p className="text-slate-500 text-base leading-relaxed font-normal">
                        Certified Sustainability Officer. Consulting to gather industry insights and build partnerships with NGOs to drive sustainable growth.
                    </p>
</div>

<div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 flex flex-col justify-center items-start text-white shadow-xl relative overflow-hidden reveal delay-200 group">
<div className="absolute -top-24 -right-24 w-48 h-48 bg-slate-800 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight relative z-10">Need expert advisory?</h3>
<p className="text-slate-400 text-base mb-8 leading-relaxed font-normal relative z-10">Book a dedicated session to discuss strategies, policy formulation, or speaking engagements.</p>
<a className="bg-white text-slate-900 px-6 py-3.5 rounded-full text-base font-medium hover:bg-slate-100 transition-colors flex items-center gap-2 relative z-10 active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.1)]" href="https://calendly.com/agdauda/60min">
                        Schedule a Call
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-white relative" id="impact">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="max-w-4xl mx-auto">
<div className="text-center mb-20 reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">A Decade of Global Impact</h2>
<p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-normal">Speaking engagements and high-level participation driving policy change and peace education across continents.</p>
</div>
<div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 group-hover:bg-slate-900 group-hover:text-white text-slate-400 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-300 z-10">
<i className="w-4 h-4" data-lucide="map-pin"></i>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 gap-2">
<span className="text-slate-400 font-semibold text-xs tracking-widest uppercase">Togo • 2025</span>
</div>
<h3 className="font-semibold text-slate-900 text-lg tracking-tight mb-2">Inaugural AU Conference on Debt</h3>
<p className="text-slate-500 text-base leading-relaxed font-normal">Part of the African Union Commission delegation convened under Faure Gnassingbé, culminating in the adoption of the Lomé Declaration on Africa's Debt.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 group-hover:bg-slate-900 group-hover:text-white text-slate-400 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-300 z-10">
<i className="w-4 h-4" data-lucide="banknote"></i>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 gap-2">
<span className="text-slate-400 font-semibold text-xs tracking-widest uppercase">South Africa • 2025</span>
</div>
<h3 className="font-semibold text-slate-900 text-lg tracking-tight mb-2">African Union Specialized Technical Committee</h3>
<p className="text-slate-500 text-base leading-relaxed font-normal">Member of the committee on Finance, Monetary Affairs, Economic Planning and Integration.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 group-hover:bg-slate-900 group-hover:text-white text-slate-400 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-300 z-10">
<i className="w-4 h-4" data-lucide="mic"></i>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 gap-2">
<span className="text-slate-400 font-semibold text-xs tracking-widest uppercase">Egypt • 2024</span>
</div>
<h3 className="font-semibold text-slate-900 text-lg tracking-tight mb-2">Aswan Forum for Sustainable Peace</h3>
<p className="text-slate-500 text-base leading-relaxed font-normal">Delivered a compelling address titled "Building Peace through Education: African Youth Perspectives," reinforcing education in conflict prevention.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 group-hover:bg-slate-900 group-hover:text-white text-slate-400 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-300 z-10">
<i className="w-4 h-4" data-lucide="building"></i>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 gap-2">
<span className="text-slate-400 font-semibold text-xs tracking-widest uppercase">Nairobi, Kenya • 2024</span>
</div>
<h3 className="font-semibold text-slate-900 text-lg tracking-tight mb-2">United Nations Office</h3>
<p className="text-slate-500 text-base leading-relaxed font-normal">Spoken at the UN Office highlighting the inseparable link between education, peace, and development.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-[#FAFAFA] relative" id="testimonials">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">Endorsements</h2>
<p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-normal">Words from esteemed colleagues, leaders, and peers in the global community.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">

<div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 reveal">
<i className="w-8 h-8 text-slate-200 mb-6 block" data-lucide="quote"></i>
<div className="text-base text-slate-500 leading-relaxed space-y-4 font-normal mb-8">
<p>Dauda is an exceptional leader with a sharp strategic mindset and a deep commitment to youth empowerment... His work with ECOWAS Youth Council showcases his dedication. I highly recommend him to any initiative seeking a visionary leader.</p>
</div>
<div className="flex items-center justify-between pt-6 border-t border-slate-50">
<div>
<h3 className="font-semibold text-slate-900 text-base tracking-tight mb-0.5">Simone Mbodé Diouf</h3>
<p className="text-xs text-slate-400 font-medium uppercase tracking-widest">AU Youth Ambassador</p>
</div>
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors" href="https://linkedin.com" target="_blank">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</a>
</div>
</div>

<div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 reveal delay-100">
<i className="w-8 h-8 text-slate-200 mb-6 block" data-lucide="quote"></i>
<div className="text-base text-slate-500 leading-relaxed space-y-4 font-normal mb-8">
<p>I admired his networking and social skills, his understanding of the YPS agenda and his passion towards serving the continent. I recommend him highly for any future professional endeavors and can assure his valuable contribution.</p>
</div>
<div className="flex items-center justify-between pt-6 border-t border-slate-50">
<div>
<h3 className="font-semibold text-slate-900 text-base tracking-tight mb-0.5">Khouloud Ben Mansour</h3>
<p className="text-xs text-slate-400 font-medium uppercase tracking-widest">Climate &amp; Women Security</p>
</div>
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors" href="https://linkedin.com" target="_blank">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</a>
</div>
</div>

<div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 reveal delay-200">
<i className="w-8 h-8 text-slate-200 mb-6 block" data-lucide="quote"></i>
<div className="text-base text-slate-500 leading-relaxed space-y-4 font-normal mb-8">
<p>Gidado is a kind gentleman. He is easy to get along with, and as I have observed, he is happy to bring others up as he rises. I have no doubt that he would do great things in Nigeria, Africa and beyond.</p>
</div>
<div className="flex items-center justify-between pt-6 border-t border-slate-50">
<div>
<h3 className="font-semibold text-slate-900 text-base tracking-tight mb-0.5">Omotayo Mary Dada</h3>
<p className="text-xs text-slate-400 font-medium uppercase tracking-widest">Public Policy Strategist</p>
</div>
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors" href="https://linkedin.com" target="_blank">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white relative overflow-hidden">
<div className="max-w-5xl mx-auto reveal">
<div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden group">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-white/10 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-6xl font-semibold tracking-tight text-white mb-6">Ready to Collaborate?</h2>
<p className="text-slate-400 mb-10 text-lg md:text-xl max-w-xl mx-auto font-normal">
                        Whether it's speaking engagements, policy consulting, or strategic advisory for youth development, let's connect.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto bg-white text-slate-900 px-8 py-4 rounded-full font-medium shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-300 flex justify-center items-center gap-2 active:scale-95 text-base" href="https://calendly.com/agdauda/60min">
<i className="w-5 h-5" data-lucide="calendar-plus"></i>
                            Book a Consultation
                        </a>
<a className="w-full sm:w-auto px-8 py-4 rounded-full border border-slate-700 bg-slate-800/50 text-white hover:bg-slate-800 hover:border-slate-600 transition-colors duration-300 flex justify-center items-center gap-2 font-medium backdrop-blur-sm text-base" href="https://www.linkedin.com/in/dauda-abdurrazaq-gidado-942505197" target="_blank">
<i className="w-5 h-5" data-lucide="linkedin"></i>
                            Connect on LinkedIn
                        </a>
</div>
</div>
</div>
</div>
</section>
<footer className="bg-white border-t border-slate-100 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-slate-900 font-medium text-base">
<div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-semibold">DG</div>
                Amb. Dauda Gidado
            </div>
<div className="text-base text-slate-500 font-normal">
                © 2024 Dauda Abdurrazaq Gidado. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
