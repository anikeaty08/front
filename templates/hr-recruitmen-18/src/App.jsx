import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Geist Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
display: ['Geist Sans', 'Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#f5f5f7',
100: '#e5e5ea',
200: '#d1d1d6',
500: '#007AFF',
600: '#0056b3',
900: '#0c4a6e',
}
},
boxShadow: {
'bevel': '0 8px 40px rgba(0,0,0,0.12)',
}
}
}
}



      (function() {
          const canvas = document.getElementById('hero-canvas');
          if (!canvas) return;
          const ctx = canvas.getContext('2d');
          let width, height;
          let particles = [];

          function resize() {
              width = canvas.width = canvas.parentElement.offsetWidth;
              height = canvas.height = canvas.parentElement.offsetHeight;
              initParticles();
          }

          function initParticles() {
              particles = [];
              // Calculate density based on screen size
              const count = Math.floor(width * height / 15000);
              for (let i = 0; i < count; i++) {
                  particles.push({
                      x: Math.random() * width,
                      y: Math.random() * height,
                      vx: (Math.random() - 0.5) * 0.4,
                      vy: (Math.random() - 0.5) * 0.4,
                      size: Math.random() * 2 + 1
                  });
              }
          }

          function animate() {
              ctx.clearRect(0, 0, width, height);
              particles.forEach((p, i) => {
                  p.x += p.vx;
                  p.y += p.vy;
                  // Bounce off edges
                  if (p.x < 0 || p.x > width) p.vx *= -1;
                  if (p.y < 0 || p.y > height) p.vy *= -1;

                  ctx.beginPath();
                  ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                  ctx.fillStyle = 'rgba(14, 165, 233, 0.4)'; // Brand-500
                  ctx.fill();

                  // Draw connections
                  for (let j = i + 1; j < particles.length; j++) {
                      const p2 = particles[j];
                      const dx = p.x - p2.x;
                      const dy = p.y - p2.y;
                      const dist = Math.sqrt(dx * dx + dy * dy);
                      if (dist < 120) {
                          ctx.beginPath();
                          ctx.strokeStyle = `rgba(14, 165, 233, ${0.15 * (1 - dist / 120)})`;
                          ctx.lineWidth = 0.5;
                          ctx.moveTo(p.x, p.y);
                          ctx.lineTo(p2.x, p2.y);
                          ctx.stroke();
                      }
                  }
              });
              requestAnimationFrame(animate);
          }

          window.addEventListener('resize', resize);
          resize();
          animate();
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-2xl border-b border-white/20 supports-[backdrop-filter]:bg-white/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="font-display font-semibold text-2xl tracking-tighter text-slate-900" href="#">
          XANTHI
          <span className="text-brand-500">&amp;</span>
          ASSOCIATES
        </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-brand-500 transition-colors" href="#services">
            Services
          </a>
<a className="hover:text-brand-500 transition-colors" href="#about">
            About
          </a>
<a className="hover:text-brand-500 transition-colors" href="#insights">
            Insights
          </a>
</div>
<a className="hidden md:flex items-center gap-2 bg-white border border-brand-200 px-4 py-2 text-sm font-semibold hover:border-brand-500 transition-colors shadow-sm rounded-full" href="#contact">
          Book a Call
          <span className="iconify" data-icon="lucide:arrow-right"></span>
</a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<canvas className="absolute inset-0 w-full h-full pointer-events-none opacity-70" id="hero-canvas"></canvas>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="animate-fade-in z-10">

<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-200 mb-8 shadow-sm hover:scale-105 transition-transform cursor-default">
<span className="iconify text-brand-500" data-icon="lucide:sparkles"></span>
<span className="text-xs md:text-sm font-medium text-slate-600">
              Growth doesn’t come from hiring more people. It comes from hiring
              the
              <strong>right</strong>
              people.
            </span>
</div>
<h1 className="font-display font-semibold text-6xl md:text-[80px] leading-[1.1] tracking-tight text-slate-900 mb-6 tracking-tighter">
            Build a Stronger Workforce with
            <span className="text-brand-500">World-Class</span>
            HR Solutions
          </h1>
<p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
            Recruitment. Outsourcing. HR Consulting. Learning &amp; Development.
            Your end-to-end people partner — trusted in Ghana and across the
            globe.
          </p>
<div className="flex flex-col sm:flex-row gap-4 mb-8">
<button className="bg-brand-500 text-white px-8 py-4 font-semibold text-base shadow-lg shadow-brand-500/20 hover:bg-brand-600 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 rounded-full">
<span className="iconify" data-icon="lucide:calendar"></span>
              Book a Free Discovery Call
            </button>
<button className="bg-white border border-brand-200 text-slate-700 px-8 py-4 font-semibold text-base hover:border-brand-500 hover:text-brand-500 transition-all flex items-center justify-center gap-2 rounded-full">
              Speak to a Talent Consultant
            </button>
</div>
<p className="text-sm text-slate-500 flex items-center gap-2">
<span className="iconify text-green-500" data-icon="lucide:check-circle"></span>
            Six years of delivering exceptional people solutions.
          </p>
</div>

<div className="relative animate-fade-in delay-200 perspective-1000">
<div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/50 shadow-2xl shadow-brand-900/10 bg-white transition-transform duration-700 ease-out hover:scale-[1.01]">

<img alt="Diverse professional team collaborating" className="w-full h-auto object-cover opacity-90 grayscale-[20%]" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur border border-brand-200 p-4 rounded-xl shadow-lg flex items-center gap-4 animate-bounce duration-[3000ms]">
<div className="bg-brand-100 p-2 rounded-lg text-brand-500">
<span className="iconify w-6 h-6" data-icon="lucide:trending-up"></span>
</div>
<div>
<p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                  Retention Rate
                </p>
<p className="text-lg font-display font-semibold text-slate-900">
                  95%
                </p>
</div>
</div>
</div>

<div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-200/50 rounded-full blur-3xl -z-10"></div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-brand-200">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight text-slate-900 mb-6">
            The HR Partner That Helps You Hire Better, Manage Better &amp; Grow
            Better
          </h2>
<p className="text-lg text-slate-600 leading-relaxed">
            Every organization wants to grow — but growth only happens when the
            right people are in the right roles. At Xanthi &amp; Associates, we
            bridge the gap between ambition and execution. We are your strategic
            people partner, not just another service provider.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl border border-brand-200 bg-brand-50 hover:border-brand-500 transition-colors group">
<div className="w-12 h-12 bg-white rounded-lg border border-brand-200 flex items-center justify-center text-brand-500 mb-6 group-hover:scale-110 transition-transform shadow-sm">
<span className="iconify w-6 h-6" data-icon="lucide:puzzle"></span>
</div>
<h3 className="font-display font-semibold text-xl mb-3">
              Tailored, Not Template
            </h3>
<p className="text-slate-600 text-sm leading-relaxed">
              Every company is different. We craft bespoke HR strategies that
              align perfectly with your unique business goals.
            </p>
</div>

<div className="p-8 rounded-2xl border border-brand-200 bg-brand-50 hover:border-brand-500 transition-colors group">
<div className="w-12 h-12 bg-white rounded-lg border border-brand-200 flex items-center justify-center text-brand-500 mb-6 group-hover:scale-110 transition-transform shadow-sm">
<span className="iconify w-6 h-6" data-icon="lucide:globe-2"></span>
</div>
<h3 className="font-display font-semibold text-xl mb-3">
              Internationally Aligned
            </h3>
<p className="text-slate-600 text-sm leading-relaxed">
              Expertise that meets global standards while understanding the
              nuance of local realities in Ghana and Africa.
            </p>
</div>

<div className="p-8 rounded-2xl border border-brand-200 bg-brand-50 hover:border-brand-500 transition-colors group">
<div className="w-12 h-12 bg-white rounded-lg border border-brand-200 flex items-center justify-center text-brand-500 mb-6 group-hover:scale-110 transition-transform shadow-sm">
<span className="iconify w-6 h-6" data-icon="lucide:shield-check"></span>
</div>
<h3 className="font-display font-semibold text-xl mb-3">
              Ethical Recruitment
            </h3>
<p className="text-slate-600 text-sm leading-relaxed">
              We ensure fair hiring practices, protecting your employer brand
              and treating every candidate with dignity.
            </p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-brand-50 border-b border-brand-200 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-10">
          Trusted by forward-thinking companies worldwide
        </p>

<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-display font-bold tracking-tighter">
            FINCORP
          </span>
<span className="text-xl font-display font-bold tracking-tighter">
            TECHFLOW
          </span>
<span className="text-xl font-display font-bold tracking-tighter">
            GLOBAL
            <span className="font-light">MINING</span>
</span>
<span className="text-xl font-display font-bold tracking-tighter">
            AGRO
            <span className="italic">SYSTEMS</span>
</span>
<span className="text-xl font-display font-bold tracking-tighter">
            CONSTRUCT
            <span className="text-brand-500">GH</span>
</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 border-t border-brand-200 pt-10">
<div>
<p className="text-4xl font-display font-semibold text-brand-500">6+</p>
<p className="text-xs font-semibold uppercase text-slate-500 mt-2">
              Years of Excellence
            </p>
</div>
<div>
<p className="text-4xl font-display font-semibold text-brand-500">
              1k+
            </p>
<p className="text-xs font-semibold uppercase text-slate-500 mt-2">
              Placements Made
            </p>
</div>
<div>
<p className="text-4xl font-display font-semibold text-brand-500">
              95%
            </p>
<p className="text-xs font-semibold uppercase text-slate-500 mt-2">
              Client Satisfaction
            </p>
</div>
<div>
<p className="text-4xl font-display font-semibold text-brand-500">0%</p>
<p className="text-xs font-semibold uppercase text-slate-500 mt-2">
              Recruitment Fees to Workers
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight text-slate-900 mb-4">
            Our Core HR Solutions
          </h2>
<p className="text-slate-600">
            Comprehensive services designed to power every stage of your
            company's growth.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative p-8 bg-white border border-brand-200 rounded-2xl hover:border-brand-500 hover:shadow-bevel hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center text-brand-500 mb-6 border border-brand-100">
<span className="iconify" data-icon="lucide:users"></span>
</div>
<h3 className="font-display font-semibold text-xl mb-2">
              International &amp; Local Recruitment
            </h3>
<p className="text-sm text-slate-600 mb-6">
              Fast delivery of top-tier candidates. Ethical, no-fee recruitment
              for migrant workers ensuring compliance.
            </p>
<a className="inline-flex items-center text-sm font-semibold text-brand-500 hover:gap-2 transition-all" href="#">
              Request Talent
              <span className="iconify ml-1" data-icon="lucide:arrow-right"></span>
</a>
</div>

<div className="group relative p-8 bg-white border border-brand-200 rounded-2xl hover:border-brand-500 hover:shadow-bevel hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center text-brand-500 mb-6 border border-brand-100">
<span className="iconify" data-icon="lucide:briefcase"></span>
</div>
<h3 className="font-display font-semibold text-xl mb-2">
              Outsourcing Solutions
            </h3>
<p className="text-sm text-slate-600 mb-6">
              Reduce overhead. We handle payroll, HR admin, and compliance so
              you can focus on strategy.
            </p>
<a className="inline-flex items-center text-sm font-semibold text-brand-500 hover:gap-2 transition-all" href="#">
              Explore Outsourcing
              <span className="iconify ml-1" data-icon="lucide:arrow-right"></span>
</a>
</div>

<div className="group relative p-8 bg-white border border-brand-200 rounded-2xl hover:border-brand-500 hover:shadow-bevel hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center text-brand-500 mb-6 border border-brand-100">
<span className="iconify" data-icon="lucide:book-open"></span>
</div>
<h3 className="font-display font-semibold text-xl mb-2">
              Learning &amp; Development
            </h3>
<p className="text-sm text-slate-600 mb-6">
              Leadership development, staff training programs, and customized
              learning paths to build capability.
            </p>
<a className="inline-flex items-center text-sm font-semibold text-brand-500 hover:gap-2 transition-all" href="#">
              Build Team Capability
              <span className="iconify ml-1" data-icon="lucide:arrow-right"></span>
</a>
</div>

<div className="group relative p-8 bg-white border border-brand-200 rounded-2xl hover:border-brand-500 hover:shadow-bevel hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center text-brand-500 mb-6 border border-brand-100">
<span className="iconify" data-icon="lucide:plane"></span>
</div>
<h3 className="font-display font-semibold text-xl mb-2">
              Expat Management
            </h3>
<p className="text-sm text-slate-600 mb-6">
              Full support for relocating talent including legal compliance,
              logistics, and integration support.
            </p>
<a className="inline-flex items-center text-sm font-semibold text-brand-500 hover:gap-2 transition-all" href="#">
              Manage Expatriates
              <span className="iconify ml-1" data-icon="lucide:arrow-right"></span>
</a>
</div>

<div className="group relative p-8 bg-white border border-brand-200 rounded-2xl hover:border-brand-500 hover:shadow-bevel hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center text-brand-500 mb-6 border border-brand-100">
<span className="iconify" data-icon="lucide:map-pin"></span>
</div>
<h3 className="font-display font-semibold text-xl mb-2">
              Migration Solutions
            </h3>
<p className="text-sm text-slate-600 mb-6">
              Settlement support and cultural training for international hires
              to ensure smooth transitions.
            </p>
<a className="inline-flex items-center text-sm font-semibold text-brand-500 hover:gap-2 transition-all" href="#">
              Explore Migration
              <span className="iconify ml-1" data-icon="lucide:arrow-right"></span>
</a>
</div>

<div className="group relative p-8 bg-white border border-brand-200 rounded-2xl hover:border-brand-500 hover:shadow-bevel hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center text-brand-500 mb-6 border border-brand-100">
<span className="iconify" data-icon="lucide:bar-chart-3"></span>
</div>
<h3 className="font-display font-semibold text-xl mb-2">
              HR Consulting
            </h3>
<p className="text-sm text-slate-600 mb-6">
              HRIS implementation, organizational design, audits, and policy
              development for smarter operations.
            </p>
<a className="inline-flex items-center text-sm font-semibold text-brand-500 hover:gap-2 transition-all" href="#">
              Speak to a Consultant
              <span className="iconify ml-1" data-icon="lucide:arrow-right"></span>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-50 border-t border-brand-200">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight text-slate-900 mb-12 text-center">
          Real Results from Real Organizations
        </h2>
<div className="grid lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-brand-200 shadow-sm">
<div className="mb-4">
<span className="text-xs font-bold text-brand-500 uppercase tracking-wider bg-brand-50 px-2 py-1 rounded">
                FinTech
              </span>
</div>
<h3 className="font-display font-semibold text-xl mb-3">
              Scaling a FinTech Team
            </h3>
<p className="text-sm text-slate-600 mb-6">
              Reduced hiring time from 60 to 17 days while placing 14 critical
              technical hires.
            </p>
<div className="flex items-center gap-3 border-t border-brand-100 pt-4">
<span className="iconify text-brand-500" data-icon="lucide:trending-up"></span>
<span className="text-sm font-semibold text-slate-900">
                3.5x Faster Hiring
              </span>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-brand-200 shadow-sm">
<div className="mb-4">
<span className="text-xs font-bold text-brand-500 uppercase tracking-wider bg-brand-50 px-2 py-1 rounded">
                Manufacturing
              </span>
</div>
<h3 className="font-display font-semibold text-xl mb-3">
              Outsourcing Admin
            </h3>
<p className="text-sm text-slate-600 mb-6">
              Full HR outsourcing leading to zero compliance breaches and
              optimized processes.
            </p>
<div className="flex items-center gap-3 border-t border-brand-100 pt-4">
<span className="iconify text-brand-500" data-icon="lucide:check-square"></span>
<span className="text-sm font-semibold text-slate-900">
                30% Workload Reduction
              </span>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-brand-200 shadow-sm">
<div className="mb-4">
<span className="text-xs font-bold text-brand-500 uppercase tracking-wider bg-brand-50 px-2 py-1 rounded">
                Retail
              </span>
</div>
<h3 className="font-display font-semibold text-xl mb-3">
              L&amp;D Transformation
            </h3>
<p className="text-sm text-slate-600 mb-6">
              Customized leadership training resulting in higher productivity
              and customer scores.
            </p>
<div className="flex items-center gap-3 border-t border-brand-100 pt-4">
<span className="iconify text-brand-500" data-icon="lucide:shopping-bag"></span>
<span className="text-sm font-semibold text-slate-900">
                22% Productivity Boost
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white relative overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="w-16 h-16 bg-brand-500 rounded-2xl mx-auto mb-8 flex items-center justify-center rotate-3 shadow-lg shadow-brand-500/50">
<span className="iconify w-8 h-8 text-white" data-icon="lucide:heart-handshake"></span>
</div>
<h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight mb-6">
          Ethical, Transparent Recruitment.
          <br/>
<span className="text-brand-500">Always.</span>
</h2>
<p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
          We uphold the highest international labor standards. We
          <span className="text-white font-semibold">never</span>
          charge recruitment fees to migrant job seekers. This protects talent,
          builds trust, and strengthens your brand.
        </p>
<a className="inline-block border border-slate-700 hover:bg-white/10 hover:border-white text-sm font-semibold px-6 py-3 rounded-lg transition-all" href="#">
          Report Recruitment Fee Abuse
        </a>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight text-slate-900 mb-4">
            Meet the People Behind the Solutions
          </h2>
<p className="text-slate-600 max-w-2xl">
            Deep cross-industry experience, global best practices, and a
            human-first approach to people management.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group">
<div className="aspect-[4/5] bg-brand-100 rounded-xl mb-4 overflow-hidden border border-brand-200">
<img alt="Team member" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<h3 className="font-display font-semibold text-lg text-slate-900">
              Sarah Osei
            </h3>
<p className="text-sm text-brand-500 font-medium">Managing Partner</p>
</div>

<div className="group">
<div className="aspect-[4/5] bg-brand-100 rounded-xl mb-4 overflow-hidden border border-brand-200">
<img alt="Team member" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<h3 className="font-display font-semibold text-lg text-slate-900">
              David Mensah
            </h3>
<p className="text-sm text-brand-500 font-medium">
              Head of Recruitment
            </p>
</div>

<div className="group">
<div className="aspect-[4/5] bg-brand-100 rounded-xl mb-4 overflow-hidden border border-brand-200">
<img alt="Team member" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<h3 className="font-display font-semibold text-lg text-slate-900">
              Amara Okafor
            </h3>
<p className="text-sm text-brand-500 font-medium">L&amp;D Specialist</p>
</div>

<div className="group">
<div className="aspect-[4/5] bg-brand-100 rounded-xl mb-4 overflow-hidden border border-brand-200">
<img alt="Team member" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<h3 className="font-display font-semibold text-lg text-slate-900">
              James Doe
            </h3>
<p className="text-sm text-brand-500 font-medium">HR Consultant</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-50 border-y border-brand-200" id="insights">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="font-display font-semibold text-4xl tracking-tight text-slate-900 mb-2">
              Insights &amp; Strategy
            </h2>
<p className="text-slate-600">
              HR best practices and talent management guides.
            </p>
</div>
<a className="hidden md:inline-flex items-center text-sm font-semibold text-brand-500 hover:underline" href="#">
            Read all articles
            <span className="iconify ml-1" data-icon="lucide:arrow-right"></span>
</a>
</div>
<div className="grid md:grid-cols-2 gap-8">
<a className="group block bg-white border border-brand-200 rounded-2xl p-1 hover:border-brand-500 transition-colors" href="#">
<div className="h-48 bg-slate-100 rounded-xl overflow-hidden mb-4 relative">

<div className="absolute inset-0 bg-gradient-to-br from-brand-100 to-white"></div>
</div>
<div className="px-4 pb-4">
<span className="text-xs font-bold text-brand-500 uppercase">
                Recruitment
              </span>
<h3 className="font-display font-semibold text-xl mt-2 mb-2 group-hover:text-brand-500 transition-colors">
                5 Signs You Need an RPO Solution
              </h3>
<p className="text-sm text-slate-600">
                How to identify when your internal team needs external support
                to scale effectively.
              </p>
</div>
</a>
<a className="group block bg-white border border-brand-200 rounded-2xl p-1 hover:border-brand-500 transition-colors" href="#">
<div className="h-48 bg-slate-100 rounded-xl overflow-hidden mb-4 relative">

<div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-brand-100"></div>
</div>
<div className="px-4 pb-4">
<span className="text-xs font-bold text-brand-500 uppercase">
                Leadership
              </span>
<h3 className="font-display font-semibold text-xl mt-2 mb-2 group-hover:text-brand-500 transition-colors">
                Developing Leaders in Remote Teams
              </h3>
<p className="text-sm text-slate-600">
                Strategies for maintaining culture and performance in
                distributed workforces.
              </p>
</div>
</a>
</div>
</div>
</section>

<section className="py-32 bg-white text-center px-6" id="contact">
<div className="max-w-3xl mx-auto animate-fade-in">
<h2 className="font-display font-semibold text-5xl md:text-6xl tracking-tight text-slate-900 mb-6">
          Ready to Build a Workforce That Moves You Forward?
        </h2>
<p className="text-xl text-slate-600 mb-10">
          Let’s help you hire better, manage better, and grow better.
        </p>
<div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
<button className="bg-brand-500 text-white px-10 py-4 font-semibold text-lg shadow-lg shadow-brand-500/25 hover:bg-brand-600 transition-all hover:-translate-y-1 rounded-full">
            Book a Free Discovery Call
          </button>
<button className="bg-white border border-brand-200 text-slate-700 px-10 py-4 font-semibold text-lg hover:border-brand-500 hover:text-brand-500 transition-all rounded-full">
            Tell Us Your Needs
          </button>
</div>
<div className="inline-flex items-center gap-6 text-sm font-medium text-slate-500 border border-brand-100 bg-brand-50 px-6 py-2 rounded-full">
<span className="flex items-center gap-2">
<span className="iconify text-brand-500" data-icon="lucide:shield-check"></span>
            Ethical
          </span>
<span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span className="flex items-center gap-2">
<span className="iconify text-brand-500" data-icon="lucide:eye"></span>
            Transparent
          </span>
<span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span className="flex items-center gap-2">
<span className="iconify text-brand-500" data-icon="lucide:globe"></span>
            World-Class
          </span>
</div>
</div>
</section>

<footer className="bg-brand-50 pt-20 pb-10 border-t border-brand-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="font-display font-semibold text-xl tracking-tighter text-slate-900 block mb-6" href="#">
              XANTHI
              <span className="text-brand-500">&amp;</span>
              ASSOCIATES
            </a>
<div className="space-y-4 text-sm text-slate-600">
<p className="flex items-start gap-3">
<span className="iconify mt-1 text-brand-500" data-icon="lucide:map-pin"></span>
                Accra, Ghana
                <br/>
                Available Globally
              </p>
<p className="flex items-center gap-3">
<span className="iconify text-brand-500" data-icon="lucide:mail"></span>
                hello@xanthi.com
              </p>
<div className="flex gap-4 pt-2">
<a className="text-slate-400 hover:text-brand-500" href="#">
<span className="iconify w-5 h-5" data-icon="lucide:linkedin"></span>
</a>
<a className="text-slate-400 hover:text-brand-500" href="#">
<span className="iconify w-5 h-5" data-icon="lucide:twitter"></span>
</a>
<a className="text-slate-400 hover:text-brand-500" href="#">
<span className="iconify w-5 h-5" data-icon="lucide:instagram"></span>
</a>
</div>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Services</h4>
<ul className="space-y-3 text-sm text-slate-600">
<li><a className="hover:text-brand-500" href="#">Recruitment</a></li>
<li><a className="hover:text-brand-500" href="#">Outsourcing</a></li>
<li>
<a className="hover:text-brand-500" href="#">L&amp;D Training</a>
</li>
<li>
<a className="hover:text-brand-500" href="#">Expat Mobility</a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-600">
<li><a className="hover:text-brand-500" href="#">About Us</a></li>
<li><a className="hover:text-brand-500" href="#">Our Team</a></li>
<li><a className="hover:text-brand-500" href="#">Case Studies</a></li>
<li><a className="hover:text-brand-500" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">
              Legal &amp; Compliance
            </h4>
<ul className="space-y-3 text-sm text-slate-600">
<li>
<a className="hover:text-brand-500" href="#">Privacy Policy</a>
</li>
<li>
<a className="hover:text-brand-500" href="#">Terms of Service</a>
</li>
<li>
<a className="hover:text-brand-500" href="#">Ethical Charter</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-brand-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500">
            © 2023 Xanthi &amp; Associates. All rights reserved.
          </p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-green-500 rounded-full"></span>
<span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
              Operational Status: Active
            </span>
</div>
</div>
</div>
</footer>


    </>
  );
}
