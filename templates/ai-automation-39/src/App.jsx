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
},
colors: {
primary: '#7c3aed', // Purple
secondary: '#3b82f6', // Blue
accent: '#f59e0b', // Gold
dark: '#0a0a0a',
surface: '#ffffff',
muted: '#a1a1aa',
},
boxShadow: {
'glow': '0 0 40px -10px rgba(124, 58, 237, 0.5)',
'glow-gold': '0 0 40px -10px rgba(245, 158, 11, 0.4)',
}
}
}
}



        lucide.createIcons();

        // Intersection Observer for Fade-in effects
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-section').forEach(section => {
            observer.observe(section);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="relative min-h-screen flex items-center justify-center pt-[120px] pb-[120px] overflow-hidden fade-in-section">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-600 to-blue-500 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>
<div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">

<div className="inline-flex items-center justify-center px-4 py-2 bg-violet-600 rounded-full mb-8">
<span className="text-xs font-bold uppercase tracking-wide text-white">SYSTEMS</span>
</div>

<h1 className="text-[42px] md:text-[56px] leading-[1.1] font-bold tracking-tight text-white mb-6">
                AI Systems That Run<br className="hidden md:block"/> Your Business 24/7
            </h1>

<p className="text-[18px] md:text-[20px] text-muted max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
                Automated lead follow-up, customer support, and content creation — no coding required. Built for businesses ready to scale.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-500 text-white rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all duration-300 hover:-translate-y-0.5" href="https://cal.com/miguel-morrison-js7dbc/30min">
                    Book a Strategy Call
                </a>
<a className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white rounded-lg font-semibold hover:bg-white/5 transition-all duration-300" href="#systems">
                    See Systems ↓
                </a>
</div>
</div>
</section>

<section className="relative py-24 bg-dark fade-in-section" id="systems">
<div className="container mx-auto px-6 max-w-6xl">

<div className="text-center mb-16">
<span className="inline-block px-3 py-1 bg-violet-900/50 border border-violet-500/30 rounded-full text-violet-300 text-xs font-bold uppercase tracking-wider mb-4">Our Systems</span>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">Choose Your System</h2>
<p className="text-muted text-lg max-w-xl mx-auto">Each system is built custom for your business. Start with one or go all-in.</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-glow group">
<div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center mb-6 border border-violet-500/20 group-hover:border-violet-500/50">
<i className="w-6 h-6 text-violet-400" data-lucide="target"></i>
</div>
<h3 className="text-2xl font-bold text-white mb-2">AI Lead Follow-Up</h3>
<p className="text-muted italic mb-6">"Never miss a lead again"</p>
<ul className="space-y-3 mb-8 text-sm text-gray-300">
<li className="flex items-start"><i className="w-5 h-5 text-violet-500 mr-2 mt-0.5" data-lucide="check"></i> Auto-reply binnen 5 minuten</li>
<li className="flex items-start"><i className="w-5 h-5 text-violet-500 mr-2 mt-0.5" data-lucide="check"></i> Email + WhatsApp integratie</li>
<li className="flex items-start"><i className="w-5 h-5 text-violet-500 mr-2 mt-0.5" data-lucide="check"></i> 24/7 actief zonder jouw input</li>
</ul>
<div className="flex items-center justify-between mt-auto">
<span className="text-2xl font-semibold text-white">$1,497</span>
<a className="text-sm font-semibold text-white flex items-center group-hover:text-violet-400 transition-colors" href="https://cal.com/miguel-morrison-js7dbc/30min">
                            Apply Now <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-glow group">
<div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center mb-6 border border-violet-500/20 group-hover:border-violet-500/50">
<i className="w-6 h-6 text-violet-400" data-lucide="message-square"></i>
</div>
<h3 className="text-2xl font-bold text-white mb-2">AI Customer Support</h3>
<p className="text-muted italic mb-6">"24/7 support without staff"</p>
<ul className="space-y-3 mb-8 text-sm text-gray-300">
<li className="flex items-start"><i className="w-5 h-5 text-violet-500 mr-2 mt-0.5" data-lucide="check"></i> Beantwoordt 80% automatisch</li>
<li className="flex items-start"><i className="w-5 h-5 text-violet-500 mr-2 mt-0.5" data-lucide="check"></i> Maakt support tickets aan</li>
<li className="flex items-start"><i className="w-5 h-5 text-violet-500 mr-2 mt-0.5" data-lucide="check"></i> Escaleert alleen wanneer nodig</li>
</ul>
<div className="flex items-center justify-between mt-auto">
<span className="text-2xl font-semibold text-white">$1,497</span>
<a className="text-sm font-semibold text-white flex items-center group-hover:text-violet-400 transition-colors" href="https://cal.com/miguel-morrison-js7dbc/30min">
                            Apply Now <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-glow group">
<div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center mb-6 border border-violet-500/20 group-hover:border-violet-500/50">
<i className="w-6 h-6 text-violet-400" data-lucide="pen-tool"></i>
</div>
<h3 className="text-2xl font-bold text-white mb-2">AI Content Engine</h3>
<p className="text-muted italic mb-6">"From 2 posts/week to 2/day"</p>
<ul className="space-y-3 mb-8 text-sm text-gray-300">
<li className="flex items-start"><i className="w-5 h-5 text-violet-500 mr-2 mt-0.5" data-lucide="check"></i> Social posts op autopilot</li>
<li className="flex items-start"><i className="w-5 h-5 text-violet-500 mr-2 mt-0.5" data-lucide="check"></i> Jouw brand voice behouden</li>
<li className="flex items-start"><i className="w-5 h-5 text-violet-500 mr-2 mt-0.5" data-lucide="check"></i> Blogs, emails, captions</li>
</ul>
<div className="flex items-center justify-between mt-auto">
<span className="text-2xl font-semibold text-white">$1,497</span>
<a className="text-sm font-semibold text-white flex items-center group-hover:text-violet-400 transition-colors" href="https://cal.com/miguel-morrison-js7dbc/30min">
                            Apply Now <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="glass-gold relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-gold group overflow-hidden">
<div className="absolute top-0 right-0 bg-accent text-black text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">Most Popular</div>
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-amber-500 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-white" data-lucide="rocket"></i>
</div>
<h3 className="text-2xl font-bold text-white mb-2">Full Stack AI</h3>
<p className="text-muted italic mb-6">"Complete business automation"</p>
<ul className="space-y-3 mb-8 text-sm text-gray-200">
<li className="flex items-start"><i className="w-5 h-5 text-accent mr-2 mt-0.5" data-lucide="check"></i> Alle 3 systemen inbegrepen</li>
<li className="flex items-start"><i className="w-5 h-5 text-accent mr-2 mt-0.5" data-lucide="check"></i> Volledig geïntegreerd</li>
<li className="flex items-start"><i className="w-5 h-5 text-accent mr-2 mt-0.5" data-lucide="check"></i> Maximum impact &amp; ROI</li>
</ul>
<div className="flex items-center justify-between mt-auto">
<span className="text-2xl font-semibold text-white">$2,997</span>
<a className="text-sm font-semibold text-accent flex items-center group-hover:text-white transition-colors" href="https://cal.com/miguel-morrison-js7dbc/30min">
                            Apply Now <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-dark border-t border-white/5 fade-in-section">
<div className="container mx-auto px-6 max-w-6xl">

<div className="text-center mb-20">
<span className="inline-block px-3 py-1 bg-violet-900/50 border border-violet-500/30 rounded-full text-violet-300 text-xs font-bold uppercase tracking-wider mb-4">Process</span>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">Live in 14 Days</h2>
<p className="text-muted text-lg">From first call to working system — simple and fast.</p>
</div>

<div className="relative">

<div className="hidden md:block absolute top-[24px] left-0 w-full h-[2px] bg-[#333] -z-10"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4">

<div className="flex flex-col md:items-center md:text-center">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center text-white font-bold text-lg mb-6 shadow-[0_0_15px_rgba(124,58,237,0.4)]">01</div>
<h3 className="text-lg font-bold text-white mb-2">Strategy Call</h3>
<p className="text-sm text-muted leading-relaxed">We analyseren je business en vinden de #1 automation kans</p>
</div>

<div className="flex flex-col md:items-center md:text-center">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center text-white font-bold text-lg mb-6 shadow-[0_0_15px_rgba(124,58,237,0.4)]">02</div>
<h3 className="text-lg font-bold text-white mb-2">System Design</h3>
<p className="text-sm text-muted leading-relaxed">Custom AI systeem ontworpen voor jouw workflows</p>
</div>

<div className="flex flex-col md:items-center md:text-center">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center text-white font-bold text-lg mb-6 shadow-[0_0_15px_rgba(124,58,237,0.4)]">03</div>
<h3 className="text-lg font-bold text-white mb-2">Build &amp; Integrate</h3>
<p className="text-sm text-muted leading-relaxed">We bouwen en koppelen met je bestaande tools</p>
</div>

<div className="flex flex-col md:items-center md:text-center">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center text-white font-bold text-lg mb-6 shadow-[0_0_15px_rgba(124,58,237,0.4)]">04</div>
<h3 className="text-lg font-bold text-white mb-2">Launch &amp; Optimize</h3>
<p className="text-sm text-muted leading-relaxed">Live, getest, en geoptimaliseerd voor resultaat</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-dark fade-in-section">
<div className="container mx-auto px-6 max-w-6xl">

<div className="text-center mb-16">
<span className="inline-block px-3 py-1 bg-violet-900/50 border border-violet-500/30 rounded-full text-violet-300 text-xs font-bold uppercase tracking-wider mb-4">Included</span>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">Everything You Need</h2>
<p className="text-muted text-lg">No hidden fees. No surprises.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="glass-card p-6 rounded-xl hover:bg-white/10 transition-colors">
<div className="flex items-center mb-3">
<i className="w-5 h-5 text-violet-400 mr-3" data-lucide="zap"></i>
<h3 className="font-bold text-white">Custom AI System</h3>
</div>
<p className="text-xs text-muted pl-8">"Gebouwd voor jouw business"</p>
</div>

<div className="glass-card p-6 rounded-xl hover:bg-white/10 transition-colors">
<div className="flex items-center mb-3">
<i className="w-5 h-5 text-violet-400 mr-3" data-lucide="link"></i>
<h3 className="font-bold text-white">Full Integration</h3>
</div>
<p className="text-xs text-muted pl-8">"Werkt met CRM, email, etc."</p>
</div>

<div className="glass-card p-6 rounded-xl hover:bg-white/10 transition-colors">
<div className="flex items-center mb-3">
<i className="w-5 h-5 text-violet-400 mr-3" data-lucide="book-open"></i>
<h3 className="font-bold text-white">Documentation</h3>
</div>
<p className="text-xs text-muted pl-8">"Handleiding en training"</p>
</div>

<div className="glass-card p-6 rounded-xl hover:bg-white/10 transition-colors">
<div className="flex items-center mb-3">
<i className="w-5 h-5 text-violet-400 mr-3" data-lucide="shield-check"></i>
<h3 className="font-bold text-white">30-60 Day Support</h3>
</div>
<p className="text-xs text-muted pl-8">"Hulp na launch inbegrepen"</p>
</div>

<div className="glass-card p-6 rounded-xl hover:bg-white/10 transition-colors">
<div className="flex items-center mb-3">
<i className="w-5 h-5 text-violet-400 mr-3" data-lucide="refresh-cw"></i>
<h3 className="font-bold text-white">Revision Rounds</h3>
</div>
<p className="text-xs text-muted pl-8">"Aanpassingen tot je tevreden"</p>
</div>

<div className="glass-card p-6 rounded-xl hover:bg-white/10 transition-colors">
<div className="flex items-center mb-3">
<i className="w-5 h-5 text-violet-400 mr-3" data-lucide="bar-chart-3"></i>
<h3 className="font-bold text-white">Performance Dashboard</h3>
</div>
<p className="text-xs text-muted pl-8">"Zie resultaten real-time"</p>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-dark fade-in-section">
<div className="container mx-auto px-6 max-w-6xl">

<div className="text-center mb-16">
<span className="inline-block px-3 py-1 bg-violet-900/50 border border-violet-500/30 rounded-full text-violet-300 text-xs font-bold uppercase tracking-wider mb-4">Why AI</span>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">Stop Trading Time for Tasks</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-white/10">

<div className="bg-[#1a0f0f] p-8 md:border-r border-white/5">
<h3 className="text-xl font-bold text-red-200 mb-8 flex items-center justify-center uppercase tracking-widest">
                        Manual Work
                    </h3>
<div className="space-y-6">
<div className="flex items-start p-4 bg-red-900/10 rounded-lg border border-red-900/20">
<span className="text-red-500 mr-3 text-lg">❌</span>
<span className="text-gray-300 text-sm">5+ uur/dag aan repetitieve taken</span>
</div>
<div className="flex items-start p-4 bg-red-900/10 rounded-lg border border-red-900/20">
<span className="text-red-500 mr-3 text-lg">❌</span>
<span className="text-gray-300 text-sm">Leads wachten uren op response</span>
</div>
<div className="flex items-start p-4 bg-red-900/10 rounded-lg border border-red-900/20">
<span className="text-red-500 mr-3 text-lg">❌</span>
<span className="text-gray-300 text-sm">Inconsistente content output</span>
</div>
<div className="flex items-start p-4 bg-red-900/10 rounded-lg border border-red-900/20">
<span className="text-red-500 mr-3 text-lg">❌</span>
<span className="text-gray-300 text-sm">Support alleen kantooruren</span>
</div>
<div className="flex items-start p-4 bg-red-900/10 rounded-lg border border-red-900/20">
<span className="text-red-500 mr-3 text-lg">❌</span>
<span className="text-gray-300 text-sm">Schalen = meer mensen inhuren</span>
</div>
</div>
</div>

<div className="bg-[#0f0b1a] p-8 relative overflow-hidden">
<div className="absolute inset-0 bg-violet-500/5 pointer-events-none"></div>
<div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/20 blur-[80px] rounded-full pointer-events-none"></div>
<h3 className="text-xl font-bold text-violet-200 mb-8 flex items-center justify-center uppercase tracking-widest relative z-10">
                        AI Freedom Systems
                    </h3>
<div className="space-y-6 relative z-10">
<div className="flex items-start p-4 bg-violet-500/10 rounded-lg border border-violet-500/30 shadow-[0_0_15px_rgba(124,58,237,0.1)]">
<span className="text-green-500 mr-3 text-lg">✅</span>
<span className="text-white font-medium text-sm">Systemen werken 24/7 automatisch</span>
</div>
<div className="flex items-start p-4 bg-violet-500/10 rounded-lg border border-violet-500/30 shadow-[0_0_15px_rgba(124,58,237,0.1)]">
<span className="text-green-500 mr-3 text-lg">✅</span>
<span className="text-white font-medium text-sm">Response binnen 5 minuten</span>
</div>
<div className="flex items-start p-4 bg-violet-500/10 rounded-lg border border-violet-500/30 shadow-[0_0_15px_rgba(124,58,237,0.1)]">
<span className="text-green-500 mr-3 text-lg">✅</span>
<span className="text-white font-medium text-sm">Dagelijkse content zonder effort</span>
</div>
<div className="flex items-start p-4 bg-violet-500/10 rounded-lg border border-violet-500/30 shadow-[0_0_15px_rgba(124,58,237,0.1)]">
<span className="text-green-500 mr-3 text-lg">✅</span>
<span className="text-white font-medium text-sm">Support altijd beschikbaar</span>
</div>
<div className="flex items-start p-4 bg-violet-500/10 rounded-lg border border-violet-500/30 shadow-[0_0_15px_rgba(124,58,237,0.1)]">
<span className="text-green-500 mr-3 text-lg">✅</span>
<span className="text-white font-medium text-sm">Schalen zonder extra kosten</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-dark border-t border-white/5 fade-in-section">
<div className="container mx-auto px-6 max-w-4xl">

<div className="text-center mb-16">
<span className="inline-block px-3 py-1 bg-violet-900/50 border border-violet-500/30 rounded-full text-violet-300 text-xs font-bold uppercase tracking-wider mb-4">FAQ</span>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">Got Questions?</h2>
</div>

<div className="space-y-4">
<details className="group glass-card rounded-lg overflow-hidden transition-all duration-300 open:border-violet-500/50">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<span className="text-lg font-semibold text-white">How long does it take?</span>
<div className="w-6 h-6 flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
<i className="w-5 h-5 text-muted group-open:text-violet-400" data-lucide="plus"></i>
</div>
</summary>
<div className="px-6 pb-6 pt-0 text-muted leading-relaxed border-t border-white/5 mt-2 pt-4">
                        Most systems are live within 14 days after our strategy call.
                    </div>
</details>
<details className="group glass-card rounded-lg overflow-hidden transition-all duration-300 open:border-violet-500/50">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<span className="text-lg font-semibold text-white">Do I need technical knowledge?</span>
<div className="w-6 h-6 flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
<i className="w-5 h-5 text-muted group-open:text-violet-400" data-lucide="plus"></i>
</div>
</summary>
<div className="px-6 pb-6 pt-0 text-muted leading-relaxed border-t border-white/5 mt-2 pt-4">
                        No. We handle everything — you just use the system.
                    </div>
</details>
<details className="group glass-card rounded-lg overflow-hidden transition-all duration-300 open:border-violet-500/50">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<span className="text-lg font-semibold text-white">What if it doesn't work?</span>
<div className="w-6 h-6 flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
<i className="w-5 h-5 text-muted group-open:text-violet-400" data-lucide="plus"></i>
</div>
</summary>
<div className="px-6 pb-6 pt-0 text-muted leading-relaxed border-t border-white/5 mt-2 pt-4">
                        We offer a satisfaction guarantee. If we can't deliver, we make it right.
                    </div>
</details>
<details className="group glass-card rounded-lg overflow-hidden transition-all duration-300 open:border-violet-500/50">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<span className="text-lg font-semibold text-white">Can I start with one system?</span>
<div className="w-6 h-6 flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
<i className="w-5 h-5 text-muted group-open:text-violet-400" data-lucide="plus"></i>
</div>
</summary>
<div className="px-6 pb-6 pt-0 text-muted leading-relaxed border-t border-white/5 mt-2 pt-4">
                        Yes. Many clients start with Lead Follow-Up and expand later.
                    </div>
</details>
<details className="group glass-card rounded-lg overflow-hidden transition-all duration-300 open:border-violet-500/50">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<span className="text-lg font-semibold text-white">What tools do you integrate with?</span>
<div className="w-6 h-6 flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
<i className="w-5 h-5 text-muted group-open:text-violet-400" data-lucide="plus"></i>
</div>
</summary>
<div className="px-6 pb-6 pt-0 text-muted leading-relaxed border-t border-white/5 mt-2 pt-4">
                        CRM systems, email tools, WhatsApp, Slack, Notion, and more.
                    </div>
</details>
</div>
</div>
</section>

<section className="relative py-24 bg-dark overflow-hidden flex items-center justify-center fade-in-section">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-600 to-blue-500 rounded-full blur-[150px] opacity-25 pointer-events-none"></div>
<div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
<h2 className="text-4xl md:text-[48px] font-bold text-white mb-6 tracking-tight">Ready to Automate?</h2>
<p className="text-lg md:text-[18px] text-muted max-w-xl mx-auto mb-10">
                Book a free 30-min strategy call. No pitch. Just clarity on your #1 automation opportunity.
            </p>
<a className="inline-block px-10 py-5 bg-gradient-to-r from-violet-600 to-blue-500 text-white rounded-lg font-semibold text-lg hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] transition-all duration-500 animate-[pulse_3s_ease-in-out_infinite] hover:-translate-y-1" href="https://cal.com/miguel-morrison-js7dbc/30min">
                Book Your Free Call →
            </a>
<p className="text-sm text-[#666] mt-6">No commitment required.</p>
</div>
</section>

<footer className="py-8 bg-dark border-t border-white/5 text-center">
<p className="text-xs text-muted">© 2024 Systems. All rights reserved.</p>
</footer>



    </>
  );
}
