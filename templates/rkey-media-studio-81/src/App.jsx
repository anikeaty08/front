import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Content Dictionary
        const translations = {
            en: {
                nav_portfolio: "Portfolio",
                nav_services: "Services",
                nav_beatstore: "Beatstore",
                nav_pricing: "Pricing",
                nav_booking: "Booking",
                nav_about: "About",
                hero_slogan: "Professional Audio & Video Production for Modern Artists.",
                cta_start: "Start Project",
                cta_work: "View Work",
                view_all: "View Archive",
                portfolio_desc: "Sonic and visual excellence.",
                services_title: "End-to-End Production",
                service_video_title: "Video Production",
                service_video_desc: "Music videos, commercials, and brand documentaries shot on cinema-grade equipment.",
                service_audio_title: "Audio Engineering",
                service_audio_desc: "Professional mixing, mastering, and vocal recording in an acoustically treated environment.",
                service_brand_title: "Creative Direction",
                service_brand_desc: "Complete visual identity, cover art design, and release strategy for modern artists.",
                beatstore_sub: "Premium instrumentals. Instant license delivery.",
                btn_buy: "Add",
                plan_basic: "Basic Session",
                feat_recording: "Vocal Recording",
                feat_engineer: "Engineer Included",
                feat_mix: "Rough Mix",
                btn_book: "Book Now",
                plan_mix: "Mix & Master",
                feat_stem: "Unlimited Stems",
                feat_analog: "Analog Processing",
                feat_revision: "3 Revisions",
                btn_get_started: "Get Started",
                plan_video: "Music Video",
                feat_4k: "4K Cinema Cameras",
                feat_location: "Location Scouting",
                feat_edit: "Editing & VFX",
                btn_inquire: "Inquire",
                booking_sub: "Configure your session and we'll get in touch.",
                fixed_service: "Studio Recording Session",
                fixed_service_desc: "Professional recording booth, engineer included.",
                label_name: "Name",
                label_email: "Email",
                label_time: "Preferred Start Time",
                label_date: "Preferred Date",
                booking_note: "Please arrive 10 minutes before your scheduled slot. A 50% deposit is required to confirm booking.",
                btn_submit: "Request Booking",
                about_title: "The Studio",
                about_p1: "RKEY MEDIA was founded on a simple premise: bridging the gap between raw artistic talent and high-end industry production standards. We are not just a studio; we are creative partners.",
                about_p2: "Located in the heart of the city, our facility combines analog warmth with digital precision. Whether you are an emerging artist or an established label, we provide the technical foundation so you can focus on the art.",
                stat_projects: "Projects Completed",
                stat_streams: "Monthly Streams"
            },
            nl: {
                nav_portfolio: "Portfolio",
                nav_services: "Diensten",
                nav_beatstore: "Beatstore",
                nav_pricing: "Prijzen",
                nav_booking: "Boeken",
                nav_about: "Over Ons",
                hero_slogan: "Professionele Audio- & Videoproductie voor Moderne Artiesten.",
                cta_start: "Start Project",
                cta_work: "Bekijk Werk",
                view_all: "Bekijk Archief",
                portfolio_desc: "Sonische en visuele uitmuntendheid.",
                services_title: "Volledige Productie",
                service_video_title: "Videoproductie",
                service_video_desc: "Videoclips, commercials en documentaires opgenomen met bioscoopkwaliteit apparatuur.",
                service_audio_title: "Audio Engineering",
                service_audio_desc: "Professioneel mixen, masteren en zangopname in een akoestisch behandelde omgeving.",
                service_brand_title: "Creatieve Directie",
                service_brand_desc: "Volledige visuele identiteit, cover art design en release strategie voor moderne artiesten.",
                beatstore_sub: "Premium instrumentals. Directe licentielevering.",
                btn_buy: "Toevoegen",
                plan_basic: "Basis Sessie",
                feat_recording: "Zangopname",
                feat_engineer: "Technicus Inbegrepen",
                feat_mix: "Ruwe Mix",
                btn_book: "Boek Nu",
                plan_mix: "Mix & Master",
                feat_stem: "Onbeperkte Stems",
                feat_analog: "Analoge Processing",
                feat_revision: "3 Revisies",
                btn_get_started: "Begin Nu",
                plan_video: "Videoclip",
                feat_4k: "4K Cinema Cameras",
                feat_location: "Locatie Scouting",
                feat_edit: "Montage & VFX",
                btn_inquire: "Aanvragen",
                booking_sub: "Configureer je sessie en we nemen contact op.",
                fixed_service: "Studio Opnamesessie",
                fixed_service_desc: "Professionele opname booth, inclusief technicus.",
                label_name: "Naam",
                label_email: "E-mail",
                label_time: "Voorkeurstijd",
                label_date: "Voorkeursdatum",
                booking_note: "Gelieve 10 minuten voor aanvang aanwezig te zijn. Een aanbetaling van 50% is vereist.",
                btn_submit: "Boeking Aanvragen",
                about_title: "De Studio",
                about_p1: "RKEY MEDIA is opgericht met een simpel doel: de kloof overbruggen tussen ruw artistiek talent en high-end industriestandaarden. We zijn niet zomaar een studio; we zijn creatieve partners.",
                about_p2: "Gelegen in het hart van de stad, combineert onze faciliteit analoge warmte met digitale precisie. Of je nu een opkomende artiest bent of een gevestigd label, wij bieden de technische basis zodat jij je op de kunst kunt richten.",
                stat_projects: "Projecten Voltooid",
                stat_streams: "Maandelijkse Streams"
            }
        };

        function setLanguage(lang) {
            const elements = document.querySelectorAll('[data-i18n]');
            elements.forEach(el => {
                const key = el.getAttribute('data-i18n');
                if(translations[lang][key]) {
                    el.innerText = translations[lang][key];
                }
            });

            // Update Switcher UI
            const btnEn = document.getElementById('lang-en');
            const btnNl = document.getElementById('lang-nl');
            
            if(lang === 'en') {
                btnEn.className = "px-3 py-1 rounded-full text-[10px] font-semibold text-white bg-white/10 shadow-inner";
                btnNl.className = "px-3 py-1 rounded-full text-[10px] font-semibold text-neutral-400 hover:text-white transition-all";
            } else {
                btnNl.className = "px-3 py-1 rounded-full text-[10px] font-semibold text-white bg-white/10 shadow-inner";
                btnEn.className = "px-3 py-1 rounded-full text-[10px] font-semibold text-neutral-400 hover:text-white transition-all";
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[40rem] h-[40rem] bg-red-900/10 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute bottom-[-10%] right-[-5%] w-[30rem] h-[30rem] bg-red-800/5 rounded-full blur-[100px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-lg font-medium tracking-widest text-white hover:opacity-80 transition-opacity flex items-center gap-2" href="#">
<span className="w-2 h-2 bg-red-600 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.5)]"></span>
                RKEY MEDIA
            </a>

<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-neutral-400">
<a className="hover:text-white transition-colors" data-i18n="nav_portfolio" href="#portfolio">Portfolio</a>
<a className="hover:text-white transition-colors" data-i18n="nav_services" href="#services">Services</a>
<a className="hover:text-white transition-colors" data-i18n="nav_pricing" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" data-i18n="nav_booking" href="#booking">Booking</a>
<a className="hover:text-white transition-colors" data-i18n="nav_about" href="#about">About</a>
<a className="hover:text-white transition-colors" data-i18n="nav_beatstore" href="#beatstore">Beatstore</a>
</div>

<div className="flex items-center gap-4">

<div className="flex items-center bg-white/5 rounded-full p-1 border border-white/10">
<button className="px-3 py-1 rounded-full text-[10px] font-semibold text-neutral-400 hover:text-white transition-all" id="lang-nl" onclick="setLanguage('nl')">NL</button>
<button className="px-3 py-1 rounded-full text-[10px] font-semibold text-white bg-white/10 shadow-inner" id="lang-en" onclick="setLanguage('en')">EN</button>
</div>

<button className="md:hidden text-white" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="hidden absolute top-16 left-0 w-full bg-[#050505] border-b border-white/10 md:hidden flex flex-col p-6 space-y-4 shadow-2xl" id="mobile-menu">
<a className="text-sm text-neutral-300" data-i18n="nav_portfolio" href="#portfolio">Portfolio</a>
<a className="text-sm text-neutral-300" data-i18n="nav_services" href="#services">Services</a>
<a className="text-sm text-neutral-300" data-i18n="nav_pricing" href="#pricing">Pricing</a>
<a className="text-sm text-neutral-300" data-i18n="nav_booking" href="#booking">Booking</a>
<a className="text-sm text-neutral-300" data-i18n="nav_beatstore" href="#beatstore">Beatstore</a>
</div>
</nav>

<section className="min-h-screen flex flex-col pt-16 pr-6 pl-6 relative items-center justify-center">
<div className="text-center max-w-4xl mx-auto space-y-8 z-10">

<div className="overflow-hidden mb-2">
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-white animate-reveal">
                    RKEY <span className="text-white">MEDIA</span>
</h1>
</div>
<div className="h-px w-24 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto animate-reveal delay-200 opacity-0" style={{animationFillMode: 'forwards'}}></div>
<p className="md:text-xl animate-reveal delay-300 text-lg font-light text-neutral-400 tracking-wide opacity-0 max-w-2xl mr-auto ml-auto" data-i18n="hero_slogan" style={{animationFillMode: 'forwards'}}>Professional Audio &amp; Video Production.</p>
<div className="flex flex-col md:flex-row gap-4 justify-center pt-8 animate-reveal delay-500 opacity-0" style={{animationFillMode: 'forwards'}}>
<a className="group relative px-8 py-3 bg-white text-black text-sm font-medium rounded-full overflow-hidden transition-all hover:bg-neutral-200" href="#booking">
<span className="relative z-10" data-i18n="cta_start">Start Project</span>
</a>
<a className="px-8 py-3 border border-white/10 text-white text-sm font-medium rounded-full hover:bg-white/5 transition-all" data-i18n="cta_work" href="#portfolio">
                    View Work
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-neutral-600">
<iconify-icon icon="solar:arrow-down-linear" width="24"></iconify-icon>
</div>
</section>

<section className="py-24 px-6 relative border-t border-white/5" id="portfolio">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-medium tracking-tight text-white mb-2" data-i18n="nav_portfolio">Selected Work</h2>
<p className="text-neutral-500 text-sm" data-i18n="portfolio_desc">Sonic and visual excellence.</p>
</div>
<a className="text-xs text-red-500 hover:text-red-400 flex items-center gap-1" href="#">
<span data-i18n="view_all">View Archive</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative aspect-video bg-neutral-900 rounded-lg overflow-hidden border border-white/5 cursor-pointer">
<div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30">
<iconify-icon className="text-white text-5xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-xs text-red-400 font-mono mb-1">MUSIC VIDEO</span>
<h3 className="text-white text-lg font-medium">Neon Nights - Artist X</h3>
</div>
</div>

<div className="group relative aspect-video bg-neutral-900 rounded-lg overflow-hidden border border-white/5 cursor-pointer">
<div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30">
<iconify-icon className="text-white text-5xl" icon="solar:music-note-slider-linear"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-xs text-red-400 font-mono mb-1">MIXING &amp; MASTERING</span>
<h3 className="text-white text-lg font-medium">Drift (EP) - LUNA</h3>
</div>
</div>

<div className="group relative aspect-video bg-neutral-900 rounded-lg overflow-hidden border border-white/5 cursor-pointer">
<div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30">
<iconify-icon className="text-white text-5xl" icon="solar:clapperboard-play-linear"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-xs text-red-400 font-mono mb-1">DOCUMENTARY</span>
<h3 className="text-white text-lg font-medium">The Process: Studio Sessions</h3>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#080808] pt-24 pr-6 pb-24 pl-6" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<span className="text-xs font-mono text-red-500 tracking-wider uppercase border border-red-500/20 px-2 py-1 rounded">Expertise</span>
<h2 className="text-3xl md:text-4xl font-medium text-white mt-4 tracking-tight" data-i18n="services_title">End-to-End Production</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">

<div className="bg-[#0a0a0a] p-8 group hover:bg-[#0f0f0f] transition-colors relative">
<div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
<div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center mb-6 text-white border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
<iconify-icon icon="solar:music-note-slider-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-2" data-i18n="service_audio_title">Audio Engineering</h3>
<p className="text-sm text-neutral-500 leading-relaxed" data-i18n="service_audio_desc">
                        Professional mixing, mastering, and vocal recording in an acoustically treated environment.
                    </p>
</div>

<div className="group hover:bg-[#0f0f0f] transition-colors bg-[#0a0a0a] pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute top-0 left-0 w-full h-1 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center mb-6 text-white border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
<iconify-icon icon="solar:videocamera-record-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-2" data-i18n="service_video_title">Video Production</h3>
<p className="text-sm text-neutral-500 leading-relaxed" data-i18n="service_video_desc">
                        Music videos, commercials, and brand documentaries shot on cinema-grade equipment.
                    </p>
</div>
</div>
</div>
</section>

<section className="border-white/5 border-t pt-24 pr-6 pb-24 pl-6" id="pricing">
<div className="max-w-7xl mr-auto ml-auto">
<h2 className="text-3xl font-medium text-white tracking-tight text-center mb-12" data-i18n="nav_pricing">Pricing</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="hover:bg-neutral-900/40 transition-colors bg-neutral-900/20 border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<h3 className="text-lg font-medium text-white" data-i18n="plan_basic">Recording Session</h3>
<div className="mt-4 mb-6">
<span className="text-3xl font-semibold text-white">€15</span>
<span className="text-neutral-500 text-sm">/ hour</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-400">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
<span className="" data-i18n="feat_recording">Vocal Recording</span>
</li>
<li className="flex text-sm text-neutral-400 gap-x-3 gap-y-3 items-center">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
<span className="" data-i18n="feat_engineer">Analog Recording Gear</span>
</li>
<li className="flex items-center gap-3 text-sm text-neutral-400">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
<span className="" data-i18n="feat_mix">Rough Mix</span>
</li>
</ul>
<a className="block w-full py-2.5 rounded-lg border border-white/10 text-center text-sm font-medium text-white hover:bg-white/5 transition-colors" data-i18n="btn_book" href="#booking">Book Now</a>
</div>

<div className="p-8 rounded-2xl border border-red-500/20 bg-[#0f0505] relative shadow-[0_0_30px_rgba(220,38,38,0.05)]">
<h3 className="text-lg font-medium text-white" data-i18n="plan_mix">Mix &amp; Master</h3>
<div className="mt-4 mb-6">
<span className="text-3xl font-semibold text-white">€100</span>
<span className="text-neutral-500 text-sm">/ track</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-red-500" icon="solar:check-circle-linear"></iconify-icon>
<span className="" data-i18n="feat_stem">Unlimited Stems</span>
</li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-red-500" icon="solar:check-circle-linear"></iconify-icon>
<span className="" data-i18n="feat_analog">Professional Mix &amp; Master</span>
</li>
<li className="flex text-sm text-neutral-300 gap-x-3 gap-y-3 items-center">
<iconify-icon className="text-red-500" icon="solar:check-circle-linear"></iconify-icon>
<span className="" data-i18n="feat_revision">3 Revisions</span>
</li>
</ul>
<a className="block w-full py-2.5 rounded-lg bg-white text-center text-sm font-medium text-black hover:bg-neutral-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]" data-i18n="btn_get_started" href="#booking">Get Started</a>
</div>

<div className="hover:bg-neutral-900/40 transition-colors bg-neutral-900/20 border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<h3 className="text-lg font-medium text-white" data-i18n="plan_video">Video</h3>
<div className="mt-4 mb-6">
<span className="text-3xl font-semibold text-white">Custom</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-400">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
<span className="" data-i18n="feat_4k">Music &amp; Content Videos</span>
</li>
<li className="flex gap-3 text-sm text-neutral-400 gap-x-3 gap-y-3 items-center">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
<span className="" data-i18n="feat_location">Testimonials &amp; Company Videos</span>
</li>
<li className="flex items-center gap-3 text-sm text-neutral-400">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
<span className="" data-i18n="feat_edit">Shooting &amp; Editing</span>
</li>
</ul>
<a className="block w-full py-2.5 rounded-lg border border-white/10 text-center text-sm font-medium text-white hover:bg-white/5 transition-colors" data-i18n="btn_inquire" href="#booking">Inquire</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#080808]" id="booking">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-10">
<h2 className="text-3xl font-medium text-white tracking-tight" data-i18n="nav_booking">Book a Session</h2>
<p className="text-neutral-500 text-sm mt-2" data-i18n="booking_sub">Configure your session and we'll get in touch.</p>
</div>
<div className="glass-panel p-8 md:p-12 rounded-2xl">
<form className="space-y-8">

<div className="p-5 rounded-lg border border-red-500/20 bg-red-900/5 flex flex-col md:flex-row items-start md:items-center gap-4 relative overflow-hidden">
<div className="absolute left-0 top-0 h-full w-1 bg-red-600"></div>
<div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 flex-shrink-0">
<iconify-icon icon="solar:microphone-2-linear" width="22"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-white text-sm font-medium" data-i18n="fixed_service">Studio Recording Session</h3>
<p className="text-neutral-500 text-xs mt-0.5" data-i18n="fixed_service_desc">Professional recording booth, engineer included.</p>
</div>
<div className="text-white text-sm font-medium bg-black/40 px-3 py-1.5 rounded border border-white/5">
                            €15<span className="text-neutral-500 text-xs">/hr</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 ml-1" data-i18n="label_name">Name</label>
<input className="focus:outline-none focus:border-red-500 transition-colors text-sm text-white bg-black/40 w-full border-white/10 border rounded-lg pt-3 pr-4 pb-3 pl-4" placeholder="Artist Name" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-400 font-medium ml-1" data-i18n="label_email">Email</label>
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="email@example.com" type="email"/>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

<div className="space-y-2">
<label className="text-xs text-neutral-400 font-medium ml-1" data-i18n="label_date">Preferred Date</label>
<div className="grid grid-cols-7 gap-1 text-center text-sm border border-white/10 rounded-lg p-4 bg-black/20">
<span className="text-neutral-500 text-[10px] mb-2">M</span><span className="text-neutral-500 text-[10px] mb-2">T</span><span className="text-neutral-500 text-[10px] mb-2">W</span><span className="text-neutral-500 text-[10px] mb-2">T</span><span className="text-neutral-500 text-[10px] mb-2">F</span><span className="text-neutral-500 text-[10px] mb-2">S</span><span className="text-neutral-500 text-[10px] mb-2">S</span>
<span className="text-neutral-600 py-1">28</span><span className="text-neutral-600 py-1">29</span><span className="text-neutral-600 py-1">30</span><span className="text-white py-1 hover:bg-white/10 rounded cursor-pointer">1</span><span className="text-white py-1 hover:bg-white/10 rounded cursor-pointer">2</span><span className="text-neutral-600 py-1">3</span><span className="text-neutral-600 py-1">4</span>
<span className="text-white py-1 hover:bg-white/10 rounded cursor-pointer">5</span><span className="bg-red-600 text-white rounded py-1 shadow-lg shadow-red-900/50">6</span><span className="text-white py-1 hover:bg-white/10 rounded cursor-pointer">7</span><span className="text-white py-1 hover:bg-white/10 rounded cursor-pointer">8</span><span className="text-white py-1 hover:bg-white/10 rounded cursor-pointer">9</span><span className="text-neutral-600 py-1">10</span><span className="text-neutral-600 py-1">11</span>
</div>
</div>

<div className="space-y-6">
<div className="space-y-2">
<label className="text-xs text-neutral-400 font-medium ml-1" data-i18n="label_time">Preferred Start Time</label>
<div className="relative">
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 transition-colors [color-scheme:dark]" type="time" value="12:00"/>
</div>
</div>
<div className="p-4 rounded-lg bg-neutral-900/50 border border-white/5">
<p className="text-[10px] text-neutral-500 leading-relaxed">
<iconify-icon className="inline-block mr-1 align-text-bottom text-neutral-400" icon="solar:info-circle-linear"></iconify-icon>
<span data-i18n="booking_note">Please arrive 10 minutes before your scheduled slot. A 50% deposit is required to confirm booking.</span>
</p>
</div>
</div>
</div>
<div className="pt-4">
<button className="w-full py-4 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors shadow-lg shadow-white/5" data-i18n="btn_submit" type="button">
                            Request Booking
                        </button>
</div>
</form>
</div>
</div>
</section>

<section className="border-white/5 border-t pt-24 pr-6 pb-24 pl-6" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl font-medium tracking-tight text-white mb-6" data-i18n="about_title">The Studio</h2>
<div className="space-y-4 text-neutral-400 leading-relaxed font-light text-sm md:text-base">
<p className="" data-i18n="about_p1">
                        RKEY MEDIA was founded on a simple premise: bridging the gap between raw artistic talent and high-end industry production standards. We are not just a studio; we are creative partners.
                    </p>
<p className="" data-i18n="about_p2">Our facility combines analog warmth with digital precision. Whether you are an emerging artist or an established label, we provide the technical foundation so you can focus on the art.</p>
</div>
<div className="mt-8 flex gap-6">
<div className="">
<span className="block text-2xl font-semibold text-white">500+</span>
<span className="text-xs text-neutral-500" data-i18n="stat_projects">Projects Completed</span>
</div>
<div className="">
<span className="block text-2xl font-semibold text-white">1M+</span>
<span className="text-xs text-neutral-500" data-i18n="stat_streams">Streams</span>
</div>
</div>
</div>
<div className="relative h-96 rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 group">

<div className="absolute inset-0 bg-gradient-to-tr from-neutral-900 via-neutral-800 to-red-900/20"></div>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-64 h-64 border border-white/5 rounded-full flex items-center justify-center">
<div className="w-48 h-48 border border-white/10 rounded-full flex items-center justify-center">
<div className="w-32 h-32 bg-red-600/10 rounded-full blur-2xl"></div>
</div>
</div>
</div>
<div className="absolute bottom-6 left-6">
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
<span className="uppercase text-xs text-white tracking-widest font-mono">Studio</span>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#080808] border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative" id="beatstore">
<div className="absolute inset-0 bg-red-900/5 blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
<div className="">
<h2 className="text-3xl font-medium tracking-tight text-white" data-i18n="nav_beatstore">Beatstore</h2>
<p className="text-neutral-500 text-sm mt-2" data-i18n="beatstore_sub">Premium instrumentals. Instant license delivery.</p>
</div>
<div className="flex gap-2">
<input className="bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-red-500/50 transition-colors" placeholder="Search beats..." type="text"/>
</div>
</div>

<div className="flex flex-col gap-2">

<div className="glass-panel rounded-xl p-4 flex flex-col md:flex-row items-center gap-4 hover:border-red-500/30 transition-all group">
<div className="w-12 h-12 rounded bg-neutral-800 flex items-center justify-center text-red-500 relative overflow-hidden">
<iconify-icon className="relative z-10" icon="solar:play-circle-linear" width="24"></iconify-icon>
<div className="absolute inset-0 bg-red-500/10 scale-0 group-hover:scale-100 transition-transform"></div>
</div>
<div className="flex-1 min-w-0 text-center md:text-left">
<h4 className="text-white font-medium text-sm truncate">Nightfall (trap)</h4>
<div className="flex items-center justify-center md:justify-start gap-2 text-xs text-neutral-500">
<span className="">140 BPM</span>
<span className="w-1 h-1 bg-neutral-700 rounded-full"></span>
<span className="">Cm</span>
</div>
</div>

<div className="hidden md:flex items-center gap-0.5 h-8 w-48 opacity-50">
<div className="bar w-1 bg-red-500/50 rounded-full" style={{animationDuration: '0.5s'}}></div>
<div className="bar w-1 bg-red-500/50 rounded-full" style={{animationDuration: '0.7s'}}></div>
<div className="bar w-1 bg-red-500/50 rounded-full" style={{animationDuration: '0.4s'}}></div>
<div className="bar w-1 bg-red-500/50 rounded-full" style={{animationDuration: '0.9s'}}></div>
<div className="bar w-1 bg-red-500/50 rounded-full" style={{animationDuration: '0.6s'}}></div>
<div className="bar w-1 bg-red-500/50 rounded-full" style={{animationDuration: '0.8s'}}></div>
<div className="bar w-1 bg-red-500/50 rounded-full" style={{animationDuration: '0.5s'}}></div>
<div className="bar w-1 bg-red-500/50 rounded-full" style={{animationDuration: '1.0s'}}></div>
<div className="bar w-1 bg-red-500/50 rounded-full" style={{animationDuration: '0.7s'}}></div>
<div className="bar w-1 bg-red-500/50 rounded-full" style={{animationDuration: '0.6s'}}></div>
</div>
<div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
<span className="text-white font-medium text-sm">€29.95</span>
<button className="px-4 py-2 bg-white text-black text-xs font-semibold rounded hover:bg-neutral-200 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:cart-large-minimalistic-linear"></iconify-icon>
<span data-i18n="btn_buy">Add</span>
</button>
</div>
</div>

<div className="glass-panel rounded-xl p-4 flex flex-col md:flex-row items-center gap-4 hover:border-red-500/30 transition-all group">
<div className="w-12 h-12 rounded bg-neutral-800 flex items-center justify-center text-white relative overflow-hidden">
<iconify-icon icon="solar:play-circle-linear" width="24"></iconify-icon>
</div>
<div className="flex-1 min-w-0 text-center md:text-left">
<h4 className="text-white font-medium text-sm truncate">Tokyo Drift (Phonk)</h4>
<div className="flex items-center justify-center md:justify-start gap-2 text-xs text-neutral-500">
<span>160 BPM</span>
<span className="w-1 h-1 bg-neutral-700 rounded-full"></span>
<span>Am</span>
</div>
</div>
<div className="hidden md:flex items-center gap-0.5 h-8 w-48 opacity-30">
<div className="h-4 w-1 bg-neutral-600 rounded-full"></div>
<div className="h-6 w-1 bg-neutral-600 rounded-full"></div>
<div className="h-3 w-1 bg-neutral-600 rounded-full"></div>
<div className="h-5 w-1 bg-neutral-600 rounded-full"></div>
<div className="h-2 w-1 bg-neutral-600 rounded-full"></div>
</div>
<div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
<span className="text-white font-medium text-sm">€29.95</span>
<button className="px-4 py-2 bg-transparent border border-white/20 text-white text-xs font-semibold rounded hover:bg-white/5 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:cart-large-minimalistic-linear"></iconify-icon>
<span data-i18n="btn_buy">Add</span>
</button>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-black">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<a className="text-lg font-bold tracking-widest text-white" href="#">RKEY</a>
<p className="text-[10px] text-neutral-600 mt-1">© 2024 RKEY MEDIA. All rights reserved.</p>
</div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:youtube-linear" width="20"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-spotify-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>


    </>
  );
}
