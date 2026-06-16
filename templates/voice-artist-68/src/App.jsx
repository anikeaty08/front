import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        function switchTab(tabName) {
            // Hide all tab content
            document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
            // Show selected tab
            document.getElementById('tab-' + tabName).classList.remove('hidden');
            // Update tab buttons
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('tab-active');
                btn.classList.add('text-slate-500');
            });
            const activeBtn = document.querySelector(`[data-tab="${tabName}"]`);
            activeBtn.classList.add('tab-active');
            activeBtn.classList.remove('text-slate-500');
        }

        function toggleAudioPlay(btn) {
            const icon = btn.querySelector('i');
            const isPlaying = btn.dataset.playing === 'true';
            if (isPlaying) {
                btn.dataset.playing = 'false';
                icon.setAttribute('data-lucide', 'play');
                icon.classList.add('ml-0.5');
            } else {
                // Stop all other playing buttons
                document.querySelectorAll('[data-playing="true"]').forEach(b => {
                    b.dataset.playing = 'false';
                    const i = b.querySelector('i');
                    i.setAttribute('data-lucide', 'play');
                    i.classList.add('ml-0.5');
                });
                btn.dataset.playing = 'true';
                icon.setAttribute('data-lucide', 'pause');
                icon.classList.remove('ml-0.5');
            }
            lucide.createIcons();
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-6">
<a className="flex items-center gap-2" href="#">
<div className="flex items-end gap-0.5 h-5">
<span className="waveform-bar w-1 h-2 bg-violet-400 rounded-full inline-block"></span>
<span className="waveform-bar w-1 h-4 bg-violet-500 rounded-full inline-block"></span>
<span className="waveform-bar w-1 h-5 bg-violet-400 rounded-full inline-block"></span>
<span className="waveform-bar w-1 h-3 bg-violet-500 rounded-full inline-block"></span>
<span className="waveform-bar w-1 h-4 bg-violet-400 rounded-full inline-block"></span>
</div>
<span className="text-xl font-semibold tracking-tight text-white">VoiceHunt</span>
</a>
<div className="hidden md:flex items-center gap-1">
<a className="text-sm font-medium text-slate-400 px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition" href="#">Find Voices</a>
<a className="text-sm font-medium text-slate-400 px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition" href="#">How It Works</a>
<a className="text-sm font-medium text-slate-400 px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition" href="#">Pricing</a>
</div>
</div>
<div className="hidden md:flex items-center gap-3">
<a className="text-sm font-medium text-slate-400 hover:text-white transition" href="#">Log in</a>
<a className="text-sm font-semibold text-slate-900 bg-gradient-to-r from-lime-400 to-green-400 hover:from-lime-300 hover:to-green-300 px-4 py-2 rounded-lg transition flex items-center gap-1.5" href="#">
                        Browse Talent
                        <i className="w-4 h-4" data-lucide="chevron-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
<button className="md:hidden p-2 text-white" onclick="document.getElementById('mobileMenu').classList.toggle('hidden')">
<i className="w-6 h-6" data-lucide="menu" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
<div className="hidden md:hidden border-t border-white/5 bg-slate-950/95 backdrop-blur-xl px-4 py-4 space-y-1" id="mobileMenu">
<a className="block text-sm font-medium text-slate-400 px-3 py-2.5 rounded-lg hover:bg-white/5" href="#">Find Voices</a>
<a className="block text-sm font-medium text-slate-400 px-3 py-2.5 rounded-lg hover:bg-white/5" href="#">How It Works</a>
<a className="block text-sm font-medium text-slate-400 px-3 py-2.5 rounded-lg hover:bg-white/5" href="#">Pricing</a>
<div className="pt-3 border-t border-white/5 flex flex-col gap-2">
<a className="text-sm font-medium text-center text-white bg-white/10 px-4 py-2.5 rounded-lg" href="#">Log in</a>
<a className="text-sm font-semibold text-center text-slate-900 bg-gradient-to-r from-lime-400 to-green-400 px-4 py-2.5 rounded-lg" href="#">Browse Talent</a>
</div>
</div>
</nav>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
<nav className="flex items-center gap-2 text-xs text-slate-500">
<a className="hover:text-white transition" href="#">Home</a>
<i className="w-3 h-3" data-lucide="chevron-right" style={{strokeWidth: '1.5'}}></i>
<a className="hover:text-white transition" href="#">Voice Artists</a>
<i className="w-3 h-3" data-lucide="chevron-right" style={{strokeWidth: '1.5'}}></i>
<a className="hover:text-white transition" href="#">English</a>
<i className="w-3 h-3" data-lucide="chevron-right" style={{strokeWidth: '1.5'}}></i>
<span className="text-slate-300">Sarah Mitchell</span>
</nav>
</div>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 fade-in">
<div className="relative bg-gradient-to-br from-violet-600/10 via-slate-900/50 to-teal-600/5 border border-white/[0.06] rounded-3xl overflow-hidden">

<div className="h-32 sm:h-44 bg-gradient-to-r from-violet-600/20 via-purple-600/10 to-teal-600/15 relative">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.2),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(20,184,166,0.1),transparent_60%)]"></div>
</div>
<div className="px-6 sm:px-8 lg:px-10 pb-8">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between -mt-12 sm:-mt-16 gap-6">

<div className="flex flex-col sm:flex-row items-start sm:items-end gap-5">

<div className="relative flex-shrink-0">
<div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-semibold text-3xl sm:text-4xl border-4 border-slate-950 shadow-2xl">
                                SM
                            </div>
<div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-green-500 border-3 border-slate-950 flex items-center justify-center" style={{borderWidth: '3px'}}>
<i className="w-3.5 h-3.5 text-white" data-lucide="check" style={{strokeWidth: '2.5'}}></i>
</div>
</div>

<div className="pb-1">
<div className="flex items-center gap-2.5 mb-1">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Sarah Mitchell</h1>
<span className="inline-flex items-center gap-1 bg-violet-500/15 border border-violet-500/20 text-violet-300 text-xs font-semibold px-2 py-0.5 rounded-full">
<i className="w-3 h-3" data-lucide="crown" style={{strokeWidth: '1.5'}}></i>
                                    Pro
                                </span>
</div>
<p className="text-sm text-slate-400 mb-3">Professional Voice-Over Artist · English (American)</p>
<div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
<span className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="map-pin" style={{strokeWidth: '1.5'}}></i>
                                    Los Angeles, CA
                                </span>
<span className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="clock" style={{strokeWidth: '1.5'}}></i>
                                    Usually responds in 2h
                                </span>
<span className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="calendar" style={{strokeWidth: '1.5'}}></i>
                                    Member since 2019
                                </span>
<span className="flex items-center gap-1.5">
<span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                    Online now
                                </span>
</div>
</div>
</div>

<div className="flex flex-wrap items-center gap-3">
<button className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2.5 rounded-xl transition">
<i className="w-4 h-4" data-lucide="heart" style={{strokeWidth: '1.5'}}></i>
                            Save
                        </button>
<button className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2.5 rounded-xl transition">
<i className="w-4 h-4" data-lucide="share-2" style={{strokeWidth: '1.5'}}></i>
                            Share
                        </button>
<button className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-500 px-5 py-2.5 rounded-xl transition">
<i className="w-4 h-4" data-lucide="message-circle" style={{strokeWidth: '1.5'}}></i>
                            Contact
                        </button>
<button className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 px-5 py-2.5 rounded-xl transition shadow-lg shadow-yellow-500/20">
<i className="w-4 h-4" data-lucide="send" style={{strokeWidth: '1.5'}}></i>
                            Hire Now
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
<div className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3.5 text-center">
<p className="text-lg font-semibold tracking-tight text-white">4.9</p>
<div className="flex items-center justify-center gap-0.5 mb-0.5">
<i className="w-3 h-3 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-3 h-3 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-3 h-3 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-3 h-3 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-3 h-3 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-xs text-slate-500">Rating</p>
</div>
<div className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3.5 text-center">
<p className="text-lg font-semibold tracking-tight text-white">247</p>
<p className="text-xs text-slate-500">Projects Done</p>
</div>
<div className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3.5 text-center">
<p className="text-lg font-semibold tracking-tight text-white">98%</p>
<p className="text-xs text-slate-500">On-time Delivery</p>
</div>
<div className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3.5 text-center">
<p className="text-lg font-semibold tracking-tight text-white">156</p>
<p className="text-xs text-slate-500">Repeat Clients</p>
</div>
<div className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3.5 text-center">
<p className="text-lg font-semibold tracking-tight text-white">&lt;2h</p>
<p className="text-xs text-slate-500">Response Time</p>
</div>
<div className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3.5 text-center">
<p className="text-lg font-semibold tracking-tight text-white">24h</p>
<p className="text-xs text-slate-500">Avg. Delivery</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
<div className="grid lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-8">

<div className="border-b border-white/[0.06]">
<div className="flex gap-0 overflow-x-auto" id="profileTabs">
<button className="tab-btn tab-active text-sm font-medium px-5 py-3 border-b-2 border-transparent transition whitespace-nowrap" data-tab="demos" onclick="switchTab('demos')">
                            Voice Demos
                        </button>
<button className="tab-btn text-sm font-medium text-slate-500 px-5 py-3 border-b-2 border-transparent hover:text-slate-300 transition whitespace-nowrap" data-tab="about" onclick="switchTab('about')">
                            About
                        </button>
<button className="tab-btn text-sm font-medium text-slate-500 px-5 py-3 border-b-2 border-transparent hover:text-slate-300 transition whitespace-nowrap" data-tab="portfolio" onclick="switchTab('portfolio')">
                            Portfolio
                        </button>
<button className="tab-btn text-sm font-medium text-slate-500 px-5 py-3 border-b-2 border-transparent hover:text-slate-300 transition whitespace-nowrap" data-tab="reviews" onclick="switchTab('reviews')">
                            Reviews (89)
                        </button>
</div>
</div>

<div className="tab-content space-y-4" id="tab-demos">
<div className="flex items-center justify-between mb-2">
<h2 className="text-lg font-semibold tracking-tight text-white">Voice Demos</h2>
<span className="text-xs text-slate-500">6 demos</span>
</div>

<div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 card-glow transition hover:bg-white/[0.04]">
<div className="flex items-start justify-between gap-4 mb-3">
<div>
<h3 className="text-sm font-semibold text-white mb-0.5">Commercial — Warm &amp; Friendly</h3>
<p className="text-xs text-slate-500">Product commercial · 30 sec · English (American)</p>
</div>
<div className="flex items-center gap-1.5">
<span className="text-xs bg-violet-500/10 border border-violet-500/20 text-violet-300 px-2 py-0.5 rounded-md">Commercial</span>
<span className="text-xs bg-teal-500/10 border border-teal-500/20 text-teal-300 px-2 py-0.5 rounded-md">Warm</span>
</div>
</div>
<div className="bg-white/[0.03] rounded-xl p-4">
<div className="flex items-center gap-4">
<button className="w-10 h-10 rounded-full bg-violet-600 hover:bg-violet-500 flex items-center justify-center transition flex-shrink-0 shadow-lg shadow-violet-600/20" onclick="toggleAudioPlay(this)">
<i className="w-4 h-4 text-white ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</button>
<div className="flex-1">
<div className="flex items-end gap-px h-8 mb-2">
<span className="w-1 h-2 bg-violet-400/60 rounded-full"></span>
<span className="w-1 h-4 bg-violet-400/70 rounded-full"></span>
<span className="w-1 h-6 bg-violet-400/80 rounded-full"></span>
<span className="w-1 h-3 bg-violet-400/70 rounded-full"></span>
<span className="w-1 h-8 bg-violet-400 rounded-full"></span>
<span className="w-1 h-5 bg-violet-400/80 rounded-full"></span>
<span className="w-1 h-3 bg-violet-400/60 rounded-full"></span>
<span className="w-1 h-6 bg-violet-400/70 rounded-full"></span>
<span className="w-1 h-4 bg-violet-400 rounded-full"></span>
<span className="w-1 h-2 bg-violet-400/50 rounded-full"></span>
<span className="w-1 h-5 bg-violet-400/70 rounded-full"></span>
<span className="w-1 h-7 bg-violet-400/80 rounded-full"></span>
<span className="w-1 h-4 bg-slate-600 rounded-full"></span>
<span className="w-1 h-6 bg-slate-600 rounded-full"></span>
<span className="w-1 h-3 bg-slate-600 rounded-full"></span>
<span className="w-1 h-5 bg-slate-600 rounded-full"></span>
<span className="w-1 h-7 bg-slate-600 rounded-full"></span>
<span className="w-1 h-2 bg-slate-600 rounded-full"></span>
<span className="w-1 h-4 bg-slate-600 rounded-full"></span>
<span className="w-1 h-6 bg-slate-600 rounded-full"></span>
<span className="w-1 h-3 bg-slate-600 rounded-full"></span>
<span className="w-1 h-5 bg-slate-600 rounded-full"></span>
<span className="w-1 h-8 bg-slate-600 rounded-full"></span>
<span className="w-1 h-4 bg-slate-600 rounded-full"></span>
<span className="w-1 h-2 bg-slate-600 rounded-full"></span>
<span className="w-1 h-6 bg-slate-600 rounded-full"></span>
<span className="w-1 h-3 bg-slate-600 rounded-full"></span>
<span className="w-1 h-5 bg-slate-600 rounded-full"></span>
<span className="w-1 h-4 bg-slate-600 rounded-full"></span>
<span className="w-1 h-7 bg-slate-600 rounded-full"></span>
<span className="w-1 h-2 bg-slate-600 rounded-full"></span>
<span className="w-1 h-5 bg-slate-600 rounded-full"></span>
<span className="w-1 h-3 bg-slate-600 rounded-full"></span>
<span className="w-1 h-6 bg-slate-600 rounded-full"></span>
<span className="hidden sm:inline-block w-1 h-4 bg-slate-600 rounded-full"></span>
<span className="hidden sm:inline-block w-1 h-5 bg-slate-600 rounded-full"></span>
<span className="hidden sm:inline-block w-1 h-2 bg-slate-600 rounded-full"></span>
<span className="hidden sm:inline-block w-1 h-7 bg-slate-600 rounded-full"></span>
<span className="hidden sm:inline-block w-1 h-3 bg-slate-600 rounded-full"></span>
<span className="hidden sm:inline-block w-1 h-6 bg-slate-600 rounded-full"></span>
<span className="hidden md:inline-block w-1 h-4 bg-slate-600 rounded-full"></span>
<span className="hidden md:inline-block w-1 h-5 bg-slate-600 rounded-full"></span>
<span className="hidden md:inline-block w-1 h-2 bg-slate-600 rounded-full"></span>
<span className="hidden md:inline-block w-1 h-7 bg-slate-600 rounded-full"></span>
<span className="hidden md:inline-block w-1 h-3 bg-slate-600 rounded-full"></span>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-slate-500">0:00</span>
<span className="text-xs text-slate-500">0:30</span>
</div>
</div>
<button className="p-2 text-slate-500 hover:text-white transition">
<i className="w-4 h-4" data-lucide="download" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</div>

<div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 card-glow transition hover:bg-white/[0.04]">
<div className="flex items-start justify-between gap-4 mb-3">
<div>
<h3 className="text-sm font-semibold text-white mb-0.5">Narration — Documentary Style</h3>
<p className="text-xs text-slate-500">Documentary narration · 45 sec · English (American)</p>
</div>
<div className="flex items-center gap-1.5">
<span className="text-xs bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded-md">Narration</span>
<span className="text-xs bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-md">Authoritative</span>
</div>
</div>
<div className="bg-white/[0.03] rounded-xl p-4">
<div className="flex items-center gap-4">
<button className="w-10 h-10 rounded-full bg-yellow-600 hover:bg-yellow-500 flex items-center justify-center transition flex-shrink-0 shadow-lg shadow-yellow-600/20" onclick="toggleAudioPlay(this)">
<i className="w-4 h-4 text-white ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</button>
<div className="flex-1">
<div className="flex items-end gap-px h-8 mb-2">
<span className="w-1 h-5 bg-slate-600 rounded-full"></span>
<span className="w-1 h-3 bg-slate-600 rounded-full"></span>
<span className="w-1 h-7 bg-slate-600 rounded-full"></span>
<span className="w-1 h-4 bg-slate-600 rounded-full"></span>
<span className="w-1 h-6 bg-slate-600 rounded-full"></span>
<span className="w-1 h-2 bg-slate-600 rounded-full"></span>
<span className="w-1 h-8 bg-slate-600 rounded-full"></span>
<span className="w-1 h-3 bg-slate-600 rounded-full"></span>
<span className="w-1 h-5 bg-slate-600 rounded-full"></span>
<span className="w-1 h-7 bg-slate-600 rounded-full"></span>
<span className="w-1 h-4 bg-slate-600 rounded-full"></span>
<span className="w-1 h-6 bg-slate-600 rounded-full"></span>
<span className="w-1 h-2 bg-slate-600 rounded-full"></span>
<span className="w-1 h-5 bg-slate-600 rounded-full"></span>
<span className="w-1 h-3 bg-slate-600 rounded-full"></span>
<span className="w-1 h-7 bg-slate-600 rounded-full"></span>
<span className="w-1 h-4 bg-slate-600 rounded-full"></span>
<span className="w-1 h-8 bg-slate-600 rounded-full"></span>
<span className="w-1 h-3 bg-slate-600 rounded-full"></span>
<span className="w-1 h-6 bg-slate-600 rounded-full"></span>
<span className="w-1 h-5 bg-slate-600 rounded-full"></span>
<span className="w-1 h-2 bg-slate-600 rounded-full"></span>
<span className="w-1 h-7 bg-slate-600 rounded-full"></span>
<span className="w-1 h-4 bg-slate-600 rounded-full"></span>
<span className="w-1 h-5 bg-slate-600 rounded-full"></span>
<span className="w-1 h-3 bg-slate-600 rounded-full"></span>
<span className="w-1 h-6 bg-slate-600 rounded-full"></span>
<span className="w-1 h-8 bg-slate-600 rounded-full"></span>
<span className="w-1 h-2 bg-slate-600 rounded-full"></span>
<span className="w-1 h-5 bg-slate-600 rounded-full"></span>
<span className="w-1 h-4 bg-slate-600 rounded-full"></span>
<span className="w-1 h-7 bg-slate-600 rounded-full"></span>
<span className="w-1 h-3 bg-slate-600 rounded-full"></span>
<span className="w-1 h-6 bg-slate-600 rounded-full"></span>
<span className="hidden sm:inline-block w-1 h-4 bg-slate-600 rounded-full"></span>
<span className="hidden sm:inline-block w-1 h-5 bg-slate-600 rounded-full"></span>
<span className="hidden sm:inline-block w-1 h-2 bg-slate-600 rounded-full"></span>
<span className="hidden sm:inline-block w-1 h-7 bg-slate-600 rounded-full"></span>
<span className="hidden sm:inline-block w-1 h-3 bg-slate-600 rounded-full"></span>
<span className="hidden sm:inline-block w-1 h-6 bg-slate-600 rounded-full"></span>
<span className="hidden md:inline-block w-1 h-4 bg-slate-600 rounded-full"></span>
<span className="hidden md:inline-block w-1 h-5 bg-slate-600 rounded-full"></span>
<span className="hidden md:inline-block w-1 h-2 bg-slate-600 rounded-full"></span>
<span className="hidden md:inline-block w-1 h-7 bg-slate-600 rounded-full"></span>
<span className="hidden md:inline-block w-1 h-3 bg-slate-600 rounded-full"></span>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-slate-500">0:00</span>
<span className="text-xs text-slate-500">0:45</span>
</div>
</div>
<button className="p-2 text-slate-500 hover:text-white transition">
<i className="w-4 h-4" data-lucide="download" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</div>

<div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 card-glow transition hover:bg-white/[0.04]">
<div className="flex items-start justify-between gap-4 mb-3">
<div>
<h3 className="text-sm font-semibold text-white mb-0.5">E-Learning — Conversational</h3>
<p className="text-xs text-slate-500">Educational content · 60 sec · English (American)</p>
</div>
<div className="flex items-center gap-1.5">
<span className="text-xs bg-green-500/10 border border-green-500/20 text-green-300 px-2 py-0.5 rounded-md">E-Learning</span>
<span className="text-xs bg-rose-500/10 border border-rose-500/20 text-rose-300 px-2 py-0.5 rounded-md">Conversational</span>
</div>
</div>
<div className="bg-white/[0.03] rounded-xl p-4">
<div className="flex items-center gap-4">
<button className="w-10 h-10 rounded-full bg-green-600 hover:bg-green-500 flex items-center justify-center transition flex-shrink-0 shadow-lg shadow-green-600/20" onclick="toggleAudioPlay(this)">
<i className="w-4 h-4 text-white ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</button>
<div className="flex-1">
<div className="flex items-end gap-px h-8 mb-2">
<span className="w-1 h-3 bg-slate-600 rounded-full"></span>
<span className="w-1 h-6 bg-slate-600 rounded-full"></span>
<span className="w-1 h-4 bg-slate-600 rounded-full"></span>
<span className="w-1 h-7 bg-slate-600 rounded-full"></span>
<span className="w-1 h-2 bg-slate-600 rounded-full"></span>
<span className="w-1 h-5 bg-slate-600 rounded-full"></span>
<span className="w-1 h-8 bg-slate-600 rounded-full"></span>
<span className="w-1 h-3 bg-slate-600 rounded-full"></span>
<span className="w-1 h-6 bg-slate-600 rounded-full"></span>
<span className="w-1 h-4 bg-slate-600 rounded-full"></span>
<span className="w-1 h-5 bg-slate-600 rounded-full"></span>
<span className="w-1 h-7 bg-slate-600 rounded-full"></span>
<span className="w-1 h-2 bg-slate-600 rounded-full"></span>
<span className="w-1 h-6 bg-slate-600 rounded-full"></span>
<span className="w-1 h-3 bg-slate-600 rounded-full"></span>
<span className="w-1 h-5 bg-slate-600 rounded-full"></span>
<span className="w-1 h-8 bg-slate-600 rounded-full"></span>
<span className="w-1 h-4 bg-slate-600 rounded-full"></span>
<span className="w-1 h-6 bg-slate-600 rounded-full"></span>
<span className="w-1 h-3 bg-slate-600 rounded-full"></span>
<span className="w-1 h-7 bg-slate-600 rounded-full"></span>
<span className="w-1 h-2 bg-slate-600 rounded-full"></span>
<span className="w-1 h-5 bg-slate-600 rounded-full"></span>
<span className="w-1 h-4 bg-slate-600 rounded-full"></span>
<span className="w-1 h-6 bg-slate-600 rounded-full"></span>
<span className="w-1 h-3 bg-slate-600 rounded-full"></span>
<span className="w-1 h-8 bg-slate-600 rounded-full"></span>
<span className="w-1 h-5 bg-slate-600 rounded-full"></span>
<span className="w-1 h-2 bg-slate-600 rounded-full"></span>
<span className="w-1 h-7 bg-slate-600 rounded-full"></span>
<span className="w-1 h-4 bg-slate-600 rounded-full"></span>
<span className="w-1 h-6 bg-slate-600 rounded-full"></span>
<span className="w-1 h-3 bg-slate-600 rounded-full"></span>
<span className="w-1 h-5 bg-slate-600 rounded-full"></span>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-slate-500">0:00</span>
<span className="text-xs text-slate-500">1:00</span>
</div>
</div>
<button className="p-2 text-slate-500 hover:text-white transition">
<i className="w-4 h-4" data-lucide="download" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</div>

<div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 card-glow transition hover:bg-white/[0.04]">
<div className="flex items-start justify-between gap-4 mb-3">
<div>
<h3 className="text-sm font-semibold text-white mb-0.5">Audiobook — Character Voices</h3>
<p className="text-xs text-slate-500">Fiction narration · 90 sec · English (American)</p>
</div>
<div className="flex items-center gap-1.5">
<span className="text-xs bg-rose-500/10 border border-rose-500/20 text-rose-300 px-2 py-0.5 rounded-md">Audiobook</span>
<span className="text-xs bg-purple-500/10 border border-purple-500/20 text-purple-300 px-2 py-0.5 rounded-md">Characters</span>
</div>
</div>
<div className="bg-white/[0.03] rounded-xl p-4">
<div className="flex items-center gap-4">
<button className="w-10 h-10 rounded-full bg-rose-600 hover:bg-rose-500 flex items-center justify-center transition flex-shrink-0 shadow-lg shadow-rose-600/20" onclick="toggleAudioPlay(this)">
<i className="w-4 h-4 text-white ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</button>
<div className="flex-1">
<div className="flex items-end gap-px h-8 mb-2">
<span className="w-1 h-4 bg-slate-600 rounded-full"></span>
<span className="w-1 h-7 bg-slate-600 rounded-full"></span>
<span className="w-1 h-3 bg-slate-600 rounded-full"></span>
<span className="w-1 h-5 bg-slate-600 rounded-full"></span>
<span className="w-1 h-8 bg-slate-600 rounded-full"></span>
<span className="w-1 h-2 bg-slate-600 rounded-full"></span>
<span className="w-1 h-6 bg-slate-600 rounded-full"></span>
<span className="w-1 h-4 bg-slate-600 rounded-full"></span>
<span className="w-1 h-7 bg-slate-600 rounded-full"></span>
<span className="w-1 h-3 bg-slate-600 rounded-full"></span>
<span className="w-1 h-5 bg-slate-600 rounded-full"></span>
<span className="w-1 h-6 bg-slate-600 rounded-full"></span>
<span className="w-1 h-2 bg-slate-600 rounded-full"></span>
<span className="w-1 h-8 bg-slate-600 rounded-full"></span>
<span className="w-1 h-4 bg-slate-600 rounded-full"></span>
<span className="w-1 h-5 bg-slate-600 rounded-full"></span>
<span className="w-1 h-3 bg-slate-600 rounded-full"></span>
<span className="w-1 h-7 bg-slate-600 rounded-full"></span>
<span className="w-1 h-6 bg-slate-600 rounded-full"></span>
<span className="w-1 h-2 bg-slate-600 rounded-full"></span>
<span className="w-1 h-5 bg-slate-600 rounded-full"></span>
<span className="w-1 h-4 bg-slate-600 rounded-full"></span>
<span className="w-1 h-8 bg-slate-600 rounded-full"></span>
<span className="w-1 h-3 bg-slate-600 rounded-full"></span>
<span className="w-1 h-6 bg-slate-600 rounded-full"></span>
<span className="w-1 h-5 bg-slate-600 rounded-full"></span>
<span className="w-1 h-7 bg-slate-600 rounded-full"></span>
<span className="w-1 h-2 bg-slate-600 rounded-full"></span>
<span className="w-1 h-4 bg-slate-600 rounded-full"></span>
<span className="w-1 h-6 bg-slate-600 rounded-full"></span>
<span className="w-1 h-3 bg-slate-600 rounded-full"></span>
<span className="w-1 h-5 bg-slate-600 rounded-full"></span>
<span className="w-1 h-7 bg-slate-600 rounded-full"></span>
<span className="w-1 h-4 bg-slate-600 rounded-full"></span>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-slate-500">0:00</span>
<span className="text-xs text-slate-500">1:30</span>
</div>
</div>
<button className="p-2 text-slate-500 hover:text-white transition">
<i className="w-4 h-4" data-lucide="download" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</div>
</div>

<div className="tab-content hidden space-y-6" id="tab-about">
<div>
<h2 className="text-lg font-semibold tracking-tight text-white mb-3">About Sarah</h2>
<div className="text-sm text-slate-400 leading-relaxed space-y-3">
<p>Hi! I'm Sarah, a full-time professional voice-over artist based in Los Angeles with over 12 years of experience in the industry. I specialize in warm, engaging, and conversational reads that connect with audiences.</p>
<p>My studio is equipped with a Neumann U87 microphone, Universal Audio Apollo interface, and professional acoustic treatment, ensuring broadcast-quality audio on every project. I deliver WAV, MP3, or AIFF formats — whatever you need.</p>
<p>I've had the pleasure of working with brands like Nike, Microsoft, Audible, and countless startups and indie creators. Whether it's a 15-second commercial or a full-length audiobook, I bring professionalism, creativity, and a quick turnaround to every project.</p>
</div>
</div>
<div>
<h3 className="text-base font-semibold text-white mb-3">Equipment &amp; Studio</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3">
<i className="w-4 h-4 text-violet-400 flex-shrink-0" data-lucide="mic" style={{strokeWidth: '1.5'}}></i>
<div>
<p className="text-xs font-medium text-white">Neumann U87</p>
<p className="text-xs text-slate-500">Condenser microphone</p>
</div>
</div>
<div className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3">
<i className="w-4 h-4 text-teal-400 flex-shrink-0" data-lucide="cpu" style={{strokeWidth: '1.5'}}></i>
<div>
<p className="text-xs font-medium text-white">Universal Audio Apollo</p>
<p className="text-xs text-slate-500">Audio interface</p>
</div>
</div>
<div className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3">
<i className="w-4 h-4 text-yellow-400 flex-shrink-0" data-lucide="monitor" style={{strokeWidth: '1.5'}}></i>
<div>
<p className="text-xs font-medium text-white">Pro Tools / Adobe Audition</p>
<p className="text-xs text-slate-500">DAW software</p>
</div>
</div>
<div className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3">
<i className="w-4 h-4 text-green-400 flex-shrink-0" data-lucide="home" style={{strokeWidth: '1.5'}}></i>
<div>
<p className="text-xs font-medium text-white">Treated Home Studio</p>
<p className="text-xs text-slate-500">Professional acoustics</p>
</div>
</div>
</div>
</div>
<div>
<h3 className="text-base font-semibold text-white mb-3">Certifications &amp; Training</h3>
<div className="space-y-2.5">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-yellow-400 flex-shrink-0" data-lucide="award" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-slate-300">SAG-AFTRA Member</span>
</div>
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-yellow-400 flex-shrink-0" data-lucide="award" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-slate-300">Voice Acting Academy — Advanced Certificate</span>
</div>
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-yellow-400 flex-shrink-0" data-lucide="award" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-slate-300">Audiobook Narration Workshop — Pat Fraley</span>
</div>
</div>
</div>
</div>

<div className="tab-content hidden space-y-6" id="tab-portfolio">
<div className="flex items-center justify-between mb-2">
<h2 className="text-lg font-semibold tracking-tight text-white">Portfolio &amp; Past Work</h2>
<span className="text-xs text-slate-500">12 projects</span>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 card-glow transition hover:bg-white/[0.04]">
<div className="flex items-center gap-2.5 mb-3">
<div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-blue-400" data-lucide="tv" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-sm font-semibold text-white">Nike "Just Move" Campaign</h3>
<p className="text-xs text-slate-500">TV Commercial · 2024</p>
</div>
</div>
<p className="text-xs text-slate-400 leading-relaxed mb-3">National broadcast commercial for Nike's fitness campaign. Warm, motivational tone targeting young professionals.</p>
<div className="flex items-center gap-2">
<span className="text-xs bg-white/5 border border-white/10 text-slate-400 px-2 py-0.5 rounded-md">Commercial</span>
<span className="text-xs bg-white/5 border border-white/10 text-slate-400 px-2 py-0.5 rounded-md">Motivational</span>
</div>
</div>
<div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 card-glow transition hover:bg-white/[0.04]">
<div className="flex items-center gap-2.5 mb-3">
<div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-purple-400" data-lucide="book-open" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-sm font-semibold text-white">"The Last Library" Audiobook</h3>
<p className="text-xs text-slate-500">Audiobook · 2024</p>
</div>
</div>
<p className="text-xs text-slate-400 leading-relaxed mb-3">Full-length narration for a bestselling sci-fi novel. Multiple character voices with emotional range.</p>
<div className="flex items-center gap-2">
<span className="text-xs bg-white/5 border border-white/10 text-slate-400 px-2 py-0.5 rounded-md">Audiobook</span>
<span className="text-xs bg-white/5 border border-white/10 text-slate-400 px-2 py-0.5 rounded-md">Characters</span>
</div>
</div>
<div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 card-glow transition hover:bg-white/[0.04]">
<div className="flex items-center gap-2.5 mb-3">
<div className="w-9 h-9 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-green-400" data-lucide="graduation-cap" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-sm font-semibold text-white">Coursera Data Science Series</h3>
<p className="text-xs text-slate-500">E-Learning · 2023</p>
</div>
</div>
<p className="text-xs text-slate-400 leading-relaxed mb-3">40+ hours of educational narration for an online data science certification program.</p>
<div className="flex items-center gap-2">
<span className="text-xs bg-white/5 border border-white/10 text-slate-400 px-2 py-0.5 rounded-md">E-Learning</span>
<span className="text-xs bg-white/5 border border-white/10 text-slate-400 px-2 py-0.5 rounded-md">Conversational</span>
</div>
</div>
<div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 card-glow transition hover:bg-white/[0.04]">
<div className="flex items-center gap-2.5 mb-3">
<div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-amber-400" data-lucide="gamepad-2" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-sm font-semibold text-white">Indie RPG "Starfall Echoes"</h3>
<p className="text-xs text-slate-500">Video Game · 2023</p>
</div>
</div>
<p className="text-xs text-slate-400 leading-relaxed mb-3">Voiced the main protagonist and three supporting characters in this award-winning indie RPG.</p>
<div className="flex items-center gap-2">
<span className="text-xs bg-white/5 border border-white/10 text-slate-400 px-2 py-0.5 rounded-md">Gaming</span>
<span className="text-xs bg-white/5 border border-white/10 text-slate-400 px-2 py-0.5 rounded-md">Characters</span>
</div>
</div>
</div>
</div>

<div className="tab-content hidden space-y-6" id="tab-reviews">
<div className="flex items-center justify-between mb-2">
<h2 className="text-lg font-semibold tracking-tight text-white">Client Reviews</h2>
<span className="text-xs text-slate-500">89 reviews</span>
</div>

<div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 mb-6">
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
<div className="text-center">
<p className="text-4xl font-semibold tracking-tight text-white">4.9</p>
<div className="flex gap-0.5 my-1.5">
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-xs text-slate-500">89 reviews</p>
</div>
<div className="flex-1 space-y-2 w-full">
<div className="flex items-center gap-3">
<span className="text-xs text-slate-500 w-6">5★</span>
<div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-yellow-400 rounded-full progress-bar" style={{width: '88%'}}></div></div>
<span className="text-xs text-slate-500 w-6">78</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-slate-500 w-6">4★</span>
<div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-yellow-400 rounded-full progress-bar" style={{width: '9%'}}></div></div>
<span className="text-xs text-slate-500 w-6">8</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-slate-500 w-6">3★</span>
<div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-yellow-400 rounded-full progress-bar" style={{width: '3%'}}></div></div>
<span className="text-xs text-slate-500 w-6">3</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-slate-500 w-6">2★</span>
<div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-yellow-400 rounded-full progress-bar" style={{width: '0%'}}></div></div>
<span className="text-xs text-slate-500 w-6">0</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-slate-500 w-6">1★</span>
<div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-yellow-400 rounded-full progress-bar" style={{width: '0%'}}></div></div>
<span className="text-xs text-slate-500 w-6">0</span>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs font-semibold">JW</div>
<div>
<p className="text-sm font-medium text-white">James Walker</p>
<p className="text-xs text-slate-500">Marketing Director · 2 weeks ago</p>
</div>
</div>
<div className="flex gap-0.5">
<i className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<p className="text-sm text-slate-300 leading-relaxed">"Sarah delivered exactly what we needed — a warm, professional read that perfectly matched our brand's tone. She was incredibly responsive, delivered ahead of schedule, and the audio quality was flawless. Will definitely hire again!"</p>
<div className="mt-3 flex items-center gap-2">
<span className="text-xs bg-white/5 border border-white/10 text-slate-400 px-2 py-0.5 rounded-md">Commercial</span>
<span className="text-xs text-slate-600">·</span>
<span className="text-xs text-slate-500">Delivered in 12 hours</span>
</div>
</div>
<div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white text-xs font-semibold">LP</div>
<div>
<p className="text-sm font-medium text-white">Lisa Park</p>
<p className="text-xs text-slate-500">Indie Game Developer · 1 month ago</p>
</div>
</div>
<div className="flex gap-0.5">
<i className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<p className="text-sm text-slate-300 leading-relaxed">"We needed 4 distinct character voices for our indie RPG, and Sarah nailed every single one. Her range is truly impressive. She took the time to understand each character's personality and brought them to life beautifully."</p>
<div className="mt-3 flex items-center gap-2">
<span className="text-xs bg-white/5 border border-white/10 text-slate-400 px-2 py-0.5 rounded-md">Gaming</span>
<span className="text-xs text-slate-600">·</span>
<span className="text-xs text-slate-500">Delivered in 3 days</span>
</div>
</div>
<div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-xs font-semibold">RK</div>
<div>
<p className="text-sm font-medium text-white">Robert Kim</p>
<p className="text-xs text-slate-500">E-Learning Producer · 2 months ago</p>
</div>
</div>
<div className="flex gap-0.5">
<i className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-3.5 h-3.5 text-slate-600" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<p className="text-sm text-slate-300 leading-relaxed">"Great voice for educational content. Sarah's conversational style makes complex topics feel approachable. We hired her for 40+ hours of e-learning narration and the consistency across all modules was excellent."</p>
<div className="mt-3 flex items-center gap-2">
<span className="text-xs bg-white/5 border border-white/10 text-slate-400 px-2 py-0.5 rounded-md">E-Learning</span>
<span className="text-xs text-slate-600">·</span>
<span className="text-xs text-slate-500">Delivered in 2 weeks</span>
</div>
</div>
</div>
<div className="text-center pt-2">
<button className="text-sm font-medium text-violet-400 hover:text-violet-300 transition">Load more reviews →</button>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sticky top-24">
<h3 className="text-base font-semibold text-white mb-4">Pricing &amp; Rates</h3>
<div className="space-y-3 mb-6">
<div className="flex items-center justify-between py-2.5 border-b border-white/[0.04]">
<span className="text-sm text-slate-400">Per word</span>
<span className="text-sm font-semibold text-white">$0.15</span>
</div>
<div className="flex items-center justify-between py-2.5 border-b border-white/[0.04]">
<span className="text-sm text-slate-400">Minimum project</span>
<span className="text-sm font-semibold text-white">$75</span>
</div>
<div className="flex items-center justify-between py-2.5 border-b border-white/[0.04]">
<span className="text-sm text-slate-400">Per finished hour</span>
<span className="text-sm font-semibold text-white">$250</span>
</div>
<div className="flex items-center justify-between py-2.5 border-b border-white/[0.04]">
<span className="text-sm text-slate-400">Rush delivery (+50%)</span>
<span className="text-sm font-medium text-yellow-400">Available</span>
</div>
<div className="flex items-center justify-between py-2.5">
<span className="text-sm text-slate-400">Live-directed session</span>
<span className="text-sm font-semibold text-white">$150/hr</span>
</div>
</div>
<button className="w-full text-sm font-semibold text-slate-900 bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 px-5 py-3 rounded-xl transition shadow-lg shadow-yellow-500/20 mb-3 flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="send" style={{strokeWidth: '1.5'}}></i>
                        Hire Sarah
                    </button>
<button className="w-full text-sm font-semibold text-white bg-violet-600 hover:bg-violet-500 px-5 py-3 rounded-xl transition flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="message-circle" style={{strokeWidth: '1.5'}}></i>
                        Send Message
                    </button>
<p className="text-xs text-center text-slate-600 mt-3">Free to contact · No commitment required</p>
</div>

<div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
<h3 className="text-base font-semibold text-white mb-4">Voice Styles</h3>
<div className="flex flex-wrap gap-2">
<span className="text-xs bg-violet-500/10 border border-violet-500/20 text-violet-300 px-2.5 py-1 rounded-lg">Warm</span>
<span className="text-xs bg-teal-500/10 border border-teal-500/20 text-teal-300 px-2.5 py-1 rounded-lg">Conversational</span>
<span className="text-xs bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 px-2.5 py-1 rounded-lg">Authoritative</span>
<span className="text-xs bg-rose-500/10 border border-rose-500/20 text-rose-300 px-2.5 py-1 rounded-lg">Friendly</span>
<span className="text-xs bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 px-2.5 py-1 rounded-lg">Professional</span>
<span className="text-xs bg-green-500/10 border border-green-500/20 text-green-300 px-2.5 py-1 rounded-lg">Soothing</span>
<span className="text-xs bg-amber-500/10 border border-amber-500/20 text-amber-300 px-2.5 py-1 rounded-lg">Energetic</span>
<span className="text-xs bg-pink-500/10 border border-pink-500/20 text-pink-300 px-2.5 py-1 rounded-lg">Character Voices</span>
</div>
</div>

<div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
<h3 className="text-base font-semibold text-white mb-4">Specializes In</h3>
<div className="space-y-2.5">
<div className="flex items-center gap-2.5">
<i className="w-4 h-4 text-blue-400 flex-shrink-0" data-lucide="tv" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-slate-300">TV &amp; Radio Commercials</span>
</div>
<div className="flex items-center gap-2.5">
<i className="w-4 h-4 text-purple-400 flex-shrink-0" data-lucide="book-open" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-slate-300">Audiobooks &amp; Narration</span>
</div>
<div className="flex items-center gap-2.5">
<i className="w-4 h-4 text-green-400 flex-shrink-0" data-lucide="graduation-cap" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-slate-300">E-Learning &amp; Training</span>
</div>
<div className="flex items-center gap-2.5">
<i className="w-4 h-4 text-amber-400 flex-shrink-0" data-lucide="gamepad-2" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-slate-300">Video Games</span>
</div>
<div className="flex items-center gap-2.5">
<i className="w-4 h-4 text-red-400 flex-shrink-0" data-lucide="youtube" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-slate-300">YouTube &amp; Social Media</span>
</div>
<div className="flex items-center gap-2.5">
<i className="w-4 h-4 text-teal-400 flex-shrink-0" data-lucide="phone" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-slate-300">IVR &amp; Phone Systems</span>
</div>
</div>
</div>

<div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
<h3 className="text-base font-semibold text-white mb-4">Languages</h3>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span>🇺🇸</span>
<span className="text-sm text-slate-300">English (American)</span>
</div>
<span className="text-xs font-medium text-green-400 bg-green-500/10 px-2 py-0.5 rounded-md">Native</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span>🇬🇧</span>
<span className="text-sm text-slate-300">English (British)</span>
</div>
<span className="text-xs font-medium text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md">Fluent</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span>🇪🇸</span>
<span className="text-sm text-slate-300">Spanish</span>
</div>
<span className="text-xs font-medium text-yellow-400 bg-yellow-500/10 px-2 py-0.5 rounded-md">Intermediate</span>
</div>
</div>
</div>

<div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
<h3 className="text-base font-semibold text-white mb-4">Availability</h3>
<div className="space-y-3">
<div className="flex items-center gap-2.5">
<span className="w-2 h-2 bg-green-400 rounded-full"></span>
<span className="text-sm text-slate-300">Currently available for projects</span>
</div>
<div className="flex items-center gap-2.5">
<i className="w-4 h-4 text-slate-500" data-lucide="clock" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-slate-400">Mon – Fri, 9AM – 6PM PST</span>
</div>
<div className="flex items-center gap-2.5">
<i className="w-4 h-4 text-yellow-400" data-lucide="zap" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-slate-300">Rush delivery available</span>
</div>
<div className="flex items-center gap-2.5">
<i className="w-4 h-4 text-violet-400" data-lucide="video" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-slate-300">Live-directed sessions via Zoom / Source-Connect</span>
</div>
</div>
</div>

<div className="flex items-center justify-between text-xs text-slate-600">
<button className="flex items-center gap-1.5 hover:text-slate-400 transition">
<i className="w-3.5 h-3.5" data-lucide="flag" style={{strokeWidth: '1.5'}}></i>
                        Report profile
                    </button>
<span>Profile ID: #VH-4829</span>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 border-t border-white/5 pt-12 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="flex items-end gap-0.5 h-4">
<span className="w-0.5 h-1.5 bg-violet-400 rounded-full"></span>
<span className="w-0.5 h-3 bg-violet-500 rounded-full"></span>
<span className="w-0.5 h-4 bg-violet-400 rounded-full"></span>
<span className="w-0.5 h-2.5 bg-violet-500 rounded-full"></span>
<span className="w-0.5 h-3 bg-violet-400 rounded-full"></span>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-500">VoiceHunt</span>
</div>
<div className="flex items-center gap-6 text-xs text-slate-600">
<a className="hover:text-white transition" href="#">Terms</a>
<a className="hover:text-white transition" href="#">Privacy</a>
<a className="hover:text-white transition" href="#">Help</a>
<span>© 2025 VoiceHunt</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
