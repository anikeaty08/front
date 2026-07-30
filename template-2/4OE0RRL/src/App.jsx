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
      
    // Smooth scroll for anchor links
    document.addEventListener("DOMContentLoaded", function() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });
    });
  


      // Mobile menu toggle
      document.addEventListener('DOMContentLoaded', function() {
        const menuBtn = document.getElementById('menuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        menuBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
        document.querySelectorAll('#mobileMenu a').forEach(link => {
          link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
        });
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
      

<header className="fixed w-full z-30 bg-gray-950/80 backdrop-blur-sm shadow transition-all">
<nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-2">
<span className="inline-block bg-teal-500 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl">JD</span>
<span className="text-xl font-bold tracking-tight text-teal-400">John Doe</span>
</div>
<ul className="hidden md:flex gap-6 font-semibold text-gray-200 text-sm uppercase">
<li><a className="hover:text-teal-400 transition" href="#home">Home</a></li>
<li><a className="hover:text-teal-400 transition" href="#about">About</a></li>
<li><a className="hover:text-teal-400 transition" href="#skills">Skills</a></li>
<li><a className="hover:text-teal-400 transition" href="#projects">Projects</a></li>
<li><a className="hover:text-teal-400 transition" href="#certificates">Certificates</a></li>
<li><a className="hover:text-teal-400 transition" href="#resume">Resume</a></li>
<li><a className="hover:text-teal-400 transition" href="#contact">Contact</a></li>
</ul>

<button className="md:hidden text-teal-400 text-2xl focus:outline-none" id="menuBtn">
<i className="fas fa-bars"></i>
</button>
</nav>

<div className="hidden md:hidden bg-gray-950/95" id="mobileMenu">
<ul className="flex flex-col items-center gap-4 py-4">
<li><a className="hover:text-teal-400 transition" href="#home">Home</a></li>
<li><a className="hover:text-teal-400 transition" href="#about">About</a></li>
<li><a className="hover:text-teal-400 transition" href="#skills">Skills</a></li>
<li><a className="hover:text-teal-400 transition" href="#projects">Projects</a></li>
<li><a className="hover:text-teal-400 transition" href="#certificates">Certificates</a></li>
<li><a className="hover:text-teal-400 transition" href="#resume">Resume</a></li>
<li><a className="hover:text-teal-400 transition" href="#contact">Contact</a></li>
</ul>
</div>

</header>
<main className="pt-20">

<section className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 min-h-[70vh] py-16 md:py-24 animate-fadeIn" id="home">
<div className="flex-1 text-center md:text-left">
<h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Hi, I'm <span className="text-teal-400">John Doe</span>
</h1>
<h2 className="text-xl md:text-2xl font-semibold text-gray-300 mb-6">
          Full Stack Developer & Problem Solver
        </h2>
<p className="text-gray-400 max-w-md mb-8">Building modern web experiences with passion for clean code, creative design, and impactful solutions.</p>
<a className="inline-block px-7 py-3 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-lg shadow transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2" href="#resume">
          View Resume
        </a>
</div>
<div className="flex-1 flex justify-center">
<img alt="Avatar" className="w-48 h-48 rounded-full object-cover border-4 border-teal-500 shadow-lg hover:scale-105 transition-transform duration-300" src="https://randomuser.me/api/portraits/men/32.jpg" />
</div>
</section>

<section className="max-w-4xl mx-auto px-4 py-16 animate-fadeInUp" id="about">
<h2 className="text-3xl font-bold text-teal-400 mb-6">About Me</h2>
<div className="bg-gray-800/70 rounded-xl p-8 shadow-lg">
<p className="text-gray-300 text-lg mb-4">
          I'm a passionate developer with a background in Computer Science. Graduated from <span className="text-teal-300">ABC University</span>, I interned at <span className="text-teal-300">TechCorp</span> where I worked on scalable web applications. I love coding, learning new technologies, and collaborating on open-source. In my free time, I enjoy hiking, indie music, and competitive programming.
        </p>
<ul className="flex flex-wrap gap-6 mt-4 text-teal-300 font-medium">
<li><i className="fas fa-graduation-cap mr-2"></i>B.Sc. Computer Science</li>
<li><i className="fas fa-briefcase mr-2"></i>Intern @ TechCorp</li>
<li><i className="fas fa-music mr-2"></i>Music Lover</li>
<li><i className="fas fa-code mr-2"></i>Open Source Enthusiast</li>
</ul>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 py-16 animate-fadeInUp" id="skills">
<h2 className="text-3xl font-bold text-teal-400 mb-8">Skills</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

<div className="bg-gray-800/70 rounded-xl p-6 shadow group hover:shadow-teal-500/30 transition-shadow duration-300">
<h3 className="text-xl font-semibold text-teal-300 mb-4">Programming Languages</h3>
<ul className="space-y-2 text-gray-300">
<li><i className="fab fa-js text-yellow-400 mr-2"></i>JavaScript (ES6+)</li>
<li><i className="fab fa-python text-blue-400 mr-2"></i>Python</li>
<li><i className="fab fa-java text-orange-400 mr-2"></i>Java</li>
<li><i className="fab fa-cuttlefish text-gray-400 mr-2"></i>C/C++</li>
</ul>
</div>

<div className="bg-gray-800/70 rounded-xl p-6 shadow group hover:shadow-teal-500/30 transition-shadow duration-300">
<h3 className="text-xl font-semibold text-teal-300 mb-4">Web Development</h3>
<ul className="space-y-2 text-gray-300">
<li><i className="fab fa-react text-cyan-400 mr-2"></i>React</li>
<li><i className="fab fa-node-js text-green-400 mr-2"></i>Node.js</li>
<li><i className="fab fa-html5 text-orange-500 mr-2"></i>HTML5</li>
<li><i className="fab fa-css3-alt text-blue-500 mr-2"></i>CSS3</li>
<li><i className="fab fa-github text-gray-400 mr-2"></i>REST APIs</li>
</ul>
</div>

<div className="bg-gray-800/70 rounded-xl p-6 shadow group hover:shadow-teal-500/30 transition-shadow duration-300">
<h3 className="text-xl font-semibold text-teal-300 mb-4">Tools</h3>
<ul className="space-y-2 text-gray-300">
<li><i className="fab fa-git-alt text-orange-500 mr-2"></i>Git & GitHub</li>
<li><i className="fas fa-terminal text-gray-400 mr-2"></i>Linux / CLI</li>
<li><i className="fas fa-database text-teal-400 mr-2"></i>MongoDB / SQL</li>
<li><i className="fas fa-cloud text-blue-400 mr-2"></i>Cloud (AWS/GCP)</li>
</ul>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 py-16 animate-fadeInUp" id="projects">
<h2 className="text-3xl font-bold text-teal-400 mb-8">Projects</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-gray-800/70 rounded-xl p-6 shadow-lg group hover:scale-[1.03] hover:shadow-teal-500/40 transition-transform duration-300">
<h3 className="text-xl font-semibold text-teal-300 mb-2">Portfolio Website</h3>
<p className="text-gray-400 mb-3">React, Tailwind CSS, Vercel</p>
<p className="text-gray-300 mb-4">A fully responsive, animated portfolio website to showcase my work and skills.</p>
<div className="flex gap-4">
<a className="px-4 py-2 bg-gray-900 rounded hover:bg-teal-500 hover:text-white group-hover:scale-110 transition" href="https://github.com/johndoe/portfolio" target="_blank">GitHub</a>
<a className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-400 group-hover:scale-110 transition" href="https://johndoe.dev" target="_blank">Demo</a>
</div>
</div>

<div className="bg-gray-800/70 rounded-xl p-6 shadow-lg group hover:scale-[1.03] hover:shadow-teal-500/40 transition-transform duration-300">
<h3 className="text-xl font-semibold text-teal-300 mb-2">Task Manager API</h3>
<p className="text-gray-400 mb-3">Node.js, Express, MongoDB</p>
<p className="text-gray-300 mb-4">RESTful API for managing tasks with JWT authentication and MongoDB persistence.</p>
<div className="flex gap-4">
<a className="px-4 py-2 bg-gray-900 rounded hover:bg-teal-500 hover:text-white group-hover:scale-110 transition" href="https://github.com/johndoe/task-manager" target="_blank">GitHub</a>
<a className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-400 group-hover:scale-110 transition" href="#">Demo</a>
</div>
</div>

</div>
</section>

<section className="max-w-6xl mx-auto px-4 py-16 animate-fadeInUp" id="certificates">
<h2 className="text-3xl font-bold text-teal-400 mb-8">Certificates</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<a className="group rounded-xl overflow-hidden shadow-lg border-2 border-gray-800 hover:border-teal-400 transition-all" href="https://via.placeholder.com/600x800" target="_blank">
<img alt="Certificate 1" className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300" src="https://via.placeholder.com/150x200?text=Cert+1" />
</a>
<a className="group rounded-xl overflow-hidden shadow-lg border-2 border-gray-800 hover:border-teal-400 transition-all" href="https://via.placeholder.com/600x800" target="_blank">
<img alt="Certificate 2" className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300" src="https://via.placeholder.com/150x200?text=Cert+2" />
</a>
<a className="group rounded-xl overflow-hidden shadow-lg border-2 border-gray-800 hover:border-teal-400 transition-all" href="https://via.placeholder.com/600x800" target="_blank">
<img alt="Certificate 3" className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300" src="https://via.placeholder.com/150x200?text=Cert+3" />
</a>
<a className="group rounded-xl overflow-hidden shadow-lg border-2 border-gray-800 hover:border-teal-400 transition-all" href="https://via.placeholder.com/600x800" target="_blank">
<img alt="Certificate 4" className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300" src="https://via.placeholder.com/150x200?text=Cert+4" />
</a>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 py-16 animate-fadeInUp" id="resume">
<h2 className="text-3xl font-bold text-teal-400 mb-8">Resume</h2>
<div className="flex flex-col md:flex-row gap-8">

<div className="flex-1 bg-gray-800/70 rounded-xl p-6 shadow">
<h3 className="text-xl font-semibold text-teal-300 mb-4">Education</h3>
<ul className="mb-6 text-gray-300">
<li>B.Sc. Computer Science - <span className="text-teal-400">ABC University</span><br /><span className="text-sm text-gray-400">2017-2021</span></li>
</ul>
<h3 className="text-xl font-semibold text-teal-300 mb-4">Experience</h3>
<ul className="text-gray-300">
<li>Intern, <span className="text-teal-400">TechCorp</span><br /><span className="text-sm text-gray-400">Summer 2020</span></li>
</ul>
</div>

<div className="flex-1 bg-gray-800/70 rounded-xl p-6 shadow">
<h3 className="text-xl font-semibold text-teal-300 mb-4">Personal Skills</h3>
<div className="mb-4">
<span className="text-gray-200">Communication</span>
<div className="flex items-center mt-1">
<span className="text-teal-400"><i className="fas fa-star"></i></span>
<span className="text-teal-400"><i className="fas fa-star"></i></span>
<span className="text-teal-400"><i className="fas fa-star"></i></span>
<span className="text-teal-400"><i className="fas fa-star"></i></span>
<span className="text-gray-500"><i className="fas fa-star"></i></span>
</div>
</div>
<div className="mb-4">
<span className="text-gray-200">Teamwork</span>
<div className="flex items-center mt-1">
<span className="text-teal-400"><i className="fas fa-star"></i></span>
<span className="text-teal-400"><i className="fas fa-star"></i></span>
<span className="text-teal-400"><i className="fas fa-star"></i></span>
<span className="text-teal-400"><i className="fas fa-star"></i></span>
<span className="text-teal-400"><i className="fas fa-star"></i></span>
</div>
</div>
<div className="mb-6">
<span className="text-gray-200">Problem Solving</span>
<div className="flex items-center mt-1">
<span className="text-teal-400"><i className="fas fa-star"></i></span>
<span className="text-teal-400"><i className="fas fa-star"></i></span>
<span className="text-teal-400"><i className="fas fa-star"></i></span>
<span className="text-teal-400"><i className="fas fa-star"></i></span>
<span className="text-teal-400"><i className="fas fa-star"></i></span>
</div>
</div>
<a className="inline-block px-6 py-3 bg-teal-500 text-white font-semibold rounded hover:bg-teal-400 transition" download="" href="/resume.pdf">Download Resume</a>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-4 py-16 animate-fadeInUp" id="contact">
<h2 className="text-3xl font-bold text-teal-400 mb-8">Contact</h2>
<div className="bg-gray-800/70 rounded-xl p-8 shadow-lg flex flex-col md:flex-row gap-8">

<form autocomplete="off" className="flex-1 flex flex-col gap-5">
<input className="bg-gray-900 text-gray-100 rounded px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:outline-none transition placeholder-gray-400" name="name" placeholder="Your Name" required type="text" />
<input className="bg-gray-900 text-gray-100 rounded px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:outline-none transition placeholder-gray-400" name="email" placeholder="Your Email" required type="email" />
<textarea className="bg-gray-900 text-gray-100 rounded px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:outline-none transition placeholder-gray-400" name="message" placeholder="Your Message" required rows="4"></textarea>
<button className="bg-teal-500 hover:bg-teal-400 text-white font-semibold py-3 rounded transition" type="submit">Send Message</button>
</form>

<div className="flex flex-col items-center gap-6 justify-center md:w-40">
<a className="text-teal-400 text-2xl hover:scale-110 hover:text-white transition" href="https://github.com/johndoe" target="_blank"><i className="fab fa-github"></i></a>
<a className="text-teal-400 text-2xl hover:scale-110 hover:text-white transition" href="https://linkedin.com/in/johndoe" target="_blank"><i className="fab fa-linkedin"></i></a>
<a className="text-teal-400 text-2xl hover:scale-110 hover:text-white transition" href="mailto:johndoe@email.com"><i className="fas fa-envelope"></i></a>
</div>
</div>
</section>
</main>

<footer className="bg-gray-950 py-6 mt-8">
<div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex gap-6 text-teal-400 text-lg">
<a className="hover:text-white transition" href="https://github.com/johndoe" target="_blank"><i className="fab fa-github"></i></a>
<a className="hover:text-white transition" href="https://linkedin.com/in/johndoe" target="_blank"><i className="fab fa-linkedin"></i></a>
<a className="hover:text-white transition" href="mailto:johndoe@email.com"><i className="fas fa-envelope"></i></a>
</div>
<div className="text-gray-500 text-sm text-center md:text-right">
        © 2024 John Doe. All rights reserved.
      </div>
</div>
</footer>



    </>
  );
}
