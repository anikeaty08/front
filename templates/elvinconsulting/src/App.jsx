import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Scroll Reveal Animation
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            const elementVisible = 150;
            
            revealElements.forEach((reveal) => {
                const elementTop = reveal.getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', revealOnScroll);
        // Trigger once on load
        revealOnScroll();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold text-white tracking-tight">ELVIN SPURJO</span>
<span className="hidden sm:block text-xs text-[#4BA3F8] bg-[#4BA3F8]/10 px-2 py-0.5 rounded-full border border-[#4BA3F8]/20">AI Consultant</span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-[#A9B5C7]">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#industries">Industries</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#demos">Demos</a>
</div>
<a className="text-sm font-medium text-white bg-gradient-to-r from-[#1A76D2] to-[#0E5CBF] px-4 py-2 rounded border border-white/10 hover:shadow-[0_0_20px_rgba(26,118,210,0.4)] transition-all" href="#contact">
                Let's Talk
            </a>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

<div className="absolute inset-0 z-0 bg-[#0A0D12]">
<div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

<div className="orb bg-[#0E5CBF] opacity-20 w-[500px] h-[500px] top-[-10%] left-[-10%]"></div>
<div className="orb w-[600px] h-[600px] bg-[#1A76D2] opacity-10 bottom-[-10%] right-[-10%] animation-delay-2000"></div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#1A76D2]/10 rounded-full opacity-30 flex items-center justify-center pointer-events-none">
<div className="w-[600px] h-[600px] border border-[#1A76D2]/10 rounded-full"></div>
<div className="w-[400px] h-[400px] border border-[#1A76D2]/10 rounded-full"></div>
</div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#4BA3F8]/30 bg-[#4BA3F8]/5 text-[#4BA3F8] text-xs font-medium mb-8 animate-[pulse-blue_3s_infinite]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4BA3F8] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#4BA3F8]"></span>
</span>
                Intelligent Automation Systems
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                AI Systems &amp; Automation for <br/>
<span className="blue-gradient-text">High-Trust UAE Businesses</span>
</h1>
<p className="text-lg md:text-xl text-[#A9B5C7] max-w-2xl mx-auto font-light leading-relaxed mb-10">
                I design AI Assistants, WhatsApp Automations &amp; Intelligent Workflows for clinics, real estate companies, and education institutions.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="px-8 py-4 rounded bg-gradient-to-r from-[#1A76D2] to-[#0E5CBF] text-white font-medium text-sm hover:shadow-[0_0_25px_rgba(26,118,210,0.5)] transition-all duration-300 border border-white/10 flex items-center gap-2" href="#contact">
                    REQUEST A DEMO
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="px-8 py-4 rounded bg-transparent border border-[#4BA3F8]/30 text-[#4BA3F8] font-medium text-sm hover:bg-[#4BA3F8]/5 hover:border-[#4BA3F8]/60 hover:shadow-[0_0_15px_rgba(75,163,248,0.2)] transition-all duration-300" href="#contact">
                    FREE CONSULTATION
                </a>
</div>
</div>

<div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#0A0D12] to-transparent z-10"></div>
</section>

<section className="bg-[#0A0D12] z-20 border-white/5 border-b pt-10 pb-10 relative">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs text-[#A9B5C7]/60 uppercase tracking-widest mb-8 font-medium">Powering Intelligent Systems With</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 group cursor-default">
<svg aria-hidden="true" className="iconify text-[#4BA3F8] group-hover:opacity-100 opacity-50 transition-opacity iconify--simple-icons" data-icon="simple-icons:openai" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22.282 9.821a6 6 0 0 0-.516-4.91a6.05 6.05 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a6 6 0 0 0-3.998 2.9a6.05 6.05 0 0 0 .743 7.097a5.98 5.98 0 0 0 .51 4.911a6.05 6.05 0 0 0 6.515 2.9A6 6 0 0 0 13.26 24a6.06 6.06 0 0 0 5.772-4.206a6 6 0 0 0 3.997-2.9a6.06 6.06 0 0 0-.747-7.073M13.26 22.43a4.48 4.48 0 0 1-2.876-1.04l.141-.081l4.779-2.758a.8.8 0 0 0 .392-.681v-6.737l2.02 1.168a.07.07 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494M3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085l4.783 2.759a.77.77 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646M2.34 7.896a4.5 4.5 0 0 1 2.366-1.973V11.6a.77.77 0 0 0 .388.677l5.815 3.354l-2.02 1.168a.08.08 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.08.08 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667m2.01-3.023l-.141-.085l-4.774-2.782a.78.78 0 0 0-.785 0L9.409 9.23V6.897a.07.07 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.8.8 0 0 0-.393.681zm1.097-2.365l2.602-1.5l2.607 1.5v2.999l-2.597 1.5l-2.607-1.5Z" fill="currentColor"></path></svg>
<span className="text-white font-semibold tracking-tight text-lg group-hover:text-[#4BA3F8] transition-colors">OpenAI</span>
</div>
<div className="flex items-center gap-2 group cursor-default">
<svg aria-hidden="true" className="iconify text-[#4BA3F8] group-hover:opacity-100 opacity-50 transition-opacity iconify--simple-icons" data-icon="simple-icons:whatsapp" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52s.198-.298.298-.497c.099-.198.05-.371-.025-.52s-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51a13 13 0 0 0-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074s2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413s.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.9 11.9 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413" fill="currentColor"></path></svg>
<span className="text-white font-semibold tracking-tight text-lg group-hover:text-[#4BA3F8] transition-colors">WhatsApp API</span>
</div>
<div className="flex items-center gap-2 group cursor-default">
<svg aria-hidden="true" className="iconify text-[#4BA3F8] group-hover:opacity-100 opacity-50 transition-opacity iconify--simple-icons" data-icon="simple-icons:hubspot" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18.164 7.93V5.084a2.2 2.2 0 0 0 1.267-1.978v-.067A2.2 2.2 0 0 0 17.238.845h-.067a2.2 2.2 0 0 0-2.193 2.193v.067a2.2 2.2 0 0 0 1.252 1.973l.013.006v2.852a6.2 6.2 0 0 0-2.969 1.31l.012-.01l-7.828-6.095A2.497 2.497 0 1 0 4.3 4.656l-.012.006l7.697 5.991a6.2 6.2 0 0 0-1.038 3.446a6.2 6.2 0 0 0 1.147 3.607l-.013-.02l-2.342 2.343a2 2 0 0 0-.58-.095h-.002a2.033 2.033 0 1 0 2.033 2.033a2 2 0 0 0-.1-.595l.005.014l2.317-2.317a6.247 6.247 0 1 0 4.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 1 1 3.215-3.207v.002a3.206 3.206 0 0 1-3.207 3.207z" fill="currentColor"></path></svg>
<span className="text-white font-semibold tracking-tight text-lg group-hover:text-[#4BA3F8] transition-colors">HubSpot</span>
</div>
<div className="flex items-center gap-2 group cursor-default">
<svg aria-hidden="true" className="iconify group-hover:opacity-100 transition-opacity iconify--simple-icons opacity-50 w-[24px] h-[24px]" data-icon="simple-icons:zoho" data-icon-replaced="true" data-width="24" height="24" role="img" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(75, 163, 248)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M8.66 6.897a1.3 1.3 0 0 0-1.205.765l-.642 1.44l-.062-.385A1.29 1.29 0 0 0 5.27 7.648l-4.185.678A1.29 1.29 0 0 0 .016 9.807l.678 4.18a1.29 1.29 0 0 0 1.27 1.087c.074 0 .143-.01.216-.017l4.18-.678c.436-.07.784-.351.96-.723l2.933 1.307a1.3 1.3 0 0 0 .988.026c.321-.12.575-.365.716-.678l.28-.629l.038.276a1.297 1.297 0 0 0 1.455 1.103l3.712-.501a1.29 1.29 0 0 0 1.03.514h4.236c.713 0 1.29-.58 1.291-1.291V9.545c0-.712-.58-1.291-1.291-1.291h-4.236q-.118 0-.23.022a1.3 1.3 0 0 0-.275-.288a1.28 1.28 0 0 0-.958-.253l-4.197.571q-.233.033-.432.14L9.159 7.01a1.3 1.3 0 0 0-.499-.113m-.025.705c.077 0 .159.013.24.052l2.971 1.324c-.128.238-.18.508-.142.782l.357 2.596h.002l-.745 1.672a.59.59 0 0 1-.777.296l-3.107-1.385l-.004-.041l-.41-2.526L8.1 7.95a.59.59 0 0 1 .536-.348zm-3.159.733c.125 0 .245.039.343.112c.13.09.21.227.237.382l.234 1.446l-.56 1.259a1.27 1.27 0 0 0-.026.987c.12.322.364.575.678.717l.295.131a.59.59 0 0 1-.428.314l-4.185.678a.59.59 0 0 1-.674-.485l-.678-4.18a.59.59 0 0 1 .485-.674l4.185-.678c.03-.004.064-.01.094-.01zm11.705.09a.6.6 0 0 1 .415.173a1.3 1.3 0 0 0-.416.947v4.237q.001.05.005.097l-3.55.482a.586.586 0 0 1-.66-.502l-.191-1.403l.899-2.017a1.29 1.29 0 0 0-.333-1.5l3.754-.51q.038-.005.077-.004m1.3.532h4.227c.326 0 .588.266.588.588v4.237a.59.59 0 0 1-.588.588h-4.237a.6.6 0 0 1-.12-.013c.47-.246.758-.765.684-1.318zm-5.988.309l.254.113c.296.133.43.48.296.777l-.432.97l-.207-1.465a.58.58 0 0 1 .09-.395zm5.39.538l.453 3.325a.583.583 0 0 1-.453.65zM6.496 11.545l.17 1.052a.59.59 0 0 1-.293-.776zm3.985 4.344a.59.59 0 0 0-.612.603c0 .358.244.61.601.61a.58.58 0 0 0 .607-.608c0-.35-.242-.605-.596-.605m5.545 0a.59.59 0 0 0-.612.603c0 .358.245.61.602.61a.58.58 0 0 0 .606-.608c0-.35-.24-.605-.596-.605m-8.537.018a.047.047 0 0 0-.048.047v.085c0 .026.021.047.048.047h.52l-.623.9a.1.1 0 0 0-.009.027v.027c0 .026.021.047.048.047h.815a.047.047 0 0 0 .047-.047v-.085a.047.047 0 0 0-.047-.047h-.55l.606-.9l.008-.026v-.028a.047.047 0 0 0-.047-.047zm5.303 0a.047.047 0 0 0-.047.047v1.086c0 .026.02.047.047.047h.135a.047.047 0 0 0 .047-.047v-.454h.545v.454c0 .026.02.047.047.047h.134a.047.047 0 0 0 .047-.047v-1.086a.047.047 0 0 0-.047-.047h-.134a.047.047 0 0 0-.047.047v.453h-.545v-.453a.047.047 0 0 0-.047-.047zm-2.324.164c.25 0 .372.194.372.425c0 .219-.109.425-.358.426c-.242 0-.375-.197-.375-.419c0-.235.108-.432.36-.432zm5.545 0c.25 0 .372.194.372.425c0 .219-.108.425-.358.426c-.242 0-.374-.197-.374-.419c0-.235.108-.432.36-.432" fill="currentColor"></path></svg>
<span className="group-hover:text-[#4BA3F8] transition-colors text-lg font-semibold text-white tracking-tight">Zoho</span>
</div>
<div className="flex items-center gap-2 group cursor-default">
<svg aria-hidden="true" className="iconify text-[#4BA3F8] group-hover:opacity-100 opacity-50 transition-opacity iconify--simple-icons" data-icon="simple-icons:n8n" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.474 5.684a2.53 2.53 0 0 0-2.447 1.895H16.13a2.526 2.526 0 0 0-2.492 2.11l-.103.624a1.26 1.26 0 0 1-1.246 1.055h-1.001a2.527 2.527 0 0 0-4.893 0H4.973a2.527 2.527 0 1 0 0 1.264h1.422a2.527 2.527 0 0 0 4.894 0h1a1.26 1.26 0 0 1 1.247 1.055l.103.623a2.526 2.526 0 0 0 2.492 2.111h.37a2.527 2.527 0 1 0 0-1.263h-.37a1.26 1.26 0 0 1-1.246-1.056l-.103-.623A2.52 2.52 0 0 0 13.96 12a2.52 2.52 0 0 0 .82-1.48l.104-.622a1.26 1.26 0 0 1 1.246-1.056h2.896a2.527 2.527 0 1 0 2.447-3.158m0 1.263a1.263 1.263 0 0 1 1.263 1.263a1.263 1.263 0 0 1-1.263 1.264A1.263 1.263 0 0 1 20.21 8.21a1.263 1.263 0 0 1 1.264-1.263m-18.948 3.79A1.263 1.263 0 0 1 3.79 12a1.263 1.263 0 0 1-1.264 1.263A1.263 1.263 0 0 1 1.263 12a1.263 1.263 0 0 1 1.263-1.263m6.316 0A1.263 1.263 0 0 1 10.105 12a1.263 1.263 0 0 1-1.263 1.263A1.263 1.263 0 0 1 7.58 12a1.263 1.263 0 0 1 1.263-1.263m10.106 3.79a1.263 1.263 0 0 1 1.263 1.263a1.263 1.263 0 0 1-1.263 1.263a1.263 1.263 0 0 1-1.264-1.263a1.263 1.263 0 0 1 1.263-1.264" fill="currentColor"></path></svg>
<span className="text-white font-semibold tracking-tight text-lg group-hover:text-[#4BA3F8] transition-colors">n8n</span>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto">
<div className="text-center">
<h3 className="text-2xl font-semibold text-white">10+</h3>
<p className="text-xs text-[#A9B5C7]">AI Systems Deployed</p>
</div>
<div className="text-center border-l border-white/5">
<h3 className="text-2xl font-semibold text-white">UAE</h3>
<p className="text-xs text-[#A9B5C7]">Based Consultant</p>
</div>
<div className="text-center border-l border-white/5 col-span-2 md:col-span-1">
<h3 className="text-2xl font-semibold text-white">100%</h3>
<p className="text-xs text-[#A9B5C7]">Data Privacy Focus</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24 relative" id="about">

<div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none">
<svg aria-hidden="true" className="iconify w-full h-full text-[#1A76D2] iconify--carbon" data-icon="carbon:network-3-reference" height="1em" role="img" viewbox="0 0 32 32" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8zm26 10h-8v-8h8zm-6-2h4v-4h-4zm-4-8h-8v-8h8zm-6-2h4v-4h-4z" fill="currentColor"></path><path d="M24 17h-2v-2h2a4 4 0 0 0 0-8H12V5h12a6 6 0 0 1 0 12m-14-7H2V2h8zM4 8h4V4H4z" fill="currentColor"></path></svg>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-x-16 gap-y-16 items-center">

<div className="relative group reveal">
<div className="absolute inset-0 bg-gradient-to-tr from-[#1A76D2] to-[#0E5CBF] rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="relative rounded-lg overflow-hidden border border-[#1A76D2]/30 bg-[#0A0D12]">


<img alt="Elvin Spurjo - AI Consultant" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90" src="https://i.postimg.cc/CKQCWzNc/Elvin-portfolio-image.jpg"/>
<div className="bg-gradient-to-t from-[#0A0D12] via-[#0A0D12]/80 to-transparent w-full pt-6 pr-6 pb-6 pl-6 absolute bottom-0 left-0">
<h3 className="text-xl font-semibold text-white">Elvin Spurjo</h3>
<p className="text-sm text-[#4BA3F8]">AI Strategy &amp; Implementation</p>
</div>
</div>
</div>

<div className="reveal delay-100">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-[#4BA3F8]"></span>
                        About Me
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
                        Bridging the gap between  <span className="text-[#A9B5C7]">Corporate Strategy</span> &amp; <span className="blue-gradient-text">Artificial Intelligence</span>.
                    </h2>
<p className="text-[#A9B5C7] leading-relaxed mb-6 font-light">
                        I am a UAE-based AI Consultant specializing in operational efficiency for clinics, real estate firms, and educational institutions. Unlike generic agencies, I operate as a strategic partner, ensuring that every automation we build solves a specific, high-value business problem.
                    </p>
<p className="text-[#A9B5C7] leading-relaxed mb-8 font-light">
                        My approach blends systems thinking with advanced no-code orchestration, delivering enterprise-grade reliability without the bloat of traditional software development.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<span className="flex items-center justify-center w-6 h-6 rounded bg-[#1A76D2]/20 text-[#4BA3F8]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
<span className="text-sm text-white">Specialized in Local UAE Market Needs</span>
</li>
<li className="flex items-center gap-3">
<span className="flex items-center justify-center w-6 h-6 rounded bg-[#1A76D2]/20 text-[#4BA3F8]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
<span className="text-sm text-white">Privacy-First Data Handling</span>
</li>
<li className="flex items-center gap-3">
<span className="flex items-center justify-center w-6 h-6 rounded bg-[#1A76D2]/20 text-[#4BA3F8]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
<span className="text-sm text-white">End-to-End Workflow Automation</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0D12] relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Enterprise-Grade Services</h2>
<p className="text-[#A9B5C7] font-light">Scalable, secure, and intelligent solutions designed for growth.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-xl group transition-all duration-300 reveal">
<div className="w-12 h-12 rounded bg-[#1A76D2]/10 border border-[#1A76D2]/20 flex items-center justify-center text-[#4BA3F8] mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bot" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#4BA3F8] transition-colors">AI Assistants (Chat/Voice)</h3>
<p className="text-sm text-[#A9B5C7] leading-relaxed">24/7 intelligent agents that handle inquiries, qualify leads, and schedule meetings.</p>
</div>

<div className="glass-panel p-8 rounded-xl group transition-all duration-300 reveal delay-100">
<div className="w-12 h-12 rounded bg-[#1A76D2]/10 border border-[#1A76D2]/20 flex items-center justify-center text-[#4BA3F8] mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-circle" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#4BA3F8] transition-colors">WhatsApp Automations</h3>
<p className="text-sm text-[#A9B5C7] leading-relaxed">Direct integration with WhatsApp API for bulk messaging, support, and sales flows.</p>
</div>

<div className="glass-panel p-8 rounded-xl group transition-all duration-300 reveal delay-200">
<div className="w-12 h-12 rounded bg-[#1A76D2]/10 border border-[#1A76D2]/20 flex items-center justify-center text-[#4BA3F8] mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:stethoscope" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 2v2M5 2v2m0-1H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></g></svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#4BA3F8] transition-colors">Clinic AI Receptionist</h3>
<p className="text-sm text-[#A9B5C7] leading-relaxed">Manage patient bookings, reminders, and FAQs without human intervention.</p>
</div>

<div className="glass-panel p-8 rounded-xl group transition-all duration-300 reveal">
<div className="w-12 h-12 rounded bg-[#1A76D2]/10 border border-[#1A76D2]/20 flex items-center justify-center text-[#4BA3F8] mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:workflow" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></g></svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#4BA3F8] transition-colors">Workflow Automation</h3>
<p className="text-sm text-[#A9B5C7] leading-relaxed">Seamless data flow between your apps using n8n, Make, and Zapier.</p>
</div>

<div className="glass-panel p-8 rounded-xl group transition-all duration-300 reveal delay-100">
<div className="w-12 h-12 rounded bg-[#1A76D2]/10 border border-[#1A76D2]/20 flex items-center justify-center text-[#4BA3F8] mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:database" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path><path d="M3 12a9 3 0 0 0 18 0"></path></g></svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#4BA3F8] transition-colors">CRM Integrations</h3>
<p className="text-sm text-[#A9B5C7] leading-relaxed">Connect Zoho or HubSpot to your communication channels for real-time syncing.</p>
</div>

<div className="glass-panel p-8 rounded-xl group transition-all duration-300 reveal delay-200">
<div className="w-12 h-12 rounded bg-[#1A76D2]/10 border border-[#1A76D2]/20 flex items-center justify-center text-[#4BA3F8] mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:file-text" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#4BA3F8] transition-colors">Document Intelligence</h3>
<p className="text-sm text-[#A9B5C7] leading-relaxed">Extract and process data from invoices, contracts, and forms automatically.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-gradient-to-b from-[#0A0D12] to-[#0E1520]" id="industries">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-16 text-center">Tailored Solutions</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="relative rounded-2xl overflow-hidden border border-white/5 bg-[#0A0D12] group reveal">
<div className="absolute inset-0 bg-[url('https://api.iconify.design/heroicons/heart.svg?color=%231a76d2')] opacity-5 bg-repeat space-x-4"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A76D2]/10"></div>
<div className="p-8 relative z-10 h-full flex flex-col">
<svg aria-hidden="true" className="iconify text-[#4BA3F8] w-12 h-12 mb-6 iconify--lucide" data-icon="lucide:activity" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-xl font-semibold text-white mb-4">Clinics &amp; Healthcare</h3>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-2 text-sm text-[#A9B5C7]">
<span className="text-[#4BA3F8] mt-1">•</span> Appointment Automation
                            </li>
<li className="flex items-start gap-2 text-sm text-[#A9B5C7]">
<span className="text-[#4BA3F8] mt-1">•</span> Patient Follow-up Bots
                            </li>
<li className="flex items-start gap-2 text-sm text-[#A9B5C7]">
<span className="text-[#4BA3F8] mt-1">•</span> EMR Data Entry
                            </li>
</ul>
<div className="h-1 w-full bg-[#1A76D2]/20 rounded-full overflow-hidden">
<div className="h-full bg-[#4BA3F8] w-0 group-hover:w-full transition-all duration-700"></div>
</div>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden border border-white/5 bg-[#0A0D12] group reveal delay-100">
<div className="absolute inset-0 bg-[url('https://api.iconify.design/lucide/building.svg?color=%231a76d2')] opacity-5 bg-repeat"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A76D2]/10"></div>
<div className="p-8 relative z-10 h-full flex flex-col">
<svg aria-hidden="true" className="iconify text-[#4BA3F8] w-12 h-12 mb-6 iconify--lucide" data-icon="lucide:building-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></g></svg>
<h3 className="text-xl font-semibold text-white mb-4">Real Estate</h3>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-2 text-sm text-[#A9B5C7]">
<span className="text-[#4BA3F8] mt-1">•</span> Viewing Scheduler
                            </li>
<li className="flex items-start gap-2 text-sm text-[#A9B5C7]">
<span className="text-[#4BA3F8] mt-1">•</span> Lead Qualification Bot
                            </li>
<li className="flex items-start gap-2 text-sm text-[#A9B5C7]">
<span className="text-[#4BA3F8] mt-1">•</span> Property Match Alerts
                            </li>
</ul>
<div className="h-1 w-full bg-[#1A76D2]/20 rounded-full overflow-hidden">
<div className="h-full bg-[#4BA3F8] w-0 group-hover:w-full transition-all duration-700"></div>
</div>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden border border-white/5 bg-[#0A0D12] group reveal delay-200">
<div className="absolute inset-0 bg-[url('https://api.iconify.design/lucide/graduation-cap.svg?color=%231a76d2')] opacity-5 bg-repeat"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A76D2]/10"></div>
<div className="p-8 relative z-10 h-full flex flex-col">
<svg aria-hidden="true" className="iconify text-[#4BA3F8] w-12 h-12 mb-6 iconify--lucide" data-icon="lucide:graduation-cap" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></g></svg>
<h3 className="text-xl font-semibold text-white mb-4">Education</h3>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-2 text-sm text-[#A9B5C7]">
<span className="text-[#4BA3F8] mt-1">•</span> Student Enrollment AI
                            </li>
<li className="flex items-start gap-2 text-sm text-[#A9B5C7]">
<span className="text-[#4BA3F8] mt-1">•</span> Course Inquiry Bot
                            </li>
<li className="flex items-start gap-2 text-sm text-[#A9B5C7]">
<span className="text-[#4BA3F8] mt-1">•</span> Admin Workflow Automations
                            </li>
</ul>
<div className="h-1 w-full bg-[#1A76D2]/20 rounded-full overflow-hidden">
<div className="h-full bg-[#4BA3F8] w-0 group-hover:w-full transition-all duration-700"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0D12]" id="demos">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div className="reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">System Architecture</h2>
<p className="text-[#A9B5C7] font-light max-w-xl">A glimpse into the logic and interface of reliable AI systems.</p>
</div>
</div>
<div className="grid lg:grid-cols-2 gap-12">

<div className="glass-panel p-8 rounded-2xl reveal">
<div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
<span className="w-3 h-3 rounded-full bg-red-500/50"></span>
<span className="w-3 h-3 rounded-full bg-yellow-500/50"></span>
<span className="w-3 h-3 rounded-full bg-green-500/50"></span>
<span className="text-xs text-[#A9B5C7] ml-2">WhatsApp_Clinic_Bot.js</span>
</div>

<div className="space-y-4">
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">U</div>
<div className="bg-white/5 rounded-lg rounded-tl-none p-3 max-w-[80%] text-sm text-[#A9B5C7]">
                                I need to book a dental checkup for tomorrow.
                            </div>
</div>
<div className="flex gap-3 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-[#1A76D2] flex items-center justify-center text-xs text-white">AI</div>
<div className="bg-[#1A76D2]/20 border border-[#1A76D2]/30 rounded-lg rounded-tr-none p-3 max-w-[80%] text-sm text-white shadow-[0_0_15px_rgba(26,118,210,0.2)]">
                                Certainly. I have an opening at 10:30 AM or 2:15 PM with Dr. Sarah. Which works best?
                            </div>
</div>
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">U</div>
<div className="bg-white/5 rounded-lg rounded-tl-none p-3 max-w-[80%] text-sm text-[#A9B5C7]">
                                10:30 AM please.
                            </div>
</div>

<div className="flex justify-center my-4">
<div className="text-xs text-[#4BA3F8] bg-[#4BA3F8]/10 px-3 py-1 rounded-full border border-[#4BA3F8]/20 flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Trigger: CRM Update &amp; Calendar Event
                             </div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl relative overflow-hidden reveal delay-100 flex items-center justify-center bg-[#05070a]">
<div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

<div className="relative z-10 w-full flex flex-col items-center gap-8">

<div className="bg-[#2A2D35] border border-white/10 p-4 rounded-lg w-64 flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-[#25D366] iconify--simple-icons" data-icon="simple-icons:whatsapp" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52s.198-.298.298-.497c.099-.198.05-.371-.025-.52s-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51a13 13 0 0 0-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074s2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413s.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.9 11.9 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413" fill="currentColor"></path></svg>
<div>
<div className="text-xs text-white font-medium">New Lead</div>
<div className="text-[10px] text-gray-400">Incoming Message</div>
</div>
</div>

<div className="h-8 w-px bg-white/20"></div>

<div className="bg-[#1A76D2]/10 border border-[#1A76D2] p-4 rounded-lg w-64 flex items-center gap-3 shadow-[0_0_20px_rgba(26,118,210,0.2)]">
<svg aria-hidden="true" className="iconify text-[#4BA3F8] iconify--simple-icons" data-icon="simple-icons:openai" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22.282 9.821a6 6 0 0 0-.516-4.91a6.05 6.05 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a6 6 0 0 0-3.998 2.9a6.05 6.05 0 0 0 .743 7.097a5.98 5.98 0 0 0 .51 4.911a6.05 6.05 0 0 0 6.515 2.9A6 6 0 0 0 13.26 24a6.06 6.06 0 0 0 5.772-4.206a6 6 0 0 0 3.997-2.9a6.06 6.06 0 0 0-.747-7.073M13.26 22.43a4.48 4.48 0 0 1-2.876-1.04l.141-.081l4.779-2.758a.8.8 0 0 0 .392-.681v-6.737l2.02 1.168a.07.07 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494M3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085l4.783 2.759a.77.77 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646M2.34 7.896a4.5 4.5 0 0 1 2.366-1.973V11.6a.77.77 0 0 0 .388.677l5.815 3.354l-2.02 1.168a.08.08 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.08.08 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667m2.01-3.023l-.141-.085l-4.774-2.782a.78.78 0 0 0-.785 0L9.409 9.23V6.897a.07.07 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.8.8 0 0 0-.393.681zm1.097-2.365l2.602-1.5l2.607 1.5v2.999l-2.597 1.5l-2.607-1.5Z" fill="currentColor"></path></svg>
<div>
<div className="text-xs text-white font-medium">Analyze Intent</div>
<div className="text-[10px] text-[#4BA3F8]">GPT-4 Turbo</div>
</div>
</div>

<div className="h-8 w-px bg-white/20"></div>
<div className="w-32 border-t border-white/20"></div>
<div className="flex justify-between w-64 -mt-px">
<div className="h-8 w-px bg-white/20"></div>
<div className="h-8 w-px bg-white/20"></div>
</div>

<div className="flex gap-4">
<div className="bg-[#2A2D35] border border-white/10 p-3 rounded-lg w-32 flex flex-col items-center gap-2">
<svg aria-hidden="true" className="iconify text-orange-400 iconify--simple-icons" data-icon="simple-icons:hubspot" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.164 7.93V5.084a2.2 2.2 0 0 0 1.267-1.978v-.067A2.2 2.2 0 0 0 17.238.845h-.067a2.2 2.2 0 0 0-2.193 2.193v.067a2.2 2.2 0 0 0 1.252 1.973l.013.006v2.852a6.2 6.2 0 0 0-2.969 1.31l.012-.01l-7.828-6.095A2.497 2.497 0 1 0 4.3 4.656l-.012.006l7.697 5.991a6.2 6.2 0 0 0-1.038 3.446a6.2 6.2 0 0 0 1.147 3.607l-.013-.02l-2.342 2.343a2 2 0 0 0-.58-.095h-.002a2.033 2.033 0 1 0 2.033 2.033a2 2 0 0 0-.1-.595l.005.014l2.317-2.317a6.247 6.247 0 1 0 4.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 1 1 3.215-3.207v.002a3.206 3.206 0 0 1-3.207 3.207z" fill="currentColor"></path></svg>
<div className="text-[10px] text-white">Update Deal</div>
</div>
<div className="bg-[#2A2D35] border border-white/10 p-3 rounded-lg w-32 flex flex-col items-center gap-2">
<svg aria-hidden="true" className="iconify text-blue-400 iconify--lucide" data-icon="lucide:mail" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
<div className="text-[10px] text-white">Notify Team</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0D12] border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white mb-16 text-center">Why Businesses Trust Me</h2>
<div className="grid md:grid-cols-4 gap-8">
<div className="text-center group reveal">
<div className="w-16 h-16 mx-auto rounded-full bg-[#1A76D2]/10 flex items-center justify-center text-[#4BA3F8] mb-4 group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<h3 className="text-white font-medium mb-2">UAE Based</h3>
<p className="text-sm text-[#A9B5C7]">On-ground availability and understanding of local business culture.</p>
</div>
<div className="text-center group reveal delay-100">
<div className="w-16 h-16 mx-auto rounded-full bg-[#1A76D2]/10 flex items-center justify-center text-[#4BA3F8] mb-4 group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-white font-medium mb-2">High Trust</h3>
<p className="text-sm text-[#A9B5C7]">Transparent processes and prioritized data security.</p>
</div>
<div className="text-center group reveal delay-200">
<div className="w-16 h-16 mx-auto rounded-full bg-[#1A76D2]/10 flex items-center justify-center text-[#4BA3F8] mb-4 group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:rocket" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></g></svg>
</div>
<h3 className="text-white font-medium mb-2">Fast Execution</h3>
<p className="text-sm text-[#A9B5C7]">Hybrid No-Code + AI approach allows for rapid deployment.</p>
</div>
<div className="text-center group reveal delay-300">
<div className="w-16 h-16 mx-auto rounded-full bg-[#1A76D2]/10 flex items-center justify-center text-[#4BA3F8] mb-4 group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:brain-circuit" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></g></svg>
</div>
<h3 className="text-white font-medium mb-2">Future Proof</h3>
<p className="text-sm text-[#A9B5C7]">Systems designed to scale with your business growth.</p>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-[#05070a] overflow-hidden">
<div className="marquee-container">
<div className="marquee-content gap-16 px-4">

<span className="text-xl font-semibold text-[#4BA3F8]/40">OpenAI</span>
<span className="text-xl font-semibold text-[#4BA3F8]/40">WhatsApp Business API</span>
<span className="text-xl font-semibold text-[#4BA3F8]/40">Make.com</span>
<span className="text-xl font-semibold text-[#4BA3F8]/40">n8n</span>
<span className="text-xl font-semibold text-[#4BA3F8]/40">HubSpot</span>
<span className="text-xl font-semibold text-[#4BA3F8]/40">Zoho CRM</span>
<span className="text-xl font-semibold text-[#4BA3F8]/40">Zapier</span>
<span className="text-xl font-semibold text-[#4BA3F8]/40">Vapi</span>
<span className="text-xl font-semibold text-[#4BA3F8]/40">ElevenLabs</span>

<span className="text-xl font-semibold text-[#4BA3F8]/40">OpenAI</span>
<span className="text-xl font-semibold text-[#4BA3F8]/40">WhatsApp Business API</span>
<span className="text-xl font-semibold text-[#4BA3F8]/40">Make.com</span>
<span className="text-xl font-semibold text-[#4BA3F8]/40">n8n</span>
<span className="text-xl font-semibold text-[#4BA3F8]/40">HubSpot</span>
<span className="text-xl font-semibold text-[#4BA3F8]/40">Zoho CRM</span>
<span className="text-xl font-semibold text-[#4BA3F8]/40">Zapier</span>
<span className="text-xl font-semibold text-[#4BA3F8]/40">Vapi</span>
<span className="text-xl font-semibold text-[#4BA3F8]/40">ElevenLabs</span>
</div>
</div>
</section>

<section className="py-24 relative" id="contact">
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="glass-panel p-8 md:p-12 rounded-2xl shadow-[0_0_50px_-20px_rgba(26,118,210,0.2)]">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold text-white mb-4">Start Your Automation Journey</h2>
<p className="text-[#A9B5C7] text-sm">Book a free discovery call to discuss your business needs.</p>
</div>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-[#A9B5C7] uppercase tracking-wider">Name</label>
<input className="w-full bg-[#0A0D12] border border-white/10 rounded p-3 text-white focus:border-[#4BA3F8] focus:ring-1 focus:ring-[#4BA3F8] outline-none transition-all placeholder:text-gray-700" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-[#A9B5C7] uppercase tracking-wider">Company</label>
<input className="w-full bg-[#0A0D12] border border-white/10 rounded p-3 text-white focus:border-[#4BA3F8] focus:ring-1 focus:ring-[#4BA3F8] outline-none transition-all placeholder:text-gray-700" placeholder="Business Name" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-[#A9B5C7] uppercase tracking-wider">Email</label>
<input className="w-full bg-[#0A0D12] border border-white/10 rounded p-3 text-white focus:border-[#4BA3F8] focus:ring-1 focus:ring-[#4BA3F8] outline-none transition-all placeholder:text-gray-700" placeholder="john@company.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-[#A9B5C7] uppercase tracking-wider">Interest</label>
<select className="w-full bg-[#0A0D12] border border-white/10 rounded p-3 text-white focus:border-[#4BA3F8] focus:ring-1 focus:ring-[#4BA3F8] outline-none transition-all">
<option>General Inquiry</option>
<option>Clinic Automation</option>
<option>Real Estate AI</option>
<option>Education Systems</option>
<option>WhatsApp Bots</option>
</select>
</div>
<button className="w-full py-4 bg-gradient-to-r from-[#1A76D2] to-[#0E5CBF] text-white font-semibold rounded hover:shadow-[0_0_20px_rgba(26,118,210,0.4)] transition-all duration-300" type="button">
                        AUTOMATE MY BUSINESS
                    </button>
<button className="w-full py-3 bg-transparent border border-[#4BA3F8]/30 text-[#4BA3F8] font-medium rounded hover:bg-[#4BA3F8]/10 transition-all flex items-center justify-center gap-2" type="button">
<svg aria-hidden="true" className="iconify iconify--simple-icons" data-icon="simple-icons:whatsapp" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52s.198-.298.298-.497c.099-.198.05-.371-.025-.52s-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51a13 13 0 0 0-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074s2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413s.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.9 11.9 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413" fill="currentColor"></path></svg>
                        Chat on WhatsApp
                    </button>
</form>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0E5CBF]/10 to-transparent pointer-events-none"></div>
</section>

<footer className="py-12 border-t border-white/5 bg-[#05070a]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm text-[#A9B5C7]">
                © 2024 Elvin Spurjo. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="text-[#A9B5C7] hover:text-[#4BA3F8] transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--simple-icons" data-icon="simple-icons:linkedin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" fill="currentColor"></path></svg></a>
<a className="text-[#A9B5C7] hover:text-[#4BA3F8] transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--simple-icons" data-icon="simple-icons:twitter" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21.543 7.104c.015.211.015.423.015.636c0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041a4.93 4.93 0 0 1-4.6-3.42a4.9 4.9 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.9 4.9 0 0 0 2.235.616A4.93 4.93 0 0 1 1.67 3.148a13.98 13.98 0 0 0 10.15 5.144a4.929 4.929 0 0 1 8.39-4.49a9.9 9.9 0 0 0 3.128-1.196a4.94 4.94 0 0 1-2.165 2.724A9.8 9.8 0 0 0 24 4.555a10 10 0 0 1-2.457 2.549" fill="currentColor"></path></svg></a>
</div>
</div>
</footer>


    </>
  );
}
