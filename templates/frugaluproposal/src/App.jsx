import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



(function(){
  function init(){
    var fu=document.querySelector('.fu');
    if(!fu) return;
    var els=[].slice.call(fu.querySelectorAll('.reveal'));
    if(!els.length) return;
    fu.classList.add('anim');
    els.forEach(function(el,i){el.style.transitionDelay=(Math.min(i,6)*55)+'ms';});
    function show(){
      var vh=window.innerHeight||document.documentElement.clientHeight||800;
      els=els.filter(function(el){
        var r=el.getBoundingClientRect();
        if(r.top < vh*0.92 && r.bottom > 0){el.classList.add('in');return false;}
        return true;
      });
      if(!els.length){window.removeEventListener('scroll',onScroll);window.removeEventListener('resize',onScroll);}
    }
    var ticking=false;
    function onScroll(){if(!ticking){ticking=true;requestAnimationFrame(function(){show();ticking=false;});}}
    window.addEventListener('scroll',onScroll,{passive:true});
    window.addEventListener('resize',onScroll);
    show();
    // failsafe: never let content stay hidden, even if scroll/sizing is unreliable in the builder
    setTimeout(function(){fu.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in');});},2500);
  }
  if(document.readyState!=='loading'){init();}
  else{document.addEventListener('DOMContentLoaded',init);}
})();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fu">

<header className="cover">
<div className="wrap">
<div className="tag reveal">
<span className="pill">Project Direction</span>
<span className="pill">Scope of Work</span>
<span className="pill">v1.0</span>
</div>
<span className="eyebrow reveal">The Frugal U · Funnel &amp; Automation Engagement</span>
<h1 className="reveal">Building the engine<br/>behind your <em>vision.</em></h1>
<p className="lede reveal">Thank you for the opportunity to build out The Frugal U. This is the outline of what I'd build and how it all fits together — your blueprint tells me where you're headed, and the work below is the system that gets you there: the funnel, the flows, and the automations that turn the platform into something that enrolls and keeps members.</p>
<div className="metaline reveal">
<span>For <b>Troy Mitchel · Frugal Mitch</b></span>
<span>The Frugal U</span>
<span>May 28, 2026</span>
</div>
</div>
</header>

<section>
<div className="wrap col">
<span className="sectionnum reveal">01 / Two documents, one direction</span>
<div className="sec-head reveal"><h2>The vision and the diagnosis <em>agree.</em></h2></div>
<div className="reveal">
<p>Your blueprint and what I found looking at the live site came from opposite ends — one's your vision for where this is going, the other's a cold read of what's there right now. They land in the same place. That's a good sign. It means we're not debating direction; we just need to build it.</p>
</div>
</div>
<div className="wrap reveal" style={{marginTop: '30px'}}>
<div className="twoup">
<div className="b">
<span className="k">Your blueprint says</span>
<h3>A calm, education-first freedom platform</h3>
<p>Free Community → Boot Camp → Mentorship. Discipline and skill-building, not signals. Calm, cinematic, anti-"guru." Using a skill set to create freedom of time.</p>
</div>
<div className="b">
<span className="k">The live site shows</span>
<h3>A strong position, no engine behind it</h3>
<p>A real anti-hype philosophy and a mentor people can name — but dead buttons, no trust layer, and no way to actually enroll. "Develop independent traders, not signal dependents" was the best idea on the site, and it wasn't being used.</p>
</div>
</div>
<p className="converge reveal">↓ Both point to the same build ↓</p>
</div>
<div className="wrap col reveal" style={{marginTop: '30px'}}>
<p>One thing worth flagging: the offer ladder in your blueprint — <strong>Free / $999 / $5,000+</strong> — replaces the old "Signals &amp; Community / Full Access / Coaching" setup that's on the site now. I'm building to your blueprint. And moving from selling signals to selling education isn't just more on-brand; it's the stronger, safer position in a money-related space. We're building the right business, not just a nicer-looking version of the current one.</p>
</div>
</section>

<section style={{background: 'var(--ink-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)'}}>
<div className="wrap col">
<span className="sectionnum reveal">02 / What I'm building for you</span>
<div className="sec-head reveal"><h2>I'm not just building a website. I'm building the <em>revenue engine.</em></h2></div>
<div className="finding reveal">
<p className="lede">I design and build the funnel, the landing pages, the email and SMS flows, and the automations that carry a cold visitor from "who is this?" all the way to a paying member — and then help keep them in the room.</p>
</div>
<div className="reveal">
<p>The website is the front door. This is everything that makes the front door lead somewhere. A platform with a $5,000+ top offer and no working funnel is leaving the whole opportunity on the table — this is the system that captures it.</p>
</div>
</div>
</section>

<section>
<div className="wrap">
<span className="sectionnum reveal">03 / The offer ladder I build around</span>
<div className="sec-head col reveal"><h2>Three tiers, one ascension path.</h2>
<p className="lede" style={{color: 'var(--text-soft)'}}>Every page and every flow is built to move members <em>up</em> this ladder — the highest-leverage way to grow a business with a high-ticket top tier.</p>
</div>
<div className="ladder">
<div className="rung reveal">
<span className="tier">Tier 01 · Top of funnel</span>
<div className="price">Free</div>
<h3>Free Community</h3>
<p>Intro education, weekly commentary, mindset content, PDFs, community chat.</p>
<div className="role"><b>Funnel role</b>The on-ramp. Builds the email list and earns trust before any ask.</div>
</div>
<div className="rung mid reveal">
<span className="tier">Tier 02 · Core monetization</span>
<div className="price">$999</div>
<h3>Forex Boot Camp</h3>
<p>Structured beginner-to-intermediate curriculum, technical analysis, risk management, weekly Q&amp;A.</p>
<div className="role"><b>Funnel role</b>The conversion target. A real sales page + nurture sequence drives Free → Boot Camp.</div>
</div>
<div className="rung reveal">
<span className="tier">Tier 03 · High ticket</span>
<div className="price">$5,000<small>+</small></div>
<h3>Mentorship</h3>
<p>High-level coaching, live sessions, private mastermind, accountability, direct access.</p>
<div className="role"><b>Funnel role</b>Application-based, not a buy button. Ascension nurture + booked-call funnel.</div>
</div>
</div>
<div className="col reveal" style={{marginTop: '18px'}}>
<p>At $5,000+, the Mentorship tier is <strong>qualified, not purchased on impulse</strong> — so its funnel is an application and booked call, not a checkout. That distinction shapes the whole back end: the Boot Camp converts on a page, the Mentorship converts on a conversation.</p>
</div>
</div>
</section>

<section style={{background: 'var(--ink-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)'}}>
<div className="wrap">
<span className="sectionnum reveal">04 / Scope of work — what's included</span>
<div className="sec-head col reveal"><h2>Four workstreams.</h2></div>
<div className="ws reveal">
<div className="top"><div className="wn">01</div><div><h3>Landing Page &amp; Funnel Design</h3><p>The pages a visitor actually moves through.</p></div></div>
<div className="body"><ul>
<li><b>Homepage</b> — the freedom-platform hub, built on the calm, cinematic direction from your blueprint.</li>
<li><b>Free Community opt-in page</b> — the top-of-funnel lead capture.</li>
<li><b>Boot Camp sales page ($999)</b> — full conversion page: outcome, curriculum, proof, objection handling, checkout.</li>
<li><b>Mentorship application page ($5,000+)</b> — qualification + booked-call funnel.</li>
<li><b>Supporting pages</b> — thank-you / confirmation steps and member welcome / onboarding entry.</li>
<li><b>Mobile-first, conversion-led layout</b> with copy direction included alongside design.</li>
</ul></div>
</div>
<div className="ws reveal">
<div className="top"><div className="wn">02</div><div><h3>Email &amp; SMS Flow Architecture</h3><p>The sequences that warm, convert, and retain on autopilot.</p></div></div>
<div className="body"><ul>
<li><b>Full flow mapping</b> — trigger, timing, content purpose, and conversion goal for every email.</li>
<li><b>Copywriting</b> for each sequence, in the restrained no-hype voice the brand runs on.</li>
<li><b>Design direction</b> and build inside the chosen ESP — not just copy handed off.</li>
<li><b>Segmentation logic</b> — who enters each flow and under what conditions.</li>
<li>Detailed in §05.</li>
</ul></div>
</div>
<div className="ws reveal">
<div className="top"><div className="wn">03</div><div><h3>Automations &amp; Pipeline</h3><p>The invisible wiring that routes every member to the right place.</p></div></div>
<div className="body"><ul>
<li><b>Pipeline stages</b> — lead → free member → Boot Camp buyer → Mentorship applicant → Mentorship member.</li>
<li><b>Tagging &amp; segmentation</b> by tier and engagement, so messaging stays relevant.</li>
<li><b>Application routing &amp; booking integration</b> for the Mentorship funnel.</li>
<li><b>Payment &amp; enrollment triggers</b> — purchase fires onboarding, access, and the right next flow.</li>
<li><b>Free → paid escalation rules</b> that move warm leads toward the next rung automatically.</li>
</ul></div>
</div>
<div className="ws reveal">
<div className="top"><div className="wn">04</div><div><h3>Launch &amp; QA</h3><p>Proving the machine works before a dollar depends on it.</p></div></div>
<div className="body"><ul>
<li><b>End-to-end testing</b> — every CTA, every checkout, every flow trigger, on mobile and desktop.</li>
<li><b>Trust-killer sweep</b> — no dead buttons, no typos, no broken steps (the stuff that's hurting the current site).</li>
<li><b>Handoff &amp; walkthrough</b> so you know exactly what's running and how.</li>
</ul></div>
</div>
</div>
</section>

<section>
<div className="wrap">
<span className="sectionnum reveal">05 / The funnel &amp; the flows behind it</span>
<div className="sec-head col reveal"><h2>One path. Built to ascend.</h2></div>
<div className="funnel reveal">
<div className="step"><span className="n">01</span><div className="t">Cold visitor</div><div className="d">Search, social, referral</div></div>
<div className="step"><span className="n">02</span><div className="t">Free Community</div><div className="d">Trades email for real value</div></div>
<div className="step"><span className="n">03</span><div className="t">Nurture</div><div className="d">Trust + teaching over days</div></div>
<div className="step"><span className="n">04</span><div className="t">Boot Camp $999</div><div className="d">Sales page + checkout</div></div>
<div className="step"><span className="n">05</span><div className="t">Ascension</div><div className="d">Grad → mentorship interest</div></div>
<div className="step"><span className="n">06</span><div className="t">Mentorship $5K+</div><div className="d">Apply → booked call</div></div>
<div className="step"><span className="n">07</span><div className="t">Retention</div><div className="d">Onboarding + community</div></div>
</div>
<div className="flows reveal">
<div className="frow head"><span>Flow</span><span>Job</span></div>
<div className="frow"><div className="fn">Free Community Welcome<span>Trigger · opt-in</span></div><div className="fd">Deliver the free value, introduce you, teach the method, set the no-hype tone. The trust build.</div></div>
<div className="frow"><div className="fn">Boot Camp Conversion<span>Trigger · engaged free member</span></div><div className="fd">Move warm free members to the $999 Boot Camp with education-led selling, not pressure.</div></div>
<div className="frow"><div className="fn">Boot Camp Onboarding<span>Trigger · purchase</span></div><div className="fd">Get new students into the curriculum fast and active in week one — where retention is won.</div></div>
<div className="frow"><div className="fn">Mentorship Ascension<span>Trigger · Boot Camp progress</span></div><div className="fd">Invite the committed to apply for the $5,000+ tier once they've earned the readiness.</div></div>
<div className="frow"><div className="fn">Application → Call<span>Trigger · application</span></div><div className="fd">Nurture applicants to a booked, showed-up call — the real conversion point for high ticket.</div></div>
<div className="frow"><div className="fn">Win-back / Re-engage<span>Trigger · gone cold</span></div><div className="fd">Pull lapsed leads and members back before they're lost for good.</div></div>
</div>
<p className="note reveal">Final flow count and sequencing confirmed at kickoff once you've picked your platform. Subject-line and preview-text options included per email; success metrics defined per flow.</p>
</div>
</section>

<section style={{background: 'var(--ink-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)'}}>
<div className="wrap col">
<span className="sectionnum reveal">06 / What's not included</span>
<div className="sec-head reveal"><h2>Drawing the line — so nothing's assumed.</h2>
<p className="lede" style={{color: 'var(--text-soft)'}}>Clear boundaries keep the timeline, the budget, and our working relationship clean. These sit outside this scope, and I can quote them separately if you want them down the line.</p>
</div>
<div className="fence reveal">
<span className="label">Out of scope</span>
<ul>
<li><b>Course / curriculum content creation</b> — lesson videos, study materials, and the Boot Camp/Mentorship teaching content are yours. I build the funnel <i>to</i> them.</li>
<li><b>LMS / course-dashboard buildout &amp; video hosting</b> — beyond connecting the funnel to your platform (Kajabi, etc.). A full course-delivery build is a separate phase.</li>
<li><b>Software &amp; subscription fees</b> — ESP, payment processor, hosting, community platform, and booking tools are on your accounts.</li>
<li><b>Paid ads strategy &amp; management</b> — this builds the engine; driving traffic into it is separate.</li>
<li><b>Ongoing content production</b> for the education hub and community.</li>
</ul>
</div>
</div>
</section>

<section>
<div className="wrap col">
<span className="sectionnum reveal">07 / Design direction</span>
<div className="sec-head reveal"><h2>Built to your <em>brand direction.</em></h2></div>
<div className="reveal">
<p>The palette comes straight from your logo — <strong>warm browns and cream</strong>, the espresso-and-caramel feel that's already your brand. From your blueprint I'm keeping the <em>mood</em>: calm, cinematic, minimal, no-hype. Warm and calm aren't a contradiction — think rich, grounded, documentary, not loud. That combination is the whole point: it looks disciplined and intentional, which is exactly what you're selling.</p>
</div>
<div className="swatches reveal">
<div className="sw" style={{background: '#2A1C12'}}><span>espresso</span></div>
<div className="sw" style={{background: '#5A3A22'}}><span>coffee</span></div>
<div className="sw" style={{background: '#805030'}}><span>caramel</span></div>
<div className="sw" style={{background: '#B98A5E'}}><span style={{color: '#2A1C12'}}>tan</span></div>
<div className="sw" style={{background: '#EDE6DA'}}><span style={{color: '#5A3A22'}}>cream</span></div>
</div>
<p className="note reveal">Pulled from the logo, indicative only — final palette and type locked in the design phase. (This document's own styling is just for the proposal; the site is built to your brand.)</p>
</div>
</section>

<section style={{background: 'var(--ink-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)'}}>
<div className="wrap">
<span className="sectionnum reveal">08 / How it gets built</span>
<div className="sec-head col reveal"><h2>The whole build, in <em>7–14 days.</em></h2>
<p className="lede" style={{color: 'var(--text-soft)'}}>Sequenced so the parts that make money come first. Here's the order it happens in.</p>
</div>
<div className="phase reveal">
<div className="pn"><b>01</b></div>
<div><h3>Foundation &amp; the money path</h3><p>Kickoff, platform confirmation, offer-ladder lockdown. Build the Free opt-in and the Boot Camp sales page + checkout — the shortest path to revenue — and wire the core pipeline.</p></div>
</div>
<div className="phase reveal">
<div className="pn"><b>02</b></div>
<div><h3>Flows &amp; ascension</h3><p>Homepage, Mentorship application funnel, and the email/SMS flows: welcome, Boot Camp conversion, onboarding, ascension, application-to-call.</p></div>
</div>
<div className="phase reveal">
<div className="pn"><b>03</b></div>
<div><h3>Wire, test, launch</h3><p>All automations connected, win-back live, full end-to-end QA, trust-killer sweep, handoff and walkthrough. The system goes live.</p></div>
</div>
</div>
</section>

<section>
<div className="wrap">
<span className="sectionnum reveal">09 / Investment</span>
<div className="sec-head col reveal"><h2>One build. One flat fee.</h2>
<p className="lede" style={{color: 'var(--text-soft)'}}>The complete funnel system, delivered and live. A flat number — not a range — so the price is the price.</p>
</div>
<div className="invest one">
<div className="inv build reveal">
<span className="k">Funnel system build</span>
<div className="amt">$4,500</div>
<p className="desc">Everything in this scope, designed, built, tested, and handed off live.</p>
<ul>
<li>Landing page &amp; funnel design</li>
<li>Email &amp; SMS flow architecture + copy</li>
<li>Automations &amp; pipeline build</li>
<li>Launch, QA &amp; handoff</li>
</ul>
</div>
</div>
<p className="note reveal">Flat project fee covering the full scope in §04. Payment terms (e.g. 50% to start / 50% on launch) confirmed on agreement. The funnel is built to be tuned over time as real data comes in — that optimization layer can be scoped separately once the system is live and there are numbers to act on.</p>
</div>
</section>

<section style={{background: 'var(--ink-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)'}}>
<div className="wrap">
<span className="sectionnum reveal">10 / What I'll need from you</span>
<div className="sec-head col reveal"><h2>The inputs that have to be real.</h2>
<p className="lede" style={{color: 'var(--text-soft)'}}>I build the machine; the proof and the teaching come from you. These are what we'll need to get going.</p>
</div>
<div className="need">
<div className="n reveal"><span className="b">01</span><span>Final pricing &amp; tier contents (Boot Camp at $999; the Mentorship floor confirmed).</span></div>
<div className="n reveal"><span className="b">02</span><span>Platform decisions — ESP, payment processor, community, booking, and course host.</span></div>
<div className="n reveal"><span className="b">03</span><span>Your real assets — bio, history, photo, and the cinematic lifestyle footage from your blueprint.</span></div>
<div className="n reveal"><span className="b">04</span><span>The core of your free giveaway (I'll shape and write it; the expertise is yours).</span></div>
<div className="n reveal"><span className="b">05</span><span>Real testimonials with permission, and anonymized trade breakdowns we can use as proof.</span></div>
<div className="n reveal"><span className="b">06</span><span>Your Boot Camp / Mentorship curriculum outline, so the flows can point to real deliverables.</span></div>
</div>
</div>
</section>

<section className="close">
<div className="wrap col">
<span className="sectionnum reveal">11 / The bottom line</span>
<h2 className="reveal">You bring the skill set and the vision. I build the system that turns it into <em>recurring revenue.</em></h2>
<div className="reveal">
<p className="lede" style={{color: 'var(--text-soft)'}}>The blueprint is sound. The position is real. What's missing is the engine that carries a stranger from a free PDF to a $999 student to a $5,000 mentee — without you having to chase a single one of them. That's what I'm building, end to end.</p>
</div>
<div className="nextstep reveal">
<span className="label">Next step</span>
<p>Let's hop on a quick kickoff call to lock pricing, confirm the platform stack, and gather the inputs above. Once we're good to go, the entire build is done in 7–14 days.</p>
</div>
</div>
</section>
<footer>
<div className="wrap">
<div className="f">
<span>Bigger Vision Agency</span>
<span>The Frugal U · Project Direction &amp; SOW · v1.0</span>
<span>Confidential</span>
</div>
</div>
</footer>
</div>


    </>
  );
}
