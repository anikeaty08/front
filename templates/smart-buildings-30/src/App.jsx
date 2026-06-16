import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Icons
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      });

      // Simple router for partner pages
      const params = new URLSearchParams(window.location.search);
      const sponsorKey = params.get('sponsor');

      const brand = { bg: 'rgba(37,180,50,0.10)', ring: 'rgba(37,180,50,0.35)', text: '#25b432' };

      const sponsors = {
        multitech: {
          name: 'Multitech',
          tier: 'Forest Rock × Multitech',
          initial: 'M',
          colors: brand,
          tagline: 'Cellular connectivity that actually works — plug in, power up, get online.',
          hero: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1970&auto=format&fit=crop',
          imgs: [
            'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1974&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1495578942200-c5f7d8d19d8d?q=80&w=1826&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1559242550-bdfaa5081f6c?q=80&w=1970&auto=format&fit=crop'
          ],
          problem: 'Sites need reliable internet where fixed lines are slow, expensive, or unavailable.',
          solution: 'We use Multitech gateways to deliver stable 4G/5G connectivity that’s easy to deploy and manage.',
          benefits: [
            'Fast setup — on air in minutes',
            'Solid performance for BMS and meters',
            'No surprise ongoing costs',
            'Remote monitoring that’s simple to use'
          ],
          example: 'A retail chain connected 120 stores in weeks using cellular gateways — secure access for energy dashboards and remote maintenance, with fewer site visits.'
        },
        teltonika: {
          name: 'Teltonika',
          tier: 'Forest Rock × Teltonika',
          initial: 'T',
          colors: brand,
          tagline: 'Industrial networking without the complexity — built to last.',
          hero: 'https://images.unsplash.com/photo-1583778172943-984f28e9b2f8?q=80&w=1974&auto=format&fit=crop',
          imgs: [
            'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1887&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1974&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1960&auto=format&fit=crop'
          ],
          problem: 'Facilities need robust networking that survives plant rooms, heat, dust, and power cycles.',
          solution: 'We deploy rugged routers and switches that are straightforward and dependable.',
          benefits: [
            'Works in harsh conditions',
            'Clear, simple management',
            'Dual-SIM failover where needed',
            'Great value with dependable support'
          ],
          example: 'An industrial site replaced failing routers and cut downtime. Remote support became reliable and faster.'
        },
        janitza: {
          name: 'Janitza',
          tier: 'Forest Rock × Janitza',
          initial: 'J',
          colors: brand,
          tagline: 'See exactly where your energy goes — save money with the facts.',
          hero: 'https://images.unsplash.com/photo-1581092162384-8987c1d647d8?q=80&w=1974&auto=format&fit=crop',
          imgs: [
            'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1974&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=1970&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1887&auto=format&fit=crop'
          ],
          problem: 'Rising energy costs with little visibility of where waste happens.',
          solution: 'We pair meters with simple dashboards so you can spot waste and act quickly.',
          benefits: [
            'Clear view of usage by area or system',
            'Typical 25% cost reduction',
            'Better power quality and fewer faults',
            'Reports for compliance and stakeholders'
          ],
          example: 'A university tracked energy by building block and uncovered out-of-hours use — changes saved over 20% within one term.'
        },
        zerotier: {
          name: 'ZeroTier',
          tier: 'Forest Rock × ZeroTier',
          initial: 'Z',
          colors: brand,
          tagline: 'Secure networks made simple — safe remote access without the headaches.',
          hero: 'https://images.unsplash.com/photo-1544198365-3c89d1307f3c?q=80&w=1974&auto=format&fit=crop',
          imgs: [
            'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1970&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1974&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1495578942200-c5f7d8d19d8d?q=80&w=1826&auto=format&fit=crop'
          ],
          problem: 'IT policies are tight, sites are remote, and traditional VPNs are heavy to manage.',
          solution: 'We create secure overlay networks — fast to deploy and easy to control.',
          benefits: [
            'Lock down access by user and device',
            'Works across sites and carriers',
            'No extra VPN hardware',
            'Auditable and scalable'
          ],
          example: 'A property group gained secure remote access to BMS across 40 sites — faster fixes and fewer callouts.'
        }
      };

      function renderSponsor(key) {
        const data = sponsors[key];
        if (!data) return;

        // Toggle pages
        document.getElementById('exhibitor').classList.add('hidden');
        document.getElementById('sponsor-page').classList.remove('hidden');

        // Elements
        const badge = document.getElementById('sponsorBadge');
        const initial = document.getElementById('sponsorInitial');
        const name = document.getElementById('sponsorName');
        const tier = document.getElementById('sponsorTier');
        const tagline = document.getElementById('sponsorTagline');
        const glow = document.getElementById('sponsorGlow');
        const hero = document.getElementById('sponsorHero');
        const imgs = [document.getElementById('sponsorImg1'), document.getElementById('sponsorImg2'), document.getElementById('sponsorImg3')];
        const problem = document.getElementById('sponsorProblem');
        const solution = document.getElementById('sponsorSolution');
        const benefits = document.getElementById('sponsorBenefits');
        const example = document.getElementById('sponsorExample');

        // Content
        initial.textContent = data.initial;
        name.textContent = data.name;
        tier.textContent = data.tier;
        tagline.textContent = data.tagline;
        hero.src = data.hero;
        imgs.forEach((img, i) => img.src = data.imgs[i]);

        // Colors
        badge.style.backgroundColor = data.colors.bg;
        badge.style.borderColor = data.colors.ring;
        badge.classList.add('ring-1');
        initial.style.color = data.colors.text;
        glow.style.backgroundColor = data.colors.bg;

        // Copy
        problem.textContent = data.problem;
        solution.textContent = data.solution;
        benefits.innerHTML = data.benefits.map(b => `<li class="flex items-start gap-2"><i data-lucide="check-circle" class="h-4 w-4 text-[#25b432] mt-0.5"></i><span>${b}</span></li>`).join('');
        example.textContent = data.example;

        // Re-draw icons for injected content
        if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      if (sponsorKey) {
        renderSponsor(sponsorKey.toLowerCase());
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full bg-gradient-to-r from-[#1a8a27] to-[#25b432] text-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center h-6 w-6 rounded-sm bg-white/10 ring-1 ring-white/20">
<svg className="lucide lucide-leaf h-3.5 w-3.5" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</span>
<p className="text-sm">Stand 40 • ExCeL London • 15–16 October 2025</p>
</div>
<a className="text-sm underline underline-offset-4 hover:opacity-90" href="https://smartbuildingsshow.com/register" rel="noopener" target="_blank">Register for Free Entry</a>
</div>
</div>

<div className="min-h-screen" id="app">

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-[#eaeaea]">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="h-16 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="?">
<div className="h-8 w-8 rounded-sm bg-[#25b432]/10 ring-1 ring-[#25b432]/20 flex items-center justify-center">
<span className="text-[#25b432] font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>FR</span>
</div>
<div>
<div className="text-base font-semibold tracking-tight leading-none">Forest Rock</div>
<div className="text-[11px] text-neutral-500 leading-none mt-0.5">Your IoT Sherpa</div>
</div>
</a>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 h-9 px-3.5 rounded-md bg-[#25b432] text-white hover:bg-[#1fa82b] transition-colors ring-1 ring-[#25b432]/10" href="https://smartbuildingsshow.com/register" rel="noopener" target="_blank">
<svg className="lucide lucide-ticket h-4 w-4" data-lucide="ticket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
<span className="text-sm font-medium">Register for Free Entry</span>
</a>
<a className="inline-flex items-center gap-2 h-9 px-3.5 rounded-md bg-white hover:bg-neutral-50 ring-1 ring-[#eaeaea] text-neutral-900" href="#partners">
<svg className="lucide lucide-users h-4 w-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-sm font-medium">Our Partners</span>
</a>
</div>
</div>
</div>
</header>

<main className="block">

<section className="relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 opacity-40" style={{backgroundImage: 'radial-gradient(rgba(37,180,50,0.08) 1px, transparent 1px)', backgroundSize: '18px 18px'}}></div>
<div className="absolute -top-24 -right-32 h-96 w-96 rounded-full bg-[#25b432]/15 blur-3xl"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="">
<div className="inline-flex items-center gap-2 rounded-full border border-[#eaeaea] bg-white px-3 py-1.5 text-xs text-neutral-600">
<svg className="lucide lucide-map-pin h-3.5 w-3.5 text-[#25b432]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  Stand 40 • ExCeL London • 15–16 October 2025
                </div>
<h1 className="md:text-5xl lg:text-6xl text-4xl font-semibold tracking-tight mt-5" style={{letterSpacing: '-0.02em'}}>
                  Meet Forest Rock at Smart Buildings Show 2025
                </h1>
<p className="md:text-lg text-base text-neutral-700 max-w-xl mt-4">Making buildings work better — just solutions that work.</p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 h-11 px-5 rounded-md bg-[#25b432] text-white hover:bg-[#1fa82b] ring-1 ring-[#25b432]/10" href="https://smartbuildingsshow.com/register" rel="noopener" target="_blank">
<svg className="lucide lucide-ticket h-5 w-5" data-lucide="ticket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
<span className="text-sm font-medium">Register for Free Entry</span>
</a>
<div className="inline-flex items-center gap-2 h-11 px-4 rounded-md bg-white hover:bg-neutral-50 ring-1 ring-[#eaeaea] text-neutral-900">
<svg className="lucide lucide-badge-check h-5 w-5 text-[#25b432]" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm font-medium">14 years solving real building problems</span>
</div>
</div>
<div className="mt-8 grid sm:grid-cols-2 gap-4">
<div className="rounded-lg border border-[#eaeaea] bg-white p-4 hover:ring-1 hover:ring-[#25b432]/20 transition">
<div className="flex items-start gap-2">
<svg className="lucide lucide-check-circle h-5 w-5 text-[#25b432]" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<div className="">
<div className="text-sm font-medium">See live IoT demos that actually work</div>
<p className="text-sm text-neutral-600 mt-1">Simple, reliable setups you can use in the real world.</p>
</div>
</div>
</div>
<div className="rounded-lg border border-[#eaeaea] bg-white p-4 hover:ring-1 hover:ring-[#25b432]/20 transition">
<div className="flex items-start gap-2">
<svg className="lucide lucide-check-circle h-5 w-5 text-[#25b432]" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<div className="">
<div className="text-sm font-medium">Get straight answers about building solutions</div>
<p className="text-sm text-neutral-600 mt-1">Plain English, practical advice. No jargon.</p>
</div>
</div>
</div>
<div className="rounded-lg border border-[#eaeaea] bg-white p-4 hover:ring-1 hover:ring-[#25b432]/20 transition">
<div className="flex items-start gap-2">
<svg className="lucide lucide-check-circle h-5 w-5 text-[#25b432]" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<div className="">
<div className="text-sm font-medium">Meet the team that’s helped 1000+ buildings</div>
<p className="text-sm text-neutral-600 mt-1">Proven experience across real sites and portfolios.</p>
</div>
</div>
</div>
<div className="rounded-lg border border-[#eaeaea] bg-white p-4 hover:ring-1 hover:ring-[#25b432]/20 transition">
<div className="flex items-start gap-2">
<svg className="lucide lucide-check-circle h-5 w-5 text-[#25b432]" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<div className="">
<div className="text-sm font-medium">Learn about energy savings</div>
<p className="text-sm text-neutral-600 mt-1">Typical 25% cost reduction from practical changes.</p>
</div>
</div>
</div>
</div>

<div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="rounded-lg border border-[#eaeaea] bg-white p-4">
<div className="text-sm text-neutral-600">Experience</div>
<div className="mt-1 text-2xl font-semibold tracking-tight">14 years</div>
</div>
<div className="rounded-lg border border-[#eaeaea] bg-white p-4">
<div className="text-sm text-neutral-600">Catalog</div>
<div className="mt-1 text-2xl font-semibold tracking-tight">3000+ products</div>
</div>
<div className="rounded-lg border border-[#eaeaea] bg-white p-4">
<div className="text-sm text-neutral-600">Energy savings</div>
<div className="mt-1 text-2xl font-semibold tracking-tight">25% typical</div>
</div>
<div className="rounded-lg border border-[#eaeaea] bg-white p-4">
<div className="text-sm text-neutral-600">Certifications</div>
<div className="mt-1 text-sm text-neutral-800">ISO 9001, 14001, 27001, 45001 • Cyber Essentials Plus</div>
</div>
</div>
</div>
<div className="relative">
<div className="rounded-xl border border-[#eaeaea] bg-white p-2">
<img alt="Modern building technology" className="rounded-lg object-cover w-full h-[380px]" src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<img alt="IoT Edge" className="rounded-lg border border-[#eaeaea] object-cover w-full h-24" loading="lazy" src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<img alt="Team at the stand" className="rounded-lg border border-[#eaeaea] object-cover w-full h-24" loading="lazy" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&amp;w=1965&amp;auto=format&amp;fit=crop"/>
<img alt="Building analytics" className="rounded-lg border border-[#eaeaea] object-cover w-full h-24" loading="lazy" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden md:py-20 border-[#eaeaea] border-t pt-14 pb-14">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 opacity-30" style={{backgroundImage: 'linear-gradient(rgba(234,234,234,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(234,234,234,0.6) 1px, transparent 1px)', backgroundSize: '22px 22px, 22px 22px', backgroundPosition: '-1px -1px'}}></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div className="">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What Happened at Smart Buildings Show 2024</h2>
<p className="mt-2 text-neutral-700">Real results, real conversations, real solutions.</p>
</div>
<div className="hidden md:flex items-center gap-2 text-sm text-neutral-600">
<svg className="lucide lucide-image h-4 w-4 text-[#25b432]" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
                Highlights
              </div>
</div>
<div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
<figure className="group relative rounded-lg overflow-hidden border border-[#eaeaea] bg-white shadow-sm hover:ring-1 hover:ring-[#25b432]/20 transition">
<img alt="Live demo" className="h-44 md:h-48 w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</figure>
<figure className="group relative rounded-lg overflow-hidden border border-[#eaeaea] bg-white shadow-sm hover:ring-1 hover:ring-[#25b432]/20 transition">
<img alt="Conversations with visitors" className="h-44 md:h-48 w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</figure>
<figure className="group relative rounded-lg overflow-hidden border border-[#eaeaea] bg-white shadow-sm hover:ring-1 hover:ring-[#25b432]/20 transition">
<img alt="Forest Rock team" className="h-44 md:h-48 w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&amp;w=1965&amp;auto=format&amp;fit=crop"/>
</figure>
<figure className="group relative rounded-lg overflow-hidden border border-[#eaeaea] bg-white shadow-sm hover:ring-1 hover:ring-[#25b432]/20 transition">
<img alt="Networking moments" className="h-44 md:h-48 w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</figure>
<figure className="group relative rounded-lg overflow-hidden border border-[#eaeaea] bg-white shadow-sm hover:ring-1 hover:ring-[#25b432]/20 transition">
<img alt="Product displays" className="h-44 md:h-48 w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</figure>
<figure className="group relative rounded-lg overflow-hidden border border-[#eaeaea] bg-white shadow-sm hover:ring-1 hover:ring-[#25b432]/20 transition">
<img alt="Exhibition setup" className="h-44 md:h-48 w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</figure>
</div>
<div className="mt-8 grid lg:grid-cols-2 gap-6">
<div className="rounded-lg border border-[#eaeaea] bg-white p-5">
<div className="text-sm text-neutral-700">We showed practical, working solutions that help channel partners deliver building control, energy monitoring, and secure remote access. Partners came with real challenges; we shared simple ways to help them succeed. Straight answers — just what works and what to avoid.</div>
<ul className="grid sm:grid-cols-2 gap-3 text-sm text-neutral-800 mt-4">
<li className="flex gap-2 items-start">Live demonstrations that mirror real partner projects<svg className="lucide lucide-check-circle mt-0.5 w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(37, 180, 50)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg></li><li className="flex gap-2 items-start">Energy and cost-saving examples for your customers<svg className="lucide lucide-check-circle h-4 w-4 text-[#25b432] mt-0.5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg></li>
<li className="flex gap-2 items-start">Clear, honest conversations about partner success<svg className="lucide lucide-check-circle mt-0.5 w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(37, 180, 50)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg></li>
<li className="flex gap-2 items-start">Hands-on experience with partner-ready solutions<svg className="lucide lucide-check-circle h-4 w-4 text-[#25b432] mt-0.5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg></li>
</ul>
</div>
<div className="rounded-lg border border-[#eaeaea] bg-white p-5">
<div className="flex items-start gap-3">
<svg className="lucide lucide-quote h-6 w-6 text-[#25b432]" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<div className="">
<p className="text-base text-neutral-900">"Great to see Forest Rock at the Smart Buildings Show again."</p>
<p className="text-sm text-neutral-600 mt-2">— Neil Salt</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden py-14 md:py-20 border-t border-[#eaeaea]" id="partners">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 opacity-25" style={{backgroundImage: 'radial-gradient(circle at 25% 15%, rgba(37,180,50,0.08), transparent 40%), radial-gradient(circle at 85% 75%, rgba(37,180,50,0.06), transparent 35%)'}}></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div className="">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Meet Our Partners at the Show</h2>
<p className="mt-2 text-neutral-700">Working with the best to give you complete solutions.</p>
</div>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group rounded-lg border border-[#eaeaea] bg-white p-5 hover:border-neutral-300 transition-colors block hover:ring-1 hover:ring-[#25b432]/20" href="?sponsor=multitech">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-[#25b432]/10 text-[#25b432] ring-1 ring-[#25b432]/30 grid place-items-center">
<span className="font-semibold tracking-tight">M</span>
</div>
<div>
<div className="text-sm font-medium">Multitech</div>
<div className="text-xs text-neutral-500">Industrial IoT Gateways</div>
</div>
</div>
<p className="mt-3 text-sm text-neutral-700">Reliable connectivity that just works.</p>
<div className="mt-4 inline-flex items-center gap-1 text-xs text-[#25b432]">
<span className="underline underline-offset-4 group-hover:opacity-80">Learn More</span>
<svg className="lucide lucide-arrow-up-right h-3.5 w-3.5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</a>

<a className="group rounded-lg border border-[#eaeaea] bg-white p-5 hover:border-neutral-300 transition-colors block hover:ring-1 hover:ring-[#25b432]/20" href="?sponsor=teltonika">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-[#25b432]/10 text-[#25b432] ring-1 ring-[#25b432]/30 grid place-items-center">
<span className="font-semibold tracking-tight">T</span>
</div>
<div>
<div className="text-sm font-medium">Teltonika</div>
<div className="text-xs text-neutral-500">Networking Solutions</div>
</div>
</div>
<p className="mt-3 text-sm text-neutral-700">Industrial networking without the complexity.</p>
<div className="mt-4 inline-flex items-center gap-1 text-xs text-[#25b432]">
<span className="underline underline-offset-4 group-hover:opacity-80">Learn More</span>
<svg className="lucide lucide-arrow-up-right h-3.5 w-3.5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</a>

<a className="group rounded-lg border border-[#eaeaea] bg-white p-5 hover:border-neutral-300 transition-colors block hover:ring-1 hover:ring-[#25b432]/20" href="?sponsor=janitza">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-[#25b432]/10 text-[#25b432] ring-1 ring-[#25b432]/30 grid place-items-center">
<span className="font-semibold tracking-tight">J</span>
</div>
<div>
<div className="text-sm font-medium">Janitza</div>
<div className="text-xs text-neutral-500">Energy Management</div>
</div>
</div>
<p className="mt-3 text-sm text-neutral-700">Know your energy use, cut your bills.</p>
<div className="mt-4 inline-flex items-center gap-1 text-xs text-[#25b432]">
<span className="underline underline-offset-4 group-hover:opacity-80">Learn More</span>
<svg className="lucide lucide-arrow-up-right h-3.5 w-3.5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</a>

<a className="group rounded-lg border border-[#eaeaea] bg-white p-5 hover:border-neutral-300 transition-colors block hover:ring-1 hover:ring-[#25b432]/20" href="?sponsor=zerotier">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-[#25b432]/10 text-[#25b432] ring-1 ring-[#25b432]/30 grid place-items-center">
<span className="font-semibold tracking-tight">Z</span>
</div>
<div>
<div className="text-sm font-medium">ZeroTier</div>
<div className="text-xs text-neutral-500">Secure Networking</div>
</div>
</div>
<p className="mt-3 text-sm text-neutral-700">Keep hackers out, keep your building safe.</p>
<div className="mt-4 inline-flex items-center gap-1 text-xs text-[#25b432]">
<span className="underline underline-offset-4 group-hover:opacity-80">Learn More</span>
<svg className="lucide lucide-arrow-up-right h-3.5 w-3.5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</a>
</div>
</div>
</section>

<footer className="border-t border-[#eaeaea]" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="grid md:grid-cols-3 gap-8">
<div>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-sm bg-[#25b432]/10 ring-1 ring-[#25b432]/20 grid place-items-center">
<span className="text-[#25b432] font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>FR</span>
</div>
<div className="text-sm font-medium">Forest Rock</div>
</div>
<p className="mt-3 text-sm text-neutral-700 max-w-sm">Making buildings work better. Straight answers. Real results.</p>
</div>
<div>
<div className="text-sm font-medium">Event details</div>
<ul className="mt-3 space-y-2 text-sm text-neutral-800">
<li className="flex items-center gap-2"><svg className="lucide lucide-map h-4 w-4 text-[#25b432]" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg> ExCeL London</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-calendar h-4 w-4 text-[#25b432]" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> 15–16 October 2025</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-hash h-4 w-4 text-[#25b432]" data-lucide="hash" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="9" y2="9"></line><line x1="4" x2="20" y1="15" y2="15"></line><line x1="10" x2="8" y1="3" y2="21"></line><line x1="16" x2="14" y1="3" y2="21"></line></svg> Stand 40</li>
</ul>
</div>
<div>
<div className="text-sm font-medium">Talk to us</div>
<ul className="mt-3 space-y-2 text-sm text-neutral-800">
<li className="flex items-center gap-2"><svg className="lucide lucide-globe h-4 w-4 text-[#25b432]" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg> forestrock.co.uk</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-phone h-4 w-4 text-[#25b432]" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> +44 (0) 330 660 0567</li>
</ul>
<a className="mt-4 inline-flex items-center gap-2 h-9 px-3.5 rounded-md bg-[#25b432] text-white hover:bg-[#1fa82b] ring-1 ring-[#25b432]/10" href="https://smartbuildingsshow.com/register" rel="noopener" target="_blank">
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-sm font-medium">Book a 15-minute chat about your building</span>
</a>
</div>
</div>
<div className="mt-8 pt-6 border-t border-[#eaeaea] text-xs text-neutral-500">
              © 2025 Forest Rock. All rights reserved.
            </div>
</div>
</footer>
</main>

<main className="hidden" id="sponsor-page">
<section className="relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 opacity-25" style={{backgroundImage: 'linear-gradient(rgba(234,234,234,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(234,234,234,0.6) 1px, transparent 1px)', backgroundSize: '22px 22px, 22px 22px', backgroundPosition: '-1px -1px'}}></div>
<div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#25b432]/15 blur-3xl" id="sponsorGlow"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
<div className="flex items-center gap-2 text-sm text-neutral-600">
<a className="hover:text-neutral-900" href="?">Forest Rock</a>
<svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<span>Partner</span>
</div>
<div className="mt-6 grid lg:grid-cols-2 gap-10 items-center">
<div>
<div className="inline-flex items-center gap-3">
<div className="h-10 w-10 rounded-md grid place-items-center ring-1" id="sponsorBadge">
<span className="text-lg font-semibold tracking-tight" id="sponsorInitial">S</span>
</div>
<div>
<h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight" id="sponsorName" style={{letterSpacing: '-0.02em'}}></h1>
<p className="text-xs text-neutral-500 mt-1" id="sponsorTier"></p>
</div>
</div>
<p className="mt-5 text-neutral-800 text-base md:text-lg max-w-xl" id="sponsorTagline"></p>
<div className="mt-8 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 h-10 px-4 rounded-md bg-[#25b432] text-white hover:bg-[#1fa82b] ring-1 ring-[#25b432]/10" href="#contact" id="sponsorCTA1">
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="text-sm font-medium">Get in touch</span>
</a>
<a className="inline-flex items-center gap-2 h-10 px-4 rounded-md bg-white hover:bg-neutral-50 ring-1 ring-[#eaeaea] text-neutral-900" href="#contact" id="sponsorCTA2">
<svg className="lucide lucide-file-text h-4 w-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="text-sm font-medium">Request quote</span>
</a>
</div>
</div>
<div className="relative">
<div className="rounded-xl border border-[#eaeaea] bg-white p-2">
<img alt="Partner visual" className="rounded-lg object-cover w-full h-[360px]" id="sponsorHero" src=""/>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<img alt="Partner 1" className="rounded-lg border border-[#eaeaea] object-cover w-full h-24" id="sponsorImg1" loading="lazy" src=""/>
<img alt="Partner 2" className="rounded-lg border border-[#eaeaea] object-cover w-full h-24" id="sponsorImg2" loading="lazy" src=""/>
<img alt="Partner 3" className="rounded-lg border border-[#eaeaea] object-cover w-full h-24" id="sponsorImg3" loading="lazy" src=""/>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 md:py-18 border-t border-[#eaeaea] relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 opacity-25" style={{backgroundImage: 'radial-gradient(rgba(37,180,50,0.07) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-3 gap-8">
<div className="rounded-lg border border-[#eaeaea] bg-white p-5">
<div className="text-sm text-neutral-500">The challenge</div>
<p className="mt-3 text-sm text-neutral-800" id="sponsorProblem"></p>
<div className="mt-4 text-sm text-neutral-500">How we solve it</div>
<p className="mt-3 text-sm text-neutral-800" id="sponsorSolution"></p>
</div>
<div className="rounded-lg border border-[#eaeaea] bg-white p-5">
<div className="text-sm text-neutral-500">Benefits</div>
<ul className="mt-3 space-y-2 text-sm text-neutral-800" id="sponsorBenefits"></ul>
</div>
<div className="rounded-lg border border-[#eaeaea] bg-white p-5">
<div className="text-sm text-neutral-500">Real example</div>
<div className="mt-3 text-sm text-neutral-800" id="sponsorExample"></div>
<div className="mt-4">
<a className="inline-flex items-center gap-2 h-9 px-3.5 rounded-md bg-[#25b432] text-white hover:bg-[#1fa82b]" href="#contact">
<svg className="lucide lucide-phone h-4 w-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="text-sm font-medium">Talk through your site</span>
</a>
</div>
</div>
</div>
<div className="mt-10 rounded-lg border border-[#eaeaea] bg-white p-5">
<div className="flex flex-wrap items-center gap-4 text-sm">
<div className="flex items-center gap-2"><svg className="lucide lucide-map-pin h-4 w-4 text-[#25b432]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Stand 40</div>
<div className="flex items-center gap-2"><svg className="lucide lucide-calendar h-4 w-4 text-[#25b432]" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> ExCeL London, 15–16 October 2025</div>
<div className="flex items-center gap-2"><svg className="lucide lucide-globe h-4 w-4 text-[#25b432]" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg> forestrock.co.uk</div>
<div className="flex items-center gap-2"><svg className="lucide lucide-phone h-4 w-4 text-[#25b432]" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> +44 (0) 330 660 0567</div>
</div>
</div>
</div>
</section>
<footer className="border-t border-[#eaeaea]">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-neutral-600">
<a className="inline-flex items-center gap-1 hover:text-neutral-900" href="?">
<svg className="lucide lucide-arrow-left h-4 w-4" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
              Back to event page
            </a>
</div>
</footer>
</main>
</div>





    </>
  );
}
