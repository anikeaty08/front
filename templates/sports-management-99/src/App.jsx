import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Oswald', 'sans-serif'],
},
colors: {
sports: {
blue: '#0055FF',
dark: '#050505',
card: '#0A0A0A',
}
},
letterSpacing: {
tighter: '-0.04em',
}
}
}
}



        // Mobile Menu Logic
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('translate-x-full');
        }

        // Talent Filtering Logic
        function filterTalents(category) {
            const cards = document.querySelectorAll('.talent-card');
            const buttons = document.querySelectorAll('.filter-btn');

            // Update buttons
            buttons.forEach(btn => {
                if (btn.innerText.toLowerCase().includes(category) || (category === 'all' && btn.innerText.includes('All'))) {
                    btn.classList.remove('text-neutral-400', 'border-white/20');
                    btn.classList.add('bg-white', 'text-black', 'border-white');
                } else {
                    btn.classList.add('text-neutral-400', 'border-white/20');
                    btn.classList.remove('bg-white', 'text-black', 'border-white');
                }
            });

            // Filter Grid
            cards.forEach(card => {
                card.style.display = 'none'; // Hide all initially
                card.classList.remove('fade-in');
                
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                    // Trigger reflow
                    void card.offsetWidth; 
                    card.classList.add('fade-in');
                }
            });
        }

        // Modal Logic
        function openModal(id) {
            document.getElementById('athlete-modal').classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        }

        function closeModal() {
            document.getElementById('athlete-modal').classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        // Close modal on outside click
        document.getElementById('athlete-modal').addEventListener('click', function(e) {
            if (e.target === this || e.target.parentElement === this) {
                closeModal();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<svg className="text-white group-hover:text-sports-blue transition-colors duration-300" fill="none" height="32" viewbox="0 0 100 100" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M20 20 H50 V40 H35 V60 H50 V80 H20 V20 Z" fill="currentColor"></path>
<path d="M55 20 H80 V80 H55 V60 H70 V40 H55 V20 Z" fill="currentColor"></path>
</svg>
<div className="flex flex-col leading-none font-display font-bold tracking-tight uppercase">
<span className="text-lg">All In</span>
<span className="text-lg text-neutral-400">Sports Group</span>
</div>
</a>

<nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#talents">Talents</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#achievements">Achievements</a>
<a className="hover:text-white transition-colors" href="#team">Team</a>
<a className="hover:text-white transition-colors" href="#partners">Partners</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-6">
<div className="hidden sm:flex items-center gap-2 text-xs font-medium border border-white/10 rounded-full px-1 py-1">
<button className="px-3 py-1 rounded-full bg-white/10 text-white">EN</button>
<button className="px-3 py-1 rounded-full text-neutral-500 hover:text-white transition-colors">ES</button>
</div>
<button className="lg:hidden text-white hover:text-sports-blue transition-colors flex items-center" onclick="toggleMobileMenu()">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 transform translate-x-full transition-transform duration-500 flex flex-col justify-center items-center lg:hidden" id="mobile-menu">
<button className="absolute top-6 right-6 text-neutral-400 hover:text-white" onclick="toggleMobileMenu()">
<iconify-icon height="32" icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
<nav className="flex flex-col gap-6 text-center text-xl font-display uppercase tracking-wide">
<a className="hover:text-sports-blue" href="#about" onclick="toggleMobileMenu()">About</a>
<a className="hover:text-sports-blue" href="#talents" onclick="toggleMobileMenu()">Talents</a>
<a className="hover:text-sports-blue" href="#services" onclick="toggleMobileMenu()">Services</a>
<a className="hover:text-sports-blue" href="#achievements" onclick="toggleMobileMenu()">Achievements</a>
<a className="hover:text-sports-blue" href="#team" onclick="toggleMobileMenu()">Team</a>
<a className="hover:text-sports-blue" href="#contact" onclick="toggleMobileMenu()">Contact</a>
</nav>
</div>
</header>

<section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">

<div className="absolute inset-0 z-0">

<img alt="Stadium Athlete" className="w-full h-full object-cover object-[70%_center]" src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&amp;w=2568&amp;auto=format&amp;fit=crop"/>


<div className="absolute inset-0 bg-gradient-to-r from-sports-dark via-black/75 to-transparent"></div>

<div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-sports-dark to-transparent"></div>
</div>

<div className="relative z-10 container mx-auto px-6 grid grid-cols-12 h-full items-center">
<div className="col-span-12 lg:col-span-7 flex flex-col justify-center items-start text-left pt-20">
<div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-sports-blue animate-pulse"></span>
<span className="text-xs font-medium uppercase tracking-widest text-neutral-300">Global Representation</span>
</div>
<h1 className="font-display font-bold text-7xl md:text-8xl lg:text-9xl tracking-tighter uppercase text-white mb-8 leading-[0.9]">
                    The Future<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">Is Now</span>
</h1>
<p className="max-w-xl text-neutral-300 text-lg md:text-xl font-light mb-12 leading-relaxed">
                    Redefining sports management through global expertise, strategic innovation, and elite representation for the modern athlete.
                </p>
<div className="flex flex-col sm:flex-row items-start gap-6">
<a className="inline-flex items-center gap-3 bg-sports-blue hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 group" href="#talents">
                        Explore Our Talent
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium text-white border border-white/20 hover:bg-white/5 transition-all duration-300" href="#contact">
                        Contact Us
                    </a>
</div>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-neutral-500">
<iconify-icon height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</div>
</section>

<section className="py-24 md:py-32 bg-sports-dark relative border-b border-white/5" id="about">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-sports-blue font-display font-medium tracking-widest text-sm uppercase mb-4 block">About AIS Group</span>
<h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-8 text-white">
                    360º ADVISORY FOR<br/>ELITE PERFORMANCE
                </h2>
<div className="h-1 w-20 bg-sports-blue mb-8"></div>
</div>
<div className="space-y-6 text-neutral-400 font-light text-lg leading-relaxed">
<p>
                    Founded in 2020 with headquarters in Madrid and Barcelona, <span className="text-white font-medium">AIS Group</span> is a firm focused on global sports management that has an extensive experience in the sport, financial and legal industries, allowing us to provide 360º advisory to our clients.
                </p>
<p>
                    Our objective is to enhance the talent of our athletes, taking care of all the aspects that surround them and enabling them to focus on reaching their maximum level of performance.
                </p>
<p>
                    We not only venture into professionals with elite sports level, but we also seek that their human quality is aligned with the values and culture that define our firm.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-black relative" id="talents">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div>
<span className="text-sports-blue font-display font-medium tracking-widest text-sm uppercase mb-2 block">Our Roster</span>
<h2 className="font-display font-semibold text-5xl tracking-tighter text-white">TALENTS</h2>
</div>

<div className="flex flex-wrap gap-2 md:gap-4">
<button className="filter-btn active text-sm px-4 py-2 rounded-full border border-white/20 bg-white text-black hover:bg-white transition-colors" onclick="filterTalents('all')">All Talents</button>
<button className="filter-btn text-sm px-4 py-2 rounded-full border border-white/20 text-neutral-400 hover:text-white hover:border-white transition-colors" onclick="filterTalents('golf')">Golf</button>
<button className="filter-btn text-sm px-4 py-2 rounded-full border border-white/20 text-neutral-400 hover:text-white hover:border-white transition-colors" onclick="filterTalents('padel')">Padel</button>
<button className="filter-btn text-sm px-4 py-2 rounded-full border border-white/20 text-neutral-400 hover:text-white hover:border-white transition-colors" onclick="filterTalents('tennis')">Tennis</button>
<button className="filter-btn text-sm px-4 py-2 rounded-full border border-white/20 text-neutral-400 hover:text-white hover:border-white transition-colors" onclick="filterTalents('football')">Football</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="talents-grid">

<div className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-neutral-900 cursor-pointer talent-card" data-category="football" onclick="openModal('alex')">
<img alt="Athlete" className="w-full h-full object-cover transition-transform duration-700 zoom-image opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end">
<div>
<span className="text-sports-blue text-xs uppercase tracking-widest font-medium mb-1 block">Football</span>
<h3 className="font-display font-bold text-3xl uppercase tracking-tight text-white mb-1">Alex Mendez</h3>
<p className="text-neutral-400 text-sm">Real Madrid CF • Midfielder</p>
</div>
<div className="w-10 h-10 rounded-full bg-sports-blue flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
<iconify-icon className="text-white" height="20" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-neutral-900 cursor-pointer talent-card" data-category="golf">
<img alt="Athlete" className="w-full h-full object-cover transition-transform duration-700 zoom-image opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<span className="text-sports-blue text-xs uppercase tracking-widest font-medium mb-1 block">Golf</span>
<h3 className="font-display font-bold text-3xl uppercase tracking-tight text-white mb-1">Sarah Johnson</h3>
<p className="text-neutral-400 text-sm">LPGA Tour • Top 10 Ranking</p>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-neutral-900 cursor-pointer talent-card" data-category="tennis">
<img alt="Athlete" className="w-full h-full object-cover transition-transform duration-700 zoom-image opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<span className="text-sports-blue text-xs uppercase tracking-widest font-medium mb-1 block">Tennis</span>
<h3 className="font-display font-bold text-3xl uppercase tracking-tight text-white mb-1">Rafael Ortiz</h3>
<p className="text-neutral-400 text-sm">ATP Tour • Grand Slam Winner</p>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-neutral-900 cursor-pointer talent-card" data-category="padel">
<img alt="Athlete" className="w-full h-full object-cover transition-transform duration-700 zoom-image opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<span className="text-sports-blue text-xs uppercase tracking-widest font-medium mb-1 block">Padel</span>
<h3 className="font-display font-bold text-3xl uppercase tracking-tight text-white mb-1">Lucia Belasteguín</h3>
<p className="text-neutral-400 text-sm">World Padel Tour</p>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-neutral-900 cursor-pointer talent-card" data-category="football">
<img alt="Athlete" className="w-full h-full object-cover transition-transform duration-700 zoom-image opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<span className="text-sports-blue text-xs uppercase tracking-widest font-medium mb-1 block">Football</span>
<h3 className="font-display font-bold text-3xl uppercase tracking-tight text-white mb-1">Marcus Thorne</h3>
<p className="text-neutral-400 text-sm">Premier League • Forward</p>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-neutral-900 cursor-pointer talent-card" data-category="golf">
<img alt="Athlete" className="w-full h-full object-cover transition-transform duration-700 zoom-image opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<span className="text-sports-blue text-xs uppercase tracking-widest font-medium mb-1 block">Golf</span>
<h3 className="font-display font-bold text-3xl uppercase tracking-tight text-white mb-1">David Kim</h3>
<p className="text-neutral-400 text-sm">PGA Tour • Rookie of the Year</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-sports-card border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<span className="text-sports-blue font-display font-medium tracking-widest text-sm uppercase mb-2 block">Our Expertise</span>
<h2 className="font-display font-semibold text-5xl tracking-tighter text-white">SERVICES</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 border border-white/5 bg-neutral-950 hover:border-sports-blue/50 transition-colors duration-300">
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-sports-blue mb-6 group-hover:bg-sports-blue group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:case-linear" width="24"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-2xl uppercase mb-3">M&amp;A</h3>
<p className="text-neutral-400 text-sm font-light leading-relaxed">Strategic mergers and acquisitions in the sports industry, maximizing value and growth opportunities.</p>
</div>

<div className="group p-8 border border-white/5 bg-neutral-950 hover:border-sports-blue/50 transition-colors duration-300">
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-sports-blue mb-6 group-hover:bg-sports-blue group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-2xl uppercase mb-3">Consulting</h3>
<p className="text-neutral-400 text-sm font-light leading-relaxed">Expert advisory services for clubs, organizations, and athletes to optimize operations and strategy.</p>
</div>

<div className="group p-8 border border-white/5 bg-neutral-950 hover:border-sports-blue/50 transition-colors duration-300">
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-sports-blue mb-6 group-hover:bg-sports-blue group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:hand-money-linear" width="24"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-2xl uppercase mb-3">Debt Capital</h3>
<p className="text-neutral-400 text-sm font-light leading-relaxed">Structuring financial solutions to support career development and institutional expansion.</p>
</div>

<div className="group p-8 border border-white/5 bg-neutral-950 hover:border-sports-blue/50 transition-colors duration-300">
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-sports-blue mb-6 group-hover:bg-sports-blue group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:document-add-linear" width="24"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-2xl uppercase mb-3">Contract Negotiation</h3>
<p className="text-neutral-400 text-sm font-light leading-relaxed">Securing the best possible terms for our clients through rigorous and experienced negotiation.</p>
</div>

<div className="group p-8 border border-white/5 bg-neutral-950 hover:border-sports-blue/50 transition-colors duration-300">
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-sports-blue mb-6 group-hover:bg-sports-blue group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:hand-shake-linear" width="24"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-2xl uppercase mb-3">Sponsorships</h3>
<p className="text-neutral-400 text-sm font-light leading-relaxed">Connecting athletes with premium global brands to build lasting and profitable partnerships.</p>
</div>

<div className="group p-8 border border-white/5 bg-neutral-950 hover:border-sports-blue/50 transition-colors duration-300">
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-sports-blue mb-6 group-hover:bg-sports-blue group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-2xl uppercase mb-3">Career Planning</h3>
<p className="text-neutral-400 text-sm font-light leading-relaxed">Long-term strategic roadmap development for life during and after professional sports.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-sports-dark relative overflow-hidden" id="achievements">
<div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/5 -skew-x-12 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-display font-semibold text-5xl tracking-tighter text-white mb-6">
                        LEGACY OF<br/>SUCCESS
                    </h2>
<p className="text-neutral-400 font-light mb-8">
                        We measure our success by the milestones our athletes achieve. From record-breaking contracts to championship titles, AIS Group is the engine behind the victory.
                    </p>
<div className="flex gap-8 border-t border-white/10 pt-8">
<div>
<span className="block text-4xl font-display font-bold text-white mb-1">€250M+</span>
<span className="text-xs uppercase tracking-widest text-neutral-500">Contract Value</span>
</div>
<div>
<span className="block text-4xl font-display font-bold text-white mb-1">50+</span>
<span className="text-xs uppercase tracking-widest text-neutral-500">Global Athletes</span>
</div>
<div>
<span className="block text-4xl font-display font-bold text-white mb-1">12</span>
<span className="text-xs uppercase tracking-widest text-neutral-500">Titles Won</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 gap-4">
<div className="bg-neutral-900/50 p-6 border border-white/5 rounded-sm">
<div className="flex items-center gap-4 mb-3">
<div className="bg-sports-blue/20 p-2 rounded-full text-sports-blue">
<iconify-icon height="24" icon="solar:cup-star-linear" width="24"></iconify-icon>
</div>
<h4 className="font-display font-medium text-lg uppercase">Global Expansion</h4>
</div>
<p className="text-sm text-neutral-400">Successfully negotiated international transfers for 3 key football talents in 2023.</p>
</div>
<div className="bg-neutral-900/50 p-6 border border-white/5 rounded-sm">
<div className="flex items-center gap-4 mb-3">
<div className="bg-sports-blue/20 p-2 rounded-full text-sports-blue">
<iconify-icon height="24" icon="solar:star-linear" width="24"></iconify-icon>
</div>
<h4 className="font-display font-medium text-lg uppercase">Brand Deals</h4>
</div>
<p className="text-sm text-neutral-400">Secured multi-year sponsorship with top-tier sportswear brand for rising tennis star.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5" id="team">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-sports-blue font-display font-medium tracking-widest text-sm uppercase mb-2 block">Management</span>
<h2 className="font-display font-semibold text-5xl tracking-tighter text-white">OUR TEAM</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group">
<div className="aspect-[4/5] overflow-hidden bg-neutral-900 mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
<img alt="CEO" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-display font-medium text-xl uppercase mb-1">Carlos Ruiz</h3>
<p className="text-neutral-500 text-sm">Founder &amp; CEO</p>
</div>

<div className="group">
<div className="aspect-[4/5] overflow-hidden bg-neutral-900 mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
<img alt="Director" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-display font-medium text-xl uppercase mb-1">Elena Foster</h3>
<p className="text-neutral-500 text-sm">Head of Legal</p>
</div>

<div className="group">
<div className="aspect-[4/5] overflow-hidden bg-neutral-900 mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
<img alt="Agent" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-display font-medium text-xl uppercase mb-1">James Wright</h3>
<p className="text-neutral-500 text-sm">Senior Agent - Football</p>
</div>

<div className="group">
<div className="aspect-[4/5] overflow-hidden bg-neutral-900 mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
<img alt="Agent" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-display font-medium text-xl uppercase mb-1">Sofia Rossi</h3>
<p className="text-neutral-500 text-sm">Senior Agent - Tennis</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-sports-dark border-y border-white/5" id="partners">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-neutral-600 text-xs uppercase tracking-widest mb-12">Trusted By Global Brands</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-12 md:gap-x-24 opacity-40 hover:opacity-100 transition-opacity duration-500">

<iconify-icon className="text-white hover:text-white hover:scale-110 transition-all duration-300" icon="simple-icons:nike" width="40"></iconify-icon>

<iconify-icon className="text-white hover:text-white hover:scale-110 transition-all duration-300" icon="simple-icons:adidas" width="40"></iconify-icon>

<iconify-icon className="text-white hover:text-white hover:scale-110 transition-all duration-300" icon="simple-icons:rolex" width="40"></iconify-icon>

<iconify-icon className="text-white hover:text-white hover:scale-110 transition-all duration-300" icon="simple-icons:redbull" width="40"></iconify-icon>

<iconify-icon className="text-white hover:text-white hover:scale-110 transition-all duration-300" icon="simple-icons:underarmour" width="40"></iconify-icon>

<iconify-icon className="text-white hover:text-white hover:scale-110 transition-all duration-300" icon="simple-icons:puma" width="40"></iconify-icon>
</div>
</div>
</section>

<section className="py-24 bg-black relative" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div className="space-y-10">
<div>
<h2 className="font-display font-semibold text-5xl tracking-tighter text-white mb-6">
                            GET IN TOUCH
                        </h2>
<p className="text-neutral-400 font-light text-lg">
                            Ready to take your career to the next level? Contact AIS Group today.
                        </p>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="text-sports-blue mt-1">
<iconify-icon height="24" icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium uppercase text-sm mb-1">Headquarters</h4>
<p className="text-neutral-400 text-sm">Paseo de la Castellana 55<br/>28046 Madrid, Spain</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="text-sports-blue mt-1">
<iconify-icon height="24" icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium uppercase text-sm mb-1">Email</h4>
<p className="text-neutral-400 text-sm">contact@aisgroup.com<br/>representation@aisgroup.com</p>
</div>
</div>
</div>
</div>

<div className="bg-neutral-900/50 p-8 border border-white/5 rounded-sm">
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs uppercase text-neutral-500 font-medium tracking-wide">First Name</label>
<input className="w-full bg-black border border-white/10 p-3 text-white focus:border-sports-blue focus:outline-none transition-colors placeholder:text-neutral-700" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase text-neutral-500 font-medium tracking-wide">Last Name</label>
<input className="w-full bg-black border border-white/10 p-3 text-white focus:border-sports-blue focus:outline-none transition-colors placeholder:text-neutral-700" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase text-neutral-500 font-medium tracking-wide">Email</label>
<input className="w-full bg-black border border-white/10 p-3 text-white focus:border-sports-blue focus:outline-none transition-colors placeholder:text-neutral-700" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase text-neutral-500 font-medium tracking-wide">Subject</label>
<select className="w-full bg-black border border-white/10 p-3 text-white focus:border-sports-blue focus:outline-none transition-colors">
<option>Athlete Representation</option>
<option>Sponsorship Opportunity</option>
<option>General Inquiry</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs uppercase text-neutral-500 font-medium tracking-wide">Message</label>
<textarea className="w-full bg-black border border-white/10 p-3 text-white h-32 focus:border-sports-blue focus:outline-none transition-colors placeholder:text-neutral-700" placeholder="Tell us about your goals..."></textarea>
</div>
<button className="w-full bg-sports-blue hover:bg-blue-700 text-white font-medium uppercase tracking-wide py-4 transition-colors">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-black py-12 border-t border-white/5 text-center md:text-left">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="font-display font-bold tracking-tight uppercase text-xl text-white">AIS Group</span>
<span className="text-neutral-600">|</span>
<span className="text-neutral-500 text-sm">Est. 2020</span>
</div>
<div className="flex gap-6 text-sm text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
</div>
<div className="text-neutral-600 text-xs">
                © 2024 All In Sports Group. All rights reserved.
            </div>
</div>
</footer>

<div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm hidden overflow-y-auto" id="athlete-modal">
<div className="min-h-screen px-4 text-center">
<span aria-hidden="true" className="inline-block h-screen align-middle">​</span>
<div className="inline-block w-full max-w-4xl p-0 my-8 overflow-hidden text-left align-middle transition-all transform bg-neutral-900 shadow-2xl rounded-sm border border-white/10 relative">

<button className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-sports-blue rounded-full flex items-center justify-center text-white transition-colors" onclick="closeModal()">
<iconify-icon height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="grid md:grid-cols-2">

<div className="relative h-96 md:h-full">
<img className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent md:bg-gradient-to-r"></div>
</div>

<div className="p-8 md:p-12">
<span className="text-sports-blue text-xs uppercase tracking-widest font-medium mb-2 block">Football</span>
<h2 className="font-display font-bold text-5xl uppercase tracking-tighter text-white mb-4">Alex Mendez</h2>
<p className="text-xl text-neutral-300 font-light mb-8">Midfielder • Real Madrid CF</p>
<div className="space-y-6 mb-10">
<div>
<h4 className="text-xs uppercase text-neutral-500 tracking-wide mb-1">Biography</h4>
<p className="text-neutral-400 text-sm leading-relaxed">
                                    Rising star in European football known for exceptional vision and playmaking ability. Debuted at 18 and has since become a staple in the starting XI.
                                </p>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<h4 className="text-xs uppercase text-neutral-500 tracking-wide mb-1">Matches</h4>
<p className="text-white font-display text-2xl">142</p>
</div>
<div>
<h4 className="text-xs uppercase text-neutral-500 tracking-wide mb-1">Goals/Assists</h4>
<p className="text-white font-display text-2xl">34 / 28</p>
</div>
</div>
<div>
<h4 className="text-xs uppercase text-neutral-500 tracking-wide mb-1">Sponsors</h4>
<div className="flex gap-4 text-white font-display uppercase text-sm">
<span>Nike</span>
<span className="text-neutral-600">•</span>
<span>Audi</span>
<span className="text-neutral-600">•</span>
<span>Pepsi</span>
</div>
</div>
</div>
<button className="w-full border border-white/20 hover:bg-white hover:text-black text-white font-medium uppercase tracking-wide py-3 transition-colors">
                            Contact for Representation
                        </button>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
