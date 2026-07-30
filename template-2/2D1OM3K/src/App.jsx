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



    // Initialize Lucide icons
    lucide.createIcons();

    // Three.js animated background
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg-canvas'), alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create animated gradient geometry
    const geometry = new THREE.PlaneGeometry(20, 20, 32, 32);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec2 resolution;
        varying vec2 vUv;
        
        void main() {
          vec2 uv = vUv;
          float wave1 = sin(uv.x * 3.0 + time * 0.5) * 0.5 + 0.5;
          float wave2 = sin(uv.y * 2.0 + time * 0.3) * 0.5 + 0.5;
          float wave3 = sin((uv.x + uv.y) * 1.5 + time * 0.7) * 0.5 + 0.5;
          
          vec3 color1 = vec3(0.7, 0.9, 1.0);
          vec3 color2 = vec3(0.9, 0.7, 1.0);
          vec3 color3 = vec3(1.0, 0.8, 0.9);
          
          vec3 finalColor = mix(color1, color2, wave1);
          finalColor = mix(finalColor, color3, wave2 * wave3);
          
          gl_FragColor = vec4(finalColor, 0.3);
        }
      `
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);
      material.uniforms.time.value += 0.01;
      renderer.render(scene, camera);
    }
    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Animation sequences
    function animateIn() {
      const title = document.getElementById('title');
      const subtitle = document.getElementById('subtitle');
      const chatContainer = document.getElementById('chat-container');
      const suggestionCards = document.querySelectorAll('.suggestion-card');

      // Animate title
      setTimeout(() => {
        title.style.transition = 'all 0.8s ease-out';
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
      }, 200);

      // Animate subtitle
      setTimeout(() => {
        subtitle.style.transition = 'all 0.8s ease-out';
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
      }, 400);

      // Animate chat container
      setTimeout(() => {
        chatContainer.style.transition = 'all 0.8s ease-out';
        chatContainer.style.opacity = '1';
        chatContainer.style.transform = 'translateY(0)';
      }, 600);

      // Animate suggestion cards
      suggestionCards.forEach((card, index) => {
        setTimeout(() => {
          card.style.transition = 'all 0.6s ease-out';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 800 + index * 100);
      });
    }

    // Typing animation for chat input
    const chatInput = document.getElementById('chat-input');
    const messages = [
      'How can I improve my productivity?',
      'Explain machine learning concepts',
      'Help me plan a marketing strategy',
      'Create a workout routine for beginners',
      'Write a poem about technology'
    ];

    let currentMessageIndex = 0;
    let currentCharIndex = 0;
    let isTyping = true;

    function typeMessage() {
      const currentMessage = messages[currentMessageIndex];
      
      if (isTyping) {
        if (currentCharIndex < currentMessage.length) {
          chatInput.value = currentMessage.substring(0, currentCharIndex + 1);
          currentCharIndex++;
          setTimeout(typeMessage, 50);
        } else {
          isTyping = false;
          setTimeout(typeMessage, 2000);
        }
      } else {
        if (currentCharIndex > 0) {
          chatInput.value = currentMessage.substring(0, currentCharIndex - 1);
          currentCharIndex--;
          setTimeout(typeMessage, 30);
        } else {
          isTyping = true;
          currentMessageIndex = (currentMessageIndex + 1) % messages.length;
          setTimeout(typeMessage, 500);
        }
      }
    }

    // Suggestion card click handlers
    document.querySelectorAll('.suggestion-card').forEach(card => {
      card.addEventListener('click', () => {
        const text = card.querySelector('p').textContent;
        chatInput.value = text;
        chatInput.focus();
      });
    });

    // Send button functionality
    document.getElementById('send-btn').addEventListener('click', () => {
      const message = chatInput.value.trim();
      if (message) {
        // Simulate sending message
        chatInput.value = '';
        chatInput.placeholder = 'Message sent! Type another...';
        setTimeout(() => {
          chatInput.placeholder = 'Type your message here...';
        }, 2000);
      }
    });

    // Start animations
    window.addEventListener('load', () => {
      animateIn();
      setTimeout(typeMessage, 1500);
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
      
<canvas id="bg-canvas"></canvas>
<div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">

<div className="max-w-4xl w-full text-center">

<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 tracking-tight opacity-0 transform translate-y-8" id="title">
        Chat with AI
      </h1>

<h2 className="text-lg sm:text-xl lg:text-2xl font-normal text-gray-600 mb-12 max-w-2xl mx-auto opacity-0 transform translate-y-8" id="subtitle">
        Experience the future of conversation with our intelligent AI assistant
      </h2>

<div className="relative max-w-2xl mx-auto mb-12 opacity-0 transform translate-y-8" id="chat-container">
<div className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-6 hover:shadow-xl transition-all duration-300">
<div className="flex items-center space-x-3 mb-4">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="bot"></i>
</div>
<span className="text-sm font-medium text-gray-700">AI Assistant</span>
<div className="flex space-x-1 ml-auto">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: `0.2s`}}></div>
<div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{animationDelay: `0.4s`}}></div>
</div>
</div>
<div className="relative">
<textarea className="w-full h-24 p-4 bg-gray-50 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500" id="chat-input" placeholder="Type your message here..."></textarea>
<button className="absolute bottom-3 right-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105" id="send-btn">
<i className="w-4 h-4" data-lucide="send"></i>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto" id="suggestions">
<div className="suggestion-card opacity-0 transform translate-y-8 bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:bg-white/80 hover:shadow-lg transition-all duration-300 cursor-pointer">
<div className="flex items-center space-x-3 mb-3">
<div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="lightbulb"></i>
</div>
<span className="font-medium text-gray-800">Creative Writing</span>
</div>
<p className="text-sm text-gray-600">Help me write a compelling story about space exploration</p>
</div>
<div className="suggestion-card opacity-0 transform translate-y-8 bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:bg-white/80 hover:shadow-lg transition-all duration-300 cursor-pointer">
<div className="flex items-center space-x-3 mb-3">
<div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="code"></i>
</div>
<span className="font-medium text-gray-800">Programming</span>
</div>
<p className="text-sm text-gray-600">Explain React hooks and provide practical examples</p>
</div>
<div className="suggestion-card opacity-0 transform translate-y-8 bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:bg-white/80 hover:shadow-lg transition-all duration-300 cursor-pointer">
<div className="flex items-center space-x-3 mb-3">
<div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="brain"></i>
</div>
<span className="font-medium text-gray-800">Problem Solving</span>
</div>
<p className="text-sm text-gray-600">Break down complex problems into manageable steps</p>
</div>
<div className="suggestion-card opacity-0 transform translate-y-8 bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:bg-white/80 hover:shadow-lg transition-all duration-300 cursor-pointer">
<div className="flex items-center space-x-3 mb-3">
<div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="book-open"></i>
</div>
<span className="font-medium text-gray-800">Learning</span>
</div>
<p className="text-sm text-gray-600">Teach me about quantum computing in simple terms</p>
</div>
<div className="suggestion-card opacity-0 transform translate-y-8 bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:bg-white/80 hover:shadow-lg transition-all duration-300 cursor-pointer">
<div className="flex items-center space-x-3 mb-3">
<div className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="trending-up"></i>
</div>
<span className="font-medium text-gray-800">Analysis</span>
</div>
<p className="text-sm text-gray-600">Analyze market trends for emerging technologies</p>
</div>
<div className="suggestion-card opacity-0 transform translate-y-8 bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:bg-white/80 hover:shadow-lg transition-all duration-300 cursor-pointer">
<div className="flex items-center space-x-3 mb-3">
<div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-500 rounded-lg flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="heart"></i>
</div>
<span className="font-medium text-gray-800">Wellness</span>
</div>
<p className="text-sm text-gray-600">Suggest a balanced daily routine for productivity</p>
</div>
</div>
</div>
</div>


    </>
  );
}
