import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // Intersection Observer to handle scale on scroll
        const observerOptions = {
            root: null,
            // Trigger when the element is in the vertical center of the viewport (approx)
            // -35% from top and bottom creates a "sweet spot" in the middle 30% of the screen
            rootMargin: '-35% 0px -35% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const element = entry.target;
                if (entry.isIntersecting) {
                    // When in center, expand
                    element.classList.remove('scale-[0.8]');
                    element.classList.add('scale-100');
                    element.classList.add('shadow-xl'); // Optional: add shadow when focused
                } else {
                    // When out of center, shrink
                    element.classList.remove('scale-100');
                    element.classList.remove('shadow-xl');
                    element.classList.add('scale-[0.8]');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-scale-item').forEach(el => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 flex items-center justify-between px-6 py-6 md:px-12">

<button className="group p-1 -ml-1">
<svg className="w-8 h-8 text-black" fill="none" height="24" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24">
<line x1="3" x2="21" y1="12" y2="12"></line>
<line x1="3" x2="21" y1="6" y2="6"></line>
<line x1="3" x2="21" y1="18" y2="18"></line>
</svg>
</button>

<nav className="hidden md:flex items-center space-x-12">
<a className="text-xs tracking-widest text-gray-500 hover:text-black transition-colors uppercase font-medium" href="#">Landscape</a>
<a className="text-xs tracking-widest text-gray-500 hover:text-black transition-colors uppercase font-medium" href="#">Engineering</a>
<a className="text-xs tracking-widest text-gray-500 hover:text-black transition-colors uppercase font-medium" href="#">Architecture</a>
<a className="text-xs tracking-widest text-gray-500 hover:text-black transition-colors uppercase font-medium" href="#">Planning</a>
<a className="text-xs tracking-widest text-gray-500 hover:text-black transition-colors uppercase font-medium" href="#">Products</a>
</nav>

<div className="flex items-center space-x-2 text-gray-500 hover:text-black cursor-pointer transition-colors">
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="text-xs tracking-widest uppercase font-medium">Completed</span>
</div>
</header>

<main className="pt-32 pb-24 px-6 md:px-12 max-w-[1920px] mx-auto">

<article className="flex flex-col md:flex-row gap-8 md:gap-16 mb-24 md:mb-32">

<div className="w-full md:w-1/4 flex flex-col items-start md:items-end md:text-right pt-0 md:pt-12 order-2 md:order-1">
<div className="bg-black text-white p-3 mb-6 w-12 h-12 flex items-center justify-center">
<svg className="lucide lucide-waves w-6 h-6 stroke-[1.5]" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
</div>
<h2 className="md:text-xl text-lg font-medium text-gray-900 tracking-tight mb-1">Hamburg State Opera</h2>
<p className="text-xs font-semibold text-gray-400 tracking-wider uppercase">Hamburg, Germany</p>
</div>

<div className="w-full md:w-3/4 order-1 md:order-2">
<div className="scroll-scale-item overflow-hidden bg-gray-100 aspect-[16/10] relative rounded-xl scale-[0.8] transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">
<img alt="Hamburg State Opera" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</article>

<article className="flex flex-col md:flex-row gap-8 md:gap-16 mb-24 md:mb-32">

<div className="w-full md:w-1/4 flex flex-col items-start md:items-end md:text-right pt-0 md:pt-12 order-2 md:order-1">
<div className="bg-black text-white p-3 mb-6 w-12 h-12 flex items-center justify-center">
<svg className="lucide lucide-layers w-6 h-6 stroke-[1.5]" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h2 className="text-lg md:text-xl font-medium tracking-tight text-gray-900 mb-1">Suzhou Museum of Contemporary Art</h2>
<p className="text-xs font-semibold text-gray-400 tracking-wider uppercase">Suzhou, China</p>
</div>

<div className="w-full md:w-3/4 order-1 md:order-2">
<div className="scroll-scale-item overflow-hidden bg-gray-100 aspect-[16/10] relative rounded-xl scale-[0.8] transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">
<img alt="Suzhou Museum of Contemporary Art" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</article>

<article className="flex flex-col md:flex-row gap-8 md:gap-16 mb-12">

<div className="w-full md:w-1/4 flex flex-col items-start md:items-end md:text-right pt-0 md:pt-12 order-2 md:order-1">
<div className="bg-black text-white p-3 mb-6 w-12 h-12 flex items-center justify-center">
<svg className="lucide lucide-grip w-6 h-6 stroke-[1.5]" data-lucide="grip" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="5" r="1"></circle><circle cx="19" cy="5" r="1"></circle><circle cx="5" cy="5" r="1"></circle><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle><circle cx="12" cy="19" r="1"></circle><circle cx="19" cy="19" r="1"></circle><circle cx="5" cy="19" r="1"></circle></svg>
</div>
<h2 className="text-lg md:text-xl font-medium tracking-tight text-gray-900 mb-1">Bloomberg Student Center at Johns Hopkins University</h2>
<p className="text-xs font-semibold text-gray-400 tracking-wider uppercase">Baltimore, United States</p>
</div>

<div className="w-full md:w-3/4 order-1 md:order-2">
<div className="scroll-scale-item overflow-hidden bg-gray-100 aspect-[16/10] relative rounded-xl scale-[0.8] transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">
<img alt="Johns Hopkins University" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>
</article>
</main>


    </>
  );
}
