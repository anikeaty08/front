import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // GSAP Scroll Animations
      gsap.registerPlugin(ScrollTrigger);

      // Batch reveal animations
      gsap.utils.toArray('.gs-reveal-up').forEach(function(elem) {
          gsap.fromTo(elem,
              { y: 30, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, duration: 0.8, ease: "power2.out",
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
              }
          );
      });

      // Hero load animation
      gsap.fromTo('.gs-reveal',
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2 }
      );

      // 3D Parallax Mouse Effect for Hero Scene
      const scene = document.getElementById('hero-3d-scene');
      const wrapper = document.getElementById('hero-3d-wrapper');

      if (scene && wrapper) {
          scene.addEventListener('mousemove', (e) => {
              const rect = scene.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              const centerX = rect.width / 2;
              const centerY = rect.height / 2;

              const rotateX = ((y - centerY) / centerY) * -10; // max 10 deg
              const rotateY = ((x - centerX) / centerX) * 10;

              wrapper.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          });

          scene.addEventListener('mouseleave', () => {
              wrapper.style.transform = `rotateX(0deg) rotateY(0deg)`;
              wrapper.style.transition = 'transform 0.5s ease-out';
          });

          scene.addEventListener('mouseenter', () => {
              wrapper.style.transition = 'none';
          });
      }

      // Synergy UI Toggle Logic
      const toggle = document.getElementById('synergy-toggle');
      const ceoCard = document.getElementById('ceo-card');
      const willCard = document.getElementById('will-card');

      if(toggle) {
          toggle.addEventListener('change', (e) => {
              if(e.target.checked) {
                  ceoCard.classList.remove('opacity-60');
                  ceoCard.classList.add('opacity-100', 'ring-2', 'ring-navy');
                  willCard.classList.add('opacity-60');
                  willCard.classList.remove('ring-2', 'ring-navy');
              } else {
                  ceoCard.classList.add('opacity-60');
                  ceoCard.classList.remove('opacity-100', 'ring-2', 'ring-navy');
                  willCard.classList.remove('opacity-60');
              }
          });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-slate-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-display font-medium tracking-tight text-xl text-navy">
            WM.
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-slate-500 hover:text-navy transition-colors" href="#overview">
            Overview
          </a>
<a className="text-slate-500 hover:text-navy transition-colors" href="#pillars">
            Strategy
          </a>
<a className="text-slate-500 hover:text-navy transition-colors" href="#synergy">
            Synergy
          </a>
<a className="text-slate-500 hover:text-navy transition-colors" href="#metrics">
            Metrics
          </a>
</div>
<div>
<a className="inline-flex items-center justify-center h-9 px-4 rounded-full bg-navy text-white text-xs font-medium hover:bg-navy-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2" href="#contact">
            Contact Will
          </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-grid-pattern">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl gs-reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white shadow-sm mb-6">
<span className="flex size-2 rounded-full bg-gold animate-pulse"></span>
<span className="text-xs font-normal text-slate-600">
                Paradise Breaks Vegas Flagship
              </span>
</div>
<h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-navy leading-tight mb-6 text-balance">
              Will Meldman
              <span className="block text-slate-400 font-normal mt-2">
                Co-Investor &amp; CMO
              </span>
</h1>
<p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl text-balance">
              Strategic engine driving the hyper-growth, brand prominence, and
              operational synergy of a premier Las Vegas trading card
              enterprise.
            </p>
<div className="flex flex-wrap items-center gap-4">
<a className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-navy text-white text-sm font-normal hover:bg-navy-muted transition-colors shadow-lg shadow-navy/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2" href="#overview">
                Read Executive Brief
              </a>
<a className="inline-flex items-center justify-center h-11 px-6 rounded-full border border-slate-200 bg-white text-navy text-sm font-normal hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-200 focus-visible:ring-offset-2" href="#contact">
                Contact Will
              </a>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-[4/3] perspective-1000 gs-reveal pointer-events-none hidden sm:block" id="hero-3d-scene">
<div className="absolute inset-0 flex items-center justify-center preserve-3d floating" id="hero-3d-wrapper">
<div className="absolute w-48 aspect-[2.5/3.5] rounded-xl shadow-2xl overflow-hidden border border-slate-200 transform -rotate-12 -translate-x-24 -translate-z-12 bg-white transition-transform duration-700">
<img alt="Pokemon Card" className="w-full h-full object-cover opacity-95" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 mix-blend-overlay"></div>
<div className="absolute inset-0 holo-overlay"></div>
</div>
<div className="absolute w-48 aspect-[2.5/3.5] rounded-xl shadow-2xl overflow-hidden border border-slate-200 transform rotate-12 translate-x-24 -translate-z-6 bg-white transition-transform duration-700">
<img alt="Sports Card" className="w-full h-full object-cover opacity-95" src="https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gold/20 mix-blend-color"></div>
<div className="absolute inset-0 holo-overlay"></div>
</div>
<div className="absolute w-56 aspect-[2.5/3.5] rounded-xl shadow-[0_20px_40px_-15px_rgba(15,23,42,0.3)] overflow-hidden border border-slate-100 transform translate-z-12 bg-white z-10 transition-transform duration-700">
<img alt="Media Setup" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 holo-overlay"></div>
<div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-navy to-transparent">
<p className="text-white font-display font-medium text-xs tracking-tight">
                    PARADISE BREAKS
                  </p>
<p className="text-white/80 text-[10px] uppercase tracking-wider mt-1">
                    Vegas Edition
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-slate-50 border-y border-slate-200/60 relative" id="overview">
<div className="max-w-4xl mx-auto px-6 text-center gs-reveal-up">
<h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-navy mb-8 text-balance">
          Executive Summary
        </h2>
<p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">
          As Co-Investor and CMO, Will Meldman is the strategic engine driving
          the hyper-growth, brand prominence, and operational synergy of a
          premier Las Vegas trading card enterprise. Partnering with the
          established founder of Paradise Breaks, Will is responsible for
          scaling a massive digital breaking operation, managing a
          state-of-the-art physical retail space, securing vital product
          allocations, and acting as the essential bridge between investor
          capital and ground-level execution.
        </p>
<p className="text-base md:text-lg text-slate-600 leading-relaxed">
          Uniquely, Will infuses the brand with dynamic, immersive Vegas-level
          entertainment while maintaining a highly welcoming, family-friendly
          environment—creating a premier destination for everyone from young
          collectors opening their first pack to serious investors hunting for
          elusive grail cards.
        </p>
</div>
</section>

<section className="py-24 bg-white" id="pillars">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 gs-reveal-up text-center">
<h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-navy">
            Core Responsibilities &amp; Pillars
          </h2>
<p className="mt-4 text-sm text-slate-500 max-w-2xl mx-auto">
            The architectural foundation driving expansion, visibility, and
            operational integrity.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-gold/50 transition-colors duration-300 gs-reveal-up shadow-sm">
<div className="size-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-gold">
<iconify-icon className="text-2xl" icon="lucide:store"></iconify-icon>
</div>
<h3 className="font-display text-xl font-medium tracking-tight text-navy mb-4">
              Elevated Experiential Marketing &amp; Dual-Target Retail
            </h3>
<p className="text-sm text-slate-600 leading-relaxed mb-4">
              Will transforms the physical Las Vegas storefront into a dynamic,
              high-energy destination that caters simultaneously to top-tier
              collectors and everyday families.
            </p>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-start gap-2">
<iconify-icon className="text-gold mt-0.5 min-w-[16px]" icon="lucide:check-circle-2"></iconify-icon>
<span>
<strong>Family-First &amp; Collector-Focused:</strong>
                  Balance affordable, exciting entry-level products and weekend
                  trade days for kids, alongside tailored, premium service for
                  major collectors and celebrity investors.
                </span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-gold mt-0.5 min-w-[16px]" icon="lucide:check-circle-2"></iconify-icon>
<span>
<strong>Vegas-Caliber Tournaments:</strong>
                  Design and execute thrilling TCG and sports card tournaments
                  featuring unforgettable prize pools, alongside
                  beginner-friendly local events.
                </span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-gold mt-0.5 min-w-[16px]" icon="lucide:check-circle-2"></iconify-icon>
<span>
<strong>Celebrity &amp; Athlete Integration:</strong>
                  Leverage networks to secure A-list celebrities, athletes, and
                  influencers for exclusive in-store meet-and-greets and release
                  parties.
                </span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-gold mt-0.5 min-w-[16px]" icon="lucide:check-circle-2"></iconify-icon>
<span>
<strong>Dynamic, Immersive Branding:</strong>
                  Execute unique, high-energy marketing campaigns like exclusive
                  break lounges, highly produced premium box breaks, and
                  red-carpet product launch nights.
                </span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-gold mt-0.5 min-w-[16px]" icon="lucide:check-circle-2"></iconify-icon>
<span>
<strong>Retail Management Assist:</strong>
                  Direct the Retail General Manager to ensure the floor staff
                  delivers an exceptional customer experience for every guest.
                </span>
</li>
</ul>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-gold/50 transition-colors duration-300 gs-reveal-up shadow-sm">
<div className="size-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-gold">
<iconify-icon className="text-2xl" icon="lucide:radio"></iconify-icon>
</div>
<h3 className="font-display text-xl font-medium tracking-tight text-navy mb-4">
              Influencer Strategy &amp; Digital Media Empire
            </h3>
<p className="text-sm text-slate-600 leading-relaxed mb-4">
              Commands the digital footprint, ensuring the online breaking
              operation (Sports, Pokémon, One Piece, Magic: The Gathering, etc.)
              is the most entertaining and lucrative broadcast in the industry.
            </p>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-start gap-2">
<iconify-icon className="text-gold mt-0.5 min-w-[16px]" icon="lucide:check-circle-2"></iconify-icon>
<span>
<strong>Target Acquisition &amp; Partnership List:</strong>
                  Drives the outreach, negotiation, and partnership strategy to
                  bring the world's biggest celebrity collectors onto our
                  streams.
                </span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-gold mt-0.5 min-w-[16px]" icon="lucide:check-circle-2"></iconify-icon>
<span>
<strong>Talent Acquisition &amp; Management:</strong>
                  Scout, interview, and hire high-energy, charismatic in-house
                  breaking talent with deep product knowledge.
                </span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-gold mt-0.5 min-w-[16px]" icon="lucide:check-circle-2"></iconify-icon>
<span>
<strong>Broadcast Excellence:</strong>
                  Oversee studio production value, ensuring lighting, sound,
                  graphics, and branding feel like a premier broadcast network.
                </span>
</li>
</ul>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-gold/50 transition-colors duration-300 gs-reveal-up shadow-sm">
<div className="size-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-gold">
<iconify-icon className="text-2xl" icon="lucide:users"></iconify-icon>
</div>
<h3 className="font-display text-xl font-medium tracking-tight text-navy mb-4">
              Internal Culture &amp; Investor Liaison
            </h3>
<p className="text-sm text-slate-600 leading-relaxed mb-4">
              Serves as the crucial connective tissue between the financial
              backers and the daily operators, ensuring absolute alignment.
            </p>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-start gap-2">
<iconify-icon className="text-gold mt-0.5 min-w-[16px]" icon="lucide:check-circle-2"></iconify-icon>
<span>
<strong>The Bridge:</strong>
                  Act as the primary liaison between the investment group and
                  the company's workforce.
                </span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-gold mt-0.5 min-w-[16px]" icon="lucide:check-circle-2"></iconify-icon>
<span>
<strong>Expectation Management:</strong>
                  Translate the board's ROI goals into actionable, realistic
                  KPIs for the staff and relay feedback.
                </span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-gold mt-0.5 min-w-[16px]" icon="lucide:check-circle-2"></iconify-icon>
<span>
<strong>Culture Building:</strong>
                  Foster a healthy, high-energy, and inclusive work environment
                  where staff feel supported, valued, and motivated.
                </span>
</li>
</ul>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-gold/50 transition-colors duration-300 gs-reveal-up shadow-sm">
<div className="size-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-gold">
<iconify-icon className="text-2xl" icon="lucide:pie-chart"></iconify-icon>
</div>
<h3 className="font-display text-xl font-medium tracking-tight text-navy mb-4">
              Strategic Procurement &amp; Capital Allocation
            </h3>
<p className="text-sm text-slate-600 leading-relaxed mb-4">
              Leverages his financial acumen and investment capital to secure
              the assets that fuel the entire business.
            </p>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-start gap-2">
<iconify-icon className="text-gold mt-0.5 min-w-[16px]" icon="lucide:check-circle-2"></iconify-icon>
<span>
<strong>Product Allocation:</strong>
                  Work alongside the CEO/Partner to leverage investment capital
                  and relationships, securing top-tier, direct product
                  allocations.
                </span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-gold mt-0.5 min-w-[16px]" icon="lucide:check-circle-2"></iconify-icon>
<span>
<strong>Financial Alignment:</strong>
                  Manage high-level P&amp;L related to marketing spend,
                  influencer acquisition costs, tournament funding, and general
                  burn rate.
                </span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-gold mt-0.5 min-w-[16px]" icon="lucide:check-circle-2"></iconify-icon>
<span>
<strong>Scaling &amp; Growth:</strong>
                  Identify future growth avenues, such as exclusive brand
                  collaborations, proprietary software, or a Las Vegas card
                  convention.
                </span>
</li>
</ul>
</div>
</div>
</div>
</section>
<section className="py-12 bg-navy overflow-hidden relative border-y border-slate-800">
<div className="absolute inset-0 bg-gold/5 mix-blend-overlay pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 mb-8 text-center relative z-10">
<h3 className="text-white font-display text-lg font-medium tracking-tight">
          Target Acquisition: Top 25 Partnerships
        </h3>
</div>
<div className="flex overflow-hidden relative z-10 mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)">
<div className="animate-marquee whitespace-nowrap flex items-center gap-8 py-2">
<div className="flex gap-8 items-center">
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Logan Paul
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Post Malone
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Drake
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              GaryVee
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Steve Aoki
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Jake Paul
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              MoistCr1TiKaL
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Asmongold
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              xQc
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Ludwig
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Kevin Durant
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Snoop Dogg
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Leonhart
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              PaymoneyWubby
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Mark Wahlberg
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Giannis Antetokounmpo
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Cassius Marsh
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              DJ Skee
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Pokimane
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Mizkif
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Joe Burrow
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Zion Williamson
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Randolph
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Troydan
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              DJ Khaled
            </span>
</div>
<div className="flex gap-8 items-center">
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Logan Paul
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Post Malone
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Drake
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              GaryVee
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Steve Aoki
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Jake Paul
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              MoistCr1TiKaL
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Asmongold
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              xQc
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Ludwig
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Kevin Durant
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Snoop Dogg
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Leonhart
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              PaymoneyWubby
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Mark Wahlberg
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Giannis Antetokounmpo
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Cassius Marsh
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              DJ Skee
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Pokimane
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Mizkif
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Joe Burrow
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Zion Williamson
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Randolph
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              Troydan
            </span>
<span className="text-slate-300 font-normal px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              DJ Khaled
            </span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200/60 overflow-hidden" id="synergy">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 gs-reveal-up">
<div>
<h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-navy">
              Collaborative Leadership
            </h2>
<p className="mt-4 text-sm text-slate-500 max-w-xl">
              A balanced division of responsibilities allowing absolute focus on
              specialized verticals.
            </p>
</div>

<div className="flex items-center gap-3 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm">
<span className="text-xs font-medium text-navy">View Synergy</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-slate-200 appearance-none cursor-pointer z-10 transition-transform duration-300 ease-in-out" id="synergy-toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-slate-200 cursor-pointer transition-colors duration-300 ease-in-out" htmlFor="synergy-toggle"></label>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-8 relative gs-reveal-up" id="synergy-container">

<div className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-10 shadow-sm relative z-10 transition-all duration-500" id="will-card">
<div className="flex items-center gap-4 mb-8">
<div className="size-14 rounded-full bg-navy flex items-center justify-center text-white font-display font-medium tracking-tighter">
                WM
              </div>
<div>
<h3 className="font-display text-xl font-medium tracking-tight text-navy">
                  Will Meldman
                </h3>
<p className="text-xs font-normal text-gold uppercase tracking-wider mt-1">
                  Chief Marketing Officer
                </p>
</div>
</div>
<div className="space-y-6">
<div>
<h4 className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">
                  Direct Reports
                </h4>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-slate-400" icon="lucide:user"></iconify-icon>
                    Influencer &amp; Partnerships Manager
                  </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-slate-400" icon="lucide:video"></iconify-icon>
                    Head of Media &amp; Breaker Talent
                  </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-slate-400" icon="lucide:store"></iconify-icon>
                    Retail General Manager (Las Vegas Store)
                  </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-slate-400" icon="lucide:bar-chart-3"></iconify-icon>
                    Internal Investor Relations &amp; Reporting
                  </li>
</ul>
</div>
<div className="pt-6 border-t border-slate-100">
<h4 className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">
                  Core Focus
                </h4>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-md text-xs text-slate-600">
                    Brand
                  </span>
<span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-md text-xs text-slate-600">
                    Immersive Vegas Marketing
                  </span>
<span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-md text-xs text-slate-600">
                    Influencer/Celebrity Partnerships
                  </span>
<span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-md text-xs text-slate-600">
                    Investor Relations
                  </span>
<span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-md text-xs text-slate-600">
                    Capital Deployment
                  </span>
</div>
</div>
</div>
</div>

<div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-12 bg-white border border-slate-200 rounded-full items-center justify-center z-20 shadow-sm text-slate-400">
<iconify-icon className="text-xl" icon="lucide:arrow-left-right"></iconify-icon>
</div>

<div className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-10 shadow-sm relative z-10 opacity-60 hover:opacity-100 transition-opacity duration-500" id="ceo-card">
<div className="flex items-center gap-4 mb-8">
<div className="size-14 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 font-display font-medium tracking-tighter">
                CEO
              </div>
<div>
<h3 className="font-display text-xl font-medium tracking-tight text-navy">
                  Founder Partner
                </h3>
<p className="text-xs font-normal text-slate-500 uppercase tracking-wider mt-1">
                  Chief Executive Officer
                </p>
</div>
</div>
<div className="space-y-6">
<div>
<h4 className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">
                  Direct Operations
                </h4>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-slate-400" icon="lucide:package"></iconify-icon>
                    Logistics &amp; Fulfillment
                  </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-slate-400" icon="lucide:users"></iconify-icon>
                    Community Building
                  </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-slate-400" icon="lucide:layers"></iconify-icon>
                    TCG &amp; Breaker Expertise
                  </li>
</ul>
</div>
<div className="pt-6 border-t border-slate-100">
<h4 className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">
                  Core Focus
                </h4>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-md text-xs text-slate-600">
                    Logistics
                  </span>
<span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-md text-xs text-slate-600">
                    Fulfillment
                  </span>
<span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-md text-xs text-slate-600">
                    Community Building
                  </span>
<span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-md text-xs text-slate-600">
                    TCG/Breaker Expertise
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-navy relative overflow-hidden dark-grid-pattern" id="metrics">

<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16 gs-reveal-up text-center md:text-left">
<h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-white">
            Metrics of Success
          </h2>
<p className="mt-4 text-sm text-slate-400 max-w-xl">
            How Will holds himself accountable and drives the bottom line.
          </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
<div className="glass-dark border border-white/10 rounded-2xl p-6 hover:border-gold/30 transition-colors gs-reveal-up">
<iconify-icon className="text-3xl text-gold mb-8" icon="lucide:trending-up"></iconify-icon>
<div className="mb-2">
<h4 className="font-display text-lg font-medium text-white tracking-tight">
                Brand Prominence &amp; Foot Traffic
              </h4>
</div>
<p className="text-xs text-slate-400 leading-relaxed">
              In-store sales growth across all demographics (from families to
              major collectors), event turnout, and the successful execution of
              major tournaments.
            </p>
</div>
<div className="glass-dark border border-white/10 rounded-2xl p-6 hover:border-gold/30 transition-colors gs-reveal-up">
<iconify-icon className="text-3xl text-gold mb-8" icon="lucide:mouse-pointer-click"></iconify-icon>
<div className="mb-2">
<h4 className="font-display text-lg font-medium text-white tracking-tight">
                Digital Marketing ROI
              </h4>
</div>
<p className="text-xs text-slate-400 leading-relaxed">
              Viewership growth, new customer acquisition cost (CAC), and
              revenue generated during influencer and celebrity-led breaks.
            </p>
</div>
<div className="glass-dark border border-white/10 rounded-2xl p-6 hover:border-gold/30 transition-colors gs-reveal-up">
<iconify-icon className="text-3xl text-gold mb-8" icon="lucide:heart"></iconify-icon>
<div className="mb-2">
<h4 className="font-display text-lg font-medium text-white tracking-tight">
                Cultural Health
              </h4>
</div>
<p className="text-xs text-slate-400 leading-relaxed">
              Employee retention rate, staff morale, and seamless, transparent
              investor reporting (zero surprises for the board).
            </p>
</div>
<div className="glass-dark border border-white/10 rounded-2xl p-6 hover:border-gold/30 transition-colors gs-reveal-up">
<iconify-icon className="text-3xl text-gold mb-8" icon="lucide:percent"></iconify-icon>
<div className="mb-2">
<h4 className="font-display text-lg font-medium text-white tracking-tight">
                Procurement Margins
              </h4>
</div>
<p className="text-xs text-slate-400 leading-relaxed">
              Volume of highly anticipated product secured at direct-allocation
              prices versus secondary market prices.
            </p>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<span className="font-display font-medium tracking-tight text-2xl text-navy mb-4 block">
              WM.
            </span>
<p className="text-sm text-slate-500 max-w-sm">
              Executive leadership bridging capital investment with digital
              media execution in the global trading card market.
            </p>
</div>
<div>
<h5 className="font-semibold text-sm text-navy mb-4 uppercase tracking-wider">
              Resources
            </h5>
<ul className="space-y-3">
<li>
<a className="text-sm text-slate-500 hover:text-navy transition-colors inline-flex items-center gap-2" href="#">
                  Investor Deck
                  <iconify-icon icon="lucide:download"></iconify-icon>
</a>
</li>
<li>
<a className="text-sm text-slate-500 hover:text-navy transition-colors inline-flex items-center gap-2" href="#">
                  Media Kit
                  <iconify-icon icon="lucide:file-text"></iconify-icon>
</a>
</li>
<li>
<a className="text-sm text-slate-500 hover:text-navy transition-colors inline-flex items-center gap-2" href="#">
                  Store Strategy
                  <iconify-icon icon="lucide:store"></iconify-icon>
</a>
</li>
</ul>
</div>
<div>
<h5 className="font-semibold text-sm text-navy mb-4 uppercase tracking-wider">
              Connect
            </h5>
<ul className="space-y-3">
<li>
<a className="text-sm text-slate-500 hover:text-navy transition-colors inline-flex items-center gap-2" href="#">
                  LinkedIn
                  <iconify-icon icon="lucide:arrow-up-right"></iconify-icon>
</a>
</li>
<li>
<a className="text-sm text-slate-500 hover:text-navy transition-colors inline-flex items-center gap-2" href="mailto:#">
                  Contact Will
                  <iconify-icon icon="lucide:mail"></iconify-icon>
</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-400">
            © 2024 Will Meldman Executive Portfolio. All rights reserved.
          </p>
<div className="flex items-center gap-4 text-xs text-slate-400">
<span>Confidential Pitch Asset</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
