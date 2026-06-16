import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
        lucide.createIcons({ strokeWidth: 1.5 });
        
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.fade-in-up').forEach(el => {
            el.style.animationPlayState = 'paused';
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
<div className="max-w-6xl mx-auto text-center">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 fade-in-up leading-tight">
                Stop Hiring People to Fix a <span className="gradient-text">Broken System</span>.
            </h1>
<h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-12 fade-in-up stagger-1 max-w-4xl mx-auto leading-relaxed">
                Here's How to Build the Operational "Aqueduct" That Creates Scalable Growth and Reclaims Your Freedom.
            </h2>
<div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-16 fade-in-up stagger-2"></div>
<div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed fade-in-up stagger-3">
<p>You did it. You built a successful business with a product people love and revenue over $300,000. By every measure, you've won.</p>
<p>So why does it feel like you're losing?</p>
<p>Why does every new client add more chaos than profit? Why are you still the final bottleneck for every decision, question, and approval? Why are you working later nights now than when you first started?</p>
<p className="font-medium text-white">Success has become a punishment. And you're feeling the pains of scale.</p>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center fade-in-up">
                The Hamster Wheel of Hiring More "Help"
            </h2>
<div className="text-lg text-gray-300 leading-relaxed space-y-8 fade-in-up stagger-1">
<p>If you're like most founders in this position, your gut tells you to do one thing: <strong className="text-white">hire more people.</strong></p>
<p>The cycle is painfully familiar.</p>
<div className="space-y-8 my-12">
<div className="flex items-start space-x-6 fade-in-up stagger-1">
<div className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center text-blue-400 font-bold text-lg shrink-0">1</div>
<p>Things get chaotic, so you hire a new Operations Manager or another Project Coordinator. You tell yourself, <em>"This is the one who will finally fix things."</em></p>
</div>
<div className="flex items-start space-x-6 fade-in-up stagger-2">
<div className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center text-blue-400 font-bold text-lg shrink-0">2</div>
<p>For a few weeks, there's a sense of relief.</p>
</div>
<div className="flex items-start space-x-6 fade-in-up stagger-3">
<div className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center text-blue-400 font-bold text-lg shrink-0">3</div>
<p>But soon, you find they're just as overwhelmed as everyone else, bogged down by the same confusing processes, manual tasks, and disconnected systems.</p>
</div>
</div>
<p className="fade-in-up stagger-4">So you're back at square one, but now with a bloated payroll, more management complexity, and the same fundamental problems. You're just running faster on the same hamster wheel.</p>
<p>The alternative seems even worse—a massive, 12-month, six-figure consulting overhaul that threatens to disrupt the very things that are still working.</p>
<p>Stuck between hiring more people into the chaos and risking a painful, expensive teardown, most leaders choose to do nothing. And the burnout gets worse.</p>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-bold mb-16 fade-in-up">
                The Single Belief That Separates Stalled Businesses From Unstoppable Ones
            </h2>

<div className="mb-16 fade-in-up stagger-1">
<div className="relative h-32 flex items-center justify-center">
<svg className="w-full max-w-md h-24" viewbox="0 0 400 100">
<defs>
<lineargradient id="flowGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#1E90FF'}}></stop>
<stop offset="100%" style={{stopColor: '#A960FF'}}></stop>
</lineargradient>
</defs>
<path d="M50 50 Q200 30 350 50" fill="none" stroke="url(#flowGradient)" strokeLinecap="round" strokeWidth="3"></path>
<circle cx="50" cy="50" fill="#1E90FF" r="4"></circle>
<circle cx="350" cy="50" fill="#A960FF" r="4"></circle>
</svg>
</div>
</div>
<div className="text-lg text-gray-300 leading-relaxed space-y-8 fade-in-up stagger-2">
<p>The problem isn't your people. And the solution isn't a massive overhaul.</p>
<p>The problem is the unquestioned belief that capacity is the issue.</p>
<p>What if the bottleneck isn't a lack of people, but a lack of <em>leverage</em>?</p>
<p>What if your business's growth isn't limited by your team's capacity, but by the strength of its underlying <em>structure</em>?</p>
<p className="text-xl font-medium text-white">This is the paradigm shift. You don't need more people to carry buckets of water; you need to build an <span className="gradient-text">aqueduct.</span></p>
<p>A well-designed structure that creates effortless, predictable flow, allowing you to move 100x more water with less effort.</p>
<p>By methodically reinforcing your business's core structure, you can unlock scalable growth without adding complexity or chaos.</p>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-bold mb-6 text-center fade-in-up">
                Introducing The <span className="gradient-text">Growth Alignment System™</span>: Your Blueprint for Building the Aqueduct
            </h2>
<p className="text-lg text-gray-300 text-center mb-16 max-w-3xl mx-auto fade-in-up stagger-1">
                The aqueduct isn't just a metaphor; it's a model. And we've developed the blueprint to build it.
            </p>
<div className="grid md:grid-cols-2 gap-8 mb-16">
<div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:scale-105 transition-transform duration-300 fade-in-up stagger-1">
<div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6 text-white" data-lucide="trending-up"></i>
</div>
<h3 className="text-xl font-bold text-white mb-4">The Revenue &amp; Growth Engine</h3>
<p className="text-gray-300">Your sales, marketing, and client success operations.</p>
</div>
<div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:scale-105 transition-transform duration-300 fade-in-up stagger-2">
<div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6 text-white" data-lucide="settings"></i>
</div>
<h3 className="text-xl font-bold text-white mb-4">The Streamlined &amp; Unified Operating System</h3>
<p className="text-gray-300">Your technology, processes, and internal workflows.</p>
</div>
<div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:scale-105 transition-transform duration-300 fade-in-up stagger-3">
<div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6 text-white" data-lucide="users"></i>
</div>
<h3 className="text-xl font-bold text-white mb-4">The Leadership Enablement Pillar</h3>
<p className="text-gray-300">The systems that free up founder and executive time.</p>
</div>
<div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:scale-105 transition-transform duration-300 fade-in-up stagger-4">
<div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6 text-white" data-lucide="dollar-sign"></i>
</div>
<h3 className="text-xl font-bold text-white mb-4">The Financial Operating System</h3>
<p className="text-gray-300">The mechanisms for financial clarity and cash flow.</p>
</div>
</div>
<div className="text-lg text-gray-300 leading-relaxed space-y-6 max-w-4xl mx-auto fade-in-up stagger-4">
<p>Instead of trying to fix everything at once, our system identifies the single <strong className="text-white">weakest pillar</strong>—the #1 bottleneck that's creating the most drag on your entire business.</p>
<p>This isn't a disruptive overhaul. This is targeted, strategic surgery designed to deliver the biggest result with the minimum effective dose of effort.</p>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-bold mb-16 text-center fade-in-up">
                This Isn't Magic. It's Operational Science.
            </h2>
<div className="grid md:grid-cols-2 gap-12 mb-16">
<div className="fade-in-up stagger-1">
<h3 className="text-xl font-bold text-blue-400 mb-4">Proof #1: Hidden Workforce</h3>
<p className="text-gray-300 leading-relaxed">Research from firms like McKinsey consistently shows that knowledge workers spend up to <span className="text-3xl font-bold text-blue-400">40%</span> of their time on low-value tasks like manual data entry, searching for information, and managing internal emails. Our system finds that wasted time and reclaims it with intelligent automation.</p>
</div>
<div className="fade-in-up stagger-2">
<h3 className="text-xl font-bold text-blue-400 mb-4">Proof #2: Theory of Constraints</h3>
<p className="text-gray-300 leading-relaxed">A cornerstone of modern business science proves that any system's performance is dictated by its single weakest link. Our Growth Alignment System™ is a direct application of this principle, creating a ripple effect of positive improvement across your entire organization.</p>
</div>
</div>
<div className="bg-gray-800 p-8 md:p-12 rounded-xl border border-gray-700 max-w-4xl mx-auto fade-in-up stagger-3">
<div className="text-4xl text-blue-400 mb-6">"</div>
<blockquote className="text-xl text-white italic leading-relaxed mb-6">
                    Before Automatick, our growth was pure chaos. I was the chief firefighter, and my solution was always to hire another person, which just increased our burn rate. The Growth Alignment System™ was a wake-up-call... In six months, we've doubled our client capacity without adding headcount, and I finally have the freedom to work on the business, not just in it.
                </blockquote>
<cite className="text-gray-400 font-medium">— Sarah K., CEO, $5M B2B SaaS Company</cite>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-bold mb-8 fade-in-up">
                Your 12-Week Acceleration Sprint to Clarity and Control
            </h2>
<p className="text-lg text-gray-300 mb-16 fade-in-up stagger-1">
                The Growth Alignment System™ is the blueprint. The <strong className="text-white">12-Week Acceleration Sprint</strong> is the vehicle where we do the heavy lifting to build your aqueduct <em>for you</em>.
            </p>
<div className="relative fade-in-up stagger-2">
<div className="flex justify-between items-center max-w-3xl mx-auto">
<div className="text-center">
<div className="w-4 h-4 bg-blue-500 rounded-full mb-3"></div>
<p className="text-sm text-gray-400">Week 1<br/>Diagnosis</p>
</div>
<div className="flex-1 h-0.5 bg-gray-600 mx-4"></div>
<div className="text-center">
<div className="w-4 h-4 bg-blue-500 rounded-full mb-3"></div>
<p className="text-sm text-gray-400">Weeks 2-11<br/>Implementation</p>
</div>
<div className="flex-1 h-0.5 bg-gray-600 mx-4"></div>
<div className="text-center">
<div className="w-4 h-4 bg-blue-500 rounded-full mb-3"></div>
<p className="text-sm text-gray-400">Week 12<br/>Hand-off</p>
</div>
</div>
</div>
<p className="text-lg text-gray-300 mt-12 fade-in-up stagger-3">
                This is a focused, high-touch engagement where we go from diagnosis to a fully implemented, automated solution that solves your primary bottleneck in just 12 weeks.
            </p>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl md:text-4xl font-bold mb-6 text-center fade-in-up">
                The Most Risk-Free Decision You Can Make For Your Business This Year.
            </h2>
<p className="text-lg text-gray-300 text-center mb-16 fade-in-up stagger-1">
                Your alternative is to gamble over $120,000 on a senior operations hire with no guarantee of results.
            </p>
<div className="space-y-6 mb-12">
<div className="flex items-start space-x-4 fade-in-up stagger-1">
<i className="w-6 h-6 text-blue-400 mt-1 shrink-0" data-lucide="check"></i>
<p className="text-gray-300"><strong className="text-white">Phase 1: The Growth Alignment Diagnostic™:</strong> A complete audit of your business across the four pillars to identify your #1 growth-limiting bottleneck.</p>
</div>
<div className="flex items-start space-x-4 fade-in-up stagger-2">
<i className="w-6 h-6 text-blue-400 mt-1 shrink-0" data-lucide="check"></i>
<p className="text-gray-300"><strong className="text-white">The Bottleneck Resolution Roadmap™:</strong> A clear, actionable, one-page strategic plan detailing the exact automations and process improvements we will build.</p>
</div>
<div className="flex items-start space-x-4 fade-in-up stagger-3">
<i className="w-6 h-6 text-blue-400 mt-1 shrink-0" data-lucide="check"></i>
<p className="text-gray-300"><strong className="text-white">Phase 2: Custom AI &amp; Automation Implementation:</strong> Our expert team will build, test, and deploy the solutions outlined in your roadmap.</p>
</div>
<div className="flex items-start space-x-4 fade-in-up stagger-4">
<i className="w-6 h-6 text-blue-400 mt-1 shrink-0" data-lucide="check"></i>
<p className="text-gray-300"><strong className="text-white">Team Training &amp; System Adoption Playbooks:</strong> We provide live training and simple documentation to ensure your team understands and uses the new system effectively.</p>
</div>
<div className="flex items-start space-x-4 fade-in-up stagger-1">
<i className="w-6 h-6 text-blue-400 mt-1 shrink-0" data-lucide="check"></i>
<p className="text-gray-300"><strong className="text-white">90-Day Strategic Advisory &amp; Performance Monitoring:</strong> You get direct access to our strategists to help you optimize the system and track its performance.</p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6 mb-8">
<div className="bg-gray-800 p-6 rounded-xl border-2 border-blue-500 pulse-blue fade-in-up stagger-2">
<div className="flex items-center space-x-3 mb-4">
<i className="w-6 h-6 text-blue-400" data-lucide="shield-check"></i>
<h3 className="text-lg font-bold text-white">Guarantee #1</h3>
</div>
<p className="text-gray-300"><strong className="text-white">The Diagnostic Confidence Guarantee:</strong> If you're not 100% confident in our plan after the diagnostic phase, we'll refund your initial payment in full.</p>
</div>
<div className="bg-gray-800 p-6 rounded-xl border-2 border-blue-500 pulse-blue fade-in-up stagger-3">
<div className="flex items-center space-x-3 mb-4">
<i className="w-6 h-6 text-blue-400" data-lucide="shield-check"></i>
<h3 className="text-lg font-bold text-white">Guarantee #2</h3>
</div>
<p className="text-gray-300"><strong className="text-white">The "10-Hour Recapture" Guarantee:</strong> We guarantee our system will free up a minimum of 10 hours of your or your key team members' time per week. If we don't hit that metric, we will continue working for free until we do.</p>
</div>
</div>
<div className="gradient-border fade-in-up stagger-4">
<div className="bg-gray-800 p-6 rounded-xl">
<div className="flex items-center space-x-3 mb-4">
<i className="w-6 h-6 text-purple-400" data-lucide="clock"></i>
<h3 className="text-lg font-bold text-white">TIME-SENSITIVE BONUS</h3>
</div>
<p className="text-gray-300"><strong className="text-white">The Leadership Leverage Package ($5,000 Value):</strong> Sign on before <strong className="text-white">Friday, August 29, 2025</strong>, and receive a private post-sprint workshop to build a 90-day strategic plan for your newly recaptured time, ensuring your freedom is immediately translated into growth.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 flowing-gradient">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-bold mb-8 fade-in-up">
                Your Business Will Either Scale With Chaos or With Clarity. The Choice is Yours.
            </h2>
<p className="text-lg text-gray-300 mb-8 fade-in-up stagger-1">
                We only have the capacity to partner with <strong className="text-white">3 new clients per month</strong> to ensure we deliver transformative results for every business we work with. The next sprint is filling up now.
            </p>
<p className="text-lg text-gray-300 mb-12 fade-in-up stagger-2">
                If you are ready to stop being the bottleneck and start being the visionary again, the next step is to book a no-obligation strategy call with our team.
            </p>
<div className="fade-in-up stagger-3">
<button className="bg-blue-500 hover:bg-blue-600 hover:scale-105 text-white font-bold text-lg px-12 py-6 rounded-xl transition-all duration-300 shadow-2xl">
                    Claim Your Strategy Call
                </button>
<p className="text-gray-400 text-sm mt-4">Book a no-obligation call to transform your business</p>
</div>
</div>
</section>

<section className="py-16 px-6">
<div className="max-w-3xl mx-auto text-center">
<p className="text-gray-400 italic fade-in-up">
<strong>P.S.</strong> Every day you wait, you're not just tolerating inefficiency; you're actively choosing to continue carrying buckets. The aqueduct won't build itself. Let's have a no-obligation conversation to see if we're the right architects to help you build it.
            </p>
</div>
</section>


    </>
  );
}
