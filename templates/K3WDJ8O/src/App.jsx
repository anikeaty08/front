import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="bg-neutral-900 rounded-2xl shadow-2xl w-full max-w-xl border border-neutral-800">

<div className="flex items-center px-4 py-2 border-b border-neutral-800 rounded-t-2xl bg-neutral-950">
<div className="flex space-x-2">
<div className="h-3 w-3 bg-red-400 rounded-full"></div>
<div className="h-3 w-3 bg-yellow-400 rounded-full"></div>
<div className="h-3 w-3 bg-green-400 rounded-full"></div>
</div>
<div className="flex-1 text-center font-semibold text-neutral-400 tracking-wide">sophielinnea.com</div>
<div className="w-8"></div>
</div>

<div className="p-8">
<div className="flex items-center space-x-4 mb-6">
<img alt="Avatar" className="w-14 h-14 rounded-full border border-neutral-800" src="https://i.pravatar.cc/64?img=49"/>
<div>
<h1 className="text-xl font-bold text-neutral-100">Sophie Linnea</h1>
<p className="text-neutral-400 text-sm">Product Designer</p>
</div>
</div>
<nav className="flex space-x-6 mb-8 text-neutral-400 text-sm font-medium">
<a className="hover:text-neutral-100" href="#about">About</a>
<a className="hover:text-neutral-100" href="#work">Work</a>
<a className="hover:text-neutral-100" href="#projects">Projects</a>
<a className="hover:text-neutral-100" href="#contact">Contact</a>
</nav>
<div className="border-b border-neutral-800 mb-6"></div>
<section className="mb-6" id="about">
<h2 className="text-neutral-100 font-semibold mb-1">About</h2>
<p className="text-neutral-400 text-sm">Designer building delightful, user-focused products. I love elegant interfaces &amp; smooth workflows.</p>
</section>
<div className="border-b border-neutral-800 mb-6"></div>
<section className="mb-6" id="work">
<h2 className="text-neutral-100 font-semibold mb-1">Work</h2>
<ul className="text-neutral-400 text-sm space-y-1">
<li>Senior Designer <span className="text-neutral-500">@ Linear</span> <span className="text-neutral-600">2022–Now</span></li>
<li>UI/UX Designer <span className="text-neutral-500">@ Framer</span> <span className="text-neutral-600">2020–22</span></li>
</ul>
</section>
<div className="border-b border-neutral-800 mb-6"></div>
<section className="mb-6" id="projects">
<h2 className="text-neutral-100 font-semibold mb-1">Projects</h2>
<ul className="text-neutral-400 text-sm space-y-1">
<li>TaskBoard – Task management tool</li>
<li>ColorSync – Figma color sync plugin</li>
</ul>
</section>
<div className="border-b border-neutral-800 mb-6"></div>
<section id="contact">
<h2 className="text-neutral-100 font-semibold mb-1">Contact</h2>
<div className="flex space-x-4 mt-2">
<a className="text-neutral-400 hover:text-neutral-100 underline" href="mailto:sophielinnea@email.com">Email</a>
<a className="text-neutral-400 hover:text-neutral-100 underline" href="#">LinkedIn</a>
<a className="text-neutral-400 hover:text-neutral-100 underline" href="#">Twitter</a>
</div>
</section>
</div>
</div>

    </>
  );
}
