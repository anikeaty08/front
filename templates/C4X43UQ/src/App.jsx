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
      

<header className="bg-white shadow">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="flex items-center">
<span className="text-indigo-600 font-extrabold text-2xl tracking-tight">Headscout AI</span>
</div>
<nav className="space-x-8 hidden md:flex">
<a className="text-gray-700 hover:text-indigo-600 font-medium" href="#features">Features</a>
<a className="text-gray-700 hover:text-indigo-600 font-medium" href="#team">Team</a>
<a className="text-gray-700 hover:text-indigo-600 font-medium" href="#waitlist">Early Access</a>
</nav>
</div>
</header>

<section className="bg-indigo-50 py-20">
<div className="max-w-4xl mx-auto px-6 text-center">
<h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        AI-Native Recruiting<br className="hidden md:block"/> for Tech Teams
      </h1>
<p className="text-xl md:text-2xl text-gray-700 mb-8">
        Cut hiring time from <span className="font-semibold text-indigo-600">months</span> to <span className="font-semibold text-indigo-600">weeks</span>.<br/>
        Automate 85% of repetitive recruitment tasks. Connect, engage, and hire top talent—all in one unified platform.
      </p>
<a className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-indigo-700 transition" href="#waitlist">
        Join Early Access Waitlist
      </a>
<div className="mt-8 flex justify-center items-center space-x-2 text-gray-500 text-sm">
<svg className="w-5 h-5 inline-block text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M13 16h-1v-4h-1m-1-4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        Now accepting early tech company adopters
      </div>
</div>
</section>

<section className="py-20" id="features">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Smarter, Faster Hiring</h2>
<div className="grid md:grid-cols-3 gap-10">
<div className="bg-white rounded-xl shadow p-8 flex flex-col items-center text-center">
<div className="bg-indigo-100 text-indigo-600 rounded-full p-3 mb-4">
<svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M8 7V3m8 4V3m-6 18h4a2 2 0 002-2v-5a2 2 0 00-2-2h-4a2 2 0 00-2 2v5a2 2 0 002 2zm0-9h.01" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<h3 className="font-semibold text-lg mb-2">Accelerated Hiring</h3>
<p className="text-gray-600">Reduce time to hire from months to weeks with intelligent automation and streamlined workflows.</p>
</div>
<div className="bg-white rounded-xl shadow p-8 flex flex-col items-center text-center">
<div className="bg-indigo-100 text-indigo-600 rounded-full p-3 mb-4">
<svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M15 17h5l-1.405-1.405M19 13V7a2 2 0 00-2-2h-5.586a1 1 0 00-.707.293l-7 7a1 1 0 000 1.414l7 7a1 1 0 001.414 0l7-7a1 1 0 00.293-.707V13" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<h3 className="font-semibold text-lg mb-2">Unified Platform</h3>
<p className="text-gray-600">Source, engage, track, and hire talent from a single platform—no more juggling multiple tools.</p>
</div>
<div className="bg-white rounded-xl shadow p-8 flex flex-col items-center text-center">
<div className="bg-indigo-100 text-indigo-600 rounded-full p-3 mb-4">
<svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<h3 className="font-semibold text-lg mb-2">Automate 85% of Tasks</h3>
<p className="text-gray-600">Let AI handle repetitive recruitment tasks so your team focuses on high-impact decisions and candidate experience.</p>
</div>
</div>
<div className="mt-16 text-center">
<span className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Built for fast-growing tech companies</span>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-5xl mx-auto px-6 text-center">
<h2 className="text-2xl font-bold mb-4 text-gray-900">Who We Serve</h2>
<p className="text-lg text-gray-700 mb-6">
        Headscout AI is purpose-built for early-stage startups and venture-backed tech companies making high-stakes, complex hires in engineering, product, and executive roles.
      </p>
<div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
<div className="bg-indigo-50 rounded-xl p-6 w-full md:w-1/3">
<h3 className="font-semibold text-indigo-600 mb-2">Tech Startups</h3>
<p className="text-gray-600">Move fast, hire smarter, and stay competitive in the race for top talent.</p>
</div>
<div className="bg-indigo-50 rounded-xl p-6 w-full md:w-1/3">
<h3 className="font-semibold text-indigo-600 mb-2">Venture-Backed Companies</h3>
<p className="text-gray-600">Scale teams efficiently and make high-impact executive and specialist hires with confidence.</p>
</div>
<div className="bg-indigo-50 rounded-xl p-6 w-full md:w-1/3">
<h3 className="font-semibold text-indigo-600 mb-2">Hiring for Engineering, Product &amp; Exec Roles</h3>
<p className="text-gray-600">Access and engage exceptional passive candidates who drive your company’s growth.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50" id="team">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet the Team</h2>
<div className="grid md:grid-cols-2 gap-10">

<div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow p-8">
<img alt="Grace Juba" className="w-24 h-24 rounded-full object-cover mb-4 md:mb-0 md:mr-8 border-4 border-indigo-100" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<div>
<h3 className="font-bold text-lg text-gray-900">Grace Juba</h3>
<p className="text-indigo-600 font-medium mb-2">Founder &amp; CEO</p>
<p className="text-gray-700 text-sm">
              Executive recruiter &amp; entrepreneur with a decade of experience placing 200+ leaders in fast-growing tech companies. Known for precision, speed, and delivering top-tier talent in engineering, product, and executive roles. Now merging deep recruiting expertise with AI to build Headscout AI.
            </p>
</div>
</div>

<div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow p-8">
<img alt="Jon Holland" className="w-24 h-24 rounded-full object-cover mb-4 md:mb-0 md:mr-8 border-4 border-indigo-100" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div>
<h3 className="font-bold text-lg text-gray-900">Jon Holland</h3>
<p className="text-indigo-600 font-medium mb-2">Advisor</p>
<p className="text-gray-700 text-sm">
              Strategic SaaS, finance, and operations leader. Scaled 10 early-stage companies (5 exits), raised $125M+, and built high-performing teams at Wells Fargo &amp; JPM Chase. Advisor and investor to multiple startups, with deep expertise in launching and scaling SaaS platforms.
            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-indigo-700" id="waitlist">
<div className="max-w-xl mx-auto px-6 text-center">
<h2 className="text-3xl font-bold text-white mb-4">Get Early Access</h2>
<p className="text-indigo-100 text-lg mb-8">
        Be among the first to transform your hiring process. Join the Headscout AI early access waitlist and hire smarter, faster.
      </p>
<form className="flex flex-col md:flex-row items-center justify-center gap-4">
<input className="px-4 py-3 rounded-lg focus:ring-2 focus:ring-indigo-300 border border-gray-200 w-full md:w-auto" placeholder="Your company email" required="" type="email"/>
<button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg hover:bg-indigo-50 transition" type="submit">
          Join Waitlist
        </button>
</form>
<p className="text-indigo-200 text-sm mt-4">We respect your privacy. No spam, ever.</p>
</div>
</section>

<footer className="bg-white border-t py-8">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
<div className="text-gray-600 text-sm mb-4 md:mb-0">© 2024 Headscout AI. All rights reserved.</div>
<div className="flex space-x-6 text-gray-400">
<a className="hover:text-indigo-600" href="mailto:hello@headscout.ai">Contact</a>
<a className="hover:text-indigo-600" href="#">Privacy Policy</a>
</div>
</div>
</footer>

    </>
  );
}
