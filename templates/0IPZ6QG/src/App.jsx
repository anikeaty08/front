import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="spline-container">
<iframe frameborder="0" height="100%" src="https://my.spline.design/aiwavebg-327d5f7b0b2d4f71a1c2e9a1b3a1b9e2/" width="100%"></iframe>
</div>

<nav className="container mx-auto px-6 py-6 content">
<div className="flex items-center justify-between">
<div className="flex items-center">
<svg className="h-8 w-8 text-indigo-400" fill="currentColor" viewbox="0 0 32 32">
<path d="M16 3C9.373 3 4 8.373 4 15s5.373 12 12 12 12-5.373 12-12S22.627 3 16 3zm0 21c-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9-4.029 9-9 9z"></path>
<circle className="text-purple-400" cx="16" cy="15" fill="currentColor" r="5"></circle>
</svg>
<span className="ml-3 text-2xl tracking-tight font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Peltekci<span className="font-light">.com</span></span>
</div>
<div className="hidden md:flex space-x-10 text-sm">
<a className="hover:text-indigo-300 transition-colors" href="#work">Work</a>
<a className="hover:text-indigo-300 transition-colors" href="#services">Services</a>
<a className="hover:text-indigo-300 transition-colors" href="#about">About</a>
<a className="hover:text-indigo-300 transition-colors" href="#contact">Contact</a>
</div>
<div>
<a className="text-sm border border-indigo-500/30 rounded-md px-4 py-2 hover:bg-indigo-500/10 transition-all" href="#contact">
          Get in Touch
        </a>
</div>
</div>
</nav>
<div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent content"></div>

<section className="relative overflow-hidden">
<div className="container mx-auto px-6 py-16 md:py-32 content">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">

<div className="mb-12">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter mb-6 leading-tight">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 font-bold">AI Solutions</span>
<span className="block">for a Smarter Tomorrow</span>
</h1>
<p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-extralight tracking-wide">
            Peltekci.com empowers businesses with cutting-edge artificial intelligence, automation, and data-driven products that drive real impact.
          </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="bg-white text-black font-light rounded-md px-6 py-3 hover:bg-opacity-90 transition-all" href="#work">
              Explore Our Work
            </a>
<a className="bg-transparent border border-indigo-500/30 rounded-md px-6 py-3 hover:bg-indigo-500/10 transition-all" href="#services">
              Discover Services
            </a>
</div>
</div>
</div>
<div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent my-16"></div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-20" id="services">
<div>
<p className="text-2xl font-light mb-1 tracking-tight">AI Consulting</p>
<p className="text-gray-400 font-extralight">Strategy &amp; roadmap for AI transformation</p>
</div>
<div>
<p className="text-2xl font-light mb-1 tracking-tight">Custom AI Solutions</p>
<p className="text-gray-400 font-extralight">Tailored machine learning &amp; automation</p>
</div>
<div>
<p className="text-2xl font-light mb-1 tracking-tight">Data Engineering</p>
<p className="text-gray-400 font-extralight">Data pipelines, analytics, and insights</p>
</div>
<div>
<p className="text-2xl font-light mb-1 tracking-tight">AI Integration</p>
<p className="text-gray-400 font-extralight">Seamless deployment with your tools</p>
</div>
</div>
</div>
</section>

<section className="content container mx-auto px-6 py-20" id="work">
<h2 className="text-3xl md:text-5xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
      Recent Projects
    </h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white/5 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
<h3 className="text-xl font-semibold mb-2 text-indigo-300">Smart Retail Analytics</h3>
<p className="text-gray-300 font-light mb-3">AI-powered insights increase in-store sales by 21% for a national retailer.</p>
<span className="text-xs text-indigo-400">Computer Vision · Predictive Analytics</span>
</div>
<div className="bg-white/5 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
<h3 className="text-xl font-semibold mb-2 text-indigo-300">Automated Support Chatbot</h3>
<p className="text-gray-300 font-light mb-3">24/7 multilingual assistance reduced response time by 73% for a SaaS provider.</p>
<span className="text-xs text-indigo-400">NLP · Automation</span>
</div>
<div className="bg-white/5 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
<h3 className="text-xl font-semibold mb-2 text-indigo-300">Predictive Maintenance</h3>
<p className="text-gray-300 font-light mb-3">IoT + ML reduced downtime by 40% for a manufacturing partner.</p>
<span className="text-xs text-indigo-400">IoT · Machine Learning</span>
</div>
</div>
</section>

<section className="content container mx-auto px-6 py-20" id="about">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
        About Peltekci.com
      </h2>
<p className="text-gray-300 text-xl font-light mb-4">
        We are a team of AI engineers, data scientists, and product designers dedicated to building reliable, scalable, and ethical AI that gives your business a competitive edge.
      </p>
<p className="text-gray-400 font-extralight">
        From ideation to deployment, we deliver end-to-end solutions that transform industries and empower people. Let's shape the future, together.
      </p>
</div>
</section>

<section className="content container mx-auto px-6 py-20" id="contact">
<div className="max-w-xl mx-auto bg-white/5 rounded-lg p-10 text-center shadow-lg">
<h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
        Get in Touch
      </h2>
<p className="text-gray-300 mb-8 font-light">Ready to start your AI journey? Let’s talk about how Peltekci.com can help.</p>
<form className="space-y-5">
<input className="w-full px-4 py-3 rounded bg-black/60 border border-indigo-500/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" placeholder="Your Name" type="text"/>
<input className="w-full px-4 py-3 rounded bg-black/60 border border-indigo-500/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" placeholder="Email Address" type="email"/>
<textarea className="w-full px-4 py-3 rounded bg-black/60 border border-indigo-500/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" placeholder="How can we help you?" rows="4"></textarea>
<button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-md px-6 py-3 hover:opacity-90 transition-all" type="submit">
          Send Message
        </button>
</form>
</div>
</section>
<footer className="content container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
<div className="mb-4 md:mb-0">
      © 2024 Peltekci.com. All rights reserved.
    </div>
<div>
<a className="hover:text-indigo-400 transition-colors" href="mailto:hello@peltekci.com">hello@peltekci.com</a>
</div>
</footer>

    </>
  );
}
