import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    // Dark mode toggle script
    function toggleDark() {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('mosivant-dark', document.documentElement.classList.contains('dark') ? '1' : '0');
    }
    window.onload = () => {
      if (localStorage.getItem('mosivant-dark') === '1') document.documentElement.classList.add('dark');
    };
  


      document.getElementById('navToggle').onclick = function() {
        var nav = document.getElementById('mobileNav');
        nav.classList.toggle('hidden');
      };
    


        const testimonials = [
          {
            quote: "Mosivant modernized our IT in record time. Their team is proactive and deeply knowledgeable.",
            client: "Sarah L.", role: "COO, RetailCo"
          },
          {
            quote: "We launched our new SaaS platform flawlessly, thanks to Mosivant’s guidance and development expertise.",
            client: "David R.", role: "CTO, FinTech Group"
          },
          {
            quote: "The support team is always available and solves our issues fast. Highly recommend Mosivant!",
            client: "Maria S.", role: "CEO, DesignHub"
          }
        ];
        let tIndex = 0;
        function renderTestimonial(i=0) {
          tIndex = (i + testimonials.length) % testimonials.length;
          document.getElementById('testimonialQuote').textContent = `"${testimonials[tIndex].quote}"`;
          document.getElementById('testimonialClient').textContent = testimonials[tIndex].client;
          document.getElementById('testimonialRole').textContent = testimonials[tIndex].role;
        }
        function testimonialNav(dir) { renderTestimonial(tIndex + dir); }
        setInterval(() => testimonialNav(1), 7000);
        renderTestimonial(0);
      


    // Simulate live chat with a floating button
    function showChat() {
      let c = document.getElementById('liveChat');
      c.classList.toggle('hidden');
      if (!c.classList.contains('hidden')) document.getElementById('chatInput').focus();
    }
    function sendChat(e) {
      e.preventDefault();
      let msg = document.getElementById('chatInput').value.trim();
      if (!msg) return;
      let area = document.getElementById('chatArea');
      area.innerHTML += `<div class="my-2 text-right"><span class="inline-block bg-[--primary] text-[--primary-foreground] px-3 py-2 rounded">${msg}</span></div>`;
      document.getElementById('chatInput').value = '';
      setTimeout(() => {
        area.innerHTML += `<div class="my-2 text-left"><span class="inline-block bg-[--muted] px-3 py-2 rounded">Thanks for reaching out! A consultant will respond soon.</span></div>`;
        area.scrollTop = area.scrollHeight;
      }, 800);
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 w-full z-30 bg-[--background] bg-opacity-80 border-b border-[--muted] shadow-sm transition">
<nav className="container mx-auto px-4 py-3 flex items-center justify-between">
<a className="text-3xl font-bold text-[--primary]" href="/" style={{fontFamily: 'Oxanium,sans-serif'}}>Mosivant</a>
<div className="hidden md:flex gap-8 items-center text-lg">
<a className="hover:text-[--primary] transition" href="/services">Services</a>
<a className="hover:text-[--primary] transition" href="/about">About</a>
<a className="hover:text-[--primary] transition" href="/blog">Blog</a>
<a className="hover:text-[--primary] transition" href="/contact">Contact</a>
<a className="ml-3 px-4 py-2 rounded bg-[--primary] text-[--primary-foreground] font-semibold shadow hover:bg-[--accent] transition" href="/booking">Book</a>
<button aria-label="Toggle dark mode" className="ml-2 p-2 rounded-full hover:bg-[--muted]" onclick="toggleDark()">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M17.36 17.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M17.36 6.64l1.42-1.42"></path>
</svg>
</button>
</div>

<div className="md:hidden flex items-center">
<button aria-label="Menu" className="p-2" id="navToggle">
<svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M4 6h16M4 12h16M4 18h16"></path>
</svg>
</button>
</div>
</nav>
<div className="md:hidden fixed top-16 left-0 w-full bg-[--background] shadow-lg z-40 hidden" id="mobileNav">
<div className="flex flex-col text-lg text-center gap-2 p-4">
<a className="py-2 hover:text-[--primary]" href="/services">Services</a>
<a className="py-2 hover:text-[--primary]" href="/about">About</a>
<a className="py-2 hover:text-[--primary]" href="/blog">Blog</a>
<a className="py-2 hover:text-[--primary]" href="/contact">Contact</a>
<a className="py-2 rounded bg-[--primary] text-[--primary-foreground] font-semibold shadow hover:bg-[--accent] transition" href="/booking">Book</a>
<button aria-label="Toggle dark mode" className="py-2" onclick="toggleDark()">🌗 Toggle Dark</button>
</div>
</div>

</header>

<section className="relative flex flex-col items-center justify-center text-center pt-36 pb-16 bg-gradient-to-br from-[--primary]/20 via-[--accent]/10 to-[--secondary]/10 overflow-hidden">
<div className="absolute -top-24 -left-24 w-72 h-72 bg-[--primary]/20 rounded-full blur-2xl animate-pulse"></div>
<div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[--accent]/10 rounded-full blur-3xl"></div>
<h1 className="text-5xl md:text-6xl font-bold mb-6" style={{fontFamily: 'Oxanium,sans-serif'}}>
      Modern IT Consulting<br/>
<span className="text-[--primary]">for Forward-Thinking Teams</span>
</h1>
<p className="text-xl text-[--muted-foreground] max-w-2xl mx-auto mb-8">
      Mosivant partners with you to deliver technology strategy, software solutions, and support that drive business growth and transformation.
    </p>
<div className="flex flex-col md:flex-row gap-4 justify-center">
<a className="px-8 py-4 rounded bg-[--primary] text-[--primary-foreground] font-bold shadow hover:bg-[--accent] transition" href="/booking">Book Consultation</a>
<a className="px-8 py-4 rounded border border-[--primary] text-[--primary] font-bold hover:bg-[--primary]/10 transition" href="/services">Our Services</a>
</div>

<svg className="absolute top-10 right-32 w-16 h-16 text-[--accent]" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="32" cy="32" r="30"></circle></svg>
<svg className="absolute bottom-10 left-16 w-12 h-12 text-[--secondary]" fill="none" stroke="currentColor" strokeWidth="2"><rect height="36" rx="8" width="36" x="2" y="2"></rect></svg>
</section>

<section className="container mx-auto px-4 py-16">
<h2 className="text-3xl font-bold mb-10 text-center" style={{fontFamily: 'Oxanium,sans-serif'}}>Our Solutions</h2>
<div className="grid md:grid-cols-4 gap-8">
<div className="bg-[--card] rounded-lg shadow p-6 flex flex-col items-center text-center">
<div className="mb-3 text-[--primary]">
<svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-2">Web Development</h3>
<p className="text-[--muted-foreground]">Fast, secure, accessible websites &amp; portals.</p>
</div>
<div className="bg-[--card] rounded-lg shadow p-6 flex flex-col items-center text-center">
<div className="mb-3 text-[--accent]">
<svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20m10-10H2"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-2">Software Solutions</h3>
<p className="text-[--muted-foreground]">Apps, automation, &amp; digital transformation tools.</p>
</div>
<div className="bg-[--card] rounded-lg shadow p-6 flex flex-col items-center text-center">
<div className="mb-3 text-[--primary]">
<svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 3"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-2">IT Support</h3>
<p className="text-[--muted-foreground]">Reliable support for cloud, devices, and security.</p>
</div>
<div className="bg-[--card] rounded-lg shadow p-6 flex flex-col items-center text-center">
<div className="mb-3 text-[--accent]">
<svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2"><rect height="16" rx="4" width="16" x="4" y="4"></rect><path d="M8 12h8"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-2">Consulting</h3>
<p className="text-[--muted-foreground]">Strategic guidance for sustainable growth.</p>
</div>
</div>
</section>

<section className="bg-gradient-to-r from-[--primary]/10 via-[--accent]/10 to-[--secondary]/10 py-16">
<h2 className="text-3xl font-bold text-center mb-8" style={{fontFamily: 'Oxanium,sans-serif'}}>Client Success Stories</h2>
<div className="relative max-w-2xl mx-auto">
<div className="bg-[--card] rounded-lg shadow p-10 text-center transition" id="testimonialCarousel">
<div className="text-xl mb-4 italic text-[--muted-foreground]" id="testimonialQuote"></div>
<div className="font-bold text-[--primary]" id="testimonialClient"></div>
<div className="text-[--muted-foreground]" id="testimonialRole"></div>
</div>
<div className="flex justify-center gap-4 mt-6">
<button aria-label="Prev" className="w-10 h-10 rounded-full bg-[--muted] hover:bg-[--primary]/20 flex items-center justify-center" onclick="testimonialNav(-1)"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M15 19l-7-7 7-7"></path></svg></button>
<button aria-label="Next" className="w-10 h-10 rounded-full bg-[--muted] hover:bg-[--primary]/20 flex items-center justify-center" onclick="testimonialNav(1)"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M9 5l7 7-7 7"></path></svg></button>
</div>

</div>
</section>

<section className="container mx-auto px-4 py-20 text-center">
<h2 className="text-3xl font-bold mb-6" style={{fontFamily: 'Oxanium,sans-serif'}}>Ready to Transform Your Tech?</h2>
<p className="mb-8 text-lg text-[--muted-foreground]">Let’s discuss how Mosivant can help your business succeed with technology.</p>
<a className="px-10 py-5 rounded bg-[--primary] text-[--primary-foreground] font-bold shadow hover:bg-[--accent] transition text-lg" href="/booking">Book a Free Consultation</a>
</section>

<footer className="bg-[--card] border-t border-[--muted] mt-auto">
<div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
<div>
<span className="font-bold text-[--primary]" style={{fontFamily: 'Oxanium,sans-serif'}}>Mosivant</span>
<span className="ml-3 text-[--muted-foreground]">© 2024 All rights reserved.</span>
</div>
<nav className="flex gap-5">
<a className="hover:text-[--primary]" href="/services">Services</a>
<a className="hover:text-[--primary]" href="/about">About</a>
<a className="hover:text-[--primary]" href="/blog">Blog</a>
<a className="hover:text-[--primary]" href="/contact">Contact</a>
</nav>
<div>
<span className="text-[--muted-foreground]">info@mosivant.com</span>
</div>
</div>
</footer>


<button aria-label="Live Chat" className="fixed bottom-6 right-6 z-50 bg-[--primary] text-[--primary-foreground] rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-[--accent] transition" onclick="showChat()">
<svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
</button>
<div className="hidden fixed bottom-24 right-6 z-50 w-80 bg-[--card] rounded-lg shadow-2xl flex flex-col" id="liveChat">
<div className="flex justify-between items-center px-4 py-2 border-b border-[--muted]">
<span className="font-bold text-[--primary]">Mosivant Chat</span>
<button aria-label="Close" className="text-2xl leading-none" onclick="showChat()">×</button>
</div>
<div className="flex-1 px-4 py-3 overflow-y-auto h-40 text-sm" id="chatArea"></div>
<form className="flex border-t border-[--muted]" onsubmit="sendChat(event)">
<input autocomplete="off" className="flex-1 px-3 py-2 rounded-bl-lg focus:outline-none" id="chatInput" placeholder="Type your message..."/>
<button className="px-4 text-[--primary] font-bold" type="submit">Send</button>
</form>
</div>

    </>
  );
}
