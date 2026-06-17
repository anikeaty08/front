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
      
<section>
<input checked="" className="sr-only" id="card-1" name="panel" type="radio"/>
<input className="sr-only" id="card-2" name="panel" type="radio"/>
<input className="sr-only" id="card-3" name="panel" type="radio"/>
<article id="article-1">
<header>
<h2>Utility-First Approach</h2>
<label htmlFor="card-2">⤫</label>
</header>
<div>
<div className="icon">
<i className="fa-solid fa-puzzle-piece"></i>
</div>
<div className="poem">
<p>
                        Tailwind builds interfaces piece by piece,<br/>
                        With utility classes that never cease.<br/>
                        No more custom CSS sprawling free,<br/>
                        Just composable classes for all to see.
                    </p>
<p>
                        Write less custom code, stay in your flow,<br/>
                        With responsive modifiers that help you grow.<br/>
                        Using classes like flex, grid, and p-4,<br/>
                        Your markup reveals what the styling's for.
                    </p>
<p>
                        The workflow feels rapid, intuitive, clean,<br/>
                        Keeping your projects lean and your code serene.<br/>
                        Direct in your HTML, no context switching,<br/>
                        Makes development faster without any glitching.
                    </p>
<p>
                        So embrace the approach that's utility-first,<br/>
                        Where productivity soars and design is immersed—<br/>
                        No fighting the framework or swimming upstream,<br/>
                        Just clean, functional UIs fulfilling your dream.
                    </p>
</div>
</div>
</article>
<article id="article-2">
<header>
<h2>Responsive Design</h2>
<label htmlFor="card-3">⤫</label>
</header>
<div>
<div className="icon">
<i className="fa-solid fa-mobile-screen"></i>
</div>
<div className="poem">
<p>Built-in breakpoints make layouts adapt,<br/>
                        From mobile to desktop, no feature's trapped.<br/>
                        With sm:, md:, lg:, and xl: prefixes in hand,<br/>
                        Your design flows seamlessly across the land.
                    </p>
<p>Start small and build up, the mobile-first way,<br/>
                        Let larger screens have their specific display.<br/>
                        No media queries cluttering your code,<br/>
                        Just intuitive classes that ease your load.</p>
<p>Container queries now join the responsive game,<br/>
                        Making component-based design less of a pain.<br/>
                        With @container and @supports at play,<br/>
                        Advanced responsive patterns are just a class away.
                    </p>
<p>Dynamic layouts shift with screen real estate,<br/>
                        From stacked to side-by-side, they'll navigate.<br/>
                        Tailwind's responsive system keeps UIs refined—<br/>
                        Fluid, adaptable, and perfectly aligned.
                    </p>
</div>
</div>
</article>
<article id="article-3">
<header>
<h2>Customization</h2>
<label htmlFor="card-1">⤫</label>
</header>
<div>
<div className="icon">
<i className="fa-solid fa-sliders"></i>
</div>
<div className="poem">
<p>
                        The config file welcomes your custom touch,<br/>
                        Themes, colors, and spacing—adjust as much.<br/>
                        Your brand's palette easily slides in place,<br/>
                        Making Tailwind yours with effortless grace.
                    </p>
<p>Extend the defaults or replace them outright,<br/>
                        Define what you need with future in sight.<br/>
                        Add plugins for patterns you frequently use,<br/>
                        Or create your variants—there's nothing to lose.</p>
<p>Just-in-time compiler keeps bundles tight,<br/>
                        Generating only the CSS you write.<br/>
                        Safe-list important classes for dynamic needs,<br/>
                        While purging unused styles for optimal speeds.</p>
<p>Your design system lives in tailwind.config,<br/>
                        A single source of truth that's easy to tweak.<br/>
                        The lessons clear as developers build:<br/>
                        Constraint inspires creativity when skillfully filled.</p>
</div>
</div>
</article>
</section>

    </>
  );
}
