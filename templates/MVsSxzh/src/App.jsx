import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#FF3B9A',
                        secondary: '#7928CA',
                        dark: '#111827',
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                }
            }
        }
    


        // Initialize Vanta.js BIRDS effect for hero 3D
        VANTA.BIRDS({
            el: "#hero-3d",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0xf5f3ff,
            color1: 0xff3b9a,
            color2: 0x7928ca,
            birdSize: 1.50,
            wingSpan: 20.00,
            speedLimit: 4.00,
            separation: 60.00,
            quantity: 3.00
        });
        
        // Initialize Vanta.js for cards
        VANTA.BIRDS({
            el: "#card-bg-1",
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0xf5f3ff,
            color1: 0xa78bfa,
            color2: 0xc084fc,
            birdSize: 1.00,
            quantity: 2.00,
            speedLimit: 2.00
        });
        
        VANTA.BIRDS({
            el: "#card-bg-2",
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0xf0f9ff,
            color1: 0x60a5fa,
            color2: 0x93c5fd,
            birdSize: 1.00,
            quantity: 2.00,
            speedLimit: 2.00
        });
        
        VANTA.BIRDS({
            el: "#card-bg-3",
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0xfdf2f8,
            color1: 0xec4899,
            color2: 0xf472b6,
            birdSize: 1.00,
            quantity: 2.00,
            speedLimit: 2.00
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<header className="flex items-center justify-between py-6">
<div className="flex items-center">
<div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
<div className="h-2 w-2 rounded-full bg-white"></div>
</div>
<span className="ml-2 text-xl font-semibold">Serendipity</span>
</div>
<div className="flex items-center space-x-8">
<nav className="hidden md:flex space-x-8">
<a className="text-gray-800 hover:text-primary font-medium" href="#">Home</a>
<a className="text-gray-800 hover:text-primary font-medium" href="#">Browse</a>
<a className="text-gray-800 hover:text-primary font-medium" href="#">Updates</a>
<a className="text-gray-800 hover:text-primary font-medium" href="#">Pricing</a>
</nav>
<button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition duration-300">
                    Sign up
                </button>
</div>
</header>

<div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
<div className="pt-10">
<h1 className="text-5xl md:text-6xl font-bold leading-tight">
<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Imagine</span>
<span className="text-gray-800">with</span>
<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Serendipity</span>
</h1>
<p className="mt-6 text-lg text-gray-700 leading-relaxed">
                    Join our community of creators on Serendipity. Collaborate on 
                    storytelling, bring your text descriptions to life, and explore 
                    the possibilities of AI-generated imagery in a supportive environment.
                </p>
<button className="mt-8 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                    Generate Images
                </button>
</div>
<div className="relative">

<div className="rounded-2xl overflow-hidden h-[500px]" id="hero-3d"></div>

<div className="absolute top-10 right-0 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 w-64">
<h3 className="font-semibold text-lg mb-4">Updates</h3>
<div className="space-y-4">
<div className="flex items-start">
<div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="ml-3">
<p className="text-sm font-medium">Upload Image</p>
<p className="text-xs text-gray-500">New Feature – April 21, 2023</p>
</div>
</div>
<div className="flex items-start">
<div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="ml-3">
<p className="text-sm font-medium">Permutation</p>
<p className="text-xs text-gray-500">New Feature – April 19, 2023</p>
</div>
</div>
<div className="flex items-start">
<div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="ml-3">
<p className="text-sm font-medium">Status Page</p>
<p className="text-xs text-gray-500">New Feature – April 16, 2023</p>
</div>
</div>
</div>
<button className="mt-6 w-full bg-white hover:bg-gray-50 text-gray-800 font-medium py-2 px-4 rounded-lg border border-gray-200 flex items-center justify-center">
                        Join Discord
                        <svg className="h-4 w-4 ml-2" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="mt-24 mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white/70 rounded-xl p-6 shadow-sm relative overflow-hidden">
<div className="absolute inset-0 -z-10" id="card-bg-1"></div>
<div className="relative z-10">
<h3 className="text-lg font-bold">Using Discord</h3>
<p className="text-sm font-medium text-gray-700 mt-1">Mastering the Art of Prompt Writing</p>
<p className="text-sm text-gray-600 mt-3">Learn how to craft clear, effective prompts and use reference images for better visual representation in your creations.</p>
<button className="mt-4 bg-white hover:bg-gray-50 text-gray-800 font-medium py-2 px-4 rounded-lg border border-gray-200 shadow-sm">
                            Join Discord
                        </button>
</div>
</div>

<div className="bg-white/70 rounded-xl p-6 shadow-sm relative overflow-hidden">
<div className="absolute inset-0 -z-10" id="card-bg-2"></div>
<div className="relative z-10">
<h3 className="text-lg font-bold">Getting Started</h3>
<p className="text-sm font-medium text-gray-700 mt-1">Streamlining Collaborative Workflows</p>
<p className="text-sm text-gray-600 mt-3">Discover how to use our platform to easily generate designs and artwork for your projects and collaborate with others.</p>
<button className="mt-4 bg-white hover:bg-gray-50 text-gray-800 font-medium py-2 px-4 rounded-lg border border-gray-200 shadow-sm">
                            Explore Now
                        </button>
</div>
</div>

<div className="bg-white/70 rounded-xl p-6 shadow-sm relative overflow-hidden">
<div className="absolute inset-0 -z-10" id="card-bg-3"></div>
<div className="relative z-10">
<h3 className="text-lg font-bold">User Guide</h3>
<p className="text-sm font-medium text-gray-700 mt-1">Mastering the Art of Prompt Writing</p>
<p className="text-sm text-gray-600 mt-3">Learn about key concepts like versions, parameters, and best practices to get the most out of our platform.</p>
<button className="mt-4 bg-white hover:bg-gray-50 text-gray-800 font-medium py-2 px-4 rounded-lg border border-gray-200 shadow-sm">
                            View Documents
                        </button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
