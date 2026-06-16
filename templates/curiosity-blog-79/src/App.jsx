import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    document.addEventListener('DOMContentLoaded', () => {
      const links = document.querySelectorAll('.nav-link');
      const views = document.querySelectorAll('.page-view');

      links.forEach(link => {
        link.addEventListener('click', e => {
          e.preventDefault();
          const target = e.currentTarget.getAttribute('data-target');
          if (!target) return;

          views.forEach(v => {
            v.classList.add('hidden');
            v.classList.remove('block');
          });

          const targetView = document.getElementById('view-' + target);
          if (targetView) {
            targetView.classList.remove('hidden');
            targetView.classList.add('block');
          }

          links.forEach(l => {
            l.classList.remove('text-[#ffcd57]');
            l.classList.add('text-gray-400');
          });
          e.currentTarget.classList.add('text-[#ffcd57]');
          e.currentTarget.classList.remove('text-gray-400');

          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<nav className="sticky top-0 z-50 bg-[#161c27] text-white border-b border-gray-800/40 backdrop-blur-md bg-opacity-90">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">
<div className="flex-shrink-0">
<a className="font-serif text-2xl tracking-tight text-white hover:text-[#ffcd57] transition-colors" href="#">
            Bet You Never Knew.
          </a>
</div>
<div className="hidden md:flex items-center space-x-10">
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors" href="#">Home Base</a>
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors" href="#">Fresh Discoveries</a>
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors" href="#">The Book</a>
<button className="nav-link text-sm font-normal text-[#ffcd57] transition-colors" data-target="about">About</button>
<button className="nav-link text-sm font-normal text-gray-400 hover:text-white transition-colors" data-target="contact">Say Hello</button>
</div>
<div className="hidden md:block">
<a className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-medium uppercase tracking-wider text-[#161c27] bg-[#ffcd57] hover:bg-[#cf9c40] transition-colors rounded-full shadow-sm hover:shadow-md" href="#">
            Stay in the Know
          </a>
</div>
<div className="md:hidden flex items-center">
<button aria-label="Open menu" className="text-gray-400 hover:text-white p-2">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>
<main className="page-view block min-h-screen" id="view-about">
<section className="bg-[#161c27] text-white pt-24 pb-32 px-6 lg:px-8 relative overflow-hidden">
<div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full border border-gray-800/50 opacity-50 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-80 h-80 rounded-full border border-[#cf9c40]/20 opacity-30 pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
<div className="">
<span className="text-xs font-medium tracking-widest uppercase text-[#cf9c40] mb-6 block flex items-center gap-3">
<span className="w-8 h-px bg-[#cf9c40]"></span>
            Our Purpose
          </span>
<h1 className="text-5xl lg:text-7xl font-serif tracking-tight leading-tight mb-8">
            Curiosity is a <br/><span className="text-[#ffcd57] italic">powerful force.</span>
</h1>
</div>
<div className="">
<p className="text-xl font-light text-gray-400 leading-relaxed pl-0 lg:pl-12 border-l-0 lg:border-l border-gray-800">
            It pushes us to ask questions, explore ideas, and see the world in ways we may not have considered before. Bet You Never Knew was created to celebrate that curiosity.
          </p>
</div>
</div>
</section>
<section className="lg:px-8 bg-[#fafafa] pt-24 pr-6 pb-24 pl-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
<div className="lg:col-span-4 relative">
<div className="sticky top-32 space-y-8">
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
<h2 className="text-2xl font-serif tracking-tight text-[#161c27] mb-4">What you'll discover</h2>
<ul className="space-y-5">
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 text-[#cf9c40]">
<iconify-icon className="text-xl" icon="solar:history-linear"></iconify-icon>
</div>
<div className="">
<h3 className="text-sm font-medium text-[#161c27]">Hidden History</h3>
<p className="text-sm text-gray-500 font-light mt-1">Fascinating moments that alter how you view the past.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 text-[#cf9c40]">
<iconify-icon className="text-xl" icon="solar:help-linear"></iconify-icon>
</div>
<div className="">
<h3 className="text-sm font-medium text-[#161c27]">Human Psychology</h3>
<p className="text-sm text-gray-500 font-light mt-1">Insights explaining why we think or behave the way we do.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 text-[#cf9c40]">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div className="">
<h3 className="text-sm font-medium text-[#161c27]">Culture &amp; Leadership</h3>
<p className="text-sm text-gray-500 font-light mt-1">Lessons tucked inside everyday life and society.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
<div className="lg:col-span-8 space-y-10 text-lg text-gray-600 font-light leading-loose">
<p className="text-2xl font-serif tracking-tight text-[#161c27] leading-relaxed">
            This website exists for one simple purpose: to share surprising insights about the world around us—ideas, stories, discoveries, and perspectives that make readers pause and think, <span className="italic text-[#cf9c40]">“I never knew that.”</span>
</p>
<p className="">
            The topics explored here range widely. You might encounter a fascinating piece of history that changes the way you view the past. On another day, you may discover a psychological insight explaining why people think or behave the way they do.
          </p>
<p className="">
            Sometimes the focus will turn to leadership, personal growth, culture, faith, or the hidden lessons tucked inside everyday life.
          </p>
<div className="my-14 overflow-hidden rounded-3xl shadow-sm border border-gray-100/50 relative group">
<img alt="Library of knowledge" className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#161c27]/40 to-transparent"></div>
</div>
<div className="relative py-12 my-14">
<div className="absolute inset-0 bg-white rounded-3xl skew-y-2 transform -z-10 shadow-lg"></div>
<div className="relative z-10 px-8 md:px-16 text-center">
<iconify-icon className="text-4xl text-[#cf9c40] mb-6 opacity-50 mx-auto block" icon="solar:quote-up-linear"></iconify-icon>
<p className="md:text-3xl leading-relaxed text-2xl italic text-zinc-950 tracking-tight font-serif">
                "What connects all of these stories is a sense of discovery. Many of the most interesting truths in life are not necessarily hidden; they are simply overlooked. Once we notice them, however, they can reshape how we see the world."
              </p>
</div>
</div>
<p className="">
            Bet You Never Knew invites readers to slow down for a few minutes and explore those overlooked insights. The goal is not only to inform but also to inspire curiosity and thoughtful reflection. Each post aims to offer a small moment of discovery—something that expands understanding, sparks conversation, or simply makes the reader smile with the realization that there is always more to learn.
          </p>
<p className="">
            In a world overflowing with information, genuine discovery still carries a special kind of excitement. This website hopes to deliver that feeling again and again.
          </p>
<p className="">
            Because the truth is, there are countless remarkable things in life that many of us have simply never been told, or even realized we never thought to question.
          </p>
<div className="pt-16 pb-8 text-center border-t border-gray-200 mt-16">
<p className="text-sm uppercase tracking-widest text-gray-400 mb-4 font-medium">And chances are, at least a few of them will make you say…</p>
<p className="text-4xl md:text-5xl font-serif tracking-tight text-[#161c27]">“Bet you never knew.”</p>
</div>
</div>
</div>
</section>
</main>
<main className="page-view hidden min-h-screen" id="view-contact">
<div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
<div className="w-full lg:w-5/12 text-white p-10 lg:p-20 flex flex-col justify-center relative overflow-hidden bg-[#161c27]">
<div className="absolute inset-0 z-0">
<img alt="Writing desk" className="w-full h-full object-cover opacity-15 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#161c27]/80 via-[#161c27]/95 to-[#161c27]"></div>
</div>
<div className="relative z-10 max-w-lg">
<span className="text-xs font-medium tracking-widest uppercase text-[#cf9c40] mb-6 block">Say Hello</span>
<h1 className="text-5xl font-serif tracking-tight leading-tight mb-8">
            Curiosity works <br/>both ways.
          </h1>
<div className="space-y-6 text-gray-300 font-light text-base leading-relaxed mb-10">
<p>
              If you’ve read something on Bet You Never Knew that made you think, smile, raise an eyebrow, or say, <span className="italic text-white">“Well, I’ll be...”</span> — then we’re already glad you stopped by.
            </p>
<p>
              But curiosity works both ways. If you have a question, a comment, a correction, or a fascinating fact that made you say “Bet you never knew,” we would love to hear from you. After all, some of the best discoveries come from readers who stumble upon something interesting and decide it deserves to be shared.
            </p>
</div>
<div className="space-y-6 pt-8 border-t border-gray-800">
<h3 className="text-sm font-medium tracking-widest text-white uppercase">You are welcome to reach out if you:</h3>
<ul className="space-y-4">
<li className="flex items-center gap-4 text-sm text-gray-300 font-light">
<iconify-icon className="text-xl text-[#cf9c40] flex-shrink-0" icon="solar:lightbulb-linear"></iconify-icon>
<span>Have a lesser-known fact you think belongs on the site</span>
</li>
<li className="flex items-center gap-4 text-sm text-gray-300 font-light">
<iconify-icon className="text-xl text-[#cf9c40] flex-shrink-0" icon="solar:chat-round-linear"></iconify-icon>
<span>Want to comment on something you’ve read here</span>
</li>
<li className="flex items-center gap-4 text-sm text-gray-300 font-light">
<iconify-icon className="text-xl text-[#cf9c40] flex-shrink-0" icon="solar:danger-circle-linear"></iconify-icon>
<span>Spotted an error <span className="text-gray-500 italic">(yes, even curious websites occasionally trip over their own facts)</span></span>
</li>
</ul>
</div>
<div className="mt-10 pt-8 border-t border-gray-800 space-y-4 text-sm text-gray-400 font-light leading-relaxed">
<p>
              Please keep in mind that while we read every message, we may not always respond instantly. Sometimes we are busy researching the next surprising story, chasing down a historical detail, or discovering yet another fact that makes us say, “How did we not know that?”
            </p>
<p>
              Still, we genuinely appreciate hearing from thoughtful and curious readers. So if something comes to mind, send it along. The next great “Bet You Never Knew” moment might come from you.
            </p>
<p>
              And if your message contains a truly remarkable fact, don’t be surprised if it shows up in a future post — with a grateful tip of the hat.
            </p>
<p className="text-[#cf9c40] font-serif italic text-lg pt-2">Stay curious.</p>
</div>
</div>
</div>
<div className="w-full lg:w-7/12 p-10 lg:p-24 bg-[#f8fafc] flex flex-col justify-center">
<div className="max-w-xl w-full mx-auto">
<div className="mb-12">
<div className="relative w-full h-56 md:h-64 mb-10 overflow-hidden rounded-3xl shadow-sm border border-gray-100/50 group">
<img alt="Hands typing on a laptop keyboard" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#161c27]/20 to-transparent"></div>
</div>
<h2 className="text-3xl font-serif tracking-tight text-[#161c27] mb-3">Send a Message</h2>
<p className="text-gray-500 text-sm font-light">Fill out the form below. The next great discovery might come from you.</p>
</div>
<form className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="block text-xs font-medium uppercase tracking-wider text-gray-500" htmlFor="firstName">First Name</label>
<input className="w-full bg-transparent border-b border-gray-200 py-3 text-[#161c27] focus:outline-none focus:border-[#cf9c40] transition-colors text-base font-light placeholder-gray-300" id="firstName" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium uppercase tracking-wider text-gray-500" htmlFor="lastName">Last Name</label>
<input className="w-full bg-transparent border-b border-gray-200 py-3 text-[#161c27] focus:outline-none focus:border-[#cf9c40] transition-colors text-base font-light placeholder-gray-300" id="lastName" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium uppercase tracking-wider text-gray-500" htmlFor="email">Email Address</label>
<input className="w-full bg-transparent border-b border-gray-200 py-3 text-[#161c27] focus:outline-none focus:border-[#cf9c40] transition-colors text-base font-light placeholder-gray-300" id="email" placeholder="jane@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium uppercase tracking-wider text-gray-500" htmlFor="subject">What is this regarding?</label>
<div className="relative">
<select className="w-full bg-transparent border-b border-gray-200 py-3 pr-10 text-[#161c27] focus:outline-none focus:border-[#cf9c40] transition-colors text-base font-light appearance-none cursor-pointer" id="subject">
<option disabled="" selected="" value="">Select a topic...</option>
<option value="fact">I have a lesser-known fact</option>
<option value="comment">Comment on a post</option>
<option value="error">I spotted an error</option>
<option value="suggestion">Suggestion for future topic</option>
<option value="hello">Just saying hello</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-400">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium uppercase tracking-wider text-gray-500" htmlFor="message">Your Message</label>
<textarea className="w-full bg-transparent border-b border-gray-200 py-3 text-[#161c27] focus:outline-none focus:border-[#cf9c40] transition-colors text-base font-light resize-y placeholder-gray-300" id="message" placeholder="Share your discovery here..." rows="4"></textarea>
</div>
<div className="pt-4">
<button className="w-full md:w-auto inline-flex items-center justify-center px-10 py-4 text-xs font-medium uppercase tracking-wider text-[#161c27] bg-[#ffcd57] hover:bg-[#cf9c40] transition-all rounded-full group shadow-sm hover:shadow-md" type="button">
                Send Message
                <iconify-icon className="text-lg ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:plain-2-linear"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</div>
</main>
<footer className="bg-[#161c27] text-white pt-20 pb-10 border-t border-gray-800">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center mb-16 space-y-8 md:space-y-0">
<div className="text-center md:text-left">
<span className="font-serif text-3xl tracking-tight text-white block mb-2">Bet You Never Knew.</span>
<p className="text-sm text-gray-400 font-light">Curiosity, conversation, and surprising insight.</p>
</div>
<div className="flex flex-wrap justify-center gap-8">
<a className="text-xs uppercase tracking-wider font-normal text-gray-400 hover:text-[#ffcd57] transition-colors" href="#">Home Base</a>
<a className="text-xs uppercase tracking-wider font-normal text-gray-400 hover:text-[#ffcd57] transition-colors" href="#">Fresh Discoveries</a>
<a className="text-xs uppercase tracking-wider font-normal text-gray-400 hover:text-[#ffcd57] transition-colors" href="#">The Book</a>
</div>
</div>
<div className="pt-8 border-t border-gray-800/60 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light space-y-4 md:space-y-0">
<p>© 2024 Wayne E. Smith. All rights reserved.</p>
<div className="flex space-x-8">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
