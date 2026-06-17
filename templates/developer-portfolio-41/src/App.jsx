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



        const projectsData = {
            'finer': `
                <h1 class="">Finer Aviation</h1>
                <img src="https://cdn.prod.website-files.com/652ad8bd9a8da6be30a068cb/67dd498775fd4a4e85b90677_1.jpg" alt="Finer Aviation Hero" class="w-full rounded-lg mb-8">
                
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8 py-6 border-y border-white/10 text-sm">
                    <div><span class="text-neutral-500 block text-xs uppercase tracking-widest mb-1">Client</span><strong class="text-white">Finer Aviation</strong></div>
                    <div><span class="text-neutral-500 block text-xs uppercase tracking-widest mb-1">Location</span><strong class="text-white">Poole</strong></div>
                    <div><span class="text-neutral-500 block text-xs uppercase tracking-widest mb-1">Tools</span><strong class="text-white">Webflow, Figma</strong></div>
                    <div class="sm:col-span-3 mt-2 sm:mt-0"><span class="text-neutral-500 block text-xs uppercase tracking-widest mb-1">Website</span><a href="https://www.fineraviation.com/" target="_blank" class="text-emerald-400 hover:underline break-all">fineraviation.com</a></div>
                </div>

                <h3>Introduction</h3>
                <p>Finer Aviation is dedicated to providing exceptional, bespoke private jet charter services, ensuring every journey is tailored to the unique needs and preferences of each client. Whether you’re flying for business or leisure, Finer Aviation offers the ultimate in luxury, comfort, and efficiency. Based on a deep understanding of aviation excellence, their team delivers personalised travel experiences with meticulous attention to detail, ensuring a seamless and stress-free journey from takeoff to landing.</p>
                <p>Finer Aviation tasked our team with creating an elegant, user-friendly website to reflect the high standards of their services. <strong>The website showcases their premium charter offerings, providing an intuitive platform for clients to easily explore options, book flights, and get in touch.</strong></p>

                <img src="https://cdn.prod.website-files.com/652ad8bd9a8da6be30a068cb/67dd4a55f5e75223405e2aa8_2.jpg" alt="Finer Aviation detail">

                <hr>

                <h3>What We Did</h3>
                <p>To introduce <strong>Finer Aviation</strong> to the digital world, we started by designing and developing an elegant landing page that immediately communicated the premium nature of their private jet charter services. This served as a strategic entry point for their brand online, offering prospective clients a visually engaging and seamless preview of the experience they could expect.</p>
                <p>Building on that foundation, we expanded the concept into a fully responsive, custom-developed website using <strong>Webflow</strong>. This platform allowed us to craft a high-performance site with pixel-perfect precision, optimized loading speeds, and robust scalability. Every layout was tailored for both <strong>desktop and mobile</strong>, ensuring consistency in experience across devices.</p>
                <p>As the <strong>Webflow developer</strong>, I implemented advanced layout strategies and modular components, giving the internal team flexibility for future updates without sacrificing design integrity. From CMS integration to custom animations, the development was thoughtfully structured to maintain both elegance and functionality.</p>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <img src="https://cdn.prod.website-files.com/652ad8bd9a8da6be30a068cb/67dd4f7ae8da95b646b005fc_3.jpg" alt="Project Image 3">
                    <img src="https://cdn.prod.website-files.com/652ad8bd9a8da6be30a068cb/67dd4aaaafef400156f0dbc8_4.jpg" alt="Project Image 4">
                </div>

                <h3>Result</h3>
                <p>Through our collaboration, we delivered a polished, high-performing <strong>Webflow website</strong> that perfectly reflects Finer Aviation’s identity. The final product offers a smooth, engaging user experience across all devices, allowing potential clients to effortlessly explore the brand’s luxury private jet services anytime, anywhere.</p>

                <blockquote>
                    "<strong>The quality of their work has been outstanding and has surpassed our expectations</strong>. The process that got us to that point has been easy. They’ve allowed us some artistic license, but they’ve also been realistic about what could be achieved. They’ve achieved everything we’ve asked for, and we’re thrilled with everything from the service to the outcome."
                    <br><br>
                    — <strong>Laura Green, Managing Director</strong>
                </blockquote>
            `,
            'padel': `
                <h1 class="">Mobile Padel Co</h1>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8 py-6 border-y border-white/10 text-sm">
                    <div><span class="text-neutral-500 block text-xs uppercase tracking-widest mb-1">Client</span><strong class="text-white">Mobile Padel Co</strong></div>
                    <div><span class="text-neutral-500 block text-xs uppercase tracking-widest mb-1">Location</span><strong class="text-white">UK</strong></div>
                    <div><span class="text-neutral-500 block text-xs uppercase tracking-widest mb-1">Tools</span><strong class="text-white">Webflow, Figma</strong></div>
                    <div class="sm:col-span-3 mt-2 sm:mt-0"><span class="text-neutral-500 block text-xs uppercase tracking-widest mb-1">Website</span><a href="https://www.mobilepadel.co.uk/" target="_blank" class="text-emerald-400 hover:underline break-all">mobilepadel.co.uk</a></div>
                </div>

                <img src="https://cdn.prod.website-files.com/652ad8bd9a8da6be30a068cb/67dbe334cc24798702314c98_Mobile%20Padel%20Desktop%20PNG%202.png" alt="Mobile Padel Hero">

                <h3>Website Development</h3>
                <p>As a <strong>Webflow developer</strong>, I led the development of a high-performance, visually engaging website that captured the energy and flexibility of Mobile Padel’s brand. After designing a distinctive and dynamic logo and UI system, we translated the creative direction into a fast, responsive site built entirely in Webflow CMS.</p>
                <p>We prioritised <strong>conversion rate optimisation (CRO)</strong> through a streamlined layout, intuitive navigation, and performance-focused animations. The site allows both padel enthusiasts and industry professionals to <strong>easily explore, inquire about, or book</strong> custom-built mobile and fixed courts, all while enjoying a smooth and modern user experience.</p>

                <img src="https://cdn.prod.website-files.com/652ad8bd9a8da6be30a068cb/67dbe396cb61c50c6677054c_Mobile%20Padel%20Desktop%20PNG%201.png" alt="Desktop view">

                <hr>

                <h3>The Challenge</h3>
                <p>Create a website that feels both dynamic and easy to use—for beginners and experienced padel players alike—while keeping the booking process simple and fast.</p>

                <h3>The Solution</h3>
                <p>As the Webflow Developer, I built a clean, responsive website using Webflow CMS. I focused on intuitive structure, smooth animations, and fast performance. The result is a user-friendly platform that’s easy to manage and ready to grow with the business.</p>

                <hr>

                <div class="grid grid-cols-2 gap-4">
                    <img src="https://cdn.prod.website-files.com/652ad8bd9a8da6be30a068cb/67dbe5247e79371715c8a73e_32%201.png" alt="Mobile view 1">
                    <img src="https://cdn.prod.website-files.com/652ad8bd9a8da6be30a068cb/67dbe6a5ed9d39063bc73806_31%201.png" alt="Mobile view 2">
                </div>

                <h3>The Result</h3>
                <p>The website launch delivered a measurable boost in engagement. Visitors can now navigate, inquire, and interact with the brand effortlessly—whether they’re purchasing a court or learning about the sport.</p>
            `,
            'cleaning': `
                <h1 class="">CS Cleaning</h1>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8 py-6 border-y border-white/10 text-sm">
                    <div><span class="text-neutral-500 block text-xs uppercase tracking-widest mb-1">Client</span><strong class="text-white">CS Cleaning</strong></div>
                    <div><span class="text-neutral-500 block text-xs uppercase tracking-widest mb-1">Location</span><strong class="text-white">Milton Keynes</strong></div>
                    <div><span class="text-neutral-500 block text-xs uppercase tracking-widest mb-1">Tools</span><strong class="text-white">Webflow, Figma</strong></div>
                    <div class="sm:col-span-3 mt-2 sm:mt-0"><span class="text-neutral-500 block text-xs uppercase tracking-widest mb-1">Website</span><a href="https://www.cscleaning.co.uk/" target="_blank" class="text-emerald-400 hover:underline break-all">cscleaning.co.uk</a></div>
                </div>

                <img src="https://cdn.prod.website-files.com/652ad8bd9a8da6be30a068cb/67dbea9c7dfd2eae932bca69_Mobile%20Padel%20Desktop%20PNG%201.png" alt="CS Cleaning Hero">

                <h3>Introduction</h3>
                <p>CS Cleaning is a trusted provider of professional commercial cleaning services across multiple industries. Known for their meticulous attention to detail and commitment to sustainability, they serve a diverse client base—from corporate offices and healthcare facilities to retail spaces and industrial sites. As their business grew, they needed a modern, reliable online presence that would reflect their quality, professionalism, and customer-first approach.</p>
                
                <hr>

                <h3>The Challenge</h3>
                <p>CS Cleaning needed a fresh, modern website to showcase their commercial cleaning services. Their existing online presence didn’t reflect their level of professionalism, nor did it make it easy for potential clients to understand or contact them.</p>

                <h3>The Solution</h3>
                <p>As a Webflow Developer, I collaborated closely with CS Cleaning to deliver a solution that met all of their goals. We began by customizing a Webflow template as the foundation, allowing us to move quickly without compromising on brand alignment or performance.</p>
                
                <img src="https://cdn.prod.website-files.com/652ad8bd9a8da6be30a068cb/67dbeafd29f31f4e9fcc5da8_Mobile%20Padel%20Desktop%20PNG%202.png" alt="Desktop Mockup 1">

                <blockquote>
                    "Atomic demonstrated the excellence in service we were promised at the consultation phase... <strong>The web developers have our utmost respect and we can (without hesitation) recommend them fully.</strong>"
                    <br><br>
                    <strong>Adam Trew, Managing Director</strong>
                </blockquote>
            `,
            'synctell': `
                <h1 class="">SyncTell</h1>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8 py-6 border-y border-white/10 text-sm">
                    <div><span class="text-neutral-500 block text-xs uppercase tracking-widest mb-1">Client</span><strong class="text-white">SyncTell</strong></div>
                    <div><span class="text-neutral-500 block text-xs uppercase tracking-widest mb-1">Location</span><strong class="text-white">Luxembourg</strong></div>
                    <div><span class="text-neutral-500 block text-xs uppercase tracking-widest mb-1">Tools</span><strong class="text-white">Webflow, Figma</strong></div>
                    <div class="sm:col-span-3 mt-2 sm:mt-0"><span class="text-neutral-500 block text-xs uppercase tracking-widest mb-1">Website</span><a href="https://www.sync-tell.com/" target="_blank" class="text-emerald-400 hover:underline break-all">sync-tell.com</a></div>
                </div>

                <img src="https://cdn.prod.website-files.com/652ad8bd9a8da6be30a068cb/6656e355660512aeb64425e5_SyncTell%20Desktop%20Mock.avif" alt="SyncTell Hero">

                <h3>Introduction</h3>
                <p>SyncTell is more than just a communication agency—they serve as strategic partners in crafting meaningful, outcome-driven communication for business owners, private enterprises, and government agencies. With a strong focus on engagement and clarity, SyncTell specialises in developing tailored communication strategies designed to drive results.</p>
                
                <hr>

                <h3>The Challenge</h3>
                <p>Atomic’s core challenge was to visually and functionally bring SyncTell’s brand and mission to life online. The client wanted their services to be clearly communicated with a design that guided users effortlessly through the site.</p>
                
                <h3>The Solution</h3>
                <p>Once the designs were finalised, I built the entire website from the ground up in <strong>Webflow</strong>, ensuring pixel-perfect implementation, efficient loading times, and clean class naming following a style system for long-term scalability.</p>
                
                <blockquote>
                    “From the very beginning, Atomic showed they understood our brand and what we were trying to achieve. <strong>The website not only looks incredible but is built to perform.</strong>”
                </blockquote>
            `
        };

        const modal = document.getElementById('project-modal');
        const modalBackdrop = document.getElementById('modal-backdrop');
        const modalPanel = document.getElementById('modal-panel');
        const modalContent = document.getElementById('modal-content');

        function openModal(projectId) {
            // Set content
            if (projectsData[projectId]) {
                modalContent.innerHTML = projectsData[projectId];
                
                // Show modal
                modal.classList.remove('hidden');
                document.body.classList.add('modal-open');
                
                // Animate in
                setTimeout(() => {
                    modalBackdrop.classList.remove('opacity-0');
                    // Mobile: Translate Y up to 0. Desktop: Scale up to 100
                    modalPanel.classList.remove('opacity-0', 'translate-y-full', 'sm:translate-y-4', 'sm:scale-95');
                }, 10);
            }
        }

        function closeModal() {
            // Animate out
            modalBackdrop.classList.add('opacity-0');
            modalPanel.classList.add('opacity-0', 'translate-y-full', 'sm:translate-y-4', 'sm:scale-95');
            
            // Hide after animation
            setTimeout(() => {
                modal.classList.add('hidden');
                document.body.classList.remove('modal-open');
                modalContent.innerHTML = ''; // Clear content
            }, 300);
        }

        // Close on backdrop click
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.closest('#modal-backdrop') || (e.target.parentElement && e.target.parentElement.classList.contains('items-end'))) {
                closeModal();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
            }
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
      

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
<a className="text-white font-semibold tracking-tight text-lg hover:opacity-80 transition-opacity" href="#">
                PG
            </a>
<div className="flex items-center gap-6">

<a className="hidden sm:block text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="hidden sm:block text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#skills">Skills</a>
<a className="hidden sm:block text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#projects">Work</a>
<div className="flex items-center gap-2 pl-4 border-l border-white/10">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</div>
<span className="text-[10px] font-semibold text-emerald-500 tracking-wide uppercase">Available</span>
</div>
</div>
</div>
</nav>

<main className="pt-32 pb-16 px-5 sm:pt-40 sm:pb-20 sm:px-6">
<div className="text-center max-w-3xl mx-auto">

<div className="group w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8 relative">
<div className="group-hover:bg-emerald-500/30 transition-all duration-500 bg-emerald-500/20 rounded-full absolute top-0 right-0 bottom-0 left-0 blur-xl"></div>
<img alt="Pablo Gubelin" className="hover:grayscale-0 transition-all duration-500 w-full h-full object-cover border-white/10 border rounded-full relative shadow-xl grayscale-0 scale-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d5beaf57-9670-4825-8431-cedd905c491a_320w.jpg"/>
</div>
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white mb-5 sm:mb-6 leading-[1.1]">
                Pablo Gubelin
            </h1>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-emerald-400 mb-6 sm:mb-8">
<iconify-icon height="14" icon="solar:code-circle-linear" width="14"></iconify-icon>
<span className="">Webflow &amp; Replit Developer</span>
</div>
<p className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto mb-8 sm:mb-10 font-light leading-relaxed px-2">
                I build fast, functional websites and web applications that convert. Specializing in Webflow development, custom code integrations, and AI Web Development on Replit.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-xs font-medium text-neutral-500 mb-10 sm:mb-12 w-full">
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/5 w-full sm:w-auto justify-center">
<iconify-icon className="" height="14" icon="solar:map-point-linear" width="14"></iconify-icon>
<span className="">GMT+8 timezone</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/5 w-full sm:w-auto justify-center">
<iconify-icon height="14" icon="solar:global-linear" width="14"></iconify-icon>
<span>English / Spanish</span>
</div>
</div>
</div>
</main>

<section className="border-white/5 border-t py-16 sm:py-24 px-5 sm:px-6" id="projects">
<div className="max-w-6xl mx-auto">
<div className="mb-12 sm:mb-16">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-3">Recent Projects</h2>
<p className="text-sm text-neutral-500 max-w-2xl">Case studies in E-commerce, Automation, and SEO working as the main Developer. Click to view details.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">

<article className="group cursor-pointer select-none" onclick="openModal('finer')">
<div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-neutral-900 mb-5">
<div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<img alt="Finer Aviation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://cdn.prod.website-files.com/652ad8bd9a8da6be30a068cb/67dd498775fd4a4e85b90677_1.jpg"/>
</div>
<div className="flex justify-between items-start mb-2">
<div className="pr-4">
<h3 className="text-lg font-medium text-white group-hover:text-emerald-400 transition-colors">Finer Aviation</h3>
<p className="text-sm text-neutral-500">Custom Webflow Booking Platform</p>
</div>
<div className="p-2 rounded-full border border-white/5 bg-white/5 group-hover:bg-white/10 transition-colors shrink-0">
<iconify-icon className="text-white" height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
<div className="flex gap-2 mt-3">
<span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-neutral-400">Webflow</span>
<span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-neutral-400">API</span>
</div>
</article>

<article className="group cursor-pointer select-none" onclick="openModal('padel')">
<div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-neutral-900 mb-5">
<div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<img alt="Mobile Padel Co" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://cdn.prod.website-files.com/652ad8bd9a8da6be30a068cb/67dbe334cc24798702314c98_Mobile%20Padel%20Desktop%20PNG%202.png"/>
</div>
<div className="flex justify-between items-start mb-2">
<div className="pr-4">
<h3 className="text-lg font-medium text-white group-hover:text-emerald-400 transition-colors">Mobile Padel Co</h3>
<p className="text-sm text-neutral-500">E-commerce &amp; CRO</p>
</div>
<div className="p-2 rounded-full border border-white/5 bg-white/5 group-hover:bg-white/10 transition-colors shrink-0">
<iconify-icon className="text-white" height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
<div className="flex gap-2 mt-3">
<span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-neutral-400">GSAP</span>
<span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-neutral-400">Automation</span>
</div>
</article>

<article className="group cursor-pointer select-none" onclick="openModal('cleaning')">
<div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-neutral-900 mb-5">
<div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<img alt="CS Cleaning" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://cdn.prod.website-files.com/652ad8bd9a8da6be30a068cb/67dbea9c7dfd2eae932bca69_Mobile%20Padel%20Desktop%20PNG%201.png"/>
</div>
<div className="flex justify-between items-start mb-2">
<div className="pr-4">
<h3 className="text-lg font-medium text-white group-hover:text-emerald-400 transition-colors">CS Cleaning</h3>
<p className="text-sm text-neutral-500">SEO Audit &amp; Migration</p>
</div>
<div className="p-2 rounded-full border border-white/5 bg-white/5 group-hover:bg-white/10 transition-colors shrink-0">
<iconify-icon className="text-white" height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
<div className="flex gap-2 mt-3">
<span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-neutral-400">SEO</span>
<span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-neutral-400">Schema</span>
</div>
</article>

<article className="group cursor-pointer select-none" onclick="openModal('synctell')">
<div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-neutral-900 mb-5">
<div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<img alt="SyncTell" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://cdn.prod.website-files.com/652ad8bd9a8da6be30a068cb/6656e355660512aeb64425e5_SyncTell%20Desktop%20Mock.avif"/>
</div>
<div className="flex justify-between items-start mb-2">
<div className="pr-4">
<h3 className="text-lg font-medium text-white group-hover:text-emerald-400 transition-colors">SyncTell</h3>
<p className="text-sm text-neutral-500">Business Automation &amp; CMS</p>
</div>
<div className="p-2 rounded-full border border-white/5 bg-white/5 group-hover:bg-white/10 transition-colors shrink-0">
<iconify-icon className="text-white" height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
<div className="flex gap-2 mt-3">
<span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-neutral-400">EEAT</span>
<span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-neutral-400">Strategy</span>
</div>
</article>
</div>
</div>
</section>

<section className="border-white/5 border-t py-16 px-5 sm:px-6" id="skills">
<div className="max-w-4xl mx-auto">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-8">Technical Skills</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
<div className="">
<h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4">Core Technologies</h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-neutral-300">Webflow (Advanced)</span>
<span className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-neutral-300">HTML/CSS/JavaScript</span>
<span className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-neutral-300">Python</span>
<span className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-neutral-300">Replit</span>
<span className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-neutral-300">Git</span>
</div>
</div>
<div className="">
<h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4">Frameworks &amp; Tools</h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-neutral-300">GSAP Animations</span>
<span className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-neutral-300">Webflow CMS</span>
<span className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-neutral-300">API Integration</span>
</div>
</div>
<div className="">
<h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4">Integrations</h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-neutral-300">WhatsApp Business API</span>
<span className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-neutral-300">Payment Gateways</span>
<span className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-neutral-300">CRM Systems</span>
</div>
</div>
<div>
<h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4">Languages</h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-neutral-300">English (Fluent)</span>
<span className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-neutral-300">Spanish (Native)</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 px-5 sm:px-6 border-t border-white/5 bg-white/[0.01]" id="services">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-8 sm:mb-10">What I Do Best</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<article className="glass-panel p-5 sm:p-6 rounded-xl flex flex-col">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
<iconify-icon height="22" icon="solar:layers-minimalistic-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-4">Webflow Development</h3>
<ul className="space-y-3 text-sm text-neutral-400">
<li className="flex items-start gap-2.5">
<iconify-icon className="text-neutral-600 mt-0.5 min-w-[14px]" icon="solar:check-circle-linear" width="14"></iconify-icon>
<span className="">Custom Webflow websites from design to launch</span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon className="text-neutral-600 mt-0.5 min-w-[14px]" icon="solar:check-circle-linear" width="14"></iconify-icon>
<span className="">Webflow CMS setup and optimization</span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon className="text-neutral-600 mt-0.5 min-w-[14px]" icon="solar:check-circle-linear" width="14"></iconify-icon>
<span className="">Advanced interactions with GSAP</span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon className="text-neutral-600 mt-0.5 min-w-[14px]" icon="solar:check-circle-linear" width="14"></iconify-icon>
<span className="">Webflow to custom code migrations</span>
</li>
</ul>
</article>

<article className="glass-panel p-5 sm:p-6 rounded-xl flex flex-col">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-5">
<iconify-icon height="22" icon="solar:code-square-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-4">Replit Development</h3>
<ul className="space-y-3 text-sm text-neutral-400">
<li className="flex items-start gap-2.5">
<iconify-icon className="text-neutral-600 mt-0.5 min-w-[14px]" icon="solar:check-circle-linear" width="14"></iconify-icon>
<span className="">Rapid web app prototyping and MVPs</span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon className="text-neutral-600 mt-0.5 min-w-[14px]" icon="solar:check-circle-linear" width="14"></iconify-icon>
<span className="">Python/JavaScript automation tools</span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon className="text-neutral-600 mt-0.5 min-w-[14px]" icon="solar:check-circle-linear" width="14"></iconify-icon>
<span className="">API integrations and webhooks</span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon className="text-neutral-600 mt-0.5 min-w-[14px]" icon="solar:check-circle-linear" width="14"></iconify-icon>
<span className="">Database setup and management</span>
</li>
</ul>
</article>

<article className="glass-panel p-5 sm:p-6 rounded-xl flex flex-col">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
<iconify-icon height="22" icon="solar:graph-up-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-4">Technical SEO</h3>
<ul className="space-y-3 text-sm text-neutral-400">
<li className="flex items-start gap-2.5">
<iconify-icon className="text-neutral-600 mt-0.5 min-w-[14px]" icon="solar:check-circle-linear" width="14"></iconify-icon>
<span className="">Technical audits and site speed optimization</span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon className="text-neutral-600 mt-0.5 min-w-[14px]" icon="solar:check-circle-linear" width="14"></iconify-icon>
<span className="">Schema markup and structured data</span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon className="text-neutral-600 mt-0.5 min-w-[14px]" icon="solar:check-circle-linear" width="14"></iconify-icon>
<span>Cross-browser compatibility testing</span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon className="text-neutral-600 mt-0.5 min-w-[14px]" icon="solar:check-circle-linear" width="14"></iconify-icon>
<span>Mobile-first responsive design</span>
</li>
</ul>
</article>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-black">
<div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-x-6 gap-y-6 items-center justify-between text-center md:text-left">
<div>
<span className="block text-lg font-semibold text-white tracking-tight mb-1">PG</span>
<p className="text-[10px] uppercase text-neutral-600 tracking-widest">© 2026 Pablo Gubelin</p>
</div>
</div>
</footer>

<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-[60] hidden" id="project-modal" role="dialog">

<div className="fixed inset-0 bg-black/90 backdrop-blur-sm transition-opacity opacity-0" id="modal-backdrop"></div>
<div className="fixed inset-0 z-10 overflow-hidden">

<div className="flex h-full w-full items-end justify-center sm:items-center sm:p-4 text-center">


<div className="relative flex flex-col transform overflow-hidden rounded-t-2xl sm:rounded-xl bg-[#0a0a0a] text-left shadow-2xl transition-all w-full sm:max-w-4xl border-t border-x sm:border border-white/10 opacity-0 translate-y-full sm:translate-y-4 sm:scale-95 max-h-[90vh] sm:max-h-[85vh]" id="modal-panel">

<div className="sticky top-0 z-20 flex justify-between items-center px-6 py-4 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5 shrink-0">
<span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Project Details</span>
<button className="rounded-full p-2 bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-all focus:outline-none" onclick="closeModal()" type="button">
<span className="sr-only">Close</span>
<iconify-icon height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<div className="px-5 pb-10 sm:px-10 sm:pb-16 pt-6 overflow-y-auto overscroll-contain" id="modal-content">

</div>
</div>
</div>
</div>
</div>


    </>
  );
}
