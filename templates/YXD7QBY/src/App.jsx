import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
  }, []);

  return (
    <>
      

<canvas height="1185" style={{display: 'block', width: '2065px', height: '1185px', opacity: '0.25'}} width="2065"></canvas><canvas height="1185" style={{display: 'block', width: '2065px', height: '1185px', opacity: '0.25'}} width="2065"></canvas><canvas height="1185" style={{display: 'block', width: '2065px', height: '1185px', opacity: '0.25'}} width="2065"></canvas><canvas height="1185" style={{display: 'block', width: '2065px', height: '1185px', opacity: '0.25'}} width="2065"></canvas><canvas height="1185" style={{display: 'block', width: '2065px', height: '1185px', opacity: '0.25'}} width="2065"></canvas><canvas height="1185" style={{display: 'block', width: '2065px', height: '1185px', opacity: '0.25'}} width="2065"></canvas><canvas height="1185" style={{display: 'block', width: '2065px', height: '1185px', opacity: '0.25'}} width="2065"></canvas><canvas height="1185" style={{display: 'block', width: '2065px', height: '1185px', opacity: '0.25'}} width="2065"></canvas><canvas height="1185" style={{display: 'block', width: '2065px', height: '1185px', opacity: '0.25'}} width="2065"></canvas><canvas height="1185" style={{display: 'block', width: '2065px', height: '1185px', opacity: '0.25'}} width="2065"></canvas><canvas height="1185" style={{display: 'block', width: '2065px', height: '1185px', opacity: '0.25'}} width="2065"></canvas><canvas height="1185" style={{display: 'block', width: '2065px', height: '1185px', opacity: '0.25'}} width="2065"></canvas><canvas height="1185" style={{display: 'block', width: '2065px', height: '1185px', opacity: '0.25'}} width="2065"></canvas><canvas height="1185" style={{display: 'block', width: '2065px', height: '1185px', opacity: '0.25'}} width="2065"></canvas><canvas height="1185" style={{display: 'block', width: '2065px', height: '1185px', opacity: '0.25'}} width="2065"></canvas><canvas height="1185" style={{display: 'block', width: '2065px', height: '1185px', opacity: '0.25'}} width="2065"></canvas><canvas height="1185" style={{display: 'block', width: '2065px', height: '1185px', opacity: '0.25'}} width="2065"></canvas><canvas height="1185" style={{display: 'block', width: '2065px', height: '1185px', opacity: '0.25'}} width="2065"></canvas><canvas height="1185" style={{display: 'block', width: '2065px', height: '1185px', opacity: '0.25'}} width="2065"></canvas><canvas height="1185" style={{display: 'block', width: '2065px', height: '1185px', opacity: '0.25'}} width="2065"></canvas><canvas height="1185" style={{display: 'block', width: '2065px', height: '1185px', opacity: '0.25'}} width="2065"></canvas><canvas height="1185" style={{display: 'block', width: '2065px', height: '1185px', opacity: '0.25'}} width="2065"></canvas><canvas height="1185" style={{display: 'block', width: '2065px', height: '1185px', opacity: '0.25'}} width="2065"></canvas><canvas height="1185" style={{display: 'block', width: '2065px', height: '1185px', opacity: '0.25'}} width="2065"></canvas><canvas height="1185" style={{display: 'block', width: '2065px', height: '1185px', opacity: '0.25'}} width="2065"></canvas><canvas height="1185" style={{display: 'block', width: '2065px', height: '1185px', opacity: '0.25'}} width="2065"></canvas><canvas height="1185" style={{display: 'block', width: '2065px', height: '1185px', opacity: '0.25'}} width="2065"></canvas><canvas height="1185" style={{display: 'block', width: '2065px', height: '1185px', opacity: '0.25'}} width="2065"></canvas>

<nav className="relative z-10 w-full pt-4 pr-6 pb-4 pl-6">
<div className="max-w-7xl flex mr-auto ml-auto items-center justify-between">
<div className="flex space-x-2 items-center" style={{userSelect: 'none'}}>
<div className="flex items-center justify-center" style={{position: 'relative', overflow: 'visible'}}>
<svg className="w-[24px] h-[24px]" fill="none" stroke="#9333ea" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transform: 'rotate(180deg)', width: '24px', height: '24px', color: 'rgb(31, 41, 55)'}} viewbox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
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
<span className="header-font select-text text-lg font-semibold text-gray-900 tracking-tight font-manrope" style={{userSelect: 'text'}}>Pollux</span>
</div>

<div className="hidden md:flex items-center space-x-6">
<div className="group relative">
<button className="text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center font-manrope" style={{}}>
            Solutions <svg className="lucide lucide-chevron-down w-4 h-4 ml-1" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
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
<a className="text-gray-600 hover:text-gray-900 text-sm font-manrope" href="#" style={{}}>Support &amp; Implementation</a>
<div className="group relative">
<button className="text-gray-600 hover:text-gray-900 text-sm flex items-center font-manrope" style={{}}>
            Company <svg className="lucide lucide-chevron-down w-4 h-4 ml-1" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
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
<svg className="lucide lucide-sparkles w-4 h-4 text-indigo-500" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
<span className="text-gray-700 font-manrope" style={{}}>Introducing Pollux 2.0 – Now with advanced automation</span>
<svg className="lucide lucide-arrow-right w-4 h-4 text-gray-500" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
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
<svg className="lucide lucide-chevron-down animate-bounce w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
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
<svg className="lucide lucide-link-2-off w-5 h-5 text-indigo-500" data-lucide="link-2-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17H7A5 5 0 0 1 7 7"></path><path d="M15 7h2a5 5 0 0 1 4 8"></path><line x1="8" x2="12" y1="12" y2="12"></line><line x1="2" x2="22" y1="2" y2="22"></line></svg>
<span className="font-manrope" style={{}}>Too many systems that don't talk to each other</span>
</li>
<li className="flex items-start space-x-3">
<svg className="lucide lucide-credit-card w-5 h-5 text-indigo-500" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
<span className="font-manrope" style={{}}>Paying for tools you don't understand</span>
</li>
<li className="flex items-start space-x-3">
<svg className="lucide lucide-alert-triangle w-5 h-5 text-indigo-500" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
<span className="font-manrope" style={{}}>Worried about losing control or overspending</span>
</li>
<li className="flex items-start space-x-3">
<svg className="lucide lucide-x-circle w-5 h-5 text-indigo-500" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="font-manrope" style={{}}>Nothing works the way it should</span>
</li>
</ul>
</div>
</div>
</section>
<div className="divider"></div>

<section className="relative z-10 pt-24 pr-6 pb-24 pl-6">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl header-font tracking-tight mb-12 font-poppins font-medium" style={{}}>
        Getting started with Pollux is this easy
      </h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="glass-card rounded-2xl pt-8 pr-8 pb-8 pl-8" style={{background: 'rgba(255, 255, 255, 0.35)', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)', boxShadow: '0 10px 40px rgba(31, 38, 135, 0.12), 0 4px 12px rgba(31, 38, 135, 0.07), inset 0 1px 0 rgba(255, 255, 255, 0.8)'}}>
<div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
<svg className="lucide lucide-phone-call w-5 h-5 text-blue-500" data-lucide="phone-call" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<h3 className="text-lg header-font mb-2 font-manrope" style={{}}>Schedule a call</h3>
<p className="text-gray-700 text-sm body-font font-manrope" style={{}}>Let's learn your needs</p>
</div>
<div className="glass-card rounded-2xl p-8">
<div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-4">
<svg className="lucide lucide-flag w-5 h-5 text-purple-500" data-lucide="flag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path></svg>
</div>
<h3 className="text-lg header-font mb-2 font-manrope" style={{}}>Set goals together</h3>
<p className="text-gray-700 text-sm body-font font-manrope" style={{}}>We'll map the path</p>
</div>
<div className="glass-card rounded-2xl p-8">
<div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-4">
<svg className="lucide lucide-rocket w-5 h-5 text-green-500" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<h3 className="text-lg header-font mb-2 font-manrope" style={{}}>Launch quickly</h3>
<p className="text-gray-700 text-sm body-font font-manrope" style={{}}>With full support</p>
</div>
</div>
<p className="text-gray-700 text-lg body-font mt-12 font-manrope" style={{}}>
        One platform. No headaches. No complexity.
      </p>
</div>
</section>
<div className="divider"></div>

<section className="relative z-10 px-6 py-24">
<div className="max-w-6xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl header-font tracking-tight mb-12 font-poppins font-medium" style={{}}>
        Run your entire business from one platform
      </h2>
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
<div className="flex items-start space-x-3">
<svg className="lucide lucide-layers w-5 h-5 text-indigo-500" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<span className="font-manrope" style={{}}>Finances, sales, inventory all connected</span>
</div>
<div className="flex items-start space-x-3">
<svg className="lucide lucide-zap w-5 h-5 text-indigo-500" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="font-manrope" style={{}}>Automated workflows that actually work</span>
</div>
<div className="flex items-start space-x-3">
<svg className="lucide lucide-shield-check w-5 h-5 text-indigo-500" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-manrope" style={{}}>Enterprise-grade security built in</span>
</div>
<div className="flex items-start space-x-3">
<svg className="lucide lucide-trending-up w-5 h-5 text-indigo-500" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="font-manrope" style={{}}>Real-time insights and reporting</span>
</div>
<div className="flex items-start space-x-3">
<svg className="lucide lucide-users w-5 h-5 text-indigo-500" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="font-manrope" style={{}}>Team collaboration made simple</span>
</div>
<div className="flex items-start space-x-3">
<svg className="lucide lucide-smartphone w-5 h-5 text-indigo-500" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
<span className="font-manrope" style={{}}>Mobile-first design for on-the-go</span>
</div>
</div>
</div>
</section>
<div className="divider"></div>

<section className="relative z-10 px-6 py-24">
<div className="max-w-4xl mx-auto text-center">
<div className="frost-form rounded-3xl p-12">
<h2 className="text-3xl md:text-4xl header-font tracking-tight mb-6 font-poppins font-medium" style={{}}>
          Ready to simplify your business?
        </h2>
<p className="text-gray-700 text-lg body-font mb-8 max-w-2xl mx-auto font-manrope" style={{}}>
          Join thousands of businesses who've already made the switch to Pollux. Schedule a personalized demo and see how we can transform your operations.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
<button className="primary-button px-8 py-4 rounded-lg text-base min-w-48 font-manrope" style={{}}>Schedule Your Demo</button>
<button className="glass-button px-8 py-4 rounded-lg text-base min-w-48 font-manrope" style={{}}>Try Free for 14 Days</button>
</div>
<div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-check w-4 h-4 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-manrope" style={{}}>No credit card required</span>
</div>
<div className="flex items-center space-x-2">
<svg className="lucide lucide-check w-4 h-4 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-manrope" style={{}}>Setup in minutes</span>
</div>
<div className="flex items-center space-x-2">
<svg className="lucide lucide-check w-4 h-4 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-manrope" style={{}}>Cancel anytime</span>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 bg-white/30 pt-16 pr-6 pb-16 pl-6 backdrop-blur-md" style={{backgroundColor: 'rgba(255, 255, 255, 0.3)'}}>
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-4 gap-8 mb-12">
<div className="">
<div className="flex items-center space-x-2 mb-4">
<div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
<svg className="lucide lucide-app-window w-4 h-4 text-indigo-500" data-lucide="app-window" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="M10 4v4"></path><path d="M2 8h20"></path><path d="M6 4v4"></path></svg>
</div>
<span className="text-lg header-font tracking-tight font-manrope" style={{}}>Pollux</span>
</div>
<p className="text-gray-600 text-sm body-font font-manrope" style={{}}>
            Simplifying business operations for companies worldwide.
          </p>
</div>
<div className="">
<h3 className="header-font mb-4 font-manrope" style={{}}>Solutions</h3>
<div className="space-y-2">
<a className="block text-sm text-gray-600 hover:text-gray-900 font-manrope" href="#" style={{}}>Retail</a>
<a className="block text-sm text-gray-600 hover:text-gray-900 font-manrope" href="#" style={{}}>Wholesale</a>
<a className="block text-sm text-gray-600 hover:text-gray-900 font-manrope" href="#" style={{}}>Startups</a>
<a className="block text-sm text-gray-600 hover:text-gray-900 font-manrope" href="#" style={{}}>Services</a>
</div>
</div>
<div className="">
<h3 className="header-font mb-4 font-manrope" style={{}}>Company</h3>
<div className="space-y-2">
<a className="block text-sm text-gray-600 hover:text-gray-900 font-manrope" href="#" style={{}}>About Us</a>
<a className="block text-sm text-gray-600 hover:text-gray-900 font-manrope" href="#" style={{}}>Careers</a>
<a className="block text-sm text-gray-600 hover:text-gray-900 font-manrope" href="#" style={{}}>Blog</a>
<a className="block text-sm text-gray-600 hover:text-gray-900 font-manrope" href="#" style={{}}>Contact</a>
</div>
</div>
<div className="">
<h3 className="header-font mb-4 font-manrope" style={{}}>Support</h3>
<div className="space-y-2">
<a className="block text-sm text-gray-600 hover:text-gray-900 font-manrope" href="#" style={{}}>Help Center</a>
<a className="block text-sm text-gray-600 hover:text-gray-900 font-manrope" href="#" style={{}}>Documentation</a>
<a className="block text-sm text-gray-600 hover:text-gray-900 font-manrope" href="#" style={{}}>Implementation</a>
<a className="block text-sm text-gray-600 hover:text-gray-900 font-manrope" href="#" style={{}}>Status</a>
</div>
</div>
</div>
<div className="divider mb-8"></div>
<div className="flex flex-col md:flex-row justify-between items-center">
<p className="text-sm text-gray-600 body-font font-manrope" style={{}}>
          © 2025 Pollux. All rights reserved.
        </p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="text-sm text-gray-600 hover:text-gray-900 font-manrope" href="#" style={{}}>Privacy Policy</a>
<a className="text-sm text-gray-600 hover:text-gray-900 font-manrope" href="#" style={{}}>Terms of Service</a>
<a className="text-sm text-gray-600 hover:text-gray-900 font-manrope" href="#" style={{}}>Cookies</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
