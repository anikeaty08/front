import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('.page-section');
            const navLinks = document.querySelectorAll('.nav-link');
            const allLinks = document.querySelectorAll('a[href^="#"]');

            function showPage(hash) {
                if (!hash || hash === '#') hash = '#home';
                
                // Hide all sections
                sections.forEach(sec => {
                    sec.classList.add('hidden');
                    sec.classList.remove('block');
                });
                
                // Show target section
                const target = document.querySelector(hash);
                if (target) {
                    target.classList.remove('hidden');
                    target.classList.add('block');
                    window.scrollTo(0, 0);
                }

                // Update active state in navigation
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === hash) {
                        link.classList.add('text-zinc-900');
                        link.classList.remove('text-zinc-500');
                    } else {
                        link.classList.remove('text-zinc-900');
                        link.classList.add('text-zinc-500');
                    }
                });
            }

            // Handle all anchor clicks that start with '#'
            allLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    const hash = link.getAttribute('href');
                    if(hash.startsWith('#')) {
                        e.preventDefault();
                        history.pushState(null, null, hash);
                        showPage(hash);
                    }
                });
            });

            // Handle back/forward browser buttons
            window.addEventListener('popstate', () => {
                showPage(window.location.hash);
            });

            // Initialize correct page on load
            showPage(window.location.hash || '#home');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/60">
<div className="mx-auto max-w-5xl px-6 lg:px-8">
<div className="flex h-14 items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-lg font-semibold tracking-tighter text-zinc-900" href="#home">PRFL</a>
<nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-500">
<a className="nav-link hover:text-zinc-900 transition-colors text-zinc-900" href="#home">Home</a>
<a className="nav-link hover:text-zinc-900 transition-colors" href="#example">Profile Example</a>
<a className="nav-link hover:text-zinc-900 transition-colors" href="#timeline">Timeline</a>
<a className="nav-link hover:text-zinc-900 transition-colors" href="#feedback">Feedback</a>
<a className="nav-link hover:text-zinc-900 transition-colors" href="#contact">Contact</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors hidden sm:block" href="#">Log in</a>
<a className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 transition-colors" href="#">Get Started</a>
</div>
</div>
</div>
</header>
<main className="pt-20 flex-grow">

<section className="page-section relative overflow-hidden py-24 sm:py-32 block" id="home">
<div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
<div className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 mb-8 shadow-sm">
<iconify-icon className="mr-2 text-zinc-400" icon="solar:star-fall-linear"></iconify-icon>
                    Now available for high school and college students
                </div>
<h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-6xl">
                    Compile your life's curriculum in one place.
                </h1>
<p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-500">
                    Track your classes, extracurricular activities, and personal hobbies. Keep your journey private for personal reflection, or make it public to discover peers with shared interests.
                </p>
<div className="mt-10 flex items-center justify-center gap-x-6">
<a className="page-link inline-flex items-center justify-center rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 transition-colors" href="#example">
                        View an Example
                    </a>
<a className="page-link text-sm font-medium text-zinc-600 hover:text-zinc-900 flex items-center transition-colors" href="#timeline">
                        See our story <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="page-section py-24 bg-white border-y border-zinc-100 hidden" id="example">
<div className="mx-auto max-w-5xl px-6 lg:px-8">
<div className="mb-12 max-w-2xl">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Profile Example</h2>
<p className="mt-2 text-sm text-zinc-500">See how your information is organized. You control who sees what.</p>
</div>

<div className="rounded-xl border border-zinc-200 bg-[#FAFAFA] shadow-sm overflow-hidden">

<div className="bg-white p-8 border-b border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div className="flex items-center gap-5">
<div className="h-16 w-16 rounded-full bg-zinc-100 flex items-center justify-center border border-zinc-200">
<span className="text-xl font-medium text-zinc-500">AJ</span>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900">Alex Johnson</h3>
<p className="text-sm text-zinc-500 mt-1">Junior at Lincoln High • Aspiring Developer</p>
</div>
</div>

<div className="flex items-center space-x-3 bg-zinc-50 px-4 py-2 rounded-lg border border-zinc-200">
<iconify-icon className="text-zinc-400" icon="solar:lock-keyhole-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-500">Private</span>
<div className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-green-500">
<span className="pointer-events-none absolute left-0 inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition-transform duration-200 ease-in-out translate-x-4"></span>
</div>
<span className="text-xs font-medium text-zinc-900">Public</span>
<iconify-icon className="text-green-600 ml-1" icon="solar:earth-linear"></iconify-icon>
</div>
</div>

<div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">

<div>
<div className="flex items-center gap-2 mb-4 text-zinc-900">
<iconify-icon icon="solar:book-bookmark-linear"></iconify-icon>
<h4 className="text-sm font-semibold">Current Classes</h4>
</div>
<ul className="space-y-3">
<li className="flex items-center justify-between p-3 rounded-lg bg-white border border-zinc-100 shadow-sm">
<span className="text-sm text-zinc-700">AP Computer Science</span>
<span className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-700 rounded-md">STEM</span>
</li>
<li className="flex items-center justify-between p-3 rounded-lg bg-white border border-zinc-100 shadow-sm">
<span className="text-sm text-zinc-700">World History</span>
<span className="text-xs font-medium px-2 py-1 bg-amber-50 text-amber-700 rounded-md">Arts</span>
</li>
<li className="flex items-center justify-between p-3 rounded-lg bg-white border border-zinc-100 shadow-sm">
<span className="text-sm text-zinc-700">Physics Honors</span>
<span className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-700 rounded-md">STEM</span>
</li>
</ul>
</div>

<div>
<div className="flex items-center gap-2 mb-4 text-zinc-900">
<iconify-icon icon="solar:users-group-two-rounded-linear"></iconify-icon>
<h4 className="text-sm font-semibold">Activities</h4>
</div>
<ul className="space-y-3">
<li className="p-3 rounded-lg bg-white border border-zinc-100 shadow-sm">
<div className="text-sm font-medium text-zinc-900">Debate Club</div>
<div className="text-xs text-zinc-500 mt-1">Vice President • 2 years</div>
</li>
<li className="p-3 rounded-lg bg-white border border-zinc-100 shadow-sm">
<div className="text-sm font-medium text-zinc-900">Varsity Track &amp; Field</div>
<div className="text-xs text-zinc-500 mt-1">Sprinter • 3 years</div>
</li>
</ul>
</div>

<div>
<div className="flex items-center gap-2 mb-4 text-zinc-900">
<iconify-icon icon="solar:palette-linear"></iconify-icon>
<h4 className="text-sm font-semibold">Hobbies &amp; Interests</h4>
</div>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-xs font-medium text-zinc-600 shadow-sm">Photography</span>
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-xs font-medium text-zinc-600 shadow-sm">UI Design</span>
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-xs font-medium text-zinc-600 shadow-sm">Indie Music</span>
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-xs font-medium text-zinc-600 shadow-sm">Rock Climbing</span>
</div>
<div className="mt-6 p-4 rounded-lg bg-zinc-900 text-white">
<h5 className="text-xs font-medium mb-2 text-zinc-400">Match Potential</h5>
<p className="text-sm">You share <span className="font-semibold text-white">3 interests</span> with Alex. Connect to chat!</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section py-24 hidden" id="timeline">
<div className="mx-auto max-w-3xl px-6 lg:px-8">
<div className="mb-16 text-center">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Brand Timeline</h2>
<p className="mt-2 text-sm text-zinc-500">How we evolved to help you track your story.</p>
</div>
<div className="relative border-l border-zinc-200 ml-3 md:ml-0 space-y-12">
<div className="relative pl-8 md:pl-0">
<div className="md:hidden absolute left-0 top-1 h-2 w-2 -translate-x-[5px] rounded-full bg-zinc-900 ring-4 ring-white"></div>
<div className="md:grid md:grid-cols-5 md:gap-8 items-start">
<div className="hidden md:block col-span-1 text-right pt-1">
<span className="text-xs font-medium text-zinc-500">Aug 2023</span>
</div>
<div className="hidden md:block absolute left-1/5 top-2 h-2 w-2 -translate-x-1 rounded-full bg-zinc-300 ring-4 ring-[#FAFAFA]" style={{left: '20%'}}></div>
<div className="md:col-span-4">
<span className="md:hidden text-xs font-medium text-zinc-500 block mb-1">Aug 2023</span>
<h3 className="text-base font-medium text-zinc-900">The Idea is Born</h3>
<p className="mt-2 text-sm text-zinc-500">Realized students needed a centralized, low-pressure way to catalog their diverse experiences outside of traditional resumes.</p>
</div>
</div>
</div>
<div className="relative pl-8 md:pl-0">
<div className="md:hidden absolute left-0 top-1 h-2 w-2 -translate-x-[5px] rounded-full bg-zinc-900 ring-4 ring-white"></div>
<div className="md:grid md:grid-cols-5 md:gap-8 items-start">
<div className="hidden md:block col-span-1 text-right pt-1">
<span className="text-xs font-medium text-zinc-500">Jan 2024</span>
</div>
<div className="hidden md:block absolute left-1/5 top-2 h-2 w-2 -translate-x-1 rounded-full bg-zinc-300 ring-4 ring-[#FAFAFA]" style={{left: '20%'}}></div>
<div className="md:col-span-4">
<span className="md:hidden text-xs font-medium text-zinc-500 block mb-1">Jan 2024</span>
<h3 className="text-base font-medium text-zinc-900">Private Beta Launch</h3>
<p className="mt-2 text-sm text-zinc-500">Launched a local beta for 500 high school students. Focused entirely on the private tracking experience.</p>
</div>
</div>
</div>
<div className="relative pl-8 md:pl-0">
<div className="md:hidden absolute left-0 top-1 h-2 w-2 -translate-x-[5px] rounded-full bg-zinc-900 ring-4 ring-white"></div>
<div className="md:grid md:grid-cols-5 md:gap-8 items-start">
<div className="hidden md:block col-span-1 text-right pt-1">
<span className="text-xs font-medium text-zinc-500">May 2024</span>
</div>
<div className="hidden md:block absolute left-1/5 top-2 h-2 w-2 -translate-x-1 rounded-full bg-zinc-900 ring-4 ring-[#FAFAFA]" style={{left: '20%'}}></div>
<div className="md:col-span-4">
<span className="md:hidden text-xs font-medium text-zinc-500 block mb-1">May 2024</span>
<h3 className="text-base font-medium text-zinc-900">Public Discovery Feature</h3>
<p className="mt-2 text-sm text-zinc-500">Added granular privacy controls. Users can now choose to make specific interests public to find peers with similar hobbies.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section py-24 bg-zinc-900 text-white min-h-[calc(100vh-8.5rem)] hidden" id="feedback">
<div className="mx-auto max-w-5xl px-6 lg:px-8">
<div className="mb-12">
<h2 className="text-2xl font-semibold tracking-tight text-white">User Feedback</h2>
<p className="mt-2 text-sm text-zinc-400">Hear from students using the platform to connect and track.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-zinc-800/50 border border-zinc-700/50 rounded-2xl p-6 flex flex-col justify-between">
<p className="text-sm text-zinc-300 leading-relaxed">
                            "I used to lose track of all the random clubs I joined freshman year. Now everything is neatly organized. Making my love for obscure 80s movies public actually helped me find my current best friend."
                        </p>
<div className="mt-6 flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-medium">S</div>
<div>
<div className="text-sm font-medium text-white">Sarah Jenkins</div>
<div className="text-xs text-zinc-400">College Sophomore</div>
</div>
</div>
</div>

<div className="bg-zinc-800/50 border border-zinc-700/50 rounded-2xl p-6 flex flex-col justify-between">
<p className="text-sm text-zinc-300 leading-relaxed">
                            "I keep my profile 100% private. It serves as my personal diary for academic and extracurricular achievements. When it came time to write college applications, everything I needed was already written down."
                        </p>
<div className="mt-6 flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-medium">M</div>
<div>
<div className="text-sm font-medium text-white">Marcus T.</div>
<div className="text-xs text-zinc-400">High School Senior</div>
</div>
</div>
</div>

<div className="bg-zinc-800/50 border border-zinc-700/50 rounded-2xl p-6 flex flex-col justify-between">
<p className="text-sm text-zinc-300 leading-relaxed">
                            "The toggle between public and private is genius. I share my coding projects publicly to collaborate, but keep my grades and specific class schedules private. It feels much safer than other social networks."
                        </p>
<div className="mt-6 flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-medium">E</div>
<div>
<div className="text-sm font-medium text-white">Elena R.</div>
<div className="text-xs text-zinc-400">Computer Science Major</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section py-24 bg-white hidden" id="contact">
<div className="mx-auto max-w-5xl px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Get in touch</h2>
<p className="mt-4 text-sm text-zinc-500 leading-relaxed max-w-md">
                            Have questions about privacy settings, feature requests, or just want to say hello? Our team is always ready to hear from you.
                        </p>
<dl className="mt-10 space-y-6 text-sm text-zinc-600">
<div className="flex items-center gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-[#FAFAFA]">
<iconify-icon className="text-zinc-500 text-lg" icon="solar:letter-linear"></iconify-icon>
</div>
<dd>hello@prfl-app.com</dd>
</div>
<div className="flex items-center gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-[#FAFAFA]">
<iconify-icon className="text-zinc-500 text-lg" icon="solar:map-point-linear"></iconify-icon>
</div>
<dd>San Francisco, CA<br/>Remote First</dd>
</div>
</dl>
</div>

<div className="bg-[#FAFAFA] border border-zinc-200 rounded-2xl p-8">
<form action="#" className="space-y-6" method="POST">
<div>
<label className="block text-xs font-medium text-zinc-700" htmlFor="name">Full Name</label>
<div className="mt-2">
<input className="block w-full rounded-md border-0 py-2 px-3 text-sm text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-900 sm:text-sm sm:leading-6 bg-white outline-none" id="name" name="name" placeholder="Jane Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700" htmlFor="email">Email Address</label>
<div className="mt-2">
<input className="block w-full rounded-md border-0 py-2 px-3 text-sm text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-900 sm:text-sm sm:leading-6 bg-white outline-none" id="email" name="email" placeholder="jane@example.com" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700" htmlFor="message">Message</label>
<div className="mt-2">
<textarea className="block w-full rounded-md border-0 py-2 px-3 text-sm text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-900 sm:text-sm sm:leading-6 bg-white outline-none" id="message" name="message" placeholder="How can we help?" rows="4"></textarea>
</div>
</div>
<button className="w-full flex items-center justify-center rounded-md bg-zinc-900 px-3 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 transition-colors" type="submit">
                                Send Message
                            </button>
</form>
</div>
</div>
</div>
</section>
</main>
<footer className="bg-white border-t border-zinc-200 py-8 text-center mt-auto">
<p className="text-xs text-zinc-400 tracking-tight font-medium">© 2024 PRFL INC. ALL RIGHTS RESERVED.</p>
</footer>



    </>
  );
}
