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
      

<nav className="bg-blue-800 p-4 shadow-md">
<div className="container mx-auto flex justify-between items-center">
<div className="flex items-center space-x-2">
<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 2L2 7h20L12 2z"></path><path d="M2 7v13a2 2 0 002 2h16a2 2 0 002-2V7"></path><path d="M16 21v-4a4 4 0 00-8 0v4"></path></svg>
<span className="text-2xl font-bold text-white">BlueHire</span>
</div>
<div className="space-x-6">
<a className="text-white hover:underline font-medium" href="#jobs">Find Jobs</a>
<a className="text-white hover:underline font-medium" href="#hire">Hire Talent</a>
<a className="text-white hover:underline font-medium" href="#trust">Why Trust Us?</a>
<a className="bg-white text-blue-800 px-4 py-2 rounded font-semibold shadow hover:bg-blue-100" href="#">Sign In</a>
</div>
</div>
</nav>

<section className="container mx-auto py-16 flex flex-col md:flex-row items-center">
<div className="md:w-1/2 space-y-6">
<h1 className="text-5xl font-extrabold text-blue-900">Find Your Dream Job or Hire Top Talent</h1>
<p className="text-blue-700 text-lg">BlueHire connects trusted companies with skilled professionals across every industry. Secure opportunities and build your future with competitive packages.</p>
<div className="flex space-x-4">
<a className="bg-blue-700 text-white px-6 py-3 rounded font-semibold hover:bg-blue-800 shadow" href="#jobs">I'm Looking for a Job</a>
<a className="bg-white text-blue-800 px-6 py-3 rounded font-semibold border border-blue-800 hover:bg-blue-100 shadow" href="#hire">I'm Hiring</a>
</div>
<div className="flex items-center mt-6 space-x-2">
<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
<span className="font-medium text-blue-700">100% Verified Companies &amp; Job Listings</span>
</div>
</div>
<div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
<img alt="Professional Team" className="rounded-xl shadow-lg w-96" src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
</section>

<section className="container mx-auto py-10" id="jobs">
<div className="bg-blue-100 p-8 rounded-xl shadow-md flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
<form className="flex flex-wrap gap-4 w-full md:w-2/3">
<input className="flex-1 px-4 py-2 rounded border border-blue-300 focus:outline-blue-500" placeholder="Job title or keyword" type="text"/>
<input className="flex-1 px-4 py-2 rounded border border-blue-300 focus:outline-blue-500" placeholder="Location" type="text"/>
<select className="flex-1 px-4 py-2 rounded border border-blue-300 focus:outline-blue-500">
<option>All Fields</option>
<option>Software</option>
<option>Marketing</option>
<option>Finance</option>
<option>Healthcare</option>
<option>Design</option>
<option>Others</option>
</select>
<button className="bg-blue-700 text-white px-6 py-2 rounded font-semibold hover:bg-blue-800" type="submit">Search Jobs</button>
</form>
<a className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 shadow" href="#hire">Post a Job</a>
</div>
</section>

<section className="container mx-auto py-12">
<h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Featured Jobs</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg border-t-4 border-blue-700">
<h3 className="font-semibold text-xl mb-2">Full Stack Developer</h3>
<p className="text-blue-700 mb-1">TechNova Solutions</p>
<p className="text-blue-500 mb-2">Remote | $90,000 - $120,000</p>
<ul className="text-sm text-blue-900 mb-4">
<li>• React, Node.js, AWS</li>
<li>• 3+ years experience</li>
</ul>
<a className="text-blue-700 font-bold hover:underline" href="#">Apply Now</a>
</div>
<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg border-t-4 border-blue-700">
<h3 className="font-semibold text-xl mb-2">Marketing Manager</h3>
<p className="text-blue-700 mb-1">BrightMark Corp.</p>
<p className="text-blue-500 mb-2">New York, NY | $80,000 - $100,000</p>
<ul className="text-sm text-blue-900 mb-4">
<li>• Digital Campaigns, SEO</li>
<li>• 5+ years experience</li>
</ul>
<a className="text-blue-700 font-bold hover:underline" href="#">Apply Now</a>
</div>
<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg border-t-4 border-blue-700">
<h3 className="font-semibold text-xl mb-2">Financial Analyst</h3>
<p className="text-blue-700 mb-1">FinancePro Inc.</p>
<p className="text-blue-500 mb-2">San Francisco, CA | $75,000 - $95,000</p>
<ul className="text-sm text-blue-900 mb-4">
<li>• Excel, Financial Modeling</li>
<li>• 2+ years experience</li>
</ul>
<a className="text-blue-700 font-bold hover:underline" href="#">Apply Now</a>
</div>
</div>
<div className="text-center mt-8">
<a className="bg-blue-700 text-white px-6 py-2 rounded font-semibold hover:bg-blue-800" href="#">Browse All Jobs</a>
</div>
</section>

<section className="bg-blue-50 py-12" id="hire">
<div className="container mx-auto flex flex-col md:flex-row items-center">
<div className="md:w-1/2">
<img alt="Hire Talent" className="rounded-xl shadow-lg w-96 mx-auto" src="https://images.unsplash.com/photo-1556741533-f6acd6477fd4?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="md:w-1/2 md:pl-16 mt-10 md:mt-0">
<h2 className="text-3xl font-bold mb-4 text-blue-900">Looking to Hire?</h2>
<p className="text-blue-700 mb-6">Connect with thousands of verified professionals from every industry. Post jobs, review applications, and hire the best talent quickly and securely.</p>
<ul className="mb-6 space-y-2">
<li className="flex items-center"><svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>Access to a vast talent pool</li>
<li className="flex items-center"><svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>Easy job posting and candidate management</li>
<li className="flex items-center"><svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>Verified profiles and background checks</li>
</ul>
<a className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 shadow" href="#">Post a Job Now</a>
</div>
</div>
</section>

<section className="bg-white py-12" id="trust">
<div className="container mx-auto text-center">
<h2 className="text-3xl font-bold text-blue-900 mb-6">Why Trust BlueHire?</h2>
<div className="flex flex-col md:flex-row justify-center gap-8">
<div className="bg-blue-100 rounded-xl p-6 flex-1 shadow">
<svg className="w-10 h-10 mx-auto text-blue-600 mb-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 3"></path></svg>
<h3 className="font-semibold text-xl mb-2">Verified Jobs &amp; Companies</h3>
<p className="text-blue-700">We screen every employer and job listing to ensure authenticity and reliability.</p>
</div>
<div className="bg-blue-100 rounded-xl p-6 flex-1 shadow">
<svg className="w-10 h-10 mx-auto text-blue-600 mb-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><rect height="12" rx="2" width="20" x="2" y="6"></rect><path d="M2 10h20"></path></svg>
<h3 className="font-semibold text-xl mb-2">Secure &amp; Private</h3>
<p className="text-blue-700">Your data is encrypted and your privacy is our top priority at every step.</p>
</div>
<div className="bg-blue-100 rounded-xl p-6 flex-1 shadow">
<svg className="w-10 h-10 mx-auto text-blue-600 mb-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M12 19l7-7-7-7"></path><path d="M5 12h14"></path></svg>
<h3 className="font-semibold text-xl mb-2">Transparent Process</h3>
<p className="text-blue-700">No hidden fees, clear communication, and support available when you need it.</p>
</div>
</div>
</div>
</section>

<section className="container mx-auto py-12 text-center">
<h2 className="text-2xl font-bold text-blue-900 mb-4">Ready to take the next step?</h2>
<p className="text-blue-700 mb-6">Join BlueHire today and discover why thousands trust us to build their careers and teams.</p>
<a className="bg-blue-700 text-white px-10 py-4 rounded-lg font-bold hover:bg-blue-800 shadow" href="#">Get Started</a>
</section>

<footer className="bg-blue-800 py-6 mt-8">
<div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-white text-sm">
<div>© 2024 BlueHire. All Rights Reserved.</div>
<div className="space-x-4 mt-2 md:mt-0">
<a className="hover:underline" href="#">Privacy Policy</a>
<a className="hover:underline" href="#">Terms of Service</a>
<a className="hover:underline" href="#">Contact</a>
</div>
</div>
</footer>

    </>
  );
}
