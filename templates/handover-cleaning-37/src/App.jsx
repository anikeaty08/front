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
hand: ['"La Belle Aurore"', 'cursive'],
},
colors: {
mai: {
primary: '#32B4B1',
accent: '#EA663A',
text: '#575756',
bg: '#FFFFFF'
}
},
letterSpacing: {
tight: '-0.03em',
tighter: '-0.05em',
}
}
}
}



        // Reveal Animation Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Stagger effect
                    setTimeout(() => {
                        entry.target.classList.add('active');
                    }, index * 100); 
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-text').forEach(el => {
            observer.observe(el);
        });

        // Parallax Logic (Vanilla JS for smooth performance without libraries)
        const parallaxImages = document.querySelectorAll('.parallax-image');
        
        function handleParallax() {
            parallaxImages.forEach(img => {
                const wrapper = img.parentElement;
                const wrapperRect = wrapper.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                // Check if wrapper is in view
                if (wrapperRect.top < windowHeight && wrapperRect.bottom > 0) {
                    // Calculate scroll percentage relative to the element
                    const scrollProgress = (windowHeight - wrapperRect.top) / (windowHeight + wrapperRect.height);
                    
                    // Map progress to translate Y (-10% to 10% movement essentially)
                    // We want the image to move slightly slower than scroll to create depth
                    const moveY = (scrollProgress * 20) - 10; 
                    
                    img.style.transform = `translateY(${moveY}%) scale(1.1)`;
                }
            });
        }

        window.addEventListener('scroll', () => {
            window.requestAnimationFrame(handleParallax);
        });
        
        // Initial call
        handleParallax();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="font-medium tracking-tight text-xl">MAI</div>
<button className="bg-mai-accent text-white px-5 py-2 text-sm font-medium rounded-full hover:opacity-90 transition-opacity">Contact Us</button>
</div>
</nav>

<section className="pt-32 pb-12 flex flex-col items-center text-center px-6">
<div className="reveal-text mb-4">
<span className="font-hand text-mai-primary text-2xl md:text-3xl block mb-2">Seva se Hoga</span>
</div>
<h1 className="reveal-text text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-mai-text mb-6 max-w-5xl leading-[0.95]">
            Handover Cleaning Specialists
        </h1>
<p className="reveal-text text-lg md:text-xl text-gray-500 font-light max-w-xl mx-auto mb-16 tracking-tight">
            Setting the benchmark for commercial hygiene and presentation in Pune.
        </p>
<div className="parallax-wrapper rounded-sm">

<img alt="Professional floor cleaning machine in action" className="parallax-image grayscale-[20%]" src="https://images.unsplash.com/photo-1581578731117-104f8a338e2d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="mb-12 md:pl-12 border-l-2 border-mai-primary/30">
<h2 className="reveal-text text-4xl md:text-6xl font-medium tracking-tight text-mai-text mb-2">
                Post-construction. Pre-fitout.<br/>Handover Cleaning.
            </h2>
<p className="reveal-text text-xl text-mai-primary font-medium tracking-tight mb-4">Specialist in Pune</p>
<p className="reveal-text text-lg text-gray-500 font-light max-w-2xl">
                Removing the stubborn debris of construction to reveal the true quality of your architecture.
            </p>
</div>
<div className="parallax-wrapper h-[70vh] rounded-sm">

<img alt="Worker scraping glass window in construction site" className="parallax-image" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto text-center">
<h2 className="reveal-text text-5xl md:text-7xl font-medium tracking-tight text-mai-text mb-4">
            Ab Har Kona Khushnuma
        </h2>
<p className="reveal-text text-lg text-gray-500 font-light max-w-lg mx-auto mb-16">
            Transforming dust-covered spaces into welcoming environments.
        </p>
<div className="parallax-wrapper h-[70vh] rounded-sm">

<img alt="Close up detail of surface cleaning" className="parallax-image grayscale-[10%]" src="https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<section className="py-24 px-6 bg-gray-50/50">
<div className="max-w-7xl mx-auto">
<div className="text-left mb-16">
<h2 className="reveal-text text-3xl md:text-5xl font-medium tracking-tight text-mai-text mb-4">
                    Choose the product that<br/>best suits you.
                </h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">

<div className="reveal-text bg-white p-8 border border-gray-100 hover:border-mai-primary/50 transition-colors duration-300">
<div className="text-xs font-medium tracking-widest uppercase text-mai-primary mb-4">Entry Level</div>
<h3 className="text-2xl font-medium tracking-tight text-mai-text mb-2">MAI-ESSENTIAL</h3>
<p className="text-sm text-gray-500 font-light leading-relaxed">Basic debris removal and surface dusting for standard shell handovers.</p>
</div>

<div className="reveal-text bg-white p-8 border border-mai-primary/20 ring-1 ring-mai-primary/10">
<div className="text-xs font-medium tracking-widest uppercase text-mai-primary mb-4">Recommended</div>
<h3 className="text-2xl font-medium tracking-tight text-mai-text mb-2">MAI-PREMIUM</h3>
<p className="text-sm text-gray-500 font-light leading-relaxed">Deep cleaning, spot removal, and glass polishing for fit-out ready spaces.</p>
</div>

<div className="reveal-text bg-white p-8 border border-gray-100 hover:border-mai-primary/50 transition-colors duration-300">
<div className="text-xs font-medium tracking-widest uppercase text-mai-primary mb-4">Executive</div>
<h3 className="text-2xl font-medium tracking-tight text-mai-text mb-2">MAI-SIGNATURE</h3>
<p className="text-sm text-gray-500 font-light leading-relaxed">White-glove detailing, stone restoration, and sanitization for immediate occupancy.</p>
</div>
</div>
<div className="parallax-wrapper h-[60vh] rounded-sm">

<img alt="Empty clean commercial office space" className="parallax-image" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-32 px-6 flex flex-col items-center text-center bg-white">
<h2 className="reveal-text text-4xl md:text-6xl font-medium tracking-tight text-mai-text mb-4 max-w-4xl">
            Cost packages start at only<br/><span className="text-mai-primary">Rs. 10 per sq. ft.</span>
</h2>
<p className="reveal-text text-xs text-gray-400 mb-8 uppercase tracking-widest">
            *Subject to site inspection and scope
        </p>
<button className="reveal-text bg-mai-accent text-white px-8 py-4 text-base font-medium rounded-sm hover:opacity-90 transition-opacity mb-20">
            Request a Quote
        </button>
<div className="parallax-wrapper w-full max-w-7xl rounded-sm">

<img alt="Polished marble floor in commercial lobby" className="parallax-image" src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&amp;w=1932&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto border-t border-gray-100">
<h2 className="reveal-text text-3xl font-medium tracking-tight text-mai-text mb-16">
            MAI’s Handover-Cleaning Focus on 4Ps
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

<div className="reveal-text group">
<div className="mb-6 text-mai-primary">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-mai-text mb-2">Parentage</h3>
<p className="text-sm text-gray-500 font-light">Backed by decades of facility management heritage.</p>
</div>

<div className="reveal-text group delay-100">
<div className="mb-6 text-mai-primary">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-mai-text mb-2">People</h3>
<p className="text-sm text-gray-500 font-light">Verified, trained, and uniformed Indian workforce.</p>
</div>

<div className="reveal-text group delay-200">
<div className="mb-6 text-mai-primary">
<iconify-icon icon="solar:bottle-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-mai-text mb-2">Products</h3>
<p className="text-sm text-gray-500 font-light">Industrial-grade chemicals and machinery only.</p>
</div>

<div className="reveal-text group delay-300">
<div className="mb-6 text-mai-primary">
<iconify-icon icon="solar:clipboard-check-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-mai-text mb-2">Procedure</h3>
<p className="text-sm text-gray-500 font-light">Systematic checklists and handover protocols.</p>
</div>
</div>
</section>

<section className="py-16 bg-gray-50 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-8">
<h2 className="text-sm font-medium tracking-widest uppercase text-gray-400">Sites we have served</h2>
</div>

<div className="flex space-x-12 md:space-x-24 px-6 animate-scroll whitespace-nowrap overflow-x-auto no-scrollbar opacity-50 grayscale">
<span className="text-2xl font-bold tracking-tight text-gray-800">INFOSYS</span>
<span className="text-2xl font-bold tracking-tight text-gray-800">TATA REALTY</span>
<span className="text-2xl font-bold tracking-tight text-gray-800">WEWORK</span>
<span className="text-2xl font-bold tracking-tight text-gray-800">KPMG</span>
<span className="text-2xl font-bold tracking-tight text-gray-800">PANCHSHIL</span>
<span className="text-2xl font-bold tracking-tight text-gray-800">ACCENTURE</span>
<span className="text-2xl font-bold tracking-tight text-gray-800">BARCLAYS</span>
<span className="text-2xl font-bold tracking-tight text-gray-800">VODAFONE</span>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
<div>
<h2 className="reveal-text text-3xl md:text-5xl font-medium tracking-tight text-mai-text mb-4 leading-tight">
                    Reliable Everyday Housekeeping Services for Establishments in Pune
                </h2>
</div>
<div>
<p className="reveal-text text-lg text-gray-500 font-light leading-relaxed">
                    Beyond handover, we maintain the excellence. Partner with us for your daily facility upkeep requirements with the same level of professionalism.
                </p>
<a className="reveal-text inline-flex items-center mt-6 text-mai-primary font-medium hover:text-mai-accent transition-colors" href="#">
                    Explore Housekeeping Services <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="parallax-wrapper h-[70vh] rounded-sm">

<img alt="Staff cleaning glass in corporate office" className="parallax-image" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<footer className="bg-mai-text text-white py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
<div className="mb-4 md:mb-0">
<span className="text-2xl font-medium tracking-tight">MAI</span>
</div>
<div className="text-sm text-gray-400 font-light">
                © 2023 Manpower Alliance of India. All rights reserved. Pune.
            </div>
</div>
</footer>



    </>
  );
}
