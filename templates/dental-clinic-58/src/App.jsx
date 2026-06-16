import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
surface: '#F8FAFC',
surfaceHighlight: '#F0FDFA', // Teal 50
primary: '#0D9488', // Teal 600 (Matching the brand's cyan/teal vibe but modernized)
primaryDark: '#0F766E', // Teal 700
accent: '#06B6D4', // Cyan 500
dark: '#0F172A', // Slate 900
darkText: '#334155', // Slate 700
muted: '#64748B', // Slate 500
border: '#E2E8F0', // Slate 200
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
heading: ['Poppins', 'sans-serif'],
},
boxShadow: {
'soft': '0 10px 40px -10px rgba(13, 148, 136, 0.1)',
'lift': '0 20px 40px -15px rgba(13, 148, 136, 0.15)',
'glow': '0 0 20px rgba(6, 182, 212, 0.15)',
}
}
}
}



        // Reveal on Scroll Animation
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-sm', 'bg-white/95');
                nav.classList.remove('bg-white/80');
            } else {
                nav.classList.remove('shadow-sm', 'bg-white/95');
                nav.classList.add('bg-white/80');
            }
        });

        // Form Handling
        function selectOption(value) {
            document.getElementById('selected-treatment').innerText = value;
            document.getElementById('selected-treatment').classList.add('text-dark');
            document.getElementById('treatmentInput').value = value;
        }

        function selectTime(value) {
            document.getElementById('selected-time').innerText = value;
            document.getElementById('selected-time').classList.add('text-dark');
        }

        function handleSubmit() {
            const form = document.getElementById('bookingForm');
            const successMsg = document.getElementById('successMessage');
            
            // Simulate API call
            const btn = form.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<iconify-icon icon="line-md:loading-twotone-loop" width="20"></iconify-icon> Processing...';
            
            setTimeout(() => {
                form.classList.add('hidden');
                successMsg.classList.remove('hidden');
                btn.innerHTML = originalText;
            }, 1500);
        }

        function resetForm() {
            document.getElementById('bookingForm').reset();
            document.getElementById('bookingForm').classList.remove('hidden');
            document.getElementById('successMessage').classList.add('hidden');
            document.getElementById('selected-treatment').innerText = 'Select Treatment';
            document.getElementById('selected-time').innerText = 'Preferred Time';
        }

        // Close dropdowns when clicking outside
        document.addEventListener('click', function(e) {
            const dropdowns = document.querySelectorAll('.custom-select-wrapper');
            dropdowns.forEach(dropdown => {
                if (!dropdown.contains(e.target)) {
                    dropdown.classList.remove('open');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-border" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
<span className="font-heading font-bold text-lg">IG</span>
</div>
<span className="font-heading font-semibold text-xl tracking-tight text-dark">DENTAL</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
<a className="hover:text-primary transition-colors" href="#home">Home</a>
<a className="hover:text-primary transition-colors" href="#about">About Us</a>
<a className="hover:text-primary transition-colors" href="#services">Services</a>
<a className="hover:text-primary transition-colors" href="#testimonials">Reviews</a>
<a className="hover:text-primary transition-colors" href="#blog">Blog</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="text-xs font-semibold text-dark hover:text-primary transition-colors flex items-center gap-1" href="tel:+359888696596">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon> +359 888 696 596
                </a>
<a className="bg-dark text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary transition-colors duration-300 shadow-lg shadow-dark/20 hover:shadow-primary/30 transform hover:-translate-y-0.5" href="#book">
                    Book Appointment
                </a>
</div>

<button className="md:hidden text-dark" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-white border-b border-border p-6 flex flex-col gap-4 shadow-xl" id="mobile-menu">
<a className="text-lg font-medium text-dark" href="#home">Home</a>
<a className="text-lg font-medium text-dark" href="#about">About Us</a>
<a className="text-lg font-medium text-dark" href="#services">Services</a>
<a className="text-lg font-medium text-primary" href="tel:+359888696596">Call: +359 888 696 596</a>
<a className="bg-primary text-white text-center py-3 rounded-lg font-medium" href="#book">Book Now</a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-surfaceHighlight to-white" id="home">

<div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl -z-10"></div>
<div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-teal-100 to-transparent rounded-full blur-3xl -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

<div className="relative z-10 reveal-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-primary/20 text-primary text-xs font-semibold mb-6 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
                    New Patients Welcome
                </div>
<h1 className="font-heading font-semibold text-4xl lg:text-6xl tracking-tight leading-[1.1] mb-6 text-dark">
                    Premium Dental Care <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">In Sofia Center</span>
</h1>
<p className="text-lg text-muted mb-8 max-w-lg leading-relaxed">
                    Experience modern, painless treatment and a personal approach by Dr. Alexander Georgiev. Established in 1995.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-primary text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-primaryDark transition-all duration-300 shadow-soft shadow-primary/30 text-center flex items-center justify-center gap-2" href="#book">
                        Book Appointment <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="bg-white border border-border text-darkText px-8 py-3.5 rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-all duration-300 text-center shadow-sm" href="#services">
                        Our Services
                    </a>
</div>
<div className="mt-10 flex items-center gap-4 text-sm text-muted">
<div className="flex items-center gap-2">
<div className="flex text-yellow-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<span className="font-semibold text-dark">5.0</span>
<span>(Google Reviews)</span>
</div>
</div>
</div>

<div className="relative reveal-on-scroll delay-200">
<div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-10 rounded-[2.5rem] transform rotate-3 scale-95 translate-y-4"></div>
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 h-[500px] group border border-white">
<img alt="IG Dental Clinic Interior" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg flex items-center justify-between border border-white/50">
<div className="flex items-center gap-3">
<div className="bg-surfaceHighlight p-2 rounded-lg text-primary">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-muted uppercase tracking-wider font-semibold">Location</p>
<p className="font-heading font-semibold text-dark">Blvd. Vasil Levski 70, Sofia</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white border-b border-border">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="p-6 rounded-2xl bg-surface hover:bg-surfaceHighlight transition-colors duration-300 border border-transparent hover:border-teal-100 group reveal-on-scroll">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-border flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-dark mb-2">Since 1995</h3>
<p className="text-sm text-muted">Over 20 years of excellence in dental healthcare in Sofia.</p>
</div>

<div className="p-6 rounded-2xl bg-surface hover:bg-surfaceHighlight transition-colors duration-300 border border-transparent hover:border-teal-100 group reveal-on-scroll delay-100">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-border flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:medical-kit-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-dark mb-2">Modern Equipment</h3>
<p className="text-sm text-muted">Using top-tier technology including Camlog® Swiss implants.</p>
</div>

<div className="p-6 rounded-2xl bg-surface hover:bg-surfaceHighlight transition-colors duration-300 border border-transparent hover:border-teal-100 group reveal-on-scroll delay-200">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-border flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:heart-angle-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-dark mb-2">Painless Treatment</h3>
<p className="text-sm text-muted">Advanced techniques to ensure a stress-free experience.</p>
</div>

<div className="p-6 rounded-2xl bg-surface hover:bg-surfaceHighlight transition-colors duration-300 border border-transparent hover:border-teal-100 group reveal-on-scroll delay-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-border flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:user-hand-up-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-dark mb-2">Personal Approach</h3>
<p className="text-sm text-muted">Building lasting relationships between patient and dentist.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-center">

<div className="lg:w-1/2 relative reveal-on-scroll">
<div className="grid grid-cols-2 gap-4">
<img className="rounded-2xl object-cover h-64 w-full shadow-lg transform translate-y-8" src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img className="rounded-2xl object-cover h-64 w-full shadow-lg" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-dark text-white p-6 rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-xl border-4 border-surface">
<span className="font-heading font-bold text-3xl text-primary">20+</span>
<span className="text-xs text-center leading-tight opacity-80">Years Exp.</span>
</div>
</div>

<div className="lg:w-1/2 reveal-on-scroll delay-100">
<span className="text-primary font-medium tracking-wide text-sm uppercase mb-2 block">About IG Dental</span>
<h2 className="font-heading font-semibold text-3xl lg:text-4xl text-dark mb-6 tracking-tight">
                        Precision Meets <span className="text-primary">Compassion</span>
</h2>
<p className="text-muted mb-6 leading-relaxed">
                        Founded in 1995, IG Dental believes that a visit to the dentist should be a restorative experience. Led by <strong className="text-dark">Dr. Alexander Georgiev</strong>, our team combines decades of clinical excellence with a philosophy rooted in patient comfort.
                    </p>
<p className="text-muted mb-8 leading-relaxed">
                        We are located in the ideal center of Sofia, near "Pet te Kyosheta" (Five Corners), providing easy access to premium dental care.
                    </p>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-3">
<iconify-icon className="w-5 h-5 text-primary mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<div>
<h4 className="font-medium text-dark">Mission</h4>
<p className="text-sm text-muted">To provide world-class dental care with a focus on hygiene and comfort.</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="w-5 h-5 text-primary mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<div>
<h4 className="font-medium text-dark">Dr. Alexander Georgiev</h4>
<p className="text-sm text-muted">Member of the Bulgarian Dental Association &amp; Association of Oral Surgeons.</p>
</div>
</div>
</div>
<a className="text-primary font-medium hover:text-dark transition-colors inline-flex items-center gap-2 group" href="#book">
                        Meet Our Team <iconify-icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
<span className="text-primary font-medium tracking-wide text-sm uppercase mb-2 block">Our Expertise</span>
<h2 className="font-heading font-semibold text-3xl lg:text-4xl text-dark mb-4 tracking-tight">Comprehensive Solutions</h2>
<p className="text-muted">From routine checkups to complex cosmetic makeovers and implants.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-surface rounded-2xl p-6 shadow-sm border border-border hover:shadow-lift hover:border-primary/20 transition-all duration-300 group reveal-on-scroll">
<div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-star-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-lg text-dark mb-2">Implantology</h3>
<p className="text-sm text-muted mb-4">High-quality Swiss Camlog® implants to restore function and aesthetics naturally.</p>
</div>

<div className="bg-surface rounded-2xl p-6 shadow-sm border border-border hover:shadow-lift hover:border-primary/20 transition-all duration-300 group reveal-on-scroll delay-100">
<div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:star-shine-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-lg text-dark mb-2">Aesthetic Dentistry</h3>
<p className="text-sm text-muted mb-4">Teeth whitening, veneers, and bonding for a radiant, confident smile.</p>
</div>

<div className="bg-surface rounded-2xl p-6 shadow-sm border border-border hover:shadow-lift hover:border-primary/20 transition-all duration-300 group reveal-on-scroll delay-200">
<div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:health-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-lg text-dark mb-2">Periodontology</h3>
<p className="text-sm text-muted mb-4">Treatment of gum diseases, gingivitis, and periodontitis with laser therapy.</p>
</div>

<div className="bg-surface rounded-2xl p-6 shadow-sm border border-border hover:shadow-lift hover:border-primary/20 transition-all duration-300 group reveal-on-scroll">
<div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:smile-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-lg text-dark mb-2">Orthodontics</h3>
<p className="text-sm text-muted mb-4">Modern aligners for straightening teeth without traditional metal braces.</p>
</div>

<div className="bg-surface rounded-2xl p-6 shadow-sm border border-border hover:shadow-lift hover:border-primary/20 transition-all duration-300 group reveal-on-scroll delay-100">
<div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:medical-kit-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-lg text-dark mb-2">Oral Surgery</h3>
<p className="text-sm text-muted mb-4">Safe extraction of wisdom teeth, cysts, and other surgical interventions.</p>
</div>

<div className="bg-surface rounded-2xl p-6 shadow-sm border border-border hover:shadow-lift hover:border-primary/20 transition-all duration-300 group reveal-on-scroll delay-200">
<div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:crown-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-lg text-dark mb-2">Prosthetics</h3>
<p className="text-sm text-muted mb-4">Zirconia crowns, metal-ceramics, and dentures for full rehabilitation.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surfaceHighlight" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between mb-12">
<div>
<h2 className="font-heading font-semibold text-3xl text-dark">Patient Stories</h2>
<div className="flex items-center gap-2 mt-2">
<div className="flex text-yellow-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<span className="text-sm text-muted">Based on Google Reviews</span>
</div>
</div>
<a className="text-primary font-medium hover:underline mt-4 md:mt-0" href="https://goo.gl/maps/qGUzJuRdjARJjysFA" target="_blank">Read more on Google</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:border-primary/30 transition-colors reveal-on-scroll">
<p className="text-darkText italic mb-6">"No matter what problems you have with your teeth, I recommend the clinic's services! Dr. Georgiev is a true professional."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">VT</div>
<div>
<p className="font-semibold text-sm text-dark">Vladimir Tsanev</p>
<p className="text-xs text-muted">Local Guide</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:border-primary/30 transition-colors reveal-on-scroll delay-100">
<p className="text-darkText italic mb-6">"Exceptional professionalism and attitude. I highly recommend IG Dental for anyone looking for quality care."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">EB</div>
<div>
<p className="font-semibold text-sm text-dark">Elitsa Belyova</p>
<p className="text-xs text-muted">Patient</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:border-primary/30 transition-colors reveal-on-scroll delay-200">
<p className="text-darkText italic mb-6">"Dr. Georgiev is a professional! The clinic is modern, and the team makes you feel right at home."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">AB</div>
<div>
<p className="font-semibold text-sm text-dark">Anelia Borissova</p>
<p className="text-xs text-muted">Facebook Review</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="blog">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="font-heading font-semibold text-3xl text-dark mb-4">Latest Dental Insights</h2>
<p className="text-muted">Stay informed about your oral health.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="group cursor-pointer">
<div className="rounded-xl overflow-hidden h-48 mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<p className="text-xs text-primary font-semibold mb-2">Oral Health</p>
<h3 className="font-heading font-medium text-dark group-hover:text-primary transition-colors">Phlegmon and Abscess: What they are &amp; differences</h3>
</div>
<div className="group cursor-pointer">
<div className="rounded-xl overflow-hidden h-48 mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<p className="text-xs text-primary font-semibold mb-2">Restoration</p>
<h3 className="font-heading font-medium text-dark group-hover:text-primary transition-colors">Advantages of Post Building vs Classical Crowns</h3>
</div>
<div className="group cursor-pointer">
<div className="rounded-xl overflow-hidden h-48 mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1445527697940-617d00387222?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<p className="text-xs text-primary font-semibold mb-2">Wellness</p>
<h3 className="font-heading font-medium text-dark group-hover:text-primary transition-colors">How Stress Affects Your Teeth and Gums</h3>
</div>
<div className="group cursor-pointer">
<div className="rounded-xl overflow-hidden h-48 mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<p className="text-xs text-primary font-semibold mb-2">Treatment</p>
<h3 className="font-heading font-medium text-dark group-hover:text-primary transition-colors">Local Antibiotics for Periodontitis</h3>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface relative" id="book">
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary/5 border border-border">
<div className="text-center mb-10">
<h2 className="font-heading font-semibold text-3xl text-dark mb-2">Book Your Visit</h2>
<p className="text-muted">Fill out the form below or call us at <a className="text-primary font-semibold" href="tel:+359888696596">+359 888 696 596</a></p>
</div>
<form className="space-y-6" id="bookingForm" onsubmit="event.preventDefault(); handleSubmit();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="input-group">
<input className="input-field" id="name" placeholder=" " required="" type="text"/>
<label className="input-label" htmlFor="name">Full Name</label>
</div>

<div className="input-group">
<input className="input-field" id="phone" placeholder=" " required="" type="tel"/>
<label className="input-label" htmlFor="phone">Phone Number</label>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="input-group">
<input className="input-field" id="email" placeholder=" " required="" type="email"/>
<label className="input-label" htmlFor="email">Email Address</label>
</div>

<div className="custom-select-wrapper" onclick="this.classList.toggle('open')">
<div className="custom-select-trigger text-sm text-darkText">
<span id="selected-treatment">Select Treatment</span>
<iconify-icon className="text-primary" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
<div className="custom-select-options text-sm">
<div className="custom-option" onclick="selectOption('General Checkup')">General Checkup</div>
<div className="custom-option" onclick="selectOption('Teeth Whitening')">Teeth Whitening</div>
<div className="custom-option" onclick="selectOption('Dental Implant')">Dental Implants</div>
<div className="custom-option" onclick="selectOption('Orthodontics')">Aligners/Braces</div>
<div className="custom-option" onclick="selectOption('Emergency Pain')">Emergency</div>
</div>
<input id="treatmentInput" name="treatment" type="hidden"/>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="input-group">
<input className="input-field text-darkText" id="date" required="" type="date"/>
<label className="input-label bg-white px-1 -top-2.5 text-xs text-primary font-medium" htmlFor="date">Preferred Date</label>
</div>
<div className="custom-select-wrapper" onclick="this.classList.toggle('open')">
<div className="custom-select-trigger text-sm text-darkText">
<span id="selected-time">Preferred Time</span>
<iconify-icon className="text-primary" icon="solar:clock-circle-linear" width="16"></iconify-icon>
</div>
<div className="custom-select-options text-sm">
<div className="custom-option" onclick="selectTime('Morning (9AM - 12PM)')">Morning (9AM - 12PM)</div>
<div className="custom-option" onclick="selectTime('Afternoon (12PM - 4PM)')">Afternoon (12PM - 4PM)</div>
<div className="custom-option" onclick="selectTime('Evening (4PM - 7PM)')">Evening (4PM - 7PM)</div>
</div>
</div>
</div>

<div className="input-group">
<textarea className="input-field" id="message" placeholder=" " rows="3"></textarea>
<label className="input-label" htmlFor="message">Describe your concern (Optional)</label>
</div>
<button className="w-full bg-primary text-white font-medium py-4 rounded-lg shadow-lg shadow-primary/25 hover:bg-primaryDark hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2" type="submit">
                        Confirm Appointment
                    </button>
</form>

<div className="hidden text-center py-12" id="successMessage">
<div className="w-16 h-16 bg-surfaceHighlight rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
<iconify-icon icon="solar:check-circle-bold" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-heading font-semibold text-dark mb-2">Thank you!</h3>
<p className="text-muted">Our clinic coordinator will contact you shortly to confirm your appointment.</p>
<button className="mt-6 text-primary font-medium hover:underline" onclick="resetForm()">Book another</button>
</div>
</div>
</div>
</section>

<footer className="bg-dark pt-20 pb-10 text-white/80 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
<span className="font-bold">IG</span>
</div>
<span className="font-heading font-semibold text-xl tracking-tight text-white">DENTAL</span>
</div>
<p className="text-sm leading-relaxed text-white/60 mb-6">
                        Modern dental clinic in the center of Sofia. Premium class treatment by Dr. Alexander Georgiev.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" href="https://www.facebook.com/IgDental/" target="_blank">
<iconify-icon icon="brandico:facebook" width="14"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-white font-heading font-semibold mb-6">Contact Us</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="w-5 h-5 text-accent mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span>Blvd. Vasil Levski 70,<br/>1142 Sofia, Bulgaria</span>
</li>
<li className="flex items-center gap-3 group cursor-pointer">
<iconify-icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-accent transition-colors" href="tel:+359888696596">+359 888 696 596</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="w-5 h-5 text-accent" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-accent transition-colors" href="mailto:office@igdental.com">office@igdental.com</a>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-heading font-semibold mb-6">Opening Hours</h4>
<ul className="space-y-2 text-sm">
<li className="flex justify-between border-b border-white/10 pb-2">
<span>Mon - Fri</span>
<span className="text-white">9:00 AM - 7:00 PM</span>
</li>
<li className="flex justify-between pt-2">
<span>Sat - Sun</span>
<span className="text-accent">Closed</span>
</li>
</ul>
</div>

<div className="rounded-xl overflow-hidden h-48 bg-gray-800 relative group">

<img alt="Map Location" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<a className="absolute inset-0 flex items-center justify-center bg-dark/20 group-hover:bg-dark/40 transition-colors" href="https://goo.gl/maps/qGUzJuRdjARJjysFA" target="_blank">
<span className="bg-white text-dark px-4 py-2 rounded-lg text-xs font-bold shadow-lg flex items-center gap-2">
<iconify-icon icon="solar:map-arrow-right-linear" width="14"></iconify-icon> Get Directions
                        </span>
</a>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
<p>© 2023 IG Dental Clinic. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
