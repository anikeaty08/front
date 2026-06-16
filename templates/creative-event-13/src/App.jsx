import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Project Data
        const projects = [
            {
                title: "Neon Genesis",
                year: "2023",
                client: "Yohji Yamamoto",
                role: "Creative Direction",
                desc: "A fully immersive runway experience for Tokyo Fashion Week, utilizing reactive LED arrays and motion-tracked projection mapping.",
                image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
            },
            {
                title: "Industrial Resonance",
                year: "2023",
                client: "Boiler Room",
                role: "Set Design & Lighting",
                desc: "Transforming Berlin Kraftwerk into a brutalist cathedral of light. Using 150 beam fixtures synchronized with a generative audio system.",
                image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"
            },
            {
                title: "Refraction",
                year: "2022",
                client: "Prada",
                role: "Installation Art",
                desc: "A series of dichroic glass monoliths placed in the desert, creating shifting light patterns throughout the day.",
                image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"
            },
            {
                title: "Void Walker",
                year: "2024",
                client: "Nike Lab",
                role: "Digital Campaign",
                desc: "Web3 integrated launch for the new ISPA line. Featuring AR wearables and a decentralized scavenger hunt in NYC.",
                image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"
            },
            {
                title: "Cyber Echo",
                year: "2023",
                client: "Sony Music",
                role: "Stage Design",
                desc: "Live performance stage design featuring transparent OLED screens and holographic projection layers.",
                image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
            },
            {
                title: "Digital Flora",
                year: "2023",
                client: "Botanical Garden",
                role: "Projection Mapping",
                desc: "Night-time exhibition bringing plants to life with bioluminescent projection mapping responding to touch.",
                image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop"
            },
            {
                title: "Chrome Hearts",
                year: "2022",
                client: "Chrome Hearts",
                role: "Retail Experience",
                desc: "Interactive mirror installations in flagship stores that distort reality using real-time fluid simulation.",
                image: "https://images.unsplash.com/photo-1515462277126-2dd0c162007a?q=80&w=1976&auto=format&fit=crop"
            },
             {
                title: "Subterranean",
                year: "2021",
                client: "Tresor Berlin",
                role: "Club Installation",
                desc: "Permanent lighting installation for the new vault room, utilizing military grade lasers and smoke.",
                image: "https://images.unsplash.com/photo-1558470598-a5dda9640f6b?q=80&w=2071&auto=format&fit=crop"
            },
             {
                title: "Pulse Width",
                year: "2024",
                client: "Moog",
                role: "Product Launch",
                desc: "Visualizing sound synthesis in real-time on a massive 8K LED wall for the launch of the new synthesizer.",
                image: "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?q=80&w=2066&auto=format&fit=crop"
            },
             {
                title: "Hertzian Space",
                year: "2023",
                client: "Ars Electronica",
                role: "Research",
                desc: "Exploring the visualization of radio waves and wi-fi signals in physical space through VR.",
                image: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=1974&auto=format&fit=crop"
            }
        ];

        // Functions
        function switchView(viewId) {
            const homeView = document.getElementById('home-view');
            const projectsView = document.getElementById('projects-view');
            const body = document.body;
            
            if (viewId === 'projects-view') {
                homeView.classList.add('opacity-0');
                setTimeout(() => {
                    homeView.classList.add('hidden');
                    projectsView.classList.remove('hidden');
                    projectsView.classList.add('flex');
                    body.style.overflow = 'hidden'; // Lock scroll for projects view
                }, 300);
            } else {
                projectsView.classList.remove('flex');
                projectsView.classList.add('hidden');
                homeView.classList.remove('hidden');
                // Trigger reflow
                void homeView.offsetWidth;
                homeView.classList.remove('opacity-0');
                body.style.overflow = '';
            }
        }

        function updateProject(index) {
            const project = projects[index];
            const display = document.getElementById('project-display');
            
            // Fade out
            display.style.opacity = '0';
            
            setTimeout(() => {
                // Update content
                document.getElementById('project-image').src = project.image;
                document.getElementById('project-title').innerText = project.title;
                document.getElementById('project-year').innerText = project.year;
                document.getElementById('project-desc').innerText = project.desc;
                document.getElementById('project-client').innerText = `Client: ${project.client}`;
                document.getElementById('project-role').innerText = `Role: ${project.role}`;
                
                // Highlight active list item
                document.querySelectorAll('.active-project').forEach(el => {
                    el.classList.remove('text-[#3DF604]', 'pl-2', 'active-project');
                    el.classList.add('text-white/50');
                });
                
                const activeItem = document.querySelector(`li[data-index="${index}"]`);
                if(activeItem) {
                    activeItem.classList.remove('text-white/50');
                    activeItem.classList.add('text-[#3DF604]', 'pl-2', 'active-project');
                }

                // Fade in
                display.style.opacity = '1';
            }, 200);
        }

        function toggleModal(modalId) {
            const modal = document.getElementById(modalId);
            const body = document.body;
            
            if (modal.classList.contains('hidden')) {
                // Open
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                body.style.overflow = 'hidden';
            } else {
                // Close
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                if (document.getElementById('projects-view').classList.contains('hidden')) {
                     body.style.overflow = ''; // Only unlock if projects view is also closed
                }
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none grid-bg"></div>
<div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-t from-[#050505] via-transparent to-transparent h-48 bottom-0 w-full"></div>

<nav className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:px-8 md:py-6 flex justify-between items-center mix-blend-difference">
<a className="group flex items-center gap-2" href="javascript:switchView('home-view')">
<div className="w-8 h-8 bg-[#3DF604] flex items-center justify-center text-black font-bold font-['Unbounded'] rounded-sm group-hover:rotate-180 transition-transform duration-500">Y</div>
<span className="font-['Unbounded'] font-bold tracking-tight text-xl hidden md:block">YOZELEN</span>
</a>

<div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 py-1">
<button className="text-xs hover:text-black hover:bg-[#3DF604] px-4 py-2 rounded-full transition-all" onclick="switchView('projects-view')">PROJECTS</button>
<a className="text-xs hover:text-black hover:bg-[#3DF604] px-4 py-2 rounded-full transition-all" href="#studio" onclick="switchView('home-view')">EXPERTISE</a>
<a className="text-xs hover:text-black hover:bg-[#3DF604] px-4 py-2 rounded-full transition-all" href="#footer" onclick="switchView('home-view')">NEWS</a>
<button className="text-xs hover:text-black hover:bg-[#3DF604] px-4 py-2 rounded-full transition-all" onclick="toggleModal('contact-modal')">ABOUT ME</button>
</div>
<button className="flex items-center gap-2 text-xs font-bold uppercase border border-white/20 px-4 py-2 rounded-full hover:bg-[#3DF604] hover:text-black hover:border-[#3DF604] transition-all cursor-pointer group" onclick="toggleModal('contact-modal')">
<span className="hidden md:block">Start Project</span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</nav>

<main className="relative z-10 pt-32 pb-20 page-transition" id="home-view">

<section className="px-4 md:px-8 mb-20 relative">
<div className="absolute top-0 right-0 md:right-8 opacity-20 hidden md:block">
<i className="w-32 h-32 animate-spin-slow text-gray-500" data-lucide="maximize" style={{animationDuration: '20s'}}></i>
</div>
<div className="flex flex-col gap-2">
<div className="flex items-center gap-3 mb-4">
<span className="w-2 h-2 bg-[#3DF604] rounded-full animate-pulse"></span>
<span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">System Online / Berlin</span>
</div>
<h1 className="font-['Unbounded'] font-black text-5xl md:text-8xl lg:text-[9rem] leading-[0.85] uppercase tracking-tighter">
                    Crafting <br/>
<span className="text-transparent" style={{WebkitTextStroke: '1px rgba(255,255,255,0.8)'}}>Digital</span> <br/>
<span className="text-[#3DF604] italic pr-4">Reality</span> Events
                </h1>
<div className="md:absolute bottom-4 right-0 md:right-8 max-w-sm mt-8 md:mt-0">
<p className="text-xs md:text-sm text-gray-400 leading-relaxed border-l-2 border-[#3DF604] pl-4">
                        We are an avant-garde production house merging physical spaces with digital layers. From underground raves to high-end fashion shows.
                    </p>
</div>
</div>
</section>

<div className="w-full border-t border-b border-white/10 py-4 mb-24 overflow-hidden bg-[#0A0A0A] relative">
<div className="whitespace-nowrap scrolling-text flex gap-8">
<span className="font-['Unbounded'] text-4xl md:text-6xl text-transparent font-bold uppercase" style={{WebkitTextStroke: '1px #333'}}>Creative Direction</span>
<span className="font-['Unbounded'] text-4xl md:text-6xl text-[#3DF604] font-bold uppercase">×</span>
<span className="font-['Unbounded'] text-4xl md:text-6xl text-transparent font-bold uppercase" style={{WebkitTextStroke: '1px #333'}}>Set Design</span>
<span className="font-['Unbounded'] text-4xl md:text-6xl text-[#3DF604] font-bold uppercase">×</span>
<span className="font-['Unbounded'] text-4xl md:text-6xl text-transparent font-bold uppercase" style={{WebkitTextStroke: '1px #333'}}>Lighting</span>
<span className="font-['Unbounded'] text-4xl md:text-6xl text-[#3DF604] font-bold uppercase">×</span>
<span className="font-['Unbounded'] text-4xl md:text-6xl text-transparent font-bold uppercase" style={{WebkitTextStroke: '1px #333'}}>Audio Visual</span>
<span className="font-['Unbounded'] text-4xl md:text-6xl text-[#3DF604] font-bold uppercase">×</span>
</div>
</div>

<section className="px-4 md:px-8 max-w-[1800px] mx-auto scroll-mt-24" id="work">
<div className="flex items-end justify-between mb-8 border-b border-white/10 pb-4">
<h2 className="font-['Unbounded'] text-2xl uppercase">Selected Works</h2>
<span className="text-xs text-[#3DF604] font-mono">[2023 - 2024]</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(300px,auto)]">

<article className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-sm border border-white/10 cursor-pointer" onclick="switchView('projects-view')">
<div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-all"></div>
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter saturate-0 group-hover:saturate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent z-20">
<div className="flex justify-between items-end">
<div>
<div className="text-[#3DF604] text-xs font-bold mb-1">TOKYO FASHION WEEK</div>
<h3 className="font-['Unbounded'] text-3xl uppercase text-white">Neon Genesis</h3>
</div>
<button className="bg-white/10 backdrop-blur rounded-full p-3 hover:bg-[#3DF604] hover:text-black transition-colors">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</article>

<div className="md:col-span-1 bg-[#111] border border-white/10 p-6 flex flex-col justify-between group hover:border-[#3DF604] transition-colors rounded-sm">
<i className="w-8 h-8 text-[#3DF604]" data-lucide="users"></i>
<div>
<div className="text-4xl font-['Unbounded'] font-bold mb-1">120k+</div>
<div className="text-xs text-gray-400 uppercase tracking-wider">Attendees per year</div>
</div>
</div>

<article className="md:col-span-1 md:row-span-2 relative group border border-white/10 rounded-sm overflow-hidden">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute top-4 right-4 bg-black/50 backdrop-blur px-3 py-1 rounded-full border border-white/10 text-xs">
                        INSTALLATION
                     </div>
<div className="absolute bottom-4 left-4">
<h3 className="font-['Unbounded'] text-xl uppercase">Refraction</h3>
</div>
</article>

<div className="md:col-span-1 bg-[#3DF604] text-black p-6 flex flex-col justify-between rounded-sm">
<div className="flex justify-between items-start">
<i className="w-8 h-8" data-lucide="sparkles"></i>
<span className="font-bold text-xs border border-black px-2 rounded-full">NEW</span>
</div>
<div>
<h3 className="font-['Unbounded'] font-bold text-xl leading-tight mb-2 uppercase">V.I.P Experiences</h3>
<p className="text-xs font-bold opacity-70">Curated private events for ultra-high-net-worth individuals.</p>
</div>
</div>

<article className="md:col-span-3 h-[300px] relative group overflow-hidden border border-white/10 rounded-sm">
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 z-10"></div>
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 z-20 flex items-center justify-between px-8 md:px-16">
<div className="max-w-md">
<span className="text-[#3DF604] text-xs font-mono tracking-widest mb-2 block">CLIENT: BOILER ROOM</span>
<h3 className="font-['Unbounded'] text-3xl md:text-5xl uppercase leading-none mb-4">Industrial<br/>Resonance</h3>
<button className="inline-flex items-center gap-2 text-xs border-b border-white pb-1 hover:text-[#3DF604] hover:border-[#3DF604] transition-colors" onclick="switchView('projects-view')">
                                CASE STUDY <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<ul className="hidden md:block text-right text-xs font-mono text-gray-300 space-y-2 border-r border-white/20 pr-6">
<li>LOC: BERLIN KRAFTWERK</li>
<li>CAP: 3,500 PAX</li>
<li>AUDIO: L-ACOUSTICS K2</li>
<li>LIGHT: 150x BEAM</li>
</ul>
</div>
</article>

<div className="md:col-span-1 bg-[#111] border border-white/10 flex flex-col items-center justify-center text-center p-6 gap-4 hover:bg-[#1a1a1a] hover:border-[#3DF604] transition-colors rounded-sm cursor-pointer group" onclick="switchView('projects-view')">
<div className="w-16 h-16 rounded-full border border-dashed border-gray-600 group-hover:border-[#3DF604] flex items-center justify-center animate-spin-slow group-hover:animate-none transition-all">
<i className="text-[#3DF604] w-6 h-6 group-hover:scale-125 transition-transform" data-lucide="arrow-right"></i>
</div>
<div className="font-['Unbounded'] text-sm uppercase group-hover:text-[#3DF604] transition-colors">View All Projects</div>
</div>
</div>
</section>

<section className="mt-32 px-4 md:px-8 scroll-mt-24" id="studio">
<div className="border-t border-white/20"></div>
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20 border-b border-white/20">
<div className="py-12 md:px-8 group hover:bg-[#111] transition-colors">
<div className="flex justify-between items-start mb-12">
<span className="font-['Unbounded'] text-5xl opacity-20 group-hover:opacity-100 group-hover:text-[#3DF604] transition-all">01</span>
<i className="w-6 h-6" data-lucide="ruler"></i>
</div>
<h3 className="text-xl font-bold uppercase mb-4">Spatial Design</h3>
<p className="text-xs text-gray-400 leading-relaxed max-w-[80%]">
                        We don't just decorate rooms; we architect atmospheres using volumetric lighting and kinetic structures.
                    </p>
</div>
<div className="py-12 md:px-8 group hover:bg-[#111] transition-colors">
<div className="flex justify-between items-start mb-12">
<span className="font-['Unbounded'] text-5xl opacity-20 group-hover:opacity-100 group-hover:text-[#3DF604] transition-all">02</span>
<i className="w-6 h-6" data-lucide="monitor"></i>
</div>
<h3 className="text-xl font-bold uppercase mb-4">Digital Fusion</h3>
<p className="text-xs text-gray-400 leading-relaxed max-w-[80%]">
                        Integration of WebGL visuals, AR filters, and interactive screens to extend the event beyond the physical.
                    </p>
</div>
<div className="py-12 md:px-8 group hover:bg-[#111] transition-colors">
<div className="flex justify-between items-start mb-12">
<span className="font-['Unbounded'] text-5xl opacity-20 group-hover:opacity-100 group-hover:text-[#3DF604] transition-all">03</span>
<i className="w-6 h-6" data-lucide="waves"></i>
</div>
<h3 className="text-xl font-bold uppercase mb-4">Sonic Identity</h3>
<p className="text-xs text-gray-400 leading-relaxed max-w-[80%]">
                        Curating soundscapes that dictate the emotional rhythm of the event. From ambient to industrial techno.
                    </p>
</div>
</div>
</section>

<section className="mt-32 px-4 md:px-8 pb-12" id="footer">
<div className="bg-[#3DF604] text-black rounded-sm p-8 md:p-16 relative overflow-hidden group cursor-pointer" onclick="toggleModal('contact-modal')">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-8">
<div>
<div className="text-sm font-bold uppercase tracking-widest mb-4 border-b border-black/20 inline-block pb-1">Availability: Q4 2024</div>
<h2 className="font-['Unbounded'] text-4xl md:text-7xl font-black uppercase leading-none">
                            Let's Make<br/>Some Noise
                        </h2>
</div>
<div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-[#3DF604] group-hover:scale-125 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
<footer className="mt-16 flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8 gap-6">
<div className="flex flex-col gap-4">
<a className="font-['Unbounded'] text-2xl font-bold tracking-tight" href="#">YOZELEN</a>
<div className="flex gap-4 text-gray-500">
<i className="w-5 h-5 hover:text-[#3DF604] transition-colors cursor-pointer" data-lucide="instagram"></i>
<i className="w-5 h-5 hover:text-[#3DF604] transition-colors cursor-pointer" data-lucide="twitter"></i>
<i className="w-5 h-5 hover:text-[#3DF604] transition-colors cursor-pointer" data-lucide="linkedin"></i>
</div>
</div>
<div className="grid grid-cols-2 gap-x-12 gap-y-2 text-xs text-gray-400 font-mono uppercase">
<a className="hover:text-white" href="#">Impressum</a>
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Contact</a>
<a className="hover:text-white" href="#">Press Kit</a>
</div>
<div className="text-[10px] text-gray-600 font-mono uppercase text-right">
                    © 2024 YOZELEN Studio.<br/>Designed for the Void.
                </div>
</footer>
</section>
</main>

<div className="fixed inset-0 z-40 bg-[#050505] hidden flex-col pt-32 animate-fade-in overflow-hidden" id="projects-view">
<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#050505] to-transparent z-10 pointer-events-none"></div>
<div className="flex flex-1 h-full relative">

<div className="w-full md:w-1/3 h-full overflow-y-auto border-r border-white/10 px-4 md:px-8 pb-12 pt-4 custom-scrollbar">
<div className="mb-8">
<h2 className="font-['Unbounded'] text-2xl uppercase mb-2">Archive</h2>
<p className="text-xs text-gray-500">Select a project to view details.</p>
</div>
<ul className="space-y-4 font-['Unbounded'] text-lg md:text-xl uppercase">

<li className="cursor-pointer text-white/50 hover:text-[#3DF604] hover:pl-2 transition-all duration-300 active-project" data-index="0" onmouseenter="updateProject(0)">Neon Genesis</li>
<li className="cursor-pointer text-white/50 hover:text-[#3DF604] hover:pl-2 transition-all duration-300" data-index="1" onmouseenter="updateProject(1)">Industrial Resonance</li>
<li className="cursor-pointer text-white/50 hover:text-[#3DF604] hover:pl-2 transition-all duration-300" data-index="2" onmouseenter="updateProject(2)">Refraction</li>
<li className="cursor-pointer text-white/50 hover:text-[#3DF604] hover:pl-2 transition-all duration-300" data-index="3" onmouseenter="updateProject(3)">Void Walker</li>
<li className="cursor-pointer text-white/50 hover:text-[#3DF604] hover:pl-2 transition-all duration-300" data-index="4" onmouseenter="updateProject(4)">Cyber Echo</li>
<li className="cursor-pointer text-white/50 hover:text-[#3DF604] hover:pl-2 transition-all duration-300" data-index="5" onmouseenter="updateProject(5)">Digital Flora</li>
<li className="cursor-pointer text-white/50 hover:text-[#3DF604] hover:pl-2 transition-all duration-300" data-index="6" onmouseenter="updateProject(6)">Chrome Hearts</li>
<li className="cursor-pointer text-white/50 hover:text-[#3DF604] hover:pl-2 transition-all duration-300" data-index="7" onmouseenter="updateProject(7)">Subterranean</li>
<li className="cursor-pointer text-white/50 hover:text-[#3DF604] hover:pl-2 transition-all duration-300" data-index="8" onmouseenter="updateProject(8)">Pulse Width</li>
<li className="cursor-pointer text-white/50 hover:text-[#3DF604] hover:pl-2 transition-all duration-300" data-index="9" onmouseenter="updateProject(9)">Hertzian Space</li>
</ul>
</div>

<div className="hidden md:flex w-2/3 h-full bg-[#0A0A0A] relative flex-col justify-center items-center p-12">
<div className="relative w-full h-full flex flex-col items-center justify-center transition-opacity duration-500 opacity-100" id="project-display">
<img className="max-h-[70vh] w-auto object-contain shadow-2xl mb-8 rounded-sm" id="project-image" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="w-full max-w-2xl text-left">
<div className="flex items-baseline justify-between border-b border-white/10 pb-4 mb-4">
<h2 className="font-['Unbounded'] text-4xl uppercase font-bold text-white" id="project-title">Neon Genesis</h2>
<span className="font-mono text-[#3DF604]" id="project-year">2023</span>
</div>
<p className="text-sm text-gray-400 font-mono leading-relaxed" id="project-desc">
                            A fully immersive runway experience for Tokyo Fashion Week, utilizing reactive LED arrays and motion-tracked projection mapping.
                        </p>
<div className="mt-4 flex gap-4 text-xs font-bold uppercase tracking-wider text-gray-500">
<span id="project-client">Client: Yohji Yamamoto</span>
<span>•</span>
<span id="project-role">Role: Creative Direction</span>
</div>
</div>
</div>
</div>
</div>
</div>


<div className="hidden fixed inset-0 z-[100] bg-[#050505]/95 backdrop-blur-xl items-center justify-center p-4" id="contact-modal">
<div className="w-full max-w-2xl bg-[#0A0A0A] border border-white/10 rounded-sm relative shadow-2xl animate-fade-in">

<button className="absolute top-4 right-4 text-gray-400 hover:text-[#3DF604] transition-colors" onclick="toggleModal('contact-modal')">
<i className="w-8 h-8" data-lucide="x-circle"></i>
</button>
<div className="p-8 md:p-12">
<div className="mb-8">
<span className="text-[#3DF604] text-xs font-mono mb-2 block uppercase">About / Contact</span>
<h2 className="font-['Unbounded'] text-3xl md:text-4xl font-bold uppercase">Get In Touch</h2>
</div>
<div className="mb-8 text-sm text-gray-400 font-mono border-l-2 border-[#3DF604] pl-4">
<p className="mb-2">YOZELEN is a multidisciplinary creative studio led by award-winning designers. We specialize in creating high-impact digital and physical experiences.</p>
<p>Based in Berlin, operating globally.</p>
</div>
<form className="space-y-6" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs uppercase text-gray-500">Name / Org</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 focus:border-[#3DF604] outline-none font-mono text-sm transition-colors" placeholder="Enter identification" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase text-gray-500">Email</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 focus:border-[#3DF604] outline-none font-mono text-sm transition-colors" placeholder="contact@domain.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase text-gray-500">Project Type</label>
<div className="flex flex-wrap gap-2 pt-2">
<button className="text-xs border border-white/20 px-3 py-1 rounded-full hover:bg-white hover:text-black transition-colors" type="button">Event Production</button>
<button className="text-xs border border-white/20 px-3 py-1 rounded-full hover:bg-white hover:text-black transition-colors" type="button">Installation</button>
<button className="text-xs border border-white/20 px-3 py-1 rounded-full hover:bg-white hover:text-black transition-colors" type="button">Visuals</button>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase text-gray-500">Brief</label>
<textarea className="w-full bg-transparent border-b border-white/20 py-2 focus:border-[#3DF604] outline-none font-mono text-sm transition-colors resize-none" placeholder="Describe your vision..." rows="4"></textarea>
</div>
<div className="pt-4 flex justify-between items-center">
<span className="text-[10px] text-gray-600 max-w-[200px]">By submitting, you agree to enter our digital ecosystem.</span>
<button className="bg-[#3DF604] text-black font-['Unbounded'] font-bold text-sm px-8 py-3 rounded-full hover:bg-white transition-colors flex items-center gap-2">
                            TRANSMIT <i className="w-4 h-4" data-lucide="send"></i>
</button>
</div>
</form>
</div>
</div>
</div>



    </>
  );
}
