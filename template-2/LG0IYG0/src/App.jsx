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
      
    const scene=new THREE.Scene();
    const camera=new THREE.OrthographicCamera(-1,1,1,-1,0,1);
    const renderer=new THREE.WebGLRenderer({alpha:true});
    renderer.setSize(innerWidth,innerHeight);
    document.body.appendChild(renderer.domElement);
    const material=new THREE.ShaderMaterial({
      uniforms:{iTime:{value:0},iResolution:{value:new THREE.Vector2(innerWidth,innerHeight)}},
      vertexShader:`void main(){gl_Position=vec4(position,1.0);}`,
      fragmentShader:`uniform float iTime;uniform vec2 iResolution;
      float rand(vec2 n){return fract(sin(dot(n,vec2(12.9898,4.1414)))*43758.5453);}
      float noise(vec2 p){vec2 ip=floor(p),u=fract(p);u=u*u*(3.-2.*u);float res=mix(mix(rand(ip),rand(ip+vec2(1.,0.)),u.x),mix(rand(ip+vec2(0.,1.)),rand(ip+vec2(1.,1.)),u.x),u.y);return res*res;}
      float fbm(vec2 x){float v=0.,a=.3;vec2 shift=vec2(100);mat2 rot=mat2(cos(.5),sin(.5),-sin(.5),cos(.5));for(int i=0;i<3;i++){v+=a*noise(x);x=rot*x*2.+shift;a*=.4;}return v;}
      void main(){
        vec2 p=((gl_FragCoord.xy-.5*iResolution.xy)/iResolution.y)*mat2(6.,-4.,4.,6.);
        float f=2.+fbm(p+vec2(iTime*5.,0.))*0.5;
        vec4 o=vec4(0.);
        for(float i=0.;i<25.;i++){
          vec2 v=p+cos(i*i+(iTime+p.x*.08)*.025+i*vec2(13,11))*3.5;
          vec4 c=vec4(.1+.3*sin(i*.2+iTime*.4),.3+.5*cos(i*.3+iTime*.5),.7+.3*sin(i*.4+iTime*.3),1.);
          o+=c/length(max(v,vec2(v.x*f*.015,v.y*1.5)));
        }
        gl_FragColor=tanh(pow(o/80.,vec4(1.6)))*1.2;
      }`
    });
    const mesh=new THREE.Mesh(new THREE.PlaneGeometry(2,2),material);scene.add(mesh);
    function animate(){requestAnimationFrame(animate);material.uniforms.iTime.value+=.016;renderer.render(scene,camera);}animate();
    addEventListener('resize',()=>{renderer.setSize(innerWidth,innerHeight);material.uniforms.iResolution.value.set(innerWidth,innerHeight);});
    renderer.domElement.style.opacity='.25';
  


    lucide.createIcons();
  
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
      

<canvas height="1185" style={{display: `block`, width: `1441px`, height: `1185px`, opacity: `0.25`}} width="1441"></canvas><canvas height="1185" style={{display: `block`, width: `2065px`, height: `1185px`, opacity: `0.25`}} width="2065"></canvas><canvas height="1185" style={{display: `block`, width: `2065px`, height: `1185px`, opacity: `0.25`}} width="2065"></canvas><canvas height="1185" style={{display: `block`, width: `2065px`, height: `1185px`, opacity: `0.25`}} width="2065"></canvas><canvas height="1185" style={{display: `block`, width: `2065px`, height: `1185px`, opacity: `0.25`}} width="2065"></canvas><canvas height="1185" style={{display: `block`, width: `2065px`, height: `1185px`, opacity: `0.25`}} width="2065"></canvas><canvas height="1185" style={{display: `block`, width: `2065px`, height: `1185px`, opacity: `0.25`}} width="2065"></canvas><canvas height="1185" style={{display: `block`, width: `2065px`, height: `1185px`, opacity: `0.25`}} width="2065"></canvas><canvas height="1185" style={{display: `block`, width: `2065px`, height: `1185px`, opacity: `0.25`}} width="2065"></canvas><canvas height="1185" style={{display: `block`, width: `2065px`, height: `1185px`, opacity: `0.25`}} width="2065"></canvas><canvas height="1185" style={{display: `block`, width: `2065px`, height: `1185px`, opacity: `0.25`}} width="2065"></canvas><canvas height="1185" style={{display: `block`, width: `2065px`, height: `1185px`, opacity: `0.25`}} width="2065"></canvas><canvas height="1185" style={{display: `block`, width: `2065px`, height: `1185px`, opacity: `0.25`}} width="2065"></canvas><canvas height="1185" style={{display: `block`, width: `2065px`, height: `1185px`, opacity: `0.25`}} width="2065"></canvas><canvas height="1185" style={{display: `block`, width: `2065px`, height: `1185px`, opacity: `0.25`}} width="2065"></canvas><canvas height="1185" style={{display: `block`, width: `2065px`, height: `1185px`, opacity: `0.25`}} width="2065"></canvas><canvas height="1185" style={{display: `block`, width: `2065px`, height: `1185px`, opacity: `0.25`}} width="2065"></canvas><canvas height="1185" style={{display: `block`, width: `2065px`, height: `1185px`, opacity: `0.25`}} width="2065"></canvas><canvas height="1185" style={{display: `block`, width: `2065px`, height: `1185px`, opacity: `0.25`}} width="2065"></canvas><canvas height="1185" style={{display: `block`, width: `2065px`, height: `1185px`, opacity: `0.25`}} width="2065"></canvas><canvas height="1185" style={{display: `block`, width: `2065px`, height: `1185px`, opacity: `0.25`}} width="2065"></canvas><canvas height="1185" style={{display: `block`, width: `2065px`, height: `1185px`, opacity: `0.25`}} width="2065"></canvas><canvas height="1185" style={{display: `block`, width: `2065px`, height: `1185px`, opacity: `0.25`}} width="2065"></canvas><canvas height="1185" style={{display: `block`, width: `2065px`, height: `1185px`, opacity: `0.25`}} width="2065"></canvas><canvas height="1185" style={{display: `block`, width: `2065px`, height: `1185px`, opacity: `0.25`}} width="2065"></canvas><canvas height="1185" style={{display: `block`, width: `2065px`, height: `1185px`, opacity: `0.25`}} width="2065"></canvas><canvas height="1185" style={{display: `block`, width: `2065px`, height: `1185px`, opacity: `0.25`}} width="2065"></canvas><canvas height="1185" style={{display: `block`, width: `2065px`, height: `1185px`, opacity: `0.25`}} width="2065"></canvas><canvas height="1185" style={{display: `block`, width: `2065px`, height: `1185px`, opacity: `0.25`}} width="2065"></canvas>

<nav className="relative z-10 w-full pt-4 pr-6 pb-4 pl-6">
<div className="max-w-7xl flex mr-auto ml-auto items-center justify-between">
<div className="flex space-x-2 items-center" style={{userSelect: `none`}}>
<div className="flex items-center justify-center" style={{position: `relative`, overflow: `visible`}}>
<svg className="w-[24px] h-[24px]" fill="none" stroke="#9333ea" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transform: `rotate(180deg)`, width: `24px`, height: `24px`, color: `rgb(31, 41, 55)`}} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
<g className="">
<path d="M16 48v-32a12 12 0 0 1 24 0v32"></path>
<path className="" d="M40 48v-32a12 12 0 0 0-24 0v32"></path>
<line className="" x1="16" x2="40" y1="48" y2="48"></line>
<line className="" x1="16" x2="40" y1="32" y2="32"></line>
<line className="" x1="28" x2="28" y1="16" y2="48"></line>
<line className="" x1="28" x2="36" y1="16" y2="16"></line>
<line className="" x1="28" x2="36" y1="48" y2="48"></line>
</g>
</svg>
</div>
<span className="header-font select-text text-lg font-semibold text-gray-900 tracking-tight font-manrope" style={{userSelect: `text`}}>Pollux</span>
</div>

<div className="hidden md:flex items-center space-x-6">
<div className="group relative">
<button className="text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center font-manrope" style={{}}>
            Solutions <svg className="lucide lucide-chevron-down w-4 h-4 ml-1" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="absolute left-0 top-full mt-3 hidden group-hover:block">
<div className="frost-dropdown rounded-xl p-4 space-y-2 w-44">
<a className="block text-sm text-gray-700 hover:text-gray-900 font-manrope" href="#" style={{}}>Retail</a>
<a className="block text-sm text-gray-700 hover:text-gray-900 font-manrope" href="#" style={{}}>Wholesale</a>
<a className="block text-sm text-gray-700 hover:text-gray-900 font-manrope" href="#" style={{}}>Startups</a>
<a className="block text-sm text-gray-700 hover:text-gray-900 font-manrope" href="#" style={{}}>Services</a>
<a className="block text-sm text-gray-700 hover:text-gray-900 font-manrope" href="#" style={{}}>Government</a>
</div>
</div>
</div>
<a className="text-gray-600 hover:text-gray-900 text-sm font-manrope" href="#" style={{}}>Early Access</a>
<a className="text-gray-600 hover:text-gray-900 text-sm font-manrope" href="#" style={{}}>Pricing</a>
<a className="text-gray-600 hover:text-gray-900 text-sm font-manrope" href="#" style={{}}>Support & Implementation</a>
<div className="group relative">
<button className="text-gray-600 hover:text-gray-900 text-sm flex items-center font-manrope" style={{}}>
            Company <svg className="lucide lucide-chevron-down w-4 h-4 ml-1" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="absolute left-0 top-full mt-3 hidden group-hover:block">
<div className="frost-dropdown rounded-xl p-4 space-y-2 w-36">
<a className="block text-sm text-gray-700 hover:text-gray-900 font-manrope" href="#" style={{}}>About Us</a>
<a className="block text-sm text-gray-700 hover:text-gray-900 font-manrope" href="#" style={{}}>Careers</a>
</div>
</div>
</div>
<a className="text-gray-600 hover:text-gray-900 text-sm font-manrope" href="#" style={{}}>Blog</a>
</div>

<div className="flex items-center space-x-4">
<a className="hidden md:inline-block primary-button px-4 py-2 rounded-lg text-sm font-manrope" href="#" style={{}}>Schedule a Demo</a>
<button className="glass-button px-4 py-2 rounded-lg text-sm font-manrope" style={{}}>Log In</button>
</div>
</div>
</nav>
<div className="relative z-10 divider"></div>

<section className="relative z-10 min-h-screen flex flex-col text-center pt-20 pr-6 pb-20 pl-6 items-center justify-center">
<div className="max-w-6xl mx-auto">

<div className="announcement-pill rounded-full px-4 py-2 mb-8 inline-block">
<div className="flex items-center space-x-2 text-sm">
<svg className="lucide lucide-sparkles w-4 h-4 text-indigo-500" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
<span className="text-gray-700 font-manrope" style={{}}>Introducing Pollux 2.0 – Now with advanced automation</span>
<svg className="lucide lucide-arrow-right w-4 h-4 text-gray-500" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
<div className="mb-8">
<h1 className="text-5xl md:text-6xl lg:text-7xl header-font tracking-tight mb-4 font-poppins font-medium" style={{}}>
          Simplicity is power
        </h1>
<h2 className="text-2xl md:text-3xl header-font tracking-tight text-gray-600 mb-4 font-poppins font-medium" style={{}}>
          Your business deserves better
        </h2>
<p className="text-lg md:text-xl text-gray-700 mx-auto max-w-3xl body-font font-manrope" style={{}}>
          You're growing, but your tools aren't. Pollux unifies everything so you can stay focused on the work that matters.
        </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24">
<button className="primary-button px-6 py-3 rounded-lg text-sm min-w-40 font-manrope" style={{}}>Schedule a Demo</button>
<button className="secondary-button px-6 py-3 rounded-lg text-sm min-w-40 font-manrope" style={{}}>Get Started Today</button>
</div>
<div className="divider mb-12"></div>
</div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500">
<span className="text-sm mb-2 font-manrope" style={{}}>Discover More</span>
<svg className="lucide lucide-chevron-down animate-bounce w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</section>

<section className="relative z-10 px-6 py-24">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
<div className="">
<h2 className="text-3xl md:text-4xl header-font tracking-tight mb-6 font-poppins font-medium" style={{}}>
          We've been there. That's why we built Pollux
        </h2>
<p className="text-gray-700 body-font text-lg font-manrope" style={{}}>
          We built a better platform – simple, modern, and actually helpful.
        </p>
</div>
<div className="">
<ul className="space-y-4">
<li className="flex items-start space-x-3">
<svg className="lucide lucide-check w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-gray-700 font-manrope">No more juggling multiple tools and platforms</span>
</li>
<li className="flex items-start space-x-3">
<svg className="lucide lucide-check w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-gray-700 font-manrope">Streamlined workflows that actually work</span>
</li>
<li className="flex items-start space-x-3">
<svg className="lucide lucide-check w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-gray-700 font-manrope">Real-time insights without the complexity</span>
</li>
<li className="flex items-start space-x-3">
<svg className="lucide lucide-check w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-gray-700 font-manrope">Built for teams that want to focus on growth</span>
</li>
</ul>
</div>
</div>
</section>

<section className="relative z-10 px-6 py-24">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl header-font tracking-tight mb-4 font-poppins font-medium">
          Run your entire business from one platform
        </h2>
<p className="text-gray-700 body-font text-lg max-w-2xl mx-auto font-manrope">
          Everything you need to manage operations, track performance, and grow your business.
        </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="glass-card rounded-xl p-6">
<div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
<svg className="lucide lucide-layout-dashboard w-6 h-6 text-indigo-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</div>
<h3 className="text-lg font-semibold mb-2 header-font font-poppins">Unified Dashboard</h3>
<p className="text-gray-600 body-font font-manrope">See everything at a glance. Track sales, inventory, and performance from one central hub.</p>
</div>

<div className="glass-card rounded-xl p-6">
<div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
<svg className="lucide lucide-zap w-6 h-6 text-green-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-2 header-font font-poppins">Smart Automation</h3>
<p className="text-gray-600 body-font font-manrope">Automate repetitive tasks and workflows. Let technology handle the routine so you can focus on strategy.</p>
</div>

<div className="glass-card rounded-xl p-6">
<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
<svg className="lucide lucide-bar-chart-3 w-6 h-6 text-purple-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M7 11v5"></path><path d="M12 5v12"></path><path d="M17 8v9"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-2 header-font font-poppins">Advanced Analytics</h3>
<p className="text-gray-600 body-font font-manrope">Get actionable insights with powerful reporting tools. Make data-driven decisions with confidence.</p>
</div>

<div className="glass-card rounded-xl p-6">
<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
<svg className="lucide lucide-users w-6 h-6 text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-2 header-font font-poppins">Team Collaboration</h3>
<p className="text-gray-600 body-font font-manrope">Keep everyone aligned with shared workspaces, real-time updates, and seamless communication tools.</p>
</div>

<div className="glass-card rounded-xl p-6">
<div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
<svg className="lucide lucide-shield-check w-6 h-6 text-orange-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-2 header-font font-poppins">Enterprise Security</h3>
<p className="text-gray-600 body-font font-manrope">Your data is protected with bank-level security, compliance standards, and regular backups.</p>
</div>

<div className="glass-card rounded-xl p-6">
<div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
<svg className="lucide lucide-smartphone w-6 h-6 text-pink-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-2 header-font font-poppins">Mobile Ready</h3>
<p className="text-gray-600 body-font font-manrope">Access your business from anywhere. Full functionality on desktop, tablet, and mobile devices.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 px-6 py-24">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl header-font tracking-tight mb-4 font-poppins font-medium">
          Simple, transparent pricing
        </h2>
<p className="text-gray-700 body-font text-lg max-w-2xl mx-auto font-manrope">
          Choose the plan that fits your business. Start free, upgrade when you're ready.
        </p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="glass-card rounded-xl p-8 relative">
<div className="mb-6">
<h3 className="text-xl font-semibold mb-2 header-font font-poppins">Starter</h3>
<p className="text-gray-600 body-font font-manrope">Perfect for small teams getting started</p>
</div>
<div className="mb-6">
<span className="text-4xl font-bold header-font font-poppins">$29</span>
<span className="text-gray-600 body-font font-manrope">/month</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center space-x-3">
<svg className="lucide lucide-check w-5 h-5 text-indigo-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-gray-700 body-font font-manrope">Up to 5 team members</span>
</li>
<li className="flex items-center space-x-3">
<svg className="lucide lucide-check w-5 h-5 text-indigo-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-gray-700 body-font font-manrope">Basic dashboard & analytics</span>
</li>
<li className="flex items-center space-x-3">
<svg className="lucide lucide-check w-5 h-5 text-indigo-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-gray-700 body-font font-manrope">Email support</span>
</li>
<li className="flex items-center space-x-3">
<svg className="lucide lucide-check w-5 h-5 text-indigo-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-gray-700 body-font font-manrope">Mobile app access</span>
</li>
</ul>
<button className="secondary-button w-full px-6 py-3 rounded-lg text-sm font-manrope">Get Started</button>
</div>

<div className="glass-card rounded-xl p-8 relative border-2 border-indigo-200">
<div className="absolute -top-3 left-1/2 -translate-x-1/2">
<span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-manrope">Most Popular</span>
</div>
<div className="mb-6">
<h3 className="text-xl font-semibold mb-2 header-font font-poppins">Professional</h3>
<p className="text-gray-600 body-font font-manrope">For growing businesses that need more power</p>
</div>
<div className="mb-6">
<span className="text-4xl font-bold header-font font-poppins">$79</span>
<span className="text-gray-600 body-font font-manrope">/month</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center space-x-3">
<svg className="lucide lucide-check w-5 h-5 text-indigo-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-gray-700 body-font font-manrope">Up to 25 team members</span>
</li>
<li className="flex items-center space-x-3">
<svg className="lucide lucide-check w-5 h-5 text-indigo-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-gray-700 body-font font-manrope">Advanced analytics & reporting</span>
</li>
<li className="flex items-center space-x-3">
<svg className="lucide lucide-check w-5 h-5 text-indigo-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-gray-700 body-font font-manrope">Smart automation workflows</span>
</li>
<li className="flex items-center space-x-3">
<svg className="lucide lucide-check w-5 h-5 text-indigo-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-gray-700 body-font font-manrope">Priority support</span>
</li>
<li className="flex items-center space-x-3">
<svg className="lucide lucide-check w-5 h-5 text-indigo-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-gray-700 body-font font-manrope">API access</span>
</li>
</ul>
<button className="primary-button w-full px-6 py-3 rounded-lg text-sm font-manrope">Start Free Trial</button>
</div>

<div className="glass-card rounded-xl p-8 relative">
<div className="mb-6">
<h3 className="text-xl font-semibold mb-2 header-font font-poppins">Enterprise</h3>
<p className="text-gray-600 body-font font-manrope">For large organizations with custom needs</p>
</div>
<div className="mb-6">
<span className="text-4xl font-bold header-font font-poppins">Custom</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center space-x-3">
<svg className="lucide lucide-check w-5 h-5 text-indigo-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-gray-700 body-font font-manrope">Unlimited team members</span>
</li>
<li className="flex items-center space-x-3">
<svg className="lucide lucide-check w-5 h-5 text-indigo-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-gray-700 body-font font-manrope">Custom integrations</span>
</li>
<li className="flex items-center space-x-3">
<svg className="lucide lucide-check w-5 h-5 text-indigo-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-gray-700 body-font font-manrope">Dedicated account manager</span>
</li>
<li className="flex items-center space-x-3">
<svg className="lucide lucide-check w-5 h-5 text-indigo-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-gray-700 body-font font-manrope">24/7 phone support</span>
</li>
<li className="flex items-center space-x-3">
<svg className="lucide lucide-check w-5 h-5 text-indigo-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-gray-700 body-font font-manrope">SLA guarantee</span>
</li>
</ul>
<button className="glass-button w-full px-6 py-3 rounded-lg text-sm font-manrope">Contact Sales</button>
</div>
</div>
<div className="text-center mt-12">
<p className="text-gray-600 body-font font-manrope">
          All plans include a 14-day free trial. No credit card required.
        </p>
</div>
</div>
</section>

<section className="relative z-10 px-6 py-24">
<div className="max-w-4xl mx-auto text-center">
<div className="frost-form rounded-2xl p-12">
<h2 className="text-3xl md:text-4xl header-font tracking-tight mb-4 font-poppins font-medium">
          Ready to simplify your business?
        </h2>
<p className="text-gray-700 body-font text-lg mb-8 max-w-2xl mx-auto font-manrope">
          Join thousands of businesses already using Pollux to streamline operations and drive growth.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="primary-button px-8 py-4 rounded-lg text-base min-w-48 font-manrope">Schedule a Demo</button>
<button className="secondary-button px-8 py-4 rounded-lg text-base min-w-48 font-manrope">Start Free Trial</button>
</div>
<p className="text-sm text-gray-500 mt-4 font-manrope">
          14-day free trial • No credit card required • Cancel anytime
        </p>
</div>
</div>
</section>

<footer className="relative z-10 pt-16 pr-6 pb-16 pl-6 glass-card" id="aura-emdh1abpo" style={{background: `rgba(255, 255, 255, 0.4)`, backdropFilter: `blur(20px)`, webkitBackdropFilter: `blur(20px)`, boxShadow: `0 8px 32px rgba(31, 38, 135, 0.15), 0 2px 8px rgba(31, 38, 135, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6)`}}>
<div className="max-w-7xl mx-auto">
<div className="divider mb-12"></div>
<div className="grid md:grid-cols-4 gap-8 mb-12">
<div className="">
<div className="flex items-center space-x-2 mb-4">
<svg className="w-6 h-6" fill="none" stroke="#1f2937" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transform: `rotate(180deg)`}} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
<g>
<path d="M16 48v-32a12 12 0 0 1 24 0v32"></path>
<path d="M40 48v-32a12 12 0 0 0-24 0v32"></path>
<line x1="16" x2="40" y1="48" y2="48"></line>
<line x1="16" x2="40" y1="32" y2="32"></line>
<line x1="28" x2="28" y1="16" y2="48"></line>
<line x1="28" x2="36" y1="16" y2="16"></line>
<line x1="28" x2="36" y1="48" y2="48"></line>
</g>
</svg>
<span className="header-font text-lg font-semibold text-gray-900 font-manrope">Pollux</span>
</div>
<p className="text-gray-600 body-font font-manrope">
            Simplifying business operations for teams worldwide.
          </p>
</div>
<div className="">
<h4 className="font-semibold text-gray-900 mb-4 header-font font-poppins">Product</h4>
<ul className="space-y-2">
<li><a className="text-gray-600 hover:text-gray-900 transition-colors body-font font-manrope" href="#">Features</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors body-font font-manrope" href="#">Pricing</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors body-font font-manrope" href="#">Integrations</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors body-font font-manrope" href="#">API</a></li>
</ul>
</div>
<div className="">
<h4 className="font-semibold text-gray-900 mb-4 header-font font-poppins">Company</h4>
<ul className="space-y-2">
<li><a className="text-gray-600 hover:text-gray-900 transition-colors body-font font-manrope" href="#">About</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors body-font font-manrope" href="#">Blog</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors body-font font-manrope" href="#">Careers</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors body-font font-manrope" href="#">Contact</a></li>
</ul>
</div>
<div className="">
<h4 className="font-semibold text-gray-900 mb-4 header-font font-poppins">Support</h4>
<ul className="space-y-2">
<li><a className="text-gray-600 hover:text-gray-900 transition-colors body-font font-manrope" href="#">Help Center</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors body-font font-manrope" href="#">Documentation</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors body-font font-manrope" href="#">Status</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors body-font font-manrope" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="divider mb-8"></div>
<div className="flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-600 body-font font-manrope">
          © 2024 Pollux. All rights reserved.
        </p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="text-gray-600 hover:text-gray-900 transition-colors body-font font-manrope" href="#">Privacy Policy</a>
<a className="text-gray-600 hover:text-gray-900 transition-colors body-font font-manrope" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
