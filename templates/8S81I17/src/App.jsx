import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Initialize Lucide icons
    lucide.createIcons();
    
    // Matter.js Physics Engine Setup
    const Engine = Matter.Engine;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Events = Matter.Events;
    const Body = Matter.Body;
    const Constraint = Matter.Constraint;
    
    // Create physics engine
    const engine = Engine.create();
    engine.world.gravity.y = 0.8;
    engine.world.gravity.x = 0;
    
    // Physics tracking variables
    let physicsLetters = new Map();
    let collisionCount = 0;
    let frameCount = 0;
    let lastTime = performance.now();
    
    // Login box collision body
    let loginBoxBody = null;
    
    function initPhysics() {
      const loginBox = document.getElementById('login-box');
      const rect = loginBox.getBoundingClientRect();
      
      // Create static body for login box with rounded corners approximation
      loginBoxBody = Bodies.rectangle(
        rect.left + rect.width / 2,
        rect.top + rect.height / 2,
        rect.width,
        rect.height,
        {
          isStatic: true,
          restitution: 0.8,
          friction: 0.3,
          frictionAir: 0.01,
          label: 'loginBox'
        }
      );
      
      World.add(engine.world, loginBoxBody);
      
      // Create invisible walls
      const walls = [
        Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 50, window.innerWidth, 100, { isStatic: true, label: 'ground' }),
        Bodies.rectangle(-50, window.innerHeight / 2, 100, window.innerHeight, { isStatic: true, label: 'leftWall' }),
        Bodies.rectangle(window.innerWidth + 50, window.innerHeight / 2, 100, window.innerHeight, { isStatic: true, label: 'rightWall' })
      ];
      
      World.add(engine.world, walls);
      
      // Collision detection
      Events.on(engine, 'collisionStart', function(event) {
        event.pairs.forEach(pair => {
          const { bodyA, bodyB } = pair;
          
          if (bodyA.label === 'loginBox' || bodyB.label === 'loginBox') {
            const letterBody = bodyA.label === 'matrixLetter' ? bodyA : bodyB;
            
            if (letterBody.label === 'matrixLetter') {
              collisionCount++;
              
              // Get letter element
              const letterElement = physicsLetters.get(letterBody.id);
              if (letterElement) {
                letterElement.classList.add('physics-active');
                
                // Create collision spark effect
                createCollisionSpark(letterBody.position.x, letterBody.position.y);
                
                // Add shield effect
                const loginContainer = document.getElementById('login-container');
                loginContainer.classList.add('protected');
                setTimeout(() => {
                  loginContainer.classList.remove('protected');
                }, 1500);
                
                // Add some random velocity for more dynamic bouncing
                Body.setVelocity(letterBody, {
                  x: letterBody.velocity.x + (Math.random() - 0.5) * 5,
                  y: letterBody.velocity.y - Math.random() * 3
                });
              }
            }
          }
        });
      });
      
      // Start physics engine
      Engine.run(engine);
      
      // Update loop
      requestAnimationFrame(updatePhysics);
    }
    
    function updatePhysics() {
      frameCount++;
      
      // Update letter positions
      physicsLetters.forEach((element, bodyId) => {
        const body = engine.world.bodies.find(b => b.id === bodyId);if (body) {
          element.style.left = body.position.x + 'px';
          element.style.top = body.position.y + 'px';
          element.style.transform = `rotate(${body.angle}rad)`;
          
          // Remove letters that are off screen
          if (body.position.y > window.innerHeight + 100 || 
              body.position.x < -100 || 
              body.position.x > window.innerWidth + 100) {
            World.remove(engine.world, body);
            element.remove();
            physicsLetters.delete(bodyId);
          }
        }
      });
      
      // Update debug info
      const currentTime = performance.now();
      if (currentTime - lastTime > 1000) {
        const fps = Math.round(frameCount * 1000 / (currentTime - lastTime));
        document.getElementById('fps').textContent = fps;
        document.getElementById('body-count').textContent = engine.world.bodies.length;
        document.getElementById('collision-count').textContent = collisionCount;
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(updatePhysics);
    }
    
    function createCollisionSpark(x, y) {
      const spark = document.createElement('div');
      spark.className = 'collision-spark';
      spark.style.left = x + 'px';
      spark.style.top = y + 'px';
      document.body.appendChild(spark);
      
      setTimeout(() => {
        spark.remove();
      }, 600);
    }
    
    // Matrix rain effect with physics integration
    function createMatrixRain() {
      const matrixContainer = document.getElementById('matrix-rain');
      const characters = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      
      function createMatrixLetter() {
        const letter = document.createElement('div');
        letter.className = 'matrix-letter';
        letter.textContent = characters[Math.floor(Math.random() * characters.length)];
        letter.style.left = Math.random() * window.innerWidth + 'px';
        letter.style.top = '-20px';
        
        matrixContainer.appendChild(letter);
        
        // 30% chance to create physics body
        if (Math.random() < 0.3) {
          const physicsBody = Bodies.circle(
            parseFloat(letter.style.left),
            -20,
            8,
            {
              restitution: 0.7,
              friction: 0.1,
              frictionAir: 0.01,
              density: 0.001,
              label: 'matrixLetter'
            }
          );
          
          // Add initial velocity
          Body.setVelocity(physicsBody, {
            x: (Math.random() - 0.5) * 2,
            y: Math.random() * 3 + 2
          });
          
          World.add(engine.world, physicsBody);
          physicsLetters.set(physicsBody.id, letter);
        } else {
          // Regular falling animation
          letter.classList.add('falling');
          letter.style.animationDuration = (Math.random() * 3 + 4) + 's';
          letter.style.animationDelay = Math.random() * 2 + 's';
          
          setTimeout(() => {
            if (letter.parentNode) {
              letter.remove();
            }
          }, 8000);
        }
      }
      
      // Create letters at intervals
      setInterval(createMatrixLetter, 200);
    }
    
    // Form interactions
    function initFormFeatures() {
      const emailInput = document.getElementById('email');
      const passwordInput = document.getElementById('password');
      const togglePassword = document.getElementById('toggle-password');
      const emailValid = document.getElementById('email-valid');
      const submitBtn = document.getElementById('submit-btn');
      
      // Email validation
      emailInput.addEventListener('input', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(this.value)) {
          emailValid.style.opacity = '1';
        } else {
          emailValid.style.opacity = '0';
        }
      });
      
      // Password toggle
      togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        const icon = this.querySelector('svg');
        if (type === 'text') {
          icon.innerHTML = '<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="m15 9-6 6"></path><path d="m9 9-.18-.18a3 3 0 0 0-4.24 4.24L9 15l3-3 3-3"></path><path d="m21 21-2-2"></path><path d="M3 3l18 18"></path>';
        } else {
          icon.innerHTML = '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle>';
        }
      });
      
      // Form submission
      document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        submitBtn.innerHTML = `
          <svg class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Signing in...</span>
        `;
        
        submitBtn.disabled = true;
        
        // Simulate login process
        setTimeout(() => {
          submitBtn.innerHTML = `
            <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-green-400">Success!</span>
          `;
          
          setTimeout(() => {
            window.location.href = '#dashboard';
          }, 1000);
        }, 2000);
      });
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
      // Toggle debug with Ctrl+D
      if (e.ctrlKey && e.key === 'd') {
        e.preventDefault();
        const debug = document.getElementById('physics-debug');
        debug.style.display = debug.style.display === 'none' ? 'block' : 'none';
      }
      
      // Focus email with Alt+E
      if (e.altKey && e.key === 'e') {
        e.preventDefault();
        document.getElementById('email').focus();
      }
      
      // Focus password with Alt+P
      if (e.altKey && e.key === 'p') {
        e.preventDefault();
        document.getElementById('password').focus();
      }
    });
    
    // Resize handler
    window.addEventListener('resize', function() {
      if (loginBoxBody) {
        const loginBox = document.getElementById('login-box');
        const rect = loginBox.getBoundingClientRect();
        
        Body.setPosition(loginBoxBody, {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        });
      }
    });
    
    // Initialize everything when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
      initPhysics();
      createMatrixRain();
      initFormFeatures();
      
      // Add some initial visual flair
      setTimeout(() => {
        document.querySelector('.floating').style.animationDelay = '0s';
      }, 500);
    });
    
    // Performance monitoring
    let performanceMetrics = {
      frameDrops: 0,
      lastFrameTime: performance.now()
    };
    
    function monitorPerformance() {
      const currentTime = performance.now();
      const frameDelta = currentTime - performanceMetrics.lastFrameTime;
      
      if (frameDelta > 20) { // More than 20ms indicates frame drop
        performanceMetrics.frameDrops++;
      }
      
      performanceMetrics.lastFrameTime = currentTime;
      
      // Reduce physics complexity if performance is suffering
      if (performanceMetrics.frameDrops > 10) {
        engine.world.gravity.y = 1.2; // Faster falling
        performanceMetrics.frameDrops = 0;
      }
      
      requestAnimationFrame(monitorPerformance);
    }
    
    monitorPerformance();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="physics-debug" id="physics-debug">
    Active Bodies: <span id="body-count">0</span><br/>
    Collisions: <span id="collision-count">0</span><br/>
    FPS: <span id="fps">0</span>
</div>

<div className="matrix-rain" id="matrix-rain"></div>

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-gray-950 opacity-40"></div>
<div %3e%3c="" %3e%3ccircle="" %3e%3cg="" 60"="" className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=" cx="7" cy="7" fill="white" fillOpacity="0.03" fill-rule="evenodd" g%3e%3c="" height="60" r="1" svg%3e')]="" viewbox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"></div>

<div className="login-container w-full max-w-md px-6" id="login-container">

<div className="text-center mb-8 fade-in floating">
<div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-4 shadow-xl glow relative overflow-hidden">
<svg className="lucide lucide-zap w-8 h-8 text-white relative z-10" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-20"></div>
</div>
<h1 className="text-2xl font-bold text-white tracking-tight mb-1">FlowSync Pro</h1>
<p className="text-sm text-gray-300">Sign in to your workspace</p>
<div className="flex items-center justify-center gap-2 mt-3">
<div className="security-indicator">
<svg className="lucide lucide-shield-check w-3 h-3" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span>Protected Session</span>
</div>
</div>
</div>

<div className="bg-gray-800/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 p-6 slide-up relative overflow-hidden" id="login-box" style={{animationDelay: '0.2s'}}>

<div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-purple-600/10 pointer-events-none"></div>
<form className="space-y-6 relative z-10">

<div className="space-y-2">
<label className="block text-sm font-medium text-gray-200 flex items-center gap-2" htmlFor="email">
            Email address
            <span className="text-xs text-red-400">*</span>
</label>
<div className="relative">
<input className="input-focus w-full px-4 py-3 pl-12 border border-white/10 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-300 bg-gray-700 focus:bg-gray-600 hover:border-white/10 text-white placeholder-gray-300" id="email" name="email" placeholder="emma.chen@company.com" required="" type="email"/>
<svg className="lucide lucide-mail absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<div className="absolute right-4 top-1/2 -translate-y-1/2">
<div className="w-2 h-2 bg-green-500 rounded-full opacity-0 transition-opacity duration-300" id="email-valid"></div>
</div>
</div>
</div>

<div className="space-y-2">
<label className="block text-sm font-medium text-gray-200 flex items-center gap-2" htmlFor="password">
            Password
            <span className="text-xs text-red-400">*</span>
</label>
<div className="relative">
<input className="input-focus w-full px-4 py-3 pl-12 pr-12 border border-white/10 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-300 bg-gray-700 focus:bg-gray-600 hover:border-white/10 text-white placeholder-gray-300" id="password" name="password" placeholder="••••••••" required="" type="password"/>
<svg className="lucide lucide-lock absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-200 transition-colors p-1 rounded-md hover:bg-gray-600" id="toggle-password" type="button">
<svg className="lucide lucide-eye w-4 h-4" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</div>

<div className="flex items-center justify-between">
<label className="flex items-center cursor-pointer">
<input className="w-4 h-4 text-indigo-600 border-white/10 bg-gray-700 rounded focus:ring-indigo-500 focus:ring-2 transition-all duration-200" type="checkbox"/>
<span className="ml-2 text-sm text-gray-300">Remember me for 30 days</span>
</label>
<a className="text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors hover:underline" href="#">
            Forgot password?
          </a>
</div>

<button className="ripple w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-xl font-medium hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" id="submit-btn" type="submit">
<span className="">Sign in securely</span>
<svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>

<div className="flex items-center gap-2 text-xs text-gray-300 bg-gray-700/50 p-3 rounded-lg border border-white/10">
<svg className="lucide lucide-info w-4 h-4 text-indigo-400" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<span>Your connection is secured with 256-bit SSL encryption</span>
</div>

<div className="relative">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-white/10"></div>
</div>
<div className="relative flex justify-center text-sm">
<span className="px-3 bg-gray-800 text-gray-300 font-medium">Or continue with</span>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<button className="ripple flex items-center justify-center px-4 py-3 border border-white/10 rounded-xl hover:bg-gray-700 transition-all duration-200 hover:border-white/10 hover:-translate-y-0.5 hover:shadow-md group" type="button">
<svg className="lucide lucide-github w-5 h-5 text-gray-200 group-hover:text-white transition-colors" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
<span className="ml-2 text-sm font-medium text-gray-200 group-hover:text-white transition-colors">GitHub</span>
</button>
<button className="ripple flex items-center justify-center px-4 py-3 border border-white/10 rounded-xl hover:bg-gray-700 transition-all duration-200 hover:border-white/10 hover:-translate-y-0.5 hover:shadow-md group" type="button">
<svg className="lucide lucide-chrome w-5 h-5 text-gray-200 group-hover:text-indigo-400 transition-colors" data-lucide="chrome" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" x2="12" y1="8" y2="8"></line><line x1="3.95" x2="8.54" y1="6.06" y2="14"></line><line x1="10.88" x2="15.46" y1="21.94" y2="14"></line></svg>
<span className="ml-2 text-sm font-medium text-gray-200 group-hover:text-indigo-400 transition-colors">Google</span>
</button>
</div>
</form>
</div>

<div className="text-center mt-6 fade-in" style={{animationDelay: '0.4s'}}>
<p className="text-sm text-gray-300">
        Don't have an account? 
        <a className="text-indigo-400 font-medium hover:text-indigo-300 transition-colors hover:underline" href="#">
          Start your free trial
        </a>
</p>
</div>

<div className="flex items-center justify-center gap-6 mt-8 text-xs text-gray-400 fade-in flex-wrap" style={{animationDelay: '0.6s'}}>
<div className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-gray-800 hover:shadow-sm transition-all duration-200">
<svg className="lucide lucide-shield-check w-4 h-4 text-green-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span>SOC 2 Certified</span>
</div>
<div className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-gray-800 hover:shadow-sm transition-all duration-200">
<svg className="lucide lucide-lock w-4 h-4 text-indigo-400" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span>256-bit SSL</span>
</div>
<div className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-gray-800 hover:shadow-sm transition-all duration-200">
<svg className="lucide lucide-users w-4 h-4 text-purple-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span>125k+ teams</span>
</div>
</div>
</div>


    </>
  );
}
