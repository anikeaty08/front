import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'aura-dark': '#0f0f12',
            'aura-card': '#1b1b1f',
            'aura-border': '#26262b',
            'aura-text': '#9b9ba3',
            'aura-title': '#e5e5e5',
            'aura-accent': '#6366f1',
          },
          fontFamily: {
            'inter-tight': ['"Inter Tight"', 'sans-serif'],
          }
        }
      }
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="border-b border-aura-border">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16">
<div className="flex items-center">
<svg className="h-8 w-8" fill="none" viewbox="0 0 100 100">
<rect fill="#6366f1" height="100" rx="20" width="100"></rect>
<path d="M30 50H70" stroke="white" strokeLinecap="round" strokeWidth="8"></path>
<path d="M30 35H70" stroke="white" strokeLinecap="round" strokeWidth="8"></path>
<path d="M30 65H50" stroke="white" strokeLinecap="round" strokeWidth="8"></path>
</svg>
<span className="ml-2 text-xl font-inter-tight font-medium text-aura-title">Aura</span>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm hover:text-aura-title transition-colors" href="#">Features</a>
<a className="text-sm hover:text-aura-title transition-colors" href="#">Solutions</a>
<a className="text-sm hover:text-aura-title transition-colors" href="#">Customers</a>
<a className="text-sm hover:text-aura-title transition-colors" href="#">Pricing</a>
<a className="text-sm hover:text-aura-title transition-colors" href="#">Resources</a>
</div>
<div className="flex items-center">
<button className="bg-aura-accent hover:bg-opacity-90 text-white px-4 py-2 rounded-md text-sm font-medium">
            Sign Up
          </button>
</div>
</div>
</div>
</nav>

<div className="relative overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(#2a2a33_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>

<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 relative z-10">
<div className="text-center max-w-3xl mx-auto">
<h1 className="text-4xl sm:text-5xl md:text-6xl font-inter-tight font-medium text-aura-title mb-6 leading-tight">
          Build better products with Aura
        </h1>
<p className="text-xl mb-10 text-aura-text leading-relaxed">
          The modern platform for teams to plan, collaborate, and ship amazing products that customers love.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-aura-accent hover:bg-opacity-90 text-white px-6 py-3 rounded-md text-sm font-medium transition-all">
            Start for free
          </button>
<button className="border border-aura-border hover:border-aura-text text-aura-title px-6 py-3 rounded-md text-sm font-medium transition-all">
            Schedule demo
          </button>
</div>
</div>

<div className="mt-16 relative">
<div className="absolute inset-0 bg-gradient-to-t from-aura-dark to-transparent h-20 -bottom-1 z-10"></div>
<div className="bg-aura-card border border-aura-border rounded-xl overflow-hidden shadow-2xl">
<div className="flex items-center border-b border-aura-border p-4">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="ml-4 flex space-x-4">
<div className="h-6 w-24 bg-aura-border rounded-md"></div>
<div className="h-6 w-32 bg-aura-border rounded-md"></div>
<div className="h-6 w-20 bg-aura-border rounded-md"></div>
</div>
</div>
<div className="p-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="col-span-2">
<div className="h-8 w-48 bg-aura-border rounded-md mb-4"></div>
<div className="space-y-3">
<div className="h-4 w-full bg-aura-border rounded-md"></div>
<div className="h-4 w-5/6 bg-aura-border rounded-md"></div>
<div className="h-4 w-4/6 bg-aura-border rounded-md"></div>
</div>
<div className="mt-6 grid grid-cols-2 gap-3">
<div className="h-20 bg-aura-border bg-opacity-50 rounded-md"></div>
<div className="h-20 bg-aura-border bg-opacity-50 rounded-md"></div>
<div className="h-20 bg-aura-border bg-opacity-50 rounded-md"></div>
<div className="h-20 bg-aura-border bg-opacity-50 rounded-md"></div>
</div>
</div>
<div className="col-span-1">
<div className="h-8 w-32 bg-aura-border rounded-md mb-4"></div>
<div className="space-y-2">
<div className="h-12 bg-aura-border bg-opacity-50 rounded-md"></div>
<div className="h-12 bg-aura-border bg-opacity-50 rounded-md"></div>
<div className="h-12 bg-aura-border bg-opacity-50 rounded-md"></div>
<div className="h-12 bg-aura-border bg-opacity-50 rounded-md"></div>
</div>
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
