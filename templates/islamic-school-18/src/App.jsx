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
serif: ['Fraunces', 'serif'],
},
colors: {
primary: '#28b879',
dark: '#1e3a2b',
highlight: '#4fb848',
gold: '#689540',
background: '#f6f6f6',
body: '#1e3a2b',
muted: '#3c4a40',
border: '#dde5df'
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');


document.write(new Date().getFullYear())


        document.addEventListener("DOMContentLoaded", () => {
            // Intersection Observer for fade-up scroll animations
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8', 'translate-y-4');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.animate-on-scroll').forEach(el => {
                observer.observe(el);
            });

            // Demo Form Expandable Logic
            const toggleBtn = document.getElementById('demo-toggle');
            const formContainer = document.getElementById('demo-form-container');
            const icon = document.getElementById('demo-toggle-icon');
            const form = document.getElementById('demo-form');
            const successMsg = document.getElementById('demo-success');

            if(toggleBtn && formContainer) {
                toggleBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const isOpen = formContainer.style.maxHeight;
                    
                    if (isOpen && isOpen !== "0px") {
                        formContainer.style.maxHeight = "0px";
                        icon.style.transform = "rotate(0deg)";
                    } else {
                        formContainer.style.maxHeight = formContainer.scrollHeight + "px";
                        icon.style.transform = "rotate(90deg)";
                        
                        // Scroll slightly to ensure form is in view
                        setTimeout(() => {
                            const y = formContainer.getBoundingClientRect().top + window.scrollY - 100;
                            window.scrollTo({top: y, behavior: 'smooth'});
                        }, 300);
                    }
                });
            }

            // Demo Form Submit Logic
            if(form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    // Fade out form, fade in success message
                    form.style.opacity = '0';
                    setTimeout(() => {
                        form.style.display = 'none';
                        successMsg.style.display = 'block';
                        successMsg.style.opacity = '0';
                        
                        // Recalculate container height for the smaller success message
                        formContainer.style.maxHeight = successMsg.scrollHeight + 64 + "px"; // 64 is padding
                        
                        setTimeout(() => {
                            successMsg.style.opacity = '1';
                            successMsg.style.transition = 'opacity 0.5s ease';
                        }, 50);
                    }, 300);
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-semibold tracking-tighter text-dark text-lg" href="#">IBEAMS</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-muted hover:text-dark transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-muted hover:text-dark transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-muted hover:text-dark transition-colors" href="#">Pricing</a>
<a className="text-sm font-medium text-muted hover:text-dark transition-colors" href="#">Parents</a>
<a className="text-sm font-medium text-muted hover:text-dark transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-muted hover:text-dark transition-colors" href="#">Help</a>
</div>
<a className="hidden md:inline-flex items-center justify-center bg-dark text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary transition-colors shadow-sm" href="#demo">
                Request Free Demo
            </a>
<button className="md:hidden text-dark">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-24 overflow-hidden">

<div className="absolute right-0 top-0 w-1/2 h-full bg-primary/5 clip-path-diagonal -z-10" style={{clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)'}}></div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out flex flex-col items-start">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-white shadow-sm mb-6">
<span className="w-2 h-2 rounded-full bg-highlight animate-pulse shadow-[0_0_8px_#4fb848]"></span>
<span className="text-xs font-medium text-muted">Trusted by Islamic Schools Worldwide</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-dark tracking-tight leading-tight mb-6">
                    The complete operating system for modern <span className="bg-highlight px-2 rounded text-white inline-block transform -rotate-1">Maktabs</span>
</h1>
<p className="text-base md:text-lg text-muted mb-8 max-w-lg leading-relaxed">
                    A unified platform to automate attendance, track fees seamlessly, engage parents, and generate detailed reports. Built explicitly for Madrasahs and Islamic private schools.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto">
<a className="w-full sm:w-auto flex items-center justify-center bg-dark text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-primary transition-colors shadow-md" href="#demo">
                        Request a Free Demo
                    </a>
<a className="w-full sm:w-auto flex items-center justify-center bg-white text-dark border border-border px-6 py-3 rounded-xl text-sm font-medium hover:bg-background transition-colors shadow-sm" href="#features">
                        See all features →
                    </a>
</div>
<div className="flex flex-wrap items-center gap-4 text-xs font-medium text-muted">
<div className="flex items-center gap-1">
<iconify-icon className="text-primary" icon="solar:star-fall-linear"></iconify-icon>
                        Trustpilot 4.4/5
                    </div>
<span>·</span>
<div>10+ years in sector</div>
<span>·</span>
<div>UK &amp; Worldwide</div>
</div>
</div>
<div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out relative">
<div className="aspect-video bg-white rounded-2xl border border-border shadow-2xl p-2 relative group cursor-pointer overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-background to-white opacity-50 pointer-events-none"></div>

<div className="w-full h-full border border-border/50 rounded-xl bg-background flex flex-col p-4 opacity-70">
<div className="h-4 w-32 bg-border rounded mb-4"></div>
<div className="flex gap-2 mb-4">
<div className="h-16 w-1/3 bg-border/50 rounded-lg"></div>
<div className="h-16 w-1/3 bg-border/50 rounded-lg"></div>
<div className="h-16 w-1/3 bg-border/50 rounded-lg"></div>
</div>
<div className="flex-1 bg-border/30 rounded-lg w-full"></div>
</div>
<button className="absolute bg-white/90 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center shadow-lg border border-border text-dark group-hover:scale-110 group-hover:bg-white transition-all">
<iconify-icon icon="solar:play-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="bg-dark py-8 border-y border-dark">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-x-0 md:divide-x divide-primary/30 text-white">
<div className="flex flex-col items-center justify-center px-4 text-center">
<div className="bg-highlight text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">10+ Years</div>
<span className="text-sm font-medium text-white/80">Serving the sector</span>
</div>
<div className="flex flex-col items-center justify-center px-4 text-center">
<div className="bg-highlight text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">400+ Students</div>
<span className="text-sm font-medium text-white/80">Managed at a single institution</span>
</div>
<div className="flex flex-col items-center justify-center px-4 text-center">
<div className="bg-highlight text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">4.4 / 5</div>
<span className="text-sm font-medium text-white/80">Excellent on Trustpilot</span>
</div>
<div className="flex flex-col items-center justify-center px-4 text-center">
<div className="bg-highlight text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">UK Based</div>
<span className="text-sm font-medium text-white/80">Global reach</span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-background" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
<h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-dark mb-4">Everything you need, in one place</h2>
<p className="text-base text-muted max-w-2xl mx-auto">Replace spreadsheets and fragmented tools with a single, powerful system designed to automate operations and increase fee recovery.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-min">

<div className="md:col-span-7 bg-white rounded-3xl p-8 lg:p-10 border border-border shadow-sm animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out flex flex-col justify-between relative overflow-hidden group">

<div className="absolute right-0 top-0 w-72 h-full bg-gradient-to-l from-background/80 to-transparent pointer-events-none flex items-center justify-end pr-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:flex">
<div className="space-y-3 translate-x-8 group-hover:translate-x-0 transition-transform duration-700 ease-out">
<div className="bg-white p-3 rounded-2xl shadow-sm border border-border flex items-center gap-4 w-48">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"><iconify-icon icon="solar:check-read-linear" width="20"></iconify-icon></div>
<div className="space-y-2 flex-1"><div className="w-3/4 h-2 bg-dark rounded-full"></div><div className="w-1/2 h-1.5 bg-border rounded-full"></div></div>
</div>
<div className="bg-white p-3 rounded-2xl shadow-sm border border-border flex items-center gap-4 w-48 -translate-x-6">
<div className="w-10 h-10 rounded-full bg-highlight/10 flex items-center justify-center text-highlight"><iconify-icon icon="solar:bell-bing-linear" width="20"></iconify-icon></div>
<div className="space-y-2 flex-1"><div className="w-full h-2 bg-dark rounded-full"></div><div className="w-2/3 h-1.5 bg-border rounded-full"></div></div>
</div>
</div>
</div>
<div className="relative z-10 md:w-2/3">
<div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 border border-primary/20">
<iconify-icon icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-serif font-semibold tracking-tight text-dark mb-3">Automate daily operations</h3>
<p className="text-base text-muted leading-relaxed mb-6">From one-click attendance tracking to automated fee reminders, reclaim hours of administrative work every single week with intelligent, set-and-forget workflows.</p>
<div className="flex items-center gap-2 text-xs font-medium text-dark bg-background inline-flex px-3 py-1.5 rounded-full border border-border">
<span className="w-1.5 h-1.5 rounded-full bg-highlight"></span> Saves 12+ admin hours weekly
                        </div>
</div>
</div>

<div className="md:col-span-5 bg-dark rounded-3xl p-8 lg:p-10 border border-dark shadow-sm animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-75 ease-out flex flex-col justify-between relative overflow-hidden group">
<div className="absolute -right-10 -top-10 w-64 h-64 bg-highlight/20 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover:scale-125 group-hover:bg-highlight/30"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div>
<div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-highlight mb-8 border border-white/10 backdrop-blur-sm">
<iconify-icon icon="solar:smartphone-update-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-serif font-semibold tracking-tight text-white mb-3">Dedicated parent portal</h3>
<p className="text-base text-white/70 leading-relaxed">Give parents real-time access to progress reports, attendance records, and instant, secure fee payments directly from any mobile device.</p>
</div>
<div className="mt-8 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/90 backdrop-blur-md transition-colors group-hover:bg-white/10">
<iconify-icon icon="solar:wallet-money-linear"></iconify-icon> Apple &amp; Google Pay
                            </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/90 backdrop-blur-md transition-colors group-hover:bg-white/10">
<iconify-icon icon="solar:card-linear"></iconify-icon> Card Payments
                            </span>
</div>
</div>
</div>

<div className="md:col-span-5 bg-primary rounded-3xl p-8 lg:p-10 border border-primary shadow-sm animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out flex flex-col justify-between overflow-hidden group relative">
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-8 border border-white/20 backdrop-blur-sm">
<iconify-icon icon="solar:pie-chart-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-serif font-semibold tracking-tight text-white mb-3">Financial clarity</h3>
<p className="text-base text-white/80 leading-relaxed">Track outstanding balances, forecast revenue, and monitor student growth with beautiful, real-time visual analytics.</p>
</div>

<div className="mt-10 flex items-end gap-2 h-20 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-full bg-white/20 rounded-t-md h-[40%] group-hover:h-[60%] transition-all duration-500 ease-out"></div>
<div className="w-full bg-white/30 rounded-t-md h-[55%] group-hover:h-[75%] transition-all duration-500 delay-75 ease-out"></div>
<div className="w-full bg-white/50 rounded-t-md h-[35%] group-hover:h-[50%] transition-all duration-500 delay-100 ease-out"></div>
<div className="w-full bg-white/70 rounded-t-md h-[70%] group-hover:h-[90%] transition-all duration-500 delay-150 ease-out"></div>
<div className="w-full bg-white rounded-t-md h-[100%] group-hover:h-[85%] transition-all duration-500 delay-200 ease-out"></div>
</div>
</div>

<div className="md:col-span-7 bg-white rounded-3xl p-8 lg:p-10 border border-border shadow-sm animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-150 ease-out flex flex-col justify-between items-start group">
<div className="w-full">
<div className="flex items-start justify-between mb-8">
<div className="w-12 h-12 rounded-2xl bg-dark/5 flex items-center justify-center text-dark border border-dark/10">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div className="px-3 py-1.5 bg-highlight/10 text-highlight text-xs font-semibold rounded-full border border-highlight/20 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-highlight animate-pulse"></span> 99.9% Uptime
                            </div>
</div>
<h3 className="text-2xl font-serif font-semibold tracking-tight text-dark mb-3">Enterprise-grade security, ready in minutes</h3>
<p className="text-base text-muted leading-relaxed mb-8 md:w-5/6">Bank-level encryption for student data paired with a frictionless onboarding experience. Import your existing spreadsheets and go live today—zero technical knowledge required.</p>
</div>
<a className="inline-flex items-center justify-center bg-dark text-white px-6 py-3.5 rounded-xl text-sm font-medium hover:bg-primary transition-all shadow-md group-hover:shadow-lg group-hover:-translate-y-0.5 gap-2" href="#demo">
                        Start your free migration 
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-12 bg-background pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="border border-border rounded-3xl overflow-hidden bg-white grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border shadow-sm animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
<div className="p-10">
<div className="text-xs font-semibold text-muted tracking-widest mb-4">01</div>
<h3 className="text-xl font-serif font-semibold tracking-tight text-dark mb-3">Simplified Management</h3>
<p className="text-sm text-muted leading-relaxed">Eliminate repetitive admin work. Our intuitive interface allows staff to focus on education rather than paperwork.</p>
</div>
<div className="p-10 bg-background/30">
<div className="text-xs font-semibold text-muted tracking-widest mb-4">02</div>
<h3 className="text-xl font-serif font-semibold tracking-tight text-dark mb-3">Full Control, Always</h3>
<p className="text-sm text-muted leading-relaxed">Your data remains yours. Export records securely at any time, maintaining compliance with data protection standards.</p>
</div>
<div className="p-10">
<div className="text-xs font-semibold text-muted tracking-widest mb-4">03</div>
<h3 className="text-xl font-serif font-semibold tracking-tight text-dark mb-3">Clean, Responsive Design</h3>
<p className="text-sm text-muted leading-relaxed">No clutter, no confusion. A modern, minimal dashboard that requires virtually zero training to master.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark text-white border-y border-dark relative overflow-hidden" id="about">
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
<div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
<span className="text-highlight text-sm font-medium tracking-wide uppercase mb-4 block">About IBEUK</span>
<h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight mb-6">Engineered for the reality of Islamic education.</h2>
<p className="text-base text-white/80 leading-relaxed mb-8">
                    IBEAMS wasn't created in a vacuum. It was forged over years of direct collaboration with Maktabs and Madrasahs across the UK and internationally. We understand the unique challenges of managing part-time and full-time Islamic educational structures.
                </p>

<div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
<p className="text-sm text-white/90 leading-relaxed font-medium">
<strong className="text-highlight font-semibold">IBEAMS</strong> (IBE Advanced Management System) is an authoritative, cloud-based software solution built and maintained by IBEUK (Leicester, UK). It provides robust infrastructure for attendance tracking, fee management, parent communication, and operational reporting for Maktabs, Madrasahs, and Islamic private schools globally.
                    </p>
</div>
</div>
<div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out pl-0 md:pl-10">
<div className="flex flex-col gap-8">
<div className="flex gap-4">
<div className="text-highlight font-serif text-xl font-semibold mt-0.5">1</div>
<div>
<h4 className="text-lg font-semibold tracking-tight mb-1">Defined by Real Need</h4>
<p className="text-sm text-white/60">Built specifically to solve the administrative bottleneck in growing Maktabs.</p>
</div>
</div>
<div className="flex gap-4">
<div className="text-highlight font-serif text-xl font-semibold mt-0.5">2</div>
<div>
<h4 className="text-lg font-semibold tracking-tight mb-1">Refined Over a Decade</h4>
<p className="text-sm text-white/60">Continuous improvements based on millions of logged attendance records and transactions.</p>
</div>
</div>
<div className="flex gap-4">
<div className="text-highlight font-serif text-xl font-semibold mt-0.5">3</div>
<div>
<h4 className="text-lg font-semibold tracking-tight mb-1">Trusted Worldwide</h4>
<p className="text-sm text-white/60">From Leicester to global institutions, scaling seamlessly from 50 to 1000+ students.</p>
</div>
</div>
<div className="flex gap-4">
<div className="text-highlight font-serif text-xl font-semibold mt-0.5">4</div>
<div>
<h4 className="text-lg font-semibold tracking-tight mb-1">Support That Actually Listens</h4>
<p className="text-sm text-white/60">Direct access to our UK-based development team for troubleshooting and requests.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-background">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-center gap-2 mb-12 animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 ease-out">
<iconify-icon className="text-primary" icon="solar:star-bold" width="24"></iconify-icon>
<span className="text-sm font-semibold text-dark">Rated 4.4/5 on Trustpilot</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-dark text-white rounded-2xl p-8 md:p-10 border border-dark shadow-md flex flex-col justify-between animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out relative overflow-hidden">
<iconify-icon className="text-white/10 absolute top-6 left-6" icon="solar:quote-left-linear" width="120"></iconify-icon>
<div className="relative z-10 mb-8 md:w-3/4">
<div className="flex gap-1 mb-6 text-highlight">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-lg md:text-xl font-medium leading-relaxed mb-6">
                            "We transitioned our entire 400+ student academy to IBEAMS in less than a week. The fee tracking alone has paid for the system itself by catching missed payments we previously overlooked."
                        </p>
<div>
<div className="font-semibold text-sm">Principal</div>
<div className="text-xs text-white/60">London Islamic Academy</div>
</div>
</div>
<div className="absolute bottom-10 right-10 hidden md:block text-right">
<div className="text-3xl font-serif font-semibold text-highlight tracking-tight">#1</div>
<div className="text-xs text-white/60 mt-1">vs 3 other systems tested</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-border shadow-sm animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-75 ease-out">
<div className="flex gap-1 mb-4 text-primary">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-sm text-muted leading-relaxed mb-6">"The parent portal has drastically reduced the number of phone calls we receive regarding fees and attendance."</p>
<div>
<div className="font-semibold text-sm text-dark">Admin Team</div>
<div className="text-xs text-muted">Midlands Maktab</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-border shadow-sm animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out">
<div className="flex gap-1 mb-4 text-primary">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-sm text-muted leading-relaxed mb-6">"Very easy to use. Our older staff members picked it up without any extensive training."</p>
<div>
<div className="font-semibold text-sm text-dark">Head Teacher</div>
<div className="text-xs text-muted">North West Education</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-border shadow-sm animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-150 ease-out">
<div className="flex gap-1 mb-4 text-primary">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-sm text-muted leading-relaxed mb-6">"Support is fantastic. Whenever we suggest a tweak for our specific setup, they actually listen and implement it."</p>
<div>
<div className="font-semibold text-sm text-dark">Committee Member</div>
<div className="text-xs text-muted">Community Mosque</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-border shadow-sm animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 ease-out">
<div className="flex gap-1 mb-4 text-primary">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-sm text-muted leading-relaxed mb-6">"Printing year-end reports used to take days. Now it takes exactly two clicks. Incredible time saver."</p>
<div>
<div className="font-semibold text-sm text-dark">Operations Director</div>
<div className="text-xs text-muted">Global Islamic School</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-background border-t border-border relative" id="demo">
<div className="max-w-4xl mx-auto px-6">

<div className="grid md:grid-cols-5 gap-12 items-start animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
<div className="md:col-span-3">
<h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-dark mb-4">Ready to modernize your Madrasah?</h2>
<p className="text-base text-muted mb-8 leading-relaxed">Book a personalized walkthrough. We'll show you exactly how IBEAMS can be configured for your institution's specific workflow.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-muted">
<iconify-icon className="text-primary" icon="solar:check-circle-linear" width="18"></iconify-icon> No credit card required
                        </li>
<li className="flex items-center gap-3 text-sm text-muted">
<iconify-icon className="text-primary" icon="solar:check-circle-linear" width="18"></iconify-icon> No commitment
                        </li>
<li className="flex items-center gap-3 text-sm text-muted">
<iconify-icon className="text-primary" icon="solar:check-circle-linear" width="18"></iconify-icon> Instant demo environment access
                        </li>
<li className="flex items-center gap-3 text-sm text-muted">
<iconify-icon className="text-primary" icon="solar:check-circle-linear" width="18"></iconify-icon> UK-based expert guidance
                        </li>
</ul>
<button className="group flex items-center gap-2 bg-dark text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-primary transition-all shadow-md" id="demo-toggle">
                        Request Free Demo
                        <iconify-icon className="transition-transform duration-300" icon="solar:alt-arrow-right-linear" id="demo-toggle-icon" width="18"></iconify-icon>
</button>
</div>
<div className="md:col-span-2">
<div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-dark mb-2">Secure &amp; Compliant</h4>
<p className="text-xs text-muted leading-relaxed">Your data is hosted securely with daily encrypted backups, fully adhering to standard data protection regulations.</p>
</div>
</div>
</div>

<div className="max-h-0 overflow-hidden transition-[max-height] duration-500 ease-in-out mt-8" id="demo-form-container">
<div className="bg-white border border-border rounded-2xl shadow-sm p-8">
<div className="hidden text-center py-8" id="demo-success">
<div className="w-16 h-16 bg-highlight/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
<iconify-icon icon="solar:check-read-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-serif font-semibold text-dark mb-2">Request Received</h3>
<p className="text-sm text-muted">Thank you. Our team will contact you shortly to schedule your personalized demo.</p>
</div>
<form className="space-y-8" id="demo-form">
<div className="grid md:grid-cols-2 gap-8">

<div className="space-y-4">
<h4 className="text-sm font-semibold tracking-wide text-dark uppercase border-b border-border pb-2 mb-4">Personal Details</h4>
<div>
<label className="block text-xs font-medium text-muted mb-1">Full Name</label>
<input className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-shadow" placeholder="Abdullah..." required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-muted mb-1">Email Address</label>
<input className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-shadow" placeholder="name@domain.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-muted mb-1">Phone Number</label>
<input className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-shadow" placeholder="+44 ..." type="tel"/>
</div>
</div>

<div className="space-y-4">
<h4 className="text-sm font-semibold tracking-wide text-dark uppercase border-b border-border pb-2 mb-4">Institution Details</h4>
<div>
<label className="block text-xs font-medium text-muted mb-1">School / Maktab Name</label>
<input className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-shadow" placeholder="Islamic Academy..." required="" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="col-span-2">
<label className="block text-xs font-medium text-muted mb-1">Address</label>
<input className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-shadow" placeholder="Street address..." type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-muted mb-1">City</label>
<input className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-shadow" placeholder="City" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-muted mb-1">Postcode</label>
<input className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-shadow" placeholder="Postcode" type="text"/>
</div>
</div>
</div>
</div>
<button className="w-full bg-dark text-white px-6 py-3.5 rounded-xl text-sm font-medium hover:bg-primary transition-colors shadow-md flex items-center justify-center gap-2" type="submit">
                            Submit Demo Request
                            <iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<section className="bg-primary/5 py-16 border-y border-border">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
<div>
<h3 className="text-xl font-serif font-semibold text-dark mb-2">Join our educational newsletter</h3>
<p className="text-sm text-muted">Insights on managing Islamic schools, feature updates, and best practices.</p>
</div>
<div className="flex justify-end">
<form className="w-full max-w-md flex bg-white rounded-full p-1 border border-border shadow-sm focus-within:ring-2 focus-within:ring-primary/20 transition-all">
<input className="flex-1 bg-transparent px-4 py-2 text-sm text-dark focus:outline-none rounded-l-full" placeholder="Email address" required="" type="email"/>
<button className="bg-dark text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primary transition-colors" type="submit">
                        Subscribe
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-dark pt-20 pb-10 text-white/70">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="md:col-span-1">
<a className="font-semibold tracking-tighter text-white text-xl mb-4 block" href="#">IBEAMS</a>
<p className="text-sm leading-relaxed mb-6">
                        The advanced management system for Maktabs, Madrasahs, and Islamic private schools.
                    </p>
<div className="flex items-center gap-2 text-xs">
<div className="flex text-highlight">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span>4.4/5 on Trustpilot</span>
</div>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-4">Product</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#features">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Parent Portal</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-4">Company</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-white transition-colors" href="#">Partners</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-4">Connect</h4>
<div className="flex gap-4 mb-6">
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all" href="#">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all" href="#">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
</a>
</div>
<p className="text-xs text-white/40">Built &amp; maintained by IBEUK, Leicester, UK. Registered in RAKEZ, Company No. 578466.</p>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
<p>©  IBEUK. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
