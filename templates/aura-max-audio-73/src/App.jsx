import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      

<nav className="w-full bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/5">
<div className="max-w-5xl mx-auto px-4 h-12 flex items-center justify-between text-xs font-normal text-zinc-300">

<button className="md:hidden flex items-center text-zinc-300 hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>

<a className="tracking-tighter font-medium text-white text-sm" href="#">AURA</a>

<div className="hidden md:flex space-x-8">
<a className="hover:text-white transition-colors" href="#">Store</a>
<a className="hover:text-white transition-colors" href="#">Mac</a>
<a className="hover:text-white transition-colors" href="#">iPad</a>
<a className="hover:text-white transition-colors" href="#">iPhone</a>
<a className="hover:text-white transition-colors text-white" href="#">Audio</a>
<a className="hover:text-white transition-colors" href="#">Accessories</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
</div>

<div className="flex items-center space-x-4">
<button className="hover:text-white transition-colors flex items-center">
<iconify-icon className="text-lg" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="hover:text-white transition-colors flex items-center">
<iconify-icon className="text-lg" icon="solar:cart-large-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="w-full bg-black/80 backdrop-blur-md sticky top-12 z-40 border-b border-white/10">
<div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
<h2 className="text-lg font-medium tracking-tight text-white">AURA Max</h2>
<div className="flex items-center space-x-6 text-xs font-normal text-zinc-400">
<a className="hidden md:block hover:text-white transition-colors" href="#">Overview</a>
<a className="hidden md:block hover:text-white transition-colors" href="#">Tech Specs</a>
<a className="bg-white text-black px-3 py-1 rounded-full font-medium hover:bg-zinc-200 transition-colors" href="#">Buy</a>
</div>
</div>
</div>

<section className="relative pt-24 pb-32 md:pt-32 md:pb-48 flex flex-col items-center justify-center text-center overflow-hidden gradient-mesh min-h-[90vh]">
<div className="z-10 px-4 max-w-4xl mx-auto flex flex-col items-center">
<p className="text-sm font-medium tracking-tight text-zinc-400 mb-4 uppercase">New</p>
<h1 className="text-5xl md:text-8xl font-medium tracking-tight gradient-text mb-6">
                Audio, redefined.
            </h1>
<p className="text-xl md:text-2xl font-light text-zinc-400 max-w-2xl mx-auto mb-10 tracking-tight">
                High-fidelity audio meets industry-leading Active Noise Cancellation. Experience sound in its purest form.
            </p>
<div className="flex items-center space-x-6">
<a className="text-lg font-medium text-white hover:text-zinc-300 transition-colors flex items-center gap-1 group" href="#">
                    Learn more 
                    <iconify-icon className="text-base group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="text-lg font-medium text-blue-500 hover:text-blue-400 transition-colors flex items-center gap-1 group" href="#">
                    Buy 
                    <iconify-icon className="text-base group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[40vh] md:h-[50vh] opacity-80 pointer-events-none flex justify-center items-end">
<div className="w-64 h-80 rounded-t-[100px] border-t-2 border-l-2 border-r-2 border-white/20 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm relative">
<div className="absolute top-1/2 -left-12 w-24 h-40 rounded-full border border-white/10 bg-black/50 backdrop-blur-md"></div>
<div className="absolute top-1/2 -right-12 w-24 h-40 rounded-full border border-white/10 bg-black/50 backdrop-blur-md"></div>
</div>
</div>
</section>

<section className="bg-zinc-50 text-zinc-900 py-32 px-4 relative overflow-hidden flex flex-col justify-center items-center text-center min-h-[80vh]">
<div className="max-w-4xl mx-auto z-10">
<h2 className="text-4xl md:text-7xl font-medium tracking-tight mb-6">
                Silence the noise.
            </h2>
<p className="text-lg md:text-2xl font-light text-zinc-500 max-w-2xl mx-auto mb-12 tracking-tight">
                Computational audio listens to your environment 48,000 times per second to create the perfect quiet.
            </p>
<a className="text-lg font-medium text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1 justify-center group" href="#">
                Hear the difference 
                <iconify-icon className="text-xl group-hover:scale-105 transition-transform" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>

<div className="absolute inset-0 pointer-events-none opacity-30 flex items-center justify-center">
<div className="w-[800px] h-[800px] border border-zinc-200 rounded-full flex items-center justify-center">
<div className="w-[600px] h-[600px] border border-zinc-200 rounded-full flex items-center justify-center">
<div className="w-[400px] h-[400px] border border-zinc-200 rounded-full"></div>
</div>
</div>
</div>
</section>

<section className="bg-black py-24 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

<div className="bg-zinc-900 rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[400px] md:min-h-[500px] relative overflow-hidden group">
<div className="z-10">
<iconify-icon className="text-3xl text-zinc-400 mb-6" icon="solar:soundwave-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-2xl md:text-4xl font-medium tracking-tight text-white mb-2">Personalized Spatial Audio.</h3>
<p className="text-base text-zinc-400 font-light">Sound that wraps around you, tuned perfectly to the unique shape of your ear.</p>
</div>

<div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-700"></div>
</div>

<div className="bg-zinc-100 rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[400px] md:min-h-[500px] relative overflow-hidden text-zinc-900 group">
<div className="z-10">
<iconify-icon className="text-3xl text-zinc-500 mb-6" icon="solar:battery-charge-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-2xl md:text-4xl font-medium tracking-tight mb-2">Up to 30 hours.</h3>
<p className="text-base text-zinc-600 font-light">Keep the music playing all day and into the night with Active Noise Cancellation enabled.</p>
</div>

<div className="absolute bottom-8 right-8 flex items-end space-x-2">
<div className="w-16 h-40 bg-zinc-200 rounded-full relative overflow-hidden">
<div className="absolute bottom-0 w-full h-[80%] bg-green-500/20 backdrop-blur-md rounded-b-full"></div>
</div>
</div>
</div>

<div className="bg-zinc-100 rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[400px] md:min-h-[500px] relative overflow-hidden text-zinc-900 md:col-span-2">
<div className="max-w-md z-10">
<iconify-icon className="text-3xl text-zinc-500 mb-6" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-2xl md:text-4xl font-medium tracking-tight mb-2">A radical composition.</h3>
<p className="text-base text-zinc-600 font-light">The overarching design features a knit mesh canopy to reduce on-head pressure, and memory foam ear cushions for an acoustic seal.</p>
</div>
<div className="absolute top-0 right-0 w-full h-full pointer-events-none flex justify-end items-center pr-12 opacity-20">
<iconify-icon className="text-9xl text-zinc-400 scale-[3]" icon="solar:headphones-linear" style={{strokeWidth: '1'}}></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-white/10 text-xs font-normal text-zinc-400">
<div className="max-w-5xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<h4 className="text-zinc-200 font-medium mb-4">Shop and Learn</h4>
<ul className="space-y-2">
<li><a className="hover:text-zinc-200 transition-colors" href="#">Store</a></li>
<li><a className="hover:text-zinc-200 transition-colors" href="#">Mac</a></li>
<li><a className="hover:text-zinc-200 transition-colors" href="#">iPad</a></li>
<li><a className="hover:text-zinc-200 transition-colors" href="#">iPhone</a></li>
<li><a className="hover:text-zinc-200 transition-colors" href="#">Audio</a></li>
</ul>
</div>
<div>
<h4 className="text-zinc-200 font-medium mb-4">Account</h4>
<ul className="space-y-2">
<li><a className="hover:text-zinc-200 transition-colors" href="#">Manage Your ID</a></li>
<li><a className="hover:text-zinc-200 transition-colors" href="#">Store Account</a></li>
<li><a className="hover:text-zinc-200 transition-colors" href="#">iCloud.com</a></li>
</ul>
</div>
<div>
<h4 className="text-zinc-200 font-medium mb-4">AURA Store</h4>
<ul className="space-y-2">
<li><a className="hover:text-zinc-200 transition-colors" href="#">Find a Store</a></li>
<li><a className="hover:text-zinc-200 transition-colors" href="#">Genius Bar</a></li>
<li><a className="hover:text-zinc-200 transition-colors" href="#">Today at AURA</a></li>
<li><a className="hover:text-zinc-200 transition-colors" href="#">Financing</a></li>
</ul>
</div>
<div>
<h4 className="text-zinc-200 font-medium mb-4">About AURA</h4>
<ul className="space-y-2">
<li><a className="hover:text-zinc-200 transition-colors" href="#">Newsroom</a></li>
<li><a className="hover:text-zinc-200 transition-colors" href="#">Leadership</a></li>
<li><a className="hover:text-zinc-200 transition-colors" href="#">Career Opportunities</a></li>
<li><a className="hover:text-zinc-200 transition-colors" href="#">Ethics &amp; Compliance</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p>Copyright © 2024 AURA Inc. All rights reserved.</p>
<div className="flex space-x-4">
<a className="hover:text-zinc-200 transition-colors border-r border-white/20 pr-4" href="#">Privacy Policy</a>
<a className="hover:text-zinc-200 transition-colors border-r border-white/20 pr-4" href="#">Terms of Use</a>
<a className="hover:text-zinc-200 transition-colors border-r border-white/20 pr-4" href="#">Sales and Refunds</a>
<a className="hover:text-zinc-200 transition-colors" href="#">Legal</a>
</div>
<p className="md:ml-auto">Nigeria</p>
</div>
</div>
</footer>

    </>
  );
}
