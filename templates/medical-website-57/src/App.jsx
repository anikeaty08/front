import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Consultation Modal Logic
        const getStartedModal = document.getElementById('getStartedModal');
        const getStartedModalContent = document.getElementById('modalContent');
        const getStartedBackdrop = document.getElementById('modalBackdrop');

        function openModal() {
            getStartedModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                getStartedModalContent.classList.add('animate-modal');
                getStartedModalContent.classList.remove('opacity-0', 'scale-95');
            }, 10);
        }

        function closeModal() {
            getStartedModalContent.classList.remove('animate-modal');
            getStartedModalContent.classList.add('opacity-0', 'scale-95');
            setTimeout(() => {
                getStartedModal.classList.add('hidden');
                document.body.style.overflow = '';
            }, 300);
        }

        getStartedBackdrop.addEventListener('click', closeModal);

        // Features Modal Logic
        const featureData = {
            website: {
                title: "Custom Website",
                icon: "solar:laptop-minimalistic-linear",
                items: ["Modern, responsive design", "Mobile optimized", "Fast loading speeds", "Clean, medical-focused layout"]
            },
            positioning: {
                title: "Strategic Positioning",
                icon: "solar:target-linear",
                items: ["Qualifications & experience", "Specializations structured", "Services explained clearly", "Affiliations & recognitions"]
            },
            conversion: {
                title: "Patient Conversion",
                icon: "solar:users-group-rounded-linear",
                items: ["Clear call-to-actions", "Appointment request forms", "WhatsApp integration", "Location map integration"]
            },
            trust: {
                title: "Trust Elements",
                icon: "solar:shield-check-linear",
                items: ["Testimonials section", "Case highlights", "Media mentions & publications"]
            },
            seo: {
                title: "Basic SEO Setup",
                icon: "solar:magnifer-linear",
                items: ["Search-optimized structure", "Local discoverability", "Google indexing"]
            },
            management: {
                title: "Full Management",
                icon: "solar:server-square-update-linear",
                items: ["Premium hosting handled", "Content updates managed", "Technical support", "Security & ongoing care"]
            }
        };

        const featureModal = document.getElementById('featureModal');
        const featureModalContent = document.getElementById('featureModalContent');

        function openFeatureModal(key) {
            const data = featureData[key];
            if(!data) return;

            // Populate data
            document.getElementById('featureModalTitle').innerText = data.title;
            document.getElementById('featureModalIcon').innerHTML = `<iconify-icon icon="${data.icon}" width="28"></iconify-icon>`;
            
            const listHtml = data.items.map(item => `
                <li class="flex items-start gap-3">
                    <div class="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0"></div> 
                    <span>${item}</span>
                </li>
            `).join('');
            document.getElementById('featureModalList').innerHTML = listHtml;

            // Open Modal
            featureModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                featureModalContent.classList.add('animate-modal');
                featureModalContent.classList.remove('opacity-0', 'scale-95');
            }, 10);
        }

        function closeFeatureModal() {
            featureModalContent.classList.remove('animate-modal');
            featureModalContent.classList.add('opacity-0', 'scale-95');
            setTimeout(() => {
                featureModal.classList.add('hidden');
                document.body.style.overflow = '';
            }, 300);
        }

        // Global Escape Key Listener
        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                if (!getStartedModal.classList.contains('hidden')) closeModal();
                if (!featureModal.classList.contains('hidden')) closeFeatureModal();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 inset-x-0 z-50 border-b backdrop-blur-xl border-slate-200/50 bg-white/80">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 rounded-sm flex items-center justify-center bg-slate-900">
<iconify-icon className="text-white" icon="solar:health-linear" width="14"></iconify-icon>
</div>
<span className="text-base tracking-tight font-medium text-slate-900">DocWeb</span>
</a>

<button className="md:hidden text-slate-500 transition-colors hover:text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="transition-colors hover:text-slate-900" href="#solution">Solution</a>
<a className="transition-colors hover:text-slate-900" href="#features">Features</a>
<a className="transition-colors hover:text-slate-900" href="#work">Work</a>
<a className="transition-colors hover:text-slate-900" href="#process">Process</a>
</div>

<div className="hidden md:flex items-center">
<button className="h-9 px-5 text-sm font-medium transition-colors rounded-md shadow-sm bg-slate-900 text-white hover:bg-slate-800" onclick="openModal()">
                    Book Consultation
                </button>
</div>
</div>
</nav>
<main className="relative pt-16">

<section className="lg:pt-48 lg:pb-40 overflow-hidden flex flex-col text-center pt-32 pb-24 relative items-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] blur-[100px] rounded-full pointer-events-none bg-slate-200/40"></div>
<div className="z-10 fade-in-up max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
<span className="inline-block py-1.5 px-4 rounded-full border text-xs font-medium mb-10 bg-white shadow-sm border-slate-200 text-slate-600">
                    Premium Digital Presence for Medical Professionals
                </span>
<h1 className="text-5xl md:text-7xl leading-[1.1] tracking-tight flex flex-col gap-3 text-slate-900">
<span className="font-semibold">Build a Powerful Presence.</span>
<span className="font-medium text-4xl md:text-5xl text-slate-400">That Consistently Brings You Patients.</span>
</h1>
<p className="mt-10 text-lg md:text-xl font-medium max-w-2xl mx-auto text-slate-900 tracking-tight">
                    Custom Websites for Doctors - Designed, Built, and Maintained for You.
                </p>
<p className="mt-6 text-base text-slate-500 max-w-2xl mx-auto leading-loose">
                    Your practice deserves more than a hospital listing or a basic social profile. We create modern, professional medical websites that increase visibility, strengthen credibility, and help patients choose you with confidence - while we handle everything behind the scenes.
                </p>
<div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto h-12 px-8 text-sm font-medium transition-colors rounded-md shadow-sm bg-slate-900 text-white hover:bg-slate-800" onclick="openModal()">
                        Book a Free Consultation
                    </button>
<a className="w-full sm:w-auto h-12 px-8 border text-sm font-medium transition-all rounded-md flex items-center justify-center shadow-sm bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300" href="#work">
                        View Sample Work
                    </a>
</div>
</div>
</section>

<section className="py-32 border-t bg-white border-slate-200/50" id="solution">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-20 items-center">
<div>
<h2 className="text-4xl tracking-tight font-semibold mb-8 text-slate-900">A Website That Works for You 24/7</h2>
<p className="text-base leading-loose mb-8 text-slate-600">
                            We design high-end, conversion-focused medical websites that act as your digital clinic - always accessible, always credible, always working.
                        </p>
<p className="text-base font-medium leading-loose pl-6 border-l-2 text-slate-900 border-slate-300">
                            And unlike typical agencies, we don't just build it and disappear. We maintain it for you - so you never have to worry about updates, hosting, or technical issues.
                        </p>
</div>

<div className="relative aspect-square max-w-md mx-auto w-full rounded-2xl border shadow-sm p-10 flex flex-col justify-between bg-slate-50 border-slate-200">
<div className="flex justify-between items-center mb-10 border-b pb-6 border-slate-200">
<div className="w-32 h-5 rounded-md bg-slate-200"></div>
<div className="flex gap-3">
<div className="w-4 h-4 rounded-full bg-slate-200"></div>
<div className="w-4 h-4 rounded-full bg-slate-200"></div>
</div>
</div>
<div className="space-y-6">
<div className="w-3/4 h-8 rounded-md bg-slate-200"></div>
<div className="w-full h-5 rounded-md bg-slate-100"></div>
<div className="w-5/6 h-5 rounded-md bg-slate-100"></div>
</div>
<div className="mt-auto pt-10 flex gap-4">
<div className="w-36 h-12 rounded-lg bg-slate-900"></div>
<div className="w-36 h-12 rounded-lg bg-white border border-slate-200"></div>
</div>

<div className="absolute -right-8 -bottom-8 p-5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border flex items-center gap-4 bg-white border-slate-100">
<div className="w-2.5 h-2.5 bg-cyan-500 rounded-full animate-pulse"></div>
<span className="text-sm font-medium text-slate-900">Always Online</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-20 max-w-2xl mx-auto">
<h2 className="text-4xl tracking-tight font-semibold mb-6 text-slate-900">What's Included</h2>
<p className="text-base leading-loose text-slate-500">Everything you need for a premium medical presence, bundled into one seamless service. Click any feature to explore.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

<button className="group text-left p-8 md:p-10 rounded-2xl border transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-white border-slate-200 flex flex-col h-56" onclick="openFeatureModal('website')">
<iconify-icon className="text-slate-900 mb-6 transition-transform group-hover:scale-110" icon="solar:laptop-minimalistic-linear" width="32"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Custom Website</h3>
<div className="mt-auto flex items-center gap-2 text-sm font-medium text-slate-400 group-hover:text-slate-900 transition-colors">
                            Explore details <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</button>
<button className="group text-left p-8 md:p-10 rounded-2xl border transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-white border-slate-200 flex flex-col h-56" onclick="openFeatureModal('positioning')">
<iconify-icon className="text-slate-900 mb-6 transition-transform group-hover:scale-110" icon="solar:target-linear" width="32"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Strategic Positioning</h3>
<div className="mt-auto flex items-center gap-2 text-sm font-medium text-slate-400 group-hover:text-slate-900 transition-colors">
                            Explore details <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</button>
<button className="group text-left p-8 md:p-10 rounded-2xl border transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-white border-slate-200 flex flex-col h-56" onclick="openFeatureModal('conversion')">
<iconify-icon className="text-slate-900 mb-6 transition-transform group-hover:scale-110" icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Patient Conversion</h3>
<div className="mt-auto flex items-center gap-2 text-sm font-medium text-slate-400 group-hover:text-slate-900 transition-colors">
                            Explore details <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</button>
<button className="group text-left p-8 md:p-10 rounded-2xl border transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-white border-slate-200 flex flex-col h-56" onclick="openFeatureModal('trust')">
<iconify-icon className="text-slate-900 mb-6 transition-transform group-hover:scale-110" icon="solar:shield-check-linear" width="32"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Trust Elements</h3>
<div className="mt-auto flex items-center gap-2 text-sm font-medium text-slate-400 group-hover:text-slate-900 transition-colors">
                            Explore details <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</button>
<button className="group text-left p-8 md:p-10 rounded-2xl border transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-white border-slate-200 flex flex-col h-56" onclick="openFeatureModal('seo')">
<iconify-icon className="text-slate-900 mb-6 transition-transform group-hover:scale-110" icon="solar:magnifer-linear" width="32"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Basic SEO Setup</h3>
<div className="mt-auto flex items-center gap-2 text-sm font-medium text-slate-400 group-hover:text-slate-900 transition-colors">
                            Explore details <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</button>
<button className="group text-left p-8 md:p-10 rounded-2xl border transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-slate-900 border-slate-800 flex flex-col h-56" onclick="openFeatureModal('management')">
<iconify-icon className="text-white mb-6 transition-transform group-hover:scale-110" icon="solar:server-square-update-linear" width="32"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight text-white">Full Management</h3>
<div className="mt-auto flex items-center gap-2 text-sm font-medium text-slate-400 group-hover:text-white transition-colors">
                            Explore details <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</button>
</div>
</div>
</section>

<section className="py-32 border-t border-slate-200/50 bg-white">
<div className="max-w-6xl mx-auto px-6">
<div className="border rounded-2xl p-16 md:p-20 text-center max-w-4xl mx-auto shadow-sm bg-[#FAFAFA] border-slate-200">
<h2 className="text-4xl tracking-tight font-semibold mb-8 text-slate-900">Live in Just 3 Days</h2>
<p className="text-lg mb-12 max-w-xl mx-auto text-slate-600 leading-loose">
                        Once we receive your details, your professional website goes live within 3 days.
                    </p>
<div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-sm font-medium mb-12 text-slate-900">
<div className="flex items-center gap-3">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear" width="24"></iconify-icon>
                            No long agency delays
                        </div>
<div className="flex items-center gap-3">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear" width="24"></iconify-icon>
                            No endless revisions
                        </div>
<div className="flex items-center gap-3">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear" width="24"></iconify-icon>
                            No technical burden
                        </div>
</div>
<p className="text-base font-medium text-slate-600">
                        You focus on patients. <span className="text-slate-900">We handle everything else.</span>
</p>
</div>
</div>
</section>

<section className="py-32 border-t border-slate-200/50">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12">
<div className="border-t-2 pt-8 border-slate-200">
<h3 className="text-xl font-semibold mb-4 tracking-tight text-slate-900">Increased Visibility</h3>
<p className="text-base text-slate-500 leading-loose">
                            Be discoverable when patients search for your specialty in your city.
                        </p>
</div>
<div className="border-t-2 pt-8 border-slate-200">
<h3 className="text-xl font-semibold mb-4 tracking-tight text-slate-900">Stronger Credibility</h3>
<p className="text-base text-slate-500 leading-loose">
                            A structured, premium website instantly elevates trust.
                        </p>
</div>
<div className="border-t-2 pt-8 border-slate-200">
<h3 className="text-xl font-semibold mb-4 tracking-tight text-slate-900">Direct Patient Flow</h3>
<p className="text-base text-slate-500 leading-loose">
                            Reduce dependence on aggregator platforms and take control of your patient journey.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-32 border-t bg-white border-slate-200/50" id="work">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-4xl tracking-tight font-semibold text-slate-900">See Our Work</h2>
</div>
<div className="grid md:grid-cols-2 gap-12">

<div className="group">
<a className="block aspect-[4/3] border rounded-xl overflow-hidden mb-8 relative bg-slate-50 border-slate-200 shadow-sm transition-shadow hover:shadow-md" href="https://cosmetic-dentist-66.aura.build" target="_blank">

<div className="absolute inset-0 flex flex-col">
<div className="h-10 border-b flex items-center px-5 gap-2.5 border-slate-200 bg-white">
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
</div>
<div className="flex-1 bg-cover bg-top transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&amp'}}>
<div className="absolute inset-0 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center bg-white/20">
<div className="px-5 py-2.5 rounded-lg text-sm font-medium shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all bg-slate-900 text-white">Open Preview</div>
</div>
</div>
</div>
</a>
<h3 className="text-xl font-semibold mb-2 tracking-tight text-slate-900">Cosmetic Dentistry Practice</h3>
<p className="text-base leading-loose text-slate-500 mb-6">Clean, aesthetic-focused landing page optimized for high-ticket consultations.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium transition-colors text-slate-900 hover:text-slate-600" href="https://cosmetic-dentist-66.aura.build" target="_blank">
                            View Website <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group">
<a className="block aspect-[4/3] border rounded-xl overflow-hidden mb-8 relative bg-slate-50 border-slate-200 shadow-sm transition-shadow hover:shadow-md" href="https://neurosurge-clinic-13.aura.build" target="_blank">
<div className="absolute inset-0 flex flex-col">
<div className="h-10 border-b flex items-center px-5 gap-2.5 border-slate-200 bg-white">
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
</div>
<div className="flex-1 bg-cover bg-top transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&amp', grayscale: '50%'}}>
<div className="absolute inset-0 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center bg-white/20">
<div className="px-5 py-2.5 rounded-lg text-sm font-medium shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all bg-slate-900 text-white">Open Preview</div>
</div>
</div>
</div>
</a>
<h3 className="text-xl font-semibold mb-2 tracking-tight text-slate-900">Neurosurgery Clinic</h3>
<p className="text-base leading-loose text-slate-500 mb-6">Authoritative, structured layout focusing on expertise and complex case trust-building.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium transition-colors text-slate-900 hover:text-slate-600" href="https://neurosurge-clinic-13.aura.build" target="_blank">
                            View Website <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-32" id="process">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-24">
<h2 className="text-4xl tracking-tight font-semibold text-slate-900">Simple. Structured. Efficient.</h2>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">

<div className="hidden lg:block absolute top-8 left-16 right-16 h-[1px] -z-10 bg-slate-200"></div>

<div className="border rounded-xl p-8 relative bg-white border-slate-200 shadow-sm">
<div className="w-10 h-10 text-sm font-semibold rounded-lg flex items-center justify-center mb-8 shadow-sm bg-slate-900 text-white">1</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight text-slate-900">Consultation</h3>
<p className="text-sm leading-loose text-slate-500">We understand your specialty and goals.</p>
</div>

<div className="border rounded-xl p-8 relative bg-white border-slate-200 shadow-sm">
<div className="w-10 h-10 text-sm font-semibold rounded-lg flex items-center justify-center mb-8 shadow-sm bg-slate-900 text-white">2</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight text-slate-900">Structure</h3>
<p className="text-sm leading-loose text-slate-500">We define your website layout and messaging.</p>
</div>

<div className="border rounded-xl p-8 relative bg-white border-slate-200 shadow-sm">
<div className="w-10 h-10 text-sm font-semibold rounded-lg flex items-center justify-center mb-8 shadow-sm bg-slate-900 text-white">3</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight text-slate-900">Design &amp; Build</h3>
<p className="text-sm leading-loose text-slate-500">We create your professional presence.</p>
</div>

<div className="border rounded-xl p-8 relative bg-white border-slate-200 shadow-sm">
<div className="w-10 h-10 text-sm font-semibold rounded-lg flex items-center justify-center mb-8 shadow-sm bg-slate-900 text-white">4</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight text-slate-900">Maintain</h3>
<p className="text-sm leading-loose text-slate-500">We launch and manage everything for you.</p>
</div>
</div>
</div>
</section>

<section className="py-32 border-t bg-white border-slate-200/50" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-4xl tracking-tight font-semibold mb-12 text-slate-900">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group border rounded-xl p-8 [&amp;_summary::-webkit-details-marker]:hidden bg-[#FAFAFA] border-slate-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-lg tracking-tight text-slate-900">
<span>How long does it take?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<p className="text-slate-500 mt-6 text-base leading-loose">
                            Your website goes live within 3 days after receiving your details.
                        </p>
</details>
<details className="group border rounded-xl p-8 [&amp;_summary::-webkit-details-marker]:hidden bg-[#FAFAFA] border-slate-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-lg tracking-tight text-slate-900">
<span>Do I need technical knowledge?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<p className="text-slate-500 mt-6 text-base leading-loose">
                            No. We handle everything - from design to maintenance.
                        </p>
</details>
<details className="group border rounded-xl p-8 [&amp;_summary::-webkit-details-marker]:hidden bg-[#FAFAFA] border-slate-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-lg tracking-tight text-slate-900">
<span>Do you maintain the website?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<p className="text-slate-500 mt-6 text-base leading-loose">
                            Yes. Hosting, updates, security, and ongoing management are fully handled by us.
                        </p>
</details>
<details className="group border rounded-xl p-8 [&amp;_summary::-webkit-details-marker]:hidden bg-[#FAFAFA] border-slate-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-lg tracking-tight text-slate-900">
<span>Will this help me get more patients?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<p className="text-slate-500 mt-6 text-base leading-loose">
                            A professional and optimized online presence increases visibility and trust - both directly impact patient acquisition.
                        </p>
</details>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-slate-900 text-white">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[140px] rounded-full pointer-events-none bg-slate-800/60"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-5xl md:text-6xl tracking-tight font-semibold mb-8 leading-tight">Your Expertise Deserves a Professional Presence</h2>
<p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-slate-400 leading-loose">
                    If you're serious about building credibility, visibility, and consistent patient flow - let's build it the right way.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto h-14 px-10 text-base font-semibold transition-colors rounded-lg shadow-sm bg-white text-slate-900 hover:bg-slate-100" onclick="openModal()">
                        Book a Free Consultation
                    </button>
<button className="w-full sm:w-auto h-14 px-10 bg-transparent border text-base font-semibold transition-colors rounded-lg border-slate-700 text-white hover:bg-slate-800" onclick="openModal()">
                        Get Started
                    </button>
</div>
</div>
</section>

<footer className="border-t pt-20 pb-10 bg-white border-slate-200">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 rounded-sm flex items-center justify-center bg-slate-900">
<iconify-icon className="text-white" icon="solar:health-linear" width="14"></iconify-icon>
</div>
<span className="text-base tracking-tight font-semibold text-slate-900">DocWeb</span>
</a>
<p className="text-slate-500 text-sm leading-loose">Professional digital presence for medical experts.</p>
</div>
<div>
<h4 className="font-semibold text-sm mb-6 text-slate-900">Contact</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="transition-colors hover:text-slate-900" href="mailto:hello@docweb.com">hello@docweb.com</a></li>
<li><a className="transition-colors hover:text-slate-900" href="tel:+18005550199">+1 (800) 555-0199</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm mb-6 text-slate-900">Quick Links</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="transition-colors hover:text-slate-900" href="#solution">Solution</a></li>
<li><a className="transition-colors hover:text-slate-900" href="#features">Features</a></li>
<li><a className="transition-colors hover:text-slate-900" href="#work">Our Work</a></li>
<li><a className="transition-colors hover:text-slate-900" href="#process">Process</a></li>
</ul>
</div>
<div className="flex flex-col items-start md:items-end">
<h4 className="font-semibold text-sm mb-6 text-slate-900">Follow Us</h4>
<div className="flex gap-4 text-slate-400">
<a className="transition-colors hover:text-slate-900" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="24"></iconify-icon></a>
<a className="transition-colors hover:text-slate-900" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="24"></iconify-icon></a>
</div>
</div>
</div>
<div className="border-t pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 border-slate-200">
<p>© 2024 DocWeb Services. All rights reserved.</p>
<div className="flex gap-8">
<a className="transition-colors hover:text-slate-900" href="#">Privacy Policy</a>
<a className="transition-colors hover:text-slate-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>
</main>

<div className="fixed inset-0 z-[60] hidden" id="getStartedModal">
<div className="absolute inset-0 backdrop-blur-sm transition-opacity bg-slate-900/20" id="modalBackdrop"></div>
<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border max-w-md w-full p-10 relative opacity-0 transform scale-95 transition-all bg-white border-slate-200" id="modalContent">
<button className="absolute top-6 right-6 transition-colors rounded-md p-1.5 text-slate-400 hover:text-slate-900 bg-slate-50 hover:bg-slate-100" onclick="closeModal()">
<iconify-icon icon="solar:close-square-linear" width="20"></iconify-icon>
</button>
<div className="mb-8">
<h2 className="text-2xl tracking-tight font-semibold mb-2 text-slate-900">Book Your Consultation</h2>
<p className="text-sm text-slate-500 leading-loose">Leave your details and we'll schedule a time to discuss your practice.</p>
</div>
<form className="space-y-5" onsubmit="event.preventDefault();">
<div>
<label className="block text-xs font-semibold mb-2 text-slate-700" htmlFor="name">Full Name</label>
<input className="w-full h-11 px-4 text-sm border rounded-lg outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all placeholder:text-slate-400 text-slate-900 border-slate-200" id="name" placeholder="Dr. Jane Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold mb-2 text-slate-700" htmlFor="email">Email Address</label>
<input className="w-full h-11 px-4 text-sm border rounded-lg outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all placeholder:text-slate-400 text-slate-900 border-slate-200" id="email" placeholder="jane@clinic.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-semibold mb-2 text-slate-700" htmlFor="specialty">Medical Specialty</label>
<input className="w-full h-11 px-4 text-sm border rounded-lg outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all placeholder:text-slate-400 text-slate-900 border-slate-200" id="specialty" placeholder="e.g. Neurosurgery, Dermatology" required="" type="text"/>
</div>
<button className="w-full h-12 mt-4 text-sm font-semibold transition-colors rounded-lg shadow-sm bg-slate-900 text-white hover:bg-slate-800" type="submit">
                        Request Consultation
                    </button>
<p className="text-xs text-center mt-6 text-slate-400">We'll reach out within 24 hours.</p>
</form>
</div>
</div>
</div>

<div className="fixed inset-0 z-[60] hidden" id="featureModal">
<div className="absolute inset-0 backdrop-blur-sm transition-opacity bg-slate-900/20" id="featureModalBackdrop" onclick="closeFeatureModal()"></div>
<div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
<div className="pointer-events-auto rounded-2xl shadow-xl border max-w-sm w-full p-10 relative opacity-0 transform scale-95 transition-all bg-white border-slate-200" id="featureModalContent">
<button className="absolute top-6 right-6 transition-colors rounded-md p-1.5 text-slate-400 hover:text-slate-900 bg-slate-50 hover:bg-slate-100" onclick="closeFeatureModal()">
<iconify-icon icon="solar:close-square-linear" width="20"></iconify-icon>
</button>
<div className="mb-8">
<div className="w-14 h-14 rounded-xl bg-[#FAFAFA] border border-slate-100 flex items-center justify-center mb-6 text-slate-900" id="featureModalIcon">

</div>
<h3 className="text-2xl tracking-tight font-semibold text-slate-900" id="featureModalTitle">Title</h3>
</div>
<ul className="space-y-4 text-base text-slate-600" id="featureModalList">

</ul>
</div>
</div>
</div>



    </>
  );
}
