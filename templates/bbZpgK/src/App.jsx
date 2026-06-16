import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', function() {
      const phoneGradient = document.getElementById('glowingGradient');
      let angle = 0;
      
      function animateGradients() {
        angle = (angle + 1) % 360;
        const x1 = 50 + 45 * Math.cos(angle * Math.PI / 180);
        const y1 = 50 + 45 * Math.sin(angle * Math.PI / 180);
        const x2 = 50 + 45 * Math.cos((angle + 180) * Math.PI / 180);
        const y2 = 50 + 45 * Math.sin((angle + 180) * Math.PI / 180);
        
        phoneGradient.setAttribute('x1', `${x1}%`);
        phoneGradient.setAttribute('y1', `${y1}%`);
        phoneGradient.setAttribute('x2', `${x2}%`);
        phoneGradient.setAttribute('y2', `${y2}%`);
        
        requestAnimationFrame(animateGradients);
      }
      
      animateGradients();
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="card-container w-full max-w-4xl mx-auto p-4">
<div className="bg-[#1a1b22] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/30">

<div className="relative w-full overflow-hidden bg-[#1E2130] flex items-center justify-center p-8 md:p-12">
<div className="blob blob-1"></div>
<div className="blob blob-2"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">

<div className="text-center md:text-left space-y-6">
<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4D7CFE] to-[#9364F7]">
                Interactive
              </span>
<br/>Mobile Experience
            </h1>
<p className="text-white/70 text-lg max-w-md mx-auto md:mx-0">
              Engage with our intuitive interface designed for seamless mobile interactions
            </p>
<div className="pt-4">
<button className="rounded-xl py-3 px-8 bg-gradient-to-r from-[#4D7CFE] to-[#3361D8] text-white font-medium shadow-lg shadow-blue-900/20 hover:from-[#5A89FF] hover:to-[#3D6BE0] transition-all duration-300">
                Get Started
              </button>
</div>
</div>

<div className="relative w-full max-w-[250px] mx-auto">

<div className="phone-body relative w-[250px] h-[450px] rounded-[40px] bg-gradient-to-br from-white/15 to-white/5 border border-white/20"></div>

<div className="screen-shape absolute top-[8px] left-[8px] w-[234px] h-[434px] rounded-[34px] bg-gradient-to-b from-[#2A2D3A] to-[#1a1c20] border border-white/10">

<div className="screen-content w-full h-full rounded-[32px] overflow-hidden bg-gradient-to-br from-[#3B4058] to-[#1E2130]">

<div className="h-[40px] w-full bg-black/50 backdrop-blur-md rounded-t-[32px] flex justify-between items-center px-6">
<div className="text-white text-xs font-medium">9:41</div>
<div className="flex space-x-2">
<svg className="w-4 h-4" fill="none" viewbox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="white" fillOpacity="0.8"></path></svg>
<svg className="w-4 h-4" fill="none" viewbox="0 0 24 24"><path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z" fill="white" fillOpacity="0.8"></path></svg>
<svg className="w-4 h-4" fill="none" viewbox="0 0 24 24"><path d="M7 17h10V7H7v10zm2-8h6v6H9V9z" fill="white" fillOpacity="0.8"></path></svg>
</div>
</div>
<div className="p-5 space-y-6">
<div className="flex justify-between items-center">
<div className="text-white text-lg font-semibold">Dashboard</div>
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
<svg className="w-5 h-5" fill="none" viewbox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="white"></path></svg>
</div>
</div>
<div className="w-full h-40 rounded-2xl bg-gradient-to-br from-[#4D7CFE]/20 to-[#9364F7]/20 border border-white/10 p-4 flex flex-col justify-between">
<div className="flex justify-between">
<div className="text-white/80 text-xs">Current Balance</div>
<svg className="w-6 h-6" fill="none" viewbox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" fill="white" fillOpacity="0.6"></path></svg>
</div>
<div className="text-white text-2xl font-bold">$12,750</div>
<div className="flex justify-between items-end">
<div className="text-green-400 text-xs">+2.4% this week</div>
<div className="text-white/60 text-xs">Updated just now</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-xl bg-white/10 p-3 flex items-center space-x-3">
<div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
<svg className="w-4 h-4" fill="none" viewbox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2v-4H8v-2h2V9h2v2h2v2h-2v4zm3-8h-2V7h2v2zm0 4h2v2h-2v-2z" fill="white"></path></svg>
</div>
<div>
<div className="text-white/70 text-xs">Send</div>
<div className="text-white text-sm font-medium">Money</div>
</div>
</div>
<div className="rounded-xl bg-white/10 p-3 flex items-center space-x-3">
<div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
<svg className="w-4 h-4" fill="none" viewbox="0 0 24 24"><path d="M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-2 0H3V6h14v8zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm13 0v11c0 1.1-.9 2-2 2H4v-2h17V7h2z" fill="white"></path></svg>
</div>
<div>
<div className="text-white/70 text-xs">View</div>
<div className="text-white text-sm font-medium">Cards</div>
</div>
</div>
</div>
<div className="space-y-3">
<div className="text-white font-medium text-sm">Recent Activity</div>
<div className="space-y-2">
<div className="flex items-center p-2 rounded-lg bg-white/5">
<div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
<svg className="w-4 h-4" fill="none" viewbox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" fill="#4ade80"></path></svg>
</div>
<div className="flex-1">
<div className="text-white text-sm">Payment Received</div>
<div className="text-white/60 text-xs">Today, 2:34 PM</div>
</div>
<div className="text-green-400 text-sm font-medium">+$840</div>
</div>
</div>
</div>
</div>
</div>
</div>

<svg className="absolute top-0 left-0 w-[250px] h-[450px] z-30" viewbox="0 0 250 450" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="glowingGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="rgba(77, 124, 254, 0)"></stop>
<stop offset="30%" stop-color="rgba(77, 124, 254, 0.2)"></stop>
<stop offset="45%" stop-color="rgba(77, 124, 254, 0.8)"></stop>
<stop offset="50%" stop-color="rgba(77, 124, 254, 1)"></stop>
<stop offset="55%" stop-color="rgba(77, 124, 254, 0.8)"></stop>
<stop offset="70%" stop-color="rgba(77, 124, 254, 0.2)"></stop>
<stop offset="100%" stop-color="rgba(77, 124, 254, 0)"></stop>
</lineargradient>
</defs>
<path className="phone-path" d="M 40,1 H 210 C 232,1 249,18 249,40 V 410 C 249,432 232,449 210,449 H 40 C 18,449 1,432 1,410 V 40 C 1,18 18,1 40,1 Z" fill="none" filter="drop-shadow(0 0 3px rgba(77, 124, 254, 0.6))" stroke="url(#glowingGradient)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
</svg>
</div>
</div>
</div>

<div className="p-8 md:p-12 bg-[#1a1b22]">
<h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">Key Features</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

<div className="feature-item p-6 rounded-2xl bg-gradient-to-br from-[#2A2D3A] to-[#1E2130] border border-white/5 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/10 group">
<div className="feature-icon w-14 h-14 mb-5 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300">
<svg className="w-7 h-7 text-blue-400" fill="none" viewbox="0 0 24 24">
<path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" fill="currentColor"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Smart Settings</h3>
<p className="text-white/70 mb-4">Customize your experience with intelligent settings that adapt to your usage patterns</p>
<a className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors" href="#">
              Learn more
              <svg className="w-4 h-4 ml-1" fill="none" viewbox="0 0 24 24">
<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="currentColor"></path>
</svg>
</a>
</div>

<div className="feature-item p-6 rounded-2xl bg-gradient-to-br from-[#2A2D3A] to-[#1E2130] border border-white/5 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/10 group">
<div className="feature-icon w-14 h-14 mb-5 rounded-xl bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-all duration-300">
<svg className="w-7 h-7 text-purple-400" fill="none" viewbox="0 0 24 24">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="currentColor"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Real-time Updates</h3>
<p className="text-white/70 mb-4">Stay informed with instant notifications and live data synchronization across all devices</p>
<a className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors" href="#">
              Learn more
              <svg className="w-4 h-4 ml-1" fill="none" viewbox="0 0 24 24">
<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="currentColor"></path>
</svg>
</a>
</div>

<div className="feature-item p-6 rounded-2xl bg-gradient-to-br from-[#2A2D3A] to-[#1E2130] border border-white/5 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/10 group">
<div className="feature-icon w-14 h-14 mb-5 rounded-xl bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-all duration-300">
<svg className="w-7 h-7 text-green-400" fill="none" viewbox="0 0 24 24">
<path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" fill="currentColor"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Enhanced Security</h3>
<p className="text-white/70 mb-4">Protect your data with advanced encryption and multi-factor authentication options</p>
<a className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors" href="#">
              Learn more
              <svg className="w-4 h-4 ml-1" fill="none" viewbox="0 0 24 24">
<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="currentColor"></path>
</svg>
</a>
</div>

<div className="feature-item p-6 rounded-2xl bg-gradient-to-br from-[#2A2D3A] to-[#1E2130] border border-white/5 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/10 group">
<div className="feature-icon w-14 h-14 mb-5 rounded-xl bg-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/30 transition-all duration-300">
<svg className="w-7 h-7 text-amber-400" fill="none" viewbox="0 0 24 24">
<path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z" fill="currentColor"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Smart Themes</h3>
<p className="text-white/70 mb-4">Enjoy dynamic themes that adjust based on time of day and your personal preferences</p>
<a className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors" href="#">
              Learn more
              <svg className="w-4 h-4 ml-1" fill="none" viewbox="0 0 24 24">
<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="currentColor"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
