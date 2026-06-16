import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Set masthead date
    const dateEl = document.getElementById('masthead-date');
    if (dateEl) {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
      dateEl.textContent = formatter.format(now);
    }

    // Initialize lucide icons if needed in future JS hooks
    if (window.lucide) {
      window.lucide.createIcons({ attrs: { strokeWidth: 1.5 } });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative flex-1">
<div className="pointer-events-none absolute inset-0 opacity-5" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1526481280695-3c687fd543c0?auto=format&amp', backgroundSize: 'cover', mixBlendMode: 'multiply'}}></div>
<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8">

<div className="flex items-center justify-between border-b border-[#2D2D2D] pb-2 mb-4 text-xs tracking-[0.12em] uppercase" style={{fontFamily: '\'Inter\', system-ui, -apple-system'}}>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 border border-[#C41E3A] text-[#C41E3A] rounded-[2px]">Breaking</span>
<div className="overflow-hidden">
<div className="animate-[marquee_22s_linear_infinite] whitespace-nowrap">
<span className="mr-8">WireEdition learns from every story you read — and every story you skip.</span>
<span className="mr-8">Always use <span className="font-mono">auth.uid()</span> in RLS policies — never query <span className="font-mono">auth.users</span>.</span>
<span>Smart editions. Real-time insights. Classic newspaper calm.</span>
</div>
</div>
</div>
<div className="hidden sm:flex items-center gap-3 text-[10px] text-[#4A4A4A]">
<span>Vol. 1, No. 247</span>
<span className="w-px h-3 bg-[#E5E4E0]"></span>
<span id="masthead-date"></span>
</div>
</div>

<header className="mb-8 md:mb-10">
<div className="border-y border-[#2D2D2D] py-3 md:py-4 relative">
<div className="absolute inset-x-4 top-0 h-px bg-[#2D2D2D]/60"></div>
<div className="absolute inset-x-4 bottom-0 h-px bg-[#2D2D2D]/60"></div>
<div className="flex flex-col items-center text-center space-y-1">
<div className="text-[11px] tracking-[0.22em] uppercase text-[#4A4A4A]" style={{fontFamily: '\'Inter\', system-ui'}}>WireEdition</div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight uppercase" style={{fontFamily: '\'Playfair Display\', \'Times New Roman\', serif', fontWeight: '600', letterSpacing: '0.12em'}}>
              PERSONALIZED
            </h1>
<div className="flex items-center gap-4 text-[11px] uppercase text-[#4A4A4A]" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif', fontWeight: '500'}}>
<span className="inline-flex items-center gap-1">
<span className="w-4 border-t border-[#2D2D2D]"></span>
                Est. 2025
                <span className="w-4 border-t border-[#2D2D2D]"></span>
</span>
<span className="tracking-[0.18em]">Your AI Wire Edition</span>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row md:items-end md:justify-between mt-4 gap-4">
<div className="space-y-1">
<h2 className="text-[26px] sm:text-[32px] lg:text-[36px] leading-tight tracking-tight" style={{fontFamily: '\'Playfair Display\', serif', fontWeight: '700'}}>
              The World’s First Newspaper Written Just For You
            </h2>
<p className="text-[15px] sm:text-[16px] text-[#4A4A4A]" style={{fontFamily: '\'Merriweather\', serif', fontWeight: '500'}}>
              AI curates daily news based on <span className="underline decoration-[#C41E3A]/70 underline-offset-2">your</span> interests — and learns from every edition.
            </p>
</div>
<div className="flex items-center gap-3 text-[11px]" style={{fontFamily: '\'Inter\', system-ui'}}>
<button className="inline-flex items-center justify-center px-4 py-2 border border-[#1A1A1A] text-[#1A1A1A] rounded-[3px] text-xs uppercase tracking-[0.18em] bg-transparent transition-colors duration-150 hover:bg-[#1A1A1A] hover:text-[#F8F7F4] hover:shadow-sm">
              Start 4-day trial
            </button>
<button className="inline-flex items-center justify-center px-3 py-2 border border-dashed border-[#4A4A4A] text-[#4A4A4A] rounded-[3px] text-[11px] uppercase tracking-[0.16em] bg-transparent transition-colors duration-150 hover:border-[#1A1A1A] hover:text-[#1A1A1A]">
              View sample edition
            </button>
</div>
</div>
</header>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-10 lg:mb-14">

<div className="relative">
<div className="absolute -inset-2 border border-[#E5E4E0] rounded-[3px]"></div>
<div className="relative bg-[#F8F7F4] border border-[#2D2D2D] rounded-[3px] shadow-sm overflow-hidden transform origin-left animate-[unfold_3s_ease-out_forwards]">

<div className="flex items-center justify-between border-b border-[#E5E4E0] px-3 py-2 text-[11px]" style={{fontFamily: '\'Inter\', system-ui'}}>
<span className="uppercase tracking-[0.16em] text-[#4A4A4A]">Your Daily Wire</span>
<span className="flex items-center gap-2 text-[10px] text-[#4A4A4A]">
<span>Edition • 7:00 AM</span>
<span className="w-px h-3 bg-[#E5E4E0]"></span>
<span className="text-[#C41E3A]">Personalized</span>
</span>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E4E0]">

<article className="p-3 sm:p-4 space-y-2">
<h3 className="text-[15px] uppercase tracking-[0.14em] text-[#182441]" style={{fontFamily: '\'Merriweather\', serif', fontWeight: '600'}}>
                  Morning Briefing
                </h3>
<h4 className="text-[20px] leading-snug tracking-tight" style={{fontFamily: '\'Playfair Display\', serif', fontWeight: '700'}}>
                  AI Editor Highlights 5 Stories That Matter To You Today
                </h4>
<div className="w-full h-24 sm:h-20 bg-[#E5E4E0] border border-[#D4D3CF] overflow-hidden">
<img alt="City and data visualization" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&amp;fit=crop&amp;w=600&amp;q=60"/>
</div>
<p className="text-[13px] leading-relaxed text-[#4A4A4A]">
<span className="float-left text-[28px] leading-[1] pr-1 pt-[2px]" style={{fontFamily: '\'Playfair Display\', serif', fontWeight: '700'}}>E</span>
                  very edition starts with a bespoke briefing that blends markets, competitors, and niche topics you follow — in under five minutes of reading.
                </p>
<button className="mt-1 text-[11px] uppercase tracking-[0.18em] inline-flex items-center gap-1 text-[#1A1A1A] border-b border-[#1A1A1A]/40 pb-0.5 hover:border-[#1A1A1A] transition-colors" style={{fontFamily: '\'Inter\', system-ui'}}>
                  Read more
                  <span className="inline-flex">
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</article>

<article className="p-3 sm:p-4 space-y-3">
<header className="space-y-1">
<h3 className="text-[13px] uppercase tracking-[0.22em] text-[#182441]" style={{fontFamily: '\'Merriweather\', serif', fontWeight: '600'}}>
                    Industry • Signals
                  </h3>
<h4 className="text-[16px] leading-snug tracking-tight" style={{fontFamily: '\'Playfair Display\', serif', fontWeight: '700'}}>
                    Funding and product launches in your sector overnight
                  </h4>
</header>
<p className="text-[13px] leading-relaxed text-[#4A4A4A]">
                  A concise digest of competitor moves, new funding rounds, and regulatory changes filtered for your role and region.
                </p>
<div className="border-t border-[#E5E4E0] pt-2">
<h5 className="text-[12px] font-semibold mb-1" style={{fontFamily: '\'Merriweather\', serif', fontWeight: '600'}}>Competitor watch</h5>
<ul className="space-y-1 text-[12px] text-[#4A4A4A]">
<li className="flex justify-between">
<span>Acme launches EU beta</span>
<span className="text-[#C41E3A]">3 min read</span>
</li>
<li className="flex justify-between">
<span>Nexis hires Head of AI</span>
<span>2 min read</span>
</li>
</ul>
</div>
</article>

<article className="p-3 sm:p-4 space-y-3">
<h3 className="text-[13px] uppercase tracking-[0.22em] text-[#182441]" style={{fontFamily: '\'Merriweather\', serif', fontWeight: '600'}}>
                  AI Newsroom Chat
                </h3>
<div className="space-y-2 text-[12px] leading-relaxed text-[#4A4A4A]">
<p>Ask follow-ups at three levels:</p>
<ul className="space-y-1 ml-4 list-disc">
<li><span className="font-semibold">Story-level</span>: “Explain this M&amp;A in simple terms.”</li>
<li><span className="font-semibold">Edition-level</span>: “What are today’s 3 biggest risks?”</li>
<li><span className="font-semibold">Newsroom</span>: “Track this theme every day.”</li>
</ul>
</div>
<div className="border border-[#D4D3CF] bg-[#F8F7F4]/80 rounded-[2px] p-2 space-y-1">
<div className="flex items-start gap-2">
<div className="mt-0.5">
<svg className="w-3.5 h-3.5 text-[#1A1A1A]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M7 7h10"></path>
<path d="M7 12h6"></path>
<path d="M7 17h4"></path>
</svg>
</div>
<p className="text-[11px] leading-snug">
                      “Why does this regulation matter to <span className="underline decoration-[#C41E3A]/70 underline-offset-2">my</span> go-to-market?” 
                    </p>
</div>
<p className="text-[11px] leading-snug text-[#4A4A4A] border-t border-dashed border-[#E5E4E0] pt-1 mt-1">
                    WireEdition learns from which explanations you expand, which you skip, and how your interests evolve.
                  </p>
</div>
</article>
</div>
</div>
</div>

<div className="flex flex-col gap-4 lg:gap-6">

<div className="border border-[#2D2D2D] bg-[#F8F7F4]/90 rounded-[3px] shadow-sm">
<div className="border-b border-[#2D2D2D] px-3 py-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-[11px] uppercase tracking-[0.18em] text-[#182441]" style={{fontFamily: '\'Merriweather\', serif', fontWeight: '600'}}>
                  How It Works
                </span>
<span className="text-[10px] text-[#4A4A4A]" style={{fontFamily: '\'Inter\', system-ui'}}>Vintage workflow • Modern AI</span>
</div>
<span className="text-[10px] text-[#4A4A4A]" style={{fontFamily: '\'Inter\', system-ui'}}>2–3 minutes</span>
</div>
<div className="p-3 sm:p-4 space-y-3">
<div className="flex items-start gap-3">
<div className="w-6 h-6 border border-[#1A1A1A] rounded-full flex items-center justify-center text-[11px]" style={{fontFamily: '\'Merriweather\', serif', fontWeight: '600'}}>1</div>
<div>
<h4 className="text-[14px]" style={{fontFamily: '\'Merriweather\', serif', fontWeight: '600'}}>Tell us what you care about</h4>
<p className="text-[13px] text-[#4A4A4A] leading-relaxed">
                    A quick 2-minute conversation onboarding captures roles, competitors, themes, and “never miss” signals.
                  </p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-6 h-6 border border-[#1A1A1A] rounded-full flex items-center justify-center text-[11px]" style={{fontFamily: '\'Merriweather\', serif', fontWeight: '600'}}>2</div>
<div>
<h4 className="text-[14px]" style={{fontFamily: '\'Merriweather\', serif', fontWeight: '600'}}>Receive your daily edition</h4>
<p className="text-[13px] text-[#4A4A4A] leading-relaxed">
                    Every morning at your preferred time, an edition lands in your inbox and in the app — tuned to today’s signals.
                  </p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-6 h-6 border border-[#1A1A1A] rounded-full flex items-center justify-center text-[11px]" style={{fontFamily: '\'Merriweather\', serif', fontWeight: '600'}}>3</div>
<div>
<h4 className="text-[14px]" style={{fontFamily: '\'Merriweather\', serif', fontWeight: '600'}}>Read, learn, act</h4>
<p className="text-[13px] text-[#4A4A4A] leading-relaxed">
                    Smart summaries, “Why this matters” pull quotes, and action prompts convert reading into decision-making.
                  </p>
</div>
</div>
</div>
</div>

<div className="border border-[#2D2D2D] bg-[#F8F7F4]/90 rounded-[3px]">
<div className="border-b border-[#2D2D2D] px-3 py-2 flex items-center justify-between">
<span className="text-[11px] uppercase tracking-[0.18em]" style={{fontFamily: '\'Merriweather\', serif', fontWeight: '600'}}>Why readers subscribe</span>
<span className="text-[10px] text-[#4A4A4A]" style={{fontFamily: '\'Inter\', system-ui'}}>Designed for focused professionals</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E4E0]">
<div className="p-3 sm:p-4 text-[13px] leading-relaxed">
<p><span className="font-semibold">Know what matters to you</span> in 5 minutes with one AI-edited front page.</p>
</div>
<div className="p-3 sm:p-4 text-[13px] leading-relaxed">
<p><span className="font-semibold">Never miss competitor updates</span> across launches, funding, and hiring.</p>
</div>
<div className="p-3 sm:p-4 text-[13px] leading-relaxed">
<p><span className="font-semibold">Stay ahead in your industry</span> with deep AI research on demand.</p>
</div>
</div>
</div>

<div className="border border-dashed border-[#2D2D2D] bg-[#F8F7F4]/80 rounded-[3px]">
<div className="px-3 py-2 border-b border-[#E5E4E0] flex items-center justify-between">
<span className="text-[11px] uppercase tracking-[0.18em]" style={{fontFamily: '\'Merriweather\', serif', fontWeight: '600'}}>Interactive newsroom</span>
<span className="text-[10px] text-[#4A4A4A]" style={{fontFamily: '\'Inter\', system-ui'}}>3 chat contexts</span>
</div>
<div className="p-3 sm:p-4 space-y-3">
<div className="flex gap-2 text-[11px]" style={{fontFamily: '\'Inter\', system-ui'}}>
<button className="flex-1 border border-[#1A1A1A] rounded-[3px] px-2 py-1.5 uppercase tracking-[0.18em] bg-[#F8F7F4] text-[#1A1A1A] transition-colors hover:bg-[#1A1A1A] hover:text-[#F8F7F4]">
                  Story-level
                </button>
<button className="flex-1 border border-[#1A1A1A] rounded-[3px] px-2 py-1.5 uppercase tracking-[0.18em] bg-transparent text-[#1A1A1A] transition-colors hover:bg-[#1A1A1A] hover:text-[#F8F7F4]">
                  Edition-level
                </button>
<button className="flex-1 border border-[#1A1A1A] rounded-[3px] px-2 py-1.5 uppercase tracking-[0.18em] bg-transparent text-[#1A1A1A] transition-colors hover:bg-[#1A1A1A] hover:text-[#F8F7F4]">
                  Newsroom
                </button>
</div>
<div className="border border-[#E5E4E0] bg-[#F8F7F4] rounded-[2px] p-2 text-[12px] leading-relaxed">
<p><span className="font-semibold">Example:</span> “Summarize this earnings call and highlight what product and GTM leaders need to know.”</p>
<p className="mt-1 text-[#4A4A4A]">The system logs every query, maps it to your Neon Auth <span className="font-mono text-[11px]">user_id</span>, and continuously refines your edition.</p>
</div>
</div>
</div>
</div>
</section>

<div className="flex items-center justify-center my-6">
<div className="flex-1 border-t border-[#E5E4E0]"></div>
<div className="mx-4 text-xs text-[#4A4A4A]" style={{fontFamily: '\'EB Garamond\', serif'}}>❖</div>
<div className="flex-1 border-t border-[#E5E4E0]"></div>
</div>

<main className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-10 lg:mb-16">

<section className="space-y-4">
<header className="border-b border-[#2D2D2D] pb-1">
<div className="flex items-center justify-between">
<h3 className="text-[15px] uppercase tracking-[0.24em] text-[#182441]" style={{fontFamily: '\'Merriweather\', serif', fontWeight: '600'}}>Today’s Front Section</h3>
<span className="text-[10px] text-[#4A4A4A]" style={{fontFamily: '\'Inter\', system-ui'}}>Personalized per reader</span>
</div>
</header>
<article className="space-y-3">
<h4 className="text-[20px] leading-snug tracking-tight" style={{fontFamily: '\'Playfair Display\', serif', fontWeight: '700'}}>
              AI composes your edition using structured, logged signals — not generic feeds
            </h4>
<p className="text-[14px] leading-relaxed text-[#4A4A4A]">
<span className="float-left text-[30px] leading-[1] pr-1 pt-[2px]" style={{fontFamily: '\'Playfair Display\', serif', fontWeight: '700'}}>E</span>
              very click, hover, and “read more” you trigger becomes a datapoint the AI editor considers for tomorrow’s layout. Edge functions log interactions with full context, including clear status flags and response schemas — no mystery, just observable behavior.
            </p>
<blockquote className="border-l-2 border-[#C41E3A] pl-3 py-1 text-[14px] italic leading-relaxed" style={{fontFamily: '\'EB Garamond\', serif'}}>
              “Why this matters: Your newspaper doesn’t just summarize the world — it learns how <span className="not-italic underline underline-offset-2 decoration-[#C41E3A]/70">you</span> see it.”
            </blockquote>
</article>
</section>

<section className="space-y-4">
<header className="border-b border-[#2D2D2D] pb-1">
<div className="flex items-center justify-between">
<h3 className="text-[15px] uppercase tracking-[0.24em] text-[#182441]" style={{fontFamily: '\'Merriweather\', serif', fontWeight: '600'}}>Engineering the Press</h3>
<span className="text-[10px] text-[#4A4A4A]" style={{fontFamily: '\'Inter\', system-ui'}}>For technical teams</span>
</div>
</header>
<article className="space-y-3 text-[13px] leading-relaxed text-[#4A4A4A]">
<p className="font-semibold text-[#1A1A1A]">Key patterns that keep your AI newsroom safe and reliable:</p>
<ul className="space-y-1 list-disc ml-4">
<li>Always use <span className="font-mono text-[12px]">auth.uid()</span> in RLS policies — never query <span className="font-mono text-[12px]">auth.users</span>.</li>
<li>Link all user data to a single <span className="font-mono text-[12px]">user_id</span> from your auth system.</li>
<li>Add comprehensive logging in edge functions for every AI call and edition generation.</li>
<li>Return structured responses with clear <span className="font-mono text-[12px]">status</span> flags and error envelopes.</li>
<li>Provide exact JSON schemas in AI prompts and handle alternative formats gracefully.</li>
<li>Use <span className="font-mono text-[12px]">maybeSingle()</span> for optional queries and avoid silent failures.</li>
<li>Show specific loading states and error messages in the reader UI.</li>
</ul>
<div className="border border-dashed border-[#E5E4E0] p-2 rounded-[2px]">
<p className="text-[12px]">
                Every subscription and pricing interaction hits <span className="font-mono">/create-polar-session</span> with your Neon Auth <span className="font-mono">user_id</span>, ensuring billing and reading history stay in perfect sync.
              </p>
</div>
</article>
</section>

<section className="space-y-4">
<header className="border-b border-[#2D2D2D] pb-1">
<div className="flex items-center justify-between">
<h3 className="text-[15px] uppercase tracking-[0.24em] text-[#182441]" style={{fontFamily: '\'Merriweather\', serif', fontWeight: '600'}}>Ask the Newsroom</h3>
<span className="text-[10px] text-[#4A4A4A]" style={{fontFamily: '\'Inter\', system-ui'}}>Live AI chat</span>
</div>
</header>
<div className="border border-[#2D2D2D] bg-[#F8F7F4]/80 rounded-[3px] flex flex-col h-full">
<div className="px-3 py-2 border-b border-[#E5E4E0] flex items-center justify-between text-[11px]" style={{fontFamily: '\'Inter\', system-ui'}}>
<div className="flex items-center gap-2">
<span className="uppercase tracking-[0.14em]">Context</span>
<span className="w-px h-3 bg-[#E5E4E0]"></span>
<span className="text-[#1A1A1A]">Story</span>
<span className="text-[#4A4A4A]">Edition</span>
<span className="text-[#4A4A4A]">Newsroom</span>
</div>
<span className="text-[#4A4A4A]">Live</span>
</div>
<div className="p-3 flex-1 flex flex-col gap-2 text-[12px]" style={{fontFamily: '\'Inter\', system-ui'}}>
<div className="flex gap-2">
<div className="w-6 h-6 rounded-full overflow-hidden bg-[#E5E4E0] border border-[#D4D3CF]">
<img alt="Reader avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&amp;fit=crop&amp;w=200&amp;q=60"/>
</div>
<div className="bg-[#F8F7F4] border border-[#E5E4E0] rounded-[3px] px-2 py-1.5">
<p>Summarize this story for our sales team in 3 bullets.</p>
</div>
</div>
<div className="flex gap-2">
<div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#1A1A1A] text-[#F8F7F4] text-[10px] tracking-[0.18em]" style={{fontFamily: '\'Inter\', system-ui'}}>
                  AI
                </div>
<div className="bg-[#F8F7F4] border border-[#E5E4E0] rounded-[3px] px-2 py-1.5">
<ul className="list-disc ml-4 space-y-0.5">
<li>Highlights impact on pipeline and pricing.</li>
<li>Calls out competitor positioning.</li>
<li>Suggests one actionable follow-up.</li>
</ul>
</div>
</div>
<div className="mt-1 border-t border-[#E5E4E0] pt-2 text-[11px] text-[#4A4A4A]">
                Continuous learning: this conversation updates your profile for future editions.
              </div>
</div>
<div className="border-t border-[#E5E4E0] px-2.5 py-2 flex items-center gap-2" style={{fontFamily: '\'Inter\', system-ui'}}>
<input className="flex-1 bg-transparent text-[12px] placeholder:text-[#B0AEA8] focus:outline-none" placeholder="Ask your AI editor anything about today’s news…" type="text"/>
<button className="px-3 py-1.5 border border-[#1A1A1A] rounded-[3px] text-[11px] uppercase tracking-[0.18em] bg-transparent hover:bg-[#1A1A1A] hover:text-[#F8F7F4] transition-colors">
                Send
              </button>
</div>
</div>
</section>
</main>

<section className="mb-10 lg:mb-16" id="pricing">
<header className="border-y border-[#2D2D2D] py-2 mb-4 flex items-center justify-between">
<h3 className="text-[15px] uppercase tracking-[0.26em] text-[#182441]" style={{fontFamily: '\'Merriweather\', serif', fontWeight: '600'}}>Subscriptions &amp; Classifieds</h3>
<span className="text-[10px] text-[#4A4A4A]" style={{fontFamily: '\'Inter\', system-ui'}}>Secure Polar checkout • Cancel anytime</span>
</header>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<article className="border border-[#2D2D2D] bg-[#F8F7F4]/90 rounded-[3px] shadow-sm hover:shadow-md transition-shadow">
<div className="border-b border-[#2D2D2D] px-3 py-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-[13px] uppercase tracking-[0.18em]" style={{fontFamily: '\'Merriweather\', serif', fontWeight: '600'}}>Pro Edition</span>
<span className="text-[10px] text-[#C41E3A]" style={{fontFamily: '\'Inter\', system-ui'}}>Most readers start here</span>
</div>
<div className="text-right" style={{fontFamily: '\'Inter\', system-ui'}}>
<div className="text-[18px] font-semibold">$9<span className="text-[11px] font-normal">/mo</span></div>
<div className="text-[10px] text-[#4A4A4A] uppercase tracking-[0.18em]">4-day free trial</div>
</div>
</div>
<div className="p-3 sm:p-4 space-y-3 text-[13px] leading-relaxed text-[#4A4A4A]">
<p>For focused operators who want a calm, daily briefing instead of infinite feeds.</p>
<ul className="space-y-1 list-disc ml-4">
<li>Daily personalized editions every morning.</li>
<li>Up to 3 custom sections (e.g. Markets, Competitors, Policy).</li>
<li>Smart summaries and “Why this matters” callouts.</li>
<li>Email + in-app reading experience.</li>
</ul>
<form className="mt-2">
<button className="w-full inline-flex items-center justify-center px-4 py-2 border border-[#1A1A1A] rounded-[3px] text-[11px] uppercase tracking-[0.18em] bg-transparent text-[#1A1A1A] transition-colors hover:bg-[#1A1A1A] hover:text-[#F8F7F4]" style={{fontFamily: '\'Inter\', system-ui'}} type="submit">
                  Start Pro via Polar
                </button>
<p className="mt-1 text-[10px] text-[#4A4A4A] text-center">
                  Creates a Polar session using your Neon Auth <span className="font-mono">user_id</span>.
                </p>
</form>
</div>
</article>

<article className="border border-[#2D2D2D] bg-[#F8F7F4]/96 rounded-[3px] shadow-sm hover:shadow-md transition-shadow relative">
<div className="absolute -top-2 right-3 px-2 py-0.5 bg-[#1A1A1A] text-[#F8F7F4] text-[10px] uppercase tracking-[0.18em] rounded-[2px]" style={{fontFamily: '\'Inter\', system-ui'}}>
              For leadership teams
            </div>
<div className="border-b border-[#2D2D2D] px-3 py-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-[13px] uppercase tracking-[0.18em]" style={{fontFamily: '\'Merriweather\', serif', fontWeight: '600'}}>Premium Edition</span>
<span className="text-[10px] text-[#C41E3A]" style={{fontFamily: '\'Inter\', system-ui'}}>Most depth</span>
</div>
<div className="text-right" style={{fontFamily: '\'Inter\', system-ui'}}>
<div className="text-[18px] font-semibold">$19<span className="text-[11px] font-normal">/mo</span></div>
<div className="text-[10px] text-[#4A4A4A] uppercase tracking-[0.18em]">Cancel anytime</div>
</div>
</div>
<div className="p-3 sm:p-4 space-y-3 text-[13px] leading-relaxed text-[#4A4A4A]">
<p>For executives and teams who need real-time intelligence and deeper AI research.</p>
<ul className="space-y-1 list-disc ml-4">
<li>Everything in Pro, plus real-time breaking updates.</li>
<li>Unlimited topics and competitor watchlists.</li>
<li>Deep AI research briefs with exact JSON schemas.</li>
<li>Edition-level and newsroom chat with logging &amp; observability.</li>
</ul>
<form className="mt-2">
<button className="w-full inline-flex items-center justify-center px-4 py-2 border border-[#1A1A1A] rounded-[3px] text-[11px] uppercase tracking-[0.18em] bg-transparent text-[#1A1A1A] transition-colors hover:bg-[#1A1A1A] hover:text-[#F8F7F4]" style={{fontFamily: '\'Inter\', system-ui'}} type="submit">
                  Upgrade to Premium
                </button>
<p className="mt-1 text-[10px] text-[#4A4A4A] text-center">
                  Triggers <span className="font-mono">/create-polar-session</span> with your Neon Auth <span className="font-mono">user_id</span>.
                </p>
</form>
</div>
</article>
</div>
</section>

<section className="mb-10 lg:mb-16 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="lg:col-span-2 space-y-4">
<header className="border-b border-[#2D2D2D] pb-1">
<h3 className="text-[15px] uppercase tracking-[0.26em] text-[#182441]" style={{fontFamily: '\'Merriweather\', serif', fontWeight: '600'}}>Questions from the newsroom</h3>
</header>
<div className="space-y-3">
<details className="group border-b border-[#E5E4E0] pb-2">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-[14px]" style={{fontFamily: '\'Merriweather\', serif', fontWeight: '500'}}>How personalized is each edition?</span>
<span className="ml-2 text-xs text-[#4A4A4A] group-open:rotate-90 transition-transform">›</span>
</summary>
<p className="mt-1 text-[13px] leading-relaxed text-[#4A4A4A]">
                The system trains on your interests, roles, and reading patterns — including which stories you expand, which chats you open, and when you read — to shape layout, priority, and depth. No two editions are the same.
              </p>
</details>
<details className="group border-b border-[#E5E4E0] pb-2">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-[14px]" style={{fontFamily: '\'Merriweather\', serif', fontWeight: '500'}}>How do you handle security and auth?</span>
<span className="ml-2 text-xs text-[#4A4A4A] group-open:rotate-90 transition-transform">›</span>
</summary>
<p className="mt-1 text-[13px] leading-relaxed text-[#4A4A4A]">
                All reading history and preferences are linked to the Neon Auth <span className="font-mono text-[12px]">user_id</span>. RLS policies rely on <span className="font-mono text-[12px]">auth.uid()</span> only, and we never join directly against <span className="font-mono text-[12px]">auth.users</span>. Every edge function includes structured logging with clear status flags.
              </p>
</details>
<details className="group border-b border-[#E5E4E0] pb-2">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-[14px]" style={{fontFamily: '\'Merriweather\', serif', fontWeight: '500'}}>Can I bring my own data sources?</span>
<span className="ml-2 text-xs text-[#4A4A4A] group-open:rotate-90 transition-transform">›</span>
</summary>
<p className="mt-1 text-[13px] leading-relaxed text-[#4A4A4A]">
                Yes. WireEdition can ingest RSS, APIs, and internal knowledge bases. We treat each source with explicit schemas and track alternate response formats so editions stay consistent and explainable.
              </p>
</details>
</div>
</div>

<div className="space-y-4">
<header className="border-b border-[#2D2D2D] pb-1">
<h3 className="text-[15px] uppercase tracking-[0.26em] text-[#182441]" style={{fontFamily: '\'Merriweather\', serif', fontWeight: '600'}}>In the words of our readers</h3>
</header>
<figure className="border border-[#2D2D2D] bg-[#F8F7F4]/90 rounded-[3px] p-4 shadow-sm">
<blockquote className="text-[14px] italic leading-relaxed" style={{fontFamily: '\'EB Garamond\', serif'}}>
              “WireEdition feels like having a chief-of-staff rewrite the internet for me every morning.”
            </blockquote>
<figcaption className="mt-3 flex items-center gap-3">
<div className="w-9 h-9 rounded-full overflow-hidden border border-[#D4D3CF]">
<img alt="Reader" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&amp;fit=crop&amp;w=200&amp;q=60"/>
</div>
<div className="text-[12px] leading-tight">
<div style={{fontFamily: '\'Merriweather\', serif', fontWeight: '500'}}>Elena K., VP Product</div>
<div className="text-[#4A4A4A]">B2B SaaS, London</div>
</div>
</figcaption>
</figure>
<figure className="border border-[#2D2D2D] bg-[#F8F7F4]/90 rounded-[3px] p-4 shadow-sm">
<blockquote className="text-[14px] italic leading-relaxed" style={{fontFamily: '\'EB Garamond\', serif'}}>
              “It’s the first AI product where I can see every decision — logs, schemas, and all — without losing the calm of reading a newspaper.”
            </blockquote>
<figcaption className="mt-3 flex items-center gap-3">
<div className="w-9 h-9 rounded-full overflow-hidden border border-[#D4D3CF]">
<img alt="Reader" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&amp;fit=crop&amp;w=200&amp;q=60"/>
</div>
<div className="text-[12px] leading-tight">
<div style={{fontFamily: '\'Merriweather\', serif', fontWeight: '500'}}>Marcus L., Head of Data</div>
<div className="text-[#4A4A4A]">Fintech, New York</div>
</div>
</figcaption>
</figure>
</div>
</section>

<footer className="border-t border-[#2D2D2D] pt-3 mt-4">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-[#4A4A4A]" style={{fontFamily: '\'Inter\', system-ui'}}>
<div className="uppercase tracking-[0.22em]">
            Published daily by Personalized Inc. Est. 2025
          </div>
<div className="flex items-center gap-4">
<a className="hover:underline" href="#pricing">Subscriptions</a>
<a className="hover:underline" href="#">Security &amp; RLS</a>
<a className="hover:underline" href="#">Newsroom API</a>
</div>
</div>
</footer>
</div>
</div>

<style>
    @keyframes unfold {
      0% { transform: scaleX(0.2) rotateY(40deg); opacity: 0; }
      40% { opacity: 1; }
      100% { transform: scaleX(1) rotateY(0deg); opacity: 1; }
    }
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  </style>


    </>
  );
}
