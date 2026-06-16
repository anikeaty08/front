import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            const scaleSection = document.getElementById('scale-section');
            const glowEffect = document.getElementById('glow-effect');

            if (scaleSection && glowEffect) {
                scaleSection.addEventListener('mousemove', (e) => {
                    const rect = scaleSection.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    // Center the glow exactly on the cursor
                    glowEffect.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
                });

                scaleSection.addEventListener('mouseenter', () => {
                    glowEffect.style.opacity = '0.5';
                });

                scaleSection.addEventListener('mouseleave', () => {
                    glowEffect.style.opacity = '0';
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full border-b border-neutral-100 relative z-20 bg-white">
<div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-6 md:px-12">
<div className="font-medium text-lg tracking-tighter uppercase text-black">
                Goodwave
            </div>
<nav className="hidden md:flex gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-black transition-colors duration-200" href="#">Approach</a>
<a className="hover:text-black transition-colors duration-200" href="#">Capabilities</a>
<a className="hover:text-black transition-colors duration-200" href="#">Contact</a>
</nav>
<button className="md:hidden text-neutral-900">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>

<main className="relative z-10 flex-grow flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-12 w-full pt-24 pb-32 md:pt-32 md:pb-40 bg-white">
<div className="max-w-4xl">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-tight md:leading-tight text-black mb-8">
                Software that works, <br/>
<span style={{backgroundColor: '#E4FF00', padding: '0.1em 0.2em', borderRadius: '0.05em', display: 'inline-block', lineHeight: '1'}}>period.</span>
</h1>
<div className="max-w-2xl mt-12">
<p className="text-lg md:text-xl font-normal text-neutral-600 leading-relaxed tracking-normal mb-8">
                    We can tackle any level of complexity with uncompromising speed and reliability. Completely at ease with state-of-the-art AI coding paradigms.
                </p>
<div className="inline-flex items-center border border-neutral-200 rounded-full px-4 py-2">
<span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#E4FF00'}}></span>
<span className="text-xs font-medium uppercase tracking-widest text-neutral-500">A-players since 1982</span>
</div>
</div>
</div>
</main>

<section className="relative w-full border-t border-neutral-200 bg-white overflow-hidden py-32 md:py-40" id="scale-section">

<div className="absolute inset-0 pointer-events-none z-0 opacity-60" style={{backgroundImage: 'url(&quot', data: 'image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 16v8m-4-4h8\' stroke=\'%23d4d4d4\' strokeWidth=\'1\' fill=\'none\' fill-rule=\'evenodd\'/%3E%3C/svg%3E&quot'}}></div>

<div className="pointer-events-none absolute w-72 h-72 md:w-96 md:h-96 rounded-full" id="glow-effect" style={{backgroundColor: '#E4FF00', filter: 'blur(80px)', opacity: '0', transition: 'opacity 0.5s ease', left: '0', top: '0', zIndex: '1', mixBlendMode: 'multiply'}}></div>

<div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
<div className="mb-8 p-4 rounded-xl inline-flex w-fit bg-white border border-neutral-200 shadow-sm">
<iconify-icon className="text-black" height="32" icon="solar:server-square-linear" width="32"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-black mb-6 max-w-3xl">
                Tested at scale.<br/>
                Billions of page views.
            </h2>
<p className="text-lg md:text-xl font-normal text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                We design resilient, high-throughput architectures that thrive under pressure. When the world comes knocking, our systems don't just survive—they perform.
            </p>
</div>
</section>

<section className="relative z-10 w-full border-t border-neutral-200 bg-neutral-50/50">
<div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
<div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-black mb-6">
                        The anatomy of excellent code.
                    </h2>
<p className="text-base md:text-lg text-neutral-600 font-normal">
                        Our engineering culture is built on four non-negotiable pillars. We don't just write instructions for machines; we craft resilient architectures for humans.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 overflow-hidden rounded-sm">

<div className="bg-white p-10 md:p-16 flex flex-col justify-start group hover:bg-neutral-50 transition-colors duration-300">
<div className="mb-10 p-3 rounded-md inline-flex w-fit transition-transform duration-300 group-hover:-translate-y-1" style={{backgroundColor: '#E4FF00'}}>
<iconify-icon className="text-black" height="28" icon="solar:user-circle-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-black mb-4">Exceptional UX</h3>
<p className="text-base font-normal text-neutral-500 leading-relaxed">
                        Performance is a feature. We engineer interfaces that are invisible to the user, providing frictionless, immediate, and accessible interactions across all devices.
                    </p>
</div>

<div className="bg-white p-10 md:p-16 flex flex-col justify-start group hover:bg-neutral-50 transition-colors duration-300">
<div className="mb-10 p-3 rounded-md inline-flex w-fit transition-transform duration-300 group-hover:-translate-y-1" style={{backgroundColor: '#E4FF00'}}>
<iconify-icon className="text-black" height="28" icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-black mb-4">Zero Technical Debt</h3>
<p className="text-base font-normal text-neutral-500 leading-relaxed">
                        We reject shortcuts. Through rigorous testing, strict typing, and clean architecture, we ensure today's rapid delivery doesn't become tomorrow's legacy burden.
                    </p>
</div>

<div className="bg-white p-10 md:p-16 flex flex-col justify-start group hover:bg-neutral-50 transition-colors duration-300">
<div className="mb-10 p-3 rounded-md inline-flex w-fit transition-transform duration-300 group-hover:-translate-y-1" style={{backgroundColor: '#E4FF00'}}>
<iconify-icon className="text-black" height="28" icon="solar:tuning-square-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-black mb-4">Maintainability</h3>
<p className="text-base font-normal text-neutral-500 leading-relaxed">
                        Code is read infinitely more than it is written. We enforce consistent standards and modular design, making systems intuitive for any engineer to understand and modify.
                    </p>
</div>

<div className="bg-white p-10 md:p-16 flex flex-col justify-start group hover:bg-neutral-50 transition-colors duration-300">
<div className="mb-10 p-3 rounded-md inline-flex w-fit transition-transform duration-300 group-hover:-translate-y-1" style={{backgroundColor: '#E4FF00'}}>
<iconify-icon className="text-black" height="28" icon="solar:graph-up-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-black mb-4">Scalability</h3>
<p className="text-base font-normal text-neutral-500 leading-relaxed">
                        Architected for the unknown. We build elastic infrastructures that gracefully absorb increasing complexity and throughput without necessitating fundamental rewrites.
                    </p>
</div>
</div>
</div>
</section>

<footer className="relative z-10 bg-black text-white pt-24 pb-12 border-t-8 mt-auto" style={{borderTopColor: '#E4FF00'}}>
<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8">
<div className="max-w-md">
<div className="font-medium text-2xl tracking-tighter uppercase mb-6 text-white">Goodwave</div>
<p className="text-base font-normal text-neutral-400 mb-8 leading-relaxed">
                    Precision software engineering. We build the systems that power modern businesses.
                </p>
<a className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-black px-6 py-4 rounded-sm transition-opacity hover:opacity-90" href="#" style={{backgroundColor: '#E4FF00'}}>
                    Initiate a project
                    <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 gap-12 md:gap-24 text-sm font-normal">
<div className="flex flex-col gap-4">
<span className="text-neutral-500 mb-2 font-medium">Company</span>
<a className="text-neutral-300 hover:text-white transition-colors" href="#">About</a>
<a className="text-neutral-300 hover:text-white transition-colors" href="#">Manifesto</a>
<a className="text-neutral-300 hover:text-white transition-colors" href="#">Careers</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-neutral-500 mb-2 font-medium">Connect</span>
<a className="text-neutral-300 hover:text-white transition-colors" href="#">Twitter</a>
<a className="text-neutral-300 hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="text-neutral-300 hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 md:px-12 mt-24 pt-8 border-t border-neutral-800 flex justify-between items-center text-xs text-neutral-600 font-normal">
<span>© Goodwave Inc. All rights reserved.</span>
<span>Based in reality.</span>
</div>
</footer>



    </>
  );
}
