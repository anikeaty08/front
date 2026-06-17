import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        let currentPage = 0;
        const totalPages = 12;

        function updatePage() {
            // Update pages
            document.querySelectorAll('.page').forEach((page, index) => {
                page.classList.toggle('active', index === currentPage);
            });

            // Update dots
            document.querySelectorAll('.dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentPage);
            });

            // Update buttons
            document.getElementById('prevBtn').disabled = currentPage === 0;
            document.getElementById('nextBtn').disabled = currentPage === totalPages - 1;

            // Update page counter
            document.getElementById('pageNumber').textContent = currentPage + 1;
            document.getElementById('totalPages').textContent = totalPages;
        }

        function changePage(direction) {
            const newPage = currentPage + direction;
            if (newPage >= 0 && newPage < totalPages) {
                currentPage = newPage;
                updatePage();
                window.scrollTo(0, 0);
            }
        }

        function goToPage(pageIndex) {
            currentPage = pageIndex;
            updatePage();
            window.scrollTo(0, 0);
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                changePage(1);
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                changePage(-1);
            }
        });

        // Initialize
        updatePage();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="page active" id="page1">
<div className="cover">
<div className="logo">
<div className="logo-text">
</div>
</div>
<h1 className="">The Swish<br/>Manifesto</h1>
<div className="quote-box">
<div className="quote">
<p className="">You are always as good as your next game.</p>
</div>
<div className="quote">
<p className="">The day I retire, I'll look back happy knowing I gave it my all.</p>
</div>
<div className="quote">
<p className="">I want to be the best, the best I can be.</p>
</div>
<div className="mantras-label">These are our mantras.</div>
</div>
</div>
</div>

<div className="page" id="page2">
<div className="content">
<section>
<div className="section-label">Thought #1</div>
<h2>We Are a Product Fund</h2>
<p>We stand by our founders through thick and thin.</p>
<p>We pride ourselves on being . We intro the most customers. We help fundraise. We help close talent.</p>
<p>What makes us different? Our product and hands-on approach. . We roll up our sleeves. We're in the trenches with our founders.</p>
<div className="highlight-box">
<p>We do the work. This is who we are.</p>
</div>
</section>
</div>
</div>

<div className="page" id="page3">
<div className="content">
<section>
<div className="section-label">Thought #2</div>
<h2>We Must Invest in Category Winners</h2>
<p>Swish must invest in the <strong>Wiz, not the Orca</strong>. The <strong>Ramp, not the Brex</strong>.</p>
<p>We cannot afford to invest in second-best companies in a category. A Sequoia partner once told me that he would get fired if they invested in a cloud security platform and then watched Wiz win.</p>
<p><strong>That cannot happen to us.</strong></p>
<p>Historically—there is only one large outcome in a market, unless it's extraordinarily big. <strong>We must be in the one that wins.</strong></p>
<p>Sometimes a company is doing really well—but they aren't perceived as the category winner. <strong>We have to pass.</strong></p>
</section>
</div>
</div>

<div className="page" id="page4">
<div className="content">
<section>
<div className="section-label">Thought #3</div>
<h2>Association with Tier 1 Funds</h2>
<p>In order to continue building Swish into a tier 1 firm, we must be associated with the best investments.</p>
<p></p>
<div className="highlight-box">
<p>We play a game of ACCESS more than anything. Access is the key word for us. Being in the category winners is what compounds to the next generation of winners.</p>
</div>
</section>
</div>
</div>

<div className="page" id="page5">
<div className="content">
<section>
<div className="section-label">Thought #4</div>
<h2>We Are Playing the LP Game</h2>
<p>Startups are not a normal financial instrument. They're playing the <strong>VC game</strong>.</p>
<p>What does that mean? They have to understand what VCs are looking for. What milestones lead to the next round? What quality of customers? How many employees?</p>
<p>It's harder when you've raised from tier 2 or tier 3 funds—fighting uphill against tier 1 funds backing your competitor.</p>
<p>The same is true for Swish. <strong>We are playing the LP game.</strong></p>
<p>LPs want category winners. Co-investors like Sequoia, Thrive, Index. Companies their CIO would recognize.</p>
<p>Not all of these will work. But by playing this game, we put ourselves in position to win very large outcomes.</p>
</section>
</div>
</div>

<div className="page" id="page6">
<div className="content">
<section>
<div className="section-label">Thought #5</div>
<h2>Double Down and Compound</h2>
<p>When we're in the winners, we can double down. We can continue to put a lot more money to work into the companies that are breaking out. Similar to what Josh has done at Thrive.</p>
<p></p>
<p>And quite frankly, it also doesn't matter in the short term. A year or two into Fund I, you raise your next one. Who remembers Josh's 2017 fund? He just raised $10 billion.</p>
<p></p>
</section>
</div>
</div>

<div className="page" id="page7">
<div className="content">
<section>
<div className="section-label">Thought #6</div>
<h2>Tier 1 Association Creates a Flywheel</h2>
<p>VCs like to invest following a tier 1 fund. By investing alongside a tier 1 fund, it goes a very long way for other funds to want to double down on those winners.</p>
<p>It's much harder to back, preempt, or lead a round in a company backed by tier 2 or tier 3 funds. When they visit Israel, they concentrate around very few funds.</p>
<p>Think about it: those VCs are telling the same story to their LPs. Their LPs want access alongside the Sequoias, the Cyberstarts, the Thrives—the Swishes of the world.</p>
<div className="highlight-box">
<p>This is why we must continuously associate ourselves with tier 1 funds.</p>
</div>
</section>
</div>
</div>

<div className="page" id="page8">
<div className="content">
<section>
<div className="section-label">Thought #7</div>
<h2>Big Markets + Best Teams</h2>
<p>Whether you're investing at seed or growth, in many ways it's the same—especially now, when capital flows so heavily into the winners.</p>
<p>We want to invest in , not small markets where it's a bet on the team to expand into something new.</p>
<p>All of our best success stories have been in very, very large markets from the very beginning. The very best founders also identify very large markets from the get-go.</p>
<div className="highlight-box">
<p>✓ Big market + best team in the category.</p>
</div>
</section>
</div>
</div>

<div className="page" id="page9">
<div className="content">
<section>
<div className="section-label">Thought #8</div>
<h2>Timing — Early or Solidified</h2>
<p>We want to back the best team to win the category. That means we invest at one of two moments:</p>
<div className="two-column">
<div className="timing-box">
<h4>1. Early</h4>
<p>When we identify a generational team going after a massive market before the category is defined.</p>
</div>
<div className="timing-box">
<h4>2. Solidified</h4>
<p>When the category winner is becoming clear. ARR traction is there. The right funds are involved.</p>
</div>
</div>
<p style={{marginTop: '30px'}}>We don't invest in the messy middle—where it's unclear who's winning.</p>
<div className="highlight-box">
<p>You don't win championships by taking every shot. You win by knowing which shot you're looking for.</p>
</div>
</section>
</div>
</div>

<div className="page" id="page10">
<div className="content">
<section>
<div className="section-label">Thought #9</div>
<h2>The Number of Generational Founders Stays Constant</h2>
<p>The venture industry has exploded. More funds, more partners, more capital than ever before.</p>
<p></p>
<p>It's still a very small number of exceptional people building the companies that matter.</p>
<div className="highlight-box">
<p>We don't need to be everywhere. We need to be in the right places.</p>
</div>
</section>
</div>
</div>

<div className="page" id="page11">
<div className="content">
<section>
<h2>Pre-Investment Checklist</h2>
<p style={{marginBottom: '40px'}}>Before we invest, we must answer these questions:</p>
<div className="checklist">
<div className="checklist-item">
<span className="number">1</span>
<div className="checklist-item-content">
<h3>Is this team elite?</h3>
<p>Is this a generational team?</p>
</div>
</div>
<div className="checklist-item">
<span className="number">2</span>
<div className="checklist-item-content">
<h3>How big is the market?</h3>
<p>Can this market sustain a $50–100 billion outcome?</p>
</div>
</div>
<div className="checklist-item">
<span className="number">3</span>
<div className="checklist-item-content">
<h3>What's the competition like?</h3>
<p>Which startups have other tier 1 funds invested in? Is this the best team?</p>
</div>
</div>
<div className="checklist-item">
<span className="number">4</span>
<div className="checklist-item-content">
<h3>Is this a power law company?</h3>
</div>
</div>
</div>
</section>
</div>
</div>

<div className="page" id="page12">
<div className="content">
<section>
<div className="section-label">Thought #10</div>
<h2>The Vision — From Follower to Leader</h2>
<p>This is the vision for the next few years.</p>
<p>We invest alongside the best. We associate ourselves with category winners. We build our track record by being in the defining companies of this era.</p>
<p>Once we have more winners under our belt—once Swish is associated with the companies that defined their categories—we become the tier 1 that leads these rounds.</p>
<div className="highlight-box">
<p>We go from following the best to being the best. That's where we're headed.</p>
</div>
</section>
<div className="copyright">
<small>© All rights reserved to Swish Ventures</small>
</div>
</div>
</div>

<div className="nav">
<button aria-label="Previous page" disabled="" id="prevBtn" onclick="changePage(-1)">
<svg fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="dots">
<button aria-label="Go to page 1" className="dot active" onclick="goToPage(0)"></button>
<button aria-label="Go to page 2" className="dot" onclick="goToPage(1)"></button>
<button aria-label="Go to page 3" className="dot" onclick="goToPage(2)"></button>
<button aria-label="Go to page 4" className="dot" onclick="goToPage(3)"></button>
<button aria-label="Go to page 5" className="dot" onclick="goToPage(4)"></button>
<button aria-label="Go to page 6" className="dot" onclick="goToPage(5)"></button>
<button aria-label="Go to page 7" className="dot" onclick="goToPage(6)"></button>
<button aria-label="Go to page 8" className="dot" onclick="goToPage(7)"></button>
<button aria-label="Go to page 9" className="dot" onclick="goToPage(8)"></button>
<button aria-label="Go to page 10" className="dot" onclick="goToPage(9)"></button>
<button aria-label="Go to page 11" className="dot" onclick="goToPage(10)"></button>
<button aria-label="Go to page 12" className="dot" onclick="goToPage(11)"></button>
</div>
<button aria-label="Next page" className="" id="nextBtn" onclick="changePage(1)">
<svg fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="footer">
<div className="footer-logo">
<svg fill="none" viewbox="0 0 40 30">
<path d="M8 25 L8 8 M14 25 L14 5 M20 25 L20 3 M26 25 L26 5 M32 25 L32 8" stroke="white" strokeLinecap="round" strokeWidth="2"></path>
</svg>
<span><b>swish</b>ventures.</span>
</div>
<div className="page-counter">
<span id="pageNumber">1</span> / <span id="totalPages">12</span>
</div>
<small>© All rights reserved to Swish</small>
</div>


    </>
  );
}
