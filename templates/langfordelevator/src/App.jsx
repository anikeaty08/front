import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
colors: {
navy: { DEFAULT: '#0f1629', light: '#1a2035', card: '#1e2540' },
steel: { DEFAULT: '#4a90d9', hover: '#387bbd' },
amber: { accent: '#e8a838' },
border: '#2d3548',
textprimary: '#ffffff',
textsecondary: '#a0aec0',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



// Mobile menu toggle
document.getElementById('mobileMenuBtn').addEventListener('click', function() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('hidden');
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-link').forEach(function(link) {
  link.addEventListener('click', function() {
    document.getElementById('mobileMenu').classList.add('hidden');
  });
});

// FAQ accordion - one open at a time
document.querySelectorAll('.faq-item').forEach(function(item) {
  item.addEventListener('toggle', function() {
    if (this.open) {
      document.querySelectorAll('.faq-item').forEach(function(other) {
        if (other !== item && other.open) {
          other.removeAttribute('open');
        }
      });
    }
  });
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50" style={{background: 'rgba(15, 22, 41, 0.85)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderBottom: '1px solid #2d3548'}}>
<nav className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-[72px] flex items-center justify-between">
<a className="text-lg md:text-xl tracking-tight font-bold text-white shrink-0" href="#">Langford Elevator</a>
<div className="hidden lg:flex items-center gap-8">
<a className="text-sm text-textsecondary hover:text-steel transition-colors" href="#services">Services</a>
<a className="text-sm text-textsecondary hover:text-steel transition-colors" href="#why-us">Why Langford</a>
<a className="text-sm text-textsecondary hover:text-steel transition-colors" href="#about">About</a>
<a className="text-sm text-textsecondary hover:text-steel transition-colors" href="#areas">Service Area</a>
<a className="text-sm text-textsecondary hover:text-steel transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden md:inline-flex text-sm px-5 py-2.5 rounded-lg font-medium bg-steel text-white hover:bg-steel-hover transition-all" href="#contact">
        Get a Free Elevator Assessment
      </a>

<button className="lg:hidden text-white p-2 -mr-2" id="mobileMenuBtn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<div className="hidden lg:hidden border-t border-border px-4 pb-4 pt-2" id="mobileMenu" style={{background: 'rgba(15, 22, 41, 0.98)'}}>
<div className="flex flex-col gap-1">
<a className="mobile-link py-3 text-sm text-textsecondary hover:text-white transition-colors" href="#services">Services</a>
<a className="mobile-link py-3 text-sm text-textsecondary hover:text-white transition-colors" href="#why-us">Why Langford</a>
<a className="mobile-link py-3 text-sm text-textsecondary hover:text-white transition-colors" href="#about">About</a>
<a className="mobile-link py-3 text-sm text-textsecondary hover:text-white transition-colors" href="#areas">Service Area</a>
<a className="mobile-link py-3 text-sm text-textsecondary hover:text-white transition-colors" href="#contact">Contact</a>
<a className="mt-2 text-sm px-5 py-3 rounded-lg font-medium bg-steel text-white hover:bg-steel-hover transition-all text-center" href="#contact">
        Get a Free Elevator Assessment
      </a>
</div>
</div>
</header>
<main>

<section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden" style={{paddingTop: '72px'}}>

<div className="absolute inset-0" style={{background: 'url(\'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&amp'}}></div>

<div className="absolute inset-0" style={{background: 'rgba(15, 22, 41, 0.75)'}}></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto text-center px-4 md:px-6 py-12 md:py-20">

<div className="animate-fade-up mb-5 md:mb-6">
<span className="inline-block text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-steel">
          Independent Elevator Contractor
        </span>
</div>

<h1 className="animate-fade-up delay-100 text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] tracking-tight text-white mb-5 md:mb-6">
        Tampa Bay's Independent<br className="hidden md:block"/> Elevator Contractor Since 2002
      </h1>

<p className="animate-fade-up delay-200 text-base md:text-lg lg:text-xl text-gray-300 leading-[1.6] max-w-3xl mx-auto mb-8 md:mb-10 font-normal">
        Elevator modernization, maintenance, inspections, and installation. All makes and models. Locally owned, fully licensed, available 24/7.
      </p>

<div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center w-full max-w-lg mx-auto mb-10 md:mb-12">
<a className="w-full sm:w-1/2 px-6 py-4 rounded-lg text-sm md:text-base font-medium bg-steel text-white hover:bg-steel-hover transition-all text-center flex items-center justify-center gap-2 group" href="#contact">
          Get a Free Elevator Assessment
          <iconify-icon className="text-base transition-transform group-hover:translate-x-0.5" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-1/2 px-6 py-4 rounded-lg text-sm md:text-base font-medium border-2 border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition-all text-center flex items-center justify-center gap-2" href="tel:8133688137">
<iconify-icon className="text-base" icon="solar:phone-linear"></iconify-icon>
          Call (813) 368-8137
        </a>
</div>

<div className="animate-fade-up delay-500 grid grid-cols-2 md:flex md:flex-wrap md:justify-center items-center gap-x-6 md:gap-x-8 gap-y-3 text-[13px] md:text-sm text-gray-300 font-medium">
<div className="flex items-center gap-2 justify-center">
<iconify-icon className="text-steel text-lg shrink-0" icon="solar:star-circle-linear"></iconify-icon>
<span>20+ Years in Tampa Bay</span>
</div>
<div className="flex items-center gap-2 justify-center">
<iconify-icon className="text-steel text-lg shrink-0" icon="solar:settings-linear"></iconify-icon>
<span>All Makes and Models</span>
</div>
<div className="flex items-center gap-2 justify-center">
<iconify-icon className="text-steel text-lg shrink-0" icon="solar:shield-check-linear"></iconify-icon>
<span>Licensed and Insured</span>
</div>
<div className="flex items-center gap-2 justify-center">
<iconify-icon className="text-steel text-lg shrink-0" icon="solar:clock-circle-linear"></iconify-icon>
<span>24/7 Emergency Service</span>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-20 px-4 md:px-6 bg-navy">
<div className="max-w-4xl mx-auto">
<div className="rounded-2xl p-6 md:p-10 relative overflow-hidden" style={{background: '#1e2540', borderLeft: '4px solid #e8a838'}}>

<div className="absolute -top-20 -right-20 w-48 h-48 rounded-full pointer-events-none" style={{background: 'rgba(232, 168, 56, 0.08)', filter: 'blur(60px)'}}></div>
<div className="flex flex-col md:flex-row gap-6 md:gap-8 relative z-10">

<div className="shrink-0">
<div className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center" style={{background: 'rgba(232, 168, 56, 0.12)', border: '1px solid rgba(232, 168, 56, 0.25)'}}>
<iconify-icon className="text-3xl md:text-4xl" icon="solar:shield-warning-linear" style={{color: '#e8a838'}}></iconify-icon>
</div>
</div>

<div className="flex-1">
<h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white mb-4 md:mb-5">
              Florida's New Elevator Code Deadlines Are Here
            </h2>

<ul className="space-y-3 mb-6">
<li className="flex items-start gap-3">
<iconify-icon className="text-lg mt-0.5 shrink-0" icon="solar:danger-circle-linear" style={{color: '#e8a838'}}></iconify-icon>
<span className="text-sm md:text-base text-gray-300 leading-[1.6]">Florida adopted <strong className="text-white font-semibold">ASME A17.1-2019</strong> and <strong className="text-white font-semibold">A17.3-2020</strong> with strict compliance deadlines</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg mt-0.5 shrink-0" icon="solar:danger-circle-linear" style={{color: '#e8a838'}}></iconify-icon>
<span className="text-sm md:text-base text-gray-300 leading-[1.6]"><strong className="text-white font-semibold">Door Lock Monitoring (DLM):</strong> Required by August 2025</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg mt-0.5 shrink-0" icon="solar:danger-circle-linear" style={{color: '#e8a838'}}></iconify-icon>
<span className="text-sm md:text-base text-gray-300 leading-[1.6]"><strong className="text-white font-semibold">Emergency Brakes / UCM Protection:</strong> Required by August 2028</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg mt-0.5 shrink-0" icon="solar:danger-circle-linear" style={{color: '#e8a838'}}></iconify-icon>
<span className="text-sm md:text-base text-gray-300 leading-[1.6]">Non-compliant elevators risk <strong className="text-white font-semibold">violations, fines, and shutdowns</strong></span>
</li>
</ul>
<p className="text-sm md:text-base text-gray-300 leading-[1.6] mb-6">
              Langford Elevator can assess your equipment and build a modernization plan to meet every deadline.
            </p>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm md:text-base font-semibold transition-all w-full sm:w-auto text-center" href="#contact" style={{background: '#e8a838', color: '#0f1629'}}>
              Schedule a Free Compliance Review
              <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-20 px-4 md:px-6 bg-navy-light" id="why-us">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight text-center mb-10 md:mb-14">
        Why Choose Langford
      </h2>
<div className="grid md:grid-cols-3 gap-5 md:gap-6">

<div className="rounded-2xl p-6 md:p-8 transition-all hover:border-steel/30" style={{background: '#1e2540', border: '1px solid #2d3548'}}>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{background: 'rgba(74, 144, 217, 0.1)', border: '1px solid rgba(74, 144, 217, 0.2)'}}>
<iconify-icon className="text-2xl text-steel" icon="solar:map-point-hospital-linear"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-semibold text-white mb-3">Independent, Not Corporate</h3>
<p className="text-sm md:text-base text-textsecondary leading-[1.6]">
            We are not Otis, Schindler, or ThyssenKrupp. We are a locally owned Tampa Bay company that works on all makes and models. No proprietary parts, no locked-in contracts, no corporate overhead added to your bill.
          </p>
</div>

<div className="rounded-2xl p-6 md:p-8 transition-all hover:border-steel/30" style={{background: '#1e2540', border: '1px solid #2d3548'}}>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{background: 'rgba(74, 144, 217, 0.1)', border: '1px solid rgba(74, 144, 217, 0.2)'}}>
<iconify-icon className="text-2xl text-steel" icon="solar:calendar-mark-linear"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-semibold text-white mb-3">20+ Years of Trade Experience</h3>
<p className="text-sm md:text-base text-textsecondary leading-[1.6]">
            Our team has been installing, maintaining, and modernizing elevators in Tampa Bay since 2002. We know the Florida code requirements inside and out.
          </p>
</div>

<div className="rounded-2xl p-6 md:p-8 transition-all hover:border-steel/30" style={{background: '#1e2540', border: '1px solid #2d3548'}}>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{background: 'rgba(74, 144, 217, 0.1)', border: '1px solid rgba(74, 144, 217, 0.2)'}}>
<iconify-icon className="text-2xl text-steel" icon="solar:tag-price-linear"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-semibold text-white mb-3">Fair Pricing, No Lock-Ins</h3>
<p className="text-sm md:text-base text-textsecondary leading-[1.6]">
            We offer competitive rates without long-term contracts. Get a second opinion on your current maintenance agreement. Most building owners are overpaying.
          </p>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-20 px-4 md:px-6 bg-navy" id="services">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-10 md:mb-14">
<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-3">Our Services</h2>
<p className="text-base md:text-lg text-textsecondary">Full-service elevator solutions for commercial and residential properties.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">

<div className="rounded-2xl p-6 md:p-7 transition-all hover:border-steel/30" style={{background: '#1e2540', border: '1px solid #2d3548'}}>
<div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4" style={{background: 'rgba(74, 144, 217, 0.1)', border: '1px solid rgba(74, 144, 217, 0.2)'}}>
<iconify-icon className="text-xl text-steel" icon="solar:arrow-to-top-left-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Elevator Modernization</h3>
<p className="text-sm md:text-base text-textsecondary leading-[1.6]">
            Controller upgrades, door operators, DLM systems, UCM protection, cab interiors, and full code compliance upgrades. We bring aging elevators up to current ASME standards.
          </p>
</div>

<div className="rounded-2xl p-6 md:p-7 transition-all hover:border-steel/30" style={{background: '#1e2540', border: '1px solid #2d3548'}}>
<div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4" style={{background: 'rgba(74, 144, 217, 0.1)', border: '1px solid rgba(74, 144, 217, 0.2)'}}>
<iconify-icon className="text-xl text-steel" icon="solar:wrench-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Elevator Maintenance</h3>
<p className="text-sm md:text-base text-textsecondary leading-[1.6]">
            Monthly and quarterly preventive maintenance contracts with 24/7 emergency service. All makes and models, no proprietary parts restrictions.
          </p>
</div>

<div className="rounded-2xl p-6 md:p-7 transition-all hover:border-steel/30" style={{background: '#1e2540', border: '1px solid #2d3548'}}>
<div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4" style={{background: 'rgba(74, 144, 217, 0.1)', border: '1px solid rgba(74, 144, 217, 0.2)'}}>
<iconify-icon className="text-xl text-steel" icon="solar:clipboard-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Elevator Inspections</h3>
<p className="text-sm md:text-base text-textsecondary leading-[1.6]">
            Annual and periodic testing, QEI-qualified inspections, compliance certifications. We help you stay current with Florida's Bureau of Elevator Safety requirements.
          </p>
</div>

<div className="rounded-2xl p-6 md:p-7 transition-all hover:border-steel/30" style={{background: '#1e2540', border: '1px solid #2d3548'}}>
<div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4" style={{background: 'rgba(74, 144, 217, 0.1)', border: '1px solid rgba(74, 144, 217, 0.2)'}}>
<iconify-icon className="text-xl text-steel" icon="solar:crane-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">New Elevator Installation</h3>
<p className="text-sm md:text-base text-textsecondary leading-[1.6]">
            Hydraulic and traction elevators for new commercial construction, multi-family developments, and mixed-use projects across Tampa Bay.
          </p>
</div>

<div className="rounded-2xl p-6 md:p-7 transition-all hover:border-steel/30" style={{background: '#1e2540', border: '1px solid #2d3548'}}>
<div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4" style={{background: 'rgba(74, 144, 217, 0.1)', border: '1px solid rgba(74, 144, 217, 0.2)'}}>
<iconify-icon className="text-xl text-steel" icon="solar:wheelchair-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Wheelchair Lifts and Accessibility</h3>
<p className="text-sm md:text-base text-textsecondary leading-[1.6]">
            ADA-compliant vertical and inclined platform lifts, expertly installed for residential and commercial accessibility needs.
          </p>
</div>

<div className="rounded-2xl p-6 md:p-7 transition-all hover:border-steel/30" style={{background: '#1e2540', border: '1px solid #2d3548'}}>
<div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4" style={{background: 'rgba(74, 144, 217, 0.1)', border: '1px solid rgba(74, 144, 217, 0.2)'}}>
<iconify-icon className="text-xl text-steel" icon="solar:box-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Dumbwaiters and Cargo Lifts</h3>
<p className="text-sm md:text-base text-textsecondary leading-[1.6]">
            Commercial dumbwaiters for restaurants, hospitals, and hotels. Cargo lifts for industrial and warehouse use.
          </p>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-20 px-4 md:px-6 bg-navy-light">
<div className="max-w-3xl mx-auto text-center">
<div className="rounded-2xl p-8 md:p-12 relative" style={{background: '#1e2540', border: '1px solid #2d3548'}}>

<div className="mb-6">
<iconify-icon className="text-4xl text-steel opacity-40" icon="solar:chat-round-dots-linear"></iconify-icon>
</div>
<blockquote className="text-lg md:text-xl lg:text-2xl font-normal text-white leading-[1.6] mb-6" style={{fontStyle: 'italic'}}>
          "They cleared up our problems. They get the job done. They come on the same day and will come on the weekend. They are very reliable and dependable."
        </blockquote>

<div className="flex items-center justify-center gap-1 mb-4">
<iconify-icon className="text-xl" icon="solar:star-bold" style={{color: '#e8a838'}}></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold" style={{color: '#e8a838'}}></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold" style={{color: '#e8a838'}}></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold" style={{color: '#e8a838'}}></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold" style={{color: '#e8a838'}}></iconify-icon>
</div>
<p className="text-sm text-textsecondary font-medium">— HomeAdvisor Review, Tampa FL</p>
</div>
</div>
</section>

<section className="py-12 md:py-20 px-4 md:px-6 bg-navy" id="about">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-10 md:mb-14">
<span className="text-xs font-semibold tracking-[0.2em] uppercase text-steel mb-3 block">Our Process</span>
<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">How It Works</h2>
</div>
<div className="grid md:grid-cols-3 gap-10 md:gap-8 relative">

<div className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-px" style={{background: '#2d3548'}}></div>

<div className="flex flex-col items-center text-center">
<div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold mb-5 md:mb-6 relative z-10 text-steel" style={{background: '#1e2540', border: '2px solid #2d3548'}}>
            1
          </div>
<h3 className="text-lg md:text-xl font-semibold text-white mb-3">Free Assessment</h3>
<p className="text-sm md:text-base text-textsecondary leading-[1.6] max-w-xs">
            We inspect your elevators, review your current maintenance contract, and identify any code compliance gaps. No obligation.
          </p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold mb-5 md:mb-6 relative z-10 text-steel" style={{background: '#1e2540', border: '2px solid #2d3548'}}>
            2
          </div>
<h3 className="text-lg md:text-xl font-semibold text-white mb-3">Custom Proposal</h3>
<p className="text-sm md:text-base text-textsecondary leading-[1.6] max-w-xs">
            We build a plan with clear pricing, no hidden fees, no proprietary parts, and a timeline that works for your building.
          </p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold mb-5 md:mb-6 relative z-10 text-steel" style={{background: '#1e2540', border: '2px solid #2d3548'}}>
            3
          </div>
<h3 className="text-lg md:text-xl font-semibold text-white mb-3">Ongoing Service</h3>
<p className="text-sm md:text-base text-textsecondary leading-[1.6] max-w-xs">
            We maintain your equipment, handle inspections, and keep you compliant. One point of contact for everything.
          </p>
</div>
</div>
</div>
</section>

<section className="py-10 md:py-16 px-4 md:px-6" style={{background: '#151d33'}}>
<div className="max-w-5xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
<div className="text-center">
<div className="text-3xl md:text-4xl font-bold text-white mb-1">20+</div>
<div className="text-sm text-textsecondary">Years in Tampa Bay</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-bold text-white mb-1">All</div>
<div className="text-sm text-textsecondary">Makes and Models</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-bold text-white mb-1">24/7</div>
<div className="text-sm text-textsecondary">Emergency Service</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-bold text-white mb-1">100%</div>
<div className="text-sm text-textsecondary">Code Compliance Focus</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-20 px-4 md:px-6 bg-navy-light" id="areas">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight text-center mb-10 md:mb-14">
        Who We Work With
      </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">

<div className="rounded-2xl p-6 text-center" style={{background: '#1e2540', border: '1px solid #2d3548'}}>
<div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4" style={{background: 'rgba(74, 144, 217, 0.1)'}}>
<iconify-icon className="text-2xl text-steel" icon="solar:key-linear"></iconify-icon>
</div>
<h4 className="text-base font-semibold text-white mb-2">Property Managers</h4>
<p className="text-sm md:text-base text-textsecondary leading-[1.6]">Commercial offices, mid-rise buildings, mixed-use developments, and retail centres with elevator maintenance and modernization needs.</p>
</div>

<div className="rounded-2xl p-6 text-center" style={{background: '#1e2540', border: '1px solid #2d3548'}}>
<div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4" style={{background: 'rgba(74, 144, 217, 0.1)'}}>
<iconify-icon className="text-2xl text-steel" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h4 className="text-base font-semibold text-white mb-2">HOA Boards</h4>
<p className="text-sm md:text-base text-textsecondary leading-[1.6]">High-rise and mid-rise condo buildings with aging elevators facing Florida's new code compliance deadlines.</p>
</div>

<div className="rounded-2xl p-6 text-center" style={{background: '#1e2540', border: '1px solid #2d3548'}}>
<div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4" style={{background: 'rgba(74, 144, 217, 0.1)'}}>
<iconify-icon className="text-2xl text-steel" icon="solar:sledgehammer-linear"></iconify-icon>
</div>
<h4 className="text-base font-semibold text-white mb-2">General Contractors</h4>
<p className="text-sm md:text-base text-textsecondary leading-[1.6]">New construction elevator installations for commercial, multi-family, and mixed-use projects across Tampa Bay.</p>
</div>

<div className="rounded-2xl p-6 text-center" style={{background: '#1e2540', border: '1px solid #2d3548'}}>
<div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4" style={{background: 'rgba(74, 144, 217, 0.1)'}}>
<iconify-icon className="text-2xl text-steel" icon="solar:clipboard-list-linear"></iconify-icon>
</div>
<h4 className="text-base font-semibold text-white mb-2">Facilities Directors</h4>
<p className="text-sm md:text-base text-textsecondary leading-[1.6]">Hotels, hospitals, medical offices, and corporate campuses with ongoing elevator service and inspection needs.</p>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-20 px-4 md:px-6 bg-navy relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(74,144,217,0.15),_transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(74,144,217,0.08),_transparent_60%)]"></div>
<div className="relative z-10 max-w-3xl mx-auto text-center">
<div className="rounded-2xl p-8 md:p-14" style={{background: '#1e2540', border: '1px solid #2d3548'}}>
<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4 md:mb-5">
          Get a Free Elevator Assessment
        </h2>
<p className="text-base md:text-lg text-textsecondary leading-[1.6] mb-8 md:mb-10 max-w-xl mx-auto">
          We will inspect your equipment, review your maintenance contract, and identify any code compliance gaps. No obligation.
        </p>
<div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center max-w-lg mx-auto">
<a className="w-full sm:w-1/2 px-6 py-4 rounded-lg text-sm md:text-base font-semibold bg-steel text-white hover:bg-steel-hover transition-all text-center" href="#">
            Request Your Free Assessment
          </a>
<a className="w-full sm:w-1/2 px-6 py-4 rounded-lg text-sm md:text-base font-semibold border-2 text-white transition-all text-center" href="tel:8133688137" style={{borderColor: '#2d3548', background: 'rgba(255,255,255,0.03)'}}>
            Call (813) 368-8137
          </a>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-20 px-4 md:px-6 bg-navy-light">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight text-center mb-10 md:mb-12">
        Frequently Asked Questions
      </h2>
<div className="space-y-3" id="faqContainer">

<details className="group faq-item rounded-xl overflow-hidden" style={{background: '#1e2540', border: '1px solid #2d3548'}}>
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer select-none text-white text-sm md:text-base font-medium" style={{minHeight: '48px'}}>
            What areas do you serve?
            <iconify-icon className="text-xl transition-transform duration-300 group-open:rotate-180 text-textsecondary shrink-0 ml-4" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base text-textsecondary leading-[1.6]" style={{borderTop: '1px solid #2d3548', paddingTop: '16px'}}>
            Tampa, St. Petersburg, Clearwater, and all of Hillsborough, Pinellas, Pasco, and Manatee counties.
          </div>
</details>

<details className="group faq-item rounded-xl overflow-hidden" style={{background: '#1e2540', border: '1px solid #2d3548'}}>
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer select-none text-white text-sm md:text-base font-medium" style={{minHeight: '48px'}}>
            Do you work on all elevator brands?
            <iconify-icon className="text-xl transition-transform duration-300 group-open:rotate-180 text-textsecondary shrink-0 ml-4" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base text-textsecondary leading-[1.6]" style={{borderTop: '1px solid #2d3548', paddingTop: '16px'}}>
            Yes. We service all makes and models including Otis, Schindler, ThyssenKrupp, KONE, Mitsubishi, and more. No proprietary restrictions.
          </div>
</details>

<details className="group faq-item rounded-xl overflow-hidden" style={{background: '#1e2540', border: '1px solid #2d3548'}}>
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer select-none text-white text-sm md:text-base font-medium" style={{minHeight: '48px'}}>
            Can you help with Florida code compliance?
            <iconify-icon className="text-xl transition-transform duration-300 group-open:rotate-180 text-textsecondary shrink-0 ml-4" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base text-textsecondary leading-[1.6]" style={{borderTop: '1px solid #2d3548', paddingTop: '16px'}}>
            Yes. We assess your equipment against ASME A17.1-2019 and A17.3-2020 requirements and build a modernization plan to meet all deadlines.
          </div>
</details>

<details className="group faq-item rounded-xl overflow-hidden" style={{background: '#1e2540', border: '1px solid #2d3548'}}>
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer select-none text-white text-sm md:text-base font-medium" style={{minHeight: '48px'}}>
            Do you offer maintenance contracts?
            <iconify-icon className="text-xl transition-transform duration-300 group-open:rotate-180 text-textsecondary shrink-0 ml-4" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base text-textsecondary leading-[1.6]" style={{borderTop: '1px solid #2d3548', paddingTop: '16px'}}>
            Yes. Monthly and quarterly preventive maintenance with 24/7 emergency service. No long-term lock-in required.
          </div>
</details>

<details className="group faq-item rounded-xl overflow-hidden" style={{background: '#1e2540', border: '1px solid #2d3548'}}>
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer select-none text-white text-sm md:text-base font-medium" style={{minHeight: '48px'}}>
            How quickly can you respond to emergencies?
            <iconify-icon className="text-xl transition-transform duration-300 group-open:rotate-180 text-textsecondary shrink-0 ml-4" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base text-textsecondary leading-[1.6]" style={{borderTop: '1px solid #2d3548', paddingTop: '16px'}}>
            We offer 24/7 emergency service across Tampa Bay with same-day response in most cases.
          </div>
</details>

<details className="group faq-item rounded-xl overflow-hidden" style={{background: '#1e2540', border: '1px solid #2d3548'}}>
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer select-none text-white text-sm md:text-base font-medium" style={{minHeight: '48px'}}>
            Can you provide a second opinion on our current maintenance contract?
            <iconify-icon className="text-xl transition-transform duration-300 group-open:rotate-180 text-textsecondary shrink-0 ml-4" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base text-textsecondary leading-[1.6]" style={{borderTop: '1px solid #2d3548', paddingTop: '16px'}}>
            Yes. We review your existing agreement and identify areas where you may be overpaying or underserviced. The review is free.
          </div>
</details>

<details className="group faq-item rounded-xl overflow-hidden" style={{background: '#1e2540', border: '1px solid #2d3548'}}>
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer select-none text-white text-sm md:text-base font-medium" style={{minHeight: '48px'}}>
            How do I get a quote?
            <iconify-icon className="text-xl transition-transform duration-300 group-open:rotate-180 text-textsecondary shrink-0 ml-4" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base text-textsecondary leading-[1.6]" style={{borderTop: '1px solid #2d3548', paddingTop: '16px'}}>
            Call (813) 368-8137 or submit a request through our contact form. We provide free assessments for all commercial properties.
          </div>
</details>
</div>
</div>
</section>
</main>

<footer className="py-12 md:py-16 px-4 md:px-6" style={{background: '#0a0f1e', borderTop: '1px solid #2d3548'}}>
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-10 text-center md:text-left">
<div>
<a className="text-xl tracking-tight font-bold text-white mb-3 inline-block" href="#">Langford Elevator LLC</a>
<p className="text-sm text-textsecondary mb-1">Tampa, FL  |  (813) 368-8137</p>
<p className="text-sm text-textsecondary mb-4">langfordelevator.com</p>
<p className="text-xs text-textsecondary opacity-70">Licensed and Insured  |  Serving Tampa Bay Since 2002</p>
</div>
<div className="flex flex-col gap-3 text-center md:text-right">
<a className="text-sm text-textsecondary hover:text-steel transition-colors" href="#services">Services</a>
<a className="text-sm text-textsecondary hover:text-steel transition-colors" href="#why-us">Why Langford</a>
<a className="text-sm text-textsecondary hover:text-steel transition-colors" href="#about">About</a>
<a className="text-sm text-textsecondary hover:text-steel transition-colors" href="#areas">Service Area</a>
</div>
</div>
<div className="mt-12 md:mt-16 pt-8 text-center text-xs text-textsecondary opacity-50" style={{borderTop: '1px solid #2d3548'}}>
<p>© 2026 Langford Elevator LLC. All rights reserved.</p>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 right-0 p-4 md:hidden z-50" style={{background: 'rgba(15, 22, 41, 0.95)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderTop: '1px solid #2d3548'}}>
<a className="flex w-full items-center justify-center gap-2 bg-steel text-white py-3.5 rounded-lg font-semibold text-sm shadow-lg hover:bg-steel-hover transition-all" href="#contact">
    Get a Free Assessment
    <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>


    </>
  );
}
