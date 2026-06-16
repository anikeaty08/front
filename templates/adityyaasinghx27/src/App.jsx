import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple scroll effect for nav
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('border-purple-500/40');
            } else {
                nav.classList.remove('border-purple-500/40');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div style={{position: 'fixed', inset: '0', pointerEvents: 'none', zIndex: '0'}}>
<div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl glow-pulse"></div>
<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600 rounded-full opacity-10 blur-3xl glow-pulse" style={{animationDelay: '1s'}}></div>
<div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-600 rounded-full opacity-5 blur-3xl glow-pulse" style={{animationDelay: '0.5s'}}></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-purple-500/20">
<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="font-space font-semibold text-xl tracking-tighter bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" href="#">
                adiee
            </a>
<div className="hidden md:flex gap-8 text-sm text-gray-400">
<a className="hover:text-purple-400 transition-colors duration-300" href="#about">About</a>
<a className="hover:text-purple-400 transition-colors duration-300" href="#work">Work</a>
<a className="hover:text-purple-400 transition-colors duration-300" href="#gallery">Gallery</a>
<a className="hover:text-purple-400 transition-colors duration-300" href="#contact">Contact</a>
</div>
<button className="md:hidden text-purple-400">
<span className="iconify text-2xl" data-icon="mdi:menu"></span>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
<div className="text-center z-10">
<div className="float-animation mb-8">
<div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-1 neon-border">
<div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
<span className="text-5xl">✨</span>
</div>
</div>
</div>
<h1 className="font-space text-5xl md:text-7xl font-bold mb-4 neon-text">
                Aditya Singh
            </h1>
<p className="text-xl md:text-2xl text-gray-400 mb-2">aka <span className="text-purple-400 font-medium">Adiee</span></p>
<p className="text-lg md:text-xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-medium mb-8 gradient-animate">
                Doing Cool Stuff on the Internet
            </p>
<div className="flex flex-wrap justify-center gap-3 mb-12">
<span className="px-4 py-2 glass-card rounded-full text-sm text-purple-300">🎨 Creator</span>
<span className="px-4 py-2 glass-card rounded-full text-sm text-blue-300">💻 Developer</span>
<span className="px-4 py-2 glass-card rounded-full text-sm text-pink-300">🚀 Dreamer</span>
</div>
<a className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-medium hover-glow transition-all duration-300 hover:scale-105" href="#about">
                Explore My World
                <span className="iconify" data-icon="mdi:arrow-down"></span>
</a>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
<span className="iconify text-3xl text-purple-400/50" data-icon="mdi:chevron-double-down"></span>
</div>
</div></section>

<section className="py-24 px-6 relative z-10" id="about">
<div className="max-w-4xl mx-auto">
<h2 className="font-space text-4xl md:text-5xl font-bold text-center mb-16">
<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">About Me</span>
</h2>
<div className="glass-card rounded-3xl p-8 md:p-12 neon-box">
<p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                    Hey there! I'm <span className="text-purple-400 font-semibold">Aditya</span>, but you can call me <span className="text-pink-400 font-semibold">Adiee</span>. I'm a digital native who lives at the intersection of creativity and technology.
                </p>
<p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                    By day, I'm crafting beautiful digital experiences. By night, I'm probably diving deep into the latest tech trends, creating content, or building something cool that may or may not work. 😅
                </p>
<p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    I believe in the power of the internet to connect, inspire, and transform. Let's build something amazing together! 💜
                </p>

<div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-purple-500/20">
<div className="text-center">
<div className="font-space text-3xl md:text-4xl font-bold text-purple-400">50+</div>
<div className="text-sm text-gray-400 mt-1">Projects</div>
</div>
<div className="text-center">
<div className="font-space text-3xl md:text-4xl font-bold text-pink-400">10K+</div>
<div className="text-sm text-gray-400 mt-1">Followers</div>
</div>
<div className="text-center">
<div className="font-space text-3xl md:text-4xl font-bold text-blue-400">∞</div>
<div className="text-sm text-gray-400 mt-1">Ideas</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="work">
<div className="max-w-6xl mx-auto">
<h2 className="font-space text-4xl md:text-5xl font-bold text-center mb-16">
<span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">What I Do</span>
</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="glass-card rounded-2xl p-8 hover-glow transition-all duration-500 hover:-translate-y-2 group">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">ify text-3xl" data-icon="mdi:code-braces"&gt;
</div>
<h3 className="font-space text-xl font-semibold mb-3 text-purple-300">Development</h3>
<p className="text-gray-400">Building sleek websites and apps that look fire and work even better. Clean code is my love language.</p>
</div>

<div className="glass-card rounded-2xl p-8 hover-glow transition-all duration-500 hover:-translate-y-2 group">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-3xl" data-icon="mdi:palette-outline"></span>
</div>
<h3 className="font-space text-xl font-semibold mb-3 text-blue-300">Design</h3>
<p className="text-gray-400">Crafting visual experiences that hit different. Aesthetic isn't optional, it's essential.</p>
</div>

<div className="glass-card rounded-2xl p-8 hover-glow transition-all duration-500 hover:-translate-y-2 group">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-3xl" data-icon="mdi:creation"></span>
</div>
<h3 className="font-space text-xl font-semibold mb-3 text-pink-300">Content</h3>
<p className="text-gray-400">Creating content that slaps. From videos to posts, I tell stories that connect and inspire.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="gallery">
<div className="max-w-6xl mx-auto">
<h2 className="font-space text-4xl md:text-5xl font-bold text-center mb-16">
<span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">Gallery</span>
</h2>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
<div className="gallery-item rounded-2xl overflow-hidden glass-card aspect-square cursor-pointer hover-glow transition-all duration-300">
<img alt="Abstract Art" className="w-full h-full object-cover transition-transform duration-500" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="gallery-item rounded-2xl overflow-hidden glass-card aspect-square cursor-pointer hover-glow transition-all duration-300">
<img alt="Tech Setup" className="w-full h-full object-cover transition-transform duration-500" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="gallery-item rounded-2xl overflow-hidden glass-card aspect-square cursor-pointer hover-glow transition-all duration-300">
<img alt="Neon Lights" className="w-full h-full object-cover transition-transform duration-500" src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="gallery-item rounded-2xl overflow-hidden glass-card aspect-square cursor-pointer hover-glow transition-all duration-300">
<img alt="City Nights" className="w-full h-full object-cover transition-transform duration-500" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="gallery-item rounded-2xl overflow-hidden glass-card aspect-square cursor-pointer hover-glow transition-all duration-300">
<img alt="Code Screen" className="w-full h-full object-cover transition-transform duration-500" src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="gallery-item rounded-2xl overflow-hidden glass-card aspect-square cursor-pointer hover-glow transition-all duration-300">
<img alt="Gradient" className="w-full h-full object-cover transition-transform duration-500" src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&amp;h=400&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="contact">
<div className="max-w-4xl mx-auto text-center">
<h2 className="font-space text-4xl md:text-5xl font-bold mb-6">
<span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Let's Connect</span>
</h2>
<p className="text-xl text-gray-400 mb-12">Slide into my DMs or hit me up anywhere on the internet ✨</p>

<div className="flex flex-wrap justify-center gap-4 mb-12">
<a className="social-btn glass-card px-6 py-4 rounded-2xl flex items-center gap-3 transition-all duration-300" href="#">
<span className="iconify text-2xl text-purple-400" data-icon="mdi:twitter"></span>
<span className="text-gray-300">Twitter</span>
</a>
<a className="social-btn glass-card px-6 py-4 rounded-2xl flex items-center gap-3 transition-all duration-300" href="#">
<span className="iconify text-2xl text-pink-400" data-icon="mdi:instagram"></span>
<span className="text-gray-300">Instagram</span>
</a>
<a className="social-btn glass-card px-6 py-4 rounded-2xl flex items-center gap-3 transition-all duration-300" href="#">
<span className="iconify text-2xl text-blue-400" data-icon="mdi:linkedin"></span>
<span className="text-gray-300">LinkedIn</span>
</a>
<a className="social-btn glass-card px-6 py-4 rounded-2xl flex items-center gap-3 transition-all duration-300" href="#">ify text-2xl text-gray-300" data-icon="mdi:github"&gt;
<span className="text-gray-300">GitHub</span>
</a>
<a className="social-btn glass-card px-6 py-4 rounded-2xl flex items-center gap-3 transition-all duration-300" href="#">
<span className="iconify text-2xl text-red-400" data-icon="mdi:youtube"></span>
<span className="text-gray-300">YouTube</span>
</a>
</div>

<div className="glass-card rounded-3xl p-8 neon-box">
<p className="text-gray-400 mb-4">For collabs, projects, or just to say hi:</p>
<a className="inline-flex items-center gap-2 text-2xl font-space font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-purple-400 transition-all duration-300" href="mailto:hello@adiee.dev">
<span className="iconify text-purple-400" data-icon="mdi:email-outline"></span>
                    hello@adiee.dev
                </a>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-purple-500/20 relative z-10">
<div className="max-w-6xl mx-auto text-center">
<p className="font-space text-lg mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-medium">
                Built with 💜 by Adiee
            </p>
<p className="text-gray-500 text-sm">© 2024 Aditya Singh. All rights reserved.</p>
<p className="text-gray-600 text-xs mt-4">Made on the internet, for the internet ✨</p>
</div>
</footer>



    </>
  );
}
