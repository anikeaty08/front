import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Data Store
        const services = [
            { id: 'web', name: 'Web Development', icon: 'solar:laptop-linear', desc: 'High-performance digital storefronts built on modern stacks.' },
            { id: 'mobile', name: 'Mobile Development', icon: 'solar:smartphone-linear', desc: 'Native and cross-platform mobile architectures.' },
            { id: 'marketing', name: 'Digital Marketing', icon: 'solar:chart-square-linear', desc: 'Data-driven growth campaigns and funnels.' },
            { id: 'ads', name: 'Ads Management', icon: 'solar:target-linear', desc: 'High-ROI paid acquisition networks.' },
            { id: 'seo', name: 'SEO Optimization', icon: 'solar:magnifer-linear', desc: 'Organic search dominance and technical indexing.' }
        ];

        const team = [
            { id: 'dev-1', name: 'Alex K.', role: 'Lead Frontend', services: ['web', 'seo'], projects: 42,
              work: [
                  { title: 'Fintech Dashboard UX', type: 'Web App', metric: '-40% Churn', visual: 'solar:wallet-money-linear' },
                  { title: 'E-Com Headless Store', type: 'Architecture', metric: '120ms Load', visual: 'solar:cart-large-2-linear' }
              ] 
            },
            { id: 'dev-2', name: 'Sarah M.', role: 'Mobile Architect', services: ['mobile'], projects: 28,
              work: [
                  { title: 'Fitness Tracker App', type: 'iOS Native', metric: '4.9 App Store', visual: 'solar:heart-pulse-linear' },
                  { title: 'Logistics Courier Tool', type: 'React Native', metric: '10k Daily Active', visual: 'solar:routing-2-linear' }
              ]
            },
            { id: 'dev-3', name: 'James R.', role: 'Growth Strategist', services: ['marketing', 'ads'], projects: 65,
              work: [
                  { title: 'SaaS Acquisition Push', type: 'Paid Ads', metric: '3.2x ROAS', visual: 'solar:graph-up-linear' },
                  { title: 'DTC Brand Scaling', type: 'Multi-channel', metric: '$2M Rev Gen', visual: 'solar:tag-price-linear' }
              ]
            },
            { id: 'dev-4', name: 'Elena V.', role: 'Fullstack Engineer', services: ['web'], projects: 34,
              work: [
                  { title: 'Real Estate Portal', type: 'Web Platform', metric: '99.9% Uptime', visual: 'solar:buildings-linear' }
              ]
            },
            { id: 'dev-5', name: 'Marcus T.', role: 'Technical SEO', services: ['seo', 'web'], projects: 89,
              work: [
                  { title: 'Healthcare Blog Network', type: 'Organic Growth', metric: '+400% Traffic', visual: 'solar:medical-kit-linear' }
              ]
            }
        ];

        // UI Components
        function createTeamCard(member) {
            return `
                <div class="panel-metal rounded-2xl p-6 flex flex-col gap-4 border border-white/5 hover:border-[#39FF14]/30 transition-colors group">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full panel-recessed flex items-center justify-center border border-black group-hover:shadow-[0_0_10px_rgba(57,255,20,0.2)] transition-shadow">
                            <iconify-icon icon="solar:user-linear" class="text-gray-400 group-hover:text-[#39FF14] text-xl"></iconify-icon>
                        </div>
                        <div>
                            <h3 class="text-base font-medium text-gray-200">${member.name}</h3>
                            <p class="text-xs text-gray-500 uppercase tracking-wide">${member.role}</p>
                        </div>
                    </div>
                    <div class="mt-2 pt-4 border-t border-white/5 flex justify-between items-center">
                        <div class="flex gap-1">
                            ${member.services.map(s => `<div class="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#39FF14] transition-colors shadow-[0_0_5px_rgba(0,0,0,0)] group-hover:shadow-[0_0_5px_#39FF14]"></div>`).join('')}
                        </div>
                        <button onclick="navigate('developer', '${member.id}')" class="text-xs font-medium text-gray-400 hover:text-white transition-colors bg-[#111] px-3 py-1.5 rounded border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] active:translate-y-px">
                            View Log
                        </button>
                    </div>
                </div>
            `;
        }

        function createServiceCard(service) {
            return `
                <div onclick="navigate('service-detail', '${service.id}')" class="panel-metal rounded-2xl p-8 cursor-pointer hover:-translate-y-1 transition-transform border border-white/5 hover:border-[#39FF14]/40 group relative overflow-hidden">
                    <div class="absolute -right-10 -bottom-10 w-32 h-32 bg-[#39FF14] opacity-0 group-hover:opacity-10 blur-3xl rounded-full transition-opacity"></div>
                    <div class="w-14 h-14 rounded-full panel-recessed flex items-center justify-center text-gray-400 group-hover:text-[#39FF14] mb-6 shadow-[inset_0_2px_5px_rgba(0,0,0,1)]">
                        <iconify-icon icon="${service.icon}" width="1.8rem" stroke-width="1.5"></iconify-icon>
                    </div>
                    <h3 class="text-xl font-medium text-gray-200 mb-2">${service.name}</h3>
                    <p class="text-sm text-gray-500 leading-relaxed">${service.desc}</p>
                    <div class="mt-6 flex items-center text-xs font-medium text-gray-500 group-hover:text-[#39FF14] uppercase tracking-widest gap-2 transition-colors">
                        Access Division <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                    </div>
                </div>
            `;
        }

        function createWorkCard(work) {
            return `
                <div class="panel-metal rounded-2xl p-2 border border-black shadow-[0_10px_20px_rgba(0,0,0,0.8)] flex flex-col group">
                    <!-- Skeuomorphic Screen Area -->
                    <div class="screen-glass rounded-xl h-48 w-full relative overflow-hidden flex flex-col items-center justify-center gap-4 group-hover:border-[#39FF14]/30 transition-colors">
                        <div class="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30 z-10"></div>
                        <iconify-icon icon="${work.visual}" class="text-4xl text-gray-700 group-hover:text-[#39FF14] group-hover:drop-shadow-[0_0_15px_rgba(57,255,20,0.8)] transition-all z-0"></iconify-icon>
                        <div class="absolute top-3 left-3 flex gap-1.5 z-10">
                            <div class="w-2 h-2 rounded-full bg-red-500/20 border border-red-500/50"></div>
                            <div class="w-2 h-2 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                            <div class="w-2 h-2 rounded-full bg-green-500/20 border border-green-500/50 group-hover:bg-[#39FF14] group-hover:border-[#39FF14] group-hover:shadow-[0_0_5px_#39FF14] transition-all"></div>
                        </div>
                        <div class="absolute bottom-3 right-3 text-[10px] font-mono text-[#39FF14]/50 z-10 opacity-0 group-hover:opacity-100 transition-opacity">SYS.OK</div>
                    </div>
                    <!-- Meta Data -->
                    <div class="p-5 flex justify-between items-end">
                        <div>
                            <h4 class="text-lg font-medium text-gray-200">${work.title}</h4>
                            <p class="text-xs text-gray-500 uppercase tracking-widest mt-1">${work.type}</p>
                        </div>
                        <div class="bg-[#111] border border-white/5 rounded px-3 py-1.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]">
                            <span class="text-sm font-medium text-[#39FF14] [text-shadow:0_0_5px_rgba(57,255,20,0.2)]">${work.metric}</span>
                        </div>
                    </div>
                </div>
            `;
        }

        // Router & Renderers
        function hideAllViews() {
            document.querySelectorAll('#app-views > main').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('flex');
            });
            window.scrollTo(0, 0);
        }

        function renderHome() {
            document.getElementById('team-preview-grid').innerHTML = team.slice(0, 3).map(createTeamCard).join('');
        }

        function renderServices() {
            document.getElementById('services-grid').innerHTML = services.map(createServiceCard).join('');
        }

        function renderServiceDetail(serviceId) {
            const service = services.find(s => s.id === serviceId);
            if (!service) return navigate('services');

            document.getElementById('sd-title').innerText = service.name;
            document.getElementById('sd-desc').innerText = service.desc;
            const iconEl = document.getElementById('sd-icon');
            iconEl.innerHTML = `<iconify-icon icon="${service.icon}"></iconify-icon>`;
            
            const relevantTeam = team.filter(t => t.services.includes(serviceId));
            document.getElementById('sd-team-grid').innerHTML = relevantTeam.map(createTeamCard).join('');
        }

        function renderTeam() {
            document.getElementById('all-team-grid').innerHTML = team.map(createTeamCard).join('');
        }

        function renderDeveloper(devId) {
            const dev = team.find(t => t.id === devId);
            if (!dev) return navigate('team');

            document.getElementById('dev-name').innerText = dev.name;
            document.getElementById('dev-role').innerText = dev.role;
            document.getElementById('dev-stat-1').innerText = dev.projects;
            
            document.getElementById('dev-tags').innerHTML = dev.services.map(sid => {
                const sName = services.find(s => s.id === sid)?.name || sid;
                return `<span class="bg-[#1a1a1a] border border-white/10 text-gray-400 text-xs px-2 py-1 rounded shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] uppercase tracking-wide">${sName}</span>`;
            }).join('');

            document.getElementById('dev-portfolio-grid').innerHTML = dev.work.map(createWorkCard).join('');
        }

        function renderAllWork() {
            // Flatten all works
            let allWorks = [];
            team.forEach(dev => {
                dev.work.forEach(w => allWorks.push(w));
            });
            document.getElementById('all-work-grid').innerHTML = allWorks.map(createWorkCard).join('');
        }

        function navigate(viewId, param = null) {
            hideAllViews();
            const view = document.getElementById(`view-${viewId}`);
            if (view) {
                view.classList.remove('hidden');
                view.classList.add('flex');
            }

            // Route execution
            if (viewId === 'home') renderHome();
            if (viewId === 'services') renderServices();
            if (viewId === 'service-detail' && param) renderServiceDetail(param);
            if (viewId === 'team') renderTeam();
            if (viewId === 'developer' && param) renderDeveloper(param);
            if (viewId === 'work') renderAllWork();
        }

        // Init
        document.addEventListener('DOMContentLoaded', () => {
            navigate('home');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      
<div className="noise-overlay"></div>
<div className="fixed inset-0 pointer-events-none ambient-glow z-0"></div>

<header className="fixed top-4 left-0 right-0 z-40 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<nav className="flex items-center justify-between rounded-2xl bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 px-6 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)]">
<div className="flex items-center gap-1 cursor-pointer" onclick="navigate('home')">
<span className="text-2xl font-semibold tracking-tight text-embossed uppercase">LIMITED</span>
<span className="w-2 h-2 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14] mt-1"></span>
</div>
<div className="hidden md:flex items-center gap-8">
<button className="text-sm font-medium text-gray-400 hover:text-gray-200 transition-colors [text-shadow:0_1px_1px_rgba(255,255,255,0.05)]" onclick="navigate('services')">Services Hub</button>
<button className="text-sm font-medium text-gray-400 hover:text-gray-200 transition-colors [text-shadow:0_1px_1px_rgba(255,255,255,0.05)]" onclick="navigate('team')">Our Engineers</button>
<button className="text-sm font-medium text-gray-400 hover:text-gray-200 transition-colors [text-shadow:0_1px_1px_rgba(255,255,255,0.05)]" onclick="navigate('work')">Past Work</button>
</div>
<button className="relative group bg-[#111] border border-[#39FF14]/30 rounded-lg p-[1px] shadow-[0_4px_10px_rgba(0,0,0,0.5)] overflow-hidden">
<div className="absolute inset-0 bg-[#39FF14]/10 group-hover:bg-[#39FF14]/20 transition-colors"></div>
<div className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-[7px] px-5 py-2.5 transition-all duration-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.8)] border border-black group-hover:shadow-[0_0_15px_rgba(57,255,20,0.3),inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] shadow-[0_0_5px_#39FF14]"></span>
<span className="text-xs font-medium text-[#39FF14] tracking-wide uppercase">Client Portal</span>
</div>
</button>
</nav>
</header>

<div className="relative z-10 pt-32 pb-24" id="app-views">

<main className="flex flex-col gap-32 sm:gap-40" id="view-home">

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-16">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-b from-[#222] to-[#111] border border-white/5 shadow-[0_4px_10px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] mb-8">
<div className="w-5 h-5 rounded-full panel-recessed flex items-center justify-center border-none">
<iconify-icon className="text-gray-400 text-sm" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-400 tracking-wide [text-shadow:0_1px_0_rgba(0,0,0,1)] uppercase">Trusted by 100+ Scale-Ups</span>
</div>
<h1 className="text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight font-medium text-embossed max-w-5xl mx-auto mb-8">
                    Turn Your Website Into Your Best Salesperson.
                </h1>
<p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-12 [text-shadow:0_1px_1px_rgba(255,255,255,0.05)] font-medium">
                    Your customers decide in 3 seconds if they trust you. We build high-converting digital storefronts that make the choice obvious.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-6">
<button className="relative bg-gradient-to-b from-[#2a2a2a] to-[#0a0a0a] rounded-xl p-[2px] shadow-[0_15px_30px_rgba(0,0,0,0.8),0_0_30px_rgba(57,255,20,0.15)] group outline-none">
<div className="btn-mechanical bg-gradient-to-b from-[#1a1a1a] to-[#111] rounded-[10px] px-8 py-4 flex items-center gap-3 border border-white/5 group-hover:border-[#39FF14]/50 group-hover:bg-[#151515] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#39FF14]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="text-[#39FF14] font-medium tracking-wide text-base relative z-10 [text-shadow:0_0_8px_rgba(57,255,20,0.5)]">DEPLOY PROJECT</span>
<iconify-icon className="text-[#39FF14] text-lg relative z-10" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</button>
<button className="bg-[#1a1a1a]/50 backdrop-blur-md border border-white/5 rounded-xl px-8 py-4 shadow-[0_4px_15px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)] text-gray-300 font-medium text-base hover:bg-[#222]/80 transition-colors flex items-center gap-2">
<iconify-icon className="text-gray-400 text-base" icon="solar:copy-linear" strokeWidth="1.5"></iconify-icon>
                        VIEW MANIFESTO
                    </button>
</div>
</section>

<section className="max-w-5xl mx-auto px-4 w-full">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="panel-recessed rounded-2xl p-6 flex flex-col items-center text-center">
<span className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-3">Average Uplift</span>
<div className="text-4xl font-semibold text-[#39FF14] tracking-tight [text-shadow:0_0_15px_rgba(57,255,20,0.4)]">312%</div>
<span className="text-sm text-gray-600 mt-2 font-medium">In Conversion Rates</span>
</div>
<div className="panel-recessed rounded-2xl p-6 flex flex-col items-center text-center">
<span className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-3">Load Times</span>
<div className="text-4xl font-semibold text-gray-200 tracking-tight text-embossed">&lt;150ms</div>
<span className="text-sm text-gray-600 mt-2 font-medium">Global CDN Delivery</span>
</div>
<div className="panel-recessed rounded-2xl p-6 flex flex-col items-center text-center">
<span className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-3">Revenue Managed</span>
<div className="text-4xl font-semibold text-gray-200 tracking-tight text-embossed">$45M+</div>
<span className="text-sm text-gray-600 mt-2 font-medium">Through Our Systems</span>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 w-full text-center">
<h2 className="text-2xl sm:text-3xl tracking-tight font-medium text-embossed mb-10">Our Engineering Divisions</h2>
<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
<button className="panel-metal rounded-xl p-6 flex flex-col items-center gap-4 hover:-translate-y-1 transition-transform group" onclick="navigate('service-detail', 'web')">
<div className="w-12 h-12 rounded-full panel-recessed flex items-center justify-center text-gray-400 group-hover:text-[#39FF14] group-hover:shadow-[inset_0_0_15px_rgba(57,255,20,0.2)] transition-all">
<iconify-icon icon="solar:laptop-linear" strokeWidth="1.5" width="1.5rem"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-300">Web Dev</span>
</button>
<button className="panel-metal rounded-xl p-6 flex flex-col items-center gap-4 hover:-translate-y-1 transition-transform group" onclick="navigate('service-detail', 'mobile')">
<div className="w-12 h-12 rounded-full panel-recessed flex items-center justify-center text-gray-400 group-hover:text-[#39FF14] group-hover:shadow-[inset_0_0_15px_rgba(57,255,20,0.2)] transition-all">
<iconify-icon icon="solar:smartphone-linear" strokeWidth="1.5" width="1.5rem"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-300">Mobile Apps</span>
</button>
<button className="panel-metal rounded-xl p-6 flex flex-col items-center gap-4 hover:-translate-y-1 transition-transform group" onclick="navigate('service-detail', 'marketing')">
<div className="w-12 h-12 rounded-full panel-recessed flex items-center justify-center text-gray-400 group-hover:text-[#39FF14] group-hover:shadow-[inset_0_0_15px_rgba(57,255,20,0.2)] transition-all">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="1.5rem"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-300">Digital Marketing</span>
</button>
<button className="panel-metal rounded-xl p-6 flex flex-col items-center gap-4 hover:-translate-y-1 transition-transform group" onclick="navigate('service-detail', 'ads')">
<div className="w-12 h-12 rounded-full panel-recessed flex items-center justify-center text-gray-400 group-hover:text-[#39FF14] group-hover:shadow-[inset_0_0_15px_rgba(57,255,20,0.2)] transition-all">
<iconify-icon icon="solar:target-linear" strokeWidth="1.5" width="1.5rem"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-300">Paid Ads</span>
</button>
<button className="panel-metal rounded-xl p-6 flex flex-col items-center gap-4 hover:-translate-y-1 transition-transform group col-span-2 md:col-span-1" onclick="navigate('service-detail', 'seo')">
<div className="w-12 h-12 rounded-full panel-recessed flex items-center justify-center text-gray-400 group-hover:text-[#39FF14] group-hover:shadow-[inset_0_0_15px_rgba(57,255,20,0.2)] transition-all">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="1.5rem"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-300">SEO Growth</span>
</button>
</div>
<div className="mt-8">
<button className="text-sm text-gray-500 hover:text-[#39FF14] transition-colors underline decoration-white/20 underline-offset-4" onclick="navigate('services')">View Full Capabilities →</button>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 w-full" id="team-preview-section">
<div className="flex items-end justify-between mb-10">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-medium text-embossed mb-2">The Architects</h2>
<p className="text-sm text-gray-500">Elite engineers and strategists behind the builds.</p>
</div>
<button className="text-sm text-gray-500 hover:text-gray-300 transition-colors hidden sm:block" onclick="navigate('team')">View All Roster →</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="team-preview-grid">

</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
<div className="flex flex-col gap-6">
<div className="panel-metal rounded-2xl p-8 flex items-start gap-5">
<div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-b from-gray-300 to-gray-500 shadow-[0_2px_5px_rgba(0,0,0,0.8),inset_0_2px_2px_rgba(255,255,255,0.8),inset_0_-2px_2px_rgba(0,0,0,0.4)] flex-shrink-0 border border-gray-400"></div>
<div>
<h3 className="text-lg font-medium text-gray-200 mb-2">Built for Results, Not Awards</h3>
<p className="text-base text-gray-500 leading-relaxed">We optimize for conversion rates and revenue, stripping away unnecessary fluff that slows down your user's journey.</p>
</div>
</div>
<div className="panel-metal rounded-2xl p-8 flex items-start gap-5 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-[#39FF14] opacity-5 blur-3xl rounded-full pointer-events-none"></div>
<div className="mt-1 w-6 h-6 rounded-full bg-[#111] shadow-[0_0_15px_rgba(57,255,20,0.3),inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center flex-shrink-0 border border-[#39FF14]/40 relative">
<div className="w-2.5 h-2.5 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14]"></div>
</div>
<div>
<h3 className="text-lg font-medium text-gray-200 mb-2">Custom Strategy, Not Templates</h3>
<p className="text-base text-gray-500 leading-relaxed">Every physical pixel is engineered specifically for your market positioning and target demographic.</p>
</div>
</div>
</div>
<div className="relative h-full">
<div className="absolute -inset-1 bg-gradient-to-br from-white/5 to-transparent rounded-3xl blur-sm z-0"></div>
<div className="relative h-full bg-[#111]/80 backdrop-blur-2xl rounded-2xl border border-white/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.1)] p-10 flex flex-col justify-center z-10">
<div className="absolute -top-4 -right-4 bg-gradient-to-b from-[#39FF14] to-[#2ecc11] text-black font-medium tracking-wide text-xs px-4 py-2 rounded-lg shadow-[0_10px_20px_rgba(57,255,20,0.3),inset_0_2px_0_rgba(255,255,255,0.5),inset_0_-2px_0_rgba(0,0,0,0.2)] transform rotate-2 border border-[#39FF14]">
                                OUR PROMISE
                            </div>
<iconify-icon className="text-[#39FF14]/20 mb-6 text-4xl" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-2xl font-medium leading-snug text-gray-400 [text-shadow:0_1px_1px_rgba(255,255,255,0.05)]">
<span className="text-gray-200">"We don't sell pages.</span><br/>
                                We sell the outcomes those pages generate for your business."
                            </p>
</div>
</div>
</div>
</section>
</main>

<main className="hidden max-w-7xl mx-auto px-4 w-full flex-col gap-12 pt-16" id="view-services">
<div className="text-center">
<h1 className="text-3xl sm:text-5xl tracking-tight font-medium text-embossed mb-4">Engineering Capabilities</h1>
<p className="text-base text-gray-500">Select a division to view our specialists and their technical portfolios.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="services-grid">

</div>
</main>

<main className="hidden max-w-7xl mx-auto px-4 w-full flex-col gap-12 pt-16" id="view-service-detail">
<button className="self-start flex items-center gap-2 text-xs font-medium text-gray-500 hover:text-gray-300 uppercase tracking-widest mb-4" onclick="navigate('services')">
<iconify-icon icon="solar:arrow-left-linear" width="1.2rem"></iconify-icon> Back to Capabilities
            </button>
<div className="panel-metal rounded-2xl p-8 flex items-center justify-between border border-[#39FF14]/20 relative overflow-hidden">
<div className="absolute -left-20 -top-20 w-64 h-64 bg-[#39FF14] opacity-[0.03] blur-3xl rounded-full pointer-events-none"></div>
<div>
<h1 className="text-3xl sm:text-4xl tracking-tight font-medium text-gray-100 mb-2" id="sd-title">Service Division</h1>
<p className="text-base text-gray-400" id="sd-desc">Description goes here.</p>
</div>
<div className="hidden sm:flex w-20 h-20 rounded-full panel-recessed items-center justify-center text-[#39FF14] text-3xl shadow-[inset_0_0_20px_rgba(57,255,20,0.1)]" id="sd-icon"></div>
</div>
<div>
<h2 className="text-xl font-medium text-gray-300 mb-6">Assigned Engineers &amp; Specialists</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="sd-team-grid">

</div>
</div>
</main>

<main className="hidden max-w-7xl mx-auto px-4 w-full flex-col gap-12 pt-16" id="view-team">
<div className="text-center">
<h1 className="text-3xl sm:text-5xl tracking-tight font-medium text-embossed mb-4">The Complete Roster</h1>
<p className="text-base text-gray-500">The hardware-grade engineers driving your digital assets.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6" id="all-team-grid">

</div>
</main>

<main className="hidden max-w-7xl mx-auto px-4 w-full flex-col gap-12 pt-16" id="view-developer">
<button className="self-start flex items-center gap-2 text-xs font-medium text-gray-500 hover:text-gray-300 uppercase tracking-widest mb-4" onclick="navigate('team')">
<iconify-icon icon="solar:arrow-left-linear" width="1.2rem"></iconify-icon> Back to Roster
            </button>

<div className="panel-metal rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center gap-8 relative">
<div className="w-32 h-32 rounded-full panel-recessed border border-[#39FF14]/30 flex items-center justify-center overflow-hidden relative">
<div className="absolute inset-0 border-[4px] border-dashed border-white/5 rounded-full animate-[spin_30s_linear_infinite]"></div>
<iconify-icon className="text-5xl text-gray-500" icon="solar:user-linear"></iconify-icon>
</div>
<div className="flex-grow">
<div className="inline-block px-3 py-1 rounded border border-[#39FF14]/20 bg-[#39FF14]/5 text-[#39FF14] text-xs font-medium tracking-widest uppercase mb-3" id="dev-role">Role</div>
<h1 className="text-3xl sm:text-5xl tracking-tight font-medium text-gray-100 mb-2" id="dev-name">Name</h1>
<div className="flex flex-wrap gap-2 mt-4" id="dev-tags"></div>
</div>
<div className="flex flex-col gap-4 min-w-[150px]">
<div className="screen-glass rounded-lg p-4 flex flex-col items-center justify-center">
<span className="text-2xl font-semibold text-gray-200" id="dev-stat-1">0</span>
<span className="text-xs text-gray-500 uppercase tracking-widest mt-1">Projects Shipped</span>
</div>
</div>
</div>

<div>
<h2 className="text-2xl font-medium text-gray-300 mb-8 flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14]"></div>
                    Verified Work Log
                </h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="dev-portfolio-grid">

</div>
</div>
</main>

<main className="hidden max-w-7xl mx-auto px-4 w-full flex-col gap-12 pt-16" id="view-work">
<div className="text-center mb-10">
<h1 className="text-3xl sm:text-5xl tracking-tight font-medium text-embossed mb-4">Master Archives</h1>
<p className="text-base text-gray-500">A complete log of digital assets deployed by our collective.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="all-work-grid">

</div>
</main>
</div>

<footer className="relative z-20 mt-20 flex flex-col">
<div className="w-full bg-[#050505] border-y border-white/5 py-4 overflow-hidden relative shadow-[inset_0_5px_15px_rgba(0,0,0,0.8)] flex items-center">
<div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
<div className="flex whitespace-nowrap animate-marquee items-center opacity-40">
<span className="text-2xl font-medium tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-700 mx-8 uppercase">Limited Agency • Web Design</span>
<span className="text-2xl font-medium tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-700 mx-8 uppercase">Limited Agency • Web Design</span>
<span className="text-2xl font-medium tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-700 mx-8 uppercase">Limited Agency • Web Design</span>
<span className="text-2xl font-medium tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-700 mx-8 uppercase">Limited Agency • Web Design</span>
<span className="text-2xl font-medium tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-700 mx-8 uppercase">Limited Agency • Web Design</span>
</div>
</div>
<div className="w-full h-24 bg-gradient-to-b from-[#2a2a2a] to-[#111] border-t border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center relative">
<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<p className="text-xs font-medium text-engraved tracking-wide">© 2025 LIMITED ENGINEERING.</p>
</div>
</footer>



    </>
  );
}
