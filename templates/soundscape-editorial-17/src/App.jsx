import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        const homeView = document.getElementById('home-view');
        const articleView = document.getElementById('article-view');

        function showArticle() {
            window.scrollTo({ top: 0, behavior: 'instant' });
            homeView.classList.add('hidden');
            articleView.classList.remove('hidden');
        }

        function showHome() {
            window.scrollTo({ top: 0, behavior: 'instant' });
            articleView.classList.add('hidden');
            homeView.classList.remove('hidden');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100 transition-all duration-300">
<div className="md:h-20 flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="text-2xl tracking-tighter text-zinc-900 z-50 relative font-playfair font-medium" href="#" onclick="showHome()" style={{}}>
                Soundscape
            </a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors font-geist" href="#" onclick="showHome()">Journal</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors font-geist" href="#">Interviews</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors font-geist" href="#">Equipment</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors font-geist" href="#">About</a>
<div className="w-px h-4 bg-zinc-200 mx-2"></div>
<button className="text-zinc-400 hover:text-zinc-900 transition-colors">
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
</nav>

<button className="md:hidden text-zinc-500 hover:text-zinc-900">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</header>

<main className="flex-grow pt-20 md:pt-24">

<div className="fade-in" id="home-view">

<section className="max-w-7xl mx-auto px-6 mb-20 md:mb-32 mt-8 md:mt-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
<div className="lg:col-span-7 flex flex-col gap-6">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-zinc-900"></span>
<span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 font-geist">Editor's Choice</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter text-zinc-900 leading-[0.95] cursor-pointer hover:text-zinc-600 transition-colors font-playfair font-medium" onclick="showArticle()" style={{}}>
                            The Architecture of Silence
                        </h1>
<p className="text-lg md:text-xl text-zinc-500 font-light max-w-xl leading-relaxed mt-2 font-geist">
                            Exploring ambient music in the age of constant noise. How Brian Eno, minimalist architecture, and the absence of sound shape our modern environments.
                        </p>
<div className="flex items-center gap-6 mt-4">
<button className="text-sm font-medium text-zinc-900 border-b border-zinc-900 pb-0.5 hover:opacity-70 transition-opacity font-geist" onclick="showArticle()">Read Story</button>
<span className="text-xs text-zinc-400 font-geist">5 min read</span>
</div>
</div>
<div className="lg:col-span-5 h-full">
<div className="aspect-[4/3] w-full bg-zinc-100 overflow-hidden relative cursor-pointer group" onclick="showArticle()">
<img alt="Abstract architectural shadows" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1482442120256-9c03866de390?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 ring-1 ring-inset ring-black/5"></div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24">
<div className="flex items-end justify-between mb-12 border-b border-zinc-100 pb-4">
<h2 className="text-3xl tracking-tight text-zinc-900 font-playfair font-medium" style={{}}>Latest Dispatches</h2>
<a className="text-xs font-medium uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors hidden md:block font-geist" href="#">View Archive</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

<article className="group cursor-pointer flex flex-col gap-4">
<div className="aspect-[3/2] bg-zinc-100 overflow-hidden relative">
<img alt="Synthesizer cables" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-zinc-400 font-geist">Synthesis</span>
<span className="text-xs font-medium text-zinc-300 font-geist">Oct 24</span>
</div>
<h3 className="text-2xl tracking-tight text-zinc-900 group-hover:text-zinc-600 transition-colors leading-tight font-playfair font-medium" style={{}}>
                                Modular Systems: Controlled Chaos
                            </h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed line-clamp-2 font-geist">
                                Why patching cables physically changes the way we think about signal flow and creativity.
                            </p>
</div>
</article>

<article className="group cursor-pointer flex flex-col gap-4">
<div className="aspect-[3/2] bg-zinc-100 overflow-hidden relative">
<img alt="Vinyl collection" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-zinc-400 font-geist">Collecting</span>
<span className="text-xs font-medium text-zinc-300 font-geist">Oct 18</span>
</div>
<h3 className="text-2xl tracking-tight text-zinc-900 group-hover:text-zinc-600 transition-colors leading-tight font-playfair font-medium" style={{}}>
                                The Japanese City Pop Revival
                            </h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed line-clamp-2 font-geist">
                                How a forgotten genre from 80s Tokyo became the soundtrack of the modern internet.
                            </p>
</div>
</article>

<article className="group cursor-pointer flex flex-col gap-4">
<div className="aspect-[3/2] bg-zinc-100 overflow-hidden relative">
<img alt="Stage lighting" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-zinc-400 font-geist">Live</span>
<span className="text-xs font-medium text-zinc-300 font-geist">Oct 12</span>
</div>
<h3 className="text-2xl tracking-tight text-zinc-900 group-hover:text-zinc-600 transition-colors leading-tight font-playfair font-medium" style={{}}>
                                Designing Light for Sound
                            </h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed line-clamp-2 font-geist">
                                An interview with the visual team behind The Chemical Brothers' immersive live shows.
                            </p>
</div>
</article>

<article className="group cursor-pointer flex flex-col gap-4">
<div className="aspect-[3/2] bg-zinc-100 overflow-hidden relative">
<img alt="Mixing desk" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-zinc-400 font-geist">Production</span>
<span className="text-xs font-medium text-zinc-300 font-geist">Sep 28</span>
</div>
<h3 className="text-2xl tracking-tight text-zinc-900 group-hover:text-zinc-600 transition-colors leading-tight font-playfair font-medium" style={{}}>
                                The Warmth of Distortion
                            </h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed line-clamp-2 font-geist">
                                Understanding harmonic saturation and why clean digital audio often feels cold.
                            </p>
</div>
</article>

<article className="group cursor-pointer flex flex-col gap-4">
<div className="aspect-[3/2] bg-zinc-100 overflow-hidden relative">
<img alt="Concert crowd" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-zinc-400 font-geist">Culture</span>
<span className="text-xs font-medium text-zinc-300 font-geist">Sep 22</span>
</div>
<h3 className="text-2xl tracking-tight text-zinc-900 group-hover:text-zinc-600 transition-colors leading-tight font-playfair font-medium" style={{}}>
                                Venues That Vanished
                            </h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed line-clamp-2 font-geist">
                                A look back at the legendary clubs that defined the underground scenes of New York and Berlin.
                            </p>
</div>
</article>

<article className="group cursor-pointer flex flex-col gap-4">
<div className="aspect-[3/2] bg-zinc-100 overflow-hidden relative">
<img alt="Headphones" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-zinc-400 font-geist">Tech</span>
<span className="text-xs font-medium text-zinc-300 font-geist">Sep 15</span>
</div>
<h3 className="text-2xl tracking-tight text-zinc-900 group-hover:text-zinc-600 transition-colors leading-tight font-playfair font-medium" style={{}}>
                                Spatial Audio: Gimmick or Future?
                            </h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed line-clamp-2 font-geist">
                                Does Dolby Atmos for music actually improve the listening experience for the average consumer?
                            </p>
</div>
</article>
</div>
</section>

<section className="bg-zinc-50 border-y border-zinc-100 py-24">
<div className="max-w-xl mx-auto px-6 text-center">
<h3 className="text-3xl tracking-tight text-zinc-900 mb-4 font-playfair font-medium" style={{}}>Signal to Noise</h3>
<p className="text-zinc-500 font-light mb-8 font-geist" style={{}}>
                        A weekly curation of high-fidelity thoughts, gear analysis, and deep cuts. No spam, just sound.
                    </p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 bg-white border border-zinc-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all placeholder:text-zinc-400" placeholder="Email address" type="email"/>
<button className="bg-zinc-900 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-zinc-800 transition-colors font-geist" type="button">Subscribe</button>
</form>
</div>
</section>
</div>

<div className="hidden fade-in" id="article-view">

<div className="fixed top-[64px] md:top-[80px] left-0 w-full h-px bg-zinc-100 z-40">
<div className="h-full bg-zinc-900 w-1/3"></div>
</div>
<article className="max-w-3xl mx-auto px-6 py-12 md:py-20">
<header className="mb-12 md:mb-16 text-center">
<div className="flex items-center justify-center gap-3 text-xs font-medium text-zinc-500 mb-8">
<span className="text-zinc-900 font-geist">Soundscape</span>
<span className="text-zinc-300 font-geist">/</span>
<span className="font-geist">Feature</span>
<span className="text-zinc-300 font-geist">/</span>
<span className="font-geist">Nov 2023</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tighter text-zinc-900 mb-8 leading-[1] font-playfair font-medium" style={{}}>
                        The Architecture of Silence
                    </h1>
<p className="text-xl md:text-2xl text-zinc-500 leading-relaxed max-w-2xl mx-auto font-playfair font-medium" style={{}}>
                        In a world designed to capture attention through noise, silence has become the ultimate luxury.
                    </p>
</header>
<div className="w-full aspect-[21/9] bg-zinc-100 overflow-hidden mb-16 relative">
<img alt="Hero" className="w-full h-full object-cover grayscale contrast-[1.1]" src="https://images.unsplash.com/photo-1482442120256-9c03866de390?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="prose prose-zinc prose-lg max-w-none prose-headings:font-serif prose-headings:font-medium prose-headings:tracking-tight prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:font-light prose-p:leading-8 prose-strong:text-zinc-900 prose-strong:font-medium prose-blockquote:border-l-2 prose-blockquote:border-zinc-900 prose-blockquote:pl-6 prose-blockquote:not-italic prose-blockquote:font-serif prose-blockquote:text-2xl prose-blockquote:text-zinc-900 prose-blockquote:my-12 prose-img:rounded-none prose-img:w-full prose-img:my-12">
<p className="first-letter:text-6xl first-letter:font-serif first-letter:font-medium first-letter:float-left first-letter:mr-3 first-letter:mt-[-8px] font-geist">
                        The room is empty. Not just devoid of furniture, but designed to be devoid of reflection. This is an anechoic chamber, the quietest place on earth. Here, you can hear the blood pumping through your veins, the high-pitched whine of your own nervous system. It is maddening. It is perfect.
                    </p>
<p className="font-geist">
                        Brian Eno famously defined ambient music as something that must be "as ignorable as it is interesting." This duality is the core tension of modern sound design. We are surrounded by notifications, alarms, engines, and the hum of electricity. Silence is no longer a natural state; it is an architectural decision.
                    </p>
<h3 className="font-geist">The Negative Space of Sound</h3>
<p className="font-geist">
                        Just as minimalist architecture uses negative space to define a structure, ambient music uses silence to define a moment. The Japanese concept of  (間) refers to the gap, the pause, the interval. It is not empty; it is full of possibility.
                    </p>
<blockquote className="font-geist">
                        "We don't need more sounds. We need better sounds, placed with more intention."
                    </blockquote>
<p className="font-geist">
                        When we walk into a cathedral, we lower our voices. The architecture demands it. The vast reverberation time turns a shout into a muddy mess, but a whisper carries. The space itself dictates the sonic landscape. Modern airports, with their carpeted floors and low ceilings, are designed to deaden sound, to reduce stress, to manage the herd.
                    </p>
<img alt="Minimalist architecture" src="https://images.unsplash.com/photo-1505567745926-ba89000d255a?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<h3 className="font-geist">Digital Noise vs. Analog Silence</h3>
<p className="font-geist">
                        In the digital realm, silence is absolute zero. It is null data. But in the analog world, silence has a texture. It has a noise floor. The tape hiss, the hum of the amp, the groove of the record before the song starts. This "room tone" grounds us in reality.
                    </p>
<p className="font-geist">
                        As we move further into the metaverse and spatial audio, we must ask ourselves: what does the future sound like? Is it a cacophony of infinite streams, or can we design digital spaces that respect the human need for quiet?
                    </p>
</div>
<div className="mt-20 pt-10 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex gap-4">
<button className="p-2 rounded-full border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-900 transition-all"><svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg></button>
<button className="p-2 rounded-full border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-900 transition-all"><svg className="lucide lucide-share w-4 h-4" data-lucide="share" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v13"></path><path d="m16 6-4-4-4 4"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path></svg></button>
</div>
<div className="flex gap-8">
<a className="text-sm font-medium text-zinc-400 hover:text-zinc-900 transition-colors font-geist" href="#">Previous Article</a>
<a className="text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors font-geist" href="#">Next Article</a>
</div>
</div>
</article>
</div>
</main>

<footer className="bg-white border-t border-zinc-100 py-12 md:py-16">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
<div className="col-span-1 md:col-span-2">
<div className="font-serif text-xl font-semibold tracking-tighter text-zinc-900 mb-6 font-geist" style={{}}>Soundscape</div>
<p className="text-zinc-500 font-light text-sm leading-relaxed max-w-xs font-geist">
                    Documenting the intersection of audio culture, technology, and design since 2023.
                </p>
</div>
<div>
<h4 className="font-medium text-sm text-zinc-900 mb-4 font-geist">Explore</h4>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li><a className="hover:text-zinc-900 transition-colors font-geist" href="#">Journal</a></li>
<li><a className="hover:text-zinc-900 transition-colors font-geist" href="#">Features</a></li>
<li><a className="hover:text-zinc-900 transition-colors font-geist" href="#">Playlists</a></li>
<li><a className="hover:text-zinc-900 transition-colors font-geist" href="#">Archives</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm text-zinc-900 mb-4 font-geist">Connect</h4>
<div className="flex gap-4 mb-6">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><svg className="lucide lucide-github w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
</div>
<p className="text-xs text-zinc-300 font-geist">© 2024 Soundscape. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
