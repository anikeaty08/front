import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="w-full max-w-[800px] px-6 pt-24 pb-12 flex flex-col items-center text-center">

<img alt="" className="h-4 w-auto mb-6 opacity-60" src="https://biscuitcamera.com/_assets/v11/23e93e7484feeff8a7a331be435872d138acdb31.svg"/>

<h2 className="font-serif italic text-xl md:text-2xl text-[#939393] mb-4 tracking-tight">Biscuit Camera</h2>

<h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-12 max-w-[600px]">
            A camera app that cares about composition
        </h1>

<div className="w-full aspect-[4/3] md:aspect-[1.6] bg-biscuit-pink rounded-[40px] md:rounded-[48px] relative flex flex-col items-center justify-center overflow-hidden mb-16 shadow-2xl shadow-pink-900/20">

<div className="absolute top-8 flex items-center gap-2 text-white/90 text-sm">
<i className="w-4 h-4" data-lucide="hand" strokeWidth="1.5"></i>
<span>Drag to move</span>
</div>

<div className="relative w-48 h-48 md:w-56 md:h-56 flex flex-col items-center justify-center mt-[-2rem]">

<svg className="absolute inset-0 w-full h-full fill-black" viewbox="0 0 100 100">
<path d="M 50 5 C 62 5 66 12 73 17 C 82 22 92 19 95 28 C 98 37 92 44 95 53 C 98 62 90 70 83 75 C 75 80 72 91 61 93 C 50 95 44 87 35 88 C 24 89 16 83 11 73 C 6 63 12 55 9 46 C 6 37 12 28 20 22 C 28 16 33 6 44 5 Z"></path>
</svg>
<div className="relative z-10 flex flex-col items-center text-white/50 text-xs gap-2">
<i className="w-6 h-6" data-lucide="camera" strokeWidth="1.5"></i>
<span>Waiting for camera...</span>
</div>
</div>

<div className="absolute bottom-10 flex items-center gap-5">

<div className="w-6 h-6 rounded-full border-[2.5px] border-white/60"></div>

<div className="w-12 h-12 rounded-full bg-[#FFE5F0] border-4 border-white shadow-lg flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"></div>

<div className="w-6 h-6 rounded-full bg-black border-2 border-white flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="flower-2" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="max-w-[540px] text-left md:text-center space-y-6 font-serif italic text-xl md:text-2xl leading-snug text-white/90 mb-16">
<p>What if the frame mattered as much as the photo?</p>
<p>In Biscuit Camera, the frame comes first.<br/>You choose a shape, place it on the screen, and decide what belongs inside before taking the photo.</p>
<p>After capture, you can make small adjustments — change the background or slightly reposition the frame — while the composition stays intact.</p>
<p>Biscuit brings a playful, intentional approach to photography, where framing is a conscious act and the moment of capture carries meaning.</p>
</div>

<a className="bg-white text-black rounded-full px-8 py-5 flex items-center justify-center gap-3 font-semibold text-xl hover:scale-105 active:scale-95 transition-transform duration-200 mb-24 w-full md:w-auto md:min-w-[320px]" href="#">
<img alt="Apple" className="w-6 h-6" src="https://biscuitcamera.com/_assets/v11/5107372d2ee9b0383440af625cf9c303f712a095.svg"/>
            Download for iOS
        </a>

<img alt="" className="h-4 w-auto mb-16 opacity-60" src="https://biscuitcamera.com/_assets/v11/e5ea95a2877076ad8dc8ffcbb7cfa471ba717236.svg"/>

<div className="w-full flex flex-col items-center mb-32">

<div className="w-full aspect-[4/3] md:aspect-[1.5] border border-white/20 rounded-[32px] md:rounded-[40px] mb-12"></div>
<div className="w-full max-w-[540px] text-left">
<h3 className="text-3xl md:text-4xl tracking-tight mb-6">Dynamic background</h3>
<div className="space-y-6 font-serif italic text-xl md:text-2xl leading-snug text-white/80">
<p>Biscuit samples color directly from the live camera feed and uses it to shape the background around the frame as you compose. As the camera moves, the background responds in real time.</p>
<p>This happens while you are framing the image.<br/>The color you see before capture is the color that becomes part of the photo.</p>
<p>Dynamic background helps you judge contrast, balance, and mood as you shoot. It works as a compositional aid, supporting your decisions rather than altering the result afterward.</p>
</div>
</div>
</div>

<img alt="" className="h-4 w-auto mb-16 opacity-60" src="https://biscuitcamera.com/_assets/v11/ed8d9e84cd82931fe857ba7a8a565d3574748ee7.svg"/>

<div className="w-full flex flex-col items-center mb-16">

<div className="w-full aspect-[4/3] md:aspect-[1.5] border border-white/20 rounded-[32px] md:rounded-[40px] mb-12"></div>
<div className="w-full max-w-[540px] text-left">
<h3 className="text-3xl md:text-4xl tracking-tight mb-6">Shaped over time</h3>
<div className="space-y-6 font-serif italic text-xl md:text-2xl leading-snug text-white/80">
<p>Biscuit is a personal project by Daniela Muntyan, built as an ongoing experiment rather than a finished product.</p>
<p>It grows through small ideas, visual tests, and technical exploration — from custom rendering and live color sampling to alternative ways of framing an image.</p>
<p>The app is designed for curiosity and play. It treats photography as a process of observing and arranging, closer to a sketchbook than a toolbox.</p>
<p>Biscuit remains intentionally open, evolving over time as a space to explore how software can influence the way we compose and see.</p>
</div>
</div>
</div>

<a className="bg-white text-black rounded-full px-8 py-5 flex items-center justify-center gap-3 font-semibold text-xl hover:scale-105 active:scale-95 transition-transform duration-200 mb-32 w-full md:w-auto md:min-w-[320px]" href="#">
<img alt="Apple" className="w-6 h-6" src="https://biscuitcamera.com/_assets/v11/5107372d2ee9b0383440af625cf9c303f712a095.svg"/>
            Download for iOS
        </a>

<footer className="w-full border-t border-white/10 pt-8 pb-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-6 text-base text-[#939393]">
<span className="text-white">Biscuit camera</span>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Contact us</a>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
</div>
</footer>
</main>


    </>
  );
}
