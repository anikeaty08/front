import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const audio = document.getElementById('radio-stream');
            const playBtn = document.getElementById('play-btn');
            const volumeSlider = document.getElementById('volume-slider');

            // Play/Pause Toggle
            playBtn.addEventListener('click', () => {
                if (audio.paused) {
                    // Try to play
                    const playPromise = audio.play();
                    
                    if (playPromise !== undefined) {
                        playPromise.then(_ => {
                            // Playback started
                            playBtn.classList.add('playing');
                        }).catch(error => {
                            console.error("Playback failed:", error);
                        });
                    }
                } else {
                    // Pause
                    audio.pause();
                    playBtn.classList.remove('playing');
                }
            });

            // Volume Control
            if(volumeSlider) {
                audio.volume = volumeSlider.value;
                volumeSlider.addEventListener('input', (e) => {
                    audio.volume = e.target.value;
                });
            }

            // Optional: Handle stream errors or buffering
            audio.addEventListener('waiting', () => {
                playBtn.classList.add('opacity-50', 'cursor-wait');
            });
            
            audio.addEventListener('playing', () => {
                playBtn.classList.remove('opacity-50', 'cursor-wait');
                playBtn.classList.add('playing');
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      


<audio id="radio-stream" preload="none">
<source src="https://stream-url-placeholder.com/stream" type="audio/mpeg"/>
        Your browser does not support the audio element.
    </audio>

<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 glass-panel transition-all duration-300" id="main-header">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-4">
<a className="text-white text-lg font-semibold tracking-tighter hover:opacity-80 transition-opacity" href="#">
                    ADIO.FM
                </a>

<div className="hidden sm:flex items-center gap-2 px-2 py-1 bg-red-500/10 rounded-full border border-red-500/20">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
<span className="text-[10px] uppercase font-medium tracking-wider text-red-500">On Air</span>
</div>
</div>

<div className="flex items-center gap-6">

<button aria-label="Play Stream" className="group flex items-center justify-center h-10 w-10 rounded-full bg-white text-black hover:scale-105 hover:bg-zinc-200 transition-all focus:outline-none focus:ring-2 focus:ring-white/50" id="play-btn">
<iconify-icon className="ml-0.5 group-[.playing]:hidden" height="18" icon="lucide:play" strokeWidth="1.5" width="18"></iconify-icon>
<iconify-icon className="hidden group-[.playing]:block" height="18" icon="lucide:pause" strokeWidth="1.5" width="18"></iconify-icon>
</button>

<div className="hidden md:flex items-center gap-2 group">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300 transition-colors" height="16" icon="lucide:volume-2" width="16"></iconify-icon>
<input className="w-20 accent-white" id="volume-slider" max="1" min="0" step="0.1" type="range" value="0.8"/>
</div>
</div>
</div>
</header>
<main>

<section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-[128px]"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[128px]"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto space-y-8 animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-white/10 backdrop-blur-sm">
<span className="text-xs font-medium text-zinc-300 tracking-wide">Live Streaming Worldwide</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500 tracking-tighter leading-[1.1]">
                    Sonic excellence <br/> for the modern ear.
                </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
                    A curated auditory experience blending premium fidelity with timeless curation. Press play and let the frequency take over.
                </p>
<div className="pt-8">
<button className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-medium text-sm hover:bg-zinc-200 transition-colors tracking-tight" onclick="document.getElementById('play-btn').click()">
<iconify-icon height="18" icon="lucide:radio" width="18"></iconify-icon>
                        Start Listening
                    </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<iconify-icon className="text-zinc-500" height="20" icon="lucide:arrow-down" width="20"></iconify-icon>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5 bg-zinc-950/50">
<div className="max-w-2xl mx-auto text-center">
<iconify-icon className="text-zinc-600 mb-6 mx-auto" height="32" icon="lucide:waves" width="32"></iconify-icon>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tighter mb-6">About the Station</h2>
<p className="text-zinc-400 leading-relaxed text-lg">
                    ADIO.FM is not just a radio station; it is a sonic landscape designed for the discerning listener. We strip away the noise to deliver pure, unadulterated musical curation. From deep electronic grooves to avant-garde jazz, our broadcast is a continuous stream of high-fidelity inspiration, available 24/7 on any device.
                </p>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tighter">Featured Programs</h2>
<p className="text-sm text-zinc-500 mt-2">Curated selections for every mood.</p>
</div>
<div className="h-px bg-zinc-800 flex-grow md:mx-8 hidden md:block"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="group">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-zinc-900 mb-6 relative">

<img alt="Morning Frequency" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2 group-hover:text-indigo-400 transition-colors">Morning Frequency</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Start your day with atmospheric textures and rhythmic awakening. A blend of ambient electronic and soft acoustics to focus your mind.
                    </p>
</article>

<article className="group">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-zinc-900 mb-6 relative">

<img alt="The Midday Cut" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2 group-hover:text-indigo-400 transition-colors">The Midday Cut</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Uptempo beats and rare grooves. We dig deep into the crates of funk, soul, and progressive house to keep your energy high.
                    </p>
</article>

<article className="group">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-zinc-900 mb-6 relative">

<img alt="Nocturnal Transmissions" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2 group-hover:text-indigo-400 transition-colors">Nocturnal Transmissions</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Dark, immersive, and hypnotic. As the sun sets, we explore the boundaries of techno and experimental soundscapes.
                    </p>
</article>
</div>
</section>

<section className="py-24 px-6 bg-zinc-900/20 border-t border-white/5">
<div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="flex flex-col justify-between">
<div className="space-y-6">
<h2 className="text-3xl font-semibold text-white tracking-tighter">Get in Touch</h2>
<p className="text-zinc-400 text-lg">
                            Interested in advertising, collaborations, or just want to send a request? Reach out to our studio directly.
                        </p>
</div>
<div className="mt-12 space-y-6">

<a className="flex items-center gap-4 p-4 rounded-lg bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-all group" href="https://wa.me/34645738738" target="_blank">
<div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white">
<iconify-icon height="20" icon="lucide:message-circle" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Chat on WhatsApp</h4>
<p className="text-zinc-400 text-xs mt-0.5 group-hover:text-green-400 transition-colors">Wait-free connection</p>
</div>
<iconify-icon className="ml-auto text-zinc-500 group-hover:translate-x-1 transition-transform" height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
<div className="flex items-center gap-6 text-zinc-500">
<a aria-label="Twitter" className="hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="lucide:twitter" width="20"></iconify-icon>
</a>
<a aria-label="Instagram" className="hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="lucide:instagram" width="20"></iconify-icon>
</a>
<a aria-label="Facebook" className="hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="lucide:facebook" width="20"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="bg-black border border-white/5 rounded-2xl p-8 shadow-2xl">
<form action="mailto:contact@adio.fm" className="space-y-6" enctype="text/plain" method="post">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wider" htmlFor="name">Name</label>
<input className="w-full bg-zinc-900 border border-zinc-800 text-white text-sm rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-transparent transition-all placeholder:text-zinc-600" id="name" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wider" htmlFor="email">Email</label>
<input className="w-full bg-zinc-900 border border-zinc-800 text-white text-sm rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-transparent transition-all placeholder:text-zinc-600" id="email" name="email" placeholder="jane@example.com" required="" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wider" htmlFor="message">Message</label>
<textarea className="w-full bg-zinc-900 border border-zinc-800 text-white text-sm rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-transparent transition-all placeholder:text-zinc-600 resize-none" id="message" name="message" placeholder="Tell us what's on your mind..." required="" rows="4"></textarea>
</div>
<div className="flex items-start gap-3">
<div className="relative flex items-start">
<input className="h-4 w-4 rounded border-zinc-700 bg-zinc-900 text-indigo-600 focus:ring-offset-black focus:ring-indigo-500/50 mt-1" id="consent" name="consent" required="" type="checkbox"/>
</div>
<label className="text-xs text-zinc-500 leading-snug" htmlFor="consent">
                                By sending this form, you agree to be added to our database and allow us to contact you regarding your inquiry.
                            </label>
</div>
<button className="w-full bg-white text-black font-medium py-3 rounded-md text-sm hover:bg-zinc-200 transition-colors tracking-tight" type="submit">
                            Send Message
                        </button>
</form>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 py-12 px-6 bg-black">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-white font-semibold tracking-tighter text-lg">ADIO.FM</span>
<span className="text-zinc-600 text-sm">© 2023</span>
</div>
<div className="flex gap-8 text-xs font-medium text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Cookie Settings</a>
</div>
</div>
</footer>



    </>
  );
}
