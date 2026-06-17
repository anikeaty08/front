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
  


    lucide.createIcons({attrs:{strokeWidth:1.5}});
    document.getElementById('year').textContent=new Date().getFullYear();
  
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
      



<nav className="relative z-10 w-full px-6 py-4">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
<i className="w-4 h-4 text-indigo-500" data-lucide="app-window"></i>
</div>
<span className="text-lg font-medium header-font tracking-tight">Pollux</span>
</div>

<div className="hidden md:flex items-center space-x-6">
<div className="group relative">
<button className="text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center">
            Solutions <i className="w-4 h-4 ml-1" data-lucide="chevron-down"></i>
</button>
<div className="absolute left-0 top-full mt-3 hidden group-hover:block">
<div className="glass-card rounded-xl p-4 space-y-2 w-44">
<a className="block text-sm text-gray-700 hover:text-gray-900" href="#">Retail</a>
<a className="block text-sm text-gray-700 hover:text-gray-900" href="#">Wholesale</a>
<a className="block text-sm text-gray-700 hover:text-gray-900" href="#">Startups</a>
<a className="block text-sm text-gray-700 hover:text-gray-900" href="#">Services</a>
<a className="block text-sm text-gray-700 hover:text-gray-900" href="#">Government</a>
</div>
</div>
</div>
<a className="text-gray-600 hover:text-gray-900 text-sm" href="#">Early Access</a>
<a className="text-gray-600 hover:text-gray-900 text-sm" href="#">Pricing</a>
<a className="text-gray-600 hover:text-gray-900 text-sm" href="#">Support &amp; Implementation</a>
<div className="group relative">
<button className="text-gray-600 hover:text-gray-900 text-sm flex items-center">
            Company <i className="w-4 h-4 ml-1" data-lucide="chevron-down"></i>
</button>
<div className="absolute left-0 top-full mt-3 hidden group-hover:block">
<div className="glass-card rounded-xl p-4 space-y-2 w-36">
<a className="block text-sm text-gray-700 hover:text-gray-900" href="#">About Us</a>
<a className="block text-sm text-gray-700 hover:text-gray-900" href="#">Careers</a>
</div>
</div>
</div>
<a className="text-gray-600 hover:text-gray-900 text-sm" href="#">Blog</a>
</div>

<div className="flex items-center space-x-4">
<a className="hidden md:inline-block primary-button px-4 py-2 rounded-lg text-sm" href="#">Schedule a Demo</a>
<button className="glass-button px-4 py-2 rounded-lg text-sm">Log In</button>
</div>
</div>
</nav>
<div className="relative z-10 divider"></div>

<section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
<div className="max-w-6xl mx-auto">
<div className="mb-8">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold header-font tracking-tight mb-4">
          Simplicity is power
        </h1>
<h2 className="text-2xl md:text-3xl font-medium header-font tracking-tight text-gray-600 mb-4">
          Your business deserves better
        </h2>
<p className="text-lg md:text-xl text-gray-700 mx-auto max-w-3xl body-font">
          You’re growing, but your tools aren’t. Pollux unifies everything so you can stay focused on the work that matters.
        </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24">
<button className="primary-button px-6 py-3 rounded-lg text-sm min-w-40">Schedule a Demo</button>
<button className="secondary-button px-6 py-3 rounded-lg text-sm min-w-40">Get Started Today</button>
</div>
<div className="divider mb-12"></div>
</div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500">
<span className="text-sm mb-2">Discover More</span>
<i className="animate-bounce w-4 h-4" data-lucide="chevron-down"></i>
</div>
</section>

<section className="relative z-10 px-6 py-24">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold header-font tracking-tight mb-6">
          We’ve been there. That’s why we built Pollux
        </h2>
<p className="text-gray-700 body-font text-lg">
          We built a better platform – simple, modern, and actually helpful.
        </p>
</div>
<div>
<ul className="space-y-4">
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-indigo-500" data-lucide="link-2-off"></i>
<span>Too many systems that don’t talk to each other</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-indigo-500" data-lucide="credit-card"></i>
<span>Paying for tools you don’t understand</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-indigo-500" data-lucide="alert-triangle"></i>
<span>Worried about losing control or overspending</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-indigo-500" data-lucide="x-circle"></i>
<span>Nothing works the way it should</span>
</li>
</ul>
</div>
</div>
</section>
<div className="divider"></div>

<section className="relative z-10 px-6 py-24">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold header-font tracking-tight mb-12">
        Getting started with Pollux is this easy
      </h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="glass-card rounded-2xl p-8">
<div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
<i className="w-5 h-5 text-blue-500" data-lucide="phone-call"></i>
</div>
<h3 className="text-lg font-medium header-font mb-2">Schedule a call</h3>
<p className="text-gray-700 text-sm body-font">Let’s learn your needs</p>
</div>
<div className="glass-card rounded-2xl p-8">
<div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-4">
<i className="w-5 h-5 text-purple-500" data-lucide="flag"></i>
</div>
<h3 className="text-lg font-medium header-font mb-2">Set goals together</h3>
<p className="text-gray-700 text-sm body-font">We’ll map the path</p>
</div>
<div className="glass-card rounded-2xl p-8">
<div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-4">
<i className="w-5 h-5 text-green-500" data-lucide="rocket"></i>
</div>
<h3 className="text-lg font-medium header-font mb-2">Launch quickly</h3>
<p className="text-gray-700 text-sm body-font">With full support</p>
</div>
</div>
<p className="text-gray-700 text-lg body-font mt-12">
        One platform. No headaches. No complexity.
      </p>
</div>
</section>
<div className="divider"></div>

<section className="relative z-10 px-6 py-24">
<div className="max-w-6xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold header-font tracking-tight mb-12">
        Run your entire business from one platform
      </h2>
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-indigo-500" data-lucide="layers"></i>
<span>Finances, sales, inventory all connected</span>
</div>
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-indigo-500" data-lucide="zap"></i>
<span>Fast implementation</span>
</div>
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-indigo-500" data-lucide="badge-dollar-sign"></i>
<span>Transparent pricing</span>
</div>
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-indigo-500" data-lucide="helping-hand"></i>
<span>Real support from real people</span>
</div>
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-indigo-500" data-lucide="eye"></i>
<span>Easy to understand</span>
</div>
</div>
<button className="primary-button px-8 py-3 rounded-lg text-sm mt-12">
        Manage your business with clarity and ease
      </button>
</div>
</section>
<div className="divider"></div>

<section className="relative z-10 px-6 py-24">
<div className="max-w-6xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold header-font tracking-tight mb-12">
        Simple, transparent pricing
      </h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="glass-card rounded-2xl p-8 flex flex-col">
<h3 className="text-lg font-medium header-font mb-4">Starter</h3>
<p className="text-4xl font-semibold header-font mb-4">$29<span className="text-xl font-normal text-gray-600">/mo</span></p>
<ul className="space-y-2 text-left text-sm flex-1">
<li className="flex items-center"><i className="w-4 h-4 mr-2 text-green-500" data-lucide="check"></i>Up to 3 users</li>
<li className="flex items-center"><i className="w-4 h-4 mr-2 text-green-500" data-lucide="check"></i>Basic modules</li>
<li className="flex items-center"><i className="w-4 h-4 mr-2 text-green-500" data-lucide="check"></i>Email support</li>
</ul>
<button className="primary-button w-full py-2 rounded-lg text-sm mt-6">Choose Starter</button>
</div>
<div className="glass-card rounded-2xl p-8 flex flex-col border border-indigo-200">
<h3 className="text-lg font-medium header-font mb-4">Growth</h3>
<p className="text-4xl font-semibold header-font mb-4">$79<span className="text-xl font-normal text-gray-600">/mo</span></p>
<ul className="space-y-2 text-left text-sm flex-1">
<li className="flex items-center"><i className="w-4 h-4 mr-2 text-green-500" data-lucide="check"></i>Up to 10 users</li>
<li className="flex items-center"><i className="w-4 h-4 mr-2 text-green-500" data-lucide="check"></i>All modules</li>
<li className="flex items-center"><i className="w-4 h-4 mr-2 text-green-500" data-lucide="check"></i>Priority support</li>
</ul>
<button className="primary-button w-full py-2 rounded-lg text-sm mt-6">Choose Growth</button>
</div>
<div className="glass-card rounded-2xl p-8 flex flex-col">
<h3 className="text-lg font-medium header-font mb-4">Enterprise</h3>
<p className="text-4xl font-semibold header-font mb-4">Let’s Talk</p>
<ul className="space-y-2 text-left text-sm flex-1">
<li className="flex items-center"><i className="w-4 h-4 mr-2 text-green-500" data-lucide="check"></i>Unlimited users</li>
<li className="flex items-center"><i className="w-4 h-4 mr-2 text-green-500" data-lucide="check"></i>Custom modules</li>
<li className="flex items-center"><i className="w-4 h-4 mr-2 text-green-500" data-lucide="check"></i>Dedicated manager</li>
</ul>
<button className="primary-button w-full py-2 rounded-lg text-sm mt-6">Contact Sales</button>
</div>
</div>
</div>
</section>
<div className="divider"></div>

<section className="relative z-10 px-6 py-24">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold header-font tracking-tight mb-8">
        Get in touch
      </h2>
<form className="glass-card rounded-2xl p-8 space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<input className="w-full px-4 py-3 rounded-lg bg-gray-100 placeholder-gray-400 focus:outline-none" placeholder="First Name" type="text"/>
<input className="w-full px-4 py-3 rounded-lg bg-gray-100 placeholder-gray-400 focus:outline-none" placeholder="Last Name" type="text"/>
</div>
<input className="w-full px-4 py-3 rounded-lg bg-gray-100 placeholder-gray-400 focus:outline-none" placeholder="Work Email" type="email"/>
<textarea className="w-full px-4 py-3 rounded-lg bg-gray-100 placeholder-gray-400 focus:outline-none" placeholder="How can we help?" rows="4"></textarea>
<button className="primary-button px-8 py-3 rounded-lg text-sm" type="submit">Send Message</button>
</form>
</div>
</section>

<footer className="relative z-10 px-6 py-16 bg-white/30 backdrop-blur">
<div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
<div className="space-y-4">
<h4 className="font-medium header-font">Sitemap</h4>
<nav className="space-y-2 text-sm">
<a className="block text-gray-600 hover:text-gray-900" href="#">Solutions</a>
<a className="block text-gray-600 hover:text-gray-900" href="#">Pricing</a>
<a className="block text-gray-600 hover:text-gray-900" href="#">Blog</a>
<a className="block text-gray-600 hover:text-gray-900" href="#">Support</a>
<a className="block text-gray-600 hover:text-gray-900" href="#">About Us</a>
<a className="block text-gray-600 hover:text-gray-900" href="#">Careers</a>
</nav>
</div>
<div className="space-y-4">
<h4 className="font-medium header-font">Legal</h4>
<nav className="space-y-2 text-sm">
<a className="block text-gray-600 hover:text-gray-900" href="#">Privacy Policy</a>
<a className="block text-gray-600 hover:text-gray-900" href="#">Terms of Use</a>
</nav>
</div>
<div className="space-y-4">
<h4 className="font-medium header-font">Contact</h4>
<p className="text-sm text-gray-600">hello@pollux.io<br/>+1 (555) 123-4567</p>
<div className="flex space-x-4">
<a href="#"><i className="w-4 h-4 text-gray-600 hover:text-gray-900" data-lucide="twitter"></i></a>
<a href="#"><i className="w-4 h-4 text-gray-600 hover:text-gray-900" data-lucide="linkedin"></i></a>
<a href="#"><i className="w-4 h-4 text-gray-600 hover:text-gray-900" data-lucide="github"></i></a>
</div>
</div>
<div className="space-y-4">
<h4 className="font-medium header-font">Start today</h4>
<p className="text-sm text-gray-600">Experience simplicity at scale.</p>
<button className="primary-button px-6 py-3 rounded-lg text-sm">Schedule a Demo</button>
</div>
</div>
<div className="divider my-12"></div>
<p className="text-center text-xs text-gray-500">© <span id="year"></span> Pollux. All rights reserved.</p>
</footer>


    </>
  );
}
