import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Fade up observer
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('in'), i * 80);
            io.unobserve(e.target);
          }
        });
      }, { rootMargin: '-50px' });
      document.querySelectorAll('.fade-up').forEach(el => io.observe(el));

      // Mission scroll word reveal
      const p1Text = "We're building a space where curiosity meets clarity — where readers find depth, writers find reach, and every newsletter becomes a conversation worth having.";
      const p2Text = "A platform where content, community, and insight flow together — with less noise, less friction, and more meaning for everyone involved.";
      const highlightWords = ['curiosity','meets','clarity'];

      function buildWords(el, text, highlights) {
        const words = text.split(' ');
        el.innerHTML = words.map(w => {
          const clean = w.replace(/[.,—]/g,'').toLowerCase();
          const isHighlight = highlights.includes(clean);
          const color = isHighlight ? 'hsl(var(--foreground))' : 'hsl(var(--hero-subtitle))';
          return `<span class="scroll-word" style="opacity:0.15; color:${color}; display:inline-block; margin-right:0.25em;">${w}</span>`;
        }).join('');
      }
      const p1 = document.getElementById('mission-p1');
      const p2 = document.getElementById('mission-p2');
      buildWords(p1, p1Text, highlightWords);
      buildWords(p2, p2Text, []);

      function updateMissionScroll() {
        const section = document.getElementById('mission');
        const rect = section.getBoundingClientRect();
        const vh = window.innerHeight;
        const allWords = section.querySelectorAll('.scroll-word');
        const total = allWords.length;

        const start = vh * 0.7;
        const end = -rect.height + vh * 0.3;
        const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));

        allWords.forEach((w, i) => {
          const wp = i / total;
          const local = Math.max(0, Math.min(1, (progress - wp * 0.7) * 4));
          w.style.opacity = (0.15 + local * 0.85).toFixed(2);
        });
      }
      window.addEventListener('scroll', updateMissionScroll);
      updateMissionScroll();

      // HLS video
      const ctaVideo = document.getElementById('cta-video');
      const hlsUrl = 'https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8';
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(hlsUrl);
        hls.attachMedia(ctaVideo);
      } else if (ctaVideo.canPlayType('application/vnd.apple.mpegurl')) {
        ctaVideo.src = hlsUrl;
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-28 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative w-7 h-7 rounded-full border-2 flex items-center justify-center" style={{borderColor: 'hsla(0,0%,100%,0.6)'}}>
<div className="w-3 h-3 rounded-full border" style={{borderColor: 'hsla(0,0%,100%,0.6)'}}></div>
</div>
<span className="font-bold tracking-tight text-base">Mindloop</span>
</div>
<div className="hidden lg:flex items-center gap-3 text-sm">
<a className="text-muted-foreground hover:text-foreground transition" href="#">
          Home
        </a>
<span className="text-muted-foreground">•</span>
<a className="text-muted-foreground hover:text-foreground transition" href="#">
          How It Works
        </a>
<span className="text-muted-foreground">•</span>
<a className="text-muted-foreground hover:text-foreground transition" href="#">
          Philosophy
        </a>
<span className="text-muted-foreground">•</span>
<a className="text-muted-foreground hover:text-foreground transition" href="#">
          Use Cases
        </a>
</div>
<div className="flex items-center gap-2">
<a className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition" href="#">
<iconify-icon icon="mdi:instagram" style={{color: '#fff'}} width="16"></iconify-icon>
</a>
<a className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition" href="#">
<iconify-icon icon="mdi:linkedin" style={{color: '#fff'}} width="16"></iconify-icon>
</a>
<a className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition" href="#">
<iconify-icon icon="mdi:twitter" style={{color: '#fff'}} width="16"></iconify-icon>
</a>
</div>
</nav>

<section className="relative min-h-screen w-full overflow-hidden flex items-start justify-center">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover z-0" loop="" muted="" playsinline="">
<source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4" type="video/mp4"/>
</video>
<div className="absolute bottom-0 left-0 right-0 h-64 z-[1]" style={{background: 'linear-gradient(to top, hsl(var(--background)), transparent)'}}></div>
<div className="relative z-10 px-6 pt-28 md:pt-32 pb-20 max-w-5xl mx-auto text-center">
<div className="flex items-center justify-center gap-3 mb-8 fade-up">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 bg-gradient-to-br from-zinc-400 to-zinc-700 flex items-center justify-center overflow-hidden" style={{borderColor: 'hsl(var(--background))'}}>
<iconify-icon icon="mdi:account" style={{color: '#fff'}} width="18"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full border-2 bg-gradient-to-br from-zinc-500 to-zinc-800 flex items-center justify-center overflow-hidden" style={{borderColor: 'hsl(var(--background))'}}>
<iconify-icon icon="mdi:account" style={{color: '#fff'}} width="18"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full border-2 bg-gradient-to-br from-zinc-300 to-zinc-600 flex items-center justify-center overflow-hidden" style={{borderColor: 'hsl(var(--background))'}}>
<iconify-icon icon="mdi:account" style={{color: '#fff'}} width="18"></iconify-icon>
</div>
</div>
<span className="text-muted-foreground text-sm">
            7,000+ people already subscribed
          </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 fade-up" style={{letterSpacing: '-2px'}}>
          Get
          <span className="font-serif italic font-normal">Inspired</span>
          with Us
        </h1>
<p className="text-base md:text-lg max-w-2xl mx-auto mb-10 fade-up" style={{color: 'hsl(var(--hero-subtitle))'}}>
          Join our feed for meaningful updates, news around technology and a
          shared journey toward depth and direction.
        </p>
<form className="liquid-glass rounded-full p-2 max-w-lg mx-auto flex items-center gap-2 fade-up">
<input className="flex-1 bg-transparent px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground" placeholder="Enter your email" type="email"/>
<button className="bg-foreground text-background rounded-full px-6 md:px-8 py-3 text-xs font-semibold tracking-wider hover:scale-[1.03] active:scale-[0.98] transition-transform" type="submit">
            SUBSCRIBE
          </button>
</form>
</div>
</section>

<section className="pt-24 md:pt-32 pb-6 md:pb-9 px-6 md:px-12 text-center">
<h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 fade-up" style={{letterSpacing: '-2px'}}>
        Search has
        <span className="font-serif italic font-normal">changed.</span>
<br/>
        Have you?
      </h2>
<p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-24 fade-up">
        The way people discover content is fundamentally shifting. Answers come
        from AI, not links.
      </p>
<div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-20 max-w-6xl mx-auto">
<div className="flex flex-col items-center fade-up">
<div className="platform-icon mb-4">
<div className="ring">
<iconify-icon icon="mdi:message-text-outline" style={{color: '#e5e5e5'}} width="56"></iconify-icon>
</div>
</div>
<h3 className="font-semibold text-base mb-2">ChatGPT</h3>
<p className="text-muted-foreground text-sm max-w-xs">
            Conversations replace clicks. Users ask, AI answers — your brand
            needs to be in the response.
          </p>
</div>
<div className="flex flex-col items-center fade-up">
<div className="platform-icon mb-4">
<div className="ring">
<iconify-icon icon="mdi:magnify" style={{color: '#e5e5e5'}} width="56"></iconify-icon>
</div>
</div>
<h3 className="font-semibold text-base mb-2">Perplexity</h3>
<p className="text-muted-foreground text-sm max-w-xs">
            Source-driven discovery. Authority and substance now outweigh raw
            keyword density.
          </p>
</div>
<div className="flex flex-col items-center fade-up">
<div className="platform-icon mb-4">
<div className="ring">
<iconify-icon icon="mdi:atom" style={{color: '#e5e5e5'}} width="56"></iconify-icon>
</div>
</div>
<h3 className="font-semibold text-base mb-2">Google AI</h3>
<p className="text-muted-foreground text-sm max-w-xs">
            Overviews that summarize the web. Be the answer or watch others
            speak for you.
          </p>
</div>
</div>
<p className="text-muted-foreground text-sm">
        If you don't answer the questions, someone else will.
      </p>
</section>

<section className="pt-0 pb-20 md:pb-28 px-6 md:px-12" id="mission">
<div className="max-w-5xl mx-auto">
<div className="flex justify-center mb-16">
<video autoplay="" className="rounded-full w-[300px] h-[300px] md:w-[600px] md:h-[600px] object-cover" loop="" muted="" playsinline="">
<source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4" type="video/mp4"/>
</video>
</div>
<p className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight" id="mission-p1" style={{letterSpacing: '-1px'}}></p>
<p className="text-xl md:text-2xl lg:text-3xl font-medium mt-10 leading-snug" id="mission-p2"></p>
</div>
</section>

<section className="py-20 md:py-28 px-6 md:px-12 border-t border-border/30">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 fade-up">
<p className="text-xs uppercase text-muted-foreground mb-6" style={{letterSpacing: '3px'}}>
            SOLUTION
          </p>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight" style={{letterSpacing: '-1.5px'}}>
            The platform for
            <span className="font-serif italic font-normal">meaningful</span>
            content
          </h2>
</div>
<div className="rounded-2xl overflow-hidden mb-20 fade-up" style={{aspectRatio: '3/1'}}>
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="">
<source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4" type="video/mp4"/>
</video>
</div>
<div className="grid md:grid-cols-4 gap-8">
<div className="fade-up">
<iconify-icon className="mb-4 block" icon="mdi:rss" style={{color: '#fff'}} width="22"></iconify-icon>
<h3 className="font-semibold text-base mb-2">Curated Feed</h3>
<p className="text-muted-foreground text-sm leading-relaxed">
              A reading experience tuned for depth, not noise. Algorithms that
              respect attention.
            </p>
</div>
<div className="fade-up">
<iconify-icon className="mb-4 block" icon="mdi:pencil-outline" style={{color: '#fff'}} width="22"></iconify-icon>
<h3 className="font-semibold text-base mb-2">Writer Tools</h3>
<p className="text-muted-foreground text-sm leading-relaxed">
              Drafting, editing, and publishing built for writers who care about
              craft.
            </p>
</div>
<div className="fade-up">
<iconify-icon className="mb-4 block" icon="mdi:account-group-outline" style={{color: '#fff'}} width="22"></iconify-icon>
<h3 className="font-semibold text-base mb-2">Community</h3>
<p className="text-muted-foreground text-sm leading-relaxed">
              Conversations that go beyond comments. Discussion threads that
              actually matter.
            </p>
</div>
<div className="fade-up">
<iconify-icon className="mb-4 block" icon="mdi:rocket-launch-outline" style={{color: '#fff'}} width="22"></iconify-icon>
<h3 className="font-semibold text-base mb-2">Distribution</h3>
<p className="text-muted-foreground text-sm leading-relaxed">
              Reach readers across email, web, and AI surfaces — wherever
              discovery happens next.
            </p>
</div>
</div>
</div>
</section>

<section className="relative py-20 md:py-28 px-6 border-t border-border/30 overflow-hidden">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover z-0" id="cta-video" loop="" muted="" playsinline=""></video>
<div className="absolute inset-0 z-[1]" style={{background: 'hsla(0,0%,0%,0.45)'}}></div>
<div className="relative z-10 max-w-3xl mx-auto text-center fade-up">
<div className="flex justify-center mb-8">
<div className="relative w-10 h-10 rounded-full border-2 flex items-center justify-center" style={{borderColor: 'hsla(0,0%,100%,0.6)'}}>
<div className="w-5 h-5 rounded-full border" style={{borderColor: 'hsla(0,0%,100%,0.6)'}}></div>
</div>
</div>
<h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-6" style={{letterSpacing: '-1.5px'}}>
          Start Your
          <span className="font-serif italic font-normal">Journey</span>
</h2>
<p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10">
          Whether you read or write, Mindloop is the home for ideas worth your
          time.
        </p>
<div className="flex flex-col sm:flex-row gap-3 justify-center">
<button className="bg-foreground text-background rounded-lg px-8 py-3.5 text-sm font-semibold hover:scale-[1.03] active:scale-[0.98] transition-transform">
            Subscribe Now
          </button>
<button className="liquid-glass rounded-lg px-8 py-3.5 text-sm font-semibold hover:scale-[1.03] active:scale-[0.98] transition-transform" style={{color: 'hsl(var(--foreground))'}}>
            Start Writing
          </button>
</div>
</div>
</section>

<footer className="py-12 px-6 md:px-28 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-muted-foreground text-sm">
        © 2026 Mindloop. All rights reserved.
      </p>
<div className="flex gap-6">
<a className="text-muted-foreground text-sm hover:text-foreground transition" href="#">
          Privacy
        </a>
<a className="text-muted-foreground text-sm hover:text-foreground transition" href="#">
          Terms
        </a>
<a className="text-muted-foreground text-sm hover:text-foreground transition" href="#">
          Contact
        </a>
</div>
</footer>
<div className="py-6 px-6 text-center border-t border-border/30">
<p className="text-muted-foreground text-xs flex items-center justify-center gap-1.5">
        Designed with
        <iconify-icon icon="mdi:heart" style={{color: '#ef4444'}} width="12"></iconify-icon>
        by
        <a className="hover:text-foreground transition" href="https://anovas.co.in" target="_blank">
          anovas.co.in
        </a>
</p>
</div>


    </>
  );
}
