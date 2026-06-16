import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const track = document.getElementById('testimonial-track');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const cards = track.children;
            let currentIndex = 0;

            function updateCarousel() {
                // Only apply transform on mobile (< 768px)
                if (window.innerWidth < 768) {
                    const width = cards[0].offsetWidth;
                    // Add padding adjustment if needed, but 100% translation is standard for single item
                    track.style.transform = `translateX(-${currentIndex * 100}%)`;
                } else {
                    track.style.transform = 'none';
                }
            }

            nextBtn.addEventListener('click', () => {
                if (currentIndex < cards.length - 1) {
                    currentIndex++;
                    updateCarousel();
                } else {
                    // Loop back to start
                    currentIndex = 0;
                    updateCarousel();
                }
            });

            prevBtn.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateCarousel();
                } else {
                    // Loop to end
                    currentIndex = cards.length - 1;
                    updateCarousel();
                }
            });

            // Reset on resize
            window.addEventListener('resize', () => {
                track.style.transform = '';
                currentIndex = 0;
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full mix-blend-screen"></div>
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<nav className="relative z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-lg font-semibold tracking-tighter text-white hover:text-white/80 transition-colors" href="#">
                ACQUISITION
            </a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">Methodology</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">Case Studies</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">Pricing</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-neutral-300 hover:text-white transition-colors" href="#">Log in</a>
<a className="text-sm font-medium bg-white/5 border border-white/10 hover:bg-white/10 text-white px-4 py-2 rounded-lg transition-all" href="#">
                    Book Intro
                </a>
</div>
</div>
</nav>

<main className="relative z-10 flex-grow flex flex-col items-center justify-center">

<section className="relative max-w-5xl mx-auto px-6 pt-20 pb-24 md:pt-32 md:pb-32 text-center">

<div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-in-up">

<div className="flex -space-x-3">
<img alt="Partner 1" className="h-8 w-8 rounded-full ring-2 ring-black object-cover grayscale hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Partner 2" className="h-8 w-8 rounded-full ring-2 ring-black object-cover grayscale hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="Partner 3" className="h-8 w-8 rounded-full ring-2 ring-black object-cover grayscale hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<img alt="Partner 4" className="h-8 w-8 rounded-full ring-2 ring-black object-cover grayscale hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="h-8 w-8 rounded-full ring-2 ring-black bg-neutral-800 flex items-center justify-center text-[10px] font-medium text-white">
                        +99
                    </div>
</div>

<div className="flex flex-col items-start sm:items-start items-center">
<div className="flex items-center gap-0.5">
<svg className="lucide lucide-star" fill="#f97316" height="14" stroke="#f97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="#f97316" height="14" stroke="#f97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="#f97316" height="14" stroke="#f97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="#f97316" height="14" stroke="#f97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="#f97316" height="14" stroke="#f97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-xs font-medium text-neutral-400 mt-1">Trusted by 140+ partners</p>
</div>
</div>

<h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tighter text-white leading-[1.1] mb-6">
                Ready to 
                <span className="font-serif-italic font-normal text-white relative inline-block">
                    boost
                    
<svg className="absolute w-full h-3 -bottom-1 left-0 text-orange-500 opacity-80" preserveaspectratio="none" viewbox="0 0 100 20">
<path d="M0 10 Q 50 20 100 10" fill="none" stroke="currentColor" strokeWidth="3"></path>
</svg>
</span>
                your <br className="hidden md:block"/> growth with performance ads?
            </h1>

<p className="text-base sm:text-lg text-neutral-400 font-normal max-w-2xl mx-auto leading-relaxed mb-10">
                We engineer profitable acquisition systems for digital brands. Stop relying on guesswork and start scaling with data-driven precision.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group inline-flex items-center justify-center gap-2 transition-all duration-300 hover:bg-orange-400 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] text-sm font-medium text-black bg-orange-500 rounded-xl pt-3.5 pr-8 pb-3.5 pl-8 relative" href="/survey">
                    Start Scaling
                    <svg className="lucide lucide-arrow-right transition-transform group-hover:translate-x-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</section>

<section className="w-full max-w-6xl mx-auto px-6 pb-24">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors">
<div className="h-10 w-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 text-orange-500">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
<h3 className="text-base font-semibold text-white mb-2">Full-Funnel Strategy</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        We don't just run ads. We optimize your entire customer journey from click to conversion.
                    </p>
</div>

<div className="group p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors">
<div className="h-10 w-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 text-orange-500">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 2v2"></path><path d="M12 22v-2"></path><path d="m17 17-1.4-1.4"></path><path d="m17 7-1.4 1.4"></path><path d="m7 17 1.4-1.4"></path><path d="m7 7 1.4 1.4"></path></svg>
</div>
<h3 className="text-base font-semibold text-white mb-2">Creative Testing</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Rapid iteration on visuals and copy to find winning combinations that scale efficiently.
                    </p>
</div>

<div className="group p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors">
<div className="h-10 w-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 text-orange-500">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
</div>
<h3 className="text-base font-semibold text-white mb-2">Real-time Analytics</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Transparent reporting dashboards that show you exactly where every dollar goes.
                    </p>
</div>
</div>
</section>

<section className="w-full py-20 px-6 bg-neutral-900/20 border-y border-white/5 relative overflow-hidden">
<div className="max-w-6xl mx-auto flex flex-col items-center">

<div className="flex flex-col items-center justify-center mb-12 text-center">
<div className="flex items-center gap-1 mb-4">
<svg className="lucide lucide-star" fill="#f97316" height="18" stroke="#f97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="#f97316" height="18" stroke="#f97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="#f97316" height="18" stroke="#f97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="#f97316" height="18" stroke="#f97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="#f97316" height="18" stroke="#f97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white">Loved by Top Brands</h2>
</div>

<div className="relative w-full overflow-hidden md:overflow-visible">

<div className="flex transition-transform duration-300 ease-out md:grid md:grid-cols-3 md:gap-5 md:transform-none" id="testimonial-track">

<div className="w-full md:w-auto flex-shrink-0 p-1 md:p-0">
<div className="bg-white rounded-xl p-6 h-full flex flex-col justify-between shadow-lg">
<div>
<div className="flex items-center gap-0.5 mb-4">
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-sm leading-relaxed text-neutral-800 font-medium mb-6">
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                                    </p>
</div>
<div className="flex items-center justify-between border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-xs font-bold text-neutral-800">
                                            J
                                        </div>
<span className="text-xs font-semibold text-neutral-900">James Miller</span>
</div>
<svg className="h-5 w-auto text-neutral-500" viewbox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor"></path></svg>
</div>
</div>
</div>

<div className="w-full md:w-auto flex-shrink-0 p-1 md:p-0">
<div className="bg-white rounded-xl p-6 h-full flex flex-col justify-between shadow-lg">
<div>
<div className="flex items-center gap-0.5 mb-4">
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-sm leading-relaxed text-neutral-800 font-medium mb-6">
                                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est."
                                    </p>
</div>
<div className="flex items-center justify-between border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-xs font-bold text-neutral-800">
                                            S
                                        </div>
<span className="text-xs font-semibold text-neutral-900">Sarah Connor</span>
</div>
<svg className="h-5 w-auto text-neutral-500" viewbox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor"></path></svg>
</div>
</div>
</div>

<div className="w-full md:w-auto flex-shrink-0 p-1 md:p-0">
<div className="bg-white rounded-xl p-6 h-full flex flex-col justify-between shadow-lg">
<div className="">
<div className="flex items-center gap-0.5 mb-4">
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-sm leading-relaxed text-neutral-800 font-medium mb-6">
                                        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                    </p>
</div>
<div className="flex items-center justify-between border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-xs font-bold text-neutral-800">
                                            M
                                        </div>
<span className="text-xs font-semibold text-neutral-900">Mark Otto</span>
</div>
<svg className="h-5 w-auto text-neutral-500" viewbox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor"></path></svg>
</div>
</div>
</div>

<div className="w-full md:w-auto flex-shrink-0 p-1 md:p-0">
<div className="bg-white rounded-xl p-6 h-full flex flex-col justify-between shadow-lg">
<div>
<div className="flex items-center gap-0.5 mb-4">
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-sm leading-relaxed text-neutral-800 font-medium mb-6">
                                        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit."
                                    </p>
</div>
<div className="flex items-center justify-between border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-xs font-bold text-neutral-800">
                                            E
                                        </div>
<span className="text-xs font-semibold text-neutral-900">Emily Blunt</span>
</div>
<svg className="h-5 w-auto text-neutral-500" viewbox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor"></path></svg>
</div>
</div>
</div>

<div className="w-full md:w-auto flex-shrink-0 p-1 md:p-0">
<div className="bg-white rounded-xl p-6 h-full flex flex-col justify-between shadow-lg">
<div>
<div className="flex items-center gap-0.5 mb-4">
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-sm leading-relaxed text-neutral-800 font-medium mb-6">
                                        "Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    </p>
</div>
<div className="flex items-center justify-between border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-xs font-bold text-neutral-800">
                                            R
                                        </div>
<span className="text-xs font-semibold text-neutral-900">Ryan Gosling</span>
</div>
<svg className="h-5 w-auto text-neutral-500" viewbox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor"></path></svg>
</div>
</div>
</div>

<div className="w-full md:w-auto flex-shrink-0 p-1 md:p-0">
<div className="bg-white rounded-xl p-6 h-full flex flex-col justify-between shadow-lg">
<div>
<div className="flex items-center gap-0.5 mb-4">
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-sm leading-relaxed text-neutral-800 font-medium mb-6">
                                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
                                    </p>
</div>
<div className="flex items-center justify-between border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-xs font-bold text-neutral-800">
                                            A
                                        </div>
<span className="text-xs font-semibold text-neutral-900">Alice Cooper</span>
</div>
<svg className="h-5 w-auto text-neutral-500" viewbox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor"></path></svg>
</div>
</div>
</div>

<div className="w-full md:w-auto flex-shrink-0 p-1 md:p-0">
<div className="bg-white rounded-xl p-6 h-full flex flex-col justify-between shadow-lg">
<div>
<div className="flex items-center gap-0.5 mb-4">
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-sm leading-relaxed text-neutral-800 font-medium mb-6">
                                        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."
                                    </p>
</div>
<div className="flex items-center justify-between border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-xs font-bold text-neutral-800">
                                            D
                                        </div>
<span className="text-xs font-semibold text-neutral-900">David Goggins</span>
</div>
<svg className="h-5 w-auto text-neutral-500" viewbox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor"></path></svg>
</div>
</div>
</div>

<div className="w-full md:w-auto flex-shrink-0 p-1 md:p-0">
<div className="bg-white rounded-xl p-6 h-full flex flex-col justify-between shadow-lg">
<div className="">
<div className="flex items-center gap-0.5 mb-4">
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-sm leading-relaxed text-neutral-800 font-medium mb-6">
                                        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi."
                                    </p>
</div>
<div className="flex items-center justify-between border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-xs font-bold text-neutral-800">
                                            K
                                        </div>
<span className="text-xs font-semibold text-neutral-900">Kim Wexler</span>
</div>
<svg className="h-5 w-auto text-neutral-500" viewbox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor"></path></svg>
</div>
</div>
</div>

<div className="w-full md:w-auto flex-shrink-0 p-1 md:p-0">
<div className="bg-white rounded-xl p-6 h-full flex flex-col justify-between shadow-lg">
<div className="">
<div className="flex items-center gap-0.5 mb-4">
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4 text-orange-500 fill-orange-500" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-sm leading-relaxed text-neutral-800 font-medium mb-6">
                                        "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
                                    </p>
</div>
<div className="flex items-center justify-between border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-xs font-bold text-neutral-800">
                                            L
                                        </div>
<span className="text-xs font-semibold text-neutral-900">Lucy Liu</span>
</div>
<svg className="h-5 w-auto text-neutral-500" viewbox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor"></path></svg>
</div>
</div>
</div>
</div>

<div className="md:hidden absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 pointer-events-none">
<button className="pointer-events-auto w-10 h-10 rounded-full bg-black/80 text-white flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-xl hover:bg-black transition-all" id="prevBtn">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="pointer-events-auto w-10 h-10 rounded-full bg-black/80 text-white flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-xl hover:bg-black transition-all" id="nextBtn">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>

<div className="mt-16 flex flex-col items-center gap-3">
<button className="hover:bg-orange-400 transition-all transform hover:scale-[1.02] text-sm font-semibold text-black bg-orange-500 rounded-xl pt-4 pr-10 pb-4 pl-10 shadow-[0_0_20px_rgba(249,115,22,0.4)]" onclick="window.location.href='/survey'" role="button">
                        THE ACTION TO TAKE
                    </button>
<p className="text-xs text-neutral-500 font-medium">Eliminate Friction of the Click</p>
</div>
</div>
</section>

<section className="w-full py-24 px-6">
<div className="max-w-2xl mx-auto bg-neutral-900/20 border border-white/5 rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden backdrop-blur-sm">

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>

<div className="flex flex-col items-center text-center">

<div className="h-14 w-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-8 text-orange-500 ring-1 ring-orange-500/20 shadow-[0_0_20px_rgba(249,115,22,0.1)]">
<svg className="lucide lucide-file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>

<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-2">
                        Stop wasting budget on ads that don't convert.
                    </h3>

<div className="w-full text-left mt-8 space-y-6">
<p className="text-neutral-500 text-sm font-medium uppercase tracking-widest">Dear Founder,</p>

<ul className="space-y-3">
<li className="flex items-start gap-3">
<span className="h-1.5 w-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
<p className="text-neutral-300">Are you tired of watching your CAC creep up month over month?</p>
</li>
<li className="flex items-start gap-3">
<span className="h-1.5 w-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
<p className="text-neutral-300">Do you feel like you're guessing with your creatives rather than following data?</p>
</li>
<li className="flex items-start gap-3">
<span className="h-1.5 w-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
<p className="text-neutral-300">Is your scaling stuck at a plateau despite increasing your ad spend?</p>
</li>
</ul>

<p className="text-neutral-400 leading-relaxed">
                            You've built an incredible product. You have initial traction. But the acquisition engine is sputtering. You know the potential for massive growth is there, but the "growth hacks" that worked in 2021 aren't working today. The landscape has shifted, and your strategy needs to evolve from simple media buying to holistic revenue engineering.
                        </p>

<div className="flex items-center gap-3 py-4 border-l-2 border-orange-500/30 pl-4 bg-white/5 rounded-r-xl">
<div className="h-10 w-10 rounded-full bg-neutral-800 border border-white/10 overflow-hidden">
<img alt="Client" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div>
<p className="text-sm text-neutral-300 italic">"We finally broke through our ceiling." 🚀</p>
<p className="text-xs text-neutral-500 font-medium">— Alex, CEO at TechFlow</p>
</div>
</div>

<h3 className="text-xl font-semibold text-white pt-4">
                            For 5 Years, We've Helped Over 100+ SaaS Founders Scale to $10M ARR
                        </h3>

<p className="text-neutral-400 leading-relaxed">
                            We don't believe in magic bullets. We believe in systems. Our proprietary acquisition framework is built on millions of dollars of managed ad spend, rigorous A/B testing, and a deep understanding of consumer psychology.
                        </p>

<div className="space-y-6 pt-4">
<div>
<h4 className="text-white font-medium mb-1">Scientific Creative Testing</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                                    We don't just test colors. We test concepts, hooks, and emotional angles to find the winning message that resonates with your ideal customer profile.
                                </p>
</div>
<div className="">
<h4 className="text-white font-medium mb-1">Full-Funnel Attribution</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                                    Stop flying blind. We implement advanced tracking that tells you exactly which ad, keyword, and creative drove the revenue, so you can cut the fat and feed the winners.
                                </p>
</div>
<div className="">
<h4 className="text-white font-medium mb-1">Predictable Scaling</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                                    Once we find the winning formula, we turn the dial up with confidence. No more roller-coaster months—just consistent, predictable growth.
                                </p>
</div>
</div>

<div className="bg-neutral-900/50 rounded-xl p-6 border border-white/5">
<ul className="space-y-3">
<li className="flex items-center gap-3">
<svg className="text-orange-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm font-medium text-neutral-200">Reduce Customer Acquisition Cost by 30%</span>
</li>
<li className="flex items-center gap-3">
<svg className="text-orange-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm font-medium text-neutral-200">Double ROAS in 90 Days</span>
</li>
<li className="flex items-center gap-3">
<svg className="text-orange-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm font-medium text-neutral-200">Automate Creative Production</span>
</li>
</ul>
</div>

<div className="space-y-4">
<p className="text-neutral-400 leading-relaxed">
                                You can continue to spin your wheels, trying to piece together a strategy from blog posts and YouTube videos. Or you can partner with a team that has a proven track record of success.
                            </p>
<p className="text-neutral-400 leading-relaxed">
                                Let's build a machine that grows your business while you sleep.
                            </p>
</div>

<div className="pt-4">
<p className="text-neutral-300 font-medium mb-4">To your success,</p>
<div className="flex items-center gap-4">
<img alt="Founder" className="h-12 w-12 rounded-full ring-2 ring-white/10 object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div>
<p className="text-white font-semibold text-sm">James Carter</p>
<p className="text-neutral-500 text-xs">Founder, Acquisition Systems</p>
</div>
</div>
</div>

<div className="pt-6">
<a className="block hover:bg-orange-400 transition-all hover:scale-[1.02] font-semibold text-black text-center bg-orange-500 w-full rounded-xl pt-4 pb-4 shadow-[0_0_20px_rgba(249,115,22,0.3)]" href="#">
                                BOOK YOUR STRATEGY CALL
                            </a>
<p className="text-center text-xs text-neutral-500 mt-3">
                                No obligation. 100% free discovery call to see if we're a fit.
                            </p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="w-full py-8 border-t border-white/5 mt-auto">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-500">© 2024 Acquisition Systems Inc. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</footer>



    </>
  );
}
