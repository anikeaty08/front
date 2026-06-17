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



        // --- Pricing Toggle Logic ---
        let isYearly = false;
        function toggleBilling() {
            isYearly = !isYearly;
            const dot = document.getElementById('billing-dot');
            const toggle = document.getElementById('billing-toggle');
            const price1 = document.querySelector('.price-value');
            const price2 = document.querySelector('.price-value-pro');

            if (isYearly) {
                dot.style.transform = 'translateX(24px)';
                toggle.classList.remove('bg-neutral-200');
                toggle.classList.add('bg-neutral-900');
                
                // Animate numbers
                price1.innerText = '39';
                price2.innerText = '79';
            } else {
                dot.style.transform = 'translateX(0)';
                toggle.classList.add('bg-neutral-200');
                toggle.classList.remove('bg-neutral-900');
                
                price1.innerText = '49';
                price2.innerText = '99';
            }
        }

        // --- Canvas Logic (Ported from React Component) ---
        
        // Define prototypes similar to the React source but cleaner for Vanilla JS
        const E = {
            debug: true,
            friction: 0.5,
            trails: 50, // Reduced slightly for performance
            size: 50,
            dampening: 0.025,
            tension: 0.98,
        };

        let ctx;
        let f;
        let pos = { x: 0, y: 0 };
        let lines = [];
        let running = true;

        function Node() {
            this.x = 0;
            this.y = 0;
            this.vy = 0;
            this.vx = 0;
        }

        // Oscillator for color/movement
        function Oscillator(e) {
            this.init(e || {});
        }
        Oscillator.prototype = {
            init: function (e) {
                this.phase = e.phase || 0;
                this.offset = e.offset || 0;
                this.frequency = e.frequency || 0.001;
                this.amplitude = e.amplitude || 1;
            },
            update: function () {
                this.phase += this.frequency;
                return this.offset + Math.sin(this.phase) * this.amplitude;
            }
        };

        function Line(e) {
            this.init(e || {});
        }

        Line.prototype = {
            init: function (e) {
                this.spring = e.spring + 0.1 * Math.random() - 0.05;
                this.friction = E.friction + 0.01 * Math.random() - 0.005;
                this.nodes = [];
                for (var t, n = 0; n < E.size; n++) {
                    t = new Node();
                    t.x = pos.x;
                    t.y = pos.y;
                    this.nodes.push(t);
                }
            },
            update: function () {
                let spring = this.spring;
                let node0 = this.nodes[0];
                
                node0.vx += (pos.x - node0.x) * spring;
                node0.vy += (pos.y - node0.y) * spring;

                for (var prev, i = 0, len = this.nodes.length; i < len; i++) {
                    let node = this.nodes[i];
                    
                    if (i > 0) {
                        prev = this.nodes[i - 1];
                        node.vx += (prev.x - node.x) * spring;
                        node.vy += (prev.y - node.y) * spring;
                        node.vx += prev.vx * E.dampening;
                        node.vy += prev.vy * E.dampening;
                    }
                    
                    node.vx *= this.friction;
                    node.vy *= this.friction;
                    node.x += node.vx;
                    node.y += node.vy;
                    
                    spring *= E.tension;
                }
            },
            draw: function () {
                let n = this.nodes[0].x;
                let i = this.nodes[0].y;
                
                ctx.beginPath();
                ctx.moveTo(n, i);
                
                for (var a = 1, o = this.nodes.length - 2; a < o; a++) {
                    let e = this.nodes[a];
                    let t = this.nodes[a + 1];
                    n = 0.5 * (e.x + t.x);
                    i = 0.5 * (e.y + t.y);
                    ctx.quadraticCurveTo(e.x, e.y, n, i);
                }
                
                let e = this.nodes[a];
                let t = this.nodes[a + 1];
                ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
                ctx.stroke();
                ctx.closePath();
            }
        };

        function onMousemove(e) {
            function initLines() {
                lines = [];
                for (let i = 0; i < E.trails; i++) {
                    lines.push(new Line({ spring: 0.45 + (i / E.trails) * 0.025 }));
                }
            }

            function updatePos(e) {
                if (e.touches) {
                    pos.x = e.touches[0].pageX;
                    pos.y = e.touches[0].pageY;
                } else {
                    pos.x = e.clientX;
                    // Adjust for scroll if needed, though clientY is usually viewport relative
                    // But for this effect, relative to viewport is better
                    pos.y = e.clientY + window.scrollY; 
                    
                    // Actually, for the effect to track mouse correctly in absolute positioned canvas:
                    const rect = ctx.canvas.getBoundingClientRect();
                    pos.x = e.clientX - rect.left;
                    pos.y = e.clientY - rect.top;
                }
            }

            function touchStart(e) {
                if (e.touches.length == 1) {
                    pos.x = e.touches[0].pageX;
                    pos.y = e.touches[0].pageY;
                }
            }

            document.removeEventListener("mousemove", onMousemove);
            document.removeEventListener("touchstart", onMousemove);
            
            document.addEventListener("mousemove", updatePos);
            document.addEventListener("touchmove", updatePos);
            document.addEventListener("touchstart", touchStart);
            
            updatePos(e);
            initLines();
            render();
        }

        function render() {
            if (running) {
                ctx.globalCompositeOperation = "source-over";
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.globalCompositeOperation = "lighter"; // Blend mode
                
                // Color logic: subtle blue/slate for professional look
                // HSL 220 is roughly blue/slate
                ctx.strokeStyle = "hsla(" + (210 + Math.round(f.update()/5)) + ", 80%, 60%, 0.15)";
                ctx.lineWidth = 1;

                for (var i = 0; i < E.trails; i++) {
                    if (lines[i]) {
                        lines[i].update();
                        lines[i].draw();
                    }
                }
                window.requestAnimationFrame(render);
            }
        }

        function resizeCanvas() {
            const container = document.querySelector('.canvas-container');
            if(ctx && container) {
                ctx.canvas.width = container.offsetWidth;
                ctx.canvas.height = container.offsetHeight;
            }
        }

        // Initialize
        document.addEventListener("DOMContentLoaded", () => {
            const canvas = document.getElementById("canvas");
            ctx = canvas.getContext("2d");
            
            f = new Oscillator({
                phase: Math.random() * 2 * Math.PI,
                amplitude: 85,
                frequency: 0.0015,
                offset: 285,
            });

            resizeCanvas();
            
            // Set initial position to center of screen so lines exist before mouse move
            pos.x = window.innerWidth / 2;
            pos.y = window.innerHeight / 3;

            // Trigger initialization
            onMousemove({ clientX: pos.x, clientY: pos.y });

            window.addEventListener("resize", resizeCanvas);
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
      

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="flex items-center justify-between h-16 sm:h-20">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center text-white">
<span className="font-bold tracking-tighter text-lg">S</span>
</div>
<span className="font-bold tracking-tight text-lg">SCALE</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#how-it-works">How it works</a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#pricing">Pricing</a>
</div>

<div className="flex items-center gap-3">
<button className="hidden sm:flex text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors">Log in</button>
<button className="bg-neutral-900 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-neutral-800 transition-colors shadow-sm ring-1 ring-neutral-900 ring-offset-1">
                        Get Started
                    </button>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-[1px] bg-neutral-200/50"></div>
<div className="absolute inset-0 bg-white/80 backdrop-blur-md -z-10"></div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none canvas-container">
<canvas className="w-full h-full opacity-[0.35]" id="canvas"></canvas>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 shadow-sm mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-neutral-600 tracking-wide uppercase">New products drop every Friday</span>
</div>

<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-neutral-900 mb-6 leading-[1.1] sm:leading-[1]">
                Stop guessing. <br/>
<span className="text-neutral-400">Start scaling.</span>
</h1>

<p className="text-lg sm:text-xl text-neutral-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                We analyze millions of data points to deliver validated Shopify winning products, ad creatives, and supplier links directly to your dashboard.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-900/20 flex items-center justify-center gap-2 group">
                    View Sample Product
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-white border border-neutral-200 text-neutral-900 font-medium hover:bg-neutral-50 transition-all flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
                    Watch Demo
                </button>
</div>

<div className="mt-16 sm:mt-24 pt-8 border-t border-neutral-100/50">
<p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-6">Powering stores generating 7-figures</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-40 grayscale">

<span className="text-xl font-bold tracking-tight">SHOPIFY</span>
<span className="text-xl font-bold tracking-tight italic">Dropship.io</span>
<span className="text-xl font-bold tracking-tight">TIKTOK</span>
<span className="text-xl font-bold tracking-tight">META</span>
<span className="text-xl font-bold tracking-tight">stripe</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-t border-neutral-200" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">Everything you need to scale</h2>
<p className="text-neutral-500 text-lg">We don't just give you a product name. We give you the entire blueprint.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Market Analysis</h3>
<p className="text-neutral-500 leading-relaxed">
                        Real-time saturation data, competitor analysis, and break-even calculations so you know your margins before you spend a dime.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:videocamera-record-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Viral Creatives</h3>
<p className="text-neutral-500 leading-relaxed">
                        High-converting video ads and thumbnail templates ready to upload to TikTok and Reels. No editing required.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Private Suppliers</h3>
<p className="text-neutral-500 leading-relaxed">
                        Direct links to vetted suppliers with 5-8 day shipping times to US/EU. Skip AliExpress and build a real brand.
                    </p>
</div>
</div>

<div className="mt-6 bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden grid md:grid-cols-2">
<div className="p-8 md:p-12 flex flex-col justify-center">
<div className="inline-flex items-center gap-2 mb-6">
<iconify-icon className="text-amber-500" icon="solar:stars-minimalistic-linear"></iconify-icon>
<span className="text-sm font-semibold tracking-wide uppercase text-neutral-500">AI-Powered Validation</span>
</div>
<h3 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-4">Algorithm before intuition.</h3>
<p className="text-neutral-500 text-lg leading-relaxed mb-8">
                        Our proprietary AI scans social media trends and ad libraries to detect viral spikes before they saturate. You get the alert the moment the wave starts.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-neutral-700">
<iconify-icon className="text-emerald-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span>Live trend detection</span>
</li>
<li className="flex items-center gap-3 text-neutral-700">
<iconify-icon className="text-emerald-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span>Audience interest scoring</span>
</li>
<li className="flex items-center gap-3 text-neutral-700">
<iconify-icon className="text-emerald-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span>Ad fatigue warnings</span>
</li>
</ul>
</div>
<div className="bg-neutral-100 relative h-64 md:h-auto border-l border-neutral-200">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-3/4 aspect-[4/3] bg-white rounded-xl shadow-2xl border border-neutral-200/60 p-4 transform md:rotate-3 md:translate-x-4 transition-transform hover:rotate-0">

<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded bg-neutral-100"></div>
<div className="space-y-1">
<div className="h-2 w-24 bg-neutral-100 rounded"></div>
<div className="h-2 w-16 bg-neutral-100 rounded"></div>
</div>
<div className="ml-auto h-6 w-16 bg-green-100 rounded-full flex items-center justify-center">
<span className="text-[10px] text-green-700 font-bold">WINNER</span>
</div>
</div>
<div className="h-24 bg-neutral-50 rounded-lg mb-4 w-full flex items-end p-2 gap-1">
<div className="w-1/6 bg-blue-100 h-[40%] rounded-sm"></div>
<div className="w-1/6 bg-blue-200 h-[60%] rounded-sm"></div>
<div className="w-1/6 bg-blue-300 h-[30%] rounded-sm"></div>
<div className="w-1/6 bg-blue-400 h-[80%] rounded-sm"></div>
<div className="w-1/6 bg-blue-500 h-[90%] rounded-sm"></div>
<div className="w-1/6 bg-blue-600 h-[100%] rounded-sm"></div>
</div>
<div className="flex justify-between items-center pt-2 border-t border-neutral-100">
<div className="h-2 w-12 bg-neutral-100 rounded"></div>
<div className="h-6 w-20 bg-neutral-900 rounded text-white text-[10px] flex items-center justify-center">Import</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="pricing">
<div className="max-w-3xl mx-auto px-4 sm:px-6 text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 mb-6">Simple pricing, massive ROI</h2>

<div className="flex items-center justify-center gap-4">
<span className="text-sm text-neutral-500 font-medium">Monthly</span>
<button className="w-12 h-6 bg-neutral-200 rounded-full relative transition-colors duration-300 focus:outline-none" id="billing-toggle" onclick="toggleBilling()">
<div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300" id="billing-dot"></div>
</button>
<span className="text-sm text-neutral-900 font-medium">Yearly <span className="text-emerald-600 text-xs ml-1 font-bold">-20%</span></span>
</div>
</div>
<div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 items-center">

<div className="p-8 rounded-3xl border border-neutral-200 bg-white hover:border-neutral-300 transition-colors relative">
<h3 className="text-xl font-semibold text-neutral-900 mb-2">Starter</h3>
<p className="text-neutral-500 text-sm mb-6">Perfect for testing new stores.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-bold tracking-tight text-neutral-900">$<span className="price-value">49</span></span>
<span className="text-neutral-400">/mo</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-900 mt-1" icon="solar:check-read-linear"></iconify-icon>
<span className="text-neutral-600 text-sm">3 Winning Products / Week</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-900 mt-1" icon="solar:check-read-linear"></iconify-icon>
<span className="text-neutral-600 text-sm">Ad Creative &amp; Copy</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-900 mt-1" icon="solar:check-read-linear"></iconify-icon>
<span className="text-neutral-600 text-sm">Standard Support</span>
</li>
</ul>
<button className="w-full h-10 rounded-md border border-neutral-200 font-medium text-sm hover:bg-neutral-50 transition-colors">Get Started</button>
</div>

<div className="p-8 rounded-3xl border border-neutral-900 bg-neutral-900 text-white relative shadow-2xl">
<div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
<span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Popular</span>
</div>
<h3 className="text-xl font-semibold mb-2">Agency</h3>
<p className="text-neutral-400 text-sm mb-6">For scaling to 6-figures and beyond.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-bold tracking-tight text-white">$<span className="price-value-pro">99</span></span>
<span className="text-neutral-500">/mo</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-1" icon="solar:check-read-linear"></iconify-icon>
<span className="text-neutral-300 text-sm">Daily Winning Products</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-1" icon="solar:check-read-linear"></iconify-icon>
<span className="text-neutral-300 text-sm">Competitor Ad Spy Tool</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-1" icon="solar:check-read-linear"></iconify-icon>
<span className="text-neutral-300 text-sm">Private Supplier Access</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-1" icon="solar:check-read-linear"></iconify-icon>
<span className="text-neutral-300 text-sm">Priority 24/7 Support</span>
</li>
</ul>
<button className="w-full h-10 rounded-md bg-blue-600 text-white font-medium text-sm hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)]">Scale Now</button>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-neutral-900 rounded flex items-center justify-center text-white">
<span className="font-bold tracking-tighter text-xs">S</span>
</div>
<span className="font-bold tracking-tight">SCALE</span>
</div>
<p className="text-neutral-500 text-sm max-w-xs">Helping dropshippers and e-commerce brands find their next winner since 2023.</p>
</div>
<div>
<h4 className="font-semibold text-neutral-900 mb-4">Product</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900" href="#">Features</a></li>
<li><a className="hover:text-neutral-900" href="#">Pricing</a></li>
<li><a className="hover:text-neutral-900" href="#">Case Studies</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-neutral-900 mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900" href="#">Privacy</a></li>
<li><a className="hover:text-neutral-900" href="#">Terms</a></li>
<li><a className="hover:text-neutral-900" href="#">Refund Policy</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-100">
<p className="text-xs text-neutral-400">© 2024 Scale Agency Inc. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<iconify-icon className="text-neutral-400 hover:text-neutral-900 cursor-pointer" icon="solar:brand-twitter-linear"></iconify-icon>
<iconify-icon className="text-neutral-400 hover:text-neutral-900 cursor-pointer" icon="solar:brand-instagram-linear"></iconify-icon>
</div>
</div>
</div>
</footer>



    </>
  );
}
