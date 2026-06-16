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
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = `fadeSlideIn 1s ease-out ${entry.target.dataset.delay || '0s'} both`;
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('h2, .grid > div').forEach((el, index) => {
                el.classList.add('animate-on-scroll');
                el.dataset.delay = `${(index % 3) * 0.1}s`;
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-[#030303]">

<div className="absolute inset-0 z-0">
<img alt="Texture" className="w-full h-full object-cover opacity-10 mix-blend-luminosity animate-[zoom-fade_30s_ease-in-out_infinite]" src="https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&amp;w=2253&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/90 to-[#030303]/80"></div>
</div>
<div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120vw] h-[80vh] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05)_0%,_rgba(255,255,255,0)_60%)] animate-[subtle-pulse_8s_ease-in-out_infinite] pointer-events-none"></div>
<div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%221%22/%3E%3C/svg%3E\')'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
<iconify-icon className="text-black text-sm" icon="solar:yin-yang-linear"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tight text-white">
                    ZEN BJJ
                </span>
</div>
<div className="hidden md:flex gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Programs</a>
<a className="hover:text-white transition-colors" href="#">Schedule</a>
<a className="hover:text-white transition-colors" href="#">Methodology</a>
<a className="hover:text-white transition-colors" href="#">Instructors</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">
                    Member Login
                </a>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#">
                    Free Trial Class
                </a>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 min-h-[90vh] flex flex-col pt-32 pb-20 relative justify-center">
<div className="z-10 text-center max-w-4xl mx-auto px-6 relative">

<div className="flex justify-center mb-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm animate-reveal delay-0 hover:bg-white/10 transition-colors cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.4)]"></span>
<span className="text-xs font-medium text-neutral-300 tracking-tight">
                        Enrollment Open: Fall Cycle
                    </span>
</div>
</div>

<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
<span className="block">
<span className="animate-word delay-0">The</span>
<span className="animate-word delay-100">science</span>
<span className="animate-word delay-200">of</span>
</span>
<span className="block text-white/95">
<span className="animate-word delay-300">human</span>
<span className="animate-word delay-400">mechanics.</span>
</span>
</h1>

<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-reveal delay-400 font-light">
                Master the art of control through leverage and timing. 
                A high-performance environment for adults and kids to build confidence, discipline, and functional strength.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-reveal delay-600">
<button className="inline-flex hover:from-amber-200 hover:to-amber-300 text-sm font-medium text-black tracking-tight bg-gradient-to-b from-amber-300 to-amber-400 w-full max-w-xs rounded-xl py-3 shadow-[0_10px_30px_rgba(251,191,36,0.25)] items-center justify-center px-8 transition-all hover:scale-[1.02]">
                    Book Free Trial
                </button>
<button className="h-12 px-8 rounded-full border border-neutral-800 text-neutral-300 text-sm font-medium hover:border-neutral-600 hover:text-white transition-colors w-full sm:w-auto flex items-center justify-center gap-2 group backdrop-blur-sm bg-neutral-900/30">
                    View Schedule
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="max-w-6xl mx-auto px-6 mt-20 animate-dashboard-entry delay-900 relative z-10">
<div className="absolute inset-x-12 bottom-0 top-1/2 bg-neutral-900/80 blur-[60px] rounded-full pointer-events-none -z-10 translate-y-12"></div>
<div className="rounded-xl border border-white/10 bg-[#0A0A0A]/90 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_40px_-20px_rgba(0,0,0,0.8)] overflow-hidden relative">

<div className="flex gap-2 bg-neutral-900/50 h-10 border-white/5 border-b px-4 items-center">
<div className="w-3 h-3 rounded-full bg-neutral-800"></div>
<div className="w-3 h-3 rounded-full bg-neutral-800"></div>
<div className="w-3 h-3 rounded-full bg-neutral-800"></div>
<div className="ml-auto text-[10px] uppercase tracking-widest text-neutral-600 font-medium">Student Portal v1.4</div>
</div>

<div className="grid grid-cols-12 h-[500px]">

<div className="col-span-2 border-r border-white/5 p-4 flex flex-col gap-4 hidden md:flex">
<div className="space-y-1">
<div className="h-8 flex items-center gap-3 px-2 rounded-md bg-white/5 text-white text-xs">
<iconify-icon icon="solar:graph-up-linear" width="16"></iconify-icon>
                                Progress
                            </div>
<div className="h-8 flex items-center gap-3 px-2 rounded-md text-neutral-500 hover:text-white text-xs transition-colors">
<iconify-icon icon="solar:book-2-linear" width="16"></iconify-icon>
                                Curriculum
                            </div>
<div className="h-8 flex items-center gap-3 px-2 rounded-md text-neutral-500 hover:text-white text-xs transition-colors">
<iconify-icon icon="solar:calendar-linear" width="16"></iconify-icon>
                                Bookings
                            </div>
</div>
<div className="mt-auto">
<div className="h-px w-full bg-white/5 mb-4"></div>
<div className="flex items-center gap-2 px-2">

<img alt="Profile" className="w-6 h-6 rounded-full object-cover ring-1 ring-white/20" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-[10px] text-white font-medium">Alex Chen</div>
<div className="text-[9px] text-neutral-500">Blue Belt II</div>
</div>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-10 p-8">
<div className="flex justify-between items-end mb-8">
<div>
<h3 className="text-sm font-medium text-white">Technique Efficiency</h3>
<p className="text-xs text-neutral-500 mt-1">
                                    Sparring performance &amp; reaction metrics
                                </p>
</div>
<div className="flex gap-2">
<span className="text-xs text-neutral-500 px-3 py-1 border border-white/10 rounded-md">Week</span>
<span className="text-xs text-white bg-white/10 px-3 py-1 border border-white/10 rounded-md">Month</span>
</div>
</div>

<div className="h-64 border-b border-l border-white/5 relative mb-6 group">

<svg className="absolute inset-0 w-full h-full text-amber-400/20" preserveaspectratio="none" viewbox="0 0 100 50">
<defs>
<lineargradient id="gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#fbbf24" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="#fbbf24" stop-opacity="0"></stop>
</lineargradient>
</defs>
<polyline fill="none" points="0,45 10,40 20,42 30,30 40,35 50,15 60,20 70,10 80,12 90,5 100,2" stroke="#fbbf24" strokeWidth="0.5"></polyline>
<polygon fill="url(#gradient)" points="0,45 10,40 20,42 30,30 40,35 50,15 60,20 70,10 80,12 90,5 100,2 100,50 0,50"></polygon>
</svg>
<div className="absolute top-1/4 w-full h-px bg-white/5 border-dashed"></div>
<div className="absolute top-2/4 w-full h-px bg-white/5 border-dashed"></div>
<div className="absolute top-3/4 w-full h-px bg-white/5 border-dashed"></div>

<div className="absolute top-0 bottom-0 w-px bg-white/20 left-[80%]">
<div className="absolute top-[20%] left-0 w-2 h-2 bg-amber-400 rounded-full -translate-x-[3.5px] shadow-[0_0_10px_#fbbf24]"></div>
</div>
</div>
<div className="grid grid-cols-3 gap-6">
<div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
<div className="text-xs text-neutral-500 mb-2 flex items-center gap-1">
<iconify-icon icon="solar:stopwatch-linear"></iconify-icon> Reaction Time
                                </div>
<div className="text-xl text-white font-medium">0.4s</div>
</div>
<div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
<div className="text-xs text-neutral-500 mb-2 flex items-center gap-1">
<iconify-icon icon="solar:fire-linear"></iconify-icon> Mat Time
                                </div>
<div className="text-xl text-white font-medium">124h</div>
</div>
<div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
<div className="text-xs text-neutral-500 mb-2 flex items-center gap-1">
<iconify-icon icon="solar:checklist-minimalistic-linear"></iconify-icon> Drills Reps
                                </div>
<div className="text-xl text-white font-medium">2.4k</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-24 pb-24 relative">
<div className="text-center mb-12">
<p className="uppercase text-xs text-neutral-400 tracking-[0.18em] font-manrope mb-4">
                The Zen Method
            </p>
<h2 className="sm:text-5xl md:text-6xl text-4xl font-light text-white tracking-tight font-manrope mb-4">
                More than just a gym.
            </h2>
<p className="sm:text-lg text-base text-neutral-300 font-manrope max-w-2xl mx-auto">
                We blend traditional martial arts values with modern coaching methodologies.
            </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-10 gap-4 h-auto lg:h-[450px]">

<div className="relative overflow-hidden rounded-xl group cursor-pointer h-[350px] lg:h-full">
<img alt="Adults Training" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-70" src="https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-4 border border-white/10">
<iconify-icon icon="solar:user-id-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white text-lg font-medium mb-2">Adult Fundamentals</h3>
<p className="text-neutral-300 text-sm leading-relaxed opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        Core positional mechanics and survival strategies for beginners.
                    </p>
</div>
</div>

<div className="relative overflow-hidden rounded-xl group cursor-pointer h-[350px] lg:h-full">
<img alt="Kids Training" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-70" src="https://images.unsplash.com/photo-1616245362945-84f90959648c?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-4 border border-white/10">
<iconify-icon icon="solar:smile-circle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white text-lg font-medium mb-2">Youth Discipline</h3>
<p className="text-neutral-300 text-sm leading-relaxed opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        Bully-proof confidence and focus for ages 4-15.
                    </p>
</div>
</div>

<div className="relative overflow-hidden rounded-xl group cursor-pointer h-[350px] lg:h-full">
<img alt="Advanced Techniques" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-70" src="https://images.unsplash.com/photo-1544367563-12123d832d34?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-4 border border-white/10">
<iconify-icon icon="solar:graph-new-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white text-lg font-medium mb-2">Advanced Systems</h3>
<p className="text-neutral-300 text-sm leading-relaxed opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        Complex chains and modern meta for experienced grapplers.
                    </p>
</div>
</div>

<div className="relative overflow-hidden rounded-xl group cursor-pointer h-[350px] lg:h-full">
<img alt="Competition" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-70" src="https://images.unsplash.com/photo-1518619745898-93e765966dcd?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-4 border border-white/10">
<iconify-icon icon="solar:cup-star-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white text-lg font-medium mb-2">Competition Team</h3>
<p className="text-neutral-300 text-sm leading-relaxed opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        Intense preparation cycles for tournaments.
                    </p>
</div>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 mt-14 gap-8 border-t border-white/5 pt-12">
<div className="space-y-1">
<p className="text-4xl sm:text-5xl text-white tracking-tight font-manrope font-light">
                    250+
                </p>
<p className="text-sm text-neutral-200 font-manrope">Active Students</p>
<p className="text-xs text-neutral-400 font-manrope">Growing community</p>
</div>
<div className="space-y-1">
<p className="text-4xl sm:text-5xl text-white tracking-tight font-manrope font-light">
                    15+
                </p>
<p className="text-sm text-neutral-200 font-manrope">Black Belts</p>
<p className="text-xs text-neutral-400 font-manrope">Expert instruction</p>
</div>
<div className="space-y-1">
<p className="text-4xl sm:text-5xl text-white tracking-tight font-manrope font-light">
                    100%
                </p>
<p className="text-sm text-neutral-200 font-manrope">Ego Free</p>
<p className="text-xs text-neutral-400 font-manrope">Positive culture</p>
</div>
<div className="space-y-1">
<p className="text-4xl sm:text-5xl text-white tracking-tight font-manrope font-light">
                    6
                </p>
<p className="text-sm text-neutral-200 font-manrope">Days / Week</p>
<p className="text-xs text-neutral-400 font-manrope">Morning &amp; Evening</p>
</div>
</div>
</section>

<section className="bg-neutral-950/20 z-10 border-neutral-950/40 border-t pt-24 pb-24 relative overflow-hidden">
<div className="absolute inset-0 opacity-20 pointer-events-none">
<img alt="Background Texture" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#030303]/90"></div>
</div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<h2 className="text-2xl font-medium tracking-tight text-white mb-12">
                Core values ingrained in every class
            </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center opacity-70">
<div className="flex flex-col items-center gap-2 group cursor-default hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="solar:hand-shake-linear" width="32"></iconify-icon>
<span className="text-xs font-medium text-white mt-2">RESPECT</span>
</div>
<div className="flex flex-col items-center gap-2 group cursor-default hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="solar:running-linear" width="32"></iconify-icon>
<span className="text-xs font-medium text-white mt-2">PERSISTENCE</span>
</div>
<div className="flex flex-col items-center gap-2 group cursor-default hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
<span className="text-xs font-medium text-white mt-2">COMMUNITY</span>
</div>
<div className="flex flex-col items-center gap-2 group cursor-default hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="solar:shield-check-linear" width="32"></iconify-icon>
<span className="text-xs font-medium text-white mt-2">INTEGRITY</span>
</div>
</div>
</div>
</section>

<section className="z-10 pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-6">

<div className="p-8 rounded-xl bg-neutral-900/30 border border-white/5 backdrop-blur-sm">
<div className="mb-6 text-neutral-400">
<iconify-icon icon="solar:quote-up-linear" width="24"></iconify-icon>
</div>
<p className="text-base text-neutral-300 leading-relaxed mb-6">
                        "I've trained at academies all over the world. The technical detail at Zen is unmatched. The logic behind the instruction changed my game completely."
                    </p>
<div className="flex items-center gap-3">
<img alt="Dave" className="w-10 h-10 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm text-white font-medium">David Ross</div>
<div className="text-xs text-neutral-500">Purple Belt</div>
</div>
</div>
</div>

<div className="bg-neutral-900/80 border-white/5 border rounded-xl px-8 py-8 relative overflow-hidden backdrop-blur-md">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon icon="solar:star-fall-linear" width="60"></iconify-icon>
</div>
<div className="text-neutral-400 mb-6">
<iconify-icon icon="solar:quote-up-linear" width="24"></iconify-icon>
</div>
<p className="text-base text-neutral-300 leading-relaxed mb-6">
                        "My son used to be shy and anxious. Six months in the Kids Program and his confidence has skyrocketed. The coaches are incredible mentors."
                    </p>
<div className="flex gap-3 items-center">
<img alt="Sarah" className="w-10 h-10 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1976&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm text-white font-medium">Sarah Miller</div>
<div className="text-xs text-neutral-500">Parent</div>
</div>
</div>
</div>

<div className="p-8 rounded-xl bg-neutral-900/30 border border-white/5 backdrop-blur-sm">
<div className="mb-6 text-neutral-400">
<iconify-icon icon="solar:quote-up-linear" width="24"></iconify-icon>
</div>
<p className="text-base text-neutral-300 leading-relaxed mb-6">
                        "The atmosphere is intense but friendly. You work hard, you sweat, but everyone takes care of each other. It's the highlight of my day."
                    </p>
<div className="flex items-center gap-3">
<img alt="Mike" className="w-10 h-10 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm text-white font-medium">Mike Johnson</div>
<div className="text-xs text-neutral-500">White Belt</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="isolate overflow-hidden pt-24 pb-24 relative">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(255,255,255,0.05),transparent_60%)]"></div>
<div className="z-10 px-6 max-w-7xl mx-auto relative">
<div className="text-center">
<h2 className="sm:text-5xl text-4xl font-medium text-white tracking-tight font-manrope">
                    Membership Plans
                </h2>
<div className="flex mt-6 gap-4 items-center justify-center">
<span className="text-sm text-white/70">Flexible options for every goal. No hidden fees.</span>
</div>
</div>
<div className="grid gap-6 lg:grid-cols-3 mt-10">

<div className="border-white/10 border rounded-3xl p-6 backdrop-blur-xl bg-neutral-900/20">
<div className="flex items-center justify-between">
<div>
<div className="text-sm uppercase tracking-[0.18em] text-white/60">
                                Starter
                            </div>
<div className="mt-2 flex items-end gap-2">
<div className="text-4xl font-medium tracking-tight text-white">
                                    $140
                                </div>
<div className="text-sm text-white/50">/mo</div>
</div>
</div>
</div>
<button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium tracking-tight text-black hover:bg-white/90">
                        Start Trial
                    </button>
<ul className="mt-6 space-y-3 text-sm text-white/75">
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            2 Classes per week
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Fundamental curriculum access
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Open Mat access
                        </li>
</ul>
</div>

<div className="border-white/10 border ring-amber-300/10 ring-1 rounded-3xl p-2 relative backdrop-blur-xl">
<div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/[0.06] to-transparent h-full">
<div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_80%_0%,rgba(251,191,36,0.15),transparent_60%)]"></div>
<div className="p-6 relative">
<div className="flex items-start justify-between">
<div>
<div className="text-sm uppercase tracking-[0.18em] text-white/70">
                                        Unlimited
                                    </div>
<div className="mt-2 flex items-end gap-2">
<div className="text-4xl font-medium tracking-tight text-white">
                                            $180
                                        </div>
<div className="text-sm text-white/60">
                                            /mo
                                        </div>
</div>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-amber-400/15 px-2 py-1 text-[10px] text-amber-300 ring-1 ring-amber-300/25">
<iconify-icon className="text-amber-300" icon="solar:star-bold"></iconify-icon>
                                    Most Popular
                                </span>
</div>
<button className="inline-flex gap-2 hover:from-amber-200 hover:to-amber-300 text-sm font-medium text-black tracking-tight bg-gradient-to-b from-amber-300 to-amber-400 w-full rounded-xl mt-6 py-3 px-4 shadow-[0_10px_30px_rgba(251,191,36,0.25)] items-center justify-center">
                                Join Now
                            </button>
<ul className="mt-6 space-y-3 text-sm text-white/85">
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-400 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                                    Unlimited classes
                                </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-400 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                                    Advanced &amp; Competition classes
                                </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-400 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                                    Access to all seminars
                                </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-400 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                                    Free uniform upon signup
                                </li>
</ul>
</div>
</div>
</div>

<div className="border-white/10 border rounded-3xl p-6 backdrop-blur-xl bg-neutral-900/20">
<div className="flex items-center justify-between">
<div>
<div className="text-sm uppercase tracking-[0.18em] text-white/60">
                                Private / Family
                            </div>
<div className="mt-2 flex items-end gap-2">
<div className="text-4xl font-medium tracking-tight text-white">
                                    Custom
                                </div>
</div>
</div>
</div>
<button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium tracking-tight text-white/90 hover:bg-white/10">
                        Contact Us
                    </button>
<ul className="mt-6 space-y-3 text-sm text-white/75">
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            1-on-1 Personalized instruction
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Family discount packages
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Flexible scheduling
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Video analysis included
                        </li>
</ul>
</div>
</div>
<p className="text-xs text-white/50 text-center mt-8">
                All memberships include a 14-day money-back guarantee.
            </p>
</div>
</section>

<section className="overflow-hidden bg-neutral-950 z-10 py-32 relative">
<div className="absolute inset-0 opacity-30">
<img alt="Gym" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/80 to-[#030303]/60"></div>
</div>
<div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
                Ready to step on the mats?
            </h2>
<p className="text-lg text-neutral-400 mb-10">
                Begin your journey today. No experience required. Just show up.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Claim Free Class
                </button>
<button className="h-12 px-8 rounded-full bg-black/50 text-neutral-300 text-sm font-medium hover:text-white transition-colors w-full sm:w-auto border border-white/20 hover:border-white/40 backdrop-blur-md">
                    Contact Instructors
                </button>
</div>
</div>
</section>

<footer className="bg-[#030303] z-10 border-white/5 border-t py-12 relative">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
<iconify-icon className="text-black text-xs" icon="solar:yin-yang-linear"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tight text-white">
                    ZEN BJJ
                </span>
</div>
<div className="flex gap-8 text-xs text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Program Rules</a>
<a className="hover:text-white transition-colors" href="#">Waiver</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="text-xs text-neutral-600">© 2024 Zen Jiu-Jitsu Academy.</div>
</div>
</footer>



    </>
  );
}
