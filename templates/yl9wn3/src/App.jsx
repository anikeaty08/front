import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    var ocean = document.getElementById("ocean"),
        waveWidth = 10,
        waveCount = Math.floor(ocean.offsetWidth/waveWidth),
        docFrag = document.createDocumentFragment();
    for(var i = 0; i < waveCount; i++){
      var wave = document.createElement("div");
      wave.className += " wave";
      docFrag.appendChild(wave);
      wave.style.left = i * waveWidth + "px";
      wave.style.animationDelay = (i/100) + "s";
    }
    ocean.appendChild(docFrag);
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-5xl w-full mx-auto rounded-xl shadow-2xl overflow-hidden">
<div className="flex flex-col md:flex-row">
<div className="w-full md:w-1/2 h-64 md:h-auto bg-gradient-to-b from-blue-400 to-blue-600 p-8 relative flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0" id="ocean"></div>
<div className="relative z-10">
<div className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-xs mb-4">DIGITAL PLATFORM</div>
<h3 className="text-xl font-semibold text-white mb-2">Streamline Your Workflow</h3>
<p className="text-white/80 text-sm">Powerful tools for modern teams</p>
</div>
<div className="relative z-10 mt-auto">
<div className="grid grid-cols-4 gap-2 border-t border-white/20 pt-4 mt-4">
<div className="text-center">
<div className="text-lg font-light text-white">99.9%</div>
<div className="text-xs text-white/80">Uptime</div>
</div>
<div className="text-center">
<div className="text-lg font-light text-white">24/7</div>
<div className="text-xs text-white/80">Support</div>
</div>
<div className="text-center">
<div className="text-lg font-light text-white">500+</div>
<div className="text-xs text-white/80">Integrations</div>
</div>
<div className="text-center">
<div className="text-lg font-light text-white">15k+</div>
<div className="text-xs text-white/80">Users</div>
</div>
</div>
</div>
</div>
<div className="w-full md:w-1/2 bg-white p-8 text-gray-800">
<div className="flex items-center mb-6">
<div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h2 className="text-2xl font-semibold ml-3 text-blue-800">Digital Experience</h2>
</div>
<p className="text-gray-600 mb-6">Transform your digital workflow with our intuitive platform designed for modern businesses and creators.</p>
<div className="space-y-4 mb-6">
<div className="flex items-start">
<svg className="w-5 h-5 text-blue-500 mt-0.5" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<div className="ml-3">
<h3 className="font-medium text-blue-700">AI-Powered Analytics</h3>
<p className="text-sm text-gray-500">Gain insights through real-time data visualization</p>
</div>
</div>
<div className="flex items-start">
<svg className="w-5 h-5 text-blue-500 mt-0.5" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<div className="ml-3">
<h3 className="font-medium text-blue-700">Seamless Integration</h3>
<p className="text-sm text-gray-500">Works with your existing tools and platforms</p>
</div>
</div>
<div className="flex items-start">
<svg className="w-5 h-5 text-blue-500 mt-0.5" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<div className="ml-3">
<h3 className="font-medium text-blue-700">Enterprise Security</h3>
<p className="text-sm text-gray-500">End-to-end encryption and compliance</p>
</div>
</div>
</div>
<div className="flex items-center space-x-4 mb-6">
<button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors text-sm font-medium text-white">
            Get Started
          </button>
<a className="text-blue-500 hover:text-blue-600 transition-colors text-sm" href="#">Learn more →</a>
</div>
<div className="border-t border-blue-100 pt-4">
<div className="flex justify-between text-gray-500 text-sm">
<span>Version 2.0.4</span>
<span>Updated: May 2023</span>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
