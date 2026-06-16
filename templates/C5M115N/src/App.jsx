import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#3b82f6"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.2,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#3b82f6",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="particles-js"></div>

<div className="relative z-10 max-w-5xl w-full">

<div className="text-center mb-10">
<h1 className="text-3xl font-bold text-white mb-4">Choose Your Perfect Plan</h1>
<p className="text-gray-400 max-w-2xl mx-auto">Select the package that suits your business needs. All plans include our core features with different resource allocations.</p>
</div>

<div className="grid md:grid-cols-3 gap-6 mb-12">

<div className="bg-[#151515] border border-[#232323] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
<div className="p-6">
<h3 className="text-xl font-semibold text-gray-200 mb-2">Starter</h3>
<p className="text-gray-400 text-sm mb-4">Perfect for small projects</p>
<div className="flex items-baseline mb-6">
<span className="text-3xl font-bold text-white">$12</span>
<span className="text-gray-400 ml-1">/month</span>
</div>
<ul className="space-y-3 mb-6">
<li className="flex items-center text-gray-300">
<svg className="h-5 w-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                            25 GB Storage
                        </li>
<li className="flex items-center text-gray-300">
<svg className="h-5 w-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                            Up to 5 team members
                        </li>
<li className="flex items-center text-gray-300">
<svg className="h-5 w-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                            Community support
                        </li>
<li className="flex items-center text-gray-400">
<svg className="h-5 w-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                            Advanced analytics
                        </li>
</ul>
<button className="w-full py-3 px-4 bg-[#232323] hover:bg-[#2a2a2a] text-gray-200 rounded-lg font-medium transition duration-300">Get Started</button>
</div>
</div>

<div className="bg-[#171717] border border-blue-500 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 relative">
<div className="absolute top-0 inset-x-0 bg-blue-500 text-white text-xs font-medium text-center py-1">
                    MOST POPULAR
                </div>
<div className="p-6 pt-8">
<h3 className="text-xl font-semibold text-gray-200 mb-2">Professional</h3>
<p className="text-gray-400 text-sm mb-4">Great for growing teams</p>
<div className="flex items-baseline mb-6">
<span className="text-3xl font-bold text-white">$29</span>
<span className="text-gray-400 ml-1">/month</span>
</div>
<ul className="space-y-3 mb-6">
<li className="flex items-center text-gray-300">
<svg className="h-5 w-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                            250 GB Storage
                        </li>
<li className="flex items-center text-gray-300">
<svg className="h-5 w-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                            Up to 20 team members
                        </li>
<li className="flex items-center text-gray-300">
<svg className="h-5 w-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                            Priority email support
                        </li>
<li className="flex items-center text-gray-300">
<svg className="h-5 w-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                            Advanced analytics
                        </li>
</ul>
<button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition duration-300">Choose Plan</button>
</div>
</div>

<div className="bg-[#151515] border border-[#232323] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
<div className="p-6">
<h3 className="text-xl font-semibold text-gray-200 mb-2">Business</h3>
<p className="text-gray-400 text-sm mb-4">For large organizations</p>
<div className="flex items-baseline mb-6">
<span className="text-3xl font-bold text-white">$79</span>
<span className="text-gray-400 ml-1">/month</span>
</div>
<ul className="space-y-3 mb-6">
<li className="flex items-center text-gray-300">
<svg className="h-5 w-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                            Unlimited Storage
                        </li>
<li className="flex items-center text-gray-300">
<svg className="h-5 w-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                            Unlimited team members
                        </li>
<li className="flex items-center text-gray-300">
<svg className="h-5 w-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                            24/7 dedicated support
                        </li>
<li className="flex items-center text-gray-300">
<svg className="h-5 w-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                            Advanced analytics &amp; API
                        </li>
</ul>
<button className="w-full py-3 px-4 bg-[#232323] hover:bg-[#2a2a2a] text-gray-200 rounded-lg font-medium transition duration-300">Contact Sales</button>
</div>
</div>
</div>

<div className="bg-[#151515] rounded-xl overflow-hidden shadow-2xl border border-[#232323]">

<div className="px-8 pt-8 pb-6 border-b border-[#232323]">
<div className="flex items-center justify-between">
<div>
<h2 className="text-gray-100 font-semibold text-xl">Detailed Feature Comparison</h2>
<p className="text-gray-400 mt-2">See all features side by side</p>
</div>
<span className="text-xs text-gray-500 bg-[#1a1a1a] px-3 py-1 rounded-full">Last updated: August 2023</span>
</div>
</div>

<div className="grid grid-cols-4 border-b border-[#232323]">
<div className="p-6 border-r border-[#232323]">
<p className="text-gray-400 text-xs uppercase tracking-wide font-medium">Plan Features</p>
</div>
<div className="p-6 text-center border-r border-[#232323]">
<p className="text-gray-200 font-medium text-lg">Starter</p>
<p className="text-gray-400 text-sm mt-1">$12/month</p>
</div>
<div className="p-6 text-center border-r border-[#232323] bg-[#171717]">
<p className="text-gray-200 font-medium text-lg">Professional</p>
<p className="text-blue-400 text-sm mt-1">$29/month</p>
<span className="inline-block mt-2 px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">Most Popular</span>
</div>
<div className="p-6 text-center">
<p className="text-gray-200 font-medium text-lg">Business</p>
<p className="text-gray-400 text-sm mt-1">$79/month</p>
</div>
</div>

<div className="grid grid-cols-4 border-b border-[#232323]">
<div className="p-6 border-r border-[#232323] flex items-center">
<p className="text-gray-300">Storage Capacity</p>
</div>
<div className="p-6 text-center border-r border-[#232323] flex items-center justify-center">
<p className="text-gray-300">25 GB</p>
</div>
<div className="p-6 text-center border-r border-[#232323] bg-[#171717] flex items-center justify-center">
<p className="text-gray-300">250 GB</p>
</div>
<div className="p-6 text-center flex items-center justify-center">
<p className="text-gray-300">Unlimited</p>
</div>
</div>
<div className="grid grid-cols-4 border-b border-[#232323]">
<div className="p-6 border-r border-[#232323] flex items-center">
<p className="text-gray-300">Team Members</p>
</div>
<div className="p-6 text-center border-r border-[#232323] flex items-center justify-center">
<p className="text-gray-300">Up to 5</p>
</div>
<div className="p-6 text-center border-r border-[#232323] bg-[#171717] flex items-center justify-center">
<p className="text-gray-300">Up to 20</p>
</div>
<div className="p-6 text-center flex items-center justify-center">
<p className="text-gray-300">Unlimited</p>
</div>
</div>
<div className="grid grid-cols-4 border-b border-[#232323]">
<div className="p-6 border-r border-[#232323] flex items-center">
<p className="text-gray-300">Support Level</p>
</div>
<div className="p-6 text-center border-r border-[#232323] flex items-center justify-center">
<p className="text-gray-300">Community</p>
</div>
<div className="p-6 text-center border-r border-[#232323] bg-[#171717] flex items-center justify-center">
<p className="text-gray-300">Priority Email</p>
</div>
<div className="p-6 text-center flex items-center justify-center">
<p className="text-gray-300">24/7 Dedicated</p>
</div>
</div>
<div className="grid grid-cols-4 border-b border-[#232323]">
<div className="p-6 border-r border-[#232323] flex items-center">
<p className="text-gray-300">Advanced Analytics</p>
</div>
<div className="p-6 text-center border-r border-[#232323] flex items-center justify-center">
<svg className="h-5 w-5 text-gray-500 mx-auto" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="p-6 text-center border-r border-[#232323] bg-[#171717] flex items-center justify-center">
<svg className="h-5 w-5 text-blue-400 mx-auto" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="p-6 text-center flex items-center justify-center">
<svg className="h-5 w-5 text-blue-400 mx-auto" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="grid grid-cols-4 border-b border-[#232323]">
<div className="p-6 border-r border-[#232323] flex items-center">
<p className="text-gray-300">API Access</p>
</div>
<div className="p-6 text-center border-r border-[#232323] flex items-center justify-center">
<svg className="h-5 w-5 text-gray-500 mx-auto" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="p-6 text-center border-r border-[#232323] bg-[#171717] flex items-center justify-center">
<svg className="h-5 w-5 text-blue-400 mx-auto" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="p-6 text-center flex items-center justify-center">
<svg className="h-5 w-5 text-blue-400 mx-auto" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="grid grid-cols-4 border-b border-[#232323]">
<div className="p-6 border-r border-[#232323] flex items-center">
<p className="text-gray-300">Custom Branding</p>
</div>
<div className="p-6 text-center border-r border-[#232323] flex items-center justify-center">
<svg className="h-5 w-5 text-gray-500 mx-auto" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="p-6 text-center border-r border-[#232323] bg-[#171717] flex items-center justify-center">
<svg className="h-5 w-5 text-blue-400 mx-auto" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="p-6 text-center flex items-center justify-center">
<svg className="h-5 w-5 text-blue-400 mx-auto" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="grid grid-cols-4 py-6">
<div className="p-6 border-r border-[#232323]"></div>
<div className="p-6 flex justify-center border-r border-[#232323]">
<button className="w-full px-5 py-3 bg-[#232323] text-gray-300 rounded-lg text-sm font-medium hover:bg-[#2a2a2a] transition duration-300">Get Started</button>
</div>
<div className="p-6 flex justify-center border-r border-[#232323] bg-[#171717]">
<button className="w-full px-5 py-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition duration-300">Choose Plan</button>
</div>
<div className="p-6 flex justify-center">
<button className="w-full px-5 py-3 bg-[#232323] text-gray-300 rounded-lg text-sm font-medium hover:bg-[#2a2a2a] transition duration-300">Contact Sales</button>
</div>
</div>
</div>

<div className="mt-12 text-center">
<p className="text-gray-400">Need help choosing? <a className="text-blue-400 hover:text-blue-300" href="#">Contact our team</a> or check the <a className="text-blue-400 hover:text-blue-300" href="#">FAQ</a></p>
</div>
</div>




    </>
  );
}
