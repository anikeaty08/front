import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();

        const modal = document.getElementById('cal-modal');
        const modalContent = document.getElementById('cal-modal-content');
        const closeModalBtn = document.getElementById('close-modal');
        const triggers = document.querySelectorAll('.cal-trigger');
        const iframe = document.getElementById('cal-iframe');

        function openModal() {
            if(!iframe.src) {
                iframe.src = "https://cal.com/dheekshit/30-min-meeting";
            }
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            
            setTimeout(() => {
                modal.classList.replace('opacity-0', 'opacity-100');
                modalContent.classList.replace('scale-95', 'scale-100');
            }, 10);
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modal.classList.replace('opacity-100', 'opacity-0');
            modalContent.classList.replace('scale-100', 'scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                document.body.style.overflow = '';
            }, 300);
        }

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                openModal();
            });
        });

        closeModalBtn.addEventListener('click', closeModal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-[0_2px_10px_-5px_rgba(0,0,0,0.05)] transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
<a className="flex items-center gap-2.5 group" href="#">

<svg className="w-10 h-auto text-black drop-shadow-sm" fill="currentColor" viewbox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5 h20 l12.5 35 l10 -25 l10 25 l12.5 -35 h20 l-25 50 h-15 l-10 -25 l-10 25 h-15 z"></path>
</svg>
<span className="text-xl font-medium tracking-tight text-black">Workomate</span>
</a>
<div className="hidden lg:flex items-center gap-8">
<a className="text-base font-normal text-gray-600 hover:text-black transition-colors" href="#services">Services</a>
<a className="text-base font-normal text-gray-600 hover:text-black transition-colors" href="#how-it-works">How It Works</a>
<a className="text-base font-normal text-gray-600 hover:text-black transition-colors" href="case-studies.html">Case Studies</a>
<a className="text-base font-normal text-gray-600 hover:text-black transition-colors" href="#partners">Partners</a>
<a className="text-base font-normal text-gray-600 hover:text-black transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center">

<button className="cal-trigger hidden md:flex bg-gradient-to-b from-[#3a3a3a] to-[#0a0a0a] shadow-[0_4px_8px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-2px_1px_rgba(0,0,0,0.5)] border border-[#000] active:shadow-[inset_0_3px_5px_rgba(0,0,0,0.6)] text-white px-5 py-2 rounded-lg text-sm font-medium transition-all">
                    BOOK A FREE AUDIT
                </button>
<button className="lg:hidden p-2 text-black bg-white rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,1)] border border-gray-200 ml-4">
<i className="w-5 h-5" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-40 md:pb-24 px-6 flex flex-col items-center text-center w-full border-b border-gray-200 bg-[#f8fafc] bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:40px_40px] [background-position:center_top]">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white shadow-[0_2px_5px_rgba(0,0,0,0.02),inset_0_1px_0_rgba(255,255,255,1)] mb-6">
<span className="text-xs font-medium text-black tracking-widest uppercase">Enterprise AI Solutions</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-normal text-black tracking-tight leading-[1.1] max-w-4xl mb-6 drop-shadow-sm">
            Agentic AI systems<br/>for the enterprise
        </h1>
<p className="text-lg md:text-xl max-w-2xl text-gray-600 mb-10 leading-relaxed font-normal">
            Built on the industry-leading, analyst-recognized agent platform. Automate operations, save hours, and scale efficiently.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto z-10">

<button className="cal-trigger w-full sm:w-auto bg-gradient-to-b from-[#3a3a3a] to-[#0a0a0a] shadow-[0_5px_10px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-2px_1px_rgba(0,0,0,0.5)] border border-[#000] active:shadow-[inset_0_3px_5px_rgba(0,0,0,0.6)] text-white px-6 py-3 rounded-xl text-base font-medium transition-all flex items-center justify-center gap-2">
                BOOK A FREE AUDIT
                <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>

<a className="w-full sm:w-auto bg-gradient-to-b from-[#ffffff] to-[#e8ecef] shadow-[0_4px_6px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1),inset_0_-2px_1px_rgba(203,213,225,0.6)] border border-[#cbd5e1] active:shadow-[inset_0_3px_5px_rgba(0,0,0,0.05)] text-black px-6 py-3 rounded-xl text-base font-medium transition-all flex items-center justify-center" href="case-studies.html">
                CASE STUDIES
            </a>
</div>

<div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl text-left">
<div className="bg-gradient-to-b from-[#ffffff] to-[#f4f7f9] rounded-2xl shadow-[0_10px_20px_-5px_rgba(0,0,0,0.08),inset_0_2px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(226,232,240,0.8)] border border-[#e2e8f0] p-6 group cursor-pointer flex flex-col justify-between min-h-[160px] hover:-translate-y-0.5 transition-transform duration-300">
<div>
<h3 className="text-xl font-medium tracking-tight text-black mb-2 flex items-center justify-between">
                        Pre-built Systems
                        <div className="bg-gradient-to-b from-white to-gray-50 border border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_1px_0_rgba(255,255,255,1)] p-1.5 rounded-lg group-hover:bg-black group-hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</h3>
<p className="text-base text-gray-600 font-normal leading-relaxed">Use systems for Banking, Healthcare, Lead Gen, and Management today.</p>
</div>
</div>
<div className="bg-gradient-to-b from-[#ffffff] to-[#f4f7f9] rounded-2xl shadow-[0_10px_20px_-5px_rgba(0,0,0,0.08),inset_0_2px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(226,232,240,0.8)] border border-[#e2e8f0] p-6 group cursor-pointer flex flex-col justify-between min-h-[160px] hover:-translate-y-0.5 transition-transform duration-300">
<div>
<h3 className="text-xl font-medium tracking-tight text-black mb-2 flex items-center justify-between">
                        System Accelerators
                        <div className="bg-gradient-to-b from-white to-gray-50 border border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_1px_0_rgba(255,255,255,1)] p-1.5 rounded-lg group-hover:bg-black group-hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</h3>
<p className="text-base text-gray-600 font-normal leading-relaxed">Leverage our Marketplace of pre-built AI agents, templates, and integrations.</p>
</div>
</div>
<div className="bg-gradient-to-b from-[#ffffff] to-[#f4f7f9] rounded-2xl shadow-[0_10px_20px_-5px_rgba(0,0,0,0.08),inset_0_2px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(226,232,240,0.8)] border border-[#e2e8f0] p-6 group cursor-pointer flex flex-col justify-between min-h-[160px] hover:-translate-y-0.5 transition-transform duration-300">
<div>
<h3 className="text-xl font-medium tracking-tight text-black mb-2 flex items-center justify-between">
                        Tailored Systems
                        <div className="bg-gradient-to-b from-white to-gray-50 border border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_1px_0_rgba(255,255,255,1)] p-1.5 rounded-lg group-hover:bg-black group-hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</h3>
<p className="text-base text-gray-600 font-normal leading-relaxed">Design and build systems on our Agent Platform across enterprise use cases.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-transparent border-b border-gray-200" id="partners">
<div className="max-w-6xl mx-auto">
<div className="mb-10 text-center md:text-left">
<h2 className="text-3xl md:text-4xl font-normal text-black tracking-tight mb-4">Strategic partners: Microsoft and AWS</h2>
<p className="text-lg text-gray-600 font-normal leading-relaxed max-w-3xl md:mx-0 mx-auto">We work with the world's largest platforms. Check your provider for more information or start building via their marketplaces.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-gradient-to-b from-[#222] to-[#0a0a0a] rounded-3xl p-8 flex flex-col justify-between min-h-[350px] shadow-[0_15px_30px_rgba(0,0,0,0.15),inset_0_1px_1px_rgba(255,255,255,0.1)] border border-gray-800">
<div className="flex-grow flex items-center justify-center py-8">
<div className="flex items-center gap-3 text-3xl md:text-4xl font-medium text-white tracking-tight">
<div className="grid grid-cols-2 gap-1 w-8 h-8">
<div className="bg-[#f25022] rounded-[1px]"></div>
<div className="bg-[#7fba00] rounded-[1px]"></div>
<div className="bg-[#00a4ef] rounded-[1px]"></div>
<div className="bg-[#ffb900] rounded-[1px]"></div>
</div>
                            Microsoft
                        </div>
</div>

<div className="bg-gradient-to-b from-[#ffffff] to-[#f4f7f9] rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.1),inset_0_2px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(226,232,240,0.8)] border border-[#e2e8f0] p-6">
<p className="text-base text-black font-normal mb-6 leading-relaxed">Deploy the Workomate Agent Platform within Microsoft environments including <strong>Azure AI Foundry</strong> and <strong>M365 Copilot</strong> to see value faster.</p>
<div className="flex flex-wrap gap-3">
<button className="bg-gradient-to-b from-[#3a3a3a] to-[#0a0a0a] shadow-[0_3px_6px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-2px_1px_rgba(0,0,0,0.5)] border border-[#000] text-white px-4 py-2 rounded-lg text-sm font-medium">READ MORE</button>
<button className="bg-gradient-to-b from-[#ffffff] to-[#e8ecef] shadow-[0_3px_5px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1),inset_0_-2px_1px_rgba(203,213,225,0.6)] border border-[#cbd5e1] text-black px-4 py-2 rounded-lg text-sm font-medium">AZURE MARKET</button>
</div>
</div>
</div>

<div className="bg-gradient-to-b from-[#222] to-[#0a0a0a] rounded-3xl p-8 flex flex-col justify-between min-h-[350px] shadow-[0_15px_30px_rgba(0,0,0,0.15),inset_0_1px_1px_rgba(255,255,255,0.1)] border border-gray-800">
<div className="flex-grow flex items-center justify-center py-8">
<div className="text-5xl md:text-6xl font-medium text-white tracking-tight">
                            aws
                        </div>
</div>

<div className="bg-gradient-to-b from-[#ffffff] to-[#f4f7f9] rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.1),inset_0_2px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(226,232,240,0.8)] border border-[#e2e8f0] p-6">
<p className="text-base text-black font-normal mb-6 leading-relaxed">The Workomate Agent Platform is integrated with AWS services including <strong>Amazon Bedrock</strong> and <strong>Amazon Q</strong> to accelerate deployment.</p>
<div className="flex flex-wrap gap-3">
<button className="bg-gradient-to-b from-[#3a3a3a] to-[#0a0a0a] shadow-[0_3px_6px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-2px_1px_rgba(0,0,0,0.5)] border border-[#000] text-white px-4 py-2 rounded-lg text-sm font-medium">READ MORE</button>
<button className="bg-gradient-to-b from-[#ffffff] to-[#e8ecef] shadow-[0_3px_5px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1),inset_0_-2px_1px_rgba(203,213,225,0.6)] border border-[#cbd5e1] text-black px-4 py-2 rounded-lg text-sm font-medium">AWS MARKET</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white border-b border-gray-200">
<div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
<div className="w-full lg:w-1/3 sticky top-24">
<h2 className="text-3xl md:text-4xl font-normal text-black tracking-tight mb-4">You're wasting time on work AI should be doing</h2>
<p className="text-lg text-gray-600 font-normal leading-relaxed mb-6">Every day your team spends hours on tasks that could be automated.</p>
<a className="inline-flex items-center text-lg font-medium text-black hover:text-gray-600 transition-colors group" href="case-studies.html">
                    Explore case studies
                    <i className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-5">

<div className="bg-gradient-to-b from-[#ffffff] to-[#f4f7f9] rounded-2xl shadow-[0_8px_16px_-4px_rgba(0,0,0,0.05),inset_0_2px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(226,232,240,0.8)] border border-[#e2e8f0] p-6">
<div className="bg-gradient-to-b from-gray-50 to-gray-200 text-black p-3 rounded-xl inline-block mb-4 shadow-[0_2px_4px_rgba(0,0,0,0.1),inset_0_1px_0_white] border border-gray-300">
<i className="w-5 h-5" data-lucide="user-minus" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-black tracking-tight mb-2">Manual follow-ups</h3>
<p className="text-base text-gray-600 font-normal leading-relaxed">Losing potential revenue because your team can't respond to every inquiry instantly.</p>
</div>
<div className="bg-gradient-to-b from-[#ffffff] to-[#f4f7f9] rounded-2xl shadow-[0_8px_16px_-4px_rgba(0,0,0,0.05),inset_0_2px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(226,232,240,0.8)] border border-[#e2e8f0] p-6">
<div className="bg-gradient-to-b from-gray-50 to-gray-200 text-black p-3 rounded-xl inline-block mb-4 shadow-[0_2px_4px_rgba(0,0,0,0.1),inset_0_1px_0_white] border border-gray-300">
<i className="w-5 h-5" data-lucide="file-x" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-black tracking-tight mb-2">Handmade reports</h3>
<p className="text-base text-gray-600 font-normal leading-relaxed">Pulling data from multiple sources just to understand your business performance.</p>
</div>
<div className="bg-gradient-to-b from-[#ffffff] to-[#f4f7f9] rounded-2xl shadow-[0_8px_16px_-4px_rgba(0,0,0,0.05),inset_0_2px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(226,232,240,0.8)] border border-[#e2e8f0] p-6">
<div className="bg-gradient-to-b from-gray-50 to-gray-200 text-black p-3 rounded-xl inline-block mb-4 shadow-[0_2px_4px_rgba(0,0,0,0.1),inset_0_1px_0_white] border border-gray-300">
<i className="w-5 h-5" data-lucide="copy" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-black tracking-tight mb-2">Data entry</h3>
<p className="text-base text-gray-600 font-normal leading-relaxed">Moving information between tools, causing human errors and operational delays.</p>
</div>
<div className="bg-gradient-to-b from-[#ffffff] to-[#f4f7f9] rounded-2xl shadow-[0_8px_16px_-4px_rgba(0,0,0,0.05),inset_0_2px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(226,232,240,0.8)] border border-[#e2e8f0] p-6">
<div className="bg-gradient-to-b from-gray-50 to-gray-200 text-black p-3 rounded-xl inline-block mb-4 shadow-[0_2px_4px_rgba(0,0,0,0.1),inset_0_1px_0_white] border border-gray-300">
<i className="w-5 h-5" data-lucide="message-square" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-black tracking-tight mb-2">Repetitive queries</h3>
<p className="text-base text-gray-600 font-normal leading-relaxed">Customer support bogged down by routine questions instead of complex issues.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-b border-gray-200" id="how-it-works">
<div className="max-w-6xl mx-auto">
<div className="mb-16 text-center">
<h2 className="text-4xl md:text-5xl font-normal text-black tracking-tight mb-4">Up and running in 3 steps</h2>
<p className="text-xl text-gray-600 font-normal max-w-2xl mx-auto">A streamlined process to get your enterprise automated.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">

<div className="flex flex-col items-start border-l-2 border-gray-100 pl-8 relative">
<div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-gradient-to-b from-[#333] to-[#000] text-white shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)] font-medium flex items-center justify-center text-sm border-[3px] border-white">1</div>
<h3 className="text-2xl font-medium text-black tracking-tight mb-3 mt-0.5">Audit &amp; Strategy</h3>
<p className="text-base text-gray-600 font-normal leading-relaxed">We map your entire workflow and find every manual task that can be intelligently automated.</p>
</div>

<div className="flex flex-col items-start border-l-2 border-gray-100 pl-8 relative">
<div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-gradient-to-b from-[#333] to-[#000] text-white shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)] font-medium flex items-center justify-center text-sm border-[3px] border-white">2</div>
<h3 className="text-2xl font-medium text-black tracking-tight mb-3 mt-0.5">Integration</h3>
<p className="text-base text-gray-600 font-normal leading-relaxed">Our engineering team builds custom AI agents specific to your unique enterprise logic.</p>
</div>

<div className="flex flex-col items-start border-l-2 border-gray-100 pl-8 relative">
<div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-gradient-to-b from-[#333] to-[#000] text-white shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)] font-medium flex items-center justify-center text-sm border-[3px] border-white">3</div>
<h3 className="text-2xl font-medium text-black tracking-tight mb-3 mt-0.5">Scale &amp; Govern</h3>
<p className="text-base text-gray-600 font-normal leading-relaxed">Deploy with full controls. Your new AI system runs daily operations perfectly.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-gradient-to-b from-[#eef6fc] to-[#d8eaf7] border-b border-gray-200 relative overflow-hidden" id="services">
<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50 mix-blend-overlay">
<div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-white blur-3xl"></div>
<div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-white blur-3xl"></div>
</div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="mb-12 text-center">
<h2 className="text-3xl md:text-4xl font-normal text-black tracking-tight mb-4 drop-shadow-sm">Agentic AI systems that drive outcomes</h2>
<p className="text-lg text-gray-700 font-normal leading-relaxed max-w-3xl mx-auto">Use purpose-built agentic AI systems. We solve the most urgent industry challenges with regulation-approved systems.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">

<div className="bg-gradient-to-b from-[#ffffff] to-[#f4f7f9] rounded-2xl shadow-[0_10px_20px_-5px_rgba(0,0,0,0.08),inset_0_2px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(226,232,240,0.8)] border border-[#e2e8f0] p-6 flex flex-col transition-shadow duration-300">
<h3 className="text-xl font-medium tracking-tight mb-2 text-black">AI for <span className="text-[#3b82f6]">Lead Generation</span></h3>
<p className="text-base text-gray-500 font-normal leading-relaxed mb-5">Frictionless engagement with instant, personalized support at every touchpoint.</p>
<div className="flex gap-3 mb-6">
<a className="bg-gradient-to-b from-[#3a3a3a] to-[#0a0a0a] shadow-[0_3px_6px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-2px_1px_rgba(0,0,0,0.5)] border border-[#000] text-white text-xs font-medium px-4 py-2 rounded-lg flex items-center gap-2 uppercase tracking-wider w-max" href="case-studies.html">
                            Learn More <div className="w-1 h-1 rounded-full bg-white/70"></div>
</a>
</div>
<div className="bg-gray-50/50 rounded-xl p-4 flex-grow flex items-center justify-center border border-gray-100 shadow-[inset_0_2px_8px_rgba(0,0,0,0.02)]">
<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 w-full max-w-sm">
<div className="flex justify-between items-start mb-3 border-b border-gray-100 pb-3">
<div>
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-sm font-medium text-black tracking-tight">Lead Qualified</span>
</div>
</div>
<div className="bg-green-50 text-green-700 px-2.5 py-0.5 rounded-full text-[10px] font-medium border border-green-100 flex items-center gap-1">
                                    High Intent
                                </div>
</div>
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 flex items-center justify-center border border-white shadow-sm flex-shrink-0">
<span className="text-blue-700 font-medium text-sm">JD</span>
</div>
<div>
<div className="text-sm font-medium text-black tracking-tight">John Doe</div>
<div className="text-[11px] text-gray-500">VP Eng, Acme Corp</div>
</div>
</div>
<div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
<div className="flex items-center gap-2 text-black font-medium text-sm mb-1">
<i className="w-4 h-4 text-blue-500" data-lucide="calendar-check" strokeWidth="1.5"></i>
                                    Call Booked
                                </div>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-b from-[#ffffff] to-[#f4f7f9] rounded-2xl shadow-[0_10px_20px_-5px_rgba(0,0,0,0.08),inset_0_2px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(226,232,240,0.8)] border border-[#e2e8f0] p-6 flex flex-col transition-shadow duration-300">
<h3 className="text-xl font-medium tracking-tight mb-2 text-black">AI for <span className="text-[#3b82f6]">Marketing</span></h3>
<p className="text-base text-gray-500 font-normal leading-relaxed mb-5">Analyze campaigns, reduce manual workload, and deliver 24/7 insights.</p>
<div className="flex gap-3 mb-6">
<a className="bg-gradient-to-b from-[#3a3a3a] to-[#0a0a0a] shadow-[0_3px_6px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-2px_1px_rgba(0,0,0,0.5)] border border-[#000] text-white text-xs font-medium px-4 py-2 rounded-lg flex items-center gap-2 uppercase tracking-wider w-max" href="case-studies.html">
                            Learn More <div className="w-1 h-1 rounded-full bg-white/70"></div>
</a>
</div>
<div className="bg-gray-50/50 rounded-xl p-4 flex-grow flex items-center justify-center border border-gray-100 shadow-[inset_0_2px_8px_rgba(0,0,0,0.02)] relative overflow-hidden">
<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 w-full max-w-sm h-full flex flex-col justify-between relative z-10">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-black tracking-tight block">Q3 Insights</span>
<div className="text-xs font-medium text-green-500 flex items-center bg-green-50 px-2 py-0.5 rounded-full">
                                    +42% ROI
                                </div>
</div>
<div className="flex items-end justify-between gap-1.5 h-20 mt-auto w-full px-1">
<div className="w-full bg-blue-100 rounded-t h-[30%]"></div>
<div className="w-full bg-blue-200 rounded-t h-[45%]"></div>
<div className="w-full bg-blue-300 rounded-t h-[65%]"></div>
<div className="w-full bg-blue-400 rounded-t h-[85%]"></div>
<div className="w-full bg-blue-600 rounded-t h-[100%] shadow-[0_0_10px_rgba(37,99,235,0.2)]"></div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-b border-gray-200 overflow-hidden">
<div className="max-w-6xl mx-auto">
<div className="mb-12 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 shadow-sm mb-4">
<i className="w-4 h-4 text-blue-600" data-lucide="zap" strokeWidth="1.5"></i>
<span className="text-xs font-medium text-blue-700 tracking-widest uppercase">Contextual Execution</span>
</div>
<h2 className="text-3xl md:text-4xl font-normal text-black tracking-tight mb-4">Human context, AI execution.</h2>
<p className="text-lg text-gray-600 font-normal max-w-3xl mx-auto leading-relaxed">Our AI agents don't guess. They absorb your enterprise's specific context and rules, executing tasks autonomously exactly how a trained team member would.</p>
</div>

<div className="relative w-full max-w-4xl mx-auto flex items-center justify-center mt-10 bg-gradient-to-b from-[#ffffff] to-[#f8fafc] rounded-3xl border border-gray-200 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05),inset_0_2px_0_rgba(255,255,255,1)] p-8 overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,#eff6ff_0%,transparent_70%)] opacity-60 pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-2 w-full justify-between">

<div className="flex flex-col items-center gap-3 w-40 shrink-0">
<div className="w-20 h-20 bg-white border border-gray-200 shadow-[0_4px_10px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,1)] rounded-2xl flex items-center justify-center relative z-10">
<i className="w-8 h-8 text-blue-600" data-lucide="database" strokeWidth="1.5"></i>
</div>
<div className="text-center">
<span className="text-base font-medium text-black tracking-tight block">Enterprise Context</span>
<span className="text-xs text-gray-500">Rules &amp; Data</span>
</div>
</div>

<div className="flex-grow flex items-center justify-center relative w-full h-12 md:h-auto">
<div className="hidden md:block w-full h-1 bg-gray-100 rounded-full relative overflow-hidden">
<div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-[pulse_1.5s_ease-in-out_infinite] opacity-60"></div>
</div>
<div className="md:hidden h-full w-1 bg-gray-100 rounded-full relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-[pulse_1.5s_ease-in-out_infinite] opacity-60"></div>
</div>
</div>

<div className="flex flex-col items-center gap-3 w-40 shrink-0">
<div className="w-20 h-20 bg-gradient-to-b from-[#333] to-[#111] rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center relative">
<div className="absolute inset-0 rounded-2xl border border-white/10"></div>
<i className="w-9 h-9 text-white" data-lucide="bot" strokeWidth="1.5"></i>
</div>
<div className="text-center">
<span className="text-base font-medium text-black tracking-tight block">Workomate AI</span>
<span className="text-xs text-gray-500">Reasoning Engine</span>
</div>
</div>

<div className="flex-grow flex items-center justify-center relative w-full h-12 md:h-auto">
<div className="hidden md:block w-full h-1 bg-gray-100 rounded-full relative overflow-hidden">
<div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-[pulse_1.5s_ease-in-out_infinite_0.5s] opacity-60"></div>
</div>
<div className="md:hidden h-full w-1 bg-gray-100 rounded-full relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-green-400 to-transparent animate-[pulse_1.5s_ease-in-out_infinite_0.5s] opacity-60"></div>
</div>
</div>

<div className="flex flex-col items-center gap-3 w-40 shrink-0">
<div className="w-20 h-20 bg-white border border-gray-200 shadow-[0_4px_10px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,1)] rounded-2xl flex items-center justify-center z-10">
<i className="w-8 h-8 text-green-500" data-lucide="check-circle-2" strokeWidth="1.5"></i>
</div>
<div className="text-center">
<span className="text-base font-medium text-black tracking-tight block">Autonomous Action</span>
<span className="text-xs text-gray-500">Task Completed</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-gray-50/50 border-b border-gray-200" id="testimonials">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-normal text-black tracking-tight mb-3">Customer testimonials</h2>
<p className="text-lg text-gray-600 font-normal">Discover how organizations deliver AI value with Workomate.</p>
</div>
<div className="flex gap-2">
<button className="w-12 h-12 rounded-full bg-gradient-to-b from-[#ffffff] to-[#e8ecef] shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1),inset_0_-2px_1px_rgba(203,213,225,0.6)] border border-[#cbd5e1] flex items-center justify-center transition-transform hover:scale-105 text-black">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button className="w-12 h-12 rounded-full bg-gradient-to-b from-[#ffffff] to-[#e8ecef] shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1),inset_0_-2px_1px_rgba(203,213,225,0.6)] border border-[#cbd5e1] flex items-center justify-center transition-transform hover:scale-105 text-black">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

<div className="bg-gradient-to-b from-[#ffffff] to-[#f4f7f9] rounded-2xl shadow-[0_8px_16px_-4px_rgba(0,0,0,0.05),inset_0_2px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(226,232,240,0.8)] border border-[#e2e8f0] p-6 flex flex-col justify-between min-h-[280px]">
<div>
<div className="text-xl font-medium tracking-tight text-black mb-4">Morgan Stanley</div>
<p className="text-sm text-gray-600 font-normal leading-relaxed">
                            "What I was really trying to solve was how to give 15-20 minutes back each day. That extra time lets them reach out to customers more quickly... and that's a real revenue driver."
                        </p>
</div>
</div>
<div className="bg-gradient-to-b from-[#ffffff] to-[#f4f7f9] rounded-2xl shadow-[0_8px_16px_-4px_rgba(0,0,0,0.05),inset_0_2px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(226,232,240,0.8)] border border-[#e2e8f0] p-6 flex flex-col justify-between min-h-[280px]">
<div>
<div className="text-xl font-medium tracking-tight text-black mb-4">Pfizer</div>
<p className="text-sm text-gray-600 font-normal leading-relaxed">
                            "We've deployed numerous AI agents across the enterprise covering research and commercialization. The platform ensures compliance while scaling globally."
                        </p>
</div>
</div>
<div className="bg-gradient-to-b from-[#ffffff] to-[#f4f7f9] rounded-2xl shadow-[0_8px_16px_-4px_rgba(0,0,0,0.05),inset_0_2px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(226,232,240,0.8)] border border-[#e2e8f0] p-6 flex flex-col justify-between min-h-[280px]">
<div>
<div className="text-xl font-medium tracking-tight text-black mb-4">Mphasis</div>
<p className="text-sm text-gray-600 font-normal leading-relaxed">
                            "We are proud to be a strategic partner, and we feel confident knowing that the platform delivers unmatched reliability and scalability for our enterprise clients."
                        </p>
</div>
</div>
<div className="bg-gradient-to-b from-[#ffffff] to-[#f4f7f9] rounded-2xl shadow-[0_8px_16px_-4px_rgba(0,0,0,0.05),inset_0_2px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(226,232,240,0.8)] border border-[#e2e8f0] p-6 flex flex-col justify-between min-h-[280px]">
<div>
<div className="text-xl font-medium tracking-tight text-black mb-4">Microsoft</div>
<p className="text-sm text-gray-600 font-normal leading-relaxed">
                            "Our partnership marks a milestone in accelerating enterprise AI transformation. We are enabling enterprises to adopt AI at scale with security."
                        </p>
</div>
</div>
</div>
<div className="mt-10 text-center md:text-left">
<a className="inline-block bg-gradient-to-b from-[#3a3a3a] to-[#0a0a0a] shadow-[0_4px_8px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-2px_1px_rgba(0,0,0,0.5)] border border-[#000] text-white px-6 py-3 rounded-xl text-sm font-medium uppercase tracking-wider" href="case-studies.html">
                    MORE CUSTOMER STORIES
                </a>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white border-b border-gray-200" id="faq">
<div className="max-w-3xl mx-auto bg-gradient-to-b from-[#ffffff] to-[#f8fafc] rounded-3xl shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05),inset_0_2px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(226,232,240,0.5)] border border-[#e2e8f0] p-10">
<div className="mb-8">
<h2 className="text-3xl md:text-4xl font-normal text-black tracking-tight">Frequently Asked Questions</h2>
</div>
<div className="divide-y divide-gray-100">
<details className="group py-5 cursor-pointer" open="" style={{listStyle: 'none'}}>
<summary className="text-xl font-medium tracking-tight text-black flex justify-between items-center outline-none list-none [&amp;::-webkit-details-marker]:hidden">
                        What exactly does Workomate do?
                        <div className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center group-open:bg-black group-open:text-white transition-colors">
<i className="w-5 h-5 transition-transform duration-300 group-open:rotate-45" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</summary>
<div className="mt-4 text-base text-gray-600 font-normal leading-relaxed pr-8">
                        We audit your business workflows, identify tasks that humans shouldn't be doing manually (like data entry, follow-ups), and build custom AI agents to handle those tasks 24/7.
                    </div>
</details>
<details className="group py-5 cursor-pointer" style={{listStyle: 'none'}}>
<summary className="text-xl font-medium tracking-tight text-black flex justify-between items-center outline-none list-none [&amp;::-webkit-details-marker]:hidden">
                        How long does it take to set up?
                        <div className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center group-open:bg-black group-open:text-white transition-colors text-black">
<i className="w-5 h-5 transition-transform duration-300 group-open:rotate-45" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</summary>
<div className="mt-4 text-base text-gray-600 font-normal leading-relaxed pr-8">
                        Most standard workflows are deployed within 2 to 4 weeks. Complex enterprise setups may take 6 to 8 weeks. We map out a strict timeline during our initial audit.
                    </div>
</details>
<details className="group py-5 cursor-pointer" style={{listStyle: 'none'}}>
<summary className="text-xl font-medium tracking-tight text-black flex justify-between items-center outline-none list-none [&amp;::-webkit-details-marker]:hidden">
                        Do I need technical knowledge?
                        <div className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center group-open:bg-black group-open:text-white transition-colors text-black">
<i className="w-5 h-5 transition-transform duration-300 group-open:rotate-45" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</summary>
<div className="mt-4 text-base text-gray-600 font-normal leading-relaxed pr-8">
                        Zero. We handle everything from technical architecture to implementation. We deliver a finished system that works in the background, with a dashboard for monitoring.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-20 px-6 bg-transparent border-b border-gray-200">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-gradient-to-b from-[#ffffff] to-[#f8fafc] rounded-3xl shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05),inset_0_2px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(226,232,240,0.5)] border border-[#e2e8f0] p-10 flex flex-col items-start justify-center">
<h2 className="text-3xl md:text-4xl font-normal text-black tracking-tight mb-3">
                    Accelerate time-to-value from AI
                </h2>
<p className="text-lg text-gray-600 font-normal mb-8">
                    Find out how Workomate can help your enterprise scale.
                </p>

<button className="cal-trigger bg-gradient-to-b from-[#ffffff] to-[#e8ecef] shadow-[0_4px_6px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1),inset_0_-2px_1px_rgba(203,213,225,0.6)] border border-[#cbd5e1] active:shadow-[inset_0_3px_5px_rgba(0,0,0,0.05)] text-black px-6 py-3 rounded-xl text-sm font-medium uppercase tracking-wider">
                    BOOK A FREE AUDIT
                </button>
</div>
<div className="bg-gradient-to-b from-[#222] to-[#0a0a0a] shadow-[0_15px_30px_rgba(0,0,0,0.15),inset_0_1px_1px_rgba(255,255,255,0.1)] rounded-3xl p-10 flex flex-col items-start justify-center border border-gray-800">
<h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight mb-3 drop-shadow-sm">
                    See our AI systems in action
                </h2>
<p className="text-lg text-gray-400 font-normal mb-8">
                    Browse our case studies to see how we deliver instant ROI.
                </p>

<a className="bg-gradient-to-b from-[#ffffff] to-[#e0e0e0] shadow-[0_4px_8px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,1),inset_0_-2px_1px_rgba(150,150,150,0.5)] border border-transparent text-black px-6 py-3 rounded-xl text-sm font-medium uppercase tracking-wider inline-block" href="case-studies.html">
                    VIEW CASE STUDIES
                </a>
</div>
</div>
</section>

<footer className="pt-16 pb-16 px-6 bg-white">
<div className="max-w-6xl mx-auto flex flex-col items-start">
<a className="flex items-center gap-2 mb-8 text-black group" href="#">
<svg className="w-8 h-auto text-black drop-shadow-sm" fill="currentColor" viewbox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5 h20 l12.5 35 l10 -25 l10 25 l12.5 -35 h20 l-25 50 h-15 l-10 -25 l-10 25 h-15 z"></path>
</svg>
<span className="text-xl font-medium tracking-tight">Workomate</span>
</a>
<div className="bg-gradient-to-b from-[#ffffff] to-[#f8fafc] rounded-2xl shadow-[0_8px_16px_-4px_rgba(0,0,0,0.05),inset_0_2px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(226,232,240,0.8)] border border-[#e2e8f0] p-5 mb-8 max-w-sm w-full">
<div className="flex items-start gap-3 mb-4">
<i className="w-5 h-5 text-black mt-1" data-lucide="message-square"></i>
<div>
<h4 className="text-lg font-medium text-black tracking-tight">Let's work together</h4>
<p className="text-sm text-gray-600 mt-0.5 font-normal">Get answers and a customized quote</p>
</div>
</div>
<button className="bg-gradient-to-b from-[#ffffff] to-[#e8ecef] shadow-[0_3px_5px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1),inset_0_-2px_1px_rgba(203,213,225,0.6)] border border-[#cbd5e1] text-black px-4 py-2.5 rounded-lg text-xs font-medium w-full uppercase tracking-wider">SUBMIT RFP</button>
</div>
<h4 className="text-xs font-medium text-gray-500 tracking-widest uppercase mb-4">FOLLOW US ON</h4>
<div className="flex gap-3">
<a className="w-10 h-10 rounded-full bg-gradient-to-b from-[#ffffff] to-[#e8ecef] shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1),inset_0_-2px_1px_rgba(203,213,225,0.6)] border border-[#cbd5e1] flex items-center justify-center text-black hover:text-blue-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-gradient-to-b from-[#ffffff] to-[#e8ecef] shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1),inset_0_-2px_1px_rgba(203,213,225,0.6)] border border-[#cbd5e1] flex items-center justify-center text-black hover:text-red-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="youtube" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-gradient-to-b from-[#ffffff] to-[#e8ecef] shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1),inset_0_-2px_1px_rgba(203,213,225,0.6)] border border-[#cbd5e1] flex items-center justify-center text-black hover:text-blue-400 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden items-center justify-center bg-black/40 backdrop-blur-md opacity-0 transition-opacity duration-300" id="cal-modal">
<div className="relative w-[95%] max-w-4xl h-[85vh] bg-white rounded-2xl overflow-hidden shadow-2xl scale-95 transition-transform duration-300 border border-gray-200" id="cal-modal-content">
<button className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full text-black hover:bg-gray-100 transition-all shadow-sm border border-gray-200" id="close-modal">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
<iframe className="w-full h-full border-0" id="cal-iframe" title="Book a Call"></iframe>
</div>
</div>


    </>
  );
}
