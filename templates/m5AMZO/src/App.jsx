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



        document.addEventListener('DOMContentLoaded', () => {
            const headlineElement = document.querySelector('.hero-headline');
            const headlineText = "Wowza! Your Ideas Take Flight.";
            
            function prepareHeadline(text) {
                // Only "Ideas" will be highlighted as a whole word
                const wordToHighlight = "Ideas";
                let parts = text.split(wordToHighlight);
                
                let finalHTML = '';
                
                // Process first part (before "Ideas")
                if (parts[0]) {
                    finalHTML += parts[0].split('').map(char => 
                        char === ' ' ? ' ' : '<span class="char">' + char + '</span>'
                    ).join('');
                }
                
                // Add the highlighted "Ideas"
                finalHTML += '<span class="highlight">' + wordToHighlight + '</span>';
                
                // Process second part (after "Ideas")
                if (parts[1]) {
                    finalHTML += parts[1].split('').map(char => 
                        char === ' ' ? ' ' : '<span class="char">' + char + '</span>'
                    ).join('');
                }
                
                return finalHTML;
            }

            if (headlineElement) {
                headlineElement.innerHTML = prepareHeadline(headlineText);
            }
        });
    
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
      
<nav className="main-nav">
<div className="nav-logo">
<a href="#hero-section">Wowza!</a>
</div>
<div className="nav-links">
<ul>
<li><a href="features.html">Features</a></li>
<li><a href="pricing.html">Pricing</a></li>
<li><a href="about.html">About</a></li>
<li><a className="nav-cta-link" href="contact.html">Get Started</a></li>
</ul>
</div>
</nav>
<section className="hero" id="hero-section">
<div className="blob blob-1"></div>
<div className="blob blob-2"></div>
<div className="blob blob-3"></div>
<div className="blob blob-4"></div>
<div className="hero-content">
<h1 className="hero-headline">

</h1>
<p className="hero-subheadline">
                We turn brilliant concepts into delightful digital experiences that users absolutely love. Ready to make some magic?
            </p>
<a className="hero-cta" href="contact.html">
                Let's Build Awesome! <span className="cta-arrow">➔</span>
</a>
</div>
</section>


    </>
  );
}
