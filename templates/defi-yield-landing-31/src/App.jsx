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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Accordion Functionality
        function toggleAccordion(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('i');
            
            // Close other accordions
            document.querySelectorAll('.accordion-content').forEach(c => {
                if (c !== content) {
                    c.style.maxHeight = null;
                    c.classList.remove('active');
                    // Reset icon rotation
                    const otherBtn = c.previousElementSibling;
                    const otherIcon = otherBtn.querySelector('i');
                    if(otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                }
            });

            // Toggle current
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.classList.remove('active');
                icon.style.transform = 'rotate(0deg)';
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.classList.add('active');
                icon.style.transform = 'rotate(180deg)';
            }
        }

        // Three.js Interactive Visual
        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        
        // Orthographic camera for cleaner, design-focused look
        const aspect = container.clientWidth / container.clientHeight;
        const frustumSize = 10;
        const camera = new THREE.OrthographicCamera(
            frustumSize * aspect / -2, 
            frustumSize * aspect / 2, 
            frustumSize / 2, 
            frustumSize / -2, 
            1, 
            1000
        );
        
        camera.position.z = 10;
        
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        // Abstract Geometries representing 'blocks' or 'capital'
        const geometry = new THREE.IcosahedronGeometry(3.5, 0);
        const material = new THREE.MeshBasicMaterial({ 
            color: 0x474DEF, 
            wireframe: true,
            transparent: true,
            opacity: 0.15
        });
        
        // Inner Geometry
        const innerGeo = new THREE.IcosahedronGeometry(2.5, 1);
        const innerMat = new THREE.MeshBasicMaterial({
            color: 0x474DEF,
            wireframe: true,
            transparent: true,
            opacity: 0.4
        });

        const sphere = new THREE.Mesh(geometry, material);
        const innerSphere = new THREE.Mesh(innerGeo, innerMat);
        
        const group = new THREE.Group();
        group.add(sphere);
        group.add(innerSphere);
        scene.add(group);

        // Position slightly to the right
        group.position.x = 2;

        // Animation Loop
        function animate() {
            requestAnimationFrame(animate);
            
            group.rotation.x += 0.001;
            group.rotation.y += 0.002;
            
            // Gentle floating effect
            group.position.y = Math.sin(Date.now() * 0.001) * 0.2;

            renderer.render(scene, camera);
        }
        
        animate();

        // Responsive Canvas
        window.addEventListener('resize', () => {
            const aspect = container.clientWidth / container.clientHeight;
            camera.left = -frustumSize * aspect / 2;
            camera.right = frustumSize * aspect / 2;
            camera.top = frustumSize / 2;
            camera.bottom = -frustumSize / 2;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter hover:text-[#474DEF] transition-colors" href="#">
                DEPLOY
            </a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-neutral-600">
<a className="hover:text-black transition-colors" href="#">Docs</a>
<a className="hover:text-black transition-colors" href="#">Blog</a>
<a className="hover:text-black transition-colors" href="#">Contact Us</a>
</div>
<button className="md:hidden text-neutral-800">
<i data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 border-b border-neutral-200 overflow-hidden">

<div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-30 md:opacity-100 z-0 pointer-events-none mix-blend-multiply" id="canvas-container"></div>
<div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.95] text-black">
                    Turn Perps Motion into <span className="text-[#474DEF]">Productive Capital</span>
</h1>
<p className="text-lg md:text-xl text-neutral-500 font-light leading-relaxed max-w-lg">
                    Building the next generation of income-generating base assets, powered by the only scalable decentralized delta-neutral yield engine.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex items-center justify-center px-8 py-3.5 bg-[#474DEF] text-white font-medium rounded-full hover:bg-[#383dd6] transition-colors group" href="#">
<i className="w-4 h-4 mr-2 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" data-lucide="send" strokeWidth="1.5"></i>
                        Register Interest
                    </a>
<a className="inline-flex items-center justify-center px-8 py-3.5 bg-neutral-100 text-neutral-900 font-medium rounded-full hover:bg-neutral-200 transition-colors border border-transparent" href="#">
                        Partner With Us
                    </a>
</div>
</div>
</div>
</section>

<section className="border-b border-neutral-200 bg-neutral-50">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y md:divide-y-0 divide-neutral-200 border-x border-neutral-200">

<div className="p-6 md:p-8 hover:bg-white transition-colors">
<p className="text-xs text-neutral-400 uppercase tracking-widest font-medium mb-2">Avg APY</p>
<p className="text-2xl md:text-3xl font-medium tracking-tight text-[#474DEF]">22.6%</p>
<p className="text-xs text-neutral-400 mt-1">12-month</p>
</div>

<div className="p-6 md:p-8 hover:bg-white transition-colors">
<p className="text-xs text-neutral-400 uppercase tracking-widest font-medium mb-2">Sharpe Ratio</p>
<p className="text-2xl md:text-3xl font-medium tracking-tight">6.1</p>
<p className="text-xs text-neutral-400 mt-1">Disclosed</p>
</div>

<div className="p-6 md:p-8 hover:bg-white transition-colors">
<p className="text-xs text-neutral-400 uppercase tracking-widest font-medium mb-2">Real Yield</p>
<p className="text-2xl md:text-3xl font-medium tracking-tight">$1.6M</p>
<p className="text-xs text-neutral-400 mt-1">Paid out</p>
</div>

<div className="p-6 md:p-8 hover:bg-white transition-colors">
<p className="text-xs text-neutral-400 uppercase tracking-widest font-medium mb-2">Volume</p>
<p className="text-2xl md:text-3xl font-medium tracking-tight">200M+</p>
<p className="text-xs text-neutral-400 mt-1">Executed</p>
</div>

<div className="p-6 md:p-8 hover:bg-white transition-colors">
<p className="text-xs text-neutral-400 uppercase tracking-widest font-medium mb-2">DEX Growth</p>
<p className="text-2xl md:text-3xl font-medium tracking-tight text-green-600">+100%</p>
<p className="text-xs text-neutral-400 mt-1">YoY</p>
</div>

<div className="p-6 md:p-8 hover:bg-white transition-colors">
<p className="text-xs text-neutral-400 uppercase tracking-widest font-medium mb-2">Loss Events</p>
<p className="text-2xl md:text-3xl font-medium tracking-tight">0</p>
<p className="text-xs text-neutral-400 mt-1">Since 2018</p>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-neutral-200 bg-white grid-bg">
<div className="max-w-4xl mx-auto space-y-16">
<div className="space-y-6">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter leading-tight">
                    Perpetual markets are exploding in popularity, and they are about to <span className="text-[#474DEF]">break out of crypto.</span>
</h2>
<div className="w-20 h-[1px] bg-black/20"></div>
</div>
<div className="grid md:grid-cols-2 gap-12 text-lg text-neutral-600 font-light leading-relaxed">
<p>
                    No one is capturing the structural returns embedded in their motion. <strong className="text-black font-medium">Deploy exists for this moment.</strong> We transform perpetual market funding rates into sustainable, attractive yield for all.
                </p>
<p>
                    As global fintechs and brokerages embed perps into consumer apps, open interest expands and multiplies the basis trade that powers Deploy.
                </p>
</div>
</div>
</section>

<section className="py-12 border-b border-neutral-200 overflow-hidden bg-neutral-50">
<div className="marquee-container relative max-w-full overflow-hidden">
<div className="marquee-content flex gap-16 whitespace-nowrap px-4 items-center">

<span className="text-2xl font-semibold tracking-tighter text-neutral-300">LLOYDS BANK*</span>
<span className="text-2xl font-semibold tracking-tighter text-neutral-300">HALBORN</span>
<span className="text-2xl font-semibold tracking-tighter text-neutral-300">FORDEFI</span>
<span className="text-2xl font-semibold tracking-tighter text-neutral-300">QUILL</span>
<span className="text-2xl font-semibold tracking-tighter text-neutral-300">PAXOS</span>

<span className="text-2xl font-semibold tracking-tighter text-neutral-300">LLOYDS BANK*</span>
<span className="text-2xl font-semibold tracking-tighter text-neutral-300">HALBORN</span>
<span className="text-2xl font-semibold tracking-tighter text-neutral-300">FORDEFI</span>
<span className="text-2xl font-semibold tracking-tighter text-neutral-300">QUILL</span>
<span className="text-2xl font-semibold tracking-tighter text-neutral-300">PAXOS</span>

<span className="text-2xl font-semibold tracking-tighter text-neutral-300">LLOYDS BANK*</span>
<span className="text-2xl font-semibold tracking-tighter text-neutral-300">HALBORN</span>
<span className="text-2xl font-semibold tracking-tighter text-neutral-300">FORDEFI</span>
<span className="text-2xl font-semibold tracking-tighter text-neutral-300">QUILL</span>
<span className="text-2xl font-semibold tracking-tighter text-neutral-300">PAXOS</span>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-neutral-200">
<div className="max-w-7xl mx-auto">
<div className="mb-16 max-w-2xl">
<span className="text-[#474DEF] font-medium tracking-wide text-sm uppercase mb-4 block">Our Edge</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter leading-tight mb-6">
                    As quantitative traders, we understand how to deliver returns at scale.
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 border border-neutral-200 rounded-xl hover:border-[#474DEF] transition-colors hover:shadow-lg hover:shadow-neutral-100 bg-white hover-lift">
<div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-6 text-[#474DEF]">
<i data-lucide="network" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Market-wide basis capture</h3>
<p className="text-neutral-500 font-light leading-relaxed text-sm">
                        Deploy is built on top of a cross-venue, neutral carry program that harvests structural funding spreads as they emerge across decentralized perpetual markets: from Hyperliquid and beyond.
                    </p>
</div>

<div className="group p-8 border border-neutral-200 rounded-xl hover:border-[#474DEF] transition-colors hover:shadow-lg hover:shadow-neutral-100 bg-white hover-lift">
<div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-6 text-[#474DEF]">
<i data-lucide="bar-chart-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Sharpe 6.1 profile</h3>
<p className="text-neutral-500 font-light leading-relaxed text-sm">
                        Deploy’s live strategy delivers institutional-grade returns: stable, repeatable carry rather than directional speculation.
                    </p>
</div>

<div className="group p-8 border border-neutral-200 rounded-xl hover:border-[#474DEF] transition-colors hover:shadow-lg hover:shadow-neutral-100 bg-white hover-lift">
<div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-6 text-[#474DEF]">
<i data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Zero custody</h3>
<p className="text-neutral-500 font-light leading-relaxed text-sm">
                        Your keys stay with you — our execution layer manages hedging, rebalancing, and safeguards without ever taking possession of capital.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#0a0a0a] text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#474DEF] rounded-full blur-[150px] opacity-20 -mr-20 -mt-20"></div>
<div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-block px-3 py-1 rounded-full border border-neutral-700 bg-neutral-900 text-xs font-medium text-[#474DEF] mb-6">
                    COMING SOON
                </div>
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-6">
                    Introducing dUSD
                </h2>
<p className="text-xl text-neutral-400 font-light leading-relaxed mb-8">
                    Our first product, dUSD, is a productive dollar position that earns yield automatically.
                </p>
<div className="space-y-4 mb-10">
<div className="flex items-start">
<i className="text-[#474DEF] w-5 h-5 mt-1 mr-3" data-lucide="check"></i>
<p className="text-neutral-300">22.6% average APY at size during 6-month beta</p>
</div>
<div className="flex items-start">
<i className="text-[#474DEF] w-5 h-5 mt-1 mr-3" data-lucide="check"></i>
<p className="text-neutral-300">Max drawdown of only 2%</p>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center">
                        Notify me
                        <i className="w-4 h-4 ml-2" data-lucide="bell" strokeWidth="1.5"></i>
</button>
<a className="border border-neutral-700 text-white px-6 py-3 rounded-full font-medium hover:bg-neutral-900 transition-colors flex items-center justify-center" href="#">
<i className="w-4 h-4 mr-2" data-lucide="send" strokeWidth="1.5"></i>
                        Join Telegram
                    </a>
</div>
</div>
<div className="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 lg:p-12">
<div className="absolute inset-0 bg-gradient-to-b from-[#474DEF]/10 to-transparent rounded-2xl"></div>
<div className="relative z-10 text-center">
<p className="text-neutral-500 uppercase tracking-widest text-xs font-medium mb-4">Historical Performance</p>
<div className="text-6xl md:text-8xl font-medium tracking-tighter text-white mb-2">22.6%</div>
<p className="text-[#474DEF] font-medium text-lg">Average APY</p>
<div className="mt-8 pt-8 border-t border-neutral-800 grid grid-cols-2 gap-4 text-left">
<div>
<p className="text-neutral-500 text-xs uppercase">Beta Duration</p>
<p className="text-white text-lg font-medium">6 Months</p>
</div>
<div>
<p className="text-neutral-500 text-xs uppercase">Drawdown</p>
<p className="text-white text-lg font-medium">&lt; 2%</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#474DEF] text-white text-center">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-8">Build With Us</h2>
<p className="text-lg md:text-xl text-white/90 font-light leading-relaxed mb-10">
                At Deploy, we envision a future where fintechs around the world become major distributors of tokenized strategies, bringing institutional-grade products directly to global consumers. If you agree, get in touch.
            </p>
<a className="inline-flex items-center bg-white text-[#474DEF] px-8 py-4 rounded-full font-medium hover:bg-neutral-100 transition-colors shadow-xl" href="#">
                Contact Our Team
                <i className="w-4 h-4 ml-2" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<div className="mt-16 flex justify-center items-center gap-4 text-white/70 text-sm">
<span>AUDITED BY</span>
<span className="font-semibold text-white tracking-wide">HALBORN</span>
<span className="w-1 h-1 bg-white/40 rounded-full"></span>
<span className="font-semibold text-white tracking-wide">QUILL</span>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-neutral-200 bg-white">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-medium tracking-tighter mb-12">Frequently Asked Questions</h2>
<div className="space-y-4">

<div className="border-b border-neutral-200 pb-4">
<button className="flex justify-between items-center w-full py-4 text-left group" onclick="toggleAccordion(this)">
<span className="text-lg font-medium text-neutral-900">What is Deploy?</span>
<i className="text-neutral-400 group-hover:text-black transition-colors w-5 h-5 transform duration-300" data-lucide="chevron-down"></i>
</button>
<div className="accordion-content text-neutral-600 font-light leading-relaxed">
<div className="pb-4">
                            A self-custodial execution engine that turns idle capital into productive base assets.
                        </div>
</div>
</div>

<div className="border-b border-neutral-200 pb-4">
<button className="flex justify-between items-center w-full py-4 text-left group" onclick="toggleAccordion(this)">
<span className="text-lg font-medium text-neutral-900">What is dUSD?</span>
<i className="text-neutral-400 group-hover:text-black transition-colors w-5 h-5 transform duration-300" data-lucide="chevron-down"></i>
</button>
<div className="accordion-content text-neutral-600 font-light leading-relaxed">
<div className="pb-4">
                            A high-yield, productive dollar that earns through basis funding spreads.
                        </div>
</div>
</div>

<div className="border-b border-neutral-200 pb-4">
<button className="flex justify-between items-center w-full py-4 text-left group" onclick="toggleAccordion(this)">
<span className="text-lg font-medium text-neutral-900">Where does yield come from?</span>
<i className="text-neutral-400 group-hover:text-black transition-colors w-5 h-5 transform duration-300" data-lucide="chevron-down"></i>
</button>
<div className="accordion-content text-neutral-600 font-light leading-relaxed">
<div className="pb-4">
                            dUSD earns by capturing perpetual funding spreads — a persistent, market-structural source of return, not dependent on token incentives or price direction.
                        </div>
</div>
</div>

<div className="border-b border-neutral-200 pb-4">
<button className="flex justify-between items-center w-full py-4 text-left group" onclick="toggleAccordion(this)">
<span className="text-lg font-medium text-neutral-900">How do I know funds are safe?</span>
<i className="text-neutral-400 group-hover:text-black transition-colors w-5 h-5 transform duration-300" data-lucide="chevron-down"></i>
</button>
<div className="accordion-content text-neutral-600 font-light leading-relaxed">
<div className="pb-4">
                            No pooled custody. Positions remain user-owned, transparently observable on-chain.
                        </div>
</div>
</div>

<div className="border-b border-neutral-200 pb-4">
<button className="flex justify-between items-center w-full py-4 text-left group" onclick="toggleAccordion(this)">
<span className="text-lg font-medium text-neutral-900">Who is the team?</span>
<i className="text-neutral-400 group-hover:text-black transition-colors w-5 h-5 transform duration-300" data-lucide="chevron-down"></i>
</button>
<div className="accordion-content text-neutral-600 font-light leading-relaxed">
<div className="pb-4">
                            Deploy is built by the ex-founding team of a quant fund managing over $100m in TVL, and ex Lloyds Bank personnel.
                        </div>
</div>
</div>

<div className="border-b border-neutral-200 pb-4">
<button className="flex justify-between items-center w-full py-4 text-left group" onclick="toggleAccordion(this)">
<span className="text-lg font-medium text-neutral-900">Is dUSD audited?</span>
<i className="text-neutral-400 group-hover:text-black transition-colors w-5 h-5 transform duration-300" data-lucide="chevron-down"></i>
</button>
<div className="accordion-content text-neutral-600 font-light leading-relaxed">
<div className="pb-4">
                            Yes — Halborn. Additional audit partners in progress.
                        </div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-20 px-6 bg-white">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
<div>
<a className="text-xl font-semibold tracking-tighter mb-6 block" href="#">DEPLOY</a>
<p className="max-w-sm text-neutral-500 font-light text-sm leading-relaxed">
                    The timing is now: tokenization, regulatory clarity, and perpification are converging.
                    <br/><span className="text-black font-medium">The era of idle capital is over.</span>
</p>
</div>
<div className="flex gap-8 text-sm font-medium text-neutral-600">
<a className="hover:text-[#474DEF] transition-colors" href="#">Twitter</a>
<a className="hover:text-[#474DEF] transition-colors" href="#">Telegram</a>
<a className="hover:text-[#474DEF] transition-colors" href="#">Email</a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between text-xs text-neutral-400">
<p>© 2024 Deploy Labs. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a href="#">Privacy Policy</a>
<a href="#">Terms of Service</a>
</div>
</div>
</footer>



    </>
  );
}
