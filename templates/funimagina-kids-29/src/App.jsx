import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


        // Initialize Lucide icons
        lucide.createIcons();

        // Style selection
        function selectStyle(btn) {
            document.querySelectorAll('.style-btn').forEach(b => {
                b.classList.remove('bg-purple-400/10', 'border-purple-400/20', 'text-purple-300');
                b.classList.add('bg-white/5', 'border-white/10', 'text-gray-300');
            });
            btn.classList.remove('bg-white/5', 'border-white/10', 'text-gray-300');
            btn.classList.add('bg-purple-400/10', 'border-purple-400/20', 'text-purple-300');
        }

        // Duration selection
        function selectDuration(btn) {
            document.querySelectorAll('.duration-btn').forEach(b => {
                b.classList.remove('bg-purple-400/10', 'border-purple-400/20', 'text-purple-300');
                b.classList.add('bg-white/5', 'border-white/10', 'text-gray-300');
                const timeSpan = b.querySelector('span:last-child');
                if (timeSpan) {
                    timeSpan.classList.remove('text-purple-400/70');
                    timeSpan.classList.add('text-gray-500');
                }
            });
            btn.classList.remove('bg-white/5', 'border-white/10', 'text-gray-300');
            btn.classList.add('bg-purple-400/10', 'border-purple-400/20', 'text-purple-300');
            const timeSpan = btn.querySelector('span:last-child');
            if (timeSpan) {
                timeSpan.classList.remove('text-gray-500');
                timeSpan.classList.add('text-purple-400/70');
            }
        }

        // Interest selection (max 2)
        let selectedInterests = 1;
        function selectInterest(btn) {
            const isSelected = btn.classList.contains('bg-blue-400/10');
            if (isSelected) {
                btn.classList.remove('bg-blue-400/10', 'border-blue-400/20', 'text-blue-300');
                btn.classList.add('bg-white/5', 'border-white/10', 'text-gray-300');
                selectedInterests--;
            } else if (selectedInterests < 2) {
                btn.classList.remove('bg-white/5', 'border-white/10', 'text-gray-300');
                btn.classList.add('bg-blue-400/10', 'border-blue-400/20', 'text-blue-300');
                selectedInterests++;
            }
        }

        // Theme selection
        function selectTheme(btn) {
            document.querySelectorAll('.theme-btn').forEach(b => {
                b.classList.remove('bg-green-400/10', 'border-green-400/20', 'text-green-300');
                b.classList.add('bg-white/5', 'border-white/10', 'text-gray-300');
            });
            btn.classList.remove('bg-white/5', 'border-white/10', 'text-gray-300');
            btn.classList.add('bg-green-400/10', 'border-green-400/20', 'text-green-300');
        }

        // Share button toggle
        document.getElementById('share-btn').addEventListener('click', function() {
            const socialIcons = document.getElementById('social-icons');
            socialIcons.classList.toggle('hidden');
        });

        // Scroll to illustration style
        function scrollToIllustrationStyle() {
            document.getElementById('illustration-style-section').scrollIntoView({ behavior: 'smooth' });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 overflow-hidden">
<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full blur-3xl opacity-40 bg-[radial-gradient(closest-side,rgba(251,146,60,0.55),rgba(18,18,27,0))]"></div>
<div className="absolute bottom-0 right-0 w-[700px] h-[700px] translate-x-1/3 translate-y-1/3 rounded-full blur-3xl opacity-30 bg-[radial-gradient(closest-side,rgba(236,72,153,0.45),rgba(18,18,27,0))]"></div>
</div>

<header className="relative z-50 sticky top-0 backdrop-blur-xl bg-[#0a0a12]/80 border-b border-white/5">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4 border-gray-50/5">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-2" href="#">
<img alt="FunImagination Logo" className="w-20 h-20 max-w-md object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9d494c0b-2796-408f-885c-cd342def7eb4_320w.png?w=800&amp;q=80"/>
<span className="text-lg font-semibold tracking-tight font-geist">FunImagination</span>
</a>
<nav className="hidden md:flex gap-1 border rounded-full px-4 items-center border-gray-50/5">
<a className="text-sm font-medium pt-2 pr-3 pb-2 pl-3 hover:text-white text-blue-300 font-geist" href="#create-story-section">Create Stories</a>
<a className="hover:text-white text-sm font-medium text-blue-300 font-geist pt-2 pr-3 pb-2 pl-3" href="#gallery">Gallery</a>
</nav>
<div className="flex gap-2 items-center">
<a className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(251,146,60,0.2)] hover:shadow-[0_12px_20px_-6px_rgba(251,146,60,0.28)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60 transform-gpu hover:-translate-y-0.5 rounded-md pt-[1px] pr-[1px] pb-[1px] pl-[1px] items-center justify-center text-white" href="login.html" style={{backgroundImage: 'linear-gradient(144deg,#FB923C, #EC4899 50%, #8B5CF6)'}}>
<span className="flex items-center justify-center gap-2 text-[14px] leading-none min-w-[80px] w-full h-full transition-colors duration-300 group-hover:bg-transparent font-medium bg-[#0b0f17] rounded-md pt-2 pr-4 pb-2 pl-4">
<svg className="lucide lucide-user w-4 h-4" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="font-geist">Login / Register</span>
</span>
</a>
</div>
</div>
</div>
</header>

<section className="z-10 bg-[#000000] relative">
<div className="sm:px-6 lg:px-8 sm:pt-16 bg-center opacity-80 max-w-6xl mt-0 mr-auto mb-0 ml-auto pt-0 pr-0 pl-0 relative">

<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="absolute w-full h-[825px] top-0 left-0 -z-10" data-us-project="trp6RGMggh1riXQsX9Ag"></div>

</div>
<div className="flex flex-col relative z-10 text-center mr-auto mb-60 ml-auto space-y-6 items-center">
<h1 className="sm:text-6xl md:text-7xl text-4xl font-medium text-white tracking-tight font-playfair mt-6">Create magical stories for kids</h1>
<p className="sm:text-lg text-base text-blue-300 font-geist max-w-2xl mt-0">
                    Bring imagination to life with AI-powered storytelling and custom illustrations. Create personalized children's books in minutes.
                </p>
<div className="flex gap-3 mt-8 mb-0 pb-[60px] items-center">
<a className="inline-flex items-center gap-2 transform-gpu transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(251,146,60,0.4)] hover:scale-[1.02] active:scale-[0.98] active:duration-75 text-sm font-semibold bg-gradient-to-br to-pink-500 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg shadow-purple-900/25 text-white from-purple-400 font-geist" href="#create-story-section">
                        Create Your Story
                        <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="relative sm:mt-16 mt-12 z-10 scroll-mt-24" id="create-story-section">
<div className="absolute inset-0 -top-8 mx-auto h-56 max-w-5xl rounded-[28px] bg-gradient-to-r via-pink-500/20 to-purple-500/30 blur-2xl from-purple-400/30"></div>
<section className="relative ring-1 supports-[backdrop-filter]:bg-white/5 overflow-hidden bg-[#0d0d15] border rounded-2xl backdrop-blur-xl ring-white/10 text-white border-gray-50/10">

<nav className="hidden sm:flex flex-col absolute inset-y-0 left-0 w-14 ring-1 z-10 border-r pt-4 pr-2 pb-4 pl-2 backdrop-blur items-center justify-between bg-[#0d0d15] ring-white/10 border-gray-50/0">
<div className="flex flex-col gap-3 items-center">
<button className="h-10 w-10 rounded-xl bg-gradient-to-br to-pink-500 ring-1 shadow-lg flex items-center justify-center from-purple-400 ring-white/20 shadow-purple-900/25" title="Create Story" type="button">
<svg className="lucide lucide-book-open w-5 h-5 text-white" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</button>
<div className="h-px w-8 bg-white/10"></div>
<a className="h-10 w-10 rounded-xl ring-1 flex items-center justify-center bg-white/5 ring-white/10 hover:bg-white/10 text-gray-300" href="account.html" title="Account">
<svg className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</a>
<button className="h-10 w-10 ring-1 flex rounded-xl items-center justify-center cursor-pointer ring-white/10 hover:bg-white/10 text-gray-50 bg-white/25" onclick="scrollToIllustrationStyle()" title="Style" type="button">
<svg className="lucide lucide-palette w-5 h-5" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</button>
<a className="h-10 w-10 rounded-xl ring-1 flex items-center justify-center bg-white/5 ring-white/10 hover:bg-white/10 text-gray-300" href="library.html" title="Library">
<svg className="lucide lucide-library w-5 h-5" data-lucide="library" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6 4 14"></path><path d="M12 6v14"></path><path d="M8 8v12"></path><path d="M4 4v16"></path></svg>
</a>
</div>
<div className="flex flex-col items-center gap-3">
<button className="h-10 w-10 rounded-xl ring-1 flex items-center justify-center bg-white/5 ring-white/10 hover:bg-white/10 text-gray-300" title="Settings" type="button">
<svg className="lucide lucide-settings w-5 h-5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</nav>
<div className="grid grid-cols-1 lg:grid-cols-2 sm:pl-16">

<div className="sm:p-8 lg:p-10 bg-[#0d0d15] pt-5 pr-5 pb-5 pl-5 flex flex-col">
<div className="space-y-6 flex-1 flex flex-col">
<div className="flex items-center justify-between">
<h2 className="sm:text-2xl text-xl tracking-tight text-white font-playfair font-medium">Create Your Story</h2>
<div className="flex gap-2 items-center text-gray-300">
<svg className="lucide lucide-wand-2 w-4 h-4" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
<span className="sm:text-sm text-xs font-medium font-geist">AI Powered</span>
</div>
</div>
<div className="space-y-4 flex-1 flex flex-col">

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-sm font-medium text-gray-300 font-geist">Your Name</label>
<input className="w-full border rounded-xl px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent bg-white/5 border-white/10 text-white" placeholder="Parent's Name" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-gray-300 font-geist">Your Email</label>
<input className="w-full border rounded-xl px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent bg-white/5 border-white/10 text-white" placeholder="you@example.com" type="email"/>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-sm font-medium text-gray-300 font-geist">Main Character</label>
<input className="w-full border rounded-xl px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent bg-white/5 border-white/10 text-white" placeholder="Child's Name" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-gray-300 font-geist">Child's Age</label>
<input className="placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent text-white bg-white/5 w-full border-white/10 border rounded-xl pt-3 pr-4 pb-3 pl-4" max="18" min="1" placeholder="Enter age (1-12)" type="number"/>
</div>
</div>

<div className="space-y-3 scroll-mt-32" id="illustration-style-section">
<label className="text-sm font-medium text-gray-300 font-geist">Illustration Style</label>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
<button className="style-btn flex items-center justify-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-colors cursor-pointer bg-purple-400/10 border-purple-400/20 text-purple-300 font-geist" onclick="selectStyle(this)">
<svg className="lucide lucide-droplets w-4 h-4" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
                                                Watercolor
                                            </button>
<button className="style-btn flex items-center justify-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-colors cursor-pointer bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 font-geist" onclick="selectStyle(this)">
<svg className="lucide lucide-monitor w-4 h-4" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
                                                Modern
                                            </button>
<button className="style-btn flex items-center justify-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-colors cursor-pointer bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 font-geist" onclick="selectStyle(this)">
<svg className="lucide lucide-smile w-4 h-4" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
                                                Cartoonish
                                            </button>
<button className="style-btn flex items-center justify-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-colors cursor-pointer bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 font-geist" onclick="selectStyle(this)">
<svg className="lucide lucide-pencil w-4 h-4" data-lucide="pencil" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
                                                Line Drawings
                                            </button>
<button className="style-btn flex items-center justify-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-colors cursor-pointer bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 font-geist" onclick="selectStyle(this)">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                                                Fantasy
                                            </button>
<button className="style-btn flex items-center justify-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-colors cursor-pointer bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 font-geist" onclick="selectStyle(this)">
<svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                                                Vintage
                                            </button>
</div>
</div>

<div className="space-y-3">
<label className="text-sm font-medium text-gray-300 font-geist">Story Duration</label>
<div className="grid grid-cols-3 gap-2">
<button className="duration-btn flex flex-col items-center justify-center gap-1 px-3 py-3 rounded-xl border text-sm font-medium transition-colors cursor-pointer bg-purple-400/10 border-purple-400/20 text-purple-300 font-geist" onclick="selectDuration(this)">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
<span>Quick</span>
<span className="text-xs text-purple-400/70">(5 min)</span>
</button>
<button className="duration-btn flex flex-col items-center justify-center gap-1 px-3 py-3 rounded-xl border text-sm font-medium transition-colors cursor-pointer bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 font-geist" onclick="selectDuration(this)">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span>Standard</span>
<span className="text-xs text-gray-500">(10 min)</span>
</button>
<button className="duration-btn flex flex-col items-center justify-center gap-1 px-3 py-3 rounded-xl border text-sm font-medium transition-colors cursor-pointer bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 font-geist" onclick="selectDuration(this)">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
<span>Extra Cozy</span>
<span className="text-xs text-gray-500">(15 min)</span>
</button>
</div>
</div>

<div className="space-y-2">
<label className="text-sm font-medium text-gray-300 font-geist">Discount Code</label>
<div className="flex gap-2">
<input className="flex-1 border rounded-xl px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent bg-white/5 border-white/10 text-white" placeholder="Enter code" type="text"/>
<button className="px-4 py-3 rounded-xl border text-sm font-medium transition-colors bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 font-geist">
                                                Apply
                                            </button>
</div>
</div>

<button className="inline-flex gap-2 transform-gpu transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(251,146,60,0.4)] hover:scale-[1.02] active:scale-[0.98] active:duration-75 shadow-purple-900/25 text-sm font-semibold text-white font-geist bg-gradient-to-br to-pink-500 from-purple-400 w-full rounded-xl pt-3 pr-4 pb-3 pl-4 shadow-lg gap-x-2 gap-y-2 items-center justify-center mt-auto">
<svg className="lucide lucide-wand-2 w-4 h-4" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
                                        Generate Story - $19.99
                                    </button>
</div>
</div>
</div>

<div className="lg:border-t-0 lg:border-l border-t bg-[#0d0d15] border-white/10 flex flex-col">
<div className="sm:p-8 lg:p-10 pt-5 pr-5 pb-5 pl-5 space-y-6 flex-1 flex flex-col">

<div className="space-y-2">
<label className="text-sm font-medium text-gray-300 font-geist">Language</label>
<div className="relative">
<select className="custom-select w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent bg-white/5 border-white/10 text-white cursor-pointer font-geist">
<option className="bg-[#0d0d15]" value="en">🇺🇸 English</option>
<option className="bg-[#0d0d15]" value="es">🇪🇸 Spanish</option>
<option className="bg-[#0d0d15]" value="fr">🇫🇷 French</option>
<option className="bg-[#0d0d15]" value="de">🇩🇪 German</option>
<option className="bg-[#0d0d15]" value="it">🇮🇹 Italian</option>
<option className="bg-[#0d0d15]" value="pt">🇵🇹 Portuguese</option>
<option className="bg-[#0d0d15]" value="nl">🇳🇱 Dutch</option>
<option className="bg-[#0d0d15]" value="ru">🇷🇺 Russian</option>
<option className="bg-[#0d0d15]" value="zh">🇨🇳 Chinese (Simplified)</option>
<option className="bg-[#0d0d15]" value="ja">🇯🇵 Japanese</option>
<option className="bg-[#0d0d15]" value="ko">🇰🇷 Korean</option>
<option className="bg-[#0d0d15]" value="ar">🇸🇦 Arabic</option>
<option className="bg-[#0d0d15]" value="hi">🇮🇳 Hindi</option>
<option className="bg-[#0d0d15]" value="pl">🇵🇱 Polish</option>
<option className="bg-[#0d0d15]" value="sv">🇸🇪 Swedish</option>
<option className="bg-[#0d0d15]" value="no">🇳🇴 Norwegian</option>
<option className="bg-[#0d0d15]" value="da">🇩🇰 Danish</option>
<option className="bg-[#0d0d15]" value="fi">🇫🇮 Finnish</option>
<option className="bg-[#0d0d15]" value="tr">🇹🇷 Turkish</option>
<option className="bg-[#0d0d15]" value="he">🇮🇱 Hebrew</option>
</select>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<label className="text-sm font-medium text-gray-300 font-geist">Interests</label>
<span className="text-xs text-gray-500 font-geist">Select up to 2</span>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
<button className="interest-btn flex items-center justify-center gap-2 px-3 py-3 rounded-xl border text-sm font-medium transition-colors cursor-pointer bg-blue-400/10 border-blue-400/20 text-blue-300 font-geist" onclick="selectInterest(this)">
                                            Dragons
                                        </button>
<button className="interest-btn flex items-center justify-center gap-2 px-3 py-3 rounded-xl border text-sm font-medium transition-colors cursor-pointer bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 font-geist" onclick="selectInterest(this)">
                                            Princesses
                                        </button>
<button className="interest-btn flex items-center justify-center gap-2 px-3 py-3 rounded-xl border text-sm font-medium transition-colors cursor-pointer bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 font-geist" onclick="selectInterest(this)">
                                            Dinosaurs
                                        </button>
<button className="interest-btn flex items-center justify-center gap-2 px-3 py-3 rounded-xl border text-sm font-medium transition-colors cursor-pointer bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 font-geist" onclick="selectInterest(this)">
                                            Space
                                        </button>
<button className="interest-btn flex items-center justify-center gap-2 px-3 py-3 rounded-xl border text-sm font-medium transition-colors cursor-pointer bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 font-geist" onclick="selectInterest(this)">
                                            Ocean
                                        </button>
<button className="interest-btn flex items-center justify-center gap-2 px-3 py-3 rounded-xl border text-sm font-medium transition-colors cursor-pointer bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 font-geist" onclick="selectInterest(this)">
                                            Animals
                                        </button>
<button className="interest-btn flex items-center justify-center gap-2 px-3 py-3 rounded-xl border text-sm font-medium transition-colors cursor-pointer bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 font-geist" onclick="selectInterest(this)">
                                            Superheroes
                                        </button>
<button className="interest-btn flex items-center justify-center gap-2 px-3 py-3 rounded-xl border text-sm font-medium transition-colors cursor-pointer bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 font-geist" onclick="selectInterest(this)">
                                            Magic
                                        </button>
<button className="interest-btn flex items-center justify-center gap-2 px-3 py-3 rounded-xl border text-sm font-medium transition-colors cursor-pointer bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 font-geist" onclick="selectInterest(this)">
                                            Sports
                                        </button>
<button className="interest-btn flex items-center justify-center gap-2 px-3 py-3 rounded-xl border text-sm font-medium transition-colors cursor-pointer bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 font-geist" onclick="selectInterest(this)">
                                            Music
                                        </button>
<button className="interest-btn flex items-center justify-center gap-2 px-3 py-3 rounded-xl border text-sm font-medium transition-colors cursor-pointer bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 font-geist" onclick="selectInterest(this)">
                                            Art
                                        </button>
<button className="interest-btn flex items-center justify-center gap-2 px-3 py-3 rounded-xl border text-sm font-medium transition-colors cursor-pointer bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 font-geist" onclick="selectInterest(this)">
                                            Nature
                                        </button>
</div>
</div>

<div className="space-y-3 flex-1">
<label className="text-sm font-medium text-gray-300 font-geist">Story Theme / Life Lesson</label>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
<button className="theme-btn flex gap-2 transition-colors cursor-pointer text-sm font-medium text-green-300 font-geist bg-green-400/10 border-green-400/20 border rounded-xl pt-3 pr-3 pb-3 pl-3 gap-x-2 gap-y-2 items-center justify-center" onclick="selectTheme(this)">
                                            Family
                                        </button>
<button className="theme-btn flex items-center justify-center gap-2 px-3 py-3 rounded-xl border text-sm font-medium transition-colors cursor-pointer bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 font-geist" onclick="selectTheme(this)">
                                            Friendship
                                        </button>
<button className="theme-btn flex items-center justify-center gap-2 px-3 py-3 rounded-xl border text-sm font-medium transition-colors cursor-pointer bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 font-geist" onclick="selectTheme(this)">
                                            Generosity
                                        </button>
<button className="theme-btn flex items-center justify-center gap-2 px-3 py-3 rounded-xl border text-sm font-medium transition-colors cursor-pointer bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 font-geist" onclick="selectTheme(this)">
                                            Compassion
                                        </button>
<button className="theme-btn flex items-center justify-center gap-2 px-3 py-3 rounded-xl border text-sm font-medium transition-colors cursor-pointer bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 font-geist" onclick="selectTheme(this)">
                                            Bravery
                                        </button>
<button className="theme-btn flex items-center justify-center gap-2 px-3 py-3 rounded-xl border text-sm font-medium transition-colors cursor-pointer bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 font-geist" onclick="selectTheme(this)">
                                            Hope
                                        </button>
<button className="theme-btn flex gap-2 transition-colors cursor-pointer hover:bg-white/10 text-sm font-medium text-gray-300 font-geist bg-white/5 border-white/10 border rounded-xl px-3 py-3 space-y-1 gap-x-2 gap-y-3 items-center justify-center" onclick="selectTheme(this)">
                                            Loyalty
                                        </button>
<button className="theme-btn flex items-center justify-center gap-2 px-2 py-3 rounded-xl border text-xs font-medium transition-colors cursor-pointer bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 font-geist" onclick="selectTheme(this)">
                                            Determination
                                        </button>
<button className="theme-btn flex items-center justify-center gap-2 px-3 py-3 rounded-xl border text-sm font-medium transition-colors cursor-pointer bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 font-geist" onclick="selectTheme(this)">
                                            Kindness
                                        </button>
</div>
</div>

<div className="mt-auto space-y-4">
<div className="pt-4 border-t border-white/10">
<button className="w-full inline-flex items-center justify-center gap-2 text-sm font-medium border rounded-xl py-3 text-white bg-white/10 border-white/10 hover:bg-white/15 font-geist" id="share-btn">
<svg className="lucide lucide-share-2 w-4 h-4" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
                                            Share Story
                                        </button>

<div className="hidden" id="social-icons">
<div className="flex items-center justify-center gap-3 pt-4">
<a className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-[#1877F2]/20 hover:border-[#1877F2]/30 transition-colors bg-white/10 border-white/10" href="#" title="Share on Facebook">
<svg className="w-5 h-5 text-white" fill="currentColor" viewbox="0 0 24 24">
<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
</svg>
</a>
<a className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-[#1DA1F2]/20 hover:border-[#1DA1F2]/30 transition-colors bg-white/10 border-white/10" href="#" title="Share on Twitter">
<svg className="w-5 h-5 text-white" fill="currentColor" viewbox="0 0 24 24">
<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
</svg>
</a>
<a className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-[#25D366]/20 hover:border-[#25D366]/30 transition-colors bg-white/10 border-white/10" href="#" title="Share on WhatsApp">
<svg className="w-5 h-5 text-white" fill="currentColor" viewbox="0 0 24 24">
<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
</svg>
</a>
<a className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-[#E1306C]/20 hover:border-[#E1306C]/30 transition-colors bg-white/10 border-white/10" href="#" title="Share on Instagram">
<svg className="w-5 h-5 text-white" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
</svg>
</a>
<a className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/30 transition-colors bg-white/10 border-white/10" href="#" title="Share on LinkedIn">
<svg className="w-5 h-5 text-white" fill="currentColor" viewbox="0 0 24 24">
<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
</svg>
</a>
<a className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-[#FF0000]/20 hover:border-[#FF0000]/30 transition-colors bg-white/10 border-white/10" href="#" title="Share on Pinterest">
<svg className="w-5 h-5 text-white" fill="currentColor" viewbox="0 0 24 24">
<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</section>

<section className="relative z-10 bg-gradient-to-b from-[#000000] to-[#0A0A11]">
<div className="sm:px-6 lg:px-8 max-w-6xl mr-auto ml-auto pt-20 pr-4 pb-20 pl-4">
<div className="text-center mb-16">
<h2 className="sm:text-4xl text-3xl tracking-tight text-white font-playfair font-medium">Everything you need to create amazing stories</h2>
<p className="mt-4 max-w-2xl mx-auto text-blue-300 font-geist">From AI-generated plots to custom illustrations, bring your children's stories to life with professional-quality results.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="relative ring-1 rounded-2xl backdrop-blur ring-white/10 bg-[#111118] overflow-hidden">
<div className="p-6 sm:p-8">
<div className="flex items-center gap-2 mb-4">
<div className="h-8 w-8 flex ring-1 bg-white/5 rounded-lg items-center justify-center ring-white/10">
<svg className="lucide lucide-cpu w-4 h-4 text-gray-400" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<span className="text-sm text-gray-400 font-geist">AI Storytelling</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-white font-geist mb-3">Smart Story Generation</h3>
<p className="text-gray-400 font-geist text-sm mb-6">Our advanced AI creates engaging, age-appropriate stories with compelling characters, meaningful lessons, and educational values that children love. Each story is uniquely crafted to spark imagination while teaching important life skills.</p>
<div className="space-y-3 mb-6">
<div className="flex items-start gap-2">
<svg className="lucide lucide-check w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<p className="text-sm text-gray-300 font-geist"><span className="text-white font-medium">Personalized Characters:</span> Create unique protagonists based on your child's interests and personality</p>
</div>
<div className="flex items-start gap-2">
<svg className="lucide lucide-check w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<p className="text-sm text-gray-300 font-geist"><span className="text-white font-medium">Educational Themes:</span> Stories that teach friendship, courage, kindness, and problem-solving</p>
</div>
<div className="flex items-start gap-2">
<svg className="lucide lucide-check w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<p className="text-sm text-gray-300 font-geist"><span className="text-white font-medium">Multiple Lengths:</span> Short bedtime tales to longer chapter books for different attention spans</p>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-geist">
<svg className="lucide lucide-zap w-3 h-3" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                                Fast Generation
                            </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-geist">
<svg className="lucide lucide-baby w-3 h-3" data-lucide="baby" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"></path><path d="M15 12h.01"></path><path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"></path><path d="M9 12h.01"></path></svg>
                                Age-Appropriate
                            </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-geist">
<svg className="lucide lucide-globe w-3 h-3" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                                Multi-Language
                            </span>
</div>
</div>
</div>

<div className="relative ring-1 rounded-2xl backdrop-blur ring-white/10 bg-[#111118] overflow-hidden">
<div className="p-6 sm:p-8">
<div className="flex items-center gap-2 mb-4">
<div className="h-8 w-8 flex ring-1 bg-white/5 rounded-lg items-center justify-center ring-white/10">
<svg className="lucide lucide-palette w-4 h-4 text-gray-400" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<span className="text-sm text-gray-400 font-geist">Custom Artwork</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-white font-geist mb-3">Beautiful Illustrations</h3>
<p className="text-gray-400 font-geist text-sm mb-6">Every story comes with unique, colorful illustrations that match your narrative perfectly. Choose from multiple art styles to create the perfect visual experience for your child.</p>

<div className="grid grid-cols-2 gap-3 mb-6">
<div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-amber-900/30 to-orange-900/30">
<img alt="Watercolor illustration" className="opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/11806122-8df3-4006-ba33-c0eb18f98182_800w.png?w=800&amp;q=80"/>
<div className="absolute bottom-2 left-2 right-2 flex justify-center">
<span className="px-2 py-1 rounded-full bg-black/50 backdrop-blur text-xs text-white/80 font-geist flex items-center gap-1">
<svg className="lucide lucide-droplets w-3 h-3" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</span>
</div>
</div>
<div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-green-900/30 to-teal-900/30">
<img alt="Cartoon illustration" className="opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c6598208-7436-43c7-be5b-f74bffa8d50c_800w.png?w=800&amp;q=80"/>
</div>
<div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-blue-900/30 to-indigo-900/30">
<img alt="Fantasy illustration" className="opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e5853929-e94c-482c-aae8-274fb8fc87bc_800w.png?w=800&amp;q=80"/>
</div>
<div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-pink-900/30">
<img alt="Modern illustration" className="opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/65323165-aed7-4b3e-acad-4170be1a87e3_800w.png?w=800&amp;q=80"/>
<div className="absolute bottom-2 left-2 right-2 flex justify-center">
<span className="px-2 py-1 rounded-full bg-black/50 backdrop-blur text-xs text-white/80 font-geist flex items-center gap-1">
<svg className="lucide lucide-star w-3 h-3" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</span>
</div>
</div>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 text-sm font-medium border rounded-xl py-3 text-white bg-white/5 border-white/10 hover:bg-white/10 font-geist transition-colors">
<svg className="lucide lucide-wand-2 w-4 h-4" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
                            Customize Style
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 bg-[#0A0A11]" id="gallery">
<div className="sm:px-6 lg:px-8 max-w-6xl mr-auto ml-auto pt-12 pr-4 pb-20 pl-4">
<h2 className="text-2xl tracking-tight text-white font-playfair font-medium mb-8">Gallery</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-2xl overflow-hidden bg-[#111118] ring-1 ring-white/10 hover:ring-white/20 transition-all">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Luna's Forest Friends" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1fc22f06-a8f9-4165-ab3d-90cd040bb533_800w.png?w=800&amp;q=80"/>
</div>
<div className="p-4">
<div className="flex items-center gap-1.5 mb-2">
<svg className="lucide lucide-heart w-3 h-3 text-gray-500" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="text-xs text-gray-500 font-geist">Friendship</span>
</div>
<h3 className="text-base font-medium text-white font-geist mb-1">Luna's Forest Friends</h3>
<p className="text-sm text-gray-400 font-geist">A brave little fox discovers the magic of friendship in an enchanted forest.</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-[#111118] ring-1 ring-white/10 hover:ring-white/20 transition-all">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Deep Sea Wonders" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a9a112ea-3c8e-41d5-8d86-44e3db02a16f_800w.png?w=800&amp;q=80"/>
</div>
<div className="p-4">
<div className="flex items-center gap-1.5 mb-2">
<svg className="lucide lucide-compass w-3 h-3 text-gray-500" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-xs text-gray-500 font-geist">Discovery</span>
</div>
<h3 className="text-base font-medium text-white font-geist mb-1">Deep Sea Wonders</h3>
<p className="text-sm text-gray-400 font-geist">A young mermaid explores the colorful coral reefs and learns about ocean conservation.</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-[#111118] ring-1 ring-white/10 hover:ring-white/20 transition-all">
<div className="aspect-[4/3] overflow-hidden">
<img alt="The Enchanted Garden" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c8c3dc33-4000-42a7-84cd-4c833653cf35_800w.png?w=800&amp;q=80"/>
</div>
<div className="p-4">
<div className="flex items-center gap-1.5 mb-2">
<svg className="lucide lucide-sparkles w-3 h-3 text-gray-500" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-xs text-gray-500 font-geist">Magic</span>
</div>
<h3 className="text-base font-medium text-white font-geist mb-1">The Enchanted Garden</h3>
<p className="text-sm text-gray-400 font-geist">A curious child discovers a secret garden where flowers sing and butterflies tell stories.</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-[#111118] ring-1 ring-white/10 hover:ring-white/20 transition-all">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Journey to the Stars" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/55e2a042-8954-42c5-a6ab-277b528f8cf6_800w.png?w=800&amp;q=80"/>
</div>
<div className="p-4">
<div className="flex items-center gap-1.5 mb-2">
<svg className="lucide lucide-rocket w-3 h-3 text-gray-500" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
<span className="text-xs text-gray-500 font-geist">Adventure</span>
</div>
<h3 className="text-base font-medium text-white font-geist mb-1">Journey to the Stars</h3>
<p className="text-sm text-gray-400 font-geist">A curious astronaut explores distant galaxies and makes friends with alien creatures along the way.</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-[#111118] ring-1 ring-white/10 hover:ring-white/20 transition-all">
<div className="aspect-[4/3] overflow-hidden">
<img alt="The Friendly Dragon" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d1a7d057-2211-4b1e-8e88-166572cecfff_800w.png?w=800&amp;q=80"/>
</div>
<div className="p-4">
<div className="flex items-center gap-1.5 mb-2">
<svg className="lucide lucide-shield w-3 h-3 text-gray-500" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span className="text-xs text-gray-500 font-geist">Bravery</span>
</div>
<h3 className="text-base font-medium text-white font-geist mb-1">The Friendly Dragon</h3>
<p className="text-sm text-gray-400 font-geist">A shy dragon overcomes fear and discovers the courage to make new friends.</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-[#111118] ring-1 ring-white/10 hover:ring-white/20 transition-all">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Dino Discovery" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1fc22f06-a8f9-4165-ab3d-90cd040bb533_800w.png?w=800&amp;q=80"/>
</div>
<div className="p-4">
<div className="flex items-center gap-1.5 mb-2">
<svg className="lucide lucide-footprints w-3 h-3 text-gray-500" data-lucide="footprints" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"></path><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"></path><path d="M16 17h4"></path><path d="M4 13h4"></path></svg>
<span className="text-xs text-gray-500 font-geist">Adventure</span>
</div>
<h3 className="text-base font-medium text-white font-geist mb-1">Dino Discovery</h3>
<p className="text-sm text-gray-400 font-geist">Travel back in time to meet friendly dinosaurs and learn about prehistoric life.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-white/5 bg-[#0A0A11]">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="space-y-4">
<div className="flex items-center gap-2">
<img alt="FunImagination Logo" className="w-20 h-20 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9d494c0b-2796-408f-885c-cd342def7eb4_320w.png?w=800&amp;q=80"/>
<span className="text-base font-medium text-white font-geist">FunImagination</span>
</div>
<p className="text-sm text-gray-400 font-geist max-w-xs">Create magical, personalized children's books with AI-powered storytelling and beautiful custom illustrations.</p>
</div>

<div className="space-y-4">
<h4 className="text-sm font-medium text-white font-geist">Quick Links</h4>
<nav className="flex flex-col gap-2">
<a className="text-sm text-gray-400 hover:text-white font-geist transition-colors" href="#create-story-section">Create Story</a>
<a className="text-sm text-gray-400 hover:text-white font-geist transition-colors" href="#gallery">Gallery</a>
<a className="text-sm text-gray-400 hover:text-white font-geist transition-colors" href="library.html">My Library</a>
</nav>
</div>

<div className="space-y-4">
<h4 className="text-sm font-medium text-white font-geist">Support</h4>
<nav className="flex flex-col gap-2">
<a className="text-sm text-gray-400 hover:text-white font-geist transition-colors" href="#">Help Center</a>
<a className="text-sm text-gray-400 hover:text-white font-geist transition-colors" href="#">Privacy Policy</a>
<a className="text-sm text-gray-400 hover:text-white font-geist transition-colors" href="#">Terms of Service</a>
</nav>
</div>
</div>
<div className="mt-12 pt-8 border-t border-white/5">
<p className="text-sm text-gray-500 font-geist text-center">© 2024 FunImagination. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
