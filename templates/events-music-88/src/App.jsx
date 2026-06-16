import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 inset-x-0 z-50 bg-red-700/95 backdrop-blur-xl border-b border-red-600/80">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="text-sm font-medium tracking-tight text-white flex items-center gap-2" href="#">
<iconify-icon className="text-red-200 text-lg" icon="solar:turntable-linear"></iconify-icon>
                SWITCHERSHOUSE
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-red-100">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#music">Music</a>
<a className="hover:text-white transition-colors" href="#gallery">Gallery</a>
</div>
<div className="flex items-center gap-4">
<a className="text-red-200 hover:text-white transition-colors flex items-center justify-center" href="https://www.facebook.com/djswitcherzm" rel="noopener" target="_blank">
<span className="sr-only">Facebook</span>
<iconify-icon className="text-lg" icon="solar:link-circle-linear"></iconify-icon>
</a>
<a className="text-xs font-medium bg-white text-red-700 px-4 py-2 rounded-full hover:bg-red-50 transition-colors shadow-sm" href="#tickets">
                    Book Tickets
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden bg-red-700">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-600 via-red-700 to-red-800 pointer-events-none"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjAuNSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIi8+PC9zdmc+')] [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none"></div>
<div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/60 bg-red-800/50 text-xs text-white mb-8 backdrop-blur-md">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
</span>
                Next Event: 03 May | Switchers House
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white leading-[1.1]">
                Shaping the culture of <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-red-200">electronic music.</span>
</h1>
<p className="mt-6 text-base md:text-lg text-red-100 max-w-2xl font-normal leading-relaxed">
                A premier Zambian events management and creative entertainment company founded by DJ Switcher. Blending music, media, and talent development.
            </p>
<div className="mt-10 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
<a className="flex items-center justify-center gap-2 text-sm font-medium bg-white text-red-700 px-6 py-2.5 rounded-full hover:bg-red-50 transition-all shadow-lg shadow-white/10" href="#tickets">
<iconify-icon className="text-base" icon="solar:ticket-linear"></iconify-icon>
                    Book Tickets
                </a>
<a className="flex items-center justify-center gap-2 text-sm font-medium bg-red-800 border border-red-600 text-white px-6 py-2.5 rounded-full hover:bg-red-900 transition-colors shadow-sm" href="#services">
                    Explore Services
                </a>
</div>
</div>
<div className="max-w-5xl mx-auto mt-24 relative h-[40vh] md:h-[55vh] rounded-3xl overflow-hidden border border-red-600 bg-red-900 shadow-2xl shadow-red-950/50">
<img alt="DJ performing live" className="w-full h-full object-cover mix-blend-luminosity opacity-70 hover:opacity-100 hover:mix-blend-normal transition-all duration-700" src="https://images.unsplash.com/photo-1516873240891-4bf014598ab4?auto=format&amp;fit=crop&amp;q=80&amp;w=2070"/>
<div className="absolute inset-0 bg-gradient-to-t from-red-700/40 via-transparent to-transparent pointer-events-none"></div>
</div>
</section>

<section className="py-12 border-y border-red-100 bg-white">
<div className="max-w-6xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-red-400 uppercase tracking-widest mb-8">Trusted by industry leaders &amp; venues</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center text-red-600">
<div className="flex items-center gap-2 text-base font-normal hover:text-red-900 transition-colors"><iconify-icon className="text-lg" icon="solar:crown-star-linear"></iconify-icon> Grandaddys</div>
<div className="flex items-center gap-2 text-base font-normal hover:text-red-900 transition-colors"><iconify-icon className="text-lg" icon="solar:buildings-linear"></iconify-icon> Agora Village</div>
<div className="flex items-center gap-2 text-base font-normal hover:text-red-900 transition-colors"><iconify-icon className="text-lg" icon="solar:cup-star-linear"></iconify-icon> Black Zambia</div>
<div className="flex items-center gap-2 text-base font-normal hover:text-red-900 transition-colors"><iconify-icon className="text-lg" icon="solar:palmtree-linear"></iconify-icon> Taboo Island</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="about">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-red-950 leading-tight">
                    Creativity, Culture, and <br /> Quality Production.
                </br></h2>
<div className="space-y-5 text-sm md:text-base text-red-800/90 font-normal leading-relaxed">
<p>
<strong className="text-red-950 font-medium">Switchers House</strong> is founded and owned by one of Zambia’s most celebrated DJs, DJ Switcher. We have grown into a trusted brand within the entertainment industry, offering world-class experiences and premium creative services.
                    </p>
<p>
<strong className="text-red-950 font-medium">Our Vision:</strong> To become Africa’s leading electronic music and creative entertainment brand, shaping culture, empowering talent, and delivering world-class experiences.
                    </p>
<p>
<strong className="text-red-950 font-medium">Our Mission:</strong> To create unforgettable entertainment experiences while nurturing creative talent, advancing electronic music culture, and delivering high-quality media and events solutions.
                    </p>
</div>
<div className="flex items-center gap-10 pt-4 border-t border-red-100">
<div className="flex flex-col">
<span className="text-3xl font-medium text-red-950 tracking-tighter">5+</span>
<span className="text-xs text-red-600 font-normal mt-1">Core Divisions</span>
</div>
<div className="flex flex-col">
<span className="text-3xl font-medium text-red-950 tracking-tighter">100%</span>
<span className="text-xs text-red-600 font-normal mt-1">Premium Delivery</span>
</div>
</div>
</div>
<div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-white border border-red-200 shadow-sm">
<img alt="DJ Switcher Portrait" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-red-700/10 mix-blend-overlay pointer-events-none"></div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-red-700 border-y border-red-800" id="services">
<div className="max-w-6xl mx-auto">
<div className="mb-16 md:text-center max-w-2xl mx-auto flex flex-col md:items-center">
<div className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-red-500 bg-red-800 text-xs text-red-100 mb-6 font-medium">
                    Our Expertise
                </div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-4">Services &amp; Subsidiaries</h2>
<p className="text-base text-red-100 font-normal leading-relaxed">Comprehensive entertainment, media, and production solutions tailored for modern creative demands.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group rounded-3xl border border-red-600 bg-red-800/50 p-8 hover:bg-white hover:border-white hover:shadow-xl hover:shadow-red-900/20 transition-all duration-300">
<div className="w-10 h-10 rounded-xl bg-red-700 border border-red-600 shadow-sm text-white flex items-center justify-center mb-6 group-hover:bg-red-50 group-hover:text-red-700 group-hover:border-red-200 transition-colors">
<iconify-icon className="text-xl" icon="solar:star-fall-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white tracking-tight mb-3 group-hover:text-red-950 transition-colors">Events Management</h3>
<ul className="space-y-2.5 text-sm text-red-100 font-normal group-hover:text-red-800/90 transition-colors">
<li className="flex items-start gap-2"><iconify-icon className="text-red-400 group-hover:text-red-300 mt-0.5 transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon> Concept creation &amp; curation</li>
<li className="flex items-start gap-2"><iconify-icon className="text-red-400 group-hover:text-red-300 mt-0.5 transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon> Large-scale music experiences</li>
<li className="flex items-start gap-2"><iconify-icon className="text-red-400 group-hover:text-red-300 mt-0.5 transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon> Sound, lighting &amp; staging</li>
</ul>
</div>
<div className="group rounded-3xl border border-red-600 bg-red-800/50 p-8 hover:bg-white hover:border-white hover:shadow-xl hover:shadow-red-900/20 transition-all duration-300">
<div className="w-10 h-10 rounded-xl bg-red-700 border border-red-600 shadow-sm text-white flex items-center justify-center mb-6 group-hover:bg-red-50 group-hover:text-red-700 group-hover:border-red-200 transition-colors">
<iconify-icon className="text-xl" icon="solar:headphones-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white tracking-tight mb-3 group-hover:text-red-950 transition-colors">DJ Academy</h3>
<ul className="space-y-2.5 text-sm text-red-100 font-normal group-hover:text-red-800/90 transition-colors">
<li className="flex items-start gap-2"><iconify-icon className="text-red-400 group-hover:text-red-300 mt-0.5 transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon> Professional DJ training</li>
<li className="flex items-start gap-2"><iconify-icon className="text-red-400 group-hover:text-red-300 mt-0.5 transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon> Mentorship for aspiring DJs</li>
<li className="flex items-start gap-2"><iconify-icon className="text-red-400 group-hover:text-red-300 mt-0.5 transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon> Hands-on live event exposure</li>
</ul>
</div>
<div className="group rounded-3xl border border-red-600 bg-red-800/50 p-8 hover:bg-white hover:border-white hover:shadow-xl hover:shadow-red-900/20 transition-all duration-300">
<div className="w-10 h-10 rounded-xl bg-red-700 border border-red-600 shadow-sm text-white flex items-center justify-center mb-6 group-hover:bg-red-50 group-hover:text-red-700 group-hover:border-red-200 transition-colors">
<iconify-icon className="text-xl" icon="solar:microphone-2-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white tracking-tight mb-3 group-hover:text-red-950 transition-colors">Recording Studio</h3>
<ul className="space-y-2.5 text-sm text-red-100 font-normal group-hover:text-red-800/90 transition-colors">
<li className="flex items-start gap-2"><iconify-icon className="text-red-400 group-hover:text-red-300 mt-0.5 transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon> Music recording &amp; production</li>
<li className="flex items-start gap-2"><iconify-icon className="text-red-400 group-hover:text-red-300 mt-0.5 transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon> Mixing and mastering</li>
<li className="flex items-start gap-2"><iconify-icon className="text-red-400 group-hover:text-red-300 mt-0.5 transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon> Space for content creators</li>
</ul>
</div>
<div className="group rounded-3xl border border-red-600 bg-red-800/50 p-8 hover:bg-white hover:border-white hover:shadow-xl hover:shadow-red-900/20 transition-all duration-300">
<div className="w-10 h-10 rounded-xl bg-red-700 border border-red-600 shadow-sm text-white flex items-center justify-center mb-6 group-hover:bg-red-50 group-hover:text-red-700 group-hover:border-red-200 transition-colors">
<iconify-icon className="text-xl" icon="solar:vinyl-record-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white tracking-tight mb-3 group-hover:text-red-950 transition-colors">Record Label</h3>
<ul className="space-y-2.5 text-sm text-red-100 font-normal group-hover:text-red-800/90 transition-colors">
<li className="flex items-start gap-2"><iconify-icon className="text-red-400 group-hover:text-red-300 mt-0.5 transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon> Artist development</li>
<li className="flex items-start gap-2"><iconify-icon className="text-red-400 group-hover:text-red-300 mt-0.5 transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon> Electronic music promotion</li>
<li className="flex items-start gap-2"><iconify-icon className="text-red-400 group-hover:text-red-300 mt-0.5 transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon> Emerging talent support</li>
</ul>
</div>
<div className="group rounded-3xl border border-red-600 bg-red-800/50 p-8 hover:bg-white hover:border-white hover:shadow-xl hover:shadow-red-900/20 transition-all duration-300 lg:col-span-2">
<div className="w-10 h-10 rounded-xl bg-red-700 border border-red-600 shadow-sm text-white flex items-center justify-center mb-6 group-hover:bg-red-50 group-hover:text-red-700 group-hover:border-red-200 transition-colors">
<iconify-icon className="text-xl" icon="solar:video-frame-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white tracking-tight mb-3 group-hover:text-red-950 transition-colors">Videography &amp; Media</h3>
<div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-red-100 font-normal group-hover:text-red-800/90 transition-colors">
<p className="flex items-start gap-2"><iconify-icon className="text-red-400 group-hover:text-red-300 mt-0.5 transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon> Event coverage &amp; after-movies</p>
<p className="flex items-start gap-2"><iconify-icon className="text-red-400 group-hover:text-red-300 mt-0.5 transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon> Podcast production</p>
<p className="flex items-start gap-2"><iconify-icon className="text-red-400 group-hover:text-red-300 mt-0.5 transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon> Commercial adverts &amp; promos</p>
<p className="flex items-start gap-2"><iconify-icon className="text-red-400 group-hover:text-red-300 mt-0.5 transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon> Branded video storytelling</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-red-50" id="music">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-red-950 mb-4">Latest Sounds</h2>
<p className="text-base text-red-800/80 font-normal leading-relaxed">Dive into the rhythm. Exclusive mixes, live sets, and curated electronic playlists directly from the vault.</p>
</div>
<a className="text-sm font-medium text-red-950 border border-red-200 bg-white px-4 py-2 rounded-full hover:bg-red-100 flex items-center gap-2 group transition-colors shadow-sm" href="#">
                    Soundcloud
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid lg:grid-cols-2 gap-4">

<div className="flex items-center gap-4 p-3 rounded-2xl bg-white border border-red-200 hover:shadow-lg hover:shadow-red-200/40 hover:border-red-400 transition-all group cursor-pointer">
<div className="w-14 h-14 rounded-xl overflow-hidden relative flex-shrink-0 border border-red-100">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div className="absolute inset-0 bg-red-950/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
<iconify-icon className="text-white text-lg drop-shadow-md" icon="solar:play-bold"></iconify-icon>
</div>
</div>
<div className="flex-grow min-w-0">
<h4 className="text-sm font-medium text-red-950 truncate">Switchers House Vol. 5 Live Set</h4>
<p className="text-xs text-red-600 font-normal mt-0.5 truncate">DJ Switcher • Deep House / Afro Tech</p>
</div>
<div className="text-xs font-medium text-red-500 px-4">1:45:20</div>
</div>

<div className="flex items-center gap-4 p-3 rounded-2xl bg-white border border-red-200 hover:shadow-lg hover:shadow-red-200/40 hover:border-red-400 transition-all group cursor-pointer">
<div className="w-14 h-14 rounded-xl overflow-hidden relative flex-shrink-0 border border-red-100">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-red-950/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
<iconify-icon className="text-white text-lg drop-shadow-md" icon="solar:play-bold"></iconify-icon>
</div>
</div>
<div className="flex-grow min-w-0">
<h4 className="text-sm font-medium text-red-950 truncate">Sunset Grooves Session</h4>
<p className="text-xs text-red-600 font-normal mt-0.5 truncate">DJ Switcher • Electronic Chill</p>
</div>
<div className="text-xs font-medium text-red-500 px-4">58:12</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-red-700 border-t border-red-800" id="events">
<div className="max-w-6xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
<div className="grid grid-cols-2 gap-4 relative">
<div className="rounded-3xl overflow-hidden bg-red-900 border border-red-600 aspect-square shadow-sm">
<img alt="Event photo" className="w-full h-full object-cover mix-blend-luminosity opacity-80 hover:opacity-100 hover:mix-blend-normal transition-all duration-500" src="https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="rounded-3xl overflow-hidden bg-red-900 border border-red-600 aspect-square mt-12 shadow-sm">
<img alt="Event photo" className="w-full h-full object-cover mix-blend-luminosity opacity-80 hover:opacity-100 hover:mix-blend-normal transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none rounded-3xl"></div>
</div>
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500 bg-red-800 text-xs text-red-100 font-medium">
                        Flagship Experience
                    </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white leading-[1.1]">
                        Switchers House <br/> Experience
                    </h2>
<p className="text-base text-red-100 font-normal leading-relaxed">
                        A quarterly electronic house music experience bringing together music lovers, creatives, and professionals in a premium, high-energy environment. Recognized for exceptional sound, curated lineups, and immersive production.
                    </p>
<div className="grid sm:grid-cols-2 gap-8 pt-6 border-t border-red-600">
<div>
<h4 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
<iconify-icon className="text-red-300 text-lg" icon="solar:calendar-linear"></iconify-icon>
                                Annual Calendar
                            </h4>
<ul className="space-y-2 text-sm text-red-100 font-normal">
<li>03 May</li>
<li>03 August</li>
<li>20 September</li>
<li>13 December</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
<iconify-icon className="text-red-300 text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
                                The Audience
                            </h4>
<ul className="space-y-2 text-sm text-red-100 font-normal">
<li>Corporate executives</li>
<li>Working-class millennials</li>
<li>Gen Z creatives</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-red-100" id="gallery">
<div className="max-w-6xl mx-auto">
<div className="mb-12">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-red-950 mb-4">Event Visuals</h2>
<p className="text-base text-red-800/80 font-normal">Moments captured from our premium music and lifestyle events.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="aspect-square rounded-3xl overflow-hidden bg-red-50 md:col-span-2 md:row-span-2 relative group border border-red-200">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-red-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<span className="text-white text-sm font-medium">The Crowd Energy</span>
</div>
</div>
<div className="aspect-square rounded-3xl overflow-hidden bg-red-50 relative group border border-red-200">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="aspect-square rounded-3xl overflow-hidden bg-red-50 relative group border border-red-200">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="aspect-square rounded-3xl overflow-hidden bg-red-50 md:col-span-2 relative group border border-red-200">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 object-top" src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-red-700 text-white relative overflow-hidden border-t border-red-800" id="tickets">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-400/50 to-transparent"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-red-800 via-red-700 to-red-900 -z-10"></div>
<div className="max-w-6xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-4 text-white">Secure Your Spot</h2>
<p className="text-base text-red-100 font-normal">Join the mature, lifestyle-driven audience with our premium ticket tiers. Early booking is highly recommended.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

<div className="relative flex flex-col rounded-3xl border border-red-500/30 bg-red-800/30 p-8 hover:bg-red-800/50 transition-all duration-300">
<div className="mb-8">
<h3 className="text-lg font-medium tracking-tight mb-2 text-white">Early Bird</h3>
<p className="text-sm text-red-200 font-normal h-10">Limited release for our dedicated followers.</p>
</div>
<div className="mb-8 flex-grow">
<ul className="space-y-4 text-sm text-white font-normal">
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                                General Access
                            </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                                Access to main bar
                            </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                                Standard parking
                            </li>
</ul>
</div>
<a className="w-full flex items-center justify-center text-sm font-medium bg-red-900/50 border border-red-500/50 text-white px-6 py-2.5 rounded-full hover:bg-red-600 transition-colors" href="#">
                        Book Early Bird
                    </a>
</div>

<div className="relative flex flex-col rounded-3xl bg-white border border-white p-8 shadow-2xl shadow-red-950/50 transform md:-translate-y-2">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-red-700 text-white text-[10px] uppercase font-semibold rounded-full tracking-widest shadow-sm">
                        Popular
                    </div>
<div className="mb-8 mt-2">
<h3 className="text-lg font-medium tracking-tight mb-2 text-red-950">General Access</h3>
<p className="text-sm text-red-700 font-normal h-10">The standard Switchers House experience.</p>
</div>
<div className="mb-8 flex-grow">
<ul className="space-y-4 text-sm text-red-800 font-normal">
<li className="flex items-start gap-3">
<iconify-icon className="text-red-600 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
<span className="font-medium text-red-950">Full General Access</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-600 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                                Premium sound zones
                            </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-600 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                                Dedicated bar lines
                            </li>
</ul>
</div>
<a className="w-full flex items-center justify-center text-sm font-medium bg-red-700 text-white px-6 py-2.5 rounded-full hover:bg-red-800 transition-all shadow-sm" href="#">
                        Book General
                    </a>
</div>

<div className="relative flex flex-col rounded-3xl border border-red-500/30 bg-red-800/30 p-8 hover:bg-red-800/50 transition-all duration-300">
<div className="mb-8">
<h3 className="text-lg font-medium tracking-tight mb-2 text-white">VIP Experience</h3>
<p className="text-sm text-red-200 font-normal h-10">Elevated perspective for executives.</p>
</div>
<div className="mb-8 flex-grow">
<ul className="space-y-4 text-sm text-white font-normal">
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                                Fast-track entry
                            </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                                Exclusive VIP lounge
                            </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                                Private bar service
                            </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                                Premium secured parking
                            </li>
</ul>
</div>
<a className="w-full flex items-center justify-center text-sm font-medium bg-red-900/50 border border-red-500/50 text-white px-6 py-2.5 rounded-full hover:bg-red-600 transition-colors" href="#">
                        Book VIP
                    </a>
</div>
</div>
</div>
</section>

<footer className="border-t border-red-100 bg-white pt-24 pb-12 px-6 mt-auto" id="contact">
<div className="max-w-6xl mx-auto flex flex-col items-center text-center">
<a className="text-sm font-medium tracking-tight text-red-950 mb-8 flex items-center gap-2" href="#">
<iconify-icon className="text-red-700 text-lg" icon="solar:turntable-linear"></iconify-icon>
                SWITCHERSHOUSE
            </a>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-red-950 mb-6">
                Ready to elevate your event?
            </h2>
<p className="text-base text-red-800/80 font-normal mb-8 max-w-md">
                For event management, media production, or booking inquiries, reach out through our official channels.
            </p>
<a className="flex items-center justify-center gap-2 text-sm font-medium bg-red-700 text-white px-8 py-3 rounded-full hover:bg-red-800 transition-colors mb-24 shadow-lg shadow-red-700/20" href="https://www.facebook.com/djswitcherzm" rel="noopener" target="_blank">
<iconify-icon className="text-base" icon="solar:letter-linear"></iconify-icon>
                Contact Us
            </a>
<div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-red-100 text-xs text-red-400 font-normal">
<p>© 2023 Switchers House, Zambia. All rights reserved.</p>
<div className="flex items-center gap-6 mt-4 md:mt-0">
<a className="hover:text-red-900 transition-colors" href="https://www.facebook.com/djswitcherzm" rel="noopener" target="_blank">Facebook</a>
<a className="hover:text-red-900 transition-colors" href="#">Instagram</a>
<a className="hover:text-red-900 transition-colors" href="#">Soundcloud</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
