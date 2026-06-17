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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons({
          strokeWidth: 1.5
      });
    
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
      

<header className="sticky top-0 z-50 bg-[#000000] border-b border-[#2e3135]/50">
<div className="flex items-center h-16 px-6 max-w-7xl mx-auto gap-8">
<a className="flex items-center gap-2 text-white transition-opacity hover:opacity-80" href="#">
<svg fill="none" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L22 20H2L12 2Z" fill="currentColor"></path>
</svg>
<span className="font-medium tracking-tight text-lg">Expo</span>
</a>
<nav className="hidden md:flex items-center gap-2">
<a className="px-3 py-1.5 text-sm font-normal text-[#edeef0] rounded-full hover:bg-[#212225] transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]" href="#">
            Docs
          </a>
<button className="flex items-center gap-1 px-3 py-1.5 text-sm font-normal text-[#edeef0] bg-[#212225] rounded-full hover:bg-[#2e3135] transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]">
            Product
            <i className="w-4 h-4 text-[#b0b4ba]" data-lucide="chevron-down"></i>
</button>
<button className="flex items-center gap-1 px-3 py-1.5 text-sm font-normal text-[#edeef0] rounded-full hover:bg-[#212225] transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]">
            Solutions
            <i className="w-4 h-4 text-[#b0b4ba]" data-lucide="chevron-down"></i>
</button>
<a className="px-3 py-1.5 text-sm font-normal text-[#edeef0] rounded-full hover:bg-[#212225] transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]" href="#">
            Enterprise
          </a>
<a className="px-3 py-1.5 text-sm font-normal text-[#edeef0] rounded-full hover:bg-[#212225] transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]" href="#">
            Pricing
          </a>
<a className="px-3 py-1.5 text-sm font-normal text-[#edeef0] rounded-full hover:bg-[#212225] transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]" href="#">
            Blog
          </a>
</nav>
<button className="ml-auto md:hidden text-[#edeef0]">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</header>
<main>

<section className="pt-24 md:pt-32 pb-16 px-6 text-center max-w-4xl mx-auto">
<h1 className="text-6xl md:text-7xl font-medium tracking-tighter text-[#edeef0] leading-[1.1]">
          Expo Orbit
        </h1>
<p className="mt-6 text-lg text-[#b0b4ba] max-w-2xl mx-auto">
          Manage simulators and accelerate your workflow with instant app
          launches.
        </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#ffffff] text-[#111113] px-6 h-12 rounded-full text-base font-normal hover:bg-[#e6e6e6] transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
            Download for macOS
            <i className="w-4 h-4" data-lucide="download"></i>
</button>
<button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#212225] text-[#ffffff] px-6 h-12 rounded-full text-base font-normal hover:bg-[#2e3135] transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
            All releases
            <i className="w-4 h-4 text-[#b0b4ba]" data-lucide="arrow-up-right"></i>
</button>
</div>
</section>

<section className="px-6 pb-24 max-w-[1200px] mx-auto relative hidden md:block">
<div className="w-full aspect-[16/9] rounded-[24px] bg-[radial-gradient(ellipse_at_bottom_left,_#07c0cb_0%,_#0b67af_40%,_#111113_100%)] overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-[#363a3f]/50 flex items-end justify-center">

<div className="w-[300px] h-[550px] bg-white rounded-t-[50px] border-[14px] border-b-0 border-[#111113] shadow-2xl relative translate-y-12 flex flex-col items-center justify-center">
<div className="absolute top-3 w-28 h-7 bg-[#111113] rounded-full"></div>
<div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-[#07c0cb] to-[#1e92c4] flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.15)] mb-8">
<svg fill="none" height="60" viewbox="0 0 24 24" width="60" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="8" stroke="white" strokeWidth="2"></circle>
<path d="M2 12C2 12 6 16 12 16C18 16 22 12 22 12" stroke="white" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-3xl font-medium tracking-tight text-[#111113]">
              Hello world
            </h3>
</div>

<div className="absolute right-16 top-12 w-[340px] bg-[#1e1e20]/95 backdrop-blur-xl rounded-[16px] shadow-[0_15px_25px_rgba(0,0,0,0.5)] border border-[#363a3f]/80 overflow-hidden flex flex-col font-sans">
<div className="px-4 py-3 border-b border-[#363a3f]/50 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-[#2a2a2d] flex items-center justify-center">
<svg className="text-[#edeef0]" fill="none" height="20" stroke="currentColor" viewbox="0 0 24 24" width="20">
<rect height="20" rx="2" strokeWidth="1.5" width="14" x="5" y="2"></rect>
</svg>
</div>
<div>
<div className="text-sm font-medium text-[#edeef0]">
                    iPhone 16 Pro
                  </div>
<div className="text-xs text-[#b0b4ba]">iOS 26.0</div>
</div>
</div>
<div className="flex items-center gap-2 text-[#b0b4ba]">
<i className="w-4 h-4 hover:text-white cursor-pointer" data-lucide="home"></i>
<i className="w-4 h-4 hover:text-white cursor-pointer" data-lucide="rotate-ccw"></i>
<i className="w-4 h-4 hover:text-white cursor-pointer" data-lucide="maximize"></i>
</div>
</div>
<div className="p-2 space-y-1 overflow-y-auto max-h-[300px] text-sm">
<div className="px-2 py-1.5 text-xs text-[#777b84] font-medium mt-1">
                Builds
              </div>
<div className="flex items-center gap-3 px-2 py-2 hover:bg-[#2e3135] rounded-md cursor-pointer text-[#edeef0]">
<i className="w-4 h-4 text-[#b0b4ba]" data-lucide="cloud"></i>
                Select build from EAS...
              </div>
<div className="flex items-center gap-3 px-2 py-2 hover:bg-[#2e3135] rounded-md cursor-pointer text-[#edeef0]">
<i className="w-4 h-4 text-[#b0b4ba]" data-lucide="folder"></i>
                Select build from local file...
              </div>
<div className="px-2 py-1.5 text-xs text-[#777b84] font-medium mt-2 flex justify-between">
<span>Projects</span>
<span className="text-[#edeef0] cursor-pointer hover:underline">
                  See all
                </span>
</div>
<div className="flex items-center gap-3 px-2 py-2 bg-[#2e3135] rounded-md cursor-pointer">
<div className="w-6 h-6 bg-white rounded flex items-center justify-center">
<svg fill="black" height="12" viewbox="0 0 24 24" width="12">
<path d="M12 2L22 20H2L12 2Z"></path>
</svg>
</div>
<div>
<div className="text-[#edeef0] font-medium leading-tight">
                    Expo APIs
                  </div>
<div className="text-xs text-[#b0b4ba] font-mono leading-tight">
                    native-component-list
                  </div>
</div>
</div>
<div className="px-2 py-1.5 text-xs text-[#777b84] font-medium mt-2">
                iOS
              </div>
<div className="flex items-center justify-between px-2 py-2 hover:bg-[#2e3135] rounded-md cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded flex items-center justify-center bg-[#0b67af] text-white">
<i className="w-3 h-3" data-lucide="smartphone"></i>
</div>
<div>
<div className="text-[#edeef0] group-hover:text-white leading-tight">
                      iPhone 16 Pro
                    </div>
<div className="text-xs text-[#b0b4ba] leading-tight">
                      Simulator • 18.0
                    </div>
</div>
</div>
<div className="text-xs text-[#777b84] flex items-center gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-[#3dd68c]"></div>
                  Running
                </div>
</div>
</div>
<div className="p-2 border-t border-[#363a3f]/50 text-sm">
<div className="flex items-center justify-between px-2 py-1.5 hover:bg-[#2e3135] rounded-md cursor-pointer text-[#edeef0]">
<span>Settings...</span>
</div>
<div className="flex items-center justify-between px-2 py-1.5 hover:bg-[#2e3135] rounded-md cursor-pointer text-[#edeef0]">
<span>Quit</span>
<span className="text-xs text-[#777b84] font-mono">⌘ Q</span>
</div>
</div>
</div>

</div>
</section>

<section className="py-24 px-6 max-w-4xl mx-auto">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-center text-[#edeef0] mb-16">
          Features
        </h2>
<div className="flex flex-col gap-4">

<div className="bg-[#212225] rounded-[24px] p-8 md:p-10 flex flex-col sm:flex-row items-start gap-6 hover:bg-[#272a2d] transition-colors duration-150 shadow-[0_1px_3px_rgba(0,0,0,0.3)] border border-[#363a3f]">
<div className="flex-shrink-0 text-[#edeef0] mt-1">
<i className="w-8 h-8" data-lucide="smartphone" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-[#edeef0]">
                Instant app launches
              </h3>
<p className="mt-2 text-lg text-[#b0b4ba] leading-[1.5]">
                Install and launch apps from local files using file explorer or
                drag and drop a file into the app. Orbit supports any Android
                .apk, iOS Simulator compatible .app (on macOS), or ad hoc signed
                apps. Bring your Expo Snack projects to the next level by
                launching a simulator in one click.
              </p>
</div>
</div>

<div className="bg-[#212225] rounded-[24px] p-8 md:p-10 flex flex-col sm:flex-row items-start gap-6 hover:bg-[#272a2d] transition-colors duration-150 shadow-[0_1px_3px_rgba(0,0,0,0.3)] border border-[#363a3f]">
<div className="flex-shrink-0 text-[#edeef0] mt-1">
<i className="w-8 h-8" data-lucide="monitor-play" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-[#edeef0]">
                Integrated with Expo Services (EAS)
              </h3>
<p className="mt-2 text-lg text-[#b0b4ba] leading-[1.5]">
                Install and launch builds from EAS to your simulators and real
                devices in one click.
              </p>
</div>
</div>

<div className="bg-[#212225] rounded-[24px] p-8 md:p-10 flex flex-col sm:flex-row items-start gap-6 hover:bg-[#272a2d] transition-colors duration-150 shadow-[0_1px_3px_rgba(0,0,0,0.3)] border border-[#363a3f]">
<div className="flex-shrink-0 text-[#edeef0] mt-1">
<i className="w-8 h-8" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-[#edeef0]">
                Updates
              </h3>
<p className="mt-2 text-lg text-[#b0b4ba] leading-[1.5]">
                Install EAS updates on simulators and real Android devices in
                one click.
              </p>
</div>
</div>

<div className="bg-[#212225] rounded-[24px] p-8 md:p-10 flex flex-col sm:flex-row items-start gap-6 hover:bg-[#272a2d] transition-colors duration-150 shadow-[0_1px_3px_rgba(0,0,0,0.3)] border border-[#363a3f]">
<div className="flex-shrink-0 text-[#edeef0] mt-1">
<i className="w-8 h-8" data-lucide="layout-grid" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-[#edeef0]">
                Multi-simulator
              </h3>
<p className="mt-2 text-lg text-[#b0b4ba] leading-[1.5]">
                List and launch simulators, including running Android emulators
                without audio.
              </p>
</div>
</div>

<div className="bg-[#212225] rounded-[24px] p-8 md:p-10 flex flex-col sm:flex-row items-start gap-6 hover:bg-[#272a2d] transition-colors duration-150 shadow-[0_1px_3px_rgba(0,0,0,0.3)] border border-[#363a3f]">
<div className="flex-shrink-0 text-[#edeef0] mt-1">
<i className="w-8 h-8" data-lucide="pin" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-[#edeef0]">
                Pin projects
              </h3>
<p className="mt-2 text-lg text-[#b0b4ba] leading-[1.5]">
                See pinned projects from your Expo dashboard and quickly launch
                your latest builds.
              </p>
</div>
</div>
</div>
<div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#ffffff] text-[#111113] px-6 h-12 rounded-full text-base font-normal hover:bg-[#e6e6e6] transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
            Documentation
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#212225] text-[#ffffff] px-6 h-12 rounded-full text-base font-normal hover:bg-[#2e3135] transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
            Releases
            <i className="w-4 h-4 text-[#b0b4ba]" data-lucide="arrow-up-right"></i>
</button>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="relative w-full rounded-[32px] p-12 md:p-24 overflow-hidden text-center flex flex-col items-center shadow-[0_20px_40px_rgba(0,0,0,0.5)] bg-[radial-gradient(ellipse_at_center,_#4b50b2_0%,_#0b67af_40%,_#111113_100%)] border border-[#363a3f]/30">
<div className="relative z-10 max-w-3xl">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-[#edeef0]">
              Contribute
            </h2>
<p className="mt-6 text-lg text-[#edeef0] leading-[1.5]">
              Orbit is an open source application built using React Native and
              Electron. Try it out, explore its capabilities, browse the code,
              share your feedback, report issues, or make a Pull Request.
            </p>
<button className="mt-10 flex items-center justify-center gap-2 bg-[#ffffff] text-[#111113] px-8 h-12 rounded-full text-base font-normal hover:bg-[#e6e6e6] transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_1px_3px_rgba(0,0,0,0.3)] mx-auto">
              Orbit on GitHub
              <i className="w-5 h-5" data-lucide="github"></i>
</button>
</div>
</div>
</section>
</main>

<footer className="bg-[#000000] border-t border-[#2e3135] pt-20 pb-12 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-6 gap-x-8 gap-y-12">

<div className="col-span-2 flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-[14px] bg-[#111113] border border-[#363a3f] flex items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
<svg className="text-white" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L22 20H2L12 2Z" fill="currentColor"></path>
</svg>
</div>
</div>
<div className="mt-16">
<div className="flex items-center gap-2 mb-3">
<div className="w-2 h-2 bg-[#476cff]"></div>
<span className="text-xs font-mono text-[#b0b4ba] tracking-wider">
                  NEWSLETTER
                </span>
</div>
<p className="text-sm text-[#edeef0] mb-4">
                Stay in touch with all things expo
              </p>
<button className="bg-[#007aff] text-white px-5 h-9 rounded-full text-sm font-normal hover:bg-[#0066cc] transition-colors duration-150">
                Subscribe
              </button>
</div>
</div>

<div>
<h4 className="text-sm font-medium text-[#edeef0] mb-5">Product</h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  Star us on GitHub
                </a>
</li>
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  Expo CLI on GitHub
                </a>
</li>
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  Expo Services (EAS)
                </a>
</li>
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  EAS CLI on GitHub
                </a>
</li>
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  Expo Go
                </a>
</li>
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  Expo Orbit
                </a>
</li>
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  Snack
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-[#edeef0] mb-5">Resources</h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  Documentation
                </a>
</li>
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  Blog
                </a>
</li>
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  Changelog
                </a>
</li>
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  Support
                </a>
</li>
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  Trust Center
                </a>
</li>
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  Join Discord
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-[#edeef0] mb-5">Solutions</h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  Enterprise
                </a>
</li>
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  Startup
                </a>
</li>
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  Solo devs
                </a>
</li>
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  React web devs
                </a>
</li>
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  E-commerce
                </a>
</li>
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  Crypto
                </a>
</li>
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  Finserv
                </a>
</li>
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  QSR
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-[#edeef0] mb-5">Company</h4>
<ul className="space-y-3 mb-12">
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  Home
                </a>
</li>
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  Pricing
                </a>
</li>
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  Customers
                </a>
</li>
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  Consultants
                </a>
</li>
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  About
                </a>
</li>
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  Branding
                </a>
</li>
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  Careers
                </a>
</li>
</ul>
<h4 className="text-sm font-medium text-[#edeef0] mb-5">Legal</h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  Terms of service
                </a>
</li>
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  Acceptable use policy
                </a>
</li>
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  Privacy policy
                </a>
</li>
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  Privacy explained
                </a>
</li>
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  Cookie policy
                </a>
</li>
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  Security &amp; Compliance
                </a>
</li>
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  Enterprise trust
                </a>
</li>
<li>
<a className="text-sm text-[#b0b4ba] hover:text-[#edeef0] transition-colors" href="#">
                  Community guidelines
                </a>
</li>
</ul>
</div>
</div>

<div className="mt-24 pt-8 border-t border-[#2e3135] max-md:border-t-0 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-col md:flex-row items-center gap-6 text-sm text-[#b0b4ba]">
<span>© 2026 650 Industries, Inc.</span>
<a className="flex items-center gap-2 hover:text-[#edeef0] transition-colors" href="#">
<div className="w-2 h-2 rounded-full bg-[#3dd68c]"></div>
<span className="text-[#3dd68c] font-medium">
                All Systems Operational
              </span>
<i className="w-3.5 h-3.5 text-[#3dd68c]" data-lucide="arrow-up-right"></i>
</a>
<a className="flex items-center gap-2 hover:text-[#edeef0] transition-colors" href="#">
<svg className="text-blue-500" fill="none" height="12" viewbox="0 0 40 20" width="24">
<rect fill="#212225" height="20" rx="10" width="40"></rect>
<rect fill="currentColor" height="16" rx="8" width="16" x="2" y="2"></rect>
<path d="M28 10L32 14M32 10L28 14" stroke="white" strokeLinecap="round" strokeWidth="2"></path>
</svg>
              Your Privacy Choices
            </a>
</div>
<div className="flex items-center gap-4 text-[#b0b4ba]">
<a className="hover:text-[#edeef0] transition-colors" href="#">
<i className="w-5 h-5" data-lucide="github"></i>
</a>
<a className="hover:text-[#edeef0] transition-colors" href="#">
<svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18">
<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
</svg>
</a>
<a className="hover:text-[#edeef0] transition-colors" href="#">
<svg fill="currentColor" height="20" viewbox="0 0 24 24" width="20">
<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"></path>
</svg>
</a>
<a className="hover:text-[#edeef0] transition-colors" href="#">
<svg fill="currentColor" height="20" viewbox="0 0 24 24" width="20">
<path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5zM17.5 14.5c-1.2 1.2-2.8 1.5-4.5 1.5-1.2 0-2.5-.2-3.5-.8-1-.5-1.8-1.5-2.2-2.5-.2-.5-.2-1.2 0-1.8.2-1 .8-1.8 1.5-2.5 1.2-.8 2.5-1 4-1 1.5 0 2.8.5 3.8 1.5 1 1 1.5 2.5 1.2 4-.2.8-.8 1.2-1.5 1.5-.5.2-1.2.2-1.8 0 1.2-.2 2-.8 2.5-1.8.5-1 0-2.2-1-3-1-1-2.5-1.5-4.2-1.5-1.5 0-2.8.5-3.8 1.5-1 1-1.2 2.5-.8 3.8.5 1.2 1.5 2.2 2.8 2.8 1.2.5 2.5.5 3.8 0 .8-.2 1.5-.8 2-1.5.5-.8.5-1.5.2-2.2z"></path>
</svg>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
