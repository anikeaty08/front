import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            // Name Validation
            const name = document.getElementById('name');
            const nameError = document.getElementById('nameError');
            if (!name.value.trim()) {
                name.classList.add('border-red-500', 'bg-red-50');
                name.classList.remove('border-stone-200');
                nameError.classList.remove('hidden');
                isValid = false;
            } else {
                name.classList.remove('border-red-500', 'bg-red-50');
                name.classList.add('border-stone-200');
                nameError.classList.add('hidden');
            }

            // Email Validation
            const email = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                email.classList.add('border-red-500', 'bg-red-50');
                email.classList.remove('border-stone-200');
                emailError.classList.remove('hidden');
                isValid = false;
            } else {
                email.classList.remove('border-red-500', 'bg-red-50');
                email.classList.add('border-stone-200');
                emailError.classList.add('hidden');
            }

            // Message Validation
            const message = document.getElementById('message');
            const messageError = document.getElementById('messageError');
            if (!message.value.trim()) {
                message.classList.add('border-red-500', 'bg-red-50');
                message.classList.remove('border-stone-200');
                messageError.classList.remove('hidden');
                isValid = false;
            } else {
                message.classList.remove('border-red-500', 'bg-red-50');
                message.classList.add('border-stone-200');
                messageError.classList.add('hidden');
            }

            if (isValid) {
                // Simulate success
                const btn = this.querySelector('button');
                const originalText = btn.innerHTML;
                btn.innerHTML = 'Message Sent!';
                btn.classList.add('bg-green-600');
                btn.classList.remove('bg-stone-900', 'hover:bg-orange-600');
                
                setTimeout(() => {
                    this.reset();
                    btn.innerHTML = originalText;
                    btn.classList.remove('bg-green-600');
                    btn.classList.add('bg-stone-900', 'hover:bg-orange-600');
                }, 3000);
            }
        });

        // Clear error on input
        ['name', 'email', 'message'].forEach(id => {
            document.getElementById(id).addEventListener('input', function() {
                this.classList.remove('border-red-500', 'bg-red-50');
                this.classList.add('border-stone-200');
                document.getElementById(id + 'Error').classList.add('hidden');
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b bg-white/80 border-stone-100">
<div className="flex h-16 max-w-5xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="transition-colors uppercase hover:text-orange-600 text-sm font-semibold tracking-tight" href="#">Shafin</a>
<div className="flex items-center gap-6">
<a className="text-sm text-stone-500 transition-colors hover:text-stone-900" href="#work">Work</a>
<a className="text-sm text-stone-500 transition-colors hover:text-stone-900" href="#about">About</a>
<a className="hidden sm:inline-flex text-sm font-medium px-4 py-2 rounded-full transition-colors duration-300 bg-stone-900 text-white hover:bg-orange-600" href="#contact">
                    Get in touch
                </a>
</div>
</div>
</nav>
<main className="pt-32 pb-20">

<section className="fade-in-up max-w-5xl mr-auto mb-32 ml-auto pr-6 pl-6">
<div className="max-w-3xl">
<p className="font-medium mb-6 flex items-center gap-2 text-orange-600">
<span className="w-2 h-2 rounded-full animate-pulse bg-orange-600"></span>
                    Available for new projects
                </p>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-stone-900 tracking-tight mb-8">
                    Crafting digital experiences with <span className="italic font-normal text-stone-400">precision</span> and <span className="text-orange-600">purpose</span>.
                </h1>
<p className="md:text-xl leading-relaxed text-lg text-stone-500 max-w-xl" style={{}}>I'm Shafin, a creative Web Designer. I craft accessible, pixel-perfect user interfaces and scalable design systems in Figma that blend form and function.</p>
<div className="mt-10 flex flex-wrap gap-4">
<a className="inline-flex items-center gap-2 font-medium border-b pb-1 transition-all group text-stone-900 border-stone-200 hover:border-orange-600 hover:text-orange-600" href="#work">
                        View Selected Work
                        <svg aria-hidden="true" data-icon="lucide:arrow-right" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</section>

<section className="fade-in-up delay-100 max-w-5xl mr-auto mb-32 ml-auto pr-6 pl-6" id="work">
<div className="flex items-end justify-between mb-12">
<h2 className="text-2xl font-medium tracking-tight">Selected Work</h2>
<span className="text-xs font-mono uppercase text-stone-400">2023 — Present</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">

<article className="group cursor-pointer" onclick="window.open('https://groomclub.com/', '_blank', 'noopener')" role="button">
<div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative bg-stone-100">
<div className="absolute inset-0 animate-pulse bg-stone-200"></div>
<img alt="Fintech Dashboard" className="transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 group-hover:opacity-100 opacity-90 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9989cf88-cc3b-4e1f-874a-3c1ce0f375b1_1600w.png"/>
<div className="text-xs font-medium text-stone-600 bg-white/90 border-stone-200/50 border rounded-full pt-1 pr-3 pb-1 pl-3 absolute top-4 right-4 backdrop-blur-sm">
          Service
        </div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="group-hover:text-orange-600 transition-colors text-lg font-medium text-stone-900">
            GroomClub
          </h3>
<p className="text-sm text-stone-500 mt-1">Front End Design &amp; Development</p>
</div>
<svg aria-hidden="true" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</article>

<article className="group cursor-pointer md:mt-16" onclick="window.open('https://exyte.com/', '_blank', 'noopener')" role="button">
<div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative bg-stone-100">
<img alt="E-commerce App" className="transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 group-hover:opacity-100 opacity-90 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ed28ea18-b561-4eb1-894f-b4964faad53d_1600w.png"/>
<div className="text-xs font-medium text-stone-600 bg-white/90 border-stone-200/50 border rounded-full pt-1 pr-3 pb-1 pl-3 absolute top-4 right-4 backdrop-blur-sm">
          Agnecy
        </div>
</div>
<div className="flex items-start justify-between">
<div className="">
<h3 className="group-hover:text-orange-600 transition-colors text-lg font-medium text-stone-900">EXYTE</h3>
<p className="text-sm text-stone-500 mt-1">Interface Design and Prototype</p>
</div>
<svg aria-hidden="true" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</article>

<article className="group cursor-pointer" onclick="window.open('https://teamapp-shafin02.webflow.io/', '_blank', 'noopener')" role="button">
<div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative bg-stone-100">
<img alt="AI Chat Interface" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/33949585-60da-47ed-9208-7290bfc3524b_1600w.png"/>
<div className="text-xs font-medium text-stone-600 bg-white/90 border-stone-200/50 border rounded-full pt-1 pr-3 pb-1 pl-3 absolute top-4 right-4 backdrop-blur-sm">
          Hosting
        </div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="group-hover:text-orange-600 transition-colors text-lg font-medium text-stone-900">Collaboration App &amp; Blog</h3>
<p className="text-sm text-stone-500 mt-1">Front End Design &amp; CMS Management</p>
</div>
<svg aria-hidden="true" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</article>

<article className="group cursor-pointer md:mt-16" onclick="window.open('https://chatapp-shafin01.webflow.io/', '_blank', 'noopener')" role="button">
<div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative bg-stone-100">
<img alt="Architecture Portfolio" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3092ca0c-232d-45ea-bdea-e51225234a41_1600w.png"/>
<div className="text-xs font-medium text-stone-600 bg-white/90 border-stone-200/50 border rounded-full pt-1 pr-3 pb-1 pl-3 absolute top-4 right-4 backdrop-blur-sm">
          Consumer App
        </div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="group-hover:text-orange-600 transition-colors text-lg font-medium text-stone-900">Chat App</h3>
<p className="text-sm text-stone-500 mt-1">Prototype and System Design</p>
</div>
<svg aria-hidden="true" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</article>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 mb-32 fade-in-up delay-200" id="about">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-stone-100 border-t pt-16 gap-x-12 gap-y-12">
<div className="md:col-span-4">
<h2 className="text-2xl font-medium tracking-tight mb-4">About Me</h2>
</div>
<div className="md:col-span-8 space-y-8">
<p className="leading-relaxed text-lg text-stone-600">I design clean, user-centered interfaces for modern web products. With a strong foundation in React and over 5 years shaping digital experiences, I turn complex functionality into layouts that feel simple, intuitive, and visually coherent. My work sits at the intersection of design and engineering—ensuring every interface not only looks polished, but also feels seamless to interact with.</p>
<div className="space-y-4">
<h3 className="uppercase text-sm font-medium text-stone-900 tracking-wide">Technical Skills</h3>
<div className="flex flex-wrap gap-2 gap-x-2 gap-y-2">

<span className="inline-flex items-center gap-1.5 transition-colors cursor-default hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700 text-sm text-stone-600 bg-stone-50/50 border-stone-200 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3">
<svg aria-hidden="true" data-icon="lucide:figma" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5M12 2h3.5a3.5 3.5 0 1 1 0 7H12z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 1 1-7 0m-7 7A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0m0-7A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5"></path></g></svg> Figma
    </span>
<span className="inline-flex items-center gap-1.5 transition-colors cursor-default hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700 text-sm text-stone-600 bg-stone-50/50 border-stone-200 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3">
<svg aria-hidden="true" data-icon="lucide:framer" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Framer
    </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-sm transition-colors cursor-default border-stone-200 bg-stone-50/50 text-stone-600 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700">
<svg aria-hidden="true" data-icon="lucide:layout-template" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="9" x="14" y="14"></rect></g></svg> Webflow
    </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-sm transition-colors cursor-default border-stone-200 bg-stone-50/50 text-stone-600 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700">
<svg aria-hidden="true" data-icon="lucide:pen-tool" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m12 19 7-7 3 3-7 7-3-3z"></path><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="m2 2 7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></g></svg> UI/UX Design
    </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-sm transition-colors cursor-default border-stone-200 bg-stone-50/50 text-stone-600 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700">
<svg aria-hidden="true" data-icon="lucide:layout-grid" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></g></svg> Design Systems
    </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-sm transition-colors cursor-default border-stone-200 bg-stone-50/50 text-stone-600 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700">
<svg aria-hidden="true" data-icon="lucide:zap" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Prototyping
    </span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 mb-20 fade-in-up delay-300" id="contact">
<div className="md:p-12 overflow-hidden bg-stone-50 rounded-3xl pt-8 pr-8 pb-8 pl-8 relative">

<div className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl pointer-events-none bg-orange-100/50"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
<div className="">
<h2 className="text-3xl font-medium tracking-tight mb-4">Let's work together</h2>
<p className="text-stone-500 mb-8">
                            Have a project in mind? Fill out the form or send me an email directly at <a className="underline hover:text-orange-600 text-stone-900" href="mailto:hello@shafin.me" style={{}}>shafinshaharia@gmail.com</a>.
                        </p>
<div className="space-y-4">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center text-stone-600">
<svg aria-hidden="true" data-icon="lucide:map-pin" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
<span className="text-sm">Dhaka, Bangladesh</span>
</div>
<div className="flex text-stone-600 gap-x-3 gap-y-3 items-center">
<svg aria-hidden="true" data-icon="lucide:clock" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
<span className="text-sm">GMT+6</span>
</div>
</div>
</div>
<form className="space-y-5" id="contactForm" novalidate="">
<div className="space-y-1">
<label className="text-xs font-semibold uppercase tracking-wider ml-1 text-stone-900" htmlFor="name">Name</label>
<input className="w-full border rounded-lg px-4 py-3 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all text-sm bg-white border-stone-200 text-stone-900" id="name" placeholder="Jane Doe" type="text"/>
<p className="text-red-500 text-xs mt-1 hidden" id="nameError">Please enter your name.</p>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold uppercase tracking-wider ml-1 text-stone-900" htmlFor="email">Email</label>
<input className="w-full border rounded-lg px-4 py-3 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all text-sm bg-white border-stone-200 text-stone-900" id="email" placeholder="jane@example.com" type="email"/>
<p className="text-red-500 text-xs mt-1 hidden" id="emailError">Please enter a valid email address.</p>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold uppercase tracking-wider ml-1 text-stone-900" htmlFor="message">Message</label>
<textarea className="w-full border rounded-lg px-4 py-3 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all resize-none text-sm bg-white border-stone-200 text-stone-900" id="message" placeholder="Tell me about your project..." rows="4"></textarea>
<p className="text-red-500 text-xs mt-1 hidden" id="messageError">Please enter a message.</p>
</div>
<button className="w-full font-medium py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 group bg-stone-900 text-white hover:bg-orange-600" type="submit">
                            Send Message
                            <svg aria-hidden="true" className="" data-icon="lucide:send" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</form>
</div>
</div>
</section>
</main>
<footer className="border-stone-100 border-t pt-12 pb-12">
<div className="flex flex-col md:flex-row max-w-5xl mr-auto ml-auto pr-6 pl-6 gap-x-6 gap-y-6 items-center justify-between">
<p className="text-sm text-stone-400" style={{}}>© 2026 Shafin. All rights reserved.</p>
<div className="flex items-center gap-x-5">

<a className="transition-colors hover:text-orange-600 text-sm text-stone-400" data-external="" href="https://x.com/shahariashafin" rel="noopener noreferrer" target="_blank">
      X
    </a>

<a className="transition-colors hover:text-orange-600 text-sm text-stone-400" data-external="" href="https://github.com/beingshafin" rel="noopener noreferrer" target="_blank">
      GitHub
    </a>

<a className="transition-colors hover:text-orange-600 text-sm text-stone-400" data-external="" href="https://dribbble.com/AloyShafin" rel="noopener noreferrer" target="_blank">
      Dribbble
    </a>
</div>
</div>
</footer>



    </>
  );
}
