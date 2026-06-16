import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    import { Gradient } from './Gradient.js';
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative w-full min-h-screen overflow-hidden">
<canvas data-transition-in="" id="gradient-canvas"></canvas>
<div className="spline-container">
<iframe frameborder="0" height="100%" src="https://my.spline.design/untitled-f680ea749fc30deeb5eff5a8b15b2f63/" width="100%"></iframe>
</div>
<header className="absolute top-0 left-0 w-full p-4 md:p-6 z-10">
<div className="content-container flex justify-between items-center">
<div className="text-xl font-[416]">NightShift</div>
<nav className="hidden md:flex space-x-8">
<a className="text-sm text-gray-300 hover:text-white" href="#">Features</a>
<a className="text-sm text-gray-300 hover:text-white" href="#">Pricing</a>
<a className="text-sm text-gray-300 hover:text-white" href="#">Docs</a>
<a className="text-sm text-gray-300 hover:text-white" href="#">About</a>
</nav>
<div className="flex items-center space-x-4">
<a className="text-sm text-gray-300 hover:text-white hidden sm:block" href="#">Sign in</a>
<a className="text-xs font-[484] px-3 py-2 md:px-4 md:py-2 bg-indigo-600 rounded-md hover:bg-indigo-700" href="#">Get Started</a>
</div>
</div>
</header>
<div className="w-full min-h-screen flex items-center z-10 relative py-20 md:py-0 px-6">
<div className="content-container">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-[416] leading-[1.1] tracking-[-0.08em] mb-6">
              Build your next
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                3D experience
              </span>
</h1>
<p className="text-lg sm:text-xl lg:text-2xl font-[396] text-gray-300 mb-8">
              Create stunning interfaces with our modern platform. Designed for developers who love immersive experiences.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="text-xs font-[484] tracking-[0.02em] px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 text-center uppercase" href="#">
                Get started
              </a>
<a className="text-xs font-[484] tracking-[0.02em] px-8 py-4 border border-gray-600 text-white rounded-lg hover:bg-white/5 transition duration-300 text-center uppercase" href="#">
                View examples
              </a>
</div>
<div className="mt-12 flex items-center space-x-4">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-slate-900" src="https://randomuser.me/api/portraits/women/20.jpg"/>
<img alt="User" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-slate-900" src="https://randomuser.me/api/portraits/men/15.jpg"/>
<img alt="User" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-slate-900" src="https://randomuser.me/api/portraits/women/10.jpg"/>
</div>
<div className="text-xs md:text-sm font-[384] text-gray-400">Joined by <span className="text-indigo-400 font-[416]">5,000+</span> developers</div>
</div>
</div>
<div className="floating backdrop-blur-sm bg-black/20 p-4 rounded-xl hidden sm:block">
<div className="bg-slate-800/70 backdrop-blur-lg border border-slate-700/50 rounded-2xl shadow-lg p-6">
<div className="flex items-center justify-between mb-4">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="text-xs text-gray-400">scene.js</div>
</div>
<div className="text-xs md:text-sm font-[384] leading-6 text-gray-300 font-mono">
<div className="mb-1"><span className="text-purple-400">import</span> { <span className="text-green-400">Scene</span> } <span className="text-purple-400">from</span> <span className="text-yellow-400">'@engine/core'</span>;</div>
<div className="mb-1"> </div>
<div className="mb-1"><span className="text-purple-400">const</span> <span className="text-blue-400">scene</span> = <span className="text-green-400">new Scene</span>({</div>
<div className="mb-1 ml-4"><span className="text-indigo-400">lighting</span>: <span className="text-yellow-400">'ambient'</span>,</div>
<div className="mb-1 ml-4"><span className="text-indigo-400">particles</span>: <span className="text-purple-400">true</span>,</div>
<div className="mb-1 ml-4"><span className="text-indigo-400">interactive</span>: <span className="text-purple-400">true</span></div>
<div className="mb-1">});</div>
<div className="mb-1"> </div>
<div><span className="text-blue-400">scene</span>.<span className="text-green-400">render</span>();</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
