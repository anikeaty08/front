import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
primary: '#243C8F',
secondary: '#00A6E6',
dark: '#1a2b6d',
}
},
fontFamily: {
sans: ['Poppins', 'sans-serif'],
},
boxShadow: {
'premium': '0 10px 40px -10px rgba(36, 60, 143, 0.08)',
'hover': '0 20px 40px -10px rgba(0, 166, 230, 0.15)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple Intersection Observer to trigger fade-in animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // This effectively enables the CSS animation when scrolled into view
        // The CSS assumes animation is running, but we can control opacity via classes 
        // For this single-file non-JS framework approach, CSS simple animation on load is usually sufficient
        // but this adds a touch of scroll interaction.
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="w-full py-6 px-6 lg:px-12 flex justify-between items-center max-w-7xl mx-auto">
<a className="text-2xl font-semibold tracking-tighter text-brand-primary z-50" href="#">
            DIEDERIK
        </a>
<div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-brand-primary transition-colors" href="#">Home</a>
<a className="hover:text-brand-primary transition-colors" href="#">About Us</a>
<a className="text-brand-primary" href="#">Services</a>
<a className="hover:text-brand-primary transition-colors" href="#">Contact</a>
</div>
<button className="hidden md:block px-6 py-2.5 text-xs font-medium tracking-wide text-brand-primary border border-brand-primary/20 rounded-full hover:bg-brand-primary hover:text-white transition-all duration-300">
            CLIENT LOGIN
        </button>
</nav>

<section className="relative w-full pt-12 pb-24 lg:pt-24 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1 flex flex-col items-start space-y-8 fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-secondary border border-blue-100/50">
<span className="w-2 h-2 rounded-full bg-brand-secondary"></span>
<span className="text-xs font-medium uppercase tracking-widest">Business Protection</span>
</div>
<h1 className="text-4xl lg:text-6xl font-semibold text-brand-primary leading-[1.15] tracking-tight">
                        Property Insurance Solutions for Complete Business Protection
                    </h1>
<p className="text-lg text-slate-500 leading-relaxed max-w-lg font-light">
                        Protect your buildings, assets, equipment, and operations with comprehensive coverage designed to keep your business secure and resilient.
                    </p>
<div className="pt-2">
<a className="group relative inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-white text-sm font-medium rounded-full overflow-hidden transition-all duration-300 hover:bg-brand-secondary shadow-lg hover:shadow-brand-secondary/30" href="#consultation">
<span className="relative z-10">Get a Consultation</span>
<iconify-icon className="ml-2 text-lg relative z-10 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="order-1 lg:order-2 relative fade-in-up delay-200">
<div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-primary/10 aspect-[4/3] group">

<img alt="Modern Corporate Architecture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent mix-blend-multiply"></div>

<div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg max-w-[200px] border border-white/50">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
<iconify-icon icon="solar:shield-check-linear" width="18"></iconify-icon>
</div>
<span className="text-xs font-medium text-brand-primary">Assets Secured</span>
</div>
<div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-brand-secondary h-full w-[85%] rounded-full"></div>
</div>
</div>
</div>

<div className="absolute -z-10 -top-12 -right-12 w-64 h-64 bg-brand-secondary/5 rounded-full blur-3xl"></div>
</div>
</div>
</div>
</section>

<section className="w-full py-20 bg-white">
<div className="max-w-3xl mx-auto px-6 text-center space-y-6 fade-in-up">
<h2 className="text-3xl font-semibold text-brand-primary tracking-tight">
                Our Property Insurance Coverage
            </h2>
<p className="text-base text-slate-500 leading-relaxed font-light">
                Explore the essential areas of protection we provide to safeguard your business assets and ensure continuity.
            </p>
<div className="w-16 h-1 bg-brand-secondary/20 mx-auto rounded-full mt-6"></div>
</div>
</section>

<section className="w-full pb-24 lg:pb-32 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group bg-white p-10 rounded-3xl border border-slate-100 shadow-premium hover:shadow-hover hover:-translate-y-2 transition-all duration-300 fade-in-up delay-100">
<div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-secondary mb-8 group-hover:bg-brand-secondary group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:buildings-2-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-brand-primary mb-4 tracking-tight">Building</h3>
<p className="text-sm text-slate-500 leading-7 font-light">
                        Building Insurance provides coverage for commercial properties against risks such as fire, storm damage, vandalism, and other unforeseen events. It safeguards your company’s physical assets and ensures financial protection for repair or reconstruction, helping your organization maintain operational stability after a loss.
                    </p>
</div>

<div className="group bg-white p-10 rounded-3xl border border-slate-100 shadow-premium hover:shadow-hover hover:-translate-y-2 transition-all duration-300 fade-in-up delay-100">
<div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-secondary mb-8 group-hover:bg-brand-secondary group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-brand-primary mb-4 tracking-tight">Inventory &amp; Goods</h3>
<p className="text-sm text-slate-500 leading-7 font-light">
                        Inventory Insurance provides protection for your company’s stock and stored goods against risks such as fire, theft, water damage, and other unforeseen events. By safeguarding your inventory, this coverage helps minimize financial loss and ensures business continuity in the event of disruption.
                    </p>
</div>

<div className="group bg-white p-10 rounded-3xl border border-slate-100 shadow-premium hover:shadow-hover hover:-translate-y-2 transition-all duration-300 fade-in-up delay-200">
<div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-secondary mb-8 group-hover:bg-brand-secondary group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:graph-down-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-brand-primary mb-4 tracking-tight">Business Interruption</h3>
<p className="text-sm text-slate-500 leading-7 font-light">
                        Business Interruption Insurance provides financial protection when your operations are disrupted due to an insured event such as fire, storm damage, or other property loss. It covers loss of revenue and ongoing fixed expenses, helping your organization maintain financial stability and recover efficiently during periods of interruption.
                    </p>
</div>

<div className="group bg-white p-10 rounded-3xl border border-slate-100 shadow-premium hover:shadow-hover hover:-translate-y-2 transition-all duration-300 fade-in-up delay-200">
<div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-secondary mb-8 group-hover:bg-brand-secondary group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-brand-primary mb-4 tracking-tight">Machinery Breakdown</h3>
<p className="text-sm text-slate-500 leading-7 font-light">
                        Machinery Breakdown Insurance provides coverage for sudden and unforeseen damage to critical equipment and machinery. Whether caused by mechanical failure, electrical faults, or operator error, this coverage helps minimize downtime and protects your business from costly repair or replacement expenses.
                    </p>
</div>


<div className="group bg-white p-10 rounded-3xl border border-slate-100 shadow-premium hover:shadow-hover hover:-translate-y-2 transition-all duration-300 md:col-span-2 lg:col-span-2 xl:col-span-1 xl:col-start-1 fade-in-up delay-300">
<div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-secondary mb-8 group-hover:bg-brand-secondary group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:helmet-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-brand-primary mb-4 tracking-tight">Construction All Risk</h3>
<p className="text-sm text-slate-500 leading-7 font-light">
                        Construction All Risks (CAR) Insurance provides comprehensive protection for construction projects against physical loss or damage to contract works, materials, and equipment during the building phase. It also includes coverage for third-party property damage and bodily injury arising from project activities, ensuring financial security for investors, contractors, and subcontractors throughout the construction process.
                    </p>
</div>

</div>
</div>
</section>

<section className="w-full py-24 bg-slate-50 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
<div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
</div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-8 fade-in-up">
<h2 className="text-3xl lg:text-4xl font-semibold text-brand-primary tracking-tight">
                Secure Your Assets. Protect Your Future.
            </h2>
<p className="text-lg text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
                Comprehensive property insurance solutions tailored to protect your business from unexpected risks and financial disruption.
            </p>

<div className="flex justify-center gap-8 pt-4 opacity-60">
<iconify-icon className="text-brand-primary text-3xl" icon="solar:shield-check-linear"></iconify-icon>
<iconify-icon className="text-brand-primary text-3xl" icon="solar:document-add-linear"></iconify-icon>
<iconify-icon className="text-brand-primary text-3xl" icon="solar:hand-shake-linear"></iconify-icon>
</div>
</div>
</section>

<section className="w-full bg-brand-primary py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
<div className="flex flex-col lg:flex-row items-center justify-between gap-12">
<div className="text-center lg:text-left space-y-4 max-w-2xl">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                        Ready to Protect Your Business?
                    </h2>
<p className="text-blue-100 text-lg font-light leading-relaxed">
                        Speak with our insurance specialists to find the right coverage tailored to your operational needs.
                    </p>
</div>
<div className="flex-shrink-0">
<button className="group bg-brand-secondary text-white px-10 py-5 rounded-full font-medium text-sm transition-all duration-300 hover:bg-white hover:text-brand-primary shadow-lg shadow-brand-dark/20 flex items-center gap-2">
<span>Request a Quote</span>
<iconify-icon className="text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12">
<div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
<span className="text-xl font-semibold tracking-tighter text-brand-primary">DIEDERIK</span>
<p className="text-xs text-slate-400">© 2023 Diederik Insurance Services. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
