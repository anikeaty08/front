import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="absolute top-0 inset-x-0 z-50">
<div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex items-center justify-between">

<a className="text-xl tracking-tighter font-serif text-white font-medium z-10 relative" href="index.html">
                Tay2Visions
            </a>

<nav className="hidden md:flex items-center gap-10">

<a className="text-sm tracking-wide text-white/80 hover:text-white transition duration-300" href="index.html">Home</a>
<a className="text-sm tracking-wide text-white hover:text-white transition duration-300 border-b border-white/30 pb-0.5" href="#">About Me</a>
<a className="text-sm tracking-wide text-white/80 hover:text-white transition duration-300" href="#">Portfolio</a>
<a className="text-sm tracking-wide text-white/80 hover:text-white transition duration-300" href="#">Client Guide</a>
<a className="text-sm tracking-wide text-white/80 hover:text-white transition duration-300" href="#">Book Now</a>
</nav>

<button className="md:hidden text-white z-10 relative flex items-center">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</header>

<section className="relative h-[70vh] min-h-[600px] flex items-center justify-center">

<div className="absolute inset-0 z-0 bg-stone-900">
<img alt="Photographer in action" className="w-full h-full object-cover object-center opacity-80" src="https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&amp;w=2800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/20 to-stone-900/80"></div>
</div>
<div className="relative z-10 text-center px-6 md:px-12 mt-16">
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-white font-normal mb-6">
                About Me
            </h1>
<p className="text-base md:text-lg text-white/90 max-w-xl mx-auto tracking-wide font-light">
                Meet the photographer behind Tay2Visions.
            </p>
</div>
</section>

<section className="py-24 md:py-32 lg:py-40 px-6 md:px-12 max-w-7xl mx-auto flex-grow">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

<div className="lg:col-span-5 w-full">
<div className="img-wrap aspect-[3/4] bg-stone-200">
<img alt="Mateo San Diego" className="w-full h-full object-cover grayscale-[15%]" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="lg:col-span-7 lg:pt-10">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-stone-900 font-medium mb-10">
                    About Me
                </h2>
<div className="space-y-8 text-base md:text-lg text-stone-600 leading-[1.8] font-light">
<p>
                        My name is Mateo San Diego, and I’m currently a student at James Madison University.
                    </p>
<p>
                        For most of my life, my world revolved around competitive basketball. When I decided to step away from the game, I found a new way to stay connected to the stories unfolding on the court and beyond. I picked up a camera and quickly fell in love with visual media. For me, it was never just about taking ordinary photos or videos. It was about the challenge of truly telling a story and creating something that moves the people who experience it.
                    </p>
<p>
                        Over the years, I’ve had the opportunity to work alongside talented athletes, teams, and organizations. From filming high-level players like Darren Harris, now at Duke University, to creating content for the CNU Women’s Basketball team, I’ve been fortunate to learn from some of the best and continue growing in the craft.
                    </p>
<p>
                        Most notably, I served as a cameraman for YouTuber DC Heat, helping bring his creative vision to life. It was a humbling experience to see the projects I helped capture accumulate more than 25 million views, because it showed me just how powerful a shared vision can be.
                    </p>
<p>
                        That same level of care, creativity, and dedication is what I bring to every client. My goal is to preserve your most important moments with the quality, intention, and heart they deserve.
                    </p>
</div>

<div className="mt-16 pt-10 border-t border-stone-200">
<span className="font-serif text-2xl tracking-tighter text-stone-900 italic">Mateo San Diego</span>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 bg-stone-900 px-6 text-center selection:bg-stone-700 selection:text-white">
<div className="max-w-3xl mx-auto">
<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-white font-medium leading-[1.15]">
                Let’s create something meaningful.
            </h2>
<p className="mt-8 text-base md:text-lg text-stone-300 font-light max-w-xl mx-auto leading-relaxed">
                If you’re looking for photos that feel personal, polished, and true to the moment, I’d love to work with you.
            </p>
<div className="mt-14">
<a className="inline-flex items-center justify-center px-10 py-4 bg-white text-stone-900 text-xs tracking-widest uppercase hover:bg-stone-100 transition duration-300" href="#">
                    Book Now
                </a>
</div>
</div>
</section>

    </>
  );
}
