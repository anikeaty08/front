import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          const storyIcon = document.getElementById('icon-story-chat');
          const editionIcon = document.getElementById('icon-edition-chat');
          const newsroomIcon = document.getElementById('icon-newsroom-chat');

          if (storyIcon) {
            lucide.createIcons({
              icons: { MessageSquare: lucide.MessageSquare },
              attrs: { 'stroke-width': 1.5, class: 'w-4 h-4' },
              nameAttr: 'data-lucide'
            });
            storyIcon.innerHTML = '<svg data-lucide="MessageSquare"></svg>';
          }
          if (editionIcon) {
            editionIcon.innerHTML = '<svg data-lucide="MessagesSquare"></svg>';
          }
          if (newsroomIcon) {
            newsroomIcon.innerHTML = '<svg data-lucide="Newspaper"></svg>';
          }
          lucide.createIcons({ attrs: { 'stroke-width': 1.5, class: 'w-4 h-4' } });
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex flex-col">

<div className="border-b border-[#2D2D2D] bg-[#F8F7F4]/90 backdrop-blur">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2">
<div className="flex items-center gap-2">
<span className="uppercase tracking-[0.2em] text-[10px] font-[500] text-[#C41E3A]">
              Breaking
            </span>
<div className="h-px w-6 bg-[#C41E3A]"></div>
<div className="overflow-hidden">
<p className="text-[11px] sm:text-xs text-[#4A4A4A] whitespace-nowrap animate-[scroll_18s_linear_infinite]">
                TRAE agents now craft your daily WireEdition • Neon-secured secrets keep OpenAI, Tavily, Polar and Resend keys fully encrypted • New: story, edition &amp; newsroom-level AI chatrooms
              </p>
</div>
</div>
<div className="hidden sm:flex items-center gap-4 text-[11px] text-[#4A4A4A] font-[500]" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
<span className="uppercase tracking-[0.18em]">Vol. 1, No. 247</span>
<span className="h-3 w-px bg-[#E5E4E0]"></span>
<span className="uppercase tracking-[0.18em]">
              Est. 2025
            </span>
</div>
</div>
</div>

<main className="flex-1">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 relative">

<div className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1512428232643-3eaca40b51fd?auto=format&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>

<header className="relative">
<div className="border-y border-[#2D2D2D] py-4 sm:py-5">
<div className="flex flex-col items-center text-center gap-1">
<p className="text-[11px] sm:text-xs tracking-[0.35em] text-[#4A4A4A] uppercase" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif'}}>
                  Personalized
                </p>
<h1 className="text-3xl sm:text-4xl lg:text-[44px] leading-none tracking-tight mt-1" style={{fontFamily: '\'Playfair Display\', \'Times New Roman\', serif', fontWeight: '600'}}>
                  WireEdition
                </h1>
<div className="flex items-center gap-3 mt-3 text-[11px] sm:text-xs text-[#4A4A4A]" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>
<span className="uppercase tracking-[0.25em]">Est. 2025</span>
<span className="h-[1px] w-8 bg-[#2D2D2D]"></span>
<span className="uppercase tracking-[0.25em]">
                    Your AI Wire Edition
                  </span>
<span className="h-[1px] w-8 bg-[#2D2D2D] hidden sm:block"></span>
<span className="hidden sm:inline uppercase tracking-[0.18em]">Published Daily</span>
</div>
</div>
</div>

<nav className="border-b border-[#2D2D2D] bg-[#F8F7F4]/90 backdrop-blur-sm">
<div className="flex flex-wrap items-center justify-between gap-3 py-2 text-[11px] sm:text-xs" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
<div className="flex flex-wrap gap-4 sm:gap-6 uppercase tracking-[0.18em]">
<a className="hover:underline decoration-[#C41E3A] underline-offset-4" href="#how-it-works">
                    How it works
                  </a>
<a className="hover:underline decoration-[#C41E3A] underline-offset-4" href="#pricing">
                    Pricing
                  </a>
<a className="hover:underline decoration-[#C41E3A] underline-offset-4" href="#chat">
                    AI newsroom
                  </a>
<a className="hover:underline decoration-[#C41E3A] underline-offset-4" href="#faq">
                    FAQ
                  </a>
</div>
<div className="flex items-center gap-3">
<button className="px-3 py-[5px] text-[11px] uppercase tracking-[0.18em] border border-[#1A1A1A] rounded-[3px] hover:bg-[#1A1A1A] hover:text-[#F8F7F4] transition-colors" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                    Sign in
                  </button>
<button className="px-3 py-[5px] text-[11px] uppercase tracking-[0.18em] border border-[#C41E3A] text-[#C41E3A] rounded-[3px] hover:bg-[#C41E3A] hover:text-[#F8F7F4] transition-colors" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                    Start free trial
                  </button>
</div>
</div>
</nav>
</header>

<section className="relative mt-6 sm:mt-8 lg:mt-10">
<div className="border border-[#2D2D2D] shadow-[0_18px_40px_rgba(0,0,0,0.08)] bg-[#F8F7F4]/95">

<div className="grid lg:grid-cols-3 border-b border-[#2D2D2D]">

<div className="lg:col-span-2 border-r border-[#E5E4E0] p-4 sm:p-6 lg:p-8 relative overflow-hidden">

<div className="absolute inset-0 pointer-events-none opacity-0 lg:opacity-100 lg:animate-[unfurl_3s_ease-out_1] origin-top-left" style={{background: 'radial-gradient(circle at 0 0, rgba(0,0,0,0.08), transparent 55%)'}}></div>
<div className="relative space-y-3">
<p className="uppercase tracking-[0.28em] text-[10px] sm:text-[11px] text-[#C41E3A]" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif'}}>
                      Front Page • Personal Edition
                    </p>
<h2 className="text-[26px] sm:text-[32px] lg:text-[40px] leading-[1.05] tracking-tight" style={{fontFamily: '\'Playfair Display\', \'Times New Roman\', serif', fontWeight: '700'}}>
                      The World’s First Newspaper Written Just For You
                    </h2>
<p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed max-w-xl" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>
                      WireEdition wakes up before you do. TRAE agents, OpenAI, Tavily and Neon quietly assemble a front page that understands your markets, competitors and curiosities—then lands in your inbox like clockwork.
                    </p>
<div className="mt-4 flex flex-wrap items-center gap-3">
<button className="px-5 py-2 border border-[#1A1A1A] rounded-[3px] text-[12px] uppercase tracking-[0.18em] hover:bg-[#1A1A1A] hover:text-[#F8F7F4] transition-colors" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                        Start 4-day free trial
                      </button>
<button className="px-4 py-2 border border-[#4A4A4A] rounded-[3px] text-[12px] uppercase tracking-[0.18em] text-[#4A4A4A] hover:bg-[#1A1A1A] hover:text-[#F8F7F4] transition-colors" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                        View sample edition
                      </button>
<p className="text-[11px] text-[#4A4A4A]" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>
                        No setup hassle. Neon-secured, Polar-powered subscriptions.
                      </p>
</div>
<div className="mt-6 border border-[#E5E4E0] bg-[#F8F7F4] px-3 py-3 sm:px-4 sm:py-3">
<p className="uppercase tracking-[0.26em] text-[10px] text-[#182441]" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif'}}>
                        Why this matters
                      </p>
<p className="mt-1 text-sm text-[#1A1A1A] leading-relaxed" style={{fontFamily: '\'EB Garamond\', \'Times New Roman\', serif', fontStyle: 'italic'}}>
                        In a world of infinite feeds, professionals don’t need more noise—they need a brief, decisive edition that knows their sector better every day they read it.
                      </p>
</div>
</div>
</div>

<aside className="p-4 sm:p-5 lg:p-6 bg-[#F8F7F4]">
<div className="border border-[#2D2D2D] bg-[#F8F7F4] shadow-[0_10px_25px_rgba(0,0,0,0.12)]">
<div className="border-b border-[#2D2D2D] px-3 py-2 text-center">
<p className="text-[9px] tracking-[0.35em] uppercase text-[#4A4A4A]" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif'}}>
                        Sample Edition
                      </p>
<p className="text-[14px] tracking-tight" style={{fontFamily: '\'Playfair Display\', \'Times New Roman\', serif', fontWeight: '600'}}>
                        Thursday, May 22
                      </p>
</div>

<div className="grid grid-cols-2 gap-3 px-3 py-3">
<div className="col-span-2 border-b border-[#E5E4E0] pb-2">
<p className="text-[10px] tracking-[0.22em] uppercase text-[#C41E3A]" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif'}}>
                          Lead Story • Strategy
                        </p>
<h3 className="mt-1 text-[13px] leading-snug tracking-tight" style={{fontFamily: '\'Playfair Display\', \'Times New Roman\', serif', fontWeight: '700'}}>
                          Your top 3 competitors quietly expanded into AI this week
                        </h3>
<p className="mt-1 text-[11px] leading-snug text-[#4A4A4A]" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>
<span className="float-left text-[22px] leading-none mr-1 -mt-[2px]" style={{fontFamily: '\'Playfair Display\', \'Times New Roman\', serif'}}>A</span>
                          concise breakdown of funding moves, talent hires and product launches you can’t afford to miss.
                        </p>
</div>
<div className="space-y-1">
<h4 className="text-[11px] leading-tight tracking-tight" style={{fontFamily: '\'Playfair Display\', \'Times New Roman\', serif', fontWeight: '600'}}>
                          Market Briefing
                        </h4>
<p className="text-[10px] text-[#4A4A4A] leading-snug" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>
                          Overnight moves across your watchlist, summarized in under 90 seconds.
                        </p>
</div>
<div className="space-y-1">
<h4 className="text-[11px] leading-tight tracking-tight" style={{fontFamily: '\'Playfair Display\', \'Times New Roman\', serif', fontWeight: '600'}}>
                          Research Spotlight
                        </h4>
<p className="text-[10px] text-[#4A4A4A] leading-snug" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>
                          Long-form AI analysis on one theme you follow—no filler, just signal.
                        </p>
</div>
</div>
<div className="border-t border-[#E5E4E0] px-3 py-2 flex items-center justify-between">
<p className="text-[9px] tracking-[0.22em] uppercase text-[#4A4A4A]" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                        Generated by TRAE agents
                      </p>
<p className="text-[9px] text-[#4A4A4A]" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>
                        Powered by Neon, Polar, Resend
                      </p>
</div>
</div>
</aside>
</div>

<section className="border-b border-[#2D2D2D] bg-[#F8F7F4]">
<div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E5E4E0]">
<div className="p-4 sm:p-5">
<h3 className="text-sm sm:text-base leading-snug tracking-tight" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif', fontWeight: '600'}}>
                      Know what matters to YOU in 5 minutes.
                    </h3>
<p className="mt-2 text-[13px] text-[#4A4A4A] leading-relaxed" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>
                      Conversational onboarding teaches WireEdition your markets, roles and red lines—then trims the world down to one tight edition.
                    </p>
</div>
<div className="p-4 sm:p-5">
<h3 className="text-sm sm:text-base leading-snug tracking-tight" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif', fontWeight: '600'}}>
                      Never miss competitor updates.
                    </h3>
<p className="mt-2 text-[13px] text-[#4A4A4A] leading-relaxed" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>
                      Tavily-powered research and TRAE agents watch your space—from new launches to leadership moves—and surface what needs your attention.
                    </p>
</div>
<div className="p-4 sm:p-5">
<h3 className="text-sm sm:text-base leading-snug tracking-tight" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif', fontWeight: '600'}}>
                      Stay ahead in your industry.
                    </h3>
<p className="mt-2 text-[13px] text-[#4A4A4A] leading-relaxed" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>
                      Continuous learning adapts your edition to what you actually read, click and discuss—every morning gets sharper.
                    </p>
</div>
</div>
</section>

<section className="border-b border-[#2D2D2D]" id="how-it-works">
<div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#E5E4E0]">

<div className="lg:col-span-2 p-4 sm:p-6">
<div className="flex items-center justify-between mb-3">
<h2 className="text-lg sm:text-xl tracking-tight" style={{fontFamily: '\'Playfair Display\', \'Times New Roman\', serif', fontWeight: '700'}}>
                        How WireEdition Works
                      </h2>
<span className="text-[10px] uppercase tracking-[0.2em] text-[#4A4A4A]" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif'}}>
                        Daily Automation
                      </span>
</div>
<div className="h-px bg-[#2D2D2D] mb-4"></div>
<ol className="space-y-4">
<li className="flex gap-3">
<div className="w-6 h-6 border border-[#2D2D2D] rounded-full flex items-center justify-center text-[11px] mt-[2px] bg-[#F8F7F4]" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif'}}>
                          1
                        </div>
<div>
<h3 className="text-sm sm:text-base tracking-tight" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif', fontWeight: '600'}}>
                            Tell us what you care about
                          </h3>
<p className="mt-1 text-[13px] text-[#4A4A4A] leading-relaxed" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>
                            A two-minute conversational onboarding flow collects your topics, roles, companies and “don’t waste my time with this” zones, storing them securely in Neon.
                          </p>
</div>
</li>
<li className="flex gap-3">
<div className="w-6 h-6 border border-[#2D2D2D] rounded-full flex items-center justify-center text-[11px] mt-[2px] bg-[#F8F7F4]" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif'}}>
                          2
                        </div>
<div>
<h3 className="text-sm sm:text-base tracking-tight" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif', fontWeight: '600'}}>
                            Receive your daily edition
                          </h3>
<p className="mt-1 text-[13px] text-[#4A4A4A] leading-relaxed" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>
                            Every morning at your chosen time, TRAE AutomationAgent orchestrates Tavily search, OpenAI summarization and Neon content storage—then Resend delivers your edition.
                          </p>
</div>
</li>
<li className="flex gap-3">
<div className="w-6 h-6 border border-[#2D2D2D] rounded-full flex items-center justify-center text-[11px] mt-[2px] bg-[#F8F7F4]" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif'}}>
                          3
                        </div>
<div>
<h3 className="text-sm sm:text-base tracking-tight" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif', fontWeight: '600'}}>
                            Read, learn, act
                          </h3>
<p className="mt-1 text-[13px] text-[#4A4A4A] leading-relaxed" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>
                            Story-level chats, edition-level debates and a persistent newsroom agent help you interrogate the news, test strategies and log decisions. Engagement continuously refines your profile.
                          </p>
</div>
</li>
</ol>
<div className="mt-5 border border-[#E5E4E0] px-3 py-3 sm:px-4 sm:py-3 bg-[#F8F7F4]/80">
<p className="text-[11px] uppercase tracking-[0.2em] text-[#182441]" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif'}}>
                        Under the newsroom hood
                      </p>
<p className="mt-1 text-[12px] text-[#4A4A4A] leading-relaxed" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>
                        Neon Auth anchors every reader; Polar binds subscriptions to user IDs; Neon Secrets encrypts OpenAI, Tavily, Polar and Resend keys. TRAE agents orchestrate schema-safe calls, structured JSON outputs and daily schedules—with logging ready for edge deployments.
                      </p>
</div>
</div>

<div className="p-4 sm:p-6 bg-[#F8F7F4]" id="chat">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm sm:text-base tracking-tight" style={{fontFamily: '\'Playfair Display\', \'Times New Roman\', serif', fontWeight: '700'}}>
                        AI Chat Contexts
                      </h3>
<span className="text-[10px] uppercase tracking-[0.2em] text-[#4A4A4A]" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                        Interactive Desk
                      </span>
</div>
<div className="h-px bg-[#2D2D2D] mb-3"></div>
<div className="space-y-3 text-[12px]" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>
<button className="w-full text-left border border-[#2D2D2D] bg-[#F8F7F4] px-3 py-2 rounded-[3px] hover:bg-[#1A1A1A] hover:text-[#F8F7F4] transition-colors flex items-start gap-2">
<span aria-hidden="true" className="mt-[2px] shrink-0 flex items-center justify-center" id="icon-story-chat"></span>
<span>
<span className="block text-[11px] uppercase tracking-[0.2em] mb-1" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                            Story Desk
                          </span>
                          Ask for deeper sourcing, alternative angles or quick briefs on a single article without losing context.
                        </span>
</button>
<button className="w-full text-left border border-[#E5E4E0] bg-[#F8F7F4] px-3 py-2 rounded-[3px] hover:border-[#1A1A1A] hover:bg-[#F8F7F4] transition-colors flex items-start gap-2">
<span aria-hidden="true" className="mt-[2px] shrink-0 flex items-center justify-center" id="icon-edition-chat"></span>
<span>
<span className="block text-[11px] uppercase tracking-[0.2em] mb-1" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                            Edition Room
                          </span>
                          Debrief your entire edition: “What should I do about today’s risks?” or “Summarize only what impacts revenue.”
                        </span>
</button>
<button className="w-full text-left border border-[#E5E4E0] bg-[#F8F7F4] px-3 py-2 rounded-[3px] hover:border-[#1A1A1A] hover:bg-[#F8F7F4] transition-colors flex items-start gap-2">
<span aria-hidden="true" className="mt-[2px] shrink-0 flex items-center justify-center" id="icon-newsroom-chat"></span>
<span>
<span className="block text-[11px] uppercase tracking-[0.2em] mb-1" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                            Newsroom
                          </span>
                          A persistent, Neon-backed memory of your themes, bets and decisions—powered by TRAE LearningAgent.
                        </span>
</button>
<p className="mt-2 text-[11px] text-[#4A4A4A]">
                        Each context carries its own prompt, schema and Neon-backed memory, so WireEdition can safely route queries to the right TRAE agent.
                      </p>
</div>
</div>
</div>
</section>

<section className="border-b border-[#2D2D2D] bg-[#F8F7F4]" id="pricing">
<div className="px-4 sm:px-6 py-6 sm:py-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-4">
<div>
<h2 className="text-lg sm:text-xl tracking-tight" style={{fontFamily: '\'Playfair Display\', \'Times New Roman\', serif', fontWeight: '700'}}>
                        Classifieds — Subscriptions
                      </h2>
<p className="text-[12px] text-[#4A4A4A] mt-1" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>
                        Powered by Polar. Every subscription is linked to your Neon Auth user and secured with Neon Secrets.
                      </p>
</div>
<p className="text-[11px] uppercase tracking-[0.22em] text-[#4A4A4A]" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif'}}>
                      Cancel anytime • No hidden fees
                    </p>
</div>
<div className="h-px bg-[#2D2D2D] mb-5"></div>
<div className="grid md:grid-cols-2 gap-4 lg:gap-6">

<article className="border border-[#2D2D2D] rounded-[3px] bg-[#F8F7F4] shadow-[0_14px_28px_rgba(0,0,0,0.06)] hover:-translate-y-[2px] hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)] transition-all">
<div className="border-b border-[#E5E4E0] px-4 py-3 flex items-center justify-between">
<div>
<h3 className="text-base tracking-tight" style={{fontFamily: '\'Playfair Display\', \'Times New Roman\', serif', fontWeight: '700'}}>
                            Pro Edition
                          </h3>
<p className="text-[11px] uppercase tracking-[0.22em] text-[#4A4A4A]" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif'}}>
                            Daily brief for focused operators
                          </p>
</div>
<div className="text-right">
<p className="text-xl tracking-tight" style={{fontFamily: '\'Playfair Display\', \'Times New Roman\', serif', fontWeight: '700'}}>
                            $9
                            <span className="text-xs font-normal" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>/mo</span>
</p>
<p className="text-[10px] text-[#4A4A4A]" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>
                            4-day free trial
                          </p>
</div>
</div>
<div className="px-4 py-4 space-y-3">
<ul className="space-y-1 text-[13px] text-[#1A1A1A]" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>
<li>• 3 personalized sections</li>
<li>• Daily email editions at one scheduled time</li>
<li>• Story and edition-level chat contexts</li>
<li>• Engagement-based tuning over time</li>
</ul>
<button className="mt-3 w-full border border-[#1A1A1A] rounded-[3px] px-4 py-2 text-[11px] uppercase tracking-[0.2em] hover:bg-[#1A1A1A] hover:text-[#F8F7F4] transition-colors" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                          Start Pro — 4 days free
                        </button>
<p className="text-[11px] text-[#4A4A4A]" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>
                          On click, WireEdition calls
                          <span className="font-semibold">/create-polar-session</span> with your Neon user ID and secured POLAR_API_KEY.
                        </p>
</div>
</article>

<article className="border border-[#C41E3A] rounded-[3px] bg-[#F8F7F4] shadow-[0_18px_45px_rgba(0,0,0,0.08)] hover:-translate-y-[2px] hover:shadow-[0_22px_55px_rgba(0,0,0,0.14)] transition-all relative">
<div className="absolute -top-3 right-4 px-2 py-[3px] border border-[#C41E3A] bg-[#F8F7F4] text-[10px] uppercase tracking-[0.2em] text-[#C41E3A]" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                        Most popular
                      </div>
<div className="border-b border-[#E5E4E0] px-4 py-3 flex items-center justify-between">
<div>
<h3 className="text-base tracking-tight" style={{fontFamily: '\'Playfair Display\', \'Times New Roman\', serif', fontWeight: '700'}}>
                            Premium WireRoom
                          </h3>
<p className="text-[11px] uppercase tracking-[0.22em] text-[#C41E3A]" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif'}}>
                            Real-time desk for power readers
                          </p>
</div>
<div className="text-right">
<p className="text-xl tracking-tight" style={{fontFamily: '\'Playfair Display\', \'Times New Roman\', serif', fontWeight: '700'}}>
                            $19
                            <span className="text-xs font-normal" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>/mo</span>
</p>
<p className="text-[10px] text-[#4A4A4A]" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>
                            Real-time + deep dives
                          </p>
</div>
</div>
<div className="px-4 py-4 space-y-3">
<ul className="space-y-1 text-[13px] text-[#1A1A1A]" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>
<li>• Unlimited topics and sections</li>
<li>• Real-time “extra editions” for breaking themes</li>
<li>• Story, edition and newsroom chat contexts</li>
<li>• Deep AI research briefs with source trails</li>
<li>• Priority TRAE AutomationAgent scheduling</li>
</ul>
<button className="mt-3 w-full border border-[#C41E3A] text-[#C41E3A] rounded-[3px] px-4 py-2 text-[11px] uppercase tracking-[0.2em] hover:bg-[#C41E3A] hover:text-[#F8F7F4] transition-colors" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                          Upgrade to Premium
                        </button>
<p className="text-[11px] text-[#4A4A4A]" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>
                          Ideal for founders, operators and analysts who live in the news cycle and need a private AI newsroom.
                        </p>
</div>
</article>
</div>
</div>
</section>

<section className="bg-[#F8F7F4]" id="faq">
<div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#E5E4E0]">

<div className="lg:col-span-2 p-4 sm:p-6">
<div className="flex items-center justify-between mb-3">
<h2 className="text-lg sm:text-xl tracking-tight" style={{fontFamily: '\'Playfair Display\', \'Times New Roman\', serif', fontWeight: '700'}}>
                        Frequently Asked Questions
                      </h2>
<span className="text-[10px] uppercase tracking-[0.2em] text-[#4A4A4A]" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif'}}>
                        Reader Notices
                      </span>
</div>
<div className="h-px bg-[#2D2D2D] mb-4"></div>
<dl className="space-y-4 text-sm" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>
<div className="border-b border-[#E5E4E0] pb-3">
<dt className="font-semibold" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif', fontWeight: '600', fontSize: '14px'}}>
                          How personalized is my edition?
                        </dt>
<dd className="mt-1 text-[#4A4A4A] leading-relaxed text-[13px]">
                          Your edition is built from your Neon-backed profile: sectors, companies, roles, watchlists and preferred depth. TRAE LearningAgent continuously updates that profile based on what you read, click and ask in chat.
                        </dd>
</div>
<div className="border-b border-[#E5E4E0] pb-3">
<dt className="font-semibold" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif', fontWeight: '600', fontSize: '14px'}}>
                          How are my keys and data secured?
                        </dt>
<dd className="mt-1 text-[#4A4A4A] leading-relaxed text-[13px]">
                          All secrets—OpenAI, Tavily, Polar, Resend and database credentials—live in Neon Secrets Manager. They never touch the client, and TRAE IntegrationAgent fetches them server-side only. RLS policies always use <span className="font-semibold">auth.uid()</span> and every row is linked to your Neon Auth user_id.
                        </dd>
</div>
<div className="border-b border-[#E5E4E0] pb-3">
<dt className="font-semibold" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif', fontWeight: '600', fontSize: '14px'}}>
                          What does the daily automation look like?
                        </dt>
<dd className="mt-1 text-[#4A4A4A] leading-relaxed text-[13px]">
                          TRAE AutomationAgent runs at your schedule: gather sources via Tavily, summarize with OpenAI into a strict JSON schema, store in Neon, then dispatch via Resend. Logs and status flags make every step observable.
                        </dd>
</div>
<div>
<dt className="font-semibold" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif', fontWeight: '600', fontSize: '14px'}}>
                          Can my team share a newsroom?
                        </dt>
<dd className="mt-1 text-[#4A4A4A] leading-relaxed text-[13px]">
                          Premium is optimized for individual operators today; team newsrooms with shared contexts and governance are on the roadmap. Get in touch if you’d like to pilot.
                        </dd>
</div>
</dl>
</div>

<aside className="p-4 sm:p-6 bg-[#F8F7F4]">
<h3 className="text-sm sm:text-base tracking-tight mb-3" style={{fontFamily: '\'Playfair Display\', \'Times New Roman\', serif', fontWeight: '700'}}>
                      Reader Voices
                    </h3>
<div className="h-px bg-[#2D2D2D] mb-3"></div>
<div className="space-y-5">
<figure className="border border-[#E5E4E0] rounded-[3px] px-4 py-3 bg-[#F8F7F4]">
<blockquote className="text-[13px] leading-relaxed text-[#1A1A1A]" style={{fontFamily: '\'EB Garamond\', \'Times New Roman\', serif', fontStyle: 'italic'}}>
                          “WireEdition feels like having a chief of staff who reads the entire internet and slides a one-page brief across my desk at 7:00am.”
                        </blockquote>
<figcaption className="mt-3 flex items-center gap-3">
<img alt="Reader portrait" className="w-9 h-9 rounded-full object-cover border border-[#2D2D2D]" src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<div>
<p className="text-[12px]" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif', fontWeight: '500'}}>
                              Elena M.
                            </p>
<p className="text-[11px] text-[#4A4A4A]" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>
                              VP Product, B2B SaaS
                            </p>
</div>
</figcaption>
</figure>
<figure className="border border-[#E5E4E0] rounded-[3px] px-4 py-3 bg-[#F8F7F4]">
<blockquote className="text-[13px] leading-relaxed text-[#1A1A1A]" style={{fontFamily: '\'EB Garamond\', \'Times New Roman\', serif', fontStyle: 'italic'}}>
                          “The newsroom chat has basically replaced my weekly industry report. I ask one question and get a decision-ready brief with sources.”
                        </blockquote>
<figcaption className="mt-3 flex items-center gap-3">
<img alt="Reader portrait" className="w-9 h-9 rounded-full object-cover border border-[#2D2D2D]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div>
<p className="text-[12px]" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif', fontWeight: '500'}}>
                              Jordan K.
                            </p>
<p className="text-[11px] text-[#4A4A4A]" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>
                              Founder, AI infra startup
                            </p>
</div>
</figcaption>
</figure>
</div>
</aside>
</div>
</section>
</div>

<section className="mt-8 mb-10">
<div className="border border-[#2D2D2D] bg-[#F8F7F4]">
<div className="border-b border-[#2D2D2D] px-4 sm:px-6 py-3 flex items-center justify-between">
<h2 className="text-sm sm:text-base tracking-tight" style={{fontFamily: '\'Playfair Display\', \'Times New Roman\', serif', fontWeight: '700'}}>
                    Daily Email Edition — Preview
                  </h2>
<span className="text-[10px] uppercase tracking-[0.2em] text-[#4A4A4A]" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif'}}>
                    Matches web design
                  </span>
</div>
<div className="grid md:grid-cols-3">

<div className="md:col-span-2 border-r border-[#E5E4E0] p-4 sm:p-6">
<div className="border border-[#2D2D2D] bg-white max-w-xl mx-auto">

<div className="border-b border-[#2D2D2D] px-4 py-3 text-center">
<p className="text-[10px] tracking-[0.32em] uppercase text-[#4A4A4A]" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif'}}>
                          Personalized WireEdition
                        </p>
<h1 className="text-[20px] tracking-tight mt-1" style={{fontFamily: '\'Playfair Display\', \'Times New Roman\', serif', fontWeight: '700'}}>
                          Your Daily Brief
                        </h1>
<p className="mt-1 text-[11px] text-[#4A4A4A]" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>
                          Vol. 1, No. 247 — Delivered by Resend • Powered by Neon
                        </p>
</div>

<div className="px-4 py-4 border-b border-[#E5E4E0]">
<p className="text-[10px] tracking-[0.24em] uppercase text-[#C41E3A]" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif'}}>
                          Lead Story
                        </p>
<h2 className="mt-1 text-[16px] leading-snug tracking-tight" style={{fontFamily: '\'Playfair Display\', \'Times New Roman\', serif', fontWeight: '700'}}>
                          Your market moved while you slept
                        </h2>
<img alt="Lead story visual" className="mt-3 w-full h-36 object-cover border border-[#E5E4E0]" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<p className="mt-3 text-[13px] text-[#1A1A1A] leading-relaxed" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>
<span className="float-left text-[26px] leading-none mr-1 -mt-[3px]" style={{fontFamily: '\'Playfair Display\', \'Times New Roman\', serif'}}>T</span>
                          his morning’s edition surfaces three moves across your competitor set—funding, hiring and partnerships—along with a one-paragraph implication summary for your team.
                        </p>
</div>

<div className="px-4 py-3 border-b border-[#E5E4E0] bg-[#F8F7F4]">
<p className="text-[10px] uppercase tracking-[0.22em] text-[#182441]" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif'}}>
                          Why this matters
                        </p>
<p className="mt-1 text-[12px] text-[#1A1A1A] leading-relaxed" style={{fontFamily: '\'EB Garamond\', \'Times New Roman\', serif', fontStyle: 'italic'}}>
                          This section explains in plain language why today’s headlines matter for your role, your roadmap and your revenue.
                        </p>
</div>

<div className="px-4 py-4 space-y-3">
<div>
<p className="text-[10px] uppercase tracking-[0.22em] text-[#4A4A4A]" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif'}}>
                            Market Briefing
                          </p>
<p className="mt-1 text-[12px] text-[#1A1A1A] leading-relaxed" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>
                            Overnight shifts in your watchlist summarized into three bullets, with optional “Ask the newsroom” links that take you straight into the edition chat.
                          </p>
</div>
<div>
<p className="text-[10px] uppercase tracking-[0.22em] text-[#4A4A4A]" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif'}}>
                            Research Spotlight
                          </p>
<p className="mt-1 text-[12px] text-[#1A1A1A] leading-relaxed" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>
                            One deep-dive topic per day, tailored to your history: strategy memos, emerging tech or policy shifts that affect your roadmap.
                          </p>
</div>
</div>

<div className="px-4 py-3 border-t border-[#E5E4E0] bg-[#F8F7F4] text-center">
<p className="text-[10px] text-[#4A4A4A]" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>
                          Published daily by Personalized Inc. Est. 2025 —
                          <a className="underline" href="#">Manage preferences</a> •
                          <a className="underline" href="#">Unsubscribe</a>
</p>
</div>
</div>
</div>

<div className="p-4 sm:p-6 text-[12px] text-[#4A4A4A]" style={{fontFamily: '\'Crimson Text\', Georgia, serif'}}>
<h3 className="text-sm tracking-tight mb-2" style={{fontFamily: '\'Playfair Display\', \'Times New Roman\', serif', fontWeight: '700'}}>
                      Email design notes
                    </h3>
<p className="mb-2">
                      The email template mirrors the web edition: same masthead, typography and section hierarchy. All styling is inlined for reliable rendering across clients.
                    </p>
<p className="mb-2">
                      Resend sends responsive HTML with single-column layout on mobile. Each story includes “Read more” links that deep-link to your web edition and preserve context for the story or edition chat.
                    </p>
<p>
                      Tracking pixels and link redirects feed engagement signals into Neon so LearningAgent can update your interests with every open, scroll and conversation.
                    </p>
</div>
</div>
</div>
</section>
</section>

<footer className="border-t border-[#2D2D2D] mt-auto pt-4 pb-6">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-[#4A4A4A]">
<p className="uppercase tracking-[0.22em]" style={{fontFamily: '\'Merriweather\', \'Times New Roman\', serif'}}>
                Published daily by Personalized Inc. Est. 2025
              </p>
<div className="flex items-center gap-4" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
<a className="hover:underline" href="#">Status</a>
<a className="hover:underline" href="#">Security</a>
<a className="hover:underline" href="#">Contact</a>
</div>
</div>
</footer>
</div>
</main>
</div>



<style>
      @keyframes scroll {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-100%); }
      }
      @keyframes unfurl {
        0% {
          transform: scaleY(0.7) rotateX(12deg);
          opacity: 0;
        }
        100% {
          transform: scaleY(1) rotateX(0deg);
          opacity: 1;
        }
      }
    </style>

    </>
  );
}
