import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Mobile nav
    menuBtn.addEventListener('click',()=>mobileNav.classList.remove('hidden'));
    closeMenu.addEventListener('click',()=>mobileNav.classList.add('hidden'));

    // Icons
    lucide.createIcons();

    // Particles
    particlesJS('particles-js',{
      particles:{number:{value:60,density:{enable:true,value_area:800}},
      color:{value:"#3b82f6"},shape:{type:"circle"},
      opacity:{value:0.2},size:{value:2,random:true},
      line_linked:{enable:true,distance:150,color:"#3b82f6",opacity:0.35,width:1},
      move:{enable:true,speed:1.4,out_mode:"out"}},
      interactivity:{events:{onhover:{enable:true,mode:"grab"}}},
      retina_detect:true
    });

    // 3-D logo
    const logo=document.getElementById('logo');
    window.addEventListener('mousemove',e=>{
      const{innerWidth:w,innerHeight:h}=window;
      const x=(e.clientX-w/2)/(w/2),
            y=(e.clientY-h/2)/(h/2);
      logo.style.transform=`rotateY(${x*12}deg) rotateX(${y*-12}deg)`;
    });
    window.addEventListener('mouseleave',()=>logo.style.transform='rotateY(0deg) rotateX(0deg)');
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md/5">
<div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
<a className="text-2xl font-semibold tracking-tight hover:opacity-90 transition" href="#">BASIS</a>
<nav className="hidden md:flex gap-10 text-sm font-medium">
<a className="group" href="#">Products<span className="block h-px w-0 bg-blue-500 transition-all group-hover:w-full"></span></a>
<a className="group" href="#">Science<span className="block h-px w-0 bg-blue-500 transition-all group-hover:w-full"></span></a>
<a className="group" href="#">Stories<span className="block h-px w-0 bg-blue-500 transition-all group-hover:w-full"></span></a>
</nav>
<button className="md:hidden p-2" id="menuBtn"><i className="w-6 h-6" data-lucide="menu"></i></button>
</div>

<div className="fixed inset-0 bg-black/90 backdrop-blur-md flex-col items-center justify-center gap-10 text-xl font-medium hidden" id="mobileNav">
<button className="absolute top-6 right-6 p-2" id="closeMenu"><i className="w-7 h-7" data-lucide="x"></i></button>
<a className="hover:text-sky-400" href="#" style={{animation: 'riseFade .4s .05s both'}}>Products</a>
<a className="hover:text-sky-400" href="#" style={{animation: 'riseFade .4s .15s both'}}>Science</a>
<a className="hover:text-sky-400" href="#" style={{animation: 'riseFade .4s .25s both'}}>Stories</a>
</div>
</header>

<section className="relative flex flex-col items-center justify-center text-center min-h-screen pt-32 px-6">
<div className="absolute inset-0 -z-10" id="particles-js"></div>
<h1 className="select-none text-[clamp(64px,14vw,200px)] font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-sky-300 via-sky-400 to-blue-600" id="logo" style={{animation: 'neonPulse 7s ease-in-out infinite, riseFade .8s .1s both'}}>
      BASIS
    </h1>
<p className="max-w-xl mt-8 leading-relaxed text-sky-200/90 text-lg" style={{animation: 'riseFade .8s .3s both'}}>
      Precision skincare, powered by biomechanics &amp; performance science.
    </p>
</section>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
<p className="text-sm text-gray-400">© 2024 Basis Labs. All rights reserved.</p>
<nav className="flex gap-8 text-sm text-gray-300">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
<a className="hover:text-white" href="#">Support</a>
</nav>
</div>
</footer>


    </>
  );
}
