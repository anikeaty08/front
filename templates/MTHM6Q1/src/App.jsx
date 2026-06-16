import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const baseSize = 55; // vmin
    const length = 101;
    const half = Math.floor(length / 2);
    const gapDist = baseSize / length;
    const gapSize = baseSize / half;
    const time = 2.5;
    const delay = time / half;
    const ratioA = 0.5;
    const ratioB = 0.25;

    const ul = document.getElementById('orbit-list');
    function setLiStyles(li, index, sign = 1, step = 0) {
      const d = sign * (index * gapDist * 1.75);
      const size = baseSize - gapSize * (index - 1);
      li.style.setProperty('--delay', (delay * index) + 's');
      li.style.setProperty('--dist', d + 'vmin');
      li.style.width = size + 'vmin';
      li.style.height = size + 'vmin';
      li.style.setProperty('--after-size', (size * ratioA) + 'vmin');
      li.style.setProperty('--before-size', (size * ratioB) + 'vmin');
      li.style.zIndex = 10 + (sign * index);
      li.innerHTML = '';
      li.style.setProperty('--li-index', index);
    }
    for(let i=1; i<=half; ++i) {
      let li = document.createElement('li');
      setLiStyles(li, i, 1, 0);
      li.style.position = 'absolute';
      li.style.top = '50%';
      li.style.left = '50%';
      li.style.setProperty('--size', (baseSize - gapSize * (i - 1)) + 'vmin');
      li.style.setProperty('--after-size', ((baseSize - gapSize * (i - 1)) * ratioA) + 'vmin');
      li.style.setProperty('--before-size', ((baseSize - gapSize * (i - 1)) * ratioB) + 'vmin');
      ul.appendChild(li);
    }
    for(let i=1; i<=half; ++i) {
      let li = document.createElement('li');
      setLiStyles(li, i, -1, half);
      li.style.position = 'absolute';
      li.style.top = '50%';
      li.style.left = '50%';
      li.style.setProperty('--size', (baseSize - gapSize * (i - 1)) + 'vmin');
      li.style.setProperty('--after-size', ((baseSize - gapSize * (i - 1)) * ratioA) + 'vmin');
      li.style.setProperty('--before-size', ((baseSize - gapSize * (i - 1)) * ratioB) + 'vmin');
      ul.appendChild(li);
    }
    const style = document.createElement('style');
    style.innerHTML = `
      ul#orbit-list li::after {
        width: var(--after-size, 0);
        height: var(--after-size, 0);
        left: 50%;
        top: 50%;
        position: absolute;
      }
      ul#orbit-list li::before {
        width: var(--before-size, 0);
        height: var(--before-size, 0);
        left: 50%;
        top: 50%;
        position: absolute;
      }
    `;
    document.head.appendChild(style);
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="hero-bg">
<section aria-hidden="true">
<ul id="orbit-list"></ul>
</section>
</div>
<main className="hero-content">
<h1 className="hero-headline">Inspire with Geometry</h1>
<p className="hero-subtext">
      Dynamic, animated geometric shapes for stunning hero sections. Elevate your design—make a bold first impression.
    </p>
<button className="hero-button">Get Started</button>
</main>


    </>
  );
}
