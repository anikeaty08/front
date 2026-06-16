import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const modal = document.getElementById('contactModal');
        const modalContent = document.getElementById('modalContent');
        const modalMessage = document.getElementById('modalMessage');
        const modalSubtitle = document.getElementById('modalSubtitle');

        function openModal(context = null) {
            modal.classList.remove('hidden');
            // Small delay to allow display:block to apply before animating opacity
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                modalContent.classList.remove('scale-95');
            }, 10);

            if(context && typeof context === 'string') {
                modalMessage.value = `I am interested in: ${context}\n\nPlease provide more details.`;
                modalSubtitle.innerText = `Inquiring about ${context}`;
            } else {
                modalMessage.value = "";
                modalSubtitle.innerText = "Send us a message and our technical team will respond shortly.";
            }
        }

        function closeModal() {
            modal.classList.add('opacity-0');
            modalContent.classList.add('scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300); // Matches transition duration
        }

        function submitForm() {
            alert("Thank you! Your message has been sent successfully.");
            closeModal();
        }

        // Close modal when clicking outside
        modal.addEventListener('click', function(e) {
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
      

<nav className="w-full max-w-[1400px] mx-auto px-6 py-8 flex justify-between items-center relative z-50">

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-500 hover:text-[#2563eb] transition-colors" href="#">Home</a>

<div className="flex items-center space-x-1 cursor-pointer group relative py-4 -my-4">
<span className="text-sm font-medium text-slate-500 group-hover:text-[#2563eb] transition-colors">Company Profile</span>
<iconify-icon className="w-3 h-3 text-slate-400 group-hover:text-[#2563eb] transition-transform duration-300 group-hover:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
<div className="dropdown-menu absolute top-full left-0 mt-2 w-48 bg-white border border-slate-100 rounded-xl shadow-lg opacity-0 invisible transition-all duration-300 z-50 flex flex-col py-2">
<a className="px-4 py-2 text-sm text-slate-500 hover:text-[#2563eb] hover:bg-slate-50 transition-colors" href="#about">About Us</a>
<a className="px-4 py-2 text-sm text-slate-500 hover:text-[#2563eb] hover:bg-slate-50 transition-colors" href="#advantage">The Advantage</a>
</div>
</div>

<div className="flex items-center space-x-1 cursor-pointer group relative py-4 -my-4">
<span className="text-sm font-medium text-slate-500 group-hover:text-[#2563eb] transition-colors">Products</span>
<iconify-icon className="w-3 h-3 text-slate-400 group-hover:text-[#2563eb] transition-transform duration-300 group-hover:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
<div className="dropdown-menu absolute top-full left-0 mt-2 w-48 bg-white border border-slate-100 rounded-xl shadow-lg opacity-0 invisible transition-all duration-300 z-50 flex flex-col py-2">
<a className="px-4 py-2 text-sm text-slate-500 hover:text-[#2563eb] hover:bg-slate-50 transition-colors" href="#products">Pre-insulated Panels</a>
<a className="px-4 py-2 text-sm text-slate-500 hover:text-[#2563eb] hover:bg-slate-50 transition-colors" href="#products">Thermal Boards</a>
<a className="px-4 py-2 text-sm text-slate-500 hover:text-[#2563eb] hover:bg-slate-50 transition-colors" href="#products">Accessories &amp; Tools</a>
</div>
</div>

<div className="flex items-center space-x-1 cursor-pointer group relative py-4 -my-4">
<span className="text-sm font-medium text-slate-500 group-hover:text-[#2563eb] transition-colors">Services</span>
<iconify-icon className="w-3 h-3 text-slate-400 group-hover:text-[#2563eb] transition-transform duration-300 group-hover:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
<div className="dropdown-menu absolute top-full left-0 mt-2 w-48 bg-white border border-slate-100 rounded-xl shadow-lg opacity-0 invisible transition-all duration-300 z-50 flex flex-col py-2">
<a className="px-4 py-2 text-sm text-slate-500 hover:text-[#2563eb] hover:bg-slate-50 transition-colors" href="#process">MEP Contracting</a>
<a className="px-4 py-2 text-sm text-slate-500 hover:text-[#2563eb] hover:bg-slate-50 transition-colors" href="#process">Custom Fabrication</a>
<a className="px-4 py-2 text-sm text-slate-500 hover:text-[#2563eb] hover:bg-slate-50 transition-colors" href="#process">Installation</a>
</div>
</div>
<a className="text-sm font-medium text-slate-500 hover:text-[#2563eb] transition-colors" href="#projects">Projects</a>
</div>

<div className="md:hidden cursor-pointer active:scale-95 transition-transform" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon className="w-6 h-6 text-slate-600 hover:text-[#2563eb] transition-colors" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</div>

<div className="flex transform -translate-x-1/2 absolute left-1/2 gap-x-2 gap-y-2 items-center hover:opacity-80 transition-opacity">
<a className="text-[#2563eb] flex items-center gap-2" href="#">
<iconify-icon icon="solar:buildings-2-linear" strokeWidth="1.5" width="28"></iconify-icon>
<span className="text-xl font-semibold tracking-tight text-slate-800 hidden sm:block">MINA A/C</span>
</a>
</div>

<div className="flex items-center space-x-6">
<div className="hidden lg:flex items-center space-x-4 text-sm font-medium text-slate-500 mr-4">
<a className="hover:text-[#2563eb] transition-colors" href="#">Downloads</a>
<a className="hover:text-[#2563eb] transition-colors" href="#" onclick="alert('Map feature coming soon!')">Map</a>
</div>
<button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-medium py-3 px-6 rounded-full transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 hidden sm:block" onclick="openModal()">
                Contact Us
            </button>
</div>

<div className="hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-md py-4 px-6 flex flex-col space-y-4 md:hidden z-50" id="mobile-menu">
<a className="text-sm font-medium text-slate-600 hover:text-[#2563eb]" href="#" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#2563eb]" href="#about" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Company Profile</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#2563eb]" href="#products" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Products</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#2563eb]" href="#process" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#2563eb]" href="#projects" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Projects</a>
<hr className="border-slate-100"/>
<button className="text-sm font-medium text-[#2563eb] mt-2 text-left" onclick="openModal(); document.getElementById('mobile-menu').classList.add('hidden')">Contact Us</button>
</div>
</nav>

<main className="relative w-full max-w-[1400px] mx-auto mt-8 md:mt-16 pb-24 border-b border-slate-100">

<div className="hidden lg:block absolute left-0 top-20 -translate-x-20 -rotate-6 transform z-0 opacity-90 hover:opacity-100 transition-opacity duration-700">
<img alt="Construction" className="w-64 h-80 object-cover rounded-2xl shadow-xl grayscale-[20%]" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="hidden lg:block absolute right-0 top-20 translate-x-20 rotate-6 transform z-0 opacity-90 hover:opacity-100 transition-opacity duration-700">
<img alt="Architecture" className="w-64 h-80 object-cover rounded-2xl shadow-xl grayscale-[20%]" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative z-10 flex flex-col items-center px-4">
<div className="mb-6 flex items-center justify-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full border border-blue-100 cursor-default">
<iconify-icon className="mr-2" icon="solar:shield-check-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Over 14 Years of Experience</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight font-medium text-slate-800 tracking-tight text-center max-w-5xl mx-auto drop-shadow-sm cursor-default">
                Pioneers in A/C Systems <br className="hidden md:block"/> <span className="text-[#2563eb]">&amp; MEP Works.</span>
</h1>
<div className="w-full max-w-6xl mx-auto mt-16 flex flex-col md:flex-row justify-between items-center md:items-end gap-8 md:gap-0">
<div className="w-full md:w-1/4 text-center md:text-left cursor-default">
<span className="text-xs font-semibold tracking-widest text-slate-400 uppercase block mb-1">CFC Free Products</span>
</div>
<div className="w-full md:w-2/4 text-center">
<p className="md:text-xl leading-relaxed text-lg font-normal text-slate-500 max-w-xl mx-auto cursor-default">
                        We execute specialized structural MEP works and revolutionary foam-based pre-insulated ducting with utmost precision and care.
                    </p>
<div className="mt-10">
<a className="bg-[#eff6ff] hover:bg-[#dbeafe] text-[#1e40af] text-base font-medium py-4 px-10 rounded-full transition-all duration-300 inline-block text-center active:scale-95" href="#projects">
                            Explore Our Projects
                        </a>
</div>
</div>
<div className="w-full md:w-1/4 text-center md:text-right cursor-default">
<span className="text-xs font-semibold tracking-widest text-slate-400 uppercase block mb-1">ASHRAE Standards</span>
</div>
</div>
<div className="mt-20 relative w-full flex justify-center">
<div className="relative group cursor-pointer hover:-translate-y-2 transition-transform duration-500">
<div className="absolute inset-0 border border-slate-100 rounded-[2rem] transform translate-y-2 translate-x-2 -z-10 group-hover:translate-y-4 group-hover:translate-x-4 transition-transform duration-500"></div>
<img alt="Engineering" className="w-80 h-96 object-cover rounded-[2rem] shadow-sm group-hover:shadow-xl transition-shadow duration-500" src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-white/80 rounded-tl-md"></div>
<div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-white/80 rounded-br-md"></div>
</div>
</div>
</div>
</main>

<section className="py-24 px-6 bg-white scroll-mt-20" id="about">
<div className="max-w-[1200px] mx-auto">
<div className="text-center max-w-2xl mx-auto mb-20 cursor-default">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-800 mb-6">Engineering Excellence</h2>
<p className="text-lg text-slate-500 font-light">We apply precise procedures to manufacture and carry out ductwork of any shape and dimensions, built for the most demanding applications.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#bfdbfe] transition-all duration-300 group cursor-default">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-[#2563eb] shadow-sm group-hover:scale-110 group-hover:-translate-y-1 transition-transform">
<iconify-icon icon="solar:wind-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-800 mb-3 tracking-tight">Pre-insulated Ducting</h3>
<p className="text-slate-500 font-light leading-relaxed">Using Polyisocyanurate (PIR) and Phenolic panels of the highest quality for superior thermal performance.</p>
</div>

<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#bfdbfe] transition-all duration-300 group cursor-default">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-[#2563eb] shadow-sm group-hover:scale-110 group-hover:-translate-y-1 transition-transform">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-800 mb-3 tracking-tight">MEP Contracting</h3>
<p className="text-slate-500 font-light leading-relaxed">Expertise in specialized technical works, air handling units, chillers, and decentralized control systems.</p>
</div>

<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#bfdbfe] transition-all duration-300 group cursor-default">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-[#2563eb] shadow-sm group-hover:scale-110 group-hover:-translate-y-1 transition-transform">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-800 mb-3 tracking-tight">Eco-Friendly</h3>
<p className="text-slate-500 font-light leading-relaxed">Committed to the future with CFC-free products that meet strict environmental and structural standards.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50 scroll-mt-20" id="process">
<div className="max-w-[1200px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
<div className="cursor-default">
<span className="text-[#2563eb] font-medium tracking-widest text-xs uppercase mb-2 block">Our Methodology</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-800">Precision in Every Phase</h2>
</div>
<a className="hidden md:flex items-center text-[#2563eb] font-medium hover:opacity-80 transition-opacity mt-4 md:mt-0 active:scale-95 group" href="#products">
                    View manufacturing details 
                    <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative cursor-default">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-slate-200 -z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
<div className="w-24 h-24 bg-white rounded-full border border-slate-100 shadow-sm flex items-center justify-center text-[#2563eb] mb-8 group-hover:shadow-md transition-shadow duration-300">
<span className="text-3xl font-medium font-serif">1</span>
</div>
<h3 className="text-xl font-medium text-slate-800 mb-2">Requirement Analysis</h3>
<p className="text-slate-500 font-light max-w-xs">Our experts thoroughly evaluate your project specifications and site demands.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
<div className="w-24 h-24 bg-white rounded-full border border-slate-100 shadow-sm flex items-center justify-center text-[#2563eb] mb-8 group-hover:shadow-md transition-shadow duration-300">
<span className="text-3xl font-medium font-serif">2</span>
</div>
<h3 className="text-xl font-medium text-slate-800 mb-2">Custom Fabrication</h3>
<p className="text-slate-500 font-light max-w-xs">Utilizing automatic and manual duct fabrication tailored to complex designs.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
<div className="w-24 h-24 bg-white rounded-full border border-slate-100 shadow-sm flex items-center justify-center text-[#2563eb] mb-8 group-hover:shadow-md transition-shadow duration-300">
<span className="text-3xl font-medium font-serif">3</span>
</div>
<h3 className="text-xl font-medium text-slate-800 mb-2">Master Installation</h3>
<p className="text-slate-500 font-light max-w-xs">Our fitting experts execute the final build, ensuring clean, aesthetic, and lasting results.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white scroll-mt-20" id="projects">
<div className="max-w-[1200px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="grid grid-cols-2 gap-4">
<img alt="Industrial Building" className="rounded-2xl object-cover h-64 w-full shadow-sm translate-y-8 hover:scale-105 transition-transform duration-500 cursor-pointer" src="https://images.unsplash.com/photo-1587293852726-59cb2f797889?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="Modern Architecture" className="rounded-2xl object-cover h-64 w-full shadow-sm hover:scale-105 transition-transform duration-500 cursor-pointer" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>

<div className="cursor-default">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-800 mb-6">Built for Demanding Applications</h2>
<p className="text-lg text-slate-500 font-light mb-10">MINA panel ductwork benefits any project typology. We provide world-class finishing that is aesthetically appealing and made to last.</p>
<div className="space-y-6">
<div className="flex items-start group hover:bg-slate-50 p-2 -ml-2 rounded-xl transition-colors duration-300">
<div className="mt-1 bg-blue-50 p-2 rounded-lg text-[#2563eb] mr-4 group-hover:bg-blue-100 transition-colors">
<iconify-icon icon="solar:hospital-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-slate-800">Healthcare &amp; Labs</h4>
<p className="text-slate-500 font-light text-sm mt-1">Specialized installations for hospitals, clean rooms, and isolation wards.</p>
</div>
</div>
<div className="flex items-start group hover:bg-slate-50 p-2 -ml-2 rounded-xl transition-colors duration-300">
<div className="mt-1 bg-blue-50 p-2 rounded-lg text-[#2563eb] mr-4 group-hover:bg-blue-100 transition-colors">
<iconify-icon icon="solar:shop-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-slate-800">Commercial Centers</h4>
<p className="text-slate-500 font-light text-sm mt-1">Efficient HVAC solutions for offices, malls, and large retail spaces.</p>
</div>
</div>
<div className="flex items-start group hover:bg-slate-50 p-2 -ml-2 rounded-xl transition-colors duration-300">
<div className="mt-1 bg-blue-50 p-2 rounded-lg text-[#2563eb] mr-4 group-hover:bg-blue-100 transition-colors">
<iconify-icon icon="solar:bus-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-slate-800">Public Infrastructure</h4>
<p className="text-slate-500 font-light text-sm mt-1">Robust systems designed for airports, metro stations, and transport hubs.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#fcfcfc] border-y border-slate-50 scroll-mt-20" id="advantage">
<div className="max-w-[1200px] mx-auto text-center mb-16 cursor-default">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-800">The MINA Advantage</h2>
</div>
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 cursor-default">

<div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
<div>
<iconify-icon className="text-[#bfdbfe] mb-6" icon="solar:verified-check-linear" width="40"></iconify-icon>
<p className="text-xl text-slate-600 font-light italic leading-relaxed">"Safety and Quality go hand-in-hand. We use only the best materials, ensuring every installation strictly adheres to the standards of the American Society of Heating, Refrigerating and Air-Conditioning Engineers (ASHRAE)."</p>
</div>
<div className="flex items-center mt-8">
<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mr-4 text-slate-400">
<iconify-icon icon="solar:user-bold" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Quality Assurance Team</div>
<div className="text-xs text-slate-400 uppercase tracking-wide">MINA A/C Systems</div>
</div>
</div>
</div>

<div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
<div>
<iconify-icon className="text-[#bfdbfe] mb-6" icon="solar:ruler-pen-linear" width="40"></iconify-icon>
<p className="text-xl text-slate-600 font-light italic leading-relaxed">"We are not the first company in the UAE to perform pre-insulated ductwork, but we strive to be the best. We have successfully executed projects with the most complex design requirements in the region."</p>
</div>
<div className="flex items-center mt-8">
<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mr-4 text-slate-400">
<iconify-icon icon="solar:user-bold" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Project Management</div>
<div className="text-xs text-slate-400 uppercase tracking-wide">MINA A/C Systems</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white scroll-mt-20" id="products">
<div className="max-w-[1200px] mx-auto">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-800">Our Products</h2>
<button className="text-slate-500 hover:text-[#2563eb] text-sm font-medium transition-colors active:scale-95" onclick="alert('Full catalog PDF downloading...')">View full catalog</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer" onclick="openModal('Request quote for Preinsulated HVAC Duct')">
<div className="overflow-hidden rounded-2xl mb-4 h-56 w-full relative bg-slate-100">
<div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="HVAC Duct" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 opacity-90 mix-blend-multiply" src="https://images.unsplash.com/photo-1503708928676-1cb796a0891e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider">Panels</span>
<h3 className="text-lg font-medium text-slate-800 mt-1 group-hover:text-[#2563eb] transition-colors">Preinsulated HVAC Duct</h3>
<p className="text-sm text-slate-500 mt-2 line-clamp-2">Incorporates polyisocyanurate (PIR) closed cell foam with embossed Aluminium facing.</p>
</div>

<div className="group cursor-pointer" onclick="openModal('Request quote for PIR Thermal Insulation Board')">
<div className="overflow-hidden rounded-2xl mb-4 h-56 w-full relative bg-slate-100">
<div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Insulation Board" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 opacity-90 mix-blend-multiply" src="https://images.unsplash.com/photo-1518115682977-17eb48c909c2?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider">Panels</span>
<h3 className="text-lg font-medium text-slate-800 mt-1 group-hover:text-[#2563eb] transition-colors">PIR Thermal Insulation Board</h3>
<p className="text-sm text-slate-500 mt-2 line-clamp-2">Ideal for wall, floor, and roof insulation with flexible facings like Kraft Paper.</p>
</div>

<div className="group cursor-pointer" onclick="openModal('Request quote for Accessories &amp; Tools')">
<div className="overflow-hidden rounded-2xl mb-4 h-56 w-full relative bg-slate-100">
<div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Tools" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 opacity-90 mix-blend-multiply" src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider">Equipment</span>
<h3 className="text-lg font-medium text-slate-800 mt-1 group-hover:text-[#2563eb] transition-colors">Accessories &amp; Tools</h3>
<p className="text-sm text-slate-500 mt-2 line-clamp-2">A complete set of tools allowing our technicians to perform any installation requirement.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 cursor-default">
<div className="max-w-[1200px] mx-auto bg-[#2563eb] rounded-[2.5rem] py-20 px-8 md:px-20 text-center relative overflow-hidden shadow-xl">

<div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Have a Project in Mind?</h2>
<p className="text-blue-100 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">Let our experts understand your requirements and realize your design as efficiently as possible.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-white text-[#2563eb] hover:bg-slate-50 font-medium py-4 px-10 rounded-full transition-all shadow-md active:scale-95 inline-block text-center cursor-pointer" onclick="openModal('Quote Request')">
                        Request a Quote
                    </button>
<button className="bg-[#1d4ed8] text-white hover:bg-[#1e40af] border border-white/20 font-medium py-4 px-10 rounded-full transition-all active:scale-95 inline-block text-center cursor-pointer" onclick="alert('Map feature coming soon!')">
                        View Location Map
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-slate-100">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6 text-[#2563eb] cursor-pointer hover:opacity-80 transition-opacity" onclick="window.scrollTo(0,0)">
<iconify-icon icon="solar:buildings-2-linear" strokeWidth="1.5" width="28"></iconify-icon>
<span className="text-xl font-semibold tracking-tight text-slate-800">MINA A/C</span>
</div>
<p className="text-slate-400 font-light text-sm leading-relaxed mb-6 cursor-default">Pioneers in A/C system contracting, pre-insulated foam ducting, and specialized MEP works across the UAE.</p>
<div className="flex space-x-4">
<a className="text-slate-400 hover:text-[#2563eb] active:scale-95 transition-all hover:-translate-y-1" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-[#2563eb] active:scale-95 transition-all hover:-translate-y-1" href="#"><iconify-icon icon="solar:twitter-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-[#2563eb] active:scale-95 transition-all hover:-translate-y-1" href="#"><iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-medium text-slate-800 mb-6 cursor-default">Company Profile</h4>
<ul className="space-y-4 text-sm text-slate-500 font-light">
<li><a className="hover:text-[#2563eb] transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-[#2563eb] transition-colors" href="#about">Vision &amp; Mission</a></li>
<li><a className="hover:text-[#2563eb] transition-colors" href="#advantage">The MINA Advantage</a></li>
<li><a className="hover:text-[#2563eb] transition-colors" href="#projects">Our Projects</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-800 mb-6 cursor-default">Services &amp; Products</h4>
<ul className="space-y-4 text-sm text-slate-500 font-light">
<li><a className="hover:text-[#2563eb] transition-colors" href="#products">HVAC Duct Manufacturing</a></li>
<li><a className="hover:text-[#2563eb] transition-colors" href="#products">Air Handling Units</a></li>
<li><a className="hover:text-[#2563eb] transition-colors" href="#products">Preinsulated Panels</a></li>
<li><a className="hover:text-[#2563eb] transition-colors" href="#products">Accessories &amp; Tools</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-800 mb-6 cursor-default">Contact Us</h4>
<ul className="space-y-4 text-sm text-slate-500 font-light">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-[#2563eb] shrink-0" icon="solar:map-point-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span>Mina A/C System Fixing Contracting<br/>P.O. Box 6050, Ajman, UAE</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#2563eb] shrink-0" icon="solar:phone-calling-linear" strokeWidth="1.5" width="18"></iconify-icon>
<a className="hover:text-[#2563eb] transition-colors" href="tel:+97167431622">+971 6 743 1622</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#2563eb] shrink-0" icon="solar:printer-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span>+971 6 743 6318</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#2563eb] shrink-0" icon="solar:letter-linear" strokeWidth="1.5" width="18"></iconify-icon>
<a className="hover:text-[#2563eb] transition-colors" href="mailto:sales@minaacuae.com">sales@minaacuae.com</a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 font-light">
<p className="cursor-default">All Copyrights Reserved © 2013-2024 | MINA A/C System Fixing Contracting</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-[#2563eb] transition-colors" href="#">Privacy Policy</a>
<button className="hover:text-[#2563eb] transition-colors" onclick="openModal()">Contact Us</button>
<button className="hover:text-[#2563eb] transition-colors" onclick="alert('Map feature coming soon!')">Location Map</button>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] hidden opacity-0 transition-opacity duration-300 flex items-center justify-center p-4" id="contactModal">
<div className="bg-white rounded-[2rem] shadow-xl w-full max-w-lg overflow-hidden transform scale-95 transition-transform duration-300 relative" id="modalContent">

<button className="absolute top-6 right-6 text-slate-400 hover:text-slate-800 transition-colors bg-slate-50 hover:bg-slate-100 p-2 rounded-full active:scale-95" onclick="closeModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="p-8 md:p-10">
<div className="flex items-center gap-3 mb-2 text-[#2563eb]">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h3 className="text-2xl font-semibold tracking-tight text-slate-800">Get in Touch</h3>
</div>
<p className="text-slate-500 font-light text-sm mb-8" id="modalSubtitle">Send us a message and our technical team will respond shortly.</p>
<form className="space-y-4" onsubmit="event.preventDefault(); submitForm();">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1 ml-1">Full Name</label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1 ml-1">Email Address</label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400" placeholder="john@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1 ml-1">Message</label>
<textarea className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none placeholder:text-slate-400" id="modalMessage" placeholder="How can we help with your project?" required="" rows="4"></textarea>
</div>
<button className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-medium py-3.5 px-6 rounded-xl transition-all shadow-sm active:scale-[0.98] mt-2" type="submit">
                        Send Message
                    </button>
</form>

<div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-500 font-light">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:phone-calling-linear" width="16"></iconify-icon>
<a className="hover:text-[#2563eb] transition-colors" href="tel:+97167431622">+971 6 743 1622</a>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:letter-linear" width="16"></iconify-icon>
<a className="hover:text-[#2563eb] transition-colors" href="mailto:sales@minaacuae.com">sales@minaacuae.com</a>
</div>
<div className="flex items-start gap-2 sm:col-span-2">
<iconify-icon className="mt-0.5 text-slate-400 shrink-0" icon="solar:map-point-linear" width="16"></iconify-icon>
<span>P.O. Box 6050, Ajman, United Arab Emirates</span>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
