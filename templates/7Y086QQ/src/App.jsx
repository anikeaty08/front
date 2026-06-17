import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: {
                            DEFAULT: '#f97316',
                            hover: '#ea580c',
                            light: '#ffedd5',
                            dark: '#c2410c'
                        },
                        border: "hsl(var(--border))",
                        input: "hsl(var(--input))",
                        ring: "hsl(var(--ring))",
                        background: "hsl(var(--background))",
                        foreground: "hsl(var(--foreground))",
                        secondary: {
                            DEFAULT: "hsl(var(--secondary))",
                            foreground: "hsl(var(--secondary-foreground))",
                        },
                        destructive: {
                            DEFAULT: "hsl(var(--destructive))",
                            foreground: "hsl(var(--destructive-foreground))",
                        },
                        muted: {
                            DEFAULT: "hsl(var(--muted))",
                            foreground: "hsl(var(--muted-foreground))",
                        },
                        accent: {
                            DEFAULT: "hsl(var(--accent))",
                            foreground: "hsl(var(--accent-foreground))",
                        },
                        popover: {
                            DEFAULT: "hsl(var(--popover))",
                            foreground: "hsl(var(--popover-foreground))",
                        },
                        card: {
                            DEFAULT: "hsl(var(--card))",
                            foreground: "hsl(var(--card-foreground))",
                        },
                    },
                    borderRadius: {
                        lg: "var(--radius)",
                        md: "calc(var(--radius) - 2px)",
                        sm: "calc(var(--radius) - 4px)",
                    },
                }
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="flex h-full">

<div className="w-16 lg:w-64 bg-gray-900 text-white flex flex-col">

<div className="p-4 flex items-center justify-center lg:justify-start">
<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
<span className="text-xl font-bold text-white">INT</span>
</div>
<span className="ml-2 text-xl font-bold hidden lg:block">INTAi</span>
</div>

<div className="flex-1 mt-8">
<div className="px-4 py-3 bg-primary flex items-center">
<i className="fas fa-video text-xl"></i>
<span className="ml-3 hidden lg:block">Live Feed Monitoring</span>
</div>
<div className="px-4 py-3 hover:bg-gray-800 flex items-center cursor-pointer">
<i className="fas fa-user-plus text-xl"></i>
<span className="ml-3 hidden lg:block">Enrollment</span>
</div>
<div className="px-4 py-3 hover:bg-gray-800 flex items-center cursor-pointer">
<i className="fas fa-database text-xl"></i>
<span className="ml-3 hidden lg:block">Database</span>
</div>
<div className="px-4 py-3 hover:bg-gray-800 flex items-center cursor-pointer">
<i className="fas fa-cog text-xl"></i>
<span className="ml-3 hidden lg:block">Settings</span>
</div>
</div>

<div className="p-4 border-t border-gray-700 hidden lg:block">
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-gray-500 overflow-hidden">
<img alt="Admin avatar" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
</div>
<div className="ml-2">
<p className="text-sm font-medium">Security Admin</p>
<p className="text-xs text-gray-400">Online</p>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col overflow-hidden">

<div className="bg-white shadow-md p-4 flex justify-between items-center">
<div className="flex items-center">
<h1 className="text-xl font-bold">Live Feed Monitoring</h1>
<div className="ml-4 flex items-center">
<span className="h-3 w-3 bg-green-500 rounded-full"></span>
<span className="ml-1 text-sm text-gray-600">System Online</span>
</div>
</div>
<div className="flex items-center">
<div className="mr-4 flex items-center">
<span className="text-sm text-gray-600 mr-2">Logged in as:</span>
<span className="font-medium">Admin</span>
</div>
<button className="p-2 rounded-full hover:bg-gray-200">
<i className="fas fa-sign-out-alt"></i>
</button>
</div>
</div>

<div className="flex-1 flex flex-col lg:flex-row p-4 gap-4 overflow-auto">

<div className="flex-1 shadcn-card">
<div className="p-3 border-b flex justify-between items-center">
<span className="font-medium">Main Entrance (Camera ID: CAM-001)</span>
<div className="flex items-center text-sm">
<span className="inline-block h-2 w-2 bg-green-500 rounded-full mr-1"></span>
<span>Live</span>
</div>
</div>

<div className="relative flex-1 bg-gray-200 overflow-hidden">

<img alt="Office" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" />

<div className="absolute left-10 top-20">
<img alt="Known person" className="w-32 h-40 object-cover object-top" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>

<div className="absolute inset-0 border-2 border-green-500">
<div className="absolute -top-7 left-0 bg-green-500 text-white px-2 py-0.5 text-sm">
                                    John Smith
                                </div>
</div>
</div>

<div className="absolute right-20 top-30">
<img alt="Unknown person" className="w-32 h-40 object-cover object-top" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>

<div className="absolute inset-0 border-2 border-red-500">
<div className="absolute -top-7 left-0 bg-red-500 text-white px-2 py-0.5 text-sm">
                                    Unknown
                                </div>
</div>
</div>

<div className="absolute right-5 top-5 shadcn-card p-3 w-56">
<div className="font-medium text-red-600 mb-2 flex items-center">
<i className="fas fa-exclamation-triangle mr-2"></i>
                                Unknown Person Detected
                            </div>
<p className="text-xs text-gray-600 mb-2">Detected at 14:32:45</p>
<div className="flex gap-2">
<button className="shadcn-button-primary flex-1 text-xs">
                                    Enroll Now
                                </button>
<button className="shadcn-button-secondary flex-1 text-xs">
                                    Flag for Review
                                </button>
</div>
</div>
</img></div>

<div className="p-3 border-t flex justify-between items-center">
<div className="flex gap-2">
<button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
<i className="fas fa-pause"></i>
</button>
<button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
<i className="fas fa-search-plus"></i>
</button>
<button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
<i className="fas fa-camera"></i>
</button>
</div>
<div>
<button className="shadcn-button-primary text-sm">
                                Quick Enroll
                            </button>
</div>
</div>
</div>

<div className="flex-1 shadcn-card">
<div className="p-3 border-b flex justify-between items-center">
<span className="font-medium">Side Entrance (Camera ID: CAM-002)</span>
<div className="flex items-center text-sm">
<span className="inline-block h-2 w-2 bg-green-500 rounded-full mr-1"></span>
<span>Live</span>
</div>
</div>

<div className="relative flex-1 bg-gray-200 overflow-hidden">

<img alt="Office Lobby" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"/>

<div className="absolute left-20 top-30">
<img alt="Known person" className="w-32 h-40 object-cover object-top" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>

<div className="absolute inset-0 border-2 border-green-500">
<div className="absolute -top-7 left-0 bg-green-500 text-white px-2 py-0.5 text-sm">
                                    Sarah Johnson
                                </div>
</div>
</div>

<div className="absolute right-20 top-50">
<img alt="Partially visible person" className="w-32 h-40 object-cover object-top opacity-70" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>

<div className="absolute inset-0 border-2 border-yellow-500">
<div className="absolute -top-7 left-0 bg-yellow-500 text-white px-2 py-0.5 text-sm">
                                    Partially Visible
                                </div>
</div>
</div>
</div>

<div className="p-3 border-t flex justify-between items-center">
<div className="flex gap-2">
<button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
<i className="fas fa-pause"></i>
</button>
<button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
<i className="fas fa-search-plus"></i>
</button>
<button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
<i className="fas fa-camera"></i>
</button>
</div>
<div>
<button className="shadcn-button-primary text-sm">
                                Quick Enroll
                            </button>
</div>
</div>
</div>
</div>

<div className="h-52 shadcn-card m-4 mt-0 flex flex-col">
<div className="p-3 border-b flex justify-between items-center">
<span className="font-medium">Event Log</span>
<button className="text-xs text-primary hover:text-primary-hover">Export Log</button>
</div>
<div className="flex-1 overflow-y-auto p-3">
<div className="flex items-start mb-2">
<div className="text-xs text-gray-500 w-20">14:35:22</div>
<div className="flex-1">
<span className="bg-green-100 text-green-800 text-xs px-1 py-0.5 rounded">Recognized</span>
<span className="ml-1 text-sm">Sarah Johnson identified at Camera 2</span>
</div>
</div>
<div className="flex items-start mb-2">
<div className="text-xs text-gray-500 w-20">14:32:45</div>
<div className="flex-1">
<span className="bg-red-100 text-red-800 text-xs px-1 py-0.5 rounded">Unknown</span>
<span className="ml-1 text-sm">Unidentified person at Camera 1</span>
</div>
</div>
<div className="flex items-start mb-2">
<div className="text-xs text-gray-500 w-20">14:30:18</div>
<div className="flex-1">
<span className="bg-green-100 text-green-800 text-xs px-1 py-0.5 rounded">Recognized</span>
<span className="ml-1 text-sm">John Smith identified at Camera 1</span>
</div>
</div>
<div className="flex items-start mb-2">
<div className="text-xs text-gray-500 w-20">14:28:55</div>
<div className="flex-1">
<span className="bg-yellow-100 text-yellow-800 text-xs px-1 py-0.5 rounded">Warning</span>
<span className="ml-1 text-sm">Partially visible face at Camera 2</span>
</div>
</div>
<div className="flex items-start mb-2">
<div className="text-xs text-gray-500 w-20">14:25:30</div>
<div className="flex-1">
<span className="bg-primary-light text-primary-dark text-xs px-1 py-0.5 rounded">System</span>
<span className="ml-1 text-sm">Recognition service initialized</span>
</div>
</div>
</div>
</div>

<div className="bg-gray-900 text-white px-4 py-2 flex justify-between items-center text-xs">
<div>INTAi Security System v1.0.2</div>
<div className="flex items-center gap-4">
<div className="flex items-center">
<i className="fas fa-signal mr-1"></i>
<span>Network: Strong</span>
</div>
<div className="flex items-center">
<i className="fas fa-server mr-1"></i>
<span>AI Engine: Running</span>
</div>
<div className="flex items-center">
<i className="fas fa-clock mr-1"></i>
<span>14:35:58 - 04/11/2023</span>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
