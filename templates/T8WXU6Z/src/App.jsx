import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener('DOMContentLoaded', function() {
        const h1Slider = document.getElementById('h1');
        const h2Slider = document.getElementById('h2');
        const h1Value = document.getElementById('h1-value');
        const h2Value = document.getElementById('h2-value');
        
        function updateSliderValue(slider, valueDisplay) {
          valueDisplay.textContent = slider.value + '°';
          const percent = (slider.value - slider.min) / (slider.max - slider.min);
          valueDisplay.style.left = percent * 100 + '%';
          valueDisplay.style.transform = 'translateX(-50%)';
        }
        
        function addSliderEvents(slider, valueDisplay) {
          slider.addEventListener('input', function() {
            updateSliderValue(slider, valueDisplay);
          });
          
          slider.addEventListener('mouseenter', function() {
            valueDisplay.style.opacity = '1';
          });
          
          slider.addEventListener('mouseleave', function() {
            valueDisplay.style.opacity = '0';
          });

          slider.addEventListener('focus', function() {
            valueDisplay.style.opacity = '1';
          });
          
          slider.addEventListener('blur', function() {
            valueDisplay.style.opacity = '0';
          });

          // Touch events for mobile
          slider.addEventListener('touchstart', function() {
            valueDisplay.style.opacity = '1';
          });
          
          slider.addEventListener('touchend', function() {
            setTimeout(() => {
              valueDisplay.style.opacity = '0';
            }, 1000);
          });
        }
        
        addSliderEvents(h1Slider, h1Value);
        addSliderEvents(h2Slider, h2Value);
        
        // Initialize values
        updateSliderValue(h1Slider, h1Value);
        updateSliderValue(h2Slider, h2Value);
      });
    


  const $menu = document.getElementById('menu');
  const $hue1 = document.querySelector('#h1');
  const $hue2 = document.querySelector('#h2');
  let cleanTimer;
  let isDragging = false;
  let dragOffset = { x: 0, y: 0 };

  // Drag functionality
  function initDrag() {
    $menu.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', endDrag);
    
    // Touch events for mobile
    $menu.addEventListener('touchstart', startDragTouch, { passive: false });
    document.addEventListener('touchmove', dragTouch, { passive: false });
    document.addEventListener('touchend', endDrag);
  }

  function startDrag(e) {
    // Don't start drag on form elements
    if (isFormElement(e.target)) return;
    
    isDragging = true;
    $menu.classList.add('dragging');
    
    const rect = $menu.getBoundingClientRect();
    dragOffset.x = e.clientX - rect.left - rect.width / 2;
    dragOffset.y = e.clientY - rect.top - rect.height / 2;
    
    e.preventDefault();
  }

  function startDragTouch(e) {
    if (isFormElement(e.target)) return;
    
    isDragging = true;
    $menu.classList.add('dragging');
    
    const touch = e.touches[0];
    const rect = $menu.getBoundingClientRect();
    dragOffset.x = touch.clientX - rect.left - rect.width / 2;
    dragOffset.y = touch.clientY - rect.top - rect.height / 2;
    
    e.preventDefault();
  }

  function drag(e) {
    if (!isDragging) return;
    
    const x = e.clientX - dragOffset.x;
    const y = e.clientY - dragOffset.y;
    
    // Keep form within viewport bounds
    const rect = $menu.getBoundingClientRect();
    const maxX = window.innerWidth - rect.width / 2;
    const maxY = window.innerHeight - rect.height / 2;
    const minX = rect.width / 2;
    const minY = rect.height / 2;
    
    const clampedX = Math.max(minX, Math.min(maxX, x));
    const clampedY = Math.max(minY, Math.min(maxY, y));
    
    $menu.style.left = clampedX + 'px';
    $menu.style.top = clampedY + 'px';
    $menu.style.transform = 'translate(-50%, -50%)';
  }

  function dragTouch(e) {
    if (!isDragging) return;
    
    const touch = e.touches[0];
    const x = touch.clientX - dragOffset.x;
    const y = touch.clientY - dragOffset.y;
    
    const rect = $menu.getBoundingClientRect();
    const maxX = window.innerWidth - rect.width / 2;
    const maxY = window.innerHeight - rect.height / 2;
    const minX = rect.width / 2;
    const minY = rect.height / 2;
    
    const clampedX = Math.max(minX, Math.min(maxX, x));
    const clampedY = Math.max(minY, Math.min(maxY, y));
    
    $menu.style.left = clampedX + 'px';
    $menu.style.top = clampedY + 'px';
    $menu.style.transform = 'translate(-50%, -50%)';
    
    e.preventDefault();
  }

  function endDrag() {
    if (!isDragging) return;
    
    isDragging = false;
    $menu.classList.remove('dragging');
  }

  function isFormElement(element) {
    const formTags = ['INPUT', 'BUTTON', 'LABEL', 'A'];
    const formClasses = ['checkbox-group', 'sign-in-link'];
    
    return formTags.includes(element.tagName) ||
           formClasses.some(cls => element.classList.contains(cls) || element.closest(`.${cls}`));
  }

  // Click anywhere to open (except on sliders and drag actions)
  document.addEventListener("click", (event) => {
    if (isDragging) return;
    
    const $target = event.target;
    const isMenu = $menu.contains($target);
    const isSlider = $target.matches('input[type="range"]') || $target.closest('.social-icon') || $target.closest('footer');

    if (!isMenu && !isSlider) {
      $menu.classList.add('open');
      clearTimeout(cleanTimer);
    } else if (isMenu && !isFormElement($target)) {
      event.stopPropagation();
    }
  });

  // Close form with Escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && $menu.classList.contains('open')) {
      $menu.classList.remove('open');
      cleanTimer = setTimeout(() => {
        const form = $menu.querySelector('form');
        if (form) form.reset();
        // Reset position
        $menu.style.left = '50%';
        $menu.style.top = '50%';
        $menu.style.transform = 'translate(-50%, -50%)';
      }, 200);
    }
  });

  // Handle form submission
  $menu.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    // Simulate successful signup
    alert('Account created successfully!');
    $menu.classList.remove('open');
    
    cleanTimer = setTimeout(() => {
      event.target.reset();
      // Reset position
      $menu.style.left = '50%';
      $menu.style.top = '50%';
      $menu.style.transform = 'translate(-50%, -50%)';
    }, 200);
  });

  // Hue sliders live-update
  $hue1.addEventListener('input', (e) => {
    requestAnimationFrame(() => {
      document.body.style.setProperty('--hue1', e.target.value);
      if ($menu.classList.contains('open')) {
        $menu.classList.add('open'); // Retrigger glow animation
      }
    });
  });
  $hue2.addEventListener('input', (e) => {
    requestAnimationFrame(() => {
      document.body.style.setProperty('--hue2', e.target.value);
      if ($menu.classList.contains('open')) {
        $menu.classList.add('open'); // Retrigger glow animation
      }
    });
  });

  // Initialize drag functionality
  initDrag();

  // Random pleasant starting hues
  const rand1 = 120 + Math.floor(Math.random() * 240);
  const rand2 = rand1 - 80 + (Math.floor(Math.random() * 60) - 30);
  $hue1.value = rand1; $hue2.value = rand2;
  document.body.style.setProperty('--hue1', rand1);
  document.body.style.setProperty('--hue2', rand2);

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="" id="app">
<header className="">
<h1 className="">Neon Glass Sign Up Form</h1>
<p className="">Click anywhere to open • Drag form to move</p>
</header>
<footer className="">
<h2 className="">Pick your own colors!</h2>
<div className="space-y-6 w-full">
<div className="slider-container">
<label className="slider-label">Primary Hue</label>
<input className="slider-thumb" id="h1" max="360" min="0" type="range" value="255"/>
<div className="slider-value" id="h1-value">255°</div>
</div>
<div className="slider-container">
<label className="slider-label">Secondary Hue</label>
<input className="slider-thumb" id="h2" max="360" min="0" type="range" value="222"/>
<div className="slider-value" id="h2-value">222°</div>
</div>
</div>

</footer>
</main>
<aside className="" id="menu">
<span className="shine shine-top"></span>
<span className="shine shine-bottom"></span>
<span className="glow glow-top"></span>
<span className="glow glow-bottom"></span>
<span className="glow glow-bright glow-top"></span>
<span className="glow glow-bright glow-bottom"></span>
<div className="inner">
<div className="header">
<h1>Create Account</h1>
<p>Join us and start your journey</p>
</div>
<form>
<div className="form-group">
<label htmlFor="firstName">First Name</label>
<input id="firstName" name="firstName" placeholder="Enter your first name" required="" type="text"/>
</div>
<div className="form-group">
<label htmlFor="lastName">Last Name</label>
<input id="lastName" name="lastName" placeholder="Enter your last name" required="" type="text"/>
</div>
<div className="form-group">
<label htmlFor="email">Email Address</label>
<input id="email" name="email" placeholder="Enter your email" required="" type="email"/>
</div>
<div className="form-group">
<label htmlFor="password">Password</label>
<input id="password" name="password" placeholder="Create a password" required="" type="password"/>
</div>
<div className="form-group">
<label htmlFor="confirmPassword">Confirm Password</label>
<input id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" required="" type="password"/>
</div>
<div className="checkbox-group">
<input id="terms" name="terms" required="" type="checkbox"/>
<label htmlFor="terms">I agree to the Terms of Service and Privacy Policy</label>
</div>
<div className="checkbox-group">
<input id="newsletter" name="newsletter" type="checkbox"/>
<label htmlFor="newsletter">Subscribe to our newsletter for updates</label>
</div>
<button type="submit">Create Account</button>
</form>
<div className="sign-in-link">
      Already have an account? <a href="#">Sign in</a>
</div>
</div>
</aside>

<a aria-label="Twitter" className="social-icon twitter" href="https://twitter.com/simeydotme">
<svg height="16" viewbox="0 0 24 24" width="16"><path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737s-2.643 2.06-2.62 3.737v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742.214-.82.376-1.858.497-3.753.002-.249 1.514-2.772 1.822-4.013z" fill="currentColor"></path></svg>
</a>
<a aria-label="GitHub" className="social-icon github" href="https://github.com/simeydotme">
<svg height="16" viewbox="0 0 24 24" width="16"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0c-2.4-1.6-3.5-1.3-3.5-1.3a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V23" fill="currentColor"></path></svg>
</a>


    </>
  );
}
