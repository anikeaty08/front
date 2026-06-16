import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons with correct stroke width
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Intersection Observer for Scroll Reveal using Data Attributes
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.setAttribute('data-visible', 'true');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

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

        // Custom Dropdown Logic
        function toggleDropdown() {
            document.getElementById('dropdown-menu').classList.toggle('hidden');
        }

        function selectOption(value) {
            const display = document.getElementById('selected-treatment');
            display.innerText = value;
            display.classList.remove('text-[#64748B]');
            display.classList.add('text-[#1E293B]');
            document.getElementById('treatmentInput').value = value;
            document.getElementById('dropdown-menu').classList.add('hidden');
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            const dropdown = document.getElementById('treatment-dropdown');
            if (dropdown && !dropdown.contains(e.target)) {
                document.getElementById('dropdown-menu').classList.add('hidden');
            }
        });

        // Form Handling
        function handleSubmit() {
            const form = document.getElementById('bookingForm');
            const successMsg = document.getElementById('successMessage');
            const btn = document.getElementById('submitBtn');
            
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Processing...';
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }); // re-init for new icon

            setTimeout(() => {
                form.classList.add('hidden');
                successMsg.classList.remove('hidden');
                btn.innerHTML = originalText;
            }, 1000);
        }

        function resetForm() {
            document.getElementById('bookingForm').reset();
            document.getElementById('bookingForm').classList.remove('hidden');
            document.getElementById('successMessage').classList.add('hidden');
            
            const display = document.getElementById('selected-treatment');
            display.innerText = 'Select Treatment';
            display.classList.add('text-[#64748B]');
            display.classList.remove('text-[#1E293B]');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b border-[#E2E8F0]" id="navbar">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<img alt="TruCare Dental" className="h-10 object-contain group-hover:scale-105 transition-transform duration-300" src="https://trucaredental.com/wp-content/uploads/2025/07/trucare_latest_and_bigger_logo_migrated.png"/>
</a>

<div className="hidden md:flex items-center gap-8 text-base font-light text-[#64748B]">
<a className="hover:text-[#274C77] transition-colors" href="#home">Home</a>
<a className="hover:text-[#274C77] transition-colors" href="#about">About Us</a>
<a className="hover:text-[#274C77] transition-colors" href="#services">Services</a>
<a className="hover:text-[#274C77] transition-colors" href="#testimonials">Reviews</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="text-base font-normal text-[#0F172A] flex items-center gap-2 hover:text-[#274C77] transition-colors" href="tel:9728640000">
<i className="w-4 h-4" data-lucide="phone"></i> (972) 864-0000
                </a>
<a className="bg-[#274C77] text-white px-6 py-2.5 rounded-full text-base font-light hover:bg-[#1E3C5F] transition-colors duration-300 shadow-[0_10px_20px_-10px_rgba(39,76,119,0.3)] transform hover:-translate-y-0.5" href="#book">
                    Book Online
                </a>
</div>

<button className="md:hidden text-[#0F172A]" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-white border-b border-[#E2E8F0] p-6 flex flex-col gap-4 shadow-xl" id="mobile-menu">
<a className="text-lg font-light text-[#0F172A]" href="#home">Home</a>
<a className="text-lg font-light text-[#0F172A]" href="#about">About Us</a>
<a className="text-lg font-light text-[#0F172A]" href="#services">Services</a>
<a className="text-lg font-light text-[#0F172A]" href="#testimonials">Reviews</a>
<a className="bg-[#274C77] text-white text-center py-3 rounded-lg text-base font-light mt-2" href="#book">Book Appointment</a>
</div>
</nav>

<section className="lg:pt-40 lg:pb-32 overflow-hidden pt-32 pb-20 relative" id="home">
<div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[50rem] h-[50rem] bg-gradient-to-br from-[#6096BA]/10 to-[#274C77]/5 rounded-full blur-3xl -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

<div className="relative z-10 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 opacity-0 translate-y-5 transition-all duration-700 ease-out" data-reveal="" data-visible="true">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F6FA] border border-[#274C77]/10 text-[#274C77] text-sm font-normal mb-6 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#274C77] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#274C77]"></span>
</span>
                    Free Dental Implant Consultation
                </div>
<h1 className="font-['Poppins',sans-serif] font-normal text-4xl lg:text-6xl tracking-tight leading-[1.1] mb-6 text-[#0F172A]">
                    Best Dentist in <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#274C77] to-[#6096BA] tracking-tight">Garland, TX</span>
</h1>
<p className="text-lg lg:text-xl text-[#64748B] mb-8 max-w-lg leading-relaxed">
                    Let us brighten your beautiful smiles. Experience gentle treatments, modern technology, and a compassionate environment with Dr. T. Truc Le and team.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-[#274C77] text-white px-8 py-3.5 rounded-full text-base font-light hover:bg-[#1E3C5F] transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(39,76,119,0.3)] text-center flex items-center justify-center gap-2" href="#book">
                        Book Appointment <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="bg-white border border-[#E2E8F0] text-[#1E293B] px-8 py-3.5 rounded-full text-base font-light hover:border-[#274C77] hover:text-[#274C77] transition-all duration-300 text-center shadow-sm flex items-center justify-center gap-2" href="tel:9728640000">
<i className="w-4 h-4" data-lucide="phone"></i> Call Now
                    </a>
</div>
<div className="mt-10 flex items-center gap-4 text-sm font-light text-[#64748B]">
<div className="flex text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<span>Trusted by <span className="text-[#274C77] font-normal">Hundreds</span> of patients in Garland</span>
</div>
</div>

<div className="relative data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 opacity-0 translate-y-5 transition-all duration-700 ease-out delay-200" data-reveal="" data-visible="true">
<div className="absolute inset-0 bg-gradient-to-br from-[#274C77] to-[#6096BA] opacity-10 rounded-[2.5rem] transform rotate-3 scale-95 translate-y-4"></div>
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#274C77]/10 h-[30rem] lg:h-[35rem] group border border-white">

<img alt="TruCare Dental Clinic" className="object-top transform group-hover:scale-105 transition-transform duration-1000 ease-out w-full h-full object-contain" src="https://trucaredental.com/wp-content/uploads/2025/07/trucare_dental_garland_tx-282_migrated.jpg"/>

<div className="absolute top-6 right-6 bg-white/95 backdrop-blur rounded-full px-4 py-2 shadow-sm border border-white flex items-center gap-2 z-20">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#274C77] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#274C77]"></span>
</span>
<span className="text-sm font-normal text-[#0F172A]">Dr. T. Truc Le, DDS</span>
</div><div className="sm:bottom-6 sm:left-6 sm:right-6 z-20 bg-white/95 border-white border rounded-2xl pt-5 pr-5 pb-5 pl-5 absolute right-4 bottom-4 left-4 shadow-xl backdrop-blur">
<p className="uppercase text-xs font-normal text-[#64748B] tracking-wide mb-4">Recognized For Excellence</p>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-x-4 gap-y-4">

<div className="flex items-start gap-3">
<div className="bg-[#F0F6FA] p-2 rounded-lg text-[#274C77] shrink-0">
<i className="w-4 h-4" data-lucide="award"></i>
</div>
<p className="leading-tight text-sm font-normal text-[#0F172A] font-['Poppins',sans-serif]">2018 Best<br/>of Garland</p>
</div>

<div className="flex items-start gap-3">
<div className="bg-[#F0F6FA] p-2 rounded-lg text-[#274C77] shrink-0">
<i className="w-4 h-4" data-lucide="award"></i>
</div>
<p className="font-['Poppins',sans-serif] font-normal text-sm text-[#0F172A] leading-tight">2019 Best<br/>of Garland</p>
</div>

<div className="flex items-start gap-3">
<div className="bg-[#F0F6FA] p-2 rounded-lg text-[#274C77] shrink-0">
<i className="w-4 h-4" data-lucide="star"></i>
</div>
<p className="font-['Poppins',sans-serif] font-normal text-sm text-[#0F172A] leading-tight">Top Dentist<br/>2021 Texas</p>
</div>

<div className="flex items-start gap-3">
<div className="bg-[#F0F6FA] p-2 rounded-lg text-[#274C77] shrink-0">
<i className="w-4 h-4" data-lucide="medal"></i>
</div>
<p className="font-['Poppins',sans-serif] font-normal text-sm text-[#0F172A] leading-tight">2022 Top 3<br/>Cosmetic</p>
</div>
</div>
</div>

</div>
</div>
</div>
</section>

<section className="bg-white border-[#E2E8F0] border-b pt-12 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="p-6 rounded-2xl bg-[#F8FAFC] hover:bg-[#F0F6FA] transition-colors duration-300 border border-transparent hover:border-[#274C77]/10 group data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 opacity-0 translate-y-5" data-reveal="" data-visible="true">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-[#E2E8F0] flex items-center justify-center text-[#274C77] mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="sparkles"></i>
</div>
<h3 className="font-['Poppins',sans-serif] font-normal text-lg text-[#0F172A] mb-2 tracking-tight">Comprehensive Care</h3>
<p className="text-sm text-[#64748B] leading-relaxed">Offering a wide variety of services from preventative to complex cosmetic procedures.</p>
</div>
<div className="p-6 rounded-2xl bg-[#F8FAFC] hover:bg-[#F0F6FA] transition-colors duration-300 border border-transparent hover:border-[#274C77]/10 group data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 opacity-0 translate-y-5 delay-100" data-reveal="" data-visible="true">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-[#E2E8F0] flex items-center justify-center text-[#274C77] mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="activity"></i>
</div>
<h3 className="font-['Poppins',sans-serif] font-normal text-lg text-[#0F172A] mb-2 tracking-tight">State-of-the-Art Tech</h3>
<p className="text-sm text-[#64748B] leading-relaxed">Utilizing high-quality materials and technologies to provide accurate diagnoses.</p>
</div>
<div className="p-6 rounded-2xl bg-[#F8FAFC] hover:bg-[#F0F6FA] transition-colors duration-300 border border-transparent hover:border-[#274C77]/10 group data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 opacity-0 translate-y-5 delay-200" data-reveal="">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-[#E2E8F0] flex items-center justify-center text-[#274C77] mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="heart-handshake"></i>
</div>
<h3 className="font-['Poppins',sans-serif] font-normal text-lg text-[#0F172A] mb-2 tracking-tight">Compassionate Team</h3>
<p className="text-sm text-[#64748B] leading-relaxed">Dedicated to developing lifelong relationships and exceptional patient experiences.</p>
</div>
<div className="p-6 rounded-2xl bg-[#F8FAFC] hover:bg-[#F0F6FA] transition-colors duration-300 border border-transparent hover:border-[#274C77]/10 group data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 opacity-0 translate-y-5 delay-300" data-reveal="">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-[#E2E8F0] flex items-center justify-center text-[#274C77] mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="smile"></i>
</div>
<h3 className="font-['Poppins',sans-serif] font-normal text-lg text-[#0F172A] mb-2 tracking-tight">Pain-Free Comfort</h3>
<p className="text-sm text-[#64748B] leading-relaxed">Gentle and efficient treatments in a stress-free, friendly environment.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F8FAFC]" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-center">

<div className="lg:w-1/2 relative w-full data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 opacity-0 translate-y-5 transition-all duration-700 ease-out" data-reveal="">
<div className="grid grid-cols-2 gap-4">
<img alt="Dr. T. Truc Le" className="rounded-2xl object-cover object-top h-[16rem] lg:h-[20rem] w-full shadow-lg transform translate-y-8 border border-white" src="https://trucaredental.com/wp-content/uploads/2025/07/docimg_migrated.webp"/>
<img alt="Dr. Alissa Nguyen" className="rounded-2xl object-cover object-top h-[16rem] lg:h-[20rem] w-full shadow-lg border border-white" src="https://trucaredental.com/wp-content/uploads/2025/07/dr_nguyen_migrated.jpeg"/>
</div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0F172A] text-white p-6 rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-xl border-4 border-[#F8FAFC]">
<span className="font-['Poppins',sans-serif] font-normal text-3xl text-[#6096BA] tracking-tight">Top 3</span>
<span className="text-xs text-center leading-tight opacity-80 uppercase tracking-tight mt-1">Dentists<br/>Garland</span>
</div>
</div>

<div className="lg:w-1/2 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 opacity-0 translate-y-5 transition-all duration-700 ease-out delay-100" data-reveal="">
<span className="text-[#274C77] font-light tracking-wide text-sm uppercase mb-2 block">About Our Practice</span>
<h2 className="font-['Poppins',sans-serif] font-normal text-3xl lg:text-4xl text-[#0F172A] mb-6 tracking-tight">
                        Quality Dental Care In <span className="text-[#274C77]">Garland, TX</span>
</h2>
<p className="text-base text-[#64748B] mb-6 leading-relaxed">
                        At TruCare Dental, we value our patient relationships, making it our priority to deliver the gentle, compassionate care that you deserve. We work hard to make you feel at ease by providing exceptional care in a relaxed, convenient atmosphere.
                    </p>
<p className="text-base text-[#64748B] mb-8 leading-relaxed">
                        Led by Dr. T. Truc Le and Dr. Alissa Nguyen, our team utilizes advanced dental treatments and high-quality materials to ensure you have the best experience possible.
                    </p>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-[#6096BA] shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<div>
<h4 className="font-normal text-base text-[#0F172A] tracking-tight">Patient-First Philosophy</h4>
<p className="text-sm text-[#64748B]">Listening to your concerns and answering questions at every step.</p>
</div>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-[#6096BA] shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<div>
<h4 className="font-normal text-base text-[#0F172A] tracking-tight">Award-Winning Care</h4>
<p className="text-sm text-[#64748B]">Recognized consistently as a top dental practice in Texas.</p>
</div>
</div>
</div>
<a className="text-[#274C77] text-base font-normal hover:text-[#0F172A] transition-colors inline-flex items-center gap-2 group" href="#book">
                        Meet Our Team <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 opacity-0 translate-y-5 transition-all duration-700 ease-out" data-reveal="">
<span className="text-[#274C77] font-light tracking-wide text-sm uppercase mb-2 block">Our Expertise</span>
<h2 className="font-['Poppins',sans-serif] font-normal text-3xl lg:text-4xl text-[#0F172A] mb-4 tracking-tight">Comprehensive Dental Solutions</h2>
<p className="text-base text-[#64748B]">From routine pediatric checkups to complex cosmetic makeovers, we cover all your dental needs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-[#F8FAFC] rounded-2xl p-2 shadow-sm border border-[#E2E8F0] hover:shadow-[0_20px_40px_-15px_rgba(39,76,119,0.15)] hover:border-[#274C77]/20 transition-all duration-300 group data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 opacity-0 translate-y-5" data-reveal="">
<div className="overflow-hidden rounded-xl h-48 mb-4 relative bg-gradient-to-br from-[#274C77] to-[#6096BA] flex items-center justify-center">
<img alt="Pediatric Dentistry" className="w-24 h-24 object-contain filter invert opacity-90 transform group-hover:scale-110 transition-transform duration-700" src="https://trucaredental.com/wp-content/uploads/2025/07/s1_migrated.png"/>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="font-['Poppins',sans-serif] font-normal text-lg text-[#0F172A] tracking-tight">Pediatric Dentistry</h3>
<i className="w-5 h-5 text-[#274C77]" data-lucide="users"></i>
</div>
<p className="text-sm text-[#64748B] mb-4 line-clamp-2">Dedicated to preventing oral issues in children from infants to teenagers.</p>
<a className="text-xs font-normal text-[#274C77] uppercase tracking-wide hover:text-[#0F172A] transition-colors" href="#book">Learn More</a>
</div>
</div>

<div className="bg-[#F8FAFC] rounded-2xl p-2 shadow-sm border border-[#E2E8F0] hover:shadow-[0_20px_40px_-15px_rgba(39,76,119,0.15)] hover:border-[#274C77]/20 transition-all duration-300 group data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 opacity-0 translate-y-5 delay-100" data-reveal="">
<div className="overflow-hidden rounded-xl h-48 mb-4 relative bg-gradient-to-br from-[#274C77] to-[#6096BA] flex items-center justify-center">
<img alt="Cosmetic Dentistry" className="w-24 h-24 object-contain filter invert opacity-90 transform group-hover:scale-110 transition-transform duration-700" src="https://trucaredental.com/wp-content/uploads/2025/07/s2_migrated.png"/>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="font-['Poppins',sans-serif] font-normal text-lg text-[#0F172A] tracking-tight">Cosmetic Dentistry</h3>
<i className="w-5 h-5 text-[#274C77]" data-lucide="sparkles"></i>
</div>
<p className="text-sm text-[#64748B] mb-4 line-clamp-2">Improve the appearance of your smile with customized aesthetic procedures.</p>
<a className="text-xs font-normal text-[#274C77] uppercase tracking-wide hover:text-[#0F172A] transition-colors" href="#book">Learn More</a>
</div>
</div>

<div className="bg-[#F8FAFC] rounded-2xl p-2 shadow-sm border border-[#E2E8F0] hover:shadow-[0_20px_40px_-15px_rgba(39,76,119,0.15)] hover:border-[#274C77]/20 transition-all duration-300 group data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 opacity-0 translate-y-5 delay-200" data-reveal="">
<div className="overflow-hidden rounded-xl h-48 mb-4 relative bg-gradient-to-br from-[#274C77] to-[#6096BA] flex items-center justify-center">
<img alt="Dental Implants" className="w-24 h-24 object-contain filter invert opacity-90 transform group-hover:scale-110 transition-transform duration-700" src="https://trucaredental.com/wp-content/uploads/2025/07/s4_migrated.png"/>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="font-['Poppins',sans-serif] font-normal text-lg text-[#0F172A] tracking-tight">Dental Implants</h3>
<i className="w-5 h-5 text-[#274C77]" data-lucide="briefcase-medical"></i>
</div>
<p className="text-sm text-[#64748B] mb-4 line-clamp-2">Permanent, natural-looking solutions for missing teeth replacement.</p>
<a className="text-xs font-normal text-[#274C77] uppercase tracking-wide hover:text-[#0F172A] transition-colors" href="#book">Learn More</a>
</div>
</div>

<div className="bg-[#F8FAFC] rounded-2xl p-2 shadow-sm border border-[#E2E8F0] hover:shadow-[0_20px_40px_-15px_rgba(39,76,119,0.15)] hover:border-[#274C77]/20 transition-all duration-300 group data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 opacity-0 translate-y-5" data-reveal="">
<div className="overflow-hidden rounded-xl h-48 mb-4 relative bg-gradient-to-br from-[#274C77] to-[#6096BA] flex items-center justify-center">
<img alt="Braces" className="w-24 h-24 object-contain filter invert opacity-90 transform group-hover:scale-110 transition-transform duration-700" src="https://trucaredental.com/wp-content/uploads/2025/07/s5_migrated.png"/>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="font-['Poppins',sans-serif] font-normal text-lg text-[#0F172A] tracking-tight">Braces &amp; Aligners</h3>
<i className="w-5 h-5 text-[#274C77]" data-lucide="ruler"></i>
</div>
<p className="text-sm text-[#64748B] mb-4 line-clamp-2">Straighten teeth and correct bite issues with traditional or modern aligners.</p>
<a className="text-xs font-normal text-[#274C77] uppercase tracking-wide hover:text-[#0F172A] transition-colors" href="#book">Learn More</a>
</div>
</div>

<div className="bg-[#F8FAFC] rounded-2xl p-2 shadow-sm border border-[#E2E8F0] hover:shadow-[0_20px_40px_-15px_rgba(39,76,119,0.15)] hover:border-[#274C77]/20 transition-all duration-300 group data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 opacity-0 translate-y-5 delay-100" data-reveal="">
<div className="overflow-hidden rounded-xl h-48 mb-4 relative bg-gradient-to-br from-[#274C77] to-[#6096BA] flex items-center justify-center">
<img alt="Root Canal" className="w-24 h-24 object-contain filter invert opacity-90 transform group-hover:scale-110 transition-transform duration-700" src="https://trucaredental.com/wp-content/uploads/2025/07/s3_migrated.png"/>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="font-['Poppins',sans-serif] font-normal text-lg text-[#0F172A] tracking-tight">Root Canal</h3>
<i className="w-5 h-5 text-[#274C77]" data-lucide="heart-pulse"></i>
</div>
<p className="text-sm text-[#64748B] mb-4 line-clamp-2">Safe removal of damaged pulp to relieve severe pain and save your natural tooth.</p>
<a className="text-xs font-normal text-[#274C77] uppercase tracking-wide hover:text-[#0F172A] transition-colors" href="#book">Learn More</a>
</div>
</div>

<div className="bg-[#F8FAFC] rounded-2xl p-2 shadow-sm border border-[#E2E8F0] hover:shadow-[0_20px_40px_-15px_rgba(39,76,119,0.15)] hover:border-[#274C77]/20 transition-all duration-300 group data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 opacity-0 translate-y-5 delay-200" data-reveal="">
<div className="overflow-hidden rounded-xl h-48 mb-4 relative bg-gradient-to-br from-[#274C77] to-[#6096BA] flex items-center justify-center">
<img alt="Dentures" className="w-24 h-24 object-contain filter invert opacity-90 transform group-hover:scale-110 transition-transform duration-700" src="https://trucaredental.com/wp-content/uploads/2025/07/s51_migrated.png"/>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="font-['Poppins',sans-serif] font-normal text-lg text-[#0F172A] tracking-tight">Dentures</h3>
<i className="w-5 h-5 text-[#274C77]" data-lucide="smile"></i>
</div>
<p className="text-sm text-[#64748B] mb-4 line-clamp-2">Custom-fitted replacements for missing teeth, restoring function and appearance.</p>
<a className="text-xs font-normal text-[#274C77] uppercase tracking-wide hover:text-[#0F172A] transition-colors" href="#book">Learn More</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-[#0F172A] text-white relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[#1E3C5F]/80 to-[#0F172A]"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
<div className="data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 opacity-0 translate-y-5 transition-all duration-700 ease-out" data-reveal="">
<span className="block text-4xl lg:text-5xl font-['Poppins',sans-serif] font-normal text-[#6096BA] mb-2 tracking-tight">200+</span>
<span className="text-sm text-white/70 tracking-wide uppercase">5-Star Reviews</span>
</div>
<div className="data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 opacity-0 translate-y-5 transition-all duration-700 ease-out delay-100" data-reveal="">
<span className="block text-4xl lg:text-5xl font-['Poppins',sans-serif] font-normal text-[#6096BA] mb-2 tracking-tight">10+</span>
<span className="text-sm text-white/70 tracking-wide uppercase">Years Experience</span>
</div>
<div className="data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 opacity-0 translate-y-5 transition-all duration-700 ease-out delay-200" data-reveal="">
<span className="block text-4xl lg:text-5xl font-['Poppins',sans-serif] font-normal text-[#6096BA] mb-2 tracking-tight">4</span>
<span className="text-sm text-white/70 tracking-wide uppercase">Major Awards</span>
</div>
<div className="data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 opacity-0 translate-y-5 transition-all duration-700 ease-out delay-300" data-reveal="">
<span className="block text-4xl lg:text-5xl font-['Poppins',sans-serif] font-normal text-[#6096BA] mb-2 tracking-tight">100%</span>
<span className="text-sm text-white/70 tracking-wide uppercase">Patient Focus</span>
</div>
</div>
</section>

<section className="py-24 bg-[#F0F6FA]" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center text-center mb-12">
<span className="text-[#274C77] font-light tracking-wide text-sm uppercase mb-2 block">Testimonials</span>
<h2 className="font-['Poppins',sans-serif] font-normal text-3xl lg:text-4xl text-[#0F172A] tracking-tight">Patient Stories</h2>
<div className="flex items-center gap-2 mt-4">
<div className="flex text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<span className="text-sm text-[#64748B]">Based on 200+ Reviews</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E2E8F0] hover:border-[#274C77]/20 transition-colors data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 opacity-0 translate-y-5 duration-700 ease-out flex flex-col justify-between" data-reveal="">
<p className="text-[#1E293B] text-base italic mb-6 leading-relaxed">"Dr. Le is a great dentist. My husband's back tooth was starting to bother him and I knew we had to find a good dentist fast! As I searched online... I found TruCare Dental."</p>
<div className="flex items-center gap-4 mt-auto border-t border-[#E2E8F0]/50 pt-4">
<div className="w-10 h-10 bg-[#274C77]/10 rounded-full flex items-center justify-center text-[#274C77] font-normal text-base">BC</div>
<div>
<p className="font-normal text-base text-[#0F172A] tracking-tight">Beverly C.</p>
<p className="text-xs text-[#64748B]">Yelp Review</p>
</div>
<i className="w-6 h-6 text-[#E2E8F0] ml-auto rotate-180" data-lucide="quote"></i>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E2E8F0] hover:border-[#274C77]/20 transition-colors data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 opacity-0 translate-y-5 duration-700 ease-out delay-100 flex flex-col justify-between" data-reveal="">
<p className="text-[#1E293B] text-base italic mb-6 leading-relaxed">"TruCare Dental is wonderful! Dr. Le and her staff are true professionals. I have had way too many bad experiences over the years with dentists... They changed that."</p>
<div className="flex items-center gap-4 mt-auto border-t border-[#E2E8F0]/50 pt-4">
<div className="w-10 h-10 bg-[#6096BA]/10 rounded-full flex items-center justify-center text-[#6096BA] font-normal text-base">JH</div>
<div>
<p className="font-normal text-base text-[#0F172A] tracking-tight">Jim H.</p>
<p className="text-xs text-[#64748B]">Facebook Review</p>
</div>
<i className="w-6 h-6 text-[#E2E8F0] ml-auto rotate-180" data-lucide="quote"></i>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E2E8F0] hover:border-[#274C77]/20 transition-colors data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 opacity-0 translate-y-5 duration-700 ease-out delay-200 flex flex-col justify-between" data-reveal="">
<p className="text-[#1E293B] text-base italic mb-6 leading-relaxed">"Five stars is to give Dr Le and her staff. Great location, friendly staff and a GREAT Doctor. The clinic is incredibly clean and modern."</p>
<div className="flex items-center gap-4 mt-auto border-t border-[#E2E8F0]/50 pt-4">
<div className="w-10 h-10 bg-[#0F172A]/5 rounded-full flex items-center justify-center text-[#0F172A] font-normal text-base">TT</div>
<div>
<p className="font-normal text-base text-[#0F172A] tracking-tight">Tin T.</p>
<p className="text-xs text-[#64748B]">Google Review</p>
</div>
<i className="w-6 h-6 text-[#E2E8F0] ml-auto rotate-180" data-lucide="quote"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="book">
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="bg-[#F8FAFC] rounded-3xl p-8 md:p-12 shadow-[0_10px_40px_-10px_rgba(39,76,119,0.05)] border border-[#E2E8F0]">
<div className="text-center mb-10">
<h2 className="font-['Poppins',sans-serif] font-normal text-3xl text-[#0F172A] mb-2 tracking-tight">Request an Appointment</h2>
<p className="text-base text-[#64748B]">Fill out the form below and our office will get back to you shortly.</p>
</div>
<form className="space-y-6" id="bookingForm" onsubmit="event.preventDefault(); handleSubmit();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="relative">
<input className="peer w-full border border-[#E2E8F0] bg-white rounded-lg p-4 pt-6 pb-2 text-base outline-none transition-all duration-200 text-[#1E293B] focus:border-[#274C77] focus:ring-[3px] focus:ring-[#274C77]/10 placeholder-transparent" id="name" placeholder="Full Name" required="" type="text"/>
<label className="absolute left-4 top-2 text-sm text-[#64748B] pointer-events-none transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#274C77]" htmlFor="name">Full Name</label>
</div>

<div className="relative">
<input className="peer w-full border border-[#E2E8F0] bg-white rounded-lg p-4 pt-6 pb-2 text-base outline-none transition-all duration-200 text-[#1E293B] focus:border-[#274C77] focus:ring-[3px] focus:ring-[#274C77]/10 placeholder-transparent" id="phone" placeholder="Phone Number" required="" type="tel"/>
<label className="absolute left-4 top-2 text-sm text-[#64748B] pointer-events-none transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#274C77]" htmlFor="phone">Phone Number</label>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="relative">
<input className="peer w-full border border-[#E2E8F0] bg-white rounded-lg p-4 pt-6 pb-2 text-base outline-none transition-all duration-200 text-[#1E293B] focus:border-[#274C77] focus:ring-[3px] focus:ring-[#274C77]/10 placeholder-transparent" id="email" placeholder="Email Address" required="" type="email"/>
<label className="absolute left-4 top-2 text-sm text-[#64748B] pointer-events-none transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#274C77]" htmlFor="email">Email Address</label>
</div>

<div className="relative" id="treatment-dropdown">
<div className="flex justify-between items-center border border-[#E2E8F0] rounded-lg bg-white p-4 h-full cursor-pointer transition-all duration-200 hover:border-[#274C77]" onclick="toggleDropdown()">
<span className="text-base text-[#64748B]" id="selected-treatment">Select Treatment</span>
<i className="text-[#274C77] w-5 h-5" data-lucide="chevron-down"></i>
</div>
<div className="hidden absolute top-[110%] left-0 right-0 bg-white border border-[#E2E8F0] rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.05)] z-20 overflow-hidden" id="dropdown-menu">
<div className="p-4 text-base hover:bg-[#F0F6FA] hover:text-[#274C77] transition-colors cursor-pointer" onclick="selectOption('Comprehensive Exam')">Comprehensive Exam</div>
<div className="p-4 text-base hover:bg-[#F0F6FA] hover:text-[#274C77] transition-colors cursor-pointer" onclick="selectOption('Dental Implants')">Dental Implants</div>
<div className="p-4 text-base hover:bg-[#F0F6FA] hover:text-[#274C77] transition-colors cursor-pointer" onclick="selectOption('Cosmetic Dentistry')">Cosmetic Dentistry</div>
<div className="p-4 text-base hover:bg-[#F0F6FA] hover:text-[#274C77] transition-colors cursor-pointer" onclick="selectOption('Root Canal')">Root Canal</div>
<div className="p-4 text-base hover:bg-[#F0F6FA] hover:text-[#274C77] transition-colors cursor-pointer" onclick="selectOption('Orthodontics / Braces')">Orthodontics / Braces</div>
</div>
<input id="treatmentInput" name="treatment" type="hidden"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="relative">
<input className="peer w-full border border-[#E2E8F0] bg-white rounded-lg p-4 pt-6 pb-2 text-base outline-none transition-all duration-200 text-[#1E293B] focus:border-[#274C77] focus:ring-[3px] focus:ring-[#274C77]/10" id="date" required="" type="date"/>
<label className="absolute left-4 top-2 text-sm text-[#274C77] pointer-events-none bg-white px-1 -mx-1" htmlFor="date">Preferred Date</label>
</div>
<div className="relative">
<input className="peer w-full border border-[#E2E8F0] bg-white rounded-lg p-4 pt-6 pb-2 text-base outline-none transition-all duration-200 text-[#1E293B] focus:border-[#274C77] focus:ring-[3px] focus:ring-[#274C77]/10 placeholder-transparent" id="patientType" placeholder="New or Existing Patient?" type="text"/>
<label className="absolute left-4 top-2 text-sm text-[#64748B] pointer-events-none transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#274C77]" htmlFor="patientType">New or Existing Patient?</label>
</div>
</div>
<button className="w-full bg-[#274C77] text-white text-base font-light py-4 rounded-lg shadow-[0_10px_20px_-10px_rgba(39,76,119,0.3)] hover:bg-[#1E3C5F] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2" id="submitBtn" type="submit">
                        Confirm Request
                    </button>
</form>

<div className="hidden text-center py-12" id="successMessage">
<div className="w-16 h-16 bg-[#F0F6FA] rounded-full flex items-center justify-center mx-auto mb-4 text-[#274C77]">
<i className="w-8 h-8" data-lucide="check-circle"></i>
</div>
<h3 className="text-3xl font-['Poppins',sans-serif] font-normal text-[#0F172A] mb-2 tracking-tight">Great!</h3>
<p className="text-base text-[#64748B]">Thank you for submitting your request. Our office will get back to you.</p>
<button className="mt-6 text-[#274C77] text-base font-normal hover:underline" onclick="resetForm()">Book another</button>
</div>
</div>
</div>
</section>

<footer className="bg-[#0F172A] pt-20 pb-10 text-white/80 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<div className="flex items-center gap-2 mb-6">
<img alt="TruCare Dental" className="h-12 object-contain filter invert brightness-0" src="https://trucaredental.com/wp-content/uploads/2025/07/trucare_latest_and_bigger_logo_migrated.png"/>
</div>
<p className="text-sm leading-relaxed text-white/60 mb-6">
                        Quality Dental Care in Garland, TX. Providing premium dental services ranging from preventative care to cosmetic procedures.
                    </p>
</div>

<div>
<h4 className="text-white font-['Poppins',sans-serif] font-normal text-lg mb-6 tracking-tight">Get in Touch</h4>
<ul className="space-y-4 text-base font-extralight">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#6096BA] shrink-0 mt-0.5" data-lucide="map-pin"></i>
<span>3031 South 1st St #400,<br/>Garland, TX 75041</span>
</li>
<li className="flex items-center gap-3 group cursor-pointer">
<i className="w-5 h-5 text-[#6096BA] shrink-0 group-hover:scale-110 transition-transform" data-lucide="phone"></i>
<a className="hover:text-[#6096BA] transition-colors" href="tel:9728640000">(972) 864-0000</a>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-[#6096BA] shrink-0" data-lucide="mail"></i>
<a className="hover:text-[#6096BA] transition-colors" href="mailto:trucaredental@gmail.com">trucaredental@gmail.com</a>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-['Poppins',sans-serif] font-normal text-lg mb-6 tracking-tight">Office Hours</h4>
<ul className="space-y-3 text-base font-extralight">
<li className="flex justify-between border-b border-white/10 pb-2">
<span>Monday</span>
<span className="text-white">9:00 AM - 6:00 PM</span>
</li>
<li className="flex justify-between border-b border-white/10 pb-2">
<span>Tue - Fri</span>
<span className="text-white">8:30 AM - 5:00 PM</span>
</li>
<li className="flex justify-between border-b border-white/10 pb-2">
<span>Saturday</span>
<span className="text-white">8:00 AM - 2:00 PM</span>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-['Poppins',sans-serif] font-normal text-lg mb-6 tracking-tight">Visit Us</h4>
<div className="rounded-xl overflow-hidden h-32 bg-gray-800 relative group mb-4">
<div className="w-full h-full bg-gradient-to-br from-[#274C77]/40 to-[#0F172A] flex items-center justify-center">
<i className="w-10 h-10 text-white/50" data-lucide="map-pin"></i>
</div>
<a className="absolute inset-0 flex items-center justify-center bg-[#0F172A]/40 group-hover:bg-[#0F172A]/60 transition-colors" href="https://www.google.com/maps/place/TruCare+Dental" target="_blank">
<span className="bg-white text-[#0F172A] px-4 py-2 rounded-lg text-sm font-normal shadow-lg flex items-center gap-2">
<i className="w-4 h-4" data-lucide="navigation"></i> Get Directions
                            </span>
</a>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-extralight text-white/40">
<p>© 2023 TruCare Dental. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms and Conditions</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
