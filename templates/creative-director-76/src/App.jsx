import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Scroll Reveal Animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 w-full h-full -z-10">

<div className="absolute inset-0 bg-black/40 pointer-events-none z-[1]"></div>

<iframe className="w-full h-full object-cover" frameborder="0" height="100%" src="https://my.spline.design/radialglass-20RYcJn9wbsEb5QEYkazHjpb" width="100%"></iframe>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#08090A]/70 backdrop-blur-xl">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-base font-medium tracking-tight text-white flex items-center gap-2 group" href="#">
<div className="w-6 h-6 rounded bg-neutral-100 flex items-center justify-center text-black font-bold text-xs group-hover:scale-90 transition-transform">J</div>
<span className="group-hover:opacity-100 transition-opacity opacity-90" style={{}}>Atif Beig</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
</div>
<a className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white hover:bg-white/10 transition-colors" href="mailto:hello@johanbeker.com">
<iconify-icon className="" icon="solar:letter-linear" width="16"></iconify-icon>
<span className="">Get in touch</span>
</a>
</div>
</nav>
<main className="pt-32 pb-20 px-4 sm:px-6 relative z-10">
<div className="max-w-7xl mr-auto ml-auto space-y-4">

<section className="reveal md:py-20 active text-center max-w-4xl mr-auto ml-auto pt-12 pb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/30 text-xs font-medium text-neutral-400 mb-6 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Available for new projects
                </div>
<h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-medium tracking-tight text-white mb-6 leading-[1.1] drop-shadow-2xl">
                    Digital designer crafting <br className="hidden sm:block"/>
<span className="text-neutral-400">future-ready experiences.</span>
</h1>
<p className="text-base sm:text-lg text-neutral-300 max-w-xl mx-auto leading-relaxed drop-shadow-lg">
                    I help companies build their brand and digital products with a focus on motion, interaction, and clean typography.
                </p>
</section>

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-x-4 gap-y-4" id="about">

<div className="reveal md:col-span-1 lg:col-span-1 glass-panel rounded-3xl p-2 flex flex-col gap-2 h-full">
<div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-neutral-800">
<img alt="Portrait" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c09ed98e-10f3-44e3-a10e-229778605846_800w.jpg"/>
<div className="bg-gradient-to-t from-black/80 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-4">
<h2 className="text-white font-medium text-lg tracking-tight">Johan Beker</h2>
<p className="text-neutral-400 text-xs">Jhansi, Uttar Pradesh</p>
</div>
</div>
<div className="flex flex-col flex-1 pt-4 pr-4 pb-4 pl-4 gap-x-4 gap-y-4 justify-end">
<div className="flex items-center justify-between text-xs font-medium text-neutral-400">
<span>Follow me</span>
</div>
<div className="flex gap-2">
<a className="h-10 w-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors" href="#">
<iconify-icon icon="simple-icons:x" width="16"></iconify-icon>
</a>
<a className="h-10 w-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors" href="#">
<iconify-icon icon="simple-icons:dribbble" width="16"></iconify-icon>
</a>
<a className="h-10 w-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors" href="#">
<iconify-icon icon="simple-icons:linkedin" width="16"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="reveal delay-100 md:col-span-2 lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-4">

<div className="glass-panel lg:p-8 flex flex-col rounded-3xl pt-6 pr-6 pb-6 pl-6 justify-between">
<div className="">
<div className="flex items-center gap-2 mb-6 text-neutral-400">
<iconify-icon icon="solar:user-id-linear" width="20"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider">About</span>
</div>
<p className="text-lg sm:text-xl text-neutral-200 leading-relaxed font-heading">
                                With over 3 years of experience, I specialize in UI/UX and product design. I blend aesthetics with functionality to solve complex problems.
                            </p>
</div>
<div className="mt-10">
<span className="text-xs font-medium text-neutral-500 mb-4 block uppercase tracking-wider">Toolkit</span>
<div className="flex flex-wrap gap-2">
<div className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 flex items-center gap-2 hover:bg-white/10 transition-colors cursor-default">
<iconify-icon className="text-neutral-300" icon="simple-icons:figma" width="14"></iconify-icon>
<span className="text-xs text-neutral-200">Figma</span>
</div>
<div className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 flex items-center gap-2 hover:bg-white/10 transition-colors cursor-default">
<iconify-icon className="text-neutral-300" icon="simple-icons:framer" width="14"></iconify-icon>
<span className="text-xs text-neutral-200">Framer</span>
</div>
<div className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 flex items-center gap-2 hover:bg-white/10 transition-colors cursor-default">
<iconify-icon className="text-neutral-300" icon="simple-icons:react" width="14"></iconify-icon>
<span className="text-xs text-neutral-200">React</span>
</div>
<div className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 flex items-center gap-2 hover:bg-white/10 transition-colors cursor-default">
<iconify-icon className="text-neutral-300" icon="simple-icons:webflow" width="14"></iconify-icon>
<span className="text-xs text-neutral-200">Webflow</span>
</div>
<div className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 flex items-center gap-2 hover:bg-white/10 transition-colors cursor-default">
<iconify-icon className="text-neutral-300" icon="simple-icons:blender" width="14"></iconify-icon>
<span className="text-xs text-neutral-200">Blender</span>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-3xl p-6 lg:p-8">
<div className="flex items-center gap-2 mb-6 text-neutral-400">
<iconify-icon icon="solar:briefcase-linear" width="20"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider">Experience</span>
</div>
<div className="space-y-4">

<div className="group flex items-center justify-between p-3 -mx-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-lg bg-[#000] border border-white/10 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="simple-icons:stripe" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium text-white tracking-tight">Stripe</h4>
<p className="text-xs text-neutral-500 mt-0.5">Product Designer</p>
</div>
</div>
<span className="text-xs text-neutral-500 font-medium">2023 — Pres</span>
</div>

<div className="group flex items-center justify-between p-3 -mx-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
<div className="flex gap-4 gap-x-4 gap-y-4 items-center">
<div className="h-10 w-10 rounded-lg bg-[#000] border border-white/10 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="simple-icons:vercel" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium text-white tracking-tight">Vercel</h4>
<p className="text-xs text-neutral-500 mt-0.5">Senior UI Designer</p>
</div>
</div>
<span className="text-xs text-neutral-500 font-medium">2021 — 2023</span>
</div>

<div className="group flex items-center justify-between p-3 -mx-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-lg bg-[#000] border border-white/10 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="simple-icons:linear" width="18"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium text-white tracking-tight">Linear</h4>
<p className="text-xs text-neutral-500 mt-0.5">Product Visual</p>
</div>
</div>
<span className="text-xs text-neutral-500 font-medium">2019 — 2021</span>
</div>

<div className="group flex items-center justify-between p-3 -mx-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-lg bg-[#000] border border-white/10 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="simple-icons:spotify" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium text-white tracking-tight">Spotify</h4>
<p className="text-xs text-neutral-500 mt-0.5">Visual Intern</p>
</div>
</div>
<span className="text-xs text-neutral-500 font-medium">2018 — 2019</span>
</div>
</div>
</div>

<div className="lg:col-span-2 glass-panel rounded-3xl overflow-hidden group relative">
<div className="absolute top-6 left-6 z-10 flex items-center gap-2">
<div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur border border-white/10 text-xs font-medium text-white flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                                Latest Project
                             </div>
</div>
<div className="p-6 pb-0 h-full flex flex-col">
<div className="flex justify-between items-end mb-6">
<div>
<h3 className="text-xl text-white font-medium tracking-tight">Finance Dashboard</h3>
<p className="text-sm text-neutral-400 mt-1">Product design for a fintech unicorn</p>
</div>
<div className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
<div className="relative flex-1 rounded-t-lg overflow-hidden border-t border-l border-r border-white/10 bg-neutral-900 shadow-2xl translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<img alt="Dashboard" className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</div>
</div>

<div className="py-20" id="services">
<div className="reveal mb-10 flex items-center justify-between">
<div>
<h2 className="text-2xl font-heading font-medium text-white tracking-tight">Services</h2>
<p className="text-sm text-neutral-400 mt-1">Design solutions for every stage.</p>
</div>
<a className="text-xs text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors" href="#contact">View pricing</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="reveal glass-panel rounded-3xl p-6 group hover:-translate-y-1 transition-transform duration-300">
<div className="h-10 w-10 rounded-lg bg-gradient-to-br from-neutral-800 to-black border border-white/10 flex items-center justify-center text-white mb-6 group-hover:border-neutral-600 transition-colors">
<iconify-icon icon="solar:monitor-smartphone-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-2 tracking-tight">Web Design</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">
                            High-converting landing pages and marketing sites. I focus on storytelling and visual hierarchy to drive results.
                        </p>
<div className="grid grid-cols-2 gap-2 mt-auto">
<div className="h-20 bg-neutral-900 rounded-lg border border-white/5 overflow-hidden">
<img alt="Web" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="h-20 bg-neutral-900 rounded-lg border border-white/5 overflow-hidden">
<img alt="Web 2" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>
</div>

<div className="reveal delay-100 glass-panel rounded-3xl p-6 group hover:-translate-y-1 transition-transform duration-300">
<div className="h-10 w-10 rounded-lg bg-gradient-to-br from-neutral-800 to-black border border-white/10 flex items-center justify-center text-white mb-6 group-hover:border-neutral-600 transition-colors">
<iconify-icon icon="solar:figma-file-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-2 tracking-tight">Product Design</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">
                            Scalable design systems and intuitive user interfaces for SaaS products. From wireframes to high-fidelity prototyping.
                        </p>
<div className="grid grid-cols-2 gap-2 mt-auto">
<div className="h-20 bg-neutral-900 rounded-lg border border-white/5 overflow-hidden">
<img alt="SaaS" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="h-20 bg-neutral-900 rounded-lg border border-white/5 overflow-hidden">
<img alt="App" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
</div>
</div>

<div className="reveal delay-200 glass-panel rounded-3xl p-6 group hover:-translate-y-1 transition-transform duration-300">
<div className="h-10 w-10 rounded-lg bg-gradient-to-br from-neutral-800 to-black border border-white/10 flex items-center justify-center text-white mb-6 group-hover:border-neutral-600 transition-colors">
<iconify-icon icon="solar:pallete-2-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-2 tracking-tight">Brand Identity</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">
                            Distinctive logos and comprehensive brand guidelines that help your business stand out in a crowded market.
                        </p>
<div className="grid grid-cols-2 gap-2 mt-auto">
<div className="h-20 bg-neutral-900 rounded-lg border border-white/5 overflow-hidden">
<img alt="Brand" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="h-20 bg-neutral-900 rounded-lg border border-white/5 overflow-hidden flex items-center justify-center">
<div className="text-neutral-600">
<iconify-icon icon="solar:gallery-wide-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="reveal glass-panel rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden" id="contact">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl sm:text-4xl text-white font-medium font-heading tracking-tight mb-4">Ready to start your project?</h2>
<p className="text-neutral-400 text-sm sm:text-base mb-8">
                        I'm currently available for freelance work. Let's create something meaningful together.
                    </p>
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors" href="mailto:hello@johanbeker.com">
<span className="">hello@johanbeker.com</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/5 bg-[#08090A]/90 backdrop-blur-xl relative z-20">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div className="">
<h3 className="text-lg font-medium text-white tracking-tight" style={{}}>Atif Beig</h3>
<p className="text-neutral-500 text-xs mt-1">© 2024. All rights reserved.</p>
</div>
<div className="flex gap-6 text-sm text-neutral-400">
<a className="hover:text-white transition-colors" href="#" style={{}}>X</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Dribbble</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
